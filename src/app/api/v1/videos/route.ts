import { db } from "@/drizzle/db";
import { eq } from "drizzle-orm";
import {
  lessons,
  subjects,
  topics,
  videos,
  videoLessons,
} from "@/drizzle/schema";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const getBaseQuery = () =>
  // select all videos
  db
    .select({
      id: videos.id,
      title: videos.title,
      content: videos.content,
      description: videos.description,
      url: videos.url,
      videoUrl: videos.videoUrl,
      // subjectUrl: subjects.url || "",
      // subjectTitle: subjects.title || "",
      // topicUrl: topics.url || "",
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
    const lessonUrl = req.nextUrl.searchParams.get("lessonUrl");
    const subjectUrl = req.nextUrl.searchParams.get("subjectUrl");
    const topicUrl = req.nextUrl.searchParams.get("topicUrl");
    const pageNum = Number(req.nextUrl.searchParams.get("pageNum")) || 1;
    const pageSize = Number(req.nextUrl.searchParams.get("pageSize")) || 3;
    const offset = (pageNum - 1) * pageSize;
    let videosQuery;
    if (lessonUrl) {
      // get all videos by lessonUrl
      videosQuery = getBaseQuery().where(eq(lessons.url, String(lessonUrl)));
    } else if (subjectUrl) {
      // get all videos by subjectUrl
      videosQuery = getBaseQuery().where(eq(subjects.url, String(subjectUrl)));
    } else if (topicUrl) {
      // get all videos by topicUrl
      videosQuery = getBaseQuery().where(eq(topics.url, String(topicUrl)));
    } else {
      // get all videos by id
      videosQuery = getBaseQuery()
        .limit(pageSize)
        .offset(offset)
        .groupBy(videos.id);
    }
    // execute the query
    const videosResult = await videosQuery;

    return NextResponse.json({ videos: videosResult });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error fetching videos",
      error,
    });
  }
}
