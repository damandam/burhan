#!/usr/bin/env python3
"""The Burhān MCP Server (stdio, JSON-RPC 2.0, standard library only).

Provides AI agents (Claude Code CLI, Gemini / OpenAI tool loops, etc.) with:
1. Data tools over all 634 Burhān Tactical Debate Playbooks & Explainers (`search`, `card`, `sections`).
2. Live UI tools on the open Burhān browser page (`look`, `find`, `goto`, `open_proof`, `pick_branch`,
   `circle`, `point`, `isolate`, `clear`, `say`, `canvas_show`, `canvas_drop`, `canvas_go`, `canvas_close`)
   bridged via `POST /ui/push` on the local Burhān server (`server.py` on port 5179).
"""
import json
import math
import os
import re
import shutil
import subprocess
import sys
import threading
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BURHAN_URL = os.environ.get('BURHAN_URL', 'http://127.0.0.1:5179').rstrip('/')
CLIENT = os.environ.get('BURHAN_CLIENT', '')

_db_lock = threading.Lock()
_DB = None


def _fold(s):
    s = str(s or '').lower()
    for a, b in (('ā', 'a'), ('ī', 'i'), ('ū', 'u'), ('ḥ', 'h'), ('ṣ', 's'), ('ḍ', 'd'), ('ṭ', 't'), ('ẓ', 'z'),
                 ('ʿ', ''), ('ʾ', ''), ('’', "'"), ('‘', "'"), ('أ', 'ا'), ('إ', 'ا'), ('آ', 'ا'), ('ة', 'ه'), ('ى', 'ي')):
        s = s.replace(a, b)
    return re.sub(r'[\u064b-\u065f\u0670]', '', s)


