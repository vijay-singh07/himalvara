# Himalvara SEO Audit

**Date:** 2026-09-22  
**Framework:** Next.js 16.2.10 (App Router, SSG/SSR hybrid)  
**Auditor:** Claude SEO + Next.js specialist session

---

## 1. Technical Infrastructure

### Framework & Rendering

| Property | Value |
|---|---|
| Framework | Next.js 16.2.10 |
| Router | App Router |
| Rendering | SSG via `generateStaticParams` on all dynamic routes |
| React | 19.2.4 |
| TypeScript | Yes |
| Tailwind | v4 (CSS-based config) |

**Assessment:** Excellent foundation. All dynamic routes (`/packages/[slug]`, `/blog/[slug]`, `/destinations/[slug]`, `/trekking/[region]`) use `generateStaticParams` which means they are pre-rendered as static HTML at build time. Google sees fully rendered content without JavaScript execution. This is the correct architecture for SEO.

### Current Indexable URLs

| URL | Type | Notes |
|---|---|---|
| `/` | Homepage | Static |
| `/packages` | Package listing | Static |
| `/packages/adi-kailash-yatra` | Package detail | SSG |
| `/packages/darma-valley-trek` | Package detail | SSG |
| `/packages/panchachuli-base-camp-trek` | Package detail | SSG |
| `/packages/kumaon-temples-heritage-tour` | Package detail | SSG |
| `/packages/harshil-valley-gangotri` | Package detail | SSG |
| `/packages/kyarkoti-lake-trek` | Package detail | SSG |
| `/packages/gidara-bugyal-trek` | Package detail | SSG |
| `/packages/dayara-bugyal-trek` | Package detail | SSG |
| `/destinations` | Destination listing | Static |
| `/destinations/kumaon` | Destination detail | SSG |
| `/destinations/garhwal` | Destination detail | SSG |
| `/trekking` | Trekking overview | Static |
| `/trekking/inner-himalaya` | Region page | SSG |
| `/trekking/darma-valley` | Region page | SSG |
| `/trekking/munsiyari` | Region page | SSG |
| `/trekking/kumaon-cultural` | Region page | SSG |
| `/trekking/harshil-gangotri` | Region page | SSG |
| `/trekking/kyarkoti-lake` | Region page | SSG |
| `/trekking/gidara-bugyal` | Region page | SSG |
| `/trekking/dayara-bugyal` | Region page | SSG |
| `/blog` | Blog listing | Static |
| `/blog/adi-kailash-yatra-ultimate-guide` | Blog post | SSG |
| `/blog/altitude-sickness-prevention-treatment` | Blog post | SSG |
| `/blog/why-trek-with-a-veteran-guide` | Blog post | SSG |
| `/blog/best-time-to-trek-kumaon-uttarakhand` | Blog post | SSG |
| `/blog/adi-kailash-vs-om-parvat-which-yatra` | Blog post | SSG |
| `/blog/essential-gear-first-himalayan-trek` | Blog post | SSG |
| `/blog/best-uttarakhand-treks-for-beginners` | Blog post | SSG |
| `/blog/best-winter-treks-uttarakhand` | Blog post | SSG |
| `/blog/dayara-bugyal-vs-gidara-bugyal` | Blog post | SSG |
| `/blog/uttarakhand-treks-from-delhi` | Blog post | SSG |
| `/about` | About page | Static |
| `/contact` | Contact page | Static |
| `/gallery` | Gallery | Static |
| `/sitemap.xml` | Sitemap | Auto-generated |
| `/robots.txt` | Robots | Auto-generated |

**Total: ~35 indexable URLs**

---

## 2. robots.txt

**Current:**
```
User-agent: *
Allow: /
Sitemap: https://www.himalvara.com/sitemap.xml
```

**Assessment:** Correct. No important pages blocked. No unnecessary Disallow rules. Nothing to change.

---

## 3. Sitemap

**Current:** Dynamically generated at `/sitemap.xml` using `app/sitemap.ts`. Includes all static routes, package pages, destination pages, trekking region pages, and blog posts.

