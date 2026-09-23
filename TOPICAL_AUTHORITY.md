# Himalvara Topical Authority Architecture

**Date:** 2026-09-22

---

## The Target Entity Network

```
                    HIMALVARA
                        │
                  UTTARAKHAND
                        │
         ┌──────────────┴──────────────┐
         │                             │
      GARHWAL                       KUMAON
         │                             │
    ┌────┼────┐               ┌────────┼────────┐
    │    │    │               │        │         │
 Treks  Valleys Yatras      Treks  Valleys   Heritage
    │    │    │               │        │         │
  Dayara │  Gangotri   Panchachuli  Darma    Jageshwar
  Gidara │  Harshil    Adi Kailash  Valley   Almora
 Kyarkoti│            Om Parvat             Kausani
         │
      Bhagirathi
```

---

## Current Coverage Assessment

### Garhwal Topics

| Topic | Coverage | Quality | URL |
|---|---|---|---|
| Garhwal (hub) | ✅ Good | Medium | `/destinations/garhwal` |
| Harshil Valley & Gangotri | ✅ Strong | High | `/packages/harshil-valley-gangotri` + `/trekking/harshil-gangotri` |
| Kyarkoti Lake | ✅ Good | High | `/packages/kyarkoti-lake-trek` + `/trekking/kyarkoti-lake` |
| Dayara Bugyal | ✅ Strong | High | `/packages/dayara-bugyal-trek` + `/trekking/dayara-bugyal` |
| Gidara Bugyal | ✅ Good | High | `/packages/gidara-bugyal-trek` + `/trekking/gidara-bugyal` |
| Garhwal comparison content | ✅ Present | High | `/blog/dayara-bugyal-vs-gidara-bugyal` |
| Winter Garhwal treks | ✅ Present | High | `/blog/best-winter-treks-uttarakhand` |

**Garhwal assessment:** Strong commercial coverage. The region page and individual trekking region pages exist. Main weakness: destination page needs richer metadata and the trekking region pages have a package matching bug.

### Kumaon Topics

| Topic | Coverage | Quality | URL |
|---|---|---|---|
| Kumaon (hub) | ✅ Good | Medium | `/destinations/kumaon` |
| Adi Kailash Yatra | ✅ Excellent | Very High | `/packages/adi-kailash-yatra` + 2 blog posts |
| Om Parvat | ✅ Covered (within Adi Kailash) | High | Same pages |
| Darma Valley | ✅ Strong | High | `/packages/darma-valley-trek` + `/trekking/darma-valley` |
| Panchachuli Base Camp | ✅ Strong | High | `/packages/panchachuli-base-camp-trek` + `/trekking/munsiyari` |
| Kumaon Heritage Tour | ✅ Present | High | `/packages/kumaon-temples-heritage-tour` |
| Kumaon trekking calendar | ✅ Present | High | `/blog/best-time-to-trek-kumaon-uttarakhand` |

**Kumaon assessment:** Excellent depth. This is Himalvara's strongest topical area. Adi Kailash has commercial + informational + comparison content — the right structure. Main weakness: internal links don't reinforce the cluster connections.

### Uttarakhand Cross-Cutting Content

| Topic | Coverage | Quality | URL |
|---|---|---|---|
| Uttarakhand beginner treks | ✅ Good | High | `/blog/best-uttarakhand-treks-for-beginners` |
| Uttarakhand treks from Delhi | ✅ Present | High | `/blog/uttarakhand-treks-from-delhi` |
| Altitude sickness (Himalayan safety) | ✅ Present | High | `/blog/altitude-sickness-prevention-treatment` |
| Himalayan gear | ✅ Present | Good | `/blog/essential-gear-first-himalayan-trek` |
| Veteran guiding philosophy | ✅ Present | Good | `/blog/why-trek-with-a-veteran-guide` |

### Missing Coverage (Do Not Rush to Fill)

| Topic | Gap Level | Why Not Yet |
|---|---|---|
| Munsiyari as destination | Weak | Should create `/destinations/munsiyari` when real content available |
| Pithoragarh as destination | Weak | Hub for inner Himalaya; create when content is ready |
| Milam Glacier | Absent | Not in current package portfolio |
| Char Dham circuit | Absent | Not in current portfolio |
| Kedarkantha, Har Ki Dun | Absent | Competitors' turf; don't create thin pages |
| Uttarakhand general | Thin | Too broad; build specific first |

---

## Priority Clusters (from GSC Signals)

### Cluster 1: ADI KAILASH (Highest Priority — has clicks)

