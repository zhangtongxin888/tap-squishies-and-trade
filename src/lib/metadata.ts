import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      url,
      images: [],
    },
    twitter: {
      card: "summary",
      title: `${title} | ${site.name}`,
      description,
      images: [],
    },
  };
}
