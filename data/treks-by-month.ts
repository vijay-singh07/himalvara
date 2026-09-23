export interface MonthData {
  slug: string;
  name: string;
  shortName: string;
  season: string;
  headline: string;
  summary: string;
  weather: string;
  trailConditions: string;
  temperature: string;
  recommendedSlugs: string[];        // package slugs
  notRecommendedNote?: string;
  highlights: string[];
}

export const MONTHS: MonthData[] = [
  {
    slug: "january",
    name: "January",
    shortName: "Jan",
    season: "Winter",
    headline: "Best Uttarakhand Treks in January — Snow Season",
    summary:
      "January is deep winter in the Himalayas. High routes above 4,000 m are snow-locked, but Garhwal's alpine meadows turn into spectacular snowfields. January is the best month for Dayara Bugyal's snow trek — expect 3–5 feet of snow on the meadow and temperatures of -10°C to -15°C at night.",
    weather: "Clear skies, cold. Temperature at trail altitude: -10°C to 5°C.",
    trailConditions: "Snow-covered above 3,000 m. Snowshoes or micro-spikes recommended for Dayara.",
    temperature: "-10°C to -15°C nights · 0°C to 8°C days",
    recommendedSlugs: ["dayara-bugyal-trek", "kumaon-temples-heritage-tour"],
    notRecommendedNote:
      "Adi Kailash, Darma Valley, Panchachuli, and Kyarkoti are closed — snow blocks the approach routes and the Inner Line Permit zone is inaccessible.",
    highlights: [
      "Dayara Bugyal in full winter snow — 28 km² of snowfield with Bandarpunch overhead",
      "Kumaon temple circuit in winter light — clear mountain views, thin crowds at Jageshwar",
      "Kausani ridge in January — Nanda Devi sunrise with snow-capped foreground",
      "Complete solitude — a fraction of October's visitor numbers",
    ],
  },
  {
    slug: "february",
    name: "February",
    shortName: "Feb",
    season: "Winter",
    headline: "Best Uttarakhand Treks in February — Last of the Snow",
    summary:
      "February is the final full month of the winter snow season. Dayara Bugyal is still deep in snow, and conditions are often the most photogenic of the winter — fresh snowfall is common in early February, and clear days offer crystalline visibility. The Kumaon cultural circuit is excellent throughout.",
    weather: "Cold, often clear. Some snowfall possible. Temperature: -8°C to 10°C.",
    trailConditions: "Snow above 2,800 m, compacted and walkable with micro-spikes.",
    temperature: "-8°C to -12°C nights · 2°C to 10°C days",
    recommendedSlugs: ["dayara-bugyal-trek", "kumaon-temples-heritage-tour"],
    notRecommendedNote:
      "High-altitude routes (Adi Kailash, Darma Valley, Panchachuli) remain closed until late April at earliest.",
    highlights: [
      "Dayara Bugyal snow trek — often the most photogenic month with fresh powder",
      "Kumaon temples — Jageshwar, Baijnath in winter mist, very few tourists",
      "Transition month — by late February you can start seeing signs of spring below 2,000 m",
    ],
  },
  {
    slug: "march",
    name: "March",
    shortName: "Mar",
    season: "Late Winter / Early Spring",
    headline: "Best Uttarakhand Treks in March — Spring Opens",
    summary:
      "March is a transition month. Below 2,500 m the rhododendron forests begin to bloom and temperatures warm rapidly. Higher routes are still snow-covered but accessible. Dayara Bugyal's snow may start thinning but the meadow is still largely white. The Kumaon circuit is excellent as the foothills warm up.",
    weather: "Warming rapidly below 2,000 m. Snow above 3,000 m. Variable.",
    trailConditions: "Snow still on Dayara Bugyal and higher routes. Lower trails clear.",
    temperature: "-5°C to 0°C nights at altitude · 5°C to 15°C days",
    recommendedSlugs: ["dayara-bugyal-trek", "kumaon-temples-heritage-tour"],
    notRecommendedNote:
      "Adi Kailash yatra season opens in late April. Darma Valley and Panchachuli open in May.",
    highlights: [
      "Rhododendron forests blooming below 2,500 m — scarlet and pink",
      "Dayara Bugyal still holding snow — a good month if you want the snow experience with warming days",
      "Kumaon cultural circuit at its scenic best — clear air and fewer tourists than October",
    ],
  },
  {
    slug: "april",
    name: "April",
    shortName: "Apr",
    season: "Spring",
    headline: "Best Uttarakhand Treks in April — Spring Peak",
    summary:
      "April is one of Uttarakhand's finest trekking months. Rhododendrons are in full bloom, trails are clear below 3,500 m, and the spring light is superb. The Adi Kailash yatra season officially opens in late April. Dayara Bugyal is clear and green. Gidara Bugyal and Garhwal meadow routes begin opening.",
    weather: "Warm and clear. Ideal trekking weather. Some afternoon thunderstorms possible in higher zones.",
    trailConditions: "Trails clear below 3,500 m. Snow still possible at camp altitude on Dayara and Gidara.",
    temperature: "5°C to 10°C nights at altitude · 15°C to 22°C days at lower altitudes",
    recommendedSlugs: [
      "dayara-bugyal-trek",
      "gidara-bugyal-trek",
      "kumaon-temples-heritage-tour",
    ],
    highlights: [
      "Rhododendron forests in peak bloom — best month for the flowering display",
      "Dayara Bugyal — first snow-free meadow views of the year",
      "Gidara Bugyal — the first groups of the season with pristine trail conditions",
      "Kumaon circuit — ideal temperatures and exceptional visibility",
    ],
  },
  {
    slug: "may",
    name: "May",
    shortName: "May",
    season: "Pre-Monsoon",
    headline: "Best Uttarakhand Treks in May — Peak Season Opens",
    summary:
      "May is the opening of Uttarakhand's main trekking season. All routes become accessible. The Adi Kailash and Om Parvat yatra season is in full swing. Darma Valley and Panchachuli Base Camp open. The weather is clear and stable, wildflowers are beginning at lower altitudes, and trail conditions are excellent across all Himalvara packages.",
    weather: "Clear and warm. Stable conditions. Pre-monsoon humidity building by late May.",
    trailConditions: "All trails clear. Some snow may remain at the highest camps.",
    temperature: "5°C to 15°C nights · 18°C to 28°C days at lower altitudes",
    recommendedSlugs: [
      "adi-kailash-yatra",
      "darma-valley-trek",
      "panchachuli-base-camp-trek",
      "dayara-bugyal-trek",
      "gidara-bugyal-trek",
      "harshil-valley-gangotri",
      "kyarkoti-lake-trek",
      "kumaon-temples-heritage-tour",
    ],
    highlights: [
      "All Himalvara packages operational — widest choice of the year",
      "Adi Kailash yatra — sacred pilgrimage in full swing",
      "Darma Valley — first groups of the season into one of India's most remote valleys",
      "Alpine flowers beginning — potentilla, iris, and primula carpet the meadows",
    ],
  },
  {
    slug: "june",
    name: "June",
    shortName: "Jun",
    season: "Pre-Monsoon / Early Monsoon",
    headline: "Best Uttarakhand Treks in June — Last Pre-Monsoon Window",
    summary:
      "June is the last clear window before the monsoon reaches Uttarakhand (typically mid-June). The first two weeks of June are some of the finest trekking days of the year. After mid-June, heavy rainfall affects lower routes, but the Darma Valley — lying in a partial rain shadow — remains trekable and is actually at its most lush and green in June–July.",
    weather: "Clear in early June. Monsoon arrives by mid-June. Heavy rain on lower routes by late June.",
    trailConditions: "Trails clear and good in early June. Leeches and wet trails from mid-June. Darma Valley remains accessible.",
    temperature: "10°C to 18°C nights · 22°C to 30°C days at lower altitudes",
    recommendedSlugs: [
      "adi-kailash-yatra",
      "darma-valley-trek",
      "panchachuli-base-camp-trek",
      "dayara-bugyal-trek",
      "gidara-bugyal-trek",
      "harshil-valley-gangotri",
    ],
    highlights: [
      "Early June: best wildflower season — alpine meadows carpeted with flowers",
      "Darma Valley stays open through the monsoon (rain shadow zone)",
      "Adi Kailash last departures before the June–August reduced season",
      "Pre-monsoon light is exceptional for photography",
    ],
  },
  {
    slug: "september",
    name: "September",
    shortName: "Sep",
    season: "Post-Monsoon",
    headline: "Best Uttarakhand Treks in September — Post-Monsoon Opens",
    summary:
      "September marks the end of the monsoon and the beginning of Uttarakhand's finest trekking window. The skies clear dramatically after months of rain, the vegetation is vivid green, and mountain visibility regularly extends to 150+ km. All Himalvara routes reopen. This is the month locals recommend for the Adi Kailash yatra.",
    weather: "Clearing skies by early September. Crisp and cool from mid-September. Perfect trekking weather.",
    trailConditions: "Trails fully clear and well-walked after the monsoon season.",
    temperature: "5°C to 12°C nights · 15°C to 25°C days",
    recommendedSlugs: [
      "adi-kailash-yatra",
      "darma-valley-trek",
      "panchachuli-base-camp-trek",
      "dayara-bugyal-trek",
      "gidara-bugyal-trek",
      "harshil-valley-gangotri",
      "kyarkoti-lake-trek",
      "kumaon-temples-heritage-tour",
    ],
    highlights: [
      "Crystal-clear mountain visibility after months of monsoon cloud",
      "Green valleys and clear rivers — the landscape at its most vivid",
      "All routes open simultaneously — widest choice of the year",
      "Comfortable trekking temperatures — not too hot, not yet cold",
    ],
  },
  {
    slug: "october",
    name: "October",
    shortName: "Oct",
    season: "Autumn (Best Month)",
    headline: "Best Uttarakhand Treks in October — The Best Month to Trek",
    summary:
      "October is universally considered the best month to trek in Uttarakhand. The monsoon has completely cleared, the atmosphere is at its driest and clearest, and mountain visibility is the highest of the year. The Panchachuli massif stands in crystalline relief above Munsiyari. The Adi Kailash yatra has its final high-quality departures before routes begin closing for winter. Book well in advance — October fills up 2–3 months ahead.",
    weather: "Perfect. Crystal clear, dry, cold nights, warm days. Best visibility of the year.",
    trailConditions: "Excellent on all routes. Ideal conditions.",
    temperature: "0°C to 8°C nights · 12°C to 20°C days at altitude",
    recommendedSlugs: [
      "adi-kailash-yatra",
      "darma-valley-trek",
      "panchachuli-base-camp-trek",
      "dayara-bugyal-trek",
      "gidara-bugyal-trek",
      "harshil-valley-gangotri",
      "kyarkoti-lake-trek",
      "kumaon-temples-heritage-tour",
    ],
    highlights: [
      "Best visibility of the year — mountain panoramas that 'look like paintings'",
      "Autumn colours in oak and rhododendron forests",
      "All routes open with ideal trail conditions",
      "Adi Kailash yatra final departures — some of the best spiritual atmosphere of the season",
      "October is peak season — book 2–3 months in advance",
    ],
  },
  {
    slug: "november",
    name: "November",
    shortName: "Nov",
    season: "Late Autumn",
    headline: "Best Uttarakhand Treks in November — Late Season",
    summary:
      "November is the end of the main trekking season. High routes begin closing from early November as winter snowfall begins. The Adi Kailash and Om Parvat yatra routes typically close after Diwali. Dayara Bugyal is excellent in early November with the first dusting of snow on the meadow. The Kumaon temple circuit runs through November with ideal temperatures.",
    weather: "Cold and crisp. First winter snowfall at altitude from mid-November.",
    trailConditions: "Good in early November. Snow begins accumulating at higher altitudes from mid-month.",
    temperature: "-5°C to 2°C nights · 8°C to 15°C days",
    recommendedSlugs: ["dayara-bugyal-trek", "kumaon-temples-heritage-tour"],
    notRecommendedNote:
      "Adi Kailash, Darma Valley, and Panchachuli routes close after Diwali (late October / early November).",
    highlights: [
      "Dayara Bugyal in early November — first dusting of winter snow on the meadow",
      "Very few other trekkers — the crowds from October have gone",
      "Kumaon temples in late autumn light — exceptional clarity and very thin tourist numbers",
      "November is transition month — great for experienced trekkers who prefer solitude",
    ],
  },
  {
    slug: "december",
    name: "December",
    shortName: "Dec",
    season: "Winter",
    headline: "Best Uttarakhand Treks in December — Winter Snow Season Begins",
    summary:
      "December marks the start of the winter snow trekking season. Dayara Bugyal receives its first significant snowfall and the meadow transforms. Temperatures drop sharply but skies are often brilliantly clear. The Kumaon temple circuit is excellent in December — snow-capped peaks visible from the temple complexes at Jageshwar and Kausani, with almost no tourist crowds.",
    weather: "Cold and clear. Snow falling at altitude. Perfect for winter trekking.",
    trailConditions: "Snow on Dayara Bugyal from early December. Lower routes clear.",
    temperature: "-10°C to -15°C nights at altitude · 0°C to 8°C days",
    recommendedSlugs: ["dayara-bugyal-trek", "kumaon-temples-heritage-tour"],
    notRecommendedNote:
      "High routes are closed. Perfect month to experience the Himalayan winter at a manageable altitude.",
    highlights: [
      "Dayara Bugyal first snowfall — the most magical time to see the meadow transform",
      "Kumaon temples in December — snow-capped Nanda Devi visible from Kausani in superb clarity",
      "Christmas and New Year departures on Dayara Bugyal — increasingly popular",
      "Near-total solitude on all routes — a completely different Himalaya",
    ],
  },
];

export const MONTH_MAP: Record<string, MonthData> = Object.fromEntries(
  MONTHS.map((m) => [m.slug, m])
);
