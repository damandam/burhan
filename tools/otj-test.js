// node tools/otj-test.js topics/otj-xyz.js  → loads otj-lib + file with stubs, checks every card tree
const fs=require('fs'),vm=require('vm');
const ctx={window:{},console};ctx.window.TOPICS=[];ctx.topic=(p,n)=>ctx.window.TOPICS.push({path:p,node:n});ctx.window.topic=ctx.topic;
vm.createContext(ctx);
for(const f of ['topics/otj-lib.js',...process.argv.slice(2)]) vm.runInContext(fs.readFileSync(f,'utf8').replace(/window\.OTJ/g,'window.OTJ'),ctx,{filename:f});
let bad=0,cards=0;
const chk=(n,d,path)=>{ if(!n||typeof n.we!=='string'||!n.more||!Array.isArray(n.more.p)){console.log('BAD node',path);bad++;return 0;}
  if(d>0&&typeof n.they!=='string'){console.log('missing they',path);bad++;}
  let c=1; (n.next||[]).forEach((x,i)=>c+=chk(x,d+1,path+'>'+i)); return c; };
for(const t of ctx.window.TOPICS){ const a=t.node.article; if(!a) continue; cards++;
  const c=chk(a.tree,0,t.path.join('/')); console.log(t.path.join('/'),'|',t.node.title,'|',c,'nodes |',JSON.stringify(a).length,'chars'); }
console.log('AFTER hooks:',(ctx.window.AFTER||[]).length,'| MOUNTS:',(ctx.window.MOUNTS||[]).length,'| cards:',cards,'| bad:',bad);
