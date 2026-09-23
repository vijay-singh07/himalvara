# Himalvara — SEO Operating Playbook

**Audience:** the site owner (Vijay / Kuldeep) or a marketing operator working in Search Console.
**Cadence:** weekly / monthly / quarterly.

---

## Weekly (10 minutes)

1. Open Search Console → Performance → last 7 days.
2. Sort by Impressions desc. Note the top 20 queries.
3. For any query in **position 4–10** with **CTR < 3 %**: consider a title/description tweak on the ranking page.
4. For any query in **position 11–20** with **> 20 impressions**: check whether the ranking page actually targets that query in its H1 and title. If not, adjust the page content (not the URL) or write a supporting blog post.
5. Check the Coverage (Pages) report for any new errors. Fix if any appear.

## Monthly (45 minutes)

1. Compare month-over-month impressions and clicks per URL. Note movers.
2. Rich Results report — confirm the following types still show as valid:
   - `TravelAgency`, `WebSite`
   - `Article` on all blog posts
   - `TouristTrip`, `FAQPage`, `BreadcrumbList` on all package pages
   - `AggregateRating` on the five packages that have testimonials
   - `Event` on packages with departures
   - `TouristAttraction` on Adi Kailash + Panchachuli BC packages
3. Refresh `departures` arrays in `data/packages.ts` — remove past dates, add the next batch. Past dates render greyed-out and generate stale `Event` schema; keep the list forward-looking (~4 upcoming).
4. Review the top 3 landing pages by impressions — do their meta descriptions accurately preview what a searcher would see?

## Quarterly (2 hours)

1. Review `CONTENT_GAP_MATRIX.md`. Promote any P1 item to P0 only if a real trip report / photos / owner narrative is available.
2. Write 1–2 new blog posts based on actual trekker questions received via WhatsApp / the lead form.
3. Add `HIGH_VALUE_BLOG_SLUGS` entries in `app/sitemap.ts` for any new post that targets an existing GSC signal.
4. Audit destination pages — extend `longDescription`, refresh `bestSeason`, update `climate` narrative.
5. Regenerate the Google verification token if you rotate `NEXT_PUBLIC_GSC_VERIFY`.

## Content Publishing Rules

- Never invent facts (altitudes, distances, ratings, review counts, permit costs).
- Every new blog post must set a canonical (handled automatically by `/blog/[slug]/page.tsx`) and appear in `BLOG_POSTS`.
- Every new package must have `reviewCount` equal to the number of matching `TESTIMONIALS.packageSlug` entries — mismatches will silently produce non-compliant `AggregateRating`.
- If you add a testimonial, increment the matching package's `reviewCount` in the same PR.
- Every new package needs at least a `bestSeason`, `departures`, `variants`, and a `destination` string that includes the parent region name (used by substring matching for internal linking).

## Structured Data Rules

- If `pkg.reviewCount === 0`, `AggregateRating` must not be emitted (current code already handles this — do not remove the guard in `app/packages/[slug]/page.tsx`).
- If you add a `TouristAttraction` for a new peak, put it in the `touristAttractionSchemas` map keyed by `pkg.id` and only include peaks the package actually visits.
- Do not add `Review` schema unless the review body is genuinely on the page (it currently is — the "What Trekkers Say" section renders each testimonial).

## When Not to Act

- Do not chase broad ("best treks India") queries with new pages — you will lose to Indiahikes / Bikat.
- Do not create city-based landing pages ("treks near Delhi") — covered by `/blog/uttarakhand-treks-from-delhi`.
- Do not duplicate a package under a keyword-optimised slug — the existing slug carries whatever authority you have.
- Do not remove the WebSite SearchAction until you either implement `/packages?q=` server-side filtering or replace it with something meaningful.

## Emergency Playbook

- Sudden impressions drop: check GSC → Manual Actions and Security Issues first. Then `robots.txt` and `sitemap.xml`.
- Sudden CTR drop on a specific page: someone has changed the title or description; check the last commit touching `generateMetadata` for that route.
- Structured data errors in Search Console: view source for the offending URL, verify JSON parses, then check the `dangerouslySetInnerHTML` block in the corresponding page component.

## Related Documents

- `SEO_PHASE_2_AUDIT.md` — full audit
- `TOPICAL_AUTHORITY_V2.md` — entity map
- `GSC_OPPORTUNITIES_V2.md` — query-level plays
- `CONTENT_GAP_MATRIX.md` — what to build (and not build)
- `DO_NOT_CHANGE.md` — preservation list
- `PHASE_2_REPORT.md` — the 17-point wrap-up
