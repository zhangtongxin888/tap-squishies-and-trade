import Link from "next/link";
import type { ReactNode } from "react";

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
      <strong>Strategy suggestion</strong>
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
