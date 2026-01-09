// app.js contiene la configuración y datos estáticos del mapa interactivo.

const CONFIG = {
    imageWidth: 3840,
    imageHeight: 3584,
    tileStartX: 2032,
    tileStartY: 2032,
    zoom: 12,
    tileSize: 256
};

// 
const GUIDE_BASE_URL = "https://www.pagina12.com.ar/tags/videojuegos/";

// Banco de hooks. Los CTAs que aparecen aleatoriamente en los popus. Generados con IA.
const CTA_HOOKS = [
    "Consultá nuestra guía detallada",
    "Descubrí todos los secretos de esta zona",
    "Asegurate de no dejarte nada atrás",
    "Ver estrategia y consejos completos",
    "Todo lo que necesitás saber está acá",
    "Maximizá tu partida con nuestra guía",
    "Encontrá el camino correcto",
    "Desbloqueá el 100% del contenido",
    "Más información en nuestra base de datos",
    "Optimizá tu recorrido paso a paso",
    "Solución completa disponible",
    "Revisá los requisitos y recompensas",
    "No te pierdas ningún detalle oculto",
    "Accedé al grimorio de conocimiento",
    "Dominá todas las mecánicas del juego",
    "Localización exacta y cómo llegar",
    "Consejos expertos para esta sección",
    "Mirá la lista completa de coleccionables",
    "Ahorrá tiempo con nuestros atajos",
    "Explicación detallada del lore",
    "Guía de supervivencia esencial",
    "Revelá lo que el mapa no te cuenta",
    "Mejorá tu build con estos consejos",
    "Paso a paso para completarlo todo",
    "Índice maestro de Expedition 33"
];

