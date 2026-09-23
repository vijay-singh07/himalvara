# Himalvara — Topical Authority Map V2

**Date:** 2026-09-23

## Entity Graph (as reflected in current data + routes)

```
Himalvara Travels (brand / TravelAgency)
│
├── Uttarakhand (state / country entity)
│   │
│   ├── Kumaon Himalaya   ─────  /destinations/kumaon
│   │   ├── Pithoragarh district (implied by package.destination strings)
│   │   │   ├── Pithoragarh Inner Himalaya (ILP corridor)
│   │   │   │   └── /trekking/inner-himalaya
│   │   │   │       ├── Adi Kailash (Chhota Kailash, 6310 m)  → /packages/adi-kailash-yatra
│   │   │   │       │   ├── /blog/adi-kailash-yatra-ultimate-guide
│   │   │   │       │   ├── /blog/adi-kailash-vs-om-parvat-which-yatra
│   │   │   │       │   ├── /blog/adi-kailash-vs-kailash-mansarovar
│   │   │   │       │   └── /blog/adi-kailash-inner-line-permit-guide
│   │   │   │       ├── Om Parvat (6191 m)  → /packages/adi-kailash-yatra
│   │   │   │       │   └── /blog/adi-kailash-vs-om-parvat-which-yatra
│   │   │   │       ├── Kalapani / Nabhidhang / Gunji / Jyolingkong (villages)
│   │   │   │       └── Kailash Mansarovar (comparison entity)
│   │   │   │
│   │   │   ├── Darma Valley  → /trekking/darma-valley
│   │   │   │   ├── /packages/darma-valley-trek
│   │   │   │   ├── /packages/panchachuli-base-camp-trek
│   │   │   │   └── /blog/darma-valley-trek-complete-guide
│   │   │   │
│   │   │   └── Munsiyari & Panchachuli  → /trekking/munsiyari
│   │   │       ├── /packages/panchachuli-base-camp-trek
│   │   │       └── Panchachuli massif (I–V, Rajramba)
│   │   │
│   │   └── Kumaon Cultural Circuit  → /trekking/kumaon-cultural
│   │       ├── /packages/kumaon-temples-heritage-tour
│   │       ├── Almora / Jageshwar / Binsar / Kausani / Baijnath /
│   │       │   Patal Bhubaneswar / Chitai Golu Devta / Kainchi Dham
│   │       └── /blog/best-time-to-trek-kumaon-uttarakhand
│   │
│   └── Garhwal Himalaya  ─────  /destinations/garhwal
│       ├── Uttarkashi district (implied by package.destination strings)
│       │   ├── Harshil Valley & Gangotri  → /trekking/harshil-gangotri
│       │   │   ├── /packages/harshil-valley-gangotri
│       │   │   ├── Gangotri Dham / Gaumukh / Bhagirathi peaks
│       │   │   └── /blog/harshil-valley-gangotri-guide
│       │   │
│       │   ├── Kyarkoti Lake  → /trekking/kyarkoti-lake
│       │   │   └── /packages/kyarkoti-lake-trek
│       │   │
│       │   ├── Gidara Bugyal  → /trekking/gidara-bugyal
│       │   │   ├── /packages/gidara-bugyal-trek
│       │   │   └── /blog/dayara-bugyal-vs-gidara-bugyal
│       │   │
│       │   └── Dayara Bugyal  → /trekking/dayara-bugyal
│       │       ├── /packages/dayara-bugyal-trek
│       │       └── /blog/dayara-bugyal-vs-gidara-bugyal
│       │
│       └── Char Dham context (mentioned only — no dedicated content)
│
└── Cross-cutting informational hubs
    ├── /blog/best-uttarakhand-treks-for-beginners
    ├── /blog/best-winter-treks-uttarakhand
    ├── /blog/uttarakhand-treks-from-delhi
    ├── /blog/altitude-sickness-prevention-treatment
    ├── /blog/essential-gear-first-himalayan-trek
    └── /blog/why-trek-with-a-veteran-guide
```

## Authority Strength (self-assessment)

| Cluster | Rating | Reason |
|---|---|---|
| Adi Kailash / Om Parvat | **Strong** | 1 commercial page + 4 dedicated blogs + region page + destination page; TouristAttraction schema; permit guide; comparison guides. |
| Panchachuli Base Camp | **Medium-Strong** | 1 commercial page + TouristAttraction schema + covered inside 2 region pages. |
| Darma Valley | **Medium-Strong** | 1 commercial page + 1 regional hub + 1 dedicated blog. |
| Harshil / Gangotri | **Medium** | 1 commercial page + 1 regional hub + 1 blog. Gangotri as pilgrimage destination has room to grow but not without invented Char Dham content. |
| Dayara vs Gidara Bugyal | **Medium** | 2 commercial pages + comparison blog. |
| Kyarkoti Lake | **Thin** | 1 commercial page + region page, no dedicated informational article. Would need real trekker photos + trip report to justify a deeper page. |
| Kumaon Cultural | **Fair** | 1 commercial page + region hub. Individual temples (Jageshwar, Patal Bhubaneswar) are mentioned but not dedicated pages (correctly — insufficient content to fill a page without invention). |

## Authority Gaps (not filled — see Content Gap Matrix)

- **Pithoragarh** as a destination hub: substring appears in many package destinations but has no dedicated page. Search intent likely commercial (trek from Pithoragarh) — better routed via package pages than by creating a thin `/destinations/pithoragarh` clone.
- **Kailash Mansarovar** as a comparison entity: only covered in one blog; expanding would require real reporting we do not have.
- **Uttarakhand-wide** broad terms ("best treks in Uttarakhand"): partially served by `/blog/best-uttarakhand-treks-for-beginners`, `/blog/best-winter-treks-uttarakhand`, `/blog/uttarakhand-treks-from-delhi`. Not chased broadly.

## Recommended Reinforcement (safe / P1)

- Add sidebar or in-body links from every blog post to at least one commercial package and one sibling blog post. Currently only sidebar-related posts appear.
- Add a "Related packages" chip strip at the bottom of `/trekking/[region]` (parallel to the "Explore Further" strip on package pages) — small but useful.
- Consider adding `Place` / `TouristDestination` schema to `/destinations/kumaon` and `/destinations/garhwal` once we have real coordinates for the region centroids.

## Recommended NOT to build

See `DO_NOT_CHANGE.md` and `CONTENT_GAP_MATRIX.md` P2 items — the temptation to bulk-generate "trek from [city]" pages, "best of [X]" landing pages, or per-temple pages is high but authority follows real content, not URL count.
