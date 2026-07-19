import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, ChevronRight, CheckCircle2, XCircle } from "lucide-react";
import { ALL_PACKAGES } from "@/data/packages";
import { ItineraryAccordion } from "@/components/packages/ItineraryAccordion";
import { BookingWidget } from "@/components/packages/BookingWidget";
import { PackageCard } from "@/components/packages/PackageCard";

export async function generateStaticParams() {
  return ALL_PACKAGES.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = ALL_PACKAGES.find((p) => p.slug === slug);
  if (!pkg) return {};
  return {
    title: `${pkg.title} | Himalvara Travels`,
    description: pkg.subtitle,
    openGraph: {
      title: `${pkg.title} | Himalvara Travels`,
      description: pkg.subtitle,
      images: [{ url: pkg.image, width: 1200, height: 630, alt: pkg.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: pkg.title,
      description: pkg.subtitle,
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

  return (
    <>
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

            {/* Itinerary */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-5">
                  Day-by-Day Itinerary
                </h2>
                <ItineraryAccordion itinerary={pkg.itinerary} />
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
