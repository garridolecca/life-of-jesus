// ============================================================
// data.js — Life of Jesus: Biblical Data Module
// All geographic, event, and scripture data for the four Gospels
// ============================================================

export const journeys = [
  {
    id: 1,
    name: "Birth & Childhood",
    shortName: "Birth",
    dateRange: "c. 6–4 BC",
    chapters: "Matthew 1–2, Luke 1–2",
    color: [201, 168, 76],
    hexColor: "#C9A84C",
    description:
      "The incarnation of the Son of God begins with angelic announcements, a humble birth in Bethlehem, and the visit of shepherds and magi. Fleeing Herod's wrath, the holy family takes refuge in Egypt before settling in Nazareth. At age twelve, the boy Jesus astonishes the teachers in the Jerusalem Temple.",
    keyFigures: ["Mary", "Joseph", "Shepherds", "Magi", "Simeon", "Anna"],
    keyTheme: "God enters human history as a helpless child, fulfilling ancient prophecy."
  },
  {
    id: 2,
    name: "Early Ministry",
    shortName: "Early",
    dateRange: "c. AD 27",
    chapters: "Matthew 3–4, Mark 1, Luke 3–4, John 1–4",
    color: [74, 127, 181],
    hexColor: "#4A7FB5",
    description:
      "Jesus is baptized by John in the Jordan, resists Satan's temptations in the wilderness, and begins gathering disciples. His first miracle at Cana reveals his glory. He cleanses the Temple in Jerusalem, teaches Nicodemus about being born again, and offers living water to a Samaritan woman at the well.",
    keyFigures: ["John the Baptist", "Andrew", "Peter", "Philip", "Nathanael", "Nicodemus"],
    keyTheme: "The Kingdom of God is at hand — repent and believe the good news."
  },
  {
    id: 3,
    name: "Galilean Ministry",
    shortName: "Galilee",
    dateRange: "c. AD 27–29",
    chapters: "Matthew 5–18, Mark 2–9, Luke 5–9, John 5–6",
    color: [86, 130, 89],
    hexColor: "#568259",
    description:
      "Based in Capernaum, Jesus teaches with authority, performs extraordinary miracles, and draws vast crowds across Galilee. The Sermon on the Mount lays out the ethic of the Kingdom. He calms storms, feeds thousands, walks on water, heals the sick, and raises the dead. Peter confesses him as the Christ, and three disciples witness the Transfiguration.",
    keyFigures: ["Peter", "James", "John", "Matthew", "The Twelve Apostles"],
    keyTheme: "Teaching and miracles reveal the power and compassion of the Messiah."
  },
  {
    id: 4,
    name: "Passion & Resurrection",
    shortName: "Passion",
    dateRange: "c. AD 29–30",
    chapters: "Matthew 19–28, Mark 10–16, Luke 10–24, John 7–21",
    color: [163, 75, 75],
    hexColor: "#A34B4B",
    description:
      "Jesus sets his face toward Jerusalem, raising Lazarus from the dead and calling Zacchaeus in Jericho along the way. He enters Jerusalem in triumph, teaches in the Temple, and shares a final Passover meal with his disciples. Betrayed, tried, crucified, and buried — he rises on the third day, appears to his followers, and ascends to the Father.",
    keyFigures: ["Lazarus", "Mary Magdalene", "Pontius Pilate", "Judas Iscariot", "Joseph of Arimathea"],
    keyTheme: "Through suffering, death, and resurrection the Lamb of God takes away the sin of the world."
  }
];

