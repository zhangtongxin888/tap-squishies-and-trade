# Launch evidence — Tap Squishies and Trade

- Run ID: `tap-squishies-and-trade-20260819-01`
- Intended domain: `https://tap-squishies-and-trade.wiki/`
- Intended host: Vercel
- Current state: production deployment ready; Vercel domains attached; external DNS and GSC still blocked after the new independent recovery window exhausted its one safe Chrome retry
- Browser/controller release: re-granted only to this site for the recovery window; Chrome, Spaceship, and GSC work stopped and the lock was released after the repeated timeout

| Check | Formal URL or resource | Checked at (UTC) | Actual result | Evidence |
|---|---|---:|---|---|
| Independent repository source commit | `https://github.com/zhangtongxin888/tap-squishies-and-trade` | 2026-08-19T16:15:14Z | PASS | Local and remote `main` both resolved to `fff3842ec753e2f6caaca925df834779cb36f51a` after the footer-spacing and guide-button contrast fixes. |
| Research handoff | `.launch/research/codex-research-v1.json` | 2026-08-19T13:40:00Z | PASS | SHA256 `9bfaf36b791fd6d6a927464b658ab03dca64ce91e5237f280d937270058dde66`; approved fact IDs `fact-001` through `fact-008`. |
| Fact gate | `.launch/research/research-approved.json` | 2026-08-19T13:40:00Z | PASS | SHA256 `a2d89d594e5a09a438965a6eeccf480e126483566d71b4c461993cb217f228bc`; official game, developer group, and five tutorial facts approved. |
| Design gate | `.launch/acceptance/release-visual-audit.json` | 2026-08-19T16:12:00Z | PASS | Independent WebKit recheck covered 18 renders: every route returned 200, no horizontal overflow or console/page/request errors, one H1 per page, and correct metadata. Four `Continue guide` buttons measured 15.97:1 contrast after the fix. The largest homepage CTA was clicked at every width and landed on `/beginner-guide/`. |
| Production build | `npm test` / static `out/` export | 2026-08-19T16:10:00Z | PASS | Next.js 16.3.1 build, TypeScript, six-page verification, robots, Sitemap, canonicals, and CTA checks passed after both release fixes. |
| Dependency audit | npm production dependency graph | 2026-08-19T16:10:00Z | PASS | Official npm registry audit returned `found 0 vulnerabilities`. |
| Formal deployment ID and status | Vercel project `prj_NGWsPeUPVjOzIocm8U705EseEeAi` | 2026-08-19T16:09:54Z | PASS | GitHub-connected production deployment `dpl_4ocDLXjeNDqLeSKpCQogA3M425Nt` is `Ready`; deployment URL is `https://tap-squishies-and-trade-oys391clz-zhangtongxin888s-projects.vercel.app` and stable Vercel alias is `https://tap-squishies-and-trade.vercel.app`. |
| Main-domain HTTPS | `https://tap-squishies-and-trade.wiki/` | 2026-08-19T16:44:30Z | BLOCKED: DNS PENDING | The domain is attached and ownership-verified in Vercel, but Spaceship remains authoritative and apex still resolves to old A values `34.216.117.25` and `54.149.79.189`. Vercel still reports `misconfigured` and requires apex A records `216.198.79.1` and `64.29.17.1`. No DNS record was changed in either recovery attempt. |
| `www` redirect | `https://www.tap-squishies-and-trade.wiki/` | 2026-08-19T16:14:47Z | VERCEL PASS / DNS BLOCKED | Vercel project-domain API confirms `www` redirects to the apex with status `308`. External DNS still needs `www CNAME ba1aaf824c34f4da.vercel-dns-017.com.`; current public DNS has no `www` CNAME. |
| Key pages on formal domain | `/`, `/beginner-guide/`, `/gameplay/`, `/progression/`, `/mistakes/`, `/faq/` | 2026-08-19T16:11:00Z | VERCEL PRODUCTION PASS / FORMAL DOMAIN BLOCKED | All six routes returned 200 on the stable production Vercel alias. Formal-domain checks remain blocked by Spaceship DNS. |
| `robots.txt` | `https://tap-squishies-and-trade.wiki/robots.txt` | 2026-08-19T16:11:00Z | VERCEL PRODUCTION PASS / FORMAL DOMAIN BLOCKED | The production artifact returns 200, allows `/`, and references `https://tap-squishies-and-trade.wiki/sitemap.xml`; formal-domain HTTP is pending DNS. |
| Sitemap HTTP and URL count | `https://tap-squishies-and-trade.wiki/sitemap.xml` | 2026-08-19T16:11:00Z | VERCEL PRODUCTION PASS: 6 URLS / FORMAL DOMAIN BLOCKED | The production artifact returns 200 and contains exactly six intended formal URLs; formal-domain HTTP is pending DNS. |
| Canonical URLs | Intended domain on all six pages | 2026-08-19T16:11:00Z | VERCEL PRODUCTION PASS / FORMAL DOMAIN BLOCKED | The production homepage emits canonical `https://tap-squishies-and-trade.wiki/`; build and visual verifiers confirmed all six canonicals. Formal-domain HTTP is pending DNS. |
| GSC ownership | `tap-squishies-and-trade.wiki` | Not checked | BLOCKED AFTER CHROME RETRY | GSC was not opened or modified because the permitted Chrome reconnect timed out again while still at Spaceship DNS. |
| GSC Sitemap status | `https://tap-squishies-and-trade.wiki/sitemap.xml` | Not checked | BLOCKED AFTER CHROME RETRY | Sitemap was not submitted; there is no `Success` receipt while the formal domain remains unconfigured. |

