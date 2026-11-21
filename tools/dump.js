#!/usr/bin/env node
/* Print the source text behind generated tiles, compactly, for curation.
   node tools/dump.js islam/creed [maxCharsPerTile] [skipCurated=1] */
const path=require('path');
global.TOPICS=[]; global.topic=(p,n)=>TOPICS.push({p,n});
require(path.join(__dirname,'..','topics','library.js'));
const curated=new Set(); global.topic=(p)=>curated.add(p.join('/'));
global.window=global; global.TOPICS=TOPICS; global.cur={ex:k=>curated.add(k),deb:k=>curated.add(k),hide:k=>curated.add(k),name:()=>{},tr:k=>curated.add(k),move:()=>{},merge:()=>{}}; for(const f of require('fs').readdirSync(path.join(__dirname,'..','topics')).filter(f=>f.startsWith('curated-')&&f!=='curated-lib.js')) require(path.join(__dirname,'..','topics',f));
const [prefix='',max='900',skip='1',onlyRaw='0']=process.argv.slice(2);
const text=t=>{ const out=[]; (function w(n){ if(!n) return; out.push([].concat(n.more?.p||[]).join(' ')); (n.next||[]).forEach(w); })(t); return out.join(' ¶ ').replace(/\s+/g,' '); };
for(const {p,n} of TOPICS){
  const key=p.join('/'); if(!key.startsWith(prefix)) continue;
  const items=n.children?Object.entries(n.children).map(([k,c])=>[key+'/'+k,c]):[[key,n]];
  for(const [k,c] of items){
    if(skip==='1'&&curated.has(k)) continue;
    const a=c.article; if(!a) continue;
    if(onlyRaw==='1'&&a.tree&&a.tree.next&&a.tree.next.length&&a.tree.more&&a.tree.more.h!==c.title&&/\?$/.test(a.tree.next[0].they||'')) continue;
    const credit=a.tree?.more?.credit||'', link=a.tree?.more?.link||'';
    console.log(`\n### ${k}\n# ${c.title} | ${credit} | ${link}\n${text(a.tree).slice(0,+max)}`);
  }
}
