/* PDF Enrichment Batch 2 — 2026-11-21.
   Integrates 16 extracted Discord research PDFs across 11 existing target cards (debate trees & explainers)
   plus all 31 rendered JPEG page screenshots in shots/pdf2-*.jpg. */
(()=>{
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src,facts:m.facts,quotes:m.quotes,visual:m.visual,shots:m.shots}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('pdf-enrichment2: no card',key); };

const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const AVN=n=>({credit:'Averroes · #'+n+' (translated from German)'});
const IA=(sub,id)=>({credit:'Islamic Apologetics · '+sub,link:'https://discord.com/channels/1514269918978248796/'+id});
const S=(src,cap)=>({src:'shots/'+src,cap});

/* ============================================================================
   1. islam/morality/marriage/aisha/quran-65-4
      (a) muendigkeit (Maturity before marriage dossier, 25 proofs, 122–292 AH)
      (b) kinderehe-neufunde + kinderehe-gelehrte (Corpus up to 300 AH + Classical Jurists)
   ============================================================================ */
const Q654=AV('sure-65-4-tafsir','1286008976613572690');

add('islam/morality/marriage/aisha/quran-65-4',N(Q654,
 "Early Islamic law had no restrictions on child marriage—children could be bound unconditionally by contracts before maturity.",
 "Honest scholarship concedes upfront that no prophetic ḥadīth up to 300 AH issues a blanket ban on marrying minors, and collections like al-Dārimī and al-Shāfiʿī even carry chapter headings presupposing the practice. Yet an OpenITI corpus dossier of 25 ranked proofs (122–292 AH) proves that early Islamic jurisprudence built in the exact legal premises—contractual incapacity, suspended ratification, burden of proof on the adult, age-15 majority, enforceable refusal of consummation, and Qurʾānic rushd—from which a prohibition systematically follows.",
 "Maturity Before Marriage Dossier (25 Proofs · 122–292 AH)",
 ["Core Proofs 01–03 (Muḥammad al-Shaybānī, d. 189 AH, al-Aṣl): In the oldest surviving Ḥanafī legal work, al-Shaybānī states twice as the operative legal rationale (ratio decidendi) in the chapter on marriage objections: 'For the marriage of a child is invalid. And it is not like the marriage of an adult.' He establishes pure ratification doctrine: a childhood contract remains suspended (ineffective) unless consummated after both reach maturity with mutual consent—without adult ratification, no valid marriage or dower (mahr) obligation exists. Procedurally, the burden of proof lies on the adult: if a woman upon reaching maturity declares 'You married me when I was a child' and the husband denies it, her word prevails, no marriage exists, and 'he owes no dower in any of these cases.'",
  "Core Proofs 04–05 (al-Shāfiʿī, d. 204 AH, al-Umm): Deriving a universal threshold from prophetic practice, al-Shāfiʿī sets 15 as the general age of majority and declares consensus: 'Penal norms apply to one who has completed fifteen... And I know no one who disputes this.' Meanwhile, paternal guardianship is strictly fiduciary, not proprietary: 'As for the minor girl, she does not dispose of her property—and her father has no right to make concessions from her property.' He voids any paternal discount on her dower ('void, like his gift')—a father cannot give away a single dirham of hers.",
  "Proofs 06–10 (A child is not a legal person): Across the earliest corpus—Zayd b. ʿAlī (d. 122 AH, al-Musnad, the oldest text in the dossier), al-Shaybānī (al-Aṣl), and al-Ṭayālisī (d. 204 AH, no. 90)—'the pen is lifted from the child until it reaches maturity/reason.' A child's intent counts legally as mistake (al-Shaybānī; al-Zuhrī d. 124; Qatāda d. 117 in ʿAbd al-Razzāq 18065–18066). The threshold is cognitive awareness of rights and duties (ʿAbd al-Razzāq 18064; Sufyān al-Thawrī d. 161). A child cannot validly buy or sell (al-Zuhrī & Qatāda, ʿAbd al-Razzāq 15327; al-Shaʿbī & Ibrāhīm al-Nakhaʿī 15328–15329; al-Ḥasan al-Baṣrī in Ibn Abī Shayba 20822), and legal capacity is indivisible (al-Shaʿbī d. ~104 AH, Ibn Abī Shayba 20821: 'Were his buying and selling valid, his manumission of a slave would be valid'). One who cannot spend a coin cannot enter a lifelong contract.",
  "Proofs 11–15 (Prophetic age 15 & state register law): Ibn ʿUmar was turned back by the Prophet ﷺ at Uḥud aged 14 and admitted at the Trench aged 15 (al-Shāfiʿī al-Musnad; Saʿīd b. Manṣūr 2464–2465 'When does a boy go to war?'; al-Bazzār d. 292, 5618–5619). Leading philologist Abū ʿUbayd al-Qāsim b. Sallām (d. 224 AH, Gharīb al-Ḥadīth) states the general rule: 'The boundary between childhood and maturity is fifteen—unless puberty occurs earlier.' Caliph ʿUmar b. ʿAbd al-ʿAzīz (d. 101 AH, via Nāfiʿ in al-Shāfiʿī al-Musnad & al-Umm) turned this into administrative law for governors ('the dividing line between minor and adult'). ʿAṭiyya al-Quraẓī (al-Ṭayālisī 1284; Ibn Hishām; Abū ʿUbayd) shows physical puberty decided life and death, and al-Shāfiʿī's treaty template (al-Umm) exempts all pre-pubescent / under-15 minors from tax and legal duties."],
 ["Muḥammad al-Shaybānī (d. 189 AH), al-Aṣl","al-Shāfiʿī (d. 204 AH), al-Umm & al-Musnad","Zayd b. ʿAlī (d. 122 AH), al-Musnad","ʿAbd al-Razzāq (d. 211 AH), al-Muṣannaf 15327–15329, 18064–18066","Ibn Abī Shayba (d. 235 AH), al-Muṣannaf 20821–20822","Saʿīd b. Manṣūr 2464–2465; al-Bazzār 5618–5619; Abū ʿUbayd, Gharīb al-Ḥadīth"],
 [
  N(Q654,
   "Don't chapter titles in al-Dārimī and al-Shāfiʿī, ʿĀʾisha's report, and the context of al-Shaybānī's quote undo those restrictions?",
   "No—Proofs 16–25 document enforceable refusal, judicial authorization, and Qurʾānic rushd (even to age 25), and pre-empting those exact three counter-arguments leaves the case unassailable.",
   "Proofs 16–25: Refusal, Dissolution, Consent, Q 4:6 & 3 Counter-Objections",
   ["Proofs 16–19 (Enforceable refusal & dissolution): al-Shāfiʿī (al-Umm): if she cannot bear intercourse, her family has the right to refuse consummation—and the husband owes neither dower nor maintenance until she is physically capable. Saḥnūn (d. 240 AH, al-Mudawwana al-Kubrā) adds no maintenance is owed before maturity, and cites al-Zuhrī that maintenance only begins 'when her guardian sues the husband for consummation and the ruler orders it'—making consummation justiciable and subject to judicial approval. al-Tirmidhī (d. 279 AH, al-Sunan) documents the 2nd-century position of Sufyān al-Thawrī (d. 161 AH), al-Shāfiʿī, and others that an orphan's marriage is invalid until maturity, alongside the option of dissolution at majority (khiyār al-bulūgh; al-Shāfiʿī: 'What she could have rejected as an adult does not bind her as a child').",
    "Proofs 20–25 (Narrow paternal scope, precedent & Q 4:6): al-Shāfiʿī voids contracts by any guardian other than a father (brother, uncle, executor) and argues against marrying off a minor son because 'a child fears no sexual distress'—a rationale applying equally to girls. Precedents include al-Khansāʾ bt. Khidām (Mālik al-Muwaṭṭaʾ 1959; al-Rabīʿ b. Ḥabīb 512; al-Shāfiʿī: Prophet annulled a father-arranged forced marriage), virgin/previously married consent rules (Saʿīd b. Manṣūr 554, 556; ʿAbd al-Razzāq 10295–10297), and Qurʾān 4:6 tying 'marriageable age' (balaghū l-nikāḥ) to both puberty and sound judgment (rushd: Mujāhid d. 104 AH, Muqātil d. 150 AH, and al-Shaybānī requiring demonstrated financial maturity—'at age twenty-five or older' if necessary).",
    "Pre-empting Objection A (Chapter headings in al-Dārimī d. 255 & al-Shāfiʿī al-Umm): Both works contain the very restrictions documented here (e.g., al-Shāfiʿī records the chapter yet grants the family refusal rights and voids discounts on her dower). The sources depict a regulated practice under mounting constraints, not an unqualified license.",
    "Pre-empting Objection B (Reports on ʿĀʾisha's age in al-Shāfiʿī, al-Dārimī, Bukhārī, Muslim): Never deny the reports—that looks dishonest and fails textually. The solid point is that subsequent Islamic legal doctrine did not derive an unrestricted green light from them, but rather constructed barriers: ratification requirement, refusal rights, dissolution rights, and the 15-year maturity threshold.",
    "Pre-empting Objection C ('al-Shaybānī's Proof 01 only addresses self-contracted minors'): While the case involves minors contracting without a guardian, al-Shaybānī states the rule categorically ('the marriage of a child is invalid', not merely 'invalid without a guardian'), and the underlying legal doctrine—suspended invalidity until adult ratification—remains the decisive principle. Thus modern Muslim-majority minimum-age laws grounded in rushd, maṣlaḥa, fiduciary duty, and khiyār follow Islamic jurisprudence's authentic method."],
   ["al-Shāfiʿī, al-Umm","Saḥnūn (d. 240 AH), al-Mudawwana al-Kubrā","al-Tirmidhī (d. 279 AH), al-Sunan","Mālik, al-Muwaṭṭaʾ 1959; al-Rabīʿ b. Ḥabīb 512","Saʿīd b. Manṣūr 554, 556; ʿAbd al-Razzāq 10295–10297","Mujāhid (d. 104 AH) & Muqātil (d. 150 AH) on Q 4:6"],
   [],
   {facts:[["Method","25 OpenITI proofs (122–292 AH)"],["Age Threshold","15 yrs (al-Shāfiʿī consensus; ʿUmar II)"],["Contract Rule","Suspended invalidity until adult consent"],["Q 4:6 Standard","Puberty + rushd (sound judgment)"]],
    quotes:[
     {by:"Muḥammad al-Shaybānī (d. 189 AH)",en:"For the marriage of a child is invalid. And it is not like the marriage of an adult... If he consummates after both reach maturity, that is their mutual consent and confirmation of what occurred as a marriage while they were children—and then the marriage is valid.",ref:"al-Aṣl, ch. on marriage objections"}
    ]})
 ],
 {facts:[["Corpus Scope","OpenITI 2025.1.9 (122–292 AH)"],["Burden of Proof","Adult must prove she wasn't a minor"],["Property vs. Marriage","Cannot buy a coin, so cannot bind life"],["Fiduciary Limit","Father cannot waive 1 dirham of mahr"]],
  quotes:[
   {by:"al-Shāfiʿī (d. 204 AH)",en:"Penal norms apply to one who has completed fifteen... And I know no one who disputes this.",ref:"al-Umm"},
   {by:"al-Shaʿbī (d. ~104 AH)",en:"Were [a child's] buying and selling valid, then his manumission of a slave would be valid.",ref:"Ibn Abī Shayba, al-Muṣannaf 20821"}
  ],
  visual:{kind:'compare',
   left:{title:"What Weak Debaters Claim (Fails)",items:["'A prophetic ḥadīth bans child marriage' (0 hits up to 300 AH)","'Deny ʿĀʾisha's age narrations' (textually untenable)","Ignore chapter titles in al-Dārimī & al-Shāfiʿī"]},
   right:{title:"What Early Legal Sources Prove (122–292 AH)",items:["Childhood contracts are suspended/invalid without adult ratification (al-Shaybānī)","General maturity threshold is 15 (al-Shāfiʿī consensus; ʿUmar II)","Child lacks capacity even for a coin (al-Zuhrī, Qatāda, al-Shaʿbī)","Family & court can block consummation; Q 4:6 links marriage to rushd"]}},
  shots:[
   S('pdf2-muendigkeit-p1.jpg','Maturity Before Marriage Dossier (OpenITI 122–292 AH): Core Proofs 01–05 (al-Shaybānī & al-Shāfiʿī) (p. 1).'),
   S('pdf2-muendigkeit-p2.jpg','Legal personhood (06–10), age-15 threshold (11–15), refusal/consent & counter-arguments (p. 2).')
  ]}));

