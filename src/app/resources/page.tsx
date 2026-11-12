import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { LinkCard, Section } from "@/components/Bits";

export const metadata: Metadata = { title: "Resources: guides, glossary, checklists and videos", description: "Plain-language guides, a glossary of ERP words, printable checklists and official videos to help you decide and prepare." };

const items = [
  { href: "/resources/guides", title: "Guides", text: "Plain-language articles on choosing and starting an ERP." },
  { href: "/resources/glossary", title: "Glossary", text: "ERP words explained simply." },
  { href: "/resources/checklists", title: "Checklists", text: "Printable lists to prepare before we start." },
  { href: "/resources/videos", title: "Videos", text: "Official videos from Frappe." },
  { href: "/products/erpnext/compare", title: "Compare", text: "ERPNext next to other options." },
  { href: "/process", title: "Process and FAQ", text: "How an implementation runs, and common questions." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero title="Resources" lead="Help for deciding, and for getting ready." crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
      <Section><ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{items.map((i) => (<li key={i.href}><LinkCard {...i} /></li>))}</ul></Section>
      <CtaBand />
    </>
  );
}
