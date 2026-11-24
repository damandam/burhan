/* Qurʾān AV batch 1 — 2026-11-20. Averroes “Quran aufbewahrt” (3) + “Quran verfälscht” (10) channels that were NOT on the site.
   Existing cards extended with add(): compilation (#quran-aufbewahrt, #nicht-fertig-gesammelt, #sahaba-quran-gelernt),
   Ibn Masʿūd & 113–114 (#masud-rezitiert-anders, Nawawī/al-Māzarī), 37:12 (#allah-erstaunt: al-Qurṭubī, Ibn ʿĀshūr, Bible).
   New cards in Preservation › Common claims: sūra 33 “200 verses”, Ubayy's muṣḥaf, ʿĀʾisha's muṣḥaf (33:56 + “first rows”),
   Abū al-Dardāʾ and 92:3, the 1,027,000 letters ḥadīth, al-Suyūṭī and ʿurub (56:37).
   #stillen-vers-aisha was done in hadith-block3 (ten-sucklings card). */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next)=>({they,we,more:Object.assign({h,p,src},cr),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } }
  console.warn('quran-av1: no card',key); };
const P='islam/quran/preservation/', CC=P+'d-ia-common-claims/';

/* ── compilation: written in his lifetime, gathered after ── */
const QA=AV('quran-aufbewahrt','1294440236574707803'), NF=AV('nicht-fertig-gesammelt','1329227853887307827'), SG=AV('sahaba-quran-gelernt','1294651100376334410');
add(P+'d-ia-the-process-of-quran-preservation',N(QA,"Zayd says the Prophet ﷺ died before the Qurʾān was collected, so it wasn't even written down.",
 "Jumiʿa means “gathered into one volume”, not “written”. It was fully written in his lifetime under his supervision, and kept in memory by many Companions; it wasn't bound into one muṣḥaf because abrogation stayed possible until revelation ended (al-Khaṭṭābī).",
 "Written, checked, memorised",[
  "Zayd ibn Thābit: “The Prophet ﷺ died while the Qurʾān had not yet been gathered in one place” (Fatḥ al-Bārī 9/12). Al-Khaṭṭābī: he didn't gather it in one muṣḥaf because he awaited possible abrogation of rulings or recitations; when revelation ended, Allah put the idea into the hearts of the rightly-guided caliphs, and Abū Bakr did it on ʿUmar's advice (al-Suyūṭī, al-Itqān 1/202).",
  "Checked by the Prophet ﷺ: Zayd: “When I finished writing, he said: Read! and I read it back to him; if there was an omission or error he corrected it” (al-Ṭabarānī, al-Awsaṭ 1913). Zayd: “I was the Prophet's ﷺ neighbour; when revelation came he called me and I wrote it” (Ibn Abī Dāwūd, al-Maṣāḥif 5–6). ʿAlī and ʿUthmān wrote revelation; in their absence Ubayy and Zayd (al-Ṭabarī, Tārīkh 6/179).",
  "Written in Mecca: ʿUmar found his sister and brother-in-law with a parchment of Sūrat Ṭā Hā (al-Dāraquṭnī 441). “When the beginning of a sūra was revealed in Mecca, it was written in Mecca” (Ibn al-Ḍurays, Faḍāʾil al-Qurʾān 33). “We were with the Messenger of Allah ﷺ compiling the Qurʾān on pieces of cloth/leather” (Tirmidhī 3954).",
  "Copies were common: he forbade travelling into enemy land with the Qurʾān (Bukhārī 2990); “don't touch the Qurʾān except in purity” (al-Ḥākim 6051); a muṣḥaf left behind is among the deeds that reach a believer after death (Ibn Mājah 242, ḥasan); at the Farewell Ḥajj a Bedouin asked how knowledge could be taken while “the maṣāḥif are among us and we teach them to our women, children and servants” (Aḥmad 22191). “Don't be deceived by these hanging maṣāḥif; Allah does not punish a heart that has preserved the Qurʾān” (al-Dārimī 3362).",
  "Copies weren't sold: one person wrote, then the next, until the muṣḥaf was complete (al-Bayhaqī, al-Sunan al-Kubrā 11065). ʿUthmān made those who brought written verses swear they had heard the Prophet ﷺ dictate them (Ibn Abī Dāwūd, al-Maṣāḥif 82).",
  "Memorised: Abū Bakr, ʿUmar, ʿUthmān, ʿAlī, Ubayy, Ibn Masʿūd, Zayd, and ʿĀʾisha, Umm Salama and Ḥafṣa (al-Jazarī, al-Suyūṭī). “I have revealed to you a Book that water cannot wash away” (Muslim 2865): oral preservation survives even if pages are lost.",
  "Ibn ʿAbbās and Muḥammad ibn al-Ḥanafiyya: “He left nothing except what is between the two covers” (Bukhārī 5019). Abū ʿAbd al-Raḥmān al-Sulamī taught the Qurʾān in Kūfa for about seventy years, from ʿUthmān to al-Ḥajjāj (Ibn Kathīr, Faḍāʾil 132). “The Qurʾān escapes faster than camels from their tethers” (Bukhārī 5031–5033; Muslim 789–791): constant revision was the norm."],
 ["Fatḥ al-Bārī 9/12","al-Suyūṭī, al-Itqān 1/202","Bukhārī 2990, 5019, 5031","Muslim 2865","Tirmidhī 3954","Ibn Mājah 242","Musnad Aḥmad 22191"]));

