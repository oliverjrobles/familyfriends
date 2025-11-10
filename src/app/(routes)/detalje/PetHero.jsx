import { FaRegStar } from "react-icons/fa";
import { LuArrowLeft } from "react-icons/lu";

export default function PetHero({ image, avatar, location }) {
  return (
    <section className="mx-auto max-w-screen-sm px-4 pt-3">
      <div className="relative overflow-hidden rounded-[28px]">
        {/* Hero image — fylder hele kortet, beskæres pænt */}
        <img
          src={image}
          alt="Pet"
          className="w-full aspect-[4/3] md:aspect-[16/11] object-cover"
        />

        {/* Tilbage knappen!!! */}
        <button
          aria-label="Tilbage"
          LuArrowLeft
          className="absolute left-4 top-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm active:scale-90 transition"
        >
          <LuArrowLeft className="w-5 h-5 text-gray-800" />
        </button>

        {/* favorite */}
        <button
          aria-label="Toggle favorite"
          cistar
          className="absolute top-2 right-2 h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center active:scale-90 transition"
        >
          <FaRegStar className="w-5 h-5 text-gray-800" />
        </button>

        {/* location chip */}
        <div className="absolute left-6 bottom-6">
          <div className="flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur px-3 py-2 shadow-sm">
            <img
              src={avatar}
              alt="avatar"
              className="h-7 w-7 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-900">
              {location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
