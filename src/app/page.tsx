import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

import HomeTop from "@/components/home/home-top";
import HomeCategory from "@/components/home/home-category";
import HomeFeatures from "@/components/home/home-features";
import Facts from "@/components/home/facts";
// import LatestContent from "@/components/home/latest-contents";

export default function IndexPage() {
  return (
    <section className=" container mx-auto mt-1 grid w-full max-w-6xl gap-6 ">
      <title>{`${siteConfig.title}| Little School`}</title>
      <div className="w-full  p-4 ">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl">
          {siteConfig.title}
        </h1>
        <p className="ml-2 mt-4 max-w-[900px]   text-lg text-muted-foreground ">
          {siteConfig.description}
        </p>
      </div>

      <HomeTop />
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

      <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-100 to-green-100">
        <main className="grow">
          <HomeCategory />
          <HomeFeatures />
        </main>
      </div>

      {/* <ListCategories /> */}
      {/* <ListProducts type="home" /> */}
    </section>
  );
}
