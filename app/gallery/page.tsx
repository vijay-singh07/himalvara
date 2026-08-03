import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { GALLERY_PHOTOS } from "@/data/gallery";
import { GalleryClient } from "@/components/gallery/GalleryClient";

export const metadata = {
  title: "Gallery | Himalvara Travels",
  description:
    "Photos from Himalayan treks and cultural tours across Kumaon and Garhwal, Uttarakhand. Veteran-led adventures.",
};

export default function GalleryPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[340px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=85"
          alt="Himalayan peaks"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f17]/75 via-[#0d1f17]/50 to-[#0d1f17]/85" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <nav className="flex items-center gap-1.5 text-white/50 text-xs font-medium mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">Gallery</span>
          </nav>

          <div className="flex items-center gap-2 mb-5">
            <svg className="w-3 h-3 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <span className="text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase">
              Through the Lens
            </span>
            <svg className="w-3 h-3 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
            Adventures Worth Remembering
          </h1>
          <p className="text-white/70 text-base max-w-md">
            {GALLERY_PHOTOS.length} photographs from Kumaon and Garhwal — and the people who made them possible.
          </p>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────────── */}
      <GalleryClient photos={GALLERY_PHOTOS} />
    </>
  );
}
