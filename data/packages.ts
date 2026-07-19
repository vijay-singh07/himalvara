import type { Package } from "@/types";

/* ─── India Package Includes / Excludes ──────────────────────── */
const INDIA_TREK_INCLUDES = [
  "Return transport from Kathgodam / Haldwani (private AC vehicle)",
  "All accommodation — hotels in towns, tents / guesthouses on trail",
  "All meals during the tour — breakfast, lunch, and dinner",
  "Experienced English-speaking, government-certified guide",
  "Inner Line Permit and all forest / wildlife department permits",
  "Comprehensive first-aid kit and emergency oxygen",
  "Himalvara branded duffel bag",
  "All road tolls, parking, green tax, and driver allowances",
  "24 / 7 emergency rescue coordination",
];

const INDIA_TREK_EXCLUDES = [
  "Flights to Kathgodam / Pantnagar airport",
  "Travel and medical insurance (mandatory)",
  "Personal trekking gear and equipment",
  "Porter service (available locally at ₹500 / day)",
  "Personal expenses — beverages, laundry, phone charging",
  "Gratuities for guide and driver (recommended)",
  "Temple / puja fees and ritual donations",
  "Emergency helicopter evacuation (covered by rescue insurance)",
];

const INDIA_CULTURAL_INCLUDES = [
  "Return transport from Kathgodam / Haldwani (private AC vehicle)",
  "All accommodation — heritage hotels and comfortable guesthouses",
  "Breakfast and dinner throughout",
  "Experienced English-speaking cultural guide",
  "All entry fees to temples and sanctuaries",
  "Himalvara branded travel kit",
  "All road tolls, parking, and driver allowances",
];

const INDIA_CULTURAL_EXCLUDES = [
  "Flights to Kathgodam / Pantnagar airport",
  "Travel insurance (recommended)",
  "Lunches (flexibility for local exploration)",
  "Personal expenses and shopping",
  "Temple / puja fees and ritual donations",
  "Gratuities for guide and driver (recommended)",
];

