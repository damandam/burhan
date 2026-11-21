/* Enrichment block — Christian Practice, Paradise, Veiling, Women Teaching & 2 Crucifixion Notes (19 Averroes channels, translated from German) — 2026-11-21. */
(()=>{
const AV=(n,link)=>({credit:'Averroes · #'+n+' (translated from German)',link});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});

/* 1. Ibn Ishaq and John the eyewitness */
card('islam/general/d-av-sonstiges-islam-3/c-ibn-ishaq-sagt-johannes-war-ein-augezeuge',{
 title:"Ibn Isḥāq and John the eyewitness",
 k:"Historiography · Sīrah & Isnād",
 blurb:"Why an unchained report attributed to Ibn Isḥāq citing the Bible carries no evidentiary weight in Islam.",
 claim:"Ibn Isḥāq confirms the crucifixion of Jesus because he cites John as an eyewitness.",
 tree:N(
  AV('ibn-ishaq-sagt-johannes-war-ein-augezeuge','https://discord.com/channels/1275832106949283962/1283453934437929092'),
  "Ibn Isḥāq cites the Gospel of John as an eyewitness account of Jesus's crucifixion — proving early Muslim historians accepted it.",
  "A report in Ibn Isḥāq's Sīrah citing the Bible without an isnād (chain of transmission) and without supporting hadiths cannot override the explicit Qur'ānic denial of the crucifixion.",
  "Why Ibn Isḥāq's Bible citation proves nothing",
  ["Qur'ānic standard: The report is rejected because the Qur'ān speaks unmistakably against the crucifixion (Qur'ān 4:157).",
   "Christian source material: Ibn Isḥāq here quotes directly from the Bible rather than transmitting an authoritative Islamic tradition.",
   "No isnād or hadiths: He supplies no chain of transmission (isnād) and cites no authentic hadiths to support such a claim.",
   "Biographical reliability: Classical hadith and historical critics note that Ibn Isḥāq's biography contains numerous transmission and historical errors."],
  ["Qur'ān 4:157","Ibn Isḥāq, Sīrat Rasūl Allāh (critique of isnād-less biblical reports)"],
  [],
  {facts:[["Author","Ibn Isḥāq"],["Issue","No isnād / Bible quote"],["Hadith Support","None provided"],["Verdict","Rejected against Qur'ān 4:157"]],
   visual:{kind:'compare',
    left:{title:"Christian Apologetic Claim",items:["Appeals to Ibn Isḥāq citing John as an eyewitness","Treats a biblical quote inside the Sīrah as Islamic proof"]},
    right:{title:"Islamic Methodology",items:["Qur'ān explicitly denies the crucifixion","No isnād chain and no corroborating hadiths","Ibn Isḥāq's biography has many recognized errors"]}}}),
 sum:"An isnād-less biblical quotation in Ibn Isḥāq, unsupported by hadiths and contradicted by the Qur'ān, establishes nothing against Islamic teaching."});

/* 2. Did al-Qurtubi say Jesus was crucified? */
card('islam/general/d-av-sonstiges-islam-3/c-qurtubi-sagt-gekreuzigt',{
 title:"Did al-Qurṭubī say Jesus was crucified?",
 k:"Tafsīr · Isnād Critique",
 blurb:"Al-Qurṭubī quoted a general report about past prophets/believers being tortured — and gave it without an isnād.",
 claim:"Al-Qurṭubī's Tafsīr affirms the crucifixion because it mentions people crucified on wood until death.",
 tree:N(
  AV('qurtubi-sagt-gekreuzigt','https://discord.com/channels/1275832106949283962/1283762277190864896'),
  "Al-Qurṭubī writes in his Tafsīr that some were crucified on wood until they died — showing acceptance of crucifixion narratives.",
  "First, the passage speaks generally of earthly kings persecuting believers/prophets; second, al-Qurṭubī explicitly cited this report without any chain of transmission (isnād), so it cannot be authenticated or treated as scholarly proof.",
  "Al-Qurṭubī's unchained report",
  ["Original report in al-Qurṭubī: The narration describes torment inflicted when earthly kings gained power over people — some sawn with saws, some flayed from head and face, some crucified on wood until death, and some burned with fire, ending with 'Allah knows best.'",
   "Lack of isnād (Arabic critique): As noted in scholarly critique — 'fa-awrada al-Qurṭubī raḥimahu Allāhu taʿālā hādhihi al-riwāyah bilā isnād' (And al-Qurṭubī, may Allah have mercy on him, cited this narration without an isnād).",
   "Methodological consequence: Without a verifiable chain of transmitters (isnād), the authenticity of the report cannot be established, rendering it scientifically unreliable in Islamic scholarship."],
  ["Tafsīr al-Qurṭubī (report without isnād)"],
  [],
  {facts:[["Scholar","Imām al-Qurṭubī"],["Status","Cited bilā isnād (no chain)"],["Subject","General torture by earthly kings"],["Verdict","Unverifiable & non-binding"]],
   quotes:[
    {by:"Tafsīr al-Qurṭubī (narrated report)",en:"The torment. And that is because the kings of the earth had power over them: some of them were sawn with saws, some had the skin flayed from head and face, some were crucified on wood until they died, and some were burned with fire. Allah knows best.",ref:"Tafsīr al-Qurṭubī"},
    {by:"Scholarly Isnād Critique",en:"Fa-awrada al-Qurṭubī raḥimahu Allāhu taʿālā hādhihi al-riwāyah bilā isnād (Al-Qurṭubī, may Allah have mercy on him, cited this narration without a chain of transmission).",ref:"Isnād assessment"}
   ]}),
 sum:"Al-Qurṭubī transmitted the general torture report without an isnād, meaning its authenticity cannot be verified and it proves nothing about Jesus's crucifixion."});

/* 3. Eating and drinking in the Kingdom */
card('christianity/practice/d-av-paradies-christentum/c-essen-und-trinken',{
 title:"Eating and drinking in the Kingdom",
 k:"Christian Paradise · NT & Jerome",
 blurb:"Jesus explicitly promises wine, bread, and banqueting at table in the Kingdom — despite Jerome's forced allegory.",
 claim:"Christian paradise is purely disembodied and spiritual, with no physical eating or drinking.",
 tree:N(
  AV('essen-und-trinken','https://discord.com/channels/1275832106949283962/1291008443251167233'),
  "Islamic paradise is mocked for physical food and drink, whereas Christianity teaches a purely spiritual heaven.",
  "The Gospels explicitly depict Jesus promising physical eating and drinking in the Kingdom of God — drinking the fruit of the vine anew, eating bread, fulfilling the Passover, and reclining at table with Abraham, Isaac, and Jacob.",
  "Five Gospel verses on eating and drinking in the Kingdom",
  ["Drinking wine (Matthew 26:29): 'But I say to you, I will not drink of this fruit of the vine from now on until that day when I drink it new with you in My Father's kingdom.'",
   "Eating bread (Luke 14:15): 'Now when one of those who sat at the table with Him heard these things, he said to Him, \"Blessed is he who shall eat bread in the kingdom of God!\"'",
   "Eating Passover (Luke 22:15–16): 'With fervent desire I have desired to eat this Passover with you before I suffer; for I say to you, I will no longer eat of it until it is fulfilled in the kingdom of God.'",
   "Table fellowship (Luke 22:30): '...that you may eat and drink at My table in My kingdom, and sit on thrones judging the twelve tribes of Israel.'",
   "Banquet with the Patriarchs (Matthew 8:11): 'And I say to you that many will come from east and west, and sit down with Abraham, Isaac, and Jacob in the kingdom of heaven.'"],
  ["Matt 8:11; 26:29","Luke 14:15; 22:15–16, 30"],
  [N(
   AV('essen-und-trinken','https://discord.com/channels/1275832106949283962/1291008443251167233'),
   "Jerome explains Matthew 26:29 allegorically: the vine is Israel, and Jesus drinking wine means rejoicing in Jewish faith.",
   "Jerome's allegorization collapses under contextual, logical, ritual, and methodological scrutiny — turning a straightforward Passover promise into an arbitrary riddle.",
   "Deconstructing Jerome's allegory",
   ["Jerome's chain of reasoning: (1) The vine = Israel, citing Jeremiah 2:21 ('I planted you a noble vine'), the Psalm of the vine transplanted from Egypt (Ps 80), and claiming all Scripture attests it; (2) 'Kingdom of the Father' = faith of believers, citing Luke 17:21 ('the kingdom of God is within you'); (3) Conclusion: when the Jews receive the Father's kingdom, the Lord will drink of their wine as Joseph drank with his brothers in Egypt.",
    "Contextual errors: Jerome completely ignores the Passover setting, mashes together unrelated verses, and tears texts out of their immediate narrative.",
    "Logical errors: He mixes incompatible metaphors, leaps across figurative planes, and dissolves literal Passover wine into abstract symbolism.",
    "Ritual errors: He erases the Seder meal context, overlooks the four Passover cups, and disregards the liturgical formula spoken over the cup.",
    "Methodological weaknesses & simpler reading: Arbitrary text-linking, overstretched allegories, and a forced Joseph parallel obscure the plain meaning — Jesus at his final Passover announces his death and promises renewed table fellowship in the concrete ritual setting of the coming Kingdom."],
   ["Jerome on Matt 26:29","Jer 2:21; Luke 17:21"],
   [],
   {facts:[["Target Text","Matthew 26:29"],["Jerome's Claim","Vine = Israel; Wine = faith"],["Flaw","Ignores Passover & 4 cups"]],
    visual:{kind:'compare',
     left:{title:"Jerome's Forced Allegory",items:["Vine = Israel (Jer 2:21 / Psalms)","Kingdom = inner faith (Lk 17:21)","Drinking wine = Joseph with brothers in Egypt"]},
     right:{title:"Plain Contextual Reading",items:["Spoken during the final Passover Seder","Refers directly to the concrete cup of wine","Promises future physical fellowship in the Kingdom"]}}})],
  {facts:[["Verses Cited","Matt 8:11, 26:29; Luke 14:15, 22:15–16, 30"],["Elements","Fruit of the vine, bread, Passover, table"],["Rebuttal Target","Jerome's allegorization"]],
   quotes:[
    {by:"Matthew 26:29",en:"I tell you, I will not drink from this fruit of the vine from now on until that day when I drink it new with you in my Father's kingdom.",ref:"Matt 26:29"},
    {by:"Luke 22:30",en:"...that you may eat and drink at my table in my kingdom and sit on thrones judging the twelve tribes of Israel.",ref:"Luke 22:30"}
   ]}),
 sum:"Five explicit Gospel passages promise eating bread, Passover, and drinking wine at Christ's table in the Kingdom, refuting Jerome's strained attempt to allegorize Matthew 26:29 away."});

