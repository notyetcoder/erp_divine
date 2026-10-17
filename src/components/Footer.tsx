import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-ink">{site.name}</p>
          <p className="mt-1 text-muted">{site.tagline}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block text-sm text-muted transition-colors hover:text-brand-600"
          >
            {site.email}
          </a>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted transition-colors hover:text-brand-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="container-page py-5 text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
