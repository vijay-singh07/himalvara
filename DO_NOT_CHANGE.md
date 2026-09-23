# Himalvara — DO NOT CHANGE

**Date:** 2026-09-23

This file lists URLs, data, and design decisions that must be preserved. Both Phase 1 and Phase 2 are treated as load-bearing. Do not "clean up" any of the below without an explicit strategy discussion.

---

## URLs (never rename)

Every route in these lists carries at least early GSC signal or is the target of internal links. Renaming any of them without server-side 301 redirects will drop them from the index.

- `/packages/adi-kailash-yatra`
- `/packages/darma-valley-trek`
- `/packages/panchachuli-base-camp-trek`
- `/packages/harshil-valley-gangotri`
- `/packages/kyarkoti-lake-trek`
- `/packages/gidara-bugyal-trek`
- `/packages/dayara-bugyal-trek`
- `/packages/kumaon-temples-heritage-tour`
- `/destinations/kumaon`
- `/destinations/garhwal`
- All 8 `/trekking/[region]` routes
- All 14 `/blog/[slug]` routes

## Working structured data (do not remove)

- `TravelAgency` on layout (logo URL, address, contactPoint)
- `WebSite` on layout — keep unless replacing SearchAction with a real query filter
- `Article` on blog posts
- `TouristTrip` on packages
- `FAQPage` on packages
- `BreadcrumbList` on all detail pages
- `AggregateRating` on the five packages with `reviewCount > 0`
- `Event` @graph on packages with `departures`
- `TouristAttraction` on adi-kailash-yatra + panchachuli-bc packages

The conditional-emission guard in `app/packages/[slug]/page.tsx` for AggregateRating (`pkg.reviewCount > 0`) MUST stay. Removing it will re-introduce non-compliant zero-review ratings.

## Data that must not be modified without a reason

- `data/testimonials.ts` — every testimonial has a `packageSlug`. Renaming a slug there without updating package data breaks the "What Trekkers Say" rendering and de-syncs the AggregateRating count.
- `data/packages.ts` `reviewCount` fields — must always equal the count of matching testimonials.
- `data/blog.ts` `slug` fields for the 14 posts.
- `packageKeyword` field on destinations and trekking regions — substring matching to `package.destination` depends on it.
- `sitemap.ts` `GSC_PRIORITY_PACKAGES` and `HIGH_VALUE_BLOG_SLUGS` sets — Phase 1 set these based on GSC signal.

## Design & product decisions to preserve

- Rating widget on the package hero uses `pkg.rating` even when `reviewCount === 0`; that's a display choice, not a schema output. Do not change it to render "0 reviews" as it will look worse.
- Testimonials `STATS` object contains marketing figures (5000+ trekkers, 80+ destinations). These are visible copy, not structured data. Leave for now; owner may soften over time.
- WhatsApp float + ScrollToTop components — kept in layout.
- The "Explore Further" chip strip on `/packages/[slug]` — critical cross-link between commercial and informational content.

## Premature SEO moves to avoid

- Do NOT create per-city landing pages (Delhi, Mumbai, Bengaluru). Blog `uttarakhand-treks-from-delhi` covers the one query with real intent.
- Do NOT create `/destinations/pithoragarh` — no distinct search intent from existing packages.
- Do NOT create per-temple pages under `/temples/*`.
- Do NOT bulk-generate month-by-month landing pages under `/best-treks/[month]`. The data file `treks-by-month.ts` powers the existing `/trekking` landing widget — that is enough.
- Do NOT add a Review schema block per testimonial (each testimonial rendered on package pages is already covered by AggregateRating; separate Review schema is redundant and can trigger Google's "spammy structured data" heuristic).
- Do NOT switch package images to non-relevant stock photography just to make them "prettier" — Google Image search authority follows relevance.
- Do NOT rewrite package overviews unless you have on-the-ground reporting to add — length is not the same as authority.

## Things not to remove from Phase 1

- Publisher logo URL on Article schema (`himalvara-logo.png`, not `logo.png`).
- Package title format `"[Title] — [Duration] Days | ₹[Price] | Himalvara"`.
- BreadcrumbList inclusion on trekking region pages with variable positioning based on parent destination presence.
- The `NEXT_PUBLIC_GSC_VERIFY` conditional emission in `app/layout.tsx`.

## Owner reminders

- Do not commit `.env.local` credentials.
- Do not amend or rewrite git history that has been pushed.
- Do not migrate the site to a new domain without a full 301 map — the current signal, while small, is real.
