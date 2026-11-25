# Burhān — overnight fill log

## ROUND 6c (2026-11-24) — two natures, gospel-by-gospel, Sam Shamoun OT series
- `christianity/trinity/two-natures` (topics/two-natures-playbook.js) — steelman from “Bible EXPLICITLY Teaches Two Natures”.
- `christianity/jesus/by-gospel` (topics/gospel-divinity.js) — Mark/Matthew/Luke/John folders, 18 new claim cards + mounts.
  New mechanism: `window.MOUNTS.push({from,to,key})` in index.html shows one card in several folders (same node).
- `christianity/trinity/ot-trinity/shamoun-series` (topics/shamoun-ot-trinity.js) — Sam Shamoun “Trinity in the OT” (10 parts,
  transcripts in /private/tmp/claude-501/shamoun): chain explainer + 10 link cards (Ex 23, Ex 33, “no one has seen the Father”,
  Jude 5/1 Cor 10, Dan 3, Josh 5, Jacob, Zech 2–3, Isaac, Fathers & Ehrman) + 7 mounted OT cards.
- Discord bot exporter: tools/discord-bot-export.py (token in ~/.config/burhan/discord.env). Bot “Burhan Export” is only in
  noel's server so far; IA/DR/Averroes admins must use the invite link (client_id 1574744978368893022, permissions 66560).

## ROUND 6b (2026-11-24) — “God never sleeps, but Jesus slept” Playbook
- NEW `christianity/trinity/jesus-slept` (`topics/jesus-slept-playbook.js`, 16 nodes) from Noel's debate notes: sleep syllogism
  (Ps 121:3–4, Isa 40:28, John 4:6, Mark 4:38 + Q 2:255, 5:75, 50:38, 25:58, Muslim 179) → Opening 01 “natures don't sleep, persons do”
  → Angles A qua/transitivity · B De Morgan ¬(Cd∨Ch) · C two minds+wills = two agents (Boethius, Constantinople III) · D two-monitor
  model, 2 bugs · E three exits (redefine / kenosis / mystery) → 9 steelmanned traps (Ps 44:23, communicatio idiomatum, Pawl,
  anaesthesia, hypostasis-as-owner, Morris/VR, kenosis, mystery, Muslim tu quoque).
- Loop paused here: hadith block 3 (German Averroes hadith tiles → English) was dumped (/private/tmp/claude-501/aisha/hb3.txt) but not written.

## ROUND 6 (2026-11-23) — Trinity in the Old Testament Category, Flagship Angel of the LORD & Islamic Dilemma Playbooks (129 Scripts, 634 Cards, 551 Scans)
**Site State (`https://damandam.github.io/burhan/` & `http://localhost:5179/`, 129 topic scripts):**
- **634 live visible cards** | **0 load warnings** | **0 `noSum`** | **0 `emptyEx`** | **0 missing `shots/` files** | **0 cards lacking visual structure (`100%` covered!)**
- **Visual proof richness:** `withFacts: 570`, `withQuotes: 522`, `withVisual: 529`, **`cardsWithShots: 136`**, **`totalShots: 551`**

**Completed in Round 6:**
0n. **Flagship Tactical Playbook — `The “Islamic Dilemma”: Does the Qurʾān Confirm Today’s Bible?` & Sibling Cards (`topics/islamic-dilemma-playbook.js`, 100% verbatim Arabic & English verse quotes on every node):**
   - Rebuilt `christianity/islam-vs/d-dr-islamic-dilemma` from a flat 13-button list (which had `quotes: 0` on 10 branches and 2 empty `p: 0` drawers) into a **12-node 4-Angle Tactical Debate Playbook** (`Opening move 01` → `Turn the dilemma back on the Christian 02` → **Angles A–D** + **6 nested `Watch out · if they say` traps**) with **full verbatim Arabic & English verse quotes (`quotes`) on 12/12 nodes** for every verse discussed (Q 2:41, 2:75–79, 2:84–85, 2:89, 2:101–102, 3:50, 3:78, 3:93, 4:46, 5:13–14, 5:43–48, 5:68, 5:72–73, 6:34, 6:91, 6:114–115, 7:157, 10:94, 15:6–9, 18:27, 20:85–90, 43:81, 48:29, 50:38 + Bukhārī 4485/7362/7523 + Matt 23:2–3 + Mark 1:14–15 + Luke 1:1–4) and all **18 primary scans**.
   - Upgraded sibling cards `d-dr-what-is-the-injil` (with all 6 `shots/injil-1..6.jpg` scans), `d-dr-judge-by-the-gospel-5-47` (Q 5:46–48), and `d-dr-quran-2-85` (Q 2:84–85) into full multi-branch Tactical Playbooks with verbatim verse quotes on every node.
0m. **New Category `Trinity in the Old Testament` (`christianity/trinity/ot-trinity`, 12 Cards) & Flagship `Angel of the LORD` Playbook (`topics/ot-trinity-angel-playbook.js`, 6 PDFs → 6 JPEGs `shots/aotl-*.jpg`):**
   - Created dedicated category folder **`christianity/trinity/ot-trinity`** (*"Trinity in the Old Testament"*) and cross-mounted all 12 overlapping OT Trinity & Messianic cards (`angel-of-the-lord`, `divine-council-two-powers-ugarit`, `genesis-1-26-let-us-make`, `genesis-18-three-visitors`, `isaiah-48-16-trinity`, `isaiah-63-holy-spirit`, `son-of-man-daniel-7-gospels`, `isaiah-9-6-mighty-god`, `isaiah-7-14-immanuel`, `psalm-22-pierced-hands-and-feet`, `zechariah-12-10-pierced`, `genesis-3-15-protoevangelium`) into `ot-trinity/` while ALSO keeping them in their original categories (`trinity/`, `proof-texts/`, `prophecies/`).
   - Built **13-node Flagship Tactical Debate Playbook for `Angel of the LORD (Malʾakh YHWH): Pre-Incarnate Jesus?`** integrating all 6 PDFs from `~/Downloads/angel of the lord` (Prof. Paul D. Wegner / Gateway Seminary Dec 2025, Stephen L. White / *Tyndale Bulletin* 50.2, Heinrich Vogel, *OT Godhead Language*, *Bible Authenticity*, *BibleProject*) + Deenresponds `#angel-of-the-lord` & `#exodus-23` + 6 PDF scans (`shots/aotl-*.jpg`) + **verbatim Biblical/Qurʾānic verse quotes on 13/13 nodes**.
   - Built **NEW Tactical Playbook `divine-council-two-powers-ugarit`** (*The “Divine Council” & “Two Powers” Argument: Ugarit’s El & Baal vs. Monotheism*) from `OTGodheadLanguage.pdf` (`shots/aotl-ot-godhead-language.jpg`), exposing how the paper admits its binitarian model is patterned on Ugarit's polytheistic El, Asherah, and co-regent Baal, and refuting it with Psalm 82:6–7, John 10:34–35, Genesis 19:13 vs. 19:24, Deuteronomy 32:39, and Isaiah 44:24.
   - Enriched `genesis-1-26-let-us-make`, `genesis-18-three-visitors`, `isaiah-48-16-trinity`, and `isaiah-63-holy-spirit` with verbatim Biblical verse quotes on every root and branch node.
0l. **Block 10A — Averroes 2 Wave 2 Flagship Islam, Qurʾān & Ḥadīth Playbooks (`topics/av2-wave2a-islam.js` + `topics/av2-wave2b-islam.js`, 14 German dossiers translated & synthesized into 11 Playbooks + 3 enrichments):**
   - **11 NEW Tactical Debate Playbook cards:** `monkeys-stoning-bukhari` (Bukhārī 3849 *mawqūf* pre-Islamic narrator report by ʿAmr b. Maymūn + Augustine *City of God* 15.23), `killing-geckos-hadith` (11k-char *isnād* & *matn* dossier), `beardless-youth-hadith` (fabricated report condemned by Ibn al-Ṣalāḥ, Ibn al-Qaṭṭān & al-Albānī), `umar-library-of-alexandria-myth` (600-year source gap & consensus of Butler, Bernard Lewis, Hitti, Russell), `pure-milk-16-66`, `two-seas-barrier-55-19` (al-Ṭabarī 22/40 & Ibn Kathīr 7/470), `foreign-words-clear-arabic`, `sabbath-breakers-apes-2-65`, `four-year-pregnancy-fiqh`, `no-compulsion-in-religion-2-256`, `quran-9-29-jizyah-context`.
   - **3 `add()` enrichments:** `christianity/cross` (answering "Did Allah deceive Christians at the crucifixion?" Q 4:157), `c-juden-am-ju-ngsten-tag-to-ten` (end-times Dajjāl battle context), `sword-verse-abrogation` (Q 9:1–6 treaty-violation context).