/* ── Ibn Masʿūd's muṣḥaf: notes in the margin ── */
const MR=AV('masud-rezitiert-anders','1286002945363546163');
add(CC+'t-ibn-mas-ud-surahs-113-114',N(MR,"Ibn Masʿūd's muṣḥaf differed from ʿUthmān's and lacked sūras.",
 "Al-Nawawī, quoting al-Māzarī: Ibn Masʿūd wrote in his personal copy what he wanted, including explanations, and ʿUthmān and the community objected so later people wouldn't take them for Qurʾān. The dispute was a fiqh question, whether one may write explanations in a muṣḥaf. Leaving out al-Muʿawwidhatayn may mean he didn't think everything had to be written, since everyone knew them.",
 "Al-Nawawī, Sharḥ Muslim 6/109",["Al-Nawawī (Sharḥ Ṣaḥīḥ Muslim 6/109), from al-Māzarī: the quote above.","Ibn Ḥajar and al-Nawawī: the differing readings of Abū al-Dardāʾ and Ibn Masʿūd (e.g. 92:3) were probably abrogated; later neither taught them, and in Kūfa and Shām everyone followed the muṣḥaf of ʿUthmān."],["al-Nawawī, Sharḥ Muslim 6/109"]));

/* ── 37:12: al-Qurṭubī, Ibn ʿĀshūr, and the Bible ── */
const ER=AV('allah-erstaunt','1285968654227345533');
add('islam/quran/d-dr-does-allah-wonder-quran-37-12',N(ER,"A God who wonders isn't all-knowing.",
 "Al-Qurṭubī: when wonder is attributed to Allah it isn't human surprise but His disapproval of their disbelief, or His requiting their wonder; Ibn ʿĀshūr: Allah can't be surprised by events, the wording is a forceful way of saying something is extraordinary. And the Bible has God and Jesus “marvel” too.",
 "Tafsīr and the Bible",[
  "Al-Qurṭubī on 37:12: some read “you wondered” (the Prophet ﷺ), others “I wondered” (Allah); Shurayḥ rejected the second, saying Allah doesn't wonder like humans; Ibn Masʿūd and Ibn ʿAbbās supported it. Attributed to Allah it means His disapproval or recompense, as in “Your Lord marvels at a young man without youthful folly” (from ʿUqba ibn ʿĀmir): approval, not surprise. Both readings are valid.",
  "Ibn ʿĀshūr (al-Taḥrīr wa al-Tanwīr): most read ʿajibta, addressing the Prophet ﷺ as in “so ask them” (37:11): “their state is truly a wonder”, like 13:5. Ḥamza, al-Kisāʾī and Khalaf read ʿajibtu: not literal surprise, but an expression that something is extraordinary, common in the Sunna: “Allah marvels at two men, one kills the other and both enter Paradise” (al-Nasāʾī); at the couple who fed their guest (then 59:9 was revealed); at people entering Paradise in chains. It may also stand for His punishment of their wonder, as with “they planned and Allah planned” (3:54).",
  "Isaiah 59:16: “He saw that there was no man, and wondered that there was no one to intercede.” Isaiah 63:5: “I looked, but there was no one to help; I was appalled.” Mark 6:6: Jesus “marvelled because of their unbelief”: why, if he knew they wouldn't believe?"],
 ["al-Qurṭubī on 37:12","Ibn ʿĀshūr, al-Taḥrīr wa al-Tanwīr on 37:12","Isaiah 59:16; 63:5","Mark 6:6"]));

