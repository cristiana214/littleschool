import SubjectLayout from "@/components/subject-layout";

export default function SciencePage() {
  const scienceTopics = [
    {
      title: "Space Exploration",
      image: "/science/space.webp?height=200&width=300",
      color: "bg-purple-100",
    },
    {
      title: "Animal Kingdom",
      image: "/science/animal-kingdom.webp?height=200&width=300",
      color: "bg-green-100",
    },
    {
      title: "Human Body",
      image: "/science/body.webp?height=200&width=300",
      color: "bg-pink-100",
    },
    {
      title: "Plant Life",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-yellow-100",
    },
    {
      title: "Weather and Climate",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-blue-100",
    },
    {
      title: "Energy and Matter",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-red-100",
    },
  ];

  return (
    <SubjectLayout
      subject="Science"
      subTopics={scienceTopics}
      primaryColor="bg-blue-50"
      secondaryColor="text-blue-800"
    />
  );
}
