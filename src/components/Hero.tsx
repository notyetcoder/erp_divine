import Link from "next/link";
import DashboardMock from "@/components/DashboardMock";
import { whatsappUrl } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-brand-50 via-page to-page">
      <div className="container-page grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-6">
          <h1 className="font-display text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            ERPNext implementation for clear, simple operations
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            We are an independent ERP implementation service, mostly ERPNext. We help small and
            growing manufacturing and trading businesses move from diaries and scattered sheets to
            one system for orders, stock and production.
          </p>
          <p className="mt-4 text-base text-muted">
            We have just started our business, and we work closely with every client.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" data-track="hero_request_call" className="btn-primary">
              Request a process call
            </Link>
            <a
              href={whatsappUrl("Hello Divine ERP Solutions, I would like to talk about my business process.")}
              target="_blank"
              rel="noopener noreferrer"
              data-track="hero_whatsapp"
              className="btn-secondary"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">No pressure. Just a conversation.</p>
        </div>

        <div className="lg:col-span-6">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
