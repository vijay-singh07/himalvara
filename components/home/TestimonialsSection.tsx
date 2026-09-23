"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { TESTIMONIALS } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const CARDS_PER_VIEW = 3;

export function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(TESTIMONIALS.length / CARDS_PER_VIEW);

  const prev = useCallback(() => setPage((p) => (p - 1 + totalPages) % totalPages), [totalPages]);
  const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);

  const visible = TESTIMONIALS.slice(page * CARDS_PER_VIEW, page * CARDS_PER_VIEW + CARDS_PER_VIEW);

  return (
    <section className="py-24 lg:py-32 bg-[#f8f4ec]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-14">
          <SectionTitle
            eyebrow="Traveller Stories"
            title={"What Our Trekkers\nSay About Us"}
            align="left"
          />
          {/* Navigation buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-[#1b3a2d] flex items-center justify-center text-[#1b3a2d] hover:bg-[#1b3a2d] hover:text-white transition-all duration-200"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === page ? "w-6 bg-[#1b3a2d]" : "w-1.5 bg-[#c4c4c4] hover:bg-[#9e9e9e]"
                  )}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-[#1b3a2d] flex items-center justify-center text-[#1b3a2d] hover:bg-[#1b3a2d] hover:text-white transition-all duration-200"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visible.map((t, i) => (
              <ReviewCard key={t.id} testimonial={t} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-10 mt-16 pt-12 border-t border-[#e4e4e4]"
        >
          {[
            { label: "Zero Fatalities", value: "100%", sub: "Safety record across all treks" },
            { label: "Trek Completion Rate", value: "98%", sub: "Industry average is ~85%" },
            { label: "Veteran Founded", value: "2018", sub: "Army-grade expedition planning" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-xs text-[#9e9e9e] uppercase tracking-widest mb-1.5">{item.label}</p>
              <p className="font-display text-2xl font-bold text-[#1b3a2d]">{item.value}</p>
              <p className="text-xs text-[#767676] mt-0.5">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
