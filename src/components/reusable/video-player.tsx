/* eslint-disable import/no-extraneous-dependencies */
import { useState, useRef } from "react";
import Image from "next/image";
import { LucidePlay } from "lucide-react";
import ReactPlayer from "react-player/youtube";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let currentlyPlaying: any = null;

interface Props {
  priority?: boolean;
  src: string;
  maxRes?: boolean;
}

const VideoThumb = ({
  src,
  onClick,
  maxRes,
  priority,
}: {
  src: string;
  onClick: () => void;
  maxRes: boolean;
  priority?: boolean;
}) => (
  <div className="flex size-full cursor-pointer items-center justify-center">
    <LucidePlay
      className="absolute z-[1] h-12 w-16 rounded-2xl bg-black/70 fill-white px-6 py-4 hover:bg-green-500"
      onClick={onClick}
    />
    <Image
      className="opacity-90"
      loader={({ src: imgSrc }) => imgSrc}
      src={`https://i.ytimg.com/vi/${src}/${
        maxRes ? "maxresdefault" : "sddefault"
      }.jpg`}
      alt="video"
      priority={priority}
      layout="fill"
      placeholder="blur"
      blurDataURL="data:image/png;base64,..."
      objectFit="cover"
      onClick={onClick}
    />
  </div>
);

const VideoPlayer = ({ src, maxRes = false, priority = false }: Props) => {
  const [falsyField, setFalsyField] = useState<boolean>(false);
  const playerRef = useRef<ReactPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (currentlyPlaying && currentlyPlaying !== playerRef.current) {
      currentlyPlaying?.getInternalPlayer()?.pauseVideo(); // Pause previous video
    }
    currentlyPlaying = playerRef.current;
    setIsPlaying(true);
    setFalsyField(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="size-full rounded-lg">
      {falsyField ? (
        <ReactPlayer
          ref={playerRef}
          url={`https://www.youtube.com/watch?v=${src}`}
          controls
          ads // Enable ads
          playing={isPlaying}
          onPlay={handlePlay}
          onPause={handlePause}
          width="100%"
          height="100%"
          config={{
            playerVars: {
              modestbranding: 1, // Removes YouTube logo
              rel: 0, // Prevents showing related videos
              showinfo: 1, // Hides video title
              fs: 1, // Disables fullscreen button
              iv_load_policy: 3, // Hides annotations
            },
          }}
        />
      ) : (
        <div className="relative aspect-video size-full">
          <VideoThumb
            src={src}
            onClick={handlePlay}
            maxRes={maxRes}
            priority={priority}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
