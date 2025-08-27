"use client";

import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }) {
  return (
    <div className="grid gap-4 
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
