/* Curated: Islam › The Qurʾān (Islamic Apologetics channels). */
(()=>{
const Q='islam/quran/', P='islam/quran/preservation/';

cur.deb(Q+'d-ia-flat-earth',{title:"Does the Qurʾān say the earth is flat?",k:"Science",blurb:"“Spread out”, “like a carpet”.",
 they:"The Qurʾān says the earth is “spread out” and “like a carpet”, so it teaches a flat earth.",
 we:"Those verses describe the earth from a human perspective: a surface made easy to live, travel and farm on. A round earth still looks spread out to the people standing on it.",
 p:["The argument assumes verses about the earth being spread out (madd, ṭaḥā, firāsh) are statements about its overall shape. Read in context, they are about its usefulness for life: settlement, travel and agriculture.","Classical scholars who held the earth to be round saw no conflict. Ibn Ḥazm and Ibn Taymiyya both reported scholarly agreement that the earth is spherical.","A carpet is spread for use, not to describe a planet's geometry."],
 src:["Qurʾān 15:19; 71:19; 79:30","Ibn Ḥazm, al-Faṣl","Ibn Taymiyya, Majmūʿ al-Fatāwā 25/195"],
 sum:"“Spread out” describes a livable surface, not a flat planet; the classical scholars already said the earth is round."});

cur.deb(Q+'d-ia-satanic-verses',{title:"The “satanic verses”",k:"Seerah",blurb:"Did Satan put words in the Prophet's ﷺ mouth?",
 they:"The Prophet ﷺ once praised the Meccan idols in a recitation inspired by Satan. It's so embarrassing that it must be true.",
 we:"The “criterion of embarrassment” is one of the weakest tools in history-writing, and the story itself fails: every chain is broken or weak, and the leading ḥadīth scholars rejected it.",
 p:["The criterion says an embarrassing story is more likely true because no follower would invent it. But embarrassing stories are also invented by opponents and storytellers, and a weak tool can't outweigh the absence of any sound chain.","The story (the “gharānīq”) comes through mursal reports with broken chains. Scholars such as Ibn Khuzayma, al-Bayhaqī and Qāḍī ʿIyāḍ rejected it; Ibn Kathīr said all its routes are mursal and none is sound.","It also contradicts the Qurʾān: “Nor does he speak from his own desire” (53:3) and Allah protecting His revelation (22:52 explains that Allah abolishes what Satan casts)."],
 quote:["“Nor does he speak from [his own] inclination. It is not but a revelation revealed.”","al-Najm 53:3–4","وَمَا يَنطِقُ عَنِ الْهَوَىٰ ۝ إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ"],
 src:["Tafsīr Ibn Kathīr 22:52","Qāḍī ʿIyāḍ, al-Shifā","Qurʾān 53:1–4; 22:52"],
 sum:"An unsound story doesn't become history because it's embarrassing. Its chains are broken, and the Qurʾān itself rules it out."});

cur.ex(P+'d-ia-the-process-of-quran-preservation',{title:"How the Qurʾān was compiled",k:"History",blurb:"From the Prophet ﷺ to ʿUthmān's master copy.",
 intro:"The Qurʾān was memorised by many Companions and written down during the Prophet's ﷺ life. Within a year of his death it was gathered into one codex.",
 visual:{kind:'steps',items:[
  ["Revelation & memory","Written on bones, parchment and palm leaves, and memorised by many Companions while the Prophet ﷺ was alive."],
  ["Yamāma, 632","Many ḥuffāẓ died fighting Musaylima, so ʿUmar urged Abū Bakr to gather the Qurʾān into one codex."],
  ["Zayd's method","Zayd ibn Thābit, who had recited the whole Qurʾān to the Prophet ﷺ twice, checked every verse against written pieces and the memories of the ḥuffāẓ."],
  ["ʿUthmān's copies","Around 650, master copies in Qurayshī spelling were sent to the main cities so recitation stayed unified."]]},
 sum:"Memorised by many, written down from the start, gathered within a year, and standardised within twenty: the Qurʾān's transmission is unbroken."});

cur.ex(P+'d-ia-scholarly-attestations',{title:"One author behind the Qurʾān",k:"Stylometry",blurb:"What style analysis shows.",
 intro:"Statistical analysis of writing style shows the Qurʾān's author is distinct from the speaker of the ḥadīth, and that one single author is behind the whole book.",
 cards:[["Distinct from the ḥadīth","The style of the Qurʾān doesn't match the Prophet's ﷺ own speech recorded in the ḥadīth, which it would if he had composed it."],["One voice throughout","The same analysis indicates a single author for the entire Qurʾān, not a collection stitched together over time."]],
 sum:"Style analysis points to one author for the whole Qurʾān, and not the man who delivered it."});

cur.ex(P+'d-ia-abrogation-naskh',{title:"Abrogation (naskh)",k:"Principles",blurb:"Why naskh isn't “losing” the Qurʾān.",
 intro:"Abrogation is Allah's own decision to replace a ruling or a recited text. It is announced in the Qurʾān itself and is not something the community lost by accident.",
 cards:[["Decree, not accident","Whatever Allah intended to remain in the final Qurʾān is preserved; whatever He abrogated was by His decree."],["Three kinds","The scholars describe abrogation of the ruling, of the recitation, or of both."]],
 evidence:[["“We do not abrogate a verse or cause it to be forgotten except that We bring one better than it or similar to it.”","al-Baqara 2:106","مَا نَنسَخْ مِنْ آيَةٍ أَوْ نُنسِهَا نَأْتِ بِخَيْرٍ مِّنْهَا أَوْ مِثْلِهَا"]],
 sum:"Naskh is part of revelation itself, so it doesn't count against preservation."});

const ms=(key,title,k,intro,cards)=>cur.ex(P+'d-ia-quranic-manuscripts/'+key,{title,k,blurb:k,intro,cards});
ms('t-codex-topkapı-sarayı-medina-1a',"Codex Topkapı (Medina 1a)","≈100% of the text","One of the earliest and most complete Qurʾān codices, with a strong case for first-century dating.",[["391 folios","It contains essentially the whole Qurʾān; a couple of folios were later repaired in Kufic and naskh script to restore damaged pages."]]);
ms('t-codex-wetzstein-ii-1913',"Codex Wetzstein II 1913","≈85%, 660–710 CE","Corpus Coranicum dates it to 660–710 CE (39–91 AH).",[["216 folios survive","They hold about 85% of the Qurʾān. Complete, it would have had about 245–250 folios: a full codex."],["Written while Companions lived","Its dating places it in a time when Companions of the Prophet ﷺ were still alive."]]);
ms('t-codex-mashhad-1st-century-hijra',"Codex Mashhad","≈90–95%, 51–100 AH","Radiocarbon and palaeography put it in the second half of the first Islamic century.",[["251 folios, Ḥijāzī script","Over 90% of the text survives (about 95% with later emendations), likely copied in Madinah by a tābiʿī."],["Ibn Masʿūd's sūra order","It follows the sūra order attributed to Ibn Masʿūd, with the same text."]]);
cur.hide(P+'d-ia-quranic-manuscripts/t-our-first-century-manuscript-s-has-our-quran-prese');
cur.hide(Q+'d-ia-alleged-contradictions/t-pinned');

cur.deb(Q+'d-ia-quran-surahs/t-4-169-hell-is-not-eternal',{title:"Is Hell eternal?",k:"Eschatology",blurb:"“Except as your Lord wills” (11:107).",
 they:"11:107 says the people of Hell stay there “except as your Lord wills”, so the Qurʾān doesn't teach an eternal Hell.",
 we:"The Qurʾān says of the disbelievers “abiding therein forever” (khālidīna fīhā abadan, 4:169; 33:65; 72:23). The exception affirms Allah's absolute will, not a promised end.",
 p:["4:169, 33:65 and 72:23 all use “abadan”, forever, for the disbelievers in Hell.","The same exception is used for Paradise in 11:108, followed by “a gift uninterrupted”. It expresses that everything stays under Allah's will, not that Paradise ends.","Many scholars applied the exception to sinful believers who leave Hell after punishment."],
 quote:["“…abiding therein forever. And that, for Allah, is easy.”","al-Nisāʾ 4:169","خَالِدِينَ فِيهَا أَبَدًا"],
 src:["Qurʾān 4:169; 11:106–108; 33:65; 72:23"]});

cur.deb(Q+'d-ia-quran-surahs/t-surah-5116-refers-to-the-trinity',{title:"Does 5:116 get the Trinity wrong?",k:"Christianity",blurb:"“Take me and my mother as gods besides Allah.”",
 they:"5:116 puts Mary in the Trinity, so the Qurʾān misunderstands Christianity.",
 we:"5:116 never mentions the Trinity. It condemns taking Jesus and Mary as gods “besides Allah”, which describes the worship many Christians actually gave Mary.",
 p:["For it to describe the Trinity, it would have to say “with Allah”, since Christians see the Son and Spirit as God alongside the Father. “Besides Allah” describes worship directed to others than Allah.","Some Christians do treat Mary as divine in practice: prayers to her, titles like Queen of Heaven and Mother of God, and the Collyridians who offered her cakes as a goddess.","The Qurʾān rejects the Trinity separately and explicitly in 4:171 and 5:73."],
 src:["Qurʾān 5:116; 4:171; 5:73","Ibn Kathīr","Epiphanius, Panarion 79 (Collyridians)"]});

cur.deb(Q+'d-ia-quran-surahs/t-surah-3-55-6-41-christian-dominance',{title:"3:55: will Christians always dominate?",k:"Prophecy",blurb:"“I will make those who follow you superior.”",
 they:"3:55 promises Jesus' followers will be above the disbelievers until Judgement Day, so Christians are on the truth.",
 we:"Those who truly followed Jesus believed in his message of one God, which means Muslims, who believe in him as a prophet. The superiority is of proof and, above all, over those who rejected him.",
 p:["“Those who follow you” are those who follow what Jesus actually taught, tawḥīd, not a later doctrine about him.","The contrast is with “those who disbelieve” in him, namely those who rejected and plotted against him.","Classical tafsīr: the believers in Jesus remain above those who rejected him, in argument and ultimately in outcome."],
 src:["Qurʾān 3:55","Tafsīr al-Ṭabarī; Ibn Kathīr 3:55"]});

cur.deb(Q+'d-ia-scientific-allegations-against-the-quran/t-surah-31-34-today-we-know-what-is-in-the-wombs',{title:"31:34: “Only Allah knows what is in the wombs”?",k:"Science",blurb:"Ultrasound can tell the sex.",
 they:"31:34 says only Allah knows what is in the wombs, but ultrasound can tell a baby's sex. The verse is wrong.",
 we:"The verse doesn't say humans can never learn a baby's sex. It is about knowledge of the unseen: everything about that child, its life, provision, deeds and fate, which no machine can see.",
 p:["Ibn Kathīr explains that Allah knows whether the child will be happy or miserable, its lifespan, provision and deeds, all from before creation.","A scan at 20 weeks sees part of the body; it doesn't give knowledge from before conception or of the child's whole destiny."],
 src:["Qurʾān 31:34","Tafsīr Ibn Kathīr 31:34"]});

cur.deb(Q+'d-ia-alleged-calculation-errors',{title:"Do the inheritance shares add up to more than 100%?",k:"Inheritance",blurb:"4:11–12 and the ʿawl rule.",
 they:"In some cases the Qurʾān's inheritance shares add up to more than the whole estate. That's a mathematical error.",
 we:"The verses give each heir's share for a situation; they don't claim the shares always fit. When they exceed the estate, every share is reduced proportionally (ʿawl), a method agreed on since ʿUmar.",
 p:["Shares like two-thirds, a half and an eighth are fixed relative to each other. When they sum above one, all are scaled down so each heir keeps the same proportion.","ʿUmar applied ʿawl with the agreement of the Companions, and the Prophet ﷺ commanded following the rightly guided caliphs.","The Qurʾān's purpose isn't to be an arithmetic manual. It sets the rights, and the method of applying them was settled early."],
 src:["Qurʾān 4:11–12, 4:176","Abū Dāwūd 4607 (rightly guided caliphs)"]});

const lang=(key,title,they,we,p,src)=>cur.deb(Q+'d-ia-quranic-language/'+key,{title,k:"Language",blurb:they,they,we,p,src});
lang('t-we',"Why does Allah say “We”?","If Allah is One, why does the Qurʾān say “We”?","It's the plural of majesty: a single speaker using “We” for greatness, as kings do in Arabic and other languages. When Allah speaks of His oneness, He always uses the singular.",["Arabic uses “innā” and “naḥnu” for one speaker speaking with grandeur, just as royal decrees say “We”.","Whenever the Qurʾān speaks about worship and tawḥīd, it uses the singular: “Indeed, I am Allah; there is no god except Me” (20:14)."],["Qurʾān 20:14; 15:9"]);
lang('t-he',"Why “He” if Allah has no gender?","If Allah has no gender, why is He called “He”?","Arabic has no neutral pronoun. “Huwa” is the default grammatical form, not a claim about gender, and Allah is “not like anything” (42:11).",["Grammatical gender isn't biological: Arabic also uses masculine or feminine for objects.","Allah is described in the masculine form throughout revelation, and that's how we refer to Him, while affirming He has no likeness."],["Qurʾān 42:11; 112"]);
lang('t-know',"“Until We know”: didn't Allah already know?","Verses like 47:31 say “until We know”. Doesn't Allah already know everything?","Allah knows everything before it happens. “Until We know” means until it becomes a known reality in the world, and the basis of reward or punishment.",["Allah's knowledge is eternal; the test brings people's choices into existence so they are judged on what they actually did.","Ibn Kathīr: this is knowledge of what has come to exist, after His prior knowledge of what would exist."],["Qurʾān 47:31; 2:143","Tafsīr Ibn Kathīr"]);
lang('t-swear',"Allah swears by creation: isn't that shirk?","Humans can't swear by created things, so isn't Allah committing shirk when He swears by the sun and moon?","The ban is on us, not on Allah. He swears by His creation to draw attention to its greatness and to what follows the oath, like the Resurrection.",["Humans are commanded to swear only by Allah because swearing glorifies what you swear by.","Allah isn't under commands. His oaths highlight signs that point back to Him, the Creator."],["Qurʾān 91:1–7; 86:1","Tirmidhī 1535"]);

cur.deb(Q+'d-ia-plagiarism-charges-against-the-quran',{title:"Did the Qurʾān plagiarise Jewish and Christian stories?",k:"Sources",blurb:"Shared stories ≠ copied stories.",
 they:"The Qurʾān borrows its stories from Jewish and Christian literature.",
 we:"The Qurʾān does engage with earlier traditions on purpose: it confirms what is true, corrects what is distorted and brings out the lesson. Engagement isn't plagiarism.",
 p:["The raw observation is true: the Qurʾān retells stories known to Jews and Christians. What the argument gets wrong is what that engagement means.","It presents itself as a confirmation and guardian (muhaymin) over earlier scripture (5:48), so overlap is expected.","Where it differs, it differs on the points of theology, e.g. Jesus' first words in the cradle are “I am the servant of Allah” (19:30)."],
 quote:["“And We have revealed to you the Book in truth, confirming what came before it and as a guardian over it.”","al-Māʾida 5:48"],
 src:["Qurʾān 5:48; 19:30; 12:111"]});
})();
cur.name('islam/quran/d-ia-quran-surahs',"Verses critics quote","Specific āyāt explained in context.");
cur.name('islam/quran/d-ia-scientific-allegations-against-the-quran',"Alleged scientific errors","Verses claimed to contradict science.");
cur.name('islam/quran/d-ia-alleged-contradictions',"Alleged contradictions","Verses claimed to contradict each other.");
cur.name('islam/quran/d-ia-quranic-language',"Language questions","“We”, “He”, “until We know”, oaths.");
cur.name('islam/quran/preservation/d-ia-common-claims',"Common claims","Ibn Masʿūd, the stoning verse, ʿUthmān's burning…");
cur.name('islam/quran/preservation/d-ia-quranic-manuscripts',"First-century manuscripts","The codices that carry today's Qurʾān.");
