/* The Burhān Guide's Canvas: full-screen step-by-step interactive walkthrough (#gcv).
   Noel steps through with Space / → / ←, asks follow-ups in the bottom bar, and saves as Markdown or A4 Landscape PDF. */
(function () {
  'use strict';
  const G = window.GUIDE;
  if (!G) return;
  const esc = G.esc, md = G.md;

  const box = document.createElement('div');
  box.innerHTML = `<div id="gcv" class="gcv" hidden role="dialog" aria-label="Burhān Guide Canvas">
    <div class="gcv-top">
      <div class="gcv-head"><span class="gcv-kicker">The Guide's Canvas</span><span id="gcvTitle" class="gcv-title"></span></div>
      <div id="gcvDots" class="gcv-dots" role="tablist"></div>
      <div style="display:flex;gap:6px">
        <button type="button" id="gcvSave" class="gcv-close" title="Save as Markdown (.md)">Save .md</button>
        <button type="button" id="gcvPdf" class="gcv-close" title="Save as A4 Landscape PDF">Save PDF</button>
        <button type="button" id="gcvClose" class="gcv-close">Close · Esc</button>
      </div>
    </div>
    <div id="gcvStage" class="gcv-stage"></div>
    <div class="gcv-bar">
      <button type="button" id="gcvPrev" class="gcv-btn">← Back</button>
      <form id="gcvForm" class="gcv-ask">
        <span id="gcvCount" class="gcv-count"></span>
        <input id="gcvQ" type="text" placeholder="Ask to add, compare, or deepen a step… (press /)" autocomplete="off">
        <button type="submit" id="gcvSend">Ask</button>
      </form>
      <button type="button" id="gcvNext" class="gcv-btn pri">Next · Space →</button>
    </div>
  </div>`;
  document.body.appendChild(box.firstElementChild);

  const $ = id => document.getElementById(id);
  const CV = { open: false, title: '', steps: [], i: 0 };
  const GLAB = { sahih: 'ṣaḥīḥ', hasan: 'ḥasan', daif: 'ḍaʿīf', very_weak: 'very weak' };
  const badge = g => g ? `<span class="gcv-badge g-${esc(String(g).toLowerCase().replace(/\s+/g, '_'))}">${esc(GLAB[g] || g)}</span>` : '';

  function stepBody(s, i, n) {
    const k = s.kind || 'points';
    const no = `<p class="gcv-stepno">Step ${i + 1} of ${n}</p>`;
    if (k === 'title') {
      return `<div class="gcv-card gcv-hero">${no}${s.ar ? `<p class="gcv-ar-big" lang="ar" dir="rtl">${esc(s.ar)}</p>` : ''}<h1>${esc(s.title || s.heading || CV.title)}</h1>${s.sub ? `<p class="gcv-sub">${md(s.sub)}</p>` : ''}</div>`;
    }
    if (k === 'quote') {
      return `<div class="gcv-card">${no}${s.heading ? `<h2>${esc(s.heading)}</h2>` : ''}
        <blockquote class="gcv-quote">
          <div class="gcv-qhead"><span class="gcv-who">${esc(s.who || s.by || '')}</span>${badge(s.grade)}</div>
          ${s.ar ? `<p class="gcv-q-ar" lang="ar" dir="rtl">${esc(s.ar)}</p>` : ''}
          ${s.en ? `<div class="gcv-q-en">${md(s.en)}</div>` : ''}
          ${s.src ? `<p class="gcv-src">${esc(s.src)}${s.link ? ` · <a href="${esc(s.link)}" target="_blank" rel="noopener">source ↗</a>` : ''}</p>` : ''}
        </blockquote></div>`;
    }
    if (k === 'compare') {
      const col = (c, side) => !c ? '' : `<div class="gcv-col${s.winner === side ? ' win' : ''}">
        <h3>${esc(c.title || '')}</h3>${c.sub ? `<p class="gcv-col-sub">${esc(c.sub)}</p>` : ''}
        <ul>${(c.points || c.items || []).map(p => `<li>${md(String(p))}</li>`).join('')}</ul>
        ${c.verdict ? `<p class="gcv-col-v">${md(c.verdict)}</p>` : ''}</div>`;
      return `<div class="gcv-card">${no}${s.heading ? `<h2>${esc(s.heading)}</h2>` : ''}<div class="gcv-cmp">${col(s.left, 'left')}${col(s.right, 'right')}</div>${s.why ? `<div class="gcv-note">${md(s.why)}</div>` : ''}</div>`;
    }
    if (k === 'verdicts') {
      const items = (s.items || []).map(v => `<div class="gcv-vcard"><div class="gcv-vtop"><span class="gcv-who">${esc(v.who || v.scholar || '')}</span>${badge(v.grade)}</div>${v.note ? `<p>${md(v.note)}</p>` : ''}${v.src ? `<p class="gcv-src">${esc(v.src)}</p>` : ''}</div>`).join('');
      return `<div class="gcv-card">${no}${s.heading ? `<h2>${esc(s.heading)}</h2>` : ''}<div class="gcv-vlist">${items}</div></div>`;
    }
    if (k === 'text') {
      return `<div class="gcv-card">${no}${s.heading ? `<h2>${esc(s.heading)}</h2>` : ''}<div class="gcv-text">${md(s.text || '')}</div></div>`;
    }
    const items = (s.items || s.points || []).map((p, j) => `<li><span class="gcv-n">${j + 1}</span><div>${md(String(p))}</div></li>`).join('');
    return `<div class="gcv-card">${no}${s.heading || s.title ? `<h2>${esc(s.heading || s.title)}</h2>` : ''}<ol class="gcv-points">${items}</ol>${s.note ? `<div class="gcv-note">${md(s.note)}</div>` : ''}</div>`;
  }

  function paint() {
    const n = CV.steps.length, s = CV.steps[CV.i] || {};
    $('gcv').hidden = !CV.open;
    if (!CV.open || !n) return;
    $('gcvTitle').textContent = CV.title || '';
    $('gcvDots').innerHTML = CV.steps.map((x, j) => `<button type="button" class="gcv-dot${j === CV.i ? ' on' : j < CV.i ? ' done' : ''}" data-i="${j}" title="Step ${j + 1}: ${esc(x.heading || x.title || x.kind || '')}"></button>`).join('');
    $('gcvStage').innerHTML = stepBody(s, CV.i, n);
    $('gcvCount').textContent = `${CV.i + 1} / ${n}`;
    $('gcvPrev').disabled = CV.i <= 0;
    $('gcvNext').textContent = CV.i >= n - 1 ? 'Done · Space' : 'Next · Space →';
    if (s.say) G.ACT.say({ text: s.say });
  }

  function go(i) {
    if (!CV.steps.length) return;
    if (i >= CV.steps.length) { close(); return; }
    CV.i = Math.max(0, Math.min(CV.steps.length - 1, i));
    CV.open = true; paint();
  }
  function close() { CV.open = false; $('gcv').hidden = true; G.ACT.say({ text: '' }); }

  function stepMd(s, i, n) {
    const k = s.kind || 'points', head = `## Step ${i + 1} of ${n}${s.heading || s.title ? ' — ' + (s.heading || s.title) : ''}`;
    const say = s.say ? `\n> *The Guide:* “${s.say}”\n` : '';
    if (k === 'title') return `${head}${say}\n${s.ar ? s.ar + '\n\n' : ''}${s.sub || ''}`;
    if (k === 'quote') return `${head}${say}\n**${s.who || ''}**${s.grade ? ' · *' + (GLAB[s.grade] || s.grade) + '*' : ''}\n\n${s.ar ? '> ' + s.ar + '\n>\n' : ''}${s.en ? '> ' + s.en + '\n' : ''}${s.src ? '\n— ' + s.src + (s.link ? ' (' + s.link + ')' : '') : ''}`;
    if (k === 'compare') {
      const col = (c, side) => !c ? '' : `### ${c.title || ''}${s.winner === side ? ' ✓' : ''}${c.sub ? ' (' + c.sub + ')' : ''}\n` + (c.points || c.items || []).map(p => `- ${p}`).join('\n') + (c.verdict ? `\n\n*${c.verdict}*` : '');
      return `${head}${say}\n${col(s.left, 'left')}\n\n${col(s.right, 'right')}${s.why ? '\n\n' + s.why : ''}`;
    }
    if (k === 'verdicts') return `${head}${say}\n` + (s.items || []).map(v => `- **${v.who || ''}**${v.grade ? ' (*' + (GLAB[v.grade] || v.grade) + '*)' : ''}: ${v.note || ''}${v.src ? ' — *' + v.src + '*' : ''}`).join('\n');
    if (k === 'text') return `${head}${say}\n${s.text || ''}`;
    return `${head}${say}\n` + (s.items || s.points || []).map((p, j) => `${j + 1}. ${p}`).join('\n') + (s.note ? '\n\n' + s.note : '');
  }

  function saveMd() {
    if (!CV.steps.length) return;
    const slug = (CV.title || 'canvas').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'canvas';
    const text = `# ${CV.title || "The Guide's Canvas"}\n\n` + CV.steps.map((s, i) => stepMd(s, i, CV.steps.length)).join('\n\n---\n\n') + '\n';
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'text/markdown;charset=utf-8' }));
    a.download = `${slug}.md`; a.click();
  }

  async function savePdf() {
    if (!CV.steps.length) return;
    const btn = $('gcvPdf'), old = btn.textContent;
    btn.disabled = true; btn.textContent = 'Making PDF…';
    const css = [...document.querySelectorAll('link[rel="stylesheet"]')].map(l => {
      try { return [...l.sheet.cssRules].map(r => r.cssText).join('\n'); } catch (e) { return ''; }
    }).join('\n');
    const sprite = document.createElement('canvas'); sprite.width = 56; sprite.height = 62;
    if (G.sprite) G.sprite(sprite.getContext('2d'), 'talk', 1, 0);
    const scribeImg = sprite.toDataURL('image/png');
    const slides = CV.steps.map((s, i) => `<section class="pdf-slide">
      <div class="gcv-top"><div class="gcv-head"><span class="gcv-kicker">Burhān · Clear Proof</span><span class="gcv-title">${esc(CV.title || '')}</span></div>
        <div class="gcv-dots">${CV.steps.map((_, j) => `<span class="gcv-dot${j === i ? ' on' : j < i ? ' done' : ''}"></span>`).join('')}</div>
        <span class="gcv-count">${i + 1} / ${CV.steps.length}</span></div>
      <div class="gcv-stage">${stepBody(s, i, CV.steps.length)}</div>
      ${s.say ? `<div class="pdf-scribe"><img src="${scribeImg}" alt=""><div class="pdf-say">${esc(s.say)}</div></div>` : ''}
    </section>`).join('\n');
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>${esc(CV.title || 'Canvas')}</title>
      <style>${css}
        @page{size:A4 landscape;margin:0}
        html,body{margin:0;padding:0;background:#09090c;color:#f3efe6;-webkit-print-color-adjust:exact;print-color-adjust:exact;font:15px/1.6 system-ui,sans-serif}
        .pdf-slide{width:297mm;height:210mm;box-sizing:border-box;display:flex;flex-direction:column;position:relative;overflow:hidden;page-break-after:always;break-after:page;background:radial-gradient(ellipse at 50% 18%,#1c1812,#09090c)}
        .pdf-slide:last-child{page-break-after:auto;break-after:auto}
        .pdf-slide .gcv-card,.pdf-slide .gcv-points li,.pdf-slide .gcv-col{animation:none!important}
        .pdf-slide .gcv-stage{flex:1;overflow:hidden;padding:18px 44px 74px}
        .pdf-scribe{position:absolute;left:32px;bottom:14px;right:32px;display:flex;align-items:center;gap:12px}
        .pdf-scribe img{width:46px;height:51px;image-rendering:pixelated;flex:none}
        .pdf-say{padding:8px 13px;border-radius:10px;background:rgba(20,18,15,.96);border:1px solid rgba(212,168,75,.5);color:#f3efe6;font-size:13px;line-height:1.45;max-width:780px}
      </style></head><body>${slides}</body></html>`;
    try {
      const serverUrl = G.serverUrl ? G.serverUrl() : '';
      const res = await fetch((serverUrl || '') + '/booklet/pdf', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ html }) });
      if (!res.ok) throw new Error('local PDF server unavailable');
      const blob = await res.blob(), a = document.createElement('a');
      const slug = (CV.title || 'canvas').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'canvas';
      a.href = URL.createObjectURL(blob); a.download = `${slug}.pdf`; a.click();
    } catch (e) {
      // Fallback on mobile / serverless: open print-ready window
      const w = window.open('', '_blank');
      if (w) { w.document.write(html); w.document.close(); setTimeout(() => w.print(), 500); }
    }
    btn.disabled = false; btn.textContent = old;
  }

  $('gcvClose').onclick = close;
  $('gcvSave').onclick = saveMd;
  $('gcvPdf').onclick = savePdf;
  $('gcvPrev').onclick = () => go(CV.i - 1);
  $('gcvNext').onclick = () => go(CV.i + 1);
  $('gcvDots').addEventListener('click', e => { const b = e.target.closest('[data-i]'); if (b) go(+b.dataset.i); });
  $('gcvForm').onsubmit = async e => {
    e.preventDefault();
    const q = $('gcvQ').value.trim(); if (!q || G.isAsking()) return;
    $('gcvQ').value = ''; $('gcvSend').disabled = true; $('gcvQ').placeholder = 'The Guide is updating the canvas…';
    await G.ask(q);
    $('gcvSend').disabled = false; $('gcvQ').placeholder = 'Ask to add, compare, or deepen a step… (press /)';
  };

  addEventListener('keydown', e => {
    if (!CV.open) return;
    const inBox = e.target && e.target.closest('input, textarea');
    if (e.key === 'Escape') { e.stopPropagation(); if (inBox) e.target.blur(); else close(); }
    else if (!inBox && (e.key === ' ' || e.key === 'ArrowRight')) { e.preventDefault(); go(CV.i + 1); }
    else if (!inBox && e.key === 'ArrowLeft') { e.preventDefault(); go(CV.i - 1); }
    else if (!inBox && e.key === '/') { e.preventDefault(); $('gcvQ').focus(); }
  }, true);

  G.ACT.canvas_show = async a => {
    const steps = Array.isArray(a.steps) ? a.steps.filter(x => x && typeof x === 'object') : [];
    if (!steps.length) return { ok: false, note: 'no steps given' };
    const firstNew = CV.steps.length;
    if (a.append && CV.steps.length) {
      CV.steps = CV.steps.concat(steps);
      if (a.title) CV.title = String(a.title);
      CV.i = firstNew;
    } else {
      CV.title = String(a.title || steps[0].title || steps[0].heading || 'Walkthrough');
      CV.steps = steps;
      CV.i = 0;
    }
    CV.open = true;
    G.togglePanel(false);
    paint();
    return { ok: true, steps: CV.steps.length, step: CV.i + 1, note: `Canvas open at step ${CV.i + 1} of ${CV.steps.length}` };
  };
  G.ACT.canvas_drop = async a => {
    const drop = new Set((a.steps || []).map(n => +n - 1));
    if (!CV.steps.length || !drop.size) return { ok: false, note: 'no steps to drop' };
    CV.steps = CV.steps.filter((_, i) => !drop.has(i));
    if (!CV.steps.length) { close(); return { ok: true, steps: 0, note: 'all steps removed; canvas closed' }; }
    CV.i = Math.min(CV.i, CV.steps.length - 1); paint();
    return { ok: true, steps: CV.steps.length, step: CV.i + 1, note: `dropped; ${CV.steps.length} steps remain` };
  };
  G.ACT.canvas_go = async a => { go((+a.step || 1) - 1); return { ok: true, step: CV.i + 1 }; };
  G.ACT.canvas_close = async () => { close(); return { ok: true, note: 'canvas closed' }; };
  G.canvasState = () => CV.open ? {
    open: true, title: CV.title, step: CV.i + 1, of: CV.steps.length,
    showing: CV.steps[CV.i],
    all_steps: CV.steps.map((s, i) => [i + 1, s.kind || 'points', s.heading || s.title || ''])
  } : null;
})();
