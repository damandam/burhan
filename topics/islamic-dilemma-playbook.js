/* Flagship Tactical Debate Playbook: The “Islamic Dilemma” & Sibling Cards — 2026-11-23.
   Rebuilds christianity/islam-vs/d-dr-islamic-dilemma into a 14-node Tactical Debate Playbook
   (Opening move 01 -> Turn the dilemma back 02 -> 4 Tactical Angles A/B/C/D -> 7 Watch-out traps)
   with VERBATIM Arabic & English Scripture quotes on EVERY single node and branch, plus all 12
   primary scans, and upgrades d-dr-what-is-the-injil (6 scans), d-dr-judge-by-the-gospel-5-47,
   and d-dr-quran-2-85 into multi-branch Tactical Playbooks with full verbatim verse quotes. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const P=(node,props)=>Object.assign(node,props);
const S=(src,cap)=>({src:'shots/'+src,cap});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});

const DIL_CR={credit:'Islamic Apologetics · #islamic-dilemma · Deenresponds · #islamic-dilemma · #10-94 · #5-47 · #5-48 · #2-85 · Averroes · #alles · #quran-verse-neuzeit',link:'https://discord.com/channels/1328402309297733662/1368222423878471710'};
const INJ_CR={credit:'Deenresponds · #what-is-the-injil · Islamic Apologetics · #islamic-dilemma',link:'https://discord.com/channels/1328402309297733662/1368222344123908256'};

/* ============================================================================
   1. FLAGSHIP 14-NODE PLAYBOOK: THE "ISLAMIC DILEMMA" (d-dr-islamic-dilemma)
   ============================================================================ */

