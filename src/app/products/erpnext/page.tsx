import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import TrialCta from "@/components/TrialCta";
import { Faq, LinkCard, OfficialLinks, Section, Ticks } from "@/components/Bits";
import { ModuleGrid } from "@/components/ModuleGrid";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "ERPNext implementation: what it is and what it covers",
  description:
    "ERPNext is open-source software for accounts, sales, buying, stock, manufacturing, HR and more. See what it covers, and how an independent team can set it up for your business.",
};

const explore = [
  { href: "/products/erpnext/modules", title: "Modules", text: "Every area ERPNext covers, with a page for each feature." },
  { href: "/products/erpnext/industries", title: "Industries", text: "Challenges and flows for manufacturing, trading, retail and more." },
  { href: "/products/erpnext/india", title: "India: GST and compliance", text: "GST, e-invoicing, e-way bills and TDS." },
  { href: "/products/erpnext/compare", title: "Compare", text: "ERPNext next to Excel, Tally, Zoho and others." },
  { href: "/products/erpnext/cost", title: "What it costs", text: "Hosting and implementation, explained." },
  { href: "/products/erpnext/get-started", title: "Get started", text: "Four simple steps." },
  { href: "/products/erpnext/trial", title: "Free 14-day trial", text: "Try it yourself on Frappe Cloud." },
  { href: "/products/erpnext/videos", title: "Videos", text: "Official videos from Frappe." },
];

export default function ErpnextPage() {
  return (
    <>
      <PageHero
        title="ERPNext"
        lead="An open-source system that keeps the main parts of a business in one place: accounts, sales, buying, stock, manufacturing, people and customers."
        crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "ERPNext" }]}
      >
        <TrialCta />
      </PageHero>

      <Section title="What it is" lead="ERPNext is made by Frappe and built on the Frappe Framework. It is free and open source, so the software itself has no licence fee. You pay for the place it runs, and for the people who set it up.">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">What it replaces</h3>
            <div className="mt-4"><Ticks items={["Diaries and notebooks that hold the same figures twice", "Spreadsheets for stock, orders and dues", "Separate tools for accounts, sales and stock that do not talk to each other"]} /></div>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">Where it fits</h3>
            <div className="mt-4"><Ticks items={["Small and growing businesses that want one system", "Manufacturing, trading, retail and project businesses", "Teams that value being able to adjust the software"]} /></div>
          </div>
        </div>
      </Section>

      <Section title="Explore ERPNext" alt>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {explore.map((e) => (<li key={e.href}><LinkCard {...e} /></li>))}
        </ul>
      </Section>

      <Section title="The modules" lead="Open any module to see what it covers, how a typical flow runs, and each of its features.">
        <ModuleGrid />
      </Section>

      <Section title="Where we come in" lead="Frappe makes ERPNext and runs its hosting. It does not set the software up for each business. Independent teams do that. We are one, and we have just started our business." alt>
        <Ticks items={["We learn how your business works first", "We set up the modules you need, around your process", "We bring your data across, train your team and stay close at go-live", "We are independent, and not an official Frappe partner"]} />
        <div className="mt-8"><OfficialLinks official={links.erpnext} label="ERPNext on Frappe’s website" docs={links.docsErpnext} /></div>
      </Section>

      <Section title="Common questions">
        <Faq items={[
          { q: "Is ERPNext really free?", a: "The software is open source, with no licence fee. Hosting is a separate cost, and so is implementation." },
          { q: "Where does it run?", a: "On Frappe Cloud, which Frappe runs, or on a server you or your provider looks after." },
          { q: "Can we try it before deciding?", a: "Yes. Frappe offers a free 14-day trial. After the trial you choose a Frappe Cloud plan to keep your site." },
        ]} />
      </Section>
      <CtaBand />
    </>
  );
}
