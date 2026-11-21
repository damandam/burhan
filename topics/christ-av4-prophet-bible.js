/* Christianity AV batch 4 — 2026-11-21. Averroes "prophet saw in bibel" (27 channels).
   DEDUPLICATION via add():
   - #pslam-72 (1411071147256053923) -> add('christianity/islam-vs/d-dr-psalm-72', ...) [+ 2 PDFs, 1 IMG]
   - #parakletos-heiliger-geist (1371432354228342846) -> add('christianity/islam-vs/d-dr-deens-paraklete-exegesis-of-john-14', ...) [+ 6 PDFs, 1 PNG]
   - #hochzeitsmahl-prophezeiung (1357645179984805909) & #matthäus-21-matthäus-3 (1468742056351502387) -> add('christianity/islam-vs/d-ia-muhammad-صلى-الله-عليه-وسلم-in-the-bible/t-matthew-22', ...)
   - #hohes-lied-5-16 (1293451973810454540) -> add('christianity/islam-vs/d-dr-song-of-solomon', ...) [Ṣaḥīḥ al-Bukhārī 4276 + 4 PDFs]
   - #jesaja-42 (1552652185702236281) -> add('christianity/islam-vs/d-dr-isaiah-42', ...) [PDF-only archive note]
   - #daniel-7 (1504472122788151408) -> add('christianity/jesus/d-dr-mark', ...) [PDF-only archive note]

   NEW cards under christianity/islam-vs/prophecies/:
   - isaiah-60-kedar-nebaioth (#jesaja-60-6-7)
   - zion-place-of-worship-shifted (#jerusalem-richtung-gebetet + #ort-verändern-zion)
   - isaiah-21-camel-rider-habakkuk-paran (#esel-und-kamel) [+ 3 PDFs]
   - workers-in-the-vineyard-matthew-20 (#arbeiter-weinberg-gleichniss)
   - arabia-qumran-hanifiyya-witnesses (#arabien-allgemein) [+ docx, 2 PNGs, 1 PDF]
   - john-1-21-the-prophet-deut-18 (#johannes-1-21) [+ 1 PDF]
   - psalm-84-baca-lawgiver (#pslam-84)
   - ishmael-great-nation-genesis-17 (#große-nation-ishamel-ismael)
   - zephaniah-3-9-pure-language (#zefanja-3) [+ 1 PDF]
   - exodus-23-abrahamic-borders (#exodus-23)
   - rabbinic-witnesses-maimonides-leibowitz (#juden-rabbiner-aussagen)
   - numbers-24-23-balaam-ishmael (#numeri-24-23)
   - asterius-urbanus-continuing-prophecy (#asterius-urbanus)
   - psalm-74-end-of-israelite-prophecy (#pslam-74)
   - chronicles-7th-9th-century-theophanes (#chroniken-islam-7-9-jahrhundert) [+ 2 PDFs, 3 IMGs]

   EMPTY / PDF-ONLY channels (scans & dossiers to capture; never fabricated):
   - #deuteronomium-18-18 (1468687047140049122): empty (no messages, no attachments).
   - #hosea-9-6 (1493957596372271297): PDF-only -> hosea_mamad.docx.pdf (157.05 KB).
   - #daniel-7 (1504472122788151408): PDF-only -> Daniel-2-und-7_Dossier_v2.pdf (4.00 MB).
   - #menschen-sohn (1550145871109169303): PDF-only -> Unbenanntes_Dokument_-_2026-09-17T160543.544.pdf (301.13 KB), Unbenanntes_Dokument_-_2026-09-18T074711.466.pdf (449.33 KB), Menschensohn_Belegmappe_Teil4_Goldgrube.md.pdf (804.73 KB), Menschensohn_Belegmappe_Teil3_Bibeltexte.md.pdf (594.70 KB).
   - #jesaja-42 (1552652185702236281): PDF-only -> Jesaja_42_bei_den_Kirchenvatern.pdf (473.77 KB).
   - #qumran-dtn-13 (1557335170720333834): PDF-only -> Der_treue_Prophet_Gesamtmappe_verstaerkt_neue_Funde_20261007.pdf (1.23 MB).
   - #hohes-lied-5-16 (1293451973810454540): 1 hadith ref (Sahih al-Bukhari 4276) + 4 PDFs -> Unbenanntes_Dokument_-_2026-07-28T180238.507.pdf, Unbenanntes_Dokument_-_2026-07-29T172901.285.pdf, Unbenanntes_Dokument_-_2026-07-29T180011.147.pdf, Unbenanntes_Dokument_-_2026-07-31T011127.375.pdf. */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('christ-av4: no card',key); };

const P='christianity/islam-vs/prophecies/';

/* ══════════════════════════════════════════════════════════════
   PART 1 — DEDUPLICATED ADDITIONS TO EXISTING PROPHECY CARDS
   ══════════════════════════════════════════════════════════════ */

/* 1. #pslam-72 -> d-dr-psalm-72 */
const P72=AV('pslam-72','1411071147256053923');
add('christianity/islam-vs/d-dr-psalm-72',N(P72,
 "Psalm 72 was written for Solomon—or fulfilled spiritually in Jesus—not Muḥammad ﷺ.",
 "Even the Church Fathers concede Solomon never fulfilled Psalm 72, and it cannot be Jesus because the psalm says 'prayer shall be made for him continually' (one prays to God, not for God). Every detail—rule from sea to sea, banning usury, Arabian gifts, and continual blessing—matches Muḥammad ﷺ and the Islamic expansion.",
 "Psalm 72 (LXX 71): Verse-by-Verse & Patristic Proof",
 ["Dominion from sea to sea (v. 8): Dean notes that 'from sea to sea and from the river to the ends of the earth' describes East-to-West conquest—precisely matching Islam's expansion over the Persian and Roman domains. Biblical usage regularly identifies a king with his kingdom across generations (as Nebuchadnezzar in Jeremiah 27).",
  "Abolition of usury (v. 14): The ruler 'redeems their souls from usury and iniquity'—no East-to-West ruler abolished usury like Muḥammad ﷺ (Qurʾān 2:275).",
  "Gold from Arabia & continual prayer (v. 15): 'Gold of Arabia shall be given to him, and prayer shall be made for him continually, and all day long he shall be blessed.' Muḥammad ﷺ received tribute/gifts from Arabia, Muslims send ṣalawāt upon him daily, and his very name means 'the continually praised.'",
  "Why it cannot be Jesus or Solomon: One does not pray 'for' God, refuting a divine-Jesus reading. The heading 'For Solomon' (li-Šəlōmōh) is a dedication (absent as fulfillment in the Masoretic reading and rejected by the Church Fathers, since Solomon's reign fell far short of these universal blessings).",
  "Patristic geography: Eusebius describes the ruler's power extending 'from the eastern sea to the west, beginning from the river,' and Jerome explicitly highlights 'the kings of Arabia and Saba' bringing gifts.",
  "Archived channel media: Also includes psalm_71_72_prophezeiung.pdf (899.05 KB), Unbenanntes_Dokument_-_2026-06-18T025717.956.pdf (382.57 KB), and IMG_9346.png."],
 ["Psalm 72 (LXX 71):1–19","Jeremiah 27","Qurʾān 2:275; 4:75, 79, 105; 21:107; 51:19","Eusebius & Jerome on Psalm 72"],
 [N(P72,
   "How does the full Septuagint text of Psalm 71 (72) map onto Muḥammad's ﷺ career?",
   "Verses 1–7 match the Prophet's ﷺ mission in Madīnah and Makkah: judging equitably (Q 4:105; Constitution of Madīnah), institutionalizing zakāh (Q 51:19), the Treaty of Ḥudaybiyyah (628 CE), ending Meccan oppression (Q 4:75; 630 CE), and rapid expansion from Arabia to Spain and India (Q 4:79; 21:107).",
   "LXX Psalm 71 (72):1–7 Historical & Qurʾānic Mapping",
   ["vv. 1–2 (Judgment & protecting the poor): Qurʾān 4:105 ('judge between people') & the Constitution of Madīnah; Qurʾān 51:19 ('right for the beggar and deprived') & zakāh.",
    "vv. 3–4 (Peace on the hills & crushing the oppressor): Treaty of Ḥudaybiyyah (628 CE) bringing ten years of peace; Conquest of Makkah (630 CE) ending persecution (Qurʾān 4:75).",
    "vv. 5–7 (Enduring from generation to generation & rain-like mercy): Spread of Islam from Arabia to Spain and India within generations (Qurʾān 4:79) as 'a mercy to the worlds' (Qurʾān 21:107)."],
   ["Septuagint Psalm 71:1–7","Qurʾān 4:75, 79, 105; 21:107; 51:19"],
   [],
   {visual:{kind:'steps',items:[
     ["vv. 1–2: Just Judge & Advocate","Madīnah Constitution & Zakāh (Q 4:105; 51:19)."],
     ["vv. 3–4: Peace & Breaking Tyranny","Ḥudaybiyyah (628 CE) & Liberation of Makkah (630 CE)."],
     ["vv. 5–7: Generational Mercy","Spread from Spain to India (Q 4:79; 21:107)."],
     ["vv. 8–17: Sea-to-Sea & Continual Praise","No usury (Q 2:275), Arabian gold, continual ṣalawāt."]]}})],
 {facts:[["Translation","LXX Psalm 71 (MT 72)"],["Patristic Witnesses","Eusebius & Jerome"],["Key Verse","v. 15: Arabia & continual prayer"],["Verdict","Fails Solomon & Jesus; fits Muḥammad ﷺ"]],
  quotes:[
   {by:"Septuagint Psalm 71:15 (Psalm 72:15)",en:"He shall live, and to him shall be given of the gold of Arabia; prayer shall be made for him continually, and all the day long shall they bless him.",ref:"LXX Psalm 71:15"}]}));

/* 2. #parakletos-heiliger-geist -> d-dr-deens-paraklete-exegesis-of-john-14 */
const PRK_AV=AV('parakletos-heiliger-geist','1371432354228342846');
add('christianity/islam-vs/d-dr-deens-paraklete-exegesis-of-john-14',N(PRK_AV,
 "Paraklētos only means 'comforter' or 'advocate'—linking it to kleos/klytos ('praised' = Aḥmad) is linguistically baseless.",
 "Classical lexica, ancient grammarians, modern philology, and even medieval Latin Christian etymology confirm the kleos/klytos root carries the core semantic field 'fame, praise, glory'—while Tertullian, Augustine, and early Church tradition show 'Paraclete' was expected personally on earth.",
 "Philology of Klytos/Kleos & Early Personal Expectation",
 ["Modern & standard lexica: Friedrich Wilhelm Riemer's Griechisch-deutsches Wörterbuch derives klytos from kleō ('to call' and 'to praise/glorify'); Strong's Concordance and Liddell-Scott-Jones (LSJ) document kleos ('fame, glory') and klytos ('famous, praised'); the Austrian Lexicon (Greek Reader for the Humanities) shows klytos and kleos share one stem ('widely famous, glorious, praised').",
  "Ancient grammarians: Hesychius of Alexandria (5th c. CE, preserving Diogenianos 2nd c. and Pamphilos 1st c.—contemporary with the Gospels) defines klytos as 'the glorious one'; the 10th-c. Suda Lexicon likewise gives 'honor, fame' from classical sources.",
  "Homeric & modern philology: Gregory Nagy notes verbal forms of kleō regularly mean 'to praise / be praised'; in Homer's Iliad 14.321, klytos must be rendered 'far-famed/praised,' since 'called' makes no sense in context.",
  "Medieval Latin Christian etymology: A medieval Latin Christian commentator explains Paraclitus as consolator/advocatus while explicitly adding the etymology cleos = gloria ('glory'), directly connecting the semantic field of praise/glory to Paraclitus.",
  "Early personal expectation & Tertullian: The International Critical / Biblical Encyclopaedia (p. 275) notes: 'In early times, many believed that the Paraclete would appear in person on Earth.' William P. Le Saint's note 88 on Tertullian (De monogamia, ACW 13, 1951) documents that Latin Fathers rendered paraklētos as advocatus (forensic advocate, frequent in rabbinic literature; Augustine, Tract. in Ioan. 94.2 allows both consolator and advocatus) before consolator became dominant after the 4th century.",
  "Archived channel media: Includes 6 PDFs (including Sibyllinischen_Orakeln_perikylytos_konig.pdf) and 1 PNG."],
 ["Riemer, LSJ, Strong's Concordance","Hesychius of Alexandria & Suda Lexicon","Gregory Nagy; Homer, Iliad 14.321","Tertullian ACW 013 (Le Saint n. 88); Augustine, Tract. in Ioan. 94.2"],
 [],
 {facts:[["Root Semantic Field","Kleos / klytos = praise, glory"],["Ancient Lexica","Hesychius (from 1st–2nd c. sources)"],["Early Church","Expected personal appearance on Earth"],["Archived Media","6 PDFs + 1 PNG in channel"]],
  quotes:[
   {by:"International Encyclopaedia (p. 275)",en:"In early times, many believed that the Paraclete would appear in person on Earth.",ref:"archive.org/details/internationalcy01richgoog/page/275"},
   {by:"St. Augustine (Tract. in Ioan. 94.2)",en:"Consolator ergo ille vel advocatus (utrumque enim interpretatur quod est graece paracletus) Christo abscedente fuerat necessarius.",ref:"Cited in Tertullian, ACW 013, n. 88"}],
  visual:{kind:'compare',
   left:{title:"Lexical & Literary Proof (Klytos)",items:["Riemer, LSJ, Strong's: kleos/klytos = praise, glory","Hesychius (1st–2nd c. roots): 'the glorious one'","Homer (Il. 14.321) & Nagy: 'praised / far-famed'","Latin source on Paraclitus: cleos = gloria"]},
   right:{title:"Historical Usage (Paraklētos)",items:["Rabbinic & early Latin Fathers: advocatus (court/spokesman)","Consolator only became common after 4th c. (Ceuppens)","Early believers expected a literal personal Paraclete","Matches Aḥmad / Muḥammad ('praised')"]}}}));

