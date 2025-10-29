"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
      <img
        src="/beach.jpg"
        alt="Beach"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto text-white px-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
          Discover Paradise
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Experience the world’s most breathtaking destinations with just one click.
        </p>
        <a
          href="#popular"
          className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full font-semibold shadow-lg transition transform hover:scale-105"
        >
          Explore Now
        </a>
      </motion.div>
    </section>
  );
}
