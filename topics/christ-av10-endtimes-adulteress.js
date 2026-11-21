/* Christianity AV batch 10 — 2026-11-21. Averroes (19 channels across 2 categories):
   1. `christianity/jesus/end-times-prophecy` (10 channels in `jesus endzeit prophezeiung`):
      - Root:     #pro-alle-arguemente (1285264194479980546)
      - Branch 1: #widerlegung-lukas-argument (1284468193779384330)
      - Branch 2: #widerlegung-jona-argument (1284513625079287851)
      - Branch 3: #widerlegung-jeremiah-daniel-argument (1285236549755342859)
      - Branch 4: #widerlegung-israel-soll-jesus-anrrkennen-bevor-er-kommt (1285260743897513984)
      - Branch 5: #pro-ignatius-von-antiochien (1284558982832324748)
      - Branch 6: #pro-mischa-argument (1285243398286082171)
      - Branch 7: #pro-josia-argument-anti-konditionell (1286047308479201330)
      - Branch 8: #pro-david-und-absalom-keine-konditionelle (1285251224555360338 — source export contains only `[msg 0] unknown (edited)`)
      - Empty channel (no text in export): #2-petrus-argument (1285267697621401643)
   2. `christianity/bible/pericope-adulterae` (9 channels in `Jesus und ehebrecherin argument`):
      - Root:     #nicht-in-den-ältestens-manuskripten (1283804557025214574) + #flüssiger-übergang summary
      - Branch 1: #flüssiger-übergang (1286042796503072868)
      - Branch 2: #codex-vaticanus (1285379479304142900)
      - Branch 3: #kirchenväter-die-es-nicht-zitieren (1285280511622778952)
      - Branch 4: #eusebius-argument (1283807689113075784)
      - Branch 5: #didymus-argument (1285375313995628595)
      - Branch 6: #didiscalia-argument (1285285321944203264)
      - Branch 7: #apostolsiche-konstitution-argument (1285371163169521706)
      - Branch 8: #hieronymus-argument (1283805749453127730)

   Minor source typos corrected in English rendering:
   - #pro-alle-arguemente: restored missing epistle numbers in section headings (1 Cor 7:29–31; 1 Pet 4:7; 1 John 2:18; 2 Thess 2:1–2; 1 Cor 10:11; 1 Cor 15:51–52; 1 Thess 5:1–2; 2 Cor 5:2–4).
   - #widerlegung-jona-argument: “Mose 18:20-22” -> Deuteronomy 18:20–22 (5 Mose).
   - #pro-mischa-argument: “Mischa” -> Micah (Micha).
   - #pro-ignatius-von-antiochien: “Igantius von antinochien” -> Ignatius of Antioch.
   - #didiscalia-argument & #apostolsiche-konstitution-argument: standardized English titles (Didascalia Apostolorum; Apostolic Constitutions) while preserving exact channel slugs in AV(). */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});

/* ============================================================================
   1. JESUS'S FAILED END-TIMES PROPHECY (10 Averroes channels)
   ============================================================================ */
const P_ALL  = AV('pro-alle-arguemente','1285264194479980546');
const P_LUK  = AV('widerlegung-lukas-argument','1284468193779384330');
const P_JON  = AV('widerlegung-jona-argument','1284513625079287851');
const P_JD   = AV('widerlegung-jeremiah-daniel-argument','1285236549755342859');
const P_ISR  = AV('widerlegung-israel-soll-jesus-anrrkennen-bevor-er-kommt','1285260743897513984');
const P_IGN  = AV('pro-ignatius-von-antiochien','1284558982832324748');
const P_MIC  = AV('pro-mischa-argument','1285243398286082171');
const P_JOS  = AV('pro-josia-argument-anti-konditionell','1286047308479201330');
const P_DAV  = AV('pro-david-und-absalom-keine-konditionelle','1285251224555360338');

