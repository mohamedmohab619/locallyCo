"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import TiltedWrapper from "./TiltedWrapper";
import HomeProductCard from "./HomeProductCard";

const products = [
  { id: 1, image: "/shirt.jpg", title: "Clothify Max Trun", brand: "Clothify", price: "$24.57", badge: "Best Seller" },
  { id: 2, image: "/shirt.jpg", title: "VelvetSands Apparel Co.", brand: "VelvetSands", price: "$24.57", badge: "Popular" },
  { id: 3, image: "/shirt.jpg", title: "ElysianThread Collective", brand: "ElysianThread", price: "$24.57", badge: "New" },
  { id: 4, image: "/shirt.jpg", title: "EmberSoul Fashion Line", brand: "EmberSoul", price: "$24.57", badge: "Best Seller" },
  { id: 5, image: "/shirt.jpg", title: "ReverieThreads Collective", brand: "ReverieThreads", price: "$24.57", badge: "Trending" },
  { id: 6, image: "/shirt.jpg", title: "WardRobe Clothify", brand: "WardRobe", price: "$24.57", badge: "Popular" },
];

export default function RecentlyViewed() {
  return (
    <section className="py-12">
      <div className="container mx-auto bg-[#E9EAEB] rounded-3xl p-11">
        <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-8"
        >
          {products.map((product) => (
            <SwiperSlide className="py-5 px-4" key={product.id}>
              <TiltedWrapper scaleOnHover={1.05}>
                <HomeProductCard
                  imageSrc={product.image}
                  brand={product.brand || "Brand Name"}
                  title={product.title}
                  price={product.price}
                  badge={product.badge || "Best Seller"} // default badge if none
                  onAddToCart={() => console.log(`Add to cart: ${product.title}`)}
                  onBuyNow={() => console.log(`Buy now: ${product.title}`)}
                  onAddToFavorites={() => console.log(`Add to favorites: ${product.title}`)}
                />
              </TiltedWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
