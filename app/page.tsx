"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  Dropdown,
  DropdownItem,
  TextInput,
  Button,
} from "flowbite-react";
import { HiSearch, HiShoppingCart, HiUser } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { Span } from "next/dist/trace";
import Footer from "./components/Footer.js";
import categories from "./components/Categories.js";
import Categories from "./components/Categories.js";


export default function NoonNavbar() {


      const brands = [
    {
      name: "7ommos Brands",
      products: 200,
      rating: 4.0,
      reviews: 120,
      categories: ["Clothing", "Perfume"],
      image: "/Locally-BGPattern.jpg",
    },
    {
      name: "FashionX",
      products: 150,
      rating: 4.5,
      reviews: 80,
      categories: ["Shoes", "Bags"],
      image: "/hand-drawn-sustainable-fashion-concept.png",
    },
    {
      name: "UrbanStyle",
      products: 300 ,
      rating: 4.2,
      reviews: 200,
      categories: ["Accessories", "Clothing"],
      image: "/Locally-BGPattern.jpg",
    },
    {
      name: "StylePro",
      products: 180,
      rating: 4.3,
      reviews: 90,
      categories: ["Perfume", "Watches"],
      image: "/Locally-BGPattern.jpg",
    },
    {
      name: "EliteWear",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/Locally-BGPattern.jpg",
    },
  ];

  const flashDeals = [
    {
      name: "Dior Sauvage Parfum Spray",
      price: "500 EGP",
      rating: 4.0,
      reviews: 120,
      image: "/Locally-BGPattern.jpg",
    },
    {
      name: "Armani Code Eau de Toilette",
      price: "750 EGP",
      rating: 4.5,
      reviews: 95,
      image: "/Locally-BGPattern.jpg",
    },
    {
      name: "Gucci Bloom Eau de Parfum",
      price: "900 EGP",
      rating: 4.3,
      reviews: 140,
      image: "/Locally-BGPattern.jpg",
    },
  ];

  const recommended = [
    {
      name: "Versace Eros Flame",
      price: "650 EGP",
      rating: 4.2,
      reviews: 100,
      image: "/Locally-BGPattern.jpg",
    },
    {
      name: "Chanel Bleu de Chanel",
      price: "1100 EGP",
      rating: 4.8,
      reviews: 200,
      image: "/Locally-BGPattern.jpg",
    },
    {
      name: "YSL La Nuit de L’Homme",
      price: "850 EGP",
      rating: 4.6,
      reviews: 170,
      image: "/Locally-BGPattern.jpg",
    },
  ];



  

  


  return (
    <>
      <Navbar
        fluid
        style={{ backgroundColor: '#FFEFC1' }}
        className="px-6 shadow-md fixed top-0 left-0 right-0 z-50"
      >
        {/* Logo */}
        <NavbarBrand href="/">
          <span className="self-center whitespace-nowrap text-3xl font-extrabold text-gray-900">
            Locallyco
          </span>
        </NavbarBrand>

        {/* Search Bar */}
        <div className="flex flex-1 justify-center mx-6 max-w-2xl">
          <div className="flex w-full">
            <TextInput
              type="text"
              placeholder="What are you looking for?"
              className="w-full rounded-l-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
     

          {/* Profile */}
          <Button color="gray" pill>
            <HiUser className="mr-1 h-5 w-5" />
            <span className="hidden md:inline">Sign In</span>
          </Button>

          {/* Cart */}
          <Button color="gray" pill>
            <HiShoppingCart className="mr-1 h-5 w-5" />
            <span className="hidden md:inline">Cart</span>
          </Button>
        </div>
      </Navbar>

      {/* Navigation Links below Navbar */}
      <div className="flex gap-10 p-10 text-blue-700 mt-[80px] bg-amber-300">
        <p>Navigate to the pages through these links:</p>
        <Link href="/product" className="link">Product</Link>
        <Link href="/SignIn" className="link">SignIn</Link>
        <Link href="/search" className="link">Search</Link>
        <Link href="/SignUp" className="link">SignUp</Link>
        <Link href="/favourites" className="link">Favourites</Link>
        <Link href="/orders" className="link">Orders</Link>
        <Link href="/profile" className="link">Profile</Link>
        <Link href="/Cart" className="link">Cart</Link>
      </div>

      {/* hero section */}
      <div className=" h-full container mx-auto flex justify-start pt-6">
        {/* hero section */}
        <div className="relative w-full h-[80vh] rounded-4xl overflow-hidden">
          {/* Background Image */}
            <Image
              src="/ai-site-helping-with-software-production.jpg" // replace with your image in public/
              alt="Hero"
              fill
              priority
              className="object-cover"
            />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Summer Arrival of Outfit
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6">
              Discover quality fashion that reflects your style and makes
              everyday enjoyable.
            </p>
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-black bg-white rounded-full shadow hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Explore Product
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

      </div>

      {/* Trending brands */}

      <div className=" h-full container mx-auto flex flex-col justify-start ">
                  <section className="container mx-auto mt-[32px] bg-amber-950 px-[56px] pb-[24px] rounded-4xl">
            <div className="flex items-center justify-between mb-[16px] bg-blue-950">
              <h2 className="text-3xl font-bold bg-fuchsia-500 mx-auto">Trending brands</h2>
              <a href="#" className="text-black hover:underline bg-indigo-500">
                View all
              </a>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 }, // 2 cards on small screens
                1024: { slidesPerView: 4 }, // 4 cards on large screens
              }}
              navigation
              pagination={{ clickable: true }}
              className="pb-10"
            >
              {brands.map((brand, index) => (
                <SwiperSlide key={index}>
                  <Link href={`/brands/${brand.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="bg-gray-200 p-4 rounded-2xl shadow hover:shadow-lg transition w-full">
                    <div className="flex items-center space-x-4 bg-amber-500">
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div className="bg-yellow-300">
                        <h3 className="font-semibold text-gray-800">
                          {brand.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {brand.products} Products
                        </p>
                        <div className="flex items-center text-sm bg-zinc-800">
                          <span className="text-green-600 font-medium mr-1">
                            {brand.rating} ★ 
                          </span>
                          <a
                            href="#"
                            className="text-blue-500 hover:underline"
                          >
                            {brand.reviews} Ratings
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-4 text-sm text-gray-600 bg-red-400">
                      {brand.categories.map((cat, i) => (
                        <span key={i} className="flex items-center space-x-1 bg-lime-400">
                          <i className="fa fa-star"></i>
                          <span>{cat}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
      </div>

      
       {/* flash deals and reccomended for you*/}
      <section className="container mx-auto my-[32px] grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Flash Deals */}
      <div className="bg-[#F0DEC9] p-4 rounded-2xl shadow">
        <h2 className="text-3xl font-bold mb-4 text-center text-[#5B3C19]">
          Flash deals
        </h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
          }}
          navigation
        >
          {flashDeals.map((deal, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 rounded-2xl p-3 shadow hover:shadow-lg transition cursor-pointer">
                <Image
                  src={deal.image}
                  alt={deal.name}
                  width={343}
                  height={260}
                  className="rounded-lg object-cover w-full h-[200px]"
                />
                <h3 className="mt-3 font-medium text-gray-800">
                  {deal.name}
                </h3>
                <p className="text-gray-700 font-bold">{deal.price}</p>
                <div className="flex items-center text-sm mt-1">
                  <span className="text-green-600 font-medium mr-1">
                    {deal.rating} ★
                  </span>
                  <span className="text-gray-500">({deal.reviews})</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Recommended for You */}
      <div className="bg-[#E9EAEB] p-4 rounded-2xl shadow">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
          Recommended for you
        </h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
          }}
          navigation
        >
          {recommended.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 rounded-2xl p-3 shadow hover:shadow-lg transition cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={343}
                  height={260}
                  className="rounded-lg object-cover w-full h-[200px]"
                />
                <h3 className="mt-3 font-medium text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-700 font-bold">{item.price}</p>
                <div className="flex items-center text-sm mt-1">
                  <span className="text-green-600 font-medium mr-1">
                    {item.rating} ★
                  </span>
                  <span className="text-gray-500">({item.reviews})</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

      {/* categories */}

      <Categories />

      {/* footer */}
      
      <Footer />
      
      

    </>
  );
}
