import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Talk to us",
  description:
    "Request a process call, chat on WhatsApp or send an email. Tell us how your business works today and we will reply personally.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Talk to us"
        lead="Tell us a little about your business. We will reply to you personally."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Contact />
    </>
  );
}
