/* Averroes Media & PDF Batch 1 (Christianity, Prophecies & Bible) — 2026-11-22.
   Integrates 16 extracted German Averroes research PDFs + 16 rendered JPEG pages (shots/pdf4-*.jpg)
   across 10 media-only Averroes channels (6 new Playbook cards + 4 add() enrichments):
   1. NEW: christianity/islam-vs/prophecies/hosea-9-6-mahmad (#hosea-9-6)
   2. NEW: christianity/islam-vs/prophecies/son-of-man-daniel-7-gospels (#menschen-sohn, 4 dossiers)
   3. NEW: christianity/islam-vs/prophecies/qumran-deut-13-faithful-prophet (#qumran-dtn-13)
   4. NEW: christianity/bible/contradictions/heaven-ascension-contradiction (#himmel-widerspruch)
   5. NEW: christianity/bible/contradictions/yhwh-name-exodus-6-3 (#jhwe-name-nicht-offenbart)
   6. NEW: christianity/jesus/jesus-baptism-sin-mark-1 (#jesus-sünde-taufen-jordan-markus)
   7. add(): christianity/islam-vs/d-dr-song-of-solomon (#hohes-lied-5-16, 4 dossiers -> 2 explainer cards)
   8. add(): christianity/islam-vs/d-dr-daniel-2 (#daniel-7)
   9. add(): christianity/islam-vs/d-dr-isaiah-42 (#jesaja-42)
  10. add(): christianity/jesus/d-av-jesus-gewalt-su-nde/c-niemals-im-geheimen-gesprochen (#jesus-sagt-er-hat-nie-im-geheimen-gesprochen) */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const S=(src,cap)=>({src:'shots/'+src,cap});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('av1-media-christ: no card',key); };

const PR='christianity/islam-vs/prophecies/';
const CT='christianity/bible/contradictions/';

/* ============================================================================
   1. NEW: christianity/islam-vs/prophecies/hosea-9-6-mahmad (#hosea-9-6)
   ============================================================================ */
const HS9=AV('hosea-9-6','1493957596372271297');
const hsTrap1=P(N(HS9,
 "Maḥmad is an ordinary noun ('precious thing', appearing 13 times in the Hebrew Bible—e.g. Ezekiel 24:16), and the vocalization maḥmad differs from muḥammad without a doubled mīm.",
 "Both objections collapse on linguistic and manuscript history. Common nouns regularly become proper names (Yeshua = 'salvation', Isaac = 'he laughs'), the LXX translators themselves treated position 3 in Hosea 9:6 as a proper name (Machmas), and Masoretic vowel points (nikud) were only added in the 7th–10th centuries CE—after Islam. Stripped of post-Islamic vowel marks, the consonantal skeleton is M-Ḥ-M-D, which Jerome writes unvocalized as MAMAD.",
 "Why common nouns, Masoretic vowels, and Ezekiel 24:16 fail",
 ["1. Common nouns as proper names: Biblical proper names regularly arise from ordinary nouns or verbs—Yeshua (יֵשׁוּעַ, 'salvation') and Yitzḥaq (יִצְחָק, 'he laughs'). Crucially, the Septuagint translators themselves recognized that position 3 in Hosea 9:6 sits in a proper-name slot and rendered it as a proper name (Machmas).",
  "2. Post-Islamic vocalization (nikud): The objection cites Masoretic vowels (maḥmad vs. muḥammad, lacking dagesh forte). Yet Masoretic vowel points were added only in the 7th–10th centuries CE—after Islam already existed. The original consonantal text is מחמד (M-Ḥ-M-D = محمد), and Jerome (c. 400 CE) writes it unvocalized as MAMAD.",
  "3. Semitic semantic shift (Ḥ-M-D): Hebrew ḥ-m-d ('to desire/long for') and Arabic ḥ-m-d ('to praise') share the same Semitic root and exhibit a standard semantic development: what people long for and prize, they praise. Jerome's Latin rendering desiderabile ('the desired one') expresses that honored person.",
  "4. Selective application (Ezekiel 24.16): No Muslim claims every one of the 13 biblical occurrences of maḥmad denotes the Prophet ﷺ—just as yᵉšūʿāh ('salvation') occurs over a hundred times without every occurrence naming Jesus. Hosea 9:6 is distinctive because of its parallel proper-noun syntax and Jerome's pre-Islamic testimony."],
 ["Hosea 9:6 (MT & LXX)","Ezekiel 24:16","Jerome, Commentarius in Osee Prophetam (c. 400 CE)"],
 [],
 {facts:[
   ["Consonants","מחמד (M-Ḥ-M-D) = محمد"],
   ["Vowel Points","Masoretic nikud added 7th–10th c. CE"],
   ["LXX Proof","Treated slot 3 as proper name (Machmas)"],
   ["Root Ḥ-M-D","'Desired' (Heb.) ↔ 'Praised' (Arab.)"]
  ]}
),{
 optWho:'Watch out · if they say',
 optLabel:'Maḥmad is an ordinary noun used 13 times (like Ezek 24:16), and its Masoretic vowels differ from Muḥammad!',
 theyWho:'Watch out · if they say',
 who:'Counter & close the trap'
});

const hsTrap2=P(N(HS9,
 "Hosea 9:6 is strictly historical (Israel's exile to Egypt), and Jerome's desiderabile refers to their desired silver (desiderabile argentum eorum), not a person!",
 "Historical context never excludes typological or future prophetic reference in biblical exegesis—and the Hebrew syntax directly refutes reading desiderabile as a mere adjective modifying silver. In the three-clause triad ('Egypt shall gather them, Memphis shall bury them, MḤMD—for their silver...'), position 3 stands as the third parallel subject alongside two undisputed proper nouns.",
 "Syntax refutes the 'desired silver' escape & typology handles history",
 ["1. Three-part parallel syntax: Hosea 9:6 places three clauses side by side—(1) Miṣrayim tᵉqabbᵉṣēm ('Egypt shall gather them'), (2) Mōf tᵉqabbᵉrēm ('Memphis shall bury them'), (3) Maḥmad lᵉkhaspām ('MḤMD for their silver...'). Because Miṣrayim (proper name 1) and Mōf (proper name 2) both function as subjects, reducing position 3 to a mere adjective attached to silver breaks the parallel structure.",
  "2. Jerome's correction of the Septuagint: Jerome expressly notes that the LXX translators mistook Daleth (ד) for Kaph (כ), turning MAMAD into an imaginary Egyptian city 'Machmas.' Jerome confirms MAMAD is not a place name and translates it desiderabile ('the desired/longed-for one').",
  "3. Historical context vs. prophecy: Near-term historical context (Assyrian/Egyptian exile) does not rule out further prophetic meaning in biblical typology—which Christianity itself relies on in Hosea (e.g., Hosea 11:1 applied to Jesus in Matthew 2:15). If syntax marks MḤMD as a proper name and Jerome rules out a place name, the question remains: which person is named MḤMD?"],
 ["Hosea 9:6 (MT, LXX, Vulgate)","Jerome, Commentarius in Osee Prophetam","Hosea 11:1 / Matthew 2:15"],
 [],
 {facts:[
   ["Clause 1 Subject","Miṣrayim (Egypt — proper noun)"],
   ["Clause 2 Subject","Mōf (Memphis — proper noun)"],
   ["Clause 3 Subject","Maḥmad (MḤMD — disputed slot)"],
   ["LXX Scribal Error","Confused Daleth (ד) with Kaph (כ)"]
  ]}
),{
 optWho:'Watch out · if they say',
 optLabel:'Hosea 9:6 is about Israel in Egypt, and Jerome meant their desired silver—not a person!',
 theyWho:'Watch out · if they say',
 who:'Counter with syntax & Jerome'
});

card(PR+'hosea-9-6-mahmad',{
 title:"Hosea 9:6: Maḥmad (MḤMD) & Jerome's pre-Islamic witness",
 k:"Prophecies · Hosea 9:6 · Jerome",
 blur:"Hebrew consonantal M-Ḥ-M-D sits parallel to Egypt and Memphis—and Jerome (c. 400 CE) corrects the LXX's 'Machmas' back to 'MAMAD'.",
 claim:"The word maḥmad in Hosea 9:6 is merely a common noun ('treasure/silver') with no connection to Muḥammad ﷺ.",
 tree:P(N(HS9,
  "Hosea 9:6 simply says nettles will inherit Israel's precious silver—reading maḥmad as Muḥammad ﷺ is a modern Muslim invention.",
  "Two centuries before Islam, the Church Father Jerome (†420 CE) refuted the 'post-Islamic invention' charge in advance. In Hosea 9:6, maḥmad (consonantal skeleton M-Ḥ-M-D = Muḥammad) stands in the third subject slot parallel to two undisputed proper nouns (Egypt and Memphis)—and Jerome explicitly corrects the Septuagint's misreading ('Machmas'), spells out the Hebrew consonantal form 'MAMAD', confirms it is no place name, and renders it desiderabile ('the desired one').",
  "Symmetry-breaker: Syntactic parallelism & Jerome's pre-Islamic testimony",
  ["1. Parallel proper-noun syntax (Hos 9.6): The Masoretic text reads kī-hinnēh hālᵉkū miššōd Miṣrayim tᵉqabbᵉṣēm Mōf tᵉqabbᵉrēm maḥmad lᵉkhaspām—placing three nouns in parallel subject position: (1) Miṣrayim (Egypt, undisputed proper name), (2) Mōf (Memphis, undisputed proper name), and (3) Maḥmad (מַחְמַד, consonantal M-Ḥ-M-D).",
   "2. Jerome's correction of the Septuagint (c. 400 CE): In his Commentarius in Osee Prophetam—over 200 years before Islam—Jerome states that the LXX read 'sepeliet eos Machmas' (treating it as a city in Egypt) solely because translators confused Hebrew Daleth (ד) with Kaph (כ), when in fact the Hebrew reads MAMAD (מַחְמַד), translated desiderabile.",
   "3. Three verified facts from Jerome's witness: (a) the LXX misread a letter and turned it into a city; (b) the authentic Hebrew text is MAMAD, not a place name; (c) Jerome's Latin substantivized desiderabile ('the desired/longed-for one') designates a person rather than a town.",
   "4. Consonantal identity across Semitic languages: Stripped of Masoretic vowel signs added in the 7th–10th centuries CE, Hebrew מחמד and Arabic محمد share the exact four consonants M-Ḥ-M-D and the identical Semitic root Ḥ-M-D."],
  ["Hosea 9:6 (MT, LXX, Vulgate)","Jerome, Commentarius in Osee Prophetam (c. 400 CE)"],
  [hsTrap1,hsTrap2],
  {facts:[
    ["Consonantal Text","מחמד = M-Ḥ-M-D = محمد"],
    ["Pre-Islamic Witness","Jerome (†420 CE) writes 'MAMAD'"],
    ["LXX Letter Error","Daleth (ד) misread as Kaph (כ)"],
    ["Syntax Triad","Miṣrayim · Mōf · Maḥmad"]
   ],
   quotes:[
    {by:"Jerome, Commentarius in Osee Prophetam (c. 400 CE)",en:"What the Septuagint renders 'Machmas shall bury them' is not in the Hebrew, but rather MAMAD (מַחְמַד), which is called desiderabile [the desired one]. From this it is clear that they were deceived by the similarity of the letters DALETH (ד) and CHAPH (כ), and instead of Mamad—which all have translated 'desiderabile'—they supposed Machmas to be a city of Egypt.",ref:"Commentary on Hosea 9:6 (pre-Islamic Latin text)"}
   ],
   visual:{kind:'compare',
    left:{title:"Hebrew מַחְמַד (Hosea 9:6)",items:["Root: ח-מ-ד (Ḥ-M-D)","Consonants: מ-ח-מ-ד (M-Ḥ-M-D)","Jerome's rendering: 'desiderabile' ('the desired one')","Nikud vowels added 7th–10th c. CE (post-Islam)"]},
    right:{title:"Arabic مُحَمَّد (Muḥammad)",items:["Root: ح-م-د (Ḥ-M-D)","Consonants: م-ح-م-د (M-Ḥ-M-D)","Meaning: 'the praised / praiseworthy one'","Semantic link: what is desired is praised"]}},
   shots:[
    S('pdf4-hosea-9-6-p1.jpg','Hosea 9:6 dossier (Averroes #hosea-9-6): parallel syntax (Egypt / Memphis / MḤMD), Jerome’s Latin witness & 6 rebuttals (p. 1).')
   ]}),{
  who:'Opening move',
  forkTitle:'Two ways they can push back',
  forkSub:'Both linguistic and contextual escapes run straight into Masoretic history and Hosea 9:6’s syntax'
 }),
 sum:"Jerome's pre-Islamic testimony (c. 400 CE) rules out the LXX's 'Machmas' city error, confirms the consonantal Hebrew skeleton M-Ḥ-M-D ('MAMAD'), and leaves Hosea 9:6's third parallel subject pointing to a desired figure matching Muḥammad ﷺ."});

/* ============================================================================
   2. NEW: christianity/islam-vs/prophecies/son-of-man-daniel-7-gospels
      (#menschen-sohn — 4 dossiers: menschensohn-1..4)
   ============================================================================ */
const MNS=AV('menschen-sohn','1550145871109169303');

