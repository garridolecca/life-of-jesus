/**
 * Life of Jesus — Bilingual Translation Module
 * Languages: English (en) | Spanish (es)
 * Spanish Bible quotes: Reina-Valera 1960 (RVR1960)
 */

// ─────────────────────────────────────────────────────────────
// LANGUAGE STATE
// ─────────────────────────────────────────────────────────────
export let lang = "en";

export function setLang(l) {
  lang = l;
}

// ─────────────────────────────────────────────────────────────
// UI STRINGS
// ─────────────────────────────────────────────────────────────
const ui = {
  en: {
    appTitle: "Life of Jesus",
    appSubtitle: "Interactive Map of the Gospels",
    splashVerse:
      '"I am the way and the truth and the life. No one comes to the Father except through me."',
    splashVerseRef: "John 14:6",

    btnScripture: "Scripture",
    btnNames: "Names",
    btnInfo: "Info",

    chipAll: "All Phases",
    chip1: "Birth",
    chip2: "Early",
    chip3: "Galilee",
    chip4: "Passion",

    namesBiblical: "Biblical Name",
    namesModern: "Modern Name",

    scripturePanelTitle: "Scripture Search",
    scriptureSearchPlaceholder: "Search Gospels\u2026",

    eventSingular: "event",
    eventPlural: "events",

    infoTitle: "About This Map",
    infoLegendTitle: "Phase Legend",
    infoFeaturesTitle: "Features",
    infoFeature1: "Click any city to see events and Scripture",
    infoFeature2: "Filter by life phase using the chips above",
    infoFeature3: "Search Scripture in the Scripture panel",
    infoFeature4: "Toggle between biblical and modern city names",
    infoFeature5: "Switch language between English and Spanish",
    infoVerse:
      '"I am the way and the truth and the life. No one comes to the Father except through me." \u2014 John 14:6',

    sheetModernLabel: "Modern:",
    sheetRegionLabel: "Region:",

    donateTitle: "Support This Project",
    donateText:
      "This map is free and ad-free. If it has been a blessing to you, consider supporting its development.",
    donateButton: "Donate",
    donateEmailLabel: "Questions or feedback?",
    donateEmailText: "Send an email",

    langChoose: "Espa\u00f1ol",
  },

  es: {
    appTitle: "Vida de Jes\u00fas",
    appSubtitle: "Mapa Interactivo de los Evangelios",
    splashVerse:
      '"Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por m\u00ed."',
    splashVerseRef: "Juan 14:6",

    btnScripture: "Escritura",
    btnNames: "Nombres",
    btnInfo: "Info",

    chipAll: "Todas las Fases",
    chip1: "Nacimiento",
    chip2: "Temprano",
    chip3: "Galilea",
    chip4: "Pasi\u00f3n",

    namesBiblical: "Nombre B\u00edblico",
    namesModern: "Nombre Moderno",

    scripturePanelTitle: "B\u00fasqueda de Escritura",
    scriptureSearchPlaceholder: "Buscar en Evangelios\u2026",

    eventSingular: "evento",
    eventPlural: "eventos",

    infoTitle: "Acerca de Este Mapa",
    infoLegendTitle: "Leyenda de Fases",
    infoFeaturesTitle: "Caracter\u00edsticas",
    infoFeature1: "Haz clic en cualquier ciudad para ver eventos y Escritura",
    infoFeature2: "Filtra por fase de vida usando los chips de arriba",
    infoFeature3: "Busca Escritura en el panel de Escritura",
    infoFeature4: "Alterna entre nombres b\u00edblicos y modernos de ciudades",
    infoFeature5: "Cambia el idioma entre ingl\u00e9s y espa\u00f1ol",
    infoVerse:
      '"Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por m\u00ed." \u2014 Juan 14:6',

    sheetModernLabel: "Moderno:",
    sheetRegionLabel: "Regi\u00f3n:",

    donateTitle: "Apoya Este Proyecto",
    donateText:
      "Este mapa es gratuito y sin anuncios. Si ha sido de bendici\u00f3n para ti, considera apoyar su desarrollo.",
    donateButton: "Donar",
    donateEmailLabel: "\u00bfPreguntas o comentarios?",
    donateEmailText: "Enviar un correo",

    langChoose: "English",
  },
};

/**
 * Look up a UI string by key in the current language.
 * Falls back to English if the key is missing in Spanish.
 */
export function t(key) {
  return (ui[lang] && ui[lang][key]) ?? ui["en"][key] ?? key;
}

