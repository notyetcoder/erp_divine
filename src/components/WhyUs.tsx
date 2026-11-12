import Link from "next/link";
import { Check } from "lucide-react";

const points = [
  {
    title: "We focus on real value",
    text: "We only suggest what will genuinely help your business.",
  },
  {
    title: "We take time to understand you",
    text: "Every business is different. We listen first and recommend later.",
  },
  {
    title: "We build for the long term",
    text: "Clean foundations today, so your operations stay easy to scale tomorrow.",
  },
  {
    title: "We prefer long-term relationships",
    text: "We would rather earn your trust over time than close a quick sale.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section bg-surface">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="heading">Why work with us</h2>
          <p className="lead mt-5">
            What we offer is care, curiosity and
            hard work on your behalf.
          </p>
          <p className="mt-8 text-xl font-semibold leading-snug text-ink">
            Give us a chance to help your business run smoother.
          </p>
          <Link href="/contact" className="btn-primary mt-6">
            Start a conversation
          </Link>
        </div>

        <ul className="divide-y divide-line self-start border-y border-line">
          {points.map((point) => (
            <li key={point.title} className="flex gap-4 py-6">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-link">
                <Check size={18} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{point.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
