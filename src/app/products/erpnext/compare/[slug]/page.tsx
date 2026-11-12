import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import TrialCta from "@/components/TrialCta";
import { Section, Ticks } from "@/components/Bits";
import { compare } from "@/lib/erpnext";

type Props = { params: { slug: string } };
export const dynamicParams = false;
export function generateStaticParams() { return compare.map((c) => ({ slug: c.slug })); }
const get = (slug: string) => compare.find((c) => c.slug === slug);

export function generateMetadata({ params }: Props): Metadata {
  const c = get(params.slug);
  return c ? { title: `ERPNext and ${c.name}: when each fits`, description: `${c.what} ${c.erpnextFits}`.slice(0, 160) } : {};
}

export default function ComparePage({ params }: Props) {
  const c = get(params.slug);
  if (!c) notFound();
  return (
    <>
      <PageHero title={`ERPNext and ${c.name}`} lead={c.what} crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "ERPNext", href: "/products/erpnext" }, { label: "Compare", href: "/products/erpnext/compare" }, { label: c.name }]} />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card"><h2 className="font-display text-xl font-semibold text-ink">{c.name} may fit when</h2><p className="mt-3 leading-relaxed text-muted">{c.otherFits}</p></div>
          <div className="card"><h2 className="font-display text-xl font-semibold text-ink">ERPNext may fit when</h2><p className="mt-3 leading-relaxed text-muted">{c.erpnextFits}</p></div>
        </div>
      </Section>
      <Section title="Questions to ask yourself" alt><Ticks items={c.ask} /><p className="mt-6 max-w-2xl text-sm text-muted">Products and prices change, so check each vendor’s current information. We have tried to be fair, and we are glad to talk it through.</p></Section>
      <Section><TrialCta /></Section>
      <CtaBand />
    </>
  );
}
