/* The Burhān Guide & Scribe:
   - 28×31 pixel-art lantern scribe (#guide) with idle, walk, think, talk, and point states
   - Hand-drawn gold SVG rings (circle), underlines (point), and spotlight veil (isolate)
   - Multi-Provider Login & Switcher UI inside #guidePanel:
       * Claude (via local server.py Claude Pro CLI login)
       * Gemini (via local server.py 14-key pool OR direct browser Cloud Mode API key)
       * ChatGPT (via local server.py Codex CLI / OpenAI API key OR direct browser Cloud Mode)
   - Works BOTH when `python3 server.py` runs on localhost:5179 (even from https://damandam.github.io/burhan/!)
     AND in Serverless / Mobile Cloud Mode when localhost:5179 is offline. */
(function () {
  'use strict';

  const ss = {
    get: k => { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { v == null ? sessionStorage.removeItem(k) : sessionStorage.setItem(k, v); } catch (e) {} }
  };
  const ls = {
    get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) {} }
  };

  let cid = ss.get('bh-guide-client');
  if (!cid || !/^[A-Za-z0-9_-]{8,40}$/.test(cid)) {
    cid = 'bh_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
    ss.set('bh-guide-client', cid);
  }

  const G = {
    client: cid,
    session: ss.get('bh-guide-session') || '',
    log: [],
    about: null,
    marks: [],
    keep: null,
    es: null,
    busy: 0,
    asking: false,
    hidden: ls.get('bh-guide-hide') === '1',
    provider: ls.get('bh-guide-provider') || 'claude', // 'claude' | 'gemini' | 'chatgpt'
    serverBase: null, // 'http://127.0.0.1:5179' when local server.py is reachable, null in Cloud Mode
    healthData: null,
    cloudHist: []
  };
  try { G.log = JSON.parse(ss.get('bh-guide-log') || '[]'); } catch (e) { G.log = []; }

  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const foldAr = s => String(s || '').replace(/[\u064b-\u065f\u0670\u0640]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
  const fold = s => foldAr(String(s || '').toLowerCase()).normalize('NFD').replace(/[\u0300-\u036fʼʾʿ'’‘]/g, '');

  // ---------- DOM Skeleton ----------
  const wrap = document.createElement('div');
  wrap.id = 'guideRoot';
  wrap.innerHTML = `<svg id="guideMarks" aria-hidden="true"></svg>
    <div id="guideVeil" hidden aria-hidden="true"><i></i><i></i><i></i><i></i></div>
    <canvas id="guide" width="56" height="62" aria-hidden="true"></canvas>
    <div id="guideSay" hidden role="status" aria-live="polite"></div>
    <button type="button" id="guideAsk" class="guide-ask" title="Ask the Burhān Guide (Claude · Gemini · ChatGPT)"><span class="guide-dot"></span><span>Ask the Guide</span></button>
    <aside id="guidePanel" class="guide-panel" hidden aria-label="Ask the Burhān Guide">
      <div class="guide-top" id="guideDragBar" title="Drag to move window (double-click to reset position)">
        <div class="guide-title"><span class="guide-grip" aria-hidden="true">⋮⋮</span><span class="guide-dot"></span><span>The Burhān Guide</span><span class="guide-sub">766 Playbooks · Scribe</span></div>
        <div class="guide-acts">
          <button type="button" id="guideAuthBtn" title="Connect / Switch AI Login">Login ▾</button>
          <button type="button" id="guideHide" title="Hide or show the pixel scribe">${G.hidden ? 'Show scribe' : 'Hide scribe'}</button>
          <button type="button" id="guideNew" title="Start a fresh conversation">New</button>
          <button type="button" id="guideClose" aria-label="Close">×</button>
        </div>
      </div>
      <div class="guide-prov">
        <div class="gprov-row">
          <div class="gprov-tabs" role="tablist" aria-label="AI Provider">
            <button type="button" class="gprov-btn${G.provider === 'claude' ? ' on' : ''}" data-prov="claude"><span class="gprov-dot" id="gdot-claude"></span>Claude</button>
            <button type="button" class="gprov-btn${G.provider === 'gemini' ? ' on' : ''}" data-prov="gemini"><span class="gprov-dot" id="gdot-gemini"></span>Gemini</button>
            <button type="button" class="gprov-btn${G.provider === 'chatgpt' ? ' on' : ''}" data-prov="chatgpt"><span class="gprov-dot" id="gdot-chatgpt"></span>ChatGPT</button>
          </div>
          <button type="button" class="gprov-login-btn" id="guideQuickLogin">Connect / Key</button>
        </div>
        <div id="guideAuthBox" class="gauth-box" hidden>
          <div class="gauth-head"><span id="gauthTitle">AI Provider &amp; Login</span><button type="button" id="gauthClose" style="border:0;background:none;color:#f3efe6;cursor:pointer">×</button></div>
          <div class="gauth-actions">
            <button type="button" id="gauthOAuth">Open Browser Login (OAuth)</button>
            <button type="button" id="gauthCheck">Check Status</button>
          </div>
          <div class="gauth-keyrow">
            <input id="gauthKey" type="password" placeholder="Or paste Gemini / OpenAI / Claude API key…" autocomplete="off">
            <button type="button" id="gauthSaveKey">Save Key</button>
          </div>
          <p class="gauth-note" id="gauthNote">When <code>python3 server.py</code> runs on your Mac, Claude / Gemini / ChatGPT connect directly via localhost:5179. On mobile or without server.py, your saved API key runs directly in the browser.</p>
        </div>
      </div>
      <div id="guideCtx" class="guide-ctx"></div>
      <div id="guideLog" class="guide-log"></div>
      <form id="guideForm" class="guide-form">
        <textarea id="guideQ" rows="2" placeholder="Ask about any verse, hadith, dilemma, or ask for a step-by-step Canvas…"></textarea>
        <button type="submit" id="guideSend">Ask</button>
      </form>
      <p id="guideSt" class="guide-st"></p>
    </aside>
    <div id="guideMenu" class="guide-menu" hidden role="menu"></div>`;
  document.body.appendChild(wrap);
  const $g = id => document.getElementById(id);

  // ---------- Pixel-Art Lantern Scribe (28×31 at 2 px) ----------
  const PAL = {
    '.': null, o: '#14110e', d: '#1a2333', r: '#243147', l: '#31435f', g: '#d4a84b', y: '#f1cf7a',
    s: '#dfb995', e: '#181410', b: '#2a221c', t: '#efe8d8', w: '#d8cfb8', m: '#b58d3d',
    c: '#f0b84a', f: '#ffe89a', k: '#fff8dc', p: '#e8dcc4', q: '#c9b896'
  };
  const HEAD = [
    '..........gggggg............',
    '........ggttttttgg..........',
    '.......gttttttttttg.........',
    '......gtttwwwwwwtttg........',
    '......gttwggggggwttg........',
    '......gttttttttttttg........',
    '.......gssssssssssg.........',
    '.......sseesssssees.........',
    '.......ssssssssssss.........',
    '.......ssbbbbbbbbss.........',
    '........sbbbbbbbbs..........',
    '.........sbbbbbbbs..........'
  ];
  const STAND = [
    '........ooddddddoo..........', '.......odrrrrrrrrdo.........', '......odrrgllllgrrdo........',
    '......odrrgllllgrrdo........', '......odrrgllllgrrdo........', '......odssgllllgssdo........',
    '.......odrgllllgrdo.........', '.......odrgllllgrdo.........', '.......odrrrrrrrrdo.........',
    '.......odrrrrrrrrdo.........', '........odrrrrrrdo..........', '........odrrrrrrdo..........',
    '........odrrrrrrdo..........', '........odggggggdo..........', '.........odd..ddo...........',
    '........ooob..booo..........', '........oooo..oooo..........'
  ];
  const WALK1 = STAND.slice(0, 14).concat(['........odd....ddo..........', '.......ooob....booo.........', '.......oooo....oooo.........']);
  const WALK2 = STAND.slice(0, 14).concat(['.........oddddddo...........', '.........ooobbooo...........', '.........oooooooo...........']);

  const av = $g('guide'), ctx2d = av.getContext('2d'), sayEl = $g('guideSay'), marksEl = $g('guideMarks'), veilEl = $g('guideVeil');
  if (G.hidden) av.classList.add('off');

  const AV = {
    x: innerWidth - 96, y: innerHeight - 130, tx: innerWidth - 96, ty: innerHeight - 130,
    dir: -1, state: 'idle', frame: 0, lastStep: 0, anchor: null, sayTimer: 0
  };
  const home = () => {
    const p = $g('guidePanel');
    if (p && !p.hidden) {
      const r = p.getBoundingClientRect();
      // Pick the side with more room so the scribe never gets trapped against the left edge
      if (r.left >= 88) {
        return [r.left - 44, Math.min(innerHeight - 44, Math.max(66, r.bottom - 44))];
      }
      if (innerWidth - r.right >= 88) {
        return [r.right + 44, Math.min(innerHeight - 44, Math.max(66, r.bottom - 44))];
      }
      return [Math.min(innerWidth - 44, Math.max(44, r.left + 44)), Math.max(66, r.top - 32)];
    }
    return [innerWidth - 78, innerHeight - 110];
  };
  [AV.x, AV.y] = home(); [AV.tx, AV.ty] = [AV.x, AV.y];

  // Clicking the pixel scribe toggles the panel or calls him home if stuck
  av.title = 'Burhān Scribe — click to open Guide or call scribe home';
  av.addEventListener('click', () => {
    if ($g('guidePanel').hidden) togglePanel(true);
    else { clearMarks(); say(''); goHome(); }
  });

  function drawRows(c, rows, y0, flip) {
    for (let y = 0; y < rows.length; y++) {
      const r = rows[y];
      for (let x = 0; x < r.length; x++) {
        const col = PAL[r[x]]; if (!col) continue;
        c.fillStyle = col; c.fillRect((flip ? 27 - x : x) * 2, (y0 + y) * 2, 2, 2);
      }
    }
  }
  function px(c, x, y, k, flip) { c.fillStyle = PAL[k] || k; c.fillRect((flip ? 27 - x : x) * 2, y * 2, 2, 2); }
  function drawSprite(c, state, dir, frame) {
    c.clearRect(0, 0, 56, 62);
    const flip = dir < 0, bob = (state === 'idle' || state === 'think') && frame % 2 ? 1 : 0;
    const body = state === 'walk' ? (frame % 2 ? WALK1 : WALK2) : STAND;
    drawRows(c, HEAD, 1 + bob, flip);
    drawRows(c, body, 13 + bob, flip);
    if (state === 'talk' && frame % 2) px(c, 13, 10 + bob, 'e', flip);
    const lx = 23, ly = (state === 'point' ? 14 : 17) + bob;
    px(c, 20, ly, 's', flip); px(c, 21, ly, 's', flip); px(c, 22, ly, 'g', flip);
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 2; dy++) px(c, lx + dx, ly + dy, dy === -1 || dy === 2 ? 'g' : (frame % 2 && !dx ? 'k' : 'f'), flip);
    if (state === 'think') {
      px(c, 19, 8 + bob, 's', flip);
      const d = frame % 3;
      px(c, 22, 6, d === 0 ? 'k' : 'c', flip); px(c, 24, 4, d === 1 ? 'k' : 'c', flip); px(c, 26, 2, d === 2 ? 'k' : 'c', flip);
    }
    if (state === 'point') {
      for (let i = 0; i < 4; i++) { px(c, 21 + i, 15 + bob, 'p', flip); px(c, 21 + i, 16 + bob, 'q', flip); }
    }
  }
  function paint() { drawSprite(ctx2d, AV.state, AV.dir, AV.frame); }
  function clampXY(x, y) {
    return [
      Math.max(32, Math.min(innerWidth - 36, Number.isFinite(x) ? x : innerWidth - 78)),
      Math.max(58, Math.min(innerHeight - 36, Number.isFinite(y) ? y : innerHeight - 110))
    ];
  }
  function place(x, y) {
    [AV.x, AV.y] = clampXY(x, y);
    av.style.transform = `translate3d(${Math.round(AV.x - 28)}px,${Math.round(AV.y - 54)}px,0)`;
    if (!sayEl.hidden) {
      const sx = Math.max(12, Math.min(innerWidth - 300, AV.x - 135));
      const sy = Math.max(12, AV.y - 72 - sayEl.offsetHeight);
      sayEl.style.transform = `translate3d(${Math.round(sx)}px,${Math.round(sy)}px,0)`;
    }
  }
  function say(text) {
    clearTimeout(AV.sayTimer);
    if (!text || G.hidden) { sayEl.hidden = true; return; }
    sayEl.textContent = text; sayEl.hidden = false; place(AV.x, AV.y);
    AV.sayTimer = setTimeout(() => { sayEl.hidden = true; if (AV.state === 'talk') AV.state = 'idle'; }, Math.min(18000, Math.max(5000, text.length * 70)));
  }

  let raf = 0;
  function tick(t) {
    raf = 0;
    const [ctxTx, ctxTy] = clampXY(AV.tx, AV.ty);
    AV.tx = ctxTx; AV.ty = ctxTy;
    const dx = AV.tx - AV.x, dy = AV.ty - AV.y, d = Math.hypot(dx, dy);
    if (d > 2.5) {
      AV.state = 'walk'; AV.dir = dx < 0 ? -1 : 1;
      const step = Math.min(d, Math.min(26, Math.max(6, d * 0.18)));
      place(AV.x + dx / d * step, AV.y + dy / d * step);
    } else if (AV.state === 'walk') {
      place(AV.tx, AV.ty); AV.state = AV.afterWalk || 'idle'; AV.afterWalk = null;
      if (AV.face != null) { AV.dir = AV.face; AV.face = null; }
      paint();
    }
    // Unstick if anchored element disappeared from the DOM
    if (AV.anchor && AV.anchor.nodeType === 1 && !AV.anchor.isConnected) {
      AV.anchor = null;
      if (!G.asking) goHome();
    }
    if (t - AV.lastStep > (AV.state === 'walk' ? 100 : 380)) { AV.frame = (AV.frame + 1) % 6; AV.lastStep = t; paint(); }
    if (d > 2.5 || AV.state === 'think' || AV.state === 'talk' || !sayEl.hidden) raf = requestAnimationFrame(tick);
  }
  const wake = () => { if (!raf) raf = requestAnimationFrame(tick); };
  function moveTo(x, y, after, face) {
    const [cx, cy] = clampXY(x, y);
    AV.tx = cx; AV.ty = cy; AV.afterWalk = after || 'idle'; AV.face = face;
    wake();
  }
  function goHome() { AV.anchor = null; const [x, y] = home(); moveTo(x, y, 'idle', -1); }


  // ---------- Marks (Hand-drawn Gold Rings & Underlines) + Spotlight Veil ----------
  function boxOf(el) {
    if (!el) return null;
    const r = (typeof Range !== 'undefined' && el instanceof Range) ? el.getBoundingClientRect() : (el.getBoundingClientRect ? el.getBoundingClientRect() : null);
    return r && r.width > 1 && r.height > 1 ? r : null;
  }
  function ringPath(r) {
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const rx = Math.min(innerWidth * 0.45, Math.max(22, r.width / 2 + 12));
    const ry = Math.min(200, Math.max(15, r.height / 2 + 9));
    const pts = [];
    for (let i = 0; i <= 14; i++) {
      const a = -0.35 + (i / 14) * (Math.PI * 2 + 0.55);
      const j = (i % 2 ? 1 : -1) * 1.4;
      pts.push([cx + Math.cos(a) * (rx + j), cy + Math.sin(a) * (ry - j * 0.6)]);
    }
    return 'M ' + pts.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L ');
  }
  function linePath(r) {
    const x1 = Math.max(8, r.left - 2), x2 = Math.min(innerWidth - 8, r.right + 2), y = r.bottom + 3;
    const xm = (x1 + x2) / 2;
    return `M ${x1.toFixed(1)} ${y.toFixed(1)} Q ${xm.toFixed(1)} ${(y + 3).toFixed(1)} ${x2.toFixed(1)} ${(y - 1).toFixed(1)} M ${(x1 + 6).toFixed(1)} ${(y + 3.5).toFixed(1)} L ${(x2 - 10).toFixed(1)} ${(y + 2.5).toFixed(1)}`;
  }
  function drawMarks() {
    marksEl.setAttribute('viewBox', `0 0 ${innerWidth} ${innerHeight}`);
    const out = [];
    G.marks.forEach(m => {
      if (m.target && (!m.el || (m.el.nodeType === 1 && !m.el.isConnected))) m.el = findTarget(m.target);
      const r = boxOf(m.el);
      if (!r || r.bottom < 0 || r.top > innerHeight) return;
      const d = m.kind === 'line' ? linePath(r) : ringPath(r);
      out.push(`<path class="gmark-bg" d="${d}"/><path class="gmark" d="${d}"/>`);
      if (m.label) out.push(`<text class="gmark-txt" x="${Math.max(12, Math.min(innerWidth - 150, r.left)).toFixed(1)}" y="${Math.max(16, r.top - 10).toFixed(1)}">${esc(m.label)}</text>`);
    });
    marksEl.innerHTML = out.join('');
    layoutVeil();
    if (AV.anchor) {
      if (AV.anchor.nodeType === 1 && !AV.anchor.isConnected && G.marks[0]) AV.anchor = G.marks[0].el;
      const r = boxOf(AV.anchor);
      if (r && r.bottom > 0 && r.top < innerHeight) {
        const left = r.left > 76, x = left ? r.left - 30 : Math.min(innerWidth - 36, r.right + 30);
        const y = Math.max(66, Math.min(innerHeight - 36, r.top + Math.min(44, r.height / 2) + 22));
        if (Math.hypot(x - AV.tx, y - AV.ty) > 6) moveTo(x, y, 'point', left ? 1 : -1);
      }
    }
  }
  function layoutVeil() {
    if (!G.keep || !G.keep.length) { veilEl.hidden = true; return; }
    let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
    G.keep.forEach(el => {
      const r = boxOf(el); if (!r) return;
      x1 = Math.min(x1, r.left); y1 = Math.min(y1, r.top); x2 = Math.max(x2, r.right); y2 = Math.max(y2, r.bottom);
    });
    if (x2 < 0 || y2 < 0 || x1 > innerWidth || y1 > innerHeight || !isFinite(x1)) { veilEl.hidden = true; return; }
    const pad = 16, L = Math.max(0, x1 - pad), T = Math.max(0, y1 - pad), R = Math.min(innerWidth, x2 + pad), B = Math.min(innerHeight, y2 + pad);
    const p = veilEl.children;
    p[0].style.cssText = `left:0;top:0;width:100vw;height:${T}px`;
    p[1].style.cssText = `left:0;top:${B}px;width:100vw;height:${Math.max(0, innerHeight - B)}px`;
    p[2].style.cssText = `left:0;top:${T}px;width:${L}px;height:${Math.max(0, B - T)}px`;
    p[3].style.cssText = `left:${R}px;top:${T}px;width:${Math.max(0, innerWidth - R)}px;height:${Math.max(0, B - T)}px`;
    veilEl.hidden = false;
  }
  function peek() {
    const p = $g('guidePanel'); if (!p || p.hidden) return;
    clearTimeout(G.peekT); p.classList.add('peek');
    G.peekT = setTimeout(() => p.classList.remove('peek'), 5000);
  }
  function addMark(el, kind, label) {
    G.marks = G.marks.filter(m => m.el !== el).slice(-3);
    const mk = { el, kind, label };
    G.marks.push(mk);
    drawMarks(); peek();
    return mk;
  }
  function clearMarks() {
    G.marks = []; G.keep = null; marksEl.innerHTML = ''; veilEl.hidden = true;
    $g('guidePanel') && $g('guidePanel').classList.remove('peek');
  }
  addEventListener('scroll', drawMarks, { passive: true, capture: true });
  addEventListener('resize', drawMarks);

  // ---------- Finding & Revealing Targets in Burhān ----------
  function activeScope() {
    const dr = document.getElementById('drawer');
    if (dr && dr.classList.contains('on')) return dr.querySelector('.dr-panel') || dr;
    return document.querySelector('.view.on') || document.body;
  }
  function findTextRange(words) {
    const want = String(words || '').trim(); if (!want) return null;
    const fWant = fold(want);
    const scopes = [];
    const dr = document.getElementById('drawer');
    if (dr && dr.classList.contains('on')) scopes.push(dr.querySelector('.dr-body') || dr);
    const art = document.getElementById('article');
    if (art && art.classList.contains('on')) scopes.push(art);
    const list = document.getElementById('list');
    if (list && list.classList.contains('on')) scopes.push(list);
    scopes.push(document.body);

    for (const rootEl of scopes) {
      // First check block elements whose combined text matches
      const w = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT);
      let n;
      while ((n = w.nextNode())) {
        const pe = n.parentElement;
        if (!pe || pe.closest('#guideRoot, #gcv, script, style, [hidden]')) continue;
        const raw = n.textContent || '';
        const idx = raw.toLowerCase().indexOf(want.toLowerCase());
        if (idx >= 0) {
          const rng = document.createRange();
          rng.setStart(n, idx);
          rng.setEnd(n, Math.min(raw.length, idx + want.length));
          if (boxOf(rng)) return rng;
        }
        if (fold(raw).includes(fWant)) {
          return pe.closest('.qcard, .pcard, .fact, .bub, .quote, .doc, p, li, h2, h3, h4') || pe;
        }
      }
      // Second pass: element-level folded text match (when quote spans across child tags)
      const blocks = rootEl.querySelectorAll('.qcard, .pcard, .fact, .bub, .quote, .doc, .sum, .card, .door');
      for (const b of blocks) {
        if (fold(b.textContent).includes(fWant) && boxOf(b)) return b;
      }
    }
    return null;
  }
  function findTarget(t) {
    if (!t) return null;
    const s = String(t).trim();
    const m = /^([a-z_]+):(.*)$/i.exec(s);
    const kind = m ? m[1].toLowerCase() : 'text', val = m ? m[2].trim() : s;
    const sc = activeScope();
    if (kind === 'node' || kind === 'we' || kind === 'step') {
      const idx = Math.max(1, parseInt(val, 10) || 1);
      return document.querySelector(`#article .node.we .bub[data-step="${idx}"]`) || document.querySelectorAll('#article .node.we .bub')[idx - 1] || null;
    }
    if (kind === 'they') {
      const idx = Math.max(1, parseInt(val, 10) || 1);
      return document.querySelectorAll('#article .node.they .bub')[idx - 1] || null;
    }
    if (kind === 'quote') {
      const idx = Math.max(1, parseInt(val, 10) || 1);
      return sc.querySelectorAll('.qcard, .quote, .doc')[idx - 1] || document.querySelectorAll('.qcard, .quote, .doc')[idx - 1] || null;
    }
    if (kind === 'point' || kind === 'pcard') {
      const idx = Math.max(1, parseInt(val, 10) || 1);
      return sc.querySelectorAll('.pcard')[idx - 1] || document.querySelectorAll('.pcard')[idx - 1] || null;
    }
    if (kind === 'fact') {
      const idx = Math.max(1, parseInt(val, 10) || 1);
      return sc.querySelectorAll('.fact')[idx - 1] || document.querySelectorAll('.fact')[idx - 1] || null;
    }
    if (kind === 'shot' || kind === 'scan') {
      const idx = Math.max(1, parseInt(val, 10) || 1);
      return sc.querySelectorAll('.shot, .th')[idx - 1] || document.querySelectorAll('.shot, .th')[idx - 1] || null;
    }
    if (kind === 'verdict' || s === 'verdict' || s === 'sum') {
      return document.querySelector('#article .sum') || null;
    }
    return findTextRange(val);
  }
  async function revealTarget(el) {
    const node = el && (el.nodeType === 1 ? el : el.startContainer && el.startContainer.parentElement);
    if (!node) return;
    node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    await sleep(360);
    drawMarks();
  }
  async function walkToEl(el, state) {
    AV.anchor = el;
    const r = boxOf(el); if (!r) return;
    const left = r.left > 76, x = left ? r.left - 30 : Math.min(innerWidth - 36, r.right + 30);
    const y = Math.max(66, Math.min(innerHeight - 36, r.top + Math.min(44, r.height / 2) + 22));
    moveTo(x, y, state || 'point', left ? 1 : -1);
    await sleep(Math.min(550, Math.max(160, Math.hypot(x - AV.x, y - AV.y) * 1.1)));
  }
  function seen(el) {
    const r = boxOf(el);
    if (!r) return { visible: false, why: 'it has no bounding box on screen' };
    if (r.bottom < 0 || r.top > innerHeight || r.right < 0 || r.left > innerWidth) return { visible: false, why: 'it is outside the viewport' };
    const node = el.nodeType === 1 ? el : el.startContainer.parentElement;
    const x = Math.min(innerWidth - 2, Math.max(1, r.left + r.width / 2)), y = Math.min(innerHeight - 2, Math.max(1, r.top + r.height / 2));
    const top = document.elementFromPoint(x, y), panel = $g('guidePanel');
    const under = top && panel && panel.contains(top) && !panel.classList.contains('peek');
    const inDrawer = !!(node && node.closest('#drawer.on'));
    const around = (node.closest('.qcard, .pcard, .fact, .bub, .quote, .doc, .sum, p, li') || node).textContent.replace(/\s+/g, ' ').trim().slice(0, 260);
    return { visible: true, under_panel: !!under, where: inDrawer ? 'Full proof drawer' : 'Article flow', around };
  }
  async function markTarget(a, kind) {
    let el = findTarget(a.target);
    if (!el) return { ok: false, visible: false, note: `"${a.target}" is not rendered on screen yet. If it is inside a node's Full proof, call open_proof first!` };
    await revealTarget(el); await sleep(100);
    el = findTarget(a.target) || el;
    const v = seen(el);
    if (!v.visible) return { ok: false, visible: false, note: `"${a.target}" is in the DOM but not visible: ${v.why}` };
    if (v.under_panel) $g('guidePanel').classList.add('peek');
    const mk = addMark(el, kind, a.label ? String(a.label).slice(0, 60) : '');
    mk.target = a.target;
    await walkToEl(el, 'point');
    if (a.label) say(a.label);
    return {
      ok: true, visible: true, where: v.where, around: v.around,
      note: `${kind === 'ring' ? 'Circled' : 'Underlined'} ${a.target} (${v.where})`
    };
  }


  // ---------- Page Context & In-Browser Actions (ACT) ----------
  function context() {
    const p = (typeof path !== 'undefined' && Array.isArray(path)) ? path : [];
    const curNode = (typeof nodeAt === 'function' && p.length) ? (() => { try { return nodeAt(p); } catch (e) { return null; } })() : null;
    const dr = document.getElementById('drawer');
    const drOpen = !!(dr && dr.classList.contains('on'));
    const out = {
      path: p.join('/'),
      title: curNode ? curNode.title : 'Burhān Home',
      view: p.length ? (curNode && curNode.article ? 'article' : 'section') : 'home',
      drawerOpen: drOpen,
      drawerHeading: drOpen ? (dr.querySelector('h3') && dr.querySelector('h3').textContent || '') : null
    };
    if (G.about) out.about = G.about;
    if (window.GUIDE && window.GUIDE.canvasState) {
      const cs = window.GUIDE.canvasState();
      if (cs) out.canvas = cs;
    }
    return out;
  }

  function resolveBurhanPath(rawPath) {
    const clean = String(rawPath || '').trim().replace(/^\/+|\/+$/g, '');
    if (!clean) return [];
    const parts = clean.split('/').filter(Boolean);
    try {
      if (typeof nodeAt === 'function' && nodeAt(parts)) return parts;
    } catch (e) {}
    // Search all paths in DATA for a suffix match
    const found = [];
    (function scan(n, p) {
      for (const [k, c] of Object.entries(n.children || {})) {
        if (c.hidden) continue;
        const np = [...p, k];
        const key = np.join('/');
        if (key === clean || key.endsWith('/' + clean) || k === parts[parts.length - 1]) found.push(np);
        if (c.children) scan(c, np);
      }
    })({ children: typeof DATA !== 'undefined' ? DATA : {} }, []);
    return found[0] || parts;
  }

  const ACT = {
    async goto(a) {
      const raw = String(a && a.path || '').trim();
      const targetParts = raw ? resolveBurhanPath(raw) : [];
      if (raw && !targetParts.length) return { ok: false, note: `could not find path "${a.path}"` };
      clearMarks();
      const L = document.getElementById('light');
      if (L && L.classList.contains('on')) { L.classList.remove('on'); L.setAttribute('aria-hidden', 'true'); }
      if (typeof closeDrawer === 'function') closeDrawer(true);
      if (typeof path !== 'undefined' && typeof render === 'function') {
        path = targetParts;
        render();
      } else if (typeof go === 'function') {
        go(targetParts);
      }
      await sleep(350);
      document.querySelectorAll('#article .node .bub, #article .node, #article .fork, #article .dossier, #article .sum').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      if (a && (a.open_proof || a.step)) {
        await ACT.open_proof({ step: a.step || 1 });
      }
      const c = context();
      return { ok: true, path: c.path, title: c.title, view: c.view, drawerOpen: c.drawerOpen, note: `Opened "${c.title}" (${c.path || 'Home'})` };
    },
    async go_back() {
      clearMarks();
      const L = document.getElementById('light');
      if (L && L.classList.contains('on')) { L.classList.remove('on'); L.setAttribute('aria-hidden', 'true'); return { ok: true, note: 'Closed lightbox' }; }
      if (typeof closeDrawer === 'function' && document.getElementById('drawer')?.classList.contains('on')) {
        closeDrawer(true);
        return { ok: true, note: 'Closed Full proof drawer' };
      }
      if (typeof path !== 'undefined' && path.length && typeof render === 'function') {
        path = path.slice(0, -1);
        render();
        await sleep(250);
      }
      const c = context();
      return { ok: true, path: c.path, title: c.title, note: `Back to "${c.title}"` };
    },
    async open_shot(a) {
      const L = document.getElementById('light');
      if (a && a.close) {
        if (L) { L.classList.remove('on'); L.setAttribute('aria-hidden', 'true'); }
        return { ok: true, note: 'Closed scan lightbox' };
      }
      const scope = activeScope();
      let shots = [...scope.querySelectorAll('.shot-btn[data-src], .th[data-src]')];
      if (!shots.length) shots = [...document.querySelectorAll('#drawer.on [data-src], #article [data-src]')];
      if (!shots.length) return { ok: false, note: 'No primary scans visible right now (try open_proof first!)' };
      let chosen = null;
      if (a && a.words) {
        const w = fold(a.words);
        chosen = shots.find(s => fold((s.dataset.cap || '') + ' ' + (s.dataset.src || '')).includes(w));
      }
      if (!chosen) {
        const idx = Math.max(1, parseInt(a && a.index, 10) || 1);
        chosen = shots[idx - 1] || shots[0];
      }
      chosen.click();
      await sleep(300);
      return {
        ok: true,
        src: chosen.dataset.src,
        caption: chosen.dataset.cap || '',
        total_shots: shots.length,
        note: `Enlarged primary scan in lightbox: ${chosen.dataset.cap || chosen.dataset.src}`
      };
    },
    async scroll(a) {
      if (a && a.target) {
        const el = findTarget(a.target);
        if (!el) return { ok: false, note: `Could not find target "${a.target}" to scroll to` };
        await revealTarget(el);
        return { ok: true, note: `Scrolled to ${a.target}` };
      }
      const dr = document.getElementById('drawer');
      const scroller = (dr && dr.classList.contains('on')) ? dr.querySelector('.dr-panel') : document.querySelector('.view.on');
      if (!scroller) return { ok: false, note: 'No scrollable container active' };
      const dir = String(a && a.direction || 'down').toLowerCase();
      if (dir === 'top') scroller.scrollTo({ top: 0, behavior: 'smooth' });
      else if (dir === 'bottom') scroller.scrollTo({ top: scroller.scrollHeight, behavior: 'smooth' });
      else if (dir === 'up') scroller.scrollBy({ top: -Math.round(innerHeight * 0.65), behavior: 'smooth' });
      else scroller.scrollBy({ top: Math.round(innerHeight * 0.65), behavior: 'smooth' });
      await sleep(350);
      drawMarks();
      return { ok: true, scrollTop: Math.round(scroller.scrollTop), note: `Scrolled ${dir}` };
    },
    async open_proof(a) {
      if (a && a.close) {
        if (typeof closeDrawer === 'function') closeDrawer(true);
        return { ok: true, drawerOpen: false, note: 'Closed Full proof drawer' };
      }
      const btns = [...document.querySelectorAll('#article .bub.more, #article .kc.more, #article .pillar.more, #article .stp.more, #article .ci.more')];
      if (!btns.length) return { ok: false, note: 'No answer nodes with Full proof on this page (open an article card first with goto)' };
      let btn = null;
      if (a && a.words) {
        const w = fold(a.words);
        btn = btns.find(b => fold(b.textContent).includes(w));
      }
      if (!btn) {
        const step = Math.max(1, parseInt(a && a.step, 10) || 1);
        btn = btns.find(b => +b.dataset.step === step) || btns[step - 1] || btns[0];
      }
      btn.click();
      await sleep(450);
      const dr = document.getElementById('drawer');
      if (dr) {
        dr.querySelectorAll('.dr-body > *').forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
      }
      const h3 = dr && dr.querySelector('h3') ? dr.querySelector('h3').textContent : '';
      const qCount = dr ? dr.querySelectorAll('.qcard, .quote, .doc').length : 0;
      const pCount = dr ? dr.querySelectorAll('.pcard').length : 0;
      return {
        ok: true, drawerOpen: true, heading: h3, quotes_on_screen: qCount, points_on_screen: pCount,
        note: `Full proof drawer is open ("${h3}") with ${pCount} proof points and ${qCount} quote cards. Now use point or circle with target "quote:1" or "text:<words>".`
      };
    },
    async pick_branch(a) {
      const forks = [...document.querySelectorAll('#article .fork')];
      if (!forks.length) return { ok: false, note: 'No fork branches on the current card' };
      const forkEl = forks[Math.max(0, (parseInt(a && a.fork, 10) || 1) - 1)] || forks[forks.length - 1];
      const opts = [...forkEl.querySelectorAll('.opt')];
      let chosen = null;
      if (a && a.words) {
        const w = fold(a.words);
        chosen = opts.find(o => fold(o.textContent).includes(w));
      }
      if (!chosen && a && a.branch) {
        const br = String(a.branch).trim().toUpperCase();
        const idx = br.charCodeAt(0) - 65;
        if (idx >= 0 && idx < opts.length) chosen = opts[idx];
      }
      chosen = chosen || opts[0];
      if (!chosen) return { ok: false, note: 'No branch option found' };
      chosen.click();
      await sleep(450);
      document.querySelectorAll('#article .node .bub, #article .node, #article .fork').forEach(el => {
        el.style.opacity = '1'; el.style.transform = 'none';
      });
      return { ok: true, picked: chosen.textContent.replace(/\s+/g, ' ').trim(), note: `Expanded branch: ${chosen.textContent.replace(/\s+/g, ' ').trim()}` };
    },
    async circle(a) { return markTarget(a, 'ring'); },
    async point(a) { return markTarget(a, 'line'); },
    async isolate(a) {
      const list = Array.isArray(a.targets) ? a.targets : [a.target].filter(Boolean);
      const els = list.map(findTarget).filter(Boolean);
      if (!els.length) return { ok: false, visible: false, note: 'None of the requested targets are on screen right now' };
      clearMarks();
      await revealTarget(els[0]);
      G.keep = els;
      layoutVeil(); peek();
      await walkToEl(els[0], 'point');
      if (a.label) say(a.label);
      return { ok: true, visible: true, count: els.length, note: `Spotlighted ${els.length} target(s); the rest of the screen is dimmed` };
    },
    async clear() { clearMarks(); say(''); goHome(); return { ok: true, note: 'Cleared all marks' }; },
    async say(a) {
      const t = String(a && a.text || '').slice(0, 240);
      if (G.hidden) return { ok: true, note: 'Scribe is hidden' };
      AV.state = t ? 'talk' : 'idle';
      say(t);
      return { ok: true, note: 'Said in speech bubble' };
    },
    async find(a) {
      const want = String(a && a.words || '').trim();
      if (!want) return { ok: false, note: 'no words given' };
      const f = fold(want), out = [];
      const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let n;
      while ((n = w.nextNode()) && out.length < 12) {
        const pe = n.parentElement;
        if (!pe || pe.closest('#guideRoot, #gcv, script, style, [hidden]')) continue;
        if (!fold(n.textContent).includes(f)) continue;
        const inDrawer = !!pe.closest('#drawer.on');
        out.push({
          where: inDrawer ? 'Full proof drawer' : 'Article',
          on_screen: !!(boxOf(pe) && seen(pe).visible),
          around: (pe.closest('.qcard, .pcard, .fact, .bub, p, li') || pe).textContent.replace(/\s+/g, ' ').trim().slice(0, 220)
        });
      }
      return { ok: true, found: out.length, places: out, note: out.length ? `Found in ${out.length} place(s)` : 'Not on the page as currently drawn (try open_proof first)' };
    },
    async look() {
      const c = context();
      const seenText = [];
      const w = document.createTreeWalker(activeScope(), NodeFilter.SHOW_TEXT);
      let n, len = 0;
      while ((n = w.nextNode()) && len < 2600) {
        const pe = n.parentElement;
        if (!pe || pe.closest('#guideRoot, #gcv, script, style, [hidden]')) continue;
        const t = n.textContent.replace(/\s+/g, ' ').trim();
        if (t.length < 2) continue;
        const r = pe.getBoundingClientRect();
        if (!r.width || r.bottom < 0 || r.top > innerHeight) continue;
        seenText.push(t); len += t.length + 1;
      }
      c.on_screen = seenText.join(' · ').slice(0, 2600);
      c.answer_nodes = [...document.querySelectorAll('#article .node.we .bub')].map((b, i) => ({
        step: +b.dataset.step || (i + 1),
        we: (b.querySelector('p') && b.querySelector('p').textContent || '').slice(0, 180)
      }));
      c.forks = [...document.querySelectorAll('#article .fork')].map((f, i) => ({
        fork: i + 1,
        options: [...f.querySelectorAll('.opt')].map((o, j) => ({
          branch: String.fromCharCode(65 + j),
          picked: o.classList.contains('on'),
          label: (o.querySelector('q') && o.querySelector('q').textContent || '').slice(0, 140)
        }))
      }));
      return { ok: true, page: c };
    },

    // ---------- In-Browser Data Tools (for Serverless / Mobile Cloud Mode!) ----------
    async search(a) {
      const q = fold(a && a.query || '');
      const k = Math.max(1, Math.min(15, parseInt(a && a.k, 10) || 8));
      const door = String(a && a.door || '').toLowerCase();
      const words = q.split(/\s+/).filter(w => w.length >= 2);
      const hits = [], secHits = [];
      (function scan(node, p, crumbs) {
        for (const [key, c] of Object.entries(node.children || {})) {
          if (c.hidden) continue;
          const np = [...p, key], nc = [...crumbs, c.title || key], pathStr = np.join('/');
          if (!c.article && c.children && (!door || pathStr.startsWith(door + '/'))) {
            const shay = fold([c.title, c.k, c.blurb, nc.join(' '), key].join(' '));
            let sc = 0, m = 0;
            for (const w of words) if (shay.includes(w)) { sc += 7; m++; }
            if (m > 0) secHits.push({ kind: 'section', path: pathStr, title: c.title, breadcrumbs: nc.join(' › '), blurb: (c.blurb || '').slice(0, 180), cards_inside: Object.keys(c.children).length, score: +(sc * (m / (words.length || 1))).toFixed(2) });
          }
          if (c.article && (!door || pathStr.startsWith(door + '/'))) {
            const art = c.article;
            const hay = fold([c.title, c.k, c.blurb, art.claim, art.sum, JSON.stringify(art.tree || art.flow || art.cards || '')].join(' '));
            const thay = fold([c.title, c.k, c.blurb, art.claim].join(' '));
            let sc = 0, m = 0;
            for (const w of words) {
              if (thay.includes(w)) { sc += 6; m++; }
              else if (hay.includes(w)) { sc += 2; m++; }
            }
            if (thay.includes(q)) sc += 10;
            if (m > 0) hits.push({ kind: 'card', path: pathStr, title: c.title, k: c.k || '', breadcrumbs: nc.join(' › '), claim: (art.claim || c.blurb || '').slice(0, 240), sum: (art.sum || '').slice(0, 240), score: +(sc * (m / (words.length || 1))).toFixed(2) });
          }
          if (c.children) scan(c, np, nc);
        }
      })({ children: typeof DATA !== 'undefined' ? DATA : {} }, [], []);
      secHits.sort((x, y) => y.score - x.score);
      hits.sort((x, y) => y.score - x.score);
      return { query: a.query, sections: secHits.slice(0, 4), total_matches: hits.length, hits: hits.slice(0, k) };
    },
    async card(a) {
      const parts = resolveBurhanPath(a && a.path);
      let n = null;
      try { n = nodeAt(parts); } catch (e) {}
      if (!n || !n.article) return { error: `No card found at "${a && a.path}"` };
      const art = n.article;
      const nodes = [];
      (function walk(t) {
        if (!t) return;
        const m = t.more || {};
        nodes.push({
          step: nodes.length + 1,
          they: t.they || t.optLabel || '',
          we: t.we || '',
          h: m.h || '',
          p: [].concat(m.p || []).filter(Boolean),
          facts: m.facts || [],
          quotes: m.quotes || (m.quote ? [m.quote] : []),
          src: (m.src || []).filter(Boolean)
        });
        (t.next || []).forEach(walk);
      })(typeof treeOf === 'function' ? treeOf(art) : art.tree);
      return { path: parts.join('/'), title: n.title, k: n.k, claim: art.claim || '', sum: art.sum || '', nodes_count: nodes.length, nodes };
    },
    async sections(a) {
      const parts = (a && a.path) ? resolveBurhanPath(a.path) : [];
      let n = { children: typeof DATA !== 'undefined' ? DATA : {} };
      try { if (parts.length) n = nodeAt(parts); } catch (e) {}
      const children = Object.entries((n && n.children) || {}).filter(([, c]) => !c.hidden).map(([k, c]) => ({
        key: k, path: [...parts, k].join('/'), title: c.title, k: c.k || '', blurb: c.blurb || '', kind: c.article ? 'playbook' : 'section'
      }));
      return { path: parts.join('/'), children };
    }
  };


  // ---------- Hybrid Local Server Discovery & /ui/events Listener ----------
  function candidateBases() {
    const out = [];
    if (location.port === '5179') out.push('');
    out.push('http://127.0.0.1:5179', 'http://localhost:5179');
    return [...new Set(out)];
  }
  const eventQueue = [];
  async function onEvent(ev) {
    eventQueue.push(ev);
    if (eventQueue.length > 1) return;
    while (eventQueue.length) {
      const e = eventQueue[0];
      let res;
      try {
        res = ACT[e.action] ? await ACT[e.action](e.args || {}) : { ok: false, note: 'unknown action ' + e.action };
      } catch (x) {
        res = { ok: false, note: String(x && x.message || x).slice(0, 200) };
      }
      if (G.serverBase !== null) {
        fetch((G.serverBase || '') + '/ui/ack', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(Object.assign({ id: e.id }, res))
        }).catch(() => {});
      }
      eventQueue.shift();
    }
  }
  function listen() {
    if (G.es || G.serverBase === null || (document.hidden && !G.busy)) return;
    try {
      G.es = new EventSource((G.serverBase || '') + '/ui/events?client=' + G.client);
      G.es.onmessage = m => { try { onEvent(JSON.parse(m.data)); } catch (e) {} };
      G.es.onerror = () => { if (G.es) { G.es.close(); G.es = null; } };
    } catch (e) {}
  }
  function unlisten() {
    if (G.es && document.hidden && !G.busy) { G.es.close(); G.es = null; }
  }
  document.addEventListener('visibilitychange', () => document.hidden ? unlisten() : listen());

  // ---------- Health, Provider Selection & Login UI ----------
  function storedKey(prov) {
    const p = prov || G.provider;
    return ls.get('bh-key-' + p) || '';
  }
  function setStoredKey(prov, k) {
    ls.set('bh-key-' + prov, k ? k.trim() : null);
  }
  function updateProviderPills() {
    document.querySelectorAll('.gprov-btn').forEach(b => {
      b.classList.toggle('on', b.dataset.prov === G.provider);
    });
    const h = G.healthData && G.healthData.providers;
    const clOk = (h && h.claude && (h.claude.loggedIn || h.claude.apiKey)) || !!ls.get('bh-key-claude');
    const gmOk = (h && h.gemini && h.gemini.ready) || !!storedKey('gemini');
    const cgOk = (h && h.chatgpt && h.chatgpt.ready) || !!ls.get('bh-key-chatgpt');
    $g('gdot-claude').className = 'gprov-dot ' + (clOk ? 'ok' : 'warn');
    $g('gdot-gemini').className = 'gprov-dot ' + (gmOk ? 'ok' : 'warn');
    $g('gdot-chatgpt').className = 'gprov-dot ' + (cgOk ? 'ok' : 'warn');

    const names = { claude: 'Claude (Pro CLI / API)', gemini: 'Google Gemini (Free Key / Cloud)', chatgpt: 'ChatGPT (Codex CLI / OpenAI)' };
    $g('gauthTitle').textContent = names[G.provider] || 'AI Login';
    const ph = {
      claude: 'Paste Anthropic API key (sk-ant-...)…',
      gemini: 'Paste Google Gemini API key (AIza... / AQ....)…',
      chatgpt: 'Paste OpenAI API key (sk-...)…'
    };
    $g('gauthKey').placeholder = ph[G.provider] || 'Paste API key…';
    $g('gauthKey').value = ls.get('bh-key-' + G.provider) || '';
    const ob = $g('gauthOAuth');
    if (ob) {
      if (G.provider === 'claude') {
        ob.textContent = G.serverBase !== null ? 'Login with Claude Pro (OAuth)' : 'Login with Claude Pro (OAuth) / Localhost ↗';
      } else if (G.provider === 'chatgpt') {
        ob.textContent = G.serverBase !== null ? 'Login with ChatGPT / Codex (OAuth)' : 'Sign in to OpenAI → Get API Key ↗';
      } else {
        ob.textContent = 'Sign in with Google → Get Free Gemini Key ↗';
      }
    }
  }

  async function health(force) {
    const st = $g('guideSt');
    let foundBase = null, hData = null;
    for (const base of candidateBases()) {
      try {
        const ctl = new AbortController();
        const t = setTimeout(() => ctl.abort(), 4500);
        const opts = { cache: 'no-store', signal: ctl.signal };
        // Only pass targetAddressSpace for cross-origin HTTPS -> localhost requests (Chrome Local Network Access)
        if (base && location.protocol === 'https:') opts.targetAddressSpace = 'loopback';
        let r;
        try {
          r = await fetch(base + '/ask/health' + (force ? '?force=1' : ''), opts);
        } catch (e1) {
          if (opts.targetAddressSpace) {
            delete opts.targetAddressSpace;
            r = await fetch(base + '/ask/health' + (force ? '?force=1' : ''), opts);
          } else {
            throw e1;
          }
        }
        clearTimeout(t);
        if (r.ok) {
          hData = await r.json();
          foundBase = base;
          break;
        }
      } catch (e) {}
    }
    G.serverBase = foundBase;
    G.healthData = hData;
    if (foundBase !== null && hData) {
      updateProviderPills();
      listen();
      const p = hData.providers || {};
      if (G.provider === 'claude') {
        const c = p.claude || {};
        st.textContent = c.loggedIn
          ? `Claude connected (${c.email || c.plan || 'Pro'}) · Local server.py ✓`
          : 'Claude CLI not logged in — click Login ▾ or switch to Gemini ✓';
        st.classList.toggle('bad', !c.loggedIn);
      } else if (G.provider === 'gemini') {
        const g = p.gemini || {};
        st.textContent = g.ready
          ? `Gemini connected (${g.keys} key${g.keys === 1 ? '' : 's'} active) · Local server.py ✓`
          : 'Gemini Cloud Mode active ✓';
        st.classList.remove('bad');
      } else {
        const x = p.chatgpt || {};
        st.textContent = x.ready
          ? `ChatGPT connected · Local server.py ✓`
          : 'Click Connect / Key ▾ to sign in or paste an OpenAI key';
        st.classList.toggle('bad', !x.ready);
      }
    } else {
      // Serverless / GitHub Pages Cloud Mode (only auto-switch on initial boot, never override a manual tab click!)
      if (!force && !G.manualProv && G.provider === 'claude' && !ls.get('bh-key-claude') && storedKey('gemini')) {
        G.provider = 'gemini';
        ls.set('bh-guide-provider', 'gemini');
      }
      updateProviderPills();
      const hasK = !!storedKey(G.provider) || !!storedKey('gemini');
      st.innerHTML = hasK
        ? `<span>Cloud Mode (<b>${esc(G.provider.toUpperCase())}</b>) Ready ✓</span>${location.hostname.includes('github.io') ? ` <a href="http://localhost:5179/${location.hash || ''}" style="color:#e5bd62;text-decoration:underline" title="Open on localhost:5179 to use your local Claude Pro CLI login">Switch to localhost:5179 for Claude CLI ↗</a>` : ''}`
        : `Offline from server.py · Click “Connect / Key” above to sign in or paste a key`;
      st.classList.toggle('bad', !hasK);
    }
  }

  // ---------- Markdown Renderer & Chat Log ----------
  const panel = $g('guidePanel'), logEl = $g('guideLog'), qEl = $g('guideQ');
  function md(s) {
    let h = esc(s || '');
    h = h.replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,;:]|$)/g, '$1<i>$2</i>')
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/(^|[\s(])(https?:\/\/[^\s)<]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>');
    const out = []; let list = null;
    h.split('\n').forEach(line => {
      const li = /^\s*(?:[-*•]|\d+\.)\s+(.*)$/.exec(line);
      if (li) { if (!list) { list = []; out.push(list); } list.push(li[1]); return; }
      list = null;
      if (/^#{1,4}\s/.test(line)) out.push(`<p class="gh">${line.replace(/^#{1,4}\s/, '')}</p>`);
      else if (line.trim()) out.push(`<p>${line}</p>`); else out.push('');
    });
    h = out.map(x => Array.isArray(x) ? `<ul>${x.map(i => `<li>${i}</li>`).join('')}</ul>` : x).join('');
    return h.replace(/[ء-يٮ-ۓ][؀-ۿ\s،؛:\-\d٠-٩]*[ء-ْٮ-ۓ]/g, m => `<span class="gar" lang="ar" dir="rtl">${m}</span>`);
  }

  function renderLog() {
    logEl.innerHTML = G.log.map((m, i) => m.who === 'me'
      ? `<div class="gm me"><p>${esc(m.text)}</p>${m.about ? `<span class="gab">about ${esc(m.about)}</span>` : ''}</div>`
      : `<div class="gm cl${m.err ? ' err' : ''}" data-i="${i}">${m.steps && m.steps.length
          ? `<details class="gsteps"${m.live ? ' open' : ''}><summary>${m.live ? '<i class="gspin"></i>' : ''}${esc(m.live ? m.steps[m.steps.length - 1] : `${m.steps.length} step${m.steps.length > 1 ? 's' : ''}: what the Guide did`)}</summary><ol>${m.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol></details>`
          : (m.live ? '<p class="pv-quiet"><i class="gspin"></i>Thinking…</p>' : '')}
        <div class="gtext">${md(m.text)}</div>${m.meta ? `<p class="gmeta">${esc(m.meta)}</p>` : ''}</div>`
    ).join('') || `<div class="gempty">
      <p>Ask about any of Burhān's <b>634 Tactical Debate Playbooks</b>, verses, ḥadīths, or manuscript scans. Right-click (or long-press) any claim, answer node, quote, or scan and choose <b>Ask about this</b>.</p>
      <p class="pv-quiet">Switch between <b>Claude</b>, <b>Gemini</b>, and <b>ChatGPT</b> above. The lantern scribe walks across the page, opens Full proof, underlines verbatim quotes, or draws a full-screen step-by-step Canvas.</p>
      <div class="rowline">${[
        'Walk me through the Islamic Dilemma (Q. 5:47) with verbatim quotes',
        'Show me the Angel of the LORD (Exodus 23:20–21) & build a Canvas',
        'Point to the key quote on this page'
      ].map(q => `<button type="button" class="pill" data-gq="${esc(q)}">${esc(q)}</button>`).join('')}</div>
    </div>`;
    logEl.scrollTop = logEl.scrollHeight;
  }

  let saveT = null;
  const saveLog = () => {
    clearTimeout(saveT);
    saveT = setTimeout(() => ss.set('bh-guide-log', JSON.stringify(G.log.slice(-40).map(m => Object.assign({}, m, { live: false })))), 300);
  };
  function ctxChip() {
    const c = context();
    $g('guideCtx').innerHTML = `<span class="gchip">${esc(c.title || 'Burhān')}</span>${G.about ? `<span class="gchip on">${esc(G.about.label)}<button type="button" aria-label="Clear focus" data-gforget>×</button></span>` : ''}`;
  }
  function togglePanel(open) {
    const on = open == null ? panel.hidden : open;
    panel.hidden = !on;
    $g('guideAsk').classList.toggle('hide', on);
    if (on) { renderLog(); ctxChip(); health(); setTimeout(() => qEl.focus(), 30); }
    if (!AV.anchor) goHome();
  }


  // ---------- Serverless / Mobile In-Browser Cloud Tool-Calling Engine ----------
  const CLOUD_SYSTEM = `You are the Burhān Guide — fast, sharp scholar-scribe inside Burhān (766 Tactical Debate Playbooks & Explainers).
Answer in the user's language (German if asked in German, English if asked in English).
BE FAST AND MINIMAL WITH TOOL CALLS (aim for 1–2 tool turns total!):
- If the user asks about a broad topic/gospel/category (e.g. "Jesus god in Mark", "Trinity in OT", "Aisha"), call search(query) ONCE — it returns BOTH matching \`sections\` (folders) and \`hits\` (cards). If a matching section/folder exists, call \`goto(path)\` directly to that section and give a crisp overview! Do NOT waste turns opening random sub-cards or calling \`open_proof\` twice.
- If the user asks about one specific card/verse, call \`search\`, then in ONE turn call \`card(path)\` + \`goto(path, open_proof:true)\` together (remember \`goto\` with \`open_proof:true\` already opens the drawer — never call \`open_proof\` again after!).
- Cite exact verbatim primary quotes and verse references from the cards.
- Only call \`canvas_show\` when the user asks for a step-by-step walkthrough or Canvas.`;

  const CLOUD_TOOLS_GEMINI = [{
    functionDeclarations: [
      { name: 'search', description: 'Search all 766 Burhān cards by keyword, verse, or topic.', parameters: { type: 'object', properties: { query: { type: 'string' }, k: { type: 'integer' } }, required: ['query'] } },
      { name: 'card', description: 'Read full debate tree, verbatim quotes, facts, and sources of a card by path.', parameters: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] } },
      { name: 'sections', description: 'List Burhān doors/categories or cards inside a section path.', parameters: { type: 'object', properties: { path: { type: 'string' } } } },
      { name: 'goto', description: 'Open a card or section path on screen (pass "" for Home).', parameters: { type: 'object', properties: { path: { type: 'string' }, open_proof: { type: 'boolean' }, step: { type: 'integer' } }, required: ['path'] } },
      { name: 'go_back', description: 'Go back one level or close open drawer/lightbox.', parameters: { type: 'object', properties: {} } },
      { name: 'open_proof', description: 'Open or close the Full proof drawer for step 1..N on the current card.', parameters: { type: 'object', properties: { step: { type: 'integer' }, words: { type: 'string' }, close: { type: 'boolean' } } } },
      { name: 'open_shot', description: 'Zoom in on a primary manuscript scan in the full-screen lightbox (index 1..N or words matching caption, or close:true).', parameters: { type: 'object', properties: { index: { type: 'integer' }, words: { type: 'string' }, close: { type: 'boolean' } } } },
      { name: 'scroll', description: 'Scroll the active view up, down, top, bottom, or to a target.', parameters: { type: 'object', properties: { direction: { type: 'string' }, target: { type: 'string' } } } },
      { name: 'pick_branch', description: 'Expand branch A, B, or C on a fork.', parameters: { type: 'object', properties: { branch: { type: 'string' }, words: { type: 'string' } } } },
      { name: 'point', description: 'Walk the scribe to a target ("quote:1", "point:1", "text:<words>") and underline it in gold.', parameters: { type: 'object', properties: { target: { type: 'string' }, label: { type: 'string' } }, required: ['target'] } },
      { name: 'circle', description: 'Walk the scribe to a target and draw a hand-drawn gold ring around it.', parameters: { type: 'object', properties: { target: { type: 'string' }, label: { type: 'string' } }, required: ['target'] } },
      { name: 'say', description: 'Show a 1-2 sentence speech bubble above the scribe.', parameters: { type: 'object', properties: { text: { type: 'string' } }, required: ['text'] } },
      { name: 'look', description: 'Inspect what is currently visible on the user\'s screen.', parameters: { type: 'object', properties: {} } },
      { name: 'canvas_show', description: 'Open the full-screen step-by-step explainer canvas with 4-8 slides ({kind:"title"|"points"|"quote"|"compare"|"verdicts"|"text", heading, title, sub, items, who, ar, en, src, left, right, winner, why, say}).', parameters: { type: 'object', properties: { title: { type: 'string' }, append: { type: 'boolean' }, steps: { type: 'array', items: { type: 'object' } } }, required: ['steps'] } }
    ]
  }];

  async function askCloudOpenAI(q, ctx, m, key) {
    const t0 = performance.now();
    const prompt = `Current Burhān page (JSON): ${JSON.stringify(ctx)}\n\nUser asks: ${q}`;
    if (!G.cloudOpenAIHist) G.cloudOpenAIHist = [{ role: 'system', content: CLOUD_SYSTEM }];
    G.cloudOpenAIHist.push({ role: 'user', content: prompt });
    const tools = CLOUD_TOOLS_GEMINI[0].functionDeclarations.map(d => ({
      type: 'function',
      function: { name: d.name, description: d.description, parameters: d.parameters }
    }));
    let turns = 0;
    for (let turn = 0; turn < 8; turn++) {
      turns++;
      const r = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + key },
        body: JSON.stringify({ model: 'gpt-4o-mini', messages: G.cloudOpenAIHist.slice(-18), tools, temperature: 0.2 })
      });
      if (!r.ok) {
        const errTxt = await r.text().catch(() => '');
        m.err = true; m.text += (m.text ? '\n\n' : '') + `OpenAI Cloud error (${r.status}): ${errTxt.slice(0, 220)}`;
        break;
      }
      const j = await r.json();
      const msg = j.choices && j.choices[0] && j.choices[0].message;
      if (!msg) break;
      G.cloudOpenAIHist.push(msg);
      if (msg.content) {
        m.text += msg.content;
        if (AV.state === 'think' && !AV.anchor) AV.state = 'talk';
        renderLog();
      }
      const tcalls = msg.tool_calls || [];
      if (!tcalls.length) break;
      for (const tc of tcalls) {
        const name = tc.function && tc.function.name;
        let args = {};
        try { args = JSON.parse((tc.function && tc.function.arguments) || '{}'); } catch (e) {}
        m.steps.push(`${name}: ${JSON.stringify(args).slice(0, 90)}`);
        renderLog();
        let res;
        try { res = ACT[name] ? await ACT[name](args) : { ok: false, note: 'unknown tool ' + name }; }
        catch (e) { res = { ok: false, note: String(e.message || e) }; }
        G.cloudOpenAIHist.push({ role: 'tool', tool_call_id: tc.id, content: JSON.stringify(res) });
      }
    }
    m.meta = `${Math.round((performance.now() - t0) / 1000)} s · ${turns} turns · ChatGPT Cloud Mode`;
  }

  async function askCloudBrowser(q, ctx, m) {
    const provKey = storedKey(G.provider);
    const geminiKey = storedKey('gemini');
    const openaiKey = storedKey('chatgpt');
    const key = provKey || geminiKey || openaiKey;
    if (!key) {
      m.err = true;
      m.text = 'Click **Connect / Key** above → click **Sign in with Google → Get Free Gemini Key ↗**, paste your free key once, and click **Save Key** (takes 10 seconds and works on every PC & phone without `server.py`!).';
      return;
    }
    if ((G.provider === 'chatgpt' && provKey) || (!geminiKey && openaiKey)) {
      return askCloudOpenAI(q, ctx, m, provKey || openaiKey);
    }
    const t0 = performance.now();
    const prompt = `Current Burhān page (JSON): ${JSON.stringify(ctx)}\n\nUser asks: ${q}`;
    G.cloudHist.push({ role: 'user', parts: [{ text: prompt }] });
    if (!G.badMods) G.badMods = {};
    const allModels = ['gemini-3.6-flash', 'gemini-3.5-flash', 'gemini-3.5-flash-lite', 'gemini-3.1-flash-lite', 'gemini-2.5-flash', 'gemini-3.8-flash'];
    let turns = 0;
    for (let turn = 0; turn < 5; turn++) {
      turns++;
      let cand = null, lastErr = '';
      const now = Date.now();
      const ordered = allModels.filter(x => !(G.badMods[x] > now)).concat(allModels.filter(x => G.badMods[x] > now));
      for (const mod of ordered) {
        try {
          const ctl = new AbortController();
          const t = setTimeout(() => ctl.abort(), 9000);
          const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${mod}:generateContent?key=${encodeURIComponent(key)}`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            signal: ctl.signal,
            body: JSON.stringify({
              systemInstruction: { parts: [{ text: CLOUD_SYSTEM }] },
              contents: G.cloudHist.slice(-14),
              tools: CLOUD_TOOLS_GEMINI,
              generationConfig: { temperature: 0.2, thinkingConfig: { thinkingBudget: 0 } }
            })
          });
          clearTimeout(t);
          if (!r.ok) {
            lastErr = `${mod} HTTP ${r.status}`;
            if (r.status === 404 || r.status === 400) G.badMods[mod] = now + 300000;
            else if (r.status === 503 || r.status === 429) G.badMods[mod] = now + 60000;
            continue;
          }
          const j = await r.json();
          cand = (j.candidates || [])[0];
          if (cand && cand.content) break;
        } catch (e) {
          lastErr = String(e.message || e);
          G.badMods[mod] = now + 45000;
        }
      }
      if (!cand || !cand.content) {
        m.err = true; m.text += (m.text ? '\n\n' : '') + `Cloud API error: ${lastErr || 'No model responded'}`;
        break;
      }
      const parts = cand.content.parts || [];
      G.cloudHist.push({ role: 'model', parts });
      const fcalls = parts.filter(p => p.functionCall).map(p => p.functionCall);
      for (const p of parts) {
        if (p.text && !p.thought) {
          m.text += p.text;
          if (AV.state === 'think' && !AV.anchor) AV.state = 'talk';
          renderLog();
        }
      }
      if (!fcalls.length) break;
      const fres = [];
      for (const fc of fcalls) {
        const name = fc.name, args = fc.args || {};
        m.steps.push(`${name}: ${JSON.stringify(args).slice(0, 90)}`);
        renderLog();
        let res;
        try { res = ACT[name] ? await ACT[name](args) : { ok: false, note: 'unknown tool ' + name }; }
        catch (e) { res = { ok: false, note: String(e.message || e) }; }
        fres.push({ functionResponse: { name, response: res } });
      }
      G.cloudHist.push({ role: 'user', parts: fres });
    }
    m.meta = `${Math.round((performance.now() - t0) / 1000)} s · ${turns} turns · Browser Cloud Mode`;
  }

  // ---------- Main Ask Function (Local server.py SSE OR Browser Cloud Fallback) ----------
  async function ask(text) {
    const q = String(text || qEl.value || '').trim();
    if (!q || G.asking) return null;
    qEl.value = ''; G.asking = true; $g('guideSend').disabled = true;
    const about = G.about;
    G.log.push({ who: 'me', text: q, about: about && about.label });
    const m = { who: 'cl', text: '', steps: [], live: true };
    G.log.push(m); renderLog();
    G.busy++; AV.anchor = null; AV.state = 'think'; wake();
    if (!G.hidden) say('');
    const ctx = context();

    if (G.serverBase === null) await health();

    if (G.serverBase !== null) {
      listen();
      try {
        const res = await fetch((G.serverBase || '') + '/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            question: q,
            context: ctx,
            session: G.session || undefined,
            client: G.client,
            provider: G.provider,
            apiKey: storedKey(G.provider) || undefined
          })
        });
        if (!res.ok || !res.body) throw new Error(`server answered ${res.status}`);
        const rd = res.body.getReader(), dec = new TextDecoder();
        let buf = '', painted = 0;
        for (;;) {
          const { value, done } = await rd.read();
          if (done) break;
          buf += dec.decode(value, { stream: true });
          let i;
          while ((i = buf.indexOf('\n\n')) >= 0) {
            const chunk = buf.slice(0, i); buf = buf.slice(i + 2);
            if (!chunk.startsWith('data: ')) continue;
            let ev; try { ev = JSON.parse(chunk.slice(6)); } catch (e) { continue; }
            if (ev.type === 'session' && ev.id) { G.session = ev.id; ss.set('bh-guide-session', ev.id); }
            else if (ev.type === 'text') { m.text += ev.text; if (AV.state === 'think' && !AV.anchor) AV.state = 'talk'; }
            else if (ev.type === 'tool') { m.steps.push(ev.label); if (!AV.anchor && ev.name !== 'say') AV.state = 'think'; }
            else if (ev.type === 'done') {
              if (!m.text.trim()) m.text = ev.text || '';
              const pName = (ev.provider || G.provider).toUpperCase();
              m.meta = `${ev.ms ? Math.round(ev.ms / 1000) + ' s' : ''}${ev.turns ? ` · ${ev.turns} turns` : ''} · ${pName}`;
            } else if (ev.type === 'error') {
              m.err = true; m.text += (m.text ? '\n\n' : '') + ev.message;
            }
          }
          if (performance.now() - painted > 80) { painted = performance.now(); renderLog(); }
        }
      } catch (e) {
        // Seamless fallback to Browser Cloud Mode if local server dropped!
        if (storedKey('gemini') || storedKey(G.provider)) {
          m.steps.push('Local server unreachable — running in Browser Cloud Mode…');
          await askCloudBrowser(q, ctx, m);
        } else {
          m.err = true;
          m.text += (m.text ? '\n\n' : '') + `Could not reach local server.py (${e.message || e}). Start \`python3 server.py\` or paste an API key under Connect / Key.`;
        }
      }
    } else {
      await askCloudBrowser(q, ctx, m);
    }

    m.live = false; G.busy = Math.max(0, G.busy - 1); unlisten(); G.asking = false; $g('guideSend').disabled = false;
    if (AV.state !== 'point') { AV.state = 'idle'; if (!AV.anchor) goHome(); }
    renderLog(); saveLog(); ctxChip();
    return m;
  }

  // ---------- Draggable & Resizable Panel Window ----------
  (function initPanelDrag() {
    const bar = $g('guideDragBar');
    if (!bar) return;
    function applyPos(left, top) {
      const r = panel.getBoundingClientRect();
      const w = r.width || 420, h = r.height || 540;
      const cl = Math.max(8, Math.min(innerWidth - Math.min(w, innerWidth - 16) - 8, left));
      const ct = Math.max(8, Math.min(innerHeight - 60, top));
      panel.style.left = cl + 'px';
      panel.style.top = ct + 'px';
      panel.style.right = 'auto';
      panel.style.bottom = 'auto';
      return [cl, ct];
    }
    try {
      const saved = JSON.parse(ls.get('bh-panel-pos') || 'null');
      if (saved && Number.isFinite(saved.left) && Number.isFinite(saved.top)) {
        applyPos(saved.left, saved.top);
      }
    } catch (e) {}
    let drag = null;
    bar.addEventListener('pointerdown', e => {
      if (e.target.closest('button')) return;
      const r = panel.getBoundingClientRect();
      drag = { dx: e.clientX - r.left, dy: e.clientY - r.top, id: e.pointerId };
      panel.classList.add('dragging');
      bar.setPointerCapture(e.pointerId);
    });
    bar.addEventListener('pointermove', e => {
      if (!drag) return;
      const [l, t] = applyPos(e.clientX - drag.dx, e.clientY - drag.dy);
      drag.l = l; drag.t = t;
      if (!AV.anchor) { const [hx, hy] = home(); place(hx, hy); AV.tx = hx; AV.ty = hy; }
    });
    const endDrag = () => {
      if (!drag) return;
      panel.classList.remove('dragging');
      if (Number.isFinite(drag.l)) ls.set('bh-panel-pos', JSON.stringify({ left: drag.l, top: drag.t }));
      drag = null;
    };
    bar.addEventListener('pointerup', endDrag);
    bar.addEventListener('pointercancel', endDrag);
    bar.addEventListener('dblclick', e => {
      if (e.target.closest('button')) return;
      panel.style.left = ''; panel.style.top = ''; panel.style.right = '20px'; panel.style.bottom = '20px';
      panel.style.width = ''; panel.style.height = '';
      ls.set('bh-panel-pos', null);
      if (!AV.anchor) goHome();
    });
    addEventListener('resize', () => {
      if (panel.style.left) {
        const r = panel.getBoundingClientRect();
        applyPos(r.left, r.top);
      }
      if (!AV.anchor) goHome();
    });
  })();

  // Keep scribe & marks clean whenever the user navigates manually inside Burhān
  document.addEventListener('click', e => {
    if (e.target.closest('.card, .door, .back, #logo, #crumbs button, #results button')) {
      setTimeout(() => {
        ctxChip();
        if (!G.asking && AV.anchor && AV.anchor.nodeType === 1 && !AV.anchor.isConnected) {
          clearMarks(); goHome();
        }
      }, 450);
    }
  });

  // ---------- Event Bindings for Panel, Provider Tabs & Login Drawer ----------
  $g('guideAsk').onclick = () => togglePanel(true);
  $g('guideClose').onclick = () => togglePanel(false);
  $g('guideNew').onclick = () => {
    G.session = ''; ss.set('bh-guide-session', null);
    G.log = []; G.cloudHist = []; saveLog(); renderLog(); clearMarks(); goHome();
  };
  $g('guideHide').onclick = () => {
    G.hidden = !G.hidden; ls.set('bh-guide-hide', G.hidden ? '1' : '0');
    av.classList.toggle('off', G.hidden);
    $g('guideHide').textContent = G.hidden ? 'Show scribe' : 'Hide scribe';
    if (!G.hidden) goHome();
  };
  const toggleAuthBox = open => {
    const box = $g('guideAuthBox');
    const on = open == null ? box.hidden : open;
    box.hidden = !on;
    $g('guideAuthBtn').classList.toggle('on', on);
    if (on) updateProviderPills();
  };
  $g('guideAuthBtn').onclick = () => toggleAuthBox();
  $g('guideQuickLogin').onclick = () => toggleAuthBox();
  $g('gauthClose').onclick = () => toggleAuthBox(false);

  document.querySelectorAll('.gprov-btn').forEach(btn => {
    btn.onclick = () => {
      G.manualProv = true;
      G.provider = btn.dataset.prov;
      ls.set('bh-guide-provider', G.provider);
      G.session = ''; ss.set('bh-guide-session', null);
      updateProviderPills();
      health();
    };
  });

  $g('gauthOAuth').onclick = async () => {
    const note = $g('gauthNote');
    if (G.serverBase === null) await health(true);
    if (G.serverBase === null) {
      if (G.provider === 'claude') {
        window.open('http://localhost:5179/' + (location.hash || ''), '_blank');
        note.innerHTML = 'Opened <b>localhost:5179</b> where your local <code>server.py</code> runs Claude Pro OAuth! (Or allow <i>Local Network Access</i> in Chrome site settings for damandam.github.io and click Check Status.)';
      } else if (G.provider === 'chatgpt') {
        window.open('https://platform.openai.com/api-keys', '_blank', 'noopener');
        note.textContent = 'Opened OpenAI API Keys in a new tab. Sign in with your OpenAI account, copy a key (sk-...), paste it below, and click Save Key.';
      } else {
        window.open('https://aistudio.google.com/apikey', '_blank', 'noopener');
        note.textContent = 'Opened Google AI Studio in a new tab! Sign in with Google, click “Create API key” (free), paste it in the box below, and click Save Key.';
      }
      return;
    }
    if (G.provider === 'gemini') {
      window.open('https://aistudio.google.com/apikey', '_blank', 'noopener');
      note.textContent = 'Opened Google AI Studio in a new tab! Sign in with Google, create a free Gemini API key, paste it below, and click Save Key.';
      return;
    }
    note.textContent = `Opening ${G.provider.toUpperCase()} login in your browser…`;
    try {
      const r = await fetch((G.serverBase || '') + '/ask/login', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ provider: G.provider })
      }).then(x => x.json());
      note.textContent = r.message || 'Check your browser tab to finish login.';
      setTimeout(() => health(true), 3000);
    } catch (e) {
      note.textContent = 'Could not reach local server.py: ' + (e.message || e);
    }
  };
  $g('gauthCheck').onclick = () => health(true);
  $g('gauthSaveKey').onclick = async () => {
    const k = $g('gauthKey').value.trim();
    const note = $g('gauthNote');
    if (!k) { setStoredKey(G.provider, null); note.textContent = `Cleared browser key for ${G.provider}.`; health(true); return; }
    // Auto-detect key provider from prefix
    let targetProv = G.provider;
    if (k.startsWith('AIza') || k.startsWith('AQ.')) targetProv = 'gemini';
    else if (k.startsWith('sk-ant-')) targetProv = 'claude';
    else if (k.startsWith('sk-')) targetProv = 'chatgpt';
    G.provider = targetProv;
    ls.set('bh-guide-provider', targetProv);
    setStoredKey(targetProv, k);
    if (G.serverBase !== null) {
      try {
        await fetch((G.serverBase || '') + '/ask/key', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ provider: targetProv, key: k })
        });
      } catch (e) {}
    }
    note.textContent = `Saved ${targetProv.toUpperCase()} key! Works both locally and in Browser Cloud Mode ✓`;
    await health(true);
  };

  logEl.addEventListener('click', e => {
    const b = e.target.closest('[data-gq]');
    if (b) { qEl.value = b.dataset.gq; ask(); }
  });
  $g('guideCtx').addEventListener('click', e => {
    if (e.target.closest('[data-gforget]')) { G.about = null; ctxChip(); }
  });
  $g('guideForm').onsubmit = e => { e.preventDefault(); ask(); };
  qEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(); }
    if (e.key === 'Escape') togglePanel(false);
  });

  // ---------- Right-Click / Long-Press "Ask about this" ----------
  const menu = $g('guideMenu');
  function aboutOf(target) {
    const sel = String(getSelection && getSelection() || '').trim();
    if (sel && sel.length > 2 && sel.length < 600) {
      return {
        kind: 'selection', text: sel,
        label: `“${sel.slice(0, 42)}${sel.length > 42 ? '…' : ''}”`,
        quick: ['Explain this and give the verbatim sources', 'Build a step-by-step Canvas on this']
      };
    }
    const qcard = target.closest('.qcard, .quote, .doc');
    if (qcard) {
      const t = qcard.textContent.replace(/\s+/g, ' ').trim();
      return {
        kind: 'quote', text: t.slice(0, 600),
        label: `Quote: “${t.slice(0, 38)}…”`,
        quick: ['Explain the context and manuscript/source proof of this quote', 'How do we use this quote in live debate?']
      };
    }
    const pcard = target.closest('.pcard, .fact');
    if (pcard) {
      const t = pcard.textContent.replace(/\s+/g, ' ').trim();
      return {
        kind: 'proof_point', text: t.slice(0, 600),
        label: `“${t.slice(0, 40)}…”`,
        quick: ['Deepen this proof point with primary quotes', 'What if the opponent counters this point?']
      };
    }
    const bub = target.closest('.node .bub, .opt');
    if (bub) {
      const t = bub.textContent.replace(/\s+/g, ' ').trim();
      return {
        kind: 'argument_node', text: t.slice(0, 600),
        label: `“${t.slice(0, 40)}…”`,
        quick: ['Open Full proof and point to the key quote', 'Build a step-by-step Canvas walkthrough of this argument']
      };
    }
    const card = target.closest('.card, .door');
    if (card) {
      const h = card.querySelector('h3, h4');
      const title = h ? h.textContent.trim() : card.textContent.trim().slice(0, 50);
      return {
        kind: 'topic_card', title,
        label: title,
        quick: [`Open "${title}" and summarize the core refutation`, `Build a Canvas presentation for "${title}"`]
      };
    }
    return null;
  }
  function openMenu(x, y, about) {
    G.pending = about;
    menu.innerHTML = `<p class="gmh">${esc(about.label)}</p><button type="button" role="menuitem" data-gm="ask">Ask the Guide about this…</button>${(about.quick || []).map((q, i) => `<button type="button" role="menuitem" data-gm="${i}">${esc(q)}</button>`).join('')}`;
    menu.hidden = false;
    const r = menu.getBoundingClientRect();
    menu.style.left = Math.min(x, innerWidth - r.width - 8) + 'px';
    menu.style.top = Math.min(y, innerHeight - r.height - 8) + 'px';
    const first = menu.querySelector('button'); if (first) first.focus();
  }
  const closeMenu = () => { menu.hidden = true; };
  menu.addEventListener('click', e => {
    const b = e.target.closest('[data-gm]'); if (!b) return;
    const a = G.pending; closeMenu(); if (!a) return;
    G.about = Object.fromEntries(Object.entries(a).filter(([k]) => k !== 'quick'));
    togglePanel(true); ctxChip();
    if (b.dataset.gm === 'ask') qEl.focus(); else ask(a.quick[+b.dataset.gm]);
  });
  document.addEventListener('contextmenu', e => {
    if (e.shiftKey || e.target.closest('#guidePanel, #guideMenu, #gcv, input, textarea')) return;
    const a = aboutOf(e.target); if (!a) return;
    e.preventDefault(); openMenu(e.clientX, e.clientY, a);
  });
  document.addEventListener('click', e => {
    if (!menu.hidden && !e.target.closest('#guideMenu')) closeMenu();
  }, true);
  addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!menu.hidden) closeMenu();
    else if (G.marks.length || G.keep) { clearMarks(); say(''); goHome(); }
  });

  window.GUIDE = {
    ask: q => { togglePanel(true); return ask(q); },
    open: () => togglePanel(true),
    togglePanel: o => togglePanel(o),
    act: (a, args) => ACT[a](args || {}),
    clear: clearMarks,
    client: G.client,
    sprite: drawSprite,
    ACT,
    md,
    esc,
    foldAr,
    isAsking: () => !!G.asking,
    serverUrl: () => G.serverBase || ''
  };

  setTimeout(() => {
    const [x, y] = home(); AV.dir = -1; place(x, y); paint();
    health();
  }, 80);
})();
