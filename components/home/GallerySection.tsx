"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Images } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

/*
 * Gallery layout (desktop — 4 cols):
 * ┌─────────────┬──────┬──────┐
 * │             │  B   │  C   │
 * │      A      ├──────┴──────┤
 * │  (col-span  │      D      │
 * │     1 r2)   │  (col-span2)│
 * ├──────┬──────┴──────┬──────┤
 * │  E   │      F      │  G   │
 * └──────┴─────────────┴──────┘
 */
const GALLERY_ITEMS = [
  {
    id: "g1",
    src: "/gallery/vsb-309.jpg",
    alt: "Two trekkers lying in alpine grass facing a panorama of snow-capped Himalayan peaks",
    className: "row-span-2",
  },
  {
    id: "g2",
    src: "/gallery/vsb-299.jpg",
    alt: "A pyramidal snow-covered Himalayan peak glowing in golden alpenglow at dusk",
    className: "",
  },
  {
    id: "g3",
    src: "/gallery/vsb-297.jpg",
    alt: "White marble temple shikhara with a saffron flag flying against a deep blue night sky",
    className: "",
  },
  {
    id: "g4",
    src: "/gallery/vsb-310.jpg",
    alt: "A gnarled deodar tree frames a sweeping view down a forested mountain valley",
    className: "col-span-2",
  },
  {
    id: "g5",
    src: "/gallery/vsb-300.jpg",
    alt: "A star-filled night sky above snow-dusted mountain ridges framed by silhouetted conifers",
    className: "",
  },
  {
    id: "g6",
    src: "/gallery/vsb-316.jpg",
    alt: "A solo traveller with a backpack stands before lush green meadows and massive snow-streaked peaks",
    className: "",
  },
  {
    id: "g7",
    src: "/gallery/vsb-303.jpg",
    alt: "A trekker performs a handstand on a vast snow-covered glacier field with pine trees behind",
    className: "",
  },
];

export function GallerySection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-10">
          <SectionTitle
            eyebrow="Through the Lens"
            title={"Adventures Worth\nRemembering"}
            align="left"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Button variant="outline" size="md" asChild>
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/*
          Grid: 3 columns on desktop.
          Row heights driven by auto-rows of 220px (desktop).
          Items with row-span-2 or col-span-2 are set explicitly.
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
          {/* A — tall left item (row-span-2) */}
          <GalleryThumb item={GALLERY_ITEMS[0]} index={0} className="row-span-2" />

          {/* B */}
          <GalleryThumb item={GALLERY_ITEMS[1]} index={1} />

          {/* C */}
          <GalleryThumb item={GALLERY_ITEMS[2]} index={2} />

          {/* D — wide bottom-right (col-span-2) */}
          <GalleryThumb item={GALLERY_ITEMS[3]} index={3} className="col-span-2" />

          {/* E */}
          <GalleryThumb item={GALLERY_ITEMS[4]} index={4} />

          {/* F */}
          <GalleryThumb item={GALLERY_ITEMS[5]} index={5} />

          {/* G */}
          <GalleryThumb item={GALLERY_ITEMS[6]} index={6} />
        </div>
      </div>
    </section>
  );
}

function GalleryThumb({
  item,
  index,
  className = "",
}: {
  item: (typeof GALLERY_ITEMS)[0];
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className={`relative group overflow-hidden rounded-xl ${className}`}
    >
      <Link href="/gallery" className="absolute inset-0 z-10" aria-label="View full gallery" />
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(min-width: 1024px) 33vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20">
          <Images className="w-3.5 h-3.5" />
          View Gallery
        </div>
      </div>
    </motion.div>
  );
}
