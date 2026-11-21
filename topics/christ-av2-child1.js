/* Christianity AV batch 2 — Child marriage & abuse in Christian history, part 1 (18 Averroes channels, translated from German) — 2026-11-21.
   All 18 channels in av-child1.json contain full textual arguments and are mapped 1:1 below. */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});

topic(['christianity','practice','child-marriage'],{title:"Child marriage & abuse in Christian history",k:"Tu quoque",blurb:"Bible passages, Church Fathers, canon law and historians on marriage ages."});

const P='christianity/practice/child-marriage/';

/* 1. Numbers 31 & Deuteronomy 21 (#kinder-sex-slave) */
const KSS=AV('kinder-sex-slave','1280716874690072637');
card(P+'midianite-girls-and-captives',{
 title:"Midianite girls & female captives (Num 31; Deut 21)",
 k:"Old Testament · War Captives",
 blurb:"Catholic, Protestant, patristic, and academic sources on keeping young Midianite girls and captive brides.",
 claim:"The Bible never permitted taking prepubescent captive girls or non-consensual war brides.",
 tree:N(KSS,
  "Numbers 31 and Deuteronomy 21 only allow honorable marriage to adult women, never young girls or forced sexual access.",
  "Standard Christian commentators (Haydock, Pett), Jewish historian Shaye J. D. Cohen, and even patristic readings acknowledge that Numbers 31 spared young girls under 12 for Israelite warriors while Deuteronomy 21 permitted immediate or non-consensual sexual union with captives.",
  "Numbers 31:17–18: sparing young Midianite girls",
  ["George Leo Haydock (Catholic Bible Commentary): Explicitly notes on Numbers 31:18 that 'only those under twelve years of age would thus be spared.'",
   "Dr. Peter Pett (Protestant commentary): 'But the young women and girls were another matter. They could be taken in marriage or used as servants, and would be expected to adopt the religion of their new husbands or masters.'",
   "Prof. Shaye J. D. Cohen (The Beginnings of Jewishness, Ch. 8, pp. 255–256): Argues that 'spare for yourselves' (Hebrew lakhem) unmistakably grants warriors sexual or matrimonial access to the virgin captives, as also understood by Rabbi Shimon bar Yochai in Sifrei (177, 212H).",
   "Cyril of Alexandria (on Numbers 31:26): Praises the Israelite men who fought against the Midianites as honorable, valiant warriors.",
   "Father Antonios Fikry (Coptic Orthodox commentary on Num 31:18): Acknowledges that 'female children' means 'little girls,' while attempting to soften the passage by claiming they could only be kept as wives (or given to sons) under Deut 21:11–13 — yet in biblical usage (e.g. Hagar in Gen 16:3), even concubines and maidservants are termed 'wife' in a secondary marriage."],
  ["Numbers 31:17–18, 26","Deuteronomy 21:10–14","Genesis 16:3","Shaye J. D. Cohen, The Beginnings of Jewishness, pp. 255–256 & n. 52","Haydock Catholic Commentary","Peter Pett Commentary","Fr. Antonios Fikry, Tafsir Num 31:18","Cyril of Alexandria on Num 31:26"],
  [N(KSS,
    "Deuteronomy 21:10–14 protects adult captive women with a respectful 30-day waiting period and full consent.",
    "The text gives the captive no consent, applies the neutral term 'woman' (which Augustine notes denotes the female sex regardless of age), uses the Piel verb 'anah (humble/violate, cf. Deut 22:28–29), and Theodoret of Cyrus explicitly treats it as sexual violation compensated by freedom.",
    "Deuteronomy 21:10–14: forced marriage, rabbinic views & Church Fathers",
    ["No consent & forced grief: The captive cannot choose or refuse, and if she supposedly consented willingly, why does the text command her to mourn for an entire month before being sent away if unwanted?",
     "Age-neutral term 'woman': As Augustine also observed elsewhere, 'woman' denotes the female sex itself, not necessarily an adult woman.",
     "Hebrew 'anah (Piel) & rabbinic ruling: At the end of the passage (v. 14), the verb used after intimacy is 'anah in the Piel stem (cf. Deut 22:28–29, sexual violation). Moreover, the majority rabbinic view held that a soldier could be intimate on the first day and only afterward wait the one month.",
     "Ephrem the Syrian (softening reading): Argues the 30-day period was ordered to protect the captive from immediate lustful violence so the captor could test his affection.",
     "Cyril of Alexandria: Writes that there is nothing obscure in Deut 21:10–14 — 'the meaning of what is commanded is very clear and easy to understand.'",
     "Theodoret of Cyrus (on Deut 21 — explicit admission): 'If a man becomes intimate with a captive woman and afterward is unwilling to take her as his wife, Moses commands that she be set free, and that her freedom be granted to her as compensation for the intimate relation.'"],
    ["Deuteronomy 21:10–14; 22:28–29","Cyril of Alexandria on Deut 21","Ephrem the Syrian on Deut 21","Theodoret of Cyrus on Deut 21"],
    [],
    {facts:[["Target Text","Deut 21:10–14"],["Hebrew Verb","'Anah (Piel, cf. Deut 22:28–29)"],["Theodoret","Freedom as compensation for intimacy"],["Consent","None granted to captive"]],
     quotes:[
      {by:"Theodoret of Cyrus",en:"If a man becomes intimate with a captive woman and afterward is unwilling to take her as his wife, Moses commands that she be set free, and that her freedom be granted to her as compensation for the intimate relation.",ref:"On Deuteronomy 21"},
      {by:"Ephrem the Syrian",en:"It is first stipulated that the marriage of captives shall not take place on the day of their suffering, in order to protect them on the one hand and guard them against violence on the other. The law provides that a period of thirty days be granted...",ref:"On Deuteronomy 21"}
     ]})],
  {facts:[["Verses","Num 31:17–18; Deut 21:10–14"],["Haydock","Spared only those under 12"],["Cohen","Hebrew lakhem = sexual/matrimonial"],["Fikry","'Female children' = little girls"]],
   quotes:[
    {by:"George Leo Haydock",en:"Only those under twelve years of age would thus be spared.",ref:"Catholic Bible Commentary, Num 31:18"},
    {by:"Prof. Shaye J. D. Cohen",en:"We may be sure that 'for yourselves' means that the warriors are permitted to 'use' their virgin captives sexually... That the meaning of 'FOR YOURSELVES' IS SEXUAL OR MATRIMONIAL IS OBVIOUS; the passage is correctly understood by Rabbi Shimon bar Yochai in Sifrei ad loc. (177, 212H).",ref:"The Beginnings of Jewishness, Ch. 8, pp. 255–256 & n. 52"}
   ],
   visual:{kind:'compare',
    left:{title:"Apologetic Claim",items:["Only adult women were taken","No sexual use of captives without full consent"]},
    right:{title:"Commentators & Historians",items:["Haydock: only girls under 12 were spared","Cohen: Hebrew lakhem = sexual/matrimonial use","Theodoret: freedom granted as compensation after intimacy"]}}}),
 sum:"Haydock limits Numbers 31:18 to girls under twelve, Cohen confirms the sexual sense of 'for yourselves,' and Theodoret recognizes Deuteronomy 21:14 as unconsented intimacy compensated with freedom."});

