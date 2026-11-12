import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { LinkCard, Section } from "@/components/Bits";
import { compare } from "@/lib/erpnext";

export const metadata: Metadata = {
  title: "ERPNext compared: Excel, Tally, Zoho, SAP, Odoo and more",
  description: "A fair look at when each option may fit, and when ERPNext may fit better, with questions to ask before you choose.",
};

export default function ComparePage() {
  return (
    <>
      <PageHero title="Compare" lead="No tool is right for everyone. For each option, here is when it may fit, when ERPNext may fit better, and what to ask." crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "ERPNext", href: "/products/erpnext" }, { label: "Compare" }]} />
      <Section><ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{compare.map((c) => (<li key={c.slug}><LinkCard href={`/products/erpnext/compare/${c.slug}`} title={`ERPNext and ${c.name}`} text={c.what} /></li>))}</ul></Section>
      <CtaBand />
    </>
  );
}
