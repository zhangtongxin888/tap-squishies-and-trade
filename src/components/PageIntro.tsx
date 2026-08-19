import Link from "next/link";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  index: string;
  nextHref?: string;
  nextLabel?: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  index,
  nextHref,
  nextLabel,
}: PageIntroProps) {
  return (
    <section className="page-intro shell">
      <div className="page-intro-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{description}</p>
        {nextHref && nextLabel ? (
          <Link className="text-link" href={nextHref}>
            {nextLabel} <span aria-hidden="true">→</span>
          </Link>
        ) : null}
      </div>
      <div className="intro-sticker" aria-hidden="true">
        <span>{index}</span>
        <small>guide</small>
      </div>
    </section>
  );
}