/* 4. Angels with desires (Genesis 6) */
card('christianity/practice/d-av-paradies-christentum/c-engel-gelu-ste',{
 title:"Angels with desires (Genesis 6)",
 k:"Church Fathers · Genesis 6 & Jude",
 blurb:"Early Fathers, Jude, 2 Peter, and 1 Enoch confirm angels took human women — refuting the Sethite dodge.",
 claim:"Heavenly or spiritual beings cannot have physical desires or relations with women, and Genesis 6 refers only to descendants of Seth and Cain.",
 tree:N(
  AV('engel-gelu-ste','https://discord.com/channels/1275832106949283962/1291012183827939445'),
  "Angels are pure spirits without desire, and Augustine says giants already existed before the 'sons of God' married the 'daughters of men' (who were Sethites and Cainites).",
  "Genesis 6:4 links the Nephilim directly to that union, the Sethite reading fails on five textual/logical grounds, and Jude, 2 Peter, 1 Enoch, and major Church Fathers explicitly affirm angels lusted after and cohabited with women.",
  "Genesis 6:4 & refutation of the Sethite theory",
  ["Augustine's 'pre-existing giants' claim refuted: Genesis 6:4 states: 'The Nephilim were on the earth in those days, and also afterward, when the sons of God came in to the daughters of men.' Mentioning the Nephilim specifically at this union makes no sense if they existed independently — even on a Sethite/Cainite view, why would ordinary intermarriage produce Nephilim?",
   "1. Linguistic inconsistency: 'Bene ha'elohim' (sons of God) is never used anywhere else in the Hebrew Bible for the descendants of Seth.",
   "2. Lack of biblical basis: Scripture never characterizes Seth's descendants as uniquely pious or godly; that assumption is pure speculation.",
   "3. Illogical grouping: Equating 'sons of God' with Sethites and 'daughters of men' with Cainites absurdly implies all men were Sethites and all women were Cainites.",
   "4. Problematic moral implication: Treating Sethite–Cainite intermarriage as inherently sinful contradicts the biblical unity of humanity and invites dubious racialized readings.",
   "5. Unexplained result & physiological note: Normal human marriages cannot account for extraordinary Nephilim offspring; moreover, just as one can eat without feeling hunger, physical intercourse does not even philosophically require subjective lust as a precondition."],
  ["Gen 6:1–4","2 Pet 2:4–5","Jude 1:6, 14–15"],
  [N(
   AV('engel-gelu-ste','https://discord.com/channels/1275832106949283962/1291012183827939445'),
   "Did early Church Fathers really interpret Genesis 6 and Jude 6 literally as fallen angels?",
   "Yes — Justin Martyr, Clement of Alexandria, Cyprian, Papias, Hesychius, and even medieval scholastics (citing Augustine on Incubi) took angelic transgression with women literally.",
   "Early Church Fathers on fallen angels & women",
   ["Justin Martyr (100–165 CE, Second Apology, Ch. 5): Explicitly states that the angels transgressed their appointed order, were overcome by union with women, and begot children — those called demons.",
    "Clement of Alexandria (Paedagogus, Book 3, Ch. 8, §44.4): Quotes Jude 5–6 with the distinctive reading 'wild angels' (agrion angelon — vs. 'holy angels' in Lucifer) kept in eternal chains under darkness for judgment. Calling them 'humans' fails because mortals do not live forever in subterranean chains, and leaving their heavenly 'dwelling' denotes transcendent angelic origin.",
    "Cyprian of Carthage (On the Dress of Virgins, Ch. 14): Identifies the fallen angels cast to earth as those who lost heavenly power and taught women eye-kohl, cheek rouge, hair dye, and cosmetic artifice.",
    "Papias (Fragment 7) & Hesychius of Jerusalem (on Jude 1:6): Papias writes that God gave angels rule over the cosmic order, which came to nothing; Hesychius contrasts God not sparing the sinning angels with His mercy toward prostitutes and tax collectors.",
    "Isidore, Aquinas, Albertus Magnus, Bonaventure & Augustine: Isidore defines Incubi (called Dusii by the Gauls) from lying shamefully with women; Aquinas, Albertus Magnus, and Bonaventure explicitly affirm incubi and succubi in their commentaries on Sentences Distinction 2; and Augustine himself (City of God XV.23) accepts widespread credible reports that Silvani/Pans (Incubi) lusted after and lay with women — proving he still believed such beings could do so even while denying Gen 6 meant angels."],
   ["Justin Martyr, 2 Apol. 5","Clement, Paed. III.8.44.4","Cyprian, Hab. Virg. 14","Papias Frag. 7","Augustine, City of God XV.23"],
   [],
   {facts:[["Justin Martyr","Angels united with women"],["Clement","Paed. III.8.44.4: 'wild angels'"],["Scholastics","Aquinas, Albert, Bonaventure affirm Incubi"]],
    quotes:[
     {by:"Justin Martyr",en:"The angels transgressed this order appointed for them, were overcome by union with women, and begot children; these are those who are called demons.",ref:"Second Apology, Ch. 5"},
     {by:"Clement of Alexandria",en:"...and that he has kept the angels who did not keep their own domain, but left their proper dwelling, in eternal chains under the darkness of wild angels [agrion angelon] for the judgment of the great day.",ref:"Paedagogus III.8.44.4 (citing Jude 5–6)"},
     {by:"Augustine of Hippo",en:"And since there is a very widespread rumor, and many confirm that they have experienced it themselves or heard it from those whose credibility cannot be doubted, that Silvani and Pans, whom the people call Incubi, have often behaved indecently toward women and desired and consummated intercourse with them.",ref:"City of God, Book XV, Ch. 23"}
    ]}),
   N(
   AV('engel-gelu-ste','https://discord.com/channels/1275832106949283962/1291012183827939445'),
   "The Book of Enoch is apocryphal, so the angel-marriage story has no canonical standing.",
   "The New Testament itself (2 Peter 2:4–5 and Jude 1:14–15) treats the Enochic tradition as prophetic truth, Qumran shows its massive canonical prestige, and Augustine's dismissal of Enoch is self-contradictory.",
   "2 Peter, Jude, Qumran & the authority of 1 Enoch",
   ["2 Peter 2:4–5 & 1 Enoch 6:6: Peter links angels sinning and being cast into Tartarus directly to the Flood generation, echoing 1 Enoch 6:6 ('And they were in all two hundred, who descended in the days of Jared on the summit of Mount Hermon').",
    "Jude 1:14–15 quotes 1 Enoch 1:9 nearly verbatim: Jude calls Enoch 'the seventh from Adam' who prophesied ('Behold, the Lord comes with ten thousands of his holy ones to execute judgment...'), establishing Enoch's prophecy as authentic.",
    "Qumran Cave 4 evidence: Cave 4 preserved more copies of 1 Enoch than of Samuel, Kings, or Jeremiah — surpassed only by the Torah, Isaiah, and Psalms — demonstrating its immense early Jewish authority.",
    "Augustine (City of God XVIII.38) vs. Gennadius (De Viris Illustribus Ch. IV): Augustine admits Jude quotes Enoch but claims Enoch was excluded due to 'excessive antiquity' (despite older scriptures existing) and confesses 'the reason for this remains hidden from me' (ultimately rejecting it over canon tension). Gennadius notes Jude was rejected by many precisely for quoting the apocryphal Book of Enoch, yet gained canonical authority through age and usage."],
   ["1 Enoch 1:9; 6:6","Jude 1:14–15","Augustine, City of God XVIII.38","Gennadius, De Viris Illustribus IV"],
   [],
   {facts:[["Qumran Cave 4","More Enoch MSS than Samuel/Kings/Jeremiah"],["Jude 1:14–15","Verbatim quote of 1 Enoch 1:9"],["Augustine","Admits reason for rejection 'hidden'"]],
    quotes:[
     {by:"Augustine of Hippo",en:"What about Enoch, the seventh from Adam? Does not the canonical epistle of the Apostle Jude say that he prophesied? ... Now I confess that the reason for this remains hidden from me.",ref:"City of God, Book XVIII, Ch. 38"},
     {by:"Gennadius of Marseille (d. c. 496)",en:"Jude the brother of James left a short epistle which is reckoned among the seven catholic epistles, and because in it he quotes from the apocryphal book of Enoch it is rejected by many. Nevertheless by age and use it has gained authority and is reckoned among the Holy Scriptures.",ref:"De Viris Illustribus, Ch. IV"}
    ]})],
  {facts:[["Key Text","Genesis 6:1–4 & Jude 1:6"],["NT Links","2 Peter 2:4–5; Jude 1:14–15"],["Fathers","Justin, Clement, Cyprian, Augustine"]],
   visual:{kind:'steps',items:[
    ["1. Linguistic Failure","'Bene ha'elohim' never means Sethites anywhere in the Old Testament."],
    ["2. Narrative Collapse","Gen 6:4 links the Nephilim specifically to this union; ordinary Sethite–Cainite marriage explains nothing."],
    ["3. NT & Enochic Endorsement","2 Peter 2:4–5 & Jude 1:6, 14–15 explicitly draw on 1 Enoch's fallen-angels narrative."],
    ["4. Patristic Consensus","Justin, Clement, Cyprian, and later scholastics confirm angelic/demonic cohabitation with women."]
   ]}}),
 sum:"Genesis 6:4, 2 Peter, Jude, 1 Enoch, and early Church Fathers refute the artificial Sethite theory and confirm that Christian tradition itself taught angels and demons could lust after and unite with human women."});