/* ── new: sūra 33 had 200 verses ── */
const S33=AV('sure-33-hat-200-verse','1287063400891023400');
card(CC+'surah-33-two-hundred-verses',{title:"Did Sūrat al-Aḥzāb have 200 verses?",k:"Musnad Aḥmad 21245",blurb:"Weak chains, and a sūra still being revealed.",
 claim:"Ubayy said Sūrat al-Aḥzāb was as long as al-Baqara, and ʿĀʾisha that it had 200 verses; today it has 73. So most of it was lost.",
 tree:N(S33,"Zirr told Ubayy he counted 73 verses in al-Aḥzāb. Ubayy: “Only that? I saw it as long as al-Baqara, and we recited in it: ‘the old man and old woman, if they commit zinā, stone them…’” (Musnad Aḥmad 21245).",
  "All these reports are weak. ʿĀʾisha's “200 verses” goes through Ibn Lahīʿa, whose narrations are rejected; the “70 forgotten verses” through ʿAbdullāh ibn Shurayk al-ʿĀmirī, whom many critics don't accept; and Ubayy's report rests on ʿĀṣim ibn Bahdala, trustworthy but with a weak memory, so a unique report from him can't be relied on.",
  "The chains",[
   "Al-Arnaʾūṭ on Aḥmad 21207: “the chain is weak; ʿĀṣim ibn Bahdala, though considered trustworthy, had problems with his memory, so one can't rely on him in a unique report like this” (Musnad, 25/134).",
   "On ʿĀṣim: Ibn Saʿd: trustworthy but made many mistakes; Aḥmad: trustworthy, al-Aʿmash memorised better; al-Dāraquṭnī: something in his memory wasn't strong; Ḥammād ibn Salama: confused at the end of his life; Abū Ḥātim: honest, not the strongest; Ṣadaqa ibn al-Faḍl: his ḥadīth are confused.",
   "Musnad Aḥmad (ed. ʿĀdil Murshid) 1/134 n.1 and 3: one chain has Yazīd ibn Abī Ziyād, from whom Ibn Maʿīn said not to take ḥadīth; another has ʿĀṣim.",
   "Al-Itqān (4/1453, n.2): weak because of Ibn Lahīʿa. Ibn ʿĀshūr: the reports from ʿĀʾisha about 200 verses are all weak, and if true they would be abrogated (al-Taḥrīr wa al-Tanwīr 6/246)."],
  ["Musnad Aḥmad 21207, 21245","al-Itqān 4/1453","al-Taḥrīr wa al-Tanwīr 6/246"],
  [N(S33,"And the verse of stoning?",
    "Even the one accepted report (Ubayy) doesn't say anything was dropped. At some point al-Aḥzāb was as long as al-Baqara, which itself took about ten years to be revealed and wasn't complete when he said it. The stoning verse's recitation was abrogated while its ruling remained, confirmed by the authentic Sunna. And 73 verses is the count millions memorise through unbroken chains to the Prophet ﷺ.",
    "Abrogation, not loss",["See also: The Verse of Stoning (Common claims).","The consensus of the Umma on 73 verses rests on mass-transmitted memorisation."],[])]),
 sum:"The 200-verses reports go through Ibn Lahīʿa, ʿAbdullāh ibn Shurayk and ʿĀṣim ibn Bahdala, all weak here; at most the stoning verse's recitation was abrogated."});

