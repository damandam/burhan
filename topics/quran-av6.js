/* Qurʾān AV batch 6 — 2026-11-20. Theology channels from Averroes “Koran Scheinargumente 1/2” (not on the site before).
   add(): Creed › “Allah is the best of deceivers?” ← 4:142 (#allah-swt-betrügt);
   NEW Creed › Attributes: Allah's ṣalāh (#allah-betet), jadd 72:3 (#allah-großvater), nafs (#allah-swt-hat-eine-seele), testing & knowledge
   (#allah-weiß-nicht-deswegen-prüft-er).
   NEW Creed › Faith: Allah's will and disbelief (#wille-göttlicher-wille-qadr-schicksal + #keine-rechtleitung… + #ohren-und-herzen-verhüllen);
   4:64 seeking forgiveness (#verzeihung-prophet-saw-bitten).
   NEW Qurʾān › language: ʿasā “perhaps” (#allah-sagt-vielleicht), “or” in 37:147 (#allah-sagt-oder).
   NEW Qurʾān › alleged contradictions: who takes the soul (#engel-oder-allah-nimmt-seele), humiliation 2:61/3:112 (#auferlegt-erniedrigung),
   no angel as a sign 6:8 (#zeichen-engel-für-ungläubige). */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('quran-av6: no card',key); };
const AT='islam/creed/attributes/', FA='islam/creed/faith/', QL='islam/quran/d-ia-quranic-language/', AC='islam/quran/d-ia-alleged-contradictions/';

/* 4:142 */
add('islam/creed/d-dr-allah-deceives',N(AV('allah-swt-betrügt','1320129428595937312'),
 "4:142: “the hypocrites try to deceive Allah, but He is deceiving them.” So Allah is a deceiver.",
 "It's requital in kind for those who thought they could fool Allah. Tafsīr Ibn ʿAbbās: ʿAbdullāh ibn Ubayy and his followers rejected Him in secret and thought they could trick Him; Allah's “deception” of them comes on the Day of Judgement, when on the bridge over Hell the believers tell them “go back to the world and seek light”, knowing it's impossible. The same verse describes them: lazy in prayer, praying only to be seen.",
 "4:142 (Tanwīr al-Miqbās)",["In Arabic rhetoric (mushākala), Allah's response to their treachery is termed khidāʿ as just retribution in kind—granting them outward safety in this world while exposing their inward disbelief on the Day of Resurrection (Q 57:13)."],["Qurʾān 4:142; 57:13"]));

/* Allah's ṣalāh */
const SB=AV('allah-betet','1285958657216876584');
card(AT+'allah-salah-33-56',{title:"Does Allah “pray”? (33:56, 33:43)",k:"Ṣalāh from Allah",blurb:"From Allah it means mercy and praise; from angels, supplication.",
 claim:"33:56 says Allah and His angels “yuṣallūna” on the Prophet ﷺ, the word for praying. To whom does Allah pray?",
 tree:N(SB,"“Allah and His angels yuṣallūna upon the Prophet” (33:56). Allah prays, so there's someone above Him.",
  "Ṣalāh has different meanings depending on who does it. From Allah it means mercy and praise; from the angels, supplication and asking forgiveness; from believers, asking Allah to bless. Ibn Kathīr: Allah's ṣalāh is primarily mercy. Lisān al-ʿArab: ṣalāh from Allah is mercy and praise, from the angels intercession and asking forgiveness.",
  "The lexicons and tafsīr",["33:43: “He it is who sends ṣalāh upon you, and His angels, to bring you out of darkness into light”: blessing, not worship. 2:155–157: “upon them are ṣalawāt from their Lord and mercy.”","Ibn ʿAbbās and Abū al-ʿĀliya: the angels' ṣalāh is asking Allah to bless the Prophet ﷺ; Sufyān al-Thawrī: Allah's ṣalāh is His mercy.","Ibn Manẓūr, Lisān al-ʿArab 14/464–465; al-Jawharī, al-Ṣiḥāḥ 6/384: “ṣalāh, when from Allah, means mercy/blessing”; al-Bustān p. 616; Cameron's dictionary p. 155: ṣallā Allāhu ʿalayhi wa sallam = may Allah bless him and grant him peace.","The believers' formula: “O Allah, send ṣalāh upon Muḥammad and the family of Muḥammad as You sent ṣalāh upon the family of Ibrāhīm.”"],["Qurʾān 33:43; 33:56; 2:157","Lisān al-ʿArab 14/464–465","al-Ṣiḥāḥ 6/384"]),
 sum:"Ṣalāh from Allah is mercy and praise, from the angels supplication (Ibn Kathīr, Lisān al-ʿArab): Allah blesses, He doesn't worship."});

