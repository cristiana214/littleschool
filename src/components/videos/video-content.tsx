"use client";

import OtherVideos from "@/components/home/popular-topics";
import VideoPlayer from "@/components/reusable/video-player";

import { useVideo } from "@/hooks/query/useVideo";

/* eslint-disable react/no-unstable-nested-components */

export default function VideoContent({ videoUrl }: { videoUrl?: string }) {
  const { data, isLoading, error } = useVideo({
    videoUrl: videoUrl || "",
  });
  if (isLoading)
    return (
      <section className="container mx-auto grid w-full max-w-6xl gap-6 pb-8 pt-6">
        <section className="bg-blue-500 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="animate-pulse space-y-8">
              <div className="mx-auto h-10 w-3/4 rounded bg-gray-300" />
              <div className="mx-auto h-6 w-1/2 rounded bg-gray-300" />
              <div className="relative aspect-video">
                <div className="w-full justify-self-center md:w-3/4">
                  <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-300 shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  if (error) return <div>Something happened</div>;
  const video = data?.video;

  return (
    <section className="container mx-auto grid w-full max-w-6xl  gap-6 pb-8 pt-6 ">
      <div className="bg-blue-500 py-12 text-white">
        <title>{`${video?.title} | Little School`}</title>
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold">{video?.title}</h1>
          <h2 className="mb-2 justify-self-center text-xl font-semibold">
            by Little School
          </h2>
          <div className="relative aspect-video">
            <div className="w-full justify-self-center md:w-3/4">
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl">
                {/* <iframe
                  src={`https://www.youtube.com/embed/${videoUrl}`}
                  title="Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="size-full"
                /> */}
                <VideoPlayer src={video?.videoUrl || ""} maxRes />
              </div>
              <div className="m-4 text-lg">{video?.description}</div>
            </div>
          </div>
        </div>
      </div>
      <OtherVideos videoUrl={videoUrl} />
    </section>
  );
}
