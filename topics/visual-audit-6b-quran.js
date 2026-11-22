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
    if (!a) { console.warn('visual-audit-6b: missing', key); return; }
    if (a.type === 'explainer') {
      if (patch.visual && !a.visual) a.visual = patch.visual;
      if (Array.isArray(a.cards) && a.cards.length) {
        const c = a.cards[0];
        c.more = c.more || {};
        if (patch.facts) c.more.facts = patch.facts;
        if (patch.quotes) c.more.quotes = patch.quotes;
        if (patch.cardVisual) c.more.visual = patch.cardVisual;
      }
      return;
    }
    if (!a.tree) return;
    const t = a.tree;
    t.more = t.more || {};
    if (patch.who) t.who = patch.who;
    if (patch.forkTitle && (t.next || []).length > 1) t.forkTitle = patch.forkTitle;
    if (patch.forkSub && (t.next || []).length > 1) t.forkSub = patch.forkSub;
    if (patch.facts) t.more.facts = patch.facts;
    if (patch.quotes) t.more.quotes = patch.quotes;
    if (patch.visual) t.more.visual = patch.visual;
    if (patch.p) t.more.p = patch.p;
    if (patch.optWho && Array.isArray(t.next)) {
      t.next.forEach((c, j) => { if (patch.optWho[j]) c.optWho = patch.optWho[j]; });
    }
  }

  // 1. The change of qibla: to win over the Jews?
  up('islam/general/d-av-sonstiges-islam-2/c-qibla-richtung', {
    who: 'Expose the weak report',
    forkTitle: '3 follow-up objections they raise',
    forkSub: 'Pick the motive or claim they push next',
    optWho: ['If they ask why it changed', 'If they claim opportunism', 'If they claim people-pleasing'],
    facts: [
      ['Narrator graded weak', 'ʿAbd al-Raḥmān ibn Zayd'],
      ['Biographical verdict', 'Tahdhīb al-Tahdhīb 6/178'],
      ['Stated Qurʾānic test', 'Qurʾān 2:143'],
      ['Jewish offer refused', 'Tafsīr al-Ṭabarī 2:142']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Baqarah',
        en: 'We only made the qibla you used to face in order to know who follows the Messenger from who turns back on his heels. It was hard, except for those Allah guided. And Allah would not let your faith (your prayers towards Jerusalem) be lost.',
        ref: '2:143'
      },
      {
        by: 'Qurʾān — Sūrat Yūnus',
        en: 'It is not for me to change it of my own accord. I only follow what is revealed to me… I lived among you a lifetime before it. Will you not reason?',
        ref: '10:15–16'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Weak narration rejected', 'Al-Ṭabarī\'s report relies on Ibn Zayd, graded weak by Aḥmad, Ibn Ḥajar, al-Dhahabī, Abū Dāwūd, Ibn Maʿīn, al-Nasāʾī, and Abū Ḥātim'],
        ['Real reason in 2:143', 'The qibla change was a test of who follows the Messenger ﷺ rather than turning back on their heels'],
        ['Opportunism refuted (2:142)', 'Tafsīr al-Ṭabarī records the Jews offered to follow him if he turned back to Jerusalem, and he refused'],
        ['Consistency in 10:15–16', 'He rejected Makkan demands to alter the Qurʾān, following revelation rather than tactics']
      ]
    },
    p: [
      'Unanimous weakness of Ibn Zayd: ʿAbd al-Raḥmān ibn Zayd ibn Aslam is graded weak by Imām Aḥmad, Ibn Ḥajar, al-Dhahabī, Abū Dāwūd, Ibn Maʿīn, al-Nasāʾī, Abū Ḥātim and many others (Tahdhīb al-Tahdhīb vol. 6 no. 178).'
    ]
  });

  // 2. 46:9: “I do not know what will be done with me”
  up('islam/general/d-av-sonstiges-islam-2/c-prophet-saw-weiß-nicht-ob-paradies', {
    who: 'Give the two scholarly answers',
    forkTitle: '6 follow-up objections they raise',
    forkSub: 'Pick the verse or angle they press next',
    optWho: [
      'If they deny assurance of Paradise',
      'If they insist it means total ignorance',
      'If they dispute li in 48:2',
      'If they cite ʿasā in 17:79',
      'If they cite 110:3',
      'If they press the prophethood test'
    ],
    facts: [
      ['Makkan revelation', '46:9 before Madinan 48:1–2'],
      ['Ḥadīth context', 'Bukhārī 3929 (Umm al-ʿAlāʾ)'],
      ['Worldly scope', 'al-Jalālayn, al-Qurṭubī, Ibn Kathīr'],
      ['Biblical parallel', '1 Corinthians 4:4–5; Job 14:13']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'I will come to the gate of Paradise and ask for it to be opened. The keeper will say: Who are you? I will say: Muḥammad. He will say: I was commanded to open for you and for no one before you.',
        ref: 'Muslim 197'
      },
      {
        by: 'Al-Mughīra ibn Shuʿba (on 48:2)',
        en: 'The Prophet ﷺ used to pray until his feet swelled. Someone said: “Allah has forgiven you your past and future faults.” He said: “Should I not be a grateful servant?”',
        ref: 'Bukhārī 4836'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'View 1 — Chronology of revelation',
        items: [
          'Sūrat al-Aḥqāf (46:9) and Umm al-ʿAlāʾ\'s ḥadīth belong to the earlier Makkan period',
          'Sūrat al-Fatḥ (48:1–2) came later in Madinah promising forgiveness (Ibn Ḥajar; Qatāda in al-Ṭabarī)',
          'Muslim 197 confirms he will be the first for whom Paradise is opened'
        ]
      },
      right: {
        title: 'View 2 — Worldly events & humility',
        items: [
          'Al-Jalālayn & Ibn Kathīr: refers to worldly outcomes like exile, death, or Quraysh\'s fate',
          'Al-Qurṭubī (via Abū Jaʿfar): worldly matters like illness, wealth, and poverty',
          'Ibn ʿĀshūr: statement of humility regarding unseen details not revealed to him'
        ]
      }
    },
    p: [
      'Context of Bukhārī 3929: Umm al-ʿAlāʾ, an Anṣārī woman, nursed ʿUthmān ibn Maẓʿūn until he died, and said over him: “I bear witness that Allah has honoured you.” The Prophet ﷺ said: “How do you know Allah has honoured him?… By Allah, though I am the Messenger of Allah, I do not know what Allah will do with me” (Bukhārī 3929 / Book 58 no. 266).',
      'Misreading the objection: The objection reads this as uncertainty about his fate in the Hereafter.'
    ]
  });

  // 3. Do the inheritance shares add up to more than 100%?
  up('islam/quran/d-ia-alleged-calculation-errors', {
    who: 'Explain proportional ratios (ʿawl)',
    forkTitle: '3 follow-up objections they raise',
    forkSub: 'Pick the legal or mathematical point they challenge',
    optWho: [
      'If they accuse ʿUmar of invention',
      'If they ask why ʿawl isn\'t explicit',
      'If they demand non-exceeding shares'
    ],
    facts: [
      ['Qurʾānic verses', '4:11–12; 4:176; 4:7'],
      ['Legal mechanism', 'ʿAwl (proportional reduction)'],
      ['Caliphal authority', 'Abū Dāwūd 4607; Tirmidhī 3682'],
      ['Case narrations', 'al-Bayhaqī; al-Ḥākim; Ibn Ḥazm']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'Hold fast to my Sunna and the Sunna of the rightly guided caliphs after me.',
        ref: 'Abū Dāwūd 4607'
      },
      {
        by: 'Prophet Muḥammad ﷺ (on ʿUmar)',
        en: 'Indeed Allah has put the truth upon the tongue and in the heart of ʿUmar.',
        ref: 'Tirmidhī 3682'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Fixed relative ratios', 'Qurʾānic fractions (2/3, 1/6, 1/8) set each heir\'s proportion relative to the others'],
        ['Sum above 100% example', 'Two daughters (2/3) + father (1/6) + mother (1/6) + wife (1/8) = 112.5%'],
        ['Proportional scaling (ʿawl)', 'Divide 100 by 112.5 (0.89) and scale every share down while preserving exact ratios'],
        ['Companion consensus', 'Settled by ʿUmar after consulting the Companions (al-Bayhaqī, al-Ḥākim, Ibn Ḥazm)']
      ]
    },
    p: [
      'Relative proportions: Shares like two-thirds, a sixth and an eighth are fixed relative to each other. When they sum above one, all are scaled down so each heir keeps the same proportion.',
      'Worked calculation and credit: The channel works through the case and the ʿawl calculation in scans (to capture). Credit: The Orthodox Muslim, with help from ʿĀqib.'
    ]
  });

  // 4. Why does Allah say “We”?
  up('islam/quran/d-ia-quranic-language/t-we', {
    who: 'Explain the royal plural',
    facts: [
      ['Arabic forms', 'Innā (“verily We”), naḥnu (“We”)'],
      ['Rhetorical function', 'Plural of majesty and glorification'],
      ['Scholarly source', 'Ibn Taymiyya'],
      ['Tawḥīd verses', 'Singular “I” (Qurʾān 20:14)']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat Ṭā-Hā',
        en: 'Indeed, I am Allah; there is no god except Me, so worship Me.',
        ref: '20:14'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Majesty & authority (Royal “We”)',
        items: [
          'Innā and naḥnu express greatness and glorification, like a monarch\'s “We have decided…”',
          'Only one speaker — plural form for respect, not plurality of number (Ibn Taymiyya)',
          'Allah is most deserving of glorification (cf. 15:9)'
        ]
      },
      right: {
        title: 'Worship & tawḥīd (Singular “I”)',
        items: [
          'Whenever the Qurʾān speaks about worship and tawḥīd, Allah uses the singular',
          '20:14: “Indeed, I am Allah; there is no god except Me, so worship Me”',
          'Leaves no room to infer numerical plurality'
        ]
      }
    },
    p: [
      'Singular on worship and tawḥīd: Whenever the Qurʾān speaks about worship and tawḥīd, it uses the singular: “Indeed, I am Allah; there is no god except Me, so worship Me” (20:14).',
      'Arabic grammar resources: The channel also links an Arabic101 video, “Why does Allah use PLURAL نحن/we in the Quran?”, and has three scans on the grammar (to capture).'
    ]
  });

  // 5. Why “He” if Allah has no gender?
  up('islam/quran/d-ia-quranic-language/t-he', {
    who: 'Explain Arabic grammar',
    facts: [
      ['Pronoun used', 'Huwa (“He”) — grammatical default'],
      ['Arabic grammar', 'No gender-neutral singular pronoun'],
      ['Transcendence verse', 'Qurʾān 42:11 (“Nothing like Him”)'],
      ['Supporting sūra', 'Qurʾān 112 (al-Ikhlāṣ)']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Shūrā',
        en: 'Not like anything (Nothing is like unto Him).',
        ref: '42:11'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Linguistic constraint in Arabic',
        items: [
          'Arabic has no gender-neutral singular pronoun',
          'Arabic also assigns masculine or feminine grammatical gender to objects',
          'Huwa (“He”) is simply the default grammatical form'
        ]
      },
      right: {
        title: 'Qurʾānic transcendence',
        items: [
          'Allah is “not like anything” (42:11; cf. Sūra 112)',
          'Grammatical gender makes no claim about biological sex',
          'We refer to Him as revelation does while affirming He has no likeness'
        ]
      }
    },
    p: [
      'Grammatical vs biological gender: Grammatical gender isn\'t biological: Arabic also uses masculine or feminine for objects.',
      'Revealed convention without likeness: Allah is described in the masculine form throughout revelation, and that\'s how we refer to Him, while affirming He has no likeness.'
    ]
  });

  // 6. “Until We know”: didn't Allah already know?
  up('islam/quran/d-ia-quranic-language/t-know', {
    who: 'Clarify eternal vs manifest knowledge',
    facts: [
      ['Verses cited', 'Qurʾān 47:31; 2:143'],
      ['Classical tafsīr', 'Tafsīr Ibn Kathīr'],
      ['Meaning of “know”', 'Manifestation in lived reality'],
      ['Purpose of test', 'Basis for reward or punishment']
    ],
    quotes: [
      {
        by: 'Ibn Kathīr',
        en: 'This is knowledge of what has come to exist, after His prior knowledge of what would exist.',
        ref: 'Tafsīr Ibn Kathīr'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Eternal prior knowledge', 'Allah knows everything before it happens'],
        ['Choices enacted in reality', 'The test brings people\'s choices into existence in the world'],
        ['Knowledge of what exists', '“Until We know” (47:31) means knowledge of what has become manifest reality (Ibn Kathīr)'],
        ['Just basis of judgement', 'People are judged by the deeds they actually performed']
      ]
    },
    p: [
      'Manifestation for just judgement: Allah\'s knowledge is eternal; the test brings people\'s choices into existence so they are judged on what they actually did.',
      'Ibn Kathīr\'s distinction: Ibn Kathīr: this is knowledge of what has come to exist, after His prior knowledge of what would exist.'
    ]
  });

  // 7. Allah swears by creation: isn't that shirk?
  up('islam/quran/d-ia-quranic-language/t-swear', {
    who: 'Distinguish Creator from creatures',
    facts: [
      ['Command to humans', 'Tirmidhī 1535 (swear only by Allah)'],
      ['Qurʾānic oaths', '51:1–6; 91:1–7; 86:1'],
      ['Creator\'s freedom', 'Allah is free from restrictions'],
      ['Purpose of oaths', 'Point to greatness & truths']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'Whoever swears by other than Allah has committed kufr or shirk.',
        ref: 'Tirmidhī 1535'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Restriction on creatures',
        items: [
          'Swearing glorifies what is sworn by',
          'Humans are restricted and commanded to swear only by Allah (Tirmidhī 1535)',
          'For humans, swearing by other than Allah is kufr or shirk'
        ]
      },
      right: {
        title: 'Prerogative of the Creator',
        items: [
          'Allah is free from restrictions placed upon creatures',
          'Oaths by creation highlight its greatness and point back to the Creator',
          'Underscore the truth that follows: the Resurrection, the Qurʾān, and the Prophet\'s message'
        ]
      }
    },
    p: [
      'Why humans are forbidden: Swearing glorifies what you swear by, so we are commanded to swear only by Allah: “Whoever swears by other than Allah has committed kufr or shirk” (Tirmidhī 1535).',
      'Why Allah swears by signs: Allah\'s oaths highlight signs that point back to Him, the Creator. Example: the opening oaths of Sūrat al-Dhāriyāt (link in the channel).'
    ]
  });

  // 8. “Allah taught Ādam the word for fart” (2:31)
  up('islam/quran/d-ia-quranic-language/adam-names-2-31', {
    who: 'Check the chains and Bukhārī',
    facts: [
      ['Verse cited', 'Qurʾān 2:31'],
      ['Actual Bukhārī text', 'Bukhārī 7410 (“names of all things”)'],
      ['Weak / broken chains', 'Saʿīd ibn Maʿbad; ʿĀṣim ibn Kulayb'],
      ['Edition notes', 'Tafsīr al-Ṭabarī 2:31, nn. 4 & 9']
    ],
    quotes: [
      {
        by: 'Ṣaḥīḥ al-Bukhārī (Intercession ḥadīth)',
        en: 'Allah taught you the names of all things.',
        ref: 'Bukhārī 7410'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What al-Bukhārī actually has',
        items: [
          'Al-Ṭabarī only cites Bukhārī 7410, the ḥadīth of intercession',
          'States only that Ādam was taught “the names of everything”',
          'Al-Bukhārī never authenticated the crude details'
        ]
      },
      right: {
        title: 'The weak detailed reports',
        items: [
          'Two routes go through Saʿīd ibn Maʿbad from Ibn ʿAbbās — Saʿīd is unknown (majhūl)',
          'Third route goes through ʿĀṣim ibn Kulayb, who never met Ibn ʿAbbās (broken chain)',
          'Documented in Tafsīr al-Ṭabarī 2:31, editor\'s footnotes 4 and 9'
        ]
      }
    },
    p: [
      'Edition footnotes on weak chains: Tafsīr al-Ṭabarī on 2:31, editor\'s footnotes 4 and 9.',
      'What Bukhārī 7410 actually says: Bukhārī 7410: the intercession ḥadīth (“Allah taught you the names of all things”).'
    ]
  });

  // 9. Allah says “perhaps” (ʿasā)? Is He unsure?
  up('islam/quran/d-ia-quranic-language/asa-perhaps', {
    who: 'Cite the tafsīr consensus',
    facts: [
      ['Qurʾānic verses', '4:99; 9:18; 9:102; 17:79'],
      ['Al-Baghawī (4:99)', 'Firm promise fulfilled by Allah'],
      ['Al-Qurṭubī (9:18)', 'ʿAsā from Allah is an obligation'],
      ['Al-Ṭabarī (9:18)', 'Every ʿasā in Qurʾān is binding']
    ],
    quotes: [
      {
        by: 'Al-Ṭabarī',
        en: 'Every ʿasā in the Qurʾān is binding.',
        ref: 'Tafsīr al-Ṭabarī on 9:18'
      },
      {
        by: 'Al-Qurṭubī',
        en: 'ʿAsā from Allah is an obligation.',
        ref: 'Tafsīr al-Qurṭubī on 9:18'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Divine commitment, not doubt', 'From Allah, ʿasā expresses a binding commitment rather than uncertainty'],
        ['Al-Baghawī on 4:99', 'Means Allah will pardon them; when Allah gives hope, He fulfils it'],
        ['Al-Qurṭubī & al-Ṭabarī on 9:18', 'Both state that ʿasā from Allah is an obligation and binding throughout the Qurʾān'],
        ['Cross-check in 17:79 & 9:102', 'Confirms ʿasā always denotes certainty when spoken by Allah']
      ]
    },
    p: [
      'Classical tafsīr consensus: Al-Baghawī on 4:99; al-Qurṭubī and al-Ṭabarī on 9:18.',
      'Cross-reference to the Sūrat al-Aḥqāf card: See also the 46:9 card: ʿasā in 17:79 and 9:102.'
    ]
  });

  // 10. “A hundred thousand or more” (37:147): doesn't Allah know?
  up('islam/quran/d-ia-quranic-language/or-37-147', {
    who: 'Explain the Arabic particle aw',
    facts: [
      ['Verse cited', 'Qurʾān 37:147'],
      ['Listing parallel', 'Qurʾān 6:145'],
      ['Kūfan reading', 'Aw = bal (“rather more”)'],
      ['Baṣran reading', 'Observer\'s view (Ṭanṭāwī)']
    ],
    quotes: [
      {
        by: 'Tafsīr Ṭanṭāwī',
        en: 'As it would appear to an observer.',
        ref: 'On Qurʾān 37:147'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Kūfan grammatical view',
        items: [
          'Aw carries the sense of bal (“rather”)',
          'Means: a hundred thousand — rather, even more',
          'Aw meaning bal is attested in classical Arabic poetry'
        ]
      },
      right: {
        title: 'Baṣran view & parallel in 6:145',
        items: [
          'Speaks from an onlooker\'s perspective: someone seeing them would say a hundred thousand or more (Ṭanṭāwī)',
          'In 6:145, aw lists items that are all forbidden without any doubt',
          'Like saying “everyone, tall or short, is welcome”'
        ]
      }
    },
    p: [
      'Tafsīr and poetry attestation: Tafsīr Ṭanṭāwī on 37:147: “as it would appear to an observer.” Aw meaning bal is attested in Arabic poetry.'
    ]
  });

  // 11. “Read!” to an unlettered man (96:1)
  up('islam/general/d-av-sonstiges-islam-2/c-jibril-ließ-in-namen-deines-herrn', {
    who: 'Show the two meanings of qaraʾa',
    forkTitle: '2 follow-up questions on Ḥirāʾ',
    forkSub: 'Address the threefold squeeze or summarise the proof',
    optWho: ['If they ask about the three squeezes', 'If they want the bottom line'],
    facts: [
      ['First revelation', 'Qurʾān 96:1–5'],
      ['Two senses of qaraʾa', 'Read a text OR recite from memory'],
      ['Recitation verses', '75:17–18; 16:98; 17:45, 106'],
      ['Primary sources', 'Bukhārī 3; Muslim 160; Ibn ʿĀshūr 30/435']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Qiyāma',
        en: 'Upon Us is its collection and its recitation (qurʾānahu); so when We have recited it, follow its recitation.',
        ref: '75:17–18'
      },
      {
        by: 'Qurʾān — Sūrat al-ʿAnkabūt',
        en: 'You did not recite before it any scripture, nor did you write one with your right hand.',
        ref: '29:48'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Reading a written text',
        items: [
          'Example: 17:14 (“Read your record”)',
          'He replied “I am not a reader” because he couldn\'t read from a book and had memorised none (29:48)',
          'No page was handed over in the cave of Ḥirāʾ'
        ]
      },
      right: {
        title: 'Reciting from memory',
        items: [
          'Examples: 75:17–18, 16:98, 17:45, and 17:106 call the Prophet\'s ﷺ oral recitation qirāʾa',
          'Jibrīl commanded iqraʾ to ready him for what was about to be recited (Ibn ʿĀshūr 30/435)',
          'After the third squeeze, he recited 96:1–5 and returned home with them in memory (Bukhārī 3; Muslim 160)'
        ]
      }
    },
    p: [
      'Meaning 1 — Reading a written text: “Read your record; sufficient is yourself against you this Day as accountant” (17:14).',
      'Meaning 2 — Reciting from memory: “Upon Us is its collection and its recitation (qurʾānahu); so when We have recited it, follow its recitation” (75:17–18). Jibrīl did not recite the Qurʾān to the Prophet ﷺ from a book.',
      'Other Qurʾānic uses of qaraʾa: “When you recite (qaraʾta) the Qurʾān, seek refuge in Allah from Satan” (16:98); “When you recite the Qurʾān, We put between you and those who don\'t believe in the Hereafter a hidden barrier” (17:45); “a Qurʾān We divided so that you may recite it to people slowly” (17:106).',
      'Why unlettered fits qirāʾa: These verses call the Prophet\'s ﷺ recitation qirāʾa even though he was unlettered and couldn\'t read from books. He recited from memory what Allah enabled him to.'
    ]
  });

  // 12. Mountains as pegs (78:6–7)
  up('islam/quran/science-errors/mountains-as-pegs', {
    who: 'Show the geological parallel',
    facts: [
      ['Qurʾānic verse', 'Qurʾān 78:6–7 (pegs)'],
      ['Geology textbook', 'Reed & Cannon, Earth Science p. 39'],
      ['Geologist source', 'Zaghloul El-Naggar (PhD, Wales)'],
      ['Key structure', 'Deep roots reaching into the crust']
    ],
    quotes: [
      {
        by: 'Christina Reed & William J. Cannon',
        en: '…less dense mountains with deep roots support the theory of continental drift.',
        ref: 'Earth Science, p. 39'
      },
      {
        by: 'Qurʾān — Sūrat al-Nabaʾ',
        en: 'Have We not made the earth a resting place, and the mountains as pegs?',
        ref: '78:6–7'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Tent peg analogy',
        items: [
          'Only a small part appears above the surface',
          'Most of the peg is hidden underground',
          'Anchors and stabilises the tent'
        ]
      },
      right: {
        title: 'Mountain structure in geology',
        items: [
          'Not just the heights seen above ground',
          'Deep, less dense roots extend into the crust (Reed & Cannon, p. 39)',
          'El-Naggar: “peg” is more accurate than “root” for these deep extensions'
        ]
      }
    },
    p: [
      'Geology textbook citation: Christina Reed and William J. Cannon, Earth Science, p. 39.',
      'Geologist analysis of pegs: Zaghloul El-Naggar (PhD geology, University of Wales), The Geological Concept of Mountains in the Qurʾān, p. 7: mountains are not only the heights seen on the surface but their deep extensions into the crust, strongly emphasised in the form of pegs.'
    ]
  });

  // 13. Pearls and coral from both seas? (55:22)
  up('islam/quran/science-errors/pearls-and-coral-55-22', {
    who: 'Show the Arabic idiom and parallels',
    facts: [
      ['Verse cited', 'Qurʾān 55:22'],
      ['Arabic parallels', '6:130 (jinn & men); 43:31 (two towns)'],
      ['Contrast verse', 'Qurʾān 35:12 (true of both)'],
      ['Classical tafsīr', 'al-Baghawī; Ibn Kathīr; Ibn ʿĀshūr']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Anʿām (Arabic parallel)',
        en: 'O assembly of jinn and men, did not messengers come to you from among you?',
        ref: '6:130'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Qurʾān 55:22 — “From one of the two”',
        items: [
          'Al-Baghawī (c. 1100): pearls and coral come only from salt water; Arabic allows mentioning two where it applies to one',
          'Ibn Kathīr: “from both” means from the totality of the two, as in 6:130 (messengers from jinn & men, though only from men)',
          'Ibn ʿĀshūr (via Abū ʿAlī al-Fārisī): ellipsis meaning “from one of the two”, compare 43:31'
        ]
      },
      right: {
        title: 'Qurʾān 35:12 — Distinct statement',
        items: [
          'From both waters you eat fresh flesh and extract ornaments',
          'True of both fresh and salt water',
          'Whereas 55:22 speaks of pearls from one of them'
        ]
      }
    },
    p: [
      'Al-Baghawī (c. 1100): Pearls and coral come only from the salt water; this usage is allowed in Arabic.',
      'Ibn Kathīr\'s parallel: “From both” means from the totality of the two; if it\'s true of one, that suffices, as in 6:130.',
      'Ibn ʿĀshūr\'s ellipsis rule: Ellipsis, “from one of them”, compare 43:31.',
      'Contrast with Sūrat Fāṭir (verse 12): 35:12 is different: from both waters you eat fresh flesh and extract ornaments, which is true of both; 55:22 speaks of pearls from one of them.'
    ]
  });

  // 14. Do bees eat fruit? (16:69)
  up('islam/quran/science-errors/bees-eat-fruit-16-69', {
    who: 'Verify biology and Arabic usage',
    facts: [
      ['Verse cited', 'Qurʾān 16:69 (kul / eat)'],
      ['Ripe fruits eaten', 'Plums, peaches, grapes, apples, figs, pears'],
      ['Beekeeping sources', 'honeybeesuite.com; buzzbeekeepingsupplies.com'],
      ['Arabic kul parallels', '2:168; 5:88; 16:114; 20:81']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Naḥl',
        en: 'Then eat from all the fruits.',
        ref: '16:69'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Biological fact (Beekeeping)',
        items: [
          'Honey bees feed on ripe fruit (plums, peaches, grapes, apples, figs, pears), especially when nectar is scarce',
          'Attracted by smell, they can pierce the skin of overripe fruit',
          'Confirmed by non-Muslim beekeeping sources'
        ]
      },
      right: {
        title: 'Arabic usage of kul (“eat”)',
        items: [
          'The Qurʾān uses “eat” in a general sense of taking sustenance, including drink',
          'Same general sense appears in 2:168, 5:88, 16:114, and 20:81',
          'Satisfies both literal fruit-feeding and broader sustenance'
        ]
      }
    },
    p: [
      'Non-Muslim beekeeping sources: honeybeesuite.com, “Do honey bees eat fruit?”; buzzbeekeepingsupplies.com: bees target overripe fruit.',
      'Arabic usage of “eat”: “Eat” as general sustenance: 2:168; 5:88; 16:114; 20:81.',
      'Archived evidence: Screenshots in the channel (to capture).'
    ]
  });

  // 15. Stars as missiles against devils? (67:5)
  up('islam/quran/science-errors/shooting-stars-67-5', {
    who: 'Distinguish maṣābīḥ from shihāb',
    facts: [
      ['Key verses', '67:5; 37:6–10; 38:10; 72:8–9'],
      ['Key distinction', 'Maṣābīḥ (lamps) vs shihāb (flame)'],
      ['Primary sources', 'Qatāda; Bukhārī 3210'],
      ['Astrophysics note', 'V Hydrae plasma balls (UPI 2016)']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Mulk',
        en: 'We adorned the nearest heaven with lamps and made them missiles against the devils.',
        ref: '67:5'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Maṣābīḥ vs shihāb', 'Maṣābīḥ means lamps; Qatāda explains it isn\'t the star itself, but the flame (shihāb) from it that strikes the devils'],
        ['Qurʾān explains Qurʾān', '37:6–10 and 72:8–9 specify that devils are pursued by “a piercing flame” (shihāb)'],
        ['Cloud-level eavesdropping', 'Bukhārī 3210 places eavesdropping at the clouds where angels descend, far below the stars'],
        ['Metaphysical & physical', 'A metaphysical reality beyond physical measurement; physically too, stars move fast and eject plasma (V Hydrae, UPI 2016)']
      ]
    },
    p: [
      'Qatāda\'s explanation: Qatāda: the maṣābīḥ are the stars, but the shihāb from them strikes the devils.',
      'Qurʾānic parallel verses: 37:6–10: the heaven adorned with stars; the devils are pursued by “a piercing flame”. 72:8–9: the jinn find the heaven filled with guards and flames.',
      'Bukhārī (Book of the Beginning of Creation): Angels descend to the clouds and speak of a decree; devils eavesdrop and pass it to soothsayers, and are struck by flames.',
      'Metaphysical scope: This is about a metaphysical reality; physical methods can\'t measure it.'
    ]
  });

  // 16. “You are not its storers” (15:22) and dams
  up('islam/quran/science-errors/water-stores-15-22', {
    who: 'Give the tafsīr context',
    facts: [
      ['Verse cited', 'Qurʾān 15:22'],
      ['Al-Rāzī', 'Mafātīḥ al-Ghayb 19/181'],
      ['Ibn Kathīr', 'Tafsīr on 15:22'],
      ['True context', 'Rainfall & spring replenishment']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Ḥijr',
        en: 'We send water from the sky… and you are not its storers.',
        ref: '15:22'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Critics\' reading (Dams)',
        items: [
          'Claims 15:22 denies human ability to build reservoirs or dams',
          'Isolates the clause from rain descending from the sky',
          'Misses the natural water cycle sustaining springs year-round'
        ]
      },
      right: {
        title: 'Classical tafsīr (Rain & springs)',
        items: [
          'Al-Rāzī (19/181): the water coming from the sky can\'t be stored by you — it\'s about rain, not dams',
          'Ibn Kathīr: you have no control over it; Allah keeps it in springs, wells, and rivers fresh all year',
          'If Allah willed, He could make it vanish'
        ]
      }
    },
    p: [
      'Al-Rāzī\'s tafsīr: Al-Rāzī, Mafātīḥ al-Ghayb 19/181.',
      'Ibn Kathīr\'s tafsīr: Ibn Kathīr on 15:22. The context is rainfall and the natural replenishment of water sources.'
    ]
  });

  // 17. Bones, then clothed with flesh (23:14)
  up('islam/quran/science-errors/bones-then-flesh-23-14', {
    who: 'Cite embryology and Arabic',
    facts: [
      ['Verses cited', 'Qurʾān 23:14; 22:5'],
      ['Embryology text', 'Allen & Kramer, Human Embryology'],
      ['Arabic lexicon', 'al-Fīrūzābādī, al-Qāmūs al-Muḥīṭ'],
      ['Early bone stage', 'Cartilage models before ossification']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Muʾminūn',
        en: '…then We made the lump into bones, then clothed the bones with flesh.',
        ref: '23:14'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Cartilage models first', 'Cartilage models of the bones form first; ʿaẓm includes cartilage (ghuḍrūf) as soft bone (al-Qāmūs al-Muḥīṭ)'],
        ['Muscle cells wrap them', 'Myogenic precursor cells migrate and gather around cartilage models to form muscles (Allen & Kramer)'],
        ['“We clothed” (kasawnā)', 'Means wrapping existing material around structures, distinct from khalq (creation from nothing)'],
        ['Syntax & X-ray visibility', 'Fa- doesn\'t always impose strict chronology; early cartilage isn\'t calcified yet, so it doesn\'t show on X-rays']
      ]
    },
    p: [
      'Cartilage models first: 1. Cartilage models first, then muscle cells attach to them; this revised the older view that muscles form directly from mesenchyme.',
      'Lexical scope of ʿaẓm: 2. ʿAẓm covers cartilage (ghuḍrūf) as soft bone (al-Qāmūs al-Muḥīṭ).',
      'Meaning of kasawnā: 3. Kasawnā means “We clothed”: wrapping existing material around the structures, distinct from khalq, creation from nothing.',
      'Grammar of fa-: 4. The particle fa- doesn\'t always impose strict chronology.'
    ]
  });

  // 18. Does the Qurʾān say the moon has its own light?
  up('islam/quran/science-errors/moons-light', {
    who: 'Contrast sirāj vs nūr',
    facts: [
      ['Sun vs Moon terms', 'Sirāj (lamp) vs nūr / munīr'],
      ['Key verses', '25:61; 71:16; 17:12; 91:2'],
      ['Classical tafsīr', 'al-Ālūsī; Ibn Kathīr; Ibn ʿĀshūr'],
      ['Biblical contrast', 'Genesis 1:16 uses maʾōr for both']
    ],
    quotes: [
      {
        by: 'Ibn ʿĀshūr',
        en: 'The moon is dark in itself; its light comes from the sun.',
        ref: 'al-Taḥrīr wa al-Tanwīr 30/204'
      },
      {
        by: 'Qatāda (on 91:2)',
        en: 'When the sun sets, the crescent appears: that is “when it follows it”.',
        ref: 'Tafsīr Ibn Kathīr on 91:2'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Qurʾān (25:61; 71:16; 17:12)',
        items: [
          'Sun is called sirāj — a burning, self-luminous lamp',
          'Moon is called nūr / munīr — light without a burning source',
          'Al-Ālūsī, Ibn Kathīr, Ibn ʿĀshūr & Ṭanṭāwī all affirmed its light comes from the sun'
        ]
      },
      right: {
        title: 'Genesis 1:16 (Turn the tables)',
        items: [
          'Applies the exact same Hebrew word maʾōr (“light / luminary”) to both sun and moon',
          'Treats “greater light” and “lesser light” as lights of the same kind',
          'By contrast, Qurʾān 25:61 deliberately distinguishes sirāj from munīr'
        ]
      }
    },
    p: [
      'Al-Ālūsī on reflection: Al-Ālūsī: the moon\'s light is reflected from the sun\'s light.',
      'Ibn ʿĀshūr and modern tafsīr: Ibn ʿĀshūr (al-Taḥrīr wa al-Tanwīr 30/204): the moon is dark in itself; its light comes from the sun. Sayyid Ṭanṭāwī and other modern tafsīrs agree.',
      'Ibn Kathīr on lunar brightness: Ibn Kathīr (al-Bidāya): the moon is called nūr because it uses the sun\'s light; its brightness changes with its distance from the sun.',
      'Al-Rāzī on verse 12 of al-Isrāʾ: Al-Rāzī reports that the moon once had light and Allah sent Jibrīl to erase it.',
      'Turn the tables (Averroes #mond-eigenes-licht): Genesis 1:16 applies the exact same Hebrew word maʾōr (“light / luminary”) to both the sun (“greater light”) and the moon (“lesser light”), treating them as lights of the same kind. By contrast, Qurʾān 25:61 deliberately distinguishes the sun as a sirāj (self-luminous lamp) and the moon as munīr (shining / illuminated, never called a sirāj).'
    ]
  });

  // 19. Does the moon landing refute the Qurʾān?
  up('islam/quran/science-errors/moon-landing', {
    who: 'Cite classical and modern tafsīr',
    facts: [
      ['Verse cited', 'Qurʾān 55:33 (Day of Judgement)'],
      ['Orbit verses', 'Qurʾān 21:33; 36:40'],
      ['Early scholar', 'al-Ḥasan al-Baṣrī'],
      ['Modern scholars', 'Ibn ʿUthaymīn; al-Shinqīṭī']
    ],
    quotes: [
      {
        by: 'Ibn ʿUthaymīn',
        en: 'If it is proven that spacecraft reached the moon, that proves the moon isn\'t in the guarded heaven but in an orbit between heaven and earth.',
        ref: 'Citing Qurʾān 21:33; 36:40'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Critics\' misreading of 55:33',
        items: [
          'Assumes 55:33 forbids spaceflight to the moon',
          'Assumes the moon lies in the guarded heaven',
          'Ignores the eschatological meaning of the verse'
        ]
      },
      right: {
        title: 'Tafsīr of 55:33, 21:33 & 36:40',
        items: [
          'All tafsīrs say 55:33 is a warning about the Day of Resurrection',
          'Al-Ḥasan al-Baṣrī & Ibn ʿUthaymīn: the moon is in an orbit between heaven and earth',
          'Al-Shinqīṭī: using such verses to deny the moon landing shows ignorance of tafsīr'
        ]
      }
    },
    p: [
      'Ibn ʿUthaymīn\'s verdict: Ibn ʿUthaymīn, with 21:33 and 36:40 (“each swims in an orbit”).',
      'Al-Ḥasan al-Baṣrī\'s view: Al-Ḥasan al-Baṣrī (via al-Thaʿlabī and al-Māwardī).',
      'Al-Shinqīṭī\'s rebuke: Al-Shinqīṭī: whoever uses such verses to deny the moon landing is ignorant of tafsīr.',
      'Logical scope: Even if the moon were “in the heaven”, reaching it isn\'t penetrating all the regions of the heavens.'
    ]
  });

  // 20. “A ladder into the sky” (6:35)
  up('islam/quran/science-errors/ladder-to-heaven-6-35', {
    who: 'Show the rhetorical context',
    facts: [
      ['Verse cited', 'Qurʾān 6:35'],
      ['Scholarly source', 'Ibn ʿĀshūr'],
      ['Literary device', 'Imagery for extreme effort'],
      ['Actual message', 'Consolation for the Prophet ﷺ']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Anʿām',
        en: 'If you can seek a tunnel into the earth or a ladder into the sky to bring them a sign…',
        ref: '6:35'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Prophetic grief', 'The Prophet ﷺ was grieved by stubborn rejection'],
        ['Hyperbolic imagery', 'Tunnel and ladder are images for extreme efforts that still would not reach some hearts'],
        ['Divine will in guidance', 'If Allah willed, He would have guided them all'],
        ['Call to patience', 'Consoles the Prophet ﷺ on the limits of human effort: “so don\'t be of the ignorant”']
      ]
    },
    p: [
      'Consolation and patience: Consolation, the limits of human effort, Allah\'s will, and patience — “so don\'t be of the ignorant.”'
    ]
  });

  // 21. Did Pharaoh “crucify” people? (7:124)
  up('islam/quran/history/pharaoh-crucifixion', {
    who: 'Examine the root ṣ-l-b & the Bible',
    facts: [
      ['Arabic root', 'ṣ-l-b (hang or fasten on wood)'],
      ['Qurʾānic uses', '7:124; 12:41; 20:71; 26:49'],
      ['Joseph\'s Egypt (Bible)', 'Genesis 40:22 (baker hanged)'],
      ['Mosaic law (Bible)', 'Deuteronomy 21:22–23 (hung on tree)']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat Ṭā-Hā',
        en: 'I will crucify you on the trunks of palm trees.',
        ref: '20:71'
      },
      {
        by: 'Genesis (Pharaoh and the baker)',
        en: '…he hanged the chief baker.',
        ref: 'Genesis 40:22'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Roman cross (misread into 7:124)',
        items: [
          'Critics assume ṣalb means exclusively a Roman cross',
          'Nailing hands and feet wouldn\'t fit cutting off hands and feet first',
          'Ignores the same root in Joseph\'s story (12:41)'
        ]
      },
      right: {
        title: 'Root ṣ-l-b & biblical parallels',
        items: [
          'Ṣ-l-b means hanging or fastening someone to wood or palm trunks (20:71)',
          'Used for Joseph\'s prison companion (12:41: yuṣlabu)',
          'Genesis 40:22 has Pharaoh hang the baker; Deuteronomy 21:22–23 mentions hanging on a tree'
        ]
      }
    },
    p: [
      'Same root in Joseph and Moses: 12:41 (Joseph): yuṣlabu; 7:124, 20:71, 26:49 (Moses): la-uṣallibannakum. Both from ṣ-l-b: to hang, to fasten on wood.',
      'Palm trunks in Sūrat Ṭā-Hā: 20:71: “I will crucify you on the trunks of palm trees.”',
      'Biblical parallels: Genesis 40:22: “he hanged the chief baker.” Deuteronomy 21:22–23: “if you hang him on a tree, his body shall not remain all night on the tree.”'
    ]
  });

  // 22. Al-Sāmirī: a Samaritan centuries too early?
  up('islam/quran/history/al-samiri', {
    who: 'Show the name\'s true origins',
    facts: [
      ['Verse cited', 'Qurʾān 20:85–97'],
      ['Tafsīr name', 'Mūsā ibn Ẓafar (Maʿārif pp. 143–144)'],
      ['Possible origins', 'Cow-worshipping tribe, Kirmān, Sumerians'],
      ['Biblical precedent', '1 Kings 16:24 (Shemer before Samaria)']
    ],
    quotes: [
      {
        by: '1 Kings (origin of the name Samaria)',
        en: 'Omri bought the hill from Shemer and named the city Samaria after Shemer, its owner.',
        ref: '1 Kings 16:24'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Not from the later city', 'The Qurʾān never says he was from Samaria; al-Ṭabarī notes his calling (daʿwa) shows a single individual'],
        ['Personal name & title', 'Tafsīr names him Mūsā ibn Ẓafar, called al-Sāmirī after a place or a title from his beliefs'],
        ['Classical & historical origins', 'Ibn ʿAbbās (in al-Qurṭubī): cow-worshipping migrants to Egypt; Saʿīd ibn Jubayr: Persian from Kirmān; Mawdūdī: Sumerians'],
        ['Shemer predates Samaria', '1 Kings 16:24 proves Samaria was named after a man called Shemer, so the name existed before the city']
      ]
    },
    p: [
      'Biographical report in Maʿārif al-Qurʾān: Maʿārif al-Qurʾān pp. 143–144, citing Ibn Jarīr from Ibn ʿAbbās: born in the year Pharaoh killed the Israelite boys; his mother hid him in a cave.',
      'Individual agitator in al-Ṭabarī: Al-Ṭabarī on 20:85: the word for his calling (daʿwa) shows a single individual misled them.',
      'Biblical parallel (1 Kings 16): 1 Kings 16:24: Omri bought the hill from Shemer and named the city Samaria after Shemer, its owner.'
    ]
  });

  // 23. Did al-Masjid al-Aqsā exist at the Night Journey? (17:1)
  up('islam/quran/history/masjid-al-aqsa-17-1', {
    who: 'Define masjid & cite Ezra 2:68',
    facts: [
      ['Verse cited', 'Qurʾān 17:1'],
      ['Ḥadīth evidence', 'Bukhārī 335, 1189; Muslim 1397; Aḥmad 11/220'],
      ['Pre-Islamic usage', 'Jawād ʿAlī, al-Mufaṣṣal 11/177'],
      ['Biblical parallel', 'Ezra 2:68 (“house of the LORD” in ruins)']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'Travel only to three mosques: al-Masjid al-Ḥarām, my mosque, and al-Masjid al-Aqṣā.',
        ref: 'Bukhārī 1189; Muslim 1397'
      },
      {
        by: 'Ezra (Temple in ruins)',
        en: 'The house of the LORD which is in Jerusalem.',
        ref: 'Ezra 2:68'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Meaning & history of the site',
        items: [
          'Masjid means a place of prostration, with or without a building (Bukhārī 335)',
          'Pre-Islamic Arabs used masjid for any place of worship (Jawād ʿAlī, al-Mufaṣṣal 11/177)',
          'The Jerusalem sanctuary existed since Sulaymān (Aḥmad 11/220, ṣaḥīḥ); Dome of the Rock (691–692) came later'
        ]
      },
      right: {
        title: 'Contemporaries & Ezra 2:68',
        items: [
          'Neither Companions nor polytheists asked what al-Aqṣā was when 17:1 came (al-Fawzān; Ibn ʿUthaymīn)',
          'The claim of a “ṣaḥīḥ ḥadīth” placing al-Aqṣā in Mecca has no source',
          'Ezra 2:68 calls the ruined site “the house of the LORD which is in Jerusalem”'
        ]
      }
    },
    p: [
      'Three sacred mosques ḥadīth: “Travel only to three mosques: al-Masjid al-Ḥarām, my mosque, and al-Masjid al-Aqṣā” (Bukhārī 1189; Muslim 1397).',
      'Known to contemporaries: Neither the Companions nor the polytheists asked what or where al-Aqṣā was when 17:1 came: it was familiar. Al-Fawzān and Ibn ʿUthaymīn: it was the mosque of the prophets, built before Muḥammad ﷺ. Jawād ʿAlī, al-Mufaṣṣal 11/177: pre-Islamic Arabs used masjid for any place of worship.',
      'Fabricated counter-claim refuted: The claim of a “ṣaḥīḥ ḥadīth” placing al-Aqṣā in Mecca has no source.',
      'Turn the tables with Ezra 2 (verse 68): Ezra 2:68 speaks of “the house of the LORD which is in Jerusalem” while the temple lay in ruins.'
    ]
  });

  // 24. “He made you kings” (5:20): kings in Moses' time?
  up('islam/quran/history/kings-in-moses-time-5-20', {
    who: 'Show the Arabic & biblical usage',
    facts: [
      ['Verse cited', 'Qurʾān 5:20 (mulūk)'],
      ['Root meaning', 'Malaka — to own or control'],
      ['Ḥadīth & tafsīr', 'Muslim 2979; al-Ḥākim 3214 (Ibn ʿAbbās)'],
      ['Biblical parallels', 'Exodus 12:35–38; Revelation 1:6']
    ],
    quotes: [
      {
        by: 'Ibn ʿAbbās (on Qurʾān 5:20)',
        en: 'You had wives and servants.',
        ref: 'al-Ḥākim 3214'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Mulūk in Arabic & ḥadīth',
        items: [
          'Malik comes from malaka (to own/control), not necessarily a monarch',
          'Muslim 2979: the Prophet ﷺ called someone with a house and servant a king',
          'Ibn ʿAbbās (al-Ḥākim 3214): freed from Egyptian slavery, they owned families, cattle, and servants (Exodus 12:35–38)'
        ]
      },
      right: {
        title: 'Non-monarch parallels',
        items: [
          'Kaʿb ibn al-Ashraf called Quraysh mulūk though not monarchs (Ibn Isḥāq; Ibn Mājah 4107)',
          'Translations render 5:20 “possessors” (Saheeh) or “your own masters” (Asad)',
          'Arabic Bible in Revelation 1:6 likewise calls Christians mulūk (“kings”)'
        ]
      }
    },
    p: [
      'Early Arabic & ḥadīth parallels: Kaʿb ibn al-Ashraf called the Quraysh mulūk though they weren\'t monarchs (Ibn Isḥāq). Ibn Mājah 4107 likewise.',
      'Biblical Arabic parallel (Revelation): Revelation 1:6 (Arabic Bible): Christians are made mulūk, kings, though not monarchs.',
      'Scholarly adaptation credit: Adapted from W. A. Cheema, “Refuting missionaries on Qurʾān and kings in Israel before Moses” (ICRAA, 2013).'
    ]
  });

  // 25. Dhū al-Qarnayn's wall: where is it, and was it copied from the Alexander legend?
  up('islam/quran/history/dhul-qarnayn-wall', {
    who: 'Address location and Syriac dates',
    facts: [
      ['Qurʾānic verses', '18:83–98; 21:96'],
      ['Opening in wall', 'Bukhārī 3168; Muslim 2937'],
      ['Scholars on two events', 'Ibn ʿĀshūr 17/33; al-Saʿdī 1/51–52'],
      ['Syriac editor verdict', 'E. A. W. Budge (1889), p. 81']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'Today an opening has been made in the barrier of Gog and Magog like this.',
        ref: 'Bukhārī 3168'
      },
      {
        by: 'E. A. Wallis Budge',
        en: 'The Christian legend has been overloaded with many additions, evidently the work of a Christian redactor.',
        ref: 'The History of Alexander the Great (1889), p. 81'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Where is the wall? (Two events)',
        items: [
          'Bukhārī 3168 already announced an opening in the barrier of Gog and Magog',
          'Al-Saʿdī & Ibn ʿĀshūr: initial breach and outbreak occurred (e.g. Mongols/Tatars)',
          'Final outbreak occurs after the Dajjāl (Muslim 2937; 21:96)'
        ]
      },
      right: {
        title: 'Qurʾān vs Syriac Alexander legend',
        items: [
          'Qurʾān doesn\'t name Alexander, skips dragons/immortality myths, and presents a humble believer (18:98)',
          'Arabic Alexander legends are 8th–9th c.; Ethiopic versions are 14th–16th c.; Josephus omits the wall',
          'Budge (p. 81): Syriac version is late, Christianised, and built against the Huns (Attila), not Gog and Magog'
        ]
      }
    },
    p: [
      'Ibn ʿĀshūr: their emergence is estimated in the late 6th century AH, with the Mongols and Tatars, beginning with Genghis Khan taking Bukhara in 616 AH (al-Taḥrīr wa al-Tanwīr 17/33).',
      'Al-Saʿdī, Risālatān fī Fitnat al-Dajjāl wa Yājūj wa Mājūj 1/51–52: “the first opening of the wall and their initial emergence have already happened… their emergence after the Dajjāl (ḥadīth of al-Nawwās ibn Samʿān) doesn\'t mean they hadn\'t appeared before; emergence means moving from one place to another.”'
    ]
  });

  // 26. ʿUzayr the son of Allah (9:30)?
  up('islam/quran/d-dr-uzayr-being-the-son-of-allah', {
    who: 'Cite al-Ṭabarī\'s two reports',
    forkTitle: '2 follow-up objections they raise',
    forkSub: 'Address the phrasing or Jewish fringe texts',
    optWho: ['If they press “the Jews” phrasing', 'If they deny any Jewish tradition'],
    facts: [
      ['Qurʾānic verses', '9:30–31; 5:64; 3:181'],
      ['Early tafsīr', 'al-Ṭabarī (no. 16619); Muqātil (5:64)'],
      ['Named individuals', 'Finḥāṣ; 4 Madinan Jews'],
      ['Fringe & patristic texts', '4 Ezra 14:9, 50; 2 Enoch 22:11; Augustine']
    ],
    quotes: [
      {
        by: 'Tafsīr al-Ṭabarī (on 9:30)',
        en: 'The commentators differed about who said “ʿUzayr is the son of God”. Some said it was a single man, namely Finḥāṣ.',
        ref: 'Tafsīr al-Ṭabarī no. 16619'
      },
      {
        by: '4 Ezra (2 Esdras)',
        en: 'You shall be taken up from among men, and henceforth you shall live with my Son…',
        ref: '4 Ezra 14:9'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['One man or small Madinan group', 'Al-Ṭabarī records two views: Finḥāṣ alone, or four named Madinan Jews (Sallām, Nuʿmān, Shās, Mālik)'],
        ['Same idiom in 5:64', 'Muqātil ibn Sulaymān explains “the Jews said” in 5:64 as three named men (including Finḥāṣ)'],
        ['Madinan critics never disputed it', 'The Jews of Madinah — the Prophet\'s ﷺ fiercest critics — never objected that 9:30 was false'],
        ['Fringe exaltation of Ezra', 'Newby, 4 Ezra 14:9, 50, 2 Enoch 22:11, and Augustine (City of God 18.35) attest near-angelic Ezra traditions']
      ]
    },
    p: [
      'Single-person report (Finḥāṣ): “The commentators differed about who said ‘ʿUzayr is the son of God’. Some said it was a single man, namely Finḥāṣ.” Ibn Jurayj heard ʿAbdullāh ibn ʿUbayd ibn ʿUmayr say: it was a single man; his name was Phinehas. He is the one who said “Allah is poor and we are rich” (3:181) (Tafsīr al-Ṭabarī no. 16619).',
      'Small-group report (four Madinan Jews): Others: Sallām ibn Mishkam, Nuʿmān ibn Awfā, Shās ibn Qays and Mālik ibn al-Ṣayf came to the Prophet ﷺ and said: “How can we follow you when you have abandoned our qibla and you don\'t claim that ʿUzayr is the son of God?” So Allah revealed 9:30 (Tafsīr al-Ṭabarī).',
      'Silence of Madinan critics: Since al-Ṭabarī lists every opinion he had access to, the verse means a single man or a small group; it doesn\'t describe wider Judaism. The Jews of Madinah, the Prophet\'s ﷺ fiercest critics, never objected that it was false.'
    ]
  });

  // 27. Mary, “sister of Aaron” (19:28)
  up('islam/general/d-av-sonstiges-islam-2/c-maria-schwester-harun-aaron-imran', {
    who: 'Cite the Prophet\'s ﷺ answer to Najrān',
    facts: [
      ['Verses cited', 'Qurʾān 19:28; 66:12'],
      ['Primary ḥadīth', 'Muslim 2135 (ṣaḥīḥ)'],
      ['Questioners', 'Christian monks of Najrān'],
      ['Arabic idiom', 'Tafsīr Ibn Kathīr on 19:28']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (answering Najrān)',
        en: 'They used to name people after the prophets and righteous people who came before them.',
        ref: 'Muslim 2135 (ṣaḥīḥ)'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Objection raised in Najrān', 'Christian monks asked al-Mughīra ibn Shuʿba why 19:28 calls Mary “sister of Aaron” centuries after Moses'],
        ['Prophetic explanation', 'The Prophet ﷺ replied they used to name people after earlier prophets and righteous figures (Muslim 2135)'],
        ['Arabic tribal idiom', 'Ibn Kathīr compares it to addressing descendants as “O brother of Tamīm” or “O brother of Muḍar”']
      ]
    },
    p: [
      'Ḥadīth of al-Mughīra (Muslim 2135): Al-Mughīra ibn Shuʿba: when I came to Najrān, the Christian monks asked me: “You recite ‘O sister of Aaron’ (19:28), but Moses was born long before Jesus.” When I came back to the Messenger of Allah ﷺ I asked him, and he said: “They used to name people after the prophets and righteous people who came before them” (Muslim 2135, ṣaḥīḥ).',
      'Ibn Kathīr on tribal idiom: Ibn Kathīr: it\'s like saying to someone from Tamīm “O brother of Tamīm”, or to someone from Muḍar “O brother of Muḍar” (Tafsīr Ibn Kathīr 19:28).',
      'Archived scan: A scan in the channel adds more (to capture).'
    ]
  });

  // 28. The earth on a whale's back? (Nūn, 68:1)
  up('islam/general/d-av-sonstiges-islam-2/c-wal-ru-cken-erde', {
    who: 'Expose the isrāʾīliyyāt & weak chains',
    forkTitle: '4 follow-up reports they cite',
    forkSub: 'Pick the chain or narrator they bring up next',
    optWho: [
      'If they cite Ibn Abī Ḥātim / Ibn Kathīr',
      'If they cite the water-rock-whale ḥadīth',
      'If they cite Ibn ʿAbbās on Nūn',
      'If they cite Mujāhid, Kaʿb, Muqātil, al-Kalbī'
    ],
    facts: [
      ['Authentic basis', 'None in Qurʾān or ṣaḥīḥ Sunna'],
      ['Origin of story', 'Isrāʾīliyyāt via Kaʿb al-Aḥbār'],
      ['Ḥadīth grading', 'Mawḍūʿ (al-Albānī, al-Ḍaʿīfa 294)'],
      ['Meaning of Nūn', 'Letter, tablet of light, or inkwell']
    ],
    quotes: [
      {
        by: 'Ḍiyāʾ al-Dīn al-Mubārakfūrī',
        en: 'Nothing is reported in the authentic sources of Qurʾān and Sunna about the whale carrying the earth. Everything narrated about it comes from isrāʾīliyyāt.',
        ref: 'Abū al-Shaykh, al-ʿAẓama 4/1400'
      },
      {
        by: 'Ibn ʿAbbās (via ʿIkrima)',
        en: 'Al-Raḥmān and Nūn are separated letters.',
        ref: 'Tafsīr al-Ṭabarī 68:1'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'The rejected whale reports',
        items: [
          'Absent from Qurʾān & authentic Sunna; stops at Ibn ʿAbbās (mawqūf)',
          'Traces to Kaʿb\'s isrāʾīliyyāt, weak/unknown narrators, or fabricated ḥadīth (al-Albānī 294)',
          'Fantastic accretions rejected by al-Mubārakfūrī and Tafsīr al-Qurṭubī editors'
        ]
      },
      right: {
        title: 'Authentic meanings of Nūn (68:1)',
        items: [
          'Ibn ʿAbbās (via ʿIkrima): a separated letter of al-Raḥmān (al-Ṭabarī 68:1)',
          'Thābit al-Bunānī, al-Ḥasan & Qatāda: the inkwell; Muʿāwiya ibn Qurra: a tablet of light',
          'Ibn al-Qayyim: one of al-ḥurūf al-muqaṭṭaʿa opening the sūra'
        ]
      }
    },
    p: [
      'No authentic source: no confirmation in the Qurʾān or the ṣaḥīḥ Sunna; only reports of later generations.',
      'Problematic chain: mawqūf, stopping at Ibn ʿAbbās; it doesn\'t go back to the Prophet ﷺ, which greatly weakens its religious authority.',
      'Doubtful source: Kaʿb al-Aḥbār, a Jewish convert known for introducing isrāʾīliyyāt, the source of many dubious reports, unverified by Islamic sources.',
      'Editor of al-ʿAẓama (4/1400): Abū al-Shaykh al-Aṣbahānī mentioned these in al-ʿAẓama; its editor Ḍiyāʾ al-Dīn al-Mubārakfūrī commented: “Nothing is reported in the authentic sources of Qurʾān and Sunna about the whale carrying the earth. Everything narrated about it comes from isrāʾīliyyāt” (al-ʿAẓama 4/1400).',
      'Contradictory, growing details: over time fantastic elements were added: a bull with exactly 40,000 horns, a precisely described green emerald, a story of the whale and the devil. They have no basis in the main sources.',
      'The scholars: later scholars criticised these reports sharply; the editors of Tafsīr al-Qurṭubī called them baseless and recommended keeping such stories out of religious books.'
    ]
  });

  // 29. Solomon and the ant (27:18–19): from the Legends of the Jews?
  up('islam/quran/sources/solomon-and-the-ant-27-18', {
    who: 'Expose Ginzberg\'s anachronism',
    facts: [
      ['Qurʾānic verses', '27:18–19; 21:81; 34:12'],
      ['Critics\' source', 'Ginzberg (20th c., no source cited)'],
      ['Ginzberg\'s materials', 'Post-Islamic midrashim, Rashi, Zohar'],
      ['Biblical ant motif', 'Proverbs 6:6 (Solomon & the ant)']
    ],
    quotes: [
      {
        by: 'Proverbs (attributed to Solomon)',
        en: 'Go to the ant, O sluggard; consider her ways and be wise.',
        ref: 'Proverbs 6:6'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Ginzberg\'s Legends (20th c.)',
        items: [
          'Compiled in the 20th century with no source given for the ant story',
          'Drew on medieval post-Islamic material (Tanḥuma, Pirkei de-Rabbi Eliezer, Rashi, Zohar)',
          'Solomon reacts angrily and proudly, humiliated by a lecturing ant'
        ]
      },
      right: {
        title: 'Qurʾān (27:18–19)',
        items: [
          'Solomon smiles at the ant\'s words with humility, gratitude, and prayer',
          'An exemplary prophet, while the ant warns without being set above him',
          'May confirm an authentic Solomonic memory alongside Proverbs 6:6'
        ]
      }
    },
    p: [
      'Qurʾān 27 (verse 19) — humble prophet: Solomon smiles at the ant\'s words, shows humility and gratitude and prays to Allah: an exemplary prophet. The ant warns, wise but not set above him.',
      'Legend — proud ruler: Solomon reacts angrily and proudly, throws the ant down; the ant declares itself greater than him because God led him to it, and lectures him until he leaves ashamed: a fable about pride.',
      'Biblical Solomonic memory (Proverbs): Proverbs 6:6, attributed to Solomon: “Go to the ant, O sluggard; consider her ways and be wise.” The Qurʾān may confirm an authentic memory of Solomon and the ant.',
      'Archived reference: A PDF on the Legends of the Jews is in the channel (to capture).'
    ]
  });

  // 30. Abraham in the fire (21:51–70): from Jewish legend?
  up('islam/quran/sources/abraham-in-the-fire-21-68', {
    who: 'Compare dates, texts & Church Fathers',
    facts: [
      ['Genesis Rabbah MS', '12th c. (Vatican MS 30; 10th–11th frags)'],
      ['Targum Jonathan MS', '9th–11th c.; Pseudo-Jonathan post-Islamic'],
      ['Early omissions', 'Absent in Josephus & Palestinian midrashim'],
      ['Church Fathers', 'Jerome & Bede accept it (Gen 15:7)']
    ],
    quotes: [
      {
        by: 'Jerome (on Genesis 12:4)',
        en: 'The tradition of the Hebrews is true… Abram, surrounded by the Babylonian fire, was freed by God\'s help.',
        ref: 'Quaestiones Hebraicae in Genesim'
      },
      {
        by: 'Jerome (on Genesis 15:7)',
        en: 'Who brought you out of Ur of the Chaldeans, that is, out of the fire of the Chaldeans.',
        ref: 'Quaestiones Hebraicae in Genesim'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Jewish midrashim & late MSS',
        items: [
          'Genesis Rabbah\'s oldest MS is 12th c.; Targum Jonathan\'s is 9th–11th c.',
          'Absent in Josephus (Antiquities I.7), Mekhilta, Sifra, and Sifre',
          'Describes a furnace and rescue by an angel/God, with Haran burned (Gen Rabbah 38:13)'
        ]
      },
      right: {
        title: 'Qurʾān 21:51–70 & Church Fathers',
        items: [
          'Describes a great fire made cool directly by Allah (21:69)',
          'Hebrew Ur means “fire” (Isaiah 44:16; Job 31:12)',
          'Jerome and Bede (d. 735) treat the rescue from the Chaldean fire as true'
        ]
      }
    },
    p: [
      'Genesis Rabbah (38, sec. 13) narrative: Nimrod: “Let us bow to fire”; Abraham: “rather to water, which puts out fire… the clouds… the wind… man”; Nimrod throws him into the furnace; Haran, undecided, is burned.',
      'Targum & Pirkei de-Rabbi Eliezer: Targum Jonathan to Isaiah 10 mentions it only in passing, like an insertion, alongside Gog and Magog; Pirkei de-Rabbi Eliezer (8th c.) adds more detail, possibly under Islamic influence.'
    ]
  });

  // 31. Did the Qurʾān copy the Talmud?
  up('islam/quran/d-dr-quran-copies-from-talmud', {
    who: 'Show pre-Talmudic sources',
    facts: [
      ['Talmud reference', 'Babylonian Talmud, Giṭṭin 68'],
      ['1st-century parallels', 'Testimony of Truth; Apocalypse of Adam'],
      ['Qurʾānic verses', '27:17; 34:12; 38:37; 5:48'],
      ['Core principle', 'Talmud preserves earlier oral/written lore']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Talmud draws on older sources', 'The Talmud works with earlier oral and written traditions rather than inventing everything'],
        ['1st-century CE parallels', 'Solomon controlling demons (Giṭṭin 68) appears earlier in Testimony of Truth (NH IX,3) and Apocalypse of Adam (NH V,5)'],
        ['No blanket Qurʾānic denial', 'The Qurʾān never claims all extra-biblical or non-canonical Israelite tradition is false'],
        ['Criterion in 5:48', 'Where shared history appears, the Qurʾān confirms what is true and corrects what isn\'t']
      ]
    },
    p: [
      'Babylonian Talmud (Giṭṭin 68): The Talmud tells of Solomon having demons under his control (scan in the channel).',
      'Testimony of Truth (1st c. CE): The same appears in the Testimony of Truth, a 1st-century CE (pre-Talmudic) apocryphal text (scans in the channel).',
      'Apocalypse of Adam (1st c. CE): It\'s also in the Apocalypse of Adam, another 1st-century CE pre-Talmudic text (scans in the channel).'
    ]
  });

  // 32. The clay birds (5:110) and the Infancy Gospel
  up('islam/quran/d-dr-the-quran-uses-apocrypha-texts', {
    who: 'Refute Aquinas with early MSS',
    forkTitle: '3 follow-up objections they raise',
    forkSub: 'Pick the apocryphal or textual angle they push',
    optWho: [
      'If they reject apocrypha outright',
      'If they demand early evidence',
      'If they cite the Arabic Infancy Gospel'
    ],
    facts: [
      ['2nd-century witness', 'Irenaeus, Against Heresies 1.20.1'],
      ['New MS discovery', 'P.Hamb.Graec. 1011 (4th–5th c.)'],
      ['Paul\'s apocrypha', '2 Timothy 3:8 (Jannes & Jambres)'],
      ['Late Arabic/Latin texts', 'Arabic Infancy & Pseudo-Matthew (8th–9th c.)']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Māʾida',
        en: '…when you fashioned from clay the likeness of a bird with My permission, then breathed into it, and it became a bird with My permission.',
        ref: '5:110'
      },
      {
        by: 'Paul — 2 Timothy',
        en: 'Just as Jannes and Jambres opposed Moses, so also these men oppose the truth.',
        ref: '2 Timothy 3:8'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Early 2nd-century witness', 'Irenaeus (Against Heresies 1.20.1) quotes the Infancy Gospel of Thomas early; anonymous works can preserve true reports'],
        ['Paul cites apocrypha', '2 Timothy 3:8 names “Jannes and Jambres” from the 1st-century Book of Jannes and Jambres, not from Exodus'],
        ['P.Hamb.Graec. 1011 (4th–5th c.)', 'Newly identified manuscript containing “Vivification of the Sparrows”, confirming early attestation of the clay-bird miracle'],
        ['Arabic Gospel & Pseudo-Matthew are late', 'Arabic Infancy (8th–9th c., from Syriac) and Latin Pseudo-Matthew (8th–9th c., unknown in East) postdate the Qurʾān; Ehrman notes Greek MSS differ radically']
      ]
    },
    p: [
      'Sūrat al-Māʾida (verse 110) text: “…when you fashioned from clay the likeness of a bird with My permission, then breathed into it, and it became a bird with My permission.”',
      'Early witness of Irenaeus: Irenaeus quotes the Infancy Gospel\'s material in the 2nd century (scan in the channel). Thomas most likely didn\'t write it, but an anonymous text can still preserve true reports.'
    ]
  });

  // 33. Did the Qurʾān copy Imruʾ al-Qays? (54:1)
  up('islam/general/d-av-sonstiges-islam-1/c-mondspaltung-poet', {
    who: 'Show Tisdall abandoned the claim',
    forkTitle: '2 follow-up claims they make',
    forkSub: 'Address later attributions or Cheikho\'s Christian-poet claim',
    optWho: ['If they cite later attributions', 'If they claim he was Christian'],
    facts: [
      ['Poet\'s death', 'c. 540 CE (30 yrs before Prophet ﷺ)'],
      ['Prophet\'s ﷺ birth', '570 CE'],
      ['Missionary retraction', 'W. St. Clair Tisdall (1905), pp. 49–50'],
      ['Cheikho refuted', 'H. Camille (1967), pp. 180–181']
    ],
    quotes: [
      {
        by: 'W. St. Clair Tisdall',
        en: 'This claim is very probably false, since Imruʾ al-Qays died about 540, while Muhammad was only born in 570.',
        ref: 'The Original Sources of the Qurʾān (1905), pp. 49–50'
      },
      {
        by: 'Hechame Camille',
        en: 'None of the ten arguments put forward by Cheikho allows us to confirm that the great poet of Kinda belonged to Christianity.',
        ref: 'Étude critique (1967), pp. 180–181'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Timeline & textual impossibility',
        items: [
          'Imruʾ al-Qays died c. 540 CE; Prophet ﷺ born 570 CE; moon split decades later',
          'Lines are absent from authentic collections; later writers inserted Qurʾānic verses into his poems',
          'Even W. St. Clair Tisdall abandoned the plagiarism claim (1905)'
        ]
      },
      right: {
        title: 'Not a Christian poet either',
        items: [
          'Louis Cheikho\'s claim that he was Christian was refuted by Hechame Camille (1967)',
          'All ten arguments fail and confuse the poet with a king of Kinda',
          'Remains a pagan poet with no belief in the Last Day and no Christian themes'
        ]
      }
    },
    p: [
      'Tisdall\'s own retraction (1905): “It has sometimes been said in the East that Muhammad not only adopted many of the old customs and rites of the heathen Arabs, but that he was also guilty of plagiarism, borrowing parts of certain verses of Imruʾ al-Qays. This claim is very probably false, since Imruʾ al-Qays died about 540, while Muhammad was only born in 570” (Tisdall, The Original Sources of the Qurʾān, 1905, pp. 49–50).',
      'Stylistic contrast: Tisdall recognised the stylistic differences between Imruʾ al-Qays\' poetry and the Qurʾān.'
    ]
  });

  // 34. Did the Qurʾān copy Umayya ibn Abī al-Ṣalt?
  up('islam/general/d-av-sonstiges-islam-2/c-ummaya-dichter', {
    who: 'Show the poems are later forgeries',
    facts: [
      ['Academic consensus', 'Tor Andrae; J. W. Hirschberg'],
      ['Critical Dīwān editor', 'ʿAbd al-Ḥafīẓ al-Saṭlī'],
      ['Origin of parallels', 'Later tafsīr via storytellers (quṣṣāṣ)'],
      ['Qurʾānic context', '7:175; Sūrat Yāsīn (36)']
    ],
    quotes: [
      {
        by: 'Umayya ibn Abī al-Ṣalt (after hearing Yāsīn)',
        en: 'I bear witness that he is upon the truth.',
        ref: 'Tafsīr on Qurʾān 7:175'
      },
      {
        by: 'Qurʾān — Sūrat al-Aʿrāf',
        en: 'Recite to them the story of the one to whom We gave Our signs, but he detached himself from them, so Satan pursued him.',
        ref: '7:175'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Borrowed from later tafsīr', 'Tor Andrae and others found narrative elements drawn from later Qurʾān commentaries via storytellers (quṣṣāṣ)'],
        ['Bulk of poetry forged', 'ʿAbd al-Ḥafīẓ al-Saṭlī accepts only a tiny number of verses as authentic; the bulk is later forgery'],
        ['Jewish & Christian parallels', 'Hirschberg noted parallels (especially Haggada) reflect shared pre-Islamic lore or later Islamic-era insertions'],
        ['Umayya testified to Yāsīn', 'Challenged the Prophet ﷺ, heard Sūrat Yāsīn, bore witness he was upon the truth, yet died in envy (7:175)']
      ]
    },
    p: [
      'Influence of later commentary: Tor Andrae and others found elements in the poems taken from later Qurʾān commentaries. Many poems are therefore products of later Islamic tradition, not Umayya\'s time.',
      'Jewish and Christian sources: Hirschberg and others showed parallels with Jewish and Christian texts, especially the Haggada. Umayya and later Islamic sources may have drawn on the same pre-Islamic traditions, or the themes were inserted later to fit Islamic theology.',
      'Scholarly scepticism: researchers such as ʿAbd al-Ḥafīẓ al-Saṭlī accept only a very small number of verses as authentic; the bulk is skilfully forged or derives from later Islamic tradition.',
      'Overall: the closeness to the Qurʾān, the later Islamic and biblical influences and the critical assessments lead to the conclusion that most of the poetry attributed to Umayya isn\'t authentic. (A scan in the channel; to capture.)'
    ]
  });
})();
