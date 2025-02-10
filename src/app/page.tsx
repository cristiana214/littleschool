import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

import ListCategories from "@/components/list-categories";
import ListProducts from "@/components/list-products";

export default function IndexPage() {
  return (
    <section className="container mx-auto grid w-full max-w-6xl  gap-6 pb-8 pt-6 ">
      <title>{siteConfig.title}</title>
      <div className="mx-auto w-full py-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl">
          {siteConfig.title}
        </h1>
        <p className="mt-4 max-w-[700px] text-lg text-muted-foreground ">
          {siteConfig.description}
        </p>
      </div>

      <h2 className="text-1xl mt-8 font-semibold leading-tight tracking-tighter sm:text-3xl">
        {siteConfig.tagLine}
      </h2>

      <div className="flex flex-wrap gap-4">
        <Link href="/category/fruits/">
          <Button className="bg-green-400 hover:font-semibold" rel="noreferrer">
            Fruits
          </Button>
        </Link>

        <Link href="/category/fruit-vegetables/">
          <Button className="bg-green-600 hover:font-semibold" rel="noreferrer">
            Vegetables
          </Button>
        </Link>
        <Link href="/category/coconuts/">
          <Button className="bg-green-700 hover:font-semibold" rel="noreferrer">
            Fresh Coconuts
          </Button>
        </Link>
      </div>
      <ListCategories />
      <ListProducts type="home" />
    </section>
  );
}
