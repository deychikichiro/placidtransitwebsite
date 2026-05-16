import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    service, date, from, to, size,
    special, packing, name, phone, email,
  } = body;

  const specialItems = Array.isArray(special) ? special.join(", ") : special;

  try {
    await resend.emails.send({
      from: "Placid Transit Quote Form <quotes@placidtransit.com>",
      to: "info@placidtransit.com",
      replyTo: email,
      subject: `New Quote Request — ${service} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #C41E3A; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Quote Request</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 14px;">Placid Transit LLC</p>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #eee; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; width: 140px;">Service Type</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #111;">${service}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Move Date</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #111;">${date}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Moving From</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #111;">${from}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Moving To</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #111;">${to}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Space Size</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #111;">${size}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Special Items</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #111;">${specialItems}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Packing</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #111;">${packing}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #C41E3A;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #C41E3A;">${phone}</td></tr>
              <tr><td style="padding: 10px 0; color: #666; font-size: 13px;">Email</td><td style="padding: 10px 0; font-weight: 600; color: #C41E3A;">${email}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 14px; background: #fff3f3; border-radius: 6px; border-left: 3px solid #C41E3A;">
              <p style="margin: 0; font-size: 13px; color: #666;">Reply directly to this email to respond to <strong>${name}</strong> at <strong>${email}</strong></p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
