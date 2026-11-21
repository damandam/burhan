/* Christianity AV batch 6 (Paul & related) — 2026-11-21. Averroes “Paulus falscher prophet” (13 channels).
   All 13 channels placed under christianity/church/d-ia-paul-related/<clean-slug>.
   Scans / attachments to capture:
   - #paulus-tot-widerspruch (1294819867471646790): 2 PDFs (Unbenanntes_Dokument_54.pdf, Unbenanntes_Dokument_55.pdf).
   - #jesus-erlaubt-begrabung-nicht (1286395791996485673): 2 images (IMG_3543.png, temp_image_EA1F2436-8471-4A21-A332-AF754A2B6052.webp). */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P='christianity/church/d-ia-paul-related/';

/* 1. #asien-argument */
card(P+'asia-rejected-paul',{
 title:"All in Asia turned away from Paul (2 Tim 1:15 & Rev 2:2)",
 k:"Paul · Asia Minor",
 blurb:"Paul reports that everyone in Asia abandoned him, while Revelation praises Ephesus for testing and rejecting false apostles.",
 claim:"Paul's apostolic authority was universally accepted by the churches he founded in Asia Minor.",
 tree:N(AV('asien-argument','1289913481973469273'),
  "Paul was revered across the churches of Asia Minor as Christ's undisputed apostle.",
  "Paul's own letters and Acts record widespread rejection and upheaval against him in Asia Minor—culminating in 2 Timothy 1:15's admission that 'all who are in Asia turned away from me,' right alongside Revelation 2:2's praise of the Ephesian church for testing self-proclaimed apostles and exposing them as liars.",
  "Rejection across Asia & Ephesus's test of false apostles",
  ["2 Timothy 1:15 (all in Asia turned away): Paul explicitly writes to Timothy that 'all who are in Asia turned away from me, among whom are Phygelus and Hermogenes,' indicating a broad rejection of his person or teaching in the very province where he labored longest.",
   "Revelation 2:2 (Ephesus commended): Jesus commends the church in Ephesus because they 'cannot bear those who are evil, but have tested those who call themselves apostles and are not, and found them to be false.'",
   "Revelation 2:4–5 (internal crisis): Despite this praise, the Ephesian church is warned 'you have abandoned the love you had at first; remember therefore from where you have fallen; repent, and do the works you did at first,' showing ongoing internal spiritual turbulence.",
   "Galatians 1:6–7 (churches deserting Paul's gospel): Paul himself expresses astonishment that the Galatian communities 'are so quickly deserting him who called you in the grace of Christ and are turning to a different gospel,' demonstrating sharp doctrinal conflict with his converts.",
   "2 Corinthians 11:13 (competing apostles): Paul attacks rival missionaries as 'false apostles, deceitful workmen, disguising themselves as apostles of Christ,' underscoring fierce rivalry over apostolic legitimacy."],
  ["2 Timothy 1:15","Revelation 2:2, 4–5","Acts 19:9, 23–27","1 Corinthians 15:32","2 Corinthians 1:8; 11:13","Galatians 1:6–7"],
  [
   N(AV('asien-argument','1289913481973469273'),
    "That rejection in Asia was only minor friction with outsiders, not serious conflict inside Ephesus.",
    "Acts and 1–2 Corinthians depict intense hostility specifically centered on Ephesus and the province of Asia—forcing Paul to separate disciples, face a city-wide riot, and describe his ordeal as fighting wild beasts and despairing of life.",
    "Acts & Corinthians on the Asian upheaval",
    ["Acts 19:9 (separation in Ephesus): When some became stubborn and disbelieved, 'speaking evil of the Way before the congregation,' Paul withdrew from them, took the disciples with him, and reasoned daily in the hall of Tyrannus.",
     "Acts 19:23–27 (Demetrius's riot): A silversmith named Demetrius sparked a major uprising in Ephesus against Paul's teaching because it threatened their shrine trade.",
     "1 Corinthians 15:32 ('wild beasts at Ephesus'): Paul writes, 'If I fought with beasts at Ephesus after the manner of men, what does it profit me?'—symbolizing violent opposition in the city.",
     "2 Corinthians 1:8 (affliction in Asia): Paul stresses to the Corinthians, 'we do not want you to be unaware, brothers, of the affliction we experienced in Asia,' confirming severe crises in the province."],
    ["Acts 19:9, 23–27","1 Corinthians 15:32","2 Corinthians 1:8"],[],
    {visual:{kind:'steps',items:[
      ["Step 1 · Resistance in Ephesus","Acts 19:9 & 19:23–27 record stubborn rejection, separation of disciples, and Demetrius's riot."],
      ["Step 2 · Severe ordeal in Asia","1 Cor 15:32 ('wild beasts at Ephesus') and 2 Cor 1:8 ('affliction in Asia') confirm fierce hostility."],
      ["Step 3 · Total defection","2 Tim 1:15 admits 'all who are in Asia turned away from me,' naming Phygelus and Hermogenes."],
      ["Step 4 · Ephesus praised","Rev 2:2 praises Ephesus for testing self-styled apostles and exposing them as liars."]
     ]}})
  ],
  {facts:[["Key Admission","2 Timothy 1:15 ('all in Asia turned away')"],["Ephesus Praise","Revelation 2:2 (tested false apostles)"],["Named Defectors","Phygelus & Hermogenes"],["Supporting Texts","Acts 19; Gal 1:6–7; 1–2 Cor"]],
   quotes:[
    {by:"2 Timothy 1:15",en:"You are aware that all who are in Asia turned away from me, among whom are Phygelus and Hermogenes.",ref:"2 Timothy 1:15"},
    {by:"Revelation 2:2",en:"I know your works, your toil and your patient endurance, and how you cannot bear with those who are evil, but have tested those who call themselves apostles and are not, and found them to be false.",ref:"Revelation 2:2"}
   ]}),
 sum:"Paul himself admits that 'all who are in Asia turned away from me' (2 Tim 1:15), while Revelation 2:2 commends Ephesus—Paul's Asian stronghold—for testing self-proclaimed apostles and finding them to be liars."});

