import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../lib/api";

export default function Checkout(){
  const router = useRouter();
  const { expId, slot } = router.query;
  const [exp, setExp] = useState<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [promo, setPromo] = useState("");
  const [discountInfo, setDiscountInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!expId) return;
    setLoading(true);
    api.get(`/experiences/${expId}`).then(res=>setExp(res.data)).catch(console.error).finally(()=>setLoading(false));
  }, [expId]);

  if (loading) return <div>Loading…</div>;
  if (!exp) return <div>Experience not found</div>;

  const applyPromo = async () => {
    if (!promo) return alert("Enter promo code");
    try {
      const res = await api.post("/promo/validate", { code: promo });
      if (res.data.valid) setDiscountInfo(res.data.promo);
      else { setDiscountInfo(null); alert("Invalid promo"); }
    } catch { alert("Promo check failed"); }
  };

  const priceAfter = () => {
    let price = exp.price;
    if (!discountInfo) return price;
    if (discountInfo.type === "percent") return Math.round(price - (price * discountInfo.value)/100);
    if (discountInfo.type === "flat") return Math.max(0, price - discountInfo.value);
    return price;
  };

  const confirmBooking = async () => {
    if (!name.trim() || !/\S+@\S+\.\S+/.test(email)) return alert("Enter valid name & email");
    try {
      const res = await api.post("/bookings", { name, email, experienceId: expId, slot, promo: promo || null });
      if (res.data.success) {
        router.push(`/result?success=true&bookingId=${res.data.bookingId}`);
      } else {
        router.push(`/result?success=false`);
      }
    } catch (err:any) {
      if (err?.response?.status === 409) {
        alert("Slot already booked. Choose another slot.");
        router.push("/");
      } else {
        router.push(`/result?success=false`);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="border rounded-lg p-4 mb-4">
        <div className="font-semibold">{exp.title}</div>
        <div className="text-sm text-gray-600">Slot: <span className="font-medium">{slot}</span></div>
        <div className="mt-2">Base price: {exp.price} ₹</div>
      </div>

      <input value={name} onChange={e=>setName(e.target.value)} className="w-full border p-2 mb-2 rounded" placeholder="Full name" />
      <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full border p-2 mb-2 rounded" placeholder="Email" />

      <div className="flex gap-2 mb-4">
        <input value={promo} onChange={e=>setPromo(e.target.value)} className="flex-1 border p-2 rounded" placeholder="Promo code" />
        <button onClick={applyPromo} className="btn bg-sky-600 text-white">Apply</button>
      </div>

      <div className="mb-4">Payable: <span className="font-semibold">{priceAfter()} ₹</span></div>
      <button onClick={confirmBooking} className="w-full btn bg-emerald-500 text-white">Confirm Booking</button>
    </div>
  );
}