add('islam/morality/marriage/aisha/quran-65-4',N(Q654,
 "There was total consensus (ijmāʿ) in the first three centuries that a father could bind his prepubescent daughter irreversibly.",
 "A systematic OpenITI search of 864 works up to 300 AH plus classical legal compendia disproves that claim: three early authorities (Ṭāwūs, Judge Shurayḥ, and Ibn Shubruma) declared child marriages non-binding even when contracted by a father, Caliph ʿUmar b. ʿAbd al-ʿAzīz and Medina's governor penalized premature consummation with one-third blood-money, and later jurists like Ibn Shubruma, ʿUthmān al-Battī, and Abū Bakr al-Aṣamm rejected pre-pubescent contracts even by fathers—though honest scholarship separates these from guardians-only bans and post-puberty khiyār.",
 "Early Corpus up to 300 AH (31 Findings) & Classical Jurists Classification",
 ["Prophetic reports (H1–H8, with honest caveats): H1 Fāṭima ('She is young' when Abū Bakr and ʿUmar proposed, vs. ʿAlī; al-Nasāʾī d. 303 Sunan 3221, Kubrā 5329/8508—caution: concerns age gap and sits just past 300 AH except Aḥmad Faḍāʾil 1051 addition); H2 Umm Ḥabīb ('If she grows up while I live,' Aḥmad 26870, al-Balādhurī Ansāb 1/462, Abū Yaʿlā 7075—weak chain via Ḥusayn b. ʿAbdallāh & foster-niece context); H3 Ibn Maẓʿūn's orphan niece (Prophet ﷺ annuls uncle Qudāma's marriage to Ibn ʿUmar: 'She is an orphan; she is married only with her permission,' Aḥmad 6136, Ibn Saʿd 12881, Ibn Mājah 1878 under 'minors married by other than fathers,' Tirmidhī ʿIlal 268—caution: Ibn Isḥāq main chain, age unstated); H4–H8 against paternal compulsion (ijbār): Jābir (Prophet separates virgin wedded unwillingly, + Saʿīd b. al-Musayyab mursal, al-Shaybānī al-Ḥujja 3/136); Ibn ʿAbbās (virgin given choice, Aḥmad 2469, Abū Dāwūd 2096, Ibn Mājah 1875); 'I wanted women to know fathers have no say' (Isḥāq b. Rāhwayh 1359–1360, Aḥmad 25043, Ibn Mājah 1874, ʿAbd al-Razzāq 10302—adult virgin); Prophet consulting his daughters at the curtain (ʿAbd al-Razzāq 10289, 10301 mursal; Saʿīd b. Manṣūr 562); and 'Consult women [mothers] about their daughters' (Abū Dāwūd 2095, Aḥmad 4905, ʿAbd al-Razzāq 10310–10311).",
  "Āthār breaking paternal ijmāʿ (A1–A3): Three early authorities explicitly denied binding force even to father-contracted marriages: (A1) Ṭāwūs (d. 106 AH) disapproved of marrying two children (nikāḥ al-ṣaghīrayn) and ruled across three chains (Maʿmar, Ibn Jurayj, Zamʿa via his son): 'If their father marries off the two young ones, they have the choice when they grow up' (Ibn Abī Shayba 17342, 16004; ʿAbd al-Razzāq 10357, 10362, 10368); (A2) Shurayḥ (judge of Kūfa under ʿUmar and ʿAlī): 'If a man marries off his son or daughter, both have the choice when grown' (Ibn Abī Shayba 16011—caution: missing chain link and opposite attribution in al-Shaybānī al-Aṣl 10/186); (A3) Ibn Shubruma (d. 144 AH, Qāḍī of Kūfa): earliest corpus attestation (ʿAbd al-Razzāq 10367 via al-Thawrī; Ibn al-Mundhir al-Awsaṭ) grants 'choice when they mature,' whereas the blanket-ban wording appears in later witnesses (Ibn Ḥazm, al-Sarakhsī; al-Marwazī d. 294 even counts him differently).",
  "Judicial & Companion practice (A4–A11 & up to 300 AH): (A4) Caliph ʿUmar b. ʿAbd al-ʿAzīz ordered governors to grant child-married orphans choice at maturity (ʿAbd al-Razzāq 10370; Ibn Abī Shayba 16001) and, with Medina governor Abān b. ʿUthmān, imposed one-third diya blood-money for severe injury if a girl was too young for intercourse (Ibn Abī Shayba 27897, 5/452); (A5) ʿAṭāʾ, Qatāda, Maʿmar—no mutual inheritance if minors die before maturity, proving no valid marriage yet existed (ʿAbd al-Razzāq 10360–10371; Ibn Abī Shayba 16002–16005); (A6) Yūnus b. ʿUbayd ('he disliked marrying children,' Ibn Abī Shayba 17343); (A7) ʿUmar (including written decree) & ʿAlī, Shurayḥ, al-Shaʿbī on asking the orphan (Saʿīd b. Manṣūr 557–561; Ibn Abī Shayba 15985–15988; ʿAbd al-Razzāq 10298); (A8) ʿAlī ('neither father nor brother nor anyone else' without permission, al-Ḥujja 3/136—interrupted chain, countered by Musnad Zayd 1/305); (A9) al-Nakhaʿī linking consent to physical capacity (al-Ḥujja 3/136); (A10) ʿUmar after a young wife killed an elderly husband: 'Marry your age-equals!' (+ ʿAlī, Saʿīd b. Manṣūr 810–811, Taʾrīkh al-Madīna 2/769, Ibn Ḥabīb Adab al-Nisāʾ 77–78, Ibn Abī Shayba 19262); (A11) Ibn ʿUmar consulting daughters, ʿAṭāʾ requiring fathers to ask, Asmāʾ bt. Abī Bakr warning marriage is a form of servitude (ʿAbd al-Razzāq 10287, 10291; Saʿīd b. Manṣūr 591)—alongside Mālik (al-Mudawwana: 'How do you ask someone incapable of granting permission?'), al-Shāfiʿī calling child marriage 'ugly,' Isḥāq b. Rāhwayh ruling consummation 'not permitted,' and Medinan authorities demanding rulers dissolve such unions.",
  "Classical Jurists Dossier (4 precise categories, avoiding overstatement): (1) Blanket contract ban even for fathers: Ibn Shubruma (d. 144, via Ibn Ḥazm al-Muḥallā q. 1826, 9/38–39), ʿUthmān al-Battī (d. 143, jointly with Ibn Shubruma in al-Kāsānī Badāʾiʿ al-Ṣanāʾiʿ 2/240), Abū Bakr al-Aṣamm (d. 200/201, via al-Sarakhsī al-Mabsūṭ 4/212–213—noting later witnesses are not independent early proofs). (2) General rejection / post-puberty choice: Jābir b. Zayd (d. ~93/103, Min Jawābāt no. 399, p. 85), Jannāw b. Fatā al-Madyūnī (prob. 3rd c., Ajwibat ʿUlamāʾ Fazzān 3/2—father-contracted daughter gets dissolution choice), Aflaḥ b. ʿAbd al-Wahhāb (3rd c., Min Jawābāt q. 96). (3) Non-paternal guardians only (father exempted): Mālik (d. 179, via al-Qayrawānī al-Nawādir wa-l-Ziyādāt—annulling even an uncle's contract despite later adult consent), Saḥnūn (d. 240, al-Nawādir—annulling without divorce even after consummation), al-Khaṭṭābī (d. 388, Maʿālim al-Sunan). (4) Specific restrictions: Ibn Ḥazm (d. 456, al-Muḥallā q. 1827, vol. 9) and Ibn al-ʿArabī al-Mālikī (d. 543, al-Qabas) forbid contracting a minor son (even by the father, though Ibn Ḥazm allows it for a minor virgin daughter); al-Shāfiʿī recommends fathers wait for puberty (al-ʿImrānī al-Bayān) and bans handover when physically unable (al-Umm 5/101–102). Honest caution: the classical majority permitted fathers to contract minor daughters, so these texts prove authentic classical dissent and strict limits—not a universal consensus."],
 ["Ibn Abī Shayba 15985–16011, 17342–17343, 19262, 27897","ʿAbd al-Razzāq 10287–10371","Saʿīd b. Manṣūr 557–562, 591, 810–811","Ibn Ḥazm, al-Muḥallā q. 1826–1827; al-Kāsānī, Badāʾiʿ 2/240; al-Sarakhsī, al-Mabsūṭ 4/212–213","Ibn Abī Zayd al-Qayrawānī, al-Nawādir wa-l-Ziyādāt; al-Khaṭṭābī, Maʿālim al-Sunan","Min Jawābāt Jābir b. Zayd 399; Ajwibat ʿUlamāʾ Fazzān; Min Jawābāt Aflaḥ 96"],
 [],
 {facts:[["Corpus Search","864 OpenITI works up to 300 AH"],["Paternal Ijmāʿ Broken","Ṭāwūs, Shurayḥ, Ibn Shubruma"],["State Liability","1/3 diya for premature consummation"],["4 Juristic Tiers","Ban vs. khiyār vs. non-fathers vs. harm"]],
  quotes:[
   {by:"Ṭāwūs b. Kaysān (d. 106 AH)",en:"If their father marries off the two young ones, they have the choice when they grow up.",ref:"Ibn Abī Shayba 16004; ʿAbd al-Razzāq 10357"},
   {by:"ʿUthmān al-Battī (d. 143 AH) & Ibn Shubruma (d. 144 AH)",en:"Father and grandfather do not possess the authority to marry off children [before puberty].",ref:"al-Kāsānī, Badāʾiʿ al-Ṣanāʾiʿ 2/240"}
  ],
  visual:{kind:'steps',items:[
   ["Tier 1: Blanket Contract Ban (incl. Father)","Ibn Shubruma (†144), ʿUthmān al-Battī (†143), Abū Bakr al-Aṣamm (†200/201)."],
   ["Tier 2: Post-Puberty Choice (Khiyār)","Ṭāwūs (†106), Shurayḥ, Jābir b. Zayd, al-Madyūnī, Aflaḥ b. ʿAbd al-Wahhāb."],
   ["Tier 3: Non-Paternal Guardians Banned","Mālik (†179), Saḥnūn (†240), al-Khaṭṭābī (†388)—even adult ratification rejected."],
   ["Tier 4: Sons & Harm Restrictions","Ibn Ḥazm & Ibn al-ʿArabī ban sons; al-Shāfiʿī recommends waiting & blocks unsafe consummation; ʿUmar II imposes 1/3 diya."]
  ]},
  shots:[
   S('pdf2-kinderehe-neufunde-p1.jpg','New Findings up to 300 AH (31 proofs from 864 OpenITI works): H1–H8 prophetic precedents (p. 1).'),
   S('pdf2-kinderehe-neufunde-p2.jpg','Āthār breaking paternal ijmāʿ (Ṭāwūs, Shurayḥ, Ibn Shubruma, ʿUmar II) & scholarly notes (p. 2).'),
   S('pdf2-kinderehe-gelehrte-p1.jpg','Classical Jurists Dossier: Blanket bans (Ibn Shubruma, al-Battī, al-Aṣamm) & post-puberty choice (p. 1).'),
   S('pdf2-kinderehe-gelehrte-p2.jpg','Non-paternal guardian bans (Mālik, Saḥnūn, al-Khaṭṭābī), sons & harm limits, and historical caveat (p. 2).')
  ]}));

/* ============================================================================
   2. islam/morality/women/d-ia-women-and-the-quran/t-surah-2-282-women-deficient
      (a) frauen-verstand1 (Part 1: 13,376 texts, 3,382 authors, 27 proofs)
      (b) frauen-verstand2 (Part 2: 8,716 texts, 25 works compared, 53 new proofs)
   ============================================================================ */
const FV=AVN('frauen-verstand');

