/* 2026-11-26 · „Widersprüche“ in Buḫārī und Muslim (Listen-Polemik, Punkte 1, 2, 9, 10, 14) – NEU Ordner islam/hadith/widersprueche-bukhari-muslim mit 4 Karten (ʿAṣr-Gebet, Sulaymāns Frauen, Kahf-Verse, Daǧǧāl-Auge); Omen-Punkt als Zweig an die bestehende Omen-Karte gehängt und in den Ordner gemountet. Quelle: Avereos' eigene Widerlegung, Belege geprüft im OpenITI-Korpus (RELEASE). Auf Deutsch. */
(()=>{
const {cr,N,card,folder,enhance,mount}=window.B;
const AV=cr('Avereos · eigene Widerlegung (Belege im OpenITI-Korpus geprüft)');
const F='islam/hadith/widersprueche-bukhari-muslim';

folder(F,{
  title:"„Widersprüche“ in Buḫārī und Muslim",
  k:"Muḫtalif al-ḥadīṯ · Listen-Polemik",
  blurb:"Die bekannte Liste angeblicher Widersprüche – Punkt für Punkt beantwortet, meist aus denselben Büchern."
});

card(F+'/zwei-rakaa-nach-asr',{
  title:"Zwei Rakʿa nach dem ʿAṣr: Sunna oder verboten?",
  k:"Buḫārī 587–592, 1233 · Muslim 835",
  blurb:"Der „Widerspruch“ wurde dem Propheten ﷺ selbst gestellt – und er hat ihn beantwortet.",
  claim:"ʿĀʾiša sagt, er hat die zwei Rakʿa nach dem ʿAṣr nie ausgelassen; Muʿāwiya und Abū Hurayra sagen, er hat sie verboten. Beides kann nicht stimmen.",
  tree:N(AV,
    "Buḫārī überliefert, dass der Prophet ﷺ nach dem ʿAṣr betete – und dass er es verbot.",
    "Buḫārī erklärt es selbst. Umm Salama hörte das Verbot, sah ihn dann trotzdem nach dem ʿAṣr zwei Rakʿa beten und fragte ihn direkt. Seine Antwort: Eine Delegation von ʿAbd al-Qays hatte ihn von den zwei Rakʿa nach dem Ẓuhr abgehalten – „das sind diese beiden“ (Buḫārī 1233). Danach behielt er sie bei, denn wenn er ein Gebet verrichtete, behielt er es bei (Muslim 835). Und warum hat Muʿāwiya es nie gesehen? ʿĀʾiša sagt selbst: Er betete sie nicht in der Moschee, um es der Gemeinde nicht schwer zu machen (Buḫārī 590). Muʿāwiya berichtet, was man öffentlich sah, ʿĀʾiša, was im Haus geschah. Das Verbot gilt für die Gemeinde; das Nachholen war sein Sonderfall – wie das Durchfasten (wiṣāl), das er tat und anderen verbot. Ein „Widerspruch“, der zu Lebzeiten des Propheten bemerkt, ihm gestellt und von ihm beantwortet wurde – und den Buḫārī mit Frage und Antwort überliefert –, ist keiner.",
    "Anlass, Erklärung und Sonderfall – alles in den Quellen",
    ["01 · Umm Salama: „Ich hörte den Propheten ﷺ es verbieten, dann sah ich ihn sie beten … ‚Leute von ʿAbd al-Qays haben mich von den zwei Rakʿa nach dem Ẓuhr abgehalten, das sind diese beiden.‘“ (Buḫārī 1233, 4370) – سمعت النبي ﷺ ينهى عنها، ثم رأيته يصليهما … فشغلوني عن الركعتين اللتين بعد الظهر فهما هاتان",
     "02 · ʿĀʾiša: „Er betete sie, aber nicht in der Moschee, aus Furcht, es seiner Gemeinde schwer zu machen.“ (Buḫārī 590) – ولا يصليهما في المسجد مخافة أن يثقل على أمته",
     "03 · ʿĀʾiša: „Er war davon abgehalten worden oder hatte sie vergessen, betete sie nach dem ʿAṣr und behielt sie dann bei; wenn er ein Gebet verrichtete, behielt er es bei.“ (Muslim 835)",
     "04 · Das Verbot selbst: Muʿāwiya (Buḫārī 587), Abū Hurayra (Buḫārī 588), Abū Saʿīd (Buḫārī 586).",
     "05 · Stütze (nicht tragend): Umm Salama fragte: „Sollen wir sie nachholen, wenn wir sie verpassen?“ – „Nein.“ aṭ-Ṭaḥāwī folgert daraus den Sonderfall (Šarḥ maʿānī al-āṯār Nr. 1837; Isnād nicht eigens geprüft). Abū Dāwūd 1280 („er betete danach und verbot es“) ist wegen Ibn Isḥāq mit ʿan schwach."],
    ["Ṣaḥīḥ al-Buḫārī 586–592, 1233, 4370","Ṣaḥīḥ Muslim 835","aṭ-Ṭaḥāwī, Šarḥ maʿānī al-āṯār Nr. 1837"]),
  sum:"Das Gebet nach dem ʿAṣr war ein Nachholen mit Anlass und sein Sonderfall – Frage und Antwort stehen in Buḫārī selbst."
});

card(F+'/sulayman-zahl-der-frauen',{
  title:"Sulaymān: 60, 70, 90 oder 100 Frauen?",
  k:"Buḫārī 2819, 3424, 5242, 6639, 6720, 7469 · Fatḥ al-Bārī VI 460",
  blurb:"Buḫārī markiert die Abweichung selbst – und sie liegt bei späteren Überlieferern, nicht beim Propheten ﷺ.",
  claim:"Buḫārī nennt für dieselbe Geschichte vier verschiedene Zahlen – also ist er unzuverlässig.",
  tree:N(AV,
    "Mal 100, mal 90, mal 70, mal 60 Frauen – das ist ein klarer Widerspruch in Buḫārī.",
    "Buḫārī hat es selbst gemerkt. Direkt nach der 70er-Fassung schreibt er: „Šuʿayb und Ibn Abī z-Zinād sagten 90 – und das ist richtiger“ (Buḫārī 3424). Er versteckt nichts, er markiert es und wählt die stärkere Fassung. Und schau, wo die Zahlen abweichen: Alle Fassungen gehen auf Abū Hurayra zurück, aber die Zahlen wechseln innerhalb der Schüler ein und desselben Tābiʿī. Bei al-Aʿraǧ: 70, 90 und „100 oder 99“ (dieser sagt sogar, er ist unsicher). Bei Ṭāwūs: 100 und 90. Bei Ibn Sīrīn: 60 und 100. Hätte der Prophet ﷺ verschiedene Zahlen gesagt, müssten sich die Zahlen nach Gefährten unterscheiden. Sie streuen aber weiter unten in der Kette – also haben spätere Überlieferer eine Nebenzahl unterschiedlich behalten. Der Kern ist in allen Ketten gleich: Sulaymān sagt nicht „in šāʾa llāh“, nur eine Frau gebiert ein halbes Kind, der Prophet ﷺ zieht die Lehre. Genau so sehen echte, unabhängige Zeugen aus: Kern gleich, Nebendetail schwankt. Kein Hadithgelehrter hat je behauptet, jeder Überlieferer behalte jede Zahl wortgenau – Überlieferung dem Sinn nach war immer anerkannt.",
    "Die Zahlen streuen innerhalb der Schülerlinien",
    ["01 · Buḫārīs eigener Vermerk: قال شعيب وابن أبي الزناد: تسعين، وهو أصح – „Šuʿayb und Ibn Abī z-Zinād sagten: 90, und das ist richtiger.“ (Buḫārī 3424)",
     "02 · Linie al-Aʿraǧ: 70 (Muġīra, Buḫārī 3424) · 90 (Šuʿayb, Buḫārī 6639) · „100 oder 99“ mit ausdrücklichem Zweifel (Ǧaʿfar b. Rabīʿa, Buḫārī 2819).",
     "03 · Linie Ṭāwūs: 100 (Maʿmar ← Ibn Ṭāwūs, Buḫārī 5242) · 90 (Hišām b. Ḥuǧayr, Buḫārī 6720).",
     "04 · Linie Ibn Sīrīn: 60 (Ayyūb, Buḫārī 7469) · 100 (Hišām, bei Aḥmad – nach Ibn Ḥaǧar, Fatḥ al-Bārī VI 460).",
     "05 · Sogar dieselbe Kette (ʿAbd ar-Razzāq ← Maʿmar) erscheint mit 100 (Buḫārī 5242) und mit 70 (Buḫārī bei at-Tirmiḏī, al-ʿIlal al-kabīr Nr. 456) – reine Gedächtnisstreuung bei einer Nebenzahl.",
     "06 · Ibn Ḥaǧar listet alle Zahlen auf (فمحصل الروايات ستون وسبعون وتسعون وتسع وتسعون ومائة) und versucht eine Harmonisierung (60 Freie + Sklavinnen usw.) – möglich, aber schwächer; das Argument oben trägt allein."],
    ["Ṣaḥīḥ al-Buḫārī 2819, 3424, 5242, 6639, 6720, 7469","at-Tirmiḏī, al-ʿIlal al-kabīr Nr. 456","Ibn Ḥaǧar, Fatḥ al-Bārī VI 460"]),
  sum:"Buḫārī markiert die Zahlen-Abweichung selbst; sie entsteht bei späteren Überlieferern, der Kern der Geschichte ist überall gleich."
});

card(F+'/kahf-erste-oder-letzte-zehn-verse',{
  title:"Die ersten oder die letzten zehn Verse der Sure al-Kahf?",
  k:"Muslim 809 · Muslim 2937",
  blurb:"Muslim zeigt selbst, welche Fassung die Mehrheit hat – und ein zweiter Gefährte bestätigt sie.",
  claim:"Muslim überliefert „Anfang“ und „Ende“ der Sure al-Kahf als Schutz vor dem Daǧǧāl – welches gilt?",
  tree:N(AV,
    "Mal sollen es die ersten, mal die letzten zehn Verse sein – Muslim widerspricht sich.",
    "Muslim sagt selbst, welche Fassung stärker ist. Drei Schüler Qatādas überliefern es: Hišām sagt „Anfang“, Hammām sagt „Anfang“, nur Šuʿba sagt „Ende“. Muslim schreibt: „Hammām sagte: vom Anfang – so wie Hišām sagte“ (Muslim 809). Also zwei gegen einen. Dazu bestätigt ein ganz anderer Gefährte die Mehrheit: Im langen Daǧǧāl-Hadith des an-Nawwās b. Samʿān sagt der Prophet ﷺ: „Wer ihn erlebt, soll ihm die Anfangsverse der Sure al-Kahf vorlesen“ (Muslim 2937). Die Abweichung kommt also von einem einzigen Überlieferer – nicht vom Propheten, nicht vom Gefährten –, und Mehrheit plus ein zweiter, unabhängiger Gefährte stehen auf der anderen Seite. Selbst die Fassung „Ende“ ergibt Sinn: an-Nawawī erklärt, Anfang und Ende der Sure enthalten beide Schutzinhalte gegen den Daǧǧāl. Und der Kritiker sagt ja selbst: „Muslim hat die Lage selbst erwähnt.“ Genau – Muslim dokumentiert offen, statt zu verstecken.",
    "Zwei gegen einen – und ein zweiter Gefährte",
    ["01 · Muslim 809: قال شعبة: من آخر الكهف، وقال همام: من أول الكهف، كما قال هشام – „Šuʿba sagte: vom Ende; Hammām sagte: vom Anfang – so wie Hišām sagte.“",
     "02 · an-Nawwās b. Samʿān: فمن أدركه منكم فليقرأ عليه فواتح سورة الكهف – „Wer ihn erlebt, soll ihm die Anfangsverse der Sure al-Kahf vorlesen.“ (Muslim 2937)",
     "03 · an-Nawawī: Am Anfang stehen die Wunder (Höhlenleute) – wer sie bedenkt, wird vom Daǧǧāl nicht verführt; ebenso am Ende: „Meinen die Ungläubigen …“ (Q 18:102). (al-Minhāǧ VI 92f.)"],
    ["Ṣaḥīḥ Muslim 809, 2937","an-Nawawī, al-Minhāǧ šarḥ Ṣaḥīḥ Muslim VI 92f."]),
  sum:"„Anfang“ ist die Fassung der Mehrheit und wird durch einen zweiten Gefährten bestätigt; Muslim selbst macht das kenntlich."
});

card(F+'/daddschal-rechtes-oder-linkes-auge',{
  title:"Ist das rechte oder das linke Auge des Daǧǧāl defekt?",
  k:"Buḫārī 3439 · Muslim 169, 2934 · an-Nawawī II 234f.",
  blurb:"Die Texte beschreiben selbst zwei verschiedene Augenschäden – beide Augen sind fehlerhaft.",
  claim:"Ibn ʿUmar sagt, das rechte Auge des Daǧǧāl ist blind; Ḥuḏayfa sagt, das linke. Widerspruch.",
  tree:N(AV,
    "Rechtes Auge bei Ibn ʿUmar, linkes Auge bei Ḥuḏayfa – beides in den Ṣaḥīḥ-Werken.",
    "Das arabische Wort aʿwar heißt nicht nur „einäugig/blind“, sondern allgemein „fehlerhaft, mit einem Makel“. Und die Hadithe beschreiben selbst zwei verschiedene Schäden: Ein Auge ist flach und ausgelöscht, ohne Licht (mamsūḥ, ṭāfiʾa); das andere steht hervor „wie eine schwimmende Weinbeere“ (Buḫārī 3439) bzw. hat „eine dicke Wucherung“ (Muslim, Ḥuḏayfa). Ḥuḏayfa selbst überliefert beide Beschreibungen. Deshalb sagt Qāḍī ʿIyāḍ – und an-Nawawī zitiert ihn und nennt es „äußerst gut“: Beide Augen des Daǧǧāl sind fehlerhaft, das eine durch Verlust, das andere durch einen Makel. Das ist keine spätere Ausrede, es steht in den Texten selbst, denn sie beschreiben ausdrücklich zwei verschiedene Defekte. Wenn zwei Zeugen zwei verschiedene Merkmale an zwei verschiedenen Augen beschreiben, ergibt das das vollständige Bild, keinen Widerspruch. Und der Kern ist in jeder Fassung gleich: einäugig entstellt, „kāfir“ auf der Stirn, und Allah ist nicht einäugig.",
    "Zwei Augen, zwei verschiedene Schäden",
    ["01 · Ibn ʿUmar: rechtes Auge, „als wäre sein Auge eine schwimmende Weinbeere“ (Buḫārī 3439; Muslim 169).",
     "02 · Ḥuḏayfa: الدجال أعور العين اليسرى، جفال الشعر – „Der Daǧǧāl ist am linken Auge aʿwar, mit dichtem Haar.“ (Muslim 2934)",
     "03 · Ḥuḏayfa, Parallelfassung: وإن الدجال ممسوح العين، عليها ظفرة غليظة – „Der Daǧǧāl hat ein ausgelöschtes Auge, darauf eine dicke Wucherung.“ (Muslim, Kitāb al-Fitan)",
     "04 · Qāḍī ʿIyāḍ bei an-Nawawī: وكلا عيني الدجال معيبة عوراء، إحداهما بذهابها والأخرى بعيبها – „Beide Augen des Daǧǧāl sind fehlerhaft: das eine durch Verlust, das andere durch einen Makel.“ an-Nawawī: وهو في نهاية من الحسن (al-Minhāǧ II 234f., zu Muslim 169)."],
    ["Ṣaḥīḥ al-Buḫārī 3439","Ṣaḥīḥ Muslim 169, 2934","an-Nawawī, al-Minhāǧ II 234f. (nach Qāḍī ʿIyāḍ)"]),
  sum:"aʿwar heißt „fehlerhaft“; die Texte beschreiben selbst zwei verschiedene Augenschäden – beide Augen sind betroffen."
});

/* Punkt 14 (Omen): keine Doppelkarte – Zweig an die bestehende Omen-Karte, Karte in den Ordner mounten */
enhance('“Bad omen is in three: house, woman, horse” — ʿĀʾisha & Sharḥ',[
  N(AV,
    "Mehrere Hadithe sagen „kein Omen“, zwei sagen „Omen ist in Frau, Haus und Pferd“ – das widerspricht sich (Listen-Polemik „Widersprüche in Buḫārī und Muslim“, Punkt 14).",
    "Erstens ist falsch gezählt: Vier der sechs Belege sagen dasselbe, nämlich „kein Omen“ – auch der Hadith von den 70.000 steht auf dieser Seite, es sind gerade die, die kein Omen ziehen (Buḫārī 6472). Der Prophet ﷺ nannte das Omen sogar dreimal Schirk (Abū Dāwūd 3910), und als jemand sagte „einige von uns ziehen Omen“, antwortete er: „Das ist nur etwas, das sie in ihrer Brust finden – es soll sie nicht abhalten“ (Muslim 537). Das sind nicht zwei Seiten, sondern eine. Zweitens ist die vollständige Fassung eine Bedingung: „Wenn es in irgendetwas Unheil gäbe, dann im Haus, in der Frau und im Pferd.“ So überliefern es vier Gefährten: Sahl b. Saʿd (Buḫārī 5095; Muslim 2226), Ǧābir (Muslim 2227), Saʿd b. Abī Waqqāṣ (Abū Dāwūd 3921) und Ibn ʿUmar selbst (Buḫārī 5094; Muslim 2225). Bei Ibn ʿUmar beginnt es mit „die Leute erwähnten das Omen beim Propheten ﷺ“ – er antwortete auf ihren Glauben –, und bei Muslim heißt es: „Wenn es vom Unheil etwas Wahres gibt …“. ad-Dāraquṭnī hält diese Ibn-ʿUmar-Wege für sicher (al-ʿIlal 3004). Al-Qāḍī ʿIyāḍ erklärt: Wenn es irgendwo existierte, dann in diesen dreien – es existiert aber nicht in ihnen, also überhaupt nicht. Drittens stammt die stärkste Gegenstelle, „keine Ansteckung, kein Omen – das Omen ist nur in dreien“, von einem einzigen Überlieferer, Yūnus b. Yazīd; das sagt Muslim selbst direkt nach dem Hadith (Muslim 2225), und ad-Dāraquṭnī ebenso. Wo ein anderer Gefährte beides verbindet (Saʿd), steht wieder: „kein Omen, und wenn es Omen in etwas gäbe …“. Viertens wurde ʿĀʾiša zornig, als sie die kurze Fassung hörte: Der Prophet ﷺ habe gesagt, „die Leute der Ǧāhiliyya sagten, das Omen sei in Frau, Haus und Reittier“, und sie rezitierte Q 57:22 (Aḥmad 26088). aṭ-Ṭaḥāwī folgt ihr, weil sie behielt, was andere übersahen. Das passt zum Koran: Omen ziehen dort immer die Gegner der Propheten, und die Antwort lautet „euer Omen ist bei Allah“ (7:131; 27:47; 36:18–19). Niemand fügt ein „wenn“ hinzu, das nicht da war – weggelassen wird es leicht. Nur die Bedingungsform nimmt alle Texte gleichzeitig ernst.",
    "„Wenn es Unheil gäbe …“ – vier Gefährten und ʿĀʾiša",
    ["01 · Kein Omen: Buḫārī 5754; Muslim 2222; Schirk: Abū Dāwūd 3910; die 70.000: Buḫārī 6472; „etwas in ihrer Brust“: Muslim 537.",
     "02 · Ibn ʿUmar: ذكروا الشؤم عند النبي ﷺ فقال: «إن كان الشؤم في شيء ففي الدار والمرأة والفرس» (Buḫārī 5094); Muslim: إن يكن من الشؤم شيء حق ففي الفرس والمرأة والدار (Muslim 2225).",
     "03 · Sahl b. Saʿd (Buḫārī 5095; Muslim 2226); Ǧābir: إن كان في شيء ففي الربع والخادم والفرس (Muslim 2227); Saʿd b. Abī Waqqāṣ (Abū Dāwūd 3921).",
     "04 · Nur Yūnus b. Yazīd verbindet „kein Omen“ und „Omen in dreien“ in einem Satz (Buḫārī 5753/5772): Muslim vermerkt es nach Nr. 2225, ebenso ad-Dāraquṭnī (al-ʿIlal 3004).",
     "05 · ʿĀʾiša: „Die Leute der Ǧāhiliyya sagten …“, mit Q 57:22 (Musnad Aḥmad 26088); aṭ-Ṭaḥāwī gibt ihr den Vorrang (Šarḥ muškil al-āṯār 2/252); ebenso Ibn Qutayba, Taʾwīl muḫtalif al-ḥadīṯ.",
     "06 · Qāḍī ʿIyāḍ bei az-Zurqānī, Šarḥ al-Muwaṭṭaʾ 4/485.",
     "07 · Ehrliche Grenze: Ibn Ḥaǧar und Ibn al-ʿArabī lehnen die reine „Ǧāhiliyya-Zitat“-Lesart ab, weil Ibn ʿUmar den Satz über az-Zuhrī auch ohne „wenn“ überliefert. Die belastbare Formulierung lautet daher: Der Prophet ﷺ hat das Omen nie als eigene Lehre bejaht – der Satz ist Wiedergabe der Ǧāhiliyya-Meinung oder ein Wenn-Satz."],
    ["Ṣaḥīḥ al-Buḫārī 5094, 5095, 5753/5772, 5754, 6472","Ṣaḥīḥ Muslim 537, 2222, 2225–2227","Abū Dāwūd 3910, 3921","Musnad Aḥmad 26088","aṭ-Ṭaḥāwī, Šarḥ muškil al-āṯār 2/252","ad-Dāraquṭnī, al-ʿIlal 3004","az-Zurqānī, Šarḥ al-Muwaṭṭaʾ 4/485","Koran 7:131; 27:47; 36:18–19; 57:22"])
]);
mount('islam/morality/women/bad-omen-in-women-hadith',F,'omen-in-dreien');
})();
