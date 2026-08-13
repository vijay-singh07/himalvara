"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/* ─── Slide Data ─────────────────────────────────────────────
   `title` is the trek name (renders big and bold).
   `tagline` is the accent line below (renders smaller in gold).
   Kept as separate fields so each can size independently and
   the layout never breaks when a title is unusually long.
─────────────────────────────────────────────────────────── */
const HERO_SLIDES = [
  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Adi_Kailash.jpg",
    location: "Jolingkong, Pithoragarh — Uttarakhand",
    title: "Adi Kailash & Om Parvat",
    tagline: "Twin darshan of the sacred Kumaon",
    subtitle:
      "Pilgrimage to Chhota Kailash (6,310 m), Parvati Kund, and the natural ॐ symbol at Nabhidhang.",
    href: "/packages/adi-kailash-yatra",
  },
  {
    id: 2,
    image: "/packages/harshil-valley.jpg",
    location: "Harshil Valley, Uttarkashi — Uttarakhand",
    title: "Harshil & Gangotri",
    tagline: "Where the Ganga is born",
    subtitle:
      "Sacred source of the Ganga, apple orchards of Harshil, and the trek to Gaumukh glacier.",
    href: "/packages/harshil-valley-gangotri",
  },
  {
    id: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Panchachuli_from_Darma_Valley.jpg",
    location: "Darma Valley, Pithoragarh — Uttarakhand",
    title: "Darma Valley Trek",
    tagline: "The Last Unspoilt Valley",
    subtitle:
      "Remote trails through ancient Shauka villages to the foot of the Panchachuli massif.",
    href: "/packages/darma-valley-trek",
  },
];

/* ─── Search Bar ─────────────────────────────────────────── */
const DESTINATIONS = [
  { label: "Where to?", value: "" },
  { label: "Kumaon", value: "Kumaon" },
  { label: "Garhwal", value: "Garhwal" },
];

const DURATIONS = [
  { label: "Any length", value: "" },
  { label: "Under 7 days", value: "short" },
  { label: "7–14 days", value: "medium" },
  { label: "Over 14 days", value: "long" },
];

const GROUP_SIZES = [
  { label: "1–20 people", value: "" },
  { label: "Solo", value: "solo" },
  { label: "2–5 people", value: "small" },
  { label: "6–10 people", value: "medium" },
  { label: "10+ people", value: "large" },
];

function HeroSearchBar() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [group, setGroup] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (duration) params.set("duration", duration);
    if (group) params.set("group", group);
    const qs = params.toString();
    router.push(qs ? `/packages?${qs}` : "/packages");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.85, ease: [0.4, 0, 0.2, 1] }}
      className="w-full"
    >
      {/* Glass card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-1.5">
        <div className="flex flex-col sm:flex-row">
          {/* Destination */}
          <SearchSelect
            icon={<MapPin className="w-4 h-4 text-[#c8a951]" />}
            label="Destination"
            value={destination}
            onChange={setDestination}
            options={DESTINATIONS}
          />

          <div className="hidden sm:block w-px self-stretch bg-white/15 my-1" />

          {/* Duration */}
          <SearchSelect
            icon={<Calendar className="w-4 h-4 text-[#c8a951]" />}
            label="Duration"
            value={duration}
            onChange={setDuration}
            options={DURATIONS}
          />

          <div className="hidden sm:block w-px self-stretch bg-white/15 my-1" />

          {/* Group size */}
          <SearchSelect
            icon={<Users className="w-4 h-4 text-[#c8a951]" />}
            label="Group Size"
            value={group}
            onChange={setGroup}
            options={GROUP_SIZES}
          />

          {/* Search button */}
          <div className="p-1 flex-shrink-0">
            <button
              onClick={handleSearch}
              className="h-full w-full sm:w-auto flex items-center justify-center gap-2 bg-[#c8a951] hover:bg-[#d4b96a] active:scale-[0.98] text-[#0d1f17] font-semibold text-sm rounded-xl px-6 py-3.5 transition-all duration-200 hover:shadow-[0_4px_20px_rgb(200_169_81/0.45)]"
            >
              <Search className="w-4 h-4 flex-shrink-0" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SearchSelect({
  icon,
  label,
  value,
  onChange,
  options,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <label className="flex-1 flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
      <span className="flex-shrink-0">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-white/50 text-[11px] font-medium uppercase tracking-widest mb-0.5 leading-none">
          {label}
        </p>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-white text-sm font-medium outline-none cursor-pointer appearance-none truncate"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value} className="text-[#132a1f]">
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
}

/* ─── Dot Indicators ─────────────────────────────────────── */
function SlideIndicators({
  total,
  current,
  onChange,
}: {
  total: number;
  current: number;
  onChange: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          aria-label={`Slide ${i + 1}`}
          className={cn(
            "h-[3px] rounded-full bg-white transition-all duration-400",
            i === current ? "w-8 opacity-100" : "w-3 opacity-35 hover:opacity-60"
          )}
        />
      ))}
    </div>
  );
}