/* 5. A physical resurrection (Job 19:26-27) */
card('christianity/practice/d-av-paradies-christentum/c-physiches-paradies',{
 title:"A physical resurrection",
 k:"Old Testament · Job 19:26–27",
 blurb:"Job explicitly expects to see God 'in my flesh' with his own eyes — a bodily, not disembodied, hope.",
 claim:"Biblical resurrection hope is purely spiritual and non-physical.",
 tree:N(
  AV('physiches-paradies','https://discord.com/channels/1275832106949283962/1291018737687855224'),
  "In the afterlife believers exist purely as immaterial spirits without physical flesh or bodily senses.",
  "Job 19:26–27 explicitly affirms seeing God 'in my flesh' with one's own physical eyes even after the destruction of the present skin.",
  "Job 19:26–27 on seeing God in the flesh",
  ["Verse 26: 'And after my skin is destroyed, yet in my flesh I shall see God.'",
   "Verse 27: 'Whom I shall see for myself, and my eyes shall behold, and not another.'",
   "Implication: Even in the Old Testament, resurrection hope is anchored in restored physical flesh and bodily sight, not an incorporeal ghost existence."],
  ["Job 19:26–27"],
  [],
  {facts:[["Book","Job 19:26–27"],["Key Phrase","'In my flesh I shall see God'"],["Sense","Own eyes ('not another')"]],
   quotes:[{by:"Job 19:26–27",en:"And after my skin is destroyed, this I know, that in my flesh I shall see God, whom I shall see for myself, and my eyes shall behold, and not another.",ref:"Job 19:26–27"}]}),
 sum:"Job 19:26–27 unambiguously grounds resurrection hope in physical flesh and bodily vision, directly refuting claims of a purely disembodied afterlife."});

/* 6. "A hundredfold... with wives" */
card('christianity/practice/d-av-paradies-christentum/c-hundertfache',{
 title:"“A hundredfold… with wives”",
 k:"Gospels & Fathers · Luke 18:29–30",
 blurb:"Luke 18:29 includes wives and fields in the reward; distinguishing 'a hundredfold' from 'eternal life' proves concrete recompense.",
 claim:"The 'hundredfold' reward in the Gospels (including wives and fields) is purely spiritual and cannot refer to bodily realities.",
 tree:N(
  AV('hundertfache','https://discord.com/channels/1275832106949283962/1362001979416510544'),
  "Jesus's promise of receiving a hundredfold (including wives, children, and fields) is strictly metaphorical and spiritual.",
  "Luke 18:29 explicitly lists 'wife' alongside houses and fields (Mark 10:29–30), and both verses separate the 'hundredfold' from 'eternal life' — making a purely spiritual reading redundant.",
  "Luke 18:29–30, Salvian & Origen on the hundredfold",
  ["Wives & fields in the text: Luke 18:29 explicitly includes 'wife' among what is forsaken for the Kingdom; moreover, the parallel promise lists 'fields/lands' — asking whether believers receive a 'spiritual field' exposes how strained a purely spiritual reading is, pointing instead to concrete realities in the coming Kingdom.",
   "Salvian of Marseille (405–451 CE, Ad ecclesiam / Adversus avaritiam, Book III, §§1–4): Reads the promise as receiving back a hundredfold in the future *plus* 'eternal life' — noting that eternal life is even greater than the hundredfold repayment because it makes the hundredfold possession everlasting.",
   "Redundancy argument: If 'eternal life' already represents the maximum spiritual reward, why does the text promise a hundredfold *and* eternal life? Naming both only makes sense if the hundredfold refers to distinct, concrete/bodily blessings rather than merely repeating 'eternal life.'",
   "Origen (Exhortation to Martyrdom, BKV divs. 15–16): While interpreting the hundredfold children as 'holy children,' Origen goes further and speculates about a real, eternal, and sacred 'fatherhood' in heaven — not merely a loose metaphor, but an actual, heightened heavenly parentage where martyrs who left earthly families become fathers of many holy children in the eternal realm."],
  ["Luke 18:29–30 (cf. Mark 10:29–30)","Salvian of Marseille, Ad ecclesiam III.1–4","Origen, Exhortation to Martyrdom 15–16"],
  [],
  {facts:[["Gospel Text","Luke 18:29–30 (lists 'wife')"],["Church Fathers","Salvian & Origen"],["Logic","Hundredfold + eternal life ≠ redundancy"]],
   quotes:[
    {by:"Salvian of Marseille (405–451 CE)",en:"...if he sows, whoever for His honor and love disposes of his house or his field or any other part of his possessions for a merciful purpose shall receive it back a hundredfold in the future; and moreover, it says, 'he shall possess eternal life.' ... And not only that, but 'eternal life,' it says, 'such a one shall possess.' That is far more than even the hundredfold repayment itself, because what one receives a hundredfold, one will possess forever.",ref:"Ad ecclesiam (Adversus avaritiam), Book III, §§1–4"}
   ],
   visual:{kind:'compare',
    left:{title:"Purely Spiritual Allegory",items:["Must invent 'spiritual fields' and 'spiritual wives'","Collapses 'hundredfold' into 'eternal life', making the twofold promise redundant"]},
    right:{title:"Textual & Patristic Logic",items:["Luke 18:29–30 distinguishes the manifold return from eternal life","Salvian treats the hundredfold as concrete future return possessed eternally","Even Origen speculates on a real heavenly fatherhood beyond mere metaphor"]}}}),
 sum:"Luke 18:29–30 lists wives alongside houses and fields and pairs the hundredfold reward with eternal life, defeating attempts to collapse the promise into redundant spiritual allegory."});

/* 7. The Church Fathers on resurrected bodies */
card('christianity/practice/d-av-paradies-christentum/c-paradies-frau-christentum-krichenva-ter',{
 title:"The Church Fathers on resurrected bodies",
 k:"Church Fathers · Corporeality & Paradise",
 blurb:"Resurrected bodies retain sex, organs, eating, and subtle physicality — plus fathers on procreation in paradise.",
 claim:"Classical Christianity teaches that resurrected bodies and spiritual beings are utterly non-physical, genderless, and devoid of earthly functions.",
 tree:N(
  AV('paradies-frau-christentum-krichenva-ter','https://discord.com/channels/1275832106949283962/1363808902457589821'),
  "In the resurrection and in heaven, bodies are purely ethereal and sexless, and spiritual beings have no corporeality at all.",
  "Patristic witnesses insist Christ rose with every physical organ, retained the male sex, ate real food (honeycomb and fish), taught that souls/angels have subtle bodies, and even affirmed marital procreation in unfallen Paradise or the millennial Kingdom.",
  "Physical resurrection, male sex & eating (Patristic Ch. 24)",
  ["Complete physical anatomy (Ch. 24): Whoever stood had feet; whoever showed a wounded side had a belly and chest; whoever spoke used tongue, palate, and teeth like a plectrum striking strings; whoever had touchable hands had arms — therefore a full body composed of real members.",
   "Preservation of sex: The text explicitly notes he rose 'not female, but male, i.e., of the same sex in which he had died.'",
   "Real eating proves corporeality: Peter saw the Lord on the shore eating honeycomb and broiled fish; Jairus's daughter was given food after being raised; Lazarus ate a meal with the Lord after being dead four days.",
   "Locked doors do not prove a 'vaporous' body: Entering through closed doors no more implies an airy body than walking on water before the Passion did (which both Jesus and Peter did) — miracles reveal God's omnipotence without abolishing bodily nature.",
   "Gospel proof texts: 'Put your finger here and touch my hands; reach out your hand and put it into my side' (John 20:27); 'Look at my hands and my feet, that it is I myself. Touch me and see, for a spirit does not have flesh and bones as you see I have' (Luke 24:39)."],
  ["Patristic Resurrection Treatise Ch. 24","John 20:27; Luke 24:39"],
  [N(
   AV('paradies-frau-christentum-krichenva-ter','https://discord.com/channels/1275832106949283962/1363808902457589821'),
   "At least angels and human souls are completely incorporeal pure spirits.",
   "Over half a dozen major early Church Fathers taught that angels, souls, and the risen Christ possess real (often 'fine-corporeal') bodies.",
   "Survey: 10 patristic sources on fine-corporeal spirits",
   ["Ignatius of Antioch (c. 110 CE, Smyrnaeans 3) & Jerome (De viris illustribus, PL XXIII 633): 'I am not a bodiless demon' (ouk eimi daimonion asomaton), echoed in apocryphal texts like the Gospel of the Hebrews and Preaching of Peter.",
    "Clement of Alexandria (Stromata 7.12, PG IX 509C; Stromata 6.6, PG IX 273C): Speaks of a 'corporeal soul' (somatike psyche), finer than water even when loosely called 'bodiless.'",
    "Origen (c. 185–254, Commentary on John 4:24): 'Every spirit is a body, only the Holy Spirit is not' (pan pneuma ... soma tynchanon).",
    "Justin Martyr (Dialogue with Trypho), Irenaeus (Against Heresies) & Tertullian: All defend the genuine corporeality of angels, souls, and the risen Christ.",
    "John Cassian (4th–5th c., Collationes Patrum 7.13, PL XLIX–L 684A) & Gregory of Nyssa (De hom. opif. 6, PG XLIV 140A): Cassian records a desert father teaching 'Angels, archangels, our soul ... possess a body, only finer than our body'; Gregory describes the soul exercising corporeal functions through the senses.",
    "Theological rationale: This doctrine solved how spirits can be rewarded or punished, preserved the bodily reality of Christ's resurrection, and explained the unity of body and soul."],
   ["Ignatius, Smyrn. 3","Clement, Strom. 6.6; 7.12","Origen, In Ioann. 4.24","Cassian, Coll. 7.13","Gregory of Nyssa, De hom. opif. 6"],
   [],
   {facts:[["Sources","Ignatius, Clement, Origen, Cassian"],["Origen","'Every spirit is a body'"],["Purpose","Explains reward/punishment & unity"]],
    quotes:[
     {by:"Ignatius of Antioch (c. 110 CE)",en:"I am not a bodiless demon (ouk eimi daimonion asomaton).",ref:"Epistle to the Smyrnaeans, Ch. 3"},
     {by:"Origen of Alexandria",en:"Every spirit is a body, only the Holy Spirit is not (pan pneuma ... soma tynchanon).",ref:"Commentary on John (on John 4:24)"},
     {by:"John Cassian (Desert Father)",en:"Angels, archangels, our soul ... possess a body, only finer than our body.",ref:"Collationes Patrum 7.13 (PL XLIX–L 684A)"}
    ]}),
   N(
   AV('paradies-frau-christentum-krichenva-ter','https://discord.com/channels/1275832106949283962/1363808902457589821'),
   "In Christian theology, marriage and physical union have no place in Paradise at all.",
   "Irenaeus, Tertullian, Augustine, Bede, Commodianus, and Apollinaris of Laodicea all connected Paradise or the future Kingdom with marriage, procreation, or bodily enjoyment.",
   "Fathers on marriage, procreation & enjoyment in Paradise",
   ["Irenaeus of Lyon (Against Heresies, cited as V.19.1; cf. III.22.4): Explains that Adam and Eve were naked and unashamed in Paradise because, newly created, they had not yet reached adulthood and therefore had not yet entered into procreation — implying adulthood in Paradise would naturally have led to multiplying.",
    "Tertullian (To His Wife, Book I, §2): 'For Adam was the one husband of Eve, and Eve his one wife: one woman, one rib.'",
    "Augustine (On Marriage and Concupiscence, Book II, Ch. 6) & Bede (on Gen 2:18): Augustine insists marriage and procreation would have existed in Paradise without shameful lust or the 'body of this death'; Bede echoes Augustine, explaining parents in Paradise would have begotten children without burning lust or birth pain, sustained by the Tree of Life until the appointed number was filled.",
    "Commodianus (3rd-century Christian poet): Explicitly writes of the first resurrection and descending heavenly Jerusalem where the saints marry and beget children for a thousand years.",
    "Apollinaris of Laodicea (close friend of Athanasius, consulted by Basil on homoousios, revered early miaphysite figure cited by Cyril and Severus): Agapius of Manbij (10th-century Universal History) reports that Apollinaris taught people in the future life would eat, drink, and enjoy themselves with women."],
   ["Irenaeus, Adv. Haer. V.19.1 (cf. III.22.4)","Tertullian, Ad Uxorem I.2","Augustine, De Nupt. et Concup. II.6","Bede on Gen 2:18","Commodianus; Agapius of Manbij"],
   [],
   {facts:[["Augustine & Bede","Chaste procreation in Paradise"],["Commodianus","Marriage in 1,000-yr Kingdom"],["Apollinaris","Eat, drink & enjoy women in afterlife"]],
    quotes:[
     {by:"Augustine of Hippo",en:"There would not have been this shame-causing lust ... while marriage would nevertheless have existed even if no human being had sinned: for the procreation of children would have been possible without this disease ... In the body of that chaste life, which was the life of Paradise...",ref:"On Marriage and Concupiscence, Book II, Ch. 6"},
     {by:"Agapius of Manbij (on Apollinaris of Laodicea)",en:"He [Apollinaris] made a great error when he said that in the future life one would eat, drink, and enjoy oneself with women.",ref:"Universal History (10th century)"}
    ]})],
  {facts:[["Resurrected Body","Full organs, male sex, real food"],["Spiritual Beings","'Fine-corporeal' across 10 Fathers"],["Paradise","Augustine, Bede, Commodianus, Apollinaris"]],
   quotes:[
    {by:"Patristic Resurrection Treatise, Ch. 24",en:"Whoever stood certainly had feet. Whoever could show a wounded side must also have had a belly and a chest ... Since he possessed all members, he must also call a whole body his own ... and not a female, but a male one, that is, of the same sex in which he had died.",ref:"Chapter 24"}
   ]}),
 sum:"Far from teaching a sexless, disembodied afterlife, early Church Fathers insisted on full bodily anatomy, sex preservation, eating, fine-corporeal spirits, and even procreation or marital joy in Paradise."});