// ─────────────────────────────────────────────────────────────
// JOURNEY (PHASE) TRANSLATIONS
// ─────────────────────────────────────────────────────────────
const journeyTranslations = {
  1: {
    en: {
      name: "Birth & Childhood",
      shortName: "Birth",
      dateRange: "c. 6\u20134 BC",
      chapters: "Matthew 1\u20132, Luke 1\u20132",
      description:
        "The incarnation of the Son of God begins with angelic announcements, a humble birth in Bethlehem, and the visit of shepherds and magi. Fleeing Herod's wrath, the holy family takes refuge in Egypt before settling in Nazareth. At age twelve, the boy Jesus astonishes the teachers in the Jerusalem Temple.",
    },
    es: {
      name: "Nacimiento e Infancia",
      shortName: "Nacimiento",
      dateRange: "c. 6\u20134 a.C.",
      chapters: "Mateo 1\u20132, Lucas 1\u20132",
      description:
        "La encarnaci\u00f3n del Hijo de Dios comienza con anuncios ang\u00e9licos, un humilde nacimiento en Bel\u00e9n y la visita de pastores y magos. Huyendo de la ira de Herodes, la sagrada familia se refugia en Egipto antes de establecerse en Nazaret. A los doce a\u00f1os, el ni\u00f1o Jes\u00fas asombra a los maestros en el Templo de Jerusal\u00e9n.",
    },
  },
  2: {
    en: {
      name: "Early Ministry",
      shortName: "Early",
      dateRange: "c. AD 27",
      chapters: "Matthew 3\u20134, Mark 1, Luke 3\u20134, John 1\u20134",
      description:
        "Jesus is baptized by John in the Jordan, resists Satan's temptations in the wilderness, and begins gathering disciples. His first miracle at Cana reveals his glory. He cleanses the Temple in Jerusalem, teaches Nicodemus about being born again, and offers living water to a Samaritan woman at the well.",
    },
    es: {
      name: "Ministerio Temprano",
      shortName: "Temprano",
      dateRange: "c. 27 d.C.",
      chapters: "Mateo 3\u20134, Marcos 1, Lucas 3\u20134, Juan 1\u20134",
      description:
        "Jes\u00fas es bautizado por Juan en el Jord\u00e1n, resiste las tentaciones de Satan\u00e1s en el desierto y comienza a reunir disc\u00edpulos. Su primer milagro en Can\u00e1 revela su gloria. Purifica el Templo en Jerusal\u00e9n, ense\u00f1a a Nicodemo sobre nacer de nuevo y ofrece agua viva a una mujer samaritana junto al pozo.",
    },
  },
  3: {
    en: {
      name: "Galilean Ministry",
      shortName: "Galilee",
      dateRange: "c. AD 27\u201329",
      chapters: "Matthew 5\u201318, Mark 2\u20139, Luke 5\u20139, John 5\u20136",
      description:
        "Based in Capernaum, Jesus teaches with authority, performs extraordinary miracles, and draws vast crowds across Galilee. The Sermon on the Mount lays out the ethic of the Kingdom. He calms storms, feeds thousands, walks on water, heals the sick, and raises the dead. Peter confesses him as the Christ, and three disciples witness the Transfiguration.",
    },
    es: {
      name: "Ministerio en Galilea",
      shortName: "Galilea",
      dateRange: "c. 27\u201329 d.C.",
      chapters: "Mateo 5\u201318, Marcos 2\u20139, Lucas 5\u20139, Juan 5\u20136",
      description:
        "Con base en Cafarna\u00fam, Jes\u00fas ense\u00f1a con autoridad, realiza milagros extraordinarios y atrae multitudes por toda Galilea. El Serm\u00f3n del Monte establece la \u00e9tica del Reino. Calma tormentas, alimenta a miles, camina sobre el agua, sana a los enfermos y resucita a los muertos. Pedro lo confiesa como el Cristo y tres disc\u00edpulos presencian la Transfiguraci\u00f3n.",
    },
  },
  4: {
    en: {
      name: "Passion & Resurrection",
      shortName: "Passion",
      dateRange: "c. AD 29\u201330",
      chapters: "Matthew 19\u201328, Mark 10\u201316, Luke 10\u201324, John 7\u201321",
      description:
        "Jesus sets his face toward Jerusalem, raising Lazarus from the dead and calling Zacchaeus in Jericho along the way. He enters Jerusalem in triumph, teaches in the Temple, and shares a final Passover meal with his disciples. Betrayed, tried, crucified, and buried \u2014 he rises on the third day, appears to his followers, and ascends to the Father.",
    },
    es: {
      name: "Pasi\u00f3n y Resurrecci\u00f3n",
      shortName: "Pasi\u00f3n",
      dateRange: "c. 29\u201330 d.C.",
      chapters: "Mateo 19\u201328, Marcos 10\u201316, Lucas 10\u201324, Juan 7\u201321",
      description:
        "Jes\u00fas pone su rostro hacia Jerusal\u00e9n, resucitando a L\u00e1zaro de entre los muertos y llamando a Zaqueo en Jeric\u00f3 en el camino. Entra triunfalmente en Jerusal\u00e9n, ense\u00f1a en el Templo y comparte una \u00faltima cena de Pascua con sus disc\u00edpulos. Traicionado, juzgado, crucificado y sepultado, resucita al tercer d\u00eda, se aparece a sus seguidores y asciende al Padre.",
    },
  },
};

/**
 * Get a translated field from a journey object.
 * @param {number} journeyId - Journey/phase number 1\u20134
 * @param {string} field     - e.g. "name", "shortName", "dateRange", "chapters", "description"
 */
export function journeyText(journeyId, field) {
  const entry = journeyTranslations[journeyId];
  if (!entry) return "";
  const localized = entry[lang] ?? entry["en"];
  return localized[field] ?? entry["en"][field] ?? "";
}

