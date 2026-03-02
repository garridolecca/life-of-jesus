// ============================================================
// i18n.js — Life of Jesus: Internationalization (EN/ES)
// ============================================================

let currentLang = "en";

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  currentLang = lang;
}

// ── UI Strings ───────────────────────────────────────────
const uiStrings = {
  en: {
    appTitle: "Life of Jesus",
    allPhases: "All Phases",
    names: "Names",
    scripture: "Scripture",
    about: "About",
    scriptureIndex: "Scripture Index",
    searchPlaceholder: "Search (e.g. Matthew 5, John 11)...",
    aboutTitle: "About This Map",
    aboutDescription:
      "This interactive map traces the life and ministry of Jesus Christ as recorded in the four Gospels — Matthew, Mark, Luke, and John. From his birth in Bethlehem to his ascension from the Mount of Olives, explore the places where Jesus taught, healed, and revealed the Kingdom of God.",
    aboutFeatures:
      "Click cities to read event details with Scripture references. Filter by life phase using the chips above the map. Use the Scripture panel to search by book and chapter. Toggle between biblical and modern place names.",
    scriptureNote: "Scripture quotations are from the NIV (English) and RVR1960 (Spanish).",
    close: "Close",
    biblicalNames: "Biblical Names",
    modernNames: "Modern Names",
    splashVerse:
      '"I am the way and the truth and the life. No one comes to the Father except through me."',
    splashVerseRef: "— John 14:6",
    features: "Features:"
  },
  es: {
    appTitle: "Vida de Jesús",
    allPhases: "Todas las Fases",
    names: "Nombres",
    scripture: "Escrituras",
    about: "Acerca de",
    scriptureIndex: "Índice de Escrituras",
    searchPlaceholder: "Buscar (ej. Mateo 5, Juan 11)...",
    aboutTitle: "Acerca de Este Mapa",
    aboutDescription:
      "Este mapa interactivo traza la vida y el ministerio de Jesucristo tal como se registra en los cuatro Evangelios: Mateo, Marcos, Lucas y Juan. Desde su nacimiento en Belén hasta su ascensión desde el Monte de los Olivos, explore los lugares donde Jesús enseñó, sanó y reveló el Reino de Dios.",
    aboutFeatures:
      "Haga clic en las ciudades para leer los detalles de los eventos con referencias bíblicas. Filtre por fase de vida usando los chips. Use el panel de Escrituras para buscar por libro y capítulo. Alterne entre nombres bíblicos y modernos.",
    scriptureNote: "Las citas bíblicas son de la NIV (inglés) y RVR1960 (español).",
    close: "Cerrar",
    biblicalNames: "Nombres Bíblicos",
    modernNames: "Nombres Modernos",
    splashVerse:
      '"Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí."',
    splashVerseRef: "— Juan 14:6",
    features: "Características:"
  }
};

export function t(key) {
  return uiStrings[currentLang]?.[key] || uiStrings.en[key] || key;
}

// ── Phase Translations ───────────────────────────────────
const phaseTranslations = {
  es: {
    1: {
      name: "Nacimiento e Infancia",
      shortName: "Nacimiento",
      description:
        "La encarnación del Hijo de Dios comienza con anuncios angélicos, un humilde nacimiento en Belén y la visita de pastores y magos. Huyendo de la ira de Herodes, la sagrada familia se refugia en Egipto antes de establecerse en Nazaret. A los doce años, el niño Jesús asombra a los maestros en el Templo de Jerusalén.",
      keyTheme: "Dios entra en la historia humana como un niño indefenso, cumpliendo la antigua profecía."
    },
    2: {
      name: "Ministerio Temprano",
      shortName: "Temprano",
      description:
        "Jesús es bautizado por Juan en el Jordán, resiste las tentaciones de Satanás en el desierto y comienza a reunir discípulos. Su primer milagro en Caná revela su gloria. Purifica el Templo en Jerusalén, enseña a Nicodemo sobre nacer de nuevo y ofrece agua viva a una mujer samaritana junto al pozo.",
      keyTheme: "El Reino de Dios se ha acercado — arrepentíos y creed en el evangelio."
    },
    3: {
      name: "Ministerio en Galilea",
      shortName: "Galilea",
      description:
        "Con base en Cafarnaúm, Jesús enseña con autoridad, realiza milagros extraordinarios y atrae multitudes por toda Galilea. El Sermón del Monte establece la ética del Reino. Calma tormentas, alimenta a miles, camina sobre el agua, sana a los enfermos y resucita a los muertos. Pedro lo confiesa como el Cristo y tres discípulos presencian la Transfiguración.",
      keyTheme: "La enseñanza y los milagros revelan el poder y la compasión del Mesías."
    },
    4: {
      name: "Pasión y Resurrección",
      shortName: "Pasión",
      description:
        "Jesús pone su rostro hacia Jerusalén, resucitando a Lázaro de entre los muertos y llamando a Zaqueo en Jericó en el camino. Entra triunfalmente en Jerusalén, enseña en el Templo y comparte una última cena de Pascua con sus discípulos. Traicionado, juzgado, crucificado y sepultado, resucita al tercer día, se aparece a sus seguidores y asciende al Padre.",
      keyTheme: "A través del sufrimiento, la muerte y la resurrección, el Cordero de Dios quita el pecado del mundo."
    }
  }
};

