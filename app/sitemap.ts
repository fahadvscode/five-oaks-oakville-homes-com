import type { MetadataRoute } from "next";
import { SITEMAP_ROUTES, SITE_URL } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_ROUTES.map((route) => ({
    url: route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`,
    lastModified: "2026-08-29",
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
