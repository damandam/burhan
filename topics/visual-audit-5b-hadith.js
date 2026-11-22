/* Visual & structural upgrade for 29 islam/hadith/* cards (Audit Batch 5b)
   Non-destructive runtime patch via up(origKey, patch) — preserves all existing branches, credits, links, and shots. */
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
    if (!a) { console.warn('visual-audit-5b: missing', key); return; }
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

  /* 1. Will Maryam be the Prophet's wife in Paradise? */
  up('islam/general/d-av-sonstiges-islam-2/c-maria-prophet-saw-frau', {
    facts: [
      ['Source cited', 'al-Ṭabarānī (from Abū Umāma)'],
      ['Al-Albānī', 'Mawḍūʿ (fabricated)'],
      ['Al-Bukhārī', 'Munkar al-ḥadīth narrator'],
      ['Verdict', 'Unusable as evidence']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What the claim cites',
        items: [
          'Report via al-Ṭabarānī from Abū Umāma',
          'Claims marriage in Paradise to Maryam, Āsiya, and Kulthum',
          'Presented by critics as authentic Islamic teaching'
        ]
      },
      right: {
        title: 'What ḥadīth criticism shows',
        items: [
          'Al-Albānī (al-Silsila al-Ḍaʿīfa): graded mawḍūʿ (fabricated)',
          'Fabricated chain; no one is known to have heard from Abū Umāma',
          'Al-Bukhārī calls its narrator munkar al-ḥadīth (Lisān al-Mīzān 6/332)'
        ]
      }
    },
    quotes: [
      {
        by: 'Imām al-Bukhārī',
        en: 'It is not permissible to use it as evidence under any circumstances.',
        ref: 'Cited via Lisān al-Mīzān 6/332'
      }
    ],
    p: [
      'Al-Albānī (al-Silsila al-Ḍaʿīfa): Graded fabricated (mawḍūʿ).',
      'Chain defects: 1) weak; 2) a fabricated chain; 3) its narrator is one al-Bukhārī calls munkar al-ḥadīth (Lisān al-Mīzān 6/332).',
      'Channel scans: Nine scans of the gradings in the channel (to capture).'
    ]
  });

  /* 2. Did the Companions drink from a well he urinated in? */
  up('islam/general/d-av-sonstiges-islam-2/c-sahaba-trinken-urin-brunnen', {
    who: 'Textual comparison',
    facts: [
      ['Root error', 'Misprint — بال (urinated) for بزق (spat)'],
      ['Affected print', 'Dār al-Nafāʾis (Abū Nuʿaym no. 366)'],
      ['Corroborated text', 'al-Suyūṭī, al-Samhūdī, al-Ṣāliḥī, Ibn Ḥajar'],
      ['Follow-up story', 'Untraceable; no chain at all']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'One modern misprint',
        items: [
          'Dār al-Nafāʾis print of Abū Nuʿaym (p. 444, no. 366)',
          'Prints بال (urinated) in the well',
          'Circulated without checking parallel classical citations'
        ]
      },
      right: {
        title: 'Every classical citation',
        items: [
          'Al-Suyūṭī, al-Samhūdī & al-Ṣāliḥī all quote Abū Nuʿaym with بزق (spat)',
          'Ibn Ḥajar notes al-Bujayrī’s chain meets Abū Nuʿaym’s with saliva',
          'Saliva in a well diffuses within seconds to pure water levels'
        ]
      }
    },
    quotes: [
      {
        by: 'Classical citations of Abū Nuʿaym',
        en: 'He put his blessed saliva into the well.',
        ref: 'al-Suyūṭī 1/109; al-Samhūdī 3/125; al-Ṣāliḥī 7/223'
      }
    ],
    p: [
      'Parallel citations with بزق (spat): Al-Suyūṭī (al-Khaṣāʾiṣ al-Kubrā 1/109), al-Samhūdī (Wafāʾ al-Wafā 3/125), and al-Ṣāliḥī (Subul al-Hudā wa al-Rashād 7/223) all quote Abū Nuʿaym with بزق (spat).',
      'Ibn Ḥajar (Itḥāf al-Maharah 1/436, no. 784): ʿUmar ibn Muḥammad al-Bujayrī included a report in his Ṣaḥīḥ that the Prophet ﷺ put his saliva into the well, and his chain meets Abū Nuʿaym’s.',
      'Printing error verdict: The Dār al-Nafāʾis edition has a printing error, and the report should be cited as “he put his saliva into it”.',
      'Physical dilution: Spit into a well diffuses and dilutes within seconds to concentrations indistinguishable from pure water.'
    ]
  });

  /* 3. The "aorta" argument (69:44-46 & Bukhari 4428) */
  up('islam/hadith/d-ia-contributed-refutations/t-does-the-aorta-narration-make-the-prophet-صلى-الله', {
    who: 'Qurʾānic & lexical check',
    forkTitle: 'Two ways they press the aorta claim',
    forkSub: 'Pick whether they equate the imagery or insist “cut his abhar” is literal',
    optWho: ['Lexical reply', 'Idiom reply'],
    facts: [
      ['Qurʾān 69 (44–46)', 'Uses al-watīn (conditional seizure)'],
      ['Bukhārī 4428', 'Uses al-abhar (different Arabic word)'],
      ['Asās al-Balāgha 1/84', '“Cut his abhar” = idiom for dying'],
      ['Mission span', '23 years completed; died at 63 (5:3)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Qurʾān 69 (44–46) — al-watīn',
        items: [
          'Conditional warning if he fabricated against Allah',
          'Allah would seize him by the right hand and cut his watīn',
          'Never happened: lived 23 years of mission and died at 63 (5:3)'
        ]
      },
      right: {
        title: 'Bukhārī 4428 — al-abhar',
        items: [
          'Uses a different word (abhar, large chest arteries), not watīn',
          'Spoken of pain from Khaybar poison',
          'Al-Zamakhsharī (Asās al-Balāgha 1/84): figurative idiom for “destroyed him”'
        ]
      }
    },
    quotes: [
      {
        by: 'Qurʾān (Sūrat al-Ḥāqqa)',
        en: 'Had he fabricated against Us some sayings, We would have seized him by the right hand, then severed from him the aorta (al-watīn).',
        ref: 'Qurʾān 69:44–46'
      },
      {
        by: 'al-Zamakhsharī',
        en: 'The pain kept returning to him until it cut his abhar, i.e. destroyed him.',
        ref: 'Asās al-Balāgha 1/84 (root B-H-R)'
      }
    ],
    p: [
      'Sūrat al-Ḥāqqa (69, verses 44–46): “Had he fabricated against Us some sayings, We would have seized him by the right hand, then severed from him the aorta (al-watīn).”',
      'Two conditions, only if he fabricated: Allah would seize him by the right hand, i.e. capture and punish him; then cut his watīn, i.e. end his life entirely — a divine hypothetical that Allah would personally seize and destroy him.',
      'He was not seized or cut off when it mattered: He lived 23 years delivering the message, was victorious, and died at 63 after completing it (5:3).'
    ]
  });

  /* 4. Bukhari 5038: the Prophet forgot verses? */
  up('islam/hadith/d-ia-contributed-refutations/t-sahi-h-al-bukha-ri-5038-forgetting-the-qur-an', {
    facts: [
      ['Primary ḥadīth', 'Ṣaḥīḥ al-Bukhārī 5038'],
      ['Delivery guarantee', 'Qurʾān 87:6–7'],
      ['Commentary', 'Ibn Ḥajar, Fatḥ al-Bārī'],
      ['Proof of preservation', 'Community already memorised it']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Verse already in the community', 'The Prophet ﷺ heard a man reciting the verse — proving it had already been revealed, taught, and memorised by others.'],
        ['Human recall after delivery', 'Temporary forgetting of a verse already conveyed and preserved by Companions loses nothing of the Qurʾān.'],
        ['Ibn Ḥajar’s distinction', 'Forgetting after conveying is possible for him as a human, whereas forgetting before conveying is impossible because Allah guaranteed delivery (87:6–7).'],
        ['Proper phrasing', 'Saying “I forgot such a verse” is discouraged so people say “I was made to forget”.']
      ]
    },
    quotes: [
      {
        by: 'Ṣaḥīḥ al-Bukhārī',
        en: 'He reminded me of such-and-such verse which I had dropped.',
        ref: 'Bukhārī 5038'
      }
    ],
    p: [
      'Already delivered and memorised: In the ḥadīth he hears a man reciting and says: “He reminded me of such-and-such verse which I had dropped.” The verse was already in the community.',
      'Ibn Ḥajar (Fatḥ al-Bārī): Forgetting after conveying is possible for him as a human, but forgetting before conveying is not, because Allah guaranteed the delivery (87:6–7).',
      'Discouraged phrasing: Saying “I forgot such a verse” is discouraged so people say “I was made to forget”.'
    ]
  });

  /* 5. The Zutt narration (Musnad Ahmad 3788) */
  up('islam/hadith/d-ia-contributed-refutations/t-al-zutt-hadith-refuted', {
    who: 'Context & lexical check',
    forkTitle: 'Four angles critics use on the Zuṭṭ report',
    forkSub: 'Select the angle they raise — chain, eyewitness, “nakedness”, or the strength claim',
    optWho: ['Chain reply', 'Eyewitness reply', 'Textual reply', 'Motive reply'],
    facts: [
      ['Chain grading', 'Ḍaʿīf (al-Arnaʾūṭ; shakk on ʿAmr al-Bikālī)'],
      ['Night of the Jinn', 'Ibn Masʿūd was absent (Muslim 450a)'],
      ['Tirmidhī 2861', '“No nakedness (ʿawra) and no skin”'],
      ['Polemical leap', 'Requires 8 unsupported assumptions']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What the polemic assumes',
        items: [
          'Treats “looked like Zuṭṭ” as actual Zuṭṭ / black humans',
          'Forces a sexual sense onto a verb meaning “surrounded / crowded”',
          'Ignores jinn context, Tirmidhī 2861 (“no nakedness”), and sleeping after a night-long encounter'
        ]
      },
      right: {
        title: 'What the chains & texts show',
        items: [
          'Musnad Aḥmad 3788 is ḍaʿīf (al-Arnaʾūṭ): narrator shakk & unverified hearing from Ibn Masʿūd',
          'Muslim 450a confirms Ibn Masʿūd was not with him on the Night of the Jinn',
          'Related narrations show jinn crowding to hear the Qurʾān, followed by angels while he slept'
        ]
      }
    },
    quotes: [
      {
        by: 'ʿAbdullāh ibn Masʿūd',
        en: 'I have never seen anything resembling them except the jinn on the Night of the Jinn; they were scattered, one following another.',
        ref: 'Athar via Abū ʿUthmān al-Nahdī'
      },
      {
        by: 'Jāmiʿ al-Tirmidhī',
        en: 'As if they were Zuṭṭ, with thick hair and strong bodies; I could see no nakedness (ʿawra) and no skin.',
        ref: 'Tirmidhī 2861'
      }
    ],
    p: [
      'Supernatural jinn encounter: Other reports from Ibn Masʿūd identify those beings as jinn — a supernatural event, not a gathering of humans.',
      'Context-dependent Arabic verb: The Arabic word cited can mean riding, surrounding, crowding around, or gathering around, depending on context; choosing the sexual meaning while ignoring context is cherry-picking.',
      'Related narrations fix the meaning: Related narrations describe the jinn crowding around the Prophet ﷺ to listen to the Qurʾān, which fixes the meaning “surrounded him”.',
      'Focus on daʿwa and Qurʾān: The narration is about daʿwa to the jinn and Qurʾān recitation; nothing in it discusses desire, intimacy, or any sexual act.',
      'Normal exhaustion after the night: Exhaustion after a night-long supernatural encounter is normal; resting one’s head on a friend’s lap is nothing sexual.'
    ]
  });

  /* 6. Was Jibril demonic for squeezing the Prophet? */
  up('islam/hadith/d-ia-hadith-refutations/t-gabriel-squeezed-muhammad-صلى-الله-عليه-وسلم', {
    who: 'First revelation context',
    facts: [
      ['Primary ḥadīth', 'Ṣaḥīḥ al-Bukhārī 3 (al-ʿAlaq)'],
      ['Early sīra', 'al-Ṭabarī & Ibn Hishām'],
      ['Qurʾān link', 'Heavy words coming (73:5)'],
      ['Biblical parallels', 'Dan 8 & 10; Acts 9; Luke 1–2; Rev 1:17']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Settling into recitation', 'Ibn ʿĀshūr explains the squeeze and threefold “Iqraʾ” settled him into reciting the first five verses of al-ʿAlaq.'],
        ['Four purposes (al-Ṭabarī)', 'Freed him from worldly thoughts, warned of heavy words (73:5), showed reading comes from Allah, and proved the encounter was real rather than a whisper.'],
        ['Explicit reassurance', 'Al-Ṭabarī reports Jibrīl told him not to be frightened, and Ibn Hishām reports Jibrīl introduced himself and affirmed he was a true prophet.'],
        ['Biblical angel encounters', 'Daniel falls frightened and loses strength (Dan 8:15–18; 10:7–9), Zechariah, Mary & shepherds are struck with fear (Luke 1–2), and John falls “as though dead” (Rev 1:17).']
      ]
    },
    quotes: [
      {
        by: 'Book of Daniel (Biblical parallel)',
        en: 'was frightened and fell on my face.',
        ref: 'Daniel 8:15–18'
      },
      {
        by: 'Gospel of Matthew (Biblical parallel)',
        en: 'became like dead men',
        ref: 'Matthew 28:2–4'
      }
    ],
    p: [
      'Ibn ʿĀshūr on Iqraʾ (Bukhārī 3): The squeeze and threefold “Iqraʾ” are explained by Ibn ʿĀshūr as settling him into the recitation; after it he recited the first five verses of al-ʿAlaq and went home reciting them.',
      'Detailed rebuttals: The channel links two full articles — Islamic Discourse (“Was Gabriel ‘demonic’ because he squeezed Muhammad ﷺ?”) and Call to Monotheism’s rebuttal to Sam Shamoun.'
    ]
  });

  /* 7. "Satan urinated in his ear" */
  up('islam/hadith/d-dr-hadiths-on-satan', {
    who: 'Classical shurūḥ & idiom',
    facts: [
      ['Primary ḥadīth', 'Ṣaḥīḥ al-Bukhārī 1144, 3270'],
      ['Ibn Ḥajar (d. 852)', 'Metaphor for corruption & neglect'],
      ['Al-Ṭaḥāwī (d. 321)', 'Simile and allusion, not literal'],
      ['Arab usage', '“Canopus urinated in wine” = spoiled']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Literalist caricature',
        items: [
          'Treats “urinated in his ear” as a literal physical act',
          'Ignores classical Arabic proverbs and poetry (al-Farazdaq)',
          'Misses the Qurʾānic parallel on covering ears in sleep (18:11)'
        ]
      },
      right: {
        title: 'Classical commentators’ consensus',
        items: [
          'Ibn Ḥajar: Arabs used urination as a metaphor for corruption & heavy sleep',
          'Al-Nawawī & al-Ḥarbī: means mockery, belittling, and overpowering him',
          'Al-Ṭaḥāwī: “Not urination in the ear in the literal sense; by way of simile and allusion”'
        ]
      }
    },
    quotes: [
      {
        by: 'Ibn Ḥajar al-ʿAsqalānī (d. 852)',
        en: 'It is an example used for someone negligent of his prayers because of heavy sleep, as if his ear were filled with urine until he is weighed down and his senses spoiled. The Arabs used urination as a metaphor for corruption.',
        ref: 'Fatḥ al-Bārī 3/28–29'
      },
      {
        by: 'Imām al-Ṭaḥāwī (d. 321)',
        en: 'It is not urination in the ear in the literal sense; it is by way of simile and allusion.',
        ref: 'Sharḥ Mushkil al-Āthār 10/193–194'
      }
    ]
  });

  /* 8. "I am time": is Allah time? */
  up('islam/hadith/d-dr-is-allah-time', {
    who: 'Full ḥadīth context',
    facts: [
      ['Primary sources', 'Bukhārī 4826; Muslim 2246'],
      ['Key phrase', 'Al-Dahr (time / fate)'],
      ['Immediate gloss', '“I turn the night and the day”'],
      ['Historical context', 'Jāhiliyya Arabs cursed “time”']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Out-of-context reading',
        items: [
          'Isolates “and I am time (al-dahr)” from the rest of the ḥadīth',
          'Claims Islam equates Allah’s essence with physical time',
          'Ignores the explanatory clause right after it'
        ]
      },
      right: {
        title: 'Full text & Ibn Taymiyya',
        items: [
          'Explicit gloss: “In My hand is the command, I turn the night and the day”',
          'Forbids Jāhiliyya habit of blaming illness, poverty & death on “time”',
          'Cursing time really curses the One who decrees events — an idiom of action, not identity'
        ]
      }
    },
    quotes: [
      {
        by: 'Ḥadīth Qudsī (Bukhārī 4826)',
        en: 'The son of Ādam abuses time, and I am time (al-dahr): in My hand is the command, I turn the night and the day.',
        ref: 'Bukhārī 4826 (cf. Muslim 2246)'
      }
    ],
    p: [
      'Bukhārī 4826: “The son of Ādam abuses time, and I am time (al-dahr): in My hand is the command, I turn the night and the day.”',
      'Full-context rule: Reading one line without the rest of the ḥadīth produces the misunderstanding.'
    ]
  });

  /* 9. The Prophet seated on the Throne: shirk? */
  up('islam/hadith/d-dr-the-prophet-sitting-on-the-arsh', {
    facts: [
      ['Qurʾānic anchor', 'al-Maqām al-Maḥmūd (17:79)'],
      ['Classical report', 'Tafsīr al-Ṭabarī 17:79 (Mujāhid)'],
      ['Alternative view', 'Station of Great Intercession'],
      ['Creedal status', 'Created Throne; honour by Allah’s will']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Why critics call it shirk',
        items: [
          'Assumes sitting on the Throne implies shared divinity',
          'Confuses honour granted by Allah with worship of a creature'
        ]
      },
      right: {
        title: 'Why it is the opposite of shirk',
        items: [
          'The Throne itself is a creation, not an object of worship',
          'Being placed there by Allah’s will gives zero divine quality',
          'Whether intercession or beside the Throne (Mujāhid), the Prophet ﷺ remains subject to Allah’s will'
        ]
      }
    },
    p: [
      'Two Salaf interpretations: Some Salaf, like Mujāhid (Tafsīr al-Ṭabarī 17:79), interpreted the “praised station” (17:79) this way; others interpret it as intercession.',
      'Subject to Allah’s will: Either way, the Prophet ﷺ is subject to Allah’s will, which is the opposite of shirk.'
    ]
  });

  /* 10. Did the Prophet see his Lord as a young man? */
  up('islam/hadith/d-dr-allah-came-in-a-dream-as-a-young-boy', {
    who: 'Chain & scholar check',
    forkTitle: 'Two follow-ups on seeing Allah',
    forkSub: 'Pick whether they ask about dreams in general or press the “curly-haired young man” chain',
    optWho: ['Creed reply', 'Sanad & Daniel 7'],
    facts: [
      ['Scholars’ verdict', 'Munkar / weak / fabricated'],
      ['Chain culprit', 'Ibn Abī al-ʿAwjāʾ (Ḥammād’s stepson)'],
      ['Qurʾānic rule', 'Nothing like Him (42:11; 6:103)'],
      ['Biblical counter', 'Daniel 7:9 (“hair like pure wool”)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Rejected reports & chains',
        items: [
          'Ibn ʿAbbās / Ḥammād route: unreliable/weak (al-Bayhaqī, al-Dhahabī, al-Albānī)',
          'Ibn al-Jawzī: Ḥammād’s stepson Ibn Abī al-ʿAwjāʾ inserted false reports into his books',
          'Umm al-Ṭufayl version: fabricated (mawḍūʿ, al-Shawkānī) with a forger, a liar, and an unknown'
        ]
      },
      right: {
        title: 'Islamic creed & Daniel 7:9',
        items: [
          'Nothing resembles Allah (42:11); eyes cannot grasp Him in this life (6:103; 7:143)',
          'Dreams never show Allah’s actual essence (Ibn Taymiyya, Bayān Talbīs al-Jahmiyya)',
          'Contrast Daniel 7:9: “the hair of his head like pure wool”'
        ]
      }
    },
    quotes: [
      {
        by: 'Ibn al-Jawzī',
        en: 'This ḥadīth is not established; all its routes come from Ḥammād ibn Salama. Ibn ʿAdī said: Ibn Abī al-ʿAwjāʾ was Ḥammād’s stepson and used to insert these ḥadīth into his books.',
        ref: 'al-ʿIlal al-Mutanāhiya'
      },
      {
        by: 'Book of Daniel (Biblical counter)',
        en: 'the Ancient of Days took his seat; his clothing was white as snow, and the hair of his head like pure wool.',
        ref: 'Daniel 7:9'
      }
    ],
    p: [
      'Al-Albānī & al-Dhahabī: Al-Albānī (al-Silsila al-Ḍaʿīfa) and al-Dhahabī (al-Siyar) classed it as unreliable.',
      'Ibn al-Jawzī (al-ʿIlal al-Mutanāhiya): Its chain includes Ḥammād ibn Salama, whose stepson allegedly inserted false reports into his books.',
      'Umm al-Ṭufayl narration: A similar narration from Umm al-Ṭufayl describes Allah in human-like form; al-Shawkānī (al-Fawāʾid al-Majmūʿa) labelled it fabricated (mawḍūʿ) for its unreliable narrators.'
    ]
  });

  /* 11. Musa and the stone that ran off with his clothes */
  up('islam/hadith/d-dr-moses-and-the-rock', {
    who: 'Tafsīr & modesty context',
    facts: [
      ['Qurʾān explained', 'Sūrat al-Aḥzāb 33:69'],
      ['Ḥadīth sources', 'Bukhārī 278, 3404; Muslim 339'],
      ['Private part claim', 'Refuted by Ibn Ḥazm (al-Muḥallā 3/213)'],
      ['Biblical rock', '1 Cor 10:4 (followed Israel)']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Israelite slander against modesty', 'The Israelites bathed naked together and mocked Mūsā for bathing alone, accusing him of a bodily defect (al-Nawawī; Ibn Ḥajar).'],
        ['Public clearance (33:69)', 'Allah cleared him as 33:69 states; seeing he had no defect, they said: “By Allah, Mūsā has no defect.”'],
        ['No ʿawra exposed', 'Ibn Ḥazm (al-Muḥallā 3/213) clarifies the ḥadīth never says they saw his private part — his freedom from defect was evident without uncovering it.'],
        ['Bible’s moving & speaking stones', 'Joshua 24:27 (stone heard), Luke 19:40 & Hab 2:11 (stones cry out), and 1 Corinthians 10:4 (spiritual rock that followed Israel).']
      ]
    },
    quotes: [
      {
        by: 'Qurʾān (Sūrat al-Aḥzāb)',
        en: 'O you who believe, don’t be like those who harmed Mūsā; Allah cleared him of what they said.',
        ref: 'Qurʾān 33:69'
      },
      {
        by: 'Ibn Ḥazm',
        en: 'It isn’t in this ḥadīth that the Israelites saw his private part. They saw him in a state that made clear he was free of the defect they accused him of, which any onlooker can see without seeing the private part, just from the area between his thighs being free.',
        ref: 'al-Muḥallā 3/213 (masʾala 349)'
      }
    ],
    p: [
      'Tafsīr tie to 33:69: The narration ends with 33:69 (Bukhārī 3404; also via Hammām ibn Munabbih, Bukhārī 278, Muslim 339), and the exegetes tie the verse to this account (al-Samʿānī 4/309, al-Qurṭubī 14/251, Ibn Juzayy 2/160, Ibn Kathīr 6/485).',
      'Modesty vs. communal nakedness: The Israelites bathed naked in front of each other (al-Nawawī, al-Minhāj 4/32–33; Ibn Ḥajar, Fatḥ al-Bārī 1/386); Mūsā bathed alone and did not undress until he was in the water, so his modesty went against their custom.',
      'Ibn Rajab (Fatḥ al-Bārī 1/330): “Allah does not decree for His Prophet anything that is not permissible in His law.”',
      'Vindication achieved: Prophets are created in the best form, so Allah showed a sceptical people he had no defect (Qāḍī ʿIyāḍ, Ikmāl al-Muʿlim 7/349; Ibn Ḥajar 6/437–438; Muftī Shafīʿ, Maʿārif al-Qurʾān 7/240), proved by their words: “By Allah, Mūsā has no defect.”',
      'Recurring pattern of harming Mūsā: Harming Mūsā was a pattern among his people — compare Qurʾān 61:5, 2:55, 2:61, 2:67, 5:24 and Exodus 14:11–12; 16:2–3.'
    ]
  });

  /* 12. Adam and Moses argue about fate */
  up('islam/hadith/d-dr-adam-and-moses-predestination', {
    facts: [
      ['Primary sources', 'Bukhārī 6614; Muslim 2652'],
      ['Prior forgiveness', 'Ādam had repented (Qurʾān 2:37)'],
      ['Scholars cited', 'Ibn Taymiyya & Ibn al-Qayyim'],
      ['Key rule', 'Calamity after repentance ≠ excuse to sin']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Invalid use of qadar',
        items: [
          'Citing divine decree to justify committing or persisting in sin',
          'Evading moral accountability before repentance'
        ]
      },
      right: {
        title: 'What Ādam actually cited',
        items: [
          'Ādam had already repented and been forgiven (Qurʾān 2:37)',
          'Mūsā blamed him for the calamity (expulsion from Paradise), not an unrepented sin',
          'Citing qadar for a misfortune after repentance is valid (Ibn Taymiyya; Ibn al-Qayyim)'
        ]
      }
    },
    quotes: [
      {
        by: 'Ḥadīth of Ādam & Mūsā (cited in objection)',
        en: 'Do you blame me for something Allah decreed for me forty years before He created me?',
        ref: 'Bukhārī 6614; Muslim 2652'
      }
    ],
    p: [
      'Ibn Taymiyya & Ibn al-Qayyim: One may cite the decree for misfortunes, not for sins one persists in; Ādam’s sin had already been forgiven (2:37).',
      'Full article with scans: Bassam Zawadi’s detailed rebuttal is linked in the sources (ask-a-muslim.com).'
    ]
  });

  /* 13. "Say takbir and the fire will go out" */
  up('islam/general/d-av-sonstiges-islam-1/c-takbir-feuerlo-schen', {
    who: 'Grading & tawḥīd principle',
    facts: [
      ['Ḥadīth grading', 'Weak (al-Albānī, al-Ḍaʿīfa 2603)'],
      ['Sources', 'Ibn al-Sunnī 295; al-Ṭabarānī 1/307'],
      ['Practical rule', 'Dhikr alongside physical means'],
      ['Biblical parallel', 'James 5:14–15 (prayer & oil heal sick)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What the critic claims',
        items: [
          'Treats Ibn al-Sunnī 295 as an authentic, standalone command',
          'Assumes dhikr replaces calling the fire brigade',
          'Mocks belief that prayer or remembrance has any effect'
        ]
      },
      right: {
        title: 'Islamic principle & James 5',
        items: [
          'The report is weak (al-Albānī, al-Silsila al-Ḍaʿīfa 2603)',
          'Allah acts through means (fire brigade) alongside optional remembrance',
          'James 5:14–15 likewise teaches the prayer of faith with oil saves the sick'
        ]
      }
    },
    quotes: [
      {
        by: 'Ibn al-Qayyim',
        en: 'We and others have tried it and found it so.',
        ref: 'Zād al-Maʿād 4/194'
      },
      {
        by: 'Epistle of James (Biblical parallel)',
        en: 'Is anyone among you sick? Let him call for the elders… and let them pray over him, anointing him with oil in the name of the Lord. And the prayer of faith will save the one who is sick.',
        ref: 'James 5:14–15'
      }
    ],
    p: [
      'Ibn Taymiyya (al-Fatāwā al-Kubrā 5/188): Takbīr is the slogan of the prayers, the adhān, and the ʿĪds, recommended on high places like al-Ṣafā and al-Marwa and when climbing or riding: “by it fires are extinguished, even if great, and at the adhān Satan flees.”',
      'Ibn al-Qayyim (Zād al-Maʿād 4/194): Fire is of the substance Satan was created from and spreads destruction, which is Satan’s way; Allah’s greatness overpowers Satan and his works, so magnifying Allah has an effect on fire: “We and others have tried it and found it so.”',
      'Never a substitute for firefighting: This is the view of some scholars only, and none of them tells anyone to ignore the fire brigade or not to put out the fire.',
      'Principle of tawḥīd: Allah alone extinguishes the fire and the fire brigade and people are the means by His permission — like taking a tablet for a headache while affirming “Allah gives the cure” without rejecting medicine.'
    ]
  });

  /* 14. Does the sun set in a spring of hot water? */
  up('islam/general/d-av-sonstiges-islam-1/c-sonne-geht-im-quellen-meer-unter', {
    who: 'Chain comparison & shādhdh check',
    facts: [
      ['Agreed version', 'Bukhārī 3199; Muslim 159 (no spring)'],
      ['Lone deviation', 'al-Ḥakam ← Sufyān ibn Ḥusayn (shādhdh)'],
      ['Narrator defects', 'al-Ḥakam (mudallis, ʿan); Sufyān (errors)'],
      ['Scholarly ijmāʿ', 'Earth & heavenly bodies are round']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Chain 2 — Lone shādhdh wording',
        items: [
          'Only al-Ḥakam ibn ʿUtayba ← Sufyān ibn Ḥusayn → Yazīd ibn Hārūn',
          'Adds “sets in a spring of hot water” (Abū Dāwūd 4002; Aḥmad 35/363)',
          'Al-Ḥakam was a 2nd-tier mudallis saying “ʿan”; Sufyān made many mistakes (Ibn Saʿd)'
        ]
      },
      right: {
        title: 'Chain 1 — Agreed in Ṣaḥīḥayn',
        items: [
          'Al-Aʿmash, Yūnus ibn ʿUbayd, Mūsā ibn al-Musayyab & Hārūn ibn Saʿd',
          'No spring mentioned (Bukhārī 3199; Muslim 159)',
          'Confirmed by al-Bazzār & Ibn Manda; consensus held the earth is round'
        ]
      }
    },
    quotes: [
      {
        by: 'Imām al-Bazzār',
        en: 'We know of no one except Sufyān ibn Ḥusayn who narrated this from al-Ḥakam… while Yūnus ibn ʿUbayd, al-Aʿmash and Hārūn ibn Saʿd narrated it from Ibrāhīm.',
        ref: 'al-Baḥr al-Zakhkhār 9/407 (under no. 4010)'
      },
      {
        by: 'Ibn Taymiyya',
        en: 'The heavenly bodies are round according to the Muslim scholars among the Companions and those who followed them in guidance; this was also proven from them with chains… more than one of the Muslim scholars reported that there was consensus on it.',
        ref: 'Minhāj al-Sunna 5/442'
      }
    ],
    p: [
      'Shared root chain: Ibrāhīm ibn Yazīd al-Taymī ← his father ← Abū Dharr; from Ibrāhīm it was taken by al-Ḥakam ibn ʿUtayba, al-Aʿmash, Fuḍayl ibn Ghazwān, Hārūn ibn Saʿd, and Mūsā ibn al-Musayyab (Ibn Manda, al-Īmān 2/926).',
      'Chain 1 (agreed in Bukhārī & Muslim): Al-Aʿmash, Yūnus ibn ʿUbayd, Mūsā ibn al-Musayyab, and Hārūn ibn Saʿd report the sun “goes and prostrates beneath the Throne, then asks permission to rise… until it is told: return to where you came from, and it rises from its place of setting,” then recited 36:38 — no spring is mentioned.',
      'Chain 2 (lone spring addition): Only al-Ḥakam ibn ʿUtayba from Ibrāhīm — exclusively via Yazīd ibn Hārūn ← Sufyān ibn Ḥusayn ← al-Ḥakam — adds “It sets in a spring of hot water” (Aḥmad 35/363; Abū Dāwūd 4002; al-Bazzār 9/407; al-Ḥākim 2/267).',
      'Al-Bazzār (al-Baḥr al-Zakhkhār 9/407): “We know of no one except Sufyān ibn Ḥusayn who narrated this from al-Ḥakam… while Yūnus ibn ʿUbayd, al-Aʿmash and Hārūn ibn Saʿd narrated it from Ibrāhīm” without it.',
      'Channel chain chart: The chart in the channel marks the chains, showing only the red line (al-Ḥakam) has the deviating spring wording (scan to capture).'
    ]
  });

  /* 15. Are the Kurds descended from jinn? */
  up('islam/general/d-av-sonstiges-islam-1/c-kurden-jinn', {
    facts: [
      ['ʿUmar attribution', 'No isnād; Isrāʾīlī tale'],
      ['Al-Masʿūdī story', 'No authentic narration or text'],
      ['Prophetic standard', 'Equality except by taqwā'],
      ['Primary ḥadīth', 'Musnad Aḥmad 23489']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Two ungrounded tales',
        items: [
          'Story attributed to ʿUmar: zero chain of transmission; Banū Isrāʾīl report',
          'Al-Masʿūdī’s history (Sulaymān’s slaves & jinn): no authentic narration or source text',
          'Folklore with no place in Islamic scripture or ḥadīth'
        ]
      },
      right: {
        title: 'Islam’s explicit principle',
        items: [
          'Prophetic standard (Musnad Aḥmad 23489): no Arab is better than a non-Arab',
          'All humans are equal; distinction is solely by taqwā (piety)',
          'Claims lacking isnād are rejected in Islamic scholarship'
        ]
      }
    },
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'No Arab is better than a non-Arab… except by taqwā.',
        ref: 'Musnad Aḥmad 23489'
      }
    ],
    p: [
      'Unchained ʿUmar story: “From ʿUmar” has no chain of transmission at all and was classed as a Banū Isrāʾīl report.',
      'Al-Masʿūdī’s anecdote: The story of Sulaymān’s slaves and the jinn in al-Masʿūdī (al-Ḥasan ibn al-Ḥusayn) has no authentic narration or source text.',
      'Islam’s equality principle (Musnad Aḥmad 23489): “No Arab is better than a non-Arab… except by taqwā.”'
    ]
  });

  /* 16. A market of images in Paradise (Tirmidhi 2550) */
  up('islam/general/d-av-sonstiges-islam-2/c-bilder-paradies-begehren', {
    facts: [
      ['Al-Tirmidhī', 'Graded gharīb (singular/odd)'],
      ['Al-Albānī & al-Arnaʾūṭ', 'Graded weak (ḍaʿīf)'],
      ['Ibn al-Jawzī', 'Mawḍūʿāt (Abū Shayba al-Wāsiṭī)'],
      ['Al-Ṭabarānī parallel', 'Very weak (al-Haythamī)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Tirmidhī 2550 route',
        items: [
          'Al-Tirmidhī himself marks it “a gharīb ḥadīth”',
          'Al-Albānī and al-Arnaʾūṭ grade the chain weak',
          'Ibn al-Jawzī lists it in al-Mawḍūʿāt due to Abū Shayba al-Wāsiṭī (“rejected” per Aḥmad, “abandoned” per Yaḥyā)'
        ]
      },
      right: {
        title: 'Al-Ṭabarānī (al-Awsaṭ) route',
        items: [
          'Transmitted via Muḥammad ibn Kathīr and Jābir al-Juʿfī',
          'Al-Haythamī (Majmaʿ al-Zawāʾid): “both very weak”',
          'Both routes fail basic authentication'
        ]
      }
    },
    quotes: [
      {
        by: 'Ibn al-Jawzī',
        en: 'not authentic; the accused is ʿAbd al-Raḥmān ibn Isḥāq, Abū Shayba al-Wāsiṭī.',
        ref: 'al-Mawḍūʿāt'
      },
      {
        by: 'Aḥmad ibn Ḥanbal & Yaḥyā',
        en: 'Aḥmad: “He is nothing; rejected.” Yaḥyā: “abandoned.”',
        ref: 'Gradings of Abū Shayba al-Wāsiṭī'
      }
    ],
    p: [
      'Al-Tirmidhī (Jāmiʿ al-Tirmidhī 2550): Explicitly calls it “gharīb”.',
      'Ibn al-Jawzī (al-Mawḍūʿāt): “Not authentic; the accused is ʿAbd al-Raḥmān ibn Isḥāq, Abū Shayba al-Wāsiṭī.” Aḥmad: “He is nothing; rejected.” Yaḥyā: “abandoned.”',
      'Al-Ṭabarānī’s version (al-Awsaṭ): Has Muḥammad ibn Kathīr and Jābir al-Juʿfī, “both very weak” (al-Haythamī, Majmaʿ al-Zawāʾid).',
      'Channel scans: Scans of the gradings are in the channel (to capture).'
    ]
  });

  /* 17. Ibn Kathir's rat story */
  up('islam/general/d-av-sonstiges-islam-2/c-ratte-ibn-kathir', {
    facts: [
      ['Source genre', 'World history (al-Bidāya wa al-Nihāya)'],
      ['Chronology', '~620 years after the Prophet’s ﷺ death'],
      ['Status', 'Not a ḥadīth or Islamic doctrine'],
      ['Biblical parallels', 'Dan 4; 2 Pet 2:16; Ex 7; Gen 19']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Ibn Kathīr’s historical chronicle',
        items: [
          'Not a prophetic ḥadīth or revealed scripture',
          'Written ~620 years after the Prophet’s ﷺ death',
          'Simply records what people reported in his time — not Islamic doctrine'
        ]
      },
      right: {
        title: 'Canonical Bible transformations',
        items: [
          'Daniel 4:30–33: Nebuchadnezzar eats grass with eagle-feather hair & bird claws',
          '2 Peter 2:16: a speechless donkey speaks with a human voice',
          'Exodus 7:10–12 (staff → serpent) & Genesis 19:26 (Lot’s wife → salt pillar)'
        ]
      }
    },
    quotes: [
      {
        by: 'Book of Daniel (Biblical parallel)',
        en: 'until his hair grew as long as eagles’ feathers and his nails like birds’ claws.',
        ref: 'Daniel 4:33 (4:30–33)'
      },
      {
        by: 'Second Epistle of Peter (Biblical parallel)',
        en: 'a speechless donkey spoke with human voice and restrained the prophet’s madness.',
        ref: '2 Peter 2:16'
      }
    ],
    p: [
      'Turn the tables (Daniel 4, verses 30–33): Nebuchadnezzar is driven from men and eats grass like an ox, “until his hair grew as long as eagles’ feathers and his nails like birds’ claws.”',
      'Turn the tables (2 Peter 2, verse 16): “a speechless donkey spoke with human voice and restrained the prophet’s madness.”',
      'Turn the tables (Exodus 7, verses 10–12): Aaron’s staff becomes a serpent.',
      'Turn the tables (Genesis 19, verse 26): Lot’s wife becomes a pillar of salt.'
    ]
  });

  /* 18. "People who enter Paradise in chains" (Bukhari 3010) */
  up('islam/general/d-av-sonstiges-islam-2/c-ketten-ins-paradies-erstaunt', {
    who: 'Classical tafsīr of chains',
    facts: [
      ['Primary ḥadīth', 'Ṣaḥīḥ al-Bukhārī 3010'],
      ['Meaning of chains', 'War captivity before free conversion'],
      ['Chain critique', 'Al-Dāraquṭnī & Ibn Ḥajar: mawqūf'],
      ['Biblical contrast', '1 Sam 15:3; Josh 6:21 (kill all)']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Captivity, not forced conversion', 'Ibn al-Jawzī explains the chains symbolise disbelievers captured in war who later saw Islam up close, accepted faith voluntarily, and entered Paradise.'],
        ['Mercy vs. total slaughter', 'Taking enemies captive instead of killing them gave them the chance to embrace Islam and enter Paradise (contrast 1 Sam 15:3 & Josh 6:21).'],
        ['Divine ʿajab (“wonder”)', 'Ibn Ḥajar (Fatḥ al-Bārī 6/145) explains Allah’s wonder as His pleasure — never creaturely surprise or lack of prior knowledge (37:12; 13:5).'],
        ['Marfūʿ vs. mawqūf', 'Al-Dāraquṭnī found an unknown narrator in the prophetic chain; Ibn Ḥajar judged it authentic as Abū Hurayra’s own statement (ṣaḥīḥ mawqūf).']
      ]
    },
    quotes: [
      {
        by: 'First Book of Samuel (Biblical contrast)',
        en: 'Go and strike Amalek… do not spare them, but kill both man and woman, child and infant.',
        ref: '1 Samuel 15:3'
      },
      {
        by: 'Book of Joshua (Biblical contrast)',
        en: 'they devoted to destruction all in the city, both men and women, young and old.',
        ref: 'Joshua 6:21'
      }
    ],
    p: [
      'Ibn al-Jawzī on captivity: The chains symbolise the capture of disbelievers while in disbelief; having recognised the truth of Islam, they accept faith voluntarily and enter Paradise.',
      'Al-Ṭībī on spiritual attraction: The “chains” can also be understood as an attraction by which Allah draws His servants from misguidance to guidance.',
      'Mercy of sparing captives: This is a nation that takes enemies captive instead of killing them, giving them the chance to become Muslim and enter Paradise, whereas earlier nations killed people and never gave them that chance.'
    ]
  });

  /* 19. "Camels were created from devils" (Ibn Majah 769) */
  up('islam/general/d-av-sonstiges-islam-3/c-kamel-vom-teufel-erschaffen', {
    facts: [
      ['Source', 'Sunan Ibn Mājah 769'],
      ['Commentator', 'Imām al-Khaṭṭābī'],
      ['Arabic idiom', 'Shayṭān = any unruly creature'],
      ['Practical aim', 'Safety & concentration in prayer']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Literalist misreading',
        items: [
          'Reads “created from devils” as literal biological origin',
          'Ignores Arabic usage calling any rebellious animal a shayṭān',
          'Ignores the prayer-location context'
        ]
      },
      right: {
        title: 'Al-Khaṭṭābī’s explanation',
        items: [
          'Camels resemble devils in unruly temperament when startled',
          'If frightened, they bolt and can injure or ruin the worshipper’s prayer',
          'A practical safety and focus rule, like praying away from hazards'
        ]
      }
    },
    quotes: [
      {
        by: 'Sunan Ibn Mājah (cited in claim)',
        en: 'Don’t pray in the resting places of camels, for they were created from devils.',
        ref: 'Ibn Mājah 769'
      }
    ],
    p: [
      'Imām al-Khaṭṭābī: “Because they are of the devils” means they are like devils in their nature; if they are frightened and run off they can spoil the worshipper’s prayer, and the Arabs call every disobedient creature a devil.',
      'Safety and focus rule: It is a practical safety and concentration rule — like praying away from distractions — not a claim about camels’ origin.'
    ]
  });

  /* 20. Why did al-Khidr kill the boy? (18:74-82) */
  up('islam/hadith/d-ia-hadith-refutations/t-khidr-killed-the-boy', {
    who: 'Qurʾānic text check',
    forkTitle: 'Two follow-ups on al-Khiḍr’s action',
    forkSub: 'Pick whether they claim it sets a human precedent or press “we feared” & the boy’s fate',
    optWho: ['Precedent reply', '18:80 & fate reply'],
    facts: [
      ['Explicit disclaimer', '“I did it not of my own accord” (18:82)'],
      ['Stated purpose', 'Protect believing parents (18:80–81)'],
      ['Normal rule intact', 'Mūsā protested at once (18:74)'],
      ['Boy’s afterlife', 'Children in Paradise (Bukhārī 7047)']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Direct command from Allah', 'Allah gave al-Khiḍr mercy and special knowledge (18:65), and al-Khiḍr states: “I did it not of my own accord” (18:82).'],
        ['Protecting parents & replacement', '18:80–81 explains the boy would overburden his believing parents with disbelief, and Allah replaced him with one better in purity and nearer to mercy.'],
        ['No human precedent', 'Mūsā objected immediately (18:74), proving ordinary human law forbids killing an innocent soul; no human possesses divine revelation of the unseen.'],
        ['Pre-pubescent children in Paradise', 'Al-Nawawī reports consensus and Bukhārī 7047 shows children — including children of polytheists — around Ibrāhīm in Paradise.']
      ]
    },
    quotes: [
      {
        by: 'Qurʾān (Sūrat al-Kahf)',
        en: 'As for the boy, his parents were believers, and we feared he would overburden them with transgression and disbelief. So we intended that their Lord should give them in exchange one better in purity and nearer to mercy.',
        ref: 'Qurʾān 18:80–81'
      },
      {
        by: 'Ṣaḥīḥ al-Bukhārī',
        en: 'the children around him are the children of people… and the children of the polytheists.',
        ref: 'Bukhārī 7047'
      }
    ],
    p: [
      'Reason in Sūrat al-Kahf (18, verses 80–81): “As for the boy, his parents were believers, and we feared he would overburden them with transgression and disbelief. So we intended that their Lord should give them in exchange one better in purity and nearer to mercy” (18:80–81).',
      'Two Qurʾānic points: The reason is protecting the parents’ faith, and Allah promises them a better replacement so they are not left with a loss.',
      'Prophetic clarification (Muslim 2661): The Prophet ﷺ said the boy was “created a disbeliever” — knowledge only Allah could have given.'
    ]
  });

  /* 21. The "72 virgins" */
  up('islam/general/d-ia-7-2-72-virgins', {
    who: 'Chain & scholar check',
    facts: [
      ['Authentic baseline', 'Two wives + pearl tent (Ibn al-Qayyim)'],
      ['Ṣaḥīḥayn references', 'Bukhārī 4879; Muslim 2838'],
      ['“72” narrations', 'Weak chains (Khālid ibn Yazīd)'],
      ['Abū Dāwūd 4777', 'Ḍaʿīf via Sahl ibn Muʿādh ibn Anas']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Weak “72” & pick-your-ḥūr chains',
        items: [
          'The “72” number appears only in weak narrations (e.g. Khālid ibn Yazīd)',
          'Abū Dāwūd 4777 / Tirmidhī 2021 graded ḍaʿīf via Sahl ibn Muʿādh ibn Anas',
          'Ibn Ḥibbān called Sahl “very munkar”; Ibn Maʿīn & al-Dhahabī graded him weak'
        ]
      },
      right: {
        title: 'What authentic ḥadīth establish',
        items: [
          'Ibn al-Qayyim: nothing authentic goes beyond two wives',
          'Plus Abū Mūsā’s ḥadīth of a hollow pearl tent with family (Bukhārī 4879; Muslim 2838)',
          'Sound general reward reports specify no number of 72'
        ]
      }
    },
    quotes: [
      {
        by: 'Ibn al-Qayyim',
        en: 'There is nothing in the authentic ḥadīth that goes beyond two wives, except what is mentioned in the ḥadīth of Abū Mūsā: In Paradise the believer will have a tent made of a single hollow pearl, in which he will have family whom he visits in turn.',
        ref: 'Ḥādī al-Arwāḥ'
      }
    ],
    p: [
      'Ibn al-Qayyim (Ḥādī al-Arwāḥ): “There is nothing in the authentic ḥadīth that goes beyond two wives, except what is mentioned in the ḥadīth of Abū Mūsā: In Paradise the believer will have a tent made of a single hollow pearl, in which he will have family whom he visits in turn.”',
      'General reward reports: A similar report mentions the reward in general without specifying a number.'
    ]
  });

  /* 22. "Kill all dogs"? */
  up('islam/hadith/d-dr-kill-all-dogs', {
    facts: [
      ['Built-in exemptions', 'Hunting, herding & farming (Muslim 1571)'],
      ['Later abrogation', 'Only harmful/rabid dogs (al-Nawawī)'],
      ['Species preserved', '“A nation among nations” (Abū Dāwūd 2845)'],
      ['Mercy rewarded', 'Forgiven for watering a dog (Bukhārī 2363)']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Working dogs exempted from the start', 'Even the initial temporary order in Madinah exempted dogs for hunting, herding, and farming (Muslim 1571).'],
        ['Restricted to harmful dogs', 'Al-Nawawī explains the order was later abrogated to killing only harmful dogs, such as rabid ones.'],
        ['No extermination of a species', '“If dogs were not a nation among nations, I would order them all killed” (Abū Dāwūd 2845) — they are a species with a purpose, so he did not.'],
        ['Kindness to dogs brings forgiveness', 'A man who gave water to a thirsty dog was forgiven by Allah (Bukhārī 2363).']
      ]
    },
    quotes: [
      {
        by: 'Sunan Abī Dāwūd',
        en: 'If dogs were not a nation among nations, I would order them all killed.',
        ref: 'Abū Dāwūd 2845'
      }
    ],
    p: [
      'Initial exemptions (Muslim 1571): Even the initial order exempted dogs for hunting, herding, and farming.',
      'Abrogation to harmful dogs (al-Nawawī): Al-Nawawī explains it was later abrogated to killing only harmful dogs, such as rabid ones.',
      'A nation among nations (Abū Dāwūd 2845): “If dogs were not a nation among nations, I would order them all killed” — they are a species with a purpose, so he did not.',
      'Mercy rewarded (Bukhārī 2363): A man who gave water to a thirsty dog was forgiven.'
    ]
  });

  /* 23. The blind man who killed his slave-mother (Abu Dawud 4361) */
  up('islam/general/d-av-sonstiges-islam-1/c-blinder-mann-to-tet-sklaven', {
    who: 'Narrator-chain critique',
    facts: [
      ['Sole source chain', 'ʿUthmān al-Shaḥḥām ← ʿIkrima'],
      ['Al-Bukhārī on al-Shaḥḥām', '“In his ḥadīth are munkar reports”'],
      ['Other rijāl critics', 'Aḥmad, al-Nasāʾī, Ibn Ḥibbān, al-Arnaʾūṭ'],
      ['ʿIkrima’s status', 'Avoided by Mālik; criticised by Tabiʿūn']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'ʿUthmān ibn Muslim al-Shaḥḥām',
        items: [
          'Sole route for every version of this story',
          'Al-Bukhārī: “In his ḥadīth there are munkar reports”',
          'Aḥmad & al-Nasāʾī: “not strong”; Ibn al-Qaṭṭān: “weak”; al-Arnaʾūṭ lowers him from reliability'
        ]
      },
      right: {
        title: 'ʿIkrima (upstream link)',
        items: [
          'Though al-Bukhārī used him (due to Khārijī anti-lying creed), Mālik avoided him',
          'Saʿīd ibn Jubayr & Saʿīd ibn al-Musayyib accused him of lying on Ibn ʿAbbās',
          'Muslim and Mālik largely avoided narrating from him'
        ]
      }
    },
    quotes: [
      {
        by: 'Imām al-Bukhārī',
        en: 'In his ḥadīth there are munkar reports.',
        ref: 'al-Tārīkh al-Kabīr 6/290, no. 4074'
      },
      {
        by: 'Yaḥyā al-Qaṭṭān',
        en: 'some of it you’ll recognise and some you’ll find strange; to me he isn’t that good.',
        ref: 'Cited on ʿUthmān al-Shaḥḥām'
      }
    ],
    p: [
      'Ibn Ḥibbān (al-Majrūḥīn 2/128): He narrated strange reports not matching the reliable narrators.',
      'Al-Bukhārī (al-Tārīkh al-Kabīr 6/290 no. 4074): “In his ḥadīth there are munkar reports.”',
      'Aḥmad, al-Nasāʾī, Ibn al-Qaṭṭān & al-Dāraquṭnī: Aḥmad ibn Ḥanbal said not strong in narration (al-ʿIlal wa Maʿrifat al-Rijāl 1/246); al-Nasāʾī said “not strong” (Mīzān al-Iʿtidāl 3/60); Ibn al-Qaṭṭān graded him weak; and al-Dāraquṭnī weakened him as “a Baṣran, subject to further scrutiny”.',
      'Abū Aḥmad al-Ḥākim & Yaḥyā al-Qaṭṭān: Abū Aḥmad al-Ḥākim said “not solid in their view” (Mughulṭāy, Ikmāl 9/194; Ibn Ḥajar, Tahdhīb 7/16); Yaḥyā al-Qaṭṭān said “some of it you’ll recognise and some you’ll find strange; to me he isn’t that good.”',
      'Al-Arnaʾūṭ & Ibn Abī Ḥātim: Al-Arnaʾūṭ says there is discussion about ʿUthmān that lowers him from the level of reliability (Takhrīj al-Musnad 34/131); Ibn Abī Ḥātim also lists criticism (al-Jarḥ wa al-Taʿdīl 6/153); Muslim narrated from him only once.',
      'Sparse narration from ʿIkrima: He narrated mostly from Muslim ibn Abī Bakra and even less from ʿIkrima — all meaning the details of the story should be treated with doubt.'
    ]
  });

  /* 24. Breastfeeding an adult? Sahla and Salim */
  up('islam/general/d-av-sonstiges-islam-1/c-aisha-ra-stillt-ma-nner', {
    who: 'Abolition of adoption context',
    facts: [
      ['Primary sources', 'Muslim 1453a–c; Bukhārī 5102'],
      ['General law (2:233)', 'Fosterage only in first 2 years'],
      ['Method of riḍāʿ', 'Milk given by cup, not direct breast'],
      ['Consensus', 'All other wives + 4 Imāms = one-off']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What critics assume',
        items: [
          'Assumes direct physical nursing by an adult man',
          'Treats Sahla’s household case as a standing Islamic rule',
          'Ignores Abū Ḥudhayfa’s jealousy and sudden relief'
        ]
      },
      right: {
        title: 'What texts & consensus show',
        items: [
          'One-time exemption for Sālim when adoption ended (33:4–5)',
          'Arabic riḍāʿ does not specify breast contact; for an adult, a cup is natural',
          'All other wives, senior Companions & the 4 Imāms restrict fosterage to infancy'
        ]
      }
    },
    quotes: [
      {
        by: 'Prophet’s ﷺ Wives',
        en: 'No! By Allah, we think what the Messenger of Allah ﷺ commanded Sahla was only a permission for Sālim. No one will come in to us this way!',
        ref: 'Muwaṭṭaʾ, Kitāb al-Raḍāʿ 30/12'
      },
      {
        by: 'ʿĀʾisha (Ṣaḥīḥ al-Bukhārī)',
        en: 'Fosterage is only through hunger.',
        ref: 'Bukhārī 5102'
      }
    ],
    p: [
      'Abolition of adoption (Sūrat al-Aḥzāb 33): Sālim had grown up in Abū Ḥudhayfa’s house as an adopted son; when Islam abolished adoption (33:4–5), he suddenly became a stranger to Sahla, needing a transition because he was like a real son to her.',
      'Sahla’s question (Muslim 1453a): Sahla said: “Messenger of Allah, I see (displeasure) in Abū Ḥudhayfa’s face when Sālim enters.” He said: “Suckle him.” She said: “How can I suckle him when he is a grown man?” He smiled and said: “I know he is a young man.”',
      'Resolution (Muslim 1453b–c): “Suckle him and you will become unlawful (in marriage) to him, and what is in Abū Ḥudhayfa’s heart will go.” She returned and said: “I suckled him, and what was in Abū Ḥudhayfa’s heart went” (also 1453c with “he has a beard”).',
      'Proof of one-off exemption: Her surprise shows she knew suckling only works in infancy; when he repeated it she understood it was exceptional.',
      'Meaning of riḍāʿ: The Arabic riḍāʿ doesn’t specify direct contact — an infant must nurse from the breast, whereas for an adult a cup is the natural meaning.',
      'Abū Ḥudhayfa’s reaction: Abū Ḥudhayfa was displeased at the mere idea of Sālim coming close to his wife like a son; his displeasure “went” afterwards, which only makes sense if no literal nursing occurred.'
    ]
  });

  /* 25. Did he drop Ashura when the Jews didn't follow him? */
  up('islam/general/d-av-sonstiges-islam-2/c-ashura-juden', {
    who: 'Meccan & Medinan timeline',
    facts: [
      ['Meccan practice', 'Fasted in Mecca with Quraysh'],
      ['Primary ḥadīth', 'Bukhārī 1592, 1892, 2002; Muslim 1125'],
      ['Legal shift', 'Obligatory → recommended (after Ramaḍān)'],
      ['Calendar difference', 'Pure lunar vs. lunisolar leap months']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Fasted in Mecca before Medina', 'ʿĀʾisha reports the Prophet ﷺ and Quraysh fasted ʿĀshūrāʾ in Mecca (inherited from Ibrāhīm and Ismāʿīl), long before meeting Medina’s Jews.'],
        ['Ramaḍān ends its obligation', 'When Ramaḍān was prescribed, he ﷺ said: “Whoever wants to fast it may do so, and whoever wants to leave it may leave it” (Bukhārī 1592, 2002).'],
        ['Recommended, never dropped', 'Shaykh al-Rājiḥī clarifies “left” means left as an obligation; Ibn ʿUmar still fasted it when it fell on his regular fasting day (Bukhārī 1892).'],
        ['Why dates differ from Yom Kippur', 'The Jewish calendar inserts leap months to stay in autumn, whereas the Islamic lunar year has no leap months and shifts ~11 days earlier each year.']
      ]
    },
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (via ʿĀʾisha)',
        en: 'Whoever wants to fast it may do so, and whoever wants to leave it may leave it.',
        ref: 'Bukhārī 1592; 2002'
      }
    ],
    p: [
      'ʿĀʾisha (Bukhārī 1592, 2002): People used to fast ʿĀshūrāʾ before Ramaḍān was made obligatory, and on that day the Kaʿba was covered; when Allah made Ramaḍān obligatory, the Messenger of Allah ﷺ said: “Whoever wants to fast it may do so, and whoever wants to leave it may leave it.”',
      'Ibn ʿUmar (Bukhārī 1892): The Prophet ﷺ fasted ʿĀshūrāʾ and ordered it; when Ramaḍān was prescribed, “ʿĀshūrāʾ was left.” ʿAbdullāh didn’t fast it unless it fell on his regular fasting day — he didn’t stop fasting it altogether.',
      'Shaykh ʿAbd al-ʿAzīz al-Rājiḥī: “Left” means left as an obligation, while it remained recommended, as is clear from the report itself.',
      'Abrahamic Meccan roots: The Prophet ﷺ fasted ʿĀshūrāʾ in Mecca, and so did Quraysh; the Arabs inherited its importance from Ibrāhīm and Ismāʿīl, and it was obligatory before Ramaḍān.',
      'Medinan distinction: One can also understand that it was obligatory for a time in Medina, where many Jews lived, to show Muslims follow the true religion of Mūsā while still differing from them in practice.'
    ]
  });

  /* 26. Abu Dawud 4457: execution for marrying his father's wife */
  up('islam/general/d-av-sonstiges-islam-2/c-zina-mit-mutter-abu-dawud', {
    facts: [
      ['Source', 'Sunan Abī Dāwūd 4457'],
      ['Al-Arnaʾūṭ grading', 'Weak due to iḍṭirāb (5/505, n. 1)'],
      ['Qurʾānic prohibition', 'Marrying father’s wife (4:22)'],
      ['Polemical distortion', 'Not zinā with mother; open istiḥlāl']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Critics’ framing & chain status',
        items: [
          'Mislabelled as “zinā with his mother”',
          'Graded weak due to iḍṭirāb (contradictions in chains & wording)',
          'Al-Arnaʾūṭ marks it weak in Sunan Abī Dāwūd (5/505, n. 1)'
        ]
      },
      right: {
        title: 'Actual case in the report',
        items: [
          'A man who married his father’s wife',
          'Explicitly forbidden in Qurʾān 4:22',
          'Openly marrying her declares lawful what Allah has forbidden'
        ]
      }
    }
  });

  /* 27. Did the Prophet prescribe camel urine? */
  up('islam/general/d-av-sonstiges-islam-2/c-kamel-urin', {
    who: 'Idrāj & chain check',
    facts: [
      ['Textual insertion', 'Idrāj by Qatāda (not Prophetic)'],
      ['Scholars on idrāj', 'al-Khaṭīb, al-Zarkashī, Dr. al-Faḥl'],
      ['Chains without urine', 'Aḥmad, al-Nasāʾī & Muslim 1671a'],
      ['Early scholars', 'al-Ḥasan & Ibn Sīrīn disliked it']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Chains with “and its urine”',
        items: [
          'Qatāda’s insertion (idrāj), unseparated by Ḥumayd',
          'Textbook example of idrāj per al-Khaṭīb al-Baghdādī & al-Zarkashī',
          'Even if accepted: a one-off remedy where all recovered, never a sunna'
        ]
      },
      right: {
        title: 'Chains without it & camel milk norms',
        items: [
          'Aḥmad, al-Nasāʾī & Muslim 1671a (~5 chains) omit “and its urine”',
          'Al-Ḥākim 7184 & Bukhārī 5608 show camels were valued for milk',
          'Ibn Abī Shayba 25200–25201: al-Ḥasan disliked camel urine; Ibn Sīrīn critiqued it'
        ]
      }
    },
    quotes: [
      {
        by: 'Muṣannaf Ibn Abī Shayba',
        en: 'I don’t know what that is.',
        ref: 'Ibn Abī Shayba 25201 (Ibn Sīrīn on drinking camel urine)'
      }
    ],
    p: [
      'Qatāda’s insertion (idrāj): The addition “and their urine” is Qatāda’s, not the Prophet’s ﷺ; Ḥumayd’s way of narrating caused confusion because he didn’t always separate it clearly.',
      'Classical & modern scholarship: Al-Khaṭīb al-Baghdādī and al-Zarkashī identify it as idrāj (an insertion into the ḥadīth), and Dr. Māhir Yāsīn al-Faḥl (ḥadīth professor, University of Anbar) discusses it (shamela.ws/book/1768/157).',
      'Parallel chains without urine: Aḥmad ibn Ḥanbal and al-Nasāʾī have versions without “and its urine”, and Muslim 1671a with about five other chains says only “If you wish…”.',
      'Bukhārī 1501 context: In Bukhārī 1501 the wording is that they asked and he allowed them to go out to the charity camels and drink their milk and urine.'
    ]
  });

  /* 28. Does Islam allow cannibalism? */
  up('islam/general/d-av-sonstiges-islam-2/c-kannibalismus-verbot', {
    who: 'Body sanctity & Qurʾān',
    facts: [
      ['Primary ḥadīth', 'Abū Dāwūd 3207 (ṣaḥīḥ); Ibn Mājah 1616'],
      ['Qurʾānic comparison', 'Qurʾān 49:12 (dead brother’s flesh)'],
      ['Al-Ghazālī', 'Human flesh makes entire dish ḥarām'],
      ['Fiqh consensus', 'Ibn Ḥajar al-Haytamī: forbidden']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Polemical cherry-pick',
        items: [
          'Pulls a disputed theoretical case of a dissolved trace in a pot',
          'Ignores the unanimous ruling stated in the very same Shāfiʿī text',
          'Ignores explicit Qurʾān and ṣaḥīḥ Sunna'
        ]
      },
      right: {
        title: 'Qurʾān, Sunna & juristic consensus',
        items: [
          'Abū Dāwūd 3207: breaking a dead man’s bone is like breaking a living one’s',
          'Qurʾān 49:12 treats eating a dead brother’s flesh as an obvious abomination',
          'Al-Ghazālī & Ibn Ḥajar al-Haytamī confirm human flesh is ḥarām in any form'
        ]
      }
    },
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (via ʿĀʾisha)',
        en: 'Breaking a dead man’s bone is like breaking it when he is alive.',
        ref: 'Abū Dāwūd 3207 (ṣaḥīḥ); Ibn Mājah 1616 (ḥasan)'
      },
      {
        by: 'Qurʾān (Sūrat al-Ḥujurāt)',
        en: 'Would one of you like to eat the flesh of his dead brother? You would detest it.',
        ref: 'Qurʾān 49:12'
      }
    ],
    p: [
      'ʿĀʾisha (Abū Dāwūd 3207; Ibn Mājah 1616): “Breaking a dead man’s bone is like breaking it when he is alive.”',
      'Detailed fiqh reference: The channel links a detailed article on the Islamic view of cannibalism (fiqh.islamonline.net).'
    ]
  });

  /* 29. An Ibn al-Qayyim quote on masturbation */
  up('islam/general/d-av-sonstiges-islam-2/c-ibn-al-qayim-erlaubt-kinder-sklaven-hand-mastrubie', {
    facts: [
      ['Actual source cited', 'Ibn ʿAqīl (not Ibn al-Qayyim)'],
      ['Identical attribution', 'Ibn Taymiyya & Ibn Qudāma'],
      ['Base report', 'Passive “it was narrated from Aḥmad”'],
      ['Core Prophetic rule', 'Marry or fast (Bukhārī 5066; Muslim 1400)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What critics claim',
        items: [
          'Attributes the masturbation opinion to Ibn al-Qayyim himself',
          'Presents an extreme-necessity hypothetical as general Islamic permission',
          'Ignores the passive citation from Aḥmad'
        ]
      },
      right: {
        title: 'What the Ḥanbalī texts show',
        items: [
          'Ibn al-Qayyim, Ibn Taymiyya & Ibn Qudāma all relay Ibn ʿAqīl’s view, not theirs',
          'Base report (“it was narrated from Aḥmad”) is passive and unestablished',
          'Prophetic guidance remains marriage or fasting (Bukhārī 5066; Muslim 1400)'
        ]
      }
    },
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'Young men, whoever can marry should marry; whoever cannot should fast, for it is a shield.',
        ref: 'Bukhārī 5066; Muslim 1400'
      }
    ],
    p: [
      'Ibn Taymiyya (Sharḥ ʿUmdat al-Fiqh 3/194): Reports from Aḥmad (via Ismāʿīl ibn Saʿīd) on someone with an overwhelming sexual urge that it suffices to feed the poor and not fast if he cannot restrain himself for fear his testicles may burst — which al-Qāḍī compares to a chronic illness making fasting impossible.',
      'Reported as Ibn ʿAqīl’s view: A page later Ibn Taymiyya reports that Ibn ʿAqīl and some of his companions said he may masturbate, making clear it is their view, not his — and Ibn Qudāma does the same in his Ḥanbalī fiqh.',
      'Necessity hypothetical vs. core Sunna: It is a hard fiqh case about necessity (fear of real bodily harm), not general permission; the core text is the Prophet’s ﷺ: “Young men, whoever can marry should marry; whoever cannot should fast, for it is a shield” (Bukhārī 5066; Muslim 1400).',
      'Testicles don’t burst from abstinence: The scenario is speculative and literal, not a real-world ruling.'
    ]
  });
})();
