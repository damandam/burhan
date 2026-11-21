/* Where every Discord channel goes in the library. First matching rule wins.
   path = section path; the channel becomes a tile inside it (forums get a sub-tile per thread). */
const SERVERS={
  'islamic-apologetics':{label:'Islamic Apologetics',short:'ia'},
  'deenresponds':{label:'Deenresponds',short:'dr'},
  'averroes':{label:'Averroes',short:'av'},
  'averroes-2':{label:'Averroes 2',short:'av2',group:true},
  'averroes-full':{label:'Averroes',short:'av',group:true},
  'averroes-all':{label:'Averroes',short:'av',group:true},
  'averroes-2-all':{label:'Averroes 2',short:'av2',group:true},
};
const I=(...p)=>['islam',...p], C=(...p)=>['christianity',...p], A=(...p)=>['atheism',...p], O=(...p)=>['other',...p];

/* sections (tiles that only hold other tiles) */
const SECTIONS=[
  [I('quran'),{title:"The Qurʾān",k:"Scripture",blurb:"Preservation, readings, alleged errors and borrowed stories."}],
  [I('prophet'),{title:"The Prophet ﷺ",k:"Nubuwwah",blurb:"His truthfulness, prophecies, miracles and the attacks on his character."}],
  [I('hadith'),{title:"Hadith shubuhāt",k:"Sunnah",blurb:"Hadith that critics quote, one by one."}],
  [I('morality'),{title:"Law & morality",k:"Sharīʿa",blurb:"Marriage, women, war, slavery, apostasy and the law."}],
  [I('morality','women'),{title:"Women",k:"Fiqh",blurb:"Testimony, hijab, “deficient in intellect”, 4:34 and more."}],
  [I('creed'),{title:"Creed & theology",k:"ʿAqīda",blurb:"Allah's attributes, decree, and the logical 'dilemmas'."}],
  [I('proofs'),{title:"Proofs of Islam",k:"Dalāʾil",blurb:"Why Islam is true: the Qurʾān, prophecy, history."}],
  [I('sects'),{title:"Shia & Ahmadiyya",k:"Sects",blurb:"Answers to sectarian claims."}],
  [I('general'),{title:"Mixed objections",k:"Misc.",blurb:"Collections of shorter objections and answers."}],
  [C('bible'),{title:"The Bible",k:"Scripture",blurb:"Preservation, authorship, contradictions, errors and the canon."}],
  [C('bible','contradictions'),{title:"Bible contradictions",k:"Contradictions",blurb:"Passages that can't both be true."}],
  [C('bible','canon'),{title:"Canon & apocrypha",k:"Canon",blurb:"Which books, decided by whom, and the lost gospels."}],
  [C('jesus'),{title:"Jesus",k:"Christology",blurb:"What Jesus said and didn't say, prophecy and the Gospels."}],
  [C('church'),{title:"Paul, councils & Church Fathers",k:"History",blurb:"How the doctrine developed after Jesus."}],
  [C('practice'),{title:"Christian law & practice",k:"Ethics",blurb:"Women, divorce, slavery, violence: the tu quoque files."}],
  [C('islam-vs'),{title:"Islam corrects Christianity",k:"Comparison",blurb:"Where the Qurʾān answers Christian belief, and Muhammad ﷺ in the Bible."}],
  [O(),{title:"Other beliefs",n:"IV",k:"IV",color:"#b08ad9",hue:0xb08ad9,blurb:"Hinduism and modern ideologies."}],
  [O('hinduism'),{title:"Hinduism",k:"Dharma",blurb:"Karma, caste, the gods and scripture."}],
  [O('ideologies'),{title:"Modern ideologies",k:"Politics",blurb:"Liberalism, feminism, secularism and more."}],
];

