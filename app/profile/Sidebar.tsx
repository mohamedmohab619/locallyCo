"use client";

import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import Link from "next/link";

export default function Sidebar({ title }: { title: string }) {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      {/* Title */}
      <div className="p-4 text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </div>

      {/* Sidebar navigation */}
      <ul className="space-y-2 font-medium">
        <li>
          <Link
            href="/"
            className="flex items-center p-2 text-gray-700 rounded-lg 
                       hover:bg-gray-100 dark:text-gray-200 
                       dark:hover:bg-gray-700"
          >
            <span className="ml-3">Home</span>
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
      </ul>
    </div>
  );
}
