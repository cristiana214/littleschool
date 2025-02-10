export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Little School",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit lore, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  title: "Little School",
  tagLine: "Learn, have fun and test your knowledge with quizzes!",
  footerRights: "&copy; 2025 Little School by cristiana. All rights reserved.",
  mainNav: [
    {
      title: "Science",
      href: "/science/",
      color: "text-orange-500",
    },
    {
      title: "Math",
      href: "/math/",
      color: "text-blue-500",
    },
    {
      title: "Coding",
      href: "/coding/",
      color: "text-green-400",
    },

    {
      title: "About Us",
      href: "/about/",
      color: "text-red-400",
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
