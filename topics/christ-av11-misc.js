/* Christianity & Misc AV batch 11 — 2026-11-21. Remaining small categories from av-misc-rest.json (26 channels):
   add() integrations (4):
     - #mehrehe (1275939453273247805) -> christianity/practice/d-dr-sources (also PDF: 1_1.pdf)
     - #jesaja-53 (1289646485524189295) -> christianity/jesus/d-ia-messianic-prophecies/t-isaiah-53-islamic-prophecy (also PDF: Jesaja53_komplett.docx.pdf)
     - #sure-6-55-rezitation-weg (1289264528365846612) -> islam/quran/preservation/d-dr-defense-of-qiraat (adds Arabic 7:146 / 3:99 & wa-li-tastabina details beyond quran-av2.js's 1-line 6:55 summary)
     - #apocalypse-von-abraham (1369355132470558730) -> islam/quran/d-ia-plagiarism-charges-against-the-quran (dedicated channel link & Midrash ha-Gadol details)

   New cards (9):
     1. islam/prophet/washing-garment                              (#prophet-saww-kleidung-waschen, 1372321087156916224)
     2. christianity/jesus/pharisee-dilemma                        (#befolgt-die-pharisäer, 1283580942664859648 + #bergpredigt-argument, 1283586146726576260; PDF: Unbenanntes_Dokument-8.pdf)
     3. christianity/practice/divorce-augustine                    (#augustinus-sermo-monte, 1289759155946520636; imgs: IMG_4154.jpg, IMG_4159.png)
     4. christianity/bible/papias-fragments                        (#papias-fragmente, 1275991129447465001)
     5. christianity/church/didascalia-apostolorum                 (#didascalia-apostolorium, 1285301446652465202)
     6. christianity/bible/lucifer-mistranslation                  (#lucifer-ist-fake, 1285113355660431400)
     7. christianity/practice/cousin-marriage-bible                (#cousine-heiraten-erlaubt, 1285319963007254589)
     8. christianity/bible/contradictions/saul-one-year-old        (#saul-war-1-jahr-alt-und-regierte-2-jahre, 1289315665928257587)
     9. christianity/practice/child-marriage/knabenschaender-bible (#knaben-schänder, 1280690119569047732)

   Image/PDF-only channels to capture (12):
     - #bukhari-glaubt-an-thora (1276736462821261323): temp_image_1A441BD9-1CED-4F6F-AD23-0703BE477B97.webp, temp_image_3EAF7B6C-2767-4F68-AF1E-1E693BADBBD6.webp, temp_image_FCECA835-C265-4DBB-81BB-D1CD9EE87B95.webp, temp_image_5D3ACC50-A7B9-41A5-A4E4-AF5B562B7651.webp, temp_image_5DC302EC-BC87-4119-8278-011E53E52A43.webp, temp_image_E07870AA-7553-4AA8-9E89-A62D9A3FC474.webp, temp_image_C00F1295-339E-420B-A516-1C0831610069.webp
     - #alles (1520591516819521629): Unbenanntes_Dokument_-_2026-06-28T024741.129.pdf
     - #himmel-oder-erde-zuerst-erschaffen (1277017334309195848): Unbenanntes_Dokument_-_2026-10-09T031614.228.pdf
     - #wieviele-tage-hat-allah-erde-erschaffen (1283164278777581644): Unbenanntes_Dokument_-_2026-10-08T233534.352.pdf
     - #allah-täuscht-muslime (1281798211073478738): Screenshot_2024-06-22_175913.png, Screenshot_2024-06-23_055004.png, Screenshot_2024-06-23_191334.png, Screenshot_2024-06-27_234245.png
     - #musnaf-masud-fehlt-2-suren (1286271658104979537): Unbenanntes_Dokument_25.pdf
     - #ibn-masud-versteckt-mansukript (1352334987189289073): Unbenanntes_Dokument_27.pdf
     - #apokalypse-von-moses-leben-von-adam-und-eva-höhle-der-schätze-niederwerfung-adam-und-eva (1374665122701901847): Unbenanntes_Dokument_-_2026-04-30T190748.766.pdf, Unbenanntes_Dokument_-_2026-04-30T190857.949.pdf
     - #grüne-partikel-über-erde (1293461763760853022): RPReplay_Final1728456028.mov (caption: Bukhari 4858, green glow covering the horizon)
     - #quran-leseart-qirat-identisch-mehrere-qurane (1492660879588851974): ok_2.pdf, Unbenanntes_Dokument_-_2026-05-30T092947.707.pdf
     - #hölle-schicksal (1275941359676821504): IMG_7889.png
     - #schriften-vom-kirchenvätern-verfälscht (1275985220298084413): Screenshot_20240602_143956_WhatsApp.jpg, Screenshot_20240602_143958_WhatsApp.jpg, Screenshot_20240602_144001_WhatsApp.jpg, Screenshot_20240602_144007_WhatsApp.jpg, Screenshot_20240602_144010_WhatsApp.jpg, Screenshot_20240602_144003_WhatsApp.jpg, Screenshot_20240602_144014_WhatsApp.jpg, Screenshot_20240602_144016_WhatsApp.jpg, Screenshot_20240602_144020_WhatsApp.jpg, Screenshot_20240602_152214_WhatsApp.jpg (x2), Screenshot_20240603_220811_TikTok.jpg, Screenshot_20240603_220812_TikTok.jpg

   Minor source typos corrected:
     - #mehrehe: "Samuel 12:8" -> 2 Samuel 12:8.
     - #jesaja-53: "origenes contra celsum kapitel 12" -> Origen, Contra Celsum Book 6, Chapter 75.
     - #prophet-saww-kleidung-waschen: "bukahri 3961" -> Sahih al-Bukhari 3691 (also 23, 7008).
     - #lucifer-ist-fake: "2 peter:19" / "Petrus 1:19" -> 2 Peter 1:19. */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('christ-av11: no card',key); };

/* ───────────────────────────────────────────────────────────────
   A. INTEGRATED BRANCHES via add()
   ─────────────────────────────────────────────────────────────── */

