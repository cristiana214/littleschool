/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, CardContent } from "@/components/ui/card";
import { Video, Award, Lightbulb, BookOpenCheck } from "lucide-react";

export default function HomeFeatures() {
  return (
    <section className="bg-blue-100 py-16 lg:rounded-b-sm ">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center  text-3xl font-bold drop-shadow-lg">
          Fun Ways to Learn
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Video,
              title: "Watch Videos",
              description: "Learn through fun and engaging videos",
            },
            {
              icon: Lightbulb,
              title: "Generate Quizzes",
              description:
                "Create quizzes for practice or share it to the students",
            },
            {
              icon: BookOpenCheck,
              title: "Study Content",
              description:
                "Create customize study content,playlist and share it to the students",
            },
            {
              icon: Award,
              title: "Take Quizzes",
              description:
                "Test your knowledge with interactive quizzes & collect badges as you learn and achieve",
            },
          ].map((item, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6">
                <item.icon className="mb-4 size-12 text-blue-500" />
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-center font-subdesc  text-gray-600">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
