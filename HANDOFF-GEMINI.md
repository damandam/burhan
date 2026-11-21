# Burhān: handoff for Gemini

Read this first, then `PROGRESS.md` (the running work log). Status as of 2026-11-21.

## 1. What this project is

**Burhān** is an animated **refutation library** (Islamic apologetics) built as a single-page web app.
- Three doors: **Defending Islam**, **Examining Christianity**, **Answering Atheism** (plus "Other beliefs").
- Content is organised as nested tiles (folders → sub-folders → cards). Clicking zooms into the tile.
- Card types:
  - **Debate cards**: "They say → We answer" chains. They can branch into several possible replies, and each step has a "Full proof" drawer with sources and quotes.
  - **Explainer cards**: teaching pages with a visual (pillars, steps, compare) and evidence cards.
- **Language:** the site is in English. The owner (Noel) talks in German. Report progress to him in German.
- **Content rule:** content comes from his Discord servers. Don't invent material. Integrate every argument a channel contains; don't grade arguments away. Small, clearly true additions (a correct hadith number, a Bible verse) are fine.

### Discord sources (four servers)
| Server | Export file (in `~/Downloads/`) | Language |
|---|---|---|
| Islamic Apologetics (IA) | `burhan-islamic-apologetics.json` | English |
| Deenresponds (DR) | `burhan-deenresponds.json` | English |
| Averroes (AV) | `burhan-averroes-all.json` (500 channels, the current one) | **German** → translate to English |
| Averroes 2 | not exported yet | German |

The exports are JSON: `{channels:[{id,name,cat,messages:[{text,fb,emb,imgs[]}], threads?:[…]}]}`.
`imgs` holds Discord attachment URLs **without signatures**, so they no longer load (they return 404).

## 2. Where everything is

Project folder: **`/Users/noelabedin/Documents/burhan/`**. The `burhan/burhan/` subfolder is an old stale copy; ignore it.

