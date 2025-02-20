import { db } from "@/drizzle/db";
import { and, eq } from "drizzle-orm";
import {
  lessons,
  subjects,
  topics,
  videoLessons,
  videos,
} from "@/drizzle/schema";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const getBaseQuery = () =>
  // select all products
  db
    .select({
      id: videos.id,
      title: videos.title,
      content: videos.content,
      description: videos.description,
      url: videos.url,
      videoUrl: videos.videoUrl,
      // subjectUrl: subjects.url || "",
      // topicUrl: topics.url || "",
      // subjectTitle: subjects.title || "",
      // topicTitle: topics.title || "",
      updatedAt: videos.updatedAt,
    })
    .from(videos)
    .leftJoin(videoLessons, eq(videos.id, videoLessons.videoId))
    .leftJoin(lessons, eq(lessons.id, videoLessons.lessonId))
    .leftJoin(topics, eq(topics.id, lessons.topicId))
    .leftJoin(subjects, eq(subjects.id, topics.subjectId));
export async function GET(req: NextRequest) {
  try {
    const videoUrl = req.nextUrl.pathname?.split("/")[4];
    // req.nextUrl.searchParams
    let videoQuery;
    if (videoUrl) {
      // get all video by videoUrl
      videoQuery = getBaseQuery()
        .where(
          and(eq(videos.videoUrl, String(videoUrl)), eq(videos.active, true)),
        )
        .groupBy(videos.id);
    } else {
      return NextResponse.json({
        message: "Error fetching video",
      });
    }
    // execute the query
    const video = await videoQuery;

    return NextResponse.json({ video: video[0] });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error fetching video",
      error,
    });
  }
}
