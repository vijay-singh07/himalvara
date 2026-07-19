"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionTitleProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  const isDark = theme === "dark";

  return (
    <motion.div
      className={cn("flex flex-col gap-3", alignClass, className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.12 }}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase",
            isDark ? "text-[#c8a951]" : "text-[#c8a951]"
          )}
        >
          <span className="w-6 h-px bg-[#c8a951]" aria-hidden />
          {eyebrow}
          <span className="w-6 h-px bg-[#c8a951]" aria-hidden />
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight whitespace-pre-line",
          isDark ? "text-white" : "text-[#132a1f]"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className={cn(
            "max-w-2xl text-base sm:text-lg leading-relaxed",
            isDark ? "text-white/70" : "text-[#5a5a5a]"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
