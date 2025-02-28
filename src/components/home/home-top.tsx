"use client";

import { useVideos } from "@/hooks/query/useVideos";
import Link from "next/link";
import Video from "@/components/reusable/video-player";
import HomeTopSkeleton from "@/components/loading/homeTop";

export default function HomeTop() {
  const { data, isLoading, error } = useVideos({
    pageSize: 10,
  });
  if (isLoading) return <HomeTopSkeleton />;
  if (error) return <div>Something happened</div>;
  const videos = data?.videos;

  return (
    <section className="bg-blue-500 py-12 text-zinc-100 xl:rounded-sm">
      <div className="container mx-auto px-4">
        <Link href="/videos/" title="Little School Latest Videos">
          <h2 className="ml-4 justify-start font-maintitle  text-3xl font-bold hover:text-amber-300 hover:drop-shadow-xl">
            Watch latest videos
          </h2>
        </Link>
        <div className="m-4 flex flex-col gap-16">
          {/* Section 1 - Video on left, description on right */}
          {videos?.map((video, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl">
                  <Video
                    src={video.videoUrl}
                    priority={index === 0}
                    maxRes={index !== 0}
                  />
                </div>
              </div>
              <div className="flex w-full flex-col justify-center md:w-1/2">
                <Link
                  href={`/videos/${video.videoUrl}/${video.url}/`}
                  title={video.title}
                >
                  <h2 className="mb-4  font-maintitle text-2xl font-bold hover:font-extrabold hover:text-amber-300  hover:drop-shadow-xl">
                    {video.title}
                  </h2>
                </Link>
                <p className="group font-maindesc text-lg">
                  <span className="  font-normal drop-shadow-sm group-hover:animate-pulse">
                    {video.description?.split("?")[0]}
                  </span>{" "}
                  {video.description?.split("?")[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