/* 2. Abishag and King David (#abishag-heizung) */
card(P+'abishag-and-king-david',{
 title:"Abishag the Shunammite & seventy-year-old David",
 k:"Old Testament · 1 Kings 1",
 blurb:"An elderly king is warmed in bed by a young virgin girl — viewed as a medical remedy and concubinage by Fathers and commentators.",
 claim:"Scripture never depicts an elderly prophet or king taking a young girl into his bed merely for physical warmth.",
 tree:N(AV('abishag-heizung','1275933022406971452'),
  "Abishag was simply a royal nurse; there is nothing questionable about an aging king having a young girl lie in his bosom.",
  "1 Kings 1:1–3 explicitly states that a beautiful young virgin girl (around 12–14) was sought throughout Israel to lie in the 70-year-old king's bosom to warm his body — and patristic and classic commentators treat her as his concubine and a literal bed-warmer.",
  "1 Kings 1:1–3 and patristic commentary",
  ["Biblical text (1 Kings 1:1–3): King David was old and could not get warm under blankets, so his servants advised seeking a young virgin girl to attend him and 'lie in your bosom, that my lord the king may be warm.' They found Abishag the Shunammite and brought her to the king.",
   "Jerome (Letter 52, to Nepotian): Notes that David was seventy and chilled by old age; even though Bathsheba, Abigail, and his other wives and concubines were still alive, all were set aside, and only in the embrace of this young girl did the aging king seek warmth — Jerome admits that taken literally it reads almost like a comedy.",
   "Cyril of Jerusalem (Catechetical Lecture 12): Confirms that in Scripture a 'young girl' denotes a virgin, citing 1 Kings on Abishag: 'And the young girl was very fair. For it is undisputed that she was chosen as a virgin and brought to David.'",
   "Jamieson-Fausset-Brown Commentary (1 Kings 1:1–2): Explains David was in his seventieth year (2 Sam 5:4–5), prematurely worn out, and his doctors prescribed sleeping with a young girl — a practice later attested in the East to draw vitality and young breath into an exhausted body; moreover, 'it is evident that Abishag was made a concubine or secondary wife of David (see 1 Kings 2:22).'",
   "Cornelius a Lapide (on 1 Kings 1:3): Cites Valesius (Sacred Philosophy, Ch. 29) and Galen (Methodus, Book 7) on placing a healthy girl alongside a cold elderly man so her belly touches his, noting David was too old for intercourse (which would have harmed him), and compares Emperor Rudolf of Habsburg kissing noblemen's daughters and wives for 'healing breath' — a literal reading endorsed by Abulensis, Dionysius of Lyra/Carthusian, Serarius, Salianus, Sanchez, and others."],
  ["1 Kings 1:1–3; 2:22","2 Samuel 5:4–5","Jerome, Letter 52 (to Nepotian)","Cyril of Jerusalem, Catechetical Lecture 12","Jamieson-Fausset-Brown Commentary on 1 Kings 1:1–2","Cornelius a Lapide on 1 Kings 1:3 (citing Valesius, Galen, Serarius, Sanchez)"],
  [],
  {facts:[["Text","1 Kings 1:1–3"],["David's Age","70 years old (2 Sam 5:4–5)"],["Abishag's Role","Virgin concubine & body-warmer"],["Sources","Jerome, Cyril, Lapide, JFB"]],
   quotes:[
    {by:"1 Kings 1:2",en:"Let a young virgin be sought for my lord the king, and let her stand before the king and attend him; and let her lie in your bosom, that my lord the king may be warm.",ref:"1 Kings 1:2"},
    {by:"Jerome",en:"Bathsheba was still alive, Abigail was still there too, as were the other wives and concubines whose names Scripture records. Yet all are rejected as unable to warm him, and only in the arms of this young girl does the old king find the longed-for warmth.",ref:"Letter 52, to Nepotian"}
   ],
   visual:{kind:'steps',items:[
    ["1. Royal Prescription","Servants advise finding a young virgin to lie in 70-year-old David's bosom (1 Kings 1:2)."],
    ["2. Status as Concubine","JFB notes Abishag became David's concubine/secondary wife (cf. 1 Kings 2:22)."],
    ["3. Medical & Literal Exegesis","Lapide (citing Galen & Valesius) and Jerome confirm the literal belly-to-belly warming of the old king by a young girl."]
   ]}}),
 sum:"1 Kings 1:1–3 depicts a 70-year-old David taking a young virgin into his bed for bodily warmth, which Jerome, Cyril, JFB, and Lapide understand literally as physical contact and concubinage."});

/* 3. Elisha lying on the child (#elisa-kind-penis) */
card(P+'elisha-and-the-child',{
 title:"Elisha lying limb-for-limb on the child (2 Kings 4:34–35)",
 k:"Old Testament · Miracle & Exegesis",
 blurb:"Why Elisha stretched his entire body over a small boy behind closed doors — and Cyprian's explicit reference to matching limbs.",
 claim:"There is nothing unusual in how Elisha revived the Shunammite's son in 2 Kings 4:34–35.",
 tree:N(AV('elisa-kind-penis','1275932708434088008'),
  "Elisha simply prayed and revived the boy; pressing his body onto the child's body has no strange physical implications.",
  "Unlike 2 Kings 13:21 where a dead man revived merely upon touching Elisha's bones, Elisha shuts the door behind them and stretches himself mouth-to-mouth, eyes-to-eyes, hands-to-hands, and limb-for-limb onto the child — prompting Cyprian of Carthage to remark on the mismatch between an adult man's limbs and an infant's small limbs.",
  "2 Kings 4:34–35 vs. 2 Kings 13:21 and Cyprian of Carthage",
  ["Biblical scene (2 Kings 4:34–35): Elisha closes the door, climbs onto the bed, lies on the child, puts his mouth on the child's mouth, eyes on eyes, hands on hands, and stretches himself out over him until the child's body grows warm, walks back and forth, and repeats it until the child sneezes seven times.",
   "Inconsistency with 2 Kings 13:21: Elsewhere, a corpse thrown onto Elisha's bones revives instantaneously from a single touch (2 Kings 13:21) — raising the question why Elisha could not revive the boy through prayer or a simple touch instead of stretching his whole body over him.",
   "Cyprian of Carthage (Epistle 58, §3): Explicitly remarks on the physical disproportion between the adult prophet's limbs (Latin membra, covering hands, legs, and genitals) and the child's tiny limbs: an infant's small limbs cannot fit or match the larger limbs of a grown man."],
  ["2 Kings 4:34–35; 13:21","Cyprian of Carthage, Epistle 58, §3 (New Advent 050658)"],
  [],
  {facts:[["Passage","2 Kings 4:34–35"],["Contrast","2 Kings 13:21 (touch alone revives)"],["Father","Cyprian, Epistle 58, §3"],["Key Issue","Limb-for-limb physical disproportion"]],
   quotes:[
    {by:"Cyprian of Carthage",en:"Elisha, beseeching God, so lay upon the dead son of the widow that his head was placed upon the head of the child, his face upon the face of the child, and the limbs of Elisha upon the limbs of the child, and his feet upon the feet of the child. If this be considered with respect to the inequality of our birth and our body, an infant could not be made equal with a full-grown and mature man, nor could his small limbs fit and match the larger limbs of a man.",ref:"Epistle 58, §3"}
   ]}),
 sum:"2 Kings 4:34–35 depicts Elisha shutting the door and lying limb-for-limb on a small boy — a procedure Cyprian explicitly contrasts with the smaller limbs of a child, and unnecessary given 2 Kings 13:21."});

/* 4. Song of Solomon 8:8 & 4:5 (#kleine-brüste-werben) */
card(P+'song-of-solomon-8-8-little-sister',{
 title:"Song of Solomon 8:8: “Our little sister has no breasts”",
 k:"Old Testament · Betrothal Signs",
 blurb:"Biblical poetry and patristic/medieval commentators tie marriageability directly to the first budding of breasts.",
 claim:"The Bible treats adult maturity — not mere onset of breast development — as the standard for courtship and marriage.",
 tree:N(AV('kleine-brüste-werben','1296277995857772585'),
  "Song of Solomon 8:8 and 4:5 are purely romantic poetry about grown adults.",
  "Song of Solomon 8:8 speaks of a 'little sister' who has no breasts yet on the day she is spoken for, 4:5 compares breasts to tiny baby fawns, and Ambrose, Jerome, and Honorius Augustodunensis all read breast budding as the standard physical sign of marriageability (tempus pubertatis).",
  "Song of Solomon 8:8; 4:5 and Christian commentators",
  ["Song of Solomon 8:8: 'We have a little sister, and she has no breasts. What shall we do for our sister on the day when she is spoken for?'",
   "Song of Solomon 4:5: 'Your two breasts are like two fawns, twins of a gazelle, that graze among the lilies' — portraying the woman's breasts as small, immature baby animals.",
   "Honorius Augustodunensis (Expositio in Cantica canticorum, Tractate IV, Ch. VIII, c. 1158): Explains it as 'the image of a little girl who has been given to a man, yet has no breasts — that is, no womanly breast — and is not marriageable' (before applying it symbolically to the Church).",
   "Ambrose of Milan (Exposition of Psalm 118, Sermon 22, §35): Notes that families deferring a wedding plead the weakness of immature age by saying 'she has no breasts,' which is 'the common sign for all virgins who are about to marry: that when the breasts begin to swell forth, they are then judged fit for union.'",
   "Jerome (Commentary on Ezekiel, Ch. 16): Cites Symmachus and Theodotion on 'womanly adornment' as signifying 'the time of puberty (tempus pubertatis), when girls are called marriageable (nubiles) and can be joined in the embraces of husbands,' confirmed by 'your breasts swelled, and your hair grew.'"],
  ["Song of Solomon 8:8; 4:5","Honorius Augustodunensis, Expositio in Cantica canticorum IV.8","Ambrose, Exposition of Psalm 118, Sermon 22, §35","Jerome, Commentary on Ezekiel 16"],
  [],
  {facts:[["Verses","Song 8:8; Song 4:5"],["Ambrose","Budding breasts = fit for union"],["Jerome","Breast swelling = tempus pubertatis / nubiles"],["Honorius","Little girl given to a man before breasts"]],
   quotes:[
    {by:"Ambrose of Milan",en:"This is accustomed to be the common symbol for all virgins who are about to marry: that when the breasts begin to protrude, they are then judged suitable for union.",ref:"Exposition of Psalm 118, Sermon 22, §35"},
    {by:"Honorius Augustodunensis",en:"It is the image of a little girl who has been given to a man, yet has no breasts, that is, no womanly breast, and is not marriageable.",ref:"Expositio in Cantica canticorum IV.8 (c. 1158)"}
   ]}),
 sum:"Song of Solomon 8:8 and commentators like Ambrose, Jerome, and Honorius link female marriageability directly to early breast budding rather than modern adulthood."});

