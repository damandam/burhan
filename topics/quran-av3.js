/* Qurʾān AV batch 3 — 2026-11-20. Science objections from Averroes “Koran Scheinargumente 1/2” (not on the site before):
   add(): pairs 51:49 (#allah-hat-alles-in-paare-erschaffen), 86:5–7 (#sperma-in-rippen).
   NEW in Alleged scientific errors: mountains as pegs, pearls & coral, bees eating fruit, shooting stars (67:5), 15:22 water stores,
   bones then flesh (23:14; #knochen-fleisch-bedeckt + #fehlgeburt-knochen-fleisch-baby), the moon's light, the moon landing, a ladder to heaven (6:35).
   NEW in Qurʾānic language: Ādam taught all the names (2:31) / “fart” claim.
   Cross-server: IA has its own 86:5–7 thread (already the card); nothing else on these verses.
   PDF/scan-only: #himmel-oder-erde-zuerst-erschaffen (PDF), #wieviele-tage (PDF) → six-days card; #paare (10 imgs), #biene (3 imgs),
   #sperma-in-rippen (Q86 dossier + “two solutions” PDFs), #sternschnuppen (Feuerstrahlen PDF), #knochen-fleisch (PDF). */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next)=>({they,we,more:Object.assign({h,p,src},cr),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('quran-av3: no card',key); };
const S='islam/quran/science-errors/';

/* pairs */
add('islam/quran/d-dr-everything-is-made-in-pairs',N(AV('allah-hat-alles-in-paare-erschaffen','1283244846328447079'),
 "Not everyone has a partner: many men lived and died without a wife.",
 "“Pairs” doesn't mean every individual has a spouse. Ibn Kathīr explains the pairs as day and night, sun and moon, light and darkness, woman and man, water and fire, land and sea, jinn and humans, and much more.",
 "Ibn Kathīr's pairs",["Ibn Kathīr on 51:49: the pairs are complementary opposites in creation, not a promise that each person will marry.","Ten scans from the tafsīr literature in the channel (to capture)."],["Qurʾān 51:49","Ibn Kathīr on 51:49"]));

/* 86:5–7 */
add('islam/quran/d-ia-scientific-allegations-against-the-quran/t-surah-86-5-7-semen-the-backbone-claim',N(AV('sperma-in-rippen','1282898057972940821'),
 "Semen doesn't come from between the backbone and the ribs.",
 "The verse doesn't say nuṭfa (sperm) but māʾ (fluid). Seminal fluid is mostly produced by the seminal vesicles and prostate, which lie between the spine and the front of the body; and Makkī ibn Abī Ṭālib (d. 1045) read it as the man's loins and the woman's ribs. Meanwhile the Bible's Wisdom of Solomon has a child formed in ten months from blood and seed, Greek embryology.",
 "Fluid, not sperm; and the Bible's “blood and seed”",[
  "Sperm is only 2–5% of the fluid; the seminal vesicles and prostate produce about 90%, and the bulbourethral glands add mucus.",
  "Objection: the ribs are too high. Answer: the head is still “between the shoulders” though higher, and the genitals “between the legs” though higher.",
  "Makkī ibn Abī Ṭālib al-Qaysī: “from between the loins and the ribs” means the human comes forth from between the man's loins and the woman's ribs (tafsīr, c. 1000 CE).",
  "Wisdom of Solomon 7:1–2 (LXX): “in the womb of a mother I was moulded into flesh, within a period of ten months, compacted with blood, from the seed of a man and the pleasure of marriage.” Blood-and-seed conception is Greek medicine, and ten months is wrong.",
  "Two detailed dossiers on 86:7 are in the channel (to capture)."],["Qurʾān 86:5–7","Wisdom of Solomon 7:1–2"]));

/* mountains */
const MO=AV('berge-pflöcke','1287057629730050100');
card(S+'mountains-as-pegs',{title:"Mountains as pegs (78:6–7)",k:"Geology",blurb:"Mountains have deep roots that anchor like a tent peg.",
 claim:"The Qurʾān calls mountains “pegs” (awtād). Mountains are just bumps on the surface.",
 tree:N(MO,"“Have We not made the earth a resting place, and the mountains as pegs?” (78:6–7). That's unscientific.",
  "Mountains aren't just what's above ground: they have deep roots reaching down into the crust. A geology textbook: “…less dense mountains with deep roots support the theory of continental drift.” And the geologist Zaghloul El-Naggar: just as most of a tent peg is hidden in the ground to stabilise the tent, most of a mountain is hidden in the crust; “peg” is more accurate than “root”.",
  "Roots and pegs",["Christina Reed and William J. Cannon, Earth Science, p. 39.","Zaghloul El-Naggar (PhD geology, University of Wales), The Geological Concept of Mountains in the Qurʾān, p. 7: mountains are not only the heights seen on the surface but their deep extensions into the crust, strongly emphasised in the form of pegs."],["Qurʾān 78:6–7"]),
 sum:"Mountains have deep roots in the crust; a geologist calls “peg” more precise than “root”."});

/* pearls & coral */
const PC=AV('perlen-und-korallen','1335174618532679804');
card(S+'pearls-and-coral-55-22',{title:"Pearls and coral from both seas? (55:22)",k:"55:19–22 · 35:12",blurb:"An Arabic usage: “from both” where one is meant.",
 claim:"55:22 says pearls and coral come out of both the salt and the fresh water, but they only come from the sea.",
 tree:N(PC,"“From both of them come pearls and coral” (55:22). Freshwater doesn't produce coral.",
  "Arabic allows mentioning two things where the action applies to one. Al-Baghawī and Ibn Kathīr give the parallel: “O assembly of jinn and men, did not messengers come to you from among you?” (6:130), though messengers came only from mankind. Ibn ʿĀshūr, from Abū ʿAlī al-Fārisī: an ellipsis meaning “from one of the two”, like “a great man from the two towns” (43:31), meaning from one of them.",
  "Tafsīr",["Al-Baghawī (c. 1100): pearls and coral come only from the salt water; this usage is allowed in Arabic.","Ibn Kathīr: “from both” means from the totality of the two; if it's true of one, that suffices, as in 6:130.","Ibn ʿĀshūr: ellipsis, “from one of them”, compare 43:31.","35:12 is different: from both waters you eat fresh flesh and extract ornaments, which is true of both; 55:22 speaks of pearls from one of them."],["Qurʾān 55:22; 6:130; 43:31; 35:12","al-Baghawī, Ibn Kathīr, Ibn ʿĀshūr on 55:22"]),
 sum:"“From both” in 55:22 is an Arabic usage for one of the two, like the messengers “from among you” jinn and men (6:130)."});

/* bees */
const BE=AV('biene-essen-früchte','1288833727279005708');
card(S+'bees-eat-fruit-16-69',{title:"Do bees eat fruit? (16:69)",k:"Biology",blurb:"Yes, and “eat” covers drinking.",
 claim:"16:69 tells the bee to “eat from all the fruits”, but bees drink nectar.",
 tree:N(BE,"“Then eat from all the fruits” (16:69). Bees don't eat fruit.",
  "They do: honey bees feed on ripe fruit such as plums, peaches, grapes, apples, figs and pears, especially when nectar is scarce, and can pierce the skin of overripe fruit, whose smell attracts them (non-Muslim beekeeping sources). And the Qurʾān uses “eat” in a general sense of taking sustenance, including drink.",
  "Sources",["honeybeesuite.com, “Do honey bees eat fruit?”; buzzbeekeepingsupplies.com: bees target overripe fruit.","“Eat” as general sustenance: 2:168; 5:88; 16:114; 20:81.","Screenshots in the channel (to capture)."],["Qurʾān 16:69"]),
 sum:"Bees do feed on ripe fruit, and kul (“eat”) in Arabic covers taking sustenance generally."});

/* shooting stars */
const SS=AV('sternschnuppen','1327854154697146439');
card(S+'shooting-stars-67-5',{title:"Stars as missiles against devils? (67:5)",k:"67:5 · 37:6–10 · 72:8–9",blurb:"The flame (shihāb), not the star itself.",
 claim:"67:5 says stars are thrown at devils. Stars are distant suns; this is mythology (David Wood, Ali Sina).",
 tree:N(SS,"“We adorned the nearest heaven with lamps and made them missiles against the devils” (67:5). Stars aren't thrown.",
  "Maṣābīḥ means lamps: anything that shines in the sky, not only stars. Qatāda: it isn't the star itself but the flame (shihāb) from it that strikes the devils; read 67:5 with 37:10 and 72:8–9, where the word is shihāb, a flame. And a ḥadīth in al-Bukhārī speaks of the shihāb striking the devils.",
  "Qurʾān with Qurʾān",["Qatāda: the maṣābīḥ are the stars, but the shihāb from them strikes the devils.","37:6–10: the heaven adorned with stars; the devils are pursued by “a piercing flame”. 72:8–9: the jinn find the heaven filled with guards and flames.","Bukhārī (Book of the Beginning of Creation): angels descend to the clouds and speak of a decree; devils eavesdrop and pass it to soothsayers, and are struck by flames.","This is about a metaphysical reality; physical methods can't measure it."],["Qurʾān 67:5; 37:6–10; 38:10; 72:8–9","Bukhārī 3210"],
  [N(SS,"Then devils would have to fly to the stars.",
    "No: they eavesdrop at the clouds, where the angels descend; the stars are in the nearest heaven, far higher. If stars were as low as clouds the devils couldn't listen at the clouds at all. Before the Prophet ﷺ the jinn could ascend; now they are prevented (72:8–9).",
    "Time and space",["Ali Sina gives no evidence for “jinn on each other's shoulders” and mixes concepts (Bassam Zawadi).","Stars do move fast (200–400 km/s, some over 1,700 km/s), and some eject matter: Hubble observed V Hydrae, 1,200 light years away, firing plasma balls twice the size of Mars every 8.5 years (UPI, 6 Oct 2016)."],["UPI 2016, “Hubble sees star shooting cannonballs into space”","astronomy.com, “Do the stars move in the sky?”"])]),
 sum:"Maṣābīḥ are lamps; it's the shihāb (flame) that strikes the devils at the cloud level (Qatāda; 37:10; 72:8–9; Bukhārī)."});

/* 15:22 */
const WA=AV('sure-15-22-wasser-komtrollieren-auf-bewahren-wolke','1335171643747733524');
card(S+'water-stores-15-22',{title:"“You are not its storers” (15:22) and dams",k:"15:22",blurb:"About rain and replenishing springs, not reservoirs.",
 claim:"15:22 says humans can't store water. We build dams.",
 tree:N(WA,"“We send water from the sky… and you are not its storers” (15:22). Dams prove otherwise.",
  "Al-Rāzī: the verse means the water coming from the sky can't be stored by you: it's about rain, not dams. Ibn Kathīr: you have no control over it; We send it down and keep it in springs, wells and rivers so it stays fresh all year for livestock and crops. If Allah willed, He could make it vanish.",
  "Tafsīr",["Al-Rāzī, Mafātīḥ al-Ghayb 19/181.","Ibn Kathīr on 15:22. The context is rainfall and the natural replenishment of water sources."],["Qurʾān 15:22"]),
 sum:"15:22 is about rain and the natural cycle that keeps springs full (al-Rāzī, Ibn Kathīr), not dams."});

/* bones then flesh */
const BF=AV('knochen-fleisch-bedeckt','1348831766760394753'), MC=AV('fehlgeburt-knochen-fleisch-baby','1383785412228681738');
card(S+'bones-then-flesh-23-14',{title:"Bones, then clothed with flesh (23:14)",k:"Embryology",blurb:"Cartilage models first, then muscle wraps them.",
 claim:"23:14 says bones form before flesh; in reality muscle and bone develop together, so the Qurʾān is wrong.",
 tree:N(BF,"“…then We made the lump into bones, then clothed the bones with flesh” (23:14). Bones don't form first.",
  "Modern embryology: cartilage models of the bones form first, then myogenic cells (muscle precursors) migrate in and gather around them to form the muscle masses (Allen and Kramer, Fundamentals of Human Embryology). And ʿaẓm can include cartilage: al-Fīrūzābādī's al-Qāmūs al-Muḥīṭ calls cartilage a kind of soft bone.",
  "Four points",["1. Cartilage models first, then muscle cells attach to them; this revised the older view that muscles form directly from mesenchyme.","2. ʿAẓm covers cartilage (ghuḍrūf) as soft bone (al-Qāmūs al-Muḥīṭ).","3. Kasawnā means “We clothed”: wrapping existing material around the structures, distinct from khalq, creation from nothing.","4. The particle fa- doesn't always impose strict chronology."],["Qurʾān 23:14; 22:5","Allen & Kramer, Fundamentals of Human Embryology"],
  [N(MC,"Miscarried embryos show no bones.",
    "Because early bones are cartilage, not yet ossified: only calcified structures show on X-ray. The bone forms are there but soft. Confusing structural formation with visible hardening is the critics' mistake.",
    "Cartilage is early bone",["Ossification comes later; cartilage is bone tissue in its early form."])]),
 sum:"Cartilage bone models form first and muscle then wraps them; ʿaẓm covers cartilage, and kasā means clothing what exists."});

/* the moon's light */
const ML=AV('mond-licht','1365415687304122400');
card(S+'moons-light',{title:"Does the Qurʾān say the moon has its own light?",k:"25:61 · 71:16 · 17:12 · 91:2",blurb:"Sirāj for the sun, nūr for the moon.",
 claim:"The Qurʾān calls the moon a light, as if it shone by itself.",
 tree:N(ML,"The Qurʾān calls the moon a light (nūr), but it only reflects sunlight.",
  "The Qurʾān distinguishes: the sun is a sirāj, a burning lamp (25:61; 71:16), the moon nūr, light without a burning source. And 17:12: “We erased the sign of the night and made the sign of the day visible”; Ibn ʿAbbās: the moon shone like the sun, then Allah darkened it (al-Ṭabarī). Classical scholars already said the moon's light is the sun's.",
  "What the scholars said",["Al-Ālūsī: the moon's light is reflected from the sun's light.","Ibn ʿĀshūr (al-Taḥrīr wa al-Tanwīr 30/204): the moon is dark in itself; its light comes from the sun. Sayyid Ṭanṭāwī and other modern tafsīrs agree.","Ibn Kathīr (al-Bidāya): the moon is called nūr because it uses the sun's light; its brightness changes with its distance from the sun.","Al-Rāzī reports that the moon once had light and Allah sent Jibrīl to erase it."],["Qurʾān 17:12; 25:61; 71:16","Ibn ʿĀshūr 30/204"],
  [N(ML,"91:2 says the moon follows the sun: wrong.",
    "Two classical readings, both correct: the moon follows the sun's general path across the sky (the ecliptic), or it refers to the new crescent becoming visible after sunset. Qatāda: “When the sun sets, the crescent appears: that is ‘when it follows it’” (Ibn Kathīr).",
    "91:2",["See earthsky.org on the moon following the ecliptic."],["Qurʾān 91:2"])]),
 sum:"The Qurʾān calls the sun a burning lamp and the moon nūr; classical scholars (Ibn Kathīr, al-Ālūsī, Ibn ʿĀshūr) knew its light is the sun's."});

/* moon landing */
const LA=AV('mond-landung','1365414142336569486');
card(S+'moon-landing',{title:"Does the moon landing refute the Qurʾān?",k:"55:33 · 21:33",blurb:"The moon isn't in the guarded heaven (Ibn ʿUthaymīn).",
 claim:"The Qurʾān says the heavens can't be penetrated, yet humans reached the moon.",
 tree:N(LA,"55:33 says you can't pass beyond the regions of the heavens. We landed on the moon.",
  "Ibn ʿUthaymīn: no verse explicitly says the moon is in the heaven; “if it is proven that spacecraft reached the moon, that proves the moon isn't in the guarded heaven but in an orbit between heaven and earth” (21:33; 36:40). Al-Ḥasan al-Baṣrī: the sun, moon and stars are in an orbit between heaven and earth. And all tafsīrs say 55:33 is a warning about the Day of Resurrection.",
  "The scholars",["Ibn ʿUthaymīn, with 21:33 and 36:40 (“each swims in an orbit”).","Al-Ḥasan al-Baṣrī (via al-Thaʿlabī and al-Māwardī).","Al-Shinqīṭī: whoever uses such verses to deny the moon landing is ignorant of tafsīr.","Even if the moon were “in the heaven”, reaching it isn't penetrating all the regions of the heavens."],["Qurʾān 55:33; 21:33; 36:40"]),
 sum:"Ibn ʿUthaymīn: the moon is in an orbit between heaven and earth, and 55:33 concerns the Day of Judgement; no verse forbids reaching the moon."});

/* ladder to heaven */
const LD=AV('himmel-leiter','1367436144618377218');
card(S+'ladder-to-heaven-6-35',{title:"“A ladder into the sky” (6:35)",k:"6:35",blurb:"A consolation for the Prophet ﷺ, not a physics claim.",
 claim:"6:35 suggests a ladder to heaven is impossible; we could build one.",
 tree:N(LD,"“If you can seek a tunnel into the earth or a ladder into the sky to bring them a sign…” (6:35). A ladder could be built.",
  "The verse consoles the Prophet ﷺ, grieved by rejection: even if you dug a tunnel into the earth or climbed a ladder into the sky to bring them a sign, they wouldn't believe. Tunnel and ladder are images for extreme efforts that wouldn't reach some hearts; if Allah willed He would have guided them all.",
  "Context (Ibn ʿĀshūr)",["Consolation, the limits of human effort, Allah's will, and patience: “so don't be of the ignorant.”"],["Qurʾān 6:35"]),
 sum:"6:35 tells the grieving Prophet ﷺ that even extreme efforts wouldn't convince the stubborn; it's not about ladders."});

/* Ādam taught the names */
const AD=AV('adam-furz-beigebracht','1289731957965721642');
card('islam/quran/d-ia-quranic-language/adam-names-2-31',{title:"“Allah taught Ādam the word for fart” (2:31)",k:"Tafsīr al-Ṭabarī",blurb:"Weak reports, and a lie about al-Bukhārī.",
 claim:"Al-Ṭabarī says “all the names” taught to Ādam included the word for breaking wind, and al-Bukhārī authenticated it.",
 tree:N(AD,"Al-Ṭabarī on 2:31 narrates that Allah taught Ādam every name, even of breaking wind; al-Bukhārī authenticated this.",
  "Al-Bukhārī authenticated no such thing: al-Ṭabarī only cites Bukhārī 7410, the ḥadīth of intercession, where people go to Ādam who was taught “the names of everything”. The reports with the details are weak: two go through Saʿīd ibn Maʿbad from Ibn ʿAbbās, who is unknown (majhūl), and the third through ʿĀṣim ibn Kulayb, who never met Ibn ʿAbbās (footnotes in the edition).",
  "The chains",["Tafsīr al-Ṭabarī on 2:31, editor's footnotes 4 and 9.","Bukhārī 7410: the intercession ḥadīth (“Allah taught you the names of all things”)."],["Qurʾān 2:31","Bukhārī 7410"]),
 sum:"The detailed reports are weak (an unknown narrator; a broken chain), and al-Bukhārī only has “the names of everything” in the intercession ḥadīth."});
})();
