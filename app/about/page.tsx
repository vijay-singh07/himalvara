import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Compass, HeartHandshake, Users, Award, ArrowRight } from "lucide-react";
import { TeamGrid } from "@/components/about/TeamGrid";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About Us | Himalvara Travels",
  description:
    "Veteran-founded, veteran-led. The story behind Himalvara Travels — where military discipline meets Himalayan adventure.",
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Safety is Non-Negotiable",
    description:
      "Every decision — route, weather window, group pace — is filtered through one question: is this safe? Military training demands the same discipline we bring to every trek.",
  },
  {
    icon: Compass,
    title: "Mission Discipline",
    description:
      "In the Army, poor planning costs lives. We apply the same pre-mission planning to every itinerary: contingency routes, altitude protocols, emergency extraction plans.",
  },
  {
    icon: HeartHandshake,
    title: "Duty of Care",
    description:
      "Our responsibility doesn't end at the trailhead. We monitor every trekker — physical and mental wellbeing — from day one to the final descent.",
  },
  {
    icon: Users,
    title: "Team Over Individual",
    description:
      "No one reaches the summit alone. Our guides, porters, cooks, and logistics crew are treated as equals. A strong team is how we maintain a 98% success rate.",
  },
];

const CERTIFICATIONS = [
  { label: "TAAN Member", sub: "Trekking Agencies' Association of Nepal" },
  { label: "NMA Licensed", sub: "Nepal Mountaineering Association" },
  { label: "WEMS Certified", sub: "Wilderness Emergency Medical Specialists on all treks" },
  { label: "Govt. Licensed Guides", sub: "All guides hold Nepal Tourism Board certification" },
  { label: "UIAA Standards", sub: "International Mountaineering & Climbing Federation" },
  { label: "Eco-Conscious", sub: "Leave No Trace certified operations" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[480px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1920&q=85"
          alt="Himalvara guide leading a trekking group"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f17]/70 via-[#0d1f17]/40 to-[#0d1f17]/85" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/50 text-xs font-medium mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">About Us</span>
          </nav>

          {/* Veteran badge */}
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-3.5 h-3.5 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <span className="text-white/60 text-[10px] font-semibold tracking-[0.24em] uppercase">
              Veteran Founded · Veteran Led
            </span>
            <svg className="w-3.5 h-3.5 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Built on Service.<br />
            <span className="text-[#c8a951]">Driven by Mountains.</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl">
            The story of an army veteran who traded camouflage for trekking poles — and never lowered his standards.
          </p>
        </div>
      </section>

      {/* ── Mission Statement ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[#c8a951] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Mission</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132a1f] leading-tight mb-6">
            To deliver life-changing Himalayan adventures with the discipline of a military operation and the heart of a mountain guide.
          </h2>
          <p className="text-[#767676] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We believe that adventure and safety are not opposites — they are inseparable. Every Himalvara trek is planned with contingencies, executed with discipline, and remembered for the right reasons.
          </p>
        </div>
      </section>

      {/* ── Founding Story (Veteran Section) ─────────────────── */}
      <section className="bg-[#0d1f17] py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left: image + floating badge */}
            <div className="relative pt-8 pb-6 pr-6 lg:pr-4">
              <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=85"
                  alt="Himalayan mountains — where Himalvara was born"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating veteran badge */}
              <div className="absolute top-0 right-0 bg-[#c8a951] rounded-2xl p-5 shadow-2xl max-w-[180px]">
                <svg className="w-8 h-8 text-[#0d1f17] mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
                <p className="text-[#0d1f17] font-bold text-sm leading-snug">
                  Veteran Founded<br />& Led
                </p>
                <p className="text-[#0d1f17]/60 text-[10px] mt-1 font-medium">Est. 2018</p>
              </div>

              {/* Floating stat card */}
              <div className="absolute bottom-0 left-0 bg-white rounded-2xl p-4 shadow-xl border border-[#e4e4e4]">
                <p className="font-display text-3xl font-bold text-[#1b3a2d]">0</p>
                <p className="text-[#767676] text-xs font-medium leading-snug">
                  Fatalities in<br />our years of operation
                </p>
              </div>
            </div>

            {/* Right: story */}
            <div>
              <p className="text-[#c8a951] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-[#c8a951]" />
                Our Founding Story
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                When a Major Trades the Barracks for the Mountains
              </h2>

              <div className="space-y-4 text-white/70 text-base leading-relaxed">
                <p>
                  Before founding Himalvara, Major Kuldeep Singh Bisht served with the Indian Army's
                  High Altitude Warfare School in Gulmarg. He had planned operations in conditions
                  that would shut down most civilian expeditions — blizzards at 5,000 m,
                  evacuations in whiteout conditions, supply drops on vertical terrain.
                </p>
                <p>
                  What he saw when he transitioned to civilian trekking shocked him. Groups were
                  ascending too fast. Emergency protocols were vague or non-existent. Guides were
                  charming but undertrained for altitude emergencies. He once watched a tourist
                  develop severe altitude sickness that had been entirely predictable — and
                  preventable.
                </p>
                <p>
                  He founded Himalvara in 2018 with a single commitment: to run Himalayan
                  adventures with the same precision, planning, and accountability that the Army
                  had demanded of him. Not watered-down adventure — <em>genuine</em> adventure,
                  conducted safely.
                </p>
                <p>
                  Several years on, hundreds of trekkers have returned home safely. The zero-fatality
                  record remains intact. The standard has never dropped.
                </p>
              </div>

              {/* Veteran trust strip */}
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-5">
                {[
                  { value: "Army", label: "Veteran leadership" },
                  { value: "0", label: "Fatalities on record" },
                  { value: "98%", label: "Trek success rate" },
                  { value: "5+", label: "Years of operation" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-display text-2xl font-bold text-[#c8a951]">{value}</p>
                    <p className="text-white/50 text-xs font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#f8f4ec]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[#c8a951] text-xs font-semibold tracking-[0.2em] uppercase mb-3">What We Stand For</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#132a1f]">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 border border-[#e4e4e4] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e8f5f1] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#1b3a2d]" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#132a1f] mb-3 leading-snug">{title}</h3>
                <p className="text-[#767676] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────── */}
      {/* Temporarily hidden — un-hide by removing the `false &&` wrapper */}
      {false && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-14">
              <p className="text-[#c8a951] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                The People Behind Every Trek
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#132a1f]">
                Meet the Team
              </h2>
              <p className="text-[#767676] text-base mt-3 max-w-xl mx-auto">
                Hover over any card to read their story. These are the people who will stand between you and the mountain.
              </p>
            </div>
            <TeamGrid />
          </div>
        </section>
      )}

      {/* ── Timeline ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#f8f4ec]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[#c8a951] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Years in the Mountains</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#132a1f]">
              Our Journey
            </h2>
          </div>
          <AboutTimeline />
        </div>
      </section>

      {/* ── Certifications ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <p className="text-[#c8a951] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Recognised & Certified</p>
            <h2 className="font-display text-2xl font-bold text-[#132a1f]">
              Trust Built on Credentials
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CERTIFICATIONS.map(({ label, sub }) => (
              <div
                key={label}
                className="bg-[#f8f4ec] rounded-2xl p-5 border border-[#e4e4e4] text-center hover:border-[#c8a951]/40 transition-colors"
              >
                <Award className="w-6 h-6 text-[#c8a951] mx-auto mb-3" />
                <p className="font-bold text-[#132a1f] text-sm leading-snug mb-1">{label}</p>
                <p className="text-[#767676] text-[10px] leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
          alt="Himalayan summit at sunrise"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f17]/95 via-[#0d1f17]/80 to-[#0d1f17]/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-5">
              <svg className="w-3.5 h-3.5 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
              <span className="text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase">
                Veteran Founded · Veteran Led
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Come Trek With Us.<br />
              <span className="text-[#c8a951]">You&apos;re in Safe Hands.</span>
            </h2>
            <p className="text-white/70 text-base mb-8 leading-relaxed">
              Every member of our team has been selected for character, not just credentials. When you trek with Himalvara, you trek with people who treat your safety as a personal responsibility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/packages">
                  Browse Packages
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link href="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
