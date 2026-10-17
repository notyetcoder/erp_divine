import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { sendEnquiryEmail } from "@/lib/notify";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Hidden "website" field: real people leave it empty, simple bots fill it.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const company = clean(body.company, 160);
  const message = clean(body.message, 3000);

  if (!name) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      phone: phone || null,
      company: company || null,
      message: message || null,
    });

    if (error) {
      console.error("Supabase insert failed:", error.message);
      return NextResponse.json(
        { error: "We could not save your message. Please try again or use WhatsApp or email." },
        { status: 500 }
      );
    }

    // The enquiry is already saved. If the email fails, the visitor still sees success
    // and the lead stays safe in Supabase.
    try {
      await sendEnquiryEmail({ name, email, phone, company, message });
    } catch (mailError) {
      console.error("Enquiry email failed:", mailError);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong on our side. Please try again or use WhatsApp or email." },
      { status: 500 }
    );
  }
}