card('christianity/jesus/end-times-prophecy',{
 title:"Jesus's failed end-times prophecy (Mark 13:30 / Matt 16:28 / Matt 24:34)",
 k:"Prophecy",
 blurb:"23 NT passages, Ignatius of Antioch, and full refutations of Luke 17, Jonah, Daniel/Jeremiah & conditional-prophecy excuses.",
 claim:"Jesus never promised to return within the first generation; New Testament end-times statements are timeless, spiritual, or conditional.",
 tree:N(P_ALL,
  "Jesus and the New Testament authors only meant that the end could happen at any distant age, not specifically within the lifetime of their own generation.",
  "Across the Gospels, Paul, Peter, James, Hebrews, John's Epistles, and Revelation, Jesus and his first-century followers explicitly expected his return and the end of the age within their own lifetimes—before they finished preaching in Israel's towns, before his judges and disciples died, and in 'the last hour.'",
  "Immediate first-century expectation across the entire New Testament",
  ["Jesus to the Twelve (Matthew 10:23): 'Truly, I say to you, you will not have gone through all the towns of Israel before the Son of Man comes'—expecting his return before their Galilean/Israelite mission even concluded.",
   "Jesus to his judges & disciples (Matthew 26:64; John 14:3; John 21:22–23): Tells the high priests and elders 'from now on you will see the Son of Man seated at the right hand of Power and coming on the clouds of heaven'; promises the disciples 'I will come again and will take you to myself' (understood personally as within their lifetimes); and sparks the widespread rumor among the brothers that John would not die before Jesus returned ('If it is my will that he remain until I come, what is that to you?').",
   "Paul's personal expectation of surviving until the Parousia (1 Corinthians 15:51–52; 2 Corinthians 5:2–4; 1 Corinthians 7:29–31; 10:11): Writes 'We shall not all sleep, but we shall all be changed, in a moment, in the twinkling of an eye, at the last trumpet,' longs to be 'further clothed' rather than unclothed by death, declares 'the appointed time has grown very short' (7:29–31), and states 'upon whom the end of the ages has come' (10:11).",
   "Paul's urgency to the churches (Romans 13:11–12; 16:20; Philippians 4:5; 1 Thessalonians 5:1–2; 2 Thessalonians 2:1–2): 'The night is far gone; the day is at hand'; 'The God of peace will soon crush Satan under your feet'; 'The Lord is at hand'; 'the day of the Lord will come like a thief in the night'; and in 2 Thessalonians 2:1–2 he has to calm believers so panicked by the imminent expectation that some thought the Day of the Lord had already arrived.",
   "Acts, Hebrews, James, Peter & John's Epistles (Acts 2:16–17; Hebrews 1:1–2; 10:37; James 5:9; 1 Peter 4:7; 1 John 2:18): Peter applies Joel's 'in the last days' directly to Pentecost; Hebrews speaks of God speaking 'in these last days' and declares 'Yet a little while, and the coming one will come and will not delay'; James warns 'Behold, the Judge is standing at the door'; Peter writes 'The end of all things is at hand'; John states 'Children, it is the last hour... we know that it is the last hour.'",
   "Revelation's repeated 'soon' (Revelation 1:1–3; 3:11; 22:6; 22:20): Opens by announcing 'what must soon take place... for the time is near,' warns Philadelphia 'I am coming soon,' reiterates in 22:6 'what must soon take place,' and closes in 22:20 with Jesus saying 'Surely I am coming soon.'"],
  ["Matthew 10:23; 26:64","John 14:3; 21:22–23","Romans 13:11–12; 16:20","1 Corinthians 7:29–31; 10:11; 15:51–52","2 Corinthians 5:2–4","Philippians 4:5","1 Thessalonians 5:1–2; 2 Thessalonians 2:1–2","Hebrews 1:1–2; 10:37","James 5:9; 1 Peter 4:7; 1 John 2:18","Acts 2:16–17; Revelation 1:1–3; 3:11; 22:6, 20"],
  [
   N(P_LUK,
    "In Luke 17:20–21 Jesus says the kingdom of God does not come with observable signs, for 'the kingdom of God is in the midst of you.' So it was a spiritual, 'already / not yet' reality.",
    "Luke wrote after that first generation had already passed away, so this unique saying is used to salvage the failed timetable—yet just three verses later (Luke 17:24), plus Matthew 24:30 and Acts 1:10–11 (written by Luke's own author!), the Second Coming is explicitly physical and universally visible.",
    "Luke 17:20–21 vs. the visible, physical return in Luke 17:24 & Acts 1:10–11",
    ["Why Luke needed 17:20–21: Luke's Gospel contains this unusual phrasing precisely because the original generation had died out and the delayed expectation required reinterpretation.",
     "Apologist 'Already / Not Yet' claim: Defenders distinguish Luke 17:20–21 (inner, spiritual presence of the kingdom in Jesus and believers) from the future visible consummation (resurrection, judgment, new creation).",
     "Immediate contradiction in Luke 17:24: Only three verses later Jesus describes the Day of the Son of Man as unmistakable, public, and impossible to miss: 'For as the lightning flashes and lights up the sky from one side to the other, so will the Son of Man be in his day.'",
     "Matthew 24:30: Describes a globally visible, physical arrival: 'Then will appear in heaven the sign of the Son of Man, and then all the tribes of the earth will mourn, and they will see the Son of Man coming on the clouds of heaven with power and great glory.'",
     "Acts 1:10–11 (by the same author as Luke): Two men in white robes explicitly tell the disciples watching Jesus's bodily ascension that 'this Jesus, who was taken up from you into heaven, will come in the same way as you saw him go into heaven'—a literal, visible return, not an invisible spiritual state."],
    ["Luke 17:20–24","Matthew 24:30","Acts 1:10–11"],
    [],
    {facts:[["Core Tension","Spiritual vs. physical return"],["Same Context","Luke 17:24 = lightning across sky"],["Same Author","Acts 1:10–11 = visible return"],["Matt 24:30","All tribes see him on clouds"]],
     quotes:[{by:"Luke 17:24",en:"For as the lightning flashes and lights up the sky from one side to the other, so will the Son of Man be in his day.",ref:"Gospel of Luke 17:24"},
             {by:"Acts 1:10–11",en:"This Jesus, who was taken up from you into heaven, will come in the same way as you saw him go into heaven.",ref:"Acts of the Apostles 1:10–11"}]}),

   N(P_JON,
    "Prophecies in the Bible are conditional like Jonah 3: God announced Nineveh's destruction in 40 days, they repented, and God changed His mind—so Jesus's return was delayed too.",
    "Numbers 23:19 denies that God is a man who changes His mind, and Deuteronomy 18:20–22 makes non-fulfillment the decisive test of a false prophet. Moreover, Nineveh's destruction was contingent on human conduct, whereas Jesus's return must occur regardless of human righteousness—and if every prophecy were always conditional, Deuteronomy 18:22 would be worthless.",
    "Refuting the Jonah 3 & 'conditional prophecy' excuse",
    ["Numbers 23:19: 'God is not man, that he should lie, or a son of man, that he should change his mind (repent). Has he said, and will he not do it? Or has he spoken, and will he not fulfill it?'",
     "Deuteronomy 18:20–22 (Test of a false prophet): 'When a prophet speaks in the name of the LORD, if the word does not come to pass or come true, that is a word that the LORD has not spoken; the prophet has spoken it presumptuously. You need not be afraid of him.' If all prophecies are treated as perpetually conditional, Deuteronomy 18:20–22 becomes completely useless.",
     "Jonah 3:10 & 4:11 (LXX & Masoretic Text): In Jonah 3, God declares without stated conditions that the city will be overthrown in 40 days, then 'relented of the disaster' (3:10). Jonah 4:11 adds that God spared Nineveh because over 120,000 inhabitants 'do not know their right hand from their left, and also much cattle' (LXX/MT)—raising the moral question of why an omniscient God announced unconditional destruction on people who did not even know right from left.",
     "Conditional vs. Unconditional (the Coach & Ice-Cream Analogy): A truly conditional prophecy lays out two pre-set outcomes from the start ('If you train well today, ice cream tomorrow; if not, none')—the coach never changes his mind. Saying flatly 'No ice cream tomorrow' and then reversing out of pity means changing one's mind and lacking omniscience.",
     "End of the world vs. a city's judgment: A city's destruction may depend on repentance, but Jesus's Second Coming MUST happen even if the world stayed righteous forever; it is an unconditional eschatological event, not a preventable local warning."],
    ["Numbers 23:19","Deuteronomy 18:20–22","Jonah 3:10; 4:11 (LXX & MT)"],
    [],
    {facts:[["Deut 18:22","Unfulfilled word = false prophet"],["Num 23:19","God does not repent/change mind"],["Jonah 4:11","120,000 unaware of right/left"],["Key Distinction","World's end is unconditional"]],
     quotes:[{by:"Numbers 23:19",en:"God is not man, that he should lie, or a son of man, that he should change his mind. Has he said, and will he not do it?",ref:"Numbers 23:19"},
             {by:"Deuteronomy 18:22",en:"When a prophet speaks in the name of the LORD, if the word does not come to pass or come true, that is a word that the LORD has not spoken; the prophet has spoken it presumptuously.",ref:"Deuteronomy 18:20–22"}],
     visual:{kind:'compare',
      left:{title:"Conditional Prophecy (Jeremiah 18)",items:["Two outcomes stated upfront","Outcome follows human response","No change of divine mind required","Applies to avertible warnings against nations"]},
      right:{title:"Jesus's Parousia Prediction",items:["Fixed timeframe ('this generation', 'soon')","Must occur even if humanity were righteous","Non-occurrence triggers Deut 18:22 test","Makes Deut 18:22 meaningless if excused as conditional"]}}}),

   N(P_JD,
    "Jeremiah 18:7–10 proves that divine prophecies are conditional and change when people repent.",
    "Jesus cited Daniel, and Daniel himself read Jeremiah's 70-year exile prophecies (Jeremiah 25:11–12; 29:10) as fixed, unalterable decrees that repentance could neither shorten nor cancel—showing that concrete time-bound prophecies are absolute, not conditional.",
    "Jeremiah 25/29 & Daniel 9: time-bound prophecies are non-negotiable",
    ["Concrete timeframe (Jeremiah 25:11–12; 29:10): God specifies an exact 70-year span for Jerusalem's desolation and Babylonian exile. Daniel treats this 70-year figure as a fixed, non-negotiable timetable.",
     "Specific purpose: The 70 years served as the required penalty for Israel's persistent idolatry and neglected Sabbaths for the land, executing divine justice rather than functioning as a tentative threat.",
     "General vs. specific in Jeremiah 18:7–10: Jeremiah 18 describes general judicial principles regarding nations turning from evil or good, not fixed-date decrees like the 70 years.",
     "Daniel's prayer in Daniel 9: Daniel recognizes the immutability of the 70-year decree—he confesses sin and repents on behalf of the people, yet never asks God to shorten the 70 years; he prays for mercy so they may experience the restoration once the appointed time concludes.",
     "Conclusion on fixed timeframes: Whenever Scripture gives explicit chronological boundaries, those decrees express God's sovereign, unalterable plan rather than conditional contingencies."],
    ["Jeremiah 18:7–10; 25:11–12; 29:10","Daniel 9"],
    [],
    {facts:[["Jer 25 & 29","Fixed 70-year exile decree"],["Jer 18:7–10","General rule, not fixed dates"],["Daniel 9","Repents without asking to shorten"],["Implication","Explicit timelines are absolute"]],
     quotes:[{by:"Argument Summary",en:"In Daniel 9, Daniel recognizes the immutability of this prophecy by repenting for the people without asking to shorten the 70 years—demonstrating that time-specific decrees are absolute, not conditional.",ref:"Analysis of Jeremiah 25/29 & Daniel 9"}]}),

   N(P_ISR,
    "In Matthew 23:39 Jesus gives a condition for his return: Israel must first recognize him and say, 'Blessed is he who comes in the name of the Lord!'",
    "Just two verses earlier (Matthew 23:35–36), Jesus explicitly ties that judgment and departure to 'this generation'—his own living Jewish contemporaries.",
    "Matthew 23:37–39 read in its immediate context (23:35–36)",
    ["The apologist proof-text (Matthew 23:37–39): Jesus laments over Jerusalem ('O Jerusalem, Jerusalem, the city that kills the prophets... See, your house is left to you desolate. For I tell you, you will not see me again, until you say, \"Blessed is he who comes in the name of the Lord.\"').",
     "Two verses earlier (Matthew 23:35–36): Jesus defines the exact target and timeframe: 'so that on you may come all the righteous blood shed on earth, from the blood of righteous Abel to the blood of Zechariah... whom you murdered between the sanctuary and the altar. Truly, I say to you, all these things will come upon this generation.'",
     "Clear historical referent: 'This generation' unambiguously denotes the contemporaries listening to Jesus who bore guilt for rejecting the prophets—meaning the whole discourse is anchored in first-century Jerusalem, not a two-millennia delay."],
    ["Matthew 23:35–39"],
    [],
    {facts:[["Target Verse","Matthew 23:37–39"],["Context Anchor","Matthew 23:35–36 (2 verses prior)"],["Exact Phrase","'Upon this generation'"],["Referent","First-century listeners"]],
     quotes:[{by:"Matthew 23:36",en:"Truly, I say to you, all these things will come upon this generation.",ref:"Gospel of Matthew 23:36"},
             {by:"Matthew 23:39",en:"For I tell you, you will not see me again, until you say, 'Blessed is he who comes in the name of the Lord.'",ref:"Gospel of Matthew 23:39"}]}),

   N(P_IGN,
    "Even if the apostles spoke urgently, the post-apostolic Church didn't think the end was literally imminent.",
    "Ignatius of Antioch (c. 35–110 CE), writing in his Letter to the Ephesians, explicitly declares that 'the last times are here'—proving the expectation of an imminent end persisted directly into the sub-apostolic generation.",
    "Ignatius of Antioch (35–110 CE): 'The last times are here'",
    ["Epistle to the Ephesians, Ch. 11 (titled 'The end of the times is at hand; exhortation to fear of God and prayer'): Ignatius warns the Ephesian church that they are already living in the final moments.",
     "Primary text (BKV / Loeb): 'The last times are here; let us therefore be on our guard and fear the long-suffering of God, lest it become a judgment against us.'",
     "Historical significance: Spanning 35–110 CE, Ignatius bridges the apostolic age and the second century, confirming that early Christians took the New Testament's imminent end-times language literally."],
    ["Ignatius of Antioch, Letter to the Ephesians, Ch. 11 (bkv.unifr.ch/de/works/cpg-1025/compare/die-sieben-briefe-des-ignatius-von-antiochien-bkv/13/the-letters-loeb)"],
    [],
    {facts:[["Witness","Ignatius of Antioch (35–110 CE)"],["Source","Epistle to the Ephesians, Ch. 11"],["Statement","'The last times are here'"],["Continuity","Post-apostolic imminence"]],
     quotes:[{by:"Ignatius of Antioch",en:"The last times are here; let us therefore be on our guard and fear the long-suffering of God, lest it become a judgment against us.",ref:"Letter to the Ephesians, Ch. 11"}]}),

   N(P_MIC,
    "Jeremiah 26 cites Micah to argue that prophecies are conditional and God revokes judgment when people repent.",
    "The Book of Micah itself states zero conditionality in Micah 2:3 and 3:4—on the contrary, it declares a doom from which they cannot escape and that God will refuse to answer even when they cry out, with no record of national repentance in the text.",
    "Micah 2:3 & 3:4: unconditional doom with no repentance in the text",
    ["Micah 2:3 (unavoidable judgment): 'Therefore thus says the LORD: Behold, against this family I am devising disaster, from which you cannot remove your necks, and you shall not walk haughtily, for it will be a time of disaster.' Even turning aside cannot avert it.",
     "Micah 3:4 (God refuses to relent): 'Then they will cry to the LORD, but he will not answer them; he will hide his face from them at that time, because they have made their deeds evil.'",
     "Jeremiah 26 vs. the Book of Micah: Although Jeremiah 26 later cites Micah in support of conditional prophecy, Micah's own text contains neither a conditional clause nor any narrative episode in which the people repented and God reversed His word."],
    ["Micah 2:3; 3:4","Jeremiah 26"],
    [],
    {facts:[["Verse 1","Micah 2:3 (inescapable disaster)"],["Verse 2","Micah 3:4 (cries unanswered)"],["Contrast","No conditionality in Micah's text"],["Rebuttal","Undercuts Jeremiah 26 appeal"]],
     quotes:[{by:"Micah 2:3",en:"Behold, against this family I am devising disaster, from which you cannot remove your necks, and you shall not walk haughtily, for it will be a time of disaster.",ref:"Micah 2:3"},
             {by:"Micah 3:4",en:"Then they will cry to the LORD, but he will not answer them; he will hide his face from them at that time, because they have made their deeds evil.",ref:"Micah 3:4"}]}),

   N(P_JOS,
    "When a king and entire nation genuinely repent—as in Nineveh under Jonah—God always cancels the prophesied judgment.",
    "Under King Josiah, both the king and the entire nation repented deeply, renewed the covenant, destroyed all idols, and kept an unprecedented Passover—yet God still refused to turn back His wrath against Judah (2 Kings 23:26).",
    "Josiah's national repentance did NOT cancel God's decree (2 Kings 22–23)",
    ["Finding the Book of the Law (2 Kings 22:8–13; 2 Chronicles 34:14–21): Josiah had the Law read publicly before the entire people, tore his clothes in deep contrition, and sent to the prophetess Huldah.",
     "National covenant renewal (2 Kings 23:1–3; 2 Chronicles 34:29–32): Josiah gathered everyone from elders to commoners, read the Law aloud, and 'all the people joined in the covenant,' pledging wholeheartedly to obey God's commandments.",
     "Eradication of idolatry & unprecedented Passover (2 Kings 23:4–23; 2 Chronicles 34:3–7; 35:1–19): With popular participation, pagan altars and idols were purged across the land, and a Passover was celebrated unlike any 'since the days of the judges who judged Israel.'",
     "The decree still stood (2 Kings 23:26): Unlike Nineveh—where both king and people repented and the whole city was spared—only Josiah personally was spared from seeing the calamity, while Judah's sentence remained fixed: 'Still the LORD did not turn from the burning of his great wrath, by which his anger was kindled against Judah, because of all the provocations with which Manasseh had provoked him.'"],
    ["2 Kings 22:8–13; 23:1–26","2 Chronicles 34:3–7, 14–21, 29–32; 35:1–19"],
    [],
    {facts:[["King & Nation","Full repentance & covenant renewal"],["Reforms","Idols purged; historic Passover"],["Outcome","Only Josiah personally spared"],["Key Verse","2 Kings 23:26 (wrath not turned)"]],
     quotes:[{by:"2 Kings 23:26",en:"Still the LORD did not turn from the burning of his great wrath, by which his anger was kindled against Judah, because of all the provocations with which Manasseh had provoked him.",ref:"2 Kings 23:26"},
             {by:"2 Chronicles 35:18",en:"No Passover like it had been kept in Israel since the days of Samuel the prophet / the days of the judges...",ref:"2 Chronicles 35:18"}]}),

   N(P_DAV,
    "What about the David and Absalom prophecy argument regarding non-conditional decrees?",
    "Channel #pro-david-und-absalom-keine-konditionelle is indexed in Averroes's end-times prophecy category to argue that the David-and-Absalom prophecy was likewise non-conditional, though its specific message body was not preserved in the archive export (`unknown`).",
    "David & Absalom non-conditional prophecy (archive note)",
    ["Archive status: The channel title indicates an argument showing that prophecy concerning David and Absalom was non-conditional, matching the broader critique against the 'all prophecies are conditional' defense.",
     "Transparency note: The exported message text in the source archive reads only `unknown (edited)`, so no reconstructed details are added beyond the channel's recorded title and classification."],
    ["Averroes Discord archive #pro-david-und-absalom-keine-konditionelle (text uncaptured)"],
    [],
    {facts:[["Channel Slug","pro-david-und-absalom-keine-konditionelle"],["Category","Jesus end-times prophecy"],["Archive Status","Message body `unknown` in export"],["Role","Counter-example to conditionalism"]]})
  ],
  {facts:[["Total Passages","23 NT verses + Ignatius"],["Gospels","Matt 10:23; 26:64; John 14:3; 21:22–23"],["Epistles","Paul, Peter, James, John, Hebrews"],["Rebuttals","Luke 17, Jonah, Daniel, Matt 23, Micah, Josiah"]],
   quotes:[{by:"Matthew 10:23",en:"Truly, I say to you, you will not have gone through all the towns of Israel before the Son of Man comes.",ref:"Gospel of Matthew 10:23"},
           {by:"1 Corinthians 15:51",en:"Behold! I tell you a mystery. We shall not all sleep, but we shall all be changed.",ref:"1 Corinthians 15:51"},
           {by:"1 John 2:18",en:"Children, it is the last hour, and as you have heard that antichrist is coming, so now many antichrists have come. Therefore we know that it is the last hour.",ref:"1 John 2:18"},
           {by:"Revelation 22:20",en:"He who testifies to these things says, 'Surely I am coming soon.'",ref:"Revelation 22:20"}],
   visual:{kind:'steps',items:[
    ["1. Jesus's Explicit Predictions","Matt 10:23 (before finishing Israel's towns); Matt 26:64 (high priests will see him come); John 14:3 & 21:22–23 (rumor John wouldn't die first)."],
    ["2. Paul's Imminent Expectation","1 Cor 7:29–31 ('time is short'); 10:11 ('end of the ages has come'); 15:51–52 ('we shall not all sleep'); 2 Cor 5:2–4; Rom 13:11–12; 16:20; Phil 4:5; 1 Thess 5:1–2; 2 Thess 2:1–2."],
    ["3. General Epistles, Acts & Revelation","Acts 2:16–17; Heb 1:1–2 & 10:37; Jas 5:9 ('Judge at the door'); 1 Pet 4:7; 1 John 2:18 ('last hour'); Rev 1:1–3; 3:11; 22:6, 20 ('coming soon')."],
    ["4. Sub-Apostolic Continuation","Ignatius of Antioch (35–110 CE, Eph. 11) still warns: 'The last times are here.'"],
    ["5. Excuses Refuted","Luke 17:20–21 contradicted by 17:24 & Acts 1:10–11; Jonah 3 fails Deut 18:22 & Num 23:19; Daniel 9 keeps Jer 25/29 fixed; Matt 23:39 tied to 'this generation' (23:36); Micah 2–3 & Josiah (2 Kgs 23:26) refute universal conditionalism."]
   ]}}),
 sum:"From Jesus's own lips (Matt 10:23; 26:64) through Paul, Peter, James, Hebrews, John, Revelation, and Ignatius of Antioch, early Christianity expected an imminent first-century return—and every apologetic escape via Luke 17, Jonah, Jeremiah/Daniel, or Matthew 23:39 collapses under its own biblical context."
});

