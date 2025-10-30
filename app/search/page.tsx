"use client";

import Navbar from "../components/NavBar";
import Filter from "./Filter";
import Sort from "./Sort";
import Footer from "../components/Footer";
import HomeProductCard from "../components/HomeProductCard";
import TiltedWrapper from "../components/TiltedWrapper";
import Link from "next/link";

export default function Page() {
  const handleAddToCart = (title: string) => {
    console.log("Added to cart:", title);
  };

  const handleBuyNow = (title: string) => {
    console.log("Buy now:", title);
  };

  const handleAddToFavorites = (title: string) => {
    console.log("Added to favorites:", title);
  };

  // Example products — replace with your actual search results
  const products = [
    {
      imageSrc: "/shorts.jpg",
      brand: "Brand A",
      title: "Product 1",
      price: "$49.99",
      badge: "New",
    },
    {
      imageSrc: "/shirt.jpg",
      brand: "Brand B",
      title: "Product 2",
      price: "$59.99",
      badge: "Hot",
    },
    {
      imageSrc: "/shoes6.jpg",
      brand: "Brand C",
      title: "Product 3",
      price: "$39.99",
    },
    {
      imageSrc: "/shoes6.jpg",
      brand: "Brand D",
      title: "Product 4",
      price: "$79.99",
      badge: "Sale",
    },
    {
      imageSrc: "/shoes6.jpg",
      brand: "Brand D",
      title: "Product 4",
      price: "$79.99",
      badge: "Sale",
    },
    {
      imageSrc: "/shoes6.jpg",
      brand: "Brand D",
      title: "Product 4",
      price: "$79.99",
      badge: "Sale",
    },
    {
      imageSrc: "/shoes6.jpg",
      brand: "Brand D",
      title: "Product 4",
      price: "$79.99",
      badge: "Sale",
    },
    {
      imageSrc: "/shoes6.jpg",
      brand: "Brand D",
      title: "Product 4",
      price: "$79.99",
      badge: "Sale",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="grid grid-cols-5">
        {/* Filter Sidebar */}
        <div className="col-span-1 bg-[#FFFCF2] border-r border-gray-200">
          <aside
            className="md:w-64 mt-15 overflow-y-auto bg-white border border-gray-200 
            rounded-2xl sticky top-20 m-auto"
          >
            {/* <h2 className="text-xl m-4 text-brown">Filter</h2> */}
            <Filter />
          </aside>
        </div>

        {/* Main Content */}
        <div className="col-span-4 bg-green-50 flex flex-col">
          <div className="self-end flex flex-col">
            <Sort />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 gap-15 w-full px-5">
            {products.map((product, index) => (
              <TiltedWrapper key={index} scaleOnHover={1.05}>
                <Link href={`/product/${product.title}`} className="link">
                  <HomeProductCard
                    imageSrc={product.imageSrc}
                    brand={product.brand}
                    title={product.title}
                    price={product.price}
                    badge={product.badge}
                    onAddToCart={() => handleAddToCart(product.title)}
                    onBuyNow={() => handleBuyNow(product.title)}
                    onAddToFavorites={() => handleAddToFavorites(product.title)}
                  />
                </Link>
              </TiltedWrapper>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
