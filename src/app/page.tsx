import Link from "next/link";
import { SectionHeading } from "@/components/GuideParts";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div>
          <p className="eyebrow">A fact-checked fan guide</p>
          <h1>
            Tap Squishies and Trade,
            <br />
            <span>made simple.</span>
          </h1>
          <p className="lede">
            A friendly route through the confirmed parts of {site.gameName}—so
            you can learn the loop, make sense of progression, and keep
            unverified claims out of your plan.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/beginner-guide">
              Start the beginner guide <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-secondary" href="/gameplay">
              See the core loop
            </Link>
          </div>
          <p className="hero-fact">
            Verified {site.verifiedOn} · Clear labels separate facts from
            strategy suggestions.
          </p>
        </div>
        <div className="squishy-stage" aria-hidden="true">
          <div className="squishy-face">
            <span>tap!</span>
          </div>
          <div className="stage-tag">80+ squishies named in the creator description</div>
        </div>
      </section>

      <div className="proof-strip" aria-label="Guide highlights">
        <div className="proof-item">
          <strong>6</strong>
          <span>focused guide pages</span>
        </div>
        <div className="proof-item">
          <strong>8</strong>
          <span>approved facts used</span>
        </div>
        <div className="proof-item">
          <strong>0</strong>
          <span>invented rates or values</span>
        </div>
      </div>

      <section className="section shell">
        <SectionHeading
          eyebrow="Quick start"
          title="Four ideas for your first session"
          description="The mechanics below are verified. The order is a strategy suggestion, not a required in-game sequence."
        />
        <div className="card-grid">
          <article className="guide-card">
            <span className="card-number">01</span>
            <h3>Learn the tap</h3>
            <p>Tap squishies to earn coins. Start by watching that connection.</p>
          </article>
          <article className="guide-card">
            <span className="card-number">02</span>
            <h3>Try a blind box</h3>
            <p>Blind boxes are the confirmed way to find rare squishies.</p>
          </article>
          <article className="guide-card">
            <span className="card-number">03</span>
            <h3>Notice both paths</h3>
            <p>Trading earns XP, while luck and squish powers are upgrade categories.</p>
          </article>
          <article className="guide-card">
            <span className="card-number">04</span>
            <h3>Grow the collection</h3>
            <p>The creator description says there are more than 80 squishies.</p>
          </article>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="shell loop-grid">
          <SectionHeading
            eyebrow="Verified core loop"
            title="Five confirmed parts, one clear map"
            description="This order is a simple way to understand the systems; it does not claim a mandatory sequence."
          />
          <ol className="loop-list">
            <li>
              <div><strong>Tap squishies</strong><span>The confirmed coin-earning action.</span></div>
            </li>
            <li>
              <div><strong>Earn coins</strong><span>A confirmed result of tapping—without assuming what coins purchase.</span></div>
            </li>
            <li>
              <div><strong>Open blind boxes</strong><span>A confirmed route to finding rare squishies.</span></div>
            </li>
            <li>
              <div><strong>Trade with players</strong><span>The confirmed way to earn XP.</span></div>
            </li>
            <li>
              <div><strong>Explore upgrades</strong><span>Luck and squish powers are confirmed upgrade categories.</span></div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading
          eyebrow="Choose your route"
          title="Go from first tap to a cleaner plan"
          description="Each guide stays honest about what is verified and what is simply a practical suggestion."
        />
        <div className="route-grid">
          <Link className="route-card" href="/beginner-guide">
            <span className="route-index">Route 01 · Start</span>
            <h3>Beginner guide</h3>
            <p>A calm first-session sequence built around the confirmed systems.</p>
            <strong>Start here →</strong>
          </Link>
          <Link className="route-card" href="/progression">
            <span className="route-index">Route 02 · Grow</span>
            <h3>Progression guide</h3>
            <p>Separate collection, XP, and upgrades without inventing costs or thresholds.</p>
            <strong>Plan progress →</strong>
          </Link>
          <Link className="route-card" href="/mistakes">
            <span className="route-index">Route 03 · Check</span>
            <h3>Common mistakes</h3>
            <p>Avoid assumptions about rates, values, codes, and the coin-to-box relationship.</p>
            <strong>Check mistakes →</strong>
          </Link>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="shell">
          <SectionHeading
            eyebrow="Fact boundary"
            title="Know what this guide will—and will not—claim"
          />
          <div className="truth-grid">
            <article className="truth-panel verified">
              <h3>Verified here</h3>
              <ul className="check-list">
                <li>Tapping squishies earns coins.</li>
                <li>Blind boxes can reveal rare squishies.</li>
                <li>Trading with players earns XP.</li>
                <li>Luck and squish powers are upgrade categories.</li>
                <li>The creator description says there are 80+ squishies.</li>
              </ul>
            </article>
            <article className="truth-panel unconfirmed">
              <h3>Not claimed here</h3>
              <ul className="dash-list">
                <li>Rarity odds or tier rankings</li>
                <li>Trade values or special trading rules</li>
                <li>Upgrade prices or XP thresholds</li>
                <li>Codes or a release schedule</li>
                <li>That coins are the blind-box currency</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell faq-preview">
        <SectionHeading
          eyebrow="Fast answers"
          title="The questions beginners ask first"
          description="Short answers, grounded in the approved research."
        />
        <div className="faq-list">
          <article className="faq-item"><h3>How do I earn coins?</h3><p>Tap your squishies.</p></article>
          <article className="faq-item"><h3>How do I earn XP?</h3><p>Trade with other players.</p></article>
          <article className="faq-item"><h3>What can I upgrade?</h3><p>Luck and squish powers are confirmed upgrade categories.</p></article>
          <Link className="text-link" href="/faq">Read every answer <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section shell">
        <div className="source-box">
          <p className="eyebrow">Source &amp; verification note</p>
          <h2>Facts first. Advice labeled.</h2>
          <p>
            Gameplay claims were last checked on {site.verifiedOn} against official Roblox API metadata and the creator&apos;s official Roblox experience description. The guide uses only the approved research facts below.
          </p>
          <div aria-label="Approved fact identifiers">
            {Array.from({ length: 8 }, (_, index) => (
              <code key={index}>fact-{String(index + 1).padStart(3, "0")}</code>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
