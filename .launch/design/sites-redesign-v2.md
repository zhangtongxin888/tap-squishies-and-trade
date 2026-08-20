---
game: "Tap Squishies and Trade"
domain: "tap-squishies-and-trade.wiki"
package_type: design
version: 2
created_at: "2026-08-20T12:47:44+08:00"
author: Codex with Sites
status: ready_for_review
---

# Sites redesign v2

## Design outcome

The site is rebuilt as a **squishy toy arcade + collector field manual**. Deep indigo is the base; cyan marks navigation and evidence, coral marks action and alerts, and acid lime is reserved for the primary path. The first viewport is an arcade cabinet rather than a generic hero-card stack.

The largest first-screen action is **Start the Beginner Guide** and points to `/beginner-guide`. Roblox remains a smaller external action in the header and supporting text.

Sites project `appgprj_6a8663196bac81919b5d97824a56a274` was reused for design context. No Site was created, saved, deployed, published, or bound to a domain. Production remains on the existing Vercel/Cloudflare path.

## Information architecture

| Route | Job |
|---|---|
| `/` | Arcade entry, first-ten-minutes preview, official media, routes, and dated community snapshot |
| `/beginner-guide` | Five checkpoints for the first ten minutes: HUD, Fidget, shop/box, Index/Backpack, progression/trade |
| `/gameplay` | Visible core loop, plaza map, shop catalog observations, blind-box UI, and trade-table states |
| `/progression` | Collection Index, 16 observed reveal labels, Claim XP control, and upgrade-node map |
| `/mistakes` | Trade confirmation and safety, progress/rate confusion, locks, Server Luck, and snapshot-value errors |
| `/faq` | Direct answers, technical identity, server snapshot, localization, and evidence policy |

## Visual tokens

| Token | Value | Role |
|---|---|---|
| Deep indigo | `#08162f` | Main arcade ground |
| Indigo surface | `#0d2348` | Consoles and evidence desks |
| Cyan | `#27d6e4` | Navigation, screen edges, verified evidence |
| Coral | `#ff6f61` | Motion, warnings, reveal energy |
| Acid lime | `#d7ff55` | Primary action and successful state |
| Collector paper | `#f4f0df` | Long-form reading surface |
| Paper ink | `#10213a` | Accessible text on paper |

Typography uses system-only stacks: a condensed impact face for arcade headlines, Avenir/system sans for reading, and system monospace for fact IDs and snapshot labels. No external font files were added.

## 106-fact map

Every approved `core_eligible=true` fact has one primary page. Reuse elsewhere is only a shorter contextual summary.

- `/` — 25 facts: TSQ-001, 004, 009, 013, 022, 026, 027, 033–038, 040, 057–067.
- `/beginner-guide` — 23 facts: TSQ-005, 020, 021, 023, 028–032, 121, 123, 131, 142, 154, 155, 157–161, 167–169.
- `/gameplay` — 18 facts: TSQ-019, 124–127, 129, 132–138, 143, 144, 162–164, 183.
- `/progression` — 24 facts: TSQ-007, 008, 139, 140, 145–153, 165, 166, 170, 174–181.
- `/mistakes` — 9 facts: TSQ-128, 130, 135, 141, 156, 171–173, 182.
- `/faq` — 7 facts: TSQ-002, 003, 006, 068–070, 122.

Total: **106**, with no missing or duplicate primary assignments. The machine-readable file contains the exact ID arrays.

## Evidence wording

- TSQ-123–183 are described as approximate storyboard-frame observations. Their visible labels, objects, prices and effects are not promoted into hidden mechanics.
- API values that can change use “research snapshot,” a date, or an explicit “when checked” qualifier.
- +300 coins, +50 coins, +158/+348 XP, shop prices, Server Luck states and reveal percentages are presented as observed examples, never guaranteed yields, permanent prices, current odds or complete formulas.
- Locks confirm only a locked screen; they do not establish unlock requirements.

## Assets

Only official Roblox media resolved from the approved official-media facts is displayed:

- TSQ-057 official game icon in the arcade cabinet.
- TSQ-059 official stretch artwork and TSQ-060 official trade-table artwork in the media marquee.

Each image carries a visible source/fact caption and accurate alt text. No scraped creator image, stock image, model-authored SVG, or unclear asset is used. The visual system otherwise relies on CSS geometry.

## Responsive behavior

- **375px:** single-column hero and cabinet, five compact guide labels, full-width primary CTA, stacked timelines/ledgers, no horizontal page overflow.
- **768px:** primary reading column first; data grids use one or two columns; the media marquee keeps an eagerly decoded representative official image; trade and Index visuals remain readable without clipping.
- **1440px:** 1260px shell, split hero, four-column reveal tape, and side-by-side evidence/context layouts.

## Preserved production surface

The canonical domain, metadata, `robots.txt`, `sitemap.xml`, static-export architecture, Vercel config and existing project structure are preserved. No `ads.txt`, ad integration or analytics integration existed before this redesign, so none was removed and none was invented. Formal hosting, DNS, GSC, Git push and production deployment remain out of scope.

## Review state

Local implementation passes lint, typecheck, production build, the six-route verification suite, canonical/robots/sitemap checks, the primary CTA check, and a 106-of-106 fact-map comparison. Full-page evidence is saved at:

- `.launch/design/evidence/home-375.png`
- `.launch/design/evidence/home-768.png`
- `.launch/design/evidence/home-1440.png`

Final status remains **ready for controller design review**, not deployed or launched.
