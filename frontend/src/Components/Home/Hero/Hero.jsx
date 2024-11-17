import "../../../assets/css/hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import { useGetAllBannerQuery } from "../../../Redux/banner/bannerApi";

export default function Hero() {
  const { data } = useGetAllBannerQuery();
  const banners = data?.data;

  return (
    <div className="hero_slider absolute left-0 top-0 z-30 h-[60vh] w-full sm:h-screen">
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay, EffectFade]}
        className="h-full w-full"
        // loop={true}
      >
        {banners?.map((banner) => (
          <SwiperSlide key={banner?._id}>
            <div className="h-full overflow-hidden">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${banner?.bg}`}
                alt="slider"
                className="hero_img h-full w-full object-cover"
              />
            </div>

            <div className="hero_content">
              <h2 className="fade-up-animation pb-10 text-center text-4xl font-medium text-primary sm:pb-24 sm:text-6xl">
                {banner?.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