/* 3. #hochzeitsmahl-prophezeiung -> t-matthew-22 (explainer) */
const HM=AV('hochzeitsmahl-prophezeiung','1357645179984805909');
add('christianity/islam-vs/d-ia-muhammad-صلى-الله-عليه-وسلم-in-the-bible/t-matthew-22',N(HM,
 "In Matthew 22, 'servants' is plural and the banquet merely describes the Christian Church replacing Israel.",
 "Al-Ḥākim 3299 preserves the angels' full interpretation of Bukhārī 7281 (house = Islam, inner house = Paradise, caller = Muḥammad ﷺ—the final messenger calling outsiders), while Jerome, Remigius, and John Chrysostom confirm the king's armies refer to Vespasian and Titus (70 CE) and grammar shows collective plurals (Luke 12:37; Zech 9:9) apply to individuals.",
 "Al-Ḥākim 3299, Patristic 70 CE Dating & Collective Plural",
 ["Al-Ḥākim 3299 (full dream explanation of Bukhārī 7281): Gabriel at the Prophet's ﷺ head and Michael at his feet explain: Allah is the King, the house is Islam, the inner house is Paradise, and Muḥammad ﷺ is the Messenger calling to the feast. Because the Prophet ﷺ is the last caller in the sequence inviting non-Christians, he marks the seal of prophecy.",
  "Jerome (d. 420 CE) on Matthew 22:7: 'By his armies we understand the Romans under Vespasian and Titus, who, after slaughtering the inhabitants of Judea, reduced the faithless city to ashes.'",
  "John Chrysostom (Homilies 69 & 70 on Matthew): Links Matthew 21:43 ('given to a nation producing its fruits') directly to Matthew 22, stating Jesus foretells the events under Vespasian and Titus as the Father's vengeance.",
  "Remigius of Reims (533 CE) on Matthew 22:1–14: Notes the Jews were found unworthy (Rom 10:3) and rejected, after which the new invitees from the highways were called to the wedding feast.",
  "Collective plural (douloi) objection answered: Just as Zechariah 9:9 mixes plural/singular for animals while referring to one ride, and Luke 12:37 ('Blessed are those servants, hoi douloi, whom the master finds watching') or Deuteronomy 14:1 ('You are sons of the LORD') use grammatical plurals for a class or quality fulfilled by individuals, 'servants' in Matthew 22 can highlight the prophetic office rather than disallowing the final Messenger.",
  "Lawless Christians excluded: The wedding-garment warning excludes those who claim community membership without genuine submission and inner transformation."],
 ["Ṣaḥīḥ al-Bukhārī 7281; al-Ḥākim 3299","Jerome on Matt 22:7; Remigius of Reims (533 CE)","John Chrysostom, Homilies 69 & 70 on Matthew","Luke 12:37; Zechariah 9:9; Deuteronomy 14:1"],
 [],
 {facts:[["Ḥadīth","Bukhārī 7281 & al-Ḥākim 3299"],["Fathers","Jerome, Chrysostom, Remigius"],["70 CE Marker","Vespasian & Titus precede new call"],["Grammar","Luke 12:37 collective plural"]],
  quotes:[
   {by:"Jerome (d. 420 CE) on Matthew 22:7",en:"Under his armies we understand the Romans under Vespasian and Titus, who, after slaughtering the inhabitants of Judea, reduced the faithless city to ashes.",ref:"Commentary on Matthew 22"},
   {by:"Al-Ḥākim 3299 (Companion to Bukhārī 7281)",en:"Allah is the King, the house is Islam, the house within it is Paradise, and you, O Muḥammad, are the Messenger. Whoever obeys you enters Islam, and whoever enters Islam enters Paradise and eats of that feast.",ref:"Mustadrak al-Ḥākim 3299"}]}));

/* 4. #matthäus-21-matthäus-3 -> t-matthew-22 (explainer) */
const M21=AV('matthäus-21-matthäus-3','1468742056351502387');
add('christianity/islam-vs/d-ia-muhammad-صلى-الله-عليه-وسلم-in-the-bible/t-matthew-22',N(M21,
 "Matthew 21:43's 'nation' just means Gentiles generically, not a specific Abrahamic people.",
 "Matthew 21:43 uses the singular Greek noun ethnos ('a nation,' not 'nations'), while John the Baptist warns in Matthew 3:9 that God can raise up new 'children of Abraham'—pointing directly to another Abrahamic line, the descendants of Ishmael.",
 "Singular Ethnos (Matt 21:43) & Abraham's New Children (Matt 3:9)",
 ["Singular Greek ethnos (Matthew 21:40–43): Jesus declares the kingdom of God will be taken away and given to 'a nation (ethnos, singular) producing its fruits'—signaling a specific nation rather than scattered Gentile individuals.",
  "John the Baptist's warning (Matthew 3:7–9): 'Do not presume to say to yourselves, We have Abraham as our father, for I tell you, God is able from these stones to raise up children for Abraham.' Physical descent in Israel alone does not lock in God's covenant.",
  "Convergent deduction: Since the replacement community is a single fruitful nation (Matt 21:43) and God raises up new children for Abraham (Matt 3:9), the Ishmaelite line—equally of Abraham's seed—fits both verses coherently."],
 ["Matthew 21:40–43","Matthew 3:7–9"],
 [],
 {facts:[["Greek Grammar","ἔθνος (ethnos) — singular"],["Verse Pair","Matt 21:43 + Matt 3:9"],["Lineage","New children of Abraham (Ishmael)"]],
  quotes:[
   {by:"Matthew 3:9",en:"God is able from these stones to raise up children for Abraham.",ref:"Matthew 3:9"}]}));

/* 5. #hohes-lied-5-16 -> d-dr-song-of-solomon */
const HL=AV('hohes-lied-5-16','1293451973810454540');
add('christianity/islam-vs/d-dr-song-of-solomon',N(HL,
 "Are there additional primary references and archival dossiers in Averroes on Song of Solomon 5:16?",
 "Averroes's #hohes-lied-5-16 channel preserves a cross-reference to Ṣaḥīḥ al-Bukhārī 4276 alongside four dedicated research PDFs awaiting full text extraction.",
 "Archived Channel Reference & 4 Research PDFs",
 ["Ḥadīth cross-reference noted in channel: Ṣaḥīḥ al-Bukhārī 4276.",
  "Four archived PDFs in #hohes-lied-5-16 (not yet OCR-extracted): Unbenanntes_Dokument_-_2026-07-28T180238.507.pdf (299.09 KB), Unbenanntes_Dokument_-_2026-07-29T172901.285.pdf (319.94 KB), Unbenanntes_Dokument_-_2026-07-29T180011.147.pdf (215.84 KB), and Unbenanntes_Dokument_-_2026-07-31T011127.375.pdf (280.36 KB)."],
 ["Ṣaḥīḥ al-Bukhārī 4276","Averroes #hohes-lied-5-16 (4 PDFs)"],
 [],
 {facts:[["Ḥadīth Ref","Ṣaḥīḥ al-Bukhārī 4276"],["Archived PDFs","4 PDFs (215–320 KB)"],["Status","PDF dossier pending extraction"]]}));

/* 6. #jesaja-42 -> d-dr-isaiah-42 (PDF-only archive note) */
const J42=AV('jesaja-42','1552652185702236281');
add('christianity/islam-vs/d-dr-isaiah-42',N(J42,
 "Did the Church Fathers interpret Isaiah 42?",
 "Averroes's #jesaja-42 channel archives a dedicated PDF dossier on patristic readings of Isaiah 42 (Jesaja_42_bei_den_Kirchenvatern.pdf, 473.77 KB); its text has not yet been extracted into Discord messages.",
 "Archived PDF Dossier: Isaiah 42 in the Church Fathers",
 ["PDF-only channel: Jesaja_42_bei_den_Kirchenvatern.pdf (473.77 KB) is archived in Averroes #jesaja-42 for future extraction and integration."],
 ["Averroes #jesaja-42 (Jesaja_42_bei_den_Kirchenvatern.pdf)"],
 [],
 {facts:[["File","Jesaja_42_bei_den_Kirchenvatern.pdf"],["Size","473.77 KB"],["Status","PDF-only archive"]]}));

/* 7. #daniel-7 -> christianity/jesus/d-dr-mark (PDF-only archive note) */
const DN7=AV('daniel-7','1504472122788151408');
add('christianity/jesus/d-dr-mark',N(DN7,
 "Are there dedicated Averroes materials on Daniel 2 and Daniel 7?",
 "Averroes's #daniel-7 channel archives a comprehensive 4.00 MB dossier (Daniel-2-und-7_Dossier_v2.pdf); its text has not yet been extracted into Discord messages.",
 "Archived PDF Dossier: Daniel 2 & Daniel 7 (v2)",
 ["PDF-only channel: Daniel-2-und-7_Dossier_v2.pdf (4.00 MB) is archived in Averroes #daniel-7 for future extraction and integration."],
 ["Averroes #daniel-7 (Daniel-2-und-7_Dossier_v2.pdf)"],
 [],
 {facts:[["File","Daniel-2-und-7_Dossier_v2.pdf"],["Size","4.00 MB"],["Status","PDF-only archive"]]}));


/* ══════════════════════════════════════════════════════════════
   PART 2 — NEW PROPHECY CARDS UNDER christianity/islam-vs/prophecies/
   ══════════════════════════════════════════════════════════════ */

