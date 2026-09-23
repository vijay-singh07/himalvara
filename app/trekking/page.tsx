import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mountain, Clock, ArrowUpRight, Calendar } from "lucide-react";
import { TREKKING_REGIONS } from "@/data/trekking";
import { ALL_PACKAGES } from "@/data/packages";
import { MONTHS } from "@/data/treks-by-month";
import { PackageCard } from "@/components/packages/PackageCard";

const BASE = "https://www.himalvara.com";

export const metadata = {
  title: "Trekking in Uttarakhand — Kumaon & Garhwal | Himalvara Travels",
  description:
    "Veteran-led trekking in the Kumaon and Garhwal Himalaya — Darma Valley, Adi Kailash, Panchachuli Base Camp, Dayara Bugyal and more. All permits included. Groups of 2–15.",
  alternates: {
    canonical: `${BASE}/trekking`,
  },
  openGraph: {
    title: "Trekking in Uttarakhand — Kumaon & Garhwal | Himalvara Travels",
    description:
      "Veteran-led trekking in the Kumaon and Garhwal Himalaya — Darma Valley, Adi Kailash, Panchachuli Base Camp, Dayara Bugyal and more.",
    url: `${BASE}/trekking`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Himalayan trekking trail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trekking in Uttarakhand — Kumaon & Garhwal | Himalvara Travels",
    description:
      "Veteran-led trekking in the Kumaon and Garhwal Himalaya. All permits included.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Trekking", item: `${BASE}/trekking` },
  ],
};