/* 5. Ezekiel 16:7 (#hesekiel-16-7) */
card(P+'ezekiel-16-7-bodily-signs-of-nubility',{
 title:"Ezekiel 16:7: breasts formed & hair grown as marriage signs",
 k:"Old Testament · Biological Puberty",
 blurb:"Origen and Jerome read Ezekiel 16:7 as Scripture's honorable description of girls becoming marriageable upon breast and hair growth — signs that appear years before menstruation.",
 claim:"Ezekiel 16:7 proves the Bible requires full adult maturity, just as critics demand of Islam.",
 tree:N(AV('hesekiel-16-7','1286124757351399484'),
  "Ezekiel 16:7 shows a girl is only marriageable once she reaches complete adult womanhood.",
  "While Ezekiel 16 is an allegory for Israel, Origen and Jerome explicitly treat 'your breasts were formed and your hair grew' as the classical biblical marker of nubility — even though biologically breast development (2–2.5 years before menarche) and pubic hair (from ~8) appear before menstruation itself.",
  "Masoretic, Septuagint, Origen & Jerome on Ezekiel 16:7",
  ["Masoretic Text vs. Septuagint: MT reads 'Your breasts were formed, and your hair had grown, yet you were naked and bare'; LXX reads 'Your breasts were set upright, and your hair grew, yet you were naked and shameful.'",
   "Biological timeline: Female breast budding begins roughly 2 to 2.5 years prior to menarche (which can start around age 9–10), and pubic hair begins growing around age 8 — earlier than menstruation.",
   "Contrast with Islam: When missionaries ask 'Isn't Islam the same?', Islam additionally requires intellectual/spiritual maturity (rushd, Qur'ān 4:6) and the bride's consent at the age of reason — physical puberty alone is insufficient.",
   "Incomplete maturity in the verse itself: Ezekiel 16:13 notes she grew even fairer afterward and v. 14 says her beauty was perfected later; moreover, Isaac Abravanel explains the 'blood' washed off in the passage is not menstrual blood, but spiritual impurity cleansed with water (Written Torah) and oil (Oral Torah).",
   "Origen (Homilies on Ezekiel, ed. Hooker 2014, p. 200): Comments that 'your breasts were set upright' and 'your hair grew' represent the transition from childhood to marriageability, adding 'With all honor the divine discourse describes what ordinarily happens to the bodies of virgins.'",
   "Jerome (Commentary on Ezekiel, Book 4): States that 'you arrived at womanhood' indicates 'the time of maturity, when girls are called marriageable (nubiles) and can partake of the embrace of a husband,' signified by swelling breasts and sprouting hair."],
  ["Ezekiel 16:7, 9, 13–14","Qur'ān 4:6","Origen, Homilies on Ezekiel (ed. Hooker 2014, p. 200)","Jerome, Commentary on Ezekiel, Book 4","Isaac Abravanel on Ezekiel 16"],
  [],
  {facts:[["Passage","Ezekiel 16:7 (MT & LXX)"],["Biology","Breast buds & hair precede menarche (~8–10)"],["Origen & Jerome","Both equate these signs with nubility"],["Islamic Standard","Requires rushd (4:6) + consent"]],
   quotes:[
    {by:"Jerome",en:"Indicates the time of maturity, when girls are called marriageable (nubiles) and can partake of the embrace of a husband. Finally it follows: 'Your breasts swelled, and your hair grew.' In a delicate manner the maturity of virgins is thus signified.",ref:"Commentary on Ezekiel, Book 4"},
    {by:"Origen",en:"With all honor the divine discourse describes what ordinarily happens to the bodies of virgins.",ref:"Homilies on Ezekiel (ed. Hooker, p. 200)"}
   ],
   visual:{kind:'compare',
    left:{title:"Ezekiel 16:7 (Origen & Jerome)",items:["Treats budding breasts & hair as signs of nubility","Physically precedes menstruation by 2–2.5 years","No intellectual-maturity test (rushd) specified"]},
    right:{title:"Islamic Legal Requirement",items:["Physical puberty alone is not sufficient","Requires rushd / mental maturity (Qur'ān 4:6)","Requires valid consent at the age of reason"]}}}),
 sum:"Origen and Jerome read Ezekiel 16:7 as depicting girls ready for a husband's embrace once breasts and hair appear — early physical signs that precede even menstruation, without the Islamic requirement of mental maturity (4:6)."}) ;

/* 6. Jesus, the Pharisees, and the Oral Torah (#pharisäer-kinderehe) */
card(P+'jesus-pharisees-and-oral-torah',{
 title:"Jesus endorses Pharisaic teaching (Matt 23:2–3) despite Mishnah Niddah 5:4",
 k:"New Testament · Oral Torah",
 blurb:"Jesus tells followers to obey everything the Pharisees teach from Moses' seat — even though their Oral Torah legalized intercourse at age three.",
 claim:"Jesus unequivocally condemned every form of child marriage in Jewish tradition.",
 tree:N(AV('pharisäer-kinderehe','1286095564173213828'),
  "Jesus rejected all Pharisaic oral traditions and never told anyone to obey their rulings.",
  "In Matthew 23:2–3 Jesus commands his listeners to 'do and observe whatever they tell you' because the Pharisees sit on Moses' seat — yet the Pharisaic Oral Torah (Mishnah Niddah 5:4; Sanhedrin 55b) permits intercourse with a girl aged three years and one day.",
  "Matthew 23:2–3 vs. Mishnah Niddah 5:4 & Sanhedrin 55b",
  ["Matthew 23:2–3: 'The scribes and the Pharisees sit on Moses' seat. So do and observe whatever they tell you, but not the works they do; for they preach, but do not practice.'",
   "Pharisaic Oral Torah: The Pharisees upheld the Oral Torah alongside the Written Torah.",
   "Mishnah Niddah 5:4 & Babylonian Talmud Sanhedrin 55b: Expressly state that a girl aged three years and one day may be betrothed/had intercourse with as legally valid cohabitation (sefaria.org/Sanhedrin.55b.4; sefaria.org/Mishnah_Niddah.5.4).",
   "Apologetic implication: While criticizing Pharisaic hypocrisy in practice, Jesus issues no prohibition against their Oral Law ruling on child betrothal/intercourse, instead endorsing their authoritative teaching from Moses' seat."],
  ["Matthew 23:2–3","Mishnah Niddah 5:4","Babylonian Talmud, Sanhedrin 55b"],
  [],
  {facts:[["NT Verse","Matthew 23:2–3"],["Rabbinic Texts","Mishnah Niddah 5:4; Sanhedrin 55b"],["Age Cited","3 years and 1 day"],["Gap","No NT repeal of Pharisaic marriage law"]],
   quotes:[
    {by:"Matthew 23:2–3",en:"The scribes and the Pharisees sit on Moses' seat. Do and observe everything they tell you, but do not do according to their works; for they say, and do not do.",ref:"Matthew 23:2–3"}
   ]}),
 sum:"In Matthew 23:2–3 Jesus orders obedience to Pharisaic teaching from Moses' seat without ever repudiating the Oral Torah's rule (Mishnah Niddah 5:4; Sanhedrin 55b) validating intercourse at three years and one day."});

/* 7. Matthew 18:6 (#matthäus-18-6) */
card(P+'matthew-18-6-little-ones',{
 title:"Matthew 18:6: Who are “these little ones”?",
 k:"New Testament · Exegesis",
 blurb:"Apologists cite the millstone verse against child abuse, yet Origen, Hilary, Jerome, 1 Clement, Meyer, and Matthew Henry say it refers to humble believers.",
 claim:"Matthew 18:6 is Jesus's explicit condemnation of sexual abuse against young children.",
 tree:N(AV('matthäus-18-6','1286092303147991052'),
  "When Jesus warns against causing 'one of these little ones who believe in me' to stumble, he is directly condemning child abuse.",
  "Patristic and Protestant commentators alike explain that 'little ones' (mikroi) signifies humble or newly converted believers — not literal child abuse victims — and 1 Clement 46 even replaces 'little ones' with 'my elect.'",
  "Patristic & scholarly consensus on Matthew 18:1–6",
  ["Heinrich August Wilhelm Meyer (NT Commentary on Matt 18:6): Explains 'these little ones' (ton mikron touton) does not stand literally for children, but for modest, simple believers symbolized by the child as a model of humility; skandalisei means giving occasion for spiritual downfall/apostasy, and the donkey-driven millstone (a Greek/Roman execution by drowning, not Jewish) symbolizes loss of eternal life.",
   "Matthew Henry (Commentary on Matt 18:1–6): Notes the disciples were disputing over glory and rank, so Jesus placed a small child before them as an emblem of humility — free from ambition, malice, and pride — representing 'the humble disposition of true Christians.'",
   "Origen of Alexandria (on Matt 18:1–6): Explains that those converted who live like little children — especially newly converted believers who have not yet matured — 'these are the little ones in Christ, and these are the ones who suffer offense.'",
   "Hilary of Poitiers (d. 367, on Matt 18:1–6): 'He calls all those \"children\" who believe through the hearing of faith; for such follow their father, love their mother, know not how to will evil, harbor no hatred, speak no lies, trust what is told them, and believe that what they hear is true. Such is the literal sense.'",
   "Jerome (quoted by Aquinas in Catena Aurea): 'Whoever humbles himself like this child — that is, whoever humbles himself after my example — will enter the kingdom of heaven.'",
   "1 Clement 46 (Clement of Rome): Quotes the saying using 'my elect' instead of 'little ones': 'Woe to that man; it were better for him that he had not been born, than that he should cause one of my elect to stumble; it were better for him that a millstone were hung about him and he were cast into the sea, than that he should pervert one of my elect.'"],
  ["Matthew 18:1–6","1 Clement 46","Origen, Commentary on Matthew 18:1–6","Hilary of Poitiers, Commentary on Matthew 18:1–6","Jerome via Aquinas, Catena Aurea","H. A. W. Meyer, Commentary on Matthew 18:6","Matthew Henry on Matthew 18:1–6"],
  [],
  {facts:[["Target Verse","Matthew 18:6"],["Greek Term","Mikroi / skandalizo (spiritual stumbling)"],["1 Clement 46","Substitutes 'my elect' for 'little ones'"],["Fathers","Origen, Hilary, Jerome, Clement"]],
   quotes:[
    {by:"Hilary of Poitiers",en:"He calls all those 'children' who believe through the hearing of faith... Such is the literal sense.",ref:"On Matthew 18:1–6"},
    {by:"1 Clement 46",en:"Woe to that man; it were better for him that he had not been born, than that he should cause one of my elect to stumble; it were better for him that a millstone were hung about him and he were cast into the sea, than that he should pervert one of my elect.",ref:"1 Clement 46"}
   ],
   visual:{kind:'compare',
    left:{title:"Modern Apologetic Use",items:["Reads 'little ones' as literal children","Reads 'stumble' as sexual/physical child abuse"]},
    right:{title:"Fathers & Commentators",items:["1 Clement 46: 'one of my elect'","Origen & Hilary: humble / newly converted believers","Meyer: skandalizo = occasion to apostatize"]}}}),
 sum:"Far from being a statute on child abuse, Matthew 18:6 is read by 1 Clement 46, Origen, Hilary, Jerome, Meyer, and Matthew Henry as a warning against causing humble or new believers to apostatize."});

