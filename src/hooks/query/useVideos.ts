// https://tanstack.com/query/v5/docs/framework/react/typescript#type-inference
// import necessary dependencies from React Query and custom modules
import { useQuery } from "@tanstack/react-query";
import type { VideosQueryParams, VideosApiResponse } from "@/types/v1/query"; // importing types for query parameters and API response
import { fetchVideos } from "@/lib/fetch/videos";

export const useVideos = (queryParams: VideosQueryParams) =>
  useQuery<VideosApiResponse, Error>({
    queryKey: ["videos", queryParams], // unique key for caching the query result
    queryFn: () => fetchVideos(queryParams),
  });