add('islam/morality/women/d-ia-women-and-the-quran/t-surah-2-282-women-deficient',N(FV,
 "In Ṣaḥīḥ al-Bukhārī 304 and Ṣaḥīḥ Muslim 132, the Prophet ﷺ calls women 'deficient in intellect and religion' (nāqiṣāt ʿaql wa-dīn), proving an innate cognitive inferiority.",
 "The ḥadīth defines its own terms purely legally—never biologically or cognitively. Across an OpenITI corpus study of 13,376 Arabic texts (3,382 authors), every prophetic version and the oldest Companion explanation (Ibn Masʿūd) define nuqṣān al-ʿaql solely via the procedural rule of Q 2:282 (commercial debt testimony) while simultaneously praising women as 'astute' (jazla) and capable of overcoming men of clear intellect (lubb) and sound judgment (raʾy).",
 "Nuqṣān al-ʿaql = Testimony Rule, Not IQ (Part 1 Dossier)",
 ["H1 — Ṣaḥīḥ al-Bukhārī 304 (Kitāb al-Ḥayḍ, 1/68): Three internal proofs sit inside the text itself: (1) The Prophet ﷺ defines the phrase via two follow-up questions citing two known legal rules—testimony weight and menstrual exemption from prayer/fasting; (2) he uses the partitive particle min ('fa-dhālika min nuqṣān ʿaqlihā'—'that belongs to...'), anchoring the expression to a legal consequence rather than cognitive capacity; (3) in the very same sentence he says such women carry away the lubb (clear intellect) of a resolute (ḥāzim) man—contradicting any reading of inherent mental inferiority.",
  "H2 & H3 — Ṣaḥīḥ Muslim 132 (1/86) & Musnad Abī Yaʿlā 5284 (ḥasan per Ḥusayn Salīm Asad): Muslim explicitly describes the woman who questions the Prophet ﷺ as jazla ('intelligent, perceptive, articulate'), and the Prophet ﷺ gives a self-limiting legal definition ('fa-hādhā nuqṣān al-ʿaql'—two women's testimony equals one man's; nothing about memory, reasoning, or comprehension). Abū Yaʿlā 5284 (via Ibn Masʿūd, marfūʿ) uses the passive verb of legislation: 'juʿila shahādat imraʾatayn bi-shahādat rajul'—'was legally set equal to,' describing a statutory rule, not female ontology.",
  "H4, H5 & H6 — Ṣaḥīḥ distinctions & female judicial/advisory authority: Musnad al-Shāshī 871 (2/295) candidly notes the questioner was 'not among the most intelligent of them' (laysat min aʿqalihinna)—proving narrators distinguished smarter from less smart women, which would be absurd if 'deficiency of intellect' meant universal low IQ. In Bukhārī 2659–2661 (Kitāb al-Shahādāt, 3/173), the solitary word of one enslaved Black woman (ama sawdāʾ) dissolves ʿUqba b. al-Ḥārith's marriage, followed immediately by the chapter 'Women's Mutual Certification of Trustworthiness' (taʿdīl al-nisāʾ baʿḍuhunna baʿḍan—hadith-criticism's technical term for reliability grading!). And at al-Ḥudaybiya (Bukhārī 2731/2732), after three ignored commands, the Prophet ﷺ followed Umm Salama's strategic situational judgment (raʾy).",
  "Symmetry-Breaker — Ibn Masʿūd's raʾy / ʿaql interchangeability (Ibn Abī Shayba, al-Muṣannaf 30409 / al-Īmān 59; Sunan al-Dārimī 1047, 1/684, isnād ḥasan): In the oldest preserved Companion explanation (Abū Muʿāwiya ← al-Aʿmash ← Dharr ← Wāʾil b. Mahāna ← Ibn Masʿūd), Ibn Masʿūd says 'diminished in religion and judgment (raʾy)' in the main clause, yet the follow-up asks 'what is the diminution of her ʿaql?' and receives the purely legal answer: 'Two women's testimony is only valid alongside a man's' (parallel in al-Dārimī 1047 with ʿaql). Meanwhile, ʿAṭāʾ b. Abī Rabāḥ calls ʿĀʾisha 'possessing the best raʾy of all people'—both statements can only hold together if 'diminished raʾy/ʿaql' refers to legal-procedural standing! Ibn Taymiyya adds the converse proof: an absent-minded man has zero testimony validity while a woman has half, proving the rule does not measure IQ."],
 ["Ṣaḥīḥ al-Bukhārī 304, 2659–2661, 2731–2732","Ṣaḥīḥ Muslim 132","Musnad Abī Yaʿlā 5284; Musnad al-Shāshī 871","Ibn Abī Shayba, al-Muṣannaf 30409 / al-Īmān 59","Sunan al-Dārimī 1047 (1/684)","Qurʾān 2:282; Ibn Taymiyya"],
 [],
 {facts:[["Corpus Scale","13,376 texts · 3,382 authors · 27 proofs"],["Key Grammar","min nuqṣān / juʿila (statutory act)"],["Oldest Gloss","Ibn Masʿūd equates raʾy & ʿaql legally"],["Counter-Proof","1 enslaved woman's word ends marriage"]],
  quotes:[
   {by:"Ibn Masʿūd (Ibn Abī Shayba 30409)",en:"I have seen none diminished in religion and judgment (raʾy) more able to overcome men of authority... They asked: What is the diminution of her intellect (ʿaql)? He said: The testimony of two women is only admissible with the testimony of a man.",ref:"al-Muṣannaf 30409; Kitāb al-Īmān 59"}
  ],
  visual:{kind:'compare',
   left:{title:"Misreading: Innate IQ Deficiency",items:["Ignores the Prophet's own self-limiting definition","Cannot explain why 'deficient' women overcome resolute men (ḥāzim)","Contradicted by Bukhārī 2659 (1 woman dissolves marriage) & taʿdīl","Contradicted by ʿAṭāʾ praising ʿĀʾisha's supreme raʾy"]},
   right:{title:"Textual & Early Reading: Legal Rule",items:["Q 2:282 restricts 2-for-1 rule to commercial debt contracts","Hadith defines nuqṣān al-ʿaql solely by testimony & ḥayḍ","Ibn Masʿūd swaps raʾy and ʿaql as legal standing","Ibn Taymiyya: absent-minded man gets 0, woman gets ½"]}},
  shots:[
   S('pdf2-frauen-verstand1-p1.jpg','Part 1 Dossier (OpenITI 13,376 texts): 3-step argument, symmetry-breaker & Bukhārī 304 (p. 1).'),
   S('pdf2-frauen-verstand1-p2.jpg','Muslim 132 (jazla), Abū Yaʿlā 5284, al-Shāshī 871, Bukhārī 2659 & Ibn Masʿūd (p. 2).')
  ]}));

add('islam/morality/women/d-ia-women-and-the-quran/t-surah-2-282-women-deficient',N(FV,
 "Only modern apologetics reads nuqṣān al-ʿaql legally—classical collections and jurists didn't treat it that way.",
 "Part 2 of the OpenITI dossier (8,716 normalized texts, 25 primary works up to ~463 AH compared, 53 new proofs) reveals that across ALL 25 early collections containing the follow-up question, 100% give one of four legal-rule formulas and zero mention forgetfulness or cognitive weakness—while Ḥanafī law permits women to serve as judges in the very financial cases where testimony is halved.",
 "Testimony Measure, Not Intellect Measure (Part 2 · 25 Early Works)",
 ["F5 — Exhaustive 25-work audit (up to ~463 AH): Comparing al-Ḥumaydī, Ibn Abī Shayba (Muṣannaf & Īmān), al-ʿAdanī, Aḥmad, al-Dārimī, al-Bukhārī, Muslim, Ibn Mājah, Abū Dāwūd, al-Tirmidhī, al-Ḥārith b. Abī Usāma, Ibn Abī ʿĀṣim, Abū Yaʿlā, Ibn Khuzayma, Abū ʿAwāna, Ibn al-Mundhir, al-Ṭaḥāwī, al-Shāshī, Ibn Manda, Ibn Baṭṭa, al-Ḥākim, al-Lālakāʾī, Abū Nuʿaym, al-Bayhaqī, and Ibn ʿAbd al-Barr—EVERY single transmission with the follow-up question gives one of four legal-testimony formulations (interrogative, 'equals', divine-enactment 'God set', or admissibility 'only with a man'). Not one cites forgetfulness or mental weakness.",
  "F1–F3 — Oldest written wording & divine-enactment formula: In al-Ḥumaydī (d. 219 AH, al-Musnad 92, 1/51; also Ibn ʿAbd al-Barr al-Tamhīd 3/324–325), the oldest datable text explicitly names God as legislator: 'jaʿala Allāhu shahādat imraʾatayn bi-shahādat rajul' ('Allah set two women's testimony equal to one man's'), and describes women overcoming 'men of judgment' (dhawī l-raʾy). al-Ḥākim (al-Mustadrak 2772, 2/207, ṣaḥīḥ al-isnād) preserves the 'religion and judgment (raʾy)' wording as marfūʿ (honestly noting Ibn ʿAbd al-Barr Tamhīd 3/325 prefers mawqūf attribution to Ibn Masʿūd). Ibn Manda (d. 395 AH, Kitāb al-Īmān 676, 2/683; cf. al-Ṭaḥāwī Mushkil 2/24) preserves Zaynab (wife of Ibn Masʿūd) asserting property autonomy over her husband and asking the Prophet ﷺ directly.",
  "F4 & Sentence Parallelism — Ulū l-albāb & al-Nawawī: Ibn Abī ʿĀṣim (d. 287, al-Sunna 956, 2/464) and Abū ʿAwāna (d. 316, al-Mustakhraj 1/135; cf. al-Ājurrī al-Sharīʿa 219, al-Ṭaḥāwī Mushkil 7/152) read that women overcome 'ulū l-albāb' ('people of understanding'—the Qurʾān's term 16×, explicitly including both men and women in Q 3:190–195, revealed on Umm Salama's query per Tirmidhī 3023). Moreover, every commentator agrees 'diminution of religion' means obeying God's law by not praying during menstruation (al-Nawawī: she is 'obligated' to abstain); by strict sentence parallelism, the paired clause means a legal rule, not personal defect.",
  "Judicial logic (Ḥanafī qāḍī rule) & Ibn Ḥazm: Under Ḥanafī law, a woman may serve as judge (qāḍī) in all non-ḥadd and non-qiṣāṣ cases—precisely the financial disputes where her witness counts as half—under the maxim 'whoever is qualified to testify is qualified to judge' (with a disputed attribution to al-Ṭabarī allowing all cases). Judging demands higher intellect than witnessing; thus the testimony rule cannot measure intellect! Ibn Ḥazm states bluntly that claiming mental superiority over Mary, Moses's mother, ʿĀʾisha, and Fāṭima is 'not far from disbelief,' noting Abū Bakr and ʿAlī together cannot satisfy the 4-male-witness zinā rule while four ordinary men can.",
  "Prophetic & Companion symmetry-breakers + Honest methodological guardrails: The Prophet ﷺ called women 'counterparts of men' (shaqāʾiq al-rijāl; al-Khaṭṭābī: 'equals in nature'), praised asking women ('the best of you is she who asks about what concerns her'), honored Umm Hāniʾ's binding grant of protection (amān) over ʿAlī, approved al-Shifāʾ teaching Ḥafṣa to write, while Ibn Masʿūd listed a woman among history's three sharpest minds, ʿAṭāʾ rated ʿĀʾisha best in raʾy (al-Ḥākim), Ibn Ḥazm ranked ʿĀʾisha first among Companion jurists, and Zayd b. Thābit corrected his fatwā upon a woman's report (Muslim 1328). Honest balance: do NOT claim every later scholar read it legally (al-Sarakhsī, Qāḍī ʿAbd al-Wahhāb, and Ibn Baṭṭāl read it ontologically, though refuted by early texts and their own schools' judicial practice), and reject weak props ('take half your religion from al-Ḥumayrāʾ' is baseless per al-Mizzī & Ibn Kathīr; al-Shifāʾ's market-supervision is unverified; ʿUmar & the dowry woman has broken chains—use Muslim 1328 instead)."],
 ["al-Ḥumaydī (d. 219 AH), al-Musnad 92","al-Ḥākim, al-Mustadrak 2772; Ibn Manda, al-Īmān 676","Ibn Abī ʿĀṣim, al-Sunna 956; Abū ʿAwāna, al-Mustakhraj 1/135","Ṣaḥīḥ Muslim 1328; al-Tirmidhī 3023; Qurʾān 3:190–195","al-Nawawī; al-Khaṭṭābī; Ibn Ḥazm; Ḥanafī qāḍī doctrine"],
 [],
 {facts:[["Works Audited","25 early collections up to ~463 AH"],["Variance Rate","0/25 cite forgetfulness or low IQ"],["Ḥanafī Law","Woman can judge cases where witness = ½"],["Scholarly Balance","Rejects weak props on both sides"]],
  quotes:[
   {by:"al-Ḥumaydī (d. 219 AH, oldest datable text)",en:"As for the diminution of her intellect: Allah has set the testimony of two women equal to the testimony of one man.",ref:"al-Musnad, no. 92 (1/51)"}
  ],
  visual:{kind:'steps',items:[
   ["1. Self-Definition in 25/25 Works","All 25 early works up to ~463 AH answer solely with testimony & menstrual-exemption rules."],
   ["2. Divine Setzung (Jaʿala Allāhu)","al-Ḥumaydī 92, al-Ḥākim 2772 & Ibn Manda 676 frame it as a legislative enactment, not a cognitive measurement."],
   ["3. Sentence Parallelism & Judicial Logic","Menstrual abstention is obedience (al-Nawawī), and Ḥanafī law lets women judge the very cases where witness = ½."],
   ["4. Ibn Ḥazm's Reductio","Claiming higher intellect than Mary, ʿĀʾisha, or Fāṭima is 'not far from kufr'; witness counts (e.g., 4 for zinā) are never IQ rankings."]
  ]},
  shots:[
   S('pdf2-frauen-verstand2-p1.jpg','Part 2 Dossier (25 works audited): 6-step argument, symmetry-breakers & methodological guardrails (p. 1).'),
   S('pdf2-frauen-verstand2-p2.jpg','al-Ḥumaydī 92, al-Ḥākim 2772, Ibn Manda 676, ulū l-albāb & 25-work comparison matrix (p. 2).')
  ]}));

