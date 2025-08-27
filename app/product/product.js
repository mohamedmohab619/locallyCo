 "use client";

import React, { useState } from "react";
import "./product.css";
import Link from "next/link";

const images = [
  // Updated main images to match the photo layout
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d53c0d9b-e991-4da3-a988-6e3992894a7c.png",
  // Use different images if needed
];

const otherScents = [
  // Added images for other scents
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/14d73e1a-9783-4548-8d6c-90a35ee774bd.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a0ef66a6-8e93-421c-9c83-cd1323cb1667.png",
];

export default function Product() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [tab, setTab] = useState("description");

  return (
    <div className="product-page">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="logo-section">
          <div className="logo-shape" />
          <strong>Untitled UI</strong>
        </div> 
            <Link href="/" className="link text-blue-600 ml-5">Home</Link>

      </header>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <ol>
          <li>Home</li>
          <li>Perfume</li>
        </ol>
      </nav>

      {/* Main Row */}
      <main className="main-content">
        {/* Gallery */}
        <section className="gallery-section">
<div className="vertical-previews">
  {Array.from({ length: 5 }).map((_, i) => (
    <button
      key={i}
      className="preview-thumb selected"
    >
      <img src={images[selectedImageIndex]} alt={`Thumbnail ${i + 1}`} />
    </button>
  ))}
</div>

          <div className="main-image-wrapper">
            <img
              src={images[selectedImageIndex]}
              alt={`Main product ${selectedImageIndex + 1}`}
              className="main-image"
            />
            <button className="wishlist-button">♡</button>
          </div>
        </section>

        {/* Details */}
        <section className="details-section">
          <section className="part-2">
          <h1 className="product-title">
            Dior Sauvage Parfum Spray for Men 2.0 Ounces, clear
          </h1>
          <div className="ratings-row">
            <span className="rating-number">4.0 ⭐</span>
            <a href="#rating-details">120 Ratings</a>
            <span>100+ bought in past month</span>
          </div>
          <div className="price">500EGP</div>
</section>
          <div className="purchase-box">
            <div className="seller-info">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/12f3d2d9-54ea-4574-a854-d2e756204c5a.png"
                alt="Seller"
                className="seller-photo"
              />
              <p>
                Sold by <strong>Batata</strong>
              </p>
            </div>
            <button className="btn add-to-cart">Add to cart</button>
            <button className="btn buy-now">Buy now</button>
          </div>
        </section>
      </main>

      {/* Other Scents */}
  <div className="other-scents">
  <span className="other-scents-label">Other Scents</span>
  <div className="scents-thumbs">
    {Array.from({ length: 5 }).map((_, i) => (
      <img
        key={i}
        src={otherScents[0]} // use the first scent (or selected one)
        alt={`Scent ${i + 1}`}
        className="scents-thumb"
      />
    ))}
  </div>
</div>

      {/* Tabs */}
      <section className="product-tabs">
        <div className="tabs">
          <button
            className={`tab-button ${tab === "description" ? "active" : ""}`}
            onClick={() => setTab("description")}
          >
            Product Description
          </button>
          <button
            className={`tab-button ${tab === "specifications" ? "active" : ""}`}
            onClick={() => setTab("specifications")}
          >
            Specifications
          </button>
        </div>

        {tab === "description" && (
          <div className="tab-panel">
            <p>
              Beyond is a bold and long-lasting fragrance for men who refuse limits. It begins with a warm, spicy kick, setting the stage for an intense heart of black leather, rich and commanding. As it deepens, aromatic cedarwood and earthy patchouli add strength and depth, while a smoky finish enhances its raw, untamed sensuality.
            </p>
          </div>
        )}

        {tab === "specifications" && (
          <div className="tab-panel">
            <p>Specifications content goes here.</p>
            <h3>Highlights</h3>
            <ul>
              <li>Bold & Intense – A powerful blend of leather, spice, and woods.</li>
              <li>Dark & Mysterious – A smoky, sensual trail that lingers.</li>
              <li>Masculine & Commanding – Perfect for those who embrace strength and individuality.</li>
              <li>Long-Lasting Presence – A scent that stays with you from day to day.</li>
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
