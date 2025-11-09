"use client";

import Header from "./Header";
import Card from "./Cards";
import FillerPills from "./FillerPills";
import BottomNav from "./BottomNav";

const pets = [
  {
    name: "Harry",
    breed: "Yorkshire Terrier",
    age: "Young",
    image: "/dummypiccat.jpeg",
  },
  {
    name: "Pjercik",
    breed: "Blandingsrace",
    age: "2,5 år",
    image: "/dummypiccat.jpeg",
  },
  {
    name: "xxxxx",
    breed: "Cat",
    age: "21 år",
    image: "/dummypiccat.jpeg",
  },
  {
    name: "Solo",
    breed: "Cat",
    age: "22 år",
    image: "/dummypiccat.jpeg",
  },
  {
    name: "Money",
    breed: "Cat",
    age: "21 år",
    image: "/dummypiccat.jpeg",
  },
  {
    name: "Lindan",
    breed: "Cat",
    age: "21 år",
    image: "/dummypiccat.jpeg",
  },
];

export default function Page() {
  return (
    <div className="min-h-dvh bg-white">
      <Header />

      <main className="mx-auto max-w-screen-sm px-4 pb-6 pt-4 pb-[calc(64px+env(safe-area-inset-bottom))]">
        <FillerPills />

        {/* 2 kolonner på mobil */}
        <div className="grid grid-cols-2 gap-4">
          {pets.map((p, i) => (
            <Card key={i} pet={p} />
          ))}
          <BottomNav />
        </div>
      </main>
    </div>
  );
}
