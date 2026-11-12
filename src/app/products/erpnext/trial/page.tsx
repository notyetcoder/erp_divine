import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import TrialCta from "@/components/TrialCta";
import { Section, Ticks } from "@/components/Bits";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "Try ERPNext free for 14 days",
  description: "Start a free 14-day ERPNext trial on Frappe Cloud, then talk to us when you are ready to set it up properly for your business.",
};

export default function TrialPage() {
  return (
    <>
      <PageHero title="Try ERPNext free for 14 days" lead="Frappe gives you a free trial of ERPNext on Frappe Cloud. Click around, look at the screens, and see what it does before you decide anything." crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "ERPNext", href: "/products/erpnext" }, { label: "Free trial" }]}>
        <TrialCta variant="primary" />
      </PageHero>
      <Section title="What happens">
        <Ticks items={["You sign up on Frappe Cloud, which Frappe runs. We are not involved in the sign-up", "You get free access to ERPNext for 14 days", "After the trial, you choose a Frappe Cloud plan to keep your site", "At any point you can talk to us about setting it up properly"]} />
      </Section>
      <Section title="What to try first" alt>
        <Ticks items={["Create an item, a customer and a supplier", "Make a quotation and turn it into a sales order", "Receive some stock and issue some", "Look at a report"]} />
        <p className="mt-6 max-w-2xl text-sm text-muted">A trial site is a good place to explore. A real set-up needs your own process, items and opening balances, and that is where we help.</p>
      </Section>
      <Section title="Other free trials">
        <div className="flex flex-wrap gap-6">
          <TrialCta href={links.trialHr} label="Frappe HR trial" variant="quiet" note={false} track="trial_hr" />
          <TrialCta href={links.trialCrm} label="Frappe CRM trial" variant="quiet" note={false} track="trial_crm" />
        </div>
        <p className="mt-4 text-sm text-muted">Both open Frappe Cloud. Their terms are set by Frappe.</p>
      </Section>
      <CtaBand title="Tried it? Let’s talk." text="Tell us what you liked and what confused you. We will help you set it up around your business." />
    </>
  );
}
