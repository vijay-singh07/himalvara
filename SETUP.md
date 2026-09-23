# SETUP — before going live

Quick checklist of things you (Vijay) still need to configure so the site
actually works end-to-end. Detailed step-by-step is in
[`docs/lead-form-setup.md`](./docs/lead-form-setup.md).

Everything below is **safe to leave for now** — the site runs without any
of these. But the contact form silently drops enquiries until at least
one delivery channel is configured. **Do Resend first.**

---

## 🟥 Blocking for launch

### 1. Resend — email notification of every lead
Without this, form submissions go nowhere and you lose every enquiry.

- [ ] Sign up at https://resend.com (free tier: 3,000 emails/month)
- [ ] Add domain `himalvara.com` → verify the 3 DNS records Resend gives you
      (SPF, DKIM, DMARC — paste them at your DNS provider; propagates in 5–15 min)
- [ ] Create an API key
- [ ] Copy `.env.example` → `.env.local` in the project root
- [ ] Fill in these 3 vars:
  ```
  RESEND_API_KEY=re_...
  LEAD_NOTIFICATION_EMAIL=info@himalvara.com
  LEAD_FROM_EMAIL=leads@himalvara.com
  ```
- [ ] Restart the dev server (`npm run dev`)
- [ ] Test by submitting the form on `/contact` → email should land at
      `info@himalvara.com` within 5 seconds
- [ ] When deploying to production, add the same 3 vars in Vercel/Netlify's
      env-var UI

Estimated time: **~15 minutes** (most is DNS propagation).

---

## 🟨 Nice to have (add anytime)

### 2. Google Sheet lead log
Searchable, filterable record of every submission.

- [ ] Create a Google Sheet titled "Himalvara Leads"
- [ ] Add header row: `Received | First name | Last name | Email | Phone | Trek | Group size | Departure | Message`
- [ ] Extensions → Apps Script → paste the script from
      [`docs/lead-form-setup.md § 2`](./docs/lead-form-setup.md#2-google-sheet--lead-log)
- [ ] Deploy → Web app → Execute as Me → Access: Anyone → copy the URL
- [ ] Add to `.env.local`:
  ```
  GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
  ```

Estimated time: **~10 minutes**.

### 3. WhatsApp Business Cloud API — direct pings to your phone
Code is already wired. You just need Meta business approval + creds.

- [ ] Set up Meta Business Manager account → verify business
- [ ] Register `+91 78199 40565` as a Business phone number
- [ ] Create + submit for approval a template named `lead_notification`
      with 4 body variables (see
      [`docs/lead-form-setup.md § 3`](./docs/lead-form-setup.md#3-whatsapp-business-cloud-api--youll-do-this-separately)
      for exact shape)
- [ ] Once approved (~2–5 days), add to `.env.local`:
  ```
  WHATSAPP_ACCESS_TOKEN=EAAG...
  WHATSAPP_PHONE_NUMBER_ID=1234567890...
  WHATSAPP_TO_NUMBER=917819940565
  WHATSAPP_TEMPLATE_NAME=lead_notification
  ```

Estimated time: **~2–5 days** wall-clock (mostly waiting on Meta), ~30 min
of actual work on your side.

---

## 🟩 Content / data that's still marked "pending"

### Package variant docs
The 7 non-Adi-Kailash packages all show **"Custom quote"** in place of a
fixed price because we don't have per-origin package docs yet. Whenever
you send the docs (like you did for the Haldwani→Haldwani and Delhi→Delhi
Adi Kailash sheets), I'll swap real prices + itineraries in:

- [ ] Darma Valley Trek — Pithoragarh / Kathgodam / Delhi variants
- [ ] Panchachuli Base Camp Trek — Pithoragarh / Kathgodam / Delhi
- [ ] Kumaon Temples & Heritage Tour — Pithoragarh / Kathgodam / Delhi
- [ ] Harshil Valley & Gangotri — Rishikesh / Dehradun / Delhi
- [ ] Kyarkoti Lake Trek — Rishikesh / Dehradun / Delhi
- [ ] Gidara Bugyal Trek — Rishikesh / Dehradun / Delhi
- [ ] Dayara Bugyal Trek — Rishikesh / Dehradun / Delhi

### Real trip photos to replace stock imagery
Currently using a mix of Wikipedia Commons + Unsplash stock. Priorities:
- [ ] Adi Kailash / Om Parvat trip photos (your own, high-quality)
- [ ] Testimonials — real client photos + names (currently placeholder text)
- [ ] Team photos — the "Meet the Team" section is hidden. Send real photos +
      bios and I'll un-hide it.

### Gallery photos — your own Uttarakhand collection

The `/gallery` page is now empty by design (all stock Unsplash images removed).
It shows an "coming soon" placeholder + a strict copyright notice.

To add photos:

1. **Prep the file** — ideally bake a small corner watermark ("© Vijay Singh
   Bisht") into the pixel data yourself before uploading. This survives
   screenshots, unlike CSS overlays.
2. **Reduce resolution** — export at ~1600–2000px on the long edge, quality
   85. Large enough for beautiful web display; small enough that nobody can
   print a poster from a stolen copy.
3. **Drop the file** at `public/gallery/vsb-{n}.jpg` (any filename works;
   the `vsb-` prefix is just a convention).
4. **Add an entry** to `data/gallery.ts` in the `GALLERY_PHOTOS` array:
   ```ts
   {
     id: "g001",
     src: "/gallery/vsb-001.jpg",
     alt: "Descriptive alt text — used by screen readers and image search",
     location: "Munsiyari, Kumaon",
     category: "Kumaon",          // Kumaon | Garhwal | Trekking | Cultural | Wildlife | People
     aspectRatio: "landscape",    // landscape | portrait | square | wide | tall
     year: 2025,                  // optional
     caption: "Optional single-line caption for the lightbox",  // optional
   }
   ```
5. Save. Next.js hot-reloads. New photo appears in the grid.

**Copyright protections already active on `/gallery`:**
- Page-top notice: "© Vijay Singh Bisht — All rights reserved. Unauthorised
  reproduction, redistribution, or commercial use is prohibited."
- Right-click and drag-to-save disabled on every image (grid + lightbox).
- Hover watermark on each grid tile (bottom-right corner).
- Always-visible watermark on the lightbox (survives screenshots).

### Nepal-based certifications on About page
The About page still shows TAAN, NMA, and Nepal Tourism Board — these
don't fit a Uttarakhand-only operator. You mentioned wanting to keep
veteran branding; when you're ready, swap these for Indian equivalents:
- [ ] IMF (Indian Mountaineering Foundation)
- [ ] ATOAI (Adventure Tour Operators Association of India)
- [ ] Uttarakhand Tourism Development Board registration

---

## Deployment reminders
- [ ] Set all `.env.local` vars in the Vercel/Netlify env-var UI too —
      local `.env.local` is git-ignored and does NOT deploy
- [ ] Update `metadataBase` in `app/layout.tsx:10` if the live domain
      differs from `https://www.himalvara.com`
- [ ] Add favicon + Apple touch icons to `/public` (currently only
      `favicon.ico` exists)
- [ ] Point domain DNS at the deployment host
- [ ] Google Search Console — submit `sitemap.xml`
