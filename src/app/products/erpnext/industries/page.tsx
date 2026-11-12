import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { LinkCard, Section } from "@/components/Bits";
import { industries } from "@/lib/erpnext";

export const metadata: Metadata = {
  title: "ERPNext for manufacturing, trading, retail and more",
  description: "Typical challenges, and how ERPNext is used, in manufacturing, garment, trading, export, retail, e-commerce and other industries.",
};

export default function IndustriesPage() {
  const main = industries.filter((i) => i.focus);
  const other = industries.filter((i) => !i.focus);
  return (
    <>
      <PageHero title="Industries" lead="Every business is different, but the everyday problems are often familiar. Here is how ERPNext is used in each field." crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "ERPNext", href: "/products/erpnext" }, { label: "Industries" }]} />
      <Section title="Our main focus" lead="These are the fields we know best.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{main.map((i) => (<li key={i.slug}><LinkCard href={`/products/erpnext/industries/${i.slug}`} title={i.name} text={i.intro} tag={i.parent ? "Part of a wider field" : undefined} /></li>))}</ul>
      </Section>
      <Section title="Also shown" lead="ERPNext is used in these too. Ask us how it would fit." alt>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{other.map((i) => (<li key={i.slug}><LinkCard href={`/products/erpnext/industries/${i.slug}`} title={i.name} text={i.intro} /></li>))}</ul>
      </Section>
      <CtaBand />
    </>
  );
}
