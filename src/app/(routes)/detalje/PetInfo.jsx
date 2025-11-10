export default function PetInfo() {
  return (
    <section className="mt-5">
      {/* Navn */}
      <h1 className="text-2xl font-semibold text-gray-900">Samojed Willie</h1>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
          Hund
        </span>
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
          Han
        </span>
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
          3 år
        </span>
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
          Neutraliseret
        </span>
      </div>

      {/* Dato */}
      <p className="mt-3 text-sm text-gray-500">Opdateret d. 13. juli</p>
    </section>
  );
}