/* ── new: Ubayy's muṣḥaf ── */
const UB=AV('musnaf-ubay-kaab','1286273395495014431');
card(CC+'ubayy-mushaf-116-surahs',{title:"Ubayy's muṣḥaf with 116 sūras",k:"al-Khalʿ & al-Ḥafd",blurb:"Two qunūt supplications, abrogated, and personal notes.",
 claim:"Ubayy ibn Kaʿb's muṣḥaf had 116 sūras, including al-Khalʿ and al-Ḥafd, so ʿUthmān's Qurʾān is missing two.",
 tree:N(UB,"Ubayy's muṣḥaf contained two extra sūras, al-Khalʿ and al-Ḥafd.",
  "Those two texts are supplications and praise of Allah. They were part of revelation but abrogated; some Companions kept reciting them in the qunūt because they are duʿāʾ (al-Suyūṭī, al-Itqān 2/68). Private copies also held notes, explanations and abrogated verses, which never had the status of Qurʾān.",
  "Personal copies, not a rival Qurʾān",[
   "Ahmad von Denffer, ʿUlūm al-Qurʾān: Ubayy's muṣḥaf had two extra chapters and an extra āya; they contain supplications and praise, were originally revelation and later abrogated.",
   "Al-Suyūṭī, al-Itqān 2/68: among what was abrogated are the two qunūt sūras; they remained in some Companions' memory because they were duʿāʾ.",
   "Bukhārī 6438: a saying about human greed (“if the son of Ādam had a valley of gold…”) was thought by some to be Qurʾān until Sūra 102 was revealed. Ubayy clearly knew what was Qurʾān and what wasn't; his muṣḥaf held personal notes.",
   "Lack of writing material meant Companions wrote abrogated verses and notes into their copies; these weren't part of the mass-transmitted (mutawātir) text (al-Zurqānī, Manāhil al-ʿIrfān p. 222).",
   "Al-Aʿẓamī: reports that Ubayy's muṣḥaf differed from ʿUthmān's are weak; the extra chapters aren't authentic through those routes (The History of the Qurʾānic Text, p. 203). Aḍwāʾ al-Bayān 2/451: abrogated by mutawātir Sunna, they are no longer revelation, used as duʿāʾ in qunūt."],
  ["al-Suyūṭī, al-Itqān 2/68","Bukhārī 6438","al-Zurqānī, Manāhil al-ʿIrfān p. 222","al-Aʿẓamī, The History of the Qurʾānic Text p. 203","al-Shinqīṭī, Aḍwāʾ al-Bayān 2/451"]),
 sum:"Al-Khalʿ and al-Ḥafd are qunūt supplications whose recitation as Qurʾān was abrogated; private copies held notes, and the variant reports are weak (al-Aʿẓamī)."});

/* ── new: ʿĀʾisha's muṣḥaf and 33:56 ── */
const AM=AV('suyuti-aisha-musnaf-und-uthman','1286335477351452817');
card(CC+'aisha-mushaf-first-rows',{title:"ʿĀʾisha's muṣḥaf: “…and those in the first rows”",k:"al-Itqān · 33:56",blurb:"A weak report mixing a ḥadīth into a verse.",
 claim:"Al-Suyūṭī reports that ʿĀʾisha's muṣḥaf had 33:56 with “and upon those who pray in the first rows”, “before ʿUthmān changed the maṣāḥif”. So ʿUthmān altered the Qurʾān.",
 tree:N(AM,"Ḥumayda bint Abī Yūnus: her father, aged 80, recited from ʿĀʾisha's muṣḥaf: “Allah and His angels send blessings on the Prophet… and on those who stand in the first rows,” “before ʿUthmān changed (ghayyara) the maṣāḥif” (al-Itqān 3/82; Abū ʿUbayd, Faḍāʾil 1/324; Ibn Abī Dāwūd, al-Maṣāḥif 238).",
  "The report is weak, and the added words were never Qurʾān: they are a ḥadīth of the Prophet ﷺ. ʿĀʾisha narrates: “Allah and His angels send blessings on the first rows” (Ṣaḥīḥ Ibn Ḥibbān 2163–2164; also from al-Barāʾ ibn ʿĀzib). A ḥadīth got mixed into the verse in this one weak line.",
  "The ḥadīth behind it",["عَنْ عَائِشَةَ قَالَتْ: قَالَ النَّبِيُّ ﷺ: «إنَّ اللَّهَ عَزَّ وَجَلّ وملَائِكَتَهُ يُصلون علَى الصُّفُوفِ الْأُوَلِ» (Ibn Ḥibbān 2163–2164; Ibn al-Muqriʾ, al-Muʿjam)."],["al-Suyūṭī, al-Itqān 3/82","Ṣaḥīḥ Ibn Ḥibbān 2163–2164"]),
 sum:"The report is weak, and “those in the first rows” is a ḥadīth (Ibn Ḥibbān 2163) that got mixed into 33:56 in one line."});

