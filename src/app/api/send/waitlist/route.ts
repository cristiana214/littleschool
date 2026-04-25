/* eslint-disable import/no-extraneous-dependencies */
import { eq, exists } from "drizzle-orm";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { emails } from "@/drizzle/schema";
import { db } from "@/drizzle/db";
import rateLimit from "@/lib/rate-limits";
import WaitlistEmailTemplate from "@/components/email/waitlist-email-template";
import { check } from "drizzle-orm/mysql-core";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const isRateLimited = await rateLimit(ip);
    if (isRateLimited) {
      return NextResponse.json(
        { message: "Too many requests. Try again later." },
        { status: 429 },
      );
    }

    const { email } = await req.json();
    emailSchema.parse({ email });

    // check if email already exists
    const existing = await db
      .select()
      .from(emails)
      .where(eq(emails.email, email))
      .execute();
    if (existing.length > 0) {
      return NextResponse.json(
        { message: "You already signed up" },
        { status: 200 },
      );
    }

    // insert into database
    await db.insert(emails).values({ email }).execute();

    // send confirmation email
    await resend.emails.send({
      from: "Little School <noreply@info.littleschooltv.com>",
      to: email,
      subject: "Waitlist Confirmation | Little School",
      react: WaitlistEmailTemplate({ email }),
    });

    return NextResponse.json(
      { message: "Success! Your email is added to waitlist" },
      { status: 201 },
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
