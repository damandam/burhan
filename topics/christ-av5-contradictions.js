/* Christianity AV batch 5 — Bible Contradictions (Averroes “Bibel Widersprüche”, 21 channels).
   18 text-bearing cards placed under christianity/bible/contradictions/<slug>.
   3 PDF-only channels (no body text; not invented):
   - #jesus-sagt-er-hat-nie-im-geheimen-gesprochen (1275861934771540079): Unbenanntes Dokument - 2026-07-21T010810.428.pdf
   - #himmel-widerspruch (1396124141115019298): Unbenanntes_Dokument-16.pdf
   - #jhwe-name-nicht-offenbart (1525320728654778470): Unbenanntes Dokument - 2026-07-11T040013.303.pdf
   Text-bearing channels with extra attachments:
   - #jesus-stab-wiederspruch (1275952300304633904): stab_widerspruch.docx.pdf, stab_widerspruch_1.docx
   - #judas-tot-wiederspruch (1275949673433141289): message.txt
   - #versuchung-widerspruch (1362884608815005937): message.txt
*/
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const C='christianity/bible/contradictions/';

/* 1. #feigenbaum-widerspruch */
const FT=AV('feigenbaum-widerspruch','1275848522851287092');
card(C+'fig-tree-withering',{
 title:"The cursed fig tree: withered immediately or the next day?",
 k:"Mark 11 vs. Matthew 21",
 blurb:"Mark says the cursed fig tree withered overnight; Matthew insists it withered immediately on the spot.",
 claim:"Matthew 21:18–20 and Mark 11:12–21 give incompatible timelines for the withering of the cursed fig tree.",
 tree:N(FT,
  "Matthew and Mark merely tell the same story of the cursed fig tree from complementary angles.",
  "They directly contradict each other on both timing and narrative sequence: in Mark 11:12–21, Jesus curses the fig tree (even though 'it was not the season for figs'), enters Jerusalem to cleanse the temple, leaves in the evening, and the disciples only discover the withered tree the next morning; in Matthew 21:18–20, the fig tree withers immediately (parachrēma) before their eyes, leaving the disciples astonished at how instantaneously it died.",
  "Immediate miracle vs. next-day discovery",
  ["Mark's sequence (Mark 11:12–21): On the morning after leaving Bethany, Jesus is hungry, sees a fig tree with leaves, finds nothing 'for it was not the season for figs' (v. 13), and curses it (v. 14). He then enters Jerusalem, clears the temple (vv. 15–18), and leaves the city in the evening (v. 19). Only the next morning (v. 20) do they see the fig tree withered from the roots, and Peter remarks: 'Rabbi, look! The fig tree that you cursed has withered' (v. 21).",
   "Matthew's sequence (Matthew 21:18–20): Returning to the city in the morning, Jesus is hungry, sees a single fig tree by the road with only leaves, curses it, and 'the fig tree withered at once' (v. 19). Seeing this, the disciples marvel and ask: 'How did the fig tree wither so instantaneously?' (v. 20).",
   "Cursing out of season: Mark 11:13 explicitly notes 'it was not the season for figs' — akin to cursing an apple tree in winter for having no apples. If the episode were purely symbolic of Israel's fruitlessness, Mark's explicit mention of the off-season makes no sense.",
   "Redactional explanation: The most plausible historical explanation is that Matthew (or his source) reworked Mark's account to heighten Jesus's miraculous power into an instant spectacle."],
  ["Mark 11:12–21 (Nestle-Aland)","Matthew 21:18–20 (Nestle-Aland)"],
  [
   N(FT,
    "Matthew simply compressed/abbreviated Mark's longer two-day narrative.",
    "Compression omits details; it does not fabricate astonishment at an instantaneous miracle.",
    "Why 'compression' fails",
    ["Explicit emphasis on immediacy: Matthew 21:19–20 does not merely skip the overnight gap — he expressly emphasizes 'at once' (sofort) and places the disciples' shocked question ('How did the fig tree wither so instantaneously?') directly at the scene. That is a dramatic change to the nature of the event, not a summary."],
    ["Matthew 21:19–20"]),
   N(FT,
    "Perhaps these were two separate fig trees cursed on different occasions.",
    "Both accounts describe the exact same setting, motive, curse, and reaction — with zero hint of a second tree.",
    "Not two separate events",
    ["Identical narrative frame: In both Gospels, Jesus is hungry while walking toward Jerusalem, spots a fig tree with leaves but no fruit, curses it never to bear fruit again, and the disciples react to its withering. Postulating two identical tree-cursings is pure invention against the text."],
    ["Mark 11:12–14, 20–21","Matthew 21:18–20"]),
   N(FT,
    "Only the symbolism matters; Mark mentions the roots (11:20), meaning it withered internally at the root first before the leaves died.",
    "Symbolism still changes when the miracle changes, and Mark explicitly says the whole tree withered — not just its leaves.",
    "Symbolic shift and the 'from the roots' excuse",
    ["Two different messages: In Mark it functions as a delayed symbolic curse; in Matthew it becomes an instantaneous display of wonder-working power.",
     "Refuting the 'from the roots' excuse: Mark 11:20 explicitly states they saw 'the fig tree withered from the roots,' and in v. 21 Peter tells Jesus 'the fig tree that you cursed has withered' — proving 'withered' was a general statement about the tree itself, not a contrast between hidden roots and visible leaves. Mark recorded 'from the roots' the next day; Matthew turned the curse into an instant withering."],
    ["Mark 11:20–21","Matthew 21:19–20"])
  ],
  {facts:[["Mark 11:12–21","Withered the next morning"],["Matthew 21:18–20","Withered immediately"],["Mark 11:13","Not the season for figs"],["Explanation","Matthew heightens Mark"]],
   quotes:[
    {by:"Matthew 21:19–20 (Nestle-Aland)",en:"And seeing a single fig tree by the wayside, he went to it and found nothing on it but only leaves. And he said to it, 'May no fruit ever come from you again!' And the fig tree withered at once. When the disciples saw it, they marveled, saying, 'How did the fig tree wither so instantaneously?'",ref:"Matt 21:19–20"},
    {by:"Mark 11:13, 20–21 (Nestle-Aland)",en:"And seeing in the distance a fig tree in leaf, he went to see if he could find anything on it. When he came to it, he found nothing but leaves, for it was not the season for figs... As they passed by in the morning, they saw the fig tree withered away to its roots. And Peter remembered and said to him, 'Rabbi, look! The fig tree that you cursed has withered.'",ref:"Mark 11:13, 20–21"}
   ],
   visual:{kind:'compare',
    left:{title:"Mark 11:12–21 (Two Days)",items:["Curses tree despite not being fig season (v. 13–14)","Enters Jerusalem, clears temple, leaves at evening (vv. 15–19)","Disciples see it withered the next morning (v. 20)"]},
    right:{title:"Matthew 21:18–20 (Instantaneous)",items:["Curses tree upon returning to city (v. 19)","Tree withers immediately on the spot (v. 19)","Disciples marvel at instant withering (v. 20)"]}}}),
 sum:"Mark's fig tree withers by the next morning after a temple visit while Matthew's withers instantaneously on the spot — an irreconcilable timeline shift that 'compression' or 'roots vs. leaves' excuses cannot erase."});

/* 2. #zeichen-jona-widerspruch */
const SJ=AV('zeichen-jona-widerspruch','1282854814434197536');
card(C+'sign-of-jonah',{
 title:"No sign at all, or the sign of Jonah?",
 k:"Mark 8:12 vs. Matt 12:39 / Luke 11:29",
 blurb:"Mark has Jesus flatly refuse any sign to this generation; Matthew and Luke add the exception of Jonah's sign.",
 claim:"Mark 8:10–13 contradicts Matthew 12:39 and Luke 11:29 on whether Jesus promised any sign to his generation.",
 tree:N(SJ,
  "Augustine explained that Mark only meant no sign 'from heaven' (like a solar miracle), whereas Matthew adds the 'earthly' sign of Jonah.",
  "Mark records an unconditional refusal — 'no sign will be given to this generation' — without 'from heaven' in Jesus's reply or 'except Jonah.' Augustine's attempt to label the resurrection an 'earthly' sign is theologically false, textually invented, and logically self-defeating.",
  "Unconditional refusal vs. Jonah exception",
  ["Mark 8:10–13: The Pharisees come out arguing and demand 'a sign from heaven' to test him. Jesus sighs deeply in his spirit and says: 'Why does this generation seek a sign? Truly, I say to you, no sign will be given to this generation.' He immediately leaves them, gets back into the boat, and crosses to the other side.",
   "Matthew 12:39 & Luke 11:29: Both explicitly state that 'no sign will be given to it except the sign of the prophet Jonah' (Matthew) / 'except the sign of Jonah' (Luke).",
   "Augustine's harmonization (On Mark 8:10–21): Augustine claims Mark's phrase 'no sign' must be understood as 'no such sign as they demanded, i.e., one from heaven,' and that Mark simply omitted what Matthew reported about Jonah.",
   "Historical-critical explanation: Matthew and Luke expanded the earlier Markan tradition to emphasize the resurrection as prophetic fulfillment; Mark neither knew nor accepted that exception."],
  ["Mark 8:10–13","Matthew 12:39","Luke 11:29","Augustine of Hippo, Harmony of the Gospels (on Mark 8:10–21)"],
  [
   N(SJ,
    "Augustine's distinction holds: the sign of Jonah is earthly, whereas the Pharisees demanded a sign from heaven.",
    "That reduces the resurrection itself to a non-divine 'earthly' sign and reads qualifications into Mark that do not exist.",
    "Why Augustine's distinction collapses",
    ["1. The resurrection is a heavenly sign: In Christian theology, the resurrection proves Jesus's divine authority ('All authority in heaven and on earth has been given to me,' Matt 28:18) — it is not a mere earthly natural event.",
     "2. The Pharisees would have recognized resurrection as divine: Even the Pharisees understood that raising the dead presupposes divine power (cf. John 12:18–19); a purely 'earthly' sign would never have satisfied their demand for divine authentication.",
     "3. Mark knows no such restriction: Mark simply writes 'no sign' — neither 'from heaven' in Jesus's answer nor 'except Jonah.' Augustine projects his harmonization into the text.",
     "4. Logical absurdity: If the sign of Jonah were merely earthly, there would be no true divine sign given at all."],
    ["Matthew 28:18","John 12:18–19","Mark 8:12"])
  ],
  {facts:[["Mark 8:12","'No sign will be given'"],["Matt 12:39 / Luke 11:29","'Except the sign of Jonah'"],["Patristic excuse","Augustine (earthly vs. heavenly)"],["Verdict","Direct textual contradiction"]],
   quotes:[
    {by:"Mark 8:11–12",en:"The Pharisees came and began to argue with him, seeking from him a sign from heaven to test him. And he sighed deeply in his spirit and said, 'Why does this generation seek a sign? Truly, I say to you, no sign will be given to this generation.'",ref:"Mark 8:11–12"},
    {by:"Augustine of Hippo",en:"Let no one be disturbed that the answer reported by Mark when they asked for a sign from heaven is not the same as that narrated by Matthew, namely about Jonah. Mark says the Lord's answer was that no sign would be given them; by this we must understand such a sign as they were demanding, that is, one from heaven. Yet Mark omitted to mention what Matthew reported.",ref:"On Mark 8:10–21"}
   ],
   visual:{kind:'compare',
    left:{title:"Mark 8:10–13",items:["Jesus sighs and flatly refuses","'No sign will be given to this generation'","No exception for Jonah; immediately departs by boat"]},
    right:{title:"Matthew 12:39 & Luke 11:29",items:["'An evil... generation seeks a sign'","'No sign will be given except the sign of Jonah'","Explicit exception referencing resurrection"]}}}),
 sum:"Mark 8:12 flatly denies any sign to that generation while Matthew 12:39 and Luke 11:29 promise the sign of Jonah, and Augustine's 'earthly vs. heavenly' distinction fails both textually and theologically."});

