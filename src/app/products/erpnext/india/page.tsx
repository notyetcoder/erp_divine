import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { LinkCard, OfficialLinks, Section } from "@/components/Bits";
import { indiaTopics } from "@/lib/erpnext";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "ERPNext for India: GST, e-invoicing, e-way bills and TDS",
  description: "How ERPNext handles GST, e-invoicing, e-way bills and tax withholding for Indian businesses, using the open-source India Compliance app.",
};

export default function IndiaPage() {
  return (
    <>
      <PageHero title="ERPNext for India" lead="Indian tax rules are handled by the India Compliance app, an open-source app that you add to your ERPNext site. Here is what it covers, and what it does not." crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "ERPNext", href: "/products/erpnext" }, { label: "India" }]} />
      <Section>
        <ul className="grid gap-4 sm:grid-cols-2">{indiaTopics.map((t) => (<li key={t.slug}><LinkCard href={`/products/erpnext/india/${t.slug}`} title={t.name} text={t.intro} /></li>))}</ul>
        <p className="mt-8 max-w-2xl text-sm text-muted">Tax rules change, and we are not tax advisers. Your accountant confirms what applies to you. We set the system up to match.</p>
        <div className="mt-6"><OfficialLinks official={links.indiaCompliance} label="India Compliance documentation" docs={links.docsErpnext} /></div>
      </Section>
      <CtaBand />
    </>
  );
}