/* 8. #jesaja-60-6-7 */
const J60=AV('jesaja-60-6-7','1351549470394945608');
card(P+'isaiah-60-kedar-nebaioth',{
 title:"Isaiah 60:6–7: Kedar, Nebaioth & the camels of Arabia",
 k:"Prophecies · Isaiah 60",
 blurb:"Caravans from Midian, Ephah, and Sheba alongside Kedar and Nebaioth—plus Jerome's own etymology of Kedar ('darkness') turning to light.",
 claim:"Isaiah 60:6–7 was fulfilled by the Magi bringing gold and frankincense to Jesus (Matt 2:11), by the spiritual Church as Zion (Heb 12:22), or by a future Jewish temple age.",
 tree:N(J60,
  "Isaiah 60:6–7 refers to the Magi visiting Jesus (Matt 2:11) or to the Christian Church as spiritual Zion—not Islam.",
  "Isaiah 60 explicitly names Arabian tribes descended from Ishmael—Midian, Ephah, Sheba, Kedar, and Nebaioth—bringing real camel caravans and acceptable altar sacrifices. Even Jerome admits Kedar means 'darkness' (matching Qurʾān 14:1, leading people out of darkness into light) and says Israel's promises passed to others who received the truth—fitting the Arabian pilgrimage and Hajj far better than three Persians in Matthew 2.",
  "Arabian Tribes, Jerome's Commentary & Why Islam Fits",
  ["Named Arabian & Ishmaelite tribes: Midian, Ephah, Sheba, Kedar, and Nebaioth (Genesis 25:13) are unambiguously Arabian peoples descended from Ishmael—not Persians or Europeans.",
   "Jerome's Commentary on Isaiah 60: Jerome identifies Kedar with 'the region of the Saracens, who in Scripture are called Ishmaelites,' and defines Kedar as 'darkness,' Midian as 'wickedness,' Ephah as 'poured out,' Saba as 'conversion/captivity,' and Nebaioth as 'prophecies.' This mirrors Qurʾān 14:1 ('to bring mankind out of darknesses into the light').",
   "Promises transferred from unfaithful Israel: Jerome explains that camels freed from wickedness pour out their souls to God and bring 'the gold of faith and the incense of sacrifice,' and concludes at the end that the promises were taken from those who rejected God's messenger and 'spiritually given back to those who receive it'—a framework that maps far more coherently onto Muslims than onto European churches.",
   "Supporting biblical motifs in the channel notes: Humility and shedding worldly wealth (camel through the eye of a needle, Matt 19:24), God seeking His flock like a shepherd (Ezekiel 34:11–12), 'foreigners shall build up your walls and their kings shall minister to you' (Isa 60:10; Islam's multi-ethnic ummah), and communities failing to receive the light sent to them until the final Prophet ﷺ."],
  ["Isaiah 60:6–10","Genesis 25:13","Qurʾān 14:1","Jerome, Commentary on Isaiah 60"],
  [
   N(J60,
    "Didn't the Magi fulfil Isaiah 60:6 in Matthew 2:11 by bringing gold, frankincense, and myrrh to Jesus?",
    "No: Matthew 2's Magi came from Persia/the East (not Midian, Ephah, and Sheba in Arabia), and three visitors bringing gifts to a child is neither a mass influx of nations nor the sweeping religious transformation Isaiah 60 describes.",
    "Why Matthew 2:11 Falls Short",
    ["Wrong geography: Isaiah 60:6 names Midian, Ephah, and Sheba—Arabian regions—not Persia, whence the Magi came.",
     "Scale mismatch: Isaiah 60 speaks of multitudes of camels and entire peoples transforming the religious landscape—not three private visitors. Islam united millions across Arabia with 'gold' (faith) and 'frankincense' (worship/prayer)."],
    ["Isaiah 60:6","Matthew 2:11"],[],
    {visual:{kind:'compare',
      left:{title:"Matthew 2:11 (Magi)",items:["From the East / Persia","Three private visitors","No Arab tribal influx or global Hajj"]},
      right:{title:"Isaiah 60:6–7 & Islam",items:["Midian, Ephah, Sheba, Kedar & Nebaioth (Arabia)","Mass camel caravans & global pilgrimage","Faith (gold), prayer (incense), & Hajj sacrifices"]}}}),
   N(J60,
    "What if Zion in Isaiah 60 is just the spiritual Church (Hebrews 12:22)?",
    "Isaiah 60 describes literal camel caravans, real gold and incense, and physical sacrifices on an acceptable altar—whereas Christianity expanded into Rome, Greece, and Europe rather than Kedar and Nebaioth.",
    "Why 'Spiritual Zion' Fails the Text",
    ["Literal Arabian geography vs. European Christendom: Christianity became dominant in Greece, Rome, and Europe, leaving Kedar and Nebaioth untouched until Islam brought pure monotheism to those exact Arabian tribes.",
     "Islam honors both: While Muslims pray toward Makkah, Jerusalem remains sacred in Islam, whereas Church allegory dissolved physical Zion while missing the Arabian peoples explicitly named."],
    ["Isaiah 60:6–7","Hebrews 12:22"]),
   N(J60,
    "Jewish objection: Doesn't Isaiah 60:7 point to a future messianic age and the Jerusalem Temple?",
    "Two millennia have passed with no Jewish messianic ruler fulfilling Isaiah 60 and no Jerusalem Temple since 70 CE—whereas Kedar and Nebaioth point directly to Ishmael's descendants (Genesis 25:13), whose unbroken pilgrimage and animal sacrifices happen every year at Makkah's Hajj.",
    "Answering Both Jewish Objections",
    ["No messianic fulfillment & no Temple since 70 CE: Neither ancient Israel nor the modern state of Israel serves as the monotheistic pilgrimage center of all nations, and Temple sacrifices ceased in 70 CE.",
     "Genealogy & living sacrifice: Kedar and Nebaioth are sons of Ishmael (Gen 25:13), ancestors of the Arabs and the Prophet Muḥammad ﷺ (descended through Kedar). Every year millions of pilgrims sacrifice animals to God during the Hajj—a living, literal fulfillment centered on Ishmael's line."],
    ["Genesis 25:13","Isaiah 60:7"])
  ],
  {facts:[["Text","Isaiah 60:6–7"],["Tribes","Midian, Ephah, Sheba, Kedar, Nebaioth"],["Patristic Witness","Jerome: Kedar = Saracens / Darkness"],["Key Link","Q 14:1 + Hajj sacrifices"]],
   quotes:[
    {by:"Jerome on Isaiah 60",en:"The territory of the Saracens is called Kedar, who in Scripture are designated Ishmaelites. And Nebaioth is one of the sons of Ishmael... Kedar means darkness. Nebaioth means prophecies.",ref:"Jerome, Commentary on Isaiah 60"}]}),
 sum:"Isaiah 60:6–7 names Arabian and Ishmaelite tribes—which Jerome himself defines as Saracens/darkness turning to light—pointing cleanly to Islam's Arabian rise and Hajj rather than three Persian Magi."});

/* 9. #jerusalem-richtung-gebetet + #ort-verändern-zion */
const JR=AV('jerusalem-richtung-gebetet','1351563552871419984');
const OV=AV('ort-verändern-zion','1351563478636167228');
card(P+'zion-place-of-worship-shifted',{
 title:"Can the sacred center ('Zion') shift from Jerusalem to Makkah?",
 k:"Prophecies · Biblical Precedent",
 blurb:"Jeremiah 3:16–17, Matthew 21:43, Isaiah 19:19–21, and Malachi 1:11 show God's chosen center of worship is not permanently locked to Jerusalem.",
 claim:"True monotheistic worship and prophetic authority are permanently bound to Jerusalem; changing the Qiblah to Makkah contradicts biblical scripture.",
 tree:N(JR,
  "Scripture permanently binds God's sacred center to Jerusalem and the Ark/Temple—so shifting the focal point to Makkah is unbiblical.",
  "Four distinct biblical passages prove the opposite: God explicitly announced that the Ark would be forgotten (Jeremiah 3:16–17), that the kingdom would be taken from Jerusalem's leadership and given to another nation (Matthew 21:43), that an altar and sacrifices would arise outside Jerusalem to the south (Isaiah 19:19–21), and that pure worship would span the globe from sunrise to sunset (Malachi 1:11).",
  "Four Biblical Proofs That Worship's Center Shifts",
  ["Jeremiah 3:16–17 (The Ark ceases to matter): God declares the day will come when 'they shall say no more, The ark of the covenant of the LORD. It shall not come to mind or be remembered... nor shall another one be made.' Even the holiest physical focal point in Israel could be retired by divine decree.",
   "Matthew 21:43 (The Kingdom transferred): Jesus warns Jerusalem's leaders that 'the kingdom of God will be taken away from you and given to a nation producing its fruits'—confirming the spiritual center moves away from Jerusalem.",
   "Isaiah 19:19–21 (An altar outside Jerusalem): Foretells 'an altar to the LORD in the midst of the land of Egypt' with sacrifices and offerings—proving acceptable worship and sacrifice are not restricted to Jerusalem's Temple.",
   "Malachi 1:11 (Global worship from sunrise to sunset): 'From the rising of the sun to its setting My name is great among the nations, and in every place a pure offering is made'—matching global Islam and its five daily prayers beginning at dawn."],
  ["Jeremiah 3:16–17","Matthew 21:43","Isaiah 19:19–21","Malachi 1:11"],
  [
   N(OV,
    "How do these four passages fit together into a single trajectory?",
    "Taken chronologically, they trace a clear progression: from the Ark of the Covenant, to Jerusalem's Temple, to the removal of Jerusalem's exclusive status, to global monotheistic worship centered on a new Abrahamic house of prayer (Makkah).",
    "Trajectory Summarized (#ort-verändern-zion)",
    ["Step 1 (Jer 3:16–17): The Ark—once indispensable—becomes obsolete; God's Name, not a fixed relic, governs sacred space.",
     "Step 2 (Matt 21:43): Religious leadership is explicitly taken from Jerusalem's stewards and entrusted to another nation.",
     "Step 3 (Isa 19:19–21): Sacrificial worship is legitimized outside Jerusalem toward the south.",
     "Step 4 (Mal 1:11): Pure worship and offering span every place from sunrise to sunset—fulfilled in the daily prayers and global Hajj toward Makkah."],
    ["Jeremiah 3:16–17","Matthew 21:43","Isaiah 19:19–21","Malachi 1:11"],[],
    {visual:{kind:'steps',items:[
      ["Ark Retired (Jer 3:16–17)","Former sacred center is no longer remembered or rebuilt."],
      ["Kingdom Removed (Matt 21:43)","Stewardship passes from Jerusalem to a new fruitful nation."],
      ["New Altar Southward (Isa 19:19–21)","True worship & sacrifice are not confined to Jerusalem."],
      ["Sunrise to Sunset (Mal 1:11)","Pure global worship practiced five times daily worldwide."]]}})
  ],
  {facts:[["Key Texts","Jer 3:16–17; Matt 21:43; Isa 19; Mal 1:11"],["Precedent","Ark retired; altars outside Zion"],["Global Scope","Sunrise to sunset (Mal 1:11)"],["Fulfillment","Makkah & five daily prayers"]],
   quotes:[
    {by:"Malachi 1:11",en:"For from the rising of the sun to its setting my name will be great among the nations, and in every place incense will be offered to my name, and a pure offering.",ref:"Malachi 1:11"},
    {by:"Jeremiah 3:16",en:"They shall no more say, 'The ark of the covenant of the LORD.' It shall not come to mind or be remembered or missed; it shall not be made again.",ref:"Jeremiah 3:16"}]}),
 sum:"Jeremiah 3:16–17, Matthew 21:43, Isaiah 19:19–21, and Malachi 1:11 prove that God's sacred center is never permanently locked to Jerusalem, clearing the way for Makkah and global daily worship."});

