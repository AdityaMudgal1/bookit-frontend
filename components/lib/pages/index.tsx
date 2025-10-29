import { useEffect, useState } from "react";
import { api } from "../lib/api";
import ExperienceCard from "../components/ExperienceCard";
import Loader from "../components/Loader";

export default function Home() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/experiences").then(res => setItems(res.data)).catch(console.error).finally(()=>setLoading(false));
  }, []);

  return (
    <div>
      <section className="mb-8">
        <div className="rounded-2xl overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h1 className="text-3xl font-bold">Discover unforgettable experiences</h1>
              <p className="mt-1">Pick a date, choose a slot, book instantly.</p>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-2xl font-bold mb-4">Popular experiences</h2>
      {loading ? <Loader /> : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map(i => <ExperienceCard key={i._id} exp={i} />)}
        </div>
      )}
    </div>
  );
}
