import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import VideoEmbed from "@/components/VideoEmbed";
import { OfficialLinks, Section } from "@/components/Bits";
import { videos } from "@/lib/videos";

export const metadata: Metadata = { title: "Official Frappe and ERPNext videos", description: "Official videos from Frappe about ERPNext and its apps." };

export default function VideoLibraryPage() {
  return (
    <>
      <PageHero title="Videos" lead="Official videos from Frappe. Nothing loads from YouTube until you press play." crumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Videos" }]} />
      <Section>
        {videos.length > 0 && <ul className="mb-10 grid gap-6 md:grid-cols-2">{videos.map((v) => (<li key={v.id}><VideoEmbed id={v.id} title={v.title} /></li>))}</ul>}
        <div className="card max-w-2xl"><h2 className="font-display text-xl font-semibold text-ink">Frappe’s YouTube channel</h2><p className="mt-2 text-muted">The most complete and current set of videos is on Frappe’s own channel.</p><div className="mt-4"><OfficialLinks /></div></div>
      </Section>
      <CtaBand />
    </>
  );
}
