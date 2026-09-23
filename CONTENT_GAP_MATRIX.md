# Himalvara — Content Gap Matrix V2

**Date:** 2026-09-23
**Convention:** P0 = act now (justified by real content + GSC signal + no cannibal risk); P1 = plan for a real trip report / owner input; P2 = do not build (would require invention or has no evidence of demand).

| Entity | Existing URL | Depth | GSC signal | Search intent | Missing | Recommended action | Priority |
|---|---|---|---|---|---|---|---|
| Adi Kailash / Chhota Kailash | `/packages/adi-kailash-yatra` + 4 blogs + `/trekking/inner-himalaya` | Deep | Tier 1 | Commercial + informational | Nothing critical | Maintain; refresh departures each season | — |
| Om Parvat | Same package + comparison blog | Deep (as part of Adi Kailash) | Tier 1 (via yatra) | Informational + commercial | A dedicated `/blog/om-parvat-viewpoint-nabhidhang` could pick up the "Om Parvat viewpoint" query, but only if we have a real trip report | Wait for owner trip report | P1 |
| Panchachuli Base Camp | `/packages/panchachuli-base-camp-trek` | Deep | Tier 1 | Commercial | — | Maintain | — |
| Panchachuli (peaks/massif entity) | Referenced from BC + Darma + Kumaon pages | Fair | Tier 3 | Informational (peaks) | Standalone informational page would risk cannibalizing BC | Do not build | P2 |
| Darma Valley | `/packages/darma-valley-trek` + `/trekking/darma-valley` + 1 blog | Deep | Tier 2 | Commercial + informational | — | Maintain | — |
| Kyarkoti Lake | `/packages/kyarkoti-lake-trek` + `/trekking/kyarkoti-lake` | Medium | Tier 2 | Commercial + informational | Trip report / permit / drone photos | Owner: write a "Kyarkoti Lake trek — trip report" once run this season | P1 |
| Adi Kailash | (see above) | Deep | Tier 1 | Mixed | — | — | — |
| Om Parvat viewpoint (Nabhidhang) | Covered in package + blog | Fair | Tier 3 | Informational | Standalone viewpoint page | P1 (trip report) | P1 |
| Harshil Valley | `/packages/harshil-valley-gangotri` + `/trekking/harshil-gangotri` + 1 blog | Deep | Tier 2 | Mixed | — | Maintain | — |
| Gangotri Dham | Same as above | Fair (embedded) | Tier 2 | Informational (pilgrimage) | A pure Gangotri Dham darshan guide could stand alone — but only with respectful, factual content | P1 | P1 |
| Gaumukh | Mentioned in Harshil package + Garhwal destination | Thin | Tier 3 | Informational | — | Do not build stand-alone; deepen the Harshil blog if owner adds a Gaumukh trek report | P2 |
| Garhwal | `/destinations/garhwal` | Fair | Tier 2 | Broad | Deeper `longDescription` | Owner: expand text over time | P1 |
| Kumaon | `/destinations/kumaon` | Fair | Tier 2 | Broad | Deeper `longDescription` | Owner: expand text over time | P1 |
| Pithoragarh | (implied) | None | Weak | Commercial (routed to packages) | Dedicated page | Do not build — no distinct intent | P2 |
| Munsiyari | `/trekking/munsiyari` | Fair | Tier 3 | Informational | — | Maintain | — |
| Pithoragarh Inner Himalaya (ILP corridor) | `/trekking/inner-himalaya` | Fair | Tier 3 | Informational | — | Maintain | — |
| Kumaon Cultural Circuit | `/trekking/kumaon-cultural` | Fair | Tier 3 | Informational | Now correctly linked to Kumaon Temples package | Maintain | — |
| Jageshwar Dham | Mentioned in Kumaon package + cultural region | Thin | None yet | Informational (Jyotirlinga) | Dedicated page would need real reporting | Do not build | P2 |
| Patal Bhubaneswar | Mentioned in Kumaon package | Thin | None yet | Informational | Same | Do not build | P2 |
| Baijnath | Mentioned in Kumaon package | Thin | None yet | Informational | Same | Do not build | P2 |
| Almora | Mentioned in Kumaon package | Thin | None yet | Informational | Not aligned with core commercial offering | Do not build | P2 |
| Kausani | Mentioned in Kumaon package | Thin | None yet | Informational | Same | Do not build | P2 |
| Binsar Wildlife Sanctuary | Mentioned in Kumaon package | Thin | None yet | Informational | Same | Do not build | P2 |
| Dayara Bugyal | `/packages/dayara-bugyal-trek` + `/trekking/dayara-bugyal` + comparison blog | Medium | Tier 3 | Commercial | — | Maintain | — |
| Gidara Bugyal | `/packages/gidara-bugyal-trek` + `/trekking/gidara-bugyal` + comparison blog | Medium | Tier 3 | Commercial | — | Maintain | — |
| Bhagirathi peaks | Mentioned in Harshil / Kyarkoti | Thin | None yet | Informational (mountaineering) | Not our audience | Do not build | P2 |
| Inner Line Permit | `/blog/adi-kailash-inner-line-permit-guide` | Deep | Tier 2 | Informational | — | Maintain | — |

## P0 Summary

**No P0 pages to build.** Every entity where a new page would help is either already covered or requires real reporting that Himalvara has not yet produced. Creating pages without underlying content would risk Google's helpful-content / thin-content signal.

## P1 Summary (owner action, not agent action)

- Kyarkoti Lake trip report blog (owner: write after next season).
- Om Parvat viewpoint dedicated blog (owner: after next yatra).
- Gangotri Dham darshan guide blog (owner: factual, respectful).
- Expand `longDescription` in `data/destinations.ts` for both Kumaon and Garhwal with real regional knowledge.

## P2 Summary (do not build)

- Per-temple pages (Jageshwar, Baijnath, Patal Bhubaneswar).
- Per-hill-town pages (Almora, Kausani, Binsar, Munsiyari as tourism hubs — the trekking-region page already exists for Munsiyari).
- Dedicated Pithoragarh destination page.
- Standalone Panchachuli peaks / Bhagirathi peaks pages.
- Programmatic "trek from [city]" pages.
- Programmatic "best of [X]" pages.