/* 10. #esel-und-kamel */
const EK=AV('esel-und-kamel','1355557041703485652');
card(P+'isaiah-21-camel-rider-habakkuk-paran',{
 title:"Isaiah 21:7–9 & Habakkuk 3: The Donkey Rider, the Camel Rider & Paran",
 k:"Prophecies · Isaiah 21 & Habakkuk 3",
 blurb:"Isaiah 21's twofold fall of Babylon, Rashi identifying the watchman as Habakkuk (Hab 3:3–4 from Mount Paran), and Jerome placing Ishmaelites/Saracens in Pharan.",
 claim:"Isaiah 21:7 only describes ancient Babylon's fall to the Medes and Persians, not two separate riders—and the camel rider cannot be Muḥammad ﷺ because Rome didn't fall during his lifetime.",
 tree:N(EK,
  "Isaiah 21 refers only to the ancient Persian conquest of Babylon, not Jesus and Muḥammad ﷺ—and Rome did not fall in Muḥammad's ﷺ own lifetime.",
  "Isaiah 21:9 cries 'Fallen, fallen is Babylon!'—which both Rashi and the Book of Revelation read as two distinct historical falls (first ancient Babylon by Persia/Media's pair of horses, then the 'second Babylon,' Rome). Isaiah 21:7 pairs a donkey rider (Jesus, Zechariah 9:9) with a camel rider (Muḥammad ﷺ), while Rashi identifies Isaiah 21:6's watchman as Habakkuk (Hab 2:1 -> 3:3–4), who sees God's glory coming from Mount Paran in Arabia—ending Israel's 500-year Roman exile and reopening Jerusalem to Jews.",
  "Two Falls of Babylon, the Watchman Habakkuk & Paran",
  ["Twofold fall of Babylon (Isaiah 21:9): Both Rashi and Revelation read the doubled 'Fallen, fallen is Babylon!' as two separate falls. The first fall matches the 'pair of horsemen' (Cyrus of Persia and Darius the Mede); the second corresponds to the donkey rider and camel rider.",
   "The Donkey Rider & Camel Rider (Isaiah 21:7): Zechariah 9:9 explicitly identifies the Messiah as the donkey rider (Jesus); the second figure—the camel rider—brings down the 'second Babylon' (Rome), ending the ~500-year Roman exile of the Jews and allowing them to return to Jerusalem after the Islamic conquest.",
   "Rashi links Isaiah 21:6's watchman to Habakkuk: Isaiah 21:6 commands 'Go, set a watchman, let him declare what he sees.' Rashi identifies this watchman as Habakkuk, who stands on his watchtower in Habakkuk 2:1 and beholds in Habakkuk 3:3–4: 'God came from the south [Teman], and the Holy One from Mount Paran. Selah. His splendor covered the heavens, and the earth was full of His praise.'",
   "Geography & patristic witnesses to Paran: Paran lies south of Israel in northwestern Arabia (Makkah lies south of Israel), and 'the earth full of His praise' fits global monotheism. Theophilus of Antioch mentions 'the Chorraeans in the mountains as far as the so-called terebinth of Pharan, which is in the desert,' and Jerome (De situ et nominibus locorum Hebraicorum) explicitly testifies: 'In the desert of Pharan Scripture relates that Ishmael dwelt. Hence also the Ishmaelites, who are now Saracens'—adding Pharan is 'now a city beyond Arabia, bordering the Saracens.'",
   "Archived channel PDFs: Includes Biblische_Prophezeiungen_Prophet_Muhammad.docx_2.pdf (341.42 KB), Unbenanntes_Dokument_-_2026-06-18T030031.569.pdf (201.91 KB), and Jesaja42_Teil2_Habakuk3_Muhammad_aus_Sela_v3.pdf (240.96 KB)."],
  ["Isaiah 21:6–9","Zechariah 9:9","Habakkuk 2:1; 3:3–4","Rashi on Isaiah 21 & Habakkuk","Theophilus of Antioch","Jerome, De situ et nominibus locorum Hebraicorum"],
  [
   N(EK,
    "Didn't the fall of the Eastern Roman Empire happen after the Prophet's ﷺ death?",
    "The Prophet ﷺ personally initiated the campaign against Rome at Mu'tah (629 CE), laying the foundation and trigger for its collapse—just as countless biblical prophecies credit the founder of a movement or kingdom with the victory completed by his immediate successors.",
    "The Objection Answered: Mu'tah (629 CE) & Prophetic Agency",
    ["Direct trigger at Mu'tah (629 CE): Muḥammad ﷺ himself confronted Byzantine forces in 629 CE, initiating the struggle that dismantled Roman rule over the Levant and Jerusalem within a decade.",
     "Biblical precedent: Throughout the Bible, prophecies regularly associate the decisive founder with the historical outcome carried through by his immediate community and successors."],
    ["Battle of Mu'tah (629 CE)"])
  ],
  {facts:[["Texts","Isa 21:6–9; Zech 9:9; Hab 2:1, 3:3–4"],["Jewish Exegesis","Rashi: double fall & watchman = Habakkuk"],["Patristic Geography","Jerome: Pharan = Ishmaelites/Saracens"],["Archived PDFs","3 PDFs in channel"]],
   quotes:[
    {by:"Jerome, De situ et nominibus locorum Hebraicorum",en:"In the desert of Pharan Scripture relates that Ishmael dwelt. Hence also the Ishmaelites, who are now Saracens.",ref:"Onomasticon / De situ"},
    {by:"Habakkuk 3:3 (Luther 2017)",en:"God came from the south, and the Holy One from Mount Paran. Selah. His glory covered the heavens, and the earth was full of His praise.",ref:"Habakkuk 3:3"}],
   visual:{kind:'compare',
    left:{title:"1st Fall & 1st Rider",items:["Pair of horsemen: Cyrus (Persia) & Darius (Media)","1st fall of ancient Babylon","Donkey rider (Zech 9:9) = Jesus the Messiah"]},
    right:{title:"2nd Fall & 2nd Rider",items:["Camel rider from the South / Paran (Arabia)","2nd fall of 'Babylon' (Rome), initiated at Mu'tah (629 CE)","Ends 500-year Roman exile; Jews allowed back to Jerusalem"]}}}),
 sum:"Reading Isaiah 21:6–9 through Rashi's identification of Habakkuk 2:1/3:3, Zechariah 9:9, and Jerome's placement of Ishmaelites/Saracens in Pharan links the donkey rider to Jesus and the camel rider from Arabia to Muḥammad ﷺ."});

/* 11. #arbeiter-weinberg-gleichniss */
const AW_P=AV('arbeiter-weinberg-gleichniss','1351564407859052584');
card(P+'workers-in-the-vineyard-matthew-20',{
 title:"Workers in the Vineyard: Matthew 20:1–16 & the Ḥadīth of the Three Eras",
 k:"Prophecies · Gospel Parallel",
 blurb:"Jesus's parable of the vineyard laborers (Matt 20) mirrors the Prophet's ﷺ parable of Jews, Christians, and Muslims working across the three parts of the day.",
 claim:"The Bible gives no coherent place for a third, later monotheistic community after Jews and Christians.",
 tree:N(AW_P,
  "Revelation history closed with the Church; Jesus never envisioned a third, later community receiving an even greater reward.",
  "Both Matthew 20:1–16 and the authentic ḥadīth in Musnad Aḥmad and Ṣaḥīḥ al-Bukhārī teach the exact same parable: workers hired at successive hours of the day, the earlier workers protesting the generous wage of the last group, and the Master replying, 'Did I withhold anything from your wage? It is simply My favor which I give to whom I will' (cf. Matt 20:15).",
  "Structural & Theological Alignment of the Two Parables",
  ["The Ḥadīth (Musnad Aḥmad / Ṣaḥīḥ al-Bukhārī): The Prophet ﷺ said: 'Your likeness and the likeness of the Jews and Christians is like a man who employed workers and said: Who will work for me from the morning prayer until midday for one qīrāṭ? So the Jews worked. Then he said: Who will work from midday until the afternoon prayer for one qīrāṭ? So the Christians worked. Then he said: Who will work from the afternoon prayer until sunset for two qīrāṭs? It was you who worked.'",
   "Matching objection & divine answer: When the Christians and Jews became angry saying 'We worked more and received less,' the Master replied: 'Have I withheld anything from your wage?' They said: 'No.' He said: 'It is only My favor, which I give to whom I will'—directly echoing Matthew 20:15 ('Or is your eye evil because I am good? / Do not begrudge my doing good with what is mine').",
   "Chronological & salvific progression: First Jews (Torah), then Christians (Gospel), then Muslims (Qurʾān) laboring in the final phase from ʿaṣr to sunset—illustrating that God's justice and grace are not bound by seniority and that Islam completes the monotheistic sequence."],
  ["Matthew 20:1–16","Musnad Aḥmad & Ṣaḥīḥ al-Bukhārī (parable of the qīrāṭs)"],
  [],
  {facts:[["Gospel Text","Matthew 20:1–16"],["Ḥadīth","Musnad Aḥmad / Ṣaḥīḥ al-Bukhārī"],["Sequence","Jews → Christians → Muslims"],["Core Principle","Matt 20:15 = Sovereign grace"]],
   quotes:[
    {by:"Prophet Muḥammad ﷺ (Musnad Aḥmad / Bukhārī)",en:"Have I withheld anything from your wage? They said: No. He said: It is only My favor, which I give to whom I will.",ref:"Musnad Aḥmad / Ṣaḥīḥ al-Bukhārī"}],
   visual:{kind:'steps',items:[
     ["Dawn to Midday (1 Qīrāṭ)","Jews labor under the Torah."],
     ["Midday to ʿAṣr (1 Qīrāṭ)","Christians labor under the Gospel."],
     ["ʿAṣr to Sunset (2 Qīrāṭs)","Muslims labor in the final era under the Qurʾān."],
     ["The Master's Reply","No injustice done; extra reward is God's sovereign grace (Matt 20:15)."]]}}),
 sum:"The ḥadīth of the three shifts mirrors Matthew 20:1–16 point for point—earliest laborers, latecomers, protest, and the Master's vindication of sovereign grace—situating Islam as the final era of the same divine vineyard."});

/* 12. #arabien-allgemein */
const AA=AV('arabien-allgemein','1355866205105291305');
card(P+'arabia-qumran-hanifiyya-witnesses',{
 title:"Arabia, Qumran, Eusebius & Early Witnesses to the Ḥanīfiyya",
 k:"Prophecies · Qumran & Antiquity",
 blurb:"Dead Sea Scrolls (4Q534, 4Q541, 4Q242/Teiman), Eusebius on Abraham's pre-Mosaic religion, Ptolemy on Yathrib (150 CE), Narsai, and James 4:15 ('In shāʾ Allāh').",
 claim:"Pre-Islamic Arabia and early non-Islamic texts contain no meaningful parallels to Qurʾānic ḥanīfiyya, Arabian prophetic geography, or Islamic monotheistic idiom.",
 tree:N(AA,
  "Neither pre-Islamic Jewish/Christian texts nor ancient geography corroborate a monotheistic Arabian trajectory or the Qurʾānic concept of Abraham's religion before Judaism and Christianity.",
  "Multiple independent pre-Islamic witnesses converge: Qumran fragments (4Q534, 4Q541, 4Q242) speak of God's 'Elect' (Bechir Elaha) facing lies while Teiman in Arabia becomes a locus of divine recognition; Eusebius explicitly describes Abraham's pre-Law, pre-circumcision pure monotheism; Claudius Ptolemy records Yathrib (Lathríppa) in 150 CE; Narsai affirms God's unchangeable essence; and Christian commentators note Arabic 'In shāʾ Allāh' preserves James 4:15's neglected command.",
  "Qumran Parallels, Patristic Ḥanīfiyya & Arabian Witnesses",
  ["Qumran 4Q534 (Fragment 1, col. 1) — 'Bechir Elaha' (Elect of God): Mirrors Isaiah 42:1 ('My Chosen,' Bechiri). Describes a figure whose wisdom will reach all peoples (matching Isa 42:4, coastlands waiting for his Torah/law), who knows 'the three books,' and against whom opponents' plots fail.",
   "Qumran 4Q541 (Fragment 9) — 'Word of the heavens' & defamation: Parallels Isaiah 42:1 & 42:6 ('light to the nations'): 'His word is like the word of the heavens, and his teaching accords with God's will'; his 'eternal sun will shine' and darkness will flee—while opponents 'spread lies' and 'invent fables against him' (matching Quraysh's slander).",
   "Qumran 4Q242 (Prayer of Nabonidus) — Teiman in Arabia: Locates divine intervention and confession of the 'Most High God' in Teiman (deep in modern Saudi Arabia), confirming the Qumran community viewed northern Arabia/Ḥijāz—matching Isaiah 42:11's Kedar—as a region of prophetic proclamation by a figure described as 'a Jew from the exile.'",
   "Archived channel attachments: Includes Dossier_abrahamitische_Spuren.docx, Unbenanntes_Dokument_-_2026-08-20T093101.971.pdf, IMG_4489.png, IMG_1100.png, message.txt, and a note on Yaʿqūbī's Gospel dossier."],
  ["Qumran 4Q534, 4Q541, 4Q242","Isaiah 42:1, 4, 6, 11","Eusebius, Praeparatio Evangelica VII / Dem. Ev. I","Claudius Ptolemy, Geography 6.7.31 (150 CE)","Narsai, Memre ll. 847–852","Coffman & Tasker on James 4:15"],
  [
   N(AA,
    "What does Eusebius say about Abraham's religion before Judaism and Christianity?",
    "In Praeparatio Evangelica VII / Demonstratio Evangelica I, Eusebius praises Abraham, Noah, Enoch, Melchizedek, and Job as pure monotheists before the Mosaic Law and before circumcision—virtually defining the Qurʾānic ḥanīfiyya (Q 3:67; 2:135; 16:123).",
    "Eusebius on Abraham's Pre-Law Monotheism (Ḥanīfiyya)",
    ["Before Jew or Greek: Eusebius states of Abraham, Noah, Enoch, Melchizedek, and Job: 'it is not right either to call them Jews, nor yet Greeks'—calling them 'Hebrews,' pure monotheists guided by 'unwritten laws' and natural reason before the Law.",
     "Before circumcision: Eusebius stresses Abraham was already justified before circumcision, which 'added nothing' to his justification—a striking patristic parallel to Qurʾān 3:67 ('Abraham was neither a Jew nor a Christian, but he was a ḥanīf, a Muslim') and 2:135; 16:123."],
    ["Eusebius, Praeparatio Evangelica VII & Demonstratio Evangelica I","Qurʾān 2:135; 3:67; 16:123"],[],
    {quotes:[{by:"Eusebius, Praep. Ev. VII / Dem. Ev. I",en:"It is not right either to call them Jews, nor yet Greeks.",ref:"Praeparatio Evangelica VII"}]}),
   N(AA,
    "What historical and linguistic witnesses from Ptolemy, Narsai, and Christian commentary appear in this dossier?",
    "Ptolemy maps Yathrib (Lathríppa) in c. 150 CE; 4th–5th c. Syriac poet Narsai affirms the unchangeable divine essence (Īṯūṯā) and a prophet calling in every language; and Coffman's commentary on James 4:15 laments that Christians abandoned 'Deo volente' while Muslims continually say 'In shāʾ Allāh.'",
    "Ptolemy (150 CE), Narsai (4th–5th c.) & James 4:15 ('In shāʾ Allāh')",
    ["Claudius Ptolemy (Geographike Hyphegesis 6.7.31, ca. 150 CE): Records Madīnah/Yathrib under the name Λαθρίππα (Lathríppa) at coordinates 71 1/48° longitude, 23 1/3° latitude—centuries before Islam.",
     "Narsai's Memre (4th–5th c., lines 847–852): 'Listen and hear, you heretics: Unchangeable/unapproachable is the [divine] essence (Īṯūṯā). A prophet shall call in every language and rebuke the proud: I am the LORD, the God, and I have not changed, I who am.'",
     "Coffman's Commentary on James 4:15 ('If the Lord wills'): Notes NT parallels (Acts 18:21; 21:14; 1 Cor 4:19; 16:7; Heb 6:3) and criticizes commentators like Harper who reduce 'Deo volente' to an empty formula. Coffman praises the Arab world where one 'constantly hears the expression InshāʾAllāh, meaning If Allah wills' as 'a beautiful and eloquent testimony of their religious faith and zeal,' citing Tasker that Christians' neglect of James's command stems from unwillingness to acknowledge 'the supreme sovereignty of God.'"],
    ["Claudius Ptolemy, Geography 6.7.31","Narsai, Memre 847–852","Coffman Commentary on James 4:15 (citing Harper & Tasker)"],[],
    {quotes:[
     {by:"Narsai, Memre (ll. 847–852)",en:"Listen and hear, you heretics: Unchangeable is the [divine] essence (Īṯūṯā). A prophet shall call in every language and rebuke the proud: 'I am the LORD, the God, and I have not changed, I who am.'",ref:"Memre on the Temptation of Christ, 847–852"},
     {by:"Coffman Commentary on James 4:15",en:"In the Arab world one 'constantly hears the expression InshāʾAllāh, meaning If Allah wills.' It is a beautiful and eloquent testimony of their religious faith and zeal.",ref:"Coffman on James 4:15 (F33)"}]})
  ],
  {facts:[["Qumran","4Q534 (Bechir Elaha), 4Q541, 4Q242 (Teiman)"],["Patristics","Eusebius (ḥanīfiyya) & Narsai (Īṯūṯā)"],["Geography","Ptolemy (150 CE): Λαθρίππα / Madīnah"],["Practice","Coffman & Tasker: In shāʾ Allāh = Jas 4:15"]]}),
 sum:"Dead Sea Scrolls (4Q534, 4Q541, 4Q242), Eusebius's pre-Mosaic 'Hebrew' monotheism, Ptolemy's early attestation of Yathrib, Narsai, and Coffman's praise of 'In shāʾ Allāh' corroborate Islam's Arabian and Abrahamic continuity."});

