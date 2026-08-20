import { AdviceNote, NextGuide, ObservationNote, PageHero, SectionHeading } from "@/components/GuideParts";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Mistakes & Trade Safety",
  "Avoid Tap Squishies and Trade mistakes around trade confirmation, duplicate labels, box progress, locked content, Server Luck, and observed prices.",
  "/mistakes/",
);

const mistakes = [
  { id: "TSQ-125", title: "Mixing up two percentages", fact: "The observed trade picker shows percentage labels and duplicate-count badges.", move: "Read the label beside each number; do not treat every number as value or rarity." },
  { id: "TSQ-126", title: "Assuming selected means final", fact: "A selected item appears in the offer panel and a Drop One control becomes visible.", move: "Review the offer panel again after every add or removal." },
  { id: "TSQ-130", title: "Rushing the last state", fact: "When both panels show ACCEPT, one observed interface enters a HOLD FOR 3 countdown.", move: "Use that visible pause to compare both sides one final time." },
  { id: "TSQ-135", title: "Calling progress an item rate", fact: "One opening shows an on-box percentage progress value.", move: "Keep progress and reveal-screen percentages separate unless the current UI explicitly links them." },
  { id: "TSQ-141 · TSQ-156", title: "Inventing unlock requirements", fact: "Footage shows a locked Triple Keycap detail and a Candy Island portal with a lock icon.", move: "A lock proves only that the screen was locked; it does not reveal the requirement." },
  { id: "TSQ-171 · TSQ-172", title: "Treating Server Luck as fully documented", fact: "Observed screens show +0 to +1 progression and a banner saying a player bought +1 Server Luck.", move: "Do not invent price, duration, stacking or a probability increase." },
  { id: "TSQ-173", title: "Freezing an old shop price", fact: "Around 01:43 in August 15 footage, Cube Jelly displays 850 coins and Splat Jelly displays 65 purple currency.", move: "Treat both values as footage snapshots and check today’s screen before spending." },
  { id: "TSQ-128 · TSQ-182", title: "Turning two rewards into a formula", fact: "Two trades show +158 and +348 XP; one Spider Guy Popsicle fidget is followed by +50 coins.", move: "Different observations are not enough to prove a calculation or guaranteed payout." },
  { id: "TSQ-019 · TSQ-069 · TSQ-070", title: "Turning absence into permanence", fact: "At the API snapshot there were no creatable VIP/private servers, badge records or game-pass records.", move: "Say ‘none returned at the snapshot,’ then re-check Roblox for current availability." },
];

export default function MistakesPage() {
  return (
    <>
      <PageHero
        overline="Mistakes · trade safety"
        title="What the screens do—and do not—confirm."
        description="Most bad decisions start when a visible label gets promoted into a permanent rule. Keep the observation, drop the assumption."
        index="04"
      />

      <section className="section warning-section">
        <div className="shell safe-trade">
          <div>
            <SectionHeading eyebrow="Trade desk" title="Use a three-stop confirmation habit." />
            <div className="confirm-track">
              <article><span>ADD</span><h3>Inspect your side</h3><p>Confirm the item icon and duplicate count match what you meant to offer.</p></article>
              <article><span>COMPARE</span><h3>Read their side</h3><p>Keep the two participant panels distinct and compare the final visible contents.</p></article>
              <article><span>HOLD</span><h3>Use the countdown</h3><p>If the interface enters HOLD FOR 3, use the pause instead of treating it as decoration.</p></article>
            </div>
          </div>
          <AdviceNote>This is a safety habit, not an official value system. The approved facts confirm visible trade states, not fairness rules or item valuations.</AdviceNote>
        </div>
      </section>

      <section className="section shell mistake-list-section">
        <SectionHeading eyebrow="Nine misreads" title="Replace the shortcut with a safer sentence." description="Every row preserves the approved observation and states the smallest responsible action you can take from it." />
        <div className="mistake-ledger">
          {mistakes.map((mistake, index) => (
            <article key={mistake.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p className="ledger-ids">{mistake.id}</p><h3>{mistake.title}</h3></div>
              <p><strong>Observed:</strong> {mistake.fact}</p>
              <p><strong>Safer move:</strong> {mistake.move}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section trade-section">
        <div className="shell boundary-grid">
          <div><p className="eyebrow">The evidence boundary</p><h2>One frame is a clue, not a contract.</h2></div>
          <ObservationNote>All TSQ-123–183 video timestamps locate approximate storyboard frames. Screens can change, and a frame cannot establish hidden mechanics, permanent prices, future availability, fixed rewards or a complete probability table.</ObservationNote>
        </div>
      </section>

      <NextGuide href="/faq" kicker="Next file · 05" title="Check the technical details" description="Find the IDs, platform list, localization snapshot, server sample and source boundaries in one place." />
    </>
  );
}
