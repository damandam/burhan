#!/usr/bin/env node
/* Builds topics/library.js from the Discord exports (~/Downloads/burhan-*.json).
   Every channel becomes a tile; forum channels become a tile with one sub-tile per thread.
   Where a channel goes is decided by tools/rules.js. Usage: node tools/gen-library.js */
const fs=require('fs'), path=require('path'), os=require('os');
const ROOT=path.join(__dirname,'..');
const DIR=process.env.EXPORT_DIR||path.join(os.homedir(),'Downloads');
const {SERVERS,SECTIONS,RULES,SKIP,CATS}=require('./rules.js');

const clean=s=>(s||'').replace(/\r/g,'').replace(/[ \t]+/g,' ').replace(/\n{3,}/g,'\n\n').trim();
const strip=s=>(s||'').replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}\u{2B00}-\u{2BFF}・|│✧✬⚔️]/gu,'').replace(/^[\s·\-–]+|[\s·\-–]+$/g,'').trim();
const humanize=n=>{ let s=strip(n).replace(/\(\s*\)/g,'').replace(/[-_]+/g,' ').replace(/\s+/g,' ').trim(); return s?s[0].toUpperCase()+s.slice(1):'Untitled'; };
const slug=s=>strip(s).toLowerCase().normalize('NFKD').replace(/[^\p{L}\p{N}]+/gu,'-').replace(/^-|-$/g,'').slice(0,50)||'x';
const firstSentence=t=>{ let one=t.replace(/\s+/g,' ').trim(); one=one.charAt(0).toUpperCase()+one.slice(1); const m=one.match(/^(.{40,240}?[.!?؟])(\s|$)/); return (m?m[1]:one.slice(0,220)+(one.length>220?'…':'')); };
const isNoise=t=>!t||/^(,|\.|—|-|https?:\/\/\S+)$/.test(t.trim())||/^(Thursday|Friday|Saturday|Sunday|Monday|Tuesday|Wednesday), \d+ \w+ \d{4}/.test(t.trim());

/* (see qaFrom below) */
/* Q&A-shaped posts ("Question?\n,\nShort answer: …") → real debate steps */
function qaFrom(msgs,title,meta){
  const full=msgs.map(m=>clean([m.text,m.emb].filter(Boolean).join('\n'))).filter(Boolean).join('\n\n')
    .replace(/‎/g,'').replace(/[^\n—]{0,140}—\s+\d{1,2}\/\d{1,2}\/\d{4},?\s+\d{1,2}:\d{2}\s*/g,' ').replace(/\(edited\)/g,'');
  const re=/(?:^|\n)\s*([^\n]{6,220}\?)\s*\n\s*,\s*\n/g; const marks=[]; let m;
  while((m=re.exec(full))) marks.push({q:m[1].trim(),start:m.index,end:re.lastIndex});
  if(!marks.length) return null;
  const secs=marks.map((k,i)=>({q:k.q,body:full.slice(k.end,i+1<marks.length?marks[i+1].start:full.length).replace(/\n\s*,\s*\n/g,'\n').trim()})).filter(s=>s.body.replace(/\W/g,'').length>10);
  if(!secs.length) return null;
  const paras=t=>t.split(/\n{2,}/).map(s=>s.trim()).filter(s=>s&&s!==',').slice(0,30);
  const nodes=secs.slice(0,30).map((s,i)=>{
    const sa=s.body.match(/^Short answer:\s*([^\n]+)/i);
    const claim=i===0&&(s.body.match(/(?:^|\n)\s*(?:The claim|The objection(?: says)?|The argument(?: says)?|Critics (?:say|claim|point to)[^:]*?)[:,]?\s*([^\n]{20,300})/i));
    return {they:i===0?(claim?firstSentence(claim[1]):s.q):s.q,
      we:sa?firstSentence(sa[1]):firstSentence(s.body),
      more:{h:s.q,p:paras(s.body.replace(/^Short answer:\s*/i,'')),credit:meta.credit,link:meta.link},next:[]};
  });
  for(let i=0;i<nodes.length-1;i++) nodes[i].next=[nodes[i+1]];
  return {tree:nodes[0],count:nodes.length,more:secs.length>30?secs.length-30:0};
}

