import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { debounce } from "lodash";

export default function AboutUs() {
  const location = useLocation();
  const [width, setWidth] = useState(50);
  const [scrollOffset, setScrollOffset] = useState(0);

  const path = location.pathname;
  const translateYBase = path === "/about-us" ? 100 : 300;

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY; // Current scroll position
      const maxWidth = 100; // Maximum width in %
      const minWidth = path === "/about-us" ? 90 : 50;
      const scrollLimit = path === "/about-us" ? 200 : 1000;

      // Dynamically calculate new width
      const newWidth = Math.min(
        maxWidth,
        minWidth + (scrollPosition / scrollLimit) * (maxWidth - minWidth),
      );

      setWidth(newWidth);
    }, 20); // Debounce with a 20ms delay

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [path]);

  return (
    <section className={`bg-stone-100 pb-10`}>
      <div className="">
        <div className="container flex gap-8 sm:mt-20 lg:mt-0">
          <div
            className="z-10 hidden w-[35%] lg:block"
            style={{
              transform: `translateY(calc(${translateYBase}px - ${scrollOffset * 0.5}px))`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <img
              src="https://navana-realestate.com/assets/img/heroSection/4-belgravia-hero-min.webp"
              alt="About"
              className="mx-auto h-80 w-full rounded"
            />
          </div>

          {/* Description Section */}
          <div className="mb-10 px-5 text-neutral sm:w-[80%] md:mb-0 md:mt-10 md:px-0 lg:w-[55%]">
            <div data-aos="fade-up">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                alias cum maiores sapiente, sed laboriosam itaque harum,
                molestiae nihil enim ab consequatur quae, dicta nostrum!
                Expedita, similique quaerat velit officiis molestias minima
                aliquid nihil qui fugit impedit sunt nemo non at aspernatur quis
                dolorem laudantium! Molestiae dolorem ipsa cumque sapiente?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                alias cum maiores sapiente, sed laboriosam itaque harum,
                molestiae nihil enim ab consequatur quae, dicta nostrum!
              </p>
            </div>

            <div className="mt-4">
              <Link className="primary_btn text-sm">Our Profile</Link>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-48 overflow-hidden sm:h-[400px] lg:h-[550px]">
            <video
              loop
              autoPlay
              muted
              disablePictureInPicture
              playsInline
              preload="metadata"
              poster="https://www.holidaydiscountcentre.co.uk/images/newsletter/hardrockcunslide29mar.gif"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                width: `${width}%`,
                transition: "width 0.5s ease",
                margin: "0 auto",
              }}
            >
              <source
                type="video/mp4"
                src="https://res.cloudinary.com/diliweeow/video/upload/v1732607590/ef0hdt34lyksgqjrlcaw.mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Video Section */}
      </div>
    </section>
  );
}