0k. **Block 11B — Averroes 2 Wave 3 Patristic & Scholastic Admissions (`topics/av2-wave3-patristic.js`, 9 German dossiers translated & synthesized into 5 Playbooks + 2 enrichments):**
   - **5 NEW Tactical Debate Playbook cards:**
     - `christianity/church/augustine-church-authority-and-synoptics` (Augustine *Contra Epistulam Manichaei* 5.6 circular church authority & *De Consensu Evangelistarum* 4.10.11 admitting Matthew, Mark & Luke do not teach Christ's divine pre-existence)
     - `christianity/church/justin-martyr-pagan-sons-of-jupiter` (Justin Martyr *1 Apology* 21–22 & 54 equating Jesus with Perseus, Hermes, Asclepius, Dionysus & Bellerophon)
     - `christianity/trinity/aquinas-trinity-unprovable-by-reason` (Thomas Aquinas *Summa Theologiae* I q.32 a.1 — natural reason proves only One God/*Tawḥīd* and attempting to prove the Trinity by reason exposes Christianity to *derisus infidelium*)
     - `christianity/cross/aquinas-incarnation-not-necessary-for-forgiveness` (Thomas Aquinas *Summa Theologiae* III q.1 a.2 & q.46 a.2–3 dismantling Anselm's strict necessity claim)
     - `christianity/church/john-chrysostom-christology-subordination` (John Chrysostom *Homily 3 on Titus* & *Homily 26 on 1 Corinthians* 11:3)
   - **2 `add()` enrichments:** `church-fathers-on-alteration` (Jerome *Commentary on Matthew* 13:35 on 3-stage deliberate scribal alteration from Asaph to Isaiah) & `aphrahat-persian-sage-christology` (Aphrahat *Demonstration* 17 §3–8 on *taʿẓīm* vs. *ʿibādah*).
0j. **Block 11A — Averroes 2 Wave 3 Complete 1st- & 2nd-Century AH Qurʾānic Manuscript Catalog (`topics/av2-wave3-mss.js`, all 29 AV2 manuscript channels synthesized into 7 comprehensive Playbooks):**
   - **7 NEW Tactical Debate Playbook cards under `islam/quran/preservation/`:**
     - `hijazi-orthography-and-codex-parisino` (PERF 558 22 AH / 643 CE, Codex Parisino-Petropolitanus BnF Arabe 328ab, Arabe 328c + Birmingham Mingana 1572a C14 568–645 CE, Arabe 331, Arabe 330g, Arabe 6140a)
     - `sanaa-palimpsest-and-mingana-palimpsest` (DAM 01-27.1 C14 606–649 CE, DAM 01-29.1 C14 633–665 CE, Mingana-Lewis Palimpsest)
     - `codex-tubingen-and-early-papyri` (Tübingen Ma VI 165 C14 649–675 CE, P. Michaélidès No. 32, Vienna A. Perg. 2, Codex Auctionalis)
     - `umayyad-codices-damascus-fustat` (Codex Is 1615 I C14 591–643 CE, Codex MS Qāf 47 C14 606–652 CE, Great Umayyad Qurʾān DAM 20-33.1, TIEM ŞE 321 Damascus, Marcel 13 Fustat, Dutton Umayyad Fragment C14 644–675 CE)
     - `st-petersburg-marcel-codices` (Marcel 5 C14 652–694 CE, Marcel 16/17, Marcel 18/2, Marcel 19, St. Petersburg E-20 / Katta-Langar)
     - `codex-mashhad-and-ali-manuscripts` (Astan Quds Mashhad MSS 18 & 4116 covering >90% of the Qurʾān C14 660–772 CE, Ṣanʿāʾ ʿAlī b. Abī Ṭālib Muṣḥaf 275 fols.)
     - `uthmanic-codices-istanbul-tashkent-cairo` (Topkapı Palace 408 fols., Cairo al-Ḥusayn 1,087 fols., Tashkent/Samarkand Muṣḥaf)
0i. **Block 10B — Averroes 2 Wave 2 Flagship Christianity & Canon Playbooks (`topics/av2-wave2-christ.js`, 14 German dossiers translated & synthesized into English):**
   - **8 NEW Tactical Debate Playbook cards:** `daniel-13-susanna-historical-errors` (Julius Africanus to Origen), `jesus-amazed-and-marveled` (*ethaumasen* in Matt 8:10 / Luke 7:9 / Mark 6:6), `cadaver-synod-papal-infallibility` (897 CE Pope Stephen VI vs. Formosus), `ahaziah-age-22-or-42` (2 Kgs 8:26 vs. 2 Chr 22:2), `nt-quotes-nonexistent-ot-verses` (Matt 2:23, John 7:38, Jas 4:5, Eph 5:14, Jude 14–15), `gospel-of-the-hebrews-patristic`, `epistle-to-the-hebrews-authorship`, `aphrahat-persian-sage-christology` (*Demonstration* 17).
   - **4 `add()` enrichments:** `no-trinity-before-nicaea` (Ebionites), `christianity/bible/authorship` (patristic & internal proof Evangelists were not eyewitnesses), `gospel-of-peter-crucifixion`, `t-origen-of-alexandria` (Origen *De Oratione* 15.1–2 forbidding prayer *proseuchē* to Christ!).
0h. **Block 9 — Averroes 2 Wave 1 Flagship Islam & Christianity Playbooks (`topics/av2-wave1-islam.js` + `topics/av2-wave1-christ.js`, 17 German dossiers translated & synthesized into English):**
   - **14 NEW Tactical Debate Playbook cards:**
     - Islam/Women/Hadith/Creed (10): `woman-created-from-rib`, `women-as-rulers-hadith`, `bad-omen-in-women-hadith`, `wifes-right-to-intimacy`, `immortal-youths-in-paradise` (*wildān mukhalladūn*), `satan-passes-wind-adhan`, `aisha-lord-hastens-desires`, `abrahams-three-lies-hadith`, `did-the-prophet-see-allah`, `calling-god-father-vs-yhwh`.
     - Christianity/Canon/Gospels (4): `mark-6-5-jesus-could-not-do-miracles`, `gospel-of-peter-crucifixion`, `baptism-paradox-salvation`, `muratorian-canon-fragment`.
   - **3 `add()` enrichments:** `d-dr-jesus-is-the-word-and-spirit-of-allah` (Q 4:171 & Q 45:13), `no-trinity-before-nicaea` (Tertullian *Against Praxeas* ch. 3 majority recoil), `t-ignatius-of-antioch` (Short/Middle/Long Ignatian recensions).
0g. **Block 8 — Final 21 Substantive Uncovered Deenresponds Channels (`topics/dr-batch8-quran.js` + `topics/dr-batch8-dilemma.js`, 35 WebP scans `shots/dr8-*.webp`):**
   - **12 NEW Tactical Playbook cards:**
     - Qurʾān/History/Creed (6): `ad-and-thamud-archaeology` (2 scans), `no-more-khosrau-prophecy` (1 scan), `talut-gideon-river-test` (2 scans), `joseph-and-knives-12-31` (2 scans), `ibn-taymiyyah-misquotations` (2 scans), `zakariya-muteness-sign`.
     - Dilemma/NT/Prophecies (6): `quran-3-7-muhkam-mutashabih`, `quran-3-78-scripture-distortion` (2 scans), `prophet-lawgiving-authority` (2 scans), `wine-and-jesus-intoxicants` (2 scans), `david-and-goliath-who-killed-him` (2 scans), `prophecies-in-q-source` (2 scans).
   - **9 `add()` enrichments:** `t-surah-5116-refers-to-the-trinity` (2 scans), `c-maria-schwester-harun-aaron-imran` (2 scans), `dhul-qarnayn-wall`, `d-dr-jesus-never-said-ahmed` (2 scans), `d-dr-islamic-dilemma` (2 scans), `c-paulus-islamischer-prophet` (2 scans), `pericope-adulterae` (2 scans), `t-isaiah-53-islamic-prophecy` (2 scans), `d-dr-deuteronomy-33-2` (2 scans, Rabbi Bachye & Saadiah Gaon on Paran).
0f. **Block 7 — Thin-Card Tactical Playbook Depth Upgrade (`topics/playbook-depth-upgrade.js`, 20 thinnest single-node cards upgraded into multi-branch Tactical Playbooks):**
   - Upgraded the 20 thinnest 1-node cards (including `bathing-together` & `abu-bakr-pokes-aisha` which previously had `more.p: []`, plus `council-of-trent-marriage-age`, `umar-umm-kulthum`, `ahl-al-kitab-marriage-2-221-5-5`, `khalid-banu-jadhima`, `asma-bint-marwan`, `aisha-mushaf-first-rows`, `adam-names-2-31`, `asa-perhaps`, `or-37-147`, `water-stores-15-22`, `ladder-to-heaven-6-35`, `bees-eat-fruit-16-69`, `d-dr-adam-and-moses-predestination`, `d-dr-the-prophet-sitting-on-the-arsh`, `semen-and-the-throne-report`, `seeking-forgiveness-4-64`, `t-know`, `t-he`) with 3 numbered `"01 · / 02 · / 03 ·"` proof points and **40 new `Watch out · if they say` follow-up counter-trap branches** (2 per card), preserving 100% of existing credits/scans/facts.
0e. **Block 6 — IA Primary Scans, Forum Threads & Final AV1 Media Channel (`topics/block6-ia-av-scans.js`, 30 WebP scans):**
   - **1 NEW Tactical Playbook card:** `christianity/bible/proverbs-16-4-created-for-evil` (AV1 `#hölle-schicksal` + `av-hoelle-1.webp`, completing **100% of all Averroes 1 channels**; `#andere-gesellschaften` verified already covered in `aisha` via `sasanian-age-nine.png`).
   - **7 `add()` primary-scan enrichments:** `d-ia-satanic-verses` (6 scans `ia-satanic-1..6.webp`), `d-ia-flat-earth` (6 scans `ia-flatearth-1..6.webp` incl. Ibn ʿAbbās spindle whorl *falka*), `t-nasa-prove-the-reliability-of-the-hadith` (3 scans), `t-ah-a-di-th-came-200-years-after-the-prophet` (5 scans), `t-a-comprehensive-proving-hadith-are-reliable` (3 scans), `t-earliest-christians-believed-in-a-corrupted-torah` (2 scans), `islam/morality/war` (4 scans from `IA #response-library › Islam and jihad`).
0d. **Block 5 — 20 More Uncovered Deenresponds Channels (`topics/dr-batch5-islam.js` + `topics/dr-batch5-christ.js`, 30 WebP scans `shots/dr5-*.webp`):**
   - **14 NEW Tactical Playbook cards:**
     - Islam/Science/Hadith (6): `dominant-liquid-resemblance`, `no-contagion-hadith` (2 scans), `seven-heavens-and-seven-earths` (3 scans visually extracted), `five-keys-of-the-unseen` (2 scans), `sun-orbit-and-destination` (2 scans), `david-and-chainmail` (2 scans; fixed `1 Sam 17:5` Goliath attribution & Galileo Saturn-rings note).
     - Christianity/OT/NT/Contradictions (8): `gospel-of-thomas-canon` (2 scans), `galatians-1-8-angel-from-heaven` (2 scans), `isaiah-63-holy-spirit` (fixed `Exod 33:14`), `zechariah-12-10-pierced` (2 scans), `genesis-3-15-protoevangelium`, `prophets-vs-pentateuch-sacrifices` (2 scans), `paul-vs-david-and-ezekiel-vs-samuel` (4 scans), `jesus-contradicts-deuteronomy` (2 scans).
   - **5 `add()` enrichments:** `mountains-as-pegs`, `t-evolution` (1 scan), `ajwa-dates-black-seed` (2 scans), `angel-of-the-lord` (Exodus 23:20–21), `lost-books-of-the-bible` (2 scans, Chrysostom *Homily 9 on Matthew* §6).
0c. **Block 4 — 20 Uncovered Deenresponds Channels (`topics/dr-uncovered-islam.js` + `topics/dr-uncovered-christ.js`, 26 WebP scans `shots/dr-*.webp`):**
   - **7 NEW Tactical Playbook cards:**
     - `islam/hadith/law/fly-wing-hadith` (2 scans, *waḥy* vs. prophetic medicine *al-ṭibb* & palm-pollination *ḥadīth* chains)
     - `islam/creed/attributes/allah-hands-limbs-parts` (4 scans, merges `#does-allah-have-parts`, `#does-allah-have-limbs`, `#does-allah-have-hands` — Atharī *bilā kayf* & Ibn Khuzaymah *Kitāb al-Tawḥīd*)
     - `christianity/trinity/angel-of-the-lord` (*malʾakh* / *shaliaḥ* biblical agency Playbook)
     - `christianity/trinity/genesis-1-26-let-us-make` (plural of majesty/deliberation & singular *wayyiḇrā*)
     - `christianity/trinity/genesis-18-three-visitors` (2 scans, Exod 33:20 & Gen 18:22–23)
     - `christianity/trinity/isaiah-48-16-trinity` (Hebrew syntax *šəlāḥanī wə-rūḥō* & speaker shift)
     - `christianity/jesus/proof-texts/psalm-22-pierced-hands-and-feet` (2 scans, Masoretic *kaʾărī* vs. Nahal Hever & LXX)
   - **11 `add()` enrichments:** `tailbone-coccyx-hadith` (2 scans), `heaven-or-earth-created-first`, `c-sonne-geht-im-quellen-meer-unter` (2 scans, 5-branch *isnād* split), `bones-then-flesh-23-14` (2 scans, StatPearls osteogenesis + Galenic/Judaic studies), `c-kamel-urin` (2 scans), `d-dr-matthew` (Isa 7:14 *ʿalmāh*), `d-dr-isaiah-9` (Hezekiah/theophoric names), `christianity/bible/additions` (Comma Johanneum 1 John 5:7 + Mark 16:9–20 longer ending, 4 scans), `t-jesus-does-not-know-the-hour` (Matt 24:36 omission, 2 scans), `d-dr-mark-10-18` (Matt 19:17 redaction, 2 scans).
0a. **Block 3 — Overlooked IA Text-Channel Sub-Threads (`topics/ia-subthreads.js`, 8 sub-threads, 15 WebP scans `shots/ia-sub-*.webp`):**
   - **2 NEW Tactical Playbook cards:** `christianity/jesus/proof-texts/john-8-58-before-abraham-i-am` (2 scans, LXX Exod 3:14 *ho ōn* vs. John 9:9 *egō eimi* & pre-existent Wisdom/Messiah traps) & `christianity/jesus/proof-texts/john-10-30-i-and-the-father-are-one` (2 scans, neuter *hen* vs. masculine *heis*, John 17:11/21–22 & 1 Cor 3:8).
   - **6 enrichments (`add()`):** `christianity/cross` (crucifixion Gospel contradictions, 2 scans), `islam/quran/history/pharaoh-crucifixion` (crucifixion in Moses's era, 1 scan), `islam/proofs/d-ia-truthfulness-of-the-prophet` (Jan 27, 632 CE NASA-verified solar eclipse on Ibrāhīm's death), `islam/morality/war` (5 Judeo-Christian testimonies praising Muslim rule, 2 scans), `islam/morality/d-ia-apostasy-and-blasphemy-laws` (Church Fathers + Deuterocanon 1 Maccabees, 3 scans), `islam/morality/slavery` (humane treatment of war captives, 3 scans).
0b. **Block 2 — AV1 Media-Only Christianity/Bible PDFs (`topics/av1-media-christ.js`, 10 channels, 16 German PDFs → 16 JPEGs `shots/pdf4-*.jpg`):**
   - **6 NEW Tactical Playbook cards:** `christianity/islam-vs/prophecies/hosea-9-6-mahmad` (Jerome's pre-Islamic witness on *MḤMD*), `christianity/islam-vs/prophecies/son-of-man-daniel-7-gospels` (4-dossier Playbook), `christianity/islam-vs/prophecies/qumran-deut-13-faithful-prophet`, `christianity/bible/contradictions/heaven-ascension-contradiction`, `christianity/bible/contradictions/yhwh-name-exodus-6-3`, `christianity/jesus/jesus-baptism-sin-mark-1`.
   - **4 enrichments (`add()`):** `christianity/islam-vs/d-dr-song-of-solomon` (+2 cards from 4 PDFs), `christianity/islam-vs/d-dr-daniel-2` (+1 card from Daniel 2 & 7 dossier), `christianity/islam-vs/d-dr-isaiah-42` (+1 card on Isaiah 42 in the Church Fathers), `christianity/jesus/d-av-jesus-gewalt-su-nde/c-niemals-im-geheimen-gesprochen` (+1 branch).
0. **100% Site-Wide Visual & Playbook Audit (`topics/visual-audit-1-misc.js` through `visual-audit-6b-quran.js` — 8 batches, ALL 220 remaining cards upgraded!):**
   - Non-destructive `up(origKey, patch)` across every remaining card lacking `facts`/`visual`/`quotes` (`v1-misc` 21, `v2-morality` 33, `v3-creed` 23, `v4-prophet-sects` 17, `v5a-hadith` 29, `v5b-hadith` 29, `v6a-quran` 34, `v6b-quran` 34) — adding KPI `facts` strips, `compare`/`steps` visuals, verbatim `quotes`, structured `"Heading: body"` `.pcard` proof points, and tactical Playbook labels (`who`, `forkTitle`, `forkSub`, `optWho`) derived strictly from each card's existing verified content (0 warnings, 0 invented claims, 100% of existing branches/shots preserved).
1. **Flagship Tactical Playbook — `No Trinity before Nicaea` (`topics/no-trinity-before-nicaea.js`, 14 nodes, 30 verified WebP scans & HD YouTube slides):**
   - **Sources merged:** DawahWise 5h42m livestream (`youtube.com/watch?v=WJ_q8owKJKA` — Muslim Orthodox & Deen Responds, 20 chapters + Q&A + 7 cropped HD slides `yt-nicaea-*.webp`), IA `#🏛️・church-fathers` (incl. previously missing archived threads `Tertullian Of Carthage` & `Theophilus Of Antioch` + `Origen`, `Hippolytus`, `Lactantius`, 11 scans), and newly uncovered Deenresponds channels (`#what-is-the-trinity`, `#holy-spirit-is-a-power-of-god`, `#tatian`, `#athenagoras`, `#novation`, `#clement-of-alexandria`, `#dionysius-of-alexandria`, `#eusebius-of-caesaeria`, 12 scans).
   - **Proactive Playbook flow:** `Opening move 01` (Nicene/Constantinopolitan criteria) → `Lock in the historical timeline 02` → **4 Tactical Lines of Attack**: **Angle A** (1st & early 2nd c.: Clement of Rome, Ebionites, Ignatius, Irenaeus, Joel Marcus on Mark 10:18), **Angle B** (2nd-c. Greek Apologists: Justin Martyr, Theophilus, Tatian, Athenagoras), **Angle C** (3rd-c. Giants: Tertullian, Hippolytus, Novatian, Clement of Alexandria, Origen, Dionysius, Lactantius, Eusebius), **Angle D** (Holy Spirit, Antioch 268 CE, Nicaea 325 vs. Constantinople 381 & Qurʾānic *tawḥīd*) — each with nested `Watch out · if they say…` counter-traps.
   - **Cross-attachments & fixes:** Attached primary scans to 5 previously 0-shot cards (`t-clement-of-rome`, `t-origen-of-alexandria`, `t-hippolytus-of-rome`, `t-lucius-cæcilius-firmianus-lactantius`, `d-dr-mark-10-18`); corrected Clement of Alexandria scan citation (*Paedagogus* 1.8–9 vs. *Stromata* 4 & 6); fixed transcript/slide typos (`novation` → Novatian, `heteras theos` → *heteros theos*, `De Principis` → *De Principiis*, `Adnote` → Agnoetae, `Paul of Samasta` → Paul of Samosata, `yt-nicaea-justin2.webp` slide heading clarification).
2. **Tactical Playbook Labels (`index.html`):** Non-invasive optional label support (`who`, `theyWho`, `forkTitle`, `forkSub`, `optWho`, `optLabel`) + proactive step search indexing — enables proactive `Step 1 → Step 2 → Choose Angle A/B/C/D → Watch out · if they say X → Counter & push on` flows without changing visual design or animations.
3. **Block 1 — AV1 Media-Only Islam/Qurʾān Channels (`topics/av1-media-islam.js`, 8 channels, 7 PDFs → 14 JPEGs + 14 WebP scans):**
   - **2 new cards:** `islam/quran/preservation/d-ia-common-claims/ibn-masud-mushaf` (merges `#musnaf-masud-fehlt-2-suren` + `#ibn-masud-versteckt-mansukript`, 4 PDF pages) & `islam/quran/d-ia-alleged-contradictions/heaven-or-earth-created-first` (`#himmel-oder-erde-zuerst-erschaffen`, Q 2:29/41:9–12 vs. 79:27–33, 2 PDF pages).
   - **3 PDF enrichments (`add()`):** `d-dr-defense-of-qiraat` (`ok_2.pdf` + Qirāʾāt dossier, 4 PDF pages), `d-dr-how-many-days-for-creation` (2 PDF pages), `d-dr-islamic-dilemma` (`#alles` 24k-char master dossier, 2 PDF pages).
   - **2 WebP scan batches (`attachShots()`):** `c-allahs-thron-knirchen` (`thron-1..8.webp`) & `d-dr-bukhari-preservation-of-torah` (`bukh-torah-1..6.webp`).
3. **Flagship Tactical Playbook — `Who wrote the Gospels?` (`topics/gospel-authorship-playbook.js`, 16 nodes, 12 Discord channels across IA + Deenresponds + Averroes, 37 verified WebP scans):**
   - **Proactive Playbook flow:** `Opening move 01` → `Set the burden of proof 02` → **4 Tactical Lines of Attack**:
     - **Angle A:** Anonymity & Gospel titles (`IA #authorship-of-the-new-testament › Gospel of Mark`, `#biblical-corruption › anonymity-of-the-gospels` & `Why Gospels are Anonymous?`, `gosp-mark-1..6`, `gosp-anon-1..4`, `gosp-why-1..2`) + Watch-out traps (Hengel/Pitre `kata` headings; Tacitus/Josephus vs. Luke 1:1–4 & John 21:24).
     - **Angle B:** Synoptic copying & Q (`DR #synoptics-literary-dependency`, `#argument-1-chronology-copying`, `#why-does-luke-agree-with-matthean-edits`, `#notes-on-q`, `gosp-syn-1..5`) + Watch-out traps (Farrer scroll cross-referencing + minor agreements + Matthean priority).
     - **Angle C:** Papias, Eusebius & historical reliability (`AV #papias-fragmente` Frags. 1–10, `IA NOT Eyewitnesses`, `IA #response-library › The gospels are not historically reliable`, `gosp-eyewit-1..5`, `gosp-rel-1..5`) + Watch-out traps (Criterion of Hostility; Papias's 3rd-hand chain).
     - **Angle D:** Canonical forgeries & the Qurʾānic Injīl (`IA #authorship-of-the-new-testament › 1 and 2 Peter`, `IA Anonymous & Pseudonymous NT Books`, `gosp-peter-1..6`, `gosp-pseudo-1..4`, Q 5:46 / 2:79 / Bukhārī 4485).
   - **Fixes:** Fixed empty broken child branch caused by `cur.merge('christianity/bible/d-ia-authorship-of-the-new-testament', 'christianity/bible/authorship')`; cross-attached `gosp-rel-1..5.webp` to `Are the Gospels historically reliable?`; fixed minor source typos (`Iranaeus`, `pseudpnymous`, `bruze metzger`, Papias century note).
4. **Live Discovery (Open Queue):**
   - **Block 2 (AV1 Media-Only Christianity/Bible — 11 channels):** `#hohes-lied-5-16`, `#hosea-9-6`, `#daniel-7`, `#menschen-sohn`, `#jesaja-42`, `#qumran-dtn-13`, `#jesus-sagt-er-hat-nie-im-geheimen-gesprochen`, `#himmel-widerspruch`, `#jhwe-name-nicht-offenbart`, `#jesus-sünde-taufen-jordan-markus`, `#andere-gesellschaften`, `#hölle-schicksal`.
   - **Deenresponds Live Expansion:** Expanding collapsed categories uncovered **115 previously unexported DR channels** (229 live vs. 152 in old JSON) including 20+ Church Fathers/Ebionites, 12 OT Trinity/Messiah, `#the-coccyx-bone`, `#earth-first-or-heavens`, `#embryology-related-objections`, `#1-john-5-7`, `#the-real-ending-of-mark`, etc.
   - **Averroes 2:** Still needs full export.

---

## 2026-11-22 — prophet-tribal-call.js (Avereos' own research, not Discord)
- NEW `islam/prophet/bite-your-fathers-thing`: Ubayy ibn Kaʿb ḥadīth (“fa-aʿiḍḍūhu bi-hani abīhi wa-lā taknū”, Aḥmad 21233–21236).
  Main answer: chains compared (ʿAwf: no body part; Yūnus/al-Sarī: han = euphemism; explicit word only via Mubārak ibn Faḍāla = shādhdh).
  Forks: (1) chain is ṣaḥīḥ, instruction marfūʿ — don't call it weak; (2) target = tribal war cry / boasting about fathers (Bukhārī 4905, Abū Dāwūd 5116, Tirmidhī 3955, al-Ṭaḥāwī Mushkil 8/233–235, Ibn Taymiyya MF 15/380, Bukhārī 6824); (3) his general speech (Bukhārī 3559, 6031, 6032, Tirmidhī 1977, Muslim 2599).
- Checks: node --check OK; node load test of all 98 loader files: 0 errors, card found, phrase “may his forehead be dusty” found.

---

## ROUND 5 (2026-11-21) — `/goal` COMPLETE & VERIFIED
**Final Verified Site State (`http://localhost:5179/`, 97 topic scripts):**
- **529 live visible cards** | **0 load warnings** | **0 `noSum`** | **0 `emptyEx`** | **0 German-only tiles** | **0 missing `shots/` files**
- **Visual proof richness:** `withFacts: 236`, `withQuotes: 226`, `withVisual: 148`, **`cardsWithShots: 56`**, **`totalShots: 243`**
- **Project footprint:** 69 MB total (`shots/`: 59 MB, `topics/`: 4.1 MB); 31 temp Discord PDFs cleaned from `~/Downloads` (31.5 MB freed).

**Completed in Round 5:**
1. **Visual Proof Engine (`index.html`):** Shared `proofBodyHTML(m)` powering both `Full proof` drawer and inline `dossierHTML()` on single-answer cards (`facts` KPI strip, `visual` compare/steps, numbered `.pcard` + crimson `.pcard.turn` callouts, `quotes[]`, clickable `linkify()`, full-screen lightbox on all `.shot-btn`/`.th`, compact `.bub-src` chips). Fixed 86× `THE VERDICT: undefined` and `"1 answers"` grammar bug.
2. **Site-wide Enrichment & Translation (8 files):** `enrich-islam1`, `enrich-other1`, `enrich-church1`, `enrich-christ-practice`, `enrich-christ-jesus-de`, `enrich-christ-jesus-dr`, `enrich-islam-proofs`, `enrich-christ-rest` — rebuilt all thin Islam/Christianity/Atheism/Hinduism/Church-Fathers cards and translated all remaining German tiles to English.
3. **100% of Averroes-all Channels Integrated (0 missing non-header channels out of 500):**
   `islam-av3`, `islam-av4`, `islam-av5`, `christ-av2-child1`, `christ-av3-child2`, `christ-av4-prophet-bible`, `christ-av5-contradictions`, `christ-av6-paul`, `christ-av7-corrects-slavery`, `christ-av8-bible-science`, `christ-av10-endtimes-adulteress`, `christ-av11-misc`.
4. **Live Discord Primary Scans — Waves 1 & 2 (`scans-batch1.js`, `scans-batch2.js`):**
   - **113 new compressed scans** (`shots/*.jpg` / `shots/*.webp`, MD5-deduplicated) attached across 19 priority cards: IA `#72-virgins`, `#istiwa`, `#forced-marriage`, `#church-fathers` (Justin, Irenaeus, Ignatius), `#women-and-the-quran` (Q 4:34, Q 2:282, Q 65:4); DR `#john-17-3`, `#john-20-28-debunked`, `#islamic-dilemma`, `#jesus-is-called-lord-debunked`, `#what-is-the-injil`, `#deens-paraklete-exegesis-of-john-14`, `#jesus-is-worshipped`, `#how-many-days-for-creation`, `#quran-copies-from-talmud`, `#bukhari-preservation-of-torah`; AV `#schriften-vom-kirchenvätern-verfälscht`, `#allah-betet`, and image-only `#mond-eigenes-licht` (transcribed Gen 1:16 *maʾōr* vs. Q 25:61 *sirāj/munīr*).
5. **Live Discord PDFs & Slide Decks — Waves 1 & 2 (`pdf-enrichment1.js`, `pdf-enrichment2.js`):**
   - **29 priority Discord PDFs** downloaded via Chrome UI, extracted via `pdftotext`, rendered to **55 compact JPEG slide/dossier previews** (`shots/pdf-*.jpg`, `shots/pdf2-*.jpg`), translated/structured into English, and verified:
     - **2 new cards:** `islam/hadith/unseen/tailbone-coccyx-hadith` (9-page *ʿajb al-dhanab* *ʿilal* dossier) & `islam/creed/attributes/mercy-100-and-99` (Ibn Taymiyyah *ṣifa* vs. 100 created *āthār*).
     - **19 existing cards enriched via `add()`:** Isaiah 42, Matthew 22, Daniel 2 (Slides 1–20), Table of Stories (37 Bible/Qurʾān narratives), Night Raids (`#kinder-pdf`), Black Woman Dream (`#schwarzefrau-pest`), Qurʾān 4:34 OpenITI Release Parts A–F + Corpus 2, Qurʾān 86:5–7 Dossier + 2 Solution Paths, Qurʾān 65:4 (`Mündigkeit` + 31 OpenITI findings ≤300 AH + classical jurists), Qurʾān 2:282 / Women's Intellect (OpenITI Parts 1 & 2), Isaiah 42/Habakkuk 3 (`Mur 88` + Peshitta + patristic/chronicle witnesses), Mustard Seed Dilemma, God/Design/Fine-Tuning (Collins/Dyson/Davies), Psychological Harmony (CUTPHA v2.2), 4/5/6 Ezra & Matt 21–22, Jesus Rebukes Paul, Proving Q (Fleddermann/Kloppenborg), Islamic Scholarly Stances on Bible Integrity (Zawadi), and Q 4:169 Eternal Hell.
   - **Minor source typos fixed:** Irenaeus `"which know rules"` → `"which now rules"`; `"seized to exist"` → `"ceased to exist"`; `"could not of destroyed"` → `"could not have destroyed"`; `"Paul Elman"` → `Yaakov Elman`; `"Revelations"` → `Revelation`; `"popular science writer Paul"` → `Paul Davies (1988, p. 203)`; clarified Hebrew *ʿāvad* vs. Aramaic *pelach*; removed trailing chatbot prompt in `mercy99`.
6. **Live Browser Verification (`localhost:5179`):** Reloaded with cache bypass, verified 0 JS errors, tested `#q` search across new/enriched topics, visually inspected `Full proof` drawer (`facts`, `.dr-cmp`, `.pcard`, `.qcard`, clickable `.jpg`/`.webp` screenshots with `naturalWidth > 0`).

**Optional Next Steps (not blocking):**
- Export & integrate **Averroes 2** server (not yet fully exported).
- Remaining secondary scan-only Discord channels (e.g., IA `#satanic-verses`, `#flat-earth`, AV `#allahs-thron-knirchen`, `#sonne…` chain chart) can be pulled anytime via the same WebP pipeline.

---

## ROUND 4 (2026-11-19, project now in ~/Documents/burhan): CARD BY CARD — the current loop
Rules (from Noel): go card by card, finish one fully, then the next in the same category. Every perspective from
every server (IA, Deenresponds, Averroes, Averroes 2). INTEGRATE everything the channels contain, never grade or drop
an argument. Real screenshots of scans are wanted (Discord lightbox → zoom save_to_disk → shots/). Don't ask between
cards; report "X ist abgeschlossen".
How: read the channel live in Chrome (Discord logged in, tab with window.__readAll/__runJob/__cap helpers; re-define
after a reload), compare with ~/Downloads/burhan-*.json. One file per card/category in topics/<name>.js appended LAST
in the index.html load list; use topic(path,{…article}) to replace, cur.hide(key) for folded tiles, and filter
window.MOVES for folded Averroes tiles. Check: node load test + Chrome localhost:5179 search box (#q).
Preview server: python3 -m http.server 5179 (port 5178 is an old copy — ignore).
DONE: Marriage (aisha, zaynab, safiyya, polygyny, forced-marriage, marriage-rest), War (war, qurayza, war-rest),
      Slavery (slavery), Women (women: 4:34, testimony/deficient, 2:223, angels curse, prostration),
      Apostasy + Bible apostasy + disciplining children (apostasy). → Law & morality COMPLETE.
      Prophet ﷺ (prophet: bewitched, suicidal, moon, 7 Averroes cards). continuity (remaining.js) still classical-only.
      Sects (sects: cursing Companions, Camel, Mirza + beliefs, 5:117). ghadeer-khumm & jesus'-death forums are empty.
      Proofs (proofs.js + curated-proofs base): no-miracles rebuilt, 56-prophecy list (page 16–35 NOT captured —
      lightbox wouldn't open it; retry), last-hour card, Roman notes. messianic-prophecies forum → Christianity area.
      Creed block 1 (creed-governance: divine governance 5:44, obeying ruler, rebelling, al-walāʾ wa al-barāʾ).
      Creed block 2a (creed-attributes: Atharī creed, istiwāʾ, uncreated Qurʾān, bidʿa, stone paradox).
      Creed block 2b (creed-rest: deceives, pillars, 6 Averroes cards). → Creed COMPLETE (text).
      Qurʾān block 1 (quran-block1: plagiarism 7 tools, satanic verses IA+DR+AV in one card, flat earth).
      Qurʾān block 2 (quran-block2: 10:94, man created from, 37:12, six days, ʿUzayr, pairs, clay birds, tafsir-stuff explainer).
      Qurʾān block 3 (quran-block3: 46:9, Iqraʾ, qibla, whale/Nūn, Mary sister of Aaron, Imruʾ al-Qays, Umayya — Averroes → English;
      the two poets un-merged from plagiarism and moved into Sources).
      Qurʾān block 4 (quran-block4: wings, son-conditional, 5:116, 3:55, 31:34, ʿawl, Talmud, naskh, Topkapı, Mashhad, We, swear).
      → Qurʾān area COMPLETE (text). (tools/rank.js still lists done tiles: it only measures text, so ignore those in quran-block*.)
      Hadith block 1 (hadith-block1: memorisation, Umayyads, 200 years, dream, kissed boy, 6929, Muslim 510, 7498, AD 4449,
      Bukhārī/Rāzī Torah (rāzī tile folded), Khiḍr).
      Hadith block 2 (hadith-block2: aorta (+#aorta-hadith), 3241, 7142, Zuṭṭ (+#zutt-hadith), Eve 3399, Gabriel squeeze, 72 virgins,
      apostate scribe, expel Ahl al-Kitāb, Ādam & Mūsā, methodology explainer).
      SCANS STILL TO CAPTURE (Chrome screenshots time out): IA #72-virgins (21 imgs), hadith-block2 (≈20), IA #preservation-of-hadith “200 years” thread (5 imgs), hadith-block1 (≈25), quran-block4 threads (≈20 imgs), AV #maria-schwester (1), #ummaya-dichter (1), DR block-2 channels (≈25 tafsīr/Bible scans), IA #satanic-verses (10 imgs), IA #flat-earth (7 imgs), #allah-deceives, #is-allah-the-father, #swearing-by-other-than-allah,
      #hyena-dilemma, #allahs-thron-knirchen (18 imgs), #uncreated-quran, #istiwa. Re-define helpers after reload.
      Hadith block 3 (hadith-block3, 2026-11-20: sun in a hot spring (2 chains, shādhdh), Sahla/Sālim breastfeeding, NEW ten-sucklings card
      in islam/quran/preservation (from #stillen-vers-aisha), ʿĀshūrāʾ, Prophet's ﷺ blood (6 reports); #rassismus folded into the 7142 card
      in hadith-block2 (Ibn al-Qayyim on forged anti-black ḥadīth + 13 equality ḥadīth); rassismus tile hidden, its merge removed).
      Scans to capture: #sonne… IMG_3091 (chain chart), #ashura message.txt, #aisha-ra-stillt PDF, #rassismus PDF.
!!  GAP FOUND 2026-11-20: ~/Downloads/burhan-averroes-all.json (500 ch) landed, but library.js was never regenerated → 350 Averroes
      channels are NOT on the site (Koran Scheinargumente 1: 50, Christentum kinder ehe: 35, sonstiges islam 3: 38, prophet saw in bibel: 27,
      Bibel Widersprüche: 21, Islamic dilema: 16, Paulus falscher prophet: 13, islam korrigiert christentum: 13, Sklaven christentum: 12,
      bibel wissenschaftliche fehler: 12, jesus endzeit: 10, Quran verfälscht: 10, …). For EVERY card from now on, also search
      burhan-averroes-all.json by topic (node one-liner over c.name / message text) and fold matching channels in; new topics get new cards.
      averroes-2-all still not exported.
      Hadith block 4 (hadith-block4, 2026-11-20: cross-server merges into ONE card each — Muslim 2767 ransom (DR + 2 AV, Ghaylān wording
      rejected), Satan in the ear (DR icraa article + AV), Mūsā & the stone (DR icraa article + AV, Bible stones), + AV urine trio
      (Barakah/Umm Ayman, camel urine idrāj, well = printing error بال/بزق). 4 AV tiles hidden, their merges removed.)
      Scans to capture: #frau-trink-urin (Abū Uways al-Kurdī page), #moses-sprechender-stein (mawqūf scan + 2 PDFs), #kamel-urin (Belegmappe PDF + img).
      Hadith block 5 (hadith-block5, 2026-11-20: Jews & Christians — don't greet first (Aḥmad 27237, Zād 2/388, scholarly views),
      stone & tree / Dajjāl war (Ibn al-Mulaqqin), curse on graves as mosques (+ 1 Cor 16:22, 2 John 10–11, Chrysostom), Kaʿba oath
      (al-Bukhārī's ʿIlal 457: no Jew in the correct chain). No IA/DR content on these. Scans: #keine-juden-christen-grüßen (4 imgs).)
      Hadith block 6 (hadith-block6, 2026-11-20: woman “shape of a devil” Muslim 1403 (Abū al-Zubayr's 6 students, ziyāda), garment of ʿĀʾisha
      (thawb/liḥāf/mirṭ, Aquinas), man kissing (Ibn Abī Laylā ↛ Usayd), tongue (al-Ṭabarānī 2588, thirst; Mark 7:33, 2 Kgs 4:34).
      Scans: #frau-teufel (1), #mann-küsst (3), #aisha-kleidung (4).)
      Hadith block 7 (hadith-block7, 2026-11-20: blind man / umm walad AD 4361 (al-Shaḥḥām + ʿIkrima critique), takbīr & fire (al-Ḍaʿīfa 2603,
      Ibn Taymiyya, Ibn al-Qayyim, James 5:14), chains to Paradise Bukhārī 3010 (captives; mawqūf per Ibn Ḥajar; 1 Sam 15:3);
      #nackte-jinn = Aḥmad 3788 → folded into the Zuṭṭ card (Tirmidhī 2861 “no nakedness”), tile hidden.)
      Qurʾān AV batch 1 DONE (quran-av1, 2026-11-20: “Quran aufbewahrt” + “Quran verfälscht” — add() on compilation explainer (now appends
      an evidence card for explainers), Ibn Masʿūd 113–114, 37:12; NEW in Preservation › Common claims: sūra 33 “200 verses”, Ubayy's muṣḥaf,
      ʿĀʾisha's muṣḥaf/first rows, Abū al-Dardāʾ 92:3, 1,027,000 letters, al-Suyūṭī ʿurub.) NEXT batch: “leseart qirat” (9) → aḥruf/qirāʾāt
      cards; then “Koran Scheinargumente 1” (50) in themed batches of ~8; then “koranscheinargumente 2” (17).
      Qurʾān AV batch 2 DONE (quran-av2: DR aḥruf + qirāʾāt explainers → debates with all 10 AV qirāʾ/aḥruf channels: Prophet's authorisation
      ḥadīth, sabʿa = 7, Ibn Taymiyya on the six aḥruf, shādhdh (540/177/20), verse examples 2:10 3:146 28:48 2:165 3:188 66:12 6:55,
      Ḥafṣ/Shuʿba, Ibn Mujāhid, tawātur.) NEXT: “Koran Scheinargumente 1” in themed batches:
      (a) science: himmel-oder-erde, tage, paare, berge-pflöcke, perlen-korallen, biene, sperma-in-rippen, sternschnuppen, 15:22, adam-furz;
      (b) war: kriegsverse, schwert-vers, allah-täuscht-zum-krieg, selbstopferung(+musa); (c) law: 65:4 ×3, 4:34, muttah, steinigung, heiraten,
      esel, erbschaft, 2:106, 6:55; (d) theology: allah-betet, großvater, seele, vielleicht, oder, weiß-nicht-prüft, täuscht, betrügt,
      erniedrigung, verzeihung; (e) Christ/history: jesus-tot, maria-gott, jesus-gott, stunde, pharao-kreuzigt, ezra, samiri, römer, al-aqsa,
      khidr, ubayy-vater, listenschmied, unterwäsche-beute.
      Qurʾān AV batch 3 DONE (quran-av3, science: add() pairs + 86:5–7; NEW mountains/pegs, pearls 55:22, bees 16:69, shooting stars 67:5,
      15:22, bones/flesh 23:14, moon's light, moon landing, ladder 6:35, Ādam's names 2:31.)
      !! add() RULE: target the ORIGINAL topic() key (before MOVES), and forum threads are children of their folder node — the add() in
      quran-av1/av3 and hadith-block8 now handles both (exact key OR folder child) and explainers. Verify each add() by a unique phrase.
      Qurʾān AV batch 4 DONE (quran-av4, war: NEW sword-verse abrogation (Ibn Taymiyya, Ṭabarī, Zarkashī, Bukhārī, Ibn Ḥajar), Tawba verses
      9:12/14/28, 4:89–90, 9:29 + jizya exemptions; add() 8:43–44 → creed “deceives” card; NEW 2:54/4:66 in alleged contradictions.)
      Qurʾān AV batch 5 DONE (quran-av5, law: add() 4:34 (Mālik, neck-vein ḥadīth, AD 3050), stoning (ʿUmar/Tirmidhī 1431, Aḥmad 21086),
      naskh 2:106 (al-Baghawī), inheritance ʿawl (design argument), sword-verse card (Ibn Taymiyya on debate verses); NEW 65:4 (al-Ḍaḥḥāk,
      Muslim 2631), mutʿa (Muslim 1407 etc.), 2:221 vs 5:5, donkey meat 6:145, 5:60. 6:55 already on the qirāʾāt card.)
      Qurʾān AV batch 6 DONE (quran-av6, theology: add() 4:142 → deceives; NEW creed/attributes: ṣalāh 33:56, jadd 72:3, nafs, testing 29:3;
      creed/faith: divine will & disbelief (6:148, 32:13, 6:25), 4:64 grave story; quran-language: ʿasā, “or” 37:147; contradictions: who takes
      the soul (Exodus 7), humiliation 2:61/3:112, no angel 6:8.)
      Qurʾān AV batch 7 DONE (quran-av7: add() 5:116 ← Mariolatry (Gibbon, Sale, al-Wasīṭ), ʿUzayr ← Ezra (Newby, 4 Ezra, 2 Enoch, Augustine),
      deceives ← makr 3:54 (Jer 4:10, 2 Thess 2:11); NEW mutawaffīka 3:55, 9:31/4:171, 43:61, Ubayy's 33:6.)
      Qurʾān AV batch 8 DONE (quran-av8: add() Roman prophecy ← ʿAṭiyya, Khiḍr ← 18:80 + children in Paradise (Bukhārī 7047), moon splitting ←
      Cheraman Perumal/Ibn ʿUthaymīn; NEW history: Pharaoh ṣalb 7:124, al-Sāmirī, al-Aqsa 17:1, mulūk 5:20, Dhū al-Qarnayn wall + Syriac Alexander
      (Budge p. 81); NEW prophet: red cloak 3:161.) → Averroes gap now 269 (was 350). Qurʾān categories done except PDF/image-only channels
      (himmel-oder-erde, tage, allah-täuscht-muslime, masud ×2, qirat-identisch) + prophet-saww-kleidung-waschen.
      Qurʾān AV batch 9 DONE (quran-av9, apocrypha: add() clay birds ← Infancy Gospel dating (Ehrman, Burke, Davis, Margoliouth) + Pseudo-Matthew
      (19:23–25); plagiarism ← 16:103/29:48/17:88 + Midrash ha-Gadol; NEW Solomon & the ant (Ginzberg) + carpet, Abraham in the fire (Jerome, Bede).)
      Christianity AV batch 1 DONE (christ-av1, “Islamic dilema” 16 ch: DR dilemma explainer → debate with 9 branches (general confirmation,
      3:93/5:43–68/2:44/28:49, 10:94, 6:115, 2:75/5:13/5:41/15:90, Companions, Banū Isrāʾīl, al-Rāzī/Bukhārī, scholars, DR notes kept);
      NEW Church Fathers on alteration (+ vanished quotes), lost books of the Bible.)
      Islam AV batch 1 DONE (islam-av1, sonstiges islam 3 group A: add() “I am time” ← Muslim 2246/Ibn Taymiyya; NEW foot & Hell (Ibn Taymiyya),
      shin 68:42 + form on Judgement Day, nuṭfa/Throne report.)
      Islam AV batch 2 DONE (islam-av2, group B: add() War map ← Bukhārī 25 [verified live on war/map], apostate scribe ← Nasāʾī 4067; NEW nabīdh, Āmina, Asmāʾ bint Marwān,
      one-for-two slaves, Khālid/Banū Jadhīma, ʿUmar/Umm Kulthūm, Abū Bakr pokes ʿĀʾisha, bathing together.)
      Islam AV batch 3 DONE (islam-av3, 2026-11-21, group C law/fiqh — 8 ch: add() Slavery map ← ummahāt al-awlād AD 3954/al-Khaṭṭābī/Awṭās;
      add() Cannibalism card ← 49:12/al-Ghazālī/Ibn Ḥajar al-Haytamī; add() 72 virgins ← anger/houris AD 4777 weak (Sahl ibn Muʿādh);
      NEW daughter from zinā (Ibn Taymiyya Majmūʿ 32/134 + 25:54 tafsīr), Fāṭima al-Makhzūmiyya theft/equality (Bukhārī 3475),
      children in night raids “from them” (al-ʿAwāyisha, Ibn al-Qāsim), Ayyūb 38:44 (3 weak chains), wife's voluntary fast (Numbers 30).
      Scans/PDFs: #kinder-töten-from-them (1 PDF, 96 KB).
      VISUAL & COMPLETENESS AUDIT (2026-11-21, Noel requested checking existing cards for completeness & visual polish):
      - index.html visual upgrade (2026-11-21): fixed 86× “THE VERDICT: undefined”, fixed “1 answers” grammar, added shared proofBodyHTML() visual engine (facts strips, comparison columns, numbered step chains, primary quote cards, auto-parsed structured proof cards with Turn-the-tables callout, clickable URLs, full-screen lightbox on all shots) for BOTH expanded drawers AND inline single-answer dossiers.
      - enrich-islam1 DONE (8 thin Islam cards rebuilt + 10 NOSUM verdicts filled; al-Jurjānī 5:13 & ʿAbdullāh ibn Salām folded into Islamic Dilemma).
      - enrich-other1 DONE (3 Hinduism + 6 Atheism cards rebuilt in full).
      - enrich-church1 DONE (10 Christianity Church Fathers, Paul & Atonement cards rebuilt with facts strips, quotes[], compare & steps visuals).
      - enrich-christ-practice DONE (19 German Averroes cards in christianity/practice & cross — Paradise, headcovering, women teaching in Church Fathers, Ibn Isḥāq/al-Qurṭubī — translated & visually structured by flash worker).
      - enrich-christ-jesus-de DONE (18 German Averroes cards in christianity/jesus/d-av-jesus-gewalt-su-nde — translated & visually structured by flash worker → 0 German one-liners left on the entire site!).
      - enrich-christ-jesus-dr DONE (22 thin/NOSUM English DR & IA Trinity + Jesus proof-text cards rebuilt in full).
      - enrich-islam-proofs DONE (15 Islam Proofs/Prophecies/Wetzstein/Hadith cards rebuilt via flash worker; typos fixed in Wetzstein & Bedouins genealogy).
      - enrich-christ-rest DONE (15 Christianity Bible/Paraclete/Matt 22/5:47/2:85 + final German card c-paulus-islamischer-prophet rebuilt via flash worker; duplicate Matt 22 hidden; 8 biblical verse typos fixed in seerahpro-bible-notes).
      → EXISTING SITE COMPLETENESS MILESTONE: 0 missing verdicts (was 86), 0 empty explainers (was 3), 0 German one-liners (was 38)!
      - islam-av4 DONE (2026-11-21, sonstiges islam 3 Group D unseen/medicine — 9 ch: NEW satan-touches-newborn, jinn-riding, ajwa-dates-black-seed, licking-fingers-after-eating, donkey-ibn-fulan; add() 31:34 womb/rain + Bukhārī 7142 black-people-hell; 2 PDF-only tracked: 100-und-99-barmherzigkeit, steißbein).
      - islam-av5 DONE (2026-11-21, sonstiges islam 3 Group E Qurʾān/prophecies/Injīl — 6 ch). → sonstiges islam 3 COMPLETE!
      - Wave 1 Averroes Christianity DONE (2026-11-21 via 4 parallel flash workers):
        * christ-av2-child1 (18 ch: Child marriage & abuse in Christian history, part 1)
        * christ-av3-child2 (15 cards + 2 non-text tracked: Child marriage & abuse, part 2; Luke 2:37 88→84, Justinian Digest 25.7.1.4 fixed)
        * christ-av5-contradictions (18 cards + 3 PDF-only tracked: Bible Contradictions; 6 verse/source typos fixed)
        * christ-av8-bible-science (12 cards: Scientific errors in the Bible; Cyril of Jerusalem & book numbers fixed)
      - Wave 2–3 Averroes Christianity COMPLETE (2026-11-21 via 5 parallel flash workers — ALL 500 Averroes channels now accounted for, 0 remaining text channels!):
        * christ-av4-prophet-bible (27 ch: 15 new cards + 7 add() merges onto Psalm 72, Paraclete, Matt 22, Song of Solomon, Isaiah 42, Daniel 7)
        * christ-av6-paul (13 cards under christianity/church/d-ia-paul-related; 6 epistle/Methodius fixes)
        * christ-av7-corrects-slavery (24 cards: 12 Where the Qurʾān corrects the Bible + 12 Slavery in Christianity)
        * christ-av10-endtimes-adulteress (19 ch → 2 massive multi-branch debate maps: End-times prophecy + Pericope Adulterae)
        * christ-av11-misc (26 ch: 9 new cards incl. Pharisee Dilemma, Papias, Augustine divorce, Didascalia, Lucifer, Saul, washing garment + 4 add() merges incl. mehrehe 9.9k, Isaiah 53, 6:55, Apoc of Abraham; 12 img/PDF-only tracked)
      PHASE 2 STARTED: Live Discord scans & PDF extraction (pdftotext + pdftoppm → shots/). First 8 #72-virgins scans saved in shots/72v-*.png/jpg; DR #deens-presentations 3 PDFs downloaded via Chrome UI.
      (old:) NEXT “sonstiges islam 3” groups: B Prophet ﷺ & Companions (prophet-trinkt-alkohol, mutter-halluzinationen, auftrag-frau-töten,
      wurde-befohlen-gegen-jeden-zu-kämpfen, schwarze-sklave-verkaufen, khalid-tötet-unschuldige, omar-heirat-ali-tochter, abu-bakr-schlägt-aisha,
      abdullah-ibn-said-apostat, aisha-bad-badewanne) · C law/fiqh (frau-hand-abhacken, sklaven-mütter-verkaufen, gelehrte-tochter-heiraten-nach-zina,
      kanibalismus, kinder-töten-from-them, propeht-ayoub-schlägt-frau, fasten-gelübt-huris, wut-houris) · D unseen/medicine (jinn-reiten, satan-berührt,
      finger-lecken, dattel-schwarzkümmel, schwarze-menschen-hölle, esel-ibn-fulan, steißbein, allah-wissen-mutterleib-regen) · E Qurʾān/Christ
      (jesus-injil, jesus-zu-allah-empor, römer-mehrheit, cesar-prophezeiung, ziege-isst-koran-vers, erde-in-7-tagen).
      (old:) NEXT: “sonstiges islam 3” (38) → mostly islam topics; check each against existing cards; then “(none)” (32).
      (done:) “Islamic dilema” (16) → probably Christianity › Islam vs Christianity › dilemma folder; then “sonstiges islam 3” (38), “(none)” (32).
      (done:) “Koran von apokhyrphen” (8: Infancy gospel, Pseudo-Matthew, Legend of the Jews, Apocalypse of Abraham, Abraham's fire, Solomon's carpet,
      Apocalypse of Moses/Cave of Treasures, general) → Qurʾān › Sources & borrowing (plagiarism card + new cards); then “Islamic dilema” (16),
      “sonstiges islam 3” (38), “(none)” (32), then Christianity categories.
      (old:) NEXT batch (e2) history: pharao-kreuzigt, samiri-fehler, römer-falsche-prophezeiung, masjid-al-aqsa-nicht-existiert, al-khidir-und-der-
      junge (→ Khiḍr card), prophet-saw-klaut-unterwäsche-beute, könige-zu-zeit-mose, gog-magog-mauer, alexander-der-große-mauer, mond-spaltung
      (→ moon card). (old list:) NEXT batch (e) Christ/history: jesus-tot-islam, maria-gott, allah-sagt-jesus-ist-gott, jesus-kennt-die-stunde, pharao-kreuzigt, ezra-sohn-
      gottes (→ ʿUzayr card), samiri-fehler, römer-falsche-prophezeiung, masjid-al-aqsa-nicht-existiert, al-khidir-und-der-junge (→ Khiḍr card),
      ubayy-kaab-moahmmed-vater, listenschmiedt, prophet-saw-klaut-unterwäsche-beute, sure-33… + ks2: könige-zu-zeit-mose, gog-magog,
      alexander-mauer, mond-spaltung (→ moon card), wiese… Then “Islamic dilema” (16), “sonstiges islam 3” (38), Christianity categories.
NEXT (from 2026-11-20 ~19:40): Islam has 0 German tiles. Now the 350 averroes-all channels NOT on the site, category by category, Islam first:
      “Koran Scheinargumente 1” (50) + “koranscheinargumente 2” (17) + “Quran verfälscht” (10) + “Quran aufbewahrt” (3) + “leseart qirat” (9)
      → for each channel: if an existing Qurʾān card covers it, add() a branch to that card; else a new card in islam/quran/<folder>.
      Then “Islamic dilema” (16), “sonstiges islam 3” (38), “islam wunder”, then Christianity categories (Bibel Widersprüche 21, Paulus 13,
      prophet saw in bibel 27, islam korrigiert christentum 13, bibel wiss. Fehler 12, Sklaven christentum 12, jesus endzeit 10, Kinderehe 35 …).
      (old) NEXT: remaining DE Averroes hadith tiles that still sit as German one-liners (rank.js “DE” rows):
      Hadith block 8 DONE (hadith-block8, 2026-11-20: 7 AV channels added as English branches via add() on the finished cards — 514 (mawqūf,
      Ibn Mājah 949, Bukhārī 510), expel (Khaybar/Najrān breaches), 3241 (majority in Paradise too, ʿashīr, reason list), Gabriel (Ṭabarī + Bible
      angel fear), AD 4449 (Hishām ibn Saʿd), Eve (Ibn al-Jawzī, Ibn al-Athīr, Bukhārī 1521), dream (Ibn Abī al-ʿAwjāʾ, Daniel 7:9); tiles hidden.)
      Hadith block 9 DONE (hadith-block9, 2026-11-20: last 11 AV hadith tiles → English: tharīd 3411, Ibn al-Qayyim/Ibn ʿAqīl quote, black woman
      dream 7038 (+ Athanasius, Jerome), ʿUmar & pebbles (Muslim 893), Ibn Kathīr rat, images market (Tirmidhī 2550), camels/devils (al-Khaṭṭābī),
      cannibalism (AD 3207), Kurds/jinn, Maryam wife (mawḍūʿ), AD 4457 (iḍṭirāb). → islam/hadith has 0 German tiles left.)
      (was:) BLOCK 8 = merge clean-up: AV tiles still merged as German one-liners into finished cards → fold their content properly + filter MOVES:
      frau-hund-aisha→514 card, juden-vertreiben→expel card, mehr-frauen-hölle→3241, gabriel-erwürgen→squeeze, küsst-thora→AD 4449,
      eva-hat-adam-verraten→3399, allah-swt-bart-locken→dream card. BLOCK 9: aisha-essen (tharīd), Ibn al-Qayyim quote, black woman &
      plague, ʿUmar stones, rat, images, camels from devils, cannibalism, Kurds/jinn, Maryam wife in Paradise, AD 4457.
      black woman & plague, ʿUmar stones, rat, images, Ibn al-Qayyim quote, Allah curly hair (→ dream card) — group by theme,
      check averroes-all + IA/DR for each, then the DR thin ones (kissed boy etc. already done).
      Then leftovers in islam/general → Christianity → Atheism → Other beliefs.
      “is Allah the Father”, hyena dilemma, pillars of īmān, swearing by other than Allah; then Averroes tr tiles
      (children in Hell, Dajjāl one-eyed, buried baby, talisman, moon god, creaking Throne) → full English cards.
      Then → islam/quran
      → islam/hadith → leftovers in islam/general; then Christianity, Atheism, Other. Then the other
      Islam areas (prophet, quran, hadith, creed, sects, general…) → Christianity → Atheism → Other beliefs.
Known gaps: Averroes 2 server never fully exported (read live when a topic needs it). Deenresponds has collapsed
categories (Church Fathers on Modesty, Ebionites, Refuting Trinity/Jesus in the OT, Deen's Notes…) — expand them live.
PDFs in channels are not opened (would be downloads) — list them for Noel.

## ROUND 2 (2026-11-19 night): full library from ALL Discord channels
User feedback: site had far too few topics. Goal = detailed refutation library: every channel → a tile,
forums → tile with one sub-tile per thread, variable depth. Content comes from the channels (don't invent).
Focus Islam + Christianity (Atheism + "Other beliefs" door also exist).
Pipeline:
1. Chrome tab runs `tools/discord-exporter.js` (pasted into the Discord page). It saves
   ~/Downloads/burhan-<server>.json for islamic-apologetics, deenresponds, averroes, averroes-2 (queued one after another).
2. `node tools/gen-library.js` → topics/library.js (rules in tools/rules.js; prints UNMATCHED channels → add rules).
3. Sections: tools/rules.js SECTIONS → topics/sections.js (regenerate with the one-liner in PROGRESS if rules change).
4. Hand-built maps stay; a topic with a map + Discord tiles becomes a folder whose first tile is "Debate map: …".
5. Search box in top bar indexes every tile and every "they say" line.
7. ROUND 3 (curation): user said raw tiles made no sense → every tile curated by hand into either a DEBATE (real "they say" + answer)
   or an EXPLAINER (type:'explainer' with visual pillars/steps/compare, key-point cards, evidence). Helpers: topics/curated-lib.js
   (cur.ex / cur.deb / cur.hide / cur.name). Files: curated-creed, -quran, -hadith, -proofs, -law, -general, -christianity, -misc,
   -dr-hadith, -dr-quran, -dr-christianity, -dr-rest, -media (from YouTube subtitles). tools/dump.js <prefix> shows raw source text.
   STATUS 2026-11-19 ~14:00: IA + Deenresponds fully curated → 260 topics, 80 explainers, 0 raw.
8c. RULE (user): tiles must sit in their real TOPIC (not by server), and NO duplicate cards → extend the existing card.
   Mechanism: cur.move(key,toPath) / cur.merge(key,intoKey) (queued in window.MOVES, applied in index.html after fold).
   topics/curated-remap.js re-homes all Averroes notes (106 ops, all resolved). Site: 358 topics, 0 raw.
   Averroes is being re-exported in full from a saved channel list (av 469 ch, av2 441 ch) → burhan-averroes-all.json,
   burhan-averroes-2-all.json. When they land: park burhan-averroes-full.json, regenerate, then curate + remap new tiles by topic.
8b. STATUS ~15:30: averroes-full landed (151 ch, 8 categories) → curated with cur.tr (English title/objection/answer + German original kept):
   curated-av1/2/3.js. Site: 386 topics, 0 raw. averroes-2 nearly done but listed only 30 of ~66 entries → category expansion
   still misses some categories in Averroes servers; inspect sidebar after it lands and re-export missing categories.
8. (older) NEXT: averroes-full (re-export with category fix, 159 entries) + averroes-2 → gen-library (group mode: category=folder,
   channel=source) → curate (German → English). Then PDFs: user approved downloading ~27 article/slide PDFs (skip whole books)
   via the logged-in Discord tab → ~/Downloads/burhan-media, extract with pdftotext, add to the matching tiles.
   Subtitles already in ~/Downloads/burhan-media/subs/transcripts.json (48 videos).
6. DONE: islamic-apologetics exported (120 ch, 1051 posts) → 84 tiles live (205 topics total). Next: deenresponds, averroes, averroes-2 → rerun `node tools/gen-library.js` after each lands.


Started 2026-11-18 evening. User is away; fill topics one by one, keep the site working after each.

## How content is stored
- `index.html` holds the app + the base tree (`DATA`). ʿĀʾisha / Zaynab / Ṣafiyya still live inside DATA.
- Every new topic is its own file in `topics/` and calls `topic([path…], {title,k,blurb,article:{claim,tree,sum}})`.
- Tree node: `{they, we, more:{h,p:[…],doc,quote,shots:[{src,cap}|"placeholder"],src:[…],credit}, next:[…]}`.
- Screenshots go in `shots/`. Discord channel map: `discord-sources.md`.
- Preview server: `.claude/launch.json` → `burhan` on port 5178.

## Sources the user gave (Downloads)
- `Trinitaet_Flussdiagramm.pdf` — 10 debate rounds + tu quoque (German) → topics/trinity-logic.js
- `Qua_Antwort_zerbricht (1).pdf` + `Leibniz_und_Transitivitaet (1).pdf` — Beall, *The Contradictory Christ* → topics/christology-qua.js
- `Empfangene_Autoritaet (1).pdf` — John 3:35/5:26/17:24 → topics/received-authority.js
- `preservation.pdf` — Ali Ataie, Qurʾān preservation slides → topics/quran-preservation.js (+ NT comparison in bible-preservation)

## Queue (status) — ALL DONE 2026-11-18
- [x] Trinity: logic (31 answers, 8 forks) · Christology/qua (8) · Received authority (7) — from user's PDFs
- [x] Qurʾān preservation (8) — Ataie slides + IA #the-process-of-quran-preservation, #quranic-manuscripts, #abrogation-naskh
- [x] Bible: manuscripts (4) + authorship (4) — Ataie NT slides + IA #biblical-corruption
- [x] War (7) — IA #islam-spread-by-sword, #violence-allegations, #jizyah; Averreos 2 "Gewalt bibel"
- [x] Slavery (4) — IA #islamic-slavery, #regulations-for-slaves-in-islam
- [x] Ṣafiyya + Kināna (4) — Averroes #kian-folter (German)
- [x] Atheism: first cause, objective morality, problem of evil (4 each) — IA #atheist-arguments, #religion-and-morals
- [x] Polygyny, Prophetic continuity, Qurʾān & science, Crucifixion (3 each) — topics/remaining.js, classical sources only (no Discord yet)
- [x] Final check: 19 articles, 118 answers, 0 "soon" topics, 0 JS errors

## Ideas for next round
- Deepen remaining.js topics from Discord (Deenresponds "Hadith Shubhas Refuted", IA #muhammad-ﷺ-in-the-bible, #prophecies).
- Dār al-Hudā shubuhāt need ticket access.
- Sharper scans: download original Discord attachments (ask user first).
- "Additions" (Bible) still uses the old linear format.

## 2026-11-22 · Trinity: modal-logic + Ockham argument (Noel's own)
- New card `christianity/trinity/modal-necessity` ("One person is enough: the modal argument"), file `topics/trinity-modal.js`, loaded last.
- Main node: all 7 premises, 2 interim conclusions, main conclusion (translated from Noel's German text); steps visual (6 steps) + facts grid.
- 4 replies: (1) "one-person God impossible" → burden of proof + Aquinas ST I q.32 a.1 (Trinity not knowable by reason) + Isa 45:5 / Deut 6:4; (2) Richard of St. Victor love argument → why stop at three, dependence; (3) "persons not separate" → real distinction vs modalism; (4) "Ockham is only epistemic" → two strands.
- Verified: card loads, search finds it, drawer + steps visual render, 375 px no overflow, no console errors.

## 2026-11-23 · Trinity modal argument v2 (hardened, Noel's own)
- `topics/trinity-modal.js` rebuilt. Card now has 7 replies, 13 answers, 2 forks.
- Part I (main node): hardened P1–P7 (P3 full attribute list, P4 asymmetry of subtraction A vs A+X, P7 transparent perfections vs Kripke natural kinds), IC1, IC2, main conclusion with epistemic closure; 7-step visual.
- Part II (fork "Our model avoids your argument"): Ibn Taymiyya nominalism (fī al-adhhān / fī al-khārij, alfāẓ mujmala, tu-quoque immunity) + case split with 5 sub-branches: A Thomism, B1 social Trinity (+ tamānuʿ 21:22), B2 Brower–Rea, B3 relative identity, C one subject = modalism. Steps visual of the classes + Part IV debate matrix as facts grid (7 moves → knockouts).
- Part III replies: P7/modal scepticism + triangle + quaternity reductio; love argument (Hippolytus Ref. VI.29 vs X.32, Aquinas ST I q.32 a.1 ad 2, q.20 a.1, q.37 a.1, regress, aṣ-Ṣamad); self-knowledge (De Anima III.4, Maimonides Guide I.68, Augustine DT XV.22–23); aseity a se / ab alio; revelation (Vatican I Dei Filius, John 17:3); Ockham two strands.
- Fixes vs Noel's text: "Plantinga" → Cornelius Plantinga Jr. (not Alvin); Hippolytus "S. 165" → Refutatio VI.29; dropped "Mawson 2025" (unverified) and the private Gemini notebook links; dropped the "stress test opponent conceded" line (not a source).
- Verified: all nodes in DATA, drawers + matrix render, 375 px no overflow, no console errors.

## 2026-11-24 · Jesus in the Old Testament (new folder christianity/jesus/old-testament)
Sources: Troki, Faith Strengthened (PD); Kravitz, Jewish Response to Missionaries + Know What to Answer; Halpern/Skobac, Choose Life; Discord (IA, DR, AV); The Orthodox Muslim, "Is Isaiah 53 About Jesus?" (16 screenshots → shots/isa53-oma-01..16.webp). Digests + transcripts in ~/Downloads/burhan-media/jesus-im-at/.
- New infra: `window.AFTER` hook in index.html (patch final tree), `topics/otj-lib.js` (cr/N/card/mount/enhance; enhance also handles explainer cards), `tools/otj-test.js` (structure check). Credit line now says "Source / Open source" for non-Discord links.
- New cards (otj-isaiah53, otj-messiah, otj-psalms, otj-covenant, otj-method, otj-isaiah53-oma): Isaiah 53 (14 branches + verse-by-verse walk with screenshots), Who is the Messiah, Daniel 9, Micah 5:2, Genesis 49:10, Jeremiah 23:5, Psalm 110, Psalm 2, Psalm 45, Psalm 16:10, Psalm 40/Heb 10, Zechariah 9:9, Matthew's fulfilment formula, Isaiah 61/Luke 4, Psalm 8/Heb 2, Gen 22:18, 1 Cor 10:4, Blood atonement, Jeremiah 31:31, Torah eternal, How Jesus is read into the Hebrew Bible.
- Enhanced existing: Isaiah 7:14, Isaiah 9:6, Psalm 22, Zechariah 12:10, Genesis 3:15, Genesis 1:26, Son of Man (Daniel 7). Mounted into the folder: those + Isaiah 53 Islamic reading, double standard, 30 silver, phantom prophecies, Trinity in the OT folder.
- Slips fixed: Daniel 7 weeks = 49 (not 52), Deut 30:15, Ps 51:17, Hebrews follows LXX (not "mistranslation"), Nazareth argument-from-silence dropped, article's "Isaiah 29:6" → 26:9, "Isaiah 45" → 45:14.
- Open: Singer lectures (Let's Get Biblical) transcribing → add as branches (esp. Daniel 9, Micah 5, Psalm 110, Isaiah 53, Zechariah 12:10, Trinity). Proverbs 30:4 has no source yet.

## 2026-11-25 — Avereos' Server (Avereos 4, avereos 3) → Burhān, auf Deutsch (Wunsch von Avereos)
- Export: 819 Kanäle (Avereos 4: 475, avereos 3: 344) per UI-Export im eingebauten Browser. Regeln von Avereos: nur starke Texte (ältere/schwächere weglassen), PDFs nur, wenn sicher in seinem RELEASE-Projekt vorhanden. Kartentexte auf Deutsch.
- NEU `islam/hadith/unseen/hahn-unter-dem-thron` (topics/2026-11-25-hahn-unter-dem-thron.js): Hahn-unter-dem-Thron-Bericht ḍaʿīf/maʿlūl – Tafarrud Isḥāq b. Manṣūr, Isrāʾīl → Ibrāhīm b. al-Faḍl (matrūk) statt „Muʿāwiya“, iḍṭirāb Hahn/Engel. Quelle: Avereos' Belegmappe (Teil 1+2), Kanal #thron-han-huhn.
- Checks: node --check OK; card-test bad: 0.
- avereos 3 · Block 1 (topics/2026-11-25-a3-block1.js): NEU Toter durch Gebet der Mutter erweckt (ḍaʿīf), „Zwei Verhüllungen: Mann und Grab“ (munkar), Abū Jahl schlägt Fāṭima (mawḍūʿ), ʿUmar berührt Glied im Gebet (schwache Ketten), Vogel-Hadith/ʿAlī (verworfen); ERWEITERT „Forced marriage“ (Schweigen der Jungfrau). Korrigiert: Ibn Ǧurayǧ = ʿAbd al-Malik, ṯiqa – falsche Schwach-Einstufung der Vorlage weggelassen.
- avereos 3 · Block 2 (topics/2026-11-25-a3-block2.js): ERWEITERT „Lā ʿAdwā“ (Abū Hurayra bestreitet, Muslim 2221a; Ṯaqīf-Leprakranker Muslim 2231); NEU Hārūt & Mārūt (Kaʿb al-Aḥbār, Zuhayr-Fehler), „Muhammad wie Joseph Smith“, „Bekannte Sprüche, die keine sicheren Hadithe sind“ (firāsa, süß, Speichel, Herz fasst Allah, China). Kaiser/Chosrau und Aorta schon vorhanden → nicht doppelt.
- Volllade-Test aller 145 Loader-Dateien: 0 Fehler, alle enhance-Titel gefunden.
- avereos 3 · Block 3 (topics/2026-11-25-a3-block3.js): ERWEITERT „ʿĀʾisha cleaning the Prophet's ﷺ garment“ (Gast/Dienerin, Muslim 288/290), „How the Qurʾān was compiled“ (Tawba 9:128–129, Abū Ḫuzayma), eigene Sammelkarte schwacher Sprüche (+Spinnen, „sei nicht der Fünfte“, „alle tot außer Gelehrte“); NEU Allahs ḥaqw (Kettenvergleich 3 vs. 6+; Offb 19:16), „Kette über Felsen“ (Engelsflügel; Bibel-Stimme), Sklavenheirat ohne Erlaubnis (Ketten schwach). Banū Qurayẓa schon vorhanden (dort Saʿd korrekt als Muslim; Vorlage nannte ihn „Jude“ – nicht übernommen). Körperteile-Gottes-Kanäle (#nase usw.) kommen gesammelt in einen späteren Block.
- avereos 3 · Block 4 (topics/2026-11-25-a3-block4.js): NEU Banū an-Naḍīr & Ḫaybar (Vertrag, Mühlstein-Plan, 10-Tage-Frist), Frau der Qurayẓa (Abū Dāwūd 2671, Mord an Maḥmūd ibn Maslama – Vorlage schrieb „Mahmud ibn Salama“, korrigiert), Gefangenenaustausch (Muslim 1641), Schwarzer Stein (Tirmiḏī 877/959, Ibn Ḫuzayma 2734; ehrlich ergänzt: Tirmiḏī nennt 877 ḥasan ṣaḥīḥ; Jes 6:6–7); ERWEITERT „Ḥadīth written in the first century“ (Muslim 3004 + Erlaubnis), „If I were to order anyone to prostrate…“ (Eiter- und Kamelsattel-Fassungen schwach).
- avereos 3 · Block 5 (topics/2026-11-25-a3-block5.js): NEU Māriyas Verwandter (Muslim 2771), Adam „nach Seinem Bild“ (Ibn Bāz), Offenbarung wie Glockenklang (Bukhārī 2; 1 Sam 19:23–24), 5:14 Feindschaft unter Christen, 4:117 weibliche Götter, 4:139 vs 63:8, 41:11 vs 21:30, „kein Beschützer außer Allah“ vs Engel; ERWEITERT Niederwerfungs-Karte (Kamelsattel: Ibn ʿUṯaymīn, al-Mubārakfūrī, Layṯ), „Were the ḥadīth written 200 years later?“ (Ṣaḥīfa Hammām; Graham, Beeston, Singh). Die „Urknall“-Deutung der Vorlage zu 21:30/41:11 nicht übernommen (nur die Textauflösung).
- avereos 3 · Block 6 (topics/2026-11-25-a3-block6.js): NEU „Bibelstellen, die Spötter übersehen“ (Schwur unter die Hüfte, Jesaja nackt, Kot, heiliger Kuss), Johannes der Täufer vs Lk 13:33, David/Absalom (2 Sam 12:11–12), Satan bietet Jesus die Welt an; ERWEITERT „3:55: will Christians always dominate?“ (Ṭanṭāwī, Mawdūdī, Ibn-ʿAbbās-Bericht), „Don't greet Jews and Christians first“ (christlicher Umgang mit Häretikern, 1 Kor 5:11).
- avereos 3 · Block 7 (topics/2026-11-25-a3-block7.js): NEU Uzza & Nadab/Abihu, Jeftas Tochter, „Taqiyya: David stellt sich wahnsinnig“; ERWEITERT „Bibelstellen, die Spötter übersehen“ (Jes 7:20), Makhzūmiyya-Karte (Diebstahl Ex 21–22; Vorlage nannte Menschenraub „Ex 22:16“ → korrigiert auf Ex 21:16), „Allah is the best of deceivers“ (1 Kön 22 Lügengeist, Chrysostomus „guter Trug“). #schoß (private Notizen) und #paulus-lutscht (zu schwach) bewusst nicht übernommen.
- avereos 3 · Block 8 (topics/2026-11-25-a3-block8.js): NEU Jericho-Bann (Jos 6:21–26), Tyrus/Hesekiel 26 (+ Hes 29:18, Josephus), David „nach Gottes Herzen“ vs 1 Sam 27 Raubzüge, 1 Kön 13 lügender Prophet (+ Hes 14:9); ERWEITERT Volkszählungs-Karte (70.000 Tote, Ellicott), „Bukhārī 5038“ (vergessene Sure, Ibn Ḥaǧar, Bukhārī 6440), „Satan bietet Jesus die Welt an“ (Gregor, Theophylakt). Korrigiert: Tyrus-Belagerung nicht „babylonische Chroniken“, sondern tyrische Annalen bei Josephus; „wenn ein Prophet lügt, lügt Gott“ → Hes 14:9 spricht vom betörten Propheten; Jericho „kämpfte nicht“ → Jos 24:11 ehrlich ergänzt. #alle-menschen-lügner, #taqiya (doppelt), #kein-frieden weggelassen.
- avereos 3 · Block 9 (topics/2026-11-25-a3-block9.js): NEU Backofen-Ḥadīṯ (Tirmiḏī 1160, Einzelweg Qays ibn Ṭalq, Urteil ehrlich geteilt), zwölfjähriger Jesus im Tempel (Lk 2:48.50; Origenes, Kyrill), Ananias & Saphira (Apg 5), „Gott essen“ (Eucharistie, Väter); ERWEITERT „Mark 10:18“ (agathos/kalos, Mk 10:20–21, Origenes, Clem. Hom. 18, Tertullian, Ephräm), „Does Islam allow cannibalism?“ (Jer 19:9, Lev 26:29, Dtn 28:53, Klgl 4:10), Divine-Council-Karte (1 Clem 11 zu Gen 19). Korrigiert: Irenäus 1.20.2/Hippolyt Buch 5 referieren gnostische Lesarten (nicht eigene Auslegung); Chrysostomus-Zitat stammt aus De proditione Judae 1.6, nicht Mt-Homilie 82; Transsubstantiation: 4. Lateran 1215 / Trient 13. Sitzung, kein „Zweites Konzil von Trient“; Saphira log ausdrücklich (Apg 5:8) – Korban-Spekulation nicht übernommen. #christen-können-nicht-sündigen weggelassen.
- avereos 3 · Block 10 (topics/2026-11-25-a3-block10.js): NEU Johannes fällt zweimal vor dem Engel (Offb 19:10; 22:8–9; Verfasserfrage ehrlich), Gewalt gegen Kinder (Ps 137:9, Jes 13:16, 2 Kön 2:23–24); ERWEITERT „Daniel 7 & inferring the Trinity“ (Vollmacht gegeben, pelaḥ auch 7:27; ehrlich: pelaḥ auch für Götterdienst in Dan 3), „Bibelstellen, die Spötter übersehen“ (Hes 23:20 mit Hieronymus/Lapide/Steinsaltz; Ehud, Simson). #christen-tun-wille-gott schon auf der Spr-16:4-Karte (Röm 9) → nicht doppelt.
- avereos 3 · Block 11 (topics/2026-11-25-a3-block11.js): nur ERWEITERT – „Gewalt gegen Kinder“ (Hes 9:5–6), „Numbers 31“ (V. 17 widerlegt Unreinheits-Ausrede; Ellicott, Poole, Chizkuni/Jevamot 60b, HaKtav VehaKabbala; Vorlage „Jesus bekommt 32 Mädchen“ → korrigiert: 32 als Abgabe des HERRN an den Priester Eleasar, Num 31:40–41; Spekulation über Menschenopfer nicht übernommen), „Pearls before swine“ (Phil 3:2, 1 Kor 16:22 mit Chrysostomus), „Disciplining children“ (Spr 20:30, Sir 30:12, Apost. Konst. IV, Augustinus, Aquin II-II 65.2). Weggelassen: #david-tötet-raubzüge (doppelt), #dämonen-vertreiben-geruch (Tobit-Karte existiert), #hundert-fache (Mk 10:30 widerspricht der Prämisse), #christ-soll-antworten-fragen.
- avereos 3 · Block 12 (topics/2026-11-25-a3-block12.js): NEU „Ganze Städte vernichtet: kollektive Strafe“ (Muslim 2880, Ibn Māǧa 4009, Q 6:131, 7:5, Bukhārī 7108; Gegenprobe 1 Sam 15:3, Augustinus zu ungetauften Kindern), Satyrn (Jes 13:21, Hieronymus Vita Pauli 8); ERWEITERT Spr-16:4-Karte (Amos 3:6, Chrysostomus, Johannes von Damaskus), Mk 10:18 (rhetorisches Ziel, Mt 11:19), Joh 17:3 (1 Joh 5:20 + 2 Joh 7 als Gegenbeispiel zur „nächstes Nomen“-Regel), Tempel-Karte (Lk 2:52, Kol 2:3), Clay-birds-Karte (Väter zu Jannes & Jambres). Korrigiert: Halbmensch-halb-Esel-Wesen stammt nicht aus Athanasius' Antonius-Vita, sondern aus Hieronymus' Leben des Paulus → nur Hieronymus übernommen; Basilius-Jesajakommentar als umstritten markiert. #schritte-gehen für die Körperteile-Karte vorgemerkt; #kirchenväter (Origenes-Zusammenfassung ohne Zitat) weggelassen.
- avereos 3 · Block 13 (topics/2026-11-25-a3-block13.js): NEU Hades unter der Erde (Tertullian De anima 55, Hippolyt, Clemens Strom. 6.6), Heilung durch Speichel/Schatten/Schweißtücher (Joh 9, Mk 7:33, Apg 5:15, 19:11–12; Origenes, Chrysostomus), Joh 4:22 „wir beten an, was wir kennen“ (Chrysostomus, Kyrill, Theodor), „keiner größer als Johannes“ (Lk 7:28), Verbrennen als Strafe (Lev 20:14; 21:9; + Gen 38:24); ERWEITERT „No compulsion in religion“ (Lk 14:23, Augustinus Predigt 112, Tertullian Scorpiace 2), seltsame Bibelstellen (Vorhäute 1 Sam 18). Korrigiert: Petrus' Schatten steht in Apg 5:15 (nicht 5:16–17); „Rotze-Tuch“ nicht übernommen – soudarion = Schweißtuch, belegt mit „von seinem Körper“ (19:12); MT 200 vs. LXX/2 Sam 3:14 100 Vorhäute vermerkt. #juden-christen-erste-christen und #keine-langen-haare weggelassen.
- avereos 3 · Block 14 (topics/2026-11-25-a3-block14.js): NEU „Du allein bist der HERR“ (Neh 9:6, Dilemma Vater/Wesen/alle drei); ERWEITERT Psalm 45 (Hebr 1:9 „dein Gott hat dich gesalbt“, Chrysostomus Hom. 3), „Crucifixion“ (2 Kön 7:6 – Gott lässt ein nicht vorhandenes Heer hören; zu Q 4:157), Mk 10:18 („Quelle der Güte“-Deutung), Joh 14:28 (Tertullian Prax. 9, Irenäus 2.28.8), Joh 8:58 (Apg 26:29), Mt 11:27 („und wem der Sohn es offenbaren will“). Nicht übernommen: angebliche Swinburne-Aussage zu Markus (nicht belegt), Barrett-Zitat (nicht prüfbar). Weggelassen/doppelt: #tötungsbefehle-allgemein, #jesus-tut-gottes-werke-agent, #juden-missverständnisse, Ignatius Magn. 9.
- avereos 3 · Block 15 (topics/2026-11-25-a3-block15.js): NEU „Geteilte Titel beweisen keine Gottheit“ (Retter, König der Könige, Erster und Letzter + Offb 1:17–18, Elohim für Mose/Richter/Samuels Geist/Satan, Licht der Welt Mt 5:14, Joh 14:1 vs 2 Chr 20:20); ERWEITERT Mk 2 (Gebet des Nabonid 4Q242), latreuō/proskyneō (Offb 4–5, 3:12), kyrios (Mt 7:21 „Herr, Herr“). Korrigiert: „König der Könige“ in Esra 7:12 ist Artaxerxes, nicht Nebukadnezar; Totenbeschwörerin von En-Dor = 1 Sam 28:13 (nicht 21:16). Nicht übernommen: #malechi-3-1, #taufeformel (Pauschalaussage „kein früher Ausleger trinitarisch“ unhaltbar), #daniel-7-menschensohn (schon Block 10).
- avereos 3 · Block 16 (topics/2026-11-25-a3-block16.js): NEU „Gott ist kein Mensch“ (Belegkarte Num 23:19, Hos 11:9, Mal 3:6, Ex 33:20, 1 Tim 6:16 …), „Darum hat ihn Gott erhöht“ (Phil 2:9; Offb 4:11 vs 5:9.12), Spr 8:22 (ektisen/qanani; Arianer; Weisheit weiblich; Tora nach Bereschit Rabba 1:1; 8:2), 1 Kor 6:1–6 (keine ungläubigen Richter); ERWEITERT Micha 5:2 (ʿolam = Vorzeit), Mk 13:32 (Subjekt-Problem, Agnoeten: Gregor I., Johannes von Damaskus, Hl. Offizium 1918; Reihenfolge Engel–Sohn, 2 Sam 14:20), ʿĀʾisha-Gewand (Lev 15:16–17). Nicht übernommen: Ibn-ʿAbbās/Abū-Hurayra-Notizen zum Samen (Quellenangaben in der Vorlage leer), #offenbarunf-13-geschlachtet, #bibel-nicht-selber-auslegen.
- avereos 3 · Nachtrag 1 (topics/2026-11-25-a3-nachtrag1.js), auf Wunsch von Avereos früher Weggelassenes gestärkt: Mt-28:19-Karte (Didache 9.5 „auf den Namen des Herrn“, Did 9.2 „dein Knecht“, 1 Kor 1:13, Röm 6:3, Gal 3:27; Justin 1 Apol 13/61: drei Namen ≠ Wesensgleichheit); NEU 1 Joh 3:9 vs 1:8 („kann nicht sündigen“), lange Haare 1 Kor 11:14 vs Nasiräer (Num 6:5, Simson, Samuel; Augustinus De opere monachorum 31); ERWEITERT „Isaiah 40 and Malachi 3:1“ („vor mir“ → „vor dir“ in Mk 1:2/Mt 11:10, ehrlich mit Ex 23:20), „Torah dilemma“ (Apg 21:20–24, Gal 2:11–14, Ebioniten Irenäus 1.26.2). Hundertfach-Thema steht schon auf den Paradies-Karten (Irenäus 5.33).
- avereos 3 · Block 17 (topics/2026-11-25-a3-block17.js): NEU jüdischer Monotheismus zur Zeit Jesu (Josephus Ap. 2.190–193, Ant. 8.343; Philo Dek. 65; 1QS 11), „Du weißt alles“ (Joh 16:30; 21:17; 1 Joh 2:20; 2 Kön 5:26); ERWEITERT „Gott ist kein Mensch“ (Chalkedon), Mk 13:32 (oida in 13:33.35, Gleichnis, Heiliger Geist fehlt), Joh 14:28-Karte (Ignatius Trall. 9: der Vater weckte ihn auf), Jizyah (Röm 13:6–7 Van Dyck al-ǧizya, Dtn 20:10–11, Jos 16:10, Apost. Konst. 7.16), proskyneō (1 Chr 29:20 u. a.), Mk 14:61–64 (Anklage: König), Joh 5:18 (Antwort V. 19–30). Korrigiert: „Johannes 1:20“ → 1 Joh 2:20, Lesarten panta/pantes ehrlich vermerkt; SEP-Zitat nicht wörtlich übernommen, sondern als Verweis auf Tuggys Artikel.
- avereos 3 · Block 18 (topics/2026-11-25-a3-block18.js, 20 Kanäle): NEU Phil 2:6 morphē, „Bild/Abdruck“ (Kol 1:15, Hebr 1:3, Ignatius Magn. 5.2), Kol 1:15/Offb 3:14 „Erstgeborener/Anfang“, Röm 9:5 (Interpunktion, 2 Kor 11:31), Präexistenz kein Gottesbeweis (Eph 1:4, Röm 8:30, Jer 1:5, 1 Petr 1:20, Offb 13:8 – damit #offenbarunf-13-geschlachtet eingebaut), Spr 30:4 (LXX „seine Kinder“), nichtchalkedonische Christen unter Muslimen (Michael der Syrer, Patriarch Benjamin, Ischoʿjahb III. – Belege ergänzt); ERWEITERT Ps 45 (Hebr 1:10–12), Sach 2 (Botenformel, Sach 1:12–13, Kidduschin 41b), Naskh (1 Sam 2:30, Hes 46:6 vs Num 28:11, Schabbat 13b), Joh 14:9 (Clemens-Agraphon Strom. 1.19.94), „Jesus will judge“ (Mt 19:28, 1 Kor 6:2–3), Mk 6 (Petrus, Mt 10:8, Joh 14:12), Jes 40/Mal 3:1 (Ex 7:17), 1 Kor 11:3 (Chrysostomus-Karte), Eucharistie (Didache 9–10, Lietzmann, McGowan). Korrigiert/nicht übernommen: Röm-9:5-Argument „ungewöhnliche Wortfolge“ (spricht eher für die Gegenseite), Hebr 5:7 als Ps-102-Zitat (ist es nicht), „Mt 25“ → Mt 10:5–8; Judas 5: Vorlage nennt Vaticanus/P72 falsch (B liest „Jesus“, P72 „Gott Christus“) – bestehende Karte deckt das Thema richtig ab; Zitate Niederwimmer/Crossan/Marcus nicht wörtlich übernommen.
- avereos 3 · Block 19 (topics/2026-11-25-a3-block19.js, 20 Kanäle): NEU Schma + Mk 12:28–34, 1 Kor 8:6, „heute gezeugt“ (Ps 2:7, Hebr 1:5, Apg 13:33 ergänzt), mündliche Überlieferung im Christentum (Eusebius KG 2.15, Papias 3.39.4), Kol 2:9 „Fülle“ (Eph 3:19, Kol 1:19), Mose und die Scheidung (Mk 10:5 vs Dtn 4:5.14; 5:22), David/Schaubrote (allein laut 1 Sam 21; Abjatar statt Ahimelech, Mk 2:26 – ergänzt), Mt 7:22 Heilsgewissheit; ERWEITERT Injīl (Lk 5:1, Joh 12:49–50 …), Weinberg-Karte (Q 48:29 ~ Mk 4:26–32; Mt 25 ~ Muslim 2569), Q-Karte, Joh 1:1 (Joh 1:3 + Adam), Crucifixion (Grablegung umstritten – Petronius, Philo, Ehrman; ehrlich Josephus Bell. 4.317, Jehochanan), Mk 13:32 (Quelle vs Subjekt), Judas/Jeremia (Eusebius Dem. Ev. 10.4), 1 Kön 13 (1 Kön 20:35–37), seltsame Bibelstellen (1 Sam 5–6, Vulgata, Beda), Joh 10:30 (1 Kor 3:8), Joh 20:28 (Theodor von Mopsuestia, Konstantinopel II Kanon 12), Ps 45 (Hebr 1:8 „Gott ist dein Thron“). Nicht wörtlich übernommen: Moulton/Robertson-Zuschreibung, Tacitus (kein passender Beleg in der Vorlage).
