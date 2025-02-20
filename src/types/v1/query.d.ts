/* eslint-disable import/no-self-import */
import type { Video } from "@/types/v1/data";

// QueryParams

/**
 * Parameters for querying videos.
 */
export type VideosQueryParams = {
  /**
   * Filter by lesson URL.
   */
  lessonUrl?: string;

  /**
   * Filter by topic URL.
   */
  topicUrl?: string;

  /**
   * Filter by subject URL.
   */
  subjectUrl?: string;

  /**
   * The page number for pagination.
   */
  pageNum?: number;

  /**
   * The number of items per page for pagination.
   */
  pageSize?: number;
};

// ApiResponse
export type VideosApiResponse = {
  videos: Video[];
  totalCount?: number;
  totalPages?: number;
};

export type VideoQueryParams = {
  videoUrl?: string;
};
export type VideoApiResponse = {
  video: Video;
};