/* 8. Tertullian on veiling */
card('christianity/practice/d-av-christentum-kopftuch/c-tertullian',{
 title:"Tertullian on veiling",
 k:"Church Fathers · Head & Face Veil",
 blurb:"Tertullian mandates full veiling — down to the neck and even comparing Christian women unfavorably to veiled Arabian women.",
 claim:"The Islamic hijab/niqab is alien to early Christianity, where veiling was optional or meant only a tiny symbolic cap.",
 tree:N(
  AV('tertullian','https://discord.com/channels/1275832106949283962/1291829866273964062'),
  "Paul's veiling command applied only to married women in prayer or meant a small symbolic head covering, not full hijab.",
  "Tertullian (c. 198 CE) explicitly refutes every loophole: he requires all women — including virgins from puberty — to veil completely everywhere, covering head, hair, ears, and neck, and praises Arabian pagan women who cover the entire face save one eye.",
  "Universal law, virgins & natural order (ANF Vols. 3–4)",
  ["Natural and divine law (ANF 3, p. 96): Tertullian appeals to the universal law engraved in natural tablets, citing Paul ('Does not even nature teach you?', 1 Cor 11:14) alongside Romans on Gentiles doing the law by nature.",
   "Contrast with men (ANF 3, p. 102): Christ is the Christian man's head, leaving his head free without covering or crown; the woman's head is already claimed by a covering and must bear 'the burden of her own humility.'",
   "No exemption for virgins (ANF 3, pp. 687–689): Those who exempt virgins because Paul said 'women' are refuted — 'every woman' covers every age, rank, and condition, just as 'man' bars youths from covering. Moreover, 'because of the angels' refers to the daughters of men tempting angels, which certainly included virgins. 'Why uncover before God what you cover before men? Will you be more modest in public than in church? Be veiled, virgin!'",
   "Ban on false hair & vanity (ANF 4, p. 22): Cast off the slavery of adornment and false hair; 'God commands you to be veiled' — lest heads be displayed.",
   "Age & apostolic precedent (ANF 4, pp. 24, 27–28, 32–33, 35): Virgins must veil from puberty ('when the daughters of men could invite desire and marry'), admitting no excuse of time, person, or region. Churches across Greece, barbarian provinces, Africa, and Corinth itself — founded by the apostles — veil their virgins; fearing strangers outside, they must show at least equal reverence before the brethren in church."],
  ["Tertullian (A.D. 198), ANF Vol. 3 pp. 96, 102, 687–689","Tertullian, ANF Vol. 4 pp. 22, 24, 27–28, 32–35"],
  [N(
   AV('tertullian','https://discord.com/channels/1275832106949283962/1291829866273964062'),
   "Did Tertullian really specify how much must be covered — or was a headscarf/bonnet enough?",
   "In ANF Vol. 4 p. 37, Tertullian mocks small caps, turbans, and mere threads on the crown, defines the veil down to where the garment meets the neck, cites an angelic vision rebuking a bare neck, and holds up full-face Arabian veiling as judge over Christian women.",
   "Exact extent of the veil & the Arabian comparison (ANF 4, p. 37)",
   ["Against partial caps & headbands: Some women bind only the front with turbans or woolen bands, or wear tiny linen caps over the crown that fail to reach the ears — 'if they are so weak in hearing that they cannot hear through a covering, I pity them.'",
    "Exact boundary of the veil: 'The whole head constitutes \"the woman.\" Its boundaries and limits reach all the way to where the garment begins. The domain of the veil extends over the space covered by unbound hair, so that the neck too is enclosed' — for 'the veil is their yoke.'",
    "Angelic revelation rebuking a bare neck: Tertullian cites a revelation to a sister whose neck an angel struck as if applauding, saying: 'Elegant neck, and deservedly bared! It is good for you to uncover from head to waist, lest this freedom of your neck go to your disadvantage!' He condemns women who stay uncovered during Psalms or at the mention of God, or stick a mere tassel, tuft, or thread on the crown of their heads while praying.",
    "Pagan Arabian women as judges: 'The pagan women of Arabia will be your judges, who cover not only the head, but also the face so completely that they are content to enjoy light with one free eye rather than prostitute the whole face' — noting a Roman queen's remark that a woman would rather see than be seen."],
   ["Tertullian, ANF Vol. 4 p. 37 (On the Veiling of Virgins 17)"],
   [],
   {facts:[["Minimum Extent","Full head, hair, ears & neck"],["Rejected","Tiny caps, front bands, threads"],["Model Cited","Arabian women leaving 1 eye free"]],
    quotes:[
     {by:"Tertullian (ANF Vol. 4, p. 37)",en:"They ought to know that the whole head constitutes 'the woman.' Its limits and boundaries reach to where the garment begins. The space of the veil extends over the space covered by the unbound hair, so that the necks too may be enclosed.",ref:"On the Veiling of Virgins, Ch. 17"},
     {by:"Tertullian (ANF Vol. 4, p. 37)",en:"The pagan women of Arabia will be your judges, who cover not only the head, but also the face so completely that they are content to enjoy light with one free eye rather than prostitute the whole face.",ref:"On the Veiling of Virgins, Ch. 17"}
    ]})],
  {facts:[["Author","Tertullian (c. 198 CE)"],["Sources","ANF Vol. 3 & Vol. 4 (14 passages)"],["Scope","All women & virgins from puberty"]],
   quotes:[
    {by:"Tertullian (ANF Vol. 3, p. 689)",en:"Why uncover before God what you cover before men? Will you be more modest in public than in church? Be veiled, virgin, if you are a virgin; for you ought to blush.",ref:"On Prayer, Ch. 22 (ANF 3, p. 689)"}
   ]}),
 sum:"Tertullian treats full veiling of the head, hair, and neck (and even praises one-eyed Arabian face-veiling) as a binding apostolic and natural law for every woman and virgin."});

