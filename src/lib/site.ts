export const site = {
  name: "Divine ERP Solutions",
  tagline: "Streamline Your Business",
  title: "ERPNext Implementation Service | Divine ERP Solutions",
  description:
    "ERPNext implementation and support for small and growing manufacturing and trading businesses. An independent service: setup, data migration and training.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://erpdivine.vercel.app",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919664775528",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "erpdivine@gmail.com",
  // Placeholder sections (case studies, team) stay hidden on the live site until this is "true".
  showPlaceholders: process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/demo", label: "Sample workspace" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];