/* jadd */
const JD=AV('allah-großvater','1285946894463533066');
card(AT+'jadd-72-3',{title:"“Exalted is the jadd of our Lord” (72:3): a grandfather?",k:"Jadd = majesty",blurb:"One word, several meanings; context decides.",
 claim:"72:3 says taʿālā jaddu rabbinā; jadd means grandfather, so Allah has a grandfather.",
 tree:N(JD,"Jadd means grandfather: “exalted is the grandfather of our Lord.”",
  "Jadd has several meanings: grandfather, fortune, greatness, majesty. Al-Ṭabarī reviews the early readings (al-Ḥasan, Sufyān, Mujāhid: “our Lord is rich”, “His remembrance”, “His exalted greatness, power and authority”), prefers majesty and authority, and rejects “grandfather” because it would mean Allah has ancestors, which is shirk. The verse goes on: “He has taken neither wife nor son.”",
  "Context decides",["The Prophet's ﷺ opening supplication: “Glory be to You, O Allah, and praise; blessed is Your name, exalted is Your jadd (wa taʿālā jadduk), there is no god but You” (Abū Dāwūd 775): plainly His majesty.","Hans Wehr: jadd = greatness, majesty, good fortune.","Like German “Herr” (a man / the Lord), “Schloss” (castle / lock) or “Bank” (bank / bench): one word, the context gives the meaning."],["Qurʾān 72:3","al-Ṭabarī on 72:3","Abū Dāwūd 775"]),
 sum:"Jadd in 72:3 means majesty and greatness (al-Ṭabarī; Abū Dāwūd 775), as the next words, “neither wife nor son”, confirm."});

/* nafs */
const NF=AV('allah-swt-hat-eine-seele','1289741661760520252');
card(AT+'allah-nafs',{title:"Does Allah have a soul (nafs)?",k:"Ibn Taymiyya",blurb:"Nafs for Allah means Himself.",
 claim:"The Qurʾān speaks of Allah's nafs, a soul. So Allah has a body and a soul like a creature.",
 tree:N(NF,"“You know what is in my nafs and I don't know what is in Your nafs” (5:116); “Allah warns you of His nafs” (3:28). Allah has a soul.",
  "Nafs also means a thing's self, as in “I saw Zayd himself (nafsahu)”. Ibn Taymiyya: in these contexts nafs means, according to the majority of scholars, Allah Himself with His attributes, neither a separate entity without attributes nor one attribute among others; both of those views are wrong.",
  "Ibn Taymiyya, Majmūʿ al-Fatāwā 9/292–293; 14/196",["Rūḥ and nafs are used for air, for the “vital spirit” of the physicians, for the soul that leaves at death, and for a thing's essence.","Examples: 6:12 “your Lord has prescribed mercy upon Himself (ʿalā nafsihi)”; 3:28; 5:116; the ḥadīth qudsī: “if he remembers Me within himself, I remember him within Myself” (Bukhārī 7405).","On “He sent it down with His knowledge” (4:166): only Allah knows what knowledge is in His essence, and His nafs is He Himself (14/196)."],["Qurʾān 3:28; 5:116; 6:12","Bukhārī 7405","Ibn Taymiyya, Majmūʿ al-Fatāwā 9/292–293"]),
 sum:"Allah's nafs is Allah Himself (Ibn Taymiyya), as in “He prescribed mercy upon Himself” (6:12), not a creaturely soul."});

/* testing and knowledge */
const TK=AV('allah-weiß-nicht-deswegen-prüft-er','1286029246292168840');
card(AT+'testing-and-knowledge-29-2',{title:"If Allah knows everything, why does He test? (29:2–3)",k:"Al-Ṭabarī, Ibn Kathīr, al-Qurṭubī",blurb:"Not so He learns, but so it becomes manifest and no excuse remains.",
 claim:"29:3 says Allah tests people “so He will know” who is truthful. So He didn't know before.",
 tree:N(TK,"“Allah will surely make known those who are truthful” (29:3): Allah tests because He doesn't know.",
  "Ibn Kathīr, al-Ṭabarī and al-Qurṭubī agree Allah knows beforehand who is sincere; the test makes it visible and public. Al-Ṭabarī gives three meanings: Allah will reveal people's truth in the Hereafter with reward or punishment; the tests show people and the world who is sincere; Allah sets signs by which people are distinguished. And without a test, a person could claim on Judgement Day he would have acted differently.",
  "Why tests",["29:2 is rhetorical: “Do people think they will be left alone to say ‘we believe’ without being tested?”","“The most severely tested are the prophets, then the next best” (Tirmidhī 2398): the stronger the faith, the harder the test.","2:214: believers are shaken until they ask “when is Allah's help?”"],["Qurʾān 29:2–3; 2:214","Tirmidhī 2398","al-Ṭabarī, Ibn Kathīr, al-Qurṭubī on 29:3"]),
 sum:"Allah knows beforehand; the test makes sincerity manifest and removes every excuse (al-Ṭabarī, Ibn Kathīr, al-Qurṭubī)."});

