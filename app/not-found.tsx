import Image from "next/image";
import Link from "next/link";
import { Home, Map, Mountain, ArrowRight } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found | Himalvara Travels",
  description: "The page you're looking for doesn't exist. Explore our Himalayan treks instead.",
};

const QUICK_LINKS = [
  { href: "/packages", label: "Browse Treks", icon: Mountain, desc: "14 curated expeditions" },
  { href: "/destinations", label: "Destinations", icon: Map, desc: "Nepal, Bhutan, Tibet, India" },
  { href: "/contact", label: "Talk to a Guide", icon: Home, desc: "Free planning consultation" },
];

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col">
      {/* ── Hero image strip ────────────────────────────────── */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Himalayan peaks"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f17]/60 to-[#0d1f17]/95" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-display text-[96px] sm:text-[120px] font-bold leading-none text-white/10 select-none">
            404
          </p>
          <p className="text-[#c8a951] text-[10px] font-bold tracking-[0.25em] uppercase -mt-4">
            Lost on the trail
          </p>
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 bg-[#f9f7f2]">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#132a1f] mb-3">
          Page Not Found
        </h1>
        <p className="text-[#555] text-base max-w-sm mb-10 leading-relaxed">
          It looks like this trail doesn&apos;t exist. Let&apos;s get you back on the right path.
        </p>

        {/* Quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-10">
          {QUICK_LINKS.map(({ href, label, icon: Icon, desc }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-center gap-2 bg-white rounded-2xl border border-[#e8e4db] p-5 hover:border-[#1b3a2d] hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-[#e8f5f1] flex items-center justify-center group-hover:bg-[#d0eee5] transition-colors">
                <Icon className="w-5 h-5 text-[#1b3a2d]" />
              </div>
              <span className="font-semibold text-[#132a1f] text-sm">{label}</span>
              <span className="text-[#767676] text-xs">{desc}</span>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#0d1f17] hover:bg-[#132a1f] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
        >
          <Home className="w-4 h-4" />
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
