import {
  CalendarClock,
  FileCheck2,
  ShoppingCart,
  Shirt,
  Warehouse,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const services: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Shirt,
    title: "Garment & Apparel Manufacturing",
    text: "Track styles, sizes, fabrics and trims from order to finished garment.",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Inventory Management",
    text: "Know what you have, where it is, and what needs to be reordered.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Integrations",
    text: "Connect online orders with your stock and dispatch so nothing is entered twice.",
  },
  {
    icon: FileCheck2,
    title: "Export Documentation & Compliance",
    text: "Prepare export papers from the same data you already have in the system.",
  },
  {
    icon: CalendarClock,
    title: "Production Planning & Tracking",
    text: "Plan work, follow progress, and spot delays before they become problems.",
  },
  {
    icon: Workflow,
    title: "Custom Process Automation",
    text: "Remove repeated manual steps in the way your business already works.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="heading">Where we can help</h2>
          <p className="lead mt-5">
            Practical help for manufacturing and trading businesses, built around the way you
            already work and ready for where you are heading. If your need is not listed, tell us
            about it. We would be glad to look at it with you.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                <service.icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{service.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
