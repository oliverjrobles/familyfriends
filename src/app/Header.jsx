export default function Header({ sticky = false }) {
  return (
    <header
      className={`${sticky ? "sticky top-0 z-20" : ""} bg-white border-b/0`}
    >
      <div className="mx-auto max-w-screen-sm px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-black">
          FamilyFriends
        </h1>

        <button
          aria-label="Notifikationer"
          className="relative h-9 w-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center active:scale-90 transition"
        >
          {/* Bell icon (inline SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082A4.001 4.001 0 0 1 8 17m8 0h3a1 1 0 0 0 .894-1.447l-1.105-2.21A6 6 0 0 1 18 10V9a6 6 0 1 0-12 0v1a6 6 0 0 1-.789 2.843l-1.105 2.21A1 1 0 0 0 5 17h11z"
            />
          </svg>
          {/* lille notification-dot */}
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-rose-400" />
        </button>
      </div>
    </header>
  );
}
