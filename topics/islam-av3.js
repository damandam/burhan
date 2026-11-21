/* Islam AV batch 3 — 2026-11-21. Averroes “sonstiges islam 3”, group C (law & fiqh; 8 channels).
   add(): Slavery map ← selling ummahāt al-awlād (#sklaven-mütter-verkaufen);
          Cannibalism card ← Qurʾān 49:12, al-Ghazālī & Ibn Ḥajar al-Haytamī (#kanibalismus);
          72 virgins card ← controlling anger & houris (#wut-kontrollieren-houris-hour).
   NEW: marrying a daughter from zinā (#gelehrte-sagen-man-darf-eigene-tochter-hieraten-nach-zina),
        Fāṭima al-Makhzūmiyya theft & equality before the law (#frau-hand-abhacken),
        “They are from them” in night raids (#kinder-töten-from-them),
        Prophet Ayyūb and 38:44 (#propeht-ayoub-as-schlägt-frau),
        wife's voluntary fast & Numbers 30 (#fasten-gelübt-ehemann-ehefrau-huris-houris).
   Scans/PDFs: #kinder-töten-from-them (1 PDF: Unbenanntes Dokument, 96 KB); #gelehrte-sagen-man-darf-eigene-tochter-hieraten-nach-zina (2 message.txt, text already in msgs 5–9). */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next)=>({they,we,more:Object.assign({h,p,src},cr),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('islam-av3: no card',key); };

/* 1. Selling ummahāt al-awlād → Slavery map */
add('islam/morality/slavery',N(AV('sklaven-mütter-verkaufen','1293961446425624660'),
 "Abū Dāwūd 3954: Jābir says they sold slave women who had borne their masters' children during the Prophet's ﷺ time and Abū Bakr's, until ʿUmar banned it.",
 "Al-Khaṭṭābī (Maʿālim al-Sunan 3/533–534): scholars explained this rare practice happened without the Prophet's ﷺ knowledge, unlike ordinary slave sales which were frequent and public; and Abū Bakr's caliphate was very brief. Once ʿUmar proclaimed the prohibition — that an umm walad cannot be sold and is freed on her master's death — the Companions united immediately and stopped.",
 "Ummahāt al-awlād, captives and Awṭās",
 ["Abū Dāwūd 3954 (ṣaḥīḥ): Jābir ibn ʿAbdullāh said they sold ummahāt al-awlād during the time of the Messenger ﷺ and Abū Bakr, and when ʿUmar forbade it, they left it. Some may not have heard the earlier ruling, and their immediate compliance shows their unity once it was announced.",
  "Captives arise only from armed conflict against an aggressor, and Muslim rulers frequently released prisoners for free or in prisoner exchanges.",
  "All four legal schools agree that pagan/idolater captives may not be taken as concubines; Muslim, Christian or Jewish concubines have legal rights including independent housing, and forcing a slave woman carries the ḥadd punishment for zinā.",
  "Mukātaba (Qurʾān 24:33): a slave woman who wishes to buy her freedom may contract with her master for a set sum, with the master contributing from his wealth; once the contract/payment begins, he may no longer approach her.",
  "On Muslim 3432 (Awṭās and 4:24): after the Battle of Ḥunayn, the Hawāzin tribe came in repentance and accepted Islam, and the Prophet ﷺ returned their captives to their families (Bukhārī 2583)."],
 ["Abū Dāwūd 3954","al-Khaṭṭābī, Maʿālim al-Sunan 3/533–534","Qurʾān 24:33; 4:24","Muslim 3432","Bukhārī 2583"]));

/* 2. Cannibalism additional proofs → existing Cannibalism card */
add('islam/general/d-av-sonstiges-islam-2/c-kannibalismus-verbot',N(AV('kanibalismus','1338228689166401544'),
 "Shāfiʿī jurists even discuss human flesh in a cooking pot, so Islam leaves room for cannibalism.",
 "Both the Qurʾān and the consensus of jurists forbid human flesh completely. Qurʾān 49:12 compares backbiting (strictly ḥarām, 104:1) to eating a dead brother's flesh as something people naturally abhor; al-Ghazālī notes that even a piece of human flesh falling into food renders the whole dish forbidden; and Ibn Ḥajar al-Haytamī confirms the consensus rejects the disputed theoretical minority opinion.",
 "Qurʾān 49:12, al-Ghazālī and Ibn Ḥajar al-Haytamī",
 ["Abū Dāwūd 3207 (ṣaḥīḥ) and Ibn Mājah 1616 (ḥasan): “Breaking the bone of a dead person is like breaking it while he is alive.” The sanctity of the living applies to the dead — eating a dead person is like eating a living person, completely forbidden.",
  "Al-Ghazālī (Iḥyāʾ ʿUlūm al-Dīn 2/62): if a fly or ant falls into food it does not make it impure, whereas if a piece of flesh from a dead human falls into food, the entire dish becomes forbidden.",
  "Qurʾān 49:12: “Would one of you like to eat the flesh of his dead brother? You would detest it.” Since backbiting is forbidden (104:1), what it is compared to as an obvious abomination is even more clearly forbidden.",
  "Ibn Ḥajar al-Haytamī (Tuḥfat al-Muḥtāj 9/388, commenting on al-Nawawī): human flesh is ḥarām. A heavily disputed minority discussed a purely theoretical case where a tiny piece dissolved completely in a pot of broth leaving no trace or disgust, but the majority and consensus hold it forbidden in any form as repulsive and contrary to the foundational principles of the Sharīʿa."],
 ["Abū Dāwūd 3207","Ibn Mājah 1616","Qurʾān 49:12; 104:1","al-Ghazālī, Iḥyāʾ ʿUlūm al-Dīn 2/62","Ibn Ḥajar al-Haytamī, Tuḥfat al-Muḥtāj 9/388"]));

/* 3. Controlling anger & houris → 72 virgins card */
add('islam/general/d-ia-7-2-72-virgins',N(AV('wut-kontrollieren-houris-hour','1349757193334816821'),
 "Abū Dāwūd 4777 / Tirmidhī 2021 promises whoever controls his anger his pick of the ḥūr al-ʿīn.",
 "That narration is graded weak (ḍaʿīf) because of the narrator Sahl ibn Muʿādh ibn Anas: Ibn Ḥibbān called him “very munkar”, and Yaḥyā ibn Maʿīn and al-Dhahabī both graded him weak.",
 "Chain critique of Abū Dāwūd 4777",
 ["Reported in Aḥmad 15722, Ibn Mājah 4186, Abū Dāwūd 4777, al-Tirmidhī 2021 and 2493, Abū Yaʿlā 1497, al-Musnad al-Jāmiʿ 11451, Tuḥfat al-Ashrāf 11298, Aṭrāf al-Musnad 7126, and al-Bayhaqī 8/161.",
  "Graded ḍaʿīf due to Sahl ibn Muʿādh ibn Anas (al-Musnad al-Muṣannaf al-Muʿallal 24/375).",
  "Ibn Ḥibbān (al-Majrūḥīn): called him “very munkar (rejected)” and expressed doubt whether the errors in his narrations came from him or from Zabbān ibn Fāʾid.",
  "Yaḥyā ibn Maʿīn: weak (ḍaʿīf). Al-Dhahabī: weak (ḍaʿīf)."],
 ["Abū Dāwūd 4777","Tirmidhī 2021, 2493","Ibn Mājah 4186","Aḥmad 15722","al-Musnad al-Muṣannaf al-Muʿallal 24/375","Ibn Ḥibbān, al-Majrūḥīn"]));

/* 4. Marrying a daughter born of zinā */
const DZ=AV('gelehrte-sagen-man-darf-eigene-tochter-hieraten-nach-zina','1284869831807602730');
card('islam/morality/marriage/daughter-from-zina',{title:"Can a man marry his daughter born from zinā?",k:"Ibn Taymiyya · Majmūʿ 32/134",blurb:"The majority forbids it completely; Imām Aḥmad's view was execution.",
 claim:"Islamic scholars say a man is allowed to marry his own daughter if she was born out of wedlock.",
 tree:N(DZ,"Some jurists said a daughter born from zinā isn't legally his daughter, so he can marry her.",
  "Ibn Taymiyya (Majmūʿ al-Fatāwā 32/134): the majority of scholars hold that marrying her is strictly forbidden, and this is the decisive, correct opinion. The majority even debated executing someone who does so (Imām Aḥmad's reported view is execution — and Aḥmad hadn't even heard of any dispute, since the dispute didn't exist among the Salaf).",
  "Ibn Taymiyya's fatwā",
  ["Why the minority erred: they argued that because a child of zinā doesn't inherit from the biological father, isn't owed obligatory maintenance, has no marriage guardianship from him, and isn't freed by his ownership, she supposedly isn't a “daughter” in 4:23 (“Forbidden to you are your mothers and your daughters”) and falls under 4:24 (“lawful to you are all beyond these”).",
   "Ibn Taymiyya notes that scholars differed on whether a mistaken jurist acting on interpretation (mutaʾawwil) is executed or deemed a sinner — comparing it to the dispute over nabīdh — and confirms the excused interpreter isn't a sinner, while refuting the minority opinion itself decisively."],
  ["Ibn Taymiyya, Majmūʿ al-Fatāwā 32/134","Qurʾān 4:23–24"],[
  N(DZ,"How does the majority refute that legal argument?",
   "Ibn Taymiyya gives three proofs from the Qurʾān and Sunna: the linguistic breadth of the prohibition verse (4:23), the a fortiori proof from breastfeeding (raḍāʿa), and the Qurʾān's explicit restriction “from your loins” for sons' wives.",
   "Three proofs + the divisibility of lineage",
   ["1) Generality of 4:23: “your daughters” in the prohibition verse includes every biological female descendant (daughter, son's daughter, daughter's daughter), just as “aunts” covers paternal, maternal and great-aunts, and “nieces” covers a sister's descendants. That generality differs from the inheritance verse (4:11).",
    "2) A fortiori from breastfeeding: by agreed-upon ḥadīth, “breastfeeding forbids what birth/lineage forbids.” A man is forbidden to marry a girl nursed by milk produced through his intercourse, even though no inheritance or maintenance rules apply to her. How could a daughter created directly from his own seed be lawful when a milk-daughter is forbidden?",
    "3) “From your loins” (4:23): Allah restricted “wives of your sons” to “those from your loins” specifically to exclude adopted sons (cf. 33:37). Pre-Islamic Arabs recognised children of zinā even more readily than adopted children; restricting sons to “from your loins” proves “daughters” includes every biological daughter.",
    "4) Answer to the inheritance objection: lineage rulings are divisible — some can apply without others. In liʿān (mutual cursing), most disputants agree the disowned child does not inherit yet remains forbidden in marriage. Likewise, in the authentic ḥadīth of Zamʿa ibn al-Aswad's slave-woman's son (disputed between Saʿd ibn Abī Waqqāṣ and ʿAbd ibn Zamʿa because he resembled ʿUtba), the Prophet ﷺ ruled “He is yours, ʿAbd ibn Zamʿa; the child belongs to the bed, and for the adulterer is the stone — and veil yourself from him, Sawda”: treating him as her brother for inheritance, yet not for maḥram status. (Scholars also differed on whether a child of zinā becomes free by the father's ownership — two views in the Ḥanafī and Ḥanbalī schools.)",
    "Classical tafsīr on nasab (blood kinship) and ṣihr (affinity/in-laws) in 25:54: al-Naḥḥās cites al-Aṣmaʿī (ṣihr applies to both sides, from ṣahara, to mix) and Muḥammad ibn al-Ḥasan on akhtān/khatan (quoting the Prophet ﷺ to ʿAlī: “you are my son-in-law and the father of my children”). Ibn ʿAṭiyya corrects al-Ḍaḥḥāk's view that ṣihr means breastfeeding: Ibn ʿAbbās's “seven forbidden by nasab and five (or seven) by ṣihr” follows the order of 4:23, whereas breastfeeding is legally equivalent to nasab (also the view of al-Zajjāj). Ibn Sīrīn notes 25:54 united nasab and ṣihr between the Prophet ﷺ and ʿAlī."],
   ["Ibn Taymiyya, Majmūʿ al-Fatāwā 32/134","Qurʾān 4:11, 4:23, 25:54, 33:37","Bukhārī 2053; Muslim 1457 (Zamʿa)","al-Naḥḥās; Ibn ʿAṭiyya on 25:54"])
 ]),
 sum:"The majority strictly forbids marrying a daughter born of zinā (Imām Aḥmad's view was execution); Ibn Taymiyya proves it from 4:23, the a fortiori breastfeeding rule, “from your loins”, and the divisibility of lineage rulings."});

/* 5. Fāṭima al-Makhzūmiyya — theft & equality before the law */
card('islam/morality/makhzumiyya-theft-equality',{title:"Fāṭima al-Makhzūmiyya: cutting off a woman's hand",k:"Bukhārī 3475 · Muslim 1688",blurb:"A sermon against noble privilege and double standards in law.",
 claim:"The Prophet ﷺ had a woman's hand cut off for stealing, showing harshness towards women.",
 tree:N(AV('frau-hand-abhacken','1287089772082364437'),
  "He refused mercy for a woman who stole and ordered her hand cut off.",
  "The ḥadīth is actually a landmark declaration of equality before the law. A noblewoman of Banū Makhzūm stole during the Conquest of Mecca (8 AH); her powerful clan asked Usāma ibn Zayd to intercede so she would escape punishment because of her status. The Prophet ﷺ grew angry: “Do you intercede concerning one of the limits (ḥudūd) of Allah?” — and swore that even if his own beloved daughter Fāṭima stole, he would enforce the law on her.",
  "Equality before the law and her restoration",
  ["Narrated by the Successor ʿUrwa ibn al-Zubayr (from ʿĀʾisha): Banū Makhzūm were alarmed and sent Usāma ibn Zayd because of his close standing with the Prophet ﷺ, hoping she would be spared through pardon or compensation. Usāma immediately asked the Prophet ﷺ to seek Allah's forgiveness for him.",
   "That evening the Prophet ﷺ delivered a sermon: “What destroyed the nations before you was that when a noble among them stole, they let him go, and when a weak person without status or backing stole, they carried out the punishment on him. By Allah, if Fāṭima the daughter of Muḥammad stole, I would cut off her hand.”",
   "Because Fāṭima was his dearest family member, his only surviving daughter at the time, and shared the woman's name, he used her as the ultimate example to forbid all favouritism in Allah's limits.",
   "After the sentence was carried out, the woman repented sincerely and married (reportedly into Banū Sulaym). ʿĀʾisha reports she afterwards visited her and brought her needs to the Messenger of Allah ﷺ, who fulfilled them — showing she was restored with dignity, not cast out."],
  ["Bukhārī 3475, 6788","Muslim 1688"]),
 sum:"The report condemns elite favouritism, upholds equal justice even for the Prophet's ﷺ own daughter, and ends with the woman's repentance, marriage and continued care."});

/* 6. “They are from them” — children in night raids */
card('islam/morality/war/children-in-night-raids',{title:"“They are from them”: children in night raids",k:"Bukhārī 3012 · Muslim 1745",blurb:"Unintended collateral harm in urgent night raids, never targeting children.",
 claim:"When asked about polytheists' children killed in night raids, the Prophet ﷺ said “They are from them”, permitting the killing of children.",
 tree:N(AV('kinder-töten-from-them','1348308698728235068'),
  "He was asked about polytheists' women and children hit in night raids and replied “They are from them” — so Islam allows killing children.",
  "Ḥusayn al-ʿAwāyisha (al-Mawsūʿa al-Fiqhiyya al-Muyassara, vol. 7): “They are from them” does not mean children are disbelievers (they haven't reached maturity or accountability) or may be targeted. It means that during an unavoidable night raid or surprise battle, Muslim soldiers are not held liable for unintended harm — the exact same rule applies if Muslim prisoners are accidentally hit during an assault on an enemy fortress.",
  "Strict limits against targeting non-combatants",
  ["Children have not reached puberty/accountability and have not been legally called to faith, so it is unlawful to ascribe disbelief to them.",
   "Ibn al-Qāsim's strict restriction: it is forbidden to fire catapults at enemy fortresses when women and children are inside because of the general prophetic prohibition against killing women and children (Bukhārī 3015).",
   "The dispensation applies strictly to urgent necessity in night raids and surprise attacks where civilians cannot be distinguished and are not intentionally targeted.",
   "Note: the channel also contains a 96 KB PDF document on this ḥadīth (to capture/extract)."],
  ["Bukhārī 3012, 3015","Muslim 1745","Ḥusayn al-ʿAwāyisha, al-Mawsūʿa al-Fiqhiyya al-Muyassara 7","Ibn al-Qāsim"]),
 sum:"“They are from them” covers unintended collateral harm in urgent night raids (just as with Muslim captives), never intentional killing; Ibn al-Qāsim even forbade catapults where women and children are present."});

/* 7. Prophet Ayyūb (Job) and Qurʾān 38:44 */
card('islam/morality/women/ayyub-38-44',{title:"Did Allah tell Prophet Ayyūb to beat his wife? (38:44)",k:"Qurʾān 38:44 · weak chains",blurb:"No prophetic narration supports the beating backstory; all three chains are weak.",
 claim:"Qurʾān 38:44 commands Prophet Ayyūb (Job) to strike his wife with a bundle of grass.",
 tree:N(AV('propeht-ayoub-as-schlägt-frau','1348018115975581846'),
  "38:44 says “Take a bundle of grass and strike with it” — God commanded a prophet to beat his wife.",
  "There is no prophetic narration (marfūʿ) at all tracing the beating backstory to the Prophet ﷺ, and all three chains cited for it in tafsīr are weak (ḍaʿīf). Moreover, the verse itself is a mercy relieving an oath: lightly touching with a single bundle of thin blades (ḍighth) avoids both breaking the oath and causing harm.",
  "All three chains are weak",
  ["Chain 1 (the story of Iblīs coming as a physician): ḍaʿīf — runs through Zubayd, who lived 30 years after the Prophet ﷺ; not a prophetic narration.",
   "Chain 2: ḍaʿīf — runs through Yūsuf ibn Mihrān, who is little known and graded weak (ḍaʿīf) by Ibn Ḥajar.",
   "Chain 3: ḍaʿīf — runs through Abū Bakr ibn ʿAyyāsh, whose memory declined in old age. Scholar assessments: Ibn Ḥajar (“reliable and pious, but his memory weakened in old age”); al-Dhahabī / Aḥmad ibn Ḥanbal (“trustworthy, but makes occasional errors”); Abū Ḥātim (“equal to Sharīk in memory, though Abū Bakr's book is better”); al-Bazzār (“not a great ḥadīth memoriser”); al-Sājī (“honest, but makes mistakes”); al-ʿIjlī (“formerly reliable and pious, made some errors”); Ibn Saʿd (“grew old and made many errors”); Yaḥyā ibn Maʿīn (“weak in his narrations from al-Aʿmash”); ʿAlī ibn al-Madīnī & Yaḥyā al-Qaṭṭān (criticised him for failing memory in old age); Yaʿqūb ibn Shayba (“pious, but his ḥadīth are inconsistent”)."],
  ["Qurʾān 38:44","Ibn Ḥajar","al-Dhahabī","Ibn Saʿd","Yaḥyā ibn Maʿīn"]),
 sum:"No prophetic ḥadīth supports the beating backstory of 38:44 — all three chains are weak (Zubayd, Yūsuf ibn Mihrān, Abū Bakr ibn ʿAyyāsh) — and the verse itself is an oath-relief, not a beating."});

/* 8. Wife's voluntary fast & husband's permission (Numbers 30 counter) */
card('islam/morality/women/wife-voluntary-fasting',{title:"A wife's voluntary fast and her husband's permission",k:"Bukhārī 5195 · Numbers 30",blurb:"Voluntary fasts only, and the Bible gives husbands the power to annul vows to God.",
 claim:"Islam won't even let a woman fast without her husband's permission.",
 tree:N(AV('fasten-gelübt-ehemann-ehefrau-huris-houris','1349782969610403910'),
  "A wife needs her husband's permission to fast — that's total control over her worship.",
  "In Islam the rule (Bukhārī 5195, Muslim 1026) applies only to voluntary (nafl) fasting while the husband is present — never to the obligatory Ramaḍān fast — to respect mutual marital rights. And if a Christian raises this objection, the Bible goes much further: Numbers 30 lets a father or husband unilaterally cancel a woman's sacred vow to God.",
  "Turn the tables: Numbers 30",
  ["Numbers 30 (vv. 3–15): a father or husband has the legal authority to annul a woman's vow or pledge to God; if he disapproves of it when he hears of it, the vow does not stand and the LORD forgives her because she is under the man's authority and no longer bound by the vow.",
   "In Islam, by contrast, no husband can cancel his wife's obligatory worship (Ramaḍān fasting, prayers, vows to Allah); the permission rule concerns only extra voluntary fasts on days he is at home."],
  ["Bukhārī 5195","Muslim 1026","Numbers 30:3–15"]),
 sum:"The rule covers only optional fasts when the husband is present, never obligatory worship — whereas Numbers 30 lets a father or husband cancel a woman's vow to God."});
})();
