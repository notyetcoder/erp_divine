import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CtaBand from "@/components/CtaBand";
import { LinkCard, Section } from "@/components/Bits";
import { serviceList } from "@/lib/pages";

export const metadata: Metadata = {
  title: "ERPNext implementation services",
  description:
    "ERPNext implementation for garment, trading, export and general manufacturing businesses: stock, production, e-commerce, export documents and process automation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        lead="Practical help for small and growing businesses, built around the way you already work."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <Section title="Our services in detail" lead="Open any service to see what is included and what we need from you.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((x) => (<li key={x.slug}><LinkCard href={`/services/${x.slug}`} title={x.name} text={x.short} /></li>))}
        </ul>
      </Section>
      <WhatWeDo />
      <Services />
      <Industries />
      <CtaBand />
    </>
  );
}
