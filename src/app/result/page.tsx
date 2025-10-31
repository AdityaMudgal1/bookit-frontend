"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import confetti from "canvas-confetti";

function ResultContent() {
  const s = useSearchParams();
  const success = s.get("success") === "true";
  const bookingId = s.get("bookingId");

  useEffect(() => {
    if (success) {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
  }, [success]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center py-16">
        {success ? (
          <>
            <h1 className="text-3xl font-bold text-emerald-400">Booking Confirmed 🎉</h1>
            <p className="mt-3 text-gray-300">
              Your booking ID: <span className="font-mono">{bookingId}</span>
            </p>
            <div className="mt-6">
              <Link href="/" className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                Back to Home
              </Link>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-red-500">Booking Failed ❌</h1>
            <p className="mt-3 text-gray-400">Please try again or choose a different slot.</p>
            <div className="mt-6">
              <Link href="/" className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                Back to Home
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="text-white text-center py-20">Loading result...</div>}>
      <ResultContent />
    </Suspense>
  );
}