/* 1. #mehrehe -> christianity/practice/d-dr-sources */
const ME=AV('mehrehe','1275939453273247805');
add('christianity/practice/d-dr-sources',N(ME,
 "Even in the Old Testament, polygyny only caused family misery, was barely tolerated, and God never actually gave or blessed it.",
 "Scripture shows the opposite: God explicitly regulated polygyny in the Torah (Exodus 21:10; Deuteronomy 21:15–17), explicitly told David 'I gave you your master's wives into your bosom... and would have given you much more' (2 Samuel 12:8), and blessed Jacob's four wives—hearing Leah's and Rachel's prayers and building all twelve tribes of Israel through them.",
 "OT regulation, divine gift & Jacob's household",
 [
  "God regulates rather than forbids polygyny: When God forbids a sin (idolatry, adultery, theft), He forbids it plainly. Instead, Exodus 21:10 protects a first wife's food, clothing, and marital rights when a man takes another wife, and Deuteronomy 21:15–17 regulates inheritance between two wives. Nowhere does Scripture say 'you shall not have multiple wives.'",
  "2 Samuel 12 (v. 8): God Himself speaks to David through Nathan: 'I gave your master's house to you, and your master's wives into your arms... And if this were too little, I would add to you as much more.' God would never present an inherently sinful relationship as His own gift.",
  "Jacob's wives (Genesis 29–35): In Genesis 30:14–16, Rachel trades a night with Jacob for Reuben's mandrakes, and Leah conceives Issachar. Far from condemning Jacob's polygyny, God opens Leah's and Rachel's wombs in answer to prayer (Gen 29:31; 30:22), keeps His covenant with Jacob (Gen 31:3; 35:9–12), and forms the twelve tribes of Israel from his four wives/concubines (Gen 35:22–26).",
  "Tension stems from sin, not polygyny: Strife also occurs in monogamy (Adam and Eve after the Fall). The tensions in Abraham's house (doubting God's promise via Hagar), Jacob's house, or Elkanah's (1 Samuel 1) are never blamed on polygyny itself. Abraham ('friend of God'), Jacob, and David ('man after God's heart') were blessed; Solomon was rebuked only when his foreign wives led him into idolatry (1 Kings 11:3–4).",
  "New Testament silence: Jesus speaks often about marriage and divorce yet never condemns polygyny. The Apostles restrict elders/overseers to being 'the husband of one wife' (1 Timothy 3:2)—a leadership requirement, not a universal moral ban.",
  "Channel PDF: Additional dossier attached in Discord (1_1.pdf — to capture)."
 ],
 ["Exodus 21:10","Deuteronomy 21:15–17","2 Samuel 12:8","Genesis 29:31; 30:14–22; 31:3; 35:9–26","1 Kings 11:3–4","1 Timothy 3:2"],
 [
  N(ME,
   "Deuteronomy 17:17 forbids multiplying wives, and Genesis 2:24 ('one flesh') mandates lifelong monogamy.",
   "Neither verse forbids polygyny. Deuteronomy 17:17 uses Hebrew yarbeh ('multiply excessively') and addresses only Israel's king—just like verses 16–17 warn against multiplying horses or silver and gold—to prevent foreign political alliances from turning his heart to idols. Genesis 2:24 is Adam's narrative observation ('therefore', al-ken), where 'one flesh' (basar echad) means forming kinship/family ties, just as in Genesis 29:14 and 37:27.",
   "Deuteronomy 17:17 (yarbeh) & Genesis 2:24 (basar echad)",
   [
    "Hebrew yarbeh (Deut 17:17): The verb yarbeh means 'increase abundantly / multiply excessively', not 'have more than one'. The exact same verb appears in Deuteronomy 8:13 ('when your silver and gold multiply') and Isaiah 30:23 ('your livestock will multiply').",
    "Royal law context (Deut 17:14–20): The passage restricts royal excess—not multiplying horses (v. 16), wives (v. 17a), or silver and gold (v. 17b)—specifically 'lest his heart turn away' (as happened with Solomon's foreign wives, 1 Kings 11:1–4).",
    "Jewish tradition (Talmud, Sanhedrin 21a): Rabbinic exegesis reads Deut 17:17 not as 'only one wife' but as limiting royal excess (traditionally capped at 18 wives for a king). King David had multiple wives without any rebuke under Deut 17:17.",
    "Who speaks in Genesis 2:24: Adam speaks—not a prophet issuing a law—opening with Hebrew al-ken ('therefore'), an anthropological observation explaining why humans leave parents to form a household, not a legal prohibition.",
    "Meaning of basar echad ('one flesh'): In Hebrew idiom, 'flesh' denotes kinship and bloodline: Laban tells Jacob 'you are my bone and my flesh' (Genesis 29:14), and Joseph's brothers say 'he is our brother, our own flesh' (Genesis 37:27). Becoming 'one flesh' means founding a new kinship unit through offspring, not restricting a man to one wife."
   ],
   ["Deuteronomy 17:14–20; 8:13","Isaiah 30:23","Talmud, Sanhedrin 21a","Genesis 2:24; 29:14; 37:27"],
   [
    N(ME,
     "Still, the early Church Fathers and Jews of Jesus' era regarded polygyny as immoral and unchristian.",
     "On the contrary: Augustine explicitly states in On the Good of Widowhood (§10) that holy men were lawfully permitted multiple living wives simultaneously; John Chrysostom (On Titus Homily 3) confirms that having two or many wives under the Old Covenant was not impurity; Tertullian (To His Wife 1.2) admits it was permitted to ancestors and patriarchs; and Josephus (Antiquities 17.1.2) testifies that polygyny remained Jewish custom. Even Augustine acknowledged polygyny was lawful in principle and banned only by Roman civil law—an obedience to rulers under Romans 13.",
     "Augustine, Chrysostom, Tertullian & Josephus on polygyny",
     [
      "Augustine (On the Good of Widowhood, §10): Distinguishes holy men from holy women, stating plainly that it was lawful for holy men to have several living wives at once for provident procreation—not out of carnal lust.",
      "Augustine & Roman law (Romans 13): Augustine recognizes that polygyny itself was permitted by God, while Roman civil law forbade it—meaning Christian prohibition rests on obeying the state (Romans 13), not on divine moral condemnation.",
      "John Chrysostom (Homilies on Titus, Hom. 3, §2): Teaches that evil intent, not plurality of wives, brings impurity; David had many wives without becoming unclean, and fell only when taking Bathsheba unlawfully through injustice and greed.",
      "Tertullian (To His Wife / Ad Uxorem 1.2): Concedes explicitly that 'among our ancestors, indeed even among the patriarchs themselves, it was permitted not only to marry, but even to have several wives', alongside concubines, arguing only that later church discipline curtailed it.",
      "Flavius Josephus (Jewish Antiquities 17.1.2): First-century Jewish historian confirms: 'For it is our custom for a man to have several wives at the same time.'"
     ],
     ["Augustine, De bono viduitatis §10","John Chrysostom, In ep. ad Titum Hom. 3.2","Tertullian, Ad Uxorem 1.2","Flavius Josephus, Jewish Antiquities 17.1.2","Romans 13"],
     [],
     {
      facts:[["Augustine","Lawful for holy men; Roman law forbade it"],["Chrysostom","2+ wives not unclean in OT"],["Tertullian","Admits patriarchs allowed multiple wives"],["Josephus","1st-c. Jewish custom"]],
      quotes:[
       {by:"Augustine of Hippo",en:"Men were allowed to have several wives at the same time; and that this served not carnal lust but provident procreation is shown by the fact that it was lawful for holy men to have several living wives, whereas it was not lawful for holy women to have intercourse with several living husbands.",ref:"On the Good of Widowhood (De bono viduitatis), §10"},
       {by:"John Chrysostom",en:"Do you see, then, that it is evil intent that makes a person unclean? Whoever had two wives [under the Old Covenant] was not reckoned unclean; indeed, David had many of them and yet was not unclean. But as soon as he took one by an unlawful path, he became so at once. Why? Because he committed an act of injustice and greed.",ref:"Homilies on Titus, Homily 3, §2"},
       {by:"Tertullian",en:"We admit that among our ancestors, indeed even among the patriarchs themselves, it was permitted not only to marry, but even to have several wives. In those days there were also concubines.",ref:"To His Wife (Ad Uxorem), Book 1, §2"},
       {by:"Flavius Josephus",en:"For it is our custom for a man to have several wives at the same time.",ref:"Jewish Antiquities 17.1.2"}
      ]
     })
   ],
   {
    facts:[["Hebrew Term","yarbeh = multiply excessively"],["Target","Israel's king only (Deut 17)"],["Talmud","Sanhedrin 21a (cap of 18, not 1)"],["Gen 2:24","basar echad = kinship (Gen 29:14)"]],
    visual:{kind:'compare',
     left:{title:"Christian Monogamy Proof-Texts",items:["Claims Deut 17:17 bans >1 wife","Reads Gen 2:24 'one flesh' as legal exclusivity","Treats polygyny as inherently sinful"]},
     right:{title:"Biblical & Linguistic Reality",items:["yarbeh = 'multiply excessively', addressed to the king (cf. horses/gold)","al-ken + basar echad = kinship formation (cf. Gen 29:14; 37:27)","2 Sam 12:8 calls David's wives a gift from God"]}}
   })
 ],
 {
  facts:[["Torah Law","Regulated (Ex 21:10; Deut 21:15–17)"],["Divine Gift","2 Sam 12:8 (David's wives)"],["Tribes of Israel","Born via Jacob's 4 wives/concubines"],["NT Rule","1 Tim 3:2 applies to elders only"]]
 }));

/* 2. #jesaja-53 -> christianity/jesus/d-ia-messianic-prophecies/t-isaiah-53-islamic-prophecy */
const J53=AV('jesaja-53','1289646485524189295');
add('christianity/jesus/d-ia-messianic-prophecies/t-isaiah-53-islamic-prophecy',N(J53,
 "Early Christians and Church Fathers universally treated Isaiah 53 as an unproblematic portrait of a majestic divine Messiah.",
 "In Contra Celsum (Book 6, Ch. 75), Origen preserves Celsus's sharp critique: if a divine spirit dwelt in Jesus, his body should have excelled in stature, beauty, strength, and voice—yet reports described Jesus as 'small, unansehnlich (ill-favoured), and of low birth.' Origen concedes Scripture speaks of his body as ill-favoured (citing Isaiah 53:1–3), trying to parry Celsus while ignoring the tension with Christian claims of divine majesty.",
 "Origen vs. Celsus on Isaiah 53 (Contra Celsum 6.75)",
 [
  "Celsus's philosophical objection: Celsus argues it is impossible for a body carrying more of the divine nature not to stand out in size, beauty, strength, or voice—yet Jesus's body did not differ from others and was reportedly small, ill-favoured, and of lowly birth.",
  "Origen's selective-citation defence: Origen accuses Celsus of quoting only passages that support his charge while ignoring counter-passages, conceding that Scripture depicts Jesus's body as uncomely (citing the Septuagint of Isaiah 53:1–3: 'no form nor comeliness... disfigured more than the sons of men'), while denying clear proof that he was small or low-born.",
  "Channel attachment: Full refutation PDF attached in Discord (Jesaja53_komplett.docx.pdf — to capture)."
 ],
 ["Origen, Contra Celsum 6.75","Isaiah 53:1–3 (LXX)","Jesaja53_komplett.docx.pdf"],
 [],
 {
  facts:[["Church Father","Origen (Contra Celsum 6.75)"],["Critic","Celsus (2nd c.)"],["Prophecy Cited","Isaiah 53:1–3 (LXX)"],["Dossier","Jesaja53_komplett.docx.pdf"]],
  quotes:[{by:"Origen (quoting Celsus & Isaiah 53:1–3)",en:"Since a divine spirit was in the body of Jesus, this body ought to have differed in some way from others—in size, beauty, strength, or voice... yet the body of Jesus did not differ at all; indeed, it is said, it was small, ill-favoured, and of lowly birth... We admit there are passages speaking of Jesus's body as ill-favoured... 'He had no form nor glory; and we saw him, and he had no form nor comeliness, but his form was dishonoured, marred more than the sons of men.'",ref:"Contra Celsum 6.75"}]
 }));

