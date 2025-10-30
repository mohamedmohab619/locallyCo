"use client";
import React from "react";
// import { initFlowbite } from "flowbite";

export default function Sort() {
  // React.useEffect(() => {
  //   initFlowbite();
  // }, []);

  const [isOpen, setIsOpen] = React.useState(false);
  function handleToggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }
  return (
    <div className="relative">
      <button
        className="mx-3 text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none cursor-pointer text-center inline-flex items-center bg-brown hover:bg-dark-brown duration-300"
        type="button"
        onClick={handleToggle}
      >
        SORT BY
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 z-10 text-left bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
          <ul
            className="py-2 text-md text-black"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a href="#" className="block px-4 py-2">
                Recommended
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Newest
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Highest Price
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Lowest Price
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
