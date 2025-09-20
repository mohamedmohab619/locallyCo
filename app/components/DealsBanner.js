"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const deals = [
  { id: 1, image: "/banner2.jpg" },
  { id: 2, image: "/banner3.jpg" },
  { id: 3, image: "/banner4.jpg" },
];

export default function DealsBanner() {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          className="rounded-2xl shadow-lg"
        >
          {deals.map((deal) => (
            <SwiperSlide key={deal.id}>
              <div className="relative w-full h-56 md:h-72 lg:h-96 group overflow-hidden rounded-2xl">
                <Image
                  src={deal.image}
                  alt={`Deal ${deal.id}`}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
