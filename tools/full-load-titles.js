const fs=require('fs'),vm=require('vm');
const html=fs.readFileSync('index.html','utf8'); const m=html.match(/\[('sections'[^\]]*)\]\.forEach/); const files=eval('['+m[1]+']');
const ctx={console,document:{write(){} ,querySelector(){return null}},location:{hash:''},setTimeout(){},addEventListener(){}};ctx.window=ctx;ctx.TOPICS=[];ctx.topic=(p,n)=>ctx.TOPICS.push({path:p,node:n});vm.createContext(ctx);
let err=0; for(const f of files){ try{ vm.runInContext(fs.readFileSync('topics/'+f+'.js','utf8'),ctx,{filename:f}); }catch(e){ err++; if(f.startsWith('2026')) console.log('ERR',f,e.message);} }
const D={}; for(const t of ctx.TOPICS){ let n={children:D}; for(const k of t.path.slice(0,-1)){ n.children[k]=n.children[k]||{}; n.children[k].children=n.children[k].children||{}; n=n.children[k]; } n.children[t.path.at(-1)]=Object.assign(n.children[t.path.at(-1)]||{},t.node); }
const warns=[]; const w=console.warn; console.warn=(...a)=>warns.push(a.join(' ')); for(const f of (ctx.AFTER||[])) try{f(D)}catch(e){} console.warn=w;
console.log('files',files.length,'loadErrors',err,'warnings:',warns.filter(x=>/not found/.test(x)).slice(-10));
const out=[]; (function w(n,p){ for(const [k,c] of Object.entries(n.children||{})){ if(c.title) out.push(p+'/'+k+' | '+c.title+(c.article?'':' [folder]')); w(c,p+'/'+k);} })({children:D},'');
fs.writeFileSync('/tmp/titles.txt',out.join('\n')); console.log('titles',out.length);
