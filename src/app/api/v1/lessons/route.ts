import { db } from "@/drizzle/db";
import { eq, and } from "drizzle-orm";
import { lessons, subjects, topics } from "@/drizzle/schema";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    // select all
    // /api/lessons/
    const topicUrl = req.nextUrl.searchParams.get("topicUrl")?.toString() || "";
    const lessonsResult = await db
      .select({ subjects })
      .from(lessons)
      .innerJoin(topics, eq(topics.id, lessons.topicId))
      .where(
        and(
          eq(lessons.active, true),
          eq(topics.active, true),
          eq(topics.url, String(topicUrl)),
        ),
      )
      .groupBy(topics.id);

    return NextResponse.json({ lessons: lessonsResult });
  } catch (error) {
    return NextResponse.json({
      message: "Error fetching lessons",
      error,
    });
  }
}
