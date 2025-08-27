"use client";

import { useState } from "react";

function CheckboxDropdown({ options, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleSelection = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="w-[268px]">
      {/* Dropdown button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between text-base font-medium text-[#5B3C19] rounded-lg"
      >
        {selected.length > 0 ? selected.join(", ") : label}
        <svg
          className="w-5 h-5 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Inline dropdown (pushes content instead of overlapping) */}
      {isOpen && (
        <ul className="text-sm text-[#414651]">
          {options.map((option) => (
            <li key={option} className="flex pt-[8px] items-center">
              <input
                type="checkbox"
                id={`${label}-${option}`}
                checked={selected.includes(option)}
                onChange={() => toggleSelection(option)}
                className="w-4 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor={`${label}-${option}`}
                className="ml-[12px] cursor-pointer"
              >
                {option}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function PriceFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const applyFilter = () => {
    console.log(`Price from ${minPrice} to ${maxPrice}`);
  };

  return (
    <div className="w-[268px]">
      {/* Price filter button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between text-base font-medium text-[#5B3C19]"
      >
        Price(EGP)
        <svg
          className="w-5 h-5 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-2 flex justify-between items-center ">
          <input
            type="number"
            placeholder="From"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-[65.5px] px-1 py-1 border rounded-md text-xs text-[#717680]"
          />
          <span className="text-[#414651]  text-xs">To</span>
          <input
            type="number"
            placeholder="To"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-[65.5px] px-1 py-1 border rounded-md text-xs text-[#717680]"
          />
          <button
            onClick={applyFilter}
            className="px-3 py-1 text-[#5B3C19] rounded-md text-sm"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
}

export default function DropdownCard() {
  return (
    <div className="py-[12px] px-[16px] bg-gray-100 rounded-xl shadow-md w-[300px] space-y-4">
      <CheckboxDropdown
        label="Select fruits"
        options={["Apple", "Banana", "Orange"]}
      />
      <hr className="my-2 border-gray-300" />
      <PriceFilter />
      <hr className="my-2 border-gray-300" />
      <CheckboxDropdown
        label="Select animals"
        options={["Cat", "Dog", "Elephant"]}
      />
      <hr className="my-2 border-gray-300" />
      <CheckboxDropdown
        label="Select cars"
        options={["BMW", "Tesla", "Mercedes"]}
      />
      <hr className="my-2 border-gray-300" />
      <CheckboxDropdown
        label="Select colors"
        options={["Red", "Green", "Blue"]}
      />
    </div>
  );
}
