/* Who wrote the Gospels? — Multi-server Tactical Debate Playbook (christianity/bible/authorship)
   Sources:
     - Islamic Apologetics: #authorship-of-the-new-testament (Gospel of Mark; 1 and 2 Peter),
       #biblical-corruption (Why Gospels are Anonymous?; anonymity-of-the-gospels; NOT Eyewitnesses;
       Anonymous & Pseudonymous NT Books), #response-library (The gospels are not historically reliable)
     - Deenresponds: #synoptics-literary-dependency, #argument-1-chronology-copying,
       #why-does-luke-agree-with-matthean-edits, #notes-on-q
     - Averroes: #papias-fragmente (translated from German)
     - Preserved points from topics/bible-preservation.js (christianity/bible/authorship) */
(()=>{
const AV=(n,link)=>({credit:'Averroes · #'+n+' (translated from German)',link});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const P=(node,props)=>Object.assign(node,props);

const IA=(sub,id)=>({
  credit:'Islamic Apologetics · '+sub,
  ...(id?{link:'https://discord.com/channels/1514269918978248796/'+id}:{})
});
const DR=(ch,id)=>({
  credit:'Deenresponds · #'+ch,
  link:'https://discord.com/channels/1328402309297733662/'+id
});
const PP=AV('papias-fragmente','https://discord.com/channels/1275832106949283962/1275991129447465001');

const REL_SHOTS=[
  {src:'shots/gosp-rel-1.webp',cap:'Irenaeus, Against Heresies: Valentinians accused of disregarding scriptural order and perverting passages to fit their views.'},
  {src:'shots/gosp-rel-2.webp',cap:'Origen, Against Celsus (Ch. 27): Celsus testifies that Christians “as if in a fit of drunkenness… have corrupted the Gospel from its original integrity, to a threefold, and fourfold, and many-fold degree.”'},
  {src:'shots/gosp-rel-3.webp',cap:'Bruce M. Metzger (Origins of Textual Criticism, p. 152): quoting Origen’s complaint that Gospel manuscript copyists “lengthen or shorten, as they please.”'},
  {src:'shots/gosp-rel-4.webp',cap:'Critical commentary on Fragments of Papias: “Papias is most unreliable” — noting his earth-fertility saying is apocryphal and matches 2 Baruch (Apocalypse of Baruch 29:5).'},
  {src:'shots/gosp-rel-5.webp',cap:'Fragments of Papias (detail): highlighting Papias’s borrowing of apocryphal tradition from the Apocalypse of Baruch.'}
];

/* ──────────────────────────────────────────────────────────────────────────
   ANGLE A: Anonymity & Gospel titles (Mark, Irenaeus & manuscript headings)
   ────────────────────────────────────────────────────────────────────────── */
const trapA1=P(N(
  IA('#biblical-corruption › anonymity-of-the-gospels & Why Gospels are Anonymous?'),
  'All early Greek manuscripts already carry the titles “According to Matthew, Mark, Luke, and John” — as Martin Hengel and Brant Pitre argue, you never find anonymous Gospel manuscripts!',
  '“According to” (kata) is a third-person scribal label, not an author’s signature — no eyewitness signs a book “Gospel according to me.” Even evangelical scholars D. A. Carson and Douglas Moo concede that “According to Mark” (kata Markon) was probably added later when the canonical Gospels were collected to tell them apart, and zero title-bearing manuscripts survive from the first century.',
  'Why “According to” (kata) proves later attribution, not authorship',
  [
    'Third-person formula: The Greek preposition kata (“according to”) attributes a text to a tradition (“the Gospel as handed down according to Mark”), rather than naming a self-identifying author inside the work.',
    'Evangelical concession (Carson & Moo): In An Introduction to the New Testament (2nd ed.), evangelical scholars D. A. Carson and Douglas J. Moo acknowledge that “the title, ‘According to Mark’ (kata Markon), was probably added when the canonical gospels were collected and there was need to distinguish Mark’s version of the gospel from the others” (noting Helmut Koester’s critique of Martin Hengel).',
    'No 1st-century titled manuscripts: Zero New Testament manuscripts survive from the 1st century CE. The earliest papyri preserving Gospel titles (such as P66, P75, and P4) date to c. 175–225 CE — contemporary with or after Irenaeus (c. 180 CE).',
    'Justin Martyr (c. 150 CE): Decades before Irenaeus, Justin repeatedly cites Gospel material only as “Memoirs of the Apostles” (apomnēmoneumata tōn apostolōn), never naming Matthew, Mark, Luke, or John as titled books.',
    'Irenaeus’s polemical motive: Elaine Pagels (The Gnostic Gospels, p. 17) notes that Irenaeus named the four Gospels around 180 CE specifically while battling rival Gnostic gospels and disorganized scriptures — insisting on apostolic origin without offering proof.'
  ],
  ['Carson & Moo, An Introduction to the New Testament (2nd ed.)','Helmut Koester, Ancient Christian Gospels (pp. 26–27)','Elaine Pagels, The Gnostic Gospels (p. 17)','P66, P75, P4 (late 2nd / early 3rd c.)'],
  [
    P(N(
      IA('#biblical-corruption › Why Gospels are Anonymous?'),
      null,
      'Press the conclusion: even the earliest surviving Gospel titles arrive roughly a century after composition. They prove how late-2nd-century churches labeled their canon — not who actually wrote the texts.',
      'Titles prove 2nd-century reception, not eyewitness signatures',
      [
        'Burden still unmet: Showing that late-2nd-century scribes agreed on labels once a four-Gospel collection formed only proves church tradition after c. 150–180 CE, not 1st-century eyewitness authorship.',
        'Contrast with Paul: Whenever a New Testament author wanted his identity known (as in Paul’s letters), he named himself directly inside the opening lines.'
      ],
      ['Anchor Yale Bible Dictionary (“Mark, Gospel of”)','Irenaeus, Against Heresies III.1.1']
    ),{who:'Press forward'})
  ],
  {
    facts:[
      ['Greek Formula','kata (“according to”)'],
      ['Evangelical View','Carson & Moo: added at collection'],
      ['Earliest Title MSS','c. 175–225 CE (P66/P75)'],
      ['Justin (c. 150 CE)','“Memoirs of the Apostles”']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'All early Greek manuscripts already have ‘According to Matthew/Mark/Luke/John’ — Martin Hengel / Brant Pitre’s unanimity argument!',
  theyWho:'Watch out · if they say',
  who:'Counter & disarm'
});

const trapA2=P(N(
  IA('#authorship-of-the-new-testament › Gospel of Mark'),
  'Anonymous doesn’t mean unknown — ancient histories like Tacitus or Josephus didn’t always put their names in the opening line either!',
  'Josephus and ancient historians like Herodotus and Thucydides actually did name themselves in their works — and where a work is truly anonymous, historians never assume an author without contemporary proof. Worse, Luke 1:1–4 explicitly admits he is a non-eyewitness compiling earlier accounts without naming himself, and John 21:24 separates the editorial “we” from the unnamed “disciple who testifies.”',
  'Internal clues that break the “standard ancient history” excuse',
  [
    'Non-eyewitness compiler: Luke 1:1–4 speaks in the first person (“I too decided… to write an orderly account”) yet explicitly distinguishes himself from “those who from the beginning were eyewitnesses” who handed traditions down “to us” — and still gives no name.',
    'Editorial separation: John 21:24 refers to the beloved disciple in the third person (“This is the disciple who is testifying to these things and has written them, and we know that his testimony is true”) — proving an anonymous editorial community (“we”) stands behind the text.',
    'Guelich on Mark (WBC 34A, p. xxv): Robert A. Guelich contrasts Mark even with Luke and John: “The Second Gospel, like the other three, is anonymous. It does not even allude to authorship (cf. Luke 1:1–4; John 21:24).”',
    'Anchor Bible Dictionary: Had the author’s identity been important for the message — as in Paul’s letters — the name would have been provided in the Gospel itself.'
  ],
  ['Luke 1:1–4','John 21:24','Robert A. Guelich, WBC 34A: Mark 1–8:26 (p. xxv)','Anchor Yale Bible Dictionary'],
  [],
  {
    facts:[
      ['Luke 1:1–4','First-person non-eyewitness'],
      ['John 21:24','3rd-person “we know” editors'],
      ['Mark','Zero authorial allusion'],
      ['Paul’s Epistles','Explicitly self-named']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Anonymous doesn’t mean unknown — ancient histories like Tacitus or Josephus were anonymous too!',
  theyWho:'Watch out · if they say',
  who:'Counter & push on'
});

const angleA=P(N(
  IA('#authorship-of-the-new-testament › Gospel of Mark · #biblical-corruption › anonymity-of-the-gospels'),
  null,
  'Take the Gospel of Mark — the earliest Gospel, on which Matthew and Luke depend. Standard commentaries (Robert Guelich, Anchor Yale Bible Dictionary, and even evangelicals Carson & Moo) admit Mark is completely anonymous, gives zero hint of its author, translates basic Aramaic for outsiders, and gets Palestinian geography wrong.',
  'Gospel of Mark: anonymous, non-Palestinian, and speculatively named',
  [
    'Robert A. Guelich (WBC 34A, p. xxv): “The Second Gospel, like the other three, is anonymous. It does not even allude to authorship (cf. Luke 1:1–4; John 21:24).”',
    'Anchor Yale Bible Dictionary: “The gospel itself is anonymous; we receive no hint from its contents about its author. Had the author’s identity been important for understanding the message, as was the case, for example, with the epistles of Paul, we would surely have been provided with the name in the gospel itself.”',
    'Why “John Mark” is pure guesswork: The Anchor Bible Dictionary notes that piecing together “Mark” from Acts 12:12, 13:5, 13:13, 15:37–39, Col 4:10, and 1 Peter 5:13 is “rather speculative,” especially since Markos / Marcus was one of the most common names in the Hellenistic and Roman world.',
    'Internal signs of an outsider: Mark 7:31 misstates Palestinian geography (depicting Jesus traveling from Tyre north to Sidon to reach the Sea of Galilee through the Decapolis), explains Jewish customs (7:2–4), and translates Aramaic phrases (talitha cumi 5:41; ephphatha 7:34; eloi eloi lama sabachthani 15:34) for Greek readers outside Palestine.',
    'Carson & Moo (2nd ed.): Even conservative evangelical scholars concede Mark is anonymous and that “According to Mark” (kata Markon) was probably added when the canonical Gospels were collected.',
    'Funk, Hoover & the Jesus Seminar (The Five Gospels, p. 20): Both the initial oral transmitters and the written Gospel authors are anonymous; “the names assigned to the gospels are pious fictions,” making Gospel material hearsay evidence that scholars cannot take at face value.'
  ],
  ['Robert A. Guelich, Word Biblical Commentary 34A: Mark 1–8:26 (p. xxv)','The Anchor Yale Bible Dictionary (“Mark, Gospel of”)','D. A. Carson & Douglas J. Moo, An Introduction to the New Testament (2nd ed.)','Robert W. Funk, Roy W. Hoover & the Jesus Seminar, The Five Gospels (p. 20)'],
  [trapA1,trapA2],
  {
    facts:[
      ['Mark’s Text','Zero authorial hint'],
      ['Geography (7:31)','Tyre → Sidon → Decapolis error'],
      ['Common Name','Markos / Marcus (speculative)'],
      ['Jesus Seminar','Assigned names = “pious fictions”']
    ],
    quotes:[
      {by:'Robert A. Guelich',en:'The Second Gospel, like the other three, is anonymous. It does not even allude to authorship (cf. Luke 1:1–4; John 21:24).',ref:'Word Biblical Commentary 34A: Mark 1–8:26, p. xxv'},
      {by:'The Anchor Yale Bible Dictionary',en:'The gospel itself is anonymous; we receive no hint from its contents about its author. Had the author’s identity been important for understanding the message, as was the case, for example, with the epistles of Paul, we would surely have been provided with the name in the gospel itself.',ref:'Article: “Mark, Gospel of”'},
      {by:'Robert W. Funk, Roy W. Hoover & the Jesus Seminar',en:'Those initial transmitters of tradition are, of course, anonymous; they cannot speak for themselves and we cannot interrogate them about the source of their reports. We don’t even know who they were. The authors of the written gospels are also anonymous; the names assigned to the gospels are pious fictions.',ref:'The Five Gospels, p. 20'}
    ],
    shots:[
      {src:'shots/gosp-mark-1.webp',cap:'Robert A. Guelich, Word Biblical Commentary 34A: Mark 1–8:26 (cover).'},
      {src:'shots/gosp-mark-2.webp',cap:'Guelich, WBC 34A (p. xxv): “The Second Gospel, like the other three, is anonymous. It does not even allude to authorship.”'},
      {src:'shots/gosp-mark-3.webp',cap:'The Anchor Yale Bible Dictionary (cover).'},
      {src:'shots/gosp-mark-4.webp',cap:'Anchor Yale Bible Dictionary: Mark is anonymous with no hint of authorship; notes Mark 7:31 geographical confusion and speculative links to John Mark.'},
      {src:'shots/gosp-mark-5.webp',cap:'D. A. Carson & Douglas J. Moo, An Introduction to the New Testament, 2nd ed. (cover).'},
      {src:'shots/gosp-mark-6.webp',cap:'Carson & Moo (evangelical scholars): “Like the other three gospels, Mark is anonymous. The title, ‘According to Mark’ (kata Markon), was probably added when the canonical gospels were collected.”'},
      {src:'shots/gosp-anon-3.webp',cap:'Robert W. Funk, Roy W. Hoover & the Jesus Seminar, The Five Gospels (cover).'},
      {src:'shots/gosp-anon-4.webp',cap:'The Five Gospels (p. 20): “The authors of the written gospels are also anonymous; the names assigned to the gospels are pious fictions… the evidence offered by the gospels is hearsay evidence.”'}
    ]
  }
),{
  optWho:'Angle',
  optLabel:'Anonymity & Gospel titles (Mark, Irenaeus & manuscript headings)',
  who:'Line A · Step 1',
  forkTitle:'Watch out · likely counter-moves',
  forkSub:'If they push back on manuscript titles or ancient anonymity, pick their move to counter and press on'
});

/* ──────────────────────────────────────────────────────────────────────────
   ANGLE B: Synoptic copying & Q: why Matthew & Luke aren't independent eyewitnesses
   ────────────────────────────────────────────────────────────────────────── */
const trapB1=P(N(
  DR('argument-1-chronology-copying','1444455285224898641'),
  'Maybe Luke just liked Mark’s chronology, disliked Matthew’s, and deliberately pulled Matthew’s non-Markan sayings into Mark’s framework (Farrer hypothesis) — or they agree from shared oral tradition or scribal harmonization!',
  'Even that rescue attempt collapses on two fronts. First, requiring Luke to follow Mark’s chronology while extracting only non-Markan sayings from Matthew demands constant, tedious cross-referencing across bulky ancient scrolls without codex page-flipping. Second, whether you explain Synoptic overlap via Q, Farrer, independent editing, oral tradition, or scribal harmonization, every single model still destroys the claim that Matthew was an independent eyewitness!',
  'Rebuttal to Farrer, oral tradition & minor-agreement excuses',
  [
    'Scroll cross-referencing problem (Rebuttal to Farrer): Saying Luke liked Mark’s sequence and disliked Matthew’s forces Luke to track every overlap vs. non-overlap between Mark and Matthew across unwieldy papyrus/parchment scrolls without modern codex page-flipping — straining the Farrer hypothesis (and see the International Q Project’s detailed rebuttals to Farrer and objections to the Two-Source hypothesis).',
    'Why Luke agrees with Matthean edits of Mark: In #why-does-luke-agree-with-matthean-edits, standard scholarship lists three explanations for “minor agreements”: (1) independent editing of Mark (most common), (2) shared oral tradition, and (3) scribal harmonization.',
    'Tactical clincher: Notice that none of those three options saves traditional eyewitness authorship! Independent editing still means Matthew copied Mark; shared oral tradition means anonymous community transmission rather than apostolic recall; and scribal harmonization admits scribes altered Gospel texts to match one another.'
  ],
  ['Deenresponds · #argument-1-chronology-copying','Deenresponds · #why-does-luke-agree-with-matthean-edits','International Q Project (via IA #response-library)'],
  [],
  {
    facts:[
      ['Farrer Strain','Cross-referencing bulky scrolls'],
      ['Minor Agreements','3 standard scholarly models'],
      ['Commonest Model','Independent editing of Mark'],
      ['Net Result','Eyewitness claim still refuted']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Maybe Luke just liked Mark’s chronology and disliked Matthew’s (Farrer hypothesis) — or they shared oral tradition / scribal harmonization!',
  theyWho:'Watch out · if they say',
  who:'Counter & close the trap'
});

const trapB2=P(N(
  DR('synoptics-literary-dependency','1328402309297733662'),
  'What if Matthew was actually written first, or the Gospels simply agree because eyewitnesses remembered the same events?',
  'Independent memory of Aramaic events cannot produce 80–85% verbatim agreement in Greek word order, verb inflections, and untranslatable Greek particles (kai), nor identical non-thematic story sequences or copied parenthetical editorial remarks. Moreover, “Mark as Medial” — where Matthew and Luke rarely agree against Mark’s wording — shows Mark was the common source, not an abridgment of Matthew.',
  'Why independent memory and Matthean priority fail the Greek data',
  [
    'Greek syntax & particles: In Matt 3:7–10 || Luke 3:7–9 (John the Baptist’s preaching), Matthew has 76 Greek words and Luke 72, with 61 identical (80–85% match) — extending to inflection, word order, and particles like an extra kai. Oral memory or independent translation from Aramaic cannot yield identical Greek grammar.',
    'Copied editorial asides: Both Matthew 4:18 and Mark 1:16 insert the same unnecessary aside (“for they were fishermen”) and the rare casting-net vocabulary (amphibalēstron / amphiballein). Literary copying — not independent eyewitness memory — explains verbatim editorial comments.',
    'Mark as Medial: In parallel triple-tradition pericopes (e.g., healing Simon’s mother-in-law: Matt 8:14–15 || Mark 1:29–31 || Luke 4:38–39), Matthew and Luke share Mark’s wording independently and rarely agree with each other when Mark differs — the classic signature of Mark serving as the middle literary source.'
  ],
  ['Matt 3:7–10 || Luke 3:7–9','Matt 4:18–22 || Mark 1:16–20','Matt 8:14–15 || Mark 1:29–31 || Luke 4:38–39'],
  [],
  {
    facts:[
      ['Greek Match','80–85% (word order & particles)'],
      ['Editorial Asides','“for they were fishermen” copied'],
      ['Mark as Medial','Matt & Luke rarely agree vs. Mark'],
      ['Verdict','Written Greek copying, not memory']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'What if Matthew was written first, or they simply remembered the same events?',
  theyWho:'Watch out · if they say',
  who:'Counter & push on'
});

const stepB2=P(N(
  DR('argument-1-chronology-copying','1444455285224898641'),
  null,
  'Push further with the Chronology-Copying Argument and Q: at least 90% of critical New Testament scholars accept Q because when Luke uses Mark he follows Mark’s chronological sequence cleanly, whereas Luke scatters Matthew-only sayings out of Matthew’s order. Either way — Q or no Q — Matthew and Luke are secondary editors compiling earlier sources, not independent eyewitnesses.',
  'The Chronology-Copying Argument & Q (≥90% scholarly consensus)',
  [
    'Step 1 (Markan priority): Matthew and Luke copied from Mark (near-universal scholarly consensus).',
    'Step 2 (Non-Markan verbatim overlap): Matthew and Luke share verbatim Greek agreements not found in Mark (e.g., Matt 3:7–10 || Luke 3:7–9) — meaning either both used a lost source Q, or Luke copied Matthew.',
    'Step 3 (Chronology mismatch): When Luke copies Mark, he follows Mark’s narrative chronology in orderly sequence; when Luke uses Matthew-only sayings, they appear scattered out of Matthew’s sequence — straining any theory where Luke had two radically different copying methods for Mark vs. Matthew.',
    'What Q actually contains (#notes-on-q): Accepted by at least 90% of critical New Testament scholars, Q is not merely a bare sayings list; it contains sayings plus narrative and theological blocks (such as Deuteronomy 32 + Q motifs, the Son of Man judging, and John the Baptist and Jesus both called children of Wisdom).'
  ],
  ['Deenresponds · #argument-1-chronology-copying','Deenresponds · #notes-on-q'],
  [trapB1,trapB2],
  {
    facts:[
      ['Q Acceptance','≥90% of critical NT scholars'],
      ['Luke + Mark','Follows Mark’s chronology'],
      ['Luke + Matt-only','Sayings scattered out of order'],
      ['Q Structure','Sayings + theological/narrative blocks']
    ],
    visual:{
      kind:'steps',
      items:[
        ['Markan Priority','Matthew and Luke independently copy ~90% of Mark’s narrative in Greek.'],
        ['Double Tradition Overlap','Verbatim Greek sayings shared by Matthew and Luke absent from Mark require Q or Luke copying Matthew.'],
        ['Chronology-Copying Test','Luke tracks Mark’s sequence closely but scatters Matthew-only material — pointing to Q inserted into Mark’s frame.'],
        ['Eyewitness Collapse','On every critical model (Two-Source/Q or Farrer), Matthew and Luke are literary compilers, not independent eyewitnesses.']
      ]
    }
  }
),{
  who:'Line B · Step 2',
  forkTitle:'Watch out · likely counter-moves',
  forkSub:'If they invoke Farrer, oral tradition, or Matthean priority, counter and close the trap'
});

const angleB=P(N(
  DR('synoptics-literary-dependency','1328402309297733662'),
  null,
  'Shift to the Greek text itself: the Synoptic Gospels (Matthew, Mark, Luke) are not three independent eyewitness testimonies. Matthew and Luke copy roughly 90% of Mark — often word-for-word in Greek, in the exact same non-thematic episode order, even down to changing “Levi” to “Matthew” while keeping Mark’s exact placement.',
  'Synoptic copying: why eyewitness Matthew wouldn’t copy non-eyewitness Mark',
  [
    'Call of the first disciples: In Matt 4:18–22 || Mark 1:16–20, Matthew agrees with 69.5% of Mark’s words, repeats the unnecessary aside “for they were fishermen,” uses the rare cognate casting-net term (amphibalēstron / amphiballein), and preserves the exact disciple sequence (Simon, Andrew, James, John — whereas John 1:35–42 puts Andrew first without James and John).',
    'The “Levi” renaming tell: In Matt 9:9 / 10:3 vs. Mark 2:14 / 3:18 || Luke 5:27–28, Matthew changes Mark’s obscure tax collector “Levi” to “Matthew” (connecting him to the apostle list), yet places the episode in the exact same slot immediately after healing the paralytic.',
    '80–85% verbatim Greek: In Matt 3:7–10 || Luke 3:7–9, Matthew (76 Greek words) and Luke (72 Greek words) share 61 identical words in John the Baptist’s preaching — matching vocabulary, word inflections, word order, and particles.',
    'Unmotivated pericope order: Matthew and Mark (and Luke even more strongly) follow the exact same sequence where no thematic or narrative reason connects episodes — e.g., handwashing controversy directly before the Syro-Phoenician woman (Matt 15:1–28 || Mark 7:1–30) and taxes before resurrection (Matt 22:15–33 || Mark 12:13–27).',
    'Mark as Medial: In triple-tradition stories (e.g., Matt 8:14–15 || Mark 1:29–31 || Luke 4:38–39), Matthew and Luke agree with Mark but rarely agree against Mark’s wording.',
    'The fatal dilemma: Why would the Apostle Matthew — an eyewitness who walked with Jesus in Aramaic — copy his own call story and 90% of his Gospel in Greek from Mark, who never met Jesus?'
  ],
  ['Matt 4:18–22 || Mark 1:16–20','Matt 9:9 || Mark 2:14 || Luke 5:27–28','Matt 3:7–10 || Luke 3:7–9','Matt 15:1–28 || Mark 7:1–30','Matt 22:15–33 || Mark 12:13–27'],
  [stepB2],
  {
    facts:[
      ['Markan Material','~90% absorbed by Matt & Luke'],
      ['Greek Overlap','69.5%–85% verbatim in samples'],
      ['Key Tell','“Levi” renamed “Matthew” (9:9)'],
      ['Dilemma','Eyewitness copying non-eyewitness']
    ],
    visual:{
      kind:'compare',
      left:{
        title:'If Matthew were an eyewitness',
        items:[
          'Independent first-hand Greek or Aramaic recollection',
          'Would not need a non-eyewitness to tell him his own call',
          'Independent sequence and distinct wording from Mark'
        ]
      },
      right:{
        title:'What the Greek text actually shows',
        items:[
          'Copies ~90% of Mark, often verbatim in Greek syntax and particles',
          'Changes Mark’s “Levi” to “Matthew” in the exact Markan slot',
          'Follows Mark’s non-thematic episode order step by step'
        ]
      }
    },
    shots:[
      {src:'shots/gosp-syn-1.webp',cap:'Synoptic Problem textbook (“The Earliest Gospel”, p. 4): Matthew changing “Levi” to “Matthew” (Matt 9:9 || Mark 2:14) and 80–85% verbatim Greek agreement in Matt 3:7–10 || Luke 3:7–9.'},
      {src:'shots/gosp-syn-2.webp',cap:'Synoptic Problem textbook (“What Is Q?”, p. 5): non-thematic pericope sequence agreement across Matt 15:1–28 || Mark 7:1–30 and Matt 22:15–33 || Mark 12:13–27.'},
      {src:'shots/gosp-syn-3.webp',cap:'Synoptic Problem textbook (“What Is Q?”, p. 3): 69.5% verbal agreement in Matt 4:18–22 || Mark 1:16–20, copied aside (“for they were fishermen”), rare net word, and identical disciple sequence.'},
      {src:'shots/gosp-syn-4.webp',cap:'Synoptic Problem textbook (“Mark as the Earliest Gospel — Mark as Medial”): Matthew and Luke rarely agree when Mark has a different wording (Matt 8:14–15 || Mark 1:29–31 || Luke 4:38–39).'},
      {src:'shots/gosp-syn-5.webp',cap:'Synoptic Problem textbook (detail): Mark as Medial in the Synoptic triple tradition.'}
    ]
  }
),{
  optWho:'Angle',
  optLabel:'Synoptic copying & Q: why Matthew & Luke aren’t independent eyewitnesses',
  who:'Line B · Step 1'
});

/* ──────────────────────────────────────────────────────────────────────────
   ANGLE C: Papias, Eusebius & why the Gospels fail eyewitness / historical reliability
   ────────────────────────────────────────────────────────────────────────── */
const trapC1=P(N(
  IA('#response-library › The gospels are not historically reliable','1514467813522276402'),
  'Even hostile sources confirm the Gospels (Criterion of Hostility), and Eusebius preserves reliable early church history about their authors!',
  'Being hostile to a group does not mean you verify or accurately report their history — enemies routinely repeat circulating second-hand claims just to refute them. Worse, Celsus’s hostile testimony actually reports Christians altering the Gospel “threefold, fourfold, and many-fold,” while nearly all early authorship traditions reach us only through Eusebius, whose church-edifying bias even sympathetic historians question.',
  'Why the “Criterion of Hostility” & Eusebius fail',
  [
    'Fallacy of the Criterion of Hostility: Hostility never guarantees accurate historical reporting — polemicists regularly echo opponents’ circulating beliefs without checking their origin. Even devoted admirers misrepresent figures they love (e.g., Marcion revered Paul yet claimed the Old Testament God was different from the New Testament God).',
    'What Celsus actually reports: In Origen’s Against Celsus (Ch. 27), Celsus charges that believers “as if in a fit of drunkenness” corrupted the Gospel from its original integrity three, four, and many times over and remodeled it to answer objections — hardly a confirmation of pristine apostolic texts.',
    'Eusebius’s apologetic filter: Fourth-century bishop Eusebius of Caesarea is the main funnel through which fragments like Papias survive, and he explicitly wrote his Ecclesiastical History to edify the orthodox church — openly disparaging his own star witness Papias as “of very limited intelligence” (HE 3.39.13) when Papias’s theology clashed with his.'
  ],
  ['Origen, Against Celsus 2.27','Eusebius, Church History 3.39.12–13','IA #response-library › The gospels are not historically reliable'],
  [],
  {
    facts:[
      ['Fallacy','Hostility ≠ historical verification'],
      ['Admirer Parallel','Marcion distorted Paul’s theology'],
      ['Celsus’s Claim','Gospels altered 3–4+ times over'],
      ['Main Funnel','4th-c. bishop Eusebius']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Even hostile sources / Eusebius confirm the Gospels (Criterion of Hostility)!',
  theyWho:'Watch out · if they say',
  who:'Counter & push on'
});

const trapC2=P(N(
  PP,
  'Papias at least knew elders who knew the Apostles — doesn’t that give us an early, unbroken chain to Mark and Matthew?',
  'Papias explicitly admits in Fragment 1 that he never heard or saw the Apostles himself — only travelers who had been with the elders (including “the Presbyter John,” distinct from the Apostle John). Worse, his fragments preserve grotesque and apocryphal fables, even Eusebius refuses to endorse his judgment, and his actual claims about Hebrew Matthew and unordered Mark contradict our canonical Gospels.',
  'Breaking the “Papias chain” in his own words',
  [
    'Broken link (Fragment 1): Papias explicitly states he was neither a hearer nor an eyewitness of the Apostles, gathering reports third-hand from visitors who had met the elders, Aristion, and “the Presbyter John” — preferring “the living and abiding voice” over books.',
    'Credibility collapse (Fragments 3, 4 & 6): Papias tells of Judas swelling so enormously he could not pass where a wagon easily passed and being crushed until his entrails gushed out (contradicting Matt 27:5 and Acts 1:18), recounts Justus Barsabas drinking deadly poison and Philip’s daughters raising a corpse, and attributes to Jesus a 10,000-fold millennial vine fable borrowed from the apocryphal 2 Baruch 29:5.',
    'Backfire on Mark & Matthew (Fragment 6): Papias says Mark never heard Jesus and wrote “not in exact order,” and that Matthew compiled the oracles “in the Hebrew language, and each person interpreted them as best he could” — neither of which describes our Greek Gospel of Matthew! As Jürgen Regul noted (in Adela Yarbro Collins, Mark, p. 4), Papias may have simply spun Mark’s Petrine pedigree out of the pseudonymous 1 Peter 5:13.'
  ],
  ['Papias, Fragments 1, 3, 4, 6','Eusebius, Church History 3.39.12–16','Adela Yarbro Collins, Mark (p. 4, citing Jürgen Regul)'],
  [],
  {
    facts:[
      ['Papias’s Access','3rd-hand (“never heard Apostles”)'],
      ['Judas (Frag. 3)','Crushed by a wagon'],
      ['Vine Fable (Frag. 4)','Lifted from 2 Baruch 29:5'],
      ['Hebrew Matthew','Does not match Greek Matthew']
    ]
  }
),{
  optWho:'Watch out · if they say',
  optLabel:'Papias at least knew elders who knew the Apostles — isn’t that an early chain?',
  theyWho:'Watch out · if they say',
  who:'Counter & push on'
});

const stepC2=P(N(
  IA('#biblical-corruption › NOT Eyewitnesses · #response-library › The gospels are not historically reliable','1514467813522276402'),
  null,
  'Combine Papias’s collapse with modern scholarship and early witnesses: even Richard Bauckham — the foremost modern defender of eyewitness Gospels — admits his thesis “runs counter to almost all recent New Testament scholarship,” while early witnesses like Celsus and Origen openly record Christians remodeling and altering Gospel manuscripts.',
  'Not eyewitnesses: scholarly consensus & early testimony to Gospel alteration',
  [
    'Bauckham’s scholarly admission: In Jesus and the Eyewitnesses (Ch. 10, p. 240), Richard Bauckham concedes: “The argument of this book — that the texts of our Gospels are close to the eyewitness reports of the words and deeds of Jesus — runs counter to almost all recent New Testament scholarship.” He acknowledges the prevalent view that a long period of oral transmission, retellings, reformulations, and expansions intervened before the Evangelists did their own editorial work.',
    'Celsus (2nd century, in Origen, Against Celsus Ch. 27): Pagan critic Celsus observed that some Christians, “as if in a fit of drunkenness… have corrupted the Gospel from its original integrity, to a threefold, and fourfold, and many-fold degree, and have remodelled it, so that they might be able to answer objections.”',
    'Irenaeus (Against Heresies): While attacking Valentinians, Irenaeus complains that heretical groups disregard the order and connection of the Scriptures, transferring passages and “making one thing out of another” to adapt the Lord’s oracles to their opinions.',
    'Origen (3rd century, quoted in Bruce Metzger, p. 152): Origen complains that “the differences among the manuscripts [of the Gospels] have become great, either through the negligence of some copyists or through the perverse audacity of others; they either neglect to check over what they have transcribed, or, in the process of checking, they lengthen or shorten, as they please.”'
  ],
  ['Richard Bauckham, Jesus and the Eyewitnesses (Ch. 10, p. 240)','The New Oxford Annotated Bible (5th ed.)','Origen, Against Celsus 2.27','Bruce M. Metzger, The Origins of Textual Criticism (p. 152)'],
  [trapC1,trapC2],
  {
    facts:[
      ['Bauckham (p. 240)','“Counter to almost all NT scholarship”'],
      ['Celsus (2nd c.)','Remodeled 3–4+ times over'],
      ['Origen (3rd c.)','Copyists lengthen or shorten'],
      ['Mainstream View','Oral retellings + editorial shaping']
    ],
    quotes:[
      {by:'Richard Bauckham',en:'The argument of this book — that the texts of our Gospels are close to the eyewitness reports of the words and deeds of Jesus — runs counter to almost all recent New Testament scholarship.',ref:'Jesus and the Eyewitnesses, Ch. 10, p. 240'},
      {by:'Celsus (via Origen)',en:'Certain of the Christian believers, like persons who in a fit of drunkenness lay violent hands upon themselves, have corrupted the Gospel from its original integrity, to a threefold, and fourfold, and many-fold degree, and have remodelled it, so that they might be able to answer objections.',ref:'Origen, Against Celsus, Ch. 27'},
      {by:'Origen (via Bruce Metzger)',en:'The differences among the manuscripts [of the Gospels] have become great, either through the negligence of some copyists or through the perverse audacity of others; they either neglect to check over what they have transcribed, or, in the process of checking, they lengthen or shorten, as they please.',ref:'Origins of Textual Criticism, p. 152'}
    ],
    shots:[
      {src:'shots/gosp-eyewit-1.webp',cap:'Richard Bauckham, Jesus and the Eyewitnesses: The Gospels as Eyewitness Testimony (cover).'},
      {src:'shots/gosp-eyewit-2.webp',cap:'Richard Bauckham, Jesus and the Eyewitnesses (cropped cover).'},
      {src:'shots/gosp-eyewit-3.webp',cap:'Bauckham, Jesus and the Eyewitnesses (Ch. 10, p. 240): admitting his eyewitness thesis “runs counter to almost all recent New Testament scholarship.”'},
      {src:'shots/gosp-eyewit-4.webp',cap:'Bauckham (p. 240, detail): highlighting the scholarly consensus on long oral retellings, reformulations, expansions, and editorial work.'},
      {src:'shots/gosp-eyewit-5.webp',cap:'The New Oxford Annotated Bible, 5th ed. NRSV (cover).'},
      ...REL_SHOTS.slice(0,3)
    ]
  }
),{
  who:'Line C · Step 2',
  forkTitle:'Watch out · likely counter-moves',
  forkSub:'If they lean on hostile sources, Eusebius, or Papias’s elders, dismantle the chain'
});

const angleC=P(N(
  PP,
  null,
  'Attack their earliest patristic witness directly: Papias of Hierapolis (early 2nd century). In his own fragments (1–10), Papias admits he never met the Apostles, records a grotesque wagon-crushing death for Judas and apocryphal 10,000-fold vine tales, describes a Hebrew Matthew and unordered Mark — and Eusebius himself (Church History 3.39.13) dismisses Papias as “of very limited intelligence”!',
  'Papias (Frags. 1–10) & Eusebius 3.39: the crumbling patristic anchor',
  [
    'Fragment 1 (No apostolic contact; oral bias): Papias wrote five books (Exposition of the Oracles of the Lord). Though Irenaeus calls him a hearer of John and friend of Polycarp, Papias states in his own preface that he was neither a hearer nor eyewitness of the holy Apostles — he questioned visitors who knew the elders (Andrew, Peter, Philip, Thomas, James, John, Matthew, Aristion, and the Presbyter John), thinking books less useful than “the living and abiding voice.”',
    'Fragments 2–3 (Simplicity & Judas crushed by a wagon): Fragment 2 notes early Christians called those practicing godly simplicity “children” (cf. Clement of Alexandria, Paedagogus). Fragment 3 claims Judas walked the world swollen so hugely he could not pass where a wagon easily passed, and was crushed by the wagon so that his entrails gushed out — contradicting both hanging (Matt 27:5) and falling headlong (Acts 1:18).',
    'Fragments 4–5 (Millennial vine fable & three-tier dwellings): Fragment 4 attributes to Jesus a future kingdom where each vine has 10,000 branches, 10,000 twigs, 10,000 shoots, 10,000 clusters yielding 25 metretes of wine each, and one grain of wheat yields 10,000 ears of 10,000 grains — an apocryphal fable also found in 2 Baruch 29:5 (“Papias is most unreliable”). Fragment 5 divides saved believers into heavenly, paradisiacal, and city dwellings (100-, 60-, and 30-fold fruit; citing 1 Cor 15:25–28) where the righteous “forget to die.”',
    'Fragment 6 (Mark “not in order”, Hebrew Matthew & fables): Papias recounts corpses raised by Philip’s daughters, Justus Barsabas drinking deadly poison unharmed, “strange parables” from unwritten tradition, and a literal 1,000-year earthly reign. On the Gospels, he claims Mark — who “neither heard the Lord nor accompanied him” — became Peter’s interpreter and wrote down what he remembered “not in exact order,” while “Matthew compiled the oracles in the Hebrew language, and each person interpreted them as best he could.” He also uses 1 John, 1 Peter, and a sinful-woman story from the Gospel according to the Hebrews.',
    'Fragments 7–10 (Angels, Revelation, Creation & Four Marys): Frag. 7 describes angels appointed over the earth whose order came to nothing; Frag. 8 cites Papias as a witness to Revelation; Frag. 9 links him to reading the six days of creation typologically for Christ and the Church; Frag. 10 lists four Gospel Marys (making James, Judas, and Joseph cousins via Mary of Cleophas).',
    'Eusebius’s self-defeating verdict (Church History 3.39.12–13): Writing roughly two centuries after Papias (over three centuries after Jesus), Eusebius rejects Papias’s literal 1,000-year kingdom — even though Papias sat with the elders who taught it — declaring Papias “appears to be of very limited intelligence, as one can infer from his writings,” while admitting he misled Irenaeus and later Fathers!'
  ],
  ['Papias, Exposition of the Oracles of the Lord (Fragments 1–10)','Eusebius, Church History 3.39.12–16','Irenaeus, Against Heresies V.33','2 Baruch (Apocalypse of Baruch) 29:5'],
  [stepC2],
  {
    facts:[
      ['Fragment 1','Never heard or saw the Apostles'],
      ['Fragment 3','Judas crushed by a wagon'],
      ['Fragment 6','Unordered Mark & Hebrew Matthew'],
      ['Eusebius 3.39.13','“Of very limited intelligence”']
    ],
    quotes:[
      {by:'Papias (Fragment 6)',en:'Mark, having become the interpreter of Peter, wrote down accurately whatever he remembered — though not in exact order — of the things said or done by Christ. For he neither heard the Lord nor accompanied him… Matthew compiled the oracles in the Hebrew language, and each one interpreted them as best he could.',ref:'Preserved in Eusebius, Church History 3.39.15–16'},
      {by:'Papias (Fragment 3)',en:'Judas walked about in this world as a sad example of impiety; for his body swelled so much that he could not pass through where a wagon could easily pass, and he was crushed by the wagon so that his entrails gushed out.',ref:'Fragment 3'},
      {by:'Eusebius of Caesarea',en:'Among other things he says that there will be a thousand-year period after the resurrection from the dead, when the kingdom of Christ will be set up in material form on this very earth. I suppose he got these notions through a misunderstanding of the apostolic accounts… For he appears to be of very limited intelligence, as one can infer from his writings.',ref:'Church History 3.39.12–13'}
    ],
    shots:REL_SHOTS.slice(3,5)
  }
),{
  optWho:'Angle',
  optLabel:'Papias, Eusebius & why the Gospels fail eyewitness / historical reliability',
  who:'Line C · Step 1'
});

/* ──────────────────────────────────────────────────────────────────────────
   ANGLE D: Forgeries inside the canon (1 & 2 Peter, pseudepigrapha) & the Qurʾānic Injīl
   ────────────────────────────────────────────────────────────────────────── */
const stepD2=P(N(
  IA('#biblical-corruption'),
  null,
  'Finish on Islam’s clear framework: the Qurʾān affirms the Injīl revealed directly to Prophet ʿĪsā (peace be upon him) (Q 5:46) — NOT four anonymous post-70 CE Greek biographies written about him by unknown hands, nor pseudonymous epistles written in dead apostles’ names. Muslims evaluate surviving biblical texts by the Qurʾān (Bukhārī 4485) and stand on a scripture 100% attested in 1st-century manuscripts and mass-transmitted (mutawātir) chains.',
  'The Qurʾānic Injīl vs. the four canonical Gospels',
  [
    'The true Injīl: In Qurʾān 5:46, the Injīl was direct divine revelation given to Jesus (ʿĪsā, peace be upon him), whereas the four Gospels are anonymous third-person narratives written about Jesus decades later — which Christians themselves do not claim were dictated by him.',
    'Scripture written by human hands: Qurʾān 2:79 explicitly condemns presenting human-authored compositions as coming from Allah.',
    'Prophetic methodology (Ṣaḥīḥ al-Bukhārī 4485): Because earlier revelations suffered human alteration and loss of chains, Muslims affirm what agrees with the Qurʾān, reject what contradicts it, and withhold judgment on the rest.',
    'The epistemological contrast: Every canonical Gospel lacks an internal author and any 1st-century manuscript, while 1 & 2 Peter and 2 Thessalonians show canonized pseudonymity. By contrast, the Qurʾān is mass-transmitted (mutawātir) with named chains back to the Prophet ﷺ and 100% attested in 1st-century Hijra manuscripts.'
  ],
  ['Qurʾān 5:46; 2:79','Ṣaḥīḥ al-Bukhārī 4485'],
  [],
  {
    facts:[
      ['True Injīl','Revelation to ʿĪsā (Q 5:46)'],
      ['Four Gospels','Anonymous post-70 CE Greek bios'],
      ['Hadith Criterion','Bukhārī 4485 (confirm/reject/pause)'],
      ['Qurʾān Standard','1st-c. MSS + mutawātir chains']
    ],
    doc:{
      ref:'Qurʾān · al-Baqara 2:79',
      ar:'فَوَيْلٌ لِّلَّذِينَ يَكْتُبُونَ الْكِتَابَ بِأَيْدِيهِمْ ثُمَّ يَقُولُونَ هَٰذَا مِنْ عِندِ اللَّهِ',
      en:'Woe to those who write the scripture with their own hands, then say: “This is from Allah.”'
    },
    visual:{
      kind:'compare',
      left:{
        title:'New Testament Authorship',
        items:[
          'Four Gospels internally anonymous until c. 180 CE',
          'Zero 1st-century manuscripts',
          'Canonical epistles (2 Peter, 1 Peter, 2 Thess) judged pseudonymous'
        ]
      },
      right:{
        title:'Qurʾānic Preservation',
        items:[
          'Directly transmitted from the Prophet ﷺ (mutawātir)',
          '100% attested in 1st-century manuscripts',
          'Named, verified chains of recitation (isnād)'
        ]
      }
    }
  }
),{
  who:'Line D · Step 2 (Islamic conclusion)'
});

const angleD=P(N(
  IA('#authorship-of-the-new-testament › 1 and 2 Peter · #biblical-corruption › Anonymous & Pseudonymous NT Books'),
  null,
  'Drive home the canon’s internal credibility crisis: even when New Testament books DO explicitly name an apostle — like 1 Peter, 2 Peter, and 2 Thessalonians — mainstream critical scholarship judges them to be pseudonymous forgeries written decades after the apostles died! So naming an author inside the New Testament guarantees nothing.',
  'Forgeries inside the canon: 1 & 2 Peter and 2 Thessalonians',
  [
    '1 Peter (post-70 “Babylon” & elite Greek): As documented in the New Oxford Annotated Bible and Adela Yarbro Collins (Mark, p. 4), 1 Peter 5:13 writes from “Babylon” — a standard post-70 CE cryptogram for Rome after Rome destroyed the Jerusalem Temple (cf. Rev 17:5, 9; 18:2, 10, 21) — even though tradition dates Peter’s death in Rome to c. 64 CE! Moreover, its sophisticated Greek prose and Hellenistic rhetorical polish are inappropriate for an Aramaic-speaking Galilean fisherman called agrammatos (“unlettered/uneducated”) in Acts 4:13 (cf. Gal 2:9), and it lacks references to the earthly Jesus while addressing Gentile Christians (c. 80–100 CE).',
    '2 Peter (universal consensus forgery): Even though 2 Peter 1:1 and 1:16–18 explicitly claim to be written by Simon Peter the eyewitness, the Oxford Annotated Bible and G. A. Wells (Can We Trust the New Testament?, p. 66) note it is “almost universally regarded both as pseudonymous and as the very latest NT book, written only in the second century,” citing R. T. France’s 1993 survey admitting few even among evangelical Anglicans would defend Petrine authorship with enthusiasm. Its author treats Paul’s letters as equal to Old Testament Scripture (2 Pet 3:15–16) and battles “scoffers” mocking Jesus’s delayed return (3:3–4).',
    '2 Thessalonians (forged in Paul’s name): Raymond E. Brown (An Introduction to the New Testament, ABRL, p. 592) documents the growing scholarly consensus since W. Wrede (1904) and W. Trilling (1972) that 2 Thessalonians is pseudonymous despite its “Paul” signature (cf. 2 Thess 2:2; 3:17). Pat Eddy (Who Tampered with the Bible, p. 184) notes scholars view it as forged after Paul’s death or late imprisonment to explain away 1 Thessalonians’ unfulfilled expectation of an imminent Second Coming (2 Thess 2:1–8).',
    'Canon-wide pseudepigraphy (Bart D. Ehrman, Forged): If books bearing explicit apostolic signatures inside the New Testament canon were forged in dead apostles’ names, late 2nd-century attributions attached to four anonymous Gospels carry even less weight.'
  ],
  ['The New Oxford Annotated Bible (5th ed., “The First Letter of Peter”)','Adela Yarbro Collins, Mark: A Commentary (p. 4)','G. A. Wells, Can We Trust the New Testament? (p. 66)','Raymond E. Brown, An Introduction to the New Testament (p. 592)','Pat Eddy, Who Tampered with the Bible (p. 184)','Bart D. Ehrman, Forged'],
  [stepD2],
  {
    facts:[
      ['1 Peter 5:13','Post-70 CE “Babylon” code'],
      ['Acts 4:13','Peter called agrammatos'],
      ['2 Peter','2nd-c. consensus forgery'],
      ['2 Thessalonians','Growing pseudonymity consensus']
    ],
    quotes:[
      {by:'The New Oxford Annotated Bible (5th ed.)',en:'The high level of its Greek prose, the letter’s rhetorical sophistication, and familiarity with Hellenistic religious thought seem inappropriate for a Galilean fisherman and missionary to Jews (Gal 2.9)… Thus most scholars interpret the document as a letter from the last decade of the first century CE, written in Peter’s name.',ref:'Introduction to The First Letter of Peter'},
      {by:'G. A. Wells (citing R. T. France)',en:'2 Peter, which is almost universally regarded both as pseudonymous and as the very latest NT book, written only in the second century… R. T. France declares, in his 1993 survey of Evangelical Anglicans, that today few even among evangelical Christians would try to defend its Petrine authorship with any enthusiasm.',ref:'Can We Trust the New Testament?, p. 66'},
      {by:'Raymond E. Brown, S.S.',en:'In 20th-century German scholarship, running from W. Wrede in 1904 to W. Trilling in 1972, arguments presented against Pauline writing gradually made this minority view more and more accepted… Bailey, Collins, Giblin, Holland, and Hughes have been among the increasing numbers opting for pseudonymity.',ref:'An Introduction to the New Testament (ABRL), p. 592'}
    ],
    shots:[
      {src:'shots/gosp-peter-1.webp',cap:'Adela Yarbro Collins, Mark: A Commentary, Hermeneia (title page).'},
      {src:'shots/gosp-peter-2.webp',cap:'Adela Yarbro Collins (p. 4): 1 Peter was likely written in Rome 80–100 CE, not by Peter himself; notes Jürgen Regul’s thesis that Papias spun Mark’s Petrine link from 1 Pet 5:13.'},
      {src:'shots/gosp-peter-3.webp',cap:'The New Oxford Annotated Bible (“The First Letter of Peter”): polished Greek prose, Hellenistic thought, and “Babylon” cryptogram point to a late-1st-century pseudonymous work.'},
      {src:'shots/gosp-peter-4.webp',cap:'The New Oxford Annotated Bible on 1 Peter authorship (detail).'},
      {src:'shots/gosp-peter-5.webp',cap:'Bart D. Ehrman, Forged: Writing in the Name of God — Why the Bible’s Authors Are Not Who We Think They Are (cover).'},
      {src:'shots/gosp-peter-6.webp',cap:'Bart D. Ehrman, Forged (detail cover).'},
      {src:'shots/gosp-pseudo-1.webp',cap:'G. A. Wells, Can We Trust the New Testament? (p. 66): 2 Peter is “almost universally regarded both as pseudonymous and as the very latest NT book,” and few evangelicals defend it.'},
      {src:'shots/gosp-pseudo-2.webp',cap:'G. A. Wells, Can We Trust the New Testament? (p. 66, detail).'},
      {src:'shots/gosp-pseudo-3.webp',cap:'Raymond E. Brown, S.S., An Introduction to the New Testament (ABRL, p. 592): documenting increasing scholarly consensus that 2 Thessalonians is pseudonymous.'},
      {src:'shots/gosp-pseudo-4.webp',cap:'Pat Eddy, Who Tampered with the Bible (p. 184): arguing 2 Thessalonians was forged in Paul’s name to explain the delayed Second Coming.'}
    ]
  }
),{
  optWho:'Angle',
  optLabel:'Forgeries inside the canon (1 & 2 Peter, pseudepigrapha) & the Qurʾānic Injīl',
  who:'Line D · Step 1'
});

/* ──────────────────────────────────────────────────────────────────────────
   SPINE: Step 01 (Opening move) → Step 02 (Set the burden of proof) → 4-way Tactical Fork
   ────────────────────────────────────────────────────────────────────────── */
const step02=P(N(
  IA('#biblical-corruption › anonymity-of-the-gospels'),
  null,
  'Before letting them pivot to church tradition or harmony, lock down the methodological rule: an internally anonymous book, attested by zero first-century manuscripts and named together only a century later, shifts the entire burden of proof onto the Christian claiming apostolic eyewitness authorship.',
  'Set the burden of proof before debating titles or traditions',
  [
    'Scholarly baseline: Critical scholars agree that all four Gospels are anonymous productions written in the generation after the apostles, built from mixed sources and theological editing — none is an eyewitness account, and their names come from tradition rather than authorial claims.',
    'The Jesus Seminar (Funk & Hoover, The Five Gospels, p. 20): Initial oral transmitters and written Gospel authors alike are anonymous and beyond interrogation; assigned names are “pious fictions,” making the Gospels hearsay evidence.',
    'No 1st-century safety net: Because zero New Testament manuscripts survive from the 1st century CE (earliest fragment: P52, c. 125–150 CE), no physical witness links the four texts to Matthew, Mark, Luke, or John in their own lifetime.',
    'Debate rule: Never accept “prove Matthew didn’t write it.” Whoever claims an anonymous text was written by an eyewitness apostle bears the burden of producing verifiable 1st-century evidence.'
  ],
  ['Robert W. Funk, Roy W. Hoover & the Jesus Seminar, The Five Gospels (p. 20)','P52 (John Rylands, c. 125–150 CE)'],
  [angleA,angleB,angleC,angleD],
  {
    facts:[
      ['Burden of Proof','On the positive claimant'],
      ['1st-Century MSS','Zero surviving'],
      ['Gap to Irenaeus','~100 years'],
      ['Scholarly Baseline','Anonymous post-apostolic texts']
    ],
    visual:{
      kind:'steps',
      items:[
        ['Establish Anonymity','None of the four Gospels names its author inside the text itself.'],
        ['Cite the 100-Year Gap','Zero 1st-century manuscripts; all four names appear together first in Irenaeus (c. 180 CE).'],
        ['Lock the Burden of Proof','An anonymous text cannot be assumed apostolic by default — now press any of the 4 tactical lines below.']
      ]
    },
    shots:[
      {src:'shots/gosp-anon-1.webp',cap:'Scholarly summary: all four Gospels are anonymous post-apostolic productions assigned names by tradition, not eyewitness claims.'},
      {src:'shots/gosp-anon-2.webp',cap:'Scholarly summary on Gospel anonymity (detail).'}
    ]
  }
),{
  who:'Set the burden of proof',
  forkTitle:'4 tactical lines of attack',
  forkSub:'Choose where to lead the debate next — each angle includes anticipated “Watch out” counter-moves'
});

const step01=P(N(
  IA('#biblical-corruption › Why Gospels are Anonymous?'),
  'The four Gospels were written by Matthew, Mark, Luke, and John: eyewitnesses or their companions.',
  'All four Gospels are internally anonymous — not one names its author inside its own text. All four names appear together for the first time around 180 CE in Irenaeus (Against Heresies III.1.1), a century after composition, while he was fighting rival Gnostic gospels and without offering proof of apostolic authorship.',
  'Opening move: anonymous Gospels named a century later',
  [
    'Zero internal signatures: None of the four canonical Gospels identifies its author inside its own narrative; titles such as “According to Matthew” (kata Matthaion) are third-person scribal headings added later.',
    'First named together c. 180 CE: Irenaeus of Lyons (c. 130–202 CE) is the earliest surviving writer to list all four Gospels together by name in Against Heresies III.1.1 — attributing Matthew to a Hebrew dialect, Mark to Peter’s preaching, Luke to Paul’s companion, and John to Ephesus.',
    'Polemical context (Elaine Pagels, The Gnostic Gospels, p. 17): Irenaeus insisted on four apostolic Gospels specifically to counter the spread of Gnostic gospels and disorganized scripture, yet provided no verifiable proof — and as Pagels notes, “we know virtually nothing about the persons who wrote the gospels we call Matthew, Mark, Luke, and John.”'
  ],
  ['Irenaeus, Against Heresies III.1.1','Elaine Pagels, The Gnostic Gospels (p. 17)'],
  [step02],
  {
    facts:[
      ['Internal Authors','None named in text'],
      ['First Named Together','c. 180 CE (Irenaeus)'],
      ['1st-Century MSS','Zero surviving'],
      ['Verdict','Late church attribution']
    ],
    visual:{
      kind:'compare',
      left:{
        title:'Internal Gospel Claims',
        items:[
          'No author names himself in Matthew, Mark, Luke, or John',
          'Luke 1:1–4 writes as a non-eyewitness compiling earlier accounts',
          'John 21:24 distinguishes editorial “we” from the beloved disciple'
        ]
      },
      right:{
        title:'Later Church Attribution',
        items:[
          'Irenaeus (c. 180 CE) first names all four together (AH III.1.1)',
          'Done while combating rival Gnostic gospels without proof',
          'Earliest titled papyri (P66, P75) date to c. 175–225 CE'
        ]
      }
    },
    quotes:[
      {by:'Irenaeus of Lyons (c. 180 CE)',en:'Matthew also issued a written Gospel among the Hebrews in their own dialect, while Peter and Paul were preaching at Rome, and laying the foundations of the Church. After their departure, Mark, the disciple and interpreter of Peter, did also hand down to us in writing what had been preached by Peter. Luke also, the companion of Paul, recorded in a book the Gospel preached by him. Afterwards, John, the disciple of the Lord, who also had leaned upon His breast, did himself publish a Gospel during his residence at Ephesus in Asia.',ref:'Against Heresies, Book III, Chapter 1, Section 1'},
      {by:'Elaine Pagels',en:'Although Irenaeus, defending their exclusive legitimacy, insisted that they were written by Jesus’ own followers, we know virtually nothing about the persons who wrote the gospels we call Matthew, Mark, Luke, and John. We only know that these writings are attributed to apostles (Matthew and John) or followers of the apostles (Mark and Luke).',ref:'The Gnostic Gospels, p. 17'}
    ],
    shots:[
      {src:'shots/gosp-why-1.webp',cap:'Irenaeus, Against Heresies III.1.1: the earliest surviving passage naming all four Gospels together (late 2nd century).'},
      {src:'shots/gosp-why-2.webp',cap:'Elaine Pagels, The Gnostic Gospels (p. 17): explaining Irenaeus’s polemical motive and noting “we know virtually nothing about the persons who wrote the gospels.”'}
    ]
  }
),{
  who:'Opening move'
});

card('christianity/bible/authorship',{
  title:'Who wrote the Gospels?',
  k:'Authorship · Tactical Playbook',
  blurb:'Anonymous books, 2nd-century titles, Synoptic copying, Papias, canonical forgeries & the Qurʾānic Injīl.',
  claim:'The Gospels were written by Matthew, Mark, Luke and John: eyewitnesses or their companions.',
  tree:step01,
  sum:'Internally anonymous texts named a century later by Irenaeus, Synoptic copying of non-eyewitness Mark, Papias’s discredited and self-defeating hearsay, and canonized forgeries like 2 Peter leave apostolic Gospel authorship without a historical leg to stand on — in stark contrast to the Qurʾān’s first-century manuscripts and mutawātir chains.'
});

/* Clean up the superseded raw IA explainer & prevent curated-organise.js from appending an empty branch */
topic(['christianity','bible','d-ia-authorship-of-the-new-testament'],{hidden:true});
if(Array.isArray(window.MOVES)){
  window.MOVES=window.MOVES.filter(m=>!(m&&m.type==='merge'&&m.from==='christianity/bible/d-ia-authorship-of-the-new-testament'&&m.to==='christianity/bible/authorship'));
}

/* Also attach gosp-rel-1..5.webp to islam/general/d-ia-response-library/t-the-gospels-are-not-historically-reliable if present */
(()=>{
  const key='islam/general/d-ia-response-library/t-the-gospels-are-not-historically-reliable';
  let found=null;
  for(let i=window.TOPICS.length-1;i>=0;i--){
    const t=window.TOPICS[i], k=t.path.join('/');
    if(k===key){ found=t.node; break; }
    if(key.startsWith(k+'/')&&t.node&&t.node.children){
      const c=t.node.children[key.slice(k.length+1)];
      if(c){ found=c; break; }
    }
  }
  const tree=found&&found.article&&found.article.tree;
  if(!tree||!tree.more) return;
  const existing=new Set((tree.more.shots||[]).map(s=>typeof s==='string'?s:s.src));
  const toAdd=REL_SHOTS.filter(s=>!existing.has(s.src));
  if(toAdd.length) tree.more.shots=(tree.more.shots||[]).concat(toAdd);
})();
})();