/* 2. #in-briefen-anders-als-in-echt */
card(P+'paul-letters-vs-in-person',{
 title:"Bold in letters, weak and unimpressive in person (2 Cor 10)",
 k:"Paul · Credibility",
 blurb:"Even Paul's own Corinthian converts noted the jarring gap between his forceful letters and his weak personal presence.",
 claim:"Paul commanded natural prophetic awe and authority whenever he appeared in person.",
 tree:N(AV('in-briefen-anders-als-in-echt','1289921439813865473'),
  "Paul's personal presence matched the towering authority of his epistles.",
  "Paul himself quotes his detractors' assessment without refuting the facts of his appearance or speech: 'His letters are weighty and strong, but his bodily presence is weak, and his speech of no account'—a contrast Paul echoes in 2 Corinthians 10:1.",
  "Two-faced contrast: bold from afar, timid face-to-face",
  ["2 Corinthians 10:10–11 (critics' verdict): Opponents observe that while Paul writes commanding, forceful letters from a distance, in person his bodily presence is weak and his spoken delivery contemptible.",
   "2 Corinthians 10:1 (Paul's self-description): Paul opens the chapter by acknowledging the very same contrast: 'I, Paul, myself entreat you, by the meekness and gentleness of Christ—I who am humble when face to face with you, but bold toward you when I am away!'",
   "Rhetorical implication: His authority depended heavily on written rhetoric at a distance rather than commanding presence or prophetic speech in person."],
  ["2 Corinthians 10:1, 10–11"],[],
  {facts:[["Text","2 Corinthians 10:1, 10–11"],["Written Persona","Weighty, strong, bold from afar"],["In-Person Reality","Weak presence, contemptible speech"],["Audience","Church in Corinth"]],
   quotes:[
    {by:"2 Corinthians 10:10",en:"For they say, 'His letters are weighty and strong, but his bodily presence is weak, and his speech of no account.'",ref:"2 Corinthians 10:10"},
    {by:"2 Corinthians 10:1",en:"I, Paul, myself entreat you, by the meekness and gentleness of Christ—I who am humble when face to face with you, but bold toward you when I am away!",ref:"2 Corinthians 10:1"}
   ],
   visual:{kind:'compare',
    left:{title:"Paul in his letters (at a distance)",items:["Weighty and forceful","Bold and commanding (2 Cor 10:1)","Controls congregations through epistles"]},
    right:{title:"Paul in person (face to face)",items:["'Bodily presence is weak' (2 Cor 10:10)","'Speech of no account / contemptible'","'Humble / unimpressive when face to face' (2 Cor 10:1)"]}}}),
 sum:"2 Corinthians 10:1 and 10:10–11 confirm a stark gap between Paul's forceful letters from afar and his weak bodily presence and contemptible speech in person."});

/* 3. #aussehen */
card(P+'pauls-physical-appearance',{
 title:"Paul's physical appearance and 'thorn in the flesh'",
 k:"Paul · Biography",
 blurb:"Scripture, the Acts of Paul and Thecla, and John Chrysostom depict Paul as physically unimpressive next to Barnabas.",
 claim:"Early Christian sources remember Paul as physically imposing and dignified.",
 tree:N(AV('aussehen','1289923253564997632'),
  "Early Christian tradition remembers Paul as dignified in stature and free of bodily infirmity.",
  "Four converging witnesses—2 Corinthians 10:10–11, 2 Corinthians 12:7–10, the Acts of Paul and Thecla, and John Chrysostom's Homilies on Acts—portray Paul as physically weak, small, bow-legged, bald, and afflicted by a recurring 'thorn in the flesh,' contrasting sharply with Barnabas's dignified bearing.",
  "Paul's bodily weakness in NT & early tradition",
  ["2 Corinthians 10:10–11 (weak presence): As noted in Corinth, Paul's 'bodily presence is weak and his speech contemptible,' pointing directly to an unimpressive physical bearing.",
   "2 Corinthians 12:7–10 ('thorn in the flesh'): Paul describes 'a thorn was given me in the flesh, a messenger of Satan to harass me,' which he prayed three times to have removed—commonly understood by commentators as a chronic physical infirmity or disfigurement impairing his strength and appearance.",
   "Acts of Paul and Thecla (physical portrait): Early Christian tradition preserves a concrete description of Paul as 'a man of small stature, bald-headed, with crooked legs, in good bodily condition, with eyebrows meeting, and a somewhat hooked nose.'",
   "John Chrysostom, Homily 30 on Acts (on Acts 13:42 / 14:11–12): Explaining why the Lystrans mistook Barnabas for Zeus and Paul for Hermes, Chrysostom remarks: \"'They called Barnabas Zeus, and Paul Hermes' (vv. 11–12). I suppose Barnabas had a dignified appearance.\""],
  ["2 Corinthians 10:10–11","2 Corinthians 12:7–10","Acts of Paul and Thecla 3","John Chrysostom, Homilies on Acts, Homily 30 (CCEL)"],[],
  {facts:[["NT Evidence","2 Cor 10:10–11; 12:7–10"],["Physical Infliction","'Thorn in the flesh, messenger of Satan'"],["Apocryphal Portrait","Small, bald, bow-legged, hooked nose"],["Church Father","Chrysostom: Barnabas looked dignified"]],
   quotes:[
    {by:"2 Corinthians 12:7–9",en:"So to keep me from becoming conceited because of the surpassing greatness of the revelations, a thorn was given me in the flesh, a messenger of Satan to harass me, to keep me from becoming conceited. Three times I pleaded with the Lord about this, that it should leave me. But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'",ref:"2 Corinthians 12:7–9"},
    {by:"Acts of Paul and Thecla",en:"A man of small stature, bald-headed, with crooked legs, in good bodily condition, with eyebrows meeting, and a somewhat hooked nose.",ref:"Acts of Paul and Thecla, §3"},
    {by:"John Chrysostom (344–407 CE)",en:"'They called Barnabas Zeus, and Paul Hermes' (vv. 11–12). I suppose Barnabas had a dignified appearance.",ref:"Homilies on the Acts of the Apostles, Homily 30 (on Acts 13:42 / 14:11–12)"}
   ]}),
 sum:"Between 2 Corinthians 10:10 and 12:7, the Acts of Paul and Thecla, and John Chrysostom's Homily 30 on Acts, Paul is consistently remembered as small, physically afflicted, and far less dignified than Barnabas."});

/* 4. #klein-im-himmelreich */
card(P+'paulus-least-in-kingdom',{
 title:"'Called least in the kingdom' — Matthew 5:19 & the name Paulus",
 k:"Paul · Torah & Title",
 blurb:"Jesus says whoever relaxes the least commandment and teaches others so shall be called 'least'—and 'Paulus' literally means 'little/least'.",
 claim:"Jesus' warning in Matthew 5:19 against relaxing the Law has no bearing on Paul.",
 tree:N(AV('klein-im-himmelreich','1289928409270456350'),
  "Matthew 5:19 is just a general warning and says nothing suggestive about Paul.",
  "In Matthew 5:17–19 Jesus declares that not an iota or dot will pass from the Law, and warns that whoever relaxes one of the least commandments and teaches men so 'will be called the little one / least in the kingdom of heaven'—while Latin 'Paulus' literally means 'small / little,' and those who keep and teach the Law are 'called great' (highly praised, echoing Ahmad ﷺ).",
  "Law-breaker ('the little one') vs. Law-keeper ('great / praised')",
  ["Matthew 5:17–19 (Jesus on the Law): Jesus insists he did not come to abolish the Law or the Prophets, and warns: 'Whoever relaxes one of the least of these commandments and teaches others to do the same will be called least [the little one] in the kingdom of heaven, but whoever does them and teaches them will be called great in the kingdom of heaven.'",
   "Etymology of 'Paulus': The Latin name Paulus literally means 'small' or 'the little one'—matching both his description in the Acts of Paul and Thecla ('a man of small stature, bald-headed, with crooked legs, in good bodily condition, with eyebrows meeting, and a somewhat hooked nose') and the verdict of Matthew 5:19 upon one who teaches relaxation of the Mosaic commandments.",
   "Meaning of 'called great' (Ahmad ﷺ): Calling someone 'great' means praising and exalting him highly for upholding and teaching divine law—which resonates with the name of the Prophet Muhammad ﷺ, Aḥmad ('the most praised / highly praised')."],
  ["Matthew 5:17–19","Acts of Paul and Thecla 3"],[],
  {facts:[["Gospel Verdict","Matthew 5:17–19"],["Latin 'Paulus'","Literally 'small / the little one'"],["Law-Keeper Title","'Great' = highly praised (cf. Aḥmad ﷺ)"],["Early Description","Small in stature (Acts of Paul & Thecla)"]],
   quotes:[
    {by:"Matthew 5:17–19",en:"Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them. For truly, I say to you, until heaven and earth pass away, not an iota, not a dot, will pass from the Law until all is accomplished. Therefore whoever relaxes one of the least of these commandments and teaches others to do the same will be called least in the kingdom of heaven, but whoever does them and teaches them will be called great in the kingdom of heaven.",ref:"Matthew 5:17–19"},
    {by:"Acts of Paul and Thecla",en:"A man of small stature, bald-headed, with crooked legs, in good bodily condition, with eyebrows meeting, and a somewhat hooked nose.",ref:"Acts of Paul and Thecla, §3"}
   ],
   visual:{kind:'compare',
    left:{title:"Relaxes the commandments (Matt 5:19a)",items:["Teaches others to set aside the Law","Called 'least / the little one' (Paulus)","Latin Paulus literally means 'small / little'"]},
    right:{title:"Does and teaches the Law (Matt 5:19b)",items:["Upholds the Mosaic commandments","Called 'great' (highly praised & exalted)","Echoes Aḥmad ﷺ ('the most praised')"]}}}),
 sum:"Jesus warns that whoever teaches others to relax the Law shall be called 'the little one' (Paulus means 'small'), whereas whoever keeps and teaches God's law is called 'great'—highly praised."});

