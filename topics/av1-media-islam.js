/* Averroes Media & PDF Batch 1 (Islam & Islamic Dilemma) — 2026-11-22.
   Integrates 7 fully extracted German Averroes PDFs + 14 rendered JPEG pages (shots/pdf3-*.jpg)
   and 14 primary-source Discord WebP scans (shots/thron-1..8.webp, shots/bukh-torah-1..6.webp):
   1. NEW: islam/quran/preservation/d-ia-common-claims/ibn-masud-mushaf (#musnaf-masud-fehlt-2-suren + #ibn-masud-versteckt-mansukript)
   2. NEW: islam/quran/d-ia-alleged-contradictions/heaven-or-earth-created-first (#himmel-oder-erde-zuerst-erschaffen)
   3. add(): islam/quran/preservation/d-dr-defense-of-qiraat (#quran-leseart-qirat-identisch-mehrere-qurane: qirat-ok2 + qirat-doc)
   4. add(): islam/quran/d-dr-how-many-days-for-creation (#wieviele-tage-hat-allah-erde-erschaffen)
   5. add(): christianity/islam-vs/d-dr-islamic-dilemma (#alles: Taṣdīq ʿāmm vs. muṭlaq dossier)
   6. attachShots(): islam/general/d-av-sonstiges-islam-2/c-allahs-thron-knirchen (thron-1..8.webp)
   7. attachShots(): islam/hadith/d-dr-bukhari-preservation-of-torah (bukh-torah-1..6.webp) */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const S=(src,cap)=>({src:'shots/'+src,cap});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('av1-media-islam: no card',key); };
const attachShots=(key,shots,extraNote)=>{
  for(let i=TOPICS.length-1;i>=0;i--){
    const t=TOPICS[i], k=t.path.join('/'); let a=null;
    if(k===key) a=t.node.article;
    else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; }
    if(!a) continue;
    if(a.tree && a.tree.more){
      a.tree.more.shots=(a.tree.more.shots||[]).concat(shots);
      if(extraNote) a.tree.more.p=[].concat(a.tree.more.p||[],extraNote);
      return;
    }
    if(a.type==='explainer' && Array.isArray(a.cards) && a.cards.length){
      const c=a.cards[0]; c.more=c.more||{};
      c.more.shots=(c.more.shots||[]).concat(shots);
      if(extraNote) c.p=[].concat(c.p||[],extraNote);
      return;
    }
  }
  console.warn('av1-media-islam: no card for shots',key);
};

/* ============================================================================
   1. NEW: islam/quran/preservation/d-ia-common-claims/ibn-masud-mushaf
      Merges masud-2suren (#musnaf-masud-fehlt-2-suren) + masud-versteckt (#ibn-masud-versteckt-mansukript)
   ============================================================================ */
