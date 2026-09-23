# SEO Roadmap — Himalvara

**Baseline:** 187 impressions / 5 clicks / 2.7% CTR (GSC snapshot, pre-implementation)
**Target (90 days):** 1,000+ impressions / 50+ clicks / 4%+ CTR

---

## Phase 1 — Technical Foundation (COMPLETED)

All items in this phase are implemented in this session.

| # | Item | Impact | Status |
|---|------|--------|--------|
| 1.1 | Fix Organization schema logo URL (`/logo.png` → `/himalvara-logo.png`) | Trust signal, rich results | ✅ Done |
| 1.2 | Conditional GSC verification meta tag (no empty string emission) | Verification hygiene | ✅ Done |
| 1.3 | WebSite schema with SearchAction | Sitelinks Searchbox eligibility | ✅ Done |
| 1.4 | BreadcrumbList JSON-LD on all dynamic routes | Rich results, SERP breadcrumbs | ✅ Done |
| 1.5 | Canonical tags on blog/destinations/trekking pages | Prevent duplicate content signals | ✅ Done |
| 1.6 | Fix package keyword matching bug (6 of 8 trekking regions showed 0 packages) | Page quality, bounce rate | ✅ Done |
| 1.7 | Internal linking: Destinations → Trekking Regions → Packages → Blog | Crawl depth, PageRank flow | ✅ Done |
| 1.8 | "Explore Further" contextual links on package pages | Cross-linking, dwell time | ✅ Done |
| 1.9 | Richer generateMetadata across all dynamic routes (OG, Twitter, canonical) | Social sharing, click-through | ✅ Done |
| 1.10 | About page metadata improvement | Brand page signals | ✅ Done |

---

## Phase 2 — Content Depth (Weeks 3–8)

Focus: deepen the three clusters with highest GSC impression signals.

### Priority 1: Adi Kailash Cluster

Adi Kailash is the only query with confirmed clicks. Maximize it.

| Task | Owner | Effort |
|------|-------|--------|
| Expand Adi Kailash package page prose: route narrative, permit process, acclimatisation schedule | Content | 2h |
| Add TouristAttraction schema for Adi Kailash (5,945 m) | Dev | 30m |
| Publish blog: "Adi Kailash vs Kailash Mansarovar — Which Yatra in 2025?" | Content | 3h |
| Publish blog: "Adi Kailash Yatra Permit & Registration Guide" | Content | 2h |
| Internal link: Kumaon destination page → Adi Kailash package | Dev | 15m |

### Priority 2: Panchachuli & Darma Valley Cluster

GSC impressions present, clicks lagging — CTR optimisation opportunity.

| Task | Owner | Effort |
|------|-------|--------|
| Expand Panchachuli BC package prose: glacier approach, viewpoints, best camps | Content | 2h |
| Expand Darma Valley trek prose: villages, permit process, flora | Content | 2h |
| Publish blog: "Darma Valley Trek — A Complete Guide to Pithoragarh's Hidden Valley" | Content | 3h |
| Add FAQ schema to Panchachuli and Darma Valley package pages (permits, acclimatisation) | Dev | 1h |

### Priority 3: Garhwal Meadow Cluster (Dayara, Gidara, Kyarkoti, Harshil)

Currently zero impressions — build initial topical signals.

| Task | Owner | Effort |
|------|-------|--------|
| Publish blog: "Dayara Bugyal vs Gidara Bugyal — Which Meadow Trek is Right for You?" | Content | 2.5h |
| Publish blog: "Harshil Valley — Uttarkashi's Hidden Gem Beyond Gangotri" | Content | 2h |
| Add FAQ schema to Dayara and Gidara package pages | Dev | 1h |

---

## Phase 3 — Authority & Link Building (Months 2–3)

### Structured Data Enhancements

- [ ] Add `aggregateRating` to packages once reviews are collected (Google review import or manual)
- [ ] Add `Event` schema for upcoming batch departures on package pages
- [ ] Add `VideoObject` schema if trek reels are published to YouTube

### External Authority Signals

- [ ] Submit himalvara.com to Uttarakhand Tourism Board directory
- [ ] Guest post on India hiking forums (Trek The Himalayas blog, Thrillophilia editorial)
- [ ] Reach out to travel bloggers who have covered Darma Valley / Adi Kailash for link mentions
- [ ] List packages on Google Business Profile

### UX / Core Web Vitals

- [ ] Audit LCP on package pages (hero images — ensure `priority` prop and correct `sizes`)
- [ ] Check CLS on mobile (sticky header interactions)
- [ ] Review gallery image loading — currently `vsb-*.jpg` filenames; ensure `alt` text is descriptive

---

## Phase 4 — Monitoring & Iteration (Ongoing)

### 30-Day Checks
- GSC: Are impressions growing for Adi Kailash / Panchachuli / Darma Valley queries?
- GSC: Has CTR for "adi kailash yatra" improved above 3%?
- Is BreadcrumbList appearing in SERPs for package/blog/destination pages?

### 60-Day Checks
- Total impressions target: 500+
- New keyword entries: Dayara Bugyal, Gidara Bugyal, Harshil Valley
- Check crawl coverage in GSC Index Coverage report — all 35 URLs indexed?

### 90-Day Review
- Full GSC export comparison vs baseline
- Identify which cluster is driving most click growth
- Prioritise Phase 2 content based on data (not assumption)
- Reassess keyword map against actual queries

---

## URL Safety Notes

**DO NOT rename any of these URLs without a redirect plan:**
- `/packages/adi-kailash-yatra` — receiving clicks
- `/packages/panchachuli-base-camp-trek` — impressions
- `/packages/darma-valley-trek` — impressions
- All `/trekking/[region]` slugs — recently indexed, do not change

If a URL rename ever becomes necessary: implement `next/navigation` `redirect()` in the old page file, map in `next.config.ts` `redirects()`, and update sitemap and all internal links in the same PR.
