/* Jesus in the Old Testament: shared helpers (2026-11-24).
   Sources: Isaac Troki, Faith Strengthened; Bentzion Kravitz, The Jewish Response to Missionaries + Know What to Answer;
   Rick Halpern / Michael Skobac, Choose Life; Tovia Singer, Let's Get Biblical (lectures); Discord (IA, DR, Averroes). */
(()=>{
const SRC={
  troki:'Isaac Troki, Faith Strengthened (Ḥizzuk Emunah, 1593; tr. Mocatta 1851)',
  kravitz:'Bentzion Kravitz, The Jewish Response to Missionaries (Jews for Judaism, 2001)',
  kwta:'Bentzion Kravitz, Know What to Answer: Sin, Sacrifices and Atonement (Jews for Judaism)',
  cl:'Rick Halpern & Michael Skobac, Choose Life: A Counter-Missionary Study Guide (Jews for Judaism, 2009)',
  singer:'Tovia Singer, Let’s Get Biblical (lecture series)'
};
const DISCORD={IA:'',DR:'1328402309297733662',AV:'1275832106949283962'};
/* cr('troki','kravitz') → credit object; cr({server:'DR',channel:'name',id:'123'}) adds a Discord link */
const cr=(...xs)=>{
  const names=[], o={};
  for(const x of xs){
    if(typeof x==='string') names.push(SRC[x]||x);
    else if(x&&x.server){ names.push((x.server==='IA'?'Islamic Apologetics':x.server==='DR'?'Deenresponds':'Averroes')+' · #'+x.channel+(x.server==='AV'?' (translated from German)':''));
      if(!o.link&&x.id&&DISCORD[x.server]) o.link='https://discord.com/channels/'+DISCORD[x.server]+'/'+x.id; }
  }
  o.credit=names.join(' · ');
  return o;
};
const N=(c,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},c,extra||{}),next:next||[]});
const BASE=['christianity','jesus','old-testament'];
const card=(slug,o)=>topic([...BASE,slug],{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});

/* show an existing card (by its FINAL path) inside the new folder too */
const mount=(from,key)=>{ (window.MOUNTS=window.MOUNTS||[]).push({from,to:BASE.join('/'),key}); };

/* append branches to an existing card everywhere it appears (all copies share its title) */
const enhance=(title,branches,opts)=>{
  (window.AFTER=window.AFTER||[]).push(D=>{
    const seen=new Set(); let hit=0;
    (function w(n){ for(const c of Object.values(n.children||{})){
      if(c.article&&!c.article.tree&&c.article.type==='explainer'&&c.title===title&&!seen.has(c.article)){
        /* explainer cards: each branch becomes an evidence card */
        seen.add(c.article); hit++;
        const flat=b=>[{h:b.more.h,short:(b.they?b.they+' → ':'')+b.we,p:[].concat(b.more.p||[]),more:{credit:b.more.credit,link:b.more.link,src:b.more.src}}].concat(...(b.next||[]).map(flat));
        c.article.cards=(c.article.cards||[]).concat(...JSON.parse(JSON.stringify(branches)).map(flat));
      }
      else if(c.article&&c.article.tree&&c.title===title&&!seen.has(c.article)){
        seen.add(c.article); hit++;
        const t=c.article.tree; t.next=(t.next||[]).concat(JSON.parse(JSON.stringify(branches)));
        if(opts&&opts.p){ t.more=t.more||{}; t.more.p=[].concat(t.more.p||[],opts.p); }
        if(opts&&opts.src){ t.more=t.more||{}; t.more.src=[].concat(t.more.src||[],opts.src); }
        if(opts&&opts.shots){ t.more=t.more||{}; t.more.shots=[].concat(t.more.shots||[],opts.shots); }
      }
      w(c); } })({children:D});
    if(!hit) console.warn('otj enhance: card not found:',title);
  });
};

topic(BASE,{title:'Jesus in the Old Testament',k:'Messianic prophecy',
  blurb:'Isaiah 53, Daniel 9, Micah 5, Psalm 110, the virgin birth and every other “prophecy of Jesus”: the Christian case at its strongest, then the answer from the Hebrew text.'});

window.OTJ={SRC,cr,N,card,mount,enhance};
})();