/* ── new: Abū al-Dardāʾ and 92:3 ── */
const AD=AV('abu-darda-ibn-masud-weiblich-männlich','1371596232362954852');
card(CC+'abu-darda-92-3',{title:"Abū al-Dardāʾ and 92:3: “by the male and the female”",k:"Bukhārī 4943",blurb:"One Companion's memory, or an abrogated reading, against everyone else.",
 claim:"Abū al-Dardāʾ said the Prophet ﷺ recited 92:3 as “wa-l-dhakari wa-l-unthā”, without “wa mā khalaqa”, and Ibn Masʿūd too. So the Qurʾān was changed.",
 tree:N(AD,"Abū al-Dardāʾ: the Prophet ﷺ recited “and by the male and the female”, and so did Ibn Masʿūd; our muṣḥaf has “and by Him who created the male and the female” (Bukhārī 4943).",
  "It's one word, and a single witness against the whole Umma. Every other Companion, including Abū Bakr, ʿUmar, ʿUthmān and ʿAlī, transmitted today's wording. Al-Qurṭubī: this lone report was affected by forgetfulness. If 9,999 people heard a sentence one way and one person another, who misheard?",
  "Two explanations",["A lone report (khabar wāḥid) against the mass transmission is rejected.","Or abrogation: Qāḍī ʿIyāḍ and al-Māzarī say it was a reading whose recitation was abrogated, and those who differed hadn't learned of the abrogation; it isn't part of what was agreed in ʿUthmān's compilation. Ibn Ḥajar and al-Nawawī likewise.","Neither Abū al-Dardāʾ nor Ibn Masʿūd taught it later; Kūfa and Shām followed ʿUthmān's muṣḥaf. (See also the aḥruf card.)"],["Bukhārī 4943","al-Qurṭubī on 92:3"]),
 sum:"Abū al-Dardāʾ's “by the male and female” is a lone report against everyone else, or an abrogated reading he hadn't heard was abrogated."});

/* ── new: 1,027,000 letters ── */
const ML=AV('1-millionen-verse-bustaben','1354923512455888984');
card(CC+'one-million-letters',{title:"“The Qurʾān has 1,027,000 letters”",k:"al-Ṭabarānī, al-Awsaṭ",blurb:"A fabrication by a known forger.",
 claim:"A ḥadīth says the Qurʾān has 1,027,000 letters, far more than today's, so most of it is lost.",
 tree:N(ML,"ʿUmar: “The Qurʾān is 1,027,000 letters; whoever recites it patiently gets a wife of the ḥūr al-ʿīn for every letter” (al-Ṭabarānī, al-Awsaṭ).",
  "It's false. Al-Ṭabarānī himself says it comes from ʿUmar only through this one chain, and its narrator Muḥammad ibn ʿUbayd ibn Ādam ibn Abī Iyās al-ʿAsqalānī “specialised in false narrations” (al-Dhahabī). Al-Dhahabī lists this very ḥadīth as false; Ibn Ḥajar agreed in al-Lisān; al-Albānī: its weakness is obvious.",
  "The gradings",["Al-Dhahabī, Mīzān al-Iʿtidāl 3/639 (no. 7918): Muḥammad ibn ʿUbayd… “he specialised in false reports”, citing this ḥadīth (no. 4073): “false”.","Ibn Ḥajar confirmed it in Lisān al-Mīzān; al-Haythamī mentions it (Majmaʿ 7/163).","Al-Albānī, al-Silsila al-Ḍaʿīfa 9/70–71: the weakness is evident and needs no lengthy discussion."],["al-Dhahabī, Mīzān al-Iʿtidāl 3/639","Majmaʿ al-Zawāʾid 7/163","al-Albānī, al-Ḍaʿīfa 9/70–71"]),
 sum:"The 1,027,000-letters ḥadīth is false: a single chain through a narrator known for fabrications (al-Dhahabī, Ibn Ḥajar, al-Albānī)."});

/* ── new: al-Suyūṭī and ʿurub ── */
const SH=AV('suyuti-sagt-hure','1285988852808548492');
card(CC+'suyuti-urub-56-37',{title:"Did al-Suyūṭī gloss ʿurub (56:37) as “prostitutes”?",k:"A printing error",blurb:"One modern edition, against the manuscript and every other edition.",
 claim:"Al-Suyūṭī explains the ʿurub of Paradise (56:37) as qaḥba, “whores”.",
 tree:N(SH,"An edition of al-Suyūṭī's work glosses ʿurub as qaḥba (prostitute).",
  "Only one print edition, by Dr. Muḥammad Sayyid al-Rifāʿī, has this; no other edition does, and the manuscript has ghanija (affectionate, playful, loving), not qaḥba. The same book, on the same page (26), says the commentators and linguists all agree ʿurub means loving and playful.",
  "Editions and manuscript",["The edition of ʿĀdil al-ʿĀmil does not say ʿurub means ghahba/qaḥba.","Same book, p. 26: the mufassirūn and linguists agree ʿurub is ghanija: loving, playful.","The manuscript of the tafsīr has غنجة, not القحبة: an error or interpolation in al-Rifāʿī's edition."],["Qurʾān 56:37"]),
 sum:"The “prostitute” gloss exists in only one modern edition; the manuscript and all other editions have ghanija, loving and playful."});
})();
