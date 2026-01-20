"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // MENU ITEM STYLE (DESKTOP + MOBILE)
  const menuItemClass =
    "px-5 py-1.5 rounded-lg border border-transparent " +
    "transition-all duration-300 cursor-pointer " +
    "hover:border-white hover:bg-yellow-400/40 hover:text-white";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/40 bg-transparent">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-white font-bold text-xl">
          WINOSA
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-3 text-sm text-white">
          <li className={menuItemClass}>Home</li>
          <li className={menuItemClass}>Company</li>
          <li className={menuItemClass}>Careers</li>
          <li className={menuItemClass}>Services</li>
          <li className={menuItemClass}>Contact</li>
        </ul>

        {/* RIGHT ACTION */}
        <div className="flex items-center gap-4">

          {/* CTA BUTTON (DESKTOP) */}
          <button
            className="
              hidden md:block
              px-6 py-2
              rounded-lg
              text-white
              border border-white
              transition-all duration-300
              hover:bg-yellow-400/40
              hover:text-white
            "
          >
            Language
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-white/30 bg-black/60 backdrop-blur-sm">
          <ul className="flex flex-col px-8 py-6 gap-3 text-white text-sm">

            <li className={menuItemClass} onClick={() => setOpen(false)}>Home</li>
            <li className={menuItemClass} onClick={() => setOpen(false)}>Company</li>
            <li className={menuItemClass} onClick={() => setOpen(false)}>Careers</li>
            <li className={menuItemClass} onClick={() => setOpen(false)}>Services</li>
            <li className={menuItemClass} onClick={() => setOpen(false)}>Contact</li>

            {/* CTA MOBILE */}
            <button
              className="
                mt-4
                px-6 py-2
                rounded-lg
                border border-white
                text-white
                transition-all duration-300
                hover:bg-yellow-400/40
                hover:text-white
              "
            >
              Language
            </button>

          </ul>
        </div>
      )}
    </nav>
  );
}
