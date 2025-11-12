import { FaRegStar } from "react-icons/fa";

export default function Card({ pet }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm p-3">
      <div className="relative">
        {/* Image: mobile-friendly 4:3 ratio, fills width */}
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full aspect-[4/3] object-cover rounded-xl"
        />

        {/* Favorite button: large tap target */}
        <button
          aria-label="Toggle favorite"
          cistar
          className="absolute top-2 right-2 h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center active:scale-95 transition"
        >
          <FaRegStar className="w-5 h-5 text-gray-800" />
        </button>
      </div>

      {/* Text block */}
      <div className="pt-3">
        <h3 className="text-base font-semibold leading-tight truncate text-black">
          {pet.name}
        </h3>
        <p className="text-sm text-gray-600">{pet.breed}</p>
        <p className="text-xs text-gray-500">{pet.age}</p>
      </div>
    </div>
  );
}