/* 9. Clement of Alexandria on covering */
card('christianity/practice/d-av-christentum-kopftuch/c-clemens-von-alexandria',{
 title:"Clement of Alexandria on covering",
 k:"Church Fathers · Head & Face Veil",
 blurb:"Clement commands covering both head and face, leaving no body part bare, even down to the ankles.",
 claim:"Early Christian modesty meant only inner virtue, not covering the head, face, or body.",
 tree:N(
  AV('clemens-von-alexandria','https://discord.com/channels/1275832106949283962/1291830654488678463'),
  "Face covering and strict full-body modesty are uniquely Islamic customs absent from early Church Fathers.",
  "Clement of Alexandria (c. 195 CE) explicitly teaches that a Christian woman must leave no part of her body uncovered — forbidding even baring the ankle and commanding that both head and face be veiled.",
  "Five passages from Clement's Paedagogus",
  ["Covering the eyes (ANF Vol. 2, p. 265): Clement prescribes wearing such a covering as is needed to cover the eyes of women.",
   "Veiling head and face without ostentation (ANF Vol. 2, p. 266): 'It has also been commanded that the head be veiled and the face covered; for it is an evil thing when beauty is a snare for men' — forbidding conspicuous purple veils.",
   "Modesty and shawl in prayer and public (ANF Vol. 2, p. 290): She will never fall who places modesty and her shawl before her eyes, nor lead another into sin by uncovering her face — 'for this is the wish of the Word, since it is fitting for her to pray veiled.'",
   "Classical model of extreme modesty (Paedagogus III.11.79): Clement praises Aeneas's wife, who out of extreme modesty did not uncover herself even in terror during the sack of Troy, remaining veiled while fleeing the burning city.",
   "No body part uncovered (Paedagogus II.10.114): 'For it is not fitting that any part of the woman remain uncovered. It is not only forbidden to bare the ankle, but it is also commanded that the head be veiled and the face covered. For it is not right that the beauty of the body serve as a hunting net for catching men.'"],
  ["Clement of Alexandria (A.D. 195), ANF Vol. 2 pp. 265–266, 290","Clement, Paedagogus II.10.114; III.11.79"],
  [],
  {facts:[["Author","Clement of Alexandria (c. 195 CE)"],["Work","Paedagogus (ANF Vol. 2)"],["Standard","Head, face & ankles covered"]],
   quotes:[
    {by:"Clement of Alexandria",en:"It is not fitting that any part of the woman remain uncovered. It is not only forbidden to bare the ankle, but it is also commanded that the head be veiled and the face covered. For it is not right that the beauty of the body serve as a hunting net for catching men.",ref:"Paedagogus, Book II, Ch. 10, §114"},
    {by:"Clement of Alexandria",en:"And she will never fall who puts modesty and her shawl before her eyes; nor will she invite anyone else into sin by uncovering her face. For this is the wish of the Word, since it is fitting for her to pray veiled.",ref:"ANF Vol. 2, p. 290"}
   ]}),
 sum:"Clement of Alexandria explicitly commands women to cover head, face, eyes, and even ankles so bodily beauty never becomes a snare for men."});

/* 10. Jerome on modest women */
card('christianity/practice/d-av-christentum-kopftuch/c-hieronymous',{
 title:"Jerome on modest women",
 k:"Church Fathers · Modesty & Cosmetics",
 blurb:"Jerome condemns curled hair, rattling shoes, kohl, rouge, and white lead as 'the mask of the Antichrist.'",
 claim:"Cosmetics and alluring dress are harmless personal expression in classical Christianity.",
 tree:N(
  AV('hieronymous','https://discord.com/channels/1275832106949283962/1306606251920330802'),
  "Traditional Christianity never treated makeup, seductive hairstyles, or cosmetic adornment as spiritually dangerous.",
  "St. Jerome contrasts the truly penitent woman — unadorned and weeping — with women wearing rouge, white lead, and eye-antimony, calling such painted faces 'a mask belonging to the Antichrist.'",
  "Jerome's indictment of cosmetic adornment",
  ["Repentance over seduction: Baptized in her tears, the penitent woman dries the Lord's feet with the very hair that once seduced many; she wears no curled hairstyle, no rattling shoes, and does not darken her eyes with antimony — yet in her unadorned state she is fairer than ever.",
   "Rejection of rouge and white lead: 'What have rouge and lead-water (white lead) to do on the face of a Christian woman?' One mimics the natural red of cheeks and lips, the other the paleness of face and neck.",
   "Spiritual danger: Both serve only to inflame young men's lust, provoke desire, and betray an unchaste mind — and how can a woman weep over her sins if tears expose her true look and carve furrows down painted cheeks?",
   "Final verdict: 'Such adornment does not come from the Lord — such a mask belongs to the Antichrist.'"],
  ["St. Jerome (on penitence & cosmetics)"],
  [],
  {facts:[["Author","St. Jerome"],["Target","Antimony, rouge, white lead, curled hair"],["Verdict","'Mask belongs to the Antichrist'"]],
   quotes:[{by:"St. Jerome",en:"What have rouge and white lead to do on the face of a Christian woman? One imitates the natural red of cheeks and lips, the other the paleness of face and neck. Both serve only to inflame the lust of young men, excite desire, and reveal an unchaste mind ... Such adornment does not come from the Lord — such a mask belongs to the Antichrist.",ref:"St. Jerome"}]}),
 sum:"Jerome condemns eye-antimony, rouge, white lead, curled hair, and rattling shoes as lust-inflaming artifice belonging not to Christ, but to the Antichrist."});

/* 11. Hermas and other early writers */
card('christianity/practice/d-av-christentum-kopftuch/c-krichenva-ter-andere',{
 title:"Hermas and other early writers",
 k:"Church Fathers · Continuous Veiling Tradition",
 blurb:"From Hermas and Chrysostom to Ambrose, Theodoret, Gratian, Nicodemus & the Apostolic Constitutions — continuous head and face veiling.",
 claim:"Strict continuous veiling of head and face was an isolated quirk of Tertullian, not the broader Christian tradition.",
 tree:N(
  AV('krichenva-ter-andere','https://discord.com/channels/1275832106949283962/1291830487366766666'),
  "Outside Tertullian, early and classical Christians did not require continuous veiling or face covering.",
  "Across East and West — Hermas, Chrysostom, Ambrose, Theodoret, the Apostolic Constitutions, Nicodemus the Hagiorite, and Gratian's Decretum — Christian authorities required continuous head and often face veiling in public and church.",
  "Early witnesses: Hermas, Chrysostom, Gratian & Valerius Maximus",
  ["Shepherd of Hermas (c. 150 CE, ANF Vol. 2, p. 18; cited as Vol. 1 in notes): Depicts the Church as a virgin dressed like a bride in white with white sandals, 'veiled up to the forehead, and her headdress consisted of a turban, and her hair was white.'",
   "John Chrysostom (Field, Homilies on 1 Corinthians, on 1 Cor 11): Teaches that a woman must cover herself not merely during prayer, but permanently — 'For she ought to have authority over her head because of the angels' shows this rule holds unceasingly.",
   "Decretum Gratiani (C.30 q.5 c.7, §1): Explains why married women must stay veiled — 'that they may recognize that they must always be subordinate and humble toward their husbands.'",
   "Valerius Maximus (1st c. CE, Book VI, Ch. 3): Even Roman precedent recorded by Valerius Maximus reports that C. Sulpicius Gallus divorced his wife solely because he found her outdoors with an uncovered head."],
  ["Hermas, ANF p. 18","Chrysostom, Hom. on 1 Cor 11 (Field)","Decretum Gratiani C.30 q.5 c.7","Valerius Maximus VI.3"],
  [N(
   AV('krichenva-ter-andere','https://discord.com/channels/1275832106949283962/1291830487366766666'),
   "Did later Greek and Latin Fathers also require covering the face on the streets?",
   "Yes — Ambrose, Theodoret, the Apostolic Constitutions, and Nicodemus the Hagiorite explicitly extend veiling to concealing the face outdoors and in church.",
   "Ambrose, Theodoret, Apostolic Constitutions & Nicodemus",
   ["Ambrose of Milan (340–397 CE, On Virgins / De virginibus ad Marcellinam, Book II, Ch. IV, §29, BKV p. 357): When a Christian soldier rescues a virgin by trading garments, he tells her: 'Throw the cloak around you: let it conceal the virgin body and preserve its integrity! Take the helmet: let it cover your hair, hide your face.'",
    "Ambrose of Milan (On Repentance / De paenitentia, Book I, Ch. 14, BKV): Common custom teaches that a woman veils her head to guard modesty even in public intercourse; her face must not lightly meet a young man's eyes, so she wears the bridal veil to avoid mutual wounds from casual glances — 'she veils her head so as neither to see nor be seen.'",
    "Theodoret of Cyrus (393–466 CE, Historia Religiosa, Ch. 29, Praise of Marana and Kyra): Both ascetics wore wide cloaks falling to their feet in back and to the belt in front, 'completely veiling face, neck, chest, and arms'; only Marana spoke to visiting women pilgrims, while no human ever heard Kyra speak.",
    "Apostolic Constitutions (Book I, Of the Laity: Subordination of the Wife to the Husband, BKV p. 29): Commands Christian women to please only their husbands: 'On the streets, cover your face, for by the veil you conceal your countenance from the curious.' Forbids cosmetics ('excessive adornment mocks the grace of the Artist') and instructs: 'Walk with downcast eyes and veil yourself as befits women!'",
    "Nicodemus the Hagiorite (on 1 Cor 11:7–10): Women must not dress up or wear makeup, especially going to church; they must not go bareheaded, 'but cover not only their head, but also their face when leaving the house, and especially when entering the house of God,' citing Paul on honoring husbands and guardian angels."],
   ["Ambrose, De virg. II.4.29; De paenit. I.14","Theodoret, Hist. Rel. 29","Apostolic Constitutions I (BKV p. 29)","Nicodemus the Hagiorite on 1 Cor 11:7–10"],
   [],
   {facts:[["Ambrose","Veil head & hide face in public"],["Apostolic Constitutions","'On the streets, cover your face'"],["Theodoret","Marana & Kyra veiled face to feet"]],
    quotes:[
     {by:"Apostolic Constitutions, Book I",en:"On the streets, cover your face, for by the veil you conceal your countenance from the curious ... Walk with downcast eyes and veil yourself as befits women!",ref:"Book I (BKV p. 29)"},
     {by:"Ambrose of Milan",en:"A woman veils her head in order to keep her chastity and modesty secure even in public intercourse. Her face ought not easily offer itself to the eyes of a young man; therefore she is to be covered with the bridal veil ... when she veils her head so as neither to see nor to be seen.",ref:"De paenitentia, Book I, Ch. 14"},
     {by:"Theodoret of Cyrus",en:"Both wear wide cloaks that fall down the back and cover the feet, and reach in front down to the belt, completely veiling face, neck, chest, and arms.",ref:"Historia Religiosa, Ch. 29"}
    ]})],
  {facts:[["Tradition Span","2nd c. to Orthodox/Canon Law"],["Key Rule","Unceasing covering, not just prayer"],["Scope","Head, hair, face, neck & silence"]],
   quotes:[
    {by:"John Chrysostom",en:"The woman must cover herself not only during prayer, but permanently, since it is said: 'For she shall have authority over her head because of the angels,' showing that this is to be observed not merely at the time of prayer, but unceasingly.",ref:"Homilies on 1 Corinthians (Field)"},
    {by:"Shepherd of Hermas (c. 150 CE)",en:"...a virgin met me, dressed as if coming out of a bridal chamber, all in white and with white sandals, veiled up to the forehead, and her headdress consisted of a turban, and her hair was white.",ref:"ANF (cited as Vol. 1 p. 18; Vol. 2)"}
   ]}),
 sum:"From Hermas and Chrysostom to Ambrose, Theodoret, Gratian, Nicodemus, and the Apostolic Constitutions, continuous head and face veiling is mainstream historical Christianity, not a Tertullian quirk."});

