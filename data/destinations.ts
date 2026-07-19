import type { Destination } from "@/types";

export interface DestinationDetail extends Destination {
  description: string;
  longDescription: string;
  highlights: string[];
  quickFacts: { label: string; value: string }[];
  bestSeason: string[];
  climate: string;
  /* keyword used to match packages: p.destination.includes(packageKeyword) */
  packageKeyword: string;
}

export const DESTINATIONS: DestinationDetail[] = [
  /* ─── Nepal ─────────────────────────────────────────────── */
  {
    id: "nepal",
    slug: "nepal",
    name: "Nepal",
    country: "Nepal",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    tagline: "Home of the Himalayas",
    packageCount: 42,
    featured: true,
    packageKeyword: "Nepal",
    description:
      "Nepal is the beating heart of Himalayan adventure — home to eight of the world's ten tallest peaks, ancient kingdoms, and a culture as layered and dramatic as its mountains.",
    longDescription:
      "Nepal is the definitive destination for anyone drawn to high mountains. Home to eight of the world's ten highest peaks — including Everest (8,849 m) — its landscapes range from the subtropical Terai jungles of Chitwan to the ice giants of the Khumbu. But Nepal isn't only about altitude: it's a country of medieval cities, living goddess traditions, and Sherpa, Gurung, and Tharu communities whose warmth is as legendary as the mountains themselves.",
    highlights: [
      "8 of the world's 10 highest peaks, including Everest",
      "UNESCO World Heritage Sites — Kathmandu Valley, Lumbini, Chitwan",
      "Sherpa, Gurung, Tamang — rich cultural diversity",
      "World-class trekking from Easy to Strenuous",
      "Chitwan & Bardia wildlife safaris",
      "Pokhara — adventure capital on a glacial lake",
    ],
    quickFacts: [
      { label: "Capital", value: "Kathmandu" },
      { label: "Currency", value: "Nepalese Rupee (NPR)" },
      { label: "Language", value: "Nepali (English widely spoken)" },
      { label: "Visa", value: "On arrival for most nationalities" },
      { label: "Time Zone", value: "UTC+5:45" },
      { label: "Electricity", value: "230V / 50Hz" },
    ],
    bestSeason: ["March", "April", "May", "October", "November"],
    climate:
      "The best trekking seasons are pre-monsoon (March–May) and post-monsoon (October–November). Skies are clear, trails are dry, and rhododendrons bloom in spring. Avoid June–September (monsoon) for high-altitude treks.",
  },

  /* ─── Bhutan ─────────────────────────────────────────────── */
  {
    id: "bhutan",
    slug: "bhutan",
    name: "Bhutan",
    country: "Bhutan",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    tagline: "Kingdom of Happiness",
    packageCount: 14,
    featured: true,
    packageKeyword: "Bhutan",
    description:
      "Bhutan measures success in Gross National Happiness, not GDP. A Himalayan kingdom that chose to remain closed to mass tourism, it rewards the few who visit with pristine nature, living Buddhism, and a serenity few places on Earth can match.",
    longDescription:
      "Bhutan is the world's only carbon-negative country, and its government actively limits visitor numbers to protect its culture and environment. The result is a destination that feels genuinely untouched — ancient dzongs fortress-monasteries rising above rice-paddy valleys, monks debating philosophy in ornate courtyards, and the sacred Tiger's Nest Monastery clinging impossibly to a sheer cliff above Paro. Every visitor pays a Sustainable Development Fee that funds free healthcare, education, and environmental protection.",
    highlights: [
      "Tiger's Nest Monastery — Bhutan's most iconic site",
      "Punakha Dzong — fortress at the confluence of two rivers",
      "Strict sustainability — carbon negative country",
      "Gross National Happiness policy — unique governance model",
      "Vibrant Bhutanese festivals (Tshechu)",
      "Pristine alpine landscapes and black-necked cranes",
    ],
    quickFacts: [
      { label: "Capital", value: "Thimphu" },
      { label: "Currency", value: "Ngultrum (BTN), pegged to INR" },
      { label: "Language", value: "Dzongkha (English widely spoken)" },
      { label: "Visa", value: "Required — arranged through licensed operator" },
      { label: "SDF Fee", value: "USD 100/day (covers tourism levy)" },
      { label: "Time Zone", value: "UTC+6" },
    ],
    bestSeason: ["March", "April", "May", "September", "October", "November"],
    climate:
      "Spring (March–May) brings rhododendrons and clear skies. Autumn (September–November) is ideal for trekking and festivals. Winters are cold but festivals still occur. Avoid heavy monsoon rains in July–August.",
  },

  /* ─── Tibet ──────────────────────────────────────────────── */
  {
    id: "tibet",
    slug: "tibet",
    name: "Tibet",
    country: "China (Tibet AR)",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    tagline: "Roof of the World",
    packageCount: 8,
    featured: true,
    packageKeyword: "Tibet",
    description:
      "At an average elevation of 4,500 m, Tibet is the highest region on Earth — a windswept plateau of ancient monasteries, sacred lakes, and the northern face of Everest.",
    longDescription:
      "Tibet sits on a plateau so high that the world's tallest mountains rise from its edges as mere hills above the surrounding terrain. The Potala Palace in Lhasa, once the winter residence of the Dalai Lama, towers over a city where monks debate scripture in courtyards used for centuries. Namtso Lake shimmers turquoise at 4,718 m. And the northern face of Everest — less climbed, more remote, more dramatic than the Nepalese side — anchors the landscape with unmistakable gravity.",
    highlights: [
      "Potala Palace — former Dalai Lama winter residence",
      "Namtso Lake — sacred lake at 4,718 m",
      "Everest North Base Camp — quieter, more dramatic",
      "Jokhang Temple — holiest site in Tibetan Buddhism",
      "Ancient trade route monasteries",
      "Unique plateau wildlife: yaks, blue sheep, snow leopard (rare)",
    ],
    quickFacts: [
      { label: "Capital", value: "Lhasa" },
      { label: "Currency", value: "Chinese Yuan (CNY)" },
      { label: "Language", value: "Tibetan, Mandarin" },
      { label: "Visa", value: "China visa + Tibet Travel Permit required" },
      { label: "Avg Altitude", value: "4,500 m above sea level" },
      { label: "Time Zone", value: "UTC+8 (Beijing time)" },
    ],
    bestSeason: ["April", "May", "June", "September", "October"],
    climate:
      "April–June and September–October offer the clearest skies and most comfortable temperatures. July–August brings monsoon rains from the south. Winter (Nov–Feb) is extremely cold with limited access.",
  },

  /* ─── India ──────────────────────────────────────────────── */
  {
    id: "india",
    slug: "india",
    name: "India",
    country: "India",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    tagline: "Spice, Spirit & Splendour",
    packageCount: 16,
    featured: true,
    packageKeyword: "India",
    description:
      "From the high-altitude desert of Ladakh to the tropical temples of the south, India is a continent disguised as a country — ancient, chaotic, breathtaking, and utterly unforgettable.",
    longDescription:
      "India's Himalayan belt — stretching through Ladakh, Spiti, Uttarakhand, and Sikkim — offers some of the most dramatic and accessible high-altitude trekking outside Nepal. The Markha Valley trek in Ladakh crosses 5,000+ m passes through a Buddhist landscape that feels like Tibet was blended with the moon. Hemis National Park shelters the world's highest density of snow leopards. And iconic golden triangle of Delhi, Agra (Taj Mahal), and Jaipur combine seamlessly with a Himalayan extension.",
    highlights: [
      "Ladakh — 'Little Tibet' with Buddhist monasteries and high passes",
      "Taj Mahal — UNESCO World Heritage icon in Agra",
      "Spiti Valley — remote high-altitude desert trekking",
      "Valley of Flowers — UNESCO-listed Himalayan meadow",
      "Hemis National Park — snow leopard sightings",
      "Golden Triangle — Delhi, Agra, Jaipur cultural circuit",
    ],
    quickFacts: [
      { label: "Capital", value: "New Delhi" },
      { label: "Currency", value: "Indian Rupee (INR)" },
      { label: "Language", value: "Hindi, English + 21 regional languages" },
      { label: "Visa", value: "e-Visa available for most nationalities" },
      { label: "Time Zone", value: "UTC+5:30" },
      { label: "Best Entry", value: "Delhi or Mumbai international airports" },
    ],
    bestSeason: ["October", "November", "December", "January", "February", "March"],
    climate:
      "October–March is ideal for cultural tours and southern regions. For Himalayan trekking in Ladakh/Spiti, the window is June–September when high passes are snow-free. Avoid the Indo-Gangetic plains in May–June (extreme heat) and July–August (monsoon).",
  },
];
