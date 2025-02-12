import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Videos() {
  const topics = [
    {
      title: "Space Exploration",
      image: "/placeholder.svg?height=200&width=300",
    },
    { title: "Animal Kingdom", image: "/placeholder.svg?height=200&width=300" },
    { title: "Human Body", image: "/placeholder.svg?height=200&width=300" },
    { title: "Plant Life", image: "/placeholder.svg?height=200&width=300" },
  ];

  return (
    <section className="container mx-auto grid w-full max-w-6xl  gap-6 pb-8 pt-6 ">
      <section className="bg-blue-500 py-12 text-white">
        <div className="container mx-auto px-4">
          {/* <div className="space-y-8"> */}
          <h1 className="text-center text-4xl font-bold">
            Little School Videos!
          </h1>
          <h2 className="mb-4 mt-8 justify-self-center text-2xl font-semibold">
            Featured Video
          </h2>
          <div className="relative aspect-video">
            {/* <Image
              src="/placeholder.svg?height=400&width=700"
              alt="Featured science video for kids"
              layout="fill"
              objectFit="cover"
            /> */}
            <div className="w-full justify-self-center md:w-3/4">
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/vUpG4NL7R_k"
                  title="Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="size-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Popular Topics</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={topic.image || "/placeholder.svg"}
                  alt={topic.title}
                  width={300}
                  height={200}
                  className="rounded-md"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}
