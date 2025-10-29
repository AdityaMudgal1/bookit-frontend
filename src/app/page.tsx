"use client";
import Hero from "@/components/Hero";
import ExperienceCard from "@/components/ExperienceCard";

export default function HomePage() {
  const experiences = [
    {
      title: "Tropical Paradise",
      description: "Relax in the Maldives with all-inclusive luxury stays.",
      image: "/beach.jpg",
    },
    {
      title: "Mountain Escape",
      description: "Breathe the fresh air of the Himalayas with guided treks.",
      image: "/mountain.jpg",
    },
    {
      title: "City Lights",
      description: "Explore the nightlife and landmarks of Tokyo and Dubai.",
      image: "/city.jpg",
    },
  ];

  return (
    <>
      <Hero />

      <section id="experiences" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Popular Experiences
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>
      </section>

      <footer className="text-center py-6 text-gray-400 text-sm">
        © 2025 BookIt — Travel Experiences
      </footer>
    </>
  );
}