/* 8. 1 Corinthians 7:36–38 (#paulus-erlaubt-kinderhe-indirekt) */
const PCOR=AV('paulus-erlaubt-kinderhe-indirekt','1286070477457985669');
card(P+'1-corinthians-7-36-marriage-age',{
 title:"Does 1 Corinthians 7:36 set a minimum marriage age?",
 k:"New Testament · 1 Cor 7:36–38",
 blurb:"Examining Adam Clarke, Hesychius, the Peshitta, Ambrosiaster, and Thomas Aquinas on whether Paul forbids pre-pubertal marriage.",
 claim:"Paul in 1 Corinthians 7:36 forbids marriage before adulthood by requiring a virgin to be 'past her prime' (hyperakmos).",
 tree:N(PCOR,
  "1 Corinthians 7:36 mandates that a girl must pass the flower of her youth before her father gives her in marriage, proving the New Testament bans early marriage.",
  "Both the textual-critical reading (Clarke, Peshitta, Hesychius, Fr. Malaty/Ambrosiaster) and the classical 'father/guardian and virgin' reading (Thomas Aquinas) refute that claim: one view reads it as a man's own celibacy and sexual desire, while Aquinas explicitly states the verse sets no minimum age at all and ranks virginity higher than marriage.",
  "Aquinas: 1 Cor 7:36 sets no minimum age",
  ["Thomas Aquinas (Super I Cor. 7, lect. 8, n. 401–404): Explicitly explains that 1 Cor 7:36 does NOT establish a minimum marriage age, but presupposes marriageability in a pastoral edge case. Aquinas glosses superadulta as 'ultra pubertatem et iam in nubilibus annis' (past puberty and already in marriageable years, n. 401).",
   "Fear of seduction, not an age rule: Aquinas interprets the guardian's worry as fear of moral corruption ('timens ne corrumpatur') — marrying her off prevents sin.",
   "Virginity still preferred: Aquinas stresses that even here, 'licet utrumque sit bonum, tamen virginitas est melior matrimonio' (n. 404) — if the woman wills to stay continent and the guardian stands firm ('cum virgo velit continere', n. 403), he does better NOT to marry her off.",
   "Lexical note (Hesychius, 5th c. CE): Defines hyperakmazein by the synonym katorgan — 'heightened desire for sexual intercourse' — showing the Greek term denotes sexual passion rather than a physical age threshold."],
  ["1 Corinthians 7:36–38","Thomas Aquinas, Super I Cor. 7, lect. 8, n. 401–404","Hesychius (5th c. CE) s.v. hyperakmazein"],
  [N(PCOR,
    "The passage is unambiguously about a father giving his young daughter in marriage.",
    "Even standard Christian commentators disagree: Adam Clarke, the Syriac Peshitta, and Coptic priest Tadros Yacoub Malaty (citing Ambrosiaster) read 'his virgin' as the man's own state of virginity/celibacy, not a daughter.",
    "Clarke, Peshitta & Malaty: the man's own celibacy",
    ["Adam Clarke's Commentary: Argues ten heautou parthenon ('his own virgin') means the man's own virginity/celibacy, and hyperakmos means passing the age when Jewish and Gentile laws/customs expected men to marry (cf. 1 Cor 7:6). Kai houtos opheilei ginesthai ('necessity requires') refers to a change in his feelings/circumstances.",
     "Textual variants supporting Clarke: (v. 36) gameito ('let him marry') over gameitosan in D*, E, F, G, Syriac, Arabic, Slavonic, Itala, and Augustine; si nubat ('if he marries') in Vulgate, Itala, Ambrose, Jerome, Ambrosiaster, Sedulius, Bede. (v. 38) ho gamizon ('he who marries') over ho ekgamizon in Codex Alexandrinus, Vaticanus 1209, Clement, Methodius, Basil; Clarke notes ten heautou parthenon in v. 38 was omitted by Griesbach as looking like an interpolation, and even if original, refers to giving up one's own celibate state.",
     "Syriac Peshitta (2nd–5th c. CE, vv. 36–38): Renders the passage about a man deciding to keep his own virginity, acting rightly whether he marries or remains pure in his youth.",
     "Fr. Tadros Yacoub Malaty (Coptic Orthodox priest, citing Ambrosiaster): Notes Greek 'virgins' covers both unmarried young men and women; if someone dedicated to celibacy/monastic life finds he cannot live in purity regardless of age, 'it is better for him to use the permission to marry openly than to act wickedly and live secretly in shame.'"],
    ["Adam Clarke, Commentary on 1 Cor 7:36–38","Syriac Peshitta, 1 Cor 7:36–38","Fr. Tadros Yacoub Malaty & Ambrosiaster on 1 Cor 7:36","Codices Alexandrinus, Vaticanus 1209, D*, E, F, G"],
    [],
    {facts:[["Clarke Reading","Man's own celibacy (not daughter)"],["Peshitta","2nd–5th c. Syriac supports celibacy reading"],["Textual Variants","gameito & ho gamizon (Aleph/A/B)"],["Ambrosiaster","Better to marry openly than sin secretly"]]})],
  {facts:[["Verse","1 Corinthians 7:36–38"],["Aquinas (n. 401)","Presupposes superadulta; sets no age law"],["Hesychius","hyperakmazein = katorgan (sexual passion)"],["Clarke & Peshitta","Refers to man's own celibacy"]],
   quotes:[
    {by:"Thomas Aquinas",en:"Although both are good, yet virginity is better than marriage (licet utrumque sit bonum, tamen virginitas est melior matrimonio).",ref:"Super I Cor. 7, lect. 8, n. 404"},
    {by:"Hesychius (5th c. CE)",en:"Synonyms hyperakmazein with katorgan — 'heightened desire for sexual intercourse.'",ref:"Lexicon"}
   ],
   visual:{kind:'compare',
    left:{title:"Apologetic Claim",items:["Paul sets a statutory minimum age for brides","Requires full modern adulthood before marriage"]},
    right:{title:"Aquinas & Textual Scholarship",items:["Aquinas: sets no age norm, only a pastoral case","Virginal continence still ranked above marriage","Clarke, Peshitta & Hesychius: concerns the man's own celibacy/desire"]}}}),
 sum:"1 Corinthians 7:36 does not legislate a minimum marriage age: Aquinas says it presupposes an adult pastoral case while preferring celibacy, and Clarke, the Peshitta, and Hesychius read it as a man's own celibacy and sexual desire."});

