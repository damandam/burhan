/* Enrichment batch: German Averroes — Jesus: Violence, Conduct & Subordination (18 cards).
   Path: christianity/jesus/d-av-jesus-gewalt-su-nde/ */
(()=>{
const AV=(n,link)=>({credit:'Averroes · #'+n+' (translated from German)',link});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});

const P='christianity/jesus/d-av-jesus-gewalt-su-nde/';

const C1=AV('jesus-tempelreinigung','https://discord.com/channels/1275832106949283962/1287086654565253182');
const C2=AV('jesu-ehrt-eltern-nicht','https://discord.com/channels/1275832106949283962/1288962207471767594');
const C3=AV('hund-jesus','https://discord.com/channels/1275832106949283962/1289326961432465419');
const C4=AV('schweine','https://discord.com/channels/1275832106949283962/1290079287507943468');
const C5=AV('feigen-baum','https://discord.com/channels/1275832106949283962/1290079356143796234');
const C6=AV('niemals-im-geheimen-gesprochen','https://discord.com/channels/1275832106949283962/1291109978907607060');
const C7=AV('jesus-fest-lu-ge','https://discord.com/channels/1275832106949283962/1291113219695317083');
const C8=AV('jesus-klaut-esel','https://discord.com/channels/1275832106949283962/1293276178748014752');
const C9=AV('jesus-hure-salben','https://discord.com/channels/1275832106949283962/1303700821543747594');
const C10=AV('jesus-lu-gt-schrift','https://discord.com/channels/1275832106949283962/1307370712738168832');
const C11=AV('jesus-ha-nde-waschen','https://discord.com/channels/1275832106949283962/1307491911577112596');
const C12=AV('jesus-nackt','https://discord.com/channels/1275832106949283962/1310922665124565033');
const C13=AV('jesus-su-ndigt-pslam','https://discord.com/channels/1275832106949283962/1311534333651320904');
const C14=AV('jesus-u-bergewichtig-und-betrunken','https://discord.com/channels/1275832106949283962/1320073615076491335');
const C15=AV('jesus-nicht-gott','https://discord.com/channels/1275832106949283962/1325575749197107300');
const C16=AV('kinder-sterben-die-fluchen','https://discord.com/channels/1275832106949283962/1328481000904331304');
const C17=AV('mantel-verkaufen-und-schwert','https://discord.com/channels/1275832106949283962/1330203172068786249');
const C18=AV('hunde-schweine-perle','https://discord.com/channels/1275832106949283962/1333940863566479410');

/* 1. Cleansing the Temple */
card(P+'c-jesus-tempelreinigung',{
 title:"Cleansing the Temple: Jesus' whip and patristic coercion",k:"Jesus · John 2:15",blurb:"Jesus drives people out with a whip of cords; Augustine retracts his claim of pure persuasion and derives beating female slaves from it.",
 claim:"Jesus never used physical force and acted solely through gentle persuasion.",
 tree:N(C1,
  "Jesus was a complete pacifist who never used physical violence — everything He did was purely by persuasion and admonition.",
  "John 2:15 explicitly depicts Jesus fashioning a whip of cords to drive sellers, sheep, and cattle out of the temple and overturning tables. Augustine himself had to retract his earlier claim that Jesus 'did nothing by force,' and classical Christian exegesis (Chrysostom and Augustine via Thomas Aquinas) openly treats the episode as an act of forceful authority.",
  "Physical force in John 2:15 & patristic admission",
  ["Gospel text (John 2:15): Jesus makes a whip of cords, drives everyone out of the temple along with the sheep and cattle, pours out the money-changers' coins, and overturns their tables.",
   "Augustine's retraction (Retractationes I.12.6): Augustine explicitly corrects his own earlier statement that Christ 'did nothing by force, but everything by persuading and admonishing,' admitting he had forgotten that Jesus drove buyers and sellers from the temple by scourging them — and expelled demons by power rather than persuasion.",
   "John Chrysostom (Homily on John 23.2, in Aquinas's Catena Aurea): Chrysostom asks directly why Christ 'used such violence' and explains that since Jesus was about to heal on the Sabbath and appear to break the Law, He took this risk to defend His Father's house and show agreement with God ('My Father's house')."],
  ["John 2:15","Augustine, Retractationes 1.12.6","Thomas Aquinas, Catena Aurea on John 2 (Chrysostom Hom. 23.2)"],
  [
   N(C1,
    "The whip was purely symbolic against corruption and carried no harsh implications for domestic authority.",
    "Thomas Aquinas's Catena Aurea on John 2 cites Augustine (Tractates on John 10.9), who draws a stark hierarchy of coercion directly from zeal for God's house: talk gently to a friend, strictly coerce a wife, and coerce a female slave even with blows.",
    "Beating slaves and coercing wives (Augustine, Tractate 10.9)",
    ["Hierarchical coercion: Commenting on 'zeal for Your house' in John 2, Augustine contrasts how correction must be applied according to one's household station.",
     "Social rule stated: 'Have you a friend? Gently admonish him. A wife? Strictly coerce her. A maidservant? Even coerce her with blows.'",
     "Apologetic implication: Far from condemning physical coercion of women and enslaved servants, leading Church Fathers invoked Jesus' temple whip to justify beating female slaves and strictly coercing wives."],
    ["Thomas Aquinas, Catena Aurea on John 2","Augustine, Tractates on John 10.9"],
    [],
    {facts:[["Compiler","Thomas Aquinas"],["Source","Catena Aurea on John 2"],["Father Cited","Augustine, Tractate 10.9"],["Target","Friend / Wife / Maidservant"]],
     quotes:[{by:"Augustine (via Thomas Aquinas)",en:"Whoever, therefore, is consumed by zeal for the house of God wishes to correct everything he sees wrong there; and if he cannot correct it, he endures and grieves. In your own house you take care that things do not go wrong; in the house of God, where salvation is offered, ought you to be indifferent? Have you a friend? Gently admonish him. A wife? Strictly coerce her. A maidservant? Even coerce her with blows. Do what you can, according to your station.",ref:"Tractates on the Gospel of John X.9 (Catena Aurea on John 2)"}],
     visual:{kind:'steps',items:[
      ["Friend","Gently admonish him — persuasion is reserved for male social equals."],
      ["Wife","Strictly coerce her — authority over a spouse permits stern compulsion."],
      ["Maidservant","Even coerce her with blows — physical beating of an enslaved woman is explicitly endorsed."]]}}),
   N(C1,
    "Augustine meant only spiritual allegory in the whip of small cords.",
    "Even in his allegorical reading (Tractate 10.5, cited by Aquinas on John 2), Augustine warns that sinners twist cords for themselves until the Lord scourges them to mend their ways — threatening final binding and punishment (Matt 22:13) if they refuse.",
    "Allegory of the scourge & judgment (Augustine, Tractate 10.5)",
    ["Moral warning (Tractate 10.5): Augustine explains that every sinner twists a cord by adding sin to sin, and suffering in life is the Lord making a whip of small cords to admonish them.",
     "Eschatological threat: If they refuse to amend their lives, they will hear at the end: 'Bind him hand and foot' (Matt 22:13; cited as Mt. 23 in the source notes).",
     "Combined picture: Whether read literally (Retractationes 1.12.6, Chrysostom) or allegorically (Tractate 10.5), the passage depicts Christ as exercising forceful, punitive authority."],
    ["Augustine, Tractates on John 10.5 (Catena Aurea on John 2)","Matthew 22:13"],
    [],
    {quotes:[{by:"Augustine (via Thomas Aquinas)",en:"Our Lord had a meaning in mind when He made a scourge of small cords and scourged those who carried on trade in the temple. Every man twists a cord for himself by his sins, adding ever more sin to sin. When men therefore suffer for their iniquities, let them be sure that it is the Lord making a scourge of small cords and admonishing them to change their lives: if they do not do this, they will hear at the end: Bind him hand and foot.",ref:"Tractates on the Gospel of John X.5 (cf. Matt 22:13)"}]})
  ],
  {facts:[["Passage","John 2:15"],["Action","Whip of cords; drove out sellers & animals"],["Key Admission","Augustine, Retractationes I.12.6"],["Exegete","Chrysostom, Hom. in Joh. 23.2"]],
   quotes:[
    {by:"Gospel of John",en:"And making a whip of cords, he drove them all out of the temple, with the sheep and the oxen; and he poured out the coins of the money-changers and overturned their tables.",ref:"John 2:15"},
    {by:"Augustine of Hippo",en:"Elsewhere, in what I said concerning the Lord Jesus Christ: 'He did nothing by force, but everything by persuading and admonishing,' it had not come to my mind that He drove the sellers and buyers out of the temple by scourging them. But what does this mean, or how much weight does it have? For although He also expelled demons from unwilling men not by persuasion, but by the power of His might.",ref:"Retractationes, Book 1, Chapter 12, Section 6"},
    {by:"John Chrysostom (via Catena Aurea)",en:"Why then did Christ use such violence? He was about to heal on the Sabbath and do many things that seemed to them transgressions of the Law. So that He might not give the impression of acting against God, He did this at His own risk; and in this way He gave them to understand that He who exposed Himself to such a risk to defend the dignity of the house did not despise the Lord of that house. For the same reason, to show His agreement with God, He did not say 'the holy house,' but 'My Father's house.' It follows: 'And His disciples remembered that it was written: Zeal for Your house has consumed me.'",ref:"Homilies on John XXIII.2"}
   ]}),
 sum:"John 2:15 depicts Jesus driving people out with a whip — forcing Augustine to retract his 'no force' claim in Retractationes 1.12.6 and leading him in Tractate 10.9 to endorse coercing wives and beating maidservants."});

