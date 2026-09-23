import type { Package } from "@/types";

export interface FAQ {
  q: string;
  a: string;
}

const DIFFICULTY_DETAIL: Record<string, string> = {
  Easy:
    "It is suitable for first-time trekkers and families with children aged 8 and above. No prior trekking experience is required — comfortable walking fitness and the ability to cover 5–8 km per day on uneven terrain is sufficient.",
  Moderate:
    "It is suitable for trekkers who exercise regularly and have some prior walking experience on hilly terrain. Expect 10–12 km per day at altitude with cumulative ascent.",
  Challenging:
    "It is designed for trekkers with prior Himalayan experience. You should have completed at least 2–3 multi-day treks above 3,000 m. Expect long days (8–10 hours) and significant altitude gain.",
  Strenuous:
    "It is a serious expedition for experienced mountaineers. Prior experience above 4,500 m and high-altitude camping is mandatory.",
};

export function generateFAQs(pkg: Package): FAQ[] {
  const lowestPrice = pkg.variants?.length
    ? Math.min(...pkg.variants.map((v) => v.price))
    : pkg.price;
  const highestPrice = pkg.variants?.length
    ? Math.max(...pkg.variants.map((v) => v.price))
    : pkg.price;
  const origins = pkg.variants?.map((v) => v.origin) ?? [];
  const primaryOrigin = origins[0] ?? pkg.destination.split(",")[0];
  const bestSeasonText =
    pkg.bestSeason?.join(", ") ?? "May–June and September–October";
  const needsILP = pkg.destination.toLowerCase().includes("pithoragarh");
  const hasKathgodam = origins.some(
    (o) =>
      o.toLowerCase().includes("kathgodam") ||
      o.toLowerCase().includes("haldwani")
  );
  const hasDehradun = origins.some((o) =>
    o.toLowerCase().includes("dehradun")
  );

  const priceRange =
    lowestPrice === highestPrice
      ? `₹${lowestPrice.toLocaleString("en-IN")}`
      : `₹${lowestPrice.toLocaleString("en-IN")}–₹${highestPrice.toLocaleString("en-IN")}`;

  const reachAnswer = hasKathgodam
    ? `Kathgodam (Haldwani) is the trek's pickup point. It is well-connected to Delhi by the Shatabdi Express and Ranikhet/Kathgodam Express — an overnight train is the most comfortable option (6–7 hours). From Delhi by road it is roughly 8–9 hours. Himalvara handles all onward transport from Kathgodam as part of the package.`
    : hasDehradun
    ? `Dehradun (Jolly Grant airport or Dehradun railway station) is the nearest hub. Flights connect Delhi to Jolly Grant in about 1 hour; trains from Delhi take 5–6 hours. Himalvara arranges all transport from Dehradun to the trailhead as part of the package.`
    : `${primaryOrigin} is the pickup city. Himalvara arranges all transport from ${primaryOrigin} to the trailhead — travel logistics are fully covered once you reach the pickup point.`;

  return [
    {
      q: `What is the best time to do the ${pkg.title}?`,
      a: `The best months for the ${pkg.title} are ${bestSeasonText}. Pre-monsoon (April–June) offers clear skies, blooming rhododendrons, and uncrowded trails; post-monsoon (September–November) delivers the year's sharpest mountain views. Himalvara runs fixed-departure batches across all open windows — contact us for the current season's schedule.`,
    },
    {
      q: `How difficult is the ${pkg.title}? Is it suitable for beginners?`,
      a: `The ${pkg.title} is rated ${pkg.difficulty}. ${DIFFICULTY_DETAIL[pkg.difficulty] ?? ""}`,
    },
    {
      q: `What permits are required for the ${pkg.title}?`,
      a: needsILP
        ? `The ${pkg.title} enters a restricted Inner Line Permit (ILP) zone. All non-residents of Uttarakhand require an ILP, plus a Protected Area Permit for the high-altitude sections near the border. Himalvara arranges and includes all permits in the package price — you only need to carry a government-issued photo ID (Aadhaar or Passport).`
        : `The ${pkg.title} passes through forest department and national park areas. Entry permits are required and are fully arranged and included in the Himalvara package price. Just carry a government-issued photo ID — no separate permit processing is needed.`,
    },
    {
      q: `What is included in the ${pkg.title} package price of ${priceRange}?`,
      a: `The Himalvara package covers: all accommodation (hotels in towns, tents or guesthouses on the trail), all meals (breakfast and dinner throughout the trek), transport from your pickup city, an experienced government-certified veteran guide, all entry and forest permits, a first-aid kit with emergency oxygen, and 24/7 emergency rescue coordination. Flights to the pickup city, personal trekking gear, and travel insurance are not included.`,
    },
    {
      q: `How do I reach ${primaryOrigin} for the ${pkg.title}?`,
      a: reachAnswer,
    },
    {
      q: `How many people will be in my group on the ${pkg.title}?`,
      a: `Himalvara operates in small groups of ${pkg.groupSize.min}–${pkg.groupSize.max} people, ensuring personalised attention from your veteran guide. Private departures for families and friend groups are available on request. Contact us to check availability for your preferred dates.`,
    },
  ];
}
