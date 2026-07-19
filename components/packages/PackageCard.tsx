import Image from "next/image";
import Link from "next/link";
import { Clock, Mountain, Users, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Package } from "@/types";

const DIFFICULTY_COLOR: Record<string, string> = {
  Easy: "bg-emerald-100 text-emerald-700",
  Moderate: "bg-blue-100 text-blue-700",
  Challenging: "bg-orange-100 text-orange-700",
  Strenuous: "bg-red-100 text-red-700",
};

interface PackageCardProps {
  pkg: Package;
  className?: string;
}

export function PackageCard({ pkg, className }: PackageCardProps) {
  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className={cn(
        "group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgb(0_0_0/0.07)] hover:shadow-[0_8px_40px_rgb(0_0_0/0.14)] border border-[#f0ebe0] transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Badge */}
        {pkg.badge && (
          <span className="absolute top-3 left-3 bg-[#c8a951] text-[#0d1f17] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
            {pkg.badge}
          </span>
        )}

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1">
          <Star className="w-3 h-3 fill-[#c8a951] text-[#c8a951]" />
          <span className="text-white text-xs font-semibold">{pkg.rating}</span>
          <span className="text-white/60 text-[10px]">({pkg.reviewCount})</span>
        </div>

        {/* Category chip */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-white/30">
            {pkg.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title + subtitle */}
        <h3 className="font-display font-bold text-[#132a1f] text-lg leading-snug mb-1 group-hover:text-[#1b3a2d] transition-colors">
          {pkg.title}
        </h3>
        <p className="text-[#767676] text-sm leading-snug mb-4 line-clamp-2">{pkg.subtitle}</p>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-4">
          <span className="flex items-center gap-1.5 text-xs text-[#555]">
            <Clock className="w-3.5 h-3.5 text-[#c8a951]" />
            {pkg.duration} days
          </span>
          {pkg.altitude && (
            <span className="flex items-center gap-1.5 text-xs text-[#555]">
              <Mountain className="w-3.5 h-3.5 text-[#c8a951]" />
              {pkg.altitude.toLocaleString()} m
            </span>
          )}
          <span className="flex items-center gap-1.5 text-xs text-[#555]">
            <Users className="w-3.5 h-3.5 text-[#c8a951]" />
            Max {pkg.groupSize.max}
          </span>
        </div>

        {/* Difficulty badge */}
        <div className="mb-4">
          <span
            className={cn(
              "text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full",
              DIFFICULTY_COLOR[pkg.difficulty] ?? "bg-gray-100 text-gray-600"
            )}
          >
            {pkg.difficulty}
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-[#f0ebe0]">
          <div>
            <p className="text-[10px] text-[#767676] font-medium uppercase tracking-wide">From</p>
            <p className="font-display text-xl font-bold text-[#132a1f]">
              ₹{pkg.price.toLocaleString("en-IN")}
              <span className="font-body font-normal text-[#767676] text-xs ml-1">/ person</span>
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#1b3a2d] group-hover:text-[#c8a951] transition-colors">
            View Trek
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
