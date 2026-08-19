import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/GuideParts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Fact-checked answers to beginner questions about Tap Squishies and Trade coins, XP, blind boxes, upgrades, and collection size.",
  alternates: { canonical: "/faq/" },
};

const faqs = [
  { q: "How do you earn coins?", a: "Tap your squishies. This is confirmed by the creator description." },
  { q: "How do you earn XP?", a: "Trade with other players. Exact XP thresholds are not claimed by this guide." },
  { q: "How do you find rare squishies?", a: "The creator description confirms that players can open blind boxes to find rare squishies." },
  { q: "What can you upgrade?", a: "Luck and squish powers are confirmed upgrade categories. This guide does not claim their prices or an optimal order." },
  { q: "How many squishies are there?", a: "The creator description says there are more than 80, including Dumplings, Needoh, and Keycaps." },
  { q: "Do coins buy blind boxes?", a: "This guide does not make that claim. Coins and blind boxes are both confirmed, but their exact payment relationship is not included in the approved facts." },
  { q: "Does this guide publish codes, rates, or values?", a: "No. Those claims are not in the approved research facts, so this site does not present them as official." },
  { q: "Is this the official game site?", a: `No. ${site.name} is an independent fan-made guide and is not affiliated with or endorsed by Roblox or ${site.developer}.` },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="page-intro shell">
        <div className="page-intro-copy">
          <p className="eyebrow">Frequently asked questions</p>
          <h1>Short answers. Clear boundaries.</h1>
          <p className="lede">
            Start with the verified basics, then see exactly where this independent guide stops rather than filling gaps with guesses.
          </p>
        </div>
        <div className="intro-sticker" aria-hidden="true"><span>05</span><small>guide</small></div>
      </section>

      <section className="section section-tinted">
        <div className="shell faq-preview">
          <SectionHeading
            eyebrow="Beginner FAQ"
            title="The facts most players need first"
            description="Answers reflect the research approval completed on August 19, 2026."
          />
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.q}>
                <h2>{faq.q}</h2>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="source-box">
          <p className="eyebrow">Sources &amp; last verification</p>
          <h2>Checked against first-party Roblox information.</h2>
          <p>
            Facts were last verified on {site.verifiedOn}. Identity details were checked through official Roblox API metadata. Gameplay descriptions were checked against the creator&apos;s official Roblox experience listing. Approved fact IDs: fact-001 through fact-008.
          </p>
          <p>
            This page does not treat strategy advice as a mechanic. Where the approved research does not support a detail, the answer stays open.
          </p>
          <a className="text-link on-dark" href={site.officialGameUrl} rel="noreferrer">Open the official Roblox experience <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading eyebrow="Keep learning" title="Return to the guide that fits your next question" />
        <div className="route-grid">
          <Link className="route-card" href="/beginner-guide"><span className="route-index">Start</span><h3>Beginner guide</h3><p>Follow a clearly labeled first-session strategy.</p><strong>Start the route →</strong></Link>
          <Link className="route-card" href="/gameplay"><span className="route-index">Understand</span><h3>Gameplay guide</h3><p>See the verified systems in one place.</p><strong>Map the loop →</strong></Link>
          <Link className="route-card" href="/progression"><span className="route-index">Grow</span><h3>Progression guide</h3><p>Separate collection, XP, and upgrade goals.</p><strong>Plan progress →</strong></Link>
        </div>
      </section>
    </>
  );
}
