import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { buildIndex } from "@/lib/searchIndex";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/products", "/products/erpnext", "/products/erpnext/modules", "/products/erpnext/industries", "/products/erpnext/india", "/products/erpnext/compare",
    "/products/erpnext/cost", "/products/erpnext/trial", "/products/erpnext/get-started", "/products/erpnext/videos", "/demo", "/services", "/process", "/process/checklist",
    "/resources", "/resources/guides", "/resources/glossary", "/resources/checklists", "/resources/videos", "/about", "/contact", "/legal"];
  const paths = Array.from(new Set([...fixed, ...buildIndex().map((e) => e.href).filter((h) => !h.includes("#"))]));
  const now = new Date();
  return paths.map((path) => ({ url: `${site.url}${path}`, lastModified: now, changeFrequency: "monthly" as const, priority: path === "" ? 1 : path.split("/").length <= 3 ? 0.8 : 0.6 }));
}
