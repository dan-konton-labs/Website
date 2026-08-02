import { NextResponse } from "next/server";

function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// POST /api/subscribe
// Body: { email: string, wantsBeta: boolean, company?: string }
//
// `company` is a honeypot field — it's hidden from real visitors in the
// form UI, so anything filled in there almost certainly means a bot.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { email, wantsBeta, company } = body || {};

  if (company) {
    // Pretend success so bots don't learn the honeypot didn't work.
    return NextResponse.json({ ok: true });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    console.error(
      "Missing BREVO_API_KEY or BREVO_LIST_ID environment variables."
    );
    return NextResponse.json(
      { error: "Signup isn't wired up yet — try again later." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: {
          WANTS_BETA: Boolean(wantsBeta),
        },
        listIds: [Number(listId)],
        // Upsert instead of erroring if they already signed up — resubmitting
        // (e.g. later ticking the beta box) just updates their record.
        updateEnabled: true,
      }),
    });

    // Brevo returns 201 for a brand-new contact, 204 when updateEnabled
    // updates an existing one. Both mean "they're on the list."
    if (res.status === 201 || res.status === 204) {
      return NextResponse.json({ ok: true });
    }

    const errBody = await res.json().catch(() => ({}));
    console.error("Brevo API error:", res.status, errBody);
    return NextResponse.json(
      { error: "Something went wrong — try again in a bit." },
      { status: 502 }
    );
  } catch (err) {
    console.error("Brevo request failed:", err);
    return NextResponse.json(
      { error: "Something went wrong — try again in a bit." },
      { status: 502 }
    );
  }
}
