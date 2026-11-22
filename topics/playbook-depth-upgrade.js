/* Playbook Depth Upgrade — Upgrades the 20 thinnest single-node cards
   into multi-branch Tactical Debate Playbooks with structured proof points,
   rich metadata (preserving all existing credit/link/shots/src/facts/quotes/visual),
   and 2 substantive "Watch out · if they say" follow-up trap branches each. */
(() => {
  function findArt(key) {
    for (let i = window.TOPICS.length - 1; i >= 0; i--) {
      const t = window.TOPICS[i], k = t.path.join('/');
      if (k === key && t.node && t.node.article) return t.node.article;
      if (key.startsWith(k + '/') && t.node && t.node.children) {
        const sub = t.node.children[key.slice(k.length + 1)];
        if (sub && sub.article) return sub.article;
      }
    }
    return null;
  }

  function up(key, patch) {
    const a = findArt(key);
    if (!a) { console.warn('playbook-depth-upgrade: missing', key); return; }
    if (!a.tree) { console.warn('playbook-depth-upgrade: no tree', key); return; }
    const t = a.tree;
    t.more = t.more || {};
    if (patch.who) t.who = patch.who;
    if (patch.p) t.more.p = patch.p;
    if (patch.quotes && (!t.more.quotes || !t.more.quotes.length)) t.more.quotes = patch.quotes;
    if (patch.visual && !t.more.visual) t.more.visual = patch.visual;
    if (Array.isArray(patch.next) && patch.next.length) {
      t.next = (t.next && t.next.length) ? t.next.concat(patch.next) : patch.next;
    }
    if (patch.forkTitle && (t.next || []).length > 1) t.forkTitle = patch.forkTitle;
    if (patch.forkSub && (t.next || []).length > 1) t.forkSub = patch.forkSub;
  }

  const trap = (optLabel, they, who, we, h, p, src, facts, quotes) => ({
    optWho: 'Watch out · if they say',
    optLabel,
    they,
    theyWho: 'Watch out · if they say',
    who,
    we,
    more: { h, p, src, facts, quotes },
    next: []
  });

  const STD_FORK_TITLE = 'Watch out · common follow-up traps';
  const STD_FORK_SUB = 'Tap the counter-claim they raise next to dismantle it and push forward.';

  /* 1. islam/hadith/d-dr-the-prophet-sitting-on-the-arsh */
  up('islam/hadith/d-dr-the-prophet-sitting-on-the-arsh', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Two classical Salaf readings: In Tafsīr al-Ṭabarī on Qurʾān 17:79, Mujāhid relates that al-Maqām al-Maḥmūd refers to seating the Prophet ﷺ beside the Throne, while the majority of Salaf and later scholars understand it as the Station of Great Intercession.',
      '02 · Created Throne vs Creator: The ʿArsh is itself a created entity, not an object of worship; placing a creature upon or beside it by Allah’s command confers zero divine attributes.',
      '03 · Worship belongs to Allah alone: Muslims do not worship Allah because of physical elevation, nor does honouring a servant diminish Allah’s absolute uniqueness—under either reading the Prophet ﷺ remains wholly subject to Allah’s will.'
    ],
    quotes: [
      { by: 'Qurʾān — Sūrat al-Isrāʾ', en: 'It may be that your Lord will raise you to a praised station.', ref: '17:79' }
    ],
    next: [
      trap(
        'Even if it’s an honour, putting a creature on God’s Throne deifies him!',
        'Mujāhid’s report is famous among early Atharīs—accepting it at all means Muslims deify Muḥammad by putting him on God’s seat.',
        'Distinguish divine honour from worship',
        'Deification means attributing divine essence or worship to a creature, whereas Mujāhid’s report explicitly treats this as an honour bestowed by Allah upon His servant. In Islamic theology, Allah creates and honours whomever He wills without ever sharing His Lordship or right to worship.',
        'Servant honoured by Allah vs shared divinity',
        [
          '01 · Honour granted by the Sovereign: Being elevated to a high station by Allah’s decree presupposes dependence on Him—a servant honoured by his Lord is the exact opposite of an independent deity.',
          '02 · Intercession confirms servitude: In the well-established accounts of al-Maqām al-Maḥmūd, the Prophet ﷺ falls in prostration before Allah and awaits permission before interceding, underscoring total submission.'
        ],
        ['Qurʾān 17:79', 'Tafsīr al-Ṭabarī 17:79 (Mujāhid)', 'Qurʾān 21:26–28'],
        [
          ['Q 17.79 meaning', 'Praised station granted by Allah'],
          ['Prophetic posture', 'Prostrates before interceding'],
          ['Q 21.26–28', 'Honoured servants never rival Allah'],
          ['Creedal boundary', 'Honour ≠ shirk']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Anbiyāʾ', en: 'Rather, they are honoured servants. They cannot precede Him in word, and they act by His command.', ref: '21:26–27' }
        ]
      ),
      trap(
        'Your scholars disagree on 17:79—doesn’t that show creedal confusion?',
        'Your own scholars cannot even agree on what al-Maqām al-Maḥmūd means, so Islamic creed is confused on this verse.',
        'Show creedal unanimity beneath tafsīr breadth',
        'Exegetical breadth over a non-fundamental detail is a hallmark of classical tafsīr, not confusion. Across both views—Great Intercession (the overwhelming consensus) and Mujāhid’s report—Sunni creed is unanimous that the Throne is created and Allah alone is worshipped.',
        'Tafsīr breadth vs unanimous tawḥīd',
        [
          '01 · Shared creedal foundation: Neither Mujāhid nor any scholar who cited his narration ever suggested the Prophet ﷺ shares Allah’s essence, omniscience, or right to worship.',
          '02 · Consensus on intercession: Sound prophetic reports explicitly identify al-Maqām al-Maḥmūd as the Prophet’s ﷺ Great Intercession on the Day of Judgement, making it the primary established meaning.'
        ],
        ['Tafsīr al-Ṭabarī 17:79', 'Qurʾān 17:79; 42:11'],
        [
          ['Core creed', 'Unanimous on strict tawḥīd'],
          ['Majority tafsīr', 'Station of Great Intercession'],
          ['Mujāhid report', 'Minority Atharī honour report'],
          ['Created status', 'Throne & Messenger are created']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Shūrā', en: 'There is nothing like unto Him, and He is the Hearing, the Seeing.', ref: '42:11' }
        ]
      )
    ]
  });

  /* 2. islam/hadith/d-dr-adam-and-moses-predestination */
  up('islam/hadith/d-dr-adam-and-moses-predestination', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Repentance had already occurred: Qurʾān 2:37 records that Ādam received words from his Lord and was forgiven long before this dialogue, so no unrepented sin remained at issue.',
      '02 · Blame concerned the calamity: As Ibn Taymiyya and Ibn al-Qayyim explain, Mūsā faulted Ādam for the hardship of expulsion from Paradise—a decreed calamity—not for persisting in disobedience.',
      '03 · Classical rule on qadar: Appealing to Allah’s decree is valid for enduring past misfortunes after repentance, whereas invoking qadar to justify committing or continuing in sin is forbidden (cf. Bassam Zawadi’s detailed analysis with primary scans).'
    ],
    next: [
      trap(
        'The Prophet said Ādam won—so blaming qadar for a sin worked!',
        'Still, the Prophet said Ādam won the argument—so blaming God’s decree for sin actually worked!',
        'Separate confessed guilt from decreed hardship',
        'Ādam won because Mūsā was reproaching him for a hardship whose guilt Allah had already pardoned. Citing the decree after repentance explains why the outcome unfolded as Allah willed without excusing the act of disobedience itself.',
        'Ādam’s confession vs Mūsā’s reproach',
        [
          '01 · Ādam’s own confession of fault: In Qurʾān 7:23, Ādam and Ḥawwāʾ explicitly blamed themselves—“Our Lord, we have wronged ourselves”—proving Ādam never used qadar to deny moral guilt.',
          '02 · Two distinct categories: Ibn al-Qayyim notes that human beings are commanded to repent from sins (as Ādam did) and submit patiently to decreed calamities (like expulsion).'
        ],
        ['Bukhārī 6614', 'Muslim 2652', 'Qurʾān 2:37; 7:23'],
        [
          ['Ādam’s response', 'Confessed fault (Q 7:23)'],
          ['Divine pardon', 'Already forgiven (Q 2:37)'],
          ['Ibn al-Qayyim', 'Repent from sin; accept decree'],
          ['Debate focus', 'Expulsion calamity, not sin']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Aʿrāf', en: 'Our Lord, we have wronged ourselves, and if You do not forgive us… we will surely be among the losers.', ref: '7:23' }
        ]
      ),
      trap(
        'If Allah already forgave Ādam, why would Mūsā blame him at all?',
        'Then why did Mūsā even criticize Ādam if Ādam had already been forgiven and it was decreed?',
        'Explain Mūsā’s grief & Q 6.148',
        'Mūsā spoke out of grief over humanity’s loss of Paradise—a monumental consequence for Ādam’s descendants—not out of ignorance of forgiveness. Ādam reminded him that the loss of Paradise had been decreed in Allah’s foreknowledge forty years before his creation.',
        'Grief over humanity’s exile vs fatalism',
        [
          '01 · Focus on humanity’s exile: Mūsā asked why Ādam caused himself and his offspring to leave Paradise, addressing the downstream hardship rather than claiming Ādam remained unforgiven.',
          '02 · Qurʾān condemns fatalistic excuses: Elsewhere in Qurʾān 6:148, Allah explicitly rebukes polytheists who say “Had Allah willed, we would not have associated partners,” closing the door on using qadar to excuse sin.'
        ],
        ['Bukhārī 6614', 'Muslim 2652', 'Qurʾān 6:148'],
        [
          ['Mūsā’s point', 'Humanity’s exile from Paradise'],
          ['Ādam’s reply', 'Exile decreed 40 years prior'],
          ['Q 6.148 warning', 'Rejects qadar as excuse for shirk'],
          ['Accountability', 'Moral duty remains intact']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Baqara', en: 'Then Ādam received from his Lord words, and He accepted his repentance.', ref: '2:37' }
        ]
      )
    ]
  });

  /* 3. islam/quran/d-ia-quranic-language/t-he */
  up('islam/quran/d-ia-quranic-language/t-he', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Grammatical vs biological gender: Arabic divides every noun and pronoun into masculine or feminine grammatical classes—even inanimate objects like book (masculine) or sun (feminine)—without implying biological sex.',
      '02 · No neutral pronoun in Arabic: Because Arabic has no singular gender-neutral pronoun akin to “it,” huwa (“He”) functions as the standard unmarked grammatical form.',
      '03 · Absolute transcendence in revelation: While Muslims address Allah using the masculine grammatical form taught in revelation, Qurʾān 42:11 and Sūra 112 explicitly negate any physical likeness, gender, or anthropomorphism.'
    ],
    next: [
      trap(
        'Why not alternate between He and She to show Allah has no gender?',
        'Why couldn’t Allah alternate between “He” and “She” to prove He is beyond human gender?',
        'Explain grammatical coherence in Arabic',
        'In Arabic, switching pronouns mid-discourse for a single referent breaks grammatical coherence and suggests two different beings or shifting physical forms. Using the unmarked pronoun huwa consistently while declaring “nothing is like Him” (42:11) preserves both clarity and transcendence.',
        'Unmarked syntax vs pronoun-switching confusion',
        [
          '01 · Unmarked default in Semitic syntax: In Arabic grammar, the masculine singular acts as the default category whenever biological sex does not apply, just as general human laws address every person with the same unmarked form.',
          '02 · Explicit negation of likeness: Qurʾān 112 affirms Allah neither begets nor was begotten and has no equivalent, immediately ruling out any literal male attribute.'
        ],
        ['Qurʾān 42:11', 'Qurʾān 112:1–4'],
        [
          ['Arabic rule', 'Masculine is unmarked default'],
          ['Pronoun switching', 'Violates coherence of referent'],
          ['Q 112.3–4', 'Neither begets nor has equal'],
          ['Q 42.11', 'Nothing is like unto Him']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Ikhlāṣ', en: 'He neither begets nor is born, nor is there to Him any equivalent.', ref: '112:3–4' }
        ]
      ),
      trap(
        'Doesn’t calling Allah “He” borrow the same gendered framing as “Father”?',
        'In the Bible God is also called Father and He, yet Christians say that shows relational personhood—isn’t the Qurʾān borrowing the same gendered framing?',
        'Contrast pronoun grammar with familial titles',
        'There is a decisive difference: the Qurʾān uses only the grammatical pronoun huwa while expressly forbidding calling Allah a literal or metaphorical “Father” (5:18; 19:92). A syntactic pronoun is dictated by Arabic grammar; familial titles like “Father” and “Son” are lexical choices that invite creaturely kinship.',
        'Grammatical pronoun vs divine kinship titles',
        [
          '01 · Rejection of familial titles: Qurʾān 5:18 and 19:88–92 reject attributing offspring or literal fatherhood to Allah, keeping His relationship with creation strictly that of Creator and Lord.',
          '02 · Grammar vs theology: No Arabic speaker infers maleness from calling the moon masculine (al-qamar) or femaleness from calling the sun feminine (al-shams); the same linguistic distinction holds here.'
        ],
        ['Qurʾān 5:18; 19:88–92', 'Qurʾān 42:11'],
        [
          ['Qurʾānic rule', 'No “Father” or “Son” titles'],
          ['Q 5.18', 'Refutes divine kinship claims'],
          ['Arabic nouns', 'Moon (m.) / Sun (f.) non-sexual'],
          ['Theology', 'Transcendence over creatureliness']
        ],
        [
          { by: 'Qurʾān — Sūrat Maryam', en: 'It is not appropriate for the Most Merciful that He should take a son.', ref: '19:92' }
        ]
      )
    ]
  });

  /* 4. islam/quran/d-ia-quranic-language/t-know */
  up('islam/quran/d-ia-quranic-language/t-know', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Manifestation in lived reality: Allah’s foreknowledge is complete from eternity; “until We know” (47:31) refers to bringing human choices into outward existence so deeds stand as witnessed reality.',
      '02 · Ibn Kathīr’s classical distinction: In his tafsīr, Ibn Kathīr clarifies that this denotes Allah’s knowledge of what has actually come to exist, following His eternal prior knowledge of what would exist.',
      '03 · Justice in reward and punishment: Judging people only after their deeds materialize in history—as also illustrated in 2:143—ensures absolute fairness so no soul is punished merely for foreknown intent.'
    ],
    next: [
      trap(
        'The Arabic literally says “until We know”—that implies learning something new!',
        'If the verse literally uses the verb “to know” (naʿlama) with “until” (ḥattā), the plain Arabic still implies God acquires new knowledge.',
        'Cite Q 6.59 & Ibn Kathīr’s lexical rule',
        'In classical Arabic tafsīr and Qurʾānic usage, ʿilm here denotes knowledge of realization—what has occurred in existence—not transition from ignorance. The Qurʾān explicitly affirms Allah already knows every hidden thought and every leaf that falls before it happens (6:59; 57:22).',
        'Knowledge of realization vs learning',
        [
          '01 · Unqualified omniscience in the Qurʾān: Qurʾān 6:59 declares that not a leaf falls without His knowledge and everything is recorded in a clear register, excluding any notion of divine ignorance.',
          '02 · Parallel in Q 2.143: In Qurʾān 2:143, the change of qibla is explained as “so that We might make evident (li-naʿlama) who follows the Messenger”—manifesting loyalty openly in action.'
        ],
        ['Qurʾān 47:31; 2:143', 'Qurʾān 6:59', 'Tafsīr Ibn Kathīr'],
        [
          ['Q 6.59', 'Knows every falling leaf'],
          ['Q 2.143 parallel', 'Test manifests true loyalty'],
          ['Lexical point', 'ʿIlm of actualized existence'],
          ['Omniscience', 'Eternal & unchanging']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Anʿām', en: 'Not a leaf falls but that He knows it.', ref: '6:59' }
        ]
      ),
      trap(
        'If Allah already knows the outcome, testing people is pointless!',
        'If Allah already knows who will pass or fail, then testing people to “know” them is pointless.',
        'Explain judicial fairness (al-ḥujja)',
        'The test is not to inform Allah; it is to establish the evidence against or for human beings through their own free actions. Without lived deeds, a person punished purely on foreknowledge could object that they never actually committed the wrong.',
        'Establishing proof through real deeds',
        [
          '01 · Proof belongs to Allah (al-ḥujja): Judging people on enacted choices gives moral agents no excuse on the Day of Judgement, since their own records testify to real deeds.',
          '02 · Purification of believers: Qurʾān 47:31 states Allah tests believers to distinguish the steadfast and patient—refining character and elevating ranks through real-world trial.'
        ],
        ['Qurʾān 47:31', 'Qurʾān 4:165', 'Tafsīr Ibn Kathīr'],
        [
          ['Purpose of test', 'Not to inform Allah'],
          ['Judicial fairness', 'People judged on enacted deeds'],
          ['Moral growth', 'Refines patience & steadfastness'],
          ['Q 4.165', 'Leaves humanity no excuse']
        ],
        [
          { by: 'Qurʾān — Sūrat Muḥammad', en: 'We will surely test you until We make evident those who strive among you and the patient.', ref: '47:31' }
        ]
      )
    ]
  });

  /* 5. islam/quran/preservation/d-ia-common-claims/aisha-mushaf-first-rows */
  up('islam/quran/preservation/d-ia-common-claims/aisha-mushaf-first-rows', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Weak isolated transmission: The report from Ḥumayda bint Abī Yūnus—cited in al-Itqān (3/82), Abū ʿUbayd’s Faḍāʾil (1/324), and Ibn Abī Dāwūd’s al-Maṣāḥif (238)—rests on an uncorroborated weak chain that cannot establish a Qurʾānic reading.',
      '02 · Actual source is a prophetic ḥadīth: ʿĀʾisha herself and al-Barāʾ ibn ʿĀzib narrate the wording as a distinct statement of the Prophet ﷺ—“Allah and His angels send blessings upon the first rows” (Ṣaḥīḥ Ibn Ḥibbān 2163–2164; Ibn al-Muqriʾ, al-Muʿjam).',
      '03 · Verbal similarity caused conflation: Because Qurʾān 33:56 begins with “Indeed, Allah and His angels send blessings upon the Prophet,” this single weak line mistakenly blended the similar prophetic ḥadīth about prayer rows into the verse.'
    ],
    next: [
      trap(
        'Why did al-Suyūṭī and Ibn Abī Dāwūd preserve it if ʿUthmān didn’t alter the text?',
        'Even if Ḥumayda’s report is weak, why would classical scholars like al-Suyūṭī, Abū ʿUbayd, and Ibn Abī Dāwūd preserve it unless ʿUthmān really altered the text?',
        'Explain archival transparency vs endorsement',
        'Early Muslim compilers routinely catalogued every circulating report—sound or weak—precisely to document and evaluate claims transparently rather than censoring them. Preserving a weak report does not validate it, and none of these scholars adopted the phrase as Qurʾān.',
        'Archival preservation ≠ textual validation',
        [
          '01 · Documentation is not endorsement: Compilers such as Ibn Abī Dāwūd and al-Suyūṭī recorded anomalous and weak narrations with their chains so critics could inspect and grade them.',
          '02 · Consensus of the Companions: All surviving codices, mass-transmitted (mutawātir) recitations, and ʿĀʾisha’s own transmitted recitation agree on Qurʾān 33:56 without the phrase.'
        ],
        ['al-Suyūṭī, al-Itqān 3/82', 'Ibn Abī Dāwūd, al-Maṣāḥif 238', 'Abū ʿUbayd, Faḍāʾil 1/324'],
        [
          ['Compiler method', 'Record all chains for scrutiny'],
          ['Grading standard', 'Single weak chain ≠ Qurʾān'],
          ['Mutawātir text', 'Unanimous on Q 33:56'],
          ['Scholarly verdict', 'Phrase never entered muṣḥaf']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Aḥzāb', en: 'Indeed, Allah confers blessing upon the Prophet, and His angels ask Him to do so.', ref: '33:56' }
        ]
      ),
      trap(
        'The report says before ʿUthmān changed the maṣāḥif—doesn’t that admit textual tampering?',
        'Notice the phrase “before ʿUthmān changed (ghayyara) the maṣāḥif”—that proves ʿUthmān deleted verses from earlier copies!',
        'Expose the weak gloss & ʿUthmānic consensus',
        'Even the wording “changed (ghayyara) the maṣāḥif” reflects the weak narrator’s own framing, and historically ʿUthmān’s standardization unified codices onto the single Qurayshī recension already compiled under Abū Bakr with full Companion consensus—not inventing or deleting revelation.',
        'Weak gloss vs historical standardization',
        [
          '01 · Unreliable narrator wording: Because the chain through Ḥumayda’s elderly father is weak, its editorial gloss “before ʿUthmān changed” carries no historical weight against mutawātir testimony.',
          '02 · Two distinct texts confirmed: The ḥadīth in Ṣaḥīḥ Ibn Ḥibbān 2163–2164 independently proves the “first rows” clause is prophetic Sunna, explaining the confusion without positing any Qurʾānic omission.'
        ],
        ['Ṣaḥīḥ Ibn Ḥibbān 2163–2164', 'al-Suyūṭī, al-Itqān 3/82'],
        [
          ['Arabic verb', 'Ghayyara in a weak narration'],
          ['Historical fact', 'Unified agreed Qurayshī text'],
          ['Independent proof', 'Ibn Ḥibbān 2163–2164 (ḥadīth)'],
          ['Root cause', 'Conflation of similar openings']
        ],
        [
          { by: 'Prophet Muḥammad ﷺ (via ʿĀʾisha)', en: 'Allah and His angels send blessings on the first rows.', ref: 'Ṣaḥīḥ Ibn Ḥibbān 2163–2164' }
        ]
      )
    ]
  });

  /* 6. islam/quran/science-errors/bees-eat-fruit-16-69 */
  up('islam/quran/science-errors/bees-eat-fruit-16-69', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Apiculture confirms fruit-feeding: Non-Muslim beekeeping authorities (such as honeybeesuite.com and buzzbeekeepingsupplies.com) document that honey bees feed on ripe fruits—including plums, peaches, grapes, apples, figs, and pears—especially when nectar is scarce.',
      '02 · Piercing overripe fruit: Drawn by fermentation and sweet aromas, bees actively target and feed on the juices of split or overripe fruit.',
      '03 · Broad Arabic sense of kul: In Qurʾānic Arabic, the verb akala / kul (“eat”) regularly covers consuming sustenance broadly, including liquids and nourishment, as seen in 2:168, 5:88, 16:114, and 20:81.'
    ],
    next: [
      trap(
        'Bees only sip fruit juice when nectar is rare or skin is split—they don’t normally eat fruit!',
        'Apiculturists note honey bees cannot easily chew solid fruit skin—they mostly drink leaking juice when wasps open it or when nectar is rare.',
        'Confirm fruit-feeding & pierce behaviour',
        'That still confirms the Qurʾān’s accuracy: bees do consume juices from ripe and overripe fruits (grapes, figs, plums, peaches, pears, apples), and the verb kul in Arabic encompasses taking nourishment from fruits—whether solid or liquid.',
        'Ripe fruit consumption in beekeeping',
        [
          '01 · Direct feeding on fruit: Beekeeping guides explicitly explain that honey bees target overripe fruit and can pierce softened skins themselves or exploit small openings to extract fruit sugars.',
          '02 · Natural synergy with nectar: Saying “eat from all the fruits” captures the bee’s foraging across blossoms, fruit-bearing trees, and ripe fruit juices alike without restricting diet to a single source.'
        ],
        ['Qurʾān 16:69', 'honeybeesuite.com (“Do honey bees eat fruit?”)', 'buzzbeekeepingsupplies.com'],
        [
          ['Fruits documented', 'Plums, peaches, grapes, figs'],
          ['Trigger condition', 'Especially during nectar dearth'],
          ['Mechanism', 'Scent-drawn to overripe fruit'],
          ['Arabic verb', 'Kul = take nourishment broadly']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Naḥl', en: 'Then eat from all the fruits and follow the ways of your Lord laid down for you.', ref: '16:69' }
        ]
      ),
      trap(
        'Why not simply say “drink nectar from flowers” instead of “eat from all the fruits”?',
        'Why didn’t the Qurʾān just say “drink nectar from flowers” if it wanted to be scientifically precise?',
        'Show Qurʾānic kul parallels & 16.68 context',
        'In Qurʾānic Arabic, thamarāt (“fruits” or produce) refers broadly to plant yields including blossoms and fruits, and kul covers all forms of feeding. Restricting the command solely to “flowers” would actually exclude tree saps, honeydew, and ripe fruit juices that bees genuinely consume.',
        'Semantic scope of kul and thamarāt',
        [
          '01 · Qurʾānic parallels for kul: Verses such as 2:168 (“eat from what is on earth, lawful and good”), 5:88, 16:114, and 20:81 prove kul regularly denotes partaking of all sustenance, food and drink alike.',
          '02 · Preceding verse context: Qurʾān 16:68 mentions bees building hives in mountains, trees, and human trellises, naturally leading into 16:69’s inclusive command to draw sustenance from all fruits and yields.'
        ],
        ['Qurʾān 16:68–69', 'Qurʾān 2:168; 5:88; 16:114; 20:81'],
        [
          ['Q 2.168 & 5.88', 'Kul covers all lawful sustenance'],
          ['Q 16.114 & 20.81', 'Same general usage of “eat”'],
          ['Q 16.68 link', 'Hives in mountains, trees, trellises'],
          ['Accuracy', 'Covers both nectar & fruit juices']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Baqara', en: 'Eat from whatever is on earth that is lawful and good.', ref: '2:168' }
        ]
      )
    ]
  });

  /* 7. islam/quran/science-errors/water-stores-15-22 */
  up('islam/quran/science-errors/water-stores-15-22', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Al-Rāzī on atmospheric rain: In Mafātīḥ al-Ghayb (19/181), Fakhr al-Dīn al-Rāzī explains that “you are not its storers” refers to the water sent down from the sky—humans cannot store or hold rain in the clouds.',
      '02 · Ibn Kathīr on natural reservoirs: Ibn Kathīr explains on 15:22 that Allah sends rain down and preserves it underground in springs, wells, and rivers so it stays fresh year-round for crops and livestock.',
      '03 · Dependence on divine preservation: Even modern dams only catch a fraction of surface runoff; if Allah willed to sink groundwater away or withhold rain (cf. 67:30), human engineering could not manufacture or preserve the water cycle.'
    ],
    next: [
      trap(
        'Humans seed clouds and build dams today—so we do store and control rainwater!',
        'Even if it meant clouds, humans today seed clouds and build massive dams—we literally store rainwater now.',
        'Contrast dams with global hydrology',
        'Cloud seeding merely nudges existing moisture droplets to coalesce; humans cannot generate, store, or sustain global atmospheric water or underground aquifers. Dams temporarily hold local runoff only so long as rainfall and natural springs replenish them.',
        'Atmospheric water cycle vs local dams',
        [
          '01 · Atmospheric scale vs dams: The global hydrological cycle evaporates, suspends, and distributes vast volumes of water; human reservoirs hold a tiny fraction of what falls after Allah sends it down.',
          '02 · Vulnerability of aquifers: Ibn Kathīr notes that Allah keeps terrestrial water fresh in springs and rivers—without natural percolation and replenishment, stagnant dam water alone could never sustain life.'
        ],
        ['Qurʾān 15:22', 'al-Rāzī, Mafātīḥ al-Ghayb 19/181', 'Ibn Kathīr on 15:22'],
        [
          ['Al-Rāzī 19/181', 'Cannot store rain in the sky'],
          ['Ibn Kathīr (15:22)', 'Springs & wells kept fresh'],
          ['Cloud seeding', 'Nudges moisture; creates none'],
          ['Global scale', 'Dams depend on rainfall cycle']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Ḥijr', en: 'And We sent down water from the sky and gave you to drink from it, and you are not its storers.', ref: '15:22' }
        ]
      ),
      trap(
        'Khāzinīn means keepers or storers—isn’t the verse plainly denying human storage?',
        'The Arabic word khāzinīn simply means “treasurers” or “keepers”—it denies human storage altogether.',
        'Read Q 15.21–22 together & cite Q 67.30',
        'Look at the immediate context in 15:21–22: “There is not a thing but that with Us are its storehouses (khazāʾinuhu)… and you are not its storers (khāzinīn).” The verse contrasts Allah’s infinite treasuries of rain and provision with humanity’s total dependence on Him to send and renew it.',
        'Khazāʾin (Allah’s treasuries) vs khāzinīn',
        [
          '01 · Link to preceding verse (15.21): Reading 15:22 right after 15:21 shows khāzinīn echoes Allah’s khazāʾin (“storehouses”)—meaning humans do not own or control the cosmic reserves of rain.',
          '02 · Qurʾān 67.30 reinforcement: Elsewhere the Qurʾān challenges skeptics: “If your water were to sink into the earth, who could bring you flowing water?”—confirming the point is ultimate dependency, not denying cisterns or dams.'
        ],
        ['Qurʾān 15:21–22', 'Qurʾān 67:30', 'Ibn Kathīr on 15:22'],
        [
          ['Q 15.21 anchor', 'With Us are its storehouses (khazāʾin)'],
          ['Q 15.22 contrast', 'Humans are not its khāzinīn'],
          ['Q 67.30 parallel', 'Who brings water if it sinks?'],
          ['Core theme', 'Sovereignty over water cycle']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Mulk', en: 'Say: Have you considered—if your water was to become sunken, then who could bring you flowing water?', ref: '67:30' }
        ]
      )
    ]
  });

  /* 8. islam/quran/science-errors/ladder-to-heaven-6-35 */
  up('islam/quran/science-errors/ladder-to-heaven-6-35', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Rhetorical consolation (Ibn ʿĀshūr): As Ibn ʿĀshūr explains, Qurʾān 6:35 consoles the Prophet ﷺ in his intense grief over the Meccans’ stubborn rejection—it is not making a scientific claim about engineering ladders.',
      '02 · Imagery of extreme effort: Digging a tunnel (nafaq) deep into the earth or ascending a ladder (sullam) into the sky are vivid Arabic idioms for going to impossible lengths to satisfy demanders of signs.',
      '03 · Limits of human persuasion: The verse concludes that guidance rests with Allah’s will (“had Allah willed, He would have gathered them upon guidance”), urging the Prophet ﷺ toward patience and warning “so do not be among the ignorant.”'
    ],
    next: [
      trap(
        'It treats reaching the sky as impossible—yet rockets go into space today!',
        'Still, the text assumes going up into the sky by a ladder is impossible—today rockets and space elevators show reaching the sky is achievable.',
        'Point to the Prophet’s grief & Q 6.111',
        'The conditional (“if you are able to seek…”) addresses Muḥammad ﷺ personally as a human warner in 7th-century Mecca to underscore that no physical feat of his could force faith into hardened hearts. Even with rockets today, a physical ascent does not compel spiritual belief.',
        'Personal consolation in Mecca vs spaceflight',
        [
          '01 · Addressed to the Prophet’s ﷺ grief: Notice the opening clause—“And if their evasion is hard on you”—which frames the entire sentence around emotional consolation, not cosmology.',
          '02 · Confirmed in Q 6.109–111: In the same sūra, Allah states that even if angels descended or the dead spoke to them, obstinate disbelievers still would not believe unless Allah willed.'
        ],
        ['Qurʾān 6:35', 'Qurʾān 6:109–111', 'Ibn ʿĀshūr on 6:35'],
        [
          ['Opening clause', 'If their evasion is hard on you'],
          ['Parallel (Q 6.111)', 'Even angels wouldn’t convince them'],
          ['Addressee', 'Prophet ﷺ personally in Mecca'],
          ['Genre', 'Consolation & call to patience']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Anʿām', en: 'Even if We had sent down to them the angels and the dead spoke to them… they would not believe.', ref: '6:111' }
        ]
      ),
      trap(
        'A ladder to the sky implies the sky was imagined as a nearby solid roof!',
        'Why compare preaching to digging a tunnel or climbing a ladder—doesn’t that sound like the author thought the sky was a solid ceiling nearby?',
        'Explain Arabic merism & hyperbole',
        'Arabic uses sullam (“means of ascent” or “ladder”) figuratively for any towering climb just as English speaks of “climbing to the heavens” or “digging to the ends of the earth.” Metaphors of vertical height and subterranean depth express hyperbole, not solid-dome cosmology.',
        'Merism of depth and height in rhetoric',
        [
          '01 · Paired hyperbole (earth & sky): Pairing “a tunnel into the earth” with “a ladder into the sky” forms a standard merism—extreme depth paired with extreme height—to mean “search high and low anywhere.”',
          '02 · Ibn ʿĀshūr’s rhetorical reading: Classical exegetes uniformly treat nafaq and sullam here as illustrative hyperbole highlighting the futility of chasing endless demands for miracles.'
        ],
        ['Qurʾān 6:35', 'Ibn ʿĀshūr on 6:35', 'Genesis 28:12'],
        [
          ['Literary pair', 'Tunnel (depth) + ladder (height)'],
          ['Rhetorical figure', 'Merism / hyperbole for effort'],
          ['Biblical parallel', 'Jacob’s ladder imagery (Gen 28:12)'],
          ['Reading', 'Figurative, not solid-dome physics']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Anʿām', en: 'Had Allah willed, He would have gathered them upon guidance, so never be among the ignorant.', ref: '6:35' }
        ]
      )
    ]
  });

  /* 9. islam/quran/d-ia-quranic-language/adam-names-2-31 */
  up('islam/quran/d-ia-quranic-language/adam-names-2-31', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · What Bukhārī 7410 actually states: In Tafsīr al-Ṭabarī on 2:31, al-Bukhārī is cited solely for the famous intercession ḥadīth (Bukhārī 7410), which states only that Allah taught Ādam “the names of all things”—with zero mention of breaking wind.',
      '02 · Weak chains for the crude gloss: As documented in the critical edition of Tafsīr al-Ṭabarī (2:31, editor’s footnotes 4 and 9), two chains carrying that crude detail pass through Saʿīd ibn Maʿbad from Ibn ʿAbbās, and Saʿīd is unknown (majhūl).',
      '03 · Broken third chain: The third narration carrying that wording runs through ʿĀṣim ibn Kulayb, who never met Ibn ʿAbbās (broken chain / munqaṭiʿ), rendering all three reports inadmissible.'
    ],
    next: [
      trap(
        'Why did al-Ṭabarī include them if early Muslims didn’t believe it?',
        'Even if those reports are weak, why did al-Ṭabarī include them in his tafsīr unless early Muslims believed Allah taught Ādam vulgar words?',
        'Explain al-Ṭabarī’s chain-first method',
        'Al-Ṭabarī’s stated methodology in his Tafsīr is to record every transmitted report along with its complete isnād so trained scholars can verify or reject each chain themselves. Including a weak narration with an unknown or disconnected link is archival transparency, not endorsement.',
        'Al-Ṭabarī’s archival methodology vs ṣaḥīḥ status',
        [
          '01 · Chain-first historiography: Unlike books restricted to ṣaḥīḥ reports, al-Ṭabarī deliberately preserved weak and conflicting reports from predecessors while supplying the chains that expose their defects.',
          '02 · Verified by editor’s notes: Critical verification in the edited Tafsīr al-Ṭabarī (2:31, nn. 4 & 9) explicitly flags Saʿīd ibn Maʿbad as majhūl and ʿĀṣim ibn Kulayb as disconnected from Ibn ʿAbbās.'
        ],
        ['Tafsīr al-Ṭabarī 2:31 (nn. 4 & 9)', 'Qurʾān 2:31'],
        [
          ['Al-Ṭabarī method', 'Records all isnāds for inspection'],
          ['Saʿīd ibn Maʿbad', 'Unknown narrator (majhūl)'],
          ['ʿĀṣim ibn Kulayb', 'Never met Ibn ʿAbbās (broken)'],
          ['Authentic text', 'Only Bukhārī 7410 (“all things”)']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Baqara', en: 'And He taught Ādam the names—all of them.', ref: '2:31' }
        ]
      ),
      trap(
        '“The names of all things” in Bukhārī 7410 still logically covers every word, including bodily functions!',
        'Still, “all the names” literally includes every phenomenon in existence, so even Bukhārī 7410 entails words for bodily functions.',
        'Explain linguistic capacity & Q 2.31–33',
        'Knowing the names of created things—or the capacity for language and naming—means Ādam was endowed with comprehensive linguistic faculty to identify creation, which the Qurʾān immediately illustrates in 2:33 with noble creation, not crude anecdotes. Confusing human linguistic capacity with a caricature of Allah drilling a specific vulgar word misses the verse’s point.',
        'Human linguistic faculty vs crude caricature',
        [
          '01 · Context of Qurʾān 2.31–33: Allah presented created things before the angels and Ādam named them, demonstrating human intellectual and linguistic stewardship over the earth—the very reason the angels acknowledged his rank.',
          '02 · Misattribution refuted: The polemic’s shock value depends on falsely claiming al-Bukhārī authenticated the vulgar wording, whereas Bukhārī 7410 contains only dignified praise of Ādam’s honoured status.'
        ],
        ['Qurʾān 2:31–33', 'Bukhārī 7410'],
        [
          ['Q 2.31–33 point', 'Human intellect & stewardship'],
          ['Angels’ reaction', 'Acknowledged Ādam’s rank'],
          ['Bukhārī 7410', 'Intercession ḥadīth; no crude word'],
          ['Polemic flaw', 'Conflates weak gloss with Ṣaḥīḥ']
        ],
        [
          { by: 'Ṣaḥīḥ al-Bukhārī (Intercession)', en: 'Allah created you with His hand and taught you the names of all things.', ref: 'Bukhārī 7410' }
        ]
      )
    ]
  });

  /* 10. islam/morality/marriage/ahl-al-kitab-marriage-2-221-5-5 */
  up('islam/morality/marriage/ahl-al-kitab-marriage-2-221-5-5', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · General baseline in Q 2.221: Qurʾān 2:221 establishes the general rule prohibiting marriage with polytheists (mushrikāt / mushrikīn) until they believe.',
      '02 · Late explicit exception in Q 5.5: Sūrat al-Māʾida is among the very last revealed chapters, and 5:5 signals a legislative update—“This day (al-yawm) are made lawful to you… the chaste women of those given the Book before you.”',
      '03 · Classical fiqh (ʿāmm and khāṣṣ): In Islamic legal theory (uṣūl al-fiqh), a later specific ruling (khāṣṣ) carves out a clear exception from an earlier general prohibition (ʿāmm); “This day” proves it was not lawful previously, eliminating any contradiction.'
    ],
    next: [
      trap(
        'The Qurʾān calls Christians and Jews mushrikūn in 9:30–31—so 5:5 still contradicts 2:221!',
        'Wait—the Qurʾān itself calls Christians and Jews polytheists in verses like 9:30–31, so 5:5 still contradicts 2:221 by letting Muslims marry polytheists!',
        'Distinguish Ahl al-Kitāb & mushrikūn in Q 98.1',
        'Qurʾānic terminology consistently distinguishes between Ahl al-Kitāb (People of the Book) and pagan mushrikūn across legal and social rulings, even when rebuking specific polytheistic beliefs among some Jews and Christians (9:30–31; 98:1). Because 5:5 explicitly names “those given the Book,” it unambiguously specifies them as a distinct lawful category.',
        'Qurʾānic legal taxonomy of Ahl al-Kitāb',
        [
          '01 · Consistent legal distinction: Verses like 98:1 (“those who disbelieved among the People of the Scripture and the polytheists”) treat the two as distinct groups in Qurʾānic legal taxonomy.',
          '02 · Specific text overrides ambiguity: Even if someone argues People of the Book share elements of shirk in creed, 5:5 expressly names and permits chaste women of the People of the Book—making the permission undeniable.'
        ],
        ['Qurʾān 2:221; 5:5; 98:1', 'Qurʾān 9:30–31'],
        [
          ['Q 98.1 taxonomy', 'People of the Book & mushrikūn'],
          ['Q 5.5 naming', 'Explicitly names Ahl al-Kitāb'],
          ['Uṣūl rule', 'Explicit specification (takhṣīṣ)'],
          ['Scope', 'Chaste women only']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Bayyina', en: 'Those who disbelieved among the People of the Scripture and the polytheists.', ref: '98:1' }
        ]
      ),
      trap(
        'Why would an unchanging God forbid it in 2:221 and later permit it in 5:5?',
        'If God is all-knowing and unchanging, why ban something in 2:221 and then allow it later in 5:5?',
        'Explain staged legislation & biblical parallels',
        'Gradual, staged legislation reflects changing communal circumstances, not divine ignorance. Once the Muslim community was firmly established late in Medina—when Sūrat al-Māʾida was revealed—intermarriage with chaste Jewish and Christian women became safe and lawful without compromising Muslim households.',
        'Wisdom of staged law in Qurʾān & Bible',
        [
          '01 · Wisdom of staged rulings: Just as Qurʾān 5:5 marks “This day” for dietary and marital permissions, gradual legislation tailored rules to the community’s spiritual maturity and social stability.',
          '02 · Biblical parallel of phased law: In the Bible, dietary and marriage regulations likewise shift between Noah, Moses, and the New Testament era without implying God changed His mind.'
        ],
        ['Qurʾān 2:221; 5:5', 'Genesis 9:3; Leviticus 11; Acts 10:15'],
        [
          ['Chronology', 'Sūra 5 revealed late in Medina'],
          ['Textual marker', '“This day (al-yawm)”'],
          ['Reason for phasing', 'Community maturity & stability'],
          ['Biblical parallel', 'Phased dietary/covenant laws']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Baqara', en: 'And do not marry polytheistic women until they believe.', ref: '2:221' }
        ]
      )
    ]
  });

  /* 11. islam/creed/faith/seeking-forgiveness-4-64 */
  up('islam/creed/faith/seeking-forgiveness-4-64', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Context of Q 4.60–64: As Mujāhid and al-Ṭabarī explain, 4:60–64 addresses hypocrites during the Prophet’s ﷺ lifetime who took their disputes to Kaʿb ibn al-Ashraf (the ṭāghūt) instead of the Prophet ﷺ; had they come to him repentant and he sought forgiveness for them, Allah would have forgiven them.',
      '02 · Limited to his lifetime: Al-Saʿdī emphasizes on 4:64 that the verse’s clear historical context restricts coming to the Prophet ﷺ for supplication to his earthly lifetime—not after his death.',
      '03 · Flaws in the grave anecdote: The famous Bedouin story cited by al-Qurṭubī has no sound prophetic chain: the version attributed to ʿAlī is mursal (disconnected), Ibn ʿAbd al-Barr (Bahjat al-Majālis 3/275) omits any voice from the grave, Ibn Kathīr’s version via al-ʿUtbī is a dream, and al-Nawawī’s mention (al-Majmūʿ 8/217) lacks an established isnād.'
    ],
    quotes: [
      { by: 'Qurʾān — Sūrat al-Nisāʾ', en: 'If, when they wronged themselves, they had come to you and asked forgiveness… they would have found Allah Accepting of repentance.', ref: '4:64' }
    ],
    next: [
      trap(
        'Al-Nawawī and al-Qurṭubī narrated the Bedouin story—so why reject it?',
        'But great Sunni jurists like al-Nawawī and al-Qurṭubī quoted the Bedouin’s story at the Prophet’s grave—are you saying they endorsed shirk?',
        'Show why dream & mursal reports aren’t proof',
        'Respecting classical jurists does not turn a dream report or a mursal narration into binding proof. In Islamic jurisprudence, matters of worship and seeking forgiveness are established by Qurʾān and authentic Sunna—never by unverified stories, dreams, or weak chains.',
        'Jurists’ citations vs authentic legal proof',
        [
          '01 · Why the story fails ḥadīth standards: A dream (al-ʿUtbī) cannot legislate worship, a mursal report lacks its link to the Companion, and Ibn ʿAbd al-Barr’s version does not even contain the claimed miracle from the grave.',
          '02 · Companions’ actual practice: None of the Rightly Guided Caliphs or Companions ever stood at the Prophet’s ﷺ grave reciting 4:64 to ask him for intercession after his passing.'
        ],
        ['Ibn ʿAbd al-Barr, Bahjat al-Majālis 3/275', 'al-Nawawī, al-Majmūʿ 8/217', 'Tafsīr Ibn Kathīr on 4:64'],
        [
          ['ʿAlī version', 'Mursal (disconnected chain)'],
          ['al-ʿUtbī / Ibn Kathīr', 'Dream report, not legal proof'],
          ['Bahjat al-Majālis 3/275', 'No voice from the grave'],
          ['Companion practice', 'Never sought at the grave']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Nisāʾ', en: 'Have you not seen those who claim to have believed… they wish to refer legislation to ṭāghūt.', ref: '4:60' }
        ]
      ),
      trap(
        'Verse 4:64 itself sets no time limit on coming to the Prophet for forgiveness!',
        'Forget the Bedouin story—verse 4:64 itself commands sinners to come to the Prophet and have him ask forgiveness, without setting an expiry date!',
        'Anchor Q 4.64 in Q 4.61 & Q 2.186',
        'Look at the verb tense and context of 4:60–64: “when they wronged themselves, had they come to you (idhā ẓalamū… jāʾūka)” refers directly to living hypocrites who refused the Prophet’s ﷺ judgement in 4:61. Moreover, Allah commands direct supplication without intermediaries (2:186).',
        'Contextual scope of Q 4.60–64 & direct duʿāʾ',
        [
          '01 · Direct connection to 4.61: Verse 4:61 states “When it is said to them, Come to what Allah has revealed and to the Messenger, you see the hypocrites turning away,” proving 4:64 is about those same contemporaries.',
          '02 · Direct forgiveness in Q 2.186: When servants ask about Allah, He answers “I am near; I respond to the invocation of the supplicant when he calls upon Me”—requiring no intermediary at a grave.'
        ],
        ['Qurʾān 4:60–64', 'Qurʾān 2:186', 'al-Saʿdī on 4:64'],
        [
          ['Q 4.61 link', 'Hypocrites turning away in life'],
          ['Grammar', 'Conditional past (jāʾūka)'],
          ['al-Saʿdī', 'Restricted to his lifetime'],
          ['Q 2.186', 'Allah responds directly']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Baqara', en: 'When My servants ask you concerning Me—indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.', ref: '2:186' }
        ]
      )
    ]
  });

  /* 12. islam/quran/d-ia-quranic-language/asa-perhaps */
  up('islam/quran/d-ia-quranic-language/asa-perhaps', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Al-Baghawī on Q 4.99: Classical exegete al-Baghawī explains on 4:99 that ʿasā from Allah means He will certainly pardon them—for when Allah gives hope, He fulfils His promise.',
      '02 · Consensus of al-Qurṭubī and al-Ṭabarī: On Qurʾān 9:18, al-Qurṭubī declares “ʿasā from Allah is an obligation (wājib),” and al-Ṭabarī states plainly: “Every ʿasā in the Qurʾān is binding.”',
      '03 · Consistent Qurʾānic pattern: The exact same idiom appears in Qurʾān 17:79 (promising the Prophet ﷺ the Praised Station) and 9:102 (accepting repentance)—proving ʿasā expresses certainty from Allah while instilling humility and hope in believers.'
    ],
    next: [
      trap(
        'In normal Arabic, ʿasā expresses doubt—saying it means certainty from Allah is an ad hoc rescue!',
        'That sounds like an ad hoc theological rescue—in normal Arabic dictionaries, ʿasā always means “maybe” or “hopefully,” expressing uncertainty.',
        'Explain royal Arabic tarajjī & Q 17.79',
        'Every language has speaker-dependent idioms: when a sovereign king tells a subject “perhaps I will reward you,” it expresses gracious assurance without binding himself to a peer, while preserving the recipient’s humility. Classical Arabic grammarians and lexicographers documented this exact usage in royal speech and poetry.',
        'Sovereign tarajjī in Arabic rhetoric',
        [
          '01 · Sovereign dignity (tarajjī): In Arabic rhetoric, ʿasā used by a ruler conveys a gracious promise couched in hope so the servant neither presumes entitlement nor loses hope.',
          '02 · Verified by Q 17.79: Nobody in Islam claims Allah is “unsure” whether He will honour Muḥammad ﷺ in 17:79 (“perhaps your Lord will raise you to a praised station”); it is an undisputed divine promise.'
        ],
        ['Qurʾān 4:99; 9:18; 17:79', 'al-Ṭabarī on 9:18', 'al-Qurṭubī on 9:18'],
        [
          ['Rhetorical term', 'Tarajjī (sovereign promise)'],
          ['Q 17.79 proof', 'Promise of al-Maqām al-Maḥmūd'],
          ['Royal speech', 'Conveys gracious assurance'],
          ['Moral effect', 'Prevents complacency in servants']
        ],
        [
          { by: 'Al-Baghawī', en: 'ʿAsā from Allah is a firm promise, for when Allah gives hope He fulfils it.', ref: 'Tafsīr al-Baghawī on 4:99' }
        ]
      ),
      trap(
        'If every ʿasā is binding, does it guarantee forgiveness unconditionally?',
        'Wait—if ʿasā is always binding, doesn’t that mean everyone in 4:99 or 9:102 gets automatic salvation regardless of what they do?',
        'Show the verse conditions in 4.99 & 9.18',
        'The binding promise applies strictly to the people described in each verse’s conditions—such as the truly helpless excused in 4:99 or those who sincerely repent and mix righteous deeds in 9:102. It guarantees Allah’s fulfilment for those who meet the description, not unconditional immunity.',
        'Conditional certainty vs presumption',
        [
          '01 · Conditioned on sincerity: In 9:18, ʿasā follows faith in Allah, establishing prayer, paying zakāh, and fearing none but Allah; the assurance belongs to those who fulfil those traits.',
          '02 · Balance of fear and hope: Using ʿasā keeps believers from taking Allah’s mercy for granted while reassuring sincere repenters that Allah never breaks His promise.'
        ],
        ['Qurʾān 4:98–99; 9:18; 9:102', 'al-Ṭabarī on 9:18'],
        [
          ['Q 4.98–99', 'Applies to genuinely helpless'],
          ['Q 9.18', 'Tied to faith, prayer & zakāh'],
          ['Q 9.102', 'Tied to sincere confession'],
          ['Result', 'Hope without presumption']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Tawba', en: 'Perhaps those will be of the guided.', ref: '9:18' }
        ]
      )
    ]
  });

  /* 13. islam/quran/d-ia-quranic-language/or-37-147 */
  up('islam/quran/d-ia-quranic-language/or-37-147', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Kūfan reading (aw as bal): Kūfan Arabic grammarians explain that aw (“or”) in 37:147 carries the established sense of bal (“rather” / “nay, even”)—meaning Yūnus was sent to a hundred thousand, rather more—a usage attested in classical Arabic poetry.',
      '02 · Baṣran reading (observer’s perspective): As Tafsīr Ṭanṭāwī summarizes on 37:147, Baṣran scholars explain the phrase as describing how the crowd would appear to a human onlooker: anyone seeing them would estimate “a hundred thousand or more.”',
      '03 · Parallel usage in Q 6.145: Qurʾān 6:145 uses aw to list prohibited foods that are all forbidden without doubt, just as English uses “or” inclusively in “everyone, tall or short, is welcome.”'
    ],
    next: [
      trap(
        'Speaking from an observer’s perspective still sounds like guesswork instead of stating an exact number!',
        'Saying “as it would appear to an observer” still means God adopted human guesswork instead of just stating the exact population.',
        'Show scale expression & biblical parallels',
        'Scripture regularly communicates scale in human-relatable approximations to convey awe and magnitude rather than census spreadsheets. Saying “over a hundred thousand” tells the reader the mission reached an enormous city without pretending to publish a statistical tally.',
        'Conveying magnitude in scriptural style',
        [
          '01 · Purpose is scale, not census: In the story of Yūnus, the point is that an entire vast metropolis believed and was spared—expressed naturally as “a hundred thousand or more.”',
          '02 · Identical biblical approximations: The Bible routinely uses round estimates like “about five thousand men” (Matt 14:21) or “about three thousand souls” (Acts 2:41) without anyone accusing its Author of ignorance.'
        ],
        ['Qurʾān 37:147', 'Tafsīr Ṭanṭāwī on 37:147', 'Matthew 14:21; Acts 2:41'],
        [
          ['Communicative goal', 'Convey vast scale of Nineveh'],
          ['Baṣran insight', 'Human-relatable phrasing'],
          ['Biblical parallel', 'About 5,000 (Matt 14:21)'],
          ['Meaning', 'Certainly ≥ 100,000']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Ṣāffāt', en: 'And We sent him to a hundred thousand or more, and they believed, so We gave them enjoyment for a time.', ref: '37:147–148' }
        ]
      ),
      trap(
        'Turning aw into bal (“rather”) just rewrites the Arabic dictionary!',
        'Claiming aw means bal (“rather”) is just rewriting the dictionary—normally aw means “or” because the speaker doesn’t know.',
        'Cite classical poetry & Q 6.145 proof',
        'Major Arabic lexicons and pre-Islamic poetic authorities explicitly list bal (“rather / even”) as an established classical function of aw—often termed aw lil-iḍrāb (digressive amplification). Far from an invention, it is standard Arabic syntax.',
        'Aw lil-iḍrāb in classical Arabic poetry',
        [
          '01 · Attested in classical Arabic poetry: As Tafsīr Ṭanṭāwī notes, aw carrying the sense of bal is attested in classical Arabic poetry well before later grammatical debates.',
          '02 · Qurʾānic confirmation in 6.145: Even apart from bal, 6:145 proves aw in the Qurʾān does not signify speaker uncertainty, since all listed items are decisively ruled unlawful.'
        ],
        ['Qurʾān 37:147; 6:145', 'Tafsīr Ṭanṭāwī on 37:147'],
        [
          ['Grammatical term', 'Aw lil-iḍrāb (= bal)'],
          ['Evidence base', 'Classical Arabic poetry'],
          ['Kūfan school', 'Standard classical syntax'],
          ['Q 6.145 check', 'Aw used without any doubt']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Anʿām', en: 'Unless it be dead animal or poured-out blood or the flesh of swine—for indeed, it is impure.', ref: '6:145' }
        ]
      )
    ]
  });

  /* 14. islam/creed/attributes/semen-and-the-throne-report */
  up('islam/creed/attributes/semen-and-the-throne-report', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Not a prophetic ḥadīth (mawqūf): The narration cited from al-Qurṭubī, al-Ṭabarānī, and al-Ḥākim stops at the Companion Ibn Masʿūd—not the Prophet ﷺ—and passes through Abū al-Zaʿrāʾ.',
      '02 · Discredited narrator Abū al-Zaʿrāʾ: Major ḥadīth critics rejected him: al-Bukhārī noted his ḥadīth is not followed, Ibn Ḥazm judged him not strong, Abū Ḥātim equated him to an unknown (not proof), al-Nasāʾī knew only Salama ibn Kuhayl narrating from him, and Ibn ʿAdī doubted he even heard from Ibn Masʿūd.',
      '03 · Al-Dhahabī refutes al-Ḥākim: In his Talkhīṣ, al-Dhahabī expressly overturns al-Ḥākim’s claim that the report meets al-Bukhārī’s and Muslim’s standards, noting neither compiler ever narrated from Abū al-Zaʿrāʾ; meanwhile, the second chain via Muḥammad ibn Kaʿb relies on an unnamed “man” from Abū Hurayra (very weak), whereas authentic Abū Hurayra reports omit the semen detail.'
    ],
    quotes: [
      { by: 'Al-Dhahabī (rebutting al-Ḥākim)', en: 'Neither al-Bukhārī nor Muslim ever narrated from Abū al-Zaʿrāʾ.', ref: 'Talkhīṣ al-Mustadrak' }
    ],
    next: [
      trap(
        'Three major scholars narrated it—aren’t you cherry-picking by rejecting it?',
        'If three major scholars—al-Qurṭubī, al-Ṭabarānī, and al-Ḥākim—included this report, isn’t it cherry-picking to throw it out now?',
        'Explain al-Mustadrak & Talkhīṣ filtering',
        'Not at all: classical compilers deliberately recorded weak or mawqūf reports with their full isnāds, and al-Ḥākim’s al-Mustadrak is famous among scholars for lenient grading that al-Dhahabī systematically corrected in his Talkhīṣ. Rejecting an exposed weak chain is textbook ḥadīth science, not cherry-picking.',
        'Why al-Dhahabī’s Talkhīṣ corrects al-Ḥākim',
        [
          '01 · Al-Mustadrak’s known leniency: Scholars of ḥadīth universally rely on al-Dhahabī’s Talkhīṣ to filter al-Ḥākim’s grading errors—here, al-Ḥākim slipped by claiming Bukhārī/Muslim criteria when Abū al-Zaʿrāʾ appears in neither collection.',
          '02 · Unanimous chain defects: Across multiple compilations, both routes collapse independently—one on Abū al-Zaʿrāʾ and a suspected break with Ibn Masʿūd, the other on an anonymous “man” via Muḥammad ibn Kaʿb.'
        ],
        ['al-Ḥākim, al-Mustadrak', 'al-Dhahabī, Talkhīṣ'],
        [
          ['al-Mustadrak note', 'Known for lenient grading'],
          ['al-Dhahabī check', 'Talkhīṣ filters invalid claims'],
          ['Route 1 flaw', 'Abū al-Zaʿrāʾ (rejected by critics)'],
          ['Route 2 flaw', 'Unnamed “man” (mubham)']
        ],
        [
          { by: 'Abū Ḥātim al-Rāzī (on Abū al-Zaʿrāʾ)', en: 'A shaykh whose ḥadīth are not used as proof, like an unknown.', ref: 'Classical rijāl criticism' }
        ]
      ),
      trap(
        'You admitted authentic Abū Hurayra reports mention something similar—what do they say?',
        'Wait—you admit authentic reports from Abū Hurayra mention something similar! What is that authentic report hiding?',
        'Contrast sound reports with weak gloss',
        'Authentic narrations from Abū Hurayra speak of the creation of the embryo and Allah’s decree upon it—entirely omitting the bizarre claim linking semen directly to the Throne. That proves the odd “semen-and-the-Throne” wording was an aberrant element in weak/mawqūf transmissions, not authentic prophetic teaching.',
        'Sound prophetic parallels omit the semen detail',
        [
          '01 · Contrast exposes the interpolation: Comparing the sound prophetic narrations against the weak mawqūf line shows precisely where the unauthentic detail entered.',
          '02 · Creedal protection: Islamic creed is anchored strictly in Qurʾān and authentic mutawātir/ṣaḥīḥ prophetic traditions—never in weak statements stopped at a Companion or containing anonymous links.'
        ],
        ['al-Dhahabī, Talkhīṣ', 'Qurʾān 42:11'],
        [
          ['Authentic parallel', 'Omits the semen/Throne detail'],
          ['Diagnostic value', 'Exposes weak interpolation'],
          ['Creedal rule', 'Weak reports never establish aqīda'],
          ['Standard', 'Qurʾān & verified Sunna']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Shūrā', en: 'There is nothing like unto Him, and He is the Hearing, the Seeing.', ref: '42:11' }
        ]
      )
    ]
  });

  /* 15. islam/morality/war/asma-bint-marwan */
  up('islam/morality/war/asma-bint-marwan', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · First chain via a known liar: One transmission runs through Muḥammad ibn al-Ḥajjāj, whom al-Bukhārī graded abandoned (matrūk), Ibn Maʿīn called “an evil liar,” and al-Dāraquṭnī labeled “a liar”; al-Albānī graded the report fabricated (mawḍūʿ).',
      '02 · Second chain via al-Wāqidī: The alternate route relies on al-Wāqidī, whom Aḥmad ibn Ḥanbal called “a liar who alters ḥadīth,” al-Bukhārī and Abū Ḥātim graded matrūk, and al-Nasāʾī listed among the four best-known forgers.',
      '03 · Contradicts established Prophetic law: Authentic Sunna explicitly forbids killing non-combatant women—upon seeing a slain woman the Prophet ﷺ declared “she was not one who would fight” and commanded Khālid: “Kill no woman and no hired labourer” (Abū Dāwūd 2669)—consistent with his clemency toward Mecca and even the woman who poisoned him.'
    ],
    next: [
      trap(
        'It’s in early sīra works—you can’t dismiss history using strict ḥadīth rules!',
        'It appears in early sīra works—you can’t dismiss every historical account just because ḥadīth scholars dislike its narrator!',
        'Apply universal historical source criticism',
        'When a story’s sole narrators are independently condemned as deliberate forgers who invent and alter reports, dismissing it is basic historical source criticism, not special pleading. Early sīra compilers gathered unvetted reports alongside sound ones; no historian treats known fabricators as reliable eyewitnesses.',
        'Source criticism across ḥadīth & history',
        [
          '01 · Converging verdicts across schools: Critics from across the Muslim world—al-Bukhārī, Aḥmad, Ibn Maʿīn, Abū Ḥātim, al-Nasāʾī, and al-Dāraquṭnī—independently flagged both transmitters as fabricators.',
          '02 · Matn contradicts authentic history: Authentic reports show the Prophet ﷺ endured constant mockery in Mecca and Medina without ever ordering nighttime assassinations of nursing mothers.'
        ],
        ['Abū Dāwūd 2669', 'al-Albānī (mawḍūʿ grading)'],
        [
          ['Historical standard', 'Known forgers ≠ credible source'],
          ['Consensus critics', '6 major imams rejected narrators'],
          ['Sīra method', 'Compiled raw unvetted reports'],
          ['Verdict', 'Both routes fail critically']
        ],
        [
          { by: 'Aḥmad ibn Ḥanbal (on al-Wāqidī)', en: 'He is a liar who alters ḥadīth.', ref: 'Classical rijāl verdict' }
        ]
      ),
      trap(
        'Even if Asmāʾ is fabricated, didn’t the Prophet still order Kaʿb ibn al-Ashraf killed for poetry?',
        'Okay, maybe Asmāʾ bint Marwān is weak—what about other poets like Kaʿb ibn al-Ashraf? Doesn’t that prove the Prophet still killed people for poetry?',
        'Distinguish wartime treason from satire',
        'Kaʿb ibn al-Ashraf was not killed for peaceful satire; he broke the Constitution of Medina, travelled to Mecca after Badr to rally Quraish for renewed war against Medina, and actively conspired against the state. Confusing treasonous wartime mobilization with a nursing mother writing verses ignores the entire historical record.',
        'Wartime treason (Kaʿb) vs non-combatant immunity',
        [
          '01 · Active belligerency vs speech: Kaʿb rode to Mecca to incite an invading army and plotted against the Prophet ﷺ in breach of treaty obligations, making him a combatant leader.',
          '02 · Non-combatant immunity intact: Women who merely opposed or even harmed him personally—including the Jewish woman who poisoned him—were spared; Abū Dāwūd 2669 remains unconditional for non-combatant women.'
        ],
        ['Abū Dāwūd 2669', 'Sīra accounts of Kaʿb ibn al-Ashraf'],
        [
          ['Kaʿb’s crime', 'Treason & inciting Quraish war'],
          ['Treaty status', 'Violated Medina pact'],
          ['Abū Dāwūd 2669', 'Kill no woman / hired labourer'],
          ['Clemency record', 'Pardoned Mecca & poisoner']
        ],
        [
          { by: 'Prophet Muḥammad ﷺ (to Khālid)', en: 'Kill no woman and no hired labourer.', ref: 'Abū Dāwūd 2669' }
        ]
      )
    ]
  });

  /* 16. islam/morality/war/khalid-banu-jadhima */
  up('islam/morality/war/khalid-banu-jadhima', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Misunderstood expression (ṣabaʾnā): In Bukhārī 4339 (8 AH, after Mecca’s conquest and before Ḥunayn), Banū Jadhīma did not say “we became Muslims” but “ṣabaʾnā, ṣabaʾnā”—the polytheists’ term for leaving one’s religion—which Khālid mistook as shifting to another pagan sect or evading surrender.',
      '02 · Companions’ objection and Prophetic disavowal: ʿAbdullāh ibn ʿUmar refused to execute his captive, and upon hearing what happened the Prophet ﷺ raised his hands and declared twice: “O Allah, I disown what Khālid has done.”',
      '03 · Restitution and legal rebuke: Ibn Isḥāq records that the Prophet ﷺ sent restitution (blood money) for the slain, and al-Khaṭṭābī (Aʿlām al-Ḥadīth) notes the Prophet ﷺ rebuked Khālid for acting hastily before verifying their words.'
    ],
    next: [
      trap(
        'If Khālid murdered converts, why wasn’t he executed or dismissed?',
        'If what Khālid did was murder, why didn’t the Prophet execute or fire him? Letting him stay general means he approved it secretly.',
        'Explain diya for mistake vs qiṣāṣ',
        'In Islamic criminal law, acting on a genuine—though culpable—misunderstanding of wartime surrender (taʾwīl/mistake) incurs blood-money restitution (diya), not capital execution (qiṣāṣ) for intentional murder. Raising both hands to publicly disown Khālid’s deed before Allah and paying full compensation proves total disapproval, not secret approval.',
        'Mistaken killing (diya) & public disavowal',
        [
          '01 · Diya vs qiṣāṣ in Islamic law: Mistaken killing without proven malicious intent against known Muslims requires financial blood-money compensation—which the Prophet ﷺ promptly paid in full (Ibn Isḥāq).',
          '02 · Public accountability: Disowning a famous commander’s action before the community and Allah leaves zero ambiguity in Islamic law: haste before verifying faith is condemned.'
        ],
        ['Bukhārī 4339', 'al-Khaṭṭābī, Aʿlām al-Ḥadīth', 'Ibn Isḥāq (blood money)'],
        [
          ['Legal category', 'Mistaken killing (taʾwīl) → diya'],
          ['Penalty applied', 'Full blood money paid'],
          ['Public rebuke', 'Disowned twice with raised hands'],
          ['Ibn ʿUmar stance', 'Refused to execute his captive']
        ],
        [
          { by: 'Prophet Muḥammad ﷺ', en: 'O Allah, I disown what Khālid has done.', ref: 'Bukhārī 4339' }
        ]
      ),
      trap(
        'Doesn’t Bukhārī 4339 still embarrass Islam by showing a top Companion slaughtering prisoners?',
        'Why would Muslims even cite Bukhārī 4339 if it shows one of your top Companions slaughtering prisoners?',
        'Highlight Q 4.94 & historiographical integrity',
        'On the contrary, preserving Bukhārī 4339 showcases the integrity of Islamic historiography and law: Muslims did not whitewash a prominent general’s error, precisely because the Prophet’s ﷺ stern condemnation and blood-money restitution set an eternal rule requiring verification before taking life.',
        'Historiographical honesty & Q 4.94 safeguard',
        [
          '01 · Qurʾānic rule confirmed (4.94): The episode reinforces Qurʾān 4:94, which commands Muslims in the field to “investigate carefully” whenever someone offers peace rather than accusing them of insincerity.',
          '02 · Moral independence of Companions: Ibn ʿUmar and other Companions refused Khālid’s order on the spot, proving Islamic ethics bind every commander equally.'
        ],
        ['Bukhārī 4339', 'Qurʾān 4:94', 'al-Khaṭṭābī, Aʿlām al-Ḥadīth'],
        [
          ['Q 4.94 command', '“Investigate carefully” in war'],
          ['Historiography', 'No cover-up of Companion errors'],
          ['Ethical precedent', 'Soldiers refused unlawful order'],
          ['Takeaway', 'Verbal doubt spares life']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Nisāʾ', en: 'O you who have believed, when you go forth in the cause of Allah, investigate carefully.', ref: '4:94' }
        ]
      )
    ]
  });

  /* 17. islam/morality/marriage/umar-umm-kulthum */
  up('islam/morality/marriage/umar-umm-kulthum', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Broken chain on the leg anecdote: While Ibn ʿAbd al-Barr (al-Istīʿāb) and Ibn Ḥajar (al-Iṣāba) mention the marriage itself, the specific anecdote about ʿUmar uncovering Umm Kulthūm’s leg has an interrupted chain (munqaṭiʿ) and is graded inauthentic (al-Albānī).',
      '02 · Explicit requirement of her consent: Even within the reported narrative, ʿAlī initially declined by saying “she is still young” and subsequently made any marriage contingent upon Umm Kulthūm’s own acceptance.',
      '03 · No age stated in any narration: None of the transmitted accounts actually specify Umm Kulthūm’s numerical age, leaving polemical assumptions of pre-pubescent coercion completely unsupported by the sources.'
    ],
    quotes: [
      { by: 'Classical Biographical Record', en: 'ʿAlī first answered she is still young and then made the marriage depend on her own acceptance.', ref: 'al-Istīʿāb; al-Iṣāba' }
    ],
    next: [
      trap(
        'If she wasn’t a child, why did ʿAlī say “she is still young” in the report?',
        'Still, why did ʿAlī say “she is still young” in the first place if she wasn’t a child?',
        'Explain relative youth & consent requirement',
        'In Arabic, “young” (ṣaghīra) can simply refer to a young unmarried woman or teenager whom a father initially feels is not yet ready for marriage to a much older suitor like ʿUmar. Crucially, the absence of any stated age plus the condition of her own consent refutes any claim of forced child marriage.',
        'Relative youth vs prepubescence',
        [
          '01 · Relative youth vs prepubescence: Fathers routinely describe a teenage or young adult daughter as “still young” when approached by a senior statesman, without implying she is a small child.',
          '02 · Consent requires maturity: Requiring Umm Kulthūm’s personal consent presupposes someone old enough to evaluate the proposal and decide for herself.'
        ],
        ['al-Istīʿāb', 'al-Iṣāba', 'Qurʾān 4:19'],
        [
          ['Arabic usage', 'Ṣaghīra = young / unmarried'],
          ['Age record', 'Zero narrations give an age'],
          ['Consent test', 'Presupposes her own judgement'],
          ['Inauthentic part', 'Leg anecdote is disconnected']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Nisāʾ', en: 'O you who have believed, it is not lawful for you to inherit women by compulsion.', ref: '4:19' }
        ]
      ),
      trap(
        'Why did respected Sunni biographers record the leg-uncovering story at all?',
        'Even if the leg-uncovering chain is broken, why would Sunni biographers like Ibn ʿAbd al-Barr and Ibn Ḥajar preserve such an ugly story?',
        'Distinguish encyclopaedic bio works from ṣaḥīḥ',
        'Biographical dictionaries such as al-Istīʿāb and al-Iṣāba functioned as comprehensive encyclopaedias collecting every circulating report about Companions and their families, regardless of chain strength. Preserving a narration does not authenticate it—when specialists like al-Albānī examine its isnād, the broken link immediately disqualifies the anecdote.',
        'Encyclopaedic compilation vs authenticated proof',
        [
          '01 · Encyclopaedic vs ṣaḥīḥ works: Unlike al-Bukhārī and Muslim, biographical compendia did not limit entries to rigorously authenticated chains; scholars explicitly require isnād verification before relying on them.',
          '02 · Standard of proof: Without an unbroken reliable chain, attributing an indecent act to a Rightly Guided Caliph violates both Islamic ḥadīth science and basic historical fairness.'
        ],
        ['al-Istīʿāb', 'al-Iṣāba', 'al-Albānī (broken chain grading)'],
        [
          ['Genre distinction', 'Encyclopaedia ≠ Ṣaḥīḥ collection'],
          ['Chain status', 'Interrupted (munqaṭiʿ)'],
          ['Scholarly grading', 'Inauthentic per al-Albānī'],
          ['Verified core', 'Marriage reported; anecdote weak']
        ],
        [
          { by: 'Prophetic Consent Principle', en: 'A previously married woman is not married until consulted, nor a virgin until her consent is sought.', ref: 'Ṣaḥīḥ al-Bukhārī' }
        ]
      )
    ]
  });

  /* 18. islam/morality/women/abu-bakr-pokes-aisha */
  up('islam/morality/women/abu-bakr-pokes-aisha', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Exact Arabic verb (ṭaʿana): In Ṣaḥīḥ al-Bukhārī (334, 3672), ʿĀʾisha narrates that her father Abū Bakr scolded her and used the word ṭaʿana—literally “poked” or “prodded” her in the side with his hand—not a violent beating.',
      '02 · Context of the dry camp: Her necklace had broken on a journey, forcing the entire caravan to halt in an area with no water for prayer ablution; anxious people complained to Abū Bakr while the Prophet ﷺ slept peacefully with his head on ʿĀʾisha’s lap.',
      '03 · Tayammum revealed as a blessing: ʿĀʾisha stayed still so she would not wake the Prophet ﷺ; the next morning Qurʾān 5:6 (the concession of tayammum / dry ablution) was revealed, prompting Usayd ibn Ḥuḍayr to declare: “This is not the first of your blessings, O family of Abū Bakr.”'
    ],
    next: [
      trap(
        'English translations say Abū Bakr struck her—you’re softening the word ṭaʿana!',
        'Some English translations literally render ṭaʿana as “struck me” or “punched me”—you’re softening the Arabic to defend domestic abuse!',
        'Compare ṭaʿana vs ḍaraba & physical scene',
        'In classical Arabic, ṭaʿana bi-yadihi fī khāṣiratī means poking or prodding someone in the side with the hand or fingers to express exasperation—distinct from ḍaraba (striking/beating). Even more tellingly, ʿĀʾisha stayed completely still only because she did not want to wake the sleeping Prophet ﷺ.',
        'Lexical precision (ṭaʿana) & undisturbed sleeper',
        [
          '01 · Lexical precision (ṭaʿana vs ḍaraba): Had Abū Bakr beaten her violently, the narrator would have used ḍaraba; using ṭaʿana specifies a localized poke/prod in the flank while a man slept peacefully on her lap.',
          '02 · Prophet ﷺ remained asleep: The Prophet’s ﷺ head rested undisturbed on ʿĀʾisha’s thigh the entire time—physically impossible if an abusive beating were taking place.'
        ],
        ['Bukhārī 334, 3672', 'Qurʾān 5:6'],
        [
          ['Arabic verb', 'Ṭaʿana = poked / prodded'],
          ['Contrast verb', 'Not ḍaraba (beat)'],
          ['Physical check', 'Prophet ﷺ slept undisturbed on lap'],
          ['ʿĀʾisha reason', 'Kept still not to wake him']
        ],
        [
          { by: 'ʿĀʾisha (narrating Bukhārī 334)', en: 'Nothing prevented me from moving except the position of the Messenger of Allah ﷺ on my thigh.', ref: 'Bukhārī 334' }
        ]
      ),
      trap(
        'Even a poke over a necklace shows harshness and the Prophet did nothing to defend her!',
        'Even a poke because of a lost necklace shows Abū Bakr treated his daughter harshly and the Prophet didn’t defend her.',
        'Highlight camp crisis & Prophetic gentleness',
        'The Prophet ﷺ was fast asleep when Abū Bakr entered, and the caravan faced a genuine waterless emergency before dawn prayer—not a trivial domestic quarrel. Far from resenting the incident, the community celebrated the morning’s revelation of tayammum (5:6) as another blessing brought through Abū Bakr’s household.',
        'Waterless emergency & Prophetic record of gentleness',
        [
          '01 · Communal urgency: Travellers had halted without water for wuḍūʾ, placing intense pressure on Abū Bakr as ʿĀʾisha’s father when they complained to him.',
          '02 · Prophetic gentleness toward ʿĀʾisha: Throughout his life, the Prophet ﷺ never struck any wife or servant (as ʿĀʾisha herself testified in Ṣaḥīḥ Muslim), and here he slept unaware until waking for dawn prayer.'
        ],
        ['Bukhārī 334, 3672', 'Qurʾān 5:6', 'Ṣaḥīḥ Muslim (never struck a wife)'],
        [
          ['Camp crisis', 'Caravan stranded without water'],
          ['Prophet state', 'Asleep until dawn prayer'],
          ['Legal mercy', 'Tayammum (Q 5:6) revealed'],
          ['Prophetic record', 'Never struck a wife or servant']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Māʾida', en: 'If you find no water, then seek clean earth and wipe over your faces and hands with it.', ref: '5:6' }
        ]
      )
    ]
  });

  /* 19. islam/morality/marriage/bathing-together */
  up('islam/morality/marriage/bathing-together', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Lawful marital intimacy: In Ṣaḥīḥ al-Bukhārī (250, 261), ʿĀʾisha describes herself and the Prophet ﷺ—a legally married husband and wife—performing ritual purification (ghusl) together from a single vessel after marital intimacy.',
      '02 · Transmitted as a fiqh ruling: ʿĀʾisha narrated the report under the legal chapters on purification specifically to teach the community a practical ruling: a husband and wife may share one container of water for ghusl without rendering the remaining water impure.',
      '03 · Healthy marital affection vs polemical distortion: Depicting ordinary married privacy and ritual washing between spouses as “indecent” strips away both the marital context and the legal purpose of the ḥadīth.'
    ],
    quotes: [
      { by: 'ʿĀʾisha (on marital ghusl)', en: 'The Prophet ﷺ and I used to take a bath from a single pot while we were both in a state of janāba.', ref: 'Bukhārī 250, 261' }
    ],
    next: [
      trap(
        'Isn’t it immodest for ʿĀʾisha to narrate bathing details to students and jurists?',
        'Even between spouses, narrating intimate bathing details openly to students and jurists is immodest!',
        'Show clinical fiqh phrasing & Q 2.187',
        'Islamic law requires clear, explicit guidance on ritual purity so believers never fall into confusion or unnecessary hardship; ʿĀʾisha therefore taught domestic fiqh modestly and clinically—stating the fact of shared ghusl without graphic or voyeuristic detail.',
        'Teaching domestic purity without graphic detail',
        [
          '01 · Modest legal phrasing: ʿĀʾisha uses dignified, concise legal terms (janāba, shared vessel) solely to establish water purity and ease for married couples.',
          '02 · No false prudery in revelation: The Qurʾān (2:187; 30:21) honours lawful marital affection and tenderness, while teaching practical rules of purification clearly and respectfully.'
        ],
        ['Bukhārī 250, 261', 'Qurʾān 2:187; 30:21'],
        [
          ['Purpose of report', 'Teach water-purity fiqh'],
          ['Language used', 'Dignified legal terms only'],
          ['Q 2.187', 'Spouses are garments for each other'],
          ['Q 30.21', 'Love & mercy between spouses']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Baqara', en: 'They are clothing for you and you are clothing for them.', ref: '2:187' }
        ]
      ),
      trap(
        'The issue isn’t spouses bathing—it’s how young ʿĀʾisha was in the marriage!',
        'The real issue isn’t bathing between spouses—it’s ʿĀʾisha’s age when she married the Prophet!',
        'Expose the goalpost shift & historical baseline',
        'That shifts the goalpost away from the bathing report—which simply records a married couple performing ghusl—onto the separate historical question of ʿĀʾisha’s marriage age. Across both pre-modern Islamic practice and pre-modern Christian/European law, marriage followed physical maturity rather than 21st-century statutory ages.',
        'Goalpost shift from ghusl to marriage-age history',
        [
          '01 · Goalpost shift exposed: The original claim attacked the bathing narration itself as indecent; pivoting to age concedes that spouses bathing together for ghusl is completely normal.',
          '02 · Dedicated age evidence: Pre-modern Christian canon law likewise set minimum marriage ages at 12 for girls and 14 for boys (upheld through the Council of Trent), while Islam additionally requires physical readiness and consent.'
        ],
        ['Bukhārī 250, 261', 'Council of Trent (12 for girls, 14 for boys)'],
        [
          ['Debate tactic', 'Goalpost shift from ghusl to age'],
          ['Ghusl report', 'Normal lawful marital purity'],
          ['Islamic check', 'Physical readiness & consent'],
          ['Historical norm', 'Shared by pre-modern Christendom']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Rūm', en: 'And He placed between you affection and mercy.', ref: '30:21' }
        ]
      )
    ]
  });

  /* 20. christianity/practice/child-marriage/council-of-trent-marriage-age */
  up('christianity/practice/child-marriage/council-of-trent-marriage-age', {
    who: 'Opening move · 01',
    forkTitle: STD_FORK_TITLE,
    forkSub: STD_FORK_SUB,
    p: [
      '01 · Canonical age floor at Trent: The Council of Trent (1545–1563) left intact the longstanding Catholic canon-law minimum marriage ages of 12 years for girls and 14 years for boys.',
      '02 · Refutes modern-age projections: Apologists who claim official Christian conciliar teaching always required modern secular adult ages (18+) contradict Catholicism’s own flagship Reformation-era ecumenical council.',
      '03 · Shared pre-modern baseline: Across Roman law, medieval canon law, and the Council of Trent, Christian Europe tied marriageability to early puberty thresholds (12/14)—exposing the double standard when critics single out 7th-century Arabia.'
    ],
    quotes: [
      { by: 'Thomas Aquinas (reflecting canonical baseline)', en: 'Positive law normally sets the age of discretion for marriage at 14 for males and 12 for females.', ref: 'ST Supplementum q. 58, a. 5' }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What Critics Claim',
        items: [
          'Projects 21st-century adult thresholds (18+) backwards onto Christian history',
          'Singled out early Islamic marriage norms as uniquely anomalous'
        ]
      },
      right: {
        title: 'Council of Trent Reality',
        items: [
          'Upheld canonical minimum ages of 12 for girls and 14 for boys',
          'Reflects centuries of Roman and Catholic canon-law consensus',
          'Exposes the anachronism of attacking 7th-century Arabia by modern statutes'
        ]
      }
    },
    next: [
      trap(
        'Trent only inherited Roman law and the Church later raised the ages in 1917 and 1983!',
        'Trent didn’t invent 12 and 14—it merely inherited old Roman civil law on marriage and later raised the age in the 1917/1983 Codes of Canon Law.',
        'Press the 1,500-year continuity until 1917',
        'Conceding that an ecumenical council kept 12 and 14 for over three and a half centuries after Trent—until the 20th century—proves our exact point: pre-modern Christian marriage law treated puberty (12/14) as normal, and modern 16/18 thresholds are recent statutory developments, not timeless Christian morality.',
        'Continuity of 12/14 from antiquity to 1917',
        [
          '01 · Over 1,500 years of church practice: From late antiquity through the medieval Decretals, Trent (1545–1563), and right up to 1917, Catholic canon law maintained 12 for girls and 14 for boys.',
          '02 · Recent 20th-century change: Raising the minimum age to 14/16 in the 1917 Code of Canon Law happened only a century ago—proving modern age thresholds are historical, not eternal divine law.'
        ],
        ['Council of Trent', '1917 Code of Canon Law'],
        [
          ['Duration of 12/14', 'From antiquity until 1917 CE'],
          ['Council of Trent', '1545–1563 CE (upheld 12/14)'],
          ['1917 Canon Code', 'First raised to 14/16 in 20th c.'],
          ['Implication', 'Modern ages are recent statutes']
        ],
        [
          { by: 'Pope Alexander III (Medieval Canon Law)', en: 'If before marriageable years, in the husband’s house, the wife is carnally known by him, they immediately become spouses.', ref: 'Canon Law Marriage Decretals' }
        ]
      ),
      trap(
        '12 was only a rare theoretical floor, not common practice like in Islam!',
        'Minimum canonical age doesn’t mean people actually married at 12—it was just a theoretical legal floor, whereas Islam encouraged child marriage.',
        'Show European practice & Q 4.6 rushd safeguard',
        'In reality, European nobility, royalty, and common canonical dispensations regularly contracted marriages around 12–14—including figures like Margaret Beaufort, mother of King Henry VII, who gave birth at 13. Meanwhile, Islamic fiqh requires both physical maturity and sound judgement (rushd, Qurʾān 4:6) plus consent.',
        'European practice vs Islamic rushd requirement',
        [
          '01 · Real European practice: Historical records across medieval and early-modern Europe document marriages and dispensations at 12–14 under canon law, demonstrating the threshold was actively used, not merely theoretical.',
          '02 · Consistent historical standard: Judging 7th-century Arabia by 21st-century laws while excusing 16th-century Europe’s own Council of Trent applies an inconsistent double standard.'
        ],
        ['Council of Trent', 'Qurʾān 4:6', 'European canonical marriage history'],
        [
          ['Active practice', 'Used in medieval/early-modern Europe'],
          ['Notable example', 'Margaret Beaufort (mother at 13)'],
          ['Islamic safeguard', 'Requires rushd (Q 4:6) & consent'],
          ['Logical flaw', 'Anachronistic double standard']
        ],
        [
          { by: 'Qurʾān — Sūrat al-Nisāʾ', en: 'Test the orphans until they reach the age of marriage; then if you perceive in them sound judgement, release their property to them.', ref: '4:6' }
        ]
      )
    ]
  });
})();
