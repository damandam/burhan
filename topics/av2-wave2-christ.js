/* Averroes 2 Wave 2 (Christology, Canon, Contradictions & Church Fathers) — 2026-11-22.
   Translates and synthesizes 13 German Averroes 2 dossiers (server 1295033866385358860)
   across 8 new Tactical Debate Playbook cards and 4 add() enrichments:
   1. NEW: christianity/bible/contradictions/daniel-13-susanna-historical-errors (#daniel-13-fehler)
   2. NEW: christianity/jesus/jesus-amazed-and-marveled (#jesus-erstaunt)
   3. NEW: christianity/church/cadaver-synod-papal-infallibility (#kadaver-synoden)
   4. NEW: christianity/bible/contradictions/ahaziah-age-22-or-42 (#ahasja-wann-könig)
   5. NEW: christianity/bible/contradictions/nt-quotes-nonexistent-ot-verses (#zitate-die-nciht-existieren)
   6. NEW: christianity/bible/gospel-of-the-hebrews-patristic (#hebräer-evangelium)
   7. NEW: christianity/bible/epistle-to-the-hebrews-authorship (#hebräer-brief)
   8. NEW: christianity/church/aphrahat-persian-sage-christology (#aphrahat)
   9. add(): christianity/church/no-trinity-before-nicaea (#ebioniten)
   10. add(): christianity/bible/authorship (#augenzeuge)
   11. add(): christianity/bible/gospel-of-peter-crucifixion (#kreuzigung + #kirchenväter)
   12. add(): christianity/church/d-ia-church-fathers/t-origen-of-alexandria (#origenes-über-das-gebet + #origenes-fragmente) */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('av2-wave2-christ: no card',key); };

const AV2=(sub,id)=>({credit:'Averroes 2 · '+sub,link:'https://discord.com/channels/1295033866385358860/'+id});

/* ============================================================================
   1. NEW Tactical Playbook card: christianity/bible/contradictions/daniel-13-susanna-historical-errors
   ============================================================================ */
const DAN13=AV2('#daniel-13-fehler','1329422007892447275');