const mnsLineA=P(N(MNS,
 "Even if Daniel 7's Son of Man ends Rome, Islamic texts don't actually match 1 Enoch's Son of Man traits—the standard Muslim claims (Mujāhid's Throne report, 'keys of Paradise', proskynēsis) are weak or strained.",
 "Replace weak citations with ṣaḥīḥ Bukhārī/Muslim proofs that do even more. Instead of Mujāhid's weak Layth chain, Ṣaḥīḥ al-Bukhārī's intercession ḥadīth puts the Prophet ﷺ beneath the Throne receiving unique maḥāmid ('praises', the same root as Aḥmad!) and admitting people through Paradise's right gate (Matt 25:33)—while 'Lord of the children of Ādam' (four Companions), notional pre-existence (wajabat), 'judging' = testifying (yudʿā Nūḥ), and 'speak, you shall be heard' (1 Enoch 69:29) are all ṣaḥīḥ.",
 "Corpus Dossier (Part 1): Ṣaḥīḥ Replacements & Epistemic Filter",
 ["1. 'Lord of the children of Ādam' & Banner of Praise: Attested by four independent Companions—Abū Hurayra (Ṣaḥīḥ Muslim; Ibn Abī Shayba), Abū Saʿīd al-Khudrī (at-Tirmidhī, ḥasan ṣaḥīḥ), Ibn ʿAbbās (Musnad al-Ṭayālisī d. 204 AH, earliest wording), and Ḥudhayfa (Ibn Abī Shayba mawqūf), plus Anas. Crucially, the Tirmidhī/Ṭayālisī text adds: 'There is no prophet that day—Ādam and whoever came after him—except under my banner (liwāʾ al-ḥamd),' matching Dan 7:14 and placing Jesus under that banner (reversing Mark 8:38).",
  "2. Notional pre-existence (wajabat, not literal existence): In Sunan at-Tirmidhī (ḥasan ṣaḥīḥ gharīb), Companions ask 'When was prophethood assigned/made due (wajabat) to you?' (not 'when did you exist?'). Wajaba li- denotes legal/authoritative appointment—confirming Walck's 'notional pre-existence' grammatically inside Arabic itself. Likewise Ibn Abī Shayba / Ibn Saʿd (kuntu nabiyyan wa-Ādamu bayna r-rūḥi wa-l-jasad) and Musnad Aḥmad / al-Bazzār (ḥasan, al-ʿIrbāḍ b. Sāriya: 'I was with Allah the Seal of the Prophets while Ādam was cast in his clay... the prayer of Abraham, the glad tidings of Jesus, and my mother's dream').",
  "3. What NOT to use vs. the ṣaḥīḥ Throne replacement: Do NOT rely on Mujāhid's 'sits him on the Throne' report (Ibn Abī Shayba, Ibn Abī ʿĀṣim, al-Ṭabarī, al-Khallāl; Aḥmad and Abū Dāwūd noted it was circulated to provoke the Jahmiyya, and every chain runs solely through weak Layth b. Abī Sulaym, maqṭūʿ). Instead cite Ṣaḥīḥ al-Bukhārī (Kitāb al-Tafsīr / Kitāb al-Tawḥīd, muttafaq ʿalayh): 'I go beneath the Throne and fall prostrate... then Allah opens to me from His maḥāmid (praises) something He opened to no one before me... admit from your community through the right gate of Paradise'—delivering the Throne (Dan 7 / 1 Enoch 62), unique exaltation, right-hand gate (Matt 25:33), and ḥamd/Aḥmad in one authentic text.",
  "4. 'Judging' = testifying & 'Speak, you shall be heard': In Ṣaḥīḥ al-Bukhārī (on Q 2:143, yudʿā Nūḥun yawma l-qiyāma), Noah's community denies receiving a warner, and Muḥammad ﷺ and his community testify against them—identical in courtroom structure to Matt 19:28 and Matt 12:41–42 (judging as witnessing). And in Bukhārī/Muslim (Anas: irfaʿ raʾsaka wa-sal tuʿṭah wa-qul yusmaʿ wa-shfaʿ tushaffaʿ), 'speak—you will be heard' matches 1 Enoch 69:29 ('his word shall be strong before the Lord of Spirits') verbatim.",
  "5. Epistemic filter (Constantinople): Of all proofs, the Constantinople prophecy alone satisfies the strictest historical-prediction filter: written down before 235 AH, motivating campaigns already in 98 AH, surviving three failed sieges, and fulfilled in 857 AH / 1453 CE."],
 ["Ṣaḥīḥ al-Bukhārī (Tafsīr Q 2:143, Tawḥīd, Riqāq)","Ṣaḥīḥ Muslim (Faḍāʾil)","Sunan al-Tirmidhī (Manāqib)","Musnad al-Ṭayālisī; Ibn Abī Shayba; Ibn Saʿd; al-Bazzār","1 Enoch 48:3; 62; 69:29; Matt 19:28; 25:33"],
 [],
 {facts:[
   ["Throne Proof","Bukhārī muttafaq ʿalayh (maḥāmid)"],
   ["Avoid Weak Trap","Mujāhid Throne report (Layth chain)"],
   ["Judging = Witness","yudʿā Nūḥ (Bukhārī on Q 2:143)"],
   ["Strict Filter","Constantinople fixed pre-235, 1453 CE"]
  ],
  quotes:[
   {by:"Ṣaḥīḥ al-Bukhārī (Intercession under the Throne)",en:"I come beneath the Throne and fall prostrate before my Lord. Then Allah opens to me of His praises (maḥāmid) and fair laudation something He has not opened to anyone before me... 'Speak—you shall be heard; intercede—your intercession shall be accepted.'",ref:"Ṣaḥīḥ al-Bukhārī, Kitāb al-Tafsīr / al-Tawḥīd (muttafaq ʿalayh)"}
  ],
  shots:[
   S('pdf4-menschensohn-2-p1.jpg','Son of Man Dossier 1 (OpenITI to 400 AH): replacing weak citations with ṣaḥīḥ Bukhārī maḥāmid, Noah trial & 1453 filter (p. 1).')
  ]}
),{
 optWho:'Angle',
 optLabel:'Ṣaḥīḥ ḥadīth replacements: Throne maḥāmid, Noah courtroom witness & avoiding weak citations (Dossier 1)',
 theyWho:'If they challenge the Islamic parallels',
 who:'Line A · Ṣaḥīḥ corpus proofs'
});

const mnsLineB=P(N(MNS,
 "Why would Jesus in Mark 8:38 point away from himself to another coming figure, and where does early Islam call Rome the 'horned beast' of Daniel 7?",
 "Seven discoveries from the second OpenITI corpus pass anchor this directly in 2nd-century Islamic sources: Ibn Isḥāq (d. 150 AH) translates John 15's Aramaic Paraclete (al-Munaḥḥemanā, who 'witnesses') via the exact doxa/ḥamd equivalence; Q 3:81 binds every prophet by covenant to affirm the Final Messenger; Ṣaḥīḥ Muslim ('your Imām is from among you') mirrors Mark 8:38; and early ḥadīth literally dubs Rome dhāt al-qurūn ('the one with horns').",
 "Corpus Dossier (Part 2): Ibn Isḥāq, Q 3:81, Muslim 155 & Rome 'With Horns'",
 ["1. Ibn Isḥāq (d. 150 AH) & Muqātil (d. 150 AH) on translation + witness: In Ibn Hishām's Sīra (quoting John 15:23–27), Ibn Isḥāq glosses 'al-Munaḥḥemanā' as 'Muḥammad in Syriac, al-Baraqlīṭis in Greek'—proving the linguistic equivalence method (like doxa ↔ ḥamd) is 1,000 years older than modern apologetics, independently echoed by Muqātil b. Sulaymān on Q 61:6 ('Aḥmad, in Syriac Fārqalīṭā'). Moreover, the quoted verse reads fa-huwa shahīdun ʿalayya ('he shall be a witness concerning me'), directly linking Paraclete/Son-of-Man testimony.",
  "2. Q 3.81 as the Qurʾānic Daniel 7.14: Immediately after quoting John 15, Ibn Isḥāq cites Q 3:81—the prophetic covenant supported by Ṭāwūs b. Kaysān (d. 106), Qatāda (d. 117, solid Basran chain via al-Ṭabarī), and Musnad Aḥmad / Ibn Abī Shayba ('Were Moses alive, he would have no choice but to follow me'). Every prophet is contractually bound to affirm the Final Prophet—answering why Jesus points beyond himself in Mark 8:38.",
  "3. 'Your Imām is from among you' (Ṣaḥīḥ Muslim & Bukhārī): Muttafaq ʿalayh (wa-imāmukum minkum; ḥakaman ʿadlan)—Jesus descends as a just arbiter under an existing community whose own Imām leads prayer. This gives the exact Islamic counterpart to Mark 8:38: Jesus returns in honor, yet subordinate to the community of another covenant.",
  "4. Rome called dhāt al-qurūn ('the one with horns'): In Ibn Abī Shayba (strong Syrian mursal chain via al-Awzāʿī ← Ibn Muḥayrīz) and marfūʿ in Abū Dāwūd / Musnad Aḥmad / Ibn Ḥibbān / al-Ḥākim (Ibn Ḥawāla, ḥasan–ṣaḥīḥ): 'Persia is one or two blows, then Persia is no more; and Rome is the one with horns (dhāt al-qurūn)—whenever one horn passes away, another horn rises in its place.' While qarn can mean both 'horn' and 'generation', the epithet dhāt al-qurūn is animal imagery contrasted solely with Persia—matching Dan 7:7–8, 20–24.",
  "5. Nuʿaym b. Ḥammād (d. 228 AH) & the Alexandria chest: Kitāb al-Fitan (nos. 1354, 1344, 1343) preserves a second chain (Ibn Lahīʿa ← Abū Qabīl ← ʿUmayr b. Mālik) where ʿAbdallāh b. ʿAmr pulls out his book-chest and swears thrice: 'Constantinople shall be conquered before Rome—and if not, I am a liar!' (plus Kaʿb's sequence: Amorion [838 CE] → Nicaea [1331 CE] → Constantinople [1453 CE]). Though Ibn Lahīʿa is weak as a prophetic isnād, as a pre-228 AH written falsification-pledge it is a striking documentary marker."],
 ["Ibn Hishām, al-Sīra (Ibn Isḥāq on John 15)","al-Ṭabarī on Q 3:81 (Ṭāwūs, Qatāda)","Ṣaḥīḥ Muslim 155 / Bukhārī (wa-imāmukum minkum)","Abū Dāwūd & Aḥmad (Ibn Ḥawāla); Ibn Abī Shayba","Nuʿaym b. Ḥammād, Kitāb al-Fitan 1343–1354"],
 [],
 {facts:[
   ["Ibn Isḥāq (d. 150)","al-Munaḥḥemanā = Muḥammad / Witness"],
   ["Mark 8:38 Counterpart","wa-imāmukum minkum (muttafaq ʿalayh)"],
   ["Daniel 7 Imagery","Rome = dhāt al-qurūn ('with horns')"],
   ["Fitan 1354 (d. 228)","Self-falsification pledge on Constantinople"]
  ],
  quotes:[
   {by:"Ibn Isḥāq (d. 150 AH, in Ibn Hishām)",en:"And al-Munaḥḥemanā in Syriac means Muḥammad; and in Greek it is al-Baraqlīṭis.",ref:"al-Sīra al-Nabawiyya (citing John 15:23–27)"}
  ],
  shots:[
   S('pdf4-menschensohn-1-p1.jpg','Son of Man Dossier 2 (Second OpenITI Pass): Ibn Isḥāq on John 15, Q 3:81, Muslim 155, Rome dhāt al-qurūn & Fitan 1354 (p. 1).')
  ]}
),{
 optWho:'Angle',
 optLabel:'Ibn Isḥāq (150 AH), Q 3:81 covenant, Muslim 155 & Rome as the horned beast (Dossier 2)',
 theyWho:'If they question early Islamic attestation',
 who:'Line B · Early Sīra & Roman continuity'
});

const mnsLineC=P(N(MNS,
 "Where do the biblical texts themselves—MT, Septuagint, Peshitta, Targums, Qumran, and the Gospels—connect Daniel 2 & 7, Rome, the Stone, and praise (doxa/ḥamd)?",
 "The biblical-corpus layer reveals four decisive bridges: Qurʾān 17:79–81 pairs maqām maḥmūd with sulṭān (the exact cognate of Dan 7:14's Aramaic šolṭān, interpreted by al-Ḥasan al-Baṣrī d. 110 AH as taking the kingdoms of Persia and Rome); Matt 21:42–44 / Luke 20:17–18 literally fuses the corner-stone (zāwīṯā / Ṣaḥīfat Hammām's corner-brick) with Dan 2:44's verb likmēsei; a pre-Islamic chain proves Rome = 4th kingdom; and the Syriac Gospels render doxa as tešbuḥtā ('praise').",
 "Biblical Text Layer (Part 3): Q 17:79–81, Matthew 21 Stone & Syriac Praise",
 ["1. Qurʾān 17.79–81 & Dan 7.14 (šolṭān / sulṭān): Opening with the night ascent of 'His servant' (Q 17:1), vv. 79–81 place three elements side by side: (v. 79) maqām maḥmūd ('praised station'), (v. 80) min ladunka sulṭānan naṣīran (exact cognate of Dan 7:14's šolṭān given before the Ancient of Days), and (v. 81) 'Truth has come and falsehood perished' (recited by the Prophet ﷺ while smashing the 360 idols at Mecca, Bukhārī 4287 / Muslim 1781). Earliest tafsīr via an all-thiqa chain to al-Ḥasan al-Baṣrī (d. 110 AH, al-Ṭabarī): Allah promised to seize the kingdom of Persia and Rome and give it to him (and al-Māturīdī d. 333 AH adds: 'and to his ummah'—matching Dan 7:14 + 7:27!).",
  "2. The missing Gospel bridge (Matt 21.42–44 / Luke 20.17–18): Between the Fig Tree (21:18–22) and the Wedding Banquet (22:1–14), Jesus quotes Ps 118:22 ('stone the builders rejected became the cornerstone', Syriac zāwīṯā—compare Ṣaḥīfat Hammām / Bukhārī 3535 / Muslim 2286: 'brick in a corner', labina min zāwiya), declares the Kingdom will be given 'to a nation (ethnos) producing its fruits', and warns that whoever the stone falls on, it will crush (likmēsei)—the exact Greek verb of Daniel 2:44 Theodotion! Note also Jesus reverses Dan 2:44 ('shall not be left to another people').",
  "3. Pre-Islamic Rome-identification chain: LXX Dan 11:30 ('Romans'), Qumran (Kittim = Romans slain by Davidic shoot), Josephus (Ant. 10.210, concealing the stone's meaning under Flavian rule), 4 Ezra 13 (uniting Dan 7's clouds with Dan 2's uncut mountain), Syriac Baruch, Targum Onkelos ('the Romans shall perish forever'), Talmud (4th beast = wicked Rome), and Targum Pseudo-Jonathan (naming Constantinople and Caesarea—both conquered by Muslims).",
  "4. Syriac bridge for doxa = praise & two Aramaic channels: The Peshitta Gospels translate 'in the glory (doxa) of his Father' (Matt 16:27) as b-tešbuḥtā ('in praise') and 'throne of his glory' (Matt 19:28; 25:31) as 'throne of his praise'—proving Aramaic-speaking Christians already equated doxa with praise before Islam. Meanwhile, Peshitta John 14–16 uses paraqlīṭā (Muqātil's Fārqalīṭā), whereas Ibn Isḥāq's al-Munaḥḥemanā reflects Christian Palestinian Aramaic (and Menaḥem is a Talmudic Messiah name)."],
 ["Qurʾān 17:1, 79–81; al-Ṭabarī (al-Ḥasan al-Baṣrī); al-Māturīdī","Matt 21:42–44; Luke 20:17–18; Dan 2:44 (Theodotion)","Ṣaḥīfat Hammām / Bukhārī 3535 / Muslim 2286","4 Ezra 13; Syriac Baruch; Targum Onkelos & Pseudo-Jonathan","Peshitta Matt 16:27; 19:28; 25:31; John 14–16"],
 [],
 {facts:[
   ["Q 17:80 vs Dan 7:14","sulṭān ↔ šolṭān (Persia & Rome)"],
   ["Gospel Link","Matt 21:44 likmēsei = Dan 2:44 LXX"],
   ["Syriac Doxa","b-tešbuḥtā = 'in praise' (Matt 16:27)"],
   ["Pre-Islamic Rome","LXX, Qumran, 4 Ezra, Targum, Talmud"]
  ],
  shots:[
   S('pdf4-menschensohn-3-p1.jpg','Son of Man Dossier 3 (Biblical Text Layer): Q 17:79–81, Matt 21:42–44 likmēsei, Rome chain & Syriac b-tešbuḥtā (p. 1).')
  ]}
),{
 optWho:'Angle',
 optLabel:'Biblical text layer: Q 17:79–81, Matt 21:42–44 Daniel-stone & Syriac praise (Dossier 3)',
 theyWho:'If they demand biblical & linguistic bridges',
 who:'Line C · Semitic & Gospel text layer'
});

