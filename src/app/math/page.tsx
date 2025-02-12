import SubjectLayout from "@/components/subject-layout";

export default function MathPage() {
  const mathTopics = [
    {
      title: "Addition and Subtraction",
      image: "/math/add-sub.webp?height=200&width=300",
      color: "bg-green-100",
    },
    {
      title: "Multiplication and Division",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-yellow-100",
    },
    {
      title: "Fractions and Decimals",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-orange-100",
    },
    {
      title: "Geometry Shapes",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-purple-100",
    },
    {
      title: "Measurement Fun",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-pink-100",
    },
    {
      title: "Number Patterns",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-blue-100",
    },
  ];

  return (
    <SubjectLayout
      subject="Math"
      subTopics={mathTopics}
      primaryColor="bg-green-50"
      secondaryColor="text-green-800"
    />
  );
}
