/* Islam AV batch 4 — 2026-11-21. Averroes “sonstiges islam 3”, Group D (unseen / medicine / hadith; 9 channels).
   add(): 31:34 wombs & rain + Ecclesiastes 11:5 (#allah-wissen-über-mutterleib-und-regen → t-surah-31-34-today-we-know-what-is-in-the-wombs);
          Blackened faces in 3:106 & 39:60 + al-Arnaʾūṭ chain critique (#schwarze-menschen-hölle-erschaffung → t-sahih-al-bukhari-7142).
   NEW:   Satan's touch at birth & Maryam/ʿĪsā (#satan-berührt → islam/hadith/unseen/satan-touches-newborn);
          Riding a jinn / Night of the Jinn (#jinn-reiten → islam/hadith/unseen/jinn-riding);
          Black seed & 7 ʿAjwa dates (#dattel-und-schwarzkümmelöl-heilt-vor-gift → islam/hadith/others/ajwa-dates-black-seed);
          Licking fingers after eating (#finger-lecken → islam/hadith/law/licking-fingers-after-eating);
          The donkey “Ibn Fulān” narration (#esel-ibn-fulan → islam/hadith/others/donkey-ibn-fulan).
   Image-only channels (scans to capture):
     - #100-und-99-barmherzigkeit (channel ID: 1284302444712693865): 1 PDF (Unbenanntes_Dokument_22.pdf, 114.72 KB; no text argument).
     - #steißbein (channel ID: 1287843715855159451): 1 PDF (Steissbein_Hadith_Ilal_Pruefung_Endfassung_Deutsch.pdf, 212.75 KB; no text argument).
   Additional PDFs in text channels (to capture): #satan-berührt (1 PDF), #schwarze-menschen-hölle-erschaffung (2 PDFs), #dattel-und-schwarzkümmelöl-heilt-vor-gift (1 PDF). */