/* 12. Thomas Aquinas: women in subjection */
card('christianity/practice/d-av-frauen-lehren/c-aquinas',{
 title:"Thomas Aquinas: women in subjection",
 k:"Scholastic Theology · Summa IIa-IIae q.177 a.2",
 blurb:"Aquinas bars women from public Church teaching due to natural subjection, arousal of lust (Sirach 9), and inferior wisdom.",
 claim:"Medieval Catholic orthodoxy affirmed women's equal authority to teach publicly in the Church.",
 tree:N(
  AV('aquinas','https://discord.com/channels/1275832106949283962/1293219198775988224'),
  "In Catholic theology, women are barred from teaching only for liturgical order, not because of natural subjection or intellectual deficiency.",
  "In Summa Theologiae IIa-IIae, q. 177, a. 2, Thomas Aquinas explicitly forbids women from publicly addressing the Church for three reasons: natural female subjection (Gen 3), danger of provoking male lust (Sirach 9), and women's general lack of perfection in wisdom.",
  "Aquinas's three reasons & distinction of public vs. private speech",
  ["Permitted vs. forbidden speech (corpus): Aquinas distinguishes private, familiar conversation with one or a few people (where women may exercise the grace of speech, e.g. in the family) from publicly addressing the whole Church, which is strictly forbidden to women.",
   "Reason 1 — Natural subjection (Gen 3): First and principally, because of the condition of the female sex, which must be subject to man (Genesis 3). Public teaching and persuading belong to superiors/prelates, not subordinates; even subordinate men may teach publicly because their subjection is accidental rather than rooted in natural sex difference.",
   "Reason 2 — Avoiding temptation (Sirach 9): Lest men's minds be enticed to lust by women's public speaking, citing Sirach 9: 'Her conversation kindles like fire.'",
   "Reason 3 — Deficiency in wisdom: Because women generally are not perfected in wisdom, so it is unfitting to entrust public teaching to them.",
   "Debate note parallels: The channel notes how Aquinas's framework on female subjection, wisdom, lust, and witness/marriage-age comparisons (e.g., invalid marriage / 11-year comparison where the husband is more readily believed) undercuts Christian polemics against Islamic gender rulings."],
  ["Thomas Aquinas, Summa Theologiae IIa-IIae, q. 177, a. 2 (BKV)","Gen 3; Sirach 9; 1 Cor 14; 1 Tim 2"],
  [N(
   AV('aquinas','https://discord.com/channels/1275832106949283962/1293219198775988224'),
   "Didn't biblical women like Deborah, Huldah, Philip's daughters, and Solomon's mother teach or prophesy?",
   "Aquinas himself raises all three biblical objections in q. 177 a. 2 (arg. 1–3) and overrides them with 1 Corinthians 14 and 1 Timothy 2 in his sed contra.",
   "Aquinas's objections (arg. 1–3) & sed contra",
   ["Objection 1 (arg. 1): Proverbs 4 ('I was an only son before my mother, and she taught me') suggests women may teach.",
    "Objection 2 (arg. 2): Prophecy is greater than the grace of speech, yet women prophesied — Deborah (Judges 4), Huldah wife of Shallum (4 Kings / 2 Kings 22), Philip's four daughters (Acts 21), and 1 Cor 11 ('Every woman who prays or prophesies...').",
    "Objection 3 (arg. 3): 1 Peter 4 ('As each has received a gift, minister it to one another') implies wise women should share their wisdom by speaking.",
    "Sed contra (authoritative rebuttal): Against all three stands Paul in 1 Corinthians 14 ('Let women keep silent in the churches') and 1 Timothy 2 ('I do not permit a woman to teach') — limiting female instruction solely to the private domestic sphere."],
   ["Summa Theologiae IIa-IIae, q. 177, a. 2, arg. 1–3 & s.c."],
   [],
   {facts:[["Objections","Prov 4; Deborah; Huldah; Acts 21; 1 Pet 4"],["Sed Contra","1 Cor 14 & 1 Tim 2"],["Resolution","Private family OK; public Church banned"]]})],
  {facts:[["Authority","St. Thomas Aquinas (Doctor Angelicus)"],["Text","Summa IIa-IIae, q. 177, a. 2"],["3 Grounds","Gen 3 subjection, lust (Sir 9), lesser wisdom"]],
   quotes:[
    {by:"Thomas Aquinas",en:"...publicly addressing the whole Church. And this is not permitted to a woman. First and principally because of the condition of the female sex, which ought to be subject to the man, as is said in Genesis 3 ... Secondly, lest men's minds be enticed to lust. For it is said in Sirach 9: 'Her conversation kindles like fire.' Thirdly, because women generally are not perfected in wisdom, so that it is not fitting for them to undertake public teaching.",ref:"Summa Theologiae, IIa-IIae, q. 177, a. 2, co."}
   ]}),
 sum:"Aquinas explicitly bars women from public Church teaching on the grounds of natural female subjection, male temptation (Sirach 9), and women's general lack of perfected wisdom."});

/* 13. John Chrysostom on women */
card('christianity/practice/d-av-frauen-lehren/c-chyrstomos',{
 title:"John Chrysostom on women",
 k:"Church Fathers · Homilies on Rom, 1 Tim & Matt",
 blurb:"Chrysostom restricts women's teaching to the home and uses 'let your wife teach you' in Matthew Homily 4 solely as bitter irony to shame sinful men.",
 claim:"John Chrysostom praised women teaching men publicly and suggested husbands should learn from their wives.",
 tree:N(
  AV('chyrstomos','https://discord.com/channels/1275832106949283962/1293239862916546726'),
  "Chrysostom commends women like Priscilla and even tells men in Homily 4 on Matthew to let their own wives teach them.",
  "Chrysostom limits Priscilla and faithful wives to private domestic instruction, explicitly bars women from public leadership or teaching over men (Homily 9 on 1 Tim), and uses 'handing men over to their wives' in Homily 4 on Matthew purely as an ironic insult comparable to sending sinners to learn from ants and beasts.",
  "Homily 31 on Romans & Homily 9 on 1 Timothy",
  ["Homily 31 on Romans (private vs. public teaching): Commenting on 'she labored much for you,' Chrysostom explains Paul forbade women from assuming public leadership and occupying the pulpit throne — not private instruction at home for profit, such as saving an unbelieving husband (1 Cor 7:16), raising children (1 Tim 2:15), or Priscilla instructing Apollos.",
   "Material service, not public preaching: Chrysostom stresses Paul said 'she labored much,' not 'she taught much' — referring to sharing dangers, financial needs, and travels with the apostles (just as women followed Christ and served with their possessions).",
   "Homily 9 on 1 Timothy (on 1 Tim 2:12, NPNF109): Resolving the tension with domestic exhortation, Chrysostom highlights Paul's clause 'nor to usurp authority over a man': from the beginning men were permitted to teach both men and women, whereas women may instruct by speech at home, 'but nowhere else are they permitted to preside or prolong their speech.'"],
  ["Chrysostom, Homily 31 on Romans","Chrysostom, Homily 9 on 1 Timothy (NPNF109)"],
  [N(
   AV('chyrstomos','https://discord.com/channels/1275832106949283962/1293239862916546726'),
   "In Homily 4 on Matthew (§7), Chrysostom says: 'I would hand you over to your own wives that they may teach you!'",
   "Quoting that line straight is a classic out-of-context blunder: Chrysostom calls it an unnatural reversal caused by sin, shaming men so that if they blush at being taught by a woman — or worse, by ants and animals — they will repent and reclaim their rightful authority.",
   "The irony in Homily 4 on Matthew, §7",
   ["Context (NPNF110, Matt. Hom. 4.7): Chrysostom explicitly states that by Paul's law the man should be the teacher, and that a wife teaching her husband means 'this order has been inverted by sin, and the body stands above the head.'",
    "Deliberate humiliation tactic: 'If you are ashamed to have a woman as your teacher, flee from sin, and you will soon be able to ascend the throne God gave you.'",
    "Lower than ants and beasts: Chrysostom adds that while man sins, Scripture sends him not only to a woman, 'but even to irrational things and those of lower kind — it is not ashamed to send you, honored with reason, as a pupil to the ant,' warning that if they despise their wives he will send them to the school of birds, fish, quadrupeds, and creeping things that are more chaste than they — exposing how disastrously an opponent ('worst argument of yours, Serhat') misread pure sarcasm as feminist endorsement."],
   ["Chrysostom, Homily 4 on Matthew, §7 (NPNF110)"],
   [],
   {facts:[["Text","Matthew Homily 4, §7"],["Rhetorical Mode","Humiliating irony to shame sinful men"],["Parallel","Learning from wives = learning from ants & beasts"]],
    quotes:[
     {by:"John Chrysostom",en:"I would entrust you to your own wives to teach you. It is true, by Paul's law you ought to be the teacher. But since this order has been inverted through sin and the body stands above the head, let us take even this way. Yet if you are ashamed to have a woman as your teacher, flee from sin, and you will swiftly be able to ascend the throne that God gave you.",ref:"Homily 4 on Matthew, §7"}
    ]})],
  {facts:[["Church Father","St. John Chrysostom"],["Texts","Rom. Hom. 31; 1 Tim. Hom. 9; Matt. Hom. 4"],["Rule","Home instruction only; zero public authority"]],
   quotes:[
    {by:"John Chrysostom",en:"He prevents them from assuming public leadership and occupying the throne on the pulpit, not however from the word of instruction ... women are permitted to instruct through speech at home, but nowhere else are they permitted to preside or prolong their speech, wherefore he adds: 'nor to rise up above the man.'",ref:"Homily 31 on Romans & Homily 9 on 1 Timothy"}
   ]}),
 sum:"Chrysostom confines women's teaching strictly to private domestic settings and uses 'let your wife teach you' in Matthew Homily 4 solely as stinging sarcasm alongside sending sinners to learn from ants and beasts."});

