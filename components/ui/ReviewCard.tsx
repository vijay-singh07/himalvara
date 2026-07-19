"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface ReviewCardProps {
  testimonial: Testimonial;
  className?: string;
  index?: number;
}

export function ReviewCard({ testimonial, className, index = 0 }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "relative flex flex-col bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgb(0_0_0/0.07)] hover:shadow-[0_8px_32px_rgb(0_0_0/0.12)] transition-shadow duration-300",
        className
      )}
    >
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-[#c8a951]/30 mb-3 fill-[#c8a951]/20" />

      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < testimonial.rating
                ? "text-[#c8a951] fill-[#c8a951]"
                : "text-[#e4e4e4] fill-[#e4e4e4]"
            )}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-[#5a5a5a] text-sm leading-relaxed flex-1 mb-4">
        "{testimonial.text}"
      </p>

      {/* Trek badge */}
      {testimonial.trek && (
        <span className="inline-block text-xs font-semibold text-[#1b3a2d] bg-[#e8f5f1] rounded-full px-3 py-1 mb-4 self-start">
          {testimonial.trek}
        </span>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#f0f0f0]">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1b3a2d] to-[#3d8a6e] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#132a1f]">{testimonial.name}</p>
          <p className="text-xs text-[#767676]">{testimonial.location}</p>
        </div>
        {testimonial.date && (
          <span className="ml-auto text-xs text-[#9e9e9e]">{testimonial.date}</span>
        )}
      </div>
    </motion.div>
  );
}
