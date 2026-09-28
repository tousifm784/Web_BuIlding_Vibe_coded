import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { inquirySchema } from "@/lib/inquiry";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Send a valid inquiry." }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Check your details and try again." }, { status: 400 });
  }

  const inquiry = parsed.data;
  const message = [
    "Assalamu Alaikum, I would like to inquire about upcoming Umrah packages.",
    inquiry.name ? `Name: ${inquiry.name}` : "",
    inquiry.departureCity ? `Departure: ${inquiry.departureCity}` : "",
    inquiry.travelMonth ? `Travel month: ${inquiry.travelMonth}` : "",
    inquiry.groupSize ? `Group size: ${inquiry.groupSize}` : "",
    inquiry.packageSlug ? `Package: ${inquiry.packageSlug}` : "",
    `Inquiry: ${inquiry.inquiryType}`,
  ].filter(Boolean).join("\n");
  const whatsappUrl = `https://wa.me/919691017171?text=${encodeURIComponent(message)}`;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, LEADS_EMAIL } = process.env;
  let emailSent = false;
  if (SMTP_HOST && SMTP_USER && SMTP_PASSWORD && LEADS_EMAIL) {
    try {
      const transporter = nodemailer.createTransport({ host: SMTP_HOST, port: Number(SMTP_PORT ?? 587), secure: Number(SMTP_PORT ?? 587) === 465, auth: { user: SMTP_USER, pass: SMTP_PASSWORD } });
      await transporter.sendMail({
        from: SMTP_USER,
        to: LEADS_EMAIL,
        subject: `Website ${inquiry.inquiryType} inquiry${inquiry.name ? ` from ${inquiry.name}` : ""}`,
        text: `${message}\nPhone: ${inquiry.phone}\nMessage: ${inquiry.message ?? ""}`,
      });
      emailSent = true;
    } catch {
      return NextResponse.json({ error: "We could not deliver your inquiry. Please call us directly." }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true, emailSent, whatsappUrl });
}