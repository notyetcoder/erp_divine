import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { LinkCard, Section } from "@/components/Bits";
import { guides } from "@/lib/pages";

export const metadata: Metadata = { title: "ERP guides in plain language", description: "Short guides on choosing an ERP, moving your data, and what go-live looks like." };

export default function GuidesPage() {
  return (
    <>
      <PageHero title="Guides" lead="Short, plain-language guides." crumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Guides" }]} />
      <Section><ul className="grid gap-4 sm:grid-cols-2">{guides.map((g) => (<li key={g.slug}><LinkCard href={`/resources/guides/${g.slug}`} title={g.title} text={g.summary} /></li>))}</ul></Section>
      <CtaBand />
    </>
  );
}