const M2S=AV('musnaf-masud-fehlt-2-suren','1286271658104979537');
const MVS=AV('ibn-masud-versteckt-mansukript','1352334987189289073');
card('islam/quran/preservation/d-ia-common-claims/ibn-masud-mushaf',{
 title:"Ibn Masʿūd's muṣḥaf: Sūras 113–114 & hiding his codex",
 k:"Ibn Masʿūd · Muʿawwidhatayn · ʿUthmān",
 blurb:"Six classical refutations of the 'missing two sūras' claim plus the procedural seniority behind his refusal to surrender his personal copy.",
 claim:"ʿAbdullāh ibn Masʿūd omitted Sūras 113–114 (and al-Fātiḥa) from his muṣḥaf as non-Qurʾān and hid his manuscript from ʿUthmān's committee.",
 tree:N(M2S,
  "Reports in Musnad Aḥmad and al-Ṭabarānī claim Ibn Masʿūd removed al-Falaq (113) and al-Nās (114) from his personal muṣḥaf, saying 'They are not from the Book of Allah,' and even omitted al-Fātiḥa.",
  "Six independent levels of classical Islamic criticism dismantle the claim of a 'missing-sūra' textual gap: the explicit rejection chains run through mudallis narrators with ʿanʿana (graded weak by Ibn Ḥazm and 'bāṭil' by al-Nawawī); even granting the reports, al-Bāqillānī, the ruqya context, and al-Fātiḥa's deliberate omission for brevity show personal codex choice ≠ rejecting revelation—and Ibn Masʿūd's own mutawātir qirāʾa preserves all three sūras.",
  "Six levels of classical refutation (al-Muʿawwidhatayn & al-Fātiḥa)",
  ["1. Isnād critique (mudallis narrators): The explicit versions saying Ibn Masʿūd deleted them run through al-Aʿmash and Abū Isḥāq al-Subayʿī—both classified as mudallis (concealers of chain defects) and transmitting here using the ambiguous ʿanʿana ('from') formula. Consequently, Ibn Ḥazm graded the report weak (ḍaʿīf) and al-Nawawī declared it 'bāṭil, laysa bi-ṣaḥīḥ ʿanhu' ('false, not authentic from him'), leaving the central claim isnād-critically unstable.",
   "2. al-Bāqillānī's codex interpretation: The theologian al-Bāqillānī argued that Ibn Masʿūd did not deny their status as revelation, but only their inclusion in the written physical codex (muṣḥaf)—since the phrase kitāb Allāh ('Book of Allah') can refer to the physical bound volume. Ibn Ḥajar al-ʿAsqalānī expressly commends this as 'a good interpretation' (Fatḥ al-Bārī 8/742).",
   "3. The ruqya explanation & zero Companion backing: In one narration Ibn Masʿūd explained: 'The Prophet commanded seeking refuge with them'—viewing them as protective supplicatory recitation (ruqya). Crucially, not a single other Companion ever followed him in any supposed exclusion.",
   "4. The al-Fātiḥa parallel (Abū Bakr al-Anbārī): Often overlooked, a report preserved by Abū Bakr al-Anbārī (cited in al-Qurṭubī, al-Jāmiʿ li-Aḥkām al-Qurʾān, vol. 1, p. 115) records Ibn Masʿūd being asked why he did not write al-Fātiḥa in his muṣḥaf. He answered in effect that he would have had to write it before every sūra, since every rakʿa begins with al-Fātiḥa; al-Anbārī notes he omitted it for brevity, relying on Muslims' collective preservation. Omission from a personal muṣḥaf therefore does not mean denial of revelation.",
   "5. Decisive counter-proof — Ibn Masʿūd's own qirāʾa: The mutawātir canonical readings (qirāʾāt) of ʿĀṣim ibn Abī l-Najūd, Ḥamza, al-Kisāʾī, and Khalaf all trace back through Zirr ibn Ḥubaysh directly to Ibn Masʿūd—and every one of them contains al-Fātiḥa, al-Falaq, and al-Nās. Had Ibn Masʿūd genuinely rejected them, his direct students would never have transmitted them as his Qurʾānic reading.",
   "6. Positive recognition reports: Kanz al-ʿUmmāl (ḥadīth 2743) and al-Durr al-Manthūr (5/94) preserve reports that Ibn Masʿūd recognized al-Muʿawwidhatayn as authentic, stressed their importance, recommended reciting them frequently, and emphasized al-Fātiḥa's central status—directly contradicting any claim of principled rejection."],
  ["Musnad Aḥmad; al-Ṭabarānī","al-Nawawī; Ibn Ḥazm","Ibn Ḥajar al-ʿAsqalānī, Fatḥ al-Bārī 8/742","al-Qurṭubī, al-Jāmiʿ li-Aḥkām al-Qurʾān 1/115 (citing Abū Bakr al-Anbārī)","Kanz al-ʿUmmāl 2743; al-Durr al-Manthūr 5/94"],
  [
   N(MVS,
    "Why did Ibn Masʿūd refuse to hand over his personal manuscript (the ghulūl / hiding report) if his text matched ʿUthmān's?",
    "His initial refusal was driven by wounded seniority and attachment to his personal copy—never by textual disagreement. He named zero textual corrections, Zayd ibn Thābit verified total identity with Abū Bakr's sheets, and Kitāb al-Maṣāḥif documents Ibn Masʿūd's subsequent reconciliation with ʿUthmān's compilation.",
    "Why Ibn Masʿūd refused to surrender his copy — & his reconciliation",
    ["The primary reports (al-Ḥākim & al-Tirmidhī): In al-Mustadrak (no. 2896, graded ṣaḥīḥ and confirmed by al-Dhahabī), Ibn Masʿūd refuses to surrender his personal muṣḥaf (concealing it despite the order, the context of his ghulūl remark): 'I received over seventy sūras directly from the mouth of the Messenger of Allah.' In Jāmiʿ al-Tirmidhī (no. 3104), he adds that Zayd ibn Thābit was still 'a boy with two braids' when he himself had already mastered the Qurʾān.",
     "Motivation 1 — Personal seniority, not text difference: Ibn Masʿūd was among the earliest converts and foremost Qurʾān teachers; the Prophet ﷺ himself had praised him: 'Whoever wishes to hear the Qurʾān as freshly as it was revealed, let him hear it from Ibn Umm ʿAbd' (al-Mustadrak 2893). Appointing the younger Zayd (who had led Abū Bakr's collection) while Ibn Masʿūd was stationed away in Kūfa hurt his standing—though Ibn Ḥajar (Fatḥ al-Bārī 9/13) notes his absence from Medina was a practical reason for his exclusion.",
     "Motivation 2 — Destroying personal copies: Abū Bakr's earlier collection had never demanded destroying private manuscripts. What was new under ʿUthmān was the requirement to hand over one's own deeply cherished, spiritually symbolic muṣḥaf—the real trigger for his refusal.",
     "Proof of zero textual dissent: Upon completing the standard copy, Zayd ibn Thābit testified: 'I compared the muṣḥaf with those sheets [Abū Bakr's compilation] and found no discrepancy' (Sharḥ Mushkil al-Āthār 2645). Crucially, Ibn Masʿūd did not specify a single textual correction—his objections were strictly about personnel and procedure.",
     "Corroboration & reconciliation: Ibn Kathīr notes that Ibn Masʿūd complied with ʿUthmān even on secondary fiqh rulings—such as praying four rakʿāt instead of two at Minā—declaring 'al-khilāf sharr' ('dissension is an evil'); had he differed on the Qurʾān itself, he would never have yielded in silence. Indeed, Ibn Abī Dāwūd's Kitāb al-Maṣāḥif explicitly records his eventual agreement under the chapter heading 'The Agreement of ʿAbdullāh ibn Masʿūd with the ʿUthmānic Compilation.'"],
    ["al-Ḥākim, al-Mustadrak 2893, 2896","Jāmiʿ al-Tirmidhī 3104","Ibn Ḥajar, Fatḥ al-Bārī 9/13","al-Ṭaḥāwī, Sharḥ Mushkil al-Āthār 2645","Ibn Abī Dāwūd, Kitāb al-Maṣāḥif; Ibn Kathīr"],
    [],
    {facts:[["Report Grading","Ṣaḥīḥ (Mustadrak 2896)"],["Core Trigger","Seniority & keeping personal copy"],["Textual Objections","Zero variants cited by Ibn Masʿūd"],["Outcome","Reconciled (Kitāb al-Maṣāḥif)"]],
     quotes:[
      {by:"Zayd ibn Thābit",en:"I compared the muṣḥaf with those sheets [Abū Bakr's collection] and found no discrepancy.",ref:"al-Ṭaḥāwī, Sharḥ Mushkil al-Āthār 2645"},
      {by:"ʿAbdullāh ibn Masʿūd (via Ibn Kathīr)",en:"Dissension is an evil.",ref:"On conforming to ʿUthmān's 4-rakʿa prayer at Minā"}
     ],
     shots:[
      S('pdf3-masud-versteckt-p1.jpg','Ibn Masʿūd hiding his muṣḥaf (Averroes #ibn-masud-versteckt-mansukript): Mustadrak 2896, Tirmidhī 3104 & seniority motive (p. 1).'),
      S('pdf3-masud-versteckt-p2.jpg','Zero textual dissent (Zayd in Mushkil al-Āthār 2645), Minā precedent & Kitāb al-Maṣāḥif reconciliation (p. 2).')
     ]})
  ],
  {facts:[["Explicit Chains","al-Aʿmash & Abū Isḥāq (mudallis ʿanʿana)"],["al-Nawawī Verdict","Bāṭil, not authentic from him"],["al-Fātiḥa Parallel","Omitted for brevity (al-Qurṭubī 1/115)"],["His Own Qirāʾa","ʿĀṣim, Ḥamza, al-Kisāʾī, Khalaf keep all 3"]],
   quotes:[
    {by:"Imām al-Nawawī (on the Muʿawwidhatayn rejection report)",en:"False (bāṭil), not authentic from him.",ref:"Quoted in Averroes #musnaf-masud-fehlt-2-suren"},
    {by:"Ibn Ḥajar al-ʿAsqalānī (on al-Bāqillānī's codex explanation)",en:"A good interpretation.",ref:"Fatḥ al-Bārī 8/742"}
   ],
   visual:{kind:'compare',
    left:{title:"Polemical Assumption (Fails)",items:["Treats mudallis ʿanʿana chains as sound","Equates omission from a personal codex with rejecting revelation","Ignores al-Fātiḥa's omission for brevity","Overlooks Ibn Masʿūd's own qirāʾa & reconciliation"]},
    right:{title:"Historical & Critical Reality",items:["Ibn Ḥazm & al-Nawawī reject the explicit chains","al-Bāqillānī & Ibn Ḥajar: personal codex ≠ canon","Zirr → ʿĀṣim/Ḥamza/al-Kisāʾī/Khalaf transmit 1, 113, 114","Refusal to hand over codex was procedural; reconciled in Kitāb al-Maṣāḥif"]}},
   shots:[
    S('pdf3-masud-2suren-p1.jpg','Ibn Masʿūd & al-Muʿawwidhatayn (Averroes #musnaf-masud-fehlt-2-suren): isnād critique, al-Bāqillānī, ruqya & al-Fātiḥa (p. 1).'),
    S('pdf3-masud-2suren-p2.jpg','Kanz al-ʿUmmāl 2743, al-Durr al-Manthūr 5/94 & mutawātir qirāʾāt from Ibn Masʿūd (p. 2).')
   ]}),
 sum:"The claim that Ibn Masʿūd rejected Sūras 113–114 fails on weak mudallis chains, the al-Fātiḥa brevity parallel, and his own mutawātir qirāʾa preserving all three sūras—while his initial refusal to surrender his codex was a procedural seniority dispute later resolved in Kitāb al-Maṣāḥif."});

/* ============================================================================
   2. NEW: islam/quran/d-ia-alleged-contradictions/heaven-or-earth-created-first
      From himmel-erde (#himmel-oder-erde-zuerst-erschaffen)
   ============================================================================ */