/* 2. The boy Jesus leaves his parents */
card(P+'c-jesu-ehrt-eltern-nicht',{
 title:"Jesus and His family: anguish, distancing & rebukes",k:"Jesus · Luke 2 / Matt 12 / Mark 3",blurb:"From causing His parents anguish at age twelve to distancing Himself from Mary in public, the Gospels repeatedly show tension with His family.",
 claim:"Jesus always modeled warm, submissive filial deference to His mother and relatives without tension.",
 tree:N(C2,
  "Jesus obeyed the commandment to honor father and mother without any friction, and when He distanced Himself from His family He only meant unbelieving relatives.",
  "Five Gospel episodes record sharp friction between Jesus and His family — including leaving His parents in anguish (ὀδυνώμενοι) at twelve, distancing Himself from Mary at Cana and in public, being thought out of His mind by His own kin, and Basil of Caesarea explicitly reading Matthew 12:48–50 as a rebuke to His mother and brothers.",
  "Five Gospel episodes of family tension",
  ["12 years old in the Temple (Luke 2:41–52): Jesus goes with His parents to Jerusalem for Passover. On the return trip they realize only after a full day's travel that He is missing, and finally find Him in the temple conversing with the teachers. Mary describes their search with the Greek participle ὀδυνώμενοι (odynōmenoi, present middle/passive of ὀδυνάομαι: 'feeling pain, suffering, being in anguish').",
   "Wedding at Cana (John 2:1–12): Invited with His mother and disciples, Jesus is asked by Mary for help when the wine runs out, and only turns water into wine after a curt exchange distancing Himself from her.",
   "Mother and brothers outside (Matthew 12:46–50): While Jesus speaks to the crowd, His mother and brothers stand outside asking to speak with Him; told of this, He points to His disciples as His true mother and brothers.",
   "Woman praising His mother (Luke 11:27–28): When a woman in the crowd blesses the womb that bore Him and the breasts that nursed Him, Jesus redirects the blessing away from His mother to those who hear and keep God's word.",
   "Declared out of His mind (Mark 3:20–21, 31–35): Besieged by crowds in a house, Jesus' own family comes to seize Him because they judge His behavior unreasonable / out of His mind."],
  ["Luke 2:41–52 (v. 48 ὀδυνώμενοι)","John 2:1–12","Matthew 12:46–50","Luke 11:27–28","Mark 3:20–21, 31–35"],
  [
   N(C2,
    "In Matthew 12:46–50, Jesus only meant people who oppose the faith when contrasting His disciples with His family.",
    "Basil of Caesarea (330–379) explicitly describes Jesus' reply in Matthew 12:48–50 as a rebuke ('reproving / rebuking them') — and if that rebuke applied only to enemies of the faith, it would turn Mary herself into an enemy of the faith.",
    "Basil of Caesarea & the 'enemies of faith' dilemma",
    ["Basil of Caesarea, Asceticon II (Shorter Rules, Q&A): Asked how Christians should regard former household members or relatives, Basil cites Matthew 12:48–50 and explicitly calls Jesus' words a rebuke ('for, rebuking them, He answered...').",
     "The apologist dilemma: If apologists claim Jesus spoke this way only because His relatives opposed the faith (so one must leave unbelieving family), that would entail Mary herself being an enemy of the faith — otherwise Jesus' refusal to acknowledge her as His mother makes no sense."],
    ["Basil of Caesarea, Asceticon II (Shorter Rules / 313 Kurzgefasste Vorschriften)","Matthew 12:48–50"],
    [],
    {facts:[["Church Father","Basil of Caesarea (330–379)"],["Work","Asceticon II (Shorter Rules)"],["Key Term","Rebuking (verweisend)"],["Target Dilemma","Mary as 'enemy of faith'?"]],
     quotes:[{by:"Basil of Caesarea",en:"Question: How ought we to regard our former household members or relatives? Answer: As the Lord showed and taught when it was reported to Him: 'Your mother and your brothers are standing outside, wanting to see You'; for, rebuking them, He answered: 'Who is My mother, and who are My brothers? For whoever does the will of My Father who is in heaven, he is My brother, and sister, and mother.'",ref:"Asceticon II (313 Shorter Rules)"}]})
  ],
  {facts:[["Passages","Luke 2, 11; John 2; Matt 12; Mark 3"],["Greek Term","ὀδυνώμενοι (to suffer anguish)"],["Family Claim","Mark 3:21 ('out of his mind')"],["Patristic Witness","Basil of Caesarea, Asceticon II"]],
   visual:{kind:'steps',items:[
    ["Luke 2:41–52","Stays behind in Jerusalem at age 12 without telling His parents; Mary and Joseph search for Him in anguish (ὀδυνώμενοι)."],
    ["John 2:1–12","Curt exchange with Mary at Cana when she asks for help with the wine before His first miracle."],
    ["Mark 3:20–21, 31–35","His own relatives come to restrain Him because they think His behavior is unreasonable / out of His mind."],
    ["Matt 12:46–50 & Luke 11:27–28","Refuses to go out to Mary and His brothers, and deflects a woman's blessing of His mother."]]}}),
 sum:"Five Gospel scenes record acute friction between Jesus and His parents and kin — and Basil of Caesarea explicitly reads Matthew 12:48–50 as a rebuke, refuting the claim that Jesus only distanced Himself from enemies of the faith."});

/* 3. The Canaanite woman and the "dogs" */
card(P+'c-hund-jesus',{
 title:"The Canaanite woman and the “dogs” (Matt 15:21–28)",k:"Jesus · Matthew 15:21–28",blurb:"Five stages from silence to theological exclusion to calling her people dogs — and why the 'faith test' excuse collapses.",
 claim:"Jesus only called the Canaanite woman's people 'dogs' as a loving pedagogical test to draw out her faith.",
 tree:N(C3,
  "Jesus knew all along He would heal her daughter and merely tested the Canaanite woman to showcase her faith.",
  "Matthew 15:21–28 records a five-stage escalation of rejection — total silence, disciples wanting to get rid of her, explicit exclusion from His mission, the dog comparison, and help granted only after she accepts the demeaning label.",
  "Five-stage escalation in Matthew 15:21–28",
  ["Stage 1 — Ignored (v. 23a): The woman cries out, 'Have mercy on me, Lord, Son of David!' Jesus answers her not a single word — total silence as He keeps walking.",
   "Stage 2 — Disciples urge dismissal (v. 23b): The disciples ask Him, 'Send her away (ἀπόλυσον αὐτήν), for she cries out after us.' Remarkably, they do not ask Him to help her — they want to get rid of her because she is annoying them, trailing behind like a beggar.",
   "Stage 3 — Exclusion (v. 24): Speaking to His disciples (not even to her directly), Jesus declares: 'I was sent only to the lost sheep of the house of Israel.' She is explicitly outside His mission.",
   "Stage 4 — Humiliation (vv. 25–26): She bows down before Him (προσεκύνει) and pleads, 'Lord, help me!' Only then does He speak to her directly — comparing Gentiles to dogs who must not take the children's bread.",
   "Stage 5 — Accepting degradation (vv. 27–28): Only after she accepts the demeaning role ('even the dogs eat the crumbs') does Jesus finally grant healing."],
  ["Matthew 15:21–28 (v. 23 ἀπόλυσον αὐτήν; v. 25 προσεκύνει)"],
  [
   N(C3,
    "Even so, Jesus was simply testing whether she truly had faith before healing her daughter.",
    "The 'test' excuse fails completely because the woman already professed full messianic faith in v. 22 — calling Him both 'Lord' (Κύριε) and 'Son of David.' Testing someone who already gave the right answer twice by responding with silence, exclusion, and an insult makes no sense.",
    "Why the 'test' excuse collapses (vv. 22–28 chain)",
    ["She already demonstrated faith (v. 22): From the very first verse she cries, 'Have mercy on me, Lord (Κύριε), Son of David!' — using a messianic title even many Jews refused Him. This Gentile woman shows more faith in second one than much of Israel.",
     "Nothing left to test: She acknowledged Him as Lord, recognized His messianic office, and trusted His power to heal. What was left to probe?",
     "Insult after double confession: She said 'Lord' in v. 22 and again 'Lord' in v. 25, and was turned away both times. No one testing a student who answers correctly twice continues the test by calling them a dog.",
     "Either/or dilemma: Either the 'test' was already passed in v. 22 (so Jesus should have helped immediately), or it was never a test — it was ethnic/theological exclusion overcome only by extreme persistence and self-abasement."],
    ["Matthew 15:22–28 (Κύριε; Son of David)"],
    [],
    {facts:[["1st Confession","v. 22: 'Lord, Son of David'"],["2nd Confession","v. 25: 'Lord, help me!'"],["Response","Silence → Exclusion → Dog simile"],["Verdict","Not a test — exclusion overcome"]],
     visual:{kind:'steps',items:[
      ["v. 22 — First confession","Calls Him 'Lord (Κύριε), Son of David' → faith is already demonstrated."],
      ["v. 23a — Dead silence","Jesus answers not a word → ignores an explicit confession of faith."],
      ["v. 23b — Disciples annoyed","'Send her away (ἀπόλυσον αὐτήν)' → no hint of any pedagogical plan."],
      ["v. 24 — Theological exclusion","'Sent only to the lost sheep of Israel' → defines her outside His mission."],
      ["v. 25 — Second confession","She falls before Him: 'Lord, help me!' → repeats 'Lord' a second time."],
      ["v. 26 — Humiliation","Compares her people to dogs → degrades her despite double confession."],
      ["v. 27–28 — Submission & relief","She accepts the role of a dog, and only then receives healing."]]}})
  ],
  {facts:[["Passage","Matthew 15:21–28"],["Greek Terms","ἀπόλυσον αὐτήν; προσεκύνει; Κύριε"],["Stages","5 steps to help"],["Apologetic Excuse","'Faith test' (refuted)"]],
   visual:{kind:'steps',items:[
    ["1. Ignored","v. 23a: 'He did not answer her a word' despite her cry for mercy."],
    ["2. Annoyance","v. 23b: Disciples urge, 'Send her away (ἀπόλυσον αὐτήν)' to get rid of her."],
    ["3. Excluded","v. 24: Tells disciples He was sent only to the lost sheep of Israel."],
    ["4. Humiliated","vv. 25–26: She kneels (προσεκύνει); He compares giving aid to throwing children's bread to dogs."],
    ["5. Submissive","vv. 27–28: She accepts being called a dog, and only then receives her request."]]}}),
 sum:"Matthew 15:21–28 shows Jesus ignoring, excluding, and comparing a Gentile woman to a dog even after she twice confesses Him as 'Lord' and 'Son of David' — making the 'faith test' excuse untenable."});

