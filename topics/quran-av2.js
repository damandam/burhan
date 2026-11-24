/* Qurʾān AV batch 2 — 2026-11-20. Aḥruf & qirāʾāt: the two thin Deenresponds cards (#defense-of-ahruf, #defense-of-qiraat: Yaqeen papers +
   Sh. Yousef Wahb lecture) rebuilt as debates with the full Averroes material: #7-qirat-ist-nicht-7, #lesarten-hadithe-beispiele-sahaba-allgemein,
   #alles-wo-sind-die-6-ahruf-hin, #anomalie-abweichende-leseart, #daif-hadithe-dazu, #shubah-und-hafs, #allgemein-gelehrte, #analogie-und-geschichte,
   #lesarten-qirat-alles (Koran Scheinargumente 1), #quran-leseart-qirat-identisch-mehrere-qurane (2 PDFs). */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const DR=(n,id)=>({credit:'Deenresponds · #'+n,link:'https://discord.com/channels/1328402309297733662/'+id});
const N=(cr,they,we,h,p,src,next)=>({they,we,more:Object.assign({h,p,src},cr),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P='islam/quran/preservation/';
const H7=AV('lesarten-hadithe-beispiele-sahaba-allgemein','1373755668997345411'), S7=AV('7-qirat-ist-nicht-7','1373752451638759605'),
      W6=AV('alles-wo-sind-die-6-ahruf-hin','1471968145240752168'), AN=AV('anomalie-abweichende-leseart','1431738965127594126'),
      DA=AV('daif-hadithe-dazu','1431681730971963585'), DRA=DR('defense-of-ahruf','1368287219273695232');

/* ── The seven aḥruf ── */
card(P+'d-dr-defense-of-ahruf',{title:"The seven aḥruf: different Qurʾāns?",k:"Sabʿat aḥruf",blurb:"A concession taught by the Prophet ﷺ himself, and where the other six went.",
 claim:"The Qurʾān came in “seven aḥruf”: seven different versions. Today only one is left, so six-sevenths of the Qurʾān is lost.",
 tree:N(H7,"Muslims admit the Qurʾān was revealed in seven different ways. So which one is the real Qurʾān?",
  "All of them were taught by the Prophet ﷺ himself on Allah's command, and he confirmed each one: “So it was revealed.” Jibrīl brought them as a concession (rukhṣa) so that Arabs of every tribe and dialect, illiterate men and women, children, slaves and the very old, could recite.",
  "The Prophet ﷺ authorised every variant",[
   "Jibrīl: “Allah commands you to teach your Umma the Qurʾān in seven aḥruf” (al-Nasāʾī 939; Aḥmad 21172).",
   "ʿUmar heard Hishām ibn Ḥakīm recite al-Furqān differently: “Who taught you this?” — “The Messenger of Allah ﷺ.” The Prophet ﷺ said of both: “So it was revealed” (Bukhārī 4992).",
   "The same with Abū Juhaym al-Anṣārī (Aḥadīth Ismāʿīl ibn Jaʿfar 325), ʿAmr ibn al-ʿĀṣ (Aḥmad 17821) and Ubayy (Aḥmad 21151): each time he confirmed all variants. Ibn Masʿūd and al-Aḥqāf: “Let each man recite as he was taught” (Muslim 820).",
   "Abū Hurayra: “The Qurʾān was revealed in seven aḥruf; disputing about the Qurʾān is disbelief; recite what you know of it and leave what you don't know to one who knows” (Aḥmad 7989). Ḥudhayfa: don't turn away from a ḥarf you were taught because you dislike it (Aḥmad 23273).",
   "Ibn ʿAbbās: “Jibrīl taught me one ḥarf; I kept asking him to increase it and he increased it until it ended at seven” (Bukhārī 3219; Abū ʿUbayd, Faḍāʾil 730). Ubayy: “one ḥarf or two?… until we reached seven” (Bukhārī 4991).",
   "The Yaqeen Institute paper “The ʿUthmānic Codex” (linked by Deenresponds) explains how ʿUthmān's codex preserved what was revealed."],
  ["Bukhārī 3219, 4991, 4992","Muslim 820","al-Nasāʾī 939","Musnad Aḥmad 7989, 17821, 21151, 21172, 23273","https://yaqeeninstitute.ca/read/paper/the-uthmanic-codex-understanding-how-the-quran-was-preserved"],
  [
   N(S7,"“Seven” just means “many”, so the Qurʾān had countless versions.",
    "Sabʿa means exactly seven. Other forms of the root (sabʿīn, seventy; sabʿumiʾa, seven hundred) can mean “many” in some contexts, but not sabʿa; and aḥruf is a plural of paucity (jamʿ qilla), used for three to ten (Abū ʿAmr al-Dānī). The ḥadīth themselves count up from one to seven and stop.",
    "Seven is seven",["Muḥyī al-Dīn Khalīl al-Rīḥ (Riyadh): sabʿa unmistakably means the number seven.","Ibn Ḥibbān, Ibn al-Jawzī, al-Qurṭubī and Ibn Kathīr all took it as seven. Al-Khaṭṭābī mentioned the “indefinite plurality” view but thought it unlikely; it was first argued by Abū Shāma al-Maqdisī (d. 665), and in modern times only a few, like Jamāl al-Dīn al-Qāsimī and Muṣṭafā Ṣādiq al-Rāfiʿī.","A ḥadīth of “three aḥruf” exists, but al-Albānī graded it weak (#daif-hadithe-dazu)."],["Abū ʿAmr al-Dānī, al-Aḥruf al-Sabʿa"]),
   N(W6,"Then where are the other six aḥruf?",
    "Ibn Taymiyya: nothing Allah meant to preserve was lost. Many variants were abrogated in the Final Review (al-ʿarḍa al-akhīra), when Jibrīl went over the whole Qurʾān with the Prophet ﷺ twice in his last year. And the rest was a permission (jāʾiz), not an obligation: no one had to recite all seven. When the dialects were no longer a hardship but disputes threatened unity, the Companions under ʿUthmān agreed on what fit his script.",
    "Ibn Taymiyya: a temporary concession",["The seven aḥruf were a rukhṣa for a time when Arabs couldn't immediately switch dialects. “When their tongues had grown used to the recitation and uniting on one ḥarf became easy for them… they agreed on it.”","Obligation vs permission: a permission granted for ease may be restricted when it causes greater harm (fitna). The Companions didn't lose anything; they stopped using a permission to secure the higher goal.","Ibn al-Jazarī: ʿUthmān had copies made from Abū Bakr's muṣḥaf and sent to Baṣra, Kūfa, Shām, Mecca, Yemen and Baḥrayn, keeping one (al-Imām). The Umma agreed on their contents and left what contradicted them in additions, omissions and word substitutions that had been allowed as ease but weren't firmly established as Qurʾān. The copies were left without dots and vowels to accommodate everything soundly transmitted from the Prophet ﷺ (al-Nashr)."],["Ibn Taymiyya, Majmūʿ al-Fatāwā 13","Ibn al-Jazarī, al-Nashr"]),
   N(AN,"Ibn Masʿūd and others had readings that aren't in the muṣḥaf.",
    "Those are the shādhdh (irregular) readings, and there are three explanations: many were explanatory recitations (qirāʾāt tafsīriyya), where a Companion added a gloss or a simpler synonym; others were abrogated aḥruf; and most simply aren't authentically transmitted. Of about 540 reported cases, only 177 have any chain, and only about 20 are authentic by ḥadīth standards, and even those look exegetical.",
    "Shādhdh readings",["Exegetical: Ibn Masʿūd replaced hidāya with the near-synonym irshād in 1:6, and ṭaʿām al-athīm with ṭaʿām al-fājir for a student who couldn't pronounce the word (taysīr). The Companions knew they were reciting taʾwīl next to tanzīl; the danger was that later people would mistake it for Qurʾān.","Abrogated: al-Barāʾ ibn ʿĀzib reports a different earlier wording of 2:238 that was later abrogated; ʿUmar implicitly treated some of Ubayy's readings as possibly abrogated.","Al-Ḥasan al-Baṣrī read some words irregularly against the Baṣran school; the community rejected it (Ibn Mujāhid). Irregular readings may be explainable linguistically but lack authentic chains, so reciting them as Qurʾān is not allowed.","Al-Nawawī: it is permitted to recite any of the seven readings in prayer and elsewhere, but not an irregular one, because it isn't Qurʾān; the Qurʾān is only established by mutawātir transmission (al-Majmūʿ 3/392)."],["al-Nawawī, al-Majmūʿ 3/392","quranpedia.net/book/20869"])
  ]),
 sum:"The seven aḥruf were a concession taught by the Prophet ﷺ; many variants were abrogated in the Final Review, the rest left by consensus under ʿUthmān (Ibn Taymiyya); irregular readings are glosses, abrogated or unauthentic."});

/* ── The qirāʾāt ── */
const QA=AV('lesarten-qirat-alles','1289267794684284949'), SH=AV('shubah-und-hafs','1431341068904956015'),
      GE=AV('allgemein-gelehrte','1431343499642405006'), AG=AV('analogie-und-geschichte','1431366536131772547'), DRQ=DR('defense-of-qiraat','1368287248558198784');
card(P+'d-dr-defense-of-qiraat',{title:"Do the qirāʾāt contradict each other?",k:"The ten readings",blurb:"Ḥafṣ, Shuʿba, Warsh: each reading adds a facet, none cancels another.",
 claim:"Ḥafṣ and Warsh are different Qurʾāns: the readings change words and meanings, so the text wasn't preserved.",
 tree:N(QA,"The qirāʾāt change the meaning: 2:10 “they deny” vs “they lie”, 3:146 “was killed” vs “fought”, 28:48 “two sorcerers” vs “two sorceries”.",
  "A contradiction means two statements can't both be true. In every case both readings are true at once and add a facet. Compare a real contradiction: Matthew 21:19 has the fig tree wither at once, Mark 11:20 the next morning: one event, two incompatible accounts.",
  "Verse by verse",[
   "2:10 yukadhdhibūn (“they deny/call it a lie”) and yakdhibūn (“they lie”): hypocrites do both; two facets of one pattern.",
   "3:146 qutila (“was killed”) and qātala (“fought”): one stresses believers' steadfastness after their prophet was killed, the other that prophets fought alongside them. Revealed after Uḥud, both from the Companions' oral transmission.",
   "28:48 sāḥirāni (“two sorcerers supporting each other”, the majority) and siḥrāni (“two sorceries”, ʿĀṣim, Ḥamza, al-Kisāʾī, Khalaf): one blames the magician, the other the trick; the same rejection.",
   "2:165 tarā (“you would see”, the Prophet ﷺ or the listener) and yarā (“they would see”, the wrongdoers): the punishment is unavoidable and evident to both (Ṭanṭāwī).",
   "3:188 lā taḥsabanna (“don't you think”, addressed to the Prophet ﷺ) and the general reading: same warning (Ṭanṭāwī).",
   "66:12 kitābihi (“His Book”) and kutubihi (“His Books”): the Book is the general term covering all the scriptures.",
   "6:55 sabīl (“way”) masculine or feminine: Tamīm use it masculine, the Ḥijāz feminine; the Qurʾān has both (7:146; 3:99) (al-Qurṭubī)."],
  ["Qurʾān 2:10; 2:165; 3:146; 3:188; 28:48; 66:12; 6:55","Matthew 21:19; Mark 11:20"],
  [
   N(SH,"Then why do Ḥafṣ and Shuʿba, both students of ʿĀṣim, differ?",
    "Because ʿĀṣim taught each of them a different chain. Ḥafṣ: “I said to ʿĀṣim: Abū Bakr (Shuʿba) differs from me. He said: I taught you what Abū ʿAbd al-Raḥmān al-Sulamī taught me from ʿAlī, and I taught Shuʿba what Zirr ibn Ḥubaysh taught me from ʿAbdullāh ibn Masʿūd.” Both go back to the Prophet ﷺ.",
    "Masters, narrators, routes",["There are ten confirmed masters (qurrāʾ); together they cover the aḥruf preserved in ʿUthmān's script, and each is connected to the Prophet ﷺ.","Each master has two narrators (rāwī), e.g. ʿĀṣim → Ḥafṣ and Shuʿba; their students' lines are the routes (ṭarīq).","Analogy: the aḥruf are like categories of ingredients, each qirāʾa a recipe choosing from them at each verse; differences arise because readings choose different permitted options in different places.","Types of variation: singular/plural of a noun; verb conjugations with the same meaning; adding or omitting a word without changing the meaning."]),
   N(GE,"Readings were chosen by later men, Ibn Mujāhid.",
    "There were many readings early on; Ibn Mujāhid (d. 324) canonised seven because they were mutawātir, widespread and confirmed, and three more were later added: ten. Al-Suyūṭī: the seven of al-Shāṭibī and the three of Abū Jaʿfar, Yaʿqūb and Khalaf are all mutawātir from the Messenger of Allah ﷺ. Ibn al-Jazarī established their tawātur in Munjid al-Muqriʾīn and al-Nashr.",
    "Scholarly consensus",["Ibn Taymiyya: “There is no dispute among Muslims that the seven aḥruf contain no contradictory meanings; their meanings are identical or similar… all these readings are true; each reading relative to another is like one verse relative to another, and belief in all is obligatory” (Majmūʿ al-Fatāwā).","The four Imams used multiple readings: Mālik used Nāfiʿ's, al-Shāfiʿī preferred Ibn Kathīr's, Aḥmad accepted all seven, and they used reading differences in fiqh as legitimate sources.","Al-Suyūṭī called the differences a mercy; al-Zarkashī saw in them the Qurʾān's miraculous eloquence.","Sh. Yousef Wahb's lecture (linked by Deenresponds) covers the concession, the oral transmission under the Prophet ﷺ and his Companions, the move to systematised readings, and the ten qirāʾāt; the Yaqeen paper “Can the Qurʾān be recited in different ways?” explains their wisdom."],["al-Suyūṭī, al-Itqān","Ibn al-Jazarī, al-Nashr; Munjid al-Muqriʾīn","https://youtu.be/3tS7X2j4PkA","https://yaqeeninstitute.ca/read/paper/can-the-quran-be-recited-in-different-ways-the-meaning-and-wisdom-of-qiraat"])
  ]),
 sum:"Every canonical reading is mutawātir to the Prophet ﷺ (al-Suyūṭī, Ibn al-Jazarī); in each disputed verse both readings are true together, unlike a real contradiction such as Matthew 21 vs Mark 11."});
/* keep Deenresponds' link on the qirāʾāt card */
})();
