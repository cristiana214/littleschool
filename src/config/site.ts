export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Little School",
  description:
    "Students can learn and have fun, teachers can create quizzes and test their students, and parents can support their kids’ learning in an engaging way.",
  title: "All in one Learning Tool for Students, Teachers and Parents",
  tagLine:
    "Explore, learn, have fun and test your knowledge with quizzes and cool facts!",
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
      title: "Videos",
      href: "/videos/",
      color: "text-amber-400",
    },

    // {
    //   title: "About Us",
    //   href: "/about/",
    //   color: "text-red-400",
    // },
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
