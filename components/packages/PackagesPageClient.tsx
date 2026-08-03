"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PackageCard } from "@/components/packages/PackageCard";
import type { Package, Difficulty, Category } from "@/types";

const CATEGORIES: { label: string; value: "all" | Category }[] = [
  { label: "All", value: "all" },
  { label: "Trekking", value: "Trekking" },
  { label: "Peak Climbing", value: "Peak Climbing" },
  { label: "Cultural Tours", value: "Cultural Tour" },
  { label: "Wildlife Safari", value: "Wildlife Safari" },
];

const DIFFICULTIES: { label: string; value: "all" | Difficulty }[] = [
  { label: "Any Difficulty", value: "all" },
  { label: "Easy", value: "Easy" },
  { label: "Moderate", value: "Moderate" },
  { label: "Challenging", value: "Challenging" },
  { label: "Strenuous", value: "Strenuous" },
];

const DURATIONS = [
  { label: "Any Duration", value: "all" },
  { label: "Under 7 days", value: "short" },
  { label: "7–14 days", value: "medium" },
  { label: "Over 14 days", value: "long" },
];

const SORTS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low → High", value: "price-asc" },
  { label: "Price: High → Low", value: "price-desc" },
  { label: "Top Rated", value: "rating" },
  { label: "Duration", value: "duration" },
];

const DESTINATIONS_FILTER = [
  { label: "All Destinations", value: "all" },
  { label: "Kumaon", value: "Kumaon" },
  { label: "Garhwal", value: "Garhwal" },
];

interface Filters {
  category: string;
  difficulty: string;
  duration: string;
  destination: string;
  sort: string;
}

interface InitialFilters {
  destination?: string;
  duration?: string;
}

function makeDefault(init: InitialFilters): Filters {
  return {
    category: "all",
    difficulty: "all",
    duration: init.duration ?? "all",
    destination: init.destination ?? "all",
    sort: "featured",
  };
}

function activeFilterCount(f: Filters) {
  let n = 0;
  if (f.category !== "all") n++;
  if (f.difficulty !== "all") n++;
  if (f.duration !== "all") n++;
  if (f.destination !== "all") n++;
  if (f.sort !== "featured") n++;
  return n;
}

export function PackagesPageClient({
  packages,
  initialFilters = {},
}: {
  packages: Package[];
  initialFilters?: InitialFilters;
}) {
  const [filters, setFilters] = useState<Filters>(() => makeDefault(initialFilters));
  const set = (key: keyof Filters) => (val: string) =>
    setFilters((prev) => ({ ...prev, [key]: val }));

  const filtered = useMemo(() => {
    const result = packages
      .filter((p) => filters.category === "all" || p.category === filters.category)
      .filter((p) => filters.difficulty === "all" || p.difficulty === filters.difficulty)
      .filter((p) => filters.destination === "all" || p.destination.includes(filters.destination))
      .filter((p) => {
        if (filters.duration === "all") return true;
        if (filters.duration === "short") return p.duration <= 7;
        if (filters.duration === "medium") return p.duration > 7 && p.duration <= 14;
        if (filters.duration === "long") return p.duration > 14;
        return true;
      });

    return result.sort((a, b) => {
      switch (filters.sort) {
        case "price-asc": return a.price - b.price;
        case "price-desc": return b.price - a.price;
        case "rating": return b.rating - a.rating;
        case "duration": return a.duration - b.duration;
        default:
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
      }
    });
  }, [packages, filters]);

  const count = activeFilterCount(filters);

  return (
    <div>
      {/* ── Filter Bar ──────────────────────────────────────────── */}
      <div className="sticky top-[64px] z-20 bg-white/95 backdrop-blur-md border-b border-[#e4e4e4] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3">
          {/* Category pills — scrollable on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => set("category")(cat.value)}
                className={cn(
                  "flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                  filters.category === cat.value
                    ? "bg-[#0d1f17] text-white"
                    : "bg-[#f0ebe0] text-[#555] hover:bg-[#e8f5f1] hover:text-[#1b3a2d]"
                )}
              >
                {cat.label}
              </button>
            ))}

            {/* Divider */}
            <span className="flex-shrink-0 w-px h-5 bg-[#e4e4e4] mx-1" />

            {/* Destination */}
            <select
              value={filters.destination}
              onChange={(e) => set("destination")(e.target.value)}
              className="flex-shrink-0 text-sm text-[#555] bg-[#f0ebe0] rounded-full px-3 py-1.5 border-none outline-none cursor-pointer hover:bg-[#e8f5f1] hover:text-[#1b3a2d] transition-colors"
            >
              {DESTINATIONS_FILTER.map((d) => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>

            {/* Difficulty */}
            <select
              value={filters.difficulty}
              onChange={(e) => set("difficulty")(e.target.value)}
              className="flex-shrink-0 text-sm text-[#555] bg-[#f0ebe0] rounded-full px-3 py-1.5 border-none outline-none cursor-pointer hover:bg-[#e8f5f1] hover:text-[#1b3a2d] transition-colors"
            >
              {DIFFICULTIES.map((d) => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>

            {/* Duration */}
            <select
              value={filters.duration}
              onChange={(e) => set("duration")(e.target.value)}
              className="flex-shrink-0 text-sm text-[#555] bg-[#f0ebe0] rounded-full px-3 py-1.5 border-none outline-none cursor-pointer hover:bg-[#e8f5f1] hover:text-[#1b3a2d] transition-colors"
            >
              {DURATIONS.map((d) => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Sort */}
            <div className="flex-shrink-0 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#767676]" />
              <select
                value={filters.sort}
                onChange={(e) => set("sort")(e.target.value)}
                className="text-sm text-[#555] bg-transparent border-none outline-none cursor-pointer"
              >
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            {/* Clear filters */}
            {count > 0 && (
              <button
                onClick={() => setFilters(makeDefault({}))}
                className="flex-shrink-0 flex items-center gap-1 text-xs text-[#767676] hover:text-[#132a1f] transition-colors ml-1"
              >
                <X className="w-3 h-3" />
                Clear ({count})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Results ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        {/* Count */}
        <p className="text-sm text-[#767676] mb-7">
          Showing{" "}
          <span className="font-semibold text-[#132a1f]">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "package" : "packages"}
          {filters.category !== "all" && (
            <> in <span className="font-semibold text-[#132a1f]">{filters.category}</span></>
          )}
        </p>

        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24"
          >
            <p className="font-display text-2xl text-[#132a1f] mb-2">No packages found</p>
            <p className="text-[#767676] mb-6">Try adjusting your filters.</p>
            <button
              onClick={() => setFilters(makeDefault({}))}
              className="text-sm font-semibold text-[#1b3a2d] underline underline-offset-2"
            >
              Clear all filters
            </button>
          </motion.div>
        ) : (
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7"
            >
              {filtered.map((pkg, i) => (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <PackageCard pkg={pkg} className="h-full" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
