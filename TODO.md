# Himalvara Traffic Growth — Master TODO

ChatGPT's full analysis distilled into actionable items, grouped by phase and priority.
Check off items as they are completed.

---

## Phase 1 — Fix the Foundation

### Technical SEO
- [ ] Register site in **Google Search Console** and submit sitemap
- [ ] Set up **Google Analytics 4** (GA4) — track pages/session, bounce rate, source
- [x] Sitemap at `/sitemap.xml` — exists and covers all routes
- [x] Robots.txt at `/robots.txt` — exists
- [x] Canonical URLs — added to package pages
- [x] Open Graph + Twitter card metadata — exists on all pages
- [x] Structured data (Organization schema) — in layout
- [ ] **Page speed audit** — run Lighthouse, target 90+ on mobile
- [ ] **Core Web Vitals** — check LCP, CLS, INP via Search Console
- [ ] **Mobile UX audit** — test all pages on 360px viewport

### Trust & Conversion Fixes
- [x] **Fix stats showing 0** — CountUp now initialises at real value for SSR
- [x] **Removed fake review numbers** — Replaced TripAdvisor/Google/Trustpilot placeholder numbers with real, verifiable stats (100% safety record, 98% completion rate, Founded 2018)
- [ ] **Add real review platform links** — Once real TripAdvisor / Google Business profiles have reviews, add them back with live hrefs

### Package Pages — Turn Them Into SEO Hubs
- [x] **Structured data (TouristTrip + FAQPage JSON-LD)** — added to all package pages
- [x] **FAQ accordion sections** — 6 contextual FAQs per package (best time, difficulty, permits, price, how to reach, group size)
- [x] **Enhanced meta titles + descriptions** — include price, difficulty, altitude, season
- [x] **Best Season section** — "Best Time to Visit" block with month badges added to all package pages
- [x] **How to Reach section** — "Getting There" block with per-origin-city transport info added to all package pages
- [ ] **Image alt text audit** — every `<Image>` should have descriptive, keyword-rich alt text
- [ ] **Internal linking** — package pages should cross-link to related blog posts and vice versa

---

## Phase 2 — Build the Content Engine

### New SEO Guide Pages (High-Priority, High Traffic)
These are the real organic traffic drivers. Each targets a cluster of search queries.

- [x] **Best Uttarakhand Treks for Beginners** — `/blog/best-uttarakhand-treks-for-beginners`
- [x] **Best Winter Treks in Uttarakhand** — `/blog/best-winter-treks-uttarakhand`
- [x] **Best Uttarakhand Treks from Delhi** — `/blog/uttarakhand-treks-from-delhi`
- [ ] **Best Uttarakhand Treks from Bangalore** — `/blog/uttarakhand-treks-from-bangalore`
- [ ] **Best Uttarakhand Treks from Mumbai** — `/blog/uttarakhand-treks-from-mumbai`
- [ ] **Best Himalayan Treks under ₹15,000** — `/blog/himalayan-treks-under-15000`
- [ ] **Best Uttarakhand Treks for Solo Travellers** — `/blog/uttarakhand-treks-solo`
- [ ] **Best Uttarakhand Treks for Couples** — `/blog/uttarakhand-treks-couples`
- [ ] **Best Uttarakhand Treks in April** — targets peak season planning queries
- [ ] **Best Uttarakhand Treks in October** — post-monsoon, highest traffic month

### Comparison Pages (Very High CTR — People Search These Exactly)
- [x] **Adi Kailash vs Om Parvat** — `/blog/adi-kailash-vs-om-parvat-which-yatra` (exists)
- [x] **Dayara Bugyal vs Gidara Bugyal** — `/blog/dayara-bugyal-vs-gidara-bugyal`
- [ ] **Darma Valley vs Panchachuli Base Camp** — same valley, different objectives
- [ ] **Kumaon vs Garhwal trekking** — general comparison for first-timers

### Treks by Month Pages (Major SEO Hub)
Create a `/treks/month/[month]` route (or blog posts) — people search "best trek in Uttarakhand in [month]" constantly.
- [ ] **Architecture decision** — dedicated app route (`/treks/month/[month]`) vs blog posts
- [ ] `/treks/month/january` — Dayara Bugyal snow trek, Kumaon temples
- [ ] `/treks/month/february` — same + winter window closing
- [ ] `/treks/month/march` — shoulder season opens
- [ ] `/treks/month/april` — spring, rhododendrons, yatra season opens
- [ ] `/treks/month/may` — peak: Adi Kailash, Om Parvat, Darma Valley
- [ ] `/treks/month/june` — pre-monsoon, Darma Valley best
- [ ] `/treks/month/september` — post-monsoon opens, clearest skies
- [ ] `/treks/month/october` — best visibility, most popular
- [ ] `/treks/month/november` — late season, yatra routes close

### Treks by Difficulty Hub Pages
- [ ] **Easy Treks in Uttarakhand** — Dayara Bugyal, Kumaon Temples, Harshil
- [ ] **Moderate Treks in Uttarakhand** — Gidara Bugyal, etc.
- [ ] **Challenging Treks in Uttarakhand** — Darma Valley, Kyarkoti, Panchachuli

