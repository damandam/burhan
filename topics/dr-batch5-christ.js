/* Deenresponds Batch 5B Christology, Prophecy & Biblical Contradictions — 2026-11-22.
   Integrates 11 Deenresponds channels (server 1328402309297733662) across
   8 new Tactical Debate Playbook cards and 2 add() debate-tree enrichments,
   referencing all 16 shots/dr5-*.webp scans. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('dr-batch5-christ: no card',key); };

const DR=(sub,id)=>({credit:'Deenresponds · '+sub,link:'https://discord.com/channels/1328402309297733662/'+id});
const S=(src,cap)=>({src:'shots/'+src,cap});

/* ============================================================================
   1. NEW Tactical Playbook card: christianity/bible/gospel-of-thomas-canon
   ============================================================================ */
const GT=DR('#gospel-of-thomas','1410940520204861561');

const gtTrapA=P(N(
  GT,
  'Gospel of Thomas Saying 17 simply copied Paul’s line in 1 Corinthians 2:9 long after the New Testament was finished.',
  'New Testament scholarship rejects simple copying from Paul or the Synoptics. Otto Piper argues Saying 17 came from an early collection of Jesus’s sayings known to Paul, and Helmut Koester traces a shared pre-canonical source behind Paul, Thomas, Q, and Dialogue of the Savior—giving Thomas an independent early root.',
  'Otto Piper & Helmut Koester on Saying 17’s early independent source',
  [
    '01 · Shared wording across four early streams: Saying 17 parallels 1 Corinthians 2.9, Q (Luke 10.23–24 // Matthew 13.16–17), and Dialogue of the Savior 140.1–4, yet differs in phrasing and attributes the promise directly to Jesus.',
    '02 · Otto Piper’s pre-Pauline collection thesis: Rather than Thomas borrowing from 1 Corinthians, Piper proposes Saying 17 entered Thomas from an early sayings collection already circulating in Paul’s day.',
    '03 · Helmut Koester’s independent derivation: Koester argues a common early source underlies Paul, Q, Thomas, and Dialogue of the Savior—confirming Thomas preserves early Christian material independent of the Synoptic Gospels.'
  ],
  ['Gospel of Thomas 17','1 Corinthians 2:9','Luke 10:23–24 // Matthew 13:16–17 (Q)','Dialogue of the Savior 140.1–4','Otto Piper & Helmut Koester'],
  [],
  {
    facts:[
      ['Saying 17','Parallels 1 Cor 2:9 & Q (Luke 10:23–24)'],
      ['Otto Piper','Early Jesus-sayings collection known to Paul'],
      ['Helmut Koester','Shared source behind Paul, Thomas, Q & Dial. Sav.'],
      ['Synoptic Independence','Early Christian stream outside Matthew–Luke']
    ],
    quotes:[
      {by:'Gospel of Thomas, Saying 17',en:'What no eye has seen, what no ear has heard, what no hand has touched, what has not arisen in the human heart.',ref:'Thom 17'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Thomas 17 is a late Gnostic imitation that simply borrowed Paul’s words from 1 Corinthians 2:9!',
  theyWho:'Watch out · if they say',
  who:'Cite Piper & Koester on shared pre-Synoptic source'
});

const gtTrapB=P(N(
  GT,
  'The commentary itself admits Saying 17 was widespread in antiquity and doubts Jesus actually spoke it—so Thomas isn’t Scripture.',
  'That concession cuts both ways against the four-Gospel canon. If early Christian communities attributed widespread maxims to Jesus inside the exact sayings pool shared by Paul and Q (Matthew/Luke’s core source), then canonical Gospels rest on the same unverified oral stream Christians dismiss in Thomas.',
  'How unverified sayings-pools indict the canonical baseline too',
  [
    '01 · Same attribution process in Q and Thomas: The commentary notes Saying 17 was widespread in antiquity, yet parallels Luke 10.23–24 and Matthew 13.16–17 (Q)—showing early attribution happened across both canonical and non-canonical strata.',
    '02 · No objective apostolic filter at the base: Because Thomas drew from an early Christian stream alongside Q and Paul, excluding Thomas while treating Q-embedded Gospels as infallible rests on later church selection, not distinct historical custody.',
    '03 · Canon boundary is ecclesiastical, not textual: Recognizing Thomas’s Synoptic-independent parallels exposes how fluidly Jesus sayings circulated before fourth-century conciliar canon lists fixed four Gospels.'
  ],
  ['Gospel of Thomas 17','Luke 10:23–24 // Matthew 13:16–17','1 Corinthians 2:9'],
  [],
  {
    facts:[
      ['Widespread Maxim','Circulated in antiquity before attribution'],
      ['Q Overlap','Links Thom 17 with Luke 10 & Matt 13'],
      ['Canon Dilemma','Shared oral stream ≠ clean canonical wall'],
      ['Scholarly Verdict','Independent early Christian derivation']
    ],
    quotes:[
      {by:'1 Corinthians 2:9 (Paul)',en:'What no eye has seen, what no ear has heard, and what no human mind has conceived.',ref:'1 Corinthians 2:9'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Scholarship doubts Saying 17 goes back to Jesus, which proves the church rightly excluded Thomas from the canon!',
  theyWho:'Watch out · if they say',
  who:'Turn the shared sayings-pool back onto Q'
});

card('christianity/bible/gospel-of-thomas-canon',{
  title:'Gospel of Thomas & the Canon: Independent Sayings Tradition',
  k:'Canon · Early Jesus traditions',
  blurb:'Thomas Saying 17, 1 Corinthians 2:9, Q (Luke 10:23–24 // Matt 13:16–17), Otto Piper, and Helmut Koester on pre-Synoptic sources.',
  claim:'The Gospel of Thomas is a late, derivative forgery dependent on the four canonical Gospels, so its exclusion raises no issue for the New Testament canon.',
  tree:P(N(
    GT,
    'The Gospel of Thomas is just a late Gnostic imitation copied from the four canonical Gospels and Paul.',
    'Critical scholarship on Saying 17 (“What no eye has seen…”) refutes the claim that Thomas is merely a late Synoptic rip-off. Although the maxim circulated widely in antiquity, its parallels with Q (Luke 10:23–24 // Matthew 13:16–17), 1 Corinthians 2:9, and Dialogue of the Savior (140.1–4) led Otto Piper and Helmut Koester to posit an early shared sayings source—showing an early Christian derivation for Thomas independent of the Synoptic Gospels.',
    'Gospel of Thomas 17, Paul, Q & Synoptic independence',
    [
      '01 · Saying 17’s pre-Synoptic footprint: Thomas 17 promises what no eye has seen, no ear heard, no hand touched, and what has not arisen in the human heart—matching motifs in 1 Corinthians 2.9 and Q (Luke 10.23–24 // Matt 13.16–17).',
      '02 · Otto Piper on early sayings shared with Paul: Piper proposes that Saying 17 entered Thomas from an early Jesus-sayings collection also known to Paul, decades before the canonical Gospels reached final form.',
      '03 · Helmut Koester’s four-way shared source: Koester argues a common early source underlies Paul, the Gospel of Thomas, Q, and Dialogue of the Savior (140.1–4), rather than Thomas borrowing from Matthew or Luke.',
      '04 · Collapse of the neat canon narrative: Along with other Synoptic “cousins,” Thomas’s independent early derivation proves diverse Jesus-sayings streams existed outside the four-Gospel fence—undercutting claims that the canon preserves a uniquely pure, closed tradition.'
    ],
    ['Gospel of Thomas 17','1 Corinthians 2:9','Luke 10:23–24 // Matthew 13:16–17 (Q)','Dialogue of the Savior 140.1–4','Otto Piper & Helmut Koester'],
    [gtTrapA,gtTrapB],
    {
      facts:[
        ['Thom 17','Parallels 1 Cor 2:9 & Q (Matt 13 / Luke 10)'],
        ['Otto Piper','Early collection shared by Thomas & Paul'],
        ['Helmut Koester','Common source behind Paul, Thomas, Q & Dial. Sav.'],
        ['Implication','Independent early Christian root outside Synoptics']
      ],
      quotes:[
        {by:'Gospel of Thomas, Saying 17',en:'What no eye has seen, what no ear has heard, what no hand has touched, what has not arisen in the human heart.',ref:'Thom 17'},
        {by:'1 Corinthians 2:9',en:'What no eye has seen, what no ear has heard, and what no human mind has conceived.',ref:'1 Corinthians 2:9'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Apologetic Dismissal',
          items:[
            'Labels Thomas a late, purely derivative forgery',
            'Assumes all early sayings flowed only into the 4 Gospels',
            'Treats the canon boundary as self-evident from day one'
          ]
        },
        right:{
          title:'Textual Scholarship (Thom 17)',
          items:[
            'Shares early source with Paul, Q & Dialogue of the Savior',
            'Piper & Koester trace an early pre-Synoptic sayings pool',
            'Exposes overlapping, unverified attribution behind Q & Thomas'
          ]
        }
      },
      shots:[
        S('dr5-gthomas-1.webp','DR #gospel-of-thomas: scholarly commentary on Gospel of Thomas Saying 17 comparing 1 Cor 2:9, Q (Luke 10:23–24 // Matt 13:16–17), Otto Piper, and Helmut Koester.'),
        S('dr5-gthomas-2.webp','DR #gospel-of-thomas: closeup scan of the Saying 17 analysis on early Christian derivation independent of the Synoptic Gospels.')
      ]
    }
  ),{
    who:'Show pre-Synoptic independence',
    forkTitle:'Two ways apologists dismiss Thomas',
    forkSub:'Counter the “copied from Paul” claim or the authenticity objection'
  }),
  sum:'Critical analysis of Gospel of Thomas Saying 17 (Otto Piper; Helmut Koester) shows an early sayings source shared with Paul, Q, and Dialogue of the Savior—demonstrating an independent early Christian stream that challenges rigid canonical boundaries.'
});

/* ============================================================================
   2. NEW Tactical Playbook card: christianity/islam-vs/galatians-1-8-angel-from-heaven
   ============================================================================ */
const FP=DR('#false-prophecies','1368285913700110529');

const fpTrapA=P(N(
  FP,
  'Even if Paul was addressing Galatian teachers, “or an angel from heaven” is a universal rule that still covers Gabriel in 610 CE.',
  'Galatians 1:6–9 refutes that twice: Paul is warning first-century Galatians about rival preachers already unsettling their churches (“turning to a different gospel”), using rhetorical exaggeration (“even if we…”)—not prophesying 600 years ahead. Worse, Paul’s own “gospel” differed from the law-keeping message of Jesus and the Jerusalem disciples.',
  'Immediate 1st-century crisis in Galatia (Galatians 1.6–9)',
  [
    '01 · Present-tense crisis in Galatia (Gal 1.6–7): Paul writes “you are so quickly deserting” and “some people are throwing you into confusion.” His curse targets contemporary rivals already active in Galatia, not a seventh-century prophet in Arabia.',
    '02 · Rhetorical hyperbole, not future prediction: Saying “even if we or an angel from heaven” is a hypothetical stress test to protect Paul’s own message from immediate challengers, not a prophetic forecast of Gabriel.',
    '03 · Circular standard begs the question: Assuming Paul’s Torah-abrogating gospel is the fixed standard against which Gabriel must be judged presupposes Paul is infallible—the very point in dispute.'
  ],
  ['Galatians 1:6–9'],
  [],
  {
    facts:[
      ['Gal 1:6–7','“Some people are throwing you into confusion”'],
      ['Genre','1st-century polemical letter, not prophecy'],
      ['Rhetoric','Hypothetical “even if we or an angel…”'],
      ['Circularity','Assumes Paul’s gospel over Jesus’s Torah message']
    ],
    quotes:[
      {by:'Galatians 1:6–7 (NIV)',en:'I am astonished that you are so quickly deserting the one who called you… and are turning to a different gospel.',ref:'Galatians 1:6–7'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Paul stated an all-time rule—so any later message brought by an angel, including Gabriel to Muḥammad, is accursed!',
  theyWho:'Watch out · if they say',
  who:'Lock Paul into Galatia’s 1st-c. crisis'
});

const fpTrapB=P(N(
  FP,
  'Paul wasn’t claiming to be a prophet with failed predictions—he only expected Jesus might return soon.',
  'By the Bible’s own prophetic standard (Deuteronomy 18:21–22), anyone proclaiming a word in the Lord’s name that fails to come true speaks presumptuously. In 1 Corinthians 7:29–31 and 1 Thessalonians 4:15–17, Paul explicitly instructs believers to detach from marriage and worldly life because “the time is short” and “we who are still alive” will witness Jesus’s return—an imminent end that never occurred.',
  'Paul’s failed imminent-return predictions (1 Cor 7 & 1 Thess 4)',
  [
    '01 · Torah’s unfailing-prophecy rule (Deut 18.21–22): Deuteronomy defines a false or presumptuous message simply: if what is proclaimed in the LORD’s name does not happen or come true, the LORD has not spoken it.',
    '02 · 1 Corinthians 7.29–31 urges world-renunciation: Paul declares “the time is short” and tells married believers to live as if not married and buyers as if owning nothing because “this world in its present form is passing away.”',
    '03 · 1 Thessalonians 4.15–17 includes Paul’s own generation: Paul states explicitly that “we who are still alive, who are left until the coming of the Lord” will be caught up at Christ’s return—confirming he expected the Parousia in his lifetime, which failed.'
  ],
  ['Deuteronomy 18:21–22','1 Corinthians 7:29–31','1 Thessalonians 4:15–17'],
  [],
  {
    facts:[
      ['Deut 18:22','Unfulfilled prediction = presumptuous speaker'],
      ['1 Cor 7:29–31','“The time is short”; live without worldly ties'],
      ['1 Thess 4:15','“We who are still alive… until the coming”'],
      ['Outcome','Jesus did not return in Paul’s lifetime']
    ],
    quotes:[
      {by:'1 Corinthians 7:29, 31 (NIV)',en:'What I mean, brothers and sisters, is that the time is short… For this world in its present form is passing away.',ref:'1 Corinthians 7:29, 31'},
      {by:'1 Thessalonians 4:15 (NIV)',en:'According to the Lord’s word, we tell you that we who are still alive, who are left until the coming of the Lord…',ref:'1 Thessalonians 4:15'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Paul was not issuing a failed end-times prophecy—he never tied Jesus’s return to his own lifetime!',
  theyWho:'Watch out · if they say',
  who:'Apply Deut 18:22 to 1 Cor 7 & 1 Thess 4'
});

card('christianity/islam-vs/galatians-1-8-angel-from-heaven',{
  title:'Galatians 1:8: “Or an Angel from Heaven” vs. Muḥammad ﷺ',
  k:'Paul · Context & false-prophet test',
  blurb:'Immediate 1st-century Galatian crisis (1:6–9), no 600-year prophecy, and Paul’s own failed imminent-return claim (1 Cor 7:29–31; 1 Thess 4:15; Deut 18:22).',
  claim:'In Galatians 1:8 (“even if we or an angel from heaven should preach a gospel other than the one we preached”), Paul warned Christians against Muḥammad ﷺ receiving the Qurʾān from Gabriel.',
  tree:P(N(
    FP,
    'Galatians 1:8 warns that even if an angel from heaven preaches another gospel, let him be cursed—a direct warning against Muḥammad and Gabriel.',
    'Applying Galatians 1:8 to the Prophet Muḥammad ﷺ fails on both context and credibility. Contextually (vv. 6–9), Paul is rebuking first-century Galatians for deserting his preaching amid rival teachers already confusing them—not prophesying events 600 years later. Moreover, under the Bible’s own false-prophet test (Deuteronomy 18:21–22), Paul himself stands disqualified because he taught believers to abandon worldly life for an imminent return of Jesus within his own generation (1 Corinthians 7:29–31; 1 Thessalonians 4:15–17) that never happened.',
    'Galatians 1.6–9 context & Paul’s failed Parousia test',
    [
      '01 · Immediate 1st-century audience (Gal 1.6–9): Paul addresses churches in Galatia already turning to rival teachers who “are throwing you into confusion.” It is local polemic during the spread of competing early gospels, not a prophecy about Arabia 600 years later.',
      '02 · Hyperbolic self-protection, not prophetic discernment: Including “even if we” alongside “or an angel from heaven” is rhetorical exaggeration to lock Galatians onto Paul’s version of the message.',
      '03 · Biblical standard for false prophecy (Deut 18.21–22): Scripture judges speakers by whether their declarations in the LORD’s name actually come to pass.',
      '04 · Paul’s failed imminent-end predictions (1 Cor 7.29–31 & 1 Thess 4.15–17): Paul instructs believers to live detached from marriage and possessions because “the time is short” and assures them “we who are still alive” will witness Jesus’s return—failing the biblical test when that generation passed without Christ’s return.'
    ],
    ['Galatians 1:6–9','Deuteronomy 18:21–22','1 Corinthians 7:29–31','1 Thessalonians 4:15–17'],
    [fpTrapA,fpTrapB],
    {
      facts:[
        ['Gal 1:6–7','Addresses immediate 1st-century Galatian rivals'],
        ['600-Year Gap','Zero prophetic reference to Arabia or Gabriel'],
        ['1 Cor 7:29–31','Urges world-detachment because “time is short”'],
        ['1 Thess 4:15','Expected “we who are still alive” to see return']
      ],
      quotes:[
        {by:'Galatians 1:8 (NIV)',en:'Even if we or an angel from heaven should preach a gospel other than the one we preached… let them be under God’s curse!',ref:'Galatians 1:8'},
        {by:'Deuteronomy 18:22 (NIV)',en:'If what a prophet proclaims… does not take place or come true, that is a message the LORD has not spoken.',ref:'Deuteronomy 18:22'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Apologetic Proof-Text',
          items:[
            'Rips Gal 1:8 out of vv. 6–7’s local Galatian controversy',
            'Treats rhetorical hyperbole as a 600-year prophecy',
            'Ignores Paul’s own failed end-times timetable'
          ]
        },
        right:{
          title:'Context & Torah Test',
          items:[
            'Gal 1:6–9 targets 1st-century rivals confusing Galatia',
            '1 Cor 7:29–31 & 1 Thess 4:15 expect Christ’s return in Paul’s day',
            'Fails Deut 18:22’s unfulfilled-prediction standard'
          ]
        }
      },
      shots:[
        S('dr5-false-proph-1.webp','DR #false-prophecies: Galatians 1:8 (NIV) highlighting “or an angel from heaven” isolated by apologists.'),
        S('dr5-false-proph-2.webp','DR #false-prophecies: Galatians 1:6–9 (NIV) showing Paul’s immediate 1st-century rebuke to Galatians already turning to a different gospel.')
      ]
    }
  ),{
    who:'Expose Galatian context & Paul’s test',
    forkTitle:'Two follow-ups on Galatians 1:8',
    forkSub:'Refute the timeless-curse reading or defend the Deut 18:22 critique of Paul'
  }),
  sum:'Galatians 1:8 is local first-century polemic against rival teachers in Galatia (vv. 6–9), not a 600-year prophecy against Gabriel—and Paul himself fails Deuteronomy 18:22’s test via his unfulfilled imminent-return claims in 1 Corinthians 7:29–31 and 1 Thessalonians 4:15.'
});

/* ============================================================================
   3. NEW Tactical Playbook card: christianity/trinity/isaiah-63-holy-spirit
   ============================================================================ */
const I63=DR('#isaiah-63','1368282817225560075');

const i63TrapA=P(N(
  I63,
  'Isaiah 63:9 says the angel of His presence saved and redeemed Israel—only God can save, so that angel must be a divine Person.',
  'Saving through an appointed envoy proves delegated agency, not shared deity. Hebrew malʾakh simply means “messenger” and applies to human prophets like Haggai (Haggai 1:13)—which is why Isaiah 63:9 plausibly refers either to Moses or to the angel Michael (as Ibn Ezra and Rashi explain).',
  'Malʾakh (“messenger”) in Haggai 1.13, Moses & Michael (Ibn Ezra, Rashi)',
  [
    '01 · Agency is not divinity: Acting as God’s instrument of deliverance does not make the messenger ontologically God—otherwise every judge and prophet who saved Israel would be divine.',
    '02 · Malʾakh means messenger, including human prophets (Haggai 1.13): The Hebrew term malʾakh designates a commissioned envoy; Haggai 1:13 explicitly calls the human prophet Haggai “the messenger [malʾakh] of the LORD.”',
    '03 · Moses or Michael fits the context (Ibn Ezra & Rashi): Isaiah 63:9–11 recalls the Exodus generation led by Moses, while classic rabbinic commentators Ibn Ezra and Rashi identify the angel of His presence as Archangel Michael—neither reading requires a pre-incarnate Trinity.'
  ],
  ['Isaiah 63:9–11','Haggai 1:13','Ibn Ezra & Rashi on Isa 63:9'],
  [],
  {
    facts:[
      ['Hebrew malʾakh','Means “messenger,” applied to Haggai (1:13)'],
      ['Two Readings','Moses (Exodus leader) or Michael (Ibn Ezra, Rashi)'],
      ['Agency Rule','Delivering by God’s commission ≠ deity']
    ],
    quotes:[
      {by:'Haggai 1:13 (NASB)',en:'Then Haggai, the messenger of the LORD, spoke by the commission of the LORD to the people.',ref:'Haggai 1:13'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Isaiah 63:9 says the angel of His presence saved and redeemed Israel—so that angel must be God!',
  theyWho:'Watch out · if they say',
  who:'Show malʾakh = messenger (Haggai 1:13)'
});

const i63TrapB=P(N(
  I63,
  'Isaiah 63:10 says they grieved His Holy Spirit, and v. 14 says the Spirit gave them rest like God in Exodus 33:14—proving the Spirit is a divine Person!',
  'Isaiah routinely uses poetic personification for non-personal things: in Isaiah 55:12, mountains sing and trees clap their hands without becoming persons. And turning Isaiah 63:14’s “the Spirit of the LORD gave them rest” into a distinct co-equal Person backfires via Isaiah 66:2, where God’s “hand” made all things—which by the same logic would create a fourth divine Person and a Quadrinity.',
  'Isaiah 55.12 personification & the Isaiah 66.2 “Quadrinity” reductio',
  [
    '01 · Poetic personification in Isaiah 55.12: Just seven chapters earlier, Isaiah writes that mountains and hills break into singing and trees of the field clap their hands. Saying Israel “grieved His Holy Spirit” poetically conveys that their rebellion offended God’s presence and will.',
    '02 · Spirit as God’s active power (Isa 63.14 vs. Exod 33.14): God gives Israel rest through His Spirit—His active power—not alongside another co-equal Godhead member.',
    '03 · The Quadrinity reductio (Isa 66.2 vs. Gen 1.1): Genesis 1:1 says God created heaven and earth, while Isaiah 66:2 says “All these things my hand has made.” If matching Exodus 33:14 with Isaiah 63:14 turns the Spirit into a distinct divine Person, matching Genesis 1:1 with Isaiah 66:2 turns God’s hand into a fourth Person—proving the exegetical method is broken.'
  ],
  ['Isaiah 55:12; 63:10, 14; 66:2','Exodus 33:14','Genesis 1:1'],
  [],
  {
    facts:[
      ['Isa 55:12','Mountains sing & trees clap (poetic imagery)'],
      ['Isa 63:10','“Grieved” = poetic expression of offending God'],
      ['Isa 66:2','“My hand has made all these things”'],
      ['Quadrinity Trap','Same logic makes God’s hand a 4th Person']
    ],
    quotes:[
      {by:'Isaiah 55:12 (ESV)',en:'The mountains and the hills before you shall break forth into singing, and all the trees of the field shall clap their hands.',ref:'Isaiah 55:12'},
      {by:'Isaiah 66:2 (ESV)',en:'All these things my hand has made, and so all these things came to be, declares the LORD.',ref:'Isaiah 66:2'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Only a person can feel grief (v. 10), and the Spirit gives rest like YHWH in Exodus 33:14 (v. 14)—so the Spirit is a divine Person!',
  theyWho:'Watch out · if they say',
  who:'Spring Isa 55:12 & the Quadrinity trap'
});

card('christianity/trinity/isaiah-63-holy-spirit',{
  title:'Isaiah 63:7–14: Angel of His Presence & Holy Spirit in the Trinity?',
  k:'Old Testament · Trinitarian proof-texts',
  blurb:'Ambiguity vs. Nicene co-equality, Isaiah’s strict monotheism (44:24; 45:5; 46:9), malʾakh in Haggai 1:13, Isa 55:12 personification, and the Isa 66:2 “Quadrinity” collapse.',
  claim:'Isaiah 63:9–14 reveals the Trinity—God, the Angel of His presence (the Son), and the grieved Holy Spirit who gives rest like YHWH.',
  tree:P(N(
    I63,
    'Isaiah 63:9–14 names God, the saving Angel of His presence, and the grieved Spirit who gives rest—revealing all three Persons of the Trinity.',
    'Isaiah 63 neither teaches Nicene co-equality nor mentions co-eternality—modalists, Arians, and subordinationists could claim the verse just as easily. Ambiguous poetry must be read through Isaiah’s explicit unitarian creed (“I am the LORD… who alone stretched out the heavens… besides me there is no God,” Isa 44:24; 45:5; 46:9): the “messenger” (malʾakh) is Moses or Michael (Ibn Ezra, Rashi; cf. Haggai 1:13), “grieving” the Spirit matches Isaiah 55:12’s poetic personification, and reading v. 14 as a distinct Person creates a fourth “hand” Person in Isaiah 66:2.',
    'Isaiah’s unitarian rule, malʾakh & the Quadrinity trap',
    [
      '01 · Ambiguity proves zero Nicene theology: Even granting three terms in Isaiah 63.7–14, the text states nothing about shared essence, co-equality, or co-eternality, making it equally usable by Arians, modalists, or partialists.',
      '02 · Isaiah’s explicit unitarian bedrock (Isa 44.24; 45.5; 46.9): Ambiguous lines must be governed by Isaiah’s clearest declarations—God acted “alone… by myself,” “besides me there is no God,” and “there is none like me.”',
      '03 · Angel of His presence as Moses or Michael (Isa 63.9 & Hag 1.13): Malʾakh means messenger (applied to Prophet Haggai in Hag 1:13), fitting Moses or Archangel Michael (Ibn Ezra, Rashi) acting as God’s agent rather than a divine Person.',
      '04 · Poetic personification & Quadrinity reductio (Isa 55.12 & 66.2): Isaiah gives singing and clapping to mountains and trees (55:12), so “grieving His Spirit” (63:10) is poetic idiom for offending God. Likewise, turning v. 14 (“the Spirit… gave them rest”) into a distinct Person forces turning Isaiah 66:2 (“my hand has made”) into a fourth Person.'
    ],
    ['Isaiah 44:24; 45:5; 46:9; 55:12; 63:7–14; 66:2','Exodus 33:14','Haggai 1:13','Genesis 1:1','Ibn Ezra & Rashi on Isa 63:9'],
    [i63TrapA,i63TrapB],
    {
      facts:[
        ['Isa 44:24 / 45:5','YHWH alone created; “besides me no God”'],
        ['Haggai 1:13','Human prophet called malʾakh (“messenger”)'],
        ['Isa 55:12','Mountains sing & trees clap (personification)'],
        ['Isa 66:2','“My hand has made” → Quadrinity reductio']
      ],
      quotes:[
        {by:'Isaiah 44:24 (ESV)',en:'I am the LORD, who made all things, who alone stretched out the heavens, who spread out the earth by myself.',ref:'Isaiah 44:24'},
        {by:'Isaiah 45:5 (ESV)',en:'I am the LORD, and there is no other, besides me there is no God.',ref:'Isaiah 45:5'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Trinitarian Reading of Isa 63',
          items:[
            'Presupposes Nicene co-equality without textual support',
            'Forces malʾakh (v. 9) to mean pre-incarnate God the Son',
            'Treats poetic “grief” (v. 10) as proof of a distinct Person',
            'Reads v. 14 + Exod 33:14 in a way that deifies God’s hand (66:2)'
          ]
        },
        right:{
          title:'Isaiah’s Own Context & Grammar',
          items:[
            'Isa 44:24, 45:5 & 46:9 affirm strict unitarian monotheism',
            'Malʾakh denotes Moses or Michael as agent (cf. Hag 1:13)',
            'Isa 55:12 uses bold personification for mountains & trees',
            'Spirit = God’s power giving rest, just as “hand” = power (66:2)'
          ]
        }
      }
    }
  ),{
    who:'Anchor Isa 63 in Isa 44–46 & 66:2',
    forkTitle:'Two ways Trinitarians press Isaiah 63',
    forkSub:'Counter the saving “angel of His presence” or the “grieved Spirit / rest” claim'
  }),
  sum:'Isaiah 63:7–14 does not teach Nicene Trinitarianism: Isaiah’s explicit monotheism (44:24; 45:5; 46:9) rules out co-equal persons, malʾakh denotes an envoy like Moses or Michael (cf. Haggai 1:13), Spirit-grief matches Isaiah 55:12’s poetic imagery, and the v. 14 argument absurdly makes God’s “hand” a fourth person in Isaiah 66:2.'
});

/* ============================================================================
   4. NEW Tactical Playbook card: christianity/jesus/proof-texts/zechariah-12-10-pierced
   ============================================================================ */
const Z12=DR('#zachariah-12-10','1368597083690373231');

const z12TrapA=P(N(
  Z12,
  'The Hebrew literally says “they will look on Me [YHWH] whom they pierced”—proving God Himself was pierced on the cross!',
  'Reading the interlinear carefully destroys both Trinitarian options. First, the verse switches pronouns mid-sentence from “Me” (ʾēlay) to “mourn for HIM” (ʿālāw)—which breaks down whether the Father or the Son is speaking. Second, the rare Hebrew phrase ʾēt ʾăšer means “concerning whom” (cf. Ezekiel 36:27), and even the Septuagint rejects “Me whom they pierced”—so the text means “look unto Me concerning whom they pierced, and mourn for him.”',
  'Hebrew ʾēlay / ʿālāw pronoun clash & ʾēt ʾăšer syntax',
  [
    '01 · Father-speaking horn fails: If God the Father says “they will look on Me whom they pierced,” Christians deny the Father was ever crucified or pierced.',
    '02 · Son-speaking horn fails via pronoun shift: Even if Christians read “Me” as Jesus, the very next clause shifts abruptly to third person—“and they will mourn for HIM [ʿālāw]”—which makes no sense if the speaker is describing his own piercing.',
    '03 · Rare Hebrew syntax of ʾēt ʾăšer (cf. Ezek 36.27 & LXX): The construction ʾēt ʾăšer means “concerning whom” or “respecting that” (as in Ezekiel 36:27), and the Septuagint likewise rejects “Me whom they pierced.” God is looked to for aid while enemies pierce a third figure—collective Israel or a slain righteous leader.'
  ],
  ['Zechariah 12:10 (Hebrew interlinear & LXX)','Ezekiel 36:27','John 19:37'],
  [],
  {
    facts:[
      ['Pronoun Clash','“Look on Me” (ʾēlay) → “mourn for Him” (ʿālāw)'],
      ['ʾēt ʾăšer','Means “concerning whom” (cf. Ezek 36:27)'],
      ['Septuagint (LXX)','Does not translate “Me whom they pierced”'],
      ['John 19:37','Rewrites first-person “Me” to third-person']
    ],
    quotes:[
      {by:'Corrected Hebrew Sense (Zech 12:10)',en:'They will look unto Me concerning whom they have pierced, and they will mourn for him.',ref:'Zechariah 12:10'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The Hebrew interlinear clearly says look on Me whom they pierced—so YHWH Himself is the one pierced!',
  theyWho:'Watch out · if they say',
  who:'Expose Me/Him clash & ʾēt ʾăšer'
});

const z12TrapB=P(N(
  Z12,
  'Even if the wording shifted in John 19:37, the surrounding events and Passover imagery still point to Jesus’s crucifixion.',
  'Neither the apocalyptic timeline of Zechariah 12 nor Passover typology fits the crucifixion. Zechariah 12 depicts all nations besieging Jerusalem, God annihilating enemy armies, national Jewish repentance, and resumed Temple sacrifices (Ezekiel 43:18–27)—clashing with Hebrews 10:12–14. Meanwhile, Exodus 12’s Passover lamb was a historical deliverance sign, not a sin offering, and Jesus lacked the unblemished Temple-priest sacrifice requirements.',
  'Unfulfilled apocalyptic siege, resumed sacrifices & Passover mismatch',
  [
    '01 · Unfulfilled Zechariah 12 timeline (vv. 2–10): All nations did not besiege Jerusalem in 30 CE, God did not destroy invading armies (v. 9), the weakest Jew did not become like David (v. 8), and Israel did not undergo national repentance (v. 10).',
    '02 · Righteous leader slain & resumed sacrifices (Zech 12.11; Ezek 43.18–27): The mourning compares to King Josiah’s death in battle (v. 11) preceding Messianic restoration (Deut 30:1–3; Zeph 3:9–13; Isa 11:11–12), when Temple sacrifices resume—directly contradicting Hebrews 10:12–14.',
    '03 · Passover lamb ≠ sin offering (Exod 12): The Passover lamb protected Israel’s firstborn in Egypt rather than atoning for universal sin, and Torah required an unblemished animal offered by priests at the Temple—not a beaten man executed by Romans.'
  ],
  ['Zechariah 12:2–11','Deuteronomy 30:1–3','Zephaniah 3:9–13','Isaiah 11:11–12','Ezekiel 43:18–27','Exodus 12','Hebrews 10:12–14'],
  [],
  {
    facts:[
      ['Zech 12:2–9','Global siege & destruction of armies never happened'],
      ['Zech 12:11','Mourning modeled on slain righteous King Josiah'],
      ['Ezek 43:18–27','Sacrifices resume, clashing with Heb 10:12–14'],
      ['Passover (Exod 12)','Deliverance sign, not Temple sin offering']
    ],
    quotes:[
      {by:'Hebrews 10:14 (ESV)',en:'For by a single offering he has perfected for all time those who are being sanctified.',ref:'Hebrews 10:14'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Regardless of Hebrew grammar, Zechariah 12’s mourning and Passover lamb imagery clearly point to Jesus’s cross!',
  theyWho:'Watch out · if they say',
  who:'Show failed timeline & Passover mismatch'
});

card('christianity/jesus/proof-texts/zechariah-12-10-pierced',{
  title:'Zechariah 12:10: “They Will Look on Me Whom They Pierced”',
  k:'Old Testament · Crucifixion proof-text',
  blurb:'Interlinear Me/Him pronoun clash (ʾēlay vs. ʿālāw), ʾēt ʾăšer syntax (Ezek 36:27; LXX), John 19:37 alteration, unfulfilled Zechariah 12 war, and Passover vs. sin-offering limits.',
  claim:'Zechariah 12:10 prophecies Jesus’s crucifixion—claiming God (“Me”) would be pierced, fulfilled when Roman soldiers pierced Jesus in John 19:37.',
  tree:P(N(
    Z12,
    'Zechariah 12:10 predicts God saying “they will look on Me whom they pierced,” fulfilled at Jesus’s crucifixion in John 19:37.',
    'Zechariah 12:10 is not about Jesus’s crucifixion—it sits inside an unfulfilled end-times battle over Jerusalem and breaks under Hebrew grammar. Reading “Me” as the one pierced creates an impossible shift to “mourn for HIM” (ʿālāw) in the same verse, forces John 19:37 to rewrite “Me,” ignores the Hebrew syntax of ʾēt ʾăšer (“concerning whom,” cf. Ezekiel 36:27 and the Septuagint), and clashes with Zechariah 12’s global siege, national Jewish repentance, and Messianic resumption of sacrifices.',
    'Hebrew interlinear grammar, John 19.37 & unfulfilled siege',
    [
      '01 · Pronoun clash & John 19.37 rewrite: Reading “look on Me” as the pierced one fails whether Father or Son speaks—the Father was not pierced, and if Jesus speaks “Me,” shifting to “mourn for HIM” (ʿālāw) collapses. John 19:37 therefore alters “Me” into third person.',
      '02 · Rare Hebrew ʾēt ʾăšer (“concerning whom”): As in Ezekiel 36:27 (and supported against the Christian reading by the Septuagint), ʾēt ʾăšer means “concerning whom”—meaning Israel looks to God for aid regarding a slain third party (collective Israel or a fallen righteous leader like Josiah).',
      '03 · Unfulfilled apocalyptic context (Zech 12.2–10): All nations never besieged Jerusalem, God never annihilated invading armies (v. 9), and Israel never repented nationally (v. 10)—plus Messianic restoration reinstates sacrifices (Ezek 43:18–27), opposing Hebrews 10:12–14.',
      '04 · Passover lamb mismatch (Exod 12): Linking Zechariah 12:10 to Jesus as “Passover lamb” fails because Passover saved Egyptian firstborn homes rather than atoning for sins, and Jesus was beaten and executed by Romans—failing OT requirements for an unblemished Temple offering.'
    ],
    ['Zechariah 12:2–11','John 19:37','Ezekiel 36:27; 43:18–27','Exodus 12','Deuteronomy 30:1–3','Zephaniah 3:9–13','Hebrews 10:12–14'],
    [z12TrapA,z12TrapB],
    {
      facts:[
        ['ʾēlay → ʿālāw','First-person “Me” clashes with third-person “Him”'],
        ['ʾēt ʾăšer','“Concerning whom” (Ezek 36:27; LXX agrees)'],
        ['Zech 12:2–10','Apocalyptic siege & national repentance unfulfilled'],
        ['Passover (Exod 12)','Protection sign, not bruised Roman execution']
      ],
      quotes:[
        {by:'Corrected Hebrew Translation',en:'They will look unto Me concerning whom they have pierced, and they will mourn for him.',ref:'Zechariah 12:10'},
        {by:'John 19:37 (NIV)',en:'They will look on the one they have pierced.',ref:'John 19:37'}
      ],
      visual:{
        kind:'steps',
        items:[
          ['1. Pronoun Mismatch','Interlinear reads “look on Me [ʾēlay]… mourn for Him [ʿālāw]”; John 19:37 quietly drops “Me.”'],
          ['2. Hebrew Syntax (ʾēt ʾăšer)','Rare phrase means “concerning whom” (Ezek 36:27), making God the helper appealed to for a slain third party.'],
          ['3. Unfulfilled Battle (vv. 2–10)','Global siege of Jerusalem, destruction of nations, and national repentance never occurred 2,000 years ago.'],
          ['4. Sacrifice & Passover Gap','Ezekiel 43 resumes sacrifices (vs. Heb 10), while Exodus 12’s Passover was neither a sin offering nor a Roman execution.']
        ]
      },
      shots:[
        S('dr5-zech12-1.webp','DR #zachariah-12-10: Hebrew interlinear of Zechariah 12:10 highlighting the pronoun shift from “on Me” (ʾēlay) to “for Him” (ʿālāw) around ʾēt ʾăšer.'),
        S('dr5-zech12-2.webp','DR #zachariah-12-10: closeup interlinear view of Zechariah 12:10 showing wə-hib-bî-ṭū ʾē-lay ʾēt ʾă-šer dā-qā-rū (“look on Me… pierced”) and wə-sā-p̄ə-ḏū ʿā-lāw (“mourn for Him”).')
      ]
    }
  ),{
    who:'Break open the Hebrew interlinear',
    forkTitle:'Two ways apologists defend Zechariah 12:10',
    forkSub:'Refute the “Me whom they pierced” literalism or the apocalyptic/Passover tie-in'
  }),
  sum:'Zechariah 12:10 refers to an unfulfilled end-times battle where people appeal to God (“unto Me”) concerning a slain third party (“whom they pierced… mourn for him,” ʾēt ʾăšer), forcing John 19:37 to alter the pronoun and leaving both the apocalyptic siege and Passover-atonement claims unfulfilled.'
});

/* ============================================================================
   5. NEW Tactical Playbook card: christianity/jesus/proof-texts/genesis-3-15-protoevangelium
   ============================================================================ */
const G315=DR('#genesis-3-15','1368597613875822613');

const g315TrapA=P(N(
  G315,
  'Paul proves in Galatians 3:16 that “seed” is singular for Christ—and calling it “her seed” instead of a man’s hints at the virgin birth!',
  'Both claims fail elementary Hebrew. The Hebrew word zeraʿ (“seed”) is always grammatically singular in form even when referring to millions—like Abraham’s descendants numbered like stars in Genesis 17:7. Likewise, “her seed” simply reflects that Eve was the one addressed after being deceived, and Scripture applies zeraʿ to women in ordinary marriages like Hagar (Genesis 16:10) and Rebekah (Genesis 24:60).',
  'Hebrew zeraʿ grammar & female “seed” in Gen 16.10 and 24.60',
  [
    '01 · Collective plural zeraʿ refutes Galatians 3.16: In Hebrew, zeraʿ is morphologically singular whether it denotes one child or a whole nation—Genesis 17:7 and 15:5 call Abraham’s star-numerous descendants zeraʿ, exposing Paul’s singular-only argument as invalid.',
    '02 · Context explains “the woman” without virgin birth: God addresses the serpent and Eve directly because Eve was deceived; Adam is addressed separately in vv. 17–19.',
    '03 · Women have “seed” across Genesis (Gen 16.10 & 24.60): God promises Hagar “I will multiply your seed [zeraʿ] exceedingly” (Gen 16:10), and Rebekah’s family blesses her saying “may your seed possess the gates of those who hate them” (Gen 24:60)—proving “woman’s seed” is ordinary Hebrew, not a virgin-birth code.'
  ],
  ['Genesis 3:15; 16:10; 17:7; 24:60','Galatians 3:16'],
  [],
  {
    facts:[
      ['Hebrew zeraʿ','Always singular in form; collective plural in sense'],
      ['Gen 17:7','Abraham’s numerous descendants called zeraʿ'],
      ['Gen 16:10','God promises to multiply Hagar’s zeraʿ'],
      ['Gen 24:60','Rebekah’s family blesses her zeraʿ']
    ],
    quotes:[
      {by:'Genesis 16:10 (ESV)',en:'I will surely multiply your offspring [seed] so that they cannot be numbered for multitude.',ref:'Genesis 16:10'},
      {by:'Genesis 24:60 (ESV)',en:'May you become thousands of ten thousands, and may your offspring possess the gate of those who hate him!',ref:'Genesis 24:60'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Galatians 3:16 shows seed is singular for Jesus, and calling it the woman’s seed predicts the virgin birth!',
  theyWho:'Watch out · if they say',
  who:'Cite Hebrew zeraʿ in Gen 16:10, 17:7 & 24:60'
});

const g315TrapB=P(N(
  G315,
  'The serpent represents Satan, and Jesus crushed Satan’s spiritual head at the cross.',
  'Neither “Satan” nor “the devil” appears anywhere in Genesis 3—identifying the literal serpent with Satan is a retroactive theological reading. Worse, even if Genesis 3:15 promised reversing the Fall and ending serpent-enmity (cf. Isaiah 11:8’s infant playing by a viper’s nest), every part of the Genesis 3 curse—pain in childbirth, agricultural toil, deadly snakes, and sin (1 Timothy 1:15)—remains fully in force after the crucifixion.',
  'Absent Satan, unreversed Fall curses & Isaiah 11.8',
  [
    '01 · Neither Satan nor the devil appears in Genesis 3: The text speaks strictly of a literal snake cursed to crawl on its belly and eat dust (v. 14)—with Jewish interpretation reading v. 15 as natural hostility between humans and snakes.',
    '02 · Unreversed curse of Genesis 3: Childbirth remains painful, humans still toil for food, and snakes still bite and kill—so nothing in the curse was undone.',
    '03 · Isaiah 11.8 & 1 Timothy 1.15 refute spiritual fulfillment: Isaiah 11:8 pictures true Messianic peace where an infant plays safely beside a cobra’s den, while post-crucifixion Paul still calls himself the worst of sinners (1 Tim 1:15)—showing evil and the serpent’s enmity remain unbroken.'
  ],
  ['Genesis 3:14–19','Isaiah 11:8','1 Timothy 1:15'],
  [],
  {
    facts:[
      ['Genesis 3','Words “Satan” and “devil” never appear'],
      ['Curse Intact','Childbirth pain, toil & snakebites persist'],
      ['Isaiah 11:8','Infants playing near vipers still unfulfilled'],
      ['1 Timothy 1:15','Paul calls himself worst of sinners post-cross']
    ],
    quotes:[
      {by:'Isaiah 11:8 (NIV)',en:'The infant will play near the cobra’s den, and the young child will put its hand into the viper’s nest.',ref:'Isaiah 11:8'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The serpent in Genesis 3 is Satan, and Jesus spiritually crushed his head on the cross!',
  theyWho:'Watch out · if they say',
  who:'Show Satan is absent & curse persists'
});

card('christianity/jesus/proof-texts/genesis-3-15-protoevangelium',{
  title:'Genesis 3:15: Is the “Protoevangelium” a Prophecy of Jesus?',
  k:'Old Testament · Messianic proof-text',
  blurb:'Literal snake-human enmity, zero mention of Satan, unreversed Fall curses (Isa 11:8; 1 Tim 1:15), and Hebrew zeraʿ in Gen 16:10, 17:7 & 24:60.',
  claim:'Genesis 3:15 (“her seed… shall bruise your head”) is the “first gospel” (Protoevangelium), predicting Jesus’s virgin birth and victory over Satan.',
  tree:P(N(
    G315,
    'Genesis 3:15 is the Protoevangelium predicting the virgin-born Messiah crushing Satan’s head.',
    'Neither context nor Hebrew grammar supports reading Jesus into Genesis 3:15. Genesis 3 pronounces literal judgments on a serpent, Eve, and Adam—never mentioning Satan or the devil—and classical Jewish exegesis reads it as natural hostility between humans and snakes. Hebrew zeraʿ (“seed”) is grammatically singular even for star-numerous descendants (Gen 17:7) and is used of women in normal births (Hagar in Gen 16:10; Rebekah in Gen 24:60); meanwhile, childbirth pain, toil, snakebites, and evil (cf. Isa 11:8; 1 Tim 1:15) all persist unbroken.',
    'Natural snake enmity, Hebrew zeraʿ & unreversed Fall curses',
    [
      '01 · Zero Messianic context & no mention of Satan: Genesis 3.14–19 curses a literal crawling serpent, Eve, and Adam; neither “Satan” nor “the devil” appears anywhere in the chapter, and Jewish exegesis understands v. 15 as mutual fear between humans and snakes.',
      '02 · The curse & evil were never reversed (Isa 11.8 & 1 Tim 1.15): Childbirth pain, agricultural toil, and snakebites continue unabated, Isaiah 11:8’s peace where infants play near cobras has not arrived, and Paul still calls himself the worst of sinners (1 Tim 1:15).',
      '03 · Hebrew zeraʿ collapses Galatians 3.16: Zeraʿ (“seed”) is always singular in grammatical form while routinely serving as a collective plural—such as Abraham’s countless descendants in Genesis 17:7.',
      '04 · “Woman’s seed” is ordinary Hebrew (Gen 16.10 & 24.60): Eve is named because she was deceived, and Genesis repeatedly speaks of a woman’s zeraʿ in normal marriages—Hagar (16:10) and Rebekah (24:60)—leaving zero basis for a virgin-birth cipher.'
    ],
    ['Genesis 3:14–19; 16:10; 17:7; 24:60','Isaiah 11:8','Galatians 3:16','1 Timothy 1:15'],
    [g315TrapA,g315TrapB],
    {
      facts:[
        ['No Satan','Genesis 3 curses a literal serpent, never mentions Satan'],
        ['Hebrew zeraʿ','Collective noun (Gen 17:7); ruins Gal 3:16'],
        ['Women’s “Seed”','Used for Hagar (16:10) & Rebekah (24:60)'],
        ['Curse Unbroken','Toil, childbirth pain & Isa 11:8 unfulfilled']
      ],
      quotes:[
        {by:'Genesis 3:15 (ESV)',en:'I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head…',ref:'Genesis 3:15'},
        {by:'Isaiah 11:8 (NIV)',en:'The infant will play near the cobra’s den, and the young child will put its hand into the viper’s nest.',ref:'Isaiah 11:8'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Protoevangelium Eisegesis',
          items:[
            'Retroactively turns a literal snake into Satan',
            'Copies Paul’s broken singular-seed claim (Gal 3:16)',
            'Treats “her seed” as an exclusive virgin-birth code',
            'Assumes Jesus reversed the Genesis 3 curse'
          ]
        },
        right:{
          title:'Hebrew Text & Reality',
          items:[
            'Literal serpent cursed to crawl; “Satan” absent in Gen 3',
            'Zeraʿ is singular in form even for millions (Gen 17:7)',
            'Hagar (16:10) & Rebekah (24:60) also have “seed”',
            'Pain, toil, snakes & sin remain (Isa 11:8 unfulfilled)'
          ]
        }
      }
    }
  ),{
    who:'Dismantle the Protoevangelium claim',
    forkTitle:'Two ways apologists defend Genesis 3:15',
    forkSub:'Refute the Galatians 3:16 / virgin-birth claim or the “serpent = Satan” reading'
  }),
  sum:'Genesis 3:15 describes natural hostility between snakes and humans with no mention of Satan, uses ordinary Hebrew zeraʿ (also applied to Hagar and Rebekah), and saw none of its Fall curses—or Isaiah 11:8’s snake-peace—reversed by Jesus.'
});

/* ============================================================================
   6. NEW Tactical Playbook card: christianity/bible/contradictions/prophets-vs-pentateuch-sacrifices
   ============================================================================ */
const PP=DR('#prophets-contradict-the-pentateuch','1384140061053947964');

const ppTrapA=P(N(
  PP,
  'Jeremiah 7:22 only meant God didn’t command sacrifices on the very day Israel left Egypt, or meant obedience is more important than sacrifice.',
  'That apologetic rescue contradicts both Jeremiah’s words and the Pentateuch itself. First, in Exodus 12 God commanded the Passover lamb sacrifice on the very night of leaving Egypt—and “on the day I brought them out of Egypt” is standard biblical idiom for the Exodus/Sinai covenant period (cf. Deut 9:7; Jer 31:32). Second, Jeremiah 7:22 does not say “obedience matters more than sacrifice”; it flatly denies God spoke or commanded anything concerning burnt offerings and sacrifices.',
  'Jeremiah 7.22’s absolute denial vs. Exodus 12 & Sinai laws',
  [
    '01 · Exodus 12 happens on the Exodus day itself: Even taken hyper-literally, God institutes the Passover lamb sacrifice and blood ritual in Exodus 12 before Israel even leaves Egypt—directly clashing with Jeremiah 7:22.',
    '02 · “On the day” covers the Sinai covenant: Hebrew frequently uses “in the day I brought them out of Egypt” to summarize the Mosaic covenant (cf. Jer 31:32), where Exodus 20:24, 24:5, and Leviticus 1–7 center God’s commands on burnt offerings.',
    '03 · Explicit denial, not comparative preference: Jeremiah 7:22 reads “I did not speak to them or command them concerning burnt-offerings and sacrifices”—contradicting Pentateuchal passages attributing detailed sacrificial codes directly to YHWH.'
  ],
  ['Jeremiah 7:21–23; 31:32','Exodus 12; 20:24; 24:5','Leviticus 1–7'],
  [],
  {
    facts:[
      ['Jer 7:22','“I did not speak… or command” burnt offerings'],
      ['Exod 12','Passover sacrifice ordered on Exodus night itself'],
      ['Leviticus 1–7','Extensive burnt-offering codes attributed to God'],
      ['Idiom Check','“In the day” spans Exodus–Sinai (Jer 31:32)']
    ],
    quotes:[
      {by:'Jeremiah 7:22 (NRSVA)',en:'I did not speak to them or command them concerning burnt-offerings and sacrifices.',ref:'Jeremiah 7:22'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Jeremiah only meant God didn’t give sacrificial laws on day one of the Exodus, or meant obedience outranks ritual!',
  theyWho:'Watch out · if they say',
  who:'Show Exod 12 & Jer 7:22’s flat denial'
});

const ppTrapB=P(N(
  PP,
  'Even if Jeremiah rebuked Israel’s hypocrisy, the Old Testament still requires blood sacrifice as the core of God’s covenant (Hebrews 9:22).',
  'Saying that deepens the contradiction instead of solving it. Hebrews 9:22 claims the Law requires blood for almost everything and allows no forgiveness without blood—yet Jeremiah 7:22–23 states God’s original Exodus command was strictly “Obey my voice,” Amos 5:25 asks whether Israel offered sacrifices for forty years in the wilderness at all, and Leviticus 5:11–13 explicitly allows sin atonement with bloodless flour.',
  'Three-way clash: Jeremiah 7.22, Amos 5.25 & Leviticus 5 vs. Hebrews 9.22',
  [
    '01 · Amos 5.25 reinforces Jeremiah’s critique: God asks rhetorically, “Did you bring to me sacrifices and offerings during the forty years in the wilderness, O house of Israel?”—casting doubt on the Pentateuch’s continuous wilderness sacrificial narrative.',
    '02 · Blood is not essential to Torah forgiveness (Lev 5.11–13): Even inside Leviticus, a poor Israelite obtains sin forgiveness with fine flour and zero blood—undercutting Hebrews 9:22’s sweeping blood-necessity claim.',
    '03 · Obedience precedes and replaces ritual (Jer 7.23): Jeremiah explicitly defines the original covenant as “Obey my voice, and I will be your God”—a pure moral monotheism incompatible with treating blood sacrifice as an eternal prerequisite for pardon.'
  ],
  ['Jeremiah 7:21–23','Amos 5:25','Leviticus 5:11–13','Hebrews 9:22'],
  [],
  {
    facts:[
      ['Amos 5:25','Questions 40 years of wilderness sacrifices'],
      ['Lev 5:11–13','Bloodless flour accepted for sin atonement'],
      ['Jer 7:23','Original command = “Obey my voice”'],
      ['Three-Way Clash','Prophets, Torah & Hebrews contradict']
    ],
    quotes:[
      {by:'Jeremiah 7:23 (NRSVA)',en:'But this command I gave them, “Obey my voice, and I will be your God, and you shall be my people.”',ref:'Jeremiah 7:23'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Still, the Pentateuch and Hebrews 9:22 prove blood sacrifice was always God’s core command!',
  theyWho:'Watch out · if they say',
  who:'Cite Amos 5:25 & bloodless Lev 5:11–13'
});

card('christianity/bible/contradictions/prophets-vs-pentateuch-sacrifices',{
  title:'Prophets Contradict the Pentateuch: Jeremiah 7:22 vs. Mosaic Sacrifices',
  k:'Bible Contradictions · Prophets vs. Torah',
  blurb:'Jeremiah 7:21–23 denies God commanded burnt offerings at the Exodus—clashing directly with Exodus 12, Exodus 20–29, and Leviticus 1–7.',
  claim:'The Old Testament speaks with one infallible voice, with the Prophets fully confirming every sacrificial statute recorded in the Pentateuch.',
  tree:P(N(
    PP,
    'The Prophets and the Pentateuch agree completely—God always commanded burnt offerings and sacrifices from the Exodus onward.',
    'Jeremiah 7:21–23 directly contradicts the Pentateuch’s Exodus-and-Sinai legislation. While Exodus 12 (Passover in Egypt), Exodus 20:24, 24:5, and Leviticus 1–7 present YHWH commanding detailed burnt offerings and sacrifices from the very moment of the Exodus, Jeremiah quotes God flatly denying that He spoke to or commanded Israel’s ancestors concerning burnt offerings and sacrifices when He brought them out of Egypt—stating His command was purely to obey His voice.',
    'Jeremiah 7.21–23 vs. Exodus 12 and Leviticus 1–7',
    [
      '01 · Jeremiah 7.21–22’s unambiguous denial: Speaking in YHWH’s name, Jeremiah tells Judah to add their burnt offerings to their sacrifices and eat the meat, because when God brought Israel out of Egypt He “did not speak to them or command them concerning burnt-offerings and sacrifices.”',
      '02 · Direct collision with the Pentateuch: Exodus 12 commands the Passover sacrifice on the Exodus night itself, and Exodus 20:24, 24:5, 29, and Leviticus 1–7 devote chapters to YHWH supposedly dictating burnt-offering laws immediately after Egypt.',
      '03 · Jeremiah 7.23 defines the real command: Instead of ritual slaughter, God says His command was “Obey my voice, and I will be your God”—a clash echoed by Amos 5:25 (“Did you bring me sacrifices… forty years in the wilderness?”).',
      '04 · Textual & theological fallout: Either the Pentateuch’s priestly sacrificial codes were later expansions Jeremiah rejected (cf. Jer 8:8 on the lying pen of scribes), or inspired biblical books flatly contradict one another on what YHWH commanded at the Exodus.'
    ],
    ['Jeremiah 7:21–23; 8:8','Exodus 12; 20:24; 24:5; 29','Leviticus 1–7','Amos 5:25'],
    [ppTrapA,ppTrapB],
    {
      facts:[
        ['Jer 7:22','Denies God commanded burnt offerings at Exodus'],
        ['Exod 12 / Lev 1–7','Attributes sacrificial laws directly to YHWH'],
        ['Jer 7:23','Original command was simply “Obey my voice”'],
        ['Amos 5:25','Echoes doubt over wilderness sacrifices']
      ],
      quotes:[
        {by:'Jeremiah 7:22 (NRSVA)',en:'For on the day that I brought your ancestors out of… Egypt, I did not… command them concerning burnt-offerings and sacrifices.',ref:'Jeremiah 7:22'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Pentateuch (Exodus & Leviticus)',
          items:[
            'Exod 12 commands Passover lamb slaughter in Egypt',
            'Exod 20:24 & 24:5 mandate burnt offerings at Sinai',
            'Leviticus 1–7 presents YHWH dictating burnt-offering statutes'
          ]
        },
        right:{
          title:'Prophets (Jeremiah 7:22–23 & Amos 5:25)',
          items:[
            'God “did not speak… or command” burnt offerings at the Exodus',
            'States the actual command was “Obey my voice”',
            'Amos 5:25 questions 40 years of wilderness sacrifices'
          ]
        }
      },
      shots:[
        S('dr5-proph-pent-1.webp','DR #prophets-contradict-the-pentateuch: Jeremiah 7:21–23 (NRSVA) highlighting “I did not speak to them or command them concerning burnt-offerings and sacrifices.”'),
        S('dr5-proph-pent-2.webp','DR #prophets-contradict-the-pentateuch: closeup scan of Jeremiah 7:22 contradicting the Pentateuch’s Exodus-era sacrificial mandates.')
      ]
    }
  ),{
    who:'Compare Jeremiah 7:22 with Exodus–Leviticus',
    forkTitle:'Two apologetic escapes on Jeremiah 7:22',
    forkSub:'Refute the “day one / priority” excuse or the Hebrews 9:22 blood-covenant appeal'
  }),
  sum:'Jeremiah 7:21–23 flatly states that God did not speak or command burnt offerings and sacrifices when bringing Israel out of Egypt—directly contradicting Exodus 12 and Leviticus 1–7 and shattering claims of seamless biblical inerrancy.'
});

/* ============================================================================
   7. NEW Tactical Playbook card: christianity/bible/contradictions/paul-vs-david-and-ezekiel-vs-samuel
   ============================================================================ */
const PD=DR('#paul-contradicts-david','1384140208106377248');
const ES=DR('#ezekiel-contradicts-samuel','1384140681605550252');

const pdesTrapA=P(N(
  PD,
  'David wasn’t rejecting blood sacrifice in Psalm 51—he even mentions burnt offerings in v. 19—and modern scholars don’t attribute Hebrews 9:22 to Paul.',
  'Neither point saves the Bible’s consistency. Regardless of who wrote Hebrews, Hebrews 9:22 is canonical New Testament Scripture asserting “without the shedding of blood there is no forgiveness”—yet David explicitly tells God in Psalm 51:16–17 “You do not delight in sacrifice” and receives immediate forgiveness upon confession in Psalm 32:5, while Leviticus 5:11–13 grants bloodless sin-forgiveness through fine flour.',
  'Psalm 51.16–17, Psalm 32.5 & bloodless flour in Leviticus 5.11–13',
  [
    '01 · Authorship doesn’t rescue canonical contradiction: Whether Hebrews 9:22 came from Paul (as traditional Christianity held) or another canonical NT author, the New Testament asserts a universal rule (“without the shedding of blood there is no forgiveness”) that clashes with the Old Testament.',
    '02 · David’s own testimony (Ps 51.16–17 & Ps 32.5): Seeking pardon for adultery and murder, David states God takes no pleasure in burnt offerings and accepts a broken, contrite heart—and in Psalm 32:5 God forgives his guilt immediately upon confession without blood.',
    '03 · Mosaic Law itself refutes Hebrews 9.22 (Lev 5.11–13): Even the Torah explicitly allows a poor sinner to bring fine flour without any blood “and the priest shall make atonement for him… and he shall be forgiven.”'
  ],
  ['Hebrews 9:22','Psalm 51:16–17','Psalm 32:5','Leviticus 5:11–13'],
  [],
  {
    facts:[
      ['Heb 9:22','“Without shedding of blood there is no forgiveness”'],
      ['Ps 51:16–17','God delights in contrite heart, not burnt offerings'],
      ['Ps 32:5','David forgiven directly upon confession'],
      ['Lev 5:11–13','Bloodless flour atones for sin in Torah']
    ],
    quotes:[
      {by:'Psalm 51:16–17 (NIV)',en:'You do not delight in sacrifice, or I would bring it… My sacrifice, O God, is a broken spirit.',ref:'Psalm 51:16–17'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Hebrews wasn’t necessarily written by Paul, and David didn’t deny blood atonement in Psalm 51!',
  theyWho:'Watch out · if they say',
  who:'Show Ps 51, Ps 32:5 & Lev 5:11–13 refute Heb 9:22'
});

const pdesTrapB=P(N(
  ES,
  'In 2 Samuel 12:14, David’s infant only suffered an earthly consequence—he didn’t bear David’s eternal sin or guilt.',
  'Ezekiel 18:20 explicitly rules out even fatal earthly penalty for a parent’s sin: “The one who sins is the one who will die. The child will not share the guilt of the parent.” Yet in 2 Samuel 12:13–18, Nathan tells David he will NOT die while his innocent newborn is struck dead specifically “because by this deed you have utterly scorned the LORD”—and in 2 Samuel 21:1–9 seven of Saul’s sons are executed to lift a famine caused by Saul’s bloodguilt.',
  '2 Samuel 12.13–18 & 21.1–9 vs. Ezekiel 18.20 (and Exodus 20.5)',
  [
    '01 · Reversed penalty in 2 Samuel 12.13–14: By Ezekiel 18:20’s rule, the sinner (David) must bear the penalty and the child must never suffer for the parent’s guilt—yet 2 Samuel flips this, sparing David and striking his newborn dead for David’s sin.',
    '02 · Seven descendants killed for Saul’s sin (2 Sam 21.1–9): After three years of famine, God blames “Saul and his blood-stained house,” and seven innocent sons/grandsons of Saul are executed before God ends the famine.',
    '03 · Wider Torah tension & Islamic justice: Exodus 20:5 likewise threatens punishing children to the third and fourth generation for parents’ sins, contradicting Ezekiel 18:20—whereas the Qurʾān consistently affirms “no bearer of burdens shall bear the burden of another” (Q 6:164).'
  ],
  ['Ezekiel 18:20','2 Samuel 12:13–18; 21:1–9','Exodus 20:5','Qurʾān 6:164'],
  [],
  {
    facts:[
      ['Ezek 18:20','“The child will not share the guilt of the parent”'],
      ['2 Sam 12:13–14','David spared; newborn dies for David’s sin'],
      ['2 Sam 21:1–9','7 descendants executed for Saul’s bloodguilt'],
      ['Doctrinal Impact','Undermines vicarious atonement & Original Sin']
    ],
    quotes:[
      {by:'2 Samuel 12:14 (ESV)',en:'Nevertheless, because by this deed you have utterly scorned the LORD, the child who is born to you shall die.',ref:'2 Samuel 12:14'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'David’s child dying in 2 Samuel 12 wasn’t bearing David’s guilt—it was just a temporal consequence!',
  theyWho:'Watch out · if they say',
  who:'Show 2 Sam 12:14 & 21:1–9 violate Ezek 18:20'
});

card('christianity/bible/contradictions/paul-vs-david-and-ezekiel-vs-samuel',{
  title:'Paul vs. David (Heb 9:22) & Ezekiel vs. Samuel (Ezek 18:20)',
  k:'Bible Contradictions · Forgiveness & vicarious guilt',
  blurb:'Hebrews 9:22 (“no forgiveness without blood”) vs. David (Ps 51:16–17; 32:5) & Lev 5:11–13, plus Ezekiel 18:20 vs. 2 Samuel 12:14 & 21:1–9.',
  claim:'The Bible teaches one unified doctrine of sin and atonement—that blood is strictly required for forgiveness and guilt can be transferred vicariously.',
  tree:P(N(
    PD,
    'Scripture consistently teaches that blood shedding is required for all forgiveness and that vicarious atonement fits biblical justice.',
    'Two flagship biblical pairs expose direct internal contradictions on forgiveness and guilt. First, Hebrews 9:22 (traditionally attributed to Paul) asserts “without the shedding of blood there is no forgiveness,” yet David states God rejects animal offerings for a broken heart (Psalm 51:16–17) and receives pardon upon confession (Psalm 32:5), and even Leviticus 5:11–13 allows bloodless flour atonement. Second, Ezekiel 18:20 declares the child never shares the parent’s guilt—yet 2 Samuel 12:14 strikes David’s newborn dead for David’s sin and 2 Samuel 21:1–9 executes seven of Saul’s descendants for Saul’s bloodguilt.',
    'Blood necessity (Heb 9.22 vs. David) & shared guilt (Ezek 18.20 vs. 2 Sam)',
    [
      '01 · Hebrews 9.22 vs. David’s Psalms (and Leviticus 5): Hebrews 9:22 insists “without the shedding of blood there is no forgiveness,” directly contradicting David’s statement that God does not delight in sacrifice or burnt offerings (Ps 51:16–17), David’s bloodless pardon in Psalm 32:5, and Leviticus 5:11–13’s flour sin-offering.',
      '02 · Ezekiel 18.20 forbids vicarious guilt: Ezekiel affirms unequivocally that “the one who sins is the one who will die” and “the child will not share the guilt of the parent.”',
      '03 · 2 Samuel 12.13–18 & 21.1–9 inflict parent’s guilt on children: In direct opposition to Ezekiel 18:20, 2 Samuel spares the guilty David while striking his infant dead for David’s deed (12:14), and later executes seven innocent sons of Saul to lift famine for Saul’s crime (21:1–9).',
      '04 · Collapse of Christian atonement foundations: Together, these two contradictions undermine both pillars of Pauline/Christian soteriology—that forgiveness requires blood and that one person can rightly bear another’s guilt.'
    ],
    ['Hebrews 9:22','Psalm 51:16–17; 32:5','Leviticus 5:11–13','Ezekiel 18:20','2 Samuel 12:13–18; 21:1–9'],
    [pdesTrapA,pdesTrapB],
    {
      facts:[
        ['Heb 9:22 vs. Ps 51','Claims blood required; David says God wants repentance'],
        ['Lev 5:11–13','Torah allows flour without blood for sin forgiveness'],
        ['Ezek 18:20','Child never shares parent’s guilt; sinner dies'],
        ['2 Sam 12 & 21','David’s baby & Saul’s 7 sons die for fathers’ sins']
      ],
      quotes:[
        {by:'Hebrews 9:22 (NIV)',en:'In fact, the law requires that nearly everything be cleansed with blood, and without the shedding of blood there is no forgiveness.',ref:'Hebrews 9:22'},
        {by:'Ezekiel 18:20 (NIV)',en:'The one who sins is the one who will die. The child will not share the guilt of the parent.',ref:'Ezekiel 18:20'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Hebrews 9:22 & 2 Samuel',
          items:[
            'Heb 9:22: “Without the shedding of blood there is no forgiveness”',
            '2 Sam 12:14: David spared; innocent infant dies for David’s sin',
            '2 Sam 21:6–9: 7 descendants killed for Saul’s bloodguilt'
          ]
        },
        right:{
          title:'David, Leviticus 5 & Ezekiel 18:20',
          items:[
            'Ps 51:16–17 & 32:5: Forgiveness via contrite confession, no blood',
            'Lev 5:11–13: Poor offer fine flour (zero blood) for sin atonement',
            'Ezek 18:20: Child never shares parent’s guilt; each dies for own sin'
          ]
        }
      },
      shots:[
        S('dr5-paul-david-1.webp','DR #paul-contradicts-david: Hebrews 9:22 (NIV) highlighting “and without the shedding of blood there is no forgiveness.”'),
        S('dr5-paul-david-2.webp','DR #paul-contradicts-david: closeup scan of Hebrews 9:22 clashing with David (Psalm 51:16–17; 32:5) and Leviticus 5:11–13.'),
        S('dr5-ezek-sam-1.webp','DR #ezekiel-contradicts-samuel: Ezekiel 18:20 (NIV) highlighting “The child will not share the guilt of the parent.”'),
        S('dr5-ezek-sam-2.webp','DR #ezekiel-contradicts-samuel: closeup scan of Ezekiel 18:20 contradicting 2 Samuel 12:14 and 21:1–9.')
      ]
    }
  ),{
    who:'Press both forgiveness & guilt contradictions',
    forkTitle:'Two apologetic defenses to dismantle',
    forkSub:'Defuse the Hebrews authorship / Psalm 51 dodge or the “temporal consequence” excuse'
  }),
  sum:'Hebrews 9:22’s rule (“no forgiveness without blood”) contradicts David’s bloodless repentance (Psalms 51:16–17; 32:5) and Leviticus 5:11–13, while Ezekiel 18:20’s ban on inherited guilt is directly contradicted by 2 Samuel 12:14 and 21:1–9.'
});

/* ============================================================================
   8. NEW Tactical Playbook card: christianity/bible/contradictions/jesus-contradicts-deuteronomy
   ============================================================================ */
const JD=DR('#jesus-contradicts-deuteronomy','1384140761569820753');

const jdTrapA=P(N(
  JD,
  'Matthew 16:28 was fulfilled six days later at the Transfiguration in Matthew 17:1–8, not at the end of the world.',
  'Read verse 27 right before verse 28: Matthew 16:27 explicitly defines the event as the Son of Man coming “in his Father’s glory with his angels, and then he will reward each person according to what they have done”—the Final Judgment, not a private mountain glow six days later. Moreover, declaring solemnly that “some who are standing here will not taste death” would be absurd for an event happening less than a week later.',
  'Why the Transfiguration rescue fails Matthew 16.27–28',
  [
    '01 · Verse 27 defines the coming as Final Judgment: Jesus states the Son of Man will come with his angels to repay every person for their deeds—none of which occurred at the Transfiguration in Matthew 17.',
    '02 · “Will not taste death” proves a decades-long horizon: Nobody warns bystanders that “some” of them won’t die before next Tuesday; the idiom assumes almost everyone will eventually die while a few survive to witness the end.',
    '03 · Reinforced by Matthew 10.23: Earlier, Jesus tells the Twelve they will not finish going through the towns of Israel before the Son of Man comes—another unfulfilled imminent Parousia expectation.'
  ],
  ['Matthew 10:23; 16:27–28; 17:1–8','Mark 9:1','Luke 9:27'],
  [],
  {
    facts:[
      ['Matt 16:27','Coming with angels to reward everyone’s deeds'],
      ['Matt 16:28','“Some standing here will not taste death”'],
      ['6-Day Absurdity','“Not taste death” makes no sense for 6 days'],
      ['Matt 10:23','Won’t finish Israel’s towns before Son of Man comes']
    ],
    quotes:[
      {by:'Matthew 16:28 (NIV)',en:'Some who are standing here will not taste death before they see the Son of Man coming in his kingdom.',ref:'Matthew 16:28'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Matthew 16:28 was fulfilled six days later at the Transfiguration in Matthew 17!',
  theyWho:'Watch out · if they say',
  who:'Show v. 27’s Final Judgment & “not taste death”'
});

const jdTrapB=P(N(
  JD,
  'In Matthew 24:34, “this generation” means either the Jewish nation or whichever future generation sees the end-times signs begin.',
  'In every other occurrence in Matthew (11:16; 12:41–42; 23:36), the phrase genea hautē (“this generation”) strictly means Jesus’s own living first-century contemporaries. In Matthew 24:34 (// Mark 13:30; Luke 21:32), Jesus explicitly tells his disciples “when you see all these things… this generation will certainly not pass away until all these things have happened”—binding the Son of Man’s cloud-coming (vv. 29–30) to that living generation, which passed without fulfillment.',
  'Consistent Matthean meaning of genea hautē (“this generation”)',
  [
    '01 · Uniform usage across Matthew (11.16; 12.41–42; 23.36): Every single time Matthew uses “this generation” (genea hautē), it refers unambiguously to the contemporary first-century generation standing before Jesus—never “the Jewish race” across millennia.',
    '02 · Second-person address in Matt 24.33–34: Jesus tells the disciples “when you see all these things,” tying the cosmic darkening and cloud-coming (vv. 29–30) directly to “this generation.”',
    '03 · Islamic vs. Christian dilemma: Either the Gospel writers mistakenly projected imminent apocalyptic hopes onto Jesus (confirming NT corruption), or Christians face Deuteronomy 18:22’s verdict against an unfulfilled prophetic word.'
  ],
  ['Matthew 11:16; 12:41–42; 23:36; 24:29–34','Mark 13:30','Luke 21:32','Deuteronomy 18:21–22'],
  [],
  {
    facts:[
      ['genea hautē','Always means living contemporaries in Matthew'],
      ['Matt 23:36','“All this will come on this generation”'],
      ['Matt 24:33–34','“When you see all these things… this generation”'],
      ['Deut 18:22','Unfulfilled timeline triggers Torah test']
    ],
    quotes:[
      {by:'Matthew 24:34 (NIV)',en:'Truly I tell you, this generation will certainly not pass away until all these things have happened.',ref:'Matthew 24:34'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'This generation in Matthew 24:34 just means the Jewish race or the final future generation!',
  theyWho:'Watch out · if they say',
  who:'Show Matt 11:16, 12:41 & 23:36 usage'
});

card('christianity/bible/contradictions/jesus-contradicts-deuteronomy',{
  title:'Gospel Jesus vs. Deuteronomy 18:21–22: Unfulfilled Return Timelines',
  k:'Bible Contradictions · Torah prophecy test',
  blurb:'Deuteronomy 18:21–22’s unfailing-prophecy rule vs. the Synoptic time-bound predictions attributed to Jesus (Matt 16:28; 24:34; 10:23).',
  claim:'Every prophecy spoken by Jesus in the Gospels is completely consistent with Deuteronomy 18:21–22’s test for a true prophet of God.',
  tree:P(N(
    JD,
    'Jesus passes Deuteronomy 18:21–22 with zero failed predictions—none of his Gospel statements set a broken timeframe.',
    'Deuteronomy 18:21–22 establishes an objective Torah test: if what a prophet proclaims in the LORD’s name does not take place or come true, the LORD has not spoken it and the speaker spoke presumptuously. Yet the Synoptic Gospels place three explicit first-century Parousia timelines on Jesus’s lips—that “some standing here will not taste death” before he comes in glory with his angels (Matt 16:27–28), that “this generation will certainly not pass away” before his cloud-coming (Matt 24:29–34), and that disciples wouldn’t finish Israel’s towns first (Matt 10:23)—none of which came true, forcing Christians to choose between Gospel inerrancy and Deuteronomy 18:22.',
    'Deuteronomy 18.21–22 vs. Matthew 10.23, 16.28 & 24.34',
    [
      '01 · Torah’s falsification rule (Deut 18.21–22): Moses gives Israel a clear empirical criterion—any declaration spoken in the LORD’s name that fails to come true was not spoken by God.',
      '02 · Bystanders still alive (Matt 16.27–28 // Mark 9.1): Jesus promises that before “some who are standing here” taste death, they will see the Son of Man coming in his Father’s glory with his angels to repay every person—yet all bystanders died without seeing the Final Judgment.',
      '03 · “This generation” & Israel’s towns (Matt 24.34; 10.23): Matthew 24:34 binds cosmic collapse and the Son of Man’s arrival on the clouds to “this generation,” while Matthew 10:23 promises the Twelve will not finish evangelizing Israel’s towns before he comes—both unfulfilled.',
      '04 · Islamic resolution of the contradiction: As Muslims affirm Jesus (ʿĪsā عليه السلام) was a true, sinless prophet, this collision exposes human redaction and failed apocalyptic expectations inserted into the Synoptic Gospels rather than authentic prophetic speech.'
    ],
    ['Deuteronomy 18:21–22','Matthew 10:23; 16:27–28; 24:29–34','Mark 9:1; 13:30','Luke 9:27; 21:32'],
    [jdTrapA,jdTrapB],
    {
      facts:[
        ['Deut 18:21–22','Unfulfilled prediction = not from the LORD'],
        ['Matt 16:28','“Some standing here will not taste death”'],
        ['Matt 24:34','“This generation will certainly not pass away”'],
        ['Matt 10:23','Won’t finish Israel’s towns before he comes']
      ],
      quotes:[
        {by:'Deuteronomy 18:22 (NIV)',en:'If what a prophet proclaims… does not take place or come true, that is a message the LORD has not spoken.',ref:'Deuteronomy 18:22'},
        {by:'Matthew 10:23 (NIV)',en:'Truly I tell you, you will not finish going through the towns of Israel before the Son of Man comes.',ref:'Matthew 10:23'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Torah Standard (Deut 18:21–22)',
          items:[
            'True prophetic word must take place as spoken',
            'Non-fulfillment proves the LORD did not speak it',
            'Speaker declared presumptuous; Israel need not fear him'
          ]
        },
        right:{
          title:'Synoptic Gospel Timelines',
          items:[
            'Matt 16:28: Some standing there won’t die before glorious return',
            'Matt 24:34: “This generation” won’t pass before cloud-coming',
            'Matt 10:23: Israel’s towns unfinished before Son of Man arrives'
          ]
        }
      },
      shots:[
        S('dr5-jesus-deut-1.webp','DR #jesus-contradicts-deuteronomy: Deuteronomy 18:21–22 (NIV) highlighting the Torah’s falsification test for unfulfilled predictions.'),
        S('dr5-jesus-deut-2.webp','DR #jesus-contradicts-deuteronomy: closeup scan of Deuteronomy 18:21–22 (“If what a prophet proclaims… does not take place or come true…”).')
      ]
    }
  ),{
    who:'Apply Deut 18:21–22 to Gospel timelines',
    forkTitle:'Two standard evasions on Jesus’s timelines',
    forkSub:'Refute the Transfiguration dodge or the “Jewish race / future generation” redefinition'
  }),
  sum:'Deuteronomy 18:21–22 disqualifies any prediction that fails to come true, placing Christians in direct contradiction with the Synoptic Gospels’ unfulfilled first-century return timelines attributed to Jesus (Matthew 10:23; 16:28; 24:34).'
});

/* ============================================================================
   9. add() #1: christianity/trinity/angel-of-the-lord (exodus_23)
   ============================================================================ */
const EX23=DR('#exodus-23','1368282904492507228');

add('christianity/trinity/angel-of-the-lord',P(N(
  EX23,
  'Exodus 23:20–21 proves the angel is a pre-incarnate divine Jesus because “he will not pardon your transgression” and “my name is in him.”',
  'Both claims collapse under the New Testament and Hebrew idiom. First, Luke 7:27 applies Exodus 23:20’s “Behold, I send my messenger before your face” directly to John the Baptist—so Christians cannot make this figure a pre-incarnate Jesus without deifying John the Baptist! Second, “not forgiving rebellion” refers to refusing personal defiance against the angel’s authority (like a strict schoolteacher, not divine sin-absolution), while having God’s “name” means acting with God’s delegated authority (just like the prophet in Deut 18:18–19 and royal scribes in Esther 3:12; 8:8).',
  'Exodus 23.20–21: Luke 7.27 (John the Baptist), pardon & “My name”',
  [
    '01 · Luke 7.27 disqualifies a pre-incarnate Jesus: The New Testament quotes “Behold, I send my messenger before your face, who will prepare your way before you” and applies it explicitly to John the Baptist—making it inconsistent for Christians to reassign this passage to Jesus unless they want to make John the Baptist divine.',
    '02 · “Will not pardon your transgression” is personal defiance, not divine absolution: Nothing in Exodus 23 says the angel forgives sins against God; in context, disobeying the angel’s guidance brings immediate refusal of leniency—just as a school principal warning students “the new teacher won’t forgive your misbehavior” never grants the teacher God’s power to forgive eternal sins.',
    '03 · “My name is in him” means delegated authority (Deut 18.18–19; Esth 3.12; 8.8): Throughout the Hebrew Bible, speaking or writing in someone’s name means acting on their official authority—as Moses’s successor speaks “in My name” (Deut 18:18–19) and officials write decrees “in the name of King Ahasuerus” (Esther 3:12; 8:8) without becoming the king or God.'
  ],
  ['Exodus 23:20–21','Luke 7:27','Deuteronomy 18:18–19','Esther 3:12; 8:8'],
  [],
  {
    facts:[
      ['Luke 7:27','Applies Exod 23:20’s messenger to John the Baptist'],
      ['Pardon Claim','Personal defiance (teacher analogy), not sin-absolution'],
      ['Deut 18:18–19','Prophet speaks “in My name” without being God'],
      ['Esther 3:12 / 8:8','Officials write “in the king’s name” via authority']
    ],
    quotes:[
      {by:'Luke 7:27 (ESV)',en:'This is he of whom it is written, “Behold, I send my messenger before your face, who will prepare your way before you.”',ref:'Luke 7:27'},
      {by:'Deuteronomy 18:19 (ESV)',en:'And whoever will not listen to my words that he shall speak in my name, I myself will require it of him.',ref:'Deuteronomy 18:19'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Exod 23:20–21 Misreading',
        items:[
          'Claims the messenger must be pre-incarnate Jesus',
          'Reads “won’t pardon rebellion” as divine sin-forgiving power',
          'Hyper-literalizes “my name is in him” into shared essence'
        ]
      },
      right:{
        title:'NT & Hebrew Bible Refutation',
        items:[
          'Luke 7:27 explicitly identifies the sent messenger as John the Baptist',
          '“Won’t pardon” = strict envoy refusing defiance (schoolteacher analogy)',
          'Acting “in His name” = delegated authority (Deut 18:18–19; Esth 3:12, 8:8)'
        ]
      }
    }
  }
),{
  optWho:'Watch out · if they press Exod 23:20–21',
  optLabel:'Exodus 23:20–21 says the angel will not pardon transgression and has God’s name in him—so he must be God!',
  theyWho:'Watch out · if they press Exod 23:20–21',
  who:'Expose Luke 7:27, Deut 18:19 & Esther 8:8'
}));

/* ============================================================================
   10. add() #2: christianity/islam-vs/dilemma/lost-books-of-the-bible (lost_books)
   ============================================================================ */
const LB=DR('#lost-books','1384140829639311450');

add('christianity/islam-vs/dilemma/lost-books-of-the-bible',P(N(
  LB,
  'Even if the Old Testament cites minor historical annals, every inspired prophetic writing needed for New Testament prophecies survived intact.',
  'Matthew 2:23 and Church Father John Chrysostom shatter that claim. Matthew insists Jesus lived in Nazareth to fulfill “what was said through the prophets, that he would be called a Nazarene”—yet no surviving Old Testament book contains that prophecy. Explaining this missing quote in Homily 9 on Matthew (often cited as Homily 8), John Chrysostom explicitly concedes that “many of the prophetic writings have been lost” through Israelite negligence, book-burning (Jeremiah 36:23), buried Torah scrolls (2 Kings 22:8), and foreign invasions.',
  'Matthew 2.23’s missing prophecy & John Chrysostom on lost prophetic books',
  [
    '01 · Matthew 2.23 quotes an absent prophecy: Matthew 2:23 declares Jesus settled in Nazareth so “what was said through the prophets, that he would be called a Nazarene” was fulfilled—yet no verse in the surviving Old Testament says this.',
    '02 · John Chrysostom’s candid admission (Homily 9 on Matthew, §6): Confronted with this gap (referenced in the channel as Homily on Matthew 8), Chrysostom tells readers not to be puzzled because “many of the prophetic writings have been lost.”',
    '03 · Biblical evidence Chrysostom cites (2 Kgs 22.8 & Jer 36.23): Chrysostom points out that Chronicles and 4 Kings (2 Kings 22) record Deuteronomy itself lying buried and barely recovered, while Jeremiah 36:23 describes prophetic writings cut up and burned—concluding that if books perished in peacetime, far more disappeared under foreign conquests.'
  ],
  ['Matthew 2:23','John Chrysostom, Homily 9 on Matthew §6 (cited as Homily 8)','2 Kings 22:8','Jeremiah 36:23'],
  [],
  {
    facts:[
      ['Matthew 2:23','“He would be called a Nazarene” absent from OT'],
      ['John Chrysostom','“Many of the prophetic writings have been lost”'],
      ['Jeremiah 36:23','Prophetic scrolls cut and burned by the king'],
      ['2 Kings 22:8','Deuteronomy buried and lost until rediscovered']
    ],
    quotes:[
      {by:'Matthew 2:23 (NIV)',en:'So was fulfilled what was said through the prophets, that he would be called a Nazarene.',ref:'Matthew 2:23'},
      {by:'John Chrysostom (Homily 9 on Matthew, §6)',en:'For many of the prophetic writings have been lost; and this one may see from the history of the Chronicles.',ref:'Homily 9 (often indexed as 8) on Matthew'}
    ],
    visual:{
      kind:'steps',
      items:[
        ['1. Unlocatable Citation (Matt 2:23)','Matthew claims “the prophets” foretold Jesus would be called a Nazarene—nowhere in today’s Old Testament.'],
        ['2. Chrysostom’s Concession','John Chrysostom resolves the gap by admitting many prophetic books perished over time.'],
        ['3. Internal Biblical Proof','Cites buried/lost Scripture in 2 Kings 22 and burned scrolls in Jeremiah 36:23 before Babylonian invasions.']
      ]
    },
    shots:[
      S('dr5-lost-books-1.webp','DR #lost-books: Matthew 2:23 (NIV) highlighting “So was fulfilled what was said through the prophets, that he would be called a Nazarene.”'),
      S('dr5-lost-books-2.webp','DR #lost-books: closeup scan of Matthew 2:23, explained by John Chrysostom’s admission that many prophetic writings were lost.')
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Only non-prophetic secular chronicles were lost—no actual prophetic revelation used by the New Testament ever vanished!',
  theyWho:'Watch out · if they say',
  who:'Cite Matt 2:23 & John Chrysostom'
}));

})();
