"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryPhoto, GalleryCategory } from "@/data/gallery";
import { GALLERY_CATEGORIES } from "@/data/gallery";

const ASPECT_CLASSES: Record<string, string> = {
  landscape: "aspect-[4/3]",
  portrait:  "aspect-[3/4]",
  square:    "aspect-square",
  wide:      "aspect-[16/9]",
  tall:      "aspect-[2/3]",
};

/* ── Lightbox ─────────────────────────────────────────────── */
function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: GalleryPhoto[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-xs font-medium tabular-nums">
        <span className="text-white font-semibold">{index + 1}</span>
        {" / "}
        {photos.length}
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.22 }}
          className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-w-[90vw] max-h-[75vh] object-contain rounded-xl shadow-2xl"
          />

          {/* Caption */}
          <div className="mt-4 text-center">
            <p className="text-white text-sm font-medium mb-1">{photo.alt}</p>
            <p className="flex items-center justify-center gap-1.5 text-white/50 text-xs">
              <MapPin className="w-3 h-3" />
              {photo.location}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main Gallery Client ──────────────────────────────────── */
export function GalleryClient({ photos }: { photos: GalleryPhoto[] }) {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "all"
    ? photos
    : photos.filter((p) => p.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );
  const goNext = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );

  /* Keyboard nav */
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")      closeLightbox();
      if (e.key === "ArrowLeft")   goPrev();
      if (e.key === "ArrowRight")  goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  /* Scroll lock when lightbox is open */
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [lightboxIndex]);

  /* Reset lightbox index when filter changes */
  useEffect(() => {
    setLightboxIndex(null);
  }, [activeFilter]);

  return (
    <>
      {/* ── Filter Bar ──────────────────────────────────────── */}
      <div className="sticky top-[64px] z-20 bg-white/95 backdrop-blur-md border-b border-[#e4e4e4] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-0.5">
            {GALLERY_CATEGORIES.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className={cn(
                  "flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                  activeFilter === value
                    ? "bg-[#0d1f17] text-white"
                    : "bg-[#f0ebe0] text-[#555] hover:bg-[#e8f5f1] hover:text-[#1b3a2d]"
                )}
              >
                {label}
                {value !== "all" && (
                  <span className={cn(
                    "ml-1.5 text-[10px] font-bold",
                    activeFilter === value ? "text-white/60" : "text-[#767676]"
                  )}>
                    {photos.filter((p) => p.category === value).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Masonry Grid ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        {/* Results count */}
        <p className="text-sm text-[#767676] mb-7">
          <span className="font-semibold text-[#132a1f]">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "photo" : "photos"}
          {activeFilter !== "all" && (
            <> — <span className="font-semibold text-[#132a1f]">{activeFilter}</span></>
          )}
        </p>

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="columns-2 sm:columns-3 lg:columns-4 gap-3"
          >
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="break-inside-avoid mb-3"
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="group relative block w-full overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a951]"
                  aria-label={`View: ${photo.alt}`}
                >
                  <div className={cn("relative w-full", ASPECT_CLASSES[photo.aspectRatio])}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300" />

                    {/* Hover content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-white text-xs font-medium text-center line-clamp-2 max-w-[90%]">
                        {photo.location}
                      </p>
                    </div>

                    {/* Category chip */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-black/40 backdrop-blur-sm text-white text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full">
                        {photo.category}
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-display text-2xl text-[#132a1f] mb-2">No photos found</p>
            <button
              onClick={() => setActiveFilter("all")}
              className="text-sm font-semibold text-[#1b3a2d] underline underline-offset-2"
            >
              Show all photos
            </button>
          </div>
        )}
      </div>

      {/* ── Lightbox ────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}
