/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function LatestContent() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
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
              className={`${article.color} border-1  shadow-md`}
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
