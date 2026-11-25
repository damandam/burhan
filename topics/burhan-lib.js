/* Burhān card helpers for anyone adding content (see .claude/skills/burhan/SKILL.md).
   Usage in a new topics/<name>.js file:
     (()=>{ const {cr,N,card,enhance,mount}=window.B; ... })();                          */
(()=>{
const SERVERS={IA:['Islamic Apologetics',''],DR:['Deenresponds','1328402309297733662'],AV:['Averroes','1275832106949283962']};
/* credit: cr('Book or person, title', {server:'DR',channel:'name',id:'123'}, {name:'Website title',url:'https://…'}) */
const cr=(...xs)=>{ const names=[], o={};
  for(const x of xs){
    if(typeof x==='string') names.push(x);
    else if(x&&x.server){ const s=SERVERS[x.server]||[x.server,'']; names.push(s[0]+' · #'+x.channel+(x.server==='AV'?' (translated from German)':''));
      if(!o.link&&x.id&&s[1]) o.link='https://discord.com/channels/'+s[1]+'/'+x.id; }
    else if(x&&x.name){ names.push(x.name); if(!o.link&&x.url) o.link=x.url; }
  }
  o.credit=names.join(' · '); return o; };
/* one debate node: N(credit, theySay, weAnswer, drawerHeading, [proof points], [sources], [next nodes], {shots, visual, facts, quotes}) */
const N=(c,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},c||{},extra||{}),next:next||[]});
/* new card at a path like 'christianity/trinity/my-slug' */
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
/* new folder */
const folder=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k||'',blurb:o.blurb||''});
/* add branches (and optional root points/sources/shots) to an EXISTING card, found by its exact title, everywhere it appears */
const enhance=(title,branches,opts)=>{ (window.AFTER=window.AFTER||[]).push(D=>{
  const seen=new Set(); let hit=0;
  (function w(n){ for(const c of Object.values(n.children||{})){
    if(c.article&&c.title===title&&!seen.has(c.article)){ seen.add(c.article); hit++;
      const a=c.article, br=JSON.parse(JSON.stringify(branches||[]));
      if(a.tree){ const t=a.tree; t.next=(t.next||[]).concat(br); t.more=t.more||{};
        if(opts&&opts.p) t.more.p=[].concat(t.more.p||[],opts.p);
        if(opts&&opts.src) t.more.src=[].concat(t.more.src||[],opts.src);
        if(opts&&opts.shots) t.more.shots=[].concat(t.more.shots||[],opts.shots); }
      else { const flat=b=>[{h:b.more.h,short:(b.they?b.they+' → ':'')+b.we,p:[].concat(b.more.p||[]),more:{credit:b.more.credit,link:b.more.link,src:b.more.src,shots:b.more.shots}}].concat(...(b.next||[]).map(flat));
        a.cards=(a.cards||[]).concat(...br.map(flat)); }
    }
    w(c); } })({children:D});
  if(!hit) console.warn('burhan enhance: card not found:',title); }); };
/* show an existing card or folder (by its final path) inside another folder too */
const mount=(from,to,key)=>{ (window.MOUNTS=window.MOUNTS||[]).push({from,to,key}); };
window.B={cr,N,card,folder,enhance,mount};
})();
