# Launch evidence — Tap Squishies and Trade

- Run ID: `tap-squishies-and-trade-20260819-01`
- Intended domain: `https://tap-squishies-and-trade.wiki/`
- Intended host: Vercel
- Current state: non-browser implementation complete; production deployment and browser/configuration steps not started
- Browser/controller release: not granted

| Check | Formal URL or resource | Checked at (UTC) | Actual result | Evidence |
|---|---|---:|---|---|
| Independent repository source commit | `https://github.com/zhangtongxin888/tap-squishies-and-trade` | 2026-08-19T14:10:00Z | Pending first push | Commit will be recorded after the reviewed source is committed. |
| Research handoff | `.launch/research/codex-research-v1.json` | 2026-08-19T13:40:00Z | PASS | SHA256 `9bfaf36b791fd6d6a927464b658ab03dca64ce91e5237f280d937270058dde66`; approved fact IDs `fact-001` through `fact-008`. |
| Fact gate | `.launch/research/research-approved.json` | 2026-08-19T13:40:00Z | PASS | SHA256 `a2d89d594e5a09a438965a6eeccf480e126483566d71b4c461993cb217f228bc`; official game, developer group, and five tutorial facts approved. |
| Design gate | `.launch/acceptance/design-approved.json` | 2026-08-19T14:05:00Z | PASS | 375/768/1440 renders passed all six routes, primary CTA, overflow, keyboard, and contrast checks. |
| Production build | `npm test` / static `out/` export | 2026-08-19T14:10:00Z | PASS | Next.js 16.3.1 build, TypeScript, six-page verification, robots, Sitemap, canonicals, and CTA checks passed. |
| Dependency audit | npm production dependency graph | 2026-08-19T14:10:00Z | PASS | Official npm registry audit returned `found 0 vulnerabilities`. |
| Formal deployment ID and status | Vercel | Not checked | PENDING RELEASE | No deployment was created; deployment credentials were not used. |
| Main-domain HTTPS | `https://tap-squishies-and-trade.wiki/` | Not checked | PENDING RELEASE | DNS and production deployment were intentionally not touched. |
| `www` redirect | `https://www.tap-squishies-and-trade.wiki/` | Not checked | PENDING RELEASE | DNS and redirect configuration were intentionally not touched. |
| Key pages on formal domain | `/`, `/beginner-guide/`, `/gameplay/`, `/progression/`, `/mistakes/`, `/faq/` | Not checked | LOCAL PASS / PRODUCTION PENDING | All six routes returned 200 in isolated local production rendering; formal-domain checks require deployment. |
| `robots.txt` | `https://tap-squishies-and-trade.wiki/robots.txt` | 2026-08-19T14:10:00Z | LOCAL PASS / PRODUCTION PENDING | Static output allows `/` and references the intended formal Sitemap URL. |
| Sitemap HTTP and URL count | `https://tap-squishies-and-trade.wiki/sitemap.xml` | 2026-08-19T14:10:00Z | LOCAL PASS: 6 URLs / PRODUCTION PENDING | Static output contains exactly six canonical URLs. |
| Canonical URLs | Intended domain on all six pages | 2026-08-19T14:10:00Z | LOCAL PASS / PRODUCTION PENDING | Build verifier confirmed the expected canonical on every page. |
| GSC ownership | `tap-squishies-and-trade.wiki` | Not checked | PENDING RELEASE | GSC was not opened or modified. |
| GSC Sitemap status | `/sitemap.xml` | Not checked | PENDING RELEASE | Submission and a displayed `Success` status require controller release. |

## Actual providers and fallback

- Research: Codex / GPT-5.6. Grok returned no valid JSON on the first call and hit the turn limit on the one permitted retry.
- Design: Codex / GPT-5.6. Kimi K3 was invoked through the required wrapper, but the installed CLI rejected both permitted prompt-mode automatic flags before generation. Sites had no offline candidate-design entrypoint compatible with the restriction against deployment credentials.
- Code and acceptance: Codex / GPT-5.6.
- Login attempts: none.
- Model substitutions: none.

## Remaining release sequence

After controller release: create the Vercel production deployment from this independent repository, connect the root and `www` domains, verify HTTPS and redirects, recheck all formal URLs and SEO files, verify GSC ownership, submit the Sitemap, and wait until GSC explicitly displays `Success`. Until those rows pass, this site is not “pending controller acceptance” and is not “live successfully.”
