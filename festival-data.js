// Mock Lowlands 2026 line-up + demo groep data.
// Tijden en namen komen uit het officiële LL26 blokkenschema (lowlands.nl/blokkenschema) —
// bedoeld als representatieve placeholder, later te vervangen door een live feed.
export const FESTIVAL = { name: 'Lowlands', year: 2026, start: '2026-08-21', end: '2026-08-23' };

export const DAYS = [
  { id: 'do', label: 'Donderdag', date: '20 aug' },
  { id: 'vr', label: 'Vrijdag', date: '21 aug' },
  { id: 'za', label: 'Zaterdag', date: '22 aug' },
  { id: 'zo', label: 'Zondag', date: '23 aug' },
];

export const STAGES = ['Alpha', 'Bravo', 'Heineken', 'Lima', 'India', 'X-Ray', 'Hacienda'];

// Podiumkleuren afgeleid van de bestaande accent/neutral kleurset (geen nieuwe kleuren).
export const STAGE_COLORS = {
  'Alpha': 'var(--color-accent-400)',
  'Bravo': 'var(--color-accent-500)',
  'Heineken': 'var(--color-accent-600)',
  'Lima': 'var(--color-accent-700)',
  'India': 'var(--color-neutral-400)',
  'X-Ray': 'var(--color-neutral-300)',
  'Hacienda': 'var(--color-accent-300)',
  'Tent': 'var(--color-neutral-500)',
  'Adonis': 'var(--color-neutral-500)',
  'Armadillow': 'var(--color-neutral-600)',
};

// Eigen, vereenvoudigde silhouetten per podium (geen getraceerde plattegronden) — puur als
// visuele indicatie van vorm, voor de "waar sta je" check-in tekening.
export const STAGE_SHAPES = {
  'Alpha': 'polygon(4% 0%, 96% 0%, 96% 100%, 4% 100%)',
  'Bravo': 'polygon(30% 0%, 70% 0%, 70% 35%, 100% 35%, 100% 65%, 70% 65%, 70% 100%, 30% 100%, 30% 65%, 0% 65%, 0% 35%, 30% 35%)',
  'Heineken': 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
  'Lima': 'polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%)',
  'India': 'polygon(35% 0%, 65% 0%, 100% 85%, 50% 100%, 0% 85%)',
  'X-Ray': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  'Hacienda': 'polygon(20% 0%, 80% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 30%)',
};

// Terrein-kaart posities (%) - overeenkomstig de aangeleverde plattegrond-afbeelding.
export const CHECKIN_ZONES = [
  { id: 'lima', label: 'Lima', x: 38, y: 8 },
  { id: 'heineken', label: 'Heineken', x: 7, y: 17 },
  { id: 'alpha', label: 'Alpha', x: 78, y: 42 },
  { id: 'xray', label: 'X-Ray', x: 41, y: 49 },
  { id: 'hacienda', label: 'Hacienda', x: 24, y: 51 },
  { id: 'armadillow', label: 'Armadillow', x: 31, y: 63 },
  { id: 'india', label: 'India', x: 43, y: 65 },
  { id: 'bravo', label: 'Bravo', x: 32, y: 82 },
  { id: 'adonis', label: 'Adonis', x: 44, y: 79 },
  { id: 'tent', label: 'Tent', x: 88, y: 92 },
];
export const DAY_SPAN = { startMin: 11.5 * 60, endMin: 29 * 60 };

