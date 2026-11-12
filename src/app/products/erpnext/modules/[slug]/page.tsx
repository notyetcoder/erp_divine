import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import FlowStepper from "@/components/FlowStepper";
import CtaBand from "@/components/CtaBand";
import TrialCta from "@/components/TrialCta";
import { ModuleCard } from "@/components/ModuleGrid";
import { LinkCard, OfficialLinks, Section, Ticks } from "@/components/Bits";
import { getModule, modules } from "@/lib/modules";
import { featureHref, moduleHref } from "@/lib/util";
import { links } from "@/lib/links";

type Props = { params: { slug: string } };
export const dynamicParams = false;

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const m = getModule(params.slug);
  if (!m) return {};
  return { title: `${m.name} in ERPNext`, description: `${m.short} ${m.intro}`.slice(0, 160) };
}

export default function ModulePage({ params }: Props) {
  const m = getModule(params.slug);
  if (!m) notFound();
  const i = modules.findIndex((x) => x.slug === m.slug);
  const prev = modules[(i - 1 + modules.length) % modules.length];
  const next = modules[(i + 1) % modules.length];

  return (
    <>
      <PageHero
        title={m.name}
        lead={m.intro}
        crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "ERPNext", href: "/products/erpnext" }, { label: "Modules", href: "/products/erpnext/modules" }, { label: m.name }]}
      >
        {m.note && <p className="max-w-2xl rounded-xl border border-line bg-card px-4 py-3 text-sm text-muted">{m.note}</p>}
      </PageHero>

      <Section title="What it covers" lead="Open any feature for how it works and what we set up.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {m.covers.map((c) => (
            <li key={c.title}><LinkCard href={featureHref(m.slug, c.title)} title={c.title} text={c.text} /></li>
          ))}
        </ul>
      </Section>

      <Section title="How a typical flow runs" lead="Step through a sample document to see what happens at each stage." alt>
        <FlowStepper module={m} />
        <p className="mt-6">
          <Link href={`/demo#${m.slug}`} data-track={`demo_from_${m.slug}`} className="btn-quiet">Open in the sample workspace <ArrowRight size={14} aria-hidden="true" className="ml-1.5" /></Link>
        </p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="heading">How we would help</h2>
            <div className="mt-8"><Ticks items={m.helps} /></div>
            <p className="mt-6 text-sm text-muted">We have just started our business, and we agree the details with you before any work begins.</p>
          </div>
          <div className="lg:col-span-6">
            <h2 className="heading">Works with</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {m.related.map((slug) => (<li key={slug}><ModuleCard slug={slug} /></li>))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Learn more" alt>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-muted">Frappe publishes the official documentation, and many walkthrough videos on its YouTube channel.</p>
            <div className="mt-4"><OfficialLinks docs={links.docsErpnext} /></div>
          </div>
          <TrialCta />
        </div>
      </Section>

      <nav aria-label="More modules" className="border-t border-line">
        <div className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6 text-sm font-semibold">
          <Link href={moduleHref(prev.slug)} className="inline-flex items-center gap-2 text-muted hover:text-link"><ArrowLeft size={16} aria-hidden="true" /> {prev.name}</Link>
          <Link href="/products/erpnext/modules" className="text-muted hover:text-link">All modules</Link>
          <Link href={moduleHref(next.slug)} className="inline-flex items-center gap-2 text-muted hover:text-link">{next.name} <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </nav>
      <CtaBand title={`Thinking about ${m.name.toLowerCase()}?`} />
    </>
  );
}
