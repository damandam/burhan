/* Islamic Apologetics Overlooked Sub-Threads — 2026-11-22.
   Integrates 8 sub-threads across 2 new Tactical Debate Playbook cards and 6 enrichments
   (5 debate-tree branches + 1 explainer card), referencing all 15 shots/ia-sub-*.webp scans. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('ia-subthreads: no card',key); };

const IA=(sub,id)=>({credit:'Islamic Apologetics · '+sub,link:'https://discord.com/channels/1514269918978248796/'+id});
const S=(src,cap)=>({src:'shots/'+src,cap});

/* ============================================================================
   1. NEW Tactical Playbook card: christianity/jesus/proof-texts/john-8-58-before-abraham-i-am
   ============================================================================ */
const J858=IA('#trinity-refutation › John 8:58','1514394727565230170');

const j858TrapA=P(N(
  J858,
  'Jesus used Ego Eimi, the exact divine name from Exodus 3:14, to claim he is Yahweh.',
  'Checking the Greek Septuagint collapses that claim immediately. In Exodus 3:14, God’s distinctive divine title is ho ōn (“The Being One”), not egō eimi alone—and in the very next chapter (John 9:9), the healed blind man uses the exact same Greek phrase egō eimi to identify himself.',
  'Septuagint Exodus 3.14 vs. John 8.58 and John 9.9',
  [
    '01 · The actual Greek title in Exodus 3.14: In the Septuagint (LXX), the divine name declared to Moses is Egō eimi ho ōn—where ho ōn (“the One who is”) carries the unique ontological weight, not the ordinary pronoun-verb pair egō eimi.',
    '02 · John 9.9 settles egō eimi: When neighbors debate whether the healed blind man is really the former beggar, he insists in John 9:9 using the exact same Greek words, egō eimi (“I am [the one]”). Nobody turns the blind man into God for saying egō eimi.',
    '03 · Explicit subordination in John 8.28–30 and 8.50–55: Earlier in the same chapter, Jesus states he does nothing on his own and speaks only what the Father taught him (8:28–29). Right before v. 58, he insists his own glory means nothing and that the Father alone glorifies him (8:50, 54)—ruling out a claim to self-existing deity.'
  ],
  ['John 8:28–30, 50–58','John 9:9','Exodus 3:14 (LXX)'],
  [],
  {
    facts:[
      ['LXX Exod 3:14','Divine title is ho ōn, not egō eimi'],
      ['John 9:9','Blind man also says egō eimi'],
      ['John 8:28–29','Speaks only what the Father taught'],
      ['John 8:50–54','Own glory means nothing; Father glorifies']
    ],
    quotes:[
      {by:'John 9:9 (healed blind man)',en:'But he himself insisted, “I am the man.”',ref:'John 9:9 (Greek: egō eimi)'},
      {by:'John 8:50 (Jesus)',en:'I am not seeking glory for myself; but there is one who seeks it.',ref:'John 8:50'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Jesus used Ego Eimi, the exact divine name from Exodus 3:14, to claim he is Yahweh!',
  theyWho:'Watch out · if they say',
  who:'Counter with Greek grammar & John 9:9'
});

const j858TrapB=P(N(
  J858,
  'Even without the divine name, existing before Abraham proves Jesus is uncreated, eternal God.',
  'In both Second Temple Jewish messianic thought and authentic Islamic tradition, a prophet’s or Messiah’s status being decreed before creation never makes him God. Moreover, John 8:56 explains what Abraham actually saw: Abraham rejoiced at the prospect of the Messiah’s coming day—not at Jesus standing physically beside him.',
  'Decreed messianic pre-existence vs. ontological eternity',
  [
    '01 · Abraham saw the Messiah’s day (John 8.56): Jesus says Abraham “rejoiced at the thought of seeing my day; he saw it and was glad.” The focus is prophetic anticipation of the messianic era, not an earthly encounter between Jesus and Abraham.',
    '02 · Jewish messianic pre-existence: Jewish tradition routinely spoke of the Messiah’s name or role existing in God’s decree before the world was made, without ever equating the Messiah with the Creator.',
    '03 · Prophetic parallel in Jāmiʿ al-Tirmidhī 3609: Asked when his prophethood was established, the Prophet Muḥammad ﷺ answered, “While Adam was between soul and body” (graded ṣaḥīḥ by Darussalam). Pre-ordainment in divine decree marks prophetic election, never divinity.'
  ],
  ['John 8:56–58','Jāmiʿ al-Tirmidhī 3609 (Ṣaḥīḥ)'],
  [],
  {
    facts:[
      ['John 8:56','Abraham anticipated his future day'],
      ['Jewish Tradition','Messiah’s role decreed before creation'],
      ['Tirmidhī 3609','Prophethood decreed while Adam between soul/body'],
      ['Key Distinction','Predestined status ≠ uncreated deity']
    ],
    quotes:[
      {by:'Prophet Muḥammad ﷺ',en:'While Adam was between (being) soul and body.',ref:'Jāmiʿ al-Tirmidhī 3609 (Ṣaḥīḥ)'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Even without the divine name, existing before Abraham proves Jesus is eternal God!',
  theyWho:'Watch out · if they say',
  who:'Distinguish divine decree from deity'
});

card('christianity/jesus/proof-texts/john-8-58-before-abraham-i-am',{
  title:'John 8:58: “Before Abraham was, I am”',
  k:'Gospel of John · Egō eimi',
  blurb:'Context (8:28–56), the LXX divine title ho ōn, John 9:9’s blind man, and decreed messianic pre-existence.',
  claim:'When Jesus said “Before Abraham was, I am” (John 8:58), he claimed the divine name of Exodus 3:14 and eternal deity.',
  tree:P(N(
    J858,
    'In John 8:58 Jesus says, Before Abraham was, I am—claiming the divine name from Exodus 3:14 and eternal deity.',
    'Read inside its own chapter and original Greek, John 8:58 makes no claim to divinity. In vv. 28–55 Jesus repeatedly denies independent authority and glory; v. 56 frames the exchange around Abraham anticipating the Messiah’s day; LXX Exodus 3:14 uses ho ōn as the divine title rather than egō eimi alone; and the healed blind man uses the identical phrase egō eimi in John 9:9.',
    'Contextual & Greek refutation of the John 8.58 proof-text',
    [
      '01 · Hostile misunderstanding & subordination (John 8.48–55): His opponents open by calling him demon-possessed (v. 48), missing his point throughout. Jesus answers by disclaiming self-glorification (“my glory means nothing”) and pointing exclusively to the Father who glorifies him.',
      '02 · Earlier disclaimer in the same discourse (John 8.28–30): Just verses earlier, Jesus affirms he does nothing on his own authority, speaks only what the Father taught him, and always does what pleases the One who sent him.',
      '03 · Messiah’s day & decreed pre-existence (John 8.56 & Tirmidhī 3609): Verse 56 clarifies Abraham looked forward to the Messiah’s future day—matching Jewish expectation of a pre-ordained Messiah and the ḥadīth noting prophethood was decreed while Adam was between soul and body.',
      '04 · Greek LXX Exod 3.14 vs. John 9.9: Exodus 3:14 (LXX) renders the divine name as Egō eimi ho ōn, making ho ōn the distinctive title. By contrast, John 8:58 lacks ho ōn and uses plain egō eimi—the exact words spoken by the healed blind man in John 9:9.'
    ],
    ['John 8:28–30, 48–58; 9:9','Exodus 3:14 (LXX)','Jāmiʿ al-Tirmidhī 3609'],
    [j858TrapA,j858TrapB],
    {
      facts:[
        ['LXX Exod 3:14','Divine title = ho ōn (“The Being One”)'],
        ['John 9:9','Blind man uses identical egō eimi'],
        ['John 8:50–54','Denies self-glory; Father glorifies him'],
        ['Tirmidhī 3609','Prophetic decree precedes creation']
      ],
      quotes:[
        {by:'John 8:58 (Jesus)',en:'Very truly I tell you, before Abraham was born, I am!',ref:'John 8:58'},
        {by:'John 8:54 (Jesus)',en:'If I glorify myself, my glory means nothing. My Father… is the one who glorifies me.',ref:'John 8:54'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Apologetic Misreading',
          items:[
            'Isolates v. 58 from vv. 28–30 and vv. 50–56',
            'Treats bare egō eimi as Exodus 3:14’s divine name',
            'Ignores John 9:9 where a blind man says egō eimi',
            'Confuses pre-ordained messiahship with uncreated deity'
          ]
        },
        right:{
          title:'Greek Text & Context',
          items:[
            'LXX Exod 3:14 places the divine title in ho ōn, absent in 8:58',
            'John 9:9 proves egō eimi is ordinary self-identification',
            'Vv. 28–55 stress obedience and subordinate glory',
            'V. 56 & Tirmidhī 3609 reflect foreordained messianic/prophetic status'
          ]
        }
      },
      shots:[
        S('ia-sub-j858-1.webp','IA #trinity-refutation › John 8:58: context analysis of John 8:28–30, 48–58 and decreed pre-existence (part 1).'),
        S('ia-sub-j858-2.webp','IA #trinity-refutation › John 8:58: LXX Exodus 3:14 (ho ōn) compared against John 8:58 and John 9:9’s egō eimi (part 2).')
      ]
    }
  ),{
    who:'Dismantle context & Greek',
    forkTitle:'Two follow-up claims they make',
    forkSub:'Counter the Exodus 3:14 title claim or the pre-existence deduction'
  }),
  sum:'John 8:58 is messianic identification within a discourse of explicit subordination (8:28–55), while LXX Exodus 3:14’s divine title ho ōn is absent and the healed blind man uses the exact same phrase egō eimi in John 9:9.'
});

/* ============================================================================
   2. NEW Tactical Playbook card: christianity/jesus/proof-texts/john-10-30-i-and-the-father-are-one
   ============================================================================ */
const J1030=IA('#trinity-refutation › John 10:30','1514394727565230170');

const j1030TrapA=P(N(
  J1030,
  'The Jews understood him perfectly—that is why they picked up stones for blasphemy in John 10:33.',
  'Throughout John’s Gospel, Jesus’s hostile critics persistently misread his figurative speech—even calling him demon-possessed when he healed a blind man. Far from endorsing their reading, Jesus immediately rebukes them in vv. 34–36 by citing Psalm 82:6 (“you are gods”) and Psalm 2:7’s human sonship idiom.',
  'Jesus’s own Psalm 82 rebuttal & John’s pattern of misreading',
  [
    '01 · Consistent track record of hostile misreading: Earlier in John, opponents accuse Jesus of sorcery and demon-possession when he performs miracles. If a Christian treats hostile opponents as infallible interpreters in 10:33, consistency forces accepting their demon-possession verdict too.',
    '02 · Psalm 82.6 refutation (John 10.34–36): Jesus corrects their literalism directly from Scripture: if God’s Law calls ordinary human judges “gods” (Psalm 82:6), claiming to be the Father’s consecrated “Son” cannot be blasphemy.',
    '03 · Old Testament royal/prophetic sonship (Psalm 2.7): Calling David “my son, today I have begotten you” (Psalm 2:7) shows “Son of God” expresses intimate prophetic commissioning—matching figures like Moses—not shared divine essence.'
  ],
  ['John 10:30–36','Psalm 82:6','Psalm 2:7'],
  [],
  {
    facts:[
      ['John’s Pattern','Opponents misread figurative speech repeatedly'],
      ['Psalm 82:6','Human judges called “gods” without deity'],
      ['Psalm 2:7','David called God’s “begotten” son'],
      ['Jesus’s Reply','Corrects charge, never claims equality']
    ],
    quotes:[
      {by:'Psalm 2:7 (RSV)',en:'He said to me, “You are my son, today I have begotten you.”',ref:'Psalm 2:7'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The Jews understood him perfectly—that is why they picked up stones for blasphemy in John 10:33!',
  theyWho:'Watch out · if they say',
  who:'Show Jesus refuted their misreading'
});

const j1030TrapB=P(N(
  J1030,
  'No—Jesus and the Father are uniquely one in divine essence, unlike the unity of disciples.',
  'John 17:21–22 uses the exact same comparison (“that they may be one as we are one”) for all believers—meaning if “one” in John 10:30 proved one ontological Godhead, every disciple would become God. Third-century theologian Hippolytus explicitly linked John 10:30 and John 17 to argue both express unity of mind, power, and purpose, not shared essence.',
  'John 17.20–26, John 12.44–50 & Hippolytus of Rome',
  [
    '01 · The John 17.20–23 reductio ad absurdum: Jesus prays “that all of them may be one, Father, just as you are in me and I am in you… that they may be one as we are one.” Equating this oneness with shared deity would deify every Christian believer.',
    '02 · Subordination in John 12.44–50: Two chapters later, Jesus denies judging the world or speaking on his own authority, stating he speaks strictly what the Father commanded him to say.',
    '03 · Hippolytus of Rome (3rd century): Commenting directly on John 10:30 alongside John 17, Hippolytus explains that the Son and the disciples are “one” with the Father in unity of mind, disposition, and shared mission/purpose—confirming early Christian exegesis read it metaphorically.'
  ],
  ['John 17:20–26','John 12:44–50','Hippolytus of Rome (3rd c.)'],
  [],
  {
    facts:[
      ['John 17:21–22','Disciples to be one “as we are one”'],
      ['John 12:47–49','Denies independent judgment or speech'],
      ['Hippolytus','Unity of mind, disposition & purpose'],
      ['Logical Collapse','Essence reading deifies all disciples']
    ],
    quotes:[
      {by:'John 17:22 (Jesus)',en:'I have given them the glory that you gave me, that they may be one as we are one.',ref:'John 17:22'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'No—Jesus and the Father are uniquely one in divine power and essence, unlike the disciples!',
  theyWho:'Watch out · if they say',
  who:'Spring the John 17 & Hippolytus trap'
});

card('christianity/jesus/proof-texts/john-10-30-i-and-the-father-are-one',{
  title:'John 10:30: “I and the Father are one”',
  k:'Gospel of John · Unity of purpose',
  blurb:'The shepherd metaphor (10:25–29), John 17:21–23’s identical formula for disciples, Psalm 82:6, and Hippolytus.',
  claim:'In John 10:30 (“I and the Father are one”), Jesus teaches that he and the Father are co-equal persons sharing one divine essence.',
  tree:P(N(
    J1030,
    'In John 10:30 Jesus declares, I and the Father are one—proving they are equal divine persons sharing one essence.',
    'Read in context, John 10:30 refutes Trinitarian co-equality rather than proving it. In the immediately preceding verses (10:25–29), Jesus works “in my Father’s name,” places metaphorical “sheep” in both his and his Father’s hands, and explicitly affirms “My Father… is greater than all.” Seven chapters later (17:21–23), he prays for his disciples to share the exact same unity—which Hippolytus read as unity of mind and mission.',
    'Shepherd parable, John 17 parallel & Hippolytus',
    [
      '01 · One uninterrupted shepherd parable (John 10.25–30): From v. 25, Jesus calls believers “sheep” resting in his hand and his Father’s hand. Taking this literally turns humans into literal sheep on physical hands; keeping the metaphor intact shows v. 30 expresses unified protection of the flock.',
      '02 · Explicit inferiority in v. 29: Right before v. 30, Jesus states that his power to act comes in the Father’s name and declares, “My Father, who has given them to me, is greater than all”—contradicting ontological co-equality.',
      '03 · Identical unity applied to believers (John 17.20–26): Jesus prays that all believers “may be one as we are one.” Any reading that turns John 10:30 into numerical divine identity must logically turn every believer in John 17 into God.',
      '04 · Hippolytus & John 12.44–50: Jesus explicitly disclaims independent speech and world-judgment in John 12:47–49, and 3rd-century writer Hippolytus explicitly cites John 17 to explain John 10:30 as harmony of mind, disposition, and mission.'
    ],
    ['John 10:25–36; 12:44–50; 17:20–26','Psalm 2:7; 82:6','Hippolytus of Rome'],
    [j1030TrapA,j1030TrapB],
    {
      facts:[
        ['John 10:29','Father “is greater than all”'],
        ['Parable Unit','Metaphorical sheep & hands (vv. 26–30)'],
        ['John 17:21–22','Same oneness prayed for all believers'],
        ['Hippolytus (3rd c.)','Reads 10:30 as shared mind & mission']
      ],
      quotes:[
        {by:'John 10:29 (Jesus)',en:'My Father, who has given them to me, is greater than all.',ref:'John 10:29'},
        {by:'John 12:49 (Jesus)',en:'For I did not speak on my own, but the Father who sent me commanded me to say all that I have spoken.',ref:'John 12:49'}
      ],
      visual:{
        kind:'steps',
        items:[
          ['1. Shepherd Metaphor (10:25–29)','Works in Father’s name; believers as protected sheep; Father “greater than all.”'],
          ['2. Unified Care (10:30)','Summary of the parable: Father and Messiah act together to safeguard the sheep.'],
          ['3. Jesus’s Rebuttal (10:34–36)','Refutes literal deity charge using Psalm 82:6 (“you are gods”) and human sonship idiom.'],
          ['4. Believers Included (17:21–22)','Same “one as we are one” applied to disciples—confirmed by Hippolytus as unity of purpose.']
        ]
      },
      shots:[
        S('ia-sub-j1030-1.webp','IA #trinity-refutation › John 10:30: contextual breakdown of John 10:25–30, John 12:44–50, and John 17:20–26 (part 1).'),
        S('ia-sub-j1030-2.webp','IA #trinity-refutation › John 10:30: Psalm 82:6, Psalm 2:7, chronic misunderstanding in John, and Hippolytus on unity of purpose (part 2).')
      ]
    }
  ),{
    who:'Show metaphor & subordination',
    forkTitle:'Two ways they press John 10:30',
    forkSub:'Defuse the stoning accusation or the shared-essence claim'
  }),
  sum:'John 10:30 sits inside a metaphorical shepherd parable where the Father “is greater than all” (10:29), is clarified by Jesus’s own Psalm 82 rebuttal, and uses the exact same unity formula Jesus prays for all believers in John 17:21–22.'
});

/* ============================================================================
   3. add('christianity/cross', ...) — cruc_contra
   ============================================================================ */
const CRUC=IA('#crucifixion','1514394431636246708');
add('christianity/cross',P(N(
  CRUC,
  'Even apart from atonement theology, the four Gospels preserve a consistent, harmonious historical record of the crucifixion.',
  'Before debating atonement, examine the Gospel passion narratives themselves: they contradict one another on basic sequence and eyewitness facts—from the timing of the Last Supper and when Judas betrayed Jesus (Luke vs. John) to whether Jesus carried his own cross (John 19:17) or Simon of Cyrene did (Matthew 27:31–32 and the Synoptics).',
  'Confusion in the Gospels: Last Supper, Judas & who carried the cross',
  [
    '01 · Timing of the Last Supper: The Gospels disagree on the chronology of the Last Supper relative to the Passover and the events leading directly to the crucifixion.',
    '02 · When Judas led the authorities to Jesus (Luke vs. John): Luke places Judas’s betrayal arrangement at least a day before the Last Supper, whereas John narrates it happening during the supper right after Jesus handed Judas a piece of bread.',
    '03 · Who carried the cross (John 19.17 vs. Matthew 27.31–32): John 19:17 explicitly depicts Jesus carrying his own cross out himself (as customary for condemned prisoners), while Matthew 27:31–32 and the other Synoptics state Simon of Cyrene was compelled to carry it.'
  ],
  ['Luke 22 vs. John 13','John 19:17','Matthew 27:31–32'],
  [],
  {
    facts:[
      ['Last Supper','Gospels conflict on Passover timing'],
      ['Judas’s Betrayal','Before supper (Luke) vs. during supper (John)'],
      ['Cross Bearer','Jesus (John 19:17) vs. Simon (Matt 27:32)'],
      ['Qurʾān 4:157','Matches “only conjecture” diagnosis']
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Synoptic Gospels (Matthew / Luke)',
        items:[
          'Judas arranges betrayal at least a day prior to the supper (Luke)',
          'Simon of Cyrene is forced to carry the cross (Matt 27:31–32)',
          'Last Supper depicted as a Passover meal'
        ]
      },
      right:{
        title:'Gospel of John',
        items:[
          'Judas leaves to betray Jesus during the meal after receiving bread',
          'Jesus carries his own cross himself (John 19:17)',
          'Crucifixion timed before the Passover feast'
        ]
      }
    },
    shots:[
      S('ia-sub-cruc-c-1.webp','IA #crucifixion: “Confusion in the Gospels” comparing Last Supper timing, Judas’s betrayal, and who carried the cross (John 19:17 vs. Matt 27:31–32).'),
      S('ia-sub-cruc-c-2.webp','IA #crucifixion: closeup scan of the Gospel passion contradictions on Judas and the cross bearer.')
    ]
  }
),{
  optWho:'Or pivot to history · if they say',
  optLabel:'The four Gospels give a consistent, harmonious eyewitness record of the crucifixion.',
  theyWho:'Or pivot to history · if they say',
  who:'Expose Gospel contradictions'
}));

/* ============================================================================
   4. add('islam/quran/history/pharaoh-crucifixion', ...) — cruc_moses
   ============================================================================ */
add('islam/quran/history/pharaoh-crucifixion',P(N(
  CRUC,
  'Lane’s Lexicon still includes crucifixion under ṣalb, and the Bible never attributes crucifixion to Pharaoh in Egypt.',
  'That backfires doubly. First, Lane’s Lexicon confirms ṣalb carries a wide semantic range rather than narrowly denoting a Roman T-cross—and severing hands and feet on opposite sides beforehand (Q 7:124; 20:71) physically rules out Roman nailing anyway, while claiming zero pre-6th-century BCE instances relies on an argument from silence. Second, Genesis 40:19 depicts Pharaoh hanging the baker on a tree—which both Smith’s Bible Dictionary and Gesenius’s Hebrew Lexicon state can denote crucifixion.',
  'Lane’s Lexicon, argument from silence & Genesis 40.19',
  [
    '01 · Wide lexical scope in Lane’s Lexicon: Edward Lane’s Arabic-English Lexicon documents that the root ṣ-l-b spans multiple forms of fastening or suspending on wood/trunks rather than strictly Roman crucifixion.',
    '02 · Physical impossibility of a Roman cross: Because Pharaoh threatens to cut off hands and feet from opposite sides before fastening them to palm trunks (Q 7:124; 20:71), the punishment cannot be standard T-cross nailing of hands and feet—while asserting no earlier pre-6th-century BCE execution existed assumes exhaustive historical preservation.',
    '03 · Turn the tables via Genesis 40.19: In Genesis 40:19 (RSV), Joseph tells Pharaoh’s baker that Pharaoh will “hang you on a tree.” Both Smith’s Bible Dictionary and Gesenius’s Hebrew Lexicon confirm the Hebrew phrase can refer to crucifixion—meaning any Christian pressing this anachronism argument against the Qurʾān simultaneously indicts Genesis.'
  ],
  ['Lane’s Arabic-English Lexicon (ṣ-l-b)','Qurʾān 7:124; 20:71','Genesis 40:19 (RSV)','Smith’s Bible Dictionary & Gesenius’s Hebrew Lexicon'],
  [],
  {
    facts:[
      ['Lane’s Lexicon','Broad sense of fastening/hanging on wood'],
      ['Q 7:124 / 20:71','Hands & feet cut first—not Roman nailing'],
      ['Genesis 40:19','Pharaoh “hang[s] you on a tree”'],
      ['Gesenius & Smith’s','Explicitly allow crucifixion for Gen 40:19']
    ],
    quotes:[
      {by:'Genesis 40:19 (RSV)',en:'Pharaoh will lift up your head—from you!—and hang you on a tree.',ref:'Genesis 40:19'}
    ],
    shots:[
      S('ia-sub-cruc-m-1.webp','IA #crucifixion: refutation of the Pharaoh-crucifixion objection citing Lane’s Lexicon, Genesis 40:19, Smith’s Bible Dictionary, and Gesenius’s Hebrew Lexicon.')
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Even with ṣalb, Lane’s Lexicon includes crucifixion and the Bible never places it in Pharaoh’s Egypt!',
  theyWho:'Watch out · if they say',
  who:'Cite Lane, Gen 40:19 & Gesenius'
}));

/* ============================================================================
   5. add('islam/proofs/d-ia-truthfulness-of-the-prophet', ...) — eclipse632 (explainer!)
   ============================================================================ */
const E632=IA('#truthfulness-of-the-prophet','1515084550437605496');
add('islam/proofs/d-ia-truthfulness-of-the-prophet',N(
  E632,
  null,
  'When the Prophet’s ﷺ son Ibrāhīm died, an annular solar eclipse occurred on 27 January 632 CE—and he refused to exploit it for prestige, proving both his sincerity and ḥadīth historical accuracy.',
  'The 27 January 632 CE solar eclipse at Ibrāhīm’s death',
  [
    '01 · Rejecting an effortless prestige claim: On the day the Prophet’s ﷺ infant son Ibrāhīm passed away, a solar eclipse darkened the morning sky, and people immediately speculated the sun had eclipsed because of Ibrāhīm’s death. Rather than accepting cosmic endorsement during personal grief, the Prophet ﷺ publicly corrected them, teaching that the sun and moon never eclipse for anyone’s death or life.',
    '02 · Independent NASA astronomical verification: Modern retro-calculations (NASA eclipse records) confirm that an annular solar eclipse occurred on the morning of 27 January 632 CE, visible across the Arabian peninsula.',
    '03 · Dual proof (sincerity & ḥadīth reliability): Recorded centuries before modern orbital mechanics, the alignment verifies that ḥadīth preserve real historical events (bolstering reports of other celestial signs like the moon-splitting) while demonstrating a prophet who would never fabricate divine endorsement even when onlookers handed it to him.'
  ],
  ['al-Nasafi Substack: The Prophet’s Son’s Death & a Solar Eclipse (https://alnasafi.substack.com/p/the-prophets-sons-death-a-solar-eclipse)','NASA Solar Eclipse Records (27 Jan 632 CE)'],
  [],
  {
    facts:[
      ['Exact Date','27 January 632 CE (morning)'],
      ['Astronomy','Annular solar eclipse over Arabia (NASA)'],
      ['Moral Test','Refused false cosmic credit at son’s death'],
      ['Historiography','Transmitted centuries before modern math']
    ],
    quotes:[
      {by:'Prophet Muḥammad ﷺ (on Ibrāhīm’s death)',en:'The sun and moon do not eclipse because of the death or life of anyone.',ref:'Ṣaḥīḥ ḥadīth tradition (27 Jan 632 CE)'}
    ],
    visual:{
      kind:'steps',
      items:[
        ['Event in Madinah','Prophet’s ﷺ son Ibrāhīm dies; a morning solar eclipse occurs on 27 January 632 CE.'],
        ['Public Rumor','People attribute the eclipse to Ibrāhīm’s death—offering instant prophetic mystique.'],
        ['Prophetic Rejection','He publicly denies any link, proving uncompromising honesty over opportunism.'],
        ['Modern Verification','NASA calculations independently confirm the 632 CE Arabian annular eclipse.']
      ]
    }
  }
));

/* ============================================================================
   6. add('islam/morality/war', ...) — judeo_christian
   ============================================================================ */
const JC=IA('#islam-spread-by-sword','1523689007475724479');
add('islam/morality/war',P(N(
  JC,
  'Early Jewish and Christian subjects under Islamic rule experienced forced conversion and constant religious persecution.',
  'Non-Muslim sources from Iraq, Syria, Constantinople, and Sephardic Jewry testify to the opposite: Jewish sages and rabbis preferred Islamic rule for granting open Torah study and synagogue prayer, Baghdadi Jews petitioned to retain the jizya as protective law, a Byzantine patriarch treated capture by Muslims favorably, and a Syriac bishop built a mosque beside his church in mutual goodwill.',
  'Judeo-Christian testimonies on peaceful life under Muslim rule',
  [
    '01 · Rabbi Abraham Saba & the Talmud (Berakhot 56b; Shabbat 11a): Reflecting on exile under Muslim rule, Rabbi Saba recalled the Talmudic judgment of the Jewish sages: “Better under Ishmael [Muslims] than under pagans.”',
    '02 · Netira of Baghdad & the jizya’s protection: When Baghdad’s Jewish community heard Caliph al-Muʿtaḍid considered abolishing the jizya, businessman Netira urged keeping it mercifully “in accordance with the custom of the Prophet,” noting the jizya safeguarded Jewish lives and prevented sudden ruinous levies; the community lived peacefully for the remaining 9.5 years of his reign.',
    '03 · Patriarch Nicephorus the Confessor (Oberhelman, Dreambooks 1.23): Even a Byzantine Orthodox Patriarch of Constantinople recorded in dream-interpretation lore that being captured by Muslims was regarded as “something good.”',
    '04 · Rabbi Pirqoi ben Baboi (8th c., Tarbiẓ 1.396): Writing from Abbasid Mesopotamia after Byzantine decrees ended, he praised Muslim rule for allowing Jews freely to study Torah, recite the Shema, and pray.',
    '05 · Bishop Simeon of the Olives (8th c., Life of Simeon 1.116): This Syriac Orthodox bishop of Ḥarrān honored Muslim leaders by building a mosque beside his church with church funds and hosting Muslim scholars; Muslim governors of Ṭūr ʿAbdīn in turn honored him and entrusted him with gifts.'
  ],
  ['Babylonian Talmud, Berakhot 56b & Shabbat 11a (via Rabbi Abraham Saba)','Netira of Baghdad (reign of al-Muʿtaḍid)','Steven M. Oberhelman, Dreambooks in Byzantium 1/23 (Nicephorus)','Y. N. Epstein, Tarbiẓ 1/396 (Rabbi Pirqoi ben Baboi)','The Life of Simeon of the Olives 1/116'],
  [],
  {
    facts:[
      ['Talmud / R. Saba','“Better under Ishmael than under pagans”'],
      ['Netira (Baghdad)','Asked to retain jizya as legal protection'],
      ['R. Pirqoi (8th c.)','Muslim rule restored open Torah & prayer'],
      ['Simeon (8th c.)','Syriac bishop built mosque beside church']
    ],
    quotes:[
      {by:'Babylonian Talmud (cited by Rabbi Abraham Saba)',en:'Better under Ishmael [Muslims] than under pagans.',ref:'Berakhot 56b & Shabbat 11a'},
      {by:'Nicephorus, Patriarch of Constantinople',en:'Being captured by the Ishmaelites: consider this something good.',ref:'Oberhelman, Dreambooks in Byzantium 1/23'}
    ],
    shots:[
      S('ia-sub-judeo-1.webp','IA #islam-spread-by-sword: Jewish testimonies (Rabbi Abraham Saba / Talmud, Netira on jizya protection, Rabbi Pirqoi ben Baboi).'),
      S('ia-sub-judeo-2.webp','IA #islam-spread-by-sword: Byzantine Patriarch Nicephorus and 8th-century Syriac bishop Simeon of the Olives on Muslim coexistence.')
    ]
  }
),{
  optWho:'Or examine Judeo-Christian records · if they say',
  optLabel:'Jewish and Christian subjects under early Islamic rule suffered forced conversion and relentless persecution.',
  theyWho:'Or examine Judeo-Christian records · if they say',
  who:'Cite Jewish & Christian witnesses'
}));

/* ============================================================================
   7. add('islam/morality/d-ia-apostasy-and-blasphemy-laws', ...) — apostasy_cf + apostasy_deut
   ============================================================================ */
const AP=IA('#apostasy-and-blasphemy-laws','1534588327691550930');
add('islam/morality/d-ia-apostasy-and-blasphemy-laws',P(N(
  AP,
  'Only the Old Testament had harsh penalties—Catholic, Orthodox, and Protestant Christianity never endorsed executing apostates or heretics, and the Deuterocanon says nothing like it.',
  'Two historical records dismantle that escape route: first, Deuterocanonical Scripture accepted by Catholics and Eastern/Oriental Orthodox Christians (1 Maccabees 2–3) explicitly praises slaying idolatrous Israelites, forced circumcision, and burning lawbreakers; second, pre-Enlightenment Catholic, Orthodox, and Protestant churches and theologians (including Thomas Aquinas and John Calvin) enforced apostasy and heresy laws as God’s law—until modern secular liberalism reshaped Christian attitudes.',
  'Deuterocanonical 1 Maccabees & pre-Enlightenment Church enforcement',
  [
    '01 · 1 Maccabees 2.24–26 (Mattathias & Phinehas): Accepted in Catholic and Orthodox canons, 1 Maccabees honors Mattathias for slaying an Israelite who sacrificed to foreign gods along with the king’s officer—explicitly modeling his act on Phinehas’s zeal in Numbers 25.',
    '02 · 1 Maccabees 2.44–48 (forced circumcision): The narrative praises the Maccabean fighters for hunting down “sinners” and the “arrogant” and forcibly circumcising boys across Israel to “rescue” the Torah.',
    '03 · 1 Maccabees 3.5–8 (Judah Maccabee): The book’s heroic protagonist is lauded for pursuing lawbreakers, burning troublers of his people, and destroying the ungodly—saying he thus “turned away wrath from Israel.”',
    '04 · Church enforcement & Aquinas (ST II-II Q11 a3): Claiming Jesus abolished all such laws ignores 1,500 years of Christian history: Crusades, Reconquista, Calvin, and Catholic/Orthodox states enforced heresy laws, with Thomas Aquinas arguing heretics merit death even more than counterfeiters.'
  ],
  ['1 Maccabees 2:24–26, 44–48; 3:5–8','Numbers 25','Thomas Aquinas, Summa Theologiae II-II Q11 a3'],
  [],
  {
    facts:[
      ['1 Maccabees 2–3','Canon for Catholic & Orthodox Christians'],
      ['1 Macc 2:24–48','Slays apostate; forcibly circumcises Israel'],
      ['1 Macc 3:5–8','Judah “burned” lawbreakers to avert wrath'],
      ['Aquinas & Calvin','Pre-Enlightenment Churches upheld death']
    ],
    quotes:[
      {by:'Thomas Aquinas (Summa Theologiae II-II Q11 a3)',en:'Much more reason is there for heretics… to be not only excommunicated but even put to death.',ref:'ST II-II Q11 a3'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Modern Christian Apologetic Claim',
        items:[
          '“Jesus abolished the curse/penalties of the Torah”',
          '“Those laws were only for stone-hearted Israelites”',
          'Ignores Deuterocanonical heroes in 1 Maccabees 2–3'
        ]
      },
      right:{
        title:'Biblical & Church Historical Record',
        items:[
          '1 Maccabees 2–3 praises slaying apostates & forced circumcision',
          'Aquinas, Tertullian, Augustine & Calvin upheld coercion/death',
          'Tolerance of apostasy arrived via Enlightenment liberalism, not Scripture'
        ]
      }
    },
    shots:[
      S('ia-sub-ap-deut-1.webp','IA #apostasy-and-blasphemy-laws › Deuterocanon: 1 Maccabees 2:24–26 & 2:44–48 (Mattathias slaying an apostate & forced circumcision).'),
      S('ia-sub-ap-deut-2.webp','IA #apostasy-and-blasphemy-laws › Deuterocanon: 1 Maccabees 3:5–8 praising Judah Maccabee for burning troublers and destroying the ungodly.'),
      S('ia-sub-ap-cf-1.webp','IA #apostasy-and-blasphemy-laws: pre-Enlightenment Catholic, Protestant & Orthodox enforcement and Thomas Aquinas (ST II-II Q11 a3).')
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Jesus abolished those Old Testament laws—the Churches and Deuterocanon never endorsed executing apostates!',
  theyWho:'Watch out · if they say',
  who:'Cite 1 Maccabees & Church history'
}));

/* ============================================================================
   8. add('islam/morality/slavery', ...) — captives
   ============================================================================ */
const CAP=IA('#islamic-slavery','1514367864516382801');
add('islam/morality/slavery',P(N(
  CAP,
  'Islam invented or normalized dehumanizing chattel slavery—owners could call captives slaves, mistreat them, and exploit them with impunity.',
  'Islam inherited a universal institution and immediately dismantled its abuses: it banned selling free people (Bukhārī 2227), outlawed even calling servants “my slave” or owners “lord” (Bukhārī 2552), mandated freeing slaves in Qurʾānic atonement and contracts (4:92; 24:33), barred cruel owners from Paradise (Aḥmad 32), promised Day-of-Judgment retaliation for any unjust blow (Adab al-Mufrad 181), and ordered immediate manumission for a single slap (Muslim 1658).',
  'Dignified naming, strict accountability & mandatory manumission',
  [
    '01 · Dignified naming rule (Ṣaḥīḥ al-Bukhārī 2552): The Prophet ﷺ forbade calling a servant “my slave” (ʿabdī / amatī) or calling the master “your lord” (rabbaka), instructing instead to say “my lad / lass / boy” (fatāya / fatātī / ghulāmī) and “my master / guardian” (sayyidī / mawlāya).',
    '02 · Free-person ban & provisioning (Bukhārī 2227; Ibn Mājah 3690): God Himself stands as the adversary on Judgment Day against anyone who sells a free person into slavery and consumes the price (Bukhārī 2227), while masters must feed and clothe servants with their own food and clothes and assist them whenever tasks are heavy (Ibn Mājah 3690, Ṣaḥīḥ).',
    '03 · Paradise barred & Day-of-Judgment qiṣāṣ (Aḥmad 32; Adab 181): Anyone cruel to those under their care (sayyiʾ al-malaka) will not enter Paradise (Musnad Aḥmad 32, Ḥasan), and whoever strikes a servant unjustly faces exact retaliation (qiṣāṣ) on the Day of Resurrection (al-Adab al-Mufrad 181, Ṣaḥīḥ).',
    '04 · Immediate emancipation for a slap (Ṣaḥīḥ Muslim 1658): Suwayd b. Muqarrin narrated that seven brothers shared a single servant; when one grew angry and slapped the servant’s face, the Prophet ﷺ condemned striking the face and commanded them to set the servant free immediately—reinforcing Qurʾān 4:92’s atonement-emancipation and 24:33’s ban on prostitution and command to grant freedom contracts.'
  ],
  ['Qurʾān 4:92; 24:33','Ṣaḥīḥ al-Bukhārī 2227, 2552','Ṣaḥīḥ Muslim 1658','Sunan Ibn Mājah 3690 (Ṣaḥīḥ)','Musnad Aḥmad 32 (Ḥasan)','al-Adab al-Mufrad 181 (Ṣaḥīḥ)'],
  [],
  {
    facts:[
      ['Bukhārī 2552','Forbids “my slave” (ʿabdī) & “your lord”'],
      ['Musnad Aḥmad 32','Cruel owner will not enter Paradise'],
      ['Adab al-Mufrad 181','Judgment-Day retaliation for unjust blows'],
      ['Muslim 1658','Single face-slap required immediate freeing']
    ],
    quotes:[
      {by:'Prophet Muḥammad ﷺ (Musnad Aḥmad 32)',en:'He will not enter Paradise who is evil to his slaves.',ref:'Musnad Aḥmad 32 (Ḥasan)'},
      {by:'ʿAmmār b. Yāsir (al-Adab al-Mufrad 181)',en:'None of you strikes his slave unjustly except that retaliation will be taken on the Day of Resurrection.',ref:'al-Adab al-Mufrad 181 (Ṣaḥīḥ)'}
    ],
    shots:[
      S('ia-sub-captives-1.webp','IA #islamic-slavery: Qurʾān 4:92, 24:33, Ibn Mājah 3690, Bukhārī 2227 (free-person kidnapping ban), and Bukhārī 2552 (forbidding the label “my slave”).'),
      S('ia-sub-captives-2.webp','IA #islamic-slavery: Musnad Aḥmad 32 (cruel masters barred from Paradise) and al-Adab al-Mufrad 181 (retaliation on Resurrection Day).'),
      S('ia-sub-captives-3.webp','IA #islamic-slavery: Ṣaḥīḥ Muslim 1658 (Suwayd b. Muqarrin’s servant freed immediately after being slapped on the face).')
    ]
  }
),{
  optWho:'Or press dignity & penalties · if they say',
  optLabel:'Even in practice, Islamic texts still degraded captives as mere slaves and let owners strike them with impunity.',
  theyWho:'Or press dignity & penalties · if they say',
  who:'Show Bukhārī 2552, Muslim 1658 & Judgment-Day qiṣāṣ'
}));

})();
