"use client";

import { useEffect, useState } from "react";
import Header from "../../Header";
import PetHero from "./PetHero";
import PetInfo from "./PetInfo";
import AdoptButton from "./AdoptButton";

export default function DetailsPage() {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    async function fetchPet() {
      const res = await fetch("https://dummyjson.com/products/1"); // bare test-id 1
      const data = await res.json();
      setPet(data);
    }
    fetchPet();
  }, []);

  if (!pet) {
    return (
      <div className="min-h-dvh flex items-center justify-center text-gray-500">
        Indlæser...
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-white flex justify-center">
      <div className="w-full max-w-[430px] px-4 pb-8">
        <Header />
        <PetHero
          image={pet.thumbnail}
          avatar={pet.thumbnail}
          location={pet.brand || "Ukendt sted"}
        />
        <PetInfo
          name={pet.title}
          description={pet.description}
          tags={[pet.category, `${pet.price} kr`, pet.rating + "★"]}
          updatedAt="13. juli"
        />
        <AdoptButton name={pet.title} />
      </div>
    </div>
  );
}