/* ============================================================================
   3. christianity/islam-vs/prophecies/isaiah-21-camel-rider-habakkuk-paran
      jesaja42-habakuk3 + biblische-proph
   ============================================================================ */
const EK=AV('esel-und-kamel','1355557041703485652');

add('christianity/islam-vs/prophecies/isaiah-21-camel-rider-habakkuk-paran',N(EK,
 "Muslim writers forged 'Muḥammad' into Habakkuk 3, and neither Church Fathers nor early Jewish/Christian sources ever connected Isaiah 21 or Habakkuk 3 to Arabia or Ishmael.",
 "Two independent dossiers refute both halves of that objection. First, comparative philology across Wadi Murabbaʿāt Hebrew (Mur 88), the 1st/2nd-century Syriac Peshitta, and 9th-century Arabic proves Muslim writers faithfully translated Syriac mšabbḥā ('the Praised One' = Muḥammad)—reading unvocalized Hebrew slh—only where the Peshitta has it (Hab 3:3, 3:9) and omitting it at 3:13 where Peshitta reads 'forever.' Second, Jerome, Eusebius, Cyril, Augustine, Gregory, Sebeos, and Rabbi Simon ben Yoḥai explicitly supply the exact Arab/Ishmaelite identifications.",
 "Habakkuk 3 Philology (Hebrew → Syriac Peshitta → Arabic)",
 ["Four-step textual chain (Mur 88 → Peshitta → Arabic): In Habakkuk 3:3 ('Mount Paran slh'), 3:9 ('...slh'), and 3:13 ('...slh'), the early 2nd-century Wadi Murabbaʿāt Hebrew scroll (Mur 88 = MT) preserves unvocalized סלה (slh). Centuries later Masoretes vocalized it as a musical pause (selāh; LXX diapsalma). Yet the pre-Islamic Syriac Peshitta (1st/2nd c. CE)—unlike in the Psalms where it drops slh—translated Habakkuk 3's three instances as words: twice as ܡܫܒܚܐ (mšabbḥā, 'the Praised One': 3:3 'splendor of the Praised One', 3:9 'by your word, O Praised One') and in 3:13 as lʿālmin ('forever'). Because Syriac mšabbḥā (Pael passive participle) is the exact morphological counterpart of Arabic Muḥammad (Form II passive participle; cf. Peshitta Ps 18:4 for Heb. mehullāl), Muslim Arabic translations read 'Muḥammad'/'Aḥmad' strictly at 3:3 and 3:9—with zero name at 3:13.",
  "Peshitta translation fingerprint (Hab 3:3–13): At every point where Hebrew, Greek LXX, and Syriac diverge, the Muslim Arabic (independently in ʿAlī b. Rabban al-Ṭabarī, al-Dīn wa-l-Dawla c. 240 AH [Mingana 1923 p. 103f.; via Abū l-Ḥusayn al-Baṣrī †436 → al-Qazwīnī †493, al-Rāzī †606, al-Jaʿfarī †668, Ibn Taymiyya †728] and Ibn Qutayba †276 [Ibn al-Jawzī al-Wafāʾ I, 28, 35]) follows the Syriac: 3:3 Mount Paran (vs. LXX 'shady thick mountain') and passive 'heavens covered/lit'; 3:5 'death' (mawtā vs. Heb. pestilence / LXX word) and 'birds' (ṭayrā vs. Heb. plague / LXX sandals); 3:6 'measured' (m-š-ḥ vs. LXX shook); 3:9 'arrows satiated' (unvocalized ś-b-ʿ vs. Heb. š-b-ʿ oaths); 3:11 'lances' (nayzkē vs. Heb. spear / LXX weapons). Ibn Qutayba's remark ('some People of the Book added') explains informants supplying v. 3:9 to his short excerpt—no fabricator could manufacture this 3-language Peshitta fingerprint.",
  "Symmetry-breaker in Habakkuk 3:13: In 3:13 the Peshitta has l-mšīḥāk ('your anointed one'). For a Muslim forger, this would have been the prime place to insert a prophet's name—yet because the third slh is translated 'forever' (lʿālmin), no name appears in Arabic. Confirmed in modern scholarship by Sebök (1887), Brockelmann, Mingana (1922–23), Gelston (1987), and Schmidtke (2011).",
  "Honest balance & what NOT to use: Proven strongly = 'Muḥammad' in Muslim Habakkuk citations is a faithful translation of a pre-Islamic Christian Bible, not forgery (while Gen 21:20–21 links Paran + bowman to Ishmael, and Parr & Knauf 1988 locate Midian/Qurayyah Painted Ware in NW Arabia, though Teman = Edom and Paran = E. Sinai/Negev). Honestly unestablished as prophecy = the Syriac translator meant God/Christ (v. 3:8 addresses YHWH/Māryā; mšabbḥā occurs 22× in Peshitta OT mostly for God; Ishoʿdad, Bar Ṣalībī, Barhebraeus apply it to God/Christ). Also reject weak curiosities: Isa 42 has zero mšabbḥā in Peshitta; MT ʾetmōkh (Isa 42:1) → ʾaḥmad fails against 1QIsaᵃ ʾtmwkh & LXX; Hab 3:3 slh = Mount Salʿ fails because 3:9 and 3:13 are clearly the same pause-word; and keep the Daniel quote ('explicit without allusion...') out of Habakkuk."],
 ["Wadi Murabbaʿāt Scroll (Mur 88, Hab 3)","Syriac Peshitta (Hab 3:3, 5, 6, 9, 11, 13; Ps 18:4; Ps 68:5)","ʿAlī b. Rabban al-Ṭabarī, al-Dīn wa-d-Dawla (Mingana 1923)","Ibn Qutayba (Ibn al-Jawzī, al-Wafāʾ I, 28, 35)","al-Jaʿfarī, Takhjīl II, 689; Ibn Taymiyya, al-Jawāb V, 267","Sebök (1887); Mingana (1922); Gelston (1987); Schmidtke (2011); Knauf (1988)"],
 [
  N(EK,
   "Even if not forged, Church Fathers and early Jewish/Christian witnesses never associated Isaiah 21's camel rider or Habakkuk 3's Paran with Arabs or Ishmael.",
   "Patristic commentaries (Jerome, Eusebius, Cyril, Augustine, Gregory, Fortunatianus), Jewish apocalyptic (Secrets of R. Simon ben Yoḥai), and 7th–8th c. Syriac/Armenian chronicles (Sebeos, Pseudo-Dionysius, Eutychius, Timothy I) explicitly supply every link.",
   "Patristic, Jewish & Early Chronicle Witness to Isa 21 & Hab 3",
   ["Isaiah 21:7–9 — Donkey = Jesus; Camel = Ishmaelites/Gentiles: Fathers unanimously identify the donkey rider as Jesus (Jerome on Isa 21:7 citing Matt 21 & Zech 9:9 and noting 'two riders = two Testaments'; Eusebius on Zech 9:9; Justin Martyr on Gen 49:11; Chrysostom; Cyril of Alexandria; Fortunatianus of Aquileia). For the camel, Jerome (Comm. on Isa 60:6) states explicitly: 'In typo horum camelorum Ismahelitae negotiatores' ('In the type of these camels, the Ishmaelites are meant'), locating Kedar in the land of the Saracens/Ishmaelites. Eusebius links Kedar in Isa 21:16–17 directly to 'Saracenorum gentem... Arabas'; Cyril links Isa 21:7's camel riders to 'desert nomads'; Gregory the Great & Augustine equate camels and Arabia with the Gentile nations (gentes); Fortunatianus links camel-hair to the nations; Pseudo-Dionysius of Tell Mahre notes Caliph ʿUmar entering Jerusalem on a camel.",
    "Fall of Babylon & Non-Muslim Confirmation: Augustine (Babylon = confusio), Cyril (end of idolatry and demon tyranny), and Jerome (idols shattered) interpret Babylon's fall spiritually, while Catholicos Timothy I praises Muhammad as 'worthy of all praise' for turning his people from idolatry to the one God (similarly Sebeos ~660, Chronicle of Zuqnin ~775, John bar Penkaye ~687). Independently, the 7th-century Jewish apocalypse Secrets of Rabbi Simon ben Yoḥai explains Isa 21:7's sequence—donkey chariot before camel chariot—explicitly: 'The rider on the camel represents the Kingdom of Ishmael [the Arabs]' (echoed by Caliph al-Mahdī to Timothy I and al-Kirmānī).",
    "Habakkuk 3:3–4 — Paran, Teman & the 12 Tribes of Ishmael: Eusebius (Onomasticon: Pharan borders the desert of the Saracens where Ishmael lived) and Jerome (De situ et nominibus locorum Hebraicorum; plus translating Pharan as 'onager/wild ass' = Gen 16:12 Ishmael!) tie Paran directly to the Arabs. Cyril defines Teman as 'south' and LXX's 'shady, dense mountain' as a vast multitude of people; Augustine cites Gal 4:25 ('Sinai in Arabia'). Pseudo-Methodius (~690, desert of Yathrib), Vision of Enoch (717, 'southern people'), Jacob of Edessa (praying south toward the Kaaba), and Eutychius (Ishmael sent to Yathrib/Yemen; Prophet Habakkuk himself fleeing into 'Ishmael's territory') confirm southern/Arabian geography. Most strikingly, Armenian Bishop Sebeos (~660) writes of the Arabs: 'They all assembled... and set out from the desert of P’arhan [Paran], as twelve tribes... These are the peoples of Ishmael.'",
    "Praise, Watchman & Horns: Heb. tehillāh ('praise') parallels Arabic ḥamd (root of Muḥammad/Aḥmad) and Timothy I's 'worthy of all praise'; Gregory, Cyril, and Jerome read Hab 2:1's tower watchman as spiritual withdrawal for revelation (paralleled in Ḥirāʾ/taḥannuth), while Hab 3:4's qarnayim ('horns/rays') symbolize rising kingdoms."],
   ["Jerome, Comm. on Isa 21:7 & 60:6; De situ loc. Hebr.","Eusebius, Onomasticon & Comm. on Isa 21:16–17","Cyril of Alexandria; Augustine; Gregory the Great; Fortunatianus","Secrets of Rabbi Simon ben Yoḥai (7th c.)","Sebeos (~660); Pseudo-Methodius (~690); Timothy I; Eutychius; Chronicle of Zuqnin"],
   [],
   {facts:[["Jerome on Camels","'In typo... Ismahelitae' (Isa 60:6)"],["Jewish Apocalypse","R. Simon b. Yoḥai: camel = Ishmael"],["Armenian Witness","Sebeos (~660): Arabs set out from Paran"],["Eutychius","Habakkuk fled into Ishmael's territory"]],
    quotes:[
     {by:"Jerome (Comm. on Isaiah 60:6)",en:"In typo horum camelorum Ismahelitae negotiatores—In the type of these camels, the Ishmaelites are to be understood.",ref:"Commentaria in Isaiam 60:6"},
     {by:"Sebeos (c. 660 CE)",en:"Then they all gathered together... and set out from the desert of P’arhan [Paran], as twelve tribes in the order of the houses of their patriarchs... These are the peoples of Ishmael.",ref:"History of Heraclius (c. 660 CE)"}
    ],
    shots:[
     S('pdf2-biblische-proph-p1.jpg','Biblical Prophecies Dossier: Isaiah 21 donkey/camel riders in Jerome, Eusebius, Cyril, Augustine & R. Simon ben Yoḥai (p. 1).'),
     S('pdf2-biblische-proph-p2.jpg','Habakkuk 3:3–4 Paran/Teman in Eusebius, Jerome, Sebeos, Eutychius & Timothy I (p. 2).')
    ]})
 ],
 {facts:[["Root Word","Heb. slh → Syr. mšabbḥā ('Praised One')"],["Peshitta vs. LXX","Arabic matches Syriac in 3:3, 5, 6, 9, 11"],["Forgery Killer","3:13 has 'forever', so 0 name in Arabic"],["Earliest Arabic","Ibn Rabban (~240 AH) & Ibn Qutayba (†276)"]],
  quotes:[
   {by:"Ibn Qutayba (d. 276 AH, via Ibn al-Jawzī)",en:"In Syriac among them, the name of the Prophet ﷺ is mšabbḥā—and mšabbḥā is Muḥammad ﷺ without doubt.",ref:"al-Wafāʾ I, 35"}
  ],
  visual:{kind:'steps',items:[
   ["1. Unvocalized Hebrew (Mur 88, 2nd c. CE)","Hab 3:3, 3:9, and 3:13 all contain unvocalized סלה (slh)—later vocalized by Masoretes as pause-mark selāh."],
   ["2. Pre-Islamic Syriac Peshitta (1st/2nd c.)","Unlike in the Psalms, the Peshitta translates Hab 3's slh as words: mšabbḥā ('Praised One') at 3:3 & 3:9, and lʿālmin ('forever') at 3:13."],
   ["3. Arabic Translations (9th c. CE)","Ibn Rabban (~240 AH) & Ibn Qutayba (†276 AH) follow Peshitta variants line-by-line, yielding 'Muḥammad/Aḥmad' ONLY at 3:3 & 3:9—never at 3:13."],
   ["4. Honest Assessment","Proves Arabic quotes are non-forged Peshitta translations (with Gen 21 / Knauf NW Arabia links), though Syriac translators meant God/Christ (v. 3:8 YHWH)."]
  ]},
  shots:[
   S('pdf2-jesaja42-habakuk3-p1.jpg','Habakkuk 3 Philology Dossier: 4-step chain (Mur 88 → Peshitta → Arabic) & translation fingerprint table (p. 1).'),
   S('pdf2-jesaja42-habakuk3-p2.jpg','Why slh became mšabbḥā, Ibn Qutayba & al-Jaʿfarī texts, honest balance & Isa 42 caveats (p. 2).')
  ]}));