/* 3. #wieviele-kämpfer-sind-in-israel-gefunden-worden */
const DW=AV('wieviele-kämpfer-sind-in-israel-gefunden-worden','1285200782265946142');
card(C+'david-census-warriors',{
 title:"David's census: 800,000 or 1,100,000 Israelite warriors?",
 k:"2 Samuel 24:9 vs. 1 Chronicles 21:5",
 blurb:"A 300,000-man discrepancy in Israel's fighting force that neither 'uncounted standing troops' nor 'rounding' can resolve.",
 claim:"2 Samuel 24:9 and 1 Chronicles 21:5 contradict each other by 300,000 men on the number of warriors found in Israel.",
 tree:N(DW,
  "The two census figures can be reconciled by assuming 2 Samuel omitted the standing army or rounded the total.",
  "2 Samuel 24:9 reports 800,000 fighting men in Israel, whereas 1 Chronicles 21:5 reports 1,100,000 — an explicit 300,000-man contradiction with no textual clue of excluded divisions or rounding.",
  "800,000 vs. 1,100,000 warriors in Israel",
  ["Direct numerical conflict: In 2 Samuel 24:9, Joab reports 800,000 valiant men who drew the sword in Israel; in 1 Chronicles 21:5, Joab reports 1,100,000 men who drew the sword in Israel — a flat gap of 300,000 soldiers."],
  ["2 Samuel 24:9","1 Chronicles 21:5"],
  [
   N(DW,
    "2 Samuel excludes the standing army of 288,000 men plus 12,000 horsemen (= 300,000).",
    "Neither passage mentions excluding standing troops or cavalry; both present their counts as Israel's total fighting force.",
    "Refuting the standing-army excuse",
    ["Textual silence: Neither 2 Samuel 24:9 nor 1 Chronicles 21:5 distinguishes between militia, standing army (288,000), and cavalry (12,000). Importing those units to bridge the exact 300,000 gap is purely speculative and unsupported by the text."],
    ["2 Samuel 24:9","1 Chronicles 21:5"]),
   N(DW,
    "The number in 2 Samuel could have been rounded down by 300,000.",
    "Census totals in biblical narratives present precise tallies, and nothing in 2 Samuel indicates rounding.",
    "Refuting the rounding excuse",
    ["Precise census reporting: 2 Samuel 24:9 explicitly states '800,000' without approximation markers; biblical census accounts normally present exact numbers, and there is zero textual evidence that 300,000 soldiers were rounded away."],
    ["2 Samuel 24:9"])
  ],
  {facts:[["2 Samuel 24:9","800,000 warriors"],["1 Chronicles 21:5","1,100,000 warriors"],["Discrepancy","300,000 men"],["Excuses tested","Standing army & rounding"]],
   visual:{kind:'compare',
    left:{title:"2 Samuel 24:9",items:["800,000 valiant men in Israel","Presented as total swordsmen counted","No mention of excluded regiments or rounding"]},
    right:{title:"1 Chronicles 21:5",items:["1,100,000 men in Israel","Presented as total swordsmen counted","Exceeds 2 Samuel by 300,000 men"]}}}),
 sum:"2 Samuel 24:9 counts 800,000 Israelite swordsmen while 1 Chronicles 21:5 counts 1,100,000, leaving a 300,000-man contradiction unsupported by any textual hint of rounding or omitted troops."});

/* 4. #jesus-stab-wiederspruch */
const ST=AV('jesus-stab-wiederspruch','1275952300304633904');
card(C+'disciples-staff',{
 title:"Take only a staff, or take no staff at all?",
 k:"Mark 6:8 vs. Matt 10:10 / Luke 9:3",
 blurb:"Mark explicitly allows a staff and sandals; Matthew and Luke explicitly forbid both — and even Tatian couldn't harmonize them.",
 claim:"Mark 6:8–9 directly contradicts Matthew 10:9–10 and Luke 9:3 on whether the apostles were permitted to carry a staff and wear sandals.",
 tree:N(ST,
  "Mark permits a symbolic staff (or one already owned), whereas Matthew and Luke forbid a physical staff (or buying a new one).",
  "Mark 6:8–9 explicitly tells the disciples to take nothing 'except a staff only' (ei mē rhabdon monon) and to wear sandals, while Matthew 10:10 and Luke 9:3 explicitly forbid a staff (mēde rhabdon / mēte rhabdon) and sandals. Every harmonization — Augustine's mysticism, the 'buy vs. carry' wordplay, and Tatian's Diatessaron — collapses under Greek grammar, context, and patristic testimony.",
  "Staff permitted vs. staff forbidden",
  ["Direct textual clash: Mark 6:8–9 instructs the disciples to take 'nothing for their journey except a staff only — no bread, no bag, no money in their belts — but to wear sandals and not put on two tunics.' Matthew 10:9–10 commands: 'Acquire no gold or silver or copper for your belts, no bag for your journey, or two tunics or sandals or a staff' (Luke 9:3 likewise: 'Take nothing for your journey, no staff...').",
   "Historical-editorial explanation: Mark (~70 CE, earliest Gospel) reflects practical 1st-century travel rules (take a staff and sandals, rely on God for money); later Matthew (~80–90 CE) and Luke radicalize the mission discourse to symbolize absolute dependence on God (cf. Luke 22:35–36), reflecting evolving community theology under persecution.",
   "Channel attachments note: Channel includes two document files alongside the text (stab_widerspruch.docx.pdf, stab_widerspruch_1.docx)."],
  ["Mark 6:8–9","Matthew 10:9–10","Luke 9:3; 22:35–36"],
  [
   N(ST,
    "Augustine says Mark's 'staff' is symbolic ('authority of Christ') and his sandals have a 'mystical meaning,' while Matthew forbids a physical staff.",
    "The context in Mark lists literal travel provisions alongside bread, bags, money, and tunics — making Augustine's allegory textually baseless and logically circular.",
    "Refuting Augustine's mystical allegory",
    ["(A) Context refutes symbolism: Mark 6:8–9 lists concrete physical items (bread, bag, money, sandals, tunics). Nothing hints that 'staff' means 'power of Christ.' Likewise Matthew 10:9–10 forbids a real staff without hinting at a different meaning.",
     "(B) Physical understanding by the disciples: Preparing for an actual mission trip, the disciples would never read 'take a staff and sandals' as an abstract spiritual riddle.",
     "(C) Augustine's own words (Harmony of the Gospels, Book 2, Ch. 30): Augustine writes that 'in Mark we read that they should be shod with sandals seems to have a mystical meaning: that the foot should neither be covered above nor bare below, that is, that the Gospel should neither remain hidden nor lean on earthly advantages.' This shows sheer exegetical helplessness — dodging the literal clash by inventing mysticism.",
     "(D) Logical circularity: Why would Jesus say 'Take no staff... except the staff you don't take'?"],
    ["Augustine, On the Harmony of the Gospels 2.30","Mark 6:8–9","Matthew 10:9–10"]),
   N(ST,
    "Matthew 10:9 says 'acquire/buy' (ktēsēsthe), so Matthew only forbids buying an extra staff while Mark allows taking one you already own.",
    "Greek grammar, every translation, and every Church Father refute this: 'acquire' governs v. 9 (money), whereas v. 10 uses mēde rhabdon ('nor even a staff'), an absolute negation.",
    "Refuting the 'buy vs. carry' excuse",
    ["1. Greek grammar (mēde rhabdon): Only v. 9 uses 'acquire' (ktēsēsthe) for gold, silver, and copper; v. 10 switches to mēde ('neither / not even'): 'nor even a staff' (mēde rhabdon). Mēde is an absolute negation excluding any staff — whether bought, borrowed, or owned. Just as 'Eat no meat, nor even fish!' means 'no fish at all' (not 'only don't buy fish'), had Matthew meant 'do not buy a staff,' he would have written mē ktēsēsthe rhabdon.",
     "2. Unanimous Church Fathers: Not a single Church Father read Matthew 10:10 as 'don't buy' — not Augustine, not Ephrem the Syrian, not Jerome (Commentary on Matthew 10:10 cites it as not taking/carrying a staff). Hilary of Poitiers (Commentary on Matthew 10.5, 360 CE) writes plainly: 'take no money-bag for their journey, no two tunics, no sandals, and also take no staff in hand.'",
     "3. Logical absurdity: Under this excuse, Peter (who already owns a staff) may carry it, while John (who lacks one) is forbidden from acquiring one — an arbitrary, senseless rule for the same mission.",
     "4. Practical impossibility: Traveling 1st-century Roman roads without a staff (defense against robbers, wolves, and snakes, plus walking support) and barefoot on stones, thorns, and scorpions was reckless even compared to Essenes and Cynics."],
    ["Matthew 10:9–10 (Greek)","Jerome, Commentary on Matthew 10:10","Hilary of Poitiers, Commentary on Matthew 10.5 (360 CE)","Ephrem the Syrian","Augustine"],
    [],
    {quotes:[
      {by:"Hilary of Poitiers (360 CE)",en:"...take no money-bag for their journey, no two tunics, no sandals, and also take no staff in hand.",ref:"Commentary on Matthew 10.5"},
      {by:"Augustine of Hippo",en:"Moreover, what we read in Mark, that they should be shod with sandals, seems to have a mystical meaning: that the foot should neither be covered above nor bare below, that is, that the Gospel should neither remain hidden nor rest on earthly advantages.",ref:"On the Harmony of the Gospels, Book 2, Ch. 30"}
    ]}),
   N(ST,
    "Early Christian harmonizers successfully blended all four Gospels into one consistent narrative.",
    "Even Tatian's Diatessaron (~170 CE), the earliest Gospel harmony, failed on the staff contradiction — preserving both opposite commands side by side.",
    "Tatian's Diatessaron (~170 CE): failed harmonization in a primary source",
    ["Tatian's Diatessaron (Section 12): As the very first compiler who fused the four Gospels into one text, Tatian had every incentive to remove contradictions — yet he could omit neither version. The Arabic Diatessaron reads in effect: 'Take nothing for the way except a staff alone... you shall have no staff.' Within a few sentences, a staff is first allowed and then forbidden — primary-source proof that harmonization failed."],
    ["Tatian, Diatessaron §12 (~170 CE)"])
  ],
  {facts:[["Mark 6:8–9","'Except a staff only'; wear sandals"],["Matt 10:10 / Luke 9:3","'Nor a staff' (mēde rhabdon); no sandals"],["Patristic witness","Hilary, Jerome, Ephrem read 'no staff'"],["Tatian (~170 CE)","Diatessaron §12 contradicts itself"]],
   visual:{kind:'compare',
    left:{title:"Mark 6:8–9",items:["Take nothing 'except a staff only' (ei mē rhabdon monon)","Wear sandals","Practical 1st-century travel kit"]},
    right:{title:"Matthew 10:9–10 & Luke 9:3",items:["Take 'nor a staff' (mēde rhabdon / mēte rhabdon)","No sandals (Matt 10:10)","Radicalized total-dependency rule"]}}}),
 sum:"Mark 6:8–9 permits a staff and sandals while Matthew 10:10 and Luke 9:3 forbid them, leaving Augustine's mysticism, the 'buy vs. carry' wordplay, and even Tatian's Diatessaron unable to reconcile the texts."});

