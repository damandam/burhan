/* Hadith block 9 — 2026-11-20. The last eleven Averroes German hadith tiles → English cards.
   Cross-server: IA / DR have no channels on these (the racism material is already on the 7142 card).
   Scans: #schwarzefrau-pest (2 PDFs: Argumentkarte, “Die schwarze Frau im Traum”), #bilder-paradies (2 imgs), #maria-prophet-saw-frau (9 imgs),
   #zina-mit-mutter (1 img). */
(()=>{
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
/* node helper: no hand-counted brackets */
const N=(cr,they,we,h,p,src,next)=>({they,we,more:Object.assign({h,p,src},cr),next:next||[]});
const A1='islam/general/d-av-sonstiges-islam-1/c-', A2='islam/general/d-av-sonstiges-islam-2/c-', A3='islam/general/d-av-sonstiges-islam-3/c-';

/* ʿĀʾisha and tharīd */
const T=AV('aisha-essen-vergleich','1278075207180881961');
card(A2+'aisha-essen-vergleich',{title:"ʿĀʾisha compared to tharīd (Bukhārī 3411)",k:"Faḍl · virtue",blurb:"A comparison of rank, in a chapter about Āsiya and Maryam.",
 claim:"David Wood: the Prophet ﷺ compared ʿĀʾisha to a dish of food, as if a young wife were better “food” than a grown woman.",
 tree:N(T,"“The superiority of ʿĀʾisha over other women is like the superiority of tharīd over other food” (Bukhārī 3411). He saw her as something to consume.",
  "The ḥadīth is about moral perfection, not bodies. It begins: “Many men reached perfection, but among women none reached it except Āsiya, the wife of Pharaoh, and Maryam, daughter of ʿImrān.” The word is faḍl (excellence, merit), and tharīd, bread soaked in meat broth, was the Arabs' finest everyday dish, so it served as an image for what excels.",
  "Context: perfection and faḍl",["Abū Mūsā: “Many among men reached perfection, but none among women except Āsiya the wife of Pharaoh and Maryam daughter of ʿImrān, and the excellence (faḍl) of ʿĀʾisha over women is like the excellence of tharīd over other food” (Bukhārī 3411).","If it were about physical perfection, the opening about the perfection of men would make no sense.","Al-Bukhārī places it under the chapter heading “Allah's words: And Allah sets forth as an example for those who believe the wife of Pharaoh…” (66:11): a chapter about piety and faith.","Reading sexual meaning into it says more about the reader than the text."],["Bukhārī 3411","Qurʾān 66:11–12"]),
 sum:"The ḥadīth ranks ʿĀʾisha's excellence (faḍl) among women after Āsiya and Maryam; tharīd was simply the Arabs' image of the best dish."});

/* An Ibn al-Qayyim quote on masturbation */
const Q=AV('ibn-al-qayim-erlaubt-kinder-sklaven-hand-mastrubieren-sklavin','1290723269816877128');
card(A2+'ibn-al-qayim-erlaubt-kinder-sklaven-hand-mastrubie',{title:"An Ibn al-Qayyim quote on masturbation",k:"Ḥanbalī fiqh · Ibn ʿAqīl",blurb:"A reported opinion of others, in a case of extreme necessity.",
 claim:"Ibn al-Qayyim allowed masturbation, even with a young slave girl, for a man afraid his testicles would burst.",
 tree:N(Q,"Ibn al-Qayyim writes that a man may relieve himself if he fears his testicles will burst. That's Islamic scholarship?",
  "Ibn al-Qayyim isn't giving his own view: he quotes Ḥanbalī jurists word for word. The base report is in the passive, “it was narrated from Aḥmad”, so it isn't even established from Aḥmad. Ibn Taymiyya and Ibn Qudāma likewise attribute the masturbation view to Ibn ʿAqīl and some of his companions, explicitly not to themselves.",
  "Who said what",["Ibn Taymiyya, Sharḥ ʿUmdat al-Fiqh 3/194: Aḥmad, in Ismāʿīl ibn Saʿīd's report, on someone with an overwhelming sexual urge: it suffices for him to feed (the poor) and not fast if he can't restrain himself, for fear his testicles may burst. Al-Qāḍī: this means it is like a chronic illness that makes fasting impossible, so he is like the old man unable to fast.","A page later Ibn Taymiyya reports that Ibn ʿAqīl and some of his companions said he may masturbate, making clear it is their view, not his. Ibn Qudāma does the same in his Ḥanbalī fiqh.","It's a hard fiqh case about necessity (fear of real bodily harm), not general permission; the core text is the Prophet's ﷺ: “Young men, whoever can marry should marry; whoever cannot should fast, for it is a shield” (Bukhārī, Muslim).","Testicles don't burst from abstinence: the scenario is speculative and literal, not a real-world ruling."],["Ibn Taymiyya, Sharḥ ʿUmdat al-Fiqh 3/194","Bukhārī 5066; Muslim 1400"]),
 sum:"The quote is Ibn ʿAqīl's reported opinion on extreme necessity, relayed by Ibn al-Qayyim, Ibn Taymiyya and Ibn Qudāma, not their own position; the base report from Aḥmad is passive."});

/* The black woman and the plague */
const B=AV('schwarzefrau-pest','1275928072872267907');
card(A1+'schwarzefrau-pest',{title:"The black woman in the dream and the plague (Bukhārī 7038)",k:"Dream symbolism",blurb:"A dream image, and the Church Fathers' own use of “the black”.",
 claim:"The Prophet ﷺ dreamt the Medina epidemic as a black woman, so Islam associates black people with disease.",
 tree:N(B,"In a dream he saw a black woman with dishevelled hair leaving Medina for Mahyaʿa, and interpreted it as the epidemic moving to al-Juḥfa (Bukhārī 7038). Racist imagery.",
  "It's a dream symbol, not a statement about any people: dream images stand for things, and he interpreted it as the fever leaving Medina. The same Prophet ﷺ who said no white is better than a black except through piety (see Bukhārī 7142: racism?). If anything, Christian tradition used blackness for evil far more explicitly.",
  "Turn the tables: the Church Fathers",["Athanasius, Life of Antony 6: Satan appears to Antony “as a black boy” and introduces himself: “I am the friend of fornication… the spirit of fornication is my name.”","Jeremiah 13:23: “Can the Ethiopian change his skin or the leopard his spots? Then also you can do good who are accustomed to do evil.”","Jerome, Homily 3 on Psalm 7: “Cush in Hebrew means Ethiopian, that is, black and dark; his soul is like his body… As the Ethiopian cannot change his skin, so this one [Saul] cannot change his wickedness.”","The channel has two documents on the dream and an argument card (to capture)."],["Bukhārī 7038","Athanasius, Life of Antony 6","Jeremiah 13:23","Jerome, Homily 3 on Psalm 7"]),
 sum:"The black woman is a dream symbol for the fever leaving Medina; the Church Fathers, not the Prophet ﷺ, tied blackness to sin."});

/* ʿUmar and the stones */
const U=AV('umar-ra-wirft-steine-kinder','1280381749175652362');
card(A2+'umar-ra-wirft-steine-kinder',{title:"Did ʿUmar throw stones at children?",k:"Muslim 893",blurb:"Abyssinians playing with spears, pebbles, and “leave them, ʿUmar”.",
 claim:"ʿUmar threw stones at children playing, and he's a hero of Islam.",
 tree:N(U,"ʿUmar threw stones at children playing in the mosque.",
  "They weren't children: they were Abyssinian men performing with spears. ʿUmar bent down to pick up pebbles to throw towards them, so they would stop, and the Prophet ﷺ said: “Leave them, ʿUmar.” The Arabic says he threw in their direction, not that he hit anyone; seeing spears, he may have thought it was a fight.",
  "The report and ʿUmar with children",["Abū Hurayra: while the Abyssinians were playing with their spears in the presence of the Messenger of Allah ﷺ, ʿUmar came in and bent down for pebbles to throw at them. The Messenger of Allah ﷺ said: “Leave them, ʿUmar” (Muslim 893; Bukhārī 2901).","Sunnah.com's wording misleads: the text has spears and small pebbles, and no hit.","Reported about ʿUmar with children: he passed children playing and said “let them play” (Ibn Abī Shayba); with date stones: “play on, it sharpens your minds” (Kanz al-ʿUmmāl); at ʿĪd: “this is the children's day of joy” (al-Bayhaqī); children riding sticks: “May Allah bless you, we played like this when we were young” (Ibn ʿAsākir)."],["Muslim 893","Bukhārī 2901"]),
 sum:"They were Abyssinian men with spears, not children; ʿUmar reached for pebbles to stop them and the Prophet ﷺ told him to let them be."});

/* Ibn Kathīr's rat story */
const R=AV('ratte-ibn-kathir','1279899561057583321');
card(A2+'ratte-ibn-kathir',{title:"Ibn Kathīr's rat story",k:"al-Bidāya wa al-Nihāya",blurb:"A historian's report from six centuries later, not a ḥadīth.",
 claim:"Ibn Kathīr tells a bizarre rat story, so Islam is full of fairy tales.",
 tree:N(R,"Ibn Kathīr reports a bizarre transformation story with a rat.",
  "It isn't a ḥadīth. It's an event Ibn Kathīr records in his world history, about 620 years after the Prophet's ﷺ death. A historian reporting what people told in his time isn't Islamic doctrine.",
  "Turn the tables: the Bible's transformations",["Daniel 4:30–33: Nebuchadnezzar is driven from men, eats grass like an ox, “until his hair grew as long as eagles' feathers and his nails like birds' claws.”","2 Peter 2:16: “a speechless donkey spoke with human voice and restrained the prophet's madness.”","Exodus 7:10–12: Aaron's staff becomes a serpent.","Genesis 19:26: Lot's wife becomes a pillar of salt."],["Ibn Kathīr, al-Bidāya wa al-Nihāya","Daniel 4:33","2 Peter 2:16","Exodus 7:10–12","Genesis 19:26"]),
 sum:"The rat story is a later historical report in Ibn Kathīr's chronicle, not a ḥadīth; the Bible has stranger transformations as scripture."});

/* Images in Paradise */
const I=AV('bilder-paradies-begehren','1279481878654615734');
card(A2+'bilder-paradies-begehren',{title:"A market of images in Paradise (Tirmidhī 2550)",k:"Gharīb · mawḍūʿ",blurb:"Weak by al-Tirmidhī's own word; Ibn al-Jawzī lists it as fabricated.",
 claim:"Tirmidhī: in Paradise there's a market of images; whoever desires a form enters into it. So Islam's Paradise is shape-shifting fantasy.",
 tree:N(I,"Tirmidhī 2550: a market in Paradise with forms (ṣuwar) of men and women; whoever desires a form enters it.",
  "It isn't authentic. Al-Tirmidhī himself said “this is a gharīb ḥadīth”; al-Albānī and al-Arnaʾūṭ grade the chain weak; and Ibn al-Jawzī put it among fabricated ḥadīth because of ʿAbd al-Raḥmān ibn Isḥāq Abū Shayba al-Wāsiṭī.",
  "The gradings",["Al-Tirmidhī: “gharīb”.","Ibn al-Jawzī, al-Mawḍūʿāt: “not authentic; the accused is ʿAbd al-Raḥmān ibn Isḥāq, Abū Shayba al-Wāsiṭī.” Aḥmad: “He is nothing; rejected.” Yaḥyā: “abandoned.”","Al-Ṭabarānī's version (al-Awsaṭ) has Muḥammad ibn Kathīr and Jābir al-Juʿfī, “both very weak” (al-Haythamī, Majmaʿ al-Zawāʾid).","Scans of the gradings in the channel (to capture)."],["Tirmidhī 2550","Ibn al-Jawzī, al-Mawḍūʿāt","Majmaʿ al-Zawāʾid"]),
 sum:"Al-Tirmidhī called it gharīb, al-Albānī and al-Arnaʾūṭ weak, Ibn al-Jawzī fabricated (Abū Shayba al-Wāsiṭī)."});

/* Camels created from devils */
const C=AV('kamel-vom-teufel-erschaffen','1283150026578853988');
card(A3+'kamel-vom-teufel-erschaffen',{title:"“Camels were created from devils” (Ibn Mājah 769)",k:"al-Khaṭṭābī",blurb:"Arabs called any unruly creature a shayṭān.",
 claim:"Ibn Mājah 769: don't pray in camel pens, for camels were created from devils. Superstition.",
 tree:N(C,"“Don't pray in the resting places of camels, for they were created from devils” (Ibn Mājah 769).",
  "Al-Khaṭṭābī explains: it means camels are like devils in their nature: when frightened they bolt and can ruin the prayer. The Arabs call every unruly, defiant creature a shayṭān. So the Prophet ﷺ is warning that a worshipper among camels is in danger of being hurt if they panic.",
  "A practical warning",["Al-Khaṭṭābī: “because they are of the devils” means they are like devils in their nature; if they are frightened and run off they can spoil the worshipper's prayer. The Arabs call every disobedient creature a devil.","So it's a safety and concentration rule, like praying away from distractions, not a claim about camels' origin."],["Ibn Mājah 769"]),
 sum:"“From devils” is an Arab idiom for unruly nature (al-Khaṭṭābī): don't pray where camels can bolt and hurt you."});

/* Cannibalism */
const K=AV('kannibalismus-verbot','1286151241768108125');
card(A2+'kannibalismus-verbot',{title:"Does Islam allow cannibalism?",k:"Abū Dāwūd 3207",blurb:"Even breaking a dead man's bone is like breaking a living one's.",
 claim:"Some fiqh books discuss eating human flesh in starvation, so Islam allows cannibalism.",
 tree:N(K,"Islam allows eating human flesh.",
  "The Sunna treats the dead body with the same sanctity as the living: “Breaking a dead man's bone is like breaking it when he is alive” (Abū Dāwūd 3207, ṣaḥīḥ; Ibn Mājah 1616, ḥasan). If even breaking a bone of the dead is forbidden, eating the dead is far more so.",
  "The sanctity of the body",["ʿĀʾisha: “Breaking a dead man's bone is like breaking it when he is alive” (Abū Dāwūd 3207; Ibn Mājah 1616).","The channel links a detailed article on the Islamic view of cannibalism (fiqh.islamonline.net)."],["Abū Dāwūd 3207","Ibn Mājah 1616"]),
 sum:"The dead body has the sanctity of the living (Abū Dāwūd 3207): cannibalism is forbidden."});

/* Kurds from jinn */
const KU=AV('kurden-jinn','1312207990484500560');
card(A1+'kurden-jinn',{title:"Are the Kurds descended from jinn?",k:"No chain",blurb:"Two stories, neither with any authentic source.",
 claim:"Islamic sources say the Kurds descend from jinn, or from people ʿUmar banished to the mountains.",
 tree:N(KU,"A report from ʿUmar says a people were driven into the mountains and called Kurds; and al-Masʿūdī says Sulaymān's slaves mixed with jinn and were sent to the mountains.",
  "Neither is a ḥadīth or has a chain. The ʿUmar report has no isnād at all, and scholars classed it as an Isrāʾīlī tale. The Sulaymān story in al-Masʿūdī's history has no authentic transmission or source text either.",
  "No source",["“From ʿUmar”: no chain of transmission; called a Banū Isrāʾīl report.","Al-Masʿūdī (al-Ḥasan ibn al-Ḥusayn), the story of Sulaymān's slaves and the jinn: no authentic narration or source text.","Islam's principle: “No Arab is better than a non-Arab… except by taqwā” (Musnad Aḥmad 23489)."],["Musnad Aḥmad 23489"]),
 sum:"Both stories lack any chain; they are folklore, not Islam."});

/* Maryam as the Prophet's wife in Paradise */
const M=AV('maria-prophet-saw-frau','1281656286592893008');
card(A2+'maria-prophet-saw-frau',{title:"Will Maryam be the Prophet's ﷺ wife in Paradise?",k:"al-Ṭabarānī · Abū Umāma",blurb:"Fabricated, per al-Albānī.",
 claim:"A ḥadīth says Allah will marry the Prophet ﷺ to Maryam, mother of Jesus, in Paradise. Disrespectful to Jesus's mother.",
 tree:N(M,"The Prophet ﷺ will be married to Maryam, Āsiya and Kulthum, Mūsā's sister, in Paradise (al-Ṭabarānī, from Abū Umāma).",
  "The narration is fabricated. Al-Albānī: mawḍūʿ (al-Silsila al-Ḍaʿīfa). Its chain is fabricated, and al-Bukhārī says of its narrator that no one is known to have heard from Abū Umāma and that what he narrates is reprehensible (munkar al-ḥadīth): “it is not permissible to use it as evidence under any circumstances.”",
  "The gradings",["Al-Albānī, al-Ḍaʿīfa: fabricated.","1) weak; 2) a fabricated chain; 3) its narrator is one al-Bukhārī calls munkar al-ḥadīth (Lisān al-Mīzān 6/332).","Nine scans of the gradings in the channel (to capture)."],["al-Albānī, al-Ḍaʿīfa","Lisān al-Mīzān 6/332"]),
 sum:"The narration is fabricated (al-Albānī) with a munkar narrator (al-Bukhārī); Islam honours Maryam as the best of women."});

/* Abū Dāwūd 4457 */
const Z=AV('zina-mit-mutter-abu-dawud','1282508047037501462');
card(A2+'zina-mit-mutter-abu-dawud',{title:"Abū Dāwūd 4457: execution for marrying his father's wife",k:"Iḍṭirāb",blurb:"A disturbed chain, and a man who made lawful what the Qurʾān forbade.",
 claim:"Abū Dāwūd 4457: the Prophet ﷺ sent a man to behead someone and take his property. Sunnah.com says al-Albānī graded it ṣaḥīḥ.",
 tree:N(Z,"Al-Barāʾ: his uncle was sent with a banner to a man who had married his father's wife, to strike his neck and take his wealth (Abū Dāwūd 4457).",
  "The narration is graded weak because of iḍṭirāb, contradictions in its chains and wording, in al-Arnaʾūṭ's edition of Sunan Abī Dāwūd (5/505, n. 1), and the channel shows the grading page against sunnah.com's listing.",
  "Grading and meaning",["Al-Arnaʾūṭ, Sunan Abī Dāwūd 5/505 n. 1: weak due to iḍṭirāb (scan in the channel; to capture).","Note the actual case: not zinā with his mother, but a man who married his father's wife, which the Qurʾān forbids explicitly (4:22). Openly marrying her is declaring lawful what Allah has forbidden."],["Abū Dāwūd 4457","Qurʾān 4:22"]),
 sum:"The report is weak for iḍṭirāb (al-Arnaʾūṭ), and concerns a man who openly married his father's wife against 4:22."});
})();