/* 13. #johannes-1-21 */
const J121=AV('johannes-1-21','1361682572630950059');
card(P+'john-1-21-the-prophet-deut-18',{
 title:"John 1:21 & Deut 18:18: Why 'The Prophet' Was Distinct from the Messiah",
 k:"Prophecies · Deuteronomy 18 & John 1",
 blurb:"Jesus never claimed to be 'The Prophet' of Deut 18, the Pharisees explicitly barred Galilee (John 7:52), Qumran separated Messiah and Prophet, and Faustus refuted Augustine.",
 claim:"Jesus is 'The Prophet like Moses' promised in Deuteronomy 18:18, as Peter and Paul assert in Acts.",
 tree:N(J121,
  "Deuteronomy 18:18's 'Prophet like Moses' is Jesus—as Peter and Paul preach in Acts and as Augustine argued against Faustus.",
  "First-century Jews, Qumran, and the Gospels themselves strictly separated the Messiah from 'The Prophet' (John 1:21; 7:52). Jesus told people to heed the Pharisees' scriptural knowledge (Matthew 23:2–3), never claimed to be 'The Prophet,' and the Pharisees declared 'The Prophet' cannot arise from Galilee (John 7:52)—without contradiction even from Nicodemus. Even Augustine failed to answer Faustus's challenge to show where Moses wrote of Christ.",
  "Gospel, Qumran & Faustus vs. Augustine on Deut 18:18",
  ["Pharisees & Jesus (Matthew 23:2–3 & John 7:52): Jesus explicitly instructs: 'Do and observe whatever they [the scribes and Pharisees] tell you, for they sit on Moses' seat' (recognizing their scriptural knowledge, though not their deeds). In John 7:52, the Pharisees state unambiguously that 'the Prophet' does not come from Galilee—and even the Pharisee who defended Jesus (Nicodemus) did not dispute that scriptural point.",
   "Jesus never claimed to be 'The Prophet': Nowhere in the Gospels does Jesus introduce himself as the Prophet promised by Moses. When Peter and Paul apply Deut 18 to Jesus in Acts, they are misreading John 5:46 ('Moses wrote of me'—referring to the Messiah, not 'the Prophet'), just as early followers erred in expecting Jesus's return within their own lifetime (1 Thessalonians 4:15).",
   "Qumran confirmation: The Qumran community explicitly separated the expected Messiah(s) from 'the Prophet' like Moses (matching the distinct questions in John 1:21).",
   "Channel attachments & cues: Also notes Unbenanntes_Dokument_-_2026-04-17T173144.354.pdf and two message.txt files (with brief verse markers 14–16, 17, 18 / Beelzebub)."],
  ["Deuteronomy 18:18","John 1:21; 5:46; 7:52","Matthew 23:2–3","1 Thessalonians 4:15","Augustine, Contra Faustum (p. 460.6)"],
  [
   N(J121,
    "How did Faustus challenge Augustine on Moses and Deuteronomy 18:18?",
    "Faustus pointed out that Christians do not keep Moses's Law and that Jews rejected Jesus precisely out of loyalty to Moses—then challenged Augustine to cite where Moses actually wrote of Christ, exposing Augustine's circular 'if you are a Christian, believe' response and weak reply on Deut 18:18.",
    "Faustus vs. Augustine (Contra Faustum)",
    ["Jesus vs. Moses contradiction: Faustus notes that both heretics and Catholics ignore Moses's law; if that reflects Christ's own teaching, Jesus and Moses taught contradictory things—which is why Jews faithful to Moses rejected Jesus, making John 5:46 ('if you believed Moses, you would believe me') deeply problematic.",
     "Exposing circular apologetics: Answering 'if you are a Christian, believe that Moses wrote of him' is 'foolish and weak'—especially toward Jews and pagans who cannot be told 'if you are Christian, believe,' and even toward Christians when the question is textual interpolation vs. authenticity (Jesus himself showed Thomas his wounds rather than demanding blind assent without reason).",
     "Augustine's weakness on Deut 18:18 (p. 460.6): Augustine challenges Faustus: 'Let him tell me which prophet God promised when He said to Moses: I will raise up for them a prophet from their brothers like you (Suscitabo illis prophetam de fratribus eorum sicut te vel similem tibi).' Yet Augustine simply asserts Jesus without systematically ruling out other prophetic claimants—when virtually any law-bringing prophet fits the Moses typology better than Jesus."],
    ["Augustine, Contra Faustum (CSEL 25.1, p. 460.6)","John 5:46"],[],
    {quotes:[
     {by:"Faustus (in Augustine, Contra Faustum)",en:"I ask you to show us where Moses wrote anything at all about Christ... You say: 'Blessed are those who have not seen and yet have believed.' If you think this was said so that we believe everything without reason and judgment, then be happier without reason; I will be content with reason.",ref:"Contra Faustum"},
     {by:"Augustine's Challenge on Deut 18:18",en:"Dicat mihi, quem prophetam promiserit deus, cum ait Moysi: Suscitabo illis prophetam de fratribus eorum sicut te vel similem tibi.",ref:"Contra Faustum, p. 460.6"}]})
  ],
  {facts:[["Texts","Deut 18:18; John 1:21; 7:52; Matt 23:2–3"],["Qumran","Distinguished Messiah from 'The Prophet'"],["Patristic Debate","Faustus vs. Augustine (p. 460.6)"],["NT Error Parallel","1 Thess 4:15 expectation of return"]],
   visual:{kind:'compare',
    left:{title:"Why Jesus ≠ 'The Prophet'",items:["John 1:21 & Qumran separate Messiah and Prophet","John 7:52: 'The Prophet' not from Galilee (uncontested)","Jesus never claimed the title 'The Prophet'","Jesus & Moses taught conflicting legal praxis (Faustus)"]},
    right:{title:"Acts' Misreading & 1 Thess 4:15",items:["Acts applies Deut 18 by misreading John 5:46","Early disciples also erred on imminent Parousia (1 Thess 4:15)","Augustine merely asserts Jesus against Faustus","A law-bringing prophet fits Moses far better"]}}}),
 sum:"John 1:21, 7:52, Qumran, and Faustus's unanswered challenge to Augustine show 'The Prophet like Moses' was distinct from the Galilean Messiah and never claimed by Jesus."});

/* 14. #pslam-84 */
const P84=AV('pslam-84','1371178081968062684');
card(P+'psalm-84-baca-lawgiver',{
 title:"Psalm 84:6–7: The Valley of Baca & the 'Lawgiver' (Jerome & Augustine)",
 k:"Prophecies · Psalm 84",
 blurb:"Both Jerome and Augustine translate Psalm 84:7 (LXX 83:8) as 'the Lawgiver will give blessings'—right alongside the Valley of Baca (Makkah).",
 claim:"Rendering the Hebrew word mōreh in Psalm 84:6–7 as 'lawgiver' (rather than 'early rain') is a modern Muslim distortion.",
 tree:N(P84,
  "Reading 'lawgiver' in Psalm 84:6–7 (connected to the Valley of Baca) is an apologetic invention.",
  "Centuries before Islam, both Jerome and Augustine explicitly translated and expounded the verse as 'the Lawgiver (legislator) will give blessings' / 'He who gave the law will give blessing'—confirming the 'lawgiver' reading is rooted in ancient Christian and Septuagint/Vulgate exegesis.",
  "Jerome & Augustine on Psalm 84:7 (LXX 83:8)",
  ["Jerome's translation & homily: Jerome renders the verse 'For the lawgiver will give blessings' (Etenim benedictionem dabit legislator) and builds his exposition around God/the Lawgiver setting the Valley of Tears (Baca) as an arena where believers prove their strength and go 'from strength to strength.'",
   "Augustine's Exposition on Psalm 84 (sec. 11): Augustine independently confirms the exact same reading: 'Blessing shall he give,' he says, 'who gave the law.'",
   "Apologetic significance: Since top patristic authorities read 'lawgiver' directly in the Baca passage, Christians cannot dismiss the 'lawgiver' reading in Psalm 84 as an Islamic fabrication."],
  ["Psalm 84:6–7 (LXX 83:7–8)","Jerome on Psalm 84","Augustine, Exposition on Psalm 84, sec. 11"],
  [],
  {facts:[["Psalm","Psalm 84:6–7 (LXX 83:7–8)"],["Patristic 1","Jerome: 'the Lawgiver' (legislator)"],["Patristic 2","Augustine: 'he who gave the law'"],["Implication","Not a Muslim invention"]],
   quotes:[
    {by:"Jerome on Psalm 84",en:"For the lawgiver will give blessings... This lawgiver, our contest-director, willed that we strive solely so that He might bless us.",ref:"Homilies on the Psalms (Ps 84)"},
    {by:"Augustine on Psalm 84",en:"'Blessing shall he give,' says he, 'who gave the law.'",ref:"Exposition on Psalm 84, §11"}]}),
 sum:"Jerome and Augustine both read Psalm 84's Baca verse as 'the Lawgiver will give blessings,' proving the lawgiver rendering is patristic rather than a Muslim invention."});