/* 9. New Testament submission to Roman law (#römisches-recht-laut-bibel) */
card(P+'nt-submission-to-roman-law',{
 title:"The New Testament mandates obedience to Roman civic law",
 k:"New Testament · Roman Law",
 blurb:"Having no marriage-age law of its own, the NT repeatedly orders Christians to submit to Roman rulers — whose law set marriage at age 12.",
 claim:"Early Christians rejected Roman marriage laws allowing 12-year-old brides because the New Testament established a higher civil standard.",
 tree:N(AV('römisches-recht-laut-bibel','1289623034096914533'),
  "The New Testament sets an independent, higher legal age for marriage and rejects pagan Roman norms.",
  "The New Testament specifies no minimum marriage age and instead repeatedly commands Christians to obey Caesar, kings, governors, and every human legal institution — under Roman law, that meant marriage at 12 for girls and 14 for boys (with earlier betrothal).",
  "Six New Testament passages commanding civic obedience",
  ["Matthew 22:21: 'Render therefore to Caesar the things that are Caesar's, and to God the things that are God's' — Jesus affirms fulfilling obligations to secular authorities.",
   "Matthew 17:24–27: Jesus instructs Peter to pay the temple tax from the fish's mouth 'so that we do not give offense to them,' modeling compliance with authorities.",
   "Romans 13:1–7: 'Let every person be subject to the governing authorities. For there is no authority except from God, and those that exist have been instituted by God.'",
   "1 Peter 2:13–14: 'Be subject for the Lord's sake to every human institution, whether it be to the emperor as supreme, or to governors as sent by him to punish those who do evil and to praise those who do good.'",
   "Titus 3:1: 'Remind them to be submissive to rulers and authorities, to be obedient, to be ready for every good work.'",
   "1 Timothy 2:1–2: Urges prayers and thanksgivings 'for kings and all who are in high positions, that we may lead a peaceful and quiet life.'"],
  ["Matthew 17:24–27; 22:21","Romans 13:1–7","1 Peter 2:13–14","Titus 3:1","1 Timothy 2:1–2"],
  [],
  {facts:[["Verses","Matt 22:21; Rom 13; 1 Pet 2; Titus 3; 1 Tim 2"],["NT Marriage Age","None specified"],["Roman Law","Girls 12, boys 14 (betrothal earlier)"],["Result","Christian canon law absorbed Roman ages"]],
   visual:{kind:'steps',items:[
    ["1. Silence on Age","Neither Jesus nor the Epistles legislate a higher minimum age for marriage."],
    ["2. Obedience Mandate","Six NT texts command submission to emperors, governors, and human institutions."],
    ["3. Legal Consequence","Christians operated under Roman law (12 for girls, 14 for boys), which later entered Church canon law."]
   ]}}),
 sum:"With no marriage age stated in the New Testament and six passages commanding obedience to Roman rulers and laws, early Christians operated within Roman rules allowing marriage at twelve."});

/* 10. Romans 13 & Chrysostom's marriage analogy (#römer-argument) */
const RM=AV('römer-argument','1308108372188598405');
card(P+'romans-13-obedience-to-authorities',{
 title:"Romans 13:1–7, the Church Fathers & Chrysostom's failed analogy",
 k:"New Testament · Romans 13",
 blurb:"Nine patristic and Orthodox sources affirm strict obedience to existing rulers under Romans 13 — and why Chrysostom's marriage analogy collapses.",
 claim:"Romans 13 only refers to an abstract ideal of government, not concrete rulers and their laws.",
 tree:N(RM,
  "As John Chrysostom argued, Paul meant the abstract institution of authority is from God — just like marriage — not every existing ruler or law.",
  "Nine patristic and Orthodox authorities read Romans 13 as binding obedience to concrete rulers, and Chrysostom's marriage-analogy rescue contradicts the Greek text ('those existing are appointed', tetagmenai).",
  "Patristic witnesses & the Arabic NAV text on Romans 13",
  ["Arabic Bible (NAV, Bibleserver): Notably renders tribute in Romans 13:7 using the term al-jizyah.",
   "Augustine (Letter 153, §19): Even noting rulers in his day were Christian, cites Romans 13:1–7 universally — resisting authority resists God's providence and brings condemnation, since rulers bear the sword as God's ministers.",
   "Theodoret of Cyrus: Resisting supreme authority opposes God's command and incurs punishment; Paul treats taxes, commercial duties, fear, and respect as owed to rulers.",
   "Ephrem the Syrian & Ambrosiaster: Ephrem states authorities exist by God's will regardless of location or condition; Ambrosiaster warns those who mock human law that none escape God's judgment.",
   "Theophylact (11th c.) & Theophan the Recluse (19th c.): Teach that obeying rulers is obeying God, while disobeying them opposes the God who appointed them.",
   "Basil the Great, Constantius, S. W. Kochomski (19th c.) & 1 Clement 61: Basil stresses full obedience to leaders; Constantius links obedience to conscience; Kochomski rebukes 'pious pride' that rejects kings and judges; 1 Clement 61 prays that God guide rulers to exercise the power He gave them."],
  ["Romans 13:1–7","Augustine, Letter 153, §19","1 Clement 61","Theodoret of Cyrus, Ephrem, Ambrosiaster, Basil, Constantius, Theophylact, Theophan, Kochomski"],
  [N(RM,
    "John Chrysostom's marriage analogy (Homily 20 on Ephesians, §1) proves Paul didn't mean every concrete ruler is ordained by God.",
    "Chrysostom's analogy self-destructs on three counts: the Greek participle tetagmenai specifies concrete existing powers, the analogy makes resisting an invalid marriage equal to resisting God, and Paul makes no distinction between valid and invalid rulers.",
    "Deconstructing Chrysostom's marriage analogy",
    ["Chrysostom's claim (Homily 20 on Eph 5:22–33, §1): Argues that just as marriage as an institution is from God even though individual marriages involve sin, so authority as an institution is from God rather than each concrete ruler — yet in the same breath warns wives that if resisting secular authority rebels against God's ordinance, disobeying a husband does so even more.",
     "1. The rebellion contradiction: Paul writes 'whoever resists the authority resists what God has appointed.' If a concrete ruler were not appointed by God, resisting him would not be resisting God. On Chrysostom's analogy, trying to annul a sinful, invalid marriage would be rebelling against God — which is absurd.",
     "2. Concrete Greek wording (tetagmenai): Romans 13:1 says 'the authorities that exist (hai ousai) have been appointed (tetagmenai) by God' — plural, referring directly to concrete existing governments, not an abstract category.",
     "3. Collapse of the analogy: Everyone distinguishes between valid, God-pleasing marriages and invalid ones; Paul makes no such distinction among existing authorities, exposing Chrysostom's distinction as an apologetic invention absent from the text."],
    ["Romans 13:1–2 (Greek: hai ousai tetagmenai)","John Chrysostom, Homily 20 on Ephesians, §1"],
    [],
    {facts:[["Greek Term","tetagmenai (appointed, concrete plural)"],["Analogy","Chrysostom compares state power to marriage"],["Flaw 1","Makes annulling sinful marriage = fighting God"],["Flaw 2","Paul omits any valid/invalid distinction"]],
     visual:{kind:'compare',
      left:{title:"Chrysostom's Rescue",items:["Institution is from God, not every ruler","Compares secular power to marriage"]},
      right:{title:"Textual Reality (Rom 13:1)",items:["Uses plural concrete 'existing authorities' (tetagmenai)","Distinction between valid/invalid absent from Paul","Analogy would make resisting invalid marriage a sin"]}}})],
  {facts:[["Target Text","Romans 13:1–7"],["Arabic NAV","Uses al-jizyah in v. 7"],["Witnesses","Augustine, 1 Clement, Theodoret, Ephrem, Basil+"],["Key Critic","Chrysostom's analogy refuted"]],
   quotes:[
    {by:"1 Clement 61",en:"You, O Lord, gave them the authority to rule through Your exceeding and ineffable strength, that we, recognizing the glory and honor conferred upon them by You, may obey them, in nothing opposing Your will.",ref:"1 Clement 61"},
    {by:"John Chrysostom",en:"For if he who resists secular authority rebels against God's ordinance, how much more does a woman who is not subject to her husband.",ref:"Homily 20 on Ephesians, §1"}
   ]}),
 sum:"Church Fathers unanimously read Romans 13 as binding obedience to concrete rulers, and Chrysostom's attempt to restrict Paul to an abstract institution fails against the plural Greek participle tetagmenai."});

/* 11. Bardaisan (#bardesan) */
card(P+'bardaisan-marriage-and-motherhood-age',{
 title:"Bardaisan (2nd c.): Motherhood from age thirteen",
 k:"Early Christian Writer · Bardaisan",
 blurb:"The 2nd-century Syriac Christian writer Bardaisan treats childbearing from age 13 and fatherhood from 15 as natural norms.",
 claim:"Early 2nd-century Christians viewed motherhood before age 18 as unnatural.",
 tree:N(AV('bardesan','1286051018190356630'),
  "Second-century Christians regarded 13-year-old mothers as an aberration outside nature.",
  "Even Bardaisan of Edessa (a 2nd-century Syriac Christian author, though not an orthodox Church Father/saint) states matter-of-factly that human nature sets fatherhood from age 15 and motherhood from age 13.",
  "Bardaisan, Book of the Laws of Countries",
  ["Historical context: Bardaisan was a 2nd-century Christian thinker in Edessa (not canonized as an orthodox Church Father), reflecting early Christian assumptions about human biological maturity.",
   "Primary quote (New Advent Fathers 0862): 'The body, then, is governed by nature, and the soul also shares its experiences and sensations; and the body is neither hindered nor aided by fate in the several acts which it performs. For a man does not become a father before the age of fifteen, nor does a woman become a mother before the age of thirteen.'"],
  ["Bardaisan, Book of the Laws of Countries (New Advent 0862)"],
  [],
  {facts:[["Author","Bardaisan (2nd c. CE)"],["Status","Early Syriac Christian (non-orthodox)"],["Male Age","Fatherhood from 15"],["Female Age","Motherhood from 13"]],
   quotes:[
    {by:"Bardaisan",en:"For a man does not become a father before the age of fifteen, nor does a woman become a mother before the age of thirteen.",ref:"Book of the Laws of Countries (New Advent 0862)"}
   ]}),
 sum:"Second-century Christian writer Bardaisan describes nature as enabling motherhood from age 13 and fatherhood from 15, showing early Christians did not hold modern age thresholds."});