// Comentarios de la comunidad. Generados por IA y categorizados.
const COMMUNITY_COMMENTS = {
    // --- JEFES ---
    'Jefe': [
        { user: 'PaintSlayer_01', text: 'Cuando la Pintora carga el ataque rojo, SOLO Maelle puede hacer parry efectivo.' },
        { user: 'GustaveMain', text: 'Usen la habilidad de sobrecarga de Gustave en la fase 2, le rompe el escudo de una.' },
        { user: 'TurnBasedGod', text: 'Ojo con el QTE del minuto 3, el timing es mucho más rápido que en la demo.' },
        { user: 'LuneFanatic', text: 'No gasten los puntos de acción en el primer turno, buffeen a todo el equipo primero.' },
        { user: 'ExpeditionLeader', text: 'Este boss es inmune al daño de "Tinta" hasta que le rompes los pinceles de la espalda.' },
        { user: 'LoreSeeker', text: 'Si llevan a Sciel en el equipo, hay un diálogo único al empezar la pelea.' },
        { user: 'NoHit_Runner', text: 'El ataque de área se puede esquivar saltando, no hace falta rodar.' },
        { user: 'CasualGamer', text: 'Me costó 10 intentos. La clave es equipar el amuleto de resistencia al Olvido.' },
        { user: 'BuildMaster', text: 'Saquen el daño crítico, este bicho tiene la defensa física altísima. Usen magia.' },
        { user: 'Artist33', text: 'Hermosa la animación de muerte, pero cuidado que explota al final.' },
        { user: 'SpeedDem0n', text: 'Se puede glitchar si usas el gancho justo cuando empieza la cinemática.' },
        { user: 'TankGustave', text: 'Mantengan el aggro con Gustave o la Pintora va a oneshotear a los healers.' },
        { user: 'Reactivist', text: 'El comando de defensa perfecta aquí da 2 puntos de AP extra. ¡Aprovéchenlo!' },
        { user: 'StoryModeOnly', text: 'Bajen la dificultad si no tienen las armas de nivel 15, es un muro de dificultad.' },
        { user: 'SecretHunter', text: 'Si le ganan en menos de 5 turnos, dropea la "Máscara del Vacío".' },
        { user: 'BrushBreaker', text: 'Cuidado con el ataque "Borrado", te quita un personaje de la party por 2 turnos.' },
        { user: 'ClairObscurFan', text: 'La banda sonora en la fase 3 es increíble, suban el volumen.' },
        { user: 'MetaGamer', text: 'No usen items de fuego, se cura. Usen daño de Vacío.' },
        { user: 'RageQuitter', text: 'Odio la mecánica de puntería manual en este boss, siempre fallo.' },
        { user: 'PlatinumHunter', text: 'Para el trofeo "Sin Miedo", no pueden usar curaciones en toda la pelea.' }
    ],
    'Jefe de historia': [
        { user: 'System', text: 'Ver comentarios en la categoría "Jefe".' } 
    ],
    'Jefe opcional': [
        { user: 'SecretFinder', text: 'Este Elite solo aparece si rompiste los 3 jarrones azules en la sala anterior.' },
        { user: 'LootGoblin', text: 'Dropea el "Catalizador de Sombras", esencial para la build de mago.' },
        { user: 'DarkSoulsVet', text: 'Los patrones de ataque son idénticos al jefe del tutorial pero más rápidos.' },
        { user: 'ExplorerX', text: 'Necesitas el gancho mejorado para llegar a la plataforma donde spawnea.' },
        { user: 'completionist', text: 'No lo maten todavía, robenle el item "Lágrima de Pintura" con Maelle primero.' },
        { user: 'Tacticool', text: 'Es débil al aturdimiento. Spameen ataques pesados.' },
        { user: 'HiddenBoss', text: 'Si entras a la pelea con menos del 50% de HP, entra en modo furia instántaneo.' },
        { user: 'MapGenie', text: 'Está escondido detrás de la cascada falsa, usen el scanner.' },
        { user: 'GrindLord', text: 'El respawn es de 2 horas reales. Paciencia.' },
        { user: 'LoreNerd', text: 'Según la descripción, este monstruo es un explorador fallido de la Expedición 30.' },
        { user: 'DpsCheck', text: 'Es una carrera de daño, si no lo matan en 4 turnos se cura al 100%.' },
        { user: 'SniperElite', text: 'Apuntad a los ojos con el modo puntería libre para crítico garantizado.' },
        { user: 'CheeseStrat', text: 'Se puede matar desde el borde del área con ataques a distancia sin que te detecte.' },
        { user: 'FashionSouls', text: 'Dropea la capa más facherita del juego.' },
        { user: 'HardcoreMode', text: 'En dificultad máxima tiene un ataque extra que ignora armadura.' },
        { user: 'HelperBot', text: 'Recomiendo nivel 25 mínimo antes de intentarlo.' },
        { user: 'ScielMain', text: 'Usen la ulti de Sciel para limpiar los adds que invoca.' },
        { user: 'RngHater', text: 'Lo maté 50 veces y no me tira el arma legendaria. F.' },
        { user: 'CoopPlease', text: 'Ojalá este juego tuviera coop, este bicho es insoportable solo.' },
        { user: 'StrategyGuide', text: 'Primero maten al curandero que tiene al lado, sino es inmortal.' }
    ],
    'Jefe mundial': [
        { user: 'RaidLeader', text: 'Necesitamos 3 equipos completos para bajarle la vida. ¡Uníos al server!' },
        { user: 'WorldFirst', text: 'Tiene 5 millones de HP. Traed pociones de maná infinitas.' },
        { user: 'ServerCrash', text: 'El boss crasheó el servidor cuando usó el ataque de agujero negro.' },
        { user: 'SoloPlayer', text: 'Imposible de matar solo, no lo intenten.' },
        { user: 'LootTables', text: 'Dropea materiales para craftear el arma final (0.5% chance).' },
        { user: 'Timer', text: 'Solo está disponible los domingos de 20:00 a 22:00.' },
        { user: 'Mechanic', text: 'Cuando brille en azul, todos tienen que dejar de atacar o se cura.' },
        { user: 'TankMe', text: 'Busco healers para farmear este boss, soy nivel 50.' },
        { user: 'GlitchAbuser', text: 'Si lo llevas hasta el río, se queda atascado y no ataca.' },
        { user: 'LegitPlayer', text: 'Dejen de usar glitches, banearon a mi amigo por eso.' },
        { user: 'Scale', text: 'La dificultad escala con la cantidad de jugadores en la zona.' },
        { user: 'Reward', text: 'La montura que da es la más rápida del juego.' },
        { user: 'LoreBit', text: 'Se supone que este dragón de pintura destruyó la Expedición 12.' },
        { user: 'LagSpike', text: 'Imjugable con este lag, arreglen los servidores.' },
        { user: 'PartyUp', text: 'Inviten party, llevo build de soporte.' },
        { user: 'OneShot', text: 'Cuidado con el coletazo, te manda al inicio del mapa.' },
        { user: 'Phase2', text: 'En fase 2 vuela y solo le pueden pegar los rangos.' },
        { user: 'MusicO', text: 'La música épica de este encuentro es 10/10.' },
        { user: 'GoldFarm', text: 'No da XP, pero suelta muchísimo oro.' },
        { user: 'WeekendEvent', text: 'Evento de doble drop activo este fin de semana.' }
    ],

    // --- EXPLORACIÓN Y MOVILIDAD ---
    'Atajo': [
        { user: 'LazyWalker', text: 'Gracias a dios por este atajo, odiaba dar la vuelta entera.' },
        { user: 'DoorKick', text: 'La puerta solo se abre desde este lado. Típico.' },
        { user: 'LadderDown', text: 'Patea la escalera para desbloquear el camino desde la hoguera.' },
        { user: 'Elevator', text: 'Este ascensor conecta directo con el inicio del nivel.' },
        { user: 'WallBreak', text: 'Se necesita el guantelete de fuerza para romper esta pared.' },
        { user: 'TimeSaver', text: 'Ahorra unos 5 minutos de caminata si mueres en el boss.' },
        { user: 'HiddenLever', text: 'La palanca está escondida detrás de las cajas.' },
        { user: 'Bridge', text: 'Corten la cuerda para que baje el puente.' },
        { user: 'KeyRequired', text: 'Necesitas la "Llave de las Cloacas" que tiene el mini-boss.' },
        { user: 'Metroidvania', text: 'No puedes pasar por aquí hasta tener el doble salto.' },
        { user: 'Vent', text: 'Entren agachados por el conducto de ventilación.' },
        { user: 'Explosive', text: 'Usen un barril explosivo para abrir el paso.' },
        { user: 'TreeLog', text: 'Empujen el tronco para cruzar el río.' },
        { user: 'Code', text: 'El código de la puerta es 0451 (Referencia clásica).' },
        { user: 'RogueKey', text: 'Si tienen ganzúas, pueden forzar la cerradura.' },
        { user: 'OneWay', text: 'Cuidado, si bajan por aquí no pueden volver a subir.' },
        { user: 'Window', text: 'Rompan el cristal de la ventana para entrar.' },
        { user: 'Teleport', text: 'El espejo te teletransporta al otro lado del muro.' },
        { user: 'Bookshelf', text: 'Tiren del libro azul para mover la estantería.' },
        { user: 'MapUpdate', text: 'Este atajo hace que el mapa sea mucho más fácil de navegar.' }
    ],
    'Garfio': [
        { user: 'Spiderman', text: 'Me siento Spiderman en esta zona.' },
        { user: 'HookUpgrade', text: 'Necesitas el Gancho Nivel 2 (Alcance Largo) para llegar.' },
        { user: 'Timing', text: 'El timing es justo, salten en el último segundo.' },
        { user: 'LookUp', text: 'Miren arriba, el punto de anclaje está muy alto.' },
        { user: 'ChainSwing', text: 'Tienes que balancearte para llegar a la cornisa.' },
        { user: 'FallDmg', text: 'Si fallas el gancho aquí, la caída te mata.' },
        { user: 'SecretLedge', text: 'Hay un saliente escondido a la izquierda mientras te balanceas.' },
        { user: 'MidAir', text: 'Dispara el gancho en el aire después del salto doble.' },
        { user: 'Stamina', text: 'Ojo con la estamina, si se acaba te sueltas.' },
        { user: 'Physics', text: 'Las físicas de la cuerda son un poco raras aquí.' },
        { user: 'CombatHook', text: 'También puedes usar el gancho para atraer al enemigo desde aquí.' },
        { user: 'ShortcutHook', text: 'Este punto de gancho es un atajo rápido al techo.' },
        { user: 'Interactive', text: 'Dispara al anclaje para bajar la plataforma.' },
        { user: 'Speedrun', text: 'Truco de speedrun: cancela la animación para ir más rápido.' },
        { user: 'BluePoint', text: 'Solo los puntos azules son interactuables.' },
        { user: 'AimAssist', text: 'Activen la ayuda de apuntado si les cuesta engancharse.' },
        { user: 'Cinematic', text: 'La cámara lenta al usar el gancho queda genial.' },
        { user: 'NoHookZone', text: 'No intenten usarlo en combate aquí, no hay techo.' },
        { user: 'SwingJump', text: 'Impúlsate con X/A justo cuando la cuerda esté tensa.' },
        { user: 'Accessory', text: 'Equipen el "Carrete Reforzado" para subir más rápido.' }
    ],
    'Al mundo superior': [
        { user: 'Exit', text: 'Salida hacia el mapa mundi.' },
        { user: 'LoadScreen', text: 'Prepárense para la pantalla de carga.' },
        { user: 'NoReturn', text: '¿Seguro que terminaste todo aquí? No podrás volver en un rato.' },
        { user: 'Freedom', text: 'Por fin aire fresco después de esa mazmorra.' },
        { user: 'FastTravelUnlock', text: 'Al salir se desbloquea el viaje rápido a esta zona.' },
        { user: 'QuestUpdate', text: 'Salir actualiza el estado de la misión principal.' },
        { user: 'ChangeRegion', text: 'Entrando a la región de Saisto Norte.' },
        { user: 'Vehicle', text: 'Aquí aparqué mi vehículo.' },
        { user: 'DayNight', text: 'Al salir siempre se hace de día automáticamente.' },
        { user: 'Vendors', text: 'Mejor ir a la ciudad a vender antes de seguir.' },
        { user: 'Transition', text: 'La transición es seamless, sin cortes.' },
        { user: 'Warning', text: 'Nivel recomendado para la zona exterior: 15+.' },
        { user: 'Weather', text: 'Está lloviendo fuera, afecta a la magia de fuego.' },
        { user: 'Camp', text: 'Monten campamento nada más salir.' },
        { user: 'Save', text: 'El juego guarda automáticamente al cruzar esta puerta.' },
        { user: 'MusicChange', text: 'Me encanta cómo cambia la música al salir.' },
        { user: 'MapOpen', text: 'Abran el mapa para ver la nueva ruta.' },
        { user: 'NpcWait', text: 'Tu compañero te está esperando fuera.' },
        { user: 'SecretExit', text: 'Esta es una salida secreta que da a la costa.' },
        { user: 'Backtrack', text: 'Volviendo a la zona inicial.' }
    ],

    // --- COLECCIONABLES Y OBJETOS ---
    'Tesoro': [
        { user: 'ChestHunter', text: 'Cofre mímico. ¡Atacarlo antes de abrir o te come medio HP!' },
        { user: 'KeyMaster', text: 'Necesitan la "Llave Oxidada del Artista" que está en el Distrito 3.' },
        { user: 'Platformer', text: 'Hay que saltar desde el tejado de enfrente, el gancho no llega.' },
        { user: 'SecretWall', text: 'Pared ilusoria. Golpeen el muro con el cuadro torcido.' },
        { user: 'PuzzleSolver', text: 'La combinación es: Izquierda, Derecha, Izquierda, Arriba.' },
        { user: 'EarlyGameOp', text: 'Aquí está la mejor espada para el inicio del juego (Daño +15).' },
        { user: 'TrapAhead', text: 'Cuidado, al abrirlo caen rocas del techo. Esquiva rápida (Círculo/B).' },
        { user: 'LoreItem', text: 'Contiene el diario perdido de la Expedición 28. Mucho lore aquí.' },
        { user: 'WaterLevel', text: 'Hay que bajar el nivel del agua con la palanca del sótano para acceder.' },
        { user: 'Backtrack', text: 'No pueden abrirlo hasta que desbloqueen la habilidad de "Despintar".' },
        { user: 'RichGuy', text: 'Solo da 500 monedas, no vale la pena el esfuerzo.' },
        { user: 'GearHead', text: 'Da un accesorio que aumenta la velocidad de recarga de habilidades.' },
        { user: 'HiddenGem', text: 'Escondido debajo de las escaleras, muy fácil de pasar por alto.' },
        { user: 'NpcQuest', text: 'No lo abran si quieren el final bueno de la quest del mercader.' },
        { user: 'Lockpick', text: 'Requiere nivel 3 de Ganzúa.' },
        { user: 'PixelHunter', text: 'Busquen un brillo pequeño en la esquina oscura.' },
        { user: 'Collector33', text: 'Este es el cofre 33/50 para el logro.' },
        { user: 'RiddleMe', text: 'Hay que encender las 4 antorchas en orden cromático para que aparezca.' },
        { user: 'GlitchUser', text: 'Si saltan contra la pared en el ángulo correcto, pueden entrar sin llave.' },
        { user: 'DailyDrop', text: 'Este cofre se resetea cada día, vengan a farmear materiales.' }
    ],
    'Arma': [
        { user: 'SwordSaint', text: 'Esta espada escala con Destreza (S).' },
        { user: 'HeavyHitter', text: 'El martillo es muy lento pero stunea a los jefes.' },
        { user: 'RangeMeta', text: 'El rifle de francotirador está roto en este parche.' },
        { user: 'MagicWand', text: 'Aumenta el daño de hechizos de pintura un 20%.' },
        { user: 'LegendaryFind', text: '¡Arma Legendaria! Tiene efecto de sangrado.' },
        { user: 'DualWield', text: 'Perfectas para la build de doble empuñadura.' },
        { user: 'Requirements', text: 'Necesitas 30 de Fuerza para equiparla.' },
        { user: 'Visuals', text: 'El diseño del arma brilla en la oscuridad.' },
        { user: 'UpgradePath', text: 'No la mejoren más de +5, luego encuentras una mejor.' },
        { user: 'HiddenStat', text: 'Tiene una estadística oculta de suerte.' },
        { user: 'LoreWeapon', text: 'Era la espada del líder de la Expedición 1.' },
        { user: 'Moveset', text: 'El ataque fuerte tiene un rango absurdo.' },
        { user: 'Elemental', text: 'Hace daño de fuego base, ideal contra plantas.' },
        { user: 'CritBuild', text: 'Imprescindible para builds de crítico.' },
        { user: 'Shield', text: 'Este escudo bloquea 100% daño físico.' },
        { user: 'Weight', text: 'Pesa muchísimo, van a rodar lento (fat roll).' },
        { user: 'Durability', text: 'Se rompe muy rápido, lleven kits de reparación.' },
        { user: 'UniqueSkill', text: 'La habilidad especial del arma invoca un fantasma.' },
        { user: 'SellValue', text: 'No la vendan, se usa para craftear un arma divina.' },
        { user: 'DropRate', text: 'Me costó 3 horas que me la soltara el enemigo.' }
    ],
    'Disco de música': [
        { user: 'Audiophile', text: 'La pista 4 es una obra maestra.' },
        { user: 'ClassicFan', text: 'Referencia clara a Chopin.' },
        { user: 'HiddenTrack', text: 'Está escondido detrás de la gramola.' },
        { user: 'Jukebox', text: 'Desbloquea esta canción en la base.' },
        { user: 'VibeCheck', text: 'Música perfecta para explorar.' },
        { user: 'Composer', text: 'El compositor se lució con este tema.' },
        { user: 'CollectAll', text: 'Me falta solo este para el logro "Melómano".' },
        { user: 'Piano', text: 'Solo piano, muy melancólico.' },
        { user: 'BattleTheme', text: 'Es la música del jefe final pero en versión 8-bits.' },
        { user: 'LoreSong', text: 'La letra de la canción cuenta la historia de la ciudad.' },
        { user: 'Vinyl', text: 'Parece un disco de vinilo antiguo.' },
        { user: 'ClubMix', text: 'Remix techno, no pega nada con el juego jaja.' },
        { user: 'Radio', text: 'Se escucha en la radio del búnker.' },
        { user: 'Sadness', text: 'Esta canción me hace llorar cada vez.' },
        { user: 'SoundTest', text: 'Accesible desde el menú de sonido.' },
        { user: 'RareDrop', text: 'Lo tiene el mercader raro, cuesta 5000.' },
        { user: 'EasterEgg', text: 'Si lo pones al revés se oye un mensaje secreto.' },
        { user: 'Chill', text: 'Lofi beats to study/paint to.' },
        { user: 'Orchestra', text: 'Grabado con orquesta real.' },
        { user: 'Bug', text: 'A veces no suena, reinicien el juego.' }
    ],
    'Tinte': [
        { user: 'FashionWar', text: 'El color "Rojo Sangre" queda genial en la armadura pesada.' },
        { user: 'RareDye', text: 'Este tinte brilla en la oscuridad.' },
        { user: 'CraftingMat', text: 'Se fabrica con flores azules del jardín.' },
        { user: 'Custom', text: 'Personalización al máximo.' },
        { user: 'GoldDye', text: 'Tinte dorado, símbolo de estatus.' },
        { user: 'Black', text: 'Tinte "Negro Vacío", el más buscado.' },
        { user: 'MerchantDye', text: 'Solo lo vende el pintor ciego.' },
        { user: 'OneUse', text: 'Cuidado, es de un solo uso.' },
        { user: 'Mix', text: 'Puedes mezclarlo con blanco para un tono pastel.' },
        { user: 'Camo', text: 'Sirve de camuflaje en el bosque (no funcional, solo visual).' },
        { user: 'Neon', text: 'Colores neón, muy cyberpunk.' },
        { user: 'Matching', text: 'Por fin puedo combinar la capa con las botas.' },
        { user: 'AchievementDye', text: 'Recompensa por completar la colección de arte.' },
        { user: 'Invisible', text: 'Hay un tinte que hace el arma invisible (bug?).' },
        { user: 'Metallic', text: 'Acabado metálico impresionante.' },
        { user: 'Matte', text: 'Prefiero el acabado mate.' },
        { user: 'Drop', text: 'Lo sueltan los calamares de tinta.' },
        { user: 'Seasonal', text: 'Tinte exclusivo del evento de invierno.' },
        { user: 'Apply', text: 'Se aplica en el taller de la base.' },
        { user: 'Preview', text: 'La vista previa engaña, es más oscuro in-game.' }
    ],
    'Diario': [
        { user: 'LoreDump', text: 'Aquí explica qué le pasó a la Expedición 4.' },
        { user: 'SadStory', text: 'La historia de este soldado es muy triste.' },
        { user: 'PuzzleHint', text: 'La última página tiene la clave del puzzle de la biblioteca.' },
        { user: 'VoiceActing', text: 'Este diario tiene narración de voz.' },
        { user: 'Date', text: 'Fechado en 1899.' },
        { user: 'Author', text: 'Escrito por la mismísima Pintora antes de corromperse.' },
        { user: 'Secret', text: 'Revela la ubicación de un tesoro oculto.' },
        { user: 'Collection', text: 'Diario 4 de 10.' },
        { user: 'Reading', text: 'Vale la pena leerlo entero.' },
        { user: 'WorldBuilding', text: 'Da contexto sobre la política de la ciudad.' },
        { user: 'Translation', text: 'Está en un idioma antiguo, necesitas a la traductora.' },
        { user: 'BloodStained', text: 'El texto es ilegible por la sangre.' },
        { user: 'Sketch', text: 'Incluye un dibujo del monstruo de la zona.' },
        { user: 'WarningLog', text: '"No entres ahí", dice. Voy a entrar.' },
        { user: 'Funny', text: 'Un chiste malo escrito en el margen.' },
        { user: 'Continuity', text: 'Conecta con el lore del primer juego.' },
        { user: 'MissingPage', text: 'Le faltan páginas.' },
        { user: 'CodeCipher', text: 'Es un código cifrado.' },
        { user: 'LocationLore', text: 'Describe cómo era este edificio antes de la ruina.' },
        { user: 'Update', text: 'Actualiza tu enciclopedia.' }
    ],
    'Pictos': [
        { user: 'ArtCritic', text: 'Analiza el cuadro para obtener XP.' },
        { user: 'HiddenMickey', text: 'Hay una forma oculta en la pintura.' },
        { user: 'Collectible', text: 'Coleccionable visual.' },
        { user: 'History', text: 'Representa la Gran Guerra.' },
        { user: 'Style', text: 'Estilo impresionista.' },
        { user: 'SecretSwitch', text: 'Este cuadro es en realidad un interruptor.' },
        { user: 'Creepy', text: 'Los ojos te siguen.' },
        { user: 'Restoration', text: 'Puedes restaurarlo si tienes el pincel adecuado.' },
        { user: 'Value', text: 'Vale mucho dinero si lo vendes (no lo hagas).' },
        { user: 'Museum', text: 'Dónalo al museo para recompensas.' },
        { user: 'Fake', text: 'Es una falsificación, el original está en el castillo.' },
        { user: 'ArtistSig', text: 'Firmado por "G.".' },
        { user: 'QuestItemPic', text: 'El noble busca este cuadro específico.' },
        { user: 'Scenery', text: 'Bonita vista.' },
        { user: 'InteractiveArt', text: 'Si le disparas, pasa algo.' },
        { user: 'Clue', text: 'Mira hacia dónde apunta el dedo en el cuadro.' },
        { user: 'Set', text: 'Parte del tríptico.' },
        { user: 'Texture', text: 'Increíble nivel de detalle en las texturas.' },
        { user: 'Burn', text: 'Es inflamable.' },
        { user: 'PhotoMode', text: 'Posad delante para una buena foto.' }
    ],
    'Jaula de pintura': [
        { user: 'BirdFree', text: 'Libera al pájaro para obtener una bendición.' },
        { user: 'Collect', text: 'Hay 10 jaulas en esta zona.' },
        { user: 'Sound', text: 'Seguid el sonido de aleteo.' },
        { user: 'HighPlace', text: 'Siempre las ponen en sitios altos.' },
        { user: 'RewardCage', text: 'Da polvo de pintura al abrirla.' },
        { user: 'PuzzleCage', text: 'Tienes que dispararle a la cuerda para que caiga.' },
        { user: 'GoldBird', text: 'Es un pájaro dorado, da más puntos.' },
        { user: 'Completion', text: 'Necesario para el 100%.' },
        { user: 'TrapCage', text: 'Cuidado, esta tiene una bomba dentro.' },
        { user: 'LoreCage', text: 'La Pintora encerraba aquí sus creaciones.' },
        { user: 'Mechanic', text: 'Golpea con ataque melee.' },
        { user: 'HiddenLeaves', text: 'Escondida entre las hojas.' },
        { user: 'NightOnly', text: 'Solo brilla de noche.' },
        { user: 'KeyCage', text: 'Necesitas una llave pequeña.' },
        { user: 'Respawn', text: 'No reaparecen.' },
        { user: 'Challenge', text: 'Hazlo contrarreloj.' },
        { user: 'Icon', text: 'No aparece en el minimapa.' },
        { user: 'Guide', text: 'Miren la guía de ubicaciones.' },
        { user: 'Color', text: 'Cada color de pájaro da un stat diferente.' },
        { user: 'Satisfying', text: 'El sonido al romperla es muy satisfactorio.' }
    ],
    'Catalizador': [ /* Cubre Catalyst y Catalizador */
        { user: 'Alchemy', text: 'Ingrediente base para pociones mayores.' },
        { user: 'RareMat', text: 'Muy difícil de encontrar.' },
        { user: 'CraftOp', text: 'Úsalo para encantar armas a +10.' },
        { user: 'BossDrop', text: 'Normalmente solo lo tiran los bosses.' },
        { user: 'FarmRoute', text: 'Hay una ruta de farmeo en YouTube.' },
        { user: 'Transmute', text: 'Puedes transmutarlo en oro.' },
        { user: 'Stack', text: 'Guárdalos, vas a necesitar 50 para el final.' },
        { user: 'BlueCatalyst', text: 'El azul es para armaduras.' },
        { user: 'RedCatalyst', text: 'El rojo es para armas.' },
        { user: 'Trader', text: 'El comerciante secreto vende 2 por semana.' },
        { user: 'Weightless', text: 'No pesa en el inventario.' },
        { user: 'Description', text: 'Lee la descripción para saber qué hace.' },
        { user: 'Glow', text: 'Brilla en el suelo.' },
        { user: 'Economy', text: 'La economía del juego gira en torno a esto.' },
        { user: 'Wasted', text: 'No lo gastes en equipo de bajo nivel.' },
        { user: 'Combine', text: 'Combina 3 pequeños para hacer uno grande.' },
        { user: 'QuestReward', text: 'Recompensa de misión diaria.' },
        { user: 'LoreMagic', text: 'Pura magia concentrada.' },
        { user: 'Duplicate', text: 'Hay un glitch para duplicarlos (parcheado).' },
        { user: 'Essential', text: 'Esencial para el endgame.' }
    ],
    'Lumina': [
        { user: 'Currency', text: 'Moneda premium (mentira, se consigue jugando).' },
        { user: 'Shiny', text: '¡Brilla mucho!' },
        { user: 'Upgrade', text: 'Mejora las estadísticas de Gustave.' },
        { user: 'SkillTree', text: 'Punto de habilidad.' },
        { user: 'Crystal', text: 'Rompe el cristal para obtenerla.' },
        { user: 'Cave', text: 'Abundan en las cuevas.' },
        { user: 'ValueLumina', text: 'Vale 1000 créditos.' },
        { user: 'Trade', text: 'Cámbialo por skins.' },
        { user: 'LoreLight', text: 'Luz solidificada.' },
        { user: 'MagicResource', text: 'Recarga tu barra de magia al instante.' },
        { user: 'Limited', text: 'Hay un número limitado en el mundo.' },
        { user: 'PuzzleReward', text: 'Premio por resolver el acertijo.' },
        { user: 'Float', text: 'Está flotando en el aire, usa el gancho.' },
        { user: 'Inventory', text: 'Revisa tu bolsa de materiales.' },
        { user: 'SoundEffect', text: 'Hace un ruido de campanitas.' },
        { user: 'Attract', text: 'Usa el anillo de imán para recogerlas.' },
        { user: 'SaveUp', text: 'Ahorra para comprar la mejora de salud.' },
        { user: 'MapMarker', text: 'Márcalo si no puedes cogerlo ahora.' },
        { user: 'Beauty', text: 'Es muy bonito.' },
        { user: 'GameChanger', text: 'Con esto desbloqueas la ulti.' }
    ],
    'Repintar': [ /* Cubre Repintar */
        { user: 'Ability', text: 'Habilidad necesaria para avanzar.' },
        { user: 'PuzzleColor', text: 'Pinta la pared de rojo para abrirla.' },
        { user: 'InkCost', text: 'Gasta mucha tinta.' },
        { user: 'Brush', text: 'Usa el pincel grueso.' },
        { user: 'SecretReveal', text: 'Repintar revela mensajes ocultos.' },
        { user: 'Combat', text: 'Pinta al enemigo para bajarle la defensa.' },
        { user: 'Platform', text: 'Pinta el aire para crear una plataforma.' },
        { user: 'Creative', text: 'Sé creativo.' },
        { user: 'TimeLimit', text: 'La pintura se seca rápido.' },
        { user: 'Controller', text: 'Usa el stick derecho para pintar.' },
        { user: 'Mouse', text: 'Más fácil con ratón.' },
        { user: 'Art', text: 'Dibuja lo que quieras.' },
        { user: 'MechanicCore', text: 'Mecánica principal del juego.' },
        { user: 'BridgePaint', text: 'Restaura el puente borrado.' },
        { user: 'KeyPaint', text: 'Dibuja una llave.' },
        { user: 'Fun', text: 'Muy divertido.' },
        { user: 'Tutorial', text: 'Lo enseñan en el tutorial.' },
        { user: 'UpgradeBrush', text: 'Mejora el pincel para pintar más rápido.' },
        { user: 'Colors', text: 'Necesitas desbloquear más colores.' },
        { user: 'Effect', text: 'Efectos visuales increíbles.' }
    ],

    // --- NPCs Y ENEMIGOS ---
    'Enemigo': [ 
        { user: 'WeakSpot', text: 'Puntad a la cabeza.' },
        { user: 'FireWeak', text: 'Débil al fuego.' },
        { user: 'IceResist', text: 'Resistente al hielo.' },
        { user: 'Aggro', text: 'Te ve desde muy lejos.' },
        { user: 'Stealth', text: 'Fácil de matar por la espalda.' },
        { user: 'Group', text: 'Siempre van en grupos de 3.' },
        { user: 'HealerFirst', text: 'Maten al que cura primero.' },
        { user: 'ShieldBreak', text: 'Usen ataque pesado para romper guardia.' },
        { user: 'Dodge', text: 'Esquiva perfecta ralentiza el tiempo.' },
        { user: 'Parry', text: 'Se puede hacer parry a todos sus ataques.' },
        { user: 'LootTrash', text: 'No dropea nada bueno.' },
        { user: 'XP', text: 'Da mucha experiencia.' },
        { user: 'Annoying', text: 'El enemigo más molesto del juego.' },
        { user: 'Flying', text: 'Es volador, usen armas a distancia.' },
        { user: 'Poison', text: 'Sus ataques envenenan.' },
        { user: 'Tanky', text: 'Tiene mucha vida.' },
        { user: 'Elite', text: 'Versión de élite, cuidado.' },
        { user: 'RespawnRate', text: 'Reaparece rápido.' },
        { user: 'MovePattern', text: 'Aprendan su patrón de ataque.' },
        { user: 'Run', text: 'Mejor correr que pelear.' }
    ],
    'Gestral perdido': [
        { user: 'Ghost', text: 'Es un fantasma amigable.' },
        { user: 'QuestStart', text: 'Te da una misión secundaria.' },
        { user: 'LostSoul', text: 'Busca a su familia.' },
        { user: 'RewardSoul', text: 'Te recompensa con ectoplasma.' },
        { user: 'NightSpawn', text: 'Solo aparece a medianoche.' },
        { user: 'Listen', text: 'Escucha su historia.' },
        { user: 'MapGhost', text: 'Aparece como un punto blanco en el mapa.' },
        { user: 'Follow', text: 'Síguelo hasta el tesoro.' },
        { user: 'Sad', text: 'Qué historia tan triste.' },
        { user: 'LoreGhost', text: 'Era un habitante de la antigua ciudad.' },
        { user: 'Interact', text: 'Interactúa con él.' },
        { user: 'NoAttack', text: 'No le ataques, es inmortal.' },
        { user: 'Peace', text: 'Ayúdale a descansar en paz.' },
        { user: 'CollectionSoul', text: 'Tienes que encontrar a los 20.' },
        { user: 'Dialogue', text: 'Tiene diálogos diferentes según tu personaje.' },
        { user: 'GuideGhost', text: 'Guía espiritual.' },
        { user: 'Transparent', text: 'Casi no se ve.' },
        { user: 'SoundGhost', text: 'Hace ruidos extraños.' },
        { user: 'Magic', text: 'Te enseña un hechizo nuevo.' },
        { user: 'AchievementGhost', text: 'Logro: "Cazafantasmas".' }
    ],
    'Comerciante': [
        { user: 'Scam', text: 'Es carísimo, un robo.' },
        { user: 'Discount', text: 'Si haces su quest te hace descuento.' },
        { user: 'RareStock', text: 'Vende items legendarios.' },
        { user: 'Restock', text: 'Repone stock cada 24h.' },
        { user: 'Buy', text: 'Cómprale las pociones.' },
        { user: 'Sell', text: 'Vende tu basura aquí.' },
        { user: 'DialogueShop', text: 'Tiene diálogos graciosos.' },
        { user: 'LocationShop', text: 'Se mueve de sitio.' },
        { user: 'SecretShop', text: 'Tienda secreta.' },
        { user: 'UpgradeShop', text: 'Puede mejorar tus armas.' },
        { user: 'CurrencyShop', text: 'Solo acepta monedas de oro.' },
        { user: 'Outfit', text: 'Vende skins.' },
        { user: 'LimitedItem', text: '¡Comprad el anillo antes de que se agote!' },
        { user: 'Personality', text: 'Me cae bien este NPC.' },
        { user: 'Rob', text: 'No se le puede robar.' },
        { user: 'MusicShop', text: 'La música de la tienda es pegadiza.' },
        { user: 'LoreMerchant', text: 'Viene de tierras lejanas.' },
        { user: 'WelcomeShop', text: '¡Bienvenido forastero!' },
        { user: 'ExitShop', text: 'Vuelva pronto.' },
        { user: 'TradeRoute', text: 'Parte de la ruta de comercio.' }
    ],
    'Misión secundaria': [
        { user: 'LongQuest', text: 'Esta misión es larguísima.' },
        { user: 'RewardQuest', text: 'La recompensa vale la pena.' },
        { user: 'FetchQuest', text: 'Otra misión de recadero...' },
        { user: 'StoryLore', text: 'Expande mucho el lore.' },
        { user: 'Choice', text: 'Tus decisiones importan.' },
        { user: 'Fail', text: 'Se puede fallar si muere el NPC.' },
        { user: 'TimeSensitive', text: 'Hazla antes del boss final.' },
        { user: 'FunnyQuest', text: 'Misión muy divertida.' },
        { user: 'BugQuest', text: 'Está bugueada, no me deja entregarla.' },
        { user: 'GuideQuest', text: 'Mirad la guía para el puzzle.' },
        { user: 'HiddenQuest', text: 'Muy difícil de encontrar el inicio.' },
        { user: 'CharacterDev', text: 'Desarrolla al personaje secundario.' },
        { user: 'XPQuest', text: 'Mucha experiencia.' },
        { user: 'Chain', text: 'Es la primera de una cadena de misiones.' },
        { user: 'BossQuest', text: 'Termina con un mini-jefe.' },
        { user: 'ItemReq', text: 'Necesitas 10 plumas para completarla.' },
        { user: 'Backstory', text: 'Te cuenta el pasado de Gustave.' },
        { user: 'MapMarkerQuest', text: 'Sigue el marcador azul.' },
        { user: 'Optional', text: 'Es totalmente opcional.' },
        { user: 'MustDo', text: 'Recomendadísima.' }
    ],
    'Interactuable': [
        { user: 'Lever', text: 'Tira de la palanca.' },
        { user: 'Button', text: 'Pulsa el botón.' },
        { user: 'Read', text: 'Lee el cartel.' },
        { user: 'Open', text: 'Abre la puerta.' },
        { user: 'Examine', text: 'Examina el objeto.' },
        { user: 'Push', text: 'Empuja la caja.' },
        { user: 'Sit', text: 'Puedes sentarte en el banco.' },
        { user: 'Pet', text: '¡Puedes acariciar al perro!' },
        { user: 'Light', text: 'Enciende la antorcha.' },
        { user: 'Break', text: 'Rompe el jarrón.' },
        { user: 'Talk', text: 'Habla con la gente.' },
        { user: 'Eat', text: 'Come la comida de la mesa.' },
        { user: 'Drink', text: 'Bebe del pozo.' },
        { user: 'Sleep', text: 'Duerme en la cama.' },
        { user: 'Play', text: 'Toca el piano.' },
        { user: 'Turn', text: 'Gira la válvula.' },
        { user: 'Climb', text: 'Sube la escalera.' },
        { user: 'Hide', text: 'Escóndete en el armario.' },
        { user: 'Loot', text: 'Saquea el cuerpo.' },
        { user: 'Inspect', text: 'Inspecciona las huellas.' }
    ],
    'Bajo el agua': [
        { user: 'Oxygen', text: 'Cuidado con la barra de oxígeno.' },
        { user: 'Swim', text: 'Controles de nado un poco toscos.' },
        { user: 'Blur', text: 'Se ve borroso.' },
        { user: 'Fish', text: 'Hay peces.' },
        { user: 'Deep', text: 'No bajes demasiado.' },
        { user: 'TreasureWater', text: 'Cofre hundido.' },
        { user: 'SpeedSwim', text: 'Usa las aletas para ir más rápido.' },
        { user: 'EnemyWater', text: 'Tiburones.' },
        { user: 'Breath', text: 'Sal a respirar.' },
        { user: 'CaveWater', text: 'Cueva submarina.' },
        { user: 'LightWater', text: 'Está muy oscuro.' },
        { user: 'Beautiful', text: 'El arrecife es precioso.' },
        { user: 'Current', text: 'La corriente te empuja.' },
        { user: 'CombatWater', text: 'No puedes atacar bajo el agua.' },
        { user: 'SecretWater', text: 'Túnel secreto.' },
        { user: 'Bubble', text: 'Busca burbujas para aire.' },
        { user: 'Dive', text: 'Mantén cuadrado para bucear.' },
        { user: 'LootWater', text: 'Restos de un naufragio.' },
        { user: 'Clear', text: 'Agua cristalina.' },
        { user: 'PhysicsWater', text: 'Buenas físicas de agua.' }
    ],

    // --- GENÉRICOS ---
    'Area': [
        { user: 'ZoneMaster', text: 'Esta zona es laberíntica, sigan las marcas amarillas en el suelo.' },
        { user: 'Environmental', text: 'Lleven protección contra veneno, el pantano te drena la vida.' },
        { user: 'GrappleHook', text: 'Zona vertical. Preparen el gancho y miren hacia arriba.' },
        { user: 'Ambush', text: 'Cuidado con las estatuas, cobran vida cuando les das la espalda.' },
        { user: 'BeautyScenery', text: 'El estilo art déco de este nivel es impresionante.' },
        { user: 'Framerate', text: 'Bajones de FPS en PS5 en esta parte por tanta partícula.' },
        { user: 'ShortCut', text: 'Rompan los tablones de madera para conectar con el inicio.' },
        { user: 'EnemyType', text: 'Aquí solo salen enemigos voladores, equipen armas de rango.' },
        { user: 'NightCycle', text: 'Esta área cambia completamente si vienen de noche.' },
        { user: 'SoundDesign', text: 'Jueguen con cascos, se escuchan pasos antes de ver a los enemigos.' },
        { user: 'LostExplorer', text: 'Me perdí 2 horas aquí. El mapa no ayuda mucho en interiores.' },
        { user: 'LoreWall', text: 'Miren los frescos en las paredes, explican el origen de la Pintora.' },
        { user: 'PuzzleArea', text: 'Hay que alinear los 3 espejos para abrir la puerta principal.' },
        { user: 'WeatherEffect', text: 'La lluvia reduce la efectividad de los hechizos de fuego aquí.' },
        { user: 'StealthSection', text: 'Es mejor pasar agachado, son demasiados enemigos para pelear.' },
        { user: 'PhotoOp', text: 'La iluminación aquí es perfecta para capturas.' },
        { user: 'Verticality', text: 'Si caen al vacío no mueren, pero tienen que subir todo de nuevo.' },
        { user: 'SecretRoom', text: 'Detrás de la cascada siempre hay algo. Clásico.' },
        { user: 'DangerLevel', text: 'Zona de nivel 30+. Si son nivel 20, huyan.' },
        { user: 'Architect', text: 'El diseño de nivel recuerda mucho a Bioshock Infinite.' }
    ],
    'Punto de descanso': [
        { user: 'SavePoint', text: 'Último descanso antes del boss. Preparen pociones.' },
        { user: 'CampfireSong', text: 'Aquí pueden ver la cinemática opcional si hablan con Lune.' },
        { user: 'FarmSpot', text: 'Los enemigos de la sala contigua dan 200XP y mueren de un golpe.' },
        { user: 'RelaxChill', text: 'La música de esta zona segura es lo mejor del juego.' },
        { user: 'Blacksmith', text: 'Hay un yunque al lado para mejorar armas sin volver a la base.' },
        { user: 'FastTravel', text: 'Ojo, el viaje rápido está bloqueado desde aquí hasta terminar el capítulo.' },
        { user: 'StoryTrigger', text: 'Al descansar aquí avanza la historia y pierden las misiones secundarias de la zona.' },
        { user: 'MerchantNearby', text: 'El vendedor ambulante aparece aquí los viernes.' },
        { user: 'HealerTip', text: 'Recuperen el maná aquí, los bichos que siguen resisten físico.' },
        { user: 'NoTurningBack', text: 'Punto de no retorno. Guarden en otro slot.' },
        { user: 'LevelUp', text: 'Buen sitio para probar combos nuevos con el dummy de entrenamiento.' },
        { user: 'ViewPoint', text: 'Saquen el modo foto, las vistas de Saisto desde aquí son brutales.' },
        { user: 'SafetyFirst', text: 'Zona libre de ataques de la Pintora (por ahora).' },
        { user: 'Crafting', text: 'Hay muchos materiales de crafteo alrededor de la hoguera.' },
        { user: 'LoreBook', text: 'Lean el libro sobre la mesa antes de irse.' },
        { user: 'CozyVibes', text: 'Me quedaría a vivir en este checkpoint.' },
        { user: 'RespawnHell', text: 'Si mueren en el boss reaparecen aquí, el camino es largo. Corran.' },
        { user: 'Achievement', text: 'Descansar en todos los puntos da un trofeo de plata.' },
        { user: 'PartyChat', text: 'Nuevos diálogos de relación disponibles entre Gustave y Maelle.' },
        { user: 'HiddenPath', text: 'Hay una escalera de mano detrás de la tienda de campaña.' }
    ],
    'default': [
        { user: 'System', text: 'Selecciona una categoría específica para ver tips de la comunidad.' },
        { user: 'CommunityBot', text: 'Haz clic en este banner para ver todos los comentarios disponibles.' },
        { user: 'ModTeam', text: 'Recordad mantener el respeto en los comentarios.' },
        { user: 'InfoBot', text: 'Los datos se actualizan en tiempo real con la base de datos de la wiki.' },
        { user: 'TipsBot', text: '¿Atascado? Busca el icono de "Guía" en el menú lateral.' },
        { user: 'Welcome', text: 'Bienvenido al mapa interactivo de Clair Obscur: Expedition 33.' },
        { user: 'UpdateLog', text: 'Nuevos marcadores añadidos tras el parche 1.02.' },
        { user: 'DevTeam', text: 'Gracias por reportar los errores del mapa.' },
        { user: 'AdAdmin', text: 'Únete a nuestro Discord para coordinar partidas.' },
        { user: 'SpoilerBot', text: 'Cuidado: Los comentarios pueden contener spoilers de la trama.' },
        { user: 'FilterTip', text: 'Usa los filtros de la izquierda para limpiar el mapa.' },
        { user: 'MobileUser', text: 'La versión móvil funciona mejor en horizontal.' },
        { user: 'SearchBot', text: 'Puedes buscar objetos específicos en la barra superior.' },
        { user: 'Legend', text: 'Los iconos dorados representan objetos legendarios.' },
        { user: 'Help', text: 'Si encuentras un error, contáctanos en soporte.' },
        { user: 'NewFeature', text: '¡Ahora puedes marcar los objetos como encontrados!' },
        { user: 'DailyTip', text: 'Recuerda guardar la partida manualmente a menudo.' },
        { user: 'MapVersion', text: 'Versión del mapa: 1.5.0 (Final Release).' },
        { user: 'Contributor', text: '¿Quieres ayudar a mapear? Escríbenos.' },
        { user: 'System', text: 'Cargando comentarios de la comunidad...' }
    ]
};