const mnsLineD=P(N(MNS,
 "Are there unique Hebrew-Arabic prophetic motifs that Muslims didn't borrow from the Bible—and where are the limits we must respect?",
 "An untargeted root-comparison across 84,467 biblical text units and 1,463 pre-400 AH Islamic works uncovered the root ḥ-t-m ('to seal') and 10 striking convergences—most of them Type U (unattested in early Muslim Bible citations, including Qumran 11Q13 hidden until 1956!). At the same time, honest method strictly separates Type U from Type R and warns against misusing 4 Ezra 7:28–30 in a Son-of-Man debate.",
 "The 'Seal' Goldmine (Part 4): 10 Root Findings & Honest Boundaries",
 ["1. G1 (Dan 9.24 — unique OT anchor, Type U): Only ONE verse in the entire Hebrew Bible pairs ḥ-t-m ('seal') with nāḇîʾ ('prophet'): Dan 9:24 ('to seal up vision and prophet', wə-laḥtōm ḥāzôn wə-nāḇîʾ; Peshitta plural 'prophets'). Ibn Masʿūd's reading of Q 33:40—wa-lākin nabiyyan khatama n-nabiyyīn (recorded by al-Farrāʾ d. 207, al-Ṭabarī d. 310, al-Naḥḥās d. 338)—uses the exact verb-plus-object syntax before any Muslim cited Dan 9:24 (note: Tertullian Adv. Jud. 8 already called Christ signaculum omnium prophetarum, so the debate is fulfillment, not invention; also do not conflate MT verb, Peshitta plural, or the earlier ḥtm in 9:24).",
  "2. G2–G7 (Type U convergences unseen in early Muslim Bible lore): (G2) Qumran 11Q13 II 15–20 (in a cave until 1956!) identifies Daniel's Anointed One as mĕḇaśśēr (= Arabic mubaššir, 'bringer of glad tidings', Q 33:45 right beside 33:40 khātam!) and 'the mountains' as 'the prophets'; (G3) Hag 2:21–23 pairs overthrown thrones with 'my servant... like a signet-seal... for I have chosen you' (ʿabdī al-mukhtār, khātam, 'when Chosroes perishes'); (G4) John 6:27 ('the Son of Man... on him God the Father has set His seal', Pešīṭtā ḥtam); (G5) Dan 12 + Isa 29:11–12 + Isa 8:16 (sealed book handed to one who cannot read: 'Read this!' [Syriac qrī hānā], 'seal the nāmūsā' ↔ iqraʾ / mā ana bi-qāriʾ / Waraqa's hādhā n-nāmūs); (G6) Deut 33:12 ('beloved of the Lord... between his shoulders'); (G7) Isa 22:20–22 (keys on shoulder / Targum 'in his hand', 'opens and none shuts' ↔ keys in hand, fātiḥan wa-khātiman in Maʿmar d. 151 AH).",
  "3. G8 & G10 (Isa 21.7 & Ps 89.52): Correcting earlier notes, Isa 21:7 (donkey-rider = Messiah, camel-rider = Muḥammad ﷺ) IS attested early (Type R) in al-Jāḥiẓ (d. 255), al-Ḥarbī (285), Abū Yaʿqūb al-Sijistānī (c. 361), and Ibn Bābawayh (381), alongside b. Sanhedrin 98a (worthy = clouds of heaven; unworthy = lowly on a donkey). And Ps 89:52 / m. Soṭa 9:15 ('footsteps/heels [ʿiqqəḇōt] of the Messiah') mirrors al-ʿĀqib / al-Ḥāshir ʿalā ʿaqibī (Ibn Saʿd 230, Muslim 261).",
  "4. G9 & Critical Watch-out Warning: Syriac 4 Esdras 7:28–30 depicts the Messiah dying after 30 years, 7 days of silence, then resurrection—strikingly paralleling Abū Dāwūd 275 on ʿĪsā's 40-year stay and death—making it strong for Islamic Christology, yet COUNTERPRODUCTIVE in a Son-of-Man-is-not-Jesus argument because 4 Esdras 13 identifies that same 'My Son' with the man-like figure! Always keep John J. Collins (Hermeneia) in mind on Dan 7:13–14."],
 ["Dan 9:24; Q 33:40 (Ibn Masʿūd via al-Farrāʾ 207)","Qumran 11Q13 II 15–20 (Isa 52:7 + Dan 9:25)","Hag 2:21–23; John 6:27; Isa 29:11–12; Deut 33:12; Isa 22:22","al-Jāḥiẓ (255), as-Siǧistānī (361), Ibn Bābawayh (381) on Isa 21:7","4 Esdras 7:28–30; Ps 89:52; m. Soṭa 9:15"],
 [],
 {facts:[
   ["Unique OT Anchor","Dan 9:24: only ḥ-t-m + nāḇîʾ verse"],
   ["Hidden Until 1956","Qumran 11Q13: Anointed = mĕḇaśśēr"],
   ["Type U vs Type R","Unattested convergences vs early reception"],
   ["Trap to Avoid","Don't cite 4 Esdras 7 in Dan 7 debate"]
  ],
  shots:[
   S('pdf4-menschensohn-4-p1.jpg','Son of Man Dossier 4 (The Goldmine): 10 root-corpus discoveries around ḥ-t-m, 11Q13, Isa 21:7 & Type U/R limits (p. 1).')
  ]}
),{
 optWho:'Angle',
 optLabel:'The ḥ-t-m "Seal" Goldmine (Dan 9:24, 11Q13, Isa 29) & strict Type U/R limits (Dossier 4)',
 theyWho:'If they test uniqueness & historical limits',
 who:'Line D · Root-corpus convergences & limits'
});

card(PR+'son-of-man-daniel-7-gospels',{
 title:"The Son of Man (Daniel 7, 1 Enoch & Gospels): 4-dossier synthesis",
 k:"Prophecies · Daniel 7 · Son of Man",
 blur:"Cumulative 5-premise argument backed by ṣaḥīḥ Bukhārī/Muslim proofs, early Sīra witnesses, Q 17:79–81, Matt 21:42–44, and the ḥ-t-m ('seal') root corpus.",
 claim:"Daniel 7's Son of Man and the Gospels' 'coming one' refer solely to Jesus's divinity and return, not to Muḥammad ﷺ and the post-Roman Islamic kingdom.",
 tree:P(N(MNS,
  "Daniel 7's Son of Man is Jesus—a divine pre-existent figure worshipped by all nations—and Muslim attempts to link him to Muḥammad ﷺ rely on weak chains or modern word-games.",
  "Across four full corpus dossiers, the cumulative argument rests on five interlocking premises—Daniel 2 = Daniel 7 (the figure whose kingdom ends Rome), historical elimination of Rome (Jerusalem 638, Constantinople 1453), 1 Enoch's profile (throne, witness-judging, 'word strong'), Gospel expectation of another (Mark 8:38; Matt 21:42–44 linking Dan 2:44's stone to an ethnos), and Aḥmad = 'most praised' (doxa = Syriac tešbuḥtā = ḥamd)—verified by ṣaḥīḥ ḥadīth, 2nd-century Sīra/tafsīr, and pre-Islamic biblical/Qumran texts.",
  "Opening move: The 5-premise cumulative case & strongest pillars",
  ["A1–A2 (Chain & Historical Premise): Daniel 2's stone 'cut without hands' corresponds structurally to Daniel 7's 'one like a son of man' who receives dominion (šolṭān) when the fourth beast (Rome, proven by LXX Dan 11:30, Qumran, Josephus, 4 Ezra, Baruch, Onkelos, and Talmud) falls. Roman rule ended in Jerusalem (638 CE) and Constantinople (1453 CE) through the community of Muḥammad ﷺ.",
   "A3–A4 (1 Enoch & Gospel Expectation): 1 Enoch's Parables expand the open Danielic figure (notional pre-existence, Throne of glory, judging as witness, 'word strong before the Lord of Spirits', Isa 42 servant). In the Gospels, John the Baptist announces new children of Abraham and Jesus speaks of the Son of Man in the third person (Mark 8:38; Q-parallel) while fusing Dan 2:44's crushing verb (likmēsei) to a replacement nation (ethnos, Matt 21:42–44).",
   "A5 (The Praise/Seal Keystone): Greek doxa is already rendered 'praise' (tešbuḥtā) in Syriac Gospels; Ṣaḥīḥ al-Bukhārī places Muḥammad ﷺ beneath the Throne receiving unique maḥāmid ('praises', same root as Aḥmad); Q 17:79–81 pairs maqām maḥmūd with sulṭān (šolṭān); and Dan 9:24 is the sole OT verse pairing 'seal' (ḥ-t-m) and 'prophet' (nāḇîʾ).",
   "Methodological discipline: Distinguish Type U convergences (unattested in early Muslim Bible citations, e.g., 11Q13 hidden until 1956) from Type R reception (e.g., Isa 21:7 in al-Jāḥiẓ), and replace weak reports (Mujāhid's Layth Throne chain) with muttafaq ʿalayh ṣaḥīḥ texts."],
  ["Daniel 2 & 7; 9:24; Matt 21:42–44; Mark 8:38","Qurʾān 17:79–81; 3:81; 33:40; 61:6","Ṣaḥīḥ al-Bukhārī & Ṣaḥīḥ Muslim","Ibn Isḥāq (d. 150 AH); al-Ḥasan al-Baṣrī (d. 110 AH)","Qumran 11Q13; 4 Ezra 13; Syriac Peshitta"],
  [mnsLineA,mnsLineB,mnsLineC,mnsLineD],
  {facts:[
    ["5-Step Chain","Dan 2/7 → Rome → 1 Enoch → Gospels → Aḥmad"],
    ["Qurʾān Parallel","Q 17:80 sulṭān ↔ Dan 7:14 šolṭān"],
    ["Syriac Bridge","doxa = tešbuḥtā ('praise'); Matt 21:44 likmēsei"],
    ["Corpus Scope","1,463 works ≤400 AH + 84,467 Bible units"]
   ],
   visual:{kind:'steps',items:[
     ["A1–A2: Daniel 2/7 & Rome","Fourth kingdom = Rome; Jerusalem (638) & Constantinople (1453) end Roman rule (Q 17:80 sulṭān; al-Ḥasan al-Baṣrī)."],
     ["A3: 1 Enoch & Ṣaḥīḥ Parallels","Notional pre-existence (wajabat), Throne maḥāmid (Bukhārī), Noah trial witness, 'speak, you shall be heard' (1 Enoch 69:29)."],
     ["A4: Gospel Expectation","Mark 8:38 3rd-person distinction (fulfilled in Muslim 155 wa-imāmukum minkum) + Matt 21:42–44 stone & ethnos."],
     ["A5: Praise & Seal Keystone","Syriac b-tešbuḥtā + Bukhārī maḥāmid + Dan 9:24 wə-laḥtōm ḥāzôn wə-nāḇîʾ (Ibn Masʿūd Q 33:40) + 11Q13 mĕḇaśśēr."]
    ]}}),{
  who:'Opening move',
  forkTitle:'Explore all 4 research dossiers',
  forkSub:'Pick a dossier to examine the ṣaḥīḥ proofs, early Sīra/Roman texts, biblical-Semitic bridges, or Type U/R limits'
 }),
 sum:"Across four OpenITI and biblical-corpus dossiers, Daniel 2/7's anti-Roman kingdom, 1 Enoch's courtroom-witness profile, Mark 8:38 / Matt 21:42–44's ethnos-stone, Q 17:79–81's sulṭān/maḥmūd, and Dan 9:24's unique 'seal prophet' converge systematically on Muḥammad ﷺ—provided weak citations are replaced with ṣaḥīḥ texts and Type U/R limits are respected."});

/* ============================================================================
   3. NEW: christianity/islam-vs/prophecies/qumran-deut-13-faithful-prophet
      (#qumran-dtn-13)
   ============================================================================ */
const QM13=AV('qumran-dtn-13','1557335170720333834');
const qmTrap=P(N(QM13,
 "4Q375 is just a general legal rule about testing an accused prophet—not a predictive prophecy naming Muḥammad ﷺ, Mecca, or the Kaʿba—and 1 Maccabees 4:46 only talks about Jerusalem altar stones!",
 "That calibration is completely right—and abandoning inflated claims makes the real historical convergence far stronger. 4Q375 does not name Muḥammad ﷺ or Arabia, and 1 Macc 4:46 refers to Jerusalem's altar stones while 14:41–44 concerns Simon. What stands rock-solid is an unmistakable pre-Islamic socio-prophetic pattern: a Jewish legal text expects an accused prophet's own tribe to defend him as 'righteous and a faithful prophet' (nāḇîʾ neʾemān), mirrored by Banū Hāshim and Banū l-Muṭṭalib shielding Muḥammad ﷺ with explicit Moses-prophecy claims, early legal recognition (al-Shāfiʿī, Bukhārī 3140, Abū Dāwūd 2980), and adversary testimonies.",
 "Honest calibration: What 4Q375 & 1 Maccabees do—and do NOT—prove",
 ["1. What must be dropped (inflated claims): (a) Do NOT call 4Q375 a dated prediction naming Muḥammad, Arabia, or the Kaʿba—it is a legal procedure for a disputed prophet; (b) do NOT label it 'Painit' (not a scholarly category); (c) do NOT claim '7 of 8 steps are identical' or equate Qumran's priests/Urim/Temple procedure with the Meccan boycott parchment; (d) do NOT claim the Qumran cave proves nobody outside the cave knew similar motifs; (e) note that 1 Macc 4:46 refers to Jerusalem altar stones and 14:41–44 describes Simon's offices, not a transfer of every office to Muḥammad ﷺ.",
  "2. What holds rigorously (the socio-prophetic core): A pre-Islamic Jewish legal scroll (4Q375 Fragment 1 i) pairs an accused prophet's survival ('he shall not be put to death') with his own tribe stepping forward and declaring: 'For he is righteous; a faithful prophet is he' (kī ṣaddīq hūʾ nāḇîʾ neʾemān hūʾ). Early Islamic tradition preserves that exact social configuration—clan protection bound to prophetic declaration and reputations for truthfulness—independently of the termite-parchment miracle story.",
  "3. What would close the remaining gap: A stronger historical identification would require a pre-Islamic text specifying distinguishing origin/location traits with a traceable transmission line, plus an early isnād-verified basis for the Bāʾiyya verse itself."],
 ["Qumran 4Q375 Frag. 1 i","1 Maccabees 4:46; 14:41–44","Deuteronomy 13 / 18"],
 [],
 {facts:[
   ["Genre of 4Q375","Legal procedure, not named prediction"],
   ["1 Macc 4.46","Literal Jerusalem altar stones"],
   ["Procedural Gap","Priests/Urim vs. Meccan boycott"],
   ["Solid Core","Tribe steps in + 'faithful prophet'"]
  ],
  visual:{kind:'compare',
   left:{title:"Overstated Claims (Drop)",items:["'4Q375 predicts Muḥammad by name'","'Hidden laws = Meccan parchment opened'","'7 of 8 steps identical; cave seals secrecy'","'Bukhārī Lāmiyya authenticates every Bāʾiyya line'"]},
   right:{title:"Defensible Synthesis (Use)",items:["Pre-Islamic scroll links clan defense to nāḇîʾ neʾemān","Clan pact independently anchored in al-Umm, Bukhārī 3140, Abū Dāwūd 2980","Boycott Bāʾiyya explicitly pairs 'prophet like Moses' + refusal to surrender","Early adversary reports (al-Naḍr, Abū Sufyān) + Sebeos (660s) confirm profile"]}}}
),{
 optWho:'Watch out · if they say',
 optLabel:'4Q375 is only a Deuteronomy-style test for an accused prophet, and 1 Maccabees 4:46 is just about altar stones!',
 theyWho:'Watch out · if they say',
 who:'Calibrate & hold the strong core'
});

