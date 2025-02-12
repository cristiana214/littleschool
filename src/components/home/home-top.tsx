import { siteConfig } from "@/config/site";

export default function HomeTop() {
  return (
    <section className="bg-blue-500 py-12 text-white">
      <div className="container mx-auto px-4">
        {/* <h1 className="mb-12 mt-2 justify-start text-center text-4xl font-bold">
         {siteConfig.title} 
        </h1> */}
        <h2 className=" ml-4 justify-start  text-3xl font-bold">
          Watch latest videos
        </h2>
        <div className="m-4 flex flex-col gap-16">
          {/* Section 1 - Video on left, description on right */}
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/wT3oU30zF9I"
                  title="Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="size-full"
                />
              </div>
            </div>
            <div className=" flex w-full flex-col justify-center md:w-1/2">
              <h2 className="mb-4 text-2xl font-bold hover:font-extrabold hover:text-amber-300 ">
                Types of Force
              </h2>
              <p className="group text-lg">
                <span className="group-hover:animate-pulse">
                  Did you know that whenever you kick a ball, open a door, or
                  pull a wagon, you are using force?
                </span>{" "}
                Learn more about Gravity Friction, Magnetic Force, Applied
                Force, Air Resistance, How do we measure force? Why is force
                important?
              </p>
            </div>
          </div>

          {/* Section 2 - Video on right, description on left */}
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse">
            <div className="w-full md:w-1/2">
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/eqY3NUrMbuo"
                  title="Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="size-full"
                />
              </div>
            </div>
            <div className="flex w-full flex-col justify-center md:w-1/2">
              <h2 className="text-2xl font-bold hover:font-extrabold hover:text-amber-300 ">
                What are Amphibians?
              </h2>
              <p className="group text-lg">
                <span className="group-hover:animate-pulse">
                  Did you know that the word “amphibian” means “double
                  life”?{" "}
                </span>
                That&apos;s because they start life as water creatures and grow
                into land animals!
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-center gap-8 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/IwfFTQ1eHYI"
                  title="Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="size-full"
                />
              </div>
            </div>
            <div className="flex w-full flex-col justify-center md:w-1/2">
              <h2 className="mb-4 text-2xl font-bold hover:font-extrabold hover:text-amber-300">
                Pollinators
              </h2>
              <p className="group text-lg">
                <span className="group-hover:animate-pulse">
                  {" "}
                  Did you know that pollinators like bees, butterflies, and bats
                  help plants grow fruits, vegetables, and flowers?{" "}
                </span>
                Without them, we wouldn&apos;t have many of our favorite foods
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
