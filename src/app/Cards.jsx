import Link from "next/link";
import { FaRegStar } from "react-icons/fa";

export default function Card({ pet }) {
  return (
    <Link
      href={`/detalje?id=${pet.id}`} // 👈 vi sender ID’et som query til detalje-siden
      className="block rounded-2xl bg-white shadow-sm p-3 hover:shadow-md transition"
    >
      <div className="relative">
        {/* Image */}
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full aspect-[4/3] object-cover rounded-xl"
        />

        {/* Favorite button */}
        <button
          aria-label="Toggle favorite"
          className="absolute top-2 right-2 h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center active:scale-95 transition"
          onClick={(e) => e.preventDefault()} // 👈 så klik på stjernen ikke åbner linket
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
    </Link>
  );
}