const HE=AV('himmel-oder-erde-zuerst-erschaffen','1277017334309195848');
card('islam/quran/d-ia-alleged-contradictions/heaven-or-earth-created-first',{
 title:"Heaven or earth created first? (Q 2:29, 41:9–12 vs. 79:27–33)",
 k:"Creation order · Thumma · Daḥāhā",
 blurb:"Ibn ʿAbbās (al-Bukhārī), al-Farrāʾ, Abū Ḥayyān & Ibn Kathīr: initial creation vs. subsequent spreading out (daḥāhā), and discourse-ordering thumma.",
 claim:"Qurʾān 2:29 and 41:9–12 say Allah created the earth before the heaven, whereas 79:27–30 says He built the heaven first and the earth afterward.",
 tree:N(HE,
  "Qurʾān 41:9–12 puts the earth, mountains, and nourishment before 'then (thumma) He turned to the heaven' (likewise Q 2:29), while Qurʾān 79:27–30 builds the heaven first and says 'and the earth, after that He spread it out (daḥāhā),' producing mountains and water.",
  "No contradiction exists: classical exegesis since Ibn ʿAbbās (recorded in Ṣaḥīḥ al-Bukhārī) distinguishes the earth's initial creation (Days 1–2, Q 41:9), the completion of the seven heavens (Days 3–4, Q 41:11–12), and the subsequent spreading out and furnishing of the earth with water, pasture, and anchored mountains (Days 5–6, Q 79:30–32). Qurʾān 41 groups earth-work thematically using discourse-ordering thumma (al-Farrāʾ, Abū Ḥayyān), whereas Q 79 specifies chronological sequence via daḥāhā.",
  "Ibn ʿAbbās's three-stage creation & how the days total six",
  ["The two compared passages: Qurʾān 41:9–12 states Allah created the earth in two days, set firm mountains, blessed it, and measured its sustenance 'in four days' (41:10), 'then (thumma) He turned to the heaven while it was smoke' and completed seven heavens in two days (41:11–12; cf. Q 2:29 'He created for you all that is on earth, thumma turned to the heaven'). By contrast, Qurʾān 79:27–33 describes building the heaven, raising its ceiling, darkening night and bringing out daylight, and then: 'And the earth, after that He spread it out (daḥāhā), brought forth from it its water and its pasture, and set the mountains firmly.'",
   "Ibn ʿAbbās's 3-step solution (Ṣaḥīḥ al-Bukhārī, Kitāb al-Tafsīr on Fuṣṣilat): Already asked in the 1st century why Q 79 mentions heaven before earth while Q 41 begins with earth, Ibn ʿAbbās distinguished three phases: (Days 1–2) Allah first creates the earth un-furnished (41:9); (Days 3–4) He completes the heaven as seven heavens (41:11–12); (Days 5–6) He spreads out (daḥāhā) the earth, bringing forth water, pasture, and mountains (79:30–32). An earth can already exist before its final surface furnishing.",
   "Why 41:10 says 'four days' for the earth: The four days are inclusive of the first two days—2 days initial creation + 2 days furnishing = 4 days for the earth in total, plus 2 days for the heavens = 6 days total (not 2 + 4 + 2 = 8). Under Ibn ʿAbbās's sequence, the two days of completing the heavens lie chronologically between the earth's first two days and its final two days.",
   "Why the heaven was already 'smoke' (41:11–12): Just as clay exists before a vase is shaped, raw celestial material existed as smoke (dukhān) before being fashioned into seven heavens. Qurʾān 41 does not say the smoke preceded earth; Ibn Kathīr (on 41:11) explains the smoke as water-vapor rising during the earth's creation—so it only needed to exist prior to the heavens' completion, not prior to earth."],
  ["Qurʾān 2:29; 41:9–12; 79:27–33","Ṣaḥīḥ al-Bukhārī, Kitāb al-Tafsīr (Sūra Fuṣṣilat)","Tafsīr Ibn Kathīr (on Q 41:11)"],
  [
   N(HE,
    "Doesn't Q 41:10 put mountains before 'then (thumma) He turned to the heaven' in 41:11—mustn't thumma mean chronological 'afterward'?",
    "Not necessarily: classical Arabic grammarians (al-Farrāʾ, Abū Ḥayyān) prove thumma frequently orders the speaker's discourse (tartīb al-ikhbār) rather than historical chronology, and Q 41 groups earth-work thematically while Q 79 gives explicit chronological sequence.",
    "Thematic vs. chronological order, thumma grammar & Sūra contexts",
    ["Thematic vs. chronological narration (House-building analogy): Suppose a builder spends 2 days on the foundation, 2 days on the roof, and 2 days on the interior, then summarizes: 'I worked 4 days on the house itself and 2 days on the roof.' That reports duration by topic, not step-by-step chronology. Likewise, Q 41 groups all earth-related works together (creation, mountains, sustenance, 4 days total) before turning to the heaven (2 days), while Q 79:30 ('after that He spread it out') clarifies the timeline.",
     "Grammar of thumma (al-Farrāʾ, d. 207 AH): Early Arabic philologist al-Farrāʾ illustrates discourse-ordering thumma: 'What you did today pleases me; then (thumma): what you did yesterday is even more astonishing'—where yesterday obviously preceded today. Thumma sequences statements, not events.",
     "Qurʾānic parallels for non-chronological thumma: Q 6:154 ('Then [thumma] We gave Moses the Scripture') introduces a new topic after earlier revelations without implying Moses came afterward; Q 39:6 ('He created you from one soul, then [thumma] made from it its mate') places Adam's mate in discourse after addressing descendants, discussed by classical grammarians as a non-chronological use of thumma.",
     "Abū Ḥayyān al-Andalusī (d. 745 AH) on Q 41:11: Explicitly addressing this exact objection, Abū Ḥayyān explains that thumma here orders the sequence of reports rather than creation's chronology—Allah first reports completing the earth's provisions and then reports perfecting the heavens. (With scholarly honesty: not every classical exegete explained every thumma identically, so this stands as a well-grounded classical reading, not an ad-hoc modern invention.)",
     "Different rhetorical contexts explain each Sūra's starting point: Q 41:9 opens by rebuking idolaters ('Will you disbelieve in Him who created the earth...?') who enjoy earth's provisions, so earth comes first. Q 79:10–11, 27 answers disbelievers doubting bodily resurrection ('Are you harder to create or the heaven?'), so the vast heaven comes first, followed by earth as life-support."],
    ["al-Farrāʾ (d. 207 AH) on discourse thumma","Qurʾān 6:154; 39:6","Abū Ḥayyān al-Andalusī (d. 745 AH), al-Baḥr al-Muḥīṭ (on 41:11)","Qurʾān 41:9–10 vs. 79:10–11, 27"],
    [],
    {facts:[["al-Farrāʾ (d. 207)","thumma orders speech, not just time"],["Abū Ḥayyān (d. 745)","Explicitly applies this to Q 41:11"],["Q 41 Context","Rebuke of idolatry via earth's gifts"],["Q 79 Context","Proof of resurrection via vast sky"]],
     quotes:[
      {by:"al-Farrāʾ (d. 207 AH)",en:"What you did today pleases me; then (thumma): what you did yesterday is even more astonishing.",ref:"Classical grammatical example of discourse-ordering thumma"}
     ]})
  ],
  {facts:[["Phase 1 (Days 1–2)","Earth initially created (Q 41:9)"],["Phase 2 (Days 3–4)","Seven heavens completed (Q 41:11–12)"],["Phase 3 (Days 5–6)","Earth spread out: daḥāhā (Q 79:30–32)"],["Classical Sources","Ibn ʿAbbās · al-Bukhārī · al-Farrāʾ · Abū Ḥayyān · Ibn Kathīr"]],
   visual:{kind:'steps',items:[
    ["Days 1–2: Earth Created","Initial earth formed without final surface furnishing (Q 41:9)."],
    ["Days 3–4: Seven Heavens Completed","Smoke/vapor (Ibn Kathīr) fashioned into seven heavens (Q 41:11–12)."],
    ["Days 5–6: Earth Spread Out (Daḥāhā)","Water, pasture & mountains brought forth (Q 79:30–32)—totaling 4 earth days + 2 heaven days = 6."]
   ]},
   shots:[
    S('pdf3-himmel-erde-p1.jpg','Heaven or Earth First? (Averroes #himmel-oder-erde-zuerst-erschaffen): Q 41:9–12 vs. 79:27–33, Ibn ʿAbbās 3-step timeline & smoke (p. 1).'),
    S('pdf3-himmel-erde-p2.jpg','Thematic vs. chronological order, al-Farrāʾ & Abū Ḥayyān on thumma, Sūra contexts & 5-scholar table (p. 2).')
   ]}),
 sum:"Ibn ʿAbbās (al-Bukhārī) resolves Q 2:29 and 41:9–12 with 79:27–33 across six cumulative days—earth created (2 days), heavens completed (2 days), earth spread out/daḥāhā (2 days)—with Q 41 grouping earth-work thematically via discourse-ordering thumma (al-Farrāʾ, Abū Ḥayyān)."});

/* ============================================================================
   3. add('islam/quran/preservation/d-dr-defense-of-qiraat', ...)
      From qirat-ok2 + qirat-doc (#quran-leseart-qirat-identisch-mehrere-qurane)
   ============================================================================ */
const QIR=AV('quran-leseart-qirat-identisch-mehrere-qurane','1492660879588851974');

