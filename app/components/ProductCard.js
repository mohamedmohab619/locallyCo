"use client";

import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-full">
      {/* Product Image */}
      <div className="flex justify-center items-center bg-gray-50 p-4 h-48">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="object-contain max-h-full"
        />
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-grow p-4">
        <h5 className="text-sm font-medium text-gray-900 line-clamp-2">
          {product.name}
        </h5>

        <p className="mt-2 text-lg font-semibold text-gray-800">
          {product.price} EGP
        </p>

        {/* Rating */}
        <div className="mt-auto flex items-center">
          <span className="text-green-600 font-bold">{product.rating}</span>
          <svg
            className="w-4 h-4 ml-1 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-xs text-gray-500">
            ({product.reviews})
          </span>
        </div>
      </div>
    </div>
  );
}
