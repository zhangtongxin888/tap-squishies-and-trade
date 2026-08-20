import Link from "next/link";
import { FactLedger, SectionHeading } from "@/components/GuideParts";
import { homeLedger, officialMedia, snapshot } from "@/lib/content";
import { site } from "@/lib/site";

const routes = [
  { no: "01", href: "/beginner-guide", label: "10-minute start", copy: "Read the HUD, fidget once, inspect a box, then find the Index." },
  { no: "02", href: "/gameplay", label: "How the loop fits", copy: "Connect fidgeting, shops, blind boxes and the trade table." },
  { no: "03", href: "/progression", label: "Collector index", copy: "Decode collection grids, reveals, XP claims and the upgrade map." },
  { no: "04", href: "/mistakes", label: "Trade safely", copy: "Pause on confirmation, prices, percentages and Server Luck claims." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">The collector&apos;s arcade manual</p>
          <h1>
            Squeeze.<br />
            <span>Reveal.</span><br />
            Trade.
          </h1>
          <p className="lede">
            A field guide to {site.gameName}: learn the first-session signals,
            read the collection Index, and slow down at the trade table.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/beginner-guide">
              Start the Beginner Guide <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-secondary" href="/progression#collector-index">
              Open the Collection Index
            </Link>
          </div>
          <p className="hero-fact">
            Built from 106 approved core facts · verified {site.verifiedOn}
          </p>
          <a className="quiet-link" href={site.officialGameUrl} rel="noreferrer">
            Play on Roblox <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="arcade-cabinet">
          <div className="cabinet-topline"><span>COLLECTOR MODE</span><span>80+ LISTED</span></div>
          <figure className="cabinet-screen">
            <img src={officialMedia.icon.src} alt={officialMedia.icon.alt} loading="eager" decoding="sync" fetchPriority="high" />
            <figcaption>{officialMedia.icon.source} · {officialMedia.icon.factId}</figcaption>
          </figure>
          <div className="cabinet-controls" aria-hidden="true">
            <span className="joystick"><i /></span>
            <span className="arcade-button coral" />
            <span className="arcade-button cyan" />
            <span className="arcade-button lime" />
          </div>
          <div className="cabinet-slot">INSERT CURIOSITY</div>
        </div>
      </section>

      <section className="game-strip" aria-label="Core guide loop">
        <div className="shell game-strip-inner">
          <span>FIDGET</span><i>→</i><span>COINS</span><i>→</i><span>BLIND BOX</span><i>→</i><span>INDEX</span><i>→</i><span>TRADE</span>
        </div>
      </section>

      <section className="section shell first-run">
        <div className="section-side-label">START HERE / 01</div>
        <div>
          <SectionHeading
            eyebrow="First-session route"
            title="Your first ten minutes need landmarks, not a tier list."
            description="The guide starts with visible interface cues: the Fidget control, coin and XP counters, box screens, the Index and the trade table. Each recommendation is labeled as guidance—not a guaranteed game sequence."
          />
          <div className="ticket-steps">
            <article><span>00:00–02:00</span><h3>Read the HUD</h3><p>Locate coins, XP, your equipped squishy and the Fidget control before spending anything.</p></article>
            <article><span>02:00–05:00</span><h3>Watch one result</h3><p>Fidget once and observe the response. Footage shows coin popups, but values vary between examples.</p></article>
            <article><span>05:00–08:00</span><h3>Open, then inspect</h3><p>Learn the Pick A Box screen and check the revealed item inside the Index.</p></article>
            <article><span>08:00–10:00</span><h3>Tour the trade table</h3><p>Notice the two offers and confirmation states. You do not need to rush a trade.</p></article>
          </div>
          <Link className="text-link" href="/beginner-guide">Walk the complete first session <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section media-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Official cabinet art"
            title="Soft toys, loud signals."
            description="These images come from the game’s official Roblox media set. They establish the guide’s tactile shapes and trade-table language; they are promotional artwork, not proof of detailed rules."
          />
          <div className="media-marquee">
            <figure className="media-frame media-frame-wide">
              <img src={officialMedia.stretch.src} alt={officialMedia.stretch.alt} loading="eager" decoding="sync" fetchPriority="high" />
              <figcaption>{officialMedia.stretch.source} · {officialMedia.stretch.factId}</figcaption>
            </figure>
            <figure className="media-frame">
              <img src={officialMedia.trade.src} alt={officialMedia.trade.alt} loading="eager" decoding="sync" />
              <figcaption>{officialMedia.trade.source} · {officialMedia.trade.factId}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section shell route-board">
        <div className="route-board-head">
          <SectionHeading eyebrow="Pick a lane" title="Every question has a shorter route." />
          <p>Read in order, or jump directly to the interface you are looking at.</p>
        </div>
        <div className="route-lines">
          {routes.map((route) => (
            <Link href={route.href} className="route-line" key={route.href}>
              <span>{route.no}</span><h3>{route.label}</h3><p>{route.copy}</p><strong aria-hidden="true">↗</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="snapshot-section">
        <div className="shell snapshot-grid">
          <div>
            <p className="eyebrow">Dated community snapshot</p>
            <h2>Useful context, frozen in time.</h2>
            <p>These values were returned at {snapshot.observedAt}. They are preserved as a research snapshot and are not live counters.</p>
          </div>
          <dl>
            {snapshot.stats.map((stat) => (
              <div key={stat.id}><dt>{stat.label}</dt><dd>{stat.value}</dd><small>{stat.id}</small></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section shell evidence-section">
        <SectionHeading
          eyebrow="Evidence desk"
          title="What the homepage is allowed to say."
          description="Each statement below rolls up approved core facts. Dynamic figures stay dated, and media descriptions stay limited to what the artwork visibly depicts."
        />
        <FactLedger title="Homepage fact ledger" notes={homeLedger} />
      </section>
    </>
  );
}