add('islam/quran/preservation/d-dr-defense-of-qiraat',N(QIR,
 "If Ḥafṣ is the Qurʾān and Warsh is the Qurʾān, yet Ḥafṣ ≠ Warsh, then either you have multiple Qurʾāns or the exact same logical contradiction as the Christian Trinity!",
 "Ibn Taymiyya's model is logically consistent because 'is' in 'Ḥafṣ is the Qurʾān' expresses instantiation—not numerical identity. Just as two performances of Beethoven's Fifth Symphony are both 'the Fifth' without being identical to one another, multiple authorized readings instantiate one divine speech. The Trinity cannot borrow this model without collapsing into Tritheism or contradiction, because Christian orthodoxy must assert numerical identity of the one divine substance.",
 "Ibn Taymiyya's instantiation model vs. the Trinity (logical reconstruction)",
 ["Six logical premises of Ibn Taymiyya's model: (1) There is one Qurʾān—Allah's uncreated speech, a single complete text spoken by God; (2) there are multiple authorized readings (e.g., Ḥafṣ, Warsh) differing in wording and occasionally in meaning without contradicting; (3) each reading is the complete Qurʾān (not a fragment—whoever recites Ḥafṣ recites the whole Qurʾān); (4) the readings are not identical to one another (Ḥafṣ and Warsh are distinct recitations); (5) the Qurʾān is not the mere sum of all readings; (6) the 'is' in 'This reading is the Qurʾān' does not mean numerical identity, but full instantiation (realization/presentation).",
  "Answering Objection 1 ('Then there are two different Qurʾāns!'): No. There is one Qurʾān as abstract divine speech—just as there is one musical score of Beethoven's Fifth Symphony. The readings are multiple authorized realizations of that single score: none is 'the Qurʾān' exclusively, rather all are full, divinely authorized performances of the same single speech.",
  "Why the Trinity analogy fails on three grounds: (a) Instantiation produces three gods—if the Father is an instance of God and the Son is an instance of God, that yields three separate divine entities (Tritheism), just as Ḥafṣ and Warsh are distinct recitations; (b) Nicene Trinitarianism claims numerical identity of substance (Father = the one God, Son = the one God, Spirit = the one God, Father ≠ Son), creating a contradiction if '=' is standard identity—whereas Ibn Taymiyya makes no identity claim between reading and Qurʾān; (c) internal constitutive relations—Ḥafṣ and Warsh exist independently with no mutual relation, whereas in the Trinity the Son is eternally begotten of the Father and the Spirit proceeds, relations a type-instance model cannot capture."],
 ["Ibn Taymiyya on the qirāʾāt (type-instance / instantiation model)","Beethoven's Fifth Symphony score-vs-performance analogy"],
 [],
 {facts:[["Logical Relation","Instantiation, not numerical identity"],["Analogy","1 score vs. multiple performances"],["Trinity Trap","Instantiation = Tritheism; Identity = Contradiction"],["Relations","Independent readings vs. eternal procession"]],
  visual:{kind:'compare',
   left:{title:"Ibn Taymiyya's Qirāʾāt Model",items:["1 abstract type (Allah's divine speech)","Readings are instances / full realizations","Readings are independent & non-interacting","No numerical identity claimed → consistent"]},
   right:{title:"Christian Trinity (Asymmetry)",items:["1 God (a single numerical substance)","Father, Son, Spirit are Persons, not instances","Persons ARE God himself & constitutively related","Must claim substance-identity → contradiction or Tritheism"]}},
  shots:[
   S('pdf3-qirat-ok2-p1.jpg','Ibn Taymiyya’s Qirāʾāt Model (Averroes #quran-leseart-qirat-identisch-mehrere-qurane): 6 premises & Objection 1 (p. 1).'),
   S('pdf3-qirat-ok2-p2.jpg','Premise-by-premise comparison table: why Ibn Taymiyya’s model works while the Trinity analogy fails (p. 2).')
  ]}));

add('islam/quran/preservation/d-dr-defense-of-qiraat',N(QIR,
 "By Leibniz's Law (Indiscernibility of Identicals), if Warsh = Qurʾān and Ḥafṣ = Qurʾān, then Warsh = Ḥafṣ—contradiction! And even if you admit 'multiple Qurʾāns,' that concedes textual corruption.",
 "A four-layer synthesis turns the objection completely around: (1) Leibniz's Law governs identity-'is', not predication-'is'; (2) Muslims have three valid, heresy-free accounts (mereological, qualitative, or conceded compilation-plurality); (3) counting readings is wholly separate from textual integrity (all mutawātir readings are revelation); and (4) the exact moves that effortlessly resolve the Muslim case are condemned Christian heresies—while applying 'count the variants' to 'one Gospel' leaves Christianity with four books about lost ipsissima verba.",
 "Four-layer synthesis: Leibniz's Law, integrity, heresy asymmetry & Gospel reversal",
 ["Layer 1 — Equivocation on 'is': Leibniz's Law governs exclusively the 'is' of identity ('Superman is Clark Kent'—two rigid designators, one individual), never the 'is' of predication ('The rose is red' and 'the apple is red' never imply rose = apple: Fa ∧ Fb ⇏ a = b). 'Warsh is the Qurʾān' is predication/instantiation or part-whole—so the inference 'Warsh = Ḥafṣ' fails at the logical step itself. Moreover, no Islamic doctrine forces reading 'X is the Qurʾān' as identity, whereas Christian orthodoxy binds the opponent to reading 'the Father is God' as substance-identity.",
  "Layer 2 — Three legitimate, uncontroversial accounts: Even if pressed on identity, the Muslim has three valid paths: (a) Mereological (Part-Whole)—'the Qurʾān' is the totality of 7th-century Arabic revelation across all aḥruf, and each qirāʾa's 114 sūras is a part of that whole; (b) Qualitative—counting 'one Qurʾān' qualitatively as one kind/essence ('Qurʾān-ness'), the standard Islamic convention; (c) Conceded qualified plurality—if 'Qurʾān' strictly means a specific 114-sūra recension, there are multiple compiled readings in that narrow sense, which is dogmatically and textually harmless.",
  "Layer 3 — Separating counting from textual integrity (taḥrīf): The critic conflates 'How many?' with 'Is it uncorrupted?' Integrity rests on ontology, not low variant counts: every mutawātir reading is itself revelation—grounded in the aḥruf ḥadīth ('unzila l-Qurʾānu ʿalā sabʿati aḥruf' and the ʿUmar/Hishām incident in Bukhārī & Muslim) and Ibn al-Jazarī's three criteria (ṣiḥḥat al-isnād, agreement with an ʿUthmānic codex, and Arabic grammatical validity). Multiplicity within revelation is not corruption (which requires human alteration replacing an original); every canonical reading is original. Anti-slip rule for meaning-varying variants—wa-arjulakum/-kum (Q 5:6, washing vs. wiping feet), mālik/malik (Q 1:4), nunshizuhā/nunshiruhā (Q 2:259): never evade with 'they are rare'; answer on the revelation track: 'Correct—both are divinely revealed speech; you are presenting two instances of revelation, not corruption.'"],
 ["Ṣaḥīḥ al-Bukhārī & Ṣaḥīḥ Muslim (aḥruf ḥadīth; ʿUmar & Hishām)","Ibn al-Jazarī's 3 canonical criteria","Qurʾān 1:4; 2:259; 5:6","Matthew 4:23; 6:9–13 vs. Luke 11:2–4"],
 [
  N(QIR,
   "If you take the trade ('multiple Qurʾāns in one sense') or use relative identity, doesn't that put Islam and Trinitarian Christianity on equal footing?",
   "No—that is the decisive symmetry-breaker: every move that resolves the Muslim question is heresy-free in Islam, whereas Nicene dogma explicitly anathematizes those exact moves for Christians. Worse, the same variant-counting knife cuts 'one Gospel' into four books over lost ipsissima verba.",
   "Symmetry-breaker (4 heresies), Gospel reversal & three rebuttals",
   ["Layer 4 — Asymmetry of doctrinal commitments: The Muslim enjoys an overdetermined rescue—part-whole, qualitative, or qualified plurality are all orthodox and uncontroversial. By contrast, Nicene dogma walls off every parallel escape as condemned heresy: (1) Part-whole ('Father is part of God') = Partialism (heresy); (2) 'Multiple gods in a counting sense' = Tritheism (heresy); (3) Persons as modes of one = Modalism (heresy); (4) Son lesser/created = Arianism (heresy). Thus 'I'll take the trade' is completely asymmetric: the Muslim's qualified plurality is harmless, whereas the Christian's parallel concession is apostasy.",
    "The final reversal — 'One Gospel' under the same knife: Even maximal concession leaves the Qurʾān as one revealed reality whose readings are all divine speech. Turning the same 'count the variants' tool on 'one Gospel' reduces it to four human accounts of a proclamation whose exact Aramaic wording—the ipsissima verba of Jesus' preaching (Matt 4:23)—critical New Testament scholarship agrees is unpreserved (leaving only ipsissima vox, Greek redaction, and divergent texts such as the Lord's Prayer in Matt 6 vs. Luke 11).",
    "Anticipated Reply A ('X is the Qurʾān is an identity claim'): False—ordinary usage says 'I recited the Qurʾān' for a portion or 'This verse is Qurʾān' for instantiation; insisting on identity-'is' begs the question (petitio principii), and it is the Trinity ('Father is God') that requires identity-'is,' not the Qurʾān.",
    "Anticipated Reply B ('Admitting multiple Qurʾāns admits corruption'): Category error—multiplicity of revealed readings ≠ human alteration replacing an original (aḥruf ḥadīth).",
    "Anticipated Reply C ('Our relative-identity / person-essence solution is open to you too, so it's parallel'): Even granted, the asymmetry remains—Islam has multiple effortless, heresy-free accounts, whereas Trinitarians must thread one fragile technical tightrope between four anathematized heresies while constantly accused of collapsing into one of them."],
   ["Council of Nicaea / Christian heresiology (Partialism, Tritheism, Modalism, Arianism)","Critical NT scholarship on ipsissima verba vs. ipsissima vox","Matthew 4:23; Matthew 6 vs. Luke 11"],
   [],
   {quotes:[
     {by:"Synthesis Verdict (Averroes #quran-leseart-qirat-identisch-mehrere-qurane)",en:"My 'one Qurʾān' is a convention I may hold on multiple legitimate grounds and whose concession would be harmless; his 'one God' is a dogma whose only escape routes his own church has condemned as heresy.",ref:"qirat-doc (Layer 4 & Rebuttals)"}
    ]})
 ],
 {facts:[["Layer 1","Leibniz's Law ≠ predication-'is' (Fa ∧ Fb ⇏ a=b)"],["Layer 2","3 orthodox paths: part-whole, qualitative, plural"],["Layer 3","All mutawātir readings = revelation (Ibn al-Jazarī)"],["Layer 4","Christian parallels = 4 condemned heresies"]],
  shots:[
   S('pdf3-qirat-doc-p1.jpg','Four-Layer Qirāʾāt Synthesis (Averroes #quran-leseart-qirat-identisch-mehrere-qurane): Leibniz’s Law, predication vs. identity, & Layers 1–3 (p. 1).'),
   S('pdf3-qirat-doc-p2.jpg','Layer 4 symmetry-breaker (4 heresies), ipsissima verba Gospel reversal & 3 anticipated rebuttals (p. 2).')
  ]}));