// Categorías. Llevan un emoji para desmarcarse. Seleccionados con IA.
const CATEGORY_STYLES = {
    'Ubicación':         { emoji: '📍', color: '#ecf0f1' },
    'Location':          { emoji: '📍', color: '#ecf0f1' },
    'Área':              { emoji: '🗺️', color: '#c5a059' },
    'Area':              { emoji: '🗺️', color: '#c5a059' },
    'Punto de descanso': { emoji: '🔥', color: '#e67e22' },
    'Atajo':             { emoji: '⛓️', color: '#95a5a6' },
    'Al mundo superior': { emoji: '🚪', color: '#f1c40f' },
    'To Overworld':      { emoji: '🚪', color: '#f1c40f' },
    'Garfio':            { emoji: '🪝', color: '#bdc3c7' },
    'Cuerda':            { emoji: '🧶', color: '#d35400' },
    'Interactuable':     { emoji: '✋', color: '#1abc9c' },
    'Tesoro':            { emoji: '💰', color: '#f1c40f' },
    'Treasure':          { emoji: '💰', color: '#f1c40f' },
    'Bajo el agua':      { emoji: '🤿', color: '#3498db' },
    'Disco de música':   { emoji: '🎵', color: '#e91e63' },
    'Diario':            { emoji: '📔', color: '#8e44ad' },
    'Pictos':            { emoji: '🖼️', color: '#27ae60' },
    'Objeto de misión':  { emoji: '🗝️', color: '#e67e22' },
    'Arma':              { emoji: '⚔️', color: '#c0392b' },
    'Tinte':             { emoji: '🧪', color: '#9b59b6' },
    'Jaula de pintura':  { emoji: '🐦', color: '#f1c40f' },
    'Chroma':            { emoji: '🟣', color: '#8e44ad' },
    'Catalyst':          { emoji: '⚗️', color: '#2980b9' }, 
    'Catalizador':       { emoji: '⚗️', color: '#2980b9' },
    'Lumina':            { emoji: '💎', color: '#3498db' },
    'Recoat':            { emoji: '🖌️', color: '#16a085' },
    'Repintar':          { emoji: '🖌️', color: '#16a085' },
    'Enemy':             { emoji: '💀', color: '#7f8c8d' },
    'Enemigo':           { emoji: '💀', color: '#7f8c8d' },
    'Story Boss':        { emoji: '👹', color: '#c0392b' },
    'Jefe de historia':  { emoji: '👹', color: '#c0392b' },
    'Jefe opcional':     { emoji: '👺', color: '#d35400' },
    'Jefe mundial':      { emoji: '🐲', color: '#8e44ad' },
    'Gestral perdido':   { emoji: '👻', color: '#bdc3c7' },
    'Comerciante':       { emoji: '⚖️', color: '#f39c12' },
    'Misión secundaria': { emoji: '📜', color: '#2ecc71' },
    'Punto de interés':  { emoji: '⭐', color: '#f1c40f' },
    'default':           { emoji: '📍', color: '#ffffff' }
};

