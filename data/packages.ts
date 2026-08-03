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
  "Travel and medical insurance (recommended — better if you have one)",
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
  "Travel insurance (recommended — better if you have one)",
  "Lunches (flexibility for local exploration)",
  "Personal expenses and shopping",
  "Temple / puja fees and ritual donations",
  "Gratuities for guide and driver (recommended)",
];

/* ─── Active Packages ─────────────────────────────────────────── */
export const ALL_PACKAGES: Package[] = [

  /* ─────────────────────────────────────────────────────────── */
  /* 1. Adi Kailash & Om Parvat Yatra (combined)                 */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "adi-kailash-om-parvat",
    slug: "adi-kailash-yatra",
    title: "Adi Kailash & Om Parvat Yatra",
    subtitle: "Twin darshan of Chhota Kailash and the natural ॐ symbol — the sacred Kumaon pilgrimage",
    category: "Cultural Tour",
    destination: "Pithoragarh, Kumaon, Uttarakhand, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Adi_Kailash.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Parvati_Kund_at_Adi-Kailash.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Adi_Kailash.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Adi_Kailash_Mountain_At_Uttarakhand.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/82/Parvati_kund.jpg",
    ],
    duration: 3,
    difficulty: "Moderate",
    groupSize: { min: 1, max: 15 },
    altitude: 4378,
    price: 19999,
    priceNote: "Per person, from Pithoragarh",
    rating: 4.9,
    reviewCount: 0,
    bestSeason: ["May", "June", "September", "October"],
    highlights: [
      "Darshan of Adi Kailash (Chhota Kailash, 6,310 m) and Parvati Sarovar",
      "Om Parvat viewpoint from Nabhidhang — natural ॐ symbol in snow",
      "Optional Mount Kailash darshan (weather + army permission permitting)",
      "Sacred Kali Maa Temple at Kalapani on the Indo-Nepal border",
      "Remote Jyolingkong valley with zero crowds",
      "Manokamna Temple and Gauri Kund at Gunji / Nabi",
      "Drive through Chialekh meadows, Garbyang, and Napalchu villages",
    ],
    overview:
      "Adi Kailash — also known as Chhota Kailash — is a sacred Himalayan peak in Pithoragarh district that mirrors the spiritual significance of Kailash Mansarovar without crossing an international border. Om Parvat, on the same restricted inner-line corridor, is one of the most spiritually charged mountains on Earth — its snow fields naturally form the sacred ॐ symbol, visible from the Nabhidhang viewpoint at 4,266 m. This combined yatra delivers both darshans on a single trip, led by our veteran guides who know every kilometre of the sacred Kalapani–Lipulekh corridor.",
    itinerary: [
      {
        day: 1,
        title: "Pithoragarh → Gunji / Nabi (3,380 m)",
        description:
          "Complete medical checkup and obtain necessary permits at Pithoragarh. Drive to Gunji / Nabi village through stunning landscapes and remote villages including Chialekh and Garbyang — permits are checked en route, keep government ID handy. Arrive Gunji / Napalchu, warm dinner and overnight at a guesthouse / maintained homestay.",
        accommodation: "Guesthouse / Homestay, Gunji / Nabi",
        altitude: 3380,
      },
      {
        day: 2,
        title: "Gunji / Nabi → Adi Kailash (Jyolingkong) → Gunji",
        description:
          "Begin early on a soulful journey to Adi Kailash. Trek to Jyolingkong to visit the sacred Parvati Sarovar Temple and seek blessings at Adi Kailash where spirituality meets majesty. Witness the tranquil beauty of Gauri Kund and offer prayers to Lord Shiva and Goddess Parvati. Trek back to Nabi / Gunji, visit the revered Manokamna Temple, overnight surrounded by the peace of the Himalayas.",
        accommodation: "Guesthouse / Homestay, Gunji / Nabi",
        altitude: 4378,
      },
      {
        day: 3,
        title: "Gunji → Om Parvat → Kali Maa Temple → Pithoragarh",
        description:
          "Scenic drive through the high Himalayas to the Om Parvat viewpoint — the natural ॐ snow formation on the mountain. On clear days, behold Mount Kailash standing timeless and divine (weather + army permission permitting). Seek blessings at Kali Maa Temple before the scenic return drive to Pithoragarh.",
        altitude: 4266,
      },
    ],
    includes: INDIA_TREK_INCLUDES,
    excludes: INDIA_TREK_EXCLUDES,
    featured: true,
    popular: true,
    badge: "Spiritual",
    variants: [
      {
        origin: "Pithoragarh",
        originSlug: "pithoragarh",
        duration: 3,
        nights: 2,
        price: 19999,
        priceNote: "Per person, from Pithoragarh",
        meals: "3 breakfasts · 2 dinners",
        itinerary: [
          {
            day: 1,
            title: "Pithoragarh → Gunji / Nabi (3,380 m)",
            description:
              "Complete medical checkup and obtain necessary permits at Pithoragarh. Drive to Gunji / Nabi village through stunning landscapes and remote villages including Chialekh and Garbyang — permits are checked en route, keep government ID handy. Arrive Gunji / Napalchu, warm dinner and overnight at a guesthouse / maintained homestay.",
            accommodation: "Guesthouse / Homestay, Gunji / Nabi",
            altitude: 3380,
          },
          {
            day: 2,
            title: "Gunji / Nabi → Adi Kailash (Jyolingkong) → Gunji",
            description:
              "Begin early on a soulful journey to Adi Kailash. Trek to Jyolingkong to visit the sacred Parvati Sarovar Temple and seek blessings at Adi Kailash where spirituality meets majesty. Witness the tranquil beauty of Gauri Kund and offer prayers to Lord Shiva and Goddess Parvati. Trek back to Nabi / Gunji, visit the revered Manokamna Temple, overnight surrounded by the peace of the Himalayas.",
            accommodation: "Guesthouse / Homestay, Gunji / Nabi",
            altitude: 4378,
          },
          {
            day: 3,
            title: "Gunji → Om Parvat → Kali Maa Temple → Pithoragarh",
            description:
              "Scenic drive through the high Himalayas to the Om Parvat viewpoint — the natural ॐ snow formation on the mountain. On clear days, behold Mount Kailash standing timeless and divine (weather + army permission permitting). Seek blessings at Kali Maa Temple before the scenic return drive to Pithoragarh.",
            altitude: 4266,
          },
        ],
      },
      {
        origin: "Kathgodam",
        originSlug: "kathgodam",
        duration: 5,
        nights: 4,
        price: 29999,
        priceNote: "Per person, from Kathgodam (estimated — pending final doc)",
        meals: "5 breakfasts · 4 dinners",
        itinerary: [
          {
            day: 1,
            title: "Kathgodam → Almora → Pithoragarh (1,814 m)",
            description:
              "Depart Kathgodam early morning. Drive via Bhimtal and Almora with a stop at the ancient Chitai Golu Devta Temple. Arrive Pithoragarh by evening. Briefing with your guide, medical checkup, permit collection.",
            accommodation: "Hotel, Pithoragarh",
            altitude: 1814,
          },
          {
            day: 2,
            title: "Pithoragarh → Gunji / Nabi (3,380 m)",
            description:
              "Drive through the restricted inner-line zone via Dharchula, Chialekh meadows, Garbyang, and Napalchu to Gunji. Government ID checked at multiple points en route. Warm dinner and overnight at a guesthouse / homestay.",
            accommodation: "Guesthouse / Homestay, Gunji / Nabi",
            altitude: 3380,
          },
          {
            day: 3,
            title: "Gunji → Adi Kailash (Jyolingkong) → Gunji",
            description:
              "Trek to Jyolingkong for darshan at the sacred Parvati Sarovar Temple and Adi Kailash. Visit Gauri Kund. Trek back to Gunji, evening Manokamna Temple visit.",
            accommodation: "Guesthouse / Homestay, Gunji / Nabi",
            altitude: 4378,
          },
          {
            day: 4,
            title: "Gunji → Om Parvat → Kali Maa Temple → Pithoragarh",
            description:
              "Morning drive to the Om Parvat viewpoint for the natural ॐ darshan (weather permitting). Mount Kailash darshan on clear days (army permission permitting). Kali Maa Temple visit at Kalapani. Return drive to Pithoragarh.",
            accommodation: "Hotel, Pithoragarh",
            altitude: 4266,
          },
          {
            day: 5,
            title: "Pithoragarh → Jageshwar Dham → Kathgodam · Departure",
            description:
              "Morning drive back with an unhurried stop at Jageshwar Dham — the 124-temple 9th-century Shiva complex in a deodar valley. Drop-off at Kathgodam railway station by evening.",
            altitude: 554,
          },
        ],
      },
      {
        origin: "Delhi",
        originSlug: "delhi",
        duration: 7,
        nights: 6,
        price: 37999,
        priceNote: "Per person, from Delhi (estimated — pending final doc)",
        meals: "7 breakfasts · 6 dinners",
        itinerary: [
          {
            day: 1,
            title: "Delhi → Kathgodam",
            description:
              "Depart Delhi by overnight Ranikhet Express or private road transfer (~7 hrs) to Kathgodam. Arrival by morning, breakfast, and onward transfer for the day.",
            accommodation: "Hotel, Kathgodam / Almora (as per arrival)",
            altitude: 554,
          },
          {
            day: 2,
            title: "Kathgodam → Almora → Pithoragarh (1,814 m)",
            description:
              "Drive via Bhimtal and Almora with a stop at Chitai Golu Devta and Kasar Devi Temple. Arrive Pithoragarh, briefing, medical checkup, permit collection.",
            accommodation: "Hotel, Pithoragarh",
            altitude: 1814,
          },
          {
            day: 3,
            title: "Pithoragarh → Gunji / Nabi (3,380 m)",
            description:
              "Drive through the restricted inner-line zone via Dharchula, Chialekh meadows, Garbyang, and Napalchu to Gunji.",
            accommodation: "Guesthouse / Homestay, Gunji / Nabi",
            altitude: 3380,
          },
          {
            day: 4,
            title: "Gunji → Adi Kailash (Jyolingkong) → Gunji",
            description:
              "Trek to Jyolingkong for Parvati Sarovar and Adi Kailash darshan. Visit Gauri Kund. Trek back to Gunji, evening Manokamna Temple.",
            accommodation: "Guesthouse / Homestay, Gunji / Nabi",
            altitude: 4378,
          },
          {
            day: 5,
            title: "Gunji → Om Parvat → Kali Maa Temple → Pithoragarh",
            description:
              "Morning drive to Om Parvat viewpoint for the natural ॐ darshan (weather permitting). Mount Kailash darshan on clear days (army permission permitting). Kali Maa Temple. Return to Pithoragarh.",
            accommodation: "Hotel, Pithoragarh",
            altitude: 4266,
          },
          {
            day: 6,
            title: "Pithoragarh → Jageshwar Dham → Almora → Kathgodam",
            description:
              "Morning drive back with a stop at Jageshwar Dham. Continue to Kathgodam, board evening train / road transfer to Delhi.",
            accommodation: "Train / on-road",
            altitude: 554,
          },
          {
            day: 7,
            title: "Arrival Delhi · Departure",
            description:
              "Morning arrival at Delhi station. Drop-off at your onward point.",
          },
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 2. Darma Valley Trek                                        */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "darma-valley",
    slug: "darma-valley-trek",
    title: "Darma Valley Trek",
    subtitle: "An offbeat traverse through one of Kumaon's most remote and pristine valleys",
    category: "Trekking",
    destination: "Pithoragarh, Kumaon, Uttarakhand, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Kumaon_Himalaya_1.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/5/52/Kumaon_Himalaya_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Panchachuli_Peaks.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/Mountain_view_from_Bangabagad.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Adi_Kailash.jpg",
    ],
    duration: 9,
    difficulty: "Challenging",
    groupSize: { min: 2, max: 12 },
    altitude: 4620,
    price: 34999,
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
        title: "Dharchula → Pithoragarh → Kathgodam · Departure",
        description:
          "Drive 290 km back to Kathgodam (9–10 hrs). Optional stop at Patal Bhubaneswar Cave Temple en route through Gangolihat, or a brief pause in Almora for the Chitai Golu Devta or Kasar Devi temples. Drop-off at Kathgodam station.",
        altitude: 554,
      },
    ],
    includes: INDIA_TREK_INCLUDES,
    excludes: INDIA_TREK_EXCLUDES,
    featured: true,
    badge: "Off-Beat",
    variants: [
      {
        origin: "Pithoragarh",
        originSlug: "pithoragarh",
        duration: 7,
        nights: 6,
        price: 27999,
        priceNote: "Per person, from Pithoragarh (estimated — pending final doc)",
        meals: "7 breakfasts · 6 dinners",
      },
      {
        origin: "Kathgodam",
        originSlug: "kathgodam",
        duration: 9,
        nights: 8,
        price: 34999,
        priceNote: "Per person, from Kathgodam",
        meals: "9 breakfasts · 8 dinners",
      },
      {
        origin: "Delhi",
        originSlug: "delhi",
        duration: 10,
        nights: 9,
        price: 39999,
        priceNote: "Per person, from Delhi (estimated — pending final doc)",
        meals: "10 breakfasts · 9 dinners",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 3. Panchachuli Base Camp Trek                               */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "panchachuli-bc",
    slug: "panchachuli-base-camp-trek",
    title: "Panchachuli Base Camp Trek",
    subtitle: "Stand beneath five Himalayan summits in the remote Darma Valley wilderness",
    category: "Trekking",
    destination: "Pithoragarh, Kumaon, Uttarakhand, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Panchachuli_Peaks.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Panchachuli_Peaks.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/66/Panchachuli_%2Cuttarakhand%2CIndia.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/5/52/Kumaon_Himalaya_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/db/GoriValley.jpg",
    ],
    duration: 8,
    difficulty: "Challenging",
    groupSize: { min: 2, max: 10 },
    altitude: 4260,
    price: 28999,
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
        title: "Son → Panchachuli Base Camp (4,260 m) — Glacier evening",
        description:
          "The day the expedition has built to. Trek 5 km ascending through the Dantu bugyals — sweeping meadows of wildflowers — to the base camp at 4,260 m. Afternoon walk to the glacier snout and lateral moraines with the five Panchachuli summits filling the sky from every direction.",
        accommodation: "Tent camp, Panchachuli BC",
        altitude: 4260,
        distance: 7,
        duration: 6,
      },
      {
        day: 6,
        title: "BC → Nagling (3,200 m)",
        description:
          "Begin descent. 16 km back through the bugyals and forest to Nagling. Clear mornings reveal Nanda Devi and Nepal's Api Himal to the south and east before you drop below the treeline.",
        accommodation: "Tent camp, Nagling",
        altitude: 3200,
        distance: 16,
        duration: 7,
      },
      {
        day: 7,
        title: "Nagling → Urthing → Dharchula (915 m)",
        description:
          "Long descent day: trek 17 km through Urthing to Dar Road Head, then drive to Dharchula. A demanding but rewarding day back to hot showers and a celebration dinner.",
        accommodation: "Hotel, Dharchula",
        altitude: 915,
        distance: 17,
        duration: 8,
      },
      {
        day: 8,
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
    variants: [
      {
        origin: "Pithoragarh",
        originSlug: "pithoragarh",
        duration: 6,
        nights: 5,
        price: 22999,
        priceNote: "Per person, from Pithoragarh (estimated — pending final doc)",
        meals: "6 breakfasts · 5 dinners",
      },
      {
        origin: "Kathgodam",
        originSlug: "kathgodam",
        duration: 8,
        nights: 7,
        price: 28999,
        priceNote: "Per person, from Kathgodam",
        meals: "8 breakfasts · 7 dinners",
      },
      {
        origin: "Delhi",
        originSlug: "delhi",
        duration: 9,
        nights: 8,
        price: 33999,
        priceNote: "Per person, from Delhi (estimated — pending final doc)",
        meals: "9 breakfasts · 8 dinners",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 4. Kumaon Temples & Heritage Tour                           */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "kumaon-temples",
    slug: "kumaon-temples-heritage-tour",
    title: "Kumaon Temples & Heritage Tour",
    subtitle: "Sacred shrines, colonial hill-towns, and panoramic Himalayan ridges across the Kumaon heartland",
    category: "Cultural Tour",
    destination: "Kumaon, Uttarakhand, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Complete_pic_of_Jageshwar_temple.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Complete_pic_of_Jageshwar_temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Panchachuli_Peaks.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Adi_Kailash.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/52/Kumaon_Himalaya_1.jpg",
    ],
    duration: 7,
    difficulty: "Easy",
    groupSize: { min: 1, max: 16 },
    altitude: 2412,
    price: 19999,
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
        title: "Kathgodam → Almora (1,638 m) — Chitai & Kasar Devi",
        description:
          "Depart Kathgodam. Drive 90 km through oak and pine forest to Almora — the cultural capital of Kumaon. En route visit Chitai Golu Devta Temple where thousands of brass bells and handwritten petitions cover every surface, and Kasar Devi, revered since ancient times and once visited by Swami Vivekananda, Bob Dylan, and Timothy Leary. Evening walk through the colonial bazaar.",
        accommodation: "Heritage hotel, Almora",
        altitude: 1638,
      },
      {
        day: 2,
        title: "Almora → Jageshwar Dham (1,870 m)",
        description:
          "Drive 36 km to the UNESCO-proposed Jageshwar Dham — a cluster of 124 stone temples in a narrow valley of ancient deodars beside the Jataganga River. Temples built between the 9th and 13th centuries. Visit the main Dandeshwar temple, Mrityunjaya, Kuber, and the ASI museum. Overnight in the valley.",
        accommodation: "Forest guesthouse, Jageshwar",
        altitude: 1870,
      },
      {
        day: 3,
        title: "Jageshwar → Binsar Wildlife Sanctuary (2,412 m)",
        description:
          "Drive 51 km to Binsar — a 47 sq km wildlife sanctuary at 2,412 m. Afternoon walk to Zero Point — one of the finest unrestricted Himalayan viewpoints in India, revealing 300 km of peaks from Kedarnath to Nanda Devi to Panchachuli. Spot barking deer, leopard, and Himalayan birds in the sanctuary forest.",
        accommodation: "Forest rest house, Binsar",
        altitude: 2412,
        distance: 3,
        duration: 2,
      },
      {
        day: 4,
        title: "Binsar → Kausani (1,890 m)",
        description:
          "Drive 96 km to Kausani — described by Gandhi as the 'Switzerland of India'. The ridge commands the most dramatic close-up view of Trishul (7,120 m), Nanda Devi (7,816 m), and Panchachuli in the Indian Himalaya. Visit Anasakti Ashram where Gandhi spent 12 days in 1929 and wrote Anasakti Yoga. Sunset from the ridge.",
        accommodation: "Ridge hotel, Kausani",
        altitude: 1890,
      },
      {
        day: 5,
        title: "Kausani → Baijnath → Patal Bhubaneswar → Pithoragarh (1,814 m)",
        description:
          "Morning sunrise from the Kausani ridge. Drive 19 km to the ancient Baijnath group of temples dedicated to Shiva (12th century, Katyuri dynasty). Continue via Gangolihat to the mysterious Patal Bhubaneswar Cave Temple — a labyrinthine limestone cave enshrining the gods of all four yugas. Evening arrival at Pithoragarh.",
        accommodation: "Hotel, Pithoragarh",
        altitude: 1814,
      },
      {
        day: 6,
        title: "Pithoragarh → Munsiyari (2,200 m)",
        description:
          "Drive 127 km to Munsiyari — the last motor road town before the high Himalayan passes. This compact hill station sits opposite the Panchachuli massif; on clear mornings all five summits glow gold at dawn. Visit the Nanda Devi Temple and the Tribal Heritage Museum. Optional afternoon walk to Birthi Falls.",
        accommodation: "Mountain lodge, Munsiyari",
        altitude: 2200,
      },
      {
        day: 7,
        title: "Munsiyari Sunrise → Kathgodam · Departure",
        description:
          "Pre-breakfast sunrise view of Panchachuli from the Munsiyari ridge. Drive 280 km back to Kathgodam (8–9 hrs) via Almora. Drop-off at Kathgodam railway station. Kumaon will stay with you.",
        altitude: 554,
      },
    ],
    includes: INDIA_CULTURAL_INCLUDES,
    excludes: INDIA_CULTURAL_EXCLUDES,
    badge: "New",
    variants: [
      {
        origin: "Pithoragarh",
        originSlug: "pithoragarh",
        duration: 5,
        nights: 4,
        price: 14999,
        priceNote: "Per person, from Pithoragarh (estimated — pending final doc)",
        meals: "5 breakfasts · 4 dinners",
      },
      {
        origin: "Kathgodam",
        originSlug: "kathgodam",
        duration: 7,
        nights: 6,
        price: 19999,
        priceNote: "Per person, from Kathgodam",
        meals: "7 breakfasts · 6 dinners",
      },
      {
        origin: "Delhi",
        originSlug: "delhi",
        duration: 8,
        nights: 7,
        price: 24999,
        priceNote: "Per person, from Delhi (estimated — pending final doc)",
        meals: "8 breakfasts · 7 dinners",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 5. Harshil Valley & Gangotri                                */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "harshil-gangotri",
    slug: "harshil-valley-gangotri",
    title: "Harshil Valley & Gangotri",
    subtitle: "Sacred source of the Ganga and the apple orchards of the Bhagirathi valley",
    category: "Cultural Tour",
    destination: "Uttarkashi, Garhwal, Uttarakhand, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gangotri_Temple.jpg/1280px-Gangotri_Temple.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gangotri_Temple.jpg/1280px-Gangotri_Temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Bhagirathi_river_at_gangotri.jpg/1280px-Bhagirathi_river_at_gangotri.jpg",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=85",
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1200&q=85",
    ],
    duration: 6,
    difficulty: "Easy",
    groupSize: { min: 2, max: 15 },
    altitude: 3892,
    price: 17999,
    priceNote: "Per person, from Dehradun",
    rating: 4.9,
    reviewCount: 0,
    bestSeason: ["May", "June", "September", "October"],
    highlights: [
      "Gangotri Dham — sacred source shrine of the Ganga (3,048 m)",
      "Harshil Valley — hidden alpine village amid apple orchards",
      "Gaumukh glacier trek option — actual source of the Bhagirathi (3,892 m)",
      "Views of Bhagirathi peaks (I, II, III) and Sudarshan Parvat",
      "Bagori — Bhotia village with a distinctive wooden temple",
      "Optional Sattal & Dharali side trips",
      "Deodar cedar forests and hot springs at Gangnani",
    ],
    overview:
      "Harshil is one of Garhwal's best-kept secrets — a sleepy alpine village at 2,620 m in the Bhagirathi valley, famous for its apple orchards, deodar forests, and unobstructed views of the Bhagirathi peaks. Just up the road, Gangotri (3,048 m) is one of the four Char Dham shrines and the spiritual source of the Ganga. This package combines the pilgrimage to Gangotri with a relaxed stay in Harshil and an optional day trek up to Gaumukh — the actual glacier snout where the Bhagirathi emerges. Ideal for pilgrims who also want alpine downtime, and for anyone looking for a gentler introduction to the Garhwal Himalaya.",
    itinerary: [
      {
        day: 1,
        title: "Dehradun → Uttarkashi (1,158 m)",
        description:
          "Depart Dehradun at 7:00 AM. Drive 175 km (7–8 hrs) up the Bhagirathi valley via Mussoorie and Chamba to the pilgrim town of Uttarkashi. Evening at leisure, briefing with your guide.",
        accommodation: "Hotel, Uttarkashi",
        altitude: 1158,
      },
      {
        day: 2,
        title: "Uttarkashi → Harshil (2,620 m)",
        description:
          "Morning drive 75 km (3–4 hrs) up the valley via Gangnani hot springs to Harshil. Afternoon walk through the apple orchards to Bagori village — a traditional Bhotia settlement with distinctive wooden architecture and Lakshmi Narayan temple.",
        accommodation: "Guesthouse, Harshil",
        altitude: 2620,
      },
      {
        day: 3,
        title: "Harshil → Gangotri Darshan (3,048 m) → Harshil",
        description:
          "Drive 25 km up-valley to Gangotri Dham. Aarti and darshan at the sacred shrine, walk along the Bhagirathi. Optional visit to Bhairon Ghati and Surya Kund. Return to Harshil by evening.",
        accommodation: "Guesthouse, Harshil",
        altitude: 3048,
      },
      {
        day: 4,
        title: "Optional: Gangotri → Bhojwasa (3,775 m)",
        description:
          "For pilgrims choosing the Gaumukh extension: drive to Gangotri, permit check at the Gangotri National Park gate, then trek 14 km to Bhojwasa camp. Otherwise, day at leisure in Harshil.",
        accommodation: "Tent camp Bhojwasa / Guesthouse Harshil",
        altitude: 3775,
        distance: 14,
        duration: 7,
      },
      {
        day: 5,
        title: "Gaumukh option → back to Uttarkashi",
        description:
          "Gaumukh trekkers: early morning walk 4 km to the Gaumukh glacier snout — the physical source of the Ganga — then trek back through Bhojwasa to Gangotri and drive to Uttarkashi by evening. Non-trekkers: final morning walk through Harshil's orchards, then drive back to Uttarkashi with Vishwanath Temple visit and evening aarti on the Bhagirathi ghat.",
        accommodation: "Hotel, Uttarkashi",
        altitude: 3892,
        distance: 18,
        duration: 9,
      },
      {
        day: 6,
        title: "Uttarkashi → Dehradun · Departure",
        description:
          "Morning drive back to Dehradun (175 km, 7–8 hrs). Drop-off at Dehradun railway station or Jolly Grant airport by evening.",
        altitude: 640,
      },
    ],
    includes: INDIA_TREK_INCLUDES,
    excludes: INDIA_TREK_EXCLUDES,
    featured: true,
    popular: true,
    badge: "Sacred",
    variants: [
      {
        origin: "Rishikesh",
        originSlug: "rishikesh",
        duration: 6,
        nights: 5,
        price: 17999,
        priceNote: "Per person, from Rishikesh",
        meals: "6 breakfasts · 5 dinners",
      },
      {
        origin: "Dehradun",
        originSlug: "dehradun",
        duration: 6,
        nights: 5,
        price: 17999,
        priceNote: "Per person, from Dehradun",
        meals: "6 breakfasts · 5 dinners",
      },
      {
        origin: "Delhi",
        originSlug: "delhi",
        duration: 7,
        nights: 6,
        price: 22999,
        priceNote: "Per person, from Delhi (estimated — pending final doc)",
        meals: "7 breakfasts · 6 dinners",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 6. Kyarkoti Lake Trek                                       */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "kyarkoti-lake",
    slug: "kyarkoti-lake-trek",
    title: "Kyarkoti Lake Trek",
    subtitle: "A hidden glacial lake in the shadow of the Bhagirathi peaks",
    category: "Trekking",
    destination: "Uttarkashi, Garhwal, Uttarakhand, India",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=85",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=85",
    ],
    duration: 7,
    difficulty: "Challenging",
    groupSize: { min: 2, max: 10 },
    altitude: 4600,
    price: 15999,
    priceNote: "Per person, from Dehradun",
    rating: 4.8,
    reviewCount: 0,
    bestSeason: ["May", "June", "September", "October"],
    highlights: [
      "Turquoise glacial lake at ~4,600 m, few visitors per season",
      "Direct views of Sudarshan Parvat and the Bhagirathi group",
      "Trek through Gangotri National Park meadows and moraines",
      "Traditional Rawaigarhwal villages of Raithal and Bhukki",
      "Alpine flowers in June — potentilla, iris, primula",
      "Genuinely offbeat — one of Garhwal's least-crowded high routes",
    ],
    overview:
      "Kyarkoti Lake sits at roughly 4,600 m in a hanging valley of the Bhagirathi basin — a turquoise glacial pool ringed by moraine and towered over by Sudarshan Parvat and the Bhagirathi peaks. This is one of Garhwal's genuinely offbeat treks: the trail sees a fraction of the traffic of neighbouring routes, and the final approach across ice-polished rock to the lake basin feels like walking into a hidden amphitheatre. Suitable for trekkers with prior high-altitude experience, guided by our team with proper acclimatisation days built into the itinerary.",
    itinerary: [
      {
        day: 1,
        title: "Dehradun → Uttarkashi (1,158 m)",
        description:
          "Depart Dehradun at 7:00 AM. Drive 175 km (7–8 hrs) up the Bhagirathi valley to Uttarkashi. Gear check and pre-trek briefing with your guide.",
        accommodation: "Hotel, Uttarkashi",
        altitude: 1158,
      },
      {
        day: 2,
        title: "Uttarkashi → Raithal (2,200 m)",
        description:
          "Morning drive 45 km to the trailhead village of Raithal — a traditional Garhwali settlement on a ridge above the Bhagirathi. Afternoon acclimatisation walk to the village temple and viewpoint.",
        accommodation: "Guesthouse, Raithal",
        altitude: 2200,
      },
      {
        day: 3,
        title: "Raithal → Barsu meadow (3,000 m)",
        description:
          "Begin the trek. Climb 7 km through oak and rhododendron forest to a high meadow camp above Barsu. First views of Bandarpunch and Draupadi ka Danda appear.",
        accommodation: "Tent camp, Barsu meadow",
        altitude: 3000,
        distance: 7,
        duration: 5,
      },
      {
        day: 4,
        title: "Barsu → Chilapada (3,650 m)",
        description:
          "Trek 8 km through the upper birch forest and onto open alpine terrain. Chilapada camp sits in a bowl with dramatic ridgeline views. Afternoon acclimatisation walk.",
        accommodation: "Tent camp, Chilapada",
        altitude: 3650,
        distance: 8,
        duration: 6,
      },
      {
        day: 5,
        title: "Chilapada → Kyarkoti Lake (4,600 m) → Chilapada",
        description:
          "Summit day. Leave at first light for the 12 km round trip to Kyarkoti Lake. Ascend through moraine and boulder fields to the hidden lake basin at ~4,600 m. Time for photography and reflection before descending back to camp.",
        accommodation: "Tent camp, Chilapada",
        altitude: 4600,
        distance: 12,
        duration: 9,
      },
      {
        day: 6,
        title: "Chilapada → Raithal",
        description:
          "Descend 15 km back to Raithal via Barsu meadow. Long but steady day, mostly downhill. Hot meal and rest at the village guesthouse.",
        accommodation: "Guesthouse, Raithal",
        altitude: 2200,
        distance: 15,
        duration: 7,
      },
      {
        day: 7,
        title: "Raithal → Dehradun · Departure",
        description:
          "Morning drive from Raithal directly to Dehradun (~220 km, 8–9 hrs) via Uttarkashi — short stop for lunch and a walk along the Bhagirathi ghat. Drop-off at Dehradun railway station or Jolly Grant airport by evening.",
        altitude: 640,
      },
    ],
    includes: INDIA_TREK_INCLUDES,
    excludes: INDIA_TREK_EXCLUDES,
    featured: false,
    badge: "Off-Beat",
    variants: [
      {
        origin: "Rishikesh",
        originSlug: "rishikesh",
        duration: 7,
        nights: 6,
        price: 15999,
        priceNote: "Per person, from Rishikesh",
        meals: "7 breakfasts · 6 dinners",
      },
      {
        origin: "Dehradun",
        originSlug: "dehradun",
        duration: 7,
        nights: 6,
        price: 15999,
        priceNote: "Per person, from Dehradun",
        meals: "7 breakfasts · 6 dinners",
      },
      {
        origin: "Delhi",
        originSlug: "delhi",
        duration: 8,
        nights: 7,
        price: 20999,
        priceNote: "Per person, from Delhi (estimated — pending final doc)",
        meals: "8 breakfasts · 7 dinners",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 7. Gidara Bugyal Trek                                       */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "gidara-bugyal",
    slug: "gidara-bugyal-trek",
    title: "Gidara Bugyal Trek",
    subtitle: "Garhwal's largest alpine meadow — a sea of grass beneath Bandarpunch",
    category: "Trekking",
    destination: "Uttarkashi, Garhwal, Uttarakhand, India",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1200&q=85",
    ],
    duration: 7,
    difficulty: "Moderate",
    groupSize: { min: 2, max: 12 },
    altitude: 3600,
    price: 14999,
    priceNote: "Per person, from Dehradun",
    rating: 4.8,
    reviewCount: 0,
    bestSeason: ["April", "May", "June", "September", "October"],
    highlights: [
      "Gidara Bugyal — Garhwal's largest continuous alpine meadow",
      "Panoramic 360° views: Bandarpunch, Kalanag, Srikanth, Gangotri group",
      "Fraction of the crowds of Dayara or Kedarkantha",
      "Traditional Garhwali shepherd (Anwal) camps along the route",
      "Rhododendron and oak forest on the ascent, alpine flowers in June",
      "Ridge camp with sunrise and sunset panoramas",
    ],
    overview:
      "Gidara Bugyal is one of the largest alpine meadows in Uttarakhand — a rolling grassland at 3,600 m that stretches for kilometres across a ridge with 360° Himalayan views. Unlike its more famous neighbour Dayara Bugyal, Gidara sees a small fraction of the visitors, making it one of Garhwal's finest undiscovered meadow treks. The route climbs from the roadhead village of Bhukki through oak and rhododendron forest to the open ridge, where camps look out over the Bandarpunch massif, Kalanag, and the Gangotri group. Ideal for trekkers looking for a moderate-grade meadow experience away from the crowds.",
    itinerary: [
      {
        day: 1,
        title: "Dehradun → Uttarkashi (1,158 m)",
        description:
          "Depart Dehradun at 7:00 AM. Drive 175 km (7–8 hrs) via Mussoorie and Chamba to Uttarkashi. Gear check and evening briefing with your veteran guide.",
        accommodation: "Hotel, Uttarkashi",
        altitude: 1158,
      },
      {
        day: 2,
        title: "Uttarkashi → Bhukki village (2,000 m)",
        description:
          "Morning drive 40 km to the trailhead village of Bhukki. Afternoon acclimatisation walk around the village — visit the local Nag Devta temple, meet Garhwali families.",
        accommodation: "Homestay, Bhukki",
        altitude: 2000,
      },
      {
        day: 3,
        title: "Bhukki → Devkyara camp (2,800 m)",
        description:
          "Begin the trek. Climb 6 km through oak and rhododendron forest to a beautiful meadow camp at Devkyara. Views of the Gangotri group appear at ridge tops.",
        accommodation: "Tent camp, Devkyara",
        altitude: 2800,
        distance: 6,
        duration: 4,
      },
      {
        day: 4,
        title: "Devkyara → Gidara Bugyal ridge (3,600 m)",
        description:
          "The pay-off day. Climb 5 km onto the vast Gidara Bugyal ridge. Camp at 3,600 m with unobstructed views of Bandarpunch (6,316 m), Kalanag (6,387 m), Srikanth, and the Gangotri peaks. Afternoon walk along the meadow ridgeline.",
        accommodation: "Tent camp, Gidara Bugyal",
        altitude: 3600,
        distance: 5,
        duration: 4,
      },
      {
        day: 5,
        title: "Gidara Bugyal — sunrise and exploration",
        description:
          "Pre-dawn sunrise from a nearby high point on the ridge. Rest of the day exploring the meadow — the bugyal is large enough that a full day barely covers it. Ideal for photography, reflection, and mountain-watching.",
        accommodation: "Tent camp, Gidara Bugyal",
        altitude: 3600,
      },
      {
        day: 6,
        title: "Gidara Bugyal → Bhukki → Uttarkashi",
        description:
          "Descend 11 km back to Bhukki via Devkyara. Drive to Uttarkashi by evening. Hot meal and rest at the hotel.",
        accommodation: "Hotel, Uttarkashi",
        altitude: 1158,
        distance: 11,
        duration: 6,
      },
      {
        day: 7,
        title: "Uttarkashi → Dehradun · Departure",
        description:
          "Morning drive back to Dehradun (175 km, 7–8 hrs). Drop-off at Dehradun railway station or Jolly Grant airport.",
        altitude: 640,
      },
    ],
    includes: INDIA_TREK_INCLUDES,
    excludes: INDIA_TREK_EXCLUDES,
    featured: false,
    badge: "Off-Beat",
    variants: [
      {
        origin: "Rishikesh",
        originSlug: "rishikesh",
        duration: 7,
        nights: 6,
        price: 14999,
        priceNote: "Per person, from Rishikesh",
        meals: "7 breakfasts · 6 dinners",
      },
      {
        origin: "Dehradun",
        originSlug: "dehradun",
        duration: 7,
        nights: 6,
        price: 14999,
        priceNote: "Per person, from Dehradun",
        meals: "7 breakfasts · 6 dinners",
      },
      {
        origin: "Delhi",
        originSlug: "delhi",
        duration: 8,
        nights: 7,
        price: 19999,
        priceNote: "Per person, from Delhi (estimated — pending final doc)",
        meals: "8 breakfasts · 7 dinners",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 8. Dayara Bugyal Trek                                       */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "dayara-bugyal",
    slug: "dayara-bugyal-trek",
    title: "Dayara Bugyal Trek",
    subtitle: "The 28 km² meadow classic — Garhwal's most beloved family trek",
    category: "Trekking",
    destination: "Uttarkashi, Garhwal, Uttarakhand, India",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=85",
    ],
    duration: 5,
    difficulty: "Easy",
    groupSize: { min: 2, max: 15 },
    altitude: 3639,
    price: 9999,
    priceNote: "Per person, from Dehradun",
    rating: 4.9,
    reviewCount: 0,
    bestSeason: ["April", "May", "June", "September", "October", "December", "January", "February"],
    highlights: [
      "One of India's most beautiful alpine meadows — 28 km² of open grassland",
      "Panoramic views of Bandarpunch (6,316 m) and Draupadi ka Danda",
      "Suitable for first-time trekkers and families (min age 8+)",
      "Winter snow trek option — December to February",
      "Traditional villages of Raithal and Barsu on the route",
      "Rich birdlife: monal, koklass pheasant, Himalayan griffon",
    ],
    overview:
      "Dayara Bugyal is Garhwal's classic meadow trek — a rolling 28 km² alpine grassland at 3,639 m with panoramic views of the Bandarpunch massif and Draupadi ka Danda. Accessible enough for first-time trekkers and families, dramatic enough that experienced trekkers return year after year. The route climbs through oak and rhododendron forest from the traditional Garhwali village of Raithal to the meadow — a natural amphitheatre where herders bring their flocks in summer. Also a spectacular winter snow trek (Dec–Feb) when the meadow turns into a vast white expanse.",
    itinerary: [
      {
        day: 1,
        title: "Dehradun → Raithal (2,200 m)",
        description:
          "Depart Dehradun at 7:00 AM. Drive 190 km (8–9 hrs) via Mussoorie and Uttarkashi to Raithal village. Evening at leisure, gear check, and briefing with your guide.",
        accommodation: "Guesthouse, Raithal",
        altitude: 2200,
      },
      {
        day: 2,
        title: "Raithal → Gui camp (3,000 m)",
        description:
          "Begin the trek. Climb 6 km through oak and rhododendron forest to Gui camp on a forest clearing. Steady ascent with a rest stop at Chilapada meadow. Afternoon at camp.",
        accommodation: "Tent camp, Gui",
        altitude: 3000,
        distance: 6,
        duration: 4,
      },
      {
        day: 3,
        title: "Gui → Dayara Bugyal (3,400 m)",
        description:
          "The reveal. Trek 4 km through the last of the forest and emerge onto the vast Dayara Bugyal. Camp at the edge of the meadow with panoramic views of Bandarpunch (6,316 m), Draupadi ka Danda, Srikanth, and Jaonli.",
        accommodation: "Tent camp, Dayara Bugyal",
        altitude: 3400,
        distance: 4,
        duration: 3,
      },
      {
        day: 4,
        title: "Bakaria Top sunrise (3,639 m) → descend to Raithal",
        description:
          "Pre-dawn ascent to Bakaria Top (3,639 m) — the highest point on the ridge — for sunrise over Bandarpunch. Return to camp for breakfast, then descend 10 km through Gui and the forest to Raithal. Hot meal and rest at the village guesthouse.",
        accommodation: "Guesthouse, Raithal",
        altitude: 3639,
        distance: 13,
        duration: 8,
      },
      {
        day: 5,
        title: "Raithal → Dehradun · Departure",
        description:
          "Morning drive back to Dehradun (190 km, 8–9 hrs). Optional lunch stop at Mussoorie. Drop-off at Dehradun railway station or Jolly Grant airport by evening.",
        altitude: 640,
      },
    ],
    includes: INDIA_TREK_INCLUDES,
    excludes: INDIA_TREK_EXCLUDES,
    featured: true,
    popular: true,
    badge: "Family-Friendly",
    variants: [
      {
        origin: "Rishikesh",
        originSlug: "rishikesh",
        duration: 5,
        nights: 4,
        price: 9999,
        priceNote: "Per person, from Rishikesh",
        meals: "5 breakfasts · 4 dinners",
      },
      {
        origin: "Dehradun",
        originSlug: "dehradun",
        duration: 5,
        nights: 4,
        price: 9999,
        priceNote: "Per person, from Dehradun",
        meals: "5 breakfasts · 4 dinners",
      },
      {
        origin: "Delhi",
        originSlug: "delhi",
        duration: 6,
        nights: 5,
        price: 14999,
        priceNote: "Per person, from Delhi (estimated — pending final doc)",
        meals: "6 breakfasts · 5 dinners",
      },
    ],
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
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Om_Parwat.jpg",
    icon: "landmark",
    count: 1,
  },
  {
    id: "trekking",
    label: "Himalayan Treks",
    description: "Panchachuli, Darma, Dayara Bugyal, Gidara Bugyal, Kyarkoti Lake — Kumaon & Garhwal treks.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Panchachuli_Peaks.jpg",
    icon: "mountain",
    count: 5,
  },
  {
    id: "cultural",
    label: "Cultural Tours",
    description: "Ancient temple circuits, heritage hill-towns, Gangotri & Harshil valley.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Complete_pic_of_Jageshwar_temple.jpg",
    icon: "triangle",
    count: 2,
  },
  {
    id: "custom",
    label: "Custom Expeditions",
    description: "Tell us your dream route — our veteran guides will build it from scratch.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Kumaon_Himalaya_1.jpg",
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
