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
  /* ─── Kumaon (Uttarakhand) ──────────────────────────────── */
  {
    id: "kumaon",
    slug: "kumaon",
    name: "Kumaon",
    country: "Uttarakhand, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Adi_Kailash.jpg",
    tagline: "Sacred Peaks · Inner Line Frontier",
    packageCount: 5,
    featured: true,
    packageKeyword: "Kumaon",
    description:
      "The eastern half of Uttarakhand — a land of sacred peaks, ancient temples, and Inner Line frontier valleys along the Tibet border. Home to Adi Kailash, Om Parvat, and the Panchachuli massif.",
    longDescription:
      "Kumaon stretches from the lower Himalayan foothills of Almora and Jageshwar to the towering border ranges of Pithoragarh — where India, Nepal, and Tibet meet. This is the land of Chhota Kailash (6,310 m), Om Parvat with its natural ॐ snow formation, and the five-summit Panchachuli massif. Inner Line Permits are required for the highest routes, keeping visitor numbers low and the wilderness genuinely remote. Beneath the peaks, the Kumaon hills shelter one of India's densest concentrations of ancient temples — Jageshwar, Baijnath, Patal Bhuvaneshwar — and the medieval hill capital of Almora.",
    highlights: [
      "Adi Kailash (Chhota Kailash, 6,310 m) — India's sacred equivalent of Kailash Mansarovar",
      "Om Parvat — natural ॐ symbol in snow, visible from Nabhidhang (4,266 m)",
      "Darma Valley — remote Shauka villages beneath the Panchachuli massif",
      "Panchachuli Base Camp — five Himalayan summits above 6,300 m",
      "Kumaon temple circuit: Jageshwar, Baijnath, Katarmal, Patal Bhuvaneshwar",
      "Inner Line Permit zones — authentically off the tourist grid",
    ],
    quickFacts: [
      { label: "Region", value: "Eastern Uttarakhand" },
      { label: "Nearest Rail", value: "Kathgodam / Haldwani" },
      { label: "Nearest Airport", value: "Pantnagar (PGH)" },
      { label: "Permits", value: "Inner Line Permit for border routes" },
      { label: "Max Altitude", value: "6,310 m (Adi Kailash)" },
      { label: "Time Zone", value: "UTC+5:30" },
    ],
    bestSeason: ["April", "May", "June", "September", "October"],
    climate:
      "The high-altitude routes (Adi Kailash, Om Parvat, Panchachuli) run May–June and September–October when passes are clear. The Kumaon Cultural Circuit runs year-round — winter (Nov–Feb) delivers the sharpest peak views from the temple ridgelines. Avoid the monsoon (Jul–Aug) for the border valleys.",
  },

  /* ─── Garhwal (Uttarakhand) ─────────────────────────────── */
  {
    id: "garhwal",
    slug: "garhwal",
    name: "Garhwal",
    country: "Uttarakhand, India",
    image: "/packages/harshil-valley.jpg",
    tagline: "Sacred Sources · Alpine Meadows",
    packageCount: 4,
    featured: true,
    packageKeyword: "Garhwal",
    description:
      "The western half of Uttarakhand — the source of the Ganga, the four Char Dham shrines, and some of the most beautiful alpine meadow (bugyal) trekking in the entire Himalaya.",
    longDescription:
      "Garhwal is where the Ganga is born — at the Gangotri glacier snout of Gaumukh — and where the four sacred Char Dham (Yamunotri, Gangotri, Kedarnath, Badrinath) draw pilgrims by the millions each summer. Beyond the shrines, Garhwal shelters some of India's finest high-altitude meadow trekking: the vast bugyals of Dayara, Gidara, and Bedni, and the turquoise glacial lakes of the Bhagirathi and Yamuna headwaters. From the alpine village of Harshil to the remote Kyarkoti lake basin, this is a region where sacred geography and pristine wilderness overlap.",
    highlights: [
      "Harshil Valley & Gangotri — sacred source of the Ganga at 3,048 m",
      "Kyarkoti Lake — turquoise glacial lake in the Bhagirathi basin",
      "Gidara Bugyal — one of Garhwal's largest and least-visited alpine meadows",
      "Dayara Bugyal — panoramic 28 km² meadow with Bandarpunch views",
      "Char Dham circuit access — the four sacred Hindu shrines of Uttarakhand",
      "Bhagirathi peaks and the Gangotri National Park ecosystem",
    ],
    quickFacts: [
      { label: "Region", value: "Western Uttarakhand" },
      { label: "Nearest Rail", value: "Dehradun / Rishikesh" },
      { label: "Nearest Airport", value: "Jolly Grant, Dehradun (DED)" },
      { label: "Permits", value: "Forest permit for Gangotri National Park" },
      { label: "Max Altitude", value: "4,800 m+ (Kyarkoti approach)" },
      { label: "Time Zone", value: "UTC+5:30" },
    ],
    bestSeason: ["May", "June", "September", "October"],
    climate:
      "High meadows and glacial lake routes are best May–June (rhododendron bloom, snow melting) and September–October (post-monsoon clarity). Dayara Bugyal is also popular in winter (Dec–Feb) for snow trekking. Monsoon (Jul–Aug) closes most high-altitude routes; roads to Gangotri can be affected by landslides.",
  },
];
