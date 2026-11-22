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
    if (!a) { console.warn('visual-audit-6a: missing', key); return; }
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

  // 1. The seven aḥruf: different Qurʾāns?
  up('islam/quran/preservation/d-dr-defense-of-ahruf', {
    who: 'Refute the objection',
    forkTitle: '3 follow-up objections they raise',
    forkSub: 'Pick the line they push next',
    optWho: ['If they redefine “seven”', 'If they ask where the six went', 'If they cite Ibn Masʿūd'],
    facts: [
      ['Revealed modes', '7 aḥruf (rukhṣa)'],
      ['Primary ḥadīth', 'Bukhārī 3219, 4991, 4992'],
      ['Purpose', 'Dialect ease for all Arabs'],
      ['Standardisation', 'ʿUthmānic consensus']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (via Ibn ʿAbbās)',
        en: 'Jibrīl taught me one ḥarf; I kept asking him to increase it and he increased it until it ended at seven.',
        ref: 'Bukhārī 3219'
      },
      {
        by: 'Prophet Muḥammad ﷺ (via Abū Hurayra)',
        en: 'The Qurʾān was revealed in seven aḥruf; disputing about the Qurʾān is disbelief; recite what you know of it and leave what you don\'t know to one who knows.',
        ref: 'Musnad Aḥmad 7989'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Seven aḥruf revealed', 'Concession (rukhṣa) so Arabs of every tribe and dialect could recite'],
        ['Final Review (al-ʿarḍa al-akhīra)', 'Jibrīl reviewed the whole Qurʾān twice in the final year; many variants were abrogated'],
        ['ʿUthmānic consensus', 'To prevent disputes, the Companions united on what fit ʿUthmān\'s script'],
        ['Shādhdh readings', 'Irregular reports are explanatory glosses, abrogated aḥruf, or lack authentic chains']
      ]
    },
    p: [
      'Jibrīl\'s command: “Allah commands you to teach your Umma the Qurʾān in seven aḥruf” (al-Nasāʾī 939; Aḥmad 21172).',
      'ʿUmar and Hishām ibn Ḥakīm: ʿUmar heard Hishām recite al-Furqān differently: “Who taught you this?” — “The Messenger of Allah ﷺ.” The Prophet ﷺ said of both: “So it was revealed” (Bukhārī 4992).',
      'Other Companions confirmed: The same happened with Abū Juhaym al-Anṣārī (Aḥadīth Ismāʿīl ibn Jaʿfar 325), ʿAmr ibn al-ʿĀṣ (Aḥmad 17821) and Ubayy (Aḥmad 21151): each time he confirmed all variants. Ibn Masʿūd and al-Aḥqāf: “Let each man recite as he was taught” (Muslim 820).',
      'Warning against disputing: Abū Hurayra reports: “The Qurʾān was revealed in seven aḥruf; disputing about the Qurʾān is disbelief; recite what you know of it and leave what you don\'t know to one who knows” (Aḥmad 7989). Ḥudhayfa warned: don\'t turn away from a ḥarf you were taught because you dislike it (Aḥmad 23273).',
      'Counting up to seven: Ibn ʿAbbās reports: “Jibrīl taught me one ḥarf; I kept asking him to increase it and he increased it until it ended at seven” (Bukhārī 3219; Abū ʿUbayd, Faḍāʾil 730). Ubayy reports: “one ḥarf or two?… until we reached seven” (Bukhārī 4991).',
      'Yaqeen Institute paper: The Yaqeen Institute paper “The ʿUthmānic Codex” (linked by Deenresponds) explains how ʿUthmān\'s codex preserved what was revealed.'
    ]
  });

  // 2. One author behind the Qurʾān (explainer)
  up('islam/quran/preservation/d-ia-scholarly-attestations', {
    visual: {
      kind: 'compare',
      left: {
        title: 'Qurʾān vs Ḥadīth style',
        items: [
          {
            h: 'Distinct from ḥadīth',
            sub: 'Does not match the Prophet\'s ﷺ speech',
            p: ['The style of the Qurʾān doesn\'t match the Prophet\'s ﷺ own speech recorded in the ḥadīth, which it would if he had composed it.']
          }
        ]
      },
      right: {
        title: 'Internal Qurʾānic unity',
        items: [
          {
            h: 'One voice throughout',
            sub: 'Single author for the entire book',
            p: ['The same analysis indicates a single author for the entire Qurʾān, not a collection stitched together over time.']
          }
        ]
      }
    },
    facts: [
      ['Method', 'Statistical style analysis'],
      ['Comparison', 'Qurʾān vs ḥadīth corpus'],
      ['Finding 1', 'Distinct from Prophet\'s ﷺ speech'],
      ['Finding 2', 'Single author throughout']
    ],
    cardVisual: {
      kind: 'compare',
      left: {
        title: 'Prophet\'s ﷺ speech (Ḥadīth)',
        items: [
          'Distinct stylistic profile',
          'Would match the Qurʾān if he had composed it'
        ]
      },
      right: {
        title: 'Qurʾānic text',
        items: [
          'Does not match ḥadīth style',
          'Single unified author across the whole book'
        ]
      }
    }
  });

  // 3. Ibn Mas’ud & Surahs 113–114
  up('islam/quran/preservation/d-ia-common-claims/t-ibn-mas-ud-surahs-113-114', {
    who: 'Refute the claim',
    forkTitle: '2 ways to examine Ibn Masʿūd\'s codex',
    forkSub: 'Check the recognised transmission or classical tafsīr',
    optWho: ['If they press Sūrahs 113–114', 'If they cite his muṣḥaf differences'],
    facts: [
      ['Subject', 'Sūrahs 113–114 (al-Muʿawwidhatān)'],
      ['Classical source', 'al-Nawawī, Sharḥ Muslim 6/109'],
      ['Ḥadīth evidence', 'Sunan Abī Dāwūd'],
      ['Transmission', 'Ibn Masʿūd\'s qirāʾa has all 114']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Personal muṣḥaf notes',
        items: [
          'Individual copies held personal explanations and notes',
          'al-Māzarī: omitting well-known sūrahs meant not feeling everything had to be written'
        ]
      },
      right: {
        title: 'Transmitted Qurʾān (114 sūrahs)',
        items: [
          'Prophet ﷺ taught al-Falaq and al-Nās as Qurʾān (Sunan Abī Dāwūd)',
          'Recognised recitation traced to Ibn Masʿūd includes all 114 sūrahs'
        ]
      }
    },
    p: [
      'Personal copy vs public text: No — what critics point to are personal codices, not the Qurʾān the community accepted.',
      'The objection stated: The argument says Ibn Masʿūd (رضي الله عنه) left Sūrahs 113 (al-Falaq) and 114 (al-Nās) out of his personal codex, and Ubayy ibn Kaʿb (رضي الله عنه) had extra sūrahs in his, claiming even the best teachers disagreed on what counts as Qurʾān.'
    ]
  });

  // 4. Game of Telephone
  up('islam/quran/preservation/d-ia-common-claims/t-game-of-telephone', {
    who: 'Reject the analogy',
    facts: [
      ['Telephone game', 'Single linear chain'],
      ['Qurʾānic method', 'Tawātur (mass transmission)'],
      ['Written check', 'Scribes from day one'],
      ['Standardisation', 'Copies sent with reciters']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Game of Telephone',
        items: [
          'Single person-to-person chain',
          'One weak link corrupts everything downstream',
          'Oral only with no cross-checking'
        ]
      },
      right: {
        title: 'Qurʾānic Tawātur',
        items: [
          'Prophet ﷺ recited to hundreds of Companions simultaneously',
          'Thousands of students cross-checked multiple teachers',
          'Scribes wrote verses from day one and read them back to him'
        ]
      }
    },
    p: [
      'False analogy: No — the two have almost nothing in common.',
      'The objection stated: The argument says the Qurʾān was passed down orally, oral transmission distorts messages, and telephone proves it: a phrase gets mangled after passing through a line of people. It sounds reasonable until you look at how the Qurʾān was actually transmitted.'
    ]
  });

  // 5. The Verse of Stoning
  up('islam/quran/preservation/d-ia-common-claims/t-the-verse-of-stoning', {
    who: 'Answer the charge',
    forkTitle: '2 angles on ʿUmar\'s narration',
    forkSub: 'Examine what ʿUmar said or why it isn\'t in the muṣḥaf',
    optWho: ['If they quote ʿUmar\'s narration', 'If they ask why he didn\'t write it'],
    facts: [
      ['Primary ḥadīth', 'Bukhārī 6830; Muslim 1691a'],
      ['Further sources', 'Tirmidhī 1431; Aḥmad 21086'],
      ['Mechanism', 'Naskh al-tilāwah (Qurʾān 2:106)'],
      ['Scholarly consensus', 'al-Bayhaqī, al-Sunan 15553']
    ],
    quotes: [
      {
        by: 'ʿUmar ibn al-Khaṭṭāb',
        en: 'The Messenger of Allah ﷺ stoned, Abū Bakr stoned and I stone. If I didn\'t hate adding to the Book of Allah I would have written it in the muṣḥaf; I fear people will come, not find it in the Book of Allah, and disbelieve in it.',
        ref: 'Tirmidhī 1431 (ṣaḥīḥ)'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Ruling revealed', 'The ruling of stoning was revealed and applied by the Prophet ﷺ'],
        ['Writing declined', 'When ʿUmar asked to write it, the Prophet ﷺ disliked it (Aḥmad 21086; al-Bayhaqī 15553)'],
        ['Recitation lifted', 'Naskh al-tilāwah (cf. 2:106): no longer recited as part of the muṣḥaf'],
        ['Ruling preserved', 'Applied by the Prophet ﷺ, Abū Bakr, and ʿUmar; ʿUmar refused to add to Allah\'s Book']
      ]
    },
    p: [
      'Recitation lifted, ruling kept: The verse\'s recitation was lifted, but the ruling was never lost, and ʿUmar (رضي الله عنه) never said anything was wrongly removed.',
      'The objection stated: Critics point to a narration where ʿUmar says the verse of stoning was revealed and the Companions knew it, yet it isn\'t in the muṣḥaf, claiming a verse went missing because people feared adding to the Qurʾān.'
    ]
  });

  // 6. Why was Qur'an revealed in segments rather than all at once
  up('islam/quran/preservation/d-ia-common-claims/t-why-was-qur-an-revealed-in-segments-rather-than-al', {
    who: 'Show the Qurʾānic answer',
    facts: [
      ['Revelation span', '~23 years'],
      ['Key verses', 'Qurʾān 25:32; 17:106'],
      ['Supporting verses', 'Qurʾān 6:34; 48:2'],
      ['Reference', 'Bilal Philips, Usool at-Tafseer pp. 135–146']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Furqān',
        en: 'And those who disbelieve say, "Why was the Qur\'an not revealed to him all at once?" Thus it is that We may strengthen your heart thereby. And We have spaced it distinctly.',
        ref: '25:32'
      },
      {
        by: 'Qurʾān — Sūrat al-Isrāʾ',
        en: 'And [it is] a Qur\'an which We have separated [by intervals] that you might recite it to the people over a prolonged period. And We have sent it down progressively.',
        ref: '17:106'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Gradual over ~23 years', 'Spaced distinctly rather than delivered all at once (25:32; 17:106)'],
        ['Strengthening the Prophet ﷺ', 'Sustained reassurance amid rejection, mockery, and persecution (6:34)'],
        ['Addressing live events', 'Spoke directly to situations as they unfolded, such as Ḥudaybiyyah (48:2)']
      ]
    },
    p: [
      'Scholarly reference: Based on Dr. Abu Ameenah Bilal Philips\'s Usool at-Tafseer: The Methodology of Qur\'anic Interpretation, pp. 135–146.',
      'Twenty-three years of revelation: The Qurʾān came over about twenty-three years, not all at once. The disbelievers asked why, and the Qurʾān answers them itself.',
      'Sūrat al-Furqān 25.32: “And those who disbelieve say, \'Why was the Qur\'an not revealed to him all at once?\' Thus it is that We may strengthen your heart thereby. And We have spaced it distinctly.” (25:32).',
      'Sūrat al-Isrāʾ 17.106: “And [it is] a Qur\'an which We have separated [by intervals] that you might recite it to the people over a prolonged period. And We have sent it down progressively.” (17:106).',
      'Reasons explored: Let\'s look at the reasons.'
    ]
  });

  // 7. Uthman "Burning" the Mushafs
  up('islam/quran/preservation/d-ia-common-claims/t-uthman-burning-the-mushafs', {
    who: 'Explain the standardisation',
    facts: [
      ['Source sheets', 'Ḥafṣah\'s copy (Bukhārī 4987)'],
      ['First compilation', 'Abū Bakr post-Yamāmah (Bukhārī 7191)'],
      ['Lead scribe', 'Zayd ibn Thābit (Bukhārī 4990)'],
      ['Trigger', 'Ḥudhayfah saw regional disputes']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Abū Bakr\'s collection', 'Zayd ibn Thābit compiled the sheets after the Battle of Yamāmah (Bukhārī 7191)'],
        ['Copied under ʿUthmān', 'ʿUthmān borrowed Ḥafṣah\'s sheets and had a four-man committee copy them (Bukhārī 4987)'],
        ['Originals returned', 'The original sheets were returned to Ḥafṣah and official copies sent to the provinces'],
        ['Divergent copies burned', 'On Ḥudhayfah\'s warning, conflicting copies were burned to prevent community splits']
      ]
    },
    p: [
      'Standardisation, not alteration: No — he burned copies that disagreed with each other, and only after making new copies from the collection that already existed.',
      'The real questions: Critics say that if ʿUthmān burned manuscripts, he must have been hiding something. The report does say he ordered other materials burned, so the real questions are why he did it, and what he replaced them with.'
    ]
  });

  // 8. Ibn Mas’ud’s Codex
  up('islam/quran/preservation/d-ia-common-claims/t-ibn-mas-ud-s-codex', {
    who: 'Show what actually differed',
    facts: [
      ['Critics\' sources', 'Tirmidhī 3104; Kitāb al-Maṣāḥif'],
      ['Example cited', 'Sūrat al-Layl 92:3 (Bukhārī 4944)'],
      ['Nature of difference', 'Minor wording, identical meaning'],
      ['Doctrinal impact', 'None']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Layl (standard text)',
        ar: 'وَمَا خَلَقَ الذَّكَرَ وَالْأُنْثَىٰ',
        en: 'By He who created the male and the female',
        ref: '92:3 (cf. Bukhārī 4944)'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'ʿAlqamah\'s narration (92:3)',
        items: [
          'وَالذَّكَرِ وَالْأُنْثَىٰ — “By the male and the female” (Bukhārī 4944)',
          'Same verse, same oath, same subject'
        ]
      },
      right: {
        title: 'Standard text (92:3)',
        items: [
          'وَمَا خَلَقَ الذَّكَرَ وَالْأُنْثَىٰ — “By He who created the male and the female”',
          'Same meaning; no doctrine, ruling, or story changes'
        ]
      }
    },
    p: [
      'Process dispute, not corruption: He disagreed with the process, but nothing he held shows the Qurʾān was corrupted.',
      'The objection stated: Critics point to Ibn Masʿūd\'s objection to Zayd ibn Thābit (Tirmidhī 3104) and his instruction to hide the muṣḥafs (Ibn Abī Dāwūd, Kitāb al-Maṣāḥif), claiming this proves the Uthmanic text is flawed — until you look at what his muṣḥaf actually differed in.'
    ]
  });

  // 9. Did Sūrat al-Aḥzāb have 200 verses?
  up('islam/quran/preservation/d-ia-common-claims/surah-33-two-hundred-verses', {
    who: 'Expose the weak chains',
    facts: [
      ['Current count', '73 verses (mutawātir)'],
      ['ʿĀʾisha report', 'Weak via Ibn Lahīʿa (al-Itqān)'],
      ['70 forgotten verses', 'Weak via ʿAbdullāh ibn Shurayk'],
      ['Ubayy report', 'ʿĀṣim ibn Bahdala (memory issue)']
    ],
    quotes: [
      {
        by: 'Shuʿayb al-Arnaʾūṭ',
        en: 'the chain is weak; ʿĀṣim ibn Bahdala, though considered trustworthy, had problems with his memory, so one can\'t rely on him in a unique report like this',
        ref: 'Musnad Aḥmad 25/134 (on 21207)'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Reported “200 verses” chains',
        items: [
          'ʿĀʾisha\'s report goes through Ibn Lahīʿa (rejected)',
          '“70 forgotten verses” goes through ʿAbdullāh ibn Shurayk',
          'Ubayy\'s chain rests on ʿĀṣim ibn Bahdala or Yazīd ibn Abī Ziyād'
        ]
      },
      right: {
        title: 'Accepted Qurʾānic reality',
        items: [
          '73 verses preserved by unbroken mass memorisation',
          'Even if true, it reflects ongoing revelation or abrogation (Ibn ʿĀshūr 6/246)'
        ]
      }
    }
  });

  // 10. Ubayy's muṣḥaf with 116 sūras
  up('islam/quran/preservation/d-ia-common-claims/ubayy-mushaf-116-surahs', {
    facts: [
      ['Extra texts', 'al-Khalʿ and al-Ḥafd (qunūt)'],
      ['Status', 'Abrogated duʿāʾ (al-Itqān 2/68)'],
      ['Distinction proof', 'Bukhārī 6438 + Sūra 102'],
      ['Chain grading', 'Weak reports (al-Aʿẓamī p. 203)']
    ],
    quotes: [
      {
        by: 'Bukhārī 6438 (cited saying)',
        en: 'if the son of Ādam had a valley of gold…',
        ref: 'Bukhārī 6438'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Private notes & qunūt duʿāʾ',
        items: [
          'al-Khalʿ and al-Ḥafd were supplications, later abrogated as Qurʾān',
          'Scarce writing material led Companions to jot notes in personal copies'
        ]
      },
      right: {
        title: 'Mutawātir Qurʾān',
        items: [
          'Ubayy knew what was Qurʾān vs non-Qurʾān (cf. Bukhārī 6438)',
          'Reports of Ubayy\'s muṣḥaf differing from ʿUthmān\'s are weak (al-Aʿẓamī p. 203)'
        ]
      }
    },
    p: [
      'Ahmad von Denffer, ʿUlūm al-Qurʾān: Ubayy\'s muṣḥaf had two extra chapters and an extra āya; they contain supplications and praise, were originally revelation and later abrogated.',
      'Al-Suyūṭī, al-Itqān 2/68: among what was abrogated are the two qunūt sūras; they remained in some Companions\' memory because they were duʿāʾ.',
      'Bukhārī 6438: a saying about human greed (“if the son of Ādam had a valley of gold…”) was thought by some to be Qurʾān until Sūra 102 was revealed. Ubayy clearly knew what was Qurʾān and what wasn\'t; his muṣḥaf held personal notes.',
      'Personal copies (al-Zurqānī): Lack of writing material meant Companions wrote abrogated verses and notes into their copies; these weren\'t part of the mass-transmitted (mutawātir) text (Manāhil al-ʿIrfān p. 222).',
      'Al-Aʿẓamī: reports that Ubayy\'s muṣḥaf differed from ʿUthmān\'s are weak; the extra chapters aren\'t authentic through those routes (The History of the Qurʾānic Text, p. 203). Aḍwāʾ al-Bayān 2/451: abrogated by mutawātir Sunna, they are no longer revelation, used as duʿāʾ in qunūt.'
    ]
  });

  // 11. ʿĀʾisha's muṣḥaf: “…and those in the first rows”
  up('islam/quran/preservation/d-ia-common-claims/aisha-mushaf-first-rows', {
    facts: [
      ['Verse cited', 'Qurʾān 33:56'],
      ['Report grading', 'Weak single chain'],
      ['Actual source', 'Ṣaḥīḥ Ibn Ḥibbān 2163–2164'],
      ['Explanation', 'Ḥadīth conflated with verse']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (via ʿĀʾisha)',
        ar: 'إنَّ اللَّهَ عَزَّ وَجَلّ وملَائِكَتَهُ يُصلون علَى الصُّفُوفِ الْأُوَلِ',
        en: 'Allah and His angels send blessings on the first rows',
        ref: 'Ṣaḥīḥ Ibn Ḥibbān 2163–2164'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Weak Ḥumayda report',
        items: [
          'Weak single line (al-Itqān 3/82; Faḍāʾil 1/324; al-Maṣāḥif 238)',
          'Mixes the added phrase into Qurʾān 33:56'
        ]
      },
      right: {
        title: 'Authentic prophetic ḥadīth',
        items: [
          '“Allah and His angels send blessings on the first rows” (Ibn Ḥibbān 2163–2164)',
          'Separate ḥadīth also narrated from al-Barāʾ ibn ʿĀzib'
        ]
      }
    },
    p: [
      'Actual ḥadīth wording: عَنْ عَائِشَةَ قَالَتْ: قَالَ النَّبِيُّ ﷺ: «إنَّ اللَّهَ عَزَّ وَجَلّ وملَائِكَتَهُ يُصلون علَى الصُّفُوفِ الْأُوَلِ» (Ibn Ḥibbān 2163–2164; Ibn al-Muqriʾ, al-Muʿjam).',
      'Channel note: Scans of the grading in the channel (to capture).'
    ]
  });

  // 12. Abū al-Dardāʾ and 92:3: “by the male and the female”
  up('islam/quran/preservation/d-ia-common-claims/abu-darda-92-3', {
    facts: [
      ['Verse', 'Qurʾān 92:3'],
      ['Source', 'Ṣaḥīḥ al-Bukhārī 4943'],
      ['Consensus', 'Abū Bakr, ʿUmar, ʿUthmān, ʿAlī & others'],
      ['Scholars', 'al-Qurṭubī; Qāḍī ʿIyāḍ; al-Nawawī; Ibn Ḥajar']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Lone report (khabar wāḥid)',
        items: [
          'Single witness against the whole Umma',
          'al-Qurṭubī: affected by forgetfulness, or abrogated reading (Qāḍī ʿIyāḍ, al-Māzarī)'
        ]
      },
      right: {
        title: 'Mass transmission (mutawātir)',
        items: [
          'Transmitted by Abū Bakr, ʿUmar, ʿUthmān, ʿAlī & every other Companion',
          'Neither Abū al-Dardāʾ nor Ibn Masʿūd taught it later; Kūfa and Shām followed ʿUthmān\'s muṣḥaf'
        ]
      }
    },
    p: [
      'Lone report vs tawātur: A lone report (khabar wāḥid) against the mass transmission is rejected.',
      'Abrogated reading: Qāḍī ʿIyāḍ and al-Māzarī say it was a reading whose recitation was abrogated, and those who differed hadn\'t learned of the abrogation; it isn\'t part of what was agreed in ʿUthmān\'s compilation. Ibn Ḥajar and al-Nawawī likewise.',
      'Later practice in Kūfa and Shām: Neither Abū al-Dardāʾ nor Ibn Masʿūd taught it later; Kūfa and Shām followed ʿUthmān\'s muṣḥaf. (See also the aḥruf card.)',
      'Channel reference: A PDF on this is in the channel (to capture).'
    ]
  });

  // 13. “The Qurʾān has 1,027,000 letters”
  up('islam/quran/preservation/d-ia-common-claims/one-million-letters', {
    facts: [
      ['Claimed count', '1,027,000 letters'],
      ['Source', 'al-Ṭabarānī, al-Awsaṭ (single chain)'],
      ['Problem narrator', 'Muḥammad ibn ʿUbayd al-ʿAsqalānī'],
      ['Verdict', 'Fabricated / false (al-Dhahabī, al-Albānī)']
    ],
    quotes: [
      {
        by: 'al-Dhahabī',
        en: 'he specialised in false reports [citing this ḥadīth no. 4073: “false”]',
        ref: 'Mīzān al-Iʿtidāl 3/639 (no. 7918)'
      },
      {
        by: 'al-Albānī',
        en: 'the weakness is evident and needs no lengthy discussion.',
        ref: 'al-Silsila al-Ḍaʿīfa 9/70–71'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Single chain in al-Ṭabarānī', 'al-Ṭabarānī notes it comes from ʿUmar only through this one chain'],
        ['Forger identified', 'Muḥammad ibn ʿUbayd ibn Ādam al-ʿAsqalānī “specialised in false reports” (al-Dhahabī)'],
        ['Consensus grading', 'Ruled false/weak by al-Dhahabī, Ibn Ḥajar (Lisān al-Mīzān), and al-Albānī']
      ]
    },
    p: [
      'Al-Dhahabī, Mīzān al-Iʿtidāl 3/639 (no. 7918): Muḥammad ibn ʿUbayd… “he specialised in false reports”, citing this ḥadīth (no. 4073): “false”.',
      'Ibn Ḥajar and al-Haythamī: Ibn Ḥajar confirmed it in Lisān al-Mīzān; al-Haythamī mentions it (Majmaʿ 7/163).',
      'Al-Albānī, al-Silsila al-Ḍaʿīfa 9/70–71: the weakness is evident and needs no lengthy discussion.'
    ]
  });

  // 14. Did al-Suyūṭī gloss ʿurub (56:37) as “prostitutes”?
  up('islam/quran/preservation/d-ia-common-claims/suyuti-urub-56-37', {
    facts: [
      ['Verse', 'Qurʾān 56:37 (ʿurub)'],
      ['Manuscript word', 'غنجة (ghanija — loving, playful)'],
      ['Faulty print', 'Dr. Muḥammad Sayyid al-Rifāʿī edition'],
      ['Other editions', 'ʿĀdil al-ʿĀmil & p. 26 agree on ghanija']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Single print error (al-Rifāʿī)',
        items: [
          'Only Dr. Muḥammad Sayyid al-Rifāʿī\'s print edition has qaḥba',
          'Contradicts page 26 of the very same book'
        ]
      },
      right: {
        title: 'Manuscript & all other editions',
        items: [
          'Manuscript has غنجة (ghanija: affectionate, loving, playful)',
          'Confirmed by ʿĀdil al-ʿĀmil\'s edition and consensus of linguists on p. 26'
        ]
      }
    },
    p: [
      'ʿĀdil al-ʿĀmil edition: The edition of ʿĀdil al-ʿĀmil does not say ʿurub means ghahba/qaḥba.',
      'Same book, p. 26: the mufassirūn and linguists agree ʿurub is ghanija: loving, playful.',
      'Manuscript evidence: The manuscript of the tafsīr has غنجة, not القحبة: an error or interpolation in al-Rifāʿī\'s edition. (6 scans in the channel; to capture.)'
    ]
  });

  // 15. Ubayy's 33:6: “and he is a father to them”
  up('islam/quran/preservation/d-ia-common-claims/ubayy-33-6-father', {
    facts: [
      ['Verse', 'Qurʾān 33:6'],
      ['Report source', 'Kanz al-ʿUmmāl 2/569'],
      ['Narrator', 'Bajāla al-Tamīmī (Tirmidhī 1586–1587)'],
      ['Meaning', 'Metaphorical, like “mothers” in 33:6']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Ubayy\'s private copy',
        items: [
          'Held an abrogated or explanatory reading Ubayy did not drop',
          'Ubayy admitted being preoccupied as the markets occupied ʿUmar'
        ]
      },
      right: {
        title: 'Qurʾān 33:6 & meaning',
        items: [
          'ʿUmar told the boy to erase the note from his muṣḥaf',
          '“Father” is metaphorical, matching his wives being “mothers” in the same verse'
        ]
      }
    },
    p: [
      'Bajāla al-Tamīmī: ʿUmar told the boy to erase it; the boy refused, saying it was in Ubayy\'s muṣḥaf; ʿUmar went to Ubayy (raising his voice in one version); Ubayy replied that the Qurʾān occupied him as the noise of the markets occupied ʿUmar.',
      'On Bajāla: al-Shāfiʿī\'s editor calls him unknown, but al-Jāḥiẓ lists him among Baṣra\'s ascetics, Mujāhid ibn Mūsā and Abū Zurʿa call him reliable, and al-Tirmidhī graded two of his ḥadīth ḥasan ṣaḥīḥ (1586–1587).',
      'Channel scans: Eight scans in the channel (to capture).'
    ]
  });

  // 16. The “ten sucklings” verse: was the Qurʾān incomplete?
  up('islam/quran/preservation/ten-sucklings', {
    who: 'Trace the three chains',
    facts: [
      ['Primary sources', 'Muslim 1452a–b; Ibn Mājah 1942'],
      ['Parallel routes', '3 students of ʿAmra bint ʿAbd al-Raḥmān'],
      ['Outlier phrase', 'Only ʿAbdullāh ibn Abī Bakr (Tirmidhī 1184 omits)'],
      ['Scholarly verdict', 'Error / wahm (al-Ṭaḥāwī 2063)']
    ],
    quotes: [
      {
        by: 'al-Ṭaḥāwī (d. 321)',
        en: 'Only ʿAbdullāh ibn Abī Bakr said that; it is an error (wahm). Al-Qāsim and Yaḥyā were more reliable.',
        ref: 'Sharḥ Mushkil al-Āthār 2063'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Two reliable routes from ʿAmra',
        items: [
          'Yaḥyā ibn Saʿīd (Muslim 1452b): “Ten sucklings were revealed, then five” — no “until his death”',
          'al-Qāsim ibn Muḥammad (Ibn Mājah 1942): “It was in the Qurʾān, then it was dropped (saqaṭa)”'
        ]
      },
      right: {
        title: 'Outlier route (ʿAbdullāh ibn Abī Bakr)',
        items: [
          'Only he adds “the Prophet ﷺ died while it was still recited”',
          'Inconsistent in his own line (Tirmidhī 1184 lacks it); al-Ṭaḥāwī: wahm'
        ]
      }
    }
  });

  // 17. Was Iblis an angel or a jinn?
  up('islam/quran/d-ia-alleged-contradictions/t-was-iblis-an-angel-or-a-jinn', {
    who: 'Quote 18:50 directly',
    facts: [
      ['Claimed verse', 'Qurʾān 2:34 (vs 16:49–50, 66:6)'],
      ['Explicit identity', 'Qurʾān 18:50 (one of the jinn)'],
      ['Creation material', 'Fire (7:12; 15:27) vs Light (Muslim 2996)'],
      ['Arabic grammar', 'Disconnected exception']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Kahf',
        en: 'And [remember] when We said to the angels, "Prostrate before Adam," so they all did, but not Iblīs, who was one of the jinn, but he rebelled against the command of his Lord.',
        ref: '18:50'
      },
      {
        by: 'Qurʾān — Sūrat al-Baqarah',
        en: 'And [remember] when We said to the angels, "Prostrate before Adam," so they all did, but not Iblīs, who refused and acted arrogantly, becoming unfaithful.',
        ref: '2:34'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Angels',
        items: [
          'Created from light (Muslim 2996)',
          'Never disobey Allah (16:49–50; 66:6)',
          '2:34 never calls Iblīs an angel'
        ]
      },
      right: {
        title: 'Iblīs (of the Jinn)',
        items: [
          'Explicitly “one of the jinn” (18:50)',
          'Created from smokeless fire (7:12; 15:27; Muslim 2996)',
          'Commanded alongside the angels because he was in their company'
        ]
      }
    },
    p: [
      'Direct answer: A jinn — the Qurʾān says so itself, and it never calls him an angel.',
      'The objection stated: The claim says angels never disobey (16:49–50, 66:6), but Iblīs refused to prostrate in 2:34, claiming the Qurʾān contradicts itself.',
      'Sūrat al-Baqarah 2.34: “And [remember] when We said to the angels, \'Prostrate before Adam,\' so they all did, but not Iblīs, who refused and acted arrogantly, becoming unfaithful.” (2:34).'
    ]
  });

  // 18. Alleged problems with the order of events in the Qur'an
  up('islam/quran/d-ia-alleged-contradictions/t-alleged-problems-with-the-order-of-events-in-the-q', {
    who: 'Check the sequence',
    facts: [
      ['Noah\'s Ark', '23:27 vs 11:37–40'],
      ['Adam\'s descent', '2:36–38; 7:23; 20:122'],
      ['ʿĀd\'s punishment', '41:13 vs 41:16'],
      ['Wind duration', '54:19; 41:16; 69:6–7']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Noah\'s Ark (23:27 & 11:37–40)', 'Both passages give the same order: build first, then load when the oven bursts'],
        ['Adam\'s descent & forgiveness', 'Two commands (2:36, 2:38) aren\'t two descents; 2:37 sits between them recording forgiveness'],
        ['ʿĀd\'s punishment (41:13 & 41:16)', '41:13 warns of a punishment like theirs; 41:16 names the screaming wind (storms bring both)'],
        ['Wind duration (54:19 & 69:6–7)', '69:7 states 7 nights and 8 days; 54:19 refers to a particular fateful day within that span']
      ]
    }
  });

  // 19. Advisors to Pharaoh
  up('islam/quran/d-ia-alleged-contradictions/t-advisors-to-pharaoh', {
    who: 'Show shared endorsement',
    facts: [
      ['Passages', '26:34–37 vs 7:109–112'],
      ['Speakers', 'Pharaoh & his eminent chiefs'],
      ['Qurʾānic parallel', 'Qurʾān 2:91 (endorsing an act)'],
      ['Verbs for “send”', 'ibʿath (26:36) vs arsil (7:111)']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Shuʿarāʾ',
        en: '[Pharaoh] said to the eminent ones around him, "Indeed, this is a learned magician. He wants to drive you out of your land by his magic, so what do you advise?" They said, "Postpone [the matter of] him and his brother and send among the cities gatherers who will bring you every learned, skilled magician."',
        ref: '26:34–37'
      },
      {
        by: 'Qurʾān — Sūrat al-Aʿrāf',
        en: 'Said the eminent among the people of Pharaoh, "Indeed, this is a learned magician who wants to expel you from your land [through magic], so what do you instruct?" They said, "Postpone [the matter of] him and his brother and send among the cities gatherers who will bring you every learned, skilled magician."',
        ref: '7:109–112'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Sūrat al-Shuʿarāʾ 26:34–37',
        items: [
          'Pharaoh speaks first: “Indeed, this is a learned magician…”',
          'Uses ibʿath (“send”) in 26:36',
          'Chiefs agree and propose gathering magicians'
        ]
      },
      right: {
        title: 'Sūrat al-Aʿrāf 7:109–112',
        items: [
          'Chiefs echo and endorse Pharaoh\'s words among themselves',
          'Uses arsil (“send”) in 7:111 — synonymous',
          'Endorsed statements are validly attributed to endorsers (cf. 2:91)'
        ]
      }
    },
    p: [
      'Both spoke: Both — Pharaoh said it, his chiefs agreed and repeated it.',
      'The objection stated: The objection says 26:34–37 attributes the statement to Pharaoh, while 7:109–112 attributes it to his chiefs, so the Qurʾān contradicts itself.',
      'Sūrat al-Shuʿarāʾ 26.34–37: “[Pharaoh] said to the eminent ones around him, \'Indeed, this is a learned magician. He wants to drive you out of your land by his magic, so what do you advise?\' They said, \'Postpone [the matter of] him and his brother and send among the cities gatherers who will bring you every learned, skilled magician.\'” (26:34–37).',
      'Sūrat al-Aʿrāf 7.109–112: “Said the eminent among the people of Pharaoh, \'Indeed, this is a learned magician who wants to expel you from your land [through magic], so what do you instruct?\' They said, \'Postpone [the matter of] him and his brother and send among the cities gatherers who will bring you every learned, skilled magician.\'” (7:109–112).'
    ]
  });

  // 20. Does the Qurʾān allow that Allah could have a son?
  up('islam/quran/d-ia-alleged-contradictions/t-does-the-qur-an-leave-open-the-possibility-that-al', {
    who: 'Explain counterfactuals',
    facts: [
      ['Verses', '39:4; 6:101; 43:81; 21:17'],
      ['Grammar', 'Counterfactual conditional'],
      ['Key authority', 'Tafsīr Ibn Kathīr on 39:4'],
      ['Closing formula', '“Exalted is He; He is Allah, the One”']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Zumar',
        en: 'If Allah had intended to take a son, He could have chosen from what He creates whatever He willed. Exalted is He; He is Allah, the One, the Prevailing.',
        ref: '39:4'
      },
      {
        by: 'Qurʾān — Sūrat al-Anʿām',
        en: 'Originator of the heavens and the earth. How could He have a son when He has no companion, and He created all things? And He is, of all things, Knowing.',
        ref: '6:101'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: '39:4, 43:81 & 21:17 (Conditionals)',
        items: [
          'Conditional premise attached to an impossibility (Ibn Kathīr)',
          'Exposes the polytheists\' claim on its own terms',
          '39:4 immediately ends: “Exalted is He; He is Allah, the One”'
        ]
      },
      right: {
        title: '6:101 (Direct denial)',
        items: [
          'States the impossibility outright: no companion, Creator of all things',
          'No contradiction between a counterfactual refutation and an explicit denial'
        ]
      }
    },
    p: [
      'Sūrat al-Zumar 39.4: “If Allah had intended to take a son, He could have chosen from what He creates whatever He willed. Exalted is He; He is Allah, the One, the Prevailing” (al-Zumar 39:4).',
      'Sūrat al-Anʿām 6.101: “Originator of the heavens and the earth. How could He have a son when He has no companion, and He created all things? And He is, of all things, Knowing” (al-Anʿām 6:101).'
    ]
  });

  // 21. “Kill yourselves” (2:54) and 4:66
  up('islam/quran/d-ia-alleged-contradictions/kill-yourselves-2-54', {
    who: 'Compare Qurʾān & Exodus',
    facts: [
      ['Qurʾān verses', '2:54–56; 4:66'],
      ['Biblical parallel', 'Exodus 32:27–28 (golden calf)'],
      ['Tafsīr views', 'Ibn ʿAbbās; Ibn Kathīr (2:55–56)'],
      ['4:66 status', 'Hypothetical about hypocrites']
    ],
    quotes: [
      {
        by: 'Exodus',
        en: 'Thus says the LORD, the God of Israel: put your sword on your side each of you… and each of you kill his brother, his companion and his neighbour.',
        ref: 'Exodus 32:27–28'
      },
      {
        by: 'Qurʾān — Sūrat al-Nisāʾ',
        en: 'If We had decreed for them: kill yourselves or leave your homes, they wouldn\'t have done it except a few.',
        ref: '4:66'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Qurʾān 2:54 (Golden Calf)',
        items: [
          'Death penalty for idolatry under the Torah, matching Exodus 32:27–28',
          'Ibn ʿAbbās: the innocent killed calf-worshippers; Allah forgave both',
          'Alternative tafsīr: killing desires and egos — not suicide'
        ]
      },
      right: {
        title: 'Qurʾān 4:66 (Hypocrites)',
        items: [
          'Counterfactual hypothetical: “If We had decreed for them…”',
          'Shows hypocrites would not obey hard commands, not that it was decreed'
        ]
      }
    },
    p: [
      'Biblical parallel in Exodus 32: “Thus says the LORD, the God of Israel: put your sword on your side each of you… and each of you kill his brother, his companion and his neighbour” (Exodus 32:27–28). The Levites killed about three thousand that day.',
      'Ibn Kathīr on al-Baqarah 55–56: those who demanded to see Allah were struck by lightning and revived (al-Suddī; al-Rabīʿ and Qatāda: death was their punishment and they were revived to finish their lives).',
      'Not purposeless suicide: If Allah forgave them, the command can\'t have been to destroy themselves without purpose.'
    ]
  });

  // 22. 6:145 lists four forbidden foods, so why is donkey meat forbidden?
  up('islam/quran/d-ia-alleged-contradictions/donkey-meat-6-145', {
    facts: [
      ['Qurʾān verse', '6:145 (Meccan period)'],
      ['Ḥadīth source', 'Ṣaḥīḥ Muslim 1407 (Khaybar, 7 AH)'],
      ['Principle', 'Gradual legislation over time'],
      ['Four initial items', 'Carrion, blood, swine, idol-offerings']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Anʿām',
        en: 'Say: I don\'t find in what has been revealed to me anything forbidden… except carrion, poured-out blood, swine flesh, or what is offered to other than Allah',
        ref: '6:145'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Meccan period (6:145)', 'States the four forbidden foods revealed up until that time in Mecca'],
        ['Medinan period (Khaybar, 7 AH)', 'Years later, the Prophet ﷺ forbade domestic donkey flesh and mutʿa (Muslim 1407)'],
        ['Gradual legislation', 'Two rulings given at two different times are sequential, not contradictory']
      ]
    },
    p: [
      'Meccan revelation (6.145): “Say: I don\'t find in what has been revealed to me anything forbidden… except carrion, poured-out blood, swine flesh, or what is offered to other than Allah” (6:145): what had been revealed until then.',
      'Khaybar prohibition (7 AH): ʿAlī reports that the Prophet ﷺ forbade mutʿa and the flesh of domestic donkeys on the day of Khaybar (Muslim 1407).',
      'Channel scans: Four scans in the channel (to capture).'
    ]
  });

  // 23. 5:60: is the Muslims' faith “evil”?
  up('islam/quran/d-ia-alleged-contradictions/worse-than-that-5-60', {
    facts: [
      ['Verse & context', 'Qurʾān 5:59–60'],
      ['Parallel verse', 'Qurʾān 34:24'],
      ['Exegete', 'Muḥammad Sayyid Ṭanṭāwī'],
      ['Rhetorical mode', 'Concessive reply to mockers']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Māʾidah',
        en: 'O People of the Book, do you resent us only because we believe in Allah…?',
        ref: '5:59'
      },
      {
        by: 'Qurʾān — Sūrat Sabaʾ',
        en: 'either we or you are rightly guided or in clear error.',
        ref: '34:24'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Mockers\' premise (5:59)',
        items: [
          'Reproached the believers for faith in Allah as if it were bad',
          'Parallel argumentative framing in 34:24'
        ]
      },
      right: {
        title: 'Qurʾānic reply (5:60)',
        items: [
          'Adopts their perspective for argument (Ṭanṭāwī): if you call that bad, yours is far worse',
          'Lists their evil traits: cursed, apes and swine, worshipping other than Allah'
        ]
      }
    },
    p: [
      'Force of the phrase: The emphatic “worse in position and further astray” stresses their many evil traits; in the Hereafter their abode is the Fire.',
      'Immediate context (5.59): “O People of the Book, do you resent us only because we believe in Allah…?” (5:59).'
    ]
  });

  // 24. Who takes the soul: Allah, the angel of death, or angels?
  up('islam/quran/d-ia-alleged-contradictions/who-takes-the-soul', {
    facts: [
      ['Qurʾān verses', '39:42; 32:11; 6:61'],
      ['Exegetes', 'al-ʿAdawī, following al-Shinqīṭī'],
      ['Biblical parallel', 'Exodus 7:17–20 (God & Aaron)'],
      ['Resolution', '3 levels of one single act']
    ],
    quotes: [
      {
        by: 'Exodus',
        en: 'I will strike the water of the Nile with the staff in my hand.',
        ref: 'Exodus 7:17'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Allah (39:42)', 'The real cause who commands and decrees the taking of the soul'],
        ['Helper angels (6:61)', 'Draw the soul up to the throat as agents'],
        ['Angel of death (32:11)', 'Completes the act under Allah\'s authority (like God & Aaron in Exodus 7)']
      ]
    },
    p: [
      'Biblical parallel in Exodus 7: Exodus 7:17: the LORD says “I will strike the water of the Nile with the staff in my hand.” Exodus 7:19–20: Aaron stretches out the staff and strikes the river; the staff is “Moses\' staff” (4:2) and “Aaron\'s staff” (7:9).',
      'Agency without contradiction: No Christian exegete concludes Aaron is Yahweh or that Exodus contradicts itself: Aaron acts as an agent on God\'s authority. Attributing the act to the commander doesn\'t cancel attributing it to the agent.'
    ]
  });

  // 25. “Humiliation was stamped on them” (2:61; 3:112)
  up('islam/quran/d-ia-alleged-contradictions/humiliation-2-61', {
    facts: [
      ['Verses', 'Qurʾān 2:61; 3:112'],
      ['Exegete', 'Ibn Kathīr on 2:61'],
      ['Stated cause', 'Disbelief, killing prophets, transgression'],
      ['Exemption', '3:112 (those under covenant)']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Baqarah',
        en: 'because they disbelieved in Allah\'s signs and killed the prophets unjustly… because they disobeyed and transgressed.',
        ref: '2:61'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What critics claim',
        items: [
          'Claims humiliation was stamped on Jews due to ethnicity or birth',
          'Ignores the stated causes and exemptions in the verses'
        ]
      },
      right: {
        title: 'What 2:61 & 3:112 state',
        items: [
          'Explicitly tied to disbelief, killing prophets, and transgression (Ibn Kathīr)',
          '3:112 exempts those under a covenant from Allah and from people'
        ]
      }
    },
    p: [
      'Stated cause in the verses: The verses give the reason themselves: “because they disbelieved in Allah\'s signs and killed the prophets unjustly… because they disobeyed and transgressed.”',
      'Ibn Kathīr on 2.61: Arrogance, insolence and envy drove them to it, and repeated disobedience led them to deny the signs and kill the messengers.',
      'Deeds, not birth: It\'s about deeds, not birth; and 3:112 itself exempts those under a covenant from Allah and from people, the protected Jews and Christians.'
    ]
  });

  // 26. Why no angel was sent as a sign (6:8)
  up('islam/quran/d-ia-alleged-contradictions/no-angel-as-sign-6-8', {
    facts: [
      ['Verse', 'Qurʾān 6:8–9'],
      ['Disciples\' case', 'Already believed; sought reassurance'],
      ['Idolaters\' demand', 'Rejected message; demanded an angel'],
      ['Consequence in 6:8', 'Matter decided with no respite']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Jesus\' disciples',
        items: [
          'Already believed in Jesus on good grounds',
          'Asked for reassurance, not instead of believing the message'
        ]
      },
      right: {
        title: 'Idolaters in 6:8–9',
        items: [
          'Rejected Allah\'s words and prophets altogether',
          '6:8: if an angel came and they still disbelieved, there\'d be no respite'
        ]
      }
    },
    p: [
      'Jesus\' disciples: The disciples already believed in Jesus on good grounds and asked for reassurance.',
      'Idolaters\' demand: The idolaters rejected everything; their faith would have rested only on the angel, not on Allah\'s words and prophets.',
      'No further respite (6.8–9): And 6:8 says the matter would then be decided: if an angel came and they still disbelieved, there\'d be no respite.'
    ]
  });

  // 27. Dust, clay, mud or water: what is man created from?
  up('islam/quran/d-dr-quran-contradiction-what-is-man-created-from', {
    who: 'Lay out the stages',
    forkTitle: '2 follow-up questions on creation',
    forkSub: 'Check the ḥadīth confirmation or the verses on water',
    optWho: ['If they ask for ḥadīth confirmation', 'If they bring up “water”'],
    facts: [
      ['Adam\'s stages', 'Earth → dust → clay → mud → ṣalṣāl'],
      ['Descendants', 'Water / semen (25:54; 32:8)'],
      ['Ḥadīth', 'Tirmidhī 2955; Abū Dāwūd 4693'],
      ['Lexicon & scholar', 'Lisān al-ʿArab; Ibn al-Qayyim']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (via Abū Mūsā al-Ashʿarī)',
        en: 'Allah created Adam from a handful He gathered from the whole earth, so the sons of Adam come like the earth: red, white, black and in between; easy and difficult; evil and good.',
        ref: 'Tirmidhī 2955; Abū Dāwūd 4693'
      },
      {
        by: 'Qurʾān — Sūrat al-Raḥmān',
        en: 'He created man from sounding clay like pottery',
        ref: '55:14'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Earth & dust (turāb)', '20:55 & 3:59 — Adam created from the dust of the earth'],
        ['Clay (ṭīn)', '6:2 — dust mixed with water'],
        ['Sticky clay (ṭīn lāzib)', '37:11 — became sticky and solid (Lisān al-ʿArab 1/738)'],
        ['Black altered mud (ḥamaʾ masnūn)', '15:26 — darkened and altered mud'],
        ['Sounding clay (ṣalṣāl)', '55:14 — mud mixed with sand and dried like pottery'],
        ['Descendants from water', '25:54 & 32:8 — subsequent offspring created from seminal fluid']
      ]
    }
  });

  // 28. 37:12: “You wondered” or “I wondered”?
  up('islam/quran/d-dr-does-allah-wonder-quran-37-12', {
    who: 'Explain both readings',
    forkTitle: '2 theological objections they raise',
    forkSub: 'Pick the follow-up on divine knowledge',
    optWho: ['If they say wonder implies surprise', 'If they challenge omniscience'],
    facts: [
      ['Verse & readings', '37:12 (Ḥafṣ ʿajibta; Khalaf ʿajibtu)'],
      ['Primary tafsīr', 'al-Ṭabarī 21/23; al-Qurṭubī; Ibn ʿĀshūr'],
      ['Biblical parallel', 'Isaiah 59:16; 63:5; Mark 6:6'],
      ['Real contradiction', 'Acts 1:18–20 vs Matthew 27:5–10']
    ],
    quotes: [
      {
        by: 'Tafsīr al-Ṭabarī',
        en: 'If someone asks: how can both readings be correct when their meanings differ? The answer: even though their meanings differ, each is correct. Muḥammad was amazed at the bounty Allah had given him, and the polytheists mocked him. And our Lord was amazed at the enormity of what the polytheists said about Allah, and the polytheists mocked what they said.',
        ref: 'al-Ṭabarī 21/23'
      },
      {
        by: 'Isaiah',
        en: 'He saw that there was no man, and wondered that there was no one to intercede.',
        ref: 'Isaiah 59:16'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'ʿajibta (Ḥafṣ — “You wondered”)',
        items: [
          'Addresses the Prophet ﷺ (as in 37:11)',
          'He marvelled at Allah\'s bounty while the polytheists mocked'
        ]
      },
      right: {
        title: 'ʿajibtu (Khalaf, Ḥamza, al-Kisāʾī — “I wondered”)',
        items: [
          'Analogical predication: not human surprise or ignorance (42:11)',
          'Denotes Allah\'s disapproval / extraordinariness of their disbelief (al-Qurṭubī, Ibn ʿĀshūr)'
        ]
      }
    },
    p: [
      'Non-contradiction test: Two statements contradict only if both can\'t be true at the same time. The Prophet ﷺ and Allah can both “wonder”.',
      'A real contradiction, for comparison: Acts 1:18–20 has Judas buy the field himself and die in it, so it is called the Field of Blood. Matthew 27:5–10 has Judas hang himself, and the priests then buy the field with his money, hence the name. Judas can\'t have bought the field in both: Acts has him die after the purchase, Matthew before.'
    ]
  });

  // 29. Does Qur'an 15:9 promise to preserve the Torah and Gospel too?
  up('islam/quran/d-ia-quran-surahs/t-does-qur-an-15-9-promise-to-preserve-the-torah-and', {
    who: 'Check the context of 15:9',
    facts: [
      ['Target verse', 'Qurʾān 15:9 (al-Dhikr)'],
      ['Immediate context', 'Qurʾān 15:6 (“upon whom the Reminder was sent”)'],
      ['Parallels for dhikr', '36:11; 38:1–3; 41:41–45; 43:5–7'],
      ['Torah contrast', '5:44 (entrusted to people) vs 5:13, 15, 48']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Ḥijr',
        en: 'And they say, "O you upon whom the Reminder has been sent down, indeed you are mad."',
        ref: '15:6'
      },
      {
        by: 'Qurʾān — Sūrat al-Ḥijr',
        en: 'Indeed, We have sent down the Reminder, and indeed We will preserve it.',
        ref: '15:9'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Qurʾān in 15:6 & 15:9',
        items: [
          '15:6 addresses Muḥammad ﷺ regarding the Reminder sent down to him',
          '15:9: Allah guarantees He will preserve that Reminder Himself'
        ]
      },
      right: {
        title: 'Earlier Scripture in 5:44 & 5:13–15',
        items: [
          '5:44: Torah entrusted to human keepers (rabbis & scholars)',
          '5:13, 15 & 48: keepers distorted/concealed it; Qurʾān judges over it'
        ]
      }
    },
    p: [
      'Context decides 15.9: No — the word dhikr can describe earlier revelation, but the context of 15:9 points to the Qurʾān.',
      'The objection stated: The claim says the Qurʾān sometimes uses dhikr (“Reminder”) for earlier revelation, so why assume 15:9 means the Qurʾān? Maybe Allah is promising to preserve the Torah and Gospel too.',
      'Sūrat al-Ḥijr 15.9: “Indeed, We have sent down the Reminder, and indeed We will preserve it.” (15:9).'
    ]
  });

  // 30. Did Satan Have The Power To Cause Ayyub عليه السلامs Illness
  up('islam/quran/d-ia-quran-surahs/t-did-satan-have-the-power-to-cause-ayyub-عليه-السلا', {
    who: 'Separate illness from temptation',
    facts: [
      ['Verses compared', 'Qurʾān 21:83 vs 38:41–42'],
      ['Satan\'s actual scope', 'Temptation only (14:22; 15:42)'],
      ['Exegete', 'Mawdūdī, Tafhīm al-Qurʾān'],
      ['Reference link', 'quranx.com/Tafsirs/38.42']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Anbiyāʾ',
        en: 'And [mention] Job, when he called to his Lord, "Indeed, adversity has touched me, and You are the Most Merciful of the merciful."',
        ref: '21:83'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Sūrat al-Anbiyāʾ 21:83',
        items: [
          'Ayyūb complains of adversity / illness',
          'Satan is not mentioned at all'
        ]
      },
      right: {
        title: 'Sūrat Ṣād 38:41 & 14:22 / 15:42',
        items: [
          'Satan has power only to tempt, not to afflict with disease (14:22; 15:42)',
          'In 38:41, Satan exploits his hardship to push him toward despair (Mawdūdī)'
        ]
      }
    },
    p: [
      'Mawdūdī\'s reading: In Tafhīm al-Qurʾān, Maududi says Job isn\'t saying Satan gave him the illness. The illness, the loss of his wealth and the desertion of his loved ones weren\'t the worst of it. The worst was Satan using his condition to push him toward despair, ingratitude and impatience with his Lord.',
      'Two textual reasons: First, the Qurʾān gives Satan the power to tempt, not to afflict Allah\'s servants with illness (14:22, 15:42). Second, in 21:83, Job complains about his illness and doesn\'t mention Satan at all.',
      'Sūrat al-Anbiyāʾ 21.83: “And [mention] Job, when he called to his Lord, \'Indeed, adversity has touched me, and You are the Most Merciful of the merciful.\'” (21:83).'
    ]
  });

  // 31. Does 5:116 get the Trinity wrong?
  up('islam/quran/d-ia-quran-surahs/t-surah-5116-refers-to-the-trinity', {
    who: 'Correct the misreading',
    forkTitle: '2 ways they deny Mary worship',
    forkSub: 'Pick the level of historical documentation',
    optWho: ['If they say no Christian worships Mary', 'If they claim 5:116 invents a belief'],
    facts: [
      ['Verse & phrase', '5:116 (min dūni Allāh)'],
      ['Trinity verses', 'Qurʾān 4:171; 5:73'],
      ['Historical sect', 'Collyridians (Epiphanius, Panarion 79)'],
      ['Historians', 'Gibbon ch. 50; George Sale p. 25']
    ],
    quotes: [
      {
        by: 'Edward Gibbon',
        en: 'the Collyridian heretics, who flourished in the fruitful soil of Arabia, invested the Virgin Mary with the name and honours of a goddess.',
        ref: 'The History of the Decline and Fall of the Roman Empire, ch. 50'
      },
      {
        by: 'George Sale',
        en: 'which goes but little beyond the Popish superstition in calling her the complement of the Trinity.',
        ref: 'Preliminary Discourse to The Koran (1923 ed., p. 25)'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What 5:116 condemns',
        items: [
          'Taking Jesus and Mary as gods “besides Allah” (min dūni Allāh)',
          'Does not say “with Allah” or mention the Trinity',
          'Addresses real Marian veneration & Collyridian worship (Epiphanius, Gibbon, Sale)'
        ]
      },
      right: {
        title: 'Where the Trinity is addressed',
        items: [
          'Explicitly rejected separately in 4:171 and 5:73',
          'Two distinct verses addressing two distinct Christian errors'
        ]
      }
    },
    p: [
      'Trinity addressed elsewhere: 5:116 never mentions a Trinity. The Qurʾān rejects the Trinity separately and explicitly in 4:171 and 5:73.',
      'Channel tafsīr scan: Ibn Kathīr\'s commentary on the verse is shown in the channel (scan).'
    ]
  });

  // 32. 3:55: will Christians always dominate?
  up('islam/quran/d-ia-quran-surahs/t-surah-3-55-6-41-christian-dominance', {
    who: 'Let 61:14 interpret 3:55',
    facts: [
      ['Target verse', 'Qurʾān 3:55'],
      ['Clarifying verse', 'Qurʾān 61:14'],
      ['Historical source', 'Pseudo-Clementine Homilies'],
      ['Classical refutation', 'Ibn Taymiyya, al-Jawāb al-Ṣaḥīḥ']
    ],
    quotes: [
      {
        by: 'Qurʾān — Sūrat al-Ṣaff',
        en: 'O you who believe, be supporters of Allah, as when Jesus son of Mary said to the disciples: Who are my supporters for Allah? The disciples said: We are supporters of Allah. A faction of the Children of Israel believed and a faction disbelieved. So We supported those who believed against their enemy, and they became dominant',
        ref: '61:14'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Christian misreading of 3:55',
        items: [
          'Assumes “those who follow you” refers to Pauline Christianity',
          'Uses perceived dominance to argue their theology is right'
        ]
      },
      right: {
        title: '61:14 & Ibn Taymiyya\'s reply',
        items: [
          '61:14 identifies the believing Israelite faction (e.g. Jamesian & Ebionite communities)',
          'Superiority belongs to true followers of Jesus\' message over rejecters, in proof and outcome'
        ]
      }
    },
    p: [
      'Qurʾān 61.14 clarifies 3.55: “O you who believe, be supporters of Allah, as when Jesus son of Mary said to the disciples: Who are my supporters for Allah? The disciples said: We are supporters of Allah. A faction of the Children of Israel believed and a faction disbelieved. So We supported those who believed against their enemy, and they became dominant” (61:14).',
      'True followers vs Pauline shift: There were those who disbelieved in ʿĪsā, such as Paul and his followers, and the outright rejecters of ʿĪsā. Those who believed were the Jamesian community and the Ebionites, who became dominant in a spiritual sense, as the Pseudo-Clementine Homilies attest.',
      'Who follows ʿĪsā today: Today the true followers of ʿĪsā are those who believe in him as a prophet of the One God.'
    ]
  });

  // 33. Does the Qurʾān call Jesus God? (9:31, 4:171)
  up('islam/quran/d-ia-quran-surahs/jesus-9-31-4-171', {
    who: 'Answer 9:31 via Tirmidhī 3095',
    forkTitle: '2 follow-up proofs they cite for Jesus\' divinity',
    forkSub: 'Pick 4:171 or Jesus returning as judge',
    optWho: ['If they cite 4:171 (“Word” & “Spirit”)', 'If they cite Jesus returning as judge'],
    facts: [
      ['Verses', 'Qurʾān 9:31; 4:171; 3:59; 45:13'],
      ['Ḥadīth explanation', 'Tirmidhī 3095 (ʿAdī ibn Ḥātim)'],
      ['Judge parallel', 'Muslim 155 vs 1 Samuel 7:15'],
      ['Biblical parallel', 'John 5:19 (no self-authority)']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (to ʿAdī ibn Ḥātim)',
        en: 'O ʿAdī, remove this idol from you',
        ref: 'Tirmidhī 3095'
      },
      {
        by: 'Gospel of John',
        en: 'the Son can do nothing of his own accord',
        ref: 'John 5:19'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Three Christian claims',
        items: [
          '9:31 lists the Messiah separately from rabbis and monks',
          '4:171 calls Jesus “His word” and “a spirit from Him”',
          'Jesus returns as judge (Muslim 155)'
        ]
      },
      right: {
        title: 'Qurʾān & ḥadīth answers',
        items: [
          'Arabic grammar groups the Messiah among those wrongly taken as lords besides Allah (Tirmidhī 3095)',
          'Created via “Be” (3:59) and spirit from Allah like 45:13; 4:171 forbids saying “three”',
          'Judging by God\'s law is not divinity (1 Samuel 7:15; John 5:19)'
        ]
      }
    }
  });

  // 34. “He is knowledge of the Hour” (43:61): does Jesus know the Hour?
  up('islam/quran/d-ia-quran-surahs/jesus-knowledge-of-the-hour-43-61', {
    facts: [
      ['Verse & context', 'Qurʾān 43:59–61; 4:159'],
      ['Hour knowledge', 'Allah alone (Qurʾān 31:34)'],
      ['Exegetes', 'Ibn Kathīr; al-Ālūsī; Ibn ʿĀshūr; al-Wasīṭ'],
      ['Ḥadīth', 'Bukhārī 2222; Muslim 155']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'the son of Maryam will descend as a just judge, break the cross, kill the swine, abolish the jizya…',
        ref: 'Bukhārī 2222; Muslim 155'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Why 43:61 isn\'t divine omniscience',
        items: [
          '43:59 calls Jesus a servant on whom Allah bestowed favour',
          '31:34 states only Allah knows the Hour',
          'In Mark 13:32, the Son doesn\'t know the hour either'
        ]
      },
      right: {
        title: 'Meaning of “knowledge of the Hour”',
        items: [
          'al-Wasīṭ, al-Ālūsī & Ibn Kathīr: his return is a sign that the Hour is near',
          'Ibn ʿĀshūr: refers to Jesus\' return, the Qurʾān informing of the Hour, or signs of the Hour'
        ]
      }
    },
    p: [
      'Ibn Kathīr: the pronoun refers to Jesus, as the context speaks of him, and to his return before the Day of Resurrection; cf. 4:159.',
      'Ibn ʿĀshūr reports three readings: al-Ḥasan, Qatāda and Saʿīd ibn Jubayr took “it” as the Qurʾān (it informs about the Hour); Ibn ʿAbbās, Mujāhid and Qatāda took it as Jesus\' return; or a general reference to the signs of the Hour.',
      'Biblical comparison (Mark 13.32): See also the card on Mark 13:32: in the Bible, the Son doesn\'t know the hour.'
    ]
  });
})();
