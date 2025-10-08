"use client";
import React from "react";
// import { initFlowbite } from "flowbite";
import { Button } from "flowbite-react";

type CheckboxOption = {
  label: string;
  value: string;
};

type AccordionOption = {
  title: string;
  options: CheckboxOption[];
};

export default function Filter() {
  const [range, setRange] = React.useState(5);
  const [mounted, setMounted] = React.useState(false);
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [openAccordions, setOpenAccordions] = React.useState<number[]>([]);

  // const [inputValue, setInputValue] = React.useState('');

  // React.useEffect(() => {
  // initFlowbite();
  // }, []);

  function toggleFilter() {
    setFilterOpen((prev) => !prev);
  }

  function toggleAccordion(index: number) {
    setOpenAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  React.useEffect(() => {
    setRange(5); // or get from localStorage, etc.
    setMounted(true);
  }, []);

  // React.useEffect(() => {
  // // Set dynamic value only on the client side after initial render
  //     if (typeof window !== 'undefined') {
  //         setInputValue('Initial Client Value');
  //     }
  // }, []);

  const accordionData: AccordionOption[] = [
    {
      title: "Brand",
      options: [
        { label: "Nike", value: "nike" },
        { label: "Adidas", value: "adidas" },
      ],
    },
    {
      title: "Colour",
      options: [
        { label: "Small", value: "small" },
        { label: "Large", value: "large" },
      ],
    },
    {
      title: "Subcategory",
      options: [
        { label: "Facial Cleansers", value: "facial-cleansers" },
        { label: "Sunscreen", value: "sunscreen" },
      ],
    },
    {
      title: "Material",
      options: [
        { label: "any", value: "any" },
        { label: "any2", value: "any2" },
      ],
    },
    {
      title: "Availability",
      options: [
        { label: "In Stock", value: "in-stock" },
        { label: "Out of Stock", value: "out-of-stock" },
      ],
    },
  ];

  return (
    <>
      <Button
        onClick={toggleFilter}
        className="md:hidden fixed bottom-4 right-4 z-52"
      >
        open filter
      </Button>

      <aside
        className={`w-64 md:mt-15 overflow-y-auto md:rounded-2xl md:sticky md:top-20 m-auto
        fixed inset-0 transform transition-transform duration-300 ${
          filterOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-2xl m-4 font-bold text-brown">Filter</h2>
        <div className="rounded-2xl">
          <button
            onClick={toggleFilter}
            className="md:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* Price Accordion */}
          <div>
            <h2>
              <button
                type="button"
                onClick={() => toggleAccordion(-1)} // Use -1 for price accordion
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 gap-3"
              >
                <span className="text-dark-brown">Price</span>
                <svg
                  className={`w-3 h-3 shrink-0 transition-transform ${
                    openAccordions.includes(-1) ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="brown"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            {openAccordions.includes(-1) && (
              <div className="p-5">
                <label
                  htmlFor="minmax-range"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  100 - 1000
                </label>
                {mounted && (
                  <input
                    id="minmax-range"
                    type="range"
                    min="0"
                    max="10"
                    value={range}
                    onChange={(e) => setRange(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-light-gray accent-brown"
                  />
                )}
              </div>
            )}
          </div>

          {/* Other Accordions */}
          {accordionData.map((accordion, idx) => (
            <div key={accordion.title}>
              <h2>
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 gap-3"
                >
                  <span className="text-dark-brown">{accordion.title}</span>
                  <svg
                    className={`w-3 h-3 shrink-0 transition-transform ${
                      openAccordions.includes(idx) ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="brown"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              {openAccordions.includes(idx) && (
                <div className="p-5">
                  {accordion.options.map((option, cidx) => (
                    <div className="flex items-center mb-4" key={option.value}>
                      <input
                        id={`${accordion.title}-checkbox-${cidx}`}
                        type="checkbox"
                        value={option.value}
                        className="w-4 h-4 rounded-sm"
                      />
                      <label
                        htmlFor={`${accordion.title}-checkbox-${cidx}`}
                        className="ms-2 text-sm font-medium text-black"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>
      {filterOpen && (
        <div
          onClick={toggleFilter}
          className="md:hidden fixed inset-0 z-30 bg-black opacity-30"
        />
      )}
    </>
  );
}