// ─────────────────────────────────────────────────────────────
// CITY TRANSLATIONS
// ─────────────────────────────────────────────────────────────
const cityTranslations = {
  bethlehem: {
    en: { biblicalName: "Bethlehem", modernName: "Bethlehem, Palestine", region: "Judea" },
    es: { biblicalName: "Bel\u00e9n", modernName: "Bel\u00e9n, Palestina", region: "Judea" },
  },
  jerusalem: {
    en: { biblicalName: "Jerusalem", modernName: "Jerusalem, Israel", region: "Judea" },
    es: { biblicalName: "Jerusal\u00e9n", modernName: "Jerusal\u00e9n, Israel", region: "Judea" },
  },
  egypt: {
    en: { biblicalName: "Egypt", modernName: "Egypt", region: "Egypt" },
    es: { biblicalName: "Egipto", modernName: "Egipto", region: "Egipto" },
  },
  nazareth: {
    en: { biblicalName: "Nazareth", modernName: "Nazareth, Israel", region: "Galilee" },
    es: { biblicalName: "Nazaret", modernName: "Nazaret, Israel", region: "Galilea" },
  },
  "bethany-beyond-jordan": {
    en: { biblicalName: "Bethany Beyond the Jordan", modernName: "Al-Maghtas, Jordan", region: "Perea" },
    es: { biblicalName: "Betania m\u00e1s all\u00e1 del Jord\u00e1n", modernName: "Al-Maghtas, Jordania", region: "Perea" },
  },
  "wilderness-of-judea": {
    en: { biblicalName: "Wilderness of Judea", modernName: "Judean Desert, Israel", region: "Judea" },
    es: { biblicalName: "Desierto de Judea", modernName: "Desierto de Judea, Israel", region: "Judea" },
  },
  cana: {
    en: { biblicalName: "Cana of Galilee", modernName: "Kafr Kanna, Israel", region: "Galilee" },
    es: { biblicalName: "Can\u00e1 de Galilea", modernName: "Kafr Kanna, Israel", region: "Galilea" },
  },
  capernaum: {
    en: { biblicalName: "Capernaum", modernName: "Kfar Nahum, Israel", region: "Galilee" },
    es: { biblicalName: "Cafarna\u00fam", modernName: "Kfar Nahum, Israel", region: "Galilea" },
  },
  sychar: {
    en: { biblicalName: "Sychar", modernName: "Near Nablus, Palestine", region: "Samaria" },
    es: { biblicalName: "Sicar", modernName: "Cerca de Nablus, Palestina", region: "Samaria" },
  },
  "mount-of-beatitudes": {
    en: { biblicalName: "Mount of Beatitudes", modernName: "Mount Eremos, Israel", region: "Galilee" },
    es: { biblicalName: "Monte de las Bienaventuranzas", modernName: "Monte Eremos, Israel", region: "Galilea" },
  },
  nain: {
    en: { biblicalName: "Nain", modernName: "Nein, Israel", region: "Galilee" },
    es: { biblicalName: "Na\u00edn", modernName: "Nein, Israel", region: "Galilea" },
  },
  "sea-of-galilee": {
    en: { biblicalName: "Sea of Galilee", modernName: "Lake Kinneret, Israel", region: "Galilee" },
    es: { biblicalName: "Mar de Galilea", modernName: "Lago Kinneret, Israel", region: "Galilea" },
  },
  gadara: {
    en: { biblicalName: "Gadara", modernName: "Umm Qais, Jordan", region: "Decapolis" },
    es: { biblicalName: "Gadara", modernName: "Umm Qais, Jordania", region: "Dec\u00e1polis" },
  },
  bethsaida: {
    en: { biblicalName: "Bethsaida", modernName: "Et-Tell, Israel", region: "Galilee" },
    es: { biblicalName: "Betsaida", modernName: "Et-Tell, Israel", region: "Galilea" },
  },
  chorazin: {
    en: { biblicalName: "Chorazin", modernName: "Korazim, Israel", region: "Galilee" },
    es: { biblicalName: "Coraz\u00edn", modernName: "Korazim, Israel", region: "Galilea" },
  },
  magdala: {
    en: { biblicalName: "Magdala", modernName: "Migdal, Israel", region: "Galilee" },
    es: { biblicalName: "Magdala", modernName: "Migdal, Israel", region: "Galilea" },
  },
  tyre: {
    en: { biblicalName: "Tyre", modernName: "Tyre, Lebanon", region: "Phoenicia" },
    es: { biblicalName: "Tiro", modernName: "Tiro, L\u00edbano", region: "Fenicia" },
  },
  sidon: {
    en: { biblicalName: "Sidon", modernName: "Saida, Lebanon", region: "Phoenicia" },
    es: { biblicalName: "Sid\u00f3n", modernName: "Saida, L\u00edbano", region: "Fenicia" },
  },
  decapolis: {
    en: { biblicalName: "Decapolis", modernName: "Northern Jordan", region: "Decapolis" },
    es: { biblicalName: "Dec\u00e1polis", modernName: "Norte de Jordania", region: "Dec\u00e1polis" },
  },
  "caesarea-philippi": {
    en: { biblicalName: "Caesarea Philippi", modernName: "Banias, Israel", region: "Gaulanitis" },
    es: { biblicalName: "Cesarea de Filipo", modernName: "Banias, Israel", region: "Gaulanitis" },
  },
  "mount-tabor": {
    en: { biblicalName: "Mount Tabor", modernName: "Mount Tabor, Israel", region: "Galilee" },
    es: { biblicalName: "Monte Tabor", modernName: "Monte Tabor, Israel", region: "Galilea" },
  },
  perea: {
    en: { biblicalName: "Perea", modernName: "Eastern Jordan Valley", region: "Perea" },
    es: { biblicalName: "Perea", modernName: "Valle del Jord\u00e1n Oriental", region: "Perea" },
  },
  bethany: {
    en: { biblicalName: "Bethany", modernName: "Al-Eizariya, Palestine", region: "Judea" },
    es: { biblicalName: "Betania", modernName: "Al-Eizariya, Palestina", region: "Judea" },
  },
  jericho: {
    en: { biblicalName: "Jericho", modernName: "Jericho, Palestine", region: "Judea" },
    es: { biblicalName: "Jeric\u00f3", modernName: "Jeric\u00f3, Palestina", region: "Judea" },
  },
  "mount-of-olives": {
    en: { biblicalName: "Mount of Olives", modernName: "Mount of Olives, Jerusalem", region: "Judea" },
    es: { biblicalName: "Monte de los Olivos", modernName: "Monte de los Olivos, Jerusal\u00e9n", region: "Judea" },
  },
  emmaus: {
    en: { biblicalName: "Emmaus", modernName: "Near Jerusalem", region: "Judea" },
    es: { biblicalName: "Ema\u00fas", modernName: "Cerca de Jerusal\u00e9n", region: "Judea" },
  },
};

/**
 * Get a translated field from a city's name/location data.
 * @param {string} cityId - City ID from data.js (e.g. "bethlehem")
 * @param {string} field  - "biblicalName" | "modernName" | "region"
 */
export function cityText(cityId, field) {
  const entry = cityTranslations[cityId];
  if (!entry) return "";
  const localized = entry[lang] ?? entry["en"];
  return localized[field] ?? entry["en"][field] ?? "";
}