/* ============================================================================
   4. christianity/bible/science-errors/mustard-seed-smallest-seed
      senfkorn (Mustard Seed Dilemma full dossier + debate framing)
   ============================================================================ */
const SK2=AV('senfkorn-baum','1282144235604279346');

add('christianity/bible/science-errors/mustard-seed-smallest-seed',N(SK2,
 "Even if smaller seeds exist, Jesus only spoke idiomatically/phenomenologically in a parable, or maybe he didn't know local botany under kenosis (Phil 2:7).",
 "The Mustard Seed Dilemma is a formal symmetry-breaker built solely from inerrantist and Chalcedonian commitments—requiring no secular naturalism. Across Greek philology, quantitative Thousand-Kernel Weight (TKW) botany, philosophy of fiction, and Catholic/Evangelical inerrancy standards (Chicago Statement Art. XI–XIII; Providentissimus Deus; Dei Verbum 11), every escape fails or forces a costly theological horn.",
 "The Formal Mustard Seed Dilemma: Philology, TKW Data & Two Horns",
 ["Greek philology & two-pronged logic (Mark 4:31; Matt 13:32): Mark uses the present participle ōn ('being') and Matthew the present indicative estin ('is')—the grammatical mood of factual reality, not irrealis or subjunctive—paired with mikroteron pantōn ('smaller than all'). In Koine Greek, comparative + universal genitive pantōn carries superlative force (Robertson; Wallace; cf. Luke 9:48), and Mark's epi tēs gēs ('on the earth') blocks localizing the reference set. Logical double-blow: even translated strictly comparatively ('smaller than all seeds'), a single smaller seed falsifies it just as decisively as a superlative.",
  "Quantitative TKW comparison & strategic hierarchy (Poppy vs. Mint): Black mustard (Brassica nigra: 1.0–1.5 mm, TKW 2.0–4.0 g) is dwarfed by opium poppy (Papaver somniferum: ~0.6 mm, TKW ~0.3 g, ~10× lighter), mint (Mentha sp.: 0.6–0.7 mm, TKW 0.04–0.13 g, ~30–50× lighter), and wild orchids (Orchidaceae: ~0.05 mm, TKW <0.01 g). Strategic rule: open with poppy (100% seed-propagated, visible/handled/traded, doubly proven by Frumin et al. 2015 in Ashkelon & Mishnah Sheviʿit 2:7 / Maʿaserot 1:1 / b. Rosh Hashanah 13b, plus Mishnah Kilayim 2:9 distinguishing tiny sown crops), then reinforce with Matt 23:23 ('you tithe mint, dill, and cumin'), which removes the 'uneducated Galilean' excuse—while honestly noting mint is usually vegetatively propagated, so poppy remains the airtight core.",
  "Four hermeneutical escapes dismantled: (1) Parable/fictionality fails via philosophy of fiction: embedded factual claims inside fiction remain truth-evaluable ('Holmes took the train to London, capital of England'—and Chicago Statement Art. XII demands inerrancy on nature claims); (2) Accommodation/phenomenological language fails by disanalogy: 'sunrise' accurately describes an Earth-frame appearance, whereas holding a 1.5 mm mustard seed beside a 0.6 mm poppy seed never makes mustard look smaller; (3) Hyperbole/proverb (Mishnah Toharot 8:8; b. Berakhot 31a) fails because Providentissimus Deus (Leo XIII, 1893) forbids attributing error even when quoting popular speech, and calling an indicative biological comparison 'hyperbole' surrenders to limited inerrancy; (4) Answers in Genesis's 'microevolution/speciation' claim fails against Ashkelon's Iron Age poppy finds (~1200–700 BCE, a millennium before Jesus).",
  "The Two Horns, Kenosis Trap & Islamic Asymmetry: Horn A (Strict Inerrancy: Chicago Art. XI–XIII; Providentissimus Deus) leaves a factual botanical falsehood in an omniscient, inerrant text ('makes God the author of error' → system implosion). Horn B (Limited Inerrancy: Dei Verbum 11 'for the sake of our salvation' / Ratzinger) rescues metaphor only by surrendering the epistemic guarantee for Genesis, the Flood, and Passion history. Crucially, do NOT confuse objective inerrancy with subjective Christology (kenosis, Phil 2:7) and NEVER concede 'Jesus didn't know farming': Mark 13:32 is an admission of ignorance ('does not know'), whereas Matt 13:32 / Mark 4:31 asserts a positive falsehood in the indicative! Either Jesus knew poppy was smaller (deception/error) or didn't know yet asserted it (falsehood in an inerrant text)—sharpened by Col 1:16 (Creator misclassifying his own creation) and John 3:12. In Islam, by contrast, the Prophet ﷺ is a mortal human messenger, never the omniscient Creator Logos."],
 ["Mark 4:31; Matt 13:32; Matt 23:23; Mark 13:32; Col 1:16; John 3:12; Phil 2:7","A. T. Robertson; D. B. Wallace (Greek Grammar Beyond the Basics)","Frumin et al. 2015, Scientific Reports 5:13308; Mishnah Sheviʿit 2:7, Kilayim 2:9, Toharot 8:8, b. Ber. 31a","Chicago Statement (1978) Art. XI–XIII; Leo XIII, Providentissimus Deus (1893); Vatican II, Dei Verbum 11"],
 [],
 {facts:[["Mustard TKW","1.0–1.5 mm · 2.0–4.0 g"],["Poppy TKW","~0.6 mm · ~0.3 g (~10× lighter)"],["Mint TKW","0.6–0.7 mm · 0.04–0.13 g (~30–50×)"],["Theological Fork","Strict Inerrancy vs. Limited Inerrancy"]],
  quotes:[
   {by:"Mark 4:31 (Greek Text)",en:"...hōs kokkō sinapeōs, hos hotan sparē epi tēs gēs, mikroteron on pantōn tōn spermatōn tōn epi tēs gēs (smaller [than] all the seeds that are on the earth).",ref:"Gospel of Mark 4:31"}
  ],
  visual:{kind:'compare',
   left:{title:"Horn A: Strict Inerrancy (Chicago Art. XII)",items:["Naturaussagen / nature claims must be error-free","Poppy (Ashkelon & Mishnah Sheviʿit 2:7) is ~10× lighter & 100% seed-sown","Indicative falsehood from Creator Logos (Col 1:16) → system implosion"]},
   right:{title:"Horn B: Limited Inerrancy (Dei Verbum 11)",items:["Only salvation-essential truths are guaranteed error-free","Permits botanical error in the Gospels","Erodes conservative guarantees for Genesis, Flood & Passion history"]}},
  shots:[
   S('pdf2-senfkorn-p1.jpg','The Mustard Seed Dilemma: Greek philology, TKW botanical table, Frumin 2015 & Mishnah Sheviʿit 2:7 (p. 1).'),
   S('pdf2-senfkorn-p2.jpg','Dismantling parable/accommodation/hyperbole/speciation escapes, Horns A & B, kenosis & debate sequence (p. 2).')
  ]}));

/* ============================================================================
   5. atheism/d-ia-arguments-for-god/t-god-design-and-fine-tuning
      god-fine-tuning (Robin Collins, "God, Design, and Fine-Tuning")
   ============================================================================ */
const GFT=IA('#arguments-for-god › God, Design, and Fine Tuning','1514404863285395656');

add('atheism/d-ia-arguments-for-god/t-god-design-and-fine-tuning',N(GFT,
 null,
 "Robin Collins's classic paper 'God, Design, and Fine-Tuning' (God Matters, 2002) quantifies the razor-thin calibration of gravity, the strong nuclear force, and the cosmological constant—illustrating why design is the only plausible explanation.",
 "Robin Collins: Quantifying Physical Fine-Tuning & the Mars Biosphere Analogy",
 ["The Mars Biosphere Analogy: Imagine astronauts on Mars discovering a domed biosphere calibrated at 70°F, 50% humidity, with oxygen recycling, energy capture, and food production. Nobody would attribute it to random volcanic eruptions separating metals and compounds by chance; we unanimously infer intelligent design because chance is unimaginably improbable. Our universe exhibits that same razor-edge balance (Freeman Dyson 1979, p. 251: 'There are many... lucky accidents in physics' enabling liquid water, carbon chains, and breakable hydrogen bridges; Paul Davies 1988, p. 203: 'the impression of design is overwhelming').",
  "Fine-tuning of Gravity (1 part in 10³¹): Across the four fundamental forces, the strong nuclear force is 10⁴⁰ times stronger than gravity (Barrow & Tipler 1986, pp. 293–295). Increasing Earth's gravity a billionfold would crush any land organism remotely our size (Martin Rees 2000, p. 30: 'even insects would need thick legs'); even shrinking to a 40-foot (12-meter) planet with 1,000× gravity cannot sustain an ecosystem for intelligent evolution. Relative to the 10⁴⁰ total force-strength span, a billionfold margin is still 1 part in 10³¹—and increasing gravity by just >3,000× prevents stars from lasting over 1 billion years (vs. our Sun's 10 billion years).",
  "Fine-tuning of the Strong Nuclear Force (1% threshold): Using stellar nucleosynthesis models, Heinz Oberhummer et al. (2000, p. 88) showed that a mere 1% increase or decrease in the strong force slashes stellar production of carbon or oxygen by 30- to 1,000-fold—crippling carbon-based life and depriving living systems of water's irreplaceable oxygen (Denton 1998, pp. 19–47, 117–140).",
  "Fine-tuning of the Cosmological Constant (Λ): Einstein's cosmological constant corresponds to the energy density of empty space, acting as repulsive anti-gravity. If Λ had any significant positive value, space would expand so rapidly that matter would disperse before galaxies, stars, or small aggregates could ever form—requiring it to sit exceedingly close to zero."],
 ["Robin Collins, 'God, Design, and Fine-Tuning' (God Matters, Longman, 2002)","Freeman Dyson (1979, p. 251); Paul Davies (1988, p. 203)","Barrow & Tipler (1986, pp. 293–295); Martin Rees (2000, p. 30)","Heinz Oberhummer et al. (2000, p. 88); Michael Denton (1998)"],
 [],
 {facts:[["Author","Robin Collins (2002)"],["Gravity Margin","1 part in 10³¹ (or >3,000× kills stars)"],["Strong Force","±1% cuts C/O by 30×–1,000×"],["Cosmological Λ","Must sit exceedingly close to zero"]],
  quotes:[
   {by:"Freeman Dyson (cited by Robin Collins)",en:"There are many... lucky accidents in physics. Without such accidents, water could not exist as liquid, chains of carbon atoms could not form complex organic molecules, and hydrogen atoms could not form breakable bridges between molecules.",ref:"Dyson 1979, p. 251 (in Collins 2002)"}
  ],
  visual:{kind:'steps',items:[
   ["Mars Biosphere Intuition","A functioning dome on Mars (70°F, 50% humidity, O₂/food systems) forces a design inference over blind volcanic luck."],
   ["Gravity & Stars (1 in 10³¹)","Strong force spans 10⁴⁰× gravity; >3,000× gravity cuts stellar lifespans below 1B yrs; billionfold crushes complex life."],
   ["Strong Force (±1%)","Oberhummer et al. (2000): 1% shift drops stellar carbon/oxygen 30–1,000×."],
   ["Cosmological Constant","Any substantial positive energy density of empty space rips matter apart before galaxies form."]
  ]},
  shots:[
   S('pdf2-god-fine-tuning-p1.jpg','Robin Collins, "God, Design, and Fine-Tuning" (2002): Mars biosphere analogy, Dyson & Davies (p. 1).'),
   S('pdf2-god-fine-tuning-p2.jpg','Quantitative fine-tuning of gravity (10³¹), strong nuclear force (±1%, Oberhummer) & cosmological constant (p. 2).')
  ]}));

