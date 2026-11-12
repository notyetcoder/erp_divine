import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import TrialCta from "@/components/TrialCta";
import { ModuleCard } from "@/components/ModuleGrid";
import { Section, Steps, Ticks } from "@/components/Bits";
import { industries } from "@/lib/erpnext";

type Props = { params: { slug: string } };
export const dynamicParams = false;
export function generateStaticParams() { return industries.map((i) => ({ slug: i.slug })); }
const get = (slug: string) => industries.find((i) => i.slug === slug);

export function generateMetadata({ params }: Props): Metadata {
  const i = get(params.slug);
  return i ? { title: `ERPNext for ${i.name.toLowerCase()}`, description: i.intro.slice(0, 160) } : {};
}

export default function IndustryPage({ params }: Props) {
  const i = get(params.slug);
  if (!i) notFound();
  const parent = i.parent ? get(i.parent) : undefined;
  const crumbs = [{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "ERPNext", href: "/products/erpnext" }, { label: "Industries", href: "/products/erpnext/industries" },
    ...(parent ? [{ label: parent.name, href: `/products/erpnext/industries/${parent.slug}` }] : []), { label: i.name }];

  return (
    <>
      <PageHero title={i.name} lead={i.intro} crumbs={crumbs}>
        {i.note && <p className="max-w-2xl rounded-xl border border-line bg-card px-4 py-3 text-sm text-muted">{i.note}</p>}
      </PageHero>
      <Section title="Typical challenges"><Ticks items={i.challenges} /></Section>
      <Section title="A typical flow" alt><Steps items={i.flow.map((t) => ({ title: t, text: "" }))} /></Section>
      <Section title="Modules usually involved">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{i.modules.map((s) => (<li key={s}><ModuleCard slug={s} /></li>))}</ul>
      </Section>
      <Section alt><TrialCta /></Section>
      <CtaBand title={`Running a ${i.name.toLowerCase()} business?`} />
    </>
  );
}
