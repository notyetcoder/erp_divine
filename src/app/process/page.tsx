import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import Engagement from "@/components/Engagement";
import FAQ from "@/components/FAQ";
import CtaBand from "@/components/CtaBand";
import Link from "next/link";
import { Section } from "@/components/Bits";
import { phases } from "@/lib/content";
import { slugify } from "@/lib/util";

export const metadata: Metadata = {
  title: "Our process, ways to work and FAQ",
  description:
    "How an ERPNext implementation runs, from discovery to support, the ways you can work with us, and straight answers to common questions.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="Process, ways to work and answers"
        lead="How we work with you, what you can ask us for, and the questions we hear most."
        crumbs={[{ label: "Home", href: "/" }, { label: "Process" }]}
      />
      <Process />
      <Section title="Each phase in detail" alt>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((p, i) => (<li key={p.title}><Link href={`/process/${slugify(p.title)}`} className="card card-link block"><span className="text-sm text-muted">Phase {i + 1}</span><span className="mt-1 block font-display text-lg font-semibold text-ink">{p.title}</span></Link></li>))}
          <li><Link href="/process/checklist" className="card card-link block"><span className="text-sm text-muted">Prepare</span><span className="mt-1 block font-display text-lg font-semibold text-ink">What we need from you</span></Link></li>
        </ul>
      </Section>
      <Engagement />
      <FAQ />
      <CtaBand />
    </>
  );
}
