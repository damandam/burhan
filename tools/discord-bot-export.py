#!/usr/bin/env python3
"""Burhān · Discord export through the official Discord API with your own bot.

Reads every text/announcement/forum channel, its active and archived public threads, all messages,
embeds and image attachments, and writes the same JSON shape as the old browser exporter
(~/Downloads/burhan-<name>.json), so tools/dump.js-style scripts keep working.
Images are saved to ~/Downloads/burhan-media/discord/<guild>/<channel>/.

Token: put DISCORD_BOT_TOKEN=... in ~/.config/burhan/discord.env (never in the repo).
The bot needs: Message Content Intent (Developer Portal › Bot), and View Channels + Read Message History.

Usage:
  python3 tools/discord-bot-export.py --list                      # servers the bot is in
  python3 tools/discord-bot-export.py --guild <id> --name averroes-2
  python3 tools/discord-bot-export.py --guild <id> --channel <id> # one channel (or thread / forum)
  options: --no-images  --out <file>
"""
import argparse, json, os, re, sys, time, urllib.request, urllib.error
from pathlib import Path

API = 'https://discord.com/api/v10'
CONF = Path.home() / '.config' / 'burhan' / 'discord.env'
HOME_DL = Path.home() / 'Downloads'
UA = 'BurhanExporter (local script, 1.0)'
TEXT, ANNOUNCE, FORUM, CATEGORY = 0, 5, 15, 4
THREAD_TYPES = (10, 11, 12)


def token():
    t = os.environ.get('DISCORD_BOT_TOKEN', '')
    if not t and CONF.exists():
        for line in CONF.read_text().splitlines():
            if line.strip().startswith('DISCORD_BOT_TOKEN='):
                t = line.split('=', 1)[1].strip().strip('"').strip("'")
    if not t:
        sys.exit(f'No bot token. Put DISCORD_BOT_TOKEN=<token> in {CONF} (chmod 600) and run again.')
    return t


TOKEN = None


def api(path, params=None):
    url = API + path
    if params:
        url += '?' + '&'.join(f'{k}={v}' for k, v in params.items() if v is not None)
    for attempt in range(8):
        req = urllib.request.Request(url, headers={'Authorization': 'Bot ' + TOKEN, 'User-Agent': UA})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                rem = r.headers.get('X-RateLimit-Remaining')
                data = json.loads(r.read().decode())
                if rem == '0':
                    time.sleep(float(r.headers.get('X-RateLimit-Reset-After', '1')))
                return data
        except urllib.error.HTTPError as e:
            body = e.read().decode(errors='replace')
            if e.code == 429:
                wait = json.loads(body).get('retry_after', 2)
                time.sleep(float(wait) + 0.2)
                continue
            if e.code in (403, 404):
                return None  # no access to this channel / gone
            if e.code == 401:
                sys.exit('Discord said 401: the bot token is wrong or was reset.')
            if 500 <= e.code < 600:
                time.sleep(2 * (attempt + 1)); continue
            raise RuntimeError(f'{e.code} on {path}: {body[:200]}')
        except urllib.error.URLError:
            time.sleep(2 * (attempt + 1))
    raise RuntimeError('Gave up on ' + path)


def safe(s):
    return re.sub(r'[^\w.-]+', '-', s or '').strip('-')[:60] or 'x'


def save_image(url, folder, name, enabled):
    if not enabled:
        return None
    folder.mkdir(parents=True, exist_ok=True)
    dest = folder / name
    if dest.exists():
        return str(dest)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': UA})
        with urllib.request.urlopen(req, timeout=120) as r:
            dest.write_bytes(r.read())
        return str(dest)
    except Exception as e:  # keep going; the URL is still recorded
        print(f'    ! image failed {name}: {e}', file=sys.stderr)
        return None


def messages(channel_id, media_dir, images):
    out, before = [], None
    while True:
        batch = api(f'/channels/{channel_id}/messages', {'limit': 100, 'before': before})
        if not batch:
            break
        for m in batch:
            imgs = []
            for i, a in enumerate(m.get('attachments', [])):
                ctype = a.get('content_type') or ''
                if ctype.startswith('image/') or re.search(r'\.(png|jpe?g|gif|webp)$', a.get('filename', ''), re.I):
                    ext = Path(a.get('filename', 'img.png')).suffix or '.png'
                    local = save_image(a['url'], media_dir, f"{m['id']}-{i}{ext}", images)
                    imgs.append({'url': a['url'], 'file': local, 'name': a.get('filename'), 'w': a.get('width'), 'h': a.get('height')})
                else:
                    imgs.append({'url': a['url'], 'file': None, 'name': a.get('filename'), 'kind': ctype or 'file'})
            for e in m.get('embeds', []):
                im = (e.get('image') or e.get('thumbnail') or {}).get('url')
                if im and e.get('type') == 'image':
                    imgs.append({'url': im, 'file': None, 'name': 'embed-image'})
            emb = [{'title': e.get('title'), 'desc': e.get('description'), 'url': e.get('url')} for e in m.get('embeds', []) if e.get('title') or e.get('description')]
            out.append({'id': m['id'], 'ts': m.get('timestamp'), 'author': (m.get('author') or {}).get('username'),
                        'text': m.get('content', ''), 'emb': emb or None, 'imgs': imgs,
                        'reply_to': (m.get('message_reference') or {}).get('message_id')})
        before = batch[-1]['id']
        if len(batch) < 100:
            break
    out.reverse()  # oldest first, like the browser exporter
    return out


