# Tap Squishies and Trade Guide

Independent, fact-checked fan guide for **Tap Squishies and Trade** on Roblox.

## Local checks

```bash
npm ci
npm test
```

The build exports a static site to `out/`. The verification step checks all six pages, titles, descriptions, canonical URLs, `robots.txt`, `sitemap.xml`, and the on-site beginner-guide hero CTA.

## Deployment preparation

The project is ready for a Vercel Git deployment using Node.js 22 and the standard `npm run build` command. The intended production domain is `tap-squishies-and-trade.wiki`.

DNS, the production deployment, and Google Search Console remain intentionally pending until the site receives the separate browser/configuration release.