card(PR+'qumran-deut-13-faithful-prophet',{
 title:"Qumran 4Q375 & Deut 13: The 'faithful prophet' & clan protection",
 k:"Prophecies · Qumran 4Q375 · Sīra",
 blur:"Pre-Islamic Qumran scroll 4Q375 expects an accused prophet's tribe to shield him as 'righteous and faithful'—matched by four independent Sīra, legal & Christian lines.",
 claim:"The Qumran 'faithful prophet' text (4Q375) and 1 Maccabees have no meaningful parallel to early Islamic history, and the Meccan clan defense rests only on late miracle legends.",
 tree:P(N(QM13,
  "4Q375 has nothing to do with Muḥammad ﷺ—at best the Meccan boycott is a late miracle story about termites eating a parchment, and Abū Ṭālib never treated him as a prophet like Moses.",
  "Updated source research replaces reliance on the termite story with four verified historical lines (A–D). While 4Q375 is a legal procedure rather than a named prediction, its core social structure—a threatened prophet shielded from death by his own tribe declaring 'he is righteous; a faithful prophet is he' (nāḇîʾ neʾemān)—converges tightly with Banū Hāshim and Banū l-Muṭṭalib's boycott defense, early legal memory (al-Shāfiʿī, Bukhārī 3140, Abū Dāwūd 2980), adversary testimonies (al-Naḍr, Abū Sufyān), and the 660s Armenian witness Sebeos.",
  "Four verified evidence lines linking 4Q375 & early Islam",
  ["A. Clan prophet declaration (Ibn Isḥāq / Ibn Hishām): In the Bāʾiyya boycott poem immediately following the retreat of Banū Hāshim and Banū l-Muṭṭalib into the Shiʿb, Abū Ṭālib's clan links non-surrender directly to a Moses-prophecy: 'Have you not learned that we found Muḥammad to be a prophet like Moses, inscribed in the first scriptures... By the Lord of the House, we will not hand over Aḥmad.' This supplies explicit nabiyyan ('prophet') alongside truthfulness (caveat: Bāʾiyya differs from Bukhārī's Lāmiyya; its attribution needs separate isnād evaluation).",
   "B. Legal memory of 'People of the Shiʿb' (al-Umm & Bukhārī 3140): Independently of miracle stories, al-Shāfiʿī (d. 204 AH, al-Umm) defines those barred from zakāt as ahl al-shiʿb ('lineal descendants of Banū Hāshim and Banū l-Muṭṭalib'); Bukhārī 3140 records 'Banū l-Muṭṭalib and Banū Hāshim are one thing' (excluding Banū ʿAbd Shams and Banū Nawfal from khums); and Abū Dāwūd 2980 (graded ṣaḥīḥ by al-Albānī) states 'We and Banū l-Muṭṭalib do not separate in Jāhiliyya or in Islam' (noting shared al-Zuhrī/Jubayr nodes).",
   "C. Adversary witnesses to ṣidq & amāna: Ibn Isḥāq preserves the enemy al-Naḍr b. al-Ḥārith testifying before Quraysh that Muḥammad ﷺ was 'the most truthful of you in speech and greatest in trustworthiness' (ṣidq & amāna; noting Heb. ṣaddīq means 'righteous'), and Bukhārī 7 records Abū Sufyān admitting to Heraclius that his opponents never accused him of lying prior to prophethood.",
   "D. Early Christian outside witness (Sebeos, c. 660s CE): Armenian History ch. 42 §§5–6 describes 'Mahmet' as an Ishmaelite merchant preaching Abraham and Moses, uniting his people, promulgating laws including a ban on lying, and acting 'as if by God's command'—an early external anchor for the Abrahamic lawgiver profile (though not attesting al-Amīn, the boycott, or 1 Maccabees)."],
  ["Qumran 4Q375 Frag. 1 i","1 Maccabees 4:46; 14:41","Ibn Hishām (Ibn Isḥāq); al-Shāfiʿī, al-Umm","Ṣaḥīḥ al-Bukhārī 7, 3140; Abū Dāwūd 2980","Sebeos, Armenian History ch. 42 §§5–6"],
  [qmTrap],
  {facts:[
    ["4Q375 Phrase","kī ṣaddīq hūʾ nāḇîʾ neʾemān hūʾ"],
    ["Clan Legal Pact","ahl al-shiʿb (al-Umm, Bukhārī 3140)"],
    ["Adversary Praise","al-Naḍr (ṣidq/amāna) & Abū Sufyān"],
    ["Outside Witness","Sebeos (660s): Moses/Abraham & no-lying"]
   ],
   quotes:[
    {by:"Qumran 4Q375, Fragment 1 col. i",en:"For he is righteous; a faithful prophet is he (kī ṣaddīq hūʾ nāḇîʾ neʾemān hūʾ)... he shall not be put to death.",ref:"Dead Sea Scrolls 4Q375 1 i"},
    {by:"Boycott Bāʾiyya (Ibn Isḥāq via Ibn Hishām)",en:"Have you not learned that we found Muḥammad to be a prophet like Moses, inscribed in the first scriptures?... By the Lord of the House, we will not surrender Aḥmad.",ref:"Ibn Hishām, al-Sīra al-Nabawiyya"}
   ],
   shots:[
    S('pdf4-qumran-dtn13-p1.jpg','Qumran 4Q375 / Deut 13 dossier (Averroes #qumran-dtn-13): 4 new evidence lines (Bāʾiyya, ahl al-shiʿb, adversaries, Sebeos) & calibration (p. 1).')
   ]}),{
  who:'Opening move',
  forkTitle:'Watch out · if they press the limits',
  forkSub:'See how honest calibration separates inflated claims from the defensible Qumran–Sīra convergence'
 }),
 sum:"Without relying on the termite miracle or claiming a named prediction, Qumran 4Q375's pre-Islamic pattern—a threatened prophet shielded from death by his own tribe proclaiming him 'righteous and faithful'—matches Banū Hāshim/Banū l-Muṭṭalib's boycott protection, early Islamic law (al-Umm, Bukhārī 3140, Abū Dāwūd 2980), adversary testimonies, and Sebeos."});

/* ============================================================================
   4. NEW: christianity/bible/contradictions/heaven-ascension-contradiction
      (#himmel-widerspruch)
   ============================================================================ */
const HML=AV('himmel-widerspruch','1396124141115019298');
const hmlTrap1=P(N(HML,
 "In John 3:13, anabainō means ascending by one's own power—whereas Enoch and Elijah were passively 'taken up' by God (Apologetics Press 2021)!",
 "That semantic invention is absent from the Greek text, rejected by C. H. Dodd as 'a harmonistic invention,' and boomerangs directly onto Jesus himself: in Acts 1:9 Jesus did not ascend under his own autonomous power either, but 'was lifted up' (epērthē, passive!) and taken by a cloud—using the exact passive mode as Elijah (LXX 2 Kgs 2:11 anelēmphthē = Acts 1:11 analēmphtheis!).",
 "Rebutting the 'active own-power vs. passive taken-up' dodge",
 ["1. Zero restriction in John 3.13: The Greek uses the absolute negative quantifier oudeis ('no one') with zero qualifying phrase such as 'by his own power' or 'without God's help.'",
  "2. Identical LXX & NT ascension vocabulary: LXX 2 Kings 2:11 reads kai anelēmphthē Eliou... hōs eis ton ouranon ('Elijah was taken up into heaven')—using the exact same verb (analambanō) that Acts 1:11 applies to Jesus (ho analēmphtheis eis ton ouranon)! Moreover, Hebrew 2 Kings 2:11 uses wayyaʿal (from ʿālāh, 'to go up/ascend'), the direct semantic counterpart to Greek anabainō.",
  "3. Jesus's own ascension was passive (Acts 1.9): Acts 1:9 states Jesus epērthē ('was lifted up,' passive) and a cloud took him from their sight—showing Jesus was passively carried up just like Enoch and Elijah.",
  "4. Scholarly verdict (C. H. Dodd, 1953): In The Interpretation of the Fourth Gospel (p. 305), Dodd explicitly dismisses this defense: 'The distinction between \"ascending by one's own power\" and \"being taken up\" is not supported by the Greek text and appears to be a harmonistic invention.'"],
 ["John 3:13; Acts 1:9, 11","2 Kings 2:11 (MT & LXX)","C. H. Dodd, The Interpretation of the Fourth Gospel (1953), p. 305"],
 [],
 {facts:[
   ["John 3:13 Quantifier","oudeis ('no one', unconditional)"],
   ["Acts 1:9 Verb","epērthē (passive 'was lifted up')"],
   ["Shared LXX/NT Verb","analambanō (2 Kgs 2:11 = Acts 1:11)"],
   ["C. H. Dodd (1953)","'A harmonistic invention'"]
  ],
  quotes:[
   {by:"C. H. Dodd (1953)",en:"The distinction between 'ascending by one's own power' and 'being taken up' is not supported by the Greek text and appears to be a harmonistic invention.",ref:"The Interpretation of the Fourth Gospel, p. 305"}
  ]}
),{
 optWho:'Watch out · if they say',
 optLabel:'John 3:13 means no one ascended by their own power—Enoch and Elijah were passively taken up by God!',
 theyWho:'Watch out · if they say',
 who:'Counter with Acts 1:9 & Dodd'
});

const hmlTrap2=P(N(HML,
 "The Bible distinguishes three heavens (atmosphere, outer space, God's throne)—Elijah only went into the atmospheric sky (LearnTheBible.org), and Enoch went to paradise, not God's throne!",
 "2 Kings 2:11 uses hashamayim—the exact same Hebrew word as 'In the beginning God created the heavens' (Gen 1:1) and 'Heaven is My throne' (Isa 66:1)—with a fiery chariot, fiery horses, and 50 prophets searching three days without finding a body. Worse, the New Testament itself confirms Enoch was taken up 'so that he should not see death' (Heb 11:5) and shows Elijah appearing in glory at the Transfiguration (Matt 17:1–3; Luke 9:30–31).",
 "Rebutting the 'three heavens / atmosphere' theory & NT confirmations",
 ["1. Same word hashamayim: 2 Kings 2:11 uses הַשָּׁמַיִם (hashamayim)—identical to Gen 1:1, Ps 115:16 ('the heavens are the LORD's heavens'), and Isa 66:1 ('heaven is My throne'). Zero textual clue limits Elijah's ascent to earth's atmosphere.",
  "2. Supernatural chariot & three-day search (2 Kgs 2.11, 16–17): God sends a chariot of fire and horses of fire—symbols of divine presence (Ps 68:18; Zech 6:1–8)—and fifty prophets search for three days and find no corpse. Why dispatch fiery heavenly chariots merely to drop someone in the atmosphere?",
  "3. Hebrews 11.5 confirms Enoch's translation: 'By faith Enoch was taken up (metetethē, matching LXX Gen 5:24) so that he should not see death (tou mē idein thanaton), and he was not found.' C. K. Barrett (The Gospel According to St. John, 2nd ed. 1978, p. 213) confirms: 'Hebrews 11:5 makes it quite clear that Enoch did not die but was taken up alive. The author of Hebrews understands Genesis 5:24 as a translation to heaven.' Jewish sources agree (Sirach 44:16; Wisdom 4:10–11; 1 Enoch; Philo, Quaest. Gen. I:86).",
  "4. Transfiguration & Paul (Matt 17.1–3; Luke 9.30–31; 2 Cor 12.2–4): Moses and Elijah appear 'in glory' with Jesus—presupposing, as Rudolf Bultmann (Das Evangelium des Johannes, 1950, p. 119) notes, that both are in heaven with God. And Paul describes a man 'caught up (hērpagē) to the third heaven / Paradise' (2 Cor 12:2–4; cf. 1 Thess 4:17)."],
 ["2 Kings 2:11, 16–17; Gen 1:1; 5:24; Ps 115:16; Isa 66:1","Hebrews 11:5; Matt 17:1–3; Luke 9:30–31; 2 Cor 12:2–4","Sirach 44:16; Wisdom 4:10–11; Philo, Quaest. Gen. I:86","C. K. Barrett (1978, p. 213); Rudolf Bultmann (1950, p. 119)"],
 [],
 {facts:[
   ["Hebrew Term","hashamayim = same as Isa 66:1 throne"],
   ["Hebrews 11:5","Enoch taken up alive (not to see death)"],
   ["Transfiguration","Elijah appears in glory from heaven"],
   ["2 Cor 12:2–4","Caught up (hērpagē) to third heaven"]
  ],
  quotes:[
   {by:"C. K. Barrett (1978)",en:"Hebrews 11:5 makes it quite clear that Enoch did not die but was taken up alive. The author of Hebrews understands Genesis 5:24 as a translation to heaven.",ref:"The Gospel According to St. John, 2nd ed., p. 213"}
  ]}
),{
 optWho:'Watch out · if they say',
 optLabel:'Elijah only went into the atmospheric sky (first heaven), and Enoch wasn’t taken into God’s heaven!',
 theyWho:'Watch out · if they say',
 who:'Counter with hashamayim & Heb 11:5'
});