/* 12. Tertullian (#tertullian) */
card(P+'tertullian-marriage-at-first-menstruation',{
 title:"Tertullian: Marry at first menstruation without delay",
 k:"Church Father · Tertullian",
 blurb:"In On the Veiling of Virgins 11, Tertullian ties veiling and marriageability to first menstruation, urging parents not to delay.",
 claim:"The Church Fathers required mental adulthood before permitting a girl to marry.",
 tree:N(AV('tertullian','1287165907419791463'),
  "Early Church Fathers forbade parents from marrying off girls upon first menstruation and required adult mental maturity.",
  "In On the Veiling of Virgins, Chapter 11, Tertullian ties both veiling and eligibility for marriage directly to the onset of first menstruation — without stipulating mental maturity — and urges parents, rich or poor, not to delay marrying off their children early.",
  "Tertullian, On the Veiling of Virgins, Ch. 11",
  ["First menstruation as threshold: Tertullian writes that once a girl reaches her first menstruation, she ceases to be a child, must wear the veil, and may be given in marriage.",
   "No mental-maturity criterion: Because he sets only physical menarche without requiring mental maturity (rushd), even an eight-year-old experiencing early menstruation would qualify under his standard.",
   "Parental urgency: Tertullian explicitly exhorts parents — regardless of whether they are rich or poor — not to hesitate in marrying off their children early."],
  ["Tertullian, On the Veiling of Virgins (De Virginibus Velandis), Ch. 11"],
  [],
  {facts:[["Church Father","Tertullian (2nd–3rd c.)"],["Work","On the Veiling of Virgins, Ch. 11"],["Threshold","First menstruation"],["Mental Maturity","Not stipulated"]],
   visual:{kind:'steps',items:[
    ["1. Physical Trigger","First menstruation marks the end of childhood and requires the veil."],
    ["2. Marriageability","From first menstruation, a girl is eligible to be given in marriage — regardless of intellectual maturity."],
    ["3. Parental Duty","Rich and poor parents alike are urged not to delay marrying their children early."]
   ]}}),
 sum:"Tertullian (On the Veiling of Virgins 11) permits marriage from a girl's first menstruation with no mental-maturity requirement and urges parents not to delay early marriage."});

/* 13. Augustine's 10-year-old fiancée (#augustinus-kinder-ehe) */
card(P+'augustine-ten-year-old-fiancee',{
 title:"Augustine (age ~30–31) betrothed to a ten-year-old girl",
 k:"Church Father · Augustine",
 blurb:"In Confessions VI.13–14, a thirty-something Augustine agrees to wait two years for a 10-year-old girl to turn 12 — only taking a mistress because he was impatient.",
 claim:"St. Augustine would have recoiled in horror at betrothal to a 10-year-old or marriage at 12.",
 tree:N(AV('augustinus-kinder-ehe','1280096349550804992'),
  "Augustine never participated in child betrothal and upheld modern adult marriage ages.",
  "In Confessions Book VI, Chapters 13–14 (early 380s CE in Milan, when Augustine, born 354 CE, was ~30–31), he relates being betrothed to a girl two years under the Roman marriageable age of 12 (i.e., ~10 years old) — and admits he only failed to wait peacefully because he was 'a slave of lust.'",
  "Confessions Book VI, Chapters 13–14",
  ["Age calculation: Born in 354 CE, Augustine describes his early-380s Milan period in Confessions VI when he was around 30–31 years old.",
   "Betrothal to a ~10-year-old (Confessions VI.13): 'Nevertheless they pressed me; a maiden was sought in marriage whose age was nearly two years short of the marriageable age; yet because she was pleasing, they were willing to wait.' Since Roman legal marriageable age for girls was 12, 'nearly two years short' means approximately 10 years old.",
   "Impatience, not moral objection (Confessions VI.14): Augustine writes 'as though after two years I should receive her whom I was wooing,' admitting he was 'impatient of the delay,' 'not a lover of marriage, but a slave of lust,' and so 'I procured for myself another woman, though of course not a wife.'",
   "Takeaway: Neither Augustine, his devout mother, nor the girl's family saw anything wrong with a ~30-year-old man betrothed to a 10-year-old to marry her at 12."],
  ["Augustine, Confessions, Book VI, Ch. 13–14"],
  [],
  {facts:[["Church Father","Augustine (b. 354 CE; ~30–31 in Milan)"],["Fiancée's Age","~10 years old (2 yrs under 12)"],["Work","Confessions VI.13–14"],["Motive for Mistress","'Slave of lust,' impatient of 2-year wait"]],
   quotes:[
    {by:"Augustine",en:"A maiden was sought in marriage whose age was nearly two years short of the marriageable age; yet because she was pleasing, they were willing to wait.",ref:"Confessions, Book VI, Ch. 13"},
    {by:"Augustine",en:"Impatient of the delay, since I was not a lover of marriage, but a slave of lust, I procured for myself another woman, though of course not a wife.",ref:"Confessions, Book VI, Ch. 14"}
   ]}),
 sum:"At roughly age thirty, Augustine accepted betrothal to a ten-year-old girl to marry her at twelve (Confessions VI.13–14), taking a concubine in the meantime solely out of lustful impatience."});

/* 14. Augustine Letters 254–255 (#augustinus-kinder-ehe-2) */
const AU2=AV('augustinus-kinder-ehe-2','1313856680441675847');
card(P+'augustine-letters-254-255-child-betrothal',{
 title:"Augustine's Letters 254–255: Marrying off an underage ward",
 k:"Church Father · Epistles 254–255",
 blurb:"As bishop, Augustine doesn't reject marrying off a minor girl on moral grounds — he hesitates only until her mother arrives and because the suitor is still a pagan.",
 claim:"As a Christian bishop, Augustine strictly forbade prepubertal or minor betrothals.",
 tree:N(AU2,
  "Whatever Augustine did before his baptism, as Bishop of Hippo he treated minor marriage as inherently impossible and immoral.",
  "In Letters 254 and 255, Bishop Augustine approves the proposed marriage terms for an underage church ward whose talk of becoming a nun he dismisses as childish chatter — hesitating only out of deference to her absent mother's natural right and because the suitor's son is still a pagan.",
  "Letter 254 (to Bishop Benenatus) & Letter 255",
  ["Too young to be taken seriously (Letter 254, §1): Augustine describes the girl sheltered in the Church as too young yet to be assigned in marriage; when she says she wants to be a nun, he calls it 'rather the chatter of a prattler than the vow of a confessor.'",
   "Approving the terms & Felix's joy: Yet he tells Benenatus 'The terms you were pleased to mediate do not displease me, if she intends to marry,' and notes her uncle-in-law Felix 'was not reluctant to hear of it, indeed he even rejoiced' (only saddened not to be informed in writing).",
   "Mother's priority over prepubertal marriage: Augustine writes that 'the mother, whose will in giving her daughter in marriage is, I think, naturally given priority over all others, unless the girl herself is of that age in which by freer permission she may choose for herself' — acknowledging the mother's right to arrange the match before the girl reaches independent age.",
   "Letter 255 (to the pagan father): Augustine explains he dares not promise the girl yet not because of her youth, but because the suitor's son is still a pagan: 'a Christian girl can only be given by us to a Christian... even though if I had what I spoke of regarding your son, not only as a promise, I would already rejoice that it were already a firm bond!'"],
  ["Augustine, Letter 254 (to Benenatus) & Letter 255","mlat.uzh.ch/browser/14954:73","wesleyscholar.com (Augustine Letters 211–270)"],
  [N(AU2,
    "Augustine never meant a minor's marriage could be valid below puberty.",
    "The eminent Jesuit scholar Johannes Bollandus explicitly reads Letter 254 as implying that with the mother's consent, a daughter's marriage could be valid even below puberty.",
    "Johannes Bollandus's commentary on Letter 254",
    ["Positive law vs. natural law: Citing canonists (Schmalzgrueber, lib. IV, Jur. Eccles., tit. II, n. 49), Bollandus argues age impediments belong to positive ecclesiastical law (which the Church may change or dispense), not unchangeable natural law.",
     "Explicit verdict on Augustine: 'Certainly St. Augustine did not consider the marriage of a minor impossible when he wrote to Benenatus the bishop (Letter 254 / 233)... With these last words he seems to imply that, if the mother consented to the marriage, the daughter's marriage could be valid even below the age of puberty.'"],
    ["Johannes Bollandus, commentary citing Augustine Ep. 254 (233) & Schmalzgrueber IV.2 n. 49"],
    [],
    {facts:[["Commentator","Johannes Bollandus (Jesuit)"],["Canonist Cited","Schmalzgrueber, Jur. Eccles. IV.2 n. 49"],["Legal Category","Positive law, not natural law"],["Conclusion","Valid below puberty if mother consented"]],
     quotes:[
      {by:"Johannes Bollandus",en:"Certainly St. Augustine did not consider the marriage of a minor impossible when he wrote to Benenatus the bishop... With these last words he seems to imply that, if the mother consented to the marriage, the daughter's marriage could be valid even below the age of puberty.",ref:"On Augustine, Letter 254 (233)"}
     ]})],
  {facts:[["Letters","Augustine, Ep. 254 & Ep. 255"],["Girl's Status","Too young to take vows seriously"],["Real Obstacle","Suitor's son was still a pagan"],["Bollandus","Implies validity below puberty via mother"]],
   quotes:[
    {by:"Augustine",en:"In these years it is such that even what she says she wants — to become a nun — is rather the chatter of a prattler than the vow of a confessor... The mother, whose will in giving her daughter in marriage is, I think, naturally given priority over all others, unless the girl herself is of that age in which by freer permission she may choose for herself.",ref:"Letter 254, §1"},
    {by:"Augustine",en:"Even though if I had what I spoke of regarding your son [his Christian faith], not only as a promise, I would already rejoice that it were already a firm bond!",ref:"Letter 255"}
   ]}),
 sum:"In Letters 254–255, Bishop Augustine welcomes a marriage proposal for a girl too young to be taken seriously, recognizing her mother's right to give her away and stalling mainly because the groom was still a pagan — as Bollandus confirms."});

