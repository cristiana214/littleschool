import { siteConfig } from "@/config/site";
import { Star } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";

export default function Facts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="mb-4 font-maintitle text-2xl font-semibold ">
          Science Facts
        </h3>
        <div className="grid grid-cols-1 gap-4  md:grid-cols-3">
          {[
            {
              fact: "A teaspoonful of neutron star would weigh about 6 billion tons!",
              color: "bg-orange-300",
            },
            {
              fact: "Bananas are radioactive because they contain potassium!",
              color: "bg-yellow-300",
            },
            {
              fact: "A day on Venus is longer than its year!",
              color: "bg-rose-200",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className={`${item.color} shadow-md transition-transform duration-200 hover:scale-105`}
            >
              <CardContent className="p-4">
                <Star className="mb-2 size-8 text-sky-500" />
                <p className="text-sky-850 font-subdesc font-normal">
                  {item.fact}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