/* ============================================================================
   4. add('islam/quran/d-dr-how-many-days-for-creation', ...)
      From wieviele-tage (#wieviele-tage-hat-allah-erde-erschaffen)
   ============================================================================ */
const WT=AV('wieviele-tage-hat-allah-erde-erschaffen','1283164278777581644');
add('islam/quran/d-dr-how-many-days-for-creation',N(WT,
 "Seven verses say six days, yet Q 41:9–12 adds up to 2 + 4 + 2 = 8—and calling the four days inclusive is just a modern apologetic excuse.",
 "The 'four days' in Q 41:10 are an inclusive cumulative sum containing the two days of 41:9 (2 + 2 = 4 for the earth, plus 2 for the heavens = 6). Far from a modern excuse, Ibn ʿAbbās gave this exact answer in the 1st century with a sound continuous chain in Ṣaḥīḥ al-Bukhārī, early linguists al-Mubarrad and al-Zajjāj confirmed it as ordinary Arabic grammar, and the verse itself signals a total via 'sawāʾan li-l-sāʾilīn' (al-Ḍaḥḥāk).",
 "Five inner-Islamic proofs: Ibn ʿAbbās (Bukhārī), linguists & internal wording",
 ["The arithmetic & German/English idiom: Seven verses state creation took six days (Q 7:54, 10:3, 11:7, 25:59, 32:4, 50:38, 57:4). Q 41:10's 'four days' includes 41:9's first two days—just like saying 'In two hours I reached Cologne, and in four hours I reached Hamburg,' which totals four hours, not six.",
  "1. Ibn ʿAbbās already answered this in the 1st century (Ṣaḥīḥ al-Bukhārī, Kitāb al-Tafsīr, Sūra Fuṣṣilat, vol. 6, pp. 127f.): With a continuous chain via al-Minhāl and Saʿīd ibn Jubayr, a man told Ibn ʿAbbās 'I find things in the Qurʾān that appear contradictory to me,' citing Q 41:9–11. Ibn ʿAbbās replied: 'He created the earth in two days, then the heavens in two days, then spread out the earth... in two more days. Thus the earth with all that is in it was made in four days, and the heavens in two days... Let not the Qurʾān seem contradictory to you, for all of it is from Allah.' Muslims raised and solved this ~1,300 years before modern internet critics.",
  "2. Pure Arabic philologists confirm it as standard grammar: Neither al-Mubarrad (d. 285 AH) nor al-Zajjāj (d. 311 AH) was writing anti-Christian polemics—they simply analyzed Arabic syntax. al-Mubarrad explains: 'The one and the other together in four days' (2 creation + 2 shaping = 4). al-Zajjāj explains that Tuesday and Wednesday were added to the first two days, meaning 'until four days were complete.'",
  "3. Internal marker in 41:10 ('sawāʾan li-l-sāʾilīn'): Immediately after 'in four days,' the verse adds 'equally/complete for those who ask.' Early exegete al-Ḍaḥḥāk explains this answers anyone asking how long the earth's creation took in total—explicitly marking a cumulative sum, not an extra stage.",
  "4. Authorial consistency & 5. Sequence bonus (with a chain caution): An author repeating 'six days' seven times does not miscount in the lone passage enumerating the steps. Moreover, Ibn ʿAbbās's Bukhārī report and Ibn Qutayba (d. 276 AH, Taʾwīl Mushkil al-Qurʾān, p. 47) resolve Q 79:27–30 simultaneously: 79:30 uses daḥā (to spread out), not khalaqa (to create). Methodological caution: do NOT cite the ʿIkrima weekday report in al-Ṭabarī and al-Naḥḥās, as its chain contains Abū Saʿd al-Baqqāl, who is graded weak."],
 ["Qurʾān 7:54; 10:3; 11:7; 25:59; 32:4; 50:38; 57:4; 41:9–12; 79:27–30","Ṣaḥīḥ al-Bukhārī, Kitāb al-Tafsīr (Fuṣṣilat 6/127f.)","al-Mubarrad (d. 285 AH); al-Zajjāj (d. 311 AH); al-Ḍaḥḥāk","Ibn Qutayba (d. 276 AH), Taʾwīl Mushkil al-Qurʾān, p. 47"],
 [],
 {facts:[["Six-Day Verses","7 passages (7:54; 10:3; 11:7; 25:59; 32:4; 50:38; 57:4)"],["1st-c. Answer","Ibn ʿAbbās in Bukhārī (via Saʿīd b. Jubayr)"],["Philologists","al-Mubarrad (d. 285) & al-Zajjāj (d. 311)"],["Avoid Weak Chain","Skip ʿIkrima weekday report (Abū Saʿd al-Baqqāl)"]],
  quotes:[
   {by:"ʿAbdullāh ibn ʿAbbās",en:"He created the earth in two days, then the heavens in two days, then spread out the earth in two more days. Thus the earth with all that is in it was made in four days, and the heavens in two days... Let not the Qurʾān seem contradictory to you, for all of it is from Allah.",ref:"Ṣaḥīḥ al-Bukhārī, Kitāb al-Tafsīr (Sūra Fuṣṣilat, 6/127f.)"}
  ],
  shots:[
   S('pdf3-wieviele-tage-p1.jpg','Six or Eight Creation Days? (Averroes #wieviele-tage-hat-allah-erde-erschaffen): inclusive math & Ibn ʿAbbās in Bukhārī (p. 1).'),
   S('pdf3-wieviele-tage-p2.jpg','al-Mubarrad, al-Zajjāj, al-Ḍaḥḥāk on sawāʾan li-l-sāʾilīn, Ibn Qutayba & weak-chain warning (p. 2).')
  ]}));

