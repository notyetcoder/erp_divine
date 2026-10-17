/**
 * Emails each website enquiry to the business owner using Resend.
 * Uses plain fetch, so no extra package is needed.
 *
 * Required on Vercel:  RESEND_API_KEY, CONTACT_NOTIFY_EMAIL
 * Optional:            CONTACT_FROM_EMAIL (use your own verified domain later)
 */

export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const RESEND_URL = "https://api.resend.com/emails";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function oneLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function sendEnquiryEmail(enquiry: Enquiry): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_NOTIFY_EMAIL;

  if (!apiKey || !to) {
    console.warn("Email alert skipped: RESEND_API_KEY or CONTACT_NOTIFY_EMAIL is not set.");
    return;
  }

  const from = process.env.CONTACT_FROM_EMAIL ?? "Divine ERP Website <onboarding@resend.dev>";
  const rows: [string, string][] = [
    ["Name", enquiry.name],
    ["Email", enquiry.email],
    ["Phone", enquiry.phone || "Not given"],
    ["Company", enquiry.company || "Not given"],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;color:#22304A">
      <h2 style="margin:0 0 16px">New enquiry from your website</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:8px 12px;background:#F6F8FB;width:110px;font-weight:bold">${label}</td><td style="padding:8px 12px">${escapeHtml(value)}</td></tr>`
          )
          .join("")}
      </table>
      <h3 style="margin:20px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(enquiry.message || "No message left.")}</p>
      <p style="margin-top:24px;color:#5F6E83;font-size:13px">Reply to this email to answer the customer directly.</p>
    </div>`;

  const text = [
    "New enquiry from your website",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    enquiry.message || "No message left.",
  ].join("\n");

  const response = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: enquiry.email,
      subject: `New enquiry from ${oneLine(enquiry.name)}`,
      html,
      text,
    }),
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    throw new Error(`Resend responded ${response.status}: ${await response.text()}`);
  }
}