/* ─── Hero Section ───────────────────────────────────────── */
export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((p) => (p + 1) % HERO_SLIDES.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative h-[100svh] min-h-[580px] overflow-hidden flex flex-col">
      {/* ── Background images ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.location}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Gradient overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

      {/* ── Spacer — pushes content to the bottom on all screen sizes ── */}
      <div className="flex-1" />

      {/* ── Content block — sits naturally at the bottom of the flex column ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-4 sm:pb-20 w-full">
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">

          {/* Location badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`loc-${current}`}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2.5 mb-4"
            >
              <span className="w-8 h-px bg-[#c8a951] flex-shrink-0" aria-hidden />
              <span className="text-[#c8a951] text-xs font-semibold tracking-[0.18em] uppercase">
                {slide.location}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="font-display font-bold text-white leading-[1.08] tracking-tight mb-2 [text-wrap:balance]"
              style={{ fontSize: "clamp(2rem, 4.5vw + 0.5rem, 4.25rem)" }}
            >
              {slide.title}
            </motion.h1>
          </AnimatePresence>

          {/* Tagline */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`tagline-${current}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="font-display text-[#c8a951] font-semibold leading-tight tracking-tight mb-3 [text-wrap:balance]"
              style={{ fontSize: "clamp(1rem, 1.8vw + 0.4rem, 1.75rem)" }}
            >
              {slide.tagline}
            </motion.p>
          </AnimatePresence>

          {/* Subtitle — hidden on smallest screens to save space */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="hidden xs:block text-white/70 text-sm sm:text-base leading-relaxed mb-5 [text-wrap:balance]"
            >
              {slide.subtitle}
            </motion.p>
          </AnimatePresence>

          {/* Visible on xs+ gap replacement */}
          <div className="xs:hidden mb-4" />

          {/* CTAs */}
          <div className="flex gap-3 mb-4">
            <Button variant="primary" size="md" asChild className="flex-1 sm:flex-none sm:px-9 sm:h-13 sm:text-base justify-center">
              <Link href={slide.href}>View This Trek</Link>
            </Button>
            <Button variant="outline-light" size="md" asChild className="flex-1 sm:flex-none sm:px-9 sm:h-13 sm:text-base justify-center">
              <Link href="/packages">All Packages</Link>
            </Button>
          </div>

          {/* Trust line */}
          <div className="flex items-center gap-2.5 mb-4">
            <svg className="w-3 h-3 text-[#c8a951] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <span className="text-white/60 text-[11px] font-semibold tracking-[0.2em] uppercase">
              Veteran Founded · Veteran Led
            </span>
            <svg className="w-3 h-3 text-[#c8a951] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>

          {/* Search — compact tap target on mobile, full widget on sm+ */}
          <Link
            href="/packages"
            className="sm:hidden flex items-center gap-3 w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white/75 text-sm"
          >
            <Search className="w-4 h-4 text-[#c8a951] flex-shrink-0" />
            <span className="flex-1">Search treks &amp; packages</span>
            <ChevronDown className="w-4 h-4 text-white/40 -rotate-90 flex-shrink-0" />
          </Link>
          <div className="hidden sm:block">
            <HeroSearchBar />
          </div>

        </div>
      </div>

      {/* ── Bottom bar: indicators + counter ── */}
      <div className="relative z-10 pb-5 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <SlideIndicators
            total={HERO_SLIDES.length}
            current={current}
            onChange={setCurrent}
          />

          {/* Scroll hint — centre */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="hidden lg:flex flex-col items-center gap-1 absolute left-1/2 -translate-x-1/2"
          >
            <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-white/40" />
            </motion.div>
          </motion.div>

          {/* Slide counter */}
          <p className="text-white/40 text-sm font-mono tabular-nums">
            <span className="text-white/80 font-medium">
              {String(current + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(HERO_SLIDES.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}