/* 14. Jerome's letter to Principia */
card('christianity/practice/d-av-frauen-lehren/c-hieronymus',{
 title:"Jerome's letter to Principia",
 k:"Church Fathers · Letter 127 to Principia",
 blurb:"Even the learned Marcella refused to teach in her own name, citing 1 Timothy 2:12 so as not to wrong the male sex.",
 claim:"Jerome's praise of Marcella's biblical learning proves early Christian women held independent teaching authority.",
 tree:N(
  AV('hieronymus','https://discord.com/channels/1275832106949283962/1293352789224849470'),
  "Jerome writes in Letter 127 that priests and scholars consulted Marcella on Scripture — proving women taught men freely.",
  "Jerome explicitly explains that Marcella never taught anything as her own view, instead attributing every answer to Jerome or other male teachers precisely because she knew 1 Timothy 2:12 forbade women to teach and would not wrong the male sex.",
  "Marcella's strict deference to 1 Timothy 2:12",
  ["Marcella's learning (Letter 127, §7): When Jerome visited Rome with Bishops Paulinus of Syrian Antioch and Epiphanius of Salamis on Cyprus, Marcella pressed him tirelessly with scriptural questions — not to quarrel, but to learn replies to potential objections — mastering what Jerome had learned through years of study.",
   "Consulted even by priests: After Jerome left Rome, people — including sometimes priests — came to Marcella to resolve scriptural disputes and obscure passages.",
   "Refusal to teach in her own name: Understanding 'to prepon' (what is fitting), she never delivered answers as her own opinion, 'but as from me or someone else, admitting that what she taught she had learned from others' — passing on only what men had taught her.",
   "Explicit Pauline reason: Jerome states directly why: 'For she knew that the Apostle had said, \"I do not permit a woman to teach,\" and she did not wish to give the impression of doing wrong to the male sex.'"],
  ["Jerome, Letter CXXVII (127) to Principia, §7 (NPNF206)","1 Tim 2:12"],
  [],
  {facts:[["Author","St. Jerome"],["Letter","Letter 127 to Principia, §7"],["Key Verse","1 Timothy 2:12"]],
   quotes:[{by:"St. Jerome (on Marcella)",en:"So wise was she and so well did she understand what philosophers call to prepon (what is fitting), that when answering questions she gave her opinion not as her own, but as from me or someone else, acknowledging that what she taught she had learned from others. For she knew that the Apostle had said, 'I do not permit a woman to teach,' and she did not wish to appear to wrong the male sex, of whom many (including sometimes priests) questioned her on doubtful and obscure points.",ref:"Letter CXXVII to Principia, §7"}]}),
 sum:"Jerome's Letter 127 proves the exact opposite of female teaching authority: even when priests asked Marcella about Scripture, she refused to speak in her own name out of obedience to 1 Timothy 2:12."});

/* 15. Tertullian on heretical women teachers */
card('christianity/practice/d-av-frauen-lehren/c-tertullian',{
 title:"Tertullian on heretical women teachers",
 k:"Church Fathers · Heresy & Female Teachers",
 blurb:"Tertullian treats women teaching, disputing, exorcising, or baptizing as a hallmark of shameless heresy.",
 claim:"Allowing women to teach, debate theology, or exercise ministry was accepted in 2nd–3rd century Christianity.",
 tree:N(
  AV('tertullian','https://discord.com/channels/1275832106949283962/1334803082197860432'),
  "Women teaching, disputing, and exercising spiritual leadership was normal in the early Church.",
  "In Prescription Against Heretics Ch. 41, Tertullian singles out women who teach, dispute, perform exorcisms, promise healings, or baptize as brazen proof of heretical disorder.",
  "Prescription Against Heretics, Ch. 41",
  ["Exact indictment: Tertullian mocks the discipline of heretical sects by pointing directly to their women: 'And the very women of these heretics, how wanton and presumptuous they are!'",
   "Five forbidden acts: He lists five actions orthodox Christianity strictly denied to women — daring (1) to teach, (2) to dispute, (3) to perform exorcisms, (4) to promise healings, and (5) perhaps even to baptize.",
   "Apologetic significance: If women teaching or debating publicly had been normal in the orthodox Church, Tertullian could never have used it as an obvious proof of heresy."],
  ["Tertullian, De praescriptione haereticorum (Prescription Against Heretics), Ch. 41"],
  [],
  {facts:[["Author","Tertullian"],["Work","Prescription Against Heretics, Ch. 41"],["Verdict","Female teaching = mark of heresy"]],
   quotes:[{by:"Tertullian",en:"And the very women of these heretics, how bold and presumptuous they are! They dare to teach, to dispute, to enact exorcisms, to promise cures, perhaps even to baptize.",ref:"Prescription Against Heretics, Ch. 41"}]}),
 sum:"Tertullian cites women daring to teach, dispute, exorcise, heal, or baptize as an open badge of shameless heresy, proving orthodoxy banned female public teaching."});

/* 16. The Didascalia: women may not teach */
card('christianity/practice/d-av-frauen-lehren/c-didascalia',{
 title:"The Didascalia: women may not teach",
 k:"Early Church Order · Didascalia Ch. 15",
 blurb:"Christ sent the Twelve, not Mary Magdalene or the other women, to teach — widows are the fixed 'altar of God' at home.",
 claim:"Jesus commissioned women equally alongside the Twelve Apostles to preach and teach the public.",
 tree:N(
  AV('didascalia','https://discord.com/channels/1275832106949283962/1335021416751304756'),
  "Jesus had female disciples like Mary Magdalene, proving women were appointed to teach the Gospel publicly.",
  "Chapter 15 of the Didascalia Apostolorum explicitly rejects this argument: Jesus had Mary Magdalene, Mary daughter of James, and the other Mary with him, yet he sent only the Twelve to teach — proving women were appointed to pray at home, not to teach.",
  "Didascalia Apostolorum, Chapter 15",
  ["Neither right nor necessary: 'It is therefore neither right nor necessary that women should be teachers, especially concerning the name of Christ and the redemption of his passion.' Women — and especially widows — were appointed to pray and entreat the Lord God, not to teach.",
   "Argument from Jesus's own practice: Jesus Christ sent the Twelve to instruct the people and the Gentiles. Though female disciples — Mary Magdalene, Mary the daughter of James, and the other Mary — accompanied them, he did not send them to teach the people; 'for if it were required that women should teach, our Master himself would have commanded them to give instruction with us.'",
   "The widow as fixed altar: A widow must know she is 'the altar of God' and sit always at home, never wandering shamelessly from house to house; for God's altar never runs about, but stays fixed in one place."],
  ["Didascalia Apostolorum, Ch. 15 (p. 64 / [[134]])"],
  [],
  {facts:[["Text","Didascalia Apostolorum, Ch. 15"],["Named Women","Mary Magdalene, Mary d. of James, other Mary"],["Rule","Appointed to pray at home, not teach"]],
   quotes:[{by:"Didascalia Apostolorum, Ch. 15",en:"It is therefore neither right nor necessary that women should be teachers ... For he, the Lord God Jesus Christ our Teacher, sent us the Twelve to instruct the people and the Gentiles; and there were with us women disciples, Mary Magdalene and Mary the daughter of James and the other Mary; yet he did not send them to instruct the people with us. For if it had been required that women should teach, our Master himself would have commanded these to give instruction with us.",ref:"Didascalia Apostolorum, Ch. 15"}]}),
 sum:"The Didascalia directly refutes modern appeals to Mary Magdalene: had Jesus intended women to teach, he would have sent his female disciples alongside the Twelve."});

/* 17. Hippolytus' Canons */
card('christianity/practice/d-av-frauen-lehren/c-hippolytus-von-rom',{
 title:"Hippolytus' Canons",
 k:"Early Church Order · Canons 17 & 18",
 blurb:"Even a woman wiser than all men must conceal her superiority and serve her husband; childbirth brings 40/80-day church exclusion.",
 claim:"Early Christian canons imposed no domestic subordination or ritual gender asymmetry on women.",
 tree:N(
  AV('hippolytus-von-rom','https://discord.com/channels/1275832106949283962/1341115686654840842'),
  "Early Christian church orders treated men and women identically without requiring submission or asymmetrical childbirth exclusions.",
  "The Canons of Hippolytus explicitly forbid a woman from opposing her husband or showing superior knowledge even over all men (Canon 17), and bar postpartum women from entering church twice as long for a daughter as for a son (Canon 18).",
  "Canons 17 & 18 of the Canons of Hippolytus",
  ["Canon 17 — Subordination even in superior wisdom: A woman must beware of neglecting household management or opposing her husband in anything. If she surpasses her husband in prudence and knowledge, she must ever be mindful of God; 'if she surpasses all men in her knowledge, she shall let no one feel this superiority, but rather serve her husband as the Lord and remember the poor as though they were her own kin.'",
   "Canon 18 — Asymmetrical childbirth exclusion: 'A woman who has given birth to a boy shall stand outside the church for 40 days; for a girl, even 80 days' — directly mirroring the doubled ritual impurity period of Leviticus 12."],
  ["Canons of Hippolytus, Canons 17–18"],
  [],
  {facts:[["Text","Canons of Hippolytus 17–18"],["Canon 17","Hide superior knowledge; serve husband as Lord"],["Canon 18","Stand outside church: 40d (boy) / 80d (girl)"]],
   quotes:[
    {by:"Canons of Hippolytus, Canon 17",en:"If she surpasses all men by her knowledge, she shall let no one feel this advantage, but rather serve her husband as the Lord and remember the poor as though they were her own kin.",ref:"Canon 17"},
    {by:"Canons of Hippolytus, Canon 18",en:"A woman who has given birth to a boy shall stand outside the church for 40 days; for a girl, even 80 days.",ref:"Canon 18"}
   ]}),
 sum:"The Canons of Hippolytus require even the wisest woman to hide her intellectual superiority and serve her husband as the Lord, while excluding postpartum mothers from church for 40 days for a boy and 80 days for a girl."});

