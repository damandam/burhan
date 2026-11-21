/* Qurʾān AV batch 9 — 2026-11-20. Averroes “Koran von apokhyrphen” (8 channels, not on the site before).
   add(): clay birds / Infancy Gospel card ← #kindheits-evangelium + #pseudo-evangelium; plagiarism card ← #allgemeine-widerlegeung + #apocalypse-von-abraham.
   NEW Qurʾān › Sources: Solomon and the ant (27:18–19) vs Ginzberg's Legends of the Jews (#the-legend-of-jews, + #salomon-und-teppisch-teppich),
   Abraham in the fire (21:51–70) (#abraham-feuer: Targum, Genesis Rabbah, Jerome, Bede).
   #apokalypse-von-moses-leben-von-adam-und-eva-höhle-der-schätze… is 2 images only (to capture). Also #the-legend-of-jews PDF. */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next)=>({they,we,more:Object.assign({h,p,src},cr),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const add=(key,branch)=>{ for(let i=TOPICS.length-1;i>=0;i--){ const t=TOPICS[i], k=t.path.join('/'); let a=null; if(k===key) a=t.node.article; else if(key.startsWith(k+'/')&&t.node.children){ const c=t.node.children[key.slice(k.length+1)]; a=c&&c.article; } if(!a) continue;
  if(a.type==='explainer'){ const m=branch.more||{}; (a.cards=a.cards||[]).push({h:m.h,short:branch.we,sub:branch.we,p:[(branch.they?'They say: '+branch.they+' — ':'')+branch.we,...(m.p||[])],more:{credit:m.credit,link:m.link,src:m.src}}); return; }
  if(a.tree){ (a.tree.next=a.tree.next||[]).push(branch); return; } } console.warn('quran-av9: no card',key); };
const SO='islam/quran/sources/';

/* clay birds ← Infancy Gospel + Pseudo-Matthew */
add('islam/quran/d-dr-the-quran-uses-apocrypha-texts',N(AV('kindheits-evangelium','1287472926215639052'),
 "The Arabic Infancy Gospel has the clay birds, so the Qurʾān copied it.",
 "The Arabic Infancy Gospel was only translated into Arabic in the 8th–9th century (Tony Burke; Benjamin Harris), after the Qurʾān. Stephen Davis: “Arabic Infancy Gospel” is a misnomer, the manuscript found in the 17th century goes back to a Syriac original. And the Infancy Gospel of Thomas has no fixed original at all: Bart Ehrman says we don't know its original length or content; the Greek manuscripts differ radically, whole chapters missing in some. Even the Islam critic D. S. Margoliouth rejected Foster's claim of copying: the Qurʾān's language at those places is entirely different, and scholars suggested the Infancy Gospel took that part from the Qurʾān.",
 "Dating the infancy gospels",["Bart D. Ehrman: the Infancy Gospel of Thomas poses some of the hardest textual problems in early Christian literature; its Greek manuscripts “differ radically”.","Tony Chartrand-Burke and Benjamin Harris: Arabic version 8th or 9th century. Stephen Davis: originally Syriac.","The Prophet ﷺ couldn't read or write (29:48)."],["Qurʾān 5:110; 3:49; 29:48","Ehrman, Lost Scriptures"],
 [N(AV('pseudo-evangelium','1287478772722831463'),"Then the palm tree giving Maryam dates (19:23–25) comes from Pseudo-Matthew.",
   "Pseudo-Matthew is later than the Qurʾān. Ellicott: in its present form perhaps 8th century; Stephen Shoemaker: written in Latin in the Christian West and wholly unknown in the Christian East; HarperCollins: an 8th-century Latin work; Lynette Muir: first manuscripts after the 8th century; Mikeal Parsons: 8th or 9th century.",
   "Pseudo-Matthew's date",[],["Qurʾān 19:23–25"])]));

/* plagiarism card ← general answer + Apocalypse of Abraham */
add('islam/quran/d-ia-plagiarism-charges-against-the-quran',N(AV('allgemeine-widerlegeung','1369588743589068851'),
 "Muhammad learned all this from Jews and Christians.",
 "The Qurʾān answers that charge itself: the man they point to speaks a foreign tongue while this is clear Arabic (16:103); the Prophet ﷺ read no book before and wrote none with his hand, “otherwise the falsifiers would have had cause to doubt” (29:48); and the challenge stands: if men and jinn gathered they couldn't produce its like (17:88). The Prophet ﷺ even told ʿUmar not to write down the Jews' stories: “Would you fall into confusion as the Jews and Christians did? I have brought you a clear, pure way; if Mūsā were alive he would have to follow me” (al-Baghawī, Sharḥ al-Sunna 126, ḥasan per al-Arnaʾūṭ).",
 "The Qurʾān's own answer",["Revelation came in living moments, amid events and questions, often answering at once.","Example, Abraham and the heavenly bodies (6:76–78): critics cite the Apocalypse of Abraham, but the parallel they quote is from Midrash ha-Gadol, compiled by David ben Amram al-Adani in 14th-century Yemen, earliest manuscript 15th century (#apocalypse-von-abraham)."],["Qurʾān 16:103; 29:48; 17:88; 6:76–78","al-Baghawī, Sharḥ al-Sunna 126"]));

/* Solomon and the ant */
const SA=AV('the-legend-of-jews','1369346051257012366');
card(SO+'solomon-and-the-ant-27-18',{title:"Solomon and the ant (27:18–19): from the Legends of the Jews?",k:"Ginzberg, 20th century",blurb:"A modern compilation with no source, a late tradition, and a different story.",
 claim:"The story of Solomon and the ant was copied from Jewish legend (Ginzberg's Legends of the Jews).",
 tree:N(SA,"Ginzberg's Legends of the Jews has Solomon and the ant, so the Qurʾān copied it.",
  "The Legends of the Jews was compiled in the 20th century, and Ginzberg gives no source for the ant story; it can't be found in his other works either. He also drew on medieval material from after Islam: later midrash collections (Tanḥuma, Pirkei de-Rabbi Eliezer), Targums, Rashi, Sefer ha-Yashar, the Zohar. And the stories differ in their theology.",
  "Two different stories",["Qurʾān 27:19: Solomon smiles at the ant's words, shows humility and gratitude and prays to Allah: an exemplary prophet. The ant warns, wise but not set above him.","Legend: Solomon reacts angrily and proudly, throws the ant down; the ant declares itself greater than him because God led him to it, and lectures him until he leaves ashamed: a fable about pride.","Proverbs 6:6, attributed to Solomon: “Go to the ant, O sluggard; consider her ways and be wise.” The Qurʾān may confirm an authentic memory of Solomon and the ant.","A PDF on the Legends of the Jews is in the channel (to capture)."],["Qurʾān 27:18–19","Proverbs 6:6"],
  [N(AV('salomon-und-teppisch-teppich','1369573400397348916'),"And Solomon's flying carpet is pure folklore.",
    "The carpet isn't in the Qurʾān. It's in Ibn Kathīr's tafsīr quoting al-Ḥasan al-Baṣrī, with no ḥadīth from the Prophet ﷺ. The Qurʾān only says the wind was subjected to Solomon (21:81; 34:12).",
    "Not in the Qurʾān",[],["Qurʾān 21:81; 34:12"])]),
 sum:"Ginzberg's 20th-century compilation gives no source and uses post-Islamic material; its proud Solomon contradicts the Qurʾān's humble prophet."});

/* Abraham in the fire */
const AF=AV('abraham-feuer','1369372322443559063');
card(SO+'abraham-in-the-fire-21-68',{title:"Abraham in the fire (21:51–70): from Jewish legend?",k:"Ur = fire",blurb:"Late manuscripts, a different story, and Church Fathers who call the tradition true.",
 claim:"Abraham being thrown into the fire comes from Jewish midrash (Genesis Rabbah, Targum), so the Qurʾān copied it.",
 tree:N(AF,"Genesis Rabbah and the Targum tell how Nimrod threw Abraham into a furnace: that's the Qurʾān's source.",
  "Look at the dates and the content. Genesis Rabbah's oldest physical manuscript is 12th century (Vatican MS 30), fragments 10th–11th; the Targum Jonathan's oldest manuscripts are 9th–11th century, and Targum Pseudo-Jonathan was compiled after the Islamic conquests. Josephus (Antiquities I.7) and the Palestinian midrashim (Mekhilta, Sifra, Sifre) have no trace of the legend. The content differs too: a furnace in the Jewish texts, a great fire in the Qurʾān; Allah makes the fire cool (21:69), while in the others an angel or God rescues him.",
  "Dating and differences",["Genesis Rabbah 38:13: Nimrod: “Let us bow to fire”; Abraham: “rather to water, which puts out fire… the clouds… the wind… man”; Nimrod throws him into the furnace; Haran, undecided, is burned.","Targum Jonathan to Isaiah 10 mentions it only in passing, like an insertion, alongside Gog and Magog; Pirkei de-Rabbi Eliezer (8th c.) adds more detail, possibly under Islamic influence."],["Qurʾān 21:51–70","Genesis Rabbah 38:13"],
  [N(AF,"Even so, it's just a legend.",
    "Christian authorities themselves treat it as true and grounded in the Bible. Ur in Hebrew can mean fire (Isaiah 44:16; Job 31:12). Jerome on Genesis 11:28: the Hebrews relate that Abraham was thrown into the fire for refusing to worship it and was freed by God's help; on 12:4: “the tradition of the Hebrews is true… Abram, surrounded by the Babylonian fire, was freed by God's help”; on 15:7: “who brought you out of Ur of the Chaldeans, that is, out of the fire of the Chaldeans.” Bede (d. 735), a Doctor of the Church, says the same.",
    "Jerome and Bede",["Jerome, Hebrew Questions on Genesis 11:28; 12:4; 15:7.","Bede on Genesis 11:28 and 15:7: since Ur means fire, Haran was consumed and Abraham saved by the merit of his faith; “I am the Lord who brought you out of the fire of the Chaldeans.”"],["Genesis 11:28; 15:7","Jerome, Quaestiones Hebraicae in Genesim","Bede, In Genesim"])]),
 sum:"The Jewish versions survive in late manuscripts and differ from the Qurʾān; Jerome and Bede accept Abraham's rescue from the Chaldean fire as true (Genesis 15:7)."});
})();