/* 4. The Gadarene pigs */
card(P+'c-schweine',{
 title:"The Gadarene pigs: needless slaughter & Gospel contradictions",k:"Jesus · Matt 8 / Mark 5 / Luke 8",blurb:"Why send demons into 2,000 innocent pigs instead of banishing them directly — amid five major synoptic discrepancies?",
 claim:"The Gerasene/Gadarene exorcism is a harmonious historical account showing pure divine compassion.",
 tree:N(C4,
  "Jesus had to grant the demons' request to enter the pigs, and all three Synoptic Gospels tell the same unified story.",
  "Jesus could have banished or destroyed the demons directly (as they feared) instead of needlessly causing 2,000 pigs to drown violently — and commentators themselves resort to desperate excuses (including selling drowned ham to Gentiles!). Worse, the three Synoptic accounts contradict each other on the number of men, the city, the name 'Legion,' and the pig count.",
  "Cruelty to 2,000 pigs & Expositor's Greek Testament",
  ["Needless cruelty: Why did Jesus grant the demons' request to enter the herd when He could have destroyed or expelled them directly? Instead, roughly 2,000 animals perished in a violent stampede.",
   "Expositor's Greek Testament (BibleHub) on Matt 8:32 — ὑπάγετε ('Go'): Christ's laconic word is usually read as 'go into the pigs,' though Bernhard Weiss (Matt. Evan. and Weiss-Meyer) argued it meant merely 'begone / away with you' (Hinweg mit euch) and that Jesus did not intend to grant the request.",
   "Inference vs. observation (οἱ δὲ … χοίρους / ἰδοὺ … ὥρμησεν πᾶσα ἡ ἀγέλη): As the commentary notes, the demons' entry into the pigs could not be directly observed — it was inferred from the sudden, startling stampede of the whole herd over the steep bank into the lake.",
   "Desperate apologetic excuses catalogued in Expositor's: Accepting Jesus' full responsibility for the disaster, commentators invented strained justifications — Euthymius gave four reasons (the fourth being that only thus could the exorcism be visibly proved); Rosenmüller argued two men are worth more than any number of pigs; and Wetstein sank to 'the lowest depth of banality' by proposing the owners could cut up the drowned pigs, salt the meat, or smoke the hams (fumosas pernas) to sell to Gentiles who did not mind eating strangled/drowned animals!"],
  ["Matthew 8:28–34","Mark 5:1–20","Luke 8:26–39","Expositor's Greek Testament on Matt 8:32 (Weiss, Euthymius, Rosenmüller, Wetstein)"],
  [
   N(C4,
    "Matthew, Mark, and Luke agree on all the facts of the miracle.",
    "Comparing Matthew 8:28–34 with Mark 5:1–20 and Luke 8:26–39 exposes five clear discrepancies in number, geography, dialogue, reactions, and animal count.",
    "Five Synoptic discrepancies compared",
    ["1. Number of demoniacs: Matthew 8:28–34 reports TWO demon-possessed men; Mark 5:1–20 and Luke 8:26–39 report only ONE (often explained away as a dramatic simplification).",
     "2. Geography (50 km apart): Matthew names the region of the Gadarenes (ἡ χώρα τῶν Γαδαρηνῶν — Gadara, modern Umm Qais, closer to the Sea of Galilee); Mark and Luke name the Gerasenes (ἡ χώρα τῶν Γερασηνῶν — Gerasa, modern Jerash, ~50 km away in the Decapolis).",
     "3. Demons & dialogue: Mark 5:9 and Luke 8:30 record the demoniac calling himself 'Legion' because 'many' demons were in him; Matthew omits both the name and any count.",
     "4. Number of pigs: Mark 5:13 specifies about 2,000 pigs; Matthew and Luke give no number at all.",
     "5. Townspeople's reaction: All three have the people ask Jesus to leave, but Matthew merely says the whole city came out and asked Him to go, while Mark and Luke focus on their fear after seeing what happened and seeing the cured man in his right mind."],
    ["Matthew 8:28–34","Mark 5:1–20","Luke 8:26–39"],
    [],
    {facts:[["Matthew 8:28","2 men · Gadarenes"],["Mark 5:1–20","1 man · Gerasenes · 'Legion' · 2,000 pigs"],["Luke 8:26–39","1 man · Gerasenes · 'Legion'"],["Distance","Gadara vs. Gerasa ≈ 50 km"]],
     visual:{kind:'compare',
      left:{title:"Matthew 8:28–34",items:["Two demon-possessed men","Region of the Gadarenes (Γαδαρηνῶν)","No name 'Legion' or demon count","No number of pigs given","Whole town simply asks Him to leave"]},
      right:{title:"Mark 5:1–20 & Luke 8:26–39",items:["One demon-possessed man","Region of the Gerasenes (Γερασηνῶν, ~50 km away)","Calls himself 'Legion' (many demons)","~2,000 pigs (Mark 5:13; omitted in Luke)","Focus on fear seeing the man in his right mind"]}}})
  ],
  {facts:[["Passages","Matt 8:28–34; Mark 5:1–20; Luke 8:26–39"],["Casualties","~2,000 pigs drowned (Mark 5:13)"],["Commentary","Expositor's Greek Testament (Matt 8:32)"],["Absurd Excuse","Wetstein: sell smoked drowned hams (fumosas pernas)"]],
   quotes:[{by:"Expositor's Greek Testament (on Matt 8:32)",en:"Accepting the full responsibility of Jesus for the catastrophe, exegetes have labored to invent excuses. Euthymius gives four reasons for what happened, the fourth being that only in this way could it be conclusively shown that the demons had left the possessed men. Rosenmüller suggests that two men are worth more than any number of pigs. The lowest depth of banality in this line was reached by Wetstein when he suggested that by cutting up the drowned pigs, salting the flesh, or smoking the hams (fumosas pernas) and selling them to Gentiles who had no scruple against eating strangled animals, the owners could avoid the loss.",ref:"Expositor's Greek Testament, Matthew 8:32"}]}),
 sum:"Jesus needlessly sends demons to destroy 2,000 pigs across an account riddled with Synoptic contradictions (1 vs. 2 men; Gadarenes vs. Gerasenes 50 km apart), leaving exegetes to invent absurd excuses down to selling smoked drowned ham."});

