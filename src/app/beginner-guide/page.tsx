import type { Metadata } from "next";
import { AdviceNote, FactNote, NextGuide, SectionHeading } from "@/components/GuideParts";

export const metadata: Metadata = {
  title: "Beginner Guide",
  description: "A clear first-session route for Tap Squishies and Trade, with verified facts separated from strategy suggestions.",
  alternates: { canonical: "/beginner-guide/" },
};

export default function BeginnerGuidePage() {
  return (
    <>
      <section className="page-intro shell">
        <div className="page-intro-copy">
          <p className="eyebrow">Beginner guide</p>
          <h1>Your first session, without the guesswork.</h1>
          <p className="lede">
            Learn the confirmed systems first, then use a simple strategy to explore them at your own pace. No invented odds, costs, or controls.
          </p>
        </div>
        <div className="intro-sticker" aria-hidden="true"><span>01</span><small>guide</small></div>
      </section>

      <section className="section section-tinted">
        <div className="shell content-grid">
          <div>
            <SectionHeading
              eyebrow="First-session route"
              title="A four-part learning plan"
              description="Every numbered action below is a strategy suggestion. It organizes confirmed facts; it is not an official tutorial or required sequence."
            />
            <ol className="timeline">
              <li><div><span className="label">Strategy suggestion</span><h3>Confirm the tap-to-coin connection</h3><p>Tap squishies and watch how coins respond. Tapping squishies to earn coins is a verified mechanic.</p></div></li>
              <li><div><span className="label">Strategy suggestion</span><h3>Explore a blind box</h3><p>Use the blind-box system when you encounter it, then inspect the squishy you find. Blind boxes finding rare squishies is verified.</p></div></li>
              <li><div><span className="label">Strategy suggestion</span><h3>Separate your progression paths</h3><p>Notice that trading is the confirmed XP path, while luck and squish powers are confirmed upgrade categories.</p></div></li>
              <li><div><span className="label">Strategy suggestion</span><h3>Set a learning goal</h3><p>Choose one focus—tapping, a blind box, trading, or comparing visible upgrades—rather than trying to master everything at once.</p></div></li>
            </ol>
          </div>
          <div className="side-stack">
            <FactNote>Tapping squishies earns coins. Trading with players earns XP.</FactNote>
            <AdviceNote>Use what your current game screen shows. This guide does not assume controls, costs, unlock timing, or XP thresholds.</AdviceNote>
          </div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading
          eyebrow="Beginner checkpoints"
          title="What you should understand before moving on"
        />
        <div className="card-grid three">
          <article className="step-card"><span className="card-number">A</span><h3>Coins</h3><p>You can explain that tapping squishies earns coins without assuming what those coins purchase.</p></article>
          <article className="step-card"><span className="card-number">B</span><h3>Collection</h3><p>You know blind boxes can reveal rare squishies and the creator description says there are more than 80 to collect.</p></article>
          <article className="step-card"><span className="card-number">C</span><h3>Progress</h3><p>You can distinguish trading for XP from the luck and squish-power upgrade categories.</p></article>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="shell content-grid reverse">
          <AdviceNote>After learning the basics, compare only the upgrade choices and information visible in your own session. No single upgrade order is presented here as official or optimal.</AdviceNote>
          <div>
            <SectionHeading eyebrow="Ready for more" title="Turn the basics into a repeatable session" />
            <p className="lede">The gameplay guide maps the confirmed systems while keeping the relationship between coins and blind boxes explicitly unclaimed.</p>
          </div>
        </div>
      </section>

      <NextGuide href="/gameplay" kicker="Next: core loop" title="See how the verified systems fit together" description="Move from first-session orientation to a clean map of tapping, boxes, trading, upgrades, and collection." />
    </>
  );
}
