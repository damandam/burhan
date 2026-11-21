/* Qurʾān AV batch 5 — 2026-11-20. Law channels from Averroes “Koran Scheinargumente 1/2” (not on the site before).
   add(): 4:34 (#sure-4-34), verse of stoning (#steinigungs-vers-abrogiert), naskh explainer (#verse-abrogiert-sure-2-106),
   inheritance ʿawl (#erbschaft-mathematischer-fehler), sword-verse card (#debattiere-vers-abeogiert).
   NEW: 65:4 (#sure-65-4, -hadithe, -tafsir) in Marriage › ʿĀʾisha; mutʿa (#muttah-erlaubt) in Marriage; marrying Christian/Jewish women 2:221 vs 5:5
   (#christen-und-juden-heiraten-widerspruch); donkey meat 6:145 (#esel-essen-verbot); 5:60 (#sure-5-60-muslime-sein-schelcht).
   #sure-6-55-rezitation-weg is already the 6:55 example on the qirāʾāt card.
   PDFs/scans: #sure-65-4 (Mündigkeit-Dossier + 3 PDFs + imgs), #sure-4-34 (Belegmappe + 2 imgs incl. Mālik), #esel (4 imgs). */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next)=>({they,we,more:Object.assign({h,p,src},cr),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('quran-av5: no card',key); };
const MAR='islam/morality/marriage/', Q='islam/quran/', P=Q+'preservation/', AC=Q+'d-ia-alleged-contradictions/';

/* 4:34 */
add('islam/morality/women/d-dr-quran-4-34-beating-your-wife',N(AV('sure-4-34','1279215695606841485'),
 "Muslim husbands may beat their wives whenever they refuse them.",
 "The Prophet ﷺ and the early authorities said the opposite. He said: “I detest a man who stands over his wife in a rage, the veins of his neck trembling, and strikes her.” Imām Mālik, asked whether a husband may strike his wife for refusing him in bed: “No, he may not strike her, for she may have a valid excuse.” And ʿAṭāʾ ibn Abī Rabāḥ, Ibn ʿAbbās's student and the great imām of Mecca, said the most it can be is a miswāk.",
 "The early limits",[
  "“I detest a man standing over his wife in a rage, his neck veins trembling, striking her” (al-Ḥasan ibn Sufyān and al-Daylamī, from Umm Kulthūm bint Abī Bakr; ʿAbd, from Asmāʾ bint Abī Bakr; Kanz al-ʿUmmāl 44980–44981). The same verb ḍaraba is used.",
  "Imām Mālik: no striking for refusing the bed, she may have an excuse; Ibn Rushd says he meant it as a prohibition (scan in the channel).",
  "ʿUmar in a sermon: “Don't strike the Muslims so that you humiliate them; don't deny them their rights so that you drive them to disbelief…” (Ibn Abī Shayba 35130, ḥasan per Zubayr ʿAlī Zaʾī).",
  "Even towards conquered non-Muslims: at Khaybar a leader complained that Muslims struck their women; the Prophet ﷺ became angry, gathered the people and said: “Allah has not permitted you to enter the houses of the People of the Book without permission, nor to strike their women…” (Abū Dāwūd 3050).",
  "Ḍaraba has many uses: the Prophet ﷺ “struck” Jarīr's chest with his hand and prayed for him to sit firmly on his horse (Ibn Mājah 159).",
  "A full dossier on 4:34 is in the channel (to capture)."],["Kanz al-ʿUmmāl 44980–44981","Abū Dāwūd 3050","Ibn Abī Shayba 35130","Ibn Mājah 159"]));

/* stoning */
add(P+'d-ia-common-claims/t-the-verse-of-stoning',N(AV('steinigungs-vers-abrogiert','1289903191680352256'),
 "If the stoning verse was Qurʾān, ʿUmar would have written it in the muṣḥaf.",
 "ʿUmar wanted to, and didn't, precisely because it wasn't to be part of the written Qurʾān: “If I didn't hate adding to the Book of Allah, I would have written it” (Tirmidhī 1431). He had even asked the Prophet ﷺ to let him write it when it came, and the Prophet ﷺ declined (Aḥmad 21086; al-Bayhaqī: “I can't have it written”). Its recitation was abrogated, its ruling kept by the Sunna; al-Bayhaqī knows of no disagreement on that.",
 "Recitation abrogated, ruling kept",["ʿUmar: “The Messenger of Allah ﷺ stoned, Abū Bakr stoned and I stone. If I didn't hate adding to the Book of Allah I would have written it in the muṣḥaf; I fear people will come, not find it in the Book of Allah, and disbelieve in it” (Tirmidhī 1431, ṣaḥīḥ). Another wording: “…I would have written it in the margin” (Aḥmad 157).","Zayd ibn Thābit: the Prophet ﷺ said “the old man and old woman, if they commit zinā, stone them”; ʿUmar: “When it came down I went to the Prophet ﷺ and said: let me write it”; Shuʿba: it was as if he disliked that (Aḥmad 21086). Al-Bayhaqī, al-Sunan al-Kubrā 15553: “I can't have it written.”","Al-Bayhaqī: this proves the ruling is established and its recitation abrogated; I know of no disagreement about it. Al-Bāqillānī (al-Intiṣār 1/364): it was among what he was forbidden to write. Ibn Ḥazm (al-Muḥallā 12/177): it was memorised and applied, but he didn't have it written in the maṣāḥif.","And the hadd is dropped at the slightest doubt: “Avert the prescribed punishments from Muslims as much as you can… better for the leader to err in pardoning than in punishing” (Tirmidhī 1424); al-Suyūṭī: “the ḥudūd are dropped by doubts” (al-Ashbāh wa al-Naẓāʾir 2/122). Four witnesses to the act itself were required."],["Tirmidhī 1424, 1431","Musnad Aḥmad 157, 21086","al-Bayhaqī, al-Sunan al-Kubrā 15553"]));

/* 2:106 on the naskh explainer */
add(P+'d-ia-abrogation-naskh',N(AV('verse-abrogiert-sure-2-106','1289736237032280064'),
 "2:106 “We bring something better” implies some verses are worse.",
 "Al-Baghawī: “better” means more beneficial, easier for you or with greater reward, not that one verse is better than another, for Allah's words are one and all good. And Christians also hold that parts of the Old Testament were superseded depending on context, as the Qurʾān's step-by-step ban on wine was.",
 "Al-Baghawī on 2:106",["“Better than it” means more useful, lighter or more rewarding in practice; Allah's speech is one, all of it good. The question form (“don't you know Allah has power over all things?”) means: indeed you know."],["Qurʾān 2:106","al-Baghawī on 2:106"]));

/* inheritance ʿawl */
add(Q+'d-ia-alleged-calculation-errors',N(AV('erbschaft-mathematischer-fehler','1283169854358032444'),
 "Allah should simply have given shares that never exceed 100%.",
 "Any other design is worse. With ten heir categories and three states each there are already 3^10 = 59,049 combinations, so listing every case is impossible. A strict priority list would give a husband everything and daughters nothing (against 4:7, every entitled heir has a share); fixed sums break with any estate size and inflation; context-dependent shares become circular. Relative shares plus proportional reduction (ʿawl) is the one rule that is universal, simple and fair.",
 "Why ʿawl is the necessary design",[
  "Example: daughters 2/3, father 1/6, mother 1/6, wife 1/8 = 112.5%. Divide 100 by 112.5 = 0.89 and scale every share by it.",
  "In most estates (estimates 85–90%) the shares fit directly, and any remainder is returned (radd).",
  "Proportional division of competing claims is what fairness axioms require (symmetry, monotony, efficiency); it's the standard solution for claims exceeding an estate.",
  "The Qurʾān's fractions (niṣf, rubʿ, thuluth, sudus) are ratios, not fixed slices; with five verses and a handful of fractions the system covers every family, any estate size, every era."],["Qurʾān 4:7; 4:11–12; 4:176"]));

/* debate verses on the sword-verse card */
add('islam/morality/war/sword-verse-abrogation',N(AV('debattiere-vers-abeogiert','1403747141540905022'),
 "At least the verses about debating Jews and Christians were abrogated by the sword verse.",
 "Ibn Taymiyya: that's false. Abrogation only happens where two rulings contradict, like the qibla towards Jerusalem and then the Kaʿba, or fasting vs feeding the poor. People under covenant aren't to be fought at all; they are to be invited and debated in the best way. And 29:46 already excepts only “those who do wrong”: aggressors aren't owed debate, those seeking knowledge always are.",
 "Ibn Taymiyya, al-Jawāb al-Ṣaḥīḥ 1/218–219",["Real abrogation examples: qibla (Jerusalem → Kaʿba); fasting Ramaḍān vs the option of feeding a poor person; the bequest to parents vs fixed inheritance shares.","29:46: “Argue with the People of the Book only in the best way, except those of them who do wrong.”"],["Qurʾān 29:46; 16:125","Ibn Taymiyya, al-Jawāb al-Ṣaḥīḥ 1/218–219"]));

/* 65:4 */
const S1=AV('sure-65-4','1278697589176270949'), S2=AV('sure-65-4-hadithe','1286686233585647676'), S3=AV('sure-65-4-tafsir','1286008976613572690');
card(MAR+'aisha/quran-65-4',{title:"65:4: “those who have not menstruated”",k:"ʿIdda · 65:4",blurb:"Girls showing puberty without a period, as al-Ḍaḥḥāk and Ibn al-Qayyim say.",
 claim:"65:4 gives an ʿidda for wives “who have not menstruated”, so the Qurʾān allows marrying and divorcing prepubescent girls.",
 tree:N(S3,"“…and those who have not menstruated” (65:4): an ʿidda for little girls. So the Qurʾān permits child marriage.",
  "The ʿidda exists to establish whether a woman is pregnant, and the whole verse is about doubt (“if you are in doubt”). A girl who can't menstruate can't get pregnant, so there would be no doubt. The verse is about young women who show the signs of puberty but haven't menstruated yet, where it's unclear whether a period has begun. Al-Ḍaḥḥāk, Ibn ʿAbbās's student: they are girls who haven't reached menstruation but already show the physical signs; their ʿidda is three months. Ibn al-Qayyim gives the example of a girl of about fifteen.",
  "The ʿidda logic",["Makkī ibn Abī Ṭālib (d. 437 AH), tafsīr 12/7544, from al-Ḍaḥḥāk: those who haven't menstruated are young girls who haven't yet had periods but show bodily signs; ʿidda three months; also Qatāda's view.","Abū Dāwūd: with the captives of Awṭās, wait until they menstruate so it's clear they aren't pregnant: the purpose is establishing pregnancy.","Ibn Abī Shayba 19105 (al-Ḍaḥḥāk): a slave woman who has reached puberty but not menstruated has an ʿidda of 45 days.","Ibn Taymiyya: for a woman who has reached the age of menstruation but doesn't menstruate, Aḥmad has two reports (al-Masāʾil 3/336)."],["Qurʾān 65:4","Makkī ibn Abī Ṭālib, tafsīr 12/7544","Ibn Abī Shayba 19105"],
  [N(S1,"Classical jurists still allowed fathers to marry off young girls.",
     "Even those jurists didn't allow consummation before she could bear it, and many required her consent at maturity. Ibn Ḥajar: she isn't handed over unless she can bear intercourse. Al-Tirmidhī: a group held that an orphan girl's marriage is suspended until maturity, when she may accept or annul it. Al-Ḥasan al-Baṣrī disliked marrying young children.",
     "Maturity before marriage",["Al-Tirmidhī, Sunan 2/402: the suspended marriage of an orphan girl with the option at maturity.","Al-Baghdādī on Abū Dāwūd 3/202: a young girl is only married after the age when her consent or refusal counts, since she is asked after puberty.","Ibn Abī Shayba 18238: al-Ḥasan disliked the marriage of small children. Ibn ʿAbbās: whoever is given children should name them well, raise them well, and marry them when they're grown (mawqūf, Shaddād ibn Ṭalḥa ← Muʿāwiya ibn Qurra).","Muslim 1812e (Ibn ʿAbbās's letter): orphanhood ends when the child reaches marriageable age with sound judgement and is given his property."],["Sunan al-Tirmidhī 2/402","Ibn Abī Shayba 18238","Muslim 1812e"]),
   N(S2,"Girls were married off as soon as possible.",
     "The Sunna places a girl's upbringing in her father's care until maturity: “Whoever raises two girls until they reach maturity (ḥattā tablughā) will come on the Day of Resurrection with me like this” (Muslim 2631). Al-Nawawī: “raises” means providing and educating, normally the father's role; only after maturity does she move to a husband. And Mālik's students discuss a free girl of eleven or twelve, not yet menstruating, as one commanded to pray, still a child.",
     "Muslim 2631 and the old custom",["Al-Nawawī on Muslim 2631: qāma ʿalayhimā bi-l-muʾna wa-l-tarbiya. Parallel wording “until they marry or die” treats leaving the home as a separate step after the care period.","A Meccan report: when a girl reached the age of women, her family dressed her up and brought her to circle the Kaʿba so people would know she had come of age and seek to marry her; then she stayed secluded until her wedding. Maturity, not childhood, was the threshold.","Three further dossiers on maturity before marriage are in the channel (to capture)."],["Muslim 2631"])]),
 sum:"65:4 concerns young women past the signs of puberty without a period, where pregnancy is in doubt (al-Ḍaḥḥāk, Ibn al-Qayyim); the Sunna sets maturity as the end of a girl's upbringing."});

/* mutʿa */
const MU=AV('muttah-erlaubt','1285951780554936330');
card(MAR+'mutah-temporary-marriage',{title:"Mutʿa: did Islam allow temporary marriage?",k:"Muslim 1407",blurb:"Briefly permitted in wartime, then forbidden by the Prophet ﷺ.",
 claim:"The Prophet ﷺ allowed mutʿa (temporary marriage), Ibn ʿAbbās and others practised it, and only ʿUmar forbade it later.",
 tree:N(MU,"ʿUmar was the first to forbid mutʿa, he says so himself. Before that the Prophet ﷺ allowed it.",
  "The prohibition is the Prophet's ﷺ own. ʿAlī told Ibn ʿAbbās: “Slowly, Ibn ʿAbbās! The Messenger of Allah ﷺ forbade it on the day of Khaybar, and the flesh of domestic donkeys” (Muslim 1407; al-Nasāʾī 3365). Sabra ibn Maʿbad: the Prophet ﷺ forbade it (Abū Dāwūd 2073). And ʿUmar's full words: “The Messenger of Allah ﷺ permitted mutʿa for three days, then forbade it” (Ibn Mājah).",
  "The Prophet's ﷺ prohibition",["ʿUmar, as caliph: the Messenger of Allah ﷺ permitted it for three days and then forbade it; whoever practises it while married will be stoned unless he brings four witnesses that the Prophet ﷺ allowed it again after forbidding it.","Ibn ʿAbbās was asked about mutʿa; a freedman said: it was only during jihād when women were few. Ibn ʿAbbās: “He has spoken the truth” (al-Bayhaqī 14162, ṣaḥīḥ). Al-Rāzī on 4:24: before his death Ibn ʿAbbās said: “O Allah, I repent to You of my view on mutʿa and on ṣarf.”","“Among the greatest sins before Allah: a man marries a woman, and when he has had his need of her divorces her and goes off with her dowry…” (al-Bayhaqī, al-Sunan al-Kubrā 14395, ḥasan per al-Albānī)."],["Muslim 1407d","al-Nasāʾī 3365","Abū Dāwūd 2073","al-Bayhaqī 14162, 14395"],
  [N(MU,"Abū Dharr, Saʿd ibn Abī Waqqāṣ and Ibn Masʿūd allowed it.",
     "Abū Dharr said it “was only for us (the Companions), not for you” (Muslim 1224d): past tense, already over. Saʿd speaks of what “we did” while Muʿāwiya was still a disbeliever, so before 630; and that report is about mutʿa of Ḥajj (tamattuʿ), as Muslim 1225c and its place in the book of Ḥajj show. Ibn Masʿūd allowed it in need, then dropped his view when he heard of the abrogation (al-Qurṭubī; al-Ismāʿīlī: “he did it and later left it”).",
     "The Companions' reports",["Fatḥ al-Salām (on ʿUmdat al-Aḥkām) 5/547: al-Qurṭubī: perhaps Ibn Masʿūd hadn't heard of the abrogation and later did and retracted."],["Muslim 1224d, 1225c"]),
   N(MU,"Saʿīd ibn Jubayr practised mutʿa, and Ibn ʿAbbās says the Prophet ﷺ did (Aḥmad 3121).",
     "The Saʿīd report (ʿAbd al-Razzāq 14020) runs through Ibn Jurayj, a mudallis who here says “I was told”, and ʿAbdullāh ibn ʿUthmān ibn Khuthaym, whom Ibn Maʿīn, ʿAlī ibn al-Madīnī, al-Nasāʾī and al-Dāraquṭnī weakened (Ibn Ḥajar: truthful, poor memory). And Aḥmad 3121, “the Prophet ﷺ practised mutʿa”, is weak per al-Arnaʾūṭ.",
     "Weak chains",["Aḥmad on Ibn Jurayj: when he says “so-and-so said” or “I was told”, he brings reprehensible things.","Ibn Khuthaym: Ibn Maʿīn “his ḥadīth aren't strong”; Ibn al-Madīnī “munkar al-ḥadīth”; al-Dāraquṭnī “weak, poor memory”; Abū Ḥātim “not to be used as proof”."],["ʿAbd al-Razzāq 14020","Musnad Aḥmad 3121"])]),
 sum:"Mutʿa was briefly allowed in wartime and forbidden by the Prophet ﷺ himself at Khaybar (ʿAlī, Muslim 1407); ʿUmar only enforced it, and the contrary reports are past-tense, Ḥajj-related or weak."});

/* marrying Christian/Jewish women */
card(MAR+'ahl-al-kitab-marriage-2-221-5-5',{title:"2:221 vs 5:5: may Muslims marry Christian and Jewish women?",k:"General and specific",blurb:"A later, explicit exception: “This day…”",
 claim:"2:221 forbids marrying polytheists, but 5:5 allows Christian and Jewish women, whom the Qurʾān elsewhere calls polytheists. A contradiction.",
 tree:N(AV('christen-und-juden-heiraten-widerspruch','1286287783715016768'),"The Qurʾān forbids marrying polytheist women (2:221) and then allows Christian and Jewish women (5:5).",
  "That's a general rule with a later specific exception, which Allah is entitled to make. Sūra 5 is among the last revealed, and the verse itself marks the change: “This day (al-yawm) are made lawful to you… the chaste women of those given the Book before you” (5:5). “This day” shows it wasn't lawful before. In fiqh, the specific is carved out of the general (ʿāmm and khāṣṣ).",
  "ʿĀmm and khāṣṣ",["2:221 is general: no marriage with mushrik men or women.","5:5, revealed late, carves out an exception for chaste women of the People of the Book."],["Qurʾān 2:221; 5:5"]),
 sum:"5:5 (“This day…”) is a later, explicit exception to the general rule of 2:221."});

/* donkey meat */
card(AC+'donkey-meat-6-145',{title:"6:145 lists four forbidden foods, so why is donkey meat forbidden?",k:"Gradual legislation",blurb:"A Meccan verse, and a Medinan ruling at Khaybar years later.",
 claim:"6:145 says “I find nothing forbidden except four things”, yet ḥadīth forbid domestic donkeys. The Sunna contradicts the Qurʾān.",
 tree:N(AV('esel-essen-verbot','1286260908938629163'),"6:145 limits the forbidden foods to four; the ḥadīth adds donkeys.",
  "6:145 is Meccan: at that time those four were what had been revealed as forbidden. Years later in Medina, at Khaybar (7 AH), the prohibition of domestic donkeys came. Two rulings at two times aren't a contradiction: Allah explained the laws step by step.",
  "Two times, two rulings",["“Say: I don't find in what has been revealed to me anything forbidden… except carrion, poured-out blood, swine flesh, or what is offered to other than Allah” (6:145): what had been revealed until then.","ʿAlī: the Prophet ﷺ forbade mutʿa and the flesh of domestic donkeys on the day of Khaybar (Muslim 1407).","Four scans in the channel (to capture)."],["Qurʾān 6:145","Muslim 1407"]),
 sum:"6:145 was revealed in Mecca; the donkey prohibition came at Khaybar years later: gradual legislation, not contradiction."});

/* 5:60 */
card(AC+'worse-than-that-5-60',{title:"5:60: is the Muslims' faith “evil”?",k:"Arguing on the opponent's terms",blurb:"“Shall I tell you of something worse?”",
 claim:"5:60 asks “Shall I inform you of something worse than this?” implying the believers' faith is bad.",
 tree:N(AV('sure-5-60-muslime-sein-schelcht','1350100744291749959'),"“Shall I tell you of what is worse than that in retribution?” (5:60): so the Muslims' faith is bad too.",
  "Ṭanṭāwī: the wording adopts the mockers' own perspective. They reproached the believers for their faith in Allah as if it were bad; the reply is: if you think that's bad, what you are upon is far worse, cursed, excluded from mercy, ancestors turned into apes and swine, worshipping other than Allah. The Qurʾān argues the same way in 34:24: “either we or you are rightly guided or in clear error.”",
  "Ṭanṭāwī on 5:59–60",["The emphatic “worse in position and further astray” stresses their many evil traits; in the Hereafter their abode is the Fire.","Context 5:59: “O People of the Book, do you resent us only because we believe in Allah…?”"],["Qurʾān 5:59–60; 34:24"]),
 sum:"5:60 answers the mockers on their own terms: if you call our faith bad, yours is worse (Ṭanṭāwī; cf. 34:24)."});
})();
