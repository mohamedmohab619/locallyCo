"use client";
import React from "react";

export default function TopSellingProductsTable() {
  const products = [
    {
      id: 1,
      name: "Nike",
      description: "Air Jordan 1 Zoom Comfort 2",
      price: 680.5,
      image: "👟",
      status: "Active",
      stock: "In Stock",
    },
    {
      id: 2,
      name: "Zara",
      description: "Geometric Print Shirt",
      price: 845.75,
      image: "👔",
      status: "Active",
      stock: "In Stock",
    },
    {
      id: 3,
      name: "Nike",
      description: "Nike SB Blazer Court Mid",
      price: 930.0,
      image: "👞",
      status: "Active",
      stock: "In Stock",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mt-8 w-full flex flex-col gap-5">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900">Top Selling Products</h2>

      {/* Product List */}
      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          <div className="grid grid-cols-[0.4fr_2fr_1fr_1fr_1fr] text-sm font-semibold text-gray-500 uppercase border-b border-gray-200 pb-2 mb-3 tracking-wide">
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Status</div>
            <div>Stock</div>
          </div>

          {products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-[0.4fr_2fr_1fr_1fr_1fr] items-center py-3 border-b border-gray-100 hover:bg-gray-50 transition text-sm"
            >
              {/* Product Image */}
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  {product.image}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <p className="font-semibold text-gray-900">{product.name}</p>
                <p className="text-gray-500 text-xs">{product.description}</p>
              </div>

              {/* Price */}
              <div className="font-semibold text-gray-900">
                ${product.price.toFixed(2)}
              </div>

              {/* Status */}
              <div>
                <span className="px-2 py-1 text-[11px] bg-green-100 text-green-700 font-medium rounded-full">
                  {product.status}
                </span>
              </div>

              {/* Stock */}
              <div>
                <span className="px-2 py-1 text-[11px] bg-gray-100 text-gray-600 font-medium rounded-full">
                  {product.stock}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
