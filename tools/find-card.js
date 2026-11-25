// node tools/find-card.js "isaiah 53" → lists existing cards/folders whose title, path or text mention the words, so you can enhance instead of duplicating
const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..'), q=process.argv.slice(2).join(' ').toLowerCase().split(/\s+/).filter(Boolean);
if(!q.length){ console.log('usage: node tools/find-card.js <words>'); process.exit(1); }
const hits=[];
for(const f of fs.readdirSync(path.join(root,'topics')).filter(f=>f.endsWith('.js')&&f!=='library.js')){
  const s=fs.readFileSync(path.join(root,'topics',f),'utf8');
  const re=/title:\s*(["'`])((?:\\.|(?!\1).)*)\1/g; let m;
  while((m=re.exec(s))){ const title=m[2], ctxt=s.slice(Math.max(0,m.index-300),m.index+2500).toLowerCase();
    const inTitle=q.every(w=>title.toLowerCase().includes(w)), inCtx=q.every(w=>ctxt.includes(w));
    if(inTitle||inCtx) hits.push({score:inTitle?2:1,f,title}); }
}
const seen=new Set();
for(const h of hits.sort((a,b)=>b.score-a.score)){ const k=h.title; if(seen.has(k)) continue; seen.add(k);
  console.log((h.score===2?'TITLE ':'text  ')+'| '+h.title+'  ('+h.f+')'); }
if(!hits.length) console.log('no existing card mentions all of: '+q.join(' '));
