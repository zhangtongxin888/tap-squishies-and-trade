import Link from "next/link";
import { navigation, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">Independent fan guide</p>
          <h2>Keep the facts squishy-proof.</h2>
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
          <h3>Fact note</h3>
          <p className="footer-copy">
            Gameplay facts on this site were checked on {site.verifiedOn}
            against official Roblox API metadata and the creator&apos;s Roblox
            experience description.
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
        <span>Made for clearer first sessions.</span>
        <Link href="/faq">Facts, limits &amp; FAQ</Link>
      </div>
    </footer>
  );
}