### Pillar / Hub Pages
- [ ] **Complete Uttarakhand Trek Guide** — `/treks/uttarakhand` — flagship pillar page listing all treks with filter (region, difficulty, duration, season). This is the biggest single SEO opportunity.
- [ ] **Kumaon Trekking Guide** — `/treks/kumaon` (expand the existing `/trekking/inner-himalaya` page)
- [ ] **Garhwal Trekking Guide** — `/treks/garhwal` (expand the existing Garhwal pages)

### How to Reach Guides (High-Intent, Transactional)
- [ ] **How to Reach Darma Valley** — trains, buses, road
- [ ] **How to Reach Dayara Bugyal** — from Dehradun/Delhi
- [ ] **How to Reach Adi Kailash** — permit process + transport
- [ ] **How to Reach Panchachuli Base Camp** — starting from Kathgodam

### Evergreen Resource Pages (Saveable / Shareable)
- [ ] **Himalayan Trek Packing Checklist** — `/guides/himalayan-trek-packing-list`
- [ ] **Himalayan Trek Fitness Guide** — `/guides/trek-fitness-training`
- [ ] **Uttarakhand Trek Cost Guide** — honest breakdown per category
- [ ] **Inner Line Permit Guide** — how to get one, what it covers, timelines

---

## Phase 3 — Tools & Features (Differentiation)

### Trek Finder Tool
The single biggest product-level differentiation. A quiz/filter that outputs personalised trek recommendations.
- [ ] **Design the question flow** — experience level, days available, budget, snow preference, spiritual/adventure, starting city
- [ ] **Build the UI** — step-by-step form or single-page filter
- [ ] **Recommendation logic** — score packages against answers, show top 3 with match %
- [ ] **Route** — `/trek-finder` or embed on homepage and `/treks/uttarakhand`

### Interactive Trek Map
Already have `/public/uttarakhand-treks-map.html` — needs to be integrated properly.
- [ ] **Audit the existing map HTML** — see what's there
- [ ] **Integrate into the site** — either as an iframe embed or rebuild as a React component
- [ ] **Add all Himalvara packages** as clickable pins with trek name, difficulty, link to package page
- [ ] **Create a map page** — `/map` or add as a section on `/treks/uttarakhand`

---

## Phase 4 — Distribution & Off-Site Growth

### Instagram → Website Loop
- [ ] **Link in bio strategy** — change Instagram bio link to `/treks/uttarakhand` or a dedicated landing page, not the homepage
- [ ] **Create Reel landing pages** — every Reel should link to a specific useful page (not homepage). Example: Reel about Darma Valley → `/packages/darma-valley-trek`
- [ ] **Story link destinations** — each story CTA should go to the specific relevant page
- [ ] **Create "saveable" Instagram content** tied to website resources — packing checklist, trek difficulty chart, month-by-month calendar

### Blog → Article JSON-LD
- [x] **Article structured data** — added to all blog posts

### Google Images SEO
- [ ] **Descriptive alt text** — audit all `<Image>` components for keyword-rich alt attributes
- [ ] **Local image filenames** — rename generic filenames (`IMG_001.jpg` → `darma-valley-trek-panchachuli-views.jpg`)
- [ ] **Open Graph images** — every page should have a unique OG image, not the same default

### Backlinks (Manual — Not Code)
- [ ] Reach out to trekking blogs for a resource link to the Uttarakhand trek map
- [ ] Submit to travel directories (Incredible India, state tourism boards)
- [ ] Contribute to Reddit `r/india`, `r/IndianBackpackers`, `r/uttarakhand` with genuine answers linking to guides when relevant

---

## Completed
- [x] Stats section fix — SSR now outputs real numbers, not 0
- [x] Removed fake TripAdvisor/Google/Trustpilot placeholder review counts
- [x] TouristTrip JSON-LD schema on all package pages
- [x] FAQPage JSON-LD schema on all package pages
- [x] FAQ accordion UI on package pages (6 questions per trek, contextual)
- [x] Enhanced package page meta titles with price, difficulty, altitude
- [x] Best Season section on all package pages
- [x] How to Reach section on all package pages (per-origin transport info)
- [x] Article JSON-LD on all blog posts
- [x] Blog post: Best Uttarakhand Treks for Beginners
- [x] Blog post: Best Winter Treks in Uttarakhand (December–February)
- [x] Blog post: Dayara Bugyal vs Gidara Bugyal (comparison)
- [x] Blog post: Best Uttarakhand Treks from Delhi
- [x] Sitemap — high-value blog posts now have priority 0.8 and monthly change frequency

---

## Tracking Notes
- After Google Search Console is live: check which queries already have impressions but low CTR (positions 4–20) — those are quick wins
- Check Lighthouse scores before and after each technical change
- Instagram → Website referral traffic: track in GA4 under Source/Medium
