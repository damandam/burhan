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
    if (!a) { console.warn('visual-audit-3: missing', key); return; }
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

  // 1. Does Allah “pray”? (33:56, 33:43)
  up('islam/creed/attributes/allah-salah-33-56', {
    facts: [
      ['Qurʾān Anchors', '33:56, 33:43 & 2:155–157'],
      ['From Allah', 'Mercy & praise (not worship)'],
      ['From Angels & Believers', 'Supplication & asking Allah to bless'],
      ['Lexicons', 'Lisān al-ʿArab 14/464–465; al-Ṣiḥāḥ']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Allah’s Ṣalāh',
        items: [
          'Means mercy (raḥma) and praise (Ibn Kathīr, Sufyān al-Thawrī)',
          '33:43 — Sends ṣalāh upon believers to bring them out of darkness into light',
          '2:157 — “Upon them are ṣalawāt from their Lord and mercy”',
          'Lisān al-ʿArab & al-Ṣiḥāḥ: ṣalāh from Allah means mercy/blessing'
        ]
      },
      right: {
        title: 'Angels’ & Believers’ Ṣalāh',
        items: [
          'Angels: supplication, intercession, and asking forgiveness (Ibn ʿAbbās, Abū al-ʿĀliya)',
          'Believers: asking Allah to bless the Prophet ﷺ',
          'Formula: “O Allah, send ṣalāh upon Muḥammad and the family of Muḥammad…”',
          'Ṣallā Allāhu ʿalayhi wa sallam = may Allah bless him and grant him peace'
        ]
      }
    },
    quotes: [
      {
        by: 'Qurʾān',
        en: 'He it is who sends ṣalāh upon you, and His angels, to bring you out of darkness into light.',
        ref: 'Qurʾān 33:43'
      },
      {
        by: 'Ibn Manẓūr / al-Jawharī',
        en: 'Ṣalāh, when from Allah, means mercy/blessing.',
        ref: 'Lisān al-ʿArab 14/464–465; al-Ṣiḥāḥ 6/384'
      }
    ],
    p: [
      'Qurʾānic parallels: 33:43 states “He it is who sends ṣalāh upon you, and His angels, to bring you out of darkness into light” (blessing, not worship), and 2:155–157 states “upon them are ṣalawāt from their Lord and mercy.”',
      'Early exegetes: Ibn ʿAbbās and Abū al-ʿĀliya explained that the angels’ ṣalāh is asking Allah to bless the Prophet ﷺ; Sufyān al-Thawrī stated that Allah’s ṣalāh is His mercy.',
      'Arabic lexicons: Ibn Manẓūr (Lisān al-ʿArab 14/464–465) and al-Jawharī (al-Ṣiḥāḥ 6/384) state “ṣalāh, when from Allah, means mercy/blessing”; al-Bustān (p. 616) and Cameron’s dictionary (p. 155) give ṣallā Allāhu ʿalayhi wa sallam = may Allah bless him and grant him peace.',
      'The believers’ formula: “O Allah, send ṣalāh upon Muḥammad and the family of Muḥammad as You sent ṣalāh upon the family of Ibrāhīm.” Twenty scans in the channel (to capture).'
    ]
  });

  // 2. “Exalted is the jadd of our Lord” (72:3): a grandfather?
  up('islam/creed/attributes/jadd-72-3', {
    facts: [
      ['Qurʾān Anchor', 'Qurʾān 72:3'],
      ['Prophetic Proof', 'Abū Dāwūd 775 (wa taʿālā jadduk)'],
      ['Tafsīr Anchor', 'al-Ṭabarī (majesty & authority)'],
      ['Lexicon', 'Hans Wehr (greatness, majesty)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Misreading “Grandfather”',
        items: [
          'Assumes jadd carries only one sense (grandfather)',
          'Implies Allah has ancestors — rejected by al-Ṭabarī as shirk',
          'Refuted by the verse itself: “He has taken neither wife nor son”'
        ]
      },
      right: {
        title: 'Context & Early Usage',
        items: [
          'Early readings (al-Ḥasan, Sufyān, Mujāhid): richness, remembrance, exalted greatness, power, authority',
          'Prophetic supplication (Abū Dāwūd 775): “exalted is Your jadd” — plainly His majesty',
          'Hans Wehr dictionary: jadd = greatness, majesty'
        ]
      }
    },
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'Glory be to You, O Allah, and praise; blessed is Your name, exalted is Your jadd (wa taʿālā jadduk), there is no god but You.',
        ref: 'Abū Dāwūd 775'
      }
    ],
    p: [
      'The Prophet’s ﷺ opening supplication: “Glory be to You, O Allah, and praise; blessed is Your name, exalted is Your jadd (wa taʿālā jadduk), there is no god but You” (Abū Dāwūd 775) — plainly His majesty.',
      'Hans Wehr: jadd = greatness, majesty (scan in the channel).',
      'Polysemy and context: Like German “Herr” (a man / the Lord), “Schloss” (castle / lock) or “Bank” (bank / bench), one word has several meanings and the context gives the meaning.'
    ]
  });

  // 3. Does Allah have a soul (nafs)?
  up('islam/creed/attributes/allah-nafs', {
    facts: [
      ['Qurʾān Anchors', '3:28; 5:116; 6:12; 4:166'],
      ['Ḥadīth Qudsī', 'Bukhārī 7405 (within Myself)'],
      ['Scholarly Source', 'Ibn Taymiyya, Majmūʿ 9/292–293; 14/196'],
      ['Creed Verdict', 'Nafs = Allah Himself & His essence']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Creaturely Senses of Nafs',
        items: [
          'Air or breath',
          'The “vital spirit” of the physicians',
          'The soul that leaves the body at death',
          'Misreading: treating Allah’s nafs as a separate entity or creaturely soul'
        ]
      },
      right: {
        title: 'Essence & Self (Allah’s Nafs)',
        items: [
          'Arabic idiom: “I saw Zayd himself (nafsahu)”',
          '6:12 — “your Lord has prescribed mercy upon Himself (ʿalā nafsihi)”',
          'Bukhārī 7405 — “if he remembers Me within himself, I remember him within Myself”',
          'Ibn Taymiyya: majority view is Allah Himself with His attributes (14/196)'
        ]
      }
    },
    quotes: [
      {
        by: 'Ḥadīth Qudsī',
        en: 'If he remembers Me within himself, I remember him within Myself.',
        ref: 'Ṣaḥīḥ al-Bukhārī 7405'
      },
      {
        by: 'Qurʾān',
        en: 'Your Lord has prescribed mercy upon Himself (ʿalā nafsihi).',
        ref: 'Qurʾān 6:12'
      }
    ],
    p: [
      'Four lexical uses: Rūḥ and nafs are used for air, for the “vital spirit” of the physicians, for the soul that leaves at death, and for a thing’s essence.',
      'Examples: 6:12 “your Lord has prescribed mercy upon Himself (ʿalā nafsihi)”; 3:28; 5:116; the ḥadīth qudsī: “if he remembers Me within himself, I remember him within Myself” (Bukhārī 7405).',
      'On “He sent it down with His knowledge” (4-166): On 4:166, only Allah knows what knowledge is in His essence, and His nafs is He Himself (14/196).'
    ]
  });

  // 4. If Allah knows everything, why does He test? (29:2–3)
  up('islam/creed/attributes/testing-and-knowledge-29-2', {
    facts: [
      ['Qurʾān Anchors', '29:2–3 & 2:214'],
      ['Ḥadīth Proof', 'Tirmidhī 2398 (prophets tested most)'],
      ['Tafsīr Consensus', 'al-Ṭabarī, Ibn Kathīr, al-Qurṭubī'],
      ['Purpose of Test', 'Manifest sincerity & remove excuses']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Foreknowledge', 'Ibn Kathīr, al-Ṭabarī, and al-Qurṭubī agree Allah knows beforehand who is sincere'],
        ['Public Manifestation', 'Tests show people and the world who is sincere and set signs distinguishing people (al-Ṭabarī)'],
        ['No Excuse Remaining', 'Without a test, a person could claim on Judgement Day that he would have acted differently'],
        ['Hereafter Recompense', 'Allah reveals people’s truth in the Hereafter with reward or punishment (al-Ṭabarī)']
      ]
    },
    quotes: [
      {
        by: 'Qurʾān',
        en: 'Do people think they will be left alone to say ‘we believe’ without being tested?',
        ref: 'Qurʾān 29:2'
      },
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'The most severely tested are the prophets, then the next best.',
        ref: 'Jāmiʿ al-Tirmidhī 2398'
      }
    ],
    p: [
      'Rhetorical framing: 29:2 is rhetorical — “Do people think they will be left alone to say ‘we believe’ without being tested?”',
      'Severity by rank of faith: “The most severely tested are the prophets, then the next best” (Tirmidhī 2398) — the stronger the faith, the harder the test.',
      'Precedent of earlier believers: In 2:214, believers are shaken until they ask “when is Allah’s help?”'
    ]
  });

  // 5. Allah's foot in Hell? (Bukhārī 6661)
  up('islam/creed/attributes/allahs-foot-and-hell', {
    facts: [
      ['Ḥadīth Text', 'Bukhārī 6661 (ʿalayhā — on it)'],
      ['Qurʾān Links', '50:30; 32:13; 11:119'],
      ['Creed Principle', 'Affirmed bilā takyīf (without asking how)'],
      ['Turn the Tables', 'Clement, Stromata VI.6; Matt 6:9']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Placed On It, Not Inside', 'The wording has ʿalayhā (“on it”); even the variant fīhā acts on Hell from above rather than entering'],
        ['Hell Contracts', 'The only named effect of the qadam is that Hell contracts onto its inmates (yanzawī baʿḍuhā ilā baʿḍ)'],
        ['Oath Fulfilled', 'That contraction is the “filling” Allah swore to (32:13; 11:119), and Hell says “Enough! by Your might”'],
        ['Mercy Without Taʾwīl', 'Because Hell is full, no further people are cast in — mercy as the consequence, without taʾwīl']
      ]
    },
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'Hell will keep saying ‘are there more?’ until the Lord of Might places His foot in it, and it says ‘Enough, enough!’',
        ref: 'Ṣaḥīḥ al-Bukhārī 6661'
      }
    ],
    p: [
      'Ibn Taymiyya’s five-step argument: 1. The qadam is on/over Hell, not in it. 2. Its only effect named is contraction (yanzawī baʿḍuhā ilā baʿḍ). 3. The contraction is the filling Allah swore to (“I will fill Hell”). 4. So no further people are cast in — mercy as the consequence, without any taʾwīl of the qadam. 5. Hell’s “Enough! by Your might” is acknowledgement that it is full.',
      'Turn the tables: Christians say God was in Hades (the Descent); Clement of Alexandria says the apostles too preached to the dead in Hades (Stromata VI.6). The Lord’s Prayer and Psalms place God in heaven (Matthew 6:9; Psalm 115:3; 123:1).'
    ]
  });

  // 6. “The day the shin is uncovered” (68:42) and Allah's form on Judgement Day
  up('islam/creed/attributes/the-shin-68-42', {
    who: 'Linguistic & tafsīr distinction',
    forkTitle: '2 ways they press the ḥadīth',
    forkSub: 'Pick the follow-up claim to address the attribute or the change of form',
    optWho: ['Attribute objection', 'Shape-changing objection'],
    facts: [
      ['Qurʾān Verse', '68:42 (idiom of severe terror)'],
      ['Ḥadīth Proofs', 'Bukhārī 4919, 7439; Muslim 183'],
      ['Early Tafsīr', 'Ibn ʿAbbās, Mujāhid, Saʿīd b. Jubayr'],
      ['Creed Rule', 'Affirmed bilā kayf, bilā tamthīl']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Qurʾān 68:42 (Idiom of Terror)',
        items: [
          'Arabic idiom: lifting the garment in fear shows the shin (“the war uncovered its shin”)',
          'Ibn ʿAbbās: “the hardest hour of the Day of Resurrection”, day of terror and severe distress',
          'Mujāhid & Saʿīd ibn Jubayr: “the severity of the matter”',
          'Ibn Taymiyya: the verse doesn’t establish the attribute; the ḥadīth of Abū Saʿīd does'
        ]
      },
      right: {
        title: 'Bukhārī 7439 & Muslim 183 (Attribute & Test)',
        items: [
          'Real attribute affirmed bilā kayf, bilā tamthīl (without distortion, denial, asking how, or likening)',
          'Sign of recognition between believers and their Lord',
          'Test of sincerity: sincere prostrate; hypocrites’ backs become one rigid plank',
          'People’s sight/perception changes, not Allah’s greatness (Ibn ʿUthaymīn, al-Mājishūn)'
        ]
      }
    },
    quotes: [
      {
        by: 'Qurʾān',
        en: 'The day the shin is uncovered and they are called to prostrate but cannot.',
        ref: 'Qurʾān 68:42'
      },
      {
        by: 'ʿAbd al-ʿAzīz ibn Abī Salama al-Mājishūn',
        en: 'Fool! Allah’s greatness doesn’t change; rather He changes your two eyes so you see Him as He wills.',
        ref: 'via Isḥāq ibn ʿĪsā al-Ṭabbāʿ'
      }
    ],
    p: [
      'Ṭanṭāwī and al-Zamakhsharī (al-Kashshāf): a metaphor for a desperate situation; like calling a miser “tight-fisted”. The shin is indefinite to show an unimaginably terrible matter.',
      'Early exegetical chains: Al-Baghawī, Ibn Qutayba; Ibn Kathīr’s reports from Ibn ʿAbbās, Mujāhid (via Ibn Abī Najīḥ and Ibn Jurayj), al-ʿAwfī, and al-Ḍaḥḥāk.',
      'Scholarly difference noted: The Salaf differed on the verse (al-Nawawī, al-Ḥasan al-Baṣrī, Ibn al-Jawzī, al-Qurṭubī).'
    ]
  });

  // 7. The report of the nuṭfa and the Throne
  up('islam/creed/attributes/semen-and-the-throne-report', {
    facts: [
      ['Attribution Status', 'Mawqūf on Ibn Masʿūd (not prophetic)'],
      ['First Chain Flaw', 'Abū al-Zaʿrāʾ (weak / like unknown)'],
      ['Second Chain Flaw', 'Unnamed “man” via Muḥammad b. Kaʿb'],
      ['Ḥadīth Critics', 'al-Bukhārī, Abū Ḥātim, al-Dhahabī']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Not Prophetic (Mawqūf)', 'The report only goes back to Ibn Masʿūd through Abū al-Zaʿrāʾ, not to the Prophet ﷺ'],
        ['Abū al-Zaʿrāʾ Discredited', 'al-Bukhārī: not followed; Ibn Ḥazm: not strong; Abū Ḥātim: not proof, like an unknown; Ibn ʿAdī doubted he heard Ibn Masʿūd'],
        ['al-Ḥākim Refuted', 'al-Dhahabī (Talkhīṣ) rejects al-Ḥākim’s claim of Bukhārī/Muslim conditions since neither used Abū al-Zaʿrāʾ'],
        ['Second Chain Very Weak', 'Muḥammad ibn Kaʿb narrates from an unnamed “man” from Abū Hurayra; authentic reports omit the semen detail']
      ]
    },
    p: [
      'Second chain: Muḥammad ibn Kaʿb from “a man” from Abū Hurayra from the Prophet ﷺ — an unnamed man makes it very weak.',
      'Authentic parallel: Authentic reports from Abū Hurayra mention something similar without the semen detail.'
    ]
  });

  // 8. The Qurʾān is uncreated
  up('islam/creed/d-ia-uncreated-quran', {
    facts: [
      ['Creed Position', 'Uncreated Speech of Allah (attribute)'],
      ['Imām Aḥmad', 'Uṣūl al-Sunna & al-Radd 1/240–241'],
      ['Salaf Consensus', 'al-Lālakāʾī 1/288–290; al-Bukhārī 2/38–39'],
      ['Voice & Letters', 'al-Jīlānī 1/130–131; al-Aṣbahānī 1/388–399']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What the Salaf Affirmed',
        items: [
          'Qurʾān is Allah’s uncreated speech and attribute, not separated from Him (Aḥmad)',
          'Angels ask “What did your Lord say?” — not “What did He create?”',
          'Allah speaks with a heard voice unlike created voices (Mūsā, Judgement Day, Paradise)',
          'Linguists’ consensus: speech consists of words, sounds, and letters (al-Aṣbahānī)'
        ]
      },
      right: {
        title: 'Rejected Views & Rulings',
        items: [
          'Saying the Qurʾān is created is disbelief (Ibn ʿUyayna, Yazīd ibn Hārūn, al-Bukhārī)',
          'Saying “my utterance of the Qurʾān is created” is Jahmism (al-Shāfiʿī, al-Lālakāʾī)',
          'Suspending judgement (“I don’t know”) is innovation (Aḥmad, Uṣūl al-Sunna)',
          'Voiceless inner speech (Ashʿarī view) criticised from Aḥmad (al-Jīlānī, al-Ghunya)'
        ]
      }
    },
    quotes: [
      {
        by: 'Imām Aḥmad ibn Ḥanbal',
        en: 'The Qurʾān is the speech of Allah and it is not created… the words of Allah are not separated from Him, and nothing from Him is created.',
        ref: 'Uṣūl al-Sunna'
      },
      {
        by: 'Imām al-Shāfiʿī',
        en: 'Whoever says my utterance of the Qurʾān, or the Qurʾān with my utterance, is created is a Jahmī.',
        ref: 'via al-Lālakāʾī, Sharḥ Uṣūl al-Iʿtiqād 1/288–290'
      }
    ],
    p: [
      'Aḥmad, Uṣūl al-Sunna: “The Qurʾān is the speech of Allah and it is not created… the words of Allah are not separated from Him, and nothing from Him is created.” Whoever says “I don’t know whether it is created” is an innovator like the one who says it is created.',
      'Al-Shāfiʿī: “Whoever says my utterance of the Qurʾān, or the Qurʾān with my utterance, is created is a Jahmī.”',
      'Al-Bukhārī (Khalq Afʿāl al-ʿIbād 2/38–39): Ibn ʿUyayna, Muʿādh ibn Muʿādh, al-Ḥajjāj ibn Muḥammad, Yazīd ibn Hārūn and the people of knowledge said: “Whoever says the Qurʾān is created is a disbeliever.”',
      'Al-Lālakāʾī (Sharḥ Uṣūl al-Iʿtiqād 1/288–290): Lists dozens of imāms of Baghdad, Baṣra, Kūfa, Egypt, and the frontier towns, from al-Shāfiʿī, Aḥmad, Isḥāq, and Abū ʿUbayd onward, who unanimously said: “whoever says my utterance of the Qurʾān is created is like one who says the Qurʾān is created. This is our statement and our religion.”',
      'Aḥmad: when the angels hear revelation they ask “What did your Lord say?”, not “What did He create?” (al-Radd ʿalā al-Jahmiyya 1/240–241).',
      'Allah speaks with a voice that is heard: He called Mūsā, will speak on the Day of Judgement, and the people of Paradise hear Him; His voice is not like created voices. ʿAbd al-Qādir al-Jīlānī affirmed this from Aḥmad and criticised the Ashʿarī view of a voiceless inner speech (al-Ghunya 1/130–131). Al-Aṣbahānī records the linguists’ consensus that speech is words, sounds, and letters (al-Ḥujja 1/388–399).'
    ]
  });

  // 9. Is Allah “the Father”?
  up('islam/creed/d-ia-is-allah-the-father', {
    facts: [
      ['Meaning of “Father”', 'Creator, Originator, Sustainer (cause)'],
      ['Meaning of “Son”', 'Mercy, closeness, effect (in their usage)'],
      ['Early Precedents', 'Ibn Qutayba (d. 276 AH), al-Wāḥidī (d. 468 AH)'],
      ['Later Tafsīr', 'al-Bayḍāwī, Ibn Taymiyya, al-Biqāʿī']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Ibn Qutayba (213–276 AH)', 'Student of Isḥāq ibn Rāhawayh — gave the exact non-literal explanation centuries before Ibn Taymiyya'],
        ['al-Wāḥidī (d. 468 AH)', 'Gave the same linguistic explanation of “father” and “son” in earlier religions'],
        ['al-Bayḍāwī (50 yrs before Ibn Taymiyya)', 'Earlier religions used “father/son” for cause/effect; the ignorant took it as birth, so it was forbidden'],
        ['Ibn Taymiyya & al-Biqāʿī', 'Confirmed “father” meant Creator, Originator, and Sustainer, and “son” meant mercy and closeness']
      ]
    },
    p: [
      'Ibn Taymiyya: Allah is a “father” in the sense of Creator, Originator and Sustainer, compassionate to the believers; “son” in their language meant mercy and closeness.',
      'Pre-Taymiyyan tafsīr (al-Bayḍāwī & al-Biqāʿī): Christians claim this is a late answer. But al-Bayḍāwī, five decades before Ibn Taymiyya, said earlier religions used “father” and “son” for cause and effect, calling God “father” as the original cause; the ignorant then took it as birth, so it was forbidden. al-Biqāʿī agreed.',
      'Even earlier: al-Wāḥidī (d. 468 AH) and Ibn Qutayba (213–276 AH), student of Isḥāq ibn Rāhawayh, gave the same explanation.'
    ]
  });

  // 10. “Your Lord is not one-eyed”
  up('islam/general/d-av-sonstiges-islam-2/c-allah-swt-sieht-aus-wie-dajal', {
    facts: [
      ['Primary Ḥadīth', 'Abū Dāwūd (#3763 as cited); Ṣaḥīḥ al-Jāmiʿ 2455'],
      ['Visibility Proof', 'Muslim 169 (none sees Allah before death)'],
      ['Argument Logic', 'Visible defect refutes false divinity'],
      ['Target Audience', 'Whole ummah during overwhelming fitna']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'The Dajjāl (False Claimant)',
        items: [
          'Stands visibly on earth before people die',
          'Short, bow-legged, curly-haired, physically defective',
          'One-eyed (eye neither protruding nor sunken)',
          'Apparent wonders (rain, crops, life/death) could confuse the terrified'
        ]
      },
      right: {
        title: 'Allah (The Creator)',
        items: [
          'Unseen in this world (“None of you will see his Lord until he dies”, Muslim 169)',
          'Does not become a man and is not part of His creation',
          'Perfect and free of any physical defect',
          '“Not one-eyed” is a practical refutation of the Dajjāl, not a human likeness'
        ]
      }
    },
    quotes: [
      {
        by: 'ʿUbāda ibn al-Ṣāmit (from the Prophet ﷺ)',
        en: 'He is a short man, bow-legged, curly-haired, one-eyed, his eye neither protruding nor sunken. If you are confused about him, know that your Lord is not one-eyed.',
        ref: 'Abū Dāwūd (#3763 as cited); Ṣaḥīḥ al-Jāmiʿ 2455'
      },
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'None of you will see his Lord until he dies.',
        ref: 'Ṣaḥīḥ Muslim 169'
      }
    ],
    p: [
      'ʿUbāda ibn al-Ṣāmit: “I have told you so much about the Dajjāl that I fear you won’t understand. He is a short man, bow-legged, curly-haired, one-eyed, his eye neither protruding nor sunken. If you are confused about him, know that your Lord is not one-eyed” (Abū Dāwūd #3763 as cited in the channel; Ṣaḥīḥ al-Jāmiʿ 2455).',
      'Two levels of reply: First level, basic creed — Allah doesn’t become a man and isn’t part of His creation. Second level, a practical sign in the fitna — even someone shaken by the Dajjāl’s wonders can see his physical defect and know he isn’t God.',
      'Audience of the warning: The Companions didn’t believe Allah could become man; the warning is for the whole ummah, including the ignorant, the weak in faith, and the terrified, who might think “no ordinary man could do this.”',
      'Decisive second sign: “None of you will see his Lord until he dies” (Muslim 169). The Dajjāl stands visibly in this world, so he can’t be Allah.'
    ]
  });

  // 11. The creaking Throne
  up('islam/general/d-av-sonstiges-islam-2/c-allahs-thron-knirchen', {
    facts: [
      ['Report Status', 'Unestablished / Weak (ḍaʿīf & mursal)'],
      ['Pivot Narrator', 'ʿAbdullāh ibn Khalīfa al-Hamdānī'],
      ['Narrator Grade', 'Majhūl al-ḥāl / lā yakādu yuʿraf'],
      ['Key Critics', 'Ibn Khuzayma, al-Dhahabī, Ibn Ḥajar, al-Albānī']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Solitary Pivot Narrator', 'The chain relies on ʿAbdullāh ibn Khalīfa al-Hamdānī, with doubt over whether he heard from ʿUmar (Ibn Kathīr)'],
        ['Biographical Verdict', 'Graded “scarcely known” (al-Dhahabī, Mīzān 4290; Ibn Ḥajar, Lisān 1344) and explicitly majhūl al-ḥāl (Shuʿayb al-Arnaʾūṭ 3294)'],
        ['Discontinuous Chain', 'Ibn Khuzayma (Kitāb al-Tawḥīd p. 71; cited in al-Albānī, al-Silsila al-Ḍaʿīfa 13/1/723) rejects the report as discontinuous (mursal)'],
        ['Overall Chain Grading', 'al-Qaḥṭānī (Kitāb al-Sunna 1/301, no. 585) grades its chain weak (isnāduhu ḍaʿīf)']
      ]
    },
    p: [
      'Solitary unknown narrator: The “creaking” (aṭīṭ) report goes back through a narrator ʿAbdullāh who is unknown (majhūl).',
      'Channel archive note: The channel holds 18 scans of the chains and gradings; they are still to be captured for this card.',
      'Primary chain rulings (8 channel scans): The solitary pivot ʿAbdullāh ibn Khalīfa al-Hamdānī is graded “not well known” with doubt about his hearing from ʿUmar (Ibn Kathīr) and “scarcely known” (lā yakādu yuʿraf — al-Dhahabī, Mīzān al-Iʿtidāl 4290; Ibn Ḥajar, Lisān al-Mīzān 1344), while Shuʿayb al-Arnaʾūṭ (Taḥrīr Taqrīb al-Tahdhīb 3294) explicitly classifies him majhūl al-ḥāl.',
      'Rejection of the athar itself: Ibn Khuzayma (Kitāb al-Tawḥīd, p. 71; cited in al-Albānī, al-Silsila al-Ḍaʿīfa 13/1/723) rejects the report as discontinuous (mursal), and al-Qaḥṭānī (Kitāb al-Sunna 1/301, no. 585) grades its chain weak (isnāduhu ḍaʿīf).'
    ]
  });

  // 12. Was the Universe Created for the Prophet Muhammad (ﷺ)?
  up('islam/creed/d-ia-aqidah-questions/t-was-the-universe-created-for-the-prophet-muhammad-', {
    facts: [
      ['Scholar Cited', 'Ibn Taymiyyah'],
      ['“Were it not for him…”', 'Not a ḥadīth (neither ṣaḥīḥ nor ḍaʿīf)'],
      ['Transmission Status', 'Unknown speaker; not from Companions'],
      ['Sound Meaning', 'Creation subjected to Adam’s children']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What the Saying Is Not',
        items: [
          'Not a ḥadīth from the Prophet ﷺ — neither authentic nor weak',
          'Not transmitted by any scholar of ḥadīth from the Prophet ﷺ',
          'Not known to have been transmitted from the Companions',
          'A statement whose speaker is unknown'
        ]
      },
      right: {
        title: 'What Is Established (Ibn Taymiyyah)',
        items: [
          'Prophet Muḥammad ﷺ is the master of Adam’s children and ascended above the angels on the Miʿrāj',
          'Allah manifested wondrous wisdom through prophets and awliyāʾ',
          'Qurʾān states Allah subjected heavens, earth, ships, rivers, sun, moon, night, and day to Adam’s children',
          'Only in that broad Qurʾānic sense can the phrase carry a sound interpretation'
        ]
      }
    },
    quotes: [
      {
        by: 'Ibn Taymiyyah',
        en: 'However, this is not a hadith from the Prophet ﷺ, neither authentic nor weak. None of the scholars of hadith has transmitted it from the Prophet ﷺ. Indeed, it is not even known to have been transmitted from the Companions. Rather, it is a statement whose speaker is unknown.',
        ref: 'Islamic Apologetics (#aqidah-questions)'
      },
      {
        by: 'Qurʾān (cited by Ibn Taymiyyah)',
        en: 'He has subjected to you whatever is in the heavens and whatever is on the earth.',
        ref: 'Qurʾān (cited in Ibn Taymiyyah’s discussion)'
      }
    ],
    p: [
      'Ibn Taymiyyah on the Miʿrāj and human honor: The superiority of our Prophet over the angels became manifest on the Night of the Miʿrāj, when he reached a level at which the scratching of the pens could be heard, and he ascended above the stations of the angels. Allah Most High has also manifested, through the righteous among mankind, namely the prophets and the awliyāʾ, such [signs] of His tremendous power and wondrous wisdom as He has not manifested the like of through the angels, for He combined within them what He had distributed among the [other] created beings.',
      'Microcosm and macrocosm: Thus, He created his body from the earth and his spirit from the Highest Assembly. For this reason, it is said: “He is the microcosm (the small world), and he is a copy of the macrocosm (the great world).”',
      'Origin of the saying: Muḥammad is the master of the children of Adam, the best of creation, and the most honored of them before Him. It is from this perspective that some have said: “Allah created the world for his sake,” or, “Were it not for him, He would not have created the Throne, nor the Footstool, nor the heaven, nor the earth, nor the sun, nor the moon.”',
      'Ḥadīth verification: However, this is not a hadith from the Prophet ﷺ, neither authentic nor weak. None of the scholars of hadith has transmitted it from the Prophet ﷺ. Indeed, it is not even known to have been transmitted from the Companions. Rather, it is a statement whose speaker is unknown.',
      'Sound Qurʾānic interpretation: It can, however, be interpreted in a sound manner, like His saying, “He has subjected to you whatever is in the heavens and whatever is on the earth,” and His saying, “And He has subjected to you the ships so that they sail through the sea by His command, and He has subjected to you the rivers. And He has subjected to you the sun and the moon, both constantly pursuing their courses, and He has subjected to you the night and the day. And He has given you of all that you asked of Him. And if you were to count the blessing of Allah, you could not enumerate it,” as well as similar verses in which He explains that He created the created things for the children of Adam.'
    ]
  });

  // 13. Sūras that intercede: is the Qurʾān a person?
  up('islam/quran/d-dr-quran-verses-come-as-birds', {
    facts: [
      ['Primary Ḥadīth', 'Ṣaḥīḥ Muslim 804'],
      ['Parallel Proof', 'Musnad Aḥmad 6626 (Fasting & Qurʾān)'],
      ['Scholarly Meaning', 'Imām Aḥmad: reward of reciting, given form'],
      ['Creed Verdict', 'Allah’s speech does not become a creature']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Misreading',
        items: [
          'Assumes al-Baqara and Āl ʿImrān coming like clouds or birds makes the Qurʾān a separate person',
          'Claims this implies modalism or polytheism',
          'Ignores identical intercession language for deeds like fasting'
        ]
      },
      right: {
        title: 'Scholarly Explanation',
        items: [
          'Imām Aḥmad and others: what comes is the reward of reciting them, given form',
          'Allah’s speech does not change into a creature',
          'Musnad Aḥmad 6626: “Fasting and the Qurʾān will intercede for the servant”',
          'No one claims fasting is a separate divine person'
        ]
      }
    },
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'Recite the Qurʾān, for it will come on the Day of Resurrection as an intercessor for its companions.',
        ref: 'Ṣaḥīḥ Muslim 804'
      },
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'Fasting and the Qurʾān will intercede for the servant.',
        ref: 'Musnad Aḥmad 6626'
      }
    ]
  });

  // 14. Can Allah make a stone He can't lift?
  up('islam/creed/d-ia-stone-bigger-than-allah', {
    facts: [
      ['Core Distinction', 'Possible things vs. self-contradictions'],
      ['Ibn Taymiyya', 'Minhāj al-Sunna 2/293; al-Jawāb 4/469'],
      ['Qurʾānic Method', '6:100–101 (rhetorical impossibility)'],
      ['Further Reading', 'Omnipotence Paradox (academia.edu)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What the Paradox Asks',
        items: [
          'Calls Allah all-powerful and not all-powerful at the same time',
          'Like asking a skilled driver to turn left and right at the exact same moment',
          'An inherent impossibility (like existing and non-existent at once) has no reality',
          'By consensus of rational people, a contradiction is not a “thing” at all'
        ]
      },
      right: {
        title: 'True Omnipotence (Ahl al-Sunna)',
        items: [
          'Allah is able to do every possible thing (Ibn Taymiyya, Minhāj al-Sunna 2/293)',
          'Allah creates anything and lifts anything — no weakness exists',
          'Not doing an impossible contradiction is not a defect',
          'Qurʾān 6:100–101 uses the same rhetorical denial to show impossibility (al-Jawāb 4/469)'
        ]
      }
    },
    quotes: [
      {
        by: 'Ibn Taymiyya',
        en: 'Ahl al-Sunna believe Allah is able to do everything, and every possible thing falls under this. What is inherently impossible, like something existing and non-existent at once, has no reality, its existence is inconceivable, and by the consensus of rational people it is not called a thing.',
        ref: 'Minhāj al-Sunna 2/293'
      }
    ],
    p: [
      'Analogy of logical impossibility: A highly skilled driver can’t turn left and right at the same moment; that’s not lack of skill but the impossibility of the act. Likewise Allah creates anything and lifts anything; demanding one while limiting the other is a logical fallacy.',
      'Ibn Taymiyya: “Ahl al-Sunna believe Allah is able to do everything, and every possible thing falls under this. What is inherently impossible, like something existing and non-existent at once, has no reality, its existence is inconceivable, and by the consensus of rational people it is not called a thing” (Minhāj al-Sunna 2/293).',
      'The Qurʾān argues the same way: “How could He have a son when He has no consort?” (6:100–101); Ibn Taymiyya explains the rhetorical denial shows the impossibility (al-Jawāb al-Ṣaḥīḥ 4/469).',
      'Conclusion: omnipotence isn’t concerned with impossibilities and contradictions. Further reading: “The Omnipotence Paradox: Can Allah Do the Impossible?” (academia.edu).'
    ]
  });

  // 15. “Allah is the best of deceivers”?
  up('islam/creed/d-dr-allah-deceives', {
    who: 'Context & attribute rule',
    forkTitle: '3 follow-up verses they bring',
    forkSub: 'Pick the passage they cite next',
    optWho: ['Badr dream (8:43–44)', 'Hypocrites (4:142)', 'Jesus’s plotters (3:54)'],
    facts: [
      ['Qurʾān Anchors', '3:54; 8:30; 8:43–44; 4:142'],
      ['Theological Rule', 'Ibn ʿUthaymīn, al-Qawāʿid al-Muthlā'],
      ['Lexical Distinction', 'Ibn al-Qayyim (just vs. evil makr)'],
      ['Biblical Parallel', '2 Thess 2:11–12; Jer 4:10']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Blameworthy Deception (Forbidden)',
        items: [
          'Unprovoked deceit or treachery against the innocent (35:43)',
          'Attributed absolutely without a retaliatory context',
          'Lying or overriding truth to harm the blameless'
        ]
      },
      right: {
        title: 'Allah’s Retaliatory Makr (Praiseworthy)',
        items: [
          'Counter-planning against oppressors and plotters (3:54; 8:30; 86:15–16)',
          'Outwitting the deceiver shows superior power, awareness, and foresight',
          'Requital in kind against hypocrites who tried to fool Allah (4:142)',
          'Affirmed for Allah only where it is praise and justice (Ibn ʿUthaymīn, Ibn al-Qayyim)'
        ]
      }
    },
    quotes: [
      {
        by: 'Qurʾān',
        en: 'They plotted, and Allah planned, and Allah is the best of planners.',
        ref: 'Qurʾān 3:54'
      },
      {
        by: 'New Testament',
        en: 'God sends them a strong delusion, so that they will believe the lie.',
        ref: '2 Thessalonians 2:11'
      }
    ],
    p: [
      'Qurʾānic verses: “They plotted, and Allah planned, and Allah is the best of planners” (3:54); “they plot, and Allah plans” (8:30).',
      'Context determines praise or defect: To deceive or mislead is generally a deficiency, especially when unprovoked. But when someone is the target of deception, beating the deceiver at his own game is praiseworthy — it shows you are more capable than the one who started. A person who lets himself be deceived is lacking in awareness and foresight.',
      'Rule of Ibn ʿUthaymīn (al-Qawāʿid al-Muthlā): When these words are attributed absolutely, they are deficiencies; when retaliatory and justified, they are praiseworthy. Ibn ʿUthaymīn explains this in detail in al-Qawāʿid al-Muthlā — such attributes are affirmed for Allah only in the context in which they are praise.',
      'Turn the tables (Bible): 2 Thessalonians 2:11 says for rejecting the truth and accepting the lie of the lawless one, “God sends them a strong delusion, so that they will believe the lie.”'
    ]
  });

  // 16. Obeying the Muslim ruler
  up('islam/creed/d-ia-obeying-the-ruler', {
    facts: [
      ['Qurʾān Anchor', '4:59 (scholars & rulers)'],
      ['Hard Boundary', 'No obedience in disobedience to Allah'],
      ['Ḥadīth Proofs', 'Muslim 1847, 1854; al-Nasāʾī 7781'],
      ['Salaf Consensus', '13 early imāms & jurists cited']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Where Obedience Stops',
        items: [
          'Never when commanded to disobedience to Allah (Ibn ʿUmar — no listening, no obedience)',
          'Believers disapprove of wrong in their hearts (Umm Salama, Qatāda)',
          'Not blind endorsement of tyranny or sin'
        ]
      },
      right: {
        title: 'Where Lawfulness & Patience Hold',
        items: [
          'Listen and obey in lawful matters, whether liked or disliked (al-Nasāʾī 7781)',
          'Endure personal wrong rather than turn safety into bloodshed (Ḥudhayfa)',
          'No armed fighting as long as rulers pray (Umm Salama)',
          'Demanding complete sinlessness before obeying is the way of the Khawārij (Ibn ʿUthaymīn)'
        ]
      }
    },
    quotes: [
      {
        by: 'Ibn ʿUmar (from the Prophet ﷺ)',
        en: 'It is upon the Muslim to listen and obey in what he loves and hates, unless he is commanded to disobedience. If he is commanded to disobedience, there is no listening and no obedience.',
        ref: 'al-Nasāʾī, al-Kubrā 7781; al-Albānī, al-Ṣaḥīḥa 7/15'
      },
      {
        by: 'Ibn ʿUthaymīn',
        en: 'The claim that rulers needn’t be obeyed unless they are completely upright is from the way of the Khawārij.',
        ref: 'Sharḥ Riyāḍ al-Ṣāliḥīn 2/425'
      }
    ],
    p: [
      'Ibn ʿUmar: “It is upon the Muslim to listen and obey in what he loves and hates, unless he is commanded to disobedience. If he is commanded to disobedience, there is no listening and no obedience” (al-Nasāʾī, al-Kubrā 7781; al-Albānī, al-Ṣaḥīḥa 7/15).',
      'Ḥudhayfa: there will be leaders who don’t follow my guidance… “Listen and obey the leader, even if he strikes your back and takes your wealth” (al-Qaḥṭānī, Bayān ʿAqīdat Ahl al-Sunna 1/34).',
      'Umm Salama: there will be rulers you approve of in some things and disapprove of in others; whoever hates it is absolved, whoever disapproves is safe. “Shall we not fight them?” “No, as long as they pray.” Qatāda: disapproving with the heart.',
      'Recorded consensus: Consensus recorded by al-Ḥasan al-Baṣrī, al-Awzāʿī, ʿAmmār ibn Ruzayq, Ibn al-Mubārak, Aḥmad, ʿAbdullāh ibn Aḥmad, Ibn Abī Shayba, al-Barbahārī, Abū Nuʿaym, Ibn Abī Yaʿlā, Ibn al-Khawāhir, Ibn al-Qayyim, and Ibn Mufliḥ.',
      'Meaning of “those in authority”: On 4:59, Aḥmad has two reports, the scholars and the rulers; Ibn al-Qayyim states the verse covers both (Badāʾiʿ al-Tafsīr 1/278–279).',
      'Ibn ʿUthaymīn: the claim that rulers needn’t be obeyed unless they are completely upright “is from the way of the Khawārij” (Sharḥ Riyāḍ al-Ṣāliḥīn 2/425). Aḥmad: people shouldn’t issue currency without the ruler’s permission, or they would commit outrages (Ibn Mufliḥ, al-Mubdiʿ 2/359).'
    ]
  });

  // 17. Rebelling against the ruler
  up('islam/creed/d-ia-rebelling-against-the-ruler', {
    facts: [
      ['Consensus Ruling', 'Armed revolt is ḥarām (al-Nawawī 12/229)'],
      ['Juridical Principle', 'Take the lesser of two harms (Ibn ʿAbd al-Barr)'],
      ['Historical Example', 'al-Ḥasan al-Baṣrī vs. revolt against al-Ḥajjāj'],
      ['Abū Ḥanīfa’s Retraction', 'Distanced from revolt in al-Fiqh al-Absaṭ']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Harm of Armed Revolt (Khurūj)',
        items: [
          'Replaces security with fear, bloodshed, blocked roads, and corruption (Ibn ʿAbd al-Barr)',
          'Rebels against al-Ḥajjāj ignored al-Ḥasan al-Baṣrī and were killed (Ibn Saʿd 1/163–165)',
          'Splits the Muslims; classified with the Khawārij (al-Barbahārī #29)',
          'Forbidden by consensus of the Salaf and four schools (al-Nawawī)'
        ]
      },
      right: {
        title: 'The Sunna Way (Patience & Repentance)',
        items: [
          'When two harms meet, choose the lesser harm (al-Tamhīd 23/279)',
          'Companions forbade abusing, deceiving, or hating leaders (Anas, al-Dānī 2/398)',
          'Fear Allah and repent against oppression (al-Ḥasan al-Baṣrī citing 23:76)',
          'Abū Ḥanīfa retracted armed revolt (al-Fiqh al-Absaṭ) and reconciled with al-Awzāʿī'
        ]
      }
    },
    quotes: [
      {
        by: 'al-Ḥasan al-Baṣrī',
        en: 'If this is a punishment from Allah, you won’t remove it with your swords; if it is a trial, be patient until Allah judges.',
        ref: 'Ibn Saʿd, al-Ṭabaqāt 1/163–165'
      },
      {
        by: 'Anas ibn Mālik',
        en: 'Our elders among the Companions forbade us to abuse our leaders, deceive them or hate them; fear Allah and be patient, the matter is near.',
        ref: 'al-Dānī, al-Sunan al-Wārida fī al-Fitan 2/398'
      }
    ]
  });

  // 18. If Allah willed, they wouldn't disbelieve: so is it His fault?
  up('islam/creed/faith/divine-will-and-disbelief', {
    who: 'Two wills distinction',
    forkTitle: '2 follow-up verses on Hell & sealed hearts',
    forkSub: 'Pick the verse they raise next',
    optWho: ['Filling Hell (32:13)', 'Covered hearts (6:25)'],
    facts: [
      ['Qurʾān Rebuttal', '6:148 & 16:35 refute the shirk excuse'],
      ['Will Distinction', 'Mashīʾa kawniyya vs. irāda sharʿiyya'],
      ['Testing & Choice', '5:48; 10:99; 32:12–15; 38:85'],
      ['Exegesis Cited', 'Ibn ʿĀshūr on 32:13 & 6:25']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Creative Will (Mashīʾa Kawniyya)',
        items: [
          'Nothing happens unless Allah allows it',
          'Does NOT imply Allah is pleased with or loves disbelief',
          '6:148 & 16:35 refute polytheists using creative will as an excuse for shirk',
          'Confirms the state people freely chose (32:13; 6:25)'
        ]
      },
      right: {
        title: 'Legislative Will (Irāda Sharʿiyya)',
        items: [
          'What Allah loves, commands, and asks of people',
          'He wills everyone to accept Islam in this sense without forcing them (5:48; 10:99)',
          'Gave intellect, faculties, prophets, and revelation for real choice (Ibn ʿĀshūr)',
          'Sincere seekers are not turned away (e.g. Abū Sufyān later became Muslim)'
        ]
      }
    },
    quotes: [
      {
        by: 'Qurʾān',
        en: 'Had Allah willed, we wouldn’t have committed shirk… Say: do you have any knowledge? You follow only assumption.',
        ref: 'Qurʾān 6:148'
      },
      {
        by: 'Qurʾān',
        en: 'Had your Lord willed, all on earth would have believed. Will you then compel people?',
        ref: 'Qurʾān 10:99'
      }
    ],
    p: [
      'Creative vs. legislative will: Creative will means nothing happens unless Allah allows it. Legislative will means what He loves and asks of people; He wills everyone to accept Islam in this sense but doesn’t force them.',
      'Qurʾānic proofs of testing: 5:48 says “Had Allah willed, He would have made you one community, but He tests you in what He has given you,” and 10:99 says “Had your Lord willed, all on earth would have believed. Will you then compel people?”',
      'Channel resource: A PDF on qadr is in the channel (to capture).'
    ]
  });

  // 19. 4:64: asking the Prophet ﷺ for forgiveness, even at his grave?
  up('islam/creed/faith/seeking-forgiveness-4-64', {
    facts: [
      ['Qurʾān Context', '4:60–64 (lifetime of the Prophet ﷺ)'],
      ['Exegesis Cited', 'Mujāhid, al-Ṭabarī & al-Saʿdī'],
      ['Grave Story Flaws', 'Mursal (ʿAlī); dream (al-ʿUtbī / Ibn Kathīr)'],
      ['Other Mentions', 'Ibn ʿAbd al-Barr 3/275; al-Nawawī 8/217']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'The Grave Story (Weak / Unsourced)',
        items: [
          'Version from ʿAlī is mursal (disconnected)',
          'Ibn ʿAbd al-Barr (Bahjat al-Majālis 3/275) mentions it without any voice from the grave',
          'Ibn Kathīr’s version (al-ʿUtbī) is a dream',
          'Mentioned by al-Nawawī (al-Majmūʿ 8/217), whose chain is not established'
        ]
      },
      right: {
        title: 'Actual Context of 4:60–64',
        items: [
          'Hypocrites who went to Kaʿb ibn al-Ashraf for judgement instead of the Prophet ﷺ (Mujāhid)',
          'Those who turned to the ṭāghūt instead of the Book and the Sunna (al-Ṭabarī)',
          'Had they come to him repentant and had he asked forgiveness for them, they’d have found Allah forgiving',
          'al-Saʿdī: limited to the Prophet’s ﷺ lifetime, as the context shows'
        ]
      }
    },
    p: [
      'Al-Ṭabarī on the verse: On 4:64, al-Ṭabarī identifies those who turned to the ṭāghūt instead of the Book and the Sunna — had they come repentant…',
      'Status of al-Nawawī’s mention: Al-Nawawī mentions the story in al-Majmūʿ 8/217; its chain is not established.'
    ]
  });

  // 20. Pillars of īmān
  up('islam/creed/d-ia-pillars-of-iman', {
    facts: [
      ['Primary Ḥadīth', 'Ṣaḥīḥ Muslim 8 (Ḥadīth of Jibrīl)'],
      ['Outward Islam', '5 pillars of practice'],
      ['Inward Īmān', '6 pillars (Allah, angels, books, messengers, Last Day, Decree)'],
      ['Commentary', 'al-Fawzān, Sharḥ al-Arbaʿīn al-Nawawiyya']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Islam (5 Outward Pillars)', 'Outward practice on which Islam stands; answered concisely for easy memorisation and understanding (al-Fawzān)'],
        ['Īmān (6 Inward Pillars)', 'Heart’s affirmation (taṣdīq) and knowledge: Allah, His angels, His books, His messengers, the Last Day, and Decree (good and bad)'],
        ['Iḥsān (Perfection)', 'Worshipping Allah as if you see Him'],
        ['Linguistic Rule', '“When they come together they separate, and when apart they come together” — neither is valid without the other']
      ]
    },
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (narrated by ʿUmar)',
        en: 'He was Jibrīl, who came to teach you your religion.',
        ref: 'Ṣaḥīḥ Muslim 8'
      }
    ],
    p: [
      'ʿUmar: a man in very white clothes with very black hair, with no sign of travel and known to none of us, sat knee to knee with the Prophet ﷺ and asked about Islam, īmān, iḥsān, the Hour and its signs (a slave woman giving birth to her master; barefoot, naked, destitute shepherds competing in tall buildings). “He was Jibrīl, who came to teach you your religion” (Muslim 8).',
      'Al-Fawzān (Sharḥ al-Arbaʿīn): the Prophet ﷺ listed the pillars, on which Islam stands; what is beyond them completes it. He kept the answer short because a short answer is easier to memorise and understand.',
      'Combined vs. separate usage: When Islam and īmān are mentioned together, Islam means the outward actions and īmān the inward actions of the heart — affirmation (taṣdīq) and knowledge. When one is mentioned alone, the other is included in it, because neither is valid without the other. “When they come together they separate, and when apart they come together.”'
    ]
  });

  // 21. Innovation (bidʿa)
  up('islam/creed/d-ia-innovation-in-religion', {
    facts: [
      ['Prophetic Completeness', 'Ibn Abī Shayba 35473'],
      ['Companion Precedents', 'Ibn Masʿūd (al-Dārimī 211); Ibn ʿUmar (Tirmidhī 2738)'],
      ['Successor Precedent', 'Saʿīd ibn al-Musayyab (al-Faqīh 1/381)'],
      ['Consequence of Bidʿa', 'al-Dārimī 99; ʿAbd al-Razzāq 18660']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Religion Already Complete', 'The Prophet ﷺ commanded everything bringing closeness to Paradise and forbade everything leading to the Fire (Ibn Abī Shayba 35473)'],
        ['Good Intent Is Not Enough', 'Ibn Masʿūd rebuked pebble-counting tasbīḥ circles: “How many intend good but don’t reach it!” (al-Dārimī 211)'],
        ['Displacing the Sunna', 'Ibn ʿUmar & Saʿīd ibn al-Musayyab rejected unprescribed additions; Ḥassān ibn ʿAṭiyya warned each bidʿa removes a Sunna (al-Dārimī 99)'],
        ['Path to Extremism', 'Most of those innovators later fought with the Khawārij at Nahrawān; Abū Qilāba: heresy makes the sword lawful (ʿAbd al-Razzāq 18660)']
      ]
    },
    quotes: [
      {
        by: 'ʿAbdullāh ibn Masʿūd',
        en: 'How many intend good but don’t reach it!',
        ref: 'Sunan al-Dārimī 211'
      },
      {
        by: 'Saʿīd ibn al-Musayyab',
        en: 'No, I fear He will punish you for leaving the Sunna.',
        ref: 'al-Khaṭīb, al-Faqīh wa al-Mutafaqqih 1/381'
      }
    ],
    p: [
      'The Prophet ﷺ: “There is nothing that brings you closer to Paradise and away from the Fire except that I have commanded you to do it, and nothing that brings you closer to the Fire except that I have forbidden it” (Muṣannaf Ibn Abī Shayba 35473).',
      'Saʿīd ibn al-Musayyab on extra prayer: Saʿīd ibn al-Musayyab threw a pebble at a man praying many rakʿas after the Fajr adhān: “There is no prayer after the adhān except two rakʿas.” “Will Allah punish me for praying a lot?” “No, I fear He will punish you for leaving the Sunna” (al-Faqīh wa al-Mutafaqqih 1/381, ḥasan).',
      'Ibn ʿUmar on the sneezing formula: A man sneezed beside Ibn ʿUmar and said “al-ḥamdu lillāh, and peace be on the Messenger of Allah”. Ibn ʿUmar: “I too say that, but that is not what he taught us; he taught us: al-ḥamdu lillāh ʿalā kulli ḥāl” (Tirmidhī 2738, ḥasan).',
      'Ibn Masʿūd on pebble-counting circles: Ibn Masʿūd found circles in the mosque counting tasbīḥ with pebbles at a leader’s command: “Count your sins instead… How quickly you run to destruction! His Companions are still many, his clothes not yet worn out… Are you on a religion better guided than Muḥammad’s, or opening a door of misguidance?” “We intended only good.” “How many intend good but don’t reach it!” ʿAmr ibn Salama: most of them fought us with the Khawārij at Nahrawān (al-Dārimī 211, ṣaḥīḥ per al-Albānī).',
      'Ḥassān ibn ʿAṭiyya: “No people invent an innovation in their religion but Allah removes a Sunna like it, never to return” (al-Dārimī 99). Abū Qilāba: “People never invent a heresy but they make the sword lawful by it” (ʿAbd al-Razzāq 18660).'
    ]
  });

  // 22. Did he use talismans?
  up('islam/general/d-av-sonstiges-islam-1/c-talisman-bo-ser-auge', {
    facts: [
      ['Source Cited', 'Qāḍī ʿIyāḍ, al-Shifāʾ 2/103'],
      ['Chain Flaw', 'Ibn Isḥāq (d. 151 AH) from unnamed teachers'],
      ['Sīra Verification', 'Absent from extant Ibn Isḥāq & Ibn Hishām'],
      ['Post-Revelation Answer', 'Refused Khadīja’s offer: “No, not anymore”']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Unnamed Chain', 'Traces only to Ibn Isḥāq (80–151 AH) citing “his teachers”, unnamed, about a Prophet who died in 11 AH'],
        ['Absent from Early Sīra', 'Not in extant Ibn Isḥāq or Ibn Hishām; al-Maqrīzī, al-Ḥalabī, and al-Suyūṭī cite no independent source'],
        ['Pre-Revelation Context', 'Refers to events before revelation, when relatives may have done what they thought helped'],
        ['Plain Refusal After Revelation', 'Once revelation began, he told Khadīja plainly: “No, not anymore” (Waqar Akbar Cheema, ICRAA)']
      ]
    },
    quotes: [
      {
        by: 'Qāḍī ʿIyāḍ (report text)',
        en: 'The Messenger of Allah used to have a charm made against the evil eye… Khadīja asked: shall I send for someone to make you a charm? He said: No, not now.',
        ref: 'al-Shifāʾ 2/103'
      }
    ],
    p: [
      'Al-Shifāʾ (2/103): “The Messenger of Allah used to have a charm made against the evil eye… Khadīja asked: shall I send for someone to make you a charm? He said: No, not now.”',
      'Chain: Ibn Isḥāq (80–151 AH) from “his teachers”, unnamed, so we can’t judge them or from whom they had it about a Prophet who died in 11 AH.',
      'Absence from primary sīra sources: It isn’t in the extant parts of Ibn Isḥāq or in Ibn Hishām’s recension. Al-Maqrīzī (Imtāʿ al-Asmāʿ 11/197) and al-Ḥalabī (al-Sīra al-Ḥalabiyya 1/360) repeat Qāḍī ʿIyāḍ without other authorities, and al-Suyūṭī could give no other source (Manāhil al-Ṣafā 216, no. 1166).',
      'Content: before revelation he and those around him may have taken unusual experiences for the evil eye and used what they thought helped. It doesn’t prove he believed in charms; people often let relatives do what they think will help.',
      'If anything it shows his honesty: after revelation he told Khadīja plainly, “No, not anymore” (analysis by Waqar Akbar Cheema, ICRAA).'
    ]
  });

  // 23. Do children go to Hell?
  up('islam/general/d-av-sonstiges-islam-1/c-islam-kinder-ho-lle', {
    facts: [
      ['Scholarly Consensus', 'al-Nawawī: all children before sins in Paradise'],
      ['Ḥadīth Proofs', 'Bukhārī 7047; Abū Dāwūd 2521; Muslim 2662'],
      ['Key Distinction', 'General rule (ḥukm kullī) vs. individual (taʿyīn)'],
      ['Disbelievers’ Children', 'Saved (Bukhārī 7047; Ibn al-Qayyim)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What the Rebuke Forbade (Taʿyīn)',
        items: [
          'Pronouncing on a particular individual soul with certainty (speaking for Allah’s knowledge)',
          'Even the ten promised Paradise did not claim certainty for themselves out of reverence',
          'Early hesitation before later reports settled the question (Ibn ʿAbd al-Barr)',
          '“Allah created Hell and people for it” concerns foreknowledge of accountable adults'
        ]
      },
      right: {
        title: 'The General Rule (Ḥukm Kullī)',
        items: [
          'Great scholarly consensus: every child dying before the age of sins enters Paradise (al-Nawawī)',
          'Bukhārī 7047: children — including disbelievers’ children — are with Ibrāhīm in Paradise',
          'Abū Dāwūd 2521: “the child is in Paradise, and the girl buried alive is in Paradise”',
          'Children never reached taklīf (accountability); Ibn al-Qayyim argued at length that they are saved'
        ]
      }
    },
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'The prophets are in Paradise, the martyrs are in Paradise, the child is in Paradise, and the girl buried alive is in Paradise.',
        ref: 'Abū Dāwūd 2521'
      },
      {
        by: 'Prophet Muḥammad ﷺ (dream-vision)',
        en: '“And the children of the disbelievers?” “Yes, the children of the disbelievers too.”',
        ref: 'Ṣaḥīḥ al-Bukhārī 7047'
      }
    ],
    p: [
      'Al-Nawawī: the great consensus of the scholars is that every child who dies before the age of sins goes to Paradise.',
      'Bukhārī 7047: in his dream-vision the Prophet ﷺ saw Ibrāhīm under a tree in a green garden with children around him — “the children of the people.” “And the children of the disbelievers?” “Yes, the children of the disbelievers too.”',
      'Abū Dāwūd 2521: “The prophets are in Paradise, the martyrs are in Paradise, the child is in Paradise, and the girl buried alive is in Paradise.”',
      'General rule vs. individual judgement: This distinction (ḥukm kullī vs. taʿyīn) is the main answer of Ibn Ḥajar and al-Nawawī — one may say “children are in Paradise” as a rule, but to pronounce on a particular soul with certainty is to speak for Allah’s knowledge. Even the ten promised Paradise didn’t claim certainty for themselves, out of reverence.',
      'Ibn ʿAbd al-Barr: the Prophet ﷺ held back judgement early on, before later reports, like the one about Ibrāhīm and the children, settled the question. Some scholars think the case concerned a polytheist’s child; even then most hold, as Ibn al-Qayyim argued at length, that such children are saved too.',
      'Foreknowledge vs. accountability: “Allah created Hell and people for it” is a general statement about His foreknowledge of adults, not about children, who never reached taklīf (accountability).'
    ]
  });
})();