/* ============================================================================
   5. add('christianity/islam-vs/d-dr-islamic-dilemma', ...)
      From dilemma-alles (#alles: Taṣdīq ʿāmm vs. taṣdīq muṭlaq Tafsīr Dossier)
   ============================================================================ */
const DA=AV('alles','1520591516819521629');
add('christianity/islam-vs/d-dr-islamic-dilemma',N(DA,
 "Every 'confirming' verse in the Qurʾān (3:3; 2:41; 5:43–48; 5:68; 10:94) endorses the entire extant Torah and Gospel word for word—forcing Islam into an inescapable dilemma.",
 "The Qurʾān grants general confirmation of divine origin (taṣdīq ʿāmm)—never absolute word-for-word endorsement of extant manuscripts (taṣdīq muṭlaq). Grammatically, 'muṣaddiqan li-mā bayna yadayhi' is a circumstantial ḥāl clause, 'al-kitāb' is frequently generic, 'judge by it' verses use partitive phrasing (fīhā, fīhi) for surviving rulings like stoning, and Q 5:48 declares the Qurʾān muhaymin (guardian/criterion OVER prior books)—which is logically incompatible with assuming every word inside them is intact.",
 "Tafsīr Dossier (1/3): Taṣdīq ʿāmm vs. muṭlaq, Ḥāl Grammar & Muhaymin (5:48)",
 ["Grammatical core (Category 1 — Taṣdīq verses): The recurring formula 'muṣaddiqan li-mā bayna yadayhi' ('confirming what was before it') in Q 3:3, 2:89, 2:97, 2:101, and 'muṣaddiqan li-mā maʿakum' (2:41) is an Arabic ḥāl (circumstantial clause) affirming the earlier revelation's divine origin and shared core (tawḥīd, prophecy of Muḥammad ﷺ)—not a word-for-word certification of extant copies. On Q 2:101, 'kitāb Allāh' is generic ('nothing specific'); Ibn Kathīr notes the Medinan Jews cast aside the Torah as evidence once it corroborated Muḥammad ﷺ, turning instead to the 'Book of Āṣaf' and the magic of Hārūt and Mārūt, behaving 'as though they did not know'—i.e., concealing and denying truth. The same general confirmation of divine origin appears in 2:136; 4:136 ('the Book He sent down before'); 4:163; 87:18–19 ('scrolls of Ibrāhīm and Mūsā,' the original form); 26:196; 35:31; 46:12; 32:23; 17:2; 21:7; 23:49; 40:53–54; 9:111; and 6:154.",
  "5:48 (muhaymin — the decisive verse): 'muhayminan ʿalayhi' makes the Qurʾān the guardian, criterion, and trustworthy arbiter OVER prior scriptures. Ibn Kathīr cites a broad Salaf consensus—Ibn ʿAbbās (via ʿAlī b. Abī Ṭalḥa: 'al-Muhaymin — al-amīn ... the Qurʾān is trustworthy over every book prior to it'), ʿIkrima, Saʿīd b. Jubayr, Mujāhid, Muḥammad b. Kaʿb, ʿAṭiyya, al-Ḥasan, Qatāda, ʿAṭāʾ al-Khurāsānī, al-Suddī, and Ibn Zayd—while al-Ṭabarī states: whatever in them agrees with the Qurʾān is true, and whatever contradicts it is false. A guardian that tests prior books logically rules out absolute endorsement of every word.",
  "Category 2 ('Judge by it' verses — surviving correct rulings): In Q 5:43 ('they have the Torah, in which [fīhā] is Allah's judgment'), Medina's Jews brought two adulterers to escape stoning (rajm)—documented in Ṣaḥīḥ al-Bukhārī 6819 (also 4556, 6841) and Ṣaḥīḥ Muslim 1699a, where one hid the rajm verse with his hand until Ibn Salām forced him to lift it. Partitive 'fīhā ḥukmu llāh' means the specific surviving ruling is contained therein, not that every word is Allah's judgment (highlighting a threefold inconsistency noted in classical exegesis—attributed in the dossier to al-Ṭanṭāwī/al-Rāzī's general position: abandoning their own scripture's ruling, seeking judgment from one they called a false prophet, and then rejecting his judgment too).",
  "5:44, 5:46–47, 5:68 & 3:93–94: In 5:44 ('We sent down the Torah, in which is guidance and light'), the past tense anzalnā and Ibn Kathīr (via al-Barāʾ, Ḥudhayfa, Ibn ʿAbbās, and al-Ḥasan al-Baṣrī) situate guidance and light in the original revealed Torah (consistent with al-Ṭanṭāwī's position that this was before alteration by sinful hands). In 5:46–47, 'bimā anzala llāhu fīhi' uses partitive fīhi ('by what Allah sent down therein'); Ibn Kathīr notes ʿĪsā followed the Torah except where clarifying Israelite disputes (matching the early exegetical position attributed to Muqātil b. Sulaymān, and paralleling Jesus telling listeners to do what the Pharisees teach while condemning their hypocrisy in Matthew 23). In 5:68 (al-Ṭanṭāwī position on Jews/Christians who altered their books; note the asbāb chain weakness via unknown Muḥammad b. Abī Muḥammad, narrated only by Ibn Isḥāq), they are told to uphold what remains of Muḥammad's ﷺ announcement. In 3:93–94 (Ibn ʿAbbās, Musnad Aḥmad / Tanwīr al-Miqbās), Jacob's (Isrāʾīl's) self-imposed abstention from camel meat/milk due to sciatica (ʿirq al-nasā) was falsely claimed as Torah law; 'Bring the Torah and recite it' used surviving Torah content to silence them."],
 ["Qurʾān 3:3; 2:41; 2:89; 2:97; 2:101; 5:43–48; 5:68; 3:93–94","Ṣaḥīḥ al-Bukhārī 6819, 4556, 6841; Ṣaḥīḥ Muslim 1699a","Tafsīr Ibn Kathīr (2:101; 5:44; 5:46; 5:48); Tafsīr al-Ṭabarī (5:48)","Tanwīr al-Miqbās (3:93); Matthew 23"],
 [
  N(DA,
   "What about Q 2:85 ('believe in part of the Book'), Jesus being taught the Torah (3:48; 5:110), 6:91 ('light and guidance'), and 'ask those who read the Book' (10:94)?",
   "Categories 3–7 show that 2:85 rebukes selective moral practice (Ibn Kathīr & al-Ṭabarī link it directly to concealing Muḥammad's ﷺ description), 2:79 and 6:91 explicitly document textual fabrication alongside concealment (kitmān + taḥrīf), and 10:94 / 2:44 are rhetorical appeals to faithful believers or against hypocrisy.",
   "Tafsīr Dossier (2/3): Categories 3–7 (2:85, Jesus, Kitmān/Taḥrīf, 6:91 & 10:94)",
   ["Category 3 (Q 2:85 — selective practice, not textual endorsement): 'Do you believe in part (baʿḍ) of the Book and disbelieve in part?' addresses the Medinan tribes (Qaynuqāʿ, Naḍīr, Qurayẓa) allied with Aws and Khazraj who killed and expelled coreligionists against Torah law while ransoming captives per Torah law. Ibn Kathīr and al-Ṭabarī explain it condemns hypocritical selective application—and Ibn Kathīr adds they therefore should not be entrusted with preserving or transmitting the Torah because 'they concealed the description of the Messenger.'",
    "Category 4 (Jesus taught/confirming the Torah — 3:48, 5:110, 3:50, 61:6, 28:48–49): On 3:48 and 5:110, Ibn Kathīr glosses al-kitāb as writing/scripture, Tawrāt as the book to Mūsā, and Injīl as what was sent to ʿĪsā, noting ʿĪsā memorized both. (Methodological note: inferring that Allah taught Jesus directly because the Torah was already corrupted is a plausible apologetic deduction, not explicit classical tafsīr wording.) On 3:50 and 61:6, 'muṣaddiqan li-mā bayna yadayya mina l-Tawrāt' is again a ḥāl clause, with 61:6 specifying the announced Messenger Aḥmad. On 28:48–49 ('these two' = Torah and Qurʾān per Ibn Kathīr via Ibn ʿAbbās), a scripture containing genuine divine revelation alongside human elements still surpasses a purely human book.",
    "Category 5 (Kitmān & Taḥrīf presuppose non-pristine texts): Concealment (yaktumūna in 2:159, 3:187; al-Jalālayn, Tanwīr al-Miqbās, Ibn Kathīr: hiding stoning and Muḥammad's ﷺ description) presupposes parts were suppressed. Textual alteration is explicit in 2:79 ('write the Book with their own hands'): Ibn Kathīr cites Ibn ʿAbbās (via al-Zuhrī: 'the People of the Book altered the Book of Allah, changed it, and wrote another book with their own hands') and al-Ḍaḥḥāk. On 3:71, 4:46 ('yuḥarrifūna l-kalima ʿan mawāḍiʿihi'), and 5:13, al-Jalālayn and Ibn Kathīr cite distortion and concealment; scholar Thomas F. Michel (in translating Ibn Taymiyya's Response to the Christians) notes verbal taḥrīf occurs exactly four times (4:46; 5:13; 5:41; 2:75), read classically as either meaning-distortion (taḥrīf al-maʿnā) or textual alteration (taḥrīf al-lafẓ).",
    "Category 6 ('Light and guidance' paired with alteration — 6:91; 5:15; 5:65–66): Q 6:91 calls Moses' original revelation 'light and guidance,' then immediately indicts its custodians: 'you make it into separate sheets that you display while concealing much (tubdūnahā wa-tukhfūna kathīran).' Ibn Kathīr explains they copied the Torah onto sheets, altering and distorting it at will while claiming 'this is from Allah'; Tanwīr al-Miqbās notes concealment of Muḥammad's ﷺ description. Q 5:15 presents the Qurʾān as light exposing what they concealed, while 5:65–66 (al-Ṭanṭāwī position) points to prophecies (including Daniel and Isaiah) they would find if they upheld them.",
    "Category 7 (Rhetorical appeals — 10:94; 16:43; 21:7; 2:44; 62:5; 2:121): On 10:94 ('ask those who read the Book before you'), Ibn ʿAbbās (via al-Ṭabarī) identifies believers from the People of the Book such as ʿAbdullāh b. Salām (Ibn Zayd; cf. Mujāhid, al-Ḍaḥḥāk), and Tanwīr al-Miqbās notes the Prophet ﷺ never doubted or asked—it is hypothetical/rhetorical regarding core stories of Mūsā and Nūḥ (even as the Qurʾān corrects biblical details). Q 16:43 and 21:7 address Meccan polytheists ignorant of prior human messengers. Q 2:44 (Ibn Kathīr via ʿAbd al-Razzāq ← Maʿmar ← Qatāda, al-Suddī, Ibn Jurayj) rebukes Jewish leaders' hypocrisy in preaching prayer, fasting, and justice without practicing them (like Matt 23). Q 62:5 ('donkey carrying books') rebukes non-observance, and 2:121 ('recite it with true observance') praises obedience—alongside 2:113, 2:140, 3:65, 3:113–114, 3:184, 4:47, 9:111, 11:17, 35:31, and 57:27."],
   ["Qurʾān 2:75, 79, 85, 121, 159; 3:48, 50, 71, 187; 4:46; 5:13, 15, 41, 65–66, 110; 6:91; 10:94; 16:43; 21:7; 28:48–49; 61:6; 62:5","Tafsīr Ibn Kathīr; Tafsīr al-Ṭabarī; al-Jalālayn; Tanwīr al-Miqbās","Thomas F. Michel (on Ibn Taymiyya's Jawāb)"],
   []),
  N(DA,
   "How should a debater deploy these proofs rigorously—and which weak claims or historical caveats must be respected honestly?",
   "Follow a four-stage debate sequence starting with Q 5:48 (muhaymin) to shift the burden of proof, while honestly acknowledging early taḥrīf al-maʿnā scholarship (Camilla Adang), separating apologetic inferences from explicit tafsīr quotes, and never citing translator bracket-glosses as Qurʾānic text.",
   "Tafsīr Dossier (3/3): 4-Stage Debate Protocol & Honest Caveats",
   ["Four-stage debate protocol: (Stage 1) Always open with Q 5:48 (muhaymin / Ibn ʿAbbās 'al-amīn' / al-Ṭabarī), shifting the burden of proof onto the critic to prove taṣdīq muṭlaq rather than taṣdīq ʿāmm; (Stage 2) Disarm muṣaddiq verses (3:3, 2:41, 5:46, 3:50, 61:6) via ḥāl grammar and generic al-kitāb (2:101); (Stage 3) Clarify 'judge by it' verses (5:43–47) via partitive fīhā / fīhi and the rajm ḥadīth (Bukhārī 6819 / Muslim 1699a); (Stage 4) Deploy kitmān and taḥrīf (2:79, 6:91, 2:159, 3:187) as the decisive contradiction against pristine-preservation claims.",
    "Caveat 1 — Early Islamic scholarship on taḥrīf al-maʿnā vs. al-lafẓ: Strongest textual-corruption proofs are Q 5:48, 2:79, 6:91 (Ibn Kathīr/al-Ṭabarī), and 5:43–44. By contrast, Camilla Adang (Muslim Writers on Judaism and the Hebrew Bible: From Ibn Rabban to Ibn Hazm, Brill, Leiden, 1996, p. 251) observes that early authors largely read taḥrīf as distortion of sense (taḥrīf al-maʿnā) rather than text ('only the sense of the biblical text had been changed while the text itself remained intact. Only al-Maqdisi and Ibn Hazm believed that the text had suffered distortion... Apart from al-Tabari, the authors who held to a moderate view of tahrif felt justified in using the Bible as a historical source'). Do not overstretch maʿnā verses as blanket proof of total textual corruption; lean on 2:79, 6:91, and 5:48.",
    "Caveat 2 — Distinguishing explicit tafsīr from inferences & verification checks: Present the deduction on 3:48/5:110 (Allah teaching Jesus the Torah because it was already corrupted) candidly as an apologetic inference, not explicit tafsīr text. Likewise, specific thematic citations from al-Rāzī (on 5:43), al-Ṭanṭāwī's al-Tafsīr al-Wasīṭ (on 5:44, 5:66, 5:68), and Muqātil b. Sulaymān (on 5:47) are held as established positions requiring verbatim Arabic cross-checking against primary editions (alongside checking Bubenheim & Elyas wording on 16:43 and 29:46).",
    "Caveat 3 — Never cite translator brackets as Qurʾān: Some English translations (e.g., Dr. Ghali in 5:43/5:47) insert interpretive parentheses such as 'of which the extant Torah/Gospel is a corruption.' Always identify these as translator glosses, never as the Arabic Qurʾānic wording; the Arabic case already stands on muhaymin (5:48), ḥāl grammar, partitive fīhā/fīhi, and 2:79/6:91."],
   ["Camilla Adang, Muslim Writers on Judaism and the Hebrew Bible (Brill, 1996), p. 251","al-Rāzī, Mafātīḥ al-Ghayb (5:43); al-Ṭanṭāwī, al-Tafsīr al-Wasīṭ (5:44, 5:66, 5:68)","Muqātil b. Sulaymān (5:47); Dr. Ghali translation gloss note"],
   [],
   {facts:[["Stage 1 Opener","5:48 muhaymin shifts burden of proof"],["Adang (1996, p. 251)","Early majority favored taḥrīf al-maʿnā"],["Strongest Text Proofs","2:79, 6:91 (Ibn Kathīr) & 5:43–48"],["Rigour Rule","Flag inferences & translator brackets"]],
    quotes:[
     {by:"Camilla Adang (1996)",en:"Only the sense of the biblical text had been changed while the text itself remained intact. Only al-Maqdisi and Ibn Hazm believed that the text had suffered distortion... Apart from al-Tabari, the authors who held to a moderate view of tahrif felt justified in using the Bible as a historical source.",ref:"Muslim Writers on Judaism and the Hebrew Bible, p. 251"}
    ],
    visual:{kind:'steps',items:[
     ["Stage 1: Open with Q 5:48","Establish muhaymin / al-amīn (Ibn ʿAbbās, al-Ṭabarī): Qurʾān judges prior books; demand proof of taṣdīq muṭlaq."],
     ["Stage 2: Ḥāl Grammar","Show muṣaddiqan li-mā bayna yadayhi (3:3; 2:41; 5:46) & generic al-kitāb (2:101) confirm divine origin, not every word."],
     ["Stage 3: Partitive Rulings","Read fīhā ḥukmu llāh (5:43) & bimā anzala llāhu fīhi (5:47) with Bukhārī 6819 (rajm) as surviving rulings."],
     ["Stage 4: Kitmān & Taḥrīf","Present 2:79, 6:91, 2:159, 3:187 (Ibn Kathīr/al-Ṭabarī), while respecting Adang's maʿnā caveat."]
    ]}})
 ],
 {facts:[["Grammar","muṣaddiqan = ḥāl (divine origin, not word-for-word)"],["Keystone Verse","Q 5:48 muhaymin (al-amīn over prior books)"],["Partitive Rulings","fīhā (5:43) & fīhi (5:47) = surviving law"],["Text Alteration","2:79 & 6:91 (Ibn Kathīr & al-Ṭabarī)"]],
  quotes:[
   {by:"Ibn ʿAbbās (via Ibn Kathīr on Q 5:48)",en:"Al-Muhaymin—the trustworthy. The Qurʾān is trustworthy over every book prior to it.",ref:"Tafsīr Ibn Kathīr on Q 5:48"},
   {by:"Ibn Jarīr al-Ṭabarī",en:"The Qurʾān is trustworthy over the preceding books; what in them agrees with the Qurʾān is true, and what contradicts it is false.",ref:"Tafsīr al-Ṭabarī on Q 5:48"}
  ],
  shots:[
   S('pdf3-dilemma-alles-p1.jpg','Islamic Dilemma Tafsīr Dossier (Averroes #alles): TL;DR, Key Findings 1–6 & Categories 1–2 (taṣdīq ʿāmm vs. muṭlaq) (p. 1).'),
   S('pdf3-dilemma-alles-p2.jpg','Categories 3–7 (2:85, 3:48, kitmān/taḥrīf, 6:91, 10:94), 4-Stage Debate Protocol & Camilla Adang caveats (p. 2).')
  ]}));

