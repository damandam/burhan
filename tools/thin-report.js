#!/usr/bin/env node
/* Compare each curated tile with the Discord source text behind it.
   node tools/thin-report.js [minRatio=0.25] [json=0]
   Prints tiles whose curated text is much shorter than the raw channel text. */
const fs=require('fs'), path=require('path');
const T=path.join(__dirname,'..','topics');
global.window=global;
global.TOPICS=[]; global.topic=(p,n)=>TOPICS.push({p,n});
require(path.join(T,'library.js'));
const rawText=t=>{ const out=[]; (function w(n){ if(!n) return; out.push([].concat(n.more?.p||[]).join(' ')); (n.next||[]).forEach(w); })(t); return out.join(' ').replace(/\s+/g,' ').trim(); };
const raw={};
for(const {p,n} of TOPICS){ const key=p.join('/');
  if(n.article) raw[key]={title:n.title,text:rawText(n.article.tree),credit:n.article.tree?.more?.credit,link:n.article.tree?.more?.link};
  if(n.children) for(const [k,c] of Object.entries(n.children)) if(c.article) raw[key+'/'+k]={title:c.title,text:rawText(c.article.tree),credit:c.article.tree?.more?.credit,link:c.article.tree?.more?.link}; }
const flat=o=>JSON.stringify(o).replace(/"[a-z]+":/g,' ').replace(/[\[\]{}",]/g,' ').replace(/\s+/g,' ').trim();
const cur={}; const note=(kind)=>(key,...a)=>{ if(kind==='tr'){ cur[key]={kind,text:[a[1],a[2]].join(' ')}; return; } cur[key]={kind,text:flat(a[0]||{}),title:a[0]?.title}; };
global.cur={ex:note('ex'),deb:note('deb'),tr:note('tr'),hide:k=>{cur[k]={kind:'hide',text:''}},name:()=>{},move:()=>{},merge:()=>{}};
for(const f of fs.readdirSync(T).filter(f=>f.startsWith('curated-')&&f!=='curated-lib.js')) require(path.join(T,f));
const [minR='0.25',asJson='0']=process.argv.slice(2);
const rows=[];
for(const [k,c] of Object.entries(cur)){ if(c.kind==='hide') continue; const r=raw[k]; if(!r) continue;
  const rl=r.text.length, cl=c.text.length; rows.push({key:k,kind:c.kind,title:c.title||r.title,curated:cl,raw:rl,ratio:+(cl/Math.max(rl,1)).toFixed(2),credit:r.credit,link:r.link}); }
const thin=rows.filter(x=>x.raw>800&&x.ratio<+minR).sort((a,b)=>(b.raw-b.curated)-(a.raw-a.curated));
if(asJson==='1'){ console.log(JSON.stringify(thin,null,1)); return; }
const sum=a=>a.reduce((s,x)=>s+x,0);
console.log(`curated tiles with a source: ${rows.length}`);
console.log(`curated text total: ${sum(rows.map(x=>x.curated))} chars · source text total: ${sum(rows.map(x=>x.raw))} chars`);
console.log(`thin (source >800 chars, curated <${minR} of it): ${thin.length}`);
const byKind={}; thin.forEach(x=>byKind[x.kind]=(byKind[x.kind]||0)+1); console.log('by kind:',byKind);
const bySrv={}; thin.forEach(x=>{const s=(x.credit||'?').split('·')[0].trim(); bySrv[s]=(bySrv[s]||0)+1;}); console.log('by server:',bySrv);
console.log('\nworst 40 (curated / source chars):');
thin.slice(0,40).forEach(x=>console.log(`${String(x.curated).padStart(6)} / ${String(x.raw).padStart(7)}  ${x.kind.padEnd(3)} ${x.key}  — ${x.credit||''}`));
