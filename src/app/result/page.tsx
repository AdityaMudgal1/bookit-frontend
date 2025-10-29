// src/app/result/page.tsx
"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Result() {
  const s = useSearchParams();
  const success = s.get("success") === "true";
  const bookingId = s.get("bookingId");

  useEffect(() => {
    if (success) confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
  }, [success]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center py-16">
        {success ? (
          <>
            <h1 className="text-3xl font-bold text-emerald-600">Booking Confirmed 🎉</h1>
            <p className="mt-3 text-slate-600">Your booking id: <span className="font-mono">{bookingId}</span></p>
            <div className="mt-6"><Link href="/"><a className="btn btn-primary">Back to Home</a></Link></div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-red-600">Booking Failed ❌</h1>
            <p className="mt-3 text-slate-600">Please try again or choose a different slot.</p>
            <div className="mt-6"><Link href="/"><a className="btn btn-primary">Back to Home</a></Link></div>
          </>
        )}
      </div>
    </div>
  );
}
