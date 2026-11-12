import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { OfficialLinks, Section, Ticks } from "@/components/Bits";
import { apps, getApp } from "@/lib/apps";
import { appFeatureHref, slugify } from "@/lib/util";

type Props = { params: { app: string; feature: string } };
export const dynamicParams = false;

export function generateStaticParams() {
  return apps.flatMap((a) => a.features.map((f) => ({ app: a.slug, feature: slugify(f.title) })));
}

function find(p: Props["params"]) {
  const a = getApp(p.app);
  const f = a?.features.find((x) => slugify(x.title) === p.feature);
  return a && f ? { a, f } : null;
}

export function generateMetadata({ params }: Props): Metadata {
  const r = find(params);
  return r ? { title: `${r.f.title} in ${r.a.name}`, description: r.f.text.slice(0, 160) } : {};
}

export default function AppFeaturePage({ params }: Props) {
  const r = find(params);
  if (!r) notFound();
  const { a, f } = r;

  return (
    <>
      <PageHero
        title={f.title}
        lead={f.text}
        crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: a.name, href: `/products/${a.slug}` }, { label: f.title }]}
      />
      <Section title="How we would set it up">
        <Ticks items={a.implement} />
        <p className="mt-6 max-w-2xl text-sm text-muted">This feature belongs to {a.name}. The official documentation describes the current version in full.</p>
        <div className="mt-6"><OfficialLinks official={a.official} label={`${a.name} on Frappe’s website`} /></div>
      </Section>
      <Section title={`More in ${a.name}`} alt>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {a.features.filter((x) => x.title !== f.title).map((x) => (
            <li key={x.title}><Link href={appFeatureHref(a.slug, x.title)} className="card card-link block text-sm font-semibold text-ink">{x.title}</Link></li>
          ))}
        </ul>
      </Section>
      <CtaBand title={`Interested in ${a.name}?`} />
    </>
  );
}
