import type { VideosQueryParams, VideosApiResponse } from "@/types/v1/query";

import { axios } from "@/lib/axios";
/**
 * function to fetch videos data from API.
 * query parameters (such as lessonUrl, pageNum, etc.) as input and
 * returns a promise that resolves to videos API response.
 *
 * @param queryParams -  parameters to be used in the query (e.g., lessonUrl, limit
 * @returns Promise<VideosApiResponse> -  response from the API with videos data.
 */
export const fetchVideos1 = async (
  queryParams: VideosQueryParams, // accepts query parameters of type
): Promise<VideosApiResponse> => {
  const response: VideosApiResponse = await axios.get(`/api/v1/videos/`, {
    params: {
      lessonUrl: queryParams?.lessonUrl,
      topicUrl: queryParams?.topicUrl,
      subjectUrl: queryParams?.subjectUrl,

      pageNum: queryParams?.pageNum,
      pageSize: queryParams?.pageSize,
    },
  });
  return response;
};

export async function fetchVideos(
  queryParams: VideosQueryParams,
): Promise<VideosApiResponse> {
  const response: VideosApiResponse = await axios.get(`/api/v1/videos/`, {
    params: {
      lessonUrl: queryParams?.lessonUrl,
      topicUrl: queryParams?.topicUrl,
      subjectUrl: queryParams?.subjectUrl,

      pageNum: queryParams?.pageNum,
      pageSize: queryParams?.pageSize,
    },
  });
  return response;
}
