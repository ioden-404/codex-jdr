const CODEX = {
  meta: {
    title: "Euchronia",
    subtitle: "Codex de Campagne",
    description: "Le recueil officiel de la campagne : lore, personnages, lieux et factions du Royaume d'Euchronia.",
    tagline: "Le monde. Son histoire. Ses Légendes.",
    heroImage: "img/Bannière.jpg",
    mapImage: "Cartedumonde.png",
    quote: "Ce qui n'est pas écrit est oublié. Ce qui est écrit devient éternel.",
    quoteAuthor: "Maître Célion",
    upcoming: [],
    recentNotes: [
      { icon: "🦁", title: "La chimère de la mine de Corel", when: "Session 6" },
      { icon: "🩸", title: "Hob massacre le groupe de Raho", when: "Session 6" },
      { icon: "🔮", title: "La malédiction d'Obsidio",        when: "Session 5" },
      { icon: "⚜️", title: "La bague des Tantalus",           when: "Session 5" }
    ],
    quickLinks: [
      { label: "Protagonistes",   href: "#/personnages" },
      { label: "Factions actives", href: "#/factions" },
      { label: "Lieux explorés",  href: "#/lieux" },
      { label: "Fils narratifs",  href: "#/" }
    ],
    sessions: 6,
    mj: "Shiki",
    status: "En cours",
    location: "Mine de Corel — Principauté d'Oceana",
    locationNote: "Le groupe a confié Obsidio Kotabbos aux soins du père Jida Brez à l'église de Corel (Berzim veille sur lui en secret). Direction validée : régler la crise de la chimère qui a envahi la mine de Corel, puis filer vers Altabury voir Astori Hojo. Sur la route, Hob/Telmona a massacré tout le groupe de mercenaires de Raho sur la place de Corel avant d'interroger le groupe. Le combat contre la chimère commence à la prochaine séance.",
    threads: [
      {
        id: "monastere",
        icon: "🔥",
        label: "L'incendie du monastère",
        desc: "Qui a commandité le massacre des moines ? Célion savait à l'avance — il a laissé un carnet. Les pistes pointent vers Malva.",
        who: "Uma & Onyxus",
        urgency: "haute"
      },
      {
        id: "lettre-altabury",
        icon: "📜",
        label: "La lettre d'Altabury",
        desc: "Shakka porte une lettre au sceau des trois triangles superposés. Son contenu n'a pas été révélé au groupe.",
        who: "Shakka",
        urgency: "haute"
      },
      {
        id: "bailli-sanctor",
        icon: "🕵️",
        label: "Bailli & Sanctor",
        desc: "Oren Vale ment sur les crimes. Belric Thane vient de Grand Trad sans raison claire. Une charrette partait vers l'est en pleine nuit.",
        who: "Groupe",
        urgency: "haute"
      },
      {
        id: "horde-gobeline",
        icon: "⚔️",
        label: "La horde gobeline",
        desc: "Le fort n'était qu'un nid satellite. Le camp principal — 50 à 100 gobelins, deux ogres — est intact à l'ouest de Malva.",
        who: "Groupe",
        urgency: "haute"
      },
      {
        id: "abzu",
        icon: "🌀",
        label: "Origine d'Abzu",
        desc: "Abzu était une abomination de Magla pur, non contemporaine. Son lien avec les gobelins reste incompris.",
        who: "Onyxus & Veritas",
        urgency: "moyenne"
      },
      {
        id: "grimoire",
        icon: "📓",
        label: "Le grimoire conscient",
        desc: "Depuis le transfert de l'igniter, le grimoire de Veritas développe une forme de conscience propre.",
        who: "Veritas",
        urgency: "moyenne"
      },
      {
        id: "dren-solaria",
        icon: "⛪",
        label: "Dren Solaria",
        desc: "Prélat clemar de Brilehaven apparu dans la grotte côtière. A invoqué le Zolom, muté des cadavres en lézards. Joren Sile dit que le groupe est traqué. L'aigle géant de la session 5 était peut-être Dren.",
        who: "Groupe",
        urgency: "haute"
      },
      {
        id: "hob-telmona-fil",
        icon: "🐺",
        label: "Hob / Telmona, le tueur",
        desc: "À Corel, Hob a massacré seul tout le groupe de mercenaires de Raho à mains nues, sous les yeux du groupe. Il les a interrogés sur un prisonnier disparu, ne les a pas crus, et a juré qu'ils se reverraient. Ses canines anormalement pointues intriguent.",
        who: "Groupe",
        urgency: "haute"
      },
      {
        id: "malédiction-obsidio",
        icon: "💀",
        label: "La malédiction d'Obsidio",
        desc: "Obsidio Kotabbos est confié au père Jida Brez à l'église de Corel, qui le maintient stable sans pouvoir le guérir (environ deux semaines de répit). Berzim, présenté en secret à Jida, continue de l'aider. Direction décidée : régler la mine, puis foncer vers Altabury voir Astori Hojo.",
        who: "Onyxus & Kael",
        urgency: "haute"
      },
      {
        id: "chimere-mine-corel",
        icon: "🦁",
        label: "La chimère de la mine de Corel",
        desc: "Une chimère (corps et tête de lion, queue de scorpion, ailes de chauve-souris) a envahi la mine de Corel, bloquant toute production. Le noble propriétaire refuse de payer pour la chasser. Le groupe vient d'entrer dans la mine quand un rugissement et un boom ont retenti — combat à venir.",
        who: "Groupe",
        urgency: "haute"
      },
      {
        id: "tantalus-fil",
        icon: "〰️",
        label: "Les Tantalus",
        desc: "Organisation secrète dont la bague porte trois vagues superposées traversées d'une barre. Obsidio Kotabbos et Maître Célion en faisaient partie. Leurs objectifs restent inconnus.",
        who: "Groupe",
        urgency: "moyenne"
      },
      {
        id: "astori-hojo-fil",
        icon: "🌈",
        label: "Astori Hojo",
        desc: "Mage Nidia aux cheveux arc-en-ciel violets, au service de l'armée à Altabury. A maudit Obsidio Kotabbos. Ses motivations et son lien avec Dren ou les Tantalus sont inconnus.",
        who: "Groupe",
        urgency: "moyenne"
      }
    ]
  },
  sections: {
    lore: {
      label: "Lore & Histoire",
      icon: "📜",
      description: "Le contexte du monde : magie, foi, politique raciale et histoire d'Euchronia.",
      entries: [
        {
          id: "monde-euchronia",
          title: "Le Monde d'Euchronia",
          subtitle: "Présentation générale",
          tags: ["monde", "géopolitique"],
          summary: "Un royaume tenu debout par la peur d'un passé oublié. La foi, la hiérarchie et la méfiance y font loi.",
          content: `<p>Le monde tel qu'il est connu s'est relevé d'un âge ancien dont presque plus personne ne parle avec certitude. Les chroniques officielles évoquent un temps de ruine et de désordre — une époque si lointaine qu'elle a cessé d'appartenir à l'histoire pour devenir un outil de prédication. Les souverains s'en servent pour justifier la nécessité de l'ordre ; les prêtres, pour rappeler que toute déviation mène au chaos ; le peuple, pour expliquer ses craintes sans avoir à les comprendre.</p>
<p>De cette peur est né l'ordre actuel : un monde de frontières, de hiérarchies et de méfiances anciennes. Les races y coexistent, mais rarement sur un pied d'égalité. La place d'un individu dépend encore de son sang, de son apparence, de ses coutumes, et surtout de la manière dont son peuple est perçu par les puissants.</p>
<h3>Structure politique</h3>
<p>Le Royaume d'Euchronia est organisé en trois grands ensembles : le royaume central (capitale : <strong>Grand Trad</strong>), la Principauté d'Oceana à l'ouest (grand port : <strong>Brilehaven</strong>), et la Principauté de Montario à l'est (centre spirituel : <strong>Altabury</strong>). En théorie, cet ensemble forme une seule couronne. En pratique, cette unité repose sur un équilibre fragile entre la monarchie, l'Église sanctiste, les élites provinciales et les tensions raciales qui traversent tout le pays.</p>
<h3>L'isolement continental</h3>
<p>Euchronia est ceinturée par des courants océaniques extrêmement violents, rendant la navigation lointaine presque suicidaire. Seules certaines zones calmes du sud permettent aux navires de mouiller. Cette barrière naturelle a protégé le royaume des invasions étrangères, mais l'a aussi enfermé dans une forme d'isolement. Les rares récits parlant d'autres terres ont pris avec le temps l'allure de rumeurs ou d'avertissements.</p>
<h3>La menace des Humans</h3>
<p>Au-delà des villes et des routes sûres, le monde est redevenu sauvage. Les <strong>Humans</strong> y errent librement — des créatures surgissant là où le Magla se concentre, massacrant sans distinction, résistant aux armes ordinaires. Ce qui se trouve au-dehors des zones civilisées n'est pas un espace à conquérir, mais une immensité hostile. Le royaume gouverne les cités et les plaines cultivées. Il ne gouverne ni les marges, ni la mer, ni ce qui attend plus loin.</p>`
        },
        {
          id: "magla-igniters",
          image: "",
          discovered: "Avant la campagne",
          title: "Le Magla et les Igniters",
          subtitle: "La magie du monde",
          tags: ["magie", "doctrine", "société"],
          summary: "Le Magla est la force magique du monde. Les igniters sont les seuls instruments reconnus pour la canaliser — et c'est une décision politique autant que religieuse.",
          content: `<h3>Le Magla</h3>
<p>Le Magla est une force invisible qui imprègne le monde entier. Il est intimement lié aux mouvements les plus instables de l'âme — les émotions intenses, les passions, la peur et le désir. C'est précisément pour cela que l'Église le considère comme dangereux laissé à la seule volonté des individus.</p>
<p>Le Magla n'est ni un don pur ni une malédiction simple. Selon la doctrine sanctiste, il est une force imparfaite qu'il convient de <em>contenir</em>, pas d'embrasser. Les Mustari, avec leur troisième œil, le perçoivent directement — ce qui est à la fois leur force et la principale raison de leur marginalisation.</p>
<h3>Les Igniters</h3>
<p>Les igniters sont des instruments — amulettes, pendentifs, sceptres, objets rituels — permettant de canaliser le Magla de façon "sûre et contrôlée". L'Église enseigne qu'ils sont <em>l'unique voie légitime</em> pour employer la magie : ils filtrent la volonté humaine et l'empêchent d'entrer en contact brut avec le Magla.</p>
<p>Cette position n'est pas seulement religieuse : elle est politique. Elle permet de définir ce qui est légitime et ce qui ne l'est pas — et de surveiller ceux dont la magie passe par d'autres voies.</p>
<h3>La magie sans igniter</h3>
<p>User de la magie sans igniter n'est pas vu comme une différence : c'est une transgression, presque une profanation. Certaines races — notamment les <strong>Elda</strong> — sont associées à cette magie "directe", ce qui explique en grande partie leur persécution systémique.</p>
<blockquote>« Ce qui naît des passions doit être contenu par la discipline. Ce qui menace la forme du monde doit être ramené à une mesure juste. »<br><em>— Aurelion, fondateur du Sanctisme</em></blockquote>`
        },
        {
          id: "hierarchie-raciale",
          title: "La Hiérarchie Raciale",
          subtitle: "Les peuples d'Euchronia",
          tags: ["races", "société", "politique"],
          summary: "Euchronia n'est pas un monde de haine simple, mais d'une hiérarchie complexe où chaque peuple est défini par la peur qu'il inspire ou l'utilité qu'on lui reconnaît.",
          content: `<p>Nulle part l'harmonie n'est complète. La place d'un individu dépend encore de son sang, de son apparence, de ses coutumes, et surtout de la manière dont son peuple est perçu par les puissants. Ce monde ne manque pas seulement de justice ; il manque de vérité.</p>
<h3>Les Elda</h3>
<p>Parmi toutes les races, les Elda sont ceux dont la seule existence contredit le plus directement le dogme sanctiste. On les associe à une magie jugée trop directe, trop instinctive, trop proche d'un interdit que l'Église préfère nommer impureté. Les Elda ne sont pas seulement méprisés : ils sont pensés comme une <em>menace métaphysique</em>. On les surveille, on les écarte des postes de pouvoir.</p>
<h3>Les Mustari</h3>
<p>Leur troisième œil et leur perception directe du Magla leur donnent un statut ambigu. Craints, parfois poussés à l'isolement — et pourtant consultés en secret par ceux qui cherchent des réponses qu'aucun prêtre orthodoxe ne peut offrir.</p>
<h3>Les Paripus</h3>
<p>On les dit sauvages, imprévisibles, incapables de discipline. Ce jugement tient moins à ce qu'ils sont qu'à ce qu'ils représentent pour les sociétés centralisées : une manière différente d'organiser le monde, donc immédiatement considérée comme inférieure.</p>
<h3>Les Eugief</h3>
<p>Pas tant haïs qu'<em>effacés</em>. Leur petite taille les condamne souvent à l'invisibilité sociale : exploités comme travailleurs, messagers, intermédiaires, sans que leur valeur propre soit reconnue.</p>
<h3>Les Nidia</h3>
<p>Acceptés, mais sous surveillance. Leur sensibilité émotionnelle et leur proximité perçue avec le Magla nourrissent la méfiance. On les admire parfois, sans jamais être tout à fait sans réserve.</p>
<h3>Les Ishkia</h3>
<p>Bénéficient d'un respect distant en raison de leur sagesse et de leur retrait des luttes ouvertes. Ce respect les maintient aussi dans une position d'altérité : ils appartiennent toujours un peu au dehors du monde commun.</p>
<h3>Les Rhoag</h3>
<p>Place ambivalente selon les régions. Souvent valorisés pour leur force et leur endurance, ils peuvent être réduits à une fonction utilitaire. Dans certains lieux, cela les rapproche du sommet ; dans d'autres, cela les enferme dans un rôle.</p>
<h3>Clemar et Roussainte</h3>
<p>Les deux peuples dominants. Les <strong>Clemar</strong> dominent l'appareil militaire, avec une idéologie plaçant la stabilité au-dessus de la liberté. Les <strong>Roussainte</strong> dominent l'administration et les élites — avec une discrimination élégante, polie, presque raffinée, mais non moins brutale.</p>`
        },
        {
          id: "sanctisme",
          title: "Le Sanctisme",
          subtitle: "La foi d'Euchronia",
          tags: ["religion", "histoire", "pouvoir"],
          summary: "Né des enseignements d'Aurelion, le Sanctisme est à la fois une religion, une philosophie morale et un instrument de pouvoir. Son dieu est l'Almighty.",
          content: `<h3>Origines</h3>
<p>Avant le Sanctisme, le monde errait dans l'incertitude. Les croyances étaient innombrables, les coutumes contradictoires. C'est dans cet âge de confusion qu'apparut <strong>Aurelion</strong> — moins un prophète qu'un interprète du désordre. Là où d'autres voyaient seulement le malheur, il distingua une fracture plus profonde : le monde n'était pas vide de sens, il était <em>dévié</em>.</p>
<p>Aurelion enseigna que les passions sans mesure ne troublaient pas seulement les âmes — elles nourrissaient aussi le Magla. Cette force invisible, réelle, dangereuse, qui imprégnait l'existence entière.</p>
<h3>La Doctrine</h3>
<p>Le Sanctisme n'enseigne pas à vider les émotions, mais à ne jamais les laisser devenir souveraines. Dans les temples, les fidèles apprennent la posture juste, le silence, la répétition des gestes, la parole mesurée. Ils récitent les <em>Litanies de Réalignement</em>. La dignité, selon le culte, consiste à demeurer maître de ce qui cherche à nous déborder.</p>
<h3>L'Almighty</h3>
<p>Le dieu du Sanctisme. Pas un dieu des caprices humains, mais le principe supérieur de l'ordre véritable, celui vers lequel toute chose doit tendre. Prier l'Almighty, c'est reconnaître que le monde visible n'est pas encore aligné sur sa juste mesure — et que les peuples ont le devoir moral de participer à ce réalignement.</p>
<h3>Structure et pouvoir</h3>
<p>Le cœur du culte est <strong>Altabury</strong>, en Montario. Là siège le <strong>Sanctifex</strong>, gardien suprême de la foi. Sous son autorité : prêtres, docteurs, moines, sanctors en province, et les <strong>Chevaliers-Moines</strong>, bras armé de l'Église.</p>
<p>L'Église est présente dans les temples comme dans les tribunaux, dans les palais comme sur les champs de bataille. Elle peut étouffer des enquêtes, légitimer des inégalités, et justifier des persécutions — non pas comme une violence, mais comme un "devoir sacré envers un monde qui retomberait dans la fracture".</p>
<blockquote>« Voilà pourquoi le Sanctisme n'est pas seulement une religion de consolation. Il est une religion de redressement. Il n'enseigne pas seulement à croire ; il enseigne à corriger. »</blockquote>`
        },
        {
          id: "origine-ogres",
          title: "L'Origine des Ogres",
          subtitle: "Lore — Révélation session 3",
          tags: ["gobelins", "ogres", "lore", "biologie"],
          summary: "Les ogres ne sont pas une race distincte : ce sont des gobelins nés de mères d'autres races. La gestation gobeline déchire la mère, et l'enfant issu d'une autre race grandit plus grand, plus fort.",
          content: `<h3>La Révélation</h3>
<p>En session 3, le groupe a appris l'origine réelle des ogres. Ce ne sont pas des créatures indépendantes : ce sont des <strong>gobelins</strong> nés de mères appartenant à d'autres races.</p>
<h3>Mécanisme</h3>
<ul>
<li>La gestation gobeline est extrêmement courte : environ <strong>une semaine</strong>.</li>
<li>Le processus de naissance <strong>déchire la mère</strong> — les gobelins n'ont pas de notion de maternité protectrice.</li>
<li>Un gobelin né d'une mère d'une autre race (Rhoag, Clemar, etc.) grandit plus grand et plus fort que la normale.</li>
<li>Un gobelin atteint l'âge adulte en environ <strong>deux semaines</strong>.</li>
</ul>
<h3>Implications</h3>
<p>Les ogres du camp gobelin de Malva sont des gobelins "améliorés" par leur naissance hors-race. Ce n'est pas une évolution naturelle : c'est une stratégie de la horde pour produire des combattants d'élite. Les disparitions de femmes à Malva prennent une signification encore plus sombre à la lumière de cette information.</p>`
        },
        {
          id: "lien-humans-lezards",
          title: "Le Lien Humans / Lézards",
          subtitle: "Lore — Révélation session 4",
          tags: ["Humans", "lézards", "Magla", "Dren", "lore"],
          summary: "Confirmé par le Général Barion : les lézards mutés de Dren ressemblent physiologiquement aux Humans — deux types d'entités dépourvues de Magla. Cela éclaire peut-être le besoin de tonneaux de Magla liquide.",
          content: `<h3>La Confirmation</h3>
<p>Le <strong>Général Barion</strong> (Armée Royale, Rhoag) a confirmé en session 4 que les lézards humanoïdes mutés par Dren Solaria ressemblent physiologiquement aux <strong>Humans</strong> — les créatures des zones sauvages.</p>
<h3>Le Point Commun</h3>
<p>Les deux types d'entités — Humans et lézards mutés — seraient <strong>dépourvus de Magla</strong>. Dans un monde où le Magla est omniprésent, cette absence est une anomalie profonde.</p>
<h3>Hypothèse</h3>
<p><strong>Lysandra</strong> a proposé que c'est peut-être pour cela que Dren avait besoin des tonneaux de <strong>Magla liquide</strong> dans la grotte : pour compenser l'absence naturelle de Magla dans les corps qu'il transformait.</p>
<h3>Questions ouvertes</h3>
<ul>
<li>Quelle est la relation réelle entre les Humans et les lézards mutés ?</li>
<li>Les Humans ont-ils une origine artificielle — quelqu'un les crée-t-il ?</li>
<li>Dren cherche-t-il à reproduire les Humans, à les comprendre, ou à s'en servir ?</li>
</ul>`
        }
      ]
    },

    personnages: {
      label: "Personnages",
      icon: "🎭",
      description: "Personnages joueurs, alliés et antagonistes rencontrés au fil de la campagne.",
      groups: [
        { key: "PJ", label: "Protagonistes", icon: "⚔️" },
        { key: "PNJ", label: "Personnages secondaires", icon: "👥" }
      ],
      entries: [
        {
          id: "uma",
          image: "img/uma.png",
          discovered: "Session 1",
          group: "PJ",
          title: "Uma",
          subtitle: "Moinesse combattante — Rhoag élevée Ishkia",
          tags: ["Rhoag", "Ishkia"],
          summary: "Moinesse combattante au passé discret. Rhoag élevée dans la culture Ishkia, elle frappe vite et parle peu. Ce qu'elle cherche, elle le garde pour elle.",
          content: `<h3>Apparence</h3>
<p>À dix-neuf ans, Uma porte déjà la trentaine dans ses traits. Les rides précoces de son sang Rhoag se mêlent aux marques vives laissées par sa fougue : sourcils froncés, sourire carnassier, regard qui brûle avant de comprendre. Son corps est solide, durci, noueux comme un tronc de pin battu par les vents. Ses bras musclés portent des tatouages qu'elle s'est elle-même ajoutés. Elle marche comme un jeune loup affamé.</p>
<h3>Manière d'être</h3>
<p>Directe, impulsive, économe en mots. Elle observe avant de parler et frappe avant de douter. Elle ne s'explique pas et ne s'excuse pas — sauf quand elle le décide vraiment. Une loyauté difficile à gagner, impossible à briser une fois acquise.</p>
<h3>Capacités</h3>
<p>Combat au corps à corps, arts martiaux monastiques. Mains nues ou bâton. Des mois d'entraînement intensif ont forgé un style rapide et brutal, sans fioritures. Elle peut enchaîner plusieurs frappes en un instant et a été vue dévier et rediriger des attaques adverses sur leurs propres auteurs.</p>
<h3>Ce que les autres savent</h3>
<ul>
<li>Onyxus est son cousin adoptif — c'est Célion, l'oncle d'Onyxus, qui l'a élevée au monastère (révélé en session 4)</li>
<li>Elle vient d'un monastère dans les montagnes de l'Est, détruit par un incendie criminel il y a un an</li>
<li>Elle a demandé l'aide du groupe pour traquer et tuer le prélat Dren Solaria — responsable du massacre</li>
</ul>`
        },
        {
          id: "onyxus",
          image: "img/Onyxus.png",
          group: "PJ",
          title: "Onyxus Kotabbos",
          subtitle: "Jeune Ishkia, arbalétrier",
          tags: ["Ishkia", "famille Kotabbos"],
          summary: "Le fils d'Obsidio Kotabbos est parti seul suivre une lettre signée par Célion, sans prévenir son père. Une décision qui dit tout de ce qu'il cherche.",
          content: `<h3>Présentation</h3>
<p>Jeune Ishkia à l'arbalète. Il reconnut Uma immédiatement dans la taverne de Malva et se précipita vers elle — retrouvailles tendues, pleines de silences non-dits. Uma lui a présenté Onyxus comme son "cousin" à Shakka, ce qui l'a surpris lui-même.</p>
<h3>Famille</h3>
<p>Fils d'<strong>Obsidio Kotabbos</strong>, dont le carnet contient des notes et des dessins sur l'architecture gobeline. Son père a reçu une lettre signée de la main de Célion, pointant vers Malva. Les écritures correspondent à celles du carnet d'Uma. Onyxus est parti seul sans prévenir son père.</p>
<h3>Ce qu'Uma lui a dit (en privé)</h3>
<p>Célion est mort. Tout le monde au monastère est mort. Incendie criminel, il y a un an. Uma était absente. Elle a fait les sépultures seule.</p>
<h3>Capacités</h3>
<p>Arbalétrier précis. Utilise des carreaux spéciaux (dont Faerie Fire). A improvisé un grappin avec une corde et un crochet créé par magie. Sanctuary, Feather Fall, Mirror Image, Healing Word, Deflect Attack. Peut se téléporter via les Cartes de Nyx.</p>
<h3>Les Cartes de Nyx</h3>
<p>Créées par Onyxus dans la nuit précédant la session 3, ce sont des cartes magiques personnalisées aux ornements spécifiques à chaque porteur. Chaque carte confère : <strong>+d4 à l'initiative</strong>, vision partagée de type "Carte du Maraudeur" permettant de se localiser mutuellement, et la possibilité de <strong>lancer des sorts sans ligne de vue directe</strong> (à condition d'être à portée). Chaque carte est liée à son porteur et inséparable tant qu'Onyxus est en vie. Il a également fabriqué pour Uma une paire de bandages magiques (+1 à l'attaque et aux dégâts).</p>`
        },
        {
          id: "lysandra",
          image: "img/Lyssandra.png",
          group: "PJ",
          title: "Lysandra",
          subtitle: "Guerrière Roussainte, ancienne de l'académie",
          tags: ["Roussainte", "épée & bouclier"],
          summary: "Elle a tout quitté — l'académie, l'armée — par dégoût de ce qu'on lui demandait de faire. Elle cherche maintenant quelque chose qui vaille la peine d'être défendu.",
          content: `<h3>Présentation</h3>
<p>Roussainte, armée d'une épée et d'un bouclier. Elle arrivait à Malva capuche relevée pour cacher ses oreilles. Elle fut reconnue par Veritas dès leur arrivée à la taverne — et lui sauta dans les bras avec un soulagement visible. Il ne lui a pas vraiment rendu l'étreinte.</p>
<h3>Passé</h3>
<p>Elle a quitté l'académie et l'armée par dégoût de ce qu'on lui demandait de faire. Elle voyage avec <strong>Kael</strong>, rencontré en chemin après avoir sauvé ensemble <strong>Laëk</strong>, un marchand Eugief, d'une meute de loups.</p>
<h3>Manière d'être</h3>
<p>Directe, tactique, protectrice. Elle forme les gardes de Malva sans qu'on le lui demande. Elle distribue le butin équitablement. Elle remarque quand Veritas met sa bière de côté et lui rapporte discrètement une boisson sans alcool, récupérant les bières — sans commentaire.</p>
<p>Sur les secrets : <em>"Je me doute que vous ne nous dites pas tout, tout comme moi. Tant que nous ne nous connaissons pas encore suffisamment, nous aurons quelques secrets. Mais pour ma part, ce ne sera rien qui puisse nuire à votre vie à mes côtés."</em></p>
<h3>Pouvoirs notables</h3>
<p>Châtiment Divin (Divine Smite) — une lumière sort de ses yeux, traverse l'épée. Sacred Weapon. Paladin.</p>
<h3>Passé — Révélation session 4</h3>
<p>Enfance à Grand Trad dans les Hautes Cités. Sa nourrice <strong>Méredith</strong>, Paripus, a été abattue par ses propres parents devant elle — parce qu'elle était Paripus. Exilée chez une tante, elle a fui. C'est le nom de Méredith qu'elle a choisi comme pseudonyme en fuyant Altabury. Son frère aîné <strong>Valendris</strong> est connu du Général Barion, qui lui doit une dette — c'est d'ailleurs pour Valendris qu'il a choisi d'aider le groupe. Lysandra lui a glissé entre les barreaux : <em>"Dites à Valendris que tout ira bien et que mentir à la famille n'est pas si grave."</em></p>
<h3>Ce qu'elle cache</h3>
<p>Elle sait quelque chose au sujet de la créature ailée liée à Kael. Elle a promis de ne pas parler à sa place. Elle avait également, dans son baluchon, un paquet de lettres ficelées portant le nom "Veritas" — repéré brièvement par Onyxus sans explication.</p>`
        },
        {
          id: "kael",
          image: "img/Kael.png",
          group: "PJ",
          title: "Kael",
          subtitle: "Prêtre itinérant Rhoag",
          tags: ["Rhoag", "prêtre"],
          summary: "Prêtre Rhoag au visage tatoué, Kael soigne, bénit et observe. Il a une petite créature ailée invisible aux autres, perchée sur son épaule, qu'il refuse de reconnaître.",
          content: `<h3>Présentation</h3>
<p>Prêtre Rhoag itinérant au visage tatoué. Combat au corps à corps et soigne. A rejoint Lysandra en chemin, après avoir sauvé ensemble Laëk d'une meute de loups. Discret, attentif, avec une tranquillité qui tranche avec l'urgence des autres.</p>
<h3>La Créature</h3>
<p>Une petite entité invisible aux autres, perchée sur son épaule. Elle lui parle et peut détecter les présences magiques. À Malva, elle a senti <em>"quelque chose qui pue, de nature magique, partout et diffus — trop faible pour localiser la source, mais vraiment partout"</em>.</p>
<p>Quand Veritas interroge sur la créature ailée vue combattre les gobelins au fort, Kael répond avec un sourire : <em>"Appelons ça une illusion."</em> Lysandra appuie. Veritas voit clairement qu'ils mentent tous les deux.</p>
<h3>Passé — Révélation session 4</h3>
<p>Ancien prêtre d'une petite église près de Malva. Son supérieur a un jour refusé d'accueillir un Paripus et une Eugief malades. Kael les a aidés en cachette et a quitté sa communauté. C'est en chemin qu'il a rencontré Berzim, puis Lysandra alors qu'elle se battait contre une meute de loups pour défendre Laëk le marchand. Il a un ami guérisseur à Corel dont les idéaux rejoignent les siens — c'est pour cette raison que le groupe fait le détour vers cette ville pour soigner Obsidio.</p>
<h3>Observations au cours de l'enquête</h3>
<ul>
<li>A découvert que la première victime avait subi un accouchement forcé que le bailli avait tu</li>
<li>A détecté que les blessures des victimes ne correspondaient pas toutes au même type d'attaque</li>
<li>A rencontré Belric Thane à l'église — un sanctor Clemar de Grand Trad qui l'a mis mal à l'aise</li>
<li>Suspect sur le bailli : <em>"Seule belle maison du village, coffres fermés, gardes mal équipés."</em></li>
</ul>`
        },
        {
          id: "veritas-varn",
          image: "img/Veritas.png",
          group: "PJ",
          title: "Veritas Varn",
          subtitle: "Scribe de l'Ordre des Archivistes",
          tags: ["Ordre des Archivistes", "magie"],
          summary: "Scribe méticuleux, mage en formation. Son grimoire commence à prendre conscience. Il note tout — y compris ce qu'il refuse de dire lui-même.",
          content: `<h3>Présentation</h3>
<p>Scribe de l'Ordre des Archivistes, porteur d'une tenue reconnaissable de l'Ordre. Sa plume enchantée note automatiquement ce qu'il refuse de dire lui-même — ce qui peut être embarrassant. Quand Shakka lui demande de garder un secret sur le sceau d'Altabury, la plume écrit dans son livre : <em>"Je ne vois pas ce que vous voulez dire."</em></p>
<h3>Capacités</h3>
<p>Firebolt, Orbe Chromatique, Magic Missiles, rituel Detect Magic, Identify, Enlarge. Ses sorts nécessitent un igniter — actuellement son grimoire, après avoir transféré l'igniter depuis son ancien bâton dans le livre lors d'un rituel personnel à Malva.</p>
<h3>Le Grimoire conscient</h3>
<p>Suite au transfert de l'igniter, le grimoire commence à prendre vie et à acquérir une forme de conscience. Les implications restent à explorer.</p>
<h3>Relations</h3>
<ul>
<li><strong>Lysandra :</strong> La reconnaît immédiatement à la taverne. Il ne lui rend pas l'étreinte. Une histoire partagée, non encore explicitée.</li>
<li><strong>Le groupe :</strong> Fait des jets discrets d'observation sur l'honnêteté des autres. A noté que Joren Sile était "entièrement honnête".</li>
</ul>`
        },
        {
          id: "shakka",
          image: "img/Shakka.png",
          group: "PJ",
          title: "Shakka",
          subtitle: "Rhoag d'ailleurs, porteur de la Lanterne",
          tags: ["Rhoag", "mystères"],
          summary: "C'est sa première fois sur ce continent. Il voyage avec une lance magique et une lanterne qui abrite une entité. Il est lié à Altabury d'une façon qu'il tait.",
          content: `<h3>Présentation</h3>
<p>Rhoag à la lance ouvragée dorée et à la lanterne mystérieuse. C'est sa première fois sur ce continent. Il ne dit quasiment rien de son passé, sinon qu'il vient "de très loin". Sa discrétion n'est pas de la timidité : c'est une décision.</p>
<h3>La Lanterne</h3>
<p>Fortement magique (détectée par Veritas lors d'un Detect Magic). Une entité y réside, à la voix très faible. Elle peut percevoir les présences magiques dans l'environnement. À Malva : <em>"Méfie-toi, Shakka. C'est vraiment partout."</em></p>
<h3>La Lance</h3>
<p>Également fortement magique. Lance ouvragée à détails dorés. Sa boucle d'oreille est aussi magique.</p>
<h3>Le Sceau d'Altabury</h3>
<p>Il a montré discrètement à Veritas une lettre abîmée portant un sceau : <strong>trois triangles superposés et décalés</strong>. Veritas a confirmé qu'il s'agit d'un sceau d'Altabury, sans pouvoir identifier la famille. Shakka a demandé la discrétion. Ni le contenu ni la provenance de cette lettre n'ont été divulgués au groupe.</p>
<p>En session 4, il a demandé à Barion de lui faire passer le contenu de cette lettre brûlée. Barion a accepté. Dans le tunnel d'évasion, une note de Barion l'attendait avec la signification de la lettre — que Shakka a aussitôt brûlée pour ne laisser aucune trace. Il sait désormais ce qu'elle disait, mais n'en a rien partagé.</p>
<h3>Philosophie</h3>
<p><em>"Les secrets des autres ne m'intéressent pas. S'ils ont quelque chose à nous dire, ils nous le diront. Chacun a eu sa vie avant et chacun ses objectifs."</em></p>`
        },
        {
          id: "zar",
          image: "",
          discovered: "Session 1",
          group: "PNJ",
          title: "Zar",
          subtitle: "Entité de la Lanterne — liée à Shakka",
          tags: ["entité", "Shakka", "mystère", "lanterne"],
          summary: "L'entité qui réside dans la lanterne de Shakka. Voix faible, perçoit les présences magiques. Bien plus ancienne qu'il n'y paraît : confiée jadis à la mère de Shakka, elle a maintenant faim de Magla — et le fait savoir.",
          content: `<h3>Présentation</h3>
<p>Une entité réside dans la <strong>lanterne</strong> de Shakka, fortement magique (détectée par le Detect Magic de Veritas). Sa voix est très faible. Elle peut percevoir les présences magiques de l'environnement — à Malva, elle avait prévenu Shakka : <em>"Méfie-toi, Shakka. C'est vraiment partout."</em></p>
<h3>Le Chaudron de Hyr et le Zolom</h3>
<p>Zar a absorbé le <strong>Chaudron de Hyr</strong> trouvé dans la grotte côtière (session 3), et a aspiré le <strong>Zolom</strong> morceau par morceau lors du coup de grâce de Shakka — il n'est rien resté du serpent.</p>
<h3>Révélations (Session 6)</h3>
<p>De nuit, à l'écart du groupe, Shakka fait sortir Zar de la lanterne. L'esprit se plaint d'avoir faim : la grosse quantité de Magla absorbée dans la grotte de Malva lui a ouvert l'appétit, et il en réclame davantage — menaçant à mots couverts de se servir sur un membre du groupe si Shakka ne le nourrit pas. Shakka lui interdit formellement de toucher à quiconque.</p>
<p>Zar révèle alors qu'il est <strong>bien plus ancien qu'il n'y paraît</strong>, qu'il a été confié à la <strong>mère de Shakka</strong>, et que celle-ci le protégeait précisément pour éviter qu'on s'en serve à de mauvaises fins. Il prévient Shakka de ne pas le mettre en colère.</p>
<h3>Questions ouvertes</h3>
<ul>
<li>Quelle est la véritable nature de Zar — et son âge réel ?</li>
<li>Pourquoi la mère de Shakka le protégeait-elle, et de qui ?</li>
<li>Que se passera-t-il si sa faim de Magla n'est jamais rassasiée ?</li>
</ul>`
        },
        {
          id: "oren-vale",
          group: "PNJ",
          title: "Oren Vale",
          subtitle: "Bailli de Malva — Ishkia",
          tags: ["Malva", "suspect", "corrompu"],
          summary: "Un Ishkia corpulent et couvert de bagues dont l'opulence détonne dans ce village de pêcheurs. Il a menti sur la nature des crimes. Il n'était pas chez lui en pleine nuit.",
          content: `<h3>Description</h3>
<p>Ishkia corpulent, moustachu, bien habillé, couvert de bagues. Son opulence tranche radicalement avec la pauvreté du village qu'il est censé gouverner. Il reconnaît la tenue de l'Ordre des Archivistes sur Veritas et tend la main pour qu'on la baise. Quand Shakka lui demande à quoi il sert : <em>"À diriger ces terres, enfin ! Oh, les roturiers !"</em></p>
<h3>Ce qu'on sait</h3>
<ul>
<li>A tu le fait que la première victime avait subi un accouchement forcé, présentant l'affaire uniquement comme un viol attribuable aux gobelins</li>
<li>A fait taire Elwenne lors d'un conseil quand elle signalait des disparitions internes au village, avec l'appui de Belric Thane</li>
<li>Coffres fermés à cadenas chez lui. Beaucoup de nourriture stockée. Pièce inutilisée depuis longtemps.</li>
<li>N'était pas chez lui en pleine nuit — Uma a tenté de s'introduire. Des voix dans une pièce adjacente. Une charrette partait vers l'est.</li>
</ul>
<h3>Rapport avec Belric Thane</h3>
<p>Quand Kael interroge Belric sur sa relation avec le bailli, il répond : <em>"Notre avis diverge."</em> Pourtant ils coopèrent pour bloquer toute investigation sérieuse.</p>`
        },
        {
          id: "joren-sile",
          group: "PNJ",
          title: "Joren Sile",
          subtitle: "Capitaine de la garde de Malva — Roussainte",
          tags: ["Malva", "allié", "honnête"],
          summary: "Petit pour un Roussainte, cape verte déchirée, visiblement épuisé. Il fait ce qu'il peut avec des paysans à qui on a mis un casque et une lance en pierre dans les mains.",
          content: `<h3>Description</h3>
<p>Roussainte petit pour sa race. Cape verte déchirée, lance en main. Visiblement épuisé. Compétent — contrairement à ses gardes, des paysans qui se coupent les doigts en tenant leurs armes.</p>
<h3>Situation</h3>
<p>Il a mené une reconnaissance au Fort de Corne Creuse, mais le bailli lui a ordonné de ne pas attaquer. Il est coincé dans une chaîne de commandement corrompue. Il sait que le problème de financement vient du bailli mais refuse de le dire ouvertement — il regarde nerveusement autour de lui quand on l'interroge.</p>
<h3>Information clé</h3>
<p>Il a révélé qu'Elwenne avait soulevé, lors d'un conseil, que certaines disparitions concernaient des personnes enlevées de l'intérieur même du village. Le bailli l'a fait taire avec l'appui de Belric Thane. Aucune enquête n'a suivi.</p>
<h3>Fiabilité</h3>
<p>Veritas a fait un jet d'observation : Joren est <strong>entièrement honnête</strong>. Il s'est montré sincèrement soulagé de voir le groupe revenir vivant du fort.</p>`
        },
        {
          id: "belric-thane",
          group: "PNJ",
          title: "Belric Thane",
          subtitle: "Sanctor Clemar, venu de Grand Trad",
          tags: ["Sanctisme", "Clemar", "Grand Trad", "suspect"],
          summary: "Un prêtre sanctiste trop bien habillé pour un village de pêcheurs. Trop certain sur des faits non vérifiés. Trop pressé de fermer le dossier.",
          content: `<h3>Description</h3>
<p>Sanctor Clemar, bedonnant, bien vêtu pour un homme de foi dans un village de pêcheurs. Signes de richesse visibles. Chaleureux en surface.</p>
<h3>Rencontre avec Kael</h3>
<p>Il affirme avec <em>certitude</em> que les gobelins sont responsables de toutes les disparitions. Quand Kael l'interroge sur sa relation avec le bailli : <em>"Notre avis diverge."</em> En partant : <em>"Les temps de trouble demandent des esprits ordonnés. L'émotion n'a jamais sauvé un village."</em></p>
<h3>Ce qui est suspect</h3>
<ul>
<li>Trop certain pour quelqu'un qui n'a mené aucune investigation visible</li>
<li>A activement soutenu le bailli pour étouffer les doutes d'Elwenne</li>
<li>Sa présence dans un village aussi reculé pour un homme de Grand Trad est non expliquée</li>
<li>Coopère avec Oren Vale malgré une relation décrite comme divergente</li>
</ul>`
        },
        {
          id: "elwenne",
          group: "PNJ",
          title: "Sœur Elwenne",
          subtitle: "Ecclésiastique Roussainte de Malva",
          tags: ["Malva", "Sanctisme", "alliée potentielle"],
          summary: "Une ecclésiastique blonde qui a osé dire ce que personne d'autre n'osait — et s'est fait taire. Elle en sait probablement plus qu'elle ne peut l'exprimer librement.",
          content: `<h3>Description</h3>
<p>Ecclésiastique Roussainte aux cheveux blonds en carré. Elle prend la défense des gardes inexpérimentés face à Lysandra. Joren la renvoie sèchement : <em>"Sœur Elwenne, retournez à l'église !"</em> — tension visible entre eux.</p>
<h3>Ce qu'elle a fait</h3>
<p>Lors d'un conseil municipal, elle a été la première à soulever que certaines disparitions concernaient des personnes enlevées de l'intérieur du village — ce qui contredisait la théorie gobeline. Le bailli l'a fait taire avec l'appui de Belric Thane.</p>
<p>La sœur de la première victime a dit qu'Elwenne "l'avait déjà réconfortée". Elle est proche des familles de victimes.</p>
<h3>Comportement observé</h3>
<p>En sortant de l'église, Kael croise son regard — elle tourne la tête vers lui, puis se remet à prier. Veritas note qu'elle sait probablement plus que Joren sur la situation réelle.</p>
<h3>Session 3 — Surveillance de Hob</h3>
<p>Quand le groupe est revenu à Malva en session 3 pour l'interroger, Elwenne était déjà partie avec Joren pour surveiller le maître de quai (Hob/Telmona), qu'ils avaient identifié comme suspect. Ils l'avaient vu entrer à l'église pour des rendez-vous avec Belric Thane. Le soir de la session 3, pendant que le groupe filait Hob au port, Joren et Elwenne surveillaient le bailli.</p>`
        },
        {
          id: "hob-telmona",
          image: "",
          discovered: "Session 3",
          group: "PNJ",
          title: "Hob / Telmona",
          subtitle: "Tueur à gages Paripus — Grand Trad",
          tags: ["Paripus", "Grand Trad", "mercenaire", "traque"],
          summary: "Présenté comme Hob dès le début, son vrai nom est Telmona. Tueur à gages Paripus de Grand Trad, redoutable à mains nues. À Corel, il a massacré seul tout le groupe de mercenaires de Raho et interrogé le groupe sur un prisonnier disparu.",
          content: `<h3>Présentation</h3>
<p>Telmona est un tueur à gages Paripus de Grand Trad, qui s'était présenté sous le nom de <strong>Hob</strong> comme maître de quai à Malva. Son identité réelle a été reconnue par <strong>Lysandra</strong> lors de l'interception de la cargaison — elle l'avait côtoyé à Grand Trad et avait personnellement vu ses crimes. Grand, musclé, pelage blanc, traits félins et mâchoire carrée. On lui a remarqué, à Corel, des <strong>canines anormalement pointues</strong>.</p>
<h3>Ce qu'on sait</h3>
<ul>
<li>Paripus de Grand Trad, l'un des tueurs à gages les plus expérimentés — jamais raté une cible, ses victimes ne sont jamais retrouvées.</li>
<li>A transporté des tonneaux de Magla liquide depuis la grotte côtière jusqu'à une cabane, récupérés ensuite par une vingtaine de cavaliers en armure d'Altabury direction Altabury.</li>
<li>A refusé de révéler son commanditaire. N'est pas le responsable direct des enlèvements — il était payé pour livrer.</li>
<li>Installé à Malva quelques mois avant le début des disparitions, arrivé après la première disparition.</li>
<li>Joren et Sœur Elwenne le surveillaient car il se rendait régulièrement à des rendez-vous avec Belric Thane à l'église.</li>
</ul>
<h3>Le massacre de Corel (Session 6)</h3>
<p>Sur la place centrale de Corel, le groupe le retrouve en train de démembrer méthodiquement, à mains nues, tout le groupe de mercenaires qui les avait malmenés (celui de Raho et Lucie/Lucifer) : coups, suplex, nez et oreilles arrachés, sourire jusqu'aux oreilles malgré une épée à la ceinture qu'il n'utilise quasiment pas. Il coince le mercenaire Ishkia <strong>Nir</strong> en fuite, le soulève d'une main, lui dit qu'il était payé pour ça, et l'empale avant de le laisser tomber sans vie. Lucie tente de l'arrêter, en vain. Aucune garde n'intervient — il n'y a aucune force publique à Corel.</p>
<h3>L'interrogatoire du groupe</h3>
<p>Il rattrape ensuite le groupe, se plante devant Uma (qu'il dépasse d'une tête et demie), s'étonne qu'ils soient encore vivants alors qu'ils auraient dû être exécutés, et révèle son vrai motif : les mercenaires avaient un prisonnier qu'il n'a jamais retrouvé, et il cherche des renseignements. Le groupe nie tout savoir ; il ne les croit pas mais les laisse partir, sûr de les revoir. La terreur qu'il dégage paralyse Uma (tremblante, en sueur) jusqu'à son départ.</p>
<h3>Statut</h3>
<p>À surveiller de très près — confirmé extrêmement dangereux et patient. Son commanditaire reste inconnu. Lysandra lui avait proposé 50 pièces d'or pour attaquer le camp gobelin — refus méprisant. Il l'a appelée "la rouquine" et évoqué son passé à Grand Trad avec hostilité.</p>`
        },
        {
          id: "dren-solaria",
          image: "img/Drenn_Solaria.png",
          discovered: "Session 3",
          group: "PNJ",
          title: "Dren Solaria",
          subtitle: "Prélat clemar — Brilehaven (antagoniste)",
          tags: ["clemar", "Brilehaven", "antagoniste", "magie", "Église"],
          summary: "Prélat clemar de Brilehaven, apparu dans la grotte côtière de Malva. A invoqué le Zolom et muté des cadavres en lézards. S'est enfui. Probablement à l'origine de la traque du groupe.",
          content: `<h3>Apparence</h3>
<p>Clemar aux cheveux blancs, vêtu d'une tenue ecclésiastique dorée. Stature et assurance d'un prélat habitué à l'autorité.</p>
<h3>Ce qui s'est passé (Session 3)</h3>
<p>Le groupe a découvert Dren dans la grotte côtière, debout devant un chaudron sur des cristaux de Magla géants. Il avait préparé trois cadavres torturés qu'il a mutés en lézards humanoïdes au moment critique. Il a invoqué le <strong>Zolom</strong>, un serpent colossal. Shakka a tenté de l'attaquer par-derrière mais Dren a dévié le coup avec une dague d'une rapidité déconcertante. Il s'est enfui par téléportation pendant le combat.</p>
<h3>Ce qu'il savait sur le groupe</h3>
<p>Dren a démontré une connaissance troublante des secrets de chacun, ce qui laisse entrevoir une organisation ayant collecté des informations sur eux bien en amont :</p>
<ul>
<li>À <strong>Uma</strong> : <em>"Tu es encore vivant, toi ? Tu aurais dû cramer avec tous les autres."</em> — il connaissait l'incendie du monastère. Uma a reconnu le chaudron : il provenait de son monastère.</li>
<li>À <strong>Lysandra</strong> : <em>"La traître à son sang"</em> — il connaît son passé et sa famille.</li>
<li>À <strong>Veritas</strong> : <em>"Tu aurais dû mourir aussi. On m'a demandé d'envoyer quelqu'un pour te faire taire."</em> — une tentative d'assassinat commanditée par l'Ordre des Archivistes, que Veritas a survécue.</li>
</ul>
<h3>Connexion avec la campagne</h3>
<ul>
<li>A fabriqué des accusations contre le groupe (kidnapping, torture, tentative d'assassinat sur sa personne), transmises au Général Barion via l'armée royale. Appuyées par Oren Vale et Belric Thane.</li>
<li>Son lien avec l'incendie du monastère d'Uma est fortement suspecté.</li>
<li>Combat l'igniter-bracelet — utilise deux dagues très rapidement en corps à corps.</li>
</ul>
<h3>Note du MJ</h3>
<p><em>"L'aigle géant en fait était Dren."</em></p>`
        },
        {
          id: "barion",
          image: "img/Barion.png",
          discovered: "Session 4",
          group: "PNJ",
          title: "Barion",
          subtitle: "Général de l'Armée Royale — Rhoag",
          tags: ["Rhoag", "armée", "Altabury"],
          summary: "Général de l'Armée Royale, Rhoag aux longs cheveux blancs tressés. A arrêté le groupe à Altabury sur des charges fabriquées par Dren Solaria. Dur mais pas nécessairement corrompu.",
          content: `<h3>Apparence</h3>
<p>Rhoag imposant, longs cheveux blancs tressés. Tenue de général de l'Armée Royale. Maintien autoritaire.</p>
<h3>L'arrestation (Session 4)</h3>
<p>Le groupe a été arrêté par des soldats d'Altabury et conduit devant Barion pour interrogatoire. Les charges avaient été fabriquées par <strong>Dren Solaria</strong>. Barion a interrogé le groupe directement — il n'est pas présenté comme corrompu, mais comme un homme qui applique les ordres dans le cadre d'un système.</p>
<h3>Information clé</h3>
<p>Barion a confirmé que les lézards mutés de Dren ressemblent physiologiquement aux <strong>Humans</strong> — et que ceux-ci sont dépourvus de Magla. Cela éclaire peut-être le besoin de tonneaux de Magla liquide dans la grotte.</p>
<h3>La dette envers Valendris</h3>
<p>Barion a une dette envers <strong>Valendris</strong>, frère aîné de Lysandra — et c'est aussi pour Valendris qu'il a choisi d'intervenir en faveur du groupe. Il a indiqué qu'il devrait mettre Valendris dans la confidence.</p>
<h3>La fuite du groupe</h3>
<p>Barion les a fait passer pour morts. Un soldat de confiance les a guidés par un tunnel souterrain jusqu'en pleine nature. Puis le groupe a voyagé par mer vers la Principauté d'Oceana. Pseudonymes adoptés : Kael → Alek, Veritas → Astren, Lysandra → Meredith (en hommage à sa nourrice Paripus), Onyxus → Xyno, Uma → Aang (Shakka a gardé son prénom).</p>`
        },
        {
          id: "raho",
          image: "",
          discovered: "Session 4",
          group: "PNJ",
          title: "Raho",
          subtitle: "Chef mercenaire Rhoag — Géomancien",
          tags: ["Rhoag", "mercenaire", "géomancien"],
          summary: "Chef d'un groupe de mercenaires, Rhoag géomancien capable d'invoquer deux golems de pierre. Mis KO par Shakka, interrogé en session 5, puis relâché.",
          content: `<h3>Présentation</h3>
<p>Rhoag géomancien, chef d'un groupe de mercenaires dont faisaient partie Obsidio Kotabbos et Lucie/Lucifer. A invoqué deux golems de pierre en posant les deux mains au sol — golems redevenus poussière dès sa mise KO.</p>
<h3>L'interrogatoire (Session 5)</h3>
<p>Capturé lors de l'affrontement en session 4, interrogé en session 5. Relâché après avoir fourni des informations.</p>
<h3>Note tactique</h3>
<p>Faiblesse absolue : ses golems disparaissent instantanément s'il perd conscience. Shakka l'a mis KO en priorité, neutralisant ses deux construits d'un seul coup. Toujours neutraliser le créateur en premier.</p>
<h3>Mort (Session 6)</h3>
<p>Sur la place de Corel, Hob/Telmona a massacré tout son groupe de mercenaires à mains nues. Raho figurait probablement parmi les victimes — le groupe a choisi de ne pas intervenir.</p>`
        },
        {
          id: "lucie-lucifer",
          image: "",
          discovered: "Session 5",
          group: "PNJ",
          title: "Lucie / Lucifer",
          subtitle: "Prêtresse Roussainte — Cheffe des mercenaires",
          tags: ["Roussainte", "mercenaire", "prêtresse"],
          summary: "Prêtresse Roussainte blonde, cheffe du groupe de mercenaires. Connue sous deux noms : Lucie au quotidien, Lucifer comme nom de guerre. Rencontrée en session 5.",
          content: `<h3>Présentation</h3>
<p>Roussainte aux cheveux blonds, prêtresse et cheffe d'un groupe de mercenaires. Elle utilise deux noms : <strong>Lucie</strong> en usage courant, <strong>Lucifer</strong> comme nom de guerre ou d'identité alternative.</p>
<h3>Rôle</h3>
<p>Dirige le groupe de mercenaires dont faisaient partie Raho (géomancien) et Obsidio Kotabbos. Ses commanditaires et objectifs précis restent à établir.</p>
<h3>Statut</h3>
<p>Revue en session 6 sur la place de Corel : son groupe de mercenaires (dont Raho et l'Ishkia Nir) a été massacré sous ses yeux par Hob/Telmona, sans qu'elle parvienne à l'arrêter. Sort inconnu après cet événement.</p>`
        },
        {
          id: "nir",
          image: "",
          discovered: "Session 6",
          group: "PNJ",
          title: "Nir",
          subtitle: "Mercenaire Ishkia — groupe de Raho/Lucie",
          tags: ["Ishkia", "mercenaire", "mort", "Hob"],
          summary: "Mercenaire Ishkia du groupe de Raho et Lucie/Lucifer. Tente de fuir le massacre de Hob sur la place de Corel — rattrapé, soulevé d'une main et empalé après un bref interrogatoire.",
          content: `<h3>Mort sur la place de Corel (Session 6)</h3>
<p>Lors du massacre du groupe de mercenaires par <strong>Hob/Telmona</strong> sur la place centrale de Corel, Nir est le dernier à tenter de fuir. Hob le coince, le soulève d'une seule main, lui dit qu'il était payé pour ça, et l'empale de son épée avant de le laisser tomber sans vie — la seule victime que Hob achève à l'arme plutôt qu'à mains nues.</p>`
        },
        {
          id: "obsidio-kotabbos",
          image: "img/Obsidio.png",
          discovered: "Session 4",
          group: "PNJ",
          title: "Obsidio Kotabbos",
          subtitle: "Père d'Onyxus — Ishkia, membre des Tantalus",
          tags: ["Ishkia", "famille Kotabbos", "Tantalus", "maudit"],
          summary: "Père d'Onyxus, retrouvé dans une cage de mercenaires en session 4. Membre de l'organisation secrète des Tantalus. Actuellement maudit par Astori Hojo — Berzim maintient la malédiction en stase.",
          content: `<h3>Présentation</h3>
<p>Ishkia, père d'<strong>Onyxus Kotabbos</strong>. Il avait reçu une lettre signée de Célion pointant vers Malva. Son carnet contient des notes et des dessins sur l'architecture gobeline — ce qui l'a amené à s'intéresser à cette région.</p>
<h3>Découverte (Session 4)</h3>
<p>Le groupe l'a retrouvé enfermé dans une cage, prisonnier du groupe de mercenaires de Lucie/Lucifer. Il était dans un état critique.</p>
<h3>Les Tantalus</h3>
<p>Obsidio est membre de l'organisation secrète des <strong>Tantalus</strong>. Leur bague représente trois vagues superposées traversées d'une barre. Célion en faisait également partie — ce qui éclaire rétrospectivement leur correspondance et les lettres envoyées vers Malva.</p>
<h3>La Malédiction (Session 5)</h3>
<p>Obsidio a été maudit par <strong>Astori Hojo</strong>, mage Nidia au service de l'armée d'Altabury. Berzim chante en boucle pour maintenir la malédiction en stase. Obsidio ne peut pas être déplacé pendant le chant, et Berzim doit prendre des pauses. La résolution de cette malédiction est l'urgence principale — d'où la route vers Corel.</p>`
        },
        {
          id: "astori-hojo",
          image: "img/Astori_Nidia.png",
          discovered: "Session 5",
          group: "PNJ",
          title: "Astori Hojo",
          subtitle: "Mage Nidia — Service de l'armée à Altabury",
          tags: ["Nidia", "mage", "Altabury", "malédiction"],
          summary: "Mage Nidia aux cheveux arc-en-ciel violets, au service de l'armée royale à Altabury. A maudit Obsidio Kotabbos. Ses motivations et ses liens avec les autres antagonistes sont inconnus.",
          content: `<h3>Apparence</h3>
<p>Nidia aux cheveux arc-en-ciel violets. Travaille pour l'armée royale stationnée à Altabury. Présence officielle — pas une opérative clandestine.</p>
<h3>La Malédiction</h3>
<p>Astori Hojo a maudit <strong>Obsidio Kotabbos</strong>. La nature exacte de la malédiction et ses effets à long terme ne sont pas encore entièrement compris par le groupe. Berzim peut la maintenir en stase, mais pas la lever.</p>
<h3>Questions ouvertes</h3>
<ul>
<li>Pourquoi a-t-elle maudit spécifiquement Obsidio ?</li>
<li>A-t-elle un lien avec Dren Solaria ou avec les Tantalus ?</li>
<li>Agit-elle sur ordre ou de sa propre initiative ?</li>
</ul>`
        },
        {
          id: "jida-brez",
          image: "",
          discovered: "Session 6",
          group: "PNJ",
          title: "Jida Brez",
          subtitle: "Prêtre Clemar — Église de Corel, allié de Kael",
          tags: ["Clemar", "Sanctisme", "Corel", "allié"],
          summary: "Ami d'études de Kael à l'église de Corel. Sérieux, perspicace, partage l'idée que le soin doit être prodigué à tous. Maintient Obsidio stable et accepte de protéger le secret de Berzim.",
          content: `<h3>Présentation</h3>
<p>Clemar à peu près de l'âge de Kael, sérieux et posé. Les deux hommes ont étudié ensemble à l'église avant que leurs chemins se séparent — Kael en quittant l'autorité de l'Église pour devenir prêtre itinérant, tout en gardant sa foi au Tout-Puissant. Jida est surpris mais visiblement heureux de le revoir.</p>
<h3>Obsidio</h3>
<p>Il examine Obsidio Kotabbos et reconnaît qu'il ne peut pas guérir sa malédiction, mais accepte de le maintenir stable — une équipe de quatre religieux se relaie pour repousser la putréfaction par tranches de vingt minutes. Il estime pouvoir le maintenir ainsi environ <strong>deux semaines</strong>.</p>
<h3>Perspicacité</h3>
<p>Il comprend vite que le groupe est recherché et mentionne avoir entendu parler de l'agression d'un prélat d'Oceana — une question qui met Veritas mal à l'aise et déclenche une passe d'armes avec Lysandra et Uma. Il se justifie : il veut seulement savoir à qui il a affaire.</p>
<h3>Berzim</h3>
<p>Présenté à la fée par Kael, il se montre d'abord incrédule, puis sent Berzim passer derrière sa tête et change d'expression. Il qualifie la fée d'hérétique mais accepte de s'occuper d'elle/lui en secret, à condition de n'être vu que par lui seul — sa présence devant rester confidentielle.</p>
<h3>Bibliothèque</h3>
<p>Autorise Kael à consulter la bibliothèque de l'église sur place, mais refuse qu'il en sorte des livres.</p>`
        },
        {
          id: "alga",
          image: "",
          discovered: "Session 6",
          group: "PNJ",
          title: "Sœur Alga",
          subtitle: "Prêtresse Nidia voilée — Église de Corel",
          tags: ["Nidia", "Sanctisme", "Corel"],
          summary: "Prêtresse Nidia voilée qui accueille le groupe à l'église de Corel. Méfiante mais finit par les conduire à un dortoir et chercher Jida Brez à la demande de Kael.",
          content: `<h3>Présentation</h3>
<p>Prêtresse Nidia voilée de l'église de Corel (notée "Alga" dans les notes du groupe). C'est elle qui ouvre la porte au groupe et accepte de les laisser entrer — méfiante quand Kael lui demande de n'annoncer sa présence qu'au seul père Jida Brez.</p>
<h3>Tension avec Shakka</h3>
<p>Shakka la met mal à l'aise en lui faisant remarquer qu'elle vient de laisser entrer six inconnus dans l'église sans poser de questions. Elle finit malgré tout par les conduire à un dortoir et part chercher Jida Brez.</p>
<h3>Au chevet d'Obsidio</h3>
<p>Elle fait partie des quatre religieux (avec une autre Nidia, une Clemar et un Paripus) qui se relaient pour maintenir Obsidio Kotabbos stable, repoussant la putréfaction par tranches de vingt minutes. C'est elle qui tient compagnie à Onyxus à son chevet — et qui se retrouve décontenancée quand il lui demande à apprendre à prier le Tout-Puissant.</p>`
        }
      ]
    },

    lieux: {
      label: "Lieux",
      icon: "🗺️",
      description: "Villes, régions et lieux remarquables explorés ou mentionnés au fil de la campagne.",
      entries: [
        {
          id: "malva",
          image: "img/Malva.png",
          discovered: "Session 1",
          title: "Malva",
          subtitle: "Village côtier — sud-est de Montario",
          tags: ["village", "actif", "session 1-2"],
          summary: "Un village de pêcheurs gouverné par un bailli corrompu, gardé par une poignée de paysans armés, secoué par des disparitions que personne ne veut vraiment expliquer.",
          content: `<h3>Description</h3>
<p>Village côtier modeste au sud-est de la Principauté de Montario. La plupart des habitants sont pêcheurs. Un seul beau bâtiment se distingue : la maison du bailli. Le reste est simple et usé. Un garde note les noms des visiteurs à l'entrée.</p>
<h3>Situation actuelle</h3>
<p>Une vingtaine de disparitions sur plusieurs mois. D'abord du bétail, puis des humains. Les femmes retrouvées ont été violentées — et au moins l'une d'elles a subi un accouchement forcé que le bailli a soigneusement tu. Les hommes ne sont jamais retrouvés. La théorie officielle — les gobelins du Fort de Corne Creuse — s'est avérée partiellement vraie, mais insuffisante pour expliquer l'ensemble.</p>
<h3>Personnages présents</h3>
<ul>
<li><strong>Oren Vale</strong> — le bailli, suspect</li>
<li><strong>Joren Sile</strong> — capitaine de la garde, honnête</li>
<li><strong>Sœur Elwenne</strong> — ecclésiastique, en sait plus qu'elle ne dit</li>
<li><strong>Belric Thane</strong> — sanctor de Grand Trad, présence non expliquée</li>
<li><strong>Laëk</strong> — marchand Eugief, bazar complet, gratitude envers Kael et Lysandra</li>
</ul>
<h3>Ce qui reste ouvert</h3>
<p>Certaines disparitions semblent venir de l'intérieur du village. Une charrette partait vers l'est en pleine nuit. Les coffres fermés chez le bailli. Trois voyageurs inconnus (deux hommes et une femme) récemment arrivés, non blessés, non apeurés.</p>`
        },
        {
          id: "fort-corne-creuse",
          title: "Fort de Corne Creuse",
          subtitle: "Ancien bastion — nord de Malva",
          tags: ["forteresse", "exploré", "neutralisé"],
          summary: "Ancien bastion de la guerre de réunification, jamais pris par Euchronia. Les gobelins s'y étaient installés avec une reine et un monstre sorti d'une autre époque. Le groupe l'a nettoyé.",
          content: `<h3>Histoire</h3>
<p>Ancien bastion de la guerre de réunification, il n'a jamais été pris par Euchronia. Entouré de douves profondes à l'eau sombre dont le fond est invisible. Murs encore en bon état, une seule entrée.</p>
<h3>Ce qui s'est passé (Sessions 1 & 2)</h3>
<p>Le groupe y a affronté une horde de gobelins conduite par <strong>Groki</strong> (jeune reine gobeline, tuée par Uma) et un monstre : <strong>Abzu</strong>, une abomination entièrement constituée de Magla, appartenant à une époque révolue. Onyxus l'a identifiée comme "non contemporaine et hors des classifications connues".</p>
<p>À la mort d'Abzu, son corps a libéré des dizaines de cadavres en décomposition qu'il stockait à l'intérieur — victimes de races diverses, gobelins comme peuples civilisés.</p>
<h3>Découvertes</h3>
<ul>
<li>Ancienne prison vide — cages fermées, pas de clés</li>
<li>Dépendance nord-ouest : prison de fortune, traces de sang, jeune Roussainte retrouvée gorge tranchée</li>
<li>Butin : 1 200 pièces d'or, Staff of Healing récupéré sur le mage gobelin</li>
<li>Une musique sans source identifiable résonnait pendant le combat</li>
</ul>
<h3>État actuel</h3>
<p>Fort nettoyé. Mais Groki n'était qu'une jeune reine développant un nid satellite. La horde principale reste dans un camp bien plus grand, à l'ouest, repéré par Shakka et Onyxus.</p>`
        },
        {
          id: "grand-trad",
          title: "Grand Trad",
          subtitle: "Capitale du Royaume d'Euchronia",
          tags: ["capitale", "politique", "religion"],
          summary: "Cœur du pouvoir royal et religieux d'Euchronia. Ville immense et multi-raciale, elle donne au monde l'image de l'unité tout en vivant selon une hiérarchie stricte.",
          content: `<h3>Description générale</h3>
<p>Grand Trad est la capitale du Royaume d'Euchronia et le centre de gravité du pays. Ville immense et multi-raciale, elle donne au monde l'image de l'unité tout en vivant selon une hiérarchie stricte et silencieuse.</p>
<h3>Hiérarchie dans la ville</h3>
<ul>
<li>Les <strong>Clemar</strong> dominent l'appareil militaire</li>
<li>Les <strong>Roussainte</strong> dominent l'administration et les élites</li>
<li>Les <strong>Rhoag</strong> incarnent une part essentielle du pouvoir religieux</li>
<li>Les <strong>Elda</strong> — surveillés, écartés des charges importantes</li>
<li>Les <strong>Eugief</strong> — dans les marges visibles, peu reconnus</li>
<li>Les <strong>Paripus</strong> — main-d'œuvre ou rôles auxiliaires</li>
</ul>
<h3>Rôle politique</h3>
<p>L'alliance entre couronne et sanctuaire y prend tout son sens. Le roi maintient l'ordre visible ; le haut clergé justifie l'ordre invisible. Ensemble, ils imposent non seulement des lois, mais une lecture du monde dans laquelle certaines races semblent naturellement faites pour commander, d'autres pour servir, d'autres encore pour être surveillées.</p>
<h3>Connexion avec la campagne</h3>
<p>Belric Thane — sanctor suspect à Malva — vient de Grand Trad. La présence d'un homme de la capitale dans un village de pêcheurs pour une simple affaire de gobelins pose question.</p>`
        },
        {
          id: "altabury",
          title: "Altabury",
          subtitle: "Centre spirituel — Principauté de Montario",
          tags: ["religion", "Sanctisme", "Montario"],
          summary: "Le siège de l'Église Sanctiste et du Sanctifex. Là aussi que partent des lettres marquées du sceau aux trois triangles superposés — celles que Shakka garde précieusement.",
          content: `<h3>Description</h3>
<p>Altabury est le cœur du Sanctisme — la ville où la doctrine est conservée, interprétée et transmise à travers tout Euchronia. Siège du <strong>Sanctifex</strong>, gardien suprême de la foi. Une cité qui abrite la plus haute autorité religieuse du continent.</p>
<h3>Importance politique</h3>
<p>Montario est marqué par le poids du Sanctisme. Altabury en est la capitale spirituelle. Ce n'est pas simplement un centre religieux : c'est un levier de pouvoir, de légitimité et de contrôle sur l'ensemble du royaume.</p>
<h3>Connexion avec Shakka</h3>
<p>Shakka possède une lettre abîmée portant le sceau d'Altabury : trois triangles superposés et décalés. Ni le contenu ni la provenance de cette lettre n'ont été divulgués au groupe. Il a demandé la discrétion à Veritas — mais la plume enchantée de Veritas a noté la conversation quand même.</p>`
        },
        {
          id: "monastere-est",
          title: "Le Monastère des Montagnes de l'Est",
          subtitle: "Foyer d'Uma — détruit il y a un an",
          tags: ["détruit", "Ishkia", "Uma", "mystère"],
          summary: "Un monastère Ishkia perché à flanc de falaise dans les montagnes de l'Est. Brûlé il y a un an dans un incendie criminel. Tous ses occupants ont été tués avant que le feu soit mis.",
          content: `<h3>Description (avant l'incendie)</h3>
<p>Perché à flanc de falaise dans les montagnes de l'Est, là où l'air mord la peau et les rafales hurlent entre les pics de pierre. Bâti en pierres sombres extraites des falaises elles-mêmes, le monastère semblait ne faire qu'un avec la montagne. C'est là qu'Uma a grandi sous la tutelle de Maître Célion, dans un univers de chants sacrés, de méditations et de rouleaux de parchemins.</p>
<h3>L'Incendie</h3>
<p>Il y a un an, le monastère a brûlé. Pas accidentellement. Les corps portaient des marques d'armes — on les a tués <em>avant</em> de mettre le feu. Uma était absente et porte cette culpabilité. Des traînées d'accélérateur sur la neige. Un feu qui ne prend pas seul dans ce royaume de glace.</p>
<h3>Ce qu'on sait</h3>
<ul>
<li>Célion était le premier corps retrouvé, à sa place habituelle — comme s'il avait attendu</li>
<li>La veille, Célion avait remis un carnet à une aubergiste voisine — une précaution délibérée</li>
<li>Ce carnet pointe vers Malva. La lettre reçue par Obsidio Kotabbos pointe au même endroit.</li>
<li>Célion savait apparemment ce qui allait arriver. Il a préparé quelque chose avant de mourir.</li>
</ul>`
        },
        {
          id: "brilehaven",
          title: "Brilehaven",
          subtitle: "Grand port — Principauté d'Oceana",
          tags: ["port", "commerce", "Oceana"],
          summary: "Le grand port de la Principauté d'Oceana, tourné vers les échanges, les trafics et les rivalités d'influence maritimes.",
          content: `<h3>Description</h3>
<p>Brilehaven est le principal port de la Principauté d'Oceana, à l'ouest d'Euchronia. Vocation maritime et commerciale. Un lieu de passage et d'échanges — avec tout ce que cela implique comme activités grises.</p>
<p>Les courants océaniques violents qui ceinturent Euchronia font de Brilehaven un point stratégique pour les rares zones navigables du continent. C'est ici que convergent les marchands qui souhaitent commercer avec l'extérieur — quand c'est possible.</p>
<h3>Rôle dans la géopolitique</h3>
<p>Oceana conserve sa vocation maritime et commerciale. Les rivalités d'influence s'y jouent discrètement : entre grandes maisons, entre intérêts commerciaux et politiques, entre ceux qui veulent regarder vers l'horizon et ceux qui préfèrent que le royaume reste tourné vers l'intérieur.</p>`
        },
        {
          id: "grotte-cotiere-malva",
          image: "",
          discovered: "Session 3",
          title: "Grotte Côtière de Malva",
          subtitle: "Grotte cachée — Falaise côtière, sud de Malva",
          tags: ["grotte", "Magla", "session 3", "exploré"],
          summary: "Grotte cachée dans la falaise côtière de Malva. Abrite des cristaux de Magla géants. C'est là que le groupe a affronté Dren Solaria, le Zolom et les lézards mutés.",
          content: `<h3>Localisation et accès</h3>
<p>Cachée dans la falaise côtière au sud de Malva. L'entrée n'est pas visible depuis la mer ou depuis les terres. Elle a été localisée grâce aux informations collectées lors de l'enquête à Malva.</p>
<h3>Ce qu'elle contient</h3>
<ul>
<li><strong>Cristaux de Magla massifs :</strong> des formations colossales de Magla pur cristallisé tapissent les parois et le sol. Leur présence explique pourquoi Dren utilisait ce lieu.</li>
<li><strong>Trois cadavres torturés :</strong> préparés à l'avance par Dren, imprégnés de Magla pur. Ont muté en lézards humanoïdes pendant le combat.</li>
<li><strong>Le Chaudron de Hyr :</strong> artefact présent dans la grotte, finalement absorbé par Zar (l'entité de la lanterne de Shakka).</li>
<li><strong>Le Sac Sans Fond :</strong> objet magique récupéré dans la grotte par Lysandra lors de la fouille des cadavres de lézards.</li>
</ul>
<h3>Ce qui s'est passé (Session 3)</h3>
<p>Le groupe a confronté <strong>Dren Solaria</strong> ici. Il a invoqué le Zolom et activé les lézards mutés. Le Zolom a été absorbé par la lanterne de Shakka. Dren a fui avant d'être achevé.</p>
<h3>Montée de niveau</h3>
<p>Le groupe a atteint le <strong>niveau 4</strong> suite à cette session.</p>`
        },
        {
          id: "corel",
          image: "",
          discovered: "Session 5",
          title: "Corel",
          subtitle: "Ville minière — Principauté d'Oceana",
          tags: ["ville", "Oceana", "minière", "session 6"],
          summary: "Ville ouvrière vivant du minerai de magla, à quarante miles de sa mine. Le groupe y a confié Obsidio aux soins du père Jida Brez, assisté à un massacre commis par Hob, et pris la route de la mine envahie par une chimère.",
          content: `<h3>Présentation</h3>
<p>Ville de la Principauté d'Oceana, atteinte en session 6 après la route depuis la côte (kobold, araignées-loups géantes, sorcières vertes, bugbear et hobgoblins). La ville vit du minerai de <strong>magla</strong> et tourne grâce à une classe ouvrière venue de partout pour envoyer de l'argent à des familles restées ailleurs. Peu de voyageurs, peu de commerçants, presque pas de quartiers nobles, beaucoup de baraquements surpeuplés. Aucune garde, aucune force publique.</p>
<h3>L'église et le père Jida Brez</h3>
<p>Kael y connaît <strong>Jida Brez</strong>, prêtre Clemar et ami d'études, qui accepte de maintenir Obsidio Kotabbos stable (environ deux semaines) et de protéger le secret de Berzim, la fée de Kael. C'est aussi là que le groupe a vécu une violente dispute interne sur la direction à prendre (Altabury via Astori Hojo vs. Brilehaven), finalement tranchée : régler la mine, puis foncer vers Altabury.</p>
<h3>La crise de la mine</h3>
<p>Les chariots de cristaux de magla sont tous stationnés et une foule mécontente gronde sur la place : des créatures — une <strong>chimère</strong> — ont envahi la mine à quarante miles de la ville, tuant les mineurs et arrêtant toute production (donc tous les salaires). Le noble propriétaire refuse de payer pour la faire chasser.</p>
<h3>La démonstration de force de Hob</h3>
<p>Sur la place centrale, le groupe a vu <strong>Hob/Telmona</strong> massacrer à mains nues tout le groupe de mercenaires de Raho, avant de les interroger sur un prisonnier disparu.</p>
<h3>État actuel</h3>
<p>Le groupe a quitté la ville pour la mine, où l'attend la chimère — combat reporté à la session suivante.</p>`
        }
      ]
    },

    bestiaire: {
      label: "Bestiaire",
      icon: "🐉",
      description: "Créatures rencontrées, observées ou mentionnées au fil de la campagne d'Euchronia.",
      groups: [
        { key: "combattu", label: "Rencontrés & Combattus", icon: "⚔️" },
        { key: "observe",  label: "Observés & Évités",      icon: "👁️" },
        { key: "mythique", label: "Mythiques & Légendaires", icon: "📜" }
      ],
      entries: [
        {
          id: "gobelin",
          image: "img/Gobelin.jpg",
          discovered: "Session 1",
          group: "combattu",
          title: "Gobelin",
          subtitle: "Humanoïde — Horde de Malva",
          tags: ["humanoïde", "horde", "session 1", "session 2"],
          summary: "Petits humanoïdes organisés en hordes hiérarchisées. Armés d'arbalètes, lances et magie psychique. Capables de construire des camps permanents. Plus dangereux en groupe qu'en individuel.",
          content: `<h3>Description</h3>
<p>Humanoïdes de petite taille, rapides et nombreux. Individuellement faibles, ils deviennent une menace sérieuse en groupe coordonné. La horde de Malva comprenait des arbalétriers, des guerriers au corps à corps et au moins un mage.</p>
<h3>Capacités observées</h3>
<ul>
<li><strong>Mage gobelin :</strong> attaques psychiques téléguidées (boules d'énergie violette), sort Blindness, sort de fermeture de porte. Efficace à distance.</li>
<li><strong>Guerrier gobelin :</strong> combat au corps à corps, armes rouillées mais nombreux.</li>
<li><strong>Reine gobeline :</strong> peut dévier les attaques reçues sur des alliés adjacents.</li>
</ul>
<h3>Organisation</h3>
<p>Les gobelins construisent des camps permanents avec une architecture reconnaissable — documentée dans le carnet d'Obsidio Kotabbos. Ils établissent des <em>nids satellites</em> autour d'un camp principal, avec une reine par nid. Le fort n'était qu'un satellite. Le camp principal à l'ouest est bien plus grand.</p>
<h3>Notes tactiques</h3>
<p>Priorité au mage en premier. Le feu les perturbe (Veritas a terrorisé le warg et mis le feu à un chariot avec succès). Les tirs depuis une position surélevée sont efficaces.</p>`
        },
        {
          id: "warg",
          image: "img/Warg.jpg",
          discovered: "Session 1",
          group: "combattu",
          title: "Warg",
          subtitle: "Bête — Fort de Corne Creuse",
          tags: ["bête", "session 1", "sentinelle"],
          summary: "Grand canidé utilisé comme sentinelle par les gobelins. Sens aiguisés, capable d'alerter tout un camp en hurlant. Terrorisé par le feu.",
          content: `<h3>Description</h3>
<p>Grand canidé sauvage, bien plus imposant qu'un loup ordinaire. Les gobelins l'utilisent comme chien de garde. Celui du fort montait la garde derrière une meurtrière et a repéré Onyxus malgré la discrétion de ce dernier.</p>
<h3>Capacités observées</h3>
<ul>
<li>Sens de l'odorat et de l'ouïe très développés.</li>
<li>Morsure puissante — a failli atteindre Onyxus à deux centimètres du visage.</li>
<li>Hurlement d'alerte audible par tout le camp.</li>
</ul>
<h3>Faiblesses</h3>
<p>Le feu le terrifie. Un Firebolt de Veritas l'a mis en fuite immédiate. Tué par Shakka (attaque radiale).</p>`
        },
        {
          id: "groki",
          image: "img/Reine Gobeline.jpg",
          discovered: "Session 2",
          group: "combattu",
          title: "Groki — Reine Gobeline",
          subtitle: "Boss — Nid satellite du Fort de Corne Creuse",
          tags: ["gobelin", "boss", "session 2", "tuée"],
          summary: "Jeune reine gobeline en train de développer un nid satellite. Capable de dévier des attaques sur ses alliés. Tuée par Uma d'un coup de pied marteau sur la nuque.",
          content: `<h3>Description</h3>
<p>Gobeline plus imposante que les autres, installée sur un trône improvisé dans le fort. Commandait la horde locale avec autorité. Sa mort à hurlé "Abzu !" — le monstre répondait à ses appels.</p>
<h3>Capacités observées</h3>
<ul>
<li><strong>Déviation d'attaque :</strong> réaction permettant de dévier une attaque reçue sur un gobelin adjacent. A dévié l'épée de Lysandra sur un allié.</li>
<li>Résistance physique : a encaissé plusieurs coups dont une attaque enchantée au froid avant de tomber.</li>
</ul>
<h3>Contexte</h3>
<p>Groki n'était qu'une <em>jeune reine</em> développant un nid satellite. Elle travaillait sous l'autorité du camp principal à l'ouest, qui possède ses propres ogres. Sa mort n'a pas éliminé la menace globale.</p>
<h3>Kill</h3>
<p>Uma, aveuglée puis retrouvant la vue, a sauté des remparts en Feather Fall et abattu un coup de pied marteau sur la nuque de Groki. Mort instantanée.</p>`
        },
        {
          id: "abzu",
          image: "img/Abzu.jpg",
          discovered: "Session 2",
          group: "combattu",
          title: "Abzu — Abomination de Magla",
          subtitle: "Créature de Magla — Époque révolue",
          tags: ["abomination", "Magla", "session 2", "non-contemporain", "tuée"],
          summary: "Créature entièrement constituée de Magla pur, appartenant à une époque antérieure. Stockait des cadavres à l'intérieur de son corps. Se régénérait en drainant la vitalité. Résistante aux armes ordinaires.",
          content: `<h3>Description</h3>
<p>Monstre massif et répugnant, dégageant une odeur de charogne. Sa peau pustuleuse résiste aux lames et aux sorts ordinaires. À sa mort, son corps a libéré des dizaines de cadavres en décomposition — de toutes les races — qu'il stockait à l'intérieur de lui-même.</p>
<h3>Capacités observées</h3>
<ul>
<li><strong>Résistance physique :</strong> lames et coups atteignent la surface mais ne pénètrent pas les organes sans une force exceptionnelle.</li>
<li><strong>Résistance aux sorts :</strong> Sacred Flame de Kael n'a pas pénétré la peau pustuleuse.</li>
<li><strong>Drain de vitalité :</strong> morsure qui régénère ses propres blessures en drainant la vitalité de la cible (testé sur Shakka).</li>
<li><strong>Saisie :</strong> capable de soulever un combattant d'une seule griffe et de le rapprocher de sa gueule.</li>
</ul>
<h3>Origine</h3>
<p>Identifiée par Onyxus comme "non contemporaine et hors des classifications connues". Appartient à une époque révolue — comment s'est-elle retrouvée dans un nid gobelin ordinaire ? Son lien avec Groki et la horde reste inexpliqué.</p>
<h3>Anomalie</h3>
<p>Une musique sans source identifiable résonnait pendant tout le combat, comme un écho venant de partout à la fois. Veritas pense que ce phénomène pourrait être lié à un être magique, sans pouvoir préciser.</p>
<h3>Kill</h3>
<p>Kill final d'Onyxus (carreau d'arbalète, 7 dégâts). Uma a été la principale contributrice aux dégâts, incluant un coup critique.</p>`
        },
        {
          id: "ogres-camp",
          image: "img/Ogres du camp.jpg",
          discovered: "Session 2",
          group: "observe",
          title: "Ogres du Camp",
          subtitle: "Géants — Camp gobelin à l'ouest de Malva",
          tags: ["géant", "camp gobelin", "session 2", "non combattu"],
          summary: "Deux ogres repérés dans le camp principal à l'ouest. Probablement roi et reine du camp. Dangerosité estimée très élevée. Pas encore affrontés.",
          content: `<h3>Observation</h3>
<p>Shakka et Onyxus ont observé le camp depuis une position en hauteur. Deux ogres visibles : l'un près du feu central, l'autre sortant de la grande tente. D'après le carnet d'Obsidio Kotabbos, la grande tente correspond à celle d'un chef de camp.</p>
<h3>Hypothèse</h3>
<p>Onyxus pense qu'il s'agit du roi et de la reine du camp. Leur présence dans un camp de 50 à 100 gobelins suggère une organisation militaire sérieuse, pas une simple horde désorganisée.</p>
<h3>Dangerosité estimée</h3>
<p>Inconnue mais très élevée. Les ogres sont des créatures de grande taille et de force brute. Le groupe devra impérativement se préparer avant toute confrontation avec le camp.</p>`
        },
        {
          id: "creature-ailee",
          image: "",
          discovered: "Session 2",
          group: "observe",
          title: "Berzim — La Fée",
          subtitle: "Fée — Compagnon de Kael",
          tags: ["fée", "mystère", "Kael", "alliée"],
          summary: "Fée minuscule dotée d'ailes, identifiée par Kael comme telle en session 3. Combat aux dagues. Liée à Kael. Peut chanter pour maintenir une stase magique. Invisible à la plupart.",
          content: `<h3>Description</h3>
<p>Observée par Veritas depuis les remparts du fort. Minuscule, dotée d'ailes. D'une race qu'il ne reconnaît pas — ce qui est notable pour un scribe de l'Ordre des Archivistes. Se bat avec deux dagues.</p>
<h3>Comportement observé</h3>
<ul>
<li>A tué le mage gobelin en lui retirant ses deux dagues du corps.</li>
<li>S'est ensuite retournée vers les autres gobelins.</li>
<li>Perchée sur l'épaule de Kael. Lui parle. Lui signale les présences magiques.</li>
<li>Invisible ou imperceptible pour la plupart des membres du groupe.</li>
</ul>
<h3>Ce qu'elle sait</h3>
<p>À Malva, elle a détecté quelque chose de magique "partout et diffus — trop faible pour localiser la source, mais vraiment partout". À la lanterne de Shakka, qui a détecté la même chose.</p>
<h3>Révélation (Session 3)</h3>
<p>Kael a présenté Berzim au groupe en session 3, confirmant qu'il s'agit d'une fée. Lysandra le connaissait déjà. Berzim a autorisé Kael à révéler sa présence, mais pas leurs objectifs communs. Onyxus lui a dit "Salut petit être" et a reçu un coup de pied invisible dans la joue.</p>
<h3>Capacité spéciale (Session 5)</h3>
<p>Sa magie primordiale, par le chant, peut maintenir un être maudit en stase et bloquer temporairement une malédiction. Utilisé sur Obsidio Kotabbos. Contrainte : Obsidio doit rester à proximité, ne peut pas être déplacé pendant le chant, et Berzim doit prendre des pauses.</p>`
        },
        {
          id: "zolom",
          image: "img/Zolom.jpg",
          discovered: "Session 3",
          group: "combattu",
          title: "Zolom — Serpent Géant",
          subtitle: "Bête colossale — Grotte côtière de Malva",
          tags: ["serpent", "boss", "session 3", "Magla"],
          summary: "Serpent colossal invoqué par Dren Solaria dans la grotte. Crachat acide, regard psychique, et capacité de se ressusciter en absorbant le Magla des créatures liées à lui. Tué deux fois.",
          content: `<h3>Description</h3>
<p>Serpent d'une taille démesurée, surgi du sol de la grotte lors de la confrontation avec Dren. Ses écailles résistent aux attaques ordinaires. À sa première mort apparente, il s'est ressuscité en absorbant le Magla d'un lézard muté tombé au même moment.</p>
<h3>Capacités observées</h3>
<ul>
<li><strong>Serpentine Gaze :</strong> attaque psychique ciblant un adversaire. Inflige des dégâts psychiques sur jet de sauvegarde raté.</li>
<li><strong>Crachat acide :</strong> ligne droite infligeant des dégâts perçants et nécrotiques. La chair commence à se putréfier là où il mord.</li>
<li><strong>Résurrection par absorption :</strong> à sa mort, absorbe le Magla d'une créature liée pour se relever et cicatriser complètement.</li>
<li><strong>Queue :</strong> peut coller sa queue contre plusieurs adversaires pour les immobiliser ou les projeter.</li>
</ul>
<h3>Kill</h3>
<p>Premier kill (temporaire) : Veritas avec un Chromatic Orb rebondissant (29 dégâts). Résurrection immédiate via absorption d'un lézard. Kill final : Shakka avec sa lance — la fumée de Zar (lanterne) a aspiré le serpent morceau par morceau. Il ne reste absolument rien du corps.</p>`
        },
        {
          id: "lezards-mutes",
          image: "img/Lézards Mutés.jpg",
          discovered: "Session 3",
          group: "combattu",
          title: "Lézards Mutés",
          subtitle: "Humanoïdes — Cadavres transformés par Dren Solaria",
          tags: ["lézard", "humanoïde", "session 3", "Magla", "invoqué"],
          summary: "Trois cadavres torturés dans la grotte qui ont muté en lézards humanoïdes à l'arrivée du groupe. Deux types : géomancien (manipulation de rochers) et chaman (sorts de séisme, téléportation). Le chaman a fui.",
          content: `<h3>Origine</h3>
<p>Trois cadavres trouvés dans la grotte de Malva, imprégnés de Magla pur non transformé selon le Detect Magic de Veritas. Au moment critique du combat, ils ont muté et se sont transformés en lézards humanoïdes — probablement préparés à l'avance par Dren Solaria.</p>
<h3>Types identifiés</h3>
<ul>
<li><strong>Géomancien-lézard :</strong> manipule la terre et projette des rochers depuis une position en hauteur. Mort : Uma lui a fissuré le crâne d'un coup de pied descendant sur la mâchoire. Yeux explosés sous l'impact.</li>
<li><strong>Chaman-lézard :</strong> plus magique, situé au fond de la cavité. Lance un sort de séisme (fait tomber et étourdit plusieurs combattants), sort Command (ordonne en langue ancienne), possède un igniter pour se téléporter. A fui avant d'être achevé malgré 9 dégâts de Magic Missiles de Veritas et 11 de True Strike d'Onyxus.</li>
<li><strong>Lézard au corps à corps :</strong> s'est approché pour attaquer, tué en fuite par Kael (Guiding Bolt, désintégré).</li>
</ul>
<h3>Lien avec les Humans</h3>
<p>Barion (Général de Grand Trad) a confirmé que ces lézards ressemblent physiologiquement aux Humans — des créatures dépourvues de Magla. Lysandra a suggéré que c'est peut-être pour cela que Dren avait besoin des tonneaux de Magla liquide.</p>`
        },
        {
          id: "golems-pierre",
          image: "img/Golems de pierre.jpg",
          discovered: "Session 4",
          group: "combattu",
          title: "Golems de Pierre",
          subtitle: "Construits — Invoqués par le chef mercenaire Rhoag",
          tags: ["golem", "session 4", "construit", "dépendant"],
          summary: "Deux golems de pierre et de terre surgis du sol, invoqués par le chef mercenaire Rhoag. Dépendaient de la conscience de leur créateur : neutralisés automatiquement à sa perte de connaissance.",
          content: `<h3>Description</h3>
<p>Deux masses de pierre et de terre surgirent du sol quand le chef Rhoag posa ses deux mains au sol. Imposants, résistants aux attaques ordinaires. Lysandra a réussi à briser un éclat de roche dans la jambe du premier sans en venir à bout seule.</p>
<h3>Capacités observées</h3>
<ul>
<li>Frappe au corps à corps puissante — ont touché Lysandra et Veritas.</li>
<li>Résistance physique notable.</li>
</ul>
<h3>Faiblesse critique</h3>
<p>Entièrement dépendants de la conscience de leur invocateur. Dès que Shakka a mis le chef Rhoag inconscient, les deux golems sont redevenus de simples tas de cailloux instantanément. Neutraliser le créateur en priorité.</p>`
        },
        {
          id: "kobold",
          image: "img/Kobold.jpg",
          discovered: "Session 5",
          group: "combattu",
          title: "Kobold",
          subtitle: "Humanoïde — Route vers Corel",
          tags: ["humanoïde", "session 5", "faible"],
          summary: "Petit humanoïde isolé repéré sur la route. 5 PV. Tué par Uma d'un seul coup avant qu'il ne puisse alerter des renforts.",
          content: `<h3>Description</h3>
<p>Petit humanoïde croisé seul entre des arbres sur la route vers Corel. N'avait pas repéré le groupe. Décision prise de l'éliminer discrètement pour éviter qu'il prévienne des renforts potentiels.</p>
<h3>Combat</h3>
<p>Shakka a tenté un Chill Touch mais a raté (jet de toucher : 9). Uma a couvert la distance en courant et lui a mis "une patate" : 5 dégâts. Le kobold avait exactement 5 PV. Mort sur le coup.</p>
<h3>Note</h3>
<p>Créature fragile en solo. Dangereux uniquement en groupe ou comme éclaireur d'une force plus grande. À neutraliser discrètement à vue.</p>`
        },
        {
          id: "araignees-loups",
          image: "img/Araignées-Loups Géantes.jpg",
          discovered: "Session 5",
          group: "combattu",
          title: "Araignées-Loups Géantes",
          subtitle: "Bêtes — Camp de nuit sur la route de Corel",
          tags: ["araignée", "bête", "session 5", "venin"],
          summary: "Six araignées-loups géantes ayant encerclé le camp à l'aube. Morsure venimeuse (dégâts de poison). Toutes tuées. Un aigle géant est venu dévorer les cadavres.",
          content: `<h3>Description</h3>
<p>Six araignées de grande taille qui ont encerclé silencieusement le camp pendant la nuit. Repérées à l'aube par Onyxus avant l'attaque. Capables de grimper sur les combattants (une a escaladé Lysandra, deux pattes sur ses épaules).</p>
<h3>Capacités observées</h3>
<ul>
<li><strong>Morsure venimeuse :</strong> inflige des dégâts perçants + dégâts de poison (5 + 4 à Onyxus et Kael).</li>
<li><strong>Escalade :</strong> peuvent monter sur les adversaires.</li>
<li><strong>Discrétion :</strong> encerclement du camp effectué sans se faire repérer pendant toute la nuit.</li>
</ul>
<h3>Combat</h3>
<p>Six araignées tuées : Uma (×2 dont un redirect de dégâts), Onyxus, Kael (Guiding Bolt CAC dans la gueule), Veritas (Ignis, brûlée), Shakka + Lysandra combinés sur la plus grosse.</p>
<h3>Note</h3>
<p>Un aigle géant est descendu dévorer les cadavres immédiatement après le combat. Les araignées valent 39 gold en ressources revendables (crochets, etc.).</p>`
        },
        {
          id: "sorcieres-vertes",
          image: "img/Sorcière verte.jpg",
          discovered: "Session 5",
          group: "observe",
          title: "Sorcières Vertes",
          subtitle: "Humanoïdes magiques — Marais sur la route de Corel",
          tags: ["sorcière", "magie", "session 5", "marais"],
          summary: "Trois sorcières vertes aperçues dans un marais. L'une a repéré le groupe et commencé à incanter. Évitées en cassant la ligne de vue.",
          content: `<h3>Observation</h3>
<p>Trois silhouettes vertes repérées à environ 75 mètres dans un marais sur la route de Corel. L'une d'elles a repéré le groupe malgré leurs tentatives de discrétion (Lysandra : 1 naturel, désastreuse) et a commencé à incanter dans leur direction.</p>
<h3>Contournement</h3>
<p>Le groupe a contourné par la gauche en cassant la ligne de vue. Lysandra tractait la charrette et a fait un échec critique sur la dextérité pour semer les sorcières — mais le MJ a tranché en leur faveur et aucun combat ne s'est déclenché.</p>
<h3>Capacités inconnues</h3>
<p>Nature des sorts : non observée. Dangerosité réelle : inconnue. À éviter jusqu'à avoir plus d'informations.</p>`
        },
        {
          id: "bugbear",
          image: "img/Bugbear.jpg",
          discovered: "Session 5",
          group: "observe",
          title: "Bugbear",
          subtitle: "Humanoïde — Route vers Corel",
          tags: ["humanoïde", "session 5"],
          summary: "Humanoïde de grande taille aperçu en plein affrontement avec des hobgoblins sur la route de Corel. Contourné discrètement. Dangerosité réelle inconnue.",
          content: `<h3>Observation</h3>
<p>Aperçu à l'heure du midi lors du voyage vers Corel, en plein affrontement avec deux hobgoblins. Onyxus a réussi un jet de discrétion et le groupe a contourné sans être repéré.</p>
<h3>Nature</h3>
<p>Humanoïde de grande taille, nettement plus imposant qu'un gobelin ordinaire. Morphologie robuste, axé force brute. Plus proche du gobelin que du hobgoblin dans sa nature — mais plus grand et plus sauvage que les deux.</p>
<h3>Note</h3>
<p>Il se battait contre des hobgoblins, pas avec eux. Relation avec la horde gobeline de Malva inconnue. Présence dans la région à surveiller.</p>`
        },
        {
          id: "hobgoblins",
          image: "img/Hobgoblin.jpg",
          discovered: "Session 5",
          group: "observe",
          title: "Hobgoblins",
          subtitle: "Humanoïdes militarisés — Route vers Corel",
          tags: ["humanoïde", "session 5"],
          summary: "Deux hobgoblins aperçus en train de se battre contre un bugbear sur la route de Corel. Plus disciplinés et mieux équipés que les gobelins ordinaires.",
          content: `<h3>Observation</h3>
<p>Deux hobgoblins aperçus en plein affrontement avec un bugbear lors du voyage vers Corel. Le groupe a contourné discrètement sans intervenir ni être repéré.</p>
<h3>Nature</h3>
<p>Humanoïdes militarisés, nettement plus disciplinés que les gobelins ordinaires. Équipement supérieur, formation en combat apparente. Ressemblent à des soldats plutôt qu'à des pillards.</p>
<h3>Note</h3>
<p>Ils se battaient contre un bugbear, pas avec lui — factions distinctes ou simple rivalité territoriale. Lien avec la horde gobeline de Malva non établi.</p>`
        },
        {
          id: "aigle-geant",
          image: "img/Aigle géant.jpg",
          discovered: "Session 5",
          group: "observe",
          title: "Aigle Géant",
          subtitle: "Bête — Camp de nuit sur la route de Corel",
          tags: ["bête", "session 5", "intelligent"],
          summary: "Aigle géant qui tournoyait au-dessus du camp pendant le combat contre les araignées, puis est descendu dévorer les cadavres. Plus intelligent que la moyenne — comprend le commun. A attaqué Onyxus.",
          content: `<h3>Description</h3>
<p>Grand rapace ayant observé le combat contre les araignées-loups depuis les airs sans intervenir. Descendu dévorer les cadavres une fois le combat terminé. Wingspan imposant.</p>
<h3>Capacités</h3>
<ul>
<li>Ergots puissants : 5 + 4 dégâts perçants sur Onyxus.</li>
<li>Intelligence supérieure à la normale : comprend le commun selon un jet de Nature d'Onyxus (13).</li>
</ul>
<h3>Incident</h3>
<p>Onyxus, persuadé d'un échec critique d'Insight (1 naturel) que l'aigle était son ami, lui a tendu la main. L'aigle a planté ses deux ergots dans son bras. Uma a arraché des plumes pour 10 dégâts. Kael a tenté de le caresser. Lysandra, à bout de patience, a attrapé ses ailes, le a secoué, lui a mis une tape sur le bec et l'a jeté en l'air en criant "dégage !". L'aigle est parti.</p>
<h3>Note du MJ</h3>
<p><em>"L'aigle en fait était Dren."</em> — à interpréter.</p>`
        },
        {
          id: "triceratops",
          image: "",
          discovered: "Session 6",
          group: "combattu",
          title: "Tricératops",
          subtitle: "Bête naturelle — Route de la mine de Corel",
          tags: ["bête", "session 6", "naturelle", "tuée"],
          summary: "Grosse bête cuirassée à quatre pattes et trois cornes, dépourvue de magla, croisée sur la route de la mine. Empale Shakka avant d'être achevée par tout le groupe.",
          content: `<h3>Description</h3>
<p>Une bête cuirassée massive, quatre pattes, deux cornes sur le front et une corne sur le nez. Charge en martelant le sol. Contrairement à la chimère qui ravage la mine, c'est une <strong>bête naturelle dépourvue de magla</strong>, croisée par hasard à mi-chemin (encore vingt miles de la mine).</p>
<h3>Combat</h3>
<p>Shakka plante sa lance sur sa trajectoire, Veritas l'agrandit (Enlarge) au moment de l'impact : la bête bascule et perd un tour à se relever. Onyxus l'illumine de Faerie Fire (avantage pour le groupe). Elle se relève en hurlant et empale Shakka d'un coup de corne, le mettant inconscient (28 dégâts) — Onyxus le ramène avec Healing Word.</p>
<h3>Kill</h3>
<p>Achevée en combiné : Uma lui brise la corne droite et lui crève l'œil (Flurry of Blows, ~34 dégâts cumulés), Lysandra plante son épée sous la mâchoire, Kael l'arrose d'un Guiding Bolt, et Shakka, glissant sous la bête, récupère sa lance tombée et l'empale pour le coup de grâce.</p>`
        },
        {
          id: "chimere-corel",
          image: "",
          discovered: "Session 6",
          group: "observe",
          title: "Chimère de la mine de Corel",
          subtitle: "Créature composite — Mine de Corel",
          tags: ["chimère", "session 6", "mine", "boss à venir"],
          summary: "Corps et tête de lion, queue de scorpion, ailes de chauve-souris : la créature qui a envahi la mine de Corel et bloqué toute la production. Décrite par les mineurs, pas encore affrontée.",
          content: `<h3>Description (par ouï-dire)</h3>
<p>D'après les ouvriers interrogés par Uma à la taverne de Corel : un corps et une tête de lion, une queue de scorpion, des ailes de chauve-souris. Kael l'identifie aussitôt comme une <strong>chimère</strong>.</p>
<h3>Dégâts constatés</h3>
<p>A fait son nid dans la mine, tuant ou blessant grièvement les mineurs qui s'y aventurent encore. Production entièrement arrêtée — donc plus de salaires, donc des familles affamées. Plusieurs petits groupes d'ouvriers ont tenté d'intervenir et sont revenus blessés mais vivants.</p>
<h3>Indices à l'entrée de la mine</h3>
<p>Porte défoncée de l'intérieur vers l'extérieur. Flaque violette corrosive (acide ou poison) près d'un tonneau de poudre vide — prélevée par Shakka. Traces au sol suggérant une bête aux membres avant plus puissants que les arrière. Au moment où le groupe entre dans le boyau, un rugissement résonne plus haut dans la montagne, suivi d'un gros boom à l'entrée derrière eux.</p>
<h3>Statut</h3>
<p>Pas encore affrontée — combat prévu à la prochaine séance.</p>`
        },
        {
          id: "humans",
          image: "",
          discovered: "Lore — Avant la campagne",
          group: "mythique",
          title: "Les Humans",
          subtitle: "Créatures de Magla — Zones sauvages",
          tags: ["Magla", "zones sauvages", "lore", "résistant"],
          summary: "Entités surgissant là où le Magla se concentre. Massacrent sans discrimination. Résistantes aux armes ordinaires. Représentent la frontière entre le monde civilisé et l'immensité hostile.",
          content: `<h3>Description</h3>
<p>Les Humans ne sont pas des humains. Ce sont des créatures surgissant là où le Magla se concentre dans les zones non civilisées. Leur nom vient d'une corruption linguistique ancienne, dont l'origine est débattue par les savants.</p>
<h3>Comportement</h3>
<p>Ils massacrent sans distinction — humanoïdes, bêtes, créatures. Aucune discrimination, aucune négociation possible. Leur apparition est imprévisible et liée aux flux de Magla dans une région.</p>
<h3>Résistance</h3>
<p>Les armes ordinaires ont peu d'effet sur eux. Les récits de voyageurs et les rapports militaires s'accordent : les Humans ne tombent pas sous des coups normaux. Ce qui les affecte reste largement documenté par l'Ordre des Archivistes — sans être diffusé au grand public.</p>
<h3>Rôle géopolitique</h3>
<p>Leur existence est la raison pour laquelle le royaume gouverne les cités et les plaines cultivées — mais ni les marges, ni la mer, ni ce qui attend plus loin. Ce qu'il y a au-dehors n'est pas un espace à conquérir : c'est une immensité hostile.</p>`
        }
      ]
    },

    factions: {
      label: "Factions",
      icon: "⚜️",
      description: "Organisations, institutions et groupes qui façonnent le pouvoir et les événements d'Euchronia.",
      entries: [
        {
          id: "royaume-euchronia",
          title: "Le Royaume d'Euchronia",
          subtitle: "La monarchie centrale",
          tags: ["politique", "gouvernement"],
          summary: "En surface, un État puissant et cohérent. En pratique, une construction tenue par la centralisation, la religion et la contrainte — traversée de tensions profondes.",
          content: `<h3>Structure</h3>
<p>Le pouvoir est concentré à Grand Trad. L'autorité royale s'étend sur trois ensembles : le royaume central, la Principauté d'Oceana (ouest) et la Principauté de Montario (est). En théorie, une seule couronne. En pratique, un équilibre fragile entre monarchie, Église, élites provinciales et tensions raciales.</p>
<h3>Tensions internes</h3>
<p>Les provinces obéissent sans jamais être totalement loyales. L'ordre public cache mal une inquiétude plus profonde : celle d'un monde qui ne tient plus que parce que chacun redoute ce qui arriverait si cet ordre venait à céder.</p>
<h3>Rapport à la foi</h3>
<p>Le trône demeure le symbole de l'unité, mais c'est la foi, la peur et l'habitude qui maintiennent réellement le royaume debout. Le roi maintient l'ordre visible ; le haut clergé justifie l'ordre invisible. Cette alliance est fondamentale — et mutuellement dépendante.</p>`
        },
        {
          id: "eglise-sanctiste",
          title: "L'Église Sanctiste",
          subtitle: "La grande colonne d'Euchronia",
          tags: ["religion", "pouvoir", "Altabury"],
          summary: "Plus qu'une religion : un système de légitimation du pouvoir, un outil de contrôle social — capable d'étouffer des enquêtes dans un village de pêcheurs depuis Grand Trad.",
          content: `<h3>Hiérarchie</h3>
<ul>
<li><strong>Sanctifex</strong> — siège à Altabury, autorité suprême de la foi</li>
<li><strong>Docteurs et Prêtres</strong> — interprètent et transmettent la doctrine</li>
<li><strong>Sanctors</strong> — représentants provinciaux (ex : Belric Thane à Malva)</li>
<li><strong>Sœurs et Frères</strong> — clergé local (ex : Sœur Elwenne à Malva)</li>
<li><strong>Chevaliers-Moines</strong> — bras armé</li>
</ul>
<h3>Pouvoir effectif</h3>
<p>L'Église est présente dans les temples comme dans les tribunaux, dans les palais comme sur les champs de bataille. Elle peut étouffer des enquêtes, légitimer des inégalités, et justifier des persécutions — non pas comme une violence, mais comme un devoir sacré.</p>
<h3>Position sur la magie</h3>
<p>L'Église contrôle la légitimité de l'usage magique via les igniters. Toute magie hors de ce cadre est une transgression. Ce pouvoir lui permet de surveiller — et de marginaliser — quiconque possède des capacités magiques "anormales".</p>`
        },
        {
          id: "chevaliers-moines",
          title: "Les Chevaliers-Moines",
          subtitle: "Bras armé de l'Église Sanctiste",
          tags: ["religion", "militaire", "ordre"],
          summary: "Ils gardent les sanctuaires, escortent les reliques, maintiennent l'ordre. Pas seulement les lames de l'Église — sa fermeté incarnée.",
          content: `<h3>Rôle</h3>
<p>Les Chevaliers-Moines (Monk Knights) sont l'ordre militaire de l'Église Sanctiste. Ils gardent les sanctuaires, escortent les reliques et les hautes figures religieuses, maintiennent l'ordre lors des grands rassemblements. Leur simple présence rappelle qu'aucune vérité durable ne survit longtemps sans être défendue.</p>
<h3>Philosophie</h3>
<p>Ils ne sont pas seulement les lames de l'Église : ils en sont la fermeté incarnée. Là où la liturgie redresse les âmes, eux redressent les foules, les routes, et parfois les royaumes eux-mêmes. Ils se perçoivent comme une nécessité morale — ce qui les rend d'autant plus efficaces pour ceux qui les dirigent.</p>`
        },
        {
          id: "ordre-archivistes",
          title: "L'Ordre des Archivistes",
          subtitle: "Ordre savant, gardiens du savoir",
          tags: ["savoir", "neutre", "Veritas"],
          summary: "L'Ordre auquel appartient Veritas Varn. Scribes et chercheurs itinérants. Leur tenue est reconnaissable. Leur mission : documenter, préserver, comprendre.",
          content: `<h3>Présentation</h3>
<p>L'Ordre des Archivistes est un ordre savant dont les membres portent une tenue reconnaissable. Ils voyagent pour documenter les événements, les savoirs et les histoires de peuples que la mémoire collective tendrait à effacer.</p>
<h3>Position dans Euchronia</h3>
<p>Suffisamment respecté pour que le bailli de Malva s'incline en voyant la tenue de Veritas — mais fondamentalement indépendant des structures du pouvoir royal et religieux. Ce qui en fait un acteur neutre potentiel, ou une cible, selon les circonstances.</p>
<h3>Membre connu</h3>
<p><strong>Veritas Varn</strong> — scribe en mission, porteur d'un grimoire qui prend conscience.</p>`
        },
        {
          id: "horde-gobeline",
          image: "img/La horde gobeline.jpg",
          discovered: "Session 2",
          title: "La Horde Gobeline",
          subtitle: "Faction antagoniste — région de Malva",
          tags: ["antagoniste", "Malva", "menace active"],
          summary: "Ce que le groupe a nettoyé au Fort de Corne Creuse n'était qu'un nid satellite. La vraie horde est un camp à l'ouest — l'équivalent d'un village entier, avec deux ogres.",
          content: `<h3>Structure</h3>
<p>Le camp découvert par Shakka et Onyxus à l'ouest du Fort de Corne Creuse est une installation permanente, construite par les gobelins eux-mêmes (pas récupérée sur des ruines). Comparable en population au village de Malva. Grande tente centrale, feux actifs.</p>
<h3>Forces estimées</h3>
<ul>
<li>Entre 50 et 100 gobelins actifs</li>
<li>Deux ogres — probablement le roi et la reine du camp</li>
<li>Organisation structurée, établie depuis longtemps</li>
</ul>
<h3>Ce qu'on sait</h3>
<p><strong>Groki</strong>, la reine tuée au fort, n'était qu'une jeune reine en train de développer un <em>nid satellite</em>. Ce camp est la véritable source.</p>
<p><strong>Abzu</strong>, l'abomination tuée au fort, appartient à une époque révolue. Son lien avec la horde reste à comprendre : une créature de Magla pur, non contemporaine, installée dans un nid gobelin ordinaire — ce n'est pas anodin.</p>
<h3>Menace</h3>
<p>Le groupe a éliminé la menace immédiate mais pas sa source. Le camp reste intact.</p>`
        },
        {
          id: "tantalus",
          image: "",
          discovered: "Session 4",
          title: "Les Tantalus",
          subtitle: "Organisation secrète — Membres connus : Obsidio, Célion",
          tags: ["secret", "mystère", "lore"],
          summary: "Organisation secrète identifiée par leur bague : trois vagues superposées traversées d'une barre. Obsidio Kotabbos et Maître Célion en faisaient partie. Objectifs inconnus.",
          content: `<h3>Le Symbole</h3>
<p>La bague des Tantalus représente <strong>trois vagues superposées traversées d'une barre</strong>. Premier signalement : Shakka portait une lettre au sceau des trois triangles superposés décalés — le lien avec les Tantalus reste à établir.</p>
<h3>Membres connus</h3>
<ul>
<li><strong>Obsidio Kotabbos</strong> — père d'Onyxus, chercheur sur l'architecture gobeline.</li>
<li><strong>Maître Célion</strong> — mentor d'Uma, assassiné dans l'incendie du monastère.</li>
</ul>
<h3>Ce qu'on ignore</h3>
<p>La présence de Célion — sage Ishkia, fondateur d'un monastère — et d'Obsidio — chercheur — dans la même organisation secrète suggère des intérêts liés au savoir ou à des enjeux qui dépassent la politique ordinaire d'Euchronia.</p>
<h3>Questions ouvertes</h3>
<ul>
<li>Quel est le véritable but des Tantalus ?</li>
<li>Y a-t-il un lien entre les Tantalus et Dren Solaria ?</li>
<li>La lettre portée par Shakka est-elle liée aux Tantalus ?</li>
<li>L'incendie du monastère visait-il à éliminer Célion en tant que membre ?</li>
</ul>`
        }
      ]
    },

    sessions: {
      label: "Sessions",
      icon: "📖",
      description: "Retranscriptions complètes des sessions de campagne.",
      entries: [
        {
          id: "session-1",
          day: "6",
          month: "Avr.",
          discovered: "06 Avril",
          title: "Session 1",
          subtitle: "Arrivée à Malva — Fort de Corne Creuse",
          tags: ["session 1", "Malva", "Fort de Corne Creuse"],
          summary: "Le groupe se retrouve à Malva pour enquêter sur des disparitions. Un bailli corrompu, un fort gobelin et une nuit de révélations — dont la mort de Célion, mentor d'Uma.",
          content: `<h3>Arrivée à Malva</h3>
<p>Veritas Varn et Onyxus Kotabbos arrivent ensemble au village côtier. Un garde note leurs noms et les redirige vers la taverne où l'on entend une femme en pleurs : <em>"Qu'est-ce qu'ils ont fait à ma sœur ?"</em></p>
<h3>La taverne — Retrouvailles</h3>
<p>Quatre voyageurs les y attendent : <strong>Lysandra</strong> (roussainte, épée et bouclier, capuche baissée pour cacher ses oreilles) avec <strong>Kael</strong> (prêtre rhoag au visage tatoué) ; et <strong>Uma</strong> (rhoag en tenue moniale) avec <strong>Shakka</strong> (rhoag à la lance dorée et à la lanterne mystérieuse). Onyxus reconnaît Uma et se précipite — retrouvailles tendues, elle lui coupe la parole quand il mentionne une lettre. Veritas reconnaît Lysandra ; elle lui saute dans les bras, il ne lui rend pas vraiment l'étreinte.</p>
<h3>Le bailli Oren Vale</h3>
<p>Ishkia corpulent, couvert de bagues, son opulence détonne. Il présente le corps d'une jeune femme comme une affaire de gobelins. Kael découvre à l'examen qu'elle a subi un accouchement forcé — fait soigneusement tu par le bailli.</p>
<h3>Le capitaine Joren Sile</h3>
<p>Roussainte épuisé, cape verte déchirée. Une vingtaine de disparitions. Les gobelins occupent le Fort de Corne Creuse au nord. Le bailli interdit d'attaquer. Ses gardes sont des paysans — l'un se coupe le doigt en tenant sa propre arme. Lysandra passe l'après-midi à les former.</p>
<h3>Scènes parallèles</h3>
<p><strong>Kael à l'église :</strong> Berzim (invisible) lui chuchote que le village <em>"pue le magla, partout et diffus"</em>. Il rencontre <strong>Belric Thane</strong>, sanctor clemar de Grand Trad, trop bien habillé pour un village de pêcheurs, qui affirme avec certitude que les gobelins sont responsables de tout. En partant : <em>"L'émotion n'a jamais sauvé un village."</em></p>
<p><strong>Uma et Onyxus en forêt :</strong> Uma révèle la mort de Célion et l'incendie criminel du monastère, un an plus tôt. Les corps portaient des marques d'armes. Elle compare les écritures de la lettre reçue par Obsidio et du carnet de Célion : elles correspondent. Les deux documents convergent vers Malva.</p>
<p><strong>Shakka :</strong> Zar (entité de la lanterne) confirme quelque chose de menaçant dans le village : <em>"Méfie-toi. C'est vraiment partout."</em></p>
<h3>La nuit — Uma chez le bailli</h3>
<p>Uma s'introduit seule dans la maison du bailli. Il n'y est pas. Trois coffres à cadenas, nourriture en abondance, une pièce inutilisée depuis longtemps. Des voix dans une pièce adjacente. Une charrette part vers l'est dans la nuit. Kael, qui l'avait suivie discrètement, se montre. Même conclusion : le bailli cache quelque chose.</p>
<h3>Le Fort de Corne Creuse — Premier combat</h3>
<p>Douves profondes, fond invisible. Onyxus tente de s'infiltrer mais le warg le repère et hurle l'alerte. Veritas met le warg en fuite (Firebolt). Lysandra décapite deux gobelins dont un avec Divine Smite (lumière sortant des yeux, traversant l'épée — le gobelin explose). Onyxus empale le mage gobelin depuis les remparts. Veritas brûle un chariot et pulvérise un gobelin à l'Orbe Chromatique. Les gobelins de la cour tombent. Des cris montent de l'intérieur.</p>
<h3>Statistiques</h3>
<ul>
<li><strong>Kills :</strong> Lysandra ×2 gobelins, Onyxus ×2 gobelins, Veritas ×1 gobelin, Shakka ×1 warg</li>
<li><strong>Soins :</strong> Kael — Cure Wounds 8 HP sur Uma</li>
<li><strong>Échec critique :</strong> Uma — investigation chez le bailli (1 naturel)</li>
</ul>`
        },
        {
          id: "session-2",
          day: "12",
          month: "Avr.",
          discovered: "12 Avril",
          title: "Session 2",
          subtitle: "Abzu, Groki, et le camp principal",
          tags: ["session 2", "Fort de Corne Creuse", "Abzu", "Groki"],
          summary: "Le groupe affronte Abzu (une abomination d'une époque révolue) et Groki (la reine gobeline). Puis Shakka et Onyxus découvrent l'énorme camp principal à l'ouest — avec deux ogres.",
          content: `<h3>Reprise au Fort — Abzu</h3>
<p>Butin de la cour récupéré : 500 po et un bâton-racine magique (<strong>Staff of Healing</strong>, identifié par Identify de Veritas). Une énorme créature surgit des remparts : <strong>Abzu</strong>, monstre massif à la peau pustuleuse dégageant une odeur de charogne. La grosse gobeline de l'intérieur hurle son nom en boucle.</p>
<h3>Combat contre Abzu</h3>
<p>Veritas agrandit Uma à 3 mètres. Onyxus place un Faerie Fire sur Abzu (avantage pour tout le monde). Uma frappe en premier — ses poings pénètrent la surface mais s'arrêtent net, le corps est trop résistant. Lysandra prend son épée à deux mains, même constat. Kael tente Sacred Flame : n'arrive pas à percer les pustules. Abzu draine la vitalité de Shakka en le mordant et se régénère. Shakka active Armor of Agathys et deux gobelins meurent en l'attaquant.</p>
<h3>Les gobelins — La créature ailée</h3>
<p>La grande porte s'ouvre : masse de gobelins dont <strong>Groki</strong>. Le mage gobelin lance deux attaques psychiques sur Veritas (critique sur la première : 13 dégâts psychiques) — Uma rétrécit instantanément. Veritas observe depuis le mur une petite créature ailée retirer ses dagues du corps du mage et se retourner vers les autres gobelins.</p>
<h3>Kill d'Abzu — Onyxus</h3>
<p>Onyxus tire un carreau final (7 dégâts). Abzu s'effondre et libère en tombant des dizaines de cadavres en décomposition — toutes races confondues — qu'il stockait à l'intérieur de lui-même. <em>Kill final : Onyxus.</em></p>
<h3>Kill de Groki — Uma</h3>
<p>Uma retrouve la vue (elle avait été aveuglée par Blindness), saute des remparts en Feather Fall, et en descente lente abat un coup de pied marteau sur la nuque de Groki. Mort instantanée. <em>Kill : Uma.</em> Groki n'était qu'une jeune reine satellite — le vrai problème est ailleurs.</p>
<h3>Après le combat</h3>
<p>L'intérieur contient uniquement du matériel gobelin en décomposition. Sous-sol : ancienne prison vide à cages fermées. Dépendance nord-ouest : jeune Roussainte gorge tranchée, grange aménagée en prison de fortune avec menottes et sang séché. Shakka recouvre le corps et le transporte jusqu'à la charrette.</p>
<p>Onyxus identifie Abzu comme une <em>"abomination non contemporaine"</em> — une créature d'une époque révolue. Une musique sans source résonnait pendant tout le combat.</p>
<p>Veritas interroge le groupe sur la créature ailée. Kael : <em>"Appelons ça une illusion."</em> Lysandra confirme. La plume enchantée de Veritas écrit d'elle-même dans le grimoire : <em>"Je ne vois pas ce que vous voulez dire."</em></p>
<h3>Pistage — Shakka et Onyxus</h3>
<p>Le groupe se sépare. Shakka et Onyxus suivent les traces de fuite vers l'ouest. Ils contournent des créatures à huit pattes dans des ruines anciennes via une diversion sonore. Puis ils trouvent le <strong>camp principal gobelin</strong> — comparable au village de Malva en taille. Entre 50 et 100 gobelins actifs. <strong>Deux ogres</strong> visibles : l'un près du feu, l'autre sortant de la grande tente. Probablement roi et reine du camp. Groki n'était qu'un nid satellite.</p>
<h3>Retour à Malva</h3>
<p>Joren révèle que <strong>Sœur Elwenne</strong> avait pointé lors d'un conseil que certaines disparitions venaient de l'<em>intérieur</em> du village — le bailli l'avait fait taire avec l'appui de Belric. Aucune enquête n'a suivi. Dans sa chambre, Veritas transfère son igniter de son bâton vers son grimoire : le livre commence à prendre conscience.</p>
<h3>Statistiques</h3>
<ul>
<li><strong>Kills :</strong> Onyxus ×1 (Abzu), Uma ×1 (Groki), Kael ×1 (gobelin, Guiding Bolt), Veritas ×1 (gobelin, éclair), Shakka ×2 (gobelins par Armor of Agathys), Créature ailée ×1 (mage gobelin)</li>
<li><strong>Critique :</strong> Uma — coup critique sur Abzu | <strong>Échec :</strong> Onyxus — tir raté (1 naturel)</li>
</ul>`
        },
        {
          id: "session-3",
          day: "20",
          month: "Avr.",
          discovered: "20 Avril",
          title: "Session 3",
          subtitle: "Les Cartes de Nyx, la grotte côtière et Dren Solaria",
          tags: ["session 3", "Malva", "grotte", "Dren", "Zolom", "niveau 4"],
          summary: "Berzim présenté au groupe, les Cartes de Nyx créées par Onyxus, découverte de la grotte côtière et confrontation avec Dren Solaria. Le groupe passe niveau 4.",
          content: `<h3>Matin — Kael et Uma</h3>
<p>Kael s'excuse auprès d'Uma pour son emportement de la veille. Uma ne se laisse pas amadouer : <em>"Tu ne m'as pas rendu la pareille."</em> Elle perçoit (jet 21) quelque chose d'invisible sur l'épaule droite de Kael — elle note sans rien dire. Peu après, Berzim autorise Kael à révéler sa présence au groupe, mais pas leurs objectifs communs.</p>
<h3>Les Cartes de Nyx</h3>
<p>Onyxus a travaillé toute la nuit. Il distribue à chaque membre une carte magique personnalisée. Chaque carte, liée à son porteur, confère : <strong>+d4 à l'initiative</strong>, vision partagée type Carte du Maraudeur, et possibilité de <strong>lancer des sorts sans ligne de vue directe</strong> (à portée du sort). Uma reçoit une carte à motif monastique — elle devient brièvement triste en reconnaissant les ornements.</p>
<h3>Révélation : l'origine des ogres</h3>
<p>Veritas et Lysandra examinent les cadavres de gobelins. Le grimoire Buki révèle : les gobelins kidnappent des femmes pour les engrosser. La gestation dure une semaine et <strong>déchire la mère</strong>. Les <strong>ogres sont des gobelins nés de mères d'autres races</strong> — plus grands, plus costauds. Le groupe en voit la preuve directement sur les cadavres du fort.</p>
<h3>Berzim présenté au groupe</h3>
<p>Kael présente officiellement Berzim : une <strong>fée</strong>, alliée. Onyxus lui dit "Salut petit être" dans le vide et reçoit un coup de pied invisible dans la joue.</p>
<h3>Retour à Malva — Hob / Telmona</h3>
<p>Lysandra croise sur le parvis de l'église un Paripus imposant qui se présente comme <strong>Hob</strong>. Plus tard, Joren et Sœur Elwenne révèlent qu'il surveille le maître de quai et se rend à l'église pour des rendez-vous avec Belric. Lysandra se souvient alors : Hob s'appelle <strong>Telmona</strong>, tueur à gages de Grand Trad, jamais raté une cible.</p>
<h3>Filature et interception de Hob</h3>
<p>Le groupe intercepte Hob transportant des tonneaux depuis la plage. Il enlève sa capuche — Lysandra l'appelle par son vrai nom, il la reconnaît. Il a été payé pour livrer la cargaison. Ils le laissent passer. Il décharge tout dans une cabane à trois mètres de là et repart calmement. Dans la nuit, une vingtaine de cavaliers en armure d'Altabury récupèrent les tonneaux — direction Altabury via la côte.</p>
<h3>La grotte côtière</h3>
<p>Le groupe escalade 30 mètres de falaise. L'entrée s'ouvre <em>"comme une blessure dans la roche"</em>. Des cristaux de magla gigantesques émettent une lueur vert et bleu pâle. Picotements dans les doigts, odeur de sel et d'algues, humidité écrasante. Résolution d'une énigme de porte (réponse : un igniter) et entrée dans la cavité principale.</p>
<h3>Confrontation avec Dren Solaria</h3>
<p>Devant un chaudron : un <strong>clemar aux cheveux blancs en tenue ecclésiastique dorée</strong>. Il se retourne, voit Uma : <em>"Tu es encore vivant, toi ? Tu aurais dû cramer avec tous les autres."</em> Uma reconnaît le chaudron — il vient de son monastère. Elle fonce. Dren dresse une barrière de magla dense. Il traite Uma de <em>"chienne"</em>, appelle Lysandra <em>"la traître à son sang"</em>, révèle à Veritas qu'il était censé être tué par l'Ordre des Archivistes.</p>
<h3>Combat — Zolom, Lézards, Dren</h3>
<p>Le sol tremble. Le <strong>Zolom</strong>, serpent colossal, jaillit du sous-sol. Les trois cadavres se muent en lézards humanoïdes (géomancien, chaman, corps à corps). Initiative. Lysandra ouvre avec un critique + Divine Smite (~26 dégâts sur Zolom). Veritas tue le Zolom avec un Chromatic Orb rebondissant (29 dégâts) — mais le Zolom absorbe le magla d'un lézard tombé et ressuscite complètement.</p>
<p>Le chaman invoque un séisme : Shakka et Lysandra tombent inconscients. Le Zolom crache un jet acide (chair putréfiante). Lysandra s'effondre une deuxième fois. Kael plante son Ling Staff au sol : <strong>Mass Cure Wounds (198 HP, puis 216 HP)</strong>. Total soigné par Kael : ~414 HP.</p>
<p>Uma tue le géomancien d'un coup de pied descendant sur la mâchoire (yeux explosés sous l'impact). Le chaman fuit par téléportation. Kael désintègre un lézard en fuite (Guiding Bolt, désintégration identique à la session 1). Shakka achève le Zolom — la fumée de la lanterne l'aspire morceau par morceau. Il ne reste rien du serpent.</p>
<p>Dren fuit pendant le chaos. Le groupe trouve le <strong>Chaudron de Hyr</strong> (absorbe le magla en liquide ultra-concentré, extrêmement instable) et un <strong>Sac Sans Fond</strong>. Shakka absorbe le chaudron dans sa lanterne.</p>
<h3>Alerte — Niveau 4</h3>
<p>De retour à Malva à 8h du matin, Joren court vers eux : <em>"Restez pas là, ils ont envoyé du monde, ils sont en train de vous chercher."</em> Le groupe passe <strong>niveau 4</strong>.</p>
<h3>Statistiques</h3>
<ul>
<li><strong>Kills :</strong> Veritas ×1 (Zolom, Chromatic Orb rebond), Shakka ×1 (Zolom final via lanterne), Uma ×1 (géomancien, coup de pied mâchoire), Kael ×1 (lézard en fuite, Guiding Bolt)</li>
<li><strong>Soins Kael :</strong> ~414 HP totaux (deux Mass Cure Wounds au Ling Staff)</li>
<li><strong>Critiques :</strong> Lysandra (ouverture sur Zolom), Veritas (Chromatic Orb), Onyxus (perception, point faible barrière)</li>
<li><strong>Échecs :</strong> Dren (dague sur Shakka), Lysandra (stealth en armure lourde)</li>
</ul>`
        },
        {
          id: "session-4",
          day: "2",
          month: "Mai",
          discovered: "02 Mai",
          title: "Session 4",
          subtitle: "Arrestation, Barion et les mercenaires",
          tags: ["session 4", "Altabury", "Barion", "Obsidio", "Tantalus"],
          summary: "Le groupe est arrêté par les soldats d'Altabury sur des charges fabriquées par Dren. Le Général Barion les fait passer pour morts. Plus tard, ils trouvent Obsidio Kotabbos prisonnier de mercenaires.",
          content: `<h3>Encerclement à Malva</h3>
<p>À peine sortis de la grotte, une vingtaine de soldats en armure d'Altabury et cinq cavaliers encerclent le groupe. Joren tente de plaider avant de recevoir un coup. Le groupe, épuisé et couvert de sang, met genou à terre. Leurs affaires sont entièrement saisies.</p>
<h3>La cellule — Histoires personnelles</h3>
<p>Cellule en pierre humide, sans fenêtre. Lysandra s'excuse. Veritas, sec : <em>"Tout ne tourne pas autour de toi."</em> Kael raconte son passé : prêtre d'une petite église qui a refusé d'accueillir un Paripus et une Eugief malades, il a quitté sa communauté en cachette pour les aider, rencontré Berzim, puis Lysandra alors qu'elle combattait des loups près de Laëk. Un Rhoag de haute stature les observe entre les barreaux.</p>
<h3>Barion — Général de l'Armée Royale</h3>
<p>Le Rhoag aux <strong>longs cheveux blancs tressés en quatre dreads</strong> s'avère être <strong>Barion</strong>, Général de l'Armée Royale de Grand Trad, héros populaire de la capitale. Les charges sont d'une gravité telle qu'elles ont nécessité son déplacement personnel. Accusations du <strong>prélat Dren Solaria</strong> de Brilehaven : kidnapping et torture d'habitants dans les grottes, tentative d'assassinat sur sa personne. Appuyées par Oren Vale et Belric Thane.</p>
<p>Le groupe donne sa version. Barion révèle que les lézards mutés ressemblent physiologiquement aux <strong>Humans</strong> — tous deux dépourvus de magla. Lysandra : peut-être pour ça que Dren avait besoin des tonneaux. Uma, face au mur tout du long, se retourne : <em>"La seule chose que vous devez savoir, c'est que quand je sortirai d'ici, je tuerai votre prélat."</em></p>
<h3>Le pacte</h3>
<p>Barion baisse sa garde : <em>"Quelque chose se passe. Des personnes haut placées veulent profiter de la faiblesse de notre roi. Dren n'est qu'un maillon."</em> Plan : les faire passer pour morts cette nuit. Faux enterrement le lendemain. Recommandation : Brilehaven pour traquer Dren. Barion a une dette envers <strong>Valendris</strong>, frère aîné de Lysandra — c'est aussi pour lui qu'il intervient.</p>
<p>Lysandra lui glisse entre les barreaux : <em>"Dites à Valendris que tout ira bien et que mentir à la famille n'est pas si grave."</em></p>
<h3>Confession d'Uma</h3>
<p>Uma révèle au groupe : Onyxus est un cousin adoptif, et c'est <strong>Célion</strong>, son oncle à lui, qui l'a élevée au monastère. Elle s'agenouille le front contre le sol et demande leur aide pour traquer et tuer le prélat. Lysandra la relève d'un avant-bras tendu. Une larme roule sur la joue d'Uma. Tout le monde accepte.</p>
<h3>Évasion et pseudonymes</h3>
<p>Un soldat de confiance guide le groupe par un tunnel souterrain de 30 minutes jusqu'en pleine nature. Leurs affaires les attendaient. Pseudonymes pour la route : Kael → <strong>Alek</strong>, Veritas → <strong>Astren</strong>, Lysandra → <strong>Meredith</strong> (en hommage à sa nourrice), Onyxus → <strong>Xyno</strong>, Uma → <strong>Aang</strong>. Shakka conserve son nom.</p>
<h3>Le campement de mercenaires</h3>
<p>Au deuxième jour de route, un campement : grande cage tirée par deux chevaux, un Ishkia encagoulé à l'intérieur, sept personnes armées. Chef : grand Rhoag aux longs cheveux blancs tressés (Raho). Il transporte un <em>"terroriste des <strong>Tantalus</strong>"</em> jusqu'à Grand Trad, mais un human bloque la route. Il propose un échange — escorte contre cheval. Le groupe refuse.</p>
<p>Onyxus reconnaît immédiatement la pochette que Raho tient : cuir brodé d'une spirale, identique à celle de son père. Raho finit par cracher : <em>"Cette pochette, c'était la sienne. Donc son père, c'est un terroriste."</em> Onyxus court vers la cage en appelant son père. Veritas lance Reduce sur une roue de charrette — la cage bascule, les chevaux paniquent.</p>
<h3>Combat des golems</h3>
<p>Raho pose les deux mains au sol : deux golems de pierre surgissent. Kael lance Silence sur lui. Lysandra attaque les golems. Onyxus s'effondre inconscient sous les coups de mercenaires (~25 dégâts). Il réussit son save contre la mort au <strong>20 naturel</strong> et se relève immédiatement. Veritas lance Chromatic Orb (Onyxus lui offre une relance critique en criant <em>"ils ont pris mon père !"</em>) : 15 acide sur Raho + rebond 14 sur le golem. Shakka assomme Raho. Les golems → tas de cailloux. Kael : Mass Cure Wounds (38 HP).</p>
<p>Raho ligoté, tête plongée dans l'eau pour le réveiller. Shakka : <em>"Qui était ton prisonnier ?"</em></p>
<h3>Statistiques</h3>
<ul>
<li><strong>Kills :</strong> Aucun PNJ tué (mercenaires en fuite, Raho inconscient pour interrogatoire)</li>
<li><strong>Critique :</strong> Onyxus — save contre la mort (20 naturel, relevé à 1 HP)</li>
<li><strong>Échecs :</strong> Shakka ×2 (attaques), mercenaire ennemi ×1</li>
</ul>`
        },
        {
          id: "session-5",
          day: "10",
          month: "Mai",
          discovered: "10 Mai",
          title: "Session 5",
          subtitle: "Les Tantalus, la malédiction d'Obsidio et la route vers Corel",
          tags: ["session 5", "Obsidio", "Tantalus", "Corel", "araignées"],
          summary: "Raho révèle Astori Hojo. Obsidio est récupéré — maudit. Berzim maintient la stase. Le groupe prend la route vers Corel, traversant sorcières, kobold et araignées-loups géantes.",
          content: `<h3>Interrogatoire de Raho</h3>
<p>Raho révèle : le prisonnier s'appelle <strong>Obsidio</strong>, destiné à Grand Trad. Commanditaire : <strong>Astori Hojo</strong>, mage Nidia influente au service de l'armée à Altabury, spécialiste des malédictions. Prix : 1500 po. Pour négocier la libération, il faut parler à <strong>Lucie</strong> (alias Lucifer), prêtresse Roussainte blonde cheffe du groupe.</p>
<h3>Négociation avec Lucie</h3>
<p>Uma part en éclaireur dans des ruines et confirme que le groupe est gérable. Lysandra négocie : 300 po + libération de Raho contre Obsidio. Lucie accepte sous condition d'une bonne couverture pour sa réputation. Lysandra improvise : un human les a attaqués sur la route, ils ont tout perdu dans la lutte. Jet de persuasion réussi. L'échange se conclut.</p>
<h3>Obsidio — Les Tantalus</h3>
<p>Obsidio est dans un état critique : liquide noir suintant sous ses bandages aux yeux, peau marquée, marchant à peine. Veritas lance Detect Magic : flux de magla extrêmement perturbé. Shakka reconnaît le type de malédiction fortement modifiée : pour la défaire, il faut soit que le lanceur l'annule, soit qu'il meure. Ce n'est pas mortel — c'est de la torture pure.</p>
<p>Kael lance Resistance sur Obsidio. Le liquide reflue brièvement. Obsidio reprend conscience, attrape Onyxus par les cheveux et raconte :</p>
<ul>
<li>Il est parti vers Malva pour retrouver son fils</li>
<li>À son arrivée, il a vu le groupe emmené en charrette</li>
<li>Une Nidia aux <strong>cheveux arc-en-ciel violets</strong> (Astori Hojo) l'a maudit en reconnaissant sa bague</li>
<li>Elle a déclaré qu'il faisait partie des <strong>Tantalus</strong></li>
</ul>
<p>Le mot prononcé, ses yeux explosent à nouveau de liquide noir. Dans son sac : une bague portant un sceau identique à celui des lettres de Célion — <strong>trois vagues superposées traversées d'une barre</strong>. Le nom "Tantalus" ne dit rien à personne.</p>
<h3>Berzim intervient — Route vers Corel</h3>
<p>Berzim propose : sa magie primordiale, par le chant, peut maintenir Obsidio en stase. Contrainte : Obsidio doit rester à proximité, ne pas être déplacé pendant le chant, et Berzim doit prendre des pauses. Kael propose un détour vers <strong>Corel</strong> (~36h de marche) pour trouver un prêtre supérieur ami de Kael qui partage ses idéaux. Le groupe valide. Veritas et Onyxus reconstituent la charrette mercenaire en brancard à roues avec Mending.</p>
<h3>Voyage vers Corel — Rencontres</h3>
<p><strong>Sorcières vertes :</strong> Trois silhouettes dans un marais. L'une repère le groupe et commence à incanter (Lysandra : 1 naturel en discrétion). Contournement par la gauche. Lysandra fait un échec critique sur la charrette. Le MJ est clément — aucun combat.</p>
<p><strong>Bugbear et hobgoblins :</strong> Un bugbear et deux hobgoblins en plein combat entre eux. Onyxus réussit un jet de discrétion. Le groupe contourne sans être repéré.</p>
<p><strong>Kobold isolé :</strong> Un kobold seul entre des arbres, n'a pas vu le groupe. Shakka rate Chill Touch (jet : 9). Uma court et lui met "une patate" : 5 dégâts. Le kobold avait exactement 5 PV. Mort sur le coup.</p>
<h3>Embuscade — Araignées-Loups Géantes</h3>
<p>Camp de nuit dans des ruines. Shakka, Kael et Uma font trois <strong>20 naturels consécutifs</strong> sur leur tour de garde. Au petit matin, Onyxus (qui veillait son père) réalise que le groupe est cerné par six araignées-loups géantes. Un aigle géant tournoie au-dessus sans intervenir.</p>
<p>Onyxus lance Sanctuary sur Berzim et joue en premier. Onyxus et Kael sont mordus (5 perçants + 4 poison chacun). Uma écrase la tête d'une araignée d'un coup de talon (kill). Onyxus projette une araignée grimpée sur Lysandra d'un bolt magique bleu (12 dégâts, kill). Kael plante son bâton dans la gueule d'une araignée au corps à corps (Guiding Bolt, 9 radiants, kill). Uma redirige une morsure sur l'attaquante (11 dégâts, kill). Veritas brûle la suivante (Ignis, 8 dégâts, kill). Shakka et Lysandra achèvent ensemble la grosse sur la tente. Toutes les six mortes.</p>
<h3>L'aigle géant — Onyxus et son "ami"</h3>
<p>L'aigle descend dévorer les cadavres (39 gold en ressources revendables). Onyxus (Insight : 1 naturel) est convaincu que l'aigle est son meilleur ami et lui tend la main. L'aigle lui plante ses ergots dans le bras (5+4 perçants). Uma lui arrache des plumes (10 dégâts). Lysandra, excédée, attrape l'aigle, le secoue, lui tape sur le bec et le jette en l'air en criant <em>"Dégage !"</em> L'aigle part. Onyxus ramasse une plume tombée au sol.</p>
<p><em>Note du MJ à la fin de session : "L'aigle en fait était Dren."</em></p>
<h3>Statistiques</h3>
<ul>
<li><strong>Kills :</strong> Uma ×3 (kobold + araignée talon + araignée redirect), Onyxus ×1 (araignée bolt), Kael ×1 (araignée Guiding Bolt CAC), Veritas ×1 (araignée Ignis), Shakka ×1 (araignée + Lysandra ensemble)</li>
<li><strong>Critiques :</strong> Shakka/Kael/Uma — 20 naturels en garde ×3</li>
<li><strong>Échecs :</strong> Lysandra ×2 (sorcières), Onyxus ×2 (initiative, Insight aigle), Shakka ×1</li>
</ul>`
        },
        {
          id: "session-6",
          day: "7",
          month: "Juin",
          discovered: "07 Juin",
          title: "Session 6",
          subtitle: "Corel, Jida Brez, Hob et la chimère de la mine",
          tags: ["session 6", "Corel", "Jida Brez", "Hob", "tricératops", "chimère"],
          summary: "Le groupe atteint Corel, confie Obsidio au père Jida Brez, traverse une violente dispute interne, assiste au massacre du groupe de Raho par Hob, abat un tricératops sur la route, et entre dans la mine envahie par une chimère.",
          content: `<h3>Arrivée à Corel</h3>
<p>Après une longue route avec Obsidio dans la charrette, le groupe approche de Corel. Veritas a changé d'apparence pour passer pour un Nidia (cheveux recolorés, yeux iridescents, tenue sobre sans signe de l'Ordre). Ville ouvrière vivant du minerai de magla, sans quartiers nobles, pleine de baraquements. Deux anomalies frappent le groupe à l'entrée : les chariots de magla sont tous stationnés, et une foule mécontente gronde sur la place. Kael lance Resistance sur Obsidio pour masquer temporairement sa malédiction.</p>
<h3>L'église et Jida Brez</h3>
<p>Kael mène le groupe à l'église, où il retrouve <strong>Jida Brez</strong>, un Clemar avec qui il a étudié. Jida ne peut pas guérir Obsidio mais accepte de le stabiliser. Il comprend vite que le groupe est traqué — sa question sur "l'agression d'un prélat d'Oceana" met Veritas mal à l'aise et déclenche une passe d'armes avec Lysandra et Uma.</p>
<h3>La crise de la mine</h3>
<p>Au réfectoire, Jida explique : des créatures ont envahi la mine, la production est arrêtée, les salaires ont cessé, les familles meurent de faim, et le noble propriétaire refuse de payer pour chasser les bêtes. Kael obtient l'accès à la bibliothèque (lecture sur place uniquement).</p>
<h3>Le différend dans le groupe</h3>
<p>Le repas dégénère en dispute sur la direction à prendre : Altabury (Astori Hojo, soin d'Obsidio) contre Brilehaven (laver leur nom). Le ton monte entre Veritas, Lysandra et Uma — accusations d'hypocrisie, vieux reproches (le javelot sur Berzim). Lysandra quitte l'église en colère froide. Shakka tranche : repos, on en reparle à l'aube.</p>
<h3>La nuit à Corel</h3>
<p>Onyxus veille son père et demande à apprendre à prier le Tout-Puissant. Lysandra erre seule pour pleurer. Shakka fait sortir <strong>Zar</strong> de la lanterne : l'esprit, affamé après la grosse dose de magla reçue à Malva, révèle être bien plus ancien qu'il n'y paraît, confié autrefois à la mère de Shakka, et menace à mots couverts de se servir si on ne le nourrit pas. Kael obtient l'accord de Berzim pour veiller sur Obsidio en secret.</p>
<h3>Décision et présentation de Berzim</h3>
<p>Au matin, Uma apprend des ouvriers la description de la créature : corps et tête de lion, queue de scorpion, ailes de chauve-souris — une <strong>chimère</strong>, identifie Kael. Onyxus et Lysandra se réconcilient et décident de filer vers Altabury. Kael présente Berzim à Jida, qui accepte de garder le secret malgré son dégoût ("hérétique"). Le groupe se dispute encore sur l'opportunité de régler la mine d'abord — Uma conteste même l'idée qu'ils forment un vrai groupe. Compromis trouvé : la mine, puis Altabury.</p>
<h3>La démonstration de force de Hob</h3>
<p>En quittant l'église, le groupe assiste, sur la place centrale, au massacre méthodique du groupe de mercenaires de Raho par <strong>Hob/Telmona</strong> à mains nues — suplex, nez et oreilles arrachés, l'Ishkia Nir empalé d'un coup d'épée après interrogation. Le groupe choisit de ne pas intervenir. Hob les rattrape ensuite, s'étonne qu'ils soient vivants, cherche des renseignements sur un prisonnier disparu, ne les croit pas mais les laisse partir en jurant qu'ils se reverront. Sa terreur paralyse Uma.</p>
<h3>Le tricératops</h3>
<p>Sur la route de la mine (40 miles), une bête naturelle dépourvue de magla charge le groupe : un <strong>tricératops</strong>. Shakka plante sa lance sur sa trajectoire, Veritas l'agrandit (Enlarge) pour la faire trébucher, Onyxus l'illumine de Faerie Fire. Elle empale Shakka (inconscient, ramené par Onyxus) avant d'être achevée en combiné par tout le groupe — Shakka portant le coup de grâce avec sa lance.</p>
<h3>Entrée dans la mine</h3>
<p>Un cercle de pierre naturel intrigue brièvement Veritas et Kael sans rien révéler de magique. La mine apparaît : palissades, porte défoncée de l'intérieur, odeur de pourriture, flaque corrosive violette près d'un tonneau de poudre vide, traces d'une bête aux membres avant puissants. Au moment d'entrer, un rugissement résonne dans la montagne, puis un gros boom claque derrière eux à l'entrée. Le combat contre la chimère est reporté à la prochaine séance.</p>
<h3>Statistiques</h3>
<ul>
<li><strong>Kills :</strong> Shakka ×1 (tricératops, coup de grâce à la lance) ; hors-groupe — Hob a massacré seul tout le groupe de mercenaires de Raho, dont Nir achevé à l'épée</li>
<li><strong>Dégâts (tricératops) :</strong> Uma ~34 (Flurry of Blows, corne brisée + œil crevé), Lysandra ~18 (épée sous la mâchoire + Lay on Hands sur le groupe), Onyxus 12 (arbalète + Faerie Fire + Healing Word sur Shakka), Kael 12 (Guiding Bolt + Bless + Cure Wounds), Veritas 6 (Fire Bolt + Enlarge ×2 + Dancing Lights), Shakka 13 (lance, coup fatal — mais mis inconscient par la bête, 28 dégâts subis)</li>
<li><strong>Échec critique (1 naturel) :</strong> Shakka — Perception devant l'église (4ᵉ échec critique d'affilée selon le joueur)</li>
<li><strong>Réussites critiques (20 naturel) :</strong> Kael (Connaissance/Histoire sur le cercle de pierre), Onyxus (initiative, sans effet)</li>
</ul>`
        }
      ]
    }
  }
};
