/* Trinity: "You can't apply numbers to God" — counting under a concept, genus vs concept, logic and God, the deck-of-cards reply.
   Built from Noel's debate (2026-11-28). Checked: Aquinas ST I q.30 a.3, q.25 a.3 (newadvent); SEP "Gottlob Frege" (statement of number = assertion about a concept). */
(()=>{
const {cr,N,card}=window.B;
const Q30={name:'Aquinas, Summa Theologiae I q.30 a.3',url:'https://www.newadvent.org/summa/1030.htm'};
const Q25={name:'Aquinas, Summa Theologiae I q.25 a.3',url:'https://www.newadvent.org/summa/1025.htm'};
const FRE={name:'Stanford Encyclopedia of Philosophy, “Gottlob Frege”',url:'https://plato.stanford.edu/entries/frege/'};
const S=cr(Q30,FRE);

card('christianity/trinity/counting-god',{
  title:"“You can't apply numbers to God”: counting and the Trinity",
  k:"Number · concept · genus",
  blurb:"Counting needs a concept and distinctness, not a genus. Under “God”: one for Islam, three for the Trinity.",
  claim:"When a Muslim says the Father, Son and Spirit are three distinct ones who are each God, so three gods, he is counting God like objects. But numbers do not apply to God, and God is in no genus, so the charge of three gods fails.",
  tree:N(S,
    "Numbers belong to quantity, and quantity belongs to material things. God is beyond quantity and in no genus. So “three persons, one God” is not arithmetic, and counting God under the category “gods” treats Him like a creature. The Muslim's “three distinct, each God, so three gods” simply misapplies number to God.",
    "Counting does not need quantity or a genus. It needs two things: a concept to count under, and things that are not identical. A statement of number is an assertion about a concept (Frege): how many distinct things fall under F? Aquinas himself agrees that “three” in God is real multitude, not material quantity. So the question stands: how many distinct ones fall under “is God”? In Islam one, Allah. In the Trinity the Father, the Son and the Spirit: each God, none the other.",
    "What “no number in God” really means",
    [
      "Their best source · Aquinas, ST I q.30 a.3: number as a species of quantity (division of the continuous) “is found only in material things”. So in that sense, yes, there is no number in God.",
      "But the same article: numeral terms said of God are taken from multitude in a transcendental sense, the kind “found only in immaterial things”. Aquinas does not deny that there are really three; he denies only that the three are a material quantity.",
      "Counting = distinctness under a concept. Frege: a statement of number (“there are eight planets”) is an assertion about a concept. No quantity, matter or genus needed.",
      "So the Muslim needs only what Aquinas grants: three persons, really distinct, each of whom is God."
    ],
    ["Aquinas, Summa Theologiae I q.30 a.3","Frege, Die Grundlagen der Arithmetik (1884), via SEP"],
    [
      N(cr('Burhān'),
        "You put God in a genus, “gods”, as one member among others. God is in no genus.",
        "A concept is not a genus. A genus in the technical sense is a real shared nature whose members differ by a differentia (an extra distinguishing feature): “animal” + “rational” = man. That would make God composite. Counting under a concept only asks how many things a word truly applies to. The concept exists in the mind; it is no box God sits in, just as time is no box when we say Allah acts in time.",
        "Concept ≠ genus",
        [
          "Differentia (Arabic faṣl): what separates one member of a genus from the others. Man = rational animal: “animal” is shared, “rational” is his own.",
          "The Shahāda counts exactly like this: lā ilāha illā Llāh, “no god (ilāh) except Allah”: the concept ilāh, one bearer.",
          "The Qurʾān uses the plural as a thought it denies: “Had there been gods (ālihatun) in them besides Allah, both would have been ruined” (21:22); “Has he made the gods one God?” (38:5).",
          "The Qurʾān even calls Allah a “thing”: “Say: which thing (shayʾ) is greatest in testimony? Say: Allah” (6:19). Falling under a concept does not make Him one thing among things.",
          "Ibn Taymiyya: universals exist as universals only in the mind; outside there are only individuals, and Allah shares nothing with any creature. Common concepts are allowed; a common thing outside is not."
        ],
        ["Qurʾān 21:22; 38:5; 6:19","Aquinas, ST I q.3 a.5 (God not in a genus)","Ibn Taymiyya, al-Radd ʿalā l-manṭiqiyyīn"],
        [
          N(cr('Burhān'),
            "Fine, but for me “God” is not a category. For you it is.",
            "For both of us “god” is the same concept in the mind. The difference is how many fall under it. A concept with exactly one bearer is uniqueness. A concept with several bearers is a class with members, which is what “genus” or “category” means in everyday speech. On your view the class “god” has three members, none of whom is the others.",
            "One bearer vs. three",
            ["Don't say “for me there is no category”: then your own “one God” is no longer a statement of number, and the Shahāda would be empty.","Say: same concept, different number of bearers."],
            [],[])
        ],
        {visual:{kind:'compare',
          left:{title:"Genus (technical)",items:["A real shared nature outside the mind","Members differ by a differentia","Would make God composite","Neither side claims this"]},
          right:{title:"Concept (for counting)",items:["A tool of thought in the mind","Asks: to how many does the word apply?","Shahāda: ilāh → one bearer","Trinity: “God” → three bearers"]}}}),
      N(cr(Q25),
        "God is beyond logic. Your counting rules don't bind Him.",
        "Then the Christian loses every sentence he needs: “the Father is not the Son” (against modalism), “not three gods but one God”, “Jesus is God and not merely a man”. All of them are logic. The claim “God is beyond logic” is itself meant to be true and not false. Aquinas rejects it too: what implies a contradiction is not a possible thing at all, so “it is better to say that such things cannot be done, than that God cannot do them”.",
        "Logic is not a cage around God",
        [
          "The laws of identity and non-contradiction hold for everything that exists. They do not limit Allah; they mark what is a thing at all. Muslim theologians: power does not attach to the impossible, because the impossible is no thing.",
          "Aquinas, ST I q.25 a.3: whatever implies a contradiction “cannot have the aspect of possibility”.",
          "If logic does not apply to God, then neither does the Athanasian Creed's “not three gods”."
        ],
        ["Aquinas, Summa Theologiae I q.25 a.3"],[]),
      N(cr('Burhān'),
        "One deck, 52 cards: under “deck” one, under “card” fifty-two. Under “God” one, under “person” three. No contradiction.",
        "The deck works only because no single card is a deck. In the Trinity every person is God: the Father is God, the Son is God, the Spirit is God, and none is the other. If each of the 52 cards were itself a whole deck, there would be 52 decks.",
        "Why the deck fails",
        [
          "Different concepts can give different numbers for the same stuff; that is true and harmless.",
          "But the Trinity says “each person IS God”. Then either “is God” means “is a God” (three gods), or it means “has a share in God” (each person is a part: partialism), or it means “is identical with God” (then by Leibniz's law the Father is the Son)."
        ],
        [],[]),
      N(cr('Burhān'),
        "“God” is a mass word like “gold”, not a count noun. You can't count it.",
        "Their own texts count with it. “You shall have no other gods before me” (Exod 20:3); “there are many gods and many lords, yet for us there is one God” (1 Cor 8:5–6); the Athanasian Creed: “not three gods but one God”. A mass word cannot take “one” or a plural: nobody says “one gold” or “three golds”. And if “is God” only meant “is made of God-stuff”, three persons of the same stuff are three divine things or three parts.",
        "Their texts count",
        ["Exodus 20:3","1 Corinthians 8:5–6","Athanasian Creed: “not three gods, but one God”"],
        ["Exodus 20:3","1 Corinthians 8:5–6","Quicumque (Athanasian Creed)"],[]),
      N(cr('Burhān'),
        "The persons differ only by relations (fatherhood, sonship), not by a differentia. So there is still no genus.",
        "Then ask: what is a person besides the nature? If nothing, each person just is the nature, so the Father is the Son. If “nature plus a relation”, each person is composed of two, and divine simplicity, the very reason for “no genus”, is gone. If “really distinct, yet the same thing as the nature”, the persons differ only in concept, which is modalism.",
        "Person = nature, or nature plus?",
        [
          "Ask: what does the Son have that the Father lacks? Being begotten. So there is something shared and something distinguishing.",
          "The “same in reality, distinct in notion” move is answered in “Who says ‘I am YHWH’?”."
        ],
        [],[]),
      N(cr('Burhān'),
        "Gregory of Nyssa: strictly, Peter, James and John are “one man”; we only speak loosely of “three men”. So also three persons are one God.",
        "Then three men are one man, which nobody believes, including the Christian. The rule is invented only for God: special pleading. And Scripture itself says “three men” (Gen 18:2) without correcting it.",
        "Special pleading",
        ["Gregory of Nyssa, To Ablabius (“On not three gods”).","Genesis 18:2: “three men stood before him”."],
        ["Gregory of Nyssa, Ad Ablabium","Genesis 18:2"],[])
    ],
    {visual:{kind:'steps',items:[
      ["Pick the concept","“god”: that which is worshipped by right"],
      ["Find the bearers","Father? Son? Spirit? Each “is God”"],
      ["Check distinctness","none is the other (else modalism)"],
      ["Count","Islam: 1 · Trinity: 3"]]},
     facts:[["Counting needs","a concept + non-identity"],["Aquinas","real multitude, not quantity"],["Shahāda","ilāh → one bearer"],["Key question","How many distinct ones are each God?"]]}
  ),
  sum:"Counting needs a concept and distinctness, not a genus or material quantity; Aquinas himself grants a real multitude in God. Under “God” Islam has one, the Trinity three distinct ones each called God."
});
})();