/* 15. Medieval Canon Law & Papal Decretals (#zusammenfassung-1900) */
const Z19=AV('zusammenfassung-1900','1290991016274559028');
card(P+'canon-law-decretals-on-child-marriage',{
 title:"Papal decretals & canon law: 12 years, consummation & silence",
 k:"Canon Law · Decretals",
 blurb:"Popes Hormisdas, Nicholas, Alexander III, and Clement III set 12/14 as normal — yet validated marriages under 12 via consummation, 'peace,' or silence.",
 claim:"Catholic canon law strictly banned all marriage and sexual consummation below puberty and required explicit adult consent.",
 tree:N(Z19,
  "Medieval Church law forbade child marriage under 12 and automatically annulled any underage union.",
  "While papal decretals set 12 for girls and 14 for boys as the ordinary rule, Popes Alexander III, Clement III, Hormisdas, and Nicholas upheld prepubertal marriages when consummated, arranged 'for peace,' or unprotested — and trusted a husband's oath over the girl's denial.",
  "Alexander III, Gratian, Hormisdas & Nicholas",
  ["Standard age (Pope Alexander III): 'Videlicet, vir a quartodecimo, mulier a duodecimo anno, [...] matrimonium contrahere possunt' — boys from 14, girls from 12 may contract marriage.",
   "Gratian (Decretum / Concordia discordantium canonum, 1140/1160, Causa XX, Q. I): Notes a girl is considered marriageable and free to decide after her twelfth year without parental compulsion.",
   "Consummation under 12 overrides the age rule (Alexander III): 'Si ante nubiles annos, in domo mariti, uxor cognoscatur ab eo, statim efficiuntur coniuges' — if a wife is carnally known by her husband in his house before marriageable years, they immediately become spouses ('...si, ut asseris, eam cognovit, matrimonium inter eos esse, firmiter teneas').",
   "Fathers marrying off minor sons (Pope Hormisdas to Bishop Eusebius, c. 1): A father cannot force an adult son, yet if the son is a minor whose will is not discernible, the father may marry him off at will and the son must fulfill it upon coming of age.",
   "Prepubescent marriage 'for peace' (Pope Nicholas, c. 2): Two prepubescents, or a prepubescent and an older person, may be married 'for reasons of peace' (even family disputes) despite lack of consent where an urgent reason tolerates the union."],
  ["legalhistorysources.com/Canon Law/MARRIAGELAW.htm","Gratian, Decretum, C. XX, Q. I; C. 33 q. 1 c. 3","Pope Alexander III (Decretals)","Pope Hormisdas (c. 1)","Pope Nicholas (c. 2)"],
  [N(Z19,
    "At least a girl who never consented could get an annulment once she grew up.",
    "Decretals to Norwich, Genoa, and Bath, plus Pope Clement III (X 4.2.10), blocked annulment whenever the husband swore he had sex with her or she failed to protest in time.",
    "Bishop of Norwich, Clement III (X 4.2.10), Genoa & Bath",
    ["Decretal to the Bishop of Norwich (citing Gratian, Decretum C. 33 q. 1 c. 3): A girl under marriageable age was handed over (parents claiming she was of age); upon coming of age she sought to marry another, denying consent and intercourse. The man swore she was ~11–12 and he had consummated it. Ruling: under C. 33 q. 1 c. 3, the husband's oath is believed over the woman's denial, and if ~11–12, betrothed, blessed, and carnally known, they may not be separated.",
     "Pope Clement III — silence equals consent (X 4.2.10): 'She should not be heard against her marriage, because she never protested before she was lawfully known, as she could have done when she reached marriageable age. Under canon law [X 4.2.10] she could have protested before giving lawful consent in her twelfth year. Since upon reaching legal age she consented to even a single act of sexual intercourse, her silence at that time unmistakably showed her consent.'",
     "Alexander III to the Archbishop of Genoa (c. 9): Minors betrothed/married who seek divorce for minority or coercion shall NOT be separated if they were old enough for intercourse and consented (or consented after coercion).",
     "Alexander III to the Bishop of Bath (c. 8): Prepubescents may not be separated before puberty, and afterward only if they reject it — provided no sexual intercourse occurred. (Also, betrothal with a prepubescent over age 7 creates an impediment of public propriety.)"],
    ["Decretal to Bishop of Norwich (Gratian C. 33 q. 1 c. 3)","Pope Clement III, X 4.2.10","Alexander III to Archbishop of Genoa (c. 9)","Alexander III to Bishop of Bath (c. 8)"],
    [],
    {facts:[["Norwich Case","~11–12 yr old; husband's oath believed over hers"],["Clement III (X 4.2.10)","Silence in 12th year = irrevocable consent"],["Genoa (c. 9) & Bath (c. 8)","Sexual intercourse bars annulment"],["Over Age 7","Betrothal creates legal impediment"]],
     quotes:[
      {by:"Pope Clement III",en:"She should not be heard against her marriage, because she never protested before she was lawfully known... Since upon reaching legal age she consented to even a single act of sexual intercourse, her silence at that time unmistakably showed her consent.",ref:"X 4.2.10"},
      {by:"Bishop of Norwich Decretal",en:"The Decretum (C. 33 q. 1 c. 3) expressly declares that when a husband claims he consummated the marriage with his wife and the wife denies it, the husband is regarded as credible when he testifies to it under oath.",ref:"C. 33 q. 1 c. 3"}
     ]})],
  {facts:[["Regular Ages","12 for girls, 14 for boys"],["Alexander III","Sex under 12 makes them spouses at once"],["Nicholas (c. 2)","Prepubescent + adult allowed 'for peace'"],["Hormisdas (c. 1)","Father may bind minor son"]],
   quotes:[
    {by:"Pope Alexander III",en:"Si ante nubiles annos, in domo mariti, uxor cognoscatur ab eo, statim efficiuntur coniuges (If before marriageable years, in the husband's house, the wife is carnally known by him, they immediately become spouses).",ref:"Canon Law Marriage Decretals"},
    {by:"Pope Alexander III",en:"...si, ut asseris, eam cognovit, matrimonium inter eos esse, firmiter teneas (...if, as you assert, he has carnally known her, you shall firmly hold that a marriage exists between them).",ref:"Canon Law Marriage Decretals"}
   ],
   visual:{kind:'steps',items:[
    ["1. Normal Threshold","12 for girls, 14 for boys — though betrothal over age 7 creates an impediment of public propriety."],
    ["2. Consummation Override","If a husband sleeps with a girl under 12 in his house, Alexander III declares them immediately married."],
    ["3. Burden of Proof & Silence","Under C. 33 q. 1 c. 3 the husband's oath overrides the girl's denial; under Clement III (X 4.2.10) her silence at 12 seals consent."]
   ]}}),
 sum:"Medieval papal decretals set 12/14 as the default yet explicitly validated marriages under 12 upon sexual consummation, parental arrangement for peace, or a girl's silence at age twelve — trusting the husband's oath over hers."});

