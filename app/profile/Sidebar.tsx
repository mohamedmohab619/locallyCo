"use client";

import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import Link from "next/link";

export default function Sidebar() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <aside
      className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 
                 dark:border-gray-700 flex flex-col"
    >
      {/* Title */}
      <div className="p-4 text-xl font-bold text-gray-900 dark:text-white">
        Menu
      </div>

      {/* Sidebar navigation */}
      <nav className="flex-1 px-3 pb-6 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/profile"
              className="flex items-center p-2 text-gray-700 rounded-lg 
                         hover:bg-gray-100 dark:text-gray-200 
                         dark:hover:bg-gray-700"
            >
              <span className="ml-3">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              href="/orders"
              className="flex items-center p-2 text-gray-700 rounded-lg 
                         hover:bg-gray-100 dark:text-gray-200 
                         dark:hover:bg-gray-700"
            >
              <span className="ml-3">Orders</span>
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="flex items-center p-2 text-gray-700 rounded-lg 
                         hover:bg-gray-100 dark:text-gray-200 
                         dark:hover:bg-gray-700"
            >
              <span className="ml-3">Products</span>
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex items-center p-2 text-gray-700 rounded-lg 
                         hover:bg-gray-100 dark:text-gray-200 
                         dark:hover:bg-gray-700"
            >
              <span className="ml-3">Settings</span>
            </Link>
          </li>
          <li>
            <Link
              href="/addresses"
              className="flex items-center p-2 text-gray-700 rounded-lg 
                         hover:bg-gray-100 dark:text-gray-200 
                         dark:hover:bg-gray-700"
            >
              <span className="ml-3">Addresses</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
