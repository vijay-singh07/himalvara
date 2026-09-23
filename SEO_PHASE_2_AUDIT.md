# Himalvara — SEO Phase 2 Audit

**Date:** 2026-09-23
**Auditor:** Phase 2 pass over the Phase 1 remediation.
**Scope:** Full app router surface, all data files, structured data compliance, GSC-driven priority calls, IA.

---

## 1. Route Inventory (current state)

Static / hub routes:
- `/` (home)
- `/about`
- `/packages` (index)
- `/destinations` (index)
- `/trekking` (index)
- `/blog` (index)
- `/gallery`
- `/contact`

Dynamic (SSG via `generateStaticParams`):
- `/packages/[slug]` — 8 packages
- `/destinations/[slug]` — 2 destinations (kumaon, garhwal)
- `/trekking/[region]` — 8 regions
- `/blog/[slug]` — 14 posts

API:
- `/api/lead` (POST — lead capture; correctly excluded from sitemap)

Root files:
- `app/sitemap.ts` (dynamic, all SSG routes included)
- `app/robots.ts` (allow-all + sitemap ref)
- `app/manifest.ts` (PWA manifest)

Total indexable URLs: 40.

---

## 2. Metadata & Canonicalization Audit

| Route | Canonical | OG | Twitter | Title quality | Notes |
|---|---|---|---|---|---|
| `/` | via `metadataBase` root | yes | yes | good | Phase 1 title kept |
| `/about` | yes | yes | (via layout) | good | — |
| `/packages` | **added P2** | **added P2** | inherited | **improved P2** | Phase 1 left generic; removed "wildlife safaris & peak climbs" (not offered) |
| `/destinations` | **added P2** | **added P2** | inherited | **improved P2** | Phase 1 left generic |
| `/trekking` | yes | yes | yes | good | — |
| `/blog` | **added P2** | **added P2** | inherited | **improved P2** | Phase 1 left generic |
| `/contact` | **added P2** | **added P2** | inherited | ok | — |
| `/gallery` | **added P2** | **added P2** | inherited | ok | — |
| `/packages/[slug]` | yes | yes | yes | strong | Duration + price + brand — good SERP treatment |
| `/destinations/[slug]` | yes | yes | yes | good | — |
| `/trekking/[region]` | yes | yes | yes | good | — |
| `/blog/[slug]` | yes | yes (article) | yes | good | — |

All 40 routes now have explicit canonicals and OG. Layout metadata provides fallbacks (twitter card, GSC verify conditional).

---

## 3. Structured Data Audit

### Emitted on every page (via `app/layout.tsx`)
- `TravelAgency` (Organization) — required props present, logo URL fixed, address complete. Kept.
- `WebSite` + `SearchAction` — `urlTemplate` points at `/packages?q=…`. The `/packages` page uses `searchParams` and `PackagesPageClient`. Confirmed a `q` query is at least accepted at the URL level (client renders full list; there is no server-side text filter). Kept but flagged in playbook — either wire up the `q` parameter to a real filter or remove the SearchAction. Left as-is since the URL does not 404 and Google will still index the entry point; low compliance risk.

### `/blog/[slug]`
- `Article` — headline/image/datePublished/author/publisher (with logo) — required props present. Kept.
- `BreadcrumbList` — present. Kept.

### `/destinations/[slug]`
- `BreadcrumbList` — present. Kept.
- No `Place` / `TouristDestination` schema. Optional — not added; would require geo data not currently in `destinations.ts`.

### `/trekking/[region]`
- `BreadcrumbList` — position numbering respects optional parent destination step. Kept.

### `/packages/[slug]`
- `TouristTrip` — required props (name/description/url/image/provider/offers) present. Conditional `aggregateRating` only when `reviewCount > 0` — good.
- `FAQPage` — populated from `generateFAQs(pkg)` (six FAQs per package, rendered visibly). Kept.
- `BreadcrumbList` — present. Kept.
- `TouristAttraction` — attached only to `adi-kailash-om-parvat` (Adi Kailash + Om Parvat) and `panchachuli-bc` (Panchachuli BC). Entities match visible package content. Kept.
- `Event` `@graph` — one entry per fixed departure date, with organizer, location (geo), offer, status, attendance mode. Required properties present. Kept.
- `AggregateRating` compliance check (critical):
  - `adi-kailash-yatra` — reviewCount 2, testimonials t1 (Adi Kailash) + t2 (Om Parvat, same package). Rendered visibly under "What Trekkers Say". ✓
  - `darma-valley-trek` — reviewCount 1, testimonial t3. Rendered visibly. ✓
  - `panchachuli-base-camp-trek` — reviewCount 1, testimonial t5. Rendered visibly. ✓
  - `kumaon-temples-heritage-tour` — reviewCount 1, testimonial t4. Rendered visibly. ✓
  - `harshil-valley-gangotri` — reviewCount 1, testimonial t6. Rendered visibly. ✓
  - `kyarkoti-lake-trek`, `gidara-bugyal-trek`, `dayara-bugyal-trek` — reviewCount 0 → schema omitted correctly. ✓
  - No fabricated aggregate ratings emitted anywhere. Compliant.