/* 5. #jarius-tochter-wiederspruch */
const JD=AV('jarius-tochter-wiederspruch','1275952184843960431');
card(C+'jairus-daughter',{
 title:"Was Jairus's daughter already dead or still dying?",
 k:"Matthew 9:18 vs. Mark 5:23",
 blurb:"In Matthew, Jairus announces his daughter has already died; in Mark, she is still alive at death's door when he begs Jesus.",
 claim:"Matthew 9:18 and Mark 5:23 contradict each other on whether Jairus's daughter was dead or still alive when Jairus approached Jesus.",
 tree:N(JD,
  "Augustine argued Matthew merely shortened the story to focus on the final outcome — raising the dead.",
  "Shortening a narrative does not change a dying child into a corpse in Jairus's own quoted speech: Matthew 9:18 quotes Jairus saying 'My daughter has just died,' whereas Mark 5:23 quotes him saying 'My little daughter is at the point of death... so that she may be made well and live.'",
  "Already dead vs. still dying",
  ["Matthew 9:18: A synagogue ruler approaches, kneels, and states explicitly: 'My daughter has just died; but come and lay your hand on her, and she will live.'",
   "Mark 5:23: Jairus pleads earnestly while his daughter is still alive: 'My little daughter is at the point of death. Come and lay your hands on her, so that she may be made well and live.' (Messengers only report her death later in Mark 5:35.)",
   "Augustine's harmonization (On the Harmony of the Gospels, Book 2, Ch. 28): Augustine claims Matthew 'for the sake of brevity preferred to say that our Lord was asked to do what is obvious, namely to raise the dead,' arguing Matthew stressed the goal (resurrection) while Mark/Luke gave fuller chronological detail and prioritized the father's faith over literal speech — which concedes Matthew altered Jairus's actual statement."],
  ["Matthew 9:18","Mark 5:23, 35","Augustine, On the Harmony of the Gospels (De Consensu Evangelistarum) 2.28"],
  [],
  {facts:[["Matthew 9:18","'My daughter has just died'"],["Mark 5:23","'Is at the point of death'"],["Mark 5:35","Death reported later"],["Augustine 2.28","Concedes brevity altered wording"]],
   quotes:[
    {by:"Matthew 9:18",en:"While he was saying these things to them, behold, a ruler came in and knelt before him, saying, 'My daughter has just died, but come and lay your hand on her, and she will live.'",ref:"Matt 9:18"},
    {by:"Mark 5:23",en:"And implored him earnestly, saying, 'My little daughter is at the point of death. Come and lay your hands on her, so that she may be made well and live.'",ref:"Mark 5:23"},
    {by:"Augustine of Hippo",en:"One must understand that for the sake of brevity Matthew preferred to say that our Lord was asked to do what is obvious, namely to raise the dead.",ref:"De Consensu Evangelistarum, Book 2, Ch. 28"}
   ],
   visual:{kind:'compare',
    left:{title:"Matthew 9:18",items:["Jairus says: 'My daughter has just died'","Requests resurrection directly","No later messengers reporting her death"]},
    right:{title:"Mark 5:23 (cf. Luke 8:42)",items:["Jairus says: 'She is at the point of death'","Prays that she may recover and stay alive","Death occurs later while en route (v. 35)"]}}}),
 sum:"Matthew 9:18 quotes Jairus announcing his daughter has already died while Mark 5:23 quotes him pleading for his still-living daughter, showing Matthew rewrote direct speech rather than merely summarizing."});

