"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeaderExtra() {
  return (
    <Link
      href="https://www.youtube.com/@littleschooltv/posts"
      target="_blank"
      title="Check our latest quiz in Youtube"
    >
      <Button className="px-2 py-1 text-sm md:px-4 md:py-2 md:text-base">
        YT Quiz
      </Button>
    </Link>
  );
}
