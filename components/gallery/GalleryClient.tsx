"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Camera,
  ShieldAlert,
  Grid3X3,
  LayoutGrid,
  Sparkles,
} from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { cn } from "@/lib/utils";
import type { GalleryPhoto, GalleryCategory } from "@/data/gallery";
import { GALLERY_CATEGORIES, PHOTO_OWNER } from "@/data/gallery";

const PAGE_SIZE = 30;

/* ── anti-copy handlers ───────────────────────────────────── */
const antiCopy = {
  onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
  onDragStart: (e: React.DragEvent) => e.preventDefault(),
  draggable: false as const,
};

/* ── Grid span config per position in a 7-tile repeating group ── */
// Groups: [featured-2×2, tall-1×2, normal, normal, wide-2×1, normal, normal]
function getTileClass(index: number): string {
  const pos = index % 7;
  if (pos === 0) return "col-span-2 row-span-2"; // featured
  if (pos === 1) return "col-span-1 row-span-2"; // tall
  if (pos === 4) return "col-span-2 row-span-1"; // wide
  return "col-span-1 row-span-1";
}

/* ── Animated tile wrapper ────────────────────────────────── */
function Tile({
  photo,
  index,
  gridIndex,
  onClick,
}: {
  photo: GalleryPhoto;
  index: number;
  gridIndex: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const tileClass = getTileClass(gridIndex);
  const isFeatured = gridIndex % 7 === 0;
  const photographer = photo.photographer ?? PHOTO_OWNER.name;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 6) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={tileClass}
    >
      <button
        onClick={onClick}
        className="group relative block w-full h-full min-h-[180px] overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a951] focus-visible:ring-offset-2"
        aria-label={`View: ${photo.alt}`}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={
            isFeatured
              ? "(min-width:1024px) 50vw, 100vw"
              : "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
          }
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] select-none pointer-events-none"
          {...antiCopy}
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />

        {/* category chip */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-black/40 backdrop-blur-md text-white/90 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/10">
            {photo.category}
          </span>
        </div>

        {/* copyright chip */}
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md text-[#c8a951] text-[9px] font-bold px-2 py-1 rounded-full">
            <Camera className="w-2.5 h-2.5" />© {photographer}
          </span>
        </div>

        {/* bottom info — always visible on featured, hover on rest */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 z-10 p-4 transition-all duration-400",
            isFeatured
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          )}
        >
          <p className="text-white font-semibold text-sm leading-tight line-clamp-2 mb-1">
            {photo.caption ?? photo.alt}
          </p>
          <p className="flex items-center gap-1 text-white/60 text-xs">
            <MapPin className="w-3 h-3 text-[#c8a951]" />
            {photo.location}
            {photo.year && <span className="text-white/40 ml-1">· {photo.year}</span>}
          </p>
        </div>
      </button>
    </motion.div>
  );
}

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
  const photographer = photo.photographer ?? PHOTO_OWNER.name;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10">
        <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
          <span className="text-white font-semibold text-sm">{index + 1}</span>
          <span>/</span>
          <span>{photos.length}</span>
        </div>
        <a
          href={PHOTO_OWNER.instagram}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-[#c8a951] text-[10px] font-bold px-3 py-1 rounded-full hover:bg-white/20 hover:text-[#e0be6a] transition-colors"
        >
          <InstagramIcon className="w-3 h-3" />© {photographer}
        </a>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* nav buttons */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* main image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col items-center max-w-[88vw] max-h-[78vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-w-[88vw] max-h-[72vh] object-contain rounded-2xl shadow-2xl select-none ring-1 ring-white/10"
            {...antiCopy}
          />
          <div className="mt-5 text-center">
            <p className="text-white font-semibold text-sm mb-1.5">{photo.caption ?? photo.alt}</p>
            <p className="flex items-center justify-center gap-1.5 text-white/50 text-xs">
              <MapPin className="w-3 h-3 text-[#c8a951]" />
              {photo.location}
              {photo.year && <span className="text-white/35 ml-1">· {photo.year}</span>}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* filmstrip */}
      <div
        className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center gap-2 overflow-x-auto scrollbar-none"
        onClick={(e) => e.stopPropagation()}
      >
        {photos.slice(Math.max(0, index - 4), index + 9).map((p, rel) => {
          const absIdx = Math.max(0, index - 4) + rel;
          return (
            <button
              key={p.id}
              onClick={() => {
                const ev = new CustomEvent("lightbox-seek", { detail: absIdx });
                window.dispatchEvent(ev);
              }}
              className={cn(
                "flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden ring-2 transition-all duration-200",
                absIdx === index
                  ? "ring-[#c8a951] scale-110"
                  : "ring-transparent opacity-50 hover:opacity-80"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover select-none"
                {...antiCopy}
              />
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── Filter Bar ───────────────────────────────────────────── */
function FilterBar({
  active,
  photos,
  onChange,
  layout,
  onLayoutToggle,
}: {
  active: GalleryCategory;
  photos: GalleryPhoto[];
  onChange: (v: GalleryCategory) => void;
  layout: "grid" | "masonry";
  onLayoutToggle: () => void;
}) {
  return (
    <div className="sticky top-[64px] z-20 bg-[#0a170f]/90 backdrop-blur-xl border-b border-white/8">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
          {GALLERY_CATEGORIES.map(({ label, value }) => {
            const count = value === "all" ? photos.length : photos.filter((p) => p.category === value).length;
            const isActive = active === value;
            return (
              <button
                key={value}
                onClick={() => onChange(value)}
                className={cn(
                  "flex-shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-250",
                  isActive
                    ? "bg-[#c8a951] text-[#0a170f] shadow-[0_0_16px_rgba(200,169,81,0.4)]"
                    : "bg-white/8 text-white/60 hover:bg-white/15 hover:text-white"
                )}
              >
                {label}
                <span className={cn("text-[9px]", isActive ? "text-[#0a170f]/60" : "text-white/30")}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        <button
          onClick={onLayoutToggle}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors"
          aria-label="Toggle layout"
        >
          {layout === "grid" ? (
            <LayoutGrid className="w-4 h-4 text-white/60" />
          ) : (
            <Grid3X3 className="w-4 h-4 text-white/60" />
          )}
        </button>
      </div>
    </div>
  );
}

/* ── Copyright notice ─────────────────────────────────────── */
function CopyrightNotice() {
  return (
    <div className="bg-[#060e09] border-b border-[#c8a951]/20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 sm:justify-between">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-3.5 h-3.5 text-[#c8a951] flex-shrink-0" />
          <p className="text-white/60 text-[11px]">
            <a
              href={PHOTO_OWNER.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#c8a951] hover:text-[#e0be6a] transition-colors"
            >
              <InstagramIcon className="w-3 h-3" />
              © {PHOTO_OWNER.name}
            </a>
            {" · "}
            <span>All rights reserved. Unauthorised reproduction or commercial use is prohibited.</span>
          </p>
        </div>
        <div className="flex items-center gap-2 sm:ml-6 flex-shrink-0">
          <Sparkles className="w-3 h-3 text-white/30 flex-shrink-0" />
          <p className="text-white/35 text-[10px] italic">
            Locations &amp; captions are AI-generated — may not be accurate in all cases.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Load More trigger ───────────────────────────────────── */
function LoadMoreTrigger({ onVisible }: { onVisible: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible(); },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [onVisible]);
  return <div ref={ref} className="h-1" />;
}

function shufflePhotos(photos: any) {
  return [...photos].sort(() => Math.random() - 0.5);
}

/* ── Main GalleryClient ───────────────────────────────────── */
export function GalleryClient({ photos }: { photos: GalleryPhoto[] }) {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [layout, setLayout] = useState<"grid" | "masonry">("grid");

  const [shuffledPhotos] = useState(() => shufflePhotos(photos));

  const filtered =
    activeFilter === "all"
      ? shuffledPhotos
      : shuffledPhotos.filter((p) => p.category === activeFilter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );
  const goNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );

  /* keyboard nav */
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  /* filmstrip seek */
  useEffect(() => {
    const handler = (e: Event) => {
      const idx = (e as CustomEvent<number>).detail;
      setLightboxIndex(idx);
    };
    window.addEventListener("lightbox-seek", handler);
    return () => window.removeEventListener("lightbox-seek", handler);
  }, []);

  /* scroll lock */
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [lightboxIndex]);

  /* reset when filter changes */
  useEffect(() => {
    setLightboxIndex(null);
    setVisibleCount(PAGE_SIZE);
  }, [activeFilter]);

  const loadMore = useCallback(() => {
    setVisibleCount((n) => Math.min(n + PAGE_SIZE, filtered.length));
  }, [filtered.length]);

  return (
    <div className="bg-[#080f0b] min-h-screen">
      <CopyrightNotice />

      <FilterBar
        active={activeFilter}
        photos={photos}
        onChange={setActiveFilter}
        layout={layout}
        onLayoutToggle={() => setLayout((l) => (l === "grid" ? "masonry" : "grid"))}
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        {/* results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-white/40 text-xs font-mono">
            <span className="text-white font-bold text-sm">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "photo" : "photos"}
            {activeFilter !== "all" && (
              <span className="text-[#c8a951] ml-1.5">— {activeFilter}</span>
            )}
          </p>
          {hasMore && (
            <p className="text-white/30 text-xs font-mono">
              showing {visible.length} of {filtered.length}
            </p>
          )}
        </div>

        {/* ── GRID layout ─────────────────────────────────────── */}
        {layout === "grid" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[200px] lg:auto-rows-[220px] gap-3">
            <AnimatePresence>
              {visible.map((photo, i) => (
                <Tile
                  key={photo.id}
                  photo={photo}
                  index={i}
                  gridIndex={i}
                  onClick={() => openLightbox(i)}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* ── MASONRY layout ─────────────────────────────────── */
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3">
            <AnimatePresence>
              {visible.map((photo, i) => {
                const ref = { current: null } as React.MutableRefObject<HTMLDivElement | null>;
                const photographer = photo.photographer ?? PHOTO_OWNER.name;
                return (
                  <MasonryTile
                    key={photo.id}
                    photo={photo}
                    index={i}
                    photographer={photographer}
                    onClick={() => openLightbox(i)}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-white/50 text-lg mb-3">No photos in this category</p>
            <button
              onClick={() => setActiveFilter("all")}
              className="text-[#c8a951] text-sm font-semibold underline underline-offset-4"
            >
              Show all photos
            </button>
          </div>
        )}

        {/* infinite load trigger */}
        {hasMore && <LoadMoreTrigger onVisible={loadMore} />}

        {/* manual load more */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              className="px-8 py-3 rounded-full border border-white/15 text-white/70 text-sm font-semibold hover:border-[#c8a951]/60 hover:text-[#c8a951] transition-all duration-300"
            >
              Load more · {filtered.length - visible.length} remaining
            </button>
          </div>
        )}
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={visible}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Masonry tile (for masonry layout) ───────────────────── */
function MasonryTile({
  photo,
  index,
  photographer,
  onClick,
}: {
  photo: GalleryPhoto;
  index: number;
  photographer: string;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  const aspectClass =
    photo.aspectRatio === "portrait" || photo.aspectRatio === "tall"
      ? "aspect-[3/4]"
      : photo.aspectRatio === "wide"
      ? "aspect-[16/9]"
      : photo.aspectRatio === "square"
      ? "aspect-square"
      : "aspect-[4/3]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="break-inside-avoid mb-3"
    >
      <button
        onClick={onClick}
        className="group relative block w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a951]"
        aria-label={`View: ${photo.alt}`}
      >
        <div className={cn("relative w-full select-none", aspectClass)} {...antiCopy}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06] pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-300" />

          <div className="absolute top-2.5 left-2.5">
            <span className="bg-black/40 backdrop-blur-md text-white/90 text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full border border-white/10">
              {photo.category}
            </span>
          </div>

          <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={PHOTO_OWNER.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-black/60 backdrop-blur-md text-[#c8a951] text-[8px] font-bold px-2 py-0.5 rounded-full hover:text-[#e0be6a] transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <InstagramIcon className="w-2 h-2" />© {photographer}
            </a>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-white text-xs font-semibold line-clamp-2 mb-0.5">{photo.caption ?? photo.alt}</p>
            <p className="flex items-center gap-1 text-white/50 text-[10px]">
              <MapPin className="w-2.5 h-2.5 text-[#c8a951]" />
              {photo.location}
            </p>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
