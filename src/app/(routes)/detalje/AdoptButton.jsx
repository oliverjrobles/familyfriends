// AdoptButton.jsx — stor, afrundet CTA som i mockup
// Brug: <AdoptButton name="Samojed Willie" />

export default function AdoptButton({ name = "Samojed Willie", onClick }) {
  return (
    <div className="px-0 mt-6 mb-10">
      <button
        type="button"
        onClick={onClick}
        aria-label={`Adopter ${name}`}
        className="w-full rounded-[32px] bg-rose-300 text-black text-lg font-semibold py-5 shadow-md hover:brightness-90 active:scale-[0.99] transition"
      >
        Adopter <span className="font-semibold">{name}</span>
      </button>
    </div>
  );
}
