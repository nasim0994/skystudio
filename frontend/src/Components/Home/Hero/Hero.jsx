import "../../../assets/css/hero.css";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
// import { useGetBannerQuery } from "../../../Redux/banner/bannerApi";
// import { useEffect, useState } from "react";

export default function Hero() {
  // const { data } = useGetBannerQuery();
  // const video = data?.data?.video;

  return (
    <div className="hero_slider absolute left-0 top-0 z-30 h-[75vh] w-full sm:h-screen">
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        navigation
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        modules={[Autoplay, EffectFade]}
        className="h-full w-full"
      >
        <SwiperSlide>
          <div className="overflow-hidden">
            <img
              src="/slider.jpg"
              alt="slider"
              className="hero_img h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden">
            <img
              src="/slider2.jpg"
              alt="slider"
              className="hero_img h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden">
            <img
              src="/slider3.jpg"
              alt="slider"
              className="hero_img h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/20 text-base-100">
        <h2 className="text_shadow fade-up-animation text-center text-6xl font-medium">
          Welcome to Astral Interior
        </h2>
      </div>

      <div className="hero_btn z-20">
        <button className="text-4xl text-gray-300">
          <IoArrowDownCircleOutline />
        </button>
      </div>
    </div>
  );
}
