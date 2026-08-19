import type { Metadata } from "next";
import { AdviceNote, FactNote, NextGuide, SectionHeading } from "@/components/GuideParts";

export const metadata: Metadata = {
  title: "Gameplay Guide",
  description: "Understand the verified Tap Squishies and Trade core loop without invented costs, odds, or controls.",
  alternates: { canonical: "/gameplay/" },
};

export default function GameplayPage() {
  return (
    <>
      <section className="page-intro shell">
        <div className="page-intro-copy">
          <p className="eyebrow">Gameplay guide</p>
          <h1>A clean map of the core systems.</h1>
          <p className="lede">
            Five confirmed parts shape the experience. This guide connects them without claiming a mandatory order or an undocumented currency relationship.
          </p>
        </div>
        <div className="intro-sticker" aria-hidden="true"><span>02</span><small>guide</small></div>
      </section>

      <section className="section section-tinted">
        <div className="shell loop-grid">
          <div>
            <SectionHeading eyebrow="Verified mechanics" title="What the creator description confirms" />
            <FactNote>The game is officially named Tap Squishies and Trade and was created by Mango Matcha Studio.</FactNote>
          </div>
          <ol className="loop-list">
            <li><div><strong>Tap squishies</strong><span>Tapping squishies earns coins.</span></div></li>
            <li><div><strong>Earn coins</strong><span>Coins are confirmed; their exact uses are not claimed here.</span></div></li>
            <li><div><strong>Open blind boxes</strong><span>Blind boxes can reveal rare squishies.</span></div></li>
            <li><div><strong>Trade</strong><span>Trading with other players earns XP.</span></div></li>
            <li><div><strong>Upgrade and collect</strong><span>Luck and squish powers are upgrade categories, and the creator description says the collection exceeds 80 squishies.</span></div></li>
          </ol>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading
          eyebrow="Session rhythm"
          title="A practical way to explore the loop"
          description="The sequence below is strategy advice. It is not a claim about required progression."
        />
        <div className="card-grid">
          <article className="step-card"><span className="card-number">01</span><span className="label">Strategy suggestion</span><h3>Start with tapping</h3><p>Use the confirmed tap-to-coin action as your easiest reference point.</p></article>
          <article className="step-card"><span className="card-number">02</span><span className="label">Strategy suggestion</span><h3>Study each result</h3><p>When exploring blind boxes, pay attention to the squishies you receive without assuming published rarity odds.</p></article>
          <article className="step-card"><span className="card-number">03</span><span className="label">Strategy suggestion</span><h3>Try the XP path</h3><p>Explore trading when you are ready, remembering that trading is the confirmed source of XP.</p></article>
          <article className="step-card"><span className="card-number">04</span><span className="label">Strategy suggestion</span><h3>Compare visible choices</h3><p>Review the luck and squish-power upgrade information displayed in your session before choosing.</p></article>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="shell truth-grid">
          <article className="truth-panel verified">
            <h2>Safe to rely on</h2>
            <ul className="check-list">
              <li>Tap squishies to earn coins</li>
              <li>Open blind boxes to find rare squishies</li>
              <li>Trade with players to earn XP</li>
              <li>Luck and squish powers are upgrade categories</li>
            </ul>
          </article>
          <article className="truth-panel unconfirmed">
            <h2>Keep open</h2>
            <ul className="dash-list">
              <li>The exact uses of coins</li>
              <li>Blind-box prices and rarity odds</li>
              <li>Controls and unlock timing</li>
              <li>Upgrade costs and XP thresholds</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section shell content-grid reverse">
        <AdviceNote>Treat the in-game interface as the current source for costs, controls, and unlocks. Those details are intentionally not filled in by this guide.</AdviceNote>
        <div>
          <SectionHeading eyebrow="Build from the loop" title="Progress with separate goals" />
          <p className="lede">Next, split your plan into collecting, trading for XP, and comparing the two confirmed upgrade categories.</p>
        </div>
      </section>

      <NextGuide href="/progression" kicker="Next: progression" title="Build a flexible route forward" description="Use the confirmed systems as anchors while leaving undocumented prices and thresholds open." />
    </>
  );
}
