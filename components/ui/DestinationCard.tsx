"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Destination } from "@/types";

interface DestinationCardProps {
  destination: Destination;
  className?: string;
  index?: number;
}

export function DestinationCard({
  destination,
  className,
  index = 0,
}: DestinationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className={cn("group relative overflow-hidden rounded-2xl", className)}
    >
      <Link href={`/destinations/${destination.slug}`} aria-label={`Explore ${destination.name}`}>
        {/* Image */}
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-[#c8a951] text-xs font-semibold uppercase tracking-widest mb-1">
              {destination.country}
            </p>
            <h3 className="font-display text-2xl font-bold text-white mb-1">
              {destination.name}
            </h3>
            <p className="text-white/70 text-sm mb-3">{destination.tagline}</p>
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-xs">
                {destination.packageCount} packages
              </span>
              <span className="flex items-center gap-1 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                Explore
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
