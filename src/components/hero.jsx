import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpeg";

function CustomNavigation() {
  const swiper = useSwiper();
  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
      >
        <NavArrowLeft className="h-6 w-6 text-gray-800" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
      >
        <NavArrowRight className="h-6 w-6 text-gray-800" />
      </button>
    </>
  );
}

export default function Hero() {
  const images = [slider1, slider2, slider3];

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg overflow-hidden"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-[28rem] md:h-[36rem] lg:h-[42rem] object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
        <CustomNavigation />
      </Swiper>
    </div>
  );
}