/* 5. #barnabas-besser-als-paulus */
card(P+'barnabas-zeus-paul-hermes',{
 title:"Barnabas called Zeus, Paul called Hermes (Acts 14:8–18)",
 k:"Paul · Acts 14",
 blurb:"The pagans of Lystra ranked Barnabas as Zeus (supreme god) and Paul as Hermes—the cunning messenger god of Greek myth.",
 claim:"Paul was clearly recognized everywhere as the supreme leader over Barnabas.",
 tree:N(AV('barnabas-besser-als-paulus','1289934543725264927'),
  "Paul was obviously the preeminent figure whenever he traveled with Barnabas.",
  "In Acts 14:8–18, after a lame man is healed in Lystra, the Lycaonian crowd hails Barnabas as Zeus—the supreme deity—and Paul as Hermes, merely Zeus's subordinate messenger and spokesman, a mythological figure famous for cunning and deceit.",
  "Lystra's verdict: Barnabas = Zeus, Paul = Hermes",
  ["Acts 14:8–18 (the Lystra episode, Nestle-Aland): A man in Lystra crippled from birth hears Paul speak; Paul sees his faith and commands him to stand upright, and he leaps up and walks (vv. 8–10). Seeing this, the crowds shout in Lycaonian, 'The gods have come down to us in the likeness of men!' (v. 11). They call Barnabas Zeus and Paul Hermes 'because he was the chief speaker' (v. 12). The priest of Zeus brings oxen and garlands to offer sacrifice (v. 13), until Barnabas and Paul tear their garments, rush into the crowd, and protest that they are merely human beings preaching the living Creator who gave rain and fruitful seasons (vv. 14–18).",
   "Rank inversion (Zeus vs. Hermes): In Greek mythology, Zeus is the supreme king of the gods while Hermes is only his subordinate herald and spokesman—meaning the pagan crowd instinctively perceived Barnabas as the higher, presiding figure and Paul as the subordinate talker.",
   "John Chrysostom, Homily 30 on Acts (Acts 13:42 / 14:11–12): Chrysostom explicitly notes why the crowd gave Barnabas the supreme title: \"'They called Barnabas Zeus, and Paul Hermes' (vv. 11–12). I suppose Barnabas had a dignified appearance.\""],
  ["Acts 14:8–18 (Nestle-Aland)","John Chrysostom, Homilies on Acts, Homily 30 (CCEL)"],
  [
   N(AV('barnabas-besser-als-paulus','1289934543725264927'),
    "Being compared to Hermes just meant Paul was eloquent, nothing negative.",
    "In Greek mythology, Hermes was not merely a neutral orator—he was the archetype of cunning, trickery, and deceptive persuasion across six classic myths.",
    "Hermes in mythology: the god of cunning",
    ["Theft of Apollo's cattle: Immediately after birth, Hermes stole his brother Apollo's cattle and cleverly covered his tracks by turning the cattle's hooves backwards.",
     "Hermes and Argos: Hermes outwitted Argos, the hundred-eyed watchman, by lulling him to sleep with stories and then slaying him to free Io.",
     "Guide of souls (Psychopompos): As conductor of souls into the underworld, his office demanded craftiness and guile to steer souls along his chosen path.",
     "Hiding infant Dionysus from Hera: Hermes concealed newborn Dionysus from Hera's jealousy by secretly entrusting him to the nymphs.",
     "Interrogation of Prometheus: Hermes tried through both threats and flattery to coax Prometheus into revealing the secret of the deliverer of the gods, deploying persuasive guile.",
     "Winged sandals: Hermes invented winged sandals to move stealthily and unnoticed—an emblem of surprise and trickery."],
    ["Classical Greek mythology on Hermes"],[],
    {visual:{kind:'steps',items:[
      ["1. Apollo's cattle","Reversed the cattle's hooves to disguise his theft."],
      ["2. Argos","Lulled the 100-eyed guard asleep with stories, then killed him."],
      ["3. Psychopompos","Guided souls to the underworld with guile."],
      ["4. Infant Dionysus","Secretly spirited Dionysus away from Hera."],
      ["5. Prometheus","Used threats and flattery to extract secrets."],
      ["6. Winged sandals","Moved unseen for stealth and surprise."]
     ]}})
  ],
  {facts:[["Passage","Acts 14:8–18 (Lystra)"],["Barnabas's Title","Zeus (supreme god)"],["Paul's Title","Hermes (subordinate spokesman)"],["Church Father","Chrysostom: Barnabas looked dignified"]],
   quotes:[
    {by:"Acts 14:11–12",en:"And when the crowds saw what Paul had done, they lifted up their voices, saying in Lycaonian, 'The gods have come down to us in the likeness of men!' Barnabas they called Zeus, and Paul, Hermes, because he was the chief speaker.",ref:"Acts 14:11–12"},
    {by:"John Chrysostom (344–407 CE)",en:"'They called Barnabas Zeus, and Paul Hermes' (vv. 11–12). I suppose Barnabas had a dignified appearance.",ref:"Homilies on the Acts of the Apostles, Homily 30 (CCEL)"}
   ],
   visual:{kind:'compare',
    left:{title:"Barnabas = Zeus",items:["Supreme god of the Greek pantheon","Presiding, dignified figure (Chrysostom)","Priest of Zeus brings oxen and garlands to his gate"]},
    right:{title:"Paul = Hermes",items:["Subordinate herald & chief speaker","Lacked Barnabas's dignified bearing","Mythological patron of cunning, theft, and persuasive trickery"]}}}),
 sum:"In Acts 14:12, the Lystrans rank Barnabas as Zeus and Paul merely as Hermes—a figure famed in Greek myth for cunning—with John Chrysostom noting that Barnabas possessed the dignified appearance."});

