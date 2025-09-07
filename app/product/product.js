"use client";

import React, { useState } from "react";
import "./product.css";
import Link from "next/link";
import Image from "next/image";
import { Navbar, NavbarBrand, TextInput, Button } from "flowbite-react";
import { HiUser, HiShoppingCart } from "react-icons/hi";

const images = [
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d53c0d9b-e991-4da3-a988-6e3992894a7c.png",
];

const otherScents = [
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/14d73e1a-9783-4548-8d6c-90a35ee774bd.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a0ef66a6-8e93-421c-9c83-cd1323cb1667.png",
   "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/14d73e1a-9783-4548-8d6c-90a35ee774bd.png",
 "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/14d73e1a-9783-4548-8d6c-90a35ee774bd.png",
 "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/14d73e1a-9783-4548-8d6c-90a35ee774bd.png",
];


export default function Product() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [tab, setTab] = useState("description");

  return (
    <div className="product-page">
      {/* Navbar */}
      <Navbar
        fluid
        style={{ backgroundColor: "#FFEFC1" }}
        className="px-6 shadow-md fixed top-0 left-0 right-0 z-50"
      >
        <NavbarBrand href="/">
          <span className="self-center whitespace-nowrap text-3xl font-extrabold text-gray-900">
            Locallyco
          </span>
        </NavbarBrand>

        <div className="flex flex-1 justify-center mx-6 max-w-2xl">
          <div className="flex w-full">
            <TextInput
              type="text"
              placeholder="What are you looking for?"
              className="w-full rounded-l-lg"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button color="gray" pill>
            <HiUser className="mr-1 h-5 w-5" />
            <span className="hidden md:inline">Sign In</span>
          </Button>

          <Button color="gray" pill>
            <HiShoppingCart className="mr-1 h-5 w-5" />
            <span className="hidden md:inline">Cart</span>
          </Button>
        </div>
      </Navbar>

      {/* Page Content */}
      <div className="pt-20 px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="breadcrumb mb-2 text-gray-700 text-sm">
          <ol className="flex gap-2 items-center">
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li> / Perfume</li>
          </ol>
        </nav>

        {/* Main Row */}
        <main className="main-content flex flex-col md:flex-row gap-6">
          {/* Gallery */}
          <section className="gallery-section flex gap-4">
            <div className="vertical-previews flex flex-col gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <button
                  key={i}
                  className={`preview-thumb border p-1 ${
                    selectedImageIndex === i ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImageIndex(i)}
                >
                  <Image
                    src={images[selectedImageIndex]}
                    alt={`Thumbnail ${i + 1}`}
                    width={60}
                    height={60}
                    className="object-cover rounded-md"
                  />
                </button>
              ))}
            </div>

            <div className="main-image-wrapper relative w-full md:w-96">
              <Image
                src={images[selectedImageIndex]}
                alt={`Main product ${selectedImageIndex + 1}`}
                width={400}
                height={400}
                className="main-image rounded-lg"
              />
              <button className="wishlist-button absolute top-2 right-2 text-2xl">♡</button>
            </div>
          </section>

          {/* Details */}
          <section className="details-section flex-1 flex flex-col gap-4">
            <h1 className="product-title text-2xl font-semibold">
              Dior Sauvage Parfum Spray for Men 2.0 Ounces, clear
            </h1>
            <div className="ratings-row flex gap-4 items-center text-sm text-gray-700">
              <span className="rating-number">4.0 ⭐</span>
              <a href="#rating-details" className="underline">
                120 Ratings
              </a>
              <span>100+ bought in past month</span>
            </div>
            <div className="price text-xl font-bold">500EGP</div>

            <div className="purchase-box flex gap-4 items-center">
              <div className="seller-info flex items-center gap-2">
                <Image
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/12f3d2d9-54ea-4574-a854-d2e756204c5a.png"
                  alt="Seller"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p>Sold by <strong>Batata</strong></p>
              </div>
              <button className="btn add-to-cart bg-gray-300 px-4 py-2 rounded-lg">
                Add to cart
              </button>
              <button className="btn buy-now bg-blue-600 text-white px-4 py-2 rounded-lg">
                Buy now
              </button>
            </div>
          </section>
        </main>

        {/* Other Scents */}
<div className="other-scents mt-6">
  <span className="other-scents-label font-semibold">Other Scents</span>
  <div className="scents-thumbs mt-2">
    {otherScents.slice(0, 5).map((img, i) => ( // slice ensures 5 horizontal
      <Image
        key={i}
        src={img}
        alt={`Scent ${i + 1}`}
        width={64}
        height={64}
        className="scents-thumb object-cover rounded-lg"
      />
    ))}
  </div>
</div>

        {/* Tabs */}
        <section className="product-tabs mt-6">
          <div className="tabs flex gap-2 border-b">
            <button
              className={`tab-button ${tab === "description" ? "border-b-2 border-blue-600 pb-1" : ""}`}
              onClick={() => setTab("description")}
            >
              Product Description
            </button>
            <button
              className={`tab-button ${tab === "specifications" ? "border-b-2 border-blue-600 pb-1" : ""}`}
              onClick={() => setTab("specifications")}
            >
              Specifications
            </button>
          </div>

          {tab === "description" && (
            <div className="tab-panel mt-2 text-gray-700">
              <p>
                Beyond is a bold and long-lasting fragrance for men who refuse limits. It begins with a warm, spicy kick, setting the stage for an intense heart of black leather, rich and commanding. As it deepens, aromatic cedarwood and earthy patchouli add strength and depth, while a smoky finish enhances its raw, untamed sensuality.
              </p>
            </div>
          )}

          {tab === "specifications" && (
            <div className="tab-panel mt-2 text-gray-700">
              <p>Specifications content goes here.</p>
              <h3 className="font-semibold mt-2">Highlights</h3>
              <ul className="list-disc list-inside">
                <li>Bold & Intense – A powerful blend of leather, spice, and woods.</li>
                <li>Dark & Mysterious – A smoky, sensual trail that lingers.</li>
                <li>Masculine & Commanding – Perfect for those who embrace strength and individuality.</li>
                <li>Long-Lasting Presence – A scent that stays with you from day to day.</li>
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
