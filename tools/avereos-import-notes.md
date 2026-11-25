# Avereos' Server → Burhān (laufender Import, auf Deutsch)

Stand: 25.11.2026. Nächster Index in der a3/a4-Warteschlange: **208** (avereos 3 ist zuerst dran, Index 0–237, danach Avereos 4).

## Regeln von Avereos
- Alle Kanäle von Avereos 4 und avereos 3, aber nur starke Texte. Ältere/schwächere weglassen.
- **Neu (25.11.):** Dünne oder überzogene Texte nicht einfach weglassen, sondern mit sauberen, prüfbaren Belegen stärken (z. B. Taufformel: Didache 9.5, Paulus, Justin). Weglassen nur bei echten Dubletten, rein privaten Inhalten oder wenn gar kein verwertbares Argument drinsteckt – und dann im PROGRESS-Eintrag begründen.
- PDFs nur, wenn sie sicher in seinem RELEASE-Projekt liegen (dann Inhalt aus dem Projekt nehmen).
- Kartentext auf **Deutsch**. Pro Block (jetzt ~20 Kanäle) eine Datei `topics/2026-MM-DD-a3-blockN.js` (bzw. `a4-blockN`), ans Ende der Loader-Liste.
- Gibt es das Thema schon (anderer Server), per `enhance("exakter Titel", …)` erweitern statt doppelt anlegen.

## Daten
Export liegt im **eingebauten Browser** (Claude-App), IndexedDB `burhanExport`, Store `parts` (Schlüssel `avereos3-*`, `avereos4-*`, `avereos4b-*`, `avereos4c-*`; zusammen 344 + 475 Kanäle). Wenn Discord ausgeloggt ist: Avereos meldet sich an, die IndexedDB bleibt.

Helfer im Discord-Tab neu anlegen (javascript_tool):
```js
const db=await new Promise(r=>{const q=indexedDB.open('burhanExport',1);q.onsuccess=()=>r(q.result);});
const all=await new Promise(r=>{const o={};const c=db.transaction('parts').objectStore('parts').openCursor();c.onsuccess=e=>{const x=e.target.result;if(x){o[x.key]=x.value;x.continue();}else r(o);};});
const big=x=>{try{return BigInt(x)}catch(e){return 0n}}; const ch=[],seen=new Set(); window.__TXT={};
for(const [k,v] of Object.entries(all)){ if(k==='t-x')continue; const s=k.startsWith('avereos3')?'a3':'a4';
  for(const c of JSON.parse(v).channels){ if(seen.has(c.id))continue; seen.add(c.id);
    window.__TXT[c.id]=(c.messages||[]).map(m=>[m.text,m.emb].filter(Boolean).join('\n')).filter(Boolean).join('\n---\n');
    ch.push({s,id:c.id,name:c.name.replace(/^Text\s+/,''),len:window.__TXT[c.id].length}); } }
window.__Q=ch.filter(c=>c.len>300).sort((a,b)=>a.s.localeCompare(b.s)||(big(a.id)<big(b.id)?-1:1));
window.__get=(i,n,cap=3500)=>window.__Q.slice(i,i+n).map((c,j)=>`### [${i+j}] ${c.s} #${c.name} (${c.id}) len=${c.len}\n`+window.__TXT[c.id].slice(0,cap)).join('\n\n');
window.__Q.length
```
Dann `window.__get(48,10)`.

## Prüfen
- `node tools/card-test.js topics/<datei>.js` → `bad: 0`
- `node tools/full-load-titles.js` → lädt alle Loader-Dateien, meldet nicht gefundene enhance-Titel und schreibt alle Kartentitel nach /tmp/titles.txt (zum Doppel-Check: `grep -i stichwort /tmp/titles.txt`).

## Für später gesammelt
- „Gott mit Körperteilen in der Bibel“ (avereos 3: #nase, #finger, #füße, #schulter, #hüfte, #arm, #atem, #rücken, #hand, #schoß …; dazu #schritte-gehen: Gen 3:8, Ephräm/Hieronymus) → eine gemeinsame Karte.
- „Seltsame Bibelstellen“ (avereos 3, Kategorie komische: #hoden-zerquetschte usw.) → gemeinsame Karte(n).
