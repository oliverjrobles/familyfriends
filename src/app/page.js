"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Cards";
import BottomNav from "./BottomNav";
import FillerPills from "./FillerPills"; // hvis/ når du vil bruge den

export default function Page() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=6");
        const data = await res.json();

        // Map til dit Card-format
        const mapped = (data.products || []).map((p) => ({
          name: p.title, // -> Card: pet.name
          breed: p.brand || p.category, // -> Card: pet.breed
          age: "", // DummyJSON har ikke alder; tom for nu
          image: p.thumbnail || p.images?.[0], // -> Card: pet.image
        }));

        setPets(mapped);
      } catch (e) {
        console.error("DummyJSON fetch failed:", e);
        setPets([]); // fallback
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-dvh bg-white">
      <Header />

      <main className="mx-auto max-w-screen-sm px-4 pt-4 pb-[calc(72px+env(safe-area-inset-bottom))]">
        {/* Brug dine filter-pills her når du er klar */}
        <FillerPills />

        {loading ? (
          <div className="py-10 text-center text-sm text-gray-500">Loader…</div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {pets.map((p, i) => (
              <Card key={i} pet={p} />
            ))}
          </div>
        )}
      </main>

      {/* Bottom nav skal stå UDENFOR grid'et og være fixed */}
      <BottomNav />
    </div>
  );
}
