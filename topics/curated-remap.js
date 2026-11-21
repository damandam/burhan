/* Put every Averroes note into its real topic, and merge duplicates into the existing card. Runs after all other curated files. */
(()=>{
const A1='islam/general/d-av-sonstiges-islam-1/c-', A2='islam/general/d-av-sonstiges-islam-2/c-', A3='islam/general/d-av-sonstiges-islam-3/c-';
const Q='islam/quran', H='islam/hadith', P='islam/prophet', CR='islam/creed', PR='islam/proofs', M='islam/morality',
      MAR=M+'/marriage', AI=MAR+'/aisha', W=M+'/women', WAR=M+'/war', SL=M+'/slavery';
const HR='islam/hadith/d-ia-hadith-refutations/', CRF='islam/hadith/d-ia-contributed-refutations/';
const mv=(k,to)=>cur.move(k,to), mg=(k,into)=>cur.merge(k,into);

/* ── Averroes I ── */
mg(A1+'mondspaltung-poet', Q+'/d-ia-plagiarism-charges-against-the-quran');
mv(A1+'abu-bakr-ra-wassereimer', AI);
mg(A1+'allah-swt-bart-locken', H+'/d-dr-allah-came-in-a-dream-as-a-young-boy');
mv(A1+'mond-gott', CR); mv(A1+'takbir-feuerlo-schen', H); mv(A1+'frauen-held-prophet-saw', P);
mv(A1+'ali-ra-schla-gt-sklaven', SL); mv(A1+'prophet-saw-redet-hinter-ru-cken', P);
mv(A1+'um-qirfa-kamel-tot', WAR); mv(A1+'schwert-und-sperr-kriegsbeute', WAR); mv(A1+'krieg-ist-betrug', WAR);
mv(A1+'frau-trink-urin-vom-propheten-saw', H);
mg(A1+'gru-ne-fleck-frauen-schlagen', W+'/d-dr-quran-4-34-beating-your-wife');
mv(A1+'schwarzefrau-pest', H); mv(A1+'sonne-geht-im-quellen-meer-unter', H); mv(A1+'keine-juden-christen-gru-ßen', H);
mv(A1+'blinder-mann-to-tet-sklaven', H); mv(A1+'frau-soll-mann-niederwerfen', W); mv(A1+'heirat-2-falsche-zeugen-tricksen', MAR);
mv(A1+'sawda-frau-des-propheten-saw', MAR); mv(A1+'nackte-jinn-reiten-auf-prophet-saw', H); mv(A1+'talisman-bo-ser-auge', CR);
mg(A1+'frauen-weniger-intelligenz', H+'/d-dr-women-are-deficient-and-testimony');
mv(A1+'islam-kinder-ho-lle', CR); mv(A1+'abu-bakr-ra-schla-gt-sklaven', SL); mv(A1+'dhul-khaslah-was-passiert-dort', WAR);
mv(A1+'buraria-aisha-ra-unreif', AI); mv(A1+'prophet-saw-begehrte-ein-baby', P); mv(A1+'prophet-saw-hat-geschrieben', P);
mv(A1+'sklaven-to-ten-daif-hadithe', SL); mv(A1+'letzte-stunde-islam-prophezeiung-falsch', PR);
mg(A1+'aisha-ra-alter', AI+'/map'); mg(A1+'sklave-islam-allgemein', SL+'/map'); mv(A1+'sex-sklaven-islam', SL);
mg(A1+'prophet-saw-wurde-verzaubert', P+'/d-ia-bewitched-prophet');
mg(A1+'christen-und-juden-bekommen-su-nden-von-muslime', H+'/d-dr-christians-and-jews-will-take-our-sins');
mg(A1+'chirsten-und-juden-lo-segeld', H+'/d-dr-christians-and-jews-will-take-our-sins');
mv(A1+'aisha-ra-stillt-ma-nner', H); mg(A1+'apostasie', M+'/d-ia-apostasy-law');
mg(A1+'banu-quraiza-geschichte', WAR+'/d-dr-purge-of-banu-qurayza'); mv(A1+'ka-al-ashraf-poet', WAR);
mg(A1+'prophet-saw-9-frauen-ein-tag', H+'/d-dr-prophet-had-relations-with-all-of-his-wives-in-one');
mv(A1+'kurden-jinn', H); mv(A1+'talah-hadith-krieg-feigling-prophet-saw', P);

/* ── Averroes II ── */
mv(A2+'maria-schwester-harun-aaron-imran', Q); mg(A2+'prophet-saw-berg-selbstmord', P+'/d-ia-suicidal-prophet-hadith');
mv(A2+'baby-lebendig-begraben-ho-lle', CR); mv(A2+'aisha-essen-vergleich', AI); mv(A2+'prophet-saw-la-use', P);
mv(A2+'jibril-ließ-in-namen-deines-herrn', Q+'/d-ia-quranic-language'); mv(A2+'qibla-richtung', Q); mv(A2+'ashura-juden', H);
mg(A2+'zaynab-und-zaid', MAR+'/zaynab/map'); mv(A2+'21-ja-hrige-oma', AI); mg(A2+'mehr-ehe', MAR+'/polygyny');
mg(A2+'mehr-frauen-ho-lle', CRF+'t-sahi-h-al-bukha-ri-3241-most-women-in-hellfire');
mv(A2+'bilder-paradies-begehren', H); mv(A2+'wal-ru-cken-erde', Q); mv(A2+'ratte-ibn-kathir', H); mv(A2+'umar-ra-wirft-steine-kinder', H);
mg(A2+'gabriel-erwu-rgen', HR+'t-gabriel-squeezed-muhammad-صلى-الله-عليه-وسلم'); mg(A2+'rassismus', CRF+'t-sahih-al-bukhari-7142');
mv(A2+'zungen-lutschen-ku-ssen', H); mv(A2+'schatten-des-schwertes-paradies', WAR); mv(A2+'allah-swt-sieht-aus-wie-dajal', CR);
mv(A2+'allahs-thron-knirchen', CR); mv(A2+'hasan-darf-beleidigen', P); mv(A2+'prophet-saw-sklaven-verkaufen', SL);
mv(A2+'aisha-sagt-man-darf-kind-schlagen', M); mv(A2+'maria-prophet-saw-frau', H);
mv(A2+'paulus-islamischer-prophet', 'christianity/church/d-ia-paul-related'); mv(A2+'jauniyya-al-kindi-frau', MAR);
mv(A2+'omar-nicht-fragen-wieso-frau-schlagen', W); mg(A2+'juden-vertreiben-halbinsel', H+'/d-dr-expel-ahlul-kitab-from-arabia');
mv(A2+'kaaba-go-tzen', P); mv(A2+'prophet-saw-weiß-nicht-ob-paradies', Q); mv(A2+'sahaba-trinken-urin-brunnen', H);
mg(A2+'satan-urin-ohr', H+'/d-dr-hadiths-on-satan'); mg(A2+'satanische-verse', Q+'/d-ia-satanic-verses');
mv(A2+'zina-mit-mutter-abu-dawud', H); mg(A2+'prophet-saw-ku-sst-thora-und-glaubt-daran', H+'/d-dr-abu-dawud-4449-torah-preserved');
mv(A2+'frau-teufel-vorbeigehen', H); mv(A2+'mann-ku-sst-prophet-saw', H); mv(A2+'jabir-junge-frau-heiraten', MAR);
mg(A2+'frau-hund-aisha', HR+'t-bukhari-514-donkey-woman-dog'); mv(A2+'ketten-ins-paradies-erstaunt', H);
mv(A2+'kamel-urin', H); mv(A2+'kannibalismus-verbot', H); mg(A2+'ummaya-dichter', Q+'/d-ia-plagiarism-charges-against-the-quran');
mv(A2+'engel-verfluchen-frau', W); mg(A2+'moses-sprechender-stein', H+'/d-dr-moses-and-the-rock'); mv(A2+'bru-ste-frei-sklaven', SL);
mv(A2+'ibn-al-qayim-erlaubt-kinder-sklaven-hand-mastrubie', H);
mg(A2+'eva-hat-adam-verraten', HR+'t-eve-betrayal-bukhari-3399-muslim-1470');

/* ── Averroes III ── */
mv(A3+'maria-sex-sklave', MAR); mg(A3+'saffiya-frau-des-propheten', MAR+'/safiyya'); mv(A3+'prophet-saw-tra-gt-aisha-kleidung', H);
mv(A3+'islam-nur-in-minderheit-friedlich', WAR); mv(A3+'kamel-vom-teufel-erschaffen', H); mv(A3+'prophet-saw-schla-gt-aisha-ra', W);
mv(A3+'juden-am-ju-ngsten-tag-to-ten', H); mv(A3+'prophet-saw-verflucht-juden-und-christen', H);
mv(A3+'ibn-ishaq-sagt-johannes-war-ein-augezeuge', 'christianity/cross'); mv(A3+'qurtubi-sagt-gekreuzigt', 'christianity/cross');
mv(A3+'prophet-saw-blut-rein', H); mv(A3+'jude-schwo-ren-kaaba', H);

/* the server-based boxes are now empty */
['islam/general/d-av-sonstiges-islam-1','islam/general/d-av-sonstiges-islam-2','islam/general/d-av-sonstiges-islam-3'].forEach(k=>cur.hide(k));
})();
