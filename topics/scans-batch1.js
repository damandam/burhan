/* Discord Scans Batch 1 — 2026-11-21.
   Attaches 56 freshly captured, lightweight JPEG/WebP primary-source scans from live Discord channels
   directly onto their matching Burhān cards (appearing both as clickable thumbnails on bubbles and
   inside the full-screen zoomable lightbox in the proof drawer / dossier):
   - IA #72-virgins (8 scans) → islam/general/d-ia-7-2-72-virgins
   - DR #john-17-3 (6 scans) → christianity/trinity/d-dr-john-17-3
   - DR #john-20-28-debunked (6 scans) → christianity/trinity/d-dr-john-20-28-debunked
   - DR #islamic-dilemma (8 scans) → christianity/islam-vs/d-dr-islamic-dilemma
   - DR #jesus-is-called-lord-debunked (8 scans) → christianity/jesus/d-dr-jesus-is-called-lord-debunked
   - DR #what-is-the-injil (6 scans) → christianity/islam-vs/d-dr-what-is-the-injil
   - IA #istiwa (6 scans) → islam/creed/d-ia-istiwa
   - AV #schriften-vom-kirchenvätern-verfälscht (8 scans) → christianity/islam-vs/dilemma/church-fathers-on-alteration */
(()=>{
const S=(src,cap)=>({src:'shots/'+src,cap});
const attachShots=(key,shots,explainerCardHeading)=>{
  for(let i=TOPICS.length-1;i>=0;i--){
    const t=TOPICS[i], k=t.path.join('/'); let a=null;
    if(k===key) a=t.node.article;
    else if(key.startsWith(k+'/') && t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; }
    if(!a) continue;
    if(a.type==='explainer'){
      (a.cards=a.cards||[]).push({
        h:explainerCardHeading||'Primary source scans',
        short:shots.length+' original scans captured from Discord (tap to view in lightbox).',
        p:['Tap any scan below to inspect the original source page in full-screen lightbox view.'],
        more:{shots}
      });
      return;
    }
    if(a.tree){
      a.tree.more=a.tree.more||{};
      a.tree.more.shots=(a.tree.more.shots||[]).concat(shots);
      return;
    }
  }
  console.warn('scans-batch1: no card',key);
};

/* 1. IA #72-virgins (8 scans: Ibn Ḥajar Fatḥ al-Bārī 9/601–602, al-Dhahabī Siyar, Tahdhīb al-Tahdhīb) */
attachShots('islam/general/d-ia-7-2-72-virgins',[
  S('72v-3-image-4.jpg','Imām Ibn Ḥajar al-ʿAsqalānī, Fatḥ al-Bārī (vol. 9, pp. 601–602): grading the “72 virgins” chains.'),
  S('72v-4-hur_al_ayn_1.jpg','Fatḥ al-Bārī 9/601–602 — primary text scan (part 1).'),
  S('72v-5-hur_al_ayn_2-2.jpg','Fatḥ al-Bārī 9/601–602 — primary text scan (part 2).'),
  S('72v-1-IMG_1811.jpg','Classical ḥadīth grading scan on the weak chain of the 72-virgins report.'),
  S('72v-2-IMG_8314.jpg','Biographical critique of narrator Khālid ibn Yazīd (al-Dhahabī / Ibn Ḥajar).'),
  S('72v-6-Screenshot_20260614-035628.jpg','Supporting narrator evaluation scan (1/3).'),
  S('72v-7-Screenshot_20260614-035756.jpg','Supporting narrator evaluation scan (2/3).'),
  S('72v-8-Screenshot_20260614-035837.jpg','Supporting narrator evaluation scan (3/3).')
]);

/* 2. DR #john-17-3 (6 scans: NT texts, Irenaeus Against Heresies IV.1, Augustine) */
attachShots('christianity/trinity/d-dr-john-17-3',[
  S('j173-1-Screenshot_20250403_182111_YouTube.jpg','John 17:3 — “You are the only true God” primary text comparison.'),
  S('j173-2-Screenshot_20250403_190451_YouTube.jpg','New Testament passages reserving “the only / true God” for the Father (1/5).'),
  S('j173-3-Screenshot_20250403_190514_YouTube.jpg','New Testament & patristic evidence on John 17:3 (2/5).'),
  S('j173-4-Screenshot_20250403_190550_YouTube.jpg','St. Irenaeus (Against Heresies IV.1) on calling anyone besides the Father “true God” (3/5).'),
  S('j173-5-Screenshot_20250403_190631_YouTube.jpg','Augustine attempting to reorder the words of John 17:3 (4/5).'),
  S('j173-6-Screenshot_20250403_190700_YouTube.jpg','Summary of John 17:3 exclusivity vs Trinitarian workarounds (5/5).')
]);

/* 3. DR #john-20-28-debunked (6 scans: Thomas, theos lexicon, Justin Martyr, SEP) */
attachShots('christianity/trinity/d-dr-john-20-28-debunked',[
  S('j2028-1-image0.jpg','John 20:24–29 context & Greek lexicon scan (1/6).'),
  S('j2028-2-image1.jpg','Broad biblical usage of theos / “god” — 2 Cor 4:4, Exodus 7:1 (2/6).'),
  S('j2028-3-image0.jpg','Justin Martyr (Dialogue with Trypho 124) on Psalm 82 “gods” (3/6).'),
  S('j2028-4-image1.jpg','Pre-Nicene subordinationism & Stanford Encyclopedia of Philosophy scan (4/6).'),
  S('j2028-5-image0.jpg','Academic commentary on Thomas’s exclamation in John 20:28 (5/6).'),
  S('j2028-6-image0.jpg','Summary evidence on John 20:28 (6/6).')
]);

/* 4. DR #islamic-dilemma (8 scans: Hilary of Poitiers & classical confirmation/taḥrīf evidence) */
attachShots('christianity/islam-vs/d-dr-islamic-dilemma',[
  S('dilemma-4-IMG_3038.jpg','Hilary of Poitiers (4th-c. Church Father): Jesus gave a general confirmation of the Pharisees despite their errors — exact parallel to Qurʾānic confirmation.'),
  S('dilemma-1-IMG_4398.jpg','Primary source scan on the Islamic Dilemma & general confirmation (1/7).'),
  S('dilemma-2-IMG_2137.jpg','Classical tafsīr & textual evidence scan (2/7).'),
  S('dilemma-3-IMG_2451.jpg','Primary textual scan on scriptural alteration (3/7).'),
  S('dilemma-5-IMG_4271.jpg','Primary scholarly reference on 5:43–48 & confirmation (4/7).'),
  S('dilemma-6-IMG_4270.jpg','Continuation of primary scholarly reference (5/7).'),
  S('dilemma-7-IMG_7740.jpg','Additional manuscript/commentary evidence (6/7).'),
  S('dilemma-8-IMG_7741.jpg','Additional manuscript/commentary evidence (7/7).')
]);

/* 5. DR #jesus-is-called-lord-debunked (8 scans: Strong's H113/H136/H3068, BDB, Psalm 110:1 LXX) */
attachShots('christianity/jesus/d-dr-jesus-is-called-lord-debunked',[
  S('kyrios-1-image.jpg','Greek kyrios (Strong’s G2962) vs Hebrew adon (H113), Adonai (H136), YHWH (H3068) (1/8).'),
  S('kyrios-2-image.jpg','Septuagint translation of Psalm 110:1 (kyrios vs kyriō — grammatical case only) (2/8).'),
  S('kyrios-3-image.jpg','Strong’s Concordance & BDB lexicon entry scan for H113 / H136 (3/8).'),
  S('kyrios-4-image.jpg','Lexical & textual proof scan on human lords called adon/kyrios (4/8).'),
  S('kyrios-5-image.jpg','Biblical usage scan: Abraham, David, and human masters addressed as kyrios (5/8).'),
  S('kyrios-6-image.jpg','Early Church Fathers identifying pre-incarnate Jesus with the localized Angel of the Lord (6/8).'),
  S('kyrios-7-image.jpg','Solomon on YHWH’s uncontainability (1 Kings 8:27) vs localized Angel (7/8).'),
  S('kyrios-8-image.jpg','Additional patristic scan on pre-incarnate localization (8/8).')
]);

/* 6. DR #what-is-the-injil (6 scans: Gospel parallels & Qurʾānic Injīl citations) */
attachShots('christianity/islam-vs/d-dr-what-is-the-injil',[
  S('injil-1-IMG_9853.jpg','What is the Injīl? Primary textual & Gospel comparison scan (1/6).'),
  S('injil-2-IMG_9852.jpg','Primary textual & Gospel comparison scan (2/6).'),
  S('injil-3-IMG_9855.jpg','Qurʾān parallel with the Gospel of Matthew — parables of Jesus (3/6).'),
  S('injil-4-IMG_9854.jpg','Qurʾān parallel with the Gospel of Matthew — continuation (4/6).'),
  S('injil-5-IMG_9858.jpg','Distinguishing Jesus’s revealed Injīl from later biographical Gospels (5/6).'),
  S('injil-6-IMG_9859.jpg','Scholarly & textual scan on the original Injīl (6/6).')
],'Primary source scans (#what-is-the-injil)');

/* 7. IA #istiwa (6 scans: Atharī creed on istiwāʾ & al-Dārimī Naqḍ ʿalā al-Marīsī) */
attachShots('islam/creed/d-ia-istiwa',[
  S('istiwa-1-image.jpg','Atharī principle on affirming istiwāʾ without modality (bilā kayf) (1/4).'),
  S('istiwa-2-image.jpg','Classical Sunni creed scan on Allah’s Attributes & istiwāʾ (2/4).'),
  S('istiwa-3-image.jpg','Classical Sunni creed scan on Allah’s Attributes & istiwāʾ (3/4).'),
  S('istiwa-4-image.jpg','Classical Sunni creed scan on Allah’s Attributes & istiwāʾ (4/4).'),
  S('istiwa-5-d243b925-791e-44c6-acb6-ec5300d7cb75.jpg','Imām ʿUthmān ibn Saʿīd al-Dārimī, Naqḍ ʿalā al-Marīsī al-Jahmī — primary text scan (1/2).'),
  S('istiwa-6-118f4c90-2a7b-4f05-b137-bdd354a6ccb8.jpg','Imām ʿUthmān ibn Saʿīd al-Dārimī, Naqḍ ʿalā al-Marīsī al-Jahmī — primary text scan (2/2).')
]);

/* 8. AV #schriften-vom-kirchenvätern-verfälscht (8 scans) → Church Fathers on biblical alteration */
attachShots('christianity/islam-vs/dilemma/church-fathers-on-alteration',[
  S('cf-alt-1.webp','Averroes #schriften-vom-kirchenvätern-verfälscht — patristic scan on textual corruption (1/8).'),
  S('cf-alt-2.webp','Averroes #schriften-vom-kirchenvätern-verfälscht — patristic scan (2/8).'),
  S('cf-alt-3.webp','Averroes #schriften-vom-kirchenvätern-verfälscht — patristic scan (3/8).'),
  S('cf-alt-4.webp','Averroes #schriften-vom-kirchenvätern-verfälscht — patristic scan (4/8).'),
  S('cf-alt-5.webp','Averroes #schriften-vom-kirchenvätern-verfälscht — patristic scan (5/8).'),
  S('cf-alt-6.webp','Averroes #schriften-vom-kirchenvätern-verfälscht — patristic scan (6/8).'),
  S('cf-alt-7.webp','Averroes #schriften-vom-kirchenvätern-verfälscht — patristic scan (7/8).'),
  S('cf-alt-8.webp','Averroes #schriften-vom-kirchenvätern-verfälscht — patristic scan (8/8).')
]);
})();