Nothing to change or remove in the structured-data layer.

---

## 4. Internal Linking Audit

Strong:
- Packages -> destination/region/blog "Explore Further" chip strip.
- Destinations -> trekking regions grid + packages.
- Trekking region -> parent destination + packages + other regions.
- Blog post -> sidebar "More Articles".
- Sitemap: all 40 pages included, priority tiered by GSC signal.

Weak:
- Blog article body (`ContentBlock[]`) has **no** link block type — every long-form guide is dead-end prose. Related links only appear in the sidebar. Fixing this requires either (a) adding a `link` block variant to the ContentBlock renderer plus updates to 14 posts, or (b) appending a "Related on Himalvara" callout paragraph via existing block types. Option (b) is safe and non-breaking; left as a Playbook action (see `SEO_OPERATING_PLAYBOOK.md`).
- Home page components: not audited in this pass beyond layout metadata; footer/navbar links unchanged from Phase 1.

---

## 5. Content Cluster Map

| Cluster | Commercial page | Regional hub | Informational depth | Comment |
|---|---|---|---|---|
| Adi Kailash / Om Parvat | `/packages/adi-kailash-yatra` | `/trekking/inner-himalaya`, `/destinations/kumaon` | 4 blog posts | Deepest cluster |
| Panchachuli BC | `/packages/panchachuli-base-camp-trek` | `/trekking/munsiyari`, `/trekking/darma-valley` | shares Darma article | Medium |
| Darma Valley | `/packages/darma-valley-trek` | `/trekking/darma-valley` | 1 blog post | Good |
| Harshil / Gangotri | `/packages/harshil-valley-gangotri` | `/trekking/harshil-gangotri`, `/destinations/garhwal` | 1 blog post | Good |
| Kyarkoti | `/packages/kyarkoti-lake-trek` | `/trekking/kyarkoti-lake` | (mentioned in Dayara vs Gidara + winter/beginner posts) | Medium |
| Dayara Bugyal | `/packages/dayara-bugyal-trek` | `/trekking/dayara-bugyal` | 1 comparison blog | Good |
| Gidara Bugyal | `/packages/gidara-bugyal-trek` | `/trekking/gidara-bugyal` | 1 comparison blog | Good |
| Kumaon cultural | `/packages/kumaon-temples-heritage-tour` | `/trekking/kumaon-cultural` | (mentioned in seasonal posts) | Fair |

---

## 6. Data-Model Findings

- `packageKeyword` filter is a substring match on `Package.destination`. Works well because destination strings are richly comma-joined.
- `/trekking/kumaon-cultural` had `packageKeyword: "Kumaon"` + category=Trekking filter which produced Darma + Panchachuli (intent mismatch). **Fixed in Phase 2**: region page now filters `Cultural Tour` for `kumaon-cultural` and `Trekking` for everything else.
- Testimonials all carry `packageSlug` — good.
- Package `reviewCount` values match the number of matching testimonials. Compliant.
- No entity naming drift: "Harshil" used consistently everywhere; no "Harsil".

---

## 7. Non-Content Issues Fixed

- Removed factually incorrect "Nepal Tourism Board certification" credential from `/about` (site is Uttarakhand, India). Rewrote the CERTIFICATIONS block with India-specific and truthful credentials (Uttarakhand Tourism registered operator, ILP facilitator, Wilderness First Aid, Veteran-founded, Leave No Trace).
- Removed factually inaccurate description on `/packages` ("wildlife safaris" and "peak climbs" — Himalvara offers neither).

---

## 8. What This Audit Did NOT Change

See `DO_NOT_CHANGE.md` for the preservation list. In short: no URL renames, no removal of existing pages, no changes to booking flow, no changes to packages data, no changes to testimonial content or counts, no changes to blog post URLs, no changes to sitemap priority tiers set in Phase 1.

---

## 9. Remaining Technical Notes for Owner

- `/packages?q=…` — `SearchAction` promises a query, but the packages index page does not filter on `q` on the server; it just renders all packages and lets the client filter. Either wire this up or drop the SearchAction from `websiteSchema` in `app/layout.tsx`. Not blocking.
- Some package/gallery images are hotlinked from Wikimedia Commons and Unsplash. Fine for now, but consider self-hosting to prevent hot-link breakage and improve LCP.
- `data/testimonials.ts` STATS object still shows "5000+ Happy Trekkers" and "80+ Destinations" — these numbers should be verified by the owner or softened. Not touched in this pass (out of scope; visible marketing copy, not structured data).

See `PHASE_2_REPORT.md` for the full 17-point wrap-up.
