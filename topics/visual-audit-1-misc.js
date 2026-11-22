/* Visual & Playbook Audit 1 — Misc batch (21 cards across islam/proofs, christianity/*, atheism/*, other/hinduism) */
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
    if (!a) { console.warn('visual-audit-1: missing', key); return; }
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

  /* 1. islam/proofs/d-dr-the-prophet-did-no-miracles */
  up('islam/proofs/d-dr-the-prophet-did-no-miracles', {
    facts: [
      ['10:20 & 29:50', 'Signs belong to Allah alone'],
      ['Mark 8:12', 'Jesus gave the same refusal'],
      ['Qurʾān 37:14–15', 'Mocked his sign as “plain magic”'],
      ['Muqātil (37:14)', 'Splitting of the moon in Makkah']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'What deniers claim (10:20, 13:7, 29:50)',
        items: [
          'Refusal of on-demand signs means no miracles',
          'Only described as a warner',
          'Claims no witnessed miracle occurred'
        ]
      },
      right: {
        title: 'What the texts actually show',
        items: [
          'Signs occur by Allah’s will, not on demand (29:50)',
          'Jesus likewise refused signs on demand (Mark 8:12)',
          'Deniers saw a sign and called it “plain magic” (37:14–15)',
          'Same accusation hurled at Moses (10:76) & Jesus (61:6)'
        ]
      }
    },
    quotes: [
      { by: 'Qurʾān', en: 'And when they see a sign, they ridicule it, and say: this is nothing but plain magic.', ref: '37:14–15' },
      { by: 'Jesus in the Gospel of Mark', en: 'Why does this generation seek a sign? Truly I tell you, no sign will be given to this generation.', ref: 'Mark 8:12' }
    ],
    p: [
      'Signs belong to Allah (10.20, 13.7, 29.50): 10:20 says “Say: the unseen belongs to Allah alone, so wait.” 13:7 says “You are only a warner.” 29:50 says “Signs are only with Allah.” They teach that miracles come by Allah’s will, not on demand.',
      'Parallel in Jesus’s ministry (Mark 8.12): Jesus answered the same demand the same way: “Why does this generation seek a sign? Truly I tell you, no sign will be given to this generation” (Mark 8:12).',
      'Witnessed sign called “plain magic” (37.14–15): “And when they see a sign, they ridicule it, and say: this is nothing but plain magic.” Āya can mean a Qurʾānic verse, a sign in nature, or a miraculous event. One can’t see a verse, and nobody calls nature “plain magic”, so here it must be a miracle they witnessed.',
      'Identical smear against earlier prophets: The same reply was given to Moses and Aaron (10:76: “this is plain magic”) and to Jesus (61:6: “this is plain magic”).',
      'Earliest tafsīr testimony: The earliest tafsīr, Muqātil ibn Sulaymān, says 37:14 means the splitting of the moon in Makkah: “when they saw a sign, i.e. the moon split in two halves, they mocked”.',
      'Greatest sign & mass-transmitted miracles: Many further miracles are reported through many chains, and the Qurʾān itself is the greatest sign (29:50–51). See Proofs › Miracles of the Prophet ﷺ.'
    ]
  });

  /* 2. islam/proofs/d-ia-truthfulness-of-the-prophet (explainer) */
  up('islam/proofs/d-ia-truthfulness-of-the-prophet', {
    facts: [
      ['Title in Makkah', 'al-Amīn (the Trustworthy)'],
      ['Abū Sufyān', 'Enemy admitted zero prior lies (Bukhārī 7)'],
      ['Mount Ṣafā', '“Only known you to be truthful” (Bukhārī 4770)'],
      ['Ibn Taymiyya', 'Gathered testimonies in al-Jawāb al-Ṣaḥīḥ']
    ],
    visual: {
      kind: 'steps',
      items: [
        {
          h: 'Known as al-Amīn before prophethood',
          sub: 'Makkah called him the trustworthy long before he claimed prophethood',
          p: ['Before prophethood, Makkah called him al-Amīn, the trustworthy. Ibn Taymiyya collected many testimonies that even his opponents never accused him of lying.']
        },
        {
          h: 'Mount Ṣafā test (Bukhārī 4770)',
          sub: '“We have only known you to be truthful.”',
          p: ['On Mount Ṣafā he asked if they’d believe an army was behind the hill; they said “We have only known you to be truthful.” (Bukhārī 4770)']
        },
        {
          h: 'Heraclius & Abū Sufyān (Bukhārī 7)',
          sub: 'A man who never lied about people wouldn’t lie about Allah',
          p: ['Abū Sufyān, then his enemy, admitted they had never accused him of lying before his claim. Heraclius concluded: a man who doesn’t lie about people wouldn’t lie about Allah. (Bukhārī 7)']
        }
      ]
    },
    cardVisual: {
      kind: 'steps',
      items: [
        ['Pre-prophetic reputation', 'Known across Makkah as al-Amīn (the Trustworthy)'],
        ['Mount Ṣafā testimony', 'Quraysh answered: “We have only known you to be truthful.” (Bukhārī 4770)'],
        ['Heraclius’s deduction', 'Abū Sufyān conceded zero prior lies; Heraclius inferred he would not lie about Allah (Bukhārī 7)']
      ]
    },
    quotes: [
      { by: 'Quraysh on Mount Ṣafā', en: 'We have only known you to be truthful.', ref: 'Ṣaḥīḥ al-Bukhārī 4770' }
    ]
  });

  /* 3. islam/general/d-av-sonstiges-islam-1/c-letzte-stunde-islam-prophezeiung-falsch */
  up('islam/general/d-av-sonstiges-islam-1/c-letzte-stunde-islam-prophezeiung-falsch', {
    facts: [
      ['Qurʾān 7:187; 31:34', 'Only Allah knows the Last Hour'],
      ['Bukhārī 6511', '“Your Hour (sāʿatukum)” — their death'],
      ['Muslim 2952–2953', '“Before the Hour comes to you”'],
      ['Musnad Aḥmad 715', '“Great hope for this ummah after 100 years”']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Misreading a single truncated quote',
        items: [
          'Assumes “the Hour” means the Day of Judgement',
          'Ignores the plural address “to you / your Hour”',
          'Ignores Qurʾān 7:187 & 31:34 denying prophetic knowledge of it'
        ]
      },
      right: {
        title: 'All versions & Companions together',
        items: [
          'ʿĀʾisha’s version reads “your Hour (sāʿatukum)” (Bukhārī 6511)',
          'Hishām & al-Mughīra explain: a person’s hour is his death',
          'Abū Yaʿlā links it to “no one on earth today will live 100 years”',
          'ʿAlī affirmed great hope for the ummah after 100 years (Aḥmad 715)'
        ]
      }
    },
    quotes: [
      { by: 'Prophet Muḥammad ﷺ (via ʿĀʾisha)', en: 'If he lives, your Hour (sāʿatukum) will come upon you before he becomes senile.', ref: 'Ṣaḥīḥ al-Bukhārī 6511 (Hishām: he meant their death)' },
      { by: 'ʿAlī ibn Abī Ṭālib', en: '…and by Allah, there is great hope for this ummah after a hundred years.', ref: 'Musnad Aḥmad 715 (strong chain per al-Arnaʾūṭ)' }
    ],
    p: [
      'Qurʾānic baseline (7.187, 31.34): Only Allah knows the time of the Hour (7:187, 31:34), and the Prophet ﷺ said he wasn’t told it, though he described its signs.',
      'Muslim via Anas (2952–2953): Asked when the Hour would come, he was silent, then looked at a boy of Azd Shanūʾa and said: “If this boy lives, he won’t grow very old before the Hour comes to you.” Anas: the boy was my age.',
      'Abū Yaʿlā’s fuller context: “Perhaps it is near; what have you prepared for it?” … “You will be with those you love.” Then: “By Him in whose hand my soul is, no one on earth today will live a hundred years.” Then, looking at a boy of Daws named Saʿd: “If he lives, the Hour will come before he becomes senile.” Another version: “None of you will be alive when this one grows old.”',
      'Bukhārī via ʿĀʾisha (6511): Rough Bedouins asked when the Hour would be; he looked at the youngest and said: “If he lives, your Hour (sāʿatukum) will come upon you before he becomes senile.” Hishām said: he meant their death.',
      'Salaf usage of “a person’s hour”: Al-Mughīra ibn Shuʿba: “People keep talking about the Hour; a person’s hour is his death.” The saying “whoever dies, his qiyāma has begun” is reported from al-Mughīra, ʿAlqama and ʿUmar ibn ʿAbd al-ʿAzīz.',
      'ʿAlī’s correction (Musnad Aḥmad 715): ʿAlī corrected Abū Masʿūd: the Prophet ﷺ said “in a hundred years no soul alive today will remain on earth”, “and by Allah, there is great hope for this ummah after a hundred years” (Musnad Aḥmad 715, strong chain per al-Arnaʾūṭ). None of the Companions took it as the end of the world.'
    ]
  });

  /* 4. christianity/bible/additions */
  up('christianity/bible/additions', {
    who: 'Opening move',
    facts: [
      ['Mark 16:9–20', 'Absent from Sinaiticus & Vaticanus'],
      ['John 7:53–8:11', 'Absent from P66 & P75; floats location'],
      ['1 John 5:7', 'Absent from Greek MSS until late medieval era'],
      ['Modern Bibles', 'Bracket or remove these passages']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Mark 16:9–20 (Resurrection ending)', 'Missing from Codex Sinaiticus and Codex Vaticanus; bracketed with a note in most modern Bibles'],
        ['John 7:53–8:11 (Woman caught in adultery)', 'Absent from earliest papyri (P66, P75) and floats to different places, even after Luke 21:38'],
        ['1 John 5:7 (Comma Johanneum)', 'Explicit Trinity verse missing from all Greek MSS before the late medieval period; omitted by Erasmus at first and removed in modern translations']
      ]
    },
    p: [
      'Earliest complete MSS omit Mark 16.9–20: Mark 16:9–20 is absent from the two oldest complete Greek manuscripts, Codex Sinaiticus and Codex Vaticanus. Most modern Bibles bracket it with a note.'
    ]
  });

  /* 5. christianity/bible/manuscripts */
  up('christianity/bible/manuscripts', {
    who: 'Opening move',
    forkTitle: '3 ways Christians defend NT preservation',
    forkSub: 'Pick their follow-up to dismantle manuscript count, doctrine, or Qurʾān tu quoque',
    optWho: [
      'If they cite manuscript count',
      'If they claim doctrine is safe',
      'Watch out · tu quoque'
    ],
    facts: [
      ['1st-century NT MSS', 'Zero surviving manuscripts'],
      ['Earliest fragment', 'P52 (John, c. 125–150 CE)'],
      ['Greek NT variants', '200,000–400,000 (vs ~138,000 words)'],
      ['Qurʾān attestation', '100% attested in its first century']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'New Testament manuscript record',
        items: [
          '0% attested in the 1st century CE',
          'Earliest witness: P52 (c. 125–150 CE), a few verses of John',
          '200,000–400,000 scribal variants across mostly medieval copies',
          'Doctrinal variants/additions (1 John 5:7, John 1:18, Mark 16:9–20)'
        ]
      },
      right: {
        title: 'Qurʾān manuscript & oral record',
        items: [
          '100% attested in manuscripts from its own 1st century',
          'Aḥruf & qirāʾāt go back to the Prophet ﷺ and were recorded openly',
          'Ṣanʿāʾ palimpsest differences are minor particles and prepositions',
          'Zero added doctrinal passages or missing/floating chapters'
        ]
      }
    },
    p: [
      'Zero 1st-century manuscripts: What share of New Testament manuscripts date to the first century CE? Zero. The earliest are P52 (John, c. 125–150 CE), and P104 and P90 from the 2nd century.',
      'Post-1st-century Fathers: The Apostolic Fathers: Clement of Rome (d. 99), Ignatius of Antioch (d. 108), Polycarp (d. 155). Justin, Irenaeus, Clement of Alexandria, Tertullian and Origen all wrote in the 2nd or 3rd century.',
      'Ataie’s bottom line: There are zero surviving witnesses to the four Gospels from the first century, either as manuscripts or as writings of first-century Christians.',
      'Contrast with the Qurʾān: The Qurʾān, by contrast, is 100% attested in manuscripts from its own first century.'
    ]
  });

  /* 6. christianity/bible/d-ia-biblical-corruption/t-earliest-christians-believed-in-a-corrupted-torah (explainer) */
  up('christianity/bible/d-ia-biblical-corruption/t-earliest-christians-believed-in-a-corrupted-torah', {
    facts: [
      ['Source', 'Pseudo-Clementine Homilies'],
      ['Key chapters', 'Homily 2.38; 3.47'],
      ['Teaching', 'False passages mixed into the written Law'],
      ['Significance', 'Pre-Islamic Christian belief in taḥrīf']
    ],
    visual: {
      kind: 'steps',
      items: [
        {
          h: 'Law written down later',
          sub: 'Homilies 2.38 & 3.47 state the Law was recorded later rather than directly',
          p: ['The Homilies (e.g. Homily 2.38; 3.47) say the law was written down later and falsehoods were mixed in, against God’s character.']
        },
        {
          h: 'False pericopes mixed in',
          sub: 'Passages contradicting God’s character were attributed to later additions',
          p: ['The idea of a corrupted scripture isn’t a Muslim invention. Early Jewish-Christian writings, the Pseudo-Clementine Homilies, teach that false passages were added to the Torah.']
        }
      ]
    },
    cardVisual: {
      kind: 'steps',
      items: [
        ['Delayed writing', 'Pseudo-Clementine Homilies (2.38; 3.47) report the Law was written down later'],
        ['Mixed-in falsehoods', 'Contradictory statements about God’s character attributed to false additions'],
        ['Early Christian witness', 'An early Jewish-Christian community taught textual additions long before Islam']
      ]
    }
  });

  /* 7. christianity/jesus/d-ia-messianic-prophecies/t-jesus-raised-to-heaven-alive */
  up('christianity/jesus/d-ia-messianic-prophecies/t-jesus-raised-to-heaven-alive', {
    facts: [
      ['Qurʾān 4:157–158', 'Raised alive while appearing to suffer'],
      ['OT & Gospels', 'Deliverance motifs & rescue prophecies'],
      ['Dead Sea Scrolls', 'Teacher of Righteousness on Isaiah 53'],
      ['Channel deck', 'Jesus Raised to Heaven Alive (4).pdf']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Old Testament & Gospel expectation', 'Documents OT deliverance passages and Jesus’s own statements anticipating divine rescue rather than forsaken death'],
        ['Second-Temple parallel (Isaiah 53)', 'Shows how Judah the Teacher of Righteousness applied Isaiah 53 in a framework matching Islamic deliverance'],
        ['Early Christian & Qurʾānic convergence', 'Corroborates Qurʾān 4:157–158: a righteous figure raised to heaven alive while appearing to suffer']
      ]
    }
  });

  /* 8. christianity/jesus/d-dr-mark-10-18 */
  up('christianity/jesus/d-dr-mark-10-18', {
    facts: [
      ['Verse', 'Mark 10:18 (par. Luke 18:19)'],
      ['Jesus’s words', '“No one is good except God alone”'],
      ['Origen (On Prayer)', 'Pray to the Father alone, not the Son'],
      ['Hippolytus (Ref. 5.2)', '“One is good” = Father in heaven']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Trinitarian “test” claim',
        items: [
          'Claims Jesus was testing the man to realise Jesus is God',
          'Reverses a plain denial into a hidden claim of deity',
          'Ignores the contrast between Jesus and “God alone”'
        ]
      },
      right: {
        title: 'Plain text & early Fathers',
        items: [
          'Jesus deflects “good” away from himself to “God alone”',
          'Origen (On Prayer): pray to the Father alone, not to the Son',
          'Hippolytus (Refutation 5.2): “One is good” = “my Father which is in the heavens”'
        ]
      }
    },
    quotes: [
      { by: 'Mark 10:18', en: 'Why do you call me good? No one is good except God alone.', ref: 'Mark 10:18 (cf. Luke 18:19)' },
      { by: 'Hippolytus of Rome', en: 'One is good … my Father which is in the heavens.', ref: 'Refutation of All Heresies 5.2' }
    ]
  });

  /* 9. christianity/jesus/d-dr-jews-can-t-be-trusted-in-john */
  up('christianity/jesus/d-dr-jews-can-t-be-trusted-in-john', {
    facts: [
      ['Pattern in John', '30+ opponent misunderstandings (Ch. 2–12)'],
      ['John 10:6', 'Narrator: “they did not understand”'],
      ['John 10:30–36', 'Jesus refutes them via Psalm 82:6'],
      ['John 12:34', 'Crowd baffled by “Son of Man”']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['John 9 (#25–26)', 'Opponents misread Sabbath healing & spiritual blindness; Jesus corrects them'],
        ['John 10:6 & 10:19–25 (#27–29)', 'Narrator notes they “did not understand” his figurative speech; they call him demon-possessed'],
        ['John 10:30–36 (#30)', 'They misread “I and the Father are one”; Jesus immediately refutes them using Psalm 82:6 (“gods”)'],
        ['John 12 (#31)', 'Crowd still fails to grasp what he means or what “the Son of Man” is']
      ]
    },
    quotes: [
      { by: 'Gospel of John (Narrator)', en: '…did not understand what he was saying to them.', ref: 'John 10:6' },
      { by: 'Jesus quoting Psalm 82', en: 'If he called them ‘gods’ to whom the word of God came…', ref: 'John 10:35 (Psalm 82:6)' }
    ],
    p: [
      'John 9 (#25–26): Opponents misread Sabbath healing as breaking the Law, and Jesus has to correct their reading of his words on spiritual blindness.',
      'John ch. 10, v. 6 (#27): The narrator explicitly remarks that the Pharisees “did not understand what he was saying to them” because he spoke in figurative language.',
      'John ch. 10, vv. 19–25 (#28–29): They accuse him of being demon-possessed and raving mad, and still fail to grasp his plain messianic claim.',
      'John ch. 10, vv. 30–36 (#30): They misread “I and the Father are one” as a claim to deity — and Jesus immediately refutes them using Psalm 82 (“If he called them ‘gods’ to whom the word of God came…”) and clarifies his title as “God’s Son” sent by the Father.',
      'John 12 (#31): The crowd still doesn’t understand what he means or what “the Son of Man” is. Relying on hostile opponents’ accusations as infallible theology turns John’s own narrative upside down.'
    ]
  });

  /* 10. christianity/jesus/d-dr-disciples-worship-jesus-debunked */
  up('christianity/jesus/d-dr-disciples-worship-jesus-debunked', {
    who: 'Opening move',
    facts: [
      ['Greek verb', 'proskyneō (bow / pay homage)'],
      ['Ibn Kathīr 12:100', 'Respectful sujūd lawful from Ādam to ʿĪsā'],
      ['Rev 19:10 & 22:8–9', 'John twice performed proskyneō to an angel'],
      ['Consequence', 'John didn’t view proskyneō as exclusive to God']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Selective translation bias',
        items: [
          'Translates proskyneō as “worship” only for Jesus',
          'Translates the exact same word as “bowed/paid homage” for kings',
          'Assumes bowing to a prophet implies divinity'
        ]
      },
      right: {
        title: 'Earlier prophetic law & Revelation 22',
        items: [
          'Prostration of honour was lawful from Ādam to ʿĪsā (Ibn Kathīr 12:100)',
          'Islam later prohibited bowing to creation, reserving sujūd for Allah',
          'After Jesus’s ministry, John bowed to an angel (Rev 19:10; 22:8)',
          'Proves John himself did not treat proskyneō as exclusive to God'
        ]
      }
    },
    quotes: [
      { by: 'Tafsīr Ibn Kathīr', en: 'In the laws of these and previous Prophets, it was allowed for people to prostrate before men of authority when they met them. This practice was allowed from the law of Ādam until the law of ʿĪsā (peace be upon them), and was later prohibited in our law. Islam made prostration exclusively for Allah Alone.', ref: 'Tafsīr on Qurʾān 12:100' }
    ],
    p: [
      'Ibn Kathīr on Qurʾān 12, v. 100: “In the laws of these and previous Prophets, it was allowed for people to prostrate before men of authority when they met them. This practice was allowed from the law of Ādam until the law of ʿĪsā (peace be upon them), and was later prohibited in our law. Islam made prostration exclusively for Allah Alone.”',
      'Academic translations expose the bias: Scholarly translations recognise proskyneō as physical prostration/reverence — completely consistent with the Islamic view of Jesus as a revered prophet, never claiming divinity.'
    ]
  });

  /* 11. christianity/jesus/d-dr-jesus-is-the-word-and-spirit-of-allah */
  up('christianity/jesus/d-dr-jesus-is-the-word-and-spirit-of-allah', {
    facts: [
      ['Qurʾān 4:171', 'Explicitly forbids saying “Three”'],
      ['Qurʾān 3:59', 'Created by command “Be!” like Ādam'],
      ['Arabic iḍāfa', 'Honorific attribution (15:29; 22:26; 91:13)'],
      ['Imām Aḥmad', 'Refuted confusing messenger with Speech']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Misreading Qurʾān 4:171',
        items: [
          'Isolates “His Word” and “a spirit from Him”',
          'Ignores the verse’s explicit anti-Trinitarian commands',
          'Confuses honorific iḍāfa with sharing God’s essence'
        ]
      },
      right: {
        title: 'Qurʾān 4:171 & Arabic grammar',
        items: [
          '4:171 commands: “do not say ‘Three’; desist — Allah is but one God”',
          '“Word” = created by Allah’s spoken command “Be!” (3:59; Imām Aḥmad)',
          '“Spirit from Him” = honorific attribution like Ādam (15:29)',
          'Same iḍāfa for “My House” (22:26) & “she-camel of Allah” (91:13)'
        ]
      }
    },
    quotes: [
      { by: 'Qurʾān', en: 'The Messiah, Jesus son of Mary, was only a messenger of Allah, and His word which He directed to Mary, and a spirit [created] from Him… and do not say ‘Three’; desist — Allah is but one God.', ref: '4:171' },
      { by: 'Qurʾān', en: 'Indeed, the likeness of Jesus with Allah is as the likeness of Ādam: He created him from dust, then said to him ‘Be!’ and he was.', ref: '3:59' }
    ],
    p: [
      'Full context of Qurʾān 4, v. 171: “The Messiah, Jesus son of Mary, was only a messenger of Allah, and His word which He directed to Mary, and a spirit [created] from Him… and do not say ‘Three’; desist — Allah is but one God.” Using an explicitly anti-Trinitarian verse to prove the Trinity ignores its own words.',
      'Why “Word” (Kalimatullāh): Qurʾān 3:59 explains it directly: “Indeed, the likeness of Jesus with Allah is as the likeness of Ādam: He created him from dust, then said to him ‘Be!’ and he was.” Jesus came into existence through Allah’s spoken command without a father — Imām Aḥmad ibn Ḥanbal refuted Christians who confused the created messenger with Allah’s uncreated attribute of Speech.',
      'Why “a spirit from Him” (rūḥun minhu): Arabic iḍāfa (attribution to Allah) expresses honour and creation, never part of God’s essence — just as Allah breathed “of My spirit” into Ādam (15:29), calls the Kaʿba “My House” (22:26), and calls Ṣāliḥ’s camel “the she-camel of Allah” (91:13). See VegitoWrath thread (https://x.com/vegitowrath/status/1591455924048347136) and video (https://youtu.be/ul0KDbduszg).'
    ]
  });

  /* 12. christianity/jesus/d-dr-jesus-never-said-ahmed */
  up('christianity/jesus/d-dr-jesus-never-said-ahmed', {
    who: 'Opening move',
    forkTitle: '2 ways to follow up on textual traces & scholarship',
    forkSub: 'Pick one to examine John 14 / Isaiah 42 or Bart Ehrman on the historical Jesus',
    optWho: [
      'If they ask for textual traces',
      'If they press name vs meaning'
    ],
    facts: [
      ['Qurʾān 61:6 vs 7:157', 'Reports speech, does not claim “written”'],
      ['John 20:30 & 21:25', 'Gospels admit massive unrecorded sayings'],
      ['John 14:16 & Isa 42', 'paráklētos/periklytós & etmōkh/Aḥmad'],
      ['Bart Ehrman', 'Jesus predicted a distinct future figure']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['1. Contrast 61:6 with 7:157', '7:157 says “written down (maktūban)”; 61:6 reports Jesus’s spoken words without claiming scribes preserved them in Greek'],
        ['2. Argument from silence fails', 'Inferring “never happened” from unrecorded sayings fails—especially since John 20:30 & 21:25 admit most words went unwritten'],
        ['3. Traces & historical scholarship', 'Textual echoes appear in Paraclete (periklytós) & Isaiah 42 (etmōkh/Aḥmad), and Bart Ehrman confirms Jesus heralded a distinct future deliverer']
      ]
    },
    quotes: [
      { by: 'Gospel of John', en: 'there are also many other things that Jesus did; were every one of them to be written, I suppose the world itself could not contain the books', ref: 'John 21:25' }
    ],
    p: [
      'Contrast 61.6 with 7.157: In 7:157 the Qurʾān explicitly says the Prophet’s ﷺ description is “written down (maktūban) with them in the Torah and Gospel.” In 61:6, by contrast, Allah reports what Jesus spoke to the Children of Israel — without claiming scribes preserved that exact sentence in surviving Greek Gospels.',
      'Fallacious argument from silence: Inferring “X never happened” from “no surviving record mentions X” is only valid when documentation would be virtually guaranteed (e.g., claiming George Bush never existed in the modern literate era), NOT for ancient figures (like claiming Abraham never existed for lack of archaeology).',
      'Gospels admit massive omissions: John 21:25 (“there are also many other things that Jesus did; were every one of them to be written, I suppose the world itself could not contain the books”) and John 20:30 openly state the Gospels preserve only a fraction of Jesus’s sayings.'
    ]
  });

  /* 13. christianity/islam-vs/dilemma/church-fathers-on-alteration */
  up('christianity/islam-vs/dilemma/church-fathers-on-alteration', {
    who: 'Opening move',
    facts: [
      ['Justin & Origen', 'Accused scribes of removing passages'],
      ['Jerome', 'Checked Aquila vs Hebrew for anti-Christ edits'],
      ['Irenaeus & Lactantius', 'Quoted “Scripture” absent today'],
      ['Augustine (City 18.44)', 'LXX (3 days) vs Hebrew (40 days)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Fathers charging textual alteration',
        items: [
          'Justin (Trypho 72): Jews deliberately removed a passage',
          'Origen (to Africanus): “wise” removed discrediting passages',
          'Jerome (to Marcella): tested Aquila vs Hebrew for synagogue edits',
          'Augustine (City 18.44): LXX & Hebrew contradict on Nineveh (3 vs 40 days)'
        ]
      },
      right: {
        title: 'Vanished “Scripture” quoted by Fathers',
        items: [
          'Irenaeus (Adv. Haer. III.20; IV.22): “Lord remembered His dead Israel…” (lost)',
          'Lactantius (Div. Inst. IV.18): Ezra quote absent from Ezra & Bible',
          '1 Clement 8, 17, 46 & Cassian (Conf. I.20): cite lost lines as Scripture',
          'Irenaeus (Adv. Haer. IV.6) & Chrysostom: misplace Gospel passages'
        ]
      }
    },
    quotes: [
      { by: 'Origen of Alexandria', en: 'those reputed wise… removed from the people every passage that could discredit them', ref: 'Letter to Africanus' },
      { by: 'Irenaeus of Lyon', en: 'the holy Lord remembered His dead Israel who slept in the land of burial…', ref: 'Against Heresies III.20 & IV.22 (found in no prophet)' }
    ],
    p: [
      'Irenaeus, Against Heresies III.20 and IV.22: “the holy Lord remembered His dead Israel who slept in the land of burial…”: found in no prophet.',
      'Lactantius, Divine Institutes IV.18: Quotes “Ezra said to the people: This Passover is our Saviour…”, which is not in Ezra or anywhere in the Bible.',
      'Augustine, City of God 18.44: The Septuagint gives Nineveh three days, the Hebrew forty; he follows the Hebrew there, though elsewhere he says to trust the inspired Septuagint over the Hebrew, and then calls both inspired. Either the Septuagint is inspired and contradicts the Hebrew, or both are and contradict each other.'
    ]
  });

  /* 14. christianity/islam-vs/dilemma/lost-books-of-the-bible */
  up('christianity/islam-vs/dilemma/lost-books-of-the-bible', {
    facts: [
      ['Book of Jasher', 'Cited in Joshua 10:13 & 2 Samuel 1:18'],
      ['Wars of the LORD', 'Quoted in Numbers 21:14'],
      ['Prophetic records', 'Nathan, Ahijah, Iddo, Shemaiah, Jehu'],
      ['Lost Pauline letters', 'Laodiceans (Col 4:16) & Corinth (1 Cor 5:9)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Lost OT works cited as authoritative',
        items: [
          'Book of Jasher (Joshua 10:13; 2 Samuel 1:18)',
          'Book of the Wars of the LORD (Numbers 21:14)',
          'Acts of Solomon (1 Kings 11:41; Challoner admits it is lost)',
          'Records of prophets Nathan, Ahijah, Iddo, Shemaiah & Jehu (2 Chron 9:29; 12:15; 20:34)'
        ]
      },
      right: {
        title: 'Lost NT letters & Christian concession',
        items: [
          'Paul’s letter to the Laodiceans (Colossians 4:16)',
          'Paul’s earlier letter to Corinth (1 Corinthians 5:9)',
          'Bede lists lost works of Solomon and the prophets',
          '“God preserved what was essential” = the Muslim view of earlier revelation'
        ]
      }
    },
    quotes: [
      { by: 'Richard Challoner (1781)', en: 'this book, like many others mentioned in Scripture, is lost.', ref: 'Note on 1 Kings 11:41 (Acts of Solomon)' }
    ],
    p: [
      'Acts of Solomon (1 Kings 11.41): Richard Challoner (1781) notes: “this book, like many others mentioned in Scripture, is lost.”',
      'Bede’s catalogue of lost works: Bede on 2 Samuel 1:18: the Book of the Upright is nowhere to be found, not even among the Hebrews, nor the Book of the Wars of the Lord, nor Solomon’s songs and treatises on plants and animals, nor the words of Nathan, Ahijah and Iddo, “and many other such works.”',
      'Prophet Jehu & 1 Enoch: Jehu son of Hanani, whose annals went into the Book of the Kings, was a prophet (1 Kings 16:1). Jude 14 quotes 1 Enoch.',
      'Turn the tables (essential preservation): Christian answer: God preserved what was essential. That’s the Muslim answer too about earlier revelation, and why the Qurʾān is guardian over it.'
    ]
  });

  /* 15. atheism/morals */
  up('atheism/morals', {
    who: 'Opening move',
    forkTitle: '3 ways atheists try to ground morality',
    forkSub: 'Pick one to address evolution, well-being, or the Euthyphro dilemma',
    optWho: [
      'If they cite evolution',
      'If they cite well-being',
      'Watch out · Euthyphro'
    ],
    facts: [
      ['Core distinction', 'Acting kindly vs. grounding objective morals'],
      ['Hume’s Guillotine', 'Cannot derive “ought” from “is” (Treatise III.1.1)'],
      ['Well-being appeal', 'Assumes “ought” or reduces to preference'],
      ['Islamic Euthyphro', 'Grounded in Allah’s wise & good nature (Muslim 1015)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Atheism (behaviour without grounding)',
        items: [
          'Atheists can be kind, but lack an objective basis for right & wrong',
          'Evolution explains moral feelings, not moral truth (“is” ≠ “ought”)',
          'Well-being either assumes an “ought” or collapses into preference',
          'Condemning cruelty as truly wrong borrows a theistic foundation'
        ]
      },
      right: {
        title: 'Islam (grounded in Allah’s attributes)',
        items: [
          'Objective moral obligation comes from a wise, good Creator',
          'Closes Hume’s is–ought gap without arbitrary decrees',
          'Solves Euthyphro: Allah is al-Ḥakīm & al-Ṭayyib (Muslim 1015)',
          'Rulings come from Qurʾān & Sunnah; our grasp of wisdom is secondary'
        ]
      }
    },
    quotes: [
      { by: 'Prophet Muḥammad ﷺ', en: 'Allah is good (ṭayyib) and accepts only what is good.', ref: 'Ṣaḥīḥ Muslim 1015' }
    ],
    p: [
      'Behaviour vs. grounding: Nobody claims atheists can’t be kind. The question is about grounding: what makes cruelty objectively wrong, and not just disliked by most humans?',
      'Relativism consequence: If morality is only evolved feelings or social agreement, then “torturing children for fun is wrong” is true in the same way “most people dislike broccoli” is true.',
      'Borrowed capital: Most atheists don’t live that way. They condemn injustice as really wrong, which borrows a foundation their worldview doesn’t provide.'
    ]
  });

  /* 16. atheism/d-ia-arguments-for-god/t-arguments-for-god */
  up('atheism/d-ia-arguments-for-god/t-arguments-for-god', {
    who: 'Opening move',
    facts: [
      ['Proof 1', 'Logical absolutes → Transcendent Mind'],
      ['Key examples', 'Identity, non-contradiction, excluded middle'],
      ['Proof 2', 'Modal necessity syllogism'],
      ['Core disjunction', 'God’s existence is necessary or impossible']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['P1–P2 · Conceptual & real', 'Logical absolutes exist and are conceptual (not physical objects made of atoms)'],
        ['P3–P4 · Mental & objective', 'Concepts exist only in minds, yet logical absolutes hold even without human minds'],
        ['P5–P6 · Transcendent Mind', 'Being both transcendent and conceptual, logical absolutes must exist in a transcendent Mind'],
        ['Next step · Modal necessity', 'An eternal God cannot begin or cease to exist — so if coherent, He exists necessarily']
      ]
    },
    p: [
      'Premise 1 (Existence): Logical absolutes exist.',
      'Premise 2 (Conceptual nature): Logical absolutes are conceptual (not physical objects made of atoms).',
      'Premise 3 (Mental locus): Concepts exist only in a mind (they are mental realities).',
      'Premise 4 (Human-independence): Logical absolutes would still hold even if human minds did not exist.',
      'Premise 5 (Transcendence): Therefore, logical absolutes are transcendent (independent of human minds).',
      'Conclusion (Transcendent Mind): Since logical absolutes are both transcendent and conceptual, they must exist in a transcendent Mind.'
    ]
  });

  /* 17. atheism/d-ia-arguments-for-god/t-matter-to-consciousness */
  up('atheism/d-ia-arguments-for-god/t-matter-to-consciousness', {
    who: 'Opening move',
    facts: [
      ['Gap closed', 'Proves First Cause is conscious, not blind'],
      ['Unconscious complexity', 'White blood cells, plants, computers/AI'],
      ['Thought experiment', 'Stone 1 → Stone 2 awareness problem'],
      ['Conclusion', 'Fundamental cause must itself be conscious']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Premise 1 · Exhaustive disjunction', 'The universe’s fundamental cause is either conscious (a mind) or entirely unconscious (blind matter/energy)'],
        ['Premise 2 · Causal limit', 'An entirely unconscious entity has no subjective awareness or intentionality to give'],
        ['Premise 3 · Empirical datum', 'Conscious beings with first-person awareness empirically exist in the universe'],
        ['Conclusion · Conscious First Cause', 'Consciousness cannot originate from purely unconscious matter — so the fundamental cause is conscious']
      ]
    }
  });

  /* 18. atheism/d-ia-arguments-for-god/t-argument-from-the-default */
  up('atheism/d-ia-arguments-for-god/t-argument-from-the-default', {
    facts: [
      ['Core thesis', 'Theism, not atheism, is the rational baseline'],
      ['Burden of proof', 'Contingent cosmos requires explanation'],
      ['Islamic ground', 'Innate fiṭra + rational inference'],
      ['Channel source', 'Argument_From_Default.pdf (Ṣayyām ibn ʿIrfān)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: '“Atheism as neutral default”',
        items: [
          'Frames atheism as “lack of belief” to avoid the burden of proof',
          'Treats a contingent, ordered universe as needing no ultimate explanation',
          'Assumes brute existence without a Creator is neutral'
        ]
      },
      right: {
        title: 'Fiṭra & rational baseline',
        items: [
          'Denying a Creator is a positive metaphysical claim of brute fact',
          'Contingency and fine calibration demand a Necessary Creator',
          'Human beings are created upon fiṭra (innate recognition of a Creator)',
          'Corroborated by rational inference from contingency and design'
        ]
      }
    },
    p: [
      'No escape from explanation: Treating atheism as “lack of belief” does not escape the burden of explaining why a contingent, ordered universe exists at all rather than nothing.',
      'Fiṭra and rational inference: In Islamic theology, human beings are created upon fiṭra (innate recognition of a Creator and moral truth), corroborated by rational inference from contingency and design.',
      'Note: The channel attaches Argument_From_Default.pdf (scans by Ṣayyām ibn ʿIrfān — to extract into full proof points).'
    ]
  });

  /* 19. atheism/d-ia-atheist-arguments-1/t-evolution */
  up('atheism/d-ia-atheist-arguments-1/t-evolution', {
    who: 'Opening move',
    forkTitle: '2 ways naturalists defend evolutionary reason',
    forkSub: 'Pick one to dismantle survival-truth equivalence or future convergence',
    optWho: [
      'If they equate survival with truth',
      'If they appeal to convergence'
    ],
    facts: [
      ['Targets', 'Atheists & deists rejecting designed cognition'],
      ['Analogy', 'Using a pickaxe to hammer nails'],
      ['Adaptive error', 'False positives in the dark aid survival'],
      ['Theistic ground', 'ʿAql designed for moral & intellectual test']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Blind atheistic evolution',
        items: [
          'Selects for survival & reproduction, not truth',
          'False beliefs often boost survival (night-forest false positives)',
          'Even granting eventual convergence, no proof it happened now',
          'Collapses naturalism into self-defeating hyper-scepticism'
        ]
      },
      right: {
        title: 'Theistic ground of intellect (ʿaql)',
        items: [
          'Allah created humanity to be morally and intellectually tested',
          'Requires sound intellect (ʿaql) capable of recognising truth',
          'Gives a principled basis to trust sensory & rational faculties',
          'Avoids treating a survival “pickaxe” as a truth “hammer”'
        ]
      }
    },
    p: [
      'Scope of the argument: This argument hits atheists and deists alike (anyone denying God designed us with reliable truth-seeking faculties).',
      'The pickaxe analogy: Evolution optimises organisms for survival and reproduction — not for truth. Using senses designed for survival to discover truth is like using a pickaxe to drive nails into wood: occasionally a nail goes in, mostly it fails, and you cannot rationally trust it to work.',
      'Truth vs. survival-useful illusions: Similarly, under blind evolution, we have no way to know whether our senses and reasoning are giving us truth or merely survival-useful illusions.'
    ]
  });

  /* 20. atheism/d-ia-atheist-arguments-1/t-the-problem-of-evil-ibn-al-qayyim-s-comprehensive- */
  up('atheism/d-ia-atheist-arguments-1/t-the-problem-of-evil-ibn-al-qayyim-s-comprehensive-', {
    who: 'Opening move',
    facts: [
      ['Scholar', 'Ibn al-Qayyim (Shifāʾ al-ʿAlīl, Miftāḥ)'],
      ['Core distinction', 'Attribute vs. action toward creation'],
      ['Greater goods', 'Courage, patience, gratitude need friction'],
      ['Systemic wisdom', 'Best calibrated system for wise purposes']
    ],
    visual: {
      kind: 'steps',
      items: [
        ['Attribute vs. manifestation', 'Allah does not need sinners to have forgiveness or the sick to have healing; creation depends on Allah, never the reverse'],
        ['Divine Signs in adversity', 'Noah’s flood, parting the sea, and Ibrāhīm’s rescue from the fire arise out of prophetic conflict, not comfort'],
        ['Divine Love & Greater Goods', 'High ranks, courage, patience, generosity, and self-restraint cannot exist in a world with zero friction'],
        ['Hardship & gratitude', 'Devotion and gratitude rise under real hardship and dull under complete existential security']
      ]
    },
    p: [
      'Attribute vs. manifestation: No. There’s a difference between having an attribute and manifesting an action toward creation. Allah doesn’t need sinners to have forgiveness, or the sick to have healing. When a sinner exists, He may manifest forgiveness toward him.',
      'Creation’s dependence: Creation is where these actions appear. It doesn’t give Allah His attributes or complete Him. The dependence is from creation on Allah, never the other way.',
      'Divine Signs: The clearest demonstrations of God’s power come out of conflict between prophets and disbelievers: Noah’s flood, the parting of the sea, Ibrāhīm (عليه السلام) emerging unharmed from the fire. Signs like these arise from adversity, not comfort.',
      'Divine Love: Some of the highest ranks, like being a friend of Allah, are described as open to those who endure hardship for His sake. Ease alone doesn’t produce that closeness. Struggle does.',
      'The Greater Good: God permits lesser harms as the path to greater goods that couldn’t otherwise exist. Courage, patience, generosity and self-restraint are responses to difficulty. They can’t exist in a world with no friction.',
      'Hardship and spiritual gratitude: Some psychological research also finds that religious devotion and gratitude rise in populations facing real hardship, and fall where existential security is high. Ease tends to dull spiritual responsiveness.'
    ]
  });

  /* 21. other/hinduism/d-ia-caste-system-vs-islamic-governance */
  up('other/hinduism/d-ia-caste-system-vs-islamic-governance', {
    who: 'Opening move',
    forkTitle: '2 false-equivalence counter-attacks on Islam',
    forkSub: 'Pick one to distinguish Quraysh political office or dhimmī law from hereditary caste',
    optWho: [
      'Watch out · Quraysh Caliphate',
      'Watch out · Dhimmī status'
    ],
    facts: [
      ['Primary text', 'Chāndogya Upaniṣad 5.10.7'],
      ['Evil rebirth', '“a dog, or a hog, or a Caṇḍāla”'],
      ['Quraysh Caliphate', 'Political office, not birth-based social class'],
      ['Islamic standard', 'Superiority by taqwā alone (Qurʾān 49:13)']
    ],
    visual: {
      kind: 'compare',
      left: {
        title: 'Birth-based caste (Upaniṣads)',
        items: [
          'Chāndogya Upaniṣad 5.10.7 ties conduct directly to birth rank',
          'Evil conduct leads to birth as “a dog, or a hog, or a Caṇḍāla”',
          'Divides society hereditarily in occupation, marriage & dignity',
          'Severe punishments prescribed for Śūdras teaching dharma'
        ]
      },
      right: {
        title: 'Islamic governance & equality',
        items: [
          'Superiority belongs solely to piety (taqwā, Qurʾān 49:13)',
          'Quraysh Caliphate is a single political office, not a social class',
          'Freed slaves (Zayd, Bilāl) & non-Arabs held top ranks & honours',
          'Dhimmī status is a creed-based legal covenant, never bloodline'
        ]
      }
    },
    quotes: [
      { by: 'Chāndogya Upaniṣad', en: 'Those whose conduct has been good will quickly attain some good birth, the birth of a Brāhmaṇa, or a Kṣatriya, or a Vaiśya. But those whose conduct has been evil will quickly attain an evil birth, the birth of a dog, or a hog, or a Caṇḍāla.', ref: 'Chāndogya Upaniṣad 5.10.7' }
    ],
    p: [
      'Apologetic revisionism: Modern Hindu apologists frequently claim varṇa merely reflects profession (e.g., a merchant is a Vaiśya) and deny birth-based caste belongs to Hinduism.',
      'Chāndogya Upaniṣad 5.10.7: Directly refutes that denial: “Those whose conduct has been good will quickly attain some good birth, the birth of a Brāhmaṇa, or a Kṣatriya, or a Vaiśya. But those whose conduct has been evil will quickly attain an evil birth, the birth of a dog, or a hog, or a Caṇḍāla.”',
      'Internal textual contradiction: Citing passages that speak of qualities without reconciling explicit birth-based texts (including severe punishments prescribed for Śūdras teaching dharma to upper castes, documented at hinduscript.com) only highlights internal contradictions within Hindu texts.'
    ]
  });
})();
