"use client";

import { useEffect, useState } from "react";
import { Send, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const TREK_INTERESTS = [
  "Adi Kailash & Om Parvat Yatra",
  "Darma Valley Trek",
  "Panchachuli Base Camp Trek",
  "Kumaon Temples & Heritage Tour",
  "Harshil Valley & Gangotri",
  "Kyarkoti Lake Trek",
  "Gidara Bugyal Trek",
  "Dayara Bugyal Trek",
  "Custom / Not sure yet",
];

/* Maps package slug (from ?package= query param on incoming links) to the
   exact trek label shown in the dropdown. Keep in sync with TREK_INTERESTS. */
const SLUG_TO_TREK: Record<string, string> = {
  "adi-kailash-yatra": "Adi Kailash & Om Parvat Yatra",
  "darma-valley-trek": "Darma Valley Trek",
  "panchachuli-base-camp-trek": "Panchachuli Base Camp Trek",
  "kumaon-temples-heritage-tour": "Kumaon Temples & Heritage Tour",
  "harshil-valley-gangotri": "Harshil Valley & Gangotri",
  "kyarkoti-lake-trek": "Kyarkoti Lake Trek",
  "gidara-bugyal-trek": "Gidara Bugyal Trek",
  "dayara-bugyal-trek": "Dayara Bugyal Trek",
};

const GROUP_SIZES = ["Solo", "2 people", "3–5 people", "6–10 people", "10+ people"];

type FormState = "idle" | "loading" | "success" | "error";

interface Fields {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  trek: string;
  groupSize: string;
  departureDate: string;
  message: string;
}

const EMPTY: Fields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  trek: "",
  groupSize: "",
  departureDate: "",
  message: "",
};

/* Today in YYYY-MM-DD, used as the `min` on the date input so past dates
   can't be picked. Recomputed each render so the picker reflects the
   actual current day even if the tab has been open for a while. */
function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function Field({ label, required, children, hint }: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-[#132a1f]">
        {label}
        {required && <span className="text-[#c8a951] ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-[#767676]">{hint}</p>}
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-[#ddd] bg-white px-4 py-3 text-sm text-[#132a1f] placeholder:text-[#aaa] focus:outline-none focus:border-[#1b3a2d] focus:ring-2 focus:ring-[#1b3a2d]/10 transition-all";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [status, setStatus] = useState<FormState>("idle");

  /* Pre-select the trek when the page is opened from a package CTA
     (e.g. /contact?package=adi-kailash-yatra). Reading window.location
     inside an effect avoids needing a Suspense boundary around the form. */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const slug = new URLSearchParams(window.location.search).get("package");
    if (!slug) return;
    const trek = SLUG_TO_TREK[slug];
    if (trek) setFields((f) => ({ ...f, trek }));
  }, []);

  const set = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error ?? `HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="w-16 h-16 rounded-full bg-[#e8f5f1] flex items-center justify-center mb-5">
          <CheckCircle className="w-8 h-8 text-[#1b3a2d]" />
        </div>
        <h3 className="font-display text-2xl font-bold text-[#132a1f] mb-2">
          Message Received
        </h3>
        <p className="text-[#555] text-sm max-w-xs leading-relaxed mb-6">
          Our veteran team will review your enquiry and get back to you within 24 hours — usually much sooner.
        </p>
        <button
          onClick={() => { setFields(EMPTY); setStatus("idle"); }}
          className="text-sm font-semibold text-[#1b3a2d] underline underline-offset-2"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name row */}
      <div className="grid grid-cols-2 gap-4">
        <Field label="First name" required>
          <input
            type="text"
            placeholder="Riya"
            required
            value={fields.firstName}
            onChange={set("firstName")}
            className={inputCls}
          />
        </Field>
        <Field label="Last name" required>
          <input
            type="text"
            placeholder="Sharma"
            required
            value={fields.lastName}
            onChange={set("lastName")}
            className={inputCls}
          />
        </Field>
      </div>

      {/* Contact row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Email" required>
          <input
            type="email"
            placeholder="riya@email.com"
            required
            value={fields.email}
            onChange={set("email")}
            className={inputCls}
          />
        </Field>
        <Field label="Phone / WhatsApp" hint="Include country code">
          <input
            type="tel"
            placeholder="+91 98765 43210"
            value={fields.phone}
            onChange={set("phone")}
            className={inputCls}
          />
        </Field>
      </div>

      {/* Trek interest */}
      <Field label="Trek / package of interest">
        <div className="relative">
          <select
            value={fields.trek}
            onChange={set("trek")}
            className={cn(inputCls, "appearance-none pr-10 cursor-pointer")}
          >
            <option value="">Select a trek…</option>
            {TREK_INTERESTS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#767676]" />
        </div>
      </Field>

      {/* Group size + departure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Group size">
          <div className="relative">
            <select
              value={fields.groupSize}
              onChange={set("groupSize")}
              className={cn(inputCls, "appearance-none pr-10 cursor-pointer")}
            >
              <option value="">Select…</option>
              {GROUP_SIZES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#767676]" />
          </div>
        </Field>
        <Field label="Preferred departure date">
          <input
            type="date"
            value={fields.departureDate}
            onChange={set("departureDate")}
            min={todayIso()}
            className={inputCls}
          />
        </Field>
      </div>

      {/* Message */}
      <Field label="Your message" required>
        <textarea
          rows={4}
          placeholder="Tell us about your experience level, any questions, or special requirements…"
          required
          value={fields.message}
          onChange={set("message")}
          className={cn(inputCls, "resize-none")}
        />
      </Field>

      {/* Error state */}
      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all",
          status === "loading"
            ? "bg-[#1b3a2d]/60 text-white/70 cursor-not-allowed"
            : "bg-[#0d1f17] hover:bg-[#132a1f] text-white"
        )}
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Enquiry
          </>
        )}
      </button>

      <p className="text-center text-xs text-[#767676]">
        We respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
