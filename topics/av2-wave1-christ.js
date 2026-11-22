/* Averroes 2 Wave 1 (Christology, Canon & Church Fathers) — 2026-11-22.
   Translates and synthesizes 6 German Averroes 2 dossiers (server 1295033866385358860)
   across 4 new Tactical Debate Playbook cards and 2 add() enrichments:
   1. NEW: christianity/jesus/mark-6-5-jesus-could-not-do-miracles (#jesus-kann-nicht-wunder)
   2. NEW: christianity/bible/gospel-of-peter-crucifixion (#evangelium-nach-petrus)
   3. NEW: christianity/practice/baptism-paradox-salvation (#taufe-paradox)
   4. NEW: christianity/bible/muratorian-canon-fragment (#kanon-muratori)
   5. add(): christianity/church/no-trinity-before-nicaea (#mehrheit-der-christen-waren-gegen-trinität)
   6. add(): christianity/church/d-ia-church-fathers/t-ignatius-of-antioch (#ignatius-briefe-authenzität) */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('av2-wave1-christ: no card',key); };

const AV2=(sub,id)=>({credit:'Averroes 2 · '+sub,link:'https://discord.com/channels/1295033866385358860/'+id});

/* ============================================================================
   1. NEW Tactical Playbook card: christianity/jesus/mark-6-5-jesus-could-not-do-miracles
   ============================================================================ */
const MK65=AV2('#jesus-kann-nicht-wunder','1345372591849734245');