def load_db():
    """Evaluates index.html + topics/*.js once via Node to build an in-memory index of all 634 cards and sections."""
    global _DB
    with _db_lock:
        if _DB is not None:
            return _DB
        node = shutil.which('node') or '/opt/homebrew/bin/node' or '/usr/local/bin/node'
        js = r"""
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = process.argv[1];
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const mTopics = html.match(/(\['sections'[\s\S]*?\])\.forEach/);
const mScript = html.match(/\/\* ============ DATA \(demo\) ============ \*\/([\s\S]*?)\/\* ============ STATE \/ ROUTING ============ \*\//);
if (!mTopics || !mScript) { console.log(JSON.stringify({cards:{},sections:{}})); process.exit(0); }
const sandbox = { console, Object, Array, String, Number, Boolean, RegExp, Math };
sandbox.window = sandbox;
sandbox.globalThis = sandbox;
sandbox.TOPICS = [];
sandbox.MOVES = [];
sandbox.MOUNTS = [];
sandbox.AFTER = [];
sandbox.topic = (p, node) => sandbox.TOPICS.push({path: p, node});
sandbox.mount = (p, node) => sandbox.MOUNTS.push({path: p, node});
sandbox.after = fn => sandbox.AFTER.push(fn);
vm.createContext(sandbox);
const files = vm.runInContext(mTopics[1], sandbox);
for (const f of files) {
  const p = path.join(root, 'topics', f + '.js');
  if (fs.existsSync(p)) {
    try { vm.runInContext(fs.readFileSync(p, 'utf8'), sandbox); } catch (e) {}
  }
}
vm.runInContext(mScript[1] + '\n;globalThis.DATA = DATA;', sandbox);

const cards = {}, sections = {};
function treeOf(a) {
  if (!a || a.type === 'explainer') return null;
  if (a.tree) return a.tree;
  const f = a.flow || (a.points || []).map((p,i)=>({they:i===0?a.claim:null, we:p.h, more:{h:p.h,p:[p.p],quote:p.quote,src:p.src}}));
  let r = null, cur = null;
  f.forEach(s => { const n = Object.assign({}, s, {next:[]}); if(!r) r=n; else cur.next=[n]; cur=n; });
  return r;
}
function walkNodes(t, out=[]) {
  if (!t) return out;
  const m = t.more || {};
  out.push({
    step: out.length + 1,
    who: t.who || 'We answer',
    theyWho: t.theyWho || t.optWho || 'They say',
    they: t.they || t.optLabel || '',
    we: t.we || '',
    h: m.h || '',
    p: [].concat(m.p || []).filter(Boolean),
    facts: m.facts || [],
    quotes: m.quotes || (m.quote ? [m.quote] : []),
    visual: m.visual || null,
    shots: (m.shots || []).filter(x => x && typeof x === 'object'),
    src: (m.src || []).filter(Boolean),
    credit: m.credit || '',
    forks: (t.next || []).length > 1 ? (t.next || []).map((c, j) => ({branch: String.fromCharCode(65+j), index: j, label: c.optLabel || c.they || ''})) : []
  });
  (t.next || []).forEach(c => walkNodes(c, out));
  return out;
}
function scan(node, p, crumbs) {
  const children = Object.entries(node.children || {}).filter(([,c]) => !c.hidden);
  if (p.length) {
    sections[p.join('/')] = {
      path: p.join('/'),
      title: node.title || '',
      k: node.k || '',
      blurb: node.blurb || '',
      breadcrumbs: crumbs.join(' › '),
      children: children.map(([k, c]) => ({
        key: k,
        path: [...p, k].join('/'),
        title: c.title || '',
        k: c.k || '',
        blurb: c.blurb || '',
        kind: c.article ? (c.article.type === 'explainer' ? 'explainer' : 'playbook') : 'section'
      }))
    };
  }
  for (const [k, c] of children) {
    const np = [...p, k], nc = [...crumbs, c.title || k];
    const key = np.join('/');
    if (c.article) {
      const a = c.article;
      const isEx = a.type === 'explainer';
      const nodes = isEx ? (a.cards || []).map((x, i) => ({
        step: i + 1, who: 'Key point', they: '', we: x.h || '', h: x.h || '',
        p: [].concat(x.p || []).filter(Boolean),
        facts: (x.more && x.more.facts) || [],
        quotes: (x.more && x.more.quotes) || [],
        visual: (x.more && x.more.visual) || null,
        shots: ((x.more && x.more.shots) || []).filter(s => s && typeof s === 'object'),
        src: ((x.more && x.more.src) || []).filter(Boolean)
      })) : walkNodes(treeOf(a));
      cards[key] = {
        path: key,
        title: c.title || '',
        k: c.k || '',
        blurb: c.blurb || '',
        breadcrumbs: nc.join(' › '),
        type: isEx ? 'explainer' : 'playbook',
        claim: a.claim || (nodes[0] && nodes[0].they) || c.blurb || '',
        sum: a.sum || '',
        credit: a.credit || (nodes[0] && nodes[0].credit) || '',
        nodes_count: nodes.length,
        nodes: nodes
      };
    }
    if (c.children) scan(c, np, nc);
  }
}
scan({children: sandbox.DATA}, [], []);
console.log(JSON.stringify({cards, sections}));
"""
        node = shutil.which('node') or ('node.exe' if os.name == 'nt' else '/opt/homebrew/bin/node')
        r = subprocess.run([node, '-e', js, ROOT], capture_output=True, text=True, encoding='utf-8', errors='replace', timeout=30)
        data = json.loads(r.stdout or '{"cards":{},"sections":{}}')
        # Precompute search text for fast BM25-style ranking
        for path, c in data['cards'].items():
            parts = [c['title'], c['k'], c['blurb'], c['breadcrumbs'], c['claim'], c['sum']]
            for n in c.get('nodes', []):
                parts.extend([n.get('they', ''), n.get('we', ''), n.get('h', '')])
                parts.extend(n.get('p', []))
                for q in n.get('quotes', []):
                    if isinstance(q, dict):
                        parts.extend([q.get('by', ''), q.get('en', ''), q.get('ar', ''), q.get('ref', '')])
                for f in n.get('facts', []):
                    if isinstance(f, list):
                        parts.extend(str(x) for x in f)
                    elif isinstance(f, dict):
                        parts.extend([str(f.get('k', '')), str(f.get('v', ''))])
                parts.extend(n.get('src', []))
            c['_hay'] = _fold(' '.join(str(x) for x in parts if x))
            c['_title_hay'] = _fold(c['title'] + ' ' + c['k'] + ' ' + c['blurb'] + ' ' + c['claim'])
        _DB = data
        return _DB


def post(path, body, timeout=15):
    req = urllib.request.Request(
        BURHAN_URL + path,
        data=json.dumps(body).encode('utf-8'),
        headers={'Content-Type': 'application/json'},
    )
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode('utf-8'))


def ui(action, args, wait=8):
    try:
        return post('/ui/push', {'client': CLIENT, 'action': action, 'args': args, 'wait': wait}, timeout=wait + 5)
    except Exception as ex:
        return {'ok': False, 'note': f'The local Burhān server did not answer ({type(ex).__name__}); the page cannot be moved.'}


