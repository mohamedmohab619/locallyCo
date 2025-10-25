"use client";

import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import Link from "next/link";

export default function Sidebar() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (

    
<aside className="sidebar w-64 bg-[#bc9000] border-r border-gray-200 flex flex-col">
 
<div className=" bg-[#bc9000] ">
      {/* Sidebar navigation */}
      <nav className="flex-1 px-3 pb-6 overflow-y-auto ">
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
             dark:text-gray-200 
             hover:bg-[#2e6f94]"
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
        </div>
    </aside>
  
  );
}
