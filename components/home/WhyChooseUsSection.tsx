"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Star, Users, HeartHandshake, Award } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Every trek follows rigorous safety protocols with certified guides, first aid training, and 24/7 emergency support.",
  },
  {
    icon: Compass,
    title: "Expert Local Guides",
    description:
      "Our guides are born and raised in the mountains — they bring unrivalled knowledge, warmth, and mountain wisdom.",
  },
  {
    icon: Star,
    title: "Unmatched Experience",
    description:
      "15+ years of guiding thousands of trekkers means we know exactly what makes an adventure truly unforgettable.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Service",
    description:
      "No cookie-cutter packages. Every itinerary is tailored to your fitness level, interests, and travel style.",
  },
  {
    icon: Users,
    title: "Small Group Sizes",
    description:
      "We cap group sizes to ensure quality, flexibility, and a genuine connection with your guide and the landscape.",
  },
  {
    icon: Award,
    title: "Award-Winning Agency",
    description:
      "Recognised as one of Nepal's top trekking agencies, with consistent 5-star reviews across all platforms.",
  },
];

export function WhyChooseUsSection() {
  return (
    /* No overflow-hidden here — the floating cards extend slightly outside the image */
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            /* Extra padding to give floating cards room without clipping */
            className="relative pt-10 pb-8 px-8 lg:px-6"
          >
            {/* Main image */}
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=80"
                alt="Trekking guide leading group"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              {/* subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating badge — Experience (bottom-right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute bottom-0 right-0 bg-[#1b3a2d] rounded-2xl p-5 shadow-xl"
            >
              <p className="font-display text-4xl font-bold text-[#c8a951]">15+</p>
              <p className="text-white text-sm mt-1 leading-snug">
                Years of<br />Experience
              </p>
            </motion.div>

            {/* Floating card — Success rate (top-left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-0 left-0 bg-white rounded-2xl p-4 shadow-xl border border-[#e4e4e4]"
            >
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#c8a951]" />
                <span className="text-xs text-[#767676] font-medium">Success Rate</span>
              </div>
              <p className="font-display text-3xl font-bold text-[#1b3a2d]">98%</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <SectionTitle
              eyebrow="Why Choose Us"
              title={"The Himalvara\nDifference"}
              subtitle="We don't just organise treks — we craft life-changing journeys with meticulous care for your safety, comfort, and wonder."
              align="left"
              className="mb-8"
            />

            {/* Veteran Trust Banner */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-5 bg-gradient-to-r from-[#0d1f17] to-[#1b3a2d] rounded-2xl px-6 py-4 mb-10 border border-[#c8a951]/25"
            >
              {/* Military star emblem */}
              <div className="w-11 h-11 rounded-full bg-[#c8a951]/15 border border-[#c8a951]/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#c8a951] text-[10px] font-semibold tracking-[0.22em] uppercase mb-0.5">
                  Army Veteran Leadership
                </p>
                <p className="text-white font-bold text-base sm:text-lg tracking-wide leading-none">
                  VETERAN FOUNDED · VETERAN LED
                </p>
              </div>
              <p className="hidden md:block text-white/45 text-xs max-w-[180px] leading-relaxed flex-shrink-0">
                Mission-discipline, zero-compromise safety, and a duty of care on every trek.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#e8f5f1] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <feature.icon className="w-5 h-5 text-[#1b3a2d]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#132a1f] mb-1.5 text-sm">{feature.title}</h3>
                    <p className="text-[#767676] text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
