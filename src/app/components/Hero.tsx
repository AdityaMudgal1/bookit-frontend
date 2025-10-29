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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl mx-auto text-white px-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Explore handpicked experiences and book your dream trip instantly.
        </p>
        <motion.a
          href="#popular"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-cyan-400/40 transition"
        >
          Explore Now
        </motion.a>
      </motion.div>
    </section>
  );
}