export function phaseText(phaseId, field) {
  if (currentLang === "en") return null;
  return phaseTranslations[currentLang]?.[phaseId]?.[field] || null;
}

// ── City Translations ────────────────────────────────────
const cityTranslations = {
  es: {
    bethlehem: { biblicalName: "Belén", modernName: "Belén, Palestina", region: "Judea" },
    jerusalem: { biblicalName: "Jerusalén", modernName: "Jerusalén, Israel", region: "Judea" },
    egypt: { biblicalName: "Egipto", modernName: "Egipto", region: "Egipto" },
    nazareth: { biblicalName: "Nazaret", modernName: "Nazaret, Israel", region: "Galilea" },
    "bethany-beyond-jordan": { biblicalName: "Betania más allá del Jordán", modernName: "Al-Maghtas, Jordania", region: "Perea" },
    "wilderness-of-judea": { biblicalName: "Desierto de Judea", modernName: "Desierto de Judea, Israel", region: "Judea" },
    cana: { biblicalName: "Caná de Galilea", modernName: "Kafr Kanna, Israel", region: "Galilea" },
    capernaum: { biblicalName: "Cafarnaúm", modernName: "Kfar Nahum, Israel", region: "Galilea" },
    sychar: { biblicalName: "Sicar", modernName: "Cerca de Nablus, Palestina", region: "Samaria" },
    "mount-of-beatitudes": { biblicalName: "Monte de las Bienaventuranzas", modernName: "Monte Eremos, Israel", region: "Galilea" },
    nain: { biblicalName: "Naín", modernName: "Nein, Israel", region: "Galilea" },
    "sea-of-galilee": { biblicalName: "Mar de Galilea", modernName: "Lago Kinneret, Israel", region: "Galilea" },
    gadara: { biblicalName: "Gadara", modernName: "Umm Qais, Jordania", region: "Decápolis" },
    bethsaida: { biblicalName: "Betsaida", modernName: "Et-Tell, Israel", region: "Galilea" },
    chorazin: { biblicalName: "Corazín", modernName: "Korazim, Israel", region: "Galilea" },
    magdala: { biblicalName: "Magdala", modernName: "Migdal, Israel", region: "Galilea" },
    tyre: { biblicalName: "Tiro", modernName: "Tiro, Líbano", region: "Fenicia" },
    sidon: { biblicalName: "Sidón", modernName: "Saida, Líbano", region: "Fenicia" },
    "caesarea-philippi": { biblicalName: "Cesarea de Filipo", modernName: "Banias, Israel", region: "Gaulanitis" },
    "mount-tabor": { biblicalName: "Monte Tabor", modernName: "Monte Tabor, Israel", region: "Galilea" },
    decapolis: { biblicalName: "Decápolis", modernName: "Norte de Jordania", region: "Decápolis" },
    perea: { biblicalName: "Perea", modernName: "Valle del Jordán Oriental", region: "Perea" },
    bethany: { biblicalName: "Betania", modernName: "Al-Eizariya, Palestina", region: "Judea" },
    jericho: { biblicalName: "Jericó", modernName: "Jericó, Palestina", region: "Judea" },
    "mount-of-olives": { biblicalName: "Monte de los Olivos", modernName: "Monte de los Olivos, Jerusalén", region: "Judea" },
    emmaus: { biblicalName: "Emaús", modernName: "Cerca de Jerusalén", region: "Judea" }
  }
};

export function cityText(cityId, field) {
  if (currentLang === "en") return null;
  return cityTranslations[currentLang]?.[cityId]?.[field] || null;
}

