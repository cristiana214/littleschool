/* eslint-disable import/no-extraneous-dependencies */
import "plyr-react/plyr.css";
import { useState, useRef } from "react";
import Image from "next/image";
import { LucidePlay } from "lucide-react";
import ReactPlayer from "react-player/youtube";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let currentlyPlaying: any = null;

interface Props {
  src: string;
  type?: "trailer" | "gameplay";
  maxRes?: boolean;
}

const VideoThumb = ({
  src,
  type,
  onClick,
  maxRes,
}: {
  src: string;
  type?: Props["type"];
  onClick: () => void;
  maxRes: boolean;
}) => (
  <div className="flex size-full cursor-pointer items-center justify-center">
    {type && (
      <div className="absolute bottom-0 left-0 z-[2] w-1/2 bg-gradient-to-r from-black via-black/70 to-transparent p-2 text-sm uppercase text-slate-100 sm:px-4 sm:py-2 sm:text-base">
        {type}
      </div>
    )}
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
      layout="fill"
      objectFit="cover"
      onClick={onClick}
    />
  </div>
);

const Video = ({ src, type, maxRes = false }: Props) => {
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
            type={type}
            onClick={handlePlay}
            maxRes={maxRes}
          />
        </div>
      )}
    </div>
  );
};

export default Video;