const DEFAULT_VISIBLE = ['Área', 'Punto de descanso', 'Jefe', 'Boss'];

//Funciones del mapa.

const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -3,
    maxZoom: 2,
    zoomControl: false
});
L.control.zoom({ position: 'topright' }).addTo(map);

const bounds = [[0, 0], [CONFIG.imageHeight, CONFIG.imageWidth]];
L.imageOverlay('MAPA_CLAIR_OBSCUR_FINAL.jpg', bounds).addTo(map);
map.fitBounds(bounds);

// Utils

function latLonToImagePixels(lat, lon) {
    const n = Math.pow(2, CONFIG.zoom);
    const x_global = ((lon + 180) / 360) * n * CONFIG.tileSize;
    const latRad = lat * Math.PI / 180;
    const mercN = Math.log(Math.tan((Math.PI / 4) + (latRad / 2)));
    const y_global = (1 - (mercN / Math.PI)) / 2 * n * CONFIG.tileSize;
    const x_local = x_global - (CONFIG.tileStartX * CONFIG.tileSize);
    const y_local = y_global - (CONFIG.tileStartY * CONFIG.tileSize);
    return [CONFIG.imageHeight - y_local, x_local];
}

function getStyle(title) {
    if (!title) return CATEGORY_STYLES['default'];
    for (const key in CATEGORY_STYLES) {
        if (title.includes(key)) return CATEGORY_STYLES[key];
    }
    if (title.includes("Jefe")) return CATEGORY_STYLES['Story Boss'];
    if (title.includes("Boss")) return CATEGORY_STYLES['Story Boss'];
    return CATEGORY_STYLES['default'];
}

