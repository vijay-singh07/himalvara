"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  badge?: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Kuldeep Singh Bisht",
    role: "Founder & CEO",
    badge: "Army Veteran · Major (Retd.)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Retired Major from the Indian Army's High Altitude Warfare School, Gulmarg. Years of service in mountain warfare shaped Kuldeep's zero-tolerance approach to safety. He founded Himalvara in 2018 to bring military-grade planning to Himalayan adventure.",
  },
  {
    name: "Vikram Singh Dhami",
    role: "Chief Trek Leader",
    badge: "Inner Himalaya Specialist · 18yr",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Born in Dharchula, Pithoragarh, Vikram has been leading yatras and treks in the Kumaon Inner Himalaya for 18 years. He has completed the Adi Kailash Yatra over 120 times and knows every pass, village, and weather pattern on these routes.",
  },
  {
    name: "Sunita Thapa",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "Sunita manages the logistics backbone of every Himalvara trek — from permit approvals to helicopter emergency protocols. A former military logistics officer, she ensures no detail is overlooked.",
  },
  {
    name: "Dr. Rina Gurung",
    role: "Safety & Medical Officer",
    badge: "Wilderness EMT · WEMS",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Dr. Rina is a certified Wilderness Emergency Medical Specialist with 10 years of high-altitude medicine experience. She designs all our altitude acclimatisation protocols and runs pre-trek safety briefings.",
  },
];

export function TeamGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
      {TEAM.map((member, i) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="group"
        >
          {/* Photo */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f17]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white/90 text-xs leading-relaxed line-clamp-4">{member.bio}</p>
            </div>
          </div>

          {/* Info */}
          <div>
            {member.badge && (
              <p className="text-[#c8a951] text-[10px] font-semibold tracking-[0.18em] uppercase mb-1">
                {member.badge}
              </p>
            )}
            <h3 className="font-display text-lg font-bold text-[#132a1f] leading-snug">
              {member.name}
            </h3>
            <p className="text-[#767676] text-sm mt-0.5">{member.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
