import { AdviceNote, FactNote, NextGuide, ObservationNote, PageHero, SectionHeading } from "@/components/GuideParts";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Beginner Guide",
  "A practical first 10 minutes in Tap Squishies and Trade: read the HUD, fidget, inspect shops and boxes, use the Index, and approach trading carefully.",
  "/beginner-guide/",
);

const firstTen = [
  {
    time: "00–02 min",
    title: "Orient before you spend",
    copy: "Find your equipped squishy, the Fidget control and the six-slot item bar. The HUD can show coins, XP, a multiplier and Invite Friends.",
    ids: "TSQ-123 · TSQ-161",
  },
  {
    time: "02–04 min",
    title: "Test the fidget loop",
    copy: "Tap the visible Fidget control once and watch the result. The official description confirms that tapping squishies earns coins.",
    ids: "TSQ-028",
  },
  {
    time: "04–06 min",
    title: "Survey, do not speed-buy",
    copy: "Look for shops and box collections, then note which currency button is shown. Different shop screens have displayed different currency types.",
    ids: "Guide move · screen-first",
  },
  {
    time: "06–08 min",
    title: "Open and cross-check",
    copy: "Blind boxes are a confirmed way to find rare squishies. After a reveal, use the Index or Backpack to inspect what the interface records.",
    ids: "TSQ-029 · TSQ-159",
  },
  {
    time: "08–10 min",
    title: "Tour progression safely",
    copy: "Locate the upgrade map and a trade station. Luck and Squish Powers are upgrade categories; trading with players can earn XP.",
    ids: "TSQ-030 · TSQ-031 · TSQ-032",
  },
];

const visualChecks = [
  { icon: "◎", title: "Fidget", copy: "Footage shows several equipped shapes: a purple splat, a gray rounded toy, a torso-sized three-key keycap, and a blue cat-like box." },
  { icon: "▦", title: "Backpack", copy: "One observed screen places a selected Yellow Dumpling beside Sort: Rarity, Sell and an item grid." },
  { icon: "⌁", title: "Effects", copy: "A three-key keycap fidget produces floating coin and colored-orb effects in the footage; that visual does not establish an item stat." },
  { icon: "☺", title: "Social", copy: "Footage also shows a THANK YOU reaction bubble and a numbered radial emote wheel." },
];

export default function BeginnerGuidePage() {
  return (
    <>
      <PageHero
        overline="Beginner guide · first 10 minutes"
        title="Read the room before you chase the rare."
        description="This route is a learning order, not an official tutorial. Use the current game screen for controls, costs and unlocks."
        index="01"
      >
        <div className="hero-mini-stats"><span>30-player listed capacity</span><span>R15 avatar setup</span><span>5 platform families listed</span></div>
      </PageHero>

      <section className="section paper-section">
        <div className="shell editorial-grid">
          <div>
            <SectionHeading
              eyebrow="The first ten"
              title="Five checkpoints, one calm lap."
              description="The times are a suggested pace. They do not claim that every screen unlocks in this order."
            />
            <ol className="minute-track">
              {firstTen.map((step) => (
                <li key={step.time}>
                  <time>{step.time}</time>
                  <div><h3>{step.title}</h3><p>{step.copy}</p><small>{step.ids}</small></div>
                </li>
              ))}
            </ol>
          </div>
          <div className="side-stack sticky-stack">
            <FactNote>At the research snapshot the universe was active, public and not archived; Roblox marked it as not content restricted. TSQ-005 · TSQ-023</FactNote>
            <AdviceNote>Spend the first lap identifying what each control shows. A visible price, lock or progress bar is context—not permission to invent the rule behind it.</AdviceNote>
          </div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading eyebrow="What to watch" title="Four interface clues worth recognizing." />
        <div className="control-deck">
          {visualChecks.map((item) => (
            <article key={item.title}><span aria-hidden="true">{item.icon}</span><h3>{item.title}</h3><p>{item.copy}</p></article>
          ))}
        </div>
        <ObservationNote>
          These descriptions come from approximate storyboard frames in recent gameplay footage. They confirm only what appeared on screen, not permanent UI, power, value or unlock rules. TSQ-155 · TSQ-157–160 · TSQ-167–169
        </ObservationNote>
      </section>

      <section className="section lime-section">
        <div className="shell split-callout">
          <div>
            <p className="eyebrow">Reward sightings</p>
            <h2>Observe the popup. Do not memorize it as a rate.</h2>
          </div>
          <div className="popup-samples">
            <div><strong>+300</strong><span>coins shown after one purple-splat fidget</span><small>TSQ-142</small></div>
            <div><strong>CLAIMED</strong><span>Quest reward message shown after an interaction</span><small>TSQ-154</small></div>
            <div><strong>+1</strong><span>timed Server Luck status visible in one HUD</span><small>TSQ-131</small></div>
          </div>
          <p className="snapshot-warning">Observed screens only. Reward amounts, duration and triggers may differ; the footage does not establish guaranteed values.</p>
        </div>
      </section>

      <section className="section shell platform-desk">
        <div>
          <p className="eyebrow">Before you join</p>
          <h2>A quick compatibility note.</h2>
        </div>
        <div className="platform-list" aria-label="Listed operating system families">
          {['Windows', 'macOS', 'iOS', 'Android', 'Meta Quest'].map((platform) => <span key={platform}>{platform}</span>)}
        </div>
        <p>Snapshot wording matters: the official experience page listed these five operating-system families when checked. Roblox also reported MorphToR15 and a listed server capacity of 30. TSQ-020 · TSQ-021 · TSQ-121</p>
      </section>

      <NextGuide href="/gameplay" kicker="Next file · 02" title="Step behind the arcade glass" description="Map the plaza, shop shelves, blind-box screen and trade-table states without guessing hidden rules." />
    </>
  );
}
