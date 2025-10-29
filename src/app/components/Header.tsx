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
          ? "bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight"
        >
          BookIt
        </Link>

        <nav className="flex items-center gap-10">
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
      </div>
    </header>
  );
}