**Issues:**
- `lastModified` is always `new Date()` (today's date) for all static routes — cosmetically suboptimal but not harmful
- Blog post dates use `new Date(post.date)` which is correct
- High-value blog posts have different `changeFrequency` and `priority` — good differentiation
- Does NOT include: `/gallery` (present in static routes — actually it does include it), `/api/*` routes (correct, API routes should not be indexed)

**Assessment:** Functionally correct. Priority values are reasonable. No significant issues.

---

## 4. Canonical URLs

**Status by page type:**

| Page Type | Canonical Implemented |
|---|---|
| Homepage (layout.tsx) | ✅ Yes — `alternates: { canonical: BASE }` |
| Package detail pages | ✅ Yes — `alternates: { canonical: \`${BASE}/packages/${pkg.slug}\` }` |
| Blog post pages | ❌ **Missing** |
| Destination detail pages | ❌ **Missing** |
| Trekking region pages | ❌ **Missing** |
| About, Contact, Gallery | ❌ **Missing** (layout canonical only covers root) |

**Priority P0:** Blog, destination, and trekking pages are missing canonical tags. This is a risk if Google encounters any parameter-appended variants of these URLs.

---

## 5. Metadata Quality

### Homepage
- **Title:** "Himalvara Travels — Premium Himalayan Trekking & Tours"
- **Layout default title:** "Himalvara Travels — Veteran-Led Himalayan Trekking & Tours"
- **Problem:** Inconsistent messaging between homepage title and layout default. The "veteran-led" differentiator in the layout default is more distinctive and brand-appropriate.
- **Description:** Good — mentions key destinations.

### Package Pages
- **Title template:** `"[title] — [duration] Days | ₹[price] | Himalvara"` — Good, includes key commercial signals
- **Description:** Auto-generated from difficulty, duration, altitude, price — accurate and useful
- **Canonical:** Present ✅
- **OG/Twitter:** Present ✅
- **Structured data:** TouristTrip + FAQPage — Good ✅

### Blog Posts
- **Title:** `"[post.title] | Himalvara Travels"` — Acceptable
- **Description:** Uses `post.excerpt` — Good
- **Canonical:** **Missing** ❌
- **OG type:** `"article"` ✅ with `publishedTime` ✅
- **Structured data:** Article schema ✅

### Destination Pages
- **Title:** `"[dest.name] | Himalvara Travels"` — Too generic
- **Description:** Uses `dest.description` — OK but could be richer
- **Canonical:** **Missing** ❌
- **OG image:** **Missing** ❌
- **Structured data:** **None** ❌

### Trekking Region Pages
- **Title:** `"[trek.name] Trekking | Himalvara Travels"` — Better than destinations
- **Description:** Uses `trek.description` — OK
- **Canonical:** **Missing** ❌
- **OG image:** **Missing** ❌
- **Structured data:** **None** ❌

### About Page
- **Title:** "About Us | Himalvara Travels" — Generic
- **Description:** "Veteran-founded, veteran-led." — Too short

---

## 6. Structured Data

### Organization Schema (layout.tsx)
- `@type: TravelAgency` ✅
- `name`, `url`, `logo`, `description` ✅
- `foundingDate: "2018"` ✅
- `address` (Pithoragarh) ✅
- `contactPoint` with phone ✅
- `sameAs` with Facebook/Instagram ✅
- **Bug:** `logo: \`${BASE}/logo.png\`` — The actual file is at `/himalvara-logo.png`. `/logo.png` would 404. ❌

### Package Pages
- `TouristTrip` schema ✅
- `FAQPage` schema ✅
- `aggregateRating` correctly omitted when `reviewCount: 0` ✅
- `Offer` with `price` and `priceCurrency` ✅

### Blog Posts
- `Article` schema ✅
- `datePublished`, `dateModified` ✅
- `author` (Person) ✅
- `publisher` (Organization with logo) ✅
- **Note:** `dateModified` always equals `datePublished` — minor

### Missing Schemas
- **BreadcrumbList** — Not implemented on any page despite visual breadcrumbs existing ❌
- **WebSite** with `SearchAction` — Not in layout ❌
- Destination and trekking region pages have no structured data ❌

---

## 7. Breadcrumbs

Visual breadcrumbs exist on all key pages (packages, blog, destinations, trekking). They are semantically marked with `aria-label="Breadcrumb"` and `nav` elements. However, **no BreadcrumbList JSON-LD is implemented**. Google uses BreadcrumbList to display breadcrumbs in search results — a missed opportunity for all inner pages.

---

## 8. Internal Linking

### Current State
- **Homepage → Packages, Destinations, Trekking:** Yes (via nav and sections)
- **Package pages → Related packages:** Yes (same category) ✅
- **Package pages → Destination pages:** **No** ❌
- **Package pages → Trekking region pages:** **No** ❌
- **Destination pages → Package pages:** Yes (via automated package listing) ✅
- **Destination pages → Trekking region pages:** **No** ❌
- **Trekking region pages → Package pages:** Intended but broken (see below)
- **Trekking region pages → Other regions:** Yes ✅
- **Blog posts → Package pages:** Generic CTA only, no contextual inline links ❌
- **Blog posts → Destination pages:** **No** ❌
- **Blog posts → Other relevant blog posts:** Only in sidebar (related posts) ✅

### Critical Bug: Trekking Region Package Matching
The `trekking/[region]/page.tsx` filters packages as:
```ts
const packages = ALL_PACKAGES.filter(
  (p) => p.category === "Trekking" && p.destination.includes(trek.packageKeyword)
);
```

The package `destination` strings use region names ("Pithoragarh, Kumaon", "Uttarkashi, Garhwal") but most trekking `packageKeyword` values reference specific valley/lake names not present in those strings:

| Trekking Region | packageKeyword | Package destination | Matches? |
|---|---|---|---|
| inner-himalaya | "Pithoragarh" | "Pithoragarh, Kumaon, Uttarakhand, India" | ✅ |
| darma-valley | "Darma" | "Pithoragarh, Kumaon, Uttarakhand, India" | ❌ |
| munsiyari | "Panchachuli" | "Pithoragarh, Kumaon, Uttarakhand, India" | ❌ |
| kumaon-cultural | "Kumaon" | "Pithoragarh, Kumaon, Uttarakhand, India" | ✅ |
| harshil-gangotri | "Harshil" | "Uttarkashi, Garhwal, Uttarakhand, India" | ❌ |
| kyarkoti-lake | "Kyarkoti" | "Uttarkashi, Garhwal, Uttarakhand, India" | ❌ |
| gidara-bugyal | "Gidara" | "Uttarkashi, Garhwal, Uttarakhand, India" | ❌ |
| dayara-bugyal | "Dayara" | "Uttarkashi, Garhwal, Uttarakhand, India" | ❌ |

**Result:** 6 of 8 trekking region pages show zero packages, meaning their commercial conversion path is broken. This is a significant UX and SEO issue.

---

## 9. Navigation & Site Architecture

**Navbar:** Himalvara logo + links to Packages, Destinations, Trekking, Blog, About, Contact. Clean and accessible.

**Footer:** Includes links to Packages, Destinations, Trekking, Blog, About, Contact, Gallery. Good.

**Missing in nav/footer:** No links directly to Garhwal, Kumaon, or specific regions from top-level navigation — users and bots must navigate through multiple steps to reach regional content.

---

## 10. Images

- Local images in `/public/packages/` and `/public/gallery/`: well-organized ✅
- Wikipedia Commons images used for some package/destination heroes: no `width`/`height` for external images but Next.js `Image` component with `fill` handles this ✅
- Unsplash images for blog covers and some packages ✅
- `priority` prop on hero images ✅
- `sizes` prop on hero images ✅
- Alt text present on all `Image` components ✅
- **Note:** Alt text on package heroes uses `pkg.title` (e.g., "Panchachuli Base Camp Trek") — acceptable but not maximally descriptive
- **Major issue:** `/gallery/vsb-299.jpg` is the OG image in layout. It is a local file that exists ✅. But it's a generic gallery photo — no description of what it shows, which weakens OG sharing.

---

## 11. Performance Indicators (Code Analysis)

- `framer-motion` used for animations — can increase JS bundle if not tree-shaken. Version ^12 has improved tree-shaking.
- `embla-carousel-react` — lightweight
- Radix UI primitives — well-tree-shaken
- No third-party analytics scripts besides GA4 (loaded conditionally via `GoogleAnalytics` component) ✅
- `suppressHydrationWarning` on html element ✅
- No `dangerouslySetInnerHTML` except for JSON-LD scripts (correct usage) ✅

---

## 12. Duplicate Content Risks

**Identified risks:**

1. **`/packages/adi-kailash-yatra`** and **`/blog/adi-kailash-yatra-ultimate-guide`** — Both target "Adi Kailash Yatra" intent. However, the package page is clearly commercial (booking widget, pricing) and the blog post is clearly informational (practical guide). Google should differentiate these correctly. The titles and content are different enough. **Not a problem.**

2. **`/trekking/darma-valley`** and **`/packages/darma-valley-trek`** — The trekking region is informational, the package is commercial. Content is different. **Not a problem.**

3. **Multiple Garhwal trekking regions** (`/trekking/harshil-gangotri`, `/trekking/kyarkoti-lake`, `/trekking/gidara-bugyal`, `/trekking/dayara-bugyal`) all compete for general Garhwal trekking queries. However, they each cover specific sub-areas. **Monitor but not an immediate issue.**

4. **`/destinations/garhwal`** vs `/trekking/[garhwal-region-pages]` — potential for overlap on "Garhwal trekking" type queries. The destination page is more of a hub while trekking pages are specific. **Low risk.**

---

## 13. Thin Pages

| Page | Assessment |
|---|---|
| `/gallery` | Thin from an SEO perspective — images with no descriptive text, no headings beyond gallery title |
| `/trekking/` (listing) | Not inspected in detail — probably OK |
| `/destinations/` (listing) | Not inspected in detail — probably OK |
| `/contact` | Expected to be thin — OK |

The gallery page is unlikely to rank for anything meaningful and is fine as-is.

---

## 14. Summary of Issues by Priority

### P0 — Critical (fix immediately)

| Issue | Impact | File |
|---|---|---|
| Organization schema `logo` URL is `/logo.png` (404) | Broken structured data | `app/layout.tsx` |
| Missing canonical on blog post pages | Duplicate content risk | `app/blog/[slug]/page.tsx` |
| Missing canonical on destination pages | Duplicate content risk | `app/destinations/[slug]/page.tsx` |
| Missing canonical on trekking region pages | Duplicate content risk | `app/trekking/[region]/page.tsx` |
| 6 of 8 trekking region pages show 0 packages | Broken conversion path | `data/packages.ts` |

### P1 — High Value

| Issue | Impact | File |
|---|---|---|
| No BreadcrumbList JSON-LD | Missing rich results opportunity | Multiple pages |
| No WebSite schema with SearchAction | Missing sitelinks searchbox | `app/layout.tsx` |
| Destination pages missing OG images | Weak social sharing | `app/destinations/[slug]/page.tsx` |
| Trekking region pages missing OG images | Weak social sharing | `app/trekking/[region]/page.tsx` |
| Homepage title inconsistency ("Premium" vs "Veteran-Led") | Brand signal dilution | `app/page.tsx` |
| Package pages don't link to destination/region pages | Weak topic clustering | `app/packages/[slug]/page.tsx` |
| Blog posts have no inline contextual links | Weak internal linking | `app/blog/[slug]/page.tsx` |

### P2 — Meaningful Improvements

| Issue | Impact | File |
|---|---|---|
| About page metadata too thin | Minor signal weakness | `app/about/page.tsx` |
| Destination pages title could be richer | Minor CTR improvement | `app/destinations/[slug]/page.tsx` |
| Blog posts don't have inline package links | Missed conversion path | `data/blog.ts` content |
| No GSC verification meta tag emitted when env not set (empty string issue) | Minor | `app/layout.tsx` |

---

## 15. What Should NOT Be Changed

1. **All existing URLs** — they have accumulated indexing signals. Don't rename any slugs.
2. **Package detail page structure** — it's excellent: itinerary, highlights, FAQ schema, booking widget.
3. **Blog content** — high quality, authoritative, well-structured.
4. **robots.txt** — correct as-is.
5. **Sitemap structure** — correct, just minor polish needed.
6. **Organization schema** (except the logo URL bug) — the content is accurate and well-formed.
7. **GA4 implementation** — already in place.
8. **Breadcrumb visual markup** — `aria-label`, `nav`, and `ChevronRight` separators are semantic and correct.
9. **FAQ schema on packages** — well-implemented.
10. **SSG architecture** — do not introduce `"use client"` on pages that are currently server-rendered.