# ---------- Data Tools ----------
def t_search(a):
    q = str(a.get('query') or '').strip()
    k = max(1, min(20, int(a.get('k') or 8)))
    door = str(a.get('door') or '').strip().lower()
    if not q:
        return {'error': 'empty query'}
    db = load_db()
    words = [w for w in re.split(r'\s+', _fold(q)) if len(w) >= 2]
    if not words:
        words = [_fold(q)]
    scored = []
    for path, c in db['cards'].items():
        if door and not path.startswith(door + '/'):
            continue
        hay = c['_hay']
        thay = c['_title_hay']
        score = 0.0
        matched = 0
        for w in words:
            if w in thay:
                score += 6.0
                matched += 1
            elif w in hay:
                score += 2.0 + min(3.0, hay.count(w) * 0.4)
                matched += 1
        if _fold(q) in thay:
            score += 12.0
        elif _fold(q) in hay:
            score += 5.0
        if matched > 0:
            score *= (matched / len(words))
            scored.append((score, path, c))
    scored.sort(key=lambda x: -x[0])
    hits = []
    for sc, path, c in scored[:k]:
        nodes = c.get('nodes', [])
        quotes_n = sum(len(n.get('quotes', [])) for n in nodes)
        shots_n = sum(len(n.get('shots', [])) for n in nodes)
        hits.append({
            'path': path,
            'title': c['title'],
            'k': c['k'],
            'breadcrumbs': c['breadcrumbs'],
            'type': c['type'],
            'claim': c['claim'][:260],
            'sum': c['sum'][:300],
            'nodes_count': c['nodes_count'],
            'quotes_count': quotes_n,
            'shots_count': shots_n,
            'score': round(sc, 2),
        })
    sec_scored = []
    for spath, s in db['sections'].items():
        if door and not spath.startswith(door + '/'):
            continue
        shay = _fold(' '.join([s.get('title', ''), s.get('k', ''), s.get('blurb', ''), s.get('breadcrumbs', ''), spath]))
        sc, matched = 0.0, 0
        for w in words:
            if w in shay:
                sc += 7.0
                matched += 1
        if matched > 0:
            sec_scored.append((sc * (matched / len(words)), spath, s))
    sec_scored.sort(key=lambda x: -x[0])
    sec_hits = [{
        'kind': 'section',
        'path': spath,
        'title': s['title'],
        'breadcrumbs': s['breadcrumbs'],
        'blurb': s['blurb'][:180],
        'children_count': len(s.get('children', [])),
        'score': round(sc, 2),
    } for sc, spath, s in sec_scored[:4]]
    return {'query': q, 'sections': sec_hits, 'total_matches': len(scored), 'hits': hits}


def t_card(a):
    raw_path = str(a.get('path') or '').strip().strip('/')
    if not raw_path:
        return {'error': 'give card path (e.g. "christianity/trinity/ot-trinity/angel-of-the-lord" or "christianity/islam-vs/d-dr-islamic-dilemma")'}
    db = load_db()
    c = db['cards'].get(raw_path)
    if not c:
        # Try suffix match
        matches = [p for p in db['cards'] if p.endswith('/' + raw_path) or p.split('/')[-1] == raw_path.split('/')[-1]]
        if matches:
            c = db['cards'][matches[0]]
        else:
            return {'error': f'no card at "{raw_path}"; call search first to find the exact path'}
    out = {k: v for k, v in c.items() if not k.startswith('_')}
    return out


def t_sections(a):
    raw_path = str(a.get('path') or '').strip().strip('/')
    db = load_db()
    if not raw_path:
        doors = []
        for k in ('islam', 'christianity', 'debate', 'atheism', 'comparative'):
            s = db['sections'].get(k)
            if s:
                doors.append(s)
        return {'doors': doors, 'total_cards': len(db['cards'])}
    s = db['sections'].get(raw_path)
    if not s:
        return {'error': f'no section at "{raw_path}"'}
    return s


# ---------- Tool Registry ----------
S = {'type': 'string'}
I = {'type': 'integer'}
B = {'type': 'boolean'}
TARGET = {
    'type': 'string',
    'description': (
        'What to mark on the open Burhān page: '
        '"text:<exact words on screen>" (underlines or circles those words in the article or open Full-proof drawer), '
        '"node:<step 1..N>" (the argument bubble for step N), '
        '"they:<step 1..N>" (their objection bubble), '
        '"quote:<1..N>" (the Nth verbatim quote card in the open proof/dossier), '
        '"point:<1..N>" (the Nth numbered proof card .pcard in the open proof/dossier), '
        '"fact:<1..N>" (the Nth fact pill in the open proof/dossier), '
        '"shot:<1..N>" (the Nth primary manuscript/book scan in the open proof/dossier), '
        '"verdict" (the bottom verdict summary box).'
    ),
}