/* ============================================================================
   6. attachShots(): islam/general/d-av-sonstiges-islam-2/c-allahs-thron-knirchen
      8 WebP scans (thron-1..8.webp) from Averroes #allahs-thron-knirchen (1280975859079188511)
   ============================================================================ */
attachShots('islam/general/d-av-sonstiges-islam-2/c-allahs-thron-knirchen',[
  S('thron-1.webp','Ibn Kathīr (Tafsīr): “ʿAbdullāh ibn Khalīfa is not well known, and there is doubt about his having heard from ʿUmar,” noting the chain is muḍṭarib (Averroes #allahs-thron-knirchen).'),
  S('thron-2.webp','al-Albānī (Silsilat al-Aḥādīth al-Ḍaʿīfa, vol. 13/1, p. 723) quoting Imām Ibn Khuzayma (Kitāb al-Tawḥīd, p. 71) rejecting the aṭīṭ (creaking) report as discontinuous (mursal).'),
  S('thron-3.webp','Kitāb al-Sunna of ʿAbdullāh b. Aḥmad (ed. al-Qaḥṭānī, vol. 1, p. 301, no. 585): explicitly graded isnāduhu ḍaʿīf (weak chain) over ʿAbdullāh b. Khalīfa’s hearing from ʿUmar and mursal/mawqūf confusion.'),
  S('thron-4.webp','al-Dhahabī (Mīzān al-Iʿtidāl, no. 4290, ʿAbdullāh b. Khalīfa al-Hamdānī): “He is scarcely known (lā yakādu yuʿraf),” showing his hidden chain critique alongside his formal statement in al-ʿUluww.'),
  S('thron-5.webp','Close-up scan of al-Dhahabī’s Mīzān al-Iʿtidāl (no. 4290) ruling ʿAbdullāh b. Khalīfa al-Hamdānī “scarcely known.”'),
  S('thron-6.webp','Shaykh Shuʿayb al-Arnaʾūṭ (Taḥrīr Taqrīb al-Tahdhīb, vol. 2, p. 205, no. 3294): grading ʿAbdullāh b. Khalīfa al-Hamdānī “majhūl al-ḥāl” (unknown status), narrated from only by Abū Isḥāq and his son Yūnus.'),
  S('thron-7.webp','Close-up scan of Taḥrīr Taqrīb al-Tahdhīb (vol. 2, p. 205, no. 3294) confirming ʿAbdullāh b. Khalīfa’s majhūl al-ḥāl grading.'),
  S('thron-8.webp','Ibn Ḥajar al-ʿAsqalānī (Lisān al-Mīzān, vol. 7, p. 338, no. 1344): affirming of ʿAbdullāh b. Khalīfa al-Hamdānī that “he is scarcely known (lā yakādu yuʿraf).”')
],[
  "Primary chain rulings from the 8 channel scans (Averroes #allahs-thron-knirchen): The solitary pivot ʿAbdullāh ibn Khalīfa al-Hamdānī is graded 'not well known' with doubt about his hearing from ʿUmar (Ibn Kathīr) and 'scarcely known' (lā yakādu yuʿraf: al-Dhahabī, Mīzān al-Iʿtidāl 4290; Ibn Ḥajar, Lisān al-Mīzān 1344), while Shuʿayb al-Arnaʾūṭ (Taḥrīr Taqrīb al-Tahdhīb 3294) explicitly classifies him majhūl al-ḥāl.",
  "Rejection of the athar itself: Ibn Khuzayma (Kitāb al-Tawḥīd, p. 71; cited in al-Albānī, al-Silsila al-Ḍaʿīfa 13/1/723) rejects the report as discontinuous (mursal), and al-Qaḥṭānī (Kitāb al-Sunna 1/301, no. 585) grades its chain weak (isnāduhu ḍaʿīf)."
]);