// Elk item: [start, eind, naam] — exacte tijden van het officieel gepubliceerde blokkenschema (clashfinder.com/m/lowlands2026).
const RAW = {
  do: {
    Alpha: [], Bravo: [], Heineken: [], Lima: [], India: [], 'X-Ray': [], Hacienda: [],
  },
  vr: {
    Alpha: [['14:00', '15:00', 'Amyl And The Sniffers'], ['16:00', '17:00', 'Antoon'], ['18:15', '19:15', 'Kneecap'], ['20:30', '21:45', 'Parcels'], ['22:40', '00:00', 'New Wave']],
    Bravo: [['13:00', '14:00', 'Nusantara Beat'], ['15:00', '15:45', 'Adéla'], ['17:00', '18:00', 'Nu Genea Live Band'], ['19:15', '20:15', 'Willem'], ['21:30', '22:30', 'Viagra Boys'], ['23:00', '00:30', 'S-Candalo'], ['00:30', '02:00', 'Chloé Caillet'], ['02:00', '03:30', 'Ben UFO'], ['03:30', '05:00', 'Identified Patient']],
    Heineken: [['13:15', '14:15', 'Skye Newman'], ['15:15', '16:15', 'Leisure'], ['17:15', '18:15', 'JPEGMAFIA'], ['19:30', '20:30', 'Blood Orange'], ['21:45', '23:00', 'Richie Hawtin Dex Efx X0X'], ['00:00', '04:00', 'Basshall: Kybba, Tribal Kush & Nems']],
    Lima: [['12:15', '13:15', 'Romy Liz Rose'], ['14:15', '15:15', 'Susobrino'], ['16:15', '17:15', 'Dove Ellis'], ['18:20', '19:20', 'Ana Frango Elétrico'], ['20:30', '21:30', 'Zeyne'], ['22:30', '23:30', 'Fulu Miziki'], ['00:00', '03:00', 'Het Alternatief']],
    India: [['11:30', '12:30', 'Yoga'], ['14:00', '15:00', 'Jet Van Der Steen'], ['16:00', '17:00', 'Joy (Anonymous)'], ['18:15', '19:15', 'Cobrah'], ['20:30', '21:30', 'President'], ['22:30', '23:30', 'Fcukers'], ['00:00', '01:30', 'Mary Lake'], ['01:30', '03:00', 'Freddy K'], ['03:00', '04:30', 'Marrøn']],
    'X-Ray': [['12:30', '13:30', 'Chalk'], ['14:30', '15:20', 'Radio Z'], ['16:15', '17:15', 'Rose Gray'], ['18:00', '19:00', 'Sons'], ['19:50', '20:50', 'Gurriers'], ['21:45', '22:35', 'James K'], ['23:00', '00:00', 'Bassvictim'], ['00:30', '01:30', 'Violent Magic Orchestra'], ['02:00', '03:00', 'Kaboutertje Putlucht'], ['03:00', '04:30', 'Gysèle']],
    Hacienda: [['12:30', '16:30', 'Kim Josefine'], ['16:30', '18:30', 'Charmaine'], ['18:30', '20:30', 'Lashanti'], ['20:30', '22:00', 'Jea'], ['22:00', '23:30', 'Tins'], ['23:30', '01:00', 'Tienson'], ['01:00', '03:00', 'Dam Swindle'], ['03:00', '04:30', 'Laura Meester']],
  },
  za: {
    Alpha: [['14:00', '15:00', 'Kelis'], ['16:00', '17:00', 'S10'], ['18:15', '19:15', 'Major Lazer'], ['20:30', '21:30', 'Sombr'], ['22:30', '00:00', 'Tyler, The Creator']],
    Bravo: [['13:00', '14:00', 'José González'], ['15:00', '16:00', 'Zimmer90'], ['17:00', '18:00', 'IJsland'], ['19:15', '20:15', 'Geese'], ['21:15', '22:30', 'Eefje De Visser'], ['23:00', '00:30', 'Afra'], ['00:30', '02:00', 'Helena Hauff'], ['02:00', '03:30', 'Héctor Oaks'], ['03:30', '05:00', 'Boys Noize']],
    Heineken: [['11:30', '12:30', 'Soul Linedance Workshop door Summer Dance Forever'], ['13:15', '14:00', 'Milolaathetlukken'], ['15:15', '16:15', 'Ravyn Lenae'], ['17:15', '18:15', 'Pale Jay'], ['19:30', '20:30', 'Nia Archives'], ['21:45', '23:00', 'Royal Blood'], ['00:00', '01:00', 'Lambrini Girls'], ['01:30', '04:25', 'TLM']],
    Lima: [['12:15', '13:15', 'Latanya Alberto'], ['14:15', '15:15', 'Ko Shin Moon'], ['16:15', '17:15', 'Il Mago Del Gelato'], ['18:25', '19:25', 'Tyler Ballgame'], ['20:40', '21:40', 'Fauna'], ['22:30', '23:30', 'Ácido Pantera'], ['00:00', '03:00', 'Olá Brazil!']],
    India: [['11:30', '12:30', 'Yoga'], ['14:15', '15:00', 'Violet Grohl'], ['16:15', '17:00', 'Keo'], ['18:20', '19:10', 'Chloe Qisha'], ['20:30', '21:20', 'Zep'], ['22:30', '00:00', 'Maey'], ['00:00', '01:00', 'Smib'], ['01:00', '02:15', 'S!rene'], ['02:15', '03:30', 'Waxfiend'], ['03:30', '04:30', 'Nala']],
    'X-Ray': [['14:00', '14:50', 'Terzij De Horde'], ['15:40', '16:30', 'Guilt Trip'], ['17:10', '18:00', 'Sophia Stel'], ['18:45', '19:30', 'Tracey'], ['20:30', '21:10', 'Speed'], ['22:00', '23:30', 'Voices From The Lake'], ['23:30', '01:30', 'Skee Mask'], ['01:30', '03:00', 'DJRUM'], ['03:00', '04:45', 'Upsammy']],
    Hacienda: [['12:30', '16:30', 'Ketama Man'], ['16:30', '18:30', 'Folake'], ['18:30', '21:00', 'Yůsu'], ['21:00', '23:30', 'Fiesta Macumba Soundsystem'], ['23:30', '01:30', 'Rockefellababe'], ['01:30', '03:00', 'Tera Kòrá'], ['03:00', '04:30', 'Lamsi']],
  },
  zo: {
    Alpha: [['13:30', '14:30', 'Noord Nederlands Orkest'], ['15:30', '16:30', 'Hermanos Gutiérrez'], ['17:30', '18:30', 'Maribou State'], ['19:30', '20:30', 'Turnstile'], ['21:30', '23:00', 'Lorde']],
    Bravo: [['12:30', '13:30', 'Steel Pulse'], ['14:30', '15:30', 'Sophie Straat'], ['16:30', '17:30', 'Celeste'], ['18:30', '19:30', '2hollis'], ['20:30', '21:30', 'Clipse'], ['23:00', '00:30', 'Saidah'], ['00:30', '02:00', 'Benny Rodrigues'], ['02:00', '03:30', 'Kettama'], ['03:30', '05:00', 'Nene H']],
    Heineken: [['12:45', '13:45', 'Merijn Scholten'], ['14:45', '15:45', 'Buraka Som Sistema'], ['16:45', '17:45', 'Wunderhorse'], ['18:45', '19:45', 'Dijon'], ['20:45', '21:45', 'Floating Points (Live)'], ['23:00', '03:00', 'Iconic']],
    Lima: [['12:00', '13:00', 'Politie Warnsveld'], ['13:45', '14:45', 'Anaiis'], ['15:50', '16:40', 'Erin LeCount'], ['17:45', '18:45', 'El Pony Pisador'], ['19:45', '20:45', 'Bassolino'], ['21:45', '22:45', 'Compagnia La Giostra'], ['23:15', '03:00', 'Vlooiencircus']],
    India: [['11:30', '12:30', 'Yoga'], ['13:30', '14:30', 'Brother Wallace'], ['15:30', '16:30', 'Dikke'], ['17:30', '18:30', 'Maruja'], ['19:30', '20:30', 'Naomi Sharon'], ['21:45', '22:45', 'Sor'], ['23:15', '00:30', 'Flava D'], ['00:30', '02:00', 'Skream & Benga'], ['02:00', '03:30', 'Andromedik'], ['03:30', '04:30', 'Tantu Beats']],
    'X-Ray': [['12:45', '13:30', 'Teen Mortgage'], ['14:45', '15:15', 'Worldpeace DMT'], ['15:20', '15:50', 'The Femcels'], ['16:45', '17:40', 'Jane Remover'], ['18:30', '19:15', 'Teen Jesus And The Jean Teasers'], ['20:15', '21:10', 'Ninajirachi'], ['22:00', '23:00', 'Geordie Greep'], ['23:15', '04:45', 'This Must Be The Pace With Theo Parrish']],
    Hacienda: [['12:30', '16:30', 'Abiba Sokoto B2B Pelanoir'], ['16:30', '18:30', 'Eileen'], ['18:30', '20:30', 'Shady Lady'], ['20:30', '22:30', 'Kingdom Sound'], ['22:30', '00:30', 'AK Soundsystem'], ['00:30', '02:30', 'Deejay Abstract'], ['02:30', '04:30', 'Yucky']],
  },
};

