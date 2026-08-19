import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/beginner-guide/", "/gameplay/", "/progression/", "/mistakes/", "/faq/"];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date("2026-08-19"),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
