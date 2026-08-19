import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const origin = "https://tap-squishies-and-trade.wiki";
const pages = [
  { route: "", title: "Tap Squishies and Trade Guide", canonical: `${origin}/` },
  { route: "beginner-guide", title: "Beginner Guide", canonical: `${origin}/beginner-guide/` },
  { route: "gameplay", title: "Gameplay Guide", canonical: `${origin}/gameplay/` },
  { route: "progression", title: "Progression Guide", canonical: `${origin}/progression/` },
  { route: "mistakes", title: "Common Mistakes", canonical: `${origin}/mistakes/` },
  { route: "faq", title: "FAQ", canonical: `${origin}/faq/` },
];

for (const page of pages) {
  const path = page.route ? join("out", page.route, "index.html") : join("out", "index.html");
  const html = await readFile(path, "utf8");
  assert.match(html, new RegExp(`<title>[^<]*${page.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^<]*<\\/title>`));
  assert.ok(html.includes(`rel="canonical" href="${page.canonical}"`), `${page.route || "/"} canonical mismatch`);
  assert.match(html, /<meta name="description" content="[^"]{40,}"/);
  assert.ok(!html.includes("Lorem ipsum"), `${page.route || "/"} contains placeholder copy`);
}

const homepage = await readFile(join("out", "index.html"), "utf8");
assert.match(
  homepage,
  /class="button button-primary" href="\/beginner-guide\/"/,
  "The primary hero CTA must lead to the on-site beginner guide",
);

const robots = await readFile(join("out", "robots.txt"), "utf8");
assert.ok(robots.includes("Allow: /"));
assert.ok(robots.includes(`${origin}/sitemap.xml`));

const sitemap = await readFile(join("out", "sitemap.xml"), "utf8");
for (const page of pages) {
  assert.ok(sitemap.includes(page.canonical), `Sitemap is missing ${page.canonical}`);
}
assert.equal((sitemap.match(/<url>/g) ?? []).length, pages.length, "Sitemap URL count must stay at six");

console.log(`Verified ${pages.length} pages, robots.txt, sitemap.xml, canonical URLs, and the primary CTA.`);
