import { modules } from "@/lib/modules";
import { apps } from "@/lib/apps";
import { industries, indiaTopics, compare, featureHow } from "@/lib/erpnext";
import { serviceList, guides, glossary } from "@/lib/pages";
import { phases } from "@/lib/content";
import { appFeatureHref, featureHref, moduleHref, slugify } from "@/lib/util";

export type Entry = { title: string; href: string; text: string; kind: string };

export function buildIndex(): Entry[] {
  const e: Entry[] = [];
  e.push({ title: "ERPNext", href: "/products/erpnext", text: "Open-source ERP for accounts, sales, buying, stock, manufacturing, HR and more.", kind: "Product" });
  for (const m of modules) {
    e.push({ title: m.name, href: moduleHref(m.slug), text: `${m.short} ${m.intro}`, kind: "Module" });
    for (const c of m.covers) e.push({ title: c.title, href: featureHref(m.slug, c.title), text: `${m.name}. ${c.text} ${featureHow[`${m.slug}:${c.title}`] ?? ""}`, kind: `${m.name} feature` });
  }
  for (const a of apps) {
    e.push({ title: a.name, href: `/products/${a.slug}`, text: `${a.short} ${a.intro}`, kind: "Product" });
    for (const f of a.features) e.push({ title: f.title, href: appFeatureHref(a.slug, f.title), text: `${a.name}. ${f.text}`, kind: `${a.name} feature` });
  }
  for (const i of industries) e.push({ title: i.name, href: `/products/erpnext/industries/${i.slug}`, text: `${i.intro} ${i.challenges.join(" ")}`, kind: "Industry" });
  for (const t of indiaTopics) e.push({ title: t.name, href: `/products/erpnext/india/${t.slug}`, text: t.intro, kind: "India" });
  for (const c of compare) e.push({ title: `ERPNext and ${c.name}`, href: `/products/erpnext/compare/${c.slug}`, text: `${c.what} ${c.erpnextFits}`, kind: "Compare" });
  for (const s of serviceList) e.push({ title: s.name, href: `/services/${s.slug}`, text: s.intro, kind: "Service" });
  for (const p of phases) e.push({ title: p.title, href: `/process/${slugify(p.title)}`, text: `${p.text} ${p.gets}`, kind: "Process" });
  for (const g of guides) e.push({ title: g.title, href: `/resources/guides/${g.slug}`, text: g.summary, kind: "Guide" });
  for (const [t, d] of glossary) e.push({ title: t, href: "/resources/glossary", text: d, kind: "Glossary" });
  e.push({ title: "Free 14-day trial", href: "/products/erpnext/trial", text: "Try ERPNext on Frappe Cloud for 14 days.", kind: "Trial" });
  e.push({ title: "What ERPNext costs", href: "/products/erpnext/cost", text: "Hosting and implementation explained.", kind: "Cost" });
  return e;
}
