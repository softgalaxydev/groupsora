"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  return (
    
    <>
    <header className="fixed top-0 left-0 w-full h-16 z-50 pointer-events-auto bg-green-600 text-white p-4 flex justify-between items-center shadow">
      <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={() => setOpenMenu(true)}
        className="text-3xl p-2 -m-2 cursor-pointer select-none touch-manipulation active:opacity-70 transition flex items-center justify-center min-w-11 min-h-11"
      >
        ☰
      </button>
      <h1 className="text-2xl font-bold">
        GroupSora
      </h1>
      </div>

      {pathname !== "/add-group" && (
        <Link href="/add-group"
          className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold">
          Add Group
        </Link>
      )}

    </header>
  
    
    {/* Sidebar */}
{openMenu && (

  <div className="fixed inset-0 z-50">

    {/* Overlay */}
    <div
      onClick={() =>
        setOpenMenu(false)
      }
      className="absolute inset-0 bg-black/70"
    />

    {/* Sidebar */}
    <div
      className="
absolute
left-3
top-3
bottom-3
w-72
bg-white
text-black
p-5
shadow-2xl
animate-slideIn
rounded-2xl
"
    >

      {/* TOP */}
      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          GroupSora
        </h2>

        <button
          type="button"
          onClick={() => setOpenMenu(false)}
          className="
          text-3xl
          text-gray-500
          hover:text-black
          transition
          p-2
          -m-2
          cursor-pointer
          select-none
          touch-manipulation
          flex
          items-center
          justify-center
          min-w-11
          min-h-11
        "
        >
          ×
        </button>

      </div>

      {/* MENU */}
      <div className="mt-10 flex flex-col gap-3">

        <Link
          href="/"
          className="
          p-4
          rounded-2xl
          bg-gray-100
          active:bg-green-200
          active:scale-[0.98]
          transition
          text-lg
          font-medium
          "
        >
          🏠 Dashboard
        </Link>

        <Link
          href="/add-group"
          className="
          p-4
          rounded-2xl
          bg-gray-100
          active:bg-green-200
          active:scale-[0.98]
          transition
          text-lg
          font-medium
        "
        >
          ➕ Add Group
        </Link>

        <Link
          href="/terms"
          className="
          p-4
          rounded-2xl
          bg-gray-100
          active:bg-green-200
          active:scale-[0.98]
          transition
          text-lg
          font-medium
        "
        >
          📜 Terms & Conditions
        </Link>

        <Link
          href="/privacy"
          className="
          p-4
          rounded-2xl
          bg-gray-100
          active:bg-green-200
          active:scale-[0.98]
          transition
          text-lg
          font-medium
        "
        >
          🔒 Privacy
        </Link>

        <Link
          href="/disclaimer"
          className="
          p-4
          rounded-2xl
          bg-gray-100
          active:bg-green-200
          active:scale-[0.98]
          transition
          text-lg
          font-medium
        "
        >
          ⚠️ Disclaimer
        </Link>

        <Link
          href="/contact"
          className="
          p-4
          rounded-2xl
          bg-gray-100
          active:bg-green-200
          active:scale-[0.98]
          transition
          text-lg
          font-medium
        "
        >
          📞 Contact Us
        </Link>

      </div>

    </div>

  </div>

  )}

  </>
);
}