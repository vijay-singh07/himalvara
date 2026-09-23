# SEO Changelog — Himalvara

Tracks every SEO-motivated change to the codebase. Format: date · file · change · reason.

---

## 2026-09-22 — Phase 1 Technical SEO

### `app/layout.tsx`
- **Fixed**: Organization schema `logo.url` corrected from `${BASE}/logo.png` to `${BASE}/himalvara-logo.png`  
  _Reason: `/logo.png` returns 404; broken logo URL degrades Knowledge Panel and rich result eligibility._
- **Added**: WebSite schema with `SearchAction` (potentialAction targeting `/packages?q={search_term_string}`)  
  _Reason: Enables Sitelinks Searchbox in Google SERP for branded queries._
- **Fixed**: GSC verification meta tag now uses conditional spread — only emits when `NEXT_PUBLIC_GSC_VERIFY` is set  
  _Reason: Empty `content=""` attribute is invalid and causes GSC verification to fail._

### `app/page.tsx`
- **Changed**: Page title from `"Himalvara Travels — Premium Himalayan Trekking & Tours"` to `"Himalvara Travels — Veteran-Led Himalayan Trekking & Yatras"`  
  _Reason: "Premium" is generic; "veteran-led" and "yatras" are differentiated signals matching brand narrative and GSC query intent._
- **Improved**: Meta description now explicitly names Kumaon and Garhwal  
  _Reason: Both regions appear in GSC query data; regional specificity improves CTR._

### `app/about/page.tsx`
- **Improved**: Title tag, meta description, canonical, and OG tags  
  _Reason: About page had a generic title "About Us" with no canonical. Added regional keywords (Kumaon, Garhwal) and brand differentiators (veteran-led, zero incidents)._

### `app/blog/[slug]/page.tsx`
- **Added**: `alternates.canonical` to `generateMetadata`  
  _Reason: All blog posts were missing canonical tags, leaving them vulnerable to duplicate content signals._
- **Fixed**: Article schema publisher logo from `/logo.png` to `/himalvara-logo.png`  
  _Reason: Consistent with Organization schema fix; publisher logo must resolve._
- **Added**: BreadcrumbList JSON-LD (Home → Blog → post.title)  
  _Reason: Enables breadcrumb rich results in Google Search for blog post URLs._

### `app/destinations/[slug]/page.tsx`
- **Added**: `const BASE`, canonical URL, OG image with absolute URL, Twitter card in `generateMetadata`  
  _Reason: Destination pages had no canonical, no OG image URL, no Twitter card._
- **Added**: BreadcrumbList JSON-LD (Home → Destinations → dest.name)  
  _Reason: Rich results for destination hub pages._
- **Added**: "Trekking Regions in {dest.name}" section — linked image cards to `/trekking/[region]`  
  _Reason: Creates hub-and-spoke internal link flow from destination hubs to trekking region pages. Improves crawl depth and distributes PageRank to region pages._

### `app/trekking/[region]/page.tsx`
- **Added**: `const BASE`, canonical URL, OG image, Twitter card in `generateMetadata`  
  _Reason: Trekking region pages had no canonical or social meta._
- **Added**: `parentDestination` lookup and 3–4 level BreadcrumbList (Home → Trekking → [Destination →] Region)  
  _Reason: Adds hierarchy signal and rich breadcrumb results; links regions back to destination hubs._
- **Added**: Parent destination link in sidebar stats card  
  _Reason: Additional contextual internal link upward in hierarchy._

### `app/packages/[slug]/page.tsx`
- **Added**: BreadcrumbList JSON-LD (Home → Packages → pkg.title)  
  _Reason: Package pages (primary commercial pages) were missing breadcrumb structured data._
- **Added**: "Explore Further" contextual section with links to parent destination, trekking region, and related blog posts  
  _Reason: Commercial pages were internal link dead-ends. Now flow to informational content (blog) and regional hubs, improving crawl coverage and dwell time._

### `data/packages.ts`
- **Fixed** (critical): 6 package `destination` strings updated to include the specific location name matching their trekking region's `packageKeyword`:
  - `darma-valley-trek`: added `"Darma Valley"` → fixes `/trekking/darma-valley` showing 0 packages
  - `panchachuli-base-camp-trek`: added `"Panchachuli, Darma Valley"` → fixes `/trekking/panchachuli` showing 0 packages
  - `harshil-valley-gangotri-trek`: added `"Harshil Valley, Gangotri"` → fixes `/trekking/harshil-valley` showing 0 packages
  - `kyarkoti-lake-trek`: added `"Kyarkoti Lake"` → fixes `/trekking/kyarkoti-lake` showing 0 packages
  - `gidara-bugyal-trek`: added `"Gidara Bugyal"` → fixes `/trekking/gidara-bugyal` showing 0 packages
  - `dayara-bugyal-trek`: added `"Dayara Bugyal"` → fixes `/trekking/dayara-bugyal` showing 0 packages
  
  _Reason: The filter `p.destination.includes(trek.packageKeyword)` returned empty arrays for 6 of 8 trekking region pages because destination strings lacked the specific keywords. Pages showing no packages have zero commercial value and poor quality signals._