const SLUGS = {
  'Amyl And The Sniffers': 'amyl-and-the-sniffers', 'Antoon': 'antoon', 'Kneecap': 'kneecap', 'Parcels': 'parcels', 'New Wave': 'new-wave',
  'Nusantara Beat': 'nusantara-beat', 'Adéla': 'adela', 'Nu Genea Live Band': 'nu-genea-live-band', 'Willem': 'willem', 'Viagra Boys': 'viagra-boys',
  'S-Candalo': 's-candalo', 'Chloé Caillet': 'chloe-caillet', 'Ben UFO': 'ben-ufo', 'Identified Patient': 'identified-patient',
  'Skye Newman': 'skye-newman', 'Leisure': 'leisure', 'JPEGMAFIA': 'jpegmafia', 'Blood Orange': 'blood-orange',
  'Richie Hawtin Dex Efx X0X': 'richie-hawtin-dex-efx-x0x', 'Basshall: Kybba, Tribal Kush & Nems': 'basshall-kybba-tribal-kush-nems',
  'Romy Liz Rose': 'romy-liz-rose', 'Susobrino': 'susobrino', 'Dove Ellis': 'dove-ellis', 'Ana Frango Elétrico': 'ana-frango-eletrico',
  'Zeyne': 'zeyne', 'Fulu Miziki': 'fulu-miziki', 'Het Alternatief': 'het-alternatief',
  'Jet Van Der Steen': 'jet-van-der-steen', 'Joy (Anonymous)': 'joy-anonymous', 'Cobrah': 'cobrah', 'President': 'president',
  'Fcukers': 'fcukers', 'Mary Lake': 'mary-lake', 'Freddy K': 'freddy-k', 'Marrøn': 'marron',
  'Chalk': 'chalk', 'Radio Z': 'radio-z', 'Rose Gray': 'rose-gray', 'Sons': 'sons', 'Gurriers': 'gurriers', 'James K': 'james-k',
  'Bassvictim': 'bassvictim', 'Violent Magic Orchestra': 'violent-magic-orchestra', 'Kaboutertje Putlucht': 'kaboutertje-putlucht', 'Gysèle': 'gysele',
  'Kim Josefine': 'kim-josefine', 'Charmaine': 'charmaine', 'Lashanti': 'lashanti', 'Jea': 'jea', 'Tins': 'tins', 'Tienson': 'tienson',
  'Dam Swindle': 'dam-swindle', 'Laura Meester': 'laura-meester',
  'Kelis': 'kelis', 'S10': 's10', 'Major Lazer': 'major-lazer', 'Sombr': 'sombr', 'Tyler, The Creator': 'tyler-the-creator',
  'José González': 'jose-gonzalez', 'Zimmer90': 'zimmer90', 'IJsland': 'ijsland', 'Geese': 'geese', 'Eefje De Visser': 'eefje-de-visser',
  'Afra': 'afra', 'Helena Hauff': 'helena-hauff', 'Héctor Oaks': 'hector-oaks', 'Boys Noize': 'boys-noize',
  'Milolaathetlukken': 'milolaathetlukken', 'Ravyn Lenae': 'ravyn-lenae', 'Pale Jay': 'pale-jay', 'Nia Archives': 'nia-archives',
  'Royal Blood': 'royal-blood', 'Lambrini Girls': 'lambrini-girls', 'TLM': 'tlm',
  'Latanya Alberto': 'latanya-alberto', 'Ko Shin Moon': 'ko-shin-moon', 'Il Mago Del Gelato': 'il-mago-del-gelato', 'Tyler Ballgame': 'tyler-ballgame',
  'Fauna': 'fauna', 'Ácido Pantera': 'acido-pantera', 'Olá Brazil!': 'ola-brazil',
  'Violet Grohl': 'violet-grohl', 'Keo': 'keo', 'Chloe Qisha': 'chloe-qisha', 'Zep': 'zep', 'Maey': 'maey', 'Smib': 'smib',
  'S!rene': 'sirene', 'Waxfiend': 'waxfiend', 'Nala': 'nala',
  'Terzij De Horde': 'terzij-de-horde', 'Guilt Trip': 'guilt-trip', 'Sophia Stel': 'sophia-stel', 'Tracey': 'tracey', 'Speed': 'speed',
  'Voices From The Lake': 'voices-from-the-lake', 'Skee Mask': 'skee-mask', 'DJRUM': 'djrum', 'Upsammy': 'upsammy',
  'Ketama Man': 'ketama-man', 'Folake': 'folake', 'Yůsu': 'yusu-', 'Fiesta Macumba Soundsystem': 'fiesta-macumba-soundsystem',
  'Rockefellababe': 'rockefellababe', 'Tera Kòrá': 'tera-kora', 'Lamsi': 'lamsi',
  'Noord Nederlands Orkest': 'noord-nederlands-orkest-', 'Hermanos Gutiérrez': 'hermanos-gutierrez', 'Maribou State': 'maribou-state',
  'Turnstile': 'turnstile', 'Lorde': 'lorde',
  'Steel Pulse': 'steel-pulse', 'Sophie Straat': 'sophie-straat', 'Celeste': 'celeste', '2hollis': '2hollis', 'Clipse': 'clipse',
  'Saidah': 'saidah', 'Benny Rodrigues': 'benny-rodrigues', 'Kettama': 'kettama', 'Nene H': 'nene-h',
  'Merijn Scholten': 'merijn-scholten', 'Buraka Som Sistema': 'buraka-som-sistema', 'Wunderhorse': 'wunderhorse', 'Dijon': 'dijon',
  'Floating Points (Live)': 'floating-points-live', 'Iconic': 'iconic',
  'Politie Warnsveld': 'politie-warnsveld', 'Anaiis': 'anaiis', 'Erin LeCount': 'erin-lecount', 'El Pony Pisador': 'el-pony-pisador',
  'Bassolino': 'bassolino', 'Compagnia La Giostra': 'compagnia-la-giostra', 'Vlooiencircus': 'vlooiencircus',
  'Brother Wallace': 'brother-wallace', 'Dikke': 'dikke', 'Maruja': 'maruja', 'Naomi Sharon': 'naomi-sharon', 'Sor': 'sor',
  'Flava D': 'flava-d', 'Skream & Benga': 'skream-benga', 'Andromedik': 'andromedik', 'Tantu Beats': 'tantu-beats',
  'Teen Mortgage': 'teen-mortgage', 'Worldpeace DMT': 'worldpeace-dmt', 'Jane Remover': 'jane-remover',
  'Teen Jesus And The Jean Teasers': 'teen-jesus-and-the-jean-teasers', 'Ninajirachi': 'ninajirachi', 'Geordie Greep': 'geordie-greep',
  'This Must Be The Pace With Theo Parrish': 'this-must-be-the-pace-with-theo-parrish',
  'Abiba Sokoto B2B Pelanoir': 'abiba-sokoto-b2b-pelanoir', 'Eileen': 'eileen', 'Shady Lady': 'shady-lady', 'Kingdom Sound': 'kingdomsound',
  'AK Soundsystem': 'ak-soundsystem', 'Deejay Abstract': 'deejay-abstract', 'Yucky': 'yucky',
};