## Actual providers and fallback

- Research: Codex / GPT-5.6. Grok returned no valid JSON on the first call and hit the turn limit on the one permitted retry.
- Design: Codex / GPT-5.6. Kimi K3 was invoked through the required wrapper, but the installed CLI rejected both permitted prompt-mode automatic flags before generation. Sites had no offline candidate-design entrypoint compatible with the restriction against deployment credentials.
- Code and acceptance: Codex / GPT-5.6.
- Login attempts: none.
- Model substitutions: none.

## Browser failure and exact recovery point

- First Chrome attempt: opening the exact Spaceship Advanced DNS URL timed out. One reconnect was used, as permitted.
- Reconnect result: the exact page `https://www.spaceship.com/zh/application/advanced-dns-application/manage/tap-squishies-and-trade.wiki/` loaded and displayed the correct domain title.
- Second Chrome timeout: reading the DNS page state timed out after the reconnect. Browser work stopped immediately; no Spaceship DNS record and no GSC property was changed.
- Authoritative DNS confirmed independently: `launch1.spaceship.net` and `launch2.spaceship.net`.
- Exact DNS recovery work, limited to this domain: replace the two apex parking A values with `216.198.79.1` and `64.29.17.1`; create `www CNAME ba1aaf824c34f4da.vercel-dns-017.com.`; preserve every unrelated record.

## Second independent recovery window

- Controller release: a new browser lock was granted only to this site.
- Initial state: Chrome connected successfully. The only relevant Spaceship tab found had the exact title `tap-squishies-and-trade.wiki - 高级 DNS - Spaceship` and exact URL `https://www.spaceship.com/zh/application/advanced-dns-application/manage/tap-squishies-and-trade.wiki/`.
- First attempt: taking control of that exact tab timed out before any record was read or changed.
- One safe retry: Chrome was reconnected using the packaged troubleshooting path. Both the user-tab list and controllable-tab list again showed the exact target tab and no other target domain.
- Repeated failure: accessing the exact listed tab timed out again. Work stopped immediately as required; no DNS form was edited or submitted and GSC was not opened.
- Post-stop read-only verification at `2026-08-19T16:44:30Z`: authoritative nameservers remain `launch1.spaceship.net` and `launch2.spaceship.net`; apex still returns `34.216.117.25` and `54.149.79.189`; public `www` CNAME remains absent; Vercel still returns `misconfigured`.
- Finalization: no Chrome tab was marked for handoff or delivery, no Spaceship or GSC workflow remains controlled by this task, and the unique browser lock was released.

## Remaining release sequence

Resume only after a future controller browser release and a working Chrome connection: complete the two scoped Spaceship DNS changes above; run Vercel domain verification for apex and `www`; verify formal-domain HTTPS, the 308 `www` redirect, all six routes, robots, Sitemap, and canonicals; then verify the accurate GSC property, submit `https://tap-squishies-and-trade.wiki/sitemap.xml`, and obtain an explicit `Success` receipt. Until those rows pass, this site is not “pending controller acceptance” and is not “live successfully.”
