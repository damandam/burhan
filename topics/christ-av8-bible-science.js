/* Christianity AV batch 8 — 2026-11-21. Averroes “bibel wissenschaftliche fehler” (12 channels).
   Parent folder: christianity/bible/science-errors ("Scientific errors in the Bible").
   Cards (12):
     1. flat-earth-vault-church-fathers        (#t-o-map-antipoden-kugel-erde-flach-kirchenväter-wasser-himmel)
     2. mustard-seed-smallest-seed            (#senfkorn-baum)
     3. cited-lost-books                      (#bücher-zitieren-die-nie-existiert-haben)
     4. cud-chewing-animals-leviticus         (#wiederkeuer-bibel-fehler)
     5. virginity-blood-test-deuteronomy      (#unschuldige-frau-steinigen)
     6. tobit-fish-gall-demons                (#fisch-heilung-dämonen)
     7. flat-earth-weather-chambers           (#erde-flach-christentum)
     8. balaam-talking-donkey                 (#esel-redet)
     9. bat-classified-as-bird                (#fledermaus-ist-vogel)
    10. leviticus-14-bird-blood-ritual        (#heilung-durch-blut-von-vögel)
    11. jacob-striped-rods-genetics           (#kühe-genetik-stab-nachkommen)
    12. angel-standing-in-sun                 (#engel-in-sonne)
   Attachments (PDFs/images) in channels:
     - #senfkorn-baum (1282144235604279346): 2 PDFs —
       * Senfkorn-Dilemma.docx.pdf (https://cdn.discordapp.com/attachments/1282144235604279346/1515750152445493378/Senfkorn-Dilemma.docx.pdf)
       * Senfkorn-Dilemma_Debattenversion.docx.pdf (https://cdn.discordapp.com/attachments/1282144235604279346/1515777709513380110/Senfkorn-Dilemma_Debattenversion.docx.pdf)
   Minor source typos corrected:
     - #t-o-map-antipoden-kugel-erde-flach-kirchenväter-wasser-himmel: “Cyril of Alexandria” -> Cyril of Jerusalem (newadvent.org/fathers/310109.htm is Catechetical Lecture 9 of Cyril of Jerusalem).
     - #bücher-zitieren-die-nie-existiert-haben: Missing book numbers restored (2 Samuel 1:18; 1 Kings 11:41; 1 Chronicles 29:29; 2 Chronicles 9:29, 12:15, 20:34, 33:19).
     - #wiederkeuer-bibel-fehler: “flippdachs” -> rock hyrax (Klippdachs). */