/* 6. #judas-tot-wiederspruch */
const JJ=AV('judas-tot-wiederspruch','1275949673433141289');
card(C+'judas-jeremiah-misattribution',{
 title:"Did Jeremiah or Zechariah prophesy Judas's 30 silver pieces?",
 k:"Matthew 27:9–10 vs. Zechariah 11:12–13",
 blurb:"Matthew attributes the prophecy of the thirty silver pieces and potter's field to Jeremiah, though it comes from Zechariah — and the earliest Greek MSS all read 'Jeremiah.'",
 claim:"Matthew 27:9–10 falsely attributes a prophecy from Zechariah 11:12–13 to the prophet Jeremiah, and the earliest manuscripts confirm 'Jeremiah' is the original reading.",
 tree:N(JJ,
  "Commentators explain 'Jeremiah' in Matthew 27:9 as a quote from a lost work of Jeremiah, a Jewish deletion, a memory slip, or a copyist's abbreviation error from 'Zechariah.'",
  "The quoted text of Matthew 27:9–10 ('thirty pieces of silver... potter's field') appears nowhere in Jeremiah and unmistakably adapts Zechariah 11:12–13 (cf. v. 4). Crucially, the earliest and weightiest Greek manuscripts (Codex Sinaiticus, Vaticanus, Alexandrinus, Ephraemi) all read 'Jeremiah' (Ieremiou), refuting claims that early manuscripts originally read 'Zechariah.'",
  "Misattribution to Jeremiah & manuscript proof",
  ["Matthew 27:9–10 vs. Zechariah 11:12–13: Matthew writes, 'Then was fulfilled what had been spoken by the prophet Jeremiah (Ieremiou), saying, \"And they took the thirty pieces of silver, the price of him on whom a price had been set by some of the sons of Israel, and they gave them for the potter's field, as the Lord directed me.\"' Yet no such verse exists in the Book of Jeremiah; the passage is from Zechariah 11:12–13 ('And they weighed out as my wages thirty pieces of silver. Then the LORD said to me, \"Throw it to the potter\" — the lordly price at which I was priced by them').",
   "Dominant Greek manuscript evidence for 'Jeremiah': The reading 'Jeremiah' (Ἰερεμίου) is supported by the oldest and most authoritative Greek manuscripts — Codex Sinaiticus (א), Codex Vaticanus (B), Codex Alexandrinus (A), and Codex Ephraemi (C) — plus minuscules 565, 579, 700, 892, 1241, 1424, 1844, M, bf, and l13 (lectionaries).",
   "Secondary witnesses for 'Zechariah': The reading 'Zechariah' (Ζαχαρίου) appears only in late or secondary Syriac, hexaplaric, and marginal text witnesses: the Syriac Hexapla (syhms/syhmg), LXX MS 2111, Greek witnesses Φ, 33, a, b, and Syriac/Coptic witnesses sys,p and bomss.",
   "John Chrysostom (†407, Homily on Matthew 27:1–10): Quotes Matthew 27:1–10 verbatim — including 'spoken through the prophet Jeremiah' — without correcting the attribution, focusing instead on how Judas's belated remorse, casting the coins in the temple, and suicide condemn the chief priests who hastened to hand Jesus over to Pilate during the festival.",
   "Channel attachment note: Channel also contains a text attachment (message.txt)."],
  ["Matthew 27:9–10; 26:15","Zechariah 11:4, 11–13","Jeremiah 18–19","Nestle-Aland Critical Apparatus","John Chrysostom, Homily 85 on Matthew 27:1–10"],
  [
   N(JJ,
    "The oldest manuscripts actually read 'Zechariah' — 'Jeremiah' is just a later copyist error (B.I. Gladkov; Mikhail Luzin's abbreviation theory).",
    "The exact opposite is true: the critical apparatus shows 'Jeremiah' dominates the earliest Greek codices (Sinaiticus, Vaticanus, Alexandrinus, Ephraemi).",
    "Refuting Gladkov and the abbreviation hypothesis",
    ["B.I. Gladkov (Orthodox commentator): Admits the prophecy comes from Zechariah 11:12–13, claims 'Jeremiah' entered through a copyist's mistake, and asserts that 'the oldest manuscripts actually name Zechariah' — a claim directly falsified by א, B, A, and C.",
     "Mikhail (Luzin) (Orthodox commentator): Notes the text matches Zechariah 11:12–13 (and Matt 26:15's 30 silver pieces = the price of a slave), reviews Augustine's memory-slip view and Jer 18–19 conflation, and suggests scribes confused abbreviated names (Iriou vs. Zriou). Yet the unanimous earliest uncials (א, B, A, C) confirm 'Jeremiah' was already entrenched at the base of the Greek manuscript tradition."],
    ["B.I. Gladkov","Mikhail (Luzin)","Codex Sinaiticus (א), Vaticanus (B), Alexandrinus (A), Ephraemi (C)"]),
   N(JJ,
    "Matthew quoted a lost work of Jeremiah, or Jews removed the verse from Jeremiah (Origen; Euthymius Zigabenus; Abbot Panteleimon).",
    "Zero evidence supports a lost Jeremiah prophecy or Jewish excision; apologetic guesses multiply precisely because the text as written is erroneous.",
    "Conflicting Orthodox apologetic excuses",
    ["Euthymius Zigabenus (12th c.) & Origen: Speculate the quote stood in a lost prophetic work of Jeremiah or was deliberately deleted later by the Jews.",
     "Augustine of Hippo (cited by Mikhail Luzin): Suggested it may have been a slip of memory by the writer naming Jeremiah instead of Zechariah.",
     "Philaret (Gumilevsky): Argues the evangelist cited Zechariah 11:12–13 from memory rather than verbatim, emphasizing how the Sanhedrin fulfilled the shepherd's 30-shekel valuation by buying the potter's field.",
     "Trinity Leaflets of Abbot Panteleimon: Acknowledges no literal passage exists in Jeremiah (actually Zechariah 11:12–13) and mentions both mutually incompatible guesses — either Jews tore it out of Jeremiah or a scribe erred in the Gospel manuscript."],
    ["Euthymius Zigabenus","Origen","Augustine","Philaret (Gumilevsky)","Trinity Leaflets of Abbot Panteleimon"])
  ],
  {facts:[["Matt 27:9","Names 'prophet Jeremiah'"],["Actual source","Zechariah 11:12–13"],["Early MSS (א, B, A, C)","All read 'Jeremiah'"],["Apologetics","5 conflicting guesses"]],
   quotes:[
    {by:"B.I. Gladkov (Orthodox Commentator)",en:"The evangelist adds that the prophecy of the prophet Jeremiah was fulfilled. In fact, however, it was Zechariah who proclaimed: 'And they will give me thirty pieces of silver as payment...' (Zechariah 11:12–13).",ref:"Commentary on Matt 27:9"},
    {by:"Trinity Leaflets of Abbot Panteleimon",en:"In the book of the prophet Jeremiah there is literally no such passage. Some interpreters suppose the passage cited by the evangelist was torn out of the book of Jeremiah by the Jews; others think a mistake was made in the manuscript of the Gospel at this point: it should read Zechariah instead of Jeremiah.",ref:"Commentary on Matt 27:9"}
   ],
   visual:{kind:'compare',
    left:{title:"Matthew 27:9–10 & Early MSS",items:["Explicitly names 'the prophet Jeremiah' (Ἰερεμίου)","Supported by Sinaiticus (א), Vaticanus (B), Alexandrinus (A), Ephraemi (C)","Quoted verbatim with 'Jeremiah' by John Chrysostom (†407)"]},
    right:{title:"Zechariah 11:12–13 & Secondary MSS",items:["Actual source of 'thirty pieces of silver' & 'potter'","'Zechariah' (Ζαχαρίου) appears only in late/Syriac/hexaplaric witnesses","Commentators split between memory slip, lost book, Jewish deletion, or scribal error"]}}}),
 sum:"Matthew 27:9 attributes a passage from Zechariah 11:12–13 to Jeremiah, and the earliest Greek uncials (Sinaiticus, Vaticanus, Alexandrinus, Ephraemi) all preserve 'Jeremiah' — refuting claims of a late copyist error."});

/* 8. #david-3-bestrafungen */
const DF=AV('david-3-bestrafungen','1285203451311030375');
card(C+'david-famine-years',{
 title:"David's punishment: seven years of famine or three?",
 k:"2 Samuel 24:13 vs. 1 Chronicles 21:12",
 blurb:"2 Samuel threatens seven years of famine; 1 Chronicles reduces it to three years for literary symmetry.",
 claim:"2 Samuel 24:13 and 1 Chronicles 21:12 contradict each other on whether God offered David seven or three years of famine.",
 tree:N(DF,
  "1 Chronicles 21:12 gives a neat triad — 3 years, 3 months, 3 days — so 'seven' in 2 Samuel must be a copyist error.",
  "2 Samuel 24:13 explicitly says seven years of famine while 1 Chronicles 21:12 says three years, with zero manuscript proof of a scribal error in Samuel. Rather, the Chronicler appears to have altered seven to three for stylistic symmetry, while a seven-year famine matches biblical usage elsewhere (e.g., Elisha's seven-year famine in 2 Kings 8:1).",
  "Seven years vs. three years of famine",
  ["Direct numerical conflict: Gad presents David with three choices of punishment after the census: 2 Samuel 24:13 offers 'seven years of famine,' whereas 1 Chronicles 21:12 offers 'three years of famine.'",
   "Refuting the copyist-error claim: There is no manuscript evidence whatsoever that 2 Samuel 24:13 originally read 'three' and suffered a copyist error; asserting one is pure speculation.",
   "Chronicler's literary symmetry vs. biblical precedent: The author of Chronicles likely modified the number intentionally because '3 years, 3 months, 3 days' sounded more symmetrical. Moreover, in 2 Kings 8:1, Elisha likewise announces a seven-year famine — confirming seven years fits the biblical pattern."],
  ["2 Samuel 24:13","1 Chronicles 21:12","2 Kings 8:1"],
  [],
  {facts:[["2 Samuel 24:13","7 years of famine"],["1 Chronicles 21:12","3 years of famine"],["Manuscript proof","None for scribal error in Samuel"],["Parallel","7-year famine in 2 Kings 8:1"]],
   visual:{kind:'compare',
    left:{title:"2 Samuel 24:13",items:["'Shall seven years of famine come to you in your land?'","No MS evidence of textual corruption","Matches 7-year famine motif (2 Kings 8:1)"]},
    right:{title:"1 Chronicles 21:12",items:["'Either three years of famine...'","Creates literary triad (3 years / 3 months / 3 days)","Redactional alteration by Chronicler"]}}}),
 sum:"2 Samuel 24:13 records seven years of famine while 1 Chronicles 21:12 records three, with zero manuscript evidence for a copyist error in Samuel."});

/* 9. #david-tötete-wieviele-männer */
const JS=AV('david-tötete-wieviele-männer','1285209111604105268');
card(C+'jashobeam-slain-men',{
 title:"Did David's chief hero slay 800 men or 300 at one time?",
 k:"2 Samuel 23:8 vs. 1 Chronicles 11:11",
 blurb:"Both the Hebrew text and the ancient Septuagint preserve the 800 vs. 300 discrepancy between Samuel and Chronicles.",
 claim:"2 Samuel 23:8 and 1 Chronicles 11:11 contradict each other on whether David's chief warrior killed 800 or 300 men in one encounter.",
 tree:N(JS,
  "The difference between 800 and 300 is merely a late copyist error.",
  "Even the ancient Greek Septuagint (LXX) translates 800 men in 2 Samuel 23:8 and 300 men in 1 Chronicles 11:11 — demonstrating that the contradiction is deeply embedded in the earliest extant textual traditions.",
  "800 vs. 300 men slain",
  ["Direct contradiction: David's foremost warrior (Josheb-basshebeth / Jashobeam) wielded his spear and killed 800 men at one time according to 2 Samuel 23:8, yet killed 300 men at one time according to 1 Chronicles 11:11.",
   "Refuting the copyist-error dismissal: In the ancient Septuagint (LXX), 2 Samuel 23:8 explicitly reads 800 men and 1 Chronicles 11:11 explicitly reads 300 men — proving this is not a late scribal slip."],
  ["2 Samuel 23:8 (MT & LXX)","1 Chronicles 11:11 (MT & LXX)"],
  [],
  {facts:[["2 Samuel 23:8","800 men slain"],["1 Chronicles 11:11","300 men slain"],["Septuagint (LXX)","Also preserves 800 vs. 300"],["Discrepancy","500 men"]],
   visual:{kind:'compare',
    left:{title:"2 Samuel 23:8",items:["Slays 800 men at one time","Confirmed in Septuagint (LXX)"]},
    right:{title:"1 Chronicles 11:11",items:["Slays 300 men at one time","Confirmed in Septuagint (LXX)"]}}}),
 sum:"2 Samuel 23:8 credits David's chief champion with 800 slain while 1 Chronicles 11:11 gives 300, and the Septuagint preserves the exact same discrepancy in both books."});

