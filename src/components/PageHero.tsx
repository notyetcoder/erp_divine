import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  title: string;
  lead?: string;
  crumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
};

export default function PageHero({ title, lead, crumbs, children }: Props) {
  return (
    <section className="border-b border-line bg-gradient-to-b from-brand-50 to-page">
      <div className="container-page py-12 sm:py-16">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {c.href ? <Link href={c.href} className="hover:text-link">{c.label}</Link> : <span aria-current="page" className="text-ink">{c.label}</span>}
                  {i < crumbs.length - 1 && <ChevronRight size={14} aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">{title}</h1>
        {lead && <p className="lead mt-5 max-w-2xl">{lead}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
