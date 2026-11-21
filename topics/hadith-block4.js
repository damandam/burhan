/* Hadith block 4 — 2026-11-20. Cross-server merges, each into ONE card:
   ransom (DR #christians-and-jews-will-take-our-sins + AV #christen-und-juden-bekommen-sünden + AV #chirsten-und-juden-lösegeld),
   Satan in the ear (DR #hadiths-on-satan → icraa article by W. A. Cheema + AV #satan-urin-ohr),
   Mūsā and the stone (DR #moses-and-the-rock → icraa article + AV #moses-sprechender-stein),
   and the three urine reports (AV #frau-trink-urin-vom-propheten-saw, #kamel-urin, #sahaba-trinken-urin-brunnen).
   IA has no channel on these. Scans to capture: #frau-trink-urin (Abū Uways al-Kurdī page), #moses-sprechender-stein (mawqūf scan,
   2 PDFs “Der fliehende Stein”), #kamel-urin (“Belegmappe” PDF + 1 img). */
(()=>{
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const DR=(n,id,extra)=>({credit:'Deenresponds · #'+n+(extra?' · '+extra:''),link:'https://discord.com/channels/1328402309297733662/'+id});
const H='islam/hadith/', A1='islam/general/d-av-sonstiges-islam-1/c-', A2='islam/general/d-av-sonstiges-islam-2/c-';
const folded=/c-(chirsten-und-juden-lo-segeld|christen-und-juden-bekommen-su-nden-von-muslime|satan-urin-ohr|moses-sprechender-stein)$/;
window.MOVES=(window.MOVES||[]).filter(op=>!(op.type==='merge'&&folded.test(op.from)));
['chirsten-und-juden-lo-segeld','christen-und-juden-bekommen-su-nden-von-muslime'].forEach(k=>cur.hide(A1+k));
['satan-urin-ohr','moses-sprechender-stein'].forEach(k=>cur.hide(A2+k));

/* ───────── “Your ransom from the Fire” (Muslim 2767) ───────── */
const RD=DR('christians-and-jews-will-take-our-sins','1357648099039772733','video https://youtu.be/lZdl0ym3Cas'),
      RA=AV('christen-und-juden-bekommen-sünden-von-muslime','1275937904929144945'), RB=AV('chirsten-und-juden-lösegeld','1275938162492964874');
card(H+'d-dr-christians-and-jews-will-take-our-sins',{title:"Will Jews and Christians bear Muslims' sins? (Muslim 2767)",k:"Muslim 2767 · 6:164",blurb:"“Your ransom from the Fire”: what it means, and the one wording that's rejected.",
 claim:"Muslim 2767 says Allah gives every Muslim a Jew or Christian as ransom from Hell, and even puts Muslims' mountain-sized sins on them. That's as unjust as anything Muslims say about Jesus taking sins.",
 tree:{they:"“On the Day of Resurrection Allah will hand every Muslim a Jew or a Christian and say: This is your ransom from the Fire” (Muslim 2767). Innocent people punished for Muslims' sins.",
  we:"Nobody is punished for anyone else's sin: “no bearer of burdens bears the burden of another” (6:164). Every person has a place prepared in Paradise and a place in Hell. The disbeliever enters Hell for his own disbelief and takes his own place there, while the believer's place in Hell stays empty. In that sense the disbeliever is his “ransom”: the believer inherits the other's place in Paradise.",
  more:Object.assign({h:"Two houses for everyone",p:[
   "Abū Hurayra: “There is none of you except that he has two houses, a house in Paradise and a house in the Fire. If he dies and enters the Fire, the people of Paradise inherit his house” (Ibn Mājah 4341; Ibn Kathīr on 23:10–11, “They are the inheritors…”, Tafsīr 5/465).",
   "Mujāhid: every servant has two houses; the believer builds his house in Paradise and his house in the Fire is torn down, the disbeliever the reverse. The believers inherit the disbelievers' houses because all were created to worship Allah; the believers did and the disbelievers didn't.",
   "No one enters Paradise without being shown the place he would have had in the Fire, to be more grateful, and vice versa (Bukhārī 6569).",
   "Al-Bayhaqī: “The believer enters Paradise after seeing his place in Hell… the disbeliever enters Hell after seeing his place in Paradise… It is as if the disbeliever inherits the believer's place in Hell and the believer the disbeliever's place in Paradise; in meaning, the believer has been ransomed by the disbeliever” (al-Baʿth wa al-Nushūr 85).",
   "Al-Nawawī: “Everyone has a place in Paradise and a place in Hell. When the believer enters Paradise, the disbeliever remains in Hell because of his disbelief and sins, and so becomes in meaning a ransom for the Muslims” (Sharḥ Muslim 17/85). And: Allah fixed a number to fill Hell; when the disbelievers enter it for their own sins and disbelief, they are in meaning your release (Riyāḍ al-Ṣāliḥīn p. 534)."],src:["Muslim 2767","Bukhārī 6569","Ibn Mājah 4341","Qurʾān 6:164; 23:10–11","al-Bayhaqī, al-Baʿth wa al-Nushūr 85","al-Nawawī, Sharḥ Muslim 17/85","Ibn Kathīr, Tafsīr 5/465"]},RD),
  next:[
   {they:"But one version says Muslims come with sins like mountains and Allah puts them on the Jews and Christians.",
    we:"That wording (Ghaylān ibn Jarīr → Abū Burda, via Shaddād Abū Ṭalḥa) is the one the ḥadīth scholars reject. More than eight narrators took the ḥadīth from Abū Burda without it; the narrator who added it had doubts about his own wording; and it contradicts the Qurʾān.",
    more:Object.assign({h:"Why the “mountains of sins” wording is rejected",p:[
     "Saʿīd ibn Abī Burda told the ḥadīth to ʿUmar ibn ʿAbd al-ʿAzīz, who made him swear three times that his father narrated it from the Prophet ﷺ. Another wording: “No Muslim dies except that Allah puts a Jew or Christian into the Fire in his place.” More than eight narrators took it from Abū Burda (Aḥmad 4/391; ʿAbd ibn Ḥumayd 537, 540; Ibn Mājah 4291).",
     "Only Ghaylān ibn Jarīr's version has: “Some Muslims will come with sins like mountains; Allah will forgive them and place them on the Jews and Christians.”",
     "Al-Bayhaqī: “The wording narrated only by Shaddād Abū Ṭalḥa, ‘and places them on the Jews and Christians’, with the narrator's doubt in it, I don't consider preserved. The disbeliever is not punished for another's sins: ‘no bearer of burdens bears another's burden’” (al-Baʿth wa al-Nushūr 86).",
     "Ibn Ḥajar: the ḥadīth in the chapter on the reckoning indicates that Ghaylān ibn Jarīr's version in Muslim is weak, then he quotes al-Bayhaqī (Fatḥ al-Bārī 11/398).",
     "Al-Albānī: all narrators have it without the addition, which is unacceptable because (1) the narrator doubted it (Shaddād or Ḥaramī ibn ʿUmāra; Ḥaramī said “I don't know who had the doubt”, so it was Shaddād, whose memory was criticised: al-Dhahabī lists him among the weak, al-ʿUqaylī says his ḥadīth aren't supported, Ibn Ḥajar: “trustworthy but makes mistakes”, and this is his only ḥadīth in Muslim); (2) he is alone in it; (3) it contradicts the Qurʾān (al-Silsila al-Ḍaʿīfa 1316, 5399).",
     "The Permanent Fatwa Committee likewise: the narrator doubted this sentence, so it can't be relied on.",
     "Another chain reported by al-Ṭabarānī (Majmaʿ al-Zawāʾid 10/343) has ʿUthmān ibn Maṭar, whose weakness is agreed upon (al-Haythamī)."],src:["al-Bayhaqī, al-Baʿth wa al-Nushūr 86","Fatḥ al-Bārī 11/398","al-Albānī, al-Ḍaʿīfa 1316, 5399","Majmaʿ al-Zawāʾid 10/343"]},RA),
    next:[
     {they:"Even so, some scholars accepted it. How do they explain it?",
      we:"Even those who explain it never say a disbeliever is punished for a Muslim's sin. Al-Nawawī: Allah forgives the Muslims' sins, and the disbelievers are punished for their own sins, which remain. Ibn Ḥajar prefers: the sins forgiven to Muslims were ones the disbelievers had initiated and led them into, so they carry the weight of having caused them.",
      more:Object.assign({h:"The scholars who reconciled it",p:[
       "Al-Nawawī: Allah forgives the Muslims their sins, and once forgiven, “places them” on the Jews and Christians because of their disbelief: they are punished for their own sins, not the Muslims'. It means they carry what corresponds to them, since the Muslims' sins were forgiven and the disbelievers' remain.",
       "Ibn Ḥajar: “Another possibility is that the sins forgiven to the Muslims were caused by the Jews and Christians who started them. When the Muslims are forgiven, the sins of the Jews and Christians who committed them remain. This possibility is stronger” (Fatḥ al-Bārī 11/398). Compare: whoever starts an evil practice bears its burden and the burden of those who follow it (Muslim 1017).",
       "Al-Bayhaqī also reconciles the ransom ḥadīth with the intercession ḥadīth: the ransom may concern those whose sins were expiated in this life, or it is said after the intercession, so there is no contradiction (al-Baʿth 85)."],src:["Fatḥ al-Bārī 11/398","Muslim 1017","al-Bayhaqī, al-Baʿth wa al-Nushūr 85"]},RB),next:[]}]}]},
 sum:"“Ransom” means the disbeliever takes his own place in Hell while the believer's stays empty; the “sins like mountains on the Jews and Christians” wording is rejected by al-Bayhaqī, Ibn Ḥajar and al-Albānī."});

/* ───────── “Satan urinated in his ear” ───────── */
const SD=DR('hadiths-on-satan','1357491360277729361','article: W. A. Cheema, icraa.org “Understanding Satan urinates in the ear hadith”'), SA=AV('satan-urin-ohr','1282352504113332296');
card(H+'d-dr-hadiths-on-satan',{title:"“Satan urinated in his ear”",k:"Bukhārī 1144 · 3270",blurb:"An Arabic idiom for being overpowered and spoiled, not a literal act.",
 claim:"The Prophet ﷺ said Satan urinates in the ears of people who oversleep. That's absurd superstition.",
 tree:{they:"A man was mentioned who slept until morning without praying. He said: “That is a man in whose ear(s) Satan urinated” (Bukhārī 1144, 3270). Superstition.",
  we:"It's an Arabic idiom, and the commentators say so explicitly. Ibn Ḥajar: “It is an example used for someone negligent of his prayers because of heavy sleep, as if his ear were filled with urine until he is weighed down and his senses spoiled. The Arabs used urination as a metaphor for corruption.”",
  more:Object.assign({h:"What the commentators said",p:[
   "Ibn Ḥajar (d. 852): the quote above (Fatḥ al-Bārī 3/28–29).",
   "Al-Nawawī (d. 676): its meaning is mockery, ridicule and belittling. It is said of someone who despises and fools a person that he urinated in his ear; the origin is an animal urinating in a sleeping lion's ear to humiliate it. Al-Ḥarbī: it means Satan overpowered and ridiculed him (Sharḥ Muslim 6/64).",
   "Al-Ṭaḥāwī (d. 321): the sleep meant is one in which a person misses his obligation to Allah at night, and also sleeping before ʿIshāʾ, which the Prophet ﷺ disliked because it leads to neglecting it. A screen is placed over his ears because of this sleep; the Arabs called such a thing a covering over the ears, as Allah says of the People of the Cave: “We put a covering over their ears in the cave for a number of years” (18:11). The act is attributed to Satan because it pleases him; “urinating” means it is worse than ordinary sleep. “It is not urination in the ear in the literal sense; it is by way of simile and allusion” (Sharḥ Mushkil al-Āthār 10/193–194).",
   "Ibn Masʿūd: he was asked about a man who slept from the beginning of the night to its end. He said: “That is the one in whose ear Satan urinated” (al-Ṭaḥāwī, Sharḥ Mushkil al-Āthār 10, no. 4020)."],src:["Bukhārī 1144, 3270","Fatḥ al-Bārī 3/28–29","al-Nawawī, Sharḥ Muslim 6/64","al-Ṭaḥāwī, Sharḥ Mushkil al-Āthār 10/193–194, no. 4020","Qurʾān 18:11"]},SD),
  next:[
   {they:"Why Satan, and why the ear?",
    we:"Everything attributed to Satan in the ḥadīth, like yawning, works the same way: it happens by his pleasure and will, or through his whispering that makes something attractive. And the ears stand for hearing and coming to one's senses, which is exactly what deep sleep cuts off.",
    more:Object.assign({h:"The same metaphor elsewhere",p:[
     "Ibn Baṭṭāl (d. 449), on yawning being from Satan: “The same holds for all acts attributed to Satan; they have two meanings: either they arise from his pleasure and will, or from whispering into the heart so that something is made attractive” (Sharḥ Ṣaḥīḥ al-Bukhārī 9/370).",
     "Satan wants a person to sleep long hours, grow tired, neglect his duties to Allah and people, and miss the obligatory prayers. Once a person gives in, he becomes an easy target.",
     "Ears represent hearing and the ability to come to reason; their link to deep sleep and being cut off from the world is obvious, as in 18:11.",
     "Arabs use urine for spoiling a thing: the proverb “Canopus urinated in the date-wine and it went bad” (bāla Suhaylun fī al-faḍīkh fa-fasad) means the season changed and spoiled it (Lane, Lexicon 1/276–277). Ibn Baṭṭāl cites a verse of al-Farazdaq linking urine with corruption (Sharḥ 3/136)."],src:["Ibn Baṭṭāl, Sharḥ Ṣaḥīḥ al-Bukhārī 9/370; 3/136","Lane, Arabic-English Lexicon 1/276–277"]},SA),next:[]}]},
 sum:"“Satan urinated in his ear” is an Arabic idiom for someone overpowered and spoiled by heavy sleep that made him miss prayer; Ibn Ḥajar, al-Nawawī and al-Ṭaḥāwī all say it is metaphor."});

/* ───────── Mūsā and the stone ───────── */
const MD=DR('moses-and-the-rock','1357711383285858364','article: W. A. Cheema, icraa.org “Moses and the stone: vindication and divine wisdom”'), MA=AV('moses-sprechender-stein','1289901959930839050');
card(H+'d-dr-moses-and-the-rock',{title:"Mūsā and the stone that ran off with his clothes",k:"Bukhārī 3404 · 33:69",blurb:"The ḥadīth explains a Qurʾān verse; no one saw his private parts.",
 claim:"Bukhārī says a stone ran off with Mūsā's clothes and he chased it naked in front of the Israelites. That's absurd and shameful for a prophet.",
 tree:{they:"Mūsā bathed alone; a stone ran away with his clothes and he ran after it naked, so the Israelites saw him (Bukhārī 278, 3404; Muslim 339). A ridiculous story.",
  we:"The ḥadīth is the Prophet's ﷺ explanation of a Qurʾān verse: “O you who believe, don't be like those who harmed Mūsā; Allah cleared him of what they said” (33:69). The Israelites, who bathed naked together, accused Mūsā of a bodily defect because he always bathed alone, out of modesty. Allah cleared him publicly.",
  more:Object.assign({h:"The context",p:[
   "The narration ends with 33:69 (Bukhārī 3404; also via Hammām ibn Munabbih, Bukhārī 278, Muslim 339). The exegetes tie the verse to this account: al-Samʿānī 4/309, al-Qurṭubī 14/251, Ibn Juzayy 2/160, Ibn Kathīr 6/485.",
   "The Israelites bathed naked in front of each other (al-Nawawī, al-Minhāj 4/32–33; Ibn Ḥajar, Fatḥ al-Bārī 1/386). Mūsā bathed alone and didn't undress until he was in the water: his modesty went against the custom of his people.",
   "Ibn Rajab: “Allah does not decree for His Prophet anything that is not permissible in His law” (Fatḥ al-Bārī 1/330).",
   "Prophets are created in the best form, so Allah showed a sceptical people that he had no defect (Qāḍī ʿIyāḍ, Ikmāl al-Muʿlim 7/349; Ibn Ḥajar 6/437–438; Muftī Shafīʿ, Maʿārif al-Qurʾān 7/240). Their words, “By Allah, Mūsā has no defect”, show the purpose was achieved.",
   "Harming Mūsā was a pattern: compare 61:5, 2:55, 2:61, 2:67, 5:24 and Exodus 14:11–12; 16:2–3."],src:["Bukhārī 278, 3404","Muslim 339","Qurʾān 33:69; 61:5","Ibn Rajab, Fatḥ al-Bārī 1/330","Ibn Ḥajar, Fatḥ al-Bārī 1/386; 6/437–438"]},MD),
  next:[
   {they:"So the Israelites saw a prophet's private parts.",
    we:"The ḥadīth doesn't say that. Ibn Ḥazm: “It isn't in this ḥadīth that the Israelites saw his private part. They saw him in a state that made clear he was free of the defect they accused him of, which any onlooker can see without seeing the private part, just from the area between his thighs being free.”",
    more:Object.assign({h:"Ibn Ḥazm",p:["Ibn Ḥazm, al-Muḥallā 3/213 (masʾala 349): the quote above.","Nor does the narration say he bathed completely naked; Ibn Ḥazm's statement indicates his ʿawra was covered by a waist-cloth and only the rest of his body was uncovered. So the mockery of the ḥadīth deniers has no basis.","Men also bathe together today, after training or swimming; the Israelites were permitted to bathe together."],src:["Ibn Ḥazm, al-Muḥallā 3/213"]},MA),
    next:[
     {they:"A prophet running after a stone and beating it is undignified.",
      we:"It was a spontaneous human reaction, like Mūsā throwing down the tablets and seizing Hārūn in anger (7:150; 20:94; Exodus 32:19). He didn't know in that moment that Allah was using the event to clear his name.",
      more:Object.assign({h:"Mūsā's reaction",p:["Ibn Hubayra, al-Ifṣāḥ 7/210: Mūsā's spontaneous reaction.","The marks on the stone (Aḥmad 8301; al-Thaʿlabī 1/204) may be folklore Abū Hurayra heard in al-Shām, as Ibn Ḥajar indicates (Fatḥ al-Bārī 6/437). The channel also has a scan arguing that part is mawqūf (on Abū Hurayra), checked via Ibn Sīrīn's narration (to capture)."],src:["Qurʾān 7:150; 20:94","Exodus 32:19","Musnad Aḥmad 8301"]},MD),
      next:[
       {they:"A stone running away is a fairy tale.",
        we:"For a Christian, the Bible is full of stones and nature acting: a stone that “heard all the words of the LORD” and witnesses (Joshua 24:27), stones that would cry out (Luke 19:40), a stone crying out from the wall (Habakkuk 2:11), trees clapping (Isaiah 55:12), a talking altar addressed by the prophet (1 Kings 13:2). Paul even has a rock that followed the Israelites (1 Corinthians 10:4).",
        more:Object.assign({h:"Turn the tables: the Bible's moving and speaking stones",p:[
         "Joshua 24:27: “This stone shall be a witness against us, for it has heard all the words of the LORD.”",
         "Judges 9:8–15: the trees go out to anoint a king and speak with the olive, the fig, the vine and the bramble.",
         "Habakkuk 2:11; Luke 19:40; Isaiah 55:12; 44:23; Psalm 96:12; 98:8; Jeremiah 12:4; Isaiah 14:8.",
         "1 Corinthians 10:4: “they drank from the spiritual rock that followed them, and the rock was Christ.” The Torah (Exodus 17:6; Numbers 20:11) never says the rock moved; the wandering rock comes from later rabbinic tradition: Talmud Taʿanit 9a (“the well… was a rock shaped like a beehive and it travelled with them”) and Midrash Bamidbar Rabbah 1:2 (“the rock rolled and followed Israel through the desert”).",
         "A miracle by Allah's will isn't a fairy tale for anyone who believes in a God who acts."],src:["Joshua 24:27","Luke 19:40","1 Corinthians 10:4","Talmud Taʿanit 9a","Bamidbar Rabbah 1:2"]},MA),next:[]}]}]}]},
 sum:"The ḥadīth explains 33:69: Allah cleared the modest Mūsā of a slander; no one saw his ʿawra (Ibn Ḥazm), and the Bible itself has stones that hear, cry out and follow Israel."});

/* ───────── A woman drank the Prophet's ﷺ urine ───────── */
const WU=AV('frau-trink-urin-vom-propheten-saw','1275853644130025523');
card(A1+'frau-trink-urin-vom-propheten-saw',{title:"Did a woman drink the Prophet's ﷺ urine?",k:"Barakah · Umm Ayman",blurb:"Both reports are weak: an unknown narrator and a broken, contradictory chain.",
 claim:"Reports say Barakah or Umm Ayman drank the Prophet's ﷺ urine and he praised it, so Muslims treat even his urine as holy.",
 tree:{they:"Ḥakīma bint Umayma from her mother: the Prophet ﷺ urinated in a wooden bowl under his bed; Barakah, Umm Ḥabība's servant, drank it, and he said “You have protected yourself from the Fire with a strong wall.” Umm Ayman reports the same and was told she'd never have stomach pain again.",
  we:"Neither report is authentic. The Barakah report rests on Ḥakīma bint Umayma, whom al-Dhahabī and Ibn Ḥajar call unknown; the Umm Ayman report has a broken chain whose narrator al-Dāraquṭnī calls weak and the source of its contradictions.",
  more:Object.assign({h:"The Barakah report (Ḥakīma bint Umayma)",p:[
   "Only Ibn Jurayj narrates from Ḥakīma, and she is known only through this ḥadīth.",
   "Ibn Ḥajar: Ḥakīma is unknown (al-Taqrīb 2/636). Al-Dhahabī: not known, only Ibn Jurayj narrates from her (Mīzān al-Iʿtidāl). Ibn al-Qaṭṭān didn't confirm her reliability. Ibn Ḥibbān listing her in al-Thiqāt isn't enough, given his known practice of listing unknown narrators as reliable.",
   "ʿAbd al-ʿAzīz al-Rājiḥī and ʿAdnān al-ʿArʿūr grade it weak for this reason; Ḥilmī ibn Saʿd al-Manūfī concluded the same (7 Rajab 1444).",
   "Abū Dāwūd 24, which only mentions the bowl itself (for urinating at night), is graded weak by al-Arnaʾūṭ. If even that is weak, how can the drinking report be authentic?"],src:["Abū Dāwūd 24","Ibn Ḥajar, Taqrīb 2/636","al-Dhahabī, Mīzān al-Iʿtidāl"]},WU),
  next:[
   {they:"The Umm Ayman report is a second, independent chain.",
    we:"It is broken and contradictory. Ibn Kathīr gives it with “al-Ḥusayn ibn Ḥarb”, Ibn ʿAsākir with “al-Ḥusayn ibn Ḥurayth”; and the narrator is from Ibn Ḥajar's tenth class while the man he quotes, Yaʿlā ibn ʿAṭāʾ, is from the fourth. They never met.",
    more:Object.assign({h:"The Umm Ayman report",p:[
     "Al-Bidāya wa al-Nihāya 5/347 vs Tārīkh Dimashq 4/303: the chain has “Ḥusayn ibn Ḥarb” in one and “Ḥusayn ibn Ḥurayth” in the other. That inconsistency shows something is off.",
     "Ibn Ḥajar puts Ḥusayn ibn Ḥurayth in the tenth class (al-Taqrīb 1319) and Yaʿlā ibn ʿAṭāʾ in the fourth, the Tābiʿūn (al-Taqrīb 2/341). The classes are about who met whom, not biology: these two are not consecutive, so the chain is cut.",
     "Abū Yaʿlā's version (al-Maṭālib al-ʿĀliya 3823): Salm ibn Qutayba → al-Ḥasan ibn Ḥarb → Yaʿlā ibn ʿAṭāʾ → al-Walīd ibn ʿAbd al-Raḥmān → Umm Ayman. Al-Dāraquṭnī doesn't even mention this chain in al-ʿIlal (4106); he says: Abū Mālik al-Nakhaʿī narrated it from Yaʿlā… and sometimes from al-Aswad ibn Qays → Nubayḥ al-ʿAnazī → Umm Ayman. “Abū Mālik is weak, and the contradictions come from him.” In al-Gharāʾib: only Abū Mālik narrated it from al-Aswad.",
     "Ḥilmī ibn Saʿd al-Manūfī concluded it is weak (29 January 2023).",
     "And the Prophet ﷺ disliked urine and washed himself after relieving himself (istinjāʾ), unlike his saliva and sweat, which Companions sought for blessing."],src:["Ibn Kathīr, al-Bidāya 5/347","Ibn ʿAsākir, Tārīkh Dimashq 4/303","Ibn Ḥajar, Taqrīb 1319; 2/341","al-Dāraquṭnī, al-ʿIlal 4106","al-Maṭālib al-ʿĀliya 3823"]},WU),next:[]}]},
 sum:"The Barakah report rests on an unknown narrator (Ḥakīma), the Umm Ayman report on a broken chain blamed on the weak Abū Mālik al-Nakhaʿī; neither is authentic."});

/* ───────── Camel urine (the ʿUrayna story) ───────── */
const CU=AV('kamel-urin','1282758050029109320');
card(A2+'kamel-urin',{title:"Did the Prophet ﷺ prescribe camel urine?",k:"Bukhārī 1501 · Muslim 1671",blurb:"“And its urine” is Qatāda's insertion; the cure was the milk.",
 claim:"The Prophet ﷺ told people to drink camel urine as medicine. Disgusting and unscientific.",
 tree:{they:"People of ʿUkl and ʿUrayna fell ill in Medina; he told them to go to the charity camels and drink their milk and urine (Bukhārī 1501; Muslim 1671).",
  we:"The words “and its urine” are not part of the Prophet's ﷺ original statement: they are an insertion (idrāj) by Qatāda that Ḥumayd didn't separate from the ḥadīth. Al-Khaṭīb al-Baghdādī and al-Zarkashī give it as an example of idrāj, and Aḥmad and al-Nasāʾī have chains without the urine at all.",
  more:Object.assign({h:"Idrāj: an insertion into the ḥadīth",p:[
   "The addition “and their urine” is Qatāda's, not the Prophet's ﷺ; Ḥumayd's way of narrating caused confusion because he didn't always separate it clearly.",
   "Al-Khaṭīb al-Baghdādī and al-Zarkashī identify it as idrāj (an insertion into the ḥadīth). Dr. Māhir Yāsīn al-Faḥl (ḥadīth professor, University of Anbar) discusses it (shamela.ws/book/1768/157).",
   "Aḥmad ibn Ḥanbal and al-Nasāʾī have versions without “and its urine”, and Muslim 1671a with about five other chains says only “If you wish…”.",
   "In Bukhārī 1501 the wording is that he allowed them (they asked) to go out to the charity camels and drink their milk and urine."],src:["Bukhārī 1501","Muslim 1671a","al-Khaṭīb al-Baghdādī; al-Zarkashī (on idrāj)"]},CU),
  next:[
   {they:"Camels were obviously used for their urine.",
    we:"The ḥadīth show the opposite: camels were valued for their milk. Even a man in need is told to drink a camel's milk, not its urine, and the early scholars disliked camel urine.",
    more:Object.assign({h:"Milk, not urine",p:[
     "Al-Ḥākim 7184 (authentic per al-Albānī and al-Arnaʾūṭ): “Messenger of Allah, we find camels in milk while we are in need.” He said: call the owner three times; if he comes, milk it with his permission, otherwise drink of its milk and leave milk for its young. Why not simply say drink its urine, if that were the original practice?",
     "Bukhārī 5608: the best charity is a milk camel lent so someone can drink a bowl in the morning and a bowl in the evening. Muslim 1020: a reward for each drink of its milk.",
     "Ibn Abī Shayba 25200 (ṣaḥīḥ): al-Ḥasan al-Baṣrī disliked camel urine. 25201: Ibn Sīrīn, asked about drinking camel urine, said “I don't know what that is” (an indirect criticism)."],src:["al-Ḥākim 7184","Bukhārī 5608","Muslim 1020","Muṣannaf Ibn Abī Shayba 25200–25201"]},CU),
    next:[
     {they:"Even if the urine part were authentic, it's still disgusting.",
      we:"Then three things follow from the report itself: they all recovered (every chain says so), it was a one-off remedy for a specific illness, and it was never made a sunna or a recommended act.",
      more:Object.assign({h:"Even on acceptance",p:["1. All of them recovered: every chain says they became healthy afterwards, so the remedy worked for them.","2. Drinking it is not recommended and is not a sunna.","3. There are chains without “and its urine” (Aḥmad, al-Nasāʾī), even if most chains have it.","The same people later killed the herdsman, stole the camels and apostatised; the channel discusses that part separately (see Apostasy)."]},CU),next:[]}]}]},
 sum:"“And its urine” is Qatāda's insertion (idrāj, per al-Khaṭīb and al-Zarkashī); camels were valued for milk, and even on acceptance it was a one-off remedy, never a sunna."});

/* ───────── Companions drinking from a well with urine ───────── */
const UW=AV('sahaba-trinken-urin-brunnen','1282194635762040945');
card(A2+'sahaba-trinken-urin-brunnen',{title:"Did the Companions drink from a well he urinated in?",k:"Dalāʾil al-Nubuwwa",blurb:"A printing error: بال (urinated) for بزق (spat).",
 claim:"Abū Nuʿaym's Dalāʾil al-Nubuwwa says the Prophet ﷺ urinated into a well and the Companions drank from it.",
 tree:{they:"Abū Nuʿaym, Dalāʾil al-Nubuwwa (p. 444, no. 366, Dār al-Nafāʾis edition): the Prophet ﷺ urinated into a well and then people drank from it.",
  we:"That's a typographical error in one modern printed edition: بال (urinated) instead of بزق (spat). The scholars who quote this same report of Abū Nuʿaym all have “he put his blessed saliva into the well”.",
  more:Object.assign({h:"Every other citation says saliva",p:[
   "Al-Suyūṭī, al-Khaṣāʾiṣ al-Kubrā 1/109; al-Samhūdī, Wafāʾ al-Wafā 3/125; al-Ṣāliḥī, Subul al-Hudā wa al-Rashād 7/223: all quote Abū Nuʿaym with بزق (spat).",
   "Ibn Ḥajar: ʿUmar ibn Muḥammad al-Bujayrī included a report in his Ṣaḥīḥ that the Prophet ﷺ put his saliva into the well, and his chain meets Abū Nuʿaym's (Itḥāf al-Maharah 1/436, no. 784).",
   "So the Dār al-Nafāʾis edition has a printing error, and the report should be cited as “he put his saliva into it”.",
   "Spit into a well diffuses and dilutes within seconds to concentrations indistinguishable from pure water."],src:["Abū Nuʿaym, Dalāʾil al-Nubuwwa no. 366","al-Suyūṭī, al-Khaṣāʾiṣ al-Kubrā 1/109","al-Samhūdī, Wafāʾ al-Wafā 3/125","al-Ṣāliḥī, Subul al-Hudā 7/223","Ibn Ḥajar, Itḥāf al-Maharah 1/436"]},UW),
  next:[
   {they:"Al-Suyūṭī also reports Jābir wanting to eat the Prophet's ﷺ waste, and the earth swallowing it.",
    we:"That story (circulated on a website) can't be found in the sources it cites, neither in al-Baghdādī (11th century) nor in al-Suyūṭī, has no chain at all, and the website's own reference is a Shīʿī library.",
    more:Object.assign({h:"An untraceable story",p:["The quoted text: Jābir saw two date trees come together at the Prophet's ﷺ command; he wished he could consume the Prophet's ﷺ waste; the earth where he sat was clean: “the earth is ordered to hide away the excess of us prophets.”","The channel's author searched from 3 to 8 in the morning: it isn't in al-Baghdādī or al-Suyūṭī, and even if it were, no chain is given back to them, let alone to Jābir."]},UW),next:[]}]},
 sum:"The “urine in the well” comes from a printing error (بال for بزق) in one edition; al-Suyūṭī, al-Samhūdī, al-Ṣāliḥī and Ibn Ḥajar all have saliva."});
})();
