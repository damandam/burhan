/* Visual Audit 2 — Morality (islam/morality/*: marriage, war, slavery, women, apostasy)
   Non-destructive visual & playbook upgrade for all 33 cards in v2-morality.json. */
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
    if (!a) { console.warn('visual-audit-2: missing', key); return; }
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

  /* 01 */
  up('islam/morality/marriage/aisha/d-dr-aisha-would-wipe-semen-from-the-prophets-clothes', {
    facts: [
      ['Topic', 'Ritual purity (ṭahāra) in prayer'],
      ['Narrator', 'ʿĀʾisha, Mother of the Believers'],
      ['Fiqh Positions', 'Shāfiʿī/Ḥanbalī (ṭāhir) vs Ḥanafī/Mālikī (wash)'],
      ['Sources', 'Bukhārī 229–232 · Muslim 288–290']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Polemical Misreading',
        items: [
          'Frames ordinary spousal laundry as inappropriate',
          'Ignores why ʿĀʾisha openly preserved the report',
          'Confuses natural bodily emissions with scandal'
        ]
      },
      right: {
        title: 'Legal Purpose (Fiqh)',
        items: [
          'Establishes whether semen (manī) is pure (ṭāhir) or impure (najis)',
          'Determines if scraping dried traces suffices for prayer',
          'Shāfiʿī/Ḥanbalī hold purity; Ḥanafī/Mālikī require washing'
        ]
      }
    },
    p: [
      'Ordinary marital care: A married couple sharing household tasks — including washing garments — is ordinary family life, not something scandalous.',
      'The legal point: jurists needed to know whether semen (manī) is ritually impure (najis) like urine, or pure (ṭāhir) such that wiping/scraping dried traces suffices for praying in the garment without washing every trace invisible (the Shāfiʿī/Ḥanbalī ruling of purity vs Ḥanafī/Mālikī washing). That is why the Mother of the Believers taught the ummah the ruling openly.'
    ]
  });

  /* 02 */
  up('islam/general/d-av-sonstiges-islam-2/c-aisha-essen-vergleich', {
    facts: [
      ['Key Term', 'Faḍl (moral excellence, merit)'],
      ['Metaphor', 'Tharīd — finest everyday Arab dish'],
      ['Chapter Context', 'Qurʾān 66:11–12 (piety & faith)'],
      ['Source', 'Ṣaḥīḥ al-Bukhārī 3411']
    ],
    quotes: [
      {
        by: 'Abū Mūsā al-Ashʿarī (via Bukhārī)',
        en: 'Many among men reached perfection, but none among women except Āsiya the wife of Pharaoh and Maryam daughter of ʿImrān, and the excellence (faḍl) of ʿĀʾisha over women is like the excellence of tharīd over other food.',
        ref: 'Bukhārī 3411'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What the Claim Assumes',
        items: [
          'Treats the tharīd simile as seeing her as something to consume',
          'Isolates the final clause from the opening on perfection'
        ]
      },
      right: {
        title: 'What the Text Shows',
        items: [
          'Ranked after Āsiya and Maryam for moral perfection',
          'Key term is faḍl (excellence, merit), not physical appetite',
          'Bukhārī places it under 66:11, a chapter on piety and faith'
        ]
      }
    },
    p: [
      'Abū Mūsā: “Many among men reached perfection, but none among women except Āsiya the wife of Pharaoh and Maryam daughter of ʿImrān, and the excellence (faḍl) of ʿĀʾisha over women is like the excellence of tharīd over other food” (Bukhārī 3411).',
      'Contextual proof: If it were about physical perfection, the opening about the perfection of men would make no sense.',
      'Chapter placement: Al-Bukhārī places it under the chapter heading “Allah\'s words: And Allah sets forth as an example for those who believe the wife of Pharaoh…” (66:11): a chapter about piety and faith.',
      'Conclusion: Reading sexual meaning into it says more about the reader than the text.'
    ]
  });

  /* 03 */
  up('islam/morality/marriage/mutah-temporary-marriage', {
    who: 'Prophetic prohibition proved',
    forkTitle: 'Two follow-up claims they raise',
    forkSub: 'Pick the Companion report or weak chain they cite',
    optWho: ['If they cite Companions', 'If they cite weak chains'],
    facts: [
      ['Prohibited By', 'The Prophet ﷺ at Khaybar'],
      ['Primary Witnesses', 'ʿAlī, Sabra ibn Maʿbad, ʿUmar'],
      ['Ibn ʿAbbās', 'Repented of his view before death'],
      ['Sources', 'Muslim 1407d · Abū Dāwūd 2073 · al-Bayhaqī 14162']
    ],
    quotes: [
      {
        by: 'ʿAlī ibn Abī Ṭālib (to Ibn ʿAbbās)',
        en: 'Slowly, Ibn ʿAbbās! The Messenger of Allah ﷺ forbade it on the day of Khaybar, and the flesh of domestic donkeys.',
        ref: 'Muslim 1407; al-Nasāʾī 3365'
      },
      {
        by: 'ʿUmar ibn al-Khaṭṭāb',
        en: 'The Messenger of Allah ﷺ permitted mutʿa for three days, then forbade it.',
        ref: 'Ibn Mājah'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Temporary wartime concession', 'Permitted briefly for three days during military need when women were few (al-Bayhaqī 14162).'],
        ['Prophetic prohibition at Khaybar', 'Forbidden by the Prophet ﷺ himself, attested by ʿAlī (Muslim 1407) and Sabra ibn Maʿbad (Abū Dāwūd 2073).'],
        ['ʿUmar enforced existing law', 'As caliph, ʿUmar reminded the community of the Prophet’s ﷺ ban and demanded four witnesses for any reversal.'],
        ['Retraction & weak counter-reports', 'Ibn ʿAbbās repented before death; contrary reports are past-tense, Ḥajj tamattuʿ, or weak chains (Aḥmad 3121).']
      ]
    },
    p: [
      'ʿUmar, as caliph: the Messenger of Allah ﷺ permitted it for three days and then forbade it; whoever practises it while married will be stoned unless he brings four witnesses that the Prophet ﷺ allowed it again after forbidding it.',
      'Ibn ʿAbbās’s retraction: Ibn ʿAbbās was asked about mutʿa; a freedman said: it was only during jihād when women were few. Ibn ʿAbbās: “He has spoken the truth” (al-Bayhaqī 14162, ṣaḥīḥ). Al-Rāzī on 4:24: before his death Ibn ʿAbbās said: “O Allah, I repent to You of my view on mutʿa and on ṣarf.”',
      'Condemnation of temporary intent: “Among the greatest sins before Allah: a man marries a woman, and when he has had his need of her divorces her and goes off with her dowry…” (al-Bayhaqī, al-Sunan al-Kubrā 14395, ḥasan per al-Albānī).'
    ]
  });

  /* 04 */
  up('islam/morality/marriage/ahl-al-kitab-marriage-2-221-5-5', {
    facts: [
      ['General Rule', 'Qurʾān 2:221 (mushrikūn)'],
      ['Specific Exception', 'Qurʾān 5:5 (chaste People of the Book)'],
      ['Chronology', 'Sūra 5 among the last revealed'],
      ['Fiqh Principle', 'ʿĀmm (general) & khāṣṣ (specific)']
    ],
    quotes: [
      {
        by: 'Qurʾān 5:5',
        en: 'This day (al-yawm) are made lawful to you… the chaste women of those given the Book before you.',
        ref: 'Sūrat al-Māʾida 5:5'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'General Rule (2:221)',
        items: [
          'Prohibits marriage with mushrik men or women',
          'Establishes the general baseline (ʿāmm)'
        ]
      },
      right: {
        title: 'Later Exception (5:5)',
        items: [
          'Revealed late in Sūrat al-Māʾida',
          'Marks change explicitly with “This day” (al-yawm)',
          'Carves out chaste women of the People of the Book (khāṣṣ)'
        ]
      }
    },
    p: [
      'General rule in Sūra 2 (v. 221): 2:221 is general — no marriage with mushrik men or women.',
      'Specific exception in Sūra 5 (v. 5): 5:5, revealed late, carves out an exception for chaste women of the People of the Book.'
    ]
  });

  /* 05 */
  up('islam/morality/marriage/umar-umm-kulthum', {
    facts: [
      ['Leg Anecdote', 'Broken chain / inauthentic (al-Albānī)'],
      ['Consent Condition', 'ʿAlī made marriage depend on her acceptance'],
      ['Age Mentioned', 'No narration states her age'],
      ['Sources', 'al-Istīʿāb · al-Iṣāba']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What the Polemic Claims',
        items: [
          'Treats the leg-uncovering anecdote as authentic',
          'Assumes a non-consensual child marriage'
        ]
      },
      right: {
        title: 'What the Sources Verify',
        items: [
          'The leg anecdote has an interrupted chain (inauthentic per al-Albānī)',
          'ʿAlī first answered “she is still young” and required her consent',
          'No narration states Umm Kulthūm’s age'
        ]
      }
    },
    p: [
      'Transmission status: Ibn ʿAbd al-Barr, al-Istīʿāb; Ibn Ḥajar, al-Iṣāba: the marriage itself is reported; the leg anecdote has an interrupted chain.'
    ]
  });

  /* 06 */
  up('islam/morality/marriage/bathing-together', {
    facts: [
      ['Relationship', 'Married husband and wife'],
      ['Purpose', 'Ritual purification (ghusl) after intimacy'],
      ['Fiqh Ruling', 'Spouses may wash from one vessel'],
      ['Sources', 'Ṣaḥīḥ al-Bukhārī 250, 261']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Misrepresentation',
        items: [
          'Frames the report as something indecent',
          'Strips away the marital and legal context'
        ]
      },
      right: {
        title: 'Actual Fiqh Context',
        items: [
          'Arabic makes clear they were spouses performing ghusl after intimacy',
          'Narrated strictly as a purification ruling: one container suffices'
        ]
      }
    }
  });

  /* 07 */
  up('islam/morality/marriage/daughter-from-zina', {
    who: 'Majority prohibition & Ibn Taymiyya',
    facts: [
      ['Majority Ruling', 'Strictly forbidden (ḥarām)'],
      ['Imām Aḥmad’s View', 'Execution (no dispute known among Salaf)'],
      ['Key Authority', 'Ibn Taymiyya, Majmūʿ al-Fatāwā 32/134'],
      ['Scriptural Anchor', 'Qurʾān 4:23–24']
    ],
    quotes: [
      {
        by: 'Qurʾān 4:23',
        en: 'Forbidden to you are your mothers and your daughters.',
        ref: 'Sūrat al-Nisāʾ 4:23'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Minority Legal Inference',
        items: [
          'Notes a child of zinā does not inherit or receive maintenance',
          'Wrongly excludes her from “your daughters” in 4:23',
          'Wrongly places her under “all beyond these” in 4:24'
        ]
      },
      right: {
        title: 'Majority & Ibn Taymiyya’s Verdict',
        items: [
          '4:23 includes every biological female descendant',
          'A fortiori: milk-daughter is forbidden, so seed-daughter even more so',
          '“From your loins” restricts sons only, proving biological daughters are included',
          'Lineage rulings are divisible (Zamʿa & liʿān precedents)'
        ]
      }
    },
    p: [
      'Why the minority erred: they argued that because a child of zinā doesn\'t inherit from the biological father, isn\'t owed obligatory maintenance, has no marriage guardianship from him, and isn\'t freed by his ownership, she supposedly isn\'t a “daughter” in 4:23 (“Forbidden to you are your mothers and your daughters”) and falls under 4:24 (“lawful to you are all beyond these”).',
      'Jurists on mistaken interpretation: Ibn Taymiyya notes that scholars differed on whether a mistaken jurist acting on interpretation (mutaʾawwil) is executed or deemed a sinner — comparing it to the dispute over nabīdh — and confirms the excused interpreter isn\'t a sinner, while refuting the minority opinion itself decisively.'
    ]
  });

  /* 08 */
  up('islam/general/d-av-sonstiges-islam-1/c-heirat-2-falsche-zeugen-tricksen', {
    facts: [
      ['Prophetic Rule', 'Woman’s consultation & permission required'],
      ['“Some people said”', 'Bukhārī’s phrase for Ḥanafī opinion'],
      ['Chapter Context', 'Kitāb al-Ḥiyal (Book of Legal Tricks)'],
      ['Sources', 'Bukhārī 6968–6971 · Muslim 1419']
    ],
    quotes: [
      {
        by: 'Prophetic Ḥadīth (via Abū Hurayra)',
        en: 'A previously married woman is not married until she is consulted, and a virgin is not married until her permission is sought.',
        ref: 'Bukhārī 6968–6971; Muslim 1419'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'The Prophetic Ḥadīth',
        items: [
          'Requires consulting the woman and seeking her permission',
          'Narrated identically in Muslim, Abū Dāwūd, Tirmidhī, Nasāʾī & Ibn Mājah',
          'Silence marks shy consent; a clear “no” cancels it'
        ]
      },
      right: {
        title: 'The Added Legal Opinion',
        items: [
          'Introduced by “Some people said” (qāla baʿḍ al-nās)',
          'States a Ḥanafī juristic view, not the Prophet’s ﷺ words',
          'Quoted by al-Bukhārī in Kitāb al-Ḥiyal specifically to criticise it'
        ]
      }
    },
    p: [
      'The ḥadīth itself, from Abū Hurayra: “A previously married woman is not married until she is consulted, and a virgin is not married until her permission is sought.” They asked how she gives permission; he said: “By being silent.”',
      'Al-Bukhārī’s critique of legal tricks: After it al-Bukhārī writes: “Some people said: if a man hires two false witnesses to testify that he married a woman…”. That is the Ḥanafī legal opinion, set out to show it as a trick (ḥīla) that contradicts the ḥadīth just quoted. It is not the Prophet\'s ﷺ words.',
      'Other canonical collections: Muslim, al-Nasāʾī, Ibn Mājah, Abū Dāwūd and al-Tirmidhī narrate the same ḥadīth with no such addition.',
      'Meaning of silence: Her silence is her consent because a virgin may be too shy to say yes aloud, as ʿĀʾisha herself explained. A clear “no” cancels it (see Forced marriage).'
    ]
  });

  /* 09 */
  up('islam/general/d-av-sonstiges-islam-1/c-sawda-frau-des-propheten-saw', {
    who: 'Sawda remained his wife',
    facts: [
      ['Outcome', 'Never divorced; remained his wife till death'],
      ['Arrangement', 'Voluntarily gave her day to ʿĀʾisha'],
      ['Divorce Report', 'Mursal & gharīb (weak) via al-Qāsim ibn Abī Bazza'],
      ['Sources', 'Bukhārī 5212 · Qurʾān 4:128 · Ibn Kathīr']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Destitute widow sheltered', 'First marriage after Khadīja; he wed a widow neither young nor beautiful, shielding her from pagan family persecution.'],
        ['Old age & fear of separation', 'When Sawda grew very old and frail, she feared he might no longer want marital life with her (Ibn Kathīr on 4:128).'],
        ['Voluntary arrangement accepted', 'She gifted her day to ʿĀʾisha so she could remain his wife and be raised among his wives on the Day of Judgement (Bukhārī 5212).'],
        ['Weak counter-report rejected', 'The report that he actually sent her a divorce and took her back is mursal and gharīb, hence graded weak.']
      ]
    },
    p: [
      'Bukhārī 5212: Sawda gave her day and night to ʿĀʾisha, seeking to please the Messenger of Allah ﷺ. Ibn Kathīr (on 4:128) explains she did it because of her age, fearing he no longer wanted her.',
      'Sawda’s own choice: There is no authentic evidence that he ever intended to divorce her. Sawda had become very old, walked slowly and could barely move. She told him she no longer had any need of marital life but wished to be raised among his wives on the Day of Judgement.',
      'Weak divorce report: The report that he actually sent her a divorce and then took her back (al-Qāsim ibn Abī Bazza) is mursal and odd (gharīb), so weak.'
    ]
  });

  /* 10 */
  up('islam/general/d-av-sonstiges-islam-2/c-jauniyya-al-kindi-frau', {
    facts: [
      ['Legal Status', 'Already married by contract & dowry'],
      ['Chapter Placement', 'Bukhārī’s Book of Divorce'],
      ['Meaning of “sūqa”', 'Non-royal / commoner (tribal pride)'],
      ['Sources', 'Bukhārī 5254–5256 · Ibn Saʿd · Fatḥ al-Bārī']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (to al-Jawniyya)',
        en: 'You have sought refuge with the One who grants refuge.',
        ref: 'Bukhārī 5255'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Contracted marriage', 'Dowry agreed with her father, who said “She likes you and wants to marry you” (Bukhārī 5256; Ibn Saʿd).'],
        ['Gesture meant to reassure', 'He reached out only to put her at ease; she replied with tribal pride (“Can a queen give herself to a sūqa?”).'],
        ['Immediate respect for her words', 'The instant she said “I seek refuge in Allah from you,” he honoured it and stepped back.'],
        ['Honourable release with gifts', 'He ordered Abū Usayd to give her two white linen garments and escort her back to her family.']
      ]
    },
    p: [
      'Bukhārī 5255 (Abū Usayd): al-Jawniyya was brought to a house among the palms of Umayma bint al-Nuʿmān, with her nurse. The Prophet ﷺ came and said “Give yourself to me” (hibī nafsaki lī). She said: “Can a queen give herself to a commoner (sūqa)?” He reached out his hand to put her at ease, and she said: “I seek refuge in Allah from you.” He said: “You have sought refuge with the One who grants refuge.” Then he came out and said: “Abū Usayd, give her two white linen garments and take her back to her family.”',
      'Already contracted marriage: Bukhārī 5256 and Ibn Saʿd confirm the marriage had already been contracted: he had agreed the dowry with her father, who said “She likes you and wants to marry you.” Al-Bukhārī puts the report in the Book of Divorce.',
      'Ibn Ḥajar: “Give yourself to me” was meant to reassure her and win her heart. Maʿmar ibn al-Muthannā\'s report has him inviting her to come closer, and her refusing.',
      'Meaning of “sūqa”: Her remark was left over from pre-Islamic pride: in her speech sūqa meant anyone who isn\'t a king. She was a chieftain\'s daughter from a tribe new to Islam and expected royal pomp; he chose to be a servant-prophet rather than a king-prophet, and he excused her.',
      'Immediate release with gifts: He never struck anyone, and here he did the opposite of forcing: he released her at once, with gifts.'
    ]
  });

  /* 11 */
  up('islam/general/d-av-sonstiges-islam-2/c-jabir-junge-frau-heiraten', {
    facts: [
      ['Jābir’s Age', 'Around 16 (“little Jābir”)'],
      ['Orphaned Sisters', '7 or 9 daughters after Uḥud'],
      ['Wording', 'Mutual play (“you with her & she with you”)'],
      ['Sources', 'Muslim 715 · Bukhārī 5367']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (to Jābir)',
        en: 'Why not a young girl, so you could play with her and she with you, amuse her and she amuse you?',
        ref: 'Muslim 715'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What Polemicists Claim',
        items: [
          'Hides Jābir’s own young teenage age (~16)',
          'Distorts “play” into a one-sided arrangement'
        ]
      },
      right: {
        title: 'What Muslim 715 Actually Says',
        items: [
          'Friendly advice to a young man to marry a peer his own age',
          'Mutual phrasing: “you with her and she with you”',
          'Prophet ﷺ blessed Jābir for putting his orphaned sisters first'
        ]
      }
    },
    p: [
      'Muslim 715: Jābir\'s father ʿAbdullāh fell as a martyr at Uḥud, leaving nine or seven daughters. The Prophet ﷺ asked: “A virgin or previously married?” “Previously married.” “Why not a young girl, so you could play with her and she with you, amuse her and she amuse you?”',
      'Jābir’s selfless reason: Jābir replied: “I didn\'t like to bring them a girl like them; I preferred a woman who would look after them and teach them good manners.” The Prophet ﷺ said: “May Allah bless you.”',
      'Peer-age mutual joy: Jābir was so young he was nicknamed “little Jābir”. The play is mutual (“with her and she with you”), which describes two young people of a similar age, not a one-sided arrangement.',
      'Prophetic blessing: So the ḥadīth shows the Prophet ﷺ caring about a young man\'s happiness, then praising him even more for putting his orphaned sisters first.'
    ]
  });

  /* 12 */
  up('islam/morality/war/d-dr-purge-of-banu-qurayza', {
    who: 'Treason judged by Torah law',
    forkTitle: 'Two follow-up objections they raise',
    forkSub: 'Pick the angle they press next',
    optWho: ['If they say “Islamic law imposed”', 'If they cite Ḥassān’s poetry'],
    facts: [
      ['Year & Context', '627 CE · Battle of the Trench'],
      ['Crime', 'Secretly negotiated with besiegers'],
      ['Arbiter', 'Saʿd ibn Muʿādh (their own former ally)'],
      ['Legal Parallel', 'Deuteronomy 20:12–14 (Torah war law)']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Mutual defence pact', 'Banū Qurayẓa held a treaty binding both sides to defend Madinah together.'],
        ['Treason during al-Khandaq', 'During the month-long siege of 627 CE, they negotiated secretly with the attackers from inside the city’s defences.'],
        ['Surrender & former ally as arbiter', 'After ~25 days of siege they surrendered; judgement was entrusted to Saʿd ibn Muʿādh, their own ally (Bukhārī 4121).'],
        ['Torah standard applied', 'Fighting men were executed under wartime law and Deuteronomy 20:12–14; women, children, and treaty-keepers were spared.']
      ]
    },
    p: [
      'Background: Banū Qurayẓa were a Jewish tribe near Madinah with a treaty binding both sides to defend each other.',
      'Treason during the siege: In 627 CE the Makkans and their allies besieged Madinah for about a month in the Battle of the Trench (al-Khandaq). During the siege Banū Qurayẓa held secret negotiations with the attackers, breaking the pact from inside the city\'s defences.',
      'Verdict entrusted to their ally: After the siege the Muslims besieged their fortresses. After about 25 days they surrendered. The Prophet ﷺ gave the decision to Saʿd ibn Muʿādh, chief of the Aws, who had been their ally (Bukhārī 4121).',
      'Torah law of war: Saʿd ruled that the fighting men be executed and the women and children taken captive. That was the law of war of the time and the law of the Torah: Deuteronomy 20:12–14 prescribes killing the men of a city that makes war on you and taking the women and little ones.',
      'Non-combatants & treaty-keepers spared: Women and children were spared, and some men who had kept the treaty were spared too. Historians debate the numbers; the high figures come through Ibn Isḥāq without full chains.'
    ]
  });

  /* 13 */
  up('islam/morality/war/sword-verse-abrogation', {
    who: 'Classical consensus rejects abrogation',
    facts: [
      ['Verses in Question', 'Qurʾān 8:61 (peace) vs 9:5 (sword)'],
      ['Scholars Denying', 'Ibn Taymiyya, al-Ṭabarī, al-Zarkashī'],
      ['Ḥadīth Authorities', 'al-Bukhārī & Ibn Ḥajar (Fatḥ al-Bārī 6/234)'],
      ['Rule on 8:61', 'Remains permanently applicable']
    ],
    quotes: [
      {
        by: 'Ibn Taymiyya',
        en: 'Among those who say the peace verses were abrogated by the sword verse; and that is false.',
        ref: 'al-Jawāb al-Ṣaḥīḥ 1/64'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Polemical Claim',
        items: [
          'Claims 9:5 abrogated all peace verses',
          'Asserts Islam’s final word is perpetual war'
        ]
      },
      right: {
        title: 'Classical Scholarly Verdict',
        items: [
          'Ibn Taymiyya: the claim of abrogation is false',
          'al-Zarkashī: on examination the argument is weak and isn’t so',
          'al-Ṭabarī: absent from Qurʾān, Sunna & reason',
          'al-Bukhārī & Ibn Ḥajar: 8:61 remains binding for peace treaties'
        ]
      }
    },
    p: [
      'Ibn Taymiyya, al-Jawāb al-Ṣaḥīḥ li-man Baddala Dīn al-Masīḥ 1/64: the claim of abrogation is false.',
      'Al-Zarkashī (Badr al-Dīn), al-Burhān fī ʿUlūm al-Qurʾān 1/48: on examination the argument that the peace verses were abrogated by the sword verse is weak, and it isn\'t so.',
      'Al-Ṭabarī (Tafsīr on 8.61): claiming abrogation is wrong; it is in neither the Book nor the Sunna, and reason doesn\'t accept it.',
      'Al-Bukhārī, Kitāb al-Jizya: chapter on reconciliation (muwādaʿa) with the polytheists, being good to them, and the sin of whoever breaks it.',
      'Ibn Ḥajar, Fatḥ al-Bārī 6/234: 8:61 remains applicable for honouring peace treaties with non-Muslims.'
    ]
  });

  /* 14 */
  up('islam/morality/war/tawba-war-verses-in-context', {
    who: 'Context: treaty-breakers first',
    forkTitle: 'Four follow-up verses they cite',
    forkSub: 'Pick the verse they jump to next',
    optWho: ['If they cite 9:12', 'If they cite 9:28', 'If they cite 4:89', 'If they cite 9:29 (jizya)'],
    facts: [
      ['Target of Sūra 9', 'Treaty-breakers who attacked first (9:13)'],
      ['Treaty-Keepers', 'Fulfil their treaty to its term (9:4)'],
      ['Asylum Rule', 'Safe conduct guaranteed (9:6)'],
      ['Protected Civilians', 'Women, children, monks spared (al-Qurṭubī)']
    ],
    quotes: [
      {
        by: 'Qurʾān 9:4',
        en: 'Except those polytheists with whom you made a treaty and who didn’t fail you or support anyone against you: fulfil their treaty to its term.',
        ref: 'Sūrat al-Tawba 9:4'
      },
      {
        by: 'Qurʾān 9:13',
        en: 'Will you not fight a people who broke their oaths, plotted to expel the Messenger, and attacked you first?',
        ref: 'Sūrat al-Tawba 9:13'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Treaty-breakers identified (8:56; 9:3)', 'The declaration targets specific polytheists who broke their treaties and attacked first (9:13).'],
        ['Peaceful allies exempted (9:4)', 'Polytheists who kept their treaty and supported no one against Muslims must have their treaty fulfilled to its term.'],
        ['Safe passage & asylum (9:6)', 'If any polytheist seeks protection, he must be granted asylum to hear Allah’s word and delivered to safety.'],
        ['Combat limits (2:190; al-Qurṭubī)', 'Ibn Kathīr links 9:5 to 2:190 (“do not transgress”); al-Qurṭubī notes women, children, and monks may not be killed.']
      ]
    },
    p: [
      'Treaty-keepers honoured (8.56 & 9.3–4): 8:56: those who break their treaty every time. 9:3: the declaration of disassociation from the treaty-breakers. 9:4: “except those polytheists with whom you made a treaty and who didn\'t fail you or support anyone against you: fulfil their treaty to its term.”',
      'Asylum & safe passage (9.6): “If any polytheist seeks your protection, grant it so he may hear the word of Allah, then deliver him to his place of safety.”',
      'Who broke oaths & attacked first (9.13): “Will you not fight a people who broke their oaths, plotted to expel the Messenger, and attacked you first?”',
      'Ṭanṭāwī: the polytheists in 9:5 are those who broke their treaties and whose term had expired.',
      'Ibn Kathīr: the strongest view links it with 2:190, “fight those who fight you, but don\'t transgress”.'
    ]
  });

  /* 15 */
  up('islam/morality/war/asma-bint-marwan', {
    facts: [
      ['Authenticity', 'Fabricated (mawḍūʿ per al-Albānī)'],
      ['Narrator 1', 'Muḥammad ibn al-Ḥajjāj (“an evil liar”)'],
      ['Narrator 2', 'al-Wāqidī (“matrūk / forger”)'],
      ['Prophetic Rule', '“Kill no woman” (Abū Dāwūd 2669)']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (to Khālid)',
        en: 'Kill no woman and no hired labourer.',
        ref: 'Abū Dāwūd 2669'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Chain Audit of the Story',
        items: [
          'Version 1 via Muḥammad ibn al-Ḥajjāj (abandoned, “an evil liar”)',
          'Version 2 via al-Wāqidī (matrūk, counted among four forgers)',
          'Graded fabricated (mawḍūʿ) by al-Albānī'
        ]
      },
      right: {
        title: 'Established Prophetic Conduct',
        items: [
          'Forbade killing women: “she was not one who would fight”',
          'Ordered Khālid: “Kill no woman and no hired labourer” (Abū Dāwūd 2669)',
          'Pardoned Meccans at the conquest and the Jewish woman who poisoned him'
        ]
      }
    },
    p: [
      'He forbade killing women: seeing a slain woman he said “she was not one who would fight” and told Khālid: “Kill no woman and no hired labourer” (Abū Dāwūd 2669).',
      'Consistent clemency: He pardoned the Meccans at the conquest and even the Jewish woman who poisoned him.'
    ]
  });

  /* 16 */
  up('islam/morality/war/khalid-banu-jadhima', {
    facts: [
      ['Date', '8 AH (after Conquest of Mecca)'],
      ['Misunderstood Word', '“Ṣabaʾnā” (leaving paganism)'],
      ['Prophetic Response', 'Publicly disowned Khālid’s act twice'],
      ['Sources', 'Bukhārī 4339 · al-Khaṭṭābī · Ibn Isḥāq']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'O Allah, I disown what Khālid has done.',
        ref: 'Bukhārī 4339'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Verbal misunderstanding', 'Banū Jadhīma said “ṣabaʾnā” (the pagan term for leaving one’s religion), which Khālid misread as going over to another religion.'],
        ['Ibn ʿUmar’s refusal', 'ʿAbdullāh ibn ʿUmar refused to kill his captive during the episode.'],
        ['Public Prophetic disavowal', 'Raising his hands, the Prophet ﷺ declared twice: “O Allah, I disown what Khālid has done” (Bukhārī 4339).'],
        ['Restitution & lesson', 'He paid blood money for the dead (Ibn Isḥāq); al-Khaṭṭābī notes Khālid was rebuked for rushing before verifying.']
      ]
    },
    p: [
      'Date & restitution: 8 AH, after the conquest of Mecca, before Ḥunayn. He paid the blood money for the dead (Ibn Isḥāq).',
      'Lesson of the ḥadīth: So the ḥadīth is a condemnation of the act, and a lesson to verify people\'s intentions before any military action.'
    ]
  });

  /* 17 */
  up('islam/general/d-av-sonstiges-islam-1/c-um-qirfa-kamel-tot', {
    facts: [
      ['Primary Source', 'al-Wāqidī (accused of lying) / chainless Ibn Isḥāq'],
      ['Related Report', 'Broken chain (Ibn Ḥajar & al-Zaylaʿī)'],
      ['Prophetic Law', 'Mutilation & killing women forbidden'],
      ['Sources', 'Muslim 1731 · Abū Dāwūd 2669 · al-Dirāya']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (to commanders)',
        en: 'Fight, but don’t take spoils before they are divided, don’t betray, don’t mutilate, and don’t kill a child.',
        ref: 'Muslim 1731'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Weak & Broken Story Chains',
        items: [
          'Ibn Saʿd / Ibn al-Jawzī rely on al-Wāqidī (accused of lying)',
          'Ibn Hishām / Ibn Isḥāq give no chain (isnād) at all',
          'al-Dāraquṭnī’s version has a broken chain (Saʿīd never met Abū Bakr)'
        ]
      },
      right: {
        title: 'Authentic Islamic Rules of War',
        items: [
          'Mutilation explicitly forbidden (Muslim 1731)',
          'Killing non-combatant women forbidden (Abū Dāwūd 2669)',
          'Ibn Ḥajar & al-Zaylaʿī grade the broken report weak'
        ]
      }
    },
    p: [
      'ʿAlī ibn Nāyif al-Shaḥūd (al-Mufaṣṣal): the report is in Ibn Saʿd\'s Ṭabaqāt, and Ibn al-Jawzī took it from him in al-Muntaẓam; its source is Muḥammad ibn ʿUmar al-Wāqidī, accused of lying by the ḥadīth scholars. Ibn Kathīr mentions it briefly in al-Bidāya without comment. Ibn Hishām has it from Ibn Isḥāq, who gives no chain. “In short, the report is not authentic, so it may not be used as evidence.”',
      'Ibn Ḥajar (al-Dirāya fī Takhrīj Aḥādīth al-Hidāya): al-Dāraquṭnī reported with a broken chain that Abū Bakr killed Umm Qirfa al-Fazāriyya and mutilated her when she apostatised; a broken report is weak.',
      'Al-Zaylaʿī (Naṣb al-Rāya): al-Dāraquṭnī\'s report via Saʿīd ibn ʿAbd al-ʿAzīz describes her legs tied to two horses, but Saʿīd never met Abū Bakr, so the chain is broken.',
      'Ban on mutilation (Muslim 1731): Zayd ibn Ḥāritha was an honourable man who would not do this, and mutilation is forbidden in Islam. Buraydah: the Prophet ﷺ told his commanders “Fight, but don\'t take spoils before they are divided, don\'t betray, don\'t mutilate, and don\'t kill a child” (Muslim).',
      'Ban on killing women (Abū Dāwūd 2669): Women may not be killed in war unless they fight or incite and help the fighters. Rabāḥ ibn Rabīʿ: seeing people gathered round a woman who had been killed, the Prophet ﷺ said “She should not have been fought”, and sent word to Khālid: “Don\'t kill a woman or a hired servant” (Aḥmad, Abū Dāwūd).'
    ]
  });

  /* 18 */
  up('islam/general/d-av-sonstiges-islam-1/c-schwert-und-sperr-kriegsbeute', {
    facts: [
      ['Grading', 'Ḥasan (cited in Bukhārī chapter heading)'],
      ['Legal Distinction', 'Spoils lawful unlike earlier prophets (Bukhārī 335)'],
      ['Meaning', 'Victory in forced wars, not raiding'],
      ['Commentary', 'Ibn Ḥajar, Fatḥ al-Bārī 6/98']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (via Ibn ʿUmar)',
        en: 'My provision has been placed under the shade of my spear, and humiliation and lowliness on whoever opposes my command.',
        ref: 'Bukhārī, Kitāb al-Jihād, bāb 88'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Polemical Caricature',
        items: [
          'Claims the Prophet ﷺ lived by raiding for plunder',
          'Ignores the authentic parallel in Bukhārī 335'
        ]
      },
      right: {
        title: 'Prophetic & Historical Meaning',
        items: [
          'Spoils were uniquely made lawful for him unlike earlier prophets (Bukhārī 335)',
          'Foretells victory in wars his enemies repeatedly forced on him',
          'Predicts the ummah’s historical victories through imposed conflicts (Fatḥ al-Bārī 6/98)'
        ]
      }
    },
    p: [
      'Ibn ʿUmar: the Prophet ﷺ said “My provision has been placed under the shade of my spear, and humiliation and lowliness on whoever opposes my command” (ḥasan; al-Bukhārī cites it as a chapter heading, “What was said about spears”).',
      'Spoils made lawful (Bukhārī 335): With the authentic statement in Ṣaḥīḥ al-Bukhārī that spoils were made lawful for him though not for the prophets before him, he indicated that as long as he lived his enemies would fight him and he would defeat them by Allah\'s permission, so the spoils would come to him.',
      'Historical prophecy (Fatḥ al-Bārī 6/98): It also foretells that the ummah would gain spoils through the forced confrontations of history, and that the shade of sword and spear would remain because of those conflicts until the Day of Judgement, with the ummah mostly victorious. History confirmed it (Fatḥ al-Bārī 6/98).'
    ]
  });

  /* 19 */
  up('islam/general/d-av-sonstiges-islam-1/c-krieg-ist-betrug', {
    facts: [
      ['Arabic Term', 'Khudʿa (military ruse / feint)'],
      ['Example', 'Concealing a campaign’s destination'],
      ['Strict Limit', 'Never allowed if it breaks a treaty'],
      ['Sources', 'Bukhārī 3030 · Abū Dāwūd 2637 · al-Nawawī 1352']
    ],
    quotes: [
      {
        by: 'al-Nawawī',
        en: 'Khudʿa means using a strategy that leaves the enemy mistaken about your intent; it is allowed in Islam in a state of war.',
        ref: 'Riyāḍ al-Ṣāliḥīn, ch. 234, no. 1352'
      },
      {
        by: 'Dr Joseph Caddell (NCSU)',
        en: 'Deception in warfare is probably as old as armed conflict itself. The intent to confuse an opponent is obvious, and the rewards can be quickly realised.',
        ref: 'Deception 101'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Permitted Battlefield Tactics',
        items: [
          'Feigning a different march destination (Abū Dāwūd 2637)',
          'Leaving active enemies mistaken about military intent (al-Nawawī)',
          'Standard military strategy across history (J. Caddell)'
        ]
      },
      right: {
        title: 'Strictly Forbidden',
        items: [
          'Breaking the terms of a treaty or agreement (ʿAwn al-Maʿbūd)',
          'Treachery outside an active state of war'
        ]
      }
    },
    p: [
      'Bukhārī 3030: “War is deception (khudʿa).” ʿAbd al-Raḥmān ibn Kaʿb: when the Prophet ﷺ intended a campaign he would make it look as if he was going elsewhere, and say “War is deception” (Abū Dāwūd 2637, ṣaḥīḥ).',
      'Military history (Dr Joseph Caddell): Dr Joseph Caddell, professor of military history at North Carolina State University: “Deception in warfare is probably as old as armed conflict itself. The intent to confuse an opponent is obvious, and the rewards can be quickly realised.”',
      'Al-Nawawī: khudʿa means using a strategy that leaves the enemy mistaken about your intent; it is allowed in Islam in a state of war (Riyāḍ al-Ṣāliḥīn, ch. 234, no. 1352).',
      'Treaty limit (scholarly consensus): “The scholars agree that it is permissible to deceive the enemy in war in any way, except where it would break the terms of a treaty or agreement, in which case it is not allowed” (ʿAwn al-Maʿbūd on Abū Dāwūd; Ḥāshiyat al-Sindī on Ibn Mājah 2833).'
    ]
  });

  /* 20 */
  up('islam/general/d-av-sonstiges-islam-1/c-dhul-khaslah-was-passiert-dort', {
    facts: [
      ['Site', 'Idol-temple of Daws (“Kaʿba of Yemen”)'],
      ['Force Sent', 'Jarīr ibn ʿAbdullāh + 150 men of Aḥmas'],
      ['Who Was Fought', 'Armed defenders (civilians protected)'],
      ['Prophet’s Prayer', '“O Allah, guide Daws and bring them to me”']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (to commanders)',
        en: 'Do not kill an old man, a child, a youth or a woman.',
        ref: 'Abū Dāwūd 2608; cf. Bukhārī 2851'
      },
      {
        by: 'Prophet Muḥammad ﷺ (about Daws)',
        en: 'O Allah, guide Daws and bring them to me.',
        ref: 'Bukhārī 4131'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Misreading Jarīr’s Summary',
        items: [
          'Reads “killed whoever we found there” as slaughtering civilians',
          'Ignores the Daws’s hostility and rival “Kaʿba of Yemen”'
        ]
      },
      right: {
        title: 'Islamic Law & Prophetic Conduct',
        items: [
          'Commanders forbidden from killing women, children, old men, farmers',
          'No jurist ever read Jarīr as permitting killing protected non-combatants',
          'Prophet ﷺ refused to curse Daws and prayed for their guidance (Bukhārī 4131)'
        ]
      }
    },
    p: [
      'Jarīr ibn ʿAbdullāh: “In the Jāhiliyya there was a house called Dhū al-Khalaṣa, said to be the Kaʿba of Yemen. The Prophet ﷺ said: Will you rid me of Dhū al-Khalaṣa? I rode with 150 men of Aḥmas; we tore it down and killed whoever we found there” (Muslim 2476).',
      'Abū Hurayra: Dhū al-Khalaṣa was the idol of the Daws that they worshipped in the Jāhiliyya (Bukhārī 6699). Calling it the Kaʿba of Yemen was a direct challenge to the holiest site of Islam, and the Daws were known for blood feuds and hostility.',
      'The Prophet ﷺ told every commander: “Go out in the name of Allah… do not steal from the spoils, do not betray, do not mutilate, and do not kill children” (Tirmidhī 1408). “Do not kill an old man, a child, a youth or a woman” (Abū Dāwūd 2608). Ibn ʿUmar: a woman was found killed in one battle, and he condemned the killing of women and children (Bukhārī 2851).',
      'ʿUmar: “Fear Allah regarding the farmers who don\'t make war on you” (Saʿīd ibn Manṣūr 2466). Ibn ʿAbbās: “Don\'t kill women, children, old men, or anyone who comes to you in peace and holds back his hand” (al-Ṭabarī on 2:190). No jurist ever read Jarīr\'s words as permission to kill these protected people; not even terrorists use it.',
      'Prayer for the Daws (Bukhārī 4131): Yet he refused to condemn the Daws. When the Companions asked him to curse them, he prayed: “O Allah, guide Daws and bring them to me” (Bukhārī 4131), and told one of them “Go back to your people, invite them to Allah, and be gentle” (Tārīkh Dimashq). Al-Qārī: he prayed for them because he was a mercy to the worlds (Mirqāt al-Mafātīḥ 6005). He ordered the raid only near the end of his life, after giving them years, as a last resort to secure the Muslims\' freedom to practise monotheism.'
    ]
  });

  /* 21 */
  up('islam/general/d-av-sonstiges-islam-2/c-schatten-des-schwertes-paradies', {
    facts: [
      ['Omitted Opening', '“Do not wish to meet the enemy”'],
      ['First Command', '“Ask Allah for safety”'],
      ['Battle Prayer', 'Against the Confederates (al-Aḥzāb)'],
      ['Sources', 'Bukhārī 2818, 2965–2966 · Muslim 1742']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'O people, do not wish to meet the enemy, and ask Allah for safety. But if you meet them, be patient, and know that Paradise lies under the shade of swords.',
        ref: 'Bukhārī 2965–2966; Muslim 1742'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Truncated Polemic',
        items: [
          'Quotes only: “Paradise lies under the shade of swords”',
          'Cuts off the first half to imply eagerness for battle'
        ]
      },
      right: {
        title: 'Complete Ḥadīth',
        items: [
          'Opens with: “Do not wish to meet the enemy”',
          'Commands: “Ask Allah for safety”',
          'Urges patience only if battle is forced upon them'
        ]
      }
    },
    p: [
      'ʿAbdullāh ibn Abī Awfā wrote to ʿUmar ibn ʿUbaydullāh: during a war the Messenger of Allah ﷺ waited until the sun declined, then stood among the people and said: “O people, do not wish to meet the enemy, and ask Allah for safety. But if you meet them, be patient, and know that Paradise lies under the shade of swords.” Then he prayed: “O Allah, Revealer of the Book, Mover of the clouds, Defeater of the Confederates (al-Aḥzāb), defeat them and give us victory” (Bukhārī 2965–2966).',
      'Corroborated across collections: The same wording exists through several chains and in Muslim, Abū Dāwūd and others. The short quote cuts off the first half.'
    ]
  });

  /* 22 */
  up('islam/general/d-av-sonstiges-islam-3/c-islam-nur-in-minderheit-friedlich', {
    facts: [
      ['Makkah (10,000 men)', 'Persecutors freed (“Go, you are free!”)'],
      ['Jerusalem Covenant', 'Lives, property, churches & crosses protected'],
      ['Religious Freedom', 'No forced conversion; rites preserved'],
      ['Sources', 'Ibn Isḥāq (Rotter p. 224) · al-Ṭabarī 2/449']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (Conquest of Makkah)',
        en: 'Go, you are free!',
        ref: 'Ibn Isḥāq, al-Sīra (Rotter p. 224)'
      },
      {
        by: 'ʿUmar’s Covenant of Jerusalem',
        en: 'Security for their persons, property, churches, crosses, the sick and healthy of the city and all the rites of their religion. Their churches will not be inhabited or destroyed… they will not be forcibly converted.',
        ref: 'al-Ṭabarī, Tārīkh 2/449'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Conquest of Makkah',
        items: [
          'Entered with 10,000 men over the Quraysh who tortured and expelled them',
          'Granted general amnesty: “Go, you are free!”'
        ]
      },
      right: {
        title: 'Covenant of Jerusalem (ʿUmar)',
        items: [
          'Guaranteed Christians’ lives, property, churches, crosses & rites',
          'Forbade forced conversion; safe conduct for departures',
          'Witnessed by Khālid, ʿAmr ibn al-ʿĀṣ, Ibn ʿAwf & Muʿāwiya'
        ]
      }
    },
    p: [
      'The conquest of Makkah: with 10,000 men the Muslims took the city of the Quraysh who had tortured and expelled them. “O Quraysh, what do you think I will do with you?” “Good! You are a noble brother, son of a noble brother.” He said: “Go, you are free!” (Ibn Isḥāq, trans. Gernot Rotter, p. 224).',
      'ʿUmar\'s covenant with Jerusalem: “This is the security which ʿUmar, the servant of God, Commander of the Faithful, has given the people of Jerusalem: security for their persons, property, churches, crosses, the sick and healthy of the city and all the rites of their religion. Their churches will not be inhabited or destroyed… they will not be forcibly converted.” Those who wanted to leave with the Byzantines had safe conduct to their refuge; villagers could stay or return; nothing was taken before their harvest. Witnessed by Khālid ibn al-Walīd, ʿAmr ibn al-ʿĀṣ, ʿAbd al-Raḥmān ibn ʿAwf and Muʿāwiya.',
      'Clause requested by Christians: At the Christians\' own request, the covenant added that no Jews would live with them in Jerusalem.'
    ]
  });

  /* 23 */
  up('islam/morality/slavery/one-slave-for-two-black-slaves', {
    facts: [
      ['Purpose of Transaction', 'Buying a Muslim slave free'],
      ['Who Set the Price', 'The owner, not the Prophet ﷺ'],
      ['Bilāl’s Status', 'Bought for 200 ūqiyya gold; promised Paradise'],
      ['Sources', 'Muslim 1602 · al-Dhahabī, Siyar 1/353']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Misreading of Muslim 1602',
        items: [
          'Claims the Prophet ﷺ priced two black slaves below one',
          'Ignores why compensation was paid to the master'
        ]
      },
      right: {
        title: 'Actual Facts & Bilāl’s Example',
        items: [
          'Prevented taking the master’s legal property without compensation',
          'The owner demanded the price; freed man’s race is not stated',
          'The two slaves belonged to Companions, not the Prophet ﷺ',
          'Abū Bakr paid 200 ūqiyya of gold to free Bilāl (Siyar 1/353)'
        ]
      }
    },
    p: [
      'Bilāl’s ransom in gold: Abū Bakr bought Bilāl, a black slave tortured under stones, for 200 ūqiyya of gold; the sellers said they\'d have taken one piece, and he said he\'d have paid a hundred (al-Dhahabī, Siyar 1/353: strong chain). Bilāl is among the people of Paradise.',
      'Historical context of exchange: At that time Islam was small and the prevailing forms of payment had to be used; the two were companions\' slaves, not his own.'
    ]
  });

  /* 24 */
  up('islam/morality/women/d-ia-women-and-the-quran/t-surah-2-223-women-to-farmland', {
    facts: [
      ['Occasion', 'Refuted superstition on conception'],
      ['Paired Metaphor', 'Spouses as garments for each other (2:187)'],
      ['Legal Limit', 'Excludes anal intercourse (Tirmidhī 2979)'],
      ['Sources', 'Qurʾān 2:223; 2:187 · Bukhārī 4528 · Muslim 1435']
    ],
    quotes: [
      {
        by: 'Qurʾān 2:223',
        en: 'Your wives are a tilth for you, so go to your tilth when or how you will, and send forth good for yourselves.',
        ref: 'Sūrat al-Baqara 2:223'
      },
      {
        by: 'Qurʾān 2:187',
        en: 'They are a garment for you and you are a garment for them.',
        ref: 'Sūrat al-Baqara 2:187'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Metaphor of Tilth (2:223)',
        items: [
          'Answered a Jewish superstition about conception positions',
          'Specifies the place of fertility (excludes anal: Tirmidhī 2979)',
          'Ends with moral accountability: “send forth good for yourselves”'
        ]
      },
      right: {
        title: 'Metaphor of Garment (2:187)',
        items: [
          'Closest thing to the body — mutual closeness',
          'Covers flaws, beautifies, and protects both spouses',
          'Neither metaphor reduces a human spouse to an object'
        ]
      }
    },
    p: [
      'The verse itself (2.223): “Your wives are a tilth for you, so go to your tilth when or how you will, and send forth good for yourselves” (2:223).',
      'Occasion of revelation (Bukhārī 4528): The Companions asked about a Jewish claim that if a man approached his wife from behind, the child would be born cross-eyed. The verse was revealed in response (Bukhārī 4528, Muslim 1435). It removes a superstition: the position doesn\'t affect the child, as long as it is the place of tilth, where children come from. That\'s why the image is a farm: it\'s about where something grows.',
      'Paired metaphor with 2.187: It\'s a metaphor, like 2:187: “They are a garment for you and you are a garment for them.” A garment is the closest thing to the body; it covers flaws, beautifies, protects. Nobody reads that as calling people clothes. A farmer values his land, protects and tends it, and doesn\'t sow in anyone else\'s field; a man who took the image seriously couldn\'t treat his wife as a tool.',
      'Explicit boundary & accountability: It isn\'t “anything goes”: it sets a limit, the place of tilth. The Prophet ﷺ said the verse covers different positions but not the anus (Tirmidhī 2979, Abū Dāwūd 2164). And it ends with “send forth good for yourselves”: the husband answers for how he behaves.'
    ]
  });

  /* 25 */
  up('islam/morality/women/abu-bakr-pokes-aisha', {
    facts: [
      ['Arabic Verb', 'Ṭaʿana (poked / prodded in the side)'],
      ['Circumstance', 'Lost necklace; no water at camp'],
      ['Revelation', 'Verse of tayammum (Qurʾān 5:6)'],
      ['Sources', 'Bukhārī 334, 3672 · Qurʾān 5:6']
    ],
    quotes: [
      {
        by: 'Usayd ibn Ḥuḍayr (to ʿĀʾisha’s family)',
        en: 'This is not the first of your blessings, O family of Abū Bakr.',
        ref: 'Bukhārī 334'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Lost necklace & dry camp', 'On a journey, ʿĀʾisha’s necklace broke; everyone stopped where there was no water, and people complained to Abū Bakr.'],
        ['Father’s prod (ṭaʿana)', 'While the Prophet ﷺ slept with his head on her lap, Abū Bakr scolded her and poked (ṭaʿana) her side; she stayed still not to wake him.'],
        ['Revelation of tayammum', 'The next morning the verse of tayammum (Qurʾān 5:6) was revealed for the community.'],
        ['Remembered as a blessing', 'Usayd ibn Ḥuḍayr said: “This is not the first of your blessings, O family of Abū Bakr” (Bukhārī 334).']
      ]
    }
  });

  /* 26 */
  up('islam/morality/women/ayyub-38-44', {
    facts: [
      ['Prophetic (Marfūʿ) Basis', 'None whatsoever'],
      ['All Three Tafsīr Chains', 'Graded weak (ḍaʿīf)'],
      ['Key Term', 'Ḍighth (bundle of thin grass blades)'],
      ['Purpose of 38:44', 'Merciful oath-relief, avoiding harm']
    ],
    quotes: [
      {
        by: 'Qurʾān 38:44',
        en: 'Take a bundle of grass and strike with it.',
        ref: 'Sūrat Ṣād 38:44'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Three Weak Backstory Chains',
        items: [
          'Chain 1 (Zubayd): lived 30 years after Prophet ﷺ; non-prophetic',
          'Chain 2 (Yūsuf ibn Mihrān): little known, graded ḍaʿīf by Ibn Ḥajar',
          'Chain 3 (Abū Bakr ibn ʿAyyāsh): failing memory in old age'
        ]
      },
      right: {
        title: 'Actual Meaning of 38:44',
        items: [
          'No marfūʿ ḥadīth traces the beating story to the Prophet ﷺ',
          'Verse 38:44 is a mercy relieving an oath',
          'Light touch with thin blades (ḍighth) avoids both oath-breaking and harm'
        ]
      }
    },
    p: [
      'Chain 1 (the story of Iblīs coming as a physician): ḍaʿīf — runs through Zubayd, who lived 30 years after the Prophet ﷺ; not a prophetic narration.',
      'Chain 2: ḍaʿīf — runs through Yūsuf ibn Mihrān, who is little known and graded weak (ḍaʿīf) by Ibn Ḥajar.',
      'Chain 3: ḍaʿīf — runs through Abū Bakr ibn ʿAyyāsh, whose memory declined in old age. Scholar assessments: Ibn Ḥajar (“reliable and pious, but his memory weakened in old age”); al-Dhahabī / Aḥmad ibn Ḥanbal (“trustworthy, but makes occasional errors”); Abū Ḥātim (“equal to Sharīk in memory, though Abū Bakr\'s book is better”); al-Bazzār (“not a great ḥadīth memoriser”); al-Sājī (“honest, but makes mistakes”); al-ʿIjlī (“formerly reliable and pious, made some errors”); Ibn Saʿd (“grew old and made many errors”); Yaḥyā ibn Maʿīn (“weak in his narrations from al-Aʿmash”); ʿAlī ibn al-Madīnī & Yaḥyā al-Qaṭṭān (criticised him for failing memory in old age); Yaʿqūb ibn Shayba (“pious, but his ḥadīth are inconsistent”).'
    ]
  });

  /* 27 */
  up('islam/morality/women/wife-voluntary-fasting', {
    facts: [
      ['Scope in Islam', 'Voluntary (nafl) fasts when husband is home'],
      ['Obligatory Worship', 'Ramaḍān, prayers & vows untouchable'],
      ['Biblical Contrast', 'Numbers 30:3–15 (father/husband annuls vows)'],
      ['Sources', 'Bukhārī 5195 · Muslim 1026 · Numbers 30:3–15']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Islamic Rule (Bukhārī 5195 / Muslim 1026)',
        items: [
          'Applies ONLY to voluntary (nafl) fasting while husband is present',
          'Protects mutual marital rights',
          'No husband can cancel Ramaḍān, prayers, or vows to Allah'
        ]
      },
      right: {
        title: 'Biblical Rule (Numbers 30:3–15)',
        items: [
          'Father or husband can unilaterally annul a woman’s sacred vow to God',
          'If he disapproves on hearing it, the vow does not stand',
          'The LORD voids her vow because she is under male authority'
        ]
      }
    },
    p: [
      'Turn the tables — Bible (Numbers 30.3–15): Numbers 30 (vv. 3–15): a father or husband has the legal authority to annul a woman\'s vow or pledge to God; if he disapproves of it when he hears of it, the vow does not stand and the LORD forgives her because she is under the man\'s authority and no longer bound by the vow.',
      'Islamic scope (nafl only): In Islam, by contrast, no husband can cancel his wife\'s obligatory worship (Ramaḍān fasting, prayers, vows to Allah); the permission rule concerns only extra voluntary fasts on days he is at home.'
    ]
  });

  /* 28 */
  up('islam/general/d-av-sonstiges-islam-1/c-frau-soll-mann-niederwerfen', {
    facts: [
      ['Occasion', 'Muʿādh prostrating after visiting Shām'],
      ['Arabic Grammar', 'Law (ḥarf imtināʿ li-imtināʿ) negates both'],
      ['Mutual Duty', 'Husband owes dowry, housing, care (4:34)'],
      ['Sources', 'Tirmidhī 1159 · Ibn Mājah 1853 · Ibn ʿUthaymīn']
    ],
    quotes: [
      {
        by: 'Ibn ʿUthaymīn',
        en: 'The husband’s right is conditional on him fulfilling her rights; if he doesn’t, she may withhold his in the same measure.',
        ref: 'Commentary citing Qurʾān 2:194; 16:126'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Actual occasion (Muʿādh)', 'Muʿādh returned from Shām after seeing Christians bow to bishops and prostrated to the Prophet ﷺ, who forbade it.'],
        ['Conditional particle “law”', 'In Arabic grammar, law negates both halves: he orders no one to prostrate to anyone, so a wife is not ordered either.'],
        ['Basis in financial duty (4:34)', 'Mufassirūn link his right to financial obligations: dowry, maintenance, housing, clothing, medical care, protection.'],
        ['Conditional reciprocity', 'Ibn ʿUthaymīn notes his right depends on meeting her rights; if he fails, she may withhold or seek judicial divorce.']
      ]
    },
    p: [
      'Context: Muʿādh ibn Jabal returned from Shām, where he had seen Christians prostrating to their bishops, and prostrated to the Prophet ﷺ. He told him: “Don\'t do that.” The ḥadīth is a rejection of a man worshipping a man, not a teaching about women.',
      'Grammar: “law” is ḥarf imtināʿ li-imtināʿ, “negation because of negation”: since the first doesn\'t happen, neither does the second. Like saying “if I gave anyone a gift, it would be you”: the real point is that I give no one gifts.',
      'Reason: it\'s not “because she is a woman”, but “because of the right Allah has given him over her”, which the mufassirūn (al-Ṭabarī, al-Qurṭubī, Ibn Kathīr, al-Rāzī) explain from 4:34 as financial responsibility: dowry, maintenance, housing, clothing, medical care, protection. Her money stays hers; he must support her even if she is richer, and if he fails she can take him to the qāḍī and divorce.',
      'Ibn ʿUthaymīn: the husband\'s right is conditional on him fulfilling her rights; if he doesn\'t, she may withhold his in the same measure (2:194, 16:126). Islamweb: the ḥadīth is authentic and forbids a wife from prostrating; it would be disbelief if done as worship.'
    ]
  });

  /* 29 */
  up('islam/general/d-av-sonstiges-islam-2/c-engel-verfluchen-frau', {
    facts: [
      ['Meaning of Laʿn', 'Angels pray against unjust abandonment'],
      ['Husband’s Authority', 'Zero licence for force or coercion'],
      ['Christian Parallels', 'Aquinas, Chrysostom, Augustine (1 Cor 7:4–5)'],
      ['Sources', 'Bukhārī 3237 · Muslim 1436 · ST Suppl. Q64']
    ],
    quotes: [
      {
        by: 'Thomas Aquinas',
        en: 'The wife has not power of her own body, but the husband (1 Cor 7:4), so she must render the debt even during menstruation if he asks.',
        ref: 'Summa Theologiae, Suppl. Q64 a4'
      },
      {
        by: 'John Chrysostom',
        en: 'A wife who abstains without her husband’s consent commits a form of theft; she becomes responsible for his fornication.',
        ref: 'Homily 19 on 1 Corinthians (7:5)'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Islamic Warning (Bukhārī 3237 / Muslim 1436)',
        items: [
          'Laʿn = angels’ prayer for withdrawal from mercy, not coercion',
          'Applies only to refusal without a valid reason',
          'Gives the husband no right to force his wife'
        ]
      },
      right: {
        title: 'Church Fathers & Aquinas',
        items: [
          'Chrysostom: abstaining without consent is “a form of theft”',
          'Augustine (Ep. 262): continence made her responsible for his adultery',
          'Aquinas (Q64 a4): must render the debt even during menstruation',
          'Aquinas (Q154 a7): forcibly taking betrothed is violence, not rape'
        ]
      }
    },
    p: [
      'Meaning of “laʿn” (curses): Averroes notes that scholars explain the angels\' “cursing” (laʿn) as a supplication for withdrawal from mercy, not a licence for the husband, and it applies to refusal without a valid reason.',
      'Church Father — Aquinas (Suppl. Q64): Aquinas (Supplement Q64 a1): a wife has power over her husband\'s body only so far as his well-being allows; if he has already rendered the debt and can\'t again, a wife who demands more “behaves rather as a harlot than as a wife”. Q64 a4: “The wife has not power of her own body, but the husband” (1 Cor 7:4), so she must render the debt even during menstruation if he asks.',
      'Church Father — Chrysostom (1 Cor 7.5): John Chrysostom on 1 Corinthians 7:5: a wife who abstains without her husband\'s consent commits “a form of theft”; she becomes responsible for his fornication.',
      'Church Father — Augustine (Letter 262): Augustine, Letter 262 to Ecdicia: by vowing continence without her husband\'s agreement and giving away her property, her disobedience made her responsible for his adultery.',
      'Church Father — Aquinas (II-II Q154 a7): Aquinas (II-II Q154 a7 ad 4): a man who forcibly takes his newly betrothed wife from her parents\' house is guilty of violence but not of rape, because betrothal gave him a right to her.'
    ]
  });

  /* 30 */
  up('islam/morality/d-ia-apostasy-law', {
    who: 'Only apostasy joined with war',
    facts: [
      ['Prophetic Precedent', 'Bedouin left Madinah unharmed (Bukhārī 7322)'],
      ['Ḥanafī & Classical Law', 'Death tied to ḥirāba (waging war)'],
      ['Exempted Groups', 'Women, blind, crippled, elderly & children'],
      ['ʿUmar & Salaf', 'Prison & indefinite call to repent (al-Nakhaʿī)']
    ],
    quotes: [
      {
        by: 'Abū Qilāba (via Bukhārī)',
        en: 'The Prophet ﷺ never killed except in three cases: a murderer, a married adulterer, and a man who fought against Allah and His Messenger and apostatised from Islam.',
        ref: 'Bukhārī 6899'
      },
      {
        by: 'ʿUmar ibn al-Khaṭṭāb',
        en: 'To bring them back peacefully is dearer to me than everything the sun rises on.',
        ref: 'Muṣannaf ʿAbd al-Razzāq 18696'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Private Change of Belief',
        items: [
          'Bedouin left Madinah untouched (Bukhārī 7322)',
          'al-Bābartī: disbelief itself never makes blood lawful',
          'Ibn al-Qayyim: no danger if he keeps it to himself',
          'ʿUmar & al-Nakhaʿī: prison & endless invitation to repent'
        ]
      },
      right: {
        title: 'Apostasy Joined with War (Ḥirāba)',
        items: [
          'Bukhārī 6899 & Nasāʾī 4048 specify “wages war”',
          'Ḥanafīs read “whoever changes his religion” as muḥārib',
          'Even Nasāʾī 4048 includes banishment as an option',
          'Women, blind, crippled, old & children are not killed'
        ]
      }
    },
    p: [
      'Abū Qilāba’s three exceptions (Bukhārī 6899): Abū Qilāba, the tābiʿī, swore by Allah that the Prophet ﷺ never killed except in three cases: a murderer, a married adulterer, and “a man who fought against Allah and His Messenger and apostatised from Islam” (Bukhārī 6899). The individual who simply leaves without harming or fighting Muslims isn\'t in the list.',
      'Al-Nasāʾī 4048 (ʿĀʾisha): “…and a man who leaves Islam and wages war against Allah and His Messenger: he is killed, crucified or banished.” So even then banishment is an option.',
      'Bukhārī 7322: a bedouin who had pledged allegiance got fever in Madinah and asked three times to be released from his pledge; the Prophet ﷺ refused, and the man left Madinah. He wasn\'t killed.',
      'Ibn Taymiyya on Abū Ḥanīfa\'s school: only the one who wages war is killed, because that is ḥirāba; he makes original disbelief and apostasy the same, so the apostate is not killed without ḥirāba. Mālik and one view of Aḥmad agree in principle, allowing killing only as taʿzīr in certain cases (Majmūʿ al-Fatāwā 20/99–101).',
      'Akmal al-Dīn al-Bābartī (Ḥanafī, 14th c.): disbelief itself doesn\'t make blood lawful; that is why the blind, the crippled, the old man, the old woman and the child who apostatise are not killed (al-ʿInāya 3/347). Majmaʿ al-Anhur 2/495: “the Ḥanafīs interpreted the ḥadīth ‘whoever changes his religion, kill him’ as referring to the muḥārib (combatant)”, and an apostate woman is not killed. Al-ʿAynī: someone refusing zakāt within our borders without fighting is not killed; the Companions fought those who withheld it and made war (ʿUmdat al-Qārī 24/122).',
      'Ibn al-Qayyim: the death penalty is reserved for the gravest crimes; if the apostate keeps his evil to himself and accepts Allah\'s laws over him, there is no danger in him remaining among the Muslims (Iʿlām al-Muwaqqiʿīn 3/339).',
      'Context: enemies used a tactic of converting falsely and then publicly leaving, saying Islam was a lie, to spread fitna; the law targeted that. Belief itself can\'t be compelled (2:256), which is why private disbelief was never investigated.'
    ]
  });

  /* 31 */
  up('islam/morality/d-ia-apostasy-and-blasphemy-laws', {
    who: 'Torah & Church upheld death',
    facts: [
      ['Torah Penalty', 'Stoning for apostasy, enticement & blasphemy'],
      ['Exodus 32:27–28', '~3,000 apostates slain after golden calf'],
      ['Church Consensus', 'Aquinas, Tertullian, Augustine compelled heretics'],
      ['Shift to Tolerance', 'Modern secular liberalism, not Scripture']
    ],
    quotes: [
      {
        by: 'Deuteronomy 13:2–11 (Torah)',
        en: 'Your hand shall be first against him to put him to death.',
        ref: 'Deut 13:9'
      },
      {
        by: 'Thomas Aquinas',
        en: 'Much more reason is there for heretics… to be not only excommunicated but even put to death.',
        ref: 'Summa Theologiae II-II Q11 a3'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Old Testament Law',
        items: [
          'Deut 13 & 17: stone enticers & idolaters (even close family)',
          'Exod 32 & Num 25: mass execution of apostates',
          '2 Chr 15:13: death for not seeking the Lord (man or woman)',
          'Lev 24:16: stoning for blasphemy (native or foreigner)'
        ]
      },
      right: {
        title: 'Church Fathers & Theologians',
        items: [
          'Tertullian (Scorpiace 2): heretics must be compelled, not persuaded',
          'Augustine (Ep. 93.5): “Compel them to come in” (Luke 14:23)',
          'Aquinas (ST II-II Q11 a3): heretics deserve death more than forgers',
          'Opposition today stems from modern liberalism, not classical Christianity'
        ]
      }
    },
    p: [
      'Bible — Deuteronomy 13 (vv. 2–11): enticing others to idolatry, even by a prophet or close relative: “your hand shall be first against him to put him to death”, by stoning.',
      'Bible — Deuteronomy 17 (vv. 2–5): on the testimony of two or three witnesses, stone the man or woman who worshipped other gods.',
      'Bible — Exodus 32 (vv. 27–28): the Lord commands Moses, and the Levites kill about three thousand apostates after the golden calf.',
      'Bible — Numbers 25: when Israel joined Baal of Peor, the Lord commanded Moses to kill everyone who had joined; that was the only way the Lord would spare Israel.',
      'Bible — 2 Chronicles 15 (v. 13): whoever would not seek the Lord “should be put to death, whether small or great, whether man or woman”.',
      'Bible — Leviticus 24 (v. 16) & related laws: whoever blasphemes the name of the Lord is to be stoned, native or foreigner. Leviticus 20:2–5 (Molech) and Exodus 22:20 (sacrificing to other gods) also carry death; Joshua 24:20, Jeremiah 3:8 and Hosea 13:16 describe God\'s own judgement on Israel\'s apostasy.'
    ]
  });

  /* 32 */
  up('islam/morality/makhzumiyya-theft-equality', {
    facts: [
      ['Setting', 'Conquest of Mecca (8 AH)'],
      ['Intercessor', 'Usāma ibn Zayd for Banū Makhzūm'],
      ['Core Principle', 'Zero elite privilege before Allah’s law'],
      ['Sources', 'Bukhārī 3475, 6788 · Muslim 1688']
    ],
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'What destroyed the nations before you was that when a noble among them stole, they let him go, and when a weak person without status or backing stole, they carried out the punishment on him. By Allah, if Fāṭima the daughter of Muḥammad stole, I would cut off her hand.',
        ref: 'Bukhārī 3475, 6788; Muslim 1688'
      }
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Elite intercession attempted', 'Banū Makhzūm sent Usāma ibn Zayd to ask for special leniency for a noblewoman who stole.'],
        ['Rebuke against double standards', 'The Prophet ﷺ rejected intercession over Allah’s ḥudūd; Usāma immediately asked forgiveness.'],
        ['Sermon on equal justice', 'He warned that past nations perished by sparing elites and punishing the weak, swearing even Fāṭima would face the same law.'],
        ['Repentance & dignified care', 'Afterwards she repented sincerely, married, and ʿĀʾisha brought her needs to the Prophet ﷺ, who fulfilled them.']
      ]
    },
    p: [
      'Narrated by the Successor ʿUrwa ibn al-Zubayr (from ʿĀʾisha): Banū Makhzūm were alarmed and sent Usāma ibn Zayd because of his close standing with the Prophet ﷺ, hoping she would be spared through pardon or compensation. Usāma immediately asked the Prophet ﷺ to seek Allah\'s forgiveness for him.',
      'That evening the Prophet ﷺ delivered a sermon: “What destroyed the nations before you was that when a noble among them stole, they let him go, and when a weak person without status or backing stole, they carried out the punishment on him. By Allah, if Fāṭima the daughter of Muḥammad stole, I would cut off her hand.”',
      'Why he named Fāṭima: Because Fāṭima was his dearest family member, his only surviving daughter at the time, and shared the woman\'s name, he used her as the ultimate example to forbid all favouritism in Allah\'s limits.',
      'Repentance & full restoration: After the sentence was carried out, the woman repented sincerely and married (reportedly into Banū Sulaym). ʿĀʾisha reports she afterwards visited her and brought her needs to the Messenger of Allah ﷺ, who fulfilled them — showing she was restored with dignity, not cast out.'
    ]
  });

  /* 33 */
  up('islam/general/d-av-sonstiges-islam-2/c-aisha-sagt-man-darf-kind-schlagen', {
    facts: [
      ['Islamic Limit', 'No harm & strictly “avoid the face”'],
      ['Prophet’s Example', 'Never struck a woman or servant (Muslim 2328)'],
      ['Biblical Command', '“Whoever spares the rod hates his son” (Prov 13:24)'],
      ['Church Teaching', 'Augustine, Didascalia Apostolorum & Cajetan']
    ],
    quotes: [
      {
        by: 'Proverbs 13:24 & 23:14',
        en: 'Whoever spares the rod hates his son… Beat him with the rod and you will save his soul from death.',
        ref: 'Old Testament (cf. Hebrews 12:8)'
      },
      {
        by: 'Didascalia Apostolorum 22',
        en: 'Punish them with blows and bring them up in subjection.',
        ref: 'Early Church Order'
      }
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Islamic Boundaries',
        items: [
          'Moderate correction for disobedience only',
          'No harm allowed; “avoid the face” applies to all',
          'Prophet ﷺ never struck a woman or servant (Muslim 2328)'
        ]
      },
      right: {
        title: 'Bible & Christian Tradition',
        items: [
          'Proverbs 13:24 & 23:14 command beating with the rod',
          'Hebrews 12:8 calls an undisciplined son “illegitimate”',
          'Augustine & Didascalia Apostolorum prescribe blows',
          'Cajetan makes failing to use blows a moral fault'
        ]
      }
    },
    p: [
      'Moderate parental discipline: The reports (Averroes cites the ḥadīth via ʿĀʾisha) are about disciplining a child\'s disobedience, which is normal and which most people experienced from their parents.',
      'ʿAlī: “Discipline the orphan as you discipline your own child, and smack him as you would smack your own” (cited from al-Kāfī). The Prophet ﷺ never struck a woman or a servant with his hand (Muslim 2328), and “avoid the face” applies to all.',
      'The Bible: “Whoever spares the rod hates his son” (Proverbs 13:24); “Beat him with the rod and you will save his soul from death” (Proverbs 23:14); a son without discipline is “illegitimate, not a son” (Hebrews 12:8).',
      'Church Father — Augustine: Augustine (Sermon on the Mount 1.20.63) says a father may chastise his little son with blows if he expects better behaviour; and (Letter 185.6.21) not only a servant but a wayward son must be corrected with blows, which bears great fruit.',
      'The Didascalia Apostolorum 22: whoever spares a word of rebuke hates his son; “punish them with blows and bring them up in subjection”. Thomas Cajetan (Summula de peccatis p. 491): it is a moral fault if a father fails to correct his son with words and blows as needed, especially for grave sins like blasphemy.'
    ]
  });
})();
