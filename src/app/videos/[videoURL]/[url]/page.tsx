/* eslint-disable react/no-unstable-nested-components */

import VideoContent from "@/components/videos/video-content";

export default function VideoPage({
  params,
}: {
  params: { videoURL?: string };
}) {
  return <VideoContent videoUrl={params.videoURL} />;
}
