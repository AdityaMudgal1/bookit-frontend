"use client";

export default function ExperienceCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-white/10 hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />
      <div className="p-5 text-gray-100">
        <h3 className="text-xl font-semibold mb-2 text-cyan-400">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
