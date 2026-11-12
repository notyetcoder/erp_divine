import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import TrialCta from "@/components/TrialCta";
import { LinkCard, Section } from "@/components/Bits";
import { apps, moreApps } from "@/lib/apps";
import { modules } from "@/lib/modules";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "Software we implement: ERPNext and Frappe apps",
  description:
    "ERPNext and the Frappe apps we set up for businesses: HR, CRM, Helpdesk, Insights, Builder, Learning and more. You run the business, we handle the software.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Software we implement"
        lead="You run the business. We handle the software and the implementation. These are the products we set up for you."
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <Section>
        <div className="card grid gap-8 lg:grid-cols-12 lg:p-10">
          <div className="lg:col-span-7">
            <span className="pill">Our main product</span>
            <h2 className="heading mt-4">ERPNext</h2>
            <p className="lead mt-4">
              One open-source system for accounts, sales, buying, stock, manufacturing, people and customers. {modules.length} modules, each with its own pages here, from what it covers down to each feature.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products/erpnext" className="btn-primary" data-track="products_erpnext">Explore ERPNext</Link>
              <Link href="/products/erpnext/modules" className="btn-secondary">See all {modules.length} modules</Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <TrialCta />
          </div>
        </div>
      </Section>

      <Section title="More Frappe apps we can set up" lead="Each one installs next to ERPNext, or stands on its own." alt>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((a) => (
            <li key={a.slug}><LinkCard href={`/products/${a.slug}`} title={a.name} text={a.short} /></li>
          ))}
        </ul>
      </Section>

      <Section title="Other Frappe apps" lead="These have short descriptions for now. Ask us if one fits your business, or see Frappe’s own pages.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {moreApps.map((a) => (
            <li key={a.name} className="card">
              <p className="font-display text-lg font-semibold text-ink">{a.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{a.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <a href={links.products} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-link hover:underline">
            See every Frappe product on Frappe’s website <ExternalLink size={14} aria-hidden="true" />
          </a>
        </p>
        <p className="mt-6">
          <Link href="/contact" className="inline-flex items-center gap-1.5 font-semibold text-link">Ask us about an app <ArrowRight size={14} aria-hidden="true" /></Link>
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
