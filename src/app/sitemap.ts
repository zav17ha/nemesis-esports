import type { MetadataRoute } from "next";
import { nav, site, tournaments } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...nav.map((n) => ({ url: `${site.url}${n.href === "/" ? "" : n.href}` })),
    ...tournaments.map((t) => ({ url: `${site.url}/tournaments/${t.slug}` })),
  ];
}
