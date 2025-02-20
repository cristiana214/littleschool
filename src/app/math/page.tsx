import SubjectLayout from "@/components/subject-layout";

export default function MathPage() {
  const mathTopics = [
    {
      title: "Basic Addition",
      image: "/math/addition.webp?height=200&width=300",
      color: "bg-orange-100",
    },
    {
      title: "Subtraction",
      image: "/math/addition.webp?height=200&width=300",
      color: "bg-lime-100",
    },
    {
      title: "Multiplication",
      image: "/math/multiplication.webp?height=200&width=300",
      color: "bg-blue-100",
    },
    {
      title: "Division",
      image: "/math/multiplication.webp?height=200&width=300",
      color: "bg-pink-100",
    },
    {
      title: "Fractions and Decimals",
      image: "/math/fractions.webp?height=200&width=300",
      color: "bg-green-100",
    },
    {
      title: "Counting Money",
      image: "/math/time.webp?height=200&width=300",
      color: "bg-yellow-100",
    },
    {
      title: "Geometry Shapes and Patterns",
      image: "/math/geometry.webp?height=200&width=300",
      color: "bg-red-100",
    },
    {
      title: "Telling Time",
      image: "/math/time.webp?height=200&width=300",
      color: "bg-yellow-100",
    },
    {
      title: "Math Puzzles and Riddles",
      image: "/math/puzzles.webp?height=200&width=300",
      color: "bg-purple-100",
    },
    {
      title: "Introduction to Algebra",
      image: "/math/algebra.webp?height=200&width=300",
      color: "bg-teal-100",
    },
    {
      title: "Measurement and Units",
      image: "/math/measurement.webp?height=200&width=300",
      color: "bg-gray-100",
    },
  ];

  return (
    <>
      <title>Math for kids | Little School</title>
      <SubjectLayout
        subject="Math"
        subTopics={mathTopics}
        primaryColor="bg-green-50"
        secondaryColor="text-green-800"
      />
    </>
  );
}
