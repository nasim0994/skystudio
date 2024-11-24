import "../../../assets/css/hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import { useGetAllBannerQuery } from "../../../Redux/banner/bannerApi";
import { useEffect, useState } from "react";

export default function Hero() {
  const { data } = useGetAllBannerQuery();
  const banners = data?.data;

  const [width, setWidth] = useState(85);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxWidth = 100;
      const minWidth = 85;
      const scrollLimit = 200;

      // Dynamically calculate new width
      const newWidth = Math.min(
        maxWidth,
        minWidth + (scrollPosition / scrollLimit) * (maxWidth - minWidth),
      );

      setWidth(newWidth);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div className="py-8">
        <h2 className="fade-up-animation text-center text-4xl font-light tracking-[25px] text-neutral sm:text-7xl sm:tracking-[35px]">
          Setting Standards
        </h2>
      </div>

      <div
        style={{
          width: `${width}%`,
          transition: "all 0.5s ease",
          margin: "0 auto",
        }}
        className="hero_slider"
      >
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
              <div className="h-full overflow-hidden rounded">
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/${banner?.bg}`}
                  alt="slider"
                  className="h-[500px] w-full object-cover sm:h-[600px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
