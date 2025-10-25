"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function PaymentWidget() {
  const [selectedCard] = useState("8344");
  const [currency, setCurrency] = useState({ code: "USD", symbol: "$" });
  const [showDropdown, setShowDropdown] = useState(false);

  const currencies = [
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" },
    { code: "GBP", symbol: "£" },
    { code: "EGP", symbol: "E£" },
    { code: "JPY", symbol: "¥" },
  ];

  const handleSelect = (c) => {
    setCurrency(c);
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-col gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-sm">
      {/* Amount Section */}
      <div className="flex flex-col gap-2">
        <p className="text-gray-500 text-sm font-medium">Enter Amount</p>
        <div className="flex items-center gap-3">
          <div className="border border-gray-300 text-lg font-extrabold px-5 py-2 rounded-md">
            {currency.symbol}
          </div>
          <input
            className="w-full text-2xl font-bold border border-gray-300 rounded-md px-2 py-2 outline-none bg-transparent text-slate-900 placeholder-gray-400"
            placeholder="0.00"
          />
        </div>

        {/* Currency Selector */}
        <div className="relative mt-1 inline-flex items-center gap-2 text-xs bg-gray-100 px-3 py-1 rounded-md text-gray-500 font-medium w-fit">
          {currency.code}
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            className="transition-transform hover:scale-110"
          >
            <ChevronDown size={16} />
          </button>

          {showDropdown && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md z-20 min-w-[120px] overflow-hidden">
              {currencies.map((c) => (
                <div
                  key={c.code}
                  onClick={() => handleSelect(c)}
                  className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  {c.symbol} {c.code}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Payment Method */}
      <div>
        <p className="text-gray-500 text-sm mb-1 font-medium">Pay With</p>
        <div className="flex justify-between items-center gap-3 p-3 bg-gray-100 border border-gray-300 rounded-xl">
          <span className="text-sm font-medium text-gray-700">
            <span className="font-semibold">Card:</span> {selectedCard} **** **** ****
          </span>
          <button className="transition-transform hover:scale-110">
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Withdraw Button */}
      <button
        className="w-full py-3 rounded-xl font-bold text-slate-900 
        bg-gradient-to-b from-yellow-300 to-yellow-400 
        hover:translate-y-[-2px] hover:shadow-lg transition-all"
      >
        Withdraw Money
      </button>
    </div>
  );
}