// ── Event Translations ───────────────────────────────────
const eventTranslations = {
  es: {
    bethlehem: {
      1: {
        action: "Nacimiento de Jesús",
        description:
          "María da a luz a Jesús en Belén y lo acuesta en un pesebre, porque no hay lugar para ellos en el mesón. Los pastores, avisados por ángeles, vienen a adorar al Rey recién nacido.",
        quote: '"Y dio a luz a su hijo primogénito, y lo envolvió en pañales, y lo acostó en un pesebre, porque no había lugar para ellos en el mesón."'
      },
      2: {
        action: "Visita de los Magos",
        description:
          "Sabios del Oriente siguen una estrella hasta Belén y presentan regalos de oro, incienso y mirra al niño Jesús. Advertidos en un sueño, regresan a su tierra por otro camino.",
        quote: '"Y al entrar en la casa, vieron al niño con su madre María, y postrándose, lo adoraron."'
      }
    },
    jerusalem: {
      1: {
        action: "Presentación en el Templo",
        description:
          "José y María llevan al niño Jesús al Templo para consagrarlo al Señor. El anciano profeta Simeón toma al niño en sus brazos y lo declara luz para revelación a los gentiles. La profetisa Ana da gracias y habla del niño a todos los que esperan la redención de Jerusalén.",
        quote: '"Porque han visto mis ojos tu salvación, la cual has preparado en presencia de todos los pueblos; luz para revelación a los gentiles, y gloria de tu pueblo Israel."'
      },
      2: {
        action: "El Niño Jesús en el Templo",
        description:
          "A los doce años, Jesús viaja a Jerusalén para la fiesta de la Pascua. Sus padres lo encuentran en los atrios del Templo, sentado entre los maestros, escuchándolos y haciéndoles preguntas. Todos los que lo oyen quedan asombrados de su entendimiento.",
        quote: '"¿Por qué me buscabais? ¿No sabíais que en los negocios de mi Padre me es necesario estar?"'
      },
      3: {
        action: "Purificación del Templo",
        description:
          "Jesús expulsa a los mercaderes y cambistas de los atrios del Templo, volcando sus mesas y declarando que la casa de su Padre no debe convertirse en un mercado. Los líderes judíos exigen una señal, y Jesús responde: 'Destruid este templo, y en tres días lo levantaré.'",
        quote: '"Destruid este templo, y en tres días lo levantaré."'
      },
      4: {
        action: "Nicodemo Visita de Noche",
        description:
          "Nicodemo, fariseo y miembro del concilio judío, viene a Jesús de noche. Jesús le enseña sobre nacer de nuevo del agua y del Espíritu, y revela el corazón del evangelio: Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito.",
        quote: '"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna."'
      },
      5: {
        action: "Entrada Triunfal",
        description:
          "Jesús entra en Jerusalén montado en un burro mientras las multitudes tienden sus mantos y ramas de palma en el camino, clamando '¡Hosanna al Hijo de David!' Toda la ciudad se conmueve, cumpliendo la profecía de Zacarías del rey humilde que viene sobre un pollino.",
        quote: '"¡Hosanna al Hijo de David! ¡Bendito el que viene en el nombre del Señor! ¡Hosanna en las alturas!"'
      },
      6: {
        action: "La Última Cena",
        description:
          "En la noche antes de su muerte, Jesús comparte una cena de Pascua con sus doce discípulos. Les lava los pies, instituye la Santa Cena con pan y vino como símbolos de su cuerpo y sangre, y da el nuevo mandamiento: amaos unos a otros como yo os he amado.",
        quote: '"Esto es mi cuerpo, que por vosotros es dado; haced esto en memoria de mí… Esta copa es el nuevo pacto en mi sangre, que por vosotros se derrama."'
      },
      7: {
        action: "Juicio ante Pilato",
        description:
          "Después de ser arrestado en Getsemaní y juzgado ante el Sanedrín, Jesús comparece ante el gobernador romano Poncio Pilato. Aunque Pilato no encuentra base para una acusación, la multitud exige la crucifixión. Pilato se lava las manos y entrega a Jesús para ser azotado y crucificado.",
        quote: '"Mi reino no es de este mundo; si mi reino fuera de este mundo, mis servidores pelearían para que yo no fuera entregado. Pero mi reino no es de aquí."'
      },
      8: {
        action: "Crucifixión y Muerte",
        description:
          "Jesús es crucificado en el Gólgota entre dos criminales. Perdona a sus verdugos, promete el paraíso al ladrón arrepentido y encomienda a su madre al discípulo amado. Después de seis horas de agonía, la oscuridad cubre la tierra, y Jesús clama 'Consumado es' antes de entregar su espíritu.",
        quote: '"Consumado es." Y habiendo inclinado la cabeza, entregó el espíritu.'
      },
      9: {
        action: "Resurrección",
        description:
          "Al tercer día, unas mujeres llegan al sepulcro al amanecer y encuentran la piedra removida. Un ángel declara: '¡No está aquí, pues ha resucitado!' María Magdalena encuentra al Jesús resucitado cerca del sepulcro. Esa noche, Jesús se aparece a los discípulos tras puertas cerradas, mostrándoles sus manos y su costado.",
        quote: '"No está aquí, pues ha resucitado, como dijo. Venid, ved el lugar donde fue puesto el Señor."'
      }
    },
    egypt: {
      1: {
        action: "Huida a Egipto",
        description:
          "Advertido en un sueño de que Herodes busca matar al niño, José toma a María y a Jesús y huye de noche a Egipto. Permanecen allí hasta la muerte de Herodes, cumpliendo la profecía: 'De Egipto llamé a mi Hijo.'",
        quote: '"Levántate y toma al niño y a su madre, y huye a Egipto, y permanece allá hasta que yo te diga; porque acontecerá que Herodes buscará al niño para matarlo."'
      }
    },
    nazareth: {
      1: {
        action: "Infancia en Nazaret",
        description:
          "Después de regresar de Egipto, la sagrada familia se establece en el pueblo de Nazaret en Galilea, cumpliendo la palabra de que Jesús sería llamado nazareno. El niño crece y se fortalece, lleno de sabiduría, y la gracia de Dios está sobre él.",
        quote: '"Y vino y habitó en la ciudad que se llama Nazaret, para que se cumpliese lo que fue dicho por los profetas, que habría de ser llamado nazareno."'
      },
      2: {
        action: "Rechazado en Nazaret",
        description:
          "Jesús regresa a su pueblo natal y lee de Isaías en la sinagoga: 'El Espíritu del Señor está sobre mí, por cuanto me ha ungido para dar buenas nuevas a los pobres.' Declara cumplida la profecía, pero el pueblo se enfurece y lo expulsa de la ciudad.",
        quote: '"De cierto os digo, que ningún profeta es acepto en su propia tierra."'
      },
      3: {
        action: "Segundo Rechazo en Nazaret",
        description:
          "Jesús visita Nazaret nuevamente y enseña en la sinagoga. La gente se ofende, diciendo '¿No es este el hijo del carpintero?' Debido a su incredulidad, Jesús no puede hacer allí ninguna obra poderosa excepto sanar a unos pocos enfermos. Se maravilla de su falta de fe.",
        quote: '"No hay profeta sin honra sino en su propia tierra, y entre sus parientes, y en su casa."'
      }
    },
    "bethany-beyond-jordan": {
      1: {
        action: "Bautismo de Jesús",
        description:
          "Jesús viene de Galilea al Jordán para ser bautizado por Juan. Al salir del agua, los cielos se abren y el Espíritu de Dios desciende como paloma. Una voz del cielo declara: 'Este es mi Hijo amado, en quien tengo complacencia.'",
        quote: '"Este es mi Hijo amado, en quien tengo complacencia."'
      }
    },
    "wilderness-of-judea": {
      1: {
        action: "Tentación por Satanás",
        description:
          "Inmediatamente después de su bautismo, el Espíritu lleva a Jesús al desierto donde ayuna cuarenta días y cuarenta noches. Satanás lo tienta tres veces — con pan, con espectáculo y con poder terrenal — pero Jesús resiste cada tentación con las Escrituras.",
        quote: '"No sólo de pan vivirá el hombre, sino de toda palabra que sale de la boca de Dios."'
      }
    },
    cana: {
      1: {
        action: "Agua en Vino",
        description:
          "En una fiesta de bodas en Caná, se acaba el vino. María le dice a Jesús, y él instruye a los sirvientes a llenar seis tinajas de piedra con agua. Al sacarla, el agua se ha convertido en el mejor vino. Esta es la primera de las señales de Jesús, revelando su gloria.",
        quote: '"Este principio de señales hizo Jesús en Caná de Galilea, y manifestó su gloria; y sus discípulos creyeron en él."'
      },
      2: {
        action: "Sanación del Hijo del Oficial",
        description:
          "Un oficial real de Cafarnaúm le ruega a Jesús que sane a su hijo moribundo. Sin viajar allí, Jesús dice: 'Ve, tu hijo vive.' El hombre cree y parte; sus sirvientes lo encuentran con la noticia de que el muchacho se recuperó a la misma hora en que Jesús habló.",
        quote: '"Ve, tu hijo vive." Y el hombre creyó la palabra que Jesús le dijo, y se fue.'
      }
    },
    capernaum: {
      1: {
        action: "Establecimiento del Centro de Ministerio",
        description:
          "Después de ser rechazado en Nazaret, Jesús se muda a Cafarnaúm junto al Mar de Galilea, cumpliendo la profecía de Isaías sobre una gran luz que amanece sobre los que viven en tinieblas. Desde aquí comienza a predicar: 'Arrepentíos, porque el reino de los cielos se ha acercado.'",
        quote: '"Arrepentíos, porque el reino de los cielos se ha acercado."'
      },
      2: {
        action: "Enseñanza con Autoridad",
        description:
          "Jesús enseña en la sinagoga de Cafarnaúm, y la gente queda asombrada porque enseña con autoridad, no como los escribas. Ordena a un espíritu inmundo que salga de un hombre, y este obedece. Las noticias sobre él se difunden rápidamente por toda Galilea.",
        quote: '"Y se admiraban de su doctrina; porque les enseñaba como quien tiene autoridad, y no como los escribas."'
      },
      3: {
        action: "Sanación del Siervo del Centurión",
        description:
          "Un centurión romano pide a Jesús que sane a su siervo paralítico. Cuando Jesús ofrece ir, el centurión dice que no es digno pero que una palabra de Jesús es suficiente. Jesús se maravilla de tan gran fe — no encontrada ni en Israel — y sana al siervo en esa misma hora.",
        quote: '"De cierto os digo, que ni aun en Israel he hallado tanta fe."'
      },
      4: {
        action: "Sanación de la Suegra de Pedro",
        description:
          "Jesús entra en la casa de Pedro y Andrés y encuentra a la suegra de Pedro acostada con fiebre. La toma de la mano y la levanta; la fiebre la deja al instante y ella comienza a servirles. Esa noche, le traen muchos enfermos y endemoniados.",
        quote: '"Entonces él se acercó, y la tomó de la mano y la levantó; e inmediatamente le dejó la fiebre, y ella les servía."'
      }
    },
    sychar: {
      1: {
        action: "La Mujer en el Pozo",
        description:
          "Viajando por Samaria, Jesús se sienta junto al pozo de Jacob al mediodía. Pide agua a una mujer samaritana, rompiendo tabúes culturales. Le ofrece 'agua viva' que se convierte en manantial de vida eterna. Ella lo reconoce como el Mesías y trae a todo su pueblo a escucharlo.",
        quote: '"Todo aquel que bebiere de esta agua, volverá a tener sed; mas el que bebiere del agua que yo le daré, no tendrá sed jamás."'
      }
    },
    "mount-of-beatitudes": {
      1: {
        action: "Sermón del Monte",
        description:
          "Jesús sube a un monte cerca del Mar de Galilea y pronuncia su sermón más famoso. Comenzando con las Bienaventuranzas ('Bienaventurados los pobres en espíritu…'), enseña sobre la ley, la oración, el ayuno, la ansiedad y la regla de oro. Sus oyentes quedan asombrados de su enseñanza.",
        quote: '"Bienaventurados los pobres en espíritu, porque de ellos es el reino de los cielos. Bienaventurados los que lloran, porque ellos recibirán consolación."'
      }
    },
    nain: {
      1: {
        action: "Resurrección del Hijo de la Viuda",
        description:
          "Al acercarse Jesús a la puerta de la ciudad de Naín, una procesión fúnebre lleva al hijo único de una viuda. Su corazón se compadece y dice: 'No llores.' Toca el féretro y ordena: '¡Joven, a ti te digo, levántate!' El muerto se incorpora y comienza a hablar. El temor se apodera de todos y alaban a Dios.",
        quote: '"Joven, a ti te digo, levántate." Y se incorporó el que había muerto, y comenzó a hablar. Y lo dio a su madre.'
      }
    },
    "sea-of-galilee": {
      1: {
        action: "Calma la Tempestad",
        description:
          "Mientras cruzan el Mar de Galilea, se levanta una furiosa tormenta. Los discípulos despiertan a Jesús en pánico. Él reprende al viento y a las olas, y hay una gran calma. Están aterrados y preguntan: '¿Quién es este, que hasta el viento y el mar le obedecen?'",
        quote: '"Y levantándose, reprendió al viento, y dijo al mar: Calla, enmudece. Y cesó el viento, y se hizo grande bonanza."'
      },
      2: {
        action: "Camina Sobre el Agua",
        description:
          "Después de alimentar a los cinco mil, Jesús envía a los discípulos adelante en la barca y sube al monte a orar. En la cuarta vigilia de la noche, camina hacia ellos sobre el agua. Pedro sale de la barca hacia Jesús pero comienza a hundirse; Jesús lo toma y suben a la barca. El viento cesa.",
        quote: '"Señor, si eres tú, manda que yo vaya a ti sobre las aguas." Y él dijo: "Ven."'
      },
      3: {
        action: "Llamado de los Primeros Discípulos",
        description:
          "Caminando junto al Mar de Galilea, Jesús ve a Simón y Andrés echando sus redes. Les llama: 'Venid en pos de mí, y os haré pescadores de hombres.' Ellos dejan sus redes al instante y lo siguen. Más adelante, llama a Jacobo y Juan de la barca de su padre.",
        quote: '"Venid en pos de mí, y os haré pescadores de hombres."'
      }
    },
    gadara: {
      1: {
        action: "Sanación de los Endemoniados",
        description:
          "En la orilla oriental del Mar de Galilea, Jesús se encuentra con un hombre poseído por una legión de demonios, que vive entre los sepulcros. Jesús echa los demonios en una piara de cerdos que se precipitan por un despeñadero al lago. El hombre sanado ruega ir con Jesús, pero se le dice que vaya a su casa y cuente lo que Dios ha hecho.",
        quote: '"Vete a tu casa, a los tuyos, y cuéntales cuán grandes cosas el Señor ha hecho contigo, y cómo ha tenido misericordia de ti."'
      }
    },
    bethsaida: {
      1: {
        action: "Alimentación de los Cinco Mil",
        description:
          "Una gran multitud sigue a Jesús a un lugar remoto cerca de Betsaida. Con solo cinco panes de cebada y dos peces, traídos por un muchacho, Jesús da gracias, parte el pan y alimenta a cinco mil hombres más mujeres y niños. Se recogen doce canastas de sobras. Este es el único milagro registrado en los cuatro Evangelios.",
        quote: '"Recoged los pedazos que sobraron, para que no se pierda nada."'
      },
      2: {
        action: "Sanación de un Ciego",
        description:
          "La gente trae un ciego a Jesús en Betsaida y le ruegan que lo toque. Jesús lo lleva fuera de la aldea, pone saliva en sus ojos y pone sus manos sobre él. La vista del hombre se restaura en etapas: primero ve personas como árboles que caminan, luego claramente después de un segundo toque.",
        quote: '"Y volvió a poner las manos sobre sus ojos, y él miró, y fue restaurado, y vio de lejos y claramente a todos."'
      }
    },
    chorazin: {
      1: {
        action: "Ay Pronunciado",
        description:
          "Jesús pronuncia ayes sobre las ciudades impenitentes de Corazín, Betsaida y Cafarnaúm. Aunque realizó la mayoría de sus milagros en estos lugares, la gente no se arrepintió. Declara que si los milagros hechos allí se hubieran hecho en Tiro y Sidón, se habrían arrepentido hace tiempo.",
        quote: '"¡Ay de ti, Corazín! ¡Ay de ti, Betsaida! Porque si en Tiro y en Sidón se hubieran hecho los milagros que se han hecho en vosotras, tiempo ha que se hubieran arrepentido."'
      }
    },
    magdala: {
      1: {
        action: "Partida en Barca",
        description:
          "Después de alimentar a los cuatro mil y advertir contra la levadura de los fariseos y saduceos, Jesús sube a una barca y va a la región de Magdala (Magadán). Este pueblo en la orilla occidental del Mar de Galilea es el hogar de María Magdalena, una de las seguidoras más devotas de Jesús.",
        quote: '"Y despidiendo a la multitud, entró en la barca, y vino a la región de Magdala."'
      }
    },
    tyre: {
      1: {
        action: "Fe de la Mujer Sirofenicia",
        description:
          "Jesús se retira a la región de Tiro y Sidón. Una mujer cananea le ruega que sane a su hija endemoniada. Aunque prueba su fe, ella persiste: 'Aun los perrillos comen de las migajas que caen de la mesa de sus amos.' Jesús elogia su gran fe, y su hija es sanada al instante.",
        quote: '"¡Oh mujer, grande es tu fe! Hágase contigo como quieres."'
      }
    },
    sidon: {
      1: {
        action: "Extremo Norte del Ministerio",
        description:
          "Jesús viaja a la región de Sidón, el punto más septentrional de su ministerio terrenal. La antigua Sidón, una de las grandes ciudades fenicias, representa el mundo gentil. Su disposición a ministrar más allá de las fronteras de Israel prefigura el evangelio yendo a todas las naciones.",
        quote: '"Y saliendo de los límites de Tiro, vino por Sidón al mar de Galilea, pasando por la región de Decápolis."'
      }
    },
    decapolis: {
      1: {
        action: "Sanación del Sordomudo",
        description:
          "En la región de la Decápolis, le traen a un hombre sordo y tartamudo. Jesús lo aparta, pone sus dedos en los oídos del hombre, toca su lengua, mira al cielo y dice '¡Efata!' — '¡Sé abierto!' Inmediatamente el hombre oye y habla claramente.",
        quote: '"Bien lo ha hecho todo; hace a los sordos oír, y a los mudos hablar."'
      }
    },
    "caesarea-philippi": {
      1: {
        action: "Confesión de Pedro",
        description:
          "Cerca de Cesarea de Filipo, al pie del Monte Hermón, Jesús pregunta a sus discípulos: '¿Quién dicen los hombres que es el Hijo del Hombre?' Ofrecen varias respuestas. '¿Y vosotros, quién decís que soy yo?' Pedro declara: 'Tú eres el Cristo, el Hijo del Dios viviente.' Jesús lo bendice y habla de edificar su iglesia sobre esta roca.",
        quote: '"Tú eres el Cristo, el Hijo del Dios viviente."'
      }
    },
    "mount-tabor": {
      1: {
        action: "La Transfiguración",
        description:
          "Jesús lleva a Pedro, Jacobo y Juan a un monte alto. Allí se transfigura ante ellos: su rostro resplandece como el sol y sus vestidos se vuelven blancos como la luz. Aparecen Moisés y Elías hablando con él. Una nube luminosa los envuelve y una voz declara: '¡Este es mi Hijo amado; a él oíd!'",
        quote: '"Este es mi Hijo amado, en quien tengo complacencia; a él oíd."'
      }
    },
    perea: {
      1: {
        action: "Enseñanza al Otro Lado del Jordán",
        description:
          "Jesús va al otro lado del Jordán, al lugar donde Juan había estado bautizando, y se queda allí. Muchos vienen a él, y muchos creen. Enseña sobre el divorcio, bendice a los niños y llama al joven rico a vender todo lo que tiene y seguirlo.",
        quote: '"Muchos creyeron en él allí." "Aunque Juan nunca hizo señal, todo lo que Juan dijo de este, era verdad."'
      }
    },
    bethany: {
      1: {
        action: "Resurrección de Lázaro",
        description:
          "Jesús llega a Betania cuatro días después de la muerte de su amigo Lázaro. Marta lo encuentra y declara su fe. Junto al sepulcro, Jesús llora — el versículo más corto de la Biblia. Ordena: '¡Lázaro, ven fuera!' y el muerto sale, aún envuelto en vendas. Muchos de los que presencian esto creen.",
        quote: '"Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá."'
      },
      2: {
        action: "Unción por María",
        description:
          "Seis días antes de la Pascua, se ofrece una cena para Jesús en Betania. María toma una libra de perfume costoso de nardo puro y lo derrama sobre los pies de Jesús, secándolos con sus cabellos. La casa se llena de fragancia. Jesús dice que lo ha hecho en preparación para su sepultura.",
        quote: '"Déjala; para el día de mi sepultura ha guardado esto."'
      }
    },
    jericho: {
      1: {
        action: "Sanación del Ciego Bartimeo",
        description:
          "Al salir de Jericó, un mendigo ciego llamado Bartimeo clama: '¡Jesús, Hijo de David, ten misericordia de mí!' La multitud lo reprende, pero él grita aún más fuerte. Jesús se detiene, lo llama y le pregunta qué quiere. 'Maestro, que recobre la vista,' responde. Su fe lo sana, y sigue a Jesús por el camino.",
        quote: '"¿Qué quieres que te haga?" "Maestro, que recobre la vista." "Vete, tu fe te ha salvado."'
      },
      2: {
        action: "Zaqueo el Publicano",
        description:
          "En Jericó, un rico jefe de publicanos llamado Zaqueo sube a un sicómoro para ver a Jesús sobre la multitud. Jesús mira hacia arriba y dice: 'Zaqueo, date prisa, desciende, porque hoy es necesario que pose en tu casa.' Zaqueo lo recibe con gozo y promete dar la mitad de sus bienes a los pobres.",
        quote: '"Porque el Hijo del Hombre vino a buscar y a salvar lo que se había perdido."'
      }
    },
    "mount-of-olives": {
      1: {
        action: "Discurso del Olivar",
        description:
          "Sentado en el Monte de los Olivos con vista al Templo, Jesús enseña a sus discípulos sobre la destrucción de Jerusalén y el fin de los tiempos. Advierte sobre falsos mesías, guerras y persecuciones, y los llama a la vigilancia. Nadie sabe el día ni la hora — solo el Padre.",
        quote: '"Velad, pues, porque no sabéis a qué hora ha de venir vuestro Señor."'
      },
      2: {
        action: "Agonía en Getsemaní",
        description:
          "Después de la Última Cena, Jesús va con sus discípulos al Huerto de Getsemaní en el Monte de los Olivos. En profunda angustia, ora tres veces: 'Padre mío, si es posible, pase de mí esta copa; pero no sea como yo quiero, sino como tú.' Suda gotas como de sangre. Judas llega con una turba y lo traiciona con un beso.",
        quote: '"Padre mío, si es posible, pase de mí esta copa; pero no sea como yo quiero, sino como tú."'
      },
      3: {
        action: "La Ascensión",
        description:
          "Cuarenta días después de su resurrección, Jesús lleva a sus discípulos al Monte de los Olivos, cerca de Betania. Los comisiona a ser sus testigos hasta lo último de la tierra. Mientras los bendice, es elevado ante sus ojos, y una nube lo oculta de su vista. Dos ángeles prometen que volverá de la misma manera.",
        quote: '"Este mismo Jesús, que ha sido tomado de vosotros al cielo, así vendrá como le habéis visto ir al cielo."'
      }
    },
    emmaus: {
      1: {
        action: "Camino a Emaús",
        description:
          "El día de la resurrección, dos discípulos desanimados caminan hacia Emaús. Un desconocido se les une y les explica cómo las Escrituras señalaban a un Mesías sufriente y resucitado. En la cena, parte el pan y sus ojos se abren. Reconocen a Jesús, pero él desaparece. Corren de regreso a Jerusalén para contarles a los demás.",
        quote: '"¿No ardía nuestro corazón en nosotros, mientras nos hablaba en el camino, y cuando nos abría las Escrituras?"'
      }
    }
  }
};

