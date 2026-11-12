import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <h2 className="heading">Questions we hear</h2>
          <p className="lead mt-5">
            Straight answers. If yours is not here, ask us. We are happy to explain.
          </p>
        </div>
        <ul className="divide-y divide-line border-y border-line lg:col-span-8">
          {faqs.map((item) => (
            <li key={item.q}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className="shrink-0 text-muted transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
                  />
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">{item.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