/* 3. #sure-6-55-rezitation-weg -> islam/quran/preservation/d-dr-defense-of-qiraat (adds Arabic citations & wa-li-tastabīna detail) */
const Q655=AV('sure-6-55-rezitation-weg','1289264528365846612');
add('islam/quran/preservation/d-dr-defense-of-qiraat',N(Q655,
 "In Qurʾān 6:55, the readings even switch the grammatical gender of 'way' (sabīl) and the verb wa-li-tastabīna.",
 "Al-Qurṭubī explains in Tafsīr 6:55 that Arabic sabīl ('way') is legitimately both masculine (Banū Tamīm dialect) and feminine (Ḥijāzī dialect), and the Qurʾān uses both forms elsewhere (masculine in 7:146; feminine in 3:99). Likewise, reading wa-li-tastabīna with yāʾ (masculine) or tāʾ (feminine) makes zero difference to the meaning: the tāʾ addresses the Prophet ﷺ directly while the meaning applies to his entire Umma.",
 "Al-Qurṭubī on 6:55: sabīl & wa-li-tastabīna",
 [
  "Tribal dialectal flexibility of sabīl: Banū Tamīm treat sabīl ('way/path') as masculine, whereas the people of the Ḥijāz treat it as feminine—both are standard classical Arabic.",
  "Qurʾānic parallels (7:146 vs. 3:99): The Qurʾān itself uses sabīl in the masculine in Sūrat al-Aʿrāf 7:146 ('lā yattakhidhūhu sabīlan' — 'they will not take it [masc.] as a way') and in the feminine in Sūrat Āl ʿImrān 3:99 ('tabghūnahā ʿiwajan' — 'seeking to make it [fem.] crooked').",
  "Verb reading wa-li-tastabīna (6:55): Read both with yāʾ (masculine) and tāʾ (feminine); al-Qurṭubī notes that the tāʾ addresses the Prophet ﷺ while the intended meaning encompasses his Umma—so there is no divergence in meaning at all."
 ],
 ["Qurʾān 6:55; 7:146; 3:99","Tafsīr al-Qurṭubī on 6:55"],
 [],
 {
  facts:[["Verse","Qurʾān 6:55"],["Dialects","Tamīm (masc.) vs. Ḥijāz (fem.)"],["Parallels","7:146 (masc.) & 3:99 (fem.)"],["Authority","Tafsīr al-Qurṭubī"]],
  quotes:[
   {by:"Qurʾān 7:146 (masculine sabīl)",ar:"وَإِنْ يَرَوْا سَبِيلَ الرُّشْدِ لَا يَتَّخِذُوهُ سَبِيلًا",en:"And if they see the way of right guidance, they will not adopt it as a way.",ref:"Qurʾān 7:146"},
   {by:"Qurʾān 3:99 (feminine sabīl)",ar:"لِمَ تَصُدُّونَ عَنْ سَبِيلِ اللَّهِ مَنْ آمَنَ تَبْغُونَهَا عِوَجًا",en:"Why do you avert from the way of Allah those who believe, seeking to make it [seem] crooked?",ref:"Qurʾān 3:99"}
  ]
 }));

/* 4. #apocalypse-von-abraham -> islam/quran/d-ia-plagiarism-charges-against-the-quran */
const APA=AV('apocalypse-von-abraham','1369355132470558730');
add('islam/quran/d-ia-plagiarism-charges-against-the-quran',N(APA,
 "The Qurʾān's story of Abraham rejecting the sun, moon, and stars (6:76–78) was copied from the Apocalypse of Abraham.",
 "Critics misidentify their own cited parallel: the narrative they quote—where Abraham declares he will not regard the sun, moon, and stars as gods—does not come from the ancient Apocalypse of Abraham at all, but from Midrash ha-Gadol, a late-medieval Yemenite compilation from the 14th century CE whose earliest manuscript dates to the 15th century.",
 "Apocalypse of Abraham vs. Midrash ha-Gadol",
 [
  "Misattributed source: The parallel critics quote against Qurʾān 6:76–78 is not in the Apocalypse of Abraham, but in Midrash ha-Gadol.",
  "Late-medieval compilation: Midrash ha-Gadol is a compilation of rabbinic commentaries and expositions on the Five Books of Moses (Torah) traditionally attributed to the Yemenite scholar David ben Amram al-Adani, who lived in the 14th century CE—over 700 years after the Qurʾān.",
  "Manuscript date: Its earliest surviving manuscript dates to the 15th century CE, ruling out any borrowing by the 7th-century Qurʾān."
 ],
 ["Qurʾān 6:76–78","Midrash ha-Gadol (David ben Amram al-Adani, 14th c.)"],
 [],
 {
  facts:[["Qurʾān","6:76–78 (Abraham & celestial bodies)"],["Actual Parallel","Midrash ha-Gadol (not Apocalypse of Abraham)"],["Compiler","David ben Amram al-Adani (14th c.)"],["Earliest MS","15th century CE"]]
 }));

/* ───────────────────────────────────────────────────────────────
   B. NEW CARDS
   ─────────────────────────────────────────────────────────────── */

/* 1. #prophet-saww-kleidung-waschen -> islam/prophet/washing-garment */
const WG=AV('prophet-saww-kleidung-waschen','1372321087156916224');
card('islam/prophet/washing-garment',{
 title:"'And purify your garments' (74:4): al-Qurṭubī & the dream of shirts",
 k:"Tafsīr · Sūrat al-Muddaththir",
 blurb:"Al-Qurṭubī lists 8 interpretations—7 spiritual/moral—and Bukhārī 3691 explains garments as dīn.",
 claim:"Qurʾān 74:4 ('purify your garments') implies the Prophet ﷺ was physically filthy or ritually impure.",
 tree:N(WG,
  "Why did Allah have to command Muhammad in Qurʾān 74:4 to 'wash/purify his garments' right at the start of prophethood?",
  "Sūrat al-Muddaththir (74) was revealed right after the Prophet ﷺ saw Angel Jibrīl and wrapped himself in his cloak. Al-Qurṭubī records eight classical interpretations of 'purify your garments' (74:4): only one is literal clothing (since polytheists did not wash clothes with water), whereas seven superior views interpret 'garments' metaphorically as the heart, soul, deeds, and moral purity—confirmed by Ṣaḥīḥ al-Bukhārī 3691, where the Prophet ﷺ explicitly interprets shirts in a dream as 'religion (al-dīn)'.",
  "Al-Qurṭubī's 8 views & Bukhārī 3691",
  [
   "Historical moment of revelation: Qurʾān 74:4 ('wa-thiyābaka fa-ṭahhir') came down directly after the Prophet ﷺ beheld Angel Jibrīl and covered himself, marking his transition into public prophethood and calling for inward spiritual readiness.",
   "Al-Qurṭubī's eight opinions: Out of eight scholarly interpretations recorded in Tafsīr al-Qurṭubī, only one takes 'garments' literally (noting that pagan idolaters did not wash their garments with water); seven stronger opinions hold that it refers to purifying one's heart, soul, intentions, and deeds.",
   "Garments = Religion (Bukhārī 3691): In Ṣaḥīḥ al-Bukhārī 3691 (also 23, 7008), the Prophet ﷺ describes a dream of people wearing shirts (qumuṣ) of varying lengths, with ʿUmar dragging his behind him; asked for its interpretation, he replied: '(It stands for) the Religion.'",
   "Purifying the dīn: Just as shirts symbolize religion in prophetic idiom, upon receiving the mantle of prophethood he was commanded to purify religion itself—practicing it and spreading Islam to clear away the spiritual impurities of idolatry."
  ],
  ["Qurʾān 74:1–4","Tafsīr al-Qurṭubī on 74:4","Ṣaḥīḥ al-Bukhārī 3691 (also 23, 7008)"],
  [],
  {
   facts:[["Verse","Qurʾān 74:4 (al-Muddaththir)"],["Tafsīr","al-Qurṭubī (7 of 8 views: heart/soul/deeds)"],["Hadith","Ṣaḥīḥ al-Bukhārī 3691"],["Symbolism","Garment/shirt = Religion (al-Dīn)"]],
   quotes:[{by:"Prophet Muḥammad ﷺ",en:"While I was sleeping, the people were shown to me wearing shirts, some reaching only the chest and some a little longer; and ʿUmar was shown to me wearing a shirt so long he was dragging it behind him. They asked: 'How have you interpreted that, O Messenger of Allah?' He said: 'The Religion.'",ref:"Ṣaḥīḥ al-Bukhārī 3691 (also 23, 7008)"}]
  }),
 sum:"Al-Qurṭubī notes seven spiritual interpretations of 74:4 over one literal view, and Bukhārī 3691 confirms that 'garments' symbolize the Religion (al-Dīn) itself—to be cleansed of idolatry's corruption."});