card(CT+'heaven-ascension-contradiction',{
 title:"John 3:13 vs. Enoch & Elijah: Has anyone ascended to heaven?",
 k:"Contradictions · John 3:13 · Ascent",
 blur:"John 3:13 declares absolutely that 'no one (oudeis) has ascended into heaven' except Jesus—directly contradicting Genesis 5:24, 2 Kings 2:11, and Hebrews 11:5.",
 claim:"John 3:13 does not contradict the Old Testament accounts of Enoch and Elijah.",
 tree:P(N(HML,
  "There is no contradiction between John 3:13 ('No one has ascended into heaven except the Son of Man') and the Old Testament accounts of Enoch and Elijah.",
  "In the oldest critical Greek text (NA28: P66, P75, Sinaiticus, Vaticanus), John 3:13 states unconditionally with the negative quantifier oudeis ('no one') and perfect tense anabebēken ('has ascended and remains there') that nobody has gone up into God's heaven (eis ton ouranon, v. 12 'heavenly things') except the Son of Man—clashing head-on with Enoch (Gen 5:24; Heb 11:5) and Elijah (2 Kgs 2:11).",
  "Critical Greek text (John 3:13) & the Old Testament counter-examples",
  ["1. Critical Greek text (Nestle-Aland 28): kai oudeis anabebēken eis ton ouranon ei mē ho ek tou ouranou katabas, ho huios tou anthrōpou ('And no one has ascended into heaven except the one who descended from heaven, the Son of Man'). Notice four major German/English versions (Luther 2017, Einheitsübersetzung 2016, Elberfelder 2006, Schlachter 2000, KJV) all preserve the absolute 'no one.'",
   "2. Grammar & textual criticism: oudeis is an unrestricted negative ('no one at any time'); anabebēken (perfect active indicative) expresses completed ascent with continuing resultant state—Raymond E. Brown (Anchor Bible 29, 1966, p. 145): 'no one has gone up to heaven and remained there to gain permanent knowledge of heavenly things.' Crucially, P66, P75, Sinaiticus, and Vaticanus omit 'who is in heaven' (ho ōn en tō ouranō), which Bruce Metzger (Textual Commentary, 2nd ed. 1994, p. 176) identifies as a later scribal addition to heighten Christology.",
   "3. Enoch (Gen 5.24 & LXX): wayyithallekh Ḥanōkh et-hāʾElōhīm wᵉʾēnennū kī-lāqaḥ ʾōtō Elōhīm ('Enoch walked with God, and he was no more, for God took him [lāqaḥ]'; LXX metetethē, 'God translated/transferred him').",
   "4. Elijah (2 Kgs 2.11 & LXX): wayyaʿal Eliyahu basseʿārah hashamayim ('Elijah went up in a whirlwind into heaven'), using the same root as Gen 1:1 and LXX analambanō—confirmed by fiery horses/chariots and 50 prophets searching three days without finding a body (2 Kgs 2:16–17)."],
  ["John 3:13 (NA28: P66, P75, ℵ, B)","Genesis 5:24 (MT & LXX); 2 Kings 2:11, 16–17","Raymond E. Brown, Anchor Bible 29 (1966), p. 145","Bruce M. Metzger, Textual Commentary (1994), p. 176"],
  [hmlTrap1,hmlTrap2],
  {facts:[
    ["Greek Verb","anabebēken (perfect: ascended & remains)"],
    ["Best MSS","P66, P75, ℵ, B omit 'who is in heaven'"],
    ["Enoch Witness","Gen 5:24 + Heb 11:5 + Philo + Sirach 44:16"],
    ["Elijah Witness","2 Kgs 2:11 + LXX analambanō (= Acts 1:11)"]
   ],
   quotes:[
    {by:"Raymond E. Brown (Anchor Bible 29, 1966)",en:"The perfect tense of 'ascended' (anabebēken) emphasizes the resultant state: no one has gone up to heaven and remained there to gain permanent knowledge of heavenly things.",ref:"The Gospel According to John I–XII, p. 145"},
    {by:"Bruce M. Metzger (Textual Commentary, 1994)",en:"The words 'who is in heaven' are absent from the oldest and best manuscripts. The Committee regarded the phrase as a scribal addition made to heighten the Christological emphasis.",ref:"A Textual Commentary on the Greek New Testament, 2nd ed., p. 176"}
   ],
   visual:{kind:'compare',
    left:{title:"John 3:13 (Johannine Christology)",items:["'No one (oudeis) has ascended into heaven'","Perfect tense: went up & remained there","Context v. 12: heavenly things (epourania)","Exclusivist polemic for Jesus alone"]},
    right:{title:"OT, Jewish & NT Counter-Witnesses",items:["Enoch taken alive by God (Gen 5:24; Heb 11:5)","Elijah ascended in whirlwind to hashamayim (2 Kgs 2:11)","Elijah appears in glory at Transfiguration (Matt 17:1–3)","Paul caught up to 3rd heaven / Paradise (2 Cor 12:2–4)"]}},
   shots:[
    S('pdf4-himmel-widerspruch-p1.jpg','John 3:13 vs. Enoch & Elijah dossier (Averroes #himmel-widerspruch): NA28 text, Brown/Metzger, Heb 11:5 & apologetic rebuttals (p. 1).')
   ]}),{
  who:'Opening move',
  forkTitle:'Two common Christian harmonizations',
  forkSub:'Both the semantic "own power" dodge and the "three-heavens atmosphere" excuse break down on the biblical Greek and Hebrew'
 }),
 sum:"John 3:13's categorical statement that 'no one has ascended into heaven' except Jesus (reinforced by the early omission of 'who is in heaven' in P66/P75/ℵ/B) flatly contradicts the biblical accounts of Enoch (Gen 5:24; Heb 11:5) and Elijah (2 Kgs 2:11; Matt 17:3), and standard semantic or 'three-heavens' rescues are rejected even by leading NT scholars (Dodd, Barrett, Brown)."});

/* ============================================================================
   5. NEW: christianity/bible/contradictions/yhwh-name-exodus-6-3
      (#jhwe-name-nicht-offenbart)
   ============================================================================ */
const JHW=AV('jhwe-name-nicht-offenbart','1525320728654778470');
const jhwTrap1=P(N(JHW,
 "Either Moses/a later narrator used the name YHWH anachronistically in Genesis, or Exodus 6:3 means 'not FULLY known' (as the NIV translates)!",
 "Neither escape removes the contradiction from the text. First, Genesis doesn't merely use 'YHWH' in the narrator's voice—Abraham, Isaac, and Jacob themselves invoke YHWH in prayer, name places YHWH-jir'eh, and speak 'YHWH' in direct speech (forging patriarchal quotes if retroactive!). Second, the Hebrew of Exodus 6:3 contains zero word for 'fully'—the NIV added it solely to soften the clash, which NRSVUE and NET rightly omit.",
 "Refuting 'retroactive narrator' & the NIV 'fully' interpolation",
 ["1. Retroactive narrator fails on direct speech & place-names: Even if a later narrator wrote 'YHWH', Genesis explicitly attributes the name to the patriarchs' own mouths and actions: Abraham builds an altar and 'calls on the name of YHWH' (Gen 12:8) and names a site 'YHWH-jir'eh' (Gen 22:14); Isaac calls on YHWH's name (Gen 26:25); Jacob exclaims directly 'Surely YHWH is in this place' (Gen 28:16); and Sarah, Leah, Rachel, and even Laban use it (TheTorah). Saving consistency here requires admitting the author altered the patriarchs' historical words and prayers anachronistically.",
  "2. The 'not FULLY known' interpolation (NIV): NIV inserts 'fully' ('by my name the LORD I did not make myself fully known'), yet Hebrew ū-šᵉmī YHWH lō nōdaʿtī lāhem contains no adverb like 'fully', 'completely', or 'in its full meaning.' NRSVUE and NET translate accurately without 'fully.' Changing 'I was not known' to 'I was not fully known' alters the proposition itself."],
 ["Genesis 12:8; 22:14; 26:25; 28:16","Exodus 6:3 (MT, NIV vs. NRSVUE, NET)","TheTorah.com"],
 [],
 {facts:[
   ["Patriarchal Speech","Gen 12:8, 22:14, 26:25, 28:16"],
   ["NIV Insertion","'fully' does not exist in Hebrew"],
   ["Accurate Versions","NRSVUE & NET omit 'fully'"],
   ["Anachronism Cost","Admits patriarchal words were altered"]
  ]}
),{
 optWho:'Watch out · if they say',
 optLabel:'The narrator used YHWH retroactively in Genesis, or Exodus 6:3 means not FULLY known (NIV)!',
 theyWho:'Watch out · if they say',
 who:'Counter & expose the interpolation'
});

const jhwTrap2=P(N(JHW,
 "In Hebrew, yadaʿ ('to know') means deep experiential knowledge of God's covenant character (or El Shaddai vs. YHWH as modes of action), OR Exodus 6:3 is a rhetorical question ('Was I not known?')!",
 "All three proposals add unspoken theories to evade the plain contrast between two divine names ('as El Shaddai... by My name YHWH'). While experiential yadaʿ is the strongest traditional harmonization, Exodus 6:3 specifically contrasts two names—not character vs. sound—Genesis already shows YHWH speaking, promising, and making covenants with the patriarchs, and the Septuagint, Vulgate, and virtually all modern translations reject reading 6:3 as a rhetorical question.",
 "Refuting 'experiential yadaʿ', 'action-mode', and 'rhetorical question'",
 ["1. Experiential knowledge (yadaʿ) — strongest try, yet textually weaker: While Hebrew yādaʿ can express relational experience, Exodus 6:3 does not say 'they did not truly know Me,' but specifically sets up a name-to-name contrast: 'I appeared to Abraham, Isaac, and Jacob as El Shaddai, but by My name YHWH I was not known to them.' Even medieval Jewish commentators developed competing versions precisely because the plain wording resists harmonization (TheTorah).",
  "2. Rhetorical question ('Was I not known?'): Reading 6:3 as a question inserts an interrogative punctuation mark lacking textual support. Crucially, the earliest ancient versions read it as a flat negation—Septuagint: 'My name Lord I did not reveal to them' (ouk edēlōsa); Vulgate: 'My name Adonai I did not show to them' (non indicavi)—alongside the vast majority of modern translations (StudyLight.org).",
  "3. Modes of divine action (El Shaddai vs. YHWH): Exodus 6:3 never defines these name-roles (El Shaddai = protection/fertility vs. YHWH = liberation/land); Genesis already depicts YHWH appearing, speaking, promising, and making covenants with the patriarchs. Historical-critical scholarship (Priestly source in Exod 6:2–3 vs. non-P traditions in Genesis) offers the simplest explanation of how two contradictory traditions ended up side by side in the Torah—explaining the contradiction's origin without removing it from the final text."],
 ["Exodus 6:2–3 (MT, LXX, Vulgate)","TheTorah.com (P vs. non-P sources)","StudyLight.org (translation survey)"],
 [],
 {facts:[
   ["Contrast in 6:3","El Shaddai (name 1) vs. YHWH (name 2)"],
   ["LXX & Vulgate","Both read a flat negation, not a question"],
   ["Source Criticism","Priestly Exod 6 vs. non-P Genesis"],
   ["Honest Verdict","Harmonizations require unstated premises"]
  ]}
),{
 optWho:'Watch out · if they say',
 optLabel:'Yadaʿ means experiential character-knowledge, or Exodus 6:3 is a rhetorical question!',
 theyWho:'Watch out · if they say',
 who:'Counter with LXX, Vulgate & contrast'
});

card(CT+'yhwh-name-exodus-6-3',{
 title:"Exodus 6:3 vs. Genesis: Was the name YHWH known to the patriarchs?",
 k:"Contradictions · Exodus 6:3 · Genesis",
 blur:"Genesis shows Abraham, Isaac, and Jacob calling on YHWH by name, yet Exodus 6:3 declares God was 'not known' to them by His name YHWH.",
 claim:"There is no contradiction between Genesis's use of the name YHWH and Exodus 6:3.",
 tree:P(N(JHW,
  "Exodus 6:3 doesn't contradict Genesis—either the patriarchs only heard the sound without its full meaning, or the narrator projected YHWH backward.",
  "On the level of the finished biblical text, the ordinary reading is a direct contradiction: Genesis depicts Abraham, Isaac, Jacob, Sarah, Leah, Rachel, and Laban knowing and invoking the name YHWH (calling on His name, naming YHWH-jir'eh, speaking it directly), whereas Exodus 6:2–3 explicitly states u-šᵉmī YHWH lō nōdaʿtī lāhem ('by My name YHWH I was not known to them'). Every harmonization requires importing unstated assumptions—altered patriarchal quotes, an absent adverb ('fully'), a redefinition of 'name', or an unsupported question mark.",
  "The plain-text contradiction between Genesis and Exodus 6:3",
  ["1. Statement A (Genesis — patriarchs know and use YHWH): Gen 12:8 ('Abraham built an altar to YHWH and called upon the name of YHWH'), Gen 22:14 (names the site YHWH-jir'eh, 'YHWH will provide'), Gen 26:25 (Isaac calls on the name of YHWH), Gen 28:16 (Jacob speaks directly: 'Surely YHWH is in this place'), alongside Sarah, Leah, Rachel, and Laban (BibleGateway; TheTorah).",
   "2. Statement B (Exodus 6.2–3 — unknown by that name): 'I am YHWH. I appeared to Abraham, to Isaac, and to Jacob as El Shaddai, but by My name YHWH (וּשְׁמִי יְהוָה לֹא נוֹדַעְתִּי לָהֶם, u-šᵉmī YHWH lō nōdaʿtī lāhem) I was not known to them.'",
   "3. Logical structure: If both texts refer to the same name and the same three patriarchs, they cannot both be true in their ordinary sense at the same time—making it at minimum a sharp internal tension on the level of the canonical final text.",
   "4. Precise conclusion: While harmonizations are not logically impossible, every single one introduces an assumption absent from the verse itself (retroactive rewriting of patriarchal speech, the unprinted word 'fully', a specialized experiential sense of yadaʿ despite the name-contrast, or an unlikely rhetorical question rejected by LXX and Vulgate)."],
  ["Genesis 12:8; 22:14; 26:25; 28:16","Exodus 6:2–3 (MT, LXX, Vulgate)","BibleGateway; TheTorah.com; StudyLight.org"],
  [jhwTrap1,jhwTrap2],
  {facts:[
    ["Genesis Data","Abraham, Isaac & Jacob invoke 'YHWH'"],
    ["Exodus 6:3 Heb.","ū-šᵉmī YHWH lō nōdaʿtī lāhem"],
    ["Ancient Witnesses","LXX & Vulgate read flat negation"],
    ["Critical View","P source (Exod 6) vs. non-P (Gen)"]
   ],
   quotes:[
    {by:"Exodus 6:2–3 (Hebrew text)",en:"I appeared to Abraham, to Isaac, and to Jacob as El Shaddai, but by My name YHWH (u-šᵉmī YHWH lō nōdaʿtī lāhem) I was not known to them.",ref:"Exodus 6:3"}
   ],
   visual:{kind:'compare',
    left:{title:"Genesis (Patriarchs Know YHWH)",items:["Gen 12:8 — Abraham calls on YHWH's name","Gen 22:14 — Abraham names place YHWH-jir'eh","Gen 26:25 — Isaac calls on YHWH's name","Gen 28:16 — Jacob speaks 'YHWH' in direct speech"]},
    right:{title:"Exodus 6:3 (YHWH Unknown)",items:["God: 'I appeared as El Shaddai'","'By My name YHWH I was NOT known to them'","LXX & Vulgate both translate as negative statement","Requires external assumptions to harmonize"]}},
   shots:[
    S('pdf4-jhwe-name-p1.jpg','Exodus 6:3 vs. Genesis dossier (Averroes #jhwe-name-nicht-offenbart): Genesis passages, Hebrew text & 5 apologetic rebuttals (p. 1).')
   ]}),{
  who:'Opening move',
  forkTitle:'How apologists try to escape the clash',
  forkSub:'See all 5 standard harmonizations tested—and why the final text still stands in contradiction'
 }),
 sum:"Genesis repeatedly depicts Abraham, Isaac, and Jacob invoking YHWH by name, while Exodus 6:3 states God was not known to them under that name—leaving harmonizations dependent on unprinted words ('fully'), anachronistic editing of patriarchal speech, or strained readings rejected by the Septuagint and Vulgate."});