/* 5. The withered fig tree */
card(P+'c-feigen-baum',{
 title:"The withered fig tree: senseless curse & timeline contradiction",k:"Jesus · Mark 11 / Matt 21",blurb:"Cursing a tree for having no figs out of season — plus a blatant Mark vs. Matthew timeline contradiction and Chrysostom's admission.",
 claim:"The cursing of the fig tree was a consistent, well-justified acted parable.",
 tree:N(C5,
  "The fig tree incident was simply a consistent acted parable illustrating judgment on Israel.",
  "Why should an innocent tree suffer when Mark explicitly notes 'it was not the season for figs'? Moreover, the passage lacks the structure of Jesus' parables, Mark and Matthew directly contradict each other on when it withered, and John Chrysostom himself admits a fig tree deserved no punishment for being out of season.",
  "Out-of-season curse & why it is not a parable",
  ["Unfair expectation: Mark 11:12–14 states Jesus was hungry, approached a leafy fig tree looking for fruit, found only leaves 'for it was not the season for figs,' and cursed it so no one would ever eat fruit from it again.",
   "Not structured as a parable: Jesus' parables follow recognizable literary openings and closings — 'The kingdom of God is like…', 'A man (or a king) went out…', and 'Whoever has ears to hear, let him hear!' By contrast, Mark 11 and Matthew 21 narrate a literal physical miracle and curse.",
   "Moral question: What guilt does a tree bear for obeying its natural seasonal cycle, and why destroy a living fruit tree merely to stage an object lesson?"],
  ["Mark 11:12–14, 20–21","Matthew 21:18–20"],
  [
   N(C5,
    "Mark and Matthew describe the exact same timeline.",
    "Mark 11:12–14, 20–21 places the curse on one day and the disciples' discovery of the withered tree the next morning; Matthew 21:18–20 collapses it so the tree withers immediately on the spot as the disciples watch in amazement.",
    "Mark vs. Matthew timeline contradiction",
    ["Mark 11:12–14, 20–21: Leaving Bethany, Jesus curses the tree; only when they pass by the NEXT MORNING do they see it withered to the roots, and Peter remembers the curse.",
     "Matthew 21:18–20: Returning early in the morning, Jesus curses the tree, and 'immediately' (on the spot) it withers — prompting the disciples to marvel right then: 'How did the fig tree wither so suddenly?'"],
    ["Mark 11:12–14, 20–21","Matthew 21:18–20"],
    [],
    {visual:{kind:'compare',
      left:{title:"Mark 11:12–14, 20–21",items:["Day 1: Jesus curses the tree on leaving Bethany","Disciples hear the curse, nothing visible happens then","Day 2 (next morning): Passing by, they see it withered to the roots","Peter exclaims: 'Rabbi, look! The fig tree you cursed has withered!'"]},
      right:{title:"Matthew 21:18–20",items:["Single morning: Returning to the city, Jesus curses the tree","'And immediately (at once) the fig tree withered'","Disciples witness the instant withering on the spot","They marvel immediately: 'How did the fig tree wither so suddenly?'"]}}}),
   N(C5,
    "Jesus was genuinely hungry and acted out of righteous disappointment.",
    "In Homily 67 on Matthew (cited on Mark 11:11–14), John Chrysostom explicitly rejects the idea that Jesus was truly driven by morning hunger or that the tree deserved punishment — arguing instead that Jesus staged a display of His 'punishing power' on a plant rather than on persecuting Jews.",
    "John Chrysostom's Homily 67 admission",
    ["Not true hunger: Chrysostom asks who would be so unreasonable as to think Jesus felt fierce hunger pangs early in the morning right after leaving Bethany, or expected figs out of season.",
     "Disciples' false conjecture: He states that the remark 'if perhaps He might find anything on it' reflects merely the disciples' mistaken assumption.",
     "No fault in the tree: Chrysostom explicitly asks, 'What punishment did a fig tree deserve for not bearing fruit before its season?' — concluding Jesus only wanted to prove He could wither persecuting Jews, showing His punishing power on a plant instead so the disciples' spirits would not break during His Passion."],
    ["John Chrysostom, Homilies on Matthew 67 (on Mark 11:11–14)"],
    [],
    {quotes:[{by:"John Chrysostom",en:"How is it that He was hungry in the morning, as Matthew says, unless by an economy He permitted it to His flesh? ... Now it is evident that this expresses a conjecture of the disciples, who thought Christ went to the fig tree for this reason and cursed it because He found no fruit on it... What punishment, moreover, did a fig tree deserve for not bearing fruit before its season? From all this, therefore, we may conclude that He wished to show His power, lest their spirits be broken by His suffering.",ref:"Homilies on Matthew, Homily 67"}]})
  ],
  {facts:[["Passages","Mark 11:12–14, 20–21; Matt 21:18–20"],["Key Clause","'For it was not the season for figs'"],["Contradiction","Withered next morning vs. instantly"],["Church Father","Chrysostom, Homily 67 on Matthew"]],
   quotes:[
    {by:"Gospel of Mark",en:"When he came to it, he found nothing but leaves, for it was not the season for figs. And he said to it, 'May no one ever eat fruit from you again.' ... As they passed by in the morning, they saw the fig tree withered away to its roots.",ref:"Mark 11:13–14, 20"},
    {by:"Gospel of Matthew",en:"And he said to it, 'May no fruit ever come from you again!' And the fig tree withered at once. When the disciples saw it, they marveled, saying, 'How did the fig tree wither at once?'",ref:"Matthew 21:19–20"}
   ]}),
 sum:"Jesus curses a tree for lacking figs out of season in two mutually contradictory Gospel timelines — and even Chrysostom admits the tree deserved no punishment and the morning hunger was staged."});

/* 6. "I said nothing in secret" */
card(P+'c-niemals-im-geheimen-gesprochen',{
 title:"“I said nothing in secret” (John 18:20 vs. Mark 4)",k:"Jesus · John 18:20 / Mark 4",blurb:"In John, Jesus insists He taught everything openly; in Mark, He explains everything privately to His disciples while keeping outsiders in the dark.",
 claim:"Jesus taught everything transparently in public and never withheld secret explanations from outsiders.",
 tree:N(C6,
  "Jesus never hid His message or taught privately in secret — as John 18:20 affirms.",
  "John 18:20 directly contradicts Mark 4:10–12 and 4:33–34. In John, Jesus tells the high priest He spoke openly before the world and 'said nothing in secret'; in Mark, He teaches crowds exclusively in riddles/parables precisely so outsiders will not understand and be forgiven, while explaining everything privately to His inner circle.",
  "Public openness (John 18:20) vs. private secret (Mark 4)",
  ["John 18:20 (Luther 2017): Jesus declares before the high priest, 'I have spoken openly to the world. I have always taught in synagogues and in the temple, where all Jews come together, and I have said nothing in secret.'",
   "Mark 4:10–12 (Luther 2017): When alone with the Twelve and those around Him, Jesus says: 'To you has been given the secret (mystery) of the kingdom of God; but to those outside everything happens in parables, so that they may see and yet not perceive, and hear and yet not understand, lest they turn and be forgiven.'",
   "Mark 4:33–34: Mark adds explicitly that 'without a parable He did not speak to them, but privately to His own disciples He explained everything.'"],
  ["John 18:20","Mark 4:10–12, 33–34"],
  [],
  {facts:[["John 18:20","'I have said nothing in secret'"],["Mark 4:11","'Secret of the kingdom' for insiders only"],["Mark 4:12","Parables used so outsiders won't understand"],["Mark 4:34","Explained everything privately to disciples"]],
   visual:{kind:'compare',
    left:{title:"John 18:20",items:["'I have spoken freely and openly before all the world'","'Always taught in the synagogue and temple'","'I have said nothing in secret'"]},
    right:{title:"Mark 4:10–12, 33–34",items:["'To you is given the secret of God's kingdom'","Outsiders get parables so they hear and do NOT understand, lest they be forgiven","'Privately to His own disciples He explained everything'"]}},
   quotes:[
    {by:"Gospel of John",en:"Jesus answered him, 'I have spoken openly to the world. I have always taught in the synagogue and in the temple, where all Jews come together, and I have said nothing in secret.'",ref:"John 18:20"},
    {by:"Gospel of Mark",en:"And he said to them, 'To you has been given the secret of the kingdom of God, but for those outside everything is in parables, so that they may indeed see but not perceive, and may indeed hear but not understand, lest they should turn and be forgiven.' ... He did not speak to them without a parable, but privately to his own disciples he explained everything.",ref:"Mark 4:11–12, 34"}
   ]}),
 sum:"John 18:20 has Jesus deny saying anything in secret, directly contradicting Mark 4:10–12 and 4:33–34 where He explains everything privately to His disciples while intentionally obscuring His message from outsiders."});

