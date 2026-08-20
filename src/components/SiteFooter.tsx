import Link from "next/link";
import { navigation, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">Independent fan guide</p>
          <h2>Tap soft. Trade carefully.</h2>
          <p className="footer-copy">
            {site.name} is an independent fan-made guide. It is not affiliated
            with or endorsed by Roblox or {site.developer}.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <nav className="footer-links" aria-label="Footer navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h3>Evidence rule</h3>
          <p className="footer-copy">
            Facts were checked on {site.verifiedOn}. Video timestamps point to
            approximate storyboard frames; changing values are labeled as dated snapshots.
          </p>
          <a
            className="text-link on-dark"
            href={site.officialGameUrl}
            rel="noreferrer"
          >
            View the official Roblox experience
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>106 approved core facts · 6 focused guide routes</span>
        <Link href="/faq">Sources, limits &amp; FAQ</Link>
      </div>
    </footer>
  );
}