/* ============================================================================
   6. NEW: christianity/jesus/jesus-baptism-sin-mark-1
      (#jesus-sünde-taufen-jordan-markus)
   ============================================================================ */
const JTF=AV('jesus-sünde-taufen-jordan-markus','1533145627746238494');
const jtfBranch=P(N(JTF,
 "Mark never says Jesus confessed personal sins—and Matthew 3:14–15 simply fills in the true historical dialogue showing Jesus did it only to 'fulfill all righteousness'!",
 "Leading New Testament scholars—across critical and evangelical lines alike—recognize Matthew 3:14–15 as redactional theology inserted precisely because Mark's stark account posed an acute Christological embarrassment. John P. Meier traces a clear four-stage apologetic trajectory (Mark silent → Matthew inserts dialogue → Luke obscures the baptizer → John omits the baptism altogether), while Davies & Allison highlight Matthew's own redactional vocabulary.",
 "Redactional trajectory across the 4 Gospels & NT scholarly consensus",
 ["1. John P. Meier (historical-Jesus scholar): In A Marginal Jew (Vol. 1, Doubleday 1991, pp. 168–169), Meier notes Mark recounts the baptism with no explanation why the superior sinless one submits to a sinners' baptism, then tracks the progressive softening across the Gospels: Matthew inserts a defensive dialogue (3:14–15), Luke obscures who baptized Jesus (Luke 3:21), and John omits Jesus's baptism entirely.",
  "2. R. T. France (evangelical Mark commentator): In The Gospel of Mark (Eerdmans 2002, p. 67), France confirms that Mark shows zero dogmatic embarrassment in reporting that Jesus presented himself for a baptisma metanoias eis aphesin hamartiōn ('baptism of repentance for the forgiveness of sins').",
  "3. W. D. Davies & Dale C. Allison (Matthew commentary): In A Critical and Exegetical Commentary on Matthew (Vol. 1, T&T Clark 1988, p. 323), they show 3:14–15 'is full of redactional vocabulary. It has a very plausible origin in a specifically Christian difficulty'—and note John's opening remark already presupposes developed Christology.",
  "4. Robert L. Webb (Baptist/evangelical NT scholar): In John the Baptizer and Prophet (Sheffield Academic Press 1991, p. 58), Webb sums up the two-pronged crisis Mark created: 'Receiving John's baptism... brought into question the belief in Jesus' sinlessness, or else... suggested that Jesus was inferior to John.'",
  "5. Balanced debate takeaway: Do not overclaim 'Mark explicitly says Jesus confessed personal sins.' The airtight, scholarly argument is sharper: Mark links Jesus without comment to a baptism he just defined as repentance for forgiveness of sins, creating the exact Christological crisis Matthew had to edit away—disproving the claim that the Gospels are unaltered, independent eyewitness transcripts."],
 ["John P. Meier, A Marginal Jew 1 (1991), pp. 168–169","R. T. France, Gospel of Mark (2002), p. 67","Davies & Allison, Gospel According to Saint Matthew 1 (1988), p. 323","Robert L. Webb, John the Baptizer and Prophet (1991), p. 58"],
 [],
 {facts:[
   ["4-Gospel Arc","Mark silent → Matt edits → Luke blurs → John omits"],
   ["R. T. France","Mark betrays no doctrinal embarrassment"],
   ["Davies & Allison","Matt 3:14–15 full of redactional vocabulary"],
   ["Robert L. Webb","Threatened sinlessness & implied inferiority"]
  ],
  quotes:[
   {by:"John P. Meier (A Marginal Jew, Vol. 1, pp. 168–169)",en:"Mark recounts the event with no theological explanation as to why the superior sinless one submits to a baptism meant for sinners.",ref:"Doubleday, 1991, pp. 168–169"},
   {by:"W. D. Davies & Dale C. Allison (Matthew, Vol. 1, p. 323)",en:"3.14–15 is full of redactional vocabulary. It has a very plausible origin in a specifically Christian difficulty.",ref:"T&T Clark, 1988, p. 323"}
  ],
  visual:{kind:'steps',items:[
    ["Mark 1:4, 9 (Earliest)","Defines John's baptism as 'repentance for forgiveness of sins'—then Jesus is baptized with zero comment."],
    ["Matthew 3:14–15","Inserts redactional dialogue ('I need to be baptized by you... fulfill all righteousness') to protect sinlessness & superiority."],
    ["Luke 3:21","Mentions the baptism passively in a subordinate clause after locking John in prison (3:19–20), obscuring the baptizer."],
    ["John 1:29–34","Omits the baptism of Jesus altogether, keeping only the Spirit descending."]
   ]}}
),{
 optWho:'If they say',
 optLabel:'Mark doesn’t say Jesus sinned, and Matthew 3:14–15 just preserves the real historical explanation!',
 theyWho:'They say',
 who:'Press the redactional trajectory'
});

card('christianity/jesus/jesus-baptism-sin-mark-1',{
 title:"Jesus's baptism in Mark 1:4–9 vs. Matthew 3:14–15's edit",
 k:"Jesus · Mark 1:4–9 · Redaction",
 blur:"Mark 1:4 defines John's baptism as 'repentance for the forgiveness of sins' and has Jesus undergo it without comment—forcing Matthew to insert an apologetic dialogue.",
 claim:"The four Gospels are unaltered, independent historical reports and Jesus's baptism never posed any theological difficulty.",
 tree:P(N(JTF,
  "Jesus's baptism by John only showed solidarity with Israel—Matthew 3:14–15 proves there was never any problem with Jesus's sinlessness.",
  "Mark 1:4 explicitly defines John's baptism as 'a baptism of repentance for the forgiveness of sins' (baptisma metanoias eis aphesin hamartiōn), and Mark 1:9 immediately has Jesus undergo it in the Jordan with zero theological explanation. Matthew copies the scene but inserts a redactional dialogue absent from Mark (Matt 3:14–15) specifically to subordinate John and resolve the resulting Christological crisis.",
  "Mark 1:4–9 without explanation vs. Matthew 3:14–15's apologetic insertion",
  ["1. Mark 1.4 & 1.9 side by side: Mark 1:4 states John preached 'a baptism of repentance for the forgiveness of sins' (βάπτισμα μετανοίας εἰς ἄφεσιν ἁμαρτιῶν). Five verses later (Mark 1:9), Jesus comes from Nazareth and is baptized by John in the Jordan—with zero caveat, disclaimer, or redefinition of what that baptism meant for Jesus.",
   "2. Matthew 3.14–15's unique insertion: Copying Mark's baptism narrative, Matthew adds a dialogue found in no other Gospel: John tries to stop Jesus ('I need to be baptized by you, and do you come to me?') and Jesus replies ('Let it be so now, for thus it is fitting for us to fulfill all righteousness').",
   "3. Why this proves theological redaction: As belief in Jesus as sinless and superior to John solidified, Mark's uncommented narrative became untenable. Rather than merely passing along neutral eyewitness data, later Evangelists actively edited inherited stories to solve doctrinal problems."],
  ["Mark 1:4, 9","Matthew 3:13–15","Luke 3:19–21; John 1:29–34"],
  [jtfBranch],
  {facts:[
    ["Mark 1:4 Greek","baptisma metanoias eis aphesin hamartiōn"],
    ["Mark 1:9","Zero theological explanation or disclaimer"],
    ["Matt 3:14–15","Unique apologetic dialogue absent in Mark"],
    ["Scholars Cited","Meier, France, Davies & Allison, Webb"]
   ],
   quotes:[
    {by:"R. T. France (evangelical commentator on Mark)",en:"Mark betrays no doctrinal embarrassment... nonetheless presented himself for a baptisma metanoias eis aphesin hamartiōn.",ref:"The Gospel of Mark: A Commentary on the Greek Text, Eerdmans 2002, p. 67"},
    {by:"Robert L. Webb",en:"Receiving John's baptism... brought into question the belief in Jesus' sinlessness, or else... suggested that Jesus was inferior to John.",ref:"John the Baptizer and Prophet, 1991, p. 58"}
   ],
   visual:{kind:'compare',
    left:{title:"Mark 1:4, 9 (Unedited Crisis)",items:["Defines John's rite: repentance for forgiveness of sins","Jesus immediately baptized in the Jordan","Zero dialogue from John objecting","Zero claim of 'fulfilling righteousness'"]},
    right:{title:"Matthew 3:14–15 (Apologetic Fix)",items:["Copies Mark's scene verbatim, then inserts dialogue","John tries to refuse: 'I need to be baptized by you'","Jesus reframes rite as 'fulfilling all righteousness'","Uses Matthew's own redactional vocabulary (Davies/Allison)"]}},
   shots:[
    S('pdf4-jesus-taufe-p1.jpg','Jesus’s baptism dossier (Averroes #jesus-sünde-taufen-jordan-markus): Mark 1:4–9 vs. Matt 3:14–15 & Meier/France/Davies-Allison/Webb (p. 1).')
   ]}),{
  who:'Opening move',
  forkTitle:'Follow the scholarly & Gospel trajectory',
  forkSub:'See how four leading NT scholars trace the Church’s progressive discomfort from Mark to John'
 }),
 sum:"Mark 1:4–9 reports Jesus undergoing a 'baptism of repentance for the forgiveness of sins' without comment, and Matthew 3:14–15's redactional dialogue—confirmed by Meier, France, Davies & Allison, and Webb—proves the Gospels underwent theological editing to shield Jesus's sinlessness and superiority."});

/* ============================================================================
   7. add(): christianity/islam-vs/d-dr-song-of-solomon (explainer, 2 cards)
      (#hohes-lied-5-16 — hohes-lied-1..4)
   ============================================================================ */
const HL4=AV('hohes-lied-5-16','1293451973810454540');

add('christianity/islam-vs/d-dr-song-of-solomon',N(HL4,
 "Song of Solomon 5:10–16 is just generic Hebrew love poetry, maḥamaddīm cannot be a proper name, and Dawah citations of midrashim, Mecca-balsam, or commentators are fabricated.",
 "A rigorous source-critical audit separates unverified claims from a rock-solid cumulative case: (a) Song 5:10–16 matches the Shamāʾil/Ḥilya portrait of Muḥammad ﷺ feature by feature (including the raised Seal of Prophethood and Ḥabīb/Khalīl titles); (b) gematria 92 converges independently across Gen 17:20 (al-Samawʾal, 12th c.) and maḥamaddīm while biblical proper names like Ephraim/Mizraim end in -īm; and (c) Kew/Catalogue of Life verify 'Balsam of Mecca' (Commiphora gileadensis), while Bamidbar Rabbah 2:3 (not Sifre 343) ties dāgūl mē-rᵉvāvāh to Sinai's bannered myriads.",
 "Full Dossier (1/2): Shamāʾil Portrait, Gematria 92 & Source-Critical Audit",
 ["Verse-by-verse Shamāʾil/Ḥilya match (Song 5.10–16): (5:10a) ṣaḥ wə-ʾādōm ('radiant white and ruddy') ↔ azhar al-lawn / abyaḍ mushrab bi-ḥumra (Bukhārī 3547–3548; Shamāʾil 7–8); (5:11a) ketem pāz head ↔ face shining like full moon (Bukhārī 3552, Muslim 2337); (5:11b) locks ↔ wavy hair between earlobes and shoulders, lā jaʿd wa-lā sabṭ (Bukhārī 3547, 5905–5906, Muslim 2338a; note shadīd sawād is secondary); (5:12) doves in milk ↔ adʿaj al-ʿaynayn, fī ʿaynayhi ḥumra, intense white/black contrast (Shamāʾil 7–8); (5:13a) spice-bed cheeks ↔ sweat sweeter than musk/ambergris (Muslim 2330–2332); (5:13b) dripping lips ↔ Jawāmiʿ al-Kalim (Bukhārī 2977, 7013) & light between teeth; (5:14a) gold-ringed hands ↔ silver seal ring (Bukhārī 5872–5878) & silk-soft hand (Muslim 2330); (5:14b) body inlaid with sapphires ↔ masrubah & raised pigeon-egg-sized Seal of Prophethood between shoulders (Muslim 2344–2345, Bukhārī 3541; noting Ibn Ḥajar Fatḥ 6/650 rejects words inscribed on it); (5:15) pillars & Lebanon ↔ gait ka-annamā yanḥaṭṭu min ṣabab & awe (hayba, Shamāʾil 7–8); (5:16a) sweet palate ↔ Deut 18:18, Qurʾān, and healing ʿAlī's eyes with saliva at Khaybar before handing him the banner (Bukhārī 4210, 3009, 3702); (5:16c) dōdī / rēʿī ('my beloved and my friend') ↔ Ḥabīb Allāh / Khalīl Allāh (Muslim 532: 'Allah took me as His khalīl as He took Ibrāhīm').",
  "Banners, 10,000 & Gematria 92: (a) dāgūl mē-rᵉvāvāh (5:10b) ↔ liwāʾ al-ḥamd (Tirmidhī 3148 ḥasan ṣaḥīḥ, Ibn Mājah 4308, sharing ḥ-m-d root) and Fath Makkah with 10,000 Companions (al-Ṭabarī IX p. 8: 10,000 Companions + 2,000 Meccans = 12,000 at Ḥunayn; Mubarakpuri p. 461), alongside the biblical rᵉvāvāh motif (Deut 33:2; Hab 3:3 tehillah; 1 Sam 18:7; Jude 14); (b) Gematria 92: מ-ח-מ-ד = 40+8+40+4 = 92 (matching Abjad محمد = 92) and Gen 17:20 bi-meʾōd meʾōd = 47+45 = 92, argued by Jewish mathematician-convert al-Samawʾal al-Maghribī (d. 1175 CE, Dict. of Scientific Biography); (c) -īm/-ayim proper names exist (Ephraim, Mizraim, Diblaim, Appaim, Chushim); shem/shemen wordplay (1:3) & Haggai 2:7 (chemdat / shalom) provide structural parallels while respecting LXX epithumia and grammatical critiques.",
  "Source-critical audit & corrections (what holds vs. what to drop): (1) Rabbinic link: NOT in Sifre Devarim 343 (which splits Deut 33:2 into 4 languages/nations without citing Song 5:10), but in Bamidbar Rabbah 2:3 (linking dāgūl mē-rᵉvāvāh to bannered Sinai angel-myriads via Ps 68:18—late midrash, post-12th c. redaction); (2) 'Balsam of Mecca' IS verified in Kew / Catalogue of Life / GBIF for Commiphora gileadensis (old synonyms Balsamea meccanensis; Ben-Yehoshua et al. 2012 trace origin to Sheba, though cultivated in Judea; baca Ps 84:6 = besem Song 6:2 = Mecca remains apologetic interpretation); (3) Jabal Salʿ in Medina is real (Bukhārī Kaʿb b. Mālik), yet Isa 42:11 'Sela' unanimously means Petra/Edom; (4) qibla on Song 6:1 (panah) is undocumented speculation; (5) Do NOT quote Longman, Hess, or Bloch on Dan 2 (unverified at original wording; Gill draws Dan 2 on 5:11 & military banner on 5:10); Rabbi Akiva (Mishna Yadayim 3:5, Sanhedrin 101a, Tosefta Sanh. 12:10) affirms the Song's canonical sanctity."],
 ["Shamāʾil al-Tirmidhī 7–8; Bukhārī 3541–3552, 4210, 5872–5906; Muslim 532, 2330–2345","al-Samawʾal al-Maghribī (Gen 17:20 = 92); Tirmidhī 3148; al-Ṭabarī IX p. 8","Bamidbar Rabbah 2:3 (correcting Sifre 343); Mishna Yadayim 3:5","Kew / Catalogue of Life (Commiphora gileadensis / Balsam of Mecca); Gill on Song 5:10–11"],
 [],
 {facts:[
   ["Gematria 92","m-ḥ-m-d = 92 & Gen 17:20 bi-meʾōd meʾōd = 92"],
   ["Biblical -īm Names","Ephraim, Mizraim, Diblaim, Appaim, Chushim"],
   ["Botany Verified","Kew: 'Balsam of Mecca' (Commiphora gileadensis)"],
   ["Midrash Audit","Bamidbar Rabbah 2:3 (via Ps 68:18), not Sifre 343"]
  ],
  quotes:[
   {by:"Rabbi Akiva (Mishna Yadayim 3:5)",en:"All the Scriptures are holy, but the Song of Songs is the Holy of Holies (qodesh qodashim).",ref:"Mishna Yadayim 3:5"}
  ],
  shots:[
   S('pdf4-hohes-lied-1-p1.jpg','Song of Solomon Dossier 1 (Averroes #hohes-lied-5-16): Song 5:10–16 vs. Shamāʾil, banners, gematria 92 & -īm names (p. 1).'),
   S('pdf4-hohes-lied-3-p1.jpg','Song of Solomon Source Audit (Averroes #hohes-lied-5-16): Bamidbar Rabbah 2:3 fix, Balsam of Mecca (Kew) & scholar-quote checks (p. 1).')
  ]}));