/* ─── Active Packages ─────────────────────────────────────────── */
export const ALL_PACKAGES: Package[] = [

  /* ─────────────────────────────────────────────────────────── */
  /* 1. Adi Kailash Yatra                                        */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "adi-kailash",
    slug: "adi-kailash-yatra",
    title: "Adi Kailash Yatra",
    subtitle: "Journey to Chhota Kailash — India's answer to the sacred Mount Kailash",
    category: "Cultural Tour",
    destination: "Pithoragarh, Uttarakhand, India",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=85",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=85",
    ],
    duration: 9,
    difficulty: "Moderate",
    groupSize: { min: 1, max: 15 },
    altitude: 4378,
    price: 49999,
    priceNote: "Per person, from Kathgodam",
    rating: 4.9,
    reviewCount: 0,
    bestSeason: ["May", "June", "September", "October"],
    highlights: [
      "Darshan of Adi Kailash (Chhota Kailash) peak — 6,310 m",
      "Sacred Parvati Kund (Gauri Kund) at 4,378 m",
      "Drive through dramatic Kalapani and Lipulekh corridor",
      "Ancient Kali Mandir at Kalapani on the Indo-Nepal border",
      "Bhim ki Kheti meadow and Pandava legends",
      "Views of Kunti Parvat, Brahma Parvat, and Nanda Devi",
      "Remote Jolingkong valley with zero crowds",
    ],
    overview:
      "Adi Kailash — also known as Chhota Kailash — is a sacred Himalayan peak in the Pithoragarh district of Uttarakhand that mirrors the spiritual significance of Kailash Mansarovar in Tibet, without crossing an international border. The yatra takes you through the historic Kalapani corridor once disputed between India and Nepal, past the legendary Kali temple, and into the remote Jolingkong valley where the divine Parvati Kund sits beneath the towering face of Adi Kailash (6,310 m). Led by our veteran guides who know every kilometre of this sacred route, this is a journey where military precision meets Himalayan spirituality.",
    itinerary: [
      {
        day: 1,
        title: "Kathgodam → Almora → Pithoragarh (1,814 m)",
        description:
          "Depart Kathgodam at 6:00 AM. Drive through Bhimtal and Almora, stopping at the ancient Chitai Golu Devta Temple and Kasar Devi Temple. Arrive Pithoragarh by evening. Briefing with your guide, overnight stay.",
        accommodation: "Hotel, Pithoragarh",
        altitude: 1814,
      },
      {
        day: 2,
        title: "Pithoragarh → Dharchula (915 m)",
        description:
          "Morning drive (96 km, 4–5 hrs) along the Kali River — the natural border between India and Nepal — to the frontier town of Dharchula. Evening walk along the river, permit verification and documentation check.",
        accommodation: "Hotel, Dharchula",
        altitude: 915,
      },
      {
        day: 3,
        title: "Dharchula → Gunji (3,380 m)",
        description:
          "An epic drive through the restricted inner-line zone (106 km, 5–6 hrs). Pass through Budhi village, the dramatic Chiyalekh meadows with panoramic views of Api Himal and Namjing Parvat, the ancient village of Garbyang, and Napalchu before arriving at Gunji — your base for the yatra.",
        accommodation: "Guesthouse, Gunji",
        altitude: 3380,
      },
      {
        day: 4,
        title: "Acclimatisation — Gunji (3,380 m)",
        description:
          "Rest and acclimatise at Gunji. Morning visit to the ancient Gunji village temple. Afternoon hike to a local viewpoint for first views of Nabi Parvat and the Kali River gorge. Your veteran guide delivers an evening briefing on altitude awareness.",
        accommodation: "Guesthouse, Gunji",
        altitude: 3380,
        duration: 3,
      },
      {
        day: 5,
        title: "Day Excursion: Gunji → Kalapani → Nabhidhang (4,266 m) → Gunji",
        description:
          "Drive to Kalapani (22 km) — visit the historic Kali Mandir on the Indo-Nepal border. Continue to Nabhidhang (4,266 m) for views of Om Parvat and the Lipulekh ridge. Return to Gunji by evening. Total round trip 44 km.",
        accommodation: "Guesthouse, Gunji",
        altitude: 4266,
      },
      {
        day: 6,
        title: "Gunji → Nabi → Kutti → Jolingkong (4,378 m)",
        description:
          "Drive to Nabi village and Kutti (45 km), then a short walk into the sacred Jolingkong valley. The face of Adi Kailash (6,310 m) towers ahead. Set up camp, evening prayers at the small Shiva shrine.",
        accommodation: "Guesthouse / Camp, Jolingkong",
        altitude: 4378,
        distance: 4,
        duration: 3,
      },
      {
        day: 7,
        title: "Jolingkong — Adi Kailash Darshan · Parvati Kund (4,378 m)",
        description:
          "The spiritual heart of the yatra. Walk 2.5 km to the sacred Parvati Kund (Gauri Kund) — a glacial lake with a small Parvati temple on its banks. The snow-flanked face of Adi Kailash (Chhota Kailash) towers directly above. Further walk to Gauri Kund. Bhim ki Kheti meadow on the return. Evening aarti.",
        accommodation: "Guesthouse / Camp, Jolingkong",
        altitude: 4378,
        distance: 5,
        duration: 4,
      },
      {
        day: 8,
        title: "Jolingkong → Dharchula",
        description:
          "Return drive from Jolingkong through Kutti, Nabi, and Gunji to Dharchula. Farewell dinner by the Kali River.",
        accommodation: "Hotel, Dharchula",
        altitude: 915,
      },
      {
        day: 9,
        title: "Dharchula → Kathgodam · Departure",
        description:
          "Morning drive back to Kathgodam (200 km, 7–8 hrs) via Pithoragarh and Almora. Optional stop at Jageshwar Dham en route. Drop-off at Kathgodam railway station.",
        altitude: 554,
      },
    ],
    includes: INDIA_TREK_INCLUDES,
    excludes: INDIA_TREK_EXCLUDES,
    featured: true,
    popular: true,
    badge: "Spiritual",
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 2. Om Parvat Yatra                                          */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "om-parvat",
    slug: "om-parvat-yatra",
    title: "Om Parvat Yatra",
    subtitle: "Witness the divine ॐ symbol naturally etched in snow on a Himalayan peak",
    category: "Cultural Tour",
    destination: "Pithoragarh, Uttarakhand, India",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=85",
    ],
    duration: 8,
    difficulty: "Moderate",
    groupSize: { min: 1, max: 15 },
    altitude: 4266,
    price: 44999,
    priceNote: "Per person, from Kathgodam",
    rating: 4.9,
    reviewCount: 0,
    bestSeason: ["May", "June", "September", "October"],
    highlights: [
      "Darshan of Om Parvat from Nabhidhang (4,266 m)",
      "Natural ॐ snow formation visible on the peak face",
      "Historic Kali Mandir at Kalapani on the Indo-Nepal border",
      "Views of Nabi Parvat, Api Himal, and Namjing Parvat",
      "Vyash Gufa (cave of sage Vyasa) at Kalapani",
      "Dramatic Chiyalekh alpine meadows",
      "Restricted inner-line zone — rare access, zero crowds",
    ],
    overview:
      "Om Parvat (6,191 m) is one of the most spiritually charged mountains on Earth — its snow fields naturally form the sacred ॐ (Om) symbol, visible from the Nabhidhang viewpoint at 4,266 m. The yatra follows the same ancient pilgrimage corridor used by Kailash Mansarovar yatris, through the historic Kalapani valley on the Indo-Nepal border. This is a journey for those who seek the divine in the raw Himalayan wilderness.",
    itinerary: [
      {
        day: 1,
        title: "Kathgodam → Pithoragarh (1,814 m)",
        description:
          "Depart Kathgodam at 6:00 AM. Drive via Bhimtal and Almora, with a stop at the Chitai Golu Devta Temple. Arrive Pithoragarh by evening. Briefing with your guide, rest and overnight.",
        accommodation: "Hotel, Pithoragarh",
        altitude: 1814,
      },
      {
        day: 2,
        title: "Pithoragarh → Dharchula (915 m)",
        description:
          "Morning drive along the Kali River gorge to Dharchula (96 km, 4–5 hrs). Permit verification at the ITBP checkpoint. Evening stroll along the river border.",
        accommodation: "Hotel, Dharchula",
        altitude: 915,
      },
      {
        day: 3,
        title: "Dharchula → Gunji (3,380 m)",
        description:
          "Enter the restricted inner-line zone. Drive 106 km through Budhi village, Garbyang, and the dramatic Chiyalekh meadows to Gunji. En route you'll spot Api Himal (7,132 m) and Namjing Parvat on the Nepal side.",
        accommodation: "Guesthouse, Gunji",
        altitude: 3380,
      },
      {
        day: 4,
        title: "Acclimatisation — Gunji (3,380 m)",
        description:
          "Acclimatise at 3,380 m. Morning temple visit and exploration of Gunji village. Short hike to a viewpoint above the Kali River. Your guide covers altitude safety and the route ahead.",
        accommodation: "Guesthouse, Gunji",
        altitude: 3380,
        duration: 3,
      },
      {
        day: 5,
        title: "Gunji → Kalapani (3,600 m) → Nabhidhang (4,266 m) → Gunji",
        description:
          "The spiritual highlight. Drive 22 km to Kalapani — visit the ancient Kali Mandir and Vyash Gufa. Continue 22 km further to Nabhidhang (4,266 m). Here, the face of Om Parvat reveals the natural ॐ snow formation — a sight that stops every pilgrim in their tracks. Puja, photographs, and silent contemplation before the return to Gunji.",
        accommodation: "Guesthouse, Gunji",
        altitude: 4266,
        distance: 44,
      },
      {
        day: 6,
        title: "Gunji → Dharchula (915 m)",
        description:
          "Return drive through the inner-line zone to Dharchula. Farewell dinner by the Kali River.",
        accommodation: "Hotel, Dharchula",
        altitude: 915,
      },
      {
        day: 7,
        title: "Dharchula → Pithoragarh (1,814 m)",
        description:
          "Morning drive back to Pithoragarh. Optional visit to Patal Bhubaneswar Cave Temple (14 km detour from Gangolihat) — an ancient cave shrine with mythological significance.",
        accommodation: "Hotel, Pithoragarh",
        altitude: 1814,
      },
      {
        day: 8,
        title: "Pithoragarh → Kathgodam · Departure",
        description:
          "Morning drive to Kathgodam (200 km, 7–8 hrs). Optional stop at Jageshwar Dham. Drop-off at Kathgodam railway station.",
        altitude: 554,
      },
    ],
    includes: INDIA_TREK_INCLUDES,
    excludes: INDIA_TREK_EXCLUDES,
    featured: true,
    badge: "Spiritual",
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 3. Darma Valley Trek                                        */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "darma-valley",
    slug: "darma-valley-trek",
    title: "Darma Valley Trek",
    subtitle: "An offbeat traverse through one of Kumaon's most remote and pristine valleys",
    category: "Trekking",
    destination: "Pithoragarh, Uttarakhand, India",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=85",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200&q=85",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    ],
    duration: 10,
    difficulty: "Challenging",
    groupSize: { min: 2, max: 12 },
    altitude: 4620,
    price: 58999,
    priceNote: "Per person, from Kathgodam",
    rating: 4.8,
    reviewCount: 0,
    bestSeason: ["May", "June", "September", "October"],
    highlights: [
      "Panchachuli Glacier — close-up views of all five Panchachuli peaks",
      "Remote Darma Valley villages: Dar, Sela, Baling, Duktu, Nagling",
      "Alpine meadows (bugyals) of Duktu at 3,048 m",
      "Inner Line Permit zone — zero mass tourism",
      "Rich biodiversity: rare medicinal herbs, Himalayan wildlife",
      "Ancient culture of the Raji and Shauka communities",
      "Views of Panchachuli I–V, Api Himal, and Nanda Devi",
    ],
    overview:
      "The Darma Valley sits tucked against the Nepal and Tibet borders in the Pithoragarh district — one of the last truly unspoilt valleys in the Indian Himalaya. The trail winds through ancient Shauka villages, dense rhododendron forests, and glacier-fed meadows to deliver you face-to-face with the Panchachuli massif's five soaring summits. Access requires an Inner Line Permit, which keeps the crowds away and the wilderness intact. Your veteran Himalvara guide has trekked this valley dozens of times and knows every family in every village along the route.",
    itinerary: [
      {
        day: 1,
        title: "Kathgodam → Dharchula (915 m)",
        description:
          "Depart Kathgodam at 5:30 AM. Drive 290 km via Pithoragarh to the frontier town of Dharchula on the Kali River. Arrive by evening, permit check, overnight rest.",
        accommodation: "Hotel, Dharchula",
        altitude: 915,
      },
      {
        day: 2,
        title: "Dharchula → Sobla → Dar Village (2,134 m)",
        description:
          "Drive to Sobla (26 km), then trek 5 km to Dar village — the entry point to the Darma Valley. Dar is an ancient Shauka settlement with traditional stone houses and a rich oral history. Altitude gain is gradual.",
        accommodation: "Guesthouse, Dar",
        altitude: 2134,
        distance: 5,
        duration: 3,
      },
      {
        day: 3,
        title: "Dar → Sela (2,438 m)",
        description:
          "Trek 12 km through mixed oak, rhododendron, and pine forest. The trail follows the Darma Gad river. Sela is a small cluster of traditional homes perched above the valley — excellent views of the Panchachuli range emerging to the north.",
        accommodation: "Guesthouse, Sela",
        altitude: 2438,
        distance: 12,
        duration: 6,
      },
      {
        day: 4,
        title: "Sela → Baling (2,743 m)",
        description:
          "Continue up-valley through birch and juniper forest. Baling sits at a crossroads of ancient trade routes used by Shauka traders to Tibet. 11 km of steady ascent with increasing views of the high Himalayan ridgeline.",
        accommodation: "Guesthouse, Baling",
        altitude: 2743,
        distance: 11,
        duration: 6,
      },
      {
        day: 5,
        title: "Baling → Duktu (3,048 m)",
        description:
          "The final village in the valley. Trek 6 km through beautiful alpine meadows (bugyals) to Duktu. The Panchachuli peaks begin to dominate the sky — Panchachuli I, II, III, IV, and V visible simultaneously on a clear day. Rest afternoon.",
        accommodation: "Tent camp, Duktu",
        altitude: 3048,
        distance: 6,
        duration: 4,
      },
      {
        day: 6,
        title: "Duktu → Panchachuli Glacier (4,620 m) — Day Excursion",
        description:
          "The crown of the trek. Leave at 5:30 AM for an 8 km round trip to the Panchachuli Glacier at 4,620 m. The route ascends through moraines and ice-polished rock to the glacier snout. Five Himalayan summits — the highest at 6,904 m — fill the horizon. Return to Duktu by early afternoon.",
        accommodation: "Tent camp, Duktu",
        altitude: 4620,
        distance: 8,
        duration: 7,
      },
      {
        day: 7,
        title: "Duktu → Nagling (2,743 m)",
        description:
          "Begin descent. Trek 11 km back down-valley through the meadows and forest. The return perspective reveals ridgelines and peaks that were hidden on the way up.",
        accommodation: "Guesthouse, Nagling",
        altitude: 2743,
        distance: 11,
        duration: 5,
      },
      {
        day: 8,
        title: "Nagling → Bungling → Dharchula (915 m)",
        description:
          "Final 12 km trek through Bungling village to the road head, then drive to Dharchula. Hot meal, hot shower, and celebration dinner at the hotel.",
        accommodation: "Hotel, Dharchula",
        altitude: 915,
        distance: 12,
      },
      {
        day: 9,
        title: "Dharchula → Pithoragarh → Kathgodam",
        description:
          "Drive 290 km back to Kathgodam (9–10 hrs). Optional stop at Patal Bhubaneswar Cave Temple en route through Gangolihat. Drop-off at Kathgodam station.",
        altitude: 554,
      },
      {
        day: 10,
        title: "Buffer / Departure Day",
        description:
          "Built-in buffer for any road or weather delays on this remote route. Alternatively, use for a morning visit to Almora's Chitai Temple or Kasar Devi before onward travel.",
      },
    ],
    includes: INDIA_TREK_INCLUDES,
    excludes: INDIA_TREK_EXCLUDES,
    featured: true,
    badge: "Off-Beat",
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 4. Panchachuli Base Camp Trek                               */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "panchachuli-bc",
    slug: "panchachuli-base-camp-trek",
    title: "Panchachuli Base Camp Trek",
    subtitle: "Stand beneath five Himalayan summits in the remote Darma Valley wilderness",
    category: "Trekking",
    destination: "Pithoragarh, Uttarakhand, India",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=85",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200&q=85",
    ],
    duration: 10,
    difficulty: "Challenging",
    groupSize: { min: 2, max: 10 },
    altitude: 4260,
    price: 58999,
    priceNote: "Per person, from Kathgodam",
    rating: 4.8,
    reviewCount: 0,
    bestSeason: ["May", "June", "September", "October"],
    highlights: [
      "Panchachuli Base Camp at 4,260 m — views of all five summits",
      "Panchachuli II — highest summit at 6,904 m — towers overhead",
      "Trek through Dantu bugyals (high alpine meadows)",
      "Ancient Darma Valley villages: Urthing, Nagling, Son",
      "Rare medicinal plants and Himalayan wildlife corridor",
      "Inner Line Permit zone — pristine, uncrowded wilderness",
      "Close-up views of Panchachuli I (6,355 m) and Rajramba (6,537 m)",
    ],
    overview:
      "The Panchachuli Base Camp Trek is the most rewarding high-altitude objective in the Kumaon Himalaya. The five summits of the Panchachuli massif — Panchachuli I through V, ranging from 6,312 m to 6,904 m — loom directly above the base camp at 4,260 m, creating a visual arena unlike anything else in India. The approach threads through the remote Darma Valley, passing ancient Shauka villages and dense forests before ascending through high alpine meadows to the glacier-edge base camp. This is Himalayan trekking at its most raw.",
    itinerary: [
      {
        day: 1,
        title: "Kathgodam → Dharchula (915 m)",
        description:
          "Depart Kathgodam at 5:30 AM. Long drive (290 km, 10–11 hrs) to Dharchula via Pithoragarh. Permit verification and evening briefing with your guide.",
        accommodation: "Hotel, Dharchula",
        altitude: 915,
      },
      {
        day: 2,
        title: "Dharchula → Sobla → Urthing Camp (2,500 m)",
        description:
          "Drive 26 km to Dar Road Head at Sobla, then trek 7 km to Urthing — a small settlement at the mouth of the upper Darma Valley. Gradual ascent through riverine forest.",
        accommodation: "Tent camp, Urthing",
        altitude: 2500,
        distance: 7,
        duration: 4,
      },
      {
        day: 3,
        title: "Urthing → Nagling (3,200 m)",
        description:
          "Trek 10 km through dense forest with views of the Darma Gad below. The valley begins to narrow and the peaks ahead clarify. Nagling is a traditional Shauka settlement — oldest families still weave distinctive woollen blankets.",
        accommodation: "Tent camp, Nagling",
        altitude: 3200,
        distance: 10,
        duration: 5,
      },
      {
        day: 4,
        title: "Nagling → Son Camp (3,600 m)",
        description:
          "Trek 11 km through birch and rhododendron forest transitioning to open bugyals. Son camp sits on a wide bench above the Darma river — first clear views of Rajramba and the Panchachuli ridgeline.",
        accommodation: "Tent camp, Son",
        altitude: 3600,
        distance: 11,
        duration: 6,
      },
      {
        day: 5,
        title: "Son → Panchachuli Base Camp (4,260 m)",
        description:
          "The day the expedition has built to. Trek 5 km ascending through the Dantu bugyals — sweeping meadows of wildflowers — to the base camp at 4,260 m. The five Panchachuli summits fill the sky from every direction. Ample time for exploration and photography.",
        accommodation: "Tent camp, Panchachuli BC",
        altitude: 4260,
        distance: 5,
        duration: 5,
      },
      {
        day: 6,
        title: "Base Camp Rest Day — Glacier Exploration",
        description:
          "A full day at 4,260 m. Walk to the glacier snout, explore lateral moraines, and absorb the scale of the Panchachuli massif. Clear mornings reveal Nanda Devi and the Nepal Api to the south and east.",
        accommodation: "Tent camp, Panchachuli BC",
        altitude: 4260,
        distance: 4,
        duration: 4,
      },
      {
        day: 7,
        title: "BC → Nagling (3,200 m)",
        description:
          "Begin descent. 16 km back through the bugyals and forest to Nagling. The downhill pace is brisk — the valley feels familiar now.",
        accommodation: "Tent camp, Nagling",
        altitude: 3200,
        distance: 16,
        duration: 7,
      },
      {
        day: 8,
        title: "Nagling → Urthing (2,500 m)",
        description:
          "Trek 10 km back down to Urthing. Farewell to the Darma Valley. Hot meal and rest before the road journey.",
        accommodation: "Tent camp, Urthing",
        altitude: 2500,
        distance: 10,
        duration: 5,
      },
      {
        day: 9,
        title: "Urthing → Dharchula (915 m)",
        description:
          "Final 7 km trek to Dar Road Head, then drive to Dharchula. Celebration dinner.",
        accommodation: "Hotel, Dharchula",
        altitude: 915,
        distance: 7,
      },
      {
        day: 10,
        title: "Dharchula → Kathgodam · Departure",
        description:
          "Return drive (290 km, 10–11 hrs) to Kathgodam. Optional stop at Patal Bhubaneswar or Jageshwar en route. Drop-off at Kathgodam railway station.",
        altitude: 554,
      },
    ],
    includes: INDIA_TREK_INCLUDES,
    excludes: INDIA_TREK_EXCLUDES,
    popular: true,
    badge: "New",
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 5. Kumaon Temples & Heritage Tour                           */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "kumaon-temples",
    slug: "kumaon-temples-heritage-tour",
    title: "Kumaon Temples & Heritage Tour",
    subtitle: "Sacred shrines, colonial hill-towns, and panoramic Himalayan ridges across the Kumaon heartland",
    category: "Cultural Tour",
    destination: "Kumaon, Uttarakhand, India",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=85",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
    ],
    duration: 8,
    difficulty: "Easy",
    groupSize: { min: 1, max: 16 },
    altitude: 2412,
    price: 37999,
    priceNote: "Per person, from Kathgodam",
    rating: 4.7,
    reviewCount: 0,
    bestSeason: ["March", "April", "May", "September", "October", "November"],
    highlights: [
      "Jageshwar Dham — cluster of 124 ancient Shiva temples (9th–13th century)",
      "Chitai Golu Devta Temple — thousands of petition bells and letters",
      "Binsar Wildlife Sanctuary — 300 km Himalayan panorama from Zero Point",
      "Kausani — sunrise view of Nanda Devi, Trishul, and Panchachuli",
      "Anasakti Ashram at Kausani — where Gandhi wrote Anasakti Yoga",
      "Almora's Kasar Devi and colonial bazaar",
      "Patal Bhubaneswar Cave Temple — mythological cave shrine",
      "Munsiyari — gateway to Milam Glacier and Nanda Devi East base",
    ],
    overview:
      "Kumaon is one of the most culturally layered regions of the Indian Himalaya — a landscape where 9th-century stone temples stand in deodar groves, where Gandhi once sought stillness, and where panoramic ridges reveal an unbroken arc of Himalayan summits from Nanda Devi to Panchachuli. This tour is designed for those who want depth over distance — led by a veteran Himalvara guide who understands both the history and the living traditions of the Kumaon hills.",
    itinerary: [
      {
        day: 1,
        title: "Kathgodam → Almora (1,638 m)",
        description:
          "Depart Kathgodam. Drive 90 km through oak and pine forest to Almora — the cultural capital of Kumaon. Check in, evening walk through the traditional bazaar, visit the Zero Point view of the Himalayan ridge at sunset.",
        accommodation: "Heritage hotel, Almora",
        altitude: 1638,
      },
      {
        day: 2,
        title: "Almora — Chitai · Kasar Devi · Kasar Devi Ridge",
        description:
          "Morning visit to Chitai Golu Devta Temple — thousands of brass bells and handwritten petitions fill every surface; a genuinely moving experience. Continue to Kasar Devi, revered since ancient times and visited by Swami Vivekananda, Bob Dylan, and Timothy Leary. Afternoon at the colonial bazaar.",
        accommodation: "Heritage hotel, Almora",
        altitude: 1638,
      },
      {
        day: 3,
        title: "Almora → Jageshwar Dham (1,870 m)",
        description:
          "Drive 36 km to the UNESCO-proposed Jageshwar Dham — a cluster of 124 stone temples in a narrow valley of ancient deodars beside the Jataganga River. Temples built between the 9th and 13th centuries. Visit the main Dandeshwar temple, Mrityunjaya, Kuber, and the ASI museum. Overnight in the valley.",
        accommodation: "Forest guesthouse, Jageshwar",
        altitude: 1870,
      },
      {
        day: 4,
        title: "Jageshwar → Binsar Wildlife Sanctuary (2,412 m)",
        description:
          "Drive 51 km to Binsar — a 47 sq km wildlife sanctuary at 2,412 m. Afternoon walk to Zero Point — one of the finest unrestricted Himalayan viewpoints in India, revealing 300 km of peaks from Kedarnath to Nanda Devi to Panchachuli. Spot barking deer, leopard, and Himalayan birds in the sanctuary forest.",
        accommodation: "Forest rest house, Binsar",
        altitude: 2412,
        distance: 3,
        duration: 2,
      },
      {
        day: 5,
        title: "Binsar → Kausani (1,890 m)",
        description:
          "Drive 96 km to Kausani — described by Gandhi as the 'Switzerland of India'. The ridge commands the most dramatic close-up view of Trishul (7,120 m), Nanda Devi (7,816 m), and Panchachuli in the Indian Himalaya. Visit Anasakti Ashram where Gandhi spent 12 days in 1929 and wrote Anasakti Yoga. Sunset from the ridge.",
        accommodation: "Ridge hotel, Kausani",
        altitude: 1890,
      },
      {
        day: 6,
        title: "Kausani → Baijnath → Patal Bhubaneswar (1,350 m)",
        description:
          "Morning sunrise from the Kausani ridge. Drive 19 km to the ancient Baijnath group of temples dedicated to Shiva (12th century, Katyuri dynasty). Continue 168 km to Gangolihat and the mysterious Patal Bhubaneswar Cave Temple — a labyrinthine limestone cave enshrining the gods of all four yugas. Evening return to Pithoragarh.",
        accommodation: "Hotel, Pithoragarh",
        altitude: 1814,
      },
      {
        day: 7,
        title: "Pithoragarh → Munsiyari (2,200 m)",
        description:
          "Drive 127 km to Munsiyari — the last motor road town before the high Himalayan passes. This compact hill station sits opposite the Panchachuli massif; on clear mornings all five summits glow gold at dawn. Visit the Nanda Devi Temple and the Tribal Heritage Museum. Optional afternoon walk to Birthi Falls.",
        accommodation: "Mountain lodge, Munsiyari",
        altitude: 2200,
      },
      {
        day: 8,
        title: "Munsiyari Sunrise → Kathgodam · Departure",
        description:
          "Pre-breakfast sunrise view of Panchachuli from the Munsiyari ridge. Drive 280 km back to Kathgodam (8–9 hrs) via Almora. Drop-off at Kathgodam railway station. Kumaon will stay with you.",
        altitude: 554,
      },
    ],
    includes: INDIA_CULTURAL_INCLUDES,
    excludes: INDIA_CULTURAL_EXCLUDES,
    badge: "New",
  },
];

