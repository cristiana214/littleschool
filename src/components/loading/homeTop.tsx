const HomeTopSkeleton = () => (
  <section className="bg-blue-500 py-12 text-white">
    <div className="container mx-auto px-4">
      <div className="ml-4 justify-start text-3xl font-bold">
        <div className="h-8 w-48 animate-pulse bg-gray-300" />
      </div>
      <div className="m-4 flex flex-col gap-16">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="w-full md:w-1/2">
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <div className="size-full animate-pulse bg-gray-300" />
              </div>
            </div>
            <div className="flex w-full flex-col justify-center md:w-1/2">
              <div className="mb-4 h-6 w-3/4 animate-pulse bg-gray-300" />
              <div className="h-4 w-full animate-pulse bg-gray-300" />
              <div className="mt-2 h-4 w-5/6 animate-pulse bg-gray-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default HomeTopSkeleton;
