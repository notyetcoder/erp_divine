import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Story from "@/components/Story";
import WhyUs from "@/components/WhyUs";
import Proof from "@/components/Proof";
import Team from "@/components/Team";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Divine ERP Solutions is two people, new to this work and honest about it. Read why we do this and how we work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Two people, new, and honest about it"
        lead="Why we started, what we promise, and where we are today."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <Story />
      <WhyUs />
      <Proof />
      <Team />
      <CtaBand />
    </>
  );
}