/* ============================================================================
   2. THE PERICOPE ADULTERAE / JOHN 7:53–8:11 (9 Averroes channels)
   ============================================================================ */
const PA_MS   = AV('nicht-in-den-ältestens-manuskripten','1283804557025214574');
const PA_FLOW = AV('flüssiger-übergang','1286042796503072868');
const PA_VAT  = AV('codex-vaticanus','1285379479304142900');
const PA_PAT  = AV('kirchenväter-die-es-nicht-zitieren','1285280511622778952');
const PA_EUS  = AV('eusebius-argument','1283807689113075784');
const PA_DIDY = AV('didymus-argument','1285375313995628595');
const PA_DIDA = AV('didiscalia-argument','1285285321944203264');
const PA_AC   = AV('apostolsiche-konstitution-argument','1285371163169521706');
const PA_JER  = AV('hieronymus-argument','1283805749453127730');

card('christianity/bible/pericope-adulterae',{
 title:"The Woman Caught in Adultery (John 7:53–8:11): a later interpolation",
 k:"Textual Criticism",
 blurb:"Absent from P66, P75, Sinaiticus, Vaticanus, Alexandrinus, Ephraemi, and all Fathers 0–300 CE; disrupts John 7:52 → 8:12.",
 claim:"The Pericope Adulterae (John 7:53–8:11, 'Let him who is without sin cast the first stone') is an authentic original passage of the Gospel of John.",
 tree:N(PA_MS,
  "The story of the woman caught in adultery is an original part of John's Gospel, preserved in the Church's manuscripts and early patristic tradition.",
  "John 7:53–8:11 is completely absent from all our earliest papyri and uncial codices (P66, P75, Sinaiticus, Vaticanus, Alexandrinus, Ephraemi Rescriptus), breaks the seamless thematic and spatial flow from John 7:52 directly into 8:12, and was unknown to every Church Father from 0 to 300 CE.",
  "Absent from the earliest Greek manuscripts & breaks the narrative flow",
  ["Papyrus 66 (𝔓66, c. 200 CE): One of the earliest surviving papyri of the Gospel of John—does not contain John 7:53–8:11.",
   "Papyrus 75 (𝔓75, c. 3rd century CE): Preserves large portions of John's Gospel—does not contain John 7:53–8:11.",
   "Codex Sinaiticus (א, 4th century CE): Complete Greek Bible manuscript—omits the passage entirely (see codexsinaiticus.org, John 8).",
   "Codex Vaticanus (B, 4th century CE): One of the two oldest and weightiest Greek Bible manuscripts—omits the passage entirely.",
   "Codex Alexandrinus (A, 5th century CE) & Codex Ephraemi Rescriptus (C, 5th century CE): Both omit John 7:53–8:11.",
   "Seamless flow from 7:52 to 8:12: In John 7:42–52 the Pharisees, temple guards, and Nicodemus debate Jesus's messianic identity during the Feast of Tabernacles in the Temple, and John 8:12 ('I am the light of the world') directly answers that identity dispute in the exact same Temple setting."],
  ["P66 (c. 200 CE); P75 (3rd c.)","Codex Sinaiticus (א); Codex Vaticanus (B)","Codex Alexandrinus (A); Codex Ephraemi (C)","codexsinaiticus.org (John 8)"],
  [
   N(PA_FLOW,
    "Doesn't John 7:53–8:11 fit naturally between chapters 7 and 8?",
    "On the contrary, removing the interpolation restores seamless thematic continuity, setting, action flow, and Johannine prose style directly from 7:52 into 8:12.",
    "Seamless continuity from John 7:42–52 directly into 8:12 & stylistic mismatch",
    ["Thematic continuity (7:42 → 8:12): In John 7:42 people dispute Jesus's identity and Galilean origin ('Is the Christ to come from Galilee?'); John 8:12 directly continues this revelation of who he is ('I am the light of the world').",
     "Same place and public context: Throughout John 7 Jesus is in the Jerusalem Temple during the Feast of Tabernacles teaching publicly; John 8:12 continues this exact Temple teaching with no change of scene or break.",
     "Flow of action (7:45–52 → 8:12): The dispute between the Pharisees, temple officers, and Nicodemus over Jesus's role and authority transitions straight into Jesus answering those doubts with the 'light of the world' metaphor—there is zero gap in logic or dialogue.",
     "Divergent literary style: Textual critics also note the Pericope Adulterae uses many short sentences and simple vocabulary, unlike the longer sentences and more complex Greek diction characteristic of the rest of John's Gospel."],
    ["John 7:42–52; 8:12"],
    [],
    {facts:[["Setting","Same Temple & Feast of Tabernacles"],["Flow","7:45–52 debate → 8:12 'Light of the world'"],["Style","Short simple clauses ≠ Johannine prose"],["Verdict","Foreign insertion into John 7–8"]],
     visual:{kind:'compare',
      left:{title:"Without 7:53–8:11 (Original Flow)",items:["7:42–52: Dispute in Temple over Jesus's origin & authority","8:12: Same Temple setting—Jesus replies 'I am the light of the world'","Continuous public dialogue without scene break","Consistent Johannine vocabulary & syntax"]},
      right:{title:"With 7:53–8:11 (Interpolated)",items:["7:53: Everyone abruptly goes home; Jesus goes to Mount of Olives","8:2: New morning scene inserted out of nowhere","8:12 awkwardly resumes the prior Pharisees/Temple debate","Short, simple non-Johannine sentences"]}}}),

   N(PA_VAT,
    "The diacritical marks (umlauts/distigmai) in Codex Vaticanus prove the scribe knew the Pericope Adulterae belonged at John 7:52.",
    "Textual critics reject that claim: diacritical marks in Vaticanus and Sinaiticus are general, non-specific markers of textual variants, Vaticanus shows no marginal note or blank gap for the story, and its text runs seamlessly from 7:52 to 8:12.",
    "Codex Vaticanus diacritical marks do not attest the Pericope",
    ["General, non-specific markings: Diacritical signs and dots appear across manuscripts like Codex Sinaiticus and Vaticanus to flag various readings or textual features, and their meaning is often vague—they cannot be tied specifically to the Pericope Adulterae.",
     "No consistent indicator: There is no clear or consistent signal in Codex Vaticanus implying the Pericope belonged at that spot.",
     "No marginalia or lacuna: Codex Vaticanus leaves zero blank space and zero marginal note indicating a deleted or omitted story; the text flows unbroken from John 7:52 directly to 8:12.",
     "Scholarly consensus: The overwhelming consensus of textual critics holds that these markings are general scribal notes insufficient to establish original inclusion of the Pericope."],
    ["Codex Vaticanus (B) at John 7:52–8:12"],
    [],
    {facts:[["Manuscript","Codex Vaticanus (B, 4th c.)"],["Signs","General scribal dots, non-specific"],["Space/Notes","No lacuna, no marginalium"],["Consensus","Does not attest the Pericope"]]}),

   N(PA_PAT,
    "Early Church Fathers recognized and cited this story from the beginning.",
    "From 0 to 300 CE, not a single Church Father or major Christian apologist ever mentioned or quoted the Pericope Adulterae—an astonishing 300-year total silence.",
    "Complete patristic silence from 0 to 300 CE (17 Fathers & apologists)",
    ["Apostolic Fathers & 2nd-century apologists (zero mention): Clement of Rome, Ignatius of Antioch, Polycarp of Smyrna, Papias of Hierapolis (no Johannine pericope), Justin Martyr, Athenagoras of Athens, Tatian, and Irenaeus of Lyon.",
     "Major 2nd–3rd-century theologians & commentators (zero mention): Clement of Alexandria, Tertullian, Origen (who wrote a massive commentary on John!), Hippolytus of Rome, Cyprian of Carthage, Gregory Thaumaturgus, Methodius of Olympus, Lactantius, and Arnobius of Sicca.",
     "Significance of the silence: Writers who commented verse-by-verse on John (like Origen) or debated penance and adultery constantly (like Tertullian and Cyprian) never once cited John 7:53–8:11."],
    ["Patristic corpus (0–300 CE): 17 Fathers & apologists"],
    [],
    {facts:[["Time Span","0–300 CE (first 3 centuries)"],["Count","17 major Fathers & apologists"],["Key Omitters","Origen, Tertullian, Cyprian, Irenaeus"],["Mentions in John","Zero"]]}),

   N(PA_EUS,
    "Eusebius (c. 320 CE) confirms Papias already knew this story from the apostolic era.",
    "Eusebius says Papias's story came from the lost, non-canonical Gospel according to the Hebrews—not John—and involved a woman accused of 'many sins' rather than adultery, while calling Papias himself 'mentally very limited.'",
    "Eusebius on Papias (Church History 3.39): wrong book, wrong sin, unreliable source",
    ["Primary quote (Eusebius, Ecclesiastical History 3.39, c. 320 CE): '[Papias] expounds another story about a woman who was accused of many sins before the Lord, which is contained in the Gospel according to the Hebrews.'",
     "Wrong gospel: Eusebius explicitly locates the story in the Gospel according to the Hebrews (a lost apocryphal text that no longer exists today), NOT the Gospel of John.",
     "Different story details: Eusebius speaks of a woman accused of 'many sins'—nothing about adultery or the single sin of the Johannine Pericope.",
     "Eusebius's low verdict on Papias (same book & chapter, 3.39): Eusebius writes that 'Papias, as can be inferred from his words, must have been of very small intelligence [geistig sehr beschränkt], yet through his antiquity misled very many later ecclesiastical writers, such as Irenaeus and others who hold similar views.'"],
    ["Eusebius of Caesarea, Ecclesiastical History 3.39 (c. 320 CE)"],
    [],
    {facts:[["Source","Eusebius, Church History 3.39"],["Book Cited","Gospel according to the Hebrews"],["Accusation","'Many sins', not adultery"],["Papias Rating","'Mentally very limited' (Eusebius)"]],
     quotes:[{by:"Eusebius of Caesarea",en:"And another story about a woman who was accused of many sins before the Lord, which is contained in the Gospel according to the Hebrews.",ref:"Ecclesiastical History 3.39"},
             {by:"Eusebius on Papias",en:"Although Papias, as one can conclude from his words, must have been mentally very limited, he gave occasion to very many later church writers—who were misled by the man's antiquity, like Irenaeus—to adopt similar notions.",ref:"Ecclesiastical History 3.39"}]}),

   N(PA_DIDY,
    "Didymus the Blind (4th century) proves the Johannine Pericope was established in Alexandria.",
    "Didymus never mentions the Gospel of John—he says the tale is found 'in certain gospels'—and omits the famous line 'Let him who is without sin cast the first stone,' citing an unstable variant copied only in a 6th-century manuscript.",
    "Didymus the Blind: vague source ('certain gospels') & divergent wording",
    ["Divergent wording & missing famous line: Didymus's version lacks the canonical line 'Let him who is without sin among you be the first to throw a stone at her,' reading instead: 'If anyone is conscious in himself of not having sinned, let him take up a stone and strike her'—pointing to a different, less established form.",
     "No link to the Gospel of John: Didymus states the account appears 'in certain gospels' without naming John, indicating apocryphal or alternative traditions rather than canonical John.",
     "Fluid, unfixed tradition: The variation in wording and details shows the tale had no fixed, authoritative canonical shape in Didymus's milieu.",
     "Two-century manuscript gap: Although Didymus wrote in the 4th century, the surviving Tura manuscript dates to the 6th century—a 200-year gap in which editorial alterations could have occurred."],
    ["Didymus the Blind (4th c., 6th-c. Tura manuscript)"],
    [],
    {facts:[["Author","Didymus the Blind (4th c.)"],["MS Date","6th-century copy (200-yr gap)"],["Attribution","'In certain gospels' (not John)"],["Wording","Lacks canonical 'cast the first stone'"]],
     quotes:[{by:"Didymus the Blind",en:"If anyone has consciousness in himself of not having sinned, let him take up a stone and strike her.",ref:"Commentary (found 'in certain gospels')"}]}),

   N(PA_DIDA,
    "The Didascalia Apostolorum (c. 250 CE) attests the Pericope Adulterae in the third century.",
    "The earliest surviving Syriac manuscript of the Didascalia (c. 400 CE) omits the story—most early manuscripts lack it, and it only surfaces in a late Syriac version around 600 CE while never being cited there by any Church Father.",
    "Didascalia Apostolorum: absent from the c. 400 CE Syriac manuscript",
    ["No Greek original survives: Though allegedly composed in Greek around 250 CE, no third-century manuscript exists; the earliest surviving witness is a Syriac manuscript from around 400 CE, and it does NOT contain the story.",
     "Late Syriac appearance (c. 600 CE): Most early manuscripts lack the episode; only a later Syriac recension around 600 CE suddenly includes it.",
     "Patristic silence on this witness: Strangely, no Church Father ever appealed to the Didascalia's version of the story either."],
    ["Didascalia Apostolorum (c. 400 CE vs. c. 600 CE Syriac MSS)"],
    [],
    {facts:[["Alleged Date","c. 250 CE (Greek lost)"],["Earliest MS","Syriac c. 400 CE (omits it)"],["First Appearance","Late Syriac MS c. 600 CE"],["Patristic Citations","None"]]}),

   N(PA_AC,
    "The Apostolic Constitutions (c. 390 CE) preserve the story as accepted Scripture.",
    "Written around 390 CE—far too late to prove originality in John—the Apostolic Constitutions survive in no complete manuscript older than 1056 CE and underwent centuries of known redactional and theological expansion.",
    "Apostolic Constitutions: late compilation (c. 390 CE), oldest MS 1056 CE",
    ["Too late for Johannine authenticity: Composed c. 390 CE, even if the passage stood in the original text it could not prove the story belonged to first-century John.",
     "Earliest complete manuscript is 1056 CE: No older complete manuscript exists to verify the 4th-century wording against medieval insertions.",
     "Known redactional editing: The Apostolic Constitutions underwent extensive editorial revisions over the centuries to fit pastoral and theological needs, and similar earlier Christian texts omit the story—pointing to later stylistic and theological expansion highlighting mercy and forgiveness."],
    ["Apostolic Constitutions (c. 390 CE; earliest complete MS 1056 CE)"],
    [],
    {facts:[["Composition","c. 390 CE (late 4th century)"],["Oldest Complete MS","1056 CE (660+ year gap)"],["Text History","Known later redactional edits"],["Earlier Parallels","Absent from similar early texts"]]}),

   N(PA_JER,
    "Jerome explicitly testifies in 415 CE that the story stood in 'many Greek and Latin manuscripts' of John.",
    "Jerome was fighting Pelagianism and needed a dramatic proof-text for divine grace; M. R. James notes scholars reject or treat Jerome's manuscript claims about the Gospel of the Hebrews as exaggerations, and no early Greek manuscript backs Jerome up.",
    "Jerome (Against the Pelagians 2.17, 415 CE): anti-Pelagian motive & exaggeration",
    ["Jerome's claim (Against the Pelagians 2.17, 415 CE): 'In the Gospel according to John there is found in many Greek and Latin manuscripts the story of the adulterous woman who was brought before the Lord.' Why insist it appeared in 'many' manuscripts? Because readers already noticed it was missing!",
     "M. R. James on Jerome's credibility: Speaking of Jerome's claim to have produced Greek and Latin versions of the Gospel according to the Hebrews, M. R. James notes: 'This statement is flatly rejected by some and regarded by others as an exaggeration. It is very difficult to accept it in its entirety'—and to this day no manuscript of a Gospel of the Hebrews survives.",
     "Anti-Pelagian polemical motive: Pelagius taught that humans can achieve righteousness by free will and effort without needing divine grace. Jerome desperately needed a vivid scriptural scene showing all accusers are sinners needing mercy and grace.",
     "Textual reality vs. strategic exaggeration: Since the earliest manuscripts (Sinaiticus, Vaticanus, P66, P75) omit the Pericope, Jerome's claim of 'many Greek and Latin manuscripts' reflects either error or strategic exaggeration to anchor anti-Pelagian theology in canonical authority."],
    ["Jerome, Against the Pelagians (Dialogus adversus Pelagianos) 2.17 (415 CE)","M. R. James on Jerome and the Gospel of the Hebrews"],
    [],
    {facts:[["Author & Date","Jerome, 415 CE"],["Polemic","Against Pelagianism (grace vs. free will)"],["Scholarly Critique","M. R. James: exaggeration / rejected"],["Manuscript Reality","Missing in P66, P75, א, B, A, C"]],
     quotes:[{by:"Jerome",en:"In the Gospel according to John there is found in many Greek and Latin manuscripts the story of the adulterous woman who was brought before the Lord.",ref:"Against the Pelagians 2.17 (415 CE)"},
             {by:"M. R. James",en:"Jerome, our chief source of knowledge about this gospel, says that he made a Greek and a Latin version of it. This statement is flatly rejected by some and regarded by others as an exaggeration. It is very difficult to accept it in its entirety.",ref:"On Jerome & the Gospel of the Hebrews"}]})
  ],
  {facts:[["Earliest MSS","Absent from P66, P75, א, B, A, C"],["Fathers 0–300 CE","17 major Fathers: 0 citations"],["Context","Interrupts John 7:52 → 8:12"],["First Named in John","Late 4th / early 5th c. (Jerome)"]],
   quotes:[{by:"Eusebius (c. 320 CE)",en:"And another story about a woman who was accused of many sins before the Lord, which is contained in the Gospel according to the Hebrews.",ref:"Ecclesiastical History 3.39"},
           {by:"Jerome (415 CE)",en:"In the Gospel according to John there is found in many Greek and Latin manuscripts the story of the adulterous woman who was brought before the Lord.",ref:"Against the Pelagians 2.17"}],
   visual:{kind:'compare',
    left:{title:"Earliest Evidence (2nd–4th c.)",items:["P66 (c. 200) & P75 (3rd c.): omitted","Codex Sinaiticus (א) & Vaticanus (B): omitted","Codex Alexandrinus (A) & Ephraemi (C): omitted","17 Fathers & apologists (0–300 CE): total silence","John 7:52 flows seamlessly into 8:12"]},
    right:{title:"Late / Divergent Witnesses",items:["Eusebius (320 CE): Papias story of 'many sins' in Gospel of Hebrews","Didymus (4th c., 6th-c. MS): 'in certain gospels', altered wording","Didascalia: missing in 400 CE Syriac; appears c. 600 CE","Apostolic Constitutions (c. 390 CE): earliest MS 1056 CE","Jerome (415 CE): anti-Pelagian appeal to 'many' MSS"]}}}),
 sum:"John 7:53–8:11 is absent from every early papyrus and uncial (P66, P75, Sinaiticus, Vaticanus, Alexandrinus, Ephraemi), unknown to all Church Fathers from 0–300 CE, breaks the seamless Temple debate between 7:52 and 8:12, and enters patristic debate only through late, divergent, or polemically motivated sources."
});
})();
