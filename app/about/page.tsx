import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Compass, HeartHandshake, Users, Award, ArrowRight } from "lucide-react";
import { TeamGrid } from "@/components/about/TeamGrid";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { Button } from "@/components/ui/Button";

const BASE = "https://www.himalvara.com";

export const metadata = {
  title: "About Himalvara — Veteran-Led Trekking in Uttarakhand | Himalvara",
  description:
    "Veteran-founded, veteran-led. Zero incidents, zero fatalities — the Himalvara story: military discipline applied to Kumaon and Garhwal trekking since 2019.",
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: "About Himalvara — Veteran-Led Trekking in Uttarakhand",
    description:
      "Veteran-founded, veteran-led. Zero incidents, zero fatalities — the Himalvara story: military discipline applied to Kumaon and Garhwal trekking since 2019.",
    url: `${BASE}/about`,
  },
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
  { label: "Uttarakhand Tourism Registered", sub: "Registered travel operator, Uttarakhand" },
  { label: "Govt. Licensed Guides", sub: "Guides certified by Uttarakhand Forest & Tourism departments" },
  { label: "Inner Line Permit Facilitator", sub: "Permits arranged for Pithoragarh border zone treks" },
  { label: "Wilderness First Aid", sub: "Field-trained first responders on every trek" },
  { label: "Veteran Founded", sub: "Indian Army veteran leadership and safety culture" },
  { label: "Leave No Trace", sub: "Low-impact camping and community-first operations" },
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
            Two Brothers.<br />
            <span className="text-[#c8a951]">One Calling.</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl">
            Kuldeep &amp; Vijay — different paths, one destination. The Himalayas.
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

      {/* ── Founders ─────────────────────────────────────────── */}
      <section className="bg-[#0d1f17] py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-[#c8a951] text-xs font-semibold tracking-[0.24em] uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-[#c8a951]/60" />
              The Founding Story
              <span className="w-8 h-px bg-[#c8a951]/60" />
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Two Brothers. One Calling.<br />
              <span className="text-[#c8a951]">The Himalayas.</span>
            </h2>
          </div>

          {/* Two founder cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">

            {/* Kuldeep */}
            <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#c8a951]/40 hover:bg-white/[0.07] transition-all duration-500">
              <div className="absolute top-6 right-6 bg-[#c8a951] rounded-xl px-3 py-1.5">
                <span className="text-[#0d1f17] text-[10px] font-bold tracking-[0.18em] uppercase">Co-Founder</span>
              </div>

              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#c8a951]/15 border border-[#c8a951]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-[#c8a951]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">Kuldeep Singh Bisht</h3>
                  <p className="text-[#c8a951]/80 text-sm font-medium mt-0.5">Indian Army Veteran · Co-Founder</p>
                </div>
              </div>

              <div className="space-y-4 text-white/65 text-[15px] leading-relaxed mb-7">
                <p>
                  Kuldeep brings a foundation built on years of service in the Indian Army — a career defined by discipline, leadership, and the weight of responsibility that comes with keeping people safe in the most demanding environments.
                </p>
                <p>
                  As a seasoned traveler and corporate professional, he has always understood that genuine experiences come from thoughtful preparation and a refusal to cut corners. His guiding philosophy, shaped by years in uniform, is simple: <span className="text-white font-medium italic">when you take responsibility for something, you give it your very best.</span>
                </p>
                <p>
                  That standard has never wavered. It is the backbone of every Himalvara journey.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Army Veteran", "Corporate Professional", "Mountain Leader", "Safety-First"].map((tag) => (
                  <span key={tag} className="bg-white/8 border border-white/12 text-white/55 text-[11px] font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Vijay */}
            <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#c8a951]/40 hover:bg-white/[0.07] transition-all duration-500">
              <div className="absolute top-6 right-6 bg-[#c8a951] rounded-xl px-3 py-1.5">
                <span className="text-[#0d1f17] text-[10px] font-bold tracking-[0.18em] uppercase">Co-Founder</span>
              </div>

              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#c8a951]/15 border border-[#c8a951]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-[#c8a951]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">Vijay Singh Bisht</h3>
                  <p className="text-[#c8a951]/80 text-sm font-medium mt-0.5">Trekker · Athlete · Co-Founder</p>
                </div>
              </div>

              <div className="space-y-4 text-white/65 text-[15px] leading-relaxed mb-7">
                <p>
                  Vijay&apos;s connection with the mountains goes beyond travel — it is in how he has always moved through the world. A national-level football player and zonal basketball player, he brings a lifelong athlete&apos;s instinct for endurance, teamwork, and pushing past what seems possible.
                </p>
                <p>
                  As a corporate professional and passionate trekker, he has spent years exploring the lesser-known corners of the Himalayas, discovering trails, villages, and moments that most itineraries simply miss. That firsthand knowledge shapes Himalvara&apos;s belief in journeys that feel <span className="text-white font-medium italic">authentic, immersive, and unhurried.</span>
                </p>
                <p>
                  For Vijay, adventure is not a product. It is a way of being.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["National Footballer", "Zonal Basketball", "Sports Enthusiast", "Himalayan Explorer"].map((tag) => (
                  <span key={tag} className="bg-white/8 border border-white/12 text-white/55 text-[11px] font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Shared narrative */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#c8a951]/60 mx-auto mb-8" />
            <div className="space-y-5 text-white/65 text-base leading-relaxed">
              <p>
                Their paths have been different — one forged in discipline and service, one driven by sport, exploration, and a hunger for what lies beyond the next ridge. But their destination has always been the same.
              </p>
              <p className="text-xl text-white/90 font-display font-semibold italic">
                The Himalayas.
              </p>
              <p>
                Himalvara is the result of that shared passion — a travel company built not merely to sell packages, but to craft experiences with thought, purpose, and personal care. From sacred pilgrimages and high-altitude expeditions to quiet mountain escapes and immersive cultural journeys, every experience is designed with one question in mind:
              </p>
              <p className="text-[#c8a951] font-semibold text-lg italic">
                &ldquo;Would we choose this journey for ourselves?&rdquo;
              </p>
              <p>If the answer is yes, it belongs at Himalvara.</p>
            </div>
          </div>

          {/* Our Promise */}
          <div className="bg-white/[0.04] border border-[#c8a951]/20 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-[#c8a951]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-white">Our Promise</h3>
            </div>
            <div className="space-y-4 text-white/65 text-[15px] leading-relaxed">
              <p>
                We may be in the business of travel, but our foundation is trust. We believe in honest commitments, thoughtful planning, responsible travel, and genuine hospitality.
              </p>
              <p>
                Because when someone chooses to travel with us, they are not just booking a trip. They are trusting us with their time, their dreams, and a part of their story.
              </p>
              <p className="text-white font-medium">
                And that is a responsibility we never take lightly.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "0", label: "Fatalities on record" },
                { value: "98%", label: "Trek success rate" },
                { value: "5+", label: "Years of operation" },
                { value: "★", label: "Veteran Founded · Well Crafted" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display text-2xl font-bold text-[#c8a951]">{value}</p>
                  <p className="text-white/45 text-[11px] font-medium mt-1 leading-snug">{label}</p>
                </div>
              ))}
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
