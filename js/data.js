const CODEX = {
  meta: {
    title: "Euchronia",
    subtitle: "Codex de Campagne",
    description: "Le recueil officiel de la campagne : lore, personnages, lieux et factions du Royaume d'Euchronia.",
    tagline: "Le monde. Son histoire. Ses Légendes.",
    heroImage: "",
    mapImage: "cartedumonde.png",
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
      { icon: "📓", title: "Carnet de Maître Célion",    when: "Session 2" },
      { icon: "🌀", title: "Rapport sur Abzu",           when: "Session 2" },
      { icon: "⚔️", title: "Le camp gobelin à l'ouest", when: "Session 2" }
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
    location: "Malva — Principauté de Montario",
    locationNote: "Après l'assaut du Fort de Corne Creuse. La horde gobeline principale reste intacte à l'ouest. Le bailli et le sanctor n'ont pas encore été confrontés.",
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
        }
      ]
    }
  }
};
