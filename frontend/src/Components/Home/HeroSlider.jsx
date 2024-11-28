import { useEffect, useState } from "react";
import "../../assets/css/heroSlider.css";

const images = [
  {
    url: "https://navana-realestate.com/assets/img/heroSection/2-center-point-hero-min.webp",
    title: "BROADEN LIFE BOUNDARIES",
  },
  {
    url: "https://navana-realestate.com/assets/img/heroSection/4-belgravia-hero-min.webp",
    title: "Lorem ipsum dolor sit",
  },
  {
    url: "https://navana-realestate.com/assets/img/heroSection/1-latitude-hero-min.webp",
    title: "BROADEN LIFE BOUNDARIES",
  },
  {
    url: "https://navana-realestate.com/assets/img/heroSection/2-center-point-hero-min.webp",
    title: "BROADEN LIFE BOUNDARIES",
  },
  {
    url: "https://navana-realestate.com/assets/img/heroSection/4-belgravia-hero-min.webp",
    title: "BROADEN LIFE BOUNDARIES",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Determine class for each image
  const getSlideClass = (index) => {
    if (index === activeIndex) return "slide active";
    if (index === (activeIndex - 1 + images.length) % images.length)
      return "slide prev";
    if (index === (activeIndex + 1) % images.length) return "slide next";
    return "slide hidden";
  };

  return (
    <section className="overflow-hidden">
      <div className="container relative">
        <div className="absolute left-0 top-14 z-40 w-80 text-3xl font-medium leading-[40px] tracking-widest text-neutral sm:text-4xl sm:leading-[50px]">
          <h1 key={activeIndex} className="fade-up-animation">
            {images[activeIndex].title}
          </h1>
        </div>
      </div>

      <div className="slider fade-up-animation">
        {images.map((image, index) => (
          <div key={index} className={getSlideClass(index)}>
            <img src={image.url} alt={image.title} />
          </div>
        ))}
      </div>
    </section>
  );
}
