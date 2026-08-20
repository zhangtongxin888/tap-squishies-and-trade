import Link from "next/link";
import type { ReactNode } from "react";
import type { FieldNote } from "@/lib/content";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function AdviceNote({ children }: { children: ReactNode }) {
  return (
    <aside className="advice-note" aria-label="Strategy suggestion">
      <strong>Guide move · not a game rule</strong>
      <p>{children}</p>
    </aside>
  );
}

export function FactNote({ children }: { children: ReactNode }) {
  return (
    <aside className="fact-note" aria-label="Verified fact">
      <strong>Verified fact</strong>
      <p>{children}</p>
    </aside>
  );
}

export function ObservationNote({ children }: { children: ReactNode }) {
  return (
    <aside className="observation-note" aria-label="Observed in approximate storyboard footage">
      <strong>Storyboard observation</strong>
      <p>{children}</p>
    </aside>
  );
}

export function FactLedger({
  title,
  notes,
}: {
  title: string;
  notes: FieldNote[];
}) {
  return (
    <div className="fact-ledger">
      <div className="ledger-title">
        <span aria-hidden="true">●</span>
        <h3>{title}</h3>
        <small>{notes.reduce((total, note) => total + note.ids.length, 0)} mapped facts</small>
      </div>
      <div className="ledger-rows">
        {notes.map((note) => (
          <article className="ledger-row" key={note.ids.join("-")}>
            <p className="ledger-ids">{note.ids.join(" · ")}</p>
            <div>
              <h4>{note.label}</h4>
              <p>{note.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function PageHero({
  overline,
  title,
  description,
  index,
  children,
}: {
  overline: string;
  title: string;
  description: string;
  index: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero shell">
      <div className="page-hero-copy">
        <p className="eyebrow">{overline}</p>
        <h1>{title}</h1>
        <p className="lede">{description}</p>
        {children}
      </div>
      <div className="page-token" aria-hidden="true">
        <span>{index}</span>
        <small>field file</small>
      </div>
    </section>
  );
}

export function NextGuide({
  href,
  kicker,
  title,
  description,
}: {
  href: string;
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <section className="next-guide shell">
      <div>
        <p className="eyebrow">{kicker}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Link className="button button-light" href={href}>
        Continue guide <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
