import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Section } from "@/components/Bits";
import { glossary } from "@/lib/pages";

export const metadata: Metadata = { title: "ERP glossary: ERP words explained simply", description: "Plain explanations of ERP, ERPNext, bill of materials, work orders, GST and other words you will meet." };

export default function GlossaryPage() {
  return (
    <>
      <PageHero title="Glossary" lead="ERP words, explained simply." crumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Glossary" }]} />
      <Section><dl className="max-w-3xl divide-y divide-line border-y border-line">{glossary.map(([t, d]) => (<div key={t} className="py-4 sm:grid sm:grid-cols-3 sm:gap-6"><dt className="font-semibold text-ink">{t}</dt><dd className="mt-1 text-muted sm:col-span-2 sm:mt-0">{d}</dd></div>))}</dl></Section>
      <CtaBand />
    </>
  );
}