/* ============================================================================
   6. atheism/d-ia-arguments-for-god/t-psychological-harmony
      cutpha (Cutter & Crummett, "Psychophysical Harmony: A New Argument for Theism")
   ============================================================================ */
const PH=IA('#arguments-for-god › Psychological harmony','1514404863285395656');

add('atheism/d-ia-arguments-for-god/t-psychological-harmony',N(PH,
 null,
 "Brian Cutter and Dustin Crummett formalize the argument from psychophysical harmony (CUTPHA v2.2): unlike earlier consciousness arguments, it requires neither refuting physicalism nor assuming complex psychophysical laws—and survives multiverse objections.",
 "CUTPHA v2.2: Normative Harmony, Refuting Naturalistic Escapes & Multiverse Immunity",
 ["How CUTPHA improves on earlier arguments from consciousness: Unlike Locke (1689), Adams (1992), Swinburne (2004, ch. 9), and Moreland (2008), Cutter & Crummett do NOT rely on raw law-complexity (vulnerable to Oppy 2006's critique that mere complexity without special value favors theism no more than atheism) and do NOT require independently refuting physicalism (working under dualism + causal completeness first, then generalizing in §3 to interactionism, physicalism, idealism, and Russellian monism). Their explanandum is specifically psychophysical harmony—correlation of phenomenal states with normative/semantic roles—targeting purposeless naturalism (while noting compatibility with axiarchism [Leslie 2001], teleology [Nagel 2012], or aesthetic deism [Draper 2017]).",
  "Three types of Normative Harmony (Pautz 2020; Goff 2018): (1) Hedonic harmony: damaging stimulus causes brain state X → avoidance behavior, and psychophysical laws conveniently pair X with pain (intrinsically bad, giving reason to avoid)—whereas a pleasure/pain inversion would turn life into a 'pathetic farce' where we flee pleasure and inflict pain on loved ones. Evolution presupposes this harmony rather than explaining it, since natural selection cannot alter fundamental psychophysical laws. (2) Epistemic harmony: brain state Y causing 'round object' grasping/speech pairs with phenomenal presentation of roundness (justifying round-beliefs) rather than triangles or random static. (3) Cognitive harmony (Goff 2018 'cognitive fine-tuning'): if cognitive phenomenalism holds, practical and theoretical rationality match sensory/functional states with rational phenomenal beliefs and desires (kept optional so the argument stays neutral).",
  "Dismantling naturalistic replies: (a) Normative error theory denies that pain is intrinsically bad or experiences justify beliefs—an absurdly high price to save atheism. (b) Contingent normative roles (attitudinal theories: Armstrong 1968, Parfit 1984, Heathwood 2007) come in two versions: grounding pain's badness in another phenomenal attitude ('felt dislike') merely relocates the harmony puzzle, while grounding it in non-phenomenal topic-neutral functional roles still leaves phenomenal/semantic harmony unexplained.",
  "Multiverse immunity (§4): Unlike cosmological fine-tuning, invoking an unobservable multiverse does not easily dissolve psychophysical harmony—and even the bare existence of value-bearing consciousness over inert mass/charge already favors a value-orienting Creator."],
 ["Cutter & Crummett, 'Psychophysical Harmony: A New Argument for Theism' (CUTPHA v2.2)","Adam Pautz (2020); Philip Goff (2018); David Chalmers (2018); Bradford Saad (2019)","Richard Swinburne (2004, ch. 9); Robert Adams (1992); Graham Oppy (2006)","Derek Parfit (1984); David Armstrong (1968); Chris Heathwood (2007)","John Leslie (2001); Thomas Nagel (2012); Paul Draper (2017)"],
 [],
 {facts:[["Explanandum","Normative & semantic harmony (not raw complexity)"],["Core Types","Hedonic, Epistemic & Cognitive (optional)"],["Metaphysics","Works on dualism, physicalism, idealism, monism"],["Key Edge","Immune to multiverse hypotheses (§4)"]],
  quotes:[
   {by:"Cutter & Crummett (CUTPHA §2.2)",en:"Evolutionary explanation presupposes normative harmony; it does not explain it... It is not the evolutionary biologist's job to explain the character of the psychophysical laws.",ref:"Psychophysical Harmony: A New Argument for Theism, §2.2"}
  ],
  visual:{kind:'compare',
   left:{title:"Why Naturalism Fails",items:["Evolution cannot shape fundamental psychophysical laws","Pleasure/pain inversion or triangle/round mismatch is physically conceivable","Normative error theory denies self-evident badness of pain","Multiverse does not easily explain away local law harmony"]},
   right:{title:"Why Theism Explains Harmony",items:["God has reason to align phenomenal value with agency & knowledge","Neutral on cognitive phenomenalism & physicalism refutations","Avoids Oppy's complexity objection (harmony realizes distinct value)","Supported by Pautz (2020), Goff (2018), Chalmers (2018) literature"]}},
  shots:[
   S('pdf2-cutpha-p1.jpg','Cutter & Crummett (CUTPHA): Introduction, contrast with Swinburne/Adams/Oppy & metaphysical neutrality (p. 1).'),
   S('pdf2-cutpha-p2.jpg','Normative harmony (hedonic, epistemic, cognitive), evolution limit & error-theory/attitudinal replies (p. 2).')
  ]}));

/* ============================================================================
   7. christianity/islam-vs/d-ia-muhammad-صلى-الله-عليه-وسلم-in-the-bible/t-4-ezra-matt-21-22
      matt21-22 + 5ezra
   ============================================================================ */
const EZ=IA('#muhammad-ﷺ-in-the-bible › 4 Ezra & Matt 21-22','1515609239777972345');

add('christianity/islam-vs/d-ia-muhammad-صلى-الله-عليه-وسلم-in-the-bible/t-4-ezra-matt-21-22',N(EZ,
 null,
 "Matthew 21–22 builds directly on Daniel 2 & 7 and 1 Enoch, predicts the 70 CE Temple destruction (attested across Q and Thomas 71), and connects the transfer of God's Kingdom after 70 CE to new Abrahamic heirs—paralleled in authentic ḥadīth without Gospel access.",
 "Matthew 21–22 Dossier: Daniel 2/7, 1 Enoch, 70 CE & Historical Authenticity",
 ["Matthew 22:1–14, Chrysostom & post-70 CE timing: John Chrysostom (Homily 69 on Matthew) explicitly identifies the king burning the murderers' city 40 years after Christ as Jerusalem's destruction in 70 CE under Vespasian and Titus. Expanding on Daniel 7 (the King = God, banquet = Kingdom/Heaven, servants = prophets like John and Jesus killed by tenants), v. 10 sends servants out to all nations AFTER the city is burned (after 70 CE)—excluding Paul's pre-70 CE ministry.",
  "Daniel 2 & 1 Enoch nexus: Matt 22:1 draws on Daniel 2 & 7 (where God's Kingdom crushes the Roman empire politically/militaristically just as Rome crushed Greece, not purely 'spiritually'), while Matt 22:8–10 echoes Isaiah 42's 'light to the Gentiles.' Crucially, Matthew exhibits 3× more Enochic judgment features than Danielic ones—specifically unique parallels with 1 Enoch 6, 7, 14–17, 19–21, 29–30 including the Gentile-light motif.",
  "Matthew 21:33–43 + Matthew 3:7–10 (Q): In Matt 21, the Landowner (God) gives the vineyard (Kingdom of God, Dan 7:18) to tenants who kill his prophets and son; AFTER destroying them (70 CE Temple destruction), God transfers the Kingdom to 'another nation producing its fruits.' Paired with John the Baptist's Q-attested warning (Matt 3:7–10 / Luke 3:7–9) that unrepentant Israel will be cut down and God will raise new children for Abraham outside Isaac's line, the heir points toward Abraham's other son, Ishmael.",
  "Multiple Independent Attestation (HCM) & Prophetic Ḥadīth Parallel: The vineyard and banquet parables appear independently in Q and the Gospel of Thomas, while Jesus's prediction of the Temple's destruction is attested in Q 13:34–35 and Gospel of Thomas 71 (dated 45–60 CE as a kernel saying by April DeConick). Remarkably, an authentic ḥadīth attributes a version of Matthew 22's banquet parable to the Prophet Muḥammad ﷺ—even though historian Sydney Griffith (The Bible in Arabic) confirms no pre-Islamic Arabic Gospel existed for him to draw upon, and the theological profile (post-70 CE Arab who had not witnessed prior prophets) fits him directly."],
 ["Matthew 3:7–10; 21:33–43; 22:1–14","Daniel 2 & 7; 1 Enoch 6–30; Isaiah 42","John Chrysostom, Homily 69 on Matthew","Q 13:34–35; Gospel of Thomas 71 (DeConick 45–60 CE)","Sydney Griffith, The Bible in Arabic"],
 [],
 {facts:[["Temple Prediction","Q 13:34–35 & Thomas 71 (45–60 CE)"],["Patristic Witness","Chrysostom Homily 69 → 70 CE"],["Enochic Links","3× more 1 Enoch features than Daniel"],["Arabic Gospel","Sydney Griffith: none in Hijāz"]],
  visual:{kind:'steps',items:[
   ["1. Tenants & Prophets Killed","Israel's leaders reject prophets & Jesus (Matt 21–22; Dan 7)."],
   ["2. City Burned in 70 CE","Jerusalem destroyed under Vespasian & Titus (Chrysostom Homily 69; Q 13:34–35; Thomas 71)."],
   ["3. Kingdom Transferred","Given to new Abrahamic nation from the East producing its fruits (Matt 21:43; 3:9; 6 Ezra Rome-fall)."]
  ]},
  shots:[
   S('pdf2-matt21-22-p1.jpg','Matthew 21–22 Dossier: Chrysostom Homily 69, Daniel 2/7, 1 Enoch parallels & Kingdom transfer (p. 1).'),
   S('pdf2-matt21-22-p2.jpg','Q 13:34–35 & Thomas 71 historicity, Sydney Griffith on Arabic Gospels, and 6 Ezra/Daniel 2 link (p. 2).')
  ]}));

