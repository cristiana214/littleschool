import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteHeaderLogin } from "./site-header-login";

export function SiteHeader() {
  return (
    <header className=" mx-auto flex w-full  bg-background shadow-sm hover:shadow-md">
      <div className="xs:justify-between container  flex h-16 max-w-6xl  items-center space-x-4 ">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end px-2 ">
          <nav className="flex items-center space-x-1">
            {/* <ThemeToggle /> */}
            <SiteHeaderLogin />
          </nav>
        </div>
      </div>
    </header>
  );
}