---

## 2026-09-22 — Phase 2 Content Depth

### `app/packages/[slug]/page.tsx`
- **Added**: `touristAttractionSchemas` map and conditional rendering of TouristAttraction JSON-LD for Adi Kailash (2 attractions: Adi Kailash peak + Om Parvat) and Panchachuli BC (Panchachuli Base Camp).  
  _Reason: TouristAttraction schema helps Google understand the physical places being visited; eligible for attraction rich results and Knowledge Panel associations._

### `data/packages.ts`
- **Expanded**: Adi Kailash `overview` — from 3 to 7 sentences; added ILP zone context, Shauka trading history, Kalapani corridor significance, and why veteran guidance matters on this specific route.  
  _Reason: Richer overview prose increases on-page topical depth and improves crawl understanding of the page's subject matter._
- **Expanded**: Darma Valley Trek `overview` — from 1 to 2 paragraphs; added nine village names, Dhauli Ganga river, flora/fauna detail, ILP context, and guide expertise signal.
- **Expanded**: Panchachuli BC `overview` — added all five summit heights, Dantu bugyal detail, Annapurna BC comparison for searcher orientation.
- **Expanded**: Harshil Valley `overview` — existing prose was adequate; minor contextual additions.

### `data/blog.ts`
- **Added 4 new blog posts** (pages `/blog/[slug]`):
  - `adi-kailash-vs-kailash-mansarovar` (b11) — Targets "adi kailash vs kailash mansarovar" and "chhota kailash yatra" queries; 10-min read, featured
  - `adi-kailash-inner-line-permit-guide` (b12) — Targets "adi kailash permit" and "adi kailash ILP" queries; 9-min read, step-by-step application guide
  - `darma-valley-trek-complete-guide` (b13) — Targets "darma valley trek guide" and "darma valley pithoragarh" queries; 12-min read, nine villages, permits, difficulty, logistics
  - `harshil-valley-gangotri-guide` (b14) — Targets "harshil valley guide" and "harshil gangotri" queries; 10-min read, historical context (Wilson's orchard), Gaumukh option, best season

---

## 2026-09-22 — Phase 3 Structured Data & CWV

### `types/index.ts`
- **Added**: `departures?: string[]` field to `Package` interface — ISO 8601 date strings for upcoming batch departures.

### `data/packages.ts`
- **Added**: `departures` arrays to all 8 packages with upcoming October 2026, November/December 2026, and May–June 2027 batch dates.  
  _Reason: Enables Event JSON-LD rich results in Google Search for each departure date._

### `app/packages/[slug]/page.tsx`
- **Added**: Event schema (`@graph` of individual `Event` objects) for all packages with departures. Each Event includes `startDate`, `endDate` (calculated from duration), `location` with `GeoCoordinates`, `offers` with price, `organizer`, `eventStatus`, and `eventAttendanceMode`.  
  _Reason: Google can surface individual departures in tour/activity carousels and event-based rich results. This is the highest-impact schema addition for commercial visibility._

### `app/sitemap.ts`
- **Updated**: `HIGH_VALUE_BLOG_SLUGS` — added 5 entries: `adi-kailash-yatra-ultimate-guide`, `adi-kailash-vs-kailash-mansarovar`, `adi-kailash-inner-line-permit-guide`, `darma-valley-trek-complete-guide`, `harshil-valley-gangotri-guide`. These now have priority 0.8 and `changeFrequency: "monthly"`.
- **Added**: `GSC_PRIORITY_PACKAGES` set — bumps `adi-kailash-yatra`, `darma-valley-trek`, `panchachuli-base-camp-trek` from 0.85 to 0.9 sitemap priority.  
  _Reason: GSC data shows these three pages have the strongest impression and click signals._

### `components/ui/PackageCard.tsx`
- **Added**: `priority={index === 0}` on the featured card image — preloads the first above-fold package card image.  
  _Reason: LCP improvement for pages that render `PackageCard` near the top of viewport._

---

## Phase 3 — Human Tasks (not code-implementable)

The following Phase 3 items require human action:
- Submit himalvara.com to Uttarakhand Tourism Board directory
- Guest post on India hiking forums (Trek The Himalayas blog, Thrillophilia editorial)
- Reach out to travel bloggers who have covered Darma Valley / Adi Kailash
- List packages on Google Business Profile with tour products
- Collect and import Google reviews to enable `aggregateRating` schema

---

## Files Created (Documentation & Planning)

| File | Purpose |
|------|---------|
| `SEO_AUDIT.md` | Full technical and content audit; 35 indexed URLs; P0/P1/P2 issue log |
| `GSC_ANALYSIS.md` | GSC data analysis; query-to-page mapping; monitoring plan |
| `KEYWORD_MAP.md` | Target query → URL mapping for all 35+ pages; cannibalization decisions |
| `TOPICAL_AUTHORITY.md` | Topic cluster architecture; authority scores by cluster |
| `SEO_ROADMAP.md` | Phase 1–4 task list with owners and timelines |
| `SEO_CHANGELOG.md` | This file |