/* will and disbelief */
const WQ=AV('wille-göttlicher-wille-qadr-schicksal','1352635095101476997'), KR=AV('keine-rechtleitung-alle-menschen-irreführen-hölle-jinn-und-menschen-füllen','1372327690564145204'), OH=AV('ohren-und-herzen-verhüllen','1361061467368980490');
card(FA+'divine-will-and-disbelief',{title:"If Allah willed, they wouldn't disbelieve: so is it His fault?",k:"Qadr · 6:148 · 32:13",blurb:"Two kinds of will, and hearts sealed by their own choice.",
 claim:"The Qurʾān says “if Allah had willed, they wouldn't have committed shirk” (6:107), “I will fill Hell with jinn and men” (32:13), and “We put coverings on their hearts” (6:25). So Allah causes disbelief and then punishes it.",
 tree:N(WQ,"“Had Allah willed, they wouldn't have associated partners” (6:107). So their shirk is Allah's will.",
  "That's exactly the polytheists' own argument, which the Qurʾān answers: “Had Allah willed, we wouldn't have committed shirk… Say: do you have any knowledge? You follow only assumption” (6:148; 16:35). Allah's will is of two kinds: His creative will (mashīʾa kawniyya), by which everything that happens happens, without implying He's pleased with it; and His legislative will (irāda sharʿiyya), what He loves and commands. He could have made everyone believe (10:99; 5:48), but created people with a real choice to test them.",
  "Two kinds of will",["Creative will: nothing happens unless Allah allows it. Legislative will: what He loves and asks of people; He wills everyone to accept Islam in this sense but doesn't force them.","5:48: “Had Allah willed, He would have made you one community, but He tests you in what He has given you.” 10:99: “Had your Lord willed, all on earth would have believed. Will you then compel people?”"],["Qurʾān 6:107; 6:148; 16:35; 5:48; 10:99"],
  [N(KR,"32:13: “I will fill Hell with jinn and men”, so Allah wanted them in Hell.",
     "Look at the context: 32:12 speaks of the criminals, and the following verses say those who did good have nothing to fear. Guidance is for those who do good. Ibn ʿĀshūr: Allah made man a free, reasoning being responsible for choosing; He gave intellect, faculties, prophets and revelation, promised reward and punishment, so that people choose good freely. Because many choose evil despite the signs, Hell is filled, fulfilling the word He spoke to Iblīs (38:85): “I will fill Hell with you and all who follow you.”",
     "Ibn ʿĀshūr on 32:13",["It isn't arbitrariness but a wise plan: no one is forced; whoever chooses the wrong way despite warnings bears the blame."],["Qurʾān 32:12–15; 38:85"]),
   N(OH,"6:25: “We put coverings over their hearts and deafness in their ears”, so Allah blocked them.",
     "Ibn ʿĀshūr: these are metaphors, not physical coverings: their hearts don't accept the truth, as if covered; their ears don't take in what they hear. It's attributed to Allah because He confirms the state they chose. People like al-Naḍr ibn al-Ḥārith, Abū Jahl and Abū Sufyān came to listen, then mocked it as “tales of the ancients”, wanting to look clever before their people. The one exception proves the rule: Abū Sufyān said “I think it's true” and later became Muslim. Whoever sincerely seeks isn't turned away.",
     "Ibn ʿĀshūr on 6:25",["Ibn ʿĀshūr explains that “coverings on their hearts and deafness in their ears” (Q 6:25) metaphorically depicts obstinate refusal—not physical coercion—confirmed when Allah leaves arrogant mockers to the darkness they chose, while sincere listeners like Abū Sufyān later embraced the truth.","Compare Q 41:5, where the disbelievers themselves boast, “Our hearts are within coverings from that to which you invite us, and in our ears is deafness,” proving the barrier originates in their own rejection."],["Qurʾān 6:25; 41:5"])]),
 sum:"Allah's creative will isn't approval; people are free and responsible (5:48; 10:99), Hell is filled by those who choose evil (Ibn ʿĀshūr), and sealed hearts are the state they chose."});

