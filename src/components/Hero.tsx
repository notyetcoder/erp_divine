import { ClipboardList, Factory, PackageCheck, Truck } from "lucide-react";

const flow = [
  { icon: ClipboardList, title: "Order received", note: "Entered once, visible to everyone" },
  { icon: Factory, title: "Production planned", note: "Clear dates and responsibilities" },
  { icon: PackageCheck, title: "Stock checked", note: "Materials and finished goods in one place" },
  { icon: Truck, title: "Dispatched", note: "Documents ready, nothing retyped" },
];

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-brand-50 to-white">
      <div className="container-page grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Streamline Your Business
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            We help manufacturing and trading businesses refine their processes with practical ERP
            solutions.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href="#contact" className="btn-primary">
              Let’s Talk About Your Process
            </a>
            <p className="text-base text-muted">No pressure. Just a conversation.</p>
          </div>
        </div>

        <figure className="rounded-2xl border border-line bg-white p-6 shadow-lift sm:p-8">
          <figcaption className="text-base font-semibold text-ink">
            A simple order flow, made visible
          </figcaption>
          <ol className="mt-6">
            {flow.map((step, index) => (
              <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                {index < flow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-5 top-11 h-[calc(100%-2.75rem)] w-px bg-brand-200"
                  />
                )}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <step.icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-ink">{step.title}</p>
                  <p className="text-sm text-muted">{step.note}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 border-t border-line pt-4 text-sm text-muted">
            An example of the kind of flow we help your team see clearly.
          </p>
        </figure>
      </div>
    </section>
  );
}