/* 2. #befolgt-die-pharisäer + #bergpredigt-argument -> christianity/jesus/pharisee-dilemma */
const PH=AV('befolgt-die-pharisäer','1283580942664859648');
const BM=AV('bergpredigt-argument','1283586146726576260');
card('christianity/jesus/pharisee-dilemma',{
 title:"The Pharisee Dilemma: Matthew 23:1–3 vs the Sermon on the Mount",
 k:"Gospels · Oral Torah",
 blurb:"Jesus commands obeying the Pharisees on Moses' seat (Matt 23:2–3), keeps Hanukkah (John 10:22), and argues like a rabbi in Matt 5–7.",
 claim:"Jesus rejected the Pharisees' authority and the Oral Torah, establishing a completely new religion divorced from Pharisaic Judaism.",
 tree:N(PH,
  "Jesus constantly attacked the Pharisees as hypocrites—he never told anyone to follow Pharisaic teaching or oral tradition.",
  "In Matthew 23:2–3, Jesus explicitly commands his followers: 'The scribes and the Pharisees sit on Moses' seat; so do and observe whatever they tell you, but not the works they do.' Grounded in Deuteronomy 17:9–12, Jesus upholds the Pharisees' halakhic teaching authority—even attending Hanukkah (John 10:22–23), an oral-tradition feast absent from the Torah—while criticizing only hypocrisy and abuses that override God's commandments (Matt 15:1–9; Mark 7:9–13).",
  "Matthew 23:2–3, Deut 17:9–12 & Oral Tradition",
  [
   "Matthew 23 (v. 2–3): 'The scribes and the Pharisees have seated themselves on the seat of Moses. Do and keep all that they tell you; but do not act according to their deeds, for they say it, yet do not do it.'",
   "Old Testament basis (Deuteronomy 17): Jesus directly echoes Deut 17:9–12, which commands Israel to go to the Levitical priests and judges, do everything they declare according to the Torah, and turn neither right nor left—under penalty of death for willful disobedience.",
   "Hanukkah attendance (John 10): In John 10:22–23, Jesus attends the Feast of Dedication (Hanukkah) in the Temple—a festival rooted in post-biblical oral/historical tradition not prescribed in the Torah—without ever declaring it false (confirmed by John Chrysostom, Homily 61.1 on John: Jesus attended with great zeal).",
   "Matt 15 & Mark 7 in context: When Pharisees ask why Jesus' disciples omit ritual handwashing (Matt 15:1–9), Jesus does not condemn handwashing itself, nor does he say the Qorban Temple-vow rule in the oral law is evil—he rebukes prioritizing tradition to nullify God's commandment to honor parents (Mark 7:9–13).",
   "Why 'written Torah only' collapses: Claiming 'Moses' seat' means only the written Torah makes no sense: interpreting the Torah requires centuries of rabbinic oral tradition. If Jesus meant only the five books of Moses, the Sadducees—who accepted only the Pentateuch and rejected oral tradition and the Prophets—would sit on Moses' seat, not the Pharisees.",
   "Channel PDF: Full dossier attached in Discord (Unbenanntes_Dokument-8.pdf — to capture)."
  ],
  ["Matthew 23:2–3; 15:1–9","Mark 7:9–13","Deuteronomy 17:9–12","John 10:22–23","John Chrysostom, Homily 61.1 on John"],
  [
   N(PH,
    "The Church Fathers never understood Matthew 23:2–3 as endorsing the teaching authority of the Pharisees.",
    "Early Christian authorities explicitly affirm that Matthew 23:2–3 commands obeying the Pharisees' teaching office: Jerome stresses obeying their doctrine because of their priesthood and 'Moses' seat'; Pseudo-Clement says 'the key of the kingdom, namely knowledge,' is entrusted to them; Theophylact writes 'treat the words of the teachers as if they came directly from Moses, or rather from God Himself'; and Irenaeus and Hippolytus confirm their adherence to the Law and core doctrines.",
    "Jerome, Pseudo-Clement, Theophylact, Irenaeus & Hippolytus",
    [
     "Jerome on Matthew 23: Urges the people to submit to them because of their priesthood and office dignity—heeding not their works but their doctrine—explaining that 'the seat of Moses' signifies the teaching of the Law (cf. Ps 1:1; Matt 21:12; Mark 11:15).",
     "Pseudo-Clement (Homilies III, Ch. 18): Quotes Matt 23:2–3 and comments: 'Hear them, He says, for to them is entrusted the key of the kingdom, namely knowledge, which alone opens the gate to life... Yet in fact they hold the key, but do not let those who wish to enter go in.'",
     "Theophylact of Bulgaria (11th c.): Explains that Jesus commands obeying the scribes' teaching even when their lives fall short: 'Treat the words of the teachers as if they came directly from Moses, or rather from God Himself.' He adds that no teacher speaking from Moses' seat teaches sin in the name of the Law.",
     "Irenaeus (Against Heresies IV.12): Argues from Matt 23:2–4 that one God authored both Old and New Law; Jesus affirms Moses' Law as long as Jerusalem stands, attacking only self-invented human traditions that void God's commands (Isaiah 29:13).",
     "Hippolytus of Rome (Refutation of All Heresies IX.28): Documents that the Pharisees guard ancient tradition, comment on the Law, train teachers, and affirm bodily resurrection, the soul's immortality, future judgment, and eternal punishment."
    ],
    ["Jerome, Commentary on Matthew 23","Pseudo-Clement, Homilies III.18","Theophylact on Matthew 23","Irenaeus, Against Heresies IV.12","Hippolytus, Refutatio IX.28"],
    [],
    {
     facts:[["Jerome","Obey Pharisaic doctrine, not deeds"],["Pseudo-Clement","Pharisees hold 'key of knowledge'"],["Theophylact","Hear them as Moses or God Himself"],["Hippolytus","Pharisees teach resurrection & Law"]],
     quotes:[
      {by:"Jerome",en:"Because of their priesthood and the dignity of their office, He urges the people to submit to them, observing not their works but their teaching. When He says, 'The scribes and Pharisees sit on Moses' seat,' He shows that the seat represents the teaching of the Law.",ref:"Commentary on Matthew 23"},
      {by:"Pseudo-Clement",en:"'Hear them,' He says, 'for to them is entrusted the key of the kingdom, namely knowledge, which alone opens the gate to life—through which alone entry into eternal life is possible. Yet in fact,' He says, 'though they hold the key, they do not allow those who wish to enter to go in.'",ref:"Clementine Homilies III, Ch. 18"},
      {by:"Theophylact of Bulgaria",en:"Treat the words of the teachers as if they came directly from Moses, or rather from God Himself... For a teacher will never dare teach evil from Moses' seat, that is, in the name of the Law.",ref:"Explanation of the Gospel of Matthew (11th c.)"}
     ]
    }),
   N(BM,
    "In the Sermon on the Mount ('You have heard it said... but I say to you'), Jesus overturns the Oral Torah.",
    "Far from abolishing the Oral Torah, Jesus uses a standard rabbinic method of legal and ethical intensification ('You have heard... but I say to you'), opens by affirming that he did not come to abolish the Law or the Prophets (Matthew 5:17), and aligns with existing rabbinic discourse—including Talmud Shabbat 88b on loving enemies and the strict School of Shammai on divorce.",
    "The Sermon on the Mount as rabbinic discourse",
    [
     "Matthew 5 (v. 17) confirms the Torah: 'Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them, but to fulfill them.' 'Fulfill' means bringing out the full ethical intent and depth of the commandments, not negating them.",
     "Standard rabbinic formula: The antithesis 'You have heard that it was said to those of old... but I say to you' is a known rabbinic mode of authoritative legal/ethical expansion, not a rejection of oral tradition.",
     "Murder & Adultery (Matt 5:21–22, 27–28): Extending 'Do not murder' to anger and 'Do not commit adultery' to lustful intent deepens inner morality—precisely mirroring the oral tradition's emphasis on intention of the heart.",
     "Parallels in the Oral Torah: Loving enemies and enduring insult (Matt 5:43–44) has direct parallels in rabbinic ethics (e.g., Talmud, Shabbat 88b on those who are insulted and do not insult back). Likewise, Jesus' strict stance on divorce (Matt 5:31–32) aligns with a live Pharisaic debate, closely matching the strict School of Shammai.",
     "Conclusion on rabbinic authority: Jesus speaks inside the Jewish halakhic conversation like a rabbi pressing for spiritual depth—leaving Christians with the 'Pharisee Dilemma': if Jesus validated Pharisaic teaching authority on Moses' seat, rejecting Rabbinic Judaism undermines Jesus' own command."
    ],
    ["Matthew 5:17, 21–22, 27–28, 31–32, 43–44","Babylonian Talmud, Shabbat 88b","Mishnah Gittin 9:10 (School of Shammai)"],
    [],
    {
     facts:[["Key Verse","Matthew 5:17 (not to abolish Law)"],["Formula","Rabbinic intensification, not rejection"],["Talmud Parallel","Shabbat 88b (enduring insult/mercy)"],["Divorce Parallel","School of Shammai (strict view)"]],
     visual:{kind:'compare',
      left:{title:"If Jesus Meant 'Written Torah Only'",items:["Sadducees (not Pharisees) rejected Oral Torah","Sadducees also rejected the Prophets","Interpreting Torah laws requires oral halakha"]},
      right:{title:"What Jesus Actually Commanded & Practiced",items:["Obey Pharisees on Moses' seat (Matt 23:2–3)","Attended oral-tradition feast Hanukkah (John 10:22)","Argued inside rabbinic ethics (Matt 5; Shabbat 88b; Shammai)"]}}
    })
  ],
  {
   facts:[["Core Text","Matthew 23:2–3 (Moses' seat)"],["OT Anchor","Deuteronomy 17:9–12"],["Oral Feast","John 10:22–23 (Hanukkah)"],["Church Fathers","Jerome, Irenaeus, Theophylact, Ps.-Clement"]]
  }),
 sum:"In Matthew 23:2–3 Jesus commands obedience to the Pharisees' teaching on Moses' seat (Deut 17:9–12), keeps Hanukkah (John 10:22), and in the Sermon on the Mount argues as a rabbi deepening—not abolishing—Torah and oral ethics."});

