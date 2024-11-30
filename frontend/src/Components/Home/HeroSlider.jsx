import { useEffect, useState } from "react";
import "../../assets/css/heroSlider.css";
import { useGetAllBannerQuery } from "../../Redux/banner/bannerApi";

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data } = useGetAllBannerQuery();
  const banners = data?.data;

  useEffect(() => {
    if (banners?.length) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % banners?.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [banners?.length]);

  // Determine class for each image
  const getSlideClass = (index) => {
    if (index === activeIndex) return "slide active";
    if (index === (activeIndex - 1 + banners?.length) % banners?.length)
      return "slide prev";
    if (index === (activeIndex + 1) % banners?.length) return "slide next";
    return "slide hidden";
  };

  return (
    <section className="overflow-hidden">
      <div className="container relative">
        <div className="absolute left-0 top-14 z-40 w-80 text-3xl font-medium leading-[40px] tracking-widest text-neutral sm:text-4xl sm:leading-[50px]">
          <h1 key={activeIndex} className="fade-up-animation">
            {banners?.length > 0 && banners[activeIndex]?.title}
          </h1>
        </div>
      </div>

      <div className="slider fade-up-animation">
        {banners?.map((banner, index) => (
          <div key={index} className={getSlideClass(index)}>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${banner?.bg}`}
              alt={banner?.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
