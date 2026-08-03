"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background — confirmed Himalayan summit photo */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=85"
          alt="Himalayan mountain peaks at golden hour"
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f17]/95 via-[#0d1f17]/80 to-[#0d1f17]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[#c8a951] text-sm font-semibold tracking-widest uppercase mb-5"
          >
            <span className="w-6 h-px bg-[#c8a951]" />
            Ready for Your Adventure?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
          >
            Your Dream Trek{" "}
            <span className="text-[#c8a951]">Starts Here</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/75 text-lg mb-10 leading-relaxed"
          >
            Tell us your dream destination and we'll craft the perfect itinerary. Free consultation,
            no obligations. Our expert team is ready to plan your once-in-a-lifetime journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">
                Plan My Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <Link href="/packages">Browse Packages</Link>
            </Button>
          </motion.div>

          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-6 mb-8"
          >
            <a
              href="tel:+917819940565"
              className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors text-sm"
            >
              <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              +91 7819940565
            </a>
            <a
              href="mailto:info@himalvara.com"
              className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors text-sm"
            >
              <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              info@himalvara.com
            </a>
          </motion.div>

          {/* Veteran trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3 pt-6 border-t border-white/10"
          >
            <svg className="w-3.5 h-3.5 text-[#c8a951] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <span className="text-white/45 text-xs font-semibold tracking-[0.2em] uppercase">
              Veteran Founded · Veteran Led · Mission-Driven Excellence
            </span>
            <svg className="w-3.5 h-3.5 text-[#c8a951] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
