import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import VideoEmbed from "@/components/VideoEmbed";
import { OfficialLinks, Section } from "@/components/Bits";
import { videos } from "@/lib/videos";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "ERPNext videos",
  description: "Official ERPNext videos from Frappe, and where to find more.",
};

export default function VideosPage() {
  const list = videos.filter((v) => v.product === "erpnext");
  return (
    <>
      <PageHero title="ERPNext videos" lead="Frappe publishes official videos about ERPNext. We link to them, and only to official public ones." crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "ERPNext", href: "/products/erpnext" }, { label: "Videos" }]} />
      <Section>
        {list.length > 0 && <ul className="mb-10 grid gap-6 md:grid-cols-2">{list.map((v) => (<li key={v.id}><VideoEmbed id={v.id} title={v.title} /></li>))}</ul>}
        <div className="card max-w-2xl">
          <h2 className="font-display text-xl font-semibold text-ink">Watch on Frappe’s YouTube channel</h2>
          <p className="mt-2 text-muted">Frappe’s own channel has walkthroughs, release notes and talks.</p>
          <div className="mt-4"><OfficialLinks docs={links.docsErpnext} /></div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
