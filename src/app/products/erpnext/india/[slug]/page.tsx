import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { OfficialLinks, Section, Ticks } from "@/components/Bits";
import { indiaTopics } from "@/lib/erpnext";
import { links } from "@/lib/links";

type Props = { params: { slug: string } };
export const dynamicParams = false;
export function generateStaticParams() { return indiaTopics.map((t) => ({ slug: t.slug })); }
const get = (slug: string) => indiaTopics.find((t) => t.slug === slug);

export function generateMetadata({ params }: Props): Metadata {
  const t = get(params.slug);
  return t ? { title: `${t.name} in ERPNext for India`, description: t.intro.slice(0, 160) } : {};
}

export default function IndiaTopicPage({ params }: Props) {
  const t = get(params.slug);
  if (!t) notFound();
  return (
    <>
      <PageHero title={t.name} lead={t.intro} crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "ERPNext", href: "/products/erpnext" }, { label: "India", href: "/products/erpnext/india" }, { label: t.name }]} />
      <Section title="What it covers"><Ticks items={t.covers} /></Section>
      <Section title="Good to know" alt>
        <p className="lead max-w-2xl">{t.notCovered}</p>
        <p className="mt-4 max-w-2xl text-sm text-muted">We are not tax advisers. Your accountant confirms what applies to your business.</p>
      </Section>
      <Section title="How we would help"><Ticks items={t.help} /><div className="mt-8"><OfficialLinks official={links.indiaCompliance} label="India Compliance documentation" docs={links.docsErpnext} /></div></Section>
      <CtaBand />
    </>
  );
}
