import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Faq, OfficialLinks, Section } from "@/components/Bits";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "What ERPNext costs: hosting and implementation",
  description: "ERPNext software is free and open source. The cost has two parts: hosting, paid to Frappe Cloud or your own provider, and implementation, paid to the team that sets it up.",
};

export default function CostPage() {
  return (
    <>
      <PageHero title="What ERPNext costs" lead="The software is free and open source. The cost comes from two separate things: where it runs, and who sets it up." crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "ERPNext", href: "/products/erpnext" }, { label: "Cost" }]} />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card"><span className="pill">Part 1</span><h2 className="mt-3 font-display text-xl font-semibold text-ink">Hosting</h2><p className="mt-3 leading-relaxed text-muted">ERPNext needs somewhere to run. You can use Frappe Cloud, Frappe’s managed hosting, or a server that you or your provider looks after. Frappe Cloud publishes its own plans and prices, and you pay Frappe directly.</p><div className="mt-4"><OfficialLinks official={links.cloudPricing} label="Frappe’s pricing page" /></div></div>
          <div className="card"><span className="pill">Part 2</span><h2 className="mt-3 font-display text-xl font-semibold text-ink">Implementation</h2><p className="mt-3 leading-relaxed text-muted">Setting ERPNext up around your business, bringing your data across, and training your team. Frappe does not do this for each business. Independent teams, such as ours, do. We do not list fixed prices, because every business is different.</p></div>
        </div>
      </Section>
      <Section title="How we give you a number" alt>
        <p className="lead max-w-2xl">After a first conversation, we write down what will be set up, in what order, and what it will cost, before anything starts. We would rather you know up front than be surprised.</p>
      </Section>
      <Section title="Questions"><Faq items={[
        { q: "Is anything free?", a: "The ERPNext software has no licence fee, and Frappe offers a free 14-day trial on Frappe Cloud. Hosting after the trial, and implementation, are paid." },
        { q: "Do we pay per user?", a: "That depends on the hosting plan you choose. Check Frappe’s current plans, because they change." },
        { q: "Can we host it ourselves?", a: "Yes. ERPNext is open source, so you can run it on your own server. Someone has to look after backups, updates and security." },
      ]} /></Section>
      <CtaBand />
    </>
  );
}