add('christianity/islam-vs/d-dr-song-of-solomon',N(HL4,
 "Christian commentary sees zero Arab-Islamic connection in the Song, and Song 5:2 ('I sleep, but my heart waketh') is only the bride speaking, not a prophetic state.",
 "Two further Averroes dossiers dismantle both claims using Protestant standard commentary (Keil & Delitzsch) and canonical ḥadīth + Rashi: (1) on Song 1:5, Franz Delitzsch expressly cites and endorses ('and rightly remarks') 10th-century Karaite Yefet ben Ali's replacement of Kedar with 'Ḳarysh' ('the powerful Arab tribe from which Muhammed sprung'), cites Qurʾān 38:30–33 on Solomon's horses, compares the Song to Yūsuf–Zulaikha, confirms šēm/šemen wordplay (1:3), and concedes 2,000 years of church/synagogue exegesis failed precisely on the head-to-foot waṣf passages; (2) Song 5:2 matches Bukhārī's canonical prophet-marker ('my eyes sleep, my heart sleeps not', 2013/3570/7517), Rashi reads 'my heart' as the Bridegroom, and Shemot Rabbah 2:5 frames Moses's Burning Bush call with 5:2.",
 "Full Dossier (2/2): Keil & Delitzsch Crown Witness & Song 5:2 Prophetic State",
 ["H1–H4 (Delitzsch's Arabic/Qurʾānic World): On Song 1:5, Delitzsch notes Kedar disappeared at the rise of Islam and quotes Karaite exegete Yefet ben Ali (10th c.): 'the Karaite Jefeth uses for it the word (Arab.) Ḳarysh, for he substitutes the powerful Arab tribe from which Muhammed sprung, and rightly remarks: She compares the colour of her skin to the blackness of the hair tents of the Koreishites' (honest scope: contemporary explanatory substitute for tent-color, breaking the 'modern Muslim back-projection' charge). Delitzsch also cites Sūra 38 (Ṣād 30–33) on Solomon's love of horses (1:9), aligns the Song with Yūsuf–Zulaikha / Hammer-Purgstall's 'Hohelied der Liebe der Araber', and gives 20+ Arabic explanations in ch. 1 (including Goldziher's 'Arab interpreter').",
  "H5–H7 (Customs, Wordplay & Waṣf Capitulation): Delitzsch explains kopher (1:14) via Muslim women's henna wedding practice (shared custom-space, not exclusive origin since Egypt used henna too) and links ḥawaryyāt/ḥūrī eye-contrast (deep black iris on pure white) via Semitic root ḥ-w-r (matching Song 5:12 + Shamāʾil 7–8; strict warning H5.3: ḥ-w-r never appears in Song text, shared Semitic roots aren't proof, and Bilqīs/Saba Q 27:22–44 + Isa 60:6/Jer 6:20 frankincense is the sounder Qurʾānic thread). Crucially, Delitzsch confirms šēm/šemen paronomasia in 1:3 (H6, making wordplay in 5:16 genre-consistent) and concedes (H7): 'The synagogal and church interpretation, in spite of two thousand years' labour, has yet brought to light no sure results, but only numberless absurdities, especially where the Song describes the lovers according to their members from head to foot.'",
  "I1–I7 (Song 5.2 as Prophetic Reception State): Song 5:2 ('I sleep, but my heart waketh; the voice of my beloved knocking') mirrors Ṣaḥīḥ al-Bukhārī 2013 (muttafaq ʿalayh: 'My eyes sleep, but my heart does not sleep') and 3570 / 7517 ('This is characteristic of all the prophets: their eyes sleep, but their hearts do not sleep'—to which al-Bukhārī devotes a dedicated chapter heading, and al-Nawawī classifies it legally as a prophetic khaṣīṣa). Crucially, Rashi (via Gill, Pesikta, Tanḥuma in Yalkut) assigns 'I sleep' to the bride and 'my heart waketh' to the Bridegroom (similarly Shir haShirim Rabbah reads 'my heart' as God), Shemot Rabbah 2:5 opens Moses's Burning Bush theophany with Song 5:2, and Cambridge Bible/Delitzsch/Barnes confirm 5:2–8 is the dream framing the 5:10–16 waṣf! (Honest limits: the match is propositional, not lexical since lev ≠ qalb; classical love-poetry parallels in Ovid/Propertius/Anacreon do not negate the functional convergence with Bukhārī + Shemot Rabbah.)"],
 ["Keil & Delitzsch, Commentary on the Song of Songs (Intro, 1:3, 1:5, 1:9, 1:14)","Ṣaḥīḥ al-Bukhārī 138, 2013, 3570, 7517; al-Nawawī, Sharḥ Muslim","Gill (citing Rashi, Pesikta, Tanḥuma in Yalkut); Shir haShirim Rabbah; Shemot Rabbah 2:5","Cambridge Bible; Barnes; Pulpit Commentary; Qurʾān 38:30–33; 27:22–44"],
 [],
 {facts:[
   ["Delitzsch on 1:5","Quotes Yefet on 'Ḳarysh' ('and rightly remarks')"],
   ["Delitzsch on Waṣf","2,000 years produced 'no sure results'"],
   ["Bukhārī 3570/7517","'All prophets: eyes sleep, hearts wake'"],
   ["Rashi & Shemot Rab.","'My heart' = Bridegroom; frames Exod 3 call"]
  ],
  quotes:[
   {by:"Franz Delitzsch (Keil & Delitzsch on Song 1:5)",en:"The Karaite Jefeth uses for it the word (Arab.) Ḳarysh, for he substitutes the powerful Arab tribe from which Muhammed sprung, and rightly remarks: 'She compares the colour of her skin to the blackness of the hair tents of the Koreishites.'",ref:"Commentary on the Song of Songs, on 1:5"},
   {by:"Franz Delitzsch (Introduction on the waṣf sections)",en:"The synagogal and church interpretation, in spite of two thousand years' labour, has yet brought to light no sure results, but only numberless absurdities, especially where the Song describes the lovers according to their members from head to foot.",ref:"Commentary on the Song of Songs, Introduction"}
  ],
  shots:[
   S('pdf4-hohes-lied-2-p1.jpg','Keil & Delitzsch Crown Witness Dossier (Averroes #hohes-lied-5-16): Yefet/Quraysh on 1:5, Qurʾān 38, henna/ḥawar limits & waṣf concession (p. 1).'),
   S('pdf4-hohes-lied-4-p1.jpg','Song 5:2 Prophetic State Dossier (Averroes #hohes-lied-5-16): Bukhārī 2013/3570/7517, Rashi via Gill, Shemot Rabbah 2:5 & 5:2–16 frame (p. 1).')
  ]}));

/* ============================================================================
   8. add(): christianity/islam-vs/d-dr-daniel-2 (explainer)
      (#daniel-7 — daniel-2-7)
   ============================================================================ */
const DN7_2=AV('daniel-7','1504472122788151408');
add('christianity/islam-vs/d-dr-daniel-2',N(DN7_2,
 "Daniel's four-kingdom schema is a closed, textually fixed 4-empire sequence ending with Jesus's first coming c. 30 CE.",
 "Drawing on Perrin & Stuckenbruck (Brill 2021), Papyrus 967, Qumran, Josephus, 4 Ezra, the Church Fathers, Talmud, and 7th–8th-century apocalypses, the expanded Daniel 2 & 7 dossier demonstrates that the 'closed 4-kingdom' premise fails text-critically (Old Greek Dan 2 has 5 kingdoms without ordinal numbers or toes; P967 Dan 7:13 reads hōs, 'like' the Ancient of Days), Qumran 4QFour Kingdoms already merged empires to open a slot, and patristic witnesses unanimously placed the Stone after Rome's fall—while matching sources specifically to Christian, Jewish, or historical-critical opponents.",
 "Brill 2021 & Manuscript Dossier: Open Schema, P967, Patristic Silence & Three-Opponent Strategy",
 ["Part A — Textual openness (A1–A6, Perrin & Stuckenbruck, Brill 2021): (A1) Old Greek Daniel (Papyrus 967, 2nd c. BCE; Ian Young, pp. 43–48) introduces a fifth kingdom in Dan 2:39–41, lacks the ordinal numbers ('second/third/fourth', added later per Munnich), and omits the toes in 2:41a/42a; (A2) Kratz (Translatio Imperii, via Perrin p. 99) confirms the iron-clay toes (2:41–43) and multiplied horns (7:20–24) are secondary expansions; (A3) Qumran 4QFour Kingdoms (4Q552–553, Perrin pp. 103–104) merges Babylon and Persia in tree 1 specifically to open a downstream slot for Rome before the Kingdom of God—a pre-Christian Jewish recalibration; (A4) Peshitta rubrics (Hjälm pp. 256–258; Sinai Ar. 513 even inserts 'and this is the Messiah' at the end of 7:14); (A5) Sibylline Oracles 4, Tacitus/Dionysius/Appian, Mekhilta (5 kingdoms), Bahman Yasht, 4 Ezra 11–12 & 2 Baruch 35–40 (Crabbe pp. 155–156) repeatedly recalibrate the list; (A6) P967 (oldest Greek Daniel MS, 2nd/3rd c. CE) reads in Dan 7:13 hōs palaios hēmerōn ('like the Ancient of Days', not heōs 'until'—Stuckenbruck 1995, Lust 1978, Reynolds 2008, Bucur 2017) and rearranges chapters (1–4, 7–8, 5–6, 9–12), while 8 Qumran Daniel MSS preserve zero text of Dan 7:13–14 (Ulrich, DJD 16).",
  "Part B–C — Two silences & patristic non-fulfillment: Josephus (Ant. 10.210; Bracht p. 174 n. 29) explicitly refuses to interpret the Stone under Flavian Roman patronage; 4 Ezra 12:10–12 (DiTommaso p. 207 n. 15) states Daniel himself never received the identification given to Ezra; and Hippolytus (4th beast still rules; 500-year calculation), Theodoret (Stone = Second Coming), Aphrahat, Jerome, Cosmas, and the Katechon tradition confirm the Stone had NOT fallen at Jesus's first coming (while Ephrem & Kosmas omit Rome altogether).",
  "Part G–H — Talmud & 7th–8th century witnesses: b. Yoma 10a expects a power after Rome, b. Ḥagiga 14a rejects 'two thrones', Nistarot de-R. Šimʿon ben Yoḥai speaks of 'a prophet according to His will', and early Christian/Near Eastern sources (Doctrina Jacobi 634, Sebeos 660s calling the Arab empire the 4th beast, John bar Penkāyē 687, Pseudo-Ezra, Pseudo-Athanasius, Pseudo-Methodius, Timothy I & Ishoʿyahb III, 14th Vision of Daniel, Ethiopic Tergwāmē 'toes = sons of Kedar', Zand-ī Wahman Yasn) repeatedly situate Islam inside the Danielic framework.",
  "Tactical 3-opponent discipline (§0 & Part M): Against a Christian apologist (claiming Stone = 30 CE), cite the Church Fathers (Part C); against a Jewish interlocutor (Messiah still future), cite Talmud/Qumran/4Q552–553/b. Yoma 10a (Parts A, F, G); against a historical-critical skeptic (164 BCE), shift from authorship to early reception history (Part H)—and always master John J. Collins on Dan 7:13–14 while noting ʿAlī ibn Rabban al-Ṭabarī (replacing Ibn Ḥazm) as earliest Muslim witness."],
 ["Perrin & Stuckenbruck (eds.), Four Kingdom Motifs before and beyond the Book of Daniel (Brill 2021)","Papyrus 967 (Dan 2 & 7:13); Qumran 4Q552–553 & 1QDana/b, 4QDana–e","Josephus, Ant. 10.210; 4 Ezra 12:10–12; b. Yoma 10a; b. Ḥagiga 14a","Hippolytus, Theodoret, Ephrem, Jerome, Cosmas; Doctrina Jacobi (634), Sebeos (660s), bar Penkāyē (687)"],
 [],
 {facts:[
   ["Papyrus 967","OG Dan 2 has 5 kingdoms; Dan 7:13 reads hōs"],
   ["Qumran 4Q552","Merges Babylon+Persia pre-Christianly"],
   ["Patristic Consensus","Stone not yet fallen in 2nd–5th c. CE"],
   ["Source Discipline","Fathers vs. Christians; Talmud vs. Jews"]
  ],
  shots:[
   S('pdf4-daniel-2-7-p1.jpg','Daniel 2 & 7 Dossier v2 (Averroes #daniel-7): Brill 2021 textual openness, P967, Qumran 4Q552, patristic & 7th-c. witnesses (p. 1).')
  ]}));