/* 3. #augustinus-sermo-monte -> christianity/practice/divorce-augustine */
const DIV=AV('augustinus-sermo-monte','1289759155946520636');
card('christianity/practice/divorce-augustine',{
 title:"Divorce in Christianity: Augustine, Athenagoras, Nazianzus & Canon Law",
 k:"Marriage · Divorce",
 blurb:"Patristic witnesses bind spouses in 'iron fetters', call remarriage adultery, deny domestic-violence divorce, and even allow wife-beating.",
 claim:"Christianity has a compassionate, timelessly consistent divorce ethic compared to Islam.",
 tree:N(DIV,
  "Christianity always upheld a merciful yet balanced marriage ethic, whereas Moses and Islam allowed easy divorce.",
  "Church Fathers and Orthodox canonists teach a severity far harsher—and often internally inconsistent—than modern Christians admit: Augustine explains Moses only allowed divorce bills to delay hot-headed husbands via wise scribes, while under Christianity husbands are bound in 'iron fetters' (Psalm 149 §10); Athenagoras (178 CE) brands even remarriage after a spouse's death 'specious adultery'; Orthodox canonists forbid divorce and remarriage even for domestic violence; and Augustine himself (Letter 8*) authorizes husbands to beat guilty wives.",
  "Augustine on Moses vs. the Church's 'iron fetters'",
  [
   "Augustine on Moses (Contra Faustum XIX.26): Moses opposed hasty divorce; requiring a written bill—drafted only by Hebrew scribes—forced angry men to consult wise legal mediators who could reconcile the couple. Only incurable hatred ('hardness of your hearts') received the certificate.",
   "Augustine's 'iron fetters' (Exposition on Psalm 149, §10): Even when a husband is insulted by his wife or desires a prettier or richer woman, he is forbidden to divorce except for unchastity. Augustine likens marriage to 'iron chains' fastened by the bishop's hand—noting even the Apostles complained 'then it is not good to marry' (Matt 19:10; 1 Cor 7:27).",
   "Athenagoras (Plea for the Christians, 178 CE, Ch. 33): Demands either lifelong celibacy or a single marriage: whoever sends away his wife and marries another commits adultery, and 'he who separates from his first wife, even if she has died, is a specious adulterer' resisting God's creation of one man and one woman.",
   "Channel attachments: Two scans related to Augustine's De Sermone Domini in Monte are attached in Discord (IMG_4154.jpg, IMG_4159.png — to capture)."
  ],
  ["Augustine, Contra Faustum XIX.26","Augustine, Enarratio in Psalmum 149 §10","Athenagoras, Plea for the Christians 33","Matthew 19:6, 10; 1 Corinthians 7:27"],
  [
   N(DIV,
    "Gregory of Nazianzus and modern Christian synods allow compassionate divorce, especially for domestic abuse.",
    "Gregory of Nazianzus (Oration 37) restricts separation strictly to adultery while telling husbands to control and 'chastise' an unruly wife—and even misreads Matthew 19:10 as spoken by the Pharisees instead of the disciples! Meanwhile, classical Orthodox canonists (Balsamon, St. Nicodemus the Hagiorite in the Pedalion) explicitly deny divorce/remarriage for domestic violence, and Augustine's Letter 8* even permits judicial wife-beating.",
    "Nazianzus, Orthodox Canonists & Augustine's Letter 8*",
    [
     "Gregory of Nazianzus (Oration 37): Allows putting away only an adulteress ('who corrupts the offspring') and commands patience in everything else—advising a husband to strip away his wife's ornaments, curb her tongue, moderate her drinking/laughter, restrict her going out, and chasten her haughty look. Remarkably, Nazianzus thinks the Pharisees said 'it is not good to marry' in Matt 19:10—when Scripture attributes that to Jesus' own disciples!",
     "Orthodox Canon Law vs. modern synods: Under St. Vincent of Lérins's standard (Commonitorium, 434 CE: 'what has been believed everywhere, always, and by all'), local/modern synods permitting divorce for abuse contradict the Apostolic Canons, Chrysostom, Council in Trullo (692), Theodore Balsamon (12th c.), and St. Nicodemus the Hagiorite (Pedalion / The Rudder, d. 1809), who allow only temporary separation, not divorce and remarriage.",
     "Augustine on beating wives (Letter 8* to Victor): Writing to Bishop Victor regarding a land dispute, Augustine instructs him that if the wife is found guilty, she 'may also be subjected by her own husband to an appropriate chastisement with blows, in the presence of her mother-in-law, according to the judgment of your Reverence.' (Channel also notes 15th-century Catholic scholar Cherubino da Siena.)"
    ],
    ["Gregory of Nazianzus, Oration 37","Augustine, Epistula 8* (to Victor)","St. Nicodemus, Pedalion (The Rudder)","Theodore Balsamon (12th c.)","St. Vincent of Lérins, Commonitorium","Council in Trullo (692)","Cherubino da Siena (15th c.)"],
    [],
    {
     facts:[["Nazianzus","Misreads Matt 19:10 (Pharisees vs. disciples)"],["Pedalion & Balsamon","No divorce/remarriage for domestic abuse"],["Augustine Ep. 8*","Allows husband to beat guilty wife"],["Vincent of Lérins","New local synods lack universal authority"]],
     quotes:[
      {by:"Gregory of Nazianzus (Oration 37)",en:"Christ allows separation only from the harlot, but in all other matters commands patience... If you see signs or traces in her, take away her ornaments; if she has an unbridled tongue, curb it; if her laughter is shameless, make it modest; if her spending or drinking is excessive, moderate it; if she goes out improperly, restrict it; if her look is haughty, chasten it... What then do the Pharisees say? 'If such is the case between a man and his wife, it is not good to marry.'",ref:"Oration 37 (misattributing Matt 19:10 to Pharisees)"},
      {by:"Augustine of Hippo (Letter 8* to Victor)",en:"Or chastise his wife with blows if she is at fault. For she too may be subjected by her own husband to an appropriate chastisement with blows, in the presence of her mother-in-law, according to the judgment of your Reverence.",ref:"Epistula 8* (Divjak Letters)"},
      {by:"St. Vincent of Lérins",en:"We hold fast to that which has been believed everywhere, always, and by all.",ref:"Commonitorium (434 CE)"}
     ]
    })
  ],
  {
   facts:[["Athenagoras (178 CE)","Remarriage after death = 'specious adultery'"],["Augustine (Ps 149)","Marriage = inescapable 'iron fetters'"],["Augustine (Contra Faust.)","Moses used scribes to delay divorce"],["Images","IMG_4154.jpg, IMG_4159.png (to capture)"]],
   quotes:[
    {by:"Athenagoras of Athens (178 CE)",en:"A person should either remain as he was born, or be content with one marriage; for a second marriage is only a specious adultery... For whoever separates from his first wife, even if she has died, is a disguised adulterer, resisting the hand of God.",ref:"A Plea for the Christians, Ch. 33"},
    {by:"Augustine of Hippo (on Psalm 149)",en:"Listen, young men: these fetters are of iron. Do not seek to put your feet into them... Such chains the hand of the bishop fastens upon you... Men flee here in the hope of getting rid of their wives—and here they are bound all the more tightly. No man looses these fetters.",ref:"Exposition on Psalm 149, §10"}
   ]
  }),
 sum:"Patristic and canonical sources bind Christians in 'iron fetters' (Augustine), brand widower remarriage 'specious adultery' (Athenagoras), deny divorce even for domestic abuse (Pedalion/Balsamon), and explicitly permit beating a guilty wife (Augustine, Letter 8*)."});

