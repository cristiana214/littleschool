"use client";

import OtherVideos from "@/components/home/popular-topics";
import Video from "@/components/reusable/player";

export default function Videos() {
  return (
    <section className="container mx-auto grid w-full max-w-6xl  gap-6 pb-8 pt-6 ">
      <section className="bg-blue-500 py-12 text-white">
        <div className="container mx-auto px-4">
          {/* <div className="space-y-8"> */}
          <title> Little School Videos!</title>
          <h1 className="text-center text-4xl font-bold">
            Little School Videos!
          </h1>
          <h2 className="mb-4 mt-3 justify-self-center text-2xl font-semibold">
            Featured Video
          </h2>
          <div className="relative aspect-video">
            <div className="w-full justify-self-center md:w-3/4">
              <Video src="vUpG4NL7R_k" maxRes />
            </div>
          </div>
        </div>
      </section>
      <OtherVideos videoUrl="vUpG4NL7R_k" />
    </section>
  );
}