/* 10. #wieviele-wagen-pferde-hatte-salomo */
const SC=AV('wieviele-wagen-pferde-hatte-salomo','1285212120446930976');
card(C+'solomon-chariot-stalls',{
 title:"Did Solomon have 40,000 or 4,000 stalls of chariot horses?",
 k:"1 Kings 4:26 [5:6] vs. 2 Chronicles 9:25",
 blurb:"Kings gives Solomon 40,000 stalls of horses for his chariots; Chronicles cuts the number tenfold to 4,000.",
 claim:"1 Kings 4:26 (5:6 in German/Hebrew numbering) and 2 Chronicles 9:25 contradict each other by a factor of ten on Solomon's chariot-horse stalls.",
 tree:N(SC,
  "1 Kings simply suffered a copyist error inflating 4,000 to 40,000.",
  "1 Kings 4:26 (5:6 MT/German) states 40,000 stalls while 2 Chronicles 9:25 states 4,000, and there is no manuscript evidence whatsoever proving a copyist error in 1 Kings — making it an unproven excuse for an unmistakable contradiction.",
  "40,000 vs. 4,000 chariot stalls",
  ["Direct tenfold conflict: 1 Kings 4:26 (1 Könige 5:6 in German Bibles) attributes 40,000 stalls of horses for his chariots to Solomon, whereas 2 Chronicles 9:25 states he had 4,000 stalls for horses and chariots.",
   "No proof of a copyist error: Claiming a scribal error in 1 Kings has zero textual-critical evidence behind it and serves only to mask a clear numerical contradiction."],
  ["1 Kings 4:26 (5:6 MT/German)","2 Chronicles 9:25"],
  [],
  {facts:[["1 Kings 4:26 [5:6]","40,000 stalls"],["2 Chronicles 9:25","4,000 stalls"],["Difference","36,000 (10× factor)"],["Copyist proof","None"]],
   visual:{kind:'compare',
    left:{title:"1 Kings 4:26 (5:6 MT/German)",items:["Solomon had 40,000 stalls of chariot horses","No manuscript basis for assuming scribal inflation"]},
    right:{title:"2 Chronicles 9:25",items:["Solomon had 4,000 stalls for horses and chariots","Ten times smaller than 1 Kings"]}}}),
 sum:"1 Kings 4:26 [5:6] credits Solomon with 40,000 chariot-horse stalls while 2 Chronicles 9:25 lists 4,000, with no manuscript evidence supporting the apologetic claim of a copyist error."});

/* 11. #wann-stirbt-basea */
const BD=AV('wann-stirbt-basea','1285212843272048731');
card(C+'baasha-reign-death',{
 title:"Did King Baasha die in Asa's 26th year or campaign in Asa's 36th?",
 k:"1 Kings 15:33–16:8 vs. 2 Chronicles 16:1",
 blurb:"1 Kings records Baasha's death in the 26th year of King Asa, yet 2 Chronicles has him invading Judah ten years later in Asa's 36th year.",
 claim:"1 Kings 15:33–16:8 and 2 Chronicles 16:1 directly contradict each other by ten years on when King Baasha of Israel died.",
 tree:N(BD,
  "2 Chronicles uses a different chronological reckoning system (counting from the division of the kingdom rather than Asa's accession).",
  "2 Chronicles 16:1 explicitly says 'in the thirty-sixth year of the reign of Asa' — offering zero textual support for an alternative counting system — directly contradicting 1 Kings 15:33–16:8, where Baasha dies in Asa's 26th year.",
  "Dead in Asa's 26th year vs. alive in Asa's 36th",
  ["1 Kings 15:33 – 16:8: Baasha became king of Israel in Asa's 3rd year and reigned 24 years, dying in the 26th year of King Asa (when his son Elah succeeded him, 1 Kings 16:8).",
   "2 Chronicles 16:1: Explicitly states that 'in the thirty-sixth year of the reign of Asa, Baasha king of Israel went up against Judah' — portraying him as alive and waging war 10 years after 1 Kings says he died.",
   "Refuting 'different reckonings': There is zero textual proof that Chronicles used a separate calendar; 'thirty-sixth year of the reign of Asa' is unambiguous and invented ad hoc only to resolve an obvious contradiction."],
  ["1 Kings 15:33–16:8","2 Chronicles 16:1"],
  [],
  {facts:[["1 Kings 15:33–16:8","Baasha dies in Asa's 26th year"],["2 Chronicles 16:1","Invades in Asa's 36th year"],["Gap","10 years after his death"],["Calendar excuse","Ad hoc, no textual basis"]],
   visual:{kind:'compare',
    left:{title:"1 Kings 15:33 – 16:8",items:["Reigns 24 years starting in Asa's 3rd year","Dies in the 26th year of Asa","Son Elah succeeds him in Asa's 26th year"]},
    right:{title:"2 Chronicles 16:1",items:["'In the 36th year of the reign of Asa'","Baasha marches against Judah and fortifies Ramah","10 years after 1 Kings states he died"]}}}),
 sum:"1 Kings 15:33–16:8 places King Baasha's death in Asa's 26th year while 2 Chronicles 16:1 has him invading Judah in Asa's 36th year, and claiming 'alternative reckonings' is an unproven ad-hoc invention."});

/* 12. #salomo-wasser-anlage */
const MS=AV('salomo-wasser-anlage','1285214522231230538');
card(C+'solomon-molten-sea',{
 title:"Solomon's molten sea: 2,000 or 3,000 baths capacity?",
 k:"1 Kings 7:26 vs. 2 Chronicles 4:5",
 blurb:"Kings measures the bronze basin at 2,000 baths; Chronicles measures the same basin at 3,000 baths.",
 claim:"1 Kings 7:26 and 2 Chronicles 4:5 contradict each other by 1,000 baths on the capacity of Solomon's molten sea.",
 tree:N(MS,
  "1 Kings gives the usual fill (2,000 baths) while 2 Chronicles gives the maximum brim capacity (3,000 baths) — or else it is a copyist error.",
  "Neither text distinguishes 'usual' from 'maximum' capacity; both state what the vessel held (2,000 vs. 3,000 baths), and there is zero manuscript proof for a copyist error.",
  "2,000 vs. 3,000 baths",
  ["Direct numerical conflict: 1 Kings 7:26 states Solomon's bronze basin ('molten sea') held 2,000 baths, whereas 2 Chronicles 4:5 states it held 3,000 baths — a 50% (1,000-bath) discrepancy.",
   "Refuting 'usual vs. maximum' capacity: Apologists claim 2,000 baths was normal usage and 3,000 baths maximum capacity, yet neither passage draws any such distinction.",
   "Refuting the copyist-error excuse: There is no manuscript evidence proving a scribal error occurred in either text."],
  ["1 Kings 7:26","2 Chronicles 4:5"],
  [],
  {facts:[["1 Kings 7:26","2,000 baths"],["2 Chronicles 4:5","3,000 baths"],["Discrepancy","1,000 baths (50%)"],["Textual basis for excuses","None"]],
   visual:{kind:'compare',
    left:{title:"1 Kings 7:26",items:["Molten sea held 2,000 baths","No mention of 'usual' vs. 'maximum' fill"]},
    right:{title:"2 Chronicles 4:5",items:["Molten sea held 3,000 baths","No proof of a copyist error"]}}}),
 sum:"1 Kings 7:26 states Solomon's bronze sea held 2,000 baths while 2 Chronicles 4:5 states 3,000 baths, with neither 'usual vs. maximum fill' nor 'copyist error' supported by the texts."});

/* 13. #2-esel */
const TD=AV('2-esel','1288376530120212562');
card(C+'triumphal-entry-donkeys',{
 title:"Triumphal entry: did Jesus ride two donkeys or one?",
 k:"Matthew 21:2–7 vs. Mark 11 / Luke 19 / John 12",
 blurb:"Misreading Hebrew poetic parallelism in Zechariah 9:9 literally, Matthew depicts two animals and has Jesus sit on them.",
 claim:"Matthew 21:2–7 contradicts Mark 11:7, Luke 19:35, and John 12:14–15 by having Jesus obtain and ride two donkeys instead of one colt.",
 tree:N(TD,
  "Matthew merely mentions the colt's mother alongside the colt.",
  "Matthew 21:2–7 explicitly describes two animals ('a donkey tied, and a colt with her'), has the disciples bring both, lay cloaks on them, and Jesus sit upon them — a literalistic misreading of Hebrew poetic parallelism in Zechariah 9:9 that contradicts Mark, Luke, and John, all of whom record only a single young donkey.",
  "Two donkeys (Matthew) vs. one colt (Mark, Luke, John)",
  ["Matthew's two animals (Matt 21:2–7): Jesus instructs two disciples: 'Go into the village in front of you, and immediately you will find a donkey tied, and a colt with her. Untie them and bring them to me.' Then: 'They brought the donkey and the colt and put on them their cloaks, and he sat on them.'",
   "Misreading Zechariah 9:9's Hebrew parallelism: Matthew 21:5 cites Zechariah 9:9 ('Behold, your king is coming to you, humble, and mounted on a donkey, on a colt, the foal of a beast of burden'). In Hebrew poetry, synonymous parallelism expresses a single thought twice ('donkey' = 'colt, foal of a donkey'). Matthew misread the poetic repetition literally as two separate animals — mother donkey and foal.",
   "Unanimous testimony of the other three Gospels (one animal only): Mark 11:7 ('And they brought the colt to Jesus and threw their cloaks on it, and he sat on it'); Luke 19:35 ('And they brought it to Jesus, and throwing their cloaks on the colt, they set Jesus on it'); John 12:14–15 ('And Jesus found a young donkey and sat on it, just as it is written, \"Fear not, daughter of Zion; behold, your king is coming, sitting on a donkey's colt!\"')."],
  ["Matthew 21:2–7","Zechariah 9:9","Mark 11:7","Luke 19:35","John 12:14–15"],
  [],
  {facts:[["Matthew 21:2–7","2 animals (donkey + colt)"],["Mark 11 / Luke 19 / John 12","1 animal only (colt)"],["Root error","Misread Zechariah 9:9 parallelism"],["Verdict","3 Gospels vs. Matthew"]],
   quotes:[
    {by:"Matthew 21:2, 7",en:"Go into the village in front of you, and immediately you will find a donkey tied, and a colt with her. Untie them and bring them to me... They brought the donkey and the colt and put on them their cloaks, and he sat on them.",ref:"Matt 21:2, 7"},
    {by:"Mark 11:7 / Luke 19:35 / John 12:14",en:"Mark: 'And they brought the colt to Jesus and threw their cloaks on it, and he sat on it.' · Luke: '...throwing their cloaks on the colt, they set Jesus on it.' · John: 'And Jesus found a young donkey and sat on it.'",ref:"Mark 11:7; Luke 19:35; John 12:14"}
   ],
   visual:{kind:'compare',
    left:{title:"Matthew 21:2–7 (Two Animals)",items:["Find 'a donkey tied, and a colt with her'","Brought both; laid cloaks on them; sat on them","Literalized Zechariah 9:9's Hebrew parallelism"]},
    right:{title:"Mark 11:7 · Luke 19:35 · John 12:14–15",items:["Mark 11:7: Only one colt ('sat on it')","Luke 19:35: Only one colt ('set Jesus on it')","John 12:14–15: Only one young donkey ('sat on it')"]}}}),
 sum:"Mark, Luke, and John all report Jesus riding a single colt, whereas Matthew 21:2–7 misreads Zechariah 9:9's Hebrew parallelism literally and places Jesus upon two animals."});

