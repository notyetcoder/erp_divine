import { ChevronDown, Check } from "lucide-react";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="section bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="heading">Where we can help</h2>
          <p className="lead mt-5">
            Practical help for small and growing businesses, built around the way you already work
            and ready for where you are heading. If your need is not listed, tell us about it. We
            would be glad to look at it with you.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.title}>
              <details className="card group h-full">
                <summary className="flex cursor-pointer list-none flex-col gap-3 [&::-webkit-details-marker]:hidden">
                  <span className="pill w-fit">{service.module}</span>
                  <span className="text-lg font-semibold text-ink">{service.title}</span>
                  <span className="leading-relaxed text-muted">{service.text}</span>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-link">
                    What you get
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
                    />
                  </span>
                </summary>
                <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
                  {service.gets.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-link" />
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
