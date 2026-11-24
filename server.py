#!/usr/bin/env python3
"""Burhān Local Helper Server (port 5179, standard library only).

Serves the static Burhān site AND powers the on-page AI Guide & Scribe:
- Works seamlessly from both `http://localhost:5179/` AND `https://damandam.github.io/burhan/` (via full CORS + Private Network headers).
- Supports multiple AI providers directly from the website UI:
  1. **Claude** (`claude` CLI subscription login, or Anthropic API key)
  2. **Gemini** (Google Gemini API key pool in `~/.config/burhan/gemini_key` / `gemini_keys` + Vertex fallback, or `gemini` CLI)
  3. **ChatGPT** (`codex` CLI subscription login, or OpenAI API key in `~/.config/burhan/openai_key`)
- Executes all Burhān data tools (`search`, `card`, `sections`) and live browser UI tools
  (`look`, `find`, `goto`, `open_proof`, `pick_branch`, `circle`, `point`, `isolate`, `clear`, `say`,
   `canvas_show`, `canvas_drop`, `canvas_go`, `canvas_close`) via `/ui/events`, `/ui/push`, `/ui/ack`.
"""
import argparse
import functools
import http.server
import json
import os
import queue
import re
import shutil
import subprocess
import sys
import tempfile
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
import uuid

ROOT = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(ROOT, 'mcp'))
import burhan_server as mcp_srv  # noqa: E402

CONFIG_DIR = os.path.expanduser('~/.config/burhan')
ATLAS_CONFIG_DIR = os.path.expanduser('~/.config/isnad-atlas')
CLAUDE_CWD = os.path.expanduser('~/.cache/burhan-claude')
MCP_JSON = os.path.join(ROOT, 'mcp', 'burhan.json')
CLIENT_ID = re.compile(r'^[A-Za-z0-9_-]{4,64}$')
SESSION_ID = re.compile(r'^[0-9a-fA-F-]{8,64}$')
PORT = {'n': 5179}
run_slots = threading.Semaphore(2)

# Store conversational memory per session ID for Gemini / OpenAI API runs
SESSIONS = {}
sessions_lock = threading.Lock()

TOOL_LABEL = {
    'search': lambda a: f"Searching “{a.get('query', '')}”",
    'card': lambda a: f"Reading card “{str(a.get('path', '')).split('/')[-1]}”",
    'sections': lambda a: f"Browsing section “{a.get('path') or 'doors'}”",
    'goto': lambda a: f"Opening “{str(a.get('path', '')).split('/')[-1]}” on screen",
    'open_proof': lambda a: 'Closing proof drawer' if a.get('close') else f"Opening Full proof (step {a.get('step') or a.get('words') or 1})",
    'open_shot': lambda a: 'Closing scan lightbox' if a.get('close') else f"Enlarging primary scan ({a.get('words') or ('#' + str(a.get('index') or 1))})",
    'scroll': lambda a: f"Scrolling to {a.get('target') or a.get('direction') or 'view'}",
    'go_back': lambda a: 'Going back one level',
    'pick_branch': lambda a: f"Expanding branch {a.get('branch') or a.get('words') or 'A'}",
    'circle': lambda a: 'Circling ' + str(a.get('label') or a.get('target', '')),
    'point': lambda a: 'Pointing at ' + str(a.get('label') or a.get('target', '')),
    'isolate': lambda a: 'Spotlighting ' + str(a.get('label') or ', '.join(a.get('targets') or [])),
    'clear': lambda a: 'Clearing the marks',
    'say': lambda a: 'Speaking in the scribe bubble',
    'look': lambda a: 'Inspecting what is on your screen',
    'find': lambda a: f"Finding “{str(a.get('words', ''))[:40]}” on the page",
    'canvas_show': lambda a: f"Drawing the canvas ({len(a.get('steps') or [])} step{'s' if len(a.get('steps') or []) != 1 else ''}{', added' if a.get('append') else ''})",
    'canvas_drop': lambda a: 'Removing steps from the canvas',
    'canvas_go': lambda a: f"Canvas: step {a.get('step')}",
    'canvas_close': lambda a: 'Closing the canvas',
}


def env_with_paths():
    sep = os.pathsep
    extra = [os.path.expanduser('~/.local/bin'), os.path.expanduser('~/.npm-global/bin')]
    if os.name == 'nt':
        appdata = os.environ.get('APPDATA', '')
        localapp = os.environ.get('LOCALAPPDATA', '')
        if appdata:
            extra.append(os.path.join(appdata, 'npm'))
        if localapp:
            extra.append(os.path.join(localapp, 'Programs', 'claude'))
    else:
        extra += ['/opt/homebrew/bin', '/usr/local/bin']
    return dict(os.environ, PATH=os.environ.get('PATH', '') + sep + sep.join(extra))


