"use client";
import { useEffect } from "react";
import "./search.css"; 
import { Navbar } from "flowbite-react";
import Link from "next/link";
import SideCard from "../components/sidebarCard";
import RightSortButton from "../components/rightSortbutton";
import ProductsGrid from "../components/ProductsGrid";

export default function Search() {
  const products = [
    {
      name: "Dior Sauvage Parfum Spray for Men 2.0 Ounces, clear",
      price: 500,
      rating: 4.0,
      reviews: 120,
      image: "/Locally-BGPattern.jpg", // replace with real path
    },
    {
      name: "Dior Sauvage Parfum Spray for Men 2.0 Ounces, clear",
      price: 500,
      rating: 4.0,
      reviews: 120,
      image: "/Locally-BGPattern.jpg", // replace with real path
    },
    {
      name: "Dior Sauvage Parfum Spray for Men 2.0 Ounces, clear",
      price: 500,
      rating: 4.0,
      reviews: 120,
      image: "/Locally-BGPattern.jpg", // replace with real path
    },
    {
      name: "Dior Sauvage Parfum Spray for Men 2.0 Ounces, clear",
      price: 500,
      rating: 4.0,
      reviews: 120,
      image: "/Locally-BGPattern.jpg", // replace with real path
    },
    {
      name: "Dior Sauvage Parfum Spray for Men 2.0 Ounces, clear",
      price: 500,
      rating: 4.0,
      reviews: 120,
      image: "/Locally-BGPattern.jpg", // replace with real path
    },
    {
      name: "Dior Sauvage Parfum Spray for Men 2.0 Ounces, clear",
      price: 500,
      rating: 4.0,
      reviews: 120,
      image: "/Locally-BGPattern.jpg", // replace with real path
    },
    {
      name: "Dior Sauvage Parfum Spray for Men 2.0 Ounces, clear",
      price: 500,
      rating: 4.0,
      reviews: 120,
      image: "/Locally-BGPattern.jpg", // replace with real path
    },
    {
      name: "Dior Sauvage Parfum Spray for Men 2.0 Ounces, clear",
      price: 500,
      rating: 4.0,
      reviews: 120,
      image: "/Locally-BGPattern.jpg", // replace with real path
    },
    {
      name: "Dior Sauvage Parfum Spray for Men 2.0 Ounces, clear",
      price: 500,
      rating: 4.0,
      reviews: 120,
      image: "/Locally-BGPattern.jpg", // replace with real path
    },
    {
      name: "Dior Sauvage Parfum Spray for Men 2.0 Ounces, clear",
      price: 500,
      rating: 4.0,
      reviews: 120,
      image: "/Locally-BGPattern.jpg", // replace with real path
    }
    // add more products...
  ];

  useEffect(() => {
    import("flowbite"); // load flowbite JS only in browser
  }, []);

  return (
    <div className="body">
      {/* navbar */}
      <Navbar className="hhh">
        <input
          type="search"
          id="search"
          placeholder="    Search..."
          className="ml-[39px] h-[44px] w-[320px] rounded-[8px] shadow-lg bg-white"
        />

        <Link href="/" className="link">Home</Link>
        

      </Navbar>

      {/* sidebar + main */}
      <div className="bg-amber-950 h-full container mx-auto flex justify-start">
        <div>
          <SideCard />
        </div>

        <div className="bg-yellow-500 pt-[16px] w-full">
          {/* sort area */}
          <div className="bg-red-500 flex justify-between items-center">
            <div>900 results for &quot;perfume&quot;</div>
            <RightSortButton />
          </div>

          {/* products grid */}
          <div className="p-6">
            <ProductsGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}
