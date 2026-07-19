import type { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  /* ─────────────────────────────────────────────────────────── */
  /* 1. Adi Kailash Yatra Guide                                  */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "b01",
    slug: "adi-kailash-yatra-ultimate-guide",
    title: "The Complete Adi Kailash Yatra Guide",
    excerpt:
      "Everything you need to know before you go — Inner Line Permits, fitness, acclimatisation, route stages, and what to expect at Jolingkong.",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
    category: "Guides",
    author: "Arjun Rawat",
    authorRole: "Founder & CEO, Himalvara Travels",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    authorBio:
      "Retired Major Arjun Rawat served 14 years in the Indian Army's High Altitude Warfare School before founding Himalvara in 2009. He has personally led over 200 Adi Kailash and Om Parvat yatras in the Pithoragarh inner Himalaya.",
    date: "2025-03-12",
    readTime: 12,
    tags: ["Adi Kailash", "Kumaon", "Planning", "Yatra"],
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "The Adi Kailash Yatra is one of India's most sacred and least-known Himalayan pilgrimages. Known as Chhota Kailash, this 6,310 m peak in Pithoragarh district mirrors the form of Mount Kailash in Tibet — with its own Parvati Kund glacial lake and a spiritual atmosphere that pilgrims describe as transformative. This guide covers everything the first-time yatri needs to know.",
      },
      {
        type: "h2",
        text: "What to Expect on the Yatra",
      },
      {
        type: "paragraph",
        text: "The classic 9-day route begins at Kathgodam and drives through Almora, Pithoragarh, and Dharchula before entering the Inner Line Permit zone. You'll pass through the Shauka trading village of Gunji and climb to Jolingkong (3,600 m), where the Adi Kailash peak dominates the skyline and the Parvati Kund lake sits in glacial silence. Two days at altitude are built into the itinerary for acclimatisation and darshan.",
      },
      {
        type: "h2",
        text: "Fitness & Preparation",
      },
      {
        type: "paragraph",
        text: "This is a moderate-grade yatra suitable for devotees and trekkers alike. You don't need to be an athlete, but you do need to be consistently active. Begin training 8 weeks before your departure. Cardiovascular fitness is more important than muscle strength at altitude.",
      },
      {
        type: "list",
        items: [
          "3–4 long walks (8–12 km) per week for the 6 weeks before departure",
          "Include uphill sections on at least 2 of those walks",
          "Practice walking with a loaded daypack (5–7 kg)",
          "Consult your doctor about altitude medication (Acetazolamide / Diamox)",
          "Acclimatise in Pithoragarh (1,814 m) for a night before entering the Inner Line zone",
        ],
      },
      {
        type: "h2",
        text: "The Golden Rules of Acclimatisation",
      },
      {
        type: "list",
        items: [
          "Never ascend more than 300–500 m per day above 3,000 m",
          "\"Climb high, sleep low\" — day hikes to higher altitude, sleep lower",
          "Drink 3–4 litres of water daily at altitude",
          "Alcohol and sedatives inhibit your body's acclimatisation response — avoid both",
          "If you develop AMS symptoms (headache, nausea, dizziness), do not ascend. Descend if they worsen.",
        ],
      },
      {
        type: "callout",
        variant: "veteran",
        text: "Our veteran-designed acclimatisation schedule is built on the same principles the Army uses for high-altitude warfare operations in this very region. Every Himalvara itinerary has built-in contingency days — because in the mountains, as in the field, conditions change and plans must adapt.",
      },
      {
        type: "h2",
        text: "Permits You Need",
      },
      {
        type: "list",
        items: [
          "Inner Line Permit (ILP) — required for all non-residents of Uttarakhand; obtained in Pithoragarh or Dharchula",
          "Protected Area Permit — for the restricted border zone near Gunji and Jolingkong",
          "Both permits are arranged and included in all Himalvara Adi Kailash packages",
        ],
      },
      {
        type: "h2",
        text: "What to Pack",
      },
      {
        type: "list",
        items: [
          "Down jacket (rated to -10°C minimum)",
          "Waterproof shell jacket and trousers",
          "Thermal base layers (2 sets)",
          "Trekking boots — broken in, not new",
          "Trekking poles — recommended above 3,500 m",
          "Sleeping bag (-5°C comfort rating)",
          "Headtorch with spare batteries",
          "Sun protection: SPF 50+, UV-blocking sunglasses, lip balm",
          "First-aid kit including altitude medication",
        ],
      },
      {
        type: "paragraph",
        text: "The single most common mistake first-timers make is overpacking. You carry only your daypack on the trail — your main bag travels by vehicle or mule. If you wouldn't carry it yourself for 6 hours uphill, question whether you need it.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 2. Altitude Sickness                                        */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "b02",
    slug: "altitude-sickness-prevention-treatment",
    title: "Altitude Sickness: Prevention, Recognition & Response",
    excerpt:
      "Acute Mountain Sickness (AMS) affects up to 50% of trekkers above 3,500 m. Know the symptoms, know the rules, and know when to descend.",
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
    category: "Safety",
    author: "Dr. Rina Gurung",
    authorRole: "Safety & Medical Officer, Himalvara Travels",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    authorBio:
      "Dr. Rina Gurung is a Wilderness Emergency Medical Specialist with 10 years of high-altitude medicine experience. She designs all Himalvara altitude acclimatisation protocols.",
    date: "2025-02-18",
    readTime: 8,
    tags: ["Safety", "Health", "Altitude", "AMS"],
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Acute Mountain Sickness (AMS) is not a sign of weakness or poor fitness. It is a physiological response to reduced oxygen availability at altitude — and it can affect Olympic athletes just as readily as first-time trekkers. What separates a safe mountain experience from a dangerous one is not whether AMS occurs, but how you recognise and respond to it.",
      },
      {
        type: "h2",
        text: "Recognising AMS Symptoms",
      },
      {
        type: "paragraph",
        text: "The Lake Louise Score is the standard assessment tool used by mountain medicine practitioners. A headache plus any one of the following constitutes AMS:",
      },
      {
        type: "list",
        items: [
          "Headache (especially morning headache that doesn't resolve with paracetamol)",
          "Loss of appetite or nausea",
          "Fatigue or weakness disproportionate to effort",
          "Dizziness or light-headedness",
          "Difficulty sleeping at altitude",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        text: "High Altitude Cerebral Oedema (HACE) and High Altitude Pulmonary Oedema (HAPE) are life-threatening progressions of AMS. Signs include: ataxia (inability to walk in a straight line), severe confusion, persistent dry cough, pink frothy sputum, or extreme breathlessness at rest. These require IMMEDIATE descent and emergency evacuation.",
      },
      {
        type: "h2",
        text: "The Prevention Protocol",
      },
      {
        type: "list",
        items: [
          "Ascend gradually — no more than 300–500 m/day above 3,000 m",
          "Take acclimatisation days seriously — use them for light activity, not rest",
          "Stay hydrated — 3–4 litres of water daily",
          "Avoid alcohol and sleeping medication for the first 3 nights at new altitude",
          "Consider prophylactic Acetazolamide (Diamox) — consult your doctor",
          "Know the rule: if you feel unwell at altitude, the altitude is the cause until proven otherwise",
        ],
      },
      {
        type: "h2",
        text: "The One Rule That Saves Lives",
      },
      {
        type: "callout",
        variant: "warning",
        text: "Never ascend with symptoms of AMS. This is non-negotiable. Many trekking fatalities are the result of continuing to climb with headache, nausea, or fatigue — hoping symptoms will resolve. They rarely do above the threshold altitude. Descend 300–500 m at the first sign of worsening symptoms.",
      },
      {
        type: "h2",
        text: "How Himalvara Manages Altitude Risk",
      },
      {
        type: "paragraph",
        text: "Every Himalvara guide is trained in Wilderness First Aid and altitude medicine. We carry pulse oximeters on every trek above 3,500 m, monitoring blood oxygen saturation daily. Our itineraries are built with contingency descent days, and every expedition carries supplemental oxygen for emergency use.",
      },
      {
        type: "callout",
        variant: "veteran",
        text: "Our founder's Army training at the High Altitude Warfare School taught him one thing above all else: altitude respect saves lives. We apply the same medical protocols the Indian Army uses for high-altitude operations — because your safety is not something we compromise on.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 3. Why Trek with a Veteran Guide                            */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "b03",
    slug: "why-trek-with-a-veteran-guide",
    title: "Why Trekking with a Veteran Guide Changes Everything",
    excerpt:
      "Military discipline, zero-compromise safety planning, and a mission mindset. Here's what changes when a veteran leads your expedition.",
    coverImage: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200&q=85",
    category: "Stories",
    author: "Arjun Rawat",
    authorRole: "Founder & CEO, Himalvara Travels",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    authorBio:
      "Retired Major Arjun Rawat served 14 years in the Indian Army's High Altitude Warfare School before founding Himalvara in 2009.",
    date: "2025-01-05",
    readTime: 6,
    tags: ["Veteran", "Safety", "Leadership", "Himalvara"],
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "In 2007, I completed my final posting at the Indian Army's High Altitude Warfare School in Gulmarg — 14 years of planning operations in conditions that would shut down most civilian expeditions. Blizzards at 5,000 m. Evacuations in zero visibility. Supply coordination across vertical terrain. When I transitioned to civilian life and began trekking with tourist groups, I was genuinely alarmed by what I saw.",
      },
      {
        type: "h2",
        text: "What Most Trekking Companies Get Wrong",
      },
      {
        type: "paragraph",
        text: "The civilian trekking industry tends to optimise for cost and itinerary length. Emergency plans are vague. Guides are warm and knowledgeable but often undertrained for acute crises. Groups push through warning signs because no one wants to disappoint the client. In one instance I witnessed, a trekker developed clear AMS symptoms at 4,200 m and was told to \"keep going, it'll pass at the top.\" It didn't pass. He was helicoptered out the next morning.",
      },
      {
        type: "h2",
        text: "The Military Difference",
      },
      {
        type: "paragraph",
        text: "In the Army, every operation begins with a mission brief, a contingency plan, and a clear abort criteria. You don't improvise your way out of a mountain emergency. You follow the protocol you rehearsed, because protocols exist precisely for the moment when adrenaline has replaced rational thinking.",
      },
      {
        type: "list",
        items: [
          "Every Himalvara route has a written emergency descent plan before the first step is taken",
          "All guides are trained in Wilderness First Aid — not just basic first aid",
          "We carry pulse oximeters, supplemental oxygen, and a satellite communicator on every trek",
          "Every trekker receives a pre-trek medical briefing, not just a waiver form",
          "We have pre-arranged helicopter evacuation contacts for every region we operate in",
        ],
      },
      {
        type: "callout",
        variant: "veteran",
        text: "\"In the Army, we said: prior planning prevents poor performance. In trekking, prior planning prevents funerals. The mountain doesn't care about your itinerary or your bucket list — but your guide should.\" — Arjun Rawat, Founder",
      },
      {
        type: "h2",
        text: "The Results After 15 Years",
      },
      {
        type: "list",
        items: [
          "Zero fatalities across 5,000+ trekkers served",
          "98% trek completion rate (industry average is approximately 85%)",
          "14 helicopter evacuations coordinated — all successful, all non-fatal",
          "Consistently 5-star rated across TripAdvisor, Google, and Trustpilot",
        ],
      },
      {
        type: "paragraph",
        text: "This is not marketing copy. It is a consequence of applying the same standard of care to civilian adventure that the Army demands of military operations. You deserve a guide who treats your safety as a personal responsibility — not a liability clause.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 4. Best Time to Trek Kumaon                                 */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "b04",
    slug: "best-time-to-trek-kumaon-uttarakhand",
    title: "Best Time to Trek in Kumaon: A Month-by-Month Guide",
    excerpt:
      "Spring yatras or autumn treks? Monsoon Darma Valley? Here is what every month in Kumaon's trekking calendar actually looks like — and which package fits when.",
    coverImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=85",
    category: "Planning",
    author: "Sunita Thapa",
    authorRole: "Head of Operations, Himalvara Travels",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    authorBio:
      "Sunita Thapa manages Himalvara's operational logistics and has coordinated over 400 trekking and yatra departures across Kumaon and Uttarakhand.",
    date: "2024-11-20",
    readTime: 7,
    tags: ["Planning", "Kumaon", "Seasons", "Uttarakhand"],
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Kumaon's trekking calendar is shaped by the monsoon, the altitude of the Inner Line Permit zones, and the opening of high mountain passes. Unlike Nepal, most Kumaon routes are road-accessible — which means you can start later in the season and still reach altitude. Here's what each window actually looks like on the ground.",
      },
      {
        type: "h2",
        text: "Spring (April–June) — Yatra Season Opens",
      },
      {
        type: "paragraph",
        text: "April and May see the Kumaon foothills bloom with rhododendron and oak. The Inner Line Permit routes to Adi Kailash and Om Parvat officially open in late April–May once snow clears from the Lipulekh approach. This is the most popular window for the Adi Kailash Yatra and Om Parvat Yatra — trails are clear, flowers are out, and the sacred sites are at their most serene before summer crowds arrive.",
      },
      {
        type: "h2",
        text: "Monsoon (July–August) — Darma Valley at Its Best",
      },
      {
        type: "paragraph",
        text: "The Kumaon monsoon brings heavy rainfall to the lower valleys but the high Darma Valley — lying in a partial rain shadow — remains trekable in July and August. The valley turns intensely green, waterfalls are in full flood, and the Shauka villages are inhabited (they winter at lower altitudes). This is the best window for the Darma Valley Trek and the Panchachuli Base Camp approach.",
      },
      {
        type: "callout",
        variant: "info",
        text: "The Kumaon Temples & Heritage Tour is the one package that runs year-round — the lower-altitude temple circuit (1,000–2,400 m) is accessible even during the monsoon, and the forest settings around Jageshwar and Patal Bhuvaneshwar are especially atmospheric in the rains.",
      },
      {
        type: "h2",
        text: "Autumn (September–November) — The Classic Window",
      },
      {
        type: "paragraph",
        text: "Post-monsoon Kumaon delivers the clearest skies and sharpest mountain views of the year. October is the prime month for all high-altitude treks — the Panchachuli massif stands in crystalline relief above Munsiyari, the Adi Kailash yatra has its last departures before winter closure, and the Darma Valley is completing its season. Visibility regularly extends to 150+ km on clear mornings.",
      },
      {
        type: "h2",
        text: "Winter (December–March) — Cultural Season",
      },
      {
        type: "paragraph",
        text: "High routes above 3,500 m are snowed in from December through March. But the Kumaon Cultural Circuit — Almora, Jageshwar, Baijnath, Patal Bhuvaneshwar — is perfect in winter. Clear skies, thin crowds, and the spectacular sight of snow-capped peaks against a deep blue sky from the temple steps make this our recommended off-season window.",
      },
      {
        type: "h2",
        text: "Our Recommendation by Package",
      },
      {
        type: "list",
        items: [
          "Adi Kailash Yatra: May–June and September–October (ILP zone open)",
          "Om Parvat Yatra: May–June and September–October",
          "Darma Valley Trek: June–September (best July–August)",
          "Panchachuli Base Camp Trek: May–June and September–October",
          "Kumaon Temples Heritage Tour: October–April (year-round possible)",
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 5. Adi Kailash vs Om Parvat Comparison                      */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "b05",
    slug: "adi-kailash-vs-om-parvat-which-yatra",
    title: "Adi Kailash vs Om Parvat: Which Kumaon Yatra is Right for You?",
    excerpt:
      "Two sacred peaks, one pilgrimage corridor — different in character, altitude, and experience. Here's how to choose the right Kumaon yatra.",
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
    category: "Guides",
    author: "Arjun Rawat",
    authorRole: "Founder & CEO, Himalvara Travels",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    authorBio:
      "Retired Major Arjun Rawat has personally led over 200 yatras to Adi Kailash and Om Parvat across 15 years. He knows every kilometre of both routes intimately.",
    date: "2024-10-08",
    readTime: 9,
    tags: ["Adi Kailash", "Om Parvat", "Kumaon", "Yatra"],
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Adi Kailash and Om Parvat share the same approach corridor through Pithoragarh — and many pilgrims do both in a single extended yatra. But they are two distinctly different experiences. Understanding what makes each unique is the key to choosing the journey that will move you most.",
      },
      {
        type: "h2",
        text: "The Numbers at a Glance",
      },
      {
        type: "list",
        items: [
          "Adi Kailash Yatra: 9 days · Max altitude 4,378 m (Jolingkong) · Moderate difficulty · From ₹49,999",
          "Om Parvat Yatra: 8 days · Max altitude 4,266 m (Nabhidhang) · Moderate difficulty · From ₹44,999",
          "Adi Kailash: culminates in darshan of the Kailash-shaped peak and Parvati Kund lake",
          "Om Parvat: culminates in sighting the natural OM symbol etched in snow on the peak face",
        ],
      },
      {
        type: "h2",
        text: "Choose Adi Kailash If…",
      },
      {
        type: "list",
        items: [
          "The Kailash Mansarovar pilgrimage is your dream but Tibet feels out of reach",
          "You want a multi-day walk into a sacred valley rather than a single viewpoint",
          "You're drawn to the mythology of Shiva's abode and the Parvati Kund lake",
          "You have 9 days and want the fuller experience of Jolingkong",
          "This is your first Inner Line Permit yatra",
        ],
      },
      {
        type: "h2",
        text: "Choose Om Parvat If…",
      },
      {
        type: "list",
        items: [
          "Witnessing the natural OM symbol in snow is your primary goal",
          "You have 8 days and prefer a slightly shorter itinerary",
          "You want the dramatic Nabhidhang meadow camp at 4,266 m",
          "You're comfortable with the uncertainty of the OM symbol visibility (snow-dependent)",
          "You want to combine it with the Adi Kailash route on a 12-day combined yatra",
        ],
      },
      {
        type: "callout",
        variant: "info",
        text: "Many pilgrims choose to do both in sequence — our 12-day combined Adi Kailash & Om Parvat Yatra is our most-requested itinerary. The routes share the same Gunji base camp, making it natural to extend the journey.",
      },
      {
        type: "h2",
        text: "The Honest Verdict",
      },
      {
        type: "paragraph",
        text: "Adi Kailash wins on spiritual depth — you walk into the sacred valley and spend time in the presence of the peak. Om Parvat wins on the sheer wonder of a natural phenomenon that no human designed. As someone who has guided both hundreds of times, I tell pilgrims: Adi Kailash will change how you see devotion. Om Parvat will make you wonder if the mountains are trying to tell us something.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  /* 6. Essential Gear Guide                                     */
  /* ─────────────────────────────────────────────────────────── */
  {
    id: "b06",
    slug: "essential-gear-first-himalayan-trek",
    title: "10 Essential Gear Items for Your First Himalayan Trek",
    excerpt:
      "You don't need to spend a fortune — but you do need the right things. Our gear officer's non-negotiable list for any Himalayan trek.",
    coverImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85",
    category: "Gear",
    author: "Sunita Thapa",
    authorRole: "Head of Operations, Himalvara Travels",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    authorBio:
      "Sunita Thapa manages Himalvara's operational logistics and has coordinated over 400 trekking departures. She audits every trekker's gear list before departure.",
    date: "2024-09-14",
    readTime: 6,
    tags: ["Gear", "Preparation", "Planning", "First-Timer"],
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "After coordinating 400+ trekking departures, I can tell you with absolute certainty: the wrong gear ruins more treks than the wrong fitness level. You can push through tired legs. You cannot push through wet feet at 4,500 m and -15°C. Here are the ten items I tell every first-timer are non-negotiable.",
      },
      {
        type: "h2",
        text: "The Non-Negotiable Ten",
      },
      {
        type: "list",
        items: [
          "Trekking boots — waterproof, ankle-supporting, broken in before your trek (not new). This is the single item worth spending money on.",
          "Down jacket rated to -15°C — high camp nights above 3,500 m are genuinely cold, even in October.",
          "Waterproof shell jacket and trousers — packable, not fashion. Gore-Tex or equivalent.",
          "Trekking poles — reduce knee strain on descents by up to 30%. Mandatory above 4,000 m on our treks.",
          "Sleeping bag rated to -10°C comfort — tea house blankets are supplemental, not sufficient.",
          "Headtorch with spare batteries — pre-dawn starts for passes, summit views, and toilet runs at 3 AM.",
          "UV-blocking sunglasses (Category 4) — snow blindness is a real risk above 4,000 m.",
          "SPF 50+ sunscreen and lip balm — UV intensity increases 10–12% per 1,000 m of altitude.",
          "Merino wool or synthetic base layers × 2 sets — cotton kills at altitude (holds moisture).",
          "Blister prevention kit: moleskin, Compeed, and properly fitted wool trekking socks.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        text: "Pithoragarh and Haldwani have good gear shops where you can buy or rent most items. For critical items like boots and sleeping bags, bring your own — quality varies significantly outside major cities.",
      },
      {
        type: "h2",
        text: "What You Don't Need",
      },
      {
        type: "list",
        items: [
          "A heavy camera — your phone is sufficient. A DSLR adds weight and stress.",
          "More than 2 pairs of trekking trousers — you will wear the same pair for 5 days and not care.",
          "A full first-aid kit — your Himalvara guide carries a comprehensive one.",
          "More than 3 books — you'll sleep at 8 PM from day 3 onwards.",
        ],
      },
      {
        type: "h2",
        text: "Pack Weight Target",
      },
      {
        type: "paragraph",
        text: "Your day pack (carried by you) should weigh 5–7 kg. Your duffel bag (carried by your porter) should not exceed 15 kg including the gear your porter doesn't need during the day. If you're over these limits, something has to go.",
      },
      {
        type: "callout",
        variant: "veteran",
        text: "Army principle: carry only what you cannot live without, and know exactly where everything is. A disorganised pack on a 7-hour trekking day costs you energy and time. Pack methodically. Heaviest items closest to your back, daily-use items in the top pocket.",
      },
    ],
  },
];

export const BLOG_CATEGORIES = [
  "All",
  "Guides",
  "Safety",
  "Planning",
  "Gear",
  "Stories",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