/* 7. "I am not going up to this feast" */
card(P+'c-jesus-fest-lu-ge',{
 title:"“I am not going up to this feast” (John 7:8–11)",k:"Jesus · John 7:8–11",blurb:"Critical Greek text (Nestle-Aland) reads 'I am NOT going up,' yet Jesus immediately goes up in secret — and the 'caravan' excuse fails.",
 claim:"Jesus only meant He was not going up publicly with His brothers' pilgrim caravan, not that He wasn't going at all.",
 tree:N(C7,
  "Jesus told His brothers He wasn't going up 'yet' (or not with their procession), so there is no contradiction when He goes later.",
  "The critical Nestle-Aland text of John 7:8 reads 'I am NOT going up to this feast' (οὐκ, later altered by scribes to 'not yet' to smooth out the embarrassment) — yet in v. 10 He goes up secretly right after. Moreover, John 7:11 refutes the 'pilgrim procession' excuse.",
  "John 7:8–10 (Nestle-Aland) & the v. 11 rebuttal",
  ["Nestle-Aland text (John 7:8–10): Jesus tells His brothers, 'You go up to the feast; I am NOT going up to this feast, for my time has not yet come.' Having said this, He stayed in Galilee. 'But when His brothers had gone up to the feast, then He also went up, not publicly, but in secret.'",
   "Why the 'pilgrim procession' excuse fails (John 7:11): Apologists claim 'going up to the feast' only meant traveling in the public caravan. Yet John 7:11 notes that 'the Jews were looking for Him DURING the feast, saying, \"Where is he?\"' If His statement only concerned the caravan, why didn't they look for Him during the caravan?",
   "Hidden arrival option: Even if He had traveled along with the caravan, by that logic He could easily have slipped away and hidden once inside Jerusalem — rendering the denial in v. 8 either deceptive or contradicted by v. 10."],
  ["John 7:8–11 (Nestle-Aland Greek NT)"],
  [],
  {facts:[["Text","John 7:8–11 (Nestle-Aland)"],["Original Reading","'I am NOT going up' (not 'not yet')"],["v. 10 Action","Went up secretly right after"],["Refutation","v. 11: Jews sought Him at the feast"]],
   quotes:[{by:"Gospel of John (Nestle-Aland)",en:"You go up to the feast; I am not going up to this feast, for my time has not yet fully come. After saying this, he remained in Galilee. But after his brothers had gone up to the feast, then he also went up, not publicly, but in secret. The Jews were looking for him at the feast and saying, 'Where is he?'",ref:"John 7:8–11"}]}),
 sum:"The critical text of John 7:8 has Jesus say 'I am not going up to this feast' before promptly going up in secret (v. 10), and v. 11 undercuts the 'public caravan' excuse."});

/* 8. Taking the donkey */
card(P+'c-jesus-klaut-esel',{
 title:"Taking the donkey: the 'Jesus owns everything' dilemma",k:"Jesus · Matthew 21:2–3",blurb:"Claiming Jesus could commandeer someone else's animals because 'He is God' backfires morally and contradicts the Temple-tax episode.",
 claim:"Jesus had every right to have His disciples untie and take another person's donkey and colt because, as God, everything belongs to Him.",
 tree:N(C8,
  "Since Jesus is God and owns the entire universe, taking the donkey in Matthew 21:2–3 was simply reclaiming His own property.",
  "Defending Matthew 21:2–3 on the ground that 'Jesus is God so everything belongs to Him' creates fatal absurdities: it would equally justify stealing or killing anyone's property, conflicts with NT passages calling Satan ruler of this world, and contradicts Jesus' own submission to the temple tax.",
  "Why the 'Jesus owns everything' defense backfires",
  ["Gospel passage (Matthew 21:2–3): Jesus instructs two disciples, 'Go into the village opposite you, and immediately you will find a donkey tied, and a colt with her; untie them and bring them to me. And if anyone says anything to you, you shall say, \"The Lord needs them,\" and immediately he will let them go.'",
   "Moral absurdity: If being God entitles Jesus to take others' property without prior purchase or permission, would that same argument allow Him to kill people or steal anything at all simply because everything belongs to Him?",
   "Who owns the world in the NT? On Christian premises, doesn't the New Testament itself depict the world as under Satan's dominion (e.g., Luke 4:6 / 2 Cor 4:4 / John 12:31)?",
   "Temple-tax contradiction (Matthew 17:24–27): If everything genuinely belonged to Jesus, why did He complain when asked to pay the temple tax — arguing that kings exempt their own sons — yet still give in and pay it? Had everything been His, He would have owed nothing."],
  ["Matthew 21:2–3","Matthew 17:24–27"],
  [],
  {facts:[["Passage","Matthew 21:2–3"],["Missionary Claim","'Jesus is God, so it's His property'"],["Counter 1","Would justify any theft or killing"],["Counter 2","Had to pay temple tax (Matt 17:24–27)"]],
   quotes:[{by:"Gospel of Matthew",en:"Go into the village in front of you, and immediately you will find a donkey tied, and a colt with her. Untie them and bring them to me. And if anyone says anything to you, you shall say, 'The Lord needs them.' And immediately he will send them.",ref:"Matthew 21:2–3"}]}),
 sum:"Excusing the commandeered donkey in Matthew 21:2–3 by claiming 'Jesus owns everything as God' implies divine license for any seizure and clashes with His reluctant payment of the temple tax."});

/* 9. The woman who anointed Jesus */
card(P+'c-jesus-hure-salben',{
 title:"Anointing with costly nard: a year's wages wasted & fourfold contradiction",k:"Jesus · Mark 14:3–9",blurb:"Over 3,600 hours of wages poured out over a single meal while defending it with 'you always have the poor' — plus four conflicting Gospel accounts.",
 claim:"The anointing at Bethany was an unproblematic, harmonious act of pure devotion.",
 tree:N(C9,
  "Jesus rightly praised the woman for breaking the alabaster jar of expensive nard and reminded His critics that the poor would always be there.",
  "By the Gospels' own wage standard (1 denarius = a 12-hour workday in Matt 20:1–16), >300 denarii equals over 3,600 working hours — more than an entire year's labor — plus a shattered costly vessel. Jesus' reply ('you always have the poor, but not me') is morally hollow, and the four Gospels contradict each other on who objected and why.",
  "3,600+ hours of wages & hollow defense",
  ["Mark 14:3–9: At Bethany in the house of Simon the leper, a woman breaks an alabaster jar of costly genuine nard and pours it on Jesus' head. Bystanders object angrily that it could have been sold for more than 300 denarii and given to the poor; Jesus replies, 'Leave her alone… For you always have the poor with you, and whenever you want, you can do good for them; but you will not always have me. She has anointed my body beforehand for burial.'",
   "Calculating the waste (Matthew 20:1–16): One denarius equals a full 12-hour workday (Matt 20:1–16). Thus more than 300 denarii equals over 3,600 working hours — well over an entire year's wages — wasted at once, on top of breaking the expensive alabaster jar itself.",
   "Why the defense fails: Saying 'I will soon die, whereas the poor will always remain' makes no moral sense — it is equivalent to buying a Porsche and a villa and telling critics who bring up the poor, 'I only live once and won't be around forever, while you'll always have the poor with you.'"],
  ["Mark 14:3–9","Matthew 20:1–16"],
  [
   N(C9,
    "All four Gospels report the objection the same way.",
    "Matthew, Mark, Luke, and John give four incompatible versions of who objected to the anointing and why.",
    "Four-Gospel contradiction on the objector",
    ["Matthew 26:8–9: The DISCIPLES of Jesus are indignant at the 'waste' of the expensive oil.",
     "Mark 14:4–5: 'SOME present' (unnamed bystanders/disciples) are indignant at the 'waste' of the oil.",
     "Luke 7:39: SIMON THE PHARISEE objects internally — not about money or the poor at all, but because the woman is a 'sinner' whom Jesus should not allow to touch Him.",
     "John 12:4–5: JUDAS ISCARIOT alone raises the objection about the 300 denarii, and John explains he said it solely because he was a thief who wanted to steal from the money box."],
    ["Matthew 26:8–9","Mark 14:4–5","Luke 7:39","John 12:4–5"],
    [],
    {visual:{kind:'steps',items:[
      ["Matthew 26:8–9","The disciples as a group complain about the waste."],
      ["Mark 14:4–5","'Some' unnamed people at the meal complain about the waste."],
      ["Luke 7:39","Simon the Pharisee objects because the woman is a 'sinner,' not over cost."],
      ["John 12:4–5","Judas Iscariot objects specifically because he wanted to steal the money."]]}})
  ],
  {facts:[["Oil Value",">300 denarii (Mark 14:5)"],["Wage Rate","1 denarius = 12 hrs (Matt 20:1–16)"],["Total Waste",">3,600 working hours + broken jar"],["Gospels","4 conflicting objector accounts"]],
   quotes:[{by:"Gospel of Mark",en:"Why was the ointment wasted like that? For this ointment could have been sold for more than three hundred denarii and given to the poor. ... And Jesus said, 'Leave her alone... For you always have the poor with you, and whenever you want, you can do good for them. But you will not always have me.'",ref:"Mark 14:4–7"}]}),
 sum:"Pouring out over a year's wages (3,600+ working hours) in nard while dismissing the poor ('you always have them') is ethically hollow, and the four Gospels contradict one another over who objected and why."});

