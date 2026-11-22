/* Deenresponds Uncovered Christology, OT Trinity & NT Corruption — 2026-11-22.
   Integrates 11 newly uncovered Deenresponds channels (server 1328402309297733662) across
   5 new Tactical Debate Playbook cards and 6 add() enrichments (5 debate-tree branches + 1 explainer card),
   referencing all 12 shots/dr-ot-*.webp and shots/dr-nt-*.webp scans. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('dr-uncovered-christ: no card',key); };

const DR=(sub,id)=>({credit:'Deenresponds · '+sub,link:'https://discord.com/channels/1328402309297733662/'+id});
const S=(src,cap)=>({src:'shots/'+src,cap});

/* ============================================================================
   1. NEW Tactical Playbook card: christianity/trinity/angel-of-the-lord
   ============================================================================ */
const AOTL=DR('#angel-lord','1368282845348368384');

const aotlTrapA=P(N(
  AOTL,
  'The angel speaks in the first person as God in Genesis 16:10–11, and if Gabriel said I am Allah it would be shirk.',
  'In biblical agency (shaliaḥ), a messenger delivers the sender’s verbatim first-person speech without claiming to be the sender. Exodus 23:22 explicitly distinguishes “his voice” (the angel’s) from “all that I say” (God’s)—just as Gabriel conveyed Allah’s first-person words in Qurʾān 20:14 without ever claiming divinity.',
  'First-person prophetic & angelic speech (Exod 23.22 & Q 20.14)',
  [
    '01 · Exodus 23.20–22 separates speaker from source: God instructs Israel to “carefully obey his voice [the angel’s] and do all that I say [God’s].” The angel acts as God’s communicative vessel, so first-person promises like multiplying Hagar’s descendants (Gen 16:10–11) originate with God, not the angel.',
    '02 · Qurʾān 20.14 destroys the Gabriel counter-retort: When apologists ask whether Gabriel saying “I am Allah” would be shirk, they overlook that Gabriel literally recited Qurʾān 20:14 (“Indeed, I am Allah. There is no deity except Me…”) to the Prophet Muḥammad ﷺ—because relaying the Sender’s exact words is the essence of messengership.',
    '03 · Distinctness elsewhere destroys the pre-incarnate Jesus thesis: In Zechariah 1:12–13, the Angel of the LORD pleads to the LORD of hosts (“O LORD of hosts, how long will You have no mercy…?”), and Matthew 2:13 has an “angel of the LORD” appearing to Joseph after Jesus was already born—proving the title denotes a created envoy, not a singular pre-incarnate Christ.'
  ],
  ['Exodus 23:20–22','Genesis 16:10–11','Zechariah 1:12–13','Matthew 2:13','Qurʾān 20:14'],
  [],
  {
    facts:[
      ['Exod 23:22','“Obey his voice and do all that I say”'],
      ['Zech 1:12–13','Angel prays directly to YHWH'],
      ['Matt 2:13','Angel of the LORD appears post-Nativity'],
      ['Qurʾān 20:14','Gabriel relays Allah’s first-person speech']
    ],
    quotes:[
      {by:'Exodus 23:22',en:'But if you carefully obey his voice and do all that I say, then I will be an enemy to your enemies.',ref:'Exodus 23:22'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The angel speaks in the first person as God in Genesis 16:10–11—Gabriel saying I am Allah would be shirk!',
  theyWho:'Watch out · if they say',
  who:'Expose agency speech (Exod 23:22 & Q 20:14)'
});

const aotlTrapB=P(N(
  AOTL,
  'The angel bears God’s name, is addressed directly as God, and causes mortal dread like seeing God himself.',
  'Old Testament idiom routinely applies God’s name and titles to human envoys and sacred objects, addresses messengers as their sender, and records fear before holy things—without turning Isaiah, David’s messengers, Gabriel, or the Ark into God.',
  'Bearing the divine name, indirect address & awe before holiness',
  [
    '01 · Prophets and objects bear YHWH’s name (Isa 7.3–10; Josh 3.11; 2 Sam 6.2): In Isaiah 7:3 YHWH tells Isaiah what to say to Ahaz, yet v. 10 says “Again YHWH spoke [wayyōsef] to Ahaz” when Isaiah is speaking. Likewise, the Ark is called “the ark of the Lord of all the earth” (Josh 3:11) and bears the name “YHWH of hosts” (2 Sam 6:2).',
    '02 · Envoys addressed directly as their sender (Judg 11.13; 1 Sam 25.40–41): The Ammonite king demands that Jephthah’s powerless messengers restore his land as if they were Jephthah (Judg 11:13). When David sends multiple servants to Abigail (1 Sam 25:40), she replies in the singular—ʾămāṯəḵā (“your maidservant,” v. 41)—addressing David directly through his envoys.',
    '03 · Terror and reverence do not prove deity (Dan 8.17; Exod 34.30; Num 4.20): Manoah’s fear (Judg 13:22) and Joshua removing his sandals (Josh 5:13–15) reflect mediated divine holiness. Daniel collapsed in terror before Gabriel (Dan 8:17), Israel feared Moses’s shining face (Exod 34:30), and gazing at the Ark brought death (Num 4:20; 1 Sam 6:19)—yet none of those are God.'
  ],
  ['Isaiah 7:3, 10','Joshua 3:11','2 Samuel 6:2','Judges 11:13; 13:22','1 Samuel 6:19; 25:40–41','Daniel 8:17','Exodus 34:30','Numbers 4:20'],
  [],
  {
    facts:[
      ['Isa 7:3, 10','Isaiah’s speech attributed directly to YHWH'],
      ['2 Sam 6:2','Ark of the Covenant called by YHWH’s name'],
      ['1 Sam 25:41','Abigail speaks singular to David’s envoys'],
      ['Dan 8:17','Daniel terrified by Gabriel, not God']
    ],
    quotes:[
      {by:'Numbers 4:20',en:'But they shall not go in to look on the holy things even for a moment, lest they die.',ref:'Numbers 4:20'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The angel bears God’s name, is spoken to as God, and makes witnesses fear for their lives!',
  theyWho:'Watch out · if they say',
  who:'Refute via Isa 7, Abigail & Daniel 8'
});

const aotlTrapC=P(N(
  AOTL,
  'The angel does things only God can do—making covenants, blessing food, and forgiving or withholding pardon for sins.',
  'Performing a God-ordained act as an appointed agent never equals ontological deity. Jeremiah 14:22 says YHWH alone gives rain while Elijah withholds and brings rain in 1 Kings 17:1 and 18:1; Joseph is asked to forgive sins in Genesis 50:17; and Acts 7 and Hebrews 1–2 explicitly keep the Sinai angel separate from Christ.',
  'Delegated acts (Elijah, Joseph) & NT exclusion of angels',
  [
    '01 · Delegated miracles do not make Elijah God (Jer 14.22 vs. 1 Kgs 17.1 & 18.1): Jeremiah 14:22 declares that YHWH alone gives rain, yet Elijah decrees drought and rain by his word (1 Kgs 17:1; cf. 18:1). By the same agency principle, the angel ratifying Abraham’s covenant (Gen 22:11–18) or conveying blessing (Exod 23:24–25) acts under God’s command.',
    '02 · Pardon and intercession (Exod 23.21; Gen 50.17; Zech 1.3–4; 3.4): In Genesis 50:17, Joseph’s brothers beg Joseph to forgive their transgression—showing forgiveness of offences against a person or authority is not exclusive deity. In Exodus 23:21 and Zechariah 1:3–4 (and 3:4), the angel enforces or announces God’s pardon as God’s envoy.',
    '03 · New Testament refutation (Acts 7.30–38 & Heb 1–2): Stephen’s speech in Acts 7:30–38 explicitly identifies the burning-bush and Sinai figure as a created “angel” speaking on God’s behalf, while Hebrews 1–2 constructs its entire argument by contrasting the Son with all angels—ruling out identifying the Son as an angel.'
  ],
  ['Jeremiah 14:22','1 Kings 17:1; 18:1','Genesis 22:11–18; 50:17','Exodus 23:21, 24–25','Zechariah 1:3–4; 3:4','Acts 7:30–38','Hebrews 1–2'],
  [],
  {
    facts:[
      ['Jer 14:22 / 1 Kgs 17','Only YHWH gives rain, yet Elijah commands it'],
      ['Gen 50:17','Brothers ask Joseph to forgive transgression'],
      ['Acts 7:30–38','Calls Sinai burning-bush figure an “angel”'],
      ['Hebrews 1–2','Explicitly distinguishes Son from angels']
    ],
    quotes:[
      {by:'Genesis 50:17',en:'Please forgive the transgression of your brothers and their sin, because they did evil to you.',ref:'Genesis 50:17'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The angel performs acts only God can do, such as forgiving sins, blessing food, and sealing covenants!',
  theyWho:'Watch out · if they say',
  who:'Show delegated agency & Acts 7 / Heb 1–2'
});

card('christianity/trinity/angel-of-the-lord',{
  title:'Angel of the LORD (Malʾakh YHWH): Pre-Incarnate Jesus?',
  k:'Old Testament · Biblical agency (Shaliaḥ)',
  blurb:'Why malʾakh means messenger, not sender: Exod 23:20–22, Zech 1:12–13, Isa 7:10, Abigail, Elijah, and Acts 7:30–38.',
  claim:'Because the Angel of the LORD speaks as God, bears the divine name, receives awe, and forgives sins, he must be the pre-incarnate Jesus of the Trinity.',
  tree:P(N(
    AOTL,
    'The Angel of the LORD speaks as YHWH, bears God’s name, and acts as God—proving he is the pre-incarnate second Person of the Trinity.',
    'Confusing a messenger (Hebrew malʾakh) with the Sender collapses both logic and biblical grammar. Under the biblical agency (shaliaḥ) principle, Exodus 23:20–22 explicitly separates the angel’s voice from God’s command, Isaiah 7 and the Ark show created vessels bearing YHWH’s name, Zechariah 1:12–13 depicts the angel praying to YHWH, and Matthew 2:13 plus Acts 7:30–38 and Hebrews 1–2 refute identifying him as Christ.',
    'Biblical agency (shaliaḥ) vs. Trinitarian conflation',
    [
      '01 · Logical & creedal gap (Trinity ≠ blurred messenger): Even if an angel speaks or acts with divine authority, that never establishes Nicene co-equality, co-eternality, or shared divine essence. Hebrew malʾakh simply means “messenger”—an envoy distinct from the One who sends him.',
      '02 · The Nativity & Zechariah refutations (Matt 2.13; Zech 1.12–13): If “the angel of the LORD” were the pre-incarnate Jesus, another “angel of the LORD” could not appear to Joseph after Jesus’s birth (Matt 2:13), nor would the Angel of the LORD plead to YHWH in Zechariah 1:12–13.',
      '03 · Selective cherry-picking vs. Exod 23.20–22: Apologists highlight blurring passages while ignoring verses where the angel is subordinate and receives orders. Exodus 23:20–22 defines the rule: God sends the angel ahead, places His authority (“My name”) in him, and tells Israel to obey his voice to do what God says.',
      '04 · New Testament verdict (Acts 7.30–38 & Heb 1–2): Stephen calls the burning-bush and Sinai figure an “angel” (Acts 7:30–38), and Hebrews 1–2 sharply separates the Son from angels—leaving no room for a pre-incarnate angel-Christ.'
    ],
    ['Exodus 23:20–22','Genesis 16:10–13; 22:11–18','Judges 6 & 13','Zechariah 1:12–13','Matthew 2:13','Acts 7:30–38','Hebrews 1–2'],
    [aotlTrapA,aotlTrapB,aotlTrapC],
    {
      facts:[
        ['Hebrew malʾakh','Literally “messenger / envoy,” never Sender'],
        ['Exod 23:20–22','Separates “his voice” from “all that I say”'],
        ['Matt 2:13','Angel of the LORD appears after Jesus’s birth'],
        ['Acts 7 / Heb 1–2','Burning-bush angel ≠ the Son']
      ],
      quotes:[
        {by:'Zechariah 1:12',en:'Then the angel of the LORD said, “O LORD of hosts, how long will you have no mercy on Jerusalem…?”',ref:'Zechariah 1:12'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Apologetic Conflation',
          items:[
            'Equates first-person agency speech with ontological identity',
            'Treats divine naming/awe as exclusive proof of deity',
            'Ignores Matt 2:13 (post-birth angel) and Zech 1:12–13',
            'Overlooks Acts 7:30–38 and Heb 1–2 separating Son and angels'
          ]
        },
        right:{
          title:'Biblical Agency (Shaliaḥ)',
          items:[
            'Exod 23:22: angel’s voice conveys God’s words as a vessel',
            'Isa 7:10 & 2 Sam 6:2: prophets and the Ark bear YHWH’s name',
            'Judg 11:13 & 1 Sam 25:41: envoys addressed as their sender',
            'Jer 14:22 vs. 1 Kgs 17–18: delegated power ≠ deity'
          ]
        }
      }
    }
  ),{
    who:'Dismantle the agency confusion',
    forkTitle:'Three proofs Christians press on the Angel',
    forkSub:'Counter first-person speech, divine titles/fear, or delegated miracles & pardon'
  }),
  sum:'The “Angel of the LORD” (malʾakh YHWH) operates under standard biblical agency (shaliaḥ)—speaking and bearing God’s name as His appointed envoy (Exod 23:20–22), praying to YHWH (Zech 1:12), appearing post-Nativity (Matt 2:13), and remaining distinct from the Son (Acts 7:30–38; Heb 1–2).'
});

/* ============================================================================
   2. NEW Tactical Playbook card: christianity/trinity/genesis-1-26-let-us-make
   ============================================================================ */
const G126=DR('#gen-1-26','1368282775119200377');

const g126TrapA=P(N(
  G126,
  'A plural verb like naʿăśeh (“Let us make”) cannot refer to a single person—it requires multiple divine Persons.',
  'Hebrew grammar and classical Jewish exegesis prove otherwise. Plural deliberation and majesty forms appear with singular speakers across Scripture (Gen 29:27; Dan 2:36; Num 22:6), Rashi explains God addressed His heavenly court in humility, and Chizkuni highlights that Genesis 1:27 immediately shifts to the singular verb wayyiḇrā (“He created”).',
  'Hebrew plural of majesty, Rashi & Chizkuni on Gen 1.26–27',
  [
    '01 · Plural of majesty & deliberation (Ibn Ezra / Saadia Gaon): Commenting on Genesis 1:26, Ibn Ezra cites Saadia Gaon’s rule that naʿăśeh (“let us make”) carries singular meaning as a plural of majesty—noting biblical parallels like “and we will give you the other also” (Gen 29:27), “we will tell the interpretation” (Dan 2:36), and “that we may smite them” (Num 22:6) (while Ibn Ezra debates those specific examples and favors royal/angelic speech).',
    '02 · Chizkuni on naʿăśeh vs. bārā in Genesis 1.27 & 6.7: Rabbi Chizkuni points out that the Torah writes naʿăśeh (“let us make”), never nibrā (“let us create”), because creation ex nihilo (bərīʾāh) belongs solely to God. Immediately in Genesis 1:27 the verb turns strictly singular—wayyiḇrā hā-ʾĕlōhīm (“and God created”)—just as in Genesis 6:7 (“whom I created”).',
    '03 · Rashi on the heavenly council & refuting heretics: Rashi notes that God spoke to His judicial council (angels) solely to teach humility—that the greater consults the lesser—and immediately followed v. 26 with singular “And God created” (not “and they created”) specifically to shut the door on plural-deity readings.'
  ],
  ['Genesis 1:26–27; 6:7; 29:27','Numbers 22:6','Daniel 2:36','Ibn Ezra, Chizkuni & Rashi on Gen 1:26'],
  [],
  {
    facts:[
      ['Gen 1:27','Singular verb: wayyiḇrā (“He created”)'],
      ['Dan 2:36','Daniel alone says “we will tell”'],
      ['Chizkuni','Torah avoids plural *nibrā* (“let us create”)'],
      ['Rashi','Addressed heavenly council, created alone']
    ],
    quotes:[
      {by:'Genesis 1:27',en:'So God created [singular: wayyiḇrā] man in his own image, in the image of God he created him.',ref:'Genesis 1:27'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'A plural verb like Let us make requires multiple divine Persons inside the Godhead!',
  theyWho:'Watch out · if they say',
  who:'Cite Gen 1:27 singular verb & commentators'
});

const g126TrapB=P(N(
  G126,
  'It is not an isolated verse—God also uses “us” in Genesis 3:22, Genesis 11:7, and Isaiah 6:8!',
  'All three parallels exhibit the exact same divine-council and royal-deliberation idiom—as Rashi and Kimchi documented—while Isaiah 44:24 explicitly demolishes any Trinitarian co-creator reading by declaring that the LORD made all things “alone… by myself.”',
  'Genesis 3.22, Genesis 11.7, Isaiah 6.8 & Isaiah 44.24',
  [
    '01 · Genesis 3.22 & 11.7 follow the same council pattern: Rashi and classical Hebrew exegetes apply the exact same principle to “like one of us” (Gen 3:22) and “let us go down” (Gen 11:7)—God speaking majestically or addressing His angelic court without sharing creative divinity.',
    '02 · Isaiah 6.8 (Kimchi on lānū, “for us”): Just as Isaiah 6:8 depicts the LORD enthroned among the seraphim asking “Whom shall I send, and who will go for us?”, David Kimchi explains the plural lānū reflects God addressing His heavenly court after asking in the singular (“Whom shall I send?”).',
    '03 · Isaiah 44.24 refutes multi-person creation: The same God who spoke in Genesis 1:26 declares in Isaiah 44:24, “I am the LORD, who made all things, who alone stretched out the heavens, who spread out the earth by myself.” Adding two other co-creators contradicts Isaiah 44:24 directly.'
  ],
  ['Genesis 3:22; 11:7','Isaiah 6:8; 44:24','David Kimchi on Isa 6:8','Rashi on Gen 1:26; 11:7'],
  [],
  {
    facts:[
      ['Isa 6:8','Singular “I send” + council “for us”'],
      ['Gen 3:22; 11:7','Same royal/heavenly-council idiom'],
      ['Isa 44:24','“Alone… by myself” excludes co-creators'],
      ['Kimchi & Rashi','Consistent Jewish grammatical exegesis']
    ],
    quotes:[
      {by:'Isaiah 44:24',en:'I am the LORD, who made all things, who alone stretched out the heavens, who spread out the earth by myself.',ref:'Isaiah 44:24'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'God repeatedly says us in Genesis 3:22, Genesis 11:7, and Isaiah 6:8 too!',
  theyWho:'Watch out · if they say',
  who:'Show Isa 6:8 council & Isa 44:24 (“alone”)'
});

card('christianity/trinity/genesis-1-26-let-us-make',{
  title:'Genesis 1:26: “Let us make man in our image”',
  k:'Old Testament · Hebrew grammar & divine council',
  blurb:'Fragmentary ambiguity, singular verb in v. 27, plural of majesty/council (Ibn Ezra, Rashi, Chizkuni), Gen 11:7, Isa 6:8, and Isa 44:24.',
  claim:'When God says “Let us make man in our image” (Genesis 1:26), the plural pronoun reveals the three Persons of the Trinity consulting together.',
  tree:P(N(
    G126,
    'In Genesis 1:26 God says Let us make man in our image—proving a plurality of divine Persons in the Trinity.',
    'Genesis 1:26 names neither Father, Son, nor Spirit, nor their number or ontology—meaning it could just as easily be forced onto binitarianism, Arianism, or polytheism. Grammar and context settle the issue immediately: Genesis 1:27 switches to the strictly singular verb “He created,” classical Hebrew commentators explain naʿăśeh via plural of majesty or the angelic court, and Isaiah 44:24 affirms God created “alone… by myself.”',
    'Grammar, verse 27 singularity & Isaiah 44.24',
    [
      '01 · Fragmentary ambiguity proves no Trinity: Verse 26 never identifies who is speaking, whom He addresses, how many parties exist, or their ontological relation. Reading Nicene Trinitarianism into an unspecified plural could equally be twisted to support binitarianism, partialism, or polytheism.',
      '02 · Singular verb immediately follows in Genesis 1.27: Although v. 26 says naʿăśeh (“let us make”), v. 27 immediately reports execution with the singular verb wayyiḇrā (“And God created”)—showing one Creator acted alone.',
      '03 · Hebrew plural of majesty & divine council: Jewish grammarians and exegetes (Ibn Ezra citing Saadia Gaon, Chizkuni, Rashi, Kimchi) document royal/majestic plurals in singular speakers (Gen 29:27; Dan 2:36; Num 22:6) and God addressing His angelic court (cf. Gen 3:22; 11:7; Isa 6:8) without sharing creation.',
      '04 · Explicit unitarian statement in Isaiah 44.24: God declares He made all things “alone” and spread out the earth “by myself”—directly ruling out multiple divine co-creators.'
    ],
    ['Genesis 1:26–27; 3:22; 11:7','Isaiah 6:8; 44:24','Daniel 2:36','Ibn Ezra, Chizkuni, Rashi & Kimchi'],
    [g126TrapA,g126TrapB],
    {
      facts:[
        ['Gen 1:26','No mention of 3 Persons or shared essence'],
        ['Gen 1:27','Immediate singular verb wayyiḇrā'],
        ['Plural Usage','Majesty/deliberation & heavenly court'],
        ['Isa 44:24','Creator acted “alone… by myself”']
      ],
      quotes:[
        {by:'Isaiah 44:24',en:'I am the LORD, who made all things, who alone stretched out the heavens, who spread out the earth by myself.',ref:'Isaiah 44:24'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Trinitarian Eisegesis',
          items:[
            'Assumes “us” means exactly three co-equal divine Persons',
            'Ignores the immediate shift to singular wayyiḇrā in v. 27',
            'Overlooks Dan 2:36, Gen 29:27 & Num 22:6 singular speakers',
            'Contradicts Isa 44:24 (“alone… by myself”)'
          ]
        },
        right:{
          title:'Hebrew Syntax & Context',
          items:[
            'Plural of majesty/deliberation or address to heavenly council',
            'V. 27 confirms one singular Actor created humanity',
            'Isa 6:8 combines singular “I send” with council “for us”',
            'Isa 44:24 explicitly excludes any co-creator beside YHWH'
          ]
        }
      }
    }
  ),{
    who:'Dismantle the “Let us” inference',
    forkTitle:'Two ways apologists defend the plural',
    forkSub:'Counter the plural-verb claim or the Gen 3:22 / 11:7 / Isa 6:8 parallels'
  }),
  sum:'Genesis 1:26 is grammatically consistent with the Hebrew plural of majesty or God addressing His heavenly council, is immediately answered by the singular verb “He created” in v. 27, and is ruled out as multi-person creation by Isaiah 44:24 (“alone… by myself”).'
});

/* ============================================================================
   3. NEW Tactical Playbook card: christianity/trinity/genesis-18-three-visitors
   ============================================================================ */
const G18=DR('#gen-18','1368282874817548409');

const g18TrapA=P(N(
  G18,
  'Two of the visitors were angels who went to Sodom in Genesis 19:1, while the third visitor who stayed behind was YHWH himself!',
  'Genesis 18 disproves that twice: earlier in the chapter all three visitors answer Abraham together in God’s stead, showing all three are equal angelic envoys—and then Genesis 18:22–23 explicitly separates “the men” who departed toward Sodom from “the LORD” whom Abraham approached afterward.',
  'All three answer as envoys & Genesis 18.22–23 separates them',
  [
    '01 · All three reply collectively to Abraham: When Abraham invokes God in Genesis 18, all three visitors speak in response as God’s messengers. If one of the three were literally God standing beside two angels, there would be no reason for all three to answer in God’s stead.',
    '02 · Genesis 18.22–23 contrasts “the men” with “the LORD”: Verse 22 states, “The men turned away and went toward Sodom, but Abraham remained standing before the LORD,” and v. 23 has Abraham approaching the LORD directly after the men departed.',
    '03 · Genesis 19.1 confirms the departing visitors were angels: Chapter 19 identifies the travelers arriving in Sodom as “the two angels,” confirming the three men in Mamre were angelic messengers rather than three Persons of a Trinity.'
  ],
  ['Genesis 18:2, 9–25','Genesis 19:1'],
  [],
  {
    facts:[
      ['Gen 18:9–10','Visitors answer collectively as envoys'],
      ['Gen 18:22','“The men turned away… before the LORD”'],
      ['Gen 18:23','Abraham approaches the LORD after men leave'],
      ['Gen 19:1','Calls the travelers “the two angels”']
    ],
    quotes:[
      {by:'Genesis 18:22 (NIV)',en:'The men turned away and went toward Sodom, but Abraham remained standing before the LORD.',ref:'Genesis 18:22'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Only two visitors were angels going to Sodom—the third figure who stayed with Abraham was YHWH himself!',
  theyWho:'Watch out · if they say',
  who:'Show Gen 18:22–23 separates men from YHWH'
});

const g18TrapB=P(N(
  G18,
  'Genesis 18:1 explicitly opens by saying “The LORD appeared to Abraham,” right before v. 2 says he saw three men!',
  'Exodus 33:20 states no human can see God’s face and live—so Abraham did not literally see God’s essence in three men eating butter, milk, and veal. Rather, just as throughout Genesis and Judges, “the LORD appeared” introduces a divine revelation mediated through angelic messengers.',
  'Exodus 33.20 (“no one may see me and live”) & agency',
  [
    '01 · Exodus 33.20 rules out literal sight of God: God tells Moses, “You cannot see my face, for no one may see me and live.” Because Abraham lived after greeting the three men, he did not literally behold God’s divine essence.',
    '02 · Angelic mediation introduces “the LORD appeared”: Biblical narrative routinely opens a prophetic or angelic encounter by stating YHWH appeared or spoke (cf. Exod 3:2–6; Judg 13) when an angel delivers the message.',
    '03 · Absurdity of literal Trinitarian incarnation in Mamre: Claiming the three men eating curds, milk, and calf-meat (Gen 18:8) were literally Father, Son, and Holy Spirit contradicts both Christian doctrine (which holds only the Son became flesh) and Genesis 18:22’s clear distinction between the men and the LORD.'
  ],
  ['Genesis 18:1–8, 22–23','Exodus 33:20','Exodus 3:2–6'],
  [],
  {
    facts:[
      ['Exod 33:20','“No one may see me and live”'],
      ['Gen 18:8','The three men eat curds, milk & calf'],
      ['Trinitarian Flaw','Father & Spirit never incarnated as men'],
      ['Agency Rule','God reveals Himself through angelic envoys']
    ],
    quotes:[
      {by:'Exodus 33:20 (NIV)',en:'But, he said, “you cannot see my face, for no one may see me and live.”',ref:'Exodus 33:20'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Genesis 18:1 says The LORD appeared to Abraham right before he saw the three men!',
  theyWho:'Watch out · if they say',
  who:'Cite Exod 33:20 & angelic mediation'
});

card('christianity/trinity/genesis-18-three-visitors',{
  title:'Genesis 18: Abraham’s Three Visitors as the Trinity?',
  k:'Old Testament · Angelic visitors vs. Trinity',
  blurb:'Exodus 33:20 (“no one may see me and live”), Genesis 19:1 (“two angels”), collective angelic reply, and Genesis 18:22–23 distinguishing the men from the LORD.',
  claim:'When Genesis 18:1–2 says the LORD appeared to Abraham and he saw three men, Abraham beheld the three Persons of the Trinity.',
  tree:P(N(
    G18,
    'Genesis 18:1 says the LORD appeared to Abraham, and v. 2 says he saw three men—an Old Testament appearance of the Trinity.',
    'Reading Genesis 18 in context—alongside Exodus 33:20 and Genesis 19:1—completely refutes the Trinitarian reading. No one can see God’s face and live (Exod 33:20); the visitors function collectively as angelic envoys (two of whom Genesis 19:1 explicitly calls “angels”); and Genesis 18:22–23 explicitly distinguishes “the men” leaving toward Sodom from “the LORD” before whom Abraham remained standing.',
    'Exodus 33.20, Genesis 19.1 & Genesis 18.22–23',
    [
      '01 · You cannot see God and live (Exod 33.20): God Himself declares, “No one may see me and live.” Since Abraham conversed with the visitors, fed them, and lived, the three men were not God’s visible essence.',
      '02 · Context identifies the visitors as angels (Gen 18.16 & 19.1): The men turn to walk toward Sodom, and Genesis 19:1 immediately identifies them as “the two angels” arriving at Sodom.',
      '03 · Collective angelic answer rules out one God + two angels: Earlier in Genesis 18, when Abraham invokes God, the visitors answer collectively in God’s stead—showing all three share the same status as angelic messengers, not one Person of the Trinity flanked by two created angels.',
      '04 · Genesis 18.22–23 separates the three men from the LORD: Verse 22 states “the men turned away and went toward Sodom, but Abraham remained standing before the LORD,” and v. 23 has Abraham approaching the LORD directly after the men departed.'
    ],
    ['Genesis 18:1–2, 16, 22–25','Genesis 19:1','Exodus 33:20'],
    [g18TrapA,g18TrapB],
    {
      facts:[
        ['Exod 33:20','No one can see God’s face and live'],
        ['Gen 19:1','Calls the departing visitors “angels”'],
        ['Gen 18:22','Separates “the men” from “the LORD”'],
        ['Gen 18:23','Abraham approaches the LORD after they go']
      ],
      quotes:[
        {by:'Genesis 18:1–2 (NIV)',en:'The LORD appeared to Abraham near the great trees of Mamre… Abraham looked up and saw three men standing nearby.',ref:'Genesis 18:1–2'},
        {by:'Genesis 18:22–23 (NIV)',en:'The men turned away and went toward Sodom, but Abraham remained standing before the LORD. Then Abraham approached him…',ref:'Genesis 18:22–23'}
      ],
      visual:{
        kind:'steps',
        items:[
          ['1. Exod 33:20 Barrier','Scripture explicitly states no human can see God and live—ruling out literal sight of God in Gen 18.'],
          ['2. Angelic Role (Gen 18 & 19:1)','The visitors eat, turn toward Sodom, and arrive in Genesis 19:1 identified as “the two angels.”'],
          ['3. Collective Reply','All three answer Abraham together as God’s envoys, disproving a “one God + two angels” split.'],
          ['4. Gen 18:22–23 Separation','“The men” leave toward Sodom while Abraham remains standing before “the LORD” and approaches Him directly.']
        ]
      },
      shots:[
        S('dr-ot-gen-18-1.webp','DR #gen-18: Genesis 18:1–2 (NIV) showing “The LORD appeared to Abraham” followed by “three men” standing nearby.'),
        S('dr-ot-gen-18-2.webp','DR #gen-18: Genesis 18:22–25 (NIV) contrasting “the men” departing toward Sodom with “the LORD” remaining before Abraham.')
      ]
    }
  ),{
    who:'Separate the angels from YHWH',
    forkTitle:'Two common Trinitarian follow-ups',
    forkSub:'Counter the “third visitor was YHWH” claim or the Gen 18:1 opening line'
  }),
  sum:'Genesis 18’s three visitors cannot be the Trinity: no human sees God and lives (Exod 33:20), the visitors act collectively as angelic messengers (Gen 19:1), and Genesis 18:22–23 explicitly distinguishes the departing “men” from “the LORD.”'
});

/* ============================================================================
   4. NEW Tactical Playbook card: christianity/trinity/isaiah-48-16-trinity
   ============================================================================ */
const I48=DR('#isa-48-16','1368282724904996904');

const i48TrapA=P(N(
  I48,
  'The text reads “the Lord GOD, and his Spirit, hath sent me”—showing two divine Persons sending a third divine Person!',
  'That KJV-style word order reverses the Hebrew grammar. In Hebrew, “his Spirit” (wə-rūḥō) stands after the verb “has sent me” (šəlāḥanī), and šəlāḥanī is strictly masculine singular (“He sent me”)—grammatically forbidding two subjects from doing the sending.',
  'Hebrew word order & singular verb šəlāḥanī vs. šəlāḥūnī',
  [
    '01 · Word-for-word Hebrew sequence: The clause reads wə-ʿattāh ʾĂdōnāy YHWH šəlāḥanī wə-rūḥō (“And now, the Lord YHWH has sent me, and his Spirit”). Placing “and his Spirit” ahead of the verb in English distorts the Hebrew syntax.',
    '02 · Singular verb šəlāḥanī cannot take two senders: The verb שְׁלָחַנִי (šəlāḥanī) is 3rd-person masculine singular (“He sent me”), permitting only one sender (the Lord YHWH). For both the Lord and His Spirit to do the sending, Hebrew would require the plural verb שְׁלָחוּנִי (šəlāḥūnī, “they sent me”).',
    '03 · Modern academic translations confirm it: Both the ESV and RSV render the clause faithfully as “And now the Lord GOD has sent me, and his Spirit” (or “with his Spirit”), placing the Spirit alongside the sent messenger rather than as a co-sender.'
  ],
  ['Isaiah 48:16 (MT, ESV, RSV)'],
  [],
  {
    facts:[
      ['Hebrew Order','šəlāḥanī (“sent me”) precedes wə-rūḥō'],
      ['Singular Verb','šəlāḥanī = 1 sender (not plural šəlāḥūnī)'],
      ['ESV & RSV','“The Lord GOD has sent me, and his Spirit”'],
      ['KJV Distortion','Moves wə-rūḥō before the verb']
    ],
    quotes:[
      {by:'Isaiah 48:16 (ESV / RSV)',en:'And now the Lord GOD has sent me, and his Spirit.',ref:'Isaiah 48:16'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The verse literally says the Lord GOD and his Spirit hath sent me—two divine Persons sending a third!',
  theyWho:'Watch out · if they say',
  who:'Expose Hebrew verb šəlāḥanī vs. šəlāḥūnī'
});

const i48TrapB=P(N(
  I48,
  'There is no announcement of a speaker change in Isaiah 48:16, so God Himself must still be the speaker who says “has sent me”!',
  'Biblical Hebrew routinely shifts speakers without an explicit tag—as proven by Deuteronomy 29:2–6, where Moses speaks in vv. 2–4 and God suddenly speaks in the first person in vv. 5–6. Standard critical commentaries (Anchor Yale Bible, ICC, Barnes, Benson) recognize the exact same shift in Isaiah 48:16b to the prophet sent by God.',
  'Unannounced speaker shifts (Deut 29.2–6) & scholarly consensus',
  [
    '01 · Deuteronomy 29.2–6 refutes the “no unannounced shift” rule: In Deut 29:2–4, Moses speaks to Israel and refers to “the LORD” in the third person; in vv. 5–6 the speaker abruptly shifts without warning to God Himself (“I have led you forty years… that you may know that I am the LORD your God”). Requiring an explicit tag would turn Moses into YHWH.',
    '02 · Critical scholarship identifies Isaiah’s voice in v. 16b: Major academic commentaries—including Joseph Blenkinsopp in the Anchor Yale Bible Commentary and the International Critical Commentary (ICC)—recognize that the closing line shifts from God’s oracle to the prophet (or prophetic servant/messenger) commissioned by God.',
    '03 · Classical Christian commentaries agree: Both Benson’s Commentary and Barnes’ Notes on the Bible explicitly observe a change of speaker at “And now the Lord GOD has sent me,” identifying the speaker of 48:16b as the sent messenger rather than God, within chapters (Isa 45–48) steeped in strict unitarian monotheism (45:5; 46:9; 48:12).'
  ],
  ['Deuteronomy 29:2–6','Isaiah 45:5; 46:9; 48:12, 16','Joseph Blenkinsopp (Anchor Yale Bible)','International Critical Commentary (ICC)','Benson’s Commentary & Barnes’ Notes'],
  [],
  {
    facts:[
      ['Deut 29:2–6','Unannounced shift from Moses to YHWH'],
      ['Blenkinsopp / ICC','Confirm speaker shift to sent prophet'],
      ['Barnes & Benson','Explicitly note change of speaker in v. 16b'],
      ['Isa 45–48 Context','Strict unitarian monotheism (“no God besides Me”)']
    ],
    quotes:[
      {by:'Deuteronomy 29:4–6',en:'But to this day the LORD has not given you a heart to understand… I have led you forty years in the wilderness… that you may know that I am the LORD your God.',ref:'Deuteronomy 29:4–6'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Isaiah 48:16 never announces a change of speaker, so the speaker being sent must still be God!',
  theyWho:'Watch out · if they say',
  who:'Show Deut 29:2–6 & scholarly commentaries'
});

card('christianity/trinity/isaiah-48-16-trinity',{
  title:'Isaiah 48:16: “The Lord GOD Has Sent Me, and His Spirit”',
  k:'Old Testament · Hebrew syntax & speaker shift',
  blurb:'Why wə-rūḥō cannot be a co-sender (singular šəlāḥanī), unannounced speaker shift to the prophet (Deut 29:2–6; Blenkinsopp, ICC, Barnes), and Isa 45–48 monotheism.',
  claim:'Isaiah 48:16 depicts three divine Persons of the Trinity because God says “the Lord GOD and his Spirit hath sent me.”',
  tree:P(N(
    I48,
    'In Isaiah 48:16 God says the Lord GOD and his Spirit hath sent me—proving three Persons in the Old Testament.',
    'This proof-text collapses on both Hebrew grammar and literary context. First, the verb šəlāḥanī (“has sent me”) is strictly singular and precedes wə-rūḥō (“and his Spirit”), ruling out two co-senders (confirmed by ESV and RSV). Second, as Joseph Blenkinsopp (Anchor Yale Bible), the ICC, Barnes, and Benson note, the final clause shifts to the prophet Isaiah speaking as God’s envoy—an unannounced shift also seen in Deuteronomy 29:2–6—inside chapters (Isa 45–48) affirming strict unitarian monotheism.',
    'Hebrew verb number & prophetic speaker shift',
    [
      '01 · Singular verb šəlāḥanī defeats the two-senders reading: The Hebrew text reads ʾĂdōnāy YHWH šəlāḥanī wə-rūḥō. Because šəlāḥanī is 3rd-person singular (“He sent me”—not plural šəlāḥūnī, “they sent me”) and precedes “and his Spirit,” the Spirit is grammatically not a co-sender.',
      '02 · Academic translations correct the KJV distortion: Rather than pulling “and his Spirit” ahead of the verb, the ESV and RSV accurately translate “And now the Lord GOD has sent me, and his Spirit.”',
      '03 · Speaker shifts to the sent prophet in v. 16b: Critical commentaries (Joseph Blenkinsopp in Anchor Yale Bible; ICC) as well as Benson and Barnes recognize that God speaks in 48:16a while the commissioned prophet speaks in 48:16b—matching unannounced shifts like Deuteronomy 29:2–6 (Moses to YHWH).',
      '04 · Isaiah 45–48 teaches uncompromising unitarianism: Throughout the same unit (45:5; 46:9; 48:12), God insists there is no God besides Him and He acts alone—ruling out a Trinitarian reading of 48:16.'
    ],
    ['Isaiah 48:16 (MT, ESV, RSV)','Isaiah 45:5; 46:9; 48:12','Deuteronomy 29:2–6','Joseph Blenkinsopp (Anchor Yale Bible)','ICC, Barnes & Benson'],
    [i48TrapA,i48TrapB],
    {
      facts:[
        ['Hebrew šəlāḥanī','Singular verb (“He sent me”), not plural'],
        ['ESV / RSV','“The Lord GOD has sent me, and his Spirit”'],
        ['Deut 29:2–6','Proves unannounced speaker shifts occur'],
        ['Isa 45–48','Uncompromising unitarian monotheism']
      ],
      quotes:[
        {by:'Isaiah 48:16 (ESV)',en:'And now the Lord GOD has sent me, and his Spirit.',ref:'Isaiah 48:16'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'KJV-Style Apologetic Reading',
          items:[
            'Moves “and his Spirit” before “hath sent” against Hebrew order',
            'Treats singular šəlāḥanī as if it had two subjects',
            'Assumes God is still speaking in v. 16b despite unannounced shifts'
          ]
        },
        right:{
          title:'Hebrew Grammar & Commentaries',
          items:[
            'Singular šəlāḥanī takes one subject (YHWH) before wə-rūḥō',
            'ESV & RSV preserve “sent me, and his Spirit”',
            'Blenkinsopp, ICC, Barnes & Benson identify prophet’s voice in v. 16b',
            'Deut 29:2–6 proves unannounced speaker shifts are standard Hebrew'
          ]
        }
      }
    }
  ),{
    who:'Refute syntax & speaker assumption',
    forkTitle:'Two ways they press Isaiah 48:16',
    forkSub:'Counter the “Lord and Spirit sent” grammar or the “same speaker” assumption'
  }),
  sum:'Isaiah 48:16 cannot teach the Trinity: Hebrew grammar uses the singular verb šəlāḥanī (“He sent me”) before “and his Spirit,” and critical commentators (Anchor Yale Bible, ICC, Barnes, Benson) recognize a prophetic speaker shift in v. 16b matching Deuteronomy 29:2–6.'
});

/* ============================================================================
   5. NEW Tactical Playbook card: christianity/jesus/proof-texts/psalm-22-pierced-hands-and-feet
   ============================================================================ */
const P22=DR('#psalm-22','1368597105957929020');

const p22TrapA=P(N(
  P22,
  'Dead Sea Scroll fragments at Nahal Hever read kaʾărū/kārū, and the pre-Christian Septuagint already translated it “pierced”!',
  'Neither rescues “pierced.” As the manuscript table shows, kaʾărī (“like a lion”) stands in every Masoretic text worldwide, the alleged Nahal Hever form kaʾărū does not exist as a standard Hebrew verb for piercing while kārū means “to dig/excavate,” and the Psalms Septuagint was translated post-Torah and transmitted exclusively by anonymous Christian scribes.',
  'Nahal Hever (kaʾărū / kārū) & Septuagint Psalms',
  [
    '01 · Masoretic text vs. Nahal Hever (kaʾărī vs. kaʾărū / kārū): All Masoretic manuscripts worldwide read כארי (kaʾărī, “like a lion”). The Nahal Hever variant כארו (kaʾărū) is not a valid Hebrew word meaning “pierced,” and the root כרו (kārū) appearing elsewhere in the Tanakh means “to dig” or “excavate”—not to pierce human flesh with nails.',
    '02 · Septuagint Psalms is neither pre-Christian Torah nor isnād-verified: The earliest Septuagint covered only the Torah (Genesis–Deuteronomy); the Writings (including Psalms) were translated later and preserved through Christian copyists with anonymous translators and zero chain of transmission (isnād). Even the Greek word used (ōryxan) means “they dug.”',
    '03 · Zero usage in the New Testament: Although Matthew quotes Psalm 22 and constantly searches the Old Testament for messianic proofs, no Gospel or Epistle ever quotes Psalm 22:16 as a prophecy of Jesus’s pierced hands and feet.'
  ],
  ['Psalm 22:16 (MT 22:17)','Nahal Hever fragment','Septuagint Psalms'],
  [],
  {
    facts:[
      ['Masoretic Text','Unanimous reading: kaʾărī (“like a lion”)'],
      ['Nahal Hever kaʾărū','Non-existent Hebrew word for “pierced”'],
      ['Hebrew kārū','Means “dig / excavate,” not nail-pierce'],
      ['NT Witness','Never quotes Ps 22:16 for crucifixion']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Dead Sea Scroll fragments at Nahal Hever and the Greek Septuagint prove Psalm 22:16 originally meant pierced!',
  theyWho:'Watch out · if they say',
  who:'Refute Nahal Hever kaʾărū & LXX Psalms'
});

const p22TrapB=P(N(
  P22,
  'Pierced still appears in Old Testament prophecy like Zechariah 12:10, and Psalm 22 describes crucifixion!',
  'Zechariah 12:10 uses a completely unrelated Hebrew verb—dāqar (דָּקַר, “to thrust through”)—proving Hebrew had explicit words for piercing when an author meant piercing. Even more tellingly, while the New Testament cites Psalm 22:1 and 22:18, not a single NT author ever quotes Psalm 22:16 for the crucifixion.',
  'Zechariah 12.10 (dāqar) & total New Testament silence',
  [
    '01 · Zechariah 12.10 uses dāqar, not kaʾărī: When Hebrew Scripture intends “pierce,” it uses roots like דָּקַר (dāqar, as in Zech 12:10), which shares nothing morphologically or semantically with כַּאֲרִי (kaʾărī, “like a lion”).',
    '02 · Consistent Christian Bible rendering elsewhere: Every time kaʾărī appears in Isaiah 38:13 (“like a lion he breaks all my bones”)—or ʾărī in Numbers 24:9 and Ezekiel 22:25—Christian translators translate it “like a lion,” confirming they alter Psalm 22:16 solely for apologetic reasons.',
    '03 · Complete New Testament silence: The Gospel of Matthew stretches Old Testament lines repeatedly to build messianic proofs, yet neither Matthew nor any other NT writer ever cites Psalm 22:16 to prove Jesus’s hands and feet were pierced.'
  ],
  ['Zechariah 12:10 (dāqar)','Isaiah 38:13 (kaʾărī)','Numbers 24:9','Ezekiel 22:25'],
  [],
  {
    facts:[
      ['Zech 12:10','Uses Hebrew dāqar (“pierce”), not kaʾărī'],
      ['Isa 38:13','Same word kaʾărī = “like a lion”'],
      ['Jewish Name','Ari (ארי) literally means “lion”'],
      ['NT Silence','Zero NT citations of Ps 22:16']
    ],
    quotes:[
      {by:'Isaiah 38:13 (NIV)',en:'Like a lion [kaʾărī] he broke all my bones.',ref:'Isaiah 38:13'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Zechariah 12:10 confirms messianic piercing, and Psalm 22 clearly describes the crucifixion!',
  theyWho:'Watch out · if they say',
  who:'Show dāqar ≠ kaʾărī & NT silence'
});

card('christianity/jesus/proof-texts/psalm-22-pierced-hands-and-feet',{
  title:'Psalm 22:16: “Pierced” or “Like a Lion” (Kaʾărī)?',
  k:'Old Testament · Hebrew kaʾărī vs. translation bias',
  blurb:'Hebrew kaʾărī (“like a lion,” cf. Isa 38:13), Nahal Hever kaʾărū/kārū, later Septuagint Psalms, Zechariah 12:10 (dāqar), and total NT silence.',
  claim:'Psalm 22:16 (“they pierce my hands and my feet”) is an explicit Old Testament prophecy of Jesus’s crucifixion.',
  tree:P(N(
    P22,
    'Psalm 22:16 says they pierced my hands and my feet—a clear Old Testament prophecy of Jesus’s crucifixion.',
    'The Hebrew Masoretic text universally reads כַּאֲרִי (kaʾărī): prefix kə- (“like”) + ʾărī (“lion”) = “like a lion”—rendered accurately by the JPS Tanakh (“like a lion [they maul] my hands and feet”). The exact same Hebrew word kaʾărī is translated “like a lion” in Christian Bibles at Isaiah 38:13, no New Testament writer ever quotes Psalm 22:16, and neither Nahal Hever’s kaʾărū/kārū (“dig”) nor Zechariah 12:10 (dāqar) supports “pierced.”',
    'Hebrew kaʾărī (“like a lion”) & translation bias',
    [
      '01 · Literal Hebrew anatomy of kaʾărī (כַּאֲרִי): The word combines the comparative prefix כְּ (kə-, “like”) with אֲרִי (ʾărī, “lion”—still a common Jewish name today meaning “lion”). Every Masoretic manuscript in the world reads kaʾărī, “like a lion.”',
      '02 · Inconsistent Christian translation (Isa 38.13 vs. Ps 22.16): Christian Bibles translate the identical Hebrew word kaʾărī as “like a lion” in Isaiah 38:13 (“like a lion he breaks all my bones”) and ʾărī as “lion” in Numbers 24:9 and Ezekiel 22:25—changing it to “they pierce” only in Psalm 22:16.',
      '03 · Nahal Hever (kaʾărū / kārū) & Septuagint fail: As documented in the comparative chart, kaʾărū is not an attested Hebrew verb for piercing and kārū means “to dig/excavate,” while the Psalms Septuagint reflects post-Torah anonymous translation transmitted by Christians rather than original pre-Christian Jewish scripture.',
      '04 · Total New Testament silence & Zech 12.10 contrast: Not a single NT author cites Psalm 22:16 for the crucifixion, and Zechariah 12:10 uses an entirely different Hebrew verb (dāqar) for piercing.'
    ],
    ['Psalm 22:16 (MT 22:17, NIV vs. JPS)','Isaiah 38:13','Numbers 24:9','Ezekiel 22:25','Zechariah 12:10'],
    [p22TrapA,p22TrapB],
    {
      facts:[
        ['Hebrew kaʾărī','kə- (“like”) + ʾărī (“lion”) = “like a lion”'],
        ['Isa 38:13','Same word translated “like a lion” in NIV'],
        ['kārū / kaʾărū','“Dig/excavate” or invalid form, not “pierce”'],
        ['NT Silence','No NT author ever quotes Ps 22:16']
      ],
      quotes:[
        {by:'Psalm 22:16 (JPS Tanakh)',en:'Dogs surround me; a pack of evildoers closes in on me, like a lion [they maul] my hands and feet.',ref:'Psalm 22:16 (MT 22:17)'},
        {by:'Isaiah 38:13 (NIV)',en:'Like a lion he broke all my bones.',ref:'Isaiah 38:13 (Hebrew: kaʾărī)'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Christian Apologetic Rendering',
          items:[
            'Translates Psalm 22:16 as “they pierce my hands and feet”',
            'Appeals to Nahal Hever kaʾărū or kārū (“dig/excavate”)',
            'Relies on post-Torah Christian-transmitted LXX Psalms',
            'Ignores that no NT author ever quoted Ps 22:16'
          ]
        },
        right:{
          title:'Masoretic Hebrew & Lexical Reality',
          items:[
            'All Masoretic MSS unanimously read kaʾărī (“like a lion”)',
            'Same word kaʾărī means “like a lion” in Isa 38:13',
            'Hebrew root for piercing (Zech 12:10) is dāqar, not kaʾărī',
            'Total NT silence confirms it was no crucifixion proof-text'
          ]
        }
      },
      shots:[
        S('dr-ot-psalm-22-1.webp','DR #psalm-22: Lexical comparison chart of Masoretic kaʾărī (“like a lion”), Nahal Hever kaʾărū, and Hebrew kārū (“dig” or “excavate”).'),
        S('dr-ot-psalm-22-2.webp','DR #psalm-22: Detail view of the kaʾărī / kaʾărū / kārū comparison explaining why “pierced” lacks lexical support.')
      ]
    }
  ),{
    who:'Refute the “pierced” mistranslation',
    forkTitle:'Two fallback claims they raise',
    forkSub:'Counter Nahal Hever / Septuagint Psalms or Zechariah 12:10'
  }),
  sum:'All Masoretic manuscripts of Psalm 22:16 read kaʾărī (“like a lion,” identical to Isaiah 38:13), Nahal Hever’s variant does not yield “pierce” (kārū = “dig”), Zechariah 12:10 uses an unrelated verb (dāqar), and no New Testament author ever quoted Psalm 22:16.'
});

/* ============================================================================
   6. add('christianity/jesus/d-dr-matthew', ...) — isa_7_14 (tree branch)
   ============================================================================ */
const I714=DR('#isa-7-14','1368597645563793461');
add('christianity/jesus/d-dr-matthew',P(N(
  I714,
  'Matthew 1:23 simply quotes the Greek Septuagint of Isaiah 7:14, where parthenos and Hebrew almah mean virgin.',
  'Isaiah 7:14 uses hā-ʿalmāh (“the young woman”)—never bəṯūlāh (“virgin”)—for an immediate 8th-century BCE child born to King Ahaz’s court (Isa 7:15–16). Masculine ʿelem means “youth” (1 Sam 20:22), Proverbs 30:19–20 uses ʿalmāh in a metaphor incompatible with virginity, Judges 11:37 and Leviticus 21:3 prove bəṯūlāh means virgin, and the Septuagint itself applies parthenos to Dinah after she was violated (Gen 34:3).',
  'Hebrew ʿalmāh vs. bəṯūlāh, Ahaz’s immediate sign & LXX Gen 34.3',
  [
    '01 · Masculine counterpart ʿelem (1 Sam 20.22): The masculine form of hā-ʿalmāh (הָעַלְמָה) is ʿelem (עֶלֶם), appearing twice in Scripture (e.g., 1 Samuel 20:22), where Jewish and Christian translators alike render it “youth” or “young man”—confirming ʿalmāh denotes a young woman, not a virgin.',
    '02 · Proverbs 30.18–20 disproves virginity in ʿalmāh: Proverbs 30:19 compares four things leaving no trace—ending with “the way of a man with an ʿalmāh”—to an adulteress who eats, wipes her mouth, and denies wrongdoing (v. 20). Since losing virginity leaves physical evidence, ʿalmāh cannot mean “virgin.”',
    '03 · Biblical Hebrew’s word for virgin is bəṯūlāh (Judg 11.37; Lev 21.2–3): Jephthah’s daughter weeps for her virginity (bəṯūlīm, from bəṯūlāh, Judg 11:37), and Leviticus 21:3 permits a priest to attend “his virgin [bəṯūlāh] sister… because she has had no husband.” Isaiah deliberately skipped bəṯūlāh and wrote hā-ʿalmāh—referring to a young woman giving birth as an immediate sign to Ahaz (Isa 7:15–16).',
    '04 · Septuagint parthenos backfires in Genesis 34.3: Claiming Matthew followed the Greek Septuagint (parthenos) neither excuses ripping Isaiah 7:14–16 out of Ahaz’s context nor proves virginity—because the very same Septuagint calls Dinah parthenos in Genesis 34:3 after she had been assaulted.'
  ],
  ['Isaiah 7:14–16','1 Samuel 20:22','Proverbs 30:18–20','Judges 11:37','Leviticus 21:2–3','Genesis 34:3 (LXX)','Matthew 1:22–23'],
  [],
  {
    facts:[
      ['1 Sam 20:22','Masculine ʿelem = “youth,” not virgin'],
      ['Prov 30:19–20','ʿalmāh parallels traceless union'],
      ['Lev 21:3 / Judg 11:37','bəṯūlāh specifically means “virgin”'],
      ['LXX Gen 34:3','Calls violated Dinah parthenos']
    ],
    quotes:[
      {by:'Proverbs 30:19–20',en:'…and the way of a man with a young woman [ʿalmāh]. This is the way of an adulteress: she eats and wipes her mouth…',ref:'Proverbs 30:19–20'},
      {by:'Leviticus 21:3',en:'…or his virgin [bəṯūlāh] sister, who is near to him because she has had no husband…',ref:'Leviticus 21:3'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Apologetic Claim (Matt 1:23)',
        items:[
          'Claims Hebrew ʿalmāh means “virgin”',
          'Appeals to LXX Greek parthenos as an infallible rendering',
          'Detaches v. 14 from Ahaz’s immediate sign in vv. 15–16'
        ]
      },
      right:{
        title:'Hebrew & LXX Evidence',
        items:[
          'ʿelem (1 Sam 20:22) = “youth”; Prov 30:19–20 rules out virgin',
          'bəṯūlāh (Judg 11:37; Lev 21:3) is the specific word for virgin',
          'LXX Gen 34:3 calls violated Dinah parthenos',
          'Isa 7:15–16 ties the child’s growth to Ahaz’s contemporary crisis'
        ]
      }
    }
  }
),{
  optWho:'Or press the “virgin” prophecy · if they say',
  optLabel:'Matthew 1:23 simply quotes the Greek Septuagint of Isaiah 7:14, where parthenos and Hebrew almah mean virgin!',
  theyWho:'Or press the “virgin” prophecy · if they say',
  who:'Expose almah vs. betulah & Gen 34:3'
}));

/* ============================================================================
   7. add('christianity/islam-vs/d-dr-isaiah-9', ...) — isa_9_6 (explainer!)
   ============================================================================ */
const I96=DR('#isa-9-6','1368597728476532747');
add('christianity/islam-vs/d-dr-isaiah-9',N(
  I96,
  'Isaiah 9:6 calls the promised child “Mighty God,” proving the Messiah would be God incarnate.',
  'Read in historical context (vv. 1–4) and Hebrew grammar, Isaiah 9:6 uses past-tense verbs for a contemporary royal heir (Hezekiah) delivering Judah from Assyrian oppression, gives a standard Hebrew theophoric name, disappears entirely in the Septuagint (“Messenger of great counsel”), and uses the same phrase ʾĒl Gibbōr applied in the plural to dead warriors in Ezekiel 32:21.',
  'Isaiah 9.6 refuted: context, Hebrew past tense, LXX & Ezekiel 32.21',
  [
    '01 · Immediate context (Isa 9.1–4) excludes Jesus: Verses 1–4 promise ending Galilee/Zebulun/Naphtali’s anguish by shattering the yoke and rod of foreign oppressors “as on the day of Midian.” Jesus never liberated Israel militarily from Rome or foreign occupiers.',
    '02 · Hebrew past-tense verbs & royal theophoric names: The Hebrew verbs yullad-lānū (“a child has been born to us”) and nittan-lānū (“a son has been given to us”) stand in the Hebrew perfect (past) tense, pointing to a royal heir in Isaiah’s era (such as Hezekiah). In Semitic culture, theophoric names describe God rather than the child—just as Jotham (“YHWH is perfect”), Ishmael (“God hears”), and Eli (1 Sam 3:1, “My God”) do not turn those men into God.',
    '03 · Septuagint lacks “Mighty God” completely: Brenton’s translation of the Greek Septuagint reads “and his name is called the Messenger of great counsel”—not “Mighty God.”',
    '04 · Ezekiel 32.21 refutes “Mighty God” as exclusive deity: The Hebrew phrase translated “Mighty God” in Isaiah 9:6 is אֵל גִּבּוֹר (ʾĒl Gibbōr). Its exact plural, אֵלֵי גִבּוֹרִים (ʾĒlē Gibbōrīm, “mighty chiefs”), describes slain uncircumcised warriors in Sheol in Ezekiel 32:21—proving the phrase does not denote the Most High God.'
  ],
  ['Isaiah 9:1–6','Ezekiel 32:21','1 Samuel 3:1','Septuagint (LXX) Isaiah 9:6'],
  [],
  {
    facts:[
      ['Isa 9:1–4','Breaking foreign yoke—never done by Jesus'],
      ['Hebrew Verbs','Perfect/past tense (yullad / nittan): Hezekiah'],
      ['Theophoric Names','Eli, Jotham, Ishmael describe God, not bearer'],
      ['Ezek 32:21 / LXX','Plural ʾĒlē Gibbōrīm = warriors; LXX omits “Mighty God”']
    ],
    quotes:[
      {by:'Isaiah 9:6 (Brenton LXX)',en:'…and his name is called the Messenger of great counsel: for I will bring peace upon the princes, and health to him.',ref:'Septuagint Isaiah 9:6'},
      {by:'Ezekiel 32:21',en:'The mighty chiefs [ʾēlē gibbōrīm] shall speak of them, with their helpers, out of the midst of Sheol…',ref:'Ezekiel 32:21'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Trinitarian Claim (Isa 9:6)',
        items:[
          'Reads “is born” as a distant future virgin-birth prophecy',
          'Treats “Mighty God” (ʾĒl Gibbōr) as ontological deity',
          'Ignores Israel’s military liberation in vv. 1–4'
        ]
      },
      right:{
        title:'Hebrew, LXX & Ezekiel 32:21',
        items:[
          'Past-tense verbs point to a contemporary king (Hezekiah)',
          'Theophoric names honor God, not the human child',
          'LXX reads “Messenger of great counsel,” not “Mighty God”',
          'Ezek 32:21 uses plural ʾĒlē Gibbōrīm for slain warriors'
        ]
      }
    }
  }
));

/* ============================================================================
   8. add('christianity/bible/additions', ...) — Branch 1: comma (1 John 5:7)
   ============================================================================ */
const COMMA=DR('#comma-1john57','1366712453412425768');
add('christianity/bible/additions',P(N(
  COMMA,
  'Even before the Comma Johanneum entered Greek manuscripts, the early Church Fathers already found the Trinity in 1 John 5:7.',
  'Actually, the patristic record proves the Comma Johanneum is a late fabrication. Codex Sinaiticus, Clement of Alexandria, the 3rd-century treatise On Re-Baptism, and Augustine (Contra Maximinum II.22.3) all quote only “the Spirit, the water, and the blood”—forcing Augustine into strained allegory because the Trinitarian verse did not yet exist in his Bible.',
  'Comma Johanneum (1 John 5.7) forgery: Sinaiticus, Fathers & Augustine',
  [
    '01 · Codex Sinaiticus & pre-15th-century Greek silence: Codex Sinaiticus (1 John 5:5–8) reads solely “the Spirit, and the water, and the blood, and the three are one.” Every Greek manuscript before the late medieval era lacks the Father, Word, and Holy Spirit interpolation, and Erasmus omitted it from his initial Greek editions until pressured.',
    '02 · Clement of Alexandria & On Re-Baptism quote the uncorrupted verse: Clement of Alexandria (150–215 CE, Miscellanies commentary on 1 John) and the 3rd-century Latin treatise On Re-Baptism (§19, ~258 CE, associated with Cyprian’s era) repeatedly cite “the Spirit, the water, and the blood” with zero mention of the Trinitarian Comma.',
    '03 · Augustine’s allegory proves the Comma was absent (Contra Maximinum II.22.3): Trying to extract the Trinity from 1 John 5:7–8, Augustine allegorizes Spirit = Father, blood = Son, and water = Holy Spirit. Had the explicit Trinitarian Comma existed in his Latin Bible, Augustine would never have invented that forced allegory.',
    '04 · Documented doctrinal tampering & scholarly admissions: As Daniel B. Wallace acknowledges, the Trinitarian formula did not enter the Greek New Testament until a millennium after Constantinople (381 CE)—meaning scribes inserted it afterward to legitimize church dogma. Historical sources likewise note Eusebius accusing Athanasius’s faction of textual falsification (cited in Fraternal Visitor 1924 on Codex Vaticanus’s 2,000+ alterations), Philostorgius recording Flavianus of Antioch introducing the Trinitarian doxology around 348 CE (Whiston 1719), and Bart Ehrman noting how early papyri exposed patristic textual instability.'
  ],
  ['Codex Sinaiticus (1 John 5:5–8)','Clement of Alexandria, Miscellanies','On Re-Baptism §19 (c. 258 CE)','Augustine, Contra Maximinum II.22.3','Daniel B. Wallace; Bart Ehrman; Whiston (1719)'],
  [],
  {
    facts:[
      ['Codex Sinaiticus','Reads Spirit, water & blood—zero Trinity'],
      ['Clement & Re-Baptism','2nd–3rd c. Fathers quote uncorrupted text'],
      ['Augustine','Forced allegory proves Comma didn’t exist'],
      ['Greek MSS','Zero Greek witnesses before late medieval era']
    ],
    quotes:[
      {by:'Augustine (Contra Maximinum II.22.3)',en:'Tres sunt testes; spiritus, et aqua, et sanguis; et tres unum sunt.',ref:'Contra Maximinum II.22.3 (1 John 5:7–8)'},
      {by:'On Re-Baptism §19 (3rd century)',en:'Three bear witness, the Spirit, and the water, and the blood; and these three are one.',ref:'On Re-Baptism §19'}
    ],
    shots:[
      S('dr-nt-comma-1john57-1.webp','DR #comma-1john57: Augustine’s Contra Maximinum II.22.3 quoting 1 John 5:7–8 without the Comma and allegorizing Spirit, blood, and water as the Trinity.'),
      S('dr-nt-comma-1john57-2.webp','DR #comma-1john57: 3rd-century treatise On Re-Baptism §19 quoting the uncorrupted 1 John 5:7–8 (“three bear witness, the Spirit, and the water, and the blood”).')
    ]
  }
),{
  optWho:'Or examine the Comma Johanneum · if they say',
  optLabel:'Even before the Comma Johanneum entered Greek manuscripts, the early Fathers already found the Trinity in 1 John 5:7!',
  theyWho:'Or examine the Comma Johanneum · if they say',
  who:'Show Sinaiticus, Clement, Re-Baptism & Augustine'
}));

/* ============================================================================
   9. add('christianity/bible/additions', ...) — Branch 2: mark_ending (Mark 16:9–20)
   ============================================================================ */
const MKEND=DR('#mark-ending','1366712716122918952');
add('christianity/bible/additions',P(N(
  MKEND,
  'Mark 16:9–20 is authentic resurrection scripture—scribes would never invent whole post-resurrection appearances and miraculous signs.',
  'Mainstream scholarship and even evangelical Bibles acknowledge Mark 16:9–20 is a later scribal fabrication: the earliest manuscripts (Sinaiticus and Vaticanus) end abruptly at 16:8 with zero resurrection appearances, and later scribes added vv. 9–20—including dangerous snake-handling and poison-drinking claims.',
  'Mark 16.9–20 longer ending: Sinaiticus, James Tabor & Bart Ehrman',
  [
    '01 · Earliest manuscripts end abruptly at Mark 16.8: As modern translations like the NIV on BibleGateway explicitly warn in footnotes, the earliest Greek manuscripts (Codex Sinaiticus and Codex Vaticanus) and other ancient witnesses omit Mark 16:9–20 entirely, leaving the women fleeing the empty tomb in fear and saying nothing to anyone (16:8).',
    '02 · No original post-resurrection appearances in Mark (James Tabor): Historian James Tabor emphasizes that the earliest Gospel originally ended without Jesus appearing to Mary Magdalene or the eleven apostles—later scribes grafted on vv. 9–20 to fabricate a harmonious ending.',
    '03 · Forged snake-handling & poison signs (Bart Ehrman, Misquoting Jesus): As Ehrman explains in Misquoting Jesus, a later copyist added vv. 17–18—promising believers will speak in tongues, handle venomous snakes, and drink deadly poison unharmed—spawning modern snake-handling sects from verses Mark never wrote.'
  ],
  ['Mark 16:8–20','Codex Sinaiticus & Codex Vaticanus','Bart D. Ehrman, Misquoting Jesus','Prof. James Tabor on Mark’s Abrupt Ending'],
  [],
  {
    facts:[
      ['Sinaiticus & Vaticanus','End at Mark 16:8; zero vv. 9–20'],
      ['NIV / BibleGateway','Explicitly footnotes absence in earliest MSS'],
      ['James Tabor','Earliest Gospel lacked resurrection appearances'],
      ['Mark 16:17–18','Added snake-handling & poison verses (Ehrman)']
    ],
    quotes:[
      {by:'BibleGateway / NIV Note (Mark 16:9)',en:'The earliest manuscripts and some other ancient witnesses do not have verses 9–20.',ref:'NIV Footnote on Mark 16:9'}
    ],
    shots:[
      S('dr-nt-mark-ending-1.webp','DR #mark-ending: Cover of Bart D. Ehrman’s Misquoting Jesus: The Story Behind Who Changed the Bible and Why.'),
      S('dr-nt-mark-ending-2.webp','DR #mark-ending: Excerpt from Bart D. Ehrman’s Misquoting Jesus detailing Mark 16:9–20 (snake handling & poison in vv. 17–18) as a later scribal addition.')
    ]
  }
),{
  optWho:'Or press Mark’s forged ending · if they say',
  optLabel:'Mark 16:9–20 is authentic resurrection scripture—scribes would never invent whole appearance stories and signs!',
  theyWho:'Or press Mark’s forged ending · if they say',
  who:'Show Sinaiticus, Tabor & Ehrman on Mark 16:9–20'
}));

/* ============================================================================
   10. add('christianity/bible/d-ia-general-refutations/t-jesus-does-not-know-the-hour', ...) — matt2436
   ============================================================================ */
const M2436=DR('#matt-24-36','1366712589798608968');
add('christianity/bible/d-ia-general-refutations/t-jesus-does-not-know-the-hour',P(N(
  M2436,
  'Many Greek manuscripts of Matthew 24:36 do not even contain the words “nor the Son”!',
  'That variant actually proves intentional scribal censorship: Mark 13:32 preserves “nor the Son,” whereas later copyists deleted “nor the Son” from Matthew 24:36 to protect Jesus’s supposed omniscience—an alteration early enough that Basil of Caesarea (Letter 236) fell for the censored text.',
  'Scribal deletion of “nor the Son” in Matthew 24.36 (NIV note & Basil)',
  [
    '01 · NIV footnote confirms the Matthew 24.36 manuscript variant: As shown in the NIV footnote on Matthew 24:36, numerous later manuscripts omit the phrase “nor the Son,” whereas the parallel verse in Mark 13:32 preserves “nor the Son, but only the Father” intact.',
    '02 · Theological tampering to shield Jesus’s omniscience: Just as scribes altered Matthew 19:17 (“Why do you call me good?”), orthodox copyists deleted “nor the Son” from Matthew 24:36 because Jesus denying knowledge of the Hour contradicted developing claims of his divine omniscience.',
    '03 · Basil the Great (Letter 236) reveals how early the corruption spread: By the 4th century, the omission was already widespread enough that Basil of Caesarea assumed in Letter 236 that Matthew originally lacked “nor the Son,” appealing to that altered text to neutralize Mark 13:32.'
  ],
  ['Matthew 24:36 (NIV footnote)','Mark 13:32','Basil of Caesarea, Letter 236'],
  [],
  {
    facts:[
      ['Matt 24:36 vs. Mark 13:32','Later MSS omit “nor the Son” in Matthew'],
      ['NIV Footnote [a]','Explicitly flags the omission variant'],
      ['Scribal Motive','Eliminated embarrassing ignorance of the Hour'],
      ['Basil (Letter 236)','4th-c. Father misled by altered Matthew']
    ],
    quotes:[
      {by:'Mark 13:32 (NIV)',en:'But about that day or hour no one knows, not even the angels in heaven, nor the Son, but only the Father.',ref:'Mark 13:32'}
    ],
    shots:[
      S('dr-nt-matt-24-36-1.webp','DR #matt-24-36: Matthew 24:36 (NIV) highlighting footnote [a] on manuscripts that omit “nor the Son.”'),
      S('dr-nt-matt-24-36-2.webp','DR #matt-24-36: Parallel verse Mark 13:32 (NIV) preserving “nor the Son, but only the Father” intact.')
    ]
  }
),{
  optWho:'Or expose scribal tampering · if they say',
  optLabel:'Many manuscripts of Matthew 24:36 do not even include the words nor the Son!',
  theyWho:'Or expose scribal tampering · if they say',
  who:'Expose the Matt 24:36 deletion & Basil Letter 236'
}));

/* ============================================================================
   11. add('christianity/jesus/d-dr-mark-10-18', ...) — father_good
   ============================================================================ */
const FGOOD=DR('#father-good','1366712655233945662');
add('christianity/jesus/d-dr-mark-10-18',P(N(
  FGOOD,
  'Matthew 19:17 reads “Why do you ask me about what is good?”—showing Jesus never rejected being called good.',
  'That reading in Matthew 19:17 is a textbook orthodox scribal alteration. Both Mark 10:18 and Luke 18:19 independently preserve “Why do you call me good?”, early Church Fathers routinely quote that exact wording even for Matthew, and later manuscripts of Matthew (followed by the KJV) still preserve “Why do you call me good?”—proving scribes rewrote Matthew to soften an anti-deity saying.',
  'Scribal alteration of Matthew 19.17 vs. Mark 10.18 & Luke 18.19',
  [
    '01 · Mark 10.18 and Luke 18.19 stand as twin witnesses against Matthew 19.17: Both Mark and Luke agree that Jesus answered, “Why do you call me good? No one is good—except God alone,” leaving critical-text Matthew 19:17 (“Why do you ask me about what is good?”) as the lone outlier.',
    '02 · Early Church Fathers & Matthew manuscripts preserve the original question: Multiple early Fathers quote “Why do you call me good?” rather than Matthew’s altered wording, and a stream of Greek manuscripts of Matthew—followed by the King James Version (KJV)—still retains “Why do you call me good?”',
    '03 · Theological motive for the scribal change: Scribes found Jesus deflecting “good” to God alone doctrinally troubling, so they changed the question in Matthew 19:17 to “what is good” so it could no longer be read as Jesus denying his own divine goodness.'
  ],
  ['Matthew 19:17 (NIV vs. KJV)','Mark 10:18','Luke 18:19'],
  [],
  {
    facts:[
      ['Mark 10:18 & Luke 18:19','Both read “Why do you call me good?”'],
      ['Matt 19:17 (Critical)','Altered to “Why do you ask me about what is good?”'],
      ['KJV & Patristics','Many Matt MSS & early Fathers retain original'],
      ['Scribal Motive','Neutralize Jesus distinguishing himself from God']
    ],
    quotes:[
      {by:'Matthew 19:17 (NIV)',en:'Why do you ask me about what is good? Jesus replied. There is only One who is good.',ref:'Matthew 19:17'},
      {by:'Mark 10:18 (NIV)',en:'Why do you call me good? Jesus answered. No one is good—except God alone.',ref:'Mark 10:18'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Altered Matthew 19:17',
        items:[
          '“Why do you ask me about what is good?”',
          'Outlier against both Mark 10:18 and Luke 18:19',
          'Removes Jesus’s personal contrast with “God alone”'
        ]
      },
      right:{
        title:'Original Synoptic Reading',
        items:[
          '“Why do you call me good? No one is good—except God alone.”',
          'Confirmed by Mark 10:18, Luke 18:19, early Fathers & KJV MSS',
          'Preserves earliest tradition that the Father alone is good'
        ]
      }
    },
    shots:[
      S('dr-nt-father-good-1.webp','DR #father-good: Matthew 19:17 (NIV) highlighting the altered reading “Why do you ask me about what is good?”'),
      S('dr-nt-father-good-2.webp','DR #father-good: Mark 10:18 (NIV) preserving the original reading “Why do you call me good? … No one is good—except God alone.”')
    ]
  }
),{
  optWho:'Or compare Matthew 19:17 · if they say',
  optLabel:'Matthew 19:17 says Why do you ask me about what is good—Jesus never rejected being called good!',
  theyWho:'Or compare Matthew 19:17 · if they say',
  who:'Show scribes altered Matt 19:17 from Mark/Luke'
}));

})();