/* ============================================================================
   9. add(): christianity/islam-vs/d-dr-isaiah-42 (explainer)
      (#jesaja-42 — jesaja42-cf)
   ============================================================================ */
const J42_CF=AV('jesaja-42','1552652185702236281');
add('christianity/islam-vs/d-dr-isaiah-42',N(J42_CF,
 "Matthew 12:17–21 already applies Isaiah 42 to Jesus—so any parallel in Bukhārī's Torah-ḥadīth was simply copied from Christian Gospel texts.",
 "A systematic check of 12,489 pre-610 CE patristic files (Cyril, Jerome, Eusebius), Qumran/MT/LXX/Peshitta/SBLGNT, and OpenITI up to 300/1450 AH proves the opposite: (1) Matthew 12 deliberately omits Isaiah 42:4's crucial clause ('until he establishes justice in the earth') and turns 'his law (Tōrāh)' into 'his name'—precisely the two points that fail Jesus yet appear verbatim in Bukhārī and Ibn Qutayba (d. 276 AH), with Jerome (c. 407 CE) himself noticing the Matthean gap; and (2) the Torah-ḥadīth marches sequentially through Isa 42:1→2→3→4→16→17 (inverted!)→18, where v. 17's idol-worshippers fit Meccan pagans ('Iʿlu Hubal!') while Cyril had to retreat 1,300 years to Moses's Egypt.",
 "Patristic & Manuscript Dossier: Why Bukhārī's Source Was Isaiah, Not Matthew 12",
 ["Finding 0 (Isa 42.16–18 — sequential trace & inverted v. 17): The Torah-ḥadīth (9 witnesses in 7 early works: Ibn Saʿd d. 230 twice in first-person divine speech, Aḥmad 241, al-Dārimī 255, Bukhārī 2125 & 4838, ʿUmar b. Shabba 262, al-Fasawī 277, Ibn Abī Khaythama 279 via ʿAbdallāh b. ʿAmr ← ʿAṭāʾ b. Yasār; echoed in Kaʿba inscription at Ibn Abī Shayba 235) runs straight through Isa 42: 42:1 ('My servant') → 42:2 ('not harsh/loud in markets') → 42:3 ('forgives') → 42:4 ('will not take him until...') → 42:16 ('straightens the crooked religion', al-milla al-ʿawjāʾ) → 42:17 INVERTED (Isa: 'who say to molten images: You are our gods' → ḥadīth: 'by their saying: There is no god except Allah') → 42:18 ('opens blind eyes and deaf ears'). Crucially, Cyril of Alexandria had to jump 1,300 years back to Israel in Egypt and Jerome offered three non-Jesus-era guesses because Jews in Jesus's day didn't worship molten idols—whereas Muḥammad's ﷺ Meccan foes literally shouted to idols ('Iʿlu Hubal!'—23 reports in 18 works pre-300 AH), and zero Muslim authors before 1450 AH ever quoted Isa 42:17 (first Arabic hit is Van Dyck 1313 AH!).",
  "Finding 1 (Isa 42.4 — Matthew 12's omission spotted by Jerome in 407 CE): MT, 1QIsaᵃ, 4Q62, LXX, and Peshitta (nāmūsā — matching Waraqa's hādhā n-nāmūs in Bukhārī 3) all preserve 'He will not burn dimly or be crushed until he establishes justice in the earth; and for his law (Tōrāh) the coastlands wait.' Matthew 12:20–21 drops the entire 'until' clause and changes 'law' to 'name'—removing both death-before-completion and a new law. Jerome (Letter 121 to Algasia ch. 2, c. 407 CE; Commentary on Isaiah 42:4, c. 410 CE) expressly notes Matthew's omission (blaming scribal homoioteleuton 'justice... justice') and reinterprets 'his law' as the Gospel; Eusebius (Comm. Isaiah 2.22, c. 325 CE) forces 'not crushed' to mean resurrection after crucifixion. Yet Bukhārī and Ibn Qutayba (d. 276 AH, at Ibn al-Jawzī's al-Wafāʾ, explicitly citing the Hebrew + translating iyyīm as jinn like LXX/Peshitta in Isa 34:14; cf. al-Qurṭubī d. 671) preserve BOTH the 'until' clause and 'his Torah', proving the Islamic witness drew on Isaiah, not Matthew! (Note: nobody before 1450 CE noticed the Matthean omission itself.)",
  "Findings 2–3 & honest limits: Eusebius, Jerome, and Cyril all locate Isa 42:11–13 in Arabia/Kedar (Land of the Saracens, unfulfilled 'to this day' c. 429 CE; matching Mālik 179's travel-return prayer and Kaʿb's ummah-description + takbīr on heights noted by Ibn Qutayba 276), while Hebrew ʾîš milḥāmōt ('man of wars', 42:13) matches nabī al-malāḥim (0 of 313 citations pre-1450). Honest boundary: ʿAbdallāh b. ʿAmr possessed books from Yarmūk, so the sequence does not prove he lacked access to Isaiah—it proves the verse-fit matches Muḥammad ﷺ where pre-Islamic Fathers failed on Jesus."],
 ["Isa 42:1–4, 11–13, 16–18 (MT, 1QIsaᵃ, 4Q61/62, LXX, Peshitta); Matt 12:20–21","Jerome, Letter 121.2 (c. 407) & Comm. Isa. 42:4; Cyril, Comm. Isa. 42:17–18; Eusebius, Comm. Isa. 2.22","Bukhārī 2125, 4838; Ibn Saʿd 230; Aḥmad 241; Dārimī 255; Ibn Abī Shayba 235","Ibn Qutayba (d. 276, at Ibn al-Jawzī, al-Wafāʾ); al-Qurṭubī, al-Iʿlām (d. 671)"],
 [],
 {facts:[
   ["Corpus Checked","12,489 patristic files (<610 CE) + OpenITI"],
   ["Matthew 12 Gap","Omits 42:4 'until...' & swaps 'Torah'→'name'"],
   ["Jerome (407 CE)","Spots Matt 12 omission; redefines 'Torah'"],
   ["42:17 Reversal","0 Muslim citations <1450 AH; fits 'Iʿlu Hubal!'"]
  ],
  quotes:[
   {by:"Jerome (Letter 121 to Algasia, ch. 2, c. 407 CE)",en:"And what is lacking in the testimony of the Gospel—'he will shine out and not be shaken until he sets justice upon the earth'—seems to have happened by the error of the first scribe... And for what stands among the Hebrews—'and in his law the islands shall hope'—Matthew, giving the sense rather than the words, put 'name' and 'Gentiles' for 'law' and 'islands'.",ref:"Epistula 121.2 (Writings-Database)"},
   {by:"Cyril of Alexandria (Commentary on Isaiah 42:17–18)",en:"Most fittingly does he turn his words to the people of the Jews... who slipped into the mire of polytheism... turning back to the defilements in Egypt... Rightly does he call those deaf and blind who served idols.",ref:"Commentary on Isaiah 42:17–18"}
  ],
  visual:{kind:'compare',
   left:{title:"Isaiah 42:4, 16–18 & Bukhārī 2125/4838",items:["42:4: Does not fade UNTIL justice is established on earth ✅","42:4: Nations await his LAW (Tōrāh / Peshitta nāmūsā) ✅","42:16–18 exact sequence + v. 17 inverted ('no god except Allah') ✅","Meccan opponents actually prayed to idols ('Iʿlu Hubal!') ✅"]},
   right:{title:"Matthew 12:20–21 & Pre-610 Fathers",items:["Matt 12:20–21: OMITS 'until he sets justice on earth' ❌","Matt 12:21: Replaces 'his law' with 'his name' ❌","Jerome (407 CE) admits gap & forces 'law' = Gospel ❌","Cyril jumps back 1,300 yrs to Egypt for v. 17's idolaters ❌"]}},
  shots:[
   S('pdf4-jesaja42-cf-p1.jpg','Isaiah 42 in the Church Fathers Dossier (Averroes #jesaja-42): 42:16–18 sequence, Matt 12 omission, Jerome 407 CE & Cyril (p. 1).')
  ]}));

/* ============================================================================
   10. add(): christianity/jesus/d-av-jesus-gewalt-su-nde/c-niemals-im-geheimen-gesprochen
       (#jesus-sagt-er-hat-nie-im-geheimen-gesprochen — jesus-geheim)
   ============================================================================ */
const JGH=AV('jesus-sagt-er-hat-nie-im-geheimen-gesprochen','1275861934771540079');
const jghFollow=P(N(JGH,
 "In John 18:20, Jesus only meant he wasn't running a secret political conspiracy—the parables were public, only private explanations were later, and his silence commands were temporary!",
 "All five Christian harmonizations fail against John's own Greek vocabulary and Annas's exact question. Annas asked specifically about Jesus's teaching (didachē, 18:19), and Jesus answered with the identical cognate verb (edidaxa, 'I taught', 18:20)—claiming 'always' (pantote) openly and 'nothing' (ouden) en kryptō. John 7:4 and 7:10 prove en kryptō simply means 'secretly' with zero conspiracy connotation, while Mark 4:11–12 and 4:33–34 document intentional two-tier teaching.",
 "Full Greek Analysis, 9-Verse Cascade, 5 Rebuttals & Honest Scholarly Limits",
 ["1. Exact Greek question-answer lock (John 18.19–20): Annas asks about Jesus's disciples (mathētai) and teaching (didachē, v. 19). Jesus answers with the identical root verb edidaxa ('I taught', v. 20), asserting: egō parrhēsia lelalēka tō kosmō; egō pantote edidaxa en synagōgē kai en tō hierō... kai en kryptō elalēsa ouden ('I spoke openly to the world; I always taught in synagogue and temple... and in secret I spoke nothing'). That leaves Mark 4:34 (kat' idian epelyen panta, 'privately he explained everything to his own disciples') and Mark 4:11–12 (mystērion given to insiders; parables for outsiders 'lest they perceive... and be forgiven') contradicting the exact domain—didachē—Annas asked about.",
  "2. Nine-verse proof cascade (beyond Mark 4): (a) Matt 13:10–11 ('to you it has been given... to them it has not'); (b) John 16:12–13 ('I still have many things to say to you, but you cannot bear them now'); (c) John 7:4 (contrasting en kryptō vs. en parrhēsia in one sentence) and John 7:10 (going to the feast 'as it were in secret', en kryptō—purely spatial/concealed, refuting the 'conspiracy' redefinition!); (d) John 10:24–25 (Jews demand 'Tell us plainly [parrhēsia]!'); (e) John 16:25 ('I have said these things to you in figures of speech; the hour is coming when I will no longer speak in figures but tell you plainly'); (f) Markan Messianic Secret silence commands (Mark 1:34, 1:44, 3:12, 5:43, 7:36, 8:30, 9:9; Matt 16:20, 17:9).",
  "3. All five Christian objections refuted: (1) 'Secret = conspiracy' → John 7:4, 7:10 proves en kryptō means plain secrecy; (2) 'Parables were public, explanations private' → Mark 4:11–12 explicitly states exclusive allocation ('given to you... not to outsiders') specifically about didachē; (3) 'Only defensive interrogation context' → explains Jesus's motive under trial (18:19–24), not the truth of unconditional pantote ('always') and ouden ('nothing'); (4) 'Public = general habit' → concedes the absolute claim fails literally, and fails inside the exact teaching domain; (5) 'Silence commands were temporary' → temporary concealment is still concealment, contradicting a retrospective 'nothing in secret.'",
  "4. Honest scholarly boundaries (don't overstate): (a) parrhēsia also carries the nuance 'boldly/frankly' (so anchor the proof on the parrhēsia ↔ en kryptō pair, not parrhēsia alone); (b) Mark 4:12's hina ('so that' vs. consecutive 'with the result that') is debated alongside Matt 13:13's parallel hoti ('because'); (c) critical scholars (Wrede, Bultmann, Raymond Brown) view the clash as Johannine vs. Synoptic redactional theology rather than simple lying—yet both critical and apologetic sides confirm the textual tension is real."],
 ["John 18:19–24; 7:4, 10; 10:24–25; 16:12–13, 25","Mark 4:9–12, 33–34; 1:34, 44; 3:12; 5:43; 7:36; 8:30; 9:9","Matthew 13:10–13; 16:20; 17:9","Wrede, Bultmann, Raymond E. Brown"],
 [],
 {facts:[
   ["Root Match","didachē (18:19) ↔ edidaxa (18:20)"],
   ["John 7:4, 10","en kryptō = plain 'secretly' (not conspiracy)"],
   ["John 16:25","Jesus admits speaking in figures, not plainly"],
   ["Critical View","Wrede, Bultmann, Brown confirm real tension"]
  ],
  visual:{kind:'steps',items:[
    ["Step 1 (John 18:19)","Annas asks specifically about Jesus's disciples and his teaching (didachē)."],
    ["Step 2 (John 18:20)","Jesus answers with the cognate verb edidaxa ('I always taught openly, nothing in secret')."],
    ["Step 3 (Mark 4:11–12, 34)","In that exact teaching domain, Jesus kept insiders' mystērion & private explanations (kat' idian) from outsiders."],
    ["Step 4 (John 7:4, 10; 16:25)","John's own Gospel defines en kryptō as ordinary secrecy and records Jesus admitting figurative concealment."]
   ]},
  shots:[
   S('pdf4-jesus-geheim-p1.jpg','John 18:20 vs. Mark 4 dossier (Averroes #jesus-sagt-er-hat-nie-im-geheimen-gesprochen): Greek terms, 9-verse cascade, 5 rebuttals & limits (p. 1).')
  ]}
),{
 optWho:'If they say',
 optLabel:'Jesus only denied running a secret conspiracy—or only explained parables privately later, while his silence commands were temporary!',
 theyWho:'If they defend John 18:20',
 who:'Counter with Greek didachē, John 7:10 & 5 rebuttals'
});
add('christianity/jesus/d-av-jesus-gewalt-su-nde/c-niemals-im-geheimen-gesprochen',jghFollow);
})();
