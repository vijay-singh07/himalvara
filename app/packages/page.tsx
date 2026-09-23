import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { ALL_PACKAGES } from "@/data/packages";
import { PackagesPageClient } from "@/components/packages/PackagesPageClient";

const BASE = "https://www.himalvara.com";

export const metadata = {
  title: "All Trekking & Yatra Packages | Himalvara Travels",
  description:
    "Browse veteran-led Himalayan trekking, spiritual yatras, and cultural tours across Uttarakhand — Adi Kailash, Panchachuli Base Camp, Darma Valley, Dayara Bugyal, Harshil Valley and Gangotri.",
  alternates: { canonical: `${BASE}/packages` },
  openGraph: {
    title: "All Trekking & Yatra Packages | Himalvara Travels",
    description:
      "Veteran-led trekking, spiritual yatras, and cultural tours across Kumaon and Garhwal, Uttarakhand.",
    url: `${BASE}/packages`,
  },
};

export default async function PackagesPage({
  searchParams,
}: {
  searchParams: Promise<{ destination?: string; duration?: string; group?: string }>;
}) {
  const sp = await searchParams;
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[340px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Himalayan mountain landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f17]/80 via-[#0d1f17]/60 to-[#0d1f17]/80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/50 text-xs font-medium mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">Packages</span>
          </nav>

          {/* Veteran badge */}
          <div className="flex items-center gap-2 mb-5">
            <svg className="w-3 h-3 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <span className="text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase">
              Veteran Founded · Veteran Led
            </span>
            <svg className="w-3 h-3 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
            Find Your Adventure
          </h1>
          <p className="text-white/70 text-base max-w-md">
            {ALL_PACKAGES.length} curated packages across Kumaon and Garhwal — crafted with military precision.
          </p>
        </div>
      </section>

      {/* ── Filter + Grid ─────────────────────────────────────── */}
      <PackagesPageClient
        packages={ALL_PACKAGES}
        initialFilters={{
          destination: sp.destination,
          duration: sp.duration,
        }}
      />
    </>
  );
}
