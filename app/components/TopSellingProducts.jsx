"use client";
import { MoreVertical } from "lucide-react";

export default function TopSellingProducts() {
  const products = [
    {
      id: 1,
      name: "Paypal Payment",
      type: "Withdraw",
      icon: "P",
      iconBg: "#FFC439",
      date: "Jan 18, 2023",
      time: "09:30 PM",
      transactionId: "Pay-3083 - 23",
      amount: "12,340 USD",
      status: "Delivered",
    },
    {
      id: 2,
      name: "Mercury Inc.",
      type: "Transferred",
      icon: "M",
      iconBg: "#2D3142",
      date: "Dec 12, 2022",
      time: "08:00 PM",
      transactionId: "Mer-1249 - 23",
      amount: "8,265 USD",
      status: "Delivered",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mt-8 w-full overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Top Selling Products</h2>
        <button className="text-gray-500 hover:text-gray-900 transition">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Scrollable Table Container */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          {/* Table Header */}
          <div className="grid grid-cols-[0.3fr_1.5fr_1fr_1fr_1fr_0.8fr] gap-4 border-b border-gray-200 pb-3 mb-2">
            <div></div>
            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
              Product Name
            </div>
            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
              Date
            </div>
            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
              Transaction ID
            </div>
            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
              Amount
            </div>
            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
              Sales
            </div>
          </div>

          {/* Product Rows */}
          <div className="flex flex-col gap-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-[0.3fr_1.5fr_1fr_1fr_1fr_0.8fr] gap-4 items-center rounded-lg p-3 hover:bg-gray-50 transition"
              >
                {/* Checkbox */}
                <div>
                  <input
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded cursor-pointer accent-gray-800"
                  />
                </div>

                {/* Product Info */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: product.iconBg }}
                  >
                    {product.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.type}</p>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <p className="text-sm font-medium text-gray-900">{product.date}</p>
                  <p className="text-xs text-gray-500">{product.time}</p>
                </div>

                {/* Transaction ID */}
                <div className="text-sm font-medium text-gray-800">
                  {product.transactionId}
                </div>

                {/* Amount */}
                <div className="text-sm font-semibold text-gray-900">{product.amount}</div>

                {/* Status */}
                <div className="flex justify-end">
                  <button className="px-4 py-1.5 border border-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-100 transition whitespace-nowrap">
                    {product.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