function parseMarkdown(text) {
    if (!text) return '';
    let html = text;
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="highlight">$1</strong>');
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');
    html = html.replace(/(\n|^)-\s/g, '<br><span style="color:#c5a059">•</span> ');
    html = html.replace(/\n/g, '<br>');
    return html;
}

function getRandomCTA() {
    return CTA_HOOKS[Math.floor(Math.random() * CTA_HOOKS.length)];
}

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

// Barra y carrusel

let currentTickerCategory = null;
let currentSlideIndex = 0; 
let carouselData = []; 

function updateTicker(categoryName, isChecked) {
    const tickerBar = document.getElementById('ticker-bar');
    const tickerContent = document.getElementById('ticker-content');
    
    if (!tickerBar || !tickerContent) return;

    if (!isChecked) {
        if (currentTickerCategory === categoryName) {
            tickerBar.style.display = 'none';
            document.body.classList.remove('ticker-active');
            currentTickerCategory = null;
        }
        return;
    }

    if (isChecked) {
        let comments = [];
        let foundKey = 'default';

        for (const key in COMMUNITY_COMMENTS) {
            if (categoryName.includes(key)) {
                comments = COMMUNITY_COMMENTS[key];
                foundKey = categoryName; 
                break;
            }
        }

        if (comments.length === 0) return;

        currentTickerCategory = categoryName;
        tickerBar.style.display = 'block';
        document.body.classList.add('ticker-active');

        let tickerHTML = '';
        comments.forEach(c => {
            const shortText = truncateText(c.text, 80);
            tickerHTML += `<div class="ticker-item"><i class="fas fa-comment"></i> <strong>${c.user}:</strong> ${shortText}</div>`;
        });
        
        tickerContent.innerHTML = tickerHTML + tickerHTML + tickerHTML + tickerHTML;
        
        tickerBar.onclick = () => openCarouselModal(foundKey, comments);
    }
}

