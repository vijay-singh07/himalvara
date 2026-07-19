import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, Mountain, Clock, Calendar, ArrowRight } from "lucide-react";
import { TREKKING_REGIONS } from "@/data/trekking";
import { ALL_PACKAGES } from "@/data/packages";
import { PackageCard } from "@/components/packages/PackageCard";

export async function generateStaticParams() {
  return TREKKING_REGIONS.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  const r = TREKKING_REGIONS.find((x) => x.slug === region);
  if (!r) return {};
  return {
    title: `${r.name} Trekking | Himalvara Travels`,
    description: r.description,
  };
}

export default async function TrekkingRegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  const trek = TREKKING_REGIONS.find((r) => r.slug === region);
  if (!trek) notFound();

  const packages = ALL_PACKAGES.filter(
    (p) => p.category === "Trekking" && p.destination.includes(trek.packageKeyword)
  );

  const otherRegions = TREKKING_REGIONS.filter((r) => r.slug !== region);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image
          src={trek.image}
          alt={trek.name}
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
              <Link href="/trekking" className="hover:text-white transition-colors">Trekking</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80">{trek.name}</span>
            </nav>
          </div>
        </div>

        {/* Title + stat chips */}
        <div className="absolute bottom-10 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-[#c8a951] text-xs font-semibold uppercase tracking-widest mb-2">
              Nepal · Trekking Region
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
              {trek.name}
            </h1>
            <p className="text-white/70 text-base mb-5">{trek.subtitle}</p>

            <div className="flex flex-wrap gap-2">
              {[
                { icon: <Mountain className="w-3 h-3" />, label: `Up to ${trek.stats.maxAltitude.toLocaleString()} m` },
                { icon: <Clock className="w-3 h-3" />, label: `${trek.stats.minDuration}–${trek.stats.maxDuration} days` },
                { icon: <Calendar className="w-3 h-3" />, label: trek.stats.difficulty },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {icon}
                  {label}
                </span>
              ))}
            </div>
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
                About {trek.name}
              </h2>
              <p className="text-[#555] leading-relaxed text-base">{trek.longDescription}</p>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-5">
                Region Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trek.highlights.map((hl) => (
                  <div key={hl} className="flex items-start gap-3 bg-[#f8f4ec] rounded-xl p-4">
                    <CheckCircle2 className="w-4 h-4 text-[#c8a951] mt-0.5 flex-shrink-0" />
                    <p className="text-[#132a1f] text-sm font-medium leading-snug">{hl}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Best season */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-4">
                Best Trekking Season
              </h2>
              <div className="bg-[#e8f5f1] rounded-2xl p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {trek.bestSeason.map((month) => (
                    <span key={month} className="bg-[#1b3a2d] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {month}
                    </span>
                  ))}
                </div>
                <p className="text-[#555] text-sm">
                  The pre-monsoon (March–May) and post-monsoon (October–November) windows offer the clearest skies, stable weather, and best mountain views. Some treks are viable year-round at lower altitudes.
                </p>
              </div>
            </section>
          </div>

          {/* Right: Key stats card */}
          <div>
            <div className="sticky top-28 rounded-2xl overflow-hidden border border-[#e4e4e4] shadow-sm">
              <div className="bg-[#0d1f17] px-5 py-4">
                <p className="text-white font-bold text-sm">{trek.name}</p>
                <p className="text-white/50 text-xs">Region at a glance</p>
              </div>
              <div className="bg-white divide-y divide-[#f0ebe0]">
                {[
                  { label: "Max Altitude", value: `${trek.stats.maxAltitude.toLocaleString()} m` },
                  { label: "Trek Duration", value: `${trek.stats.minDuration}–${trek.stats.maxDuration} days` },
                  { label: "Difficulty", value: trek.stats.difficulty },
                  { label: "Packages Available", value: `${packages.length} treks` },
                  { label: "Best Months", value: trek.bestSeason.slice(0, 3).join(", ") + "…" },
                ].map(({ label, value }) => (
                  <div key={label} className="px-5 py-3.5 flex justify-between gap-4">
                    <p className="text-xs text-[#767676] font-medium">{label}</p>
                    <p className="text-xs text-[#132a1f] font-semibold text-right">{value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#f8f4ec] px-5 py-4 space-y-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-between text-sm font-semibold text-[#1b3a2d] hover:text-[#c8a951] transition-colors"
                >
                  Plan my {trek.name} trek
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
            <div className="mb-10">
              <p className="text-[#c8a951] text-xs font-semibold uppercase tracking-widest mb-2">
                {trek.name} Packages
              </p>
              <h2 className="font-display text-3xl font-bold text-[#132a1f]">
                {packages.length} Trek{packages.length !== 1 ? "s" : ""} in This Region
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Other Regions ─────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-2xl font-bold text-[#132a1f] mb-7">
            Explore Other Regions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherRegions.map((r) => (
              <Link
                key={r.id}
                href={`/trekking/${r.slug}`}
                className="group relative overflow-hidden rounded-2xl block"
              >
                <div className="relative h-44">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/20" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="font-display text-lg font-bold text-white">{r.name}</h3>
                  <p className="text-white/60 text-xs">{r.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
