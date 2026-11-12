import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Workspace from "@/components/demo/Workspace";
import Showcase from "@/components/Showcase";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Sample ERPNext workspace",
  description:
    "Click through a sample ERPNext-style workspace: move orders forward, receive stock, approve leave and advance work orders. Made-up data, nothing is saved.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        title="Sample workspace"
        lead="Click through sample screens for six modules. Everything is made-up data and nothing is saved, so try anything."
        crumbs={[{ label: "Home", href: "/" }, { label: "Sample workspace" }]}
      />
      <section className="section">
        <div className="container-page">
          <Workspace />
        </div>
      </section>
      <Showcase />
      <CtaBand />
    </>
  );
}
