import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, ChevronRight, CheckCircle2, XCircle, ChevronDown, Calendar, MapPin, Train, ArrowRight } from "lucide-react";
import { ALL_PACKAGES } from "@/data/packages";
import { DESTINATIONS } from "@/data/destinations";
import { TREKKING_REGIONS } from "@/data/trekking";
import { BLOG_POSTS } from "@/data/blog";
import { BookingWidget } from "@/components/packages/BookingWidget";
import { PackageCard } from "@/components/packages/PackageCard";
import { PackageVariantProvider } from "@/components/packages/PackageVariantContext";
import { VariantSelector } from "@/components/packages/VariantSelector";
import { VariantItinerary } from "@/components/packages/VariantItinerary";
import { generateFAQs } from "@/lib/package-faqs";
import { TESTIMONIALS } from "@/data/testimonials";

export async function generateStaticParams() {
  return ALL_PACKAGES.map((pkg) => ({ slug: pkg.slug }));
}

const BASE = "https://www.himalvara.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = ALL_PACKAGES.find((p) => p.slug === slug);
  if (!pkg) return {};
  const lowestPrice = pkg.variants?.length
    ? Math.min(...pkg.variants.map((v) => v.price))
    : pkg.price;
  const bestSeasonShort = pkg.bestSeason?.slice(0, 2).join(" & ") ?? "May & October";
  const description = `${pkg.difficulty} ${pkg.duration}-day ${pkg.category.toLowerCase()} in ${pkg.destination.split(",")[0]}. Max altitude ${pkg.altitude?.toLocaleString() ?? "3,500"}m. Best season: ${bestSeasonShort}. Veteran-led, all permits included. From ₹${lowestPrice.toLocaleString("en-IN")}.`;
  const title = `${pkg.title} — ${pkg.duration} Days | ₹${lowestPrice.toLocaleString("en-IN")} | Himalvara`;
  return {
    title,
    description,
    alternates: { canonical: `${BASE}/packages/${pkg.slug}` },
    openGraph: {
      title,
      description,
      url: `${BASE}/packages/${pkg.slug}`,
      images: [{ url: pkg.image, width: 1200, height: 630, alt: pkg.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [pkg.image],
    },
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = ALL_PACKAGES.find((p) => p.slug === slug);
  if (!pkg) notFound();

  const related = ALL_PACKAGES.filter(
    (p) => p.slug !== pkg.slug && p.category === pkg.category
  ).slice(0, 3);

  // Find the destination hub (Kumaon / Garhwal) this package belongs to
  const parentDestination = DESTINATIONS.find((d) =>
    pkg.destination.includes(d.packageKeyword)
  );

  // Find the trekking region(s) related to this package
  const relatedTrekkingRegions = TREKKING_REGIONS.filter((r) =>
    pkg.destination.includes(r.packageKeyword)
  ).slice(0, 2);

  // Testimonials for this specific package
  const relatedTestimonials = TESTIMONIALS.filter((t) => t.packageSlug === pkg.slug);

  // Find blog posts that mention this package's topic
  const relatedBlogPosts = BLOG_POSTS.filter((post) => {
    const keywords = pkg.title.toLowerCase().split(" ").filter((w) => w.length > 4);
    return keywords.some((kw) =>
      post.title.toLowerCase().includes(kw) ||
      post.tags?.some((t) => t.toLowerCase().includes(kw))
    ) && post.slug !== "why-trek-with-a-veteran-guide";
  }).slice(0, 2);

  const lowestPrice = pkg.variants?.length
    ? Math.min(...pkg.variants.map((v) => v.price))
    : pkg.price;

  const faqs = generateFAQs(pkg);

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.overview,
    url: `${BASE}/packages/${pkg.slug}`,
    image: pkg.image,
    provider: {
      "@type": "TravelAgency",
      name: "Himalvara Travels",
      url: BASE,
    },
    touristType:
      pkg.category === "Cultural Tour" ? "Cultural Tourists" : "Adventure Tourists",
    offers: {
      "@type": "Offer",
      price: lowestPrice,
      priceCurrency: "INR",
      url: `${BASE}/packages/${pkg.slug}`,
      availability: "https://schema.org/InStock",
    },
    ...(pkg.reviewCount > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: pkg.rating,
            reviewCount: pkg.reviewCount,
            bestRating: 5,
          },
        }
      : {}),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Packages", item: `${BASE}/packages` },
      { "@type": "ListItem", position: 3, name: pkg.title, item: `${BASE}/packages/${pkg.slug}` },
    ],
  };

  const departureLocation = {
    "@type": "Place",
    name: pkg.destination.split(",").slice(0, 2).join(",").trim(),
    geo: pkg.destination.toLowerCase().includes("pithoragarh")
      ? { "@type": "GeoCoordinates", latitude: 29.5817, longitude: 80.2183 }
      : pkg.destination.toLowerCase().includes("garhwal") || pkg.destination.toLowerCase().includes("uttarkashi")
      ? { "@type": "GeoCoordinates", latitude: 30.7268, longitude: 78.4354 }
      : { "@type": "GeoCoordinates", latitude: 29.5971, longitude: 79.6537 },
  };

  const eventSchema = pkg.departures?.length
    ? {
        "@context": "https://schema.org",
        "@graph": pkg.departures.map((date) => {
          const start = new Date(date);
          const end = new Date(start);
          end.setDate(end.getDate() + pkg.duration - 1);
          return {
            "@type": "Event",
            name: `${pkg.title} — ${start.toLocaleDateString("en-IN", { month: "long", year: "numeric" })} Departure`,
            startDate: date,
            endDate: end.toISOString().slice(0, 10),
            description: pkg.overview.slice(0, 200) + "…",
            url: `${BASE}/packages/${pkg.slug}`,
            image: pkg.image,
            location: departureLocation,
            organizer: { "@type": "Organization", name: "Himalvara Travels", url: BASE },
            offers: {
              "@type": "Offer",
              price: lowestPrice,
              priceCurrency: "INR",
              url: `${BASE}/packages/${pkg.slug}`,
              availability: "https://schema.org/InStock",
              validFrom: new Date().toISOString().slice(0, 10),
            },
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          };
        }),
      }
    : null;

  const touristAttractionSchemas: Record<string, object[]> = {
    "adi-kailash-om-parvat": [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Adi Kailash (Chhota Kailash)",
        description:
          "Sacred Himalayan peak at 6,310 m in Pithoragarh district, Uttarakhand. Revered as Chhota Kailash — the accessible counterpart to Mount Kailash in Tibet — it is the centrepiece of the Inner Line Permit yatra corridor in the Kumaon Himalaya. Parvati Sarovar glacial lake sits at its base.",
        geo: { "@type": "GeoCoordinates", latitude: 30.3167, longitude: 80.5667 },
        touristType: "Pilgrims, Spiritual Seekers, Adventure Travellers",
        url: `${BASE}/packages/adi-kailash-yatra`,
      },
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Om Parvat",
        description:
          "Sacred Himalayan peak at 6,191 m whose snow fields naturally form the OM (ॐ) symbol, visible from the Nabhidhang viewpoint at 4,266 m. Located in the same restricted Kalapani–Lipulekh corridor as Adi Kailash, Pithoragarh district, Uttarakhand.",
        geo: { "@type": "GeoCoordinates", latitude: 30.3042, longitude: 80.6208 },
        touristType: "Pilgrims, Spiritual Seekers",
        url: `${BASE}/packages/adi-kailash-yatra`,
      },
    ],
    "panchachuli-bc": [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Panchachuli Base Camp",
        description:
          "High-altitude base camp at 4,260 m in the Darma Valley, Pithoragarh district, Kumaon, Uttarakhand. Offers direct views of all five Panchachuli summits including Panchachuli II (6,904 m), the highest.",
        geo: { "@type": "GeoCoordinates", latitude: 30.1833, longitude: 80.4167 },
        touristType: "Adventure Travellers, Trekkers",
        url: `${BASE}/packages/panchachuli-base-camp-trek`,
      },
    ],
  };

  const attractionSchemas = touristAttractionSchemas[pkg.id] ?? [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {attractionSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {eventSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
      )}
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f17]/90 via-[#0d1f17]/40 to-[#0d1f17]/50" />

        {/* Breadcrumb */}
        <div className="absolute top-0 left-0 right-0 z-10 pt-24 pb-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <nav className="flex items-center gap-1.5 text-white/50 text-xs font-medium" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/packages" className="hover:text-white transition-colors">Packages</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80 line-clamp-1">{pkg.title}</span>
            </nav>
          </div>
        </div>

        {/* Title + stats */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {pkg.badge && (
              <span className="inline-block bg-[#c8a951] text-[#0d1f17] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                {pkg.badge}
              </span>
            )}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              {pkg.title}
            </h1>
            <p className="text-white/70 text-base mb-5 max-w-xl">{pkg.subtitle}</p>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: `${pkg.duration} days` },
                { label: pkg.difficulty },
                { label: pkg.destination },
                pkg.altitude ? { label: `${pkg.altitude.toLocaleString()} m` } : null,
                { label: `Max ${pkg.groupSize.max} people` },
              ]
                .filter(Boolean)
                .map((chip) => (
                  <span
                    key={chip!.label}
                    className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {chip!.label}
                  </span>
                ))}

              {/* Rating */}
              <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium px-3 py-1 rounded-full">
                <Star className="w-3 h-3 fill-[#c8a951] text-[#c8a951]" />
                {pkg.rating} ({pkg.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────── */}
      <PackageVariantProvider pkg={pkg}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14">
          {/* Left: content */}
          <div>
            {/* Overview */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-4">Overview</h2>
              <p className="text-[#555] leading-relaxed text-base">{pkg.overview}</p>
            </section>

            {/* Highlights */}
            {pkg.highlights && pkg.highlights.length > 0 && (
              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-5">
                  Trek Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((hl) => (
                    <div key={hl} className="flex items-start gap-3 bg-[#f8f4ec] rounded-xl p-4">
                      <CheckCircle2 className="w-4 h-4 text-[#c8a951] mt-0.5 flex-shrink-0" />
                      <p className="text-[#132a1f] text-sm font-medium leading-snug">{hl}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Best Season */}
            {pkg.bestSeason && pkg.bestSeason.length > 0 && (
              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-5 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#c8a951]" />
                  Best Time to Visit
                </h2>
                <div className="bg-[#e8f5f1] rounded-2xl p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.bestSeason.map((month) => (
                      <span key={month} className="bg-[#1b3a2d] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        {month}
                      </span>
                    ))}
                  </div>
                  <p className="text-[#555] text-sm leading-relaxed">
                    Pre-monsoon (April–June) brings clear skies and blooming rhododendrons. Post-monsoon (September–November) delivers the year&apos;s sharpest mountain views and the most stable trekking conditions. Routes in the Pithoragarh Inner Line zone typically open in late April and close by early November.
                  </p>
                </div>
              </section>
            )}

            {/* Upcoming Departures */}
            {pkg.departures && pkg.departures.length > 0 && (
              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-5 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#c8a951]" />
                  Upcoming Departures
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.departures.map((date) => {
                    const d = new Date(date);
                    const label = d.toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    });
                    const isPast = d < new Date();
                    return (
                      <div
                        key={date}
                        className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 border ${
                          isPast
                            ? "border-[#e4e4e4] bg-[#fafafa] opacity-50"
                            : "border-[#c8a951]/30 bg-[#f8f4ec]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${isPast ? "bg-[#bbb]" : "bg-[#c8a951]"}`} />
                          <span className="text-sm font-semibold text-[#132a1f]">{label}</span>
                        </div>
                        {!isPast && (
                          <span className="text-[10px] font-bold tracking-widest uppercase text-[#1b3a2d] bg-[#d4eee6] px-2 py-0.5 rounded-full">
                            Open
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
                <p className="mt-3 text-xs text-[#888]">
                  Can&apos;t make these dates? Contact us for a private group departure.
                </p>
              </section>
            )}

            {/* How to Reach */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-5 flex items-center gap-2">
                <Train className="w-5 h-5 text-[#c8a951]" />
                How to Reach
              </h2>
              <div className="space-y-4">
                {pkg.variants && pkg.variants.length > 0 ? (
                  pkg.variants.map((v) => (
                    <div key={v.originSlug} className="flex items-start gap-4 bg-[#f8f4ec] rounded-xl p-4">
                      <MapPin className="w-4 h-4 text-[#c8a951] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-[#132a1f]">From {v.origin}</p>
                        <p className="text-xs text-[#555] mt-0.5">
                          {v.origin.toLowerCase().includes("delhi")
                            ? "Overnight train or flight to Kathgodam / Dehradun, then private AC vehicle arranged by Himalvara."
                            : v.origin.toLowerCase().includes("kathgodam") || v.origin.toLowerCase().includes("haldwani")
                            ? "Kathgodam (Haldwani) is the nearest railhead. Well-connected to Delhi by Shatabdi and Ranikhet Express. Private AC vehicle onward arranged by Himalvara."
                            : v.origin.toLowerCase().includes("dehradun") || v.origin.toLowerCase().includes("rishikesh")
                            ? "Dehradun (Jolly Grant airport) and Rishikesh are the nearest hubs. 1-hour flight from Delhi or 5–6 hour train. Himalvara arranges all onward transport."
                            : v.origin.toLowerCase().includes("pithoragarh")
                            ? "Pithoragarh is accessible by bus or taxi from Kathgodam (5–6 hrs) or by road from Delhi (~12 hrs). Himalvara arranges onward transport from Pithoragarh."
                            : `All transport from ${v.origin} to the trailhead is arranged and included in the package.`}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-start gap-4 bg-[#f8f4ec] rounded-xl p-4">
                    <MapPin className="w-4 h-4 text-[#c8a951] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[#555]">
                      All transport from the pickup city to the trailhead is arranged and included in the Himalvara package price. Contact us to confirm the nearest pickup point from your city.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Variant selector */}
            <VariantSelector />

            {/* Itinerary */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-5">
                  Day-by-Day Itinerary
                </h2>
                <VariantItinerary fallbackItinerary={pkg.itinerary} />
              </section>
            )}

            {/* Includes / Excludes */}
            {(pkg.includes || pkg.excludes) && (
              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-5">
                  What&apos;s Included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {pkg.includes && (
                    <div>
                      <h3 className="text-sm font-bold text-[#132a1f] uppercase tracking-wider mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Included
                      </h3>
                      <ul className="space-y-2.5">
                        {pkg.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-[#555]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {pkg.excludes && (
                    <div>
                      <h3 className="text-sm font-bold text-[#132a1f] uppercase tracking-wider mb-4 flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        Not Included
                      </h3>
                      <ul className="space-y-2.5">
                        {pkg.excludes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-[#555]">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* What Trekkers Say */}
            {relatedTestimonials.length > 0 && (
              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-5">
                  What Trekkers Say
                </h2>
                <div className="space-y-4">
                  {relatedTestimonials.map((t) => (
                    <div key={t.id} className="bg-[#f8f4ec] rounded-2xl p-6 border border-[#e8e2d6]">
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#c8a951] text-[#c8a951]" />
                        ))}
                      </div>
                      <p className="text-[#333] text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-[#132a1f]">{t.name}</p>
                          <p className="text-xs text-[#888]">{t.location}</p>
                        </div>
                        {t.date && (
                          <span className="text-xs text-[#aaa]">{t.date}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ section */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-5">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details key={i} className="group rounded-xl border border-[#e4e4e4] bg-white overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-semibold text-[#132a1f] text-sm hover:bg-[#f8f4ec] transition-colors">
                      {faq.q}
                      <ChevronDown className="w-4 h-4 text-[#c8a951] flex-shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-5 pb-4 text-[#555] text-sm leading-relaxed border-t border-[#f0ebe0]">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Veteran trust callout */}
            <section className="mb-12">
              <div className="flex items-center gap-5 bg-gradient-to-r from-[#0d1f17] to-[#1b3a2d] rounded-2xl px-6 py-5 border border-[#c8a951]/20">
                <div className="w-11 h-11 rounded-full bg-[#c8a951]/15 border border-[#c8a951]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#c8a951] text-[10px] font-semibold tracking-[0.2em] uppercase mb-0.5">
                    Why trust Himalvara
                  </p>
                  <p className="text-white font-semibold text-sm">
                    Veteran Founded · Veteran Led — every trek is planned with army-grade precision and a zero-compromise safety culture.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right: Booking widget */}
          <div>
            <BookingWidget pkg={pkg} />
          </div>
        </div>
      </div>
      </PackageVariantProvider>

      {/* ── Explore Further ───────────────────────────────────── */}
      {(parentDestination || relatedTrekkingRegions.length > 0 || relatedBlogPosts.length > 0) && (
        <section className="py-12 bg-white border-t border-[#f0ebe0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="font-display text-xl font-bold text-[#132a1f] mb-6">
              Explore Further
            </h2>
            <div className="flex flex-wrap gap-3">
              {parentDestination && (
                <Link
                  href={`/destinations/${parentDestination.slug}`}
                  className="inline-flex items-center gap-2 bg-[#e8f5f1] hover:bg-[#d4eee6] text-[#1b3a2d] text-sm font-semibold px-4 py-2 rounded-full transition-colors"
                >
                  {parentDestination.name} region
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
              {relatedTrekkingRegions.map((region) => (
                <Link
                  key={region.id}
                  href={`/trekking/${region.slug}`}
                  className="inline-flex items-center gap-2 bg-[#f8f4ec] hover:bg-[#f0ebe0] text-[#132a1f] text-sm font-semibold px-4 py-2 rounded-full transition-colors"
                >
                  {region.name}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
              {relatedBlogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 border border-[#e4e4e4] hover:border-[#c8a951]/40 text-[#555] hover:text-[#132a1f] text-sm font-medium px-4 py-2 rounded-full transition-colors"
                >
                  {post.title.length > 50 ? post.title.slice(0, 47) + "…" : post.title}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Packages ──────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-[#f8f4ec] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
              {related.map((p) => (
                <PackageCard key={p.id} pkg={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
