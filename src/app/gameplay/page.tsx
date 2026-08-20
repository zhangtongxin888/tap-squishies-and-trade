import { AdviceNote, NextGuide, ObservationNote, PageHero, SectionHeading } from "@/components/GuideParts";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Gameplay Guide",
  "Understand Tap Squishies and Trade fidgeting, shop and blind-box screens, the plaza, trade stations, and confirmation flow.",
  "/gameplay/",
);

const tradeStates = [
  { n: "01", title: "Wait for a partner", copy: "A station can show one occupied panel while the other reads Waiting.", ids: "TSQ-124" },
  { n: "02", title: "Choose an item", copy: "The picker shows squishy thumbnails; selected items can move into your offer beside a Drop One control.", ids: "TSQ-125 · TSQ-126" },
  { n: "03", title: "Read both offers", copy: "Each participant has a separate item panel, while offered squishies can also appear as models on the table.", ids: "TSQ-127 · TSQ-163" },
  { n: "04", title: "Use the action zones", copy: "Observed stations use a red X, blue plus and green check. Treat the current labels as authoritative.", ids: "TSQ-162" },
];

export default function GameplayPage() {
  return (
    <>
      <PageHero
        overline="Gameplay guide · the visible loop"
        title="From fidget control to trade table."
        description="The game mixes tactile tapping, themed shop shelves, blind-box reveals and two-player trading. This page maps the screens that connect them."
        index="02"
      />

      <section className="section paper-section">
        <div className="shell loop-console">
          <div>
            <SectionHeading eyebrow="Core loop" title="A loop you can read at a glance." description="Only the tap-to-coins, box-to-rare-squishy and trade-to-XP relationships are confirmed as mechanics. The connecting order is a guide structure." />
          </div>
          <ol>
            <li><span>01</span><strong>Fidget a squishy</strong><p>Tapping your squishies earns coins.</p></li>
            <li><span>02</span><strong>Read the shop button</strong><p>Observed panels use coins or a purple currency depending on the collection shown.</p></li>
            <li><span>03</span><strong>Pick a box</strong><p>The observed box screen has three positions and an Open control.</p></li>
            <li><span>04</span><strong>Check the Index</strong><p>Use collection grids and selected-item details as visible progress records.</p></li>
            <li><span>05</span><strong>Approach a trade</strong><p>Trading with another player can earn XP; no value formula is claimed here.</p></li>
          </ol>
        </div>
      </section>

      <section className="section shell shop-floor">
        <div className="shop-map" aria-hidden="true">
          <span className="fountain">PLAZA<br />FOUNTAIN</span>
          <span className="station s1">TRADE</span><span className="station s2">TRADE</span><span className="station s3">TRADE</span>
          <span className="shop candy">CANDY</span><span className="shop jelly">JELLY</span><span className="shop keycap">KEYCAP</span>
        </div>
        <div>
          <SectionHeading eyebrow="World landmarks" title="Use the plaza like a menu." />
          <p>The observed main plaza places multiple trade stations around a central fountain. The Candy area uses pink ground, candy-shaped trees and striped archways, with a large CANDY storefront sign.</p>
          <p>Shop footage shows Gumdrop and Gummy Bear box groups, Cube Jelly and Splat Jelly collections, plus Classic, Cat and Triple Keycap collections. Buttons visibly use coin and purple-currency labels—but the guide does not generalize a permanent price system.</p>
          <p className="fact-run">TSQ-132–138 · TSQ-143–144</p>
        </div>
      </section>

      <section className="section trade-section">
        <div className="shell">
          <SectionHeading eyebrow="At the trade table" title="Four states to inspect before you confirm." description="The table is the clearest place to slow down. Make sure the two offer panels still match what you intend to exchange." />
          <div className="trade-board" aria-hidden="true">
            <div className="trade-player"><span>YOU</span><div className="offer-shape cube" /><small>your offer panel</small></div>
            <div className="trade-controls"><button type="button" tabIndex={-1}>×</button><button type="button" tabIndex={-1}>＋</button><button type="button" tabIndex={-1}>✓</button></div>
            <div className="trade-player"><span>PARTNER</span><div className="offer-shape pop" /><small>their offer panel</small></div>
          </div>
          <div className="trade-state-list">
            {tradeStates.map((state) => <article key={state.n}><span>{state.n}</span><div><h3>{state.title}</h3><p>{state.copy}</p><small>{state.ids}</small></div></article>)}
          </div>
          <ObservationNote>Black cube-like, popsicle-shaped, and other squishy forms are shown as both offer icons and physical table models. A crowd of identical yellow-and-blue models also appears near a trade pad. Those visuals do not establish value or rarity. TSQ-129 · TSQ-164 · TSQ-183</ObservationNote>
        </div>
      </section>

      <section className="section shell gameplay-boundary">
        <div>
          <p className="eyebrow">Current limitations</p>
          <h2>No private-server shortcut.</h2>
          <p>At the August 20 research snapshot, players could not create VIP/private servers for this experience. That is a dated availability check, not a permanent promise. TSQ-019</p>
        </div>
        <AdviceNote>Use a public session as the current default assumption. Re-check the official page if private-server availability matters to your plan.</AdviceNote>
      </section>

      <NextGuide href="/progression" kicker="Next file · 03" title="Decode the collector systems" description="Move from the visible loop into collection grids, reveal labels, XP claims and the branching upgrade map." />
    </>
  );
}