/* 10. "It is written the Messiah must suffer and rise on the third day" */
card(P+'c-jesus-lu-gt-schrift',{
 title:"“It is written the Messiah must suffer and rise on the third day”",k:"Jesus · Luke 24:46–47",blurb:"Jesus claims Scripture explicitly writes that the Messiah must suffer and rise on the third day — a statement found nowhere verbatim in the Old Testament.",
 claim:"The Old Testament explicitly states that the Messiah must suffer and rise from the dead on the third day.",
 tree:N(C10,
  "In Luke 24:46–47 Jesus accurately quotes an explicit Old Testament prophecy about the Messiah's suffering and third-day resurrection.",
  "In Luke 24:46–47 Jesus declares, 'Thus it is written, that the Christ should suffer and rise from the dead on the third day' — yet no single verse anywhere in the Old Testament states this verbatim (one-to-one), forcing apologists to patch together unrelated verses.",
  "Missing 1-to-1 prophecy in Luke 24:46–47",
  ["The explicit claim (Luke 24:46–47): The risen Jesus tells His disciples, 'And he said to them, that thus it is written, that the Christ must suffer and rise from the dead on the third day' (followed in v. 47 by preaching repentance in His name).",
   "Zero verbatim match: For 'thus it is written' to be literally true of the Hebrew Scriptures, an Old Testament passage would need to state explicitly (1-to-1, not by stitching disparate texts together) that the Messiah must suffer and rise on the third day — yet no such verse exists in the Tanakh."],
  ["Luke 24:46–47"],
  [],
  {facts:[["Passage","Luke 24:46–47"],["Claim","'Thus it is written' (gegraptai)"],["Requirement","Messiah suffers + rises day 3"],["OT Evidence","No 1-to-1 text exists"]],
   quotes:[{by:"Gospel of Luke",en:"And he said to them, 'Thus it is written, that the Christ should suffer and on the third day rise from the dead...'",ref:"Luke 24:46–47"}]}),
 sum:"Luke 24:46–47 has Jesus assert 'thus it is written' that the Messiah must suffer and rise on the third day — a composite statement that exists nowhere one-to-one in the Old Testament."});

/* 11. Not washing before meals */
card(P+'c-jesus-ha-nde-waschen',{
 title:"Not washing hands before meals (Luke 11:37–38)",k:"Jesus · Luke 11:37–38",blurb:"Invited to dine at a Pharisee's home, Jesus sits straight down to eat without washing His hands — shocking His host.",
 claim:"Jesus strictly observed all traditional purity and cleanliness customs before eating.",
 tree:N(C11,
  "Jesus always maintained meticulous ritual and hygienic hand-washing before meals.",
  "Luke 11:37–38 explicitly records that when invited to dine with a Pharisee, Jesus went straight to the table and ate without washing His hands beforehand, astonishing His host.",
  "Eating with unwashed hands in Luke 11:37–38",
  ["Gospel record (Luke 11:37–38): While Jesus was speaking, a Pharisee invited Him to dine. Jesus entered the Pharisee's house and reclined at table — and the Pharisee was astonished to see that Jesus had not first washed before the meal.",
   "Polemical point: While Christians frequently critique Islamic or Jewish purity details, their own Gospel openly reports Jesus sitting down to a meal without washing His hands."],
  ["Luke 11:37–38"],
  [],
  {facts:[["Passage","Luke 11:37–38"],["Setting","Dinner at a Pharisee's house"],["Action","Reclined without washing hands"],["Host Reaction","Astonished (ἐθαύμασεν)"]],
   quotes:[{by:"Gospel of Luke",en:"While Jesus was speaking, a Pharisee asked him to dine with him, so he went in and reclined at table. The Pharisee was astonished to see that he did not first wash before dinner.",ref:"Luke 11:37–38"}]}),
 sum:"Luke 11:37–38 explicitly records that Jesus sat down to eat at a Pharisee's table without washing His hands first, astonishing His host."});

/* 12. Washing the disciples' feet */
card(P+'c-jesus-nackt',{
 title:"Undressing to wash the disciples' feet (John 13:4–5)",k:"Jesus · John 13:4–5",blurb:"Jesus strips off His outer garments and wraps only a linen towel around His waist to wash the disciples' feet.",
 claim:"Jesus always kept full formal attire and never appeared partially undressed before His followers.",
 tree:N(C12,
  "Jesus never removed His garments in front of His male disciples.",
  "John 13:4–5 explicitly states that Jesus rose from supper, laid aside His outer garments, and wrapped only a linen towel around His waist while washing and drying His disciples' feet — conduct Christians would eagerly mock if attributed to another religious figure.",
  "Stripping to a towel in John 13:4–5",
  ["Gospel text (John 13:4–5): Jesus gets up from the meal, takes off His outer garment(s), takes a linen cloth/towel, and ties it around Himself; then He pours water into a basin and washes the disciples' feet, drying them with the very towel wrapped around His waist.",
   "Double-standard point: Christians revere this scene as humility in John 13, yet readily apply double standards when judging comparable physical descriptions in non-Christian texts."],
  ["John 13:4–5"],
  [],
  {facts:[["Passage","John 13:4–5"],["Action","Laid aside outer garments"],["Attire","Linen towel tied around waist"],["Task","Washed & dried disciples' feet"]],
   quotes:[{by:"Gospel of John",en:"He rose from supper. He laid aside his outer garments, and taking a towel, tied it around his waist. Then he poured water into a basin and began to wash the disciples' feet and to wipe them with the towel that was wrapped around him.",ref:"John 13:4–5"}]}),
 sum:"John 13:4–5 depicts Jesus laying aside His garments and wearing only a linen towel tied around His waist to wash and wipe His disciples' feet."});

/* 13. Psalm 41:9 applied to Judas */
card(P+'c-jesus-su-ndigt-pslam',{
 title:"Psalm 41 applied to Jesus: “for I have sinned against You”",k:"Jesus · John 13:18 / Ps 41",blurb:"Jesus applies Psalm 41:9 ('he who ate my bread') to Himself — yet the exact same 'I'-speaker five verses earlier confesses, 'for I have sinned against You.'",
 claim:"Jesus was completely sinless and every Old Testament quote He applied to Himself fits His sinlessness.",
 tree:N(C13,
  "When Jesus quotes Psalm 41:9 in John 13:18, the verse prophesies Judas's betrayal without implying anything negative about Jesus.",
  "In John 13:18 Jesus declares that Scripture is fulfilled in Him: 'He who eats my bread has lifted his heel against me' (Psalm 41:9 [41:10 MT/German]). Yet just five verses earlier in the very same psalm (Psalm 41:4 [41:5 MT/German]), the exact same first-person narrator prays: 'Heal my soul, for I have sinned against You!'",
  "Same first-person speaker in Psalm 41",
  ["Jesus' self-application (John 13:17–18): Referring to Judas's betrayal, Jesus says, 'But the Scripture will be fulfilled: \"He who eats my bread has lifted his heel against me.\"'",
   "Original context (Psalm 41:9 [v. 10 in Hebrew/German Bibles]): 'Even my close friend in whom I trusted, who ate my bread, has lifted his heel against me.'",
   "Five verses earlier (Psalm 41:4 [v. 5 in Hebrew/German Bibles]): 'I said, \"O LORD, be gracious to me; heal my soul, for I have sinned against You!\"'",
   "The dilemma: The 'I' speaker in Psalm 41:9 and Psalm 41:4/5 is one and the same person (David). If Jesus claims Psalm 41:9 is a direct prophecy spoken in His person, then either He identifies Himself with the speaker who confesses 'I have sinned against You,' or John 13:18 proof-texts a Davidic psalm completely out of context."],
  ["John 13:17–18","Psalm 41:4, 9 (MT/German 41:5, 10)"],
  [],
  {facts:[["NT Quote","John 13:18 (citing Ps 41:9)"],["Same Speaker","Ps 41:4 [Ger. 41:5]"],["Confession","'For I have sinned against You'"],["Dilemma","Sinlessness vs. out-of-context quote"]],
   visual:{kind:'compare',
    left:{title:"John 13:18 & Psalm 41:9 [41:10]",items:["Jesus applies the psalmist's 'I' directly to Himself","'He who ate my bread has lifted his heel against me'"]},
    right:{title:"Psalm 41:4 [German/MT 41:5]",items:["Same first-person narrator speaking to God","'Heal my soul, for I have sinned against You!'"]}},
   quotes:[
    {by:"Gospel of John",en:"But the Scripture will be fulfilled: 'He who ate my bread has lifted his heel against me.'",ref:"John 13:18"},
    {by:"Book of Psalms",en:"I said, 'O LORD, be gracious to me; heal my soul, for I have sinned against You!' ... Even my close friend in whom I trusted, who ate my bread, has lifted his heel against me.",ref:"Psalm 41:4, 9 (41:5, 10 in German/Hebrew numbering)"}
   ]}),
 sum:"By applying Psalm 41:9 to Himself in John 13:18, Jesus adopts the voice of a psalmist who five verses earlier confesses, 'Heal my soul, for I have sinned against You!' (Ps 41:4 [41:5])."});

