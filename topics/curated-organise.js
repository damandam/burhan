/* Organisation pass (audit): sub-folders, wrong places, duplicates. Runs last. */
(()=>{
const C='christianity', V=C+'/islam-vs', J=C+'/jesus', B=C+'/bible';
/* new sub-folders */
topic([...V.split('/'),'prophecies'],{title:"Muhammad ﷺ in the Bible",k:"Prophecy",blurb:"Torah, Psalms, Isaiah, Song of Songs and the Gospels."});
topic([...V.split('/'),'dilemma'],{title:"The “Islamic dilemma”",k:"Dilemma",blurb:"Does the Qurʾān confirm today's Bible?"});
topic([...J.split('/'),'proof-texts'],{title:"Proof-texts for Jesus' divinity",k:"Gospels",blurb:"The verses Christians quote, read in context."});
topic([...J.split('/'),'in-quran'],{title:"Jesus in the Qurʾān",k:"Qurʾān",blurb:"Word, spirit, helpers and Aḥmad."});

/* Islam corrects Christianity → two folders */
['d-dr-tenants-prophecy','d-dr-paraklete-prophecy','d-dr-song-of-solomon','d-dr-daniel-2','d-dr-deuteronomy-33-2','d-dr-isaiah-9','d-dr-isaiah-19','d-dr-isaiah-21','d-dr-isaiah-29',
 'd-dr-isaiah-40','d-dr-isaiah-41','d-dr-isaiah-42','d-dr-isaiah-45','d-dr-isaiah-54','d-dr-psalm-72','d-dr-psalm-9','d-dr-deens-paraklete-exegesis-of-john-14','d-dr-early-usage-of-paraklete','d-dr-how-john-is-very-spiritual']
 .forEach(k=>cur.move(V+'/'+k, V+'/prophecies'));
const MB=V+'/d-ia-muhammad-صلى-الله-عليه-وسلم-in-the-bible';
cur.merge(MB+'/t-isaiah-42', V+'/prophecies/d-dr-isaiah-42');
cur.move(MB+'/t-matthew-22', V+'/prophecies'); cur.move(MB+'/t-4-ezra-matt-21-22', V+'/prophecies');
['d-dr-judge-by-the-gospel-5-47','d-dr-what-is-the-injil','d-dr-islamic-dilemma','d-dr-quran-2-85'].forEach(k=>cur.move(V+'/'+k, V+'/dilemma'));

/* Jesus → proof-texts / in the Qurʾān */
['d-dr-mark-1-1-3-debunked','d-dr-jesus-is-called-lord-debunked','d-dr-mark-5-30','d-dr-mark-10-18','d-dr-matthew','d-dr-mark','d-dr-mark-2-only-god-searches-hearts',
 'd-dr-jews-can-t-be-trusted-in-john','d-dr-disciples-worship-jesus-debunked','d-ia-jesus-will-judge'].forEach(k=>cur.move(J+'/'+k, J+'/proof-texts'));
cur.merge(J+'/d-dr-mark-1-3', J+'/proof-texts/d-dr-mark-1-1-3-debunked');
['d-dr-jesus-is-the-word-and-spirit-of-allah','d-dr-the-followers-of-jesus-will-prevail','d-dr-jesus-is-god-quran-9-31','d-dr-jesus-never-said-ahmed'].forEach(k=>cur.move(J+'/'+k, J+'/in-quran'));
cur.move(J+'/d-dr-banquet-prophecy-matthew-22', V+'/prophecies');

/* wrong places */
cur.move(B+'/d-ia-general-refutations/t-a-comprehensive-proving-hadith-are-reliable', 'islam/hadith');
cur.move(B+'/d-ia-general-refutations/t-jesus-does-not-know-the-hour', J+'/proof-texts');
cur.move(C+'/church/d-dr-no-forgiveness-of-sin-outside-of-shedding-blood', C+'/cross');

/* duplicates */
cur.merge(B+'/d-ia-authorship-of-the-new-testament', B+'/authorship');
})();
/* ── Islam: group by theme ── */
(()=>{
const H='islam/hadith', Q='islam/quran', CR='islam/creed', G='islam/general';
const F=(p,title,blurb)=>topic(p.split('/'),{title,k:'Theme',blurb});
const mv=(k,to)=>cur.move(k,to);
F(H+'/science',"Ḥadīth science & preservation","How ḥadīth were checked, written and preserved.");
F(H+'/women',"Women in the ḥadīth","Hell, intellect, testimony, Eve, the donkey-woman-dog report.");
F(H+'/others',"Jews, Christians & non-Muslims","Expulsion, greetings, the Torah, the end times.");
F(H+'/prophet',"The Prophet ﷺ in the ḥadīth","Reports about his body, family and daily life.");
F(H+'/unseen',"The unseen & strange reports","Jinn, Satan, Paradise and odd narrations.");
F(H+'/law',"Law & practice","Fasting, punishments, purity and animals.");
const CRF=H+'/d-ia-contributed-refutations/', HR=H+'/d-ia-hadith-refutations/';
[ 'd-dr-hadith-general-inquiry-and-news','d-ia-introduction-to-the-sciences-of-hadith','d-ia-preservation-of-hadith','d-ia-quranist-and-anti-hadith-claims','t-a-comprehensive-proving-hadith-are-reliable']
  .forEach(k=>mv(H+'/'+k,H+'/science')); mv(G+'/d-ia-islamic-dilemma',H+'/science');
[ H+'/d-dr-women-are-deficient-and-testimony', CRF+'t-sahi-h-al-bukha-ri-3241-most-women-in-hellfire', HR+'t-bukhari-514-donkey-woman-dog', HR+'t-eve-betrayal-bukhari-3399-muslim-1470',
  H+'/c-frau-teufel-vorbeigehen'].forEach(k=>mv(k,H+'/women'));
[ 'd-dr-christians-and-jews-will-take-our-sins','d-dr-jews-turned-into-rats','d-dr-expel-ahlul-kitab-from-arabia','d-dr-abu-dawud-4449-torah-preserved','d-dr-razi-preservation-of-torah','d-dr-bukhari-preservation-of-torah',
  'c-keine-juden-christen-gru-ßen','c-juden-am-ju-ngsten-tag-to-ten','c-prophet-saw-verflucht-juden-und-christen','c-jude-schwo-ren-kaaba'].forEach(k=>mv(H+'/'+k,H+'/others'));
mv(CRF+'t-s-ah-i-h-al-bukha-ri-6929-o-lord-forgive-my-people',H+'/others'); mv(HR+'t-sahih-al-bukhari-7498-1-corinthians-29',H+'/others');
[ 'd-dr-prophet-had-relations-with-all-of-his-wives-in-one','d-dr-the-prophet-kissed-a-young-boy','d-dr-apostate-scribe-hadith','c-frau-trink-urin-vom-propheten-saw','c-nackte-jinn-reiten-auf-prophet-saw',
  'c-zungen-lutschen-ku-ssen','c-mann-ku-sst-prophet-saw','c-prophet-saw-tra-gt-aisha-kleidung','c-prophet-saw-blut-rein','c-umar-ra-wirft-steine-kinder','c-maria-prophet-saw-frau','c-sahaba-trinken-urin-brunnen']
  .forEach(k=>mv(H+'/'+k,H+'/prophet'));
[CRF+'t-does-the-aorta-narration-make-the-prophet-صلى-الله',CRF+'t-sahi-h-al-bukha-ri-5038-forgetting-the-qur-an',CRF+'t-sahih-al-bukhari-7142',CRF+'t-al-zutt-hadith-refuted',HR+'t-gabriel-squeezed-muhammad-صلى-الله-عليه-وسلم'].forEach(k=>mv(k,H+'/prophet'));
[ 'd-dr-hadiths-on-satan','d-dr-is-allah-time','d-dr-the-prophet-sitting-on-the-arsh','d-dr-allah-came-in-a-dream-as-a-young-boy','d-dr-moses-and-the-rock','d-dr-adam-and-moses-predestination',
  'c-takbir-feuerlo-schen','c-schwarzefrau-pest','c-sonne-geht-im-quellen-meer-unter','c-kurden-jinn','c-bilder-paradies-begehren','c-ratte-ibn-kathir','c-ketten-ins-paradies-erstaunt','c-kamel-vom-teufel-erschaffen']
  .forEach(k=>mv(H+'/'+k,H+'/unseen')); mv(HR+'t-khidr-killed-the-boy',H+'/unseen'); mv(G+'/d-ia-7-2-72-virgins',H+'/unseen');
[ 'd-dr-kill-all-dogs','c-blinder-mann-to-tet-sklaven','c-aisha-ra-stillt-ma-nner','c-ashura-juden','c-zina-mit-mutter-abu-dawud','c-kamel-urin','c-kannibalismus-verbot','c-ibn-al-qayim-erlaubt-kinder-sklaven-hand-mastrubie']
  .forEach(k=>mv(H+'/'+k,H+'/law'));

/* Qurʾān */
F(Q+'/science-errors',"Alleged scientific errors","Flat earth, pairs, wombs, the sun.");
F(Q+'/history',"Alleged historical errors","ʿUzayr, Mary “sister of Aaron”, the whale.");
F(Q+'/sources',"Sources & borrowing","The Talmud, apocrypha and poets.");
const AC=Q+'/d-ia-alleged-contradictions', SE=Q+'/d-ia-scientific-allegations-against-the-quran', VQ=Q+'/d-ia-quran-surahs';
['d-dr-quran-contradiction-what-is-man-created-from','d-dr-how-many-days-for-creation','d-dr-does-allah-wonder-quran-37-12'].forEach(k=>mv(Q+'/'+k,AC));
['d-ia-flat-earth','d-dr-everything-is-made-in-pairs','science'].forEach(k=>mv(Q+'/'+k,Q+'/science-errors'));
[SE+'/t-surah-86-5-7-semen-the-backbone-claim',SE+'/t-surah-31-34-today-we-know-what-is-in-the-wombs'].forEach(k=>mv(k,Q+'/science-errors'));
['d-dr-uzayr-being-the-son-of-allah','c-maria-schwester-harun-aaron-imran','c-wal-ru-cken-erde'].forEach(k=>mv(Q+'/'+k,Q+'/history'));
['d-dr-quran-copies-from-talmud','d-dr-the-quran-uses-apocrypha-texts','d-ia-plagiarism-charges-against-the-quran'].forEach(k=>mv(Q+'/'+k,Q+'/sources'));
['d-dr-10-94-prophet-can-doubt','c-qibla-richtung','c-prophet-saw-weiß-nicht-ob-paradies','d-ia-alleged-calculation-errors'].forEach(k=>mv(Q+'/'+k,VQ));
cur.merge(Q+'/d-dr-satanic-verses-debunked',Q+'/d-ia-satanic-verses');
mv(Q+'/d-dr-quran-verses-come-as-birds',CR); mv(G+'/d-dr-tafsir-stuff',Q);

/* Creed */
F(CR+'/attributes',"Allah's names & attributes","Istiwāʾ, the uncreated Qurʾān, “Father”, the Throne.");
F(CR+'/logic',"Logical challenges","The stone paradox, the hyena dilemma, deception.");
F(CR+'/governance',"Rulers & loyalty","Ruling by Allah's law, obedience, walāʾ.");
F(CR+'/faith',"Faith & practice","Pillars, bidʿa, shirk, children's fate.");
['d-ia-understanding-the-athari-creed','d-ia-istiwa','d-ia-uncreated-quran','d-ia-is-allah-the-father','c-mond-gott','c-allah-swt-sieht-aus-wie-dajal','c-allahs-thron-knirchen','d-ia-aqidah-questions','d-dr-quran-verses-come-as-birds'].forEach(k=>mv(CR+'/'+k,CR+'/attributes'));
['d-ia-stone-bigger-than-allah','d-ia-hyena-dilemma','d-dr-allah-deceives'].forEach(k=>mv(CR+'/'+k,CR+'/logic'));
['d-ia-divine-governance','d-ia-obeying-the-ruler','d-ia-rebelling-against-the-ruler','d-ia-al-wala-wal-bara'].forEach(k=>mv(CR+'/'+k,CR+'/governance'));
['d-ia-pillars-of-iman','d-ia-innovation-in-religion','d-ia-swearing-by-other-than-allah','c-talisman-bo-ser-auge','c-islam-kinder-ho-lle','c-baby-lebendig-begraben-ho-lle'].forEach(k=>mv(CR+'/'+k,CR+'/faith'));

/* Mixed */
mv(G+'/d-dr-refuting-sam','islam/morality/marriage/aisha');
})();
