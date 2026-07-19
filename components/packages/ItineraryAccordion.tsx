"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Clock, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ItineraryDay } from "@/types";

export function ItineraryAccordion({ itinerary }: { itinerary: ItineraryDay[] }) {
  const [openDay, setOpenDay] = useState<number>(1);

  return (
    <div className="space-y-2">
      {itinerary.map((day) => {
        const isOpen = openDay === day.day;
        return (
          <div
            key={day.day}
            className={cn(
              "border rounded-xl overflow-hidden transition-colors duration-200",
              isOpen ? "border-[#c8a951]/40 shadow-sm" : "border-[#e4e4e4]"
            )}
          >
            <button
              onClick={() => setOpenDay(isOpen ? -1 : day.day)}
              className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-[#f8f4ec] transition-colors"
            >
              {/* Day number circle */}
              <span
                className={cn(
                  "w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 transition-colors",
                  isOpen
                    ? "bg-[#c8a951] text-[#0d1f17]"
                    : "bg-[#e8f5f1] text-[#1b3a2d]"
                )}
              >
                {day.day}
              </span>

              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    "font-semibold text-sm leading-snug transition-colors",
                    isOpen ? "text-[#0d1f17]" : "text-[#132a1f]"
                  )}
                >
                  {day.title}
                </p>
                {!isOpen && (day.altitude || day.duration || day.distance) && (
                  <div className="flex items-center gap-3 mt-0.5">
                    {day.altitude && (
                      <span className="flex items-center gap-1 text-[10px] text-[#767676]">
                        <Mountain className="w-2.5 h-2.5" />
                        {day.altitude.toLocaleString()} m
                      </span>
                    )}
                    {day.duration && (
                      <span className="flex items-center gap-1 text-[10px] text-[#767676]">
                        <Clock className="w-2.5 h-2.5" />
                        {day.duration} hrs
                      </span>
                    )}
                    {day.distance && (
                      <span className="flex items-center gap-1 text-[10px] text-[#767676]">
                        <MapPin className="w-2.5 h-2.5" />
                        {day.distance} km
                      </span>
                    )}
                  </div>
                )}
              </div>

              <ChevronDown
                className={cn(
                  "w-4 h-4 text-[#767676] flex-shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 border-t border-[#f0ebe0]">
                    <p className="text-[#555] text-sm leading-relaxed mb-3">
                      {day.description}
                    </p>

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-3">
                      {day.altitude && (
                        <span className="flex items-center gap-1.5 text-xs text-[#132a1f] bg-[#e8f5f1] rounded-full px-3 py-1">
                          <Mountain className="w-3 h-3 text-[#c8a951]" />
                          {day.altitude.toLocaleString()} m altitude
                        </span>
                      )}
                      {day.duration && (
                        <span className="flex items-center gap-1.5 text-xs text-[#132a1f] bg-[#e8f5f1] rounded-full px-3 py-1">
                          <Clock className="w-3 h-3 text-[#c8a951]" />
                          ~{day.duration} hrs hiking
                        </span>
                      )}
                      {day.distance && (
                        <span className="flex items-center gap-1.5 text-xs text-[#132a1f] bg-[#e8f5f1] rounded-full px-3 py-1">
                          <MapPin className="w-3 h-3 text-[#c8a951]" />
                          {day.distance} km
                        </span>
                      )}
                      {day.accommodation && (
                        <span className="text-xs text-[#555] bg-[#f8f4ec] rounded-full px-3 py-1">
                          🏨 {day.accommodation}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