/* 14. "A glutton and a drunkard" */
card(P+'c-jesus-u-bergewichtig-und-betrunken',{
 title:"“Look, a glutton and a drunkard!” (Matt 11:19)",k:"Jesus · Matthew 11:19",blurb:"Unlike John the Baptist's strict asceticism, Jesus ate and drank wine so freely that contemporaries labeled Him a glutton and a winebibber.",
 claim:"Jesus lived a strictly ascetic life free of indulgence or alcohol.",
 tree:N(C14,
  "Jesus lived an ascetic lifestyle with no basis for accusations of excessive eating or wine drinking.",
  "Matthew 11:19 explicitly contrasts John the Baptist — who 'came neither eating nor drinking' — with Jesus, who 'came eating and drinking,' causing onlookers to say: 'Look, a glutton and a drunkard (winebibber), a friend of tax collectors and sinners!'",
  "Ascetic John vs. wine-drinking Jesus (Matt 11:19)",
  ["Gospel testimony (Matthew 11:19): Jesus Himself quotes His contemporaries' contrast between John's asceticism ('they say, \"He has a demon\"') and His own practice of eating and drinking wine ('they say, \"Look, a glutton and a drunkard, a friend of tax collectors and sinners\"').",
   "Contrast with Islamic prophets: Unlike strict prophetic abstinence from intoxicants, the Gospel record itself depicts Jesus regularly consuming wine to the point of attracting public reproach as a 'winebibber.'"],
  ["Matthew 11:19"],
  [],
  {facts:[["Passage","Matthew 11:19"],["John the Baptist","Neither eating nor drinking"],["Jesus","Eating and drinking"],["Contemporary Label","'Glutton and drunkard (winebibber)'"]],
   quotes:[{by:"Gospel of Matthew",en:"For John came neither eating nor drinking, and they say, 'He has a demon.' The Son of Man came eating and drinking, and they say, 'Look at him! A glutton and a drunkard, a friend of tax collectors and sinners.'",ref:"Matthew 11:19"}]}),
 sum:"Matthew 11:19 contrasts John the Baptist's abstinence with Jesus' regular eating and wine-drinking, which led contemporaries to call Him 'a glutton and a drunkard.'"});

/* 15. Jesus' own words: one God */
card(P+'c-jesus-nicht-gott',{
 title:"Jesus' own words: the Father alone is God (25 NT verses)",k:"Jesus & Tawḥīd · 25 NT Verses",blurb:"Across 8 categories and 25 verses, Jesus and the NT distinguish the One True God from Jesus — a subordinate, praying, dependent, limited man and messenger.",
 claim:"Jesus taught that He Himself is the one true, all-knowing, almighty God equal to the Father.",
 tree:N(C15,
  "The New Testament presents Jesus as equal to God the Father in power, knowledge, and deity.",
  "Twenty-five explicit New Testament verses across eight distinct themes testify that the Father alone is the one true God, while Jesus is subordinate, totally dependent, prays to His God, lacks omniscience, and is called a man and messenger sent by God.",
  "The One True God & Jesus clearly below God",
  ["1. The One True God: Mark 12:29 ('Hear, O Israel, the Lord our God, the Lord is ONE'); Mark 10:18 ('Why do you call me good? NO ONE is good except GOD ALONE!'); John 17:3 ('This is eternal life, that they know YOU, THE ONLY TRUE GOD'); 1 Corinthians 8:4 ('We know that there is NO GOD BUT ONE').",
   "2. Jesus clearly below God: John 14:28 ('THE FATHER IS GREATER THAN I'); John 20:17 ('I ascend to MY FATHER and your Father, to MY GOD and your God'); John 5:19 ('THE SON CAN DO NOTHING of himself'); Matthew 27:46 ('MY GOD, my God, why have you forsaken me?')."],
  ["Mark 12:29; 10:18","John 17:3; 14:28; 20:17; 5:19","1 Corinthians 8:4","Matthew 27:46"],
  [
   N(C15,
    "Jesus acted on His own divine power and did not need to pray as a dependent creature.",
    "Six New Testament texts show Jesus completely dependent on the Father for His actions, judgment, and teaching, and repeatedly praying to God in submission, thanksgiving, and praise.",
    "Completely dependent & praying to His God",
    ["3. Jesus completely dependent: John 5:30 ('I CAN DO NOTHING of myself. AS I HEAR, so I judge'); John 7:16 ('MY TEACHING IS NOT MINE, but his who sent me'); John 14:10 ('THE FATHER who dwells in me DOES HIS WORKS').",
     "4. Jesus prays to His God: Luke 22:42 ('FATHER, if you are willing, take this cup from me'); John 11:41 ('Jesus lifted up his eyes and said: FATHER, I THANK YOU'); Matthew 11:25 ('I PRAISE YOU, FATHER, Lord of heaven and earth')."],
    ["John 5:30; 7:16; 14:10; 11:41","Luke 22:42","Matthew 11:25"],
    [],
    {quotes:[
      {by:"Jesus (John 5:30; 7:16)",en:"I can do nothing on my own. As I hear, I judge... My teaching is not mine, but his who sent me.",ref:"John 5:30; 7:16"},
      {by:"Jesus praying (Luke 22:42; John 11:41; Matt 11:25)",en:"Father, if you are willing, remove this cup from me... Father, I thank you... I praise you, Father, Lord of heaven and earth.",ref:"Luke 22:42; John 11:41; Matt 11:25"}]}),
   N(C15,
    "Jesus possessed all-knowing divine omniscience and never called Himself a mere man.",
    "Mark 13:32 and Acts 1:7 explicitly exclude the Son from knowing the final Hour, while John 8:40, John 5:37, and 1 Timothy 2:5 explicitly identify Jesus as a human messenger sent by God.",
    "Limited knowledge & 'a man and messenger'",
    ["5. Jesus does not know everything: Mark 13:32 ('But of that day or that hour NO ONE KNOWS, not even the angels, NOT EVEN THE SON, but THE FATHER ALONE'); Acts 1:7 ('It is not for you to know times or seasons that THE FATHER HAS FIXED').",
     "6. Jesus — man & messenger: John 8:40 ('Now you seek to kill me, A MAN who has told you the truth'); John 5:37 ('It is THE FATHER who SENT ME'); 1 Timothy 2:5 ('ONE MEDIATOR between GOD and men, namely THE MAN Christ Jesus')."],
    ["Mark 13:32","Acts 1:7","John 8:40; 5:37","1 Timothy 2:5"],
    [],
    {quotes:[
      {by:"Gospel of Mark",en:"But concerning that day or that hour, no one knows, not even the angels in heaven, nor the Son, but only the Father.",ref:"Mark 13:32"},
      {by:"John 8:40 & 1 Timothy 2:5",en:"Now you seek to kill me, a man who has told you the truth... For there is one God, and there is one mediator between God and men, the man Christ Jesus.",ref:"John 8:40; 1 Tim 2:5"}]}),
   N(C15,
    "Paul and the later epistles treat Christ as the supreme Godhead.",
    "Even the New Testament epistles repeatedly affirm God's absolute authority over Christ and teach strict monotheism ('the only true God,' 'only God,' 'God is one').",
    "God's absolute authority & apostolic monotheism",
    ["7. God's absolute authority: Ephesians 1:3 ('Blessed be THE GOD AND FATHER of our Lord Jesus Christ'); John 14:28 ('I am going to the Father, for THE FATHER IS GREATER THAN I'); 1 Corinthians 11:3 ('THE HEAD OF CHRIST IS GOD').",
     "8. Teaching God's uniqueness: John 17:3 ('This is eternal life, that they know YOU, THE ONLY TRUE GOD'); 1 Timothy 1:17 ('To the KING OF AGES, IMMORTAL, INVISIBLE, ONLY GOD, be honor'); James 2:19 ('You believe that ONLY ONE IS GOD? You do well!')."],
    ["Ephesians 1:3","John 14:28; 17:3","1 Corinthians 11:3","1 Timothy 1:17","James 2:19"],
    [],
    {quotes:[{by:"Paul & James",en:"Blessed be the God and Father of our Lord Jesus Christ... The head of Christ is God... To the King of the ages, immortal, invisible, the only God, be honor... You believe that God is one; you do well!",ref:"Eph 1:3; 1 Cor 11:3; 1 Tim 1:17; James 2:19"}]})
  ],
  {facts:[["Total Verses","25 NT citations across 8 themes"],["Core Creed","Mark 12:29; John 17:3; 1 Cor 8:4"],["Subordination","John 14:28; 20:17; 5:19; 1 Cor 11:3"],["Ignorance & Humanity","Mark 13:32; John 8:40; 1 Tim 2:5"]],
   visual:{kind:'compare',
    left:{title:"Trinitarian Claim",items:["Three co-equal, co-eternal Persons","Jesus is all-knowing almighty God","Jesus receives prayer as Supreme Deity"]},
    right:{title:"Jesus & NT Testimony (25 Verses)",items:["Father alone is 'the only true God' (John 17:3)","'The Father is greater than I' (John 14:28) & 'head of Christ is God' (1 Cor 11:3)","Ignorant of the Hour (Mark 13:32), prays to God, called 'a man' (John 8:40; 1 Tim 2:5)"]}},
   quotes:[
    {by:"Gospel of Mark",en:"Hear, O Israel: The Lord our God, the Lord is one... Why do you call me good? No one is good except God alone!",ref:"Mark 12:29; 10:18"},
    {by:"Gospel of John",en:"And this is eternal life, that they know you, the only true God... My Father is greater than I... I am ascending to my Father and your Father, to my God and your God.",ref:"John 17:3; 14:28; 20:17"}
   ]}),
 sum:"Across 25 New Testament verses in 8 categories, Jesus and the apostles affirm that the Father alone is the one true God while Jesus is a subordinate, dependent, praying, non-omniscient human messenger."});

