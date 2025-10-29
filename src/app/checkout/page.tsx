"use client";
import { useState } from "react";
import axios from "axios";

export default function Checkout() {
  const [form, setForm] = useState({ name: "", email: "", promoCode: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/bookings", {
        ...form,
        experienceId: "PLACE_EXPERIENCE_ID",
        date: new Date().toISOString(),
        slot: "10:00",
      });
      setMessage("✅ Booking Successful!");
    } catch {
      setMessage("❌ Failed, please retry.");
    }
  };

  return (
    <div className="flex flex-col items-center py-20">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/10 p-6 rounded-xl space-y-4">
        <input
          placeholder="Name"
          className="w-full p-2 rounded bg-gray-900 text-white"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-900 text-white"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Promo Code"
          className="w-full p-2 rounded bg-gray-900 text-white"
          onChange={e => setForm({ ...form, promoCode: e.target.value })}
        />
        <button type="submit" className="btn-primary w-full">Confirm Booking</button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