/* 4:64 */
const VZ=AV('verzeihung-prophet-saw-bitten','1285984608319438980');
card(FA+'seeking-forgiveness-4-64',{title:"4:64: asking the Prophet ﷺ for forgiveness, even at his grave?",k:"al-ʿUtbī's story",blurb:"The verse is about his lifetime; the grave story is mursal and unsourced.",
 claim:"4:64 tells sinners to come to the Prophet ﷺ to be forgiven, and a Bedouin was forgiven at his grave, so Muslims should seek forgiveness through him after his death.",
 tree:N(VZ,"A Bedouin came to the Prophet's ﷺ grave three days after the burial, recited 4:64, asked forgiveness through him, and a voice from the grave said he was forgiven (al-Qurṭubī).",
  "The report is weak: the version from ʿAlī is mursal; Ibn ʿAbd al-Barr mentions it without the voice from the grave (Bahjat al-Majālis 3/275); Ibn Kathīr's version (al-ʿUtbī) is a dream. And the verse's context is his lifetime: hypocrites who went to Kaʿb ibn al-Ashraf for judgement instead of the Prophet ﷺ (Mujāhid); had they come to him repentant and had he asked forgiveness for them, they'd have found Allah forgiving (al-Ṭabarī). Al-Saʿdī: this was limited to his lifetime, as the context shows.",
  "Tafsīr",["Al-Ṭabarī on 4:64: those who turned to the ṭāghūt instead of the Book and the Sunna; had they come repentant…","Al-Nawawī mentions the story in al-Majmūʿ 8/217; its chain is not established."],["Qurʾān 4:60–64","al-Ṭabarī on 4:64","al-Saʿdī on 4:64"]),
 sum:"4:64 concerns hypocrites in the Prophet's ﷺ lifetime (al-Ṭabarī, al-Saʿdī); the grave story is mursal, partly a dream, without a sound chain."});

/* ʿasā */
card(QL+'asa-perhaps',{title:"Allah says “perhaps” (ʿasā)? Is He unsure?",k:"ʿAsā from Allah",blurb:"From Allah, ʿasā is a firm promise.",
 claim:"The Qurʾān has Allah say “perhaps” (ʿasā), e.g. “perhaps Allah will pardon them” (4:99). An all-knowing God isn't unsure.",
 tree:N(AV('allah-sagt-vielleicht','1335302656574361631'),"“Perhaps Allah will pardon them” (4:99): Allah doesn't know whether He'll forgive.",
  "From Allah ʿasā is a binding commitment. Al-Baghawī on 4:99: it means Allah will pardon them; ʿasā from Allah is a firm promise, for when Allah gives hope He fulfils it. Al-Qurṭubī: “ʿasā from Allah is an obligation.” Al-Ṭabarī: “Every ʿasā in the Qurʾān is binding” (both on 9:18).",
  "The scholars",["Al-Baghawī on 4:99; al-Qurṭubī and al-Ṭabarī on 9:18.","See also the 46:9 card: ʿasā in 17:79 and 9:102."],["Qurʾān 4:99; 9:18; 17:79"]),
 sum:"Al-Ṭabarī: every ʿasā from Allah in the Qurʾān is binding."});

/* “or” in 37:147 */
card(QL+'or-37-147',{title:"“A hundred thousand or more” (37:147): doesn't Allah know?",k:"The particle aw",blurb:"“Or” lists, or means “rather”, or speaks from the onlooker's view.",
 claim:"37:147 says Yūnus was sent to “a hundred thousand or more”. An all-knowing God would know the number.",
 tree:N(AV('allah-sagt-oder','1286026018867511459'),"Allah says “or”, as if He weren't sure.",
  "“Or” (aw) doesn't always express doubt. In 6:145 it lists items that are all forbidden, like “everyone, tall or short, is welcome”. In 37:147 the Kūfans read aw as “rather” (bal): a hundred thousand, rather more. The Baṣrans read it as from the onlooker's perspective: someone seeing them would say a hundred thousand or more (Ṭanṭāwī).",
  "Kūfans and Baṣrans",["Tafsīr Ṭanṭāwī on 37:147: “as it would appear to an observer.” Aw meaning bal is attested in Arabic poetry."],["Qurʾān 37:147; 6:145"]),
 sum:"Aw in 37:147 means “rather more” (Kūfans) or speaks from an observer's view (Baṣrans): no doubt on Allah's part."});

