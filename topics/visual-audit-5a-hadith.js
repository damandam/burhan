/* Visual & structural upgrade for Islam › Hadith (Part 1, 29 cards). */
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

  function appendShots(arr, add) {
    const out = Array.isArray(arr) ? arr.slice() : [];
    const seen = new Set(out.map(s => (typeof s === 'string' ? s : s && s.src)).filter(Boolean));
    (add || []).forEach(s => {
      const src = typeof s === 'string' ? s : s && s.src;
      if (src && !seen.has(src)) { out.push(s); seen.add(src); }
    });
    return out;
  }

  function applyMore(m, patch) {
    if (patch.facts) m.facts = patch.facts;
    if (patch.quotes) m.quotes = patch.quotes;
    if (patch.visual) m.visual = patch.visual;
    if (patch.p) m.p = patch.p;
    if (patch.filterShots && Array.isArray(m.shots)) {
      const drop = new Set(patch.filterShots);
      m.shots = m.shots.filter(s => !drop.has(typeof s === 'string' ? s : s && s.src));
    }
    if (patch.shots) m.shots = appendShots(m.shots, patch.shots);
  }

  function walkTree(root, nodes) {
    if (!root || !Array.isArray(nodes) || !nodes.length) return;
    const flat = [];
    (function collect(n) {
      flat.push(n);
      if (Array.isArray(n.next)) n.next.forEach(collect);
    })(root);
    nodes.forEach(np => {
      let target = null;
      if (typeof np.idx === 'number') target = flat[np.idx];
      if (!target && np.match) {
        const re = np.match instanceof RegExp ? np.match : null;
        target = flat.find(n => n.more && n.more.h && (re ? re.test(n.more.h) : n.more.h.includes(np.match)));
      }
      if (target) {
        target.more = target.more || {};
        applyMore(target.more, np);
      }
    });
  }

  function up(key, patch) {
    const a = findArt(key);
    if (!a) { console.warn('visual-audit-5a: missing', key); return; }
    if (a.type === 'explainer') {
      if (patch.visual && !a.visual) a.visual = patch.visual;
      if (patch.addCard && Array.isArray(a.cards)) a.cards.push(patch.addCard);
      const ci = patch.cardIdx || 0;
      if (Array.isArray(a.cards) && a.cards[ci]) {
        const c = a.cards[ci];
        c.more = c.more || {};
        if (patch.facts) c.more.facts = patch.facts;
        if (patch.quotes) c.more.quotes = patch.quotes;
        if (patch.cardVisual) c.more.visual = patch.cardVisual;
        if (patch.p) { if (Array.isArray(c.p)) c.p = patch.p; else c.more.p = patch.p; }
        if (patch.filterShots && Array.isArray(c.more.shots)) {
          const drop = new Set(patch.filterShots);
          c.more.shots = c.more.shots.filter(s => !drop.has(typeof s === 'string' ? s : s && s.src));
        }
        if (patch.shots) c.more.shots = appendShots(c.more.shots, patch.shots);
      }
      return;
    }
    if (!a.tree) return;
    const t = a.tree;
    t.more = t.more || {};
    if (patch.who) t.who = patch.who;
    if (patch.forkTitle && (t.next || []).length > 1) t.forkTitle = patch.forkTitle;
    if (patch.forkSub && (t.next || []).length > 1) t.forkSub = patch.forkSub;
    applyMore(t.more, patch);
    if (patch.optWho && Array.isArray(t.next)) {
      t.next.forEach((c, j) => { if (patch.optWho[j]) c.optWho = patch.optWho[j]; });
    }
    if (patch.nodes) walkTree(t, patch.nodes);
  }

  /* 1 */
  up('islam/hadith/d-ia-preservation-of-hadith/t-nasa-prove-the-reliability-of-the-hadith', {
    facts: [
      ['Caliph', 'ʿUmar ibn al-Khaṭṭāb'],
      ['Hijrī Date', '4 nights left in Dhū al-Ḥijja, 23 AH'],
      ['Weekday Match', 'Wednesday (NASA lunar tables)'],
      ['Source', 'Maʿrifat al-Ṣaḥāba 1/39']
    ],
    quotes: [
      {
        by: 'Abū Nuʿaym al-Iṣfahānī',
        ar: 'قُتِلَ عُمَرُ يَوْمَ الْأَرْبِعَاءِ لِأَرْبَعِ لَيَالٍ بَقِينَ مِنْ ذِي الْحِجَّةِ سَنَةَ ثَلَاثٍ وَعِشْرِينَ',
        en: 'ʿUmar was killed on Wednesday, when four nights remained of Dhū al-Ḥijja, in the year 23 AH.',
        ref: 'Kitāb Maʿrifat al-Ṣaḥāba 1/39'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        {
          h: '1. The transmitted report',
          sub: 'Wednesday, 4 nights left of Dhū al-Ḥijja, 23 AH',
          p: ['Abū Nuʿaym: “ʿUmar was killed on Wednesday, when four nights remained of Dhū al-Ḥijja, in the year 23 AH.” (Maʿrifat al-Ṣaḥāba 1/39)']
        },
        {
          h: '2. Astronomical verification',
          sub: 'NASA lunar phase tables confirm Wednesday',
          p: ["Converting that date with NASA's lunar phase tables gives a Wednesday, exactly as the narrators transmitted it."]
        },
        {
          h: '3. Methodological takeaway',
          sub: 'Checkable calendar details held intact',
          p: ['Small, checkable details transmitted accurately over centuries show how carefully the narrators preserved what they heard.']
        }
      ]
    },
    cardVisual: {
      kind: 'steps',
      items: [
        ['Transmitted report', 'Abū Nuʿaym records ʿUmar’s death on Wednesday, four nights remaining of Dhū al-Ḥijja, 23 AH'],
        ['Astronomical check', 'Converting that lunar date with NASA’s lunar phase tables gives a Wednesday'],
        ['Preservation import', 'Small, checkable details remained intact across centuries of transmission']
      ]
    }
  });

  /* 2 */
  up('islam/hadith/d-ia-preservation-of-hadith/t-the-ahadith-written-in-the-first-century-ah', {
    facts: [
      ['Surviving Text', 'Ṣaḥīfa of Hammām ibn Munabbih'],
      ['Abū Qilāba', 'd. 104 AH (camel-load of books)'],
      ['Khālid ibn Maʿdān', 'd. 104 AH (early collection)'],
      ['Al-Ḥasan al-Baṣrī', '21–110 AH (early collection)']
    ],
    visual: {
      kind: 'steps',
      items: [
        {
          h: 'Companion student notebooks',
          sub: 'Ṣaḥīfa of Hammām ibn Munabbih',
          p: ["A written collection from Abū Hurayra's student, which survives and matches the later books."]
        },
        {
          h: 'First-century scholars',
          sub: 'Khālid ibn Maʿdān (d. 104 AH) & al-Ḥasan al-Baṣrī (21–110 AH)',
          p: ['Among the many early scholars known to have kept written collections.']
        },
        {
          h: 'Substantial book legacies',
          sub: 'Abū Qilāba (d. 104 AH) to Ayyūb al-Sakhtiyānī',
          p: ['He bequeathed his books to his student Ayyūb al-Sakhtiyānī, who paid more than ten dirhams to have them carried on a camel.']
        }
      ]
    },
    quotes: [
      {
        by: 'Surviving 1st-century compilation (Hammām ibn Munabbih, student of Abū Hurayra)',
        en: 'A written collection (ṣaḥīfa) from Abū Hurayra’s student, which survives and matches the later canonical books.',
        ref: 'Ṣaḥīfat Hammām ibn Munabbih'
      },
      {
        by: 'Abū Qilāba (d. 104 AH)',
        en: 'He bequeathed his books to his student Ayyūb al-Sakhtiyānī, who paid more than ten dirhams to have them carried on a camel.',
        ref: 'Early 1st-century AH written legacies'
      }
    ],
    shots: [
      {
        src: 'shots/m3-first-century-writers.webp',
        cap: 'Catalog of documented 1st-century AH written ḥadīth collections prior to the Six Books'
      }
    ],
    cardVisual: {
      kind: 'compare',
      left: {
        title: 'Myth: 3rd-century starting point',
        items: [
          { h: 'Ignores earlier books', sub: 'Assumes the Six Books compiled oral reports from scratch' },
          { h: 'Omits ṣaḥīfas', sub: 'Overlooks documented first-century written works' }
        ]
      },
      right: {
        title: 'Record: 1st-century collections',
        items: [
          { h: 'Hammām ibn Munabbih', sub: 'His ṣaḥīfa survives and matches later canonical books' },
          { h: 'Abū Qilāba (d. 104 AH)', sub: 'Left a camel-load of books to his student Ayyūb al-Sakhtiyānī' },
          { h: 'Early contemporaries', sub: 'Khālid ibn Maʿdān & al-Ḥasan al-Baṣrī kept written collections' }
        ]
      }
    }
  });

  /* 3 */
  up('islam/hadith/d-ia-quranist-and-anti-hadith-claims/t-ah-a-di-th-came-200-years-after-the-prophet', {
    who: 'Historical & Orientalist reply',
    facts: [
      ['Pre-canonical works', '20 named early collections'],
      ['First-century deaths', 'Saʿīd b. Jubayr (95 AH), ʿUmar II (101)'],
      ['Western concession', 'Ignaz Goldziher (Muslim Studies)'],
      ['Primary reference', 'M. Z. Ṣiddīqī, Ḥadīth Literature 1/27']
    ],
    shots: [
      {
        src: 'shots/m3-200y-siddiqi.webp',
        cap: 'M. Z. Ṣiddīqī, Hadith Literature (p. 27), citing Goldziher on early Companion ṣaḥīfas'
      }
    ],
    quotes: [
      {
        by: 'Ignaz Goldziher',
        en: 'It can be assumed that the writing down of ḥadīth was a very ancient method of preserving it, and that reluctance to preserve it in written form was merely the result of later considerations… Many a Companion of the Prophet is likely to have carried his ṣaḥīfa with him and used it to dispense instruction… those who disseminated these texts named in succession their immediate authorities, and thus the isnād came into being.',
        ref: 'Muslim Studies (cited via M. Z. Ṣiddīqī 1/27)'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Claim: 200-year oral gap',
        items: [
          'Treats the 9th-century Six Books as the first written collections',
          'Assumes two centuries of uncontrolled “Chinese whispers”'
        ]
      },
      right: {
        title: 'Evidence: Written 1st–2nd c. books',
        items: [
          'Saʿīd ibn Jubayr (d. 95), ʿUmar ibn ʿAbd al-ʿAzīz (d. 101), Mujāhid (d. 103)',
          'Abū Qilāba (d. 104), Khālid ibn Maʿdān (d. 104), al-Ḥasan al-Baṣrī (d. 110)',
          'Even Goldziher conceded Companions carried ṣaḥīfas and created the isnād'
        ]
      }
    },
    p: [
      'Syrian & Basran collections: Kitāb of Khālid ibn Maʿdān (d. 104) · Kitāb of Abū Qilāba (d. 104), bequeathed to his pupil Ayyūb al-Sakhtiyānī (68–131), who paid over ten dirhams to have them loaded on a camel.',
      'Early Tābiʿūn collections: The Ṣaḥīfa of Hammām ibn Munabbih · Kitāb of al-Ḥasan al-Baṣrī (21–110) · Kitāb of Muḥammad al-Bāqir (56–114) · Kitāb of Makḥūl (Syria) · Kitāb of al-Ḥakam ibn ʿUtayba.',
      'Egyptian, Basran & Kufan works: Kitāb of Bukayr ibn ʿAbdullāh ibn al-Ashajj (d. 117) · Kitāb of Qays ibn Saʿd (d. 117), later owned by Ḥammād ibn Salama · Kitāb of Sulaymān al-Yashkurī · al-Abwāb of al-Shaʿbī.',
      'Madinan & Makkan works: Kitāb of Ibn Shihāb al-Zuhrī · Kitāb of Abū al-ʿĀliya · Kitāb of Saʿīd ibn Jubayr (d. 95) · Kitāb of ʿUmar ibn ʿAbd al-ʿAzīz (61–101) · Kitāb of Mujāhid (d. 103) · Kitāb of Rajāʾ ibn Ḥaywa (d. 112).',
      'Second-century compilations: Kitāb of Abū Bakr ibn Muḥammad ibn ʿAmr ibn Ḥazm · Kitāb of Bashīr ibn Nahīk · Kitāb of ʿAbd al-Malik ibn Jurayj (d. 150).'
    ]
  });

  /* 4 */
  up('islam/hadith/d-ia-quranist-and-anti-hadith-claims/t-how-is-it-humanely-possible-the-ʿulama-ʾ-memorised', {
    who: 'Historical & cognitive reply',
    forkTitle: '2 ways they push back',
    forkSub: 'Pick the follow-up objection to address',
    optWho: ['If they ask for proof', 'If they dismiss it as rare'],
    facts: [
      ['Reported count', '1 million ḥadīth (chains + texts)'],
      ['Al-Bukhārī in Baṣra', '15,000+ ḥadīth in 16 days'],
      ['Baghdād test', '100 mixed-up chains corrected'],
      ['Qurʾān Huffāẓ', '39+ named Companions (al-Aʿẓamī)']
    ],
    quotes: [
      {
        by: 'Abū Zurʿa (on Aḥmad ibn Ḥanbal)',
        en: 'Your father memorised a million ḥadīth… I used to review with him and took the chapters from him.',
        ref: 'al-ʿIlal wa Maʿrifat al-Rijāl 1/49'
      },
      {
        by: 'Ibn Shihāb al-Zuhrī',
        en: 'When I passed through the markets, I feared my ears would memorise the people’s words and their insults to each other.',
        ref: 'Cited by Shaykh ʿAbd al-Salām al-Shuwayʿir'
      },
      {
        by: 'Imām al-Bukhārī',
        ar: 'كُنْتُ إِذَا كَتَبْتُ عَنْ رَجُلٍ سَأَلْتُهُ عَنِ اسْمِهِ وَكُنْيَتِهِ وَنِسْبَتِهِ وَحَمْلِهِ الْحَدِيثَ، إِنْ كَانَ الرَّجُلُ فَهْمًا. فَإِنْ لَمْ يَكُنْ سَأَلْتُهُ أَنْ يُخْرِجَ إِلَيَّ أَصْلَهُ وَنُسْخَتَهُ. فَأَمَّا الْآخَرُونَ لَا يُبَالُونَ مَا يَكْتُبُونَ، وَكَيْفَ يَكْتُبُونَ.',
        en: 'Whenever I wrote from a man, I asked his name, kunya, lineage, and how he bore the ḥadīth if he was discerning; otherwise I asked him to bring out his original manuscript (aṣl) and copy (nuskha). Others pay no attention to what or how they write.',
        ref: 'al-Dhahabī, Siyar Aʿlām al-Nubalāʾ 12/406'
      }
    ],
    shots: [
      {
        src: 'shots/m3-memorisation-azami.webp',
        cap: 'M. M. al-Aʿẓamī, Studies in Early Hadith Literature, on Companions preserving the Qurʾān and Sunnah'
      },
      {
        src: 'shots/m3-memorisation-siyar.webp',
        cap: 'Siyar Aʿlām al-Nubalāʾ (12/406): al-Bukhārī’s rigorous verification of both memorisation and original manuscripts'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Natural recall', 'Exceptional memory is documented then and now (hyperthymesia, sermon recall, Dār al-Tawḥīd curriculum race)'],
        ['Documented feats', 'Al-Zuhrī feared memorising market chatter; young al-Bukhārī recited 15,000+ ḥadīth after 16 days in Baṣra'],
        ['Culture of memorisation', '70 Madinan reciters at Biʾr Maʿūna and 39+ named Companions memorised the entire Qurʾān'],
        ['What “a ḥadīth” counts', 'Each chain + text counts as one unit—the same saying via ten chains counts as ten']
      ]
    },
    p: [
      'Natural memory capacity: Strong memory is a trait many people have by nature. When we were students, some would listen to the Friday sermon, memorise it almost completely and recite it to us in a quarter of an hour.',
      'Modern Dār al-Tawḥīd example: When Dār al-Tawḥīd was founded, two students competed in memorising its curriculum: one memorised the whole book; the other, to beat him, came the next day having memorised it with every dot and punctuation mark. He is still alive in Makka.',
      'Hyperthymesia & al-Zuhrī: Psychology knows a condition of near-total recall (hyperthymesia). Some leading ḥadīth scholars may have had it. Al-Zuhrī said: “When I passed through the markets, I feared my ears would memorise the people’s words and their insults to each other.”',
      'Environment and genetics: So strong memory existed then because of environment and culture, and in some individuals a natural, genetic component.'
    ]
  });

  /* 5 */
  up('islam/hadith/d-ia-quranist-and-anti-hadith-claims/t-the-umma-yyad-caliphate-spread-lies', {
    who: 'Methodological reply',
    facts: [
      ['Quote cited', 'Muḥammad ʿAbduh (Tārīkh 2/347)'],
      ['Critics named', 'Al-Thawrī, Shuʿba, Ibn Maʿīn'],
      ['Ibn al-Mubārak', '“The giants will live for them”'],
      ['Rulers vs. scholars', 'Critics judged narrators, not caliphs']
    ],
    quotes: [
      {
        by: 'Muḥammad ʿAbduh',
        ar: 'إلّا أن عموم البلوى بالأكاذيب حقّ على الناس بلاؤه في دولة الأمويين، فكثر الناقلون، وقلّ الصادقون، وامتنع كثير من أجلّة الصحابة عن الحديث إلّا لمن يثقون بحفظه، خوفاً من التحريف فيما يؤخذ عنهم',
        en: 'During the Umayyad era, ḥadīth forgeries were so widespread that they inflicted misfortune on the people. The number of narrators greatly increased while the truthful ones were few. Most of the Ṣaḥāba refused to narrate except to a few people they trusted.',
        ref: 'Tārīkh al-Ustādh al-Imām 2/347'
      },
      {
        by: 'ʿAbdullāh ibn al-Mubārak',
        en: 'The giants will live for them.',
        ref: 'al-Khaṭīb al-Baghdādī, al-Kifāya'
      },
      {
        by: 'Shaykh Muqbil ibn Hādī al-Wādiʿī',
        ar: 'وإن كان قد وجد في بني أمية من يشرب الخمر، ومن يستمع إلى القينات، ومن لا يبالي بالرعايا',
        en: 'Even though among the Umayyads there were rulers who drank wine, listened to singing girls, and paid little heed to their subjects, the scholars of ḥadīth stood apart from court corruption and safeguarded transmission.',
        ref: 'Tuḥfat al-Mujīb p. 91'
      }
    ],
    shots: [
      {
        src: 'shots/m3-umayyad-tarikh.webp',
        cap: 'Tārīkh al-Ustādh al-Imām (2/347): ʿAbduh notes the Companions narrated only to those they trusted'
      },
      {
        src: 'shots/m3-umayyad-tuhfat.webp',
        cap: 'Tuḥfat al-Mujīb (p. 91): distinguishing Umayyad political rulers from the muḥaddithūn'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Fallacy: Forgery = all fake',
        items: [
          'Assumes widespread fabrication tainted every narration',
          'Equates Umayyad rulers with the ḥadīth critics'
        ]
      },
      right: {
        title: 'Reality: Critics vs. forgers',
        items: [
          'Counterfeit currency does not make a bank vault fake',
          'Al-Thawrī, Shuʿba & Ibn Maʿīn dedicated their lives to exposing forgers',
          'Even ʿAbduh notes Companions narrated only to trusted individuals'
        ]
      }
    },
    p: [
      'The logical fallacy: P1: there were many forgeries in the Umayyad era. C: therefore all ḥadīth are unreliable. That’s a fallacy.',
      'The counterfeit-money analogy: Counterfeit money doesn’t make a national bank’s vault of real currency fake. The muḥaddithūn were the fraud-detection experts who separated gold from brass.',
      'ʿAbduh’s own admission: His words explicitly say the Companions were careful whom they narrated to—the opposite of a free-for-all.'
    ]
  });

  /* 6 */
  up('islam/general/d-ia-islamic-dilemma', {
    who: 'ʿUlūm al-ḥadīth reply',
    facts: [
      ['Core rule', 'Jarḥ wa al-Taʿdīl is field-specific'],
      ['Qirāʾāt master', 'Imām ʿĀṣim (d. 127 AH, Ḥafṣ)'],
      ['Tafsīr pioneer', 'Muqātil ibn Sulaymān'],
      ['Endorsements', 'Al-Shāfiʿī & Ibn Taymiyya']
    ],
    shots: [
      {
        src: 'shots/m3-dilemma-ibnkathir-tabari.webp',
        cap: 'Ibn Kathīr & al-Ṭabarī on scriptural corruption and field-specific grading'
      },
      {
        src: 'shots/m3-dilemma-muqatil.webp',
        cap: 'Al-Shāfiʿī & Ibn Taymiyya endorsing Muqātil ibn Sulaymān in tafsīr despite his ḥadīth weakness'
      },
      {
        src: 'shots/m3-dilemma-tabari-5-48.webp',
        cap: 'Tafsīr al-Ṭabarī on Qurʾān 5:48 and the Torah'
      }
    ],
    quotes: [
      {
        by: 'Imām Muḥammad ibn Idrīs al-Shāfiʿī',
        en: 'People are entirely dependent upon Muqātil ibn Sulaymān for tafsīr.',
        ref: 'al-Lālakāʾī 3/412; Siyar Aʿlām al-Nubalāʾ 7/203'
      },
      {
        by: 'Shaykh al-Islām Ibn Taymiyya',
        en: 'Allah raised a people who were masters in tafsīr though they had weakness in ḥadīth, such as Muqātil ibn Sulaymān and al-Kalbī… Their opinions and explanations are cited and relied upon in the sciences of the Qurʾān, even if their transmissions of ḥadīth are set aside.',
        ref: 'Muqaddimah fī Uṣūl al-Tafsīr, p. 34'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Ḥadīth chain grading',
        items: [
          'Imām ʿĀṣim: graded weak (ḍaʿīf) in ḥadīth memory',
          'Muqātil ibn Sulaymān: set aside in ḥadīth for imprecise asānīd'
        ]
      },
      right: {
        title: 'Qurʾān & tafsīr authority',
        items: [
          'Imām ʿĀṣim: master transmitter of the most widespread recitation (Ḥafṣ)',
          'Muqātil: explicitly relied upon in tafsīr by al-Shāfiʿī & Ibn Taymiyya'
        ]
      }
    },
    p: [
      'Imām ʿĀṣim (d. 127 AH): He is the master transmitter of the most widely recited qirāʾa of the Qurʾān (Qirāʾat ʿĀṣim via Ḥafṣ), yet ḥadīth masters classified his ḥadīth memory as weak (ḍaʿīf). No scholar discards his Qurʾān recitation because of his ḥadīth grade.',
      'Muqātil ibn Sulaymān: He follows the exact same principle: he was dismissed in ḥadīth because he did not preserve chains (asānīd) precisely, yet he was recognised as a foundational pioneer of Qurʾānic exegesis (tafsīr).',
      'Imām al-Shāfiʿī: He stated explicitly: “People are entirely dependent upon Muqātil ibn Sulaymān for tafsīr” (al-Lālakāʾī, Sharḥ Uṣūl Iʿtiqād Ahl al-Sunna 3/412; al-Dhahabī, Siyar Aʿlām al-Nubalāʾ 7/203).',
      'Ibn Taymiyya: “Allah raised a people who were masters in tafsīr though they had weakness in ḥadīth, such as Muqātil ibn Sulaymān and al-Kalbī… Their opinions and explanations are cited and relied upon in the sciences of the Qurʾān, even if their transmissions of ḥadīth are set aside” (Muqaddimah fī Uṣūl al-Tafsīr, p. 34).'
    ]
  });

  /* 7 */
  up('islam/hadith/d-ia-contributed-refutations/t-sahi-h-al-bukha-ri-3241-most-women-in-hellfire', {
    who: 'Textual & classical reply',
    facts: [
      ['Ḥadīth editions', 'Bukhārī 29, 304, 1052, 3241'],
      ['Muslim parallels', 'Muslim 79, 907, 2834'],
      ['Named cause', 'Ingratitude to spouses & kindness'],
      ['Commentators', 'Qāḍī ʿIyāḍ & Ibn Ḥajar (6/325)']
    ],
    quotes: [
      {
        by: 'Ṣaḥīḥ al-Bukhārī 3241 / Muslim 907',
        ar: 'تُكْثِرْنَ اللَّعْنَ، وَتَكْفُرْنَ الْعَشِيرَ',
        en: 'I saw that most of its inhabitants were women. They asked: Why, O Messenger of Allah? He said: Because of their ingratitude… You curse frequently and are ungrateful to your husbands.',
        ref: 'Bukhārī 29, 304, 1052, 3241; Muslim 907'
      },
      {
        by: 'Qāḍī ʿIyāḍ',
        ar: 'قَالَ الْقَاضِي ظَاهِرُ هَذَا الْحَدِيثِ أَنَّ النِّسَاءَ أَكْثَرُ أَهْلِ الْجَنَّةِ وَفِي الْحَدِيثِ الْآخَرِ أَنَّهُنَّ أَكْثَرُ أَهْلِ النَّارِ قَالَ فَيَخْرُجُ مِنْ مَجْمُوعِ هَذَا أَنَّ النِّسَاءَ أَكْثَرُ وَلَدِ آدَمَ',
        en: 'This ḥadīth shows women are the majority of the people of Paradise, and another ḥadīth that they are the majority of the people of the Fire. It follows that women are the majority of the children of Ādam.',
        ref: 'Sharḥ al-Nawawī ʿalā Muslim 17/172 (on 2834)'
      },
      {
        by: 'Ibn Ḥajar al-ʿAsqalānī',
        ar: 'وَتَكْفُرْنَ العَشِيرَ — الخليط، وهو الزوج، أو أعم من ذلك',
        en: 'Al-ʿAshīr refers to the close companion—meaning the husband, or more generally one’s spouse and associates.',
        ref: 'Fatḥ al-Bārī 1/406'
      }
    ],
    shots: [
      {
        src: 'shots/m3-bukhari-3241-fayd.webp',
        cap: 'Fayḍ al-Qadīr & classical commentary reconciling Paradise and Hellfire majorities'
      },
      {
        src: 'shots/m3-bukhari-3241-hadiths.webp',
        cap: 'Parallel authentic narrations on women as the majority in both abodes'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Misreading: Essentialist claim',
        items: [
          'Confuses “most inhabitants of Hell” with “most women”',
          'Treats the warning as a verdict on womanhood itself'
        ]
      },
      right: {
        title: 'Text & commentary',
        items: [
          'Names specific avoidable habits: ingratitude and frequent cursing',
          'Qāḍī ʿIyāḍ & Ibn Ḥajar: women are also the majority in Paradise',
          'Immediate remedy given: give charity and seek forgiveness'
        ]
      }
    },
    p: [
      'The Prophet’s ﷺ explanation: “I saw Paradise and stretched my hand towards a bunch of its fruit; had I taken it, you would have eaten from it as long as the world remains. I also saw the Fire, and I had never seen such a horrible sight. I saw that most of its inhabitants were women.” They asked: “Why, O Messenger of Allah?” He said: “Because of their ingratitude.” It was asked: “Are they ungrateful to Allah?” He said: “They are ungrateful to their companions (husbands) and ungrateful for good done to them. If you are good to one of them all your life and then she sees something from you she dislikes, she says: I have never had any good from you.”',
      'Avoidable behaviour, not womanhood: So the cause is a specific, avoidable behaviour he named so it could be avoided, not womanhood itself.'
    ]
  });

  /* 8 */
  up('islam/hadith/d-ia-hadith-refutations/t-bukhari-514-donkey-woman-dog', {
    who: 'Fiqh & isnād reply',
    forkTitle: '3 ways they press the point',
    forkSub: 'Pick the follow-up objection',
    optWho: ['If they ask why mention women', 'If they claim it equates them', 'If they insist it’s prophetic'],
    facts: [
      ['Primary texts', 'Muslim 510; Bukhārī 514; Ibn Mājah 949'],
      ['Majority fiqh', 'Mālik, Abū Ḥanīfa, al-Shāfiʿī'],
      ['Meaning of “cut”', 'Shortage in focus, not invalidation'],
      ['Chain verdict', 'Mawqūf (Ibn ʿAbbās) more accurate']
    ],
    shots: [
      {
        src: 'shots/m3-bukhari-514-scholars.webp',
        cap: 'Scholarly citations (al-Nawawī, Ibn Ḥajar, Abū Dāwūd, al-Minūfī) on “cutting” concentration and the mawqūf grading'
      }
    ],
    quotes: [
      {
        by: 'Imām al-Nawawī',
        en: 'Mālik, Abū Ḥanīfa, al-Shāfiʿī and the majority of the Salaf and Khalaf held that the prayer isn’t invalidated by any of these things or others. They interpreted “cut” as a shortage in the prayer, because the heart gets busy with them.',
        ref: 'Ṣaḥīḥ Muslim bi-Sharḥ al-Nawawī 1/303'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Polemical reading',
        items: [
          'Takes “cuts off” as literal nullification',
          'Claims listing woman, donkey & dog equates their dignity'
        ]
      },
      right: {
        title: 'Scholarly consensus & context',
        items: [
          'Mālik, Abū Ḥanīfa & al-Shāfiʿī: means distraction, not invalidation',
          'ʿĀʾisha objected to the comparison; Prophet ﷺ prayed while she lay before him (Bukhārī 514)',
          'Abū Dāwūd & al-Minūfī note mawqūf to Ibn ʿAbbās is more correct'
        ]
      }
    },
    p: [
      'Al-Nawawī: Mālik, Abū Ḥanīfa, al-Shāfiʿī and the majority of the Salaf and Khalaf held that the prayer isn’t invalidated by any of these things or others. They interpreted “cut” as a shortage in the prayer, because the heart gets busy with them (Ṣaḥīḥ Muslim bi-Sharḥ al-Nawawī 1/303).',
      'Ibn Ḥajar: al-Shāfiʿī and others read “cut” as a shortage in focus, not invalidation. Aḥmad said the black dog invalidates it and was unsure about the donkey and the woman (Fatḥ al-Bārī 1/589).',
      'ʿĀʾisha’s own response: ʿĀʾisha herself objected to the comparison (Bukhārī 514), and the Prophet ﷺ prayed while she lay in front of him.'
    ]
  });

  /* 9 */
  up('islam/hadith/d-ia-hadith-refutations/t-eve-betrayal-bukhari-3399-muslim-1470', {
    who: 'Qurʾānic & lexical reply',
    facts: [
      ['Main reports', 'Bukhārī 3399; Muslim 1470'],
      ['Repentance', 'Ādam & Ḥawwāʾ forgiven (7:23)'],
      ['Opposite case', 'Cain never repented (5:31; Bukhārī 3335)'],
      ['Meaning of khiyāna', 'Failed counsel, not adultery']
    ],
    quotes: [
      {
        by: 'Ibn al-Jawzī & Ibn al-Athīr',
        en: 'Ḥawwāʾ’s betrayal of her husband was that she failed in giving him counsel about the tree, and nothing else.',
        ref: 'Kashf al-Mushkil 3/504; Jāmiʿ al-Uṣūl 10/325'
      },
      {
        by: 'Ṣaḥīḥ al-Bukhārī 1521',
        en: 'Whoever performs Ḥajj for Allah without obscenity or sin returns like the day his mother bore him.',
        ref: 'Bukhārī 1521'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Ḥawwāʾ (Eve)',
        items: [
          'Repented and sought forgiveness with Ādam (Qurʾān 7:23)',
          '“Betrayal” meant failing in counsel over the tree, not infidelity',
          'Every child is born sinless (Bukhārī 1521)'
        ]
      },
      right: {
        title: 'Cain (first son of Ādam)',
        items: [
          'Only felt regret (5:31); the Qurʾān never says he repented',
          'Bears a share of every unjust killing for starting murder (Bukhārī 3335)'
        ]
      }
    },
    p: [
      'Cain’s contrast in Qurʾān 5:31: Cain is only described as feeling regret (5:31); the Qurʾān never says he repented.',
      'Why Ḥawwāʾ carries no inherited sin: So Ḥawwāʾ isn’t an example of someone who started a sin and carries the sins of all who copy it. Cain is: the Prophet ﷺ said the first son of Adam bears a share of every unjust killing, because he was the first to start killing (Bukhārī 3335).',
      'Full explanations: Abū Amina Elias, and openislam.wiki on Bukhārī 3399.'
    ]
  });

  /* 10 */
  up('islam/general/d-av-sonstiges-islam-2/c-frau-teufel-vorbeigehen', {
    who: 'Isnād & textual reply',
    facts: [
      ['Chain link', 'Abū al-Zubayr ← Jābir (Muslim 1403)'],
      ['4 reliable pupils', 'Advice only (no Zaynab/devil)'],
      ['2 divergent pupils', 'Hishām & weak Ḥarb add story'],
      ['Tadlīs audit', 'Only Maʿqil states explicit hearing']
    ],
    quotes: [
      {
        by: 'Authentic core (Muslim 1403)',
        ar: 'إِنَّ الْمَرْأَةَ تُقْبِلُ فِي صُورَةِ شَيْطَانٍ وَتُدْبِرُ فِي صُورَةِ شَيْطَانٍ، فَإِذَا أَبْصَرَ أَحَدُكُمُ امْرَأَةً فَلْيَأْتِ أَهْلَهُ، فَإِنَّ ذَلِكَ يَرُدُّ مَا فِي نَفْسِهِ',
        en: 'A woman advances in the image of a devil and retreats in the image of a devil, so when one of you sees a woman [and feels desire], let him go to his wife, for that repels what is in his soul.',
        ref: 'Ṣaḥīḥ Muslim 1403'
      },
      {
        by: 'Al-Nawawī (citing Qāḍī ʿIyāḍ)',
        en: 'It doesn’t mean he was affected by the woman. He showed us what to do in such a case and did it so we would do the same.',
        ref: 'Sharḥ Ṣaḥīḥ Muslim 9/254'
      }
    ],
    shots: [
      {
        src: 'shots/m3-frau-teufel-muslim1403.webp',
        cap: 'Ṣaḥīḥ Muslim 1403 with Abū al-Zubayr ← Jābir transmission breakdown'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: '4 reliable students (advice only)',
        items: [
          'Maʿqil ibn ʿUbaydillāh (explicit samāʿ)',
          'Ibn Jurayj, Ibn Lahīʿa, Mūsā ibn ʿUqba',
          'Transmit only the general advice on lawful intimacy'
        ]
      },
      right: {
        title: '2 divergent lines (extra story)',
        items: [
          'Hishām al-Dastawāʾī & weak Ḥarb ibn Abī al-ʿĀliya',
          'Only these add the Zaynab story and “shape of a devil”',
          'Abū al-Zubayr uses ʿan (tadlīs); al-Nasāʾī preferred mursal'
        ]
      }
    },
    p: [
      'Maʿqil ibn ʿUbaydillāh: only the general advice.',
      'Ibn Jurayj: only the general advice.',
      'Ibn Lahīʿa: only the general advice.',
      'Mūsā ibn ʿUqba: only the general advice.',
      'Hishām al-Dastawāʾī: advice + devil metaphor + Zaynab story.',
      'Ḥarb ibn Abī al-ʿĀliya (weak): advice + devil metaphor + Zaynab story.',
      'Tadlīs in the expanded versions: Abū al-Zubayr was known for tadlīs. In the versions with the additions he only says “from Jābir” (ʿan), never “I heard Jābir”. Only Maʿqil’s version, the one without additions, has his explicit statement of hearing. Al-Dhahabī says Abū al-Zubayr didn’t hear (these) from Jābir, and this ḥadīth is among those in Muslim where his hearing isn’t stated.',
      'Al-Nasāʾī’s preference: Al-Nasāʾī preferred the mursal version (without Jābir) as “more correct” than the connected one, which implies the chain through Abū al-Zubayr is faulty here; he favoured versions without the narrative context.',
      'The authentic core: “If one of you admires a woman and she falls into his heart, let him go to his wife and be intimate with her, for that repels what is in his soul.”'
    ]
  });

  /* 11 */
  up('islam/hadith/d-dr-christians-and-jews-will-take-our-sins', {
    who: 'Theological & isnād reply',
    facts: [
      ['Qurʾānic rule', '6:164 (none bears another’s burden)'],
      ['Two-houses motif', 'Ibn Mājah 4341; Bukhārī 6569'],
      ['Rejected addition', 'Shaddād Abū Ṭalḥa (doubted wording)'],
      ['Critics rejecting', 'Al-Bayhaqī, Ibn Ḥajar, al-Albānī']
    ],
    quotes: [
      {
        by: 'Imām al-Bayhaqī',
        en: 'It is as if the disbeliever inherits the believer’s place in Hell and the believer the disbeliever’s place in Paradise; in meaning, the believer has been ransomed by the disbeliever.',
        ref: 'al-Baʿth wa al-Nushūr, p. 85'
      },
      {
        by: 'Imām al-Bayhaqī (on the addition)',
        en: 'The wording narrated only by Shaddād Abū Ṭalḥa, ‘and places them on the Jews and Christians’, with the narrator’s doubt in it, I don’t consider preserved. The disbeliever is not punished for another’s sins: ‘no bearer of burdens bears another’s burden’.',
        ref: 'al-Baʿth wa al-Nushūr, p. 86'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Two houses prepared', 'Every soul has a place prepared in Paradise and one in Hell (Ibn Mājah 4341; Bukhārī 6569)'],
        ['Judged by own deeds', 'The disbeliever enters Hell for his own disbelief (6:164); the believer’s Hell-place stays empty'],
        ['Meaning of “ransom”', 'The believer inherits the vacant Paradise house while the disbeliever occupies his own Hell-place (al-Nawawī 17/85)'],
        ['Rejected “mountains” addition', '8+ narrators omit “places sins on Jews/Christians”; Shaddād doubted it (al-Bayhaqī, Ibn Ḥajar, al-Albānī)']
      ]
    },
    p: [
      'Abū Hurayra: “There is none of you except that he has two houses, a house in Paradise and a house in the Fire. If he dies and enters the Fire, the people of Paradise inherit his house” (Ibn Mājah 4341; Ibn Kathīr on 23:10–11, “They are the inheritors…”, Tafsīr 5/465).',
      'Mujāhid: every servant has two houses; the believer builds his house in Paradise and his house in the Fire is torn down, the disbeliever the reverse. The believers inherit the disbelievers’ houses because all were created to worship Allah; the believers did and the disbelievers didn’t.',
      'Bukhārī 6569 parallel: No one enters Paradise without being shown the place he would have had in the Fire, to be more grateful, and vice versa (Bukhārī 6569).',
      'Al-Bayhaqī: “The believer enters Paradise after seeing his place in Hell… the disbeliever enters Hell after seeing his place in Paradise… It is as if the disbeliever inherits the believer’s place in Hell and the believer the disbeliever’s place in Paradise; in meaning, the believer has been ransomed by the disbeliever” (al-Baʿth wa al-Nushūr 85).',
      'Al-Nawawī: “Everyone has a place in Paradise and a place in Hell. When the believer enters Paradise, the disbeliever remains in Hell because of his disbelief and sins, and so becomes in meaning a ransom for the Muslims” (Sharḥ Muslim 17/85). And: Allah fixed a number to fill Hell; when the disbelievers enter it for their own sins and disbelief, they are in meaning your release (Riyāḍ al-Ṣāliḥīn p. 534).'
    ]
  });

  /* 12 */
  up('islam/hadith/d-dr-jews-turned-into-rats', {
    who: 'Revelation vs. conjecture',
    facts: [
      ['Initial guess', 'Bukhārī 3305 (“I think…”)'],
      ['Clarifying ḥadīth', 'Muslim 2663 (no offspring)'],
      ['Parallel rule', 'Palm pollination (Muslim 2363)'],
      ['Conclusion', 'Rats are not transformed Jews']
    ],
    quotes: [
      {
        by: 'Ṣaḥīḥ al-Bukhārī 3305',
        en: 'A group of Israelites went missing; nobody knows what they did. I think they were transformed into rats.',
        ref: 'Bukhārī 3305'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Initial personal conjecture',
        items: [
          '“I think…” (Bukhārī 3305) — stated explicitly as a guess',
          'Like palm-tree pollination (Muslim 2363), not binding revelation'
        ]
      },
      right: {
        title: 'Clarified revelation',
        items: [
          'Muslim 2663: Allah never gave offspring to transformed peoples',
          'Those animals existed before them — rats are not Israelites'
        ]
      }
    },
    p: [
      'Bukhārī 3305: “A group of Israelites went missing; nobody knows what they did. I think they were transformed into rats.”',
      'Muslim 2663: Allah never gave offspring to people He transformed; such animals existed before them.',
      'Worldly opinion vs. revelation: His personal opinions on worldly matters aren’t revelation, as with the pollination of palm trees (Muslim 2363).'
    ]
  });

  /* 13 */
  up('islam/hadith/d-dr-expel-ahlul-kitab-from-arabia', {
    who: 'Geographical & treaty reply',
    forkTitle: '2 ways they push back',
    forkSub: 'Choose the follow-up objection',
    optWho: ['If they ask why exile at all', 'If they cite ʿUmar’s expulsions'],
    facts: [
      ['Primary report', 'Muslim 1767'],
      ['Intended region', 'The Ḥijāz (Makka & Madīna)'],
      ['Proof from practice', 'Taymāʾ & Arīḥā allowed'],
      ['Treaty breaches', 'Khaybar attack & Najrān usury']
    ],
    quotes: [
      {
        by: 'Musnad Aḥmad 695 (ṣaḥīḥ)',
        en: 'After me there will be conflicts; if you can end them peacefully, do so.',
        ref: 'Musnad Aḥmad 695'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Misreading: All of Arabia',
        items: [
          'Assumes “Arabian Peninsula” meant every corner of the peninsula',
          'Ignores why Jewish/Christian settlements stayed outside the Ḥijāz'
        ]
      },
      right: {
        title: 'Context: Ḥijāz & treaty breaches',
        items: [
          'Al-Nawawī: ʿUmar sent them to Taymāʾ (in Arabia, outside the Ḥijāz)',
          'Khaybar Jews attacked Ibn ʿUmar; Najrān broke treaty via usury',
          'Most scholars allowed non-Muslims to visit Makka/Madīna with permission for trade'
        ]
      }
    },
    p: [
      'Al-Nawawī’s proof from Taymāʾ: Al-Nawawī reasons from the report that ʿUmar sent them to Taymāʾ and Arīḥā; had all of Arabia been meant, Taymāʾ wouldn’t have been allowed (Sharḥ Ṣaḥīḥ Muslim).'
    ],
    shots: [
      {
        src: 'shots/m3-expel-arabia-sources.webp',
        cap: 'Al-Nawawī (Sharḥ Ṣaḥīḥ Muslim) and classical sources on the Ḥijāz vs. Taymāʾ'
      }
    ]
  });

  /* 14 */
  up('islam/hadith/d-dr-abu-dawud-4449-torah-preserved', {
    who: 'Isnād criticism reply',
    forkTitle: '2 ways they reply',
    forkSub: 'Choose their counter-argument',
    optWho: ['If they grant it hypothetically', 'If they cite al-Albānī’s grade'],
    facts: [
      ['Disputed report', 'Abū Dāwūd 4449'],
      ['Problem narrator', 'Hishām ibn Saʿd (weak)'],
      ['Ibn Ḥazm’s verdict', '“Fabricated false report” (1/237)'],
      ['Bukhārī parallel', 'Lacks cushion & “I believe in you”']
    ],
    quotes: [
      {
        by: 'Ibn Ḥazm',
        en: 'As for the report in which the Prophet took the Torah and said ‘I believe in you’, it is a fabricated false report that did not reach us with a proper chain.',
        ref: 'al-Fiṣal fī al-Milal 1/237'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Abū Dāwūd 4449 (Hishām ibn Saʿd)',
        items: [
          'Sole source adding the cushion & “I believe in you”',
          'Aḥmad, al-Nasāʾī, Ibn Maʿīn & Ibn Ḥibbān: Hishām is weak',
          'Ibn Ḥazm: fabricated and false, without a proper chain'
        ]
      },
      right: {
        title: 'Al-Bukhārī & Qurʾān/Sunna context',
        items: [
          'Bukhārī tells the stoning judgement without Hishām’s addition',
          'Even granted hypothetically, Ibn ʿAbbās (Bukhārī 7363) affirms textual corruption'
        ]
      }
    },
    p: [
      'Ibn Ḥazm on this very report: “As for the report in which the Prophet took the Torah and said ‘I believe in you’, it is a fabricated false report that did not reach us with a proper chain” (al-Fiṣal fī al-Milal 1/237).',
      'Isolated wording rejected: Abū Dāwūd’s is the only one with this wording. It’s weak or fabricated, so no Muslim has to accept it, let alone the critics’ reasoning with it.'
    ],
    shots: [
      {
        src: 'shots/m3-ad4449-hadith-rijal.webp',
        cap: 'Rijāl evaluations of Hishām ibn Saʿd in Abū Dāwūd 4449'
      },
      {
        src: 'shots/m3-ad4449-ibn-abbas.webp',
        cap: 'Bukhārī 7363: Ibn ʿAbbās’s explicit report on textual alterations'
      },
      {
        src: 'shots/m3-ad4449-q3-78.webp',
        cap: 'Tafsīr evidence on Qurʾān 3:78 and scriptural alteration'
      }
    ]
  });

  /* 15 */
  up('islam/hadith/d-dr-bukhari-preservation-of-torah', {
    who: 'Attribution & context reply',
    forkTitle: '2 ways they push back',
    forkSub: 'Pick the follow-up claim',
    optWho: ['If they grant authenticity', 'If they invoke al-Rāzī'],
    facts: [
      ['Actual attribution', 'Ibn ʿAbbās (not al-Bukhārī)'],
      ['Chain status', 'Weak chain (Ibn Ḥajar)'],
      ['Chapter context', 'Preserved Tablet (al-Lawḥ al-Maḥfūẓ)'],
      ['Al-Rāzī’s view', 'Torah altered in Babylon (2/77)']
    ],
    quotes: [
      {
        by: 'Ibn Kathīr & Ibn Ḥajar',
        en: 'Both attribute the words to Ibn ʿAbbās (not al-Bukhārī); Ibn Ḥajar notes it isn’t narrated with a sound chain.',
        ref: 'Tafsīr Ibn Kathīr 3:78; Fatḥ al-Bārī (Kitāb al-Tawḥīd)'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Polemical claim',
        items: [
          'Attributes “no one can remove a word” to al-Bukhārī',
          'Claims al-Rāzī believed the Torah was preserved'
        ]
      },
      right: {
        title: 'Scholarly evidence',
        items: [
          'Ibn ʿAbbās’s words, weakly chained, placed under the Preserved Tablet',
          'Ibn ʿAbbās explicitly affirms textual additions in Bukhārī 7363',
          'Al-Rāzī (al-Arbaʿīn 2/77) states the Torah was distorted in Babylon'
        ]
      }
    },
    p: [
      'Attribution and chain strength: Ibn Kathīr, Tafsīr 3:78, and Ibn Ḥajar both attribute the words to Ibn ʿAbbās; Ibn Ḥajar notes it isn’t narrated with a sound chain.'
    ],
    filterShots: [
      'shots/bukh-torah-1.webp',
      'shots/bukh-torah-3.webp',
      'shots/bukh-torah-4.webp',
      'shots/bukh-torah-5.webp',
      'shots/bukh-torah-6.webp'
    ],
    shots: [
      {
        src: 'shots/m3-bukh-torah-ibnkathir-3-78.webp',
        cap: 'Tafsīr Ibn Kathīr on 3:78 discussing the attribution to Ibn ʿAbbās and the Preserved Tablet'
      },
      {
        src: 'shots/m3-bukhari-torah-fath.webp',
        cap: 'Fatḥ al-Bārī (Kitāb al-Tawḥīd): Ibn Ḥajar’s chain critique and Preserved Tablet context'
      },
      {
        src: 'shots/m3-razi-arbain-2-77.webp',
        cap: 'Fakhr al-Dīn al-Rāzī, al-Arbaʿīn fī Uṣūl al-Dīn (2/77), on the Torah’s corruption in Babylon'
      }
    ]
  });

  /* 16 */
  up('islam/general/d-av-sonstiges-islam-1/c-keine-juden-christen-gru-ßen', {
    who: 'Wartime context & fiqh reply',
    facts: [
      ['Main report', 'Muslim 2167'],
      ['Specific occasion', 'March to Banū Qurayẓa (Aḥmad 27237)'],
      ['Source', 'Ibn al-Qayyim, Zād al-Maʿād 2/388'],
      ['Scholars permitting', 'Ibn ʿAbbās, Ibn Masʿūd, al-Nakhaʿī']
    ],
    quotes: [
      {
        by: 'Musnad Aḥmad 27237 (ṣaḥīḥ)',
        en: 'Tomorrow I am riding out against the Jews. Don’t initiate the salām with them, and if they greet you, say: wa ʿalaykum (and upon you).',
        ref: 'Musnad Aḥmad 27237'
      },
      {
        by: 'Al-Awzāʿī',
        en: 'If you greet, the righteous have greeted; and if you leave it, the righteous have left it.',
        ref: 'Cited in scholarly positions'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Wartime occasion (Muslim 2167)',
        items: [
          'Spoken on the march to Banū Qurayẓa after wartime betrayal',
          'Pushing aside on the road was a wartime show of strength',
          'Even then, returning their greeting was allowed'
        ]
      },
      right: {
        title: 'Peacetime scholarly views',
        items: [
          'Ibn ʿAbbās, Abū Umāma & a Shāfiʿī view allow initiating salām',
          'Ibn Masʿūd, al-Nakhaʿī & al-Ṭabarī allow it for companionship or need',
          'Ibn ʿUthaymīn: customary greetings to neighbours/trade allowed'
        ]
      }
    },
    p: [
      'The explicit wartime report: “Tomorrow I am riding out against the Jews. Don’t initiate the salām with them, and if they greet you, say: wa ʿalaykum (and upon you)” (Musnad Aḥmad 27237, ṣaḥīḥ).',
      'Ibn al-Qayyim: “It is said that this was in a specific situation, when they marched to Banū Qurayẓa” (Zād al-Maʿād 2/388).',
      'Wartime context, not neighbours: Qurayẓa were an Arabised Jewish tribe who claimed Israelite descent and had broken their treaty in wartime. Pushing an enemy to the narrow side of the road was a show of strength in a state of war, not a rule for neighbours.',
      'Restraint after betrayal: Even there he allowed returning their greeting. Read with its context, the ḥadīth is restraint toward people who had just betrayed a treaty.'
    ],
    shots: [
      {
        src: 'shots/m3-keine-juden-bukhari6528.webp',
        cap: 'Ṣaḥīḥ al-Bukhārī 6528 and parallel texts on the greeting context'
      },
      {
        src: 'shots/m3-keine-juden-fath-11-40.webp',
        cap: 'Fatḥ al-Bārī (11/40): Ibn Ḥajar on the Banū Qurayẓa occasion and peacetime greetings'
      },
      {
        src: 'shots/m3-keine-juden-muslim2167.webp',
        cap: 'Ṣaḥīḥ Muslim 2167 with al-Nawawī’s commentary'
      }
    ]
  });

  /* 17 */
  up('islam/general/d-av-sonstiges-islam-3/c-juden-am-ju-ngsten-tag-to-ten', {
    who: 'Eschatological reply',
    facts: [
      ['Primary reports', 'Muslim 2921, 2922; Bukhārī 3593'],
      ['Who initiates', '“The Jews will fight you” (2921)'],
      ['Commentator', 'Ibn al-Mulaqqin (al-Tawḍīḥ 17/663)'],
      ['NT parallel', '2 Thess 2:8; Rev 19:19–21']
    ],
    quotes: [
      {
        by: 'Ibn al-Mulaqqin',
        en: '‘You will fight the Jews’ refers to the time when ʿĪsā descends; the Muslims will be with him and the Jews with the Dajjāl.',
        ref: 'al-Tawḍīḥ li-Sharḥ al-Jāmiʿ al-Ṣaḥīḥ 17/663'
      },
      {
        by: '2 Thessalonians 2:8',
        en: 'Then the lawless one will be revealed, whom the Lord Jesus will kill with the breath of his mouth.',
        ref: '2 Thessalonians 2:8'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Islamic end-times prophecy',
        items: [
          'War at the descent of ʿĪsā against the false messiah (Dajjāl)',
          'Dajjāl’s forces initiate the fighting (“will fight you”, Muslim 2921)',
          'Prophecy of a future miracle, not a command for Muslims today'
        ]
      },
      right: {
        title: 'New Testament parallel',
        items: [
          'Jesus returns to destroy the lawless one (2 Thessalonians 2:8)',
          'Armies gathered against him are slain (Revelation 19:19–21)',
          'Both traditions share a final war between true and false messiahs'
        ]
      }
    },
    p: [
      'Ibn ʿUmar: “The Jews will fight you and you will be given victory over them, then a stone will say: O Muslim, here is a Jew behind me, kill him” (Bukhārī 3593; Muslim 2921). Note: “the Jews will fight you”: they attack.',
      'Ibn al-Mulaqqin: “You will fight the Jews” refers to the time when ʿĪsā descends; the Muslims will be with him and the Jews with the Dajjāl (al-Tawḍīḥ li-Sharḥ al-Jāmiʿ al-Ṣaḥīḥ 17/663).',
      'Defensive war led by ʿĪsā: So it’s a just, defensive war: against the Dajjāl and his supporters who gathered to fight the believers (cf. 9:32), led by ʿĪsā ibn Maryam, one of the noble messengers, and marked by a miracle: stones and trees speak.',
      'Prophecy, not present command: It is a prophecy of a future event, not a command to Muslims today to fight anyone.'
    ]
  });

  /* 18 */
  up('islam/general/d-av-sonstiges-islam-3/c-prophet-saw-verflucht-juden-und-christen', {
    who: 'Full-text & NT reply',
    facts: [
      ['Primary report', 'Bukhārī 3453–3454'],
      ['Omitted clause', 'Graves made into places of prayer'],
      ['Purpose', 'Deathbed warning to Muslims'],
      ['NT parallel', '1 Cor 16:22; 2 John 10–11']
    ],
    quotes: [
      {
        by: 'Ṣaḥīḥ al-Bukhārī 3453–3454',
        en: 'May Allah’s curse be on the Jews and the Christians, for they took the graves of their prophets as places of prayer. He was warning (the Muslims) against what they had done.',
        ref: 'Bukhārī 3453–3454'
      },
      {
        by: '2 John 10–11',
        en: 'If anyone comes to you and does not bring this teaching, do not receive him into your house or give him any greeting, for whoever greets him takes part in his wicked works.',
        ref: '2 John 10–11'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Truncated quote vs. full text',
        items: [
          'Critic omits the explicit reason: turning prophets’ graves into shrines',
          'Deathbed warning to keep Muslims from grave-shirk',
          'Kindness and fair dealing remain intact (Qurʾān 60:8)'
        ]
      },
      right: {
        title: 'Curses & shunning in the NT',
        items: [
          '1 Cor 16:22: “If anyone has no love for the Lord, let him be accursed”',
          '2 John 10–11: forbids receiving or greeting doctrinal dissenters',
          'Romans 16:17 & 1 Cor 5:11: avoid and do not eat with them'
        ]
      }
    },
    p: [
      'The complete deathbed report: ʿĀʾisha and Ibn ʿAbbās: when the Messenger of Allah ﷺ was dying he put a cloth over his face and removed it when he felt hot, and said: “May Allah’s curse be on the Jews and the Christians, for they took the graves of their prophets as places of prayer.” He was warning (the Muslims) against what they had done (Bukhārī 3453–3454).',
      'Equal warning to Muslims: The curse is on those who associate partners with Allah and die upon it. The same warning applies to Muslims who would do the same.',
      'Ordinary kindness remains: It doesn’t forbid ordinary kindness: Muslims may greet Jews and Christians and treat them well (see “Don’t greet them first” and 60:8).'
    ]
  });

  /* 19 */
  up('islam/general/d-av-sonstiges-islam-3/c-jude-schwo-ren-kaaba', {
    who: 'Isnād & gradual-law reply',
    facts: [
      ['Qutayla version', 'al-Nasāʾī 3773 (narrator error)'],
      ['Al-Bukhārī’s verdict', 'Manṣūr’s chain is sounder (ʿIlal 457)'],
      ['Alternative report', 'Abū Dāwūd 4980 (no Jew)'],
      ['Linguistic point', 'wa (“and”) vs. thumma (“then”)']
    ],
    quotes: [
      {
        by: 'Imām al-Bukhārī',
        en: 'Manṣūr’s chain is the most correct.',
        ref: 'al-ʿIlal al-Kabīr 457'
      },
      {
        by: 'Abū Dāwūd 4980 (Ḥudhayfa’s version)',
        en: 'Don’t say ‘what Allah wills and so-and-so wills’, but say ‘what Allah wills, then what so-and-so wills’.',
        ref: 'Abū Dāwūd 4980; Musnad Aḥmad 38/300'
      },
      {
        by: 'Shaykh ʿAbd al-ʿAzīz ibn Bāz',
        ar: 'هذا من الشرك الأصغر',
        en: 'Swearing by other than Allah or equating human will with Allah’s via wa (“and”) constitutes minor shirk (al-shirk al-aṣghar).',
        ref: 'Majmūʿ Fatāwā Ibn Bāz'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Qutayla chain (al-Nasāʾī 3773)',
        items: [
          'Contains the story of a Jew correcting Companions’ wording',
          'Error by Maʿbad ibn Khālid per al-Bukhārī (al-ʿIlal 457)',
          'Even ʿAbdullāh ibn Yasār’s link to Ḥudhayfa is broken'
        ]
      },
      right: {
        title: 'Ḥudhayfa version & principle',
        items: [
          'Abū Dāwūd 4980 / Aḥmad 38/300: Prophet ﷺ forbade it himself',
          'Replacing wa with thumma fixes minor shirk in Companions’ speech',
          'Accepting truth from anyone (Bukhārī 4811) ≠ learning tawḥīd'
        ]
      }
    },
    p: [
      'Al-Bukhārī: “Manṣūr’s chain is the most correct” (al-ʿIlal al-Kabīr 457). So the report goes via ʿAbdullāh ibn Yasār from Ḥudhayfa ibn al-Yamān, not from Qutayla.',
      'Broken alternative link: But ʿAbdullāh ibn Yasār didn’t hear from Ḥudhayfa, so even that chain is broken (Tārīkh Ibn Maʿīn, riwāyat al-Dārimī, p. 160).',
      'Ḥudhayfa’s version: The Prophet ﷺ himself said: “Don’t say ‘what Allah wills and so-and-so wills’, but say ‘what Allah wills, then what so-and-so wills’” (Abū Dāwūd 4980; Aḥmad 38/300). No Jew in it: he forbade the phrase on his own.',
      'Likely embellishment: So the story of the Jew is most likely a later embellishment that entered one chain.'
    ]
  });

  /* 20 */
  up('islam/hadith/d-ia-contributed-refutations/t-s-ah-i-h-al-bukha-ri-6929-o-lord-forgive-my-people', {
    who: 'Textual context reply',
    facts: [
      ['Primary reports', 'Bukhārī 6929; Muslim 1792'],
      ['Narrator', 'ʿAbdullāh ibn Masʿūd'],
      ['Chapter in Muslim', 'Battle of Uḥud'],
      ['Commentator', 'Al-Nawawī (Sharḥ 12/150)']
    ],
    quotes: [
      {
        by: 'Ibn Masʿūd (Bukhārī 6929 / Muslim 1792)',
        ar: 'عَنْ عَبْدِ اللَّهِ قَالَ كَأَنِّي أَنْظُرُ إِلَى رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَحْكِي نَبِيًّا مِنَ الأَنْبِيَاءِ ضَرَبَهُ قَوْمُهُ وَهُوَ يَمْسَحُ الدَّمَ عَنْ وَجْهِهِ وَيَقُولُ رَبِّ اغْفِرْ لِقَوْمِي فَإِنَّهُمْ لاَ يَعْلَمُونَ',
        en: 'It is as if I am looking at the Messenger of Allah ﷺ telling of one of the prophets, whose people beat him while he wiped the blood from his face, saying: My Lord, forgive my people, for they do not know.',
        ref: 'Bukhārī 6929; Muslim 1792'
      },
      {
        by: 'Imām al-Nawawī',
        ar: 'فِيهِ مَا كَانُوا عَلَيْهِ صَلَوَاتُ اللَّهِ وَسَلَامُهُ عَلَيْهِمْ مِنَ الْحِلْمِ وَالتَّصَبُّرِ وَالْعَفْوِ وَالشَّفَقَةِ عَلَى قَوْمِهِمْ … وَهَذَا النَّبِيُّ الْمُشَارُ إِلَيْهِ مِنَ الْمُتَقَدِّمِينَ وَقَدْ جَرَى لِنَبِيِّنَا صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مِثْلُ هَذَا يَوْمَ أُحُدٍ',
        en: 'In this is the forbearance, patient endurance, forgiveness and compassion of the prophets for their people: their prayers for them to be guided and forgiven, and excusing their crimes against themselves because they did not know — and this happened to our Prophet ﷺ at Uḥud.',
        ref: 'Sharḥ al-Nawawī ʿalā Muslim 12/150'
      }
    ],
    shots: [
      {
        src: 'shots/m3-bukhari-6929-uhud.webp',
        cap: 'Ṣaḥīḥ al-Bukhārī 6929 & Sharḥ al-Nawawī (12/150) placing the report under Uḥud'
      }
    ],
    p: [
      'Narrative subject: Ibn Masʿūd explicitly narrates that the Prophet ﷺ was telling the story of a previous prophet beaten by his people, wiping blood from his face — nothing mentions a cross or crucifixion.',
      'Uḥud parallel (al-Nawawī 12/150): Ṣaḥīḥ Muslim places the ḥadīth in the chapter on the Battle of Uḥud, where the Prophet ﷺ himself wiped blood from his face and uttered the same supplication for his people (also recorded in Ibn Ḥibbān 985).'
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Christian equivocation',
        items: [
          'Assumes the phrase refers to Jesus on the cross (Luke 23:34)',
          'Ignores the narrative frame of the ḥadīth'
        ]
      },
      right: {
        title: 'Actual ḥadīth narrative',
        items: [
          'An earlier prophet beaten by his people, wiping blood from his face',
          'No crucifixion; Muslim places it under the Battle of Uḥud',
          'Al-Nawawī: praises prophetic forbearance shared across prophets'
        ]
      }
    }
  });

  /* 21 */
  up('islam/hadith/d-ia-hadith-refutations/t-sahih-al-bukhari-7498-1-corinthians-29', {
    who: 'Intertextual reply',
    facts: [
      ['Ḥadīth', 'Ṣaḥīḥ al-Bukhārī 7498'],
      ['Paul’s intro', '“As it is written” (1 Cor 2:9)'],
      ['Early parallels', 'Gospel of Thomas 17; 1 Clement 34:8'],
      ['Origen’s note', 'Lost Jewish apocryphon (Elijah)']
    ],
    quotes: [
      {
        by: '1 Corinthians 2:9',
        en: 'As it is written…',
        ref: '1 Corinthians 2:9'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Paul quotes an earlier text', 'Paul introduces the saying with “as it is written”—he is not composing it'],
        ['Independent Jesus tradition', 'Gospel of Thomas (logion 17) presents similar wording as a saying of Jesus'],
        ['Early Church witnesses', 'Clement of Rome cites it as Scripture (1 Clement 34:8); Origen traces it to a lost Jewish apocryphon'],
        ['Islamic coherence', 'Both Paul and Bukhārī 7498 preserve a prophetic tradition older than Paul']
      ]
    },
    p: [
      'Gospel of Thomas (logion 17): Similar wording appears in the Gospel of Thomas (logion 17), presented as a saying of Jesus, so the tradition existed independently of Paul.',
      'Shared earlier source: Scholars have proposed that Paul and Thomas share an earlier source containing the saying.',
      'Clement of Rome (1 Clement 34:8): Clement of Rome cites it as Scripture, not as one of Paul’s letters (1 Clement 34:8).',
      'Origen on Commentary on Matthew: Origen suggested Paul was quoting a lost Jewish apocryphal work, sometimes identified as the Apocalypse of Elijah.',
      'Older prophetic tradition: So both Paul and the ḥadīth preserve a tradition older than Paul, which fits the Islamic view that genuine revelation and prophetic teaching existed before later writings.'
    ]
  });

  /* 22 */
  up('islam/hadith/d-dr-the-prophet-kissed-a-young-boy', {
    who: 'Isnād & context reply',
    facts: [
      ['Weak narrator', 'Hishām ibn Saʿd'],
      ['Major critics', 'Aḥmad ibn Ḥanbal & al-Nasāʾī'],
      ['Child in report', 'His grandson al-Ḥasan'],
      ['Biographical source', 'Tahdhīb al-Tahdhīb']
    ],
    quotes: [
      {
        by: 'al-Adab al-Mufrad 1183 (via Hishām ibn Saʿd)',
        ar: 'حَدَّثَنَا إِبْرَاهِيمُ بْنُ الْمُنْذِرِ، قَالَ: حَدَّثَنِي ابْنُ أَبِي فُدَيْكٍ، قَالَ: حَدَّثَنِي هِشَامُ بْنُ سَعْدٍ، عَنْ نُعَيْمِ بْنِ الْمُجْمِرِ، عَنْ أَبِي هُرَيْرَةَ... أَنَّ النَّبِيَّ صلى الله عليه وسلم يَفْتَحُ فَاهُ فَيُدْخِلُ فَاهُ فِي فِيهِ',
        en: 'Narrated through Hishām ibn Saʿd from Nuʿaym al-Mujmir from Abū Hurayra — the very weak/criticised chain on which the disputed wording rests.',
        ref: 'al-Adab al-Mufrad 1183'
      },
      {
        by: 'Imām al-Dhahabī (on Qābūs ibn Abī Ẓabyān)',
        ar: 'قابوس بن أبي ظبيان ... قال أبو حاتم: لا يُحتجّ به، وقال النسائي: ليس بالقوي، وقال ابن حبان: رديء الحفظ ينفرد عن أبيه بما لا أصل له، فربما رفع المراسيل وأسند الموقوف',
        en: 'Abū Ḥātim said: he is not used as proof; al-Nasāʾī said: not strong; Ibn Ḥibbān said: poor in memory, isolates narrations from his father with no basis, elevating mursal reports and attributing mawqūf ones.',
        ref: 'Mīzān al-Iʿtidāl #6794'
      },
      {
        by: 'Shuʿba ibn al-Ḥajjāj & Ibn al-Jawzī (on the zabība variant)',
        ar: 'مَا رَأَيْتُ أَحَدًا أَسْوَأَ حِفْظًا مِنْ ابْنِ أَبِي لَيْلَى / هَذَا حَدِيثٌ مَوْضُوعٌ إِسْنَادًا وَمَتْنًا',
        en: 'Shuʿba: “I have never seen anyone with a worse memory than Ibn Abī Laylā.” Ibn al-Jawzī: “This ḥadīth is fabricated in both chain and text.”',
        ref: 'al-Mawḍūʿāt / Classical rijāl criticism'
      }
    ],
    shots: [
      {
        src: 'shots/m3-kissed-boy-adab1183.webp',
        cap: 'al-Adab al-Mufrad 1183 highlighting Hishām ibn Saʿd in the isnād'
      },
      {
        src: 'shots/m3-kissed-boy-zabiba-ar.webp',
        cap: 'Mīzān al-Iʿtidāl #6794 & classical rijāl verdicts dismantling the zabība chain'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Isnād defect',
        items: [
          'Chain runs through Hishām ibn Saʿd',
          'Rejected as unreliable by Imām Aḥmad and al-Nasāʾī',
          'Al-Albānī’s ḥasan grade is not infallible against consensus'
        ]
      },
      right: {
        title: 'Narrative context',
        items: [
          'The boy in the narration is his own grandson al-Ḥasan',
          'Depicts a grandfather’s affection, not random boys',
          'Being weak in chain, the report can be rejected'
        ]
      }
    },
    p: [
      'Majority narrator critique: Aḥmad, founder of a school of fiqh and author of the largest ḥadīth collection (the Musnad), and al-Nasāʾī, author of the Sunan, did not consider Hishām ibn Saʿd a good narrator (see Farid Responds and the primary classical rijāl gradings in Tahdhīb al-Tahdhīb and Mīzān al-Iʿtidāl).'
    ]
  });

  /* 23 */
  up('islam/hadith/d-dr-apostate-scribe-hadith', {
    who: 'Textual & historical reply',
    forkTitle: '3 ways they follow up',
    forkSub: 'Pick the next objection',
    optWho: ['If they push the scribe’s boast', 'If they call him an eyewitness', 'If they cite al-Nasāʾī 4067'],
    facts: [
      ['Main report', 'Ṣaḥīḥ al-Bukhārī 3617'],
      ['Parallel intuition', 'ʿUmar’s 3 agreements (Bukhārī 402)'],
      ['Outcome', 'Earth thrice cast out his body'],
      ['Al-Nasāʾī 4067', 'Weak chain (al-Suddī & Asbāṭ)']
    ],
    quotes: [
      {
        by: 'Ṣaḥīḥ al-Bukhārī 3617',
        en: '…Allah destroyed him. They buried him, and in the morning the earth had thrown him out… they dug as deep as they could, and in the morning the earth had thrown him out again. So they knew it was not from people, and left him lying.',
        ref: 'Bukhārī 3617'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Textual familiarity', 'Constant contact with Arabic revelation let the scribe anticipate a verse-ending, just as ʿUmar anticipated three verses (Bukhārī 402)'],
        ['Miraculous refutation', 'Bukhārī 3617 ends with the earth repeatedly spitting out his corpse—accepting the report entails accepting that miracle'],
        ['Unreliable testimony', 'An apostate’s self-serving claim is not trustworthy evidence'],
        ['Ibn Abī Sarḥ (Nasāʾī 4067)', 'Chain is weak (al-Suddī & Asbāṭ ibn Naṣr), and ʿAbdullāh was pardoned, returned to Islam and governed Egypt']
      ]
    },
    p: [
      'Intuition from familiarity: The same principle applies: the scribe had an intuitive thought, perhaps from recognising a pattern or theme in the surrounding verses. As a scribe he was in constant contact with revelation, which increased his familiarity with the text.',
      'Modern parallel: People today can anticipate a verse-ending if they’ve read the Qurʾān in Arabic for a long time.'
    ],
    shots: [
      {
        src: 'shots/m3-apostate-bukhari3617.webp',
        cap: 'Ṣaḥīḥ al-Bukhārī 3617: full account including the earth repeatedly rejecting his corpse'
      },
      {
        src: 'shots/m3-apostate-bukhari402.webp',
        cap: 'Ṣaḥīḥ al-Bukhārī 402: ʿUmar’s three agreements showing lawful intuition of Qurʾānic phrasing'
      },
      {
        src: 'shots/m3-apostate-tirmidhi3686.webp',
        cap: 'Jāmiʿ al-Tirmidhī 3686 & Ibn Kathīr on the scribe’s false boast vs. revelation'
      }
    ],
    nodes: [
      {
        match: 'Al-Nasāʾī 4067',
        p: [
          'Weak isnād: Sunan al-Nasāʾī 4067 transmits this report via Ismāʿīl ibn ʿAbd al-Raḥmān al-Suddī (criticised as unreliable and an extreme Shīʿī) and Asbāṭ ibn Naṣr al-Hamdānī (graded no independent proof, as cross-referenced in the editor’s notes at nos. 454, 3873, and 4352).',
          'Pardon and subsequent service: Authentic historical reports record that ʿAbdullāh ibn Saʿd ibn Abī Sarḥ was pardoned at the Conquest of Mecca through ʿUthmān’s intercession, returned sincerely to Islam, and later served as governor of Egypt.'
        ]
      }
    ]
  });

  /* 24 */
  up('islam/general/d-av-sonstiges-islam-1/c-frau-trink-urin-vom-propheten-saw', {
    who: 'Isnād criticism reply',
    facts: [
      ['Barakah report', 'Ḥakīma bint Umayma (unknown)'],
      ['Umm Ayman report', 'Broken chain + contradictory names'],
      ['Blamed narrator', 'Abū Mālik al-Nakhaʿī (weak)'],
      ['Night-bowl report', 'Abū Dāwūd 24 (weak per al-Arnaʾūṭ)']
    ],
    quotes: [
      {
        by: 'Imām al-Dāraquṭnī',
        en: 'Abū Mālik is weak, and the contradictions come from him.',
        ref: 'al-ʿIlal 4106'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Barakah report',
        items: [
          'Only Ibn Jurayj narrates from Ḥakīma bint Umayma',
          'Al-Dhahabī & Ibn Ḥajar: Ḥakīma is unknown (majhūla)',
          'Even the wooden-bowl report (Abū Dāwūd 24) is weak per al-Arnaʾūṭ'
        ]
      },
      right: {
        title: 'Umm Ayman report',
        items: [
          'Name contradiction: Ḥusayn ibn Ḥarb vs. Ḥusayn ibn Ḥurayth',
          'Broken chain: 10th-class narrator quoting 4th-class Yaʿlā ibn ʿAṭāʾ',
          'Al-Dāraquṭnī blames weak Abū Mālik al-Nakhaʿī for the contradictions'
        ]
      }
    },
    p: [
      'Isolated transmission: Only Ibn Jurayj narrates from Ḥakīma, and she is known only through this ḥadīth.',
      'Classical verdicts on Ḥakīma: Ibn Ḥajar: Ḥakīma is unknown (al-Taqrīb 2/636). Al-Dhahabī: not known, only Ibn Jurayj narrates from her (Mīzān al-Iʿtidāl). Ibn al-Qaṭṭān didn’t confirm her reliability. Ibn Ḥibbān listing her in al-Thiqāt isn’t enough, given his known practice of listing unknown narrators as reliable.',
      'Modern scholarly grading: ʿAbd al-ʿAzīz al-Rājiḥī and ʿAdnān al-ʿArʿūr grade it weak for this reason; Ḥilmī ibn Saʿd al-Manūfī concluded the same (7 Rajab 1444).',
      'Even the bowl report fails: Abū Dāwūd 24, which only mentions the bowl itself (for urinating at night), is graded weak by al-Arnaʾūṭ. If even that is weak, how can the drinking report be authentic?'
    ]
  });

  /* 25 */
  up('islam/general/d-av-sonstiges-islam-2/c-zungen-lutschen-ku-ssen', {
    who: 'Context & Bible-parallel reply',
    facts: [
      ['Authentic report', 'al-Ṭabarānī, al-Muʿjam al-Kabīr 2588'],
      ['Grade', 'Ḥasan (al-Haythamī, al-Shawkānī)'],
      ['Weak variants', 'Hishām ibn Saʿd (Aḥmad / Adab al-Mufrad)'],
      ['Bible parallels', 'Mark 7:33; 2 Kings 4:34']
    ],
    quotes: [
      {
        by: 'Abū Hurayra (al-Ṭabarānī 2588)',
        ar: 'مَا شَأْنُ ابْنَيَّ... الْعَطَشُ... فَأَدْلَعَ لَهُ لِسَانَهُ فَجَعَلَ يَمُصُّهُ حَتَّى هَدَأَ أَوْ سَكَنَ',
        en: 'What is wrong with my sons? They said: Thirst. So he extended his tongue for him, and he sucked it until he became calm and quiet.',
        ref: 'al-Ṭabarānī, al-Muʿjam al-Kabīr 2588 (ḥasan)'
      },
      {
        by: 'Qāḍī ʿIyāḍ',
        en: 'He gave al-Ḥasan and al-Ḥusayn his tongue and they sucked it; they had been crying from thirst, and they became quiet.',
        ref: 'al-Shifā 1/326'
      },
      {
        by: 'Mark 7:33 & 2 Kings 4:34',
        en: 'Taking him aside from the crowd privately, he put his fingers into his ears, and after spitting touched his tongue… Elisha lay on the child, putting his mouth on his mouth, his eyes on his eyes, and his hands on his hands.',
        ref: 'Mark 7:33; 2 Kings 4:34'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Authentic report (al-Ṭabarānī 2588)',
        items: [
          'Al-Ḥasan & al-Ḥusayn crying from thirst with no water available',
          'Grandfather moistened the parched toddler’s mouth until he calmed',
          'Graded reliable by al-Haythamī, al-Shawkānī & Qāḍī ʿIyāḍ'
        ]
      },
      right: {
        title: 'Weak variants & Bible comparison',
        items: [
          'Market-walk variants have weak Hishām ibn Saʿd in the chain',
          'Jesus used saliva to touch a man’s tongue (Mark 7:33)',
          'Elisha lay “mouth on his mouth” on a boy (2 Kings 4:34)'
        ]
      }
    },
    p: [
      'Abū Hurayra: مَا شَأْنُ ابْنَيَّ “What is wrong with my sons?” الْعَطَشُ “Thirst.” هَلْ أَحَدٌ مِنْكُمْ مَعَهُ مَاءٌ “Does anyone have water?” نَاوِلِينِي أَحَدَهُمَا “Hand me one of them.” فَأَدْلَعَ لَهُ لِسَانَهُ فَجَعَلَ يَمُصُّهُ حَتَّى هَدَأَ أَوْ سَكَنَ “He put out his tongue for him and he sucked it until he became quiet” (al-Ṭabarānī, al-Muʿjam al-Kabīr 2588; ḥasan).',
      'Hadīth authentication: Al-Haythamī judged its narrators trustworthy (Majmaʿ al-Zawāʾid 9/183); also al-Shawkānī (Darr al-Saḥāba 242).',
      'Qāḍī ʿIyāḍ: “He gave al-Ḥasan and al-Ḥusayn his tongue and they sucked it; they had been crying from thirst, and they became quiet” (al-Shifā 1/326).',
      'Desert emergency care: In a dry desert climate, moistening a thirsty child’s lips and mouth with saliva when water was short was common and necessary relief.',
      'Weak market-walk variants: The other versions (in al-Adab al-Mufrad and Musnad Aḥmad, e.g. walking in the market with Abū Hurayra) are weak: their chain has Hishām ibn Saʿd of Medina, who isn’t reliable (see the card “The Prophet ﷺ kissed a young boy”, where Deenresponds shows the same narrator).'
    ]
  });

  /* 26 */
  up('islam/general/d-av-sonstiges-islam-2/c-mann-ku-sst-prophet-saw', {
    who: 'Isnād & context reply',
    facts: [
      ['Primary reference', 'Abū Dāwūd 5224'],
      ['Chain break', 'Ibn Abī Laylā never heard Usayd'],
      ['Grading', 'Weak (Ibn ʿAbd al-Hādī, al-Arnaʾūṭ)'],
      ['Story context', 'Leader submitting to qiṣāṣ']
    ],
    quotes: [
      {
        by: 'Ibn ʿAbd al-Hādī',
        en: 'Ibn Abī Laylā did not hear from Usayd ibn Ḥuḍayr.',
        ref: 'Tanqīḥ al-Taḥqīq 1/310'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Chain breaks (Abū Dāwūd 5224)',
        items: [
          'ʿAbd al-Raḥmān ibn Abī Laylā never heard from Usayd (d. 20 AH)',
          'Al-ʿAskarī calls it interrupted; al-Arnaʾūṭ grades it weak (no. 15945)',
          'His hearing from ʿUmar, Bilāl & Muʿādh is similarly rejected'
        ]
      },
      right: {
        title: 'Context if granted',
        items: [
          'Usayd demanded qiṣāṣ (retaliation) for a stick-poke',
          'Prophet ﷺ offered his side for justice; Usayd kissed it for blessing',
          'Companions publicly kissed his hand, head and feet out of devotion'
        ]
      }
    },
    p: [
      'Ibn ʿAbd al-Hādī: “Ibn Abī Laylā did not hear from Usayd ibn Ḥuḍayr” (Tanqīḥ al-Taḥqīq 1/310). Al-ʿAskarī: he narrated from Usayd in an interrupted chain.',
      'Al-Mizzī: it was also narrated via Yaḥyā ibn al-Mughīra → Jarīr → Ḥuṣayn → ʿAbd al-Raḥmān ibn Abī Laylā → his father (Tuḥfat al-Ashrāf).',
      'Al-Arnaʾūṭ on the related Musnad chain: “Its chain is weak and consists of unknowns, as we explained at no. 15945” (al-Mizzī has it in Tahdhīb al-Kamāl 12/312–313 via Aḥmad).',
      'Chronological disconnects: His hearing from ʿUmar is also doubted: Ibn Abī Ḥātim, Abū Ḥātim (interrupted), Ibn Ḥajar (disputed), Ibn al-Barqī, Ibn Maʿīn, al-Khalīlī, Abū Dāwūd; Ibn Ḥazm: he didn’t meet Bilāl or ʿUmar; al-Bayhaqī: he didn’t meet Muʿādh or ʿAbdullāh ibn Zayd. Death dates make a meeting with Usayd (d. 20 AH) equally unlikely.',
      'Father vs. son clarification: Several narrator critiques posted in the channel concern Muḥammad ibn ʿAbd al-Raḥmān ibn Abī Laylā, the judge, whom Aḥmad, al-Nasāʾī and others called weak; the father is reliable, but the gap to Usayd remains.',
      'Additional scholarly gradings: Contemporary and classical scholars, including al-Albānī and al-Arnaʾūṭ, likewise classify the chain as weak.'
    ],
    shots: [
      {
        src: 'shots/m3-mann-kuesst-ad1669.webp',
        cap: 'Abū Dāwūd 5224 / Aḥmad grading notes on the narration chain'
      },
      {
        src: 'shots/m3-mann-kuesst-isnad.webp',
        cap: 'Tahdhīb al-Kamāl & Tanqīḥ al-Taḥqīq on Ibn Abī Laylā’s chronological disconnect from Usayd'
      }
    ]
  });

  /* 27 */
  up('islam/general/d-av-sonstiges-islam-3/c-prophet-saw-tra-gt-aisha-kleidung', {
    who: 'Lexical & parallel reply',
    facts: [
      ['Main reports', 'Bukhārī 2581, 3775; Muslim 2402, 2424'],
      ['Thawb / Liḥāf', 'Any cloth / quilted sleeping blanket'],
      ['Mirṭ', 'Large unisex wrap/cloak (not a dress)'],
      ['Cross-dressing', 'Explicitly cursed (Bukhārī 5885–5886)']
    ],
    quotes: [
      {
        by: 'Ṣaḥīḥ al-Bukhārī 3775',
        en: '…revelation never came to me while I was under the liḥāf (blanket) of any of you except her.',
        ref: 'Bukhārī 3775'
      },
      {
        by: 'Thomas Aquinas',
        en: 'If there is a necessity for such a change, for example to hide from an enemy, or because one has no other garment, or a similar lawful reason, there is no sin.',
        ref: 'Summa Theologiae II-II q.169'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Polemical distortion',
        items: [
          'Translates thawb as “women’s dress”',
          'Alleges a contradiction with Bukhārī 5885–5886'
        ]
      },
      right: {
        title: 'Arabic lexicon & parallels',
        items: [
          'Thawb = any cloth; parallel Bukhārī 3775 explicitly says liḥāf (blanket)',
          'Mirṭ = large wrap big enough to shelter four people (Muslim 2424)',
          'Prophet ﷺ cursed imitation of the opposite sex (Bukhārī 5885–5886)'
        ]
      }
    },
    shots: [
      {
        src: 'shots/m3-aisha-kleidung-wrap.webp',
        cap: 'Classical lexical illustrations of thawb, liḥāf (blanket), and the wide unisex mirṭ cloak'
      }
    ]
  });

  /* 28 */
  up('islam/general/d-av-sonstiges-islam-3/c-prophet-saw-blut-rein', {
    who: 'Qurʾānic rule & 6-chain audit',
    facts: [
      ['Qurʾānic rule', 'Spilled blood is rijs/ḥarām (6:145)'],
      ['Reports audited', '6 chains (only 1 has a basis)'],
      ['Ibn al-Zubayr', 'Rebuked (“Why did you drink it?”)'],
      ['“Fire won’t touch”', 'Liar ʿAlī ibn Mujāhid in chain']
    ],
    quotes: [
      {
        by: 'Qurʾān 6:145',
        en: 'Say: I do not find in what has been revealed to me anything forbidden to eat except carrion, poured-out blood or the flesh of swine, for that is impure (rijs)…',
        ref: 'Qurʾān 6:145'
      },
      {
        by: 'Prophet ﷺ to Ibn al-Zubayr',
        en: 'Why did you drink the blood? Woe to the people because of you, and woe to you because of the people.',
        ref: 'Ibn Abī ʿĀṣim 1/414; al-Ḥākim 3/638; al-Bayhaqī 7/67'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: '5 weak / fabricated chains',
        items: [
          '“Fire won’t touch you”: has liar ʿAlī ibn Mujāhid & weak narrators',
          'Safīna: very weak (ḍaʿīf jiddan via Burayh & unknown ʿUmar)',
          'Abū Hind: rebuked; Quraysh slave: fabricated; Mālik: mursal'
        ]
      },
      right: {
        title: 'Ibn al-Zubayr report & Islamic law',
        items: [
          'Best chain (via majhūl Hunayd): Prophet ﷺ rebukes him',
          'Spilled blood is impure by Qurʾān 6:145, Bukhārī 227 & consensus',
          'Phrase “prophethood went through you” appears in zero reports'
        ]
      }
    },
    p: [
      'Qurʾān 6:145: “Say: I do not find in what has been revealed to me anything forbidden to eat except carrion, poured-out blood or the flesh of swine, for that is impure (rijs)…” (6:145). Al-Ṭabarī: rijs means something najis and repulsive (Jāmiʿ al-Bayān 8/53).',
      'Asmāʾ bint Abī Bakr: a woman asked about menstrual blood on clothes. He said: “Scrape it, rub it with water, wash it, then pray in it” (Bukhārī 227; Muslim 291). Al-Bukhārī’s chapter: “Washing blood”; al-Nawawī’s: “The impurity of blood and how to wash it.”',
      'Al-Nawawī: “Blood is impure, and this is the consensus of the Muslims.”',
      'Fabricated slogan absent: No report contains the phrase “prophethood went through you”.'
    ]
  });

  /* 29 */
  up('islam/general/d-av-sonstiges-islam-2/c-umar-ra-wirft-steine-kinder', {
    who: 'Textual correction reply',
    facts: [
      ['Primary reports', 'Muslim 893; Bukhārī 2901'],
      ['Who was playing', 'Abyssinian men with spears'],
      ['ʿUmar’s action', 'Bent for pebbles; no hit recorded'],
      ['Prophet’s response', '“Leave them, ʿUmar”']
    ],
    quotes: [
      {
        by: 'Abū Hurayra (Muslim 893 / Bukhārī 2901)',
        en: 'While the Abyssinians were playing with their spears in the presence of the Messenger of Allah ﷺ, ʿUmar came in and bent down for pebbles to throw at them. The Messenger of Allah ﷺ said: ‘Leave them, ʿUmar.’',
        ref: 'Muslim 893; Bukhārī 2901'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Distorted claim',
        items: [
          'Claims ʿUmar threw stones at children',
          'Relies on misleading translation phrasing'
        ]
      },
      right: {
        title: 'Actual text & ʿUmar with children',
        items: [
          'Abyssinian men performing with spears — no children, no hit',
          'Prophet ﷺ immediately told him: “Leave them, ʿUmar”',
          'With real children, ʿUmar encouraged play (Ibn Abī Shayba, al-Bayhaqī, Ibn ʿAsākir)'
        ]
      }
    }
  });

  /* 30: Explainer quotes + scans for general inquiry */
  up('islam/hadith/d-dr-hadith-general-inquiry-and-news', {
    quotes: [
      {
        by: 'Imām Aḥmad ibn Ḥanbal',
        en: 'This is a fabricated ḥadīth. [Regarding the multiple weak chains for “Seeking knowledge is obligatory on every Muslim”, which fail to corroborate because weak narrators could have drawn from one another.]',
        ref: 'Classical rijāl & corroboration criticism'
      },
      {
        by: 'ʿAlī ibn al-Madīnī (quoting ʿAbd al-Raḥmān ibn Mahdī)',
        en: 'Ibn Mahdī told me: “All of its narrations revolve around Abū al-ʿĀliya.” Tracing each apparently independent mursal chain showed they shared a single source.',
        ref: 'al-ʿIlal / al-Marāsīl methodology'
      }
    ],
    shots: [
      {
        src: 'shots/m3-inquiry-cohorts.webp',
        cap: 'Generational isnād cohorts from Companions to the classical compilers'
      },
      {
        src: 'shots/m3-inquiry-isnad-tree.webp',
        cap: 'Independent vs. derived transmission paths (mutābaʿa and shāhid analysis)'
      }
    ]
  });

  /* 31: Explainer quotes for ʿUlūm al-Ḥadīth primer */
  up('islam/hadith/d-ia-introduction-to-the-sciences-of-hadith', {
    quotes: [
      {
        by: 'Shaykh Suhayb Hasan',
        en: 'Every ḥadīth consists of the isnād (chain of transmitters) and the matn (actual wording). Even a text that sounds wise or pious is not attributed to the Prophet ﷺ unless its chain passes strict historical and biographical verification.',
        ref: 'An Introduction to the Science of Hadith'
      },
      {
        by: 'Shaykh Suhayb Hasan (Rijāl & grading rules)',
        en: 'Multiple independent mildly weak chains can corroborate one another up to ḥasan li-ghayrihi, whereas severely weak or fabricated chains can never elevate each other.',
        ref: 'An Introduction to the Science of Hadith (appendix grading 26 popular sayings)'
      }
    ]
  });
})();
