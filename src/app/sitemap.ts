import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/siteData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/gioi-thieu",
    "/dich-vu",
    "/khoan-tuong-treo-tranh",
    "/treo-tv-tuong",
    "/lap-gia-ke",
    "/treo-guong",
    "/lap-rem-cua",
    "/bang-gia",
    "/khu-vuc-phuc-vu",
    "/lien-he",
  ];

  return routes.map((route) => ({
    url: `${SITE_CONFIG.baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));
}