export const cities = [
  // ── PHASE 1: Birth & Childhood ─────────────────────────
  {
    id: "bethlehem",
    biblicalName: "Bethlehem",
    modernName: "Bethlehem, Palestine",
    region: "Judea",
    lat: 31.7054,
    lng: 35.2024,
    significance: "major",
    journeys: [1],
    events: [
      {
        journey: 1,
        order: 1,
        action: "Birth of Jesus",
        description:
          "Mary gives birth to Jesus in Bethlehem and lays him in a manger, because there is no room for them in the inn. Shepherds, told by angels, come to worship the newborn King.",
        verse: "Luke 2:4-20",
        book: "Luke",
        chapter: 2,
        verseStart: 4,
        verseEnd: 20,
        quote:
          '"She gave birth to her firstborn, a son. She wrapped him in cloths and placed him in a manger, because there was no guest room available for them."'
      },
      {
        journey: 1,
        order: 3,
        action: "Visit of the Magi",
        description:
          "Wise men from the East follow a star to Bethlehem and present gifts of gold, frankincense, and myrrh to the child Jesus. Warned in a dream, they return home by another route.",
        verse: "Matthew 2:1-12",
        book: "Matthew",
        chapter: 2,
        verseStart: 1,
        verseEnd: 12,
        quote:
          '"On coming to the house, they saw the child with his mother Mary, and they bowed down and worshiped him."'
      }
    ]
  },
  {
    id: "jerusalem",
    biblicalName: "Jerusalem",
    modernName: "Jerusalem, Israel",
    region: "Judea",
    lat: 31.7767,
    lng: 35.2332,
    significance: "major",
    journeys: [1, 2, 4],
    events: [
      {
        journey: 1,
        order: 2,
        action: "Presentation at the Temple",
        description:
          "Joseph and Mary bring the infant Jesus to the Temple to consecrate him to the Lord. The aged prophet Simeon takes the child in his arms and declares him a light for revelation to the Gentiles. The prophetess Anna gives thanks and speaks of the child to all who are looking for the redemption of Jerusalem.",
        verse: "Luke 2:22-38",
        book: "Luke",
        chapter: 2,
        verseStart: 22,
        verseEnd: 38,
        quote:
          '"My eyes have seen your salvation, which you have prepared in the sight of all nations: a light for revelation to the Gentiles, and the glory of your people Israel."'
      },
      {
        journey: 1,
        order: 6,
        action: "Boy Jesus at the Temple",
        description:
          "At age twelve, Jesus travels to Jerusalem for the Passover festival. His parents find him in the Temple courts, sitting among the teachers, listening and asking questions. All who hear him are amazed at his understanding.",
        verse: "Luke 2:41-52",
        book: "Luke",
        chapter: 2,
        verseStart: 41,
        verseEnd: 52,
        quote:
          '"Why were you searching for me?" he asked. "Didn\'t you know I had to be in my Father\'s house?"'
      },
      {
        journey: 2,
        order: 5,
        action: "Cleansing of the Temple",
        description:
          "Jesus drives out the merchants and money-changers from the Temple courts, overturning their tables and declaring that his Father's house must not be turned into a marketplace. The Jewish leaders demand a sign, and Jesus answers: 'Destroy this temple, and I will raise it again in three days.'",
        verse: "John 2:13-22",
        book: "John",
        chapter: 2,
        verseStart: 13,
        verseEnd: 22,
        quote:
          '"Destroy this temple, and I will raise it again in three days."'
      },
      {
        journey: 2,
        order: 6,
        action: "Nicodemus Visits by Night",
        description:
          "Nicodemus, a Pharisee and member of the Jewish ruling council, comes to Jesus at night. Jesus teaches him about being born again of water and the Spirit, and reveals the heart of the gospel: God so loved the world that he gave his one and only Son.",
        verse: "John 3:1-21",
        book: "John",
        chapter: 3,
        verseStart: 1,
        verseEnd: 21,
        quote:
          '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."'
      },
      {
        journey: 4,
        order: 5,
        action: "Triumphal Entry",
        description:
          "Jesus rides into Jerusalem on a donkey as crowds spread their cloaks and palm branches on the road, shouting 'Hosanna to the Son of David!' The whole city is stirred, fulfilling Zechariah's prophecy of a humble king coming on a colt.",
        verse: "Matthew 21:1-11",
        book: "Matthew",
        chapter: 21,
        verseStart: 1,
        verseEnd: 11,
        quote:
          '"Hosanna to the Son of David! Blessed is he who comes in the name of the Lord! Hosanna in the highest heaven!"'
      },
      {
        journey: 4,
        order: 7,
        action: "The Last Supper",
        description:
          "On the night before his death, Jesus shares a Passover meal with his twelve disciples. He washes their feet, institutes the Lord's Supper with bread and wine as symbols of his body and blood, and gives the new commandment: love one another as I have loved you.",
        verse: "Luke 22:14-20",
        book: "Luke",
        chapter: 22,
        verseStart: 14,
        verseEnd: 20,
        quote:
          '"This is my body given for you; do this in remembrance of me… This cup is the new covenant in my blood, which is poured out for you."'
      },
      {
        journey: 4,
        order: 9,
        action: "Trial before Pilate",
        description:
          "After being arrested in Gethsemane and tried before the Sanhedrin, Jesus stands before the Roman governor Pontius Pilate. Though Pilate finds no basis for a charge, the crowd demands crucifixion. Pilate washes his hands and delivers Jesus to be scourged and crucified.",
        verse: "John 18:28-19:16",
        book: "John",
        chapter: 18,
        verseStart: 28,
        verseEnd: 40,
        quote:
          '"My kingdom is not of this world. If it were, my servants would fight to prevent my arrest. But now my kingdom is from another place."'
      },
      {
        journey: 4,
        order: 10,
        action: "Crucifixion & Death",
        description:
          "Jesus is crucified at Golgotha between two criminals. He forgives his executioners, promises paradise to the repentant thief, and entrusts his mother to the beloved disciple. After six hours of agony, darkness covers the land, and Jesus cries out 'It is finished' before giving up his spirit.",
        verse: "John 19:17-37",
        book: "John",
        chapter: 19,
        verseStart: 17,
        verseEnd: 37,
        quote:
          '"It is finished." With that, he bowed his head and gave up his spirit.'
      },
      {
        journey: 4,
        order: 11,
        action: "Resurrection",
        description:
          "On the third day, women come to the tomb at dawn and find the stone rolled away. An angel declares: 'He is not here; he has risen!' Mary Magdalene encounters the risen Jesus near the tomb. That evening, Jesus appears to the disciples behind locked doors, showing them his hands and side.",
        verse: "Matthew 28:1-10",
        book: "Matthew",
        chapter: 28,
        verseStart: 1,
        verseEnd: 10,
        quote:
          '"He is not here; he has risen, just as he said. Come and see the place where he lay."'
      }
    ]
  },
  {
    id: "egypt",
    biblicalName: "Egypt",
    modernName: "Egypt",
    region: "Egypt",
    lat: 30.85,
    lng: 32.35,
    significance: "moderate",
    journeys: [1],
    events: [
      {
        journey: 1,
        order: 4,
        action: "Flight to Egypt",

        description:
          "Warned in a dream that Herod seeks to destroy the child, Joseph takes Mary and Jesus and flees by night to Egypt. They remain there until Herod's death, fulfilling the prophecy: 'Out of Egypt I called my son.'",
        verse: "Matthew 2:13-15",
        book: "Matthew",
        chapter: 2,
        verseStart: 13,
        verseEnd: 15,
        quote:
          '"Get up, take the child and his mother and escape to Egypt. Stay there until I tell you, for Herod is going to search for the child to kill him."'
      }
    ]
  },
  {
    id: "nazareth",
    biblicalName: "Nazareth",
    modernName: "Nazareth, Israel",
    region: "Galilee",
    lat: 32.6996,
    lng: 35.3040,
    significance: "major",
    journeys: [1, 2, 3],
    events: [
      {
        journey: 1,
        order: 5,
        action: "Childhood in Nazareth",
        description:
          "After returning from Egypt, the holy family settles in the town of Nazareth in Galilee, fulfilling the word that Jesus would be called a Nazarene. The child grows and becomes strong, filled with wisdom, and the grace of God is upon him.",
        verse: "Matthew 2:19-23",
        book: "Matthew",
        chapter: 2,
        verseStart: 19,
        verseEnd: 23,
        quote:
          '"He went and lived in a town called Nazareth. So was fulfilled what was said through the prophets, that he would be called a Nazarene."'
      },
      {
        journey: 2,
        order: 8,
        action: "Rejected at Nazareth",
        description:
          "Jesus returns to his hometown and reads from Isaiah in the synagogue: 'The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor.' He declares the prophecy fulfilled, but the people are furious and drive him out of town.",
        verse: "Luke 4:16-30",
        book: "Luke",
        chapter: 4,
        verseStart: 16,
        verseEnd: 30,
        quote:
          '"Truly I tell you, no prophet is accepted in his hometown."'
      },
      {
        journey: 3,
        order: 7,
        action: "Second Rejection at Nazareth",
        description:
          "Jesus visits Nazareth again and teaches in the synagogue. The people take offense, saying 'Isn't this the carpenter's son?' Because of their unbelief, Jesus can do no mighty work there except heal a few sick people. He marvels at their lack of faith.",
        verse: "Mark 6:1-6",
        book: "Mark",
        chapter: 6,
        verseStart: 1,
        verseEnd: 6,
        quote:
          '"A prophet is not without honor except in his own town, among his relatives and in his own home."'
      }
    ]
  },

  // ── PHASE 2: Early Ministry ────────────────────────────
  {
    id: "bethany-beyond-jordan",
    biblicalName: "Bethany Beyond the Jordan",
    modernName: "Al-Maghtas, Jordan",
    region: "Perea",
    lat: 31.8372,
    lng: 35.5508,
    significance: "major",
    journeys: [2],
    events: [
      {
        journey: 2,
        order: 1,
        action: "Baptism of Jesus",
        description:
          "Jesus comes from Galilee to the Jordan to be baptized by John. As he comes up out of the water, the heavens are opened and the Spirit of God descends like a dove. A voice from heaven declares: 'This is my Son, whom I love; with him I am well pleased.'",
        verse: "Matthew 3:13-17",
        book: "Matthew",
        chapter: 3,
        verseStart: 13,
        verseEnd: 17,
        quote:
          '"This is my Son, whom I love; with him I am well pleased."'
      }
    ]
  },
  {
    id: "wilderness-of-judea",
    biblicalName: "Wilderness of Judea",
    modernName: "Judean Desert, Israel",
    region: "Judea",
    lat: 31.65,
    lng: 35.35,
    significance: "moderate",
    journeys: [2],
    events: [
      {
        journey: 2,
        order: 2,
        action: "Temptation by Satan",
        description:
          "Immediately after his baptism, the Spirit leads Jesus into the wilderness where he fasts for forty days and forty nights. Satan tempts him three times — with bread, with spectacle, and with earthly power — but Jesus resists each temptation with Scripture.",
        verse: "Matthew 4:1-11",
        book: "Matthew",
        chapter: 4,
        verseStart: 1,
        verseEnd: 11,
        quote:
          '"Man shall not live on bread alone, but on every word that comes from the mouth of God."'
      }
    ]
  },
  {
    id: "cana",
    biblicalName: "Cana of Galilee",
    modernName: "Kafr Kanna, Israel",
    region: "Galilee",
    lat: 32.7500,
    lng: 35.3434,
    significance: "moderate",
    journeys: [2],
    events: [
      {
        journey: 2,
        order: 3,
        action: "Water into Wine",
        description:
          "At a wedding feast in Cana, the wine runs out. Mary tells Jesus, and he instructs the servants to fill six stone jars with water. When drawn out, the water has become the finest wine. This is the first of Jesus' signs, revealing his glory.",
        verse: "John 2:1-11",
        book: "John",
        chapter: 2,
        verseStart: 1,
        verseEnd: 11,
        quote:
          '"What Jesus did here in Cana of Galilee was the first of the signs through which he revealed his glory; and his disciples believed in him."'
      },
      {
        journey: 2,
        order: 4,
        action: "Healing the Official's Son",
        description:
          "A royal official from Capernaum begs Jesus to heal his dying son. Without traveling there, Jesus says, 'Go, your son will live.' The man believes and departs; his servants meet him with news that the boy recovered at the very hour Jesus spoke.",
        verse: "John 4:46-54",
        book: "John",
        chapter: 4,
        verseStart: 46,
        verseEnd: 54,
        quote:
          '"Go," Jesus replied, "your son will live." The man took Jesus at his word and departed.'
      }
    ]
  },
  {
    id: "capernaum",
    biblicalName: "Capernaum",
    modernName: "Kfar Nahum, Israel",
    region: "Galilee",
    lat: 32.8814,
    lng: 35.5753,
    significance: "major",
    journeys: [2, 3],
    events: [
      {
        journey: 2,
        order: 9,
        action: "Ministry Headquarters Established",
        description:
          "After being rejected at Nazareth, Jesus moves to Capernaum by the Sea of Galilee, fulfilling Isaiah's prophecy about a great light dawning on those living in darkness. From here he begins to preach: 'Repent, for the kingdom of heaven has come near.'",
        verse: "Matthew 4:13-17",
        book: "Matthew",
        chapter: 4,
        verseStart: 13,
        verseEnd: 17,
        quote:
          '"Repent, for the kingdom of heaven has come near."'
      },
      {
        journey: 3,
        order: 1,
        action: "Teaching with Authority",
        description:
          "Jesus teaches in the Capernaum synagogue, and the people are amazed because he teaches with authority, not like the scribes. He commands an impure spirit to come out of a man, and it obeys. News about him spreads quickly across Galilee.",
        verse: "Mark 1:21-28",
        book: "Mark",
        chapter: 1,
        verseStart: 21,
        verseEnd: 28,
        quote:
          '"The people were amazed at his teaching, because he taught them as one who had authority, not as the teachers of the law."'
      },
      {
        journey: 3,
        order: 2,
        action: "Healing the Centurion's Servant",
        description:
          "A Roman centurion asks Jesus to heal his paralyzed servant. When Jesus offers to come, the centurion says he is unworthy but that a word from Jesus is enough. Jesus marvels at such great faith — not found even in Israel — and heals the servant at that very hour.",
        verse: "Matthew 8:5-13",
        book: "Matthew",
        chapter: 8,
        verseStart: 5,
        verseEnd: 13,
        quote:
          '"Truly I tell you, I have not found anyone in Israel with such great faith."'
      },
      {
        journey: 3,
        order: 3,
        action: "Healing Peter's Mother-in-Law",
        description:
          "Jesus enters Peter and Andrew's house and finds Peter's mother-in-law lying in bed with a fever. He takes her hand and helps her up; the fever leaves her at once and she begins to serve them. That evening, many sick and demon-possessed are brought to him.",
        verse: "Mark 1:29-34",
        book: "Mark",
        chapter: 1,
        verseStart: 29,
        verseEnd: 34,
        quote:
          '"He went to her, took her hand and helped her up. The fever left her and she began to wait on them."'
      }
    ]
  },
  {
    id: "sychar",
    biblicalName: "Sychar",
    modernName: "Near Nablus, Palestine",
    region: "Samaria",
    lat: 32.2142,
    lng: 35.2848,
    significance: "moderate",
    journeys: [2],
    events: [
      {
        journey: 2,
        order: 7,
        action: "Woman at the Well",
        description:
          "Traveling through Samaria, Jesus sits by Jacob's well at noon. He asks a Samaritan woman for a drink, breaking cultural taboos. He offers her 'living water' that becomes a spring welling up to eternal life. She recognizes him as the Messiah and brings her whole town to hear him.",
        verse: "John 4:4-26",
        book: "John",
        chapter: 4,
        verseStart: 4,
        verseEnd: 26,
        quote:
          '"Everyone who drinks this water will be thirsty again, but whoever drinks the water I give them will never thirst."'
      }
    ]
  },

  // ── PHASE 3: Galilean Ministry ─────────────────────────
  {
    id: "mount-of-beatitudes",
    biblicalName: "Mount of Beatitudes",
    modernName: "Mount Eremos, Israel",
    region: "Galilee",
    lat: 32.8810,
    lng: 35.5550,
    significance: "moderate",
    journeys: [3],
    events: [
      {
        journey: 3,
        order: 4,
        action: "Sermon on the Mount",
        description:
          "Jesus goes up on a mountainside near the Sea of Galilee and delivers his most famous sermon. Beginning with the Beatitudes ('Blessed are the poor in spirit…'), he teaches about the law, prayer, fasting, worry, and the golden rule. His hearers are astonished at his teaching.",
        verse: "Matthew 5:1-7:29",
        book: "Matthew",
        chapter: 5,
        verseStart: 1,
        verseEnd: 12,
        quote:
          '"Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they will be comforted."'
      }
    ]
  },
  {
    id: "nain",
    biblicalName: "Nain",
    modernName: "Nein, Israel",
    region: "Galilee",
    lat: 32.6330,
    lng: 35.3494,
    significance: "minor",
    journeys: [3],
    events: [
      {
        journey: 3,
        order: 5,
        action: "Raising the Widow's Son",
        description:
          "As Jesus approaches the town gate of Nain, a funeral procession carries the only son of a widow. His heart goes out to her and he says, 'Don't cry.' He touches the bier and commands, 'Young man, I say to you, get up!' The dead man sits up and begins to talk. Fear seizes everyone, and they praise God.",
        verse: "Luke 7:11-17",
        book: "Luke",
        chapter: 7,
        verseStart: 11,
        verseEnd: 17,
        quote:
          '"Young man, I say to you, get up!" The dead man sat up and began to talk, and Jesus gave him back to his mother.'
      }
    ]
  },
  {
    id: "sea-of-galilee",
    biblicalName: "Sea of Galilee",
    modernName: "Lake Kinneret, Israel",
    region: "Galilee",
    lat: 32.82,
    lng: 35.58,
    significance: "major",
    journeys: [3],
    events: [
      {
        journey: 3,
        order: 6,
        action: "Calming the Storm",
        description:
          "While crossing the Sea of Galilee, a furious squall arises. The disciples wake Jesus in a panic. He rebukes the wind and waves, and there is a dead calm. They are terrified and ask, 'Who is this? Even the wind and the waves obey him!'",
        verse: "Mark 4:35-41",
        book: "Mark",
        chapter: 4,
        verseStart: 35,
        verseEnd: 41,
        quote:
          '"He got up, rebuked the wind and said to the waves, "Quiet! Be still!" Then the wind died down and it was completely calm."'
      },
      {
        journey: 3,
        order: 9,
        action: "Walking on Water",
        description:
          "After feeding the five thousand, Jesus sends the disciples ahead by boat and goes up a mountain to pray. In the fourth watch of the night, he walks to them on the water. Peter steps out of the boat toward Jesus but begins to sink; Jesus catches him and they climb in. The wind ceases.",
        verse: "Matthew 14:22-33",
        book: "Matthew",
        chapter: 14,
        verseStart: 22,
        verseEnd: 33,
        quote:
          '"Lord, if it\'s you," Peter replied, "tell me to come to you on the water." "Come," he said.'
      },
      {
        journey: 3,
        order: 15,
        action: "Calling of the First Disciples",
        description:
          "Walking by the Sea of Galilee, Jesus sees Simon and Andrew casting their nets. He calls out, 'Follow me, and I will make you fishers of men.' They leave their nets at once and follow him. Going further, he calls James and John from their father's boat.",
        verse: "Mark 1:16-20",
        book: "Mark",
        chapter: 1,
        verseStart: 16,
        verseEnd: 20,
        quote:
          '"Come, follow me," Jesus said, "and I will send you out to fish for people."'
      }
    ]
  },
  {
    id: "gadara",
    biblicalName: "Gadara",
    modernName: "Umm Qais, Jordan",
    region: "Decapolis",
    lat: 32.6531,
    lng: 35.6832,
    significance: "minor",
    journeys: [3],
    events: [
      {
        journey: 3,
        order: 8,
        action: "Healing the Demoniacs",
        description:
          "On the eastern shore of the Sea of Galilee, Jesus encounters a man possessed by a legion of demons, living among the tombs. Jesus casts the demons into a herd of pigs which rush down the steep bank into the lake. The healed man begs to go with Jesus, but is told to go home and tell what God has done.",
        verse: "Mark 5:1-20",
        book: "Mark",
        chapter: 5,
        verseStart: 1,
        verseEnd: 20,
        quote:
          '"Go home to your own people and tell them how much the Lord has done for you, and how he has had mercy on you."'
      }
    ]
  },
  {
    id: "bethsaida",
    biblicalName: "Bethsaida",
    modernName: "Et-Tell, Israel",
    region: "Galilee",
    lat: 32.9070,
    lng: 35.6300,
    significance: "moderate",
    journeys: [3],
    events: [
      {
        journey: 3,
        order: 10,
        action: "Feeding the Five Thousand",
        description:
          "A vast crowd follows Jesus to a remote place near Bethsaida. With only five barley loaves and two fish, brought by a boy, Jesus gives thanks, breaks the bread, and feeds all five thousand men plus women and children. Twelve baskets of leftovers are collected. This is the only miracle recorded in all four Gospels.",
        verse: "John 6:1-14",
        book: "John",
        chapter: 6,
        verseStart: 1,
        verseEnd: 14,
        quote:
          '"Gather the pieces that are left over. Let nothing be wasted."'
      },
      {
        journey: 3,
        order: 11,
        action: "Healing a Blind Man",
        description:
          "People bring a blind man to Jesus at Bethsaida and beg him to touch him. Jesus leads the man outside the village, puts saliva on his eyes, and lays his hands on him. The man's sight is restored in stages — first seeing people like trees walking, then clearly after a second touch.",
        verse: "Mark 8:22-26",
        book: "Mark",
        chapter: 8,
        verseStart: 22,
        verseEnd: 26,
        quote:
          '"Once more Jesus put his hands on the man\'s eyes. Then his eyes were opened, his sight was restored, and he saw everything clearly."'
      }
    ]
  },
  {
    id: "chorazin",
    biblicalName: "Chorazin",
    modernName: "Korazim, Israel",
    region: "Galilee",
    lat: 32.9090,
    lng: 35.5680,
    significance: "minor",
    journeys: [3],
    events: [
      {
        journey: 3,
        order: 16,
        action: "Woe Pronounced",
        description:
          "Jesus pronounces woe upon the unrepentant cities of Chorazin, Bethsaida, and Capernaum. Though he performed most of his miracles in these places, the people did not repent. He declares that if the miracles done there had been done in Tyre and Sidon, they would have repented long ago.",
        verse: "Matthew 11:21-24",
        book: "Matthew",
        chapter: 11,
        verseStart: 21,
        verseEnd: 24,
        quote:
          '"Woe to you, Chorazin! Woe to you, Bethsaida! For if the miracles that were performed in you had been performed in Tyre and Sidon, they would have repented long ago."'
      }
    ]
  },
  {
    id: "magdala",
    biblicalName: "Magdala",
    modernName: "Migdal, Israel",
    region: "Galilee",
    lat: 32.8390,
    lng: 35.5150,
    significance: "minor",
    journeys: [3],
    events: [
      {
        journey: 3,
        order: 17,
        action: "Departure by Boat",
        description:
          "After feeding the four thousand and warning against the yeast of the Pharisees and Sadducees, Jesus gets into a boat and goes to the region of Magdala (Magadan). This town on the western shore of the Sea of Galilee is the home of Mary Magdalene, one of Jesus' most devoted followers.",
        verse: "Matthew 15:39",
        book: "Matthew",
        chapter: 15,
        verseStart: 39,
        verseEnd: 39,
        quote:
          '"After Jesus had sent the crowd away, he got into the boat and went to the vicinity of Magadan."'
      }
    ]
  },
  {
    id: "tyre",
    biblicalName: "Tyre",
    modernName: "Tyre, Lebanon",
    region: "Phoenicia",
    lat: 33.2705,
    lng: 35.1955,
    significance: "moderate",
    journeys: [3],
    events: [
      {
        journey: 3,
        order: 12,
        action: "Syrophoenician Woman's Faith",
        description:
          "Jesus withdraws to the region of Tyre and Sidon. A Canaanite woman begs him to heal her demon-possessed daughter. Though he tests her faith, she persists: 'Even the dogs eat the crumbs that fall from their master's table.' Jesus commends her great faith, and her daughter is healed instantly.",
        verse: "Mark 7:24-30",
        book: "Mark",
        chapter: 7,
        verseStart: 24,
        verseEnd: 30,
        quote:
          '"Woman, you have great faith! Your request is granted."'
      }
    ]
  },
  {
    id: "sidon",
    biblicalName: "Sidon",
    modernName: "Saida, Lebanon",
    region: "Phoenicia",
    lat: 33.5572,
    lng: 35.3716,
    significance: "minor",
    journeys: [3],
    events: [
      {
        journey: 3,
        order: 13,
        action: "Northern Extent of Ministry",
        description:
          "Jesus travels to the region of Sidon, the northernmost extent of his earthly ministry. Ancient Sidon, one of the great Phoenician cities, represents the Gentile world. His willingness to minister beyond Israel's borders foreshadows the gospel going to all nations.",
        verse: "Mark 7:31",
        book: "Mark",
        chapter: 7,
        verseStart: 31,
        verseEnd: 31,
        quote:
          '"Then Jesus left the vicinity of Tyre and went through Sidon, down to the Sea of Galilee and into the region of the Decapolis."'
      }
    ]
  },
  {
    id: "decapolis",
    biblicalName: "Decapolis",
    modernName: "Northern Jordan",
    region: "Decapolis",
    lat: 32.7800,
    lng: 35.6600,
    significance: "minor",
    journeys: [3],
    events: [
      {
        journey: 3,
        order: 14,
        action: "Healing the Deaf-Mute Man",
        description:
          "In the region of the Decapolis, people bring a man who is deaf and can hardly speak. Jesus takes him aside, puts his fingers in the man's ears, touches his tongue, looks up to heaven, and says 'Ephphatha!' — 'Be opened!' Immediately the man hears and speaks plainly.",
        verse: "Mark 7:31-37",
        book: "Mark",
        chapter: 7,
        verseStart: 31,
        verseEnd: 37,
        quote:
          '"He even makes the deaf hear and the mute speak."'
      }
    ]
  },
  {
    id: "caesarea-philippi",
    biblicalName: "Caesarea Philippi",
    modernName: "Banias, Israel",
    region: "Gaulanitis",
    lat: 33.2478,
    lng: 35.6936,
    significance: "moderate",
    journeys: [3],
    events: [
      {
        journey: 3,
        order: 18,
        action: "Peter's Confession",
        description:
          "Near Caesarea Philippi, at the foot of Mount Hermon, Jesus asks his disciples: 'Who do people say the Son of Man is?' They offer various answers. 'But what about you?' he asks. Peter declares, 'You are the Messiah, the Son of the living God.' Jesus blesses him and speaks of building his church upon this rock.",
        verse: "Matthew 16:13-20",
        book: "Matthew",
        chapter: 16,
        verseStart: 13,
        verseEnd: 20,
        quote:
          '"You are the Messiah, the Son of the living God."'
      }
    ]
  },
  {
    id: "mount-tabor",
    biblicalName: "Mount Tabor",
    modernName: "Mount Tabor, Israel",
    region: "Galilee",
    lat: 32.6867,
    lng: 35.3931,
    significance: "moderate",
    journeys: [3],
    events: [
      {
        journey: 3,
        order: 19,
        action: "The Transfiguration",
        description:
          "Jesus takes Peter, James, and John up a high mountain. There he is transfigured before them — his face shines like the sun and his clothes become dazzling white. Moses and Elijah appear, talking with him. A bright cloud envelops them and a voice declares: 'This is my Son, whom I love; listen to him!'",
        verse: "Matthew 17:1-8",
        book: "Matthew",
        chapter: 17,
        verseStart: 1,
        verseEnd: 8,
        quote:
          '"This is my Son, whom I love; with him I am well pleased. Listen to him!"'
      }
    ]
  },

  // ── PHASE 4: Passion & Resurrection ────────────────────
  {
    id: "perea",
    biblicalName: "Perea",
    modernName: "Eastern Jordan Valley",
    region: "Perea",
    lat: 32.08,
    lng: 35.57,
    significance: "minor",
    journeys: [4],
    events: [
      {
        journey: 4,
        order: 1,
        action: "Teaching Beyond the Jordan",
        description:
          "Jesus goes beyond the Jordan to the place where John had been baptizing and stays there. Many come to him, and many believe. He teaches about divorce, blesses the children, and calls the rich young ruler to sell all he has and follow.",
        verse: "John 10:40-42",
        book: "John",
        chapter: 10,
        verseStart: 40,
        verseEnd: 42,
        quote:
          '"Many believed in Jesus there." "Though John never performed a sign, all that John said about this man was true."'
      }
    ]
  },
  {
    id: "bethany",
    biblicalName: "Bethany",
    modernName: "Al-Eizariya, Palestine",
    region: "Judea",
    lat: 31.7650,
    lng: 35.2625,
    significance: "moderate",
    journeys: [4],
    events: [
      {
        journey: 4,
        order: 2,
        action: "Raising of Lazarus",
        description:
          "Jesus arrives in Bethany four days after the death of his friend Lazarus. Martha meets him and declares her faith. At the tomb, Jesus weeps — the shortest verse in the Bible. He commands, 'Lazarus, come out!' and the dead man emerges, still wrapped in burial cloths. Many who witness this believe.",
        verse: "John 11:1-44",
        book: "John",
        chapter: 11,
        verseStart: 1,
        verseEnd: 44,
        quote:
          '"I am the resurrection and the life. The one who believes in me will live, even though they die."'
      },
      {
        journey: 4,
        order: 3,
        action: "Anointing by Mary",
        description:
          "Six days before the Passover, a dinner is given for Jesus in Bethany. Mary takes a pint of expensive perfume of pure nard and pours it on Jesus' feet, wiping them with her hair. The house is filled with fragrance. Jesus says she has done this in preparation for his burial.",
        verse: "John 12:1-8",
        book: "John",
        chapter: 12,
        verseStart: 1,
        verseEnd: 8,
        quote:
          '"Leave her alone. It was intended that she should save this perfume for the day of my burial."'
      }
    ]
  },
  {
    id: "jericho",
    biblicalName: "Jericho",
    modernName: "Jericho, Palestine",
    region: "Judea",
    lat: 31.8667,
    lng: 35.4500,
    significance: "moderate",
    journeys: [4],
    events: [
      {
        journey: 4,
        order: 4,
        action: "Blind Bartimaeus Healed",
        description:
          "As Jesus leaves Jericho, a blind beggar named Bartimaeus cries out, 'Jesus, Son of David, have mercy on me!' The crowd rebukes him, but he shouts all the louder. Jesus stops, calls for him, and asks what he wants. 'Rabbi, I want to see,' he replies. His faith heals him, and he follows Jesus along the road.",
        verse: "Mark 10:46-52",
        book: "Mark",
        chapter: 10,
        verseStart: 46,
        verseEnd: 52,
        quote:
          '"What do you want me to do for you?" "Rabbi, I want to see." "Go," said Jesus, "your faith has healed you."'
      },
      {
        journey: 4,
        order: 4,
        action: "Zacchaeus the Tax Collector",
        description:
          "In Jericho, a wealthy chief tax collector named Zacchaeus climbs a sycamore tree to see Jesus over the crowd. Jesus looks up and says, 'Zacchaeus, come down immediately. I must stay at your house today.' Zacchaeus joyfully receives him and pledges to give half his goods to the poor.",
        verse: "Luke 19:1-10",
        book: "Luke",
        chapter: 19,
        verseStart: 1,
        verseEnd: 10,
        quote:
          '"For the Son of Man came to seek and to save the lost."'
      }
    ]
  },
  {
    id: "mount-of-olives",
    biblicalName: "Mount of Olives",
    modernName: "Mount of Olives, Jerusalem",
    region: "Judea",
    lat: 31.7784,
    lng: 35.2500,
    significance: "major",
    journeys: [4],
    events: [
      {
        journey: 4,
        order: 6,
        action: "Olivet Discourse",
        description:
          "Seated on the Mount of Olives overlooking the Temple, Jesus teaches his disciples about the destruction of Jerusalem and the end of the age. He warns of false messiahs, wars, and persecutions, and calls them to watchfulness. No one knows the day or hour — only the Father.",
        verse: "Matthew 24:1-44",
        book: "Matthew",
        chapter: 24,
        verseStart: 1,
        verseEnd: 44,
        quote:
          '"Therefore keep watch, because you do not know on what day your Lord will come."'
      },
      {
        journey: 4,
        order: 8,
        action: "Agony in Gethsemane",
        description:
          "After the Last Supper, Jesus goes with his disciples to the Garden of Gethsemane on the Mount of Olives. In deep anguish, he prays three times: 'Father, if it is possible, let this cup pass from me. Yet not my will, but yours be done.' He sweats drops like blood. Judas arrives with a crowd and betrays him with a kiss.",
        verse: "Matthew 26:36-56",
        book: "Matthew",
        chapter: 26,
        verseStart: 36,
        verseEnd: 56,
        quote:
          '"My Father, if it is possible, may this cup be taken from me. Yet not as I will, but as you will."'
      },
      {
        journey: 4,
        order: 12,
        action: "The Ascension",
        description:
          "Forty days after his resurrection, Jesus leads his disciples out to the vicinity of Bethany on the Mount of Olives. He commissions them to be his witnesses to the ends of the earth. While he blesses them, he is taken up before their eyes, and a cloud hides him from their sight. Two angels promise he will return in the same way.",
        verse: "Acts 1:9-12",
        book: "Acts",
        chapter: 1,
        verseStart: 9,
        verseEnd: 12,
        quote:
          '"This same Jesus, who has been taken from you into heaven, will come back in the same way you have seen him go into heaven."'
      }
    ]
  },
  {
    id: "emmaus",
    biblicalName: "Emmaus",
    modernName: "Near Jerusalem",
    region: "Judea",
    lat: 31.8413,
    lng: 34.9789,
    significance: "minor",
    journeys: [4],
    events: [
      {
        journey: 4,
        order: 13,
        action: "Road to Emmaus",
        description:
          "On the day of the resurrection, two discouraged disciples walk to Emmaus. A stranger joins them and explains how the Scriptures pointed to a suffering and rising Messiah. At supper, he breaks bread — and their eyes are opened. They recognize Jesus, but he vanishes. They rush back to Jerusalem to tell the others.",
        verse: "Luke 24:13-35",
        book: "Luke",
        chapter: 24,
        verseStart: 13,
        verseEnd: 35,
        quote:
          '"Were not our hearts burning within us while he talked with us on the road and opened the Scriptures to us?"'
      }
    ]
  }
];

