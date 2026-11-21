/* Helpers for curated-*.js files. Loaded after library.js, so it can look up each raw tile's Discord credit/link.
   cur.ex('islam/quran/d-ia-x', {title,k,blurb,intro,visual,cards:[[h,short,p?,more?]…],evidence:[[en,ref,ar?]…],sum})
   cur.deb('islam/quran/d-ia-x', {title,k,blurb,claim,they,we,p:[…],src:[…],quote:[en,ref,ar?],next:[{they,we,p,src}],sum})
   cur.hide('islam/general/d-ia-notes-and-resources') */
(()=>{
const find=key=>{
  for(const {path,node} of TOPICS){
    const k=path.join('/');
    if(k===key&&node.article) return node.article.tree?.more||{};
    if(key.startsWith(k+'/')&&node.children){ const c=node.children[key.slice(k.length+1)]; if(c&&c.article) return c.article.tree?.more||{}; }
  } return {};
};
const findNode=key=>{
  for(const {path,node} of TOPICS){ const k=path.join('/');
    if(k===key&&node.article) return node;
    if(key.startsWith(k+'/')&&node.children){ const c=node.children[key.slice(k.length+1)]; if(c&&c.article) return c; } } return null; };
const card=c=>Array.isArray(c)?{h:c[0],short:c[1],sub:c[1],p:[].concat(c[2]||c[1]),more:c[3]}:c;
/* screenshot: ['<attachmentId>.<ext>', caption] → local file in media/ */
const sh=c=>Array.isArray(c)?{src:'media/'+c[0],cap:c[1]||''}:c;
const q=e=>Array.isArray(e)?{en:e[0],ref:e[1],ar:e[2]}:e;
window.cur={
  ex(key,o){ const m=find(key); const vis=o.visual?Object.assign({},o.visual,o.visual.items?{items:o.visual.items.map(card)}:{},o.visual.left?{left:{title:o.visual.left.title,items:o.visual.left.items.map(card)},right:{title:o.visual.right.title,items:o.visual.right.items.map(card)}}:{}):undefined;
    topic(key.split('/'),{title:o.title,k:o.k||'',blurb:o.blurb||'',article:{type:'explainer',intro:o.intro,visual:vis,cards:(o.cards||[]).map(card),evidence:(o.evidence||[]).map(q),sum:o.sum,credit:o.credit||m.credit,link:o.link||m.link}}); },
  deb(key,o){ const m=find(key);
    const node=(x,first)=>({they:x.they,ts:(x.ts||[]).map(sh),we:x.we,more:{h:x.h||o.title,p:[].concat(x.p||x.we),src:x.src,quote:x.quote?q(x.quote):undefined,shots:(x.shots||[]).map(sh),credit:o.credit||m.credit,link:o.link||m.link},next:(x.next||[]).map(y=>node(y))});
    topic(key.split('/'),{title:o.title,k:o.k||'',blurb:o.blurb||'',article:{claim:o.claim||o.they,tree:node(o,true),sum:o.sum}}); },
  /* translated tile: English title/objection/answer on top, original (German) notes kept in the drawer */
  tr(key,title,they,we,src){ const n=findNode(key); if(!n) return; const t=n.article.tree;
    const orig=[]; (function w(x){ if(!x) return; orig.push(...[].concat(x.more?.p||[])); (x.next||[]).forEach(w); })(t);
    const m=t.more||{};
    title=title.replace(/\s*\((German )?notes\)\s*$/i,''); topic(key.split('/'),{title,k:'German notes',blurb:they.length>90?they.slice(0,88)+'…':they,article:{claim:they,tree:{they,we,more:{h:title,p:['Original notes (German):',...orig.slice(0,40)],src,credit:m.credit,link:m.link},next:[]},sum:we}}); },
  move(key,to){ (window.MOVES=window.MOVES||[]).push({type:'move',from:key,to}); },
  merge(key,into){ (window.MOVES=window.MOVES||[]).push({type:'merge',from:key,to:into}); },
  hide(key){ topic(key.split('/'),{hidden:true}); },
  name(key,title,blurb){ topic(key.split('/'),Object.assign({title},blurb?{blurb}:{})); },
};
})();
