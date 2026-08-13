"use client";

import Link from "next/link";
import { Clock, Mountain, Users, BarChart2, ShieldCheck, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Package } from "@/types";
import { usePackageVariant } from "./PackageVariantContext";

const DIFFICULTY_COLOR: Record<string, string> = {
  Easy: "text-emerald-700",
  Moderate: "text-blue-700",
  Challenging: "text-orange-700",
  Strenuous: "text-red-700",
};

export function BookingWidget({ pkg }: { pkg: Package }) {
  const ctx = usePackageVariant();
  const duration = ctx?.duration ?? pkg.duration;

  /* "Starts from" pricing:
     - If any variant has a real (non-custom-quote) price, show the lowest of those.
     - Otherwise (all variants are custom quote, or no variants), show tailored copy. */
  const pricedVariants = pkg.variants?.filter((v) => !v.customQuote) ?? [];
  const startsFrom = pricedVariants.length > 0
    ? Math.min(...pricedVariants.map((v) => v.price))
    : null;
  const showStartsFrom = startsFrom !== null;

  return (
    <div className="sticky top-28 rounded-2xl overflow-hidden shadow-[0_4px_40px_rgb(0_0_0/0.12)] border border-[#e4e4e4]">
      {/* Pricing header */}
      <div className="bg-[#0d1f17] px-6 py-5">
        {showStartsFrom ? (
          <>
            <p className="text-white/50 text-[10px] font-semibold tracking-widest uppercase mb-1">
              Starts from
            </p>
            <div className="flex items-baseline gap-2">
              <p className="font-display text-3xl font-bold text-[#c8a951]">
                ₹{startsFrom.toLocaleString("en-IN")}
              </p>
              <span className="text-white/50 text-sm">per person</span>
            </div>
            <p className="text-white/40 text-xs mt-2 leading-snug">
              Final price varies by dates, group size, and starting city.
            </p>
          </>
        ) : (
          <>
            <p className="text-white/50 text-[10px] font-semibold tracking-widest uppercase mb-1">
              Every trek, tailored
            </p>
            <p className="font-display text-2xl font-bold text-[#c8a951] leading-tight">
              Custom package
            </p>
            <p className="text-white/50 text-xs mt-2 leading-snug">
              Pricing depends on your group size, dates, and add-ons.
            </p>
          </>
        )}
      </div>

      {/* Key stats */}
      <div className="bg-white px-6 py-5 border-b border-[#f0ebe0]">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-[#c8a951] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] text-[#767676] font-medium uppercase tracking-wide">Duration</p>
              <p className="text-sm font-semibold text-[#132a1f]">{duration} days</p>
            </div>
          </div>

          {pkg.altitude && (
            <div className="flex items-start gap-2.5">
              <Mountain className="w-4 h-4 text-[#c8a951] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-[#767676] font-medium uppercase tracking-wide">Max Altitude</p>
                <p className="text-sm font-semibold text-[#132a1f]">
                  {pkg.altitude.toLocaleString()} m
                </p>
              </div>
            </div>
          )}

          <div className="flex items-start gap-2.5">
            <Users className="w-4 h-4 text-[#c8a951] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] text-[#767676] font-medium uppercase tracking-wide">Group Size</p>
              <p className="text-sm font-semibold text-[#132a1f]">
                {pkg.groupSize.min}–{pkg.groupSize.max} people
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <BarChart2 className="w-4 h-4 text-[#c8a951] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] text-[#767676] font-medium uppercase tracking-wide">Difficulty</p>
              <p
                className={`text-sm font-semibold ${DIFFICULTY_COLOR[pkg.difficulty] ?? "text-[#132a1f]"}`}
              >
                {pkg.difficulty}
              </p>
            </div>
          </div>
        </div>

        {/* Best season */}
        {pkg.bestSeason && pkg.bestSeason.length > 0 && (
          <div className="mt-4 pt-4 border-t border-[#f0ebe0]">
            <p className="text-[10px] text-[#767676] font-medium uppercase tracking-wide mb-2">
              Best Season
            </p>
            <div className="flex flex-wrap gap-1.5">
              {pkg.bestSeason.map((month) => (
                <span
                  key={month}
                  className="text-xs bg-[#e8f5f1] text-[#1b3a2d] font-medium px-2 py-0.5 rounded-full"
                >
                  {month}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/*
        CTA — a single prominent gold button opens the contact form
        with the trek pre-selected. The soft cream gradient background
        + gold drop-shadow lift the button off the white card so the eye
        lands here naturally after scanning the stats above.
      */}
      <div className="bg-gradient-to-b from-[#faf6ec] to-white px-6 py-6 border-t border-[#f0ebe0]">
        <p className="text-center text-[10px] text-[#8a6f2f] font-bold tracking-[0.22em] uppercase mb-3">
          Ready to plan your trek?
        </p>
        <Button
          variant="primary"
          size="lg"
          className="w-full px-6 shadow-[0_6px_20px_rgb(200_169_81/0.35)] hover:shadow-[0_10px_28px_rgb(200_169_81/0.5)] hover:-translate-y-0.5"
          asChild
        >
          <Link href={`/contact?package=${pkg.slug}`}>
            Get Your Custom Package
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <p className="text-center text-[11px] text-[#767676] mt-3 leading-snug">
          Free consultation · Response within 24 hours
        </p>
      </div>

      {/* Veteran trust footer */}
      <div className="bg-[#f8f4ec] px-6 py-4 space-y-3">
        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#1b3a2d] mt-0.5 flex-shrink-0" />
          <p className="text-[#132a1f] text-xs leading-snug font-medium">
            Veteran-led safety protocols · Zero-compromise emergency planning
          </p>
        </div>
        <a
          href="tel:+917819940565"
          className="flex items-center gap-2 text-[#1b3a2d] text-xs font-semibold hover:text-[#c8a951] transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          +91 7819940565 — Talk to an expert
        </a>
      </div>
    </div>
  );
}
