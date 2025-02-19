// https://tanstack.com/query/v5/docs/framework/react/typescript#type-inference

// import necessary dependencies from React Query and custom modules
import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios"; // custom axios instance
import type { VideoQueryParams, VideoApiResponse } from "@/types/v1/query";

const fetchVideo = async (
  queryParams: VideoQueryParams,
): Promise<VideoApiResponse> => {
  // returns a Promise of type VideoApiResponse
  const response: VideoApiResponse = await axios.get(
    `/api/v1/videos/${queryParams?.videoUrl}`,
  );
  return response;
};

export const useVideo = (queryParams: VideoQueryParams) =>
  useQuery<VideoApiResponse, Error>({
    queryKey: ["video", queryParams], // unique key for caching the query result
    queryFn: () => fetchVideo(queryParams), // query function that fetches video based on queryParams
  });
