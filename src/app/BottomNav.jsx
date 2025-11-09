// BottomNav.jsx — Mobile bottom navigation bar
// Ikonerne er simple inline SVGs så du ikke skal installere noget
// Brug: <BottomNav /> nederst i page.js

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t shadow-sm z-20">
      <div className="mx-auto max-w-screen-sm px-6 py-2 flex justify-between items-center text-gray-600">
        {/* Home */}
        <button className="flex flex-col items-center text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.8"
            stroke="currentColor"
            className="h-6 w-6 mb-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9.5l9-7 9 7v10a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4H9v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-10z"
            />
          </svg>
          Home
        </button>

        {/* Favorites */}
        <button className="flex flex-col items-center text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.8"
            stroke="currentColor"
            className="h-6 w-6 mb-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.5a.75.75 0 011.04 0l2.13 2.17c.14.14.32.24.52.28l2.96.53c.72.13.99 1.01.48 1.53l-2.18 2.23a1 1 0 00-.28.87l.52 2.98c.13.73-.64 1.3-1.28.94l-2.65-1.41a1 1 0 00-.94 0L8.02 15.5c-.64.35-1.41-.2-1.28-.94l.52-2.98a1 1 0 00-.28-.87L4.8 8.01c-.5-.52-.23-1.4.48-1.53l2.96-.53c.2-.04.38-.14.52-.28L11.48 3.5z"
            />
          </svg>
          Favoritter
        </button>

        {/* Chat */}
        <button className="flex flex-col items-center text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.8"
            stroke="currentColor"
            className="h-6 w-6 mb-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h8m-8 4h5m-1 7l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          Chat
        </button>

        {/* Profil */}
        <button className="flex flex-col items-center text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.8"
            stroke="currentColor"
            className="h-6 w-6 mb-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 0114 0H5z"
            />
          </svg>
          Profil
        </button>
      </div>
    </nav>
  );
}
