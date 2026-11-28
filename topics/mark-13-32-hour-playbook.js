/* Flagship Tactical Debate Playbook: Mark 13:32 / Matthew 24:36 ("The Son Doesn't Know the Hour")
   Synthesizes ALL Discord sources cleanly into English with verbatim Greek/Hebrew/Latin/Arabic quotes & 4 primary scans:
   - Islamic Apologetics (#general-refutations › Jesus does not know the hour)
   - Deenresponds (#matthew-24-36-nor-the-sun: NIV footnote, Mark 13:32, Basil of Caesarea Letter 236 scans)
   - Averroes 2 (#jesus-kennt-die-stunde-nicht: Tertullian, Irenaeus, Hilary of Poitiers, Athanasius, Epiphanius, 1 John 2:20)
   - Avereos 3 (#wusste-nicht-mensch, #agnoiten, #alte-testament-gott-weißt-auch-nicht, #offenbaren, #aus-der-natur-wusste-nicht, #theodoret)
   - Averroes 1 (#jesus-kennt-die-stunde: Q 43:61 Tafsir al-Wasit, al-Alusi, Ibn Kathir, Tafsir al-Tanwir) */
(function () {
  'use strict';

  const CR_ALL = 'Deenresponds · #matthew-24-36-nor-the-sun · Averroes 2 · #jesus-kennt-die-stunde-nicht · Avereos 3 · #agnoiten / #theodoret · Islamic Apologetics · #general-refutations';
  const LINK_DR = 'https://discord.com/channels/1328402309297733662/1366712589798608968';
  const LINK_AV2 = 'https://discord.com/channels/1295033866385358860/1324166587632058428';
  const LINK_A3_MENSCH = 'https://discord.com/channels/1344652618072330290/1430569933212880976';
  const LINK_A3_OFFEN = 'https://discord.com/channels/1344652618072330290/1430583301759828018';
  const LINK_A3_NATUR = 'https://discord.com/channels/1344652618072330290/1460765246175187027';
  const LINK_A3_THEO = 'https://discord.com/channels/1344652618072330290/1478382259609534464';

  const SHOTS_ALL = [
    { src: 'shots/mk1332-matt2436-niv-fn.webp', cap: 'DR #matthew-24-36-nor-the-sun: Matthew 24:36 (NIV) highlighting Footnote [a]: “Some manuscripts do not have nor the Son.”' },
    { src: 'shots/dr-nt-matt-24-36-2.webp', cap: 'DR #matthew-24-36-nor-the-sun: Parallel verse Mark 13:32 (NIV) preserving “nor the Son, but only the Father” intact.' },
    { src: 'shots/mk1332-basil-letter-236.webp', cap: 'DR #matthew-24-36-nor-the-sun: Basil of Caesarea, Letter 236.2 (4th c.), misled by censored manuscripts of Matthew 24:36 that omitted “nor the Son.”' },
    { src: 'shots/dr-nt-matt-24-36-1.webp', cap: 'DR #matthew-24-36-nor-the-sun: Matthew 24:36 text-critical comparison with Mark 13:32.' }
  ];

  // Branch A: The "Human Nature" Dodge, Chalcedon Person-Subject Problem, Agnoetae Condemnation & Ascending Hierarchy
  const branchHumanNature = {
    optWho: 'Watch out · if they say',
    optLabel: '“He didn’t know the Hour in his human nature, only in his divine nature!”',
    they: 'Jesus only lacked knowledge of the Hour according to his human nature; in his divine nature he knew it all along.',
    we: 'Natures do not know things—persons know. Under Chalcedon (451), Christ is ONE person (one “I”). If that one person truthfully says “nor the Son,” then Christ does not know. Worse: claiming Jesus was ignorant in his human nature was formally condemned by the Church itself as the Agnoetae heresy!',
    more: {
      h: '1. Persons Know, Not Natures — & the Agnoetae Heresy Trap',
      facts: [
        ['Chalcedon (451)', 'One Person (hypostasis), not two knowing subjects'],
        ['Agnoetae Heresy', 'Condemned for claiming Christ’s humanity was ignorant'],
        ['Pope Gregory I', 'Letter X.39 to Eulogius rejects ignorance in Christ’s humanity'],
        ['Holy Office (1918)', 'Formally forbids teaching limited knowledge in Christ’s soul']
      ],
      visual: {
        kind: 'compare',
        left: {
          title: 'The Apologist’s “Human Nature” Dodge',
          items: [
            'Splits Jesus into two knowing subjects: a “divine I” that knows and a “human I” that does not (Nestorianism!).',
            'If I know the time in my head but not in my elbow, I cannot truthfully say “I do not know the time.”',
            'Directly condemned as the Agnoetae heresy by Gregory the Great, John of Damascus, and the 1918 Holy Office decree.'
          ]
        },
        right: {
          title: 'What Mark 13:32 Actually Says',
          items: [
            'Uses the personal title “the Son” (ho huios) contrasted with “the Father” (ho patēr)—never “human nature vs. divine nature.”',
            'Ascending hierarchy: humans < angels < “the Son” < “only the Father.”',
            'If “the Son” meant a mere human nature, Jesus would rank BELOW angels, not ABOVE them!'
          ]
        }
      },
      p: [
        'Natures do not think or know—persons do: A human nature is an abstract set of properties; a person (hypostasis) is the subject who knows or is ignorant. Under Chalcedonian orthodoxy (451 CE), Jesus has only ONE person. If that one person simultaneously knows X and does not know X, you have a logical contradiction—or you have quietly split Christ into two persons (Nestorianism).',
        'Condemned by their own Church (Agnoetae Heresy): The 6th-century sect of the Agnoetae (led by Themistius of Alexandria) taught that Christ was ignorant of the Hour in his human soul. Both Catholic and Eastern Orthodox orthodoxy formally rejected this! Pope Gregory the Great (Registrum Epistularum X.39, to Patriarch Eulogius of Alexandria) condemned the Agnoetae, St. John of Damascus (Exposition of the Orthodox Faith 3.21) flatly denied genuine ignorance in Christ, and the Roman Catholic Holy Office Decree of 5 June 1918 (Denzinger 3645–3647) forbade teaching that Christ’s human soul had limited knowledge.',
        'Source vs. Subject fallacy (“he didn’t know FROM his human nature”): If someone says “he didn’t know it from his human nature, though he knew it from his divine nature,” then the only truthful sentence would be “I do not know it from my humanity”—just as a student who knows the answer from memory cannot truthfully say “I do not know the answer” merely because he didn’t get it from his textbook.'
      ],
      quotes: [
        {
          by: 'Pope Gregory the Great (c. 600 CE) — Condemning the Agnoetae',
          en: 'Who can be so foolish as to say that the Son of God is ignorant of the day which He Himself made?... In His humanity He knew the day and hour of judgment, though not from His humanity.',
          ref: 'Registrum Epistularum, Book X, Letter 39 (to Eulogius of Alexandria)'
        },
        {
          by: 'St. John of Damascus (d. 749 CE) — Rejecting Real Ignorance in Christ',
          en: 'He is said to be ignorant of the last day... yet we must understand that He was not truly ignorant, for His human soul was enriched with the knowledge of things to come through its union with the Word.',
          ref: 'Exposition of the Orthodox Faith (De Fide Orthodoxa), Book 3, Chapter 21'
        }
      ],
      src: [
        'Council of Chalcedon (451 CE)',
        'Pope Gregory I, Registrum Epistularum X.39 (to Eulogius)',
        'John of Damascus, Expositio Fidei 3.21',
        'Holy Office Decree of 5 June 1918 (Denzinger 3645–3647)'
      ],
      credit: 'Avereos 3 · #wusste-nicht-mensch · #agnoiten · #aus-der-natur-wusste-nicht',
      link: LINK_A3_MENSCH
    },
    next: [
      {
        they: 'Even so, when Jesus says “nor the Son,” he is only speaking as a man.',
        we: 'The ascending order in Mark 13:32 destroys that claim: “no one, not even the angels in heaven, nor the Son, but only the Father.” If he meant his mere human nature, he would stand BELOW the angels—not ABOVE them! And even an angel of God is said to know “all things that are on the earth” (2 Sam 14:20).',
        more: {
          h: 'The Ascending Hierarchy & 2 Samuel 14:20',
          facts: [
            ['Order in Mark 13:32', 'Humans → Angels → The Son → ONLY the Father'],
            ['Implication', '“The Son” ranks ABOVE angels (his highest status)'],
            ['2 Samuel 14:20', '“According to the wisdom of the angel of God, to know all things on earth”'],
            ['Missing 3rd Person', 'Where is the Holy Spirit in “only the Father”?']
          ],
          p: [
            'The climactic ladder of Mark 13:32: Jesus moves deliberately from lowest to highest in knowledge: (1) no human being (oudeis), (2) not even the angels in heaven, (3) not even the Son himself, (4) ONLY the Father (ei mē ho patēr; Matt 24:36 adds monos, “alone”). If “the Son” referred only to a limited human mind, placing him ABOVE the angels of heaven makes zero sense—and his highest status as “the Son” is precisely what is excluded from knowing the Hour.',
            'Even an angel knows all things on earth (2 Samuel 14:20): In 2 Samuel 14:20, David’s wisdom is praised as “like the wisdom of the angel of God, to know all things that are on the earth.” If Jesus’s humanity ranked above angels, why wouldn’t it know? If it ranked below angels, why does Jesus place “the Son” ABOVE angels in Mark 13:32?',
            'The Missing Holy Spirit Dilemma: Matthew 24:36 says “but my Father ALONE (ho patēr mou monos).” Where is the Holy Spirit? If the Holy Spirit knows the Hour, then “the Father ALONE” is literally false. If the Holy Spirit does NOT know the Hour, then the Holy Spirit is not omniscient God either!'
          ],
          quotes: [
            {
              by: 'Mark 13:32 (Greek NA28 & English)',
              en: 'Περὶ δὲ τῆς ἡμέρας ἐκείνης ἢ τῆς ὥρας οὐδεὶς οἶδεν, οὐδὲ οἱ ἄγγελοι ἐν οὐρανῷ οὐδὲ ὁ υἱός, εἰ μὴ ὁ πατήρ. — “But concerning that day or that hour, no one knows, not even the angels in heaven, nor the Son, but only the Father.”',
              ref: 'Mark 13:32 (cf. Matt 24:36: εἰ μὴ ὁ πατὴρ μόνος — “except the Father ALONE”)'
            },
            {
              by: '2 Samuel 14:20 (ESV)',
              en: 'But my lord has wisdom like the wisdom of the angel of God to know all things that are on the earth.',
              ref: '2 Samuel 14:20'
            }
          ],
          src: ['Mark 13:32', 'Matthew 24:36 (monos)', '2 Samuel 14:20'],
          credit: 'Avereos 3 · #wusste-nicht-mensch · #offenbaren',
          link: LINK_A3_NATUR
        },
        next: []
      }
    ]
  };

  // Branch B: Pre-Nicene Fathers (Irenaeus & Tertullian) vs. Post-Nicene Excuses (Hilary, Athanasius, Epiphanius, Theodoret)
  const branchFathers = {
    optWho: 'Watch out · if they say',
    optLabel: '“The Church Fathers explained it: ‘not knowing’ meant ‘not revealing’ (Hilary), ‘knowing cognitively vs. by deed’ (Epiphanius), or he knew it from the signs (Athanasius)!”',
    they: 'Church Fathers like Hilary of Poitiers, Athanasius, and Epiphanius explained that Jesus really knew the Hour—he either concealed it (“economy of silence”), knew it because he knew the signs, or knew it cognitively but not yet “by action.”',
    we: 'The EARLIEST Fathers (Irenaeus & Tertullian, 2nd–3rd c.) took Mark 13:32 literally: the Son genuinely did not know the Hour and the Father excelled him in knowledge. Later 4th-century excuses (Hilary, Athanasius, Epiphanius) contradict both the Greek verb oida and each other—and Theodoret of Cyrus explicitly called the “pretending ignorance” excuse blasphemy that makes Truth into a liar!',
    more: {
      h: '2. Pre-Nicene Literalism (Irenaeus & Tertullian) vs. Post-Nicene Evasions',
      facts: [
        ['Irenaeus (c. 180 CE)', 'Against Heresies 2.28.6: “the Father alone knows… the Son was not ashamed to refer it to the Father”'],
        ['Tertullian (c. 213 CE)', 'Against Praxeas 26: “He Himself does not know the day and last hour known to the Father alone”'],
        ['Theodoret (5th c.)', 'Refutation of Cyril, Anath. 4: “If He knows yet says He is ignorant, then Truth lies!”'],
        ['4 Contradictory Excuses', 'Hilary (hiding) vs. Athanasius (signs) vs. Epiphanius (deed) vs. Basil (censored MS)']
      ],
      visual: {
        kind: 'steps',
        items: [
          ['Stage 1 · 2nd–3rd c. (Irenaeus & Tertullian)', 'Read Mark 13:32 literally: the Son genuinely lacked knowledge of the Hour; only the Father knew.'],
          ['Stage 2 · 4th c. Post-Nicene Crisis (Hilary, Athanasius, Epiphanius)', 'Once co-equal omniscience became dogma, Fathers invented mutually contradictory dodges to explain away Jesus’s plain words.'],
          ['Stage 3 · 5th c. Backfire (Theodoret of Cyrus)', 'Theodoret refuted the “economy of silence” dodge directly: claiming Jesus knew while saying he didn’t turns “the Truth” into a liar.']
        ]
      },
      p: [
        'Irenaeus (c. 180 CE, Against Heresies 2.28.6) takes Jesus literally: Refuting Valentinian Gnostics who claimed secret cosmic knowledge, Irenaeus writes that “even the Lord, the very Son of God, conceded that the Father alone knows the very day and hour of judgment.” Notice his entire argument collapses if Jesus actually knew it in secret—Irenaeus explicitly concludes in 2.28.8 that “the Father is above all” and excels the Son in knowledge!',
        'Tertullian (c. 213 CE, Against Praxeas 26) confirms literal ignorance: Listing proofs distinguishing the Father from the Son, Tertullian writes plainly: “the day and the last hour, which is known to the Father alone, He Himself also does not know.”',
        'Hilary of Poitiers (d. 367 CE, De Trinitate IX) — “Economy of Silence” refuted (5 flaws): Hilary claimed Jesus knew the Hour via Col 2:3 (“treasures of wisdom hidden in him”) and merely concealed it, comparing it to Gen 22:12 (“now I know you fear God”). Refutation: (1) Jesus says “no one knows (oudeis oiden),” NOT “I will not tell you.” (2) Gen 22:12 is a test for Abraham, not ignorance in God. (3) Saying “I do not know” when you secretly know is a lie—which Theodoret of Cyrus explicitly condemned as blasphemy! (4) Mark 13:32–35 uses the exact same verb oida for the Son AND the disciples (“you do not know when the time will come”)—if oida meant “secretly knowing,” then the disciples also secretly knew the Hour! (5) Hilary contradicts himself: he says the Father is called “knowing” because He does not conceal it from the Son—yet if the Father revealed it to the Son, why does the Son deny knowing it?',
        'Athanasius (Against the Arians 3.42) — “Knows the signs = knows the Hour” refuted: Athanasius argued that because Jesus knows the signs preceding the Hour (earthquakes, wars, tribulation), he must know the exact Hour. Refutation (Obstetrician Analogy): A veteran obstetrician can track every single labor sign—contraction intervals, dilation, hormones, fetal position—and predict the entire sequence of events with decades of experience, yet still cannot know the exact minute of birth (often off by hours). Knowing precursors does not entail knowing the exact hour.',
        'Epiphanius of Salamis (Ancoratus 21) — “Cognitive vs. Performative Knowledge” refuted: Epiphanius claimed the Father knows both cognitively AND “by deed/action,” whereas the Son knows cognitively but not yet “by deed.” Refutation: (1) The Greek verb in Mark 13:32 is oida (cognitive/mental awareness), NOT action—saying the Son knows cognitively flatly contradicts Mark 13:32! (2) Confuses knowledge with execution: knowing tomorrow’s exam date does not change into a different “knowledge” after taking the exam. (3) Still concedes subordination/asymmetry: the Father possesses a mode of knowing that the Son lacks!'
      ],
      quotes: [
        {
          by: 'Irenaeus of Lyons (c. 180 CE)',
          en: 'You unreasonably and puffed up with your own wisdom rashly claim to know the unspeakable mysteries of God, whereas even the Lord, the very Son of God, conceded that the Father alone knows the very day and hour of judgment, declaring plainly: “Of that day and that hour knows no one, neither the Son, but the Father only.” If, then, the Son was not ashamed to refer the knowledge of that day to the Father alone, but declared what was true regarding the matter, neither let us be ashamed to reserve for God those greater questions which occur to us.',
          ref: 'Against Heresies (Adversus Haereses) 2.28.6'
        },
        {
          by: 'Tertullian (c. 213 CE)',
          en: 'He Himself does not know the day and the last hour, which is known to the Father alone; He delivers the kingdom to His disciples as it was appointed to Him by the Father; He has power to ask legions of angels from the Father; He cries out that the Father has forsaken Him; He commends His spirit into the hands of His Father.',
          ref: 'Against Praxeas (Adversus Praxean), Chapter 26'
        },
        {
          by: 'Theodoret of Cyrus (5th c. CE) — Condemning the “Pretending Ignorance” Dodge',
          en: 'If He knows the day, and, wishing to conceal it, says He is ignorant, see what blasphemy follows from this conclusion: Truth tells a lie, and cannot properly be called Truth!',
          ref: 'Refutation of the Twelve Anathemas of Cyril, on Anathema 4'
        },
        {
          by: 'Hilary of Poitiers (d. 367 CE) — The Forced “Concealment” Excuse',
          en: 'His ignorance must therefore be connected with the concealment of the treasures of wisdom that are in Him (Col 2:3)... Whenever God declares Himself ignorant, He is not truly subject to ignorance, but either it is not the proper time to speak, or it is an economy of non-action.',
          ref: 'De Trinitate, Book IX (cf. Averroes 2 · #jesus-kennt-die-stunde-nicht)'
        }
      ],
      src: [
        'Irenaeus, Against Heresies 2.28.6–8',
        'Tertullian, Against Praxeas 26',
        'Hilary of Poitiers, De Trinitate IX',
        'Athanasius, Discourses Against the Arians 3.42',
        'Epiphanius of Salamis, Ancoratus 21',
        'Theodoret of Cyrus, Reprehensio XII Cap. Cyrilli (Anath. 4)'
      ],
      credit: 'Averroes 2 · #jesus-kennt-die-stunde-nicht · Avereos 3 · #theodoret · #offenbaren',
      link: LINK_AV2
    },
    next: []
  };

  // Branch C: Textual Corruption — Copyists Deleted "nor the Son" from Matthew 24:36 & Misled Basil of Caesarea!
  const branchManuscripts = {
    optWho: 'Watch out · if they say',
    optLabel: '“Many Greek manuscripts of Matthew 24:36 don’t even contain ‘nor the Son’!”',
    they: 'Many Greek manuscripts of Matthew 24:36 omit the phrase “nor the Son,” so Matthew never even said the Son was ignorant!',
    we: 'That variant boomerangs fatally: Mark 13:32 preserves “nor the Son” intact across the manuscript tradition, while orthodox scribes deliberately DELETED “nor the Son” from Matthew 24:36 to protect Jesus’s supposed omniscience—an alteration so early that St. Basil of Caesarea (Letter 236) fell for the censored text!',
    more: {
      h: '3. Intentional Scribal Censorship in Matthew 24:36 (NIV Footnote & Basil Letter 236)',
      facts: [
        ['Earliest MSS (א*, B, Θ, f¹³)', 'Include “nor the Son” (οὐδὲ ὁ υἱός) in Matt 24:36'],
        ['Later Byzantine MSS', 'Deleted “nor the Son” for theological embarrassment'],
        ['Parallel Corruption', 'Same scribal pattern as Matt 19:17 (“Why do you call me good?”)'],
        ['Basil (Letter 236.2)', '4th-c. Father misled by the altered Matthew text']
      ],
      p: [
        '01 · The NIV footnote itself admits the textual variant: Matthew 24:36 (NIV) reads “not even the angels in heaven, nor the Son,[a] but only the Father,” with Footnote [a] stating: “Some manuscripts do not have nor the Son.” Critical editions (NA28 / UBS5) retain “nor the Son” as original because it is attested in the earliest Alexandrian and Western witnesses (Codex Sinaiticus א*, Vaticanus B, D, Θ, Old Latin, Irenaeus, Origen).',
        '02 · Textual criticism rule (lectio difficilior): No orthodox Christian scribe would ever INVENT and INSERT “nor the Son” to make Jesus look ignorant—every incentive ran the exact opposite way! Just as Matthew’s tradition softened Mark 10:18 (“Why do you call me good?”) in Matthew 19:17, later copyists erased “nor the Son” from Matthew 24:36 (while leaving Mark 13:32 untouched) to shield Jesus’s omniscience.',
        '03 · St. Basil of Caesarea (Letter 236.2, c. 376 CE) caught red-handed using the censored text: As shown in the highlighted scan from Basil’s Letter 236, this corruption happened so early that Basil compared Matthew and Mark side by side and triumphantly wrote: “What is noticeable in these passages is this; that Matthew says nothing about the ignorance of the Son… the Son is not included with His own servants in ignorance.” Modern textual criticism proves Basil was arguing from a scribe-doctored Bible!'
      ],
      quotes: [
        {
          by: 'Matthew 24:36 (NIV & Footnote [a])',
          en: 'But about that day or hour no one knows, not even the angels in heaven, nor the Son,[a] but only the Father. — Footnote a: “Some manuscripts do not have nor the Son.”',
          ref: 'Matthew 24:36 (NIV)'
        },
        {
          by: 'Basil of Caesarea (c. 376 CE) — Misled by the Censored Matthew 24:36',
          en: 'The wording of Matthew is “of that day and hour knows no man, no, not the angels of heaven, but my Father only.” That of Mark runs, “But of that day and that hour knows no man, no, not the angels which are in heaven, neither the Son, but the Father.” (Mark 13:32) What is noticeable in these passages is this; that Matthew says nothing about the ignorance of the Son…',
          ref: 'Basil of Caesarea, Letter 236, Section 2 (to Amphilochius)'
        }
      ],
      shots: SHOTS_ALL,
      src: [
        'Matthew 24:36 (NA28 / NIV Footnote [a])',
        'Mark 13:32',
        'Basil of Caesarea, Letter 236.2 (to Amphilochius)',
        'Bruce M. Metzger, A Textual Commentary on the Greek New Testament (Matt 24:36)'
      ],
      credit: 'Deenresponds · #matthew-24-36-nor-the-sun · Averroes 2 · #jesus-kennt-die-stunde-nicht',
      link: LINK_DR
    },
    next: []
  };

  // Branch D: Counter-Objection — "Wait, John 16:30 & 21:17 say 'You know ALL things'!"
  const branchKnowsAll = {
    optWho: 'Watch out · if they say',
    optLabel: '“What about John 16:30 & 21:17 where the disciples tell Jesus ‘You know all things’?”',
    they: 'The disciples explicitly tell Jesus “Now we know that you know all things” (John 16:30) and Peter says “Lord, you know everything” (John 21:17)—so Jesus IS omniscient!',
    we: 'The exact same Greek phrase (“you know all things,” οἴδατε πάντα) is applied to ordinary Christian believers in 1 John 2:20! In John 16:30 and 21:17, the disciples are praising Jesus’s prophetic insight into their unspoken questions and Peter’s heart—not absolute omniscience, which Mark 13:32 explicitly denies.',
    more: {
      h: '4. “You Know All Things” (John 16:30; 21:17) vs. 1 John 2:20 & 2 Sam 14:20',
      facts: [
        ['1 John 2:20 (TR/Majority)', 'καὶ οἴδατε πάντα — “and YOU know ALL THINGS” (said of believers!)'],
        ['John 16:19 & 16:30', 'Context: Jesus read their unspoken question → “we believe you came FROM God”'],
        ['John 21:17', 'Context: Peter’s grief: “You know everything; you know that I love you”'],
        ['2 Samuel 14:20', 'King David praised as knowing “all things that are on the earth”']
      ],
      p: [
        '1 John 2:20 uses the EXACT same phrase for ordinary humans: The same Johannine author writes to Christian believers: “But you have an anointing from the Holy One, and you know all things (καὶ οἴδατε πάντα, Majority Text; NA28 reads πάντες, “you all know”).” By the apologist’s literalist logic, every anointed believer is omniscient God—yet neither believers nor Jesus know the Hour (Mark 13:32)!',
        'Look at the conclusion in John 16:30 itself: After Jesus perceives the question the disciples wanted to ask (16:19), they exclaim: “Now we know that you know all things and do not need anyone to question you; BY THIS WE BELIEVE THAT YOU CAME FROM GOD.” They do NOT conclude “therefore you ARE God”—they conclude he is a prophet sent FROM God!',
        'Hebrew/Biblical idiom for broad or prophetic insight: In 2 Samuel 14:20, the wise woman tells King David he has wisdom “to know all things that are on the earth.” Nobody calls King David omniscient. And Mark 13:32 proves the hyperbole: Jesus—despite knowing his disciples’ thoughts by God’s permission—explicitly excludes himself from knowing the Hour.'
      ],
      quotes: [
        {
          by: '1 John 2:20 (Greek Majority Text / KJV & NA28)',
          en: 'καὶ ὑμεῖς χρῖσμα ἔχετε ἀπὸ τοῦ ἁγίου καὶ οἴδατε πάντα (var. πάντες). — “But ye have an unction from the Holy One, and ye know all things.”',
          ref: '1 John 2:20'
        },
        {
          by: 'John 16:30 (ESV)',
          en: 'Now we know that you know all things and do not need anyone to question you; this is why we believe that you came from God.',
          ref: 'John 16:30'
        },
        {
          by: 'John 21:17 (ESV)',
          en: 'He said to him, “Lord, you know everything; you know that I love you.”',
          ref: 'John 21:17'
        }
      ],
      src: ['John 16:19, 30', 'John 21:17', '1 John 2:20 (panta / pantes)', '2 Samuel 14:20', 'Mark 13:32'],
      credit: 'Averroes 2 · #jesus-kennt-die-stunde-nicht · Avereos 3 · #du-weisst-alles',
      link: LINK_AV2
    },
    next: []
  };

  // Branch E: Tu Quoque — "Wait, doesn't the Qur'an (43:61) say Jesus IS knowledge of the Hour?"
  const branchQ4361 = {
    optWho: 'Watch out · if they say',
    optLabel: '“Doesn’t Qurʾān 43:61 say Jesus IS ‘knowledge of the Hour’—so even Islam says he knows it?”',
    they: 'Qurʾān 43:61 literally calls Jesus “knowledge of the Hour” (ʿilmun lil-sāʿah), which proves even the Qurʾān says Jesus knows the Hour!',
    we: 'Two verses earlier (43:59), the Qurʾān calls Jesus “nothing but a servant” (ʿabd), and Q. 31:34 & 7:187 state that Allah ALONE knows the Hour! Classical tafsīr (Ibn Kathīr, al-Ālūsī, Tafsīr al-Wasīṭ) and the canonical reading ʿalamun (“a sign”) explain that Jesus’s second coming is a SIGN that the Hour is near—not that he possesses hidden knowledge of its timing.',
    more: {
      h: '5. Turn the Tables: Qurʾān 43:61 (ʿilm / ʿalam) Means a “Sign” of the Hour',
      facts: [
        ['Q. 43:59 (2 verses prior)', '“He was not but a servant (ʿabd) upon whom We bestowed favor”'],
        ['Q. 31:34 & 7:187', '“Indeed, Allah ALONE has knowledge of the Hour”'],
        ['Q. 43:61 Qirāʾah', 'Also recited as la-ʿalamun (“a sign/portent”) by Ibn ʿAbbās, Mujāhid & Qatādah'],
        ['Classical Tafsīr', 'Ibn Kathīr, al-Ālūsī, al-Wasīṭ & al-Tanwīr all confirm “sign of the Hour”']
      ],
      p: [
        'Context kills the claim two verses earlier (Q. 43:59): Allah explicitly states: “He [Jesus] was not but a servant (ʿabd) upon whom We bestowed favor, and We made him an example for the Children of Israel.” Calling him a created servant in 43:59 and then “a sign/indicator of the Hour” in 43:61 has nothing to do with divine omniscience.',
        'Qurʾān 31:34 & 7:187 restrict knowledge of the Hour to Allah ALONE: “Indeed, Allah [alone] has knowledge of the Hour (inna Llāha ʿindahu ʿilmu l-sāʿah)” (31:34). Even the Prophet Muḥammad ﷺ says: “Its knowledge is only with my Lord” (7:187).',
        'Classical Arabic grammar & Tafsīr (Ibn Kathīr, al-Ālūsī, al-Wasīṭ, al-Tanwīr): In 43:61 (wa-innahu la-ʿilmun lil-sāʿah), “ʿilm” carries the sense of ʿalāmah / dalīl (a sign/evidence by which the Hour is known—also read explicitly as la-ʿalamun, “a sign,” by Ibn ʿAbbās, Mujāhid, and Qatādah). When Jesus descends before the Day of Judgment, humanity knows the Hour is imminent (cf. Ṣaḥīḥ al-Bukhārī & Ṣaḥīḥ Muslim on his descent as a just ruler). Other exegetes (al-Ḥasan, Saʿīd ibn Jubayr) refer the pronoun hu to the Qurʾān itself as the final scripture warning of the Hour.'
      ],
      quotes: [
        {
          by: 'Qurʾān 43:59, 61',
          ar: 'إِنْ هُوَ إِلَّا عَبْدٌ أَنْعَمْنَا عَلَيْهِ ... وَإِنَّهُ لَعِلْمٌ لِّلسَّاعَةِ فَلَا تَمْتَرُنَّ بِهَا',
          en: 'He [Jesus] was not but a servant upon whom We bestowed favor… And indeed, he [his return] will be a sign/knowledge for the Hour, so be not in doubt of it.',
          ref: 'Qurʾān 43:59, 61'
        },
        {
          by: 'Qurʾān 31:34',
          ar: 'إِنَّ اللَّهَ عِندَهُ عِلْمُ السَّاعَةِ',
          en: 'Indeed, Allah [alone] has knowledge of the Hour.',
          ref: 'Qurʾān 31:34'
        },
        {
          by: 'Ibn Kathīr (d. 774 AH) on Q. 43:61',
          en: 'The correct view regarding “And indeed he is a knowledge/sign for the Hour” is that the pronoun refers to Jesus, because the context speaks of him—meaning his descent before the Day of Resurrection is a sign of the nearness of the Hour.',
          ref: 'Tafsīr Ibn Kathīr on Q. 43:61 (cf. al-Ālūsī, Rūḥ al-Maʿānī; Tafsīr al-Wasīṭ; Averroes 1 · #jesus-kennt-die-stunde)'
        }
      ],
      src: [
        'Qurʾān 43:59, 61; 31:34; 7:187',
        'Tafsīr Ibn Kathīr on Q. 43:61',
        'al-Ālūsī, Rūḥ al-Maʿānī on Q. 43:61',
        'Tafsīr al-Wasīṭ & Tafsīr al-Tanwīr on Q. 43:61',
        'Ṣaḥīḥ al-Bukhārī & Ṣaḥīḥ Muslim (descent of ʿĪsā)'
      ],
      credit: 'Averroes 1 · #jesus-kennt-die-stunde',
      link: 'https://discord.com/channels/1275832106949283962/1285987292716073030'
    },
    next: []
  };

  // Master Root Tree for Mark 13:32 / Matt 24:36
  const MASTER_CARD = {
    title: "Mark 13:32: the Son doesn't know the Hour",
    k: 'Christology · Omniscience · Flagship Playbook',
    blurb: '“Not even the angels, nor the Son, but only the Father” — ascending hierarchy, Agnoetae heresy trap, early Fathers, and Matt 24:36 scribal censorship.',
    article: {
      claim: 'Jesus is fully omniscient God, and Mark 13:32 / Matthew 24:36 does not undermine his divine knowledge.',
      tree: {
        they: 'Jesus is fully omniscient God—Mark 13:32 (“nor the Son, but only the Father”) does not mean he truly lacked knowledge of the Hour.',
        we: 'Mark 13:32 and Matthew 24:36 explicitly rank knowledge in an ascending hierarchy—humans < angels < the Son < “ONLY the Father” (monos). The earliest Church Fathers (Irenaeus & Tertullian) took Jesus literally, orthodox scribes actually deleted “nor the Son” from Matthew 24:36 out of embarrassment, and every later Trinitarian escape hatch either violates Chalcedon, falls into the condemned Agnoetae heresy, or turns Jesus into a liar.',
        forkTitle: '5 ways Christians try to escape Mark 13:32',
        forkSub: 'Pick any objection to dismantle it with verbatim quotes & primary scans',
        more: {
          h: 'The Explicit Hierarchy of Knowledge (Mark 13:32 & Matt 24:36)',
          facts: [
            ['Key Verses', 'Mark 13:32; Matthew 24:36 (monos = “ALONE”)'],
            ['Greek Verb', 'oida (οἶδεν) = cognitive knowing (same verb in vv. 33 & 35)'],
            ['Pre-Nicene Fathers', 'Irenaeus (AH 2.28.6) & Tertullian (Adv. Prax. 26) read it literally'],
            ['Scribal Censorship', 'Later MSS deleted “nor the Son” from Matt 24:36 (misleading Basil)']
          ],
          visual: {
            kind: 'compare',
            left: {
              title: 'Biblical Hierarchy (Mark 13:32 / Matt 24:36)',
              items: [
                '1. No human being (oudeis)',
                '2. Not even the angels in heaven',
                '3. Nor the Son (oude ho huios)',
                '4. ONLY the Father (ei mē ho patēr monos)',
                'Notice: the Holy Spirit is not even mentioned!'
              ]
            },
            right: {
              title: 'Why Every Trinitarian Escape Collapses',
              items: [
                '“Human nature didn’t know” → Condemned Agnoetae heresy & Nestorian split.',
                '“He knew but hid it” (Hilary) → Theodoret: turns “the Truth” into a liar.',
                '“He knew signs = Hour” (Athanasius) → Obstetrician fallacy.',
                '“Cognitive vs. deed” (Epiphanius) → Contradicts Greek oida & still subordinates Son.',
                '“Not in Matt 24:36 MSS” → Proves intentional orthodox scribal deletion!'
              ]
            }
          },
          p: [
            'Plain, unmistakable exclusion: “But concerning that day or that hour, no one knows, not even the angels in heaven, nor the Son, but only the Father” (Mark 13:32; Matthew 24:36 adds monos, “the Father ALONE”). Jesus does not say “my human body does not know” or “I am not authorized to tell you”—he excludes “the Son” (his highest title) and restricts knowledge exclusively to “the Father alone.”',
            'Confirmed by the exact same verb (oida) in the immediate context (Mark 13:33, 35): Two sentences later, Jesus tells his disciples: “Be on guard, keep awake. For you do not know (ouk oidate) when the time will come… Therefore stay awake—for you do not know (ouk oidate) when the master of the house will come.” Nobody claims the disciples secretly knew the Hour and merely “chose not to reveal it.” The verb oida means genuine cognitive non-knowledge throughout the entire passage.',
            'Confirmed by the earliest Church Fathers and scribal censorship: Before Nicaea, both Irenaeus (Against Heresies 2.28.6) and Tertullian (Against Praxeas 26) accepted Jesus’s ignorance literally. Only after co-equal omniscience became creedal dogma did copyists erase “nor the Son” from Matthew 24:36 (fooling Basil of Caesarea in Letter 236) and post-Nicene apologists invent mutually contradictory excuses.'
          ],
          quotes: [
            {
              by: 'Mark 13:32–33 (Greek NA28 & ESV)',
              en: 'Περὶ δὲ τῆς ἡμέρας ἐκείνης ἢ τῆς ὥρας οὐδεὶς οἶδεν, οὐδὲ οἱ ἄγγελοι ἐν οὐρανῷ οὐδὲ ὁ υἱός, εἰ μὴ ὁ πατήρ. — “But concerning that day or that hour, no one knows, not even the angels in heaven, nor the Son, but only the Father. Be on guard, keep awake. For you do not know (οὐκ οἴδατε) when the time will come.”',
              ref: 'Mark 13:32–33'
            },
            {
              by: 'Matthew 24:36 (Greek NA28 & NIV)',
              en: 'Περὶ δὲ τῆς ἡμέρας ἐκείνης καὶ ὥρας οὐδεὶς οἶδεν, οὐδὲ οἱ ἄγγελοι τῶν οὐρανῶν οὐδὲ ὁ υἱός, εἰ μὴ ὁ πατὴρ μόνος. — “But about that day or hour no one knows, not even the angels in heaven, nor the Son, but only the Father [alone].”',
              ref: 'Matthew 24:36'
            },
            {
              by: 'Acts 1:7 (ESV) — Even AFTER the Resurrection!',
              en: 'He said to them, “It is not for you to know times or seasons that the Father has fixed by his own authority.”',
              ref: 'Acts 1:7'
            }
          ],
          shots: SHOTS_ALL,
          src: [
            'Mark 13:32–37',
            'Matthew 24:36 (NIV Footnote [a] & NA28)',
            'Acts 1:7',
            'Irenaeus, Against Heresies 2.28.6–8',
            'Tertullian, Against Praxeas 26',
            'Basil of Caesarea, Letter 236.2',
            'Theodoret of Cyrus, Refutation of Cyril Anath. 4'
          ],
          credit: CR_ALL,
          link: LINK_DR
        },
        next: [branchHumanNature, branchFathers, branchManuscripts, branchKnowsAll, branchQ4361]
      },
      sum: '“Not even the angels, nor the Son, but only the Father” (Mark 13:32; Matt 24:36) establishes an ascending hierarchy of knowledge that excludes the Son from omniscience—taken literally by Irenaeus and Tertullian, censored by later Matthew copyists (misleading Basil), and unfixable by the condemned Agnoetae “human nature” dodge or Hilary’s “economy of silence.”'
    }
  };

  // Replace BOTH mounted instances of t-jesus-does-not-know-the-hour AND enrich sibling Q 43:61 card via window.AFTER
  window.AFTER = window.AFTER || [];
  window.AFTER.push(function (DATA) {
    function get(p) {
      let n = { children: DATA };
      for (const k of p.split('/')) {
        if (!n.children || !n.children[k]) return null;
        n = n.children[k];
      }
      return n;
    }

    // 1. Upgrade the main card (and its Mark-gospel mount) to the full English Flagship Playbook
    const paths = [
      'christianity/jesus/proof-texts/t-jesus-does-not-know-the-hour',
      'christianity/jesus/by-gospel/mark/t-jesus-does-not-know-the-hour'
    ];
    for (const p of paths) {
      const target = get(p);
      if (target) {
        Object.assign(target, JSON.parse(JSON.stringify(MASTER_CARD)));
      }
    }

    // 2. Also enrich sibling Qur'an 43:61 card with Averroes 1 #jesus-kennt-die-stunde Tafsir sources
    const q43 = get('islam/quran/d-ia-quran-surahs/jesus-knowledge-of-the-hour-43-61');
    if (q43 && q43.article && q43.article.tree) {
      const t = q43.article.tree;
      t.more = t.more || {};
      t.more.facts = [
        ['Q. 43:59 (2 verses earlier)', 'Jesus explicitly called “nothing but a servant (ʿabd)”'],
        ['Q. 31:34 & 7:187', 'Allah ALONE possesses knowledge of the Hour'],
        ['Variant Reading (Qirāʾah)', 'la-ʿalamun (“a sign”) — Ibn ʿAbbās, Mujāhid, Qatādah'],
        ['Classical Exegetes', 'Ibn Kathīr, al-Ālūsī, Tafsīr al-Wasīṭ & al-Tanwīr']
      ];
      t.more.p = [
        'Context two verses prior (Q. 43:59): “He [Jesus] was not but a servant (ʿabd) upon whom We bestowed favor.” The Qurʾān explicitly denies Jesus’s divinity right before 43:61, and Q. 31:34 states unequivocally: “Indeed, Allah alone has knowledge of the Hour.”',
        'Tafsīr al-Wasīṭ & al-Ālūsī (Rūḥ al-Maʿānī): Both explain that “knowledge for the Hour” (ʿilmun lil-sāʿah) means a SIGN/PORTENT of the Hour (with an implied noun: “a means of knowing the Hour is near”). When Jesus descends alive from heaven in the end times—as confirmed by mutawātir ḥadīth in al-Bukhārī, Muslim, al-Tirmidhī, Abū Dāwūd, and Ibn Mājah from Abū Hurayrah—his return signals that the Day of Judgment is imminent.',
        'Ibn Kathīr & the canonical reading la-ʿalamun: Ibn Kathīr confirms the pronoun refers to Jesus’s descent before the Day of Resurrection (linking it to Q. 4:159). Moreover, Ibn ʿAbbās, Mujāhid, and Qatādah recite the word as la-ʿalamun (“a sign/mark”) rather than ʿilmun, making the meaning crystal clear.',
        'Tafsīr al-Tanwīr (alternate classical view): Early exegetes including al-Ḥasan al-Baṣrī, Qatādah, and Saʿīd ibn Jubayr also noted that the pronoun “it” (innahu) can refer to the Qurʾān itself, as the final revelation warning humanity of the Hour. Under every classical reading, Q. 43:61 never attributes omniscience to Jesus.'
      ];
      t.more.quotes = [
        {
          by: 'Qurʾān 43:59, 61 & 31:34',
          ar: 'إِنْ هُوَ إِلَّا عَبْدٌ أَنْعَمْنَا عَلَيْهِ ... وَإِنَّهُ لَعِلْمٌ لِّلسَّاعَةِ ... إِنَّ اللَّهَ عِندَهُ عِلْمُ السَّاعَةِ',
          en: 'He was not but a servant upon whom We bestowed favor… And indeed, he [his return] will be a sign/knowledge for the Hour… Indeed, Allah [alone] has knowledge of the Hour.',
          ref: 'Qurʾān 43:59, 61; 31:34'
        },
        {
          by: 'Ibn Kathīr (d. 774 AH) on Q. 43:61',
          en: 'The correct opinion regarding “And indeed he is a knowledge/sign for the Hour” is that the pronoun refers to Jesus, for the context speaks of him—meaning his return before the Day of Resurrection is a sign of the Hour’s nearness.',
          ref: 'Tafsīr Ibn Kathīr on Q. 43:61'
        },
        {
          by: 'al-Ālūsī (Rūḥ al-Maʿānī) citing Ṣaḥīḥ al-Bukhārī & Ṣaḥīḥ Muslim',
          en: '“And he [Jesus] is a knowledge/sign of the Hour”—meaning his descent is one of the signs of the Last Day. The Prophet ﷺ said: “By Him in whose hand is my soul, the son of Mary will soon descend among you as a just judge; he will break the cross, kill the swine, and abolish the jizyah…”',
          ref: 'al-Ālūsī on Q. 43:61; Bukhārī 2222 / Muslim 155'
        }
      ];
      t.more.src = [
        'Qurʾān 43:59, 61; 31:34; 4:159',
        'Tafsīr Ibn Kathīr on Q. 43:61',
        'al-Ālūsī, Rūḥ al-Maʿānī on Q. 43:61',
        'Tafsīr al-Wasīṭ & Tafsīr al-Tanwīr on Q. 43:61',
        'Ṣaḥīḥ al-Bukhārī 2222; Ṣaḥīḥ Muslim 155'
      ];
      t.more.credit = 'Averroes 1 · #jesus-kennt-die-stunde · Islamic Apologetics';
      t.more.link = 'https://discord.com/channels/1275832106949283962/1285987292716073030';
    }
  });
})();
