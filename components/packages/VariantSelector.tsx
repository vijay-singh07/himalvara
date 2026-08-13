"use client";

import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePackageVariant } from "./PackageVariantContext";

export function VariantSelector() {
  const ctx = usePackageVariant();
  if (!ctx || ctx.variants.length < 2) return null;

  return (
    <div className="mb-8 bg-[#f8f4ec] border border-[#e8e4db] rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="w-4 h-4 text-[#c8a951]" />
        <p className="text-xs font-bold text-[#132a1f] uppercase tracking-wider">
          Choose your starting city
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {ctx.variants.map((v) => {
          const active = ctx.selected?.originSlug === v.originSlug;
          return (
            <button
              key={v.originSlug}
              type="button"
              onClick={() => ctx.setSelectedSlug(v.originSlug)}
              className={cn(
                "flex flex-col items-start gap-0.5 rounded-xl px-4 py-2.5 text-left transition-all border",
                active
                  ? "bg-[#0d1f17] text-white border-[#0d1f17] shadow-sm"
                  : "bg-white text-[#132a1f] border-[#e4e4e4] hover:border-[#1b3a2d]"
              )}
              aria-pressed={active}
            >
              <span className="text-sm font-semibold leading-none">{v.origin}</span>
              <span
                className={cn(
                  "text-[11px] leading-none font-medium",
                  active ? "text-white/60" : "text-[#767676]"
                )}
              >
                {v.duration} days{v.nights ? ` · ${v.nights} nights` : ""}
              </span>
            </button>
          );
        })}
      </div>
      {ctx.selected?.meals && (
        <p className="text-[11px] text-[#767676] mt-3">{ctx.selected.meals}</p>
      )}
    </div>
  );
}
