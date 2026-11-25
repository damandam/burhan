// node tools/card-test.js topics/my-file.js [more files]
// Loads the helpers + your files with stubs and checks every card tree. Must end with "bad: 0".
const fs=require('fs'),vm=require('vm'),path=require('path');
const root=path.join(__dirname,'..');
const ctx={console};ctx.window=ctx;ctx.TOPICS=[];ctx.topic=(p,n)=>ctx.TOPICS.push({path:p,node:n});
vm.createContext(ctx);
for(const f of ['topics/burhan-lib.js','topics/otj-lib.js',...process.argv.slice(2)]) vm.runInContext(fs.readFileSync(path.resolve(root,f),'utf8'),ctx,{filename:f});
let bad=0,cards=0;
const chk=(n,d,where)=>{ if(!n||typeof n.we!=='string'||!n.more||!Array.isArray(n.more.p)){console.log('BAD node at',where);bad++;return 0;}
  if(d>0&&typeof n.they!=='string'){console.log('missing "they" at',where);bad++;}
  for(const s of (n.more.shots||[])) if(!fs.existsSync(path.join(root,s.src))){console.log('missing image',s.src,'at',where);bad++;}
  let c=1; (n.next||[]).forEach((x,i)=>c+=chk(x,d+1,where+' > '+i)); return c; };
const check=(t,where)=>{ const a=t.article; if(!a) return; cards++;
  if(a.tree){ const c=chk(a.tree,0,where); console.log(where,'|',t.title,'|',c,'nodes'); } else console.log(where,'|',t.title,'| explainer'); };
for(const t of ctx.TOPICS.slice(0)) check(t.node,t.path.join('/'));
// run enhance() hooks against the enhancements only (titles are checked live in the browser)
const D={}; for(const t of ctx.TOPICS){ let n={children:D}; for(const k of t.path.slice(0,-1)){ n.children[k]=n.children[k]||{children:{}}; n=n.children[k]; } n.children[t.path.at(-1)]=Object.assign(n.children[t.path.at(-1)]||{},t.node); }
const warn=console.warn; console.warn=(...a)=>console.log('note:',...a,'(fine if it is an existing card: check it in the browser)');
for(const f of (ctx.AFTER||[])) try{ f(D); }catch(e){ console.log('enhance hook error',e.message); bad++; }
console.warn=warn;
console.log('enhance hooks:',(ctx.AFTER||[]).length,'| mounts:',(ctx.MOUNTS||[]).length,'| cards:',cards,'| bad:',bad);
process.exitCode=bad?1:0;
