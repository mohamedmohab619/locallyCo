"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { initFlowbite } from "flowbite";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  HiHome,
  HiShoppingCart,
  HiCube,
  HiCog,
  HiUserCircle,
} from "react-icons/hi";

export default function Sidebar() {
  useEffect(() => {
    initFlowbite();
  }, []);

  // You can pass user data dynamically later instead of hardcoding
  const user = {
    name: "Mohamed Nawsany",
    email: "mohamed@example.com",
    progress: 20,
  };

  const navItems = [
    { href: "/", label: "Home", icon: <HiHome className="w-5 h-5" /> },
    {
      href: "/orders",
      label: "Orders",
      icon: <HiShoppingCart className="w-5 h-5" />,
    },
    {
      href: "/products",
      label: "Products",
      icon: <HiCube className="w-5 h-5" />,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: <HiCog className="w-5 h-5" />,
    },
    {
      href: "/addresses",
      label: "Addresses",
      icon: <FaMapMarkerAlt className="text-lg" />,
    },
  ];

  return (
    <div className="flex justify-start px-6 py-6">
<aside
  className="w-64 max-h-[80vh] overflow-y-auto bg-white border border-gray-200 
             rounded-2xl shadow-xl dark:bg-gray-800 dark:border-gray-700"
>
        <div className="h-full px-4 py-6 overflow-y-auto">
          {/* User Info Section */}
          <div className="flex flex-col items-center mb-8">
            <HiUserCircle className="w-16 h-16 text-gray-500 mb-2" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {user.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user.email}
            </p>
            {/* Progress Bar */}
            <div className="w-full mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-yellow-400 h-2.5 rounded-full"
                  style={{ width: `${user.progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Profile {user.progress}% complete
              </p>
            </div>
          </div>

          {/* Navigation */}
          <ul className="space-y-2 font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                  <Link
        href={item.href}
        className="flex items-center p-2 text-gray-900 rounded-lg
                   dark:text-white hover:bg-[#9F580A] hover:text-white group"
      >
                  <span className="text-gray-500 dark:text-gray-300">
                    {item.icon}
                  </span>
                  <span className="ms-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
