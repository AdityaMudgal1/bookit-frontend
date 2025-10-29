// src/components/ExperienceCard.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ExperienceCard({ exp }: { exp: any }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow-md overflow-hidden">
      <Link href={`/details/${exp._id}`}>
        <a className="block">
          <div className="h-48 w-full overflow-hidden">
            <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-slate-800">{exp.title}</h3>
            <p className="text-sm text-slate-500 mt-2 line-clamp-3">{exp.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="font-bold text-emerald-600">₹ {exp.price}</div>
              <div className="text-xs text-slate-400">{exp.slots?.length ?? 0} slots</div>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}
