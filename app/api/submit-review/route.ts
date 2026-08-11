import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, country, email, tour, rating, review, consent } = body;

    // Basic validation
    if (!name || !country || !tour || !rating || !review) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const stars = "⭐".repeat(Number(rating));
    const consentText = consent ? "✅ Consented to publication" : "❌ Not consented to publication";

    // Format the email body
    const emailBody = [
      `NEW REVIEW — TangierTours`,
      ``,
      `Name:    ${name}`,
      `Country: ${country}`,
      `Email:   ${email || "Not provided"}`,
      `Tour:    ${tour}`,
      `Rating:  ${stars} (${rating}/5)`,
      ``,
      `Review:`,
      review,
      ``,
      consentText,
      ``,
      `--- Submitted via tangiertours.ma ---`,
    ].join("\n");

    // Send via mailto link approach — we use a simple email service
    // For now we send to tangiertour@gmail.com using fetch to a mailto-compatible endpoint
    // Since we have no SMTP configured, we'll use the free web3forms service
    const web3formsKey = process.env.WEB3FORMS_KEY;

    if (web3formsKey) {
      const formData = {
        access_key: web3formsKey,
        subject: `⭐ New Review from ${name} (${country}) — ${rating}/5 — TangierTours`,
        from_name: `${name} via TangierTours`,
        email: email || "tangiertour@gmail.com",
        message: emailBody,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("web3forms error");
    } else {
      // Fallback: log to console in dev — in production configure WEB3FORMS_KEY
      console.log("=== NEW REVIEW SUBMITTED ===");
      console.log(emailBody);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Review submission error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
