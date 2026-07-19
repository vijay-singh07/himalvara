import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight, MapPin } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";
import { ALL_PACKAGES } from "@/data/packages";

export const metadata = {
  title: "Destinations | Himalvara Travels",
  description:
    "Explore Nepal, Bhutan, Tibet, and India with Himalvara — veteran-led Himalayan adventures crafted with military precision.",
};

export default function DestinationsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[360px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=85"
          alt="Himalayan peaks at sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f17]/75 via-[#0d1f17]/55 to-[#0d1f17]/80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <nav className="flex items-center gap-1.5 text-white/50 text-xs font-medium mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">Destinations</span>
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
            Our Destinations
          </h1>
          <p className="text-white/70 text-base max-w-lg">
            Four extraordinary kingdoms across the Himalayas — each one a lifetime adventure.
          </p>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────────── */}
      <div className="bg-[#0d1f17]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-center">
            {[
              { value: DESTINATIONS.length, label: "Destinations" },
              { value: ALL_PACKAGES.length + "+", label: "Packages" },
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Success Rate" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-2xl font-bold text-[#c8a951]">{value}</p>
                <p className="text-white/50 text-xs font-medium uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Destination Cards ─────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {DESTINATIONS.map((dest, i) => {
              const pkgCount = ALL_PACKAGES.filter((p) =>
                p.destination.includes(dest.packageKeyword)
              ).length;

              return (
                <Link
                  key={dest.id}
                  href={`/destinations/${dest.slug}`}
                  className="group relative overflow-hidden rounded-3xl block"
                >
                  {/* Image */}
                  <div className="relative h-72 sm:h-80 lg:h-96">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[#c8a951] text-xs font-semibold uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                          <MapPin className="w-3 h-3" />
                          {dest.country}
                        </p>
                        <h2 className="font-display text-3xl font-bold text-white mb-1">
                          {dest.name}
                        </h2>
                        <p className="text-white/70 text-sm mb-4">{dest.tagline}</p>
                        <p className="text-white/80 text-sm leading-relaxed max-w-sm line-clamp-2">
                          {dest.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/15">
                      <span className="text-white/60 text-xs">
                        {pkgCount > 0 ? `${pkgCount} packages available` : `${dest.packageCount} packages`}
                      </span>
                      <span className="flex items-center gap-1.5 bg-[#c8a951] text-[#0d1f17] text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200 translate-y-1 opacity-80 group-hover:opacity-100 group-hover:translate-y-0">
                        Explore
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Himalvara for these destinations ──────────────── */}
      <section className="py-16 bg-[#f8f4ec]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center gap-2 justify-center mb-4">
            <svg className="w-3.5 h-3.5 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <span className="text-[#c8a951] text-xs font-semibold tracking-[0.2em] uppercase">Why Himalvara</span>
            <svg className="w-3.5 h-3.5 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#132a1f] mb-4">
            Every Destination. One Standard.
          </h2>
          <p className="text-[#767676] text-base max-w-2xl mx-auto mb-10">
            Whether you&apos;re making the pilgrimage to Adi Kailash or trekking through the remote Darma Valley, you travel with the same veteran-grade safety protocols and military-precision logistics.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Veteran-Led Safety", icon: "🎖️" },
              { label: "24/7 Emergency Support", icon: "📡" },
              { label: "Small Groups Only", icon: "👥" },
              { label: "Zero-Compromise Planning", icon: "🗺️" },
            ].map(({ label, icon }) => (
              <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-[#e4e4e4]">
                <p className="text-2xl mb-2">{icon}</p>
                <p className="text-[#132a1f] text-sm font-semibold leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
