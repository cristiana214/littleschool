// https://tanstack.com/query/v5/docs/framework/react/typescript#type-inference

// import necessary dependencies from React Query and custom modules
import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios"; // custom axios instance
import type { VideosQueryParams, VideosApiResponse } from "@/types/v1/query"; // importing types for query parameters and API response

/**
 * function to fetch videos data from API.
 * query parameters (such as lessonUrl, pageNum, etc.) as input and
 * returns a promise that resolves to videos API response.
 *
 * @param queryParams -  parameters to be used in the query (e.g., lessonUrl, limit
 * @returns Promise<VideosApiResponse> -  response from the API with videos data.
 */
const fetchVideos = async (
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

export const useVideos = (queryParams: VideosQueryParams) =>
  useQuery<VideosApiResponse, Error>({
    queryKey: ["videos", queryParams], // unique key for caching the query result
    queryFn: () => fetchVideos(queryParams),
  });