/* who takes the soul */
const TS=AV('engel-oder-allah-nimmt-seele','1367630696654573638');
card(AC+'who-takes-the-soul',{title:"Who takes the soul: Allah, the angel of death, or angels?",k:"39:42 · 32:11 · 6:61",blurb:"Three levels of one act.",
 claim:"39:42 says Allah takes the souls, 32:11 the angel of death, 6:61 Our messengers (angels, plural). A contradiction.",
 tree:N(TS,"Three verses, three different takers of the soul.",
  "They describe three levels of the same act (al-ʿAdawī, following al-Shinqīṭī). Allah is the real cause; the angel of death is the one charged with it and has no power of his own; the helper angels draw the soul up to the throat, then the angel of death completes it. Allah (command) → helper angels (preparation) → angel of death (completion).",
  "Turn the tables: Exodus 7",["Exodus 7:17: the LORD says “I will strike the water of the Nile with the staff in my hand.” Exodus 7:19–20: Aaron stretches out the staff and strikes the river; the staff is “Moses' staff” (4:2) and “Aaron's staff” (7:9).","No Christian exegete concludes Aaron is Yahweh or that Exodus contradicts itself: Aaron acts as an agent on God's authority. Attributing the act to the commander doesn't cancel attributing it to the agent."],["Qurʾān 39:42; 32:11; 6:61","Exodus 7:17–20"]),
 sum:"Allah commands, helper angels prepare, the angel of death completes: one act at three levels, as with God and Aaron in Exodus 7."});

/* humiliation */
card(AC+'humiliation-2-61',{title:"“Humiliation was stamped on them” (2:61; 3:112)",k:"Ibn Kathīr",blurb:"For their deeds, not their ethnicity; protected people are exempt.",
 claim:"The Qurʾān says humiliation is stamped on the Jews forever. That's antisemitism.",
 tree:N(AV('auferlegt-erniedrigung','1319252887926476860'),"2:61 and 3:112 say humiliation and wretchedness were stamped on the Jews.",
  "The verses give the reason themselves: “because they disbelieved in Allah's signs and killed the prophets unjustly… because they disobeyed and transgressed.” Ibn Kathīr: arrogance, insolence and envy drove them to it, and repeated disobedience led them to deny the signs and kill the messengers. It's about deeds, not birth; and 3:112 itself exempts those under a covenant from Allah and from people, the protected Jews and Christians.",
  "Ibn Kathīr on 2:61",[],["Qurʾān 2:61; 3:112"]),
 sum:"The verses name the cause, disbelief, killing prophets and transgression (Ibn Kathīr), and 3:112 exempts those under covenant."});

/* no angel as a sign */
card(AC+'no-angel-as-sign-6-8',{title:"Why no angel was sent as a sign (6:8)",k:"6:8–9",blurb:"The disciples already believed; the idolaters wanted faith based only on an angel.",
 claim:"Jesus' disciples got signs when they asked; why does the Qurʾān refuse the idolaters an angel (6:8)?",
 tree:N(AV('zeichen-engel-für-ungläubige','1361019741115908217'),"Allah refused to send the idolaters an angel, while Jesus' disciples got signs.",
  "The disciples already believed in Jesus on good grounds and asked for reassurance. The idolaters rejected everything; their faith would have rested only on the angel, not on Allah's words and prophets. And 6:8 says the matter would then be decided: if an angel came and they still disbelieved, there'd be no respite.",
  "6:8–9",["Qurʾān 6:8–9 explains that if an angel were sent visibly as demanded by stubborn rejecters, the matter would immediately be settled with no further respite—whereas Jesus' disciples already believed before asking for a confirming sign."],["Qurʾān 6:8–9"],[],{quotes:[{by:"Qurʾān 6:8–9",ar:"وَقَالُوا لَوْلَا أُنزِلَ عَلَيْهِ مَلَكٌ ۖ وَلَوْ أَنزَلْنَا مَلَكًا لَّقُضِيَ الْأَمْرُ ثُمَّ لَا يُنظَرُونَ",en:"And they say, 'Why was there not sent down to him an angel?' But if We had sent down an angel, the matter would have been decided; then they would not be reprieved.",ref:"Qurʾān 6:8"}]}),
 sum:"Those who already believed received reassurance; demanding an angel instead of believing the message would leave no respite (6:8)."});
})();