add('christianity/islam-vs/d-ia-muhammad-صلى-الله-عليه-وسلم-in-the-bible/t-4-ezra-matt-21-22',N(EZ,
 null,
 "Detailed textual analysis of 5 Ezra (c. 150 CE) and 6 Ezra (late 3rd c. CE) shows early Jewish-Christians already read Matthew 21–23 alongside Baruch 3–4 as transferring God's law-keeping Kingdom to a distant nation from the east—explicitly identified with Arabia.",
 "5 Ezra (c. 150 CE) & 6 Ezra: The Earliest Interpretation Pointing East to Arabia",
 ["Three independent books of 2 Esdras (Coggins & Knibb, pp. 76–78; Bergren, Sixth Ezra, pp. 5–7, 17): 4 Ezra (2 Esd 3–14) is a late-1st-c. Jewish apocalypse under Domitian (81–96 CE); 5 Ezra (2 Esd 1–2) is a Christian work dated c. 150 CE; 6 Ezra (2 Esd 15–16) is a late-3rd-c. Christian apocalypse (joined by c. 400–450 CE). At c. 150 CE, 5 Ezra is the earliest surviving Christian interpretation of Matthew 21–23—predating Irenaeus (Against Heresies 4.36, c. 180 CE), Tertullian, Origen, Hilary, Jerome, Chrysostom, Augustine, and Cyril.",
  "5 Ezra's direct parallels to Matt 21–23 & law-observant profile: 5 Ezra 1:24–25 echoes Matt 21:43 ('turn away from Jacob and Judah' and give His name to 'another nation' keeping His statutes); 1:30–33 echoes Matt 23:34–38 (prophets killed, house abandoned, scattered like straw before the wind); 2:10–13 transfers the 'kingdom of Jerusalem' (Coggins & Knibb p. 91: equivalent to Kingdom of God); and 1:35–40 describes a distant eastern nation that previously knew not God, yet believes, preserves the prophets' teachings, keeps God's commandments (1:24–25, 35–37; 2:40), and inherits Abraham, Isaac, and Jacob—without mentioning crucifixion or atonement, fitting a law-observant Jewish-Christian milieu (Coggins & Knibb pp. 77–78, 97; p. 87 admits 'from the east' goes unexplained on a generic Church reading).",
  "The East = Arabia & Baruch 3–4 reversal: In Genesis 25:1–6, Judges 6:3, 33; 7:12, Jeremiah 49:28 (Kedar), and pre-Christian Jubilees 20:11–13 (Dead Sea Scrolls: Ishmael & Keturah from Paran toward Babylon = Arabs), 'the east' denotes Arabian tribes; likewise 1 Clement 25:1, Justin Martyr (Dialogue with Trypho 77–78: Magi from Arabia), and Tertullian (On the Resurrection of the Flesh 13) locate 'the east' in Arabia (vs. Clement of Alexandria's Persia). Crucially, Theodore Bergren (1989, pp. 677–683) showed 5 Ezra 1:38 adapts Baruch 4:36–37 ('look to the east') while reversing Baruch 4:3—and immediately preceding it, Baruch 3:22–23 names Hagar's descendants and Teman/Tema among peoples ignorant of divine wisdom (equated with God's law in Baruch 4:1)!",
  "6 Ezra 15:28–45 & the Palmyrene paradox: 6 Ezra explicitly depicts Arabian forces emerging from the east, defeating Persia/Carmanians, and eastern winds destroying 'Babylon' (Rome, Daniel's 4th kingdom per 4 Ezra 12:11–12, 31–33). While Coggins & Knibb (p. 289) and Bergren (p. 132) link this to Odaenathus of Palmyra, Michael C. A. Macdonald (Arabs and Empires before the Sixth Century, 2015, p. 13) proves no Greco-Roman writer calls Palmyrenes Arabs, and Knibb/Bergren admit the campaign sequence and v. 33 ambush mismatch Palmyra. Why did the author still call them 'Arabians'? Because—like Josephus (Jewish War 6.312–313 on Vespasian), Habakkuk Pesher (1QpHab cols. 2–4: Chaldeans → Romans), and 4 Ezra 12 (Greece → Rome)—he mapped contemporary events onto an already-circulating Jewish-Christian expectation of an Arabian power conquering Rome."],
 ["5 Ezra (2 Esd 1–2, c. 150 CE); 6 Ezra (2 Esd 15–16); 4 Ezra 12:11–12","R. J. Coggins & M. A. Knibb, First and Second Books of Esdras","Theodore Bergren, Sixth Ezra & JBL 1989 ('People Coming from the East')","Michael C. A. Macdonald, Arabs and Empires before the Sixth Century (2015)","Baruch 3:22–4:37; Jubilees 20:11–13; 1 Clement 25:1; Justin, Trypho 77–78","Josephus, Jewish War 6.312–313; 1QpHab cols. 2–4"],
 [],
 {facts:[["5 Ezra Date","c. 150 CE (pre-Irenaeus c. 180 CE)"],["Source Parallel","Baruch 3:22–4:37 (Hagar's sons)"],["6 Ezra 15:28–45","Arabians from East smash Babylon/Rome"],["Macdonald (2015)","Palmyrenes weren't called Arabs"]],
  quotes:[
   {by:"Michael C. A. Macdonald (2015, p. 13)",en:"No Greek or Roman writer refers to the Palmyrenes as Arabs... the arguments advanced for regarding them as such are based upon false assumptions.",ref:"Arabs and Empires before the Sixth Century, p. 13"}
  ],
  visual:{kind:'compare',
   left:{title:"5 Ezra (c. 150 CE) — Religious Inheritance",items:["Earliest Christian reading of Matt 21–23","Distant eastern nation inherits Abraham & Jerusalem kingdom","Unfamiliar with prophets yet keeps their teachings & God's law","Adapts Baruch 3–4 (Hagar's descendants + eastern arrival)"]},
   right:{title:"6 Ezra (late 3rd c.) — Political Dominance",items:["Explicitly names Arabian forces from the east (15:28–29)","Victorious eastern winds shatter Babylon/Rome (15:34–45)","Calls Palmyrenes 'Arabs' due to pre-existing Arab expectation","Matches Daniel 2 / 4 Ezra 12 expectation of Rome's successor"]}},
  shots:[
   S('pdf2-5ezra-p1.jpg','5 Ezra & Matt 21–22 Research Paper: Dating of 4–6 Ezra, Jewish-Christian law-observance & East = Arabia (p. 1).'),
   S('pdf2-5ezra-p2.jpg','Baruch 3–4 parallels, 6 Ezra 15 Arabian conquerors, Macdonald (2015) on Palmyra & ancient precedents (p. 2).')
  ]}));

/* ============================================================================
   8. christianity/church/d-ia-paul-related/t-paul-rebuked-by-jesus
      jesus-rebukes-paul (18 slides)
   ============================================================================ */
const PRP=IA('#paul-related','1516263304463519815');

add('christianity/church/d-ia-paul-related/t-paul-rebuked-by-jesus',N(PRP,
 "Paul claimed to fulfill Isaiah 49:6 as the Gentile prophet (Acts 13:47), and Peter's epistle (2 Peter 3:15–16) endorses his writings as Scripture.",
 "Paul fails every biblical and historical test of the Isaianic Gentile Servant (Isaiah 42 & 49)—chronology, geography, law-giving, military agency, and prophecy—while Jesus explicitly warns against Benjamite 'wolves,' private desert/room visions, and Ephesus's false apostle, and 1–2 Peter are late 2nd-century anachronistic pseudepigrapha.",
 "Why Paul Fails Isaiah 42/49 & Is Rebuked by Jesus's Own Criteria",
 ["1. Post-70 CE chronology (Matthew 22:1–10): In Jesus's wedding-banquet parable, the king burns the murderers' city (Jerusalem, 70 CE) BEFORE sending servants out to invite all the Gentiles (v. 10). Paul preached to Gentiles before 70 CE, disqualifying him from that post-70 CE prophetic mandate.",
  "2. Geography & New Gentile Law (Isaiah 42:1–4, 11): A 7th-century BCE rock inscription and 1st-century CE Targum Jonathan identify Kedar as Arabia; Paul never ministered in Mecca or Medina. Isaiah 42 says the Gentile servant establishes his own Torah/justice (mishpāṭ—whose Aramaic equivalent is dīn, Arabic dīn, established in Islam per Q 61:9 & 24:55). Paul abolished the Law, was accused of apostasy by James, and established no new law.",
  "3. 2 Peter 3:15–16 is a late 2nd-century forgery: Aside from Paul's own self-attestations (Galatians, 2 Timothy), the only NT endorsement of Paul's letters as 'Scripture' is 2 Peter 3:15–16. Yet both 1 and 2 Peter betray late 2nd-century dating by treating NT epistles as 'Scripture'—anachronistic before ~150 CE, since Ignatius, Justin Martyr, and Tatian (who treated only his harmonized Diatessaron as Scripture) did not treat epistles as canonical Scripture.",
  "4. Warrior Servant & Jewish Shalīaḥ agency (Exod 17; Isa 42:13, 24–25): Drawing on ancient Jewish halakhic agency (shalīaḥ—traced to at least the 1st c. BCE in b. Qiddushin per Raymond James Essoe citing Yaakov Elman), Moses strikes with the rod yet God says 'I will strike.' Targum Jonathan (1st c. CE) interprets Isaiah 42 via Cyrus (Isa 44–45 'messiah') as a divinely commissioned warrior-deliverer; Paul was never a warrior.",
  "5. Song of Tahlīl & Prophetic Spirit (Rūaḥ): Isaiah 42:10–12 foretells 'islands' (Arabia) singing his praise (Hebrew tehillāh → tahlīl, Lā ilāha illā Allāh chanted 24/7 worldwide through five daily adhāns). Moreover, Hebrew rūaḥ denotes prophecy and divine support: Paul gives no specific historical prophecies and is tormented by 'a messenger of Satan' (2 Cor 12:7), whereas the Prophet ﷺ foretold Rome's victory in 3–9 years at the 'lowest/nearest' land (Q 30:2–6, 622–627 CE), bare-footed Bedouins competing in tall towers funded by earth's riches (Bukhārī 4777), and Arabia returning to gardens and rivers (Muslim 157c, matching paleoclimatic wet phases ~180k years ago).",
  "6. Tribal, Vision & Revelation Rebukes: Jesus warns of false prophets who are 'inwardly ferocious wolves' (Matt 7:15)—echoing Genesis 49:27's wolf prophecy for the tribe of Benjamin, Paul's own tribe (Rom 11:1; Phil 3:5). Jesus rejects private desert/inner-room claims (Matt 24:26), whereas the Prophet ﷺ received revelation in front of eyewitnesses (e.g., Muslim 8a). Finally, in Revelation 2:2 Jesus commends the church of Ephesus (in Asia Minor, which Paul lamented had turned away from him, 2 Tim 1:15) for testing and rejecting a false apostle, alongside Revelation's insistence on keeping the commandments."],
 ["Acts 13:47; Matt 7:15; 22:1–10; 24:26; Gen 49:27; Rev 2:2; 2 Pet 3:15–16","Isaiah 42:1–13; 49:6; Targum Jonathan (Isa 42)","Raymond James Essoe (on 1st-c. BCE shalīaḥ / b. Qiddushin & Yaakov Elman)","Qurʾān 30:2–6; 61:9; 24:55","Ṣaḥīḥ al-Bukhārī 4777; Ṣaḥīḥ Muslim 8a, 157c"],
 [],
 {facts:[["Chronology","Matt 22 sends Gentile call AFTER 70 CE"],["2 Peter 3:15–16","Anachronistic post-150 CE 'Scripture' tag"],["Tribal Clue","Benjamite 'ferocious wolf' (Gen 49:27)"],["Ephesus Test","Rev 2:2 praises rejecting false apostle"]],
  visual:{kind:'compare',
   left:{title:"Paul's Record vs. Isa 42 & Jesus",items:["Preached before 70 CE (fails Matt 22 post-70 sequence)","Never in Kedar/Arabia; abolished Law (accused by James)","Private desert vision (Matt 24:26); tormented by Satan's messenger","Benjamite ('wolf,' Gen 49:27); rejected in Asia/Ephesus (Rev 2:2)"]},
   right:{title:"Prophet Muḥammad ﷺ & Isa 42 Profile",items:["Post-70 CE Gentile mission out of Kedar/Arabia","Establishes complete dīn (Aramaic of mishpāṭ, Q 61:9)","Public revelation (Muslim 8a) & verified prophecies (Q 30:2–6)","Global 24/7 tahlīl (tehillāh) & righteous warrior-leader (shalīaḥ)"]}},
  shots:[
   S('pdf2-jesus-rebukes-paul-p1.jpg','Jesus Rebukes Paul Slides: Isa 49:6/42, Matt 22 post-70 CE timing, Kedar & mishpāṭ/dīn (p. 1).'),
   S('pdf2-jesus-rebukes-paul-p2.jpg','2 Peter anachronism, shalīaḥ warrior agency, Q 30/hadith prophecies, Benjamin wolf & Rev 2:2 (p. 2).')
  ]}));

/* ============================================================================
   9. christianity/bible/d-ia-biblical-corruption/t-how-to-argue-for-q
      proving-q (14 slides)
   ============================================================================ */
const PQ=IA('#biblical-corruption','1516046786102562919');

add('christianity/bible/d-ia-biblical-corruption/t-how-to-argue-for-q',N(PQ,
 "Maybe there is no Q source at all—Matthew just copied Mark, and Luke simply copied Matthew (the Farrer hypothesis).",
 "Four converging text-critical proofs from Harry T. Fleddermann and John Kloppenborg establish Q as a pre-Markan written Greek document independently used by Matthew and Luke—refuting both 'eyewitness independence' and the Farrer hypothesis.",
 "Four Proofs for a Written Pre-Markan Q Source (Fleddermann & Kloppenborg)",
 ["1. Pre-Markan existence via Mark–Q overlaps (Harry T. Fleddermann, Mark and Q: A Study of the Overlap Texts): Across ~29 Mark–Q overlaps (50 Markan verses drawing on 65 Q sayings), Mark 1:2–3 and Q 7:27 preserve the exact same conflation of Exodus 23:20 and Malachi 3:1 using a rare non-LXX Greek translation of Malachi 3:1—an impossible coincidence independently. Yet Mark alters 'my way' to 'your way' (fitting John/Jesus) and adds Isaiah 40:3 while erroneously attributing the entire combined quote to 'Isaiah'! A careful author who personally harmonized Exod 23:20 and Mal 3:1 would not misattribute it to Isaiah; rather, Mark received the pre-formed Q unit (which originally introduced it simply as 'Scripture' in the context of John speaking to Jesus's disciples) and mislabeled it.",
  "2. Higher verbatim Greek agreement in the Double Tradition (John Kloppenborg): Matthew and Luke share ~252 sayings absent from Mark with higher average verbatim agreement than the Triple Tradition (where both are copying Mark)—including 11 shared Q pericopes exhibiting 80–97% verbatim Greek agreement (averaging ~85%).",
  "3. Shared relative sequence across separated narrative blocks: Roughly 30% of the 252 Double-Tradition sayings appear in the exact same relative order (often up to 5 sayings in a row)—even when Luke scatters them across his Travel Narrative (Luke 9–18, e.g., placing Sermon on the Mount material across separate walking episodes in Luke 11–16) while Matthew clusters them in unified discourses. Two authors reading and scanning the same written scroll in sequence explain this effortlessly; random oral tradition cannot.",
  "4. Refuting Farrer (Matthew & Luke are mutually independent): Whenever Luke alters Mark's sequence, Matthew never reproduces Luke's change, and vice versa. Where both omit a Markan/Q overlap (e.g. John's preaching), they edit Mark in completely independent, diverging ways (Luke extends the Isaiah quote by two verses, Matthew does not; on Jesus's alleged ignorance in the healing miracle, Matthew makes Jesus a mind-reader while Luke says Jesus felt power leave him; and where Mark/Q end, their resurrection narratives directly contradict each other). Under Farrer, Luke would have had to extract non-Markan sayings from Matthew's unified Sermon on the Mount and invent conflicting Galilean-to-Jerusalem contexts for sayings he treated as authoritative. By the Criterion of Multiple Independent Attestation, Q proves an earlier written Jesus sayings layer."],
 ["Harry T. Fleddermann, Mark and Q: A Study of the Overlap Texts","John S. Kloppenborg (Q / Synoptic Problem)","Mark 1:2–3 vs. Q 7:27 (Exod 23:20 + Mal 3:1 + Isa 40:3)","Luke 9–18 (Travel Narrative) vs. Matthew 5–7","Synoptic Mark–Q overlaps (29 overlaps / 252 sayings)"],
 [],
 {facts:[["Mark–Q Overlaps","~29 overlaps (50 Mk vv. / 65 Q sayings)"],["Double Tradition","~252 shared non-Markan sayings"],["Verbatim Peak","11 pericopes at 80–97% (~85% avg)"],["Sequence Match","~30% in identical relative order"]],
  visual:{kind:'steps',items:[
   ["1. Mark Used Q (Fleddermann)","Mark 1:2–3 & Q 7:27 share the same rare non-LXX Exod 23:20 + Mal 3:1 conflation; Mark mislabels it 'Isaiah'."],
   ["2. Shared Order & Wording (Kloppenborg)","~252 sayings with higher verbatim agreement than Mark (~85% in 11 pericopes) and ~30% matching sequence."],
   ["3. Matt & Luke Are Independent","Never copy each other's Markan changes; contradict each other when sources end; Luke wouldn't scramble Matt 5–7."],
   ["4. Historical-Critical Payoff","Multiple independent attestation recovers a written pre-Markan Jesus sayings document (Q)."]
  ]},
  shots:[
   S('pdf2-proving-q-p1.jpg','Proving Q Slides: Mark 1:2–3 / Q 7:27 overlap (Fleddermann) & Double-Tradition sequence (Kloppenborg) (p. 1).'),
   S('pdf2-proving-q-p2.jpg','Synoptic comparison, Matt/Luke editorial independence vs. Farrer & 80–97% verbatim Q pericopes (p. 2).')
  ]}));

