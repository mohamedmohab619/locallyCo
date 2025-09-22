"use client";
import React, { useState, useEffect } from "react";
import { Rating, RatingStar, Button, Badge } from "flowbite-react";
export default function BambiBabyTeeProductPage() {
  // defaults while loading
  const [images, setImages] = useState(["https://prd.place/400?id=5&p=40", "https://prd.place/400?id=6&p=40", "https://prd.place/400?id=7&p=40"]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [size, setSize] = useState(sizes[1]);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(colors[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('http://localhost:8888/api/v1/products/20');
        if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
        let data = await res.json();
        data = data.result;
        console.log("fetched data:", data);
        if (!mounted) return;
        // adapt this mapping depending on your API shape
        // assume API returns an object with attributes and images similar to the earlier code
        setSelectedProduct(data);
        if (data?.images && Array.isArray(data.images) && data.images.length) {
          setImages(data.images);
          setSelectedImage(0);
        }
        if (data?.versioning?.attributes?.color?.values) setColors(data.versioning?.attributes.color.values);
        if (data?.versioning?.attributes?.size?.values) setSizes(data.versioning?.attributes.size.values);

        console.log("new colors", data.versioning.attributes.color.values);
        console.log("new sizes", data.versioning.attributes.size.values);

        // set sensible defaults after data arrives
        setSize((prev) => (data?.attributes?.size?.values?.[0] ?? prev));
        setColor((prev) => (data?.attributes?.color?.values?.[0] ?? prev));
      } catch (err) {
        console.error(err);
        if (mounted) setError(err.message ?? String(err));
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const ratingStats = [
    { stars: 5, percent: 70 },
    { stars: 4, percent: 17 },
    { stars: 3, percent: 8 },
    { stars: 2, percent: 4 },
    { stars: 1, percent: 1 },
  ];

  function addToCart() {
    alert(`Added ${qty} × Bambi Baby Tee (size: ${size}, color: ${color}) to cart`);
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto p-6">
        {loading && (
          <div className="mb-4 text-sm text-gray-600">Loading product...</div>
        )}
        {error && (
          <div className="mb-4 text-sm text-red-600">Error loading product: {error}</div>
        )}
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
          <ol className="flex gap-2 items-center">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li>/</li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li>/</li>
            <li className="font-medium">Bambi Baby Tee</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
       {/* Left: Product Images */}
<div className="flex flex-col h-full">
  {/* Big Image */}
<div className="overflow-hidden border rounded-2xl shadow-sm relative group">
  <img
    src={images[selectedImage]}
    alt={`Bambi Baby Tee - Image ${selectedImage + 1}`}
    className="w-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
  />
</div>

  {/* Thumbnails */}
  <div className="mt-4 grid grid-cols-3 gap-3">
    {images.map((src, i) => (
      <button
        key={i}
        onClick={() => setSelectedImage(i)}
        className={`overflow-hidden rounded-xl border transition-all duration-200 hover:ring-2 hover:ring-blue-300 ${
          i === selectedImage ? "ring-2 ring-blue-500" : ""
        }`}
      >
        <img
          src={src}
          alt={`Thumbnail ${i + 1}`}
          className="w-full h-48 object-cover rounded-xl"
        />
      </button>
    ))}
  </div>
</div>


          {/* Right: Product Info */}
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl md:text-3xl font-semibold">Bambi Baby Tee</h1>

            <a href="/brands/asili" className="text-sm text-blue-600 hover:underline mt-1">
              Brand: Asili
            </a>

            <div className="flex items-center gap-3 mt-2">
              <p className="text-2xl font-bold text-gray-900">EGP 350.00</p>
              <p className="line-through text-gray-400 text-lg">EGP 420.00</p>
              <Badge color="success">Save 15%</Badge>
            </div>

            {/* Ratings summary */}
            <div className="flex items-center gap-2 mt-2">
              <Rating>
                {[1, 2, 3, 4].map((i) => (
                  <RatingStar key={i} filled={true} />
                ))}
                <RatingStar filled={false} />
                <p className="ml-2 text-sm font-medium text-gray-700">4.3</p>
              </Rating>
              <a href="#reviews" className="text-sm text-blue-600 underline">
                20,587 Ratings
              </a>
            </div>

            <div className="mt-4 text-sm">
              <Badge color="success">In Stock</Badge>
            </div>

            {/* Size selector */}
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-2">Size</h3>
              <div className="flex gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-3 py-2 rounded-md border focus:outline-none uppercase ${
                      size === s ? "bg-gray-900 text-white" : "bg-white text-gray-700"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Color selector */}
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-2">Color</h3>
              <div className="flex gap-3">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`w-8 h-8 rounded-full border-2 focus:outline-none ${
                      color === c ? "ring-2 ring-gray-900" : ""
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity selector */}
            <div className="mt-6 flex items-center gap-3">
              <h3 className="text-sm font-medium">Quantity</h3>
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-1 border-r"
                >
                  −
                </button>
                <span className="px-4">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-1 border-l"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-3">
              <Button
                onClick={addToCart}
                className="w-80 bg-[#FF6347] hover:bg-[#ff7a5e] text-white font-medium shadow"
              >
                Add to Cart
              </Button>
              <Button outline className="w-80">
                Buy Now
              </Button>
            </div>

            {/* Product Tabs */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold">Product Details</h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Soft cotton baby tee featuring a playful Bambi graphic. Comfortable fit and durable stitching.
              </p>
              <ul className="mt-3 text-gray-700 list-disc list-inside">
                <li>100% Cotton</li>
                <li>Machine wash cold</li>
                <li>Made with safe dyes</li>
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <h3 className="font-medium">Shipping</h3>
                <p>Free shipping over EGP 500. Local delivery 2-4 days.</p>
              </div>
              <div>
                <h3 className="font-medium">Return Policy</h3>
                <p>Returns accepted within 7 days of delivery. Item must be unused.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ratings & Reviews */}
        <section id="reviews" className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Product Ratings & Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Rating Breakdown */}
            <div>
              <div className="flex items-center mb-2">
                <Rating>
                  {[1, 2, 3, 4].map((i) => (
                    <RatingStar key={i} filled={true} />
                  ))}
                  <RatingStar filled={false} />
                  <p className="ml-2 text-sm font-medium text-gray-700">4.95 out of 5</p>
                </Rating>
              </div>
              <p className="text-sm font-medium text-gray-500">1,745 global ratings</p>

              <div className="space-y-2 mt-4 ">
                {ratingStats.map(({ stars, percent }) => (
                  <div key={stars} className="flex items-center">
                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                      {stars} star
                    </a>
                    <div className="w-2/4 h-3 mx-4 bg-gray-200 rounded-sm">
                      <div
                        className="h-3 bg-yellow-300 rounded-sm"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">{percent}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <div className="flex items-center justify-between ">
                <h3 className="text-lg font-semibold">Customer Reviews</h3>
                <Button size="xs" outline>
                  Write a Review
                </Button>
              </div>
              <div className="mt-4 space-y-4 ">
                {[
                  { name: "Amina", time: "5 days ago", text: "Lovely material and perfect fit." },
                  { name: "Omar", time: "2 weeks ago", text: "Nice print and fast delivery." },
                  { name: "Mo", time: "2 weeks ago", text: "Fast delivery." },
                ].map((r, i) => (
                  <div key={i} className="border rounded 2xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">
                        {r.name} <Badge color="gray">Verified</Badge>
                      </div>
                      <div className="text-xs text-gray-500">{r.time}</div>
                    </div>
                    <p className="mt-2 text-gray-700">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-12 ">
          <h2 className="text-2xl font-semibold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {["/Product-small1.webp", "/Product-small2.webp", "/Product-big.webp", "/Product-small1.webp"].map(
              (p, i) => (
                <div
                  key={i}
                  className="border rounded-md p-2 hover:shadow transition"
                >
                  <img
                    src={p}
                    alt="Related product"
                    className="w-full h-40 object-cover rounded"
                  />
                  <p className="mt-2 text-sm font-medium">Product {i + 1}</p>
                  <p className="text-gray-600 text-sm">EGP 299.00</p>
                </div>
              )
            )}
          </div>
        </section>

        <div className="h-20" />
      </div>
    </div>
  );
}