/* 15. #große-nation-ishamel-ismael */
const GN=AV('große-nation-ishamel-ismael','1403819947439816816');
card(P+'ishmael-great-nation-genesis-17',{
 title:"Genesis 17, Deut 18 & Gal 4: Ishmael as a 'Great Nation' & Jerome's Capitulation",
 k:"Prophecies · Genesis 17 & Ishmael",
 blurb:"Deut 4 defines a 'great nation' as an upright people with a divine law; Bede notes Ishmael's empire; 1 Sam 2:30 proves covenants can be revoked; Jerome admits Ishmael was a child of promise.",
 claim:"God's covenant belonged exclusively to Isaac (Gen 17:21), 'from among your brothers' (Deut 18) means Israelite only, and Ishmael was excluded from the promise (Gal 4).",
 tree:N(GN,
  "Genesis 17:21 restricts the covenant forever to Isaac, Deuteronomy 18:18 restricts the prophet to Israel, and Galatians 4 excludes Hagar's son Ishmael from the promise.",
  "Every pillar of that exclusion collapses under biblical and patristic scrutiny: Deuteronomy 4 defines a 'great nation' as a God-worshiping people with a righteous lawbook—fulfilled by Ishmael's descendants only with Islam; 1 Samuel 2:30 proves an 'everlasting' covenant can be revoked upon disobedience (Matt 21:43; 22:7); Acts 3, LXX, and Samaritan Pentateuch lack the Masoretic restriction in Deut 18; and Jerome himself admits in Galatians 4 that Ishmael was 'begotten according to promise' and capitulates to anyone who can prove otherwise.",
  "Genesis 17:18–20, Deuteronomy 4 & Bede on Ishmael",
  ["Two covenants in Genesis 17: Genesis 17 establishes first a universal covenant of circumcision for Abraham and all his household/seed, and second a specific covenant with Isaac (in which Abraham himself is not even included since he is not Isaac's descendant).",
   "Abraham's prayer & God's promise (Gen 17:18, 20): Rashi and the Benson Commentary confirm Abraham's prayer ('O that Ishmael might live before You') asks that Ishmael live uprightly in covenant obedience. God answers: 'As for Ishmael, I have heard you... I will make him a great nation.'",
   "Biblical definition of 'great nation' (Deut 4:6–8; Exod 32:10): Moses explicitly defines a 'great nation' as a wise people having God near them and possessing 'righteous statutes and judgments' (a lawbook). Thus God's promise to make Ishmael a 'great nation' in response to Abraham's prayer entails an upright, God-worshiping nation with a revealed law—historically fulfilled only in the 7th century with Islam.",
   "Bede (730 CE) on Genesis 16:12: Writing at the height of early Islamic history, the Venerable Bede notes that Ishmael's descendants ('the wandering Saracens') now hold 'the whole length of Africa, the greater part of Asia, and some of Europe'—confirming the explosive reality of Ishmael's rise."],
  ["Genesis 16:12–15; 17:18–21","Deuteronomy 4:6–8; Exodus 32:10","Bede (730 CE) on Genesis 16:12","Rashi & Benson Commentary on Genesis 17:18"],
  [
   N(GN,
    "Doesn't 'from among your brothers' in Deuteronomy 18:15, 18 prove the prophet had to be an Israelite?",
    "Only if you rely on a Masoretic expansion! Earlier witnesses—Acts chapter 3, the Septuagint (LXX), and the Samaritan tradition—read 'from the midst of your brothers' without the extra 'from you / from your midst,' leaving the door wide open to Israel's brothers, the Ishmaelites.",
    "Deut 18:15/18: Masoretic Expansion vs. Acts 3, LXX & Samaritan",
    ["Textual variant: The Masoretic text reads 'from your midst, from you, from your brothers,' which the 'Orthodox Muslim' notes against Dale Glover is a later expansion.",
     "Earlier witnesses: Acts 3:22, the Greek Septuagint, and the Samaritan Pentateuch read simply 'from the midst of your brothers'—meaning a Christian apologist defending the narrow Israelite reading must argue against Peter in Acts 3!"],
    ["Deuteronomy 18:15, 18 (MT vs. LXX / Samaritan)","Acts 3:22"]),
   N(GN,
    "Doesn't Genesis 17:21 say God's covenant with Isaac is an 'everlasting covenant' that can never be transferred?",
    "1 Samuel 2:30 and 1 Kings 2:27 prove God explicitly revokes an 'everlasting' promise when its holders rebel—and Matthew 21:43 and 22:7 announce that exact transfer after 70 CE, disqualifying Paul's pre-70 Gentile mission in favor of Islam.",
    "Covenant Revocation (1 Sam 2:30) & Post-70 CE Chronology (Matt 22:7)",
    ["1 Samuel 2:30 & 1 Kings 2:27: Against the claim that 'everlasting' covenants (like Phinehas's priesthood in Numbers 25) cannot be annulled, God expressly revokes Eli's perpetual priestly promise ('Far be it from Me!'), executed by Solomon in 1 Kings 2:27—proving divine abrogation when conditions are violated.",
     "Annulling Isaac's exclusivity & post-70 CE timing: Dean notes Israel broke the conditional covenant (killing prophets, rejecting the Messiah), triggering Matt 21:43's transfer to a new singular ethnos (nation) and Matt 3:9's raising new children of Abraham. Crucially, Matt 22:7 places the destruction of Jerusalem (70 CE) *before* the new call goes out—ruling out Paul's Gentile mission (pre-70 CE) and aligning with Islam (post-70 CE), fulfilling both literal Ishmaelite descent and spiritual faith."],
    ["Genesis 17:21; 22","1 Samuel 2:30; 1 Kings 2:27; Numbers 25","Matthew 3:9; 21:43; 22:7"]),
   N(GN,
    "Doesn't Paul in Galatians 4 exclude Ishmael as a slave-child not born of promise?",
    "In his Commentary on Galatians 4, Jerome himself admits it is 'of the utmost difficulty' to exclude Ishmael because God's own words show Ishmael too was 'begotten according to promise,' invents an ad-hoc split between 'blessing' and 'covenant,' admits Ishmael never 'persecuted' Isaac in Genesis 21:9, and literally capitulates if anyone can offer a better answer!",
    "Jerome's Commentary on Galatians 4: Full Patristic Admission",
    ["Ishmael born of promise: Jerome quotes Gen 16 and Gen 17:18–20 ('Behold, I have heard you, and behold, I have blessed him... I will make him a great nation') and concedes: 'From this it is obvious that by the words of God Himself, Ishmael too was begotten according to promise.'",
     "Ad-hoc rescue & capitulation: Unable to deny the text, Jerome proposes an invented distinction between 'blessing/bequest' and 'covenant/inheritance'—then immediately adds: 'Let this suffice for now, insofar as the mediocrity of our ability permits. For the rest, if anyone can find something greater... let him rather be heard.'",
     "No 'persecution' in Genesis 21:9: Jerome notes Marcion and Manichaeus kept Galatians 4 in their codex because they felt it undermined orthodox literalism—and Jerome openly admits: 'I do not think one can find where Ishmael persecuted Isaac; only that when the Egyptian's son was playing with Isaac, Sarah was indignant... And surely simple play between children does not merit expulsion.' Paul's claim of rivalry over birthright is introduced by Jerome with 'perhaps' (forte)—pure speculation without biblical basis."],
    ["Jerome, Commentary on Galatians 4","Genesis 16; 17:18–20; 21:9"],[],
    {quotes:[
     {by:"Jerome, Commentary on Galatians 4",en:"It is of the utmost difficulty to show that Isaac alone, born of Sarah, was begotten of the promise, and not also Ishmael, descended from the Egyptian handmaid Hagar... From this it is obvious that by the words of God Himself, Ishmael too was begotten according to promise.",ref:"Commentary on Galatians 4"},
     {by:"Jerome's Capitulation (Galatians 4)",en:"For the rest, if anyone can find something greater, how Ishmael, born of the handmaid, is not the son of promise, but Isaac, born of the free woman—let him rather be heard.",ref:"Commentary on Galatians 4"}]})
  ],
  {facts:[["Key Texts","Gen 16:12; 17:18–21; Deut 4:6–8; 1 Sam 2:30"],["Textual Witness","Acts 3 / LXX / SP lack MT Deut 18 addition"],["Patristics","Bede (730 CE) & Jerome on Gal 4"],["Chronology","Matt 22:7 post-70 CE call"]],
   visual:{kind:'compare',
    left:{title:"Apologetic Claim (Isaac Only)",items:["Gen 17:21 is unconditional & unbreakable","Deut 18 restricts the prophet to Israel","Galatians 4 bars Ishmael from promise"]},
    right:{title:"Biblical & Patristic Reality",items:["1 Sam 2:30 proves 'everlasting' promises can be revoked","Acts 3, LXX, & SP lack MT's Deut 18 restriction","Jerome admits Ishmael was 'begotten of promise' & capitulates"]}}}),
 sum:"Deuteronomy 4 defines a 'great nation' as a law-bearing monotheistic people, 1 Samuel 2:30 proves conditional covenants can be annulled, and Jerome himself confesses Ishmael was begotten of promise—converging on Islam."});

/* 16. #zefanja-3 */
const ZF=AV('zefanja-3','1408598680151392306');
card(P+'zephaniah-3-9-pure-language',{
 title:"Zephaniah 3:9: One 'Pure Language' for All Nations Shoulder to Shoulder",
 k:"Prophecies · Zephaniah 3",
 blurb:"After judgment on Jerusalem (3:1–8), God gives the peoples 'pure lips' (śāfāh bərūrāh) to worship Him in one language—explained by Chrysostom & Theodoret of Cyrus.",
 claim:"Zephaniah 3:9 was fulfilled by Christianity or merely describes spiritual unity without a unified liturgical tongue.",
 tree:N(ZF,
  "Zephaniah 3:9's 'pure language' simply refers to Christian conversion across the world, even though Christians worship in many different languages.",
  "Zephaniah 3:1–8 first indicts Jerusalem's corrupt leadership and announces judgment—then 3:9 pivots to God giving the nations 'pure speech' (MT: śāfāh bərūrāh, 'pure lip/language') to call on the LORD's name and serve Him 'shoulder to shoulder' (under one yoke). John Chrysostom confirms worship shifts away from Jerusalem to every place on earth, and Theodoret of Cyrus (citing Aquila, Theodotion, and Symmachus) explains it as pure monotheistic speech—yet unlike multi-lingual Christianity, only Islam unites all nations in one liturgical language (Arabic) shoulder to shoulder in daily prayer.",
  "Context, Chrysostom & Theodoret on Zephaniah 3:9",
  ["Judgment → Purification → Global Worship (Zephaniah 3:1–20): Verses 1–8 denounce Jerusalem as a 'rebellious, defiled, oppressing city' whose princes, judges, prophets, and priests act treacherously, warning of coming judgment. Verse 9 marks the turning point: God gives the peoples a 'pure language' (v. 9), brings offerings even from Cush/Ethiopia (v. 10), leaves a humble remnant trusting in God (vv. 11–13), and restores joy and gathering (vv. 14–20).",
   "Masoretic wording (Zephaniah 3:9): 'For then I will give to the peoples a pure speech [lip], that all of them may call upon the name of the LORD and serve Him shoulder to shoulder.'",
   "John Chrysostom (Demonstration Against the Pagans 6.9): Emphasizes that all nations will serve under one yoke and worship God 'not in Jerusalem, but everywhere in the world' without going up to Jerusalem—yet Christians pray in diverse languages rather than one unified sacred tongue.",
   "Theodoret of Cyrus (5th c. CE): Notes that Aquila and Theodotion translate 'chosen lips to all nations' and Symmachus 'purifying lips to the peoples,' explaining that 'pure lips' means lips that cease invoking many gods and invoke only the one true God (linking Isa 32:4 and 35:6)—a description fitting Islam's global, single-language monotheistic worship (lā ilāha illā Allāh and Arabic ṣalāh shoulder to shoulder).",
   "Archived channel PDF: Includes Zefanja_3_9_Alle_Belege_Ueberblick.pdf (241.80 KB)."],
  ["Zephaniah 3:1–20 (MT)","Isaiah 32:4; 35:6","John Chrysostom, Demonstration Against the Pagans 6.9","Theodoret of Cyrus (citing Aquila, Theodotion, Symmachus)"],
  [],
  {facts:[["Text","Zephaniah 3:9 (MT: śāfāh bərūrāh)"],["Patristic 1","Chrysostom: worship everywhere, one yoke"],["Patristic 2","Theodoret: pure monotheistic lips"],["Archived PDF","Zefanja_3_9_Alle_Belege_Ueberblick.pdf"]],
   quotes:[
    {by:"John Chrysostom, Demonstration Against the Pagans 6.9",en:"No longer, he said, will people worship Him in Jerusalem, but everywhere in the world. They will no longer have to go up to Jerusalem, but each remains in his own place and offers his worship there.",ref:"Dem. Against the Pagans 6.9"},
    {by:"Theodoret of Cyrus (5th c. CE)",en:"By 'pure lips' are meant those lips that do not invoke many gods, but the one true God... Thus He will convert those peoples rooted in polytheism, choose and purify them, so that all call upon the name of the Lord and stand united in His service.",ref:"Commentary on Zephaniah 3:9"}]}),
 sum:"Zephaniah 3:9's promise—after Jerusalem's judgment—that all nations will invoke the One God with one 'pure lip' and serve Him shoulder to shoulder outside Jerusalem fits Islam's Arabic liturgical unity far better than multi-lingual Christianity."});