/* ============================================================================
   10. christianity/bible/d-ia-biblical-corruption/t-islamic-scholarly-stances-on-the-bible-s-textual-i
       islamic-bible-stances (Bassam Zawadi, modern scholarship survey)
   ============================================================================ */
const IBS=IA("#biblical-corruption › Islamic Scholarly Stances on the Bible's Textual Integrity",'1516046786102562919');

add('christianity/bible/d-ia-biblical-corruption/t-islamic-scholarly-stances-on-the-bible-s-textual-i',N(IBS,
 null,
 "Bassam Zawadi's scholarly survey—drawing on Martin Whittingham, Ryan Schaffner, Clint Hackenburg, and Jake Kildoo—dismantles the missionary claim that early Muslim historians and theologians (Ibn Isḥāq through al-Yaʿqūbī) accepted the textual integrity of the extant Bible.",
 "Early Authorities Re-examined: Ibn Isḥāq to al-Yaʿqūbī (Zawadi / Whittingham / Schaffner)",
 ["Ibn Isḥāq (d. 151 AH) & Ibn al-Layth (d. 204 AH): Martin Whittingham (A History of Muslim Views of the Bible, pp. 59–60, 88–89) demonstrates that Ibn Isḥāq did not accept John's Gospel as intact: he deliberately altered 'my father' three times to 'the Lord, al-Rabb' to strip Trinitarian sonship when applying the Paraclete to Muḥammad ﷺ—indicating John had strayed from the true Injīl. Likewise, Ibn al-Layth drew fragmentary verses from a polemical testimonia collection, called scriptures maḥfūẓa tactically before the Byzantine emperor, yet similarly edited 'father' to 'lord' in the Paraclete verse (Ryan Schaffner, The Bible through a Qurʾānic Filter, p. 34—with Zawadi noting Schaffner's taḥrīf al-maʿnā-only conclusion overreaches beyond neutrality).",
  "al-Qāsim b. Ibrāhīm (d. 246 AH) & ʿAlī b. Rabban al-Ṭabarī (d. mid-3rd c. AH): Schaffner (pp. 292–293, 63–68, 316–318) proves al-Qāsim explicitly deemed Gospel transmission suspect and actively edited Matthew. For ʿAlī al-Ṭabarī, Clint Hackenburg (Voices of the Converted, p. 167) notes his amendments, variant-citations, and censuring of Syriac translators/copyists (e.g., changing 'gods' to 'angels' in Ps 82); Jake Kildoo (Reading Polemic as Confessional, pp. 20, 33–35) shows he applied twelve rational/Qurʾānic criteria rather than equating the Bible with the Qurʾān; and Schaffner documents how he sanitized John 17:1–3—deleting 'Son,' 'Father,' and v. 17:2—filtering Scripture through Qurʾānic primacy.",
  "Ibn Qutayba (d. 276 AH): Whittingham (pp. 94–95) shows that while Ibn Qutayba spoke of taḥrīf al-maʿnā in the OT, he explicitly charged NT textual corruption—claiming Christians 'changed (ghayyarū) the name' Aḥmad in Matt 11:14/Mal 4:5 (citing Q 5:41) and attributing Paraclete discrepancies to numerous Gospel transmitters. Schaffner (p. 322) adds that Ibn Qutayba introduces Matt 5:33–37 in Taʾwīl Mukhtalif al-Ḥadīth as read 'in the genuine [ṣaḥīḥ] Gospel' (Isteero)—proof that a corrupted Gospel was assumed—and freely adds honorifics to align verses with Qurʾānic tawḥīd.",
  "al-Yaʿqūbī (d. end of 3rd c. AH): After quoting the four Gospels' crucifixion accounts in Taʾrīkh al-Yaʿqūbī (1/30), he rejects their reliability outright: 'This is what the Gospel authors have said, and they differ about everything,' immediately citing Q 4:157–158 ('they neither killed nor crucified him') as the decisive criterion."],
 ["Bassam Zawadi, 'Clarifying Islamic Scholarly Stances on the Bible's Textual Integrity'","Martin Whittingham, A History of Muslim Views of the Bible (pp. 59–60, 88–90, 94–95)","Ryan Schaffner, The Bible through a Qurʾānic Filter (pp. 34, 63–68, 292–293, 316–322)","Clint Hackenburg, Voices of the Converted (p. 167); Jake Kildoo (pp. 20, 33–35)","al-Yaʿqūbī, Taʾrīkh 1/30; Qurʾān 4:157–158; 5:41"],
 [],
 {facts:[["Author","Bassam Zawadi (academic synthesis)"],["Key Historians","Whittingham, Schaffner, Hackenburg, Kildoo"],["Pattern","Editing 'Father' → 'Lord' (Ibn Isḥāq, Ibn Rabban)"],["Smoking Gun","Ibn Qutayba: 'the genuine [ṣaḥīḥ] Gospel'"]],
  quotes:[
   {by:"al-Yaʿqūbī (d. end of 3rd c. AH)",en:"This is what the Gospel authors have said, and they differ about everything. Allah said: 'But they neither killed nor crucified him—it was only made to appear so' [Q 4:157].",ref:"Taʾrīkh al-Yaʿqūbī, vol. 1, p. 30"}
  ],
  visual:{kind:'steps',items:[
   ["Ibn Isḥāq (†151) & Ibn al-Layth (†204)","Altered John's 'Father' → 'Lord'; used apologetic testimonia, not blanket endorsement."],
   ["al-Qāsim (†246) & ʿAlī al-Ṭabarī","Called Gospel transmission suspect; noted Syriac Ps 82 edits; sanitized John 17 via Qurʾānic primacy."],
   ["Ibn Qutayba (†276)","Charged NT name alteration (ghayyarū, Q 5:41); appealed specifically to 'the genuine [ṣaḥīḥ] Gospel.'"],
   ["al-Yaʿqūbī (3rd c. AH)","Quoted all 4 Gospels only to highlight their mutual contradictions and override them with Q 4:157–158."]
  ]},
  shots:[
   S('pdf2-islamic-bible-stances-p1.jpg','Bassam Zawadi Dossier: Ibn Isḥāq, Ibn al-Layth, al-Qāsim b. Ibrāhīm & ʿAlī b. Rabban al-Ṭabarī (p. 1).'),
   S('pdf2-islamic-bible-stances-p2.jpg','ʿAlī al-Ṭabarī (Schaffner/Kildoo), Ibn Qutayba ("genuine Gospel") & al-Yaʿqūbī on Q 4:157–158 (p. 2).')
  ]}));

/* ============================================================================
   11. islam/quran/d-ia-quran-surahs/t-4-169-hell-is-not-eternal
       eternal-hell
   ============================================================================ */
const EH=IA('#quran-surahs › 4:169 "Hell is not Eternal!"','1557034391480438835');

add('islam/quran/d-ia-quran-surahs/t-4-169-hell-is-not-eternal',N(EH,
 "In Qurʾān 4:169, 'abadan' only means 'a very long time,' and eternal Hell would be cruel—so nobody remains in Hell forever.",
 "Three textual pillars refute that reading decisively: (1) the Qurʾān uses the exact same 'khālidīna fīhā abadan' formula for Paradise—if abadan meant temporary, Paradise too would end; (2) Qurʾān 5:72 and 4:48 explicitly bar unrepentant polytheists from Paradise forever, leaving nowhere else for them to go; and (3) Ṣaḥīḥ al-Bukhārī 6548 and Ṣaḥīḥ Muslim 2850 explicitly proclaim 'eternity and no death' for both Paradise and Hell.",
 "Abadan Symmetry, Q 5:72 / 4:48 & Slaughter of Death (Bukhārī 6548 / Muslim 2850)",
 ["Symmetry of abadan across Hell and Paradise: While Arabic abadan can idiomatically mean 'a long duration' in everyday contexts, the Qurʾān uses the identical phrase khālidīna fīhā abadan for both Hell (e.g., Q 4:169) and Paradise (e.g., Q 4:57, 122). Reading abadan in 4:169 as 'temporary' logically forces the conclusion that the righteous are also eventually expelled from Paradise.",
  "No-limbo proof (Qurʾān 5:72 & 4:48): Allah states explicitly that unrepentant shirk is never forgiven (Q 4:48) and that 'whoever associates others with Allah, Allah has forbidden Paradise for him, and his refuge is the Fire' (Q 5:72). If Paradise is permanently forbidden to them and Hell were temporary, where would they go—some unscriptural limbo?",
  "Prophetic finality (Ṣaḥīḥ al-Bukhārī 6548 & Ṣaḥīḥ Muslim 2850): The Prophet ﷺ removes all ambiguity: Death will be brought in the form of a ram and slaughtered between Paradise and Hell, and it will be proclaimed: 'O people of Paradise, eternity and no death! O people of Hell, eternity and no death!'"],
 ["Qurʾān 4:48, 57, 122, 169; 5:72","Ṣaḥīḥ al-Bukhārī 6548","Ṣaḥīḥ Muslim 2850"],
 [],
 {facts:[["Key Term","khālidīna fīhā abadan (4:169 = Paradise vv.)"],["No Limbo","Q 5:72 + 4:48 permanently bar shirk from Jannah"],["Prophetic Verdict","Bukhārī 6548 & Muslim 2850: 'eternity, no death'"]],
  quotes:[
   {by:"Prophet Muḥammad ﷺ (Ṣaḥīḥ al-Bukhārī 6548 / Muslim 2850)",en:"Death will be brought in the form of a ram... Then it will be said: 'O people of Paradise, there is eternity and no death. O people of Hell, there is eternity and no death.'",ref:"Ṣaḥīḥ al-Bukhārī 6548; Ṣaḥīḥ Muslim 2850"}
  ],
  visual:{kind:'compare',
   left:{title:"Temporary-Hell Claim",items:["Reads abadan in Q 4:169 as mere 'long stay'","Ignores identical abadan phrasing for Paradise","Leaves unrepentant mushrikīn in a limbo barred from Jannah (Q 5:72)"]},
   right:{title:"Qurʾān & Ṣaḥīḥ Sunnah",items:["Consistent abadan symmetry across Paradise & Hell","Q 5:72 & 4:48 permanently forbid Paradise for shirk","Death slaughtered (Bukhārī 6548 / Muslim 2850): 'eternity, no death'"]}},
  shots:[
   S('pdf2-eternal-hell-p1.jpg','Channel Dossier on Q 4:169 ("Is There Eternal Hell?"): abadan symmetry, Q 5:72, 4:48 & Bukhārī 6548 / Muslim 2850 (p. 1).')
  ]}));

})();
