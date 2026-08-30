import type { MetadataRoute } from "next";
import { LAST_UPDATED_ISO, SITEMAP_ROUTES, SITE_URL } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_ROUTES.map((route) => ({
    url: route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`,
    lastModified: LAST_UPDATED_ISO,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
