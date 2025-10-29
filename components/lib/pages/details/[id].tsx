// src/app/details/[id]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "@/lib/api";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Link from "next/link";

export default function DetailsPage() {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();
  const [exp, setExp] = useState<any>(null);
  const [selected, setSelected] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    api.get(`/experiences/${id}`).then(res => setExp(res.data)).catch(console.error).finally(()=>setLoading(false));
  }, [id]);

  if (loading) return (<><Header /><Loader /></>);
  if (!exp) return (<><Header /><div className="p-8">Experience not found</div></>);

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <img src={exp.image} className="w-full h-64 object-cover rounded-2xl" />
        <h1 className="text-2xl font-bold mt-4">{exp.title}</h1>
        <p className="text-slate-500 mt-2">{exp.description}</p>

        <div className="mt-6">
          <h4 className="font-semibold">Available slots</h4>
          <div className="flex flex-wrap gap-2 mt-3">
            {(!exp.slots || exp.slots.length === 0) ? <div className="text-slate-500">Sold out</div> :
              exp.slots.map((s:string) => (
                <button key={s} onClick={()=>setSelected(s)} className={`px-3 py-2 rounded-md border ${selected===s ? "bg-emerald-600 text-white" : "bg-white text-slate-700"}`}>{s}</button>
              ))
            }
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="text-lg font-semibold">Price: ₹ {exp.price}</div>
          <Link href={`/checkout?expId=${exp._id}&slot=${encodeURIComponent(selected)}`}>
            <button disabled={!selected} className="ml-auto px-4 py-2 rounded-full bg-emerald-500 text-white disabled:opacity-50">Book Now</button>
          </Link>
        </div>

        <div className="mt-8">
          <h5 className="font-semibold">What to expect</h5>
          <ul className="list-disc ml-6 mt-2 text-slate-600">
            {exp.highlights?.map((h:string,i:number)=><li key={i}>{h}</li>)}
          </ul>
        </div>
      </main>
    </>
  );
}
