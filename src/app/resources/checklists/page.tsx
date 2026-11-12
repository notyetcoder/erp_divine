import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Section, Ticks } from "@/components/Bits";
import { checklists } from "@/lib/pages";

export const metadata: Metadata = { title: "Checklists to prepare for ERP", description: "Printable checklists for before the first call and for gathering your data." };

export default function ChecklistsPage() {
  return (
    <>
      <PageHero title="Checklists" lead="Print these, or keep them on your phone." crumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Checklists" }]} />
      {checklists.map((c, i) => (<Section key={c.slug} title={c.title} alt={i % 2 === 0}><Ticks items={c.items} /></Section>))}
      <CtaBand />
    </>
  );
}
