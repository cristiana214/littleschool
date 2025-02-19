import { db } from "@/drizzle/db";
import { eq } from "drizzle-orm";
import { subjects } from "@/drizzle/schema";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    // select all
    // /api/subjects/
    const subjectsResult = await db
      .select({ subjects })
      .from(subjects)
      .where(eq(subjects.active, true))
      .groupBy(subjects.id);

    return NextResponse.json({ subjects: subjectsResult });
  } catch (error) {
    return NextResponse.json({
      message: "Error fetching subjects",
      error,
    });
  }
}