/* 6. #apostelgeschichte-von-paulus-und-thekla-authentisch */
card(P+'acts-of-paul-and-thecla',{
 title:"Was the Acts of Paul and Thecla accepted as authentic?",
 k:"Paul · Apocrypha & Fathers",
 blurb:"Codex Claromontanus lists it in its canon, while Chrysostom, Jerome, Methodius, Sulpicius Severus, and Armenian Acts treat Thecla as real.",
 claim:"The Acts of Paul and Thecla was universally rejected as a late forgery, so its unflattering portrait of Paul carries no weight.",
 tree:N(AV('apostelgeschichte-von-paulus-und-thekla-authentisch','1289939634306027561'),
  "No orthodox Church Father or canonical manuscript treated the Acts of Paul and Thecla as authentic.",
  "On the contrary, the 6th-century Codex Claromontanus preserves a 4th-century canonical list including the Acts of Paul, and major Church Fathers—John Chrysostom, Jerome, Methodius of Olympus, Sulpicius Severus, and the early Armenian Acts of Eugenia—cited Thecla's story with reverence as historical and authoritative.",
  "Canonical witness & Patristic reception of Paul and Thecla",
  ["Codex Claromontanus (6th c. MS, 4th c. list): This bilingual Greco-Latin New Testament codex includes the Acts of Paul (which contains Paul and Thecla) inside its stichometric list of canonical books, which scholars date to the 4th century.",
   "John Chrysostom, Homily 25 on Acts (Acts 11:19): Chrysostom cites the work approvingly to exhort his flock: 'Hear of the blessed Thecla, how to see Paul she even gave her gold: and you will not give even a farthing that you may see Christ: you admire what she did, yet do not imitate her.'",
   "Jerome (347–420 CE), Letters II.a (To Eustochium): Jerome holds up Thecla as a paragon of devotion and purity, portraying her reception in heavenly paradise to encourage consecrated Christian living.",
   "Sulpicius Severus (363–429 CE), Dialogues on St. Martin: St. Martin receives a vision in which he sees and converses with St. Thecla—which presupposes her historical reality, a figure known solely through the Acts of Paul and Thecla.",
   "Methodius of Olympus (260–312 CE), Symposium (On Virginity), Discourse 8 (cited as Discourse 7 in source notes): Methodius explicitly presents Thecla as a virgin and disciple of Paul.",
   "Armenian Acts of Eugenia (4th–5th c., in Conybeare's Apology and Acts of Apollonius): Eugenia secretly reads 'the history of the holy Apostle Paul and the blessed virgin Thecla,' weeps day by day, resolves to imitate Thecla, and later declares the book to be from God."],
  ["Codex Claromontanus (stichometry)","John Chrysostom, Homilies on Acts 25 (Acts 11:19)","Jerome, Ascetic Letters (To Eustochium)","Sulpicius Severus, Dialogi","Methodius of Olympus, Symposium (Discourse 8)","Apology and Acts of Apollonius (Acts of Eugenia)"],
  [
   N(AV('apostelgeschichte-von-paulus-und-thekla-authentisch','1289939634306027561'),
    "Tertullian says the work was exposed as a forgery by an Asian presbyter who was deposed for writing it.",
    "Tertullian's polemical claim (On Baptism 17) collapses on close inspection: his stated motive was blocking women from teaching and baptizing—even though the text does not depict an authorized female teaching office—the author never forged it pseudonymously in Paul's name, and no other Church Father corroborates Tertullian's story.",
    "Answering Tertullian's rejection",
    ["Doctrinal motive over history: Tertullian objected to the text because he opposed women teaching and baptizing (claiming it authorized female ministry, though it does not actually present a formal female teaching office).",
     "Not a pseudonymous forgery: Even on Tertullian's telling, the author did not falsely attribute the text to Paul's own pen (it is a narrative about Paul, not a pseudo-Pauline epistle).",
     "Zero Patristic corroboration: No other Church Father knew of or repeated Tertullian's tale that an Asian presbyter was deposed over the book—raising serious doubt about Tertullian's claim."],
    ["Tertullian, On Baptism 17"],[])
  ],
  {facts:[["Manuscript Witness","Codex Claromontanus (4th c. list)"],["Eastern Fathers","Chrysostom, Methodius of Olympus"],["Western Fathers","Jerome, Sulpicius Severus (St. Martin)"],["Solo Critic","Tertullian (uncorroborated)"]],
   quotes:[
    {by:"John Chrysostom",en:"Hear of the blessed Thecla, how to see Paul she even gave her gold: and you will not give even a farthing that you may see Christ: you admire what she did, yet do not imitate her.",ref:"Homilies on the Acts of the Apostles, Homily 25 (on Acts 11:19)"},
    {by:"Acts of Eugenia (Armenian, 4th–5th c.)",en:"Now it happened that the history of the holy Apostle Paul and the blessed virgin Thecla fell into Eugenia's hands, and while she read it secretly, she wept day by day, the more so because she was subject to pagan parents. As she continued reading the story of St. Thecla day by day, the thought came to her to imitate Thecla's conduct.",ref:"The Apology and Acts of Apollonius and Other Monuments of Early Christianity"}
   ]}),
 sum:"Codex Claromontanus lists the Acts of Paul among canonical books, and Chrysostom, Jerome, Methodius, Sulpicius Severus, and the Armenian Acts treat Thecla as genuine—leaving Tertullian's uncorroborated rejection isolated."});

