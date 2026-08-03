"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ZoomIn } from "lucide-react";
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
    src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Parvati_Kund_at_Adi-Kailash.jpg",
    alt: "Parvati Kund — sacred glacial lake at Adi Kailash, Pithoragarh",
    className: "row-span-2",
  },
  {
    id: "g2",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Om_Parwat.jpg",
    alt: "Om Parvat — natural OM symbol etched in snow, Nabhidhang",
    className: "",
  },
  {
    id: "g3",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Panchachuli_Peaks.jpg",
    alt: "Panchachuli peaks rising above the Kumaon Himalaya",
    className: "",
  },
  {
    id: "g4",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/52/Kumaon_Himalaya_1.jpg",
    alt: "Kumaon Himalaya mountains, Dharchula region",
    className: "col-span-2",
  },
  {
    id: "g5",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Adi_Kailash.jpg",
    alt: "Adi Kailash (Chhota Kailash) — sacred peak, Pithoragarh",
    className: "",
  },
  {
    id: "g6",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/66/Panchachuli_%2Cuttarakhand%2CIndia.JPG",
    alt: "Panchachuli massif from Munsiyari, Uttarakhand",
    className: "",
  },
  {
    id: "g7",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Complete_pic_of_Jageshwar_temple.jpg",
    alt: "Jageshwar Dham ancient temple complex, Almora, Kumaon",
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
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(min-width: 1024px) 33vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <ZoomIn className="w-5 h-5 text-white" />
        </div>
      </div>
    </motion.div>
  );
}