/* --- ANGLE A: THE "CONFIRMING" & "JUDGE BY IT" VERSES (2:41, 2:85, 2:101, 3:93, 5:43-48, 5:68) --- */
const dilTrapA1=P(N(
  DIL_CR,
  'If the Torah and Gospel were already corrupted in the 7th century, how could Allah command Jews and Christians in Qurʾān 5:43, 5:47, and 5:68 to judge by what was “with them”?',
  'Notice the Qurʾān’s surgical partitive grammar: Q 5:43 says “in it (fīhā) is the judgment of Allah” and Q 5:46 says “in it (fīhi) is guidance and light”—meaning a specific surviving ruling or prophecy inside their books (such as the stoning law in 5:43 or the prophecy of the unlettered Prophet in 7:157), never that every scribal line in their hands is uncorrupted!',
  'Partitive Prepositions (fīhā / fīhi) in Qurʾān 5.43–47 & the Verdict of Qurʾān 7.157',
  [
    '01 · “In it (fīhā) is Allah’s judgment” vs. “All of it is Allah’s judgment”: In Qurʾān 5:43, Medinan rabbis came to the Prophet ﷺ hoping for a lighter penalty than stoning for adultery. Allah exposed their hypocrisy: “How do they make you their judge while they have the Torah, in which (fīhā) is the judgment of Allah, then they turn away?” Saying “in that book is Allah’s ruling on stoning” does not endorse the rest of the book’s human additions (Q 2:79)—which is why five verses later (Q 5:48) Allah declares the Qurʾān muhaymin (the supreme corrective criterion OVER prior books).',
    '02 · What “upholding the Torah and Injīl” (Q 5.47, 5.68) actually requires—Qurʾān 7.157: In Qurʾān 7:157 and 5:65–68, Allah explicitly defines what it means for Jews and Christians to uphold what survives of the Torah and Injīl: following the Final Unlettered Prophet (al-nabī al-ummī) whom they find described in the Torah and Injīl with them, worshipping Allah alone without partners (Q 5:72–73), and believing in what was revealed to Muḥammad ﷺ!',
    '03 · Ibn al-Qayyim on the two-fold status of extant scriptures: As Ibn al-Qayyim explains, the scriptures in the hands of the People of the Book contain surviving truth (which convicts them when they violate their own monotheistic commandments and prophecies) alongside human alterations (which the Qurʾān exposes and corrects as muhaymin).'
  ],
  ['Qurʾān 5:43–48','Qurʾān 5:65–68','Qurʾān 7:157','Qurʾān 2:79','Tafsīr al-Rāzī; Ibn al-Qayyim'],
  [],
  {
    facts:[
      ['Q 5:43 grammar','fīhā = “in it is Allah’s ruling” (partitive, not total)'],
      ['Q 5:48 verdict','Qurʾān is muhaymin (supreme corrective judge over them)'],
      ['Q 7:157 mandate','Upholding Torah/Injīl = following the Final Prophet ﷺ'],
      ['Q 5:44 contrast','Rabbis were entrusted (ustuḥfiẓū) with it, and failed (5:13)']
    ],
    quotes:[
      {by:'Qurʾān 5:43 (Partitive fīhā — “in it is Allah’s judgment”)',ar:'وَكَيْفَ يُحَكِّمُونَكَ وَعِندَهُمُ التَّوْرَاةُ فِيهَا حُكْمُ اللَّهِ ثُمَّ يَتَوَلَّوْنَ مِن بَعْدِ ذَٰلِكَ',en:'But how is it that they come to you for judgment while they have the Torah, in which is the judgment of Allah? Then they turn away, even after that…',ref:'Qurʾān 5:43'},
      {by:'Qurʾān 5:47–48 (Muhaymin = Guardian and Corrective Criterion over previous books)',ar:'وَلْيَحْكُمْ أَهْلُ الْإِنجِيلِ بِمَا أَنزَلَ اللَّهُ فِيهِ ... وَأَنزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ الْكِتَابِ وَمُهَيْمِنًا عَلَيْهِ',en:'And let the People of the Gospel judge by what Allah has revealed therein… And We have revealed to you [O Muḥammad] the Book in truth, confirming that which preceded it of the Scripture and as a criterion/guardian (muhayminan) over it.',ref:'Qurʾān 5:47–48'},
      {by:'Qurʾān 7:157 (What the Torah & Injīl “with them” command them to do)',ar:'الَّذِينَ يَتَّبِعُونَ الرَّسُولَ النَّبِيَّ الْأُمِّيَّ الَّذِي يَجِدُونَهُ مَكْتُوبًا عِندَهُمْ فِي التَّوْرَاةِ وَالْإِنجِيلِ',en:'Those who follow the Messenger, the unlettered prophet, whom they find written in what they have of the Torah and the Gospel…',ref:'Qurʾān 7:157'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'If the Bible was corrupted, how could Qurʾān 5:43, 5:47, and 5:68 tell them to judge by it?'
});

const dilTrapA2=P(N(
  DIL_CR,
  'The Qurʾān tells the same prophetic stories as the Bible—and if the Qurʾān really taught that the 7th-century Bible was corrupted, why didn’t early Jews and Christians immediately raise this dilemma?',
  'The Qurʾān deliberately corrects the Bible’s gravest theological slanders in those very stories (clearing Aaron of making the Golden Calf in Q 20:85–94 vs. Exodus 32, clearing Solomon of idolatry in Q 2:102 vs. 1 Kings 11, and rejecting divine fatigue in Q 50:38 vs. Genesis 2:2)—and the conversion of Medina’s Grand Rabbi ʿAbdullāh ibn Salām (Bukhārī 3938, 7542) proves 7th-century Jews and Muslims universally understood the Qurʾān as a corrective criterion, not a rubber stamp!',
  'Deliberate Qurʾānic Corrections of the Bible & the Conversion of Rabbi ʿAbdullāh ibn Salām',
  [
    '01 · The Qurʾān systematically corrects the Bible’s slanders against God and His prophets: Far from blindly copying or rubber-stamping the biblical text, the Qurʾān targets and corrects specific fabrications inside the 7th-century biblical text: (a) Exodus 32:2–4 blames Prophet Aaron for fashioning the Golden Calf, whereas Qurʾān 20:85–94 exonerates Aaron and identifies al-Sāmirī; (b) 1 Kings 11:4–8 accuses Prophet Solomon of building idol temples for Chemosh and Molech, whereas Qurʾān 2:102 declares “Solomon did not disbelieve”; (c) Genesis 2:2 and Exodus 31:17 claim God “rested and was refreshed” after six days, whereas Qurʾān 50:38 explicitly refutes it: “And no fatigue touched Us!”',
    '02 · The Occam’s Razor proof from Medina’s Grand Rabbi ʿAbdullāh ibn Salām (Bukhārī 3938, 7542): ʿAbdullāh ibn Salām was the chief Jewish scholar of Medina who knew the Hebrew Torah intimately (Bukhārī 7542). His 7th-century Hebrew scroll of Exodus 32 blamed Aaron for the Golden Calf and Genesis 19 attributed incest to Lot. Yet when he heard the Qurʾān contradict those passages, he embraced Islam and testified to the Torah’s prophecies of Muḥammad ﷺ (Bukhārī 3938)—proving that the very first generation knew the Qurʾān corrected corrupted passages in extant scrolls!',
    '03 · Why no 7th-century Jew or Christian invented “David Wood’s dilemma”: Seventh-century Jews and Christians never argued “Your Qurʾān says our books are 100% word-for-word inerrant!” because the Qurʾān was publicly reciting verses condemning their scribes for writing the book with their own hands (Q 2:79), hiding parchment sheets (Q 6:91), and shifting words from their places (Q 4:46; 5:13).'
  ],
  ['Qurʾān 20:85–94 vs. Exodus 32:2–4','Qurʾān 2:102 vs. 1 Kings 11:4–8','Qurʾān 50:38 vs. Exodus 31:17','Ṣaḥīḥ al-Bukhārī 3938, 7542','Qurʾān 6:91'],
  [],
  {
    facts:[
      ['Q 20:85–94 vs. Exod 32','Qurʾān clears Prophet Aaron of making the Golden Calf'],
      ['Q 2:102 vs. 1 Kgs 11','Qurʾān clears Prophet Solomon of polytheism/idolatry'],
      ['Q 50:38 vs. Exod 31:17','Qurʾān refutes the claim that God needed rest/refreshment'],
      ['Bukhārī 3938, 7542','Medina’s Chief Rabbi embraced Islam despite Torah differences']
    ],
    quotes:[
      {by:'Qurʾān 2:102 (Correcting 1 Kings 11:4–8 to exonerate Solomon)',ar:'وَمَا كَفَرَ سُلَيْمَانُ وَلَٰكِنَّ الشَّيَاطِينَ كَفَرُوا',en:'And Solomon did not disbelieve, but the devils disbelieved…',ref:'Qurʾān 2:102'},
      {by:'Qurʾān 50:38 (Directly correcting Genesis 2:2 / Exodus 31:17)',ar:'وَلَقَدْ خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا فِي سِتَّةِ أَيَّامٍ وَمَا مَسَّنَا مِن لُّغُوبٍ',en:'And We did certainly create the heavens and earth and what is between them in six days, and no fatigue touched Us.',ref:'Qurʾān 50:38'},
      {by:'Qurʾān 20:85, 90 (Exonerating Aaron against Exodus 32:2–4)',ar:'قَالَ فَإِنَّا قَدْ فَتَنَّا قَوْمَكَ مِن بَعْدِكَ وَأَضَلَّهُمُ السَّامِرِيُّ ... وَلَقَدْ قَالَ لَهُمْ هَارُونُ مِن قَبْلُ يَا قَوْمِ إِنَّمَا فُتِنتُم بِهِ',en:'[Allah] said, “Indeed, We have tried your people after you, and the Sāmirī has led them astray.” … And Aaron had already told them before: “O my people, you are only being tested by it, and indeed, your Lord is the Most Merciful…”',ref:'Qurʾān 20:85, 90'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The Qurʾān tells the same stories as the Bible—and why didn’t 7th-century Christians raise this dilemma?'
});

const dilAngleA=P(N(
  DIL_CR,
  null,
  'Take every “confirming” and “judge by it” verse on the table (Qurʾān 2:41, 2:85, 2:89, 2:101, 3:93, 5:43–48, 5:68): in Arabic grammar and classical tafsīr, muṣaddiqan li-mā maʿahum is a circumstantial ḥāl clause meaning the Qurʾān fulfills the core monotheistic message and prophetic announcements surviving with them (Q 2:89; 7:157), while Q 3:93, Q 2:85, and Q 5:43 expose specific laws (camel meat, ransoming captives, stoning) that the rabbis were hypocritically hiding or evading.',
  'Angle A: Verse-by-Verse Refutation of 2.41, 2.85, 2.89, 2.101, 3.93, 5.43–48 & 5.68',
  [
    '01 · Qurʾān 2.41, 2.89 & 2.101—“Confirming what is with them” means fulfilling the prophecy of the Final Prophet they already possessed: Read Qurʾān 2:89 and 2:101 together! Q 2:89 explains what “confirming what is with them” refers to: before the Prophet ﷺ was sent, the Jews of Medina used to pray for victory over the pagans by the coming of the Final Prophet described in their books; yet “when there came to them what they recognized (mā ʿarafū), they disbelieved in it!” Confirming that their books foretold his coming is the exact opposite of certifying every scribal corruption (which Q 2:75–79 condemns in the exact same passage!).',
    '02 · Qurʾān 3.93—“Bring the Torah and recite it” was a targeted debate challenge on camel meat: When Medinan rabbis claimed that eating camel meat and milk was forbidden by God’s law to Abraham and Moses, Q 3:93 revealed that Israel (Jacob) had only forbidden it to himself before the Torah was revealed, and challenged them: “Bring the Torah and recite it, if you are truthful!” The rabbis dared not open their scrolls because Genesis 32:32 proved the Qurʾān right.',
    '03 · Qurʾān 2.85 & 5.43–48—Exposing selective Jewish obedience to surviving Torah rulings under the Qurʾān’s Muhaymin authority: In Q 2:84–85, Medinan Jewish tribes allied with warring pagan factions to kill and expel rival Jewish tribes, then piously ransomed the captives citing the Torah—prompting Allah’s rebuke: “Do you believe in part of the Book and disbelieve in part?” And in Q 5:48, Allah crowns the entire discussion by declaring the Qurʾān muhaymin (supreme guardian, witness, and corrective judge OVER previous scriptures).'
  ],
  ['Qurʾān 2:41, 75–79, 84–85, 89, 101','Qurʾān 3:93','Qurʾān 5:43–48, 68','Tafsīr al-Ṭabarī; Ibn Kathīr; al-Rāzī'],
  [dilTrapA1,dilTrapA2],
  {
    facts:[
      ['Q 2:89 & 2:101','Confirms the prophecy of the Prophet ﷺ they recognized (mā ʿarafū)'],
      ['Q 2:79 (same passage!)','22 verses earlier: “Woe to those who write the book with their hands!”'],
      ['Q 3:93 context','Debate challenge proving camel taboo was Jacob’s, not Mosaic law'],
      ['Q 5:48 (Muhaymin)','The Qurʾān sits in judgment OVER earlier scriptures']
    ],
    quotes:[
      {by:'Qurʾān 2:89 (Explaining what “confirming what is with them” means)',ar:'وَلَمَّا جَاءَهُمْ كِتَابٌ مِّنْ عِندِ اللَّهِ مُصَدِّقٌ لِّمَا مَعَهُمْ وَكَانُوا مِن قَبْلُ يَسْتَفْتِحُونَ عَلَى الَّذِينَ كَفَرُوا فَلَمَّا جَاءَهُم مَّا عَرَفُوا كَفَرُوا بِهِ',en:'And when there came to them a Book from Allah confirming that which was with them—although before they used to pray for victory against those who disbelieved—then when there came to them that which they recognized, they disbelieved in it; so the curse of Allah will be upon the disbelievers.',ref:'Qurʾān 2:89'},
      {by:'Qurʾān 3:93 (The camel-meat challenge to the rabbis)',ar:'كُلُّ الطَّعَامِ كَانَ حِلًّا لِّبَنِي إِسْرَائِيلَ إِلَّا مَا حَرَّمَ إِسْرَائِيلُ عَلَىٰ نَفْسِهِ مِن قَبْلِ أَن تُنَزَّلَ التَّوْرَاةُ ۗ قُلْ فَأْتُوا بِالتَّوْرَاةِ فَاتْلُوهَا إِن كُنتُمْ صَادِقِينَ',en:'All food was lawful to the Children of Israel except what Israel [Jacob] had made unlawful to himself before the Torah was revealed. Say, “So bring the Torah and recite it, if you should be truthful.”',ref:'Qurʾān 3:93'},
      {by:'Qurʾān 2:85 (Condemning selective obedience to the captive-ransom law)',ar:'أَفَتُؤْمِنُونَ بِبَعْضِ الْكِتَابِ وَتَكْفُرُونَ بِبَعْضٍ',en:'Then do you believe in part of the Scripture and disbelieve in part? Then what is the recompense for those who do that among you except disgrace in worldly life…',ref:'Qurʾān 2:85'},
      {by:'Qurʾān 5:68',ar:'قُلْ يَا أَهْلَ الْكِتَابِ لَسْتُمْ عَلَىٰ شَيْءٍ حَتَّىٰ تُقِيمُوا التَّوْرَاةَ وَالْإِنجِيلَ وَمَا أُنزِلَ إِلَيْكُم مِّن رَّبِّكُمْ',en:'Say, “O People of the Scripture, you are [standing] on nothing until you uphold the Torah and the Gospel, and what has been revealed to you from your Lord [the Qurʾān].”',ref:'Qurʾān 5:68'}
    ],
    shots:[
      S('pdf3-dilemma-alles-p1.jpg','Master Tafsīr Dossier on the Islamic Dilemma (1/2): Taṣdīq ʿāmm vs. muṭlaq, ḥāl grammar & Muhaymin (Q 5:48).'),
      S('pdf3-dilemma-alles-p2.jpg','Master Tafsīr Dossier on the Islamic Dilemma (2/2): Classical exegetes on Q 5:43–48 and surviving rulings.'),
      S('dilemma-5-IMG_4271.jpg','Primary scholarly scan on Qurʾān 5:43–48 and general vs. absolute confirmation (1/2).'),
      S('dilemma-6-IMG_4270.jpg','Primary scholarly scan on Qurʾān 5:43–48 and general vs. absolute confirmation (2/2).')
    ]
  }
),{
  optWho:'Angle A · The “Confirming” & “Judge by It” Verses (2:41, 2:85, 2:101, 3:93, 5:43–48, 5:68)',
  optLabel:'Why “confirming what is with them” is general (taṣdīq ʿāmm) and subject to the Qurʾān as Muhaymin (5:48)',
  forkTitle:'Watch out · common Christian follow-up traps on 5:43–47 & biblical stories',
  forkSub:'Tap the objection they raise next to dismantle it with verbatim verses.'
});

/* --- ANGLE B: "ASK THOSE WHO READ THE BOOK" & "NONE CAN CHANGE HIS WORDS" (10:94, 6:115, 18:27, 15:9) --- */
const dilTrapB1=P(N(
  DIL_CR,
  'In Qurʾān 6:114–115 the People of the Book are mentioned right before “And the word of your Lord has been fulfilled in truth and in justice. None can change His words”—proving “His words” includes the Torah and Gospel.',
  'Read Qurʾān 6:114 verbatim: “And those to whom We gave the Scripture know that IT [the Qurʾān sent down to you] is revealed from your Lord in truth!” Then v. 115 says “the word of your Lord has been fulfilled (tammat) in truth and justice. None can change His words”—referring to Allah’s unbreakable decrees, promises of victory, and the Qurʾān itself (cf. Q 6:34; 10:64; 15:9), whereas the Torah was entrusted to the rabbis to guard (Q 5:44) and they corrupted it (Q 5:13; 2:79)!',
  'Qurʾān 6.114–115 vs. Qurʾān 5.44 & 15.9: Divine Decrees vs. Books Entrusted to Rabbis',
  [
    '01 · What “IT is revealed from your Lord in truth” in Q 6.114 refers to—the Qurʾān: In Qurʾān 6:114, the Prophet ﷺ asks: “Shall I seek a judge other than Allah, while it is He who has revealed to YOU [Muḥammad] the Book (al-Kitāb) explained in detail? And those to whom We [previously] gave the Scripture know that it is sent down from your Lord in truth!” Thus the book defended in 6:114 is the Qurʾān.',
    '02 · What kalimāt Allāh (“words of Allah”) means in Q 6.34, 6.115, 10.64 & 18.27: Earlier in the exact same sūra (Qurʾān 6:34), Allah defines what “no one can change the words of Allah” means: “And certainly messengers were denied before you, but they were patient… until Our help came to them. And none can alter the words (decrees/promises) of Allah!” Likewise in Q 10:64, “For them are good tidings in the worldly life and in the Hereafter. No change is there in the words (promises) of Allah.” And in Q 18:109 and 31:27, “the words of Allah” are His infinite creative commands and knowledge that all the oceans of ink could never exhaust!',
    '03 · Why the Qurʾān is divinely guarded (Q 15.9) while earlier scriptures were left to human stewards (Q 5.44): In Qurʾān 15:9 Allah promises to guard “the Dhikr” (defined in 15:1 and 15:6 as the Qurʾān). By contrast, in Qurʾān 5:44 Allah states that the rabbis and scholars were commanded to guard the Torah (“by what they were entrusted to guard [bi-mā ustuḥfiẓū] of the Book of Allah”)—and Q 2:79 and 5:13 record that they betrayed that trust!'
  ],
  ['Qurʾān 6:34, 114–115','Qurʾān 10:64','Qurʾān 18:27, 109','Qurʾān 15:1, 6, 9','Qurʾān 5:44'],
  [],
  {
    facts:[
      ['Q 6:114 subject','“He who revealed to YOU [Muḥammad] the Book in detail”'],
      ['Q 6:34 & 10:64','Defines “no change in Allah’s words” as His promises/decrees'],
      ['Q 15:1, 6, 9','al-Dhikr guarded by Allah is explicitly the Qurʾān'],
      ['Q 5:44 (ustuḥfiẓū)','Earlier books were entrusted to rabbis to guard, not promised immunity']
    ],
    quotes:[
      {by:'Qurʾān 6:114–115 (Read both verses together)',ar:'أَفَغَيْرَ اللَّهِ أَبْتَغِي حَكَمًا وَهُوَ الَّذِي أَنزَلَ إِلَيْكُمُ الْكِتَابَ مُفَصَّلًا ۚ وَالَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يَعْلَمُونَ أَنَّهُ مُنَزَّلٌ مِّن رَّبِّكَ بِالْحَقِّ ... وَتَمَّتْ كَلِمَتُ رَبِّكَ صِدْقًا وَعَدْلًا ۚ لَّا مُبَدِّلَ لِكَلِمَاتِهِ',en:'“Then is it other than Allah I should seek as judge while it is He who has revealed to you [Muslims] the Book explained in detail?” And those to whom We [previously] gave the Scripture know that it [the Qurʾān] is sent down from your Lord in truth… And the word of your Lord has been fulfilled in truth and in justice. None can alter His words…',ref:'Qurʾān 6:114–115'},
      {by:'Qurʾān 6:34 (Same sūra defines “none can alter the words of Allah” as His promise of victory)',ar:'وَلَقَدْ كُذِّبَتْ رُسُلٌ مِّن قَبْلِكَ فَصَبَرُوا عَلَىٰ مَا كُذِّبُوا وَأُوذُوا حَتَّىٰ أَتَاهُمْ نَصْرُنَا ۚ وَلَا مُبَدِّلَ لِكَلِمَاتِ اللَّهِ',en:'And certainly were messengers denied before you, and they were patient over [the effects of] denial and were harmed until Our victory came to them. And none can alter the words [promises] of Allah.',ref:'Qurʾān 6:34'},
      {by:'Qurʾān 5:44 vs. Qurʾān 15:9 (Rabbis entrusted to guard Torah vs. Allah guarding the Qurʾān)',ar:'بِمَا اسْتُحْفِظُوا مِن كِتَابِ اللَّهِ ... إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',en:'“…by what they [the rabbis and scholars] were entrusted to guard of the Scripture of Allah…” (5:44) vs. “Indeed, it is We who sent down the Reminder [the Qurʾān], and indeed, We will be its guardian.” (15:9)',ref:'Qurʾān 5:44; 15:9'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'In Qurʾān 6:114–115 the People of the Book are mentioned right before “None can change His words”'
});

const dilTrapB2=P(N(
  DIL_CR,
  'If Allah told the Prophet ﷺ in Qurʾān 10:94 to “ask those who read the Book before you,” doesn’t that make their scriptures the infallible benchmark over the Qurʾān?',
  'In Arabic grammar, the particle in (“if you are in doubt…”) introduces a hypothetical impossibility—identical to Qurʾān 43:81 (“Say: If [in] the Most Merciful had a son, I would be the first of worshippers”) and Galatians 1:8—and the Prophet ﷺ immediately declared, “I neither doubt nor ask,” while setting the strict Islamic rule in Ṣaḥīḥ al-Bukhārī 4485 & 7362: “Neither believe the People of the Book nor disbelieve them!”',
  'Arabic Conditional in in Qurʾān 10.94, Qurʾān 43.81 & Ṣaḥīḥ al-Bukhārī 4485 / 7362',
  [
    '01 · Arabic conditional syntax (in vs. idhā)—Hypothetical rhetorical condition: In classical Arabic, idhā is used for expected/certain events, whereas in is routinely used for impossible or purely hypothetical conditions to drive home a rhetorical point. For example, in Qurʾān 43:81 Allah commands: “Say, ‘If (in) the Most Merciful had a son, then I would be the first of [his] worshippers.’” Does Q 43:81 mean Allah might actually have a son? Of course not! Likewise in Q 10:94, “If (in) you are in doubt…” means: even if anyone were ever to doubt that prophets are human messengers sent after Noah and Moses (10:71–93), even the scholars of the People of the Book like ʿAbdullāh ibn Salām know that core truth!',
    '02 · The Prophet’s ﷺ response & the second half of Q 10.94: As recorded by Qatāda in Tafsīr al-Ṭabarī and Ibn Kathīr, when Q 10:94 was revealed, the Prophet ﷺ said: “I do not doubt, and I do not ask (lā ashukku wa-lā asʾalu).” And the very same verse immediately concludes: “The truth has certainly come to you from your Lord, so never be among the doubters!”',
    '03 · The binding Prophetic rule on the Bible (Ṣaḥīḥ al-Bukhārī 4485 & 7362): In Ṣaḥīḥ al-Bukhārī 4485 (and 7362), the Prophet ﷺ established the permanent Islamic rule regarding the scriptures of the People of the Book: “Do not believe the People of the Scripture and do not disbelieve them, but say: We believe in Allah and what has been revealed to us…” Why? Because what aligns with the Qurʾān is true, what contradicts the Qurʾān is corrupted, and what is unmentioned is suspended!'
  ],
  ['Qurʾān 10:94–95','Qurʾān 43:81','Ṣaḥīḥ al-Bukhārī 4485, 7362','Tafsīr al-Ṭabarī; Tafsīr Ibn Kathīr'],
  [],
  {
    facts:[
      ['Arabic particle in','Hypothetical condition (compare Q 43:81: “If Allah had a son…”'],
      ['Prophet’s ﷺ verdict','“I do not doubt, and I do not ask” (al-Ṭabarī / Ibn Kathīr)'],
      ['Ibn ʿAbbās on 10:94','Refers to truthful Jewish converts like ʿAbdullāh ibn Salām'],
      ['Bukhārī 4485 & 7362','“Neither believe the People of the Book nor disbelieve them”']
    ],
    quotes:[
      {by:'Qurʾān 43:81 (Exact same hypothetical particle in — rhetorical impossibility)',ar:'قُلْ إِن كَانَ لِلرَّحْمَٰنِ وَلَدٌ فَأَنَا أَوَّلُ الْعَابِدِينَ',en:'Say, [O Muḥammad], “If [in] the Most Merciful had a son, then I would be the first of [his] worshippers.”',ref:'Qurʾān 43:81'},
      {by:'Ṣaḥīḥ al-Bukhārī 4485 (The Prophet’s ﷺ command on the Bible)',ar:'لاَ تُصَدِّقُوا أَهْلَ الْكِتَابِ وَلاَ تُكَذِّبُوهُمْ، وَقُولُوا آمَنَّا بِاللَّهِ وَمَا أُنْزِلَ إِلَيْنَا',en:'Do not believe the People of the Scripture or disbelieve them, but say: “We believe in Allah and what is revealed to us…”',ref:'Ṣaḥīḥ al-Bukhārī 4485'},
      {by:'Ṣaḥīḥ al-Bukhārī 7362 (Ibn ʿAbbās prohibiting Muslims from asking the People of the Book)',en:'O Muslims! How do you ask the People of the Scriptures, though your Book (the Qurʾān) which was revealed to His Prophet is the most recent information from Allah and you recite it pure and undistorted? And Allah has told you that the People of the Scriptures changed that which Allah had written and altered the Scripture with their own hands!',ref:'Ṣaḥīḥ al-Bukhārī 7362'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Didn’t Qurʾān 10:94 command the Prophet ﷺ to consult the People of the Book to verify his revelation?'
});

const dilAngleB=P(N(
  DIL_CR,
  null,
  'Dismantle their two favorite proof-texts for biblical inerrancy—Qurʾān 10:94 (“ask those who read the Book before you”) and Qurʾān 6:115 / 18:27 (“none can change His words”): Q 10:94 uses a hypothetical rhetorical condition (in) following the stories of Noah and Moses (10:71–93) and refers to converts like ʿAbdullāh ibn Salām, while kalimāt Allāh in Q 6:115 and 18:27 means Allah’s unbreakable decrees, promises (Q 6:34; 10:64), and the Qurʾān itself (Q 18:27; 15:9).',
  'Angle B: Qurʾān 10.94, 6.114–115, 18.27 & 15.9 Examined in Full Context',
  [
    '01 · Qurʾān 10.94 in context (verses 71–94)—Confirming the core history of Noah and Moses through converts like ʿAbdullāh ibn Salām: Sūra 10 verses 71–93 recount the missions of Noah and Moses and how Pharaoh perished in the sea. Verse 94 then states hypothetically: “So if (in) you are in doubt about what We have revealed to you, then ask those who have been reading the Scripture before you. The truth has certainly come to you from your Lord, so never be among the doubters.” As Ibn ʿAbbās, Mujāhid, and Ibn Zayd explain, this refers to learned converts from the People of the Book (such as ʿAbdullāh ibn Salām) whose scriptures attested both to the core stories of Noah/Moses and to the coming of the Final Prophet.',
    '02 · Qurʾān 6.115 & 18.27—“None can change His words” refers to Allah’s decrees, promises, and the Qurʾān, never to books entrusted to rabbis: In Qurʾān 18:27, Allah says: “And recite what has been revealed to YOU of the Book of your Lord; there is no changer of His words.” Here “the Book of your Lord” revealed to Muḥammad ﷺ is explicitly the Qurʾān! And in Q 6:34 and Q 10:64, “no change in the words of Allah” is explicitly defined as Allah’s unbreakable decree of victory for His messengers and reward for the believers. If “none can change His words” meant no human scribe can physically alter a manuscript page, then nobody could print a typo or mistranslation of the Bible or Qurʾān today!',
    '03 · Qurʾān 15.9—“We sent down the Dhikr and We will guard it”: In Qurʾān 15:1 and 15:6, the Meccan pagans say to the Prophet ﷺ: “O you upon whom the Reminder (al-Dhikr) has been sent down, you are mad!” Three verses later (15:9), Allah answers: “Indeed, it is We who sent down the Reminder (al-Dhikr), and indeed, We will be its guardian.” Thus the definite noun al-Dhikr in 15:9 refers specifically to the Qurʾān, contrasted with Q 5:44 where the rabbis were entrusted to guard the Torah and failed.'
  ],
  ['Qurʾān 10:71–94','Qurʾān 6:34, 114–115','Qurʾān 18:27','Qurʾān 15:1, 6, 9','Tafsīr al-Ṭabarī; al-Qurṭubī; Ibn Kathīr'],
  [dilTrapB1,dilTrapB2],
  {
    facts:[
      ['Q 10:94 context','Follows Noah & Moses (10:71–93); hypothetical particle in'],
      ['Q 18:27 wording','“Recite what was revealed to YOU of the Book of your Lord”'],
      ['Q 6:34; 10:64','Defines “words of Allah” (kalimāt) as His decrees & promises'],
      ['Q 15:1, 6, 9','al-Dhikr is explicitly the Qurʾān sent down to Muḥammad ﷺ']
    ],
    quotes:[
      {by:'Qurʾān 10:94 (Full verse in context)',ar:'فَإِن كُنتَ فِي شَكٍّ مِّمَّا أَنزَلْنَا إِلَيْكَ فَاسْأَلِ الَّذِينَ يَقْرَءُونَ الْكِتَابَ مِن قَبْلِكَ ۚ لَقَدْ جَاءَكَ الْحَقُّ مِن رَّبِّكَ فَلَا تَكُونَنَّ مِنَ الْمُمْتَرِينَ',en:'So if you are in doubt, [O Muḥammad], about that which We have revealed to you, then ask those who have been reading the Scripture before you. The truth has certainly come to you from your Lord, so never be among the doubters.',ref:'Qurʾān 10:94'},
      {by:'Qurʾān 18:27 (Explicitly speaking of the Book revealed to Muḥammad ﷺ)',ar:'وَاتْلُ مَا أُوحِيَ إِلَيْكَ مِن كِتَابِ رَبِّكَ ۖ لَا مُبَدِّلَ لِكَلِمَاتِهِ وَلَن تَجِدَ مِن دُونِهِ مُلْتَحَدًا',en:'And recite, [O Muḥammad], what has been revealed to you of the Book of your Lord. There is no changer of His words, and never will you find in other than Him a refuge.',ref:'Qurʾān 18:27'},
      {by:'Qurʾān 15:6, 9 (Defining “al-Dhikr” as the Qurʾān revealed to Muḥammad ﷺ)',ar:'وَقَالُوا يَا أَيُّهَا الَّذِي نُزِّلَ عَلَيْهِ الذِّكْرُ إِنَّكَ لَمَجْنُونٌ ... إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',en:'And they say, “O you upon whom the Reminder (al-Dhikr) has been sent down, indeed you are mad.” … Indeed, it is We who sent down the Reminder (al-Dhikr), and indeed, We will be its guardian.',ref:'Qurʾān 15:6, 9'}
    ]
  }
),{
  optWho:'Angle B · “Ask Those Who Read the Book” & “None Can Change His Words” (10:94, 6:115, 18:27, 15:9)',
  optLabel:'Why 10:94 is a hypothetical condition and “His words” in 6:115 / 18:27 means divine decrees & the Qurʾān',
  forkTitle:'Watch out · common Christian counter-claims on 6:114–115 & 10:94',
  forkSub:'Tap the objection they raise next to dismantle it with verbatim verses.'
});

/* --- ANGLE C: EXPLICIT QUR'ANIC TEXTUAL CORRUPTION VERSES (2:75-79, 3:78, 4:46, 5:13-14, 5:41) --- */
const dilTrapC1=P(N(
  DIL_CR,
  'Al-Bukhārī, Ibn ʿAbbās, and Fakhr al-Dīn al-Rāzī all said that no one can remove a single word from Allah’s books and that the People of the Book only misinterpreted the text (taḥrīf al-maʿnā), never altered its wording (taḥrīf al-lafẓ).',
  'That is a famous polemical misquotation: in Ṣaḥīḥ al-Bukhārī 7362 (and 2685 / 7523), Ibn ʿAbbās explicitly testifies that the People of the Book physically altered and wrote the Scripture with their own hands (baddalū kitāba Allāhi wa-ghayyarūhu wa-katabū bi-aydīhim al-kitāb); Ibn Ḥajar (Fatḥ al-Bārī 13/523) proves the contrary narration cited by Ibn al-Qayyim is a broken mursal report; and al-Rāzī states that the original Torah was already textually altered during the Babylonian exile!',
  'Ibn ʿAbbās in Ṣaḥīḥ al-Bukhārī 7362, Ibn Ḥajar’s Fatḥ al-Bārī & Fakhr al-Dīn al-Rāzī',
  [
    '01 · Ibn ʿAbbās’s authentic verdict in Ṣaḥīḥ al-Bukhārī 7362 (and 2685, 7523): In Ṣaḥīḥ al-Bukhārī’s Book of Holding Fast to the Qurʾān and Sunnah (no. 7362), Ibn ʿAbbās rebukes Muslims for asking the People of the Book anything, saying: “And Allah has told you that the People of the Scripture changed (baddalū) that which Allah had written and altered the Scripture with their own hands (wa-ghayyarū bi-aydīhim al-kitāb), and said, ‘This is from Allah,’ to sell it for a small price!” That is an explicit affirmation of physical textual alteration (taḥrīf al-lafẓ) by Ibn ʿAbbās inside Ṣaḥīḥ al-Bukhārī!',
    '02 · Why the “no one can remove a word” quote attributed to al-Bukhārī / Ibn ʿAbbās is false (Ibn Ḥajar, Fatḥ al-Bārī 13/523): Christian polemicists quote a chapter remark in al-Bukhārī where a phrase (“none can remove a word from one of Allah’s books”) is mentioned. As Ibn Ḥajar al-ʿAsqalānī demonstrates in Fatḥ al-Bārī (13/523), Ibn al-Qayyim mistakenly attributed that gloss to al-Bukhārī himself, whereas it actually comes from a broken (munqaṭiʿ / mursal) report via Ibn Abī Ḥātim that contradicts Ibn ʿAbbās’s own authentic, connected statement in Bukhārī 7362 and 7523!',
    '03 · What Fakhr al-Dīn al-Rāzī and Ibn Kathīr actually wrote: In Mafātīḥ al-Ghayb, al-Rāzī explains that the original Torah was physically burned and altered in the era of Nebuchadnezzar and Ezra; only after its corrupted version became widely copied did later rabbis rely primarily on distortive exegesis. And on Qurʾān 3:78, Ibn Kathīr exposes how Christian apologists crop his quote mid-sentence right before the word “Then (thumma),” where Ibn Kathīr concludes that they hold “books which they have written themselves and then say: This is from Allah!”'
  ],
  ['Ṣaḥīḥ al-Bukhārī 2685, 7362, 7523','Ibn Ḥajar, Fatḥ al-Bārī 13/523','Tafsīr Ibn Kathīr on Q 3:78 & 62:2','Tafsīr al-Rāzī (Mafātīḥ al-Ghayb)'],
  [],
  {
    facts:[
      ['Bukhārī 7362 & 7523','Ibn ʿAbbās: “They altered the Book with their own hands!”'],
      ['Fatḥ al-Bārī 13/523','Ibn Ḥajar proves the contrary Ibn ʿAbbās report is broken'],
      ['Ibn Kathīr on 3:78','Apologists crop right before “Then: they wrote books themselves”'],
      ['Al-Rāzī on Torah','Affirms textual corruption in the Babylonian / post-exilic era']
    ],
    quotes:[
      {by:'Ṣaḥīḥ al-Bukhārī 7362 (Ibn ʿAbbās’s authentic words)',ar:'وَقَدْ حَدَّثَكُمُ اللَّهُ أَنَّ أَهْلَ الْكِتَابِ بَدَّلُوا مَا كَتَبَ اللَّهُ وَغَيَّرُوا بِأَيْدِيهِمُ الْكِتَابَ، فَقَالُوا هُوَ مِنْ عِنْدِ اللَّهِ لِيَشْتَرُوا بِهِ ثَمَنًا قَلِيلاً',en:'And Allah has told you that the People of the Scripture changed that which Allah had written and altered the Scripture with their own hands, and said, “This is from Allah,” to buy with it a little price!',ref:'Ṣaḥīḥ al-Bukhārī 7362'},
      {by:'Ṣaḥīḥ al-Bukhārī 7523 (Ibn ʿAbbās repeating the verdict)',en:'Has not the knowledge which has come to you prevented you from asking them? No, by Allah, we have never seen any man from them asking you regarding what has been revealed to you!',ref:'Ṣaḥīḥ al-Bukhārī 7523'},
      {by:'Ibn Kathīr on Qurʾān 3:78 (The sentence apologists crop out)',en:'Then, they have in their hands books which they have written themselves, and then they say: “This is from Allah,” and that is their lie against Allah.',ref:'Tafsīr Ibn Kathīr on Qurʾān 3:78'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Didn’t al-Bukhārī, Ibn ʿAbbās, and al-Rāzī say no one could alter the Bible’s wording?'
});

const dilTrapC2=P(N(
  DIL_CR,
  'In Qurʾān 5:13 (“yuḥarrifūna al-kalima ʿan mawāḍiʿihi”), distorting words “from their places” only means misinterpreting them in speech, and classical Muslim scholars accepted the Bible’s text.',
  'Both the Arabic grammar of 5:13 and the consensus of classical Muslim scholars refute that: al-Jurjānī and classical lexicons confirm that Form II yuḥarrifūna with ʿan mawāḍiʿihi (“away from their physical places”) includes physically displacing and substituting words on the page, and Ibn Ḥazm, al-Qurṭubī, Ibn Taymiyya, Ibn Kathīr, al-Qarāfī, and Ibn al-Qayyim all explicitly documented the textual corruption of the extant Torah and four Gospels!',
  'The Spatial Syntax of Qurʾān 5.13 & the Verdicts of Classical Sunni Scholars',
  [
    '01 · Al-Jurjānī & the spatial syntax of Qurʾān 4.46, 5.13, and 5.41: In Qurʾān 5:13, Allah uses the intensive Form II verb yuḥarrifūna (“they repeatedly distort/shift”) with the spatial preposition ʿan (“away from”) and the plural noun of place mawāḍiʿihi (“their proper places”). Simultaneously, Q 5:13 adds: “and they forgot/lost a portion of that of which they were reminded (wa-nasū ḥaẓẓan mimmā dhukkirū bihi).” Together with Q 2:79 (“who write the book with their hands”) and Q 6:91 (“you make it into parchment sheets, disclosing some and concealing much”), the Qurʾān explicitly establishes all three forms of textual corruption: physical addition (2:79), displacement/substitution (5:13), and omission/loss (5:13; 6:91)!',
    '02 · The explicit verdicts of classical Sunni scholars: (a) Imām al-Qurṭubī: “The Gospel that is in the hands of the Christians is not the Gospel that Allah spoke of, nor is it transmitted by tawātur”; (b) Ibn Kathīr (on Q 62:2): “In their four Gospels there is disparity, additions, and omissions; they altered and distorted their books”; (c) Ibn Taymiyya (al-Jawāb al-Ṣaḥīḥ): “The majority of Muslims hold that some of its words were altered alongside widespread distortion of its meanings”; (d) Ibn Ḥazm (al-Faṣl) & al-Qarāfī: cataloged dozens of textual contradictions and moral impossibilities proving textual alteration.',
    '03 · Turning the tables with 1–2 Maccabees and the Talmud (shots/dr8-torah-1..2.webp): Even within the Christian and Jewish traditions themselves, Protestants reject seven Old Testament books (including 1–2 Maccabees) that Catholic and Orthodox Bibles revere as inspired Scripture, and the Samaritan Pentateuch, Masoretic Text, and Greek Septuagint contradict one another in thousands of places!'
  ],
  ['Qurʾān 4:46; 5:13–14, 41','Qurʾān 6:91','Ibn Taymiyya, al-Jawāb al-Ṣaḥīḥ','Al-Qurṭubī; Ibn Ḥazm; Ibn Kathīr on Q 62:2'],
  [],
  {
    facts:[
      ['Q 2:79 + 5:13 + 6:91','Addition (2:79), displacement (5:13) & omission/concealment (5:13; 6:91)'],
      ['Al-Qurṭubī verdict','Extant Gospels lack tawātur and are not the revealed Injīl'],
      ['Ibn Kathīr on 62:2','The four Gospels contain contradictions, additions & omissions'],
      ['Ibn Taymiyya','Majority of scholars affirm textual alteration of words + meanings']
    ],
    quotes:[
      {by:'Qurʾān 5:13–14 (Textual displacement AND loss of scripture portions)',ar:'يُحَرِّفُونَ الْكَلِمَ عَن مَّوَاضِعِهِ ۙ وَنَسُوا حَظًّا مِّمَّا ذُكِّرُوا بِهِ ... وَمِنَ الَّذِينَ قَالُوا إِنَّا نَصَارَىٰ أَخَذْنَا مِيثَاقَهُمْ فَنَسُوا حَظًّا مِّمَّا ذُكِّرُوا بِهِ',en:'They distort words from their [proper] places and have forgotten [lost] a portion of that of which they were reminded… And from those who say, “We are Christians,” We took their covenant; but they forgot [lost] a portion of that of which they were reminded.',ref:'Qurʾān 5:13–14'},
      {by:'Qurʾān 6:91 (Making scripture into separate sheets and hiding much of it)',ar:'تَجْعَلُونَهُ قَرَاطِيسَ تُبْدُونَهَا وَتُخْفُونَ كَثِيرًا',en:'Say, “Who revealed the Scripture that Moses brought as light and guidance to the people? You make it into [separate] sheets, disclosing [some of] it and concealing much.”',ref:'Qurʾān 6:91'}
    ],
    shots:[
      S('dilemma-7-IMG_7740.jpg','Classical scholarly & manuscript evidence on textual alteration (1/2).'),
      S('dilemma-8-IMG_7741.jpg','Classical scholarly & manuscript evidence on textual alteration (2/2).'),
      S('dr8-torah-1.webp','Deenresponds #torah scan (1/2): Deuterocanonical 1–2 Maccabees vs. Protestant canon.'),
      S('dr8-torah-2.webp','Deenresponds #torah scan (2/2): Classical Talmudic & textual comparison.')
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Doesn’t yuḥarrifūna in 5:13 only mean verbal misinterpretation, and didn’t Muslim scholars accept the Bible?'
});

const dilAngleC=P(N(
  DIL_CR,
  null,
  'Put the Qurʾān’s explicit corruption verses directly on the screen (Qurʾān 2:75, 2:79, 3:78, 4:46, 5:13–14, 5:41, 6:91): the Qurʾān states in plain Arabic that scribes physically wrote forged scripture with their own hands and sold it as “from Allah” (2:79), shifted words out of their places (4:46; 5:13), lost major portions of what was revealed to them (5:13–14), and hid parchment sheets (6:91)!',
  'Angle C: The Qurʾān’s Explicit Textual Corruption Verses (2.75–79, 3.78, 4.46, 5.13–14, 6.91)',
  [
    '01 · Qurʾān 2.79—Physical forgery of books by human hands: Read Qurʾān 2:79 verbatim: “So woe to those who write the book with their hands (yaktubūna al-kitāba bi-aydīhim), then say, ‘This is from Allah,’ in order to exchange it for a small price! Woe to them for what their hands have written!” Writing a book with one’s own hands and passing it off as divine scripture is the literal definition of physical textual corruption (taḥrīf al-lafẓ).',
    '02 · Qurʾān 2.75, 4.46 & 5.13–14—Deliberate distortion (taḥrīf) and loss of revealed text (nisyān): In Qurʾān 2:75, Allah warns the believers: “Do you covet that they would believe for you while a party of them used to hear the word of Allah and then distort it (yuḥarrifūnahu) after they had understood it, knowingly?” And in Q 5:13–14, both Jewish and Christian communities are charged with distorting words from their places and losing/forgetting a portion (nasū ḥaẓẓan) of their revelation.',
    '03 · Qurʾān 3.78—Passing off non-canonical writings as part of God’s Book: In Qurʾān 3:78, Allah exposes how a faction among them twists their tongues with the Scripture “so you may think it is from the Scripture, when it is not from the Scripture; and they say, ‘It is from Allah,’ when it is not from Allah.”'
  ],
  ['Qurʾān 2:75, 79','Qurʾān 3:78','Qurʾān 4:46','Qurʾān 5:13–14, 41','Qurʾān 6:91','Ṣaḥīḥ al-Bukhārī 7362'],
  [dilTrapC1,dilTrapC2],
  {
    facts:[
      ['Q 2:79','“Woe to those who write the book with their hands, then say: This is from Allah!”'],
      ['Q 2:75','“They used to hear the word of Allah and distort it (yuḥarrifūnahu) knowingly”'],
      ['Q 4:46 & 5:13–14','“They distort words from their places and lost a portion of it”'],
      ['Q 3:78','“They say: It is from Allah, when it is not from Allah!”']
    ],
    quotes:[
      {by:'Qurʾān 2:79 (Explicit physical writing of forged scripture with their own hands)',ar:'فَوَيْلٌ لِّلَّذِينَ يَكْتُبُونَ الْكِتَابَ بِأَيْدِيهِمْ ثُمَّ يَقُولُونَ هَٰذَا مِنْ عِندِ اللَّهِ لِيَشْتَرُوا بِهِ ثَمَنًا قَلِيلًا ۖ فَوَيْلٌ لَّهُم مِّمَّا كَتَبَتْ أَيْدِيهِمْ',en:'So woe to those who write the “scripture” with their own hands, then say, “This is from Allah,” in order to exchange it for a small price. Woe to them for what their hands have written and woe to them for what they earn.',ref:'Qurʾān 2:79'},
      {by:'Qurʾān 2:75',ar:'أَفَتَطْمَعُونَ أَن يُؤْمِنُوا لَكُمْ وَقَدْ كَانَ فَرِيقٌ مِّنْهُمْ يَسْمَعُونَ كَلَامَ اللَّهِ ثُمَّ يُحَرِّفُونَهُ مِن بَعْدِ مَا عَقَلُوهُ وَهُمْ يَعْلَمُونَ',en:'Do you covet [the hope, O believers], that they would believe for you while a party of them used to hear the words of Allah and then distort the Torah after they had understood it while they were knowing?',ref:'Qurʾān 2:75'},
      {by:'Qurʾān 3:78',ar:'وَإِنَّ مِنْهُمْ لَفَرِيقًا يَلْوُونَ أَلْسِنَتَهُم بِالْكِتَابِ لِتَحْسَبُوهُ مِنَ الْكِتَابِ وَمَا هُوَ مِنَ الْكِتَابِ وَيَقُولُونَ هُوَ مِنْ عِنْدِ اللَّهِ وَمَا هُوَ مِنْ عِنْدِ اللَّهِ',en:'And indeed, there is among them a party who alter the Scripture with their tongues so you may think it is from the Scripture, but it is not from the Scripture. And they say, “This is from Allah,” but it is not from Allah. And they speak untruth about Allah while they know.',ref:'Qurʾān 3:78'},
      {by:'Qurʾān 4:46',ar:'مِّنَ الَّذِينَ هَادُوا يُحَرِّفُونَ الْكَلِمَ عَن مَّوَاضِعِهِ',en:'Among the Jews are those who distort words from their [proper] usages/places…',ref:'Qurʾān 4:46'}
    ],
    shots:[
      S('dilemma-1-IMG_4398.jpg','Primary textual & tafsīr scan on the Qurʾānic corruption verses (1/3).'),
      S('dilemma-2-IMG_2137.jpg','Classical tafsīr evidence on physical and interpretive taḥrīf (2/3).'),
      S('dilemma-3-IMG_2451.jpg','Primary textual scan on scriptural alteration (3/3).')
    ]
  }
),{
  optWho:'Angle C · Explicit Qurʾānic Textual Corruption Verses (2:75–79, 3:78, 4:46, 5:13–14, 5:41)',
  optLabel:'Read Q 2:79, 2:75, 3:78, 4:46 & 5:13–14 verbatim: writing forged books with their hands and shifting words',
  forkTitle:'Watch out · common Christian counter-claims on Ibn ʿAbbās / al-Bukhārī & Q 5:13',
  forkSub:'Tap the claim they raise next to refute it with Bukhārī 7362 and Fatḥ al-Bārī.'
});

/* --- ANGLE D: THE REVEALED INJIL VS. THE 4 ANONYMOUS GREEK GOSPELS --- */
const dilAngleD=P(N(
  INJ_CR,
  null,
  'Expose the fatal category error at the heart of the Christian’s argument: the Qurʾān never once mentions “Matthew, Mark, Luke, or John,” Paul’s letters, or four plural “Gospels” (Anājīl). In the Qurʾān (Q 5:46; 3:3–4; 57:27), al-Injīl (singular) is the single book revealed directly by Allah to Prophet Jesus (ʿĪsā), which Jesus himself preached during his lifetime (Mark 1:14–15; Luke 4:18, 43)—not four anonymous Greek biographies compiled 40–70 years later!',
  'Angle D: The Revealed Injīl Given to Jesus (Q 5.46) vs. the Four Anonymous Greek Gospels',
  [
    '01 · In the Qurʾān (5.46; 57.27), al-Injīl is ONE book given directly to Prophet Jesus—never four anonymous biographies about him: Qurʾān 5:46 states: “And We sent, following in their footsteps, Jesus, the son of Mary, confirming that which came before him in the Torah; and We gave HIM the Gospel (wa-ātaynāhu al-Injīl), in which was guidance and light.” Notice: Allah gave the Injīl to JESUS, whereas today’s New Testament consists of 27 books written in Greek decades after Jesus by anonymous authors and Paul (who never met the earthly Jesus)!',
    '02 · Even inside Mark 1.14–15 and Luke 4.18, 43, Jesus himself preached “the Gospel of God” before the crucifixion ever happened: When a Christian asks, “Where is the Gospel that Jesus preached?”, point directly to Mark 1:14–15 (“Jesus came into Galilee, proclaiming the gospel of God, and saying: The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel”) and Luke 4:43 (“I must preach the good news of the kingdom of God to the other towns as well; for I was sent for this purpose”). Before any crucifixion or resurrection narrative existed, Jesus was already preaching God’s Gospel calling people to repent and obey the One God!',
    '03 · Why the four canonical Gospels contain surviving remnants of Jesus’s teachings alongside human fabrication (Luke 1.1–4; Q 48.29): In Luke 1:1–4, the author of Luke openly admits that he is not revealing a divine book sent down to Jesus, but compiling a human historical account to “most excellent Theophilus” after “many have undertaken to compile a narrative.” As a result, the canonical Gospels preserve authentic remnants of Jesus’s parables and unitarian sayings—such as the sower parable confirmed in Qurʾān 48:29 and “the Lord our God, the Lord is One” in Mark 12:29 (`shots/injil-1-IMG_9853.jpg` .. `injil-6-IMG_9859.jpg`)—embedded within later human additions and contradictions.'
  ],
  ['Qurʾān 5:46; 57:27; 48:29','Mark 1:14–15; 12:29','Luke 1:1–4; 4:18, 43','Imām al-Qurṭubī; Ibn Taymiyya, al-Jawāb al-Ṣaḥīḥ'],
  [],
  {
    facts:[
      ['Q 5:46 & 57:27','“We gave HIM [Jesus] the Injīl” (1 book given to Jesus)'],
      ['Mark 1:14–15','Jesus himself preached “the Gospel of God” in Galilee'],
      ['Luke 1:1–4','Luke admits writing a human compilation to Theophilus'],
      ['Q 48:29 parallel','Qurʾān confirms the authentic seed-parable from the Injīl']
    ],
    quotes:[
      {by:'Qurʾān 5:46 (The Injīl is singular and was given directly to Prophet Jesus)',ar:'وَقَفَّيْنَا عَلَىٰ آثَارِهِم بِعِيسَى ابْنِ مَرْيَمَ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ التَّوْرَاةِ ۖ وَآتَيْنَاهُ الْإِنجِيلَ فِيهِ هُدًى وَنُورٌ',en:'And We sent, following in their footsteps, Jesus, the son of Mary, confirming that which came before him in the Torah; and We gave him the Gospel, in which was guidance and light…',ref:'Qurʾān 5:46'},
      {by:'Mark 1:14–15 (Jesus preaching the Gospel of God during his lifetime)',en:'Now after John was arrested, Jesus came into Galilee, proclaiming the gospel of God, and saying, “The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.”',ref:'Mark 1:14–15'},
      {by:'Luke 1:1–4 (Luke admits compiling a human narrative, not receiving revelation)',en:'Inasmuch as many have undertaken to compile a narrative of the things that have been accomplished among us… it seemed good to me also, having followed all things closely for some time past, to write an orderly account for you, most excellent Theophilus…',ref:'Luke 1:1–3'},
      {by:'Qurʾān 48:29 (Confirming the surviving seed-and-shoot parable in the Injīl)',ar:'وَمَثَلُهُمْ فِي الْإِنجِيلِ كَزَرْعٍ أَخْرَجَ شَطْأَهُ فَآزَرَهُ فَاسْتَغْلَظَ فَاسْتَوَىٰ عَلَىٰ سُوقِهِ',en:'And their description in the Gospel is as a plant which produces its offshoots and strengthens them so they grow firm and stand upon their stalks…',ref:'Qurʾān 48:29'}
    ],
    shots:[
      S('injil-1-IMG_9853.jpg','Deenresponds #what-is-the-injil (1/6): Distinguishing the revealed Injīl from later biographical Gospels.'),
      S('injil-2-IMG_9852.jpg','Deenresponds #what-is-the-injil (2/6): Primary textual & Gospel comparison scan.'),
      S('injil-3-IMG_9855.jpg','Deenresponds #what-is-the-injil (3/6): Qurʾānic Injīl parables vs. surviving sayings in Matthew/Mark.'),
      S('injil-4-IMG_9854.jpg','Deenresponds #what-is-the-injil (4/6): Continuation of Gospel parable comparison.'),
      S('injil-5-IMG_9858.jpg','Deenresponds #what-is-the-injil (5/6): Historical analysis of Jesus’s Aramaic Gospel preaching.'),
      S('injil-6-IMG_9859.jpg','Deenresponds #what-is-the-injil (6/6): Scholarly summary on the original Injīl.')
    ]
  }
),{
  optWho:'Angle D · The Revealed Injīl vs. the 4 Anonymous Greek Gospels',
  optLabel:'Why Q 5:46’s singular Injīl given to Jesus is NOT the 4 anonymous Greek biographies or Paul’s letters'
});

/* --- STEP 02 & ROOT OF THE ISLAMIC DILEMMA PLAYBOOK --- */
const dilStep02=P(N(
  DIL_CR,
  null,
  'Before diving into individual verses, turn the dilemma right back onto the Christian with two inescapable traps: (1) If they claim the Qurʾān commands them to follow their books (Q 5:47; 7:157), then the very next verses (Q 5:48, 5:72–73, 7:157) command them to follow Prophet Muḥammad ﷺ and declare anyone who says “Allah is the Messiah” or “Allah is a Trinity” a disbeliever! (2) In Matthew 23:2–3, Jesus commands his disciples to observe and do “WHATEVER” the Scribes and Pharisees tell them—yet condemns Pharisaic corruptions in the same Gospel! As 4th-century Church Father Hilary of Poitiers explains, Jesus gave a general confirmation of Mosaic authority without endorsing Pharisaic corruptions—the exact parallel to Qurʾānic confirmation!',
  'Turn the Tables: The Christian Self-Own & Hilary of Poitiers on Matthew 23.2–3',
  [
    '01 · Horn 1 of the Counter-Dilemma—You cannot quote Qurʾān 5.47 while ignoring Qurʾān 5.48, 5.72–73 & 7.157 in the same chapter: When a Christian quotes Q 5:47 (“Let the People of the Gospel judge by what Allah has revealed therein”), ask them: what does that exact chapter define as judging by Allah’s revelation? Verse 48 declares the Qurʾān muhaymin (the supreme criterion over prior books); verses 72–73 declare: “They have certainly disbelieved who say, ‘Allah is the Messiah, the son of Mary’... They have certainly disbelieved who say, ‘Allah is the third of three’”; and Q 7:157 defines the true followers of the Torah and Injīl as “those who follow the Messenger, the unlettered Prophet, whom they find written in what they have of the Torah and the Gospel!”',
    '02 · Horn 2 of the Counter-Dilemma—Jesus’s “Pharisee Dilemma” in Matthew 23.2–3 & Hilary of Poitiers (`shots/dilemma-4-IMG_3038.jpg`): In Matthew 23:2–3, Jesus says: “The scribes and the Pharisees sit on Moses’ seat, so do and observe WHATEVER they tell you.” Yet in Matthew 15:6–9 and 23:13–33, Jesus says the Pharisees voided the word of God by their tradition and leads them to hell! Does Jesus’s command in Matthew 23:2–3 create a “Christian Dilemma” endorsing every corrupt Pharisaic tradition? No—as 4th-century Church Father Hilary of Poitiers explains, Jesus confirmed Mosaic truth in general while rejecting their corruptions. That is the exact model of Qurʾānic confirmation!'
  ],
  ['Qurʾān 5:47–48, 72–73','Qurʾān 7:157','Matthew 23:2–3 vs. 15:6–9','Hilary of Poitiers, Commentary on Matthew'],
  [dilAngleA,dilAngleB,dilAngleC,dilAngleD],
  {
    facts:[
      ['Q 5:72–73 (same chapter!)','Declares Trinity and “Allah is the Messiah” disbelief (kufr)'],
      ['Q 7:157','Defines judging by Torah/Injīl as following Muḥammad ﷺ'],
      ['Matt 23:2–3','Jesus: “Do and observe WHATEVER the Pharisees tell you”'],
      ['Hilary of Poitiers','4th-c. Father: general confirmation excludes corruptions']
    ],
    quotes:[
      {by:'Qurʾān 5:72–73 (In the exact same chapter as 5:43–48 and 5:68!)',ar:'لَقَدْ كَفَرَ الَّذِينَ قَالُوا إِنَّ اللَّهَ هُوَ الْمَسِيحُ ابْنُ مَرْيَمَ ... لَّقَدْ كَفَرَ الَّذِينَ قَالُوا إِنَّ اللَّهَ ثَالِثُ ثَلَاثَةٍ',en:'They have certainly disbelieved who say, “Allah is the Messiah, the son of Mary” while the Messiah has said, “O Children of Israel, worship Allah, my Lord and your Lord.” … They have certainly disbelieved who say, “Allah is the third of three.”',ref:'Qurʾān 5:72–73'},
      {by:'Matthew 23:2–3 (Jesus’s general confirmation of Moses’ seat despite Pharisaic corruption)',en:'The scribes and the Pharisees sit on Moses’ seat, so do and observe whatever they tell you, but not the works they do.',ref:'Matthew 23:2–3'},
      {by:'Qurʾān 7:157',ar:'الَّذِينَ يَتَّبِعُونَ الرَّسُولَ النَّبِيَّ الْأُمِّيَّ الَّذِي يَجِدُونَهُ مَكْتُوبًا عِندَهُمْ فِي التَّوْرَاةِ وَالْإِنجِيلِ',en:'Those who follow the Messenger, the unlettered prophet, whom they find written in what they have of the Torah and the Gospel…',ref:'Qurʾān 7:157'}
    ],
    visual:{
      type:'steps',
      title:'How to Shatter the “Islamic Dilemma” in 4 Tactical Steps',
      items:[
        'Step 1 (Q 5:48 Muhaymin): Show that the Qurʾān confirms divine origin in general (taṣdīq ʿāmm) while standing as corrective judge (muhaymin) over extant copies.',
        'Step 2 (Matt 23:2–3 Parallel): Point out that Jesus told people to obey “whatever” the Pharisees on Moses’ seat said while condemning their corruptions (Hilary of Poitiers).',
        'Step 3 (Q 2:79; 3:78; 5:13–14): Quote the Qurʾān’s explicit verses condemning scribes who wrote forged books with their hands and displaced/lost words.',
        'Step 4 (Q 5:46 vs. Luke 1:1–4): Distinguish the singular Injīl revealed to Jesus from the 4 anonymous Greek biographies and Paul’s epistles.'
      ]
    },
    shots:[S('dilemma-4-IMG_3038.jpg','Hilary of Poitiers (4th-c. Church Father): Jesus gave a general confirmation of the Pharisees on Moses’ seat despite their errors—exact parallel to Qurʾānic confirmation.')]
  }
),{
  who:'Turn the dilemma back on the Christian · 02',
  forkTitle:'Four tactical angles to dismantle every Islamic Dilemma proof-text',
  forkSub:'Pick the specific group of verses they cite or walk them through all four angles.'
});

const dilRoot=P(N(
  DIL_CR,
  'The Qurʾān confirms the Torah and Gospel “with them” (2:101; 3:3), tells Jews and Christians to judge by their books (5:43, 47, 68), tells Muhammad to ask the readers of the Book (10:94), and says none can change Allah’s words (6:115)—so if the Bible is corrupted the Qurʾān is false, and if the Bible is preserved Islam is false (“The Islamic Dilemma”).',
  'That dilemma rests on a basic distortion of what the Qurʾān actually says. Even secular Western Qurʾān scholars (Nicolai Sinai, Robert Hoyland, Holger Zellentin, Sidney Griffith, Walid Saleh) recognize that the Qurʾān’s confirmation of earlier scriptures is general (taṣdīq ʿāmm—confirming their divine origin, core monotheism, and surviving prophecies of the Final Prophet in Q 2:89 & 7:157), never a word-for-word endorsement of extant scribal copies (taṣdīq muṭlaq)—which is why Qurʾān 5:48 declares the Qurʾān muhaymin (the supreme corrective criterion OVER previous books) and Qurʾān 2:79 explicitly condemns scribes “who write the book with their hands, then say: This is from Allah!”',
  'Taṣdīq ʿĀmm (General Confirmation) & Muhaymin (Q 5.48) vs. Scribal Corruption (Q 2.79)',
  [
    '01 · General confirmation (taṣdīq ʿāmm) vs. corrective criterion (muhaymin, Q 5.48): Every legal and scriptural system uses general rules paired with specific exceptions. In Qurʾān 5:48, Allah defines the exact relationship between the Qurʾān and previous scriptures in a single phrase: “confirming that which preceded it of the Scripture and as a guardian/corrective criterion (muhayminan) over it.” If every word of the extant Torah and Gospels were 100% intact, the Qurʾān would not need to act as muhaymin (corrective judge and filter) over them!',
    '02 · The Qurʾān condemns physical textual forgery (Q 2.79) in the very same sūra where it confirms the Torah’s origin (Q 2.41, 89, 101): Critics quote Qurʾān 2:41 and 2:101 (“confirming what is with them”) while hiding Qurʾān 2:75, 2:79, and 2:89 sitting right between them! In Q 2:79 Allah says: “So woe to those who write the book with their own hands, then say, ‘This is from Allah,’ in order to exchange it for a small price!” How could Sūra 2 be certifying every manuscript page as uncorrupted when verse 79 of the exact same sūra curses scribes for writing forged scripture with their own hands?',
    '03 · Even Western academic Qurʾān scholars reject the “Islamic Dilemma” reading: Mainstream non-Muslim historians of the Qurʾān—including Nicolai Sinai, Robert Hoyland, Holger Zellentin (The Qur’an’s Legal Culture, p. 26), Sidney Griffith (The Bible in Arabic, pp. 95–96), and Walid Saleh—all confirm that the Qurʾān simultaneously affirms the divine origin of the Torah and Injīl while consciously correcting and superseding corrupted biblical narratives (such as Aaron and the Golden Calf, Solomon’s idolatry, Lot, and divine fatigue).'
  ],
  ['Qurʾān 5:48','Qurʾān 2:41, 75–79, 89, 101','Qurʾān 3:48–50; 7:157','Holger Zellentin, The Qur’an’s Legal Culture p. 26; Sidney Griffith, The Bible in Arabic pp. 95–96','Ṣaḥīḥ al-Bukhārī 4485, 7362'],
  [dilStep02],
  {
    facts:[
      ['Q 5:48 (Muhaymin)','Qurʾān is the supreme corrective judge OVER prior books'],
      ['Q 2:79 (same sūra!)','Curses scribes who “write the book with their own hands”'],
      ['Q 2:89 & 7:157','Confirms the surviving prophecies of the Final Prophet ﷺ'],
      ['Western scholars','Sinai, Griffith, Zellentin & Saleh confirm corrective stance']
    ],
    quotes:[
      {by:'Qurʾān 5:48 (The Qurʾān as Muhaymin — Guardian and Corrective Criterion over previous scriptures)',ar:'وَأَنزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ الْكِتَابِ وَمُهَيْمِنًا عَلَيْهِ',en:'And We have revealed to you, [O Muḥammad], the Book in truth, confirming that which preceded it of the Scripture and as a criterion/guardian (muhayminan) over it.',ref:'Qurʾān 5:48'},
      {by:'Qurʾān 2:79 (22 verses before 2:101 in the exact same sūra!)',ar:'فَوَيْلٌ لِّلَّذِينَ يَكْتُبُونَ الْكِتَابَ بِأَيْدِيهِمْ ثُمَّ يَقُولُونَ هَٰذَا مِنْ عِندِ اللَّهِ لِيَشْتَرُوا بِهِ ثَمَنًا قَلِيلًا',en:'So woe to those who write the “scripture” with their own hands, then say, “This is from Allah,” in order to exchange it for a small price. Woe to them for what their hands have written…',ref:'Qurʾān 2:79'},
      {by:'Qurʾān 2:101 (Confirming the core revelation & prophecy they already knew, cf. 2:89)',ar:'وَلَمَّا جَاءَهُمْ رَسُولٌ مِّنْ عِندِ اللَّهِ مُصَدِّقٌ لِّمَا مَعَهُمْ نَبَذَ فَرِيقٌ مِّنَ الَّذِينَ أُوتُوا الْكِتَابَ كِتَابَ اللَّهِ وَرَاءَ ظُهُورِهِمْ',en:'And when there came to them a Messenger from Allah confirming that which was with them, a party of those who had been given the Scripture threw the Scripture of Allah behind their backs as if they did not know.',ref:'Qurʾān 2:101'},
      {by:'Qurʾān 3:50 (Jesus likewise confirmed the Torah while abrogating/correcting parts of their law)',ar:'وَمُصَدِّقًا لِّمَا بَيْنَ يَدَيَّ مِنَ التَّوْرَاةِ وَلِأُحِلَّ لَكُم بَعْضَ الَّذِي حُرِّمَ عَلَيْكُمْ',en:'And [I have come] confirming what was before me of the Torah and to make lawful for you some of what was forbidden to you…',ref:'Qurʾān 3:50'}
    ],
    visual:{
      type:'compare',
      title:'The Christian Polemical Strawman vs. The Qurʾān’s Actual Doctrine',
      left:{label:'Polemical Strawman (Taṣdīq Muṭlaq)',items:[
        'Pretends Q 2:101 & 5:47 endorse every word of today’s 66/73-book Bible',
        'Hides Q 2:79, 3:78, 4:46, 5:13–14, 5:48 & 5:72–73 in the same chapters',
        'Confuses the singular revealed Injīl (Q 5:46) with 4 anonymous Greek biographies'
      ]},
      right:{label:'Qurʾānic Doctrine (Taṣdīq ʿĀmm + Muhaymin)',items:[
        'Confirms original Torah/Injīl & surviving monotheism/prophecies (Q 2:89; 7:157)',
        'Condemns human scribal additions, displacements & omissions (Q 2:79; 5:13–14)',
        'Stands as Muhaymin (Q 5:48)—affirming what agrees, correcting what was altered'
      ]}
    },
    shots:[
      S('dilemma-4-IMG_3038.jpg','Hilary of Poitiers (4th-c. Church Father): Jesus gave a general confirmation of the Pharisees despite their errors — exact parallel to Qurʾānic confirmation.'),
      S('pdf3-dilemma-alles-p1.jpg','Master Tafsīr Dossier on the Islamic Dilemma (1/2): Taṣdīq ʿāmm vs. muṭlaq & Muhaymin (Q 5:48).'),
      S('pdf3-dilemma-alles-p2.jpg','Master Tafsīr Dossier on the Islamic Dilemma (2/2): Classical exegetes on Q 5:43–48.'),
      S('dilemma-1-IMG_4398.jpg','Primary textual & tafsīr scan on the Islamic Dilemma (1/7).'),
      S('dilemma-2-IMG_2137.jpg','Classical tafsīr & textual evidence scan (2/7).'),
      S('dilemma-3-IMG_2451.jpg','Primary textual scan on scriptural alteration (3/7).'),
      S('dilemma-5-IMG_4271.jpg','Primary scholarly reference on 5:43–48 & confirmation (4/7).'),
      S('dilemma-6-IMG_4270.jpg','Continuation of primary scholarly reference (5/7).'),
      S('dilemma-7-IMG_7740.jpg','Additional manuscript/commentary evidence (6/7).'),
      S('dilemma-8-IMG_7741.jpg','Additional manuscript/commentary evidence (7/7).')
    ]
  }
),{
  who:'Opening move · 01'
});

card('christianity/islam-vs/d-dr-islamic-dilemma',{
  title:'The “Islamic dilemma”: does the Qurʾān confirm today’s Bible?',
  k:'Flagship Playbook',
  blurb:'How taṣdīq ʿāmm (general confirmation), Q 5:48 (Muhaymin), Q 2:79 & 5:13–14 (scribal corruption), and the singular revealed Injīl (Q 5:46) shatter the “Islamic Dilemma.”',
  claim:'The Qurʾān says it “confirms what is with them” (2:101) and tells Jews and Christians to judge by their books—so if the Bible is corrupted the Qurʾān is false, and if the Bible is preserved Islam is false.',
  tree:dilRoot,
  sum:'The Qurʾān confirms the divine origin and surviving prophecies of prior scriptures in general (taṣdīq ʿāmm) while acting as Muhaymin (supreme corrective judge, Q 5:48) over extant copies and explicitly condemning scribes who wrote forged books with their own hands (Q 2:79) and shifted/lost words (Q 5:13–14).'
});

/* ============================================================================
   2. UPGRADE SIBLING CARD: WHAT IS THE INJIL? (d-dr-what-is-the-injil)
   ============================================================================ */
const injTrap1=P(N(
  INJ_CR,
  'Wait—in Mark 1:14–15 “gospel” (euangelion) just means oral good news, not a revealed scripture given to Jesus.',
  'In the Qurʾān (5:46; 3:3–4; 19:30), Allah gave Jesus the Injīl as a revealed Scripture/Book (Kitāb) just as Moses was given the Torah and David the Zabūr—which Jesus proclaimed orally and in writing before his departure, and from which surviving parables and sayings (such as the seed parable confirmed in Q 48:29) were later embedded inside third-person biographies.',
  'Qurʾān 19.30, 5.46 & 48.29: The Injīl Revealed to Jesus vs. Later Biographical Compilations',
  [
    '01 · Qurʾān 19.30 & 5.46—The Injīl is the Book given to Prophet Jesus: In Qurʾān 19:30, Jesus declares: “Indeed, I am the servant of Allah. He has given me the Scripture (al-Kitāb) and made me a prophet.” And in Q 5:46: “and We gave him the Injīl, in which was guidance and light.”',
    '02 · Early Christianity itself remembered a singular “Gospel of Jesus” before the fourfold canon: Even in the New Testament, Jesus and the earliest disciples speak of “the Gospel” or “the Gospel of God” in the singular (Mark 1:14–15; 8:35; 13:10; 14:9)—long before 2nd-century church writers (starting with Irenaeus c. 180 CE) promoted a fourfold collection titled “According to Matthew, Mark, Luke, and John.”',
    '03 · Qurʾān 48.29 confirms a specific surviving parable from the Injīl: In Qurʾān 48:29, Allah quotes a specific agricultural parable from the Injīl (“their description in the Injīl is as a plant which produces its offshoots and strengthens them so they grow firm and stand upon their stalks”), which matches the surviving parable of the growing seed in Mark 4:26–29 (`shots/injil-3-IMG_9855.jpg`, `injil-4-IMG_9854.jpg`)—showing that authentic remnants of Jesus’s Injīl survived inside the Gospels alongside later human additions!'
  ],
  ['Qurʾān 19:30; 5:46; 48:29','Mark 1:14–15; 4:26–29','Luke 1:1–4'],
  [],
  {
    facts:[
      ['Q 19:30 & 5:46','Jesus says: “He has given me the Scripture (al-Kitāb)”'],
      ['Mark 1:14; 13:10','Jesus preaches singular “the Gospel of God” in his lifetime'],
      ['Q 48:29 // Mark 4:26–29','Qurʾān confirms surviving seed-and-stalk parable'],
      ['Irenaeus (c. 180 CE)','First to argue for a 4-Gospel canon (“According to…”)']
    ],
    quotes:[
      {by:'Qurʾān 19:30 (Jesus declares Allah gave him the Scripture)',ar:'قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا',en:'[Jesus] said, “Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet.”',ref:'Qurʾān 19:30'},
      {by:'Qurʾān 48:29',ar:'وَمَثَلُهُمْ فِي الْإِنجِيلِ كَزَرْعٍ أَخْرَجَ شَطْأَهُ فَآزَرَهُ فَاسْتَغْلَظَ فَاسْتَوَىٰ عَلَىٰ سُوقِهِ',en:'And their description in the Gospel is as a plant which produces its offshoots and strengthens them so they grow firm and stand upon their stalks…',ref:'Qurʾān 48:29'},
      {by:'Mark 4:26–28 (Surviving parallel in Mark’s parable of the seed)',en:'And he said, “The kingdom of God is as if a man should scatter seed on the ground… The earth produces by itself, first the blade, then the ear, then the full grain in the ear.”',ref:'Mark 4:26, 28'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'In the New Testament “gospel” just means oral good news about Jesus’s death, not a book given to Jesus'
});

const injRoot=P(N(
  INJ_CR,
  'When the Qurʾān speaks of “the Injīl” (the Gospel) in the 7th century, Christians only had the four canonical Gospels (Matthew, Mark, Luke, and John) and the New Testament—so the Qurʾān must be confirming our four Gospels.',
  'The Qurʾān never once refers to four plural “Gospels” (Anājīl), Matthew, Mark, Luke, John, or Paul’s letters: in Qurʾān 5:46, 19:30, and 57:27, al-Injīl is a single revelation given directly by Allah to Prophet Jesus (ʿĪsā), which Jesus himself preached during his earthly ministry (Mark 1:14–15; Luke 4:18, 43). Today’s four Greek Gospels are anonymous third-person biographies compiled decades later (Luke 1:1–4) that preserve fragments of Jesus’s teachings alongside human additions.',
  'What Is the Qurʾānic Injīl? Revelation Given to Jesus (Q 5.46) vs. Four Anonymous Biographies',
  [
    '01 · Singular revelation given to Jesus (Q 5.46; 57.27) vs. four third-person Greek biographies: In Qurʾān 5:46 and 57:27, Allah says: “We gave him [Jesus] the Injīl.” By contrast, the four canonical Gospels are titled “The Gospel According to Matthew / Mark / Luke / John”—written in Greek 40 to 70 years after Jesus by anonymous authors who never claim divine inspiration and who copy one another word-for-word (with Luke 1:1–4 explicitly admitting he is writing a human historical compilation to Theophilus).',
    '02 · The New Testament itself testifies that Jesus preached “the Gospel of God” during his lifetime (Mark 1.14–15; Luke 4.43): Long before any crucifixion narrative existed, Mark 1:14–15 records: “Jesus came into Galilee, proclaiming the gospel of God, and saying, ‘The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.’” That message proclaimed by Jesus himself is the Injīl!',
    '03 · Classical Islamic scholarship (al-Qurṭubī, Ibn Taymiyya, Ibn Kathīr) on the four Gospels: Classical Sunni scholars unanimously distinguished the original Injīl revealed to Jesus from the four extant Greek Gospels—analogous to how the Ḥadīth/Sīrah books contain third-person reports about a prophet’s life rather than the direct verbatim Book revealed to him, except that the four Gospels lack chains of transmission (isnād / tawātur) and contain proven scribal interpolations.'
  ],
  ['Qurʾān 5:46; 19:30; 57:27; 48:29','Mark 1:14–15','Luke 1:1–4; 4:18, 43','Ibn Taymiyya, al-Jawāb al-Ṣaḥīḥ; Tafsīr al-Qurṭubī'],
  [injTrap1],
  {
    facts:[
      ['Q 5:46 & 57:27','al-Injīl (singular) was given directly to Prophet Jesus'],
      ['Mark 1:14–15','Jesus preached “the Gospel of God” during his ministry'],
      ['Luke 1:1–4','Luke admits compiling a human account for Theophilus'],
      ['Tawātur test','The 4 Greek Gospels are anonymous and lack unbroken chains']
    ],
    quotes:[
      {by:'Qurʾān 5:46',ar:'وَقَفَّيْنَا عَلَىٰ آثَارِهِم بِعِيسَى ابْنِ مَرْيَمَ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ التَّوْرَاةِ ۖ وَآتَيْنَاهُ الْإِنجِيلَ فِيهِ هُدًى وَنُورٌ',en:'And We sent, following in their footsteps, Jesus, the son of Mary, confirming that which came before him in the Torah; and We gave him the Gospel, in which was guidance and light…',ref:'Qurʾān 5:46'},
      {by:'Qurʾān 57:27',ar:'وَقَفَّيْنَا بِعِيسَى ابْنِ مَرْيَمَ وَآتَيْنَاهُ الْإِنجِيلَ',en:'Then We sent following their footsteps Our messengers and followed [them] with Jesus, the son of Mary, and gave him the Gospel.',ref:'Qurʾān 57:27'},
      {by:'Mark 1:14–15 (Jesus himself preaching the Gospel in Galilee)',en:'Now after John was arrested, Jesus came into Galilee, proclaiming the gospel of God, and saying, “The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.”',ref:'Mark 1:14–15'},
      {by:'Luke 1:1–3',en:'Inasmuch as many have undertaken to compile a narrative… it seemed good to me also, having followed all things closely for some time past, to write an orderly account for you, most excellent Theophilus…',ref:'Luke 1:1–3'}
    ],
    visual:{
      type:'compare',
      title:'The Revealed Injīl (Qurʾān 5:46) vs. The Four Canonical Gospels',
      left:{label:'The Revealed Injīl (Q 5:46; Mark 1:14–15)',items:[
        'One singular Book revealed by Allah directly to Prophet Jesus',
        'Preached by Jesus himself in Aramaic during his ministry',
        'Taught pure monotheism (Mark 12:29) & foretold Aḥmad (Q 61:6)'
      ]},
      right:{label:'The 4 Canonical Gospels (Matthew, Mark, Luke, John)',items:[
        'Four anonymous 3rd-person Greek biographies written 40–70 years later',
        'Openly compiled from secondary human sources (Luke 1:1–4)',
        'Mix surviving sayings of Jesus (Q 48:29) with later scribal additions'
      ]}
    },
    shots:[
      S('injil-1-IMG_9853.jpg','Deenresponds #what-is-the-injil (1/6): Primary textual & Gospel comparison scan.'),
      S('injil-2-IMG_9852.jpg','Deenresponds #what-is-the-injil (2/6): Primary textual & Gospel comparison scan.'),
      S('injil-3-IMG_9855.jpg','Deenresponds #what-is-the-injil (3/6): Qurʾān 48:29 parallel with the parable of the seed.'),
      S('injil-4-IMG_9854.jpg','Deenresponds #what-is-the-injil (4/6): Continuation of Gospel parable comparison.'),
      S('injil-5-IMG_9858.jpg','Deenresponds #what-is-the-injil (5/6): Distinguishing Jesus’s revealed Injīl from later biographies.'),
      S('injil-6-IMG_9859.jpg','Deenresponds #what-is-the-injil (6/6): Scholarly & textual summary on the original Injīl.')
    ]
  }
),{
  who:'Opening move · 01',
  forkTitle:'Watch out · common Christian counter-claim on the word “Gospel”',
  forkSub:'Tap the objection below to answer it with Qurʾān 19:30, 48:29, and Mark 1:14–15.'
});

card('christianity/islam-vs/d-dr-what-is-the-injil',{
  title:'What is the Injīl? Revelation given to Jesus (5:46) vs. the 4 anonymous Gospels',
  k:'Injīl',
  blurb:'Why the singular Injīl revealed to Prophet Jesus (Q 5:46; Mark 1:14–15) is not the four anonymous Greek biographies or Paul’s letters.',
  claim:'When the Qurʾān mentions “the Injīl,” it is confirming the four New Testament Gospels.',
  tree:injRoot,
  sum:'In the Qurʾān (5:46; 19:30; 57:27), al-Injīl is the single Scripture revealed directly to Prophet Jesus—which Jesus himself preached in Galilee (Mark 1:14–15)—whereas the four canonical Greek Gospels are anonymous third-person biographies compiled decades later (Luke 1:1–4) that preserve fragments of his teaching alongside human additions.'
});

/* ============================================================================
   3. UPGRADE SIBLING CARD: QUR'AN 5:47 & 5:48 (d-dr-judge-by-the-gospel-5-47)
   ============================================================================ */
const j547Trap1=P(N(
  DIL_CR,
  'Doesn’t Qurʾān 5:47 prove that the full Gospel remained intact in the 7th century, since Christians were commanded in the present tense to judge by it?',
  'Read the very next verse (Qurʾān 5:48) and Qurʾān 7:157: Q 5:47 uses the partitive phrase “by what Allah has revealed IN IT (bima anzala Allāhu fīhi)”—referring to the surviving monotheistic commands and prophecies of Muḥammad ﷺ inside their scripture (defined explicitly in Q 7:157 and 5:72–73)—while Q 5:48 immediately installs the Qurʾān as Muhaymin (supreme corrective criterion) over it!',
  'Qurʾān 5.47’s Partitive fīhi (“in it”), Qurʾān 5.48’s Muhaymin & Qurʾān 7.157',
  [
    '01 · Partitive grammar—“by what Allah has revealed IN IT (fīhi)”: Qurʾān 5:47 does not say “Let the People of the Gospel judge by the four Greek Gospels in their entirety.” It says: “by what Allah has revealed therein (fīhi)”—specifically the surviving divine commandments of strict monotheism (Q 5:72–73) and the testimony to the Final Messenger (Q 7:157; 61:6), excluding what human scribes wrote with their own hands (Q 2:79; 5:14).',
    '02 · Qurʾān 5.48 immediately subordinates prior books to the Qurʾān as Muhaymin: One verse after 5:47, Allah declares in 5:48: “And We have revealed to you [O Muḥammad] the Book in truth, confirming that which preceded it of the Scripture and as a guardian/corrective criterion (muhayminan) over it; so judge between them by what Allah has revealed [to you]!” Thus Q 5:48 commands the Prophet ﷺ to judge Christians and Jews by the Qurʾān.',
    '03 · Classical Tafsīr (Ibn ʿAbbās, al-Ṭabarī, Ibn Kathīr): As al-Ṭabarī and Ibn Kathīr record, judging by what Allah revealed in the Injīl includes believing in the Prophet Muḥammad ﷺ whom Jesus foretold (Q 61:6; 7:157) and rejecting the Trinitarian innovations condemned twenty-five verses later in Q 5:72–73!'
  ],
  ['Qurʾān 5:46–48, 72–73','Qurʾān 7:157; 61:6','Qurʾān 2:79; 5:14','Tafsīr al-Ṭabarī; Tafsīr Ibn Kathīr'],
  [],
  {
    facts:[
      ['Q 5:47 wording','Partitive fīhi: “by what Allah has revealed IN IT”'],
      ['Q 5:48 (next verse!)','Installs the Qurʾān as Muhaymin and final law over them'],
      ['Q 5:72–73 (same sūra!)','Declares Trinity and “Allah is the Messiah” disbelief'],
      ['Q 7:157','Defines following Torah/Injīl as following Muḥammad ﷺ']
    ],
    quotes:[
      {by:'Qurʾān 5:47–48 (Read both consecutive verses together!)',ar:'وَلْيَحْكُمْ أَهْلُ الْإِنجِيلِ بِمَا أَنزَلَ اللَّهُ فِيهِ ۚ وَمَن لَّمْ يَحْكُم بِمَا أَنزَلَ اللَّهُ فَأُولَٰئِكَ هُمُ الْفَاسِقُونَ ۝ وَأَنزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ الْكِتَابِ وَمُهَيْمِنًا عَلَيْهِ ۖ فَاحْكُم بَيْنَهُم بِمَا أَنزَلَ اللَّهُ',en:'And let the People of the Gospel judge by what Allah has revealed therein. And whoever does not judge by what Allah has revealed—then it is those who are the defiantly disobedient. And We have revealed to you, [O Muḥammad], the Book in truth, confirming that which preceded it of the Scripture and as a criterion (muhayminan) over it; so judge between them by what Allah has revealed…',ref:'Qurʾān 5:47–48'},
      {by:'Qurʾān 7:157',ar:'الَّذِينَ يَتَّبِعُونَ الرَّسُولَ النَّبِيَّ الْأُمِّيَّ الَّذِي يَجِدُونَهُ مَكْتُوبًا عِندَهُمْ فِي التَّوْرَاةِ وَالْإِنجِيلِ',en:'Those who follow the Messenger, the unlettered prophet, whom they find written in what they have of the Torah and the Gospel…',ref:'Qurʾān 7:157'},
      {by:'Ṣaḥīḥ al-Bukhārī 7362 (Ibn ʿAbbās)',en:'And Allah has told you that the People of the Scripture changed that which Allah had written and altered the Scripture with their own hands!',ref:'Ṣaḥīḥ al-Bukhārī 7362'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Doesn’t Q 5:47 prove the entire Gospel was still intact in the 7th century?'
});

const j547Root=P(N(
  DIL_CR,
  'Qurʾān 5:47 commands: “Let the People of the Gospel judge by what Allah has revealed therein.” Allah would never command Christians to judge by a corrupted book!',
  'Read Qurʾān 5:46, 5:47, and 5:48 together without stopping mid-passage: 5:46–47 says Allah gave Jesus the Injīl containing guidance and light and commands Christians to judge by “what Allah has revealed IN IT (fīhi)” (the surviving monotheistic core and prophecy of the Final Messenger in Q 7:157)—and the very next verse (5:48) reveals the Qurʾān as Muhaymin (supreme guardian and corrective criterion OVER previous scriptures) and commands the Prophet ﷺ: “So judge between them by what Allah has revealed [to you]!”',
  'Qurʾān 5.46–48 in Context: Judging by What Allah Revealed in the Injīl Under the Qurʾān’s Muhaymin Authority',
  [
    '01 · Verse 46 + Verse 47 + Verse 48 form a single three-part legal argument: (a) In 5:46, Allah gave the Injīl to Jesus; (b) in 5:47, the People of the Injīl are bound to judge by what Allah revealed in it (which testified to strict monotheism and the coming of Muḥammad ﷺ, Q 7:157; 61:6); (c) in 5:48, Allah reveals the Qurʾān as muhaymin (supreme corrective criterion over prior books) and commands the Prophet ﷺ to judge between them by the Qurʾān!',
    '02 · Earlier in the exact same chapter (Q 5.13–14), Allah explicitly stated that the Christians lost/forgot a portion of their revelation: Just thirty-three verses before 5:47, Qurʾān 5:14 states: “And from those who say, ‘We are Christians,’ We took their covenant; but they forgot/lost a portion of that of which they were reminded (fanasū ḥaẓẓan mimmā dhukkirū bihi).” And twenty-five verses after 5:47, Q 5:72–73 condemns the Trinity and the deity of Jesus as disbelief (kufr). Thus Sūra 5 itself proves that 5:47 refers only to the surviving authentic rulings and prophecies inside their books, never to Pauline or Nicene corruptions!'
  ],
  ['Qurʾān 5:13–14, 46–48, 72–73','Qurʾān 7:157','Tafsīr al-Ṭabarī; Tafsīr Ibn Kathīr'],
  [j547Trap1],
  {
    facts:[
      ['Q 5:14 (same chapter!)','Christians “lost/forgot a portion of what they were reminded”'],
      ['Q 5:47 grammar','“by what Allah revealed IN IT (fīhi)” (partitive)'],
      ['Q 5:48 (next verse!)','Qurʾān is Muhaymin (corrective judge over prior books)'],
      ['Q 5:72–73 (same chapter!)','Declares Trinity and deity of Christ disbelief (kufr)']
    ],
    quotes:[
      {by:'Qurʾān 5:46–48 (Full three-verse sequence)',ar:'وَآتَيْنَاهُ الْإِنجِيلَ فِيهِ هُدًى وَنُورٌ ... وَلْيَحْكُمْ أَهْلُ الْإِنجِيلِ بِمَا أَنزَلَ اللَّهُ فِيهِ ... وَأَنزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ الْكِتَابِ وَمُهَيْمِنًا عَلَيْهِ ۖ فَاحْكُم بَيْنَهُم بِمَا أَنزَلَ اللَّهُ',en:'…and We gave him [Jesus] the Gospel, in which was guidance and light… And let the People of the Gospel judge by what Allah has revealed therein… And We have revealed to you, [O Muḥammad], the Book in truth, confirming that which preceded it of the Scripture and as a criterion (muhayminan) over it; so judge between them by what Allah has revealed…',ref:'Qurʾān 5:46–48'},
      {by:'Qurʾān 5:14 (In the exact same sūra, 33 verses earlier!)',ar:'وَمِنَ الَّذِينَ قَالُوا إِنَّا نَصَارَىٰ أَخَذْنَا مِيثَاقَهُمْ فَنَسُوا حَظًّا مِّمَّا ذُكِّرُوا بِهِ',en:'And from those who say, “We are Christians,” We took their covenant; but they forgot [lost] a portion of that of which they were reminded.',ref:'Qurʾān 5:14'}
    ],
    visual:{
      type:'steps',
      title:'How Sūrat al-Māʾidah (Chapter 5) Refutes the 5:47 Polemic',
      items:[
        'Q 5:13–14: Establishes upfront that Jews and Christians displaced words and lost portions of their revelation.',
        'Q 5:46–47: Commands Christians to judge by what Allah revealed IN the Injīl (monotheism & the prophecy of Muḥammad ﷺ in Q 7:157).',
        'Q 5:48: Establishes the Qurʾān as Muhaymin (supreme corrective criterion) over previous scriptures.',
        'Q 5:72–73: Condemns the Trinity and “Allah is the Messiah” as disbelief (kufr).'
      ]
    }
  }
),{
  who:'Opening move · 01',
  forkTitle:'Watch out · common Christian follow-up on Qurʾān 5:47',
  forkSub:'Tap the counter-claim below to dismantle it with 5:48 and 7:157.'
});

card('christianity/islam-vs/d-dr-judge-by-the-gospel-5-47',{
  title:'5:47–48: “Let the People of the Gospel judge by it” & the Qurʾān as Muhaymin',
  k:'5:47–48',
  blurb:'Why Q 5:47’s partitive “in it” (fīhi) is governed by Q 5:14 (lost portions), Q 5:48 (Muhaymin), Q 5:72–73, and Q 7:157.',
  claim:'Qurʾān 5:47 tells Christians to judge by the Gospel, proving the New Testament is uncorrupted.',
  tree:j547Root,
  sum:'In Sūrat al-Māʾidah, Q 5:14 states that Christians lost a portion of their revelation, Q 5:47 commands them to judge by what Allah revealed IN the Injīl (surviving monotheism and the prophecy of Muḥammad ﷺ in Q 7:157), Q 5:48 installs the Qurʾān as Muhaymin over prior books, and Q 5:72–73 condemns the Trinity.'
});

/* ============================================================================
   4. UPGRADE SIBLING CARD: QUR'AN 2:85 (d-dr-quran-2-85)
   ============================================================================ */
const q285Trap1=P(N(
  DIL_CR,
  'Doesn’t rebuking the Jews for “believing in part of the Book and disbelieving in part” in 2:85 imply that the entire Torah scroll in 7th-century Medina was the uncorrupted Book of Allah?',
  'Look six verses earlier in the exact same conversation (Qurʾān 2:79): Allah just cursed their scribes who “write the book with their own hands, then say: This is from Allah!” Q 2:84–85 is rebuking the Medinan Jews for selectively obeying one surviving Torah law (ransoming captives) while violating two other surviving Torah laws (not shedding innocent blood and not expelling their brethren)—AND for rejecting the Torah’s prophecy of Muḥammad ﷺ (Q 2:89)!',
  'Qurʾān 2.79 vs. 2.84–85: Selective Obedience to Surviving Laws, Not Blanket Inerrancy',
  [
    '01 · Qurʾān 2.79 is only six verses before 2.85: In the exact same continuous address to the Children of Israel (Q 2:75–91), verse 75 says they knowingly distorted the word of Allah (yuḥarrifūnahu), and verse 79 says: “Woe to those who write the book with their hands, then say, ‘This is from Allah!’” Nobody who reads verses 75 and 79 can pretend verse 85 means their scribes never altered the text!',
    '02 · The specific historical context of Q 2.84–85 (Banū Qaynuqāʿ, Banū Naḍīr & Banū Qurayẓa): In Medina, the Jewish tribes of Qurayẓa and Naḍīr allied with rival pagan Arab tribes (Aws and Khazraj); during war they killed and expelled fellow Jews from their homes (violating the Torah’s ban on murder and expulsion), and after the battle they collected money to ransom Jewish captives, boasting that the Torah commanded ransoming captives! Q 2:84–85 exposed that hypocrisy: “You kill one another and expel a party of you from their homes… and if they come to you as captives, you ransom them… Do you believe in part of the Book and disbelieve in part?”'
  ],
  ['Qurʾān 2:75–79, 84–85, 89','Tafsīr al-Ṭabarī; Tafsīr Ibn Kathīr on Q 2:84–85'],
  [],
  {
    facts:[
      ['Q 2:79 (6 verses earlier!)','“Woe to those who write the book with their hands!”'],
      ['Q 2:84–85 context','Jews obeyed captive-ransom law while violating murder/expulsion ban'],
      ['Q 2:89 (4 verses later!)','They also rejected the Final Prophet foretold in their Book']
    ],
    quotes:[
      {by:'Qurʾān 2:84–85 (Full historical context of the rebuke)',ar:'وَإِذْ أَخَذْنَا مِيثَاقَكُمْ لَا تَسْفِكُونَ دِمَاءَكُمْ وَلَا تُخْرِجُونَ أَنفُسَكُم مِّن دِيَارِكُمْ ... ثُمَّ أَنتُمْ هَٰؤُلَاءِ تَقْتُلُونَ أَنفُسَكُمْ وَتُخْرِجُونَ فَرِيقًا مِّنكُم مِّن دِيَارِهِمْ ... وَإِن يَأْتُوكُمْ أُسَارَىٰ تُفَادُوهُمْ وَهُوَ مُحَرَّمٌ عَلَيْكُمْ إِخْرَاجُهُمْ ۚ أَفَتُؤْمِنُونَ بِبَعْضِ الْكِتَابِ وَتَكْفُرُونَ بِبَعْضٍ',en:'And [recall] when We took your covenant, [saying], “Do not shed each other’s blood or evict one another from your homes.” … Then, you are those [same ones who are] killing one another and evicting a party of your people from their homes… And if they come to you as captives, you ransom them, although their eviction was forbidden to you. So do you believe in part of the Scripture and disbelieve in part?',ref:'Qurʾān 2:84–85'},
      {by:'Qurʾān 2:79 (Six verses earlier in the exact same passage!)',ar:'فَوَيْلٌ لِّلَّذِينَ يَكْتُبُونَ الْكِتَابَ بِأَيْدِيهِمْ ثُمَّ يَقُولُونَ هَٰذَا مِنْ عِندِ اللَّهِ',en:'So woe to those who write the “scripture” with their own hands, then say, “This is from Allah,” in order to exchange it for a small price.',ref:'Qurʾān 2:79'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Doesn’t “believing in part of the Book” in 2:85 imply the whole Torah in Medina was uncorrupted?'
});

const q285Root=P(N(
  DIL_CR,
  'In Qurʾān 2:85 Allah rebukes the Jews of Medina: “Do you believe in part of the Book and disbelieve in part?” That proves the Torah in their hands was the true Book of Allah.',
  'Read Qurʾān 2:84–85 in its actual passage (2:75–89): just six verses earlier (Q 2:79), Allah condemned their scribes for writing forged scripture with their own hands! In verses 84–85, Allah rebukes the Medinan Jewish tribes for selectively obeying one surviving Torah law (ransoming Jewish war captives) while blatantly violating two other surviving Torah laws in the exact same conflict (murdering fellow Jews and expelling them from their homes).',
  'Qurʾān 2.84–85 in Context: Hypocritical Selective Obedience vs. Qurʾān 2.79',
  [
    '01 · The immediate context of Qurʾān 2.84–85—Murder, expulsion, and ransoming captives: Verse 84 states the three clauses of the Mosaic covenant that survived in their Torah: (1) do not shed one another’s blood; (2) do not evict one another from your homes; and (3) ransom captives. In Medina, the Jewish tribes violated clauses 1 and 2 by fighting alongside pagan allies to kill and expel rival Jewish tribes, yet piously obeyed clause 3 by ransoming the captives afterward! Verse 85 exposes that selective hypocrisy.',
    '02 · Read 2.75–79 (six verses earlier) and 2.89 (four verses later): The passage opens in 2:75–79 by condemning those who distort the word of Allah (yuḥarrifūnahu) and write the book with their own hands, and closes in 2:89 by condemning them for disbelieving in the Final Prophet whom they recognized from their own surviving prophecies!'
  ],
  ['Qurʾān 2:75–79, 84–85, 89','Tafsīr al-Ṭabarī; Tafsīr Ibn Kathīr'],
  [q285Trap1],
  {
    facts:[
      ['Q 2:84–85 clauses','(1) No murder, (2) no eviction, (3) ransom captives'],
      ['Medinan hypocrisy','Killed & evicted fellow Jews, then ransomed them citing Torah'],
      ['Q 2:79 (6 verses prior)','Curses scribes who “write the book with their own hands”'],
      ['Q 2:89 (4 verses after)','Rebukes them for rejecting the Prophet foretold in their Book']
    ],
    quotes:[
      {by:'Qurʾān 2:84–85',ar:'ثُمَّ أَنتُمْ هَٰؤُلَاءِ تَقْتُلُونَ أَنفُسَكُمْ وَتُخْرِجُونَ فَرِيقًا مِّنكُم مِّن دِيَارِهِمْ ... وَإِن يَأْتُوكُمْ أُسَارَىٰ تُفَادُوهُمْ وَهُوَ مُحَرَّمٌ عَلَيْكُمْ إِخْرَاجُهُمْ ۚ أَفَتُؤْمِنُونَ بِبَعْضِ الْكِتَابِ وَتَكْفُرُونَ بِبَعْضٍ',en:'Then, you are those [same ones who are] killing one another and evicting a party of your people from their homes… And if they come to you as captives, you ransom them, although their eviction was forbidden to you. So do you believe in part of the Scripture and disbelieve in part?',ref:'Qurʾān 2:84–85'},
      {by:'Qurʾān 2:79 (Six verses earlier in the same passage)',ar:'فَوَيْلٌ لِّلَّذِينَ يَكْتُبُونَ الْكِتَابَ بِأَيْدِيهِمْ ثُمَّ يَقُولُونَ هَٰذَا مِنْ عِندِ اللَّهِ',en:'So woe to those who write the “scripture” with their own hands, then say, “This is from Allah,” in order to exchange it for a small price.',ref:'Qurʾān 2:79'}
    ],
    visual:{
      type:'compare',
      title:'What Qurʾān 2:84–85 Actually Rebukes vs. Christian Misuse',
      left:{label:'Christian Misuse of Q 2:85',items:[
        'Crops out Q 2:84 (murder, eviction & ransoming captives)',
        'Hides Q 2:75 & 2:79 sitting just six verses earlier',
        'Pretends rebuking selective obedience equals total textual inerrancy'
      ]},
      right:{label:'Actual Context of Q 2:75–89',items:[
        'Q 2:75–79: Condemns scribes who distort and write forged scripture',
        'Q 2:84–85: Condemns obeying captive-ransom while murdering & evicting',
        'Q 2:89: Condemns rejecting the Final Prophet foretold in their scripture'
      ]}
    }
  }
),{
  who:'Opening move · 01',
  forkTitle:'Watch out · common Christian follow-up on Qurʾān 2:85',
  forkSub:'Tap the counter-claim below to refute it with Q 2:79 and 2:84.'
});

card('christianity/islam-vs/d-dr-quran-2-85',{
  title:'2:85: “Do you believe in part of the Book and disbelieve in part?”',
  k:'2:84–85',
  blurb:'How Q 2:84–85 rebukes Medinan Jews for obeying the captive-ransom law while murdering and evicting fellow Jews—six verses after Q 2:79 condemns forged scripture.',
  claim:'Qurʾān 2:85 rebukes the Jews for only believing part of the Book, proving the whole Torah in Medina was uncorrupted.',
  tree:q285Root,
  sum:'Read in its immediate context (Q 2:75–89), verse 85 rebukes Medinan Jewish tribes for selectively obeying the surviving Torah rule on ransoming captives while violating the surviving ban on murdering and evicting fellow Jews (2:84)—just six verses after Q 2:79 curses scribes who write forged scripture with their own hands.'
});

})();
