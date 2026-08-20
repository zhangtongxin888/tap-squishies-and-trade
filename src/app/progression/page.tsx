import { AdviceNote, NextGuide, ObservationNote, PageHero, SectionHeading } from "@/components/GuideParts";
import { revealTape } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Progression & Collection Index",
  "Read the Tap Squishies and Trade collection Index, observed reveal labels, Claim XP control, and branching upgrade map.",
  "/progression/",
);

export default function ProgressionPage() {
  return (
    <>
      <PageHero
        overline="Progression guide · collector file"
        title="Turn every reveal into a readable record."
        description="The Index is your collection desk. Pair it with the upgrade map, but keep reveal-screen percentages and old prices inside their observed context."
        index="03"
      />

      <section className="section paper-section" id="collector-index">
        <div className="shell index-layout">
          <div className="index-console" aria-hidden="true">
            <div className="index-tabs"><span>INDEX</span><i>5 / 9</i></div>
            <div className="index-grid">
              {Array.from({ length: 9 }, (_, i) => <span className={i < 5 ? "found" : "missing"} key={i}>{i < 5 ? "●" : "?"}</span>)}
            </div>
            <div className="index-detail"><strong>SELECTED SQUISHY</strong><p>detail + collection progress</p><button type="button" tabIndex={-1}>CLAIM XP</button></div>
          </div>
          <div>
            <SectionHeading eyebrow="Collector Index" title="Three panels worth learning." />
            <ol className="index-notes">
              <li><span>GRID</span><div><h3>Collection families</h3><p>Observed grids include Classic Keycap Box, Gummy Bear Box and Popsicle Jelly Box collections.</p><small>TSQ-140 · TSQ-153 · TSQ-170</small></div></li>
              <li><span>DETAIL</span><div><h3>Selected squishy</h3><p>The Index can place a chosen detail beside its collection grid and progress controls. Purple Gummy Bear and Heart Eyes Dumpling appear in observed details.</p><small>TSQ-139 · TSQ-153 · TSQ-165</small></div></li>
              <li><span>PROGRESS</span><div><h3>Visible completion</h3><p>One Popsicle Jelly Box screen shows nine entries, 5/9 progress and a Claim XP control.</p><small>TSQ-170</small></div></li>
            </ol>
            <AdviceNote>Use the Index to identify what the current interface records. Do not infer a reward formula from one progress screen.</AdviceNote>
          </div>
        </div>
      </section>

      <section className="section reveal-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Reveal tape · approximate storyboard frames"
            title="Names and percentages that appeared on screen."
            description="These are sixteen observed reveal labels from August 11 and August 15 footage. They are not presented as a complete, current drop-rate table."
          />
          <div className="reveal-tape">
            {revealTape.map((item, index) => (
              <article key={item.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.name}</h3>
                <strong>{item.shown}</strong>
                <small>{item.id} · observed label</small>
              </article>
            ))}
          </div>
          <ObservationNote>Read every percentage above as “displayed on one reveal screen.” The approved evidence does not establish permanent odds, a complete rarity table, pity rules or future values.</ObservationNote>
        </div>
      </section>

      <section className="section shell upgrade-section">
        <div>
          <SectionHeading eyebrow="Upgrade map" title="Branch first. Buy second." description="Footage shows a branching map of hexagonal nodes and a Buy confirmation. Another observed view contains distinct yellow, purple, green and red paths." />
          <div className="upgrade-map" aria-hidden="true">
            <span className="node start">START</span>
            <span className="path path-yellow" /><span className="node n1">Y</span>
            <span className="path path-purple" /><span className="node n2">P</span>
            <span className="path path-green" /><span className="node n3">G</span>
            <span className="path path-red" /><span className="node n4">R</span>
          </div>
          <p className="fact-run">TSQ-137 · TSQ-166</p>
        </div>
        <div className="upgrade-rules">
          <h3>Before choosing a node</h3>
          <ol>
            <li><span>1</span>Read the current node text.</li>
            <li><span>2</span>Keep Luck and Squish Powers as separate named attributes.</li>
            <li><span>3</span>Confirm the visible cost and effect in your session.</li>
            <li><span>4</span>Treat outside “best build” claims as unverified here.</li>
          </ol>
        </div>
      </section>

      <section className="section archive-section">
        <div className="shell archive-grid">
          <div><p className="eyebrow">Archive note</p><h2>Young game, changing screens.</h2></div>
          <div><p>The experience was created on July 5, 2026. At the research snapshot, Roblox returned August 18, 2026 as its latest precise update time. That recent timeline is another reason to re-check values in the live interface.</p><p className="fact-run">TSQ-007 · TSQ-008</p></div>
        </div>
      </section>

      <NextGuide href="/mistakes" kicker="Next file · 04" title="Separate screen evidence from assumptions" description="Review trade confirmation, locks, box progress, Server Luck and price snapshots before acting on them." />
    </>
  );
}
