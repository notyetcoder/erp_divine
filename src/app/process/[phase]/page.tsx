import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Section, Ticks } from "@/components/Bits";
import { phases } from "@/lib/content";
import { phaseDetails } from "@/lib/pages";
import { slugify } from "@/lib/util";

type Props = { params: { phase: string } };
export const dynamicParams = false;
export function generateStaticParams() { return phases.map((p) => ({ phase: slugify(p.title) })); }

export function generateMetadata({ params }: Props): Metadata {
  const p = phases.find((x) => slugify(x.title) === params.phase);
  return p ? { title: `${p.title}: how an ERPNext implementation runs`, description: p.text } : {};
}

export default function PhasePage({ params }: Props) {
  const i = phases.findIndex((x) => slugify(x.title) === params.phase);
  if (i < 0) notFound();
  const p = phases[i];
  const d = phaseDetails.find((x) => x.slug === params.phase);
  const prev = phases[(i - 1 + phases.length) % phases.length];
  const next = phases[(i + 1) % phases.length];
  return (
    <>
      <PageHero title={`${i + 1}. ${p.title}`} lead={p.text} crumbs={[{ label: "Home", href: "/" }, { label: "Process", href: "/process" }, { label: p.title }]} />
      <Section title="What you get"><p className="lead max-w-2xl">{d?.outcome ?? p.gets}</p></Section>
      <Section title="What we need from you" alt><Ticks items={d?.needs ?? []} /></Section>
      <Section title="Questions we will ask"><Ticks items={d?.asks ?? []} /></Section>
      <nav aria-label="More phases" className="border-t border-line">
        <div className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6 text-sm font-semibold">
          <Link href={`/process/${slugify(prev.title)}`} className="inline-flex items-center gap-2 text-muted hover:text-link"><ArrowLeft size={16} aria-hidden="true" /> {prev.title}</Link>
          <Link href="/process" className="text-muted hover:text-link">All phases</Link>
          <Link href={`/process/${slugify(next.title)}`} className="inline-flex items-center gap-2 text-muted hover:text-link">{next.title} <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </nav>
      <CtaBand />
    </>
  );
}