def find_bin(name, env_var=None):
    path_str = env_with_paths()['PATH']
    candidates = [
        os.environ.get(env_var) if env_var else None,
        shutil.which(name, path=path_str),
    ]
    if os.name == 'nt':
        for ext in ('.exe', '.cmd', '.bat'):
            candidates.append(shutil.which(name + ext, path=path_str))
            candidates.append(os.path.expanduser(f'~/.local/bin/{name}{ext}'))
            appdata = os.environ.get('APPDATA', '')
            if appdata:
                candidates.append(os.path.join(appdata, 'npm', name + ext))
    else:
        candidates += [
            os.path.expanduser(f'~/.local/bin/{name}'),
            os.path.expanduser(f'~/.npm-global/bin/{name}'),
            f'/opt/homebrew/bin/{name}',
            f'/usr/local/bin/{name}',
        ]
    for p in candidates:
        if p and os.path.isfile(p) and (os.name == 'nt' or os.access(p, os.X_OK)):
            return p
    return None


def claude_env(account='default'):
    env = env_with_paths()
    own_dir = os.path.join(CONFIG_DIR, 'claude')
    atlas_dir = os.path.join(ATLAS_CONFIG_DIR, 'claude')
    if account == 'alt' and os.path.isdir(atlas_dir):
        env['CLAUDE_CONFIG_DIR'] = atlas_dir
    elif os.path.isdir(own_dir):
        env['CLAUDE_CONFIG_DIR'] = own_dir
    return env


def read_keys(names, dirs=(CONFIG_DIR, ATLAS_CONFIG_DIR)):
    keys = []
    for d in dirs:
        for name in names:
            p = os.path.join(d, name)
            if os.path.isfile(p):
                try:
                    for line in open(p, encoding='utf-8'):
                        k = line.strip()
                        if k and not k.startswith('#'):
                            keys.append(k)
                except OSError:
                    pass
    return list(dict.fromkeys(keys))


def gemini_keys():
    return read_keys(('gemini_key', 'gemini_keys'))


def openai_keys():
    return read_keys(('openai_key', 'openai_keys'))


def anthropic_keys():
    return read_keys(('anthropic_key', 'anthropic_keys'))


health_memo = {'at': 0.0, 'v': None}


def all_health(force=False):
    if not force and time.time() - health_memo['at'] < 25 and health_memo['v']:
        return health_memo['v']

    # 1. Claude status
    cb = find_bin('claude', 'BURHAN_CLAUDE')
    claude_st = {'cli': bool(cb), 'loggedIn': False, 'version': None, 'email': None, 'plan': None, 'apiKey': bool(anthropic_keys())}
    if cb:
        try:
            claude_st['version'] = subprocess.run([cb, '--version'], capture_output=True, text=True, timeout=10, env=claude_env()).stdout.strip()
            st = subprocess.run([cb, 'auth', 'status'], capture_output=True, text=True, timeout=10, env=claude_env())
            m = re.search(r'\{[\s\S]*\}', st.stdout or '')
            j = json.loads(m.group(0)) if m else {}
            claude_st['loggedIn'] = bool(j.get('loggedIn'))
            claude_st['email'] = j.get('email')
            claude_st['plan'] = j.get('subscriptionType')
        except Exception:
            claude_st['loggedIn'] = None

    # 2. Gemini status
    gb = find_bin('gemini', 'BURHAN_GEMINI')
    gkeys = gemini_keys()
    gemini_st = {
        'cli': bool(gb),
        'keys': len(gkeys),
        'ready': bool(gkeys or gb),
        'activeKeyPrefix': (gkeys[0][:10] + '…') if gkeys else None,
    }

    # 3. ChatGPT / Codex status
    xb = find_bin('codex', 'BURHAN_CODEX')
    okeys = openai_keys()
    chatgpt_st = {
        'cli': bool(xb),
        'keys': len(okeys),
        'ready': bool(xb or okeys),
        'activeKeyPrefix': (okeys[0][:8] + '…') if okeys else None,
    }

    default_provider = 'claude' if (claude_st['loggedIn'] or claude_st['apiKey']) else ('gemini' if gemini_st['ready'] else ('chatgpt' if chatgpt_st['ready'] else 'gemini'))
    v = {
        'ok': True,
        'server': f"http://127.0.0.1:{PORT['n']}",
        'cards': len(mcp_srv.load_db()['cards']),
        'defaultProvider': default_provider,
        'cli': claude_st['cli'],
        'loggedIn': claude_st['loggedIn'],
        'version': claude_st['version'],
        'providers': {
            'claude': claude_st,
            'gemini': gemini_st,
            'chatgpt': chatgpt_st,
        },
    }
    health_memo.update(at=time.time(), v=v)
    return v


def save_key(provider, key):
    os.makedirs(CONFIG_DIR, exist_ok=True)
    fname = {'gemini': 'gemini_key', 'chatgpt': 'openai_key', 'openai': 'openai_key', 'claude': 'anthropic_key'}.get(provider, 'gemini_key')
    p = os.path.join(CONFIG_DIR, fname)
    with open(p, 'w', encoding='utf-8') as f:
        f.write(key.strip() + '\n')
    os.chmod(p, 0o600)
    health_memo['at'] = 0


