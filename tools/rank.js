#!/usr/bin/env node
/* node tools/rank.js islam/quran  → tiles (after moves) ranked by curated/source ratio */
const fs=require('fs'),path=require('path'); const R=path.join(__dirname,'..');
const prefix=process.argv[2]||'';
global.window=global; global.TOPICS=[]; global.topic=(p,n)=>TOPICS.push({path:p,node:n});
require(R+'/topics/library.js'); const raw={}; const rt=t=>{const o=[];(function w(n){if(!n)return;o.push([].concat(n.more?.p||[]).join(' '));(n.next||[]).forEach(w)})(t);return o.join(' ').length};
for(const {path:p,node} of TOPICS){const k=p.join('/'); if(node.article) raw[k]=[rt(node.article.tree),node.article.tree?.more?.link]; if(node.children) for(const [a,c] of Object.entries(node.children)) if(c.article) raw[k+'/'+a]=[rt(c.article.tree),c.article.tree?.more?.link];}
global.TOPICS=[]; for(const k in require.cache) delete require.cache[k];
const src=fs.readFileSync(R+'/index.html','utf8').match(/\[(.sections.[^\]]*)\]/)[1].split(',').map(s=>s.replace(/["'\s]/g,''));
for(const f of src) require(R+'/topics/'+f+'.js');
const all={}; for(const {path:p,node} of TOPICS){const k=p.join('/'); all[k]=Object.assign(all[k]||{},node);}
const cl=n=>{const a=n.article||{};let l=0;(function w(x){if(!x)return;l+=JSON.stringify(x.more?.p||[]).length+(x.we||'').length;(x.next||[]).forEach(w)})(a.tree);l+=JSON.stringify(a.cards||[]).length+JSON.stringify(a.visual||{}).length+(a.intro||'').length;return l};
const german=n=>/Original notes \(German\)/.test(JSON.stringify(n.article||{}));
const dest={}; for(const m of (global.MOVES||[])) if(m.to) dest[m.from]=m.to+(m.type==='merge'?' (merge)':'');
const rows=[]; for(const [k,n] of Object.entries(all)){ if(n.hidden||!n.article) continue; const d=dest[k]||k; if(!d.startsWith(prefix)) continue; rows.push([cl(n),(raw[k]||[0])[0],german(n)?'DE':'  ',k,n.title,(raw[k]||[])[1]||'']); }
rows.sort((a,b)=>(a[0]/(a[1]||1))-(b[0]/(b[1]||1)));
rows.forEach(r=>console.log(String(r[0]).padStart(5),String(r[1]).padStart(6),r[2],r[3],'|',r[4]));
console.log(rows.length+' tiles');
