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
          The plan below is our base itinerary. Your <strong>{ctx?.selected?.origin}</strong> departure
          will be tailored around it — transit days, group size, and add-ons are agreed as part of your custom quote.
        </p>
      )}
      <ItineraryAccordion itinerary={itinerary} />
    </>
  );
}