const dan13TrapA=P(N(
  DAN13,
  'Origen wrote a long reply refuting Julius Africanus and defending Susanna as authentic Hebrew Scripture.',
  'Origen’s reply actually proves Julius Africanus was philologically right. Origen admits he personally saw the same linguistic difficulty, concedes the Jews he consulted knew no Hebrew equivalents for the Greek tree-puns prinos/prisis and schinos/schisis, and refuses to check the Hebrew base text solely because Christians should not “beg the Jews for the unadulterated manuscript.”',
  'Origen’s evasive reply to Julius Africanus on prinos and schinos',
  [
    '01 · Origen admits the Hebrew pun does not exist: In his Letter to Africanus, Origen confesses that he himself saw this exact difficulty and consulted numerous Jews, who told him they knew no Hebrew words corresponding to the Greek tree names prinos (holm-oak) and schinos (mastic tree).',
    '02 · Semitic roots cannot replicate the Greek wordplay: In Greek, Daniel’s verdict turns entirely on phonetic puns—schinos (mastic tree) paired with schizein/schisis (to split/cleave), and prinos (oak) paired with priein/prisis (to saw in two). In Hebrew’s trilateral Semitic root system, the nouns for these trees and the verbs for splitting/sawing share zero phonetic similarity.',
    '03 · Origen shifts the burden instead of producing a Hebrew word: Cornered by linguistics, Origen argues that sometimes translators substitute Syriac words or even the wisest cannot translate certain terms, telling Africanus that if he cannot find schinos or prinos mentioned elsewhere in Hebrew Scripture, neither can we know if a rhyme existed—tacitly conceding no such Hebrew pun exists.',
    '04 · Ideological refusal to accept the Hebrew canon: Rather than following the manuscript evidence, Origen lists wide divergences between the Septuagint and the Hebrew Bible and insists the Church must keep the Greek additions so that Christians do not have to “go begging to the Jews for the genuine, unadulterated manuscripts.”'
  ],
  ['Julius Africanus, Letter to Origen (c. 240 CE)','Origen, Letter to Julius Africanus','Daniel 13:54–59 (LXX / Theodotion)'],
  [],
  {
    facts:[
      ['Greek Pun 1','schinos (mastic) → schizein / schisis (to cleave)'],
      ['Greek Pun 2','prinos (holm-oak) → priein / prisis (to saw)'],
      ['Hebrew Reality','Zero phonetic overlap in Semitic roots'],
      ['Origen’s Excuse','Refuses to “beg the Jews” for pure manuscripts']
    ],
    quotes:[
      {by:'Origen (Letter to Africanus)',en:'The Hebrews whom I consulted told me that they did not know these Greek words prinos and schinos in their language.',ref:'Letter to Africanus'},
      {by:'Origen (Letter to Africanus)',en:'Should we cast aside our copies and go begging to the Jews to give us the pure, unadulterated manuscripts?',ref:'Letter to Africanus'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Origen answered Julius Africanus in detail and proved the Hebrew original of Susanna simply had a lost Hebrew pun!',
  theyWho:'Watch out · if they say',
  who:'Expose Origen’s admission on prinos/schinos'
});

const dan13TrapB=P(N(
  DAN13,
  'Protestants agree Daniel 13 is apocryphal—so Julius Africanus’s critique only hurts Roman Catholics and Eastern Orthodox, not the true Bible!',
  'Trying to throw Catholic and Orthodox Bibles under the bus only exposes a deeper crisis for Christian canon authority. For over a millennium, the majority of Christendom—including Origen, the Septuagint tradition, and the Councils of Hippo, Carthage, and Trent—revered Daniel 13 as divinely inspired Scripture, meaning either the ancient Church failed to tell Greek fiction from God’s Word or modern Christendom holds mutually contradictory Bibles.',
  'The Deuterocanonical dilemma between Catholic, Orthodox, and Protestant canons',
  [
    '01 · A 66-book vs. 73/76+ book canon split: Roman Catholic and Eastern Orthodox Bibles print Daniel 13 (Susanna) and Daniel 14 (Bel and the Dragon) as canonical chapters of Daniel, while Protestant Bibles excise them as uninspired Apocrypha.',
    '02 · If Protestants are right, the ancient Church canonized Greek fiction: Origen defended Susanna explicitly because it was already read across the Greek-speaking churches as part of Daniel. Admitting Julius Africanus was right means the early Church Fathers and great synods mistook a late Greek novella for prophetic revelation.',
    '03 · If Catholics and Orthodox are right, canonical Scripture contains linguistic and historical impossibilities: Retaining Daniel 13 as God’s Word forces believers to defend a text composed natively in Greek (proven by the schinos/prinos puns) that falsely depicts captive Jews in Babylon passing capital sentences on the wife of their king Joakim.'
  ],
  ['Julius Africanus, Letter to Origen','Council of Trent (Session IV, 1546)','Protestant 66-Book Canon vs. Catholic/Orthodox Deuterocanon'],
  [],
  {
    facts:[
      ['Catholic / Orthodox','Daniel 13–14 canonized as inspired Scripture'],
      ['Protestant Canon','Excised as uninspired late Greek Apocrypha'],
      ['Origen’s Dilemma','Defended it because churches already read it'],
      ['Canon Verdict','No unified Christian answer on what is Scripture']
    ],
    visual:{
      kind:'compare',
      left:{
        title:'If Daniel 13 Is Canonical (Catholic / Orthodox)',
        items:[
          'Scripture contains Greek-only puns (schinos/prinos) impossible in Daniel’s Hebrew/Aramaic',
          'Historical absurdity of captive Babylonian Jews wielding capital jurisdiction over King Joakim’s wife'
        ]
      },
      right:{
        title:'If Daniel 13 Is Apocryphal (Protestant)',
        items:[
          'Early Fathers like Origen and historic councils canonized a late Greek forgery as God’s Word',
          'Christendom spent 1,500+ years reading non-Scripture inside the Book of Daniel'
        ]
      }
    }
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'We are Protestants—we already reject Daniel 13 as apocryphal, so Julius Africanus actually supports our 66-book Bible!',
  theyWho:'Watch out · if they say',
  who:'Press the Catholic/Protestant canon fracture'
});

card('christianity/bible/contradictions/daniel-13-susanna-historical-errors',{
  title:'Daniel 13 (Susanna): Julius Africanus’s Historical & Linguistic Demolition',
  k:'Biblical Contradictions · Deuterocanon & Philology',
  blurb:'Julius Africanus’s 3rd-century letter to Origen exposing Greek wordplay (schinos/prinos), Babylonian captivity anachronisms, and the Catholic/Protestant canon split.',
  claim:'The Book of Daniel—including its Deuterocanonical Greek chapters revered by Catholic, Orthodox, and patristic tradition—is historically and philologically authentic.',
  tree:P(N(
    DAN13,
    'The story of Susanna in Daniel 13 is an authentic account from Daniel’s life in Babylon, faithfully preserved by the ancient Church.',
    'Around 240 CE, the Christian historian Julius Africanus wrote to Origen demolishing Daniel 13 (Susanna) with philological and historical arguments so devastating that modern scholarship still upholds every single one: Daniel’s courtroom puns work only in Greek (schinos/schizein and prinos/priein), captive Jews under Chaldean rule could not pass death sentences on the wife of their king Joakim, and the chapter is completely absent from the Hebrew Daniel.',
    'Julius Africanus’s fivefold demolition of Daniel 13 (Letter to Origen)',
    [
      '01 · Impossible Greek-only wordplay (schinos/schisis & prinos/prisis): In Daniel 13.54–59, Daniel convicts the two elders via Greek rhymes—under a mastic tree (schinos) the angel will cleave (schisei) you, and under an oak (prinos) he will saw (prisei) you. As Africanus proved, the Hebrew words for these trees and actions share zero phonetic similarity, proving the story was composed in Greek, not Hebrew or Aramaic.',
      '02 · Historical absurdity of Jewish death sentences in Babylonian captivity: Africanus asks how conquered Jewish captives under Chaldean domination in Babylon could possibly wield autonomous capital jurisdiction to pass and execute a death sentence—and do so against Susanna, portrayed as the wife of their own king Joakim.',
      '03 · Verbatim prophetic quotation anomaly: Africanus notes that while genuine Old Testament prophets frequently echo themes, none of the earlier prophets quotes another prophet word-for-word the way Daniel 13 artificially cites verbatim scripture.',
      '04 · Alien literary style & absence from the Hebrew Daniel: Africanus concludes by pointing out that the literary style of Susanna differs sharply from the rest of Daniel and that the entire section—along with Bel and the Dragon at the end—is absent from the Book of Daniel preserved among the Jews.'
    ],
    ['Julius Africanus, Letter to Origen (c. 240 CE)','Origen, Letter to Julius Africanus','Daniel 13:54–59 (LXX / Theodotion)','Averroes 2 · #daniel-13-fehler'],
    [dan13TrapA,dan13TrapB],
    {
      facts:[
        ['Critic','Julius Africanus (c. 160–240 CE), Christian historian'],
        ['Linguistic Proof','Greek puns schinos/schizein & prinos/priein fail in Hebrew'],
        ['Historical Error','Babylonian captives wielding death penalty over Joakim’s wife'],
        ['Textual Status','Absent from Hebrew Daniel; divides Christian canons']
      ],
      quotes:[
        {by:'Julius Africanus (Letter to Origen)',en:'How could captives under the Chaldeans pass a death sentence, and that upon the wife of their king Joakim?',ref:'Letter to Origen'},
        {by:'Julius Africanus (Letter to Origen)',en:'This section, along with the other two at the end, is not contained in the Daniel received among the Jews… it is a later addition.',ref:'Letter to Origen'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Julius Africanus’s Critique (c. 240 CE)',
          items:[
            'Greek tree puns (schinos/prinos) are impossible in Hebrew Semitic roots',
            'Captives in Babylon could not execute death sentences on King Joakim’s wife',
            'Absent from the Hebrew Daniel and stylistically foreign'
          ]
        },
        right:{
          title:'Origen’s Defensive Evasion',
          items:[
            'Admits consulted Jews knew no Hebrew equivalents for prinos and schinos',
            'Speculates maybe even the wisest could not translate an unknown Hebrew rhyme',
            'Insists on keeping the Greek text rather than “begging the Jews” for pure manuscripts'
          ]
        }
      }
    }
  ),{
    who:'Deploy Julius Africanus’s 5 proofs',
    forkTitle:'Two ways apologists try to escape Daniel 13',
    forkSub:'Counter the claim that Origen refuted Africanus or the Protestant move to abandon Catholic/Orthodox canons'
  }),
  sum:'Third-century Christian historian Julius Africanus proved Daniel 13 (Susanna) is a late Greek fabrication through its untranslatable Greek tree puns (schinos/schizein, prinos/priein), its historical impossibility in Babylonian exile, and its absence from the Hebrew Bible.'
});

/* ============================================================================
   2. NEW Tactical Playbook card: christianity/jesus/jesus-amazed-and-marveled
   ============================================================================ */
const AMAZ=AV2('#jesus-erstaunt','1345363019714003016');

const amazTrapA=P(N(
  AMAZ,
  'The Quran and Hadith also speak of Allah “wondering” or being “amazed” (ʿajiba), and the Old Testament says Yahweh was amazed or regretted—so by your own logic, neither Allah nor Yahweh is omniscient!',
  'That false equivalence collapses on the fundamental difference between the transcendent Creator and a human being walking inside creation. Classical Islamic theology (and traditional exegesis of transcendent Father passages) establishes that divine attributes in revelation are not anthropomorphic reactions to newly discovered information—whereas in Christian incarnational theology, Jesus enters creation as a historical man whose psychological surprise (ethaumasen) is literal.',
  'Why transcendent divine idioms cannot excuse an incarnate man’s psychological surprise',
  [
    '01 · In Islamic theology, Allah’s “wonder” (ʿajab) never implies prior ignorance: When the Quran or authentic Hadith with chains of transmission mention Allah’s wonder, Sunni scholarship unanimously explains that Allah’s attributes are completely unlike human emotions (Q 42.11)—designating supreme approval or condemnation of an act without any prior lack of knowledge.',
    '02 · Transcendent Old Testament anthropomorphisms vs. incarnate psychology: Even when the Old Testament uses figurative language for God in heaven (such as testing Sodom and Gomorrah or regretting), readers recognize figurative idioms for a transcendent Spirit beyond time and space.',
    '03 · Incarnation makes Jesus’s amazement literal human psychology: By contrast, Christian dogma insists Jesus actually entered creation and lived a genuine historical human consciousness. When Mark 6.6, Matthew 8.10, and Luke 7.9 report that Jesus marveled (ethaumasen) at faith or unbelief, the text describes a real psychological reaction of surprise incompatible with an omniscient mind.'
  ],
  ['Mark 6:6; Matthew 8:10; Luke 7:9','Quran 42:11 (Laysa ka-mithlihi shayʾ)','Averroes 2 · #jesus-erstaunt'],
  [],
  {
    facts:[
      ['Islamic Creed (Q 42:11)','Allah’s attributes never involve prior ignorance'],
      ['OT Figurative Idioms','Spoken of the transcendent Creator above creation'],
      ['Gospel Ethaumasen','Literal psychological surprise of an incarnate man'],
      ['Mark 6:6 Context','Paired directly with inability in Mark 6:5']
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Transcendent Divine Speech (Allah / OT Father)',
        items:[
          'Creator remains outside creation, time, and psychological change',
          'Classical scholars define divine “wonder” as reward/judgment without prior ignorance'
        ]
      },
      right:{
        title:'Jesus in the Synoptic Gospels (ethaumasen)',
        items:[
          'Lives inside creation with literal human psychological states',
          'Marvels at Nazareth’s unbelief (Mk 6:6) right after failing to do mighty works (Mk 6:5)'
        ]
      }
    }
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The Quran, Hadith, and Old Testament also say God wondered or marveled—so that cannot disprove Jesus’s deity!',
  theyWho:'Watch out · if they say',
  who:'Contrast transcendent idioms vs. incarnate surprise'
});

const amazTrapB=P(N(
  AMAZ,
  'Jesus only marveled in his human nature while remaining omniscient in his divine nature—and besides, Matthew 8:10 and Luke 7:9 show him marveling positively at the centurion’s faith!',
  'Citing Matthew 8:10 and Luke 7:9 actually doubles the problem: whether marveling at unexpected faith in a Roman centurion or unexpected unbelief in Nazareth (Mark 6:6), the Greek verb ethaumasen denotes genuine astonishment at an outcome that exceeded expectations—and splitting Jesus into an ignorant human mind alongside an omniscient divine mind reduces the two-natures excuse to two separate persons (Nestorianism).',
  'Why Matthew 8.10, Luke 7.9, and the “human nature” split fail',
  [
    '01 · Matthew 8.10 & Luke 7.9 confirm genuine astonishment at the centurion: When the Roman centurion expresses trust in Jesus’s word, Matthew 8.10 and Luke 7.9 state that Jesus heard him and marveled (ethaumasen), telling the crowd he had not found such faith in Israel. A mind that timelessly foreknows every human heart cannot be caught off guard by a centurion’s answer.',
    '02 · Contradicts Jesus’s own passion predictions and Isaiah 53.3: Christians affirm that Old Testament prophecy foretold the Messiah’s rejection (Isaiah 53.3, despised and rejected by men) and that Jesus himself repeatedly predicted his rejection by Jewish leaders and crucifixion (Mark 8.31; 9.31; 10.33). How can an omniscient God who authored Isaiah 53 be astonished in Mark 6.6 when his own townspeople reject him?',
    '03 · “Only his human nature was surprised” splits Christ into two minds: Claiming one part of Jesus knew Nazareth would reject him while another part of Jesus was shocked by their rejection turns the Chalcedonian “one person” into two separate conscious subjects—one omniscient, one surprised.'
  ],
  ['Mark 6:6; 8:31; 9:31; 10:33','Matthew 8:10','Luke 7:9','Isaiah 53:3'],
  [],
  {
    facts:[
      ['Matt 8:10 / Luke 7:9','Jesus marveled (ethaumasen) at the centurion’s faith'],
      ['Mark 6:6','Jesus marveled (ethaumasen) at Nazareth’s unbelief'],
      ['Mark 8:31 / 9:31 / 10:33','Jesus predicts his rejection by Jewish elders'],
      ['Isaiah 53:3','Prophesied rejection—yet Jesus is surprised by it']
    ],
    quotes:[
      {by:'Mark 6:6',en:'And he marveled because of their unbelief. And he went about among the villages teaching.',ref:'Mark 6:6'},
      {by:'Matthew 8:10 / Luke 7:9',en:'When Jesus heard this, he marveled and said, Truly, I tell you, with no one in Israel have I found such faith.',ref:'Matthew 8:10'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'He only marveled according to his human nature—and in Matthew 8:10 / Luke 7:9 he marveled positively at the centurion’s great faith!',
  theyWho:'Watch out · if they say',
  who:'Show how Matt 8:10 & Isaiah 53:3 deepen the contradiction'
});

card('christianity/jesus/jesus-amazed-and-marveled',{
  title:'Mark 6:6 & Matthew 8:10: Why Was an “Omniscient” Jesus Amazed?',
  k:'Christology · Omniscience vs. Gospel Portraits',
  blurb:'Jesus marveling (ethaumasen) at Nazareth’s unbelief (Mark 6:6) and the centurion’s faith (Matt 8:10 / Luke 7:9) despite Isaiah 53:3 and his own rejection prophecies.',
  claim:'Jesus possessed timeless divine omniscience as the all-knowing God incarnate.',
  tree:P(N(
    AMAZ,
    'Jesus knew all things past, present, and future by his divine omniscience, Including his own rejection and crucifixion.',
    'The Synoptic Gospels repeatedly depict Jesus experiencing genuine psychological astonishment (ethaumasen)—marveling at the centurion’s faith in Matthew 8:10 / Luke 7:9 and marveling in surprise at Nazareth’s unbelief in Mark 6:6. If Jesus was the omniscient God who inspired Isaiah 53:3 (“despised and rejected”) and foreknew his rejection (Mark 8:31; 9:31; 10:33), why was he surprised when the Jews of Nazareth rejected him?',
    'The three-step trilemma of Mark 6.6, Isaiah 53.3, and ethaumasen',
    [
      '01 · Premise 1 — Jesus predicted his own rejection and crucifixion: In Mark 8.31, Mark 9.31, and Mark 10.33, Jesus explicitly foretells that the Son of Man will be rejected by the elders, chief priests, and scribes and be killed.',
      '02 · Premise 2 — Prophetic Scripture foretold rejection (Isaiah 53.3): Christian apologetics insists Isaiah 53.3 prophesied centuries in advance that the Messiah would be despised and rejected by men.',
      '03 · Premise 3 — Yet Jesus is astonished by Jewish unbelief (Mark 6.6): Immediately after Mark 6.5 records that Jesus could do no mighty work in Nazareth, Mark 6.6 states that “he marveled (ethaumasen) because of their unbelief”—expressing genuine surprise that his hometown rejected his preaching and miracles.',
      '04 · Parallel amazement at the centurion (Matt 8.10; Luke 7.9): Both Matthew 8.10 and Luke 7.9 likewise record that Jesus marveled (ethaumasen) upon hearing the Roman centurion’s words—confirming a human prophet encountering unexpected faith and unexpected unbelief in real time, not an omniscient Creator.'
    ],
    ['Mark 6:5–6; 8:31; 9:31; 10:33','Matthew 8:10','Luke 7:9','Isaiah 53:3','Averroes 2 · #jesus-erstaunt'],
    [amazTrapA,amazTrapB],
    {
      facts:[
        ['Greek Verb','ethaumasen — “he marveled / was amazed / surprised”'],
        ['Mark 6:6','Amazed at Nazareth’s unbelief after his preaching'],
        ['Matt 8:10 / Lk 7:9','Amazed at the Roman centurion’s unexpected faith'],
        ['Trilemma','Foretold in Isa 53:3 & Mk 8:31, yet surprised in Mk 6:6']
      ],
      quotes:[
        {by:'Mark 6:6',en:'And he marveled (ethaumasen) because of their unbelief.',ref:'Mark 6:6'},
        {by:'Isaiah 53:3',en:'He was despised and rejected by men, a man of sorrows and acquainted with grief.',ref:'Isaiah 53:3'}
      ],
      visual:{
        kind:'steps',
        items:[
          ['Step 1 · Foreknowledge Claimed','Jesus predicts his rejection and crucifixion in Mark 8:31, 9:31, and 10:33.'],
          ['Step 2 · Prophetic Script','Apologists cite Isaiah 53:3 to prove the Messiah’s rejection was divinely scripted.'],
          ['Step 3 · The Surprise in Mark 6:6','Yet in Nazareth (Mark 6:6) and before the centurion (Matt 8:10 / Luke 7:9), Jesus marvels (ethaumasen) in genuine surprise—contradicting timeless divine omniscience.']
        ]
      }
    }
  ),{
    who:'Run the 3-question Mark 6:6 trilemma',
    forkTitle:'Two common apologetic counter-moves',
    forkSub:'Defeat the “Allah/Yahweh also wondered” tu quoque or the “human nature / Matt 8:10 positive marveling” excuse'
  }),
  sum:'By recording that Jesus “marveled” (ethaumasen) at Nazareth’s unbelief (Mark 6:6) and at the centurion’s faith (Matthew 8:10; Luke 7:9) despite prophecies of rejection (Isaiah 53:3; Mark 8:31), the Gospels portray a finite human consciousness rather than an omniscient God.'
});

/* ============================================================================
   3. NEW Tactical Playbook card: christianity/church/cadaver-synod-papal-infallibility
   ============================================================================ */
const CADAV=AV2('#kadaver-synoden','1347892870488789053');

const cadavTrapA=P(N(
  CADAV,
  'The Cadaver Synod was just a political show trial, not an ex cathedra dogmatic definition—so it does not technically violate Vatican I’s definition of papal infallibility!',
  'Hiding behind Vatican I’s 1870 fine print fails because the Cadaver Synod struck at the very foundation of apostolic succession and sacramental validity: Pope Stephen VI officially ruled in a Roman synod that Pope Formosus’s papacy was null and void and declared all of Formosus’s priestly and episcopal ordinations invalid—only for subsequent popes to annul Stephen VI’s synod and reinstate Formosus’s ordinations.',
  'Why nullifying papal ordinations shatters apostolic succession and magisterial authority',
  [
    '01 · Official synodal nullification of papal sacraments (897 CE): Pope Stephen VI did not merely insult a corpse in private; he convened a formal Roman ecclesiastical synod that judged Formosus an unlawful usurper, hacked off his three blessing fingers, and declared every ordination Formosus had performed as pope null and void.',
    '02 · Chaos in apostolic succession: Because Formosus had consecrated numerous bishops and priests—including Stephen VI himself as bishop of Anagni—declaring Formosus’s ordinations invalid threw the sacramental validity of the late 9th-century Western hierarchy into self-devouring contradiction.',
    '03 · Popes overturning popes: After a popular uprising deposed and strangled Stephen VI, Pope Theodore II and Pope John IX (898 CE) convened counter-synods that formally annulled the Cadaver Synod, recovered Formosus’s body from the Tiber, and declared his ordinations valid after all—only for Pope Sergius III later to praise Stephen VI’s verdict again.'
  ],
  ['Synod of Rome / Cadaver Synod (January 897 CE)','Counter-Synods of Pope Theodore II & Pope John IX (898 CE)','Averroes 2 · #kadaver-synoden'],
  [],
  {
    facts:[
      ['Sacramental Ruling','Stephen VI declared all of Formosus’s ordinations null'],
      ['Blessing Fingers','Three right-hand blessing fingers hacked off the corpse'],
      ['Succession Paradox','Formosus had consecrated Stephen VI as bishop'],
      ['Magisterial Whiplash','Reversed by Theodore II & John IX, then praised by Sergius III']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Papal infallibility only applies to ex cathedra definitions of faith and morals—putting a corpse on trial was just a political crime!',
  theyWho:'Watch out · if they say',
  who:'Press the nullification of papal ordinations & succession'
});

const cadavTrapB=P(N(
  CADAV,
  'Immoral popes only prove human sinfulness—Jesus promised in Matthew 16:18 that the gates of hell would not prevail against the papacy!',
  'When the Vicar of Christ exhumes his rotting predecessor, dresses the corpse in papal vestments, appoints a deacon to answer for the dead man, chops off his blessing fingers, and throws his body into the Tiber River to secure political power, any claim that the Roman See enjoys unique Holy Spirit guidance collapses under its own grotesqueness.',
  'The grotesque theater of 897 CE vs. claims of unique Holy Spirit guidance',
  [
    '01 · A decomposing corpse propped on a papal throne: Nine months after Pope Formosus died, Pope Stephen VI had his rotting body exhumed, dressed in full papal vestments, and propped upright on a throne in the papal courtroom while a trembling deacon was forced to speak on the corpse’s behalf.',
    '02 · Twice exhumed and dumped into the Tiber River: After convicting the corpse of perjury and canonical violations (translatio from another see), Stephen VI had the body stripped, its three blessing fingers severed, buried in a foreigners’ graveyard, dug up a second time, weighted down, and hurled into the Tiber River.',
    '03 · Driven by raw factional politics, ended by popular revolt: The entire synod was staged for political motives to undermine Formosus’s faction and legitimize rival imperial claimants—ending only when outrage sparked a Roman uprising that deposed, imprisoned, and strangled Pope Stephen VI.'
  ],
  ['Cadaver Synod (Rome, 897 CE)','Liutprand of Cremona, Antapodosis I.30','Averroes 2 · #kadaver-synoden'],
  [],
  {
    facts:[
      ['Defendant','Exhumed 9-month-old corpse of Pope Formosus'],
      ['Prosecutor','Reigning Pope Stephen VI in full Roman synod'],
      ['Desecration','Stripped, 3 fingers severed, dumped in the Tiber'],
      ['Aftermath','Uprising deposed & strangled Pope Stephen VI']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Bad popes just show human sinfulness—the survival of the Church despite men like Stephen VI proves Matthew 16:18!',
  theyWho:'Watch out · if they say',
  who:'Expose the Tiber desecration & political overthrow'
});

card('christianity/church/cadaver-synod-papal-infallibility',{
  title:'The Cadaver Synod (897 CE): When a Pope Put a Dead Pope’s Corpse on Trial',
  k:'Church History · Papacy & Apostolic Succession',
  blurb:'Pope Stephen VI exhuming Pope Formosus in 897 CE, dressing his corpse in vestments, hacking off his blessing fingers, nullifying his ordinations, and dumping him in the Tiber.',
  claim:'The Roman Papacy is the divinely guided, unerring rock of apostolic continuity and magisterial authority founded on Matthew 16:18.',
  tree:P(N(
    CADAV,
    'Christ established the Roman Papacy as the visible, Spirit-guided guardian of church unity, valid sacraments, and apostolic teaching across the centuries.',
    'In January 897 CE, the “Vicar of Christ”—Pope Stephen VI—convened the infamous Cadaver Synod in Rome: he exhumed the decomposing corpse of his predecessor Pope Formosus, dressed it in papal vestments, put the corpse on trial for usurping the papacy, declared all of Formosus’s ordinations null and void, hacked off his three blessing fingers, and had the body thrown into the Tiber River before being overthrown in a popular revolt.',
    'Anatomy of the Cadaver Synod (Rome, 897 CE)',
    [
      '01 · Definition & historical setting (Rome, 897 CE): An official ecclesiastical tribunal presided over by reigning Pope Stephen VI in which the exhumed corpse of deceased Pope Formosus (r. 891–896) was posthumously prosecuted and condemned.',
      '02 · The charges & macabre courtroom trial: Dressed in full papal vestments and propped on a chair with a deacon assigned to answer for him, Formosus’s corpse was charged with unlawfully assuming the papacy, perjury, and violating canon law against transferring between bishoprics.',
      '03 · Mutilation, nullification of ordinations & the Tiber River: Found guilty, the corpse was stripped of its papal garments, had the three fingers of its right hand (used for papal blessings) hacked off, had all its ordinations declared invalid, and was reburied—only to be dug up again and thrown into the Tiber River.',
      '04 · Political motive & violent end: Staged for raw political reasons to crush rival factions, the synod provoked a popular uprising in Rome that deposed and imprisoned Pope Stephen VI (who was strangled in prison), leading subsequent popes to annul the synod.'
    ],
    ['Cadaver Synod (Synod of Rome, January 897 CE)','Pope Stephen VI vs. Pope Formosus','Averroes 2 · #kadaver-synoden'],
    [cadavTrapA,cadavTrapB],
    {
      facts:[
        ['Date & Place','January 897 CE, Papal Synod in Rome'],
        ['Presiding Pope','Pope Stephen VI (r. 896–897 CE)'],
        ['Accused Corpse','Pope Formosus (exhumed 9 months after death)'],
        ['Sentence','Ordinations annulled, 3 fingers cut off, thrown in Tiber']
      ],
      visual:{
        kind:'steps',
        items:[
          ['1 · Exhumation','Pope Stephen VI digs up the 9-month-dead corpse of Pope Formosus and clothes it in papal vestments.'],
          ['2 · Synod Trial','The corpse is tried for unlawful assumption of the papacy and canonical violations.'],
          ['3 · Mutilation & Annulment','Formosus is condemned, his ordinations are declared null, and his three blessing fingers are hacked off.'],
          ['4 · Tiber & Revolt','The corpse is thrown into the Tiber River, sparking an uprising that deposes Pope Stephen VI.']
        ]
      }
    }
  ),{
    who:'Walk through the 897 CE Cadaver Synod',
    forkTitle:'Two Roman Catholic apologetic defenses',
    forkSub:'Counter the “not ex cathedra” technicality or the “bad popes prove Matthew 16:18” spin'
  }),
  sum:'In the Cadaver Synod of 897 CE, Pope Stephen VI exhumed Pope Formosus’s corpse, put it on trial in papal vestments, cut off its blessing fingers, annulled all its ordinations, and dumped it in the Tiber—exposing the chaos behind claims of unbroken, Spirit-guided papal authority.'
});

/* ============================================================================
   4. NEW Tactical Playbook card: christianity/bible/contradictions/ahaziah-age-22-or-42
   ============================================================================ */
const AHAZ=AV2('#ahasja-wann-könig','1335968528104292413');

const ahazTrapA=P(N(
  AHAZ,
  'The difference between the 11th year of Joram (2 Kings 9:29) and the 12th year of Joram (2 Kings 8:25) is easily explained by a co-regency or two different calendar counting systems (accession-year vs. non-accession-year)!',
  'Invoking an undocumented co-regency or competing calendar systems inside the very same book by the very same author is pure ad hoc invention. Neither 2 Kings 8:25 nor 2 Kings 9:29 mentions a co-regency or a calendar switch; both verses appear just one chapter apart in 2 Kings to date the single historical moment when Ahaziah became king of Judah.',
  'Why co-regency and calendar-system excuses fail inside 2 Kings 8.25 vs. 9.29',
  [
    '01 · Calendar / counting-method excuse fails: Nowhere does the Bible state that 2 Kings 8.25 and 2 Kings 9.29 use two different regnal counting methods. Why would the same chronicler switch calendar systems within forty verses when dating the exact same accession against the exact same northern king (Joram son of Ahab)?',
    '02 · Co-regency excuse is pure textual invention: Neither passage mentions a co-regency, and inventing an unrecorded co-regency solely to rescue a one-year numerical discrepancy is circular reasoning with zero textual evidence.',
    '03 · A single historical moment cannot have two mutually exclusive year numbers: A king accedes to the throne at a specific point in time, and exact regnal numerals (“in the twelfth year” vs. “in the eleventh year”) cannot be read metaphorically or treated as “approximately.”'
  ],
  ['2 Kings 8:25','2 Kings 9:29','Averroes 2 · #ahasja-wann-könig'],
  [],
  {
    facts:[
      ['2 Kings 8:25','Ahaziah began to reign in the 12th year of Joram'],
      ['2 Kings 9:29','Ahaziah began to reign in the 11th year of Joram'],
      ['Co-Regency Claim','Zero mention anywhere in the biblical text'],
      ['Calendar Claim','Same book, same author, 1 chapter apart']
    ],
    quotes:[
      {by:'2 Kings 8:25',en:'In the twelfth year of Joram the son of Ahab, king of Israel, Ahaziah the son of Jehoram, king of Judah, began to reign.',ref:'2 Kings 8:25'},
      {by:'2 Kings 9:29',en:'In the eleventh year of Joram the son of Ahab, Ahaziah began to reign over Judah.',ref:'2 Kings 9:29'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The 11th year (2 Kgs 9:29) and 12th year (2 Kgs 8:25) just reflect a co-regency or two different calendar counting systems!',
  theyWho:'Watch out · if they say',
  who:'Expose the co-regency & calendar inventions'
});

const ahazTrapB=P(N(
  AHAZ,
  'The age difference between 22 in 2 Kings 8:26 and 42 in 2 Chronicles 22:2 is just a minor copyist slip—or 42 counts the years of the dynasty of Omri!',
  'Both escapes confirm the text is broken. If 2 Chronicles 22:2 contains a scribal error that turned 22 into 42, then the preserved Hebrew Masoretic Text is not inerrant; and if you try to defend “42 years old” as authentic, you make Ahaziah two years older than his own father Jehoram, who died at age 40 (2 Kings 8:17; 2 Chronicles 21:5, 20)!',
  '2 Kings 8.26 (age 22) vs. 2 Chronicles 22.2 (age 42 — older than his own father!)',
  [
    '01 · Direct numerical collision (22 vs. 42): 2 Kings 8.26 states that Ahaziah was twenty-two years old when he began to reign, whereas the parallel Hebrew text of 2 Chronicles 22.2 states that Ahaziah was forty-two years old when he began to reign.',
    '02 · Mathematical impossibility — two years older than his own father: According to 2 Kings 8.17 and 2 Chronicles 21.5, 20, Ahaziah’s father Jehoram became king at age 32, reigned for 8 years, and died at age 40, whereupon Ahaziah immediately succeeded him. If Ahaziah was 42 at his accession (2 Chr 22.2), he was born two years before his own father!',
    '03 · “42 years of Omri’s house” distorts plain Hebrew idiom: Apologists who claim “a son of forty-two years” (ben-arbaʿim u-shnayim shanah) in 2 Chronicles 22.2 refers to the age of Omri’s dynasty violate the universal biblical Hebrew formula used dozens of times across Kings and Chronicles to state a king’s personal age at accession.'
  ],
  ['2 Kings 8:17, 26','2 Chronicles 21:5, 20; 22:2'],
  [],
  {
    facts:[
      ['2 Kings 8:26','Ahaziah was 22 years old at accession'],
      ['2 Chronicles 22:2','Ahaziah was 42 years old at accession'],
      ['Father Jehoram’s Age','Died at age 40 (32 + 8-year reign, 2 Chr 21:20)'],
      ['Biological Paradox','At 42, Ahaziah is 2 years older than his father!']
    ],
    quotes:[
      {by:'2 Kings 8:26',en:'Ahaziah was twenty-two years old when he began to reign, and he reigned one year in Jerusalem.',ref:'2 Kings 8:26'},
      {by:'2 Chronicles 22:2 (MT)',en:'Ahaziah was forty-two years old when he began to reign, and he reigned one year in Jerusalem.',ref:'2 Chronicles 22:2'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'What about his age—22 in 2 Kings 8:26 vs. 42 in 2 Chronicles 22:2 is just a minor copyist slip or counts the dynasty of Omri!',
  theyWho:'Watch out · if they say',
  who:'Show how age 42 makes him older than his father'
});

card('christianity/bible/contradictions/ahaziah-age-22-or-42',{
  title:'King Ahaziah’s Accession & Age: 11th or 12th Year of Joram? Age 22 or 42?',
  k:'Biblical Contradictions · Kings & Chronicles',
  blurb:'2 Kings 8:25 (12th year of Joram) vs. 2 Kings 9:29 (11th year of Joram), plus 2 Kings 8:26 (age 22) vs. 2 Chronicles 22:2 (age 42 — older than his father Jehoram!).',
  claim:'The historical narratives and regnal chronologies of the Old Testament are divinely inspired and free of numerical contradictions.',
  tree:P(N(
    AHAZ,
    'Every chronological datum in Kings and Chronicles is harmonious once properly understood in its historical context.',
    'King Ahaziah of Judah is the center of a double chronological contradiction in the Hebrew Bible: within a single chapter of 2 Kings, the text dates his accession to both the 12th year of Joram of Israel (2 Kings 8:25) and the 11th year of Joram of Israel (2 Kings 9:29)—and when recording his age at that exact accession, 2 Kings 8:26 makes him 22 years old while 2 Chronicles 22:2 makes him 42 years old, which would make him two years older than his own father Jehoram (who died at age 40)!',
    'Ahaziah’s double chronological contradiction in 2 Kings and 2 Chronicles',
    [
      '01 · Contradiction 1 — 12th year vs. 11th year of Joram (2 Kgs 8.25 vs. 9.29): 2 Kings 8.25 states that Ahaziah son of Jehoram began to reign over Judah in the twelfth year of Joram son of Ahab, king of Israel. Just one chapter later, 2 Kings 9.29 states that Ahaziah began to reign over Judah in the eleventh year of Joram son of Ahab.',
      '02 · Why the regnal-year clash cannot be harmonized away: Both verses describe the exact same singular event (Ahaziah’s enthronement) pegged to the exact same northern monarch’s reign. A single year cannot simultaneously be the 11th and 12th year, and numbers cannot be read metaphorically.',
      '03 · Contradiction 2 — 22 years old vs. 42 years old (2 Kgs 8.26 vs. 2 Chr 22.2): Immediately after dating his accession, 2 Kings 8.26 records that Ahaziah was 22 years old when he became king, whereas 2 Chronicles 22.2 records that he was 42 years old.',
      '04 · Older than his own father Jehoram (2 Kgs 8.17; 2 Chr 21.20): Because Ahaziah’s father Jehoram became king at 32, reigned 8 years, and died at age 40 (2 Chr 21.5, 20), the 2 Chronicles 22.2 figure of 42 makes the son two years older than his father at the moment of his father’s death.'
    ],
    ['2 Kings 8:17, 25–26; 9:29','2 Chronicles 21:5, 20; 22:2','Averroes 2 · #ahasja-wann-könig'],
    [ahazTrapA,ahazTrapB],
    {
      facts:[
        ['2 Kgs 8:25 vs. 9:29','12th year of Joram vs. 11th year of Joram'],
        ['2 Kgs 8:26 vs. 2 Chr 22:2','22 years old vs. 42 years old at accession'],
        ['Father Jehoram’s Death','Died at age 40 (32 + 8 yrs, 2 Chr 21:20)'],
        ['Chronological Verdict','Direct numerical contradiction in both year & age']
      ],
      quotes:[
        {by:'2 Kings 8:25–26',en:'In the twelfth year of Joram the son of Ahab… Ahaziah was twenty-two years old when he began to reign.',ref:'2 Kings 8:25–26'},
        {by:'2 Kings 9:29 & 2 Chronicles 22:2',en:'In the eleventh year of Joram the son of Ahab, Ahaziah began to reign… Ahaziah was forty-two years old when he began to reign.',ref:'2 Kgs 9:29 / 2 Chr 22:2'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'2 Kings 8:25–26',
          items:[
            'Acceded in the 12th year of Joram son of Ahab',
            'Aged 22 years old when he began to reign',
            '18 years younger than his father Jehoram (who died at 40)'
          ]
        },
        right:{
          title:'2 Kings 9:29 & 2 Chronicles 22:2',
          items:[
            '2 Kgs 9:29: Acceded in the 11th year of Joram son of Ahab',
            '2 Chr 22:2: Aged 42 years old when he began to reign',
            'Biologically impossible: 2 years older than his 40-year-old father!'
          ]
        }
      }
    }
  ),{
    who:'Lay out the double Ahaziah contradiction',
    forkTitle:'Two apologetic rescue attempts',
    forkSub:'Defeat the co-regency/calendar excuse for 11th vs. 12th year or the copyist/dynasty excuse for 22 vs. 42'
  }),
  sum:'The Hebrew Bible contradicts itself twice on King Ahaziah’s accession—dating it to both the 12th year (2 Kings 8:25) and 11th year (2 Kings 9:29) of Joram, and giving his age as both 22 (2 Kings 8:26) and 42 (2 Chronicles 22:2, making him two years older than his father Jehoram).'
});

/* ============================================================================
   5. NEW Tactical Playbook card: christianity/bible/contradictions/nt-quotes-nonexistent-ot-verses
   ============================================================================ */
const NONEX=AV2('#zitate-die-nciht-existieren','1403048931050520679');

const nonexTrapA=P(N(
  NONEX,
  'Matthew 2:23, John 7:38, James 4:5, and Ephesians 5:14 are not quoting missing verses—they are just thematic summaries of the Old Testament, and Jude 14–15 only quotes a true saying from 1 Enoch without making it Scripture!',
  'Each of those passages uses explicit citation formulas (“spoken by the prophets,” “as the Scripture has said,” “the Scripture says,” “Therefore it says”) while no such text exists in the Hebrew Bible—and Jude 14–15 explicitly attributes a Greek text from 1 Enoch 1:9 to the historical “Enoch, the seventh from Adam, prophesied,” treating a Second Temple pseudepigraphon as authentic antediluvian prophecy.',
  'Why explicit citation formulas in Matt 2.23, John 7.38, James 4.5, Eph 5.14 & Jude 14–15 fail',
  [
    '01 · Matthew 2.23 (“He shall be called a Nazarene”): Matthew introduces the line with “that what was spoken by the prophets might be fulfilled,” yet no verse in the entire Old Testament ever says the Messiah will be called a Nazarene—nor is Nazareth even mentioned in the Hebrew Bible.',
    '02 · John 7.38 & James 4.5 (“as the Scripture has said”): John 7.38 cites “as the Scripture has said, Out of his heart will flow rivers of living water,” and James 4.5 asks “Or do you suppose it is to no purpose that the Scripture says, He yearns jealously over the spirit that he has made to dwell in us?”—neither sentence exists anywhere in the Old Testament.',
    '03 · Ephesians 5.14 & Jude 14–15 (quoting apocrypha as prophecy): Ephesians 5.14 introduces “Awake, O sleeper, and arise from the dead, and Christ will shine on you” with the scriptural formula “Therefore it says” (dio legei), and Jude 14–15 directly quotes 1 Enoch 1.9 as a real prophecy delivered by “Enoch, the seventh from Adam.”'
  ],
  ['Matthew 2:23','John 7:38','James 4:5','Ephesians 5:14','Jude 14–15 (1 Enoch 1:9)'],
  [],
  {
    facts:[
      ['Matthew 2:23','“He shall be called a Nazarene” — nowhere in OT'],
      ['John 7:38 / James 4:5','“As the Scripture says” — verses do not exist in OT'],
      ['Ephesians 5:14','“Therefore it says: Awake, O sleeper…” — non-canonical hymn'],
      ['Jude 14–15','Quotes pseudepigraphal 1 Enoch 1:9 as real prophecy']
    ],
    quotes:[
      {by:'Matthew 2:23',en:'…that what was spoken by the prophets might be fulfilled, that he would be called a Nazarene.',ref:'Matthew 2:23'},
      {by:'James 4:5',en:'Or do you suppose the Scripture says in vain: He yearns jealously over the spirit that he made to dwell in us?',ref:'James 4:5'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Matthew 2:23, John 7:38, and James 4:5 are just thematic summaries, not direct quotes of missing verses!',
  theyWho:'Watch out · if they say',
  who:'Show the explicit citation formulas & Jude 14–15'
});

const nonexTrapB=P(N(
  NONEX,
  'When Church Fathers like Justin Martyr, Irenaeus, or Lactantius quoted passages not in our Old Testament, the Jews really had deleted those verses from Jeremiah and Ezra out of hostility to Christ!',
  'Accusing the Jews of stealthily erasing Christian proof-texts across every synagogue in the world is historically impossible and easily refuted by manuscript science: the non-existent “Jeremiah” and “Ezra” crucifixion prophecies cited by Justin Martyr (Dialogue 72, 120), Irenaeus (Against Heresies 3.20.4; 5.31.1), and Lactantius (Divine Institutes 4.18) are completely absent not only from the Masoretic Text and Dead Sea Scrolls, but even from the Christian-transmitted Septuagint, Baruch, and Letter of Jeremiah!',
  'Why the patristic “Jewish deletion” accusation collapses on Ezra and Jeremiah',
  [
    '01 · Non-existent Jeremiah descent-to-the-dead verse (Justin, Dial. 72; Irenaeus, AH 3.20.4; 5.31.1): Justin Martyr accuses the Jews of cutting out from Jeremiah: “The Lord God remembered His dead people of Israel who lay in the graves; and He descended to preach to them His own salvation.” Irenaeus quotes the exact same phantom verse (attributing it to Jeremiah and Isaiah), yet it appears in no Hebrew manuscript, no Dead Sea Scroll, no LXX Jeremiah, no Baruch, and no Letter of Jeremiah.',
    '02 · Non-existent Ezra Passover-cross prophecy (Justin, Dial. 72; Lactantius, Div. Inst. 4.18): Justin and Lactantius (also in Epitome 43/45) quote a massive speech where “Ezra said to the people: This Passover is our Savior and our refuge… we must humble him on a sign/cross.” As patristic editors (BKV) openly note, this passage does not exist in canonical Ezra-Nehemiah or any surviving Greek/Latin Esdras text—it is an obvious Christian interpolation.',
    '03 · Phantom Jesus logia & unknown prophets in Justin, Clement, Athenagoras & Hippolytus: Justin (Dial. 47) and Clement of Alexandria (Who Is the Rich Man That Shall Be Saved? 40) quote Jesus saying, “In whatsoever state I find you, in that will I also judge you” (impossible to derive from an Ezekiel apocryphon quoting Jesus); Clement (Stromata 5.10.63) quotes “My mystery is for me and the sons of my house”; Athenagoras (Plea 32) quotes an unknown command on the liturgical kiss; and Hippolytus (On Christ and Antichrist) quotes an unidentified prophet.'
  ],
  ['Justin Martyr, Dialogue with Trypho 47, 72, 120','Irenaeus, Against Heresies 3.20.4; 5.31.1','Lactantius, Divine Institutes 4.18; Epitome 43/45','Clement of Alexandria, Quis Dives Salvetur 40; Stromata 5.10.63','Athenagoras, Supplicatio 32; Hippolytus, De Christo et Antichristo'],
  [],
  {
    facts:[
      ['Phantom Jeremiah','Cited by Justin (Dial. 72) & Irenaeus (AH 3.20.4; 5.31.1)'],
      ['Phantom Ezra','Cited by Justin (Dial. 72) & Lactantius (Div. Inst. 4.18)'],
      ['Phantom Jesus Logion','“In what state I find you, I judge you” (Justin Dial. 47)'],
      ['Manuscript Verdict','Absent from MT, Dead Sea Scrolls, and Christian LXX']
    ],
    quotes:[
      {by:'Justin Martyr (Dialogue with Trypho 72)',en:'From Jeremiah these words were cut out: The Lord God remembered His dead people of Israel in the graves, and descended to preach salvation.',ref:'Dialogue with Trypho 72'},
      {by:'Lactantius (Epitome of Divine Institutes 45)',en:'Esdras says: This Passover lamb is our Savior and our refuge… we must first humble him upon the cross, and afterward hope in him.',ref:'Epitome 45 (cf. Justin, Dial. 72)'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The early Church Fathers proved that the Jews deleted those Messianic prophecies from Jeremiah and Ezra!',
  theyWho:'Watch out · if they say',
  who:'Demolish the phantom Ezra & Jeremiah quotes'
});

card('christianity/bible/contradictions/nt-quotes-nonexistent-ot-verses',{
  title:'Phantom Prophecies: NT & Patristic Citations of Non-Existent OT Verses',
  k:'Biblical Contradictions · Canon & Prophecy Citations',
  blurb:'NT fulfillment quotes that do not exist in the Hebrew Bible (Matt 2:23, John 7:38, James 4:5, Eph 5:14, Jude 14–15) plus Justin, Irenaeus & Lactantius quoting fabricated Ezra and Jeremiah verses.',
  claim:'New Testament authors and early Church Fathers built their Messianic case strictly on authentic, verifiable Old Testament prophecies.',
  tree:P(N(
    NONEX,
    'Every prophecy cited in the New Testament and early patristic apologetics comes faithfully from inspired Old Testament Scripture.',
    'Both the New Testament and the earliest Church Fathers repeatedly cite explicit “Scripture” and “prophetic” passages that do not exist anywhere in the Hebrew Bible: the New Testament appeals to phantom verses in Matthew 2:23, John 7:38, James 4:5, and Ephesians 5:14 (while quoting apocryphal 1 Enoch 1:9 in Jude 14–15), and fathers like Justin Martyr, Irenaeus, Clement, Athenagoras, Hippolytus, and Lactantius quote fabricated Christian interpolations in “Jeremiah,” “Ezra,” and unknown gospels as canonical proof-texts.',
    'Non-existent Scripture citations across the New Testament and early Fathers',
    [
      '01 · Five New Testament citations without an Old Testament source: Matthew 2.23 cites “spoken by the prophets, He shall be called a Nazarene”; John 7.38 cites “as the Scripture has said, Out of his heart will flow rivers of living water”; James 4.5 cites “the Scripture says, He yearns jealously over the spirit…”; Ephesians 5.14 cites “Therefore it says, Awake, O sleeper…”; and Jude 14–15 quotes 1 Enoch 1.9 as literal prophecy by Enoch.',
      '02 · Justin Martyr & Irenaeus cite a non-existent Jeremiah verse: In Dialogue with Trypho 72 (and 120) and Irenaeus’s Against Heresies 3.20.4 and 5.31.1, both Fathers quote a verse from “Jeremiah” about the Lord remembering His dead people in the graves and descending to preach salvation to them—a Christian fabrication absent from every Hebrew, Greek LXX, Baruch, and Letter of Jeremiah manuscript.',
      '03 · Justin Martyr & Lactantius cite a fabricated Ezra crucifixion prophecy: In Dialogue 72 and Lactantius’s Divine Institutes 4.18 (and Epitome 45), both quote “Ezra” telling Israel that “this Passover is our Savior… we must humble him on a sign/cross”—an apocryphal Christian forgery absent from Ezra and all Esdras books.',
      '04 · Uncanonical Jesus sayings and phantom prophets in Justin, Clement, Athenagoras & Hippolytus: Justin (Dial. 47) and Clement of Alexandria (Rich Man 40) quote Jesus saying “In the state in which I find you, in that I will judge you”; Clement (Stromata 5.10.63) quotes “My mystery is for me and the sons of my house”; Athenagoras (Plea 32) quotes an unknown warning on the liturgical kiss; and Hippolytus (Antichrist) cites an unidentifiable prophet.'
    ],
    ['Matthew 2:23; John 7:38; James 4:5; Ephesians 5:14; Jude 14–15','Justin Martyr, Dialogue with Trypho 47, 72, 120','Irenaeus, Against Heresies 3.20.4; 5.31.1','Lactantius, Divine Institutes 4.18; Epitome 45','Clement of Alexandria, Quis Dives Salvetur 40; Stromata 5.10.63','Athenagoras, Supplicatio 32; Hippolytus, De Christo et Antichristo'],
    [nonexTrapA,nonexTrapB],
    {
      facts:[
        ['NT Phantom Quotes','Matt 2:23, John 7:38, James 4:5, Eph 5:14'],
        ['Jude 14–15','Quotes pseudepigraphal 1 Enoch 1:9 as Enoch’s prophecy'],
        ['Justin & Irenaeus','Quote non-existent Jeremiah descent-to-dead verse'],
        ['Justin & Lactantius','Quote non-existent Ezra Passover-cross prophecy']
      ],
      quotes:[
        {by:'Justin Martyr (Dialogue 47) & Clement (Rich Man 40)',en:'Wherefore also our Lord Jesus Christ said: In whatsoever state I shall find you, in that will I also judge you.',ref:'Dialogue with Trypho 47'},
        {by:'Clement of Alexandria (Stromata 5.10.63)',en:'For the Lord gave the instruction in a certain Gospel: My mystery is for me and for the sons of my house.',ref:'Stromata V.10.63'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'New Testament Phantom Citations',
          items:[
            'Matt 2:23: “He shall be called a Nazarene” (nowhere in OT)',
            'John 7:38 & James 4:5: “As the Scripture says…” (nowhere in OT)',
            'Eph 5:14 (unknown hymn) & Jude 14–15 (quotes 1 Enoch 1:9)'
          ]
        },
        right:{
          title:'Patristic Phantom Citations',
          items:[
            'Justin (Dial. 72) & Irenaeus (AH 3.20.4; 5.31.1): Fake Jeremiah verse',
            'Justin (Dial. 72) & Lactantius (Inst. 4.18): Fake Ezra cross prophecy',
            'Justin, Clement, Athenagoras & Hippolytus: Uncanonical logia & prophets'
          ]
        }
      }
    }
  ),{
    who:'Cite the NT & Patristic phantom verses',
    forkTitle:'Two common apologetic escape routes',
    forkSub:'Defeat the “thematic summary” excuse for Matt 2:23 / James 4:5 or the “Jews deleted Ezra & Jeremiah” claim'
  }),
  sum:'From Matthew 2:23, John 7:38, James 4:5, Ephesians 5:14, and Jude 14–15 to Justin Martyr, Irenaeus, and Lactantius quoting fabricated “Jeremiah” and “Ezra” prophecies, early Christian writers repeatedly cited non-existent or apocryphal texts as authoritative Scripture.'
});

/* ============================================================================
   6. NEW Tactical Playbook card: christianity/bible/gospel-of-the-hebrews-patristic
   ============================================================================ */
const GHEB=AV2('#hebräer-evangelium','1403049363357569054');

const ghebTrapA=P(N(
  GHEB,
  'The Gospel of the Hebrews was always recognized as a late heretical forgery and was never treated as an authoritative Gospel by orthodox Church Fathers!',
  'Patristic history proves the exact opposite: Hegesippus (in Eusebius, HE 4.22), Clement of Alexandria (Stromata 2.45.5; 5.96.3), and Origen (Commentary on John 2.87; Homilies on Jeremiah 15.5) all utilized the Gospel of the Hebrews as a legitimate evangelical source, and Jerome (Against the Pelagians 3.2) testified that it was preserved in the library of Caesarea and regarded by very many as the authentic Hebrew/Aramaic Gospel of Matthew.',
  'Hegesippus, Clement, Origen, and Jerome on the Gospel of the Hebrews',
  [
    '01 · Used as an evangelical source by 2nd–3rd century Fathers: As patristic scholarship (Handmann, Zahn, Schmidtke, Lagrange, Hennecke, BKV) documents, the Gospel of the Hebrews was used as a historical Gospel source by Hegesippus (Eusebius, HE 4.22), Clement of Alexandria (Stromata 2.45.5; cf. 5.96.3), and Origen (Comm. John 2.87; Hom. Jer. 15.5) long before later councils relegated it to the heretical apocrypha.',
    '02 · Valued by Jewish Christians and debated in Eusebius’s canon list (HE 3.25): In his famous canon chapter (Church History 3.25), Eusebius notes that while some had begun to reject the Gospel according to the Hebrews, it was especially revered by those Hebrews who had accepted Christ.',
    '03 · Preserved at Caesarea and identified by many with Matthew (Jerome, Adv. Pelag. 3.2): Jerome reports that the Gospel of the Hebrews—written in Chaldee/Syriac (Aramaic) language with Hebrew letters and used by the Nazarenes in Beroea, Coele-Syria—was housed in the great Christian library at Caesarea and called by “very many” the authentic Gospel of Matthew.'
  ],
  ['Eusebius, Church History 3.25; 4.22 (Hegesippus)','Clement of Alexandria, Stromata 2.45.5; 5.96.3','Origen, Commentary on John 2.87; Homilies on Jeremiah 15.5','Jerome, Dialogue Against the Pelagians 3.2'],
  [],
  {
    facts:[
      ['2nd–3rd c. Users','Hegesippus, Clement of Alexandria, Origen'],
      ['Eusebius (HE 3.25)','Revered by Jewish Christians; only rejected by “some”'],
      ['Caesarea Library','Preserved in Aramaic with Hebrew script (Jerome)'],
      ['Patristic Title','Called by “very many” the Gospel of Matthew']
    ],
    quotes:[
      {by:'Eusebius of Caesarea (Church History 3.25)',en:'Some have also rejected the Gospel according to the Hebrews, with which those of the Hebrews who have accepted Christ are especially delighted.',ref:'Church History III.25'},
      {by:'Jerome (Against the Pelagians 3.2)',en:'The Gospel according to the Hebrews—written in Chaldee and Syriac in Hebrew letters, used by the Nazarenes—is called by very many the Gospel of Matthew.',ref:'Dialogue Against the Pelagians III.2'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The Gospel of the Hebrews was just an obscure Gnostic forgery that orthodox Fathers never took seriously!',
  theyWho:'Watch out · if they say',
  who:'Cite Hegesippus, Clement, Origen, Eusebius & Jerome'
});

const ghebTrapB=P(N(
  GHEB,
  'Even if Jerome read it, its surviving fragments agree completely with the canonical Gospels and orthodox doctrine!',
  'The very fragments Jerome quotes in Dialogue Against the Pelagians 3.2 contradict both the canonical baptism narrative and later claims of prophetic/apostolic infallibility: in it, Jesus refuses his mother’s and brothers’ call to be baptized by John—asking “Wherein have I sinned… unless perhaps this very thing that I have said is ignorance?”—and explicitly states that even after prophets are anointed by the Holy Spirit, “sinful words” are still found in them!',
  'What Jerome’s fragments in Against the Pelagians 3.2 actually say',
  [
    '01 · Jesus questions why he should be baptized and admits possible ignorance: When Jesus’s mother and brothers urge him to go be baptized by John for the forgiveness of sins, Jesus replies: “Wherein have I sinned, that I should go and be baptized by him? Unless perhaps this very thing which I have just said is ignorance (nisi forte hoc ipsum quod dixi, ignorantia est).”',
    '02 · Contrast with canonical Matthew 3.13–15: Whereas canonical Matthew has Jesus travel voluntarily to the Jordan to “fulfill all righteousness,” the Jewish-Christian Gospel revered as Matthew’s Hebrew original depicts Jesus resisting John’s baptism and allowing the possibility of speaking out of ignorance.',
    '03 · Prophets speak “sinful words” even after receiving the Holy Spirit: In the second fragment quoted by Jerome on forgiving a brother seventy times seven, Jesus adds: “For even among the prophets, after they have been anointed with the Holy Spirit, word of sin (sermo peccati / sinful words) was found in them”—paired by Jerome with Ignatius’s saying that the Lord chose apostles who were sinners above all men.'
  ],
  ['Jerome, Dialogue Against the Pelagians 3.2','Averroes 2 · #hebräer-evangelium'],
  [],
  {
    facts:[
      ['Fragment 1 (Baptism)','“Unless perhaps what I said is ignorance”'],
      ['Canonical Contrast','Clashes with voluntary baptism in Matthew 3:13–15'],
      ['Fragment 2 (Prophets)','Even Spirit-anointed prophets utter “sinful words”'],
      ['Jerome’s Source','Copy housed in the library of Caesarea']
    ],
    quotes:[
      {by:'Gospel of the Hebrews (via Jerome, Adv. Pelag. 3.2)',en:'Wherein have I sinned, that I should go and be baptized by him? Unless perhaps this very thing that I have said is ignorance.',ref:'Against the Pelagians III.2'},
      {by:'Gospel of the Hebrews (via Jerome, Adv. Pelag. 3.2)',en:'For even in the prophets, after they had been anointed with the Holy Spirit, sinful words were found.',ref:'Against the Pelagians III.2'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'If Jerome thought it was related to Matthew, then its contents must harmonize with our canonical Matthew!',
  theyWho:'Watch out · if they say',
  who:'Read Jerome’s baptism & “sinful words” fragments'
});

card('christianity/bible/gospel-of-the-hebrews-patristic',{
  title:'The Gospel of the Hebrews: The Lost Jewish-Christian Gospel Revered by the Fathers',
  k:'Canon & Apocrypha · Jewish-Christian Gospels',
  blurb:'Used as an evangelical source by Hegesippus, Clement, and Origen, revered by Jewish Christians (Eusebius HE 3.25), and quoted by Jerome from the library of Caesarea.',
  claim:'The four Greek Gospels of the New Testament were the sole authentic Gospels from the first century, while lost Semitic gospels are mere myth or late heresy.',
  tree:P(N(
    GHEB,
    'The early Church knew only our four canonical Greek Gospels; any other so-called “Gospel” was immediately dismissed as a late heretical fabrication.',
    'The earliest Jewish-Christian communities used the Gospel according to the Hebrews—written in Aramaic with Hebrew letters, preserved in the library of Caesarea, utilized as an authentic Gospel source by Hegesippus, Clement of Alexandria, and Origen, noted by Eusebius (HE 3.25) as beloved by Jewish believers, and described by Jerome (Against the Pelagians 3.2) as considered by “very many” to be the original Gospel of Matthew—before the institutional Church later declared it a heretical apocryphon.',
    'Patristic witness and surviving fragments of the Gospel of the Hebrews',
    [
      '01 · Utilized as a genuine Gospel source by 2nd–3rd century Fathers: Hegesippus (Eusebius, HE 4.22), Clement of Alexandria (Stromata 2.45.5; 5.96.3), and Origen (Comm. John 2.87; Hom. Jer. 15.5) all drew upon the Gospel of the Hebrews as a historical evangelical witness before later orthodoxy reclassified it among heretical apocrypha.',
      '02 · Cherished by Jewish Christians (Eusebius, HE 3.25): In his survey of canonical and disputed books, Eusebius records that the Gospel according to the Hebrews was held in the highest esteem by Jews who had accepted Christ, even as some in the gentile Church began rejecting it.',
      '03 · Preserved at Caesarea & identified by many with Matthew (Jerome, Adv. Pelag. 3.2): Jerome attests that this Gospel—written in Chaldee/Syriac (Aramaic) in Hebrew script and still used by the Nazarenes in Beroea—was kept in the library of Caesarea and regarded by very many as the authentic Gospel of Matthew.',
      '04 · Unsettling Christological & prophetic fragments in Jerome: Quoting directly from the text in Against the Pelagians 3.2, Jerome reveals that Jesus initially resisted his family’s plea to be baptized by John (“Wherein have I sinned… unless perhaps what I have said is ignorance?”) and taught that even Spirit-anointed prophets still uttered “sinful words.”'
    ],
    ['Jerome, Dialogue Against the Pelagians 3.2','Eusebius, Church History 3.25; 4.22','Clement of Alexandria, Stromata 2.45.5; 5.96.3','Origen, Commentary on John 2.87; Homilies on Jeremiah 15.5','R. Handmann (1888); Th. Zahn; A. Schmidtke (1911); M. J. Lagrange (1922); E. Hennecke (1924)'],
    [ghebTrapA,ghebTrapB],
    {
      facts:[
        ['Language & Script','Aramaic (Chaldee/Syriac) in Hebrew letters'],
        ['Early Patristic Users','Hegesippus, Clement of Alexandria, Origen'],
        ['Library & Status','Kept at Caesarea; called “Matthew” by very many'],
        ['Later Fate','Downgraded to “heretical apocryphon” by later church']
      ],
      quotes:[
        {by:'Jerome (Dialogue Against the Pelagians 3.2)',en:'Wherein have I sinned, that I should go and be baptized by him? Unless perhaps this very thing that I have said is ignorance.',ref:'Against the Pelagians III.2'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'2nd–4th Century Patristic Reality',
          items:[
            'Used as an evangelical source by Hegesippus, Clement & Origen',
            'Revered by Jewish Christians (Eusebius, HE 3.25) & Nazarenes',
            'Kept in Caesarea library; regarded by “very many” as Matthew'
          ]
        },
        right:{
          title:'Why Later Orthodoxy Suppressed It',
          items:[
            'Written in Semitic Aramaic/Hebrew rather than the Greek canon',
            'Jesus resists John’s baptism & allows possible speech from “ignorance”',
            'States even Spirit-anointed prophets utter “sinful words”'
          ]
        }
      }
    }
  ),{
    who:'Present the patristic dossier on Gospel of the Hebrews',
    forkTitle:'Two apologetic attempts to dismiss it',
    forkSub:'Counter the claim that orthodox Fathers never used it or the claim that its contents match canonical Matthew'
  }),
  sum:'Used as an evangelical historical source by Hegesippus, Clement of Alexandria, and Origen and regarded by many in Jerome’s day as the original Hebrew/Aramaic Matthew, the Gospel of the Hebrews was later suppressed into apocrypha because its text clashed with gentile canonical orthodoxy.'
});

/* ============================================================================
   7. NEW Tactical Playbook card: christianity/bible/epistle-to-the-hebrews-authorship
   ============================================================================ */
const EHEB=AV2('#hebräer-brief','1403169316244820159');

const ehebTrapA=P(N(
  EHEB,
  'The early Church universally knew Paul wrote Hebrews—he just left his name off out of humility or because Jews disliked him, and Luke translated his Hebrew into Greek!',
  'As Jerome himself notes in On Illustrious Men 5 and Letter 53.9 (to Paulinus), that translation story was merely one speculative hypothesis among four conflicting guesses (Paul, Barnabas, Luke, or Clement of Rome)—and Jerome flatly admits that “the eighth epistle, to the Hebrews, is rejected by most as spurious,” while Origen famously concluded: “Who wrote the epistle, in truth God knows.”',
  'Origen’s confession of ignorance and Jerome’s four competing authorship theories',
  [
    '01 · Origen’s verdict — “Who wrote the epistle, God alone knows”: Living in the 3rd century with access to the finest Christian libraries in Alexandria and Caesarea, Origen admitted that the Greek style of Hebrews could not come from Paul’s pen and concluded: “Who wrote the epistle, in truth God knows” (Eusebius, HE 6.25.14).',
    '02 · Four conflicting guesses in Jerome (De Viris Illustribus 5): Jerome explains that because of its different style and language, Hebrews is not considered Paul’s; some (like Tertullian) attribute it to Barnabas, others to Luke the Evangelist, and others to Clement of Rome dressing Paul’s thoughts in his own Greek.',
    '03 · Jerome admits “rejected by most as spurious” (Letter 53.9 to Paulinus): Writing to the priest Paulinus, Jerome states plainly: “The Apostle Paul writes to seven churches; for the eighth epistle, to the Hebrews, is rejected by most (a plerisque) as not his / outside the number.”'
  ],
  ['Origen (via Eusebius, Church History 6.25.14)','Jerome, De Viris Illustribus 5','Jerome, Letter 53 (to Paulinus), §9'],
  [],
  {
    facts:[
      ['Origen (3rd c.)','“Who wrote the epistle, in truth God knows”'],
      ['Competing Suspects','Paul, Barnabas, Luke, or Clement of Rome'],
      ['Jerome (De Vir. Ill. 5)','Not considered Paul’s due to style and diction'],
      ['Jerome (Ep. 53.9)','8th church letter (Hebrews) rejected by most']
    ],
    quotes:[
      {by:'Origen (3rd century, via Eusebius HE 6.25.14)',en:'But as to who actually wrote the epistle, in truth God knows.',ref:'Eusebius, Church History VI.25.14'},
      {by:'Jerome (Letter 53 to Paulinus, §9)',en:'The Apostle Paul writes to seven churches; for the eighth, to the Hebrews, is placed by most outside the number.',ref:'Letter 53.9'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Paul definitely wrote Hebrews—he simply omitted his name because he was writing to Jews, and Luke translated it into Greek!',
  theyWho:'Watch out · if they say',
  who:'Quote Origen & Jerome’s admission of 4 rival theories'
});

const ehebTrapB=P(N(
  EHEB,
  'Even if the human author’s name wasn’t attached, the universal Church always recognized Hebrews as canonical Scripture from the very beginning!',
  'For the first four centuries, the Western Church—including the Church of Rome itself—rejected Hebrews from the Pauline canon! It is completely absent from the Muratorian Canon, Eusebius (HE 3.3.5) testifies that the Roman Church rejected it, Tertullian (On Modesty 20) attributed it to Barnabas alongside the apocryphal Shepherd of Hermas, and Jerome (Letter 129.3 to Dardanus) admitted that “Latin custom does not receive it among the canonical Scriptures” just as Greek churches rejected Revelation.',
  'Rome’s rejection, the Muratorian omission, Tertullian’s Barnabas, and Jerome’s East/West admission',
  [
    '01 · Omitted from the Muratorian Canon & rejected by the Church of Rome (Eusebius, HE 3.3.5): The earliest surviving Western canon list (Muratorian Fragment) omits Hebrews entirely, and Eusebius (Church History 3.3.5) explicitly records that “some have rejected the Epistle to the Hebrews, saying that it is disputed by the Church of Rome, on the ground that it was not written by Paul.”',
    '02 · Tertullian calls it the “Epistle of Barnabas” alongside the Shepherd (De Pudicitia 20): Around 210–220 CE in North Africa, Tertullian knew the letter not as canonical Paul, but as “an Epistle to the Hebrews under the name of Barnabas”—comparing its church reception directly to the apocryphal Shepherd of Hermas (“that apocryphal Shepherd of adulterers”).',
    '03 · East vs. West canon deadlock (Jerome, Letter 129.3 to Dardanus): In the early 5th century, Jerome candidly admits to Dardanus that “according to the custom of the Latins it is not received among the canonical Scriptures, just as the Greek churches with the same freedom reject the Apocalypse of John”—adding that to him “it does not matter who the author is.”'
  ],
  ['Muratorian Canon Fragment','Eusebius, Church History 3.3.5','Tertullian, On Modesty (De Pudicitia) 20','Jerome, Letter 129 (to Dardanus), §3'],
  [],
  {
    facts:[
      ['Muratorian Canon','Omits the Epistle to the Hebrews completely'],
      ['Church of Rome','Disputed & rejected Hebrews (Eusebius, HE 3.3.5)'],
      ['Tertullian (Pud. 20)','Called it the Epistle of Barnabas to the Hebrews'],
      ['Jerome (Ep. 129.3)','Latins reject Hebrews; Greeks reject Revelation']
    ],
    quotes:[
      {by:'Eusebius of Caesarea (Church History 3.3.5)',en:'Some have rejected the Epistle to the Hebrews, saying that it is disputed by the Church of Rome as not being Paul’s.',ref:'Church History III.3.5'},
      {by:'Jerome (Letter 129 to Dardanus, §3)',en:'Latin custom does not receive it among the canonical Scriptures, just as the Greek churches with the same freedom reject the Apocalypse of John.',ref:'Letter 129.3'},
      {by:'Tertullian (On Modesty 20)',en:'There is also an Epistle to the Hebrews under the name of Barnabas… more widely received than that apocryphal Shepherd of adulterers.',ref:'De Pudicitia 20'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Regardless of who wrote it, the entire early Church always accepted Hebrews as inspired canonical Scripture!',
  theyWho:'Watch out · if they say',
  who:'Show Rome’s rejection, Tertullian & Jerome Ep. 129'
});

card('christianity/bible/epistle-to-the-hebrews-authorship',{
  title:'Epistle to the Hebrews: Anonymous Authorship & Centuries of Western Rejection',
  k:'Canon & Authorship · New Testament Epistles',
  blurb:'Omitted from the Muratorian Canon, Origen’s “God only knows who wrote it,” Tertullian attributing it to Barnabas, and Rome’s centuries-long rejection attested by Eusebius and Jerome.',
  claim:'The 27 books of the New Testament possess verified apostolic authorship and enjoyed unanimous canonical recognition across the early Church.',
  tree:P(N(
    EHEB,
    'The Epistle to the Hebrews is an undisputed apostolic pillar of the New Testament canon whose authority was clear from the first century.',
    'A major theological pillar of the New Testament—the Epistle to the Hebrews—is entirely anonymous: it is omitted from the Muratorian Canon, Origen famously confessed “who wrote the epistle, in truth God knows,” Tertullian attributed it to Barnabas, Eusebius recorded that the Church of Rome rejected it, and Jerome admitted in the 5th century that Latin churches still did not count it among the canonical Scriptures just as Greek churches rejected Revelation.',
    'Five patristic proofs of Hebrews’ unknown author and disputed canon status',
    [
      '01 · Absent from the Muratorian Canon: The oldest surviving Western canon list (c. 170–200 CE) lists Paul’s epistles to seven churches and two individuals but omits the Epistle to the Hebrews completely.',
      '02 · Origen’s famous verdict — “God alone knows” (3rd c.): Recognizing that the polished Greek of Hebrews cannot come from Paul, Origen concluded: “Who actually wrote the epistle, in truth God knows,” noting that ancient tradition split between Clement of Rome and Luke.',
      '03 · Tertullian attributes it to Barnabas (De Pudicitia 20): In North Africa (c. 215 CE), Tertullian cites it explicitly as “an Epistle to the Hebrews under the name of Barnabas,” treating it as a companion’s writing comparable in church standing to the apocryphal Shepherd of Hermas.',
      '04 · Rejected by the Church of Rome & Latin custom (Eusebius, HE 3.3.5; Jerome, De Vir. Ill. 5; Ep. 53.9; Ep. 129.3): Eusebius testifies that the Church of Rome rejected Hebrews as non-Pauline, and Jerome admits two centuries later that while Eastern churches accept it (whether by Paul, Barnabas, Luke, or Clement), “Latin custom does not receive it among the canonical Scriptures” just as Greek churches reject John’s Apocalypse.'
    ],
    ['Muratorian Canon Fragment','Origen (in Eusebius, Church History 6.25.14)','Eusebius, Church History 3.3.5','Tertullian, De Pudicitia 20','Jerome, De Viris Illustribus 5; Letter 53.9; Letter 129.3','Averroes 2 · #hebräer-brief'],
    [ehebTrapA,ehebTrapB],
    {
      facts:[
        ['Muratorian Canon','Omitted completely from the Pauline & NT canon'],
        ['Origen’s Verdict','“Who wrote the epistle, in truth God knows”'],
        ['Tertullian (Pud. 20)','Attributed to Barnabas, not the Apostle Paul'],
        ['Rome & Latin West','Rejected from the canon into the 4th/5th centuries']
      ],
      quotes:[
        {by:'Origen (3rd century)',en:'Who wrote the epistle, in truth God knows.',ref:'Eusebius, Church History VI.25.14'},
        {by:'Jerome (De Viris Illustribus 5)',en:'The epistle To the Hebrews is not considered his, due to its difference in style and language, but is attributed to Barnabas, Luke, or Clement.',ref:'On Illustrious Men 5'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Eastern Greek Churches (Jerome, Ep. 129.3)',
          items:[
            'Accepted Hebrews as loosely Pauline despite non-Pauline Greek style',
            'Origen admitted “God alone knows” who actually penned it',
            'Simultaneously rejected the Apocalypse (Revelation) of John!'
          ]
        },
        right:{
          title:'Rome & Latin Western Churches',
          items:[
            'Omitted Hebrews from the Muratorian Canon',
            'Church of Rome rejected it as non-Pauline (Eusebius, HE 3.3.5)',
            'Tertullian attributed it to Barnabas; Latins excluded it into Jerome’s day'
          ]
        }
      }
    }
  ),{
    who:'Deploy the 5 patristic proofs on Hebrews',
    forkTitle:'Two apologetic defenses of Hebrews',
    forkSub:'Counter the “Paul omitted his name and Luke translated it” theory or the claim of early universal canon acceptance'
  }),
  sum:'Omitted from the Muratorian Canon, attributed to Barnabas by Tertullian, rejected by the Church of Rome (Eusebius, HE 3.3.5; Jerome, Ep. 129.3), and prompting Origen’s admission that “God alone knows who wrote it,” the Epistle to the Hebrews proves that a core New Testament book entered the canon without known authorship or early consensus.'
});

/* ============================================================================
   8. NEW Tactical Playbook card: christianity/church/aphrahat-persian-sage-christology
   ============================================================================ */
const APHR=AV2('#aphrahat','1539880872138899506');

const aphrTrapA=P(N(
  APHR,
  'Aphrahat still defends calling Christ “God” and “Son of God” in Demonstration 17—so he clearly affirmed Nicene Trinitarian divinity!',
  'Read how Aphrahat defends those titles in Demonstration 17 §3–5: he explicitly argues in his own voice that “God” and “Son of God” are honorific titles that God bestows on righteous humans—saying “we call Him God, even as He surnamed Moses by His own Name” (Exodus 7:1), just as Israel was called God’s “Firstborn” (Exodus 4:22), Solomon God’s “son” (2 Samuel 7:14), and righteous men “sons of the Most High” (Psalm 82:6)!',
  'Demonstration 17 §3–5: “God” and “Son of God” as divinely bestowed honorific titles',
  [
    '01 · “Even as He surnamed Moses by His own Name” (Exod 7.1): Defending Christians against Jewish critics who objected to calling Jesus “God” and “Son of God,” Aphrahat argues that God himself gave the title “God” to Moses when He made Moses a god to Pharaoh and Aaron his prophet (Exodus 7.1).',
    '02 · “Son of God” equated with Israel and Solomon: Aphrahat chains together biblical examples of the title “Son of God”—Israel is called “My son, My firstborn” (Exodus 4.22), Solomon is promised “He shall be to Me a son” (2 Samuel 7.14), and Psalm 82.6 declares “You are gods, and all of you sons of the Most High.”',
    '03 · Aphrahat’s hammer verdict — “given for the highest honor in the world”: Summarizing his own Christology, Aphrahat writes that the Name of Divinity is “given for the highest honor in the world, and with whomsoever God is well pleased, He applies it to him”—explaining “God” and “Son of God” as supreme honorific titles rather than ontological equality of substance (homoousios).'
  ],
  ['Aphrahat the Persian Sage, Demonstration 17 (Of Christ the Son of God), §3–5','Exodus 4:22; 7:1','2 Samuel 7:14','Psalm 82:6'],
  [],
  {
    facts:[
      ['Moses Parallel (Ex 7:1)','“Even as He surnamed Moses by His own Name”'],
      ['Sonship Parallels','Israel (Ex 4:22), Solomon (2 Sam 7:14), Ps 82:6'],
      ['Aphrahat’s Rule (§5)','Divinity title “given for the highest honor in the world”'],
      ['Theological Alignment','Honorific title, not ontological homoousios']
    ],
    quotes:[
      {by:'Aphrahat (Demonstration 17, §3)',en:'We call Him God, even as He surnamed Moses by His own Name.',ref:'Demonstration 17 §3'},
      {by:'Aphrahat (Demonstration 17, §5)',en:'The Name of Godhead is given for the highest honor in the world, and with whomsoever God is well pleased, He applies it to him.',ref:'Demonstration 17 §5'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Aphrahat wrote Demonstration 17 specifically to defend calling Christ “God” and “Son of God”—proving he believed Jesus is God!',
  theyWho:'Watch out · if they say',
  who:'Read how §3–5 equates the title with Moses in Exod 7:1'
});

const aphrTrapB=P(N(
  APHR,
  'In Demonstration 17 §8, Aphrahat explicitly defends worshipping (doing proskynesis / sugda to) Jesus—and Christians only worship Almighty God!',
  'In Demonstration 17 §8, Aphrahat explicitly refutes the modern apologetic claim that “bowing down (sugda / proskynesis) proves Jesus is Almighty God”! He justifies bowing to Jesus by comparing it directly to Daniel bowing before the pagan king Nebuchadnezzar and Joseph bowing before Pharaoh—explaining that sugda (prostration of honor / taʿẓīm) is a lawful human reverence God permitted men to show one another, sharply distinct from absolute worship (ʿibādah) owed to the Creator alone.',
  'Demonstration 17 §8: Bowing to Jesus compared to Daniel before Nebuchadnezzar and Joseph before Pharaoh',
  [
    '01 · Aphrahat distinguishes honorific prostration (taʿẓīm) from divine worship (ʿibādah): When Jewish opponents accuse Christians of idolatry for bowing (Syriac sugda) to Jesus, Aphrahat does not answer “We bow to him because he is the co-equal Creator.” Instead, he explains that God himself permitted humans to render sugda as an act of honor to elevated rulers and benefactors.',
    '02 · Biblical precedents — Daniel before Nebuchadnezzar & Joseph before Pharaoh: Aphrahat argues that Daniel bowed down before the wicked pagan king Nebuchadnezzar without sinning, and Joseph bowed down before Pharaoh without committing idolatry—so honoring Jesus who delivered us is all the more blameless.',
    '03 · Fatal blow to the “Jesus accepted worship (proskynesis) so he is God” argument: Modern Trinitarian apologists constantly argue that anyone receiving proskynesis/sugda in the Gospels must be Almighty God, yet a canonized 4th-century Syriac Church Father explicitly classifies bowing to Jesus as the same category of honorific reverence shown to human kings!'
  ],
  ['Aphrahat the Persian Sage, Demonstration 17, §7–8','Averroes 2 · #aphrahat'],
  [],
  {
    facts:[
      ['Syriac Term','sugda (prostration / veneration / proskynesis)'],
      ['Aphrahat’s Analogy 1','Daniel bowing before King Nebuchadnezzar'],
      ['Aphrahat’s Analogy 2','Joseph bowing before Pharaoh in Egypt'],
      ['Apologetic Impact','Destroys “proskynesis to Jesus = Almighty God”']
    ],
    quotes:[
      {by:'Aphrahat (Demonstration 17, §8)',en:'God has given worship (sugda) as an honor to the sons of men, that by it they may honor one another.',ref:'Demonstration 17 §8'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'In Demonstration 17 §8, Aphrahat defends worshipping and bowing down to Jesus—which is only lawful toward Almighty God!',
  theyWho:'Watch out · if they say',
  who:'Show §8 comparing it to Daniel before Nebuchadnezzar'
});

card('christianity/church/aphrahat-persian-sage-christology',{
  title:'Aphrahat the Persian Sage (4th c.): “God” & “Son of God” as Honorific Titles',
  k:'Patristic Christology · Syriac Church Fathers',
  blurb:'Aphrahat’s Demonstration 17 (§3–5, §8) defending “God” and “Son of God” for Jesus as honorific titles like Moses in Exodus 7:1 and comparing bowing to Jesus with Joseph before Pharaoh.',
  claim:'By the 4th century, orthodox Church Fathers universally understood “God,” “Son of God,” and worship (proskynesis) applied to Jesus as proof of co-equal Nicene deity.',
  tree:P(N(
    APHR,
    'Calling Jesus “God” and “Son of God” and bowing to him in the early Church always meant worshipping him as the co-essential Almighty Creator.',
    'Writing in the mid-4th century (c. 337–345 CE) outside Roman imperial control, the earliest great Syriac Church Father—Aphrahat the Persian Sage—defended Christian titles for Jesus in Demonstration 17 without a trace of Nicene homoousios theology: in §3–5 he explains in his own voice that “God” and “Son of God” are honorific titles God bestows on whom He pleases (just as He called Moses “God” in Exodus 7:1 and Israel/Solomon His “son”), and in §8 he equates bowing (sugda) to Jesus with Joseph bowing to Pharaoh and Daniel to Nebuchadnezzar!',
    'Aphrahat’s Demonstration 17 (§3–5, §8) on honorific titles and veneration',
    [
      '01 · A 4th-century Father speaking in his own voice (Demonstration 17): Written c. 344 CE in Persian Mesopotamia untouched by Emperor Constantine’s politics, Aphrahat’s 17th Demonstration responds directly to Jewish charges that Christians violate monotheism by calling a man “God” and “Son of God.”',
      '02 · “God” as an honorific title like Moses (Dem. 17 §3–5; Exod 7.1): Aphrahat states plainly: “We call Him God, even as He surnamed Moses by His own Name” (Exodus 7.1), listing Israel as God’s “Firstborn” (Exodus 4.22), Solomon as God’s “son” (2 Samuel 7.14), and Psalm 82.6 (“You are gods”), before concluding that the title of Divinity is “given for the highest honor in the world, and with whomsoever God is well pleased, He applies it to him.”',
      '03 · Bowing (sugda) as human reverence (taʿẓīm), not divine worship (ʿibādah) (Dem. 17 §8): To justify bowing down to Jesus, Aphrahat compares it to Daniel bowing before Nebuchadnezzar and Joseph before Pharaoh—explaining that sugda is a lawful human honor God allowed people to pay to kings and benefactors.',
      '04 · Double confirmation of the Islamic critique of Christological titles: A revered 4th-century Church Father independently confirms both pillars of the Islamic reading of the Bible—biblical “God / Son of God” language is metaphor and honorific status, and Gospel proskynesis/sugda is respectful homage (taʿẓīm), not worship of the Creator.'
    ],
    ['Aphrahat the Persian Sage, Demonstration 17 (Of Christ the Son of God), §3–5, §8 (c. 344 CE)','Exodus 4:22; 7:1; 2 Samuel 7:14; Psalm 82:6','Averroes 2 · #aphrahat'],
    [aphrTrapA,aphrTrapB],
    {
      facts:[
        ['Author & Date','Aphrahat the Persian Sage (Demonstration 17, c. 344 CE)'],
        ['Title “God” (§3–5)','Honorific title like Moses in Exod 7:1 & Psalm 82:6'],
        ['Title “Son” (§3–5)','Honorific like Israel (Ex 4:22) & Solomon (2 Sam 7:14)'],
        ['Bowing / Sugda (§8)','Honorific homage like Daniel to Nebuchadnezzar']
      ],
      quotes:[
        {by:'Aphrahat (Demonstration 17, §3, §5)',en:'We call Him God, even as He surnamed Moses… The Name of Divinity is given for the highest honor in the world.',ref:'Demonstration 17 §3, §5'},
        {by:'Aphrahat (Demonstration 17, §8)',en:'Daniel bowed down to Nebuchadnezzar and was not blamed, and Joseph bowed down to Pharaoh… God gave sugda as an honor among men.',ref:'Demonstration 17 §8'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Modern Trinitarian Apologetics',
          items:[
            'Claims calling Jesus “God” or “Son of God” means ontological equality with the Creator',
            'Claims anyone receiving proskynesis/sugda (bowing) in Scripture must be Almighty God'
          ]
        },
        right:{
          title:'Aphrahat the Persian Sage (Dem. 17, c. 344 CE)',
          items:[
            '§3–5: “We call Him God, even as He surnamed Moses” (Ex 7:1)—an honorific title God gives whom He pleases',
            '§8: Equates bowing (sugda) to Jesus with Joseph bowing to Pharaoh and Daniel to Nebuchadnezzar'
          ]
        }
      }
    }
  ),{
    who:'Deploy Aphrahat Demonstration 17 §3–5 & §8',
    forkTitle:'Two ways Trinitarians react to Aphrahat',
    forkSub:'Show how §3–5 defines “God/Son of God” as an honorific like Moses and §8 defines bowing as human homage'
  }),
  sum:'In Demonstration 17 (§3–5, §8), 4th-century Syriac Father Aphrahat the Persian Sage explicitly defends calling Jesus “God” and “Son of God” as an honorific title just like Moses in Exodus 7:1, and equates bowing (sugda) to Jesus with Joseph bowing before Pharaoh and Daniel before Nebuchadnezzar.'
});

/* ============================================================================
   B1. add('christianity/church/no-trinity-before-nicaea', ...) — ebioniten
   ============================================================================ */
const EBIO=AV2('#ebioniten','1403118034213929100');
add('christianity/church/no-trinity-before-nicaea',P(N(
  EBIO,
  'Every earliest Jewish-Christian group accepted Paul’s gospel, the virgin birth, and Jesus’s divine incarnation from the very beginning.',
  'Patristic testimony from Irenaeus (Against Heresies 1.26.2; 3.21.1), Origen (On First Principles 4.3.8 / 4.2.15), and Jerome (Against the Pelagians 3.2) proves that the early Jewish-Christian Ebionites—who remained near the Dead Sea after Jerusalem’s fall—strictly observed the Torah, revered Jerusalem, used only the Hebrew/Aramaic Gospel of Matthew, rejected Paul as an apostate traitor to the Law, and held Jesus to be a righteous human prophet sent to the lost sheep of Israel.',
  'Patristic witness on the Ebionites: Torah observance, rejection of Paul & human prophet Christology',
  [
    '01 · Irenaeus on the Ebionites rejecting Paul and keeping the Torah (Against Heresies 1.26.2): Irenaeus testifies that the Ebionites affirm the world was made by the one true God, use only the Gospel of Matthew, reject the Apostle Paul as an apostate/despiser of the Law, maintain circumcision and Mosaic Torah observance, and revere Jerusalem as the house of God.',
    '02 · Irenaeus on the Ebionites and Isaiah 7.14 (Against Heresies 3.21.1): In Book 3, Irenaeus notes that the Ebionites follow the Hebrew reading (also translated by Jewish proselytes Theodotion of Ephesus and Aquila of Pontus) rendering Isaiah 7.14 as “a young woman (ʿalmah / neanis) shall conceive,” holding Jesus to be a natural human man distinguished by virtue.',
    '03 · Origen on Ebionite adherence to Matthew 15.24 (De Principiis 4.3.8 / BKV 4.2.15): Origen notes that the Ebionites (deriving their name from Hebrew ebion, “poor”) took Jesus’s declaration in Matthew 15.24—“I was sent only to the lost sheep of the house of Israel”—in its direct literal sense that Christ was sent primarily to Israel.',
    '04 · Jerome & Justin Martyr on their Semitic Gospel traditions: Jerome (Against the Pelagians 3.2) confirms the Jewish-Christian Nazarenes/Ebionites used the Aramaic/Hebrew Gospel according to the Hebrews (regarded by many as Matthew) kept at Caesarea, while Justin Martyr (Dialogue 88) echoes their tradition of a fire kindled in the Jordan at Jesus’s baptism.'
  ],
  ['Irenaeus, Against Heresies 1.26.2; 3.21.1','Origen, On First Principles (De Principiis) 4.3.8 (BKV 4.2.15)','Jerome, Dialogue Against the Pelagians 3.2','Justin Martyr, Dialogue with Trypho 88','Averroes 2 · #ebioniten'],
  [],
  {
    facts:[
      ['Irenaeus (AH 1.26.2)','Kept Mosaic Torah, revered Jerusalem, rejected Paul'],
      ['Irenaeus (AH 3.21.1)','Followed Hebrew Isaiah 7:14 (“young woman” / ʿalmah)'],
      ['Origen (Princ. 4.3.8)','Affirmed Matt 15:24 (Jesus sent to house of Israel)'],
      ['Jerome (Adv. Pelag. 3.2)','Used Aramaic/Hebrew Gospel kept at Caesarea']
    ],
    quotes:[
      {by:'Irenaeus of Lyons (Against Heresies 1.26.2)',en:'They use the Gospel according to Matthew only, and repudiate the Apostle Paul, maintaining that he was an apostate from the Law.',ref:'Against Heresies I.26.2'},
      {by:'Origen (On First Principles 4.3.8 / BKV 4.2.15)',en:'We do not understand Matthew 15:24 like the Ebionites, who suppose Christ came primarily to the Israelites according to the flesh.',ref:'De Principiis IV.3.8'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Ebionite Jewish Christianity (Irenaeus & Origen)',
        items:[
          'Strict monotheism: One Creator God, continuing validity of Mosaic Torah',
          'Viewed Jesus as a righteous human prophet sent to Israel (Matt 15:24)',
          'Used Hebrew/Aramaic Matthew; rejected Paul as a traitor to the Law'
        ]
      },
      right:{
        title:'Gentile Pauline / Nicene Orthodoxy',
        items:[
          'Abolished Mosaic Torah observance and circumcision',
          'Elevated Jesus to co-equal God incarnate',
          'Canonized Paul’s letters and branded Torah-keeping Jewish Christians heretics'
        ]
      }
    }
  }
),{
  optWho:'Or press the Jewish-Christian witness · if they say',
  optLabel:'The earliest Jewish followers of Jesus in Palestine all accepted Paul’s gospel and worshipped Jesus as God!',
  theyWho:'Or press the Jewish-Christian witness · if they say',
  who:'Cite Irenaeus, Origen & Jerome on the Ebionites'
}));

/* ============================================================================
   B2. add('christianity/bible/authorship', ...) — augenzeuge
   ============================================================================ */
const AUGEN=AV2('#augenzeuge','1403308361096888382');
add('christianity/bible/authorship',P(N(
  AUGEN,
  'Church Fathers unanimously affirm that the four Gospels are direct first-person eyewitness memoirs written by Jesus’s own disciples.',
  'Patristic and Orthodox commentators themselves demolish the eyewitness claim: Theodoret of Cyrus explicitly admits Mark and Luke were not eyewitnesses; Theophylact of Ohrid and Euthymius Zigabenus admit that outside John, none of the other Evangelists ever testified of himself as an eyewitness; Theodore of Mopsuestia and G. K. Vlastov admit John 21:24–25 was written by third-party elders rather than John; and every major Father (Tertullian, Jerome, Chrysostom, Augustine, Chromatius, Aquinas) identifies the author of Matthew with the tax collector called only in Matthew 9:9—who prints eight full chapters of events before he was even present while speaking of himself in the third person!',
  'Patristic & Orthodox admissions on non-eyewitness Gospels, John 21.24–25, and Matthew 9.9',
  [
    '01 · Theodoret of Cyrus admits Mark and Luke were not eyewitnesses (Historia Religiosa Prologue 2): Theodoret writes explicitly that Mark and Luke were only instructed by others and “Luke, who was not an eyewitness, declares…”—immediately eliminating half the canonical Gospels from eyewitness status.',
    '02 · Theophylact & Euthymius Zigabenus admit Matthew never claims eyewitness testimony: Commenting on John 21.24, Theophylact of Bulgaria states plainly: “None of the other Evangelists bore witness concerning himself,” and Euthymius Zigabenus notes that John alone claims eyewitness testimony because the other Evangelists do not.',
    '03 · Theodore of Mopsuestia & G. K. Vlastov admit John 21.24–25 is by someone else: In his Commentary on John (on 21.24–25), Theodore of Mopsuestia states that the closing words (“there are also many other things that Jesus did…”) were not written by John himself but by another person, and Orthodox scholar G. K. Vlastov admits John 21.24 (“we know that his testimony is true”) is an attestation by later Ephesian community elders rather than John.',
    '04 · The Matthew 9.9 third-person paradox across ten Church Fathers: Tertullian (On Idolatry; On Baptism), Chromatius of Aquileia (Tract. Matt. 45.1), John Chrysostom (Hom. Matt. 30), Jerome (Comm. Matt. 1.9.9), Augustine (De Consensu Evangelistarum 2.26–27), Remigius of Rheims, Symeon the New Theologian, Theophylact, the Glossa Ordinaria, and Thomas Aquinas (Catena Aurea) all insist the Evangelist Matthew is the tax collector first called in Matthew 9.9—yet Matthew 9.9 narrates him in the third person (“he saw a man called Matthew…”) after eight chapters of events (Matt 1–8) before his call, copied largely word-for-word from non-eyewitness Mark!'
  ],
  ['Theodoret of Cyrus, Historia Religiosa (Prologue 2)','Theodore of Mopsuestia, Commentary on John (21:24–25)','Theophylact of Ohrid & Euthymius Zigabenus on John 21:24; G. K. Vlastov','Jerome (Comm. Matt. 1.9.9), Chrysostom (Hom. Matt. 30), Augustine (De Consensu 2.26–27), Chromatius (Tract. 45.1), Tertullian & Thomas Aquinas (Catena Aurea)','Averroes 2 · #augenzeuge'],
  [],
  {
    facts:[
      ['Mark & Luke','Not eyewitnesses (Theodoret of Cyrus, Hist. Rel. Prol. 2)'],
      ['John 21:24–25','Written by another / Ephesian elders (Theodore of Mopsuestia; Vlastov)'],
      ['Theophylact (Jn 21:24)','“None of the other Evangelists bore witness of himself”'],
      ['Matthew 9:9 Paradox','10 Fathers say Mt 9:9 is the author—yet written in 3rd person after Chs. 1–8']
    ],
    quotes:[
      {by:'Theodoret of Cyrus (Prologue to Historia Religiosa 2)',en:'Luke and Mark were accurately instructed by eyewitnesses… And Luke, who was not an eyewitness, declares…',ref:'Historia Religiosa, Prologue 2'},
      {by:'Theophylact of Ohrid (Commentary on John 21:24)',en:'None of the other Evangelists bore witness concerning himself.',ref:'Commentary on John 21:24'},
      {by:'Theodore of Mopsuestia (d. 428 CE, Commentary on John 21:25)',en:'The words, But there are also many other things that Jesus did, do not come from John, but from someone else.',ref:'Commentary on John 21:24–25'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Mark, Luke & John 21:24–25',
        items:[
          'Mark & Luke: Explicitly admitted as non-eyewitnesses (Theodoret)',
          'John 21:24–25: Admitted by Theodore of Mopsuestia & Vlastov as written by someone else / elders'
        ]
      },
      right:{
        title:'The Matthew 9:9 Trap (10 Fathers)',
        items:[
          'Jerome, Chrysostom, Augustine, Chromatius, Theophylact & Aquinas identify the author with Matt 9:9',
          'Yet Matt 1–8 happens before his call, Matt 9:9 speaks of “a man called Matthew” in 3rd person, and copies Mark!'
        ]
      }
    }
  }
),{
  optWho:'Or press the patristic eyewitness concessions · if they say',
  optLabel:'The Church Fathers confirm that Matthew and John wrote firsthand eyewitness accounts!',
  theyWho:'Or press the patristic eyewitness concessions · if they say',
  who:'Cite Theodoret, Theodore of Mopsuestia, Theophylact & the Matt 9:9 trap'
}));

/* ============================================================================
   B3. add('christianity/bible/gospel-of-peter-crucifixion', ...) — kreuzigung_petrus + kirchenvaeter_petrus
   ============================================================================ */
const KREUZ=AV2('#kreuzigung · #kirchenväter','1446241423707078788');
add('christianity/bible/gospel-of-peter-crucifixion',P(N(
  KREUZ,
  'Even if the Gospel of Peter was read at Rhossus, its crucifixion narrative still affirms the standard church story of Jesus dying in agony on the cross.',
  'A close sequential reading of the Akhmim crucifixion fragment of the Gospel of Peter reveals why the official Church ultimately suppressed it—and how remarkably its sequence aligns with Quran 4:157–158 (shubbiha lahum): on the cross Jesus is silent “as though having no pain,” total darkness falls so people wander with lamps and fall down in chaos, Jesus cries “My power, my power” and “was taken up” (analēphthē), the Jews rejoice when the sun returns thinking they succeeded, an unnamed “body” is taken down, and the angel at the tomb declares he “has gone away to the place from which he was sent”!',
  'The Gospel of Peter’s crucifixion sequence compared with Quran 4.157–158 and patristic extra-canonical citations',
  [
    '01 · Painless silence, darkness & chaos on the cross (Gospel of Peter §10–18): While hanging on the cross, Jesus remains silent “as though having no pain” (§10). At midday total darkness covers Judea; people go about with lamps stumbling and falling down in confusion (§15, 18)—creating an explicit visual obstruction.',
    '02 · “My power, my power… and he was taken up” (§19): Instead of crying “My God, why have you forsaken me?”, the Lord cries out, “My power, my power, you have left me!”—and the text immediately states: “And having said this, he was taken up (analēphthē)” (§19), whereupon the sun shines again and the Jews rejoice thinking they have killed him.',
    '03 · Only “the body” is taken down + direct ascension to where he was sent (§21–24, 56): After Jesus is “taken up” during the darkness, the text refers impersonalized to drawing nails from “the hands of the Lord,” “the body” touching the earth, and Joseph washing “the body”—and at the tomb the angel tells the women: “He is risen and has gone away to the place from which he was sent” (§56), merging deliverance and ascension into one event.',
    '04 · Remarkable structural harmony with Quran 4.157–158 & Hippolytus’s extra-canonical witnesses: This early 2nd-century passion sequence—no real suffering, darkness/chaos, Jesus “taken up” to where he was sent while onlookers rejoice over “the body” thinking they crucified him—parallels Quran 4.157–158 (“they neither killed him nor crucified him, but it was made to appear so to them… rather, Allah raised him up to Himself”), alongside Hippolytus of Rome (Refutation of All Heresies 5.7) documenting how widely rival extra-canonical gospels (such as the Naassene Gospel of Thomas fragment on the hidden fourteen aeons) circulated in early Christianity.'
  ],
  ['Gospel of Peter (Akhmim Fragment, §10–24, 56)','Quran 4:157–158 (shubbiha lahum)','Hippolytus of Rome, Refutation of All Heresies 5.7','Averroes 2 · #kreuzigung & #kirchenväter'],
  [],
  {
    facts:[
      ['Gospel of Peter §10','Silent on the cross “as though having no pain”'],
      ['Gospel of Peter §15–19','Darkness, falling with lamps, “he was taken up”'],
      ['Gospel of Peter §56','“Gone away to the place from which he was sent”'],
      ['Quran 4:157–158 Parallel','Taken up to God while it “appeared so to them”']
    ],
    quotes:[
      {by:'Gospel of Peter (§10, §19)',en:'He was silent as though having no pain… The Lord cried out, My power, my power, you have left me! And he was taken up.',ref:'Gospel of Peter 4:10; 5:19'},
      {by:'Gospel of Peter (§56)',en:'For he is risen and has gone away to the place from which he was sent.',ref:'Gospel of Peter 13:56'},
      {by:'Hippolytus of Rome (Refutation of All Heresies 5.7)',en:'They expressly teach in the Gospel entitled according to Thomas: He who seeks me will find me in children from seven years old…',ref:'Refutatio V.7'}
    ],
    visual:{
      kind:'steps',
      items:[
        ['1 · No Pain & Darkness (§10–18)','Jesus is silent “as though having no pain”; darkness falls, and people with lamps fall down in visual confusion.'],
        ['2 · “He Was Taken Up” (§19)','Jesus cries “My power, my power!” and is immediately “taken up” (analēphthē) before the sun shines again.'],
        ['3 · Onlookers Fooled (§20–24)','The Jews rejoice thinking they succeeded, and “the body” is unnailed, washed, and buried.'],
        ['4 · Gone Where Sent (§56 / Q 4:157–158)','The angel declares he has gone “to the place from which he was sent”—echoing Quran 4:157–158 (shubbiha lahum + raised to Allah).']
      ]
    }
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Even if the Gospel of Peter was read in early churches, its crucifixion narrative still teaches the standard church view of Jesus dying on the cross!',
  theyWho:'Watch out · if they say',
  who:'Walk through the Akhmim Passion sequence & Quran 4:157–158'
}));

/* ============================================================================
   B4. add('christianity/church/d-ia-church-fathers/t-origen-of-alexandria', ...) — origenes_gebet + origenes_fragmente
   ============================================================================ */
const ORIG=AV2('#origenes-über-das-gebet · #origenes-fragmente','1456927443624656938');
add('christianity/church/d-ia-church-fathers/t-origen-of-alexandria',P(N(
  ORIG,
  'Origen worshiped Jesus as co-equal God and prayed directly to the Son—and catena fragments from his commentaries prove his full Nicene orthodoxy!',
  'In his surviving Greek treatise On Prayer (De Oratione 13.1; 15.1–2; 16.1, ed. Paul Koetschau, GCS), Origen explicitly forbids offering supreme prayer (proseuchē) to Christ: because the Son is a created/subordinate being who differs from the Father in essence and substance (ousia and hypokeimenon), “we must not pray to any created being, not even to Christ himself, but only to the God and Father of the universe, to whom our Savior himself prayed”—a passage so anti-Trinitarian that Jerome (Letter 94.14) compared Origen to Pharaoh, while modern patristic scholars G. L. Prestige, Mark Edwards, Erich Klostermann, Ronald Heine, and Roger Pearse confirm both his subordinationism and the unreliability of medieval catena fragments!',
  'Origen’s De Oratione 15.1–16.1 forbidding prayer to Christ & the unreliability of Catena fragments',
  [
    '01 · Explicit prohibition of praying to Christ (De Oratione 15.1, ed. Koetschau GCS): Origen rules that if we understand what supreme prayer (proseuchē) truly is, “perhaps we ought not to pray to any of the creatures (genētōn), not even to Christ himself, but only to the God and Father of the universe, to whom our Savior himself prayed… For when he heard Teach us to pray, he did not teach to pray to himself, but to the Father, saying: Our Father who art in heaven.”',
    '02 · The Son differs from the Father in essence/substance (ousia) & plural prayer is absurd (De Oratione 15.1–2): Origen argues that since the Son “differs in essence and underlying substance (ousia kai hypokeimenō) from the Father,” one must pray either to the Son alone (absurd), to both (which would require plural verbs like “grant ye, save ye,” nowhere found in Scripture), or to the Father alone through Christ as High Priest appointed by oath (Psalm 110.4).',
    '03 · Praying to the Son is “a sin of ignorance” & the Father is “Lord of the Son” (De Oratione 13.1; 16.1; Jerome Ep. 94.14): In 13.1 Origen notes Jesus himself obtained by prayer what he might not have received without praying; in 16.1 he states that those who pray to the Son commit “a sin of ignorance” for lacking critical inquiry and calls the Father “the Lord of the Son”; and in Letter 94.14 Jerome furiously condemns Origen for teaching “that the Son is not to be worshipped/prayed to, nor the Father along with the Son.”',
    '04 · Scholarly consensus (Prestige & Mark Edwards) + collapse of Catena fragments (Klostermann, Heine, Roger Pearse): G. L. Prestige (God in Patristic Thought, 1952) and Oxford’s Mark Edwards (Catholicity and Heresy in the Early Church, 2009; SEP 2022) cite De Oratione 15.1 as proof of Origen’s subordinationism and distinction of ousia; meanwhile, patristic editors Erich Klostermann (GCS), Ronald Heine, and Roger Pearse warn that medieval catena fragments cited by apologists to “rescue” Origen come from heavily altered multi-author commentary chains with missing or misattributed author initials.'
  ],
  ['Origen, On Prayer (De Oratione) 13.1; 15.1–2; 16.1 (ed. Paul Koetschau, GCS)','Jerome, Letter 94, §14','G. L. Prestige, God in Patristic Thought (1952)','Mark Edwards (Oxford), Catholicity and Heresy in the Early Church (2009) & Stanford Encyclopedia of Philosophy (2014/2022)','Erich Klostermann (GCS), Ronald Heine & Roger Pearse on Origen Catena Fragments','Averroes 2 · #origenes-über-das-gebet & #origenes-fragmente'],
  [],
  {
    facts:[
      ['De Oratione 15.1','“Pray to no created being, not even to Christ himself”'],
      ['Essence (Ousia)','Son differs in ousia & substance from the Father (15.1)'],
      ['De Oratione 16.1','Praying to the Son is a “sin of ignorance”; Father is Lord of the Son'],
      ['Jerome (Ep. 94.14)','Attacked Origen for saying “the Son is not to be adored”']
    ],
    quotes:[
      {by:'Origen (On Prayer / De Oratione 15.1, ed. Koetschau)',en:'We must not pray to any created being, not even to Christ himself, but only to the God and Father of all.',ref:'De Oratione 15.1'},
      {by:'Origen (On Prayer / De Oratione 16.1)',en:'Those who pray to the Son commit a sin of ignorance for lack of inquiry… The Father is also the Lord of the Son.',ref:'De Oratione 16.1'},
      {by:'Mark Edwards (Oxford, Stanford Encyclopedia of Philosophy)',en:'Origen stipulates in On Prayer (15.1) that the Son should not receive the prayer of adoration offered to the Father, differing in ousia.',ref:'SEP: Origen (2014 / rev. 2022)'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Origen’s Surviving Greek (De Oratione 15.1–16.1)',
        items:[
          'Forbids supreme prayer (proseuchē) to any creature, “not even to Christ himself”',
          'States the Son differs from the Father in essence and substance (ousia)',
          'Calls praying to the Son a “sin of ignorance” and calls the Father “Lord of the Son”'
        ]
      },
      right:{
        title:'Jerome & Modern Patristic Scholarship',
        items:[
          'Jerome (Ep. 94.14): Likened Origen to Pharaoh for denying adoration to the Son',
          'G. L. Prestige & Mark Edwards: Confirm marked subordinationism and different ousia',
          'Klostermann, Heine & Pearse: Expose medieval Catena fragments as unreliable chains'
        ]
      }
    }
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Origen worshiped and prayed to Jesus as co-essential God, and catena fragments from his Matthew commentary prove his orthodoxy!',
  theyWho:'Watch out · if they say',
  who:'Drop De Oratione 15.1–16.1, Jerome Ep. 94.14 & the Catena critique'
}));

})();
