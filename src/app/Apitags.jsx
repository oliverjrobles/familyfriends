// ApiTags.jsx
"use client";
import { useEffect, useState } from "react";

export default function ApiTags({ value = "Alle", onChange }) {
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState(["Alle"]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products/tags");
        if (!res.ok) throw new Error("Kunne ikke hente tags");
        const data = await res.json(); // forventer array af strings
        setTags(["Alle", ...data]);
      } catch (e) {
        setError("Kunne ikke hente tags");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return <div className="py-2 text-sm text-gray-500">Henter tags…</div>;
  }
  if (error) {
    return <div className="py-2 text-sm text-rose-500">{error}</div>;
  }

  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
      {tags.map((t) => (
        <button
          key={t}
          onClick={() => onChange?.(t)}
          className={`shrink-0 rounded-full px-3 py-1.5 text-sm border transition
            ${
              value === t
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-200"
            }`}
          aria-pressed={value === t}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
