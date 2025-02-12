import SubjectLayout from "@/components/subject-layout";

export default function CodingPage() {
  const codingTopics = [
    {
      title: "Scratch Basics",
      image: "/coding/python.webp?height=200&width=300",
      color: "bg-orange-100",
    },
    {
      title: "Python for Kids",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-blue-100",
    },
    {
      title: "Web Design Fun",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-pink-100",
    },
    {
      title: "Game Development",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-purple-100",
    },
    {
      title: "Robotics Coding",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-green-100",
    },
    {
      title: "App Inventor",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-yellow-100",
    },
  ];

  return (
    <SubjectLayout
      subject="Coding"
      subTopics={codingTopics}
      primaryColor="bg-amber-50"
      secondaryColor="text-orange-800"
    />
  );
}