/* 7. #paulus-rassist */
card(P+'paul-on-cretans-titus-1-12',{
 title:"'Cretans are always liars, evil beasts': Paul's ethnic slur in Titus 1:12",
 k:"Paul · Titus 1:12",
 blurb:"Paul endorses a pagan poet's ethnic slur as 'true'—and Chrysostom warns this implies Jupiter is immortal.",
 claim:"Paul's epistles are free of ethnic stereotyping and never endorse pagan theology.",
 tree:N(AV('paulus-rassist','1290031470265499728'),
  "Paul was only quoting a local proverb harmlessly, without endorsing ethnic stereotyping or pagan religion.",
  "In Titus 1:10–14, Paul targets Jewish believers ('especially those of the circumcision') and affirms Epimenides' sweeping slur—'Cretans are always liars, evil beasts, lazy gluttons'—with an explicit stamp of approval: 'This testimony is true.' Worse still, as John Chrysostom observed, Epimenides called Cretans liars because they claimed Zeus/Jupiter had died!",
  "Ethnic stereotyping & Chrysostom's Zeus dilemma",
  ["Titus 1:10–13 (Paul's endorsement): Warning against 'many who are insubordinate, empty talkers and deceivers, especially those of the circumcision party,' Paul quotes a Cretan prophet: 'Cretans are always liars, evil beasts, lazy gluttons,' and explicitly declares: 'This testimony is true. Therefore rebuke them sharply.'",
   "Epimenides of Crete: The line originates with the Cretan poet-seer Epimenides, delivering a blanket condemnation of Cretan character as deceitful, uncivilized, and gluttonous.",
   "Entrenched Greek anti-Cretan prejudice: Classical Greek writers codified this ethnic slur—Polybius (Histories 6.46) wrote that 'there is no nation so greedy and so attached to material gain as the Cretans,' calling them 'greedy and incapable of acting justly'; Aristotle (Politics) criticized Cretan indulgence and ethical failings; Callimachus (Hymn to Zeus) mocked Cretans as liars for building a tomb for Zeus; and Greek even coined the verb κρητίζειν (krētizein, 'to Cretize') to mean 'to lie or act deceitfully.'",
   "Moral problem: Instead of dismantling ethnic prejudice, an alleged apostle canonizes a blanket national slur—'always liars, evil beasts, lazy gluttons'—as divinely endorsed truth in Scripture."],
  ["Titus 1:10–14","Epimenides of Crete (frag.)","Polybius, Histories 6.46","Aristotle, Politics","Callimachus, Hymn to Zeus","John Chrysostom, Homily 3 on Titus"],
  [
   N(AV('paulus-rassist','1290031470265499728'),
    "Quoting a pagan poet does not mean Paul endorsed the poet's pagan premise.",
    "John Chrysostom himself saw the alarming implication: Epimenides called Cretans liars specifically because they said Zeus/Jupiter died and built his tomb—so when Paul declares 'This testimony is true,' he literally validates the premise that Zeus is immortal.",
    "Chrysostom's warning: Titus 1:12–13 & Jupiter's immortality",
    ["Epimenides' original context (Chrysostom, Homily 3 on Titus): Cretans had built a tomb for Jupiter inscribed 'Here lies Zan, whom they call Jove.' Epimenides mocked them as liars precisely because he insisted Zeus never died: 'For even a tomb, O king, of you / they made, who never died, but ever shall be.' (Callimachus's Hymn to Zeus echoes the same line: 'Cretans have built a tomb for you, O holy and great Zeus; but you are not dead, for you live forever.')",
     "Chrysostom's theological alarm: Chrysostom warns his congregation: 'If this testimony is true, notice what a difficulty arises! For if the poet is right in saying they lie because they claim Jupiter can die, and if the Apostle confirms this, that is frightening!'",
     "Chrysostom's explicit conclusion: 'Pay close attention, beloved. The poet said the Cretans were liars because they claimed Jupiter was dead. The Apostle confirmed this testimony; according to the Apostle, then, Jupiter is immortal, for he says: \"This testimony is true!\"'"],
    ["John Chrysostom, Homily 3 on Titus","Callimachus, Hymn to Zeus"],[],
    {quotes:[
      {by:"John Chrysostom",en:"Pay close attention, beloved. The poet said the Cretans were liars because they claimed Jupiter was dead. The Apostle confirmed this testimony; according to the Apostle, then, Jupiter is immortal, for he says: 'This testimony is true!'",ref:"Homily 3 on Titus"}
     ]})
  ],
  {facts:[["Verse","Titus 1:10–14"],["Quoted Poet","Epimenides of Crete"],["Greek Stereotype","κρητίζειν (krētizein) = 'to lie'"],["Patristic Trap","Chrysostom: confirms Jupiter is immortal"]],
   quotes:[
    {by:"Titus 1:10–13",en:"For there are many who are insubordinate, empty talkers and deceivers, especially those of the circumcision party... One of them, a prophet of their own, said, 'Cretans are always liars, evil beasts, lazy gluttons.' This testimony is true. Therefore rebuke them sharply, that they may be sound in the faith.",ref:"Titus 1:10–13"},
    {by:"Polybius (c. 200–118 BCE)",en:"There is no nation so greedy and so attached to material gain as the Cretans.",ref:"Histories, Book 6, Chapter 46"},
    {by:"Callimachus (c. 310–240 BCE)",en:"Cretans have built a tomb for you, O holy and great Zeus; but you are not dead, for you live forever.",ref:"Hymn to Zeus"}
   ]}),
 sum:"Paul canonizes a notorious Greek ethnic slur against Cretans ('always liars, evil beasts, lazy gluttons') as true (Titus 1:12–13)—and as Chrysostom warned, validating Epimenides' charge implies Zeus/Jupiter is immortal."});

/* 8. #paulus-verlfucht-jesus */
card(P+'paul-calls-jesus-a-curse',{
 title:"Paul says no Spirit-led person curses Jesus—then calls Christ a curse",
 k:"Paul · Self-Contradiction",
 blurb:"In 1 Corinthians 12:3 no one speaking by God's Spirit calls Jesus accursed; in Galatians 3:13 Paul applies Deuteronomy's curse to Christ.",
 claim:"Paul's Spirit-inspired theology of the cross is completely self-consistent.",
 tree:N(AV('paulus-verlfucht-jesus','1294814610313969776'),
  "Paul never speaks of Jesus as accursed; he only rejects cursing Jesus.",
  "Paul sets an explicit spiritual litmus test in 1 Corinthians 12:3—no one speaking by the Spirit of God calls Jesus accursed—and then in Galatians 3:13 himself states that Christ became a curse under Deuteronomy 21:23 ('Cursed is everyone who hangs on a tree').",
  "1 Corinthians 12:3 vs. Galatians 3:13",
  ["1 Corinthians 12:3 (the Spirit test): Paul lays down a categorical rule: 'Therefore I make known to you that no one speaking in the Spirit of God ever says \"Jesus is accursed!\" and no one can say \"Jesus is Lord\" except in the Holy Spirit.'",
   "Galatians 3:13 (Paul's own statement): Yet in Galatians, Paul explicitly applies the Torah's curse formula to Jesus: 'Christ redeemed us from the curse of the law by becoming a curse for us—for it is written, \"Cursed is everyone who is hanged on a tree.\"'",
   "The internal contradiction: By quoting 'Cursed is everyone who hangs on a tree' (Deut 21:23) and declaring that Christ became that curse, Paul violates his own 1 Corinthians 12:3 criterion for speaking by the Spirit of God."],
  ["1 Corinthians 12:3","Galatians 3:13","Deuteronomy 21:23"],[],
  {facts:[["Criterion","1 Corinthians 12:3"],["Violation","Galatians 3:13"],["OT Proof-Text","Deuteronomy 21:23 ('cursed on a tree')"],["Tension","Calls Christ a curse despite 1 Cor 12:3"]],
   quotes:[
    {by:"1 Corinthians 12:3",en:"Therefore I want you to understand that no one speaking in the Spirit of God ever says 'Jesus is accursed!' and no one can say 'Jesus is Lord' except in the Holy Spirit.",ref:"1 Corinthians 12:3"},
    {by:"Galatians 3:13",en:"Christ redeemed us from the curse of the law by becoming a curse for us—for it is written, 'Cursed is everyone who is hanged on a tree.'",ref:"Galatians 3:13"}
   ],
   visual:{kind:'compare',
    left:{title:"Paul's Rule (1 Cor 12:3)",items:["Litmus test for God's Spirit","'No one speaking in the Spirit of God says, Jesus is accursed'"]},
    right:{title:"Paul's Teaching (Gal 3:13)",items:["Applies Deut 21:23 to Jesus","Declares Christ 'became a curse for us — Cursed is everyone who hangs on a tree'"]}}}),
 sum:"Paul declares that no one speaking by the Spirit of God calls Jesus accursed (1 Cor 12:3), yet in Galatians 3:13 applies the Torah's curse ('cursed is everyone who hangs on a tree') directly to Christ."});

