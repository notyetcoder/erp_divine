export const site = {
  name: "Divine ERP Solutions",
  tagline: "Streamline Your Business",
  description:
    "Divine ERP Solutions is a business process partner. We help manufacturing and trading businesses build clean, scalable and future-ready operations.",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919664775528",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "erpdivine@gmail.com",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#why-us", label: "Why us" },
  { href: "#contact", label: "Contact" },
];
