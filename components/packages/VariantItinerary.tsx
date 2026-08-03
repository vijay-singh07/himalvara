"use client";

import { ItineraryAccordion } from "./ItineraryAccordion";
import { usePackageVariant } from "./PackageVariantContext";
import type { ItineraryDay } from "@/types";

/**
 * Renders the day-by-day itinerary for the selected variant.
 * Falls back to the fallbackItinerary prop when no variant is selected
 * or when the selected variant hasn't defined its own itinerary yet.
 */
export function VariantItinerary({ fallbackItinerary }: { fallbackItinerary?: ItineraryDay[] }) {
  const ctx = usePackageVariant();
  const itinerary = ctx?.itinerary ?? fallbackItinerary;
  if (!itinerary || itinerary.length === 0) return null;

  const usingFallback =
    ctx?.selected && !ctx.selected.itinerary && fallbackItinerary === ctx.itinerary;

  return (
    <>
      {usingFallback && (
        <p className="text-xs text-[#8a6f2f] bg-[#faf3e0] border border-[#efdfae] rounded-lg px-3 py-2 mb-4">
          Detailed day-by-day itinerary for the <strong>{ctx?.selected?.origin}</strong> variant is being finalised.
          The plan below is the base itinerary — the selected variant adds or removes transit days on either end.
        </p>
      )}
      <ItineraryAccordion itinerary={itinerary} />
    </>
  );
}