/* 16. Thomas Aquinas (#thomas-aquinas-kinder-ehe) */
card(P+'thomas-aquinas-child-marriage',{
 title:"Thomas Aquinas: Prepubertal marriage & sex under twelve",
 k:"Scholasticism · Thomas Aquinas",
 blurb:"Aquinas holds that if mental/bodily inclination develops early, marriage and sex before 12 are indissoluble — even without a guardian.",
 claim:"Thomas Aquinas taught that marriage or sexual union before age 12 is always invalid in Catholic theology.",
 tree:N(AV('thomas-aquinas-kinder-ehe','1286068425776693414'),
  "Aquinas strictly barred marriage and marital intercourse before age 12 for girls and 14 for boys.",
  "In both his Sentences commentary / Summa Supplementum (q. 58, a. 5) and Contra doctrinam retrahentium a religione (Ch. 11), Aquinas teaches that positive law's 12/14 threshold admits exceptions: if nature and reason develop early, 'malice/maturity supplies for age' (malitia suppleret aetatem), a child under 12 needs no guardian to consent, and prepubertal intercourse makes the marriage indissoluble.",
  "Aquinas, Supplementum q. 58 a. 5 & Contra doctrinam Ch. 11",
  ["Summa Theologiae Supplementum q. 58, a. 5 (parallel: Sent. IV, D. 36, Q. 1, A. 5, ad 3): Explains that positive law normally sets the age of discretion for marriage at 14 for males and 12 for females (citing Cap. Tua, De sponsal. impub.). Yet because law looks to what happens in most cases, 'if anyone attains the required maturity before the aforesaid age, so that nature and reason are sufficiently developed to supply for the lack of years, the marriage is not annulled. Hence, even if the spouses have sexual intercourse before puberty, prior to the aforesaid age, the marriage remains indissoluble.'",
   "No guardian required under 12 (Reply to Objection 1): Because nature inclines toward marriage, less development of reason is needed than in financial contracts; hence 'it is possible to consent to marriage after deliberation before one is able to manage one's own affairs in other matters without a guardian.'",
   "Disciples & Contra doctrinam retrahentium a religione, Ch. 11: Aquinas's closest friends and students cited his original Sentences work; in Contra doctrinam 11, Aquinas notes 12 for girls and 14 for boys is ordinarily puberty, yet a prepubescent who is doli capax (capable of guile/discernment) can bind himself by vow — explicitly comparing it to marriage under 12: 'mental maturity supplies for the lacking age, just as is the case in carnal marriage (malitia suppleret aetatem sicut in matrimonio carnali).'"],
  ["Thomas Aquinas, ST Supplementum q. 58 a. 5","Thomas Aquinas, Sentences IV, D. 36, Q. 1, A. 5, ad 3 (aquinas.cc)","Thomas Aquinas, Contra doctrinam retrahentium a religione, Ch. 11","Cap. Tua, De sponsalibus impuberum"],
  [],
  {facts:[["Theologian","Thomas Aquinas (13th c.)"],["Normal Ages","12 for girls, 14 for boys"],["Exception","Prepubertal sex renders marriage indissoluble"],["Latin Maxim","malitia suppleret aetatem (maturity supplies for age)"]],
   quotes:[
    {by:"Thomas Aquinas",en:"If anyone attains the required maturity before the aforesaid age, so that nature and reason are sufficiently developed to supply for the lack of years, the marriage is not annulled. Hence, even if the spouses have sexual intercourse before puberty, prior to the aforesaid age, the marriage remains indissoluble.",ref:"ST Supplementum q. 58 a. 5 / Sent. IV D. 36 Q. 1 A. 5"},
    {by:"Thomas Aquinas",en:"...it seemed that mental maturity supplies for the lacking age, just as is the case in carnal marriage (malitia suppleret aetatem sicut in matrimonio carnali).",ref:"Contra doctrinam retrahentium a religione, Ch. 11"}
   ]}),
 sum:"Aquinas explicitly teaches that a girl under 12 needs no guardian to consent to marriage, that early maturity supplies for lacking years, and that prepubertal intercourse leaves the marriage indissoluble."});

/* 17. Calvin & Theodore Beza (#sex-marriages-buch) */
card(P+'calvin-and-beza-child-marriage',{
 title:"John Calvin & Theodore Beza on consummated child marriages",
 k:"Reformation · Calvin & Beza",
 blurb:"Historical scholarship on Geneva records Calvin keeping early marriages valid upon later consent, and Beza binding unions consummated at ages 8–11.",
 claim:"The Protestant Reformation completely abolished all recognition of marriages involving 8–11-year-old girls.",
 tree:N(AV('sex-marriages-buch','1286064617877012527'),
  "The Protestant Reformers banned every form of marriage below modern adulthood without exception.",
  "As documented in historical scholarship on Reformed marriage law (Sex, Marriage, and Family in John Calvin's Geneva, p. 213), Calvin held underage marriages remain valid if the parties consent upon maturity, and Theodore Beza ruled that if an 8–11-year-old girl experiencing early puberty consummates the marriage, the union stands.",
  "John Calvin (1500s) and Theodore Beza (1530s/1560s)",
  ["Source: Sex, Marriage, and Family in John Calvin's Geneva (Google Books ID IlWH2jHaj1YC), p. 213.",
   "John Calvin (p. 213): Holds that one should not marry before the proper age; however, if it occurs and the parties consent to the marriage once they reach maturity, the marriage remains valid.",
   "Theodore Beza (p. 213): Holds that one may not marry children who cannot yet speak; however, if a girl is between puberty and a child who cannot speak, she may enter marriage — if she reaches puberty early (for example at 8–11 years old) and sexual intercourse is consummated, the marriage remains binding."],
  ["Sex, Marriage, and Family in John Calvin's Geneva, p. 213 (Google Books IlWH2jHaj1YC)"],
  [],
  {facts:[["Source","Calvin's Geneva Marriage Law, p. 213"],["Calvin","Valid if parties consent at maturity"],["Beza","Consummation at 8–11 (early puberty) binds marriage"],["Threshold Excluded","Only children too young to speak"]],
   visual:{kind:'compare',
    left:{title:"John Calvin (p. 213)",items:["Advises against marrying underage","Yet if contracted, remains valid if both consent at maturity"]},
    right:{title:"Theodore Beza (p. 213)",items:["Forbids marriage with children too young to speak","Allows marriage if early puberty occurs at 8–11 and intercourse is consummated"]}}}),
 sum:"Reformed leaders did not uniformly reject child marriage: Calvin validated underage unions confirmed at maturity, and Theodore Beza treated marriage consummated during early puberty (8–11) as binding."});

/* 18. Australian Royal Commission & UNICEF Data (#repsonse-to-child-abuse-australien) */
card(P+'institutional-abuse-and-unicef-data',{
 title:"Institutional child abuse in churches & UNICEF marriage statistics",
 k:"Modern History · Abuse & Statistics",
 blurb:"The Australian Royal Commission exposed systematic abuse across four Christian bodies, while UNICEF shows high child-marriage rates in Christian-majority states.",
 claim:"Child abuse and underage marriage are uniquely Islamic problems, absent from modern Christian institutions and Christian-majority nations.",
 tree:N(AV('repsonse-to-child-abuse-australien','1286052194399027200'),
  "Christian churches and Christian-majority countries do not suffer from systemic child sexual abuse or high rates of marriage under 18.",
  "Australia's Royal Commission into Institutional Responses to Child Sexual Abuse (Vol. 16) documented systemic abuse and cover-ups across Catholic, Anglican, Jehovah's Witness, and Salvation Army institutions, while UNICEF data records 26%–61% under-18 marriage rates in overwhelmingly Christian nations.",
  "Australian Royal Commission & UNICEF child-marriage data",
  ["Catholic Church (Royal Commission Vol. 16, Book 1): Identified as a central institution of systematic child sexual abuse across schools and orphanages, with decades of cover-ups in which senior church officials protected perpetrators instead of reporting them.",
   "Anglican Church: Extensively investigated for abuse in boarding schools and church facilities, repeatedly failing to report offenses to civil authorities or respond appropriately.",
   "Jehovah's Witnesses: Criticized for running internal investigations and withholding child sexual abuse reports from police and external authorities.",
   "Salvation Army: Severe child abuse uncovered in orphanages and care institutions operated by the Salvation Army.",
   "UNICEF global child-marriage rates (unicef.de): While polemicists spotlight Muslim-majority countries, UNICEF lists high under-18 marriage rates in predominantly Christian nations: Central African Republic 61% (~90% Christian), Mozambique 53% (~56% Christian vs. 17–20% Muslim), South Sudan 52% (~75% Christian), Cuba 29% (~85% Christian), and Brazil 26% (~90% Christian)."],
  ["Australian Royal Commission into Institutional Responses to Child Sexual Abuse, Final Report Vol. 16, Book 1","UNICEF Germany: Child Marriage Worldwide (unicef.de/.../274028)"],
  [],
  {facts:[["Inquiry","Australian Royal Commission Vol. 16"],["Churches Cited","Catholic, Anglican, JW, Salvation Army"],["UNICEF Peak","CAR 61% (~90% Christian)"],["Other States","Mozambique 53%, S. Sudan 52%, Cuba 29%, Brazil 26%"]],
   visual:{kind:'compare',
    left:{title:"Australian Royal Commission",items:["Catholic: schools, orphanages, decades of cover-up","Anglican: boarding schools, failure to report","Jehovah's Witnesses: internal trials, no police report","Salvation Army: orphanages & care homes"]},
    right:{title:"UNICEF Marriage Under 18",items:["Central African Republic: 61% (~90% Christian)","Mozambique: 53% (~56% Christian)","South Sudan: 52% (~75% Christian)","Cuba 29% (~85% Chr.) · Brazil 26% (~90% Chr.)"]}}}),
 sum:"The Australian Royal Commission exposed decades of systemic abuse and cover-ups across four Christian bodies, while UNICEF figures show 26%–61% under-18 marriage rates in overwhelmingly Christian countries."});
})();
