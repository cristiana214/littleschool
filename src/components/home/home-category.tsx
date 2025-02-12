/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  // Atom,
  Leaf,
  Rocket,
  Zap,
} from "lucide-react";

export default function HomeCategory() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Explore Science Categories
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Leaf, title: "Biology", color: "bg-green-500" },
            { icon: Rocket, title: "Physics", color: "bg-purple-500" },
            // { icon: Flask, title: "Chemistry", color: "bg-red-500" },
            { icon: Zap, title: "Energy", color: "bg-yellow-500" },
          ].map((category, index) => (
            <Card
              key={index}
              className={`${category.color} text-white transition-shadow hover:shadow-lg`}
            >
              <CardContent className="flex flex-col items-center p-6">
                <category.icon className="mb-4 size-16" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
