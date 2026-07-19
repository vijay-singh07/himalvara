"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MILESTONES = [
  {
    year: "2009",
    title: "Founded",
    description:
      "Retired Major Arjun Rawat registers Himalvara Travels in Pithoragarh with one guide, one porter, and a single mantra: safety above all.",
    highlight: true,
  },
  {
    year: "2011",
    title: "First Adi Kailash Expedition",
    description:
      "Our inaugural Adi Kailash Yatra group of 6 pilgrims — 100% completion rate. The template for every yatra and expedition that followed was written on that journey.",
  },
  {
    year: "2015",
    title: "Uttarakhand Flood Response",
    description:
      "When devastating floods struck the region, our team immediately pivoted to humanitarian support — coordinating evacuations and supply runs across Pithoragarh district for 3 months.",
    highlight: true,
  },
  {
    year: "2017",
    title: "Darma Valley & Inner Line Routes",
    description:
      "Secured licensed operator status for Inner Line Permit routes and launched the Darma Valley Trek and Om Parvat Yatra. Our veteran-grade logistics extended into the most remote corridors of Kumaon.",
  },
  {
    year: "2019",
    title: "1,000th Client Milestone",
    description:
      "A decade of yatras and treks, zero fatalities, and a 98% completion success rate. We celebrated with a sunrise ceremony at Nabhidhang with our guides.",
    highlight: true,
  },
  {
    year: "2022",
    title: "5-Star Rating Across All Platforms",
    description:
      "Consistently rated 5 stars on TripAdvisor, Google, and Trustpilot. Best Trekking Agency Uttarakhand award — for the third consecutive year.",
  },
  {
    year: "2024",
    title: "5,000+ Trekkers Served",
    description:
      "15 years. 5,000+ adventurers from 60+ countries. The Kumaon Himalaya remains humbling — we remain ready.",
    highlight: true,
  },
];

export function AboutTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-[#e4e4e4] -translate-x-1/2" />

      <div className="space-y-10">
        {MILESTONES.map((m, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className={cn(
                "relative flex items-start sm:items-center gap-6 sm:gap-0",
                "sm:grid sm:grid-cols-2"
              )}
            >
              {/* Content — left side on desktop for even, right for odd */}
              <div
                className={cn(
                  "flex-1 sm:flex-none pl-14 sm:pl-0",
                  isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:col-start-2"
                )}
              >
                <p className="text-[#c8a951] text-xs font-bold tracking-widest uppercase mb-1">
                  {m.year}
                </p>
                <h3
                  className={cn(
                    "font-display text-lg font-bold mb-2",
                    m.highlight ? "text-[#0d1f17]" : "text-[#132a1f]"
                  )}
                >
                  {m.title}
                </h3>
                <p className="text-[#767676] text-sm leading-relaxed">{m.description}</p>
              </div>

              {/* Dot — on the centre line */}
              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 flex-shrink-0">
                <div
                  className={cn(
                    "w-4 h-4 rounded-full border-2 transition-all",
                    m.highlight
                      ? "bg-[#c8a951] border-[#c8a951] shadow-[0_0_0_4px_rgba(200,169,81,0.2)]"
                      : "bg-white border-[#c8a951]"
                  )}
                />
              </div>

              {/* Empty cell for odd items (right side takes col-start-2, left is empty) */}
              {!isLeft && <div className="hidden sm:block sm:col-start-1 sm:row-start-1" />}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
