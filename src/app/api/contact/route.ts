import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body ?? {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please tell us your name." },
        { status: 400 }
      );
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please write us a short message." },
        { status: 400 }
      );
    }

    const enquiry = {
      name: name.trim(),
      email: email.trim(),
      phone: typeof phone === "string" ? phone.trim() : null,
      message: message.trim(),
    };

    let savedId: string | number | null = null;
    try {
      const saved = await getDb().contactMessage.create({ data: enquiry });
      savedId = saved.id;
    } catch (storeErr) {
      // On serverless hosting (e.g. Cloudflare Workers) there is no
      // persistent SQLite database. Keep the form working by logging the
      // enquiry instead (visible in the Worker logs on the dashboard).
      console.log("contact enquiry (not persisted):", enquiry);
    }

    return NextResponse.json({ ok: true, id: savedId });
  } catch (err) {
    console.error("contact POST error:", err);
    return NextResponse.json(
      { error: "Something went wrong on our side. Please try again." },
      { status: 500 }
    );
  }
}
