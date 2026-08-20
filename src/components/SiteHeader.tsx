import Link from "next/link";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <span className="brand-mark" aria-hidden="true">
            SQ
          </span>
          <span>
            <strong>{site.name}</strong>
            <small>collector field guide</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="play-link" href={site.officialGameUrl} rel="noreferrer">
          Roblox <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
