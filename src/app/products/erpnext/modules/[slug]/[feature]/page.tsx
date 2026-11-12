import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import TrialCta from "@/components/TrialCta";
import { OfficialLinks, Section, Ticks } from "@/components/Bits";
import { getModule, modules } from "@/lib/modules";
import { featureHow } from "@/lib/erpnext";
import { featureHref, moduleHref, slugify } from "@/lib/util";
import { links } from "@/lib/links";

type Props = { params: { slug: string; feature: string } };
export const dynamicParams = false;

export function generateStaticParams() {
  return modules.flatMap((m) => m.covers.map((c) => ({ slug: m.slug, feature: slugify(c.title) })));
}

function find(params: Props["params"]) {
  const m = getModule(params.slug);
  const idx = m ? m.covers.findIndex((c) => slugify(c.title) === params.feature) : -1;
  return m && idx >= 0 ? { m, idx, f: m.covers[idx] } : null;
}

export function generateMetadata({ params }: Props): Metadata {
  const r = find(params);
  if (!r) return {};
  return { title: `${r.f.title} in ERPNext ${r.m.name}`, description: `${r.f.text} ${featureHow[`${r.m.slug}:${r.f.title}`] ?? ""}`.slice(0, 160) };
}

export default function FeaturePage({ params }: Props) {
  const r = find(params);
  if (!r) notFound();
  const { m, idx, f } = r;
  const how = featureHow[`${m.slug}:${f.title}`];
  const prev = m.covers[(idx - 1 + m.covers.length) % m.covers.length];
  const next = m.covers[(idx + 1) % m.covers.length];

  return (
    <>
      <PageHero
        title={f.title}
        lead={f.text}
        crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "ERPNext", href: "/products/erpnext" }, { label: "Modules", href: "/products/erpnext/modules" }, { label: m.name, href: moduleHref(m.slug) }, { label: f.title }]}
      />

      <Section title="How it works">
        <p className="lead max-w-2xl">{how}</p>
        <p className="mt-6 max-w-2xl text-sm text-muted">This is part of the {m.name} module. Features vary a little between ERPNext versions, and the official documentation is the final word.</p>
      </Section>

      <Section title="How we set it up" alt>
        <div className="grid gap-10 lg:grid-cols-2">
          <Ticks items={m.helps} />
          <div className="card">
            <h3 className="font-display text-lg font-semibold text-ink">What we need from you</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">A little time with the people who use this day to day, and a few real examples, such as a recent order or bill. We start from how you work now.</p>
          </div>
        </div>
      </Section>

      <Section title="Other features in this module">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {m.covers.filter((c) => c.title !== f.title).map((c) => (
            <li key={c.title}><Link href={featureHref(m.slug, c.title)} className="card card-link block text-sm font-semibold text-ink">{c.title}</Link></li>
          ))}
        </ul>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <OfficialLinks docs={links.docsErpnext} />
          <TrialCta />
        </div>
      </Section>

      <nav aria-label="More features" className="border-t border-line">
        <div className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6 text-sm font-semibold">
          <Link href={featureHref(m.slug, prev.title)} className="inline-flex items-center gap-2 text-muted hover:text-link"><ArrowLeft size={16} aria-hidden="true" /> {prev.title}</Link>
          <Link href={moduleHref(m.slug)} className="text-muted hover:text-link">{m.name}</Link>
          <Link href={featureHref(m.slug, next.title)} className="inline-flex items-center gap-2 text-muted hover:text-link">{next.title} <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </nav>
      <CtaBand title={`Want ${f.title.toLowerCase()} set up for you?`} />
    </>
  );
}