export function eventText(cityId, eventIndex, field) {
  if (currentLang === "en") return null;
  return eventTranslations[currentLang]?.[cityId]?.[eventIndex]?.[field] || null;
}

// ── Book Name Translation (for Scripture panel) ──────────
const bookNameMap = {
  es: {
    Matthew: "Mateo",
    Mark: "Marcos",
    Luke: "Lucas",
    John: "Juan",
    Acts: "Hechos"
  }
};

export function displayVerse(verse) {
  if (currentLang === "en") return verse;
  let result = verse;
  const map = bookNameMap[currentLang];
  if (map) {
    for (const [en, loc] of Object.entries(map)) {
      result = result.replace(new RegExp(`\\b${en}\\b`, "g"), loc);
    }
  }
  return result;
}

export function displayChapter(chapter) {
  return displayVerse(chapter);
}

// ── Geographic Label Translations ────────────────────────
export const geoLabels = {
  en: {
    seas: [
      { name: "Mediterranean Sea", lat: 33.5, lng: 33.0, size: 16 },
      { name: "Sea of Galilee", lat: 32.82, lng: 35.52, size: 10 },
      { name: "Dead Sea", lat: 31.5, lng: 35.48, size: 10 },
      { name: "Red Sea", lat: 29.5, lng: 33.0, size: 12 },
      { name: "Jordan River", lat: 32.35, lng: 35.58, size: 9 }
    ],
    regions: [
      { name: "GALILEE", lat: 32.78, lng: 35.25, size: 13 },
      { name: "SAMARIA", lat: 32.25, lng: 35.15, size: 12 },
      { name: "JUDEA", lat: 31.65, lng: 35.05, size: 13 },
      { name: "PEREA", lat: 32.0, lng: 35.70, size: 11 },
      { name: "DECAPOLIS", lat: 32.60, lng: 35.85, size: 11 },
      { name: "PHOENICIA", lat: 33.45, lng: 35.15, size: 11 },
      { name: "IDUMEA", lat: 31.25, lng: 34.80, size: 10 },
      { name: "EGYPT", lat: 30.50, lng: 31.50, size: 14 },
      { name: "SINAI", lat: 30.20, lng: 33.50, size: 11 }
    ]
  },
  es: {
    seas: [
      { name: "Mar Mediterráneo", lat: 33.5, lng: 33.0, size: 16 },
      { name: "Mar de Galilea", lat: 32.82, lng: 35.52, size: 10 },
      { name: "Mar Muerto", lat: 31.5, lng: 35.48, size: 10 },
      { name: "Mar Rojo", lat: 29.5, lng: 33.0, size: 12 },
      { name: "Río Jordán", lat: 32.35, lng: 35.58, size: 9 }
    ],
    regions: [
      { name: "GALILEA", lat: 32.78, lng: 35.25, size: 13 },
      { name: "SAMARIA", lat: 32.25, lng: 35.15, size: 12 },
      { name: "JUDEA", lat: 31.65, lng: 35.05, size: 13 },
      { name: "PEREA", lat: 32.0, lng: 35.70, size: 11 },
      { name: "DECÁPOLIS", lat: 32.60, lng: 35.85, size: 11 },
      { name: "FENICIA", lat: 33.45, lng: 35.15, size: 11 },
      { name: "IDUMEA", lat: 31.25, lng: 34.80, size: 10 },
      { name: "EGIPTO", lat: 30.50, lng: 31.50, size: 14 },
      { name: "SINAÍ", lat: 30.20, lng: 33.50, size: 11 }
    ]
  }
};