export const FEATURED_PACKAGES = ALL_PACKAGES.filter((p) => p.featured);

export const PACKAGE_CATEGORIES: {
  id: string;
  label: string;
  description: string;
  image: string;
  icon: string;
  count: number;
}[] = [
  {
    id: "yatra",
    label: "Spiritual Yatras",
    description: "Sacred pilgrimage routes to Adi Kailash and Om Parvat in the inner Himalaya.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    icon: "landmark",
    count: 2,
  },
  {
    id: "trekking",
    label: "Himalayan Treks",
    description: "Remote Kumaon valley treks to Panchachuli Base Camp and Darma Valley.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    icon: "mountain",
    count: 2,
  },
  {
    id: "cultural",
    label: "Cultural Tours",
    description: "Ancient temple circuits, heritage hill-towns, and Himalayan panoramas.",
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=80",
    icon: "triangle",
    count: 1,
  },
  {
    id: "custom",
    label: "Custom Expeditions",
    description: "Tell us your dream route — our veteran guides will build it from scratch.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    icon: "paw-print",
    count: 0,
  },
];

/* ─── Legacy Packages (not rendered — placeholder data) ─────── */
/* These Nepal packages will be replaced with real data later.   */
const _LEGACY_PACKAGES = [
  "everest-base-camp-trek",
  "annapurna-base-camp-trek",
  "manaslu-circuit-trek",
  "langtang-valley-trek",
  "island-peak-climbing",
  "bhutan-cultural-tour",
  "chitwan-wildlife-safari",
  "upper-mustang-trek",
];
void _LEGACY_PACKAGES;
