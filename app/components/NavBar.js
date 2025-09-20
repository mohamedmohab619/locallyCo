"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
<nav className="bg-gradient-to-r from-[#40E0D0] via-[#Dcd5b9] to-[#f5f5dc] animate-gradient border-b border-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto px-6 py-3">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl font-extrabold text-[#1b365d] tracking-tight hover:text-[#d4af37] transition-colors duration-300">
            Locallyco
          </span>
        </Link>

        {/* Deliver to location */}
        <div className="items-center ml-6 space-x-2 text-[#0B0B0B] cursor-pointer hover:text-[#3b7a57] transition-colors duration-300">
          <FaMapMarkerAlt className="text-xl text-[#d4af37] hover:text-[#40E0D0] transition-colors duration-300" />

          <span className="text-sm font-medium">Deliver to Cairo, Egypt</span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-6 max-w-5xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-[#dcd5b9] 
              focus:ring-[#d4af37] focus:border-[#d4af37] text-sm bg-white shadow-sm transition duration-300"
            />
            <svg
              className="absolute left-3 top-2.5 w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 20 20"
            >
              <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-6">
          {/* Favorites */}
          <Link
            href="/favourites"
            className={`text-xl transition-transform duration-200 hover:scale-110 ${
              pathname === "/favourites"
                ? "text-[#d4af37]"
                : "text-[#0B0B0B] hover:text-[#d4af37]"
            }`}
          >
            <FaRegHeart className="text-xl text-[#d4af37] hover:text-[#40E0D0] transition-colors duration-300" />

          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className={`text-xl transition-transform duration-200 hover:scale-110 ${
              pathname === "/cart"
                ? "text-[#d4af37]"
                : "text-[#0B0B0B] hover:text-[#d4af37]"
            }`}
          >
            <FaShoppingCart className="text-xl text-[#d4af37] hover:text-[#40E0D0] transition-colors duration-300" />

          </Link>

          {/* Profile dropdown */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="focus:outline-none"
            >
              <Image
                src="/MohabUpdated.jpg"
                width={40}
                height={40}
                className="rounded-full border-2 border-[#dcd5b9] hover:border-[#40E0D0] mr-4 transition-all cursor-pointer"
                alt="Profile"
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-[#dcd5b9]">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-[#0B0B0B] hover:bg-[#dcd5b9]/40 transition"
                >
                  My Profile
                </Link>
                <Link
                  href="/orders"
                  className="block px-4 py-2 text-[#0B0B0B] hover:bg-[#dcd5b9]/40 transition"
                >
                  My Orders
                </Link>
                <Link
                  href="/SignIn"
                  className="block px-4 py-2 text-[#0B0B0B] hover:bg-[#dcd5b9]/40 transition"
                >
                  Sign Out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

// bg-gradient-to-r from-[#3b7a57] via-[#d4af37] to-[#40E0D0]

// bg-gradient-to-r from-[#1b365d] via-[#d4af37] to-[#40E0D0]

// bg-gradient-to-r from-[#Dcd5b9] via-[#A52A2A] to-[#3b7a57]

// bg-gradient-to-r from-[#0B0B0B] via-[#1b365d] to-[#d4af37]

// bg-gradient-to-r from-[#f5f5dc] via-[#Dcd5b9] to-[#A52A2A]


