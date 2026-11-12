import Link from "next/link";
import { whatsappUrl } from "@/lib/site";
import TrialCta from "@/components/TrialCta";

export default function CtaBand({
  title = "Not sure where to start?",
  text = "Tell us how your business works today. We will listen first, and suggest later.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-3xl border border-line bg-gradient-to-br from-brand-50 to-card p-8 shadow-soft sm:p-12">
          <h2 className="heading max-w-2xl">{title}</h2>
          <p className="lead mt-4 max-w-xl">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" data-track="cta_band_contact" className="btn-primary">Request a process call</Link>
            <a
              href={whatsappUrl("Hello Divine ERP Solutions, I would like to talk about my business process.")}
              target="_blank"
              rel="noopener noreferrer"
              data-track="cta_band_whatsapp"
              className="btn-secondary"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="mt-6 border-t border-line pt-6">
            <p className="mb-3 text-sm font-semibold text-ink">Want to see ERPNext first?</p>
            <TrialCta variant="quiet" label="Start a free 14-day trial on Frappe Cloud" track="cta_band_trial" />
          </div>
        </div>
      </div>
    </section>
  );
}
