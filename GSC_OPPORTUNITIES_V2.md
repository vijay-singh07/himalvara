# Himalvara — GSC Opportunities V2

**Date:** 2026-09-23
**Underlying data:** `GSC_ANALYSIS.md` (Phase 1 export summary — ~187 impressions, ~5 clicks). No raw CSV export was included in the repo, so Phase 2 works from the Phase 1 summary. Treat all findings as directional.

---

## A. Pages With Existing Impressions

Per Phase 1 analysis:
- `/packages/adi-kailash-yatra` (Tier 1)
- `/packages/panchachuli-base-camp-trek` (Tier 1)
- `/packages/darma-valley-trek` (Tier 2)
- `/packages/kyarkoti-lake-trek` (Tier 2)
- `/packages/harshil-valley-gangotri` (Tier 2)
- `/destinations/garhwal`, `/destinations/kumaon` (Tier 2)
- Blog: adi-kailash-yatra-ultimate-guide, adi-kailash-vs-om-parvat-which-yatra (Tier 1/2)

## B. Queries at Positions 4–20 (quick wins — likely candidates)

Based on Phase 1's inferred position ranges, the highest-probability quick wins:
1. **"adi kailash yatra"** — package page + guide blog. Phase 1 hardened both. Phase 2 leaves title/desc unchanged. Monitor.
2. **"panchachuli base camp trek"** — package page has strong metadata; kept as-is.
3. **"darma valley trek"** — same. Region page `/trekking/darma-valley` now correctly shows 2 packages (Darma + Panchachuli BC).

## C. Queries at Positions 20–50 (medium term)

1. **"kyarkoti lake trek"** — commercial page ok; would benefit from a dedicated blog trip report before pushing the region page harder. Kept in playbook, not built (would require invention).
2. **"harshil valley"** / **"harsil gangotri"** — dedicated blog exists; comparison to Char Dham circuit could rank but requires fresh reporting.
3. **"kumaon trekking"** / **"garhwal trekking"** — destination + trekking hub pages already target these; metadata upgraded in Phase 2.

## D. High Impressions / Low CTR

Phase 1 identified generic titles on destination pages as the biggest CTR lever. Phase 2:
- `/destinations` index: title upgraded to "Destinations — Kumaon & Garhwal Himalaya | Himalvara Travels".
- `/packages` index: title upgraded and description made accurate ("wildlife safaris & peak climbs" removed).
- `/blog` index: title upgraded to include the entity list.

## E. Wrong Page Ranking for a Query

None observed in the current dataset. The 8 packages, 2 destinations, and 8 trekking regions have clearly differentiated entities in their titles and canonical URLs; no cannibalization detected between commercial and informational pages.

## F. Cannibalization

Phase 1 explicitly checked and confirmed no cannibalization. Phase 2 concurs. In particular:
- Adi Kailash cluster: package page (commercial) vs guide/comparison/permit blogs (informational) — clean intent split.
- Darma Valley: `/packages/darma-valley-trek` (commercial) vs `/trekking/darma-valley` (regional hub) — clean.

## G. No Dedicated Page Exists

Queries visible in Phase 1 that lack a dedicated page:
- "kailash mansarovar" (comparison) — covered inside `/blog/adi-kailash-vs-kailash-mansarovar`. **Correct decision to not create a dedicated Mansarovar page** (Himalvara does not operate the actual Mansarovar yatra).
- "pithoragarh" (broad) — no dedicated destination page. **Left uncreated.** Real search intent is either "adi kailash from pithoragarh" (served by package variants) or general tourism (not our business).

## H. Pages That Need Deeper Content

- `/destinations/kumaon` and `/destinations/garhwal` — currently ~2 short paragraphs plus a highlights list. Content could grow, but only if backed by real regional knowledge. Owner action: expand `longDescription` in `data/destinations.ts` over time.
- `/trekking/kyarkoti-lake` — thin without a trip report blog.

---

## Priority Actions (Phase 2 Implementation)

Already implemented in Phase 2:
- [x] Canonical + OG on `/packages`, `/destinations`, `/blog`, `/contact`, `/gallery`.
- [x] Accuracy fix on `/packages` metadata description.
- [x] Title upgrades on the four index pages above.
- [x] Fixed `/trekking/kumaon-cultural` filter to show the cultural tour, not ILP treks.
- [x] Fixed factually incorrect Nepal Tourism Board certification on `/about`.

Not implemented (see `DO_NOT_CHANGE.md` for reasoning):
- [ ] New "trek from Delhi" landing pages — covered by existing blog.
- [ ] New "best treks in Uttarakhand" landing pages — covered by existing blog.
- [ ] Per-temple pages for Jageshwar / Patal Bhubaneswar / Baijnath — would need invented content.
- [ ] Dedicated `/destinations/pithoragarh` — no distinct search intent from existing package pages.

## Monitor for 30 Days

- Impressions on the four index pages after title/desc upgrade — expect 10–30 % CTR lift on any query above position 10.
- Impressions on `/trekking/darma-valley` and `/trekking/munsiyari` — expect growth now that packages are visible on the page.
- Coverage report — confirm all 40 canonicals are honored, no soft-404s on `/trekking/kumaon-cultural`.
- Rich-results report — Event, FAQ, TouristAttraction, AggregateRating (5 packages), Article, BreadcrumbList should all show up.
