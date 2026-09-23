"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, Star, Mountain, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import type { Package } from "@/types";

interface PackageCardProps {
  pkg: Package;
  className?: string;
  index?: number;
}

const DIFFICULTY_COLOR: Record<string, string> = {
  Easy: "bg-green-500/90",
  Moderate: "bg-amber-500/90",
  Challenging: "bg-orange-500/90",
  Strenuous: "bg-red-500/90",
};

export function PackageCard({ pkg, className, index = 0 }: PackageCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className={cn("group relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-[0_4px_24px_rgb(0_0_0/0.08)] hover:shadow-[0_12px_40px_rgb(0_0_0/0.16)] transition-shadow duration-300", className)}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          {pkg.badge ? (
            <Badge variant="gold">{pkg.badge}</Badge>
          ) : (
            <span />
          )}
          <span
            className={cn(
              "text-white text-xs font-semibold px-2.5 py-0.5 rounded-full",
              DIFFICULTY_COLOR[pkg.difficulty]
            )}
          >
            {pkg.difficulty}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
          <Star className="w-3.5 h-3.5 text-[#c8a951] fill-[#c8a951]" />
          <span className="text-white text-xs font-semibold">{pkg.rating}</span>
          <span className="text-white/60 text-xs">({pkg.reviewCount})</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category */}
        <span className="text-xs font-semibold text-[#c8a951] uppercase tracking-wider mb-1.5">
          {pkg.category}
        </span>

        {/* Title */}
        <h3 className="font-display text-lg font-bold text-[#132a1f] leading-snug mb-1 group-hover:text-[#1b3a2d] transition-colors">
          {pkg.title}
        </h3>

        {/* Destination */}
        <p className="text-xs text-[#767676] mb-3 flex items-center gap-1">
          <Mountain className="w-3 h-3" />
          {pkg.destination}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-[#5a5a5a] mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#3d8a6e]" />
            {pkg.duration} Days
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-[#3d8a6e]" />
            {pkg.groupSize.min}–{pkg.groupSize.max} Pax
          </span>
          {pkg.altitude && (
            <span className="flex items-center gap-1">
              <Mountain className="w-3.5 h-3.5 text-[#3d8a6e]" />
              {(pkg.altitude / 1000).toFixed(1)}k m
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#e4e4e4] mb-4" />

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-xs text-[#767676]">From</span>
            <p className="text-xl font-bold text-[#1b3a2d] font-display leading-tight">
              {formatPrice(pkg.price)}
            </p>
          </div>
          <Link
            href={`/packages/${pkg.slug}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-[#1b3a2d] hover:text-[#c8a951] transition-colors group/link"
          >
            View Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
