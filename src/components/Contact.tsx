"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Divine ERP Solutions, I would like to talk about my business process."
  )}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage("Could not reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <h2 className="heading">Ready to streamline your operations?</h2>
          <p className="lead mt-5">
            Tell us a little about your business and how work flows today. We will reply personally,
            and there is no obligation.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-colors hover:border-brand-300"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                <MessageCircle size={22} aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-ink">Chat on WhatsApp</span>
                <span className="block text-sm text-muted">Quick questions are welcome</span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-colors hover:border-brand-300"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                <Mail size={22} aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-ink">Send us an email</span>
                <span className="block break-all text-sm text-muted">{site.email}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white p-6 shadow-lift sm:p-8">
          {status === "success" ? (
            <div role="status" className="py-8 text-center">
              <CheckCircle2 className="mx-auto text-brand-600" size={48} aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-bold text-ink">Thank you for reaching out</h3>
              <p className="mx-auto mt-3 max-w-sm text-muted">
                We have received your message and will get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-base font-semibold text-brand-600 underline underline-offset-4 hover:text-brand-700"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Spam trap: hidden from people, bots tend to fill it in */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={120}
                    autoComplete="name"
                    className="field"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    autoComplete="email"
                    className="field"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink">
                    Phone <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={40}
                    autoComplete="tel"
                    className="field"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-ink">
                    Company <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    maxLength={160}
                    autoComplete="organization"
                    className="field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
                  Message <span className="font-normal text-muted">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={3000}
                  placeholder="What does your business do, and what would you like to improve?"
                  className="field resize-y"
                />
              </div>

              {status === "error" && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                >
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
