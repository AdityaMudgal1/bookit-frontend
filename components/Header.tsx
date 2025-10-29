"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20 scrolled"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link
          href="/"
          className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight hover:scale-105 transition-transform"
        >
          BookIt
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="#experiences" className="nav-link">
            Experiences
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu (future optional) */}
        <div className="md:hidden">
          <button className="text-cyan-400 focus:outline-none hover:scale-110 transition-transform">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
