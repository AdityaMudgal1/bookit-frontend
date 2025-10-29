// src/components/Loader.tsx
export default function Loader({ text = "Loading..." }: { text?: string }) {
  return <div className="py-12 text-center text-slate-500">{text}</div>;
}