export default function TrekkingPage() {
  const trekPackages = ALL_PACKAGES.filter((p) => p.category === "Trekking");

  // Show only months that have at least one recommended package in our catalogue
  const activeMonths = MONTHS.filter((m) =>
    m.recommendedSlugs.some((slug) => ALL_PACKAGES.some((p) => p.slug === slug))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=85"
          alt="Himalayan trekking trail in Uttarakhand"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f17]/70 via-[#0d1f17]/50 to-[#0d1f17]/85" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <nav className="flex items-center gap-1.5 text-white/50 text-xs font-medium mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">Trekking</span>
          </nav>

          <div className="flex items-center gap-2 mb-5">
            <svg className="w-3 h-3 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <span className="text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase">Veteran Founded · Veteran Led</span>
            <svg className="w-3 h-3 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
            Trekking in the Himalayas
          </h1>
          <p className="text-white/70 text-base max-w-xl">
            Kumaon and Garhwal — four legendary regions, every level of experience, one standard of safety.
          </p>
        </div>
      </section>

      {/* ── Editorial Intro ───────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-[#f0ebe0]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[#c8a951] text-xs font-semibold uppercase tracking-widest mb-4">
            About Himalvara Trekking
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#132a1f] mb-5 leading-snug">
            The Kumaon &amp; Garhwal Himalaya — India&apos;s Most Diverse Trekking Territory
          </h2>
          <p className="text-[#555] leading-relaxed text-base mb-4">
            Uttarakhand&apos;s two divisions hold mountain terrain that ranges from pilgrim routes requiring Inner Line Permits to accessible meadow treks suited to first-timers. Kumaon&apos;s remote valleys — Darma, Johar, Ralam — remain largely unknown outside the state, while Garhwal&apos;s Gangotri corridor and Harshil valley carry centuries of sacred history.
          </p>
          <p className="text-[#555] leading-relaxed text-base">
            Himalvara operates exclusively in this region. Our founding team — led by retired army officers from Kumaon and Garhwal — knows these trails not as tourists but as people who grew up near them. Every route is selected, every guide certified, and every emergency plan mapped before your booking is confirmed.
          </p>
        </div>
      </section>

      {/* ── Trekking Regions ──────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-[#c8a951] text-xs font-semibold uppercase tracking-widest mb-3">
              Choose Your Region
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#132a1f]">
              Kumaon &amp; Garhwal Trekking Regions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TREKKING_REGIONS.map((region) => {
              const count = ALL_PACKAGES.filter((p) =>
                p.destination.includes(region.packageKeyword)
              ).length;

              return (
                <Link
                  key={region.id}
                  href={`/trekking/${region.slug}`}
                  className="group relative overflow-hidden rounded-3xl block"
                >
                  <div className="relative h-72 lg:h-80">
                    <Image
                      src={region.image}
                      alt={region.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-display text-2xl font-bold text-white mb-1">{region.name}</h3>
                        <p className="text-white/70 text-sm mb-3">{region.subtitle}</p>
                        <p className="text-white/60 text-sm leading-relaxed line-clamp-2 max-w-sm">
                          {region.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-5 pt-4 border-t border-white/15">
                      <span className="flex items-center gap-1.5 text-xs text-white/60">
                        <Mountain className="w-3.5 h-3.5 text-[#c8a951]" />
                        Up to {region.stats.maxAltitude.toLocaleString()} m
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-white/60">
                        <Clock className="w-3.5 h-3.5 text-[#c8a951]" />
                        {region.stats.minDuration}–{region.stats.maxDuration} days
                      </span>
                      <span className="text-xs text-white/60">{region.stats.difficulty}</span>

                      <div className="ml-auto flex items-center gap-1.5 bg-[#c8a951] text-[#0d1f17] text-xs font-bold px-3 py-1.5 rounded-full opacity-80 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                        {count > 0 ? `${count} packages` : "Explore"}
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Seasonal Guide ────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#f8f4ec]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-[#c8a951] text-xs font-semibold uppercase tracking-widest mb-3">
              Plan by Season
            </p>
            <h2 className="font-display text-3xl font-bold text-[#132a1f] mb-3">
              Best Time to Trek in Uttarakhand
            </h2>
            <p className="text-[#555] text-base max-w-xl mx-auto">
              Every month has a different face in the Himalaya. Here&apos;s what&apos;s open, what&apos;s worth doing, and what to expect on the trail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeMonths.map((month) => {
              const recommendedPackages = ALL_PACKAGES.filter((p) =>
                month.recommendedSlugs.includes(p.slug)
              );
              return (
                <div
                  key={month.slug}
                  className="bg-white rounded-2xl p-6 border border-[#e8e2d6] flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#c8a951]" />
                      <span className="font-display font-bold text-[#132a1f] text-lg">{month.name}</span>
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#888] bg-[#f8f4ec] px-2 py-0.5 rounded-full">
                      {month.season}
                    </span>
                  </div>
                  <p className="text-[#555] text-sm leading-relaxed mb-4 flex-1">{month.summary}</p>
                  <div className="border-t border-[#f0ebe0] pt-4">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-[#888] mb-2">
                      Recommended
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {recommendedPackages.map((pkg) => (
                        <Link
                          key={pkg.slug}
                          href={`/packages/${pkg.slug}`}
                          className="text-xs font-semibold text-[#1b3a2d] bg-[#e8f5f1] hover:bg-[#d4eee6] px-3 py-1 rounded-full transition-colors"
                        >
                          {pkg.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── All Trekking Packages ─────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#c8a951] text-xs font-semibold uppercase tracking-widest mb-2">All Treks</p>
              <h2 className="font-display text-3xl font-bold text-[#132a1f]">
                {trekPackages.length} Trekking Packages
              </h2>
            </div>
            <Link
              href="/packages"
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#1b3a2d] hover:text-[#c8a951] transition-colors"
            >
              All packages <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {trekPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Veteran trust strip ───────────────────────────────── */}
      <section className="bg-[#0d1f17] py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c8a951]/15 border border-[#c8a951]/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <div>
              <p className="text-[#c8a951] text-[10px] font-semibold tracking-[0.2em] uppercase mb-0.5">
                Army Veteran Leadership
              </p>
              <p className="text-white font-bold text-base">
                Every trek. Every step. Veteran-grade safety.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-[#c8a951] hover:bg-[#d4b96a] text-[#0d1f17] font-semibold text-sm px-6 py-3 rounded-full transition-colors"
          >
            Plan My Trek
          </Link>
        </div>
      </section>
    </>
  );
}