Current state: excellent. Three content pieces across commercial and informational intent.

**Content assets:**
1. `/packages/adi-kailash-yatra` — commercial conversion page ✅
2. `/blog/adi-kailash-yatra-ultimate-guide` — informational guide ✅
3. `/blog/adi-kailash-vs-om-parvat-which-yatra` — comparison/decision ✅
4. `/trekking/inner-himalaya` — regional hub ✅

**What's missing:**
- Internal cross-links between these four pages
- BreadcrumbList on all pages
- Canonical on blog posts

**Do NOT create:** More Adi Kailash content right now. Consolidate and link what exists.

### Cluster 2: PANCHACHULI (High Priority — has impressions)

Current state: good commercial page, broken regional context.

**Content assets:**
1. `/packages/panchachuli-base-camp-trek` — commercial ✅
2. `/trekking/munsiyari` — regional hub (broken — shows 0 packages) ❌
3. In `/blog/best-uttarakhand-treks-for-beginners` — mentioned ✅

**What's needed:**
- Fix trekking region page to show the package
- Internal links from package to regional pages
- Cross-link to Darma Valley (same geographic area)

### Cluster 3: DARMA VALLEY (High Priority — has impressions)

**Content assets:**
1. `/packages/darma-valley-trek` — commercial ✅
2. `/trekking/darma-valley` — regional hub (broken — shows 0 packages) ❌

**What's needed:**
- Fix package keyword matching
- Internal links from Darma to Panchachuli and Kumaon

### Cluster 4: GARHWAL MEADOW TREKS (Good organic positioning)

**Content assets:**
1. `/packages/dayara-bugyal-trek` ✅
2. `/packages/gidara-bugyal-trek` ✅
3. `/blog/dayara-bugyal-vs-gidara-bugyal` ✅ (high-quality comparison)
4. `/trekking/dayara-bugyal` (broken) ❌
5. `/trekking/gidara-bugyal` (broken) ❌

**What's needed:**
- Fix trekking region package display
- Internal cross-links

---

## What Gives Himalvara Genuine Authority Advantages

1. **Local, veteran expertise** — real itinerary data, real altitude figures, real acclimatisation protocols from Army training. Not replicated by content farms.

2. **Inner Line Permit specialization** — very few websites cover ILP-required routes (Adi Kailash, Darma Valley) with this depth. Genuine authority.

3. **Original photography** — 300+ gallery images from actual expeditions. Google image search is an additional discovery channel.

4. **Specific route knowledge** — day-by-day itineraries with real camp names (Urthing, Nagling, Son, Duktu) that general travel sites don't include.

5. **Safety protocols** — the altitude sickness and veteran guide content provides genuine E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness).

---

## Link Architecture Priorities

### Hub → Spoke (from hub pages to specific content)

**Homepage** should reinforce connections to both Garhwal and Kumaon hubs.

**`/destinations/kumaon`** should be a strong hub linking to:
- All Kumaon package pages
- All Kumaon trekking region pages  
- Key Kumaon blog posts

**`/destinations/garhwal`** should be a strong hub linking to:
- All Garhwal package pages
- All Garhwal trekking region pages
- Key Garhwal blog posts

### Spoke → Hub (from specific pages back to hubs)

Every package page should link back to its destination hub:
- Kumaon packages → `/destinations/kumaon`
- Garhwal packages → `/destinations/garhwal`

Every trekking region page should link back to its destination:
- Kumaon regions → `/destinations/kumaon`
- Garhwal regions → `/destinations/garhwal`

### Cross-Cluster Links

Panchachuli ↔ Darma Valley (same geographic zone)
Adi Kailash ↔ Om Parvat (same route corridor)
Dayara ↔ Gidara (same geographic area, comparison content exists)

---

## Current Authority Score by Topic (Subjective Assessment)

| Topic | Current Score | Target Score | Gap |
|---|---|---|---|
| Adi Kailash / Om Parvat | 7/10 | 9/10 | Internal links, BreadcrumbList |
| Panchachuli | 6/10 | 8/10 | Fix bugs, internal links |
| Darma Valley | 6/10 | 8/10 | Fix bugs, internal links |
| Kumaon (region) | 6/10 | 8/10 | Better hub metadata |
| Garhwal (region) | 5/10 | 7/10 | Fix bugs, metadata |
| Dayara/Gidara bugyals | 6/10 | 7/10 | Fix bugs |
| Harshil/Gangotri | 5/10 | 7/10 | Fix bugs |
| Kyarkoti | 5/10 | 7/10 | Fix bugs |
