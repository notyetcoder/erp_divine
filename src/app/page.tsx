import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import { ModuleGrid } from "@/components/ModuleGrid";
import Paths from "@/components/Paths";
import CtaBand from "@/components/CtaBand";
import TrialCta from "@/components/TrialCta";
import { LinkCard } from "@/components/Bits";
import { apps } from "@/lib/apps";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="section">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="heading">You run the business. We handle the software.</h2>
            <p className="lead mt-5">These are the products we implement for you, from ERPNext to the apps that sit beside it.</p>
          </div>
          <div className="card mt-10 grid gap-8 lg:grid-cols-12 lg:p-10">
            <div className="lg:col-span-7">
              <span className="pill">Our main product</span>
              <h3 className="mt-4 font-display text-3xl font-semibold text-ink">ERPNext</h3>
              <p className="lead mt-3">Accounts, sales, buying, stock, manufacturing, people and customers in one open-source system.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/products/erpnext" className="btn-primary" data-track="home_erpnext">Explore ERPNext</Link>
                <Link href="/products" className="btn-secondary" data-track="home_products">All products</Link>
              </div>
            </div>
            <div className="lg:col-span-5"><TrialCta /></div>
          </div>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {apps.slice(0, 4).map((a) => (<li key={a.slug}><LinkCard href={`/products/${a.slug}`} title={a.name} text={a.short} /></li>))}
          </ul>
        </div>
      </section>

      <section className="section border-y border-line bg-surface">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-2xl">
              <h2 className="heading">Everything ERPNext can run</h2>
              <p className="lead mt-5">Open any module to see what it covers, how a typical flow runs, and each of its features.</p>
            </div>
            <Link href="/products/erpnext/modules" data-track="home_all_modules" className="btn-quiet">See all modules <ArrowRight size={14} aria-hidden="true" className="ml-1.5" /></Link>
          </div>
          <div className="mt-12"><ModuleGrid /></div>
        </div>
      </section>

      <section className="section">
        <div className="container-page flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="heading">Click through a sample workspace</h2>
            <p className="lead mt-4">Move a sample order forward, receive stock, approve leave, advance a work order. It uses made-up data and saves nothing, so you can try it freely.</p>
          </div>
          <Link href="/demo" data-track="home_demo" className="btn-primary shrink-0">Open the sample workspace</Link>
        </div>
      </section>

      <Paths />
      <CtaBand />
    </>
  );
}
