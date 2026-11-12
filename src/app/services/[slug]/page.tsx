import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Faq, Section, Ticks } from "@/components/Bits";
import { serviceList } from "@/lib/pages";

type Props = { params: { slug: string } };
export const dynamicParams = false;
export function generateStaticParams() { return serviceList.map((s) => ({ slug: s.slug })); }
const get = (slug: string) => serviceList.find((s) => s.slug === slug);

export function generateMetadata({ params }: Props): Metadata {
  const s = get(params.slug);
  return s ? { title: `${s.name} for ERPNext`, description: s.intro.slice(0, 160) } : {};
}

export default function ServicePage({ params }: Props) {
  const s = get(params.slug);
  if (!s) notFound();
  return (
    <>
      <PageHero title={s.name} lead={s.intro} crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: s.name }]} />
      <Section title="What is included"><Ticks items={s.includes} /></Section>
      <Section title="What we need from you" alt><Ticks items={s.needs} /></Section>
      <Section title="Questions"><Faq items={s.faqs} /></Section>
      <CtaBand />
    </>
  );
}