const R=(re,path,title,server)=>({re,path,title,server});
const RULES=[
  R(/please-read-first|read-first/i,null),
  R(/quranist|anti-hadith|sciences-of-hadith/i,I('hadith')),
  R(/apostate-scribe|aorta-severed|kissed-a-young-boy|wives-in-one-night|dream-as-a-young-boy|expel-ahlul-kitab|women-are-like-dogs/i,I('hadith')),
  R(/what-is-man-created|days-for-creation|allah-wonder|made-in-pairs|copies-from-talmud|apocrypha-texts|10-94|uzayr/i,I('quran')),
  R(/banu-qurayza/i,I('morality','war')), R(/quran-65-4/i,I('morality','women')), R(/did-no-miracles/i,I('proofs')), R(/allah-deceives/i,I('creed')),
  R(/judge-by-the-gospel|^5-47$|^5-48$|quran-2-85|what-is-the-injil|^islamic-dilemma$/i,C('islam-vs')),
  R(/origen/i,C('church')), R(/john-20-28|john-17-3/i,C('trinity')),
  R(/women-and-the-quran/i,I('morality','women'),"Women and the Qurʾān"),
  R(/paul/i,C('church')),
  R(/crucifixion|jesus.?-?death/i,C('cross')),
  R(/bewitched|suicidal-prophet/i,I('prophet')),
  R(/flat-earth|scientific-alleg|calculation/i,I('quran')),
  R(/messianic/i,C('jesus'),"Messianic prophecies"),
  /* ── ʿĀʾisha & the Prophet's marriages ── */
  R(/aisha|consummation|puberty-at-9|early-christians-had-no-issue|this-doesn.?t-contradict/i,I('morality','marriage','aisha')),
  R(/zaynab/i,I('morality','marriage','zaynab')),
  R(/kian-folter|kinana/i,I('morality','marriage','safiyya'),"The Kināna report (German notes)"),
  R(/concubin/i,I('morality','marriage')),
  /* ── Qurʾān ── */
  R(/quran.?preservation|process-of-quran|scholarly-attest|quranic-manuscripts|quran manuskripte|common-claims|abrogation|naskh|ahruf|qiraat|qirat|leseart|goat-ate|quran aufbewahrt/i,I('quran','preservation'),null),
  R(/quran verf|verfälscht/i,I('quran','preservation'),"“The Qurʾān was corrupted” (German)"),
  R(/scheinargument/i,I('quran'),null),
  R(/apokhyrphen|von apok/i,I('quran'),"The Qurʾān and the apocrypha (German)"),
  R(/satanic-verses/i,I('quran')),
  R(/sternschnuppen/i,I('quran'),"Shooting stars (German)"),
  R(/esel-und-kamel/i,I('quran'),"Donkey and camel (German)"),
  R(/sure-4-34|4-34/i,I('morality','women'),"Qurʾān 4:34"),
  R(/verses-come-as-birds|quran 9.?111|9-111/i,I('quran')),
  R(/sch.ne-koran/i,I('quran'),"Beautiful Qurʾān verses (German)"),
  R(/proof-of-the-quran/i,I('proofs')),
  /* ── Prophet ── */
  R(/moon-split/i,I('prophet')),
  R(/truthfulness|prophecies|^miracles|islam wunder/i,I('proofs')),
  R(/historical-proofs|other-proofs/i,I('proofs')),
  R(/prophet.?saw in bibel|muhammad.*bible|in-the-bible/i,C('islam-vs')),
  R(/satan-ber|satan-furz|hadiths-on-satan/i,I('hadith')),
  R(/prophet-saw-tochter/i,I('prophet'),"The Prophet ﷺ, his daughter and Ṭalḥa (German)"),
  R(/^prophet-saw$/i,I('prophet'),"The Prophet ﷺ (German notes)"),
  R(/sitting-on-the|genital/i,I('hadith')),
  /* ── Hadith ── */
  R(/hell-is-mostly|women-are-deficient|testimony|kill-all-dogs|jews-turned|moses-and-the-rock|racist-hadith|adam-and-moses|is-allah-time|christians-and-jews-will|schwarzefrau|pest|hadith-general|preservation-of-hadith|torah-preserved|preservation-of-torah|wipe-semen/i,I('hadith')),
  R(/sch.ne.?hadithe|sch.ne-tier|sch.ne-salaf|jesus-hadithe/i,I('hadith'),null),
  /* ── Law & morality ── */
  R(/slave|sklaven(?! christ)|genocide/i,I('morality','slavery')),
  R(/jihad|sword|violence|gewalt koran|keine gewalt|keine-kirchen|jizy/i,I('morality','war')),
  R(/apostasy|blasphem/i,I('morality')),
  R(/forced-marriage/i,I('morality','marriage')),
  R(/frau islam|frauen-herrscher/i,I('morality','women'),null),
  R(/schlechtes-mit-gutes/i,I('morality'),"Repel evil with good (German)"),
  /* ── Creed ── */
  R(/athari|istiwa|uncreated|divine-governance|pillars-of-iman|innovation|aqidah|wala|ruler|swearing|islamic dilema|islamic-dilema|stone-bigger|hyena|is-allah-the-father/i,I('creed')),
  /* ── Sects ── */
  R(/sahaba|camel|ghadeer|shia|mirza|ahmadi|jesus.?-?death/i,I('sects')),
  /* ── Islam general ── */
  R(/^islam ?\d|sonstiges islam|islamic-objections|response-library|notes-and-resources|resources-from-the-scholars|muslim-questions|non-muslim-questions|tafsir|presentations|conscious|refuting/i,I('general')),
  /* ── Christianity ── */
  R(/islam korrigiert/i,C('islam-vs'),"Islam corrects Christianity (German)"),
  R(/biblical-corruption|new testament corruption|bible notes|seerahpro/i,C('bible')),
  R(/widerspr/i,C('bible'),null),
  R(/wissenschaftliche fehler/i,C('bible'),"Scientific errors in the Bible (German)"),
  R(/kanon|canon|apokhyrp|apokryph|hebr.er|ebioniten|zitate-die|pedalion/i,C('bible','canon'),null),
  R(/trinit|church fathers were not|john-1-1|jesus-is-worshipped/i,C('trinity')),
  R(/stunde nicht|jesus|ehebrecherin|mark|matthew|nicht prophezeit|endzeit|pharis|searches-hearts|jews-can.?t-be-trusted/i,C('jesus'),null),
  R(/paulus|kirchenv|church-fathers|beschl|orthodox|katholik|apostoliche|christentum 4|sonstiges christentum|church fathers on/i,C('church'),null),
  R(/kopftuch|frauen lehren|frau christentum|scheidung|kinder ehe|gewalt bibel|sklaven christ|paradies christ|modesty/i,C('practice'),null),
  /* ── Atheism ── */
  R(/atheist|religion-and-morals|evolution|agnostic/i,A()),
  /* ── Other beliefs ── */
  R(/karma|gods-fighting|caste|hindu|kinderehe-hindu/i,O('hinduism')),
  R(/liberal|conservat|marx|lgbt|feminis|red-pill|nationalis|secular|political/i,O('ideologies')),
];

