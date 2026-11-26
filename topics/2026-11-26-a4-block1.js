/* Avereos 4 · Block 1 (Index 238–257, 20 Kanäle) – NEU: Neugeborenes spricht (Mubārak al-Yamāma), Abū Ḥanīfa und der Inzest-Vorwurf, aš-Šāfiʿīs alte und neue Lehre, Sonne zwischen den Hörnern Satans, Hitze aus dem Atem der Hölle, „Die Augen sind der Verschluss“, Hāmān, Sulaimān und die Pferde (38:32), Ḥiǧāb-Vers (ʿUmar/Sawda), Zinā vorherbestimmt?, Erbe der Frau, Allahs „Zögern“, „durch Schrecken unterstützt“, die erdrosselte Jüdin, Schafsfett gegen Ischias; ERWEITERT „Islam spread by sword“ (Kurden), „Consummation with prepubescents“ (Tafḫīḏ-Fatwa), „More women in Hell?“ (Muslim 2738), „The Sun’s Course …“ (Niederwerfung der Sonne), „Dust, clay, mud or water …“. Quelle: Discord Avereos 4 (Export 25.11.2026), auf Deutsch. Korrekturen siehe PROGRESS.md. */
(()=>{
const {cr,N,card,enhance}=window.B;
const A4=(ch,id)=>cr({name:'Avereos 4 · #'+ch,url:'https://discord.com/channels/1350795550899048558/'+id});

/* 238 – Kurden-Studie → bestehende Karte */
enhance("Islam spread by sword",[
  N(A4('studie-kurden','1350795550899048558'),
    "Die Kurden wurden mit dem Schwert islamisiert.",
    "Die Studie von Dr. Aḥmad Mīrzā über die Islamisierung der kurdischen Gebiete wertet die frühen Quellen aus (Ibn Saʿd, al-Balāḏurī, ad-Dīnawarī, aṭ-Ṭabarī, Ibn Aʿṯam, al-Masʿūdī, Yāqūt, Ibn al-Aṯīr u. a.). Ihr Ergebnis: Die Kurden hatten keinen eigenen Staat, sie kämpften als Untertanen in sassanidischen und byzantinischen Heeren. Viele Verträge wurden direkt mit der kurdischen Bevölkerung geschlossen. Wer seinen Glauben behalten wollte, zahlte die Ǧizya. Der Islam verbreitete sich danach über Gelehrte, Moscheen, Zuwanderung und Mischehen – nicht durch Zwangsbekehrung.",
    "Eroberung ist nicht Bekehrung",
    ["Wahl zwischen Islam, Vertrag mit Ǧizya oder Krieg – der Vertrag ließ den alten Glauben bestehen (Koran 9:29; 2:256).",
     "Stärkster unabhängiger Beleg: Richard Bulliet (Conversion to Islam in the Medieval Period, 1979) zeigt anhand von Namensdaten, dass Iran erst rund zwei Jahrhunderte nach der Eroberung mehrheitlich muslimisch wurde. Eine Bekehrung mit dem Schwert hätte nicht so lange gedauert.",
     "Ehrlich: Dass das Motiv der Eroberer allein die Mission war, ist eine Wertung der Studie. Belegt ist der Ablauf: Eroberung schnell, Bekehrung langsam und freiwillig."],
    ["Aḥmad Mīrzā, Studie über die Islamisierung der kurdischen Gebiete","al-Balāḏurī, Futūḥ al-Buldān","Richard W. Bulliet, Conversion to Islam in the Medieval Period (1979)","Koran 2:256; 9:29"])
]);

/* 239 – Neugeborenes spricht */
const KB=A4('baby-kind-spricht','1350795582108733520');
card('islam/hadith/prophet/neugeborenes-spricht-mubarak-al-yamama',{
  title:"Das Neugeborene, das sprach: „Mubārak al-Yamāma“",
  k:"al-Bayhaqī, Dalāʾil · Ibn Kaṯīr, al-Bidāya · al-Kudaymī",
  blurb:"Die Geschichte vom Säugling, der den Propheten ﷺ bezeugt, hängt an einem bekannten Fälscher.",
  claim:"Muslime glauben, ein Neugeborenes habe am Tag seiner Geburt gesprochen und Muḥammad als Gesandten bezeugt.",
  tree:N(KB,
    "In den Prophetenwundern steht, ein neugeborenes Kind aus Yamāma habe gesprochen und gesagt: Du bist der Gesandte Allahs.",
    "Der Bericht ist schwach. Sein Hauptweg läuft über Muḥammad ibn Yūnus al-Kudaymī. Ibn Kaṯīr schreibt selbst, dass die Leute wegen genau dieses Berichts über al-Kudaymī gesprochen und ihn angegriffen haben. Al-Bayhaqī sagt: Es gibt andere Wege, aber auch sie sind ġarīb (seltsam, vereinzelt).",
    "Wer erzählt es?",
    ["al-Kudaymī: Ibn ʿAdī beschuldigte ihn, Ḥadīṯe zu erfinden; Ibn Ḥibbān sagte, er habe wohl über tausend Ḥadīṯe gefälscht.",
     "Der Weg über al-ʿAbbās ibn Maḥbūb gilt als „sehr schwach, finster, eine Kette schwacher und unbekannter Leute“; Maslama ibn Qāsim: „schwach, man schreibt seine Ḥadīṯe nicht auf“.",
     "Ein Wunderbericht ohne tragfähige Kette ist kein Glaubensinhalt. Muslime müssen ihn nicht verteidigen."],
    ["Ibn Kaṯīr, al-Bidāya wa-n-Nihāya (Dalāʾil)","al-Bayhaqī, Dalāʾil an-Nubuwwa","Ibn Ḥibbān, al-Maǧrūḥīn (al-Kudaymī)","Ibn ʿAdī, al-Kāmil (al-Kudaymī)"]),
  sum:"Schwach: Hauptweg über den Fälscher al-Kudaymī, Nebenwege ġarīb."
});

/* 240 – Abū Ḥanīfa und Inzest */
const AH=A4('abu-hanifa-erlaubt-inzest','1350863199171383347');
card('islam/morality/marriage/abu-hanifa-inzest-vorwurf',{
  title:"Erlaubte Abū Ḥanīfa die Ehe mit der Mutter oder Schwester?",
  k:"Ibn Ḥazm, al-Muḥallā (Ḥudūd) · al-Marġīnānī, al-Hidāya · Koran 4:23",
  blurb:"Es geht nie um eine Erlaubnis, sondern nur darum, welche Strafe fällig ist.",
  claim:"Abū Ḥanīfa sagte, wer seine Mutter, Tochter oder Schwester heiratet und mit ihr schläft, bekommt keine Ḥadd-Strafe – also erlaubt er Inzest.",
  tree:N(AH,
    "Ibn Ḥazm berichtet: Nach Abū Ḥanīfa gibt es keine Ḥadd-Strafe für den, der eine Maḥram-Verwandte heiratet und mit ihr verkehrt, obwohl er weiß, dass sie ihm verboten ist.",
    "Kein Gelehrter, auch Abū Ḥanīfa nicht, hält diese Ehe für erlaubt – Koran 4:23 verbietet sie ausdrücklich. Abū Ḥanīfa meinte nur: Weil eine Eheschließung stattfand, besteht ein formaler „Zweifel“ (šubha), und nach dem Grundsatz „Ḥadd-Strafen werden durch Zweifel abgewehrt“ fällt die feste Strafe weg. Stattdessen verlangt er eine harte Ermessensstrafe (taʿzīr).",
    "Strafe, nicht Erlaubnis",
    ["Seine eigenen Schüler Abū Yūsuf und Muḥammad aš-Šaybānī widersprachen ihm: Wer es wissentlich tut, bekommt die volle Ḥadd-Strafe (al-Hidāya).",
     "Aḥmad ibn Ḥanbal und Isḥāq ibn Rāhawayh: Wer wissentlich mit einer Maḥram-Verwandten verkehrt, wird getötet – ob verheiratet oder nicht. Ibn Ḥazm geht noch weiter.",
     "Saʿīd ibn al-Musayyib: Steinigung in jedem Fall.",
     "Zum Bericht über den Mann, der die Frau seines Vaters heiratete (Abū Dāwūd 4457), siehe die eigene Karte."],
    ["Koran 4:22–23","Ibn Ḥazm, al-Muḥallā, Kitāb al-Ḥudūd","al-Marġīnānī, al-Hidāya, Kitāb al-Ḥudūd","Abū Dāwūd 4457"]),
  sum:"Alle verbieten die Ehe; strittig war nur Ḥadd oder harte Ermessensstrafe."
});

/* 241 – aš-Šāfiʿī alt/neu */
const SF=A4('shafii-ändert-seine-meinung-wegen-ort','1350867050066743438');
card('islam/general/schafii-alte-und-neue-lehre',{
  title:"Änderte aš-Šāfiʿī seine Lehre, weil er nach Ägypten zog?",
  k:"al-qadīm (Irak) · al-ǧadīd (Ägypten) · an-Nawawī, al-Maǧmūʿ",
  blurb:"Er änderte sie wegen neuer Belege – oft zur strengeren Seite.",
  claim:"aš-Šāfiʿī passte das islamische Recht an den Ort an: im Irak so, in Ägypten anders. Also ist es menschengemacht.",
  tree:N(SF,
    "aš-Šāfiʿī hatte im Irak eine alte und in Ägypten eine neue Rechtsschule. Recht, das sich nach dem Wohnort richtet, ist kein göttliches Recht.",
    "aš-Šāfiʿī hat seine Ansichten überarbeitet, weil er weiter studierte und neue Belege fand. Hätte er sich nur der Umgebung angepasst, wären die neuen Urteile leichter geworden – viele sind aber strenger. Und er wollte nicht, dass man sich weiter auf sein altes Buch beruft. Seine Schüler im Irak blieben nicht bei der alten Lehre; die neue gilt bis heute überall in der Schule.",
    "Neue Belege, nicht neuer Ort",
    ["Wäre die Änderung ortsabhängig, gälte in Ägypten die neue und im Irak die alte Lehre. Tatsächlich gilt die neue überall.",
     "Die Schule hat bei einigen Fragen später sogar die alte Ansicht bevorzugt, weil deren Beleg stärker war (an-Nawawī, al-Maǧmūʿ, Einleitung). Maßstab ist also der Beleg, nicht der Ort.",
     "Ein Gelehrter, der seine Auslegung korrigiert, ändert nicht die Offenbarung. Koran und Sunna blieben dieselben."],
    ["an-Nawawī, al-Maǧmūʿ Šarḥ al-Muhaḏḏab, Muqaddima","aš-Šāfiʿī, al-Umm (neue Lehre)"]),
  sum:"Belegbasierte Korrektur, oft strenger, schulweit gültig – keine Ortsanpassung."
});

/* 242 – Hörner Satans */
const HS=A4('satan-hörner-sonne','1351103307686350910');
card('islam/hadith/science/sonne-zwischen-hoernern-satans',{
  title:"Geht die Sonne „zwischen den Hörnern Satans“ auf?",
  k:"Buḫārī 3272–3273 · Muslim 832 · Ibn Māǧa 1253",
  blurb:"Der Ḥadīṯ nennt seinen Grund selbst: Zu dieser Zeit werfen sich die Sonnenanbeter nieder.",
  claim:"Muḥammad glaubte, Satan habe Hörner, zwischen denen die Sonne physisch aufgeht – Unsinn.",
  tree:N(HS,
    "„Die Sonne geht zwischen den beiden Hörnern Satans auf.“ Das ist primitive Kosmologie.",
    "Der Ausdruck erklärt ein Gebetsverbot. Im langen Ḥadīṯ von ʿAmr ibn ʿAbasa steht der Grund ausdrücklich: Bete nicht beim Sonnenaufgang, „denn sie geht zwischen den Hörnern Satans auf, und zu dieser Zeit werfen sich die Ungläubigen vor ihr nieder“ (Muslim 832). Gemeint ist: Satan stellt sich in die Anbetung der Sonne, die Götzendiener genau dann vollziehen. Muslime sollen ihnen darin nicht ähneln.",
    "Ein Gebetsverbot, keine Astronomie",
    ["„Hörner“ steht im Arabischen für Macht und Anhang (vgl. Ḏū l-Qarnayn).",
     "Die ausführliche Fassung, nach der Satan die Sonne den ganzen Tag begleitet und sich wieder entfernt (Ibn Māǧa 1253, aṣ-Ṣunābiḥī), ist schwach (al-Albānī).",
     "Die authentischen Fassungen (Buḫārī 3272–3273) sagen nur: nicht beim Auf- und Untergang beten."],
    ["Muslim 832","Buḫārī 3272–3273","Ibn Māǧa 1253 (schwach)"]),
  sum:"Muslim 832 nennt den Grund: Sonnenanbeter werfen sich dann nieder – Gebetsverbot, keine Physik."
});

/* 243 – Hitze aus der Hölle */
const HH=A4('hölle-erhitzt-einatmung','1351128475070631967');
card('islam/hadith/science/hitze-aus-dem-atem-der-hoelle',{
  title:"Kommt die Sommerhitze aus dem Atem der Hölle?",
  k:"Buḫārī 533–537 · Muslim 615–617 · Ibn ʿAbd al-Barr, al-Istiḏkār 1/97–98",
  blurb:"Große Gelehrte lasen den Satz von Anfang an als Vergleich – und der Koran nennt die Sonne als Quelle der Hitze.",
  claim:"Der Ḥadīṯ sagt, die Hitze kommt vom Atem der Hölle (fayḥ ǧahannam). Wir wissen heute, dass sie von der Sonne kommt.",
  tree:N(HH,
    "„Verschiebt das Mittagsgebet in die Kühle, denn die starke Hitze ist vom fayḥ der Hölle“ (Buḫārī 533). Das widerspricht der Wissenschaft.",
    "Der Koran selbst nennt die Sonne als Quelle der Hitze: Im Paradies „dürstest du nicht und leidest nicht unter der Sonne“ (20:119), dort „sehen sie weder Sonne noch bittere Kälte“ (76:13). Der Ḥadīṯ ist ein Vergleich, der vor der Mittagshitze warnt – so verstanden ihn klassische Gelehrte lange vor der modernen Physik.",
    "Metapher – schon klassisch",
    ["Ibn ʿAbd al-Barr (gest. 463 h): Die Zuschreibung an die Hölle ist „Metapher, nicht Wirklichkeit“ – wie Araber bei großer Hitze sagen: „Das ist Feuer“ (al-Istiḏkār 1/97–98).",
     "Ibn al-Aṯīr (gest. 606 h): Es ist „im Modus des Vergleichs und Gleichnisses“ gesagt (an-Nihāya 3/484).",
     "al-Ḫaṭṭābī: Die Hitze wird mit der Glut der Hölle verglichen, als Warnung (bei Ibn al-Mulaqqin, at-Tawḍīḥ).",
     "al-Bayḍāwī: Hitze und Kälte der Welt sind eine Erinnerung an das Jenseits.",
     "Ehrlich: Qāḍī ʿIyāḍ hielt die wörtliche Lesart für möglich – aber beide Lesarten sind innerislamisch anerkannt."],
    ["Koran 20:119; 76:13","Buḫārī 533–537; Muslim 615–617","Ibn ʿAbd al-Barr, al-Istiḏkār 1/97–98","Ibn al-Aṯīr, an-Nihāya 3/484","al-Munāwī, Fayḍ al-Qadīr 1/76"]),
  sum:"Koran: Hitze kommt von der Sonne; Ḥadīṯ: klassisch als Vergleich gelesen."
});

/* 244 – Augen als Verschluss */
const AW=A4('anus-auge-hadith-wudu','1351148079880998963');
card('islam/hadith/law/augen-verschluss-wudu',{
  title:"„Die Augen sind der Verschluss des Afters“ – ein echter Ḥadīṯ?",
  k:"Abū Dāwūd 203 · Ibn Māǧa 477 · Aḥmad (Muʿāwiya) · Ibn Abī Ḥātim, ʿIlal",
  blurb:"Die frühen Kritiker Abū Ḥātim und Abū Zurʿa haben ihn selbst als schwach eingestuft.",
  claim:"Muḥammad sagte, die Augen seien der Verschluss des Afters – vulgär und absurd.",
  tree:N(AW,
    "„Die Augen sind der Verschluss (wikāʾ) des Afters; wer schläft, soll die Gebetswaschung erneuern.“",
    "Der Bericht ist schwach. Abū Ḥātim und Abū Zurʿa sagten, die Ḥadīṯe von ʿAlī und Muʿāwiya zu diesem Thema seien nicht stark (Ibn Abī Ḥātim, al-ʿIlal). Abū Dāwūd hat diese Kritik selbst überliefert. Und selbst inhaltlich ist der Satz nur eine Rechtsregel: Wer wach ist, merkt, ob er die Waschung gebrochen hat; wer tief schläft, merkt es nicht.",
    "Schwach – und harmlos",
    ["Ibn ʿAbd al-Barr (al-Istiḏkār) und Ibn al-ʿArabī: schwach, nicht als Beleg geeignet.",
     "Šuʿayb al-Arnaʾūṭ: schwach (Musnad Aḥmad); ebenso ʿAlī Abū Zayd.",
     "Kritisiert wurden ʿAbd ar-Raḥmān ibn ʿĀʾiḏ (al-Azdī) und Yazīd ad-Dālānī (Aḥmad ibn Ḥanbal)."],
    ["Abū Dāwūd 203","Ibn Māǧa 477","Ibn Abī Ḥātim, al-ʿIlal","Ibn ʿAbd al-Barr, al-Istiḏkār"]),
  sum:"Von Abū Ḥātim und Abū Zurʿa als schwach eingestuft; inhaltlich nur eine Waschungsregel."
});

/* 245 – Tafḫīḏ-Fatwa → bestehende Karte */
enhance("Consummation with prepubescents",[
  N(A4('schenkel-verkehr-mit-habd-mastrubieren','1351235312482910268'),
    "Eine Fatwa-Seite zitiert den šāfiʿitischen Gelehrten Zakariyyā al-Anṣārī (al-Ġurar al-Bahiyya), um zu zeigen, dass Gelehrte sexuelle Handlungen mit einer minderjährigen Ehefrau erlauben.",
    "Der zitierte Abschnitt (al-Ġurar al-Bahiyya, S. 170) spricht über die Ehefrau allgemein – im Text steht nichts von einem Kind oder einer Minderjährigen. Die Fatwa-Seite liest ein Kind in den Text hinein. Dafür gibt es weder im Koran noch in der Sunna einen Beleg; es sind höchstens Gelehrtenmeinungen, und die sagen etwas anderes.",
    "Was die Gelehrten wirklich sagen",
    ["Ibn Ḥaǧar: Die Frau wird dem Mann nur übergeben, wenn sie den Verkehr erträgt; sonst nicht.",
     "Ibn Taymiyya (al-Fatāwā al-Kubrā): Die Übergabe richtet sich nach dem Brauch (ʿurf); es gehört nicht zum Brauch, ein Kind zu übergeben – also hat der Ehemann kein Recht darauf.",
     "an-Nawawī (Šarḥ Muslim, zu ʿĀʾiša): Maßstab ist, dass ihr kein Schaden entsteht; Mālik, aš-Šāfiʿī und Abū Ḥanīfa: erst wenn sie es körperlich erträgt.",
     "Ohne Übergabe gibt es auch keinen Zugang zu ihr – die behauptete Handlung ist also nach diesen Gelehrten gar nicht zulässig."],
    ["Zakariyyā al-Anṣārī, al-Ġurar al-Bahiyya fī Šarḥ al-Bahǧa al-Wardiyya, S. 170","Ibn Taymiyya, al-Fatāwā al-Kubrā","an-Nawawī, Šarḥ Ṣaḥīḥ Muslim (Kitāb an-Nikāḥ)"])
]);

/* 246 – Hāmān */
const HM=A4('haman','1351275350776086588');
card('islam/quran/history/haman-am-hof-pharaos',{
  title:"Hāmān am Hof Pharaos: ein Fehler im Koran?",
  k:"Koran 28:6.38; 40:36 · Buch Ester · Ex 7:11; 10:7 · 2 Tim 3:8",
  blurb:"Der Einwand setzt voraus, dass das Buch Ester Geschichte schreibt – katholische Kommentare bezweifeln genau das.",
  claim:"Hāmān ist eine Figur aus dem Buch Ester (Persien, 5. Jh. v. Chr.). Der Koran hat ihn fälschlich an den Hof Pharaos versetzt.",
  tree:N(HM,
    "Der Koran verwechselt Geschichten: Hāmān gehört zu Xerxes und Ester, nicht zu Pharao und Mose.",
    "Der Einwand misst den Koran am Buch Ester. Dessen Geschichtlichkeit wird aber selbst von katholischen Fachkommentaren stark bezweifelt: Sie nennen Ester eine Erzählung mit wenigen historischen Elementen. Außerhalb von Ester gibt es keinen Beleg für einen Haman als Wesir des Xerxes. Ein gleicher Name an zwei Höfen ist kein Fehler – Namen und Titel wiederholen sich.",
    "Der Maßstab ist selbst fraglich",
    ["Die Königin des Xerxes hieß nach Herodot Amestris – nicht Waschti oder Ester (Herodot 7.114; 9.108–113).",
     "Kommentare (Jerome Biblical Commentary, New Interpreter’s Bible) nennen Ester eine „fiktive Geschichte“ bzw. Festlegende zu Purim; manche verbinden Hāmān mit dem elamitischen Gott Humman, Ester mit Ischtar, Mordechai mit Marduk (Encyclopaedia Judaica; Interpreter’s Dictionary of the Bible).",
     "Pharao hatte nach der Bibel selbst Berater und Würdenträger (Ex 7:11; 10:7; 11:3) – nur ohne Namen.",
     "Die Bibel nennt Namen, die im AT fehlen: Paulus nennt Pharaos Zauberer „Jannes und Jambres“ (2 Tim 3:8). Theodoret und Chrysostomus sagen, das stamme aus ungeschriebener jüdischer Überlieferung; Origenes kennt ein apokryphes Buch dazu. Wer dem Koran einen Namen ohne Bibelbeleg vorwirft, müsste dasselbe Paulus vorwerfen."],
    ["Koran 28:6, 28:38; 29:39; 40:24, 40:36–37","Herodot, Historien 7.114; 9.108–113","Exodus 7:11; 10:7; 11:3","2 Timotheus 3:8","Johannes Chrysostomus, Homilie 8 zu 2 Timotheus","Origenes, Matthäus-Kommentar (series 117)"]),
  sum:"Ester ist als Maßstab historisch unsicher; Pharaos Berater und namenlose Personen bekommen auch in der Bibel später Namen."
});

/* 247 – Frauen Minderheit im Paradies → bestehende Karte */
enhance("More women in Hell?",[
  N(A4('frauen-sind-weniger-paradies','1353395056194621580'),
    "„Die Frauen sind die Minderheit unter den Bewohnern des Paradieses“ (Muslim 2738).",
    "Das beschreibt einen Zeitpunkt, nicht das Endergebnis. al-Munāwī: Gemeint ist der Anfang, bevor die sündigen Frauen aus dem Feuer herausgeholt werden; „in diesem Bericht gibt es keinen Beleg, dass die Frauen der Welt im Paradies weniger sind als die Männer“ (Fayḍ al-Qadīr 2/428). Ibn Ḥaǧar hält es für möglich, dass ein Überlieferer den Sinn nach seinem eigenen Verständnis wiedergab: Wenn sie die Mehrheit in der Hölle sind, müssten sie die Minderheit im Paradies sein – was nicht zwingend folgt (Fatḥ al-Bārī 6/325).",
    "Muslim 2738: ein Zeitpunkt",
    ["Viele Gläubige kommen erst nach der Fürsprache aus dem Feuer ins Paradies.","Abū Hurayra und Ibn Sīrīn: Frauen sind im Paradies mehr (Muslim 2834)."],
    ["Muslim 2738","al-Munāwī, Fayḍ al-Qadīr 2/428","Ibn Ḥaǧar, Fatḥ al-Bārī 6/325","Muslim 2834"])
]);

/* 248 – Sulaimān und die Pferde */
const SP=A4('sulaiman-erde-flach-hijab-sonne-verbarg','1353493314954989568');
card('islam/quran/science-errors/sulaiman-pferde-38-32',{
  title:"„Bis sie sich hinter dem Schleier verbarg“ (38:32): Flache Erde?",
  k:"Koran 38:31–33 · aṭ-Ṭanṭāwī · ar-Rāzī",
  blurb:"Das „sie“ sind nach starken Auslegern die Pferde – und der Folgevers bestätigt es.",
  claim:"38:32 sagt, die Sonne verbarg sich hinter einem Schleier (ḥiǧāb) – ein Bild von einer flachen Erde mit einer Sonne, die hinter etwas verschwindet.",
  tree:N(SP,
    "„Ich habe die Liebe zu den Gütern dem Gedenken meines Herrn vorgezogen, bis sie sich hinter dem Schleier verbarg“ (38:32). Die Sonne verschwindet hinter einer Wand.",
    "Die Sonne wird im Vers gar nicht genannt. Erwähnt sind die edlen Pferde (38:31). Viele Ausleger beziehen „sie verbarg sich“ (tawārat) auf die Pferde: Sulaimān musterte sie, bis sie in der Dunkelheit der Nacht aus seinem Blick verschwanden – der „Schleier“ ist die Nacht (aṭ-Ṭanṭāwī; ebenso ar-Rāzī). Der nächste Vers bestätigt das: „Bringt sie mir zurück!“ (38:33) – zurückbringen kann man Pferde, nicht die Sonne.",
    "Gemeint sind die Pferde",
    ["Einwand: tawārat ist Einzahl, Pferde sind viele. Antwort: Im Arabischen werden nicht-menschliche Mehrzahlen regelmäßig mit weiblicher Einzahl verbunden – eine Standardregel.",
     "Selbst wer das „sie“ auf die Sonne bezieht, liest die Sicht Sulaimāns: „Es wurde Nacht“ – so wie wir heute „Sonnenuntergang“ sagen.",
     "Der Vers ist Rede Sulaimāns („da sagte er …“), keine Lehrbeschreibung des Kosmos."],
    ["Koran 38:31–33","aṭ-Ṭanṭāwī, at-Tafsīr al-Wasīṭ zu 38:32","ar-Rāzī, Mafātīḥ al-Ġayb zu 38:32"]),
  sum:"Bezug auf die Pferde (38:31.33), Schleier = Nacht; sonst Beobachtersprache."
});

/* 249 – Niederwerfung der Sonne → bestehende Karte */
enhance("The Sun’s Course & Destination: Phenomenology vs. Geocentrism",[
  N(A4('sonne-wirft-sich-nieder','1353631877122101289'),
    "Abū Ḏarr-Ḥadīṯ: Die Sonne „geht und wirft sich unter dem Thron nieder“ und bittet um Erlaubnis aufzugehen (Buḫārī 3199; 4802). Also kreist sie um eine stillstehende Erde.",
    "Die Niederwerfung (suǧūd) der Schöpfung ist im Koran Unterwerfung unter Gottes Ordnung, keine Körperhaltung: Auch die Schatten werfen sich nieder (13:15; 16:48), ebenso Bäume und Sterne (55:6; 22:18). 22:18 steht im Präsens: Die Sonne wirft sich dauernd nieder. „Unter dem Thron“ ist die Sonne immer, denn der Thron umfasst die ganze Schöpfung. Und „gehen“ (ḏahaba) bezeichnet im Arabischen auch zeitlichen Ablauf – wie Abraham „zu seinem Herrn geht“ (37:99), ohne den Ort zu wechseln.",
    "Unterwerfung, nicht Ortswechsel",
    ["Wenn die Niederwerfung dauernd ist (22:18) und an den Untergang gebunden wird, braucht es einen dauernden Untergang – den gibt es nur auf einer sich drehenden Kugel: Irgendwo geht die Sonne immer unter.",
     "Der Ḥadīṯ verbindet das Thema mit 36:38 „die Sonne läuft zu ihrem festgesetzten Ziel“ – also mit ihrem Ende (Endzeit), nicht mit einer Erdumrundung."],
    ["Buḫārī 3199; 4802","Koran 13:15; 16:48–49; 22:18; 36:38; 37:99; 55:6"])
]);

/* 250 – Ḥiǧāb-Vers */
const HJ=A4('hijab-offenbarungsgrund','1353672564861567027');
card('islam/morality/women/hijab-vers-umar-sawda',{
  title:"Der Ḥiǧāb-Vers: Rief ʿUmar Sawda auf der Toilette nach?",
  k:"Buḫārī 146; 4792; 4795; 6240 · Buḫārī 402; 3689 · Koran 33:53",
  blurb:"Der eigentliche Anlass des Verses war die Hochzeit mit Zaynab – und ʿUmars Wunsch passt zu dem, was der Prophet über ihn sagte.",
  claim:"ʿUmar belästigte Sawda, als sie zur Notdurft hinausging, und der Koran-Vers kam nur, weil ʿUmar ihn wollte. Offenbarung folgt Männerwünschen.",
  tree:N(HJ,
    "Sawda ging nachts hinaus, ʿUmar rief ihr nach: „Wir haben dich erkannt, Sawda!“, weil er den Ḥiǧāb wollte – dann kam der Vers (Buḫārī 146).",
    "Im Bericht steht nicht, dass ʿUmar sie bei der Notdurft ansprach. Sawda war auffallend groß und auf offenem Gelände von weitem erkennbar; ʿUmar saß mit anderen zusammen (Buḫārī 6240: in einer Versammlung). Der Prophet ﷺ lehnte ʿUmars Bitte zunächst ab – weil noch keine Offenbarung gekommen war. Den Anlass des Verses beschreibt Anas, der ihn „am besten kennt“: Gäste blieben nach Zaynabs Hochzeitsessen sitzen und unterhielten sich, der Prophet ging hinaus und kam zurück – da kam 33:53 mit dem „Vorhang“ (Buḫārī 4792).",
    "Der Anlass war Zaynabs Hochzeit",
    ["Der Prophet ﷺ hatte gesagt: „Unter den Völkern vor euch gab es Inspirierte; wenn es unter meinen Gefährten einen gibt, dann ʿUmar“ (Buḫārī 3689). ʿUmar sagte selbst: „Ich stimmte mit meinem Herrn in drei Dingen überein“, darunter der Ḥiǧāb (Buḫārī 402).",
     "Gott weiß vorher, was Menschen sich wünschen; wenn Er ein Bittgebet um Regen erhört, folgt der Regen nicht dem Menschen, sondern Gottes Plan.",
     "Nach dem Ḥiǧāb ging Sawda wieder hinaus; als ʿUmar sie erneut ansprach, kam die Offenbarung: „Euch ist erlaubt, für eure Bedürfnisse hinauszugehen“ (Buḫārī 4795) – gegen ʿUmars Wunsch. Offenbarung folgt also nicht ʿUmar."],
    ["Koran 33:53","Buḫārī 146; 402; 3689; 4792; 4795; 6240","an-Nasāʾī 3252"]),
  sum:"Anlass war Zaynabs Hochzeit (Buḫārī 4792); in 4795 entscheidet die Offenbarung gegen ʿUmar."
});

/* 251 – Zinā vorherbestimmt */
const ZV=A4('ehebruch-vorbestimmt','1353830473142632479');
card('islam/creed/faith/zina-vorherbestimmt',{
  title:"„Allah hat jedem seinen Anteil an Zinā vorgeschrieben“: Kein freier Wille?",
  k:"Buḫārī 6243; 6612 · Muslim 2657 · Spr 16:4 · Röm 9:11–13",
  blurb:"Der Ḥadīṯ endet mit dem Satz, der die Entscheidung beim Menschen lässt.",
  claim:"Nach Buḫārī 6243 ist Ehebruch vorherbestimmt. Dann kann niemand dafür bestraft werden.",
  tree:N(ZV,
    "„Allah hat dem Sohn Adams seinen Anteil an Zinā vorgeschrieben, den er unweigerlich erreicht.“",
    "Gemeint ist die Zinā der Augen (Blick), der Zunge (Rede), der Hände, Füße und des Herzens (Begierde) – kleine Neigungen, die fast jeder Mensch kennt. Dann sagt der Ḥadīṯ: „… und das Geschlechtsteil bestätigt es oder leugnet es“ (Buḫārī 6243; Muslim 2657). Die eigentliche Tat liegt also beim Menschen. Gottes Vorherwissen zwingt niemanden: Wer in die Zukunft sähe und aufschriebe, was jemand freiwillig tut, hätte ihn dadurch nicht gezwungen.",
    "„… bestätigt es oder leugnet es“",
    ["Es geht um Zinā allgemein, nicht speziell um Ehebruch.",
     "Bibel-Gegenprobe: „Der HERR hat alles für seinen Zweck gemacht, auch den Gottlosen für den Tag des Unheils“ (Spr 16:4, masoretischer Text). Paulus: Bevor Jakob und Esau geboren waren und Gutes oder Böses getan hatten, hieß es: „Jakob habe ich geliebt, Esau gehasst“ (Röm 9:11–13)."],
    ["Buḫārī 6243; 6612","Muslim 2657","Sprüche 16:4","Römer 9:11–13"]),
  sum:"Der Ḥadīṯ lässt die Tat offen („bestätigt oder leugnet“); Vorherwissen ist kein Zwang."
});

/* 252 – Woraus wurde der Mensch erschaffen → bestehende Karte */
enhance("Dust, clay, mud or water: what is man created from?",[
  N(A4('aus-was-wurde-der-mensch-erschaffen','1354068634875723827'),
    "Mal Staub, mal Samen, mal „nichts“, mal ein bloßes „Sei!“ – was denn nun?",
    "Das sind vier verschiedene Ebenen derselben Schöpfungslehre: Adam als Urschöpfung aus Staub, Erde, Wasser und Lehm (3:59; 11:61; 15:26); seine Nachkommen durch Fortpflanzung aus Samen und ʿalaq (16:4; 96:2); der Mensch war „zuvor nichts“ – das sagt, dass er nicht ewig existierte (19:67); und hinter allem steht Gottes Befehl „Sei!“ (3:47).",
    "Vier Ebenen, kein Widerspruch",
    ["Material (Adam) – Fortpflanzung (Nachkommen) – Status vor der Schöpfung (nichts) – Ursache (Gottes Befehl)."],
    ["Koran 3:47; 3:59; 11:61; 15:26; 16:4; 19:67; 96:2"])
]);

/* 253 – Erbe der Frau */
const ER=A4('frau-weniger-erbe-islam','1354400625550692433');
card('islam/morality/women/erbe-der-frau-halber-anteil',{
  title:"Erbt die Frau im Islam nur die Hälfte?",
  k:"Koran 4:11–12; 4:4; 4:34 · Num 27:8",
  blurb:"Der Sohn erbt mehr, weil er zahlen muss – die Tochter behält alles für sich.",
  claim:"Im Islam erbt die Tochter nur halb so viel wie der Sohn. Das ist Diskriminierung.",
  tree:N(ER,
    "„Dem Männlichen kommt so viel zu wie der Anteil von zwei Weiblichen“ (4:11).",
    "Die Regel gilt für Sohn und Tochter, weil ihre Pflichten verschieden sind. Der Mann muss Frau und Kinder versorgen (4:34) und die Brautgabe zahlen (4:4). Die Frau bekommt die Brautgabe und behält ihr eigenes Geld und ihr Erbe für sich – sie muss niemanden davon versorgen. Am Ende steht sie finanziell oft besser da als ihr Bruder.",
    "Pflichten und Rechte gehören zusammen",
    ["Nicht immer halb: Vater und Mutter erben neben Kindern je ein Sechstel (4:11); Halbgeschwister mütterlicherseits erben gleich viel, Bruder wie Schwester (4:12).",
     "Bibel-Gegenprobe: Die Tochter erbt nur, wenn kein Sohn da ist (Num 27:8–11)."],
    ["Koran 4:4; 4:11–12; 4:34","Numeri 27:8–11"]),
  sum:"Doppelter Anteil wegen Versorgungspflicht; Eltern und Halbgeschwister erben gleich."
});

/* 254 – Allahs „Zögern“ */
const ZG=A4('allah-swt-zögert-eigenschaft','1354428574920085644');
card('islam/creed/attributes/allah-zoegert-hadith-al-wali',{
  title:"„Ich zögere bei nichts so wie bei der Seele des Gläubigen“: Ist Allah unsicher?",
  k:"Buḫārī 6502 (Ḥadīṯ al-Walī) · Ibn Taymiyya, Maǧmūʿ al-Fatāwā · Ibn ʿUṯaymīn",
  blurb:"Das „Zögern“ kommt aus Mitgefühl, nicht aus Unwissen – der Ḥadīṯ nennt den Grund selbst.",
  claim:"Ein Gott, der zögert, weiß nicht, was er tun soll. Also ist der Gott des Ḥadīṯ nicht allwissend.",
  tree:N(ZG,
    "„Ich zögere bei nichts, was ich tue, so wie ich zögere, die Seele meines gläubigen Dieners zu nehmen“ (Buḫārī 6502).",
    "Der Ḥadīṯ nennt den Grund im selben Satz: „… er hasst den Tod, und ich hasse es, ihm Leid zuzufügen.“ Menschen zögern aus Unwissen über die Folgen oder weil Nutzen und Schaden gemischt sind. Allah zögert nicht aus Unwissen – Er weiß, dass der Tod kommt, und hat ihn bestimmt. Das „Zögern“ beschreibt Seine Zuneigung zum Gläubigen, dem Er Leid ungern zufügt.",
    "Mitgefühl, nicht Unwissen",
    ["Ibn Taymiyya: Manche sagten, Allah dürfe nicht mit Zögern beschrieben werden; die Wahrheit ist, dass die Worte des Gesandten wahr sind – das Zögern Allahs ist nicht wie das der Menschen („nichts ist wie Er“, 42:11).",
     "Ibn ʿUṯaymīn: Man schreibt Allah das Zögern nicht allgemein zu, nur in diesem Fall, wie der Ḥadīṯ es sagt.",
     "Es ist eine handlungsbezogene Eigenschaft, keine Wesenseigenschaft."],
    ["Buḫārī 6502","Koran 42:11","Ibn Taymiyya, Maǧmūʿ al-Fatāwā (Erklärung des Ḥadīṯ al-Walī)","Ibn ʿUṯaymīn, Liqāʾ al-Bāb al-Maftūḥ"]),
  sum:"Grund im Ḥadīṯ selbst: Er hasst es, dem Gläubigen Leid zuzufügen – kein Unwissen."
});

/* 255 – Durch Schrecken unterstützt */
const RB=A4('prophet-saw-durch-furcht-erfolgreich','1354644723536494662');
card('islam/morality/war/nusirtu-bir-rub-durch-schrecken',{
  title:"„Ich wurde durch Schrecken unterstützt“: Ein Terror-Prophet?",
  k:"Buḫārī 335; 2977 · Ex 23:27 · Dtn 2:25 · Jos 2:9–11 · 2 Kön 7:6–7",
  blurb:"Gemeint ist Furcht, die Gott in die Herzen der Feinde legt – oft gerade damit es nicht zum Kampf kommt. Die Bibel kennt dasselbe.",
  claim:"Muḥammad sagte selbst, er sei durch Terror siegreich gewesen.",
  tree:N(RB,
    "„Ich wurde mit umfassender Rede gesandt und durch Schrecken (ruʿb) unterstützt“ (Buḫārī 2977).",
    "Der Ḥadīṯ nennt zuerst die Rede: Der Prophet ﷺ gewann Menschen durch Worte. Der „Schrecken“ ist eine göttliche Furcht in den Herzen der Gegner – Ibn Ḥaǧar: Allah setzte die Feinde in Angst, noch bevor sie ihm begegneten (Fatḥ al-Bārī). Furcht vor einem mächtigen Gegner führt oft zu Frieden oder Kapitulation ohne Kampf. Das ist das Gegenteil von Terror gegen Zivilisten.",
    "Gottgegebene Furcht – auch in der Bibel",
    ["Gott zu Israel: „Meinen Schrecken will ich vor dir hersenden und alle Völker verwirren“ (Ex 23:27); „Heute fange ich an, Furcht und Schrecken vor dir auf alle Völker zu legen“ (Dtn 2:25).",
     "Rahab: „Als wir das hörten, verzagte unser Herz“ (Jos 2:9–11) – doch danach wurden in Jericho alle getötet, auch Kinder (Jos 6:21).",
     "Gott ließ die Aramäer Wagen und Pferde hören, sie flohen ohne Kampf (2 Kön 7:6–7)."],
    ["Buḫārī 335; 2977","Ibn Ḥaǧar, Fatḥ al-Bārī","Exodus 23:27","Deuteronomium 2:25","Josua 2:9–11; 6:21","2 Könige 7:6–7"]),
  sum:"Gottgegebene Furcht beim Gegner, oft statt Kampf – in der Tora ausdrücklich verheißen."
});

/* 256 – Die erdrosselte Jüdin */
const JD=A4('jüdin-beleidigt-den-prophetne-blut-erlaubt','1354858022157025341');
card('islam/hadith/prophet/juedin-erdrosselt-abu-dawud-4362',{
  title:"Die Jüdin, die den Propheten beleidigte und erdrosselt wurde (Abū Dāwūd 4362)",
  k:"Abū Dāwūd 4362 · al-Albānī, Irwāʾ al-Ġalīl 1251 · Buḫārī 6024",
  blurb:"Die Kette ist unterbrochen – und der gesicherte Umgang des Propheten mit beleidigenden Juden sieht anders aus.",
  claim:"Eine Jüdin beleidigte Muḥammad, ein Mann erdrosselte sie, und Muḥammad erklärte ihr Blut für straffrei.",
  tree:N(JD,
    "aš-Šaʿbī von ʿAlī: Eine Jüdin schmähte den Propheten ﷺ, ein Mann erwürgte sie, und er erklärte ihr Blut für ungesühnt (Abū Dāwūd 4362).",
    "Die Kette ist unterbrochen: aš-Šaʿbī hat von ʿAlī nichts gehört außer einem einzigen Satz (ad-Dāraquṭnī, al-ʿIlal; bei Ibn Ḥaǧar, Tahḏīb at-Tahḏīb 5/68). al-Albānī nannte die Kette zwar formal einwandfrei, schwächte den Bericht aber in Ḍaʿīf Abī Dāwūd wegen genau dieser Lücke.",
    "Unterbrochene Kette",
    ["Gesichert ist dagegen: Als Juden den Propheten mit „as-sāmu ʿalaykum“ (Tod über euch) grüßten, antwortete er nur „und über euch“ und tadelte ʿĀʾiša für ihre scharfe Antwort: „Allah liebt Milde in allen Dingen“ (Buḫārī 6024).",
     "Ehrlich: Viele Rechtsgelehrte werten das öffentliche Schmähen des Propheten durch Schutzbefohlene als Vertragsbruch – das ist eine eigene Rechtsfrage, die nicht an diesem Bericht hängt."],
    ["Abū Dāwūd 4362","al-Albānī, Irwāʾ al-Ġalīl 1251; Ḍaʿīf Abī Dāwūd","Ibn Ḥaǧar, Tahḏīb at-Tahḏīb 5/68","Buḫārī 6024"]),
  sum:"Munqaṭiʿ (aš-Šaʿbī–ʿAlī); gesicherte Praxis: Milde gegenüber Schmähung (Buḫārī 6024)."
});

/* 257 – Schafsfett gegen Ischias */
const IS=A4('schwanz-essen-tier','1354892670002270319');
card('islam/hadith/science/schafsfett-gegen-ischias',{
  title:"Fett vom Schafsschwanz gegen Ischias (Ibn Māǧa 3463)",
  k:"Ibn Māǧa 3463 · Ibn Abī Ḥātim, ʿIlal 2264; 2536 · ad-Dāraquṭnī, ʿIlal 2340 · Muslim 2363",
  blurb:"Die frühen Kritiker fanden einen Fehler in der Kette – und weltliche Medizin ist ohnehin keine Offenbarung.",
  claim:"Muḥammad empfahl, geschmolzenes Schwanzfett eines Schafes gegen Ischias zu trinken – Quacksalberei.",
  tree:N(IS,
    "Anas: „Das Heilmittel gegen Ischias ist das Fett vom Schwanz eines Beduinenschafes; man schmilzt es, teilt es in drei Teile und trinkt jeden Tag einen auf nüchternen Magen.“",
    "Die Kette über Anas ibn Mālik ist nach Abū Ḥātim ein Irrtum. Der richtige Weg ist der von Ḥammād ibn Salama: von Anas ibn Sīrīn, von seinem Bruder Maʿbad, von einem namentlich nicht genannten Mann aus den Anṣār (Ibn Abī Ḥātim, al-ʿIlal 2264; ebenso Abū Ḥātim und Abū Zurʿa, Nr. 2536; ad-Dāraquṭnī, al-ʿIlal 2340).",
    "Die Kette und der Maßstab",
    ["Ehrlich: Spätere wie al-Albānī haben den Bericht als authentisch eingestuft – die Frage ist also umstritten.",
     "Selbst wenn er echt ist: Bei weltlichen Dingen sagte der Prophet ﷺ: „Ihr wisst besser über eure weltlichen Angelegenheiten Bescheid“ (Muslim 2363). Ein Hausmittel der Zeit ist kein Glaubensgebot.",
     "Spekulationen über Omega-3-Fettsäuren im Schafsfett sind unbelegt – sie gehören nicht in die Verteidigung."],
    ["Ibn Māǧa 3463","Ibn Abī Ḥātim, al-ʿIlal 2264; 2536","ad-Dāraquṭnī, al-ʿIlal 2340","Muslim 2363"]),
  sum:"Kette bei Abū Ḥātim/ad-Dāraquṭnī fehlerhaft; als Medizin ohnehin weltliche Sache (Muslim 2363)."
});
})();
