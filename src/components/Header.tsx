"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          BookIt
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#home" className="nav-link">Home</Link>
          <Link href="#experiences" className="nav-link">Experiences</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </nav>

        {/* Mobile Menu */}
        <button
          className="md:hidden bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-icons text-white">menu</span>
        </button>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-16 right-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg flex flex-col p-4 space-y-3"
          >
            <Link href="#home" className="nav-link">Home</Link>
            <Link href="#experiences" className="nav-link">Experiences</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