/* 17. #exodus-23 */
const EX=AV('exodus-23','1416386491667710104');
card(P+'exodus-23-abrahamic-borders',{
 title:"Exodus 23:31 & Gen 15:18: Were the River-to-Euphrates Borders Fulfilled by Solomon or Islam?",
 k:"Prophecies · Exodus 23 & Genesis 15",
 blurb:"Chrysostom saw the vast Abrahamic territory as a sign of the promise's greatness; 1 Kings 4:21 fails linguistically, textually (omitted in LXX), and archaeologically, while Joshua 21:43–45 points elsewhere or leaves Nehemiah 9:8 praying.",
 claim:"The border promise from the Nile/River of Egypt to the Euphrates (Gen 15:18; Exod 23:31) was already fulfilled under Solomon (1 Kings 4:21) or Joshua (Josh 21:43–45).",
 tree:N(EX,
  "God's territorial promise from the Nile to the Euphrates (Genesis 15:18; Exodus 23:31) was already fulfilled by Joshua (Joshua 21:43–45) and Solomon (1 Kings 4:21)—so it cannot point to the Islamic era.",
  "John Chrysostom treated Abraham's vast territorial promise as a measure of how immense the Abrahamic blessing would be—and historically, only the Muslim descendants of Abraham (via Ishmael) held the entire span from the Nile to the Euphrates. In contrast, 1 Kings 4:21 is absent from the Septuagint, refers contextually to a southern Philistine stream rather than the Euphrates, and is rejected as unhistorical by modern biblical scholars and archaeologists (Barton, Finkelstein, Silberman, Gadot)—while Nehemiah 9:8 shows post-exilic Israel still praying for the Abrahamic covenant.",
  "1 Kings 4:21 Refuted: Linguistics, LXX & Archaeology",
  ["Chrysostom & historical reality: John Chrysostom (in Theosis/homily) reads the vast territory promised to Abraham's seed as an image showing how immense the Abrahamic promise is; historically, it was the Muslim community—not ancient Israel—that ruled the entire Nile-to-Euphrates span.",
   "Linguistic limit of 1 Kings 4:21 ('min-ha-nahar'): The MT reads 'from the river to the border of Egypt,' without naming the Euphrates. The surrounding context names Gaza and Philistine towns, pointing to a southern coastal stream rather than northern Syria or Damascus.",
   "Septuagint omission & scholarly consensus: Brenton's Septuagint completely omits 1 Kings 4:20–21 (marked OMITTED TEXT), indicating a late Masoretic insertion. John Barton (Oxford Bible Commentary, 2010) notes: 'the borders of the state of Israel were probably never as extensive (1 Kings 4:21 is hardly a sober historical statement).' Israel Finkelstein & Neil Silberman (The Bible Unearthed, 2001) call Solomon's grand empire an exilic 'dream of a past golden age.'",
   "Archaeological vacuum: Archaeologist Yuval Gadot remarks that 10th-century BCE Jerusalem was tiny ('an archaeological vacuum—I could pack everything we have from this time in a matchbox'), with only a few hundred inhabitants—incapable of ruling to the Euphrates. Neither Egyptian (Shoshenq I, c. 925 BCE, claiming only Canaan's city-belt) nor Assyrian inscriptions record any Israelite Euphrates empire; Damascus and Aram remained independent.",
   "Nehemiah 9:8 (LXX): Centuries after Solomon, with Israel barely holding the land, Nehemiah still invokes the Abrahamic land covenant in prayer ('You made a covenant with him to give the land... and to his seed, and confirmed Your words'), raising the sharp question: if it had already been finally completed under Solomon, why did Nehemiah pray as though its realization remained open?"],
  ["Exodus 23:31; Genesis 15:18","1 Kings 4:20–21 (MT vs. LXX)","Joshua 21:43–45","Nehemiah 9:8 (LXX)","John Barton (2010); Finkelstein & Silberman (2001); Yuval Gadot","John Chrysostom"],
  [
   N(EX,
    "Doesn't Joshua 21:43–45 say 'not one word failed' and God gave Israel 'all the land He swore to their fathers'—referring directly to Genesis 15:18?",
    "Joshua 21:43–45 explicitly uses the oath formula ('swore to their fathers,' Gen 15:18—the first land oath in the Pentateuch, naming the Patriarchs Abraham, Isaac, and Jacob, never Moses), creating an internal biblical tension with Israel's actual borders unless the broader Abrahamic promise encompasses Ishmael's line or was idealistically stylized.",
    "The Joshua 21:43–45 vs. Genesis 15:18 Argument",
    ["'Swore to their fathers' = Genesis 15:18: Very few verses use the verb 'to swear' (nišbaʿ) for land; Genesis 15:18 is the very first divine oath regarding land—before Moses, Sinai, or Numbers 34.",
     "'Fathers' = Patriarchs, not Moses: The Pentateuch never calls Moses 'father'; 'fathers' means Abraham, Isaac, and Jacob, pointing squarely back to Genesis.",
     "Covenant formula ('not one word failed'): This phrasing belongs to overarching covenant promises (Abraham, David), not tactical border sketches—yet historically and archaeologically Israel never held the Nile-to-Euphrates borders of Gen 15:18, whereas Abraham's Ishmaelite descendants did."],
    ["Joshua 21:43–45","Genesis 15:18","Numbers 34"],[],
    {visual:{kind:'compare',
      left:{title:"Solomon / Joshua Claim",items:["LXX omits 1 Kings 4:20–21 completely","Barton: 'hardly a sober historical statement'","10th-c. BCE Jerusalem: 'fits in a matchbox' (Gadot)","Nehemiah 9:8 still invokes covenant centuries later"]},
      right:{title:"Abrahamic Fulfillment in Islam",items:["Gen 15:18 & Exod 23:31 cover Nile to Euphrates","Chrysostom sees it as measure of Abraham's vast promise","Muslim descendants of Abraham held the entire span","Reconciles vast promise with real history"]}}})
  ],
  {facts:[["Texts","Exod 23:31; Gen 15:18; 1 Kgs 4:21; Josh 21:43–45"],["Text Criticism","LXX omits 1 Kings 4:20–21"],["Scholars","Barton (Oxford), Finkelstein, Silberman, Gadot"],["Post-Exilic","Nehemiah 9:8 still invokes the covenant"]]}),
 sum:"1 Kings 4:21's Euphrates empire is omitted in the Septuagint and rejected by modern archaeology (Barton, Finkelstein, Gadot), leaving Abraham's Nile-to-Euphrates promise historically realized by his Ishmaelite/Muslim descendants."});

/* 18. #juden-rabbiner-aussagen */
const JR_R=AV('juden-rabbiner-aussagen','1443356601577898015');
card(P+'rabbinic-witnesses-maimonides-leibowitz',{
 title:"Jewish Authorities on Muḥammad ﷺ & Islam: Maimonides & Yeshayahu Leibowitz",
 k:"Prophecies · Rabbinic Witnesses",
 blurb:"Yeshayahu Leibowitz cites Maimonides (Rambam) affirming that Muḥammad ﷺ uprooted idolatry from much of humanity and that Islam's monotheism has 'no blemish.'",
 claim:"Jewish authorities universally view Muḥammad's ﷺ mission and Islamic monotheism as false or idolatrous.",
 tree:N(JR_R,
  "Traditional Jewish thinkers dismiss Islam's monotheism and Muḥammad's ﷺ role as religiously defective.",
  "Leading Jewish philosopher-scientist Yeshayahu Leibowitz (Jerusalem, 2000, Talks on Parashat Lech Lecha 19:28) highlights the ruling of Maimonides (Rambam) himself: Muḥammad uprooted idolatry from a vast portion of humanity, and the faith of the Ishmaelites has 'no blemish regarding the unity of God.'",
  "Maimonides (via Yeshayahu Leibowitz, Lech Lecha)",
  ["Maimonides's verdict on Islamic tawḥīd: Rambam emphasizes that the faith of the Ishmaelites (Muslims) is completely free of any flaw or blemish regarding divine unity (ייחוד / monotheism).",
   "Acknowledgment of Muḥammad's ﷺ historical achievement: Leibowitz states explicitly that Muḥammad uprooted idolatry (עבודה זרה) from a very large part of humankind—confirming from within Jewish thought that Islam fulfilled Abraham's anti-idolatrous mission across the nations."],
  ["Yeshayahu Leibowitz, Talks on the Parasha, Lech Lecha (Jerusalem, 2000), 19:28","Maimonides (Rambam) on the faith of the Ishmaelites"],
  [],
  {facts:[["Authorities","Maimonides (Rambam) & Yeshayahu Leibowitz"],["Work","Talks on the Parasha, Lech Lecha 19:28 (2000)"],["Key Point","Islam uprooted idolatry & has flawless tawḥīd"]],
   quotes:[
    {by:"Yeshayahu Leibowitz (citing Maimonides)",en:"You surely know that Muḥammad uprooted idolatry from among a very great part of humanity, and this fact the Rambam (Maimonides) strongly emphasizes, saying of the faith of the Ishmaelites that it has no blemish with respect to the belief in the unity [of God].",ref:"Talks on the Parasha, Lech Lecha 19:28 (Jerusalem, 2000)"}]}),
 sum:"As Yeshayahu Leibowitz notes citing Maimonides, even foremost Jewish legal-philosophical authority admits Muḥammad ﷺ eradicated idolatry across vast nations and that Islam's monotheism has no blemish."});

/* 19. #numeri-24-23 */
const N24=AV('numeri-24-23','1443391458915913811');
card(P+'numbers-24-23-balaam-ishmael',{
 title:"Numbers 24:23–24: Balaam's Oracle, 'Mishumo El' & Rabbinic Witnesses to Ishmael",
 k:"Prophecies · Numbers 24",
 blurb:"Pirkei de-Rabbi Eliezer and Midrash HaGadol tie Numbers 24:23 ('who shall live when God establishes him') directly to Ishmael's kingdom—while Irenaeus reads it as future prophecy.",
 claim:"Numbers 24:17–24 applies solely to ancient Israelites or exclusively to Jesus, and has nothing to do with Ishmael or Islam.",
 tree:N(N24,
  "Balaam's oracle in Numbers 24 refers only to Israel or Jesus, not Ishmael—and verse 23 is purely negative or purely ancient.",
  "Balaam prophesies from Moab (east of the Jordan) concerning multiple Semitic nations (including 'Eber' in v. 24), and Numbers 24:23 uses the enigmatic phrase 'mishumo El'—which Pirkei de-Rabbi Eliezer and Midrash HaGadol explicitly interpret as God placing His Name ('El') upon Ishmael and foretelling the rule of Ishmael/Islam! Meanwhile, Irenaeus refutes the 'purely ancient' objection by applying v. 23 directly to a future messianic fulfillment.",
  "Balaam's Geography, 'Mishumo El' & Multi-Level Fulfillment",
  ["Geography & 'Eber' (v. 24): Balaam delivers his oracles from Moab (Num 22:1, east of the Jordan, in the Arabian borderlands) and explicitly addresses multiple surrounding peoples (Moab, Edom, Amalek, Kenites, Asshur). 'Eber' in v. 24 can encompass Hebrews in the broader sense, including the Ishmaelite line (Gen 17:20).",
   "Temporal distance & typological updating: 'I see him, but not now; I behold him, but not near' (v. 17) signals distant fulfillment. Christian exegesis itself reads v. 17 messianically (far beyond antiquity), and Qumran texts already update 'Kittim' (v. 24) to Rome—establishing multi-layered prophetic updating.",
   "Linguistic 'El' link (mishumo El): Only Israel and Ishmael (Yishma-El) carry the divine theophoric 'El' prominently in their tribal/national names. Reading 'mishumo El' as 'when El establishes/exalts him' reflects the Torah's own use of theological wordplay (paronomasia, cf. Gen 17:19 Isaac; Moses)."],
  ["Numbers 24:17–24; 22:1","Genesis 17:19–20","Pirkei de-Rabbi Eliezer, Balak 11","Midrash HaGadol","Irenaeus, Lost Fragments 15","Targum Jerusalem, Targum Jonathan & Tafsir Rasag (Saadia Gaon)"],
  [
   N(N24,
    "Did early Jewish and Christian commentators read Numbers 24:23 as a distant prophecy—or even explicitly link it to Ishmael?",
    "Both! Pirkei de-Rabbi Eliezer and Midrash HaGadol explicitly apply Numbers 24:23 to 'the rule of Islam / kingdom of Ishmael,' Targums and Saadia Gaon read it eschatologically, and Irenaeus (Lost Fragments 15) applies v. 23 to future fulfillment—destroying the excuse that it is merely ancient history.",
    "Rabbinic Midrashim, Targums & Irenaeus on Num 24:23",
    ["Pirkei de-Rabbi Eliezer (Balak 11): Balaam states that among the seventy nations/languages, God placed His Name only upon Israel—and upon Ishmael: 'Since the Holy One, blessed be He, made the name of Ishmael equal to His Name, woe to him who will live in his days: מִי יִחְיֶה מִשֻּׂמוֹ אֵל (Who shall live when God establishes him!).' The Midrash concludes: 'Woe to him who lives under the rule of Islam, the descendants of Ishmael.'",
     "Midrash HaGadol (Yemenite tradition): Similarly records: 'Woe to him who lives in the kingdom of Ishmael.'",
     "Targum Jerusalem, Targum Jonathan & Tafsīr Rasag (Saadia Gaon): All treat Numbers 24:23 as a major eschatological intervention when 'the word of the LORD is revealed to reward the righteous and punish the wicked, striking nations and kings.'",
     "Patristic turn-the-tables (Irenaeus, Lost Fragments 15): Irenaeus explicitly reads Numbers 24:23 as a future prophecy fulfilled only centuries later ('When Balaam spoke these things in parables in former times, he was not recognized... Wherefore foreseeing these things and marveling, he cried out: Woe! Woe! Who shall live when God brings these things to pass?'). Thus Christian apologists cannot dismiss Numbers 24:23 as strictly ancient or strictly negative."],
    ["Pirkei de-Rabbi Eliezer, Balak 11","Midrash HaGadol","Targum Jerusalem & Targum Jonathan","Saadia Gaon (Tafsīr Rasag)","Irenaeus, Lost Fragments 15"],[],
    {quotes:[
     {by:"Pirkei de-Rabbi Eliezer, Balak 11",en:"Since the Holy One, blessed be He, made the name of Ishmael equal to His Name, woe to him who will live in his days: 'Who shall live when God establishes him.' And therefore—woe to him who lives under the rule of Islam, the descendants of Ishmael.",ref:"Pirkei de-Rabbi Eliezer, Balak 11"},
     {by:"Irenaeus, Lost Fragments 15",en:"Wherefore, foreseeing these things and marveling at them, [Balaam] cried out: Woe! Woe! Who shall live when God brings these things to pass?",ref:"Lost Fragments 15 (newadvent.org/fathers/0134.htm)"}]})
  ],
  {facts:[["Text","Numbers 24:17–24 (mishumo El)"],["Rabbinic","Pirkei de-Rabbi Eliezer & Midrash HaGadol"],["Targums","Jerusalem, Jonathan & Saadia Gaon"],["Patristic","Irenaeus, Lost Fragments 15"]]}),
 sum:"Rabbinic midrashim (Pirkei de-Rabbi Eliezer, Midrash HaGadol) explicitly tie Numbers 24:23's 'mishumo El' to Ishmael's rise, while Irenaeus confirms the verse looks far beyond antiquity."});