/* 18. Cornelius a Lapide on 1 Corinthians 14:34 */
card('christianity/practice/d-av-frauen-lehren/c-lapide',{
 title:"Cornelius à Lapide on 1 Corinthians 14:34",
 k:"Biblical Commentary · 1 Cor 14:34–35",
 blurb:"À Lapide cites Ambrose, Anselm, Chrysostom, Aristotle, Primasius, Josephus, and Cajetan to bar women from speaking in church.",
 claim:"Paul's command for women to keep silent in 1 Corinthians 14:34 was only a local rule for noisy Corinthian wives, and Anna the prophetess proves women preached in public.",
 tree:N(
  AV('lapide','https://discord.com/channels/1275832106949283962/1366378429057859674'),
  "1 Corinthians 14:34–35 does not establish a general prohibition on women speaking or teaching in church, especially given Anna in Luke 2:38 and singing nuns.",
  "Cornelius à Lapide systematically synthesizes Ambrose, Anselm, Chrysostom, Primasius, and Cajetan to uphold the universal ban on female speaking/teaching in mixed church assemblies — while refuting objections from Anna and convent choirs.",
  "Five reasons for female silence in church (v. 34)",
  ["Ambrose & Anselm — even prophetesses must be silent (5 reasons): (1) Contrary to natural order and law (Gen 3:16) for subordinate women to speak in man's presence; (2) Contrary to proper modesty and humility; (3) Man is endowed with superior judgment, reason, ability, and discretion; (4) Anselm: when woman spoke, she led man into sin (Gen 3:6); (5) To curb talkativeness ('when two women argue it is like clashing two cymbals or ringing two bells'). Cross-ref 1 Tim 2:9 — calling female church leadership contrary to all law, right, and decorum.",
   "Tropological & philosophical reading: Tropologically, woman represents passion/desire and man represents reason (cf. Chrysostom, Hom. 37 in Morali), so passion must obey reason. À Lapide also quotes Aristotle (De Nat. Animal., Book IX, Ch. 1), describing women as more tearful, jealous, querulous, prone to curse and seek vengeance, more fearful, despondent, insincere, and easily deceived.",
   "Asking husbands at home (v. 35 & Primasius): Husbands should be educated enough to teach their wives faith; if husbands are unlearned, wives have preachers, confessors, and teachers — better to remain ignorant of non-essential points than ask publicly to their own shame and scandal of the church."],
  ["Cornelius à Lapide on 1 Cor 14:34–35","Ambrose; Anselm; Chrysostom Hom. 37; Aristotle Hist. Anim. IX.1; Primasius"],
  [N(
   AV('lapide','https://discord.com/channels/1275832106949283962/1366378429057859674'),
   "What about Anna the prophetess speaking in the Temple (Luke 2:38) and nuns singing in churches?",
   "À Lapide answers both objections using Josephus and Cardinal Cajetan: Anna spoke privately in the separate Court of Women, and nuns sing in women-only choirs rather than mixed assemblies.",
   "Refuting the Anna & singing-nuns objections",
   ["Objection 1 — Anna (Luke 2:38): She spoke to people privately and individually, not in a church assembly nor inside the Jerusalem Temple sanctuary itself (which only priests could enter); per Josephus, women had a separate Court of Women apart from men.",
    "Objection 2 — Nuns singing in church: Their church is not a mixed assembly of the faithful, but solely a choir of nuns. With Cajetan's agreement, Paul forbids women from speaking, teaching, exhorting, or questioning in the common assembly where men and women gather.",
    "Modernist contrast: Contemporary modernist Catholics often reject this classical exegesis, yet Chrysostom, Aquinas, and pre-modern Catholic commentators stood united on the prohibition."],
   ["Cornelius à Lapide on 1 Cor 14:35","Luke 2:38; Josephus; Cajetan"],
   [],
   {facts:[["Anna (Lk 2:38)","Spoke privately in Women's Court"],["Nuns","Women-only choir, per Cajetan"],["Modernists","Reject classical Chrysostom/Aquinas view"]]})],
  {facts:[["Commentator","Cornelius à Lapide (SJ)"],["Verse","1 Corinthians 14:34–35"],["Authorities","Ambrose, Anselm, Chrysostom, Aristotle, Cajetan"]],
   visual:{kind:'steps',items:[
    ["1. Natural Law (Gen 3:16)","Subordinate women may not address men in public worship."],
    ["2. Modesty & Reason","Man possesses superior judgment and reason; woman represents passion."],
    ["3. Guilt & Loquacity","Woman spoke to deceive Adam (Gen 3:6); silence restrains dispute."],
    ["4. Home Instruction","Questions belong at home (Primasius), not in mixed church assemblies."]
   ]}}),
 sum:"Cornelius à Lapide marshals Ambrose, Anselm, Chrysostom, Primasius, Josephus, and Cajetan to prove 1 Corinthians 14:34–35 universally bars women from speaking or teaching in mixed assemblies."});

/* 19. a Lapide on 1 Timothy 2:12 */
card('christianity/practice/d-av-frauen-lehren/c-lapide-2',{
 title:"à Lapide on 1 Timothy 2:12",
 k:"Biblical Commentary · 1 Tim 2:12–14",
 blurb:"À Lapide covers public & authoritative teaching bans, permitted private converts (Priscilla, Cecilia, Monica...), and creation/Fall hierarchy.",
 claim:"1 Timothy 2:12 does not ground women's silence in creation order or female susceptibility to deception.",
 tree:N(
  AV('lapide-2','https://discord.com/channels/1275832106949283962/1366419591902924811'),
  "1 Timothy 2:12 only addresses an isolated Ephesian dispute and does not teach universal female subordination from Adam and Eve.",
  "Cornelius à Lapide expounds 1 Timothy 2:12–14 via Theophylact, Chrysostom, Gregory of Nazianzus, Primasius, Augustine, Jerome, and Oecumenius — grounding the ban on public and authoritative teaching permanently in Adam's creation priority and Eve's deception.",
  "Public ban, private exceptions & 'hesychia' (v. 12)",
  ["Why Paul banned even prophetic women (Theophylact & Chrysostom): Since some women in Paul's day received prophecy, Paul explicitly forbids them from speaking or prophesying in the public prayer assembly (citing 1 Cor 14:34) — due to decency, modesty, female weakness and loquacity (Chrysostom), and reverence/subordination toward men.",
   "Permitted private instruction (7 historical examples): Privately at home, Priscilla instructed Apollos (Acts 18:26); mothers teach daughters and maids prudence and modesty (Titus 2:4); and believing wives may convert unbelieving husbands (1 Cor 7:16) — as St. Cecilia taught Valerian, St. Natalia taught Adrian, St. Monica taught Patricius, St. Martha taught Marius, Theodelinda taught Agilulf (King of the Lombards), Clotilde taught Clovis, and Flavia Domitilla converted Flavius Clemens.",
   "Banned even privately if authoritative: Paul adds 'nor to exercise authority (authentein) over a man, but to be in silence (hesychia)' — forbidding private teaching as well if done ex officio or with authority.",
   "Silence as adornment: Chrysostom says silence and modesty adorn a woman far more than costly robes; Euripides (Heraclidae) writes that silence, modesty, and staying quietly within are a woman's fairest gift; and Gregory of Nazianzus praises his sister Gorgonia for knowing divine things deeply yet speaking the least, keeping within the bounds of female piety."],
  ["Cornelius à Lapide on 1 Tim 2:12","Theophylact; Chrysostom; Euripides; Gregory of Nazianzus"],
  [N(
   AV('lapide-2','https://discord.com/channels/1275832106949283962/1366419591902924811'),
   "How does à Lapide explain verses 13–14 — 'Adam was formed first' and 'Adam was not deceived, but the woman was deceived'?",
   "He presents Adam's superiority in both creation order and reason, explains how Eve was deceived by the serpent while Adam yielded only to please his wife, and concludes with Chrysostom and Oecumenius that woman's bad teaching in Eden ended her right to teach.",
   "Creation priority & Eve's deception (1 Tim 2:13–14)",
   ["Verse 13 — Creation order & reason: Woman must keep silent, learn, and be subject because man excels her both in dignity of first creation (Adam first, Eve from Adam) and in strength of reason (Eve easily and rashly deceived, Adam not). Chrysostom notes Paul tacitly reproaches all women for rashness through Eve; Primasius summarizes that women are subordinate because 'later in order (of creation) and earlier in guilt (through the Fall).'",
    "Verse 14 — Why 'Adam was not deceived' (exapatētheisa): Solving the question of how Adam was not deceived though he ate, à Lapide gives the fifth and clearest explanation: the serpent dared not attack Adam directly, targeting the woman as easier to deceive ('The serpent deceived me'). Adam was not deceived by the serpent, nor did Eve intend to deceive him — he ate merely to please her as his companion ('The woman whom you gave me ... gave me from the tree, and I ate').",
    "Adam's subsequent pride: Once Adam consented and disobeyed, he too coveted the tree of life, fell into blindness, believed the serpent's promises, and aspired to divine omniscience (whence God's ironic 'Behold, Adam has become like one of us') — citing Theophylact, Ambrose, Chrysostom, Anselm, Augustine (City of God XIV.17), and Jerome (Against Jovinian I).",
    "Pauline conclusion (Chrysostom & Oecumenius): Being inferior in reason/prudence and subjected to man as punishment for sin, 'once woman taught badly and thereby plunged man and all else into ruin; therefore henceforth she shall not teach, but keep silent and learn from man how to speak and act well.'"],
   ["Cornelius à Lapide on 1 Tim 2:13–14","Primasius; Augustine, City of God XIV.17; Jerome, Adv. Jov. I; Oecumenius"],
   [],
   {facts:[["Creation","Adam first, Eve second"],["Deception","Serpent targeted Eve, not Adam"],["Punishment","Subjection & permanent teaching ban"]],
    quotes:[
     {by:"Primasius (cited by à Lapide)",en:"The Apostle teaches that women must be subject to men because they are later in order [of creation] and earlier in guilt [through the Fall].",ref:"On 1 Timothy 2:13"},
     {by:"Chrysostom & Oecumenius (cited by à Lapide)",en:"Once woman taught badly and thereby plunged man and all else into ruin; therefore henceforth she shall not teach, but keep silent and learn from man how to speak and act well.",ref:"On 1 Timothy 2:14"}
    ]})],
  {facts:[["Verse","1 Timothy 2:12–14"],["Greek Terms","authentein (usurp authority), hesychia (silence)"],["Private Cases","Priscilla, Cecilia, Natalia, Monica, Martha, Theodelinda, Clotilde, Domitilla"]],
   quotes:[
    {by:"Gregory of Nazianzus (on Gorgonia)",en:"What is wiser than silence? Who better discerned divine things both from divine oracles and from her own prudence and acumen, and who at the same time spoke less than she, keeping within the bounds of female piety?",ref:"Cited by à Lapide on 1 Tim 2:12"}
   ]}),
 sum:"Cornelius à Lapide grounds 1 Timothy 2:12–14's ban on public and authoritative female teaching in both Adam's creation priority and Eve's primal deception, allowing only non-authoritative private instruction at home."});
})();
