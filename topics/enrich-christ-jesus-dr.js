/* Enrichment block 4 (Christianity › Trinity & Jesus Proof-Texts, English DR + IA) — 2026-11-21.
   Rebuilds all 22 thin / NOSUM Trinity & Jesus proof-text cards using 100% of their Deenresponds & IA
   arguments, Greek/Hebrew/Arabic grammar proofs, Church Father & academic citations, and rich visual layouts. */
(()=>{
const IA=(n,id)=>({credit:'Islamic Apologetics · #'+n,link:'https://discord.com/channels/1514269918978248796/'+id});
const DR=(n,id)=>({credit:'Deenresponds · #'+n,link:'https://discord.com/channels/1328402309297733662/'+id});
const N=(cr,they,we,h,p,src,next,extra)=>({they,we,more:Object.assign({h,p,src},cr,extra||{}),next:next||[]});
const card=(path,o)=>topic(path.split('/'),{title:o.title,k:o.k,blurb:o.blurb,article:{claim:o.claim,tree:o.tree,sum:o.sum}});

const TR='christianity/trinity/', J='christianity/jesus/';

/* 1. John 1:1 */
const J1=DR('john-1-1-debunked','1368591306556969050');
card(TR+'d-dr-john-1-1-debunked',{
 title:"John 1:1: “the Word was God”",k:"Trinity · Greek Grammar",blurb:"Colwell's Rule, Theon vs Theos, and Bart Ehrman on the Johannine prologue as a later scribal addition.",
 claim:"John 1:1 proves Jesus is co-equal God: “In the beginning was the Word, and the Word was with God, and the Word was God.”",
 tree:N(J1,
  "John 1:1 explicitly calls the Word (Jesus) “God”.",
  "Even before arguing theology, John 1:1 runs into three separate barriers: (1) Greek grammar differentiates ho theos (“the God”) from anarthrous theos (Colwell's Rule analysis in colwell.pdf); (2) “with God (theon)” and “was God (theos)” creates a dilemma of two Gods vs non-identity; and (3) scholars like Bart Ehrman note John 1:1–18 was likely a later scribal prologue added to the Gospel.",
  "Grammar, the Logos & the Prologue",
  ["Colwell's Rule & Greek grammar: the academic study linked in the channel (areopage.net/colwell.pdf) breaks down the Greek grammar of John 1:1c — anarthrous pre-verbal predicate nominatives (theos without the definite article) are qualitative rather than identifying the Word as numerically identical with ho theos (“the God” with whom it was).",
   "Two-Gods vs identity problem: “The Word (Lógos) was with God (Theón), and the Word was God (Theós)” — is the same God mentioned twice, or two distinct divine beings? The channel's John 1 presentation and two-part video series (“Jesus is NOT the ‘Logos’ in John 1”) unpack why the Logos in John 1 is God's creative word/plan, not a second co-equal person.",
   "Prologue as later addition: Bart Ehrman notes that John 1:1–18 (the prologue) was likely added later by scribes — so even granting traditional Johannine authorship, the “beloved disciple” likely never wrote 1:1, 1:14, or 1:18."],
  ["https://www.areopage.net/colwell.pdf","https://www.youtube.com/watch?v=Kw3mVyDTLSo","https://www.youtube.com/watch?v=NzmVaXlUtTE","John 1:1–18"],
  [],
  {facts:[["Greek Terms","Λόγος · Θεόν (with God) · Θεός (qualitative)"],["Key Paper","areopage.net/colwell.pdf"],["Textual Criticism","Bart Ehrman: 1:1–18 likely later prologue"],["Verdict","Does not establish Nicene co-equality"]]}),
 sum:"Greek grammar (Colwell's Rule), the distinction between ho theos and anarthrous theos, and textual scholarship questioning John 1:1–18 undermine using John 1:1 for the Nicene Trinity."});

/* 2. John 20:28 */
const J20=DR('john-20-28-debunked','1368591200764039238');
card(TR+'d-dr-john-20-28-debunked',{
 title:"John 20:28: “My Lord and my God”",k:"Trinity · Context & Lexicon",blurb:"Thomas was blessed for believing the resurrection, and the Bible calls Moses, Satan, and humans “god”.",
 claim:"Thomas called Jesus “My Lord and my God” (John 20:28) and Jesus blessed him for believing he is God.",
 tree:N(J20,
  "Thomas called Jesus “My Lord and my God” and Jesus blessed him for believing he is God.",
  "Read vv. 24–29 in context: Thomas doubted the resurrection and demanded physical proof, so Jesus blessed him for believing he had risen — not for professing Nicene divinity. Moreover, “god” (theos / elohim) was applied broadly in Scripture to Moses, Satan, and righteous humans without making them consubstantial with the Father.",
  "Context & the loose biblical use of “god”",
  ["Read the context (John 20:24–29): Thomas refused to believe Jesus had risen without touching his wounds (v. 25). When shown the evidence (v. 27), he exclaimed “My Lord and my God!” Jesus's blessing in v. 29 is explicitly about believing the resurrection without seeing — not about calling him consubstantial God.",
   "“God” (theos) does not entail divine essence: the exact same Greek word theos is applied to Satan in 2 Corinthians 4:4 (“the god of this age”), and God Himself made Moses “as God” to Aaron and Pharaoh (Exodus 4:16; 7:1). Neither shares the Father's essence.",
   "Early Christians agreed: Justin Martyr (Dialogue with Trypho 124) cites Psalm 82 to say all humans are deemed worthy of becoming “gods” and sons of the Highest. As the Stanford Encyclopedia of Philosophy confirms, no theologian in the first three centuries was a Trinitarian — the Fathers viewed Jesus in a lesser, subordinate sense before Nicaea (4th c.)."],
  ["John 20:24–29","2 Corinthians 4:4","Exodus 4:16; 7:1","Psalm 82:6","Justin Martyr, Dialogue with Trypho 124","Stanford Encyclopedia of Philosophy: Trinity"],
  [],
  {facts:[["Context (vv. 24–29)","Blessed for believing the resurrection"],["Same word (theos)","Satan (2 Cor 4:4), Moses (Exod 7:1)"],["Early Church","Justin Martyr: men called “gods” (Ps 82)"],["Nicaea","Co-equality emerged in the 4th century"]],
   quotes:[{by:"Justin Martyr (on Psalm 82)",en:"Let the interpretation of the Psalm be held just as you wish, yet thereby it is demonstrated that all men are deemed worthy of becoming ‘gods,’ and of having power to become sons of the Highest.",ref:"Dialogue with Trypho, Chapter 124"}]}),
 sum:"John 20:29 blesses belief in the resurrection, not Nicene divinity, and Scripture applies “god” (theos) loosely to Moses, Satan, and humans without implying co-equal divine essence."});

/* 3. John 17:3 */
const J17=DR('john-17-3','1368593013735166102');
card(TR+'d-dr-john-17-3',{
 title:"John 17:3: “the only true God”",k:"Trinity · New Testament & Fathers",blurb:"The NT gives “only true God” exclusively to the Father — confirmed by Irenaeus and struggled over by Augustine.",
 claim:"Calling the Father “the only true God” in John 17:3 doesn't exclude Jesus from also being the true God.",
 tree:N(J17,
  "John 17:3 doesn't exclude Jesus or the Spirit from being “the only true God”.",
  "Across the entire New Testament, “the only/true God” is reserved exclusively for the Father — never once applied to Jesus or the Spirit. St. Irenaeus (student of Polycarp, student of John!) says calling anyone else “true God” besides the Father would make the apostles “teachers of transgression,” and even Augustine had to rearrange John's word order to cope with the text.",
  "NT exclusivity, Irenaeus & Augustine",
  ["Consistent New Testament pattern: John 17:3 (“that they know You, the only true God, and Jesus Christ whom You have sent”); 1 Thessalonians 1:9–10 (“serve the living and true God” = the Father); 1 John 5:20 (“He who is true… the true God”); 1 Corinthians 8:6 (“one God, the Father… and one Lord, Jesus Christ”); John 5:44 (“glory that comes from the only God”). Not once is Jesus or the Spirit titled “the true God.”",
   "St. Irenaeus (Against Heresies IV.1): Irenaeus was taught by Polycarp, who was taught by John himself — the closest possible witness to Johannine theology. Irenaeus writes that John 17:3 means no one besides the Father can be called True God, and if Jesus and the apostles taught otherwise they would have been “teachers of transgression.”",
   "St. Augustine's forced rewrite: Augustine (a later 4th/5th-century Trinitarian) struggled so heavily with John 17:3 that he claimed the “proper order” of the words differs from what John actually wrote — distorting the plain grammar to include Jesus and still leaving an awkward explanation for the Holy Spirit."],
  ["John 17:3; 5:44","1 Thessalonians 1:9–10","1 John 5:20","1 Corinthians 8:6","Irenaeus, Against Heresies IV.1 (newadvent.org/fathers/0103401.htm)","Augustine on John 17:3"],
  [],
  {facts:[["NT Pattern","5 passages reserve “only/true God” for the Father"],["Chain of Witness","John → Polycarp → Irenaeus (Against Heresies IV.1)"],["Irenaeus's Verdict","Calling another “true God” = transgression"],["Augustine","Had to reorder John's plain sentence"]],
   visual:{kind:'compare',
    left:{title:"Plain NT & Early Witness",items:["John 17:3: Father = “the only true God”","1 Cor 8:6: “one God, the Father” (distinguished from Jesus)","Irenaeus (IV.1): nobody else may be called “true God”"]},
    right:{title:"Later Trinitarian Workaround",items:["Claims “only true God” doesn't exclude Jesus or Spirit","Augustine had to rearrange John 17:3's word order","Still struggles to account for the Holy Spirit"]}}}),
 sum:"Five NT texts reserve “only/true God” exclusively for the Father, Irenaeus (student of Polycarp, student of John) confirms no one else holds that title, and Augustine had to alter the verse's word order to fit Trinitarianism."});

/* 4. Was Jesus worshipped? */
const JW=DR('jesus-is-worshipped','1398935078708707328');
card(TR+'d-dr-jesus-is-worshipped',{
 title:"Was Jesus worshipped? (latreuō vs proskyneō)",k:"Greek Lexicon · Matthew 2:2",blurb:"Jesus reserved latreuō strictly for God; proskyneō is royal reverence shown to kings and officials.",
 claim:"The Magi and others worshipped Jesus in the Gospels, proving he is God.",
 tree:N(JW,
  "People “worshipped” Jesus in Matthew 2:2 and elsewhere, so he must be God.",
  "English Bibles blur two very different Greek words. Latreuō (divine cultic worship) is used by Jesus exclusively for God and is never once applied to himself in the Gospels. What people offer Jesus (e.g. the Magi in Matthew 2:2) is proskyneō — bowing/prostration routinely shown to kings and high officials across the Old Testament.",
  "Latreuō vs proskyneō (Davies & Allison)",
  ["Latreuō (divine worship): Jesus uses this term strictly for God alone (Matt 4:10 / Luke 4:8) and it is never once directed to Jesus in the Gospels.",
   "Proskyneō (bowing/homage): used in Matthew 2:2 when the Magi bow before the newborn Messiah-king.",
   "Academic Christian consensus: in their standard commentary on Matthew, W. D. Davies and Dale Allison confirm that proskyneō is used throughout the Old Testament (LXX) for prostration before kings and high officials — fitting Jesus as the royal Messiah, not declaring him Almighty God."],
  ["Matthew 2:2; 4:10","Davies & Allison, Commentary on Matthew"],
  [],
  {visual:{kind:'compare',
   left:{title:"Latreuō (λατρεύω)",items:["Exclusive religious/divine worship","Applied by Jesus to God alone (Matt 4:10)","NEVER applied to Jesus in the Gospels"]},
   right:{title:"Proskyneō (προσκυνέω)",items:["Physical bowing / royal homage","Used in the OT for kings, prophets & officials","Matches the Magi greeting the “King of the Jews” (Matt 2:2)"]}}}),
 sum:"The Gospels never apply latreuō (divine worship) to Jesus — only proskyneō (royal prostration), which Davies & Allison confirm was standard OT homage to kings and dignitaries."});

/* 5. Refuting the Trinity: Logical Problem of the Trinity (LPT) */
const TRF=IA('trinity-refutation','1514394727565230170');
card(TR+'d-ia-trinity-refutation',{
 title:"The Logical Problem of the Trinity (LPT)",k:"Philosophy · Identity Logic",blurb:"Formal proof (P1–P5 & S1–S7) showing classical identity theory renders the Trinity formally inconsistent.",
 claim:"The Trinity is merely a mystery, not a logical contradiction.",
 tree:N(TRF,
  "Three persons who are each fully God yet only one God is a mystery, not a contradiction.",
  "Under classical identity theory (transitivity and indiscernibility of identicals), the seven core Trinitarian propositions (S1–S7) generate a formal contradiction: if Father, Son, and Spirit are each numerically identical with the one God, they must be numerically identical with each other — contradicting their mutual non-identity.",
  "The Formal Proof (P1–P5) & Proposition Set (S1–S7)",
  ["The 7 Trinitarian propositions (Set S): (S1) The Father is God; (S2) The Son is God; (S3) The Holy Spirit is God; (S4) The Father is not the Son; (S5) The Father is not the Holy Spirit; (S6) The Son is not the Holy Spirit; (S7) There is exactly one God.",
   "Three levels of inconsistency defined: (1) Explicitly inconsistent — one member is the direct negation of another; (2) Formally inconsistent — a contradiction is derivable using only rules of ordinary logic; (3) Implicitly inconsistent — adding necessarily true propositions yields a formally inconsistent set.",
   "Resources in channel: Call to Monotheism (call-to-monotheism.com/refuting_trinity), The Muslim Metaphysician (“The Logical Problem of the Trinity”, youtube.com/watch?v=oZElrA_aOK8), and Jake Brancatella (“Did the Early Church Fathers Believe in the Trinity?”, youtu.be/B0gWe46eEFY)."],
  ["https://www.call-to-monotheism.com/refuting_trinity","https://www.youtube.com/watch?v=oZElrA_aOK8","https://youtu.be/B0gWe46eEFY"],
  [],
  {visual:{kind:'steps',items:[
    ["P1 · Full identity","Father, Son, and Spirit are each fully and essentially identical with the one numerically singular divine essence."],
    ["P2 · One God","There exists exactly one God — a numerically unique, indivisible divine being."],
    ["P3 · Transitivity of identity","If two or more entities are each identical with the one numerically singular God, they must be numerically identical with one another."],
    ["P4 · Mutual non-identity","Father, Son, and Spirit are mutually non-identical, distinguished by irreducible personal properties and relations of origin."],
    ["P5 & Conclusion","Being both numerically identical and numerically non-identical in the same respect is a formal contradiction under classical logic."]
   ]}}),
 sum:"Applying classical transitivity of identity to the seven standard Trinitarian propositions (S1–S7) yields a formal logical contradiction, not a benign mystery."});

/* 6. Messianic prophecies: double standard */
const MP=IA('messianic-prophecies','1523412650393080008');
card(J+'d-ia-messianic-prophecies/t-pinned',{
 title:"Messianic prophecies: a double standard",k:"Hermeneutics · Typology",blurb:"Flexible typology for Jesus vs strict literalism for Muḥammad ﷺ — and why Muslims don't carry the OT burden.",
 claim:"Jesus clearly fulfills Old Testament messianic prophecies, whereas Islamic prophecies in the Bible fail strict literal reading.",
 tree:N(MP,
  "Old Testament prophecies clearly point to Jesus, not Muḥammad ﷺ.",
  "Christians rely on “typology” — detaching OT verses about Israel, a king, or local events (Hosea 11, Isaiah 53, Micah 5:1–2) from their original context as “foreshadowing” — yet abruptly switch to rigid literalism whenever Muslims cite Song of Solomon, Paran (Deut 33:2), or Arabia (Isaiah 42). And Muslims don't even depend on the OT to affirm Jesus as Messiah.",
  "Typology double standard & asymmetric burden",
  ["How Christian typology works: verses originally describing Israel, a local ruler, or historical siege (like Micah 5:1–2, Hosea 11:1, Isaiah 53) are lifted out of their historical/linguistic context and re-read as “types” of Jesus.",
   "The sudden switch to literalism: when Muslims examine the same Scriptures for references to Prophet Muḥammad ﷺ (Song of Solomon 5:16, Paran in Deuteronomy 33:2, Kedar/Sela in Isaiah 42), Christians abandon typology and demand strict literalism.",
   "Why Muslims carry no such burden: Muslims affirm ʿĪsā (ʿalayhi al-salām) as the Messiah because Allah directly revealed it in the Qurʾān, and we believe the biblical texts underwent alteration — so Jewish objections to NT proof-texts don't bind us. Christians, however, claim the OT is fully authentic and the NT explicitly cites Hosea 11, Isaiah 53, and Micah 5:1–2, so Christians alone bear the burden of defending them."],
  ["Micah 5:1–2 (RSV)","Hosea 11:1","Isaiah 53; 42","Deuteronomy 33:2","Song of Solomon 5:16"],
  [],
  {visual:{kind:'compare',
    left:{title:"Christians reading Jesus into OT",items:["Uses flexible “typology”","Sets aside original historical context (Hosea 11, Micah 5, Isa 53)","Bound to defend NT citations as infallible"]},
    right:{title:"Christians reacting to Muḥammad ﷺ",items:["Abruptly switches to strict literalism","Rejects Arabian geography (Paran, Kedar) & typology","Meanwhile Muslims don't need OT proof-texts to affirm Jesus as Messiah"]}},
   quotes:[{by:"Micah 5:1–2 (RSV)",en:"Now you are walled about with a wall; siege is laid against us; with a rod they strike upon the cheek the ruler of Israel. But you, O Bethlehem Ephrathah… from you shall come forth for me one who is to be ruler in Israel.",ref:"Micah 5:1–2"}]}),
 sum:"Christians use flexible typology for Jesus while demanding strict literalism against Muḥammad ﷺ — and since Muslims affirm Jesus's messiahship via the Qurʾān, only Christians bear the burden of defending strained OT proof-texts."});

/* 7. Isaiah 53 & 8. Jesus raised alive (structured with PDF notes) */
card(J+'d-ia-messianic-prophecies/t-isaiah-53-islamic-prophecy',{
 title:"Isaiah 53: an Islamic prophecy of 4:157?",k:"Prophecy · Slide Deck",blurb:"Not originally messianic — and its 1st-century messianic reading aligns with Jesus being saved alive.",
 claim:"Isaiah 53 unambiguously predicts Jesus's vicarious crucifixion for humanity's sins.",
 tree:N(MP,
  "Isaiah 53 proves the Messiah had to be crucified as a sacrifice for sins.",
  "Two-stage refutation from the channel's slide deck (Isaiah 53 Full Refutation.pdf): (1) In its original context and earliest reception, Isaiah 53 was not messianic at all; (2) when a messianic interpretation later emerged by Jesus's era (as seen with Judah the Teacher of Righteousness), it aligns with the Islamic account of 4:157 — a righteous servant appearing to suffer yet delivered alive by God.",
  "Original context vs 1st-century reading",
  ["Stage 1 (Historical context): Isaiah 53 itself is part of the Servant Songs referring primarily to Israel, not a dying-and-rising divine Messiah, and its earliest interpretations were non-messianic.",
   "Stage 2 (1st-century messianic expectation): even taking the later messianic reading current in the 1st century — paralleled by how Judah the Teacher of Righteousness applied Isaiah 53 to himself — the servant's vindication and “prolonging his days” aligns with Qurʾān 4:157 rather than Trinitarian blood atonement.",
   "Slide deck attached in channel: Isaiah 53 Full Refutation.pdf (11.26 MB, cross-linked with Jesus Raised to Heaven Alive — to extract key slides into shots/)."],
  ["Isaiah 53","Qurʾān 4:157","Isaiah 53 Full Refutation.pdf"]),
 sum:"Isaiah 53 was not originally messianic, and its later 1st-century messianic reading harmonises with God saving His righteous servant alive (Qurʾān 4:157) rather than Trinitarian crucifixion."});

card(J+'d-ia-messianic-prophecies/t-jesus-raised-to-heaven-alive',{
 title:"Jesus raised to heaven alive (OT & early Christians)",k:"Crucifixion · Slide Deck",blurb:"OT patterns, Jesus's own prophecies, and earliest Christian witnesses to his rescue while appearing to suffer.",
 claim:"Both the Old Testament and earliest Christianity unanimously taught Jesus died on the cross.",
 tree:N(MP,
  "Nothing in the OT or early Christianity supports Jesus being raised to heaven alive instead of dying.",
  "The channel's slide deck (Jesus Raised to Heaven Alive (4).pdf, 9.98 MB) documents Old Testament passages, Jesus's own statements, Dead Sea Scrolls parallels (Judah the Teacher of Righteousness applying Isaiah 53), and earliest Christian attestations pointing to a righteous figure raised to heaven alive while appearing to suffer.",
  "Key lines of evidence",
  ["Old Testament & Gospel expectation: examines OT deliverance passages and Jesus's own words anticipating divine rescue rather than forsaken death.",
   "Second-Temple parallel: pairs directly with the Isaiah 53 deck showing how Judah the Teacher of Righteousness applied Isaiah 53 in a framework matching Islamic deliverance.",
   "Slide deck in channel: Jesus Raised to Heaven Alive (4).pdf (9.98 MB — to extract key slides into shots/)."],
  ["Qurʾān 4:157–158","Isaiah 53","Jesus Raised to Heaven Alive (4).pdf"]),
 sum:"OT deliverance motifs, Second-Temple parallels (Teacher of Righteousness), and early Christian testimonies corroborate the Qurʾānic account of Jesus being raised alive."});

/* 9. Mark 1:1–3 */
const M1=DR('mark-1-1-3-debunked','1368590776958980096');
card(J+'d-dr-mark-1-1-3-debunked',{
 title:"Mark 1:1–3: “Prepare the way of the Lord”",k:"Gospel of Mark · Shaliach",blurb:"Spirit-empowerment at baptism (1:10), divine agency (Exodus 7:17–20), and Mark 10:18.",
 claim:"Mark 1:1–3 quotes Isaiah 40:3 (“Prepare the way of the LORD”) and applies it to Jesus, proving Jesus is YHWH.",
 tree:N(M1,
  "John prepares the way of “the Lord” (YHWH) and Jesus walks down that road — so Mark thinks Jesus is YHWH.",
  "Two independent refutations dismantle this: (1) In Mark 1:4–10, John's baptism is “for the forgiveness of sins” and brings God's Spirit upon Jesus — which empowers him like the Tabernacle/Temple without making him God; (2) Biblical shaliach (divine agency) routinely attributes God's actions to His human agent (e.g. Exodus 7:17–20, where God says “the staff in MY hand” yet Aaron holds it!).",
  "Baptism, Spirit & Shaliach (Divine Agency)",
  ["Response 1 — Spirit-empowerment & baptism for sins: Mark 1:1–3 prepares for God's Spirit to descend upon Jesus at baptism (Mark 1:10) to empower his ministry. Crucially, Mark 1:4 explicitly defines John's baptism as “for the forgiveness of sins” — impossible if Mark viewed Jesus as sinless YHWH. And God's Spirit dwelling upon someone never makes them God, just as God's presence indwelling the Tabernacle and Temple never made those structures divine.",
   "Response 2 — Shaliach (Divine Agency, Exodus 7:17–20): in biblical idiom, when an appointed agent acts for God, God speaks of the agent's action as His own. In Exodus 7:17 God declares “with the staff that is in MY hand I will strike the Nile” — and two verses later tells Moses to tell AARON to stretch out his staff (v. 19)! By the Christian argument on Mark 1:3, Aaron would have to be YHWH.",
   "Clear verses interpret implicit ones: Mark 10:18 (“Why do you call me good? No one is good except God alone”) is vastly clearer than an indirect OT allusion and proves Mark views Jesus as ontologically subordinate to the Father."],
  ["Mark 1:1–10; 10:18","Isaiah 40:3","Exodus 7:17–20"],
  [],
  {quotes:[{by:"Exodus 7:17, 19 (Shaliach parallel)",en:"Thus says the LORD… ‘with the staff that is in my hand I will strike the water that is in the Nile’… And the LORD said to Moses, ‘Say to Aaron, Take your staff and stretch out your hand over the waters of Egypt.’",ref:"Exodus 7:17–19"}]}),
 sum:"Mark 1:4–10 shows a Spirit-empowered human prophet receiving a baptism of forgiveness, biblical shaliach (Exodus 7:17–20) explains acting as YHWH's agent, and Mark 10:18 explicitly distinguishes Jesus from God."});

/* 10. Jesus is called “Lord” (kyrios) */
const KY=DR('jesus-is-called-lord-debunked','1368590745375608922');
card(J+'d-dr-jesus-is-called-lord-debunked',{
 title:"Jesus is called “Lord” (kyrios)",k:"Greek & Hebrew · Psalm 110:1",blurb:"The LXX collapses YHWH, Adonai, and human adon all into kyrios — and Psalm 110:1's suffix is just grammar.",
 claim:"The New Testament calls Jesus kyrios (“Lord”), the Septuagint word for YHWH — so Jesus is YHWH.",
 tree:N(KY,
  "The Septuagint translates YHWH as kyrios, and the NT calls Jesus kyrios — therefore Jesus is YHWH.",
  "The Septuagint collapses THREE distinct Hebrew words — YHWH (H3068, divine), Adonai (H136, divine), and adon (H113, human master/sir, used of Abraham and David!) — into the single Greek word kyrios (G2962). Calling someone kyrios in Greek cannot by itself prove divinity.",
  "Three Hebrew words → one Greek word",
  ["Psalm 110:1 exposes the equivocation: Hebrew says “YHWH said to my adon (human lord)” — yet the Greek LXX renders BOTH with the same word: “The kyrios said to my kyriō.” The ending difference (kyrios vs kyriō) is purely grammatical case (nominative subject vs dative indirect object), NOT divine vs human!",
   "Lexicon audit (Strong's & BDB): Strong's H113 (adon) explicitly notes it refers to human lords and masters as well as God; in Brown-Driver-Briggs, the passages cited under “Adonay proper name of God” map to H136 (Adonai), not H113 (adon). Reading divine YHWH-ship into every NT kyrios imports a later dogma into ambiguous Greek.",
   "Theological knockout (containment): Solomon establishes that YHWH cannot be contained by heaven or earth (1 Kings 8:27). Yet early Church Fathers identified the pre-incarnate Jesus with the localized “Angel of the Lord” — meaning even BEFORE the incarnation, Jesus lacked a necessary attribute of YHWH."],
  ["Psalm 110:1 (LXX & Hebrew)","Strong's G2962, H113, H136, H3068","Brown-Driver-Briggs","1 Kings 8:27"],
  [],
  {facts:[["YHWH (H3068)","Divine Name → LXX: kyrios"],["Adonai (H136)","Divine Lord → LXX: kyrios"],["Adon (H113)","Human master (Abraham, David) → LXX: kyrios"],["Psalm 110:1","kyrios vs kyriō = case only (nom. vs dat.)"]]}),
 sum:"Greek kyrios translates human adon (Abraham, David, Psalm 110:1) as well as YHWH, so calling Jesus kyrios never proves he is YHWH — and early Fathers' localized Angel-of-the-Lord Christology contradicts YHWH's uncontainability."});

/* 11. Mark 5:30 */
const M5=DR('mark-5-30','1368592584636760105');
card(J+'d-dr-mark-5-30',{
 title:"Mark 5:30: “Who touched my clothes?”",k:"Gospel of Mark · Attributes",blurb:"Limited knowledge AND healing power leaving him involuntarily both contradict an omniscient, sovereign deity.",
 claim:"Jesus healing the bleeding woman in Mark 5 proves his divine power.",
 tree:N(M5,
  "Power went out from Jesus and healed the woman in Mark 5:30 — proving he is Almighty God.",
  "Mark 5:30 actually undermines Jesus's divinity on TWO fronts: (1) he genuinely did not know who touched him (“Who touched my clothes?”), contradicting omniscience; and (2) power went out from him involuntarily via the woman's faith rather than by his sovereign divine will.",
  "Two problems for divine Christology",
  ["1) Limited knowledge: “At once Jesus realized that power had gone out from him. He turned around in the crowd and asked, ‘Who touched my clothes?’” If Jesus is fully God and God is omniscient, genuine ignorance and needing information contradict his divinity. Appealing to “his human nature” creates a fatal dilemma: was his divine nature switched off? If he remains fully divine, lacking knowledge contradicts that nature.",
   "2) Involuntary / external power: realizing power had already left him shows the miracle was not an autonomous act of an all-powerful, self-sustaining deity exercising sovereign will — it operated through external factors (God's permission triggered by the woman's faith), fitting a prophet empowered by God rather than God Himself."],
  ["Mark 5:30"],
  [],
  {facts:[["Verse","Mark 5:30"],["Issue 1","Genuine ignorance: “Who touched my clothes?”"],["Issue 2","Power left involuntarily without sovereign intent"],["Dilemma","“Human nature” either splits Christ or switches off divinity"]]}),
 sum:"Mark 5:30 shows both genuine ignorance and involuntary outflow of healing power — traits of a God-empowered prophet, not an omniscient, self-sustaining deity."});

/* 12. Mark 10:18 */
const M10=DR('mark-10-18','1368591752394444800');
card(J+'d-dr-mark-10-18',{
 title:"Mark 10:18: “Why do you call me good?”",k:"Gospel of Mark · Subordination",blurb:"Jesus rejects the title “good” and directs it exclusively to God alone — backed by Origen and Hippolytus.",
 claim:"When Jesus asked “Why do you call me good? No one is good except God alone” (Mark 10:18), he was hinting that he IS God.",
 tree:N(M10,
  "Jesus wasn't denying he is God in Mark 10:18 — he was testing the man to make him realise Jesus is God.",
  "Read the plain words: Jesus immediately deflects the title “good” away from himself to “God alone” — distinguishing himself from God. Early Church Fathers like Origen (On Prayer) and Hippolytus (Refutation 5.2) took Mark 10:18 at face value as proof that the Father alone is uniquely good and supreme.",
  "Plain text & early patristic witness",
  ["The text itself: “Why do you call me good? No one is good except God alone” (Mark 10:18). Turning a plain denial into a hidden claim of divinity reverses the sentence's literal meaning.",
   "Early Fathers confirm it: Origen cited Mark 10:18 to argue Christians must pray to the Father alone, not to the Son; Hippolytus (Refutation 5.2) explicitly reads “One is good” as referring strictly to “my Father which is in the heavens.”",
   "Channel resources: Ali Dawah Bootcamp Episode 1 on Mark 10:18 (youtu.be/gmaFCMKeDBk) and Presentation 18.pptx (5.21 MB — to extract key slides)."],
  ["Mark 10:18","Luke 18:19","Origen, On Prayer","Hippolytus, Refutation 5.2","https://youtu.be/gmaFCMKeDBk"]),
 sum:"Mark 10:18 explicitly distinguishes Jesus from “God alone” — read as ontological subordination by early Fathers like Origen and Hippolytus, never as a veiled claim to be God."});

/* 13. Matthew 1:23 (Immanuel) */
const MT1=DR('matthew','1397832084130758727');
card(J+'d-dr-matthew',{
 title:"Matthew 1:23: “Immanuel, God with us”",k:"Gospel of Matthew · Isaiah 7:14",blurb:"A human child under King Ahaz bore the name first, and Hebrew theophoric names (like Elijah) are symbolic.",
 claim:"Matthew 1:23 quotes Isaiah 7:14 calling Jesus “Immanuel (God with us)”, proving Jesus is literally God.",
 tree:N(MT1,
  "Isaiah 7:14 / Matthew 1:23 calls Jesus “Immanuel”, meaning “God with us” — so Jesus is literally God.",
  "Two decisive refutations (backed by Davies & Allison): (1) Isaiah 7:14's original sign was a human boy born in King Ahaz's day who was obviously NOT God; (2) Hebrew theophoric names containing God's name (like Elijah = “My God is YHWH”) are symbolic declarations of God's presence, never literal claims of deity.",
  "Original Ahaz context & Hebrew names",
  ["1) Original context under King Ahaz: Isaiah 7:14 promised a sign child to King Ahaz in the 8th century BCE. Even if Matthew posits a “dual fulfillment,” the first fulfillment involved a human child named Immanuel who was NOT God — making it far-fetched to claim a second fulfillment suddenly turns the name into ontological deity.",
   "2) Hebrew theophoric names aren't literal: Hebrew names routinely embed “El” or “Yah” — e.g., Elijah (“My God is YHWH”) or Ishmael (“God hears”) — without making those prophets God. As Christian scholars W. D. Davies and Dale Allison note in their Matthew commentary, “God with us” expresses God's spiritual presence empowering Jesus's ministry, not Jesus being identical to the God of Israel.",
   "Bonus note on LXX “Lord Lord”: Paul Joyce's Commentary on Ezekiel notes the original Septuagint practice likely rendered Hebrew “Lord GOD” as a single kyrios, not doubled — undercutting “Lord Lord = God” arguments too."],
  ["Matthew 1:23","Isaiah 7:14","Davies & Allison, Commentary on Matthew","Paul Joyce, Commentary on Ezekiel"],
  [],
  {facts:[["Isaiah 7:14","Original sign: human child under King Ahaz"],["Hebrew Names","Elijah = “My God is YHWH” (symbolic)"],["Scholars","Davies & Allison: God's presence, not deity"],["LXX Note","Paul Joyce on Ezekiel: single kyrios"]]}),
 sum:"The original Immanuel child under King Ahaz was not God, and Hebrew theophoric names express God's presence symbolically (Davies & Allison), not literal incarnation."});

/* 14. Daniel 7 & Inferring the Trinity (6,844 chars!) */
const DM=DR('mark','1396880233910632508');
card(J+'d-dr-mark',{
 title:"Daniel 7 & inferring the Trinity from the Bible",k:"Trinity · Philosophical Critique",blurb:"Critiquing Michael Heiser's “Cloud Rider” & why all 4 Trinitarian Bible-inference templates fail.",
 claim:"Even if the Trinity isn't stated explicitly, it can be deduced from titles, actions, qualities, and OT prophecies like Daniel 7's “rider on the clouds”.",
 tree:N(DM,
  "The Bible implies the Trinity through Jesus's titles, actions, qualities, and OT Yahweh prophecies like Daniel 7.",
  "The New Testament contains no explicit Trinitarian doctrine — and as the Stanford Encyclopedia of Philosophy's analysis (preserved in the channel) shows, every deductive template used to infer it fails from ambiguity, biblical counterexamples, divine agency, and collapse into modalism.",
  "Why the 4 Trinitarian inference templates fail",
  ["Template 1 (Action A → Divine): “S forgave sins / received worship / raised the dead → S is fully divine.” Fails because Scripture gives counterexamples of humans authorised by God to forgive sins, raise the dead, or receive homage without being divine.",
   "Template 2 (Title F → Divine): “S is called god / lord / saviour → S is fully divine.” Fails because humans and angels receive titles like “gods” (Ps 82), “lord” (Ps 110:1), and “saviours” (Neh 9:27) without being God.",
   "Template 3 (Quality Q → Divine): “S has sinlessness / omniscience / miracle power → S is fully divine.” Fails on Premise 1 itself: Jesus explicitly denied omniscience (Mark 13:32), and miracle power is granted to prophets.",
   "Core ambiguity of “fully divine”: apologetic arguments leave “fully divine” undefined (identical to God? sharing a substance? a mode of God?) while Catholic/Orthodox scholars themselves admit the Trinity cannot be derived from Scripture alone without later Church authority.",
   "Daniel 7 (“Rider on the Clouds”) & Mark 12:35–40: the channel links the full critique of Dr. Michael Heiser's Divine Council reading of Daniel 7 (letthetruthcomeoutblog.wordpress.com/2019/04/28/the-rider-on-the-clouds-a-critique-of-dr-michael-heisers-view-of-daniel-7/) plus centuries of forgotten Unitarian refutations (Clarke, Crellius, Lardner, Norton, Priestley)."],
  ["Daniel 7:13–14","Mark 12:35–40","Stanford Encyclopedia of Philosophy: Trinity","https://letthetruthcomeoutblog.wordpress.com/2019/04/28/the-rider-on-the-clouds-a-critique-of-dr-michael-heisers-view-of-daniel-7/"],
  [
   N(DM,"What about OT prophecies saying YHWH will do X, which the NT applies to Jesus?",
    "That inference is logically INVALID — and even if valid, it proves modalism (Jesus = the Father), not the Trinity!",
    "The Bush / General Smith agency refutation",
    ["Agency invalidates the syllogism: the prediction “George W. Bush will conquer Iraq” is fulfilled by General Smith's military campaign — yet General Smith is obviously NOT George W. Bush! Smith acts as Bush's appointed agent, just as YHWH acts through His servant Jesus.",
     "Collapse into modalism: if “fulfilled by Jesus” meant Jesus is numerically identical to YHWH, and the Father is ALSO numerically identical to YHWH, then by transitivity Jesus is numerically identical to the Father — destroying the Trinity itself!"],
    ["Stanford Encyclopedia of Philosophy: Trinity (History & Biblical Inference)"])
  ],
  {visual:{kind:'steps',items:[
    ["Action template","Humans in Scripture also perform miracles, forgive by authority, and receive homage."],
    ["Title template","Scripture applies “god”, “lord”, and “saviour” to non-divine humans and angels."],
    ["Quality template","Jesus explicitly denies omniscience (Mark 13:32) and independent power (John 5:19)."],
    ["OT-Prophecy template","Invalid (Bush vs General Smith agency) — and if valid, collapses Father and Son into modalism."]
   ]}}),
 sum:"The NT teaches no explicit Trinity, and all four deductive templates (actions, titles, qualities, and OT prophecies like Daniel 7) fail due to biblical counterexamples, divine agency, and collapse into modalism."});

/* 15. Mark 2: Jesus reads hearts */
const M2=DR('mark-2-only-god-searches-hearts','1399052391525126245');
card(J+'d-dr-mark-2-only-god-searches-hearts',{
 title:"Mark 2: Jesus reads hearts",k:"Second Temple Judaism",blurb:"The pre-Christian Psalms of Solomon expected a purely human, non-divine Messiah who reads sinners' hearts.",
 claim:"Only God knows human hearts (1 Kings 8:39), so Jesus knowing people's thoughts in Mark 2:8 proves he is God.",
 tree:N(M2,
  "Only God searches the heart — Jesus knew the scribes' thoughts in Mark 2:8, so Jesus must be God.",
  "Pre-Christian Jewish texts refute that assumption directly: the Psalms of Solomon — written by a strictly monotheistic Jewish community who NEVER believed the Messiah would be God — explicitly expected the coming human Messiah to read and expose the hearts of sinners.",
  "Psalms of Solomon (Jewish Messianic expectation)",
  ["In the Psalms of Solomon (1st century BCE, ch. 17), a devout Jewish community with zero belief in a divine Messiah anticipated that God would empower the Messiah to discern the thoughts and hearts of sinners.",
   "God revealing inner thoughts to a prophet or Messiah (just as He revealed Gehazi's secret sin to Elisha in 2 Kings 5:26!) is prophetic revelation, not independent omniscience."],
  ["Mark 2:8","Psalms of Solomon 17","2 Kings 5:26"],
  [],
  {facts:[["Text","Psalms of Solomon (1st c. BCE)"],["Community","Strictly monotheistic Jews"],["Expectation","Human Messiah reads sinners' hearts"],["Conclusion","Discerning hearts ≠ being God"]]}),
 sum:"The pre-Christian Jewish Psalms of Solomon expected a non-divine Messiah empowered to read sinners' hearts — showing Mark 2:8 is a messianic/prophetic gift, not proof of deity."});

/* 16. John's audience keeps misunderstanding Jesus */
const JU=DR('jews-can-t-be-trusted-in-john','1399270096886566982');
card(J+'d-dr-jews-can-t-be-trusted-in-john',{
 title:"John's audience keeps misunderstanding Jesus",k:"Gospel of John · Literary Pattern",blurb:"Time after time in John (chapters 2–12), hostile opponents misread Jesus's words — including John 10:30.",
 claim:"The Jews picked up stones in John 10:33 because they understood Jesus was claiming to be God.",
 tree:N(JU,
  "The Jews in John knew what Jesus meant — they accused him of claiming to be God!",
  "Throughout the Gospel of John, Jesus's hostile opponents are portrayed as chronically misunderstanding his figurative speech (more than 30 times!). In John 10:30–36 Jesus doesn't agree with their accusation — he explicitly corrects them by quoting Psalm 82.",
  "John's recurring misunderstanding pattern (Ch. 9–12)",
  ["John 9 (#25–26): opponents misread Sabbath healing as breaking the Law, and Jesus has to correct their reading of his words on spiritual blindness.",
   "John 10:6 (#27): the narrator explicitly remarks that the Pharisees “did not understand what he was saying to them” because he spoke in figurative language.",
   "John 10:19–25 (#28–29): they accuse him of being demon-possessed and raving mad, and still fail to grasp his plain messianic claim.",
   "John 10:30–36 (#30): they misread “I and the Father are one” as a claim to deity — and Jesus immediately refutes them using Psalm 82 (“If he called them ‘gods’ to whom the word of God came…”) and clarifies his title as “God's Son” sent by the Father.",
   "John 12 (#31): the crowd still doesn't understand what he means or what “the Son of Man” is. Relying on hostile opponents' accusations as infallible theology turns John's own narrative upside down."],
  ["John 9; 10:6, 19–36; 12:34","Psalm 82:6"]),
 sum:"John repeatedly depicts Jesus's opponents as misunderstanding his figurative words across chapters 2–12; in John 10:30–36 Jesus actively refutes their charge using Psalm 82 rather than endorsing it."});

/* 17. The disciples bowed to Jesus (proskyneō & Rev 22:9) */
const DW=DR('disciples-worship-jesus-debunked','1368591010883698768');
card(J+'d-dr-disciples-worship-jesus-debunked',{
 title:"The disciples bowed to Jesus (proskyneō & Rev 22)",k:"Greek · Prostration",blurb:"Respectful prostration (proskyneō) was lawful in earlier prophetic laws — and Revelation 22:9 backfires on critics.",
 claim:"The disciples “worshipped” Jesus in the Gospels, and Revelation 22:9 proves proskyneō belongs only to God.",
 tree:N(DW,
  "The disciples “worshipped” Jesus (prosekynēsan), proving he accepted divine worship.",
  "Rendering proskyneō as “worship” only for Jesus while translating the exact same word as “bowed/paid homage” for kings is translation bias. Prostration of reverence was lawful in earlier prophetic laws (angels to Ādam, Yūsuf's parents to Yūsuf, 12:100) before Islam reserved all prostration exclusively for Allah.",
  "Prostration of reverence in earlier laws",
  ["Ibn Kathīr on Qurʾān 12:100: “In the laws of these and previous Prophets, it was allowed for people to prostrate before men of authority when they met them. This practice was allowed from the law of Ādam until the law of ʿĪsā (peace be upon them), and was later prohibited in our law. Islam made prostration exclusively for Allah Alone.”",
   "Academic translations expose the bias: scholarly translations recognise proskyneō as physical prostration/reverence — completely consistent with the Islamic view of Jesus as a revered prophet, never claiming divinity."],
  ["Tafsīr Ibn Kathīr 12:100","Qurʾān 2:34; 12:100","Matthew 14:33; 28:9"],
  [
   N(DW,"What about Revelation 22:8–9, where an angel stops John from doing proskyneō to him?",
    "Revelation 22:8–9 fails on three counts — and actually BACKFIRES on the critic, because it proves John himself did NOT think proskyneō was exclusive to God!",
    "Three refutations of the Revelation 22:9 objection",
    ["1) Elevated rank of mankind: the Qurʾān states God commanded angels to prostrate to Ādam and honoured humanity above them — so an angel bowing to a prophet fits, whereas a prophet/human bowing to an angel is inverted. Revelation 22 says nothing against respectful homage between humans.",
     "2) Exact wording: the angel says “Don't do that!… Worship God” (Rev 22:9) — pointing John to God as worthier than an angel, not laying down a blanket rule defining every instance of proskyneō as divine worship.",
     "3) Context backfires completely: John — AFTER Jesus's entire earthly ministry! — tried to perform proskyneō before an angel (twice: Rev 19:10 and 22:8!). That proves beyond doubt that the apostle John himself did NOT view proskyneō as an act reserved exclusively for God. Therefore when the disciples did proskyneō to Jesus, they were not treating him as God!"],
    ["Revelation 19:10; 22:8–9"])
  ]),
 sum:"Proskyneō was lawful respectful prostration in pre-Islamic prophetic laws (Ibn Kathīr 12:100), and John bowing to an angel in Revelation 22 proves even the apostles didn't view proskyneō as exclusive to God."});

/* 18. Jesus will judge: does that make him God? */
const JJ=IA('jesus-will-judge','1522348416263393340');
card(J+'d-ia-jesus-will-judge',{
 title:"Jesus will judge: does that make him God?",k:"Ḥadīth · Sharīʿa Judiciary",blurb:"Ruling earth by Allah's Sharīʿa (like a qāḍī or prophet) is completely different from Allah's Final Judgement.",
 claim:"Islamic ḥadīth say Jesus will return as a “just judge” — proving Islam accidentally gives Jesus God's divine authority to judge.",
 tree:N(JJ,
  "Islamic ḥadīth say ʿĪsā will descend as a “just judge” — only God is the Judge, so Jesus must be God!",
  "That confuses earthly judicial governance (qaḍāʾ — practiced by Prophet Muḥammad ﷺ, earlier prophets, and every Islamic judge/qāḍī) with Allah's exclusive Final Judgement on the Day of Resurrection deciding Paradise and Hell. When ʿĪsā returns, he rules strictly by Allah's Sharīʿa — breaking the cross and defeating the Dajjāl.",
  "Earthly Sharīʿa judge vs Allah's Final Judgement",
  ["Two completely different kinds of judgement: Islam has a legal judiciary (quḍāh) who adjudicate disputes by revelation, and Prophet Muḥammad ﷺ judged cases throughout his life. Only Allah decides every soul's eternal fate (Jannah or Jahannam) on the Day of Judgement.",
   "End-times context (Muslim 1731a & Bukhārī 6788): the Prophet ﷺ warned of end-times Dajjāl-like liars spreading unheard-of falsehoods and fitna. Jesus's return defeats the Dajjāl, restores pure tawḥīd, and enforces Allah's revelation — proving he is a righteous prophet obeying Allah, not God.",
   "Musnad Aḥmad 10944 (16/550): Abū Hurayra narrated that the Messenger ﷺ said ʿĪsā ibn Maryam will descend as a “just, fair Judge (ḥakam ʿadl) — he will break the cross, kill the swine, and abolish the jizya.” Breaking the cross and enforcing Islamic law is an explicit extension of the Sharīʿa of Muḥammad ﷺ — the opposite of Christian divinity!"],
  ["Musnad Aḥmad 16/550 (#10944)","Bukhārī 2476, 6788","Muslim 155, 1731a"],
  [],
  {visual:{kind:'compare',
   left:{title:"Earthly Judge (Ḥakam / Qāḍī)",items:["Judges human disputes by Allah's Sharīʿa","Role shared by prophets (Dāwūd, Sulaymān, Muḥammad ﷺ) & qāḍīs","ʿĪsā breaks the cross, defeats Dajjāl, implements Sharīʿa"]},
   right:{title:"Allah's Final Judgement",items:["Exclusive to Allah Alone on the Day of Judgement","Determines every soul's eternal abode (Jannah / Jahannam)","Never shared with Jesus or any prophet"]}},
   quotes:[{by:"Prophet Muḥammad ﷺ (Musnad Aḥmad 10944)",en:"By He in Whose Hand is my soul: ʿĪsā ibn Maryam will soon descend among you as a just, fair Judge. He will break the cross, kill the swine, and abolish the jizya.",ref:"Musnad Aḥmad 16/550, #10944"}]}),
 sum:"ʿĪsā returning as a “just judge” means governing earth by Allah's Sharīʿa (breaking the cross and defeating Dajjāl), never sharing Allah's exclusive authority on the Day of Judgement."});

/* 19. Mark 13:32: the Son doesn't know the Hour */
const KH=IA('general-refutations › Jesus does not know the hour','1524626042432651314');
card('christianity/bible/d-ia-general-refutations/t-jesus-does-not-know-the-hour',{
 title:"Mark 13:32: the Son doesn't know the Hour",k:"Christology · Omniscience",blurb:"“Not even the angels, nor the Son, but only the Father” — a plain hierarchy of knowledge.",
 claim:"Jesus is fully omniscient God, and Mark 13:32 / Matthew 24:36 doesn't undermine his divine knowledge.",
 tree:N(KH,
  "Jesus only lacked knowledge of the Hour “according to his human nature” — he still knew it as God.",
  "Matthew 24:36 and Mark 13:32 explicitly rank knowledge in a clear hierarchy: angels < the Son < “only the Father.” Saying “only the Father” excludes the Son directly — and claiming the Son both knew and didn't know at the same time breaks under the qua contradiction (see Trinity › The qua answer breaks).",
  "An explicit hierarchy of knowledge",
  ["Unmistakable exclusion: “But about that day or hour no one knows, not even the angels in heaven, nor the Son, but only the Father” (Mark 13:32; Matt 24:36). Jesus places himself alongside angels below the Father.",
   "Early Fathers didn't use the later dodge: Irenaeus (Against Heresies 2.28) explicitly cited Mark 13:32 to affirm that the Father is genuinely greater in knowledge than the Son, reflecting an earlier, simpler monotheistic framework before later creedal reinterpretations obscured Jesus's plain words."],
  ["Mark 13:32","Matthew 24:36","Irenaeus, Against Heresies 2.28"],
  [],
  {quotes:[{by:"Jesus (Mark 13:32 / Matthew 24:36)",en:"But about that day or hour no one knows, not even the angels in heaven, nor the Son, but only the Father.",ref:"Mark 13:32"}]}),
 sum:"“Nor the Son, but only the Father” states an explicit hierarchy of knowledge that contradicts co-equal omniscience and reflects early monotheistic Christology before later creeds."});

/* 20. Word of Allah and a spirit from Him (4:171) */
const WS=DR('jesus-is-the-word-and-spirit-of-allah','1366712221501100042');
card(J+'d-dr-jesus-is-the-word-and-spirit-of-allah',{
 title:"“Word of Allah and a spirit from Him” (4:171)",k:"Qurʾān 4:171 · Imām Aḥmad",blurb:"Created by Allah's command “Be!” (3:59) and honoured like Ādam — in the very verse that forbids saying “Three”.",
 claim:"Qurʾān 4:171 calls Jesus “His Word” and “a spirit from Him”, which makes Jesus divine in Islam.",
 tree:N(WS,
  "Even the Qurʾān calls Jesus “Allah's Word” and “a spirit from Him” (4:171) — proving he shares God's divine nature!",
  "Read the very same verse (4:171): it opens by commanding “Do not exaggerate in your religion” and ends “Do not say ‘Three’ — Allah is only One God!” As Imām Aḥmad ibn Ḥanbal explained, Jesus is called a “Word” because he was created by Allah's creative command “Be!” (3:59), and “a spirit from Him” is a possessive of honour — just like Ādam (15:29), the “she-camel of Allah”, and the “House of Allah”.",
  "Imām Aḥmad ibn Ḥanbal & Qurʾān 4:171 in context",
  ["Read 4:171 completely: “The Messiah, Jesus son of Mary, was only a messenger of Allah, and His word which He directed to Mary, and a spirit [created] from Him… and do not say ‘Three’; desist — Allah is but one God.” Using an explicitly anti-Trinitarian verse to prove the Trinity ignores its own words.",
   "Why “Word” (Kalimatullāh)? Qurʾān 3:59 explains it directly: “Indeed, the likeness of Jesus with Allah is as the likeness of Ādam: He created him from dust, then said to him ‘Be!’ and he was.” Jesus came into existence through Allah's spoken command without a father — Imām Aḥmad ibn Ḥanbal refuted Christians who confused the created messenger with Allah's uncreated attribute of Speech.",
   "Why “a spirit from Him” (rūḥun minhu)? Arabic iḍāfa (attribution to Allah) expresses honour and creation, never part of God's essence — just as Allah breathed “of My spirit” into Ādam (15:29), calls the Kaʿba “My House” (22:26), and calls Ṣāliḥ's camel “the she-camel of Allah” (91:13). See VegitoWrath thread (x.com/vegitowrath/status/1591455924048347136) and video (youtu.be/ul0KDbduszg)."],
  ["Qurʾān 4:171; 3:59; 15:29","Imām Aḥmad ibn Ḥanbal","https://x.com/vegitowrath/status/1591455924048347136","https://youtu.be/ul0KDbduszg"]),
 sum:"4:171 explicitly forbids calling Jesus God or saying “Three”: “Word” refers to his creation by Allah's command “Be!” (3:59), and “spirit from Him” is an honorific attribution just like Ādam (15:29)."});

/* 21. 61:14: Jesus's helpers prevailed */
const FP=DR('the-followers-of-jesus-will-prevail','1368221912219648121');
card(J+'d-dr-the-followers-of-jesus-will-prevail',{
 title:"61:14: “Jesus's helpers prevailed” — does that validate Christianity?",k:"Qurʾān 61:14 · al-Ṭabarī",blurb:"Read Sūrat al-Ṣaff 61:6–14 in context: the victorious believers are the ummah of Muḥammad ﷺ (al-Ṭabarī 23/367).",
 claim:"Qurʾān 61:14 says Allah made Jesus's followers prevail — and Trinitarian Christians dominated history, so Islam proves Christianity true!",
 tree:N(FP,
  "61:14 says Jesus's followers became predominant — Trinitarian Christianity prevailed, not Islamic unitarians!",
  "Read Sūrat al-Ṣaff (61:6–14) in sequence: vv. 6–13 explicitly address the Muslims (“O you who have believed”), promising “imminent conquest” for the religion of truth brought by Muḥammad ﷺ. As Tafsīr al-Ṭabarī (23/367) confirms, the believing faction prevailed specifically through the advent of Muḥammad ﷺ confirming Jesus as Allah's servant and refuting those who called him God or Son of God.",
  "Context of Sūrat al-Ṣaff & Tafsīr al-Ṭabarī 23/367",
  ["Read 61:6–14 together: v. 6 notes Jesus was rejected by most of his people; v. 9 promises Allah's “religion of truth” sent with Muḥammad ﷺ will prevail; vv. 10–13 address the Muslims (“O you who have believed”) striving for Allah's cause and promise “imminent conquest” (fatḥ qarīb). Only the Muslim ummah received that conquest — not Jesus's persecuted 1st-century disciples.",
   "Tafsīr al-Ṭabarī 23/367: al-Ṭabarī explains “So We supported those who believed against their enemy” as Allah strengthening the believing Children of Israel through Muḥammad ﷺ — who confirmed Jesus was Allah's servant and messenger and refuted those who claimed he was God or the Son of God — so the true believers became victorious over their disbelieving opponents.",
   "No classical exegete read 61:14 as saying Jesus's 1st-century disciples won military victory or that Nicene Rome's dominance validated Trinitarianism: 3:55 speaks of spiritual/proof superiority until Resurrection, and 61:14 of the victory realised through Islam."],
  ["Qurʾān 61:6–14; 3:55","Tafsīr al-Ṭabarī 23/367"],
  [],
  {quotes:[{by:"Imām al-Ṭabarī (Tafsīr 23/367)",en:"We strengthened those who believed from the two groups of the Children of Israel against their enemy — those who disbelieved in Muḥammad ﷺ — by his confirmation that Jesus was the servant and messenger of God, and the refutation of those who said he was a god or the son of God; so the believing group became victorious.",ref:"Tafsīr al-Ṭabarī 23/367"}]}),
 sum:"In the context of Sūrat al-Ṣaff (61:6–14) and Tafsīr al-Ṭabarī (23/367), the prevailing of Jesus's true believing followers is fulfilled through the victory of Muḥammad ﷺ refuting Jesus's deification, not through Trinitarian Rome."});

/* 22. 9:31: Arabic grammar (fatḥa vs kasra) */
const Q931=DR('jesus-is-god-quran-9-31','1368221961594867752');
card(J+'d-dr-jesus-is-god-quran-9-31',{
 title:"9:31: “They took their rabbis, monks, and the Messiah as lords”",k:"Qurʾān 9:31 · Arabic Grammar",blurb:"Arabic case endings (fatḥa vs kasra) make it grammatically impossible to read Jesus alongside Allah.",
 claim:"Qurʾān 9:31 says they took rabbis and monks as lords “besides Allah and the Messiah”, accidentally putting Jesus beside Allah as God.",
 tree:N(Q931,
  "9:31 puts “and the Messiah” right after “besides Allah” — so the Qurʾān tells you to worship Allah AND the Messiah!",
  "That blunder comes from reading English word order into Arabic and ignoring Arabic case vowels (iʿrāb). “Allah” has a kasra (Allāhi, genitive after “besides”), whereas “rabbis”, “monks”, AND “the Messiah” (al-Masīḥa) all carry a fatḥa — proving grammatically that the Messiah is one of the beings wrongly taken as lords, NOT paired with Allah!",
  "Arabic iʿrāb, al-Ṭabarī 14/210 & Qurʾān 3:7",
  ["Exact Arabic grammar (fatḥa vs kasra): the verb ittakhadhū (“they took”) takes accusative objects marked with fatḥa: aḥbārahum (rabbis), ruhbānahum (monks), and al-Masīḥa (the Messiah). Meanwhile min dūni (“besides”) takes a genitive marked with kasra: Allāhi (Allah). For the critic's reading to work, “al-Masīḥ” would HAVE to end in kasra (al-Masīḥi) — it does not! It ends in fatḥa (al-Masīḥa).",
   "Why “the Messiah” is placed separately in the clause: scholars give two reasons — (1) corrupt rabbis and monks actively called people to follow them, whereas the Messiah never did; (2) the two kinds of worship differ: Tafsīr al-Ṭabarī (14/210, ḥadīth of ʿAdī ibn Ḥātim) explains that taking rabbis/monks as “lords” meant obeying them when they made the lawful forbidden and the forbidden lawful, whereas Christians literally deified the Messiah.",
   "Clear verses govern unclear readings (3:7): Qurʾān 3:7 distinguishes clear foundational verses (muḥkamāt) from passages people twist. Dozens of explicit Qurʾānic verses (e.g. 5:72, 5:116, 4:171) declare Jesus a mortal messenger and condemn worshipping him — ruling out the critic's misreading twice over."],
  ["Qurʾān 9:31; 3:7; 4:171; 5:72","Tafsīr al-Ṭabarī 14/210 (ʿAdī ibn Ḥātim)"],
  [],
  {facts:[["Rabbis & Monks","أَحْبَارَهُمْ وَرُهْبَانَهُمْ → Fatḥa (object of “took”)"],["Besides Allah","مِن دُونِ اللَّهِ → Kasra (genitive)"],["And the Messiah","وَالْمَسِيحَ → Fatḥa (object of “took”!)"],["Verdict","Grammatically impossible to pair with Allah"]],
   quote:{ar:"اتَّخَذُوا أَحْبَارَهُمْ وَرُهْبَانَهُمْ أَرْبَابًا مِّن دُونِ اللَّهِ وَالْمَسِيحَ ابْنَ مَرْيَمَ",en:"“They have taken their scholars and monks as lords besides Allah, and [also] the Messiah, the son of Mary.” — al-Tawba 9:31"}}),
 sum:"Arabic case endings (iʿrāb) settle 9:31 instantly: al-Masīḥa carries fatḥa (object of “they took as lords”), not kasra like Allāhi — and al-Ṭabarī 14/210 explains why the Messiah is separated from rabbis and monks."});

/* 23. 61:6: “Jesus never mentioned Aḥmad” (5,029 chars!) */
const AH=DR('jesus-never-said-ahmed','1368222148484665365');
card(J+'d-dr-jesus-never-said-ahmed',{
 title:"“Jesus never mentioned Aḥmad” (61:6)",k:"Qurʾān 61:6 · Logic & Texts",blurb:"61:6 doesn't claim a written record, the objection is an argument from silence, plus Paraclete, Isaiah 42 & Bart Ehrman.",
 claim:"No pre-Islamic text records Jesus predicting a messenger named “Aḥmad”, so Qurʾān 61:6 is historically false.",
 tree:N(AH,
  "Jesus never mentioned anyone named “Aḥmad” in the Gospels — so Qurʾān 61:6 is a historical error.",
  "Four separate answers dismantle this objection: (1) 61:6 never claims that specific speech of Jesus was written down (contrast 7:157); (2) concluding it never happened because surviving texts don't record it is a fallacious argument from silence — and the Gospels themselves admit most of what Jesus said wasn't written down (John 20:30, 21:25); (3) linguistic traces survive in the Paraclete & Isaiah 42; and (4) critical scholars like Bart Ehrman confirm Jesus predicted a future coming figure distinct from himself.",
  "Not claimed as written + Argument from Silence",
  ["1) Contrast 61:6 with 7:157: in 7:157 the Qurʾān explicitly says the Prophet's ﷺ description is “written down (maktūban) with them in the Torah and Gospel.” In 61:6, by contrast, Allah reports what Jesus spoke to the Children of Israel — without claiming scribes preserved that exact sentence in surviving Greek Gospels.",
   "2) Fallacious Argument from Silence: inferring “X never happened” from “no surviving record mentions X” is only valid when documentation would be virtually guaranteed (e.g., claiming George Bush never existed in the modern literate era), NOT for ancient figures (like claiming Abraham never existed for lack of archaeology).",
   "3) The Gospels themselves admit massive omissions: John 21:25 (“there are also many other things that Jesus did; were every one of them to be written, I suppose the world itself could not contain the books”) and John 20:30 openly state the Gospels preserve only a fraction of Jesus's sayings."],
  ["Qurʾān 61:6; 7:157","John 20:30; 21:25"],
  [
   N(AH,"Are there any surviving textual traces of Aḥmad in the Bible?",
    "Two plausible textual traces exist — the Paraclete sayings in John 14–16 (paráklētos vs periklytós) and Isaiah 42's Hebrew etmōkh (אתמך) vs Aḥmad (אחמד) — and Christians already accept unattested scribal slips elsewhere in the Bible.",
    "Paraclete (John 14:16) & Isaiah 42",
    ["Paráklētos vs Periklytós (John 14:16): the closest Greek rendering of Arabic Aḥmad (“praised”) is periklytós (περικλυτός), nearly identical in consonants to paráklētos (παράκλητος). While no surviving manuscript reads periklytós (and the Paraclete argument for Muḥammad ﷺ stands independently regardless!), Christians routinely concede unattested scribal copyist errors where no manuscript preserves the original — e.g. the number contradiction between 1 Chronicles 21:5 and 2 Samuel 24:9.",
     "Isaiah 42 (Hebrew etmōkh vs Aḥmad): Jesus frequently quoted the Old Testament. Isaiah 42 — an explicit Arabian prophecy — describes God's chosen servant with Hebrew אתמך (etmōkh, “I uphold”), visually/consonantally very close to אחמד (Aḥmad), raising the possibility that 61:6 echoes Jesus citing Isaiah 42."],
    ["John 14:16","Isaiah 42:1","1 Chronicles 21:5 vs 2 Samuel 24:9"]),
   N(AH,"What if “Aḥmad” in 61:6 refers to the figure's description/meaning rather than a Greek spelling?",
    "Mainstream critical New Testament scholarship — including Bart Ehrman — holds that the historical Jesus genuinely preached a future coming salvific figure (“Son of Man”) distinct from himself!",
    "Second response: Aḥmad in meaning (Bart Ehrman)",
    ["In mainstream biblical scholarship, a widely respected view (held by Bart Ehrman and others) is that when the historical Jesus spoke of the coming “Son of Man” in the third person, he envisioned a future deliverer distinct from himself — directly paralleling Jesus heralding a coming praised messenger (Aḥmad) after him."],
    ["Bart Ehrman","Qurʾān 61:6"])
  ]),
 sum:"61:6 makes no claim of a surviving Gospel quote, John 20:30/21:25 admit vast unrecorded sayings (making the objection a fallacious argument from silence), textual echoes appear in John 14 & Isaiah 42, and Bart Ehrman notes Jesus predicted a future figure distinct from himself."});
})();
