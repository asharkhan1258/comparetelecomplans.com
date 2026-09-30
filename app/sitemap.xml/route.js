import { navLinks, policyLinks, site } from "@/lib/site-config";

export async function GET() {
  const base = `https://www.${site.domain}`;
  const pages = [...navLinks, ...policyLinks].map((l) => l.href);
  const unique = Array.from(new Set(pages));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique
  .map((path) => {
    const priority = path === "/" ? "1.0" : "0.8";
    return `  <url>
    <loc>${base}${path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