function openCarouselModal(title, comments) {
    const modal = document.getElementById('comments-modal');
    const titleEl = document.getElementById('modal-category-title');
    const track = document.getElementById('carousel-track');
    const indicatorsContainer = document.getElementById('carousel-indicators');

    if (!modal || !track) return;

    titleEl.innerText = 'Tips de la comunidad: ' + title;

    const CHUNK_SIZE = 4;
    const chunks = [];
    
    for (let i = 0; i < comments.length; i += CHUNK_SIZE) {
        chunks.push(comments.slice(i, i + CHUNK_SIZE));
    }

    carouselData = chunks; 
    
    track.innerHTML = '';
    indicatorsContainer.innerHTML = '';

    chunks.forEach((group, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        
        let innerHTML = '<div class="slide-group-container">';
        
        group.forEach(c => {
            innerHTML += `
                <div class="slide-group-item">
                    <span class="slide-group-user">
                        <i class="fas fa-user-circle"></i> ${c.user}
                    </span>
                    <span>${c.text}</span>
                </div>
            `;
        });
        
        innerHTML += '</div>';
        slide.innerHTML = innerHTML;
        track.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = 'indicator';
        dot.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(dot);
    });

    goToSlide(0);
    modal.classList.add('active');
}

function goToSlide(index) {
    const track = document.getElementById('carousel-track');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!track || carouselData.length === 0) return;

    if (index < 0) {
        currentSlideIndex = carouselData.length - 1;
    } else if (index >= carouselData.length) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex = index;
    }

    const offset = currentSlideIndex * -100;
    track.style.transform = `translateX(${offset}%)`;

    indicators.forEach((dot, idx) => {
        if (idx === currentSlideIndex) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

//Procesamiento de datos del mapa

const layers = {};
const categoryMeta = {}; 
const locationsList = (typeof MAP_DATA !== 'undefined' && Array.isArray(MAP_DATA)) 
                      ? MAP_DATA 
                      : (typeof MAP_DATA !== 'undefined' && MAP_DATA.locations) 
                      ? MAP_DATA.locations 
                      : [];

locationsList.forEach(loc => {
    if (!loc.latitude || !loc.longitude) return;

    const catName = (loc.category && loc.category.title) ? loc.category.title : "Varios";
    const catId = (loc.category && loc.category.id) ? loc.category.id : 999;

    if (!layers[catId]) {
        layers[catId] = L.layerGroup();
        categoryMeta[catId] = { name: catName, count: 0 };
    }
    categoryMeta[catId].count++;

    const coords = latLonToImagePixels(loc.latitude, loc.longitude);
    const style = getStyle(catName);

    const emojiIcon = L.divIcon({
        className: 'emoji-marker',
        html: `<div style="font-size: 22px; cursor: pointer;">${style.emoji}</div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });

    let popupContent = `<div class="popup-container">`;
    popupContent += `<h4 style="border-bottom: 2px solid ${style.color}">${style.emoji} ${loc.title}</h4>`;
    
    if (loc.description) popupContent += `<div class="popup-desc">${parseMarkdown(loc.description)}</div>`;
    
    if (loc.media && loc.media.length) {
        const imgSrc = loc.media[0].file_name.startsWith('http') 
            ? loc.media[0].file_name 
            : `https://media.mapgenie.io/storage/media/${loc.media[0].file_name}`;
        popupContent += `<div class="popup-img-wrapper"><img src="${imgSrc}" loading="lazy"></div>`;
    }

    const randomHook = getRandomCTA();
    popupContent += `
        <div class="popup-footer">
            <hr class="popup-separator">
            <a href="${GUIDE_BASE_URL}" target="_blank" class="popup-cta">
                ${randomHook} <i class="fas fa-chevron-right"></i>
            </a>
        </div>
    `;
    popupContent += `</div>`;

    L.marker(coords, { icon: emojiIcon })
      .bindPopup(popupContent, { maxWidth: 320 })
      .addTo(layers[catId]);
});

//Menú y filtros

const menuContainer = document.getElementById('category-list');

if (menuContainer) {
    const sortedIds = Object.keys(categoryMeta).sort((a,b) => categoryMeta[a].name.localeCompare(categoryMeta[b].name));

    sortedIds.forEach(id => {
        const meta = categoryMeta[id];
        const isVisible = DEFAULT_VISIBLE.some(v => meta.name.includes(v));
        
        if (isVisible) map.addLayer(layers[id]);

        const item = document.createElement('div');
        item.className = 'menu-item';
        item.dataset.search = meta.name.toLowerCase();

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = isVisible;
        checkbox.id = `cat-${id}`;
        
        const style = getStyle(meta.name);
        
        const label = document.createElement('label');
        label.htmlFor = `cat-${id}`;
        label.innerHTML = `<span class="menu-emoji">${style.emoji}</span> ${meta.name} <span class="count-badge">${meta.count}</span>`;

        checkbox.addEventListener('change', (e) => {
            if(e.target.checked) {
                map.addLayer(layers[id]);
                updateTicker(meta.name, true);
            } else {
                map.removeLayer(layers[id]);
                updateTicker(meta.name, false);
            }
        });

        if (isVisible && !currentTickerCategory) {
            updateTicker(meta.name, true);
        }

        item.appendChild(checkbox);
        item.appendChild(label);
        menuContainer.appendChild(item);
    });

    // Buscador
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            document.querySelectorAll('.menu-item').forEach(item => {
                const categoryName = item.dataset.search;
                if (term === '' || categoryName.includes(term)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
}

//Interfaz, gestos

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    function toggleMenu(forceClose = false) {
        if (!sidebar || !overlay) return;
        if (forceClose || sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        } else {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        }
    }

    if (menuToggle) menuToggle.addEventListener('click', () => toggleMenu());
    if (overlay) overlay.addEventListener('click', () => toggleMenu(true));

    let sidebarTouchStart = 0;
    if (sidebar) {
        sidebar.addEventListener('touchstart', (e) => sidebarTouchStart = e.changedTouches[0].screenX, {passive: true});
        sidebar.addEventListener('touchend', (e) => {
            if (sidebarTouchStart - e.changedTouches[0].screenX > 50) toggleMenu(true);
        }, {passive: true});
    }

    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const closeBtn = document.getElementById('close-comments');

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlideIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlideIndex + 1));
    if (closeBtn) closeBtn.addEventListener('click', () => {
        document.getElementById('comments-modal').classList.remove('active');
    });

    const track = document.getElementById('carousel-track');
    let carouselTouchStart = 0;

    if (track) {
        track.addEventListener('touchstart', (e) => {
            carouselTouchStart = e.changedTouches[0].screenX;
        }, {passive: true});

        track.addEventListener('touchend', (e) => {
            const carouselTouchEnd = e.changedTouches[0].screenX;
            const diff = carouselTouchStart - carouselTouchEnd;

            if (diff > 50) {
                goToSlide(currentSlideIndex + 1);
            } 
            else if (diff < -50) {
                goToSlide(currentSlideIndex - 1);
            }
        }, {passive: true});
    }
});