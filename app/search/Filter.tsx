"use client"
import React from "react"
import { initFlowbite } from "flowbite";

type CheckboxOption = {
  label: string;
  value: string;
};

type AccordionOption = {
  title: string;
  options: CheckboxOption[];
};

export default function Filter(){
    const [range, setRange] = React.useState(5);
    const [mounted, setMounted] = React.useState(false);

    // const [inputValue, setInputValue] = React.useState('');

    React.useEffect(() => {
    initFlowbite();
    }, []);

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

    return(
        <div className="rounded-2xl">
            <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading">
                    <button
                        type="button" 
                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black gap-3" 
                        data-accordion-target="#accordion-collapse-body" 
                        aria-expanded="true" 
                        aria-controls="accordion-collapse-body">
                    <span className="text-black">
                        Price
                    </span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h2>
                <div
                    id="accordion-collapse-body" 
                    className="hidden" 
                    aria-labelledby="accordion-collapse-heading">
                    <div className="p-5">
                        <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900">
                            100 - 1000
                        </label>
                        {mounted && range !== undefined && (
                        <input
                            id="minmax-range"
                            type="range"
                            min="0"
                            max="10"
                            value={range}
                            onChange={e => setRange(Number(e.target.value))}
                            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-400"
                        />
                        )}
                    </div>
                </div>
                {accordionData.map((accordion, idx) => (
                    <div key={accordion.title}>
                        <h2 id={`accordion-collapse-heading-${idx}`}>
                            <button
                                type="button" 
                                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 gap-3" 
                                data-accordion-target={`#accordion-collapse-body-${idx}`} 
                                aria-expanded="false" 
                                aria-controls={`accordion-collapse-body-${idx}`}>
                                <span className="text-black">
                                    {accordion.title}
                                </span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>

                        <div
                            id={`accordion-collapse-body-${idx}`} 
                            className="p-5 hidden" 
                            aria-labelledby={`accordion-collapse-heading-${idx}`}
                        >
                            {accordion.options.map((option, cidx) => (
                                <div
                                    className="flex items-center mb-4"
                                    key={option.value}>
                                    <input
                                        id={`${accordion.title}-checkbox-${cidx}`}
                                        type="checkbox"
                                        value={option.value}
                                    //  onChange={(e) => setInputValue(e.target.value)}
                                        className="w-4 h-4 border-gray-300 rounded-sm"
                                    />
                                    <label
                                        htmlFor={`${accordion.title}-checkbox-${cidx}`}
                                        className="ms-2 text-sm font-medium text-black">
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                            {/* <div className="flex items-center mb-4">
                                <input id="second-checkbox" type="checkbox"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="w-4 h-4 border-gray-300 rounded-sm"/>
                                <label htmlFor="second-checkbox" className="ms-2 text-sm font-medium text-black">brand 2</label>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div> 
        </div>
    )
}