/* 9. #paulus-tot-widerspruch */
card(P+'pauls-death-contradiction',{
 title:"Acts 26:17 vs. Paul's death & Spain mission (2 Tim 4:18)",
 k:"Paul · Contradictions",
 blurb:"Jesus supposedly promised to preserve Paul's life from Jews and Gentiles (Acts 26:17), yet Paul was executed by Romans before reaching Spain.",
 claim:"The promise of deliverance in Acts 26:17 was completely fulfilled in Paul's career and death.",
 tree:N(AV('paulus-tot-widerspruch','1294819867471646790'),
  "Acts 26:17 only meant spiritual salvation, and Paul completed every mission including Spain.",
  "Orthodox exegete Bishop Michael (Luzin) explains that 'delivering you' in Acts 26:17 literally meant preserving Paul's life from the dangers of his mission—yet Paul was executed by the Gentiles (Rome) and there is no solid historical record of him completing his planned Spain mission, forcing commentators like Euthymius Zigabenus on 2 Timothy 4:18 to reinterpret rescue as post-mortem entry into heaven.",
  "Promised preservation vs. execution & unverified Spain trip",
  ["General contradiction (Acts 26:17 vs. Paul's death): In Acts 26:17 Jesus promises Paul, 'delivering you from your people and from the Gentiles—to whom I am sending you.' Yet Paul ultimately died at the hands of the Gentiles (executed under Roman authority).",
   "Was Spain ever historically reached? Paul planned to travel to Spain (Rom 15:24, 28), yet Luke's Acts ends with Paul imprisoned in Rome and there is no contemporary historical evidence confirming Paul ever reached or evangelized Spain before his execution.",
   "Michael (Luzin) on Acts 26:17: The Russian Orthodox commentator observes that in the original Greek context 'delivering you' should be understood as 'preserving your life'—protecting Paul from the dangers he would inevitably face in ministry—while 'to whom I send you' sets out a sequence first to the Jews and then to the Gentiles (cf. Acts 13:46ff.).",
   "Euthymius Zigabenus on 2 Timothy 4:18: Faced with Paul's impending execution, the Orthodox commentator Euthymius Zigabenus spiritualizes 2 Tim 4:18 ('The Lord will rescue me from every evil deed and bring me safely into His heavenly kingdom') into protection against moral/spiritual harm unto death and preservation for heavenly glory rather than physical rescue from execution."],
  ["Acts 26:17; 13:46ff.","2 Timothy 4:18","Romans 15:24, 28","Michael (Luzin), Explanatory Apostle on Acts 26:17","Euthymius Zigabenus on 2 Timothy 4:18"],[],
  {facts:[["Promise","Acts 26:17 (preserve life from Jews & Gentiles)"],["Outcome","Executed by Gentiles in Rome"],["Historical Gap","Planned Spain trip unconfirmed"],["Exegetes","Michael (Luzin) & Euthymius Zigabenus"]],
   quotes:[
    {by:"Michael (Luzin), Orthodox Commentator",en:"The expression 'delivering you' should in the original Greek context rather be understood as 'preserving your life,' meaning that you will be protected from the dangers you would inevitably encounter through your ministry. The phrase 'to whom I send you' indicates that the message began with the Jewish people, followed by proclamation to the Gentiles (cf. Acts 13:46ff.).",ref:"Commentary on Acts 26:17"},
    {by:"Euthymius Zigabenus, Orthodox Commentator",en:"The Lord will rescue me from every evil deed and from every injustice that assails us unto death, and bring us safely into His heavenly kingdom. He will protect us for heavenly enjoyment and preserve us to the highest glory and piety.",ref:"Commentary on 2 Timothy 4:18"}
   ],
   visual:{kind:'compare',
    left:{title:"Acts 26:17 (Luzin's Greek reading)",items:["Promise: 'preserving your life' from Jews & Gentiles","Mission sequence: Jews first, then Gentiles","Planned western reach to Spain (Rom 15)"]},
    right:{title:"2 Tim 4:18 & Paul's end (Zigabenus)",items:["Not rescued physically from Roman execution","Spain mission remains historically unverified","Commentators shift 'rescue' to post-mortem heaven"]}}}),
 sum:"Acts 26:17 promises to preserve Paul's life from Jews and Gentiles (Michael Luzin), yet Paul was executed by Rome with his Spain mission unverified—forcing commentators like Euthymius Zigabenus on 2 Tim 4:18 to spiritualize deliverance into post-mortem entry into heaven."});

