import SubjectLayout from "@/components/subject-layout";

export default function SciencePage() {
  const scienceTopics = [
    {
      title: "Solar System Exploration",
      image: "/science/solar-system.webp?height=200&width=300",
      color: "bg-blue-100",
      description:
        "Let's blast off into space and explore the planets, moons, and stars!",
    },
    {
      title: "Fun Chemistry Experiments",
      image: "/science/chemistry.webp?height=200&width=300",
      color: "bg-red-100",
      description:
        "Mix, fizz, and bubble! Learn how different chemicals react in cool ways.",
    },
    {
      title: "Animal Kingdom",
      image: "/science/animals.webp?height=200&width=300",
      color: "bg-green-100",
      description:
        "Meet the amazing animals of the world, from tiny bugs to giant elephants!",
    },
    {
      title: "Human Body and Organs",
      image: "/science/human-body.webp?height=200&width=300",
      color: "bg-yellow-100",
      description:
        "Discover how your heart beats, lungs breathe, and brain thinks!",
    },
    {
      title: "Weather and Climate",
      image: "/science/weather.webp?height=200&width=300",
      color: "bg-gray-100",
      description:
        "Why does it rain? What makes tornadoes? Find out how weather works!",
    },
    {
      title: "Electricity and Circuits",
      image: "/science/electricity.webp?height=200&width=300",
      color: "bg-purple-100",
      description:
        "Zap! Learn how electricity powers your favorite gadgets and lights up your home.",
    },
    {
      title: "Dinosaur Discovery",
      image: "/science/dinosaurs.webp?height=200&width=300",
      color: "bg-orange-100",
      description: "Travel back in time to when dinosaurs ruled the Earth!",
    },
    {
      title: "Magnets and Forces",
      image: "/science/magnets.webp?height=200&width=300",
      color: "bg-teal-100",
      description:
        "What makes magnets stick? Discover the invisible forces around us!",
    },
    {
      title: "Plant Life and Photosynthesis",
      image: "/science/plants.webp?height=200&width=300",
      color: "bg-green-200",
      description:
        "How do plants eat sunlight? Learn how they grow and make oxygen for us!",
    },
    {
      title: "Ocean and Marine Life",
      image: "/science/ocean-life.webp?height=200&width=300",
      color: "bg-blue-200",
      description:
        "Dive into the deep sea and meet sharks, dolphins, and colorful fish!",
    },
    {
      title: "Rocks and Minerals",
      image: "/science/rocks.webp?height=200&width=300",
      color: "bg-brown-100",
      description:
        "Discover the hidden treasures of the Earth, from shiny gems to volcanic rocks!",
    },
    {
      title: "Light and Sound",
      image: "/science/light-sound.webp?height=200&width=300",
      color: "bg-pink-100",
      description:
        "How do we see colors? How does sound travel? Let's explore!",
    },
    {
      title: "Colors and Light",
      image: "/science/colors-light.webp?height=200&width=300",
      color: "bg-pink-200",
      description:
        "Why is the sky blue? How do rainbows form? Explore the magic of colors and light!",
    },
    {
      title: "Simple Machines",
      image: "/science/simple-machines.webp?height=200&width=300",
      color: "bg-gray-200",
      description:
        "Levers, pulleys, and gears—see how simple tools make big jobs easier!",
    },
    {
      title: "Food and Nutrition",
      image: "/science/nutrition.webp?height=200&width=300",
      color: "bg-red-200",
      description:
        "Why do we need food? Learn about healthy eating and how our bodies use energy!",
    },
    {
      title: "States of Matter",
      image: "/science/states-of-matter.webp?height=200&width=300",
      color: "bg-blue-300",
      description:
        "Solids, liquids, and gases—watch them change and transform!",
    },
    {
      title: "Volcanoes and Earthquakes",
      image: "/science/volcanoes.webp?height=200&width=300",
      color: "bg-orange-200",
      description:
        "Boom! Discover how volcanoes erupt and why the ground sometimes shakes.",
    },
    {
      title: "The Water Cycle",
      image: "/science/water-cycle.webp?height=200&width=300",
      color: "bg-cyan-100",
      description:
        "How does water move around the planet? Find out in the water cycle!",
    },
    {
      title: "Space Exploration and Rockets",
      image: "/science/space-exploration.webp?height=200&width=300",
      color: "bg-purple-200",
      description: "How do rockets launch? Learn how astronauts explore space!",
    },
    {
      title: "Microorganisms and Germs",
      image: "/science/microbes.webp?height=200&width=300",
      color: "bg-green-300",
      description:
        "Tiny but powerful! Discover the good and bad microbes around us.",
    },
    {
      title: "Life Cycle of Insects",
      image: "/science/insects.webp?height=200&width=300",
      color: "bg-yellow-300",
      description:
        "See how a caterpillar turns into a butterfly and how insects grow!",
    },
    {
      title: "Fossils and Prehistoric Life",
      image: "/science/fossils.webp?height=200&width=300",
      color: "bg-brown-200",
      description: "How do we know about dinosaurs? Discover ancient fossils!",
    },
    {
      title: "Tsunamis and Natural Disasters",
      image: "/science/natural-disasters.webp?height=200&width=300",
      color: "bg-red-300",
      description: "What causes earthquakes, tornadoes, and big ocean waves?",
    },
    {
      title: "Introduction to DNA and Genetics",
      image: "/science/dna-genetics.webp?height=200&width=300",
      color: "bg-purple-300",
      description:
        "What makes you, YOU? Learn about DNA and how traits are passed down!",
    },
    {
      title: "How Do Airplanes Fly?",
      image: "/science/airplanes.webp?height=200&width=300",
      color: "bg-gray-300",
      description:
        "How do big, heavy airplanes stay in the sky? Let's find out!",
    },
    {
      title: "The Science of Sound Waves",
      image: "/science/sound-waves.webp?height=200&width=300",
      color: "bg-pink-200",
      description:
        "Why do some sounds seem loud and others soft? Learn how sound travels!",
    },
    {
      title: "Heat and Temperature",
      image: "/science/heat-temperature.webp?height=200&width=300",
      color: "bg-orange-300",
      description:
        "How do we measure hot and cold? Learn how heat moves around us!",
    },
    {
      title: "How Do Boats Float?",
      image: "/science/boats-buoyancy.webp?height=200&width=300",
      color: "bg-blue-400",
      description:
        "Why do ships float but rocks sink? Learn about water and buoyancy!",
    },
    {
      title: "Recycling and the Environment",
      image: "/science/recycling.webp?height=200&width=300",
      color: "bg-gray-100",
      description:
        "How can we help the Earth? Learn how recycling works and why it’s important!",
    },
    {
      title: "Weather Patterns and Seasons",
      image: "/science/seasons.webp?height=200&width=300",
      color: "bg-blue-200",
      description:
        "Why does the weather change? Find out how seasons and climate work!",
    },
    {
      title: "Electricity and Magnetism",
      image: "/science/electricity-magnetism.webp?height=200&width=300",
      color: "bg-purple-100",
      description:
        "Zap! Discover how electricity and magnets make things work!",
    },
    {
      title: "Time and Space",
      image: "/science/time-space.webp?height=200&width=300",
      color: "bg-blue-100",
      description:
        "What is time? How do we measure it? Explore the wonders of time and space!",
    },
    {
      title: "Camouflage and Animal Adaptations",
      image: "/science/animal-camouflage.webp?height=200&width=300",
      color: "bg-yellow-300",
      description:
        "How do animals blend in or survive in their environment? Find out!",
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
