import { SITEMAP_ROUTES, SITE_URL } from "@/lib/content";

export const dynamic = "force-static";

function xml(): string {
  const urls = SITEMAP_ROUTES.map((route) => {
    const loc = route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
    const freq = route.changeFrequency === "yearly" ? "monthly" : route.changeFrequency;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>2026-08-29</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function GET() {
  return new Response(xml(), {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Content-Disposition": "inline",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