TOOLS = [
    ('search', 'Search all 766+ Burhān Tactical Debate Playbooks and Explainers by keyword, verse reference (e.g. "John 17:3", "Q. 5:47", "Exodus 23:20", "Isaiah 53"), topic ("Islamic Dilemma", "Angel of the LORD", "Satanic Verses", "Ahruf", "Jesus slept"), scholar, or Arabic/English quote. Optional door filter: "islam", "christianity", "debate", "atheism", "comparative".',
     {'query': S, 'k': I, 'door': S}, ['query'], t_search),
    ('card', 'Read the complete structured data of one Burhān card by its path (from search): every debate tree node and branch, "They say", "We answer", full proof points (p), verbatim Arabic/English quotes, facts, comparison visuals, primary scan captions (shots), and academic/classical sources (src).',
     {'path': S}, ['path'], t_card),
    ('sections', 'Browse Burhān doors, categories, and subcategories. Call with no path to list all main doors and their categories, or pass a section path (e.g. "christianity/trinity/ot-trinity") to list its cards.',
     {'path': S}, [], t_sections),
    ('goto', 'Navigate the user\'s open Burhān page to a card or section path (e.g. "christianity/trinity/ot-trinity/angel-of-the-lord") or pass path: "" to go Home. Set open_proof: true (or step: 1..N) to also open the Full proof drawer immediately.',
     {'path': S, 'open_proof': B, 'step': I}, ['path'], lambda a: ui('goto', a, 12)),
    ('open_proof', 'Open or close the "Full proof & sources" drawer (#drawer) for a specific answer node or explainer card on the currently open page (by step number 1..N, or by matching words in the heading). Call this before pointing at or circling a quote, proof point, fact, or scan inside that node\'s full proof!',
     {'step': I, 'words': S, 'close': B}, [], lambda a: ui('open_proof', a, 8)),
    ('open_shot', 'Zoom in on a primary manuscript photo or book scan in the full-screen Lightbox (#light) so the user can read the highlighted primary scan clearly! Pass index (1..N) or words matching the scan caption, or close: true to close the lightbox.',
     {'index': I, 'words': S, 'close': B}, [], lambda a: ui('open_shot', a, 8)),
    ('scroll', 'Scroll the active view (article or open Full-proof drawer) up, down, to top/bottom, or directly to a target ("node:3", "quote:2", "shot:1", "verdict", "text:<words>").',
     {'direction': S, 'target': S}, [], lambda a: ui('scroll', a, 6)),
    ('go_back', 'Navigate one level up (back to the parent category or home) and close any open drawer/lightbox.',
     {}, [], lambda a: ui('go_back', a, 8)),
    ('pick_branch', 'Click one of the fork branch buttons ("If they say A / B / C") on the currently open debate playbook card to expand that branch of the argument tree. Pass branch: "A" | "B" | "C" (or words matching the branch label).',
     {'branch': S, 'words': S, 'fork': I}, [], lambda a: ui('pick_branch', a, 8)),
    ('circle', 'The pixel-art lantern scribe walks to a target on the page and draws a hand-drawn gold ring around it. Returns {ok, visible, where, around, note}. Only claim you circled it if visible is true.',
     {'target': TARGET, 'label': S}, ['target'], lambda a: ui('circle', a)),
    ('point', 'The pixel-art lantern scribe walks to a target on the page and underlines / points at it in gold. Best for verbatim verse quotes and key sentences ("text:<words>" or "quote:1"). Returns {ok, visible, where, around, note}.',
     {'target': TARGET, 'label': S}, ['target'], lambda a: ui('point', a)),
    ('isolate', 'Spotlight specific elements on the page (e.g. ["quote:1", "point:2"] or ["node:1"]) by dimming the rest of the screen while the scribe walks there.',
     {'targets': {'type': 'array', 'items': S}, 'label': S}, ['targets'], lambda a: ui('isolate', a)),
    ('clear', 'Remove all hand-drawn gold rings, underlines, and spotlight dimming from the page and send the scribe home.',
     {}, [], lambda a: ui('clear', a)),
    ('say', 'Show a concise 1–2 sentence speech bubble above the pixel-art lantern scribe (put the full detailed answer in the chat).',
     {'text': S}, ['text'], lambda a: ui('say', a)),
    ('look', 'Inspect what the user actually sees on screen right now: current card/section path, title, whether the Full-proof drawer is open, visible text inside the viewport (on_screen), open fork branches, and canvas state. Call look before claiming something is on screen.',
     {}, [], lambda a: ui('look', a)),
    ('find', 'Find where specific words (English or Arabic) live in the currently rendered DOM (article or open Full-proof drawer), whether they are on screen right now, and the text around them.',
     {'words': S}, ['words'], lambda a: ui('find', a)),
    ('canvas_show', 'Open the full-screen step-by-step explainer canvas over the page (user advances with Space / →, exports to Markdown or A4 Landscape PDF, and the scribe speaks each step\'s "say" line). Use 4–8 steps: '
                    '{kind:"title", title, sub, ar?, say}; '
                    '{kind:"points", heading, items:[strings], say}; '
                    '{kind:"quote", heading?, who, grade? ("sahih"|"hasan"|"daif"|"very_weak"), ar?, en, src, link?, say}; '
                    '{kind:"compare", heading, left:{title, sub?, points:[…], verdict?}, right:{title, sub?, points:[…], verdict?}, winner?:"left"|"right"|null, why?, say}; '
                    '{kind:"verdicts", heading, items:[{who, grade, note, src}], say}; '
                    '{kind:"text", heading, text, say}. '
                    'Set append: true to add follow-up slides to an already open canvas.',
     {'title': S, 'append': B, 'steps': {'type': 'array', 'items': {'type': 'object'}}}, ['steps'], lambda a: ui('canvas_show', a, 10)),
    ('canvas_drop', 'Remove 1-based step numbers from the currently open canvas.',
     {'steps': {'type': 'array', 'items': I}}, ['steps'], lambda a: ui('canvas_drop', a)),
    ('canvas_go', 'Jump to step N (1-based) on the open canvas.',
     {'step': I}, ['step'], lambda a: ui('canvas_go', a)),
    ('canvas_close', 'Close the full-screen canvas overlay.',
     {}, [], lambda a: ui('canvas_close', a)),
]
TOOL = {t[0]: t for t in TOOLS}