(()=>{
const AV=(n,link)=>({credit:'Averroes · #'+n+' (translated from German)',link});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('islam-av4: no card',key); };

/* 1. Dedup: 31:34 — Allah's knowledge of the wombs & rain */
const MW=AV('allah-wissen-über-mutterleib-und-regen','https://discord.com/channels/1275832106949283962/1293972845453508619');
add('islam/quran/d-ia-scientific-allegations-against-the-quran/t-surah-31-34-today-we-know-what-is-in-the-wombs',N(MW,
 "Weather forecasts predict rain and ultrasounds reveal fetal sex—doesn't that break 31:34's claim that Allah alone knows rain and what is in the wombs?",
 "31:34 speaks of the absolute knowledge of the unseen (ghayb), which belongs solely to Allah—not empirically mediated observations. Moreover, what is in the womb encompasses far more than biological sex (destiny, traits, happiness or misery), and even angels only learn what Allah reveals to them (Bukhārī 6595).",
 "Ghayb vs. observational science (Bukhārī 6595)",
 ["Exclusive ghayb knowledge: The verse refers specifically to the knowledge of the unseen (ghayb) possessed exclusively by Allah—an absolute, comprehensive knowledge incomparable to human knowledge gained through observation.",
  "Human observation is neither category: Human knowledge is limited and dependent on instruments and physical signs (ultrasound, meteorology); it never constitutes autonomous knowledge of the unseen.",
  "Granted knowledge to angels: Allah may disclose aspects of what is in the womb to His angels or whomever He wills, as taught in prophetic narrations.",
  "Beyond fetal sex: 'What is in the wombs' encompasses far more than male or female—it includes the child's destiny, traits, and spiritual state.",
  "Bukhārī 6595: Angels ask Allah in the womb whether the child will be male or female, happy/blessed or wretched—proving angels and humans only know what Allah reveals or makes observable; ultrasound is technically mediated observation, not ghayb.",
  "Conclusion: Advances in meteorology or obstetrics leave intact the Qurʾānic truth that only Allah possesses absolute, unmediated knowledge of rain and what lies in the wombs."],
 ["Qurʾān 31:34","Ṣaḥīḥ al-Bukhārī 6595"],
 [N(MW,
   "Ecclesiastes 11:5 says humans don't know the wind's path or how bones grow in the womb—doesn't the Bible say the same thing?",
   "Yes—and it defeats the missionary's objection! Ecclesiastes 11:5 pairs human ignorance of the wind and fetal formation with human inability to grasp God's work. If discovering fetal anatomy meant the verse failed, it would imply humans can now fully comprehend God's work too.",
   "Bible parallel: Ecclesiastes 11:5",
   ["The verse's logic: Ecclesiastes 11:5 directly links 'you do not know the way of the wind' and 'how the bones grow in the womb' to 'so you do not know the work of God who makes everything.'",
    "Answering the missionary escape hatch: A missionary might claim Ecclesiastes only meant people didn't know it back then, not in the future. Yet the comparison's conclusion is that no human will ever comprehend God's sovereign work/plan—so both verses highlight human limitation before divine decree, not a ban on medical instruments."],
   ["Ecclesiastes 11:5"],
   [],
   {facts:[["Bible Verse","Ecclesiastes 11:5"],["Parallel","Wind & fetal bones"],["Key Point","Compares to God's work"],["Verdict","Refutes double standard"]],
    quotes:[{by:"Ecclesiastes 11:5",en:"As you do not know the way of the wind, or how the bones grow in the womb of a pregnant woman, so you do not know the work of God who makes everything.",ref:"Ecclesiastes 11:5"}]})],
 {facts:[["Verse","Qurʾān 31:34"],["Ḥadīth","Bukhārī 6595"],["Scope","Ghayb (unseen)"],["Verdict","Observation ≠ ghayb"]],
  quotes:[{by:"Prophet Muḥammad ﷺ",en:"An angel asks Allah in the womb: 'My Lord, will it be male or female? Wretched or blessed?' This is then recorded.",ref:"Ṣaḥīḥ al-Bukhārī 6595"}],
  visual:{kind:'compare',
   left:{title:"Allah's Ghayb (31:34)",items:["Absolute, unmediated & eternal","Includes destiny, traits, provision & ultimate outcome","Shared with angels only when Allah decrees (Bukhārī 6595)"]},
   right:{title:"Human Observation",items:["Dependent on physical instruments (ultrasound, radar)","Limited to observable biology after formation","Cannot predict ultimate fate or hidden divine decree"]}}}));

/* 2. Dedup: Blackened faces in Hell & al-Arnaʾūṭ chain critique → Bukhārī 7142 */
const SM=AV('schwarze-menschen-hölle-erschaffung','https://discord.com/channels/1275832106949283962/1288434491487948821');
add('islam/hadith/d-ia-contributed-refutations/t-sahih-al-bukhari-7142',N(SM,
 "A ḥadīth links Black people to Hellfire and creation—doesn't that prove racial prejudice in ḥadīth?",
 "First, the Qurʾān uses 'blackened faces' strictly as a metaphor for sin and disgrace on Judgement Day (3:106; 39:60), while Black Companions like Bilāl are promised Paradise. Second, the wording adding 'black and white' to the creation narration is graded weak (ḍaʿīf) by Shuʿayb al-Arnaʾūṭ—the authentic chain lacks that addition.",
 "Metaphor in 3:106 & 39:60 + chain critique",
 ["Sin, not race: In Qurʾānic idiom, faces 'darkening' or 'turning black' on the Day of Resurrection refers to the spiritual disgrace of disbelief and lying against Allah, not skin colour.",
  "Prophetic household and Companions: Bilāl ibn Rabāḥ (raḍiya Allāhu ʿanhu) is among the people of Paradise, and the Prophet's ﷺ own household included Black believers—his adopted son (Zayd's son Usāma) and his nursemaid (Umm Ayman) were Black.",
  "Cross-reference: See the #rassismus proofs already documented on this card for the Prophet's ﷺ explicit rejections of racial superiority.",
  "Channel scans: Two PDFs (including rijāl criticism) are attached in the Discord channel (to capture)."],
 ["Qurʾān 3:106; 39:60","hadithprophet.com/hadith-30806"],
 [N(SM,
   "What did ḥadīth critics say about the chain mentioning 'black and white'?",
   "Shuʿayb al-Arnaʾūṭ graded the narration weak with the addition about 'the black and the white'; the sound (ṣaḥīḥ) chain does not contain that clause at all.",
   "Al-Arnaʾūṭ & ṣaḥīḥ li-ghayrihi",
   ["Missing from the sound chain: Al-Arnaʾūṭ explicitly notes that the authentic transmission path lacks the addition specifying 'black and white'.",
    "A fortiori chain weakness: Even the core narration without that addition is only ṣaḥīḥ because of corroborating chains (ṣaḥīḥ li-ghayrihi). When even the core depends on external corroboration, an isolated addition not found in the corroborating paths is even more clearly unauthentic.",
    "Rijāl criticism: Narrator-level criticism documenting the defect is also archived in the channel's second PDF (to capture)."],
   ["Shuʿayb al-Arnaʾūṭ on hadith 30806"],
   [],
   {facts:[["Grader","Shuʿayb al-Arnaʾūṭ"],["Verdict on Addition","Weak (ḍaʿīf)"],["Core Status","Requires corroboration"],["Result","Addition rejected"]]})],
 {facts:[["Qurʾān","3:106; 39:60"],["Meaning","Darkened by sin"],["Prophetic Practice","Bilāl in Paradise"],["Verdict","Metaphorical + weak addition"]],
  quotes:[{by:"Qurʾān 3:106",en:"On the Day when some faces will turn bright and some faces will darken. To those whose faces darken [it will be said]: 'Did you disbelieve after your belief? Then taste the punishment for what you used to disbelieve.'",ref:"Sūrat Āl ʿImrān 3:106"},
          {by:"Qurʾān 39:60",en:"And on the Day of Resurrection you will see those who lied about Allah with their faces darkened. Is there not in Hell an abode for the arrogant?",ref:"Sūrat al-Zumar 39:60"}],
  visual:{kind:'compare',
   left:{title:"Qurʾānic Idiom (3:106; 39:60)",items:["Faces 'brighten' = joy, honour, faith","Faces 'darken' = grief, disgrace, kufr","Applies universally regardless of ethnicity"]},
   right:{title:"Prophetic Community",items:["Bilāl (raḍiya Allāhu ʿanhu) = inhabitant of Paradise","Prophet's ﷺ adopted son & nursemaid were Black","Addition in narration = ḍaʿīf per al-Arnaʾūṭ"]}}}));

/* 3. NEW: Satan touches every newborn except Maryam and ʿĪsā (#satan-berührt) */
const SB=AV('satan-berührt','https://discord.com/channels/1275832106949283962/1286096638196191313');
card('islam/hadith/unseen/satan-touches-newborn',{
 title:"Satan touches every newborn except Maryam and ʿĪsā?",
 k:"Qurʾān 3:36 · Fatḥ al-Bārī",
 blurb:"An answered duʿāʾ (3:36), not Jesus' superiority; classical Sunnīs read 'touch' as temptation, and the cry link is likely mawqūf.",
 claim:"Because Satan did not touch Jesus at birth while other children are touched, Jesus is superior to Muḥammad ﷺ—and Islam teaches Satan physically attacks every baby.",
 tree:N(SB,
  "The ḥadīth says Satan touches every newborn except Maryam and her son ʿĪsā. Doesn't that prove Jesus is higher than Muḥammad ﷺ?",
  "No. Al-Qurṭubī (via Fatḥ al-Bārī) explains that Maryam and ʿĪsā received a specific exception in answer to the pure duʿāʾ of Maryam's mother in Qurʾān 3:36 ('I seek refuge for her and her descendants from the accursed Satan'), and Maryam had no other offspring. An honour granted through a mother's prayer and Allah's will does not establish superiority over all other prophets.",
  "Why Maryam and ʿĪsā were exempted (3:36)",
  ["Al-Qurṭubī (in Fatḥ al-Bārī): Satan's touch at birth marks the beginning of his attempt to gain control over a human being; Allah shielded Maryam and her son through the blessing of Maryam's mother's supplication in 3:36.",
   "No other descendants: Because Maryam had no offspring other than ʿĪsā, the answered prayer for 'her descendants' applied uniquely to him.",
   "Honour, not supremacy: Concluding that ʿĪsā is superior to the Prophet Muḥammad ﷺ is a non sequitur—the exception reflects (a) Allah's wisdom and will, giving to whom He wills, and (b) divine recognition of a righteous mother's pure duʿāʾ."],
  ["Qurʾān 3:36","Ibn Ḥajar, Fatḥ al-Bārī (citing al-Qurṭubī)"],
  [
   N(SB,
    "Didn't the Prophet Muḥammad ﷺ need angels to cut open his chest and remove a black spot from Satan?",
    "No—he is the leader of all prophets and humanity (Ṣaḥīḥ Muslim), and the cleansing of his chest was not because he was defiled by the devil. It removed a natural portion present in every human heart as a lesson for us and prepared him for the unmatched gifts of revelation and the Miʿrāj.",
    "The Prophet's ﷺ rank and the opening of his chest",
    ["Leader of all prophets (Ṣaḥīḥ Muslim): 'I will be the leader of the children of Ādam on the Day of Resurrection, the first for whom the grave is opened, the first to intercede, and the first whose intercession is accepted.'",
     "Removal of the black spot: Removing the dark spot found in every human heart and washing his heart repeatedly with Zamzam water did not mean he was tainted by Satan; rather, it removed a general human trait and warned the umma of what can grow in the heart if neglected.",
     "Preparation for Miʿrāj: The washing prepared his blessed heart for immense prophetic gifts—strength, knowledge, wisdom, love, and compassion—and for the Night Ascension into heaven and the blessed vision of his Lord, an honour granted to no prophet before him."],
    ["Ṣaḥīḥ Muslim (leadership of Ādam's children)"],
    [],
    {facts:[["Status","Leader of all prophets"],["Source","Ṣaḥīḥ Muslim"],["Event","Opening of the chest"],["Purpose","Preparation for Miʿrāj"]],
     quotes:[{by:"Prophet Muḥammad ﷺ",en:"I will be the leader of the children of Ādam on the Day of Resurrection, the first for whom the grave is opened, the first to intercede, and the first whose intercession is accepted.",ref:"Ṣaḥīḥ Muslim"}]}),
   N(SB,
    "Does the ḥadīth literally prove Satan physically pokes every baby so it cries?",
    "Not necessarily—for two distinct reasons. First, ḥadīth criticism finds that while Satan touching the newborn is marfūʿ (prophetic), the clause linking it to the baby's cry is likely an ʿilla (defect)—a mawqūf addition from Abū Hurayra. Second, a major classical Sunnī stream reads 'touch' (mass) figuratively as Satan's ambition to misguide.",
    "Ḥadīth ʿilla & Sunnī exegetical tradition",
    ["Ḥadīth-critical distinction (ʿilla check): The core statement that Satan touches the newborn is marfūʿ, whereas the explanation that the infant cries because of that touch is likely an ʿilla—specifically a mawqūf explanatory insertion by Abū Hurayra (detailed in the channel's PDF: Geburtsschrei_Illa_Pruefung_20261115_v2.pdf).",
     "Al-Bayḍāwī (d. 685 AH, Shāfiʿī, Ashʿarī) in Anwār al-Tanzīl on 3:36: reads it as Satan aspiring to misguide every newborn so they are affected by him, except Maryam and her son whom Allah protected; in Tuḥfat al-Abrār he combines initial harm with preparation for later temptation.",
     "Ibn Malak — father (d. 801 AH, Mabāriq al-Azhār) & son (d. 854 AH, Sharḥ al-Maṣābīḥ), Ḥanafīs: 'The better view is that what is meant by touch (mass) is the aspiration to misguide (al-ṭamaʿ fī al-ighwāʾ), not literal touch'; Maryam's mother's prayer refers to protection from temptation.",
     "Abū al-Suʿūd (d. 982 AH, Ḥanafī, Irshād al-ʿAql al-Salīm), Ismāʿīl Ḥaqqī (d. 1127 AH, Rūḥ al-Bayān), and al-Marāghī (d. 1371 AH, Azhar Tafsīr): all adopt al-Bayḍāwī's reading verbatim.",
     "Ibn ʿAjība (d. 1224 AH, Mālikī, al-Baḥr al-Madīd): adopts the same reading and explicitly extends it: 'I say: and likewise all the prophets.'",
     "Muḥammad ʿAbduh (d. 1323 AH): viewed the ḥadīth as figurative/parabolic (min qabīl al-tamthīl), as reported by Rashīd Riḍā (al-Manār 32/767)."],
    ["al-Bayḍāwī, Anwār al-Tanzīl 3:36 & Tuḥfat al-Abrār","Ibn Malak, Mabāriq al-Azhār & Sharḥ al-Maṣābīḥ","Abū al-Suʿūd; Ismāʿīl Ḥaqqī; Ibn ʿAjība; al-Marāghī","Rashīd Riḍā, al-Manār 32/767"],
    [],
    {facts:[["Marfūʿ Core","Satan's touch/attempt"],["Birth Cry","Likely mawqūf (ʿilla)"],["Major Reading","Desire to misguide"],["Extension","All prophets (Ibn ʿAjība)"]],
     quotes:[{by:"Al-Bayḍāwī (d. 685 AH)",ar:"ومعناه أن الشيطان يطمع في إغواء كل مولود بحيث يتأثر منه، إلا مريم وابنها، فإن الله تعالى عصمهما ببركة هذه الاستعاذة",en:"Its meaning is that Satan aspires to lead every newborn astray such that they are affected by him, except Maryam and her son, for Allah Most High protected them both through the blessing of this seeking of refuge.",ref:"Anwār al-Tanzīl on 3:36"},
             {by:"Ibn Malak (father d. 801 / son d. 854 AH)",ar:"والأوجه أن المراد من المس الطمع في الإغواء لا حقيقة المس",en:"The better view is that what is meant by 'touch' is the aspiration to misguide, not literal physical touch.",ref:"Mabāriq al-Azhār / Sharḥ al-Maṣābīḥ"},
             {by:"Ibn ʿAjība (d. 1224 AH)",ar:"قلت: وكذا الأنبياء كلهم",en:"I say: and likewise all the prophets [are protected].",ref:"al-Baḥr al-Madīd"}]})
  ],
  {facts:[["Verse","Qurʾān 3:36"],["Exegete","al-Qurṭubī / Fatḥ al-Bārī"],["Exception","Answer to Ḥanna's duʿāʾ"],["Verdict","Honour, not supremacy"]],
   quotes:[{by:"Qurʾān 3:36",en:"Indeed, I seek refuge for her and her descendants in You from the accursed Satan.",ref:"Sūrat Āl ʿImrān 3:36"}],
   visual:{kind:'steps',items:[
    ["Maryam's Mother's Duʿāʾ (3:36)","Prays for refuge from Satan for Maryam and her descendants; since Maryam only bore ʿĪsā, the protection passed uniquely to him."],
    ["Prophet Muḥammad's ﷺ Rank","Leader of the children of Ādam (Muslim); his chest was washed with Zamzam to remove the common human share and prepare him for Miʿrāj—not due to satanic taint."],
    ["Classical & Critical Readings","The birth-cry clause is likely a mawqūf addition from Abū Hurayra, and major Sunnī exegetes (al-Bayḍāwī, Ibn Malak, Abū al-Suʿūd, Ibn ʿAjība) read 'touch' as Satan's ambition to misguide."]]}}),
 sum:"Maryam and ʿĪsā's exemption honoured a mother's prayer in 3:36 without implying superiority over Muḥammad ﷺ, while major Sunnī scholars read 'touch' as temptation and the birth-cry link as likely mawqūf."});

/* 4. NEW: Riding a jinn / Night of the Jinn (#jinn-reiten) */
const JR=AV('jinn-reiten','https://discord.com/channels/1275832106949283962/1287532869530554490');
card('islam/hadith/unseen/jinn-riding',{
 title:"Did the Prophet ﷺ ride on a jinn?",
 k:"Tirmidhī 2861 · Aḥmad 4353",
 blurb:"Every chain behind the jinn-riding story is weak, disconnected, and rejected by al-Bukhārī and al-Dāraquṭnī.",
 claim:"Islamic narrations say the Prophet Muḥammad ﷺ rode on a jinn during the Night of the Jinn (and performed wuḍūʾ with wine).",
 tree:N(JR,
  "Tirmidhī 2861, Mishkāt 3139, and other reports say the Prophet ﷺ rode on a jinn during the Night of the Jinn.",
  "All of those narrations are weak (ḍaʿīf) and unauthentic. Classic and modern ḥadīth authorities—including Imām al-Bukhārī, al-Dāraquṭnī, Yaḥyā ibn Maʿīn, Aḥmad ibn Ḥanbal, Zubayr ʿAlī Zaʾī, and Shuʿayb al-Arnaʾūṭ—reject the chains due to weak, confused, and disconnected narrators.",
  "Broken isnāds (Tirmidhī 2861 & al-Bayhaqī)",
  ["Tirmidhī 2861 / Mishkāt 3139: Graded weak by both Zubayr ʿAlī Zaʾī and Shuʿayb al-Arnaʾūṭ.",
   "Al-Bayhaqī, Shuʿab al-Īmān (no. 8669 & 8670): No. 8669 runs through Abū Bakr ibn Abī Maryam (weak) and [Abī] al-Mujāshiʿ al-Azdī (unclear/unknown) from ʿUmar; no. 8670 from Anas contains Aḥmad ibn Bashīr ibn Saʿd al-Marthadī, explicitly described as foolish (aḥmaq) and the defect of the narration, whose report is odd and rare.",
   "Abū Tamīma ambiguity: In the Ibn Masʿūd route, it is unclear whether 'Abū Tamīma' refers to Abū Tamīma al-Hujaymī or someone else; sources such as al-Ṭaḥāwī confuse him with a Baṣran narrator.",
   "ʿAmr al-Bikālī (Abū ʿUthmān): There is no proof he heard directly from Ibn Masʿūd (al-Marāsīl highlights this disconnection).",
   "Jaʿfar ibn Maymūn: Graded weak by Yaḥyā ibn Maʿīn and Aḥmad ibn Ḥanbal."],
  ["Jāmiʿ al-Tirmidhī 2861 (Mishkāt 3139)","al-Bayhaqī, Shuʿab al-Īmān 8669–8670","al-Marāsīl","al-hādees.com/mishkat/3139"],
  [
   N(JR,
    "What about the content, contradictions, and Musnad Aḥmad 4353 (wuḍūʾ with wine)?",
    "The text contradicts Ṣaḥīḥ Muslim on whether Ibn Masʿūd was even present, clashes with authentic descriptions of the Night of the Jinn, and Aḥmad 4353 is likewise graded weak (ḍaʿīf) by al-Arnaʾūṭ.",
    "Contradictions, matn rejection & Aḥmad 4353",
    ["Ibn Masʿūd contradiction: Multiple authentic reports in Ṣaḥīḥ Muslim state Ibn Masʿūd was not present during the Night of the Jinn, directly contradicting versions claiming he witnessed it; details about traces and fires are also inconsistently reported.",
     "Content implausibility: Authentic narrations portray the Prophet's ﷺ meeting with the jinn as a spiritual/daʿwa encounter reciting the Qurʾān, not physically riding a jinn.",
     "Scholarly consensus against authenticity: Imām al-Bukhārī and al-Dāraquṭnī reject the narration as unauthentic; Tafsīr Ibn Kathīr and Musnad Aḥmad commentaries confirm the chain is weak and the content questionable.",
     "Aḥmad 4353 (wuḍūʾ with nabīdh/wine): The narration where a jinn dark as a date-palm trunk appears, mentions the Zuṭṭ, and the Prophet ﷺ supposedly asks for wine to perform wuḍūʾ is explicitly graded ḍaʿīf by Shuʿayb al-Arnaʾūṭ."],
    ["Ṣaḥīḥ Muslim (Night of the Jinn)","al-Bukhārī & al-Dāraquṭnī","Tafsīr Ibn Kathīr","Musnad Aḥmad 4353 (al-Arnaʾūṭ: ḍaʿīf)"],
    [],
    {facts:[["Authorities","al-Bukhārī & al-Dāraquṭnī"],["Witness Issue","Ibn Masʿūd absent (Muslim)"],["Aḥmad 4353","Ḍaʿīf per al-Arnaʾūṭ"],["Verdict","Rejected matn & isnād"]]})
  ],
  {facts:[["Primary Texts","Tirmidhī 2861; Aḥmad 4353"],["Gradings","Ḍaʿīf (Arnaʾūṭ, ʿAlī Zaʾī)"],["Problem Narrators","al-Marthadī, Jaʿfar, al-Bikālī"],["Verdict","Unauthentic report"]],
   visual:{kind:'steps',items:[
    ["Tirmidhī 2861 / Shuʿab al-Īmān 8669–8670","Relies on weak/unclear narrators (Abū Bakr ibn Abī Maryam, al-Mujāshiʿ al-Azdī, and the 'foolish' Aḥmad ibn Bashīr al-Marthadī)."],
    ["Ibn Masʿūd Route","Suffers from confusion over Abū Tamīma, disconnection between ʿAmr al-Bikālī and Ibn Masʿūd, and weak Jaʿfar ibn Maymūn."],
    ["Contradiction & Rejection","Clashes with Ṣaḥīḥ Muslim (Ibn Masʿūd was absent); rejected by al-Bukhārī, al-Dāraquṭnī, and al-Arnaʾūṭ (including Aḥmad 4353)."]]}}),
 sum:"The jinn-riding and wine-wuḍūʾ narrations (Tirmidhī 2861, Bayhaqī 8669–8670, Aḥmad 4353) are graded weak and rejected by al-Bukhārī, al-Dāraquṭnī, Ibn Kathīr, al-Arnaʾūṭ, and ʿAlī Zaʾī."});

/* 5. NEW: Black seed & seven ʿAjwa dates (#dattel-und-schwarzkümmelöl-heilt-vor-gift) */
const DB=AV('dattel-und-schwarzkümmelöl-heilt-vor-gift','https://discord.com/channels/1275832106949283962/1288668033384185891');
card('islam/hadith/others/ajwa-dates-black-seed',{
 title:"Black seed cures every disease & 7 ʿAjwa dates protect from poison?",
 k:"Hermeneutics · Baraka · Mark 16:18",
 blurb:"Arabic 'kull' is context-bounded (46:25), ʿAjwa protection is baraka and ʿibāda conditional on mawāniʿ, and the Gospels make far bolder claims.",
 claim:"The ḥadīths saying black seed cures every disease and eating seven ʿAjwa dates prevents poison and magic are scientifically false.",
 tree:N(DB,
  "A ḥadīth says black seed is a cure for 'every disease'—that's medically false.",
  "Classical Islamic scholars never read 'every disease' as an absolute literal universal. Just as Qurʾān 46:25 says a wind destroyed 'everything' (kull) while leaving dwellings standing, Arabic 'kull' routinely denotes every applicable thing—here, illnesses treatable by its properties.",
  "Linguistic scope of 'kull' & classical jurists",
  ["Qurʾān 46:25 parallel: The Qurʾān says the wind destroyed 'everything' (kull), yet dwellings remained visible—proving 'kull' in Arabic frequently carries a contextually restricted sense (as detailed by scholars in works on linguistic generality, including al-Suyūṭī—transcribed as 'Sulti' in the channel notes).",
   "Prophetic medical framework: Another ḥadīth states Allah sent no disease without sending a cure for it—meaning specific remedies correspond to specific ailments, not one panacea. If black seed cured literally everything, other prophetic treatments (like honey or cupping) would be pointless.",
   "Reading the corpus holistically: Isolating a single ḥadīth while ignoring classical Arabic idiom and parallel narrations reflects a superficial reading of the tradition (the channel also attaches Heilmittel_Hadithe_Hermeneutik_und_Argumente.pdf, 866.88 KB).",
   "Ibn Ḥajar al-ʿAsqalānī (Fatḥ al-Bārī) & Ibn al-Jawzī (transcribed in notes as 'Ibn und Jose'): Classical scholars understood 'every disease' metaphorically/restrictedly—Ibn Ḥajar specifies it applies to diseases treatable by it (beneficial for cold illnesses, not hot ones).",
   "Al-Khaṭṭābī: The wording is general, yet the intent is specific—no single plant cures every disease; it heals illnesses caused by cold/moisture.",
   "Abū Bakr ibn al-ʿArabī: Physicians regard honey as even closer to a general cure than black seed, yet honey can worsen certain conditions; if Qurʾān 16:69 ('in it is healing for people') means most diseases, the same applies all the more to black seed.",
   "Ibn al-Qayyim (Zād al-Maʿād 4/297) & Ibn Abī Jamra (Fatḥ al-Bārī 10/145): Ibn al-Qayyim likens it directly to 46:25 ('everything capable of being destroyed'), while Ibn Abī Jamra cautions against treating physicians' fallible experience as overriding prophetic truth."],
  ["Qurʾān 46:25; 16:69","Ibn Ḥajar, Fatḥ al-Bārī 10/145 (citing Ibn Abī Jamra)","Ibn al-Qayyim, Zād al-Maʿād 4/297","al-Khaṭṭābī; Abū Bakr ibn al-ʿArabī"],
  [
   N(DB,
    "What about the ḥadīth that eating seven ʿAjwa dates in the morning prevents poison and magic? Dates have no chemical antidote.",
    "The protection does not reside in the date's chemical composition—as al-Khaṭṭābī (d. 388 AH) explicitly clarified. Rather, as Mohammed Hijab explains via classical scholarship, it works through the prophetic blessing (baraka), as an act of worship (ʿibāda) comparable to protective duʿāʾs, and remains subject to mawāniʿ (impediments).",
    "ʿAjwa dates: Baraka, ʿibāda & mawāniʿ",
    ["Not a chemical property (al-Khaṭṭābī, d. 388 AH): There is nothing intrinsic in the chemical makeup of the date that neutralises poison; the effect comes from the blessing (baraka) of the Prophet's ﷺ supplication.",
     "Sober boundary between experiment and text: Commentators (cited in the notes as 'Ibn Karim') even discussed whether the report pertained to a specific time and place unless empirically confirmed—showing classical scholars distinguished empirical medicine from prophetic reports.",
     "Parallel with protective duʿāʾs (ʿibāda): The Prophet ﷺ also promised that reciting 'I seek refuge in the perfect words of Allah from the evil of what He created' protects from all harm. Since words involve no chemical ingestion, eating the seven dates likewise operates as an act of worship (ʿibāda) akin to drinking Zamzam, performing wuḍūʾ, or making duʿāʾ.",
     "Concept of Mawāniʿ (impediments): Just as an otherwise answered duʿāʾ can be blocked when one consumes or earns what is ḥarām, protection via ʿAjwa dates is conditional and can be voided by mawāniʿ—a spiritual framework beyond reductionist materialism."],
    ["al-Khaṭṭābī (d. 388 AH)","Mohammed Hijab (refutation citing classical scholars)","Prophetic duʿāʾ parallels"],
    [],
    {facts:[["Scholar","al-Khaṭṭābī (d. 388 AH)"],["Mechanism","Baraka & ʿibāda"],["Condition","Absence of mawāniʿ"],["Comparison","Protective duʿāʾs"]],
     visual:{kind:'steps',items:[
      ["1. Not Date Chemistry","Al-Khaṭṭābī rejects any inherent chemical antidote in the date; the source is prophetic baraka."],
      ["2. Act of Worship (ʿIbāda)","Like protective evening supplications, wuḍūʾ, or Zamzam, obedience—not pharmacology—grounds the promise."],
      ["3. Conditional on Mawāniʿ","Sin, ḥarām sustenance, or spiritual impediments (mawāniʿ) can suspend divine protection, just as with duʿāʾ."]]}}),
   N(DB,
    "Does the Bible make literal claims about immunity to poison and miraculous power?",
    "Far more sweeping ones! Mark 16:18 literally promises believers will handle snakes and drink deadly poison unharmed—alongside five more New Testament passages promising believers will move mountains and suffer no harm from snakes or scorpions.",
    "Bible counter-argument: Mark 16:18 & five parallels",
    ["Mark 16:18 (KJV): Believers will pick up serpents, 'and if they drink any deadly thing, it shall not hurt them; they shall lay hands on the sick, and they shall recover.'",
     "Matthew 17:20: Faith like a mustard seed moves a mountain, 'and nothing will be impossible for you.'",
     "John 14:12: 'Whoever believes in me will also do the works that I do; and greater works than these will he do.'",
     "Matthew 21:21 & Mark 11:23: Commanding a mountain to be lifted and thrown into the sea without doubting, and it will happen.",
     "Luke 10:19: 'Behold, I have given you authority to tread on serpents and scorpions, and over all the power of the enemy, and nothing shall hurt you.'"],
    ["Mark 16:18; 11:23","Matthew 17:20; 21:21","Luke 10:19","John 14:12"],
    [],
    {facts:[["Poison Claim","Mark 16:18 (deadly drink)"],["Serpents","Mark 16:18; Luke 10:19"],["Mountains","Matt 17:20; 21:21; Mark 11:23"],["Greater Works","John 14:12"]],
     quotes:[{by:"Mark 16:18 (KJV)",en:"They shall take up serpents; and if they drink any deadly thing, it shall not hurt them; they shall lay hands on the sick, and they shall recover.",ref:"Mark 16:18"},
             {by:"Luke 10:19",en:"Behold, I have given you authority to tread on serpents and scorpions, and over all the power of the enemy, and nothing shall hurt you.",ref:"Luke 10:19"},
             {by:"Matthew 17:20",en:"For truly, I say to you, if you have faith like a grain of mustard seed, you will say to this mountain, 'Move from here to there,' and it will move, and nothing will be impossible for you.",ref:"Matthew 17:20"},
             {by:"John 14:12",en:"Truly, truly, I say to you, whoever believes in me will also do the works that I do; and greater works than these will he do, because I am going to the Father.",ref:"John 14:12"}]})
  ],
  {facts:[["Linguistic Rule","Kull = context-bound (46:25)"],["Exegetes","Ibn Ḥajar, al-Khaṭṭābī, Ibn al-Qayyim"],["ʿAjwa Principle","Baraka + ʿibāda − mawāniʿ"],["Verdict","Misread idiom & theology"]],
   quotes:[{by:"Ibn Ḥajar al-ʿAsqalānī",en:"It was said that the words 'every disease' refer to every disease that can be treated with it, because it is beneficial for cold illnesses, though not for hot illnesses.",ref:"Fatḥ al-Bārī"},
           {by:"Ibn al-Qayyim",en:"The words 'healing from every disease' are like the verse in which Allah says: 'Everything was destroyed by the command of its Lord' [al-Aḥqāf 46:25]—meaning it destroyed everything susceptible to destruction.",ref:"Zād al-Maʿād 4/297"},
           {by:"Abū Bakr ibn al-ʿArabī",en:"According to physicians, honey is more of a cure for every disease than black seed, yet there are diseases where consuming honey worsens the condition.",ref:"Quoted in Fatḥ al-Bārī"}],
   visual:{kind:'compare',
    left:{title:"Polemicist's Literalism",items:["Forces 'kull' (all) into an absolute universal","Treats ʿAjwa dates as chemical pharmacology","Ignores Mark 16:18 ('drink deadly poison unharmed')"]},
    right:{title:"Classical Islamic Methodology",items:["Reads 'kull' like 46:25 (Ibn al-Qayyim, al-Khaṭṭābī)","Understands ʿAjwa as prophetic baraka & ʿibāda (subject to mawāniʿ)","Reads individual reports within the full ḥadīth corpus"]}}}),
 sum:"Arabic 'kull' is context-bounded like Qurʾān 46:25 (Ibn al-Qayyim, al-Khaṭṭābī), ʿAjwa protection rests on prophetic baraka and ʿibāda rather than date chemistry, and Mark 16:18 promises far broader poison immunity."});

/* 6. NEW: Licking fingers after eating (#finger-lecken) */
const FL=AV('finger-lecken','https://discord.com/channels/1275832106949283962/1294761230375977041');
card('islam/hadith/law/licking-fingers-after-eating',{
 title:"Bukhārī 5456: Does Islam command having strangers lick your fingers?",
 k:"Bukhārī 5456 · Muslim 2031–2035",
 blurb:"'Somebody else' is absent from the Arabic; 'or' reflects narrator caution, confirmed by Muslim 2032–2035 and al-Bayhaqī.",
 claim:"Bukhārī 5456 orders Muslims to have someone else lick their fingers after eating.",
 tree:N(FL,
  "Sunnah.com's translation of Bukhārī 5456 says 'until he licks them or has somebody else lick them.'",
  "The words 'somebody else' do not exist anywhere in the Arabic! The two clauses are 'until he licks it' or 'until he has it licked'—a minor verbal hesitation by the narrator trying to preserve exact wording, just as al-Bayhaqī explains, while four clear narrations in Ṣaḥīḥ Muslim prove you lick your own fingers.",
  "Arabic text, narrator caution & Ṣaḥīḥ Muslim",
  ["Mistranslation on sunnah.com: The Arabic of Bukhārī 5456 and Muslim 2031 does not contain 'by someone else'; Muslim 2031 renders the pair accurately without inserting strangers.",
   "Narrator caution (shakk): The narrator wasn't sure whether the Prophet ﷺ used the active ('until he licks his hand') or causative/passive ('until he has it licked') verb form. Because the Prophet ﷺ warned severely against attributing unverified words to him, narrators preserved even tiny verbal uncertainties verbatim (just as Ibn ʿAbbās once misremembered Maymūna's marriage as occurring in iḥrām, corrected by other authentic reports as al-Albānī noted).",
   "Everyday analogy: Telling guests 'black or dark clothing' out of caution when the host actually said 'black clothing' shows scrupulous transmission, not two unrelated commands.",
   "Four decisive ḥadīths in Ṣaḥīḥ Muslim: Every parallel narration explicitly specifies one's own fingers—Muslim 2035 ('let him lick his fingers'), Muslim 2033b ('until he has licked his fingers'), Muslim 2032c (Kaʿb: the Prophet ﷺ ate with three fingers and licked them), and Muslim 2034 (Anas: he licked his three fingers).",
   "Zero Ṣaḥāba precedent: No Companion ever licked another adult's fingers; had it been commanded, we would have clear reports of the Ṣaḥāba practising it."],
  ["Ṣaḥīḥ al-Bukhārī 5456","Ṣaḥīḥ Muslim 2031, 2032c, 2033b, 2034, 2035","al-Albānī (on Ibn ʿAbbās's iḥrām slip)"],
  [
   N(FL,
    "What do al-Bayhaqī and commentators who allow 'having it licked' actually say?",
    "Al-Bayhaqī affirms the 'or' is simply narrator uncertainty over exact wording and both refer to the eater himself; jurists who discuss someone else licking restrict it strictly to intimate family who feel no disgust.",
    "Al-Bayhaqī, family scope & Hippolytus Canon 29",
    ["Al-Bayhaqī's verdict: Confirms the disjunction reflects narrator uncertainty over the precise verb form, while both expressions still mean the person himself.",
     "Intimate family only: Those scholars who still entertained the second wording ('having it licked') expressly limited it to people who feel no aversion—such as a young son, one's wife, or a household servant/attendant (historically often very young).",
     "Church counter-argument (Hippolytus of Rome, Canons — Canon 29): Early Christian discipline likewise worried about sacred particles—Canon 29 warns priests to take great care that nothing from the Eucharistic host falls to the floor, lest an 'evil spirit' gain power over the believers."],
    ["al-Bayhaqī","Hippolytus of Rome, Canons (Canon 29)"],
    [],
    {facts:[["Al-Bayhaqī","Both mean oneself"],["Permitted Scope","Young child / spouse only"],["Church Parallel","Hippolytus Canon 29"]],
     quotes:[{by:"Hippolytus of Rome (paraphrase)",en:"Priests must take care that nothing of the consecrated hosts falls onto the ground, lest an 'evil spirit' gain power over the believers.",ref:"Canons of Hippolytus, Canon 29"}]})
  ],
  {facts:[["Arabic Text","No 'somebody else'"],["Parallel Texts","Muslim 2031–2035"],["Companion Practice","Zero adult-to-adult cases"],["Verdict","Own fingers only"]],
   quotes:[{by:"Ṣaḥīḥ Muslim 2035",en:"When one of you eats food, let him lick his fingers, for he does not know in which part of the food clinging to his fingers the blessing lies.",ref:"Ṣaḥīḥ Muslim 2035"},
           {by:"Ṣaḥīḥ Muslim 2032c",en:"Kaʿb told him that Allah's Messenger ﷺ ate with three fingers and after he had finished eating, he licked them.",ref:"Ṣaḥīḥ Muslim 2032c"}],
   visual:{kind:'compare',
    left:{title:"Polemicist's Misreading",items:["Relies on 'somebody else' added in English","Ignores Muslim 2032c, 2033b, 2034, 2035","Ignores zero precedent among the Ṣaḥāba"]},
    right:{title:"Linguistic & Ḥadīth Reality",items:["Arabic has no 'stranger/somebody else'","'Or' = narrator caution on verb form (al-Bayhaqī)","All clear parallels specify licking one's own three fingers"]}}}),
 sum:"The Arabic of Bukhārī 5456 never mentions 'somebody else'—'or' reflects narrator caution over the verb form (al-Bayhaqī), while Muslim 2032–2035 and Ṣaḥāba practice confirm one licks one's own fingers."});

/* 7. NEW: The talking donkey “Ibn Fulān” narration (#esel-ibn-fulan) */
const EF=AV('esel-ibn-fulan','https://discord.com/channels/1275832106949283962/1350608877561057280');
card('islam/hadith/others/donkey-ibn-fulan',{
 title:"The talking donkey with a 60-generation lineage (“Ibn Fulān”)",
 k:"Fabricated (Mawḍūʿ) · Ibn Ḥibbān · Ibn al-Jawzī",
 blurb:"Disconnected (mursal), transmitted through rejected fabricators (Ibn Udhayna & Muḥammad ibn Mazīd), and condemned as mawḍūʿ across 12+ authorities.",
 claim:"Islamic ḥadīth authentically teach that the Prophet's ﷺ donkey spoke, recited a 60-donkey genealogy, and told of a Jew who beat him.",
 tree:N(EF,
  "Islamic sources narrate a bizarre ḥadīth about a talking donkey giving a 60-generation lineage—Islam believes absurd fables.",
  "Islamic ḥadīth scholars themselves unanimously dismantled and rejected this report! Every route collapses on multiple counts: a disconnected (mursal) link between Khālid ibn Maʿdān and Muʿādh ibn Jabal, the rejected fabricator ʿAbdullāh ibn Udhayna, and the untrustworthy Muḥammad ibn Mazīd—leading Ibn Ḥibbān, Ibn al-Jawzī, al-Dhahabī, Ibn Ḥajar, al-Shawkānī, and al-Albānī to brand it baseless or fabricated (mawḍūʿ).",
  "Chain 1: Mursal disconnection (Khālid ibn Maʿdān)",
  ["Unconnected chain from Muʿādh ibn Jabal: The first route runs from Muʿādh ibn Jabal through Khālid ibn Maʿdān—who never met Muʿādh, rendering the chain mursal (disconnected) and weak (ḍaʿīf).",
   "Abū Ḥātim al-Rāzī (via Ibn Abī Ḥātim, al-Jarḥ wa al-Taʿdīl 3/351): 'The narrations of Khālid ibn Maʿdān from Muʿādh ibn Jabal are mursal. There could even be two persons between them.'",
   "Al-Tirmidhī (Jāmiʿ al-Tirmidhī 4/276): 'Khālid ibn Maʿdān did not meet Muʿādh ibn Jabal. His narrations from Muʿādh are not connected (mursal).'",
   "Abū Bakr al-Bazzār & al-ʿAlāʾī (Tuḥfat al-Taḥṣīl fī al-Marāsīl, p. 111): Both state explicitly that Khālid ibn Maʿdān did not hear from Muʿādh and there is no direct link between them.",
   "Al-Ismāʿīlī (Tahdhīb al-Tahdhīb 1/532) & al-Mizzī (Tahdhīb al-Kamāl 8/167): Both confirm at least one intermediary stands between Khālid ibn Maʿdān and Muʿādh ibn Jabal."],
  ["al-Jarḥ wa al-Taʿdīl 3/351","Jāmiʿ al-Tirmidhī 4/276","Tuḥfat al-Taḥṣīl p. 111","Tahdhīb al-Tahdhīb 1/532","Tahdhīb al-Kamāl 8/167"],
  [
   N(EF,
    "What about the other route through ʿAbdullāh ibn Udhayna?",
    "Every narration of that route passes through ʿAbdullāh ibn Udhayna—whom the masters of rijāl rejected as a fabricator and untrustworthy narrator.",
    "Chain 2: ʿAbdullāh ibn Udhayna (rejected & fabricator)",
    ["Ibn Ḥibbān: Notes he possessed a manuscript collection (nuskha) that may only be cited critically, narrated reports not from Thawr ibn Yazīd, and that it is forbidden to use him as a source.",
     "Al-Dāraquṭnī: Classifies him as matrūk al-ḥadīth (abandoned / untrustworthy in transmission).",
     "Al-Ḥākim & al-Naqqāsh: State explicitly that he transmitted fabricated (mawḍūʿ) ḥadīths.",
     "Ibn ʿAdī: Grades him munkar al-ḥadīth (rejected / erroneous) and notes he was also called ʿAbdullāh ibn ʿAṭārid (with Udhayna as his grandfather).",
     "Al-Dhahabī & Abū Nuʿaym: Al-Dhahabī records his biography (though omitting Ibn ʿAdī's naming note), and Abū Nuʿaym notes a report via him is exceedingly strange (gharīb jiddan)."],
    ["Ibn Ḥibbān; al-Dāraquṭnī","al-Ḥākim; al-Naqqāsh","Ibn ʿAdī; al-Dhahabī; Abū Nuʿaym"],
    [],
    {facts:[["Key Narrator","ʿAbdullāh ibn Udhayna"],["al-Dāraquṭnī","Matrūk al-ḥadīth"],["al-Ḥākim & Naqqāsh","Fabricated ḥadīths"],["Ibn ʿAdī","Munkar al-ḥadīth"]]}),
   N(EF,
    "What did scholars say about the 60-generation donkey genealogy & the Jew, and did Ibn Kathīr accept it?",
    "Scholars across the centuries branded the full story baseless and fabricated (mawḍūʿ) because of Muḥammad ibn Mazīd and unknown narrators—and Ibn Kathīr himself explicitly records that major ḥadīth masters rejected it.",
    "Mawḍūʿ verdicts & Ibn Kathīr's testimony",
    ["Ibn Ḥibbān (Abū Ḥātim ibn Ḥibbān): 'This report has no basis, and its chain is nothing/worthless'—warning it is unlawful to rely on Muḥammad ibn Mazīd Abū Jaʿfar, who transmitted this 'invalid report (al-khabar al-bāṭil)'.",
     "Ibn al-Jawzī: Graded it fabricated (mawḍūʿ) and wrote 'May Allah curse whoever fabricated it,' noting it only serves to defame and mock Islam.",
     "Al-Albānī (Silsilat al-Aḥādīth al-Ḍaʿīfa): Graded the report fabricated (bi-l-waḍʿ).",
     "Al-Ḥāfiẓ Abū Mūsā al-Madīnī: Called it 'exceedingly reprehensible (munkar jiddan), both in its chain and in its text.'",
     "Al-Dhahabī (Talkhīṣ Kitāb al-Mawḍūʿāt), Ibn ʿIrāq, al-Shawkānī (al-Fawāʾid al-Majmūʿa), Shādī Āl Nuʿmān (al-Jāmiʿ li-Kutub al-Ḍuʿafāʾ), & Fatāwā Dār al-Iftāʾ al-Miṣriyya: All cite and endorse Ibn Ḥibbān and Ibn al-Jawzī's rejection of it as baseless and fabricated.",
     "Ibn Ḥajar al-ʿAsqalānī: Cites Ibn Ḥibbān ('bāṭil') and Ibn Abī Ḥātim on Muḥammad ibn Mazīd, and personally grades it very weak (shadīd al-ḍaʿf). Abū al-Qāsim calls it gharīb with several unknown narrators.",
     "Did Ibn Kathīr accept it? No! In al-Bidāya wa-l-Nihāya (vol. 9, p. 59; vol. 6 in some editions), Ibn Kathīr explicitly concludes: 'And more than one of the great ḥadīth scholars has rejected it.'"],
    ["Ibn Ḥibbān; Ibn al-Jawzī","al-Albānī, Silsila Ḍaʿīfa","al-Dhahabī, Talkhīṣ Kitāb al-Mawḍūʿāt","Ibn Ḥajar; al-Shawkānī; Ibn ʿIrāq","Ibn Kathīr, al-Bidāya wa-l-Nihāya 9/59"],
    [],
    {facts:[["Key Narrator","Muḥammad ibn Mazīd"],["Verdict","Fabricated (mawḍūʿ)"],["Ibn Ḥajar","Very weak (shadīd al-ḍaʿf)"],["Ibn Kathīr","Documents its rejection"]],
     quotes:[{by:"Ibn Ḥibbān",en:"This report has no basis, and its chain of transmission is nothing... it is not permissible to rely on Muḥammad ibn Mazīd.",ref:"Cited by Ibn Ḥajar, Ibn ʿIrāq & al-Shawkānī"},
             {by:"Ibn al-Jawzī",en:"Fabricated (mawḍūʿ)—may Allah curse whoever fabricated it.",ref:"Kitab al-Mawḍūʿāt (via al-Dhahabī)"},
             {by:"Ibn Kathīr",en:"And more than one of the great ḥadīth scholars has rejected it.",ref:"al-Bidāya wa-l-Nihāya (vol. 9, p. 59)"}]})
  ],
  {facts:[["Chain 1","Mursal (Khālid → Muʿādh)"],["Chain 2","ʿAbdullāh ibn Udhayna (matrūk)"],["60-Gen Story","Muḥammad ibn Mazīd (bāṭil)"],["Overall Verdict","Mawḍūʿ / rejected"]],
   quotes:[{by:"Al-Tirmidhī",en:"Khālid ibn Maʿdān did not meet Muʿādh ibn Jabal. His narrations from Muʿādh are not connected (mursal).",ref:"Jāmiʿ al-Tirmidhī 4/276"},
           {by:"Abū Mūsā al-Madīnī",en:"Exceedingly reprehensible (munkar jiddan), both in its chain of transmission and in its text.",ref:"Cited in classical verdicts"}],
   visual:{kind:'steps',items:[
    ["Chain 1: Mursal Break","Khālid ibn Maʿdān never met Muʿādh ibn Jabal (confirmed by Abū Ḥātim, al-Tirmidhī, al-Bazzār, al-ʿAlāʾī, al-Ismāʿīlī, al-Mizzī)."],
    ["Chain 2: Fabricator","Passes through ʿAbdullāh ibn Udhayna—graded matrūk (al-Dāraquṭnī), munkar (Ibn ʿAdī), and fabricator (al-Ḥākim, al-Naqqāsh)."],
    ["60-Generation Version","Transmitted by Muḥammad ibn Mazīd with unknown narrators; condemned as bāṭil/mawḍūʿ by Ibn Ḥibbān, Ibn al-Jawzī, al-Albānī, and rejected per Ibn Kathīr."]]}}),
 sum:"The talking-donkey ('Ibn Fulān') report is mursal via Khālid ibn Maʿdān, passes through rejected fabricators (Ibn Udhayna and Muḥammad ibn Mazīd), and is condemned as baseless or mawḍūʿ by Ibn Ḥibbān, Ibn al-Jawzī, Ibn Ḥajar, al-Dhahabī, and al-Albānī."});
})();