export const routes = [
  {
    journey: 1,
    outbound: [
      [35.304, 32.700],  // Nazareth
      [35.25, 32.40],    // through Jezreel Valley
      [35.28, 32.21],    // Samaria region
      [35.25, 31.95],    // south
      [35.20, 31.71],    // Bethlehem
      [35.23, 31.78],    // Jerusalem
      [35.20, 31.71],    // back to Bethlehem
      [35.0, 31.50],     // heading southwest
      [34.5, 31.30],     // through Negev
      [33.8, 30.90],     // Sinai
      [32.35, 30.85]     // Egypt
    ],
    returnPath: [
      [32.35, 30.85],    // Egypt
      [33.8, 30.90],     // Sinai
      [34.5, 31.30],     // Negev
      [35.0, 31.50],     // toward Judea
      [35.25, 31.95],    // northward
      [35.28, 32.21],    // Samaria
      [35.304, 32.700],  // Nazareth
      [35.25, 32.40],    // south through valley
      [35.23, 31.78],    // Jerusalem (Boy at Temple)
      [35.25, 32.40],    // north
      [35.304, 32.700]   // back to Nazareth
    ]
  },
  {
    journey: 2,
    outbound: [
      [35.304, 32.700],  // Nazareth
      [35.40, 32.55],    // through valley
      [35.50, 32.30],    // Jordan Valley
      [35.55, 31.84],    // Bethany beyond Jordan (Baptism)
      [35.35, 31.65],    // Wilderness of Judea
      [35.40, 32.10],    // northward
      [35.34, 32.75],    // Cana
      [35.58, 32.88],    // Capernaum
      [35.50, 32.60],    // south
      [35.28, 32.21],    // Samaria
      [35.23, 31.78],    // Jerusalem
      [35.28, 32.21],    // Sychar (on return)
      [35.34, 32.75],    // Cana (2nd visit)
      [35.58, 32.88]     // Capernaum
    ],
    returnPath: null
  },
  {
    journey: 3,
    outbound: [
      [35.58, 32.88],    // Capernaum
      [35.555, 32.881],  // Mount of Beatitudes
      [35.58, 32.88],    // Capernaum
      [35.35, 32.63],    // Nain
      [35.58, 32.82],    // Sea of Galilee
      [35.68, 32.65],    // Gadara
      [35.58, 32.88],    // Capernaum
      [35.304, 32.700],  // Nazareth
      [35.63, 32.91],    // Bethsaida
      [35.52, 32.84],    // Magdala
      [35.30, 32.90],    // westward
      [35.20, 33.27],    // Tyre
      [35.37, 33.56],    // Sidon
      [35.66, 32.78],    // Decapolis
      [35.69, 33.25],    // Caesarea Philippi
      [35.39, 32.69],    // Mount Tabor
      [35.58, 32.88]     // Capernaum
    ],
    returnPath: null
  },
  {
    journey: 4,
    outbound: [
      [35.58, 32.88],    // Capernaum
      [35.55, 32.50],    // south through Jordan Valley
      [35.57, 32.08],    // Perea
      [35.45, 31.87],    // Jericho
      [35.26, 31.77],    // Bethany
      [35.23, 31.78],    // Jerusalem
      [35.25, 31.78],    // Mount of Olives
      [35.23, 31.78],    // Jerusalem (Passion)
      [34.98, 31.84],    // Emmaus
      [35.23, 31.78],    // Jerusalem (Return)
      [35.25, 31.78]     // Mount of Olives (Ascension)
    ],
    returnPath: null
  }
];

