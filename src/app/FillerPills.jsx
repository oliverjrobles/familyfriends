export default function FilterPills() {
  return (
    <div className="flex gap-2 overflow-x-auto py-2">
      <button className="px-4 py-2 rounded-full bg-black text-white text-sm">
        Alle
      </button>

      <button className="px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-200 text-sm">
        Katte
      </button>

      <button className="px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-200 text-sm">
        Hunde
      </button>
    </div>
  );
}