// ─────────────────────────────────────────────────────────────
// EVENT TRANSLATIONS
// All Spanish Bible quotes use Reina-Valera 1960 (RVR1960)
// Keys: cityId -> journey number (integer) -> { action, description, quote }
// For cities with multiple events in the same phase, the key is
// the event's journey number. Where collisions occur, the events
// are stored in the order they appear in data.js.
// ─────────────────────────────────────────────────────────────
const eventTranslations = {
  bethlehem: {
    1: {
      action: "Nacimiento de Jes\u00fas",
      description:
        "Mar\u00eda da a luz a Jes\u00fas en Bel\u00e9n y lo acuesta en un pesebre, porque no hay lugar para ellos en el mes\u00f3n. Los pastores, avisados por \u00e1ngeles, vienen a adorar al Rey reci\u00e9n nacido.",
      quote:
        '"Y dio a luz a su hijo primog\u00e9nito, y lo envolvi\u00f3 en pa\u00f1ales, y lo acost\u00f3 en un pesebre, porque no hab\u00eda lugar para ellos en el mes\u00f3n."',
    },
    2: {
      action: "Visita de los Magos",
      description:
        "Sabios del Oriente siguen una estrella hasta Bel\u00e9n y presentan regalos de oro, incienso y mirra al ni\u00f1o Jes\u00fas. Advertidos en un sue\u00f1o, regresan a su tierra por otro camino.",
      quote:
        '"Y al entrar en la casa, vieron al ni\u00f1o con su madre Mar\u00eda, y postr\u00e1ndose, lo adoraron."',
    },
  },

  jerusalem: {
    1: {
      action: "Presentaci\u00f3n en el Templo",
      description:
        "Jos\u00e9 y Mar\u00eda llevan al ni\u00f1o Jes\u00fas al Templo para consagrarlo al Se\u00f1or. El anciano profeta Sime\u00f3n toma al ni\u00f1o en sus brazos y lo declara luz para revelaci\u00f3n a los gentiles. La profetisa Ana da gracias y habla del ni\u00f1o a todos los que esperan la redenci\u00f3n de Jerusal\u00e9n.",
      quote:
        '"Porque han visto mis ojos tu salvaci\u00f3n, la cual has preparado en presencia de todos los pueblos; luz para revelaci\u00f3n a los gentiles, y gloria de tu pueblo Israel."',
    },
    2: {
      action: "El Ni\u00f1o Jes\u00fas en el Templo",
      description:
        "A los doce a\u00f1os, Jes\u00fas viaja a Jerusal\u00e9n para la fiesta de la Pascua. Sus padres lo encuentran en los atrios del Templo, sentado entre los maestros, escuch\u00e1ndolos y haci\u00e9ndoles preguntas. Todos los que lo oyen quedan asombrados de su entendimiento.",
      quote:
        '"\u00bfPor qu\u00e9 me buscabais? \u00bfNo sab\u00edais que en los negocios de mi Padre me es necesario estar?"',
    },
    3: {
      action: "Purificaci\u00f3n del Templo",
      description:
        "Jes\u00fas expulsa a los mercaderes y cambistas de los atrios del Templo, volcando sus mesas y declarando que la casa de su Padre no debe convertirse en un mercado. Los l\u00edderes jud\u00edos exigen una se\u00f1al, y Jes\u00fas responde: \u2018Destruid este templo, y en tres d\u00edas lo levantar\u00e9.\u2019",
      quote:
        '"Destruid este templo, y en tres d\u00edas lo levantar\u00e9."',
    },
    4: {
      action: "Nicodemo Visita de Noche",
      description:
        "Nicodemo, fariseo y miembro del concilio jud\u00edo, viene a Jes\u00fas de noche. Jes\u00fas le ense\u00f1a sobre nacer de nuevo del agua y del Esp\u00edritu, y revela el coraz\u00f3n del evangelio: Porque de tal manera am\u00f3 Dios al mundo, que ha dado a su Hijo unig\u00e9nito.",
      quote:
        '"Porque de tal manera am\u00f3 Dios al mundo, que ha dado a su Hijo unig\u00e9nito, para que todo aquel que en \u00e9l cree, no se pierda, mas tenga vida eterna."',
    },
    5: {
      action: "Entrada Triunfal",
      description:
        "Jes\u00fas entra en Jerusal\u00e9n montado en un burro mientras las multitudes tienden sus mantos y ramas de palma en el camino, clamando \u2018\u00a1Hosanna al Hijo de David!\u2019 Toda la ciudad se conmueve, cumpliendo la profec\u00eda de Zacar\u00edas del rey humilde que viene sobre un pollino.",
      quote:
        '"\u00a1Hosanna al Hijo de David! \u00a1Bendito el que viene en el nombre del Se\u00f1or! \u00a1Hosanna en las alturas!"',
    },
    6: {
      action: "La \u00daltima Cena",
      description:
        "En la noche antes de su muerte, Jes\u00fas comparte una cena de Pascua con sus doce disc\u00edpulos. Les lava los pies, instituye la Santa Cena con pan y vino como s\u00edmbolos de su cuerpo y sangre, y da el nuevo mandamiento: amaos unos a otros como yo os he amado.",
      quote:
        '"Esto es mi cuerpo, que por vosotros es dado; haced esto en memoria de m\u00ed\u2026 Esta copa es el nuevo pacto en mi sangre, que por vosotros se derrama."',
    },
    7: {
      action: "Juicio ante Pilato",
      description:
        "Despu\u00e9s de ser arrestado en Getseman\u00ed y juzgado ante el Sanedr\u00edn, Jes\u00fas comparece ante el gobernador romano Poncio Pilato. Aunque Pilato no encuentra base para una acusaci\u00f3n, la multitud exige la crucifixi\u00f3n. Pilato se lava las manos y entrega a Jes\u00fas para ser azotado y crucificado.",
      quote:
        '"Mi reino no es de este mundo; si mi reino fuera de este mundo, mis servidores pelear\u00edan para que yo no fuera entregado. Pero mi reino no es de aqu\u00ed."',
    },
    8: {
      action: "Crucifixi\u00f3n y Muerte",
      description:
        "Jes\u00fas es crucificado en el G\u00f3lgota entre dos criminales. Perdona a sus verdugos, promete el para\u00edso al ladr\u00f3n arrepentido y encomienda a su madre al disc\u00edpulo amado. Despu\u00e9s de seis horas de agon\u00eda, la oscuridad cubre la tierra, y Jes\u00fas clama \u2018Consumado es\u2019 antes de entregar su esp\u00edritu.",
      quote:
        '"Consumado es." Y habiendo inclinado la cabeza, entreg\u00f3 el esp\u00edritu.',
    },
    9: {
      action: "Resurrecci\u00f3n",
      description:
        "Al tercer d\u00eda, unas mujeres llegan al sepulcro al amanecer y encuentran la piedra removida. Un \u00e1ngel declara: \u2018\u00a1No est\u00e1 aqu\u00ed, pues ha resucitado!\u2019 Mar\u00eda Magdalena encuentra al Jes\u00fas resucitado cerca del sepulcro. Esa noche, Jes\u00fas se aparece a los disc\u00edpulos tras puertas cerradas, mostr\u00e1ndoles sus manos y su costado.",
      quote:
        '"No est\u00e1 aqu\u00ed, pues ha resucitado, como dijo. Venid, ved el lugar donde fue puesto el Se\u00f1or."',
    },
  },

  egypt: {
    1: {
      action: "Huida a Egipto",
      description:
        "Advertido en un sue\u00f1o de que Herodes busca matar al ni\u00f1o, Jos\u00e9 toma a Mar\u00eda y a Jes\u00fas y huye de noche a Egipto. Permanecen all\u00ed hasta la muerte de Herodes, cumpliendo la profec\u00eda: \u2018De Egipto llam\u00e9 a mi Hijo.\u2019",
      quote:
        '"Lev\u00e1ntate y toma al ni\u00f1o y a su madre, y huye a Egipto, y permanece all\u00e1 hasta que yo te diga; porque acontecer\u00e1 que Herodes buscar\u00e1 al ni\u00f1o para matarlo."',
    },
  },

  nazareth: {
    1: {
      action: "Infancia en Nazaret",
      description:
        "Despu\u00e9s de regresar de Egipto, la sagrada familia se establece en el pueblo de Nazaret en Galilea, cumpliendo la palabra de que Jes\u00fas ser\u00eda llamado nazareno. El ni\u00f1o crece y se fortalece, lleno de sabidur\u00eda, y la gracia de Dios est\u00e1 sobre \u00e9l.",
      quote:
        '"Y vino y habit\u00f3 en la ciudad que se llama Nazaret, para que se cumpliese lo que fue dicho por los profetas, que habr\u00eda de ser llamado nazareno."',
    },
    2: {
      action: "Rechazado en Nazaret",
      description:
        "Jes\u00fas regresa a su pueblo natal y lee de Isa\u00edas en la sinagoga: \u2018El Esp\u00edritu del Se\u00f1or est\u00e1 sobre m\u00ed, por cuanto me ha ungido para dar buenas nuevas a los pobres.\u2019 Declara cumplida la profec\u00eda, pero el pueblo se enfurece y lo expulsa de la ciudad.",
      quote:
        '"De cierto os digo, que ning\u00fan profeta es acepto en su propia tierra."',
    },
    3: {
      action: "Segundo Rechazo en Nazaret",
      description:
        "Jes\u00fas visita Nazaret nuevamente y ense\u00f1a en la sinagoga. La gente se ofende, diciendo \u2018\u00bfNo es este el hijo del carpintero?\u2019 Debido a su incredulidad, Jes\u00fas no puede hacer all\u00ed ninguna obra poderosa excepto sanar a unos pocos enfermos. Se maravilla de su falta de fe.",
      quote:
        '"No hay profeta sin honra sino en su propia tierra, y entre sus parientes, y en su casa."',
    },
  },

  "bethany-beyond-jordan": {
    1: {
      action: "Bautismo de Jes\u00fas",
      description:
        "Jes\u00fas viene de Galilea al Jord\u00e1n para ser bautizado por Juan. Al salir del agua, los cielos se abren y el Esp\u00edritu de Dios desciende como paloma. Una voz del cielo declara: \u2018Este es mi Hijo amado, en quien tengo complacencia.\u2019",
      quote:
        '"Este es mi Hijo amado, en quien tengo complacencia."',
    },
  },

  "wilderness-of-judea": {
    1: {
      action: "Tentaci\u00f3n por Satan\u00e1s",
      description:
        "Inmediatamente despu\u00e9s de su bautismo, el Esp\u00edritu lleva a Jes\u00fas al desierto donde ayuna cuarenta d\u00edas y cuarenta noches. Satan\u00e1s lo tienta tres veces \u2014 con pan, con espect\u00e1culo y con poder terrenal \u2014 pero Jes\u00fas resiste cada tentaci\u00f3n con las Escrituras.",
      quote:
        '"No s\u00f3lo de pan vivir\u00e1 el hombre, sino de toda palabra que sale de la boca de Dios."',
    },
  },

  cana: {
    1: {
      action: "Agua en Vino",
      description:
        "En una fiesta de bodas en Can\u00e1, se acaba el vino. Mar\u00eda le dice a Jes\u00fas, y \u00e9l instruye a los sirvientes a llenar seis tinajas de piedra con agua. Al sacarla, el agua se ha convertido en el mejor vino. Esta es la primera de las se\u00f1ales de Jes\u00fas, revelando su gloria.",
      quote:
        '"Este principio de se\u00f1ales hizo Jes\u00fas en Can\u00e1 de Galilea, y manifest\u00f3 su gloria; y sus disc\u00edpulos creyeron en \u00e9l."',
    },
    2: {
      action: "Sanaci\u00f3n del Hijo del Oficial",
      description:
        "Un oficial real de Cafarna\u00fam le ruega a Jes\u00fas que sane a su hijo moribundo. Sin viajar all\u00ed, Jes\u00fas dice: \u2018Ve, tu hijo vive.\u2019 El hombre cree y parte; sus sirvientes lo encuentran con la noticia de que el muchacho se recuper\u00f3 a la misma hora en que Jes\u00fas habl\u00f3.",
      quote:
        '"Ve, tu hijo vive." Y el hombre crey\u00f3 la palabra que Jes\u00fas le dijo, y se fue.',
    },
  },

  capernaum: {
    1: {
      action: "Establecimiento del Centro de Ministerio",
      description:
        "Despu\u00e9s de ser rechazado en Nazaret, Jes\u00fas se muda a Cafarna\u00fam junto al Mar de Galilea, cumpliendo la profec\u00eda de Isa\u00edas sobre una gran luz que amanece sobre los que viven en tinieblas. Desde aqu\u00ed comienza a predicar: \u2018Arrepent\u00edos, porque el reino de los cielos se ha acercado.\u2019",
      quote:
        '"Arrepent\u00edos, porque el reino de los cielos se ha acercado."',
    },
    2: {
      action: "Ense\u00f1anza con Autoridad",
      description:
        "Jes\u00fas ense\u00f1a en la sinagoga de Cafarna\u00fam, y la gente queda asombrada porque ense\u00f1a con autoridad, no como los escribas. Ordena a un esp\u00edritu inmundo que salga de un hombre, y este obedece. Las noticias sobre \u00e9l se difunden r\u00e1pidamente por toda Galilea.",
      quote:
        '"Y se admiraban de su doctrina; porque les ense\u00f1aba como quien tiene autoridad, y no como los escribas."',
    },
    3: {
      action: "Sanaci\u00f3n del Siervo del Centuri\u00f3n",
      description:
        "Un centuri\u00f3n romano pide a Jes\u00fas que sane a su siervo paral\u00edtico. Cuando Jes\u00fas ofrece ir, el centuri\u00f3n dice que no es digno pero que una palabra de Jes\u00fas es suficiente. Jes\u00fas se maravilla de tan gran fe \u2014 no encontrada ni en Israel \u2014 y sana al siervo en esa misma hora.",
      quote:
        '"De cierto os digo, que ni aun en Israel he hallado tanta fe."',
    },
    4: {
      action: "Sanaci\u00f3n de la Suegra de Pedro",
      description:
        "Jes\u00fas entra en la casa de Pedro y Andr\u00e9s y encuentra a la suegra de Pedro acostada con fiebre. La toma de la mano y la levanta; la fiebre la deja al instante y ella comienza a servirles. Esa noche, le traen muchos enfermos y endemoniados.",
      quote:
        '"Entonces \u00e9l se acerc\u00f3, y la tom\u00f3 de la mano y la levant\u00f3; e inmediatamente le dej\u00f3 la fiebre, y ella les serv\u00eda."',
    },
  },

  sychar: {
    1: {
      action: "La Mujer en el Pozo",
      description:
        "Viajando por Samaria, Jes\u00fas se sienta junto al pozo de Jacob al mediod\u00eda. Pide agua a una mujer samaritana, rompiendo tab\u00faes culturales. Le ofrece \u2018agua viva\u2019 que se convierte en manantial de vida eterna. Ella lo reconoce como el Mes\u00edas y trae a todo su pueblo a escucharlo.",
      quote:
        '"Todo aquel que bebiere de esta agua, volver\u00e1 a tener sed; mas el que bebiere del agua que yo le dar\u00e9, no tendr\u00e1 sed jam\u00e1s."',
    },
  },

  "mount-of-beatitudes": {
    1: {
      action: "Serm\u00f3n del Monte",
      description:
        "Jes\u00fas sube a un monte cerca del Mar de Galilea y pronuncia su serm\u00f3n m\u00e1s famoso. Comenzando con las Bienaventuranzas (\u2018Bienaventurados los pobres en esp\u00edritu\u2026\u2019), ense\u00f1a sobre la ley, la oraci\u00f3n, el ayuno, la ansiedad y la regla de oro. Sus oyentes quedan asombrados de su ense\u00f1anza.",
      quote:
        '"Bienaventurados los pobres en esp\u00edritu, porque de ellos es el reino de los cielos. Bienaventurados los que lloran, porque ellos recibir\u00e1n consolaci\u00f3n."',
    },
  },

  nain: {
    1: {
      action: "Resurrecci\u00f3n del Hijo de la Viuda",
      description:
        "Al acercarse Jes\u00fas a la puerta de la ciudad de Na\u00edn, una procesi\u00f3n f\u00fanebre lleva al hijo \u00fanico de una viuda. Su coraz\u00f3n se compadece y dice: \u2018No llores.\u2019 Toca el f\u00e9retro y ordena: \u2018\u00a1Joven, a ti te digo, lev\u00e1ntate!\u2019 El muerto se incorpora y comienza a hablar. El temor se apodera de todos y alaban a Dios.",
      quote:
        '"Joven, a ti te digo, lev\u00e1ntate." Y se incorpor\u00f3 el que hab\u00eda muerto, y comenz\u00f3 a hablar. Y lo dio a su madre.',
    },
  },

  "sea-of-galilee": {
    1: {
      action: "Calma la Tempestad",
      description:
        "Mientras cruzan el Mar de Galilea, se levanta una furiosa tormenta. Los disc\u00edpulos despiertan a Jes\u00fas en p\u00e1nico. \u00c9l reprende al viento y a las olas, y hay una gran calma. Est\u00e1n aterrados y preguntan: \u2018\u00bfQui\u00e9n es este, que hasta el viento y el mar le obedecen?\u2019",
      quote:
        '"Y levant\u00e1ndose, reprendi\u00f3 al viento, y dijo al mar: Calla, enmudece. Y ces\u00f3 el viento, y se hizo grande bonanza."',
    },
    2: {
      action: "Camina Sobre el Agua",
      description:
        "Despu\u00e9s de alimentar a los cinco mil, Jes\u00fas env\u00eda a los disc\u00edpulos adelante en la barca y sube al monte a orar. En la cuarta vigilia de la noche, camina hacia ellos sobre el agua. Pedro sale de la barca hacia Jes\u00fas pero comienza a hundirse; Jes\u00fas lo toma y suben a la barca. El viento cesa.",
      quote:
        '"Se\u00f1or, si eres t\u00fa, manda que yo vaya a ti sobre las aguas." Y \u00e9l dijo: "Ven."',
    },
    3: {
      action: "Llamado de los Primeros Disc\u00edpulos",
      description:
        "Caminando junto al Mar de Galilea, Jes\u00fas ve a Sim\u00f3n y Andr\u00e9s echando sus redes. Les llama: \u2018Venid en pos de m\u00ed, y os har\u00e9 pescadores de hombres.\u2019 Ellos dejan sus redes al instante y lo siguen. M\u00e1s adelante, llama a Jacobo y Juan de la barca de su padre.",
      quote:
        '"Venid en pos de m\u00ed, y os har\u00e9 pescadores de hombres."',
    },
  },

  gadara: {
    1: {
      action: "Sanaci\u00f3n de los Endemoniados",
      description:
        "En la orilla oriental del Mar de Galilea, Jes\u00fas se encuentra con un hombre pose\u00eddo por una legi\u00f3n de demonios, que vive entre los sepulcros. Jes\u00fas echa los demonios en una piara de cerdos que se precipitan por un despe\u00f1adero al lago. El hombre sanado ruega ir con Jes\u00fas, pero se le dice que vaya a su casa y cuente lo que Dios ha hecho.",
      quote:
        '"Vete a tu casa, a los tuyos, y cu\u00e9ntales cu\u00e1n grandes cosas el Se\u00f1or ha hecho contigo, y c\u00f3mo ha tenido misericordia de ti."',
    },
  },

  bethsaida: {
    1: {
      action: "Alimentaci\u00f3n de los Cinco Mil",
      description:
        "Una gran multitud sigue a Jes\u00fas a un lugar remoto cerca de Betsaida. Con solo cinco panes de cebada y dos peces, tra\u00eddos por un muchacho, Jes\u00fas da gracias, parte el pan y alimenta a cinco mil hombres m\u00e1s mujeres y ni\u00f1os. Se recogen doce canastas de sobras. Este es el \u00fanico milagro registrado en los cuatro Evangelios.",
      quote:
        '"Recoged los pedazos que sobraron, para que no se pierda nada."',
    },
    2: {
      action: "Sanaci\u00f3n de un Ciego",
      description:
        "La gente trae un ciego a Jes\u00fas en Betsaida y le ruegan que lo toque. Jes\u00fas lo lleva fuera de la aldea, pone saliva en sus ojos y pone sus manos sobre \u00e9l. La vista del hombre se restaura en etapas: primero ve personas como \u00e1rboles que caminan, luego claramente despu\u00e9s de un segundo toque.",
      quote:
        '"Y volvi\u00f3 a poner las manos sobre sus ojos, y \u00e9l mir\u00f3, y fue restaurado, y vio de lejos y claramente a todos."',
    },
  },

  chorazin: {
    1: {
      action: "Ay Pronunciado",
      description:
        "Jes\u00fas pronuncia ayes sobre las ciudades impenitentes de Coraz\u00edn, Betsaida y Cafarna\u00fam. Aunque realiz\u00f3 la mayor\u00eda de sus milagros en estos lugares, la gente no se arrepinti\u00f3. Declara que si los milagros hechos all\u00ed se hubieran hecho en Tiro y Sid\u00f3n, se habr\u00edan arrepentido hace tiempo.",
      quote:
        '"\u00a1Ay de ti, Coraz\u00edn! \u00a1Ay de ti, Betsaida! Porque si en Tiro y en Sid\u00f3n se hubieran hecho los milagros que se han hecho en vosotras, tiempo ha que se hubieran arrepentido."',
    },
  },

  magdala: {
    1: {
      action: "Partida en Barca",
      description:
        "Despu\u00e9s de alimentar a los cuatro mil y advertir contra la levadura de los fariseos y saduceos, Jes\u00fas sube a una barca y va a la regi\u00f3n de Magdala (Magad\u00e1n). Este pueblo en la orilla occidental del Mar de Galilea es el hogar de Mar\u00eda Magdalena, una de las seguidoras m\u00e1s devotas de Jes\u00fas.",
      quote:
        '"Y despidiendo a la multitud, entr\u00f3 en la barca, y vino a la regi\u00f3n de Magdala."',
    },
  },

  tyre: {
    1: {
      action: "Fe de la Mujer Sirofenicia",
      description:
        "Jes\u00fas se retira a la regi\u00f3n de Tiro y Sid\u00f3n. Una mujer cananea le ruega que sane a su hija endemoniada. Aunque prueba su fe, ella persiste: \u2018Aun los perrillos comen de las migajas que caen de la mesa de sus amos.\u2019 Jes\u00fas elogia su gran fe, y su hija es sanada al instante.",
      quote:
        '"\u00a1Oh mujer, grande es tu fe! H\u00e1gase contigo como quieres."',
    },
  },

  sidon: {
    1: {
      action: "Extremo Norte del Ministerio",
      description:
        "Jes\u00fas viaja a la regi\u00f3n de Sid\u00f3n, el punto m\u00e1s septentrional de su ministerio terrenal. La antigua Sid\u00f3n, una de las grandes ciudades fenicias, representa el mundo gentil. Su disposici\u00f3n a ministrar m\u00e1s all\u00e1 de las fronteras de Israel prefigura el evangelio yendo a todas las naciones.",
      quote:
        '"Y saliendo de los l\u00edmites de Tiro, vino por Sid\u00f3n al mar de Galilea, pasando por la regi\u00f3n de Dec\u00e1polis."',
    },
  },

  decapolis: {
    1: {
      action: "Sanaci\u00f3n del Sordomudo",
      description:
        "En la regi\u00f3n de la Dec\u00e1polis, le traen a un hombre sordo y tartamudo. Jes\u00fas lo aparta, pone sus dedos en los o\u00eddos del hombre, toca su lengua, mira al cielo y dice \u2018\u00a1Efata!\u2019 \u2014 \u2018\u00a1S\u00e9 abierto!\u2019 Inmediatamente el hombre oye y habla claramente.",
      quote:
        '"Bien lo ha hecho todo; hace a los sordos o\u00edr, y a los mudos hablar."',
    },
  },

  "caesarea-philippi": {
    1: {
      action: "Confesi\u00f3n de Pedro",
      description:
        "Cerca de Cesarea de Filipo, al pie del Monte Herm\u00f3n, Jes\u00fas pregunta a sus disc\u00edpulos: \u2018\u00bfQui\u00e9n dicen los hombres que es el Hijo del Hombre?\u2019 Ofrecen varias respuestas. \u2018\u00bfY vosotros, qui\u00e9n dec\u00eds que soy yo?\u2019 Pedro declara: \u2018T\u00fa eres el Cristo, el Hijo del Dios viviente.\u2019 Jes\u00fas lo bendice y habla de edificar su iglesia sobre esta roca.",
      quote:
        '"T\u00fa eres el Cristo, el Hijo del Dios viviente."',
    },
  },

  "mount-tabor": {
    1: {
      action: "La Transfiguraci\u00f3n",
      description:
        "Jes\u00fas lleva a Pedro, Jacobo y Juan a un monte alto. All\u00ed se transfigura ante ellos: su rostro resplandece como el sol y sus vestidos se vuelven blancos como la luz. Aparecen Mois\u00e9s y El\u00edas hablando con \u00e9l. Una nube luminosa los envuelve y una voz declara: \u2018\u00a1Este es mi Hijo amado; a \u00e9l o\u00edd!\u2019",
      quote:
        '"Este es mi Hijo amado, en quien tengo complacencia; a \u00e9l o\u00edd."',
    },
  },

  perea: {
    1: {
      action: "Ense\u00f1anza al Otro Lado del Jord\u00e1n",
      description:
        "Jes\u00fas va al otro lado del Jord\u00e1n, al lugar donde Juan hab\u00eda estado bautizando, y se queda all\u00ed. Muchos vienen a \u00e9l, y muchos creen. Ense\u00f1a sobre el divorcio, bendice a los ni\u00f1os y llama al joven rico a vender todo lo que tiene y seguirlo.",
      quote:
        '"Muchos creyeron en \u00e9l all\u00ed." "Aunque Juan nunca hizo se\u00f1al, todo lo que Juan dijo de este, era verdad."',
    },
  },

  bethany: {
    1: {
      action: "Resurrecci\u00f3n de L\u00e1zaro",
      description:
        "Jes\u00fas llega a Betania cuatro d\u00edas despu\u00e9s de la muerte de su amigo L\u00e1zaro. Marta lo encuentra y declara su fe. Junto al sepulcro, Jes\u00fas llora \u2014 el vers\u00edculo m\u00e1s corto de la Biblia. Ordena: \u2018\u00a1L\u00e1zaro, ven fuera!\u2019 y el muerto sale, a\u00fan envuelto en vendas. Muchos de los que presencian esto creen.",
      quote:
        '"Yo soy la resurrecci\u00f3n y la vida; el que cree en m\u00ed, aunque est\u00e9 muerto, vivir\u00e1."',
    },
    2: {
      action: "Unci\u00f3n por Mar\u00eda",
      description:
        "Seis d\u00edas antes de la Pascua, se ofrece una cena para Jes\u00fas en Betania. Mar\u00eda toma una libra de perfume costoso de nardo puro y lo derrama sobre los pies de Jes\u00fas, sec\u00e1ndolos con sus cabellos. La casa se llena de fragancia. Jes\u00fas dice que lo ha hecho en preparaci\u00f3n para su sepultura.",
      quote:
        '"D\u00e9jala; para el d\u00eda de mi sepultura ha guardado esto."',
    },
  },

  jericho: {
    1: {
      action: "Sanaci\u00f3n del Ciego Bartimeo",
      description:
        "Al salir de Jeric\u00f3, un mendigo ciego llamado Bartimeo clama: \u2018\u00a1Jes\u00fas, Hijo de David, ten misericordia de m\u00ed!\u2019 La multitud lo reprende, pero \u00e9l grita a\u00fan m\u00e1s fuerte. Jes\u00fas se detiene, lo llama y le pregunta qu\u00e9 quiere. \u2018Maestro, que recobre la vista,\u2019 responde. Su fe lo sana, y sigue a Jes\u00fas por el camino.",
      quote:
        '"\u00bfQu\u00e9 quieres que te haga?" "Maestro, que recobre la vista." "Vete, tu fe te ha salvado."',
    },
    2: {
      action: "Zaqueo el Publicano",
      description:
        "En Jeric\u00f3, un rico jefe de publicanos llamado Zaqueo sube a un sic\u00f3moro para ver a Jes\u00fas sobre la multitud. Jes\u00fas mira hacia arriba y dice: \u2018Zaqueo, date prisa, desciende, porque hoy es necesario que pose en tu casa.\u2019 Zaqueo lo recibe con gozo y promete dar la mitad de sus bienes a los pobres.",
      quote:
        '"Porque el Hijo del Hombre vino a buscar y a salvar lo que se hab\u00eda perdido."',
    },
  },

  "mount-of-olives": {
    1: {
      action: "Discurso del Olivar",
      description:
        "Sentado en el Monte de los Olivos con vista al Templo, Jes\u00fas ense\u00f1a a sus disc\u00edpulos sobre la destrucci\u00f3n de Jerusal\u00e9n y el fin de los tiempos. Advierte sobre falsos mes\u00edas, guerras y persecuciones, y los llama a la vigilancia. Nadie sabe el d\u00eda ni la hora \u2014 solo el Padre.",
      quote:
        '"Velad, pues, porque no sab\u00e9is a qu\u00e9 hora ha de venir vuestro Se\u00f1or."',
    },
    2: {
      action: "Agon\u00eda en Getseman\u00ed",
      description:
        "Despu\u00e9s de la \u00daltima Cena, Jes\u00fas va con sus disc\u00edpulos al Huerto de Getseman\u00ed en el Monte de los Olivos. En profunda angustia, ora tres veces: \u2018Padre m\u00edo, si es posible, pase de m\u00ed esta copa; pero no sea como yo quiero, sino como t\u00fa.\u2019 Suda gotas como de sangre. Judas llega con una turba y lo traiciona con un beso.",
      quote:
        '"Padre m\u00edo, si es posible, pase de m\u00ed esta copa; pero no sea como yo quiero, sino como t\u00fa."',
    },
    3: {
      action: "La Ascensi\u00f3n",
      description:
        "Cuarenta d\u00edas despu\u00e9s de su resurrecci\u00f3n, Jes\u00fas lleva a sus disc\u00edpulos al Monte de los Olivos, cerca de Betania. Los comisiona a ser sus testigos hasta lo \u00faltimo de la tierra. Mientras los bendice, es elevado ante sus ojos, y una nube lo oculta de su vista. Dos \u00e1ngeles prometen que volver\u00e1 de la misma manera.",
      quote:
        '"Este mismo Jes\u00fas, que ha sido tomado de vosotros al cielo, as\u00ed vendr\u00e1 como le hab\u00e9is visto ir al cielo."',
    },
  },

  emmaus: {
    1: {
      action: "Camino a Ema\u00fas",
      description:
        "El d\u00eda de la resurrecci\u00f3n, dos disc\u00edpulos desanimados caminan hacia Ema\u00fas. Un desconocido se les une y les explica c\u00f3mo las Escrituras se\u00f1alaban a un Mes\u00edas sufriente y resucitado. En la cena, parte el pan y sus ojos se abren. Reconocen a Jes\u00fas, pero \u00e9l desaparece. Corren de regreso a Jerusal\u00e9n para contarles a los dem\u00e1s.",
      quote:
        '"\u00bfNo ard\u00eda nuestro coraz\u00f3n en nosotros, mientras nos hablaba en el camino, y cuando nos abr\u00eda las Escrituras?"',
    },
  },
};

