"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mountain, Triangle, Landmark, PawPrint, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PACKAGE_CATEGORIES } from "@/data/packages";

const ICON_MAP: Record<string, React.ReactNode> = {
  mountain: <Mountain className="w-6 h-6" />,
  triangle: <Triangle className="w-6 h-6" />,
  landmark: <Landmark className="w-6 h-6" />,
  "paw-print": <PawPrint className="w-6 h-6" />,
};

export function PackageCategoriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#f8f4ec]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle
          eyebrow="Our Specialties"
          title={"What Kind of Adventure\nAre You Looking For?"}
          subtitle="From high-altitude treks to cultural immersions — we curate extraordinary journeys for every type of traveller."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGE_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link
                href={cat.id === "custom" ? "/contact" : cat.id === "trekking" ? "/packages?category=Trekking" : "/packages"}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white hover:shadow-[0_12px_40px_rgb(0_0_0/0.14)] transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f17]/80 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#c8a951] text-[#0d1f17] flex items-center justify-center shadow-md">
                    {ICON_MAP[cat.icon]}
                  </div>

                  {/* Trip count */}
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium">
                    {cat.count} trips
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold text-[#132a1f] mb-1">
                      {cat.label}
                    </h3>
                    <p className="text-[#767676] text-xs leading-relaxed">{cat.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#c8a951] flex-shrink-0 transition-transform group-hover:translate-x-1 duration-200" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
