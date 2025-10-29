import { useRouter } from "next/router";
import Link from "next/link";

export default function Result(){
  const router = useRouter();
  const { success, bookingId } = router.query;
  const ok = success === "true";

  return (
    <div className="text-center py-20">
      {ok ? (
        <>
          <h1 className="text-3xl font-bold text-emerald-600">Booking Confirmed 🎉</h1>
          <p className="mt-2 text-gray-600">Booking ID: <span className="font-mono">{bookingId}</span></p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-red-600">Booking Failed ❌</h1>
          <p className="mt-2 text-gray-600">Please try again.</p>
        </>
      )}
      <div className="mt-6">
        <Link href="/"><a className="px-4 py-2 bg-sky-600 text-white rounded">Back to Home</a></Link>
      </div>
    </div>
  );
}