/* message list → chunks (same author, ≤1600 chars) → answer chain */
function chainFrom(msgs, title, meta){
  const texts=msgs.map(m=>({a:m.author||'', t:clean([m.text,m.emb].filter(Boolean).join('\n')||m.fb||''), imgs:(m.imgs||[]).length}))
                  .map(x=>({...x,t:x.t
                    .replace(/\n?(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), \d+ \w+ \d{4} at \d\d:\d\d/g,'')
                    .replace(/[^\n—]{0,140}—\s+\d{1,2}\/\d{1,2}\/\d{4},?\s+\d{1,2}:\d{2}\s*/g,' ')   // "Name [tags] — 12/06/2026, 15:46"
                    .replace(/Click to see attachment|Server Tag:\s*\S+(\s+\S+)?|OP Original Poster|Original Poster/g,' ')
                    .replace(/\[\s*\d{1,2}:\d{2}\s*\]\s*/g,'').replace(/^Forwarded\s*/i,'')
                    .replace(/\(edited\)/g,'').trim()}))
                  .filter(x=>x.t&&!isNoise(x.t)||x.imgs);
  const chunks=[]; let cur=null;
  for(const x of texts){
    if(cur && (x.a===''||x.a===cur.a) && cur.t.length+x.t.length<1600){ cur.t+=(x.t?'\n\n'+x.t:''); cur.imgs+=x.imgs; }
    else { cur={a:x.a||cur?.a||'',t:x.t,imgs:x.imgs}; chunks.push(cur); }
  }
  // drop chunks that repeat text already shown (forwarded copies)
  const seenTxt=[]; const real=chunks.filter(c=>{ const k=c.t.replace(/\s+/g,' ').slice(0,160); if(c.t.replace(/\W/g,'').length<=15) return false;
    if(seenTxt.some(s=>s.includes(k.slice(0,100))||k.includes(s.slice(0,100)))) return false; seenTxt.push(k); return true; });
  if(!real.length) return null;
  const nodes=real.slice(0,40).map((c,i)=>{
    const paras=c.t.split(/\n{2,}|\n(?=[•\-\d]+[.)]?\s)/).map(s=>s.trim()).filter(s=>s&&s!==','&&s!=='.').slice(0,40);
    const head=(c.t.split('\n')[0]||'').replace(/[*_#>]/g,'').trim();
    // "Argument … Refutation …" posts: the argument becomes the "they say", the refutation the short answer
    const m=c.t.match(/^\s*(?:the\s+)?(?:argument|claim|objection|einwand|behauptung|argumentation)\s*:?\s*\n?([\s\S]+?)\n\s*(?:refutation|response|answer|rebuttal|widerlegung|antwort)\s*:?\s*\n?([\s\S]+)$/i);
    if(m) return {they:firstSentence(m[1]), we:firstSentence(m[2]),
      more:{h:head.length>8&&head.length<110&&!/^argument/i.test(head)?head:title, p:paras, imgs:c.imgs||undefined, credit:meta.credit, link:meta.link}, next:[]};
    return {they:i===0?title:null, we:firstSentence(c.t),
      more:{h:head.length>8&&head.length<110?head:title, p:paras, imgs:c.imgs||undefined, credit:meta.credit, link:meta.link}, next:[]};
  });
  for(let i=0;i<nodes.length-1;i++) nodes[i].next=[nodes[i+1]];
  return {tree:nodes[0], count:nodes.length, more:real.length>40?real.length-40:0};
}

function main(){
  const files=fs.readdirSync(DIR).filter(f=>/^burhan-.*\.json$/.test(f));
  const out=[]; const report={placed:0,skipped:[],unmatched:[],empty:[]};
  out.push('/* AUTO-GENERATED by tools/gen-library.js from the Discord exports — do not edit by hand. */');
  /* sections live in topics/sections.js */
  for(const f of files){
    const ex=JSON.parse(fs.readFileSync(path.join(DIR,f),'utf8'));
    const S=SERVERS[ex.server]||{label:ex.server};
    let cat='';
    for(const ch of ex.channels){
      const name=strip(ch.name).replace(/^\(\)\s*/,'').replace(ex.server==='deenresponds'?/\s+\d+$/:/$^/,'');
      // category headings come through as empty "channels" right before their channels
      const raw=ch.name.trim().replace(/^\(\)\s*/,'');
      const isHeading=/\(category\)/.test(ch.raw||"") || !(ch.messages||[]).length && !(ch.threads||[]).length && !/-/.test(raw) && (/^『/.test(raw)||/^[A-Z]/.test(raw));
      if(isHeading){ cat=strip(ch.name.replace(/『[^』]*』/,'')); continue; }
      if(S.group && cat){
        const rule=RULES.find(r=>r.re.test(cat)&&(!r.server||r.server===ex.server))||RULES.find(r=>r.re.test(name))||CATS.find(r=>r.re.test(cat));
        if(rule&&!rule.path){ report.skipped.push(ex.server+'#'+cat+'/'+name); continue; }
        if(!rule){ report.unmatched.push(ex.server+'#'+cat+' / '+name); continue; }
        const folder=[...rule.path,'d-'+S.short+'-'+slug(cat)];
        const tt=humanize(name), link=`https://discord.com/channels/${ex.guild}/${ch.id}`, credit=`${S.label} · ${cat} › #${name}`;
        const c=qaFrom(ch.messages||[],tt,{credit,link})||chainFrom(ch.messages||[],tt,{credit,link});
        if(!c){ report.empty.push(credit); continue; }
        out.push(`topic(${JSON.stringify(folder)},${JSON.stringify({title:rule.title||humanize(cat),k:S.label,blurb:'Sources collected on '+S.label})});`);
        out.push(`topic(${JSON.stringify([...folder,'c-'+slug(name)])},${JSON.stringify({title:tt,k:S.label,blurb:c.count+' post'+(c.count>1?'s':''),article:{claim:tt,tree:c.tree,sum:`Notes from ${S.label} (${cat} › #${name}).`}})});`);
        report.placed++; continue;
      }
      if(SKIP.test(name)){ report.skipped.push(ex.server+'#'+name); continue; }
      const rule=RULES.find(r=>r.re.test(name)&&(!r.server||r.server===ex.server)) || CATS.find(r=>r.re.test(cat));
      if(rule&&!rule.path){ report.skipped.push(ex.server+'#'+name); continue; }
      if(!rule){ report.unmatched.push(ex.server+'#'+name+(cat?' ['+cat+']':'')); continue; }
      const title=rule.title||humanize(name);
      const link=`https://discord.com/channels/${ex.guild}/${ch.id}`;
      const credit=`${S.label} · #${name}`;
      const key='d-'+S.short+'-'+slug(name);
      const where=[...rule.path,key];
      if(ch.type==='forum'){
        const kids={};
        for(const th of (ch.threads||[])){
          const tt=humanize(th.title);
          const c=qaFrom(th.messages||[],tt,{credit:credit+' › '+th.title,link})||chainFrom(th.messages||[],tt,{credit:credit+' › '+th.title,link});
          if(!c) continue;
          kids['t-'+slug(th.title)]={title:tt,k:S.short.toUpperCase(),blurb:c.count+' post'+(c.count>1?'s':'')+' from Discord',article:{claim:tt,tree:c.tree,sum:`Notes from ${S.label} (#${name}).${c.more?` ${c.more} more posts in Discord.`:''}`}};
        }
        if(!Object.keys(kids).length){ report.empty.push(credit); continue; }
        out.push(`topic(${JSON.stringify(where)},${JSON.stringify({title,k:S.label,blurb:`${Object.keys(kids).length} threads`,children:kids})});`);
      } else {
        const c=qaFrom(ch.messages||[],title,{credit,link})||chainFrom(ch.messages||[],title,{credit,link});
        if(!c){ report.empty.push(credit); continue; }
        out.push(`topic(${JSON.stringify(where)},${JSON.stringify({title,k:S.label,blurb:c.count+' post'+(c.count>1?'s':'')+' from Discord',article:{claim:title,tree:c.tree,sum:`Notes from ${S.label} (#${name}).${c.more?` ${c.more} more posts in Discord.`:''}`}})});`);
      }
      report.placed++;
    }
  }
  fs.writeFileSync(path.join(ROOT,'topics','library.js'),out.join('\n')+'\n');
  fs.writeFileSync(path.join(ROOT,'tools','last-report.json'),JSON.stringify(report,null,1));
  console.log(`files ${files.length} · placed ${report.placed} · skipped ${report.skipped.length} · empty ${report.empty.length} · UNMATCHED ${report.unmatched.length}`);
  if(report.unmatched.length) console.log('unmatched:\n  '+report.unmatched.join('\n  '));
}
main();
