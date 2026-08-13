"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Package, PackageVariant, ItineraryDay } from "@/types";

interface VariantContextValue {
  variants: PackageVariant[];
  selected: PackageVariant | null;
  setSelectedSlug: (slug: string) => void;
  /** Duration/price/priceNote/itinerary resolved through the selected variant, falling back to the top-level package fields */
  duration: number;
  price: number;
  priceNote?: string;
  itinerary?: ItineraryDay[];
  meals?: string;
  /** True when the active variant is priced on request rather than by a fixed number */
  customQuote: boolean;
}

const VariantContext = createContext<VariantContextValue | null>(null);

export function PackageVariantProvider({
  pkg,
  children,
}: {
  pkg: Package;
  children: ReactNode;
}) {
  const variants = pkg.variants ?? [];
  const [selectedSlug, setSelectedSlug] = useState<string>(
    variants[0]?.originSlug ?? ""
  );

  const value = useMemo<VariantContextValue>(() => {
    const selected = variants.find((v) => v.originSlug === selectedSlug) ?? null;
    return {
      variants,
      selected,
      setSelectedSlug,
      duration: selected?.duration ?? pkg.duration,
      price: selected?.price ?? pkg.price,
      priceNote: selected?.priceNote ?? pkg.priceNote,
      itinerary: selected?.itinerary ?? pkg.itinerary,
      meals: selected?.meals,
      customQuote: selected?.customQuote ?? false,
    };
  }, [variants, selectedSlug, pkg.duration, pkg.price, pkg.priceNote, pkg.itinerary]);

  return <VariantContext.Provider value={value}>{children}</VariantContext.Provider>;
}

/** Read the active variant. Returns null if used outside a provider (safe fallback). */
export function usePackageVariant(): VariantContextValue | null {
  return useContext(VariantContext);
}
