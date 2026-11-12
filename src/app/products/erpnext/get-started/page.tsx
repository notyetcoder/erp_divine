import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import TrialCta from "@/components/TrialCta";
import { Section, Steps } from "@/components/Bits";
import { startSteps } from "@/lib/erpnext";

export const metadata: Metadata = {
  title: "Get started with ERPNext in four steps",
  description: "Try ERPNext free for 14 days, talk to us, agree a plan, and let us implement it for your business.",
};

export default function GetStartedPage() {
  return (
    <>
      <PageHero title="Get started in four steps" lead="You run the business. We handle the software and the implementation." crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "ERPNext", href: "/products/erpnext" }, { label: "Get started" }]} />
      <Section><div className="max-w-2xl"><Steps items={startSteps} /></div></Section>
      <Section alt><TrialCta variant="primary" /></Section>
      <CtaBand />
    </>
  );
}
