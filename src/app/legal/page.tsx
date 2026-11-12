import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Bits";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Legal, privacy and trademarks", description: "How we handle the details you send us, and our independence from Frappe." };

export default function LegalPage() {
  return (
    <>
      <PageHero title="Legal, privacy and trademarks" lead="Plain statements about what we do with your details, and who we are." crumbs={[{ label: "Home", href: "/" }, { label: "Legal" }]} />
      <Section title="Your details">
        <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>When you use our contact form, we receive your name, email address and message, and the phone number and company name if you give them.</p>
          <p>We store these in a database so that we can reply, and we email them to ourselves. We use them only to reply to you.</p>
          <p>We do not run advertising or analytics on this site at the moment. If that changes, we will say so here.</p>
          <p>To ask us to delete your details, email <a href={`mailto:${site.email}`} className="font-semibold text-link hover:underline">{site.email}</a>.</p>
        </div>
      </Section>
      <Section title="Trademarks and independence" alt>
        <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>ERPNext and Frappe are the names of their respective owners. We use them only to say which software we work with.</p>
          <p>We are an independent ERP implementation service, and not an official Frappe partner. Free trials and hosting on Frappe Cloud are provided by Frappe, and their terms apply to them.</p>
          <p>The sample screens on this site use made-up data.</p>
        </div>
      </Section>
    </>
  );
}
