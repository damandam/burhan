// topics/scans-batch2.js — Wave 2 primary-source Discord scans attached to existing Burhān cards
(function () {
  function attachShots(targetKey, shots, extraNote) {
    let found = null;
    for (let i = window.TOPICS.length - 1; i >= 0; i--) {
      if (window.TOPICS[i].path.join('/') === targetKey) { found = window.TOPICS[i].node; break; }
    }
    if (!found || !found.article) {
      console.warn('scans-batch2: target not found ->', targetKey);
      return;
    }
    const a = found.article;
    if (a.tree && a.tree.more) {
      a.tree.more.shots = (a.tree.more.shots || []).concat(shots);
      if (extraNote) {
        a.tree.more.p = [].concat(a.tree.more.p || [], extraNote);
      }
    } else if (a.type === 'explainer' && Array.isArray(a.cards) && a.cards.length) {
      const c = a.cards[0];
      c.more = c.more || {};
      c.more.shots = (c.more.shots || []).concat(shots);
      if (extraNote) c.p = [].concat(c.p || [], extraNote);
    } else {
      console.warn('scans-batch2: unexpected article shape ->', targetKey);
    }
  }

  // 1. Deen's Paraclete Exegesis of John 14 (DR #deens-paraklete-exegesis-of-john-14 — 7 WebP scans)
  attachShots('christianity/islam-vs/d-dr-deens-paraklete-exegesis-of-john-14', [
    { src: 'shots/paraclete-1.webp', cap: 'Primary scan 1 — Lexical & Greek exegetical citation on Paraklētos in John 14–16 (Deenresponds #deens-paraklete-exegesis-of-john-14).' },
    { src: 'shots/paraclete-2.webp', cap: 'Primary scan 2 — Biblical scholarship on “another Paraclete” (allos paraklētos) and the Spirit of Truth.' },
    { src: 'shots/paraclete-3.webp', cap: 'Primary scan 3 — Commentary excerpt on the personal, hearing-and-speaking attributes of the Paraclete.' },
    { src: 'shots/paraclete-4.webp', cap: 'Primary scan 4 — Cross-reference analysis of John 14:16, 14:26, and 16:7–14.' },
    { src: 'shots/paraclete-5.webp', cap: 'Primary scan 5 — Scholarly reference on the departure condition (“if I do not go away, the Paraclete will not come”).' },
    { src: 'shots/paraclete-6.webp', cap: 'Primary scan 6 — Textual note on prophetic succession and “he will not speak on his own authority.”' },
    { src: 'shots/paraclete-7.webp', cap: 'Primary scan 7 — Patristic / lexical evidence compiled in Deenresponds.' }
  ]);

  // 2. Jesus is Worshipped / Proskuneō (DR #jesus-is-worshipped — 6 WebP scans)
  attachShots('christianity/trinity/d-dr-jesus-is-worshipped', [
    { src: 'shots/worship-1.webp', cap: 'Primary scan 1 — Greek lexicon & Septuagint usage of proskuneō (obeisance vs. divine latreia; Deenresponds #jesus-is-worshipped).' },
    { src: 'shots/worship-2.webp', cap: 'Primary scan 2 — Biblical parallels where proskuneō / hishtachavah is offered to kings and prophets without divinity.' },
    { src: 'shots/worship-3.webp', cap: 'Primary scan 3 — Scholarly commentary on Matthew 14:33 / 28:9 and royal homage.' },
    { src: 'shots/worship-4.webp', cap: 'Primary scan 4 — Comparison of 1 Chronicles 29:20 (“bowed down to YHWH and to the king”) and NT proskuneō texts.' },
    { src: 'shots/worship-5.webp', cap: 'Primary scan 5 — Translation note showing modern Bibles rendering the same Greek verb as “bowed” for humans and “worshipped” for Jesus.' },
    { src: 'shots/worship-6.webp', cap: 'Primary scan 6 — Lexical summary distinguishing proskuneō (reverent prostration) from latreuō (exclusive cultic worship of God).' }
  ]);

  // 3. How Many Days for Creation? Q 41:9-12 vs 7:54 (DR #how-many-days-for-creation — 6 WebP scans)
  attachShots('islam/quran/d-dr-how-many-days-for-creation', [
    { src: 'shots/creation-1.webp', cap: 'Primary scan 1 — Classical tafsīr on Q 41:9–12: “in four days” (fī arbaʿati ayyām) includes the first two days (Deenresponds #how-many-days-for-creation).' },
    { src: 'shots/creation-2.webp', cap: 'Primary scan 2 — Arabic grammatical parallel: “I travelled from Basra to Baghdad in 2 days and to Kufa in 4 days” = 4 total, not 6.' },
    { src: 'shots/creation-3.webp', cap: 'Primary scan 3 — Excerpt on thumma (“moreover / furthermore”) indicating logical sequence rather than chronological addition.' },
    { src: 'shots/creation-4.webp', cap: 'Primary scan 4 — Ibn Kathīr / al-Ṭabarī reconciliation of Q 41:9–12 with Q 7:54 (6 days total).' },
    { src: 'shots/creation-5.webp', cap: 'Primary scan 5 — Lexical proof of Arabic inclusive cumulative reckoning (sawāʾan lis-sāʾilīn).' },
    { src: 'shots/creation-6.webp', cap: 'Primary scan 6 — Summary diagram reconciling 2 + 2 (earth & sustenance = 4) + 2 (heavens) = 6 days.' }
  ]);

  // 4. Does the Qur'an Copy from the Talmud? (DR #quran-copies-from-talmud — 6 WebP scans)
  attachShots('islam/quran/d-dr-quran-copies-from-talmud', [
    { src: 'shots/talmud-1.webp', cap: 'Primary scan 1 — Analysis of Q 5:32 vs. Mishnah Sanhedrin 4:5 (“whoever saves a single soul…”, Deenresponds #quran-copies-from-talmud).' },
    { src: 'shots/talmud-2.webp', cap: 'Primary scan 2 — Academic citation noting the Qurʾān explicitly introduces Q 5:32 as “We decreed for the Children of Israel,” confirming shared prophetic tradition rather than plagiarism.' },
    { src: 'shots/talmud-3.webp', cap: 'Primary scan 3 — Historical availability & language barrier: Babylonian Talmud was in Jewish Aramaic, compiled outside the Ḥijāz.' },
    { src: 'shots/talmud-4.webp', cap: 'Primary scan 4 — Critical comparison showing where the Qurʾān corrects and diverges from rabbinic legends.' },
    { src: 'shots/talmud-5.webp', cap: 'Primary scan 5 — Parallel New Testament reliance on extra-biblical Jewish traditions (Jude 9, 14; 2 Tim 3:8) — turning the tables.' },
    { src: 'shots/talmud-6.webp', cap: 'Primary scan 6 — Scholarly summary refuting the “borrowing from Talmud” polemic.' }
  ]);

  // 5. Bukhari & Preservation of the Torah (DR #bukhari-preservation-of-torah — 6 WebP scans)
  attachShots('islam/hadith/d-dr-bukhari-preservation-of-torah', [
    { src: 'shots/torah-pres-1.webp', cap: 'Primary scan 1 — Ṣaḥīḥ al-Bukhārī’s chapter heading & Ibn ʿAbbās citation on taḥrīf (Deenresponds #bukhari-preservation-of-torah).' },
    { src: 'shots/torah-pres-2.webp', cap: 'Primary scan 2 — Ibn Ḥajar al-ʿAsqalānī (Fatḥ al-Bārī) explaining what Ibn ʿAbbās meant by “no one can alter the words of Allah” vs. textual alteration by scribes.' },
    { src: 'shots/torah-pres-3.webp', cap: 'Primary scan 3 — Authentic report of Ibn ʿAbbās in Bukhārī 7363 explicitly stating “the People of the Book altered the Book of Allah and wrote it with their own hands.”' },
    { src: 'shots/torah-pres-4.webp', cap: 'Primary scan 4 — Context of Bukhārī 7523: “they did not alter the decrees of Allah” vs. textual corruption of human manuscripts.' },
    { src: 'shots/torah-pres-5.webp', cap: 'Primary scan 5 — Classical commentary reconciling Ibn ʿAbbās’s statements across Bukhārī.' },
    { src: 'shots/torah-pres-6.webp', cap: 'Primary scan 6 — Summary proving al-Bukhārī never endorsed the textual infallibility of the extant Bible.' }
  ]);

  // 6. Does Allah "Pray"? Q 33:43 & 33:56 (AV #allah-betet — 8 WebP scans)
  attachShots('islam/creed/attributes/allah-salah-33-56', [
    { src: 'shots/allah-betet-1.webp', cap: 'Primary scan 1 — Classical Arabic lexicon & tafsīr on ṣalāh from Allah = mercy, praise, and honour (Averroes #allah-betet).' },
    { src: 'shots/allah-betet-2.webp', cap: 'Primary scan 2 — Ṣaḥīḥ al-Bukhārī (taʿlīq from Abū al-ʿĀliya): “Allah’s ṣalāh upon the Prophet is His praise of him before the angels.”' },
    { src: 'shots/allah-betet-3.webp', cap: 'Primary scan 3 — Lexical polysemy of ṣalāh: from Allah (mercy/praise), from angels (seeking forgiveness), from believers (supplication).' },
    { src: 'shots/allah-betet-4.webp', cap: 'Primary scan 4 — Tafsīr citation on Q 33:43 showing Allah sends ṣalāh upon all believers as well — refuting the “Allah prays to Muhammad” caricature.' },
    { src: 'shots/allah-betet-5.webp', cap: 'Primary scan 5 — Classical dictionary entry (Lisān al-ʿArab / Lane’s Lexicon) under ṣ-l-w.' },
    { src: 'shots/allah-betet-6.webp', cap: 'Primary scan 6 — Tafsīr al-Ṭabarī / Ibn Kathīr on Q 33:56.' },
    { src: 'shots/allah-betet-7.webp', cap: 'Primary scan 7 — Comparative biblical parallel: God “blessing” humans (barakh / eulogeō) uses the same verb humans use to “bless” God.' },
    { src: 'shots/allah-betet-8.webp', cap: 'Primary scan 8 — Summary of linguistic evidence from Averroes #allah-betet.' }
  ]);

  // 7. Moon's Light — Q 25:61 vs Genesis 1:16 (AV #mond-eigenes-licht — image-only channel captured & transcribed!)
  attachShots('islam/quran/science-errors/moons-light', [
    { src: 'shots/moon-light-1.webp', cap: 'Infographic from Averroes #mond-eigenes-licht comparing Genesis 1:16 (single Hebrew term maʾōr for both sun and moon) with Qurʾān 25:61 (sirāj “lamp” for the sun vs. qamar munīr “shining/illuminated moon”).' }
  ], [
    'Turn the tables (Averroes #mond-eigenes-licht): Genesis 1:16 applies the exact same Hebrew word maʾōr (“light / luminary”) to both the sun (“greater light”) and the moon (“lesser light”), treating them as lights of the same kind. By contrast, Qurʾān 25:61 deliberately distinguishes the sun as a sirāj (self-luminous lamp) and the moon as munīr (shining / illuminated, never called a sirāj).'
  ]);

  // 8. Forced Marriage & Bride Consent (IA #forced-marriage — 7 WebP scans)
  attachShots('islam/morality/marriage/d-ia-forced-marriage', [
    { src: 'shots/forced-mar-2.webp', cap: 'Primary scan 1 — Ḥadīth & fiqh citation establishing consent as a binding condition in marriage (Islamic Apologetics #forced-marriage).' },
    { src: 'shots/forced-mar-3.webp', cap: 'Primary scan 2 — Prophet ﷺ annulling the marriage of Khansāʾ bint Khidām when her father married her off without her consent (Bukhārī 5138).' },
    { src: 'shots/forced-mar-4.webp', cap: 'Primary scan 3 — Classical juristic proof (Ḥanafī / Ibn Taymiyyah / Ibn al-Qayyim) prohibiting forced marriage of a mature woman.' },
    { src: 'shots/forced-mar-5.webp', cap: 'Primary scan 4 — Commentary on the virgin’s silence being a culturally recognised sign of shyness, not permission to coerce an unwilling bride.' },
    { src: 'shots/forced-mar-6.webp', cap: 'Primary scan 5 — Report of the young woman who came to the Prophet ﷺ and was given the right to void her father’s arrangement (Ibn Mājah / Abū Dāwūd).' },
    { src: 'shots/forced-mar-7.webp', cap: 'Primary scan 6 — Legal breakdown distinguishing guardianship (wilāyah for protection) from coercion (ijbār).' },
    { src: 'shots/forced-mar-8.webp', cap: 'Primary scan 7 — Scholarly synthesis from Islamic Apologetics #forced-marriage.' }
  ]);

  // 9. Church Fathers — Justin Martyr, Irenaeus of Lyon, Ignatius of Antioch (IA #church-fathers — 6 WebP scans)
  attachShots('christianity/church/d-ia-church-fathers/t-justin-martyr', [
    { src: 'shots/cf-justin-1.webp', cap: 'Primary scan 1 — Justin Martyr (Dialogue with Trypho / First Apology) subordinate Logos citation (Islamic Apologetics #church-fathers).' },
    { src: 'shots/cf-justin-3.webp', cap: 'Primary scan 2 — Academic patristics excerpt documenting Justin Martyr’s subordinationist “second god” / generated Logos theology.' }
  ]);
  attachShots('christianity/church/d-ia-church-fathers/t-irenaeus-of-lyon', [
    { src: 'shots/cf-irenaeus-1.webp', cap: 'Primary scan 1 — Irenaeus of Lyon (Against Heresies) primary citation on the Father alone as the supreme God (Islamic Apologetics #church-fathers).' },
    { src: 'shots/cf-irenaeus-3.webp', cap: 'Primary scan 2 — Patristic scholarship excerpt on Irenaeus’s non-Nicene Christology and distinction between the Father and the Son.' }
  ]);
  attachShots('christianity/church/d-ia-church-fathers/t-ignatius-of-antioch', [
    { src: 'shots/cf-ignatius-1.webp', cap: 'Primary scan 1 — Ignatius of Antioch primary epistle citation & textual recension notes (Islamic Apologetics #church-fathers).' },
    { src: 'shots/cf-ignatius-3.webp', cap: 'Primary scan 2 — Scholarly commentary on Ignatius’s Christology and the Father as “the only true God.”' }
  ]);

  // 10. Women & the Qur'an scans (IA #women-and-the-quran — 5 unique WebP scans)
  attachShots('islam/morality/women/d-dr-quran-4-34-beating-your-wife', [
    { src: 'shots/ia-q434-2.webp', cap: 'Primary scan — Classical tafsīr & ḥadīth evidence on Q 4:34 ghayr mubarriḥ / siwāk (Islamic Apologetics #women-and-the-quran).' },
    { src: 'shots/ia-q434-3.webp', cap: 'Primary scan — Juristic prohibition of facial striking and harm under Q 4:34 (Islamic Apologetics #women-and-the-quran).' }
  ]);
  attachShots('islam/morality/women/d-ia-women-and-the-quran/t-surah-2-282-women-deficient', [
    { src: 'shots/ia-q2282-2.webp', cap: 'Primary scan — Scholarly analysis of Q 2:282 financial-contract witness rule vs. blanket intelligence claims (Islamic Apologetics #women-and-the-quran).' }
  ]);
  attachShots('islam/morality/marriage/aisha/quran-65-4', [
    { src: 'shots/ia-q654-2.webp', cap: 'Primary scan — Classical legal distinction between marriage contract and consummation requiring physical readiness & no harm (Islamic Apologetics #women-and-the-quran).' },
    { src: 'shots/ia-q654-3.webp', cap: 'Primary scan — Tafsīr note on Q 65:4 waiting period (ʿidda) addressing amenorrhea and non-menstruating adult women alongside classical views.' }
  ]);
})();
