import Link from "next/link";
import { Check } from "lucide-react";
import { engagements } from "@/lib/content";

export default function Engagement() {
  return (
    <section id="engagement" className="section bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="heading">Ways to work with us</h2>
          <p className="lead mt-5">
            We do not list prices. Every business is different, so we give a clear estimate after we
            talk.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {engagements.map((item) => (
            <li key={item.title} className="card flex flex-col">
              <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-muted">{item.for}</p>
              <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                {item.includes.map((line) => (
                  <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-link" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Link href="/contact" data-track={`engagement_${item.title}`} className="btn-quiet">
                  Talk to us
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
