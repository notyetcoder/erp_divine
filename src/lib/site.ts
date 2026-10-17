export const site = {
  name: "Divine ERP Solutions",
  tagline: "Streamline Your Business",
  description:
    "Divine ERP Solutions helps manufacturing and trading businesses refine their processes with practical ERP solutions.",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919876543210",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@example.com",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];
