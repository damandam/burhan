/* Hadith block 6 — 2026-11-20. Averroes German tiles used to sexualise the Prophet ﷺ → full English cards:
   #frau-teufel-vorbeigehen, #prophet-saw-trägt-aisha-kleidung, #mann-küsst-prophet-saw, #zungen-lutschen-küssen.
   Cross-server: only DR #the-prophet-kissed-a-young-boy touches the theme (Hishām ibn Saʿd), already its own card (hadith-block1) → linked.
   Covers Averroes' Hadith channels: woman/devil temptation metaphor, kissing al-Ḥasan/al-Ḥusayn, and ʿĀʾisha's garment wording. */
(()=>{
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const A2='islam/general/d-av-sonstiges-islam-2/c-', A3='islam/general/d-av-sonstiges-islam-3/c-';

/* ───────── “A woman comes in the shape of a devil” (Muslim 1403) ───────── */
const WD=AV('frau-teufel-vorbeigehen','1282517818117586966');
card(A2+'frau-teufel-vorbeigehen',{title:"“A woman comes in the shape of a devil” (Muslim 1403)",k:"Muslim 1403 · ziyāda",blurb:"Only the general advice is authentic; the story and the metaphor are one narrator's addition.",
 claim:"Muslim 1403: the Prophet ﷺ saw a woman, was attracted, went to Zaynab to have intercourse, then said women come and go in the shape of a devil. He was lustful and demonised women.",
 tree:{they:"Jābir: the Prophet ﷺ saw a woman, went to his wife Zaynab and fulfilled his need, then went out and said: “A woman comes in the shape of a devil and goes in the shape of a devil. If one of you sees a woman, let him go to his wife, for that will repel what is in his soul” (Muslim 1403).",
  we:"Only the general advice is authentic. The ḥadīth goes Abū al-Zubayr → Jābir, and of Abū al-Zubayr's six students four reliable ones narrate only the advice. The story about Zaynab and the “shape of a devil” come only from Hishām al-Dastawāʾī and the weak Ḥarb ibn Abī al-ʿĀliya: an addition the majority don't know (ziyāda munkara).",
  more:Object.assign({h:"Abū al-Zubayr's six students",p:[
   "Maʿqil ibn ʿUbaydillāh: only the general advice.",
   "Ibn Jurayj: only the general advice.",
   "Ibn Lahīʿa: only the general advice.",
   "Mūsā ibn ʿUqba: only the general advice.",
   "Hishām al-Dastawāʾī: advice + devil metaphor + Zaynab story.",
   "Ḥarb ibn Abī al-ʿĀliya (weak): advice + devil metaphor + Zaynab story.",
   "Abū al-Zubayr was known for tadlīs. In the versions with the additions he only says “from Jābir” (ʿan), never “I heard Jābir”. Only Maʿqil's version, the one without additions, has his explicit statement of hearing. Al-Dhahabī says Abū al-Zubayr didn't hear (these) from Jābir, and this ḥadīth is among those in Muslim where his hearing isn't stated.",
   "Al-Nasāʾī preferred the mursal version (without Jābir) as “more correct” than the connected one, which implies the chain through Abū al-Zubayr is faulty here; he favoured versions without the narrative context.",
   "The authentic core: “If one of you admires a woman and she falls into his heart, let him go to his wife and be intimate with her, for that repels what is in his soul.”"],src:["Muslim 1403","al-Nasāʾī, al-Sunan al-Kubrā","al-Dhahabī (on Abū al-Zubayr ← Jābir)"]},WD),
  next:[
   {they:"Even if you accept it, it shows he was overcome by lust.",
    we:"Qāḍī ʿIyāḍ and al-Nawawī: it doesn't mean he was affected by the woman. He showed us what to do in such a case and did it so we would do the same: right after, he went out and explained it to the Companions. His actions were meant as guidance.",
    more:Object.assign({h:"A lesson, not a lapse",p:["Al-Nawawī, Sharḥ Ṣaḥīḥ Muslim 9/254, citing Qāḍī ʿIyāḍ: the quote above.","That fits the report itself: he goes straight to the Companions and tells them what THEY should do, which is human and practical: answer temptation with what is lawful."],src:["al-Nawawī, Sharḥ Muslim 9/254"]},WD),
    next:[
     {they:"Calling women “devils” is misogyny.",
      we:"Even in the narration with the metaphor, the woman isn't called a devil. The commentators explain: her approach resembles the devil only in the effect on the onlooker, the pull of desire that Allah placed in men's souls, the way Satan's whisper makes evil look attractive. The burden falls on the man: lower your gaze and go to your wife.",
      more:Object.assign({h:"What the commentary says",p:[
       "“A woman comes in the shape of a devil” refers to the desire and temptation she triggers because of the inclination to women that Allah placed in men. She resembles the devil in his call to evil through whispering and beautifying it, because her approach invites a stolen look, and likewise her turning away: the gaze leads the heart, so it clings to her and wants to see her from every angle, an invitation to corruption.",
       "The remedy prescribed is entirely the man's: “let him go to his wife… that repels what is in his soul,” so his desire is checked and his soul calms.",
       "The Bible uses the same image: “The lips of a forbidden woman drip honey… but in the end she is bitter as wormwood, sharp as a two-edged sword. Her feet go down to death” (Proverbs 5:3–5)."],src:["Proverbs 5:3–5"]},WD),next:[]}]}]},
 sum:"Four of Abū al-Zubayr's reliable students narrate only the advice; the Zaynab story and the devil metaphor are Hishām's addition (ziyāda), and even accepted they are guidance on the gaze."});

/* ───────── Revelation in ʿĀʾisha's garment ───────── */
const GA=AV('prophet-saw-trägt-aisha-kleidung','1283045111059447879');
card(A3+'prophet-saw-tra-gt-aisha-kleidung',{title:"Did the Prophet ﷺ wear women's clothing?",k:"Bukhārī 2581 · 3775 · Muslim 2402",blurb:"Thawb, liḥāf and mirṭ: a cloth, a blanket and a cloak.",
 claim:"The Prophet ﷺ said revelation came to him while he was in ʿĀʾisha's clothes, and he received visitors in her mirṭ. So he cross-dressed, while cursing men who imitate women.",
 tree:{they:"“Revelation has not come to me while I was in the garment (thawb) of any woman except ʿĀʾisha” (Bukhārī 2581). He cross-dressed.",
  we:"The Arabic words don't mean women's clothes. Thawb is “what is worn to cover the body or part of it”, any cloth or garment. The parallel narration says liḥāf: “a padded cotton cover the sleeper wraps himself in”, a blanket. Revelation came while he was under the same blanket as ʿĀʾisha, in her turn.",
  more:Object.assign({h:"The three words",p:[
   "Bukhārī 2581: the wives were in two groups; people held back gifts until he was in ʿĀʾisha's house; Umm Salama was sent three times; he said: “Don't hurt me regarding ʿĀʾisha, for revelation didn't come to me while I was in the thawb of any woman except ʿĀʾisha.” Thawb: “what is worn to cover the whole body or part of it; clothing.”",
   "Bukhārī 3775, same event: “…revelation never came to me while I was under the liḥāf of any of you except her.” Liḥāf: “a cover of quilted cotton that the sleeper wraps himself in.” Even the English translation has “blanket”.",
   "Muslim 2402: Abū Bakr asked permission to enter while the Prophet ﷺ lay on ʿĀʾisha's bed wrapped in her mirṭ; then ʿUmar; then for ʿUthmān he sat up and said to ʿĀʾisha: “gather your clothes about you”. Mirṭ: “a wrap of silk, wool or linen that one ties around oneself and a woman wraps herself in”: a plain cloak, not a dress.",
   "Muslim 2424: he went out wearing a mirṭ embroidered with black hair, and took four people under it. A cloak that large is plainly not a woman's dress, and he wore his own mirṭ outside."],src:["Bukhārī 2581, 3775","Muslim 2402, 2424"]},GA),
  next:[
   {they:"But he cursed men who imitate women (Bukhārī 5885–5886), so he contradicted himself.",
    we:"There's no contradiction because there was no imitation: sharing a blanket or wrapping oneself in a spouse's cloak at home isn't dressing as a woman. The curse is on men who make themselves resemble women, and he expelled such a man, as ʿUmar expelled such a woman.",
    more:Object.assign({h:"The curse and its meaning",p:["Ibn ʿAbbās: the Messenger of Allah ﷺ cursed men who imitate women and women who imitate men (Bukhārī 5885). And he said: “Expel them from your houses”; the Prophet ﷺ expelled a certain man and ʿUmar a certain woman (Bukhārī 5886)."],src:["Bukhārī 5885, 5886"]},GA),
    next:[
     {they:"Christians would never accept men in women's things.",
      we:"Christian men wear necklaces, jewellery and earrings, things classed as feminine. And Thomas Aquinas, who calls cross-dressing sinful in itself, still says that when there's necessity, such as hiding from an enemy or having no other garment, “there is no sin”.",
      more:Object.assign({h:"Turn the tables",p:["Thomas Aquinas, Summa Theologiae II-II q.169: it is in itself unlawful for a woman to wear men's clothes or vice versa, especially as it may occasion lust; Deuteronomy 22 forbids it specifically to avoid pagan superstitions. “If there is a necessity for such a change, for example to hide from an enemy, or because one has no other garment, or a similar lawful reason, there is no sin.”","Christian men freely wear necklaces, jewellery and earrings."],src:["Thomas Aquinas, ST II-II q.169","Deuteronomy 22:5"]},GA),next:[]}]}]},
 sum:"Thawb is any cloth, liḥāf a blanket, mirṭ a large cloak: revelation came while he shared ʿĀʾisha's blanket, which is no imitation of women."});

/* ───────── The Companion who kissed the Prophet ﷺ (Abū Dāwūd 5224) ───────── */
const KI=AV('mann-küsst-prophet-saw','1282526313013313652');
card(A2+'mann-ku-sst-prophet-saw',{title:"A man kissing the Prophet ﷺ (Abū Dāwūd 5224)",k:"Usayd ibn Ḥuḍayr",blurb:"A broken chain, and even as told: a Companion's affection.",
 claim:"Abū Dāwūd 5224: a man asked the Prophet ﷺ to uncover his body and then kissed it. Homoerotic.",
 tree:{they:"Usayd ibn Ḥuḍayr was joking; the Prophet ﷺ poked him in the side with a stick. Usayd asked for retaliation; the Prophet ﷺ lifted his shirt and Usayd embraced him and kissed his side, saying “This is what I wanted” (Abū Dāwūd 5224).",
  we:"The chain is broken: it runs through ʿAbd al-Raḥmān ibn Abī Laylā from Usayd ibn Ḥuḍayr, and he didn't hear from Usayd. Ibn ʿAbd al-Hādī says so explicitly, al-ʿAskarī calls his narration from Usayd interrupted, and al-Arnaʾūṭ grades the chain weak.",
  more:Object.assign({h:"Ibn Abī Laylā and Usayd",p:[
   "Ibn ʿAbd al-Hādī: “Ibn Abī Laylā did not hear from Usayd ibn Ḥuḍayr” (Tanqīḥ al-Taḥqīq 1/310). Al-ʿAskarī: he narrated from Usayd in an interrupted chain.",
   "Al-Mizzī: it was also narrated via Yaḥyā ibn al-Mughīra → Jarīr → Ḥuṣayn → ʿAbd al-Raḥmān ibn Abī Laylā → his father (Tuḥfat al-Ashrāf).",
   "Al-Arnaʾūṭ on the related Musnad chain: “Its chain is weak and consists of unknowns, as we explained at no. 15945” (al-Mizzī has it in Tahdhīb al-Kamāl 12/312–313 via Aḥmad).",
   "His hearing from ʿUmar is also doubted: Ibn Abī Ḥātim, Abū Ḥātim (interrupted), Ibn Ḥajar (disputed), Ibn al-Barqī, Ibn Maʿīn, al-Khalīlī, Abū Dāwūd; Ibn Ḥazm: he didn't meet Bilāl or ʿUmar; al-Bayhaqī: he didn't meet Muʿādh or ʿAbdullāh ibn Zayd. Death dates make a meeting with Usayd (d. 20 AH) equally unlikely.",
   "(Several narrator critiques posted in the channel concern Muḥammad ibn ʿAbd al-Raḥmān ibn Abī Laylā, the judge, whom Aḥmad, al-Nasāʾī and others called weak; the father is reliable, but the gap to Usayd remains.)",
   "Scholarly gradings, including al-Albānī's and al-Arnaʾūṭ's assessments, consistently classify the chain as weak."],src:["Abū Dāwūd 5224","Ibn ʿAbd al-Hādī, Tanqīḥ al-Taḥqīq 1/310","al-Mizzī, Tuḥfat al-Ashrāf; Tahdhīb al-Kamāl 12/312"]},KI),
  next:[
   {they:"Even so, a man kissing a man's body is sexual.",
    we:"Read the story: it's a Companion asking for qiṣāṣ (retaliation) for a poke, and the Prophet ﷺ offering it, the leader submitting to justice. Usayd used the moment to embrace him and kiss his side for blessing. Affection and honour, in public, among men who would have died for him.",
    more:Object.assign({h:"Justice and love",p:["The Prophet ﷺ immediately offered his own body for retaliation over a light poke: no one was above justice.","Kissing for blessing or love was normal among the Companions: they kissed his hand, his head and his feet. Nothing in the report is sexual; that reading is projected onto it."]},KI),next:[]}]},
 sum:"The chain is broken (Ibn Abī Laylā never heard from Usayd); and the story is about the Prophet ﷺ submitting to retaliation, not anything sexual."});

/* ───────── The tongue ḥadīth (al-Ḥasan and al-Ḥusayn) ───────── */
const TO=AV('zungen-lutschen-küssen','1280961724270247996');
card(A2+'zungen-lutschen-ku-ssen',{title:"Did the Prophet ﷺ let a child suck his tongue?",k:"al-Ṭabarānī 2588",blurb:"Two thirsty grandsons, no water, in the desert.",
 claim:"Reports say the Prophet ﷺ sucked the tongue of a child, or let a child suck his. That's perverted.",
 tree:{they:"The Prophet ﷺ put out his tongue and al-Ḥasan (or al-Ḥusayn) sucked it.",
  we:"The authentic version tells you exactly why: his two grandsons were crying from thirst and there was no water. Abū Hurayra: he heard al-Ḥasan and al-Ḥusayn crying with their mother; “What is wrong with my sons?” She said: “Thirst.” He went for water, but water was scarce; no one had any. He said “Give me one of them”, put out his tongue to him and the child sucked it until he calmed down.",
  more:Object.assign({h:"The authentic report",p:[
   "Abū Hurayra: مَا شَأْنُ ابْنَيَّ “What is wrong with my sons?” الْعَطَشُ “Thirst.” هَلْ أَحَدٌ مِنْكُمْ مَعَهُ مَاءٌ “Does anyone have water?” نَاوِلِينِي أَحَدَهُمَا “Hand me one of them.” فَأَدْلَعَ لَهُ لِسَانَهُ فَجَعَلَ يَمُصُّهُ حَتَّى هَدَأَ أَوْ سَكَنَ “He put out his tongue for him and he sucked it until he became quiet” (al-Ṭabarānī, al-Muʿjam al-Kabīr 2588; ḥasan).",
   "Al-Haythamī judged its narrators trustworthy (Majmaʿ al-Zawāʾid 9/183); also al-Shawkānī (Darr al-Saḥāba 242).",
   "Qāḍī ʿIyāḍ: “He gave al-Ḥasan and al-Ḥusayn his tongue and they sucked it; they had been crying from thirst, and they became quiet” (al-Shifā 1/326).",
   "In a dry desert climate, moistening a thirsty child's lips and mouth with saliva when water was short was common and necessary relief.",
   "The other versions (in al-Adab al-Mufrad and Musnad Aḥmad, e.g. walking in the market with Abū Hurayra) are weak: their chain has Hishām ibn Saʿd of Medina, who isn't reliable (see the card “The Prophet ﷺ kissed a young boy”, where Deenresponds shows the same narrator)."],src:["al-Ṭabarānī, al-Muʿjam al-Kabīr 2588","Majmaʿ al-Zawāʾid 9/183","Qāḍī ʿIyāḍ, al-Shifā 1/326"]},TO),
  next:[
   {they:"No normal person would do that.",
    we:"A grandfather soothing a parched toddler with his own saliva when there was no water is care, not perversion. And the Bible has prophets using saliva and mouth contact: Jesus spat and touched a man's tongue (Mark 7:33), and Elisha lay on the dead boy “mouth on his mouth” (2 Kings 4:34).",
    more:Object.assign({h:"Turn the tables",p:["Mark 7:33: “Taking him aside from the crowd privately, he put his fingers into his ears, and after spitting touched his tongue.”","2 Kings 4:34: Elisha “lay on the child, putting his mouth on his mouth, his eyes on his eyes, and his hands on his hands.”","Anti-Muslim sites read the worst into a report Muslims read as it is: kindness in hardship."],src:["Mark 7:33","2 Kings 4:34"]},TO),next:[]}]},
 sum:"Al-Ḥasan and al-Ḥusayn were crying from thirst with no water around; the authentic report (al-Ṭabarānī 2588) is a grandfather's care; the other versions run through the weak Hishām ibn Saʿd."});
})();
