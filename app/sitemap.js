import { navLinks, policyLinks, site } from "@/lib/site-config";

export default function sitemap() {
  const base = `https://www.${site.domain}`;
  const pages = [...navLinks, ...policyLinks].map((l) => l.href);
  const unique = Array.from(new Set(pages));
  return unique.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