/* 4. #papias-fragmente -> christianity/bible/papias-fragments */
const PP=AV('papias-fragmente','1275991129447465001');
card('christianity/bible/papias-fragments',{
 title:"Papias of Hierapolis: fragments on the Gospels, Judas & the Millennium",
 k:"Early Church · Papias",
 blurb:"All 10 fragments of Papias plus Eusebius 3.39: Hebrew Matthew, unordered Mark, Judas crushed by a wagon, and Eusebius calling Papias 'limited in intelligence'.",
 claim:"Papias of Hierapolis unambiguously confirms our canonical Gospels exactly as we have them today, in full harmony with later orthodoxy.",
 tree:N(PP,
  "Papias (early 2nd century) was a direct companion of the Apostles who independently verified our four Greek Gospels.",
  "Papias himself admits in Fragment 1 that he was neither an eyewitness nor a hearer of the Apostles, preferring oral reports from elders over books. His fragments record a grotesque death of Judas (Fragment 3) contradicting both Matthew and Acts, hyperbolic millennial vine tales (Fragment 4) and a literal 1,000-year earthly reign of Christ (Fragment 6)—for which Eusebius (Church History 3.39.13) dismisses Papias as 'of very small intelligence' despite Papias's proximity to the elders! And his famous remarks on Mark (written 'not in order') and Matthew ('compiled in the Hebrew language, and each interpreted them as best he could') undermine standard claims about our Greek Gospels.",
  "Fragments 1–5: Oral preference, Judas & Millennial tales",
  [
   "Fragment 1 (Indirect access & preference for oral voice): Papias wrote five books (Exposition of the Oracles of the Lord). Irenaeus calls him 'a hearer of John and companion of Polycarp', yet Papias states he was neither a hearer nor eyewitness of the Apostles—he questioned travelers who met the elders (Andrew, Peter, Philip, Thomas, James, John, Matthew, Aristion, and the Presbyter John), believing books were less useful than 'the living and abiding voice'.",
   "Fragment 2 (Children): Early Christians called those practicing godly simplicity 'children' (Papias Book 1; Clement of Alexandria, Paedagogus).",
   "Fragment 3 (Death of Judas): Judas walked the earth as an example of impiety until his body swelled so hugely he could not pass where a wagon easily passed, and he was crushed by a wagon so that his entrails poured out—matching neither hanging (Matt 27:5) nor falling headlong in a field (Acts 1:18).",
   "Fragment 4 (Hyperbolic millennial vines): Attributes to the Lord via the elders a future age where each vine has 10,000 branches, each branch 10,000 shoots, each shoot 10,000 clusters yielding 25 metretes of wine, and one grain of wheat yields 10,000 ears of 10,000 grains each, with Judas doubting how such growth could occur (citing Isaiah 11:6ff).",
   "Fragment 5 (Three degrees of salvation): Presbyters distinguish heavenly, paradisiacal, and city dwellings for 100-fold, 60-fold, and 30-fold fruitfulness ('many mansions'; ascending via the Spirit to the Son and Father, citing 1 Cor 15:25–28)."
  ],
  ["Papias, Fragments 1–5 (Exposition of the Oracles of the Lord)","Irenaeus, Against Heresies V.33","Matthew 27:5; Acts 1:18"],
  [
   N(PP,
    "At least Fragment 6 proves Mark and Matthew are our exact Greek Gospels, and Eusebius trusted Papias completely.",
    "Fragment 6 actually states that Mark—who never heard or followed Jesus—wrote down Peter's teachings 'not in exact order', and that Matthew compiled the sayings 'in the Hebrew language, and each interpreted them as best he could' (which does not describe our anonymous Greek Gospel of Matthew!). Worse, in Church History 3.39.12–13, Eusebius openly calls Papias 'of very small intelligence' because Papias took the 1,000-year earthly reign literally—showing that 300 years later, Eusebius overruled a man who actually sat with the elders!",
    "Fragments 6–10 & Eusebius's dismissal (HE 3.39)",
    [
     "Fragment 6 (Mark, Matthew, miracles & Hebrew Gospel): Records miracles from Philip's daughters in Hierapolis (a dead man raised; Justus Barsabas drinking deadly poison unharmed) and 'fabulous' traditions including a literal 1,000-year earthly reign of Christ. On the Gospels, Papias writes: Mark became Peter's interpreter, never heard the Lord, and recorded what he remembered 'not in exact order'; Matthew 'compiled the oracles in the Hebrew language, and each interpreted them as best he could.' Also cites 1 John, 1 Peter, and a story of a sinful woman from the Gospel according to the Hebrews.",
     "Fragments 7–10 (Angels, Revelation, Hexameron & Four Marys): Frag. 7 says angels were given governance of the earth's order, which came to nothing; Frag. 8 cites Papias (with Irenaeus, Methodius, Hippolytus) for Revelation's inspiration; Frag. 9 links Papias, Clement, Pantaenus, and Ammonius in reading the six days of creation as referring to Christ and the Church; Frag. 10 lists four Gospel Marys (Mother of the Lord; Mary of Cleophas/Alphaeus—supposed sister of Mary the Lord's mother; Mary Salome; Mary Magdalene) to explain Jesus' 'brothers' as cousins.",
     "Eusebius's verdict (Church History 3.39.12–13): Eusebius admits Papias sat with the elders and influenced Irenaeus and other Fathers, yet dismisses Papias's literal millenarianism as a failure to recognize apostolic symbolism: 'For he seems to have been of very small intelligence [sphaidros / smikrotatos ton noun], as one may infer from his writings.'"
    ],
    ["Papias, Fragments 6–10","Eusebius, Church History 3.39.12–13"],
    [],
    {
     facts:[["Mark","Peter's interpreter; 'not in exact order'"],["Matthew","'Oracles in Hebrew'; each interpreted them"],["Other Texts","Cites Gospel according to the Hebrews"],["Eusebius 3.39.13","Calls Papias 'of very small intelligence'"]],
     quotes:[
      {by:"Papias (on Mark & Matthew)",en:"Mark, having become the interpreter of Peter, wrote down accurately whatever he remembered—though not in exact order—of the things said or done by Christ. For he neither heard the Lord nor accompanied Him... Matthew compiled the oracles in the Hebrew language, and each one interpreted them as best he could.",ref:"Fragment 6 (preserved in Eusebius, HE 3.39.15–16)"},
      {by:"Eusebius of Caesarea (4th c.)",en:"Among other things he says that after the resurrection of the dead there will be a thousand-year kingdom on this earth, in which Christ will reign bodily. This, I suppose, he got from the apostolic accounts without realizing they spoke mystically and in figures. For he appears to have been of very small intelligence, as one may gather from his writings.",ref:"Church History 3.39.12–13"}
     ]
    })
  ],
  {
   facts:[["Author","Papias of Hierapolis (early 2nd c.)"],["Access","Never heard the Apostles himself"],["Judas (Frag. 3)","Swelled & crushed by a wagon"],["Millennium (Frag. 4)","10,000-fold vines & literal reign"]],
   quotes:[{by:"Papias (Fragment 3)",en:"Judas walked about in this world a sad example of impiety; for his body swelled to such an extent that he could not pass where a wagon easily passed, and he was crushed by the wagon so that his entrails gushed out.",ref:"Fragment 3"}]
  }),
 sum:"Papias never met the Apostles, records a contradictory wagon-crushing death for Judas, describes a Hebrew Matthew and unordered Mark, and is dismissed by Eusebius (HE 3.39.13) as 'of very small intelligence' for taking the elders' literal millennium seriously."});