/* 10. #paulus-ananais */
card(P+'paul-and-ananias',{
 title:"Why does Jesus send Paul to a Torah-observant Jew (Ananias)?",
 k:"Paul · Damascus & Law",
 blurb:"Ananias was 'a devout man according to the law' praised by all Jews—yet God sends him to heal Paul and impart the Holy Spirit.",
 claim:"In Jesus' new dispensation, Torah observance has no spiritual power and cannot coexist with the Holy Spirit.",
 tree:N(AV('paul-and-ananias','1325486443921150093'),
  "Torah-observant Judaism was spiritually dead; only Paul received true apostolic power and the Spirit.",
  "Acts itself undermines Paul's anti-Torah polemic: Jesus personally dispatches Paul to Ananias—explicitly praised as 'a devout man according to the law, well spoken of by all the Jews' (Acts 22:12)—and uses this Torah-observant disciple as His direct prophetic instrument to heal Paul's blindness and fill him with the Holy Spirit.",
  "Ananias: Torah-observant, respected by Jews, empowered by God",
  ["The core dilemma: Why would Jesus send Paul to a Torah-observant Jewish believer, and how does a man living by the Mosaic Law possess healing power, direct prophetic visions, status as Jesus' disciple, and the authority to impart the Holy Spirit?",
   "Direct scriptural praise (Acts 22:12): Paul testifies that Ananias was 'a devout man according to the law, well spoken of by all the Jews who lived there.' Only someone genuinely observing the Mosaic Law earns universal praise from the Jewish community.",
   "Direct divine vision & commission (Acts 9:10–12): The Lord speaks directly to Ananias ('Ananias!' — 'Here I am, Lord!') and entrusts him with the mission to Straight Street, to the house of Judas, to lay hands on Saul of Tarsus so he may regain his sight.",
   "God's designation of Saul (Acts 9:15): The Lord tells Ananias, 'Go, for he [Paul] is a chosen instrument of mine to carry my name before the Gentiles and kings and the children of Israel.'",
   "Healing miracle & imparting the Holy Spirit (Acts 9:17–18): Ananias lays hands on Saul saying, 'Brother Saul, the Lord Jesus... has sent me so that you may regain your sight and be filled with the Holy Spirit'—and immediately scales fall from his eyes. How can a Law-observant Jew work such miracles and mediate the Spirit if the Law brings only a curse (Gal 3:2–13)?"],
  ["Acts 9:10–18","Acts 22:12","Nikanor (Kamenski) on Acts 9","John Chrysostom (cited by Nikanor)"],
  [
   N(AV('paul-and-ananais','1325486443921150093'),
    "Ananias is just a minor background figure; Paul did not depend on his standing.",
    "Orthodox commentator Archbishop Nikanor (Kamenski) notes that Ananias was known as a respected rabbi in Damascus and explains why Paul emphasized his credentials—quoting St. John Chrysostom on Ananias's credibility as an independent witness.",
    "Patristic & Orthodox witness: Nikanor & Chrysostom",
    ["Nikanor (Kamenski) on Ananias's stature: Nikanor observes that Acts preserves specific details showing Ananias was known as an esteemed rabbi in Damascus, whose admiring attitude toward Paul would carry decisive weight with Jewish listeners—explaining why Paul highlighted Ananias's Law-observant reputation so thoroughly.",
     "John Chrysostom (quoted by Nikanor): 'Here we have another witness. Behold how credible he is presented. Moreover, Ananias is an outsider, then the event of the vision occurs, followed by a momentous prophecy.' Nikanor adds that Paul recounts the words Ananias spoke after the vision, which other summaries omit."],
    ["Nikanor (Kamenski), Explanatory Apostle","John Chrysostom (via Nikanor)"],[],
    {quotes:[
      {by:"Acts 22:12",en:"And one Ananias, a devout man according to the law, well spoken of by all the Jews who lived there...",ref:"Acts 22:12"},
      {by:"John Chrysostom (cited by Nikanor Kamenski)",en:"Here we have another witness. Behold how credible he is presented. Moreover, Ananias is an outsider, then the event of the vision occurs, followed by a momentous prophecy.",ref:"Commentary on Acts 9"}
     ]})
  ],
  {facts:[["Ananias's Character","'Devout man according to the law' (Acts 22:12)"],["Jewish Reputation","'Well spoken of by all the Jews'"],["Miraculous Role","Restores Paul's sight & imparts Holy Spirit"],["Orthodox Note","Nikanor: esteemed rabbi in Damascus"]],
   quotes:[
    {by:"Acts 9:17–18",en:"So Ananias departed and entered the house. And laying his hands on him he said, 'Brother Saul, the Lord Jesus who appeared to you on the road by which you came has sent me so that you may regain your sight and be filled with the Holy Spirit.' And immediately something like scales fell from his eyes, and he regained his sight.",ref:"Acts 9:17–18"}
   ],
   visual:{kind:'steps',items:[
    ["1. Law-observant disciple","Acts 22:12 praises Ananias as devout according to the Torah and esteemed by all Damascus Jews."],
    ["2. Direct divine vision","Acts 9:10–12 shows Jesus commanding Ananias directly in a vision."],
    ["3. Instrument of healing & Spirit","Acts 9:17–18 shows this Torah-observant Jew healing Paul's blindness and mediating the Holy Spirit."]
   ]}}),
 sum:"Jesus dispatches Paul to Ananias—'a devout man according to the law' esteemed by all Jews (Acts 22:12)—to restore his sight and impart the Holy Spirit (Acts 9:17–18), refuting Paul's later claim that Torah observance is spiritually sterile."});

/* 11. #paulus-wolf */
card(P+'paul-ravenous-wolf-benjamin',{
 title:"'Benjamin is a ravenous wolf' (Gen 49:27 & Rom 11:1)",
 k:"Paul · Tribe of Benjamin",
 blurb:"Jacob's deathbed oracle calls Benjamin 'a ravenous wolf,' and Paul proudly identifies himself as a Benjamite.",
 claim:"Paul's tribal lineage from Benjamin carries purely positive prophetic significance.",
 tree:N(AV('paulus-wolf','1326369307428393012'),
  "Paul's Benjamite heritage simply proves his authentic Israelite credentials.",
  "Pairing Genesis 49:27 with Romans 11:1 places Paul directly under Jacob's ominous prophecy for his tribe: 'Benjamin is a ravenous wolf; in the morning he devours the prey, and in the evening he divides the spoil.'",
  "Genesis 49:27 meets Romans 11:1",
  ["Genesis 49:27 (Jacob's oracle on Benjamin): In his prophetic blessing over the twelve tribes, Jacob characterizes Benjamin specifically as 'a ravenous wolf; in the morning he devours the prey, and in the evening he divides the spoil.'",
   "Romans 11:1 (Paul's self-identification): Paul explicitly grounds his Israelite identity in that very tribe: 'I ask, then, has God rejected his people? By no means! For I myself am an Israelite, a descendant of Abraham, a member of the tribe of Benjamin.'",
   "Polemical implication: Whether read as persecuting the believers in the 'morning' and dividing doctrinal spoil in the 'evening,' or contrasted with Jesus' warning against false prophets as 'ravenous wolves' (Matt 7:15), Paul's own boast links him to the sole tribe explicitly labeled a 'ravenous wolf' in Genesis."],
  ["Genesis 49:27","Romans 11:1"],[],
  {facts:[["Prophecy","Genesis 49:27 ('ravenous wolf')"],["Self-Claim","Romans 11:1 (tribe of Benjamin)"],["Two Phases","Morning: devours prey · Evening: divides spoil"]],
   quotes:[
    {by:"Genesis 49:27",en:"Benjamin is a ravenous wolf, in the morning devouring the prey and at evening dividing the spoil.",ref:"Genesis 49:27"},
    {by:"Romans 11:1",en:"I ask, then, has God rejected his people? By no means! For I myself am an Israelite, a descendant of Abraham, a member of the tribe of Benjamin.",ref:"Romans 11:1"}
   ],
   visual:{kind:'compare',
    left:{title:"Genesis 49:27 (Jacob's prophecy)",items:["'Benjamin is a ravenous wolf'","Morning: devours the prey","Evening: divides the spoil"]},
    right:{title:"Romans 11:1 (Paul's lineage)",items:["'I myself am an Israelite'","'Descendant of Abraham'","'Member of the tribe of Benjamin'"]}}}),
 sum:"Jacob prophesies that 'Benjamin is a ravenous wolf' (Gen 49:27), and Paul explicitly identifies himself as a member of the tribe of Benjamin (Rom 11:1)."});