// ── Computed indexes ─────────────────────────────────────
export const scriptureIndex = {};
export const allChapters = [];
export const allVerses = [];

(function buildIndex() {
  const chapterSet = new Set();
  const verseSet = new Set();

  for (const city of cities) {
    for (const event of city.events) {
      const chapterKey = `${event.book} ${event.chapter}`;
      const verseKey = event.verse;

      chapterSet.add(chapterKey);
      verseSet.add(verseKey);

      if (!scriptureIndex[chapterKey]) scriptureIndex[chapterKey] = [];
      scriptureIndex[chapterKey].push({ cityId: city.id, event });

      if (!scriptureIndex[verseKey]) scriptureIndex[verseKey] = [];
      scriptureIndex[verseKey].push({ cityId: city.id, event });
    }
  }

  // Sort chapters by book order then chapter number
  const bookOrder = ["Matthew", "Mark", "Luke", "John", "Acts"];
  const sorted = [...chapterSet].sort((a, b) => {
    const [bookA, chA] = [a.split(" ").slice(0, -1).join(" "), parseInt(a.split(" ").pop())];
    const [bookB, chB] = [b.split(" ").slice(0, -1).join(" "), parseInt(b.split(" ").pop())];
    const diff = bookOrder.indexOf(bookA) - bookOrder.indexOf(bookB);
    return diff !== 0 ? diff : chA - chB;
  });
  allChapters.push(...sorted);

  const sortedVerses = [...verseSet].sort((a, b) => {
    const parseRef = (r) => {
      const m = r.match(/^(.+?)\s(\d+):(\d+)/);
      if (!m) return [99, 99, 99];
      return [bookOrder.indexOf(m[1]), parseInt(m[2]), parseInt(m[3])];
    };
    const [bA, cA, vA] = parseRef(a);
    const [bB, cB, vB] = parseRef(b);
    return bA - bB || cA - cB || vA - vB;
  });
  allVerses.push(...sortedVerses);
})();
