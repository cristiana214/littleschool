import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

import HomeTop from "@/components/home/home-top";
import HomeCategory from "@/components/home/home-category";
import HomeFeatures from "@/components/home/home-features";
import Facts from "@/components/home/facts";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchVideos } from "@/lib/fetch/videos";
import type { VideosQueryParams } from "@/types/v1/query";
// import LatestContent from "@/components/home/latest-contents";
export default async function IndexPage() {
  // set ssr
  const queryClient = new QueryClient();
  const queryParams: VideosQueryParams = {
    pageSize: 10,
  };
  await queryClient.prefetchQuery({
    queryKey: ["videos", queryParams], // unique key for caching the query result
    queryFn: () => fetchVideos(queryParams),
  });

  return (
    <section className=" container mx-auto mt-1 grid w-full max-w-6xl gap-6 ">
      <title>{`${siteConfig.title} | Little School`}</title>
      <div className="mt-8 w-full   p-4">
        <h1 className="font-maintitle text-4xl font-bold tracking-tighter drop-shadow-xl sm:text-4xl">
          {siteConfig.title}
        </h1>
        <p className="ml-2 mt-4 max-w-[900px] font-subdesc   text-xl text-muted-foreground drop-shadow-lg ">
          {siteConfig.description}
        </p>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HomeTop />
      </HydrationBoundary>

      <Facts />
      {/* <LatestContent /> */}

      <div className="flex flex-wrap gap-4 px-4">
        <Link href="/coding/">
          <Button
            className="bg-blue-500 hover:animate-pulse hover:font-semibold"
            rel="noreferrer"
          >
            Coding
          </Button>
        </Link>
        <Link href="/math/">
          <Button className="bg-green-400 hover:font-semibold" rel="noreferrer">
            Math
          </Button>
        </Link>
        <Link href="/science/">
          <Button
            className="bg-orange-500 hover:font-semibold"
            rel="noreferrer"
          >
            Science
          </Button>
        </Link>
      </div>

      <div className="mb-8 flex min-h-screen flex-col ">
        <main className="grow ">
          <HomeCategory className="bg-gradient-to-b  from-blue-100 to-amber-100 lg:rounded-t-sm" />
          <HomeFeatures />
        </main>
      </div>

      {/* <ListCategories /> */}
      {/* <ListProducts type="home" /> */}
    </section>
  );
}
