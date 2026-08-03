export interface TrekkingRegion {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  description: string;
  longDescription: string;
  highlights: string[];
  stats: {
    maxAltitude: number;
    minDuration: number;
    maxDuration: number;
    difficulty: string;
  };
  bestSeason: string[];
  /* keyword matched against Package.destination */
  packageKeyword: string;
}

export const TREKKING_REGIONS: TrekkingRegion[] = [
  {
    id: "inner-himalaya",
    slug: "inner-himalaya",
    name: "Pithoragarh Inner Himalaya",
    subtitle: "Spiritual summits of Chhota Kailash",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Parvati_Kund_at_Adi-Kailash.jpg",
    description:
      "The remote inner Himalayan valleys of Pithoragarh district shelter two of India's most sacred pilgrimages — Adi Kailash and Om Parvat — amid landscapes that remain largely untouched by mass tourism.",
    longDescription:
      "Tucked along India's border with Tibet in the far east of Uttarakhand, the Pithoragarh Inner Himalaya is the home of Chhota Kailash (6,310 m) — revered as India's own sacred Kailash — and the peak Om Parvat (6,191 m), where a natural OM symbol appears each year in the snowfield at around 4,400 m. The route passes through the trading town of Dharchula, the ancient Shauka village of Gunji, and the high-altitude meadow of Jolingkong. Inner Line Permits are required, keeping visitor numbers low and the experience genuinely remote. For those seeking a pilgrimage with military-grade logistics, this region is unmatched.",
    highlights: [
      "Adi Kailash (Chhota Kailash, 6,310 m) — India's sacred equivalent of Kailash Mansarovar",
      "Parvati Kund — high-altitude glacial lake of immense spiritual significance",
      "Natural OM symbol visible in the snowfield of Om Parvat",
      "Gunji village — ancient Shauka trading community on the Kali river",
      "Nabhidhang meadow at 4,266 m — best viewpoint for Om Parvat",
      "Inner Line Permit required — naturally limiting crowds",
    ],
    stats: {
      maxAltitude: 6310,
      minDuration: 8,
      maxDuration: 12,
      difficulty: "Moderate–Strenuous",
    },
    bestSeason: ["May", "June", "September", "October"],
    packageKeyword: "Pithoragarh",
  },
  {
    id: "darma-valley",
    slug: "darma-valley",
    name: "Darma Valley",
    subtitle: "Uttarakhand's last unspoilt frontier",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Kumaon_Himalaya_1.jpg",
    description:
      "Threading through ancient Shauka villages to the foot of the Panchachuli massif, the Darma Valley is one of the most remote and dramatically beautiful treks in the entire Himalayan range.",
    longDescription:
      "The Darma Valley runs north from Dharchula in Pithoragarh, following the Dharma River through a string of semi-nomadic Shauka villages — Dugtu, Baaling, Sela, Nagling — each perched on cliff-edges with stupas and prayer flags overhead. The people here traditionally traded between India and Tibet, a heritage visible in their distinctive architecture and culture. The valley culminates below the Panchachuli group, five summits rising like a giant's knuckles above 6,300 m. Because access requires an Inner Line Permit and involves long approach drives on remote mountain roads, the valley sees a fraction of the visitors that comparable Nepal treks receive — making it one of the great undiscovered treks of the Himalaya.",
    highlights: [
      "Panchachuli massif — five summits between 6,334 m and 6,904 m",
      "Ancient Shauka villages: Dugtu, Baaling, Sela, Nagling",
      "Dharma River gorge — dramatic high-altitude canyon scenery",
      "Tibetan-influenced architecture and culture",
      "Inner Line Permit area — authentically remote",
      "Maximum altitude ~4,620 m — achievable without technical climbing",
    ],
    stats: {
      maxAltitude: 4620,
      minDuration: 9,
      maxDuration: 12,
      difficulty: "Challenging",
    },
    bestSeason: ["June", "July", "August", "September"],
    packageKeyword: "Darma",
  },
  {
    id: "munsiyari",
    slug: "munsiyari",
    name: "Munsiyari & Panchachuli",
    subtitle: "Gateway to the five-peaked massif",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Panchachuli_Peaks.jpg",
    description:
      "Munsiyari is the last road-head before the high Himalaya in eastern Kumaon — a frontier town that delivers some of the most accessible yet spectacular mountain scenery in India, including the Panchachuli Base Camp trek.",
    longDescription:
      "Perched at 2,200 m with unobstructed views of the Panchachuli peaks, Munsiyari has long been known to trekkers as Uttarakhand's 'mini Kashmir.' From here, the Panchachuli Base Camp Trek (also called the Milam Glacier approach) climbs through oak and rhododendron forest, past the traditional village of Khalia Top, to the base of Panchachuli II (6,904 m) — the tallest of the five peaks and one of India's most technically demanding unclimbed summits. The route involves crossing high passes above 4,000 m and camping on moraines surrounded by 360-degree Himalayan panoramas. This is genuine expedition-style trekking at a tea-house-accessible level.",
    highlights: [
      "Panchachuli Base Camp at 4,260 m — beneath five towering summits",
      "Khalia Top viewpoint (3,500 m) — panoramic Himalayan sunrise",
      "Birthi Falls and Milam Glacier approach trails",
      "Munsiyari town at 2,200 m — stunning views from the start",
      "Himalayan flora: rhododendron, oak, and alpine meadows",
      "Shauka cultural heritage of the Johar Valley",
    ],
    stats: {
      maxAltitude: 4260,
      minDuration: 8,
      maxDuration: 12,
      difficulty: "Moderate–Challenging",
    },
    bestSeason: ["April", "May", "June", "September", "October"],
    packageKeyword: "Panchachuli",
  },
  {
    id: "kumaon-cultural",
    slug: "kumaon-cultural",
    name: "Kumaon Cultural Circuit",
    subtitle: "Ancient temples and Himalayan heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Complete_pic_of_Jageshwar_temple.jpg",
    description:
      "Kumaon's Himalayan foothills shelter an extraordinary concentration of ancient temples, medieval forts, and living cultural traditions that stretch back more than a thousand years.",
    longDescription:
      "The Kumaon Hills of Uttarakhand are home to a remarkable density of historical and spiritual sites — from the 9th-century Katarmal Sun Temple near Almora to the haunting carved stone temples at Jageshwar (one of the 12 Jyotirlinga sites) and Baijnath, to the beautiful Nanda Devi temples at Almora and Munsiyari. The region was historically the heartland of the Chand Rajas, whose medieval kingdom left behind an architectural legacy scattered across the hills. Unlike the high-altitude treks, the Kumaon Cultural Circuit is accessible year-round, travels through tea-garden valleys and oak-forested ridgelines, and offers an intimate encounter with a Himalayan civilization that has developed entirely independently of Nepal or Tibet.",
    highlights: [
      "Jageshwar Dham — ancient Jyotirlinga temple complex in cedar forest",
      "Katarmal Sun Temple (9th century) — rare Himalayan solar shrine",
      "Almora — historic Chand Raja hill town with mountain panoramas",
      "Patal Bhuvaneshwar — sacred underground limestone cave temple",
      "Baijnath — 12th-century Shiva temple on the Gomti river",
      "Local crafts: Aipan art, copperwork, and Kumaoni weaving",
    ],
    stats: {
      maxAltitude: 2412,
      minDuration: 6,
      maxDuration: 10,
      difficulty: "Easy",
    },
    bestSeason: ["October", "November", "December", "January", "February", "March", "April"],
    packageKeyword: "Kumaon",
  },

  /* ─── Garhwal sub-regions ──────────────────────────────────── */
  {
    id: "harshil-gangotri",
    slug: "harshil-gangotri",
    name: "Harshil Valley & Gangotri",
    subtitle: "Sacred source of the Ganga",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gangotri_Temple.jpg/1280px-Gangotri_Temple.jpg",
    description:
      "The upper Bhagirathi valley — sleepy Harshil village amid apple orchards, the sacred Gangotri Dham, and the trek to Gaumukh where the Ganga literally begins.",
    longDescription:
      "The Bhagirathi valley climbs north from Uttarkashi past deodar forests and hot springs to Harshil (2,620 m) — a hidden alpine village famous for its apple orchards, Bhotia culture, and unobstructed views of the Bhagirathi peaks. Further up-valley, Gangotri (3,048 m) is one of the four Char Dham shrines and the spiritual source of the Ganga. Trekkers can push on to Gaumukh, the physical snout of the Gangotri glacier at 3,892 m — the actual birthplace of the river. This is the gentler, more accessible face of Garhwal high-mountain adventure.",
    highlights: [
      "Gangotri Dham — sacred Char Dham shrine at 3,048 m",
      "Harshil Valley — apple orchards, deodar forest, Bhotia culture",
      "Gaumukh glacier snout — actual source of the Ganga (3,892 m)",
      "Bhagirathi peaks (I, II, III) and Sudarshan Parvat",
      "Bagori village with its distinctive wooden temple",
      "Gangnani hot springs on the drive up",
    ],
    stats: {
      maxAltitude: 3892,
      minDuration: 6,
      maxDuration: 8,
      difficulty: "Easy",
    },
    bestSeason: ["May", "June", "September", "October"],
    packageKeyword: "Harshil",
  },
  {
    id: "kyarkoti-lake",
    slug: "kyarkoti-lake",
    name: "Kyarkoti Lake",
    subtitle: "Hidden turquoise lake in the Bhagirathi basin",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
    description:
      "A high glacial lake at ~4,600 m tucked into a hanging valley beneath Sudarshan Parvat — one of Garhwal's genuinely offbeat high-altitude treks.",
    longDescription:
      "Kyarkoti Lake sits high above the Bhagirathi valley in a moraine amphitheatre framed by Sudarshan Parvat and the Bhagirathi peaks. The trail climbs from the ridge village of Raithal through oak and rhododendron forest, onto open alpine meadow, and finally across ice-polished moraine to the turquoise lake basin. Because access requires several days of trekking and the route sees only a handful of groups each season, this is one of the great undiscovered high-altitude treks of Garhwal.",
    highlights: [
      "Turquoise glacial lake at ~4,600 m",
      "Direct views of Sudarshan Parvat and the Bhagirathi group",
      "Trek through Gangotri National Park meadows and moraines",
      "Very few visitors per season — genuinely off-grid",
      "Traditional Garhwali ridge villages of Raithal and Barsu",
      "Rich alpine flora in June — potentilla, iris, primula",
    ],
    stats: {
      maxAltitude: 4600,
      minDuration: 7,
      maxDuration: 9,
      difficulty: "Challenging",
    },
    bestSeason: ["May", "June", "September", "October"],
    packageKeyword: "Kyarkoti",
  },
  {
    id: "gidara-bugyal",
    slug: "gidara-bugyal",
    name: "Gidara Bugyal",
    subtitle: "Garhwal's largest untouched alpine meadow",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    description:
      "A vast alpine meadow ridge above Uttarkashi with 360° Himalayan views of Bandarpunch, Kalanag, and the Gangotri group — and a fraction of the crowds of nearby Dayara.",
    longDescription:
      "Gidara Bugyal stretches for kilometres across a ridge at ~3,600 m — one of the largest continuous alpine meadows in Uttarakhand. The trail climbs from the roadhead village of Bhukki through oak and rhododendron forest to Devkyara meadow, then up to the open ridge with unobstructed views of the Bandarpunch massif, Kalanag, Srikanth, and the Gangotri peaks. Because it lies just a few kilometres from the far more famous Dayara Bugyal but requires an extra day of approach, Gidara sees a fraction of the traffic — making it one of Garhwal's finest undiscovered meadow treks.",
    highlights: [
      "Garhwal's largest continuous alpine meadow (bugyal)",
      "360° views: Bandarpunch (6,316 m), Kalanag, Srikanth, Gangotri group",
      "Fraction of the visitor traffic of Dayara or Kedarkantha",
      "Traditional Anwal shepherd camps along the route",
      "Rhododendron and oak forest on the ascent",
      "Alpine wildflower carpets in June",
    ],
    stats: {
      maxAltitude: 3600,
      minDuration: 6,
      maxDuration: 8,
      difficulty: "Moderate",
    },
    bestSeason: ["April", "May", "June", "September", "October"],
    packageKeyword: "Gidara",
  },
  {
    id: "dayara-bugyal",
    slug: "dayara-bugyal",
    name: "Dayara Bugyal",
    subtitle: "The classic 28 km² meadow beneath Bandarpunch",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=85",
    description:
      "Garhwal's beloved alpine meadow — a rolling 28 km² of open grassland at 3,639 m with panoramic views of Bandarpunch and Draupadi ka Danda. Family-friendly year-round.",
    longDescription:
      "Dayara Bugyal is one of the most spectacular and accessible alpine meadows in the entire Indian Himalaya. A rolling 28 km² grassland at 3,639 m, ringed by the summits of the Bandarpunch massif (6,316 m), Draupadi ka Danda, Srikanth, and Jaonli. The trail climbs from the traditional Garhwali village of Raithal through oak and rhododendron forest onto the meadow — accessible enough for first-time trekkers and families, dramatic enough that experienced trekkers return year after year. Also a spectacular winter snow trek (Dec–Feb) when the meadow transforms into a vast white expanse.",
    highlights: [
      "28 km² of rolling alpine meadow at 3,639 m",
      "Bandarpunch (6,316 m), Draupadi ka Danda, Srikanth, Jaonli panorama",
      "Suitable for first-time trekkers and families (min age 8+)",
      "Winter snow trek option — December to February",
      "Rich birdlife: monal, koklass pheasant, Himalayan griffon",
      "Traditional Garhwali villages of Raithal and Barsu",
    ],
    stats: {
      maxAltitude: 3639,
      minDuration: 5,
      maxDuration: 7,
      difficulty: "Easy",
    },
    bestSeason: ["April", "May", "June", "September", "October", "December", "January", "February"],
    packageKeyword: "Dayara",
  },
];
