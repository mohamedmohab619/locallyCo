"use client";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Masonry from "./Masonry";

const categoriesData = [
  {
    title: "Clothes",
    items: [
      { id: 1, img: "/shirt.jpg", url: "/categories/tops/hoodies", height: 420, label: "Hoodies", labelPosition: "top-left" },
      { id: 2, img: "/shirt.jpg", url: "/categories/tops/tshirts", height: 300, label: "T-Shirts", labelPosition: "bottom-left" },
      { id: 3, img: "/shirt.jpg", url: "/categories/tops/linen-shirts", height: 750, label: "Linen Shirts", labelPosition: "bottom-right" }, // tall card
      { id: 4, img: "/shirt.jpg", url: "/categories/tops/linen-shirts", height: 350, label: "Shirts", labelPosition: "top-left" },
      { id: 5, img: "/shirt.jpg", url: "/categories/tops/linen-shirts", height: 820, label: "Formal Shirts", labelPosition: "center" }, // tall card
      { id: 6, img: "/shirt.jpg", url: "/categories/tops/linen-shirts", height: 270, label: "Casual", labelPosition: "left-vertical" },
      { id: 7, img: "/shirt.jpg", url: "/categories/tops/linen-shirts", height: 390, label: "Polos", labelPosition: "bottom-left" },
      { id: 8, img: "/shirt.jpg", url: "/categories/tops/linen-shirts", height: 460, label: "Jackets", labelPosition: "bottom-right" },
      { id: 9, img: "/shirt.jpg", url: "/categories/tops/linen-shirts", height: 320, label: "Sweaters", labelPosition: "top-left" },
    ],
  },
  {
    title: "Accessories",
    items: [
      { id: 10, img: "/shirt.jpg", url: "/categories/pants/jeans", height: 380, label: "Jeans", labelPosition: "bottom-left" },
      { id: 11, img: "/shirt.jpg", url: "/categories/pants/chinos", height: 300, label: "Chinos", labelPosition: "top-left" },
      { id: 12, img: "/shirt.jpg", url: "/categories/pants/joggers", height: 440, label: "Joggers", labelPosition: "bottom-right" },
      { id: 13, img: "/shirt.jpg", url: "/categories/pants/trousers", height: 760, label: "Trousers", labelPosition: "top-right" }, // tall card
      { id: 14, img: "/shirt.jpg", url: "/categories/pants/cargos", height: 500, label: "Cargos", labelPosition: "bottom-left" },
      { id: 15, img: "/shirt.jpg", url: "/categories/pants/jeans", height: 280, label: "Denim", labelPosition: "top-left" },
      { id: 16, img: "/shirt.jpg", url: "/categories/pants/chinos", height: 360, label: "Slim Fit", labelPosition: "right-vertical" },
      { id: 17, img: "/shirt.jpg", url: "/categories/pants/shorts", height: 700, label: "Shorts", labelPosition: "bottom-right" }, // tall card
    ],
  },
  {
    title: "Perfumes",
    items: [
      { id: 20, img: "/shirt.jpg", url: "/categories/perfumes/fragrance1", height: 300, label: "Fresh", labelPosition: "top-left" },
      { id: 21, img: "/shirt.jpg", url: "/categories/perfumes/fragrance2", height: 420, label: "Woody", labelPosition: "left-vertical" },
      { id: 22, img: "/shirt.jpg", url: "/categories/perfumes/fragrance3", height: 360, label: "Citrus", labelPosition: "top-right" },
      { id: 23, img: "/shirt.jpg", url: "/categories/perfumes/fragrance4", height: 480, label: "Floral", labelPosition: "bottom-right" },
      { id: 24, img: "/shirt.jpg", url: "/categories/perfumes/fragrance5", height: 820, label: "Luxury", labelPosition: "center" }, // tall card
      { id: 25, img: "/shirt.jpg", url: "/categories/perfumes/fragrance6", height: 400, label: "Classic", labelPosition: "top-left" },
      { id: 26, img: "/shirt.jpg", url: "/categories/perfumes/fragrance7", height: 500, label: "Oriental", labelPosition: "right-vertical" },
      { id: 27, img: "/shirt.jpg", url: "/categories/perfumes/fragrance8", height: 780, label: "Modern", labelPosition: "top-right" }, // tall card
    ],
  },
];



export default function CategoriesPage() {
  return (
    <>
    <NavBar />
    <div className="mx-auto py-12 bg-white">
        
       <h1 className="text-4xl font-extrabold text-center mb-10 relative text-black ">All Categories</h1> 
      {categoriesData.map((cat, i) => (
        <section key={i} className="mb-16 bg-blue-900 px-4 py-6">
          {/* Section Header */}
          <h2 className="text-4xl font-extrabold text-center mb-10 relative text-beige pt-6">
            {cat.title}
            <span className="block w-16 h-1 bg-gradient-to-r from-amber-400 to-pink-500 rounded-full mx-auto mt-2"></span>
          </h2>

          {/* Masonry Grid */}
          <div className="relative">
            <Masonry items={cat.items} animateFrom="random" />  {/*  <-- change the animation start from this animateFrom attribute (random, top, bottom, center, left, right) */}
          </div>
        </section>
      ))}

     </div>
     <Footer />
    </>
  );
}