/* 16. "Whoever curses father or mother must die" */
card(P+'c-kinder-sterben-die-fluchen',{
 title:"“Whoever curses father or mother must die” (Matt 15:4–6)",k:"Jesus · Matthew 15:4–6",blurb:"Jesus explicitly endorses the Mosaic death penalty for reviling parents and rebukes Pharisees for circumventing it — confirmed by Chrysostom.",
 claim:"Jesus abolished all harsh Old Testament capital punishments and never endorsed putting anyone to death.",
 tree:N(C16,
  "Jesus rejected Old Testament death penalties as outdated cruelty and taught pure non-lethal forgiveness.",
  "In Matthew 15:4–6 Jesus cites 'God commanded' that whoever reviles father or mother 'must surely die' and condemns the Pharisees for voiding God's word with their tradition — a passage John Chrysostom explicitly interprets as Jesus saying such offenders deserve death.",
  "Jesus upholds capital punishment in Matt 15:4–6",
  ["Gospel text (Matthew 15:4–6): 'For God said, \"Honor your father and mother,\" and \"Whoever reviles father or mother must surely die.\" But you say, \"Whoever tells father or mother: What you would have gained from me is an offering [to God]\" need not honor his father. Thus you have made void the word of God for the sake of your tradition.'",
   "John Chrysostom's commentary on Matthew 15:4 (Homily 51): Chrysostom explicitly writes that Jesus intends to strike fear into them and 'implies that such men are worthy of death' — asking the Pharisees: if someone who dishonors parents in words is punished with death, how much more you who do it in deeds and teach it to others, 'you who ought not even to live!'"],
  ["Matthew 15:4–6","John Chrysostom, Homily on Matthew 15:4 (Hom. 51)"],
  [],
  {facts:[["Passage","Matthew 15:4–6"],["Command Cited","Exodus 21:17 / Lev 20:9"],["Jesus' Verdict","'Made void the word of God'"],["Church Father","Chrysostom: 'worthy of death'"]],
   quotes:[
    {by:"Gospel of Matthew",en:"For God commanded, 'Honor your father and your mother,' and, 'Whoever reviles father or mother must surely die.' But you say, 'If anyone tells his father or his mother, \"What you would have gained from me is given to God,\" he need not honor his father.' So for the sake of your tradition you have made void the word of God.",ref:"Matthew 15:4–6"},
    {by:"John Chrysostom",en:"He wishes both to strike fear into them and to win over those with understanding, implying that such men are worthy of death. For if he who dishonors them in words is punished, how much more you, who do this in deeds and even teach it to others! You who ought not even to live, how can you rebuke the disciples?",ref:"Commentary on Matthew 15:4 (Homily 51)"}
   ]}),
 sum:"In Matthew 15:4–6 Jesus explicitly defends God's command that anyone reviling father or mother must die, and Chrysostom confirms He meant such offenders are 'worthy of death.'"});

/* 17. "Sell your cloak and buy a sword" */
card(P+'c-mantel-verkaufen-und-schwert',{
 title:"“Sell your cloak and buy a sword” (Luke 22:36)",k:"Jesus · Luke 22:36",blurb:"Jesus commands His disciples to arm themselves with swords; Mark's earliest Gospel omits any sword-rebuke or ear-healing; and Augustine affirms changing divine commands.",
 claim:"Jesus forbade His disciples from ever carrying or using weapons.",
 tree:N(C17,
  "Jesus preached absolute pacifism and never told His followers to acquire weapons.",
  "In Luke 22:36 Jesus explicitly tells His disciples to sell their cloaks and buy a sword; Mark (the earliest Gospel) contains neither the 'put away your sword' rebuke nor any healing of the severed ear; and Augustine (cited in Aquinas's Catena Aurea) openly explains the shift from peaceful commands to armed preparation as a divinely wise change of rules across different times.",
  "Sword command, Mark's silence & Augustine on shifting commands",
  ["Luke 22:36: 'He said to them, \"But now, let the one who has a moneybag take it, and likewise a knapsack, and let the one who has no sword sell his cloak and buy one.\"'",
   "Earliest Gospel (Mark 14:47): Mark — the earliest Gospel — reports a bystander striking off the high priest's servant's ear, yet tells neither of Jesus healing the ear nor of Jesus commanding the disciple to put the sword back in its sheath (those pacifist details appear only in later Gospels).",
   "Augustine (in Thomas Aquinas's Catena Aurea on Luke 22): Explaining why Jesus previously sent disciples without purse or sword yet now commands them to buy a sword, Augustine states: 'It is not through any inconsistency in Him who commands, but through the wisdom of the divine ordering, which varies according to different times, that precepts, counsels, or permissions are changed.'"],
  ["Luke 22:36","Mark 14:47","Augustine (in Thomas Aquinas, Catena Aurea on Luke 22)"],
  [],
  {facts:[["Passage","Luke 22:36"],["Earliest Gospel","Mark omits ear-healing & sword-rebuke"],["Church Father","Augustine (via Catena Aurea)"],["Principle","Divine precepts change by time"]],
   quotes:[
    {by:"Gospel of Luke",en:"He said to them, 'But now, whoever has a moneybag, let him take it, and likewise a knapsack; and whoever has no sword, let him sell his cloak and buy one.'",ref:"Luke 22:36"},
    {by:"Augustine (via Thomas Aquinas)",en:"It is not through any inconsistency in Him who commands, but through the wisdom of the divine ordering, which changes according to the different times, that precepts, counsels, or permissions are changed.",ref:"Catena Aurea on Luke 22"}
   ]}),
 sum:"Luke 22:36 records Jesus ordering His disciples to sell their cloaks to buy swords, Mark's earliest Gospel omits any sword-rebuke or ear-healing, and Augustine explicitly explains the shift as divine precepts changing with circumstances."});

/* 18. "Don't throw pearls before swine" */
card(P+'c-hunde-schweine-perle',{
 title:"“Don't throw pearls before swine” (Matt 7:6)",k:"Jesus · Matthew 7:6",blurb:"Jesus compares outsiders who reject Christian teaching to 'dogs' and 'pigs' and forbids sharing holy teaching with them.",
 claim:"Jesus never insulted outsiders or excluded anyone from hearing the Gospel.",
 tree:N(C18,
  "Jesus spoke only gentle, inclusive language and commanded Christians to preach to everyone indiscriminately.",
  "Matthew 7:6 explicitly instructs believers not to give what is holy to 'dogs' or throw pearls before 'pigs' — warning Christians not to teach the Gospel to immoral outsiders characterized as swine and dogs who refuse to understand.",
  "Exclusive animals metaphor in Matthew 7:6",
  ["Gospel command (Matthew 7:6): 'Do not give what is holy to dogs, and do not throw your pearls before pigs, lest they trample them underfoot and turn and tear you to pieces.'",
   "Plain implication: Far from unconditionally preaching to everyone with gentle language, Christians are told not to teach the Gospel to people labeled as immoral 'pigs and dogs' who do not want to understand the message anyway."],
  ["Matthew 7:6"],
  [],
  {facts:[["Passage","Matthew 7:6"],["Metaphor","Outsiders = 'dogs' & 'pigs'"],["Instruction","Withhold holy teaching / Gospel"],["Contrast","Against 'pure inclusivity' claims"]],
   quotes:[{by:"Gospel of Matthew",en:"Do not give dogs what is holy, and do not throw your pearls before pigs, lest they trample them underfoot and turn to attack you.",ref:"Matthew 7:6"}]}),
 sum:"Matthew 7:6 commands Christians to withhold sacred teaching from outsiders whom Jesus characterizes as 'dogs' and 'pigs' liable to trample it."});

})();
