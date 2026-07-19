import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";
import { ALL_PACKAGES } from "@/data/packages";
import { PackageCard } from "@/components/packages/PackageCard";

export async function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = DESTINATIONS.find((d) => d.slug === slug);
  if (!dest) return {};
  return {
    title: `${dest.name} | Himalvara Travels`,
    description: dest.description,
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = DESTINATIONS.find((d) => d.slug === slug);
  if (!dest) notFound();

  const packages = ALL_PACKAGES.filter((p) =>
    p.destination.includes(dest.packageKeyword)
  );

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f17]/90 via-[#0d1f17]/40 to-[#0d1f17]/50" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <nav className="flex items-center gap-1.5 text-white/50 text-xs font-medium" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80">{dest.name}</span>
            </nav>
          </div>
        </div>

        {/* Title */}
        <div className="absolute bottom-10 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-[#c8a951] text-xs font-semibold uppercase tracking-widest mb-2">
              {dest.country}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
              {dest.name}
            </h1>
            <p className="text-white/70 text-lg">{dest.tagline}</p>
          </div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14">
          {/* Left */}
          <div>
            {/* Overview */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-4">
                About {dest.name}
              </h2>
              <p className="text-[#555] leading-relaxed text-base mb-4">{dest.longDescription}</p>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-5">
                Why Visit {dest.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dest.highlights.map((hl) => (
                  <div key={hl} className="flex items-start gap-3 bg-[#f8f4ec] rounded-xl p-4">
                    <CheckCircle2 className="w-4 h-4 text-[#c8a951] mt-0.5 flex-shrink-0" />
                    <p className="text-[#132a1f] text-sm font-medium leading-snug">{hl}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Climate */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-4">
                Best Time to Visit
              </h2>
              <div className="bg-[#e8f5f1] rounded-2xl p-6 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-[#1b3a2d]" />
                  <p className="text-[#132a1f] font-semibold text-sm">Recommended Months</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {dest.bestSeason.map((month) => (
                    <span
                      key={month}
                      className="bg-[#1b3a2d] text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {month}
                    </span>
                  ))}
                </div>
                <p className="text-[#555] text-sm leading-relaxed">{dest.climate}</p>
              </div>
            </section>
          </div>

          {/* Right: Quick Facts */}
          <div>
            <div className="sticky top-28 rounded-2xl overflow-hidden border border-[#e4e4e4] shadow-sm">
              <div className="bg-[#0d1f17] px-5 py-4">
                <p className="text-white font-bold text-sm">Quick Facts</p>
                <p className="text-white/50 text-xs">{dest.name} at a glance</p>
              </div>
              <div className="bg-white divide-y divide-[#f0ebe0]">
                {dest.quickFacts.map(({ label, value }) => (
                  <div key={label} className="px-5 py-3.5 flex justify-between gap-4">
                    <p className="text-xs text-[#767676] font-medium">{label}</p>
                    <p className="text-xs text-[#132a1f] font-semibold text-right">{value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#f8f4ec] px-5 py-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-between text-sm font-semibold text-[#1b3a2d] hover:text-[#c8a951] transition-colors"
                >
                  Plan my {dest.name} trip
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Packages ──────────────────────────────────────────── */}
      {packages.length > 0 && (
        <section className="bg-[#f8f4ec] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[#c8a951] text-xs font-semibold uppercase tracking-widest mb-2">
                  {dest.name} Adventures
                </p>
                <h2 className="font-display text-3xl font-bold text-[#132a1f]">
                  {packages.length} Package{packages.length !== 1 ? "s" : ""} Available
                </h2>
              </div>
              <Link
                href="/packages"
                className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#1b3a2d] hover:text-[#c8a951] transition-colors"
              >
                All packages <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── No packages fallback ──────────────────────────────── */}
      {packages.length === 0 && (
        <section className="py-20 text-center">
          <div className="max-w-md mx-auto px-6">
            <p className="font-display text-2xl text-[#132a1f] mb-3">
              Packages Coming Soon
            </p>
            <p className="text-[#767676] text-sm mb-6">
              We&apos;re building curated packages for {dest.name}. Contact us for a custom itinerary.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#c8a951] text-[#0d1f17] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#d4b96a] transition-colors"
            >
              Request Custom Trip <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