def schema(props, req):
    return {'type': 'object', 'properties': props, **({'required': req} if req else {})}


out_lock = threading.Lock()


def send(msg):
    with out_lock:
        sys.stdout.write(json.dumps(msg, ensure_ascii=False) + '\n')
        sys.stdout.flush()


def call(mid, name, args):
    t = TOOL.get(name)
    try:
        if not t:
            raise KeyError(f'no tool {name}')
        res = t[4](args or {})
        text = res if isinstance(res, str) else json.dumps(res, ensure_ascii=False)
        send({'jsonrpc': '2.0', 'id': mid, 'result': {
            'content': [{'type': 'text', 'text': text}],
            'isError': bool(isinstance(res, dict) and res.get('error')),
        }})
    except Exception as ex:
        send({'jsonrpc': '2.0', 'id': mid, 'result': {
            'content': [{'type': 'text', 'text': f'{type(ex).__name__}: {str(ex)[:300]}'}],
            'isError': True,
        }})


INSTRUCTIONS = (
    'Burhān (Clear Proof): 634 Tactical Debate Playbooks and Explainers on Islamic & Christian apologetics, '
    'textual criticism, manuscript evidence, and debate tactics. Always cite verbatim primary quotes and sources, '
    'and show the user on the page using goto, open_proof, pick_branch, circle, point, and canvas_show.'
)


def main():
    for line in sys.stdin:
        if not line.strip():
            continue
        try:
            msg = json.loads(line)
        except ValueError:
            continue
        mid, method = msg.get('id'), msg.get('method')
        if method == 'initialize':
            send({'jsonrpc': '2.0', 'id': mid, 'result': {
                'protocolVersion': (msg.get('params') or {}).get('protocolVersion', '2025-06-18'),
                'capabilities': {'tools': {}},
                'serverInfo': {'name': 'burhan', 'version': '1.0'},
                'instructions': INSTRUCTIONS,
            }})
        elif method == 'tools/list':
            send({'jsonrpc': '2.0', 'id': mid, 'result': {
                'tools': [{'name': n, 'description': d, 'inputSchema': schema(p, r)} for n, d, p, r, _ in TOOLS]
            }})
        elif method == 'tools/call':
            p = msg.get('params') or {}
            threading.Thread(target=call, args=(mid, p.get('name'), p.get('arguments')), daemon=True).start()
        elif method == 'ping':
            send({'jsonrpc': '2.0', 'id': mid, 'result': {}})
        elif mid is not None:
            send({'jsonrpc': '2.0', 'id': mid, 'error': {'code': -32601, 'message': f'no method {method}'}})


if __name__ == '__main__':
    main()