(()=>{
const AV=(n,id)=>({credit:'Averroes · #'+n+' (translated from German)',link:'https://discord.com/channels/1275832106949283962/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});

topic(['christianity','bible','science-errors'],{title:"Scientific errors in the Bible",k:"Science",blurb:"Cosmology, biology, medicine and nature in biblical passages."});

const S='christianity/bible/science-errors/';

/* 1. Flat earth, solid vault, waters above heaven & Church Fathers */
const FE=AV('t-o-map-antipoden-kugel-erde-flach-kirchenväter-wasser-himmel','1277465516860244038');
card(S+'flat-earth-vault-church-fathers',{
 title:"Church Fathers on a flat earth, solid vault & waters above heaven",
 k:"Cosmology",
 blurb:"Cosmas, Athanasius, Cyril, Chrysostom, Theodoret, Aquinas & John of Damascus.",
 claim:"Christian Scripture and tradition always taught modern spherical astronomy; flat-earth cosmology is a modern slander.",
 tree:N(FE,
  "The Bible's cosmological language is merely poetic, and Christian theologians always knew the earth and heavens were spherical.",
  "Leading Church Fathers—Athanasius, Cosmas Indicopleustes, Theodoret of Cyrus, Tertullian, Cyril of Jerusalem, John Chrysostom, Thomas Aquinas (citing Augustine and Basil), and John of Damascus—explicitly used biblical texts (Job, Isaiah 40:22, Genesis 1, Psalms) to reject a spherical cosmos, mock subterranean Antipodes, place waters above a solid dome, or deny heliocentrism and the sun's true size.",
  "Vaulted heaven & flat earth in patristic exegesis",
  ["Cosmas Indicopleustes (6th c., ToposText 490, 525 GR § 129): Quotes Job (LXX 38:38) to argue that heaven is inclined to the earth and welded like a square stone block—making it 'utterly inconceivable that it is a sphere'—and devotes further chapters to proving a flat earth under a solid vaulted heaven.",
   "Athanasius (Exposition of Psalm 103 [MT 104]): Explicitly rejects a spherical heaven ('The heaven is not a sphere, as they babble, but resembles only a curvature and a half-earth'), citing prophetic Scripture ('Who has set up the heaven like a vault, to dwell upon the earth').",
   "Isaiah 40:22 & Theodoret of Cyrus: Isaiah depicts God sitting upon 'the circle of the earth' and stretching the heavens 'like a tent to dwell in'; Theodoret explains that the earth is 'like the ground floor of a house' (flat) and heaven 'like a roof in the form of an arch and a dome'.",
   "Tertullian (Ad Nationes 1.8): Ridicules the existence of 'subterranean Antipodes' (people on the opposite side of a spherical earth) alongside mythical 'dog-faced' and 'broad shadow-footed' races."],
  ["Cosmas Indicopleustes, Christian Topography § 129 (topostext.org/work/490)","Athanasius on Psalm 103/104 (bkv.unifr.ch)","Isaiah 40:22","Theodoret of Cyrus","Tertullian, Ad Nationes 1.8"],
  [N(FE,
    "What about the waters above the firmament and beneath the earth?",
    "Church Fathers and medieval scholastics treated the Genesis 1 'waters above the firmament' as literal liquid/fluid reservoirs surrounding the dome—even claiming they cool fiery stars like Saturn.",
    "Waters above the dome & floating earth",
    ["Cyril of Jerusalem (Catechetical Lecture 9, newadvent.org/fathers/310109.htm): Teaches that God formed 'the solid substance of the heaven' out of fluid water, with fluid lying above the vault and water beneath the earth. Recognizing the paradox of fiery sun, moon, and stars moving 'in the midst of the water', he brushes it aside by citing the miracle of fire blazing amid hail in Egypt under Moses.",
     "John Chrysostom (Homily 9 on the Statues 7–8, newadvent.org/fathers/190109.htm): Cites Psalm 24:2 and 136:6 ('founded the earth upon the waters') to marvel that 'the whole earth' remains borne upon the waters without sinking, adding that 'waters encompass the back (behind) of the visible heaven on all sides'.",
     "Thomas Aquinas (Summa Theologiae I, q. 68, a. 2): Quotes Augustine (On Genesis Literally II) that Scripture's authority exceeds human intellect, so Christians 'do not doubt at all that waters are there' above the firmament. Answering Objection 3, he cites Basil's view that these waters moderate the heat of heavenly bodies, and Augustine's 'sign' that the star Saturn is the coldest because it lies nearest the upper waters."],
    ["Cyril of Jerusalem, Catechetical Lecture 9","John Chrysostom, Homily 9 on the Statues 7–8","Thomas Aquinas, Summa Theologiae I, q. 68, a. 2"],
    [],
    {facts:[["Authority","Cyril, Chrysostom, Aquinas"],["Upper Waters","Literal reservoir"],["Cooling Theory","Waters cool Saturn (Basil/Augustine)"],["Earth Support","Floating on waters"]],
     quotes:[{by:"Cyril of Jerusalem",en:"For above the vault of heaven lay the fluid, and beneath the earth lies the water; all is well ordered and arranged by the power of the Creator.",ref:"Catechetical Lecture 9"},
             {by:"Thomas Aquinas",en:"As a sign of this, some have taken—as Augustine says—the fact that the star Saturn is the coldest because of its proximity to the upper waters.",ref:"Summa Theologiae I, q. 68, a. 2, ad 3"}]}),
   N(FE,
    "Didn't later Fathers like John of Damascus accept standard astronomy?",
    "John of Damascus still teaches in his foundational Orthodox Faith (Book 2, Ch. 7) that night occurs when the sun travels 'under the earth', and notes that the holy Fathers claim the sun is only equal in size to the earth.",
    "John of Damascus on the sun's course & size",
    ["Course under the earth: Day is defined as the sun's course above the earth from rising to setting, while night is 'the course of the sun under the earth from its rising to its setting'.",
     "Size of the sun: While acknowledging many say the sun is many times larger than the earth, John notes 'the holy Fathers say it is equal to the earth', adding that a small cloud, hill, or wall can completely conceal it."],
    ["John of Damascus, An Exact Exposition of the Orthodox Faith, Book 2, Ch. 7"],
    [],
    {facts:[["Author","John of Damascus (8th c.)"],["Work","Orthodox Faith 2.7"],["Night","Sun passes under earth"],["Sun Size","Fathers: equal to earth"]],
     quotes:[{by:"John of Damascus",en:"It is night when the sun is under the earth, and the duration of the night is the course of the sun under the earth from its rising to its setting.",ref:"Orthodox Faith 2.7"},
             {by:"John of Damascus",en:"Many maintain that the sun is even many times larger than the earth, and the holy Fathers say it is equal to the earth; yet often a small cloud or even a small hill or a wall can completely conceal it.",ref:"Orthodox Faith 2.7"}]})],
  {facts:[["Witnesses","Cosmas, Athanasius, Theodoret, Tertullian"],["Cosmos","Flat ground floor + dome"],["Antipodes","Mocked by Tertullian"],["Verdict","Literal flat-vault exegesis"]],
   quotes:[{by:"Cosmas Indicopleustes",en:"Do not the words of inclining to the earth and welding together clearly show that the heaven as a vault is bound at its ends to the ends of the earth? Its inclining to the earth and being welded makes it utterly inconceivable that it is a sphere.",ref:"Christian Topography (ToposText 490, § 129)"},
           {by:"Athanasius of Alexandria",en:"The heaven is not a sphere, as they babble, but resembles only a curvature and a half-earth, as another prophet also expressed it: 'Who has set up the heaven like a vault, to dwell upon the earth.'",ref:"Exposition of Psalm 103 (LXX)"}],
   visual:{kind:'compare',
    left:{title:"Patristic Biblical Cosmology",items:["Earth flat like a house's ground floor (Theodoret) resting on waters (Chrysostom)","Solid vault welded to earth's ends (Cosmas; Athanasius)","Literal waters above the dome cooling Saturn (Aquinas/Basil/Augustine)","Sun equal to Earth & passing beneath it at night (John of Damascus)"]},
    right:{title:"Observed Reality",items:["Oblate spheroid Earth orbiting in space","No solid metallic/water-formed firmament or upper water reservoir","Saturn is ~9.5× Earth's diameter and cold due to solar distance (~9.5 AU)","Sun is ~1.3 million× Earth's volume; night is Earth's axial rotation"]}}}),
 sum:"From Cosmas, Athanasius, and Tertullian to Cyril, Chrysostom, Aquinas, and John of Damascus, authoritative Fathers read Scripture literally to affirm a vaulted, non-spherical cosmos, subterranean waters, and upper waters cooling Saturn."});

/* 2. The Mustard Seed ("smallest of all seeds") */
const SK=AV('senfkorn-baum','1282144235604279346');
card(S+'mustard-seed-smallest-seed',{
 title:"The mustard seed: “smallest of all seeds” & the poppy refutation",
 k:"Botany",
 blurb:"Church Fathers, Mishnah Sheviʿit 2:7, Frumin et al. 2015, Pliny & Mark 4.",
 claim:"Jesus only spoke idiomatically or meant the smallest cultivated seed in Judea—and besides, the Qurʾān uses the same comparison.",
 tree:N(SK,
  "First, doesn't the Qurʾān also treat the mustard seed as the smallest thing? Second, in Jesus' time and among cultivated crops, the mustard seed was the smallest seed known.",
  "Neither escape works. In the Qurʾān, the absolute minimal unit is dharra (atom/dust speck, 99:7–8)—far smaller than a mustard seed—whereas Jesus makes a definitive botanical claim ('smallest of all seeds on earth', Mark 4:31; Matt 13:32) that Church Fathers took literally. Even restricting to 'cultivated seeds' fails: peer-reviewed archaeology (Frumin et al. 2015) and the Mishnah (Sheviʿit 2:7; Maʿaserot 1:1) prove opium poppy—10× smaller in mass and propagated exclusively by seed—was actively cultivated in the region.",
  "Qurʾān 99:7–8 vs. Matthew 13:32 & patristic literalism",
  ["Qurʾānic comparison (99:7–8): When the Qurʾān states 'Whoever does a dharra's weight of good will see it', Arabic dharra refers to the tiniest dust speck or particle—definitively smaller than a mustard seed. Where the Qurʾān mentions a mustard seed (as in Matthew 17:20's proverb on faith), both texts use a familiar proverb; only Jesus in the synoptic parables makes the definitive claim that it is the smallest of all seeds.",
   "Origen (Commentary on the Song of Songs, Book 3): Takes the claim biologically: '...because the nature of this seed is such that, although it is the smallest of all seeds...'",
   "Peter Chrysologus (Sermon 98): 'Indeed, it is the very tiniest of tiny things (...) this tiniest creature of God.'",
   "Hilary of Poitiers (Commentary on Matthew, bkv.unifr.ch): 'He therefore called himself the mustard seed, which is the smallest among all.'",
   "PDFs archived in channel: Senfkorn-Dilemma.docx.pdf and Senfkorn-Dilemma_Debattenversion.docx.pdf."],
  ["Qurʾān 99:7–8","Matthew 13:32; 17:20; Mark 4:31","Origen, In Cant. 3","Peter Chrysologus, Sermon 98","Hilary of Poitiers on Matthew"],
  [N(SK,
    "What if Jesus meant only 'cultivated agricultural seeds' (Gleason Archer's defense)?",
    "Poppy (Papaver somniferum) destroys the 'cultivated seeds' defense on four independent levels: archaeology, Mishnah law, botany, and 1st-century Roman usage.",
    "Poppy as a cultivated crop: the 4-level proof",
    ["Level 1 — Peer-reviewed archaeology (Frumin et al. 2015, Scientific Reports / Nature): Researchers from Bar-Ilan University and Hebrew University analyzed bio-archaeological plant remains from Philistine and non-Philistine Iron Age sites (12th–7th c. BCE) in the southern Levant. Result: the Philistines introduced Papaver somniferum as a deliberate crop at Ashkelon—~1,000 years before Jesus in the exact region of his ministry. Earlier still, Canaanite tombs at Tel Yehud (14th c. BCE) yielded opium-residue vessels, and poppy was cultivated across the ancient Near East since the Late Neolithic.",
     "Level 2 — Jewish primary source (Mishnah Sheviʿit 2:7 & Maʿaserot 1:1): Compiled shortly after Jesus from established Second Temple practice, Mishnah Sheviʿit 2:7 regulates the Sabbatical year (Shemittah) and explicitly lists poppy (pargin, פרגין) as a sown field crop alongside rice, millet, and sesame. Under Mishnah Maʿaserot 1:1, only deliberately planted, harvested, and stored foods—never wild weeds—are tithed (see also Talmud Rosh Hashanah 13b).",
     "Level 3 — Pure seed propagation (botanical knock-out): Poppy has zero vegetative propagation (no runners, rhizomes, or cuttings). Every farmer cultivating poppy fields had to hold, weigh, and sow poppy seeds—sperma in the strictest sense.",
     "Level 4 — Visible & standard reference (Pliny the Elder, 1st c. CE): In Naturalis Historia—written in the exact century of Jesus—Pliny uses the poppy seed as a standard reference measure for microscopic sizes.",
     "The logical trap: Ask the apologist (1) Was poppy cultivated? Yes (Mishnah Sheviʿit 2:7; Frumin et al. 2015). (2) Was it visible and held in the hand? Yes (Pliny; farming). (3) Is it smaller than mustard? Yes (~10× less mass). All three yield 'Yes', turning Archer's defense against itself."],
    ["Frumin et al. 2015, Scientific Reports (Nature)","Mishnah Sheviʿit 2:7; Maʿaserot 1:1; b. Rosh Hashanah 13b","Pliny the Elder, Naturalis Historia"],
    [],
    {facts:[["Archaeology","Frumin et al. 2015 (Ashkelon)"],["Rabbinic Law","Mishnah Sheviʿit 2:7 (pargin)"],["Propagation","100% by seed only"],["Mass vs. Mustard","~10× smaller"]],
     visual:{kind:'steps',items:[["1. Cultivated Crop","Ashkelon Iron Age remains (Frumin et al. 2015) & Mishnah Sheviʿit 2:7 prove deliberate cultivation."],["2. Sown by Hand","No rhizomes or cuttings—farmers had to sow literal poppy seeds (sperma)."],["3. Standard of Tininess","1st-century Roman writer Pliny the Elder uses poppy seed as a benchmark for tiny size."],["4. Result","Even under 'cultivated seeds only', poppy (~10× lighter than mustard) falsifies the claim."]]}}),
   N(SK,
    "Didn't Jesus simply adapt his wording so simple crowds could understand?",
    "Mark 4 refutes that excuse in situ: eleven verses earlier, Jesus explicitly says he uses parables so outsiders do NOT understand—and explains things only in private.",
    "Symmetry-breaker in Mark 4",
    ["Mark 4:11–12 (quoting Isaiah 6:9–10): Jesus tells the disciples that to outsiders everything comes in parables 'so that they may indeed see but not perceive'. Parables are selective concealment, not dumbed-down mass education.",
     "Mark 4:13: Even the disciples fail to grasp the Parable of the Sower, and Jesus expresses surprise ('Do you not understand this parable? How then will you understand all the parables?')—clearly not calibrating to the lowest common denominator.",
     "Mark 4:33–34: He speaks to the crowd exclusively in parables and explains everything privately to his disciples."],
    ["Mark 4:11–13, 33–34","Isaiah 6:9–10"],
    [],
    {facts:[["Context","11 verses before mustard parable"],["Purpose","Selective concealment (Isa 6:9–10)"],["Private Key","Explained indoors (Mk 4:34)"],["Result","Defeats 'crowd simplification' excuse"]],
     quotes:[{by:"Mark 4:11–12",en:"To you has been given the secret of the kingdom of God, but for those outside everything is in parables, so that they may indeed see but not perceive, and may indeed hear but not understand.",ref:"Gospel of Mark 4:11–12"}]})],
  {facts:[["Qurʾān 99:7–8","Dharra (dust speck/atom)"],["Fathers","Origen, Chrysologus, Hilary"],["Counter-Example","Cultivated poppy (10× smaller)"],["Mark 4:11–12","Refutes 'simplification' excuse"]],
   quotes:[{by:"Origen",en:"...because the nature of this seed is such that, although it is the smallest of all seeds...",ref:"Commentary on the Song of Songs, Book 3"},
           {by:"Hilary of Poitiers",en:"He therefore called himself the mustard seed, which is the smallest among all.",ref:"Commentary on Matthew"}],
   visual:{kind:'compare',
    left:{title:"Apologist Claim",items:["Mustard was the smallest cultivated seed in 1st-c. Judea","Jesus simplified botany for ordinary crowds"]},
    right:{title:"Historical & Textual Reality",items:["Poppy (pargin) was cultivated, tithed (Mishnah), & ~10× smaller","Mark 4:11–12 says parables were meant to conceal, not simplify"]}}}),
 sum:"Poppy (Papaver somniferum) was an actively cultivated, seed-sown, ~10× lighter crop in Judea (Frumin et al. 2015; Mishnah Sheviʿit 2:7), and Mark 4:11–12 refutes the claim that Jesus dumbed down his parables."});

/* 3. Books cited by the Bible that no longer exist */
const CB=AV('bücher-zitieren-die-nie-existiert-haben','1282847064832737311');
card(S+'cited-lost-books',{
 title:"Scriptures and sources the Bible cites that do not exist in the canon",
 k:"Canon & Sources",
 blurb:"Book of Jasher, Acts of Solomon, prophets' annals, and 1 Enoch in Jude.",
 claim:"The Bible is a complete, self-contained record; every authoritative source it relies on is preserved in Scripture.",
 tree:N(CB,
  "Every book God intended as authoritative Scripture has been preserved intact inside the biblical canon.",
  "Across both Testaments, biblical authors repeatedly appeal to external prophetic chronicles and books—to verify miracles, royal deeds, and prophecy—that are completely absent from today's canon or lost altogether.",
  "Nine canonical appeals to extra-canonical or lost books",
  ["Joshua 10:13 (Book of Jasher / Book of the Upright): Cites an external written source to confirm the sun and moon standing still ('Is this not written in the Book of Jasher?').",
   "2 Samuel 1:18 (Book of Jasher): Appeals again to the Book of Jasher for David's command to teach the people of Judah the Song of the Bow.",
   "1 Kings 11:41 (Book of the Acts of Solomon): Refers readers to 'the Book of the Acts of Solomon' for the rest of Solomon's deeds and wisdom.",
   "1 Chronicles 29:29 (Samuel, Nathan, Gad): States David's acts are written in 'the book of Samuel the seer, and in the book of Nathan the prophet, and in the book of Gad the seer'.",
   "2 Chronicles 9:29 (Nathan, Ahijah, Iddo): Points to 'the book of Nathan the prophet, and in the prophecy of Ahijah the Shilonite, and in the visions of Iddo the seer'.",
   "2 Chronicles 12:15 (Shemaiah & Iddo): Refers to 'the records of Shemaiah the prophet and of Iddo the seer' for Rehoboam's acts and wars.",
   "2 Chronicles 20:34 (Jehu son of Hanani): Cites 'the history of Jehu the son of Hanani, which is recorded in the Book of the Kings of Israel'.",
   "2 Chronicles 33:19 (Records of the Seers / Hozai): Refers Manasseh's prayer and sins to 'the records of Hozai / the seers'.",
   "Jude 1:14–15 (Book of Enoch): Directly quotes extra-canonical 1 Enoch 1:9 as genuine prophecy by 'Enoch, the seventh from Adam'."],
  ["Joshua 10:13","2 Samuel 1:18","1 Kings 11:41","1 Chronicles 29:29","2 Chronicles 9:29; 12:15; 20:34; 33:19","Jude 1:14–15"],
  [],
  {facts:[["OT Citations","8 passages (Joshua–Chronicles)"],["NT Citation","Jude 1:14–15 (1 Enoch)"],["Status","Lost or non-canonical"],["Implication","Canon is incomplete on its own terms"]],
   quotes:[{by:"Joshua 10:13",en:"And the sun stood still, and the moon stopped, until the nation took vengeance on their enemies. Is this not written in the Book of Jasher?",ref:"Joshua 10:13"},
           {by:"Jude 1:14–15",en:"It was also about these that Enoch, the seventh from Adam, prophesied, saying, 'Behold, the Lord comes with ten thousands of his holy ones, to execute judgment on all...'",ref:"Jude 1:14–15"}],
   visual:{kind:'steps',items:[["Book of Jasher","Cited in Joshua 10:13 & 2 Samuel 1:18—lost."],["Prophetic Annals","Books of Nathan, Gad, Ahijah, Iddo, Shemaiah, Jehu & Hozai (1–2 Chronicles)—lost."],["Acts of Solomon","Cited in 1 Kings 11:41—lost."],["1 Enoch","Quoted as prophecy in Jude 1:14–15—excluded from Protestant/Catholic canons."]]}}),
 sum:"From Joshua 10:13 and 1–2 Chronicles to Jude 1:14–15, biblical writers repeatedly invoke prophetic books and chronicles that are either lost or rejected from the canon."});

/* 4. Non-ruminants & hooves in Leviticus 11 / Deuteronomy 14 */
const WK=AV('wiederkeuer-bibel-fehler','1275931631877619732');
card(S+'cud-chewing-animals-leviticus',{
 title:"Hares, rock hyraxes & camels: cud-chewing and hooves in Leviticus 11",
 k:"Zoology",
 blurb:"Hebrew maʿaleh gerah means regurgitating from the stomach—false for hares & hyraxes.",
 claim:"Leviticus 11 and Deuteronomy 14 accurately classify ruminants and hoofed animals—or merely speak phenomenologically.",
 tree:N(WK,
  "Hares, rock hyraxes, and camels appear to chew the cud, so the Bible is only describing outward observation.",
  "The Hebrew text does not say 'they appear to move their jaws'—it uses maʿaleh gerah, which literally means 'bringing up regurgitated food' from the stomach. Zoologically, neither the rock hyrax nor the hare is a ruminant, and camels differ anatomically from true four-chambered ruminants; moreover, the claim that camels and hyraxes lack divided feet/hooves also conflicts with their anatomy.",
  "Zoology vs. Hebrew maʿaleh gerah",
  ["Zoological reality of chewing cud: Rock hyraxes (Procavia capensis) and hares (Lepus) are not ruminants at all. Hares practice cecotrophy (re-ingesting soft fecal pellets directly from the anus), while hyraxes merely chew/grind their jaws; neither regurgitates food from a stomach. Camels have a 3-chambered stomach (unlike true ruminants such as sheep and cattle, which have 4 chambers) and are classified as pseudo-ruminants rather than true ruminants.",
   "Biblical passages: Both Leviticus 11:3–7 and Deuteronomy 14:6–8 prohibit the camel, the rock hyrax (shaphan / Klippdachs), and the hare because 'they chew the cud, yet do not have split hooves', while forbidding the pig for having split hooves without chewing the cud.",
   "Refuting the 'mere appearance' excuse via Hebrew lexicography: The biblical term is מַעֲלֵה גֵּרָה (maʿaleh gerah), composed of maʿaleh ('bringing up' / 'raising up') and gerah ('regurgitated food/cud' brought back to the mouth after already being in the stomach). It explicitly asserts internal regurgitation, not mere jaw movement.",
   "Hoof/foot error & Qurʾānic contrast: While hares genuinely lack split hooves, camels and rock hyraxes possess cleft/divided toes/feet—meaning by the Torah's own stated rule they would appear permitted, yet the text asserts they lack divided hooves. By contrast, the Qurʾān avoids this biological error and declares camels and hares lawful (ḥalāl)."],
  ["Leviticus 11:3–7","Deuteronomy 14:6–8","Hebrew lexicon: מַעֲלֵה גֵּרָה (maʿaleh gerah)"],
  [],
  {facts:[["Verses","Lev 11:3–7; Deut 14:6–8"],["Hebrew Term","maʿaleh gerah (bring up cud)"],["False Ruminants","Hare & rock hyrax"],["Camel Stomach","3 chambers (vs. 4 in ruminants)"]],
   quotes:[{by:"Leviticus 11:5–6",en:"...the rock badger [hyrax], because it chews the cud but does not part the hoof, is unclean to you; and the hare, because it chews the cud but does not part the hoof, is unclean to you.",ref:"Leviticus 11:5–6"}],
   visual:{kind:'compare',
    left:{title:"Biblical Claim (Lev 11; Deut 14)",items:["Camel, rock hyrax & hare 'bring up cud' (maʿaleh gerah)","All three lack divided hooves/feet"]},
    right:{title:"Zoological & Linguistic Facts",items:["Hyrax & hare never regurgitate from a stomach; camel has 3 chambers (not 4)","Camels (two cleft toes) & hyraxes have divided feet; hares do not"]}}}),
 sum:"Leviticus 11:3–7 and Deuteronomy 14:6–8 literally assert stomach regurgitation (maʿaleh gerah) for hares and rock hyraxes—biological non-ruminants—alongside flawed claims about divided hooves."});

/* 5. Stoning an innocent bride if no blood appears on the wedding sheet */
const UF=AV('unschuldige-frau-steinigen','1275932538162118686');
card(S+'virginity-blood-test-deuteronomy',{
 title:"Deuteronomy 22:13–21: stoning a bride if no blood is on the cloth",
 k:"Medicine & Law",
 blurb:"Only ~50% of virgins bleed on first intercourse; plus the father—not the wife—is compensated.",
 claim:"The Mosaic virginity test in Deuteronomy 22 was a reliable forensic safeguard for justice.",
 tree:N(UF,
  "Presenting the bloody wedding cloth before the elders reliably proved whether a bride was a virgin.",
  "Medically, relying on a bloody sheet as proof of virginity condemns innocent women to death by stoning: only about 50% of virgins bleed during their wedding night. Worse still, when the husband's accusation is proven false, the fine goes to her father rather than the wronged woman herself.",
  "Forensic error & misdirected compensation",
  ["Medical failure (~50% bleeding rate): Roughly half of female virgins do not bleed during first intercourse due to natural variations in hymenal elasticity and vascularity. Treating absence of blood on a cloth as proof of premarital unchastity guarantees the execution of innocent brides.",
   "Stated legal procedure (Deuteronomy 22:13–21): If a husband slanders his bride as not a virgin, her parents must spread 'the tokens of her virginity' (the blood-stained cloth) before the city elders at the gate. If the tokens are NOT found, 'they shall bring out the young woman to the door of her father's house, and the men of her city shall stone her to death' (vv. 20–21).",
   "Honour & compensation go to the father, not the victim: If the cloth shows blood, the elders whip and fine the husband 100 silver shekels—paying the money to the woman's father, not to the wife whose life and reputation were jeopardized, because the law frames the slander as an affront to the father's honour."],
  ["Deuteronomy 22:13–21"],
  [],
  {facts:[["Passage","Deut 22:13–21"],["Medical Fact","Only ~50% of virgins bleed"],["Penalty Without Blood","Stoned to death"],["False Accusation Fine","100 silver shekels to father"]],
   quotes:[{by:"Deuteronomy 22:20–21",en:"But if the thing is true, that evidence of virginity was not found in the young woman, then they shall bring out the young woman to the door of her father's house, and the men of her city shall stone her to death with stones...",ref:"Deuteronomy 22:20–21"}],
   visual:{kind:'compare',
    left:{title:"Deuteronomy 22:13–21 Presumes",items:["Every virgin leaves blood on the wedding cloth","Absence of blood proves fornication -> death by stoning","Slander damages the father's honour (father receives 100 shekels)"]},
    right:{title:"Medical & Moral Reality",items:["Only ~50% of virgins bleed on first intercourse","Healthy virgins fail the cloth test and face execution","The falsely accused wife receives zero compensation"]}}}),
 sum:"Deuteronomy 22:13–21 stakes a woman's life on a medically false 'blood on the sheet' test (which ~50% of virgins fail) and pays damages for false slander to her father rather than to her."});

/* 6. Book of Tobit: bird-dropping blindness, fish-gall cure & exorcism smoke */
const FH=AV('fisch-heilung-dämonen','1282848232925560833');
card(S+'tobit-fish-gall-demons',{
 title:"Book of Tobit: bird-dropping blindness, fish-gall cures & demon-repelling smoke",
 k:"Medicine & Folklore",
 blurb:"Tobit 2, 6 & 11 prescribe fish gall for blindness and burning fish organs to banish demons.",
 claim:"The deuterocanonical Book of Tobit (Catholic/Orthodox Scripture) reflects divinely revealed medical and spiritual truth.",
 tree:N(FH,
  "The healings and exorcism in Tobit were taught directly by the archangel Raphael and show God's care.",
  "The Book of Tobit—canonical Scripture in Catholic and Orthodox Bibles—presents folk-magic and medically absurd remedies as angelic instruction from Raphael: blinding caused by sparrow droppings, curing corneal white spots with fish gall, and driving away demons by burning fish heart and liver on glowing coals.",
  "Three pseudo-medical & magical claims in Tobit",
  ["Blinded by bird droppings (Tobit 2:9–10): While sleeping outdoors by a courtyard wall with his face uncovered, a sparrow drops warm excrement (rendered 'wet nest' in the cited German translation) onto Tobit's eyes, producing white spots and total blindness that physicians cannot heal.",
   "Curing blindness with fish gall (Tobit 11:8–13): The angel Raphael instructs Tobias to smear fish gall onto his father's eyes ('the smell/application will heal him'), restoring Tobit's sight—a medically baseless folk remedy.",
   "Burning fish heart and liver to expel demons (Tobit 6:2–8): After a fish leaps from the river to swallow Tobias, Raphael tells him to extract and save its heart, liver, and gall, explaining that placing the heart and liver on glowing coals produces smoke that permanently drives away any demon or evil spirit afflicting a man or woman."],
  ["Tobit 2:9–10","Tobit 6:2–8","Tobit 11:8–13"],
  [],
  {facts:[["Book","Tobit (Catholic/Orthodox canon)"],["Cause of Blindness","Sparrow droppings (2:9–10)"],["Cure","Smearing fish gall (11:8–13)"],["Exorcism","Burning fish heart & liver (6:7–8)"]],
   quotes:[{by:"Tobit 6:7–8",en:"If anyone is afflicted by a demon or an evil spirit, one must place the heart and liver of the fish on glowing coals; then the man or woman will be freed from this affliction and the demon will flee forever.",ref:"Tobit 6:7–8"},
           {by:"Tobit 11:8–13",en:"Go, and smear the gall upon his eyes. The smell will heal him.",ref:"Tobit 11:8–13"}],
   visual:{kind:'steps',items:[["Tobit 2:9–10","Sparrow droppings fall on Tobit's eyes, causing white spots and incurable blindness."],["Tobit 6:2–8","Raphael teaches that smoke from burning fish heart and liver on coals permanently drives out demons."],["Tobit 11:8–13","Tobias smears fish gall on Tobit's eyes to heal his blindness."]]}}),
 sum:"The Book of Tobit attributes angelic authority to ancient folk-magic: bird-dropping blindness, curing blindness by smearing fish gall, and banishing demons with burnt fish-organ smoke."});

/* 7. Biblical flat-earth verses, solid dome & literal weather chambers */
const EF=AV('erde-flach-christentum','1284561056693227621');
card(S+'flat-earth-weather-chambers',{
 title:"Flat earth, solid sky dome & weather storehouses across the Bible",
 k:"Cosmology",
 blurb:"Job, Proverbs 8:27, Isaiah, Ezekiel, Daniel 4, Matthew 4:8, Genesis 1, Amos 9 & weather chambers.",
 claim:"The Bible never depicts a flat earth with a hard dome or literal weather vaults—those are misreadings.",
 tree:N(EF,
  "Scripture merely uses common idioms like 'ends of the earth'; it does not depict a flat disc under a solid dome with weather storehouses.",
  "Over a dozen biblical passages converge on a single ancient Near Eastern cosmology: a flat, bounded circular disc ('circle of the earth', 'four corners/ends') visible all at once from a high mountain or tall tree, capped by a solid cast-metal dome ('firmament') supporting heavenly chambers and storehouses for wind, snow, hail, and rain.",
  "Edges, circle & global visibility",
  ["Ends & four corners of the earth: Job 37:3 and 38:13 describe an earth with defined 'ends' or borders (unlike a sphere); Isaiah 11:12 ('four corners/ends of the earth') and Ezekiel 7:2 ('four ends of the land') similarly portray a bounded surface.",
   "Circle on the flat deep: Proverbs 8:27 ('when He inscribed a circle on the face of the deep') and Isaiah 40:22 ('enthroned above the circle of the earth') describe a flat circular horizon/disc rather than a three-dimensional sphere.",
   "Impossible line-of-sight on a globe: Daniel 4:11 (4:8 MT) depicts a tree visible 'to the end of the whole earth', and Matthew 4:8 has the devil show Jesus 'all the kingdoms of the world' from a single high mountain—geometrically impossible on a curved spherical Earth."],
  ["Job 37:3; 38:13","Proverbs 8:27","Isaiah 11:12; 40:22","Ezekiel 7:2","Daniel 4:11","Matthew 4:8"],
  [N(EF,
    "What about the dome/firmament and weather storehouses?",
    "Genesis, Job, Psalms, Ezekiel, Amos, and Jeremiah repeatedly describe a hard solid sky dome with upper rooms and storehouses holding wind, rain, snow, and hail.",
    "Solid sky dome & weather storehouses",
    ["Solid firmament/dome: Genesis 1:6–8 places a firmament separating waters above from waters below; Job 37:18 calls the skies 'hard as a cast metal mirror'; Psalm 19:1 praises the 'firmament'; Ezekiel 1:26 places a sapphire throne above the dome; and Amos 9:6 states God 'builds His upper chambers in the heavens and founds His vault upon the earth'.",
     "Wind & rain chambers (north, east, south, west): Psalm 135:7, Jeremiah 10:13, and Jeremiah 51:16 all describe God raising clouds 'from the end of the earth', making lightning for rain, and bringing the wind 'out of His storehouses/treasuries'.",
     "Upper water chambers & snow/hail vaults: Psalm 104:3 ('builds His chambers over the waters') and 104:13 ('waters the mountains from His upper chambers'), Amos 9:6 (pouring sea waters over the earth from upper chambers), Job 38:22 ('Have you entered the storehouses of the snow, or have you seen the storehouses of the hail?'), and Isaiah 26:20–21 (chambers imagery)."],
    ["Genesis 1:6–8","Job 37:18; 38:22","Psalm 19:1; 104:3, 13; 135:7","Ezekiel 1:26","Amos 9:6","Jeremiah 10:13; 51:16","Isaiah 26:20–21"],
    [],
    {facts:[["Dome Material","Hard as cast mirror (Job 37:18)"],["Base","Vault founded on earth (Amos 9:6)"],["Storehouses","Wind, snow & hail vaults"],["Meteorology","Chambers over waters (Ps 104)"]],
     quotes:[{by:"Job 37:18",en:"Can you, like Him, spread out the skies, hard as a cast metal mirror?",ref:"Job 37:18"},
             {by:"Amos 9:6",en:"He builds His upper chambers in the heavens and founds His vault upon the earth; He calls for the waters of the sea and pours them out upon the face of the earth.",ref:"Amos 9:6"},
             {by:"Psalm 135:7",en:"He makes the clouds rise from the end of the earth; He makes lightning for the rain and brings forth the wind from His storehouses.",ref:"Psalm 135:7"}]})],
  {facts:[["Earth Shape","Circle / 4 ends (Isa 40:22; 11:12)"],["Line of Sight","Tree & mountain see whole world"],["Sky Structure","Hard dome + upper chambers"],["Weather","Literal wind, snow & hail vaults"]],
   quotes:[{by:"Proverbs 8:27",en:"When He established the heavens, I was there; when He inscribed a circle on the face of the deep...",ref:"Proverbs 8:27"}],
   visual:{kind:'compare',
    left:{title:"Biblical Imagery",items:["Earth has ends/four corners & a flat circular horizon","Tree (Dan 4:11) & mountain (Matt 4:8) give global line of sight","Hard metal-like sky dome (Job 37:18) holding water chambers & wind/snow/hail vaults"]},
    right:{title:"Modern Earth & Atmospheric Science",items:["Spherical globe with no corners or edges","Earth's curvature strictly blocks seeing opposite hemispheres from any peak","Open atmosphere; precipitation & wind arise from solar heating, pressure gradients & condensation"]}}}),
 sum:"Across Job, Proverbs, Isaiah, Ezekiel, Daniel, Matthew 4:8, Genesis, Psalms, Jeremiah, and Amos, the Bible consistently depicts a bounded flat disc under a hard sky dome fitted with weather storehouses."});

/* 8. Balaam's talking donkey */
const ER=AV('esel-redet','1284564887434952754');
card(S+'balaam-talking-donkey',{
 title:"Numbers 22:28: Balaam's talking donkey",
 k:"Biology",
 blurb:"The LORD opens the donkey's mouth to argue articulately with Balaam.",
 claim:"The Bible contains no biologically impossible talking-animal tales.",
 tree:N(ER,
  "Only non-biblical myths or fables feature talking animals speaking human language.",
  "Numbers 22:28 explicitly narrates an ordinary donkey speaking articulated human speech to rebuke Balaam—a biological impossibility given equine vocal anatomy and cognition.",
  "Articulate human speech from a donkey",
  ["Biblical text (Numbers 22:28): 'Then the LORD opened the mouth of the donkey, and she said to Balaam, \"What have I done to you, that you have struck me these three times?\"'",
   "Double standard in polemics: Critics frequently mock animal-speech narratives when attacking other traditions, yet the Old Testament itself presents a talking donkey conversing with a prophet as literal history."],
  ["Numbers 22:28"],
  [],
  {facts:[["Verse","Numbers 22:28"],["Speaker","Balaam's female donkey"],["Biological Issue","Equines lack human vocal/speech apparatus"],["Point","Exposes polemical double standards"]],
   quotes:[{by:"Numbers 22:28",en:"Then the LORD opened the mouth of the donkey, and she said to Balaam: What have I done to you, that you have struck me these three times?",ref:"Numbers 22:28 (Luther 1912)"}],
   visual:{kind:'compare',
    left:{title:"Numbers 22:28 Narrative",items:["Donkey speaks full grammatical human sentences","Argues with Balaam about being struck three times"]},
    right:{title:"Biology & Polemics",items:["Donkeys lack human larynx/pharynx configuration and linguistic cortex","If attributed to miracle, Christians cannot mock parallel miracle claims elsewhere"]}}}),
 sum:"Numbers 22:28 narrates a donkey speaking coherent human sentences to Balaam—biologically impossible without miracle, and a direct check on anti-Islamic double standards."});

/* 9. The bat classified as a bird (Leviticus 11:19) */
const FV=AV('fledermaus-ist-vogel','1284565332694007860');
card(S+'bat-classified-as-bird',{
 title:"Leviticus 11:19 classifies the bat among unclean birds",
 k:"Zoology",
 blurb:"Bats are placental mammals, not birds.",
 claim:"Biblical taxonomy accurately groups animals according to their true biological kinds.",
 tree:N(FV,
  "The Bible's animal classifications align with real biological nature.",
  "Leviticus 11:19 places the bat directly at the end of its catalogue of unclean birds ('the stork, the heron after its kind, the hoopoe, and the bat')—even though bats are mammals, not birds.",
  "Bats are mammals, not birds",
  ["Biblical list (Leviticus 11:13–19): In the section defining detestable 'birds/fowl' (v. 13), verse 19 concludes: '...the stork, the heron after its kind, the hoopoe, and the bat.'",
   "Biological error: From a scientific standpoint, bats (order Chiroptera) are placental mammals—warm-blooded vertebrates with fur that give live birth and nurse their young with milk—not birds."],
  ["Leviticus 11:13–19"],
  [],
  {facts:[["Verse","Leviticus 11:19"],["Listed With","Stork, heron, hoopoe (birds)"],["True Class","Mammalia (Chiroptera)"],["Verdict","Taxonomic misclassification"]],
   quotes:[{by:"Leviticus 11:19",en:"...the stork, the heron after its kind, the hoopoe, and the bat.",ref:"Leviticus 11:19"}],
   visual:{kind:'compare',
    left:{title:"Leviticus 11:13–19",items:["Groups the bat under detestable 'birds' alongside stork, heron & hoopoe"]},
    right:{title:"Modern Zoology",items:["Bats are flying mammals (fur, live birth, mammary glands)","Share flight analogously, not avian taxonomy"]}}}),
 sum:"Leviticus 11:19 categorizes the bat alongside storks, herons, and hoopoes as a bird, despite bats being mammals."});

/* 10. Leviticus 14: healing & purifying skin disease with bird blood */
const HB=AV('heilung-durch-blut-von-vögel','1284573398026031197');
card(S+'leviticus-14-bird-blood-ritual',{
 title:"Leviticus 14: ritual cleansing of skin disease with bird blood & oil",
 k:"Medicine & Ritual",
 blurb:"Treats healed dermatological illness as spiritual impurity requiring blood-dipped birds.",
 claim:"Mosaic purity regulations in Leviticus 14 are purely rational public-health hygiene.",
 tree:N(HB,
  "Leviticus 14 is simply an ancient medical quarantine and hygiene protocol.",
  "Leviticus 14 operates *after* a skin disease has already physically healed—requiring a bizarre, non-medical ritual of slaughtering a bird, dipping a live bird in its blood, sprinkling blood-water seven times, total body shaving twice, and dabbing blood and oil on the right earlobe, thumb, and big toe because it treats skin disease as spiritual impurity before God.",
  "7-step blood-ritual in Leviticus 14",
  ["False link between dermatology and spiritual purity: Even after the skin condition has cleared, the recovered patient must undergo spiritual purification—presupposing that skin disease reflects spiritual defilement before God, when in reality dermatological conditions have nothing to do with one's spiritual standing.",
   "1. Priestly inspection: The priest checks whether the skin disease has subsided to confirm physical healing.",
   "2. Sacrifice of two birds: One bird is killed and its blood mixed with water; the second, living bird is dipped into the blood-and-water mixture and released to symbolize carrying away impurity.",
   "3. Sevenfold sprinkling: The priest sprinkles the healed person seven times with the bird-blood and water mixture for ritual purification and sanctification.",
   "4–5. Repeated total shaving & bathing: The person washes clothes, shaves eyebrows, beard, head hair, and all body hair completely, and bathes—then repeats the full shaving, washing, and bathing one week later.",
   "6–7. Lamb sacrifices & blood-oil anointing: Lambs are offered for sin, burnt, and guilt offerings with a grain offering, and blood and oil are applied to the person's right earlobe, right thumb, and right big toe to consecrate them back into God's service."],
  ["Leviticus 14:1–32"],
  [],
  {facts:[["Passage","Leviticus 14"],["Timing","After physical healing"],["Key Rite","Live bird dipped in dead bird's blood"],["Anointing","Right earlobe, thumb & big toe"]],
   visual:{kind:'steps',items:[["1. Inspection","Priest confirms the skin disease has already healed."],["2. Two Birds","One bird killed over water; live bird dipped in its blood and released."],["3. Sprinkling & Shaving","Person sprinkled 7× with blood-water; shaves all body hair twice (Day 1 & Day 7)."],["4. Blood & Oil","Sacrificial lambs offered; blood & oil dabbed on right earlobe, thumb & big toe."]]}}),
 sum:"Leviticus 14 treats healed skin disease as spiritual impurity and prescribes dipping a live bird in blood, sevenfold blood-water sprinkling, and dabbing blood on earlobe, thumb, and toe—ritual magic, not medicine."});

/* 11. Jacob's striped rods & coat-pattern genetics (Genesis 30) */
const KJ=AV('kühe-genetik-stab-nachkommen','1284574679696412842');
card(S+'jacob-striped-rods-genetics',{
 title:"Genesis 30:38–40: striped rods & the myth of visual inheritance",
 k:"Genetics",
 blurb:"Jacob shapes livestock coat patterns via visual impressions; Augustine & Jerome defend it.",
 claim:"Genesis 30 only shows divine providence, not a false biological belief about inheritance.",
 tree:N(KJ,
  "Genesis 30 never claims visual stimuli alter animal genetics; the Bible and Church Fathers didn't teach 'maternal impression'.",
  "Genesis 30:38–40 directly attributes striped, speckled, and spotted offspring to flocks looking at peeled, striped rods in watering troughs while mating—scientifically impossible, since coat traits are governed by genes. Worse, both Augustine (On the Holy Trinity) and Jerome (Hebrew Questions on Genesis) explicitly endorse this exact false biology of 'maternal imagination' at conception.",
  "Genesis 30:38–40 vs. modern genetics",
  ["Genesis 30:38: Jacob places peeled rods in the watering troughs in front of the flocks so they would mate while drinking—presuming visual stimuli during conception shape offspring coat patterns.",
   "Genesis 30:39: 'And the flocks bred in front of the rods and brought forth striped, speckled, and spotted.' Scientifically, coat coloration is determined by DNA alleles from both parents; visual sights during mating have zero effect on offspring genetics.",
   "Genesis 30:40: Jacob separates the lambs and turns the faces of the flocks toward the striped and black animals in Laban's herd—again falsely assuming environmental visual cues alter hereditary traits."],
  ["Genesis 30:38–40"],
  [N(KJ,
    "Did Christian authorities actually treat this as real biology?",
    "Yes—both Augustine and Jerome cited Genesis 30 as textbook proof that whatever a mother gazes upon or imagines during conception stamps itself onto the fetus.",
    "Augustine & Jerome endorse 'maternal impression'",
    ["Augustine (On the Holy Trinity, Ch. 2 [CCEL npnf103.iv.i.xiii.ii]): Teaches that offspring display 'the special imaginations (phantasiae) of the mother, whatever she has gazed upon with particular delight', explaining that 'malleable seeds' follow 'the inclination of the mother's soul and the phantasy formed in her by that bodily image which she eagerly looked upon'—explicitly citing Genesis 30:37–41 'from the most trustworthy Scriptures'.",
     "Jerome (Hebrew Questions on Genesis, Ch. 30, mlat.uzh.ch/browser/7160): Explains that because sheep and goats drank eagerly while being mounted, seeing the multi-colored reflections of rams and rods in the water caused them to conceive patterned young. Calling this 'the nature of females at conception—what they see or imagine at the moment of highest pleasure, according to that they shape their offspring', Jerome adds parallels from Spanish horse herds and Quintilian's defense of a woman accused of bearing an Ethiopian child."],
    ["Augustine, On the Holy Trinity (ccel.org/ccel/schaff/npnf103.iv.i.xiii.ii.html)","Jerome, Quaestiones Hebraicae in Genesim 30 (mlat.uzh.ch/browser/7160)"],
    [],
    {facts:[["Patristic Defenders","Augustine & Jerome"],["Mechanism Claimed","Maternal visual phantasy"],["Parallel Cited","Spanish horses & Quintilian"],["Verdict","Ancient biological myth"]],
     quotes:[{by:"Augustine",en:"For the more tender—one might say, the more malleable—the seeds are, the more effectively and readily they follow the inclination of the mother's soul and the phantasy formed in her by that bodily image which she eagerly looked upon... namely what Jacob did... (See Genesis 30:37–41.)",ref:"On the Holy Trinity, Ch. 2"},
             {by:"Jerome",en:"It is not surprising that this is the nature of females at conception: what they see or imagine at the moment of highest pleasure, according to that they shape their offspring.",ref:"Hebrew Questions on Genesis, Ch. 30"}]})],
  {facts:[["Passage","Genesis 30:38–40"],["Method","Striped rods at troughs"],["Scientific Reality","Coat pattern is genetic (DNA)"],["Fathers","Augustine & Jerome endorsed it"]],
   quotes:[{by:"Genesis 30:38–39",en:"He set the sticks that he had peeled in front of the flocks in the troughs, that is, the watering places, where the flocks came to drink... And the flocks bred in front of the sticks and so the flocks brought forth striped, speckled, and spotted.",ref:"Genesis 30:38–39"}],
   visual:{kind:'compare',
    left:{title:"Genesis 30 & Augustine/Jerome",items:["What animals see in water troughs during mating alters offspring coat patterns","Augustine calls 'malleable seeds' shaped by maternal 'phantasy'"]},
    right:{title:"Genetics",items:["Fur/coat patterns are inherited via parental genes (alleles)","Visual stimuli during mating cannot rewrite fetal DNA"]}}}),
 sum:"Genesis 30:38–40 assumes visual impressions during mating alter offspring coat genetics—a pre-scientific myth that Augustine and Jerome explicitly defended as real reproductive biology."});

/* 12. Angel standing in the sun (Revelation 19:17) */
const ES=AV('engel-in-sonne','1336070712728752230');
card(S+'angel-standing-in-sun',{
 title:"Revelation 19:17: seeing an angel standing inside the sun",
 k:"Astronomy & Vision",
 blurb:"The sun's blinding luminosity makes staring at it or seeing anything inside it impossible.",
 claim:"Every detail in Revelation's visions aligns seamlessly with physical reality.",
 tree:N(ES,
  "John literally saw an angel standing inside the sun calling out to the birds.",
  "Physically and optically, you cannot stare directly at the sun—let alone discern a figure standing inside its blinding thermonuclear glare. The image reflects an ancient conception of the sun as a relatively dim, viewable heavenly disc.",
  "Optical impossibility in Revelation 19:17",
  ["Biblical text (Revelation 19:17): 'And I saw an angel standing in the sun, who cried in a loud voice to all the birds flying in midair, \"Come, gather together for the great supper of God,\"'",
   "Optical & physical objection: The sun is far too bright for the human eye to stare at directly, and its overwhelming luminosity makes it impossible to distinguish any figure standing inside it."],
  ["Revelation 19:17"],
  [],
  {facts:[["Verse","Revelation 19:17"],["Claimed Sight","Angel standing in the sun"],["Physical Issue","Blinding solar luminosity"],["Verdict","Pre-scientific solar imagery"]],
   quotes:[{by:"Revelation 19:17",en:"And I saw an angel standing in the sun, who cried in a loud voice to all the birds flying in midair, 'Come, gather together for the great supper of God,'",ref:"Revelation 19:17"}],
   visual:{kind:'compare',
    left:{title:"Revelation 19:17",items:["Narrator sees an angel standing inside the sun"]},
    right:{title:"Solar Physics & Optics",items:["Staring at the sun damages the retina; glare obscures anything inside or against it"]}}}),
 sum:"Revelation 19:17 depicts the seer looking into the sun to spot an angel standing inside it—optically impossible given solar luminosity."});
})();
