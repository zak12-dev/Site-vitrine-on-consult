"use client";
import NavigationMenu from "./_components/navigation-menu";
import React from "react";

export default function Header() {
  return (
    <header className="border-b border-gray-100 px-4 py-3 w-full overflow-x-hidden">
      {/* Ligne principale */}
      <div className="flex justify-between items-center w-full max-w-full">
        {/* Logo toujours à gauche */}
        <h1 className="font-medium text-lg flex-shrink-0">LOGO</h1>

        {/* Desktop navigation + boutons */}
        <div className="hidden md:flex gap-4 items-center">
          <NavigationMenu />
          <div className="flex gap-2">
            <button className="bg-green-950 text-white px-3 py-2 rounded-md text-sm hover:bg-green-900 transition">
              Buy Template
            </button>
            <button className="bg-gray-100 text-black px-3 py-2 rounded-md text-sm hover:bg-gray-200 transition">
              Cart
            </button>
          </div>
        </div>

        {/* Mobile : uniquement Buy Template (compacte) */}
        <div className="flex md:hidden flex-shrink-0">
          <button className="bg-green-950 text-white px-2 py-1 rounded-md text-xs sm:text-sm hover:bg-green-900 transition max-w-[110px] truncate">
            Buy Template
          </button>
        </div>
      </div>

      {/* Navigation mobile centré en dessous */}
      <div className="flex md:hidden justify-center gap-3 mt-3 flex-wrap max-w-[500px] overflow-x-hidden">
        <NavigationMenu />
      </div>
    </header>
  );
}
