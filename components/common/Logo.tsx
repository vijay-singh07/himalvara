"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

/*
 * The brand PNG is 1254×1254 — a full brand sheet.
 * The circular emblem badge lives in the top ~50% of the image,
 * centered horizontally.
 *
 * CSS technique:
 *   background-size: 200%  → renders image at 2× the container size
 *   background-position: 50% 0%  → shows the center-top crop
 *   rounded-full  → circle mask so only the badge shows
 *
 * This gives us a clean circular emblem without any external image processing.
 */

interface LogoProps {
  isScrolled?: boolean;
  /** Force text colour — useful in Footer where bg is always dark */
  forceDark?: boolean;
  className?: string;
}

export function Logo({ isScrolled = false, forceDark = false, className }: LogoProps) {
  const textColorPrimary = isScrolled || forceDark ? "text-[#132a1f]" : "text-white";
  const textColorSecondary = isScrolled || forceDark ? "text-[#767676]" : "text-white/60";

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 flex-shrink-0 group focus-visible:outline-none",
        className
      )}
      aria-label="Himalvara Travels — home"
    >
      {/* ── Circular emblem badge ─────────────────────────── */}
      <div
        className={cn(
          "w-12 h-12 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-105",
          /* Gold ring — matches brand accent */
          "ring-2 ring-[#c8a951]/60 ring-offset-1",
          isScrolled || forceDark
            ? "ring-offset-white"
            : "ring-offset-transparent"
        )}
        style={{
          backgroundImage: "url('/himalvara-logo.png')",
          /* 200% renders the image at twice the container width (96px)
             so the 1254px source maps to 96px → scale ≈ 0.0766
             The container (48px) clips the centre-top of that 96px image */
          backgroundSize: "200%",
          /* horizontal 50% → align image centre with container centre
             vertical 0%   → align image top with container top
             This reveals rows 0–627 of source (≈ the full emblem area) */
          backgroundPosition: "50% 0%",
          backgroundRepeat: "no-repeat",
        }}
        role="img"
        aria-hidden="true"
      />

      {/* ── Brand name ────────────────────────────────────── */}
      <div>
        <span
          className={cn(
            "font-display text-xl font-bold leading-none block tracking-tight",
            "transition-colors duration-300",
            textColorPrimary
          )}
        >
          Himalvara
        </span>
        <span
          className={cn(
            "text-[10px] tracking-[0.16em] uppercase font-medium leading-none block mt-0.5",
            "transition-colors duration-300",
            textColorSecondary
          )}
        >
          Travels
        </span>
      </div>
    </Link>
  );
}
