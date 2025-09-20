"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      className="fixed top-20 left-0 h-[calc(100vh-80px)] w-64 bg-gray-50 border-r border-gray-200"
    >
      {/* Profile Box */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Hala !</h3>
        <p className="text-sm text-gray-500">dnawasany@gmail.com</p>
        <div className="mt-3">
          <span className="text-xs text-gray-600">Profile Completion 20%</span>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-yellow-400 h-2 rounded-full w-1/5"></div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <ul className="p-4 space-y-2">
        <li>
          <Link
            href="/orders"
            className={`block px-4 py-2 rounded-lg transition ${
              pathname === "/orders"
                ? "bg-yellow-300 text-black font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            Orders
          </Link>
        </li>
        <li>
          <Link
            href="/wishlist"
            className={`block px-4 py-2 rounded-lg transition ${
              pathname === "/wishlist"
                ? "bg-yellow-300 text-black font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            Favourites
          </Link>
        </li>
      </ul>

      {/* Account Section */}
      <div className="p-4 border-t border-gray-200">
        <h4 className="text-sm font-bold text-gray-600 mb-2">MY ACCOUNT</h4>
        <ul className="space-y-2">
          <li>
            <Link
              href="/profile"
              className={`block px-4 py-2 rounded-lg transition ${
                pathname === "/profile"
                  ? "bg-yellow-300 text-black font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/addresses"
              className={`block px-4 py-2 rounded-lg transition ${
                pathname === "/addresses"
                  ? "bg-yellow-300 text-black font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              Addresses
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