const mk65TrapA=P(N(
  MK65,
  'Origen, Gregory of Nazianzus, and John Cassian explain that could not only means Jesus chose to require human faith—not that he lacked divine omnipotence.',
  'Those patristic defenses actually concede the core problem rather than solving it. Origen explicitly stresses Mark wrote he could not rather than he would not; Gregory of Nazianzus treats healing like medical care requiring two-sided conditions; John Cassian alters Nestle-Aland’s no mighty work into no great miracles; and Luke 22:50–51 breaks their entire faith-condition rule by showing Jesus healing an unbelieving enemy’s ear.',
  'Patristic excuses vs. Nestle-Aland text and Luke 22.50–51',
  [
    '01 · Origen admits inability rather than refusal (Comm. Matt. 10): Commenting on Matthew 13.58 and Mark 6.5, Origen warns readers to notice Mark’s exact wording—it does not say he would not, but he could not (ouk edynato)—comparing it to the disciples’ failure in Matthew 17.19–20 and Peter’s doubt in Matthew 14.31.',
    '02 · Gregory compares Jesus to a physician (Or. 30.10–11): Gregory distinguishes between absolute logical impossibilities (like God being evil or two times two equaling fourteen) and conditional limits where healing needs both patient faith and healer power, just like medical treatment—a striking limitation for supposedly omnipotent God.',
    '03 · Cassian softens the Greek text (Conferences 13.15): Writing c. 435 CE in the Third Conference of Abbot Chaeremon, Cassian paraphrases Mark 6.5 as no great miracles, whereas the critical Greek text (Nestle-Aland) states he could do no mighty work there apart from laying hands on a few sick.',
    '04 · Luke 22.50–51 breaks the unbelief excuse: When a disciple cuts off the right ear of the high priest’s servant—an active enemy, not a believer—Jesus immediately heals him. Claiming he could heal an enemy spontaneously yet was blocked in Nazareth exposes a genuine limit on his power, not a fixed moral rule.'
  ],
  ['Mark 6:5 (Nestle-Aland)','Luke 22:50–51','Origen, Commentary on Matthew 10','Gregory of Nazianzus, Oration 30.10–11','John Cassian, Conferences 13.15'],
  [],
  {
    facts:[
      ['Origen (Comm. Matt. 10)','Not “he would not,” but “he could not”'],
      ['Gregory (Or. 30.10–11)','Compares Jesus’s healing to medical care'],
      ['Cassian (Conf. 13.15)','Softens “no work” into “no great miracles”'],
      ['Luke 22:50–51','Heals an unbelieving enemy’s severed ear']
    ],
    quotes:[
      {by:'Origen (Commentary on Matthew, Book 10)',en:'Note carefully the words: he could do no mighty work there; for it does not say he would not, but he could not.',ref:'Comm. Matt. 10'},
      {by:'Gregory of Nazianzus (c. 390 CE)',en:'For healing, an essential condition is required on both sides: faith on the part of the patients and power on that of the healer.',ref:'Oration 30 (On the Son), 10–11'},
      {by:'John Cassian (c. 435 CE)',en:'Thus the generosity of God is measured according to the capacity of human faith.',ref:'Conferences 13.15'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Origen, Gregory, and Cassian show could not just means Jesus chose to wait for faith—not a lack of power!',
  theyWho:'Watch out · if they say',
  who:'Expose Cassian’s slip & Luke 22:50–51'
});

const mk65TrapB=P(N(
  MK65,
  'Jesus still performed mighty miracles that ordinary humans cannot do—his healing power proves he is God.',
  'The Gospels themselves refute turning miracle-working into proof of deity. Across all four Gospels, Jesus repeatedly credits the other person’s faith as the effective cause of the miracle and explicitly promises that ordinary believers will move mountains—and in John 14:12, perform even greater works than he did.',
  'Faith-driven miracles and John 14.12’s greater works',
  [
    '01 · Healing credited to the recipient’s faith (Matt 15.28): Jesus tells the Canaanite woman her great faith healed her daughter, tells blind Bartimaeus (Mark 10.52) and the Samaritan leper (Luke 17.19) that your faith has healed/saved you, and tells the sinful woman (Luke 7.50) your faith has saved you—making human faith a prerequisite, just as in Lazarus’s raising (John 11.40).',
    '02 · Doubt cancels miracle power (Matt 14.30–31; 17.19–20): When Peter begins sinking in the water, Jesus rebukes his little faith and doubt; when the disciples fail to cast out a demon, Jesus blames their little faith—showing miracles operate conditionally through faith in God.',
    '03 · Believers promised “greater works” (John 14.12): Jesus states all things are possible to one who believes (Mark 9.23), tells disciples mustard-seed faith moves mountains into the sea (Matt 17.20; 21.21–22), and promises in John 14.12 that whoever believes in him will do the works he does—and greater works than these.'
  ],
  ['Matthew 14:30–31; 15:28; 17:19–20; 21:21–22','Mark 9:23; 10:52','Luke 7:50; 17:19','John 11:40; 14:12'],
  [],
  {
    facts:[
      ['Matt 15:28 / Mk 10:52','Recipient’s faith effects the healing'],
      ['John 11:40','Faith required before Lazarus is raised'],
      ['Matt 17:20 / 21:21','Disciples can move mountains by faith'],
      ['John 14:12','Believers will do “greater works” than Jesus']
    ],
    quotes:[
      {by:'John 14:12 (Jesus)',en:'Whoever believes in me will also do the works that I do; and greater works than these will he do.',ref:'John 14:12'},
      {by:'Mark 9:23 (Jesus)',en:'All things are possible for one who believes.',ref:'Mark 9:23'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Only God can heal the sick and command nature the way Jesus did—his miracles prove his divinity!',
  theyWho:'Watch out · if they say',
  who:'Cite John 14:12 & faith-healed verses'
});

card('christianity/jesus/mark-6-5-jesus-could-not-do-miracles',{
  title:'Mark 6:5: “Jesus could do no mighty work there”',
  k:'Gospel of Mark · Redaction & Power',
  blurb:'Mark’s ouk edynato (“could not”) vs. Matthew 13:58’s redaction, audience-faith limits, and Cassian, Origen & Gregory.',
  claim:'Jesus’s miracles prove he possessed unlimited divine omnipotence as God incarnate.',
  tree:P(N(
    MK65,
    'Jesus performed divine miracles on his own authority, proving he is the omnipotent God.',
    'Mark 6:5 directly contradicts omnipotence: in his own hometown filled with unbelief, Jesus “could do no mighty work there” (ouk edynato), managing only to lay hands on a few sick people—a line so embarrassing to later scribes and evangelists that Matthew 13:58 rewrote “could not” into “did not do many.” Throughout the Gospels, Jesus ties miracles to human faith (John 11:40; Mark 10:52) and promises followers “greater works” (John 14:12).',
    'Ouk edynato in Mark 6.5 and Matthew 13.58’s softening',
    [
      '01 · Explicit inability in Mark 6.5 (ouk edynato): In the earliest Gospel, Jesus’s power in Nazareth is strictly bounded—he could do no mighty work there (ouk edynato), except laying hands on a few sick people. An omnipotent Creator cannot have His power neutralized by skeptical neighbors.',
      '02 · Matthew 13.58 redacts away the embarrassment: Copying Mark’s scene, the later author of Matthew alters could do no mighty work (ouk edynato) to he did not do many mighty works there (ouk epoiēsen), concealing the theological problem of a limited Christ.',
      '03 · Miracles depend on human faith (Matt 15.28; Luke 7.50; John 11.40): Across the Gospels, Jesus repeatedly attributes cures to the recipient’s faith (Mark 10.52; Luke 17.19) and tells Martha at Lazarus’s tomb that seeing God’s glory depends on believing—confirming his miracles operated through God-granted faith rather than unconditional omnipotence.',
      '04 · Believers promised greater works (John 14.12; Matt 17.20): Far from making miracle-working a badge of deity, Jesus tells believers that mustard-seed faith moves mountains and that anyone who believes in him will perform even greater works than he did.'
    ],
    ['Mark 6:5–6; 9:23; 10:52','Matthew 13:58; 14:30–31; 15:28; 17:19–20; 21:21–22','Luke 7:50; 17:19; 22:50–51','John 11:40; 14:12'],
    [mk65TrapA,mk65TrapB],
    {
      facts:[
        ['Mark 6:5 (Greek)','ouk edynato — “he could do no mighty work”'],
        ['Matthew 13:58','Redacts “could not” to “did not do many”'],
        ['John 14:12','Followers promised “greater works”'],
        ['Luke 22:50–51','Breaks Cassian’s “unbelief” rule']
      ],
      quotes:[
        {by:'Mark 6:5 (Nestle-Aland)',en:'And he could do no mighty work there, except that he laid his hands on a few sick people and healed them.',ref:'Mark 6:5'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Mark 6:5 (Earlier Gospel)',
          items:[
            'Uses ouk edynato (“he was unable / could not”)',
            'No mighty work done—only a few sick healed',
            'Exposes limited power dependent on onlookers’ faith'
          ]
        },
        right:{
          title:'Matthew 13:58 (Later Redaction)',
          items:[
            'Rewrites to ouk epoiēsen (“he did not do many”)',
            'Removes the verb of inability (edynato)',
            'Softens the Christological embarrassment'
          ]
        }
      }
    }
  ),{
    who:'Expose Mark 6:5 & redaction',
    forkTitle:'Two common apologetic escapes',
    forkSub:'Counter the Origen/Gregory/Cassian “moral cooperation” defense or the “only God works miracles” claim'
  }),
  sum:'Mark 6:5 explicitly states Jesus “could do no mighty work there” (ouk edynato), a limitation Matthew 13:58 redacted away and patristic excuses like Cassian’s fail to reconcile with Luke 22:50–51 and John 14:12.'
});

/* ============================================================================
   2. NEW Tactical Playbook card: christianity/bible/gospel-of-peter-crucifixion
   ============================================================================ */
const GPET=AV2('#evangelium-nach-petrus','1446158910569447464');

const gpetTrapA=P(N(
  GPET,
  'Bishop Serapion of Antioch condemned the Gospel of Peter as a Docetic heresy—proving the early Church cleanly kept apocrypha out of orthodox worship.',
  'Serapion’s own letter preserved by Eusebius (HE VI.12) proves the exact opposite. Visiting the church of Rhossus c. 190 CE, Serapion initially permitted the Gospel of Peter to be read aloud without even reading it through—and once he borrowed a copy from Docetic circles and read it completely, he admitted that “most of it agreed with the orthodox account.”',
  'Serapion at Rhossus, Origen & Irenaeus’s Petrine confusion',
  [
    '01 · Serapion approved reading it at Rhossus (Eusebius, HE VI.12.2): As Gennadius of Marseille (De Viris Illustribus 41) also reports, the church at Rhossus in Cilicia was already reading the Gospel of Peter liturgically. On his visit, Serapion declared that if it caused no dissension, it should be read.',
    '02 · Most of it matched orthodox teaching: After hearing of secret heresy, Serapion borrowed the text from Docetic successors (linking their views to Marcion), read it fully, and conceded that the greater part agreed with orthodox teaching on the Savior, while only certain additions diverged.',
    '03 · Origen cited it as credible history (Comm. Matt. 10.17): Decades later, Origen (d. 253 CE) still appealed to the tradition preserved in the Gospel according to Peter alongside the Book of James to explain Jesus’s brothers as Joseph’s sons from a prior marriage.',
    '04 · Petrine confusion in Irenaeus 3.11.7 (Dobschütz): Patristic scholar Ernst von Dobschütz notes the Great Church wanted its own Gospel of Peter and tied Mark to Peter’s authority—likely causing Irenaeus (Against Heresies 3.11.7) to mistake Docetic use of the Gospel of Peter for the Gospel of Mark.'
  ],
  ['Eusebius, Church History VI.12.2–6 (Serapion)','Gennadius of Marseille, De Viris Illustribus 41','Origen, Commentary on Matthew 10.17','Irenaeus, Against Heresies 3.11.7 (via E. von Dobschütz)'],
  [],
  {
    facts:[
      ['Serapion (c. 190 CE)','Initially allowed public reading at Rhossus'],
      ['Serapion’s Verdict','“Most of it agreed” with orthodox teaching'],
      ['Origen (d. 253 CE)','Cited Gospel of Peter as historical witness'],
      ['Docetists & Mark','Irenaeus 3.11.7 likely confused Peter & Mark']
    ],
    quotes:[
      {by:'Serapion of Antioch (Eusebius, HE VI.12)',en:'If this is the only thing that causes dissension among you, let it be read.',ref:'Letter to Rhossus (c. 190 CE)'},
      {by:'Serapion of Antioch (Eusebius, HE VI.12)',en:'We found that most of it agreed with the orthodox account of the Savior, though some points were inconsistent.',ref:'Letter to Rhossus (c. 190 CE)'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Bishop Serapion exposed the Gospel of Peter as a Docetic heresy—proving the Church cleanly rejected it!',
  theyWho:'Watch out · if they say',
  who:'Cite Serapion’s own letter & Origen'
});

const gpetTrapB=P(N(
  GPET,
  'Extra-canonical Petrine writings like the Preaching of Peter or Clementine Homilies are late inventions with zero independent early Jesus traditions.',
  'Second-century apologists and critical source analysis show the reverse: Aristides of Athens (early 2nd c.) directly used the Kerygma Petri, Justin Martyr quoted the Gospel of Peter’s mocking “Judge us!” trial detail, and the 3rd-century Pseudo-Clementine Homilies preserve demonstrable pre-canonical and pre-Pauline traditions.',
  'Justin, Aristides & pre-canonical layers in Petrine texts',
  [
    '01 · Justin Martyr & Aristides use Petrine apocrypha: Justin Martyr cites Peter’s memoirs (Dialogue with Trypho 106) and quotes the Gospel of Peter’s detail that mockers sat Jesus on a judgment seat shouting “Judge us!” (First Apology 35). Early 2nd-century apologist Aristides of Athens (Apology 5.39, 41; 15.128) likewise drew directly on the apocryphal Kerygma Petri preserved by Clement in Stromata 6.',
    '02 · Anti-Pauline Clementines confirm independent early sources: Despite fierce anti-Paulinism in Pseudo-Clementine Homilies (e.g. II.17), Agraphon 87 (“Become competent money-changers”) closely matches 1 Thessalonians 5.21–22, and Agraphon 83 harmonizes with Ephesians 4.27 and 1 Timothy 5.14—proving independent access to a pre-Pauline source.',
    '03 · Multiple attestation, Semitic substratum & archaic titles: Agrapha 75 and 131 (Golden Rule) match Justin and the Syriac Didascalia; Agraphon 82 (dei/anankē variants) betrays a Hebrew original; Agraphon 134 shares early Didache/Constitutions apocalyptic motifs; Agraphon 84 traces via Clement to Symmachus; and the archaic title “the true prophet” (Homilies II.17) plus Synoptic-style logia witness to a pre-canonical layer.'
  ],
  ['Justin Martyr, First Apology 35; Dialogue with Trypho 106','Aristides of Athens, Apology (5.39, 41; 15.128) & Clement, Stromata 6','Pseudo-Clementine Homilies II.17 & Agrapha 75, 82–84, 87, 131, 134'],
  [],
  {
    facts:[
      ['Justin (1 Apol. 35)','Quotes Gospel of Peter’s “Judge us!” scene'],
      ['Aristides (2nd c.)','Drew directly on apocryphal Kerygma Petri'],
      ['Clementines Agrapha','Pre-Pauline & Hebrew substrata preserved'],
      ['“True Prophet”','Archaic Petrine Christology (Hom. II.17)']
    ],
    quotes:[
      {by:'Justin Martyr (c. 155 CE)',en:'For they, as the prophet said, set him in mockery on a judgment seat and said, Judge us!',ref:'First Apology 35'},
      {by:'Pseudo-Clementine Homilies',en:'Our Lord Jesus Christ, who is the true prophet, said first a false gospel must come, proclaimed by some deceiver.',ref:'Homilies II.17'}
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Extra-canonical Petrine writings are late fabrications with no authentic early traditions outside the four Gospels!',
  theyWho:'Watch out · if they say',
  who:'Show Justin, Aristides & pre-canonical Agrapha'
});

card('christianity/bible/gospel-of-peter-crucifixion',{
  title:'Gospel of Peter & Early Petrine Traditions',
  k:'Canon & Apocrypha · Passion Narratives',
  blurb:'Serapion at Rhossus, Docetic crucifixion views, Justin’s “Judge us!” quote, Origen, Aristides & pre-canonical Clementine layers.',
  claim:'The four canonical Gospels held an unchallenged monopoly from the start, while the Gospel of Peter was an obscure heretical forgery.',
  tree:P(N(
    GPET,
    'The four canonical Gospels stood alone from the beginning; texts like the Gospel of Peter were rejected immediately as late Gnostic forgeries.',
    'Early Christian witnesses tell a far messier story. In the 2nd century, Aristides used the Kerygma Petri, Justin Martyr echoed the Gospel of Peter’s passion trial (“Judge us!”) and “memoirs” of Peter, and Bishop Serapion of Antioch (c. 190 CE) initially permitted the Gospel of Peter to be read in the church of Rhossus—later admitting “most of it agreed with the orthodox account” even while Docetists used it to support non-orthodox views of Christ’s suffering.',
    'Petrine apocrypha in 2nd–3rd century churches and passion texts',
    [
      '01 · Liturgical use inside an orthodox church (Eusebius, HE VI.12): Around 190 CE, Bishop Serapion found the congregation of Rhossus reading the Gospel of Peter and initially authorized it without reading it through; only after learning Docetic readers (linked by him to Marcion) relied on it did he inspect it and find “most of it agreed” alongside divergent passages.',
      '02 · Early orthodox fathers used Petrine extra-canonical texts: Justin Martyr (First Apology 35) includes the mocking “Judge us!” throne scene attested in the Gospel of Peter and cites Peter’s memoirs (Dialogue 106); Aristides drew on the Kerygma Petri; and Origen (Comm. Matt. 10.17) treated the Gospel of Peter as historical testimony on Jesus’s brothers.',
      '03 · Docetic passion readings & blurred Gospel boundaries: Docetists—who denied Jesus truly suffered death on the cross—embraced the Gospel of Peter early on, and Ernst von Dobschütz notes that the Great Church’s own desire for a Petrine Gospel (linking Mark to Peter) led Irenaeus (Against Heresies 3.11.7) to confuse Docetic use of Peter with Mark.',
      '04 · Pre-canonical Petrine layers in Clementine Homilies: Even the anti-Pauline Pseudo-Clementine Homilies (II.17) preserve “the true prophet” Christology alongside pre-Pauline, Hebrew-substratum, and multi-attested Jesus sayings (Agrapha 75, 82–84, 87, 131, 134), proving authentic Jesus material circulated outside the four Gospels.'
    ],
    ['Eusebius, Church History VI.12.2–6','Gennadius, De Viris Illustribus 41','Justin Martyr, First Apology 35; Dialogue 106','Origen, Commentary on Matthew 10.17','Ernst von Dobschütz, Das Kerygma Petri','Pseudo-Clementine Homilies II.17'],
    [gpetTrapA,gpetTrapB],
    {
      facts:[
        ['Rhossus (c. 190 CE)','Church read Gospel of Peter openly'],
        ['Serapion (HE VI.12)','Admitted “most of it agreed” with orthodoxy'],
        ['Docetic Use','Early non-suffering passion circles favored it'],
        ['Origen & Justin','Used Petrine apocryphal details openly']
      ],
      quotes:[
        {by:'Origen (d. 253 CE)',en:'Based on the tradition in the Gospel according to Peter or the Book of James, some say Jesus’s brothers were Joseph’s sons.',ref:'Commentary on Matthew 10.17'}
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Apologetic Canon Myth',
          items:[
            'Only the four canonical Gospels read in 2nd-c. churches',
            'Gospel of Peter dismissed immediately as pure heresy',
            'No authentic Jesus traditions outside Matthew–John'
          ]
        },
        right:{
          title:'2nd–3rd Century Patristic Record',
          items:[
            'Rhossus church read Gospel of Peter with Serapion’s initial OK',
            'Justin, Aristides & Origen used extra-canonical Petrine works',
            'Docetists used it while Serapion found most matched orthodoxy'
          ]
        }
      }
    }
  ),{
    who:'Trace Petrine circulation',
    forkTitle:'Two common apologetic replies',
    forkSub:'Counter Serapion’s eventual rejection or claims that extra-canonical Petrine texts hold zero early tradition'
  }),
  sum:'Second- and third-century witnesses—from Justin Martyr and Aristides to Bishop Serapion of Antioch (who initially approved reading the Gospel of Peter at Rhossus and admitted most of it agreed with orthodoxy) and Origen—shatter the myth of a sealed 2nd-century four-Gospel monopoly.'
});

/* ============================================================================
   3. NEW Tactical Playbook card: christianity/practice/baptism-paradox-salvation
   ============================================================================ */
const BAPT=AV2('#taufe-paradox','1339631825647173642');

const baptTrapA=P(N(
  BAPT,
  'Just as a circumcised father still begets uncircumcised sons with foreskins, baptized parents still pass Original Sin on to their children.',
  'That analogy fails by committing a category mistake between physical anatomy and spiritual guilt. A foreskin is an inherited biological trait encoded in human genetics—surgery on a parent never alters DNA—whereas Original Sin is defined as an inherited moral or spiritual guilt. Biology cannot explain how spiritual guilt passes between cleansed souls.',
  'Why the circumcision (foreskin) analogy collapses',
  [
    '01 · Anatomical genetics vs. moral guilt: Circumcision removes physical tissue without modifying the parent’s genetic blueprint, so offspring naturally grow a foreskin. Original Sin, by contrast, is not a bodily organ stored in DNA.',
    '02 · Spiritual cleansing should break spiritual transmission: If baptism genuinely washes away inherited sin and regenerates the believer in grace, invoking a purely surgical analogy admits baptism leaves the inner sinful nature completely intact.',
    '03 · Unexplained guilt transfer: Comparing spiritual culpability to biological anatomy leaves unanswered how an innocent newborn inherits moral guilt from Adam—or from parents whose guilt was supposedly erased.'
  ],
  ['Averroes 2 · #taufe-paradox (Foreskin & Circumcision rebuttal)'],
  [],
  {
    facts:[
      ['Foreskin','Physical trait governed by genetics'],
      ['Original Sin','Moral/spiritual guilt, not biological tissue'],
      ['Category Error','Surgery ≠ spiritual regeneration'],
      ['Net Result','Fails to explain guilt inheritance']
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Physical Circumcision',
        items:[
          'Removes physical tissue only',
          'Does not alter parental DNA',
          'Biological trait naturally recurs in sons'
        ]
      },
      right:{
        title:'Baptism & Original Sin',
        items:[
          'Claims to wash away spiritual guilt/stain',
          'Cannot be reduced to biological genetics',
          'Still leaves baptized parents passing on sin'
        ]
      }
    }
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Just as a circumcised father still has uncircumcised sons, baptized parents still pass on Original Sin!',
  theyWho:'Watch out · if they say',
  who:'Expose the biology vs. guilt category error'
});

const baptTrapB=P(N(
  BAPT,
  'Just as winnowed, cleaned wheat produces new crops that still grow with chaff, baptized Christians still produce children carrying Original Sin.',
  'Like the foreskin comparison, the wheat-and-chaff analogy breaks down on every level. Chaff is an external physical husk mechanically separated by human labor; Original Sin is supposed to be an internal corruption of human nature. Comparing an inner spiritual stain to an outer agricultural husk explains neither how guilt is transmitted nor why baptism fails to cure human nature.',
  'Why the wheat-and-chaff analogy collapses',
  [
    '01 · External byproduct vs. inner nature: Chaff is an outer protective husk removed physically during threshing, whereas Original Sin is taught as a deep inner corruption of the human soul and will.',
    '02 · Mechanical labor vs. divine sacrament: Wheat does not purify its seed’s genetics when winnowed—if baptism is merely an external rinse analogous to winnowing chaff, then it never transforms fallen human nature at all.',
    '03 · Zero explanation of moral inheritance: Agricultural husks follow botanical biology; moral guilt is an abstract ethical status tied to personal responsibility. Neither chaff nor foreskins explain how an infant inherits someone else’s sin.'
  ],
  ['Averroes 2 · #taufe-paradox (Wheat-and-chaff rebuttal)'],
  [],
  {
    facts:[
      ['Chaff','External agricultural husk'],
      ['Original Sin','Internal moral/spiritual corruption'],
      ['Human Labor','Physical winnowing ≠ spiritual cure'],
      ['Core Gap','Still cannot explain inherited guilt']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Cleaned wheat still grows new stalks with chaff—that is how baptized parents pass Original Sin to babies!',
  theyWho:'Watch out · if they say',
  who:'Dismantle the wheat-and-chaff analogy'
});

card('christianity/practice/baptism-paradox-salvation',{
  title:'The Baptism & Original Sin Paradox',
  k:'Sacraments · Original Sin',
  blurb:'Why baptism fails to stop sin’s inheritance or human sinfulness, creating a circular paradox—and why the foreskin & chaff analogies fail.',
  claim:'Baptism washes away Original Sin inherited from Adam and Eve and places the believer into a cleansed state of grace.',
  tree:P(N(
    BAPT,
    'Baptism removes inherited Original Sin from Adam and Eve, restoring the soul to a state of grace.',
    'The doctrine of baptismal removal of Original Sin collapses into three internal contradictions. If baptism genuinely removes Original Sin, why do baptized parents still pass a tainted nature to their babies, why do baptized adults remain just as prone to sin, and why do sinless infants need baptism at all—creating a vicious circle where Original Sin justifies infant baptism precisely because baptism never actually removes Original Sin.',
    'Three logical contradictions in baptismal Original Sin',
    [
      '01 · Removed yet still inherited: If baptism genuinely washes away Original Sin, baptized parents should no longer carry a tainted nature to pass on. Yet baptized parents continue begetting children supposedly burdened with Original Sin—showing baptism does not transform human nature.',
      '02 · Cleansed nature yet unchanged sinfulness: Original Sin is defined as a corrupted human state prone to sin. If baptism truly cured that fallen state, baptized believers would exhibit a transformed nature rather than continuing to sin just like everyone else.',
      '03 · Circular infant baptism paradox: Why baptize newborns who have committed zero personal sins? Infant baptism assumes babies already carry Original Sin from baptized parents—meaning Original Sin is cited to justify baptism, yet baptism fails to eradicate the very transmission that creates the need for it.',
      '04 · Islamic clarity (fitrah vs. inherited guilt): By contrast, Islam rejects inherited sin altogether—every child is born upon a pure natural state (fitrah), and moral guilt belongs strictly to deliberate personal actions, avoiding every paradox of infant damnation or ritual transmission.'
    ],
    ['Averroes 2 · #taufe-paradox'],
    [baptTrapA,baptTrapB],
    {
      facts:[
        ['Paradox 1','Baptized parents still transmit Original Sin'],
        ['Paradox 2','Baptized nature remains prone to sin'],
        ['Paradox 3','Infant baptism presupposes its own failure'],
        ['Islamic View','Born pure (fitrah); no inherited guilt']
      ],
      visual:{
        kind:'steps',
        items:[
          ['1. Claim','Baptism washes away inherited Original Sin and restores grace.'],
          ['2. Transmission Failure','Baptized parents still pass Original Sin to their newborns.'],
          ['3. Behavioral Failure','Baptized believers remain just as inclined to commit sin.'],
          ['4. Circular Loop','Infants need baptism only because parental baptism failed to end Original Sin.']
        ]
      }
    }
  ),{
    who:'Expose the 3-part paradox',
    forkTitle:'Two standard analogies they use next',
    forkSub:'Dismantle the circumcision (foreskin) comparison or the wheat-and-chaff comparison'
  }),
  sum:'If baptism truly removed Original Sin, baptized parents would not transmit it to sinless infants nor remain equally prone to sin—exposing a logical circle that biological and agricultural analogies (foreskins and chaff) cannot rescue.'
});

/* ============================================================================
   4. NEW Tactical Playbook card: christianity/bible/muratorian-canon-fragment
   ============================================================================ */
const MUR=AV2('#kanon-muratori','1403138266273808415');

const murTrapA=P(N(
  MUR,
  'The Muratorian Fragment is a 2nd-century canon list (c. 170–200 CE, likely by Hippolytus) that only lacks some books because its beginning and end broke off.',
  'Damaged edges do not explain away its textual reality. The surviving manuscript is an 8th-century Latin copy of an anonymous work (variously guessed as Hippolytus or Victorinus of Poetovio), some scholars date it to the 3rd or 4th century rather than c. 170–200 CE, its genre is uncertain, and even the preserved epistle section omits Hebrews, James, 1 Peter, 2 Peter, and 3 John.',
  '8th-century MS, disputed date/author & five missing NT books',
  [
    '01 · Late manuscript & anonymous authorship: Known only since Lodovico Antonio Muratori published it in 1740, the surviving text is an 8th-century Latin translation. Its original author is unknown—Hippolytus of Rome and Victorinus of Poetovio are only scholarly guesses—and its literary genre (Bible prologue, handbook, or catechetical manual) remains uncertain.',
    '02 · Contested dating (2nd vs. 3rd/4th century): While majority scholarship favors c. 170–200 CE in Rome because it references mid-2nd-century works and omits later writers, a minority of scholars still dates the list to the 3rd or 4th century.',
    '03 · Five NT books missing from the preserved catalogue: Even granting a late 2nd-century date, the fragment’s surviving catalogue lacks five books of today’s 27-book New Testament—Hebrews, James, 1 Peter, 2 Peter, and 3 John—proving no closed 27-book consensus existed.'
  ],
  ['Muratorian Fragment (pub. L. A. Muratori, 1740)','Averroes 2 · #kanon-muratori'],
  [],
  {
    facts:[
      ['Surviving MS','8th-century Latin fragment (pub. 1740)'],
      ['Authorship','Unknown (Hippolytus / Victorinus speculative)'],
      ['Date Dispute','Majority c. 170–200 CE; some 3rd/4th c.'],
      ['Missing NT Books','Hebrews, James, 1–2 Peter, 3 John']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The Muratorian Fragment is a firm c. 170 CE canon list by Hippolytus—only damaged edges explain the missing books!',
  theyWho:'Watch out · if they say',
  who:'Press 8th-c. MS, anonymity & 5 missing epistles'
});

const murTrapB=P(N(
  MUR,
  'The Muratorian Fragment proves the early Church strictly separated inspired Scripture from apocryphal writings.',
  'The fragment actually proves the opposite: its author explicitly discusses apocryphal writings alongside canonical books—listing the Apocalypse of Peter, Wisdom of Solomon (“written by friends of Solomon”), and the Shepherd of Hermas, which it commends for private reading while excluding it from public worship only because it was written recently.',
  'Apocryphal books inside the Muratorian canon list',
  [
    '01 · Apocalypse of Peter inside the canon debate: The fragment mentions the Apocalypse of Peter alongside John’s Revelation, noting that while some refuse to have it read in church, others clearly accepted it—demonstrating active disagreement over apocalyptic Scripture.',
    '02 · Wisdom of Solomon (“friends of Solomon”): The catalogue includes the Wisdom of Solomon (described as written by friends of Solomon in his honor) inside a Christian New Testament-era book list.',
    '03 · Shepherd of Hermas commended for private reading: Although barred from public liturgical reading because it appeared “very recently, in our own times” under Bishop Pius in Rome, the fragment still affirms the Shepherd of Hermas ought to be read privately—showing fluid degrees of authority rather than a rigid 27-book boundary.'
  ],
  ['Muratorian Fragment (Apocalypse of Peter; Wisdom of Solomon; Shepherd of Hermas)'],
  [],
  {
    facts:[
      ['Apocalypse of Peter','Listed; only “some” oppose church reading'],
      ['Wisdom of Solomon','Included as “friends of Solomon”'],
      ['Shepherd of Hermas','Approved for private reading, not liturgy'],
      ['Implication','2nd-century canon boundaries were fluid']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'The Muratorian Fragment cleanly separated inspired NT Scripture from all apocryphal books!',
  theyWho:'Watch out · if they say',
  who:'Show Apocalypse of Peter & Shepherd of Hermas'
});

card('christianity/bible/muratorian-canon-fragment',{
  title:'The Muratorian Canon Fragment',
  k:'Bible Canon · Late 2nd Century',
  blurb:'An 8th-century Latin fragment (pub. 1740) missing Hebrews, James, 1–2 Peter & 3 John while discussing Apocalypse of Peter & Hermas.',
  claim:'The Muratorian Fragment proves the 27-book New Testament canon was already recognized in the 2nd century.',
  tree:P(N(
    MUR,
    'The Muratorian Canon from the 2nd century proves Christians already agreed on the New Testament canon.',
    'Rather than proving a settled 27-book New Testament, the Muratorian Fragment documents how incomplete and contested the canon still was. Preserved only in a headless, tailless 8th-century Latin manuscript (published 1740) and widely dated to c. 170–200 CE Rome—though some scholars place it in the 3rd or 4th century—it omits five current New Testament epistles while listing apocryphal works like the Apocalypse of Peter and Shepherd of Hermas.',
    'Five omitted NT epistles and apocryphal inclusions',
    [
      '01 · Fragmentary 8th-century Latin witness: Published by Lodovico Antonio Muratori in 1740, the text survives only as an 8th-century Latin fragment lacking both beginning and end, likely translated from a late 2nd-century Greek original from Rome (c. 170–200 CE), though some scholars argue for a 3rd- or 4th-century date.',
      '02 · Unknown author and genre: Its author is anonymous (Hippolytus of Rome and Victorinus of Poetovio are unconfirmed proposals), and scholars debate whether it was a Bible-edition prologue, handbook, or catechetical text mixing book lists with theological notes.',
      '03 · Five current NT books omitted: Missing from the fragment’s list are the Epistle to the Hebrews, the Epistle of James, 1 Peter, 2 Peter, and 3 John—nearly a fifth of the modern 27-book New Testament.',
      '04 · Apocryphal works included in discussion: At the same time, the fragment explicitly registers the Apocalypse of Peter (noting only some object to reading it in church), Wisdom of Solomon (“friends of Solomon”), and the Shepherd of Hermas (commended for private reading), underscoring a still-unsettled canon.'
    ],
    ['Muratorian Fragment (pub. L. A. Muratori, 1740)','Averroes 2 · #kanon-muratori'],
    [murTrapA,murTrapB],
    {
      facts:[
        ['Published','1740 by L. A. Muratori (8th-c. Latin MS)'],
        ['Probable Origin','c. 170–200 CE Rome (disputed by some)'],
        ['Omitted NT Books','Hebrews, James, 1–2 Peter, 3 John'],
        ['Apocrypha Named','Apoc. of Peter, Hermas, Wisdom']
      ],
      visual:{
        kind:'compare',
        left:{
          title:'Modern 27-Book NT Canon',
          items:[
            'Includes Hebrews, James, 1–2 Peter & 3 John',
            'Excludes Apocalypse of Peter completely',
            'Excludes Shepherd of Hermas & Wisdom'
          ]
        },
        right:{
          title:'Muratorian Fragment (c. 170–200 CE)',
          items:[
            'Omits Hebrews, James, 1 Peter, 2 Peter & 3 John',
            'Lists Apocalypse of Peter (disputed in church reading)',
            'Discusses Wisdom of Solomon & Shepherd of Hermas'
          ]
        }
      }
    }
  ),{
    who:'Compare canon vs. fragment',
    forkTitle:'Two ways apologists defend the fragment',
    forkSub:'Counter the “missing edges” excuse or the claim of a strict Scripture/apocrypha divide'
  }),
  sum:'Surviving only in an 8th-century Latin fragment of unknown authorship, the Muratorian Canon omits five New Testament epistles (Hebrews, James, 1–2 Peter, 3 John) while bringing apocryphal books like the Apocalypse of Peter and Shepherd of Hermas into the canon discussion.'
});

/* ============================================================================
   5. add('christianity/church/no-trinity-before-nicaea', ...) — mehrheit_gegen_trinitaet
   ============================================================================ */
const MJT=AV2('#mehrheit-der-christen-waren-gegen-trinität','1376241966517588040');
add('christianity/church/no-trinity-before-nicaea',P(N(
  MJT,
  'Ordinary rank-and-file Christians in the early centuries always worshipped a Trinity—only isolated heretics ever objected.',
  'Tertullian himself—the very Latin Father who coined “Trinitas”—explicitly confesses the opposite in Against Praxeas Chapter 3: the ordinary believers (“who always constitute the majority of believers”) recoiled in shock at his “economy” of Three-in-One, clung to strict monotheism, and repeatedly accused his Trinitarian circle of preaching two or three gods.',
  'Tertullian’s confession: the majority rejected “Three in One” (Praxeas 3)',
  [
    '01 · Majority of believers stood against Trinitas: In Against Praxeas 3, Tertullian calls ordinary Christians “the simple” (explicitly adding he does not mean unwise or unlearned) and candidly admits they “always constitute the majority of believers”—yet they were startled and alarmed by the three-person “economy” (oikonomia).',
    '02 · Driven by strict anti-polytheist monotheism: Tertullian explains why the Christian majority pushed back—their own foundational rule of faith turned them away from pagan polytheism strictly toward the one true God, causing them to view a numerical Trinity as dividing divine unity.',
    '03 · Explicit charge of tritheism (“two or three gods”): Far from accepting Three-in-One as apostolic consensus, the Christian majority “repeatedly” reproached Tertullian’s party as preachers of “two or three gods,” while proudly claiming for themselves the title of worshippers of the one God.',
    '04 · Elite philosophical spin vs. apostolic faith: Unable to cite a majority consensus, Tertullian dismisses the majority’s unitarian instinct as “unreasonably understood” unity leading to heresy, claiming only “rationally considered” Trinity constitutes truth—revealing Trinitarianism as a speculative elite innovation rejected by ordinary believers.'
  ],
  ['Tertullian, Against Praxeas, Chapter 3','Averroes 2 · #mehrheit-der-christen-waren-gegen-trinität'],
  [],
  {
    facts:[
      ['Witness','Tertullian (coined Latin Trinitas)'],
      ['Source','Against Praxeas, Chapter 3'],
      ['“The Majority”','Startled by the oikonomia (Three in One)'],
      ['Majority Charge','Called Trinitarians “preachers of 2 or 3 gods”']
    ],
    quotes:[
      {by:'Tertullian (Against Praxeas 3)',en:'The simple… who always constitute the majority of believers, are startled at the economy of the Three in One.',ref:'Against Praxeas, Chapter 3'},
      {by:'Tertullian (Against Praxeas 3)',en:'Repeatedly they reproach us as preachers of two or three gods, while boasting of worshipping the one God.',ref:'Against Praxeas, Chapter 3'}
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Majority of Believers (Praxeas 3)',
        items:[
          'Rule of faith turned them strictly to the One True God',
          'Viewed numerical distinction as dividing God’s unity',
          'Accused Tertullian’s camp of preaching “two or three gods”'
        ]
      },
      right:{
        title:'Tertullian’s Theological Spin',
        items:[
          'Insisted God must be believed in His “oikonomia”',
          'Claimed Unity deriving Trinity supports rather than destroys it',
          'Labeled the majority’s strict monotheism “irrationally understood”'
        ]
      }
    }
  }
),{
  optWho:'Or press the majority confession · if they say',
  optLabel:'Even if some writers subordinated the Son, the ordinary Christian majority always believed the Trinity!',
  theyWho:'Or press the majority confession · if they say',
  who:'Cite Tertullian Against Praxeas 3'
}));

/* Ensure existing step02 in no-trinity-before-nicaea renders cleanly inside the resulting 2-way fork */
(()=>{
  const rec=TOPICS.find(t=>t.path.join('/')==='christianity/church/no-trinity-before-nicaea');
  const tree=rec&&rec.node&&rec.node.article&&rec.node.article.tree;
  if(tree&&Array.isArray(tree.next)&&tree.next.length>1){
    if(!tree.forkTitle) tree.forkTitle='Choose how to press the historical record';
    if(!tree.forkSub) tree.forkSub='Walk the full 4-stage patristic timeline or hit Tertullian’s admission about the Christian majority';
    if(tree.next[0]&&!tree.next[0].optLabel&&!tree.next[0].they){
      tree.next[0].optWho='Main timeline';
      tree.next[0].optLabel='Walk through the 4-stage patristic timeline (1st–4th c. Fathers & Councils)';
    }
  }
})();

/* ============================================================================
   6. add('christianity/church/d-ia-church-fathers/t-ignatius-of-antioch', ...) — ignatius_auth
   ============================================================================ */
const IGNA=AV2('#ignatius-briefe-authenzität','1328104404846383297');
add('christianity/church/d-ia-church-fathers/t-ignatius-of-antioch',P(N(
  IGNA,
  'Even if Smyrnaeans 1 has subordinationist phrasing, Ignatius’s letters still contain high divine titles for Jesus—proving early 2nd-century Trinitarian orthodoxy.',
  'Before building any Christology on isolated phrases in Ignatius, you must confront the severe textual instability of the Ignatian corpus itself. His epistles survive in three conflicting recensions—Short (Syriac), Middle, and Long—where two are universally rejected as inauthentic and leading scholars warn even the Middle Recension may carry 4th-century interpolations.',
  'Three recensions & 4th-century textual doubts (Ehrman, Schoedel, Foster)',
  [
    '01 · Middle Recension (7 letters) — doubts over 4th-century edits: The seven-letter Middle Recension (Ephesians, Magnesians, Trallians, Romans, Philadelphians, Smyrnaeans, Polycarp) is generally treated as the authentic core, yet scholars including Bart D. Ehrman, William R. Schoedel, Paul Foster, Allen Brent, and Gillian Clark note it may still contain later 4th-century alterations.',
    '02 · Long Recension (inauthentic expansion): An expanded version of those same seven letters adds six spurious works—To Mary of Cassobola, To the Philippians, To the Antiochians, the Epistle/Prayer to Hero, two letters To John the Elder, and a letter To Mary the Mother of Christ—demonstrating how readily later scribes rewrote and forged under Ignatius’s name.',
    '03 · Short Recension in Syriac (inauthentic abridgment): A third Syriac recension shrinks the collection to just three letters (Ephesians, Romans, Polycarp) and is likewise rejected as inauthentic.',
    '04 · Double collapse for Trinitarian apologetics: Thus Trinitarians lose twice on Ignatius—his text-critical integrity is clouded by documented post-apostolic tampering (with 4th-century editing suspected even in the Middle Recension), and his surviving theology still subordinates Jesus to the Father’s will (Smyrnaeans 1).'
  ],
  ['Bart D. Ehrman, William R. Schoedel, Paul Foster, Allen Brent & Gillian Clark','Ignatian Recensions (Short Syriac, Middle 7-letter, Long 13-letter)','Averroes 2 · #ignatius-briefe-authenzität'],
  [],
  {
    facts:[
      ['Middle Recension','7 letters; possible 4th-c. alterations'],
      ['Scholars Citing Doubts','Ehrman, Schoedel, Foster, Brent, Clark'],
      ['Long Recension','Inauthentic; expands 7 + adds 6 works'],
      ['Short Syriac','Inauthentic 3-letter abridgment']
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Middle Recension (Core 7)',
        items:[
          'Ephesians, Magnesians, Trallians, Romans, Philadelphians, Smyrnaeans, Polycarp',
          'Treated as authentic baseline, yet suspected of 4th-c. alterations (Ehrman, Schoedel, Foster, Brent, Clark)'
        ]
      },
      right:{
        title:'Inauthentic Recensions (Long & Short)',
        items:[
          'Long: expands all 7 + adds Mary of Cassobola, Philippians, Antiochians, Hero, 2× John the Elder & Mary Mother of Christ',
          'Short (Syriac): inauthentic abridgment to Ephesians, Romans & Polycarp'
        ]
      }
    }
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Even with Smyrnaeans 1, Ignatius’s letters call Jesus God in multiple places—case closed!',
  theyWho:'Watch out · if they say',
  who:'Expose the 3 Ignatian recensions & 4th-c. doubts'
}));

})();
