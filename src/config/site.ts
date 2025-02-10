export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Little School",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit lore, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  title: "Little School",
  tagLine: "Your product tagline here! edit me in src/config/site.ts",
  footerRights: "&copy; 2025 Little School by cristiana. All rights reserved.",
  mainNav: [
    {
      title: "Science",
      href: "/science/",
    },
    {
      title: "Math",
      href: "/math/",
    },

    {
      title: "About Us",
      href: "/about/",
    },
  ],
  subNav: [
    {
      title: "Quiz",
      href: "/quiz/",
    },
    {
      title: "Natural Science",
      href: "/natural-science/",
    },

    {
      title: "About Us",
      href: "/about/",
    },
  ],
};
