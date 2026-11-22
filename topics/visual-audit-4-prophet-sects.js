/* Visual & Playbook Audit 4 — islam/prophet/*, islam/sects/*, islam/general/* (17 cards)
   Non-destructive patch via up(origKey, patch): preserves all existing branches, credits, links, and shots. */
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
    if (!a) { console.warn('visual-audit-4: missing', key); return; }
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

  /* 1. islam/prophet/d-ia-moon-splitting */
  up('islam/prophet/d-ia-moon-splitting', {
    who: 'Step 1 · Qurʾān, Chains & Silence',
    facts: [
      ['Qurʾān 54:1–2', 'Deniers called it “passing magic”'],
      ['5 Companions', 'Bukhārī 3636–3638; Muslim 2800–2803'],
      ['27 Jan 632 Eclipse', 'Only in ḥadīth; confirmed by NASA'],
      ['Malabar Tradition', 'King Cheraman Perumal / Shakrūti']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Why silence elsewhere proves nothing',
        items: [
          'The 27 Jan 632 solar eclipse (Ibrāhīm’s death) appears only in ḥadīth yet NASA confirms it',
          'Qurʾān 54:1–2 confronts the onlookers who called it magic rather than denying they saw it',
          'Night in Arabia meant daytime, sleep, clouds, or mountains blocking the view elsewhere',
          'Few chronicles survive from that era; a brief split looks like a half moon if unexamined'
        ]
      },
      right: {
        title: 'Positive transmission & regional witness',
        items: [
          'Five Companions narrate it across Bukhārī 3636–3638 and Muslim 2800–2803',
          'ICMA chain analysis traces the report back to the earliest generation',
          'Regional visibility to Quraysh prevents moon-worshipping peoples from building idol cults',
          'Malabar tradition preserves King Cheraman Perumal / Shakrūti of Cranganore witnessing it'
        ]
      }
    },
    quotes: [
      {
        by: 'Qurʾān (Sūrat al-Qamar)',
        en: 'The Hour has drawn near and the moon has split. And if they see a sign, they turn away and say: passing magic',
        ref: 'Qurʾān 54:1–2'
      }
    ],
    p: [
      'The Qurʾānic challenge: “The Hour has drawn near and the moon has split. And if they see a sign, they turn away and say: passing magic” (54:1–2). They called it magic; they didn’t deny seeing it.',
      'Multiple Companions & ICMA: Ibn Masʿūd, Anas, Ibn ʿAbbās, Ibn ʿUmar and Jubayr ibn Muṭʿim narrate it (Bukhārī 3636–3638; Muslim 2800–2803). A study of the chains (ICMA) traces it back to the earliest generation.',
      'The 632 eclipse parallel: The 632 eclipse, the day the Prophet’s ﷺ son Ibrāhīm died, is preserved only in the ḥadīth, yet NASA’s tables confirm it. So absence of a written record elsewhere doesn’t mean an event didn’t happen.',
      'Regional visibility: The miracle may also have been regional, visible to the Quraysh who asked for it, like many miracles of the prophets.'
    ]
  });

  /* 2. islam/prophet/d-ia-suicidal-prophet-hadith */
  up('islam/prophet/d-ia-suicidal-prophet-hadith', {
    who: 'Step 1 · Chain Audit (al-Zuhrī’s balāgh)',
    facts: [
      ['Unconnected Add-on', 'al-Zuhrī’s “fīmā balaghanā” (Bukhārī 6982)'],
      ['Other Students', 'ʿUqayl & Yūnus omit the cliff detail'],
      ['Ibn Ḥajar (Fatḥ)', '“Laysa mawṣūlan” (not connected)'],
      ['Biblical Counter', 'Moses, Elijah, Jonah, Job & Jeremiah']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Connected ḥadīth vs. al-Zuhrī’s balāgh',
        items: [
          'Connected chain (al-Zuhrī → ʿUrwa → ʿĀʾisha) describes Ḥirāʾ without the cliff',
          'Al-Zuhrī’s other students (ʿUqayl, Yūnus) narrate it without the cliff detail',
          'Only Maʿmar records al-Zuhrī’s “fīmā balaghanā” (as it reached us)',
          'Ibn Ḥajar: balāghāt lack a chain and do not meet al-Bukhārī’s conditions'
        ]
      },
      right: {
        title: 'Contextual reply & Biblical parallel',
        items: [
          'Al-Albānī: fear after first seeing Jibrīl & grief at paused revelation ≠ chronic self-harm',
          'Moses asked God to kill him (Numbers 11:10–15)',
          'Elijah asked the LORD to take his life (1 Kings 19:1–5)',
          'Jonah (4:1–8), Job (3:11) & Jeremiah (20:14–18) wished to die or cursed birth'
        ]
      }
    },
    quotes: [
      {
        by: 'Ibn Ḥajar al-ʿAsqalānī',
        en: 'the one saying ‘fīmā balaghanā’ is al-Zuhrī… it is among the balāghāt of al-Zuhrī and is not connected (laysa mawṣūlan).',
        ref: 'Fatḥ al-Bārī 12/359–360 (on Bukhārī 6982)'
      },
      {
        by: 'Moses (Numbers)',
        en: 'If this is how you are going to treat me, please go ahead and kill me.',
        ref: 'Numbers 11:10–15'
      }
    ],
    p: [
      'Connected narration vs. omission: The connected ḥadīth (al-Zuhrī → ʿUrwa → ʿĀʾisha) describes the first revelation in Ḥirāʾ. The other students of al-Zuhrī (ʿUqayl, Yūnus) narrate it without the cliff detail.',
      'Maʿmar’s sole addition: Only in Maʿmar’s version does al-Zuhrī add the cliff report, and he marks it as something that “reached” him.',
      'Ibn Ḥajar’s ruling on balāghāt: Ibn Ḥajar (Fatḥ al-Bārī on 6982): “the one saying ‘fīmā balaghanā’ is al-Zuhrī… it is among the balāghāt of al-Zuhrī and is not connected (laysa mawṣūlan).” A report without a chain doesn’t meet al-Bukhārī’s conditions, which apply only to the connected part. Averroes adds: the version where he actually throws himself down is in an unreliable book with no chain, accepted by no scholar.',
      'Al-Albānī’s contextual reading: Al-Albānī: even if one accepted the addition for argument’s sake, it wouldn’t prove the claim. He had just seen Jibrīl for the first time; fear, confusion and grief at the pause of revelation are understandable and don’t mean a lasting wish for self-harm.',
      'Chain walkthrough video: The video “Was Muhammad ﷺ Suicidal?” (Abu ʿAishah Shamsi) walks through the chains (youtu.be/zh7clHmvYVE).'
    ]
  });

  /* 3. islam/prophet/red-cloak-3-161 */
  up('islam/prophet/red-cloak-3-161', {
    facts: [
      ['Isnād Grading', 'Weak (Zubayr ʿAlī Zaʾī)'],
      ['Qaṭīfa ḥamrāʾ', 'Thick velvet-like red cloak, not underwear'],
      ['Qurʾān 3:161', 'Explicitly clears the Prophet ﷺ of dishonesty'],
      ['Biblical Counter', 'Jeremiah 13:1–11 (linen loincloth)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Polemical claim vs. Arabic & isnād',
        items: [
          'Report in Abū Dāwūd 3971 / Tirmidhī 3009 is graded weak (Zubayr ʿAlī Zaʾī)',
          'Qaṭīfa ḥamrāʾ is a thick, soft velvet-like red cloak or blanket — not underwear',
          'Qurʾān 3:161 states: “It is not for a prophet to act dishonestly with the spoils”'
        ]
      },
      right: {
        title: 'Uḥud context & Biblical parallel',
        items: [
          'Fits Uḥud: archers left posts fearing they would miss spoils (Ṭanṭāwī, Mawdūdī)',
          'Prophet ﷺ asked: “Did you think we would act dishonestly and not give you your share?”',
          'Turn the tables: God commands Jeremiah to wear & bury a linen loincloth (Jer 13:1–11)'
        ]
      }
    },
    quotes: [
      {
        by: 'Qurʾān (Āl ʿImrān)',
        en: 'It is not for a prophet to act dishonestly with the spoils.',
        ref: 'Qurʾān 3:161'
      }
    ],
    p: [
      'Meaning of qaṭīfa ḥamrāʾ: Qaṭīfa: thick, soft fabric (velvet) used for cloaks and blankets; ḥamrāʾ: red.',
      'Mawdūdī on the Uḥud context: Mawdūdī on 3:161: the archers suspected the Prophet’s ﷺ honesty in distributing the spoils; Allah rebukes them: can you expect Allah’s Messenger to divide unjustly what is entrusted to him?',
      'Turn the tables on the Bible: Jeremiah 13:1–11: God tells Jeremiah to buy a linen loincloth, wear it, hide it by the Euphrates and dig it up ruined, a sign of Judah’s pride.'
    ]
  });

  /* 4. islam/prophet/nabidh-not-alcohol */
  up('islam/prophet/nabidh-not-alcohol', {
    facts: [
      ['What Nabīdh Is', 'Date/raisin-sweetened water (non-alcoholic)'],
      ['Three-Day Limit', 'Poured away after day 3 before fermenting'],
      ['Prophetic Rule', '“Drink nothing intoxicating” (Muslim 977a)'],
      ['Biblical Counter', 'Luke 7:34 & John 2 (wine miracle)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Permissible nabīdh (non-intoxicating)',
        items: [
          'Water or milk sweetened with dates or raisins (Lisān al-ʿArab 14/175)',
          'Drunk the same day and the next, then poured out after the third day',
          'Consumed strictly before fermentation can begin',
          'Permitted while sweet and unchanged by scholarly consensus (al-Nawawī 13/174)'
        ]
      },
      right: {
        title: 'Forbidden intoxicants & Biblical counter',
        items: [
          'If left too long and it becomes intoxicating, it is ḥarām (al-Nawawī 9/64)',
          'Muslim 977a: “drink from any vessel, but drink nothing intoxicating”',
          'Gospels record critics calling Jesus “a glutton and a drunkard” (Luke 7:34)',
          'Jesus’s first miracle in John 2 produced wine'
        ]
      }
    },
    quotes: [
      {
        by: 'Al-Nawawī',
        en: 'nabīdh is water sweetened with raisins and the like, so it tastes pleasant without intoxicating; if left too long and it becomes intoxicating, it’s ḥarām',
        ref: 'Sharḥ Ṣaḥīḥ Muslim 9/64'
      },
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'I had forbidden you nabīdh except in waterskins; now drink from any vessel, but drink nothing intoxicating.',
        ref: 'Ṣaḥīḥ Muslim 977a'
      }
    ],
    p: [
      'Explicit ban on intoxicants: Muslim 977a: “I had forbidden you nabīdh except in waterskins; now drink from any vessel, but drink nothing intoxicating.”',
      'Poured away before fermenting: The same ḥadīth narrations say he drank it the same day and the next, and had what remained after the third day poured away: before it could ferment.',
      'Turn the tables on the Gospels: The Gospels call Jesus “a glutton and a drunkard” (Luke 7:34), and his first miracle produced wine (John 2).'
    ]
  });

  /* 5. islam/prophet/amina-hallucinations */
  up('islam/prophet/amina-hallucinations', {
    facts: [
      ['Source Cited', 'Ibn Kathīr quoting Ibn Isḥāq'],
      ['Isnād Status', 'Zero chain; unsourced, fabricated story'],
      ['Other Chains', 'None exist'],
      ['Inheritance Rate', 'Only ~2–5% of children inherit parental epilepsy']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Trace the citation', 'Ibn Kathīr (al-Sīra al-Nabawiyya) quotes the vision report from Ibn Isḥāq'],
        ['Audit the isnād', 'Ibn Isḥāq gives no source and no other chain exists — an unsourced, fabricated story'],
        ['Check the inheritance leap', 'Even if a parent had epilepsy, only about 2–5% of children inherit it']
      ]
    },
    p: [
      'No isnād in Ibn Kathīr or Ibn Isḥāq: Ibn Kathīr quotes it from Ibn Isḥāq, who gives no source, and there is no other chain: an unsourced, fabricated story.',
      'Inheritance does not work that way: Even if a parent had epilepsy, only a small share of children (about 2–5%) inherit it.'
    ]
  });

  /* 6. islam/prophet/bite-your-fathers-thing */
  up('islam/prophet/bite-your-fathers-thing', {
    who: 'Step 1 · Chain & Wording Audit',
    forkTitle: '3 follow-up counter-moves they may try',
    forkSub: 'Choose whether they attack the chain as weak, insist on the insult, or claim he ﷺ spoke vulgarly in general',
    optWho: ['If they pivot', 'If they insist', 'If they generalize'],
    facts: [
      ['Strongest Chain (ʿAwf)', '“Make him bite, and don’t use euphemism” (no body part)'],
      ['Yūnus & al-Sarī', '“His father’s han” (han = “the thing”, a euphemism)'],
      ['Outlier (Shādhdh)', 'Explicit word only via weak mudallis Mubārak ibn Faḍāla'],
      ['Target of Rebuke', 'Tribal war cry (Jāhiliyya) & lineage boasting']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Strongest chains from al-Ḥasan al-Baṣrī',
        items: [
          'ʿAwf al-Aʿrābī: “fa-aʿiḍḍūhu wa-lā taknū” — names no body part (Aḥmad 21233–21234; al-Adab al-Mufrad 963)',
          'Yūnus & al-Sarī: “his father’s han” (Aḥmad 21236; al-Nasāʾī al-Kubrā 10811)',
          'Al-Ṭībī: “al-han is a euphemism (kināya) for the private part” (Sharḥ al-Mishkāt 10/3151)',
          'Prophet ﷺ used the euphemism; target was the tribal war cry causing blood feuds'
        ]
      },
      right: {
        title: 'Weak outlier vs. Prophetic speech',
        items: [
          'Explicit word appears only via Mubārak ibn Faḍāla (Ibn Kulayb al-Shāshī 1500)',
          'Mubārak is the weakest of the four students and known for tadlīs (shādhdh)',
          'Chain itself is ṣaḥīḥ (Ibn Ḥibbān; al-Ḍiyāʾ al-Maqdisī), so don’t falsely call it weak',
          'Companions testify he was never vulgar (al-Bukhārī 3559, 6031, 6032)'
        ]
      }
    },
    quotes: [
      {
        by: 'Al-Ṭībī',
        en: 'al-han is a euphemism (kināya) for the private part',
        ref: 'Sharḥ al-Mishkāt 10/3151'
      },
      {
        by: 'ʿAbdullāh ibn ʿAmr',
        en: 'The Prophet ﷺ was never vulgar and never acted vulgar, and he used to say: the best of you are those with the best character',
        ref: 'Ṣaḥīḥ al-Bukhārī 3559; Ṣaḥīḥ Muslim 2321'
      }
    ],
    p: [
      'Common root & four routes: Every chain runs al-Ḥasan al-Baṣrī ← ʿUtayy ibn Ḍamra ← Ubayy ibn Kaʿb. From al-Ḥasan it is narrated by ʿAwf al-Aʿrābī, Yūnus ibn ʿUbayd, al-Sarī ibn Yaḥyā and Mubārak ibn Faḍāla.',
      'ʿAwf’s route names no body part: ʿAwf’s route (Ghundar, Yaḥyā al-Qaṭṭān, ʿUthmān al-Muʾadhdhin, Khālid ibn al-Ḥārith, Hawdha): the Prophet ﷺ says only “fa-aʿiḍḍūhu wa-lā taknū”, “make him bite, and don’t use euphemism”. No body part is named (Aḥmad 21233, 21234; al-Adab al-Mufrad 963; al-Nasāʾī, al-Kubrā 10812; al-Ṭabarānī, al-Kabīr 532).',
      'Yūnus & al-Sarī transmit “han” (euphemism): Yūnus’s and al-Sarī’s routes: “make him bite his father’s han” (Aḥmad 21236; al-Nasāʾī, al-Kubrā 10811). Han means “the thing”, a word used precisely to avoid naming something: “al-han is a euphemism (kināya) for the private part” (al-Ṭībī, Sharḥ al-Mishkāt 10/3151).',
      'Mubārak ibn Faḍāla’s shādhdh outlier: Only Mubārak ibn Faḍāla puts the explicit word in the Prophet’s ﷺ mouth (Ibn Kulayb al-Shāshī, Musnad 1500). He is the weakest of the four students and known for tadlīs, against ʿAwf and Yūnus, the strongest. That makes his wording an outlier (shādhdh).',
      'Most likely Prophetic wording: So the most likely wording is: “Whoever calls with the call of the Jāhiliyya, make him bite his father’s thing, and don’t use euphemism.” The Prophet ﷺ himself used the euphemism. The explicit word belongs to how the instruction was carried out, not to his own speech.'
    ]
  });

  /* 7. islam/general/d-av-sonstiges-islam-1/c-prophet-saw-redet-hinter-ru-cken */
  up('islam/general/d-av-sonstiges-islam-1/c-prophet-saw-redet-hinter-ru-cken', {
    facts: [
      ['Primary Ḥadīth', 'Bukhārī 6032, 6054, 6131'],
      ['Person Identified', 'ʿUyayna ibn Ḥiṣn al-Fazārī'],
      ['Ruling (al-Khaṭṭābī)', 'Warning the ummah = duty, not backbiting'],
      ['Conduct (al-Qurṭubī)', 'Gentle company without praise']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Private warning (prophetic duty)',
        items: [
          'Identified by Ibn Baṭṭāl & Qāḍī ʿIyāḍ as ʿUyayna ibn Ḥiṣn al-Fazārī',
          'Outwardly Muslim; later apostatised and fought Muslims under Abū Bakr',
          'Al-Khaṭṭābī & Ibn Ḥajar: warning others against a deceiver is sincere advice, not backbiting',
          'The Prophet’s ﷺ assessment came true — a sign of his prophethood'
        ]
      },
      right: {
        title: 'Gentle conduct in person (not hypocrisy)',
        items: [
          'Al-Qurṭubī: showed gentle speech in worldly matters without ever praising him',
          'Truthful warning + good company do not contradict one another',
          'Hoped his tribe would accept Islam and gave him a chance at Paradise',
          'Some exegetes link the incident to the opening of Sūrat ʿAbasa'
        ]
      }
    },
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'Have you ever seen me speak obscenely? The worst people in Allah’s sight on the Day of Resurrection are those people avoid out of fear of their evil.',
        ref: 'Ṣaḥīḥ al-Bukhārī 6032'
      }
    ],
    p: [
      'The narration in al-Bukhārī: Bukhārī 6032 (also 6054, 6131; Abū Dāwūd 4791; Tirmidhī 1996): a man asked permission to enter; the Prophet ﷺ said “What an evil brother of his tribe!”, then was gentle with him. ʿĀʾisha asked why; he said: “Have you ever seen me speak obscenely? The worst people in Allah’s sight on the Day of Resurrection are those people avoid out of fear of their evil.”',
      'Identity & later apostasy: Ibn Baṭṭāl and Qāḍī ʿIyāḍ: the man was ʿUyayna ibn Ḥiṣn al-Fazārī, nicknamed “the fool”, outwardly Muslim but not inwardly. Under Abū Bakr he openly apostatised, fought the Muslims and was brought as a prisoner. The Prophet’s ﷺ description came true, a sign of his prophethood.',
      'Warning is not backbiting: Al-Khaṭṭābī: it isn’t backbiting when the Prophet ﷺ mentions a person’s evil deeds to his ummah; it is his duty to warn them, out of sincere advice. Ibn Ḥajar: anyone who knows something bad about a person and fears others will be deceived by his outward goodness should warn them.',
      'No contradiction in conduct: Al-Qurṭubī: he showed good companionship and gentle speech in worldly matters but did not praise him, so his words about him don’t contradict his actions. What he said was true, and what he gave was good company.',
      'Purpose of gentleness: He was gentle hoping the man’s tribe would accept Islam, and to give the man himself the chance of Paradise. Some exegetes link it to the opening of Sūrat ʿAbasa.'
    ]
  });

  /* 8. islam/general/d-av-sonstiges-islam-1/c-prophet-saw-begehrte-ein-baby */
  up('islam/general/d-av-sonstiges-islam-1/c-prophet-saw-begehrte-ein-baby', {
    facts: [
      ['Musnad Aḥmad 25636', 'Contains very weak narrator Ḥusayn ibn ʿAbdullāh'],
      ['“Ibn Isḥāq” Citation', 'Guillaume’s bracketed note, not in Sīra'],
      ['Actual Source', 'al-Suhaylī, al-Rawḍ al-Unuf ii. 79'],
      ['Name Confusion', 'Mixed up Umm al-Faḍl with Umm Ḥabīb']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Musnad Aḥmad 25636',
        items: [
          'Reports he saw Umm Ḥabīb bint al-ʿAbbās at weaning age',
          'Chain contains Ḥusayn ibn ʿAbdullāh ibn ʿUbaydullāh ibn ʿAbbās',
          'Ḥusayn ibn ʿAbdullāh is a very weak narrator — report is not authentic'
        ]
      },
      right: {
        title: 'Guillaume’s “Ibn Isḥāq” Sīra citation',
        items: [
          'Not in Ibn Isḥāq’s Sīra — a bracketed insertion by Guillaume from al-Suhaylī (ii. 79)',
          'Guillaume adds external passages in parentheses/brackets',
          'Confused Umm al-Faḍl with Umm Ḥabīb, following 1st ed. of al-Rawḍ al-Unuf'
        ]
      }
    },
    quotes: [
      {
        by: 'Alfred Guillaume (citing al-Suhaylī)',
        en: '(Suhaylī, ii. 79: In the riwāya of Yūnus, I.I. recorded that the apostle saw her [Umm al-Faḍl] when she was a baby crawling before him…)',
        ref: 'The Life of Muhammad (bracketed note from al-Rawḍ al-Unuf ii. 79)'
      }
    ],
    p: [
      'Weak chain in Musnad Aḥmad: Musnad Aḥmad 25636: he saw Umm Ḥabīb, daughter of al-ʿAbbās, at weaning age and said: “If she grows up while I am still alive, I will marry her.” Its chain has Ḥusayn ibn ʿAbdullāh, a very weak narrator, so it isn’t authentic.',
      'Guillaume’s bracketed addition: The other version is in Guillaume’s translation of the Sīra: “(Suhaylī, ii. 79: In the riwāya of Yūnus, I.I. recorded that the apostle saw her [Umm al-Faḍl] when she was a baby crawling before him…)”. It is in brackets because Guillaume adds passages from other books. It is not in Ibn Isḥāq’s Sīra as the critics claim.',
      'Name confusion in al-Suhaylī: Guillaume also confused Umm al-Faḍl with Umm Ḥabīb, following the first edition of al-Suhaylī’s al-Rawḍ al-Unuf.'
    ]
  });

  /* 9. islam/general/d-av-sonstiges-islam-1/c-prophet-saw-hat-geschrieben */
  up('islam/general/d-av-sonstiges-islam-1/c-prophet-saw-hat-geschrieben', {
    facts: [
      ['Primary Ḥadīth', 'Bukhārī 114, 3053, 4431'],
      ['“I will write”', 'Means “I will have it written” (dictation)'],
      ['Ibn ʿAbbās’s Role', 'Not an eyewitness; narrated comment later'],
      ['Commentary', 'Fatḥ al-Bārī 1/220']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Examine the deathbed report', 'In Bukhārī 114, 3053, 4431, the severely ill Prophet ﷺ asks for writing material: “I will write for you a statement”'],
        ['Understand dictation idiom', 'Just as rulers say “the king wrote to…”, “I will write” means dictating to a scribe — not writing by his own hand'],
        ['Check Ibn ʿAbbās’s remark', 'Fatḥ al-Bārī (1/220) notes Ibn ʿAbbās did not witness it himself; “it was a great calamity” was his comment when narrating']
      ]
    },
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ (narrated by Ibn ʿAbbās)',
        en: 'Bring me writing material and I will write for you a statement after which you will not go astray.',
        ref: 'Ṣaḥīḥ al-Bukhārī 114, 3053, 4431'
      }
    ],
    p: [
      'The narration of the incident: Ibn ʿAbbās: when his illness grew severe he said “Bring me writing material and I will write for you a statement after which you will not go astray.” ʿUmar said: the Prophet is seriously ill, we have Allah’s Book and it suffices us. They disagreed and raised their voices, and he said: “Leave me; it is not right to quarrel in my presence.”',
      'Ibn ʿAbbās’s comment: Fatḥ al-Bārī (1/220, note): Ibn ʿAbbās used to say “it was a great calamity” when narrating the ḥadīth; he didn’t witness it himself.',
      'Dictation idiom, not handwriting: The wording doesn’t mean he would write it with his own hand, but that he would dictate it to someone else to write.'
    ]
  });

  /* 10. islam/general/d-av-sonstiges-islam-1/c-talah-hadith-krieg-feigling-prophet-saw */
  up('islam/general/d-av-sonstiges-islam-1/c-talah-hadith-krieg-feigling-prophet-saw', {
    facts: [
      ['Report Cited', 'Sunan al-Nasāʾī 3149'],
      ['Narrator Defect', 'Abū al-Zubayr (mudallis) using ʿanʿana'],
      ['Scholarly Grading', 'Weak (Anwār al-Ṣaḥīfa 345; Majmaʿ 9/149)'],
      ['Battlefield Reality', 'Prophet ﷺ held his ground when others fled']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Chain weakness (isnād)',
        items: [
          'Nasāʾī 3149 has Abū al-Zubayr, a mudallis, narrating with “ʿan” (ʿanʿana)',
          'Graded weak by Zubayr ʿAlī Zaʾī (Anwār al-Ṣaḥīfa p. 345)',
          'The supporting chain in Majmaʿ al-Zawāʾid (9/149) is also weak'
        ]
      },
      right: {
        title: 'Even on the report’s own terms',
        items: [
          'When people fled at Uḥud, the Prophet ﷺ remained on the field',
          'He stood with twelve Anṣār including Ṭalḥa rather than running',
          'Even the weak text refutes any claim of cowardice'
        ]
      }
    },
    p: [
      'Summary of Nasāʾī 3149: Nasāʾī 3149: when people fled at Uḥud, the Messenger ﷺ remained with twelve Anṣār including Ṭalḥa. Each time he asked “Who will face them?”, Ṭalḥa offered and he told him to wait, and an Anṣārī went and fell, until only he and Ṭalḥa were left. Ṭalḥa fought until his fingers were cut off.',
      'Why the chain is weak: Zubayr ʿAlī Zaʾī (Anwār al-Ṣaḥīfa p. 345): weak. Abū al-Zubayr is a mudallis and narrates it with ʿanʿana; the supporting chain in Majmaʿ al-Zawāʾid (9/149) is also weak.',
      'Standing firm on the field: Even in it, he stayed on the battlefield when the people fled; he didn’t run.'
    ]
  });

  /* 11. islam/general/d-av-sonstiges-islam-2/c-hasan-darf-beleidigen */
  up('islam/general/d-av-sonstiges-islam-2/c-hasan-darf-beleidigen', {
    facts: [
      ['Primary Ḥadīth', 'Bukhārī 3213, 3531, 4124, 6150, 6153'],
      ['Meaning of Hijāʾ', 'Public satire/irony, not crude insults'],
      ['Strict Limits', 'No foul retaliation (Aḥmad 9411) or tribe-wide satire'],
      ['Historical Role', 'Poetry = media war; ʿĀʾisha: “he defended him”']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Pagan provocation (who started it)',
        items: [
          'Poetry served as the news & propaganda channel of the era',
          'Pagan poets and allies from Madinah went to Makkah to praise Quraysh',
          'They initiated the attack with vulgar verses even about Muslim women',
          'Whole-tribe satire was a common abuse in Arabian poetry'
        ]
      },
      right: {
        title: 'Ḥassān’s reply within Islamic ethics',
        items: [
          'ʿĀʾisha defended Ḥassān: “Don’t, he used to defend the Prophet ﷺ” (Bukhārī 3531, 6150)',
          'Ihjuhum = public criticism via ridicule/irony; no evidence of vulgarity',
          'Prophet ﷺ left when Abū Bakr returned insults in kind (Aḥmad 9411)',
          'Condemned poets who satirise an entire tribe (al-Adab al-Mufrad 874)'
        ]
      }
    },
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'Lampoon them, and Jibrīl is with you.',
        ref: 'Ṣaḥīḥ al-Bukhārī 3213, 4124, 6153'
      },
      {
        by: 'Prophet Muḥammad ﷺ (to Abū Bakr)',
        en: 'an angel was answering for you, but when you replied in kind, Satan appeared',
        ref: 'Musnad Aḥmad 9411'
      }
    ],
    p: [
      'Defensive reply, not initiation: Bukhārī 3213, 6153: “Lampoon them, and Jibrīl is with you.” Bukhārī 3531, 6150: Ḥassān asked permission; the Prophet ﷺ said: “What about my shared lineage with them?” Ḥassān: “I will pull you out of them as a hair is pulled out of dough.” When ʿUrwa abused Ḥassān, ʿĀʾisha said: “Don’t, he used to defend the Prophet ﷺ.” So he didn’t start it; he answered.',
      'Meaning of ihjuhum: Ihjuhum means to criticise publicly with ridicule or irony. Without evidence that his verses were crude, calling them vulgar is guesswork. On the day of Qurayẓa: “Lampoon them, and Jibrīl is with you” (Bukhārī 4124).',
      'Prophetic limits on speech: The limit: a man insulted Abū Bakr while the Prophet ﷺ sat smiling; when Abū Bakr answered with the same words, he got up and left: “an angel was answering for you, but when you replied in kind, Satan appeared” (Aḥmad 9411). “The greatest wrongdoer is the poet who satirises a whole tribe” (al-Adab al-Mufrad 874).',
      'Poetry as media warfare: Poetry was the news channel of the day. The pagan poets, and some Jews of Madinah who went to Makkah to praise the Quraysh, composed vulgar verses even about Muslim women; Ḥassān was the Muslims’ reply within Islamic ethics.'
    ]
  });

  /* 12. islam/sects/d-ia-cursing-and-abusing-of-the-sahaba */
  up('islam/sects/d-ia-cursing-and-abusing-of-the-sahaba', {
    facts: [
      ['Shia Source Cited', 'Nahj al-Balāgha, Sermon 206, ḥadīth 1–2'],
      ['Historical Setting', 'Battle of Ṣiffīn (against people of Shām)'],
      ['ʿAlī’s Directive', 'Stop abusing; pray for reconciliation & guidance'],
      ['Sunni Ḥadīth', '“Do not insult my Companions” (Bukhārī 3673)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What ʿAlī forbade (Nahj al-Balāgha 206)',
        items: [
          'Heard some of his men abusing the people of Shām at Ṣiffīn',
          'Said: “I dislike you starting to abuse them”',
          'Rāfiḍīs cursing the Companions at Ṣiffīn defy ʿAlī’s own command',
          'Prophet ﷺ commanded: “Do not insult my Companions” (Bukhārī 3673)'
        ]
      },
      right: {
        title: 'What ʿAlī commanded instead',
        items: [
          'Describe their deeds and situation — better speech & more convincing argument',
          'Pray: “O Allah, spare our blood and their blood”',
          'Pray: “reconcile between us and them, and guide them out of their error”',
          'Goal: “so that whoever is ignorant of the truth may know it”'
        ]
      }
    },
    quotes: [
      {
        by: 'ʿAlī ibn Abī Ṭālib (Nahj al-Balāgha)',
        en: 'I dislike you starting to abuse them. If you described their deeds and recounted their situation, that would be a better way of speaking and a more convincing argument. Instead of abusing them, say: O Allah, spare our blood and their blood, reconcile between us and them, and guide them out of their error, so that whoever is ignorant of the truth may know it…',
        ref: 'Nahj al-Balāgha, sermon 206, ḥadīth 1–2'
      },
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'Do not insult my Companions',
        ref: 'Ṣaḥīḥ al-Bukhārī 3673'
      }
    ],
    p: [
      'ʿAlī’s rebuke at Ṣiffīn: During Ṣiffīn, Amīr al-Muʾminīn heard some of his men abusing the people of Shām. He said: “I dislike you starting to abuse them. If you described their deeds and recounted their situation, that would be a better way of speaking and a more convincing argument. Instead of abusing them, say: O Allah, spare our blood and their blood, reconcile between us and them, and guide them out of their error, so that whoever is ignorant of the truth may know it…” (Nahj al-Balāgha, sermon 206, ḥadīth 1–2).',
      'Contradicting ʿAlī’s command: So the Rāfiḍīs who curse the Companions present at Ṣiffīn go against ʿAlī’s own command.',
      'Prophetic prohibition: The Prophet ﷺ: “Do not insult my Companions” (Bukhārī 3673).'
    ]
  });

  /* 13. islam/sects/d-ia-mirza-ghulam-ahmad/t-when-did-the-worship-of-jesus-begin */
  up('islam/sects/d-ia-mirza-ghulam-ahmad/t-when-did-the-worship-of-jesus-begin', {
    facts: [
      ['Anchor Verse', 'Qurʾān 5:117 (tawaffaytanī)'],
      ['Lexical Meaning', 'Tawaffā = to take fully'],
      ['Parallel Verses', 'Qurʾān 3:55 & 4:158 (raised to Allah)'],
      ['Ahmadi Dilemma', 'Bending it to “travelled” undercuts their own claim']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Ahmadi claim (Kashmir journey)',
        items: [
          'Claims tawaffaytanī in 5:117 proves Jesus died in Kashmir',
          'Yet 5:117 links “while I was among them” directly to “when You took me”',
          'To explain his absence from them, Ahmadis bend tawaffī to “travelled”',
          'If tawaffī can mean travelling away, their denial of “taken up” collapses'
        ]
      },
      right: {
        title: 'Plain Qurʾānic reading (taken up)',
        items: [
          'Tawaffā means to take fully',
          'Jesus’s absence is caused by Allah taking him, not by a journey',
          'Qurʾān 3:55 and 4:158 explicitly state Allah raised him to Himself',
          'Matches 5:117 seamlessly: while among them he watched; once raised, Allah watched'
        ]
      }
    },
    quotes: [
      {
        by: 'Qurʾān (al-Māʾida)',
        en: 'I was a witness over them as long as I was among them; but when You took me (tawaffaytanī), You were the Watcher over them',
        ref: 'Qurʾān 5:117'
      }
    ],
    p: [
      'The verse text: “I was a witness over them as long as I was among them; but when You took me (tawaffaytanī), You were the Watcher over them” (5:117).',
      'Syntax ties absence to Allah taking him: “When I was among them” is tied to “when You took me”: his absence is caused by Allah taking him, not by a journey.',
      'Lexical meaning & parallel verses: Tawaffā means to take fully; 3:55 and 4:158 say Allah raised him to Himself. If the Ahmadi can bend tawaffī to “travelled”, he can’t object to “taken upward”.',
      'Thread reference: Further discussion in the poster’s thread (x.com/misbah_bangee).'
    ]
  });

  /* 14. islam/sects/d-ia-mirza-ghulam-ahmad/t-mirza-ghulam-ahamad-a-prophet */
  up('islam/sects/d-ia-mirza-ghulam-ahmad/t-mirza-ghulam-ahamad-a-prophet', {
    who: 'Step 1 · Escalating Claims & Failed Prophecies',
    facts: [
      ['Qurʾān 33:40', 'Muḥammad ﷺ is the Seal of the Prophets'],
      ['Bukhārī 3535 / Muslim 2286', 'Last brick; “there is no prophet after me”'],
      ['Failed Prophecies', '15-month death prediction & Qadian plague'],
      ['Separate Religion', 'New book, Qadian pilgrimage & takfīr of Muslims']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Preacher & Reformer', 'Born 1265 AH in Qadian; began as preacher, then claimed to be an inspired reformer'],
        ['Mahdi & “Like the Messiah”', 'Called Jesus’s descent metaphorical and claimed “this incapable one is the fulfilment”'],
        ['Jesus & “The Clear Book”', 'Claimed “what is meant by Mary and Jesus… is none other than me” and wrote “The Clear Book”'],
        ['Muḥammad Returned & Higher', 'Claimed “God sent Muḥammad ﷺ again in Qadian” and that his prophethood exceeded the Prophet’s ﷺ'],
        ['Refuted by Scripture & Failed Prophecies', '33:40 & Bukhārī 3535 seal prophethood; his 15-month death prophecy and Qadian plague claim both failed']
      ]
    },
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'there is no prophet after me',
        ref: 'Ṣaḥīḥ Muslim 2286 (see also Bukhārī 3535)'
      },
      {
        by: 'Mirza Ghulam Ahmad (as quoted)',
        en: 'the Promised Messiah is Muḥammad the Messenger of God who has come again',
        ref: 'Mirza Ghulam Ahmad’s writings'
      }
    ],
    p: [
      'Stage 1 — Preacher, Mahdi & metaphorical Messiah: Born 1265 AH in Qadian. He began as a preacher, then claimed to be a reformer and inspired, then the awaited Mahdi and promised Messiah: the descent of Jesus, he said, was “a metaphorical announcement of someone like the Messiah… and this incapable one is the fulfilment”.',
      'Stage 2 — Claiming to be Jesus & writing a scripture: Then he claimed to be Jesus himself (“what is meant by Mary and Jesus in the inspired phrases is none other than me”), claimed revelation, and wrote a scripture he called “The Clear Book”.',
      'Stage 3 — Claiming to be Muḥammad ﷺ & higher: Then he claimed to be Muḥammad: “God sent Muḥammad ﷺ again in Qadian”, “the Promised Messiah is Muḥammad the Messenger of God who has come again”, and finally that his prophethood was higher than the Prophet’s ﷺ.',
      'Qurʾānic patchwork “revelations”: His “revelations” were patchworks of Qurʾānic phrases (“O Aḥmad… you did not throw when you threw…”, March 1882), and he challenged people to produce “stolen pages like it”.',
      'Failed prophecies & death by plague: Failed prophecies: after losing a debate with a Christian he foretold the man’s death within fifteen months; he didn’t die, and when Qadianis said he had repented, the Christian wrote to refute them. He said plague would never enter Qadian while he was there; it entered, killed its people, and he died of it.',
      'Finality of prophethood: Bukhārī 3535: the Prophet ﷺ is the last brick of the house of prophethood. Muslim 2286: “there is no prophet after me”.'
    ]
  });

  /* 15. islam/general/d-ia-islamic-objections/t-false-incarnation-analogies */
  up('islam/general/d-ia-islamic-objections/t-false-incarnation-analogies', {
    who: 'Step 1 · Attribute vs. Medium Distinction',
    forkTitle: '2 follow-up objections they may try',
    forkSub: 'Choose whether they press eternal Knowledge vs. creation, or Judgement Day intercession ḥadīth',
    optWho: ['If they press', 'If they cite ḥadīth'],
    facts: [
      ['Uncreated Attribute', 'Allah’s Speech from eternal Knowledge (2:120, 2:145, 3:61)'],
      ['Created Medium', 'Paper, ink & vocal cords stay strictly created'],
      ['Intercession Ḥadīth', 'Paired with fasting (Muslim 804; Ṣaḥīḥ al-Jāmiʿ 3882)'],
      ['Death as a Ram', 'Embodied state ≠ divine incarnation (Bukhārī 4730)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Islamic view of Qurʾān & muṣḥaf',
        items: [
          'Speech is Allah’s eternal, uncreated attribute from His eternal Knowledge',
          'Paper, ink & human vocal cords are created carriers — never divine',
          'Writing on paper conveys speech without Allah’s essence entering a book',
          'What intercedes on Judgement Day is the believer’s recitation & reward (like fasting)'
        ]
      },
      right: {
        title: 'Christian Incarnation (why the analogy fails)',
        items: [
          'Claims God’s divine essence united with and became a human being',
          'Muslims never claim Allah’s attribute of Speech became paper and ink',
          'Fasting intercedes alongside the Qurʾān (Ṣaḥīḥ al-Jāmiʿ 3882) — a human deed',
          'Death brought as a ram (Bukhārī 4730) shows embodying states ≠ divine incarnation'
        ]
      }
    },
    quotes: [
      {
        by: 'Prophet Muḥammad ﷺ',
        en: 'Fasting and the Qurʾān will intercede for the servant on the Day of Resurrection. Fasting will say: ‘I deprived him of food and desires by day,’ and the Qurʾān will say: ‘I deprived him of sleep by night’',
        ref: 'Musnad Aḥmad / Ṣaḥīḥ al-Jāmiʿ 3882'
      }
    ],
    p: [
      'Eternal attributes & uncreated Speech: Allah possesses eternal attributes — Knowledge, Sight, Speech — belonging to His nature; He never exists without them, yet they are distinct from one another. Because Allah is uncreated, His Speech (the Qurʾān) is uncreated, originating from His eternal Knowledge (2:120, 2:145, 3:61) and becoming speech when He spoke it.',
      'Created carriers never become divine: The words of the Qurʾān as divine speech/information are uncreated. The paper, ink, and human vocal cords that carry them are created. Calling a written muṣḥaf “the Qurʾān” means it conveys that speech — copying it onto a page never turns paper into a divine being.',
      'Why the Incarnation analogy fails: In the Christian Incarnation, by contrast, God’s divine nature is said to unite with and become a man. Muslims never claim Allah’s attribute of Speech became paper and ink. The analogy completely fails.'
    ]
  });

  /* 16. islam/general/d-ia-islamic-objections/t-did-allah-start-christianity */
  up('islam/general/d-ia-islamic-objections/t-did-allah-start-christianity', {
    who: 'Step 1 · Break the Non-Sequitur',
    forkTitle: '2 ways they shift blame back onto God',
    forkSub: 'Pick whether they argue causal initiation or divine allowance of theological confusion',
    optWho: ['If they argue causation', 'If they blame God'],
    facts: [
      ['Anchor Verse', 'Qurʾān 4:157 (appearance, not Christian dogma)'],
      ['4 Non-Sequiturs', 'Deity, Trinity, Atonement & Law abolition don’t follow'],
      ['Lottery Analogy', 'Prankster isn’t guilty of target’s wild choices'],
      ['Tu Quoque', 'Jesus never says “I am God, worship me” in NT']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Separate martyrdom from later dogma', 'Even thinking Jesus died as a martyr never implies (1) he is God, (2) Trinity, (3) sin transfer, or (4) abolishing Mosaic Law'],
        ['Compare earlier killed prophets', 'Earlier prophets were persecuted and killed without anyone turning them into a triune deity'],
        ['Distinguish trigger from moral guilt', 'Like a lottery prankster not being guilty if his target wrecks his car and abandons his family, human inventors bear the blame'],
        ['Turn the tables on Christianity', 'Nowhere in the New Testament does Jesus plainly say “I am God, worship me” — leaving centuries of Trinitarian disputes and Biblical Unitarians']
      ]
    },
    p: [
      'Four doctrines that never follow from martyrdom: Based on Bassam Zawadi, “Did Allah Start Christianity?”: even if someone thought Jesus died as a martyr, why would that entail that (1) he is God, (2) God is a Trinity, (3) his death transfers human sins, or (4) the Mosaic laws followed by prophets for centuries are now obsolete?',
      'Responsibility lies with human innovators: None of those doctrines follow from a crucifixion. Many prophets before Jesus were persecuted and killed without anyone turning them into a triune god. Later Christian doctrines arose from human exaggeration, philosophical speculation, and innovation — responsibility lies with those who invented them.'
    ]
  });

  /* 17. islam/general/d-ia-islamic-objections/t-non-muslim-exorcisms */
  up('islam/general/d-ia-islamic-objections/t-non-muslim-exorcisms', {
    who: 'Step 1 · Satan’s Motive & Shirk Strategy',
    forkTitle: '2 follow-up lines on reactions & early Church history',
    forkSub: 'Choose whether they cite dramatic reactions to crosses/holy water or early Christian practice',
    optWho: ['If they cite reactions', 'If they cite history'],
    facts: [
      ['Primary Source', 'Dr. Bilal Philips, Exorcism in Islam (pp. 203–210)'],
      ['Satan’s Objective', 'Beautify error & lure into shirk (7:16–17; 15:39; 38:82)'],
      ['Prophetic Exorcism', 'True Jesus & disciples acted in God’s name alone'],
      ['Patristic Admission', 'Justin Martyr, Dialogue with Trypho 85']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Shirk-based exorcisms (staged exit)',
        items: [
          'Possessing jinn are evil devils seeking to lead humans into shirk',
          'Invoking Jesus, saints, Muḥammad ﷺ, or idols serves Satan’s oath (15:39; 38:82)',
          'Devils stage theatrical reactions to crosses/holy water and depart willingly',
          'Leaves witnesses convinced that worshipping created beings works'
        ]
      },
      right: {
        title: 'God-centred exorcism & Justin Martyr',
        items: [
          'Prophet Jesus & true disciples cast out demons by God’s permission and name alone',
          'Islamic ruqyah invokes Allah alone, driving out jinn by the force of truth',
          'Justin Martyr (Trypho 85) admits demons submit to “the God of Abraham, Isaac & Jacob”',
          'Calling on the one God alone remained central even into the early 4th century'
        ]
      }
    },
    quotes: [
      {
        by: 'Justin Martyr (2nd century)',
        en: 'Though you exorcise any demon in the name of any of those who were amongst you — either kings, or righteous men, or prophets, or patriarchs — it will not be subject to you. But if any of you exorcise it in the name of the God of Abraham, and the God of Isaac, and the God of Jacob, it will perhaps be subject to you.',
        ref: 'Dialogue with Trypho 85'
      },
      {
        by: 'Qurʾān (al-Ḥijr)',
        en: 'I will surely beautify the path of error for them on earth.',
        ref: 'Qurʾān 15:39 (see also 7:16–17; 38:82)'
      }
    ],
    p: [
      'True prophetic exorcisms in God’s name: Islam accepts the genuine exorcisms of Prophet Jesus (ʿalayhi al-salām) and his true disciples as part of the Mosaic/prophetic tradition — performed by the permission and in the name of God alone (not in Jesus’s own name as later Gospels frame it).',
      'Why devils leave during shirk rituals: Modern exorcists who invoke Jesus, saints, or even Muḥammad ﷺ are classed with pagan exorcists who call on false gods or sorcery. Because possessing devils are wicked, leaving when shirk is performed achieves Satan’s primary oath: misleading humans into associating partners with Allah.',
      'Qurʾānic testimony to Satan’s oath: Qurʾān 7:16–17: Satan swore to sit in wait on Allah’s straight path from front, back, right, and left. Qurʾān 15:39: “I will surely beautify the path of error for them on earth.” Qurʾān 38:82: “By Your might, I will surely mislead them all.”'
    ]
  });
})();
