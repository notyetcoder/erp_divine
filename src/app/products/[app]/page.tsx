import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import TrialCta from "@/components/TrialCta";
import { Faq, LinkCard, OfficialLinks, Section, Ticks } from "@/components/Bits";
import { apps, getApp } from "@/lib/apps";
import { appFeatureHref } from "@/lib/util";

type Props = { params: { app: string } };
export const dynamicParams = false;

export function generateStaticParams() {
  return apps.map((a) => ({ app: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const a = getApp(params.app);
  if (!a) return {};
  return { title: `${a.name} implementation`, description: `${a.short} ${a.intro}`.slice(0, 160) };
}

export default function AppPage({ params }: Props) {
  const a = getApp(params.app);
  if (!a) notFound();

  return (
    <>
      <PageHero
        title={a.name}
        lead={a.intro}
        crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: a.name }]}
      >
        {a.trial && <TrialCta href={a.trial} label={`Try ${a.name} free on Frappe Cloud`} note={false} track={`trial_${a.slug}`} />}
      </PageHero>

      <Section title="Features" lead="Open any feature for a closer look.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {a.features.map((f) => (<li key={f.title}><LinkCard href={appFeatureHref(a.slug, f.title)} title={f.title} text={f.text} /></li>))}
        </ul>
      </Section>

      <Section id="who" title="Who it is for" alt>
        <Ticks items={a.who} />
      </Section>

      <Section id="use-cases" title="Use cases">
        <ul className="grid gap-4 sm:grid-cols-2">
          {a.useCases.map((u) => (<li key={u.title} className="card"><h3 className="font-display text-lg font-semibold text-ink">{u.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{u.text}</p></li>))}
        </ul>
      </Section>

      <Section id="implementation" title="How we would implement it" alt>
        <Ticks items={a.implement} />
        <p className="mt-6 max-w-2xl text-sm text-muted">We have just started our business, and we agree the details with you before any work begins.</p>
      </Section>

      <Section id="faq" title="Questions and official sources">
        <Faq items={a.faqs} />
        <div className="mt-8"><OfficialLinks official={a.official} label={`${a.name} on Frappe’s website`} /></div>
        <p className="mt-4 max-w-2xl text-sm text-muted">Features change between versions. The official pages are always the most current source.</p>
      </Section>
      <CtaBand title={`Interested in ${a.name}?`} />
    </>
  );
}
