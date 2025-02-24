/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getDarkerShade } from "@/lib/helper/color-help";

interface SubTopic {
  title: string;
  image: string;
  color: string;
  description?: string;
}

interface SubjectLayoutProps {
  subject: string;
  subTopics: SubTopic[];
  primaryColor: string;
  secondaryColor: string;
}

export default function SubjectLayout({
  subject,
  subTopics,
  primaryColor,
  secondaryColor,
}: SubjectLayoutProps) {
  return (
    <div
      className={`container mx-auto mt-8 grid w-full max-w-6xl gap-6  rounded-sm pb-8 pt-6  ${primaryColor}`}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className={`mb-8 text-center text-5xl font-bold ${secondaryColor}`}>
          {subject}
        </h1>

        <section className="mb-12">
          <h2 className={`mb-4 text-3xl font-semibold ${secondaryColor}`}>
            Explore {subject}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subTopics.map((topic, index) => (
              <Card
                key={index}
                className={`transition ${topic.color} duration-300 hover:scale-105 ${topic.color}`}
              >
                <CardHeader>
                  <CardTitle className={`text-xl font-bold ${secondaryColor}`}>
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* <Image
                    src={topic.image || "/placeholder.svg"}
                    alt={topic.title}
                    width={300}
                    height={200}
                    className="mb-4 rounded-md"
                  /> */}
                  <p className={`mb-4 `}>
                    {topic.description || `Learn more about ${topic.title}`}
                  </p>
                  <Button
                    asChild
                    className={`w-full ${getDarkerShade(topic.color)}`}
                  >
                    <Link href="#">Explore</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {subject === "Science" ? (
          <section className="mb-12">
            <h2 className={`mb-4 text-3xl font-semibold ${secondaryColor}`}>
              Latest Video
            </h2>
            <Card
              className={`${primaryColor} transition duration-300 hover:scale-105`}
            >
              <CardContent className="p-4">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="https://img.youtube.com/vi/dXfJbp4_M1Q/maxresdefault.jpg"
                    alt="Latest video"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className={`mt-4 text-xl font-semibold ${secondaryColor}`}>
                  Exciting {subject} Adventure
                </h3>
                <p className={`mt-2 ${secondaryColor}`}>
                  Join us on learning {subject}!
                </p>
                <Button className="mt-4">Watch Now</Button>
              </CardContent>
            </Card>
          </section>
        ) : null}

        <section>
          <h2 className={`mb-4 text-3xl font-semibold ${secondaryColor}`}>
            Quiz
          </h2>
          <Card
            className={`${primaryColor} transition duration-300 hover:scale-105`}
          >
            <CardContent className="p-4">
              <h3 className={`text-xl font-semibold ${secondaryColor}`}>
                Test Your {subject} Knowledge!
              </h3>
              <p className={`mt-2 ${secondaryColor}`}>
                Are you ready for a {subject} challenge?
              </p>
              <Button asChild className="mt-4">
                <Link href={`/${subject.toLowerCase()}/quiz`}>Start Quiz</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