/* 12. #paulus-glaubt-heiliger-geist */
card(P+'paul-thinks-he-has-spirit',{
 title:"'I think that I too have the Spirit of God' (1 Cor 7)",
 k:"Paul · Inspiration",
 blurb:"In 1 Corinthians 7:6, 12, 25, and 40, Paul explicitly admits he is giving personal opinions—and merely 'thinks' he has God's Spirit.",
 claim:"Every sentence in Paul's epistles was dictated directly by the Holy Spirit as infallible divine revelation.",
 tree:N(AV('paulus-glaubt-heiliger-geist','1362275418484375614'),
  "Paul always spoke under unmistakable, direct inspiration of the Holy Spirit.",
  "Four times in a single chapter—1 Corinthians 7:6, 12, 25, and 40—Paul explicitly states that he is speaking from his own concession or personal judgment rather than a command of the Lord, ending with the remarkably uncertain remark: 'in my judgment... and I think that I too have the Spirit of God.'",
  "Four explicit disclaimers in 1 Corinthians 7",
  ["1 Corinthians 7:6 (concession, not command): 'Now as a concession, not a command, I say this'—Paul clarifies that his advice on temporary marital abstinence for prayer is his own allowance, not a divine commandment.",
   "1 Corinthians 7:12 ('I, not the Lord'): 'To the rest I say (I, not the Lord) that if any brother has a wife who is an unbeliever, and she consents to live with him, he should not divorce her'—explicitly contrasting his own ruling with the Lord's teaching.",
   "1 Corinthians 7:25 ('no command from the Lord'): 'Now concerning the betrothed [virgins], I have no command from the Lord, but I give my judgment as one who by the Lord's mercy is trustworthy'—admitting the absence of any prophetic command from Jesus.",
   "1 Corinthians 7:40 ('in my judgment... I think I have the Spirit'): 'Yet in my judgment she is happier if she remains as she is. And I think that I too have the Spirit of God'—concluding his advice on widows as a personal opinion backed only by the subjective belief ('I think') that he has God's Spirit."],
  ["1 Corinthians 7:6, 12, 25, 40"],[],
  {facts:[["Chapter","1 Corinthians 7"],["Four Disclaimers","vv. 6, 12, 25, 40"],["Key Admission","'I, not the Lord' (v. 12)"],["Uncertain Spirit","'I think I too have the Spirit' (v. 40)"]],
   quotes:[
    {by:"1 Corinthians 7:12",en:"To the rest I say (I, not the Lord) that if any brother has a wife who is an unbeliever, and she consents to live with him, he should not divorce her.",ref:"1 Corinthians 7:12"},
    {by:"1 Corinthians 7:40",en:"Yet in my judgment she is happier if she remains as she is. And I think that I too have the Spirit of God.",ref:"1 Corinthians 7:40"}
   ],
   visual:{kind:'steps',items:[
    ["v. 6 · Concession","'As a concession, not a command, I say this' — human allowance, not revelation."],
    ["v. 12 · Self vs. Lord","'I say, I, not the Lord' — explicit separation from Jesus' authority."],
    ["v. 25 · No command","'I have no command from the Lord, but I give my judgment' — personal opinion."],
    ["v. 40 · Subjective belief","'In my judgment... and I think that I too have the Spirit of God' — no prophetic certainty."]
   ]}}),
 sum:"In 1 Corinthians 7 (vv. 6, 12, 25, 40), Paul repeatedly distinguishes his personal opinions from the Lord's commands and concludes that he merely 'thinks' he has the Spirit of God—refuting claims of verbal infallibility."});

/* 13. #jesus-erlaubt-begrabung-nicht */
card(P+'jesus-forbids-fathers-burial',{
 title:"'Let the dead bury their own dead' (Matthew 8:21–22)",
 k:"Gospel Ethics · Filial Piety",
 blurb:"Chrysostom, Tertullian, Deuteronomy 21:23, and Josephus confirm the father was already dead for same-day burial—making Matt 8:22 clash with honoring parents.",
 claim:"The disciple's father in Matthew 8:21 was still alive and healthy, so Jesus only declined an indefinite delay.",
 tree:N(AV('jesus-erlaubt-begrabung-nicht','1286395791996485673'),
  "The disciple only wanted to stay home for years until his elderly father eventually died.",
  "Both Church Fathers (John Chrysostom and Tertullian) affirm the father had just died at that very moment, and 1st-century Jewish law (Deuteronomy 21:22–23; Flavius Josephus) mandated same-day burial before sunset—meaning the disciple asked for only a few hours to fulfill the Torah's command to honor his father (Exodus 20:12), which Jesus forbade.",
  "Dead at that moment · Same-day burial · Clash with Exodus 20:12",
  ["Matthew 8:21–22 (the Gospel text): 'Another of the disciples said to him, \"Lord, let me first go and bury my father.\" And Jesus said to him, \"Follow me, and leave the dead to bury their own dead.\"'",
   "Church Fathers confirm the father was literally dead: John Chrysostom (Homily 27 on Matthew) explicitly explains that 'there were others who would fulfill this duty, and the dead man would not remain unburied,' assuming 'the one who had died... belonged to the unbelievers.' Tertullian (On Monogamy, Ch. 7) likewise confirms the disciple 'was hastening to the funeral rites of his father,' explaining Jesus treated disciples like priests forbidden to attend parental burials.",
   "1st-century Jewish burial law (maximum 1 day): Under Kavod HaMet (honor due to the dead) and Deuteronomy 21:22–23 ('you shall surely bury him the same day'), even executed criminals could not remain unburied overnight. Flavius Josephus (The Jewish War IV, 5.2) confirms Jews were so scrupulous about burial rites that even crucified criminals were taken down and buried before sunset. Thus the disciple asked for mere hours, not years.",
   "Conflict with honoring parents (Exodus 20:12): The Torah commands, 'Honor your father and your mother.' In Judaism, caring for one's dead parents is the highest form of filial honor because the deceased can never repay it. Forbidding a son from spending a few hours to bury his dead father on the same day directly prevents him from obeying Exodus 20:12 and elevates total allegiance to an itinerant preacher above a fundamental moral duty."],
  ["Matthew 8:21–22","Deuteronomy 21:22–23","Exodus 20:12","John Chrysostom, Homily 27 on Matthew","Tertullian, On Monogamy (De Monogamia) 7","Flavius Josephus, The Jewish War IV.5.2"],[],
  {facts:[["Gospel Text","Matthew 8:21–22"],["Patristic Consensus","Chrysostom & Tertullian: father was already dead"],["Jewish Law","Deut 21:23 & Josephus: same-day burial (<1 day)"],["Torah Clash","Prevents fulfilling Exodus 20:12 (honor parents)"]],
   quotes:[
    {by:"John Chrysostom (349–407 CE)",en:"For why did He not permit him? ... On the one hand, there were others who would fulfill this duty, and the dead man would not remain unburied; on the other hand, it was not fitting for this man to be drawn away from more important matters. And by saying 'their dead,' He implies that this [dead man] does not belong to his dead—and that because the one who had died belonged, at least as I suppose, to the unbelievers.",ref:"Homily 27 on the Gospel of Matthew"},
    {by:"Tertullian (c. 150–220 CE)",en:"The reason why He calls back that young man who was hastening to the funeral rites of his father is that He wishes to show that we are called by Him to be priests; priests whom the Law forbade to be present at the burial of parents.",ref:"On Monogamy (De Monogamia), Chapter 7"},
    {by:"Flavius Josephus (1st c. CE)",en:"The Jews are so careful about funeral rites that even those who have been sentenced to death for a crime and crucified are taken down and buried before sunset.",ref:"The Jewish War (De Bello Judaico), Book IV, 5.2"}
   ],
   visual:{kind:'steps',items:[
    ["1. Literal death confirmed","Chrysostom ('the dead man would not remain unburied') and Tertullian ('hastening to the funeral rites') confirm the father was already dead."],
    ["2. Same-day time limit","Deut 21:22–23 & Josephus (War IV.5.2) prove Jewish burial occurred the very same day before sunset—only a few hours needed."],
    ["3. Ethical contradiction","Exodus 20:12 mandates honoring parents, whose highest Jewish expression is burying one's dead—yet Matt 8:22 forbids it for absolute following."]
   ]}}),
 sum:"Chrysostom, Tertullian, Deuteronomy 21:23, and Josephus all confirm the father in Matthew 8:21–22 was already dead for same-day burial—meaning the command to leave him unburied overruled the Torah's duty to honor one's parents (Exod 20:12)."});
})();
