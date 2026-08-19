import type { Metadata } from "next";
import { AdviceNote, NextGuide, SectionHeading } from "@/components/GuideParts";

export const metadata: Metadata = {
  title: "Common Mistakes",
  description: "Avoid common Tap Squishies and Trade guide assumptions about XP, coins, boxes, rarity, values, and upgrades.",
  alternates: { canonical: "/mistakes/" },
};

const mistakes = [
  { title: "Ignoring the XP path", text: "Trading with other players is the confirmed way to earn XP. Strategy suggestion: include trading in your learning plan when you feel ready." },
  { title: "Linking coins to boxes without proof", text: "Tapping earns coins and blind boxes reveal rare squishies, but this guide does not claim that coins purchase blind boxes." },
  { title: "Treating rarity odds as official", text: "Blind boxes and rare squishies are confirmed. Exact odds are not included in the approved research, so this guide does not publish them." },
  { title: "Following an assumed upgrade order", text: "Luck and squish powers are confirmed categories. Strategy suggestion: compare the current choices shown in your session." },
  { title: "Trusting a value list as fact", text: "Trading for XP is confirmed. Specific item values are not part of the approved facts and are not presented as official here." },
  { title: "Expecting exact XP thresholds", text: "Trading earns XP, but this guide does not claim exact thresholds, levels, or unlock timing." },
];

export default function MistakesPage() {
  return (
    <>
      <section className="page-intro shell">
        <div className="page-intro-copy">
          <p className="eyebrow">Common mistakes</p>
          <h1>Keep assumptions out of your plan.</h1>
          <p className="lede">
            The easiest mistakes happen when a confirmed system gets mixed with an unconfirmed price, rate, value, or rule. Use this page as a quick fact boundary.
          </p>
        </div>
        <div className="intro-sticker" aria-hidden="true"><span>04</span><small>guide</small></div>
      </section>

      <section className="section section-tinted">
        <div className="shell">
          <SectionHeading eyebrow="Six checks" title="Common guide mistakes to avoid" />
          <div className="mistake-grid">
            {mistakes.map((mistake, index) => (
              <article className="mistake-card" key={mistake.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{mistake.title}</h3><p>{mistake.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell content-grid">
        <div>
          <SectionHeading
            eyebrow="Before you act"
            title="Use a three-question pause"
            description="This is general strategy advice, not a game mechanic or trading rule."
          />
          <div className="card-grid three">
            <article className="step-card"><span className="card-number">1</span><h3>Is it verified?</h3><p>Look for a clear source before treating a rate, value, cost, code, or rule as fact.</p></article>
            <article className="step-card"><span className="card-number">2</span><h3>Is it current?</h3><p>Use the information visible in your present game session for choices that can change.</p></article>
            <article className="step-card"><span className="card-number">3</span><h3>Is it labeled?</h3><p>Separate a writer&apos;s strategy suggestion from a documented mechanic.</p></article>
          </div>
        </div>
        <AdviceNote>For any player-to-player exchange, slow down and review the current in-game information yourself. This is general caution, not a claim about the game&apos;s trading rules.</AdviceNote>
      </section>

      <section className="section section-tinted">
        <div className="shell content-grid reverse">
          <div className="source-box">
            <p className="eyebrow">Editorial rule</p>
            <h2>No guess becomes a mechanic.</h2>
            <p>This site omits unsupported codes, rates, values, prices, thresholds, controls, and trading rules. A missing detail stays open until it can be verified.</p>
          </div>
          <div>
            <SectionHeading eyebrow="When details are missing" title="Let the uncertainty stay visible" />
            <p className="lede">A useful guide can still explain the confirmed loop without filling every gap. The FAQ makes those boundaries easy to scan.</p>
          </div>
        </div>
      </section>

      <NextGuide href="/faq" kicker="Next: FAQ" title="Get short answers with clear limits" description="Review the verified basics, source note, and the questions this guide intentionally leaves open." />
    </>
  );
}
