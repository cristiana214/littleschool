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
      title: "What is HTML?",
      image: "/coding/html-intro.webp?height=200&width=300",
      color: "bg-yellow-200",
      description:
        "Learn how HTML is used to create web pages and display information online!",
    },
    {
      title: "Creating Your First Web Page",
      image: "/coding/html-first-page.webp?height=200&width=300",
      color: "bg-blue-200",
      description: "Write your first HTML file and open it in a browser!",
    },
    {
      title: "HTML Tags: The Building Blocks",
      image: "/coding/html-tags.webp?height=200&width=300",
      color: "bg-green-200",
      description:
        "Learn about different HTML tags that help structure your webpage!",
    },
    {
      title: "Headings and Paragraphs",
      image: "/coding/html-text.webp?height=200&width=300",
      color: "bg-red-200",
      description:
        "Use headings and paragraphs to organize your webpage content!",
    },
    {
      title: "Adding Images to a Web Page",
      image: "/coding/html-images.webp?height=200&width=300",
      color: "bg-orange-200",
      description:
        "Learn how to add pictures to make your webpage fun and colorful!",
    },
    {
      title: "Links: Connecting Web Pages",
      image: "/coding/html-links.webp?height=200&width=300",
      color: "bg-purple-200",
      description:
        "Make clickable links to navigate between different web pages!",
    },
    {
      title: "Lists: Organizing Information",
      image: "/coding/html-lists.webp?height=200&width=300",
      color: "bg-pink-200",
      description:
        "Use ordered and unordered lists to neatly display information!",
    },
    {
      title: "Tables: Displaying Data",
      image: "/coding/html-tables.webp?height=200&width=300",
      color: "bg-gray-200",
      description: "Create tables to display data in rows and columns!",
    },
    {
      title: "Forms: Getting User Input",
      image: "/coding/html-forms.webp?height=200&width=300",
      color: "bg-teal-200",
      description:
        "Learn how to create forms where users can enter text, select options, and more!",
    },
    {
      title: "Building a Simple Website",
      image: "/coding/html-website.webp?height=200&width=300",
      color: "bg-yellow-300",
      description:
        "Put everything together and create your first simple website!",
    },
    {
      title: "What is JavaScript?",
      image: "/coding/javascript-intro.webp?height=200&width=300",
      color: "bg-yellow-200",
      description:
        "Learn what JavaScript is and how it makes websites interactive!",
    },
    {
      title: "Writing Your First JavaScript Code",
      image: "/coding/js-first-code.webp?height=200&width=300",
      color: "bg-green-200",
      description:
        "Try writing a simple JavaScript program to show a message on the screen!",
    },
    {
      title: "Variables: Storing Information",
      image: "/coding/js-variables.webp?height=200&width=300",
      color: "bg-blue-200",
      description:
        "Learn how to store names, numbers, and more using variables!",
    },
    {
      title: "Functions: Making Reusable Code",
      image: "/coding/js-functions.webp?height=200&width=300",
      color: "bg-purple-200",
      description:
        "Write functions to reuse your code and make programs shorter!",
    },
    {
      title: "Loops: Making Things Repeat",
      image: "/coding/js-loops.webp?height=200&width=300",
      color: "bg-orange-200",
      description:
        "Use loops to make your program repeat actions automatically!",
    },
    {
      title: "If-Else: Making Decisions",
      image: "/coding/js-if-else.webp?height=200&width=300",
      color: "bg-red-200",
      description:
        "Tell your program to do different things based on conditions!",
    },
    {
      title: "Arrays: Storing Multiple Items",
      image: "/coding/js-arrays.webp?height=200&width=300",
      color: "bg-pink-200",
      description:
        "Learn how to store a list of items like names, numbers, or colors!",
    },
    {
      title: "Objects: Grouping Information",
      image: "/coding/js-objects.webp?height=200&width=300",
      color: "bg-gray-200",
      description:
        "Use objects to organize related data, like a character in a game!",
    },
    {
      title: "Events: Making Websites Interactive",
      image: "/coding/js-events.webp?height=200&width=300",
      color: "bg-blue-300",
      description:
        "Make your webpage react when a button is clicked or a key is pressed!",
    },
    {
      title: "Drawing with JavaScript",
      image: "/coding/js-drawing.webp?height=200&width=300",
      color: "bg-teal-200",
      description:
        "Use JavaScript to draw shapes and create animations on a webpage!",
    },
    {
      title: "Building a Simple Game",
      image: "/coding/js-game.webp?height=200&width=300",
      color: "bg-yellow-300",
      description:
        "Put everything together and create your first simple game with JavaScript!",
    },
  ];

  return (
    <>
      <title>Coding for kids | Little School</title>
      <SubjectLayout
        subject="Coding"
        subTopics={codingTopics}
        primaryColor="bg-amber-50"
        secondaryColor="text-orange-800"
      />
    </>
  );
}
