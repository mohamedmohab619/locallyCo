"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const products = [
  { id: 1, image: "/shirt.jpg", title: "Clothify Max Trun", subtitle: "For Men, Women", price: "$24.57" },
  { id: 2, image: "/shirt.jpg", title: "VelvetSands Apparel Co.", subtitle: "For Women", price: "$24.57" },
  { id: 3, image: "/shirt.jpg", title: "ElysianThread Collective", subtitle: "For Kids and Pets", price: "$24.57" },
  { id: 4, image: "/shirt.jpg", title: "EmberSoul Fashion Line", subtitle: "For Men, Women and Kids", price: "$24.57" },
  { id: 5, image: "/shirt.jpg", title: "ReverieThreads Collective", subtitle: "For Women", price: "$24.57" },
  { id: 6, image: "/shirt.jpg", title: "WardRobe Clothify", subtitle: "Our Best Seller", price: "$24.57" },
];

export default function RecentlyViewed() {
  return (
    <section className="py-12 ">
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
          {products.map((product, i) => (
            <SwiperSlide key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // 👈 triggers when 20% is visible
                className="group pt-3"
              >
                {/* Image + overlay */}
                <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-md transition duration-500 group-hover:shadow-2xl group-hover:shadow-gray-800/40 group-hover:-translate-y-1 transform ">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500"></div>

                  {/* Price Tag */}
                  <div className="absolute top-55 left-4 px-4 py-2 bg-white text-gray-900 font-semibold clip-trapezoid transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                    <p className="text-xs">Get For Only</p>
                    <p className="text-base font-bold">{product.price}</p>
                  </div>
                </div>

                {/* Text + Icon (below card, not overlayed) */}
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <h3 className="font-semibold text-lg">{product.title}</h3>
                    <p className="text-sm text-gray-600">{product.subtitle}</p>
                  </div>
                  <FaInstagram className="text-gray-700 hover:text-pink-600 transition-transform transform hover:scale-125 hover:-rotate-12 cursor-pointer text-2xl" />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Trapezoid Price Tag Shape */}
      <style jsx>{`
        .clip-trapezoid {
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}
