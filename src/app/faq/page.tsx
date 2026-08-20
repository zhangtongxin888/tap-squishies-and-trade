import Link from "next/link";
import { FactLedger, PageHero, SectionHeading } from "@/components/GuideParts";
import { faqFacts } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "FAQ & Source Notes",
  "Fact-checked answers about Tap Squishies and Trade IDs, servers, platforms, localization, coins, XP, boxes, upgrades, and research limits.",
  "/faq/",
);

const faqs = [
  { q: "How do I earn coins?", a: "The official description says tapping your squishies earns coins. Footage shows different coin popups after individual fidgets, so this guide does not claim a fixed reward." },
  { q: "How do I earn XP?", a: "The official description says trading with other players can earn XP. Two observed trades show different XP awards, so no fixed formula is claimed." },
  { q: "How do I find rare squishies?", a: "Opening blind boxes is a confirmed way to find rare squishies. Observed reveal percentages remain footage-specific labels, not a complete current rate table." },
  { q: "What can I upgrade?", a: "Luck and Squish Powers are named upgradeable progression attributes. Footage shows a branching, multi-color node map with a Buy confirmation, but this guide does not claim costs or an optimal route." },
  { q: "How large is the collection?", a: "At the research snapshot, the official description advertised more than 80 collectible squishies and named Dumplings, Needoh and Keycaps as examples." },
  { q: "What are the Universe and Place IDs?", a: "Universe ID 10454734391; root Place ID 85104270335777. Roblox listed one place in the universe at the snapshot." },
  { q: "Which platforms were listed?", a: "The official page listed Windows, macOS, iOS, Android and Meta Quest when checked." },
  { q: "Does the game have private servers, badges or passes?", a: "Snapshot only: players could not create VIP/private servers, and the official badge and game-pass endpoints returned zero records when checked. Re-check Roblox for current availability." },
  { q: "Is this official?", a: `${site.name} is an independent fan guide. The only official destination linked here is the Roblox experience page.` },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
};

export default function FaqPage() {
  return (
    <>
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        overline="FAQ · source desk"
        title="Short answers with their limits still attached."
        description="Use this page when you need a direct answer—or when a number needs a date before it can be trusted."
        index="05"
      />

      <section className="section paper-section">
        <div className="shell faq-layout">
          <aside className="faq-index">
            <p className="eyebrow">Quick index</p>
            {faqs.map((faq, index) => <a href={`#faq-${index + 1}`} key={faq.q}>{String(index + 1).padStart(2, "0")} {faq.q}</a>)}
          </aside>
          <div className="faq-stack">
            {faqs.map((faq, index) => (
              <article id={`faq-${index + 1}`} key={faq.q}>
                <span>{String(index + 1).padStart(2, "0")}</span><div><h2>{faq.q}</h2><p>{faq.a}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading eyebrow="Technical file" title="The facts behind the address bar." description="These are approved core facts, with dated wording wherever Roblox could change the answer." />
        <FactLedger title="FAQ fact ledger" notes={faqFacts} />
      </section>

      <section className="section archive-section">
        <div className="shell source-policy">
          <div><p className="eyebrow">Source policy</p><h2>Two evidence lanes. No guesswork between them.</h2></div>
          <div className="policy-lanes">
            <article><span>01</span><h3>Official Roblox data</h3><p>Identity, creator, listing details and dated API snapshots come from official Roblox endpoints or the official experience page.</p></article>
            <article><span>02</span><h3>Recent gameplay footage</h3><p>Video timestamps point to approximate storyboard frames. Those notes describe only visible UI, objects, labels and values.</p></article>
          </div>
          <div className="source-action">
            <Link className="button button-primary" href="/beginner-guide">Start the Beginner Guide</Link>
            <a className="quiet-link light" href={site.officialGameUrl} rel="noreferrer">Open the official Roblox page ↗</a>
          </div>
        </div>
      </section>
    </>
  );
}
