const CODEX = {
  meta: {
    title: "Euchronia",
    subtitle: "Codex de Campagne",
    description: "Le recueil officiel de la campagne : lore, personnages, lieux et factions du Royaume d'Euchronia.",
    tagline: "Le monde. Son histoire. Ses Légendes.",
    heroImage: "",
    mapImage: "Cartedumonde.png",
    quote: "Ce qui n'est pas écrit est oublié. Ce qui est écrit devient éternel.",
    quoteAuthor: "Maître Célion",
    upcoming: [
      {
        day: "7", month: "Juin",
        title: "Session 6",
        desc: ""
      }
    ],
    recentNotes: [
      { icon: "🔮", title: "La malédiction d'Obsidio",        when: "Session 5" },
      { icon: "⚜️", title: "La bague des Tantalus",           when: "Session 5" },
      { icon: "🐍", title: "Zolom absorbé dans la lanterne", when: "Session 3" }
    ],
    quickLinks: [
      { label: "Protagonistes",   href: "#/personnages" },
      { label: "Factions actives", href: "#/factions" },
      { label: "Lieux explorés",  href: "#/lieux" },
      { label: "Fils narratifs",  href: "#/" }
    ],
    sessions: 5,
    mj: "Shiki",
    status: "En cours",
    location: "Route vers Corel — Principauté d'Oceana",
    locationNote: "Après une arrestation à Altabury et une fuite par la mer. Le groupe voyage avec Obsidio Kotabbos (père d'Onyxus), maudit par Astori Hojo — Berzim chante en boucle pour maintenir la malédiction en stase. Destination : Corel, pour trouver un guérisseur ami de Kael.",
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
        id: "malédiction-obsidio",
        icon: "💀",
        label: "La malédiction d'Obsidio",
        desc: "Obsidio Kotabbos est maudit par Astori Hojo. Berzim maintient la malédiction en stase par le chant. Trouver un guérisseur à Corel est urgent.",
        who: "Onyxus & Kael",
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
          image: "",
          discovered: "Session 1",
          group: "PJ",
          title: "Uma",
          subtitle: "Moinesse combattante — Rhoag élevée Ishkia",
          tags: ["Rhoag", "Ishkia"],
          summary: "Élevée dans un monastère de montagne par Maître Célion, Uma a perdu son mentor dans un incendie criminel il y a un an. Elle cherche des réponses — avec ses poings si nécessaire.",
          content: `<h3>Apparence</h3>
<p>À dix-neuf ans, Uma porte déjà la trentaine dans ses traits. Les rides précoces de son sang Rhoag se mêlent aux marques vives laissées par sa fougue : sourcils froncés, sourire carnassier, regard qui brûle avant de comprendre. Son corps est solide, durci, noueux comme un tronc de pin battu par les vents. Ses bras musclés portent des tatouages qu'elle s'est elle-même ajoutés, cherchant à faire dialoguer sa nature Rhoag et sa culture Ishkia. Elle marche comme un jeune loup affamé.</p>
<h3>Histoire</h3>
<p>Uma vint au monde sous un ciel immobile, abandonnée sans nom, sans berceau, sans histoire. C'est <strong>Maître Célion</strong>, vieil ermite Ishkia, qui la trouva sur les marches de son monastère de montagne et la recueillit. Elle grandit dans un univers tissé de chants sacrés, de méditations interminables et de rouleaux de parchemins empilés jusqu'au plafond — et avançait dedans comme un orage.</p>
<h3>La Perte</h3>
<p>Il y a un an, le monastère brûla. Un incendie criminel : les corps portaient des marques d'armes, pas seulement de feu. Uma était absente au moment des faits, sortie s'entraîner, et porte cette culpabilité. Célion fut le premier corps retrouvé, à sa place habituelle, comme s'il avait attendu qu'elle revienne.</p>
<p>La veille, Célion avait remis un carnet à une aubergiste proche du monastère — une précaution. Ce carnet, combiné à une lettre reçue par Obsidio Kotabbos (père d'Onyxus), portant la même écriture, pointe vers Malva. Célion savait apparemment ce qui allait arriver.</p>
<h3>Aujourd'hui</h3>
<p>Des mois de combats illégaux dans les bas-fonds lui ont appris à observer, écouter, mémoriser. Elle ne fait confiance qu'à Onyxus. Elle trinquera quand ils reviendront vivants.</p>
<h3>Ce qu'elle cherche</h3>
<ul>
<li>Retrouver les assassins du monastère</li>
<li>Comprendre ce que savait Célion et ce qu'il préparait</li>
<li>Trouver sa place entre son héritage Rhoag et son éducation Ishkia</li>
</ul>`
        },
        {
          id: "onyxus",
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
<p>Arbalétrier précis. Utilise des carreaux spéciaux (dont Faerie Fire). A improvisé un grappin avec une corde et un crochet créé par magie. A soigné et protégé ses alliés avec Sanctuary et Feather Fall.</p>`
        },
        {
          id: "lysandra",
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
<h3>Ce qu'elle cache</h3>
<p>Elle sait quelque chose au sujet de la créature ailée liée à Kael. Elle a promis de ne pas parler à sa place.</p>`
        },
        {
          id: "kael",
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
<h3>Philosophie</h3>
<p><em>"Les secrets des autres ne m'intéressent pas. S'ils ont quelque chose à nous dire, ils nous le diront. Chacun a eu sa vie avant et chacun ses objectifs."</em></p>`
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
<p>En sortant de l'église, Kael croise son regard — elle tourne la tête vers lui, puis se remet à prier. Veritas note qu'elle sait probablement plus que Joren sur la situation réelle.</p>`
        },
        {
          id: "hob-telmona",
          image: "",
          discovered: "Session 3",
          group: "PNJ",
          title: "Hob / Telmona",
          subtitle: "Tueur à gages Paripus — Grand Trad",
          tags: ["Paripus", "Grand Trad", "mercenaire", "traque"],
          summary: "Présenté comme Hob dès le début, son vrai nom est Telmona. Tueur à gages Paripus de Grand Trad, il traque le groupe pour le compte d'un commanditaire non identifié.",
          content: `<h3>Présentation</h3>
<p>Telmona est un tueur à gages Paripus de Grand Trad, qui s'était présenté sous le nom de <strong>Hob</strong>. Son identité réelle a été révélée par <strong>Joren Sile</strong>, qui a averti le groupe qu'ils étaient traqués.</p>
<h3>Ce qu'on sait</h3>
<ul>
<li>Paripus de Grand Trad, spécialiste des missions de traque.</li>
<li>Opère sous contrat — commanditaire inconnu.</li>
<li>Son vrai prénom est Telmona.</li>
</ul>
<h3>Statut</h3>
<p>À surveiller. Son commanditaire et ses objectifs exacts restent inconnus. Pourrait être lié à Dren Solaria, aux Tantalus, ou à un autre acteur non encore identifié.</p>`
        },
        {
          id: "dren-solaria",
          image: "",
          discovered: "Session 3",
          group: "PNJ",
          title: "Dren Solaria",
          subtitle: "Prélat clemar — Brilehaven (antagoniste)",
          tags: ["clemar", "Brilehaven", "antagoniste", "magie", "Église"],
          summary: "Prélat clemar de Brilehaven, apparu dans la grotte côtière de Malva. A invoqué le Zolom et muté des cadavres en lézards. S'est enfui. Probablement à l'origine de la traque du groupe.",
          content: `<h3>Apparence</h3>
<p>Clemar aux cheveux blancs, vêtu d'une tenue ecclésiastique dorée. Stature et assurance d'un prélat habitué à l'autorité.</p>
<h3>Ce qui s'est passé (Session 3)</h3>
<p>Le groupe a découvert Dren dans la grotte côtière, au-dessus des cristaux de Magla. Il avait préparé trois cadavres torturés qu'il a mutés en lézards humanoïdes au moment critique. Il a également invoqué le <strong>Zolom</strong>, un serpent colossal lié aux lézards.</p>
<p>Dren s'est enfui pendant le combat. L'aigle géant observé en session 5 pourrait être lui selon une note du MJ.</p>
<h3>Connexion avec la campagne</h3>
<ul>
<li>A fabriqué des accusations contre le groupe, transmises au Général Barion via l'armée royale.</li>
<li>Joren Sile a averti le groupe : <em>"Vous êtes traqués."</em></li>
<li>Son implication dans l'incendie du monastère et son lien avec Célion restent à établir.</li>
</ul>
<h3>Note du MJ</h3>
<p><em>"L'aigle géant en fait était Dren."</em></p>`
        },
        {
          id: "barion",
          image: "",
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
<h3>La fuite du groupe</h3>
<p>Plutôt que de rester prisonniers, le groupe a simulé sa mort et fui par la mer. Pseudonymes adoptés : Kael → Alek, Veritas → Astren, Lysandra → Meredith, Onyxus → Xyno, Uma → Aang (Shakka a gardé son prénom).</p>`
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
<p>Faiblesse absolue : ses golems disparaissent instantanément s'il perd conscience. Shakka l'a mis KO en priorité, neutralisant ses deux construits d'un seul coup. Toujours neutraliser le créateur en premier.</p>`
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
<p>Rencontrée en session 5. Relation avec le groupe en cours d'établissement — ni clairement ennemie, ni alliée confirmée.</p>`
        },
        {
          id: "obsidio-kotabbos",
          image: "",
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
          image: "",
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
          image: "",
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
<li><strong>Le Sac Sans Fond :</strong> objet magique récupéré dans la grotte.</li>
<li><strong>Les Cartes de Nyx :</strong> création d'Onyxus — donnent +d4 à l'initiative, vision partagée de la carte, et permettent de lancer des sorts sans ligne de vue directe.</li>
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
          subtitle: "Ville — Principauté d'Oceana (destination actuelle)",
          tags: ["destination", "Oceana", "session 5"],
          summary: "Destination actuelle du groupe. Un ami guérisseur de Kael y réside. Objectif : trouver de l'aide pour lever la malédiction imposée à Obsidio Kotabbos.",
          content: `<h3>Présentation</h3>
<p>Ville de la Principauté d'Oceana. Le groupe s'y dirige après leur fuite d'Altabury par la mer. La route terrestre depuis la côte a déjà réservé plusieurs rencontres : kobold, araignées-loups géantes, sorcières vertes, bugbear et hobgoblins.</p>
<h3>Pourquoi Corel ?</h3>
<p>Kael y a un ami guérisseur dont les compétences pourraient permettre de lever la malédiction imposée à <strong>Obsidio Kotabbos</strong> par Astori Hojo. Sans intervention, la stase maintenue par Berzim ne tiendra pas indéfiniment.</p>
<h3>État actuel</h3>
<p>Non encore atteinte. Le groupe est en route depuis la côte d'Oceana — session 5.</p>`
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
          image: "",
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
          image: "",
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
          image: "",
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
          image: "",
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
          image: "",
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
          image: "",
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
          image: "",
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
          image: "",
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
          image: "",
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
          image: "",
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
          image: "",
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
          id: "bugbear-hobgoblins",
          image: "",
          discovered: "Session 5",
          group: "observe",
          title: "Bugbear & Hobgoblins",
          subtitle: "Humanoïdes — Route vers Corel",
          tags: ["gobelin", "humanoïde", "session 4", "session 5"],
          summary: "Un bugbear et deux hobgoblins aperçus en train de se battre entre eux sur la route. Contournés discrètement. Ennemis entre eux — relation avec la horde gobeline de Malva inconnue.",
          content: `<h3>Observation</h3>
<p>Aperçus à l'heure du midi lors du voyage vers Corel. Un bugbear et deux hobgoblins étaient en plein affrontement entre eux. Onyxus a réussi un jet de discrétion et le groupe a contourné sans être repéré.</p>
<h3>Nature des créatures</h3>
<ul>
<li><strong>Bugbear :</strong> humanoïde de grande taille, plus imposant qu'un gobelin ordinaire, force brute.</li>
<li><strong>Hobgoblins :</strong> humanoïdes militarisés, plus disciplinés que les gobelins. Équipement supérieur.</li>
</ul>
<h3>Note</h3>
<p>Ils se battaient entre eux — pas de relation claire avec la horde gobeline de Malva. Présence dans la région à surveiller.</p>`
        },
        {
          id: "aigle-geant",
          image: "",
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
          image: "",
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
        }
      ]
    }
  }
};
