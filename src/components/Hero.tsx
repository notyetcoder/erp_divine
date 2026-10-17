import type { CSSProperties } from "react";
import { Check, ClipboardList, Factory, PackageCheck, Truck } from "lucide-react";

const flow = [
  { icon: ClipboardList, title: "Order received", note: "Entered once, visible to everyone", state: "Done" },
  { icon: Factory, title: "Production planned", note: "Clear dates and responsibilities", state: "Done" },
  { icon: PackageCheck, title: "Stock checked", note: "Materials and finished goods in one place", state: "Done" },
  { icon: Truck, title: "Dispatched", note: "Documents ready, nothing retyped", state: "Today" },
];

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="container-page grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Streamline Your Business
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            We partner with manufacturing and trading businesses to build clean, scalable and
            future-ready operations, so your team spends less time chasing information and more
            time moving forward.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href="#contact" className="btn-primary">
              Let’s Talk About Your Process
            </a>
            <p className="text-base text-muted">No pressure. Just a conversation.</p>
          </div>
        </div>

        <figure className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
          <div className="flex items-center justify-between border-b border-line bg-surface px-6 py-3.5">
            <figcaption className="text-sm font-semibold text-ink">
              A simple order flow, made visible
            </figcaption>
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              In progress
            </span>
          </div>

          <div className="px-6 pb-2 pt-6 sm:px-8">
            <div
              className="h-1.5 overflow-hidden rounded-full bg-brand-100"
              role="img"
              aria-label="Three of four stages complete"
            >
              <div className="flow-bar h-full w-3/4 rounded-full bg-brand-500" />
            </div>

            <ol className="mt-6">
              {flow.map((step, index) => (
                <li
                  key={step.title}
                  className="flow-step relative flex gap-4 pb-6 last:pb-4"
                  style={{ "--i": index } as CSSProperties}
                >
                  {index < flow.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-5 top-11 h-[calc(100%-2.75rem)] w-px bg-brand-200"
                    />
                  )}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                    <step.icon size={20} aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold text-ink">{step.title}</p>
                    <p className="text-sm text-muted">{step.note}</p>
                  </div>
                  <span
                    className={`mt-1 inline-flex h-6 items-center gap-1 text-xs font-medium ${
                      step.state === "Done" ? "text-brand-600" : "text-muted"
                    }`}
                  >
                    {step.state === "Done" && <Check size={14} aria-hidden="true" />}
                    {step.state}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <p className="border-t border-line bg-surface px-6 py-3.5 text-sm text-muted sm:px-8">
            An example of the kind of flow we help your team see clearly.
          </p>
        </figure>
      </div>
    </section>
  );
}
