import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Section, Ticks } from "@/components/Bits";
import { checklists } from "@/lib/pages";

export const metadata: Metadata = { title: "What we need from you", description: "A short checklist of what to prepare before an ERPNext implementation." };

export default function ChecklistPage() {
  return (
    <>
      <PageHero title="What we need from you" lead="Some preparation makes everything faster. Here is what helps." crumbs={[{ label: "Home", href: "/" }, { label: "Process", href: "/process" }, { label: "Checklist" }]} />
      {checklists.map((c, i) => (<Section key={c.slug} title={c.title} alt={i % 2 === 0}><Ticks items={c.items} /></Section>))}
      <CtaBand />
    </>
  );
}
