import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact & Booking | Himalvara Travels",
  description:
    "Get in touch with Himalvara Travels to plan your trek. Veteran-led yatras and treks across Kumaon and Garhwal, Uttarakhand. Free consultation available.",
};

const INFO_ITEMS = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91 7819940565",
    sub: "Available 24/7 · All days",
    href: "tel:+917819940565",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@himalvara.com",
    sub: "Reply within 24 hours",
    href: "mailto:info@himalvara.com",
  },
  {
    icon: MapPin,
    label: "Base Office",
    value: "Pithoragarh, Uttarakhand",
    sub: "India — 262501",
    href: null,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Open 24/7 · All days",
    sub: "Sundays included · India Standard Time (UTC+5:30)",
    href: null,
  },
];

const TRUST_POINTS = [
  { stat: "5+", label: "years guiding" },
  { stat: "0", label: "fatalities on record" },
  { stat: "300+", label: "yatras completed" },
  { stat: "4.9★", label: "average client rating" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[320px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1920&q=85"
          alt="Himalayan trail at sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f17]/75 via-[#0d1f17]/50 to-[#0d1f17]/85" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <nav
            className="flex items-center gap-1.5 text-white/50 text-xs font-medium mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">Contact</span>
          </nav>

          <div className="flex items-center gap-2 mb-5">
            <svg className="w-3 h-3 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <span className="text-white/60 text-[10px] font-semibold tracking-[0.22em] uppercase">
              Start Planning
            </span>
            <svg className="w-3 h-3 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
            Let&apos;s Plan Your Trek
          </h1>
          <p className="text-white/70 text-base max-w-md">
            Fill in the form below and a veteran guide will personally reach out within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Trust strip ───────────────────────────────────────── */}
      <div className="bg-[#0d1f17]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {TRUST_POINTS.map(({ stat, label }) => (
            <div key={label}>
              <p className="font-display text-2xl font-bold text-[#c8a951]">{stat}</p>
              <p className="text-white/60 text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Content ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* ── Form (left, wider) ────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#e8f5f1] flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-[#1b3a2d]" />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#132a1f]">Send an Enquiry</h2>
            </div>
            <p className="text-sm text-[#767676] mb-8">
              Tell us what you have in mind — dates, destinations, group size — and we&apos;ll build a tailored itinerary for you.
            </p>

            <div className="bg-white rounded-2xl border border-[#e8e4db] shadow-sm p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>

          {/* ── Info sidebar (right, narrower) ────────────────── */}
          <aside className="lg:col-span-2 space-y-6">
            {/* Contact details card */}
            <div className="bg-white rounded-2xl border border-[#e8e4db] shadow-sm p-6">
              <h3 className="font-display text-lg font-bold text-[#132a1f] mb-5">Get in Touch</h3>
              <div className="space-y-5">
                {INFO_ITEMS.map(({ icon: Icon, label, value, sub, href }) => (
                  <div key={label} className="flex gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#e8f5f1] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#1b3a2d]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#767676] uppercase tracking-wide mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-semibold text-[#132a1f] hover:text-[#1b3a2d] transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-[#132a1f]">{value}</p>
                      )}
                      <p className="text-xs text-[#767676] mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Veteran promise card */}
            <div className="bg-[#0d1f17] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-[#c8a951]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c8a951]">
                  The Himalvara Promise
                </span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                Every enquiry is personally reviewed by a veteran guide — not a sales rep. You&apos;ll get an honest assessment of your fitness level, a realistic budget, and a route that matches your goals.
              </p>
              <div className="space-y-2.5">
                {[
                  "No pressure, no hard sell",
                  "Free custom itinerary within 48 h",
                  "Flexible deposit & payment plans",
                  "24/7 satellite communication on trek",
                ].map((pt) => (
                  <div key={pt} className="flex gap-2.5 text-sm text-white/70">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#c8a951] flex-shrink-0" />
                    {pt}
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="bg-[#f9f7f2] rounded-2xl p-5">
              <p className="text-xs font-semibold text-[#767676] uppercase tracking-wide mb-3">Follow Along</p>
              <div className="flex gap-3">
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white border border-[#e8e4db] flex items-center justify-center hover:border-[#1b3a2d] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#132a1f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white border border-[#e8e4db] flex items-center justify-center hover:border-[#1b3a2d] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#132a1f]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white border border-[#e8e4db] flex items-center justify-center hover:border-[#1b3a2d] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#132a1f]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                  </svg>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── FAQ Strip ─────────────────────────────────────────── */}
      <section className="bg-[#f9f7f2] border-t border-[#e8e4db]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#132a1f] text-center mb-10">
            Common Questions
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                q: "How far in advance should I book?",
                a: "We recommend registering at least 1 month in advance so we can secure permits, transport, and accommodation.",
              },
              {
                q: "Do I need prior trekking experience?",
                a: "Not for most routes. Our veteran guides tailor the pace to your fitness. We'll assess your level honestly before recommending a trek.",
              },
              {
                q: "What's your cancellation policy?",
                a: "50% refund on the booking amount if you cancel 15 or more days before departure. No refund for cancellations within 15 days of departure.",
              },
              {
                q: "Is travel insurance required?",
                a: "Yes — better if you have one. Comprehensive coverage including emergency helicopter evacuation is strongly recommended. We can suggest trusted providers.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl border border-[#e8e4db] p-5">
                <h3 className="font-semibold text-[#132a1f] text-sm mb-2">{q}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
