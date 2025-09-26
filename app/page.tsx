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
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import { Span } from "next/dist/trace";
import Footer from "./components/Footer.js";
import DealsBanner from "./components/DealsBanner.js";
import Categories from "./components/Categories.js";
import RecentlyViewed from "./components/RecentlyViewed.js";
import NavBar from "./components/NavBar.js";
import ScrollFloat from "./components/ScrollFloat"; // make sure this is your ScrollFloat path
import { motion } from "framer-motion";
import RotatingText from "./components/RotatingText";
import TiltedCard from "./components/TiltedCard";

export default function NoonNavbar() {
  const brands = [
    {
      name: "airjordan",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/airjordan.jpg",
    },
    {
      name: "nike",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/nike.png",
    },
    {
      name: "puma",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/pumablack.png",
    },
    {
      name: "airjordan",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/airjordan.jpg",
    },
    {
      name: "puma",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/pumablack.png",
    },
    {
      name: "adidas",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/adidas3.jpg",
    },
    {
      name: "airjordan",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/airjordan.jpg",
    },
    {
      name: "nike",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/nike.png",
    },
    {
      name: "puma",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/pumablack.png",
    },
    {
      name: "adidas",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/adidas3.jpg",
    },
    {
      name: "airjordan",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/airjordan.jpg",
    },
    {
      name: "nike",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/nike.png",
    },
    {
      name: "puma",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/pumablack.png",
    },
    {
      name: "adidas",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/adidas3.jpg",
    },
    {
      name: "airjordan",
      products: 250,
      rating: 4.6,
      reviews: 150,
      categories: ["Clothing", "Shoes"],
      image: "/airjordan.jpg",
    },
  ];

  const flashDeals = [
    {
      name: "Dior Sauvage Parfum Spray",
      price: "500 EGP",
      rating: 4.0,
      reviews: 120,
      image: "/tshirt3.jpg",
    },
    {
      name: "Armani Code Eau de Toilette",
      price: "750 EGP",
      rating: 4.5,
      reviews: 95,
      image: "/shirt.jpg",
    },
    {
      name: "Gucci Bloom Eau de Parfum",
      price: "900 EGP",
      rating: 4.3,
      reviews: 140,
      image: "/shorts.jpg",
    },
  ];

  const recommended = [
    {
      name: "Versace Eros Flame",
      price: "650 EGP",
      rating: 4.2,
      reviews: 100,
      image: "/tshirt3.jpg",
    },
    {
      name: "Chanel Bleu de Chanel",
      price: "1100 EGP",
      rating: 4.8,
      reviews: 200,
      image: "/shirt.jpg",
    },
    {
      name: "YSL La Nuit de L’Homme",
      price: "850 EGP",
      rating: 4.6,
      reviews: 170,
      image: "/shorts.jpg",
    },
  ];

  return (
    <>
      <NavBar />

      {/* Navigation Links below Navbar */}
      <div className="flex gap-10 p-10 text-blue-700 mt-[80px] bg-amber-300">
        <p>Navigate to the pages through these links:</p>
        <Link href="/product" className="link">
          Product
        </Link>
        <Link href="/SignIn" className="link">
          SignIn
        </Link>
        <Link href="/search" className="link">
          Search
        </Link>
        <Link href="/SignUp" className="link">
          SignUp
        </Link>
        <Link href="/favourites" className="link">
          Favourites
        </Link>
        <Link href="/orders" className="link">
          Orders
        </Link>
        <Link href="/profile" className="link">
          Profile
        </Link>
        <Link href="/Cart" className="link">
          Cart
        </Link>
        <Link href="/checkout" className="link">
          checkout
        </Link>
      </div>
      <div className="bg-gradient-to-r from-[#40E0D0] via-[#Dcd5b9] to-[#f5f5dc] animate-gradient">
        <div className="h-full mx-auto flex justify-start">
          {/* Hero wrapper */}
          <div className="relative w-full h-[80vh] overflow-hidden">
            {/* Background Image */}
            <Image
              src="/locallyco.jpg"
              alt="Hero"
              fill
              priority
              className="object-cover"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full text-center text-black px-6 md:px-10">
              {/* Hero headline */}
              <h1 className="flex flex-wrap justify-center items-center text-center font-extrabold mb-4 tracking-tight text-black">
                {/* First part of the text */}
                <span className="mr-3 text-[clamp(2rem,5vw,6rem)] font-extrabold">
                  <ScrollFloat
                    containerClassName="inline-block"
                    textClassName="inline-block"
                    animationDuration={1.2}
                    stagger={0.05}
                  >
                    Arrival of
                  </ScrollFloat>
                </span>

                {/* Rotating text */}
                <span>
                  <RotatingText
                    texts={["Outfit", "Collection", "Style"]}
                    mainClassName="text-[clamp(2rem,5vw,6rem)] font-extrabold text-black py-1 rounded-lg bg-blue-900 inline-block"
                    staggerFrom="last"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-120%", opacity: 0 }}
                    staggerDuration={0.05}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </span>
              </h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-lg md:text-xl max-w-2xl mb-6"
              >
                Discover quality fashion that reflects your style and makes
                everyday enjoyable.
              </motion.p>

              {/* Call to action */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
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
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Trending brands */}
      <section className="bg-[#d4cda1] pb-7">
        <div className="h-full container mx-auto flex flex-col justify-start">
          <section className="container mx-auto mt-[32px] bg-[#1b365d] px-[56px] pb-[24px] rounded-4xl py-3">
            <div className="flex items-center justify-between mb-[16px]">
              <h2 className="text-3xl font-bold mx-auto text-white">
                Trending brands
              </h2>
              <a href="#" className="text-black hover:underline">
                View all
              </a>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1} // default for very small screens
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 12 }, // small phones
                640: { slidesPerView: 3, spaceBetween: 16 }, // tablets
                768: { slidesPerView: 4, spaceBetween: 16 }, // small laptops
                1024: { slidesPerView: 6, spaceBetween: 20 }, // large laptops
                1280: { slidesPerView: 8, spaceBetween: 24 }, // extra large screens
              }}
              navigation
              pagination={{ clickable: true }}
              className="pb-10 overflow-visible"
            >
              {brands.map((brand, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center overflow-visible"
                >
                  <Link
                    href={`/brands/${brand.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="flex justify-center pb-5 pt-5"
                  >
                    <TiltedCard
                      imageSrc={brand.image}
                      altText={brand.name}
                      captionText={brand.name}
                      containerHeight="220px"
                      containerWidth="220px"
                      imageHeight="220px"
                      imageWidth="220px"
                      scaleOnHover={1.1}
                      showTooltip={true}
                      showMobileWarning={false}
                      link={`/brands/${brand.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </section>

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

      {/* DealsBanner */}

      <DealsBanner />

      {/* Recently viewed */}

      <RecentlyViewed />

      {/* footer */}

      <Footer />
    </>
  );
}

// malachite green #3b7a57
// gold #d4af37
// sandy biege #Dcd5b9
// Nile blue #1b365d
// Turquoise #40E0D0
// Ancient Red #A52A2A
// Obsidian black #0B0B0B
// Papyrus white #f5f5dc

// bg-gradient-to-r from-[#3b7a57] via-[#d4af37] to-[#40E0D0]

// bg-gradient-to-r from-[#1b365d] via-[#d4af37] to-[#40E0D0]

// bg-gradient-to-r from-[#Dcd5b9] via-[#A52A2A] to-[#3b7a57]

// bg-gradient-to-r from-[#0B0B0B] via-[#1b365d] to-[#d4af37]

// bg-gradient-to-r from-[#f5f5dc] via-[#Dcd5b9] to-[#A52A2A]
