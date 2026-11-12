import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Section } from "@/components/Bits";
import { guides } from "@/lib/pages";

type Props = { params: { slug: string } };
export const dynamicParams = false;
export function generateStaticParams() { return guides.map((g) => ({ slug: g.slug })); }
const get = (slug: string) => guides.find((g) => g.slug === slug);

export function generateMetadata({ params }: Props): Metadata {
  const g = get(params.slug);
  return g ? { title: g.title, description: g.summary } : {};
}

export default function GuidePage({ params }: Props) {
  const g = get(params.slug);
  if (!g) notFound();
  return (
    <>
      <PageHero title={g.title} lead={g.summary} crumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Guides", href: "/resources/guides" }, { label: g.title }]} />
      <Section><article className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">{g.body.map((p) => (<p key={p}>{p}</p>))}</article></Section>
      <CtaBand />
    </>
  );
}
