import { readdirSync } from "node:fs";
import { join } from "node:path";
import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/siteData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Discover static pages at build time so new pages are not omitted.
  const routes = readdirSync(join(process.cwd(), "src/app"), { recursive: true })
    .map(String)
    .map((file) => file.replace(/\\/g, "/"))
    .filter((file) => /(^|\/)page\.(tsx|ts|jsx|js)$/.test(file))
    .map((file) => file.split("/").slice(0, -1))
    .filter((segments) => segments.every((segment) => !/^[\[_@]/.test(segment)))
    .map((segments) => "/" + segments.filter((segment) => !segment.startsWith("(")).join("/"));

  return [...new Set(routes)].sort().map((route) => ({
    url: new URL(route, SITE_CONFIG.baseUrl).href,
  }));
}