const BIOS = {
  'Tyler, The Creator': 'Amerikaanse rapper, producer en Odd Future-oprichter; wisselt tussen scherpe hiphop en soulvolle songwriting.',
  'Lorde': 'Nieuw-Zeelandse singer-songwriter, doorgebroken met "Royals"; introspectieve pop met elektronische en orkestrale lagen.',
  'Turnstile': 'Amerikaanse band uit Baltimore die hardcore punk mixt met groove, melodie en shoegaze-invloeden.',
  'Royal Blood': 'Engels rockduo (bas/drums) bekend om zware riffs en arena-gerichte rock.',
  'Kelis': 'Amerikaanse zangeres, bekend van "Milkshake"; R&B met funk, soul en experimentele productie.',
  'S10': 'Nederlandse singer-songwriter, vertegenwoordigde Nederland op het Eurovisie Songfestival 2022 met "De Diepte".',
  'Major Lazer': 'Producentencollectief rond Diplo dat dancehall, reggaeton en EDM combineert.',
  'Sombr': 'Amerikaanse singer-songwriter met melancholische indie-pop en bedroom-pop invloeden.',
  'Viagra Boys': 'Zweedse post-punkband bekend om absurdistische teksten en rauwe live-energie.',
  'Blood Orange': 'Project van Dev Hynes; verfijnde R&B, funk en new wave-invloeden.',
  'JPEGMAFIA': 'Amerikaanse rapper en producer met experimentele, industriële hiphop.',
  'Amyl And The Sniffers': 'Australische punkband met rauwe energie en pubrock-invloeden.',
  'Kneecap': 'Iers (Belfast) hiphoptrio dat rapt in het Iers en Engels, politiek geladen en humoristisch.',
  'Parcels': 'Australische band gevestigd in Berlijn; funky disco-pop met gepolijste productie.',
  'Geordie Greep': 'Voormalig frontman van black midi; chaotische, jazzy art-rock als soloartiest.',
  'Jane Remover': 'Amerikaanse producer/artiest tussen hyperpop, shoegaze en digicore.',
  'Naomi Sharon': 'Nederlandse R&B-zangeres, getekend bij OVO Sound, bekend om warme, ingetogen soul.',
  'Clipse': 'Amerikaans rapduo (Pusha T & No Malice) uit Virginia, bekend om scherpe, coke-rap gerelateerde teksten.',
  '2hollis': 'Amerikaanse artiest die hyperpop, R&B en elektronische productie samensmelt.',
  'Celeste': 'Britse singer-songwriter met jazzy, soulvolle vocalen.',
  'Dijon': 'Amerikaanse singer-songwriter met ruwe, emotionele indie-soul.',
  'Floating Points (Live)': 'Project van Sam Shepherd; jazz-geïnspireerde elektronica, live uitgevoerd met band.',
  'Maribou State': 'Britse elektronische duo met melodieuze, downtempo dance.',
  'Hermanos Gutiérrez': 'Zwitsers-Ecuadoraans gitaarduo met instrumentale, westernachtige surfrock.',
  'Wunderhorse': 'Britse rockband met ruwe, emotionele gitaarmuziek.',
  'Nia Archives': 'Britse producer die jungle en drum \'n bass nieuw leven inblaast.',
  'Ravyn Lenae': 'Amerikaanse zangeres met dromerige, alternatieve R&B.',
  'Lambrini Girls': 'Britse punkband met feministische, confronterende teksten.',
  'Boys Noize': 'Duitse producer en dj, pionier in electro house.',
  'José González': 'Zweeds-Argentijnse singer-songwriter bekend om ingetogen akoestische gitaarmuziek.',
  'Skee Mask': 'Duitse producer met technisch verfijnde techno en drum \'n bass.',
  'DJRUM': 'Britse producer die jungle, techno en downtempo combineert.',
  'Helena Hauff': 'Duitse dj en producer bekend om ruwe, analoge electro en techno.',
  'Ben UFO': 'Brits dj, medeoprichter van Hessle Audio, bekend om eclectische bass-sets.',
  'Chloé Caillet': 'Frans-Amerikaanse dj/producer met energieke house en techno.',
  'Nu Genea Live Band': 'Italiaans producerduo dat Napolitaanse disco en Afro-invloeden live uitvoert met band.',
  'Steel Pulse': 'Britse reggaeband uit Birmingham, actief sinds de jaren 70, bekend om roots reggae met politieke boodschap.',
  'Speed': 'Australische hardcoreband met invloeden uit metal en straight-edge.',
  'Skream & Benga': 'Britse dj-duo, pioniers van dubstep in de jaren 2000.',
  'Flava D': 'Britse producer/dj gespecialiseerd in UK garage en bassline.',
  'Antoon': 'Vlaamse zanger die met aanstekelijke, ironische meezingpop uitgroeide tot een van de grootste live-acts van de Lage Landen.',
  'New Wave': 'Project rond een gevestigde Nederlandse artiest, hier onder tijdelijke naam met een verrassingsprogramma.',
  'Nusantara Beat': 'Collectief dat Indonesische ritmes en instrumenten samensmelt met eigentijdse dance- en bandmuziek.',
  'Adéla': 'Opkomende artiest met een sound tussen pop en elektronica, bekend om een intieme, sfeervolle live-uitvoering.',
  'Willem': 'Nederlandse artiest die met ontwapenende, persoonlijke teksten en eigenzinnige pop het publiek raakt.',
  'S-Candalo': 'Dj-project met een feestelijke, latin- en housegetinte set, gericht op een laat en uitgelaten publiek.',
  'Identified Patient': 'Nederlandse producer die harde techno en industrial combineert tot intense, rauwe live-sets.',
  'Skye Newman': 'Singer-songwriter met warme, ingetogen folkpop en persoonlijke songteksten.',
  'Leisure': 'Band met zonnige, funky pop-soul in de traditie van Australische groove-acts.',
  'Richie Hawtin Dex Efx X0X': 'Techno-pionier Richie Hawtin met een experimentele live-set rond drummachines en effecten.',
  'Basshall: Kybba, Tribal Kush & Nems': 'Bassmuziek-avond met dancehall-, dubstep- en soundsystem-invloeden van meerdere acts.',
  'Romy Liz Rose': 'Singer-songwriter met ingetogen, akoestisch getinte pop.',
  'Susobrino': 'Producer/dj met een eigenzinnige mix van cumbia, latin en elektronica.',
  'Dove Ellis': 'Opkomende zangeres met sfeervolle, alternatieve pop.',
  'Ana Frango Elétrico': 'Braziliaanse artiest die MPB, funk en psychedelica samenbrengt in kleurrijke liveshows.',
  'Zeyne': 'Zangeres met Arabisch-getinte pop en een krachtige, theatrale live-uitstraling.',
  'Fulu Miziki': 'Congolese band die zelfgebouwde instrumenten van gerecycled afval gebruikt voor explosieve, ritmische shows.',
  'Het Alternatief': 'Nederlandse formatie met eigenzinnige, alternatieve bandmuziek.',
  'Jet Van Der Steen': 'Nederlandse dj/producer met een herkenbare, dansvloergerichte housesound.',
  'Joy (Anonymous)': 'Anoniem dj-project gericht op pure, feestelijke housemuziek.',
  'Cobrah': 'Zweeds-Thaise popartiest met provocerende, hyperfeminiene club-pop.',
  'President': 'Artiest met een genre-overstijgende, clubgerichte sound.',
  'Fcukers': 'New Yorkse band met rauwe, dansbare post-punk en electroclash-invloeden.',
  'Mary Lake': 'Artiest met donkere, elektronische popmuziek.',
  'Freddy K': 'Italiaanse techno-dj bekend om harde, hypnotiserende sets.',
  'Marrøn': 'Nederlandse dj/producer met melodieuze techno en house.',
  'Chalk': 'Britse rockband met scherpe, energieke gitaarmuziek.',
  'Radio Z': 'Band met ruwe, garage-georiënteerde rockmuziek.',
  'Rose Gray': 'Britse zangeres met euforische, dancevloer-geïnspireerde pop.',
  'Sons': 'Band met opzwepende indierock en pop-invloeden.',
  'Gurriers': 'Ierse postpunkband met rauwe energie en scherpe maatschappijkritiek.',
  'James K': 'Artiest met experimentele, ambient-geïnspireerde elektronica.',
  'Bassvictim': 'Producer/dj gericht op zware, bassgedreven clubmuziek.',
  'Violent Magic Orchestra': 'Japans collectief dat noise, hardcore en industriële elektronica combineert tot chaotische liveshows.',
  'Kaboutertje Putlucht': 'Nederlandse ondergrondse dj met een eigenzinnige, humoristische aanpak.',
  'Gysèle': 'Opkomende dj/producer met een eclectische, dansvloergerichte sound.',
  'Kim Josefine': 'Zangeres met ingetogen, persoonlijke pop.',
  'Charmaine': 'Artiest met soulvolle, R&B-geïnspireerde muziek.',
  'Lashanti': 'Zangeres met een mix van R&B, soul en pop.',
  'Jea': 'Artiest met eigenzinnige, genre-overstijgende popmuziek.',
  'Tins': 'Dj/producer met een dansvloergerichte, elektronische sound.',
  'Tienson': 'Producer met melodieuze house- en technotracks.',
  'Dam Swindle': 'Nederlands duo bekend om funky, disco-geïnspireerde house.',
  'Laura Meester': 'Nederlandse dj met een gevoel voor melodieuze, sfeervolle house en techno.',
  'Zimmer90': 'Nederlandse band met eigenzinnige indierock.',
  'IJsland': 'Nederlandse band met melancholische, sfeervolle indierock.',
  'Geese': 'New Yorkse rockband bekend om chaotische, experimentele liveshows.',
  'Eefje De Visser': 'Nederlandse singer-songwriter met poëtische teksten en sfeervolle, elektronisch getinte pop.',
  'Afra': 'Dj/producer met een warme, melodieuze housesound.',
  'Héctor Oaks': 'Spaanse techno-dj bekend om harde, industriële sets.',
  'Milolaathetlukken': 'Nederlandse artiest met eigenzinnige, ontwapenende pop.',
  'Pale Jay': 'Artiest met retro-geïnspireerde soul en funk.',
  'TLM': 'Dj/producer gericht op donkere, ritmische clubmuziek.',
  'Latanya Alberto': 'Zangeres met soulvolle, ingetogen songs.',
  'Ko Shin Moon': 'Frans duo dat psychedelische rock combineert met Midden-Oosterse invloeden.',
  'Il Mago Del Gelato': 'Project met een speelse, kleurrijke live-uitvoering.',
  'Tyler Ballgame': 'Artiest met alternatieve, gitaargedreven muziek.',
  'Fauna': 'Band met sfeervolle, organische indiemuziek.',
  'Ácido Pantera': 'Mexicaanse band die punk, cumbia en rock samensmelt tot een energieke liveshow.',
  'Olá Brazil!': 'Programma-onderdeel met Braziliaanse ritmes, samba en carnavalsenergie.',
  'Violet Grohl': 'Opkomende zangeres met alternatieve pop.',
  'Keo': 'Artiest met eigenzinnige, genre-overstijgende muziek.',
  'Chloe Qisha': 'Britse zangeres met zelfverzekerde, alternatieve pop.',
  'Zep': 'Artiest met dansbare, elektronisch getinte pop.',
  'Maey': 'Zangeres met ingetogen, persoonlijke songs.',
  'Smib': 'Artiest met eigenzinnige, clubgerichte elektronica.',
  'S!rene': 'Zangeres met sfeervolle, elektronische pop.',
  'Waxfiend': 'Producer/dj met een duistere, bassgedreven sound.',
  'Nala': 'Opkomende zangeres met soulvolle pop.',
  'Terzij De Horde': 'Nederlandse band met intense, poëtische postrock.',
  'Guilt Trip': 'Band met scherpe, energieke punkrock.',
  'Sophia Stel': 'Zangeres met alternatieve, gitaargedreven pop.',
  'Tracey': 'Band met dromerige, gitaargedreven indierock.',
  'Voices From The Lake': 'Italiaans techno-duo bekend om diepe, hypnotiserende dancefloor-tracks.',
  'Upsammy': 'Nederlandse producer met organische, ritmisch complexe elektronica.',
  'Ketama Man': 'Producer/dj met een warme, funky housesound.',
  'Folake': 'Zangeres met soulvolle, Afro-geïnspireerde pop.',
  'Yůsu': 'Artiest met melodieuze, sfeervolle elektronica.',
  'Fiesta Macumba Soundsystem': 'Soundsystem gericht op Latijns-Amerikaanse ritmes en carnavaleske dansmuziek.',
  'Rockefellababe': 'Dj met een eclectische, feestelijke housesound.',
  'Tera Kòrá': 'Project dat West-Afrikaanse ritmes combineert met eigentijdse dansmuziek.',
  'Lamsi': 'Dj/producer met een melodieuze, dromerige housesound.',
  'Noord Nederlands Orkest': 'Nederlands symfonieorkest dat klassieke werken en eigentijdse programmering combineert.',
  'Sophie Straat': 'Nederlandse rapper/spoken word-artiest met scherpe, maatschappijkritische teksten.',
  'Saidah': 'Zangeres met soulvolle, ingetogen R&B.',
  'Benny Rodrigues': 'Nederlandse dj/producer met funky, disco-geïnspireerde house.',
  'Kettama': 'Ierse producer/dj bekend om energieke, garage- en housegeïnspireerde tracks.',
  'Nene H': 'Dj met een duistere, ritmisch intense technosound.',
  'Merijn Scholten': 'Nederlandse artiest met eigenzinnige, akoestisch getinte muziek.',
  'Buraka Som Sistema': 'Portugees collectief bekend als pionier van kuduro, een energieke mix van Afrikaanse ritmes en elektronica.',
  'Iconic': 'Dj-programma gericht op feestelijke, herkenbare dancetracks.',
  'Politie Warnsveld': 'Lokale Nederlandse formatie die met humor en een onbekommerde liveshow een kleiner podium kleurt.',
  'Anaiis': 'Londense zangeres met sensuele, jazzy R&B.',
  'Erin LeCount': 'Zangeres met ingetogen, soulvolle songs.',
  'El Pony Pisador': 'Spaans collectief bekend om uitbundige, feestelijke fanfare-achtige optredens.',
  'Bassolino': 'Dj/producer gericht op bassgedreven clubmuziek.',
  'Compagnia La Giostra': 'Italiaans theatergezelschap dat circusachtige, theatrale performances brengt.',
  'Vlooiencircus': 'Nederlandse formatie met een speelse, kleinschalige liveshow.',
  'Brother Wallace': 'Artiest met soulvolle, gospel-geïnspireerde muziek.',
  'Dikke': 'Nederlandse artiest met eigenzinnige, dansbare muziek.',
  'Maruja': 'Britse (Manchester) band die postpunk, jazz en noise combineert tot intense liveshows.',
  'Sor': 'Artiest met donkere, elektronische muziek.',
  'Andromedik': 'Dj/producer met een ritmisch complexe, bassgedreven sound.',
  'Tantu Beats': 'Producer met Afro-geïnspireerde beats en ritmes.',
  'Teen Mortgage': 'Amerikaanse band met ruige, noisy garage-rock.',
  'Worldpeace DMT': 'Project met psychedelische, experimentele elektronica.',
  'Teen Jesus And The Jean Teasers': 'Australische punkband met feministische, energieke liveshows.',
  'Ninajirachi': 'Australische producer met kleurrijke, hyperpop-geïnspireerde elektronica.',
  'This Must Be The Pace With Theo Parrish': 'Dj-avond rond huisproducer Theo Parrish met diepe, soulvolle house.',
  'Abiba Sokoto B2B Pelanoir': 'Back-to-back dj-set met een eclectische, wereldse dancesound.',
  'Eileen': 'Zangeres met ingetogen, alternatieve pop.',
  'Shady Lady': 'Dj/producer met een duistere, clubgerichte housesound.',
  'Kingdom Sound': 'Soundsystem gericht op reggae, dub en bassmuziek.',
  'AK Soundsystem': 'Soundsystem met een mix van reggae, dancehall en bass.',
  'Deejay Abstract': 'Dj met een eclectische, genre-overstijgende platenkeuze.',
  'Yucky': 'Producer/dj met een speelse, bassgedreven sound.',
};

