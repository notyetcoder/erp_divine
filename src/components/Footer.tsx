import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { links } from "@/lib/links";
import { modules } from "@/lib/modules";
import { apps } from "@/lib/apps";
import { moduleHref } from "@/lib/util";

const col = "text-sm text-muted transition-colors hover:text-link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <p className="font-display text-lg font-semibold text-ink">{site.name}</p>
          <p className="mt-1 text-muted">You run the business. We handle the software and the implementation.</p>
          <a href={`mailto:${site.email}`} className="mt-3 inline-block text-sm text-muted transition-colors hover:text-link">{site.email}</a>
          <div className="mt-4 flex flex-col items-start gap-2 text-sm">
            <a href={links.trial} target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:underline">Start a free 14-day trial</a>
            <a href={`${links.cloud}/dashboard/login`} target="_blank" rel="noopener noreferrer" className={col}>Log in to Frappe Cloud</a>
          </div>
        </div>

        <nav aria-label="Products" className="lg:col-span-2">
          <p className="text-sm font-semibold text-ink">Products</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="/products/erpnext" className={col}>ERPNext</Link></li>
            {apps.map((a) => (<li key={a.slug}><Link href={`/products/${a.slug}`} className={col}>{a.name}</Link></li>))}
            <li><Link href="/products" className={col}>All products</Link></li>
          </ul>
        </nav>

        <nav aria-label="ERPNext modules" className="lg:col-span-3">
          <p className="text-sm font-semibold text-ink">ERPNext modules</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
            {modules.map((m) => (<li key={m.slug}><Link href={moduleHref(m.slug)} className={col}>{m.name}</Link></li>))}
          </ul>
        </nav>

        <nav aria-label="Learn" className="lg:col-span-2">
          <p className="text-sm font-semibold text-ink">Learn</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="/products/erpnext/industries" className={col}>Industries</Link></li>
            <li><Link href="/products/erpnext/india" className={col}>India: GST</Link></li>
            <li><Link href="/products/erpnext/compare" className={col}>Compare</Link></li>
            <li><Link href="/resources/guides" className={col}>Guides</Link></li>
            <li><Link href="/resources/glossary" className={col}>Glossary</Link></li>
            <li><Link href="/resources/videos" className={col}>Videos</Link></li>
          </ul>
        </nav>

        <nav aria-label="Company" className="lg:col-span-2">
          <p className="text-sm font-semibold text-ink">Company</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((l) => (<li key={l.href}><Link href={l.href} className={col}>{l.label}</Link></li>))}
            <li><Link href="/contact" className={col}>Contact</Link></li>
            <li><Link href="/legal" className={col}>Legal and privacy</Link></li>
            <li><a href="/divine-erp-solutions-brochure.pdf" className={col}>Brochure (PDF)</a></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="container-page space-y-2 py-6 text-sm text-muted">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-xs leading-relaxed">
            ERPNext and Frappe are the names of their respective owners. We are an independent ERP implementation service and not an official Frappe partner. Free trials and hosting are provided by Frappe Cloud, not by us.
          </p>
        </div>
      </div>
    </footer>
  );
}
