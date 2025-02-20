"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Video, Book, Lightbulb, Award } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100 px-4 py-8">
      <h2 className="mb-8 animate-pulse  text-center text-4xl font-bold text-indigo-700">
        Explore Amazing Science Content
      </h2>

      {/* Featured Video */}
      <section className="mb-12 rounded-xl bg-yellow-200 p-6 shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-orange-600">
          Featured Video: The Water Cycle
        </h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/KM-59ljA4Bs"
            title="The Water Cycle"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Fun Experiment */}
      <section className="mb-12">
        <Card className="  bg-gradient-to-b from-green-100 to-red-100 transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-blue-700">
              <Lightbulb className="mr-2 size-8 text-yellow-500" />
              Fun Experiment: Make a Volcano Erupt!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Volcano experiment"
                  width={300}
                  height={200}
                  className="rounded-lg border-4 border-red-400"
                />
              </div>
              <div className="rounded-lg bg-white bg-opacity-70 p-4">
                <h4 className="mb-2 font-semibold text-blue-700">
                  You&apos;ll need:
                </h4>
                <ul className="mb-4 list-inside list-disc text-purple-700">
                  <li>Empty plastic bottle</li>
                  <li>Baking soda</li>
                  <li>Vinegar</li>
                  <li>Red food coloring</li>
                  <li>Dish soap</li>
                </ul>
                <Button className="bg-red-500 text-white hover:bg-red-600">
                  View Full Instructions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Science Quiz */}
      <section className="mb-12">
        <Card className="border-4 border-yellow-300 bg-gradient-to-r from-pink-200 to-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-blue-700">
              {/* <Brain className="mr-2 size-8 text-purple-500" /> */}
              Quick Quiz: Test Your Knowledge!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-lg font-semibold text-green-700">
              What&apos;s the largest planet in our solar system?
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="bg-red-300 font-bold text-white hover:bg-red-400"
              >
                Mars
              </Button>
              <Button
                variant="outline"
                className="bg-blue-300 font-bold text-white hover:bg-blue-400"
              >
                Jupiter
              </Button>
              <Button
                variant="outline"
                className="bg-green-300 font-bold text-white hover:bg-green-400"
              >
                Saturn
              </Button>
              <Button
                variant="outline"
                className="bg-purple-300 font-bold text-white hover:bg-purple-400"
              >
                Neptune
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Science Facts */}
      <section className="mb-12">
        <h3 className="mb-4 text-2xl font-semibold text-pink-600">
          Amazing Science Facts
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              fact: "A teaspoonful of neutron star would weigh about 6 billion tons!",
              color: "bg-blue-300",
            },
            {
              fact: "Bananas are radioactive because they contain potassium!",
              color: "bg-yellow-300",
            },
            {
              fact: "A day on Venus is longer than its year!",
              color: "bg-green-300",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className={`${item.color} transition-transform duration-200 hover:scale-105`}
            >
              <CardContent className="p-4">
                <Star className="mb-2 size-8 text-yellow-500" />
                <p className="font-semibold text-purple-700">{item.fact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="mb-12">
        <h3 className="mb-4 text-2xl font-semibold text-green-600">
          Latest Science Articles
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Why Do Leaves Change Color?",
              image: "/placeholder.svg?height=150&width=250",
              category: "Biology",
              color: "bg-green-200",
            },
            {
              title: "How Do Airplanes Fly?",
              image: "/placeholder.svg?height=150&width=250",
              category: "Physics",
              color: "bg-blue-200",
            },
            {
              title: "What Makes Popcorn Pop?",
              image: "/placeholder.svg?height=150&width=250",
              category: "Chemistry",
              color: "bg-yellow-200",
            },
          ].map((article, index) => (
            <Card
              key={index}
              className={`${article.color} border-4 border-purple-300`}
            >
              <Image
                src={article.image}
                alt={article.title}
                width={250}
                height={150}
                className="w-full rounded-t-lg"
              />
              <CardContent className="p-4">
                <Badge className="mb-2 bg-pink-400 text-white">
                  {article.category}
                </Badge>
                <h4 className="font-semibold text-blue-700">{article.title}</h4>
                <Button
                  variant="link"
                  className="p-0 text-purple-600 hover:text-purple-800"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Science Club */}
      <section>
        <Card className="border-4 border-yellow-300 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-2xl font-bold">
                  Join the Science Explorers Club!
                </h3>
                <p className="mb-4">
                  Get access to exclusive content, special experiments, and earn
                  cool badges!
                </p>
                <Button
                  variant="secondary"
                  className="bg-yellow-400 font-bold text-purple-700 hover:bg-yellow-500"
                >
                  Sign Up Now
                </Button>
              </div>
              <Award className="size-24 text-yellow-300" />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