/**
 * Get a translated field from a city event.
 * @param {string} cityId    - City ID (e.g. "jerusalem")
 * @param {number} journeyId - Journey/phase number (1\u20134), matching data.js event.journey
 * @param {string} field     - "action" | "description" | "quote"
 */
export function eventText(cityId, journeyId, field) {
  if (lang === "en") return null; // caller uses original data.js values
  const city = eventTranslations[cityId];
  if (!city) return null;
  const event = city[journeyId];
  if (!event) return null;
  return event[field] ?? null;
}

// ─────────────────────────────────────────────────────────────
// VERSE DISPLAY HELPERS
// ─────────────────────────────────────────────────────────────

/**
 * Convert an English verse reference string to Spanish if lang === "es".
 * Handles patterns like "Matthew 5:1-12", "John 14:6", "Acts 1:9-12".
 * @param {string} verse - e.g. "John 3:16"
 * @returns {string}
 */
export function displayVerse(verse) {
  if (!verse) return "";
  if (lang !== "es") return verse;
  return verse.replace(/\bActs\b/g, "Hechos")
              .replace(/\bMark\b/g, "Marcos")
              .replace(/\bRomans\b/g, "Romanos")
              .replace(/\bGenesis\b/g, "G\u00e9nesis")
              .replace(/\bExodus\b/g, "\u00c9xodo")
              .replace(/\bIsaiah\b/g, "Isa\u00edas")
              .replace(/\bJeremiah\b/g, "Jerem\u00edas")
              .replace(/\bPsalms?\b/g, "Salmos")
              .replace(/\bProverbs\b/g, "Proverbios")
              .replace(/\bMatthew\b/g, "Mateo")
              .replace(/\bLuke\b/g, "Lucas")
              .replace(/\bJohn\b/g, "Juan")
              .replace(/\bGalatians\b/g, "G\u00e1latas")
              .replace(/\bEphesians\b/g, "Efesios")
              .replace(/\bPhilippians\b/g, "Filipenses")
              .replace(/\bColossians\b/g, "Colosenses")
              .replace(/\bPhilemon\b/g, "Filem\u00f3n")
              .replace(/\bHebrews\b/g, "Hebreos")
              .replace(/\bRevelation\b/g, "Apocalipsis")
              .replace(/\b1\s*Corinthians\b/g, "1 Corintios")
              .replace(/\b2\s*Corinthians\b/g, "2 Corintios")
              .replace(/\b1\s*Thessalonians\b/g, "1 Tesalonicenses")
              .replace(/\b2\s*Thessalonians\b/g, "2 Tesalonicenses")
              .replace(/\b1\s*Timothy\b/g, "1 Timoteo")
              .replace(/\b2\s*Timothy\b/g, "2 Timoteo")
              .replace(/\b1\s*Peter\b/g, "1 Pedro")
              .replace(/\b2\s*Peter\b/g, "2 Pedro")
              .replace(/\b1\s*John\b/g, "1 Juan")
              .replace(/\b2\s*John\b/g, "2 Juan")
              .replace(/\b3\s*John\b/g, "3 Juan");
}

/**
 * Convert "Matthew X" chapter string to "Mateo X" if lang === "es".
 * @param {string} chapter - e.g. "Matthew 5\u20137"
 * @returns {string}
 */
export function displayChapter(chapter) {
  return displayVerse(chapter);
}
