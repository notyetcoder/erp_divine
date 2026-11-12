"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ExternalLink, Menu, Search, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { links } from "@/lib/links";
import { moduleHref } from "@/lib/util";

const erpnextLinks = [
  { href: "/products/erpnext", label: "Overview" },
  { href: "/products/erpnext/modules", label: "All modules" },
  { href: "/products/erpnext/industries", label: "Industries" },
  { href: "/products/erpnext/india", label: "India: GST and compliance" },
  { href: "/products/erpnext/compare", label: "Compare" },
  { href: "/products/erpnext/cost", label: "What it costs" },
  { href: "/products/erpnext/get-started", label: "Get started" },
];

type MenuItem = { slug: string; name: string };

export default function Navbar({ modules, apps }: { modules: MenuItem[]; apps: MenuItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenu(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [menu]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const productsActive = pathname.startsWith("/products");

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-page/80 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "border-line shadow-soft" : "border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-8" aria-label="Main">
        <Link href="/" className="shrink-0 whitespace-nowrap font-display text-lg font-semibold tracking-tight text-ink">
          {site.name}
        </Link>

        <div className="hidden items-center gap-6 whitespace-nowrap lg:flex">
          <div ref={menuRef}>
            <button
              type="button"
              aria-expanded={menu}
              aria-controls="products-menu"
              onClick={() => setMenu((v) => !v)}
              className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-link ${productsActive || menu ? "text-link" : "text-muted"}`}
            >
              Products
              <ChevronDown size={15} aria-hidden="true" className={`transition-transform duration-200 motion-reduce:transition-none ${menu ? "rotate-180" : ""}`} />
            </button>

            {menu && (
              <div id="products-menu" className="absolute left-1/2 top-full z-50 mt-2 w-[min(58rem,94vw)] -translate-x-1/2 rounded-2xl border border-line bg-card p-6 shadow-lift">
                <div className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <p className="text-sm font-semibold text-ink">ERPNext</p>
                    <ul className="mt-3 space-y-1.5">
                      {erpnextLinks.map((l) => (
                        <li key={l.href}><Link href={l.href} className="text-sm text-muted transition-colors hover:text-link">{l.label}</Link></li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-sm font-semibold text-ink">ERPNext modules</p>
                    <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5">
                      {modules.map((m) => (
                        <li key={m.slug}><Link href={moduleHref(m.slug)} className="text-sm text-muted transition-colors hover:text-link">{m.name}</Link></li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-sm font-semibold text-ink">More Frappe apps</p>
                    <ul className="mt-3 space-y-1.5">
                      {apps.map((a) => (
                        <li key={a.slug}><Link href={`/products/${a.slug}`} className="text-sm text-muted transition-colors hover:text-link">{a.name}</Link></li>
                      ))}
                      <li><Link href="/products" className="text-sm font-semibold text-link">All products</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-sm">
                  <span className="text-muted">You run the business. We handle the software and the implementation.</span>
                  <a href={links.trial} target="_blank" rel="noopener noreferrer" data-track="menu_trial" className="inline-flex items-center gap-1.5 font-semibold text-link hover:underline">
                    Start a free 14-day trial on Frappe Cloud <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-sm font-medium transition-colors duration-200 hover:text-link ${isActive(link.href) ? "text-link" : "text-muted"}`}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/search" aria-label="Search the site" className="rounded-full p-2 text-muted transition-colors hover:text-link"><Search size={18} /></Link>
          <a href={links.cloud + "/dashboard/login"} target="_blank" rel="noopener noreferrer" data-track="nav_login" className="hidden whitespace-nowrap text-sm font-medium text-muted hover:text-link 2xl:inline">Log in</a>
          <a href={links.trial} target="_blank" rel="noopener noreferrer" data-track="nav_trial" className="btn-quiet hidden whitespace-nowrap 2xl:inline-flex">Free trial</a>
          <Link href="/contact" data-track="nav_contact" className="btn-primary whitespace-nowrap !px-5 !py-2 !text-sm">Let’s talk</Link>
        </div>

        <button
          type="button"
          className="-mr-2 rounded-lg p-2 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="max-h-[80vh] overflow-y-auto border-t border-line bg-page lg:hidden">
          <ul className="container-page flex flex-col py-2">
            {[{ href: "/products", label: "Products" }, { href: "/products/erpnext/modules", label: "ERPNext modules" }, ...navLinks, { href: "/search", label: "Search" }, { href: "/contact", label: "Contact" }].map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-current={isActive(link.href) ? "page" : undefined} className={`block py-3 text-base font-medium ${isActive(link.href) ? "text-link" : "text-ink"}`}>{link.label}</Link>
              </li>
            ))}
            <li className="border-t border-line py-3">
              <a href={links.trial} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-base font-semibold text-link">Start a free 14-day trial <ExternalLink size={15} aria-hidden="true" /></a>
              <p className="mt-1 text-xs text-muted">Opens Frappe Cloud.</p>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