def threads_of(guild_id, channel_id, active_by_parent):
    seen = {t['id']: t for t in active_by_parent.get(channel_id, [])}
    before = None
    while True:
        r = api(f'/channels/{channel_id}/threads/archived/public', {'limit': 100, 'before': before})
        if not r:
            break
        for t in r.get('threads', []):
            seen[t['id']] = t
        if not r.get('has_more') or not r.get('threads'):
            break
        before = r['threads'][-1]['thread_metadata']['archive_timestamp']
    return list(seen.values())


def export(guild_id, name, only_channel, images, out_file):
    guild = api(f'/guilds/{guild_id}') or {}
    gname = name or safe(guild.get('name', guild_id)).lower()
    chans = api(f'/guilds/{guild_id}/channels') or []
    cats = {c['id']: c['name'] for c in chans if c['type'] == CATEGORY}
    active = api(f'/guilds/{guild_id}/threads/active') or {'threads': []}
    active_by_parent = {}
    for t in active.get('threads', []):
        active_by_parent.setdefault(t.get('parent_id'), []).append(t)
    media_root = HOME_DL / 'burhan-media' / 'discord' / gname
    wanted = [c for c in chans if c['type'] in (TEXT, ANNOUNCE, FORUM)]
    if only_channel:
        wanted = [c for c in wanted if c['id'] == only_channel]
        if not wanted:  # maybe it is a thread id
            t = api(f'/channels/{only_channel}')
            if t and t.get('type') in THREAD_TYPES:
                wanted = [{'id': t['parent_id'], 'name': 'thread', 'type': TEXT, '_only_thread': t}]
    wanted.sort(key=lambda c: (c.get('parent_id') or '', c.get('position', 0)))
    result = {'guild': guild.get('name'), 'guild_id': guild_id, 'exported': time.strftime('%Y-%m-%d %H:%M'), 'channels': []}
    for c in wanted:
        print(f"# {cats.get(c.get('parent_id'), '')} / {c['name']} ({c['id']})", file=sys.stderr)
        entry = {'id': c['id'], 'name': c['name'], 'cat': cats.get(c.get('parent_id')), 'type': 'forum' if c['type'] == FORUM else 'text',
                 'messages': [], 'threads': []}
        if c.get('_only_thread'):
            t = c['_only_thread']
            entry['threads'].append({'id': t['id'], 'title': t['name'], 'messages': messages(t['id'], media_root / safe(t['name']), images)})
        else:
            if c['type'] != FORUM:
                entry['messages'] = messages(c['id'], media_root / safe(c['name']), images)
            for t in threads_of(guild_id, c['id'], active_by_parent):
                print(f"   › {t['name']}", file=sys.stderr)
                entry['threads'].append({'id': t['id'], 'title': t['name'],
                                         'messages': messages(t['id'], media_root / safe(c['name']) / safe(t['name']), images)})
        n_img = sum(len(m['imgs']) for m in entry['messages']) + sum(len(m['imgs']) for t in entry['threads'] for m in t['messages'])
        print(f"   {len(entry['messages'])} msgs, {len(entry['threads'])} threads, {n_img} attachments", file=sys.stderr)
        result['channels'].append(entry)
    out = Path(out_file) if out_file else HOME_DL / f'burhan-bot-{gname}.json'
    out.write_text(json.dumps(result, ensure_ascii=False, indent=1))
    print(f'Saved {out}  ({len(result["channels"])} channels). Images in {media_root}', file=sys.stderr)


def main():
    global TOKEN
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--list', action='store_true', help='list the servers the bot is in')
    ap.add_argument('--guild'); ap.add_argument('--name', help='short name for the output file')
    ap.add_argument('--channel', help='only this channel / forum / thread id')
    ap.add_argument('--no-images', action='store_true'); ap.add_argument('--out')
    a = ap.parse_args()
    TOKEN = token()
    if a.list:
        me = api('/users/@me') or {}
        print('Bot:', me.get('username'))
        for g in api('/users/@me/guilds') or []:
            print(f"{g['id']}  {g['name']}")
        return
    if not a.guild:
        ap.error('--guild <id> is required (see --list)')
    export(a.guild, a.name, a.channel, not a.no_images, a.out)


if __name__ == '__main__':
    main()
