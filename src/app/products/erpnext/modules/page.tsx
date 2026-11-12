import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { ModuleGrid } from "@/components/ModuleGrid";
import CtaBand from "@/components/CtaBand";
import { Section } from "@/components/Bits";
import { otherApps } from "@/lib/modules";

export const metadata: Metadata = {
  title: "ERPNext modules we implement",
  description:
    "Accounting, selling, buying, stock, manufacturing, CRM, HR and payroll, projects, support, assets, quality, point of sale and e-commerce. See what each ERPNext module covers.",
};

export default function ModulesPage() {
  return (
    <>
      <PageHero
        title="ERPNext modules"
        lead="ERPNext brings the main parts of a business into one system. Start with the parts you need today, and add the others when you are ready."
        crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "ERPNext", href: "/products/erpnext" }, { label: "Modules" }]}
      />
      <Section><ModuleGrid grouped /></Section>
      <Section title="Beyond the core" lead="ERPNext is part of a wider family of Frappe apps. We are happy to look into one of these with you." alt>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {otherApps.map((a) => (
            <li key={a.name} className="card"><p className="font-display text-lg font-semibold text-ink">{a.name}</p><p className="mt-1 text-sm leading-relaxed text-muted">{a.text}</p></li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
