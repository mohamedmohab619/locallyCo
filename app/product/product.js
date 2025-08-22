"use client";

import React, { useState } from "react";
import "./product.css";

const images = [
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d53c0d9b-e991-4da3-a988-6e3992894a7c.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/21fd0759-678e-46bb-b566-db3e12760216.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fc4bf60e-b70b-4d95-b9dd-679653f83cda.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/97e2e272-2be4-400d-ab68-54a9703c2823.png",
];

const otherScents = [
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/14d73e1a-9783-4548-8d6c-90a35ee774bd.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a3d65637-c3b5-4ae2-8945-bbdf93adcb10.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3bb6b1c2-0130-4580-b0b2-48727e28120b.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a0ef66a6-8e93-421c-9c83-cd1323cb1667.png",
  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6629a947-b605-4186-9a27-24bdb91239bf.png",
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
      </header>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <ol>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Perfume</li>
        </ol>
      </nav>

      {/* Main Row */}
      <main className="main-content">
        {/* Gallery */}
        <section className="gallery-section">
          <div className="vertical-previews">
            {images.map((img, i) => (
              <button
                key={i}
                className={`preview-thumb ${selectedImageIndex === i ? "selected" : ""}`}
                onClick={() => setSelectedImageIndex(i)}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} />
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
          <h1 className="product-title">
            Dior Sauvage Parfum Spray for Men 2.0 Ounces, clear
          </h1>
          <div className="ratings-row">
            <span className="rating-number">4.0 ⭐</span>
            <a href="#rating-details">120 Ratings</a>
            <span>100+ bought in past month</span>
          </div>
          <div className="price">500EGP</div>

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

      {/* Other Scents (full row under gallery + details) */}
      <div className="other-scents">
        <span className="other-scents-label">Other Scents</span>
        <div className="scents-thumbs">
          {otherScents.map((img, i) => (
            <img key={i} src={img} alt={`Scent ${i + 1}`} className="scents-thumb" />
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
              Beyond is a bold and long-lasting fragrance for men who refuse limits...
            </p>
          </div>
        )}

        {tab === "specifications" && (
          <div className="tab-panel">
            <p>Specifications content goes here.</p>
          </div>
        )}
      </section>
    </div>
  );
}