def trigger_login(provider):
    """Triggers interactive OAuth login for Claude, Gemini, or ChatGPT/Codex on the local Mac."""
    health_memo['at'] = 0
    if provider == 'claude':
        cb = find_bin('claude', 'BURHAN_CLAUDE')
        if not cb:
            return {'ok': False, 'message': 'Claude Code CLI is not installed yet. Run in Terminal: curl -fsSL https://claude.ai/install.sh | bash'}
        subprocess.Popen([cb, 'auth', 'login'], env=claude_env(), stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        return {'ok': True, 'message': 'Browser login opened for Claude! Complete sign-in in your browser tab, then click Check Status.'}
    if provider == 'chatgpt':
        xb = find_bin('codex', 'BURHAN_CODEX')
        if xb:
            subprocess.Popen([xb, 'login'], env=env_with_paths(), stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            return {'ok': True, 'message': 'Browser login opened for ChatGPT (Codex CLI)! Complete sign-in in your browser.'}
        return {'ok': False, 'message': 'Paste your OpenAI API key (sk-...) below, or install Codex CLI (`npm i -g @openai/codex`) for ChatGPT Plus/Pro OAuth login.'}
    if provider == 'gemini':
        gb = find_bin('gemini', 'BURHAN_GEMINI')
        if gb:
            subprocess.Popen([gb], env=env_with_paths(), stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            return {'ok': True, 'message': 'Opened Gemini CLI login.'}
        return {'ok': True, 'message': f'Gemini is already connected with {len(gemini_keys())} key(s) in ~/.config/burhan/! You can also paste a new Gemini key below.'}
    return {'ok': False, 'message': f'Unknown provider {provider}'}


# ---------- UI Event Bus (/ui/events, /ui/push, /ui/ack) ----------
ui_clients, ui_waits, ui_lock = {}, {}, threading.Lock()


def ui_events(handler, client):
    handler.send_response(200)
    handler.send_header('Content-Type', 'text/event-stream; charset=utf-8')
    handler.send_header('Cache-Control', 'no-cache')
    handler.end_headers()
    me = {'q': queue.Queue()}
    with ui_lock:
        old = ui_clients.get(client)
        ui_clients[client] = me
    if old:
        old['q'].put(None)
    try:
        handler.wfile.write(b'retry: 2000\n\n')
        handler.wfile.flush()
        while True:
            try:
                ev = me['q'].get(timeout=15)
            except queue.Empty:
                handler.wfile.write(b': ping\n\n')
                handler.wfile.flush()
                continue
            if ev is None:
                break
            handler.wfile.write(f'data: {json.dumps(ev, ensure_ascii=False)}\n\n'.encode('utf-8'))
            handler.wfile.flush()
    except (BrokenPipeError, ConnectionResetError, OSError):
        pass
    finally:
        with ui_lock:
            if ui_clients.get(client) is me:
                del ui_clients[client]


def ui_push(client, action, args, wait=8):
    if not re.fullmatch(r'[a-z_]{2,24}', action):
        return {'ok': False, 'note': 'bad action'}
    with ui_lock:
        targets = [c for k, c in ui_clients.items() if not client or k == client]
        if not targets and ui_clients:
            targets = list(ui_clients.values())
    if not targets:
        return {'ok': False, 'note': 'no Burhān browser tab is connected to /ui/events right now'}
    eid = uuid.uuid4().hex
    w = {'ev': threading.Event(), 'res': None}
    ui_waits[eid] = w
    for c in targets:
        c['q'].put({'id': eid, 'action': action, 'args': args})
    w['ev'].wait(wait)
    ui_waits.pop(eid, None)
    return w['res'] or {'ok': True, 'note': 'sent to the page; it did not confirm in time'}


def ui_ack(eid, res):
    w = ui_waits.get(eid)
    if w:
        w['res'] = {k: v for k, v in res.items() if k != 'id'}
        w['ev'].set()


def execute_tool_direct(name, args, client):
    """Executes any Burhān MCP tool directly in-process (for Gemini / OpenAI / Anthropic API runs)."""
    if name in ('search', 'card', 'sections'):
        fn = mcp_srv.TOOL[name][4]
        return fn(args or {})
    wait = 12 if name == 'goto' else (10 if name == 'canvas_show' else 8)
    return ui_push(client, name, args or {}, wait=wait)


# ---------- Provider 1: Claude Code CLI ----------
GUIDE_MODEL = os.environ.get('BURHAN_CLAUDE_MODEL') or 'claude-sonnet-4-5'


def mcp_config(client):
    cfg = json.load(open(MCP_JSON, encoding='utf-8'))
    srv = cfg['mcpServers']['burhan']
    srv['command'] = sys.executable or shutil.which('python3') or shutil.which('python') or '/opt/homebrew/bin/python3'
    srv['args'] = ['-I', os.path.join(ROOT, 'mcp', 'burhan_server.py')]
    srv['env'] = dict(srv.get('env') or {}, BURHAN_URL=f"http://127.0.0.1:{PORT['n']}", BURHAN_CLIENT=client or '')
    return json.dumps(cfg)


def claude_trouble(text):
    t = (text or '').lower()
    if re.search(r'requires usage credits|switch to another model|not available on your plan|model .* not (available|supported)', t):
        return 'model', 'This Claude model requires usage credits on your plan. ' + (text or '').strip()[:160]
    if re.search(r'not logged in|please run /login|/login|invalid api key|authentication|oauth token|log in to', t):
        health_memo['at'] = 0
        return 'login', 'Claude is not logged in. Click “Login with Claude” in the Guide header (or switch to Gemini).'
    if re.search(r'usage limit|limit reached|hit your limit|session limit|limit will reset|resets at|resets \d|out of usage|weekly limit|5-hour limit', t):
        when = re.search(r'resets? (?:at )?([0-9:]+\s*[ap]m[^·\n]*)', text or '', re.I)
        return 'limit', 'Your Claude plan limit is reached' + (f' until {when.group(1).strip()}.' if when else ' for now.') + ' Falling back to Gemini or switch provider above!'
    return 'other', (text or 'Claude stopped without an answer').strip()[-400:]


def claude_cli_run(prompt, system, client, emit, session='', account='default'):
    b = find_bin('claude', 'BURHAN_CLAUDE')
    if not b:
        return {'type': 'error', 'kind': 'missing', 'message': 'Claude CLI is not installed on this Mac.'}
    os.makedirs(CLAUDE_CWD, exist_ok=True)
    cmd = [
        b, '-p', '--output-format', 'stream-json', '--verbose', '--include-partial-messages',
        '--mcp-config', mcp_config(client), '--strict-mcp-config', '--allowedTools', 'mcp__burhan', '--tools', '',
        '--disable-slash-commands', '--system-prompt', system,
    ]
    if session and re.fullmatch(r'[0-9a-fA-F-]{36}', session):
        cmd += ['--resume', session]
    env = claude_env(account)
    proc, last, err = None, None, []
    try:
        proc = subprocess.Popen(cmd, cwd=CLAUDE_CWD, env=env, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, bufsize=1)
        threading.Thread(target=lambda: err.extend(proc.stderr.read().splitlines()[-20:]), daemon=True).start()
        proc.stdin.write(prompt)
        proc.stdin.close()
        streamed, limit = False, None
        for line in proc.stdout:
            try:
                m = json.loads(line)
            except ValueError:
                continue
            t = m.get('type')
            if t == 'system' and m.get('subtype') == 'init':
                srv = next((s for s in m.get('mcp_servers', []) if s.get('name') == 'burhan'), {})
                emit({'type': 'session', 'id': m.get('session_id'), 'model': m.get('model'), 'provider': 'claude', 'mcp': srv.get('status')})
            elif t == 'stream_event':
                e = m.get('event') or {}
                if e.get('type') == 'content_block_delta' and (e.get('delta') or {}).get('type') == 'text_delta':
                    streamed = True
                    emit({'type': 'text', 'text': e['delta'].get('text', '')})
                elif e.get('type') == 'message_start':
                    streamed = False
            elif t == 'assistant':
                for c in (m.get('message') or {}).get('content', []):
                    if c.get('type') == 'tool_use':
                        name = c.get('name', '').replace('mcp__burhan__', '')
                        a = c.get('input') or {}
                        try:
                            label = TOOL_LABEL[name](a) if name in TOOL_LABEL else name
                        except Exception:
                            label = name
                        emit({'type': 'tool', 'name': name, 'label': label[:160]})
                    elif c.get('type') == 'text' and not streamed and c.get('text'):
                        emit({'type': 'text', 'text': c['text']})
            elif t == 'rate_limit_event':
                info = m.get('rate_limit_info') or {}
                if info.get('status') == 'rejected':
                    limit = info.get('resetsAt')
            elif t == 'result':
                if m.get('is_error') or m.get('subtype') != 'success':
                    kind, msg = claude_trouble(m.get('result') or ' '.join(m.get('errors') or []) or m.get('subtype'))
                    if limit and kind == 'limit' and 'until' not in msg:
                        kind, msg = 'limit', 'Your Claude plan limit is reached until ' + time.strftime('%H:%M', time.localtime(limit)) + '.'
                    last = {'type': 'error', 'kind': kind, 'message': msg, 'session': m.get('session_id')}
                else:
                    last = {'type': 'done', 'text': m.get('result') or '', 'session': m.get('session_id'), 'cost': m.get('total_cost_usd'),
                            'turns': m.get('num_turns'), 'ms': m.get('duration_ms'), 'provider': 'claude'}
                emit(last)
        proc.wait(timeout=30)
        if last is None:
            time.sleep(0.2)
            kind, msg = claude_trouble('\n'.join(err))
            last = {'type': 'error', 'kind': kind, 'message': msg}
            emit(last)
        return last
    except Exception as ex:
        if proc and proc.poll() is None:
            proc.kill()
        return {'type': 'error', 'kind': 'stopped', 'message': f'{type(ex).__name__}: {str(ex)[:200]}'}


# ---------- Provider 2: Gemini (Multi-Key Pool + Full MCP Tool-Calling Loop) ----------
GEMINI_MODELS = [
    'gemini-3.6-flash',
    'gemini-3.5-flash',
    'gemini-3.8-flash',
    'gemini-3-flash-preview',
    'gemini-3.5-flash-lite',
    'gemini-3.1-flash-lite',
    'gemini-flash-latest',
]


def gemini_tool_declarations():
    decls = []
    for name, desc, props, req, _ in mcp_srv.TOOLS:
        decls.append({
            'name': name,
            'description': desc,
            'parameters': {'type': 'object', 'properties': props, **({'required': req} if req else {})},
        })
    return [{'functionDeclarations': decls}]


def gemini_call_once(contents, system, custom_key=None):
    # Put custom key + AQ. key first; rotate pool keys per call so rate-limited keys are skipped immediately
    raw_keys = ([custom_key.strip()] if custom_key and custom_key.strip() else []) + gemini_keys()
    keys = list(dict.fromkeys(raw_keys))
    if not keys:
        raise RuntimeError('No Gemini API key configured. Paste a Gemini key in the Guide panel.')
    body = {
        'systemInstruction': {'parts': [{'text': system}]},
        'contents': contents,
        'tools': gemini_tool_declarations(),
        'generationConfig': {'temperature': 0.2},
    }
    data = json.dumps(body, ensure_ascii=False).encode('utf-8')
    last_err = 'No Gemini model responded'
    for model in GEMINI_MODELS:
        for key in keys[:4]:
            url = f'https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={urllib.parse.quote(key)}'
            try:
                req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
                with urllib.request.urlopen(req, timeout=14) as r:
                    res = json.loads(r.read().decode('utf-8'))
                cand = (res.get('candidates') or [None])[0]
                if cand and cand.get('content'):
                    return cand['content'], model
            except urllib.error.HTTPError as e:
                msg = e.read().decode('utf-8', 'replace')[:220]
                last_err = f'{model} HTTP {e.code}: {msg}'
                if e.code in (400, 404, 503):
                    break  # Model unavailable or overloaded -> immediately jump to next model
                continue
            except Exception as e:
                last_err = f'{model}: {e}'
                break  # Timeout on this model -> try next model immediately
    raise RuntimeError(last_err)


def gemini_run(prompt, system, client, emit, session='', api_key=None):
    t0 = time.time()
    sid = session if (session and SESSION_ID.match(session)) else uuid.uuid4().hex
    with sessions_lock:
        hist = list(SESSIONS.get(sid, []))
    hist.append({'role': 'user', 'parts': [{'text': prompt}]})
    emit({'type': 'session', 'id': sid, 'provider': 'gemini'})
    turns = 0
    full_text = ''
    try:
        for turn in range(10):
            turns += 1
            content, used_model = gemini_call_once(hist, system, custom_key=api_key)
            parts = content.get('parts') or []
            # Keep raw parts (including thoughtSignature if any) in history
            hist.append({'role': 'model', 'parts': parts})
            fcalls = [p['functionCall'] for p in parts if 'functionCall' in p]
            for p in parts:
                if p.get('text') and not p.get('thought'):
                    txt = p['text']
                    full_text += txt
                    emit({'type': 'text', 'text': txt})
            if not fcalls:
                break
            fres_parts = []
            for fc in fcalls:
                name = fc.get('name', '')
                args = fc.get('args') or {}
                try:
                    label = TOOL_LABEL[name](args) if name in TOOL_LABEL else name
                except Exception:
                    label = name
                emit({'type': 'tool', 'name': name, 'label': label[:160]})
                res = execute_tool_direct(name, args, client)
                fres_parts.append({
                    'functionResponse': {
                        'name': name,
                        'response': res if isinstance(res, dict) else {'result': res},
                    }
                })
            hist.append({'role': 'user', 'parts': fres_parts})
        with sessions_lock:
            SESSIONS[sid] = hist[-24:]
        last = {'type': 'done', 'text': full_text, 'session': sid, 'turns': turns, 'ms': round((time.time() - t0) * 1000), 'provider': 'gemini'}
        emit(last)
        return last
    except Exception as ex:
        ev = {'type': 'error', 'kind': 'gemini', 'message': f'Gemini error: {str(ex)[:300]}'}
        emit(ev)
        return ev


# ---------- Provider 3: ChatGPT / OpenAI (Tool-Calling Loop) ----------
def openai_tool_declarations():
    out = []
    for name, desc, props, req, _ in mcp_srv.TOOLS:
        out.append({
            'type': 'function',
            'function': {
                'name': name,
                'description': desc,
                'parameters': {'type': 'object', 'properties': props, **({'required': req} if req else {})},
            },
        })
    return out


def openai_run(prompt, system, client, emit, session='', api_key=None):
    t0 = time.time()
    keys = ([api_key.strip()] if api_key and api_key.strip() else []) + openai_keys()
    if not keys:
        ev = {'type': 'error', 'kind': 'login', 'message': 'No ChatGPT / OpenAI key found. Paste your OpenAI key (sk-...) in the Guide login panel or switch to Claude / Gemini.'}
        emit(ev)
        return ev
    key = keys[0]
    sid = session if (session and SESSION_ID.match(session)) else uuid.uuid4().hex
    with sessions_lock:
        hist = list(SESSIONS.get(sid, []))
    if not hist:
        hist.append({'role': 'system', 'content': system})
    hist.append({'role': 'user', 'content': prompt})
    emit({'type': 'session', 'id': sid, 'provider': 'chatgpt'})
    turns = 0
    full_text = ''
    try:
        for _ in range(10):
            turns += 1
            body = {
                'model': os.environ.get('BURHAN_OPENAI_MODEL', 'gpt-4o'),
                'messages': hist,
                'tools': openai_tool_declarations(),
                'temperature': 0.2,
            }
            req = urllib.request.Request(
                'https://api.openai.com/v1/chat/completions',
                data=json.dumps(body).encode('utf-8'),
                headers={'Content-Type': 'application/json', 'Authorization': f'Bearer {key}'},
            )
            with urllib.request.urlopen(req, timeout=45) as r:
                res = json.loads(r.read().decode('utf-8'))
            msg = res['choices'][0]['message']
            hist.append(msg)
            if msg.get('content'):
                full_text += msg['content']
                emit({'type': 'text', 'text': msg['content']})
            tcalls = msg.get('tool_calls') or []
            if not tcalls:
                break
            for tc in tcalls:
                fn = tc.get('function') or {}
                name = fn.get('name', '')
                try:
                    args = json.loads(fn.get('arguments') or '{}')
                except ValueError:
                    args = {}
                try:
                    label = TOOL_LABEL[name](args) if name in TOOL_LABEL else name
                except Exception:
                    label = name
                emit({'type': 'tool', 'name': name, 'label': label[:160]})
                tres = execute_tool_direct(name, args, client)
                hist.append({
                    'role': 'tool',
                    'tool_call_id': tc.get('id'),
                    'content': json.dumps(tres, ensure_ascii=False),
                })
        with sessions_lock:
            SESSIONS[sid] = hist[-24:]
        last = {'type': 'done', 'text': full_text, 'session': sid, 'turns': turns, 'ms': round((time.time() - t0) * 1000), 'provider': 'chatgpt'}
        emit(last)
        return last
    except Exception as ex:
        ev = {'type': 'error', 'kind': 'chatgpt', 'message': f'ChatGPT / OpenAI error: {str(ex)[:300]}'}
        emit(ev)
        return ev


def gemini_cli_run(prompt, system, emit):
    t0 = time.time()
    gb = find_bin('gemini', 'BURHAN_GEMINI')
    if not gb:
        emit({'type': 'error', 'kind': 'missing', 'message': 'Gemini CLI not found. Install via `npm install -g @google/gemini-cli` and run `gemini` once to sign in with Google.'})
        return
    emit({'type': 'session', 'id': uuid.uuid4().hex, 'provider': 'gemini'})
    emit({'type': 'tool', 'name': 'provider', 'label': 'Asking Gemini CLI (Google subscription login)…'})
    full_prompt = f"{system}\n\n{prompt}"
    try:
        proc = subprocess.Popen([gb, '-p', full_prompt], env=env_with_paths(), stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, encoding='utf-8', errors='replace')
        out, err = proc.communicate(timeout=120)
        if proc.returncode != 0 and not out.strip():
            emit({'type': 'error', 'kind': 'gemini', 'message': (err or 'Gemini CLI error')[-300:]})
            return
        emit({'type': 'text', 'text': out.strip()})
        emit({'type': 'done', 'text': out.strip(), 'ms': round((time.time() - t0) * 1000), 'provider': 'gemini'})
    except Exception as ex:
        emit({'type': 'error', 'kind': 'gemini', 'message': f'Gemini CLI error: {str(ex)[:220]}'})


def codex_cli_run(prompt, system, emit):
    t0 = time.time()
    xb = find_bin('codex', 'BURHAN_CODEX')
    if not xb:
        emit({'type': 'error', 'kind': 'missing', 'message': 'Codex CLI not found. Install via `npm install -g @openai/codex` and run `codex login`.'})
        return
    emit({'type': 'session', 'id': uuid.uuid4().hex, 'provider': 'chatgpt'})
    emit({'type': 'tool', 'name': 'provider', 'label': 'Asking ChatGPT via Codex CLI (subscription login)…'})
    full_prompt = f"{system}\n\n{prompt}"
    try:
        proc = subprocess.Popen([xb, 'exec', full_prompt], env=env_with_paths(), stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, encoding='utf-8', errors='replace')
        out, err = proc.communicate(timeout=120)
        if proc.returncode != 0 and not out.strip():
            emit({'type': 'error', 'kind': 'chatgpt', 'message': (err or 'Codex CLI error')[-300:]})
            return
        emit({'type': 'text', 'text': out.strip()})
        emit({'type': 'done', 'text': out.strip(), 'ms': round((time.time() - t0) * 1000), 'provider': 'chatgpt'})
    except Exception as ex:
        emit({'type': 'error', 'kind': 'chatgpt', 'message': f'Codex CLI error: {str(ex)[:220]}'})


def prompt_file(name):
    return open(os.path.join(ROOT, 'mcp', name), encoding='utf-8').read()


def handle_ask(handler, req):
    question = str(req.get('question') or '').strip()[:4000]
    context = req.get('context') or {}
    session = str(req.get('session') or '')
    client = str(req.get('client') or '')
    provider = str(req.get('provider') or 'auto').lower()
    api_key = str(req.get('apiKey') or '').strip() or None

    handler.send_response(200)
    handler.send_header('Content-Type', 'text/event-stream; charset=utf-8')
    handler.send_header('Cache-Control', 'no-cache')
    handler.end_headers()

    def emit(ev):
        handler.wfile.write(f'data: {json.dumps(ev, ensure_ascii=False)}\n\n'.encode('utf-8'))
        handler.wfile.flush()

    if not run_slots.acquire(timeout=60):
        emit({'type': 'error', 'kind': 'busy', 'message': 'The Guide is busy with two other questions; try again in a moment.'})
        return
    try:
        ctx_str = json.dumps(context, ensure_ascii=False)[:4000] if context else '{}'
        prompt = f'The Burhān page currently open on Noel\'s screen (JSON): {ctx_str}\n\nUser asks: {question}'
        system = prompt_file('guide_prompt.md')

        h = all_health()
        if provider == 'auto':
            provider = h.get('defaultProvider') or 'gemini'

        if provider == 'claude':
            # Try default Claude login first; if rate-limited or not logged in, try alternate Claude config dir or auto-fallback to Gemini!
            held = []
            def first_emit(ev):
                if ev.get('type') == 'error' and ev.get('kind') in ('limit', 'login', 'missing', 'model'):
                    held.append(ev)
                else:
                    for x in held:
                        emit(x)
                    held.clear()
                    emit(ev)
            last = claude_cli_run(prompt, system, client, first_emit, session, account='default')
            if last and last.get('type') == 'error' and last.get('kind') in ('limit', 'login', 'model'):
                # Try alternate Claude login if available
                if os.path.isdir(os.path.join(ATLAS_CONFIG_DIR, 'claude')):
                    held.clear()
                    emit({'type': 'tool', 'name': 'provider', 'label': 'Switching to second Claude Pro login…'})
                    last = claude_cli_run(prompt, system, client, first_emit, '', account='alt')
                if last and last.get('type') == 'error' and gemini_keys():
                    held.clear()
                    emit({'type': 'tool', 'name': 'provider', 'label': f"Claude unavailable ({last.get('kind')}); seamless fallback to Gemini…"})
                    gemini_run(prompt, system, client, emit, '', api_key=api_key)
                    return
                for x in held:
                    emit(x)
            return

        if provider == 'chatgpt':
            xb = find_bin('codex', 'BURHAN_CODEX')
            if xb and not api_key and not openai_keys():
                codex_cli_run(prompt, system, emit)
                return
            openai_run(prompt, system, client, emit, session, api_key=api_key)
            return

        # Default / Gemini: prefer gemini CLI OAuth subscription if installed & no explicit custom key forced
        gb = find_bin('gemini', 'BURHAN_GEMINI')
        if gb and not api_key and not gemini_keys():
            gemini_cli_run(prompt, system, emit)
            return
        gemini_run(prompt, system, client, emit, session, api_key=api_key)
    finally:
        run_slots.release()


def canvas_pdf(html):
    node = find_bin('node') or '/opt/homebrew/bin/node'
    with tempfile.TemporaryDirectory() as d:
        src, out = os.path.join(d, 'canvas.html'), os.path.join(d, 'canvas.pdf')
        with open(src, 'w', encoding='utf-8') as f:
            f.write(html)
        r = subprocess.run([node, os.path.join(ROOT, 'build', 'canvas_pdf.mjs'), src, out], cwd=ROOT, env=env_with_paths(), capture_output=True, text=True, timeout=120)
        if r.returncode or not os.path.exists(out):
            raise RuntimeError((r.stderr or r.stdout or 'PDF generation failed')[-300:])
        with open(out, 'rb') as f:
            return f.read()


def allowed_origins():
    p = PORT['n']
    return {f'http://127.0.0.1:{p}', f'http://localhost:{p}', 'https://damandam.github.io'}


class Handler(http.server.SimpleHTTPRequestHandler):
    def _cors(self):
        origin = self.headers.get('Origin')
        if origin in allowed_origins():
            self.send_header('Access-Control-Allow-Origin', origin)
            self.send_header('Vary', 'Origin')
            self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
            self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
            self.send_header('Access-Control-Allow-Private-Network', 'true')

    def end_headers(self):
        self._cors()
        super().end_headers()

    def do_OPTIONS(self):
        origin = self.headers.get('Origin')
        if origin and origin not in allowed_origins():
            return self._json(403, {'error': 'forbidden origin'})
        self.send_response(204)
        self.end_headers()

    def _json(self, code, obj):
        body = json.dumps(obj, ensure_ascii=False).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _body(self):
        length = int(self.headers.get('Content-Length') or 0)
        return json.loads(self.rfile.read(length) or b'{}') if length else {}

    def do_GET(self):
        route = self.path.split('?')[0]
        qs = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
        if route == '/ask/health':
            force = (qs.get('force') or [''])[0] == '1'
            return self._json(200, all_health(force=force))
        if route == '/ui/events':
            client = (qs.get('client') or [''])[0]
            if not CLIENT_ID.match(client):
                return self._json(400, {'error': 'bad client'})
            return ui_events(self, client)
        return super().do_GET()

    def do_POST(self):
        origin = self.headers.get('Origin')
        if origin and origin not in allowed_origins():
            return self._json(403, {'error': 'forbidden origin'})
        route = self.path.split('?')[0]
        if route in ('/ask', '/ask/login', '/ask/key', '/ui/push', '/ui/ack'):
            try:
                req = self._body()
                if not isinstance(req, dict):
                    raise ValueError
            except (ValueError, TypeError):
                return self._json(400, {'error': 'bad request'})
            if route == '/ui/push':
                return self._json(200, ui_push(
                    str(req.get('client') or ''),
                    str(req.get('action') or ''),
                    req.get('args') or {},
                    min(20.0, max(0.5, float(req.get('wait') or 8))),
                ))
            if route == '/ui/ack':
                ui_ack(str(req.get('id') or ''), req)
                return self._json(200, {'ok': True})
            if route == '/ask/login':
                prov = str(req.get('provider') or 'claude').lower()
                return self._json(200, trigger_login(prov))
            if route == '/ask/key':
                prov = str(req.get('provider') or 'gemini').lower()
                key = str(req.get('key') or '').strip()
                if not key:
                    return self._json(400, {'ok': False, 'message': 'Empty key'})
                save_key(prov, key)
                return self._json(200, {'ok': True, 'message': f'Saved {prov} key to ~/.config/burhan/', 'health': all_health(force=True)})
            if route == '/ask':
                if not str(req.get('question') or '').strip():
                    return self._json(400, {'error': 'empty question'})
                return handle_ask(self, req)
        if route == '/booklet/pdf':
            try:
                html = self._body().get('html', '')
                if not isinstance(html, str) or len(html) > 8_000_000:
                    return self._json(400, {'error': 'invalid html'})
                pdf = canvas_pdf(html)
            except Exception as e:
                return self._json(500, {'error': str(e)[:300]})
            self.send_response(200)
            self.send_header('Content-Type', 'application/pdf')
            self.send_header('Content-Length', str(len(pdf)))
            self.end_headers()
            self.wfile.write(pdf)
            return
        return self._json(404, {'error': 'not found'})


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--port', type=int, default=5179)
    ap.add_argument('--host', type=str, default='127.0.0.1')
    ap.add_argument('--restart', action='store_true', help='Stop any existing server on the port and start a fresh one')
    args = ap.parse_args()
    PORT['n'] = args.port
    # Warm up the Burhān card index on startup
    db = mcp_srv.load_db()
    if args.restart:
        try:
            pids = subprocess.run(['lsof', '-ti', f':{args.port}'], capture_output=True, text=True).stdout.split()
            me = str(os.getpid())
            for pid in pids:
                if pid != me:
                    subprocess.run(['kill', '-9', pid], stderr=subprocess.DEVNULL)
            time.sleep(0.4)
        except Exception:
            pass
    try:
        srv = http.server.ThreadingHTTPServer((args.host, args.port), functools.partial(Handler, directory=ROOT))
    except OSError as e:
        if getattr(e, 'errno', None) in (48, 98):  # Address already in use
            print(f"✓ Burhān Helper Server is already running in the background at http://{args.host}:{args.port} ({len(db['cards'])} cards active)!", flush=True)
            print("  (Tip: Use 'python3 server.py --restart' if you want to restart it.)", flush=True)
            return
        raise
    print(f"Burhān Helper Server ready ({len(db['cards'])} cards indexed): http://{args.host}:{args.port}", flush=True)
    srv.serve_forever()


if __name__ == '__main__':
    main()