/* 20. #asterius-urbanus */
const AU=AV('asterius-urbanus','1454238543550353610');
card(P+'asterius-urbanus-continuing-prophecy',{
 title:"Asterius Urbanus (ca. 180–200 CE): True Prophecy Continues Until the Parousia",
 k:"Prophecies · Early Church",
 blurb:"In refuting Montanism (preserved in Eusebius), Asterius Urbanus argues that genuine prophecy endures until Christ's final return—never claiming prophecy ended with Jesus or the Apostles.",
 claim:"Early orthodox Christians unanimously held that prophecy ceased completely after Jesus or the Apostles, ruling out any later prophet.",
 tree:N(AU,
  "In the early Church, prophecy was strictly closed after Jesus and the Apostles—no true prophet could ever appear afterward.",
  "Asterius Urbanus (ca. 180–200 CE, preserved in 10 fragments via Eusebius) refutes the Montanists not by claiming prophecy had ended, but by explicitly affirming that 'the Apostle holds that the gift of prophecy should continue in the whole Church until the time of the final coming' (Book III, §10) and challenging them to show orderly prophetic successors (Book III, §§9–10).",
  "How Asterius Urbanus Presupposes Ongoing Prophecy",
  ["Direct statement of continuing prophecy (Book III, §10): 'The Apostle holds that the gift of prophecy should continue in the whole Church until the time of the final coming [Parousia].' If prophecy ended with the Apostles, this statement would be false.",
   "Demanding prophetic succession (Book III, §10): Asterius challenges the Montanists: 'If... the women who joined Montanus had received the prophetic gift, let them show who among them succeeded Montanus and his women.' Demanding genuine successors presupposes that authentic prophecy can continue.",
   "Critiquing ecstatic form, not prophecy itself (Book III, §9): 'They will never be able to show that any of the prophets of the Old or New Covenant was carried away in ecstasy in this manner.' He rejects Montanus because his prophecies were ecstatic, disorderly, and un-ecclesiastical—had prophecy after Jesus been impossible, all these arguments would have been unnecessary."],
  ["Asterius Urbanus (ca. 180–200 CE), Fragments in Eusebius (Book III, §§9–10)"],
  [],
  {facts:[["Author","Asterius Urbanus (ca. 180–200 CE)"],["Source","10 fragments preserved in Eusebius"],["Target","Refuting Montanism ('New Prophecy')"],["Key Proof","Prophecy continues until the Parousia"]],
   quotes:[
    {by:"Asterius Urbanus (Book III, §10)",en:"The Apostle holds that the gift of prophecy should continue in the whole Church until the time of the final coming.",ref:"Book III, §10 (in Eusebius)"},
    {by:"Asterius Urbanus (Book III, §9)",en:"They will never be able to show that any of the prophets of the Old or New Covenant was carried away in this manner.",ref:"Book III, §9 (in Eusebius)"}]}),
 sum:"Far from teaching that prophecy ceased with the Apostles, Asterius Urbanus (ca. 180–200 CE) explicitly writes that prophecy continues until the final coming and only faults Montanism's ecstatic, disorderly form."});

/* 21. #pslam-74 */
const P74=AV('pslam-74','1468742567872172084');
card(P+'psalm-74-end-of-israelite-prophecy',{
 title:"Psalm 74:7–9: The Destruction of the Temple & the End of Israelite Prophecy",
 k:"Prophecies · Psalm 74",
 blurb:"Psalm 74 laments 'there is no longer any prophet, and none knows how long'—which Origen and Augustine apply not to Babylon (where Jeremiah, Ezekiel, Daniel, and 70 years existed) but to 70 CE Rome.",
 claim:"Psalm 74:7–9 merely describes the 6th-century BCE Babylonian exile and has nothing to do with prophecy leaving Israel after 70 CE.",
 tree:N(P74,
  "Psalm 74:7–9 simply laments the Babylonian destruction of the First Temple in 586 BCE.",
  "Two facts in Psalm 74:9 rule out the Babylonian exile: during Babylon's conquest, Israel still had great prophets (Jeremiah, Ezekiel, Daniel) AND knew the exact duration (70 years, Jer 25:11–12). Both Origen and Augustine therefore refer Psalm 74 to the Roman destruction of Jerusalem in 70 CE—when recognized prophets vanished from Israel and the duration remained unknown, marking a salvation-historical transition.",
  "Why Psalm 74:7–9 Fits 70 CE Rome (Origen & Augustine)",
  ["Three elements in Psalm 74:7–9: (1) devastation of the sanctuary, (2) 'there is no longer any prophet,' and (3) 'none among us knows how long it will last.'",
   "Babylonian exile ruled out: During the 6th-century BCE Babylonian crisis, Israel possessed active prophets (Jeremiah, Ezekiel, Daniel) and knew the exile's exact length—70 years (Jeremiah 25:11–12)—contradicting both clauses of verse 9.",
   "Roman destruction (70 CE) fits completely: After Rome destroyed the Second Temple in 70 CE, Israel had no recognized prophets, the duration of its Temple-less exile was unknown, and no immediate prophetic promise of rebuilding followed.",
   "Patristic witnesses: Early Christian theologians Origen and Augustine both explicitly applied Psalm 74 to the Roman period rather than the Babylonian exile—confirming the end of Israel's prophetic line as a sign of salvation-historical transition."],
  ["Psalm 74:7–9","Jeremiah 25:11–12","Origen & Augustine on Psalm 74"],
  [],
  {facts:[["Text","Psalm 74:7–9"],["Babylon Fails","Had Jeremiah, Ezekiel, Daniel & 70 yrs"],["70 CE Rome Fits","No prophets, unknown duration"],["Fathers","Origen & Augustine agree"]],
   quotes:[
    {by:"Psalm 74:9",en:"We do not see our signs; there is no longer any prophet, and there is none among us who knows how long.",ref:"Psalm 74:9"}],
   visual:{kind:'compare',
    left:{title:"Babylonian Destruction (586 BCE)",items:["Prophets present: Jeremiah, Ezekiel, Daniel","Duration known: 70 years (Jer 25:11–12)","Temple rebuilt shortly after"]},
    right:{title:"Roman Destruction (70 CE — Origen & Augustine)",items:["No recognized prophets left in Israel","Duration unknown ('none knows how long')","Marks transition of prophetic leadership"]}}}),
 sum:"Backed by Origen and Augustine, Psalm 74:7–9's 'no longer any prophet' and unknown duration fit 70 CE Rome—not Babylon—signaling the end of Israelite prophethood and a covenantal shift."});

/* 22. #chroniken-islam-7-9-jahrhundert */
const CH79=AV('chroniken-islam-7-9-jahrhundert','1493738625916080129');
card(P+'chronicles-7th-9th-century-theophanes',{
 title:"7th–9th Century Chronicles & Witnesses: Theophanes & Syriac 'Munaḥmanna'",
 k:"Prophecies · Early Chronicles",
 blurb:"Byzantine chronicler Theophanes (758–817 CE) reports Jews initially saw Muḥammad ﷺ as the awaited Messiah; Karen Armstrong notes Syriac 'al-Munaḥmanna' for Paraclete.",
 claim:"No early non-Muslim chroniclers or modern historians note messianic expectations around Muḥammad ﷺ or a Syriac bridge to the Paraclete.",
 tree:N(CH79,
  "Early non-Muslim chronicles never linked Muḥammad's ﷺ arrival to Jewish messianic expectations, and Syriac Christianity offers no link between Paraclete and Aḥmad/Muḥammad.",
  "Byzantine chronicler Theophanes the Confessor (758–817 CE) explicitly records that at Muḥammad's ﷺ arrival, 'the wayward Jews had thought that he was the Messiah expected by them,' while historian Karen Armstrong notes that Paraclete was rendered into Syriac as al-Munaḥmanna (connected to 'Muḥammad') and could be translated 'Aḥmad.'",
  "Theophanes (758–817 CE), Syriac Munaḥmanna & Archived Media",
  ["Theophanes the Confessor (758–817 CE): Explicitly attests how deeply Muḥammad's ﷺ appearance resonated with contemporary Jewish prophetic expectations—that Jews at the outset took him for their long-awaited Messiah.",
   "Karen Armstrong on Syriac Paraclete: Notes that the Gospel term Paraclete was translated into Syriac as 'al-Munaḥmanna' (a word linked to 'Muḥammad') and observes that Paraclete could be rendered 'Aḥmad'—confirming the philological/Syriac bridge documented since Ibn Isḥāq even if Armstrong herself interprets it secularly.",
   "Archived channel media (to extract/inspect): Two PDFs (Unbenanntes_Dokument_-_2026-04-15T002108.765.pdf, 228.64 KB; Unbenanntes_Dokument_-_2026-05-10T132331.271.pdf, 489.31 KB) and three images (image0.jpg, image1.jpg, watermarked-image_1.png)."],
  ["Theophanes the Confessor (758–817 CE), Chronographia","Karen Armstrong on Syriac Paraclete / al-Munaḥmanna","Averroes #chroniken-islam-7-9-jahrhundert (2 PDFs, 3 images)"],
  [],
  {facts:[["Chronicler","Theophanes (758–817 CE)"],["Historian","Karen Armstrong on al-Munaḥmanna"],["Channel Media","2 PDFs + 3 images archived"]],
   quotes:[
    {by:"Theophanes the Confessor (758–817 CE)",en:"At the beginning of his (Muḥammad's) arrival, the wayward Jews had thought that he was the Messiah expected by them.",ref:"Chronographia"}]}),
 sum:"Byzantine chronicler Theophanes (758–817 CE) testifies that Muḥammad's ﷺ arrival immediately stirred Jewish messianic recognition, while Karen Armstrong acknowledges the Syriac al-Munaḥmanna / Aḥmad bridge."});

})();
