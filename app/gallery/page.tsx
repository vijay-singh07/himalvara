import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { GALLERY_PHOTOS } from "@/data/gallery";
import { GalleryClientWrapper } from "@/components/gallery/GalleryClientWrapper";

export const metadata = {
  title: "Gallery | Himalvara Travels",
  description:
    "Photos from Himalayan treks and cultural tours across Kumaon and Garhwal, Uttarakhand. Veteran-led adventures.",
};

export default function GalleryPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[420px] overflow-hidden bg-[#060e09]">
        <Image
          src="/gallery/vsb-247.jpg"
          alt="Himalayan peaks — Vijay Singh Bisht"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        {/* cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#080f0b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e09]/70 via-transparent to-[#060e09]/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <nav className="flex items-center gap-1.5 text-white/40 text-xs font-medium mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">Gallery</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#c8a951]/60" />
            <span className="text-[#c8a951]/80 text-[10px] font-bold tracking-[0.28em] uppercase">
              Through the Lens
            </span>
            <div className="w-8 h-px bg-[#c8a951]/60" />
          </div>

          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            Adventures Worth<br className="hidden sm:block" /> Remembering
          </h1>
          <p className="text-white/60 text-sm max-w-sm leading-relaxed">
            {GALLERY_PHOTOS.length} photographs from Kumaon & Garhwal
            <br />
            <a
              href="https://www.instagram.com/__vijay_singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#c8a951]/80 hover:text-[#c8a951] transition-colors"
            >
              by Vijay Singh Bisht
            </a>
          </p>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────────── */}
      <GalleryClientWrapper photos={GALLERY_PHOTOS} />
    </>
  );
}