const SKIP=/^(rules|roles|announcements?|welcome|verification.*|bots?|bot-stuff|general|media.*|memes|suggestions|polls|lobby|marhaban|regeln|ankündigungen|ticket|reminders|receipts.*|my-socials|new-videos|live-streams|shorts|other-new-videos|how-to-get.*|weight-loss-chat|muslim-general|lounge.*|events?|upcoming-events.*|useful-links|vault|manhaj|fragen-zum-islam|fiqh|aqida|bilā kayf.*|bila kayf.*|hinduism-resources|ahmadiyya-sources)$/i;

/* fallback by Discord category heading */
const CATS=[
  R(/jesus divinity|refute jesus/i,C('trinity')), R(/islamic dilemma/i,C('islam-vs')), R(/church fathers/i,C('church')),
  R(/hadith shubhas/i,I('hadith')), R(/historical errors|scientific errors|plagiarism/i,I('quran')), R(/important discussions/i,I('general')),
  R(/ebionites|salvation continuity/i,C('church')), R(/polygamy in the ot/i,C('practice')), R(/bible contradictions/i,C('bible','contradictions')),
  R(/incarnation/i,C('trinity')), R(/injil and q|intertexts|christian dilemma/i,C('bible')),
  R(/muhammed.*(bible|injeel|torah)/i,C('islam-vs')), R(/concept of god/i,I('creed')),
  R(/proofs of islam/i,I('proofs')), R(/aqidah|creed/i,I('creed')), R(/shi.?a/i,I('sects')), R(/ahmadi/i,I('sects')),
  R(/islamic law/i,I('morality')), R(/qur.?an preservation/i,I('quran','preservation')), R(/qur.?an refut/i,I('quran')),
  R(/anti-hadith/i,I('hadith')), R(/hadith/i,I('hadith')), R(/christian/i,C('bible')), R(/atheis|agnostic/i,A()),
  R(/hindu/i,O('hinduism')), R(/ideolog/i,O('ideologies')), R(/seerahdawah|refutations/i,I('general')),
];
module.exports={SERVERS,SECTIONS,RULES,SKIP,CATS};