/* 14. #jesus-einatmung-heiliger-geist */
const HS=AV('jesus-einatmung-heiliger-geist','1294474042849497199');
card(C+'holy-spirit-timing',{
 title:"When did the Holy Spirit come — before or after Jesus's ascension?",
 k:"John 16:7 vs. John 20:22",
 blurb:"Jesus says the Spirit cannot come unless he first departs to the Father, yet breathes the Spirit onto the disciples before ascending.",
 claim:"John 16:7 and John 20:22 contradict each other on whether Jesus had to depart to the Father before imparting the Holy Spirit.",
 tree:N(HS,
  "John 20:22 was only a symbolic preview before Pentecost, not the actual sending of the Spirit.",
  "John 16:7 states unconditionally that 'if I do not go away, the Helper will not come to you; but if I go, I will send him to you' — clearly referring in context to returning to the Father — yet in John 20:22, right after his resurrection and prior to his ascension (explicitly narrated later in Acts, and not yet complete in John 20:17), Jesus breathes on them and says, 'Receive the Holy Spirit!'",
  "Departure prerequisite vs. pre-ascension imparting",
  ["John 16:7 (conditional prerequisite): 'Nevertheless, I tell you the truth: it is to your advantage that I go away, for if I do not go away, the Helper [Holy Spirit] will not come to you. But if I go, I will send him to you.' In context, Jesus explicitly means going away to the Father before the Holy Spirit can arrive.",
   "John 20:22 (prior to ascension): 'And when he had said this, he breathed on them and said to them, \"Receive the Holy Spirit.\"' In this post-resurrection scene, Jesus imparts the Holy Spirit before ascending to heaven (and the Gospel of John does not narrate the ascension, which appears later in Acts).",
   "Islamic methodological note on 'Father': When quoting biblical phrases containing 'Father,' Muslims understand it non-ontologically (metaphorical usage of that era, not biological or divine sonship), and reject whatever contradicts Islamic monotheism."],
  ["John 16:7","John 20:17, 22","Acts 1"],
  [],
  {facts:[["John 16:7","Spirit comes only after departure"],["John 20:22","Jesus breathes Spirit before ascending"],["Ascension","Described later in Acts"],["Note","Non-literal 'Father' in quotation"]],
   quotes:[
    {by:"John 16:7",en:"Nevertheless, I tell you the truth: it is to your advantage that I go away, for if I do not go away, the Helper will not come to you. But if I go, I will send him to you.",ref:"John 16:7"},
    {by:"John 20:22",en:"And when he had said this, he breathed on them and said to them, 'Receive the Holy Spirit.'",ref:"John 20:22"}
   ],
   visual:{kind:'compare',
    left:{title:"John 16:7",items:["'If I do not go away, the Helper will not come'","Departure to the Father is a strict precondition","Sending follows Jesus's departure"]},
    right:{title:"John 20:22",items:["'He breathed on them... Receive the Holy Spirit'","Occurs post-resurrection prior to ascension","Directly bypasses the precondition in 16:7"]}}}),
 sum:"John 16:7 makes Jesus's departure to the Father an absolute prerequisite for the Spirit's coming, yet John 20:22 has Jesus impart the Holy Spirit before his ascension."});

/* 15. #versuchung-widerspruch */
const TG=AV('versuchung-widerspruch','1362884608815005937');
card(C+'god-tempting-james-lords-prayer',{
 title:"Does God tempt anyone? James 1:13 vs. the Lord's Prayer and the OT",
 k:"James 1:13 vs. Matt 6:13 & OT",
 blurb:"James denies God tempts anyone, yet Jesus teaches believers to ask God 'lead us not into temptation,' and the OT repeatedly has God testing/inciting people.",
 claim:"James 1:13 directly contradicts Matthew 6:13 (the Lord's Prayer) as well as Deuteronomy 13:3, 2 Samuel 24:1, and Genesis 22:1.",
 tree:N(TG,
  "God 'tests' people rather than 'tempting' them to sin, and the Old Testament belonged to an earlier dispensation.",
  "Both James 1:13 and Matthew 6:13 use the exact same Greek word peirasmos ('temptation/testing'), and James rules out all forms of divine temptation — while the Lord's Prayer presupposes God could lead people into it, and OT texts (Deut 13:3; 2 Sam 24:1; Gen 22:1) show God actively testing and even inciting David to sin.",
  "NT and OT contradictions on divine temptation",
  ["NT Clash — James 1:13 vs. Matthew 6:13: James 1:13 states unconditionally: 'Let no one say when he is tempted, \"I am being tempted by God,\" for God cannot be tempted with evil, and he himself tempts no one.' Yet in Matthew 6:13 (the Lord's Prayer), Jesus instructs followers to pray: 'And lead us not into temptation, but deliver us from evil' — which presupposes God could actively cause or lead into temptation, otherwise the petition is pointless.",
   "OT Clash — God repeatedly tests/incites: (1) Deuteronomy 13:3: 'For the LORD your God is testing you, to know whether you love the LORD your God with all your heart...' (2) 2 Samuel 24:1: 'The anger of the LORD was kindled against Israel, and he incited David against them [to take the census]' (later attributed to Satan in 1 Chronicles 21:1!). (3) Genesis 22:1: 'God tested/tempted Abraham and said: Take your son and offer him!'",
   "Channel attachment note: Channel also contains a text attachment (message.txt)."],
  ["James 1:13, 17","Matthew 6:13","Deuteronomy 13:3","2 Samuel 24:1 (cf. 1 Chr 21:1)","Genesis 22:1","Malachi 3:6"],
  [
   N(TG,
    "1) God 'tests,' He does not 'tempt.' 2) Jesus only meant 'protect us from evil.' 3) James only corrected a misreading of the Lord's Prayer.",
    "All three fail on Greek vocabulary and plain syntax: both verses share the identical root peirasmos, and Matthew 6:13 asks God actively not to lead us in.",
    "Refuting the three NT excuses",
    ["1. 'Tests vs. tempts' fails linguistically: Both James 1:13 and Matthew 6:13 use the exact same Greek root πειρασμός (peirasmos) for 'temptation/testing.' James excludes every form of God tempting!",
     "2. 'Protect us from evil' contradicts the wording: Matthew 6:13 literally says 'lead us not into temptation' (active!), not merely 'preserve us.'",
     "3. 'James corrects a misunderstanding': James never mentions the Lord's Prayer — he simply contradicts the premise that God can lead anyone into temptation."],
    ["James 1:13","Matthew 6:13 (Greek: peirasmos)"]),
   N(TG,
    "In the Old Testament God acted differently than in the New Testament.",
    "The Bible itself forbids inventing a changing God (Malachi 3:6; James 1:17).",
    "Refuting the 'OT vs. NT God' excuse",
    ["Immutability of God: Both Malachi 3:6 ('For I the LORD do not change') and James 1:17 ('with whom there is no variation or shadow due to change') reject the claim that God stopped doing what 2 Samuel 24:1, Deuteronomy 13:3, and Genesis 22:1 depict Him doing."],
    ["Malachi 3:6","James 1:17","2 Samuel 24:1"])
  ],
  {facts:[["James 1:13","'God tempts no one'"],["Matt 6:13","'Lead us not into temptation'"],["Greek root","Identical: πειρασμός (peirasmos)"],["OT parallels","Gen 22:1 · Deut 13:3 · 2 Sam 24:1"]],
   quotes:[
    {by:"James 1:13",en:"Let no one say when he is tempted, 'I am being tempted by God,' for God cannot be tempted with evil, and he himself tempts no one.",ref:"Jas 1:13"},
    {by:"Matthew 6:13",en:"And lead us not into temptation, but deliver us from evil.",ref:"Matt 6:13"}
   ],
   visual:{kind:'compare',
    left:{title:"James 1:13",items:["God has zero role in tempting anyone","Same Greek root (peirasmos) as Matt 6:13","Absolute universal denial"]},
    right:{title:"Matt 6:13 & Old Testament",items:["Matt 6:13: Ask God 'lead us not into temptation'","Deut 13:3 & Gen 22:1: God actively tests/tempts","2 Sam 24:1: God incites David to sin (vs. Satan in 1 Chr 21:1)"]}}}),
 sum:"James 1:13 denies that God tempts anyone using the same Greek word (peirasmos) as Matthew 6:13's prayer not to be led into temptation, and directly clashes with OT texts where God tests Abraham, Israel, and David."});

