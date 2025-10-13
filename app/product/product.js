"use client";
import React, { useState, useEffect } from "react";
import { Rating, RatingStar, Button, Badge } from "flowbite-react";
import ReviewCard from "../components/ReviewCard";
import AttributeSection from "../components/AttributeSection";

export default function BambiBabyTeeProductPage() {
  // defaults while loading
  const [images, setImages] = useState(["https://prd.place/400?id=5&p=40", "https://prd.place/400?id=6&p=40", "https://prd.place/400?id=7&p=40"]);

  // TODO: set productId from props or route in future; default to 30 for now
  const [productId, setProductId] = useState(2);
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentVersion, setCurrentVersion] = useState(null);
  const [skuCode, setSkuCode] = useState("");
  const [productVersions, setProductVersions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({}); // key: attribute name, value: selected value
  const [selectedImage, setSelectedImage] = useState(0);
  const [ratingStats, setRatingStats] = useState([ { rate: 5, percent: 70 }, { rate: 4, percent: 17 }, { rate: 3, percent: 8 }, { rate: 2, percent: 4 }, { rate: 1, percent: 1 } ]);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        // TODO: get product's (id, name, etc...) from the preview page
        const res = await fetch(`http://localhost:8888/api/v1/products/${productId}?review=3&category&brand`);
        if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
        let data = await res.json();
        data = data.result;
        console.log("fetched data:", data);
        if (!mounted) return;

        setCurrentProduct(data);
        setImages([data?.imageUrl]);
        setRatingStats(data?.ratingStats || ratingStats);

        // fetch product's versions
        const resultRes = await fetch(`http://localhost:8888/api/v1/products/${productId}/versions`);
        if (!resultRes.ok) throw new Error(`fetch failed: ${resultRes.status}`);
        const resultData = await resultRes.json();
        setProductVersions(resultData.result);
        console.log('Product Versions', resultData.result);

        // select the first version as the default
        const currentVersion = resultData.result[0];
        console.log(`current version: ${currentVersion}`)
        setCurrentVersion(currentVersion);
        setSkuCode((prev) => (currentVersion?.skuCode ?? prev));
        setImages((prev) => currentVersion?.images ?? prev);

        // select the options that this version has
        setSelectedOptions(() => currentVersion?.attributes);
      } catch (err) {
        console.error(err);
        if (mounted) setError(err.message ?? String(err));
      } finally {
        if (mounted) setLoading(false);
      }
    }
    if (productId) load();
    return () => {
      mounted = false;
    };
  }, [productId]);

  function handleAttributeSelect(attributeName, value) {
    console.log(`selecting ${value} as the new ${attributeName}`);
    if (! attributeName in Object.keys(currentVersion.attributes)) {
      console.error("Attribute not found: " + attributeName);
      return;
    }

    const tmpOptionsSelection = {...selectedOptions, [attributeName]: value};
    console.log('Temporary Options Selection:', tmpOptionsSelection);

    // find the version that matches the selected options
    const matchingVersion = productVersions.find((ver) => {
      for (const [attrName, attrValue] of Object.entries(ver.attributes)) {
        if (tmpOptionsSelection[attrName].toLowerCase() !== attrValue.toLowerCase()) return false;
      }
      return true;
    });

    if (matchingVersion) {
      setSelectedOptions(tmpOptionsSelection);
      setCurrentVersion(matchingVersion);
      setSkuCode(matchingVersion.skuCode);
      setImages(matchingVersion.images);
    } else {
      console.error("No matching version found for selected options");
    }
  }

  function addToCart() {
    // TODO: implement adding to cart functionality
    alert(`Added ${qty} × ${currentProduct?.name} to cart`);
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
            <li className="font-medium">{currentProduct?.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Product Images */}
          <div className="flex flex-col h-full">
            {/* Big Image */}
            <div className="overflow-hidden border rounded-2xl shadow-sm relative group">
              <img
                src={images[selectedImage]}
                alt={`${currentProduct?.name} - Image ${selectedImage + 1}`}
                className="w-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Thumbnails */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`overflow-hidden rounded-xl border transition-all duration-200 hover:ring-2 hover:ring-blue-300 ${i === selectedImage ? "ring-2 ring-blue-500" : ""
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
            <h1 className="text-2xl md:text-3xl font-semibold">{currentProduct?.name ?? ""}</h1>

            <a href={`/brands/${currentProduct?.brand?.name ?? ""}`} className="text-sm text-blue-600 hover:underline mt-1">
              Brand: {currentProduct?.brand?.name ?? ""}
            </a>

            <div className="flex items-center gap-3 mt-2">
              {/* TODO: handle discount/offer data */}
              <p className="text-2xl font-bold text-gray-900">EGP {(currentVersion?.priceCent / 100) ?? 0}</p>
              <p className="line-through text-gray-400 text-lg">EGP {((currentVersion?.priceCent + 1000) / 100) ?? 0}</p>
              <Badge className="text-green-500">Save 15%</Badge>
            </div>

            {/* Ratings summary */}
            <div className="flex items-center gap-2 mt-2">
              <Rating>
                {[1, 2, 3, 4].map((i) => (
                  <RatingStar key={i} filled={true} />
                ))}
                <RatingStar filled={false} />
                <p className="ml-2 text-sm font-medium text-gray-700">{currentProduct?.averageRating || 0}</p>
              </Rating>
              <a href="#reviews" className="text-sm text-blue-600 underline">
                {currentProduct?.reviewCount} Ratings
              </a>
            </div>

            <div className="mt-4 text-sm">
              <span>SKU: {skuCode}</span>

              { (currentVersion?.quantity > 0)
                ? <Badge className="inline text-green-500">In Stock</Badge>
                : <Badge className="inline text-red-500">Out of Stock</Badge>
              }
            </div>

            {currentProduct?.attributes?.map((a) => (
              <AttributeSection key={a.name} name={a.name} values={a.values} selectedValue={selectedOptions[a.name] || a.values[0]} onSelect={handleAttributeSelect} />
            ))}

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
              <p className="mt-2 text-gray-700 leading-relaxed">{currentProduct?.description}</p>
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
                  <p className="ml-2 text-sm font-medium text-gray-700">{currentProduct?.averageRating || 0} out of 5</p>
                </Rating>
              </div>
              <p className="text-sm font-medium text-gray-500">{currentProduct?.reviewCount} global ratings</p>

              <div className="space-y-2 mt-4 ">
                {ratingStats.map(({ rate, percent }) => (
                  <div key={rate} className="flex items-center">
                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                      {rate} star
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
              { currentProduct
                ? <div className="mt-4 space-y-4 ">
                    {currentProduct.reviews?.map((r, i) => {
                      const date = new Date(r.createdAt);
                      r.createdAt = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
                      const name = r.customer.fname + " " + r.customer.lname;
                      return <ReviewCard key={i} name={name} time={r.createdAt} text={r.comment} /> 
                    })}
                  </div>
                : <div>No Reviews Yet!</div>
              }
            </div>
          </div>
        </section>

        {/* Related Products */}
        {/* TODO: include related products in the API */}
        <section className="mt-12 ">
          <h2 className="text-2xl font-semibold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {["https://prd.place/400?id=5&p=40", "https://prd.place/400?id=6&p=40", "https://prd.place/400?id=7&p=40", "https://prd.place/400?id=8&p=40"].map(
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