| Path | What |
|---|---|
| `index.html` | The whole app (three.js r128 + GSAP 3.12.5 from cdnjs) and the base tree `DATA`. At the bottom is the **loader list** `['sections',…,'islam-av2']`: every topic file must be added there, and later files override earlier ones. |
| `topics/*.js` | The content (73 files). Each calls `topic([path…], node)`. |
| `topics/library.js` | Auto-generated raw tiles from the Discord exports (don't hand-edit). |
| `topics/curated-*.js` | First curation round (helpers `cur.deb`, `cur.ex`, `cur.tr`, `cur.move`, `cur.merge`, `cur.hide`, `cur.name` in `curated-lib.js`). |
| `topics/curated-remap.js`, `curated-organise.js` | Move/merge rules (`window.MOVES`) that put tiles into their real topic folder. |
| `topics/hadith-block1…9.js`, `quran-block1…4.js`, `quran-av1…9.js`, `christ-av1.js`, `islam-av1…2.js` + `aisha.js`, `war.js`, `women.js` … | The current deep-curation round (newest = loaded last). |
| `tools/gen-library.js` | Rebuilds `library.js` from the exports (`node tools/gen-library.js`). Rules are in `tools/rules.js`. |
| `tools/rank.js` | `node tools/rank.js islam/hadith` ranks tiles by curated text versus source text; "DE" = still a German one-liner. |
| `tools/dump.js` | `node tools/dump.js <path-prefix> [maxChars]` prints a tile's raw source text. |
| `tools/discord-exporter.js` | JS pasted into a logged-in Discord tab in Chrome to export channels (UI only, no token or API). |
| `shots/` | 72 screenshots/scans already used on cards. |
| `~/Downloads/burhan-media/subs/transcripts.json` | 48 YouTube transcripts used as sources. |
| `PROGRESS.md` | **Detailed log of every block, the rules and the open scan list. Keep updating it.** |

### Run it
```bash
cd /Users/noelabedin/Documents/burhan && python3 -m http.server 5179
```
Open **http://localhost:5179**. Port 5178 is an old copy; don't use it.

## 3. How a card is written (the current method)

Each block is one new file in `topics/`, appended **last** in the loader list in `index.html`. Pattern:

```js
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next)=>({they,we,more:Object.assign({h,p,src},cr),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ /* see topics/islam-av2.js: finds the card by its ORIGINAL key (exact path, or a forum-thread child of a folder), appends a branch to tree.next, or for explainers appends an evidence card */ };
card('islam/hadith/…/some-key',{title:"…",k:"…",blurb:"…",claim:"…",
  tree:N(AV('channel-name','channelId'),"They say …","We answer …","Drawer heading",["proof paragraph",…],["sources"],[ /* follow-up nodes = forks */ ]),
  sum:"one-line summary"});
})();
```

Rules learned the hard way:
- **Always use the `N()` helper.** Hand-written nested `next:[…]` brackets broke several times.
- **Replacing a tile:** call `card()` with the tile's *original* key (before MOVES). To fold a duplicate tile into another card: hide it with `cur.hide(key)` and remove its merge op with `window.MOVES=window.MOVES.filter(op=>!(op.type==='merge'&&/c-name$/.test(op.from)))`.
- **`add()` must target the ORIGINAL key**, not the folder the card ends up in after `curated-organise.js`. Forum threads (`t-…`) are children of a folder node; the `add()` in the newest files handles both cases.
- **No duplicate cards:** when the same topic appears on several servers, merge everything into ONE card (one branch per extra argument, with the right credit).
- **Put cards in their real topic folder** (e.g. `islam/morality/war/…`, `islam/quran/science-errors/…`, `christianity/islam-vs/dilemma/…`), not by server.
- **Add a "Turn the tables" branch** with Bible or Church Father counters whenever the channel has one.
- **Fix factual slips** in the channel (wrong verse or author) and tell Noel which ones you fixed.

**Verify after every block:**
1. `node --check topics/<file>.js`.
2. Reload localhost:5179.
3. In the browser console, check each new or changed card exists and contains a unique phrase. For example, walk `DATA` and test `JSON.stringify(card.article).includes('…')`.
4. Search with the `#q` box.
5. Check the console has no errors.
6. Log the block in `PROGRESS.md`.

## 4. How far we are

**Done**
- Marriage, War, Slavery, Women, Apostasy, Prophet ﷺ, Sects, Proofs, Creed: complete (text).
- **Qurʾān area**: complete, including 9 Averroes batches (preservation, qirāʾāt/aḥruf, science, war verses, law, theology, Christ-related, history, apocrypha).
- **Ḥadīth area**: complete, with 0 German tiles left (blocks 1–9).
- **Christianity › Islam vs › Islamic dilemma**: rebuilt (christ-av1).
- **"sonstiges islam 3"**: group A (Allah's attributes) and group B (the Prophet ﷺ and Companions) are done (islam-av1, islam-av2).

**Open bug**
- In `topics/islam-av2.js`, `add('islam/morality/war', …)` (Bukhārī 25, "I have been commanded to fight the people") doesn't land on the War debate map. Find the map's real key in `topics/war.js` and fix it.

**Still to do: Averroes channels not yet on the site (233)**
| Category | Left |
|---|---|
| sonstiges islam 3 | 23, as groups C law/fiqh, D unseen/medicine, E Qurʾān/Christ (channel lists in PROGRESS.md) |
| (no category) | 32 |
| Christentum kinder ehe und missbrauch | 35 |
| prophet saw in bibel | 27 |
| Bibel Widersprüche | 21 |
| Paulus falscher prophet | 13 |
| islam korrigiert christentum | 13 |
| bibel wissenschaftliche fehler | 12 |
| Sklaven christentum | 12 |
| jesus endzeit prophezeiung | 10 |
| Jesus und ehebrecherin argument | 9 |
| sonstiges christentum 1 | 7 |
| small ones | about 10 (pharisäer dilema, kirchenväter, beschlüsse, Scheidung …) plus a few PDF/image-only Qurʾān channels |

Find the missing channels with:
```bash
node -e 'const fs=require("fs");const A=JSON.parse(fs.readFileSync(process.env.HOME+"/Downloads/burhan-averroes-all.json"));const site=fs.readdirSync("topics").map(f=>fs.readFileSync("topics/"+f,"utf8")).join("");for(const c of A.channels.filter(c=>c.id&&!site.includes(c.id)))console.log(c.cat,"|",c.name,c.id)'
```
For each topic, also search the IA and DR exports for the same subject (by keywords or verse numbers) and merge them in.

**Later**
- **Averroes 2** still has to be exported.
- **Screenshots/scans**: almost every card is still missing the channel's images. A list per block is in `PROGRESS.md`, under "Scans to capture". They must be re-fetched from the logged-in Discord tab, since signed URLs expire after about 24 hours, then saved into `shots/` and put on the cards (`more.shots:[{src:'shots/x.png',cap:'…'}]`).
- **PDFs**: Noel approved downloading the article and slide PDFs (not whole books) into `~/Downloads/burhan-media`, extracting them with `pdftotext` and adding them to the matching cards.

## 5. Skills and tools

These were Claude Code features. Use your own equivalents:
- **Browser:** the local preview of localhost:5179, plus Noel's Chrome with Discord logged in for exporting and screenshots. Use the Discord UI only, never a token or the API.
- **Translation:** German → English, by you.
- **No special plugin is required.** The work is reading JSON exports, writing JS topic files and checking in the browser.
- **The site's design skills used early on:** GSAP, three.js, motion design. Only needed if you change the UI in `index.html`. Keep the existing look.

## 6. Working style Noel expects
- Work in blocks of about 4–12 channels by theme. After each block, report in German: "Block X ist abgeschlossen", what each card now contains, what was fixed, and which scans are missing. Then continue.
- Don't ask between cards; just keep going.
- Never drop an argument from a channel, and never leave duplicate cards.
