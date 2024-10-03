import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import parser from "html-react-parser";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/autoplay";
import { useGetFeatureProjectsQuery } from "../../../Redux/featureProject/featureProjectApi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Features() {
  const { data } = useGetFeatureProjectsQuery();
  const projects = data?.data;

  const swiperRef = useRef(null);

  return (
    <section className="py-10">
      <div className="container relative">
        <div className="mb-10 text-center text-neutral">
          <h2 className="text-2xl font-medium md:text-5xl">Features &</h2>
          <h2 className="text-5xl md:text-8xl">Amenities</h2>
        </div>
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {projects?.map((project) => (
            <SwiperSlide key={project?._id}>
              <div className="grid grid-cols-2 gap-2 md:gap-10">
                <div>
                  <h2 className="text-xl font-medium uppercase text-neutral md:text-4xl">
                    {project?.title}
                  </h2>
                  <p className="mt-2 text-[8px] text-neutral-content md:text-base">
                    {parser(project?.description)}
                  </p>
                </div>
                <div>
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/${project?.image}`}
                    alt="Community Shop"
                    className="mx-auto w-full rounded md:w-[80%] "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-10 right-10 z-50 flex gap-4 md:bottom-16 md:left-5">
          <button
            className="rounded-full bg-black/80 p-3 text-white duration-300 hover:bg-black"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowLeft />
          </button>
          <button
            className="rounded-full bg-black/80 p-3 text-white duration-300 hover:bg-black"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
