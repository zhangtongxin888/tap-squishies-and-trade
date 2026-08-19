import type { Metadata } from "next";
import { AdviceNote, FactNote, NextGuide, SectionHeading } from "@/components/GuideParts";

export const metadata: Metadata = {
  title: "Progression Guide",
  description: "Plan collection, trading XP, luck, and squish-power progression with clear fact and strategy labels.",
  alternates: { canonical: "/progression/" },
};

export default function ProgressionPage() {
  return (
    <>
      <section className="page-intro shell">
        <div className="page-intro-copy">
          <p className="eyebrow">Progression guide</p>
          <h1>Grow with two paths in view.</h1>
          <p className="lede">
            Keep collection and player progression distinct: blind boxes support discovery, trading earns XP, and luck plus squish powers are the confirmed upgrade categories.
          </p>
        </div>
        <div className="intro-sticker" aria-hidden="true"><span>03</span><small>guide</small></div>
      </section>

      <section className="section section-tinted">
        <div className="shell">
          <SectionHeading
            eyebrow="Two-track view"
            title="Collection on one side, progression on the other"
            description="This grouping is a guide structure, not an official in-game classification."
          />
          <div className="two-track">
            <article className="track-card">
              <span className="track-icon" aria-hidden="true">80+</span>
              <h2>Collection track</h2>
              <p>Blind boxes can reveal rare squishies. The creator description says there are more than 80 squishies, including Dumplings, Needoh, and Keycaps.</p>
              <ul><li>Confirmed: blind boxes and rare squishies</li><li>Confirmed: a collection of more than 80</li><li>Not claimed: complete list, odds, or tiers</li></ul>
            </article>
            <article className="track-card">
              <span className="track-icon" aria-hidden="true">XP</span>
              <h2>Growth track</h2>
              <p>Trading with other players earns XP. Luck and squish powers are confirmed upgrade categories.</p>
              <ul><li>Confirmed: trading earns XP</li><li>Confirmed: two named upgrade categories</li><li>Not claimed: prices, levels, or thresholds</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="content-grid">
          <div>
            <SectionHeading
              eyebrow="Advanced route"
              title="A progression plan that adapts to your session"
              description="All four steps are strategy suggestions, not documented rules or an optimal build."
            />
            <ol className="timeline">
              <li><div><span className="label">Strategy suggestion</span><h3>Pick one session focus</h3><p>Choose collecting, exploring trades, or reviewing upgrades so your next decision stays easy to evaluate.</p></div></li>
              <li><div><span className="label">Strategy suggestion</span><h3>Compare what is visible now</h3><p>Use the current in-game information for upgrade details rather than relying on assumed prices or old claims.</p></div></li>
              <li><div><span className="label">Strategy suggestion</span><h3>Keep XP and coins separate</h3><p>Remember only the verified relationships: tapping earns coins and trading earns XP.</p></div></li>
              <li><div><span className="label">Strategy suggestion</span><h3>Review before repeating</h3><p>At the end of a session, decide whether collecting, XP, luck, or squish powers is the clearest next focus.</p></div></li>
            </ol>
          </div>
          <div className="side-stack">
            <FactNote>The creator description names Dumplings, Needoh, and Keycaps as examples within a collection of more than 80 squishies.</FactNote>
            <AdviceNote>Do not treat an outside tier list, value list, or fixed upgrade order as official unless it is separately verified.</AdviceNote>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="shell">
          <SectionHeading eyebrow="Progress checks" title="Three questions before your next move" />
          <div className="card-grid three">
            <article className="fact-card"><span className="card-number">01</span><h3>What is my focus?</h3><p><strong>Strategy suggestion:</strong> name one goal—collection, XP, luck, or squish powers.</p></article>
            <article className="fact-card"><span className="card-number">02</span><h3>What is verified?</h3><p>Separate the confirmed mechanics from any unverified price, value, rate, or threshold.</p></article>
            <article className="fact-card"><span className="card-number">03</span><h3>What does the game show?</h3><p><strong>Strategy suggestion:</strong> make the final choice from the current details visible in your session.</p></article>
          </div>
        </div>
      </section>

      <NextGuide href="/mistakes" kicker="Next: common mistakes" title="Avoid assumptions that blur your plan" description="Check the most tempting unsupported claims before they become part of your strategy." />
    </>
  );
}