function toMinutes(hhmm) {
  let [h, m] = hhmm.split(':').map(Number);
  if (h < 10) h += 24;
  return h * 60 + m;
}
function label(mins) {
  let h = Math.floor(mins / 60) % 24, m = mins % 60;
  return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
}

export const ACTS = [];
DAYS.forEach(day => {
  STAGES.forEach(stage => {
    const slots = RAW[day.id][stage];
    slots.forEach(([startStr, endStr, name], i) => {
      const start = toMinutes(startStr);
      const end = toMinutes(endStr);
      ACTS.push({
        id: `${day.id}-${stage}-${i}`.toLowerCase().replace(/[^a-z0-9-]/g, ''),
        day: day.id, stage, name,
        start, end,
        startLabel: label(start), endLabel: label(end),
        url: SLUGS[name] ? `https://lowlands.nl/acts/${SLUGS[name]}/` : null,
        bio: BIOS[name] || null,
      });
    });
  });
});

export const AVATAR_COLORS = [
  '#ec3013', '#e0672f', '#c9843f', '#a89050', '#c65a6e',
  '#b14a8f', '#8b5fb0', '#5f7bb5', '#4a9aa0', '#5aa06e',
];

const SEED_NAMES = [
  'Sanne', 'Daan', 'Fleur', 'Milan', 'Noor', 'Bram', 'Lotte', 'Sven',
  'Iris', 'Thijs', 'Femke', 'Rik', 'Sara', 'Joost', 'Anne', 'Wout',
  'Julia', 'Niels', 'Eva', 'Tom', 'Roos', 'Max',
];
export const SEED_PEOPLE = SEED_NAMES.map((name, i) => ({
  id: 'p' + i, name, pin: '1234', color: AVATAR_COLORS[i % AVATAR_COLORS.length],
}));

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function generateSeedVotes() {
  const rand = mulberry32(42);
  const votes = {};
  SEED_PEOPLE.forEach(person => { votes[person.id] = {}; });
  ACTS.forEach(act => {
    const heat = rand();
    SEED_PEOPLE.forEach(person => {
      const r = rand();
      let choice;
      if (heat > 0.7) choice = r < 0.55 ? 'wil' : r < 0.85 ? 'twijfel' : 'sla';
      else if (heat > 0.35) choice = r < 0.3 ? 'wil' : r < 0.65 ? 'twijfel' : 'sla';
      else choice = r < 0.12 ? 'wil' : r < 0.4 ? 'twijfel' : 'sla';
      if (r < 0.08) return;
      votes[person.id][act.id] = choice;
    });
  });
  return votes;
}
