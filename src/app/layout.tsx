import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.gameName} Guide | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "A clear, fact-checked beginner guide to Tap Squishies and Trade: core gameplay, progression ideas, common mistakes, and FAQ.",
  keywords: [
    "Tap Squishies and Trade guide",
    "Tap Squishies and Trade wiki",
    "Tap Squishies and Trade beginner guide",
    "Tap Squishies and Trade trading",
  ],
  category: "games",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.gameName} Guide`,
    description:
      "Learn the verified core loop, plan your first session, and avoid unconfirmed claims.",
    url: site.url,
  },
  twitter: {
    card: "summary",
    title: `${site.gameName} Guide`,
    description:
      "A fact-checked beginner path for tapping, collecting, trading, and upgrading.",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  alternateName: `${site.gameName} Guide`,
  url: site.url,
  description:
    "An independent, fact-checked beginner guide to Tap Squishies and Trade.",
  inLanguage: "en",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