/* 16. #volkszählung */
const DC=AV('volkszählung','1310023661830537339');
card(C+'david-census-god-or-satan',{
 title:"Who incited David to take the census — God or Satan?",
 k:"2 Samuel 24:1 vs. 1 Chronicles 21:1",
 blurb:"2 Samuel 24:1 says God's anger burned and He incited David; 1 Chronicles 21:1 replaces God with Satan 500 years later.",
 claim:"2 Samuel 24:1 and 1 Chronicles 21:1 directly contradict each other on whether YHWH or Satan incited David to sin by numbering Israel.",
 tree:N(DC,
  "God merely allowed it passively while Satan was the active agent, or the two texts offer complementary perspectives.",
  "In 2 Samuel 24:1, YHWH is both emotionally angered and the grammatical subject of the active Hebrew verb wayyasset ('he incited/instigated David,' from sût), with zero mention of Satan; 1 Chronicles 21:1 explicitly substitutes Satan as the subject to shield God from causing sin — creating a theological dilemma across 500 years of biblical history.",
  "God vs. Satan as the grammatical subject",
  ["2 Samuel 24:1 (YHWH acts): 'Again the anger of the LORD was kindled against Israel, and he incited David against them, saying, \"Go, number Israel and Judah.\"' The pronoun 'he' refers directly to YHWH, who is emotionally involved ('anger kindled').",
   "1 Chronicles 21:1 (Satan acts): 'Then Satan stood against Israel and incited David to number Israel.' God is not mentioned at all; blame is transferred to Satan.",
   "Theological redaction & theodicy: In the earlier text (Samuel), God directly causes David's sinful act; in the later revision (Chronicles), Satan is introduced to solve the problem of theodicy and preserve God's goodness — producing an irreconcilable contradiction with the older source."],
  ["2 Samuel 24:1","1 Chronicles 21:1","1 Kings 22:20–22"],
  [
   N(DC,
    "1) God only permitted it while Satan acted. 2) Satan was God's tool. 3) These are just two perspectives.",
    "Hebrew grammar (sût = active incitement) and the total absence of Satan in 2 Samuel 24:1 refute all three attempts.",
    "Refuting permission, instrument, and perspective excuses",
    ["1. Hebrew wayyasset (סות, sût) means active instigation, not passive permission: Samuel does not say 'God permitted' — it uses sût ('to incite, instigate, stir up'), comparable to 1 Kings 22:20–22 where God dispatches a 'lying spirit.'",
     "2. Satan is absent from 2 Samuel 24:1: The text attributes the incitement directly to YHWH himself; importing Satan rewrites Samuel to match the later Chronicles version.",
     "3. Incompatible grammatical subjects: Even if indirect agency were assumed, Samuel states God acted while Chronicles states Satan acted — harmonizing requires overwriting one text."],
    ["2 Samuel 24:1 (Hebrew: wayyasset / sût)","1 Kings 22:20–22","1 Chronicles 21:1"]),
   N(DC,
    "Chronicles simply clarifies what Samuel already meant.",
    "If Chronicles did not exist, anyone reading 2 Samuel 24:1 would have to identify the inciter as God — meaning for 500 years readers believed God did what Chronicles calls Satan's act.",
    "The 500-year dilemma",
    ["Debate question: Ask a Christian: 'Would you admit that if we did not have Chronicles, we would think from 2 Samuel 24:1 that the being inciting David was God (i.e., what Chronicles calls Satan)?' They must answer yes, or else prove the contrary from Samuel alone.",
     "500-year gap: Knowing that Samuel was written around the 10th century BCE and Chronicles roughly 500 years later in the 5th century BCE, that means believers for 500 years would have attributed Satan's role directly to God!"],
    ["2 Samuel 24:1 (~10th c. BCE)","1 Chronicles 21:1 (~5th c. BCE)"])
  ],
  {facts:[["2 Samuel 24:1","YHWH incited David"],["1 Chronicles 21:1","Satan incited David"],["Hebrew verb","סות (sût) = actively incite"],["Timeline gap","~500 years (10th vs. 5th c. BCE)"]],
   quotes:[
    {by:"2 Samuel 24:1",en:"The anger of the LORD was kindled against Israel, and he incited David against them, saying, 'Go, number Israel and Judah.'",ref:"2 Sam 24:1"},
    {by:"1 Chronicles 21:1",en:"Then Satan stood against Israel and incited David to number Israel.",ref:"1 Chr 21:1"}
   ],
   visual:{kind:'compare',
    left:{title:"2 Samuel 24:1 (Earlier Text)",items:["Subject: 'The anger of the LORD... he incited David'","Hebrew wayyasset (sût) = active instigation","No mention of Satan whatsoever"]},
    right:{title:"1 Chronicles 21:1 (500 Years Later)",items:["Subject: 'Satan stood against Israel and incited David'","No mention of God's anger or action","Shifts blame onto Satan to resolve theodicy"]}}}),
 sum:"2 Samuel 24:1 uses the active Hebrew verb sût to state that YHWH incited David to take the census, whereas 1 Chronicles 21:1 replaces YHWH with Satan — an irreconcilable theological rewrite."});

/* 17. #teufel-berg-tempel */
const TT=AV('teufel-berg-tempel','1376666019648507994');
card(C+'temptation-order-mountain-temple',{
 title:"Temptation of Jesus: mountain second or temple pinnacle second?",
 k:"Matthew 4:5–10 vs. Luke 4:5–12",
 blurb:"Luke promises an orderly sequence (kathexēs) and places the mountain before the temple; Matthew reverses them — and Old Latin scribes tampered with Luke to hide it.",
 claim:"Matthew 4:5–10 and Luke 4:5–12 contradict each other on the chronological order and final climax of Satan's temptations of Jesus.",
 tree:N(TT,
  "Luke merely arranged the temptations thematically from a different perspective, not chronologically.",
  "Luke 1:3 explicitly pledges to write 'in order' (kathexēs, chronological sequence, also used in Luke 8:1), yet Luke 4:5–12 puts the high mountain second and the temple pinnacle third, reversing Matthew 4:5–10. Even Old Latin manuscripts and Ambrose swapped Luke's verses to erase the contradiction, while John Cassian openly admitted the differing sequence.",
  "Mountain vs. Temple sequence & textual tampering",
  ["Luke's chronological claim (Luke 1:3 & 8:1): In Luke 1:3 (Elberfelder / Nestle-Aland), Luke pledges to write to Theophilus 'in order' — Greek καθεξῆς (kathexēs), composed of κατά ('according to') + ἐξῆς ('in succession'; Strong's 2517: 'afterward, successively, in chronological order'). The exact same word appears in Luke 8:1 ('And it happened afterward... city by city').",
   "Luke 4:5–12 (Nestle-Aland): (2nd temptation, vv. 5–8) The devil takes Jesus up to a high mountain, shows him all the kingdoms of the world in a moment, and demands worship — Jesus cites Deut 6:13. (3rd temptation, vv. 9–12) He leads him to Jerusalem, sets him on the pinnacle of the temple, and cites Ps 91:11–12 — Jesus cites Deut 6:16.",
   "Matthew 4:5–10: Reverses the order — placing the pinnacle of the temple second and the high mountain (kingdoms of the world) third as the climax.",
   "Scribal tampering in Nestle-Aland apparatus: The Nestle-Aland textual apparatus notes on Luke 4 that 'verses 5–8 stand after verses 9–12 in the Old Latin translations and in Ambrose' — proving scribes intentionally swapped Luke's verse order to eliminate the contradiction with Matthew!"],
  ["Luke 1:3; 4:5–12; 8:1","Matthew 4:5–10","Nestle-Aland Textual Apparatus","Strong's 2517 (kathexēs)","Deut 6:13, 16; Ps 91:11–12"],
  [
   N(TT,
    "John Cassian and Thomas Aquinas explain the different orders via moral themes (pride vs. avarice; glory vs. wealth), or it is just a different perspective.",
    "Moral psychology does not change where Jesus physically stood first, and Cassian himself concedes the Gospel order differs.",
    "Patristic concessions & refuting Aquinas / 'two temptations'",
    ["John Cassian (360–435 CE, Conferences / Collationes Patrum, Conference 5 of Abbot Serapion on the Eight Principal Faults): Explicitly admits the different order — noting Matthew counts the mountain-kingdoms temptation third, whereas Luke places 'if you are the Son of God, throw yourself down' last as the passion of pride (with avarice beforehand) — attempting to justify Luke's order spiritually while conceding the sequence differs.",
     "Refuting 'just another perspective': Physical locations and actions (where Jesus stood first — temple or mountain) are objective historical events, not subjective impressions ('from my perspective the car came first, from yours the motorcycle').",
     "Refuting Thomas Aquinas ('some want glory first, others wealth first'): Aquinas dodges the factual question of sequence by talking about human desires.",
     "Refuting 'maybe it happened twice': Absurd to imagine Satan staging the exact same three-stage desert temptation twice in near-identical words with identical replies."],
    ["John Cassian, Conferences 5","Thomas Aquinas"]),
  ],
  {facts:[["Luke 1:3","Promises kathexēs (orderly sequence)"],["Luke 4:5–12","2nd: Mountain · 3rd: Temple"],["Matthew 4:5–10","2nd: Temple · 3rd: Mountain"],["Old Latin & Ambrose","Swapped vv. 5–8 after vv. 9–12"]],
   quotes:[
    {by:"John Cassian (360–435 CE)",en:"According to Luke, who sets down as the last temptation that in which it is said, 'If you are the Son of God, throw yourself down,' the passion of pride may here be thought of, so that in that earlier one, which Matthew counts as the third — and in which according to the evangelist Luke all the kingdoms of the world are shown to the Lord in a moment and promised by the devil — the passion of avarice may be understood.",ref:"Conferences (Collationes Patrum), Conference 5"},
    {by:"Nestle-Aland Apparatus on Luke 4",en:"Verses 5–8 stand after verses 9–12 in the Old Latin translations and in Ambrose.",ref:"NA28 Apparatus, Luke 4:5–12"}
   ],
   visual:{kind:'compare',
    left:{title:"Matthew 4:5–10",items:["1. Stones to bread (desert)","2. Pinnacle of the Temple (Jerusalem)","3. High Mountain (kingdoms of the world)"]},
    right:{title:"Luke 4:5–12 (promises kathexēs, 1:3)",items:["1. Stones to bread (desert)","2. High Mountain (kingdoms of the world, vv. 5–8)","3. Pinnacle of the Temple (vv. 9–12) — swapped in Old Latin & Ambrose"]}}}),
 sum:"Luke 1:3 pledges an orderly sequence (kathexēs) yet reverses Matthew's order of the mountain and temple temptations — a contradiction so glaring that Old Latin scribes and Ambrose manually swapped Luke's verses to hide it."});