/* ============================================================================
   7. attachShots(): islam/hadith/d-dr-bukhari-preservation-of-torah
      6 WebP scans (bukh-torah-1..6.webp) from Averroes #bukhari-glaubt-an-thora (1276736462821261323)
   ============================================================================ */
attachShots('islam/hadith/d-dr-bukhari-preservation-of-torah',[
  S('bukh-torah-1.webp','Averroes #bukhari-glaubt-an-thora (scan 1/6): Ibn al-Qayyim’s Ighāthat al-Lahfān (p. 654) outlining the three Muslim views on whether Torah alteration touched wording or interpretation.'),
  S('bukh-torah-2.webp','Close-up Arabic scan (2/6): Ighāthat al-Lahfān (p. 654) introducing the three positions (ṭarafayn wa-wasaṭ) on Torah taḥrīf.'),
  S('bukh-torah-3.webp','Ighāthat al-Lahfān (p. 656, scan 3/6): where Ibn al-Qayyim attributes the interpretation-only view to Imām al-Bukhārī (Kitāb al-Tawḥīd, ch. 55) and al-Rāzī.'),
  S('bukh-torah-4.webp','Close-up scan (4/6): Ighāthat al-Lahfān (p. 656) highlighting the attribution to al-Bukhārī.'),
  S('bukh-torah-5.webp','Actual Arabic text of Ṣaḥīḥ al-Bukhārī (Kitāb al-Tawḥīd, ch. 55, scan 5/6): proving the statement “none can remove the wording of a Book of Allah” is Ibn ʿAbbās’s—not al-Bukhārī’s—placed under the Preserved Tablet / Umm al-Kitāb.'),
  S('bukh-torah-6.webp','Close-up scan (6/6): Ṣaḥīḥ al-Bukhārī (Kitāb al-Tawḥīd, ch. 55) highlighting Ibn ʿAbbās’s exact words on good and evil being written and interpreting scripture contrary to its meaning.')
]);
})();
