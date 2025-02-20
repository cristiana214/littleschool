/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import { useVideos } from "@/hooks/query/useVideos";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";

export default function OtherVideos({ videoUrl }: { videoUrl?: string }) {
  const { data, isLoading, error } = useVideos({
    pageSize: 4,
  });
  if (isLoading)
    return (
      <div className="animate-pulse">
        <div className="mb-4 h-6 rounded bg-gray-300" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="h-48 rounded bg-gray-300" />
          ))}
        </div>
      </div>
    );
  if (error) return <div>Something happened</div>;
  const videos = data?.videos;
  return (
    <section>
      <h2 className="mx-3 mb-4 text-2xl font-semibold">Other Video Topics</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {videos
          ?.filter((video) => video.videoUrl !== videoUrl)
          ?.map((video, index) => (
            <Card key={index} className="group m-4">
              <CardContent className="md:!p-3">
                <Link href={`/videos/${video.videoUrl}/${video.url}/`}>
                  <h2 className="mb-2 mt-4  text-center text-lg font-bold hover:font-extrabold group-hover:text-amber-400 ">
                    {video.title}
                  </h2>

                  <Image
                    src={
                      `https://i.ytimg.com/vi/${video.videoUrl}/mqdefault.jpg` ||
                      "/placeholder.svg"
                    }
                    alt={video.title}
                    width="300"
                    height="250"
                    className="mx-auto aspect-video rounded-md group-hover:shadow-xl"
                  />
                </Link>
              </CardContent>
            </Card>
          ))}
      </div>
    </section>
  );
}