/* 18. #versuchung */
const LT=AV('versuchung','1378761467494662224');
card(C+'spirit-leads-jesus-to-temptation',{
 title:"Did the Holy Spirit lead Jesus to be tempted while God 'tempts no one'?",
 k:"Matthew 4:1 vs. James 1:13",
 blurb:"Matthew 4:1 says the Spirit led Jesus into the wilderness specifically to be tempted by the devil, clashing with James 1:13.",
 claim:"Matthew 4:1 and Matthew 6:13 contradict James 1:13 on whether God actively initiates or leads people into temptation.",
 tree:N(LT,
  "The Holy Spirit only allowed Jesus to be tested; Satan was the one who tempted him.",
  "Matthew 4:1 explicitly states Jesus was led up by the Spirit 'to be tempted by the devil' (active divine purpose), while James 1:13 insists God tempts no one and Matthew 6:13 begs God 'lead us not into temptation.' Pushing someone into a lion's cage makes you causally and morally responsible even if the lion bites.",
  "Divine Spirit orchestrating temptation vs. James 1:13",
  ["Direct textual clash: (1) Matthew 4:1: 'Then Jesus was led up by the Spirit into the wilderness to be tempted by the devil' — the Holy Spirit (God) actively initiates the temptation. (2) James 1:13: 'God cannot be tempted with evil, and he himself tempts no one.' (3) Matthew 6:13: 'Lead us not into temptation' — implying God could do so, otherwise the petition is meaningless.",
   "No linguistic distinction: The Greek noun πειρασμός (peirasmos) / verb peirazō is used indiscriminately in the Bible for divine tests (LXX Gen 22:1) and demonic seduction (1 Cor 7:5). Claiming 'God tests, Satan tempts' invents a lexical boundary the Greek lacks.",
   "Moral & causal responsibility: If someone deliberately pushes a person into a lion's cage, they bear responsibility even if they do not bite personally. Having the Holy Spirit lead Jesus into the devil's trap turns God into a partner in testing — conflicting with 'God is love' (1 John 4:8).",
   "Christological dilemma: If Jesus was truly human and genuinely capable of sinning (otherwise the temptation was staged and fake), then the Spirit placed Jesus in real moral peril — contradicting God's will in James 1:13."],
  ["Matthew 4:1; 6:13","James 1:13","Genesis 22:1 (LXX)","1 Corinthians 7:5","1 John 4:8"],
  [],
  {facts:[["Matthew 4:1","Led by the Spirit 'to be tempted'"],["James 1:13","'He himself tempts no one'"],["Greek term","πειρασμός (peirasmos) in both"],["Christological trap","Real danger vs. fake test"]],
   quotes:[
    {by:"Matthew 4:1",en:"Then Jesus was led up by the Spirit into the wilderness to be tempted by the devil.",ref:"Matt 4:1"},
    {by:"James 1:13",en:"For God cannot be tempted with evil, and he himself tempts no one.",ref:"Jas 1:13"}
   ],
   visual:{kind:'compare',
    left:{title:"Matthew 4:1 & 6:13",items:["Holy Spirit deliberately leads Jesus to be tempted (4:1)","Believers pray God 'lead us not into temptation' (6:13)","Uses same peirazō / peirasmos vocabulary"]},
    right:{title:"James 1:13",items:["'God cannot be tempted with evil'","'And he himself tempts no one'","Denies divine agency in temptation"]}}}),
 sum:"Matthew 4:1 depicts the Holy Spirit actively leading Jesus into the desert to be tempted by the devil, directly clashing with James 1:13's denial that God tempts anyone and trapping Christology between real peril and a staged test."});

/* 20. #krichenväter-zugabe-widersprüche */
const CF=AV('krichenväter-zugabe-widersprüche','1474791179533947020');
card(C+'church-fathers-admit-contradictions',{
 title:"Church Fathers admit the Gospels contradict each other literally",
 k:"Origen · Augustine · Rufinus",
 blurb:"Origen declared literal Gospel harmonization 'impossible,' Rufinus noted believers invent excuses for the genealogies, and Augustine blamed copyists or translators when texts err.",
 claim:"Leading early Church Fathers — Origen, Augustine, and Rufinus — explicitly acknowledged unresolved discrepancies and contradictions in the Gospel accounts.",
 tree:N(CF,
  "All early Christians believed the Gospels harmonized perfectly on the literal historical level.",
  "Primary patristic texts state the exact opposite: Origen declared in Book X of his Commentary on John that reconciling the Gospels literally/historically is 'impossible,' Rufinus reported widespread recognition of the conflicting genealogies and ad-hoc excuses invented by believers, and Augustine admitted that whenever Scripture appears contrary to truth he blames scribal errors, faulty translations, or misunderstanding.",
  "Patristic admissions of discrepancy",
  ["Origen (Commentary on the Gospel of John, Book X, Ch. 2 & Ch. 15): Openly states that careful students will find the Gospels do not agree on the literal historical level, and challenges anyone who disagrees to write a reasoned refutation.",
   "Augustine of Hippo (Epistle 82, §3): While professing inerrancy for the original canonical authors, Augustine concedes his working rule whenever he meets an apparent falsehood or contradiction in Scripture: he assumes 'either the manuscript is faulty (the copyist made an error), or the translator failed to catch the meaning, or I myself have not understood it' — conceding the extant texts contain errors.",
   "Rufinus of Aquileia (Ecclesiastical History 1.7.1): Notes that because Matthew and Luke transmit conflicting genealogies of Christ, 'very many people think that they contradict one another,' and 'many — even among believers — out of ignorance of the truth resort to certain explanations which they invent according to their own notions.'"],
  ["Origen, Commentary on John, Book X, Ch. 2 & 15","Augustine, Epistle 82.3","Rufinus of Aquileia, Ecclesiastical History 1.7.1"],
  [
   N(CF,
    "Origen still believed the Gospels were spiritually true.",
    "Precisely — Origen fled into spiritual/allegorical truth only because he admitted literal historical harmonization is impossible.",
    "Origen's four explicit admissions (Commentary on John X)",
    ["1. Fundamental discrepancy (Book X, Ch. 2): 'There are many other points on which the careful student of the Gospels will find that their narratives do not agree; and these we shall place before the reader, according to our power, as they occur.'",
     "2. Dilemma for the reader (Book X, Ch. 2): 'The student who is staggered by these things will either renounce the attempt to hold all the Gospels as true, and, not venturing to conclude that all our information about our Lord is untrustworthy, will choose at random one of them to be his guide; or he will accept the four, and hold that their truth is not to be sought in the outward and material letter.'",
     "3. Impossibility of literal harmony (Book X, Ch. 15): 'I consider it impossible for those who admit nothing but history in their interpretation to show that these discrepant statements are in harmony with one another. If anyone thinks we have not given a sound exposition, let him write a reasoned refutation of this statement of ours.'",
     "4. Demonstrating the clash (Book X, Ch. 15): 'I have transcribed long passages from the Gospels, but I thought it necessary to do so in order to exhibit the discrepancy (literally: the not-fitting-together) in this part of our Gospel.'"],
    ["Origen, Commentary on John, Book X, Ch. 2 & 15"]),
   N(CF,
    "Augustine affirmed biblical inerrancy in Epistle 82.",
    "Only by invoking an unfalsifiable escape clause that blames scribal corruption or translation errors whenever the text contradicts truth.",
    "Augustine (Epistle 82.3) & Rufinus (HE 1.7.1)",
    ["Augustine (Epistle 82, §3): 'For I confess to your charity that I have learned to yield this respect and honor only to the canonical books of Scripture: of these alone do I most firmly believe that the authors were completely free from error. And if in these writings I am perplexed by anything which appears to me opposed to truth, I do not hesitate to suppose that either the manuscript is faulty, or the translator has not caught the meaning of what was said, or I myself have failed to understand it.'",
     "Rufinus (Ecclesiastical History 1.7.1): Confirms early believers themselves saw the Matthew–Luke genealogies as contradictory and concocted self-made harmonizations."],
    ["Augustine, Epistle 82.3","Rufinus, Ecclesiastical History 1.7.1"])
  ],
  {facts:[["Origen (John X.15)","Literal harmony 'impossible'"],["Augustine (Ep. 82.3)","Blames faulty MSS or translators"],["Rufinus (HE 1.7.1)","Believers invent excuses on genealogies"],["Takeaway","Discrepancies admitted in antiquity"]],
   quotes:[
    {by:"Origen",en:"I consider it impossible for those who admit nothing but history in their interpretation to show that these discrepant statements are in harmony with one another. If anyone thinks we have not given a sound exposition, let him write a reasoned refutation of this statement of ours.",ref:"Commentary on John, Book X, Ch. 15"},
    {by:"Augustine of Hippo",en:"And if I meet with anything in those writings which seems to me contrary to truth, I do not hesitate to suppose that either the copyist made an error, or the translator failed to catch the meaning of what was said, or I myself have not understood it.",ref:"Epistle 82, §3"},
    {by:"Rufinus of Aquileia",en:"Since the genealogy of Christ has been handed down differently by the evangelists Matthew and Luke, there are very many people who think that they contradict one another. In this matter many — even among believers — out of ignorance of the truth resort to certain explanations which they invent according to their own notions.",ref:"Ecclesiastical History 1.7.1"}
   ],
   visual:{kind:'compare',
    left:{title:"Modern Apologetic Claim",items:["Every Gospel narrative harmonizes literally","No scribal/textual errors affect historical facts","Contradictions are merely modern skepticism"]},
    right:{title:"Early Church Fathers",items:["Origen: Literal historical harmony is 'impossible' (Comm. John X.15)","Augustine: Blames copyist/translator errors when texts conflict (Ep. 82.3)","Rufinus: Believers invent ad-hoc excuses for genealogies (HE 1.7.1)"]}}}),
 sum:"Origen explicitly judged literal historical harmony of the Gospels 'impossible,' Rufinus reported believers inventing ad-hoc excuses over the conflicting genealogies, and Augustine conceded that apparent errors must be blamed on faulty copies or translations."});

})();