/* 5. #didascalia-apostolorium -> christianity/church/didascalia-apostolorum */
const DA=AV('didascalia-apostolorium','1285301446652465202');
card('christianity/church/didascalia-apostolorum',{
 title:"Didascalia Apostolorum: veiling, female silence, remarriage & orphan marriage",
 k:"Early Church Order · 3rd c.",
 blurb:"Commands women to veil in the street and stay silent in teaching, limits remarriage, and advises adopting orphan girls to wed one's son.",
 claim:"Strict veiling, banning women from teaching, restricting remarriage, and arranged youthful marriages are uniquely Islamic norms foreign to early Christianity.",
 tree:N(DA,
  "Early Christianity never enforced street veiling, strict gender separation, remarriage limits, or domestic confinement like Islam does.",
  "The Didascalia Apostolorum—an influential 3rd-century Christian church order—commands women to cover their heads and veil their beauty whenever walking in the street, forbids women and widows from teaching Christ's doctrine, labels a third marriage harlotry, and instructs Christian families with sons to adopt orphan girls and marry them to their sons when of age.",
  "Didascalia Apostolorum (Chapters 2, 3, 14, 15, 17)",
  [
   "Chapter 2 (Men's grooming & dress): Forbids men from growing/cultivating head hair—commanding them to shear it off and neither comb, adorn, nor anoint it, nor wear fine clothing, fancy shoes, or gold rings, calling them snares of harlotry.",
   "Chapter 3 (Strict street veiling & obedience): Commands wives to fear and honor their husbands, keep their hands to the wool and spindle, and whenever walking in the street 'cover your head with your garment, so that by your veil your great beauty may be hidden'; women must not adorn their faces, must walk with downcast eyes and veiled, and are told that provoking a man's lust is their own sin.",
   "Chapter 14 (Remarriage limit): 'Know therefore that the woman who marries one husband may also marry a second; but whoever goes beyond that is a harlot.'",
   "Chapter 15 (Ban on female teachers & confinement of widows): Declares it 'neither right nor necessary that women should be teachers', arguing Jesus sent the Twelve—not Mary Magdalene or the other Marys—to instruct the people. Widows are called 'the altar of God' and ordered to 'sit always at home' and not wander from house to house.",
   "Chapter 17 (Adopting orphans to wed one's son): Counsels childless brothers to adopt Christian orphans, and 'whoever has a son, let him adopt a girl; and when her time comes, let him give her to him for a wife, that his work in the service of God may be completed.'"
  ],
  ["Didascalia Apostolorum, Chapters 2, 3, 14, 15, 17 (earlychristianwritings.com/text/didascalia.html)"],
  [],
  {
   facts:[["Work","Didascalia Apostolorum (3rd c. CE)"],["Ch. 3","Veil beauty in street; downcast eyes"],["Ch. 14–15","3rd marriage = harlot; women may not teach"],["Ch. 17","Adopt orphan girl to marry your son"]],
   quotes:[
    {by:"Didascalia Apostolorum, Ch. 3",en:"Wife, fear your husband and reverence him and please him alone... And when you walk in the street, cover your head with your garment, so that by your veil your great beauty may be hidden. And do not adorn your natural face, but walk with downcast eyes, veiled.",ref:"Didascalia Apostolorum, Ch. 3"},
    {by:"Didascalia Apostolorum, Ch. 15",en:"It is therefore neither right nor necessary that women should be teachers, especially concerning the name of Christ and the redemption of His passion... But a widow should know that she is the altar of God; and she should always sit at home and not run about or wander through the houses of the believers.",ref:"Didascalia Apostolorum, Ch. 15"},
    {by:"Didascalia Apostolorum, Ch. 17",en:"And whoever has a son, let him adopt a girl; and when her time has come, let him give her to him as a wife, so that his work in the service of God may be completed.",ref:"Didascalia Apostolorum, Ch. 17"}
   ]
  }),
 sum:"The 3rd-century Didascalia Apostolorum enforces street veiling, bars women from teaching, confines widows at home, brands third marriages harlotry, and prescribes adopting orphan girls to marry one's son."});

/* 6. #lucifer-ist-fake -> christianity/bible/lucifer-mistranslation */
const LU=AV('lucifer-ist-fake','1285113355660431400');
card('christianity/bible/lucifer-mistranslation',{
 title:"'Lucifer' in Isaiah 14:12: a Latin mistranslation—and a title of Jesus in 2 Peter 1:19",
 k:"Textual & Mythic Context",
 blurb:"Isaiah 14 mocks Babylon's king with Canaanite Athtar/Shachar imagery; the Latin Vulgate translates both helel and Jesus' 'morning star' (2 Pet 1:19) as lucifer.",
 claim:"Isaiah 14:12 reveals Satan's proper name 'Lucifer' and his primordial fall from heaven.",
 tree:N(LU,
  "Isaiah 14:12 proves the devil's name is Lucifer, the fallen angel cast down from heaven.",
  "Isaiah 14:4 explicitly introduces this passage as a taunt-song against the human King of Babylon (confirmed by Church Father Aphrahat in 345 CE as Nebuchadnezzar), using Canaanite mythological motifs (Athtar/Helel and Shachar on Mount Zaphon). 'Lucifer' ('light-bringer / morning star') is merely the Latin Vulgate's translation of Hebrew helel—the very same Latin word the Vulgate applies to Jesus in 2 Peter 1:19!",
  "2 Peter 1:19, Babylon's king & Canaanite myth",
  [
   "The 2 Peter 1 (v. 19) backfire: In the Latin Vulgate, 2 Peter 1:19 says '...until the day dawns and the morning star (lucifer) rises in your hearts.' If 'Lucifer' really meant Satan, the Latin Bible would call Jesus Satan!",
   "Explicit context (Isaiah 14:4): Verse 4 commands Israel to take up this taunt against the King of Babylon—meaning the verses that follow address a human Babylonian ruler, not the devil.",
   "Isaiah 14 (v. 12) & Canaanite myth (Helel / Athtar & Shachar): 'How you have fallen from heaven, O Shining One (helel), son of the Dawn (shachar)!' In Canaanite/Ugaritic mythology, Athtar (linked with Venus, the morning star) tried to seize the deceased Baal's throne on Mount Zaphon (the gods' assembly mountain) and failed, while Shachar ('dawn', twin of Shalim, 'dusk') personifies the morning dawn. Isaiah borrows this myth as poetic satire against Babylon's pride.",
   "Aphrahat the Persian Sage (345 CE, Demonstration 5.4): Early Syriac Christianity did not read Isaiah 14 as Satan's fall—Aphrahat explicitly applies Isaiah 14:13–14 to Nebuchadnezzar's boast and downfall."
  ],
  ["Isaiah 14:4, 12–14","2 Peter 1:19 (Latin Vulgate)","Aphrahat, Demonstration 5.4 (345 CE)"],
  [],
  {
   facts:[["Hebrew Term","helel ben shachar (Morning Star)"],["Latin Vulgate","Uses lucifer for both Isa 14:12 & 2 Pet 1:19"],["Target in Context","King of Babylon (Isa 14:4)"],["Patristic Witness","Aphrahat (345 CE): Nebuchadnezzar"]],
   quotes:[{by:"Aphrahat the Persian Sage (345 CE)",en:"Now Nebuchadnezzar said: 'I will ascend into heaven and exalt my throne above the stars of God, and I will sit upon the high mountains in the borders of the north.' Isaiah spoke concerning him: 'Because your heart has been so lifted up, you shall be cast down to Sheol, and all who see you shall marvel at you.'",ref:"Demonstration 5.4 (on Isaiah 14:13–14)"}],
   visual:{kind:'compare',
    left:{title:"Popular Christian Claim",items:["'Lucifer' is Satan's proper name","Isaiah 14:12 describes Satan's fall","Ignores Latin Vulgate usage"]},
    right:{title:"Biblical & Patristic Reality",items:["Isaiah 14:4 names the King of Babylon (Aphrahat: Nebuchadnezzar)","Uses Canaanite Athtar/Shachar/Zaphon satire","Latin Vulgate also calls Jesus 'lucifer' in 2 Peter 1:19"]}}
  }),
 sum:"'Lucifer' is simply Latin for 'morning star'—used for Jesus himself in the Vulgate of 2 Peter 1:19—while Isaiah 14:4–14 (and Aphrahat, 345 CE) explicitly addresses the proud King of Babylon using Canaanite Athtar/Shachar imagery."});

