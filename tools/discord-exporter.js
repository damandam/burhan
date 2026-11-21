/* Paste into the Discord web app (logged in), then:
     __exportServer('<guildId>','<name>')  → downloads burhan-<name>.json to Downloads.
   Progress: JSON.stringify(window.__EX). It drives the normal UI (scrolling), no API/token use.
   Guild IDs: islamic-apologetics 1514269918978248796 · deenresponds 1328402309297733662
              averroes 1275832106949283962 · averroes-2 1295033866385358860 */
(()=>{
const w=ms=>new Promise(r=>setTimeout(r,ms));
const clean=s=>(s||'').replace(/\s+/g,' ').trim();
const keepNl=s=>(s||'').replace(/[ \t]+/g,' ').replace(/\n{3,}/g,'\n\n').trim();
const nameOf=s=>clean(s).replace(/^(Text|Forum|Announcement|Voice|Stage)\s*/i,'').replace(/\s*\d+\s*(NEW|mentions?).*$/i,'').replace(/\b(unread|Active Threads|Private Channel|Limited)\b,?/gi,'').trim();
const SKIP=/^(rules|roles|announcements?|welcome|verification(-help)?|bots?|bot-stuff|general|general-vc|media|media-and-memes|memes|suggestions|polls|lobby|marhaban|regeln|ankündigungen|ticket|reminders|receipts.*|my-socials|new-videos|live-streams|shorts|other-new-videos|how-to-get.*|weight-loss-chat|muslim-general|lounge.*|events?|upcoming-events.*|channels.*roles|shubuhat-zugang|garten-des-dhikr|täglicher-vers|islam-radio|muslim-support|quran-verse|hadiths|dua|voice.*|vault|useful-links|resources)$/i;
const nav=async url=>{history.pushState({},'',url); dispatchEvent(new PopStateEvent('popstate')); await w(1900);};
const sidebar=()=>[...document.querySelectorAll('[class*="scroller"]')].find(e=>e.querySelector('[data-list-item-id^="channels___"]'));
async function listChannels(g){
  await nav('/channels/'+g); const sc=sidebar(); if(!sc) return [];
  for(let pass=0;pass<2;pass++){ sc.scrollTop=0; await w(300);
    for(let k=0;k<150;k++){
      // collapsed categories: either a bare aria-expanded=false header, or a list item labelled "(category)"
      const cats=[...sc.querySelectorAll('[aria-expanded="false"]')].filter(c=>{ const li=c.closest('[data-list-item-id^="channels___"]'); return !li || /\(category\)/i.test(li.getAttribute('aria-label')||'') || /\(category\)/i.test(c.getAttribute('aria-label')||''); });
      for(const c of cats){ c.click(); await w(150); }
      const b=sc.scrollTop; sc.scrollTop+=350; await w(150); if(sc.scrollTop===b) break; } }
  const seen=new Map(); let cat=''; sc.scrollTop=0; await w(300);
  for(let k=0;k<300;k++){
    for(const el of sc.querySelectorAll('[aria-expanded], [data-list-item-id^="channels___"]')){
      if(el.matches('[data-list-item-id^="channels___"]')){ const id=el.getAttribute('data-list-item-id').replace('channels___',''); if(!seen.has(id)) seen.set(id,{id,raw:clean((el.getAttribute('aria-label')||'')+' '+el.innerText),name:nameOf(el.innerText),cat}); }
      else if(!el.closest('[data-list-item-id^="channels___"]')) cat=clean(el.innerText);
    }
    const b=sc.scrollTop; sc.scrollTop+=300; await w(180); if(sc.scrollTop===b) break;
  }
  return [...seen.values()];
}
function grabInto(root,msgs){ root.querySelectorAll('li[id^="chat-messages-"]').forEach(li=>{ const id=li.id.split('-').pop(); if(msgs.has(id)) return;
  const ct=[...li.querySelectorAll('[id^="message-content"]')].map(e=>e.innerText).join('\n');
  const emb=[...li.querySelectorAll('[class*="embedTitle"],[class*="embedDescription"],[class*="embedFieldValue"]')].map(e=>e.innerText).join('\n');
  const imgs=[...li.querySelectorAll('a[href*="/attachments/"], img[src*="/attachments/"]')].map(a=>(a.href||a.src).split('?')[0]);
  const author=li.querySelector('[id^="message-username"]')?.innerText||'';
  const fb=(!ct&&!emb)?clean(li.innerText).slice(0,3000):'';
  msgs.set(id,{id,author,text:keepNl(ct),emb:keepNl(emb),fb,imgs:[...new Set(imgs)]}); }); }
async function readList(listEl,budget=60000){ const t0=Date.now(); const sc=listEl?.closest('[class*="scroller"]'); const msgs=new Map(); if(!sc) return [];
  for(let k=0;k<40&&Date.now()-t0<budget*0.6;k++){ grabInto(listEl,msgs); const h=sc.scrollHeight; sc.scrollTop=0; await w(650); grabInto(listEl,msgs); if(sc.scrollHeight===h){ await w(400); if(sc.scrollHeight===h) break; } }
  for(let k=0;k<400&&Date.now()-t0<budget;k++){ grabInto(listEl,msgs); const b=sc.scrollTop; sc.scrollTop+=sc.clientHeight*0.85; await w(160); if(sc.scrollTop===b) break; }
  grabInto(listEl,msgs); return [...msgs.values()].sort((a,b)=>BigInt(a.id)<BigInt(b.id)?-1:1); }
async function readText(g,c){ await nav(`/channels/${g}/${c}`); return readList(document.querySelector('[data-list-id="chat-messages"]')); }
async function readForum(g,c){ await nav(`/channels/${g}/${c}`); await w(800); const threads=[]; const done=new Set(['New Post']); const t0=Date.now();
  for(let round=0;round<80&&threads.length<45&&Date.now()-t0<240000;round++){
    const cards=[...document.querySelectorAll('[class*="mainCard"]')].filter(cd=>!done.has(cd.innerText.split('\n')[0]));
    if(!cards.length){ const s=document.querySelector('[class*="mainCard"]')?.closest('[class*="scroller"]'); if(!s) break; const b=s.scrollTop; s.scrollTop+=500; await w(800); if(s.scrollTop===b) break; continue; }
    const cd=cards[0]; const title=cd.innerText.split('\n')[0]; done.add(title); cd.click(); await w(1700);
    const lists=[...document.querySelectorAll('[data-list-id="chat-messages"]')];
    threads.push({title, messages: await readList(lists.at(-1),25000)});
  } return threads; }
window.__exportServer=async(g,name)=>{ const S=window.__EX={name,status:'listing',done:0,total:0,cur:'',errors:0};
  try{ const all=await listChannels(g); const chans=all.filter(ch=>!/voice|stage/i.test(ch.raw) && !SKIP.test(ch.name.replace(/[^\p{L}\p{N}\- ]/gu,'').trim()));
  S.total=chans.length; S.listed=all.length; S.status='reading'; const out=window.__OUT={server:name,guild:g,exported:new Date().toISOString(),channels:[]};
  for(const ch of chans){ S.cur=ch.cat+' / '+ch.name; try{ const isForum=/forum/i.test(ch.raw); const o={...ch,type:isForum?'forum':'text'}; if(isForum) o.threads=await readForum(g,ch.id); else o.messages=await readText(g,ch.id); out.channels.push(o);}catch(e){ S.errors++; out.channels.push({...ch,error:String(e)}); } S.done++; }
  S.status='saving'; const blob=new Blob([JSON.stringify(out)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='burhan-'+name+'.json'; document.body.appendChild(a); a.click(); S.size=blob.size; S.status='done'; }catch(e){ S.status='failed: '+e; } };
})();