/* 7. #cousine-heiraten-erlaubt -> christianity/practice/cousin-marriage-bible */
const CM=AV('cousine-heiraten-erlaubt','1285319963007254589');
card('christianity/practice/cousin-marriage-bible',{
 title:"Cousin marriage is permitted and practiced in the Bible",
 k:"Marriage · Family Law",
 blurb:"No biblical verse forbids cousin marriage; Isaac, Jacob, and Esau all married cousins.",
 claim:"Unlike Islam, the Bible forbids cousin marriage as incestuous.",
 tree:N(CM,
  "Islam's allowance of cousin marriage is backwards—the Bible forbids marrying your cousin.",
  "There is not a single verse in the Bible prohibiting cousin marriage. On the contrary, the major biblical patriarchs—Isaac, Jacob, and Esau—married their cousins with full patriarchal and narrative approval.",
  "Biblical patriarchs who married cousins",
  [
   "No biblical prohibition: Nowhere in the Mosaic Law (including Leviticus 18) or the New Testament is marriage between cousins forbidden.",
   "Isaac & Rebekah (Genesis 24): Abraham sends his servant to his own kindred to fetch a wife for Isaac. Rebekah was the granddaughter of Abraham's brother Nahor—Isaac's cousin (once removed / second-degree cousin).",
   "Jacob & Leah/Rachel (Genesis 29): Jacob marries Leah and Rachel, the daughters of his maternal uncle Laban (Rebekah's brother)—making both wives his direct first cousins.",
   "Esau & Mahalath (Genesis 28:9): Esau marries Mahalath, daughter of Ishmael (Abraham's son)—his first cousin—specifically to please his parents after taking wives they disliked."
  ],
  ["Genesis 24","Genesis 28:9","Genesis 29"],
  [],
  {
   facts:[["Prohibition in Bible","None"],["Isaac & Rebekah","Gen 24 (Nahor's granddaughter)"],["Jacob & Leah/Rachel","Gen 29 (first cousins via Laban)"],["Esau & Mahalath","Gen 28:9 (first cousin via Ishmael)"]],
   visual:{kind:'steps',items:[
    ["Isaac & Rebekah (Genesis 24)","Abraham intentionally sends his servant to his brother Nahor's family to marry Isaac to his cousin Rebekah."],
    ["Jacob & Leah/Rachel (Genesis 29)","Jacob marries both daughters of his mother's brother Laban—his first cousins—becoming the mothers of Israel's tribes."],
    ["Esau & Mahalath (Genesis 28:9)","Esau marries Ishmael's daughter Mahalath—his direct paternal first cousin—to gain his parents' approval."]
   ]}
  }),
 sum:"The Bible contains no ban on cousin marriage and records Isaac, Jacob, and Esau marrying their cousins in Genesis 24, 28, and 29."});

/* 8. #saul-war-1-jahr-alt-und-regierte-2-jahre -> christianity/bible/contradictions/saul-one-year-old */
const SAUL=AV('saul-war-1-jahr-alt-und-regierte-2-jahre','1289315665928257587');
card('christianity/bible/contradictions/saul-one-year-old',{
 title:"1 Samuel 13:1: 'Saul was one year old when he became king'",
 k:"Textual Corruption",
 blurb:"The Masoretic Hebrew reads 'Saul was one year old... and reigned two years'; the Septuagint omits it, and Bede flees to allegory.",
 claim:"The Hebrew Masoretic Text of the Old Testament is completely intact and free of numerical absurdities.",
 tree:N(SAUL,
  "The Hebrew Old Testament text has been preserved word-for-word without glaring scribal corruption.",
  "In the Masoretic Text of 1 Samuel 13:1, the Hebrew literally states: 'Saul was one year old when he became king, and he reigned two years over Israel'—an obvious scribal loss of numbers. The Septuagint leaves a textual gap by omitting the verse entirely, while the Venerable Bede (8th century) had to rescue it through pure allegory.",
  "Masoretic Text vs. Septuagint & Bede",
  [
   "Masoretic Text (1 Samuel 13:1): As printed in the standard Hebrew text (mechon-mamre.org/p/pt/pt08a13.htm), the verse reads literally: 'Saul was one year old when he became king, and he reigned two years over Israel.'",
   "Septuagint omission: The Greek Septuagint does not contain this verse at all, leaving a gap where the corrupted/missing age and reign numbers stood.",
   "Venerable Bede's 8th-century allegory: Unable to defend the literal reading, Bede allegorized the baby king: 'Allegorically, the \"one-year-old son\" represents the people of believers, whether in the Synagogue or in the Church, when they begin to reign.'"
  ],
  ["1 Samuel 13:1 (Masoretic Text, mechon-mamre.org/p/pt/pt08a13.htm)","Septuagint (LXX) 1 Kingdoms 13:1","Venerable Bede (8th c.)"],
  [],
  {
   facts:[["Verse","1 Samuel 13:1"],["Masoretic Text","'One year old... reigned two years'"],["Septuagint (LXX)","Omits the verse completely"],["Bede (8th c.)","Rescues via pure allegory"]],
   quotes:[
    {by:"1 Samuel 13:1 (Masoretic Text)",en:"Saul was one year old when he became king, and he reigned two years over Israel.",ref:"1 Samuel 13:1 (MT)"},
    {by:"Venerable Bede (8th c.)",en:"Allegorically, the 'one-year-old son' represents the people of believers, whether in the Synagogue or in the Church, when they begin to reign.",ref:"Commentary on 1 Samuel"}
   ]
  }),
 sum:"The Masoretic Text of 1 Samuel 13:1 literally makes Saul a one-year-old king ruling two years, a scribal corruption omitted by the Septuagint and rescued by Bede only through allegory."});

/* 9. #knaben-schänder -> christianity/practice/child-marriage/knabenschaender-bible */
const KN=AV('knaben-schänder','1280690119569047732');
card('christianity/practice/child-marriage/knabenschaender-bible',{
 title:"'Knabenschänder' (boy-molesters) in 1 Cor 6:9 & 1 Tim 1:10: what does arsenokoitai mean?",
 k:"Translation · Greek",
 blurb:"Translating Greek arsenokoitai as 'Knabenschänder' (pederasts) is linguistically strained; it literally compounds 'man' + 'bed'.",
 claim:"German Bible translations like 'Knabenschänder' prove the New Testament specifically coined a term condemning child/boy abuse.",
 tree:N(KN,
  "1 Corinthians 6:9–10 and 1 Timothy 1:9–10 unambiguously use the word 'Knabenschänder' (boy-abusers), showing the NT's unique condemnation of pederasty.",
  "The Greek word behind 'Knabenschänder' in 1 Corinthians 6:9–10 and 1 Timothy 1:9–10 is arsenokoitai—compounded from arsēn ('man/male') and koitē ('bed'), literally 'men who lie with men'. Because it is a rare term scarcely attested outside biblical texts, scholars debate whether it covers male same-sex acts broadly or specific exploitative/prostitution contexts—making the narrow German rendering 'Knabenschänder' ('boy-molesters') far-fetched and misleading.",
  "Etymology & scholarly debate on arsenokoitai",
  [
   "Literal Greek etymology: In 1 Corinthians 6:9–10 and 1 Timothy 1:9–10, arsenokoitai combines arsēn ('man/male') and koitē ('bed')—literally 'men who lie with men', with no Greek element meaning 'boy' (pais/paidion).",
   "Scholarly uncertainty: Because arsenokoitai is exceedingly rare outside biblical/early Christian literature, its exact scope is heavily debated—some scholars read it as male homosexual acts generally, while others argue it targets specific exploitative practices such as prostitution or sexual abuse.",
   "Why 'Knabenschänder' is strained: Equating arsenokoitai simply with 'Knabenschänder' ('boy-molesters') is linguistically far-fetched and fails to reflect the word's actual etymology or range of scholarly interpretations."
  ],
  ["1 Corinthians 6:9–10","1 Timothy 1:9–10"],
  [],
  {
   facts:[["Verses","1 Cor 6:9–10; 1 Tim 1:9–10"],["Greek Word","arsenokoitai (arsēn + koitē)"],["Literal Sense","'Men who lie with men'"],["Verdict","'Boy-molesters' is linguistically strained"]]
  }),
 sum:"Greek arsenokoitai (1 Cor 6:9–10; 1 Tim 1:9–10) compounds 'man' and 'bed'—making German translations as 'Knabenschänder' ('boy-molesters') linguistically strained and unrepresentative of scholarship."});
})();
