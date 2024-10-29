import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useGetGalleryQuery } from "../../../Redux/gallery/galleryApi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";

export default function Gallery() {
  const { data } = useGetGalleryQuery();
  const gallery = data?.data;

  return (
    <section className="gallery_wrap py-14">
      <h2 className="mb-8 text-center text-5xl font-semibold text-neutral">
        Our Project Gallery
      </h2>

      <PhotoProvider>
        <Swiper
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect={"coverflow"}
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          coverflowEffect={{
            rotate: 2,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="h-[270px] w-full sm:h-[450px]"
        >
          {gallery?.map((gallery) => (
            <SwiperSlide className="h-full">
              <PhotoView
                key={gallery?._id}
                src={`${import.meta.env.VITE_BACKEND_URL}/gallery/${gallery?.image}`}
              >
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/gallery/${gallery?.image}`}
                  alt="gallery"
                  className="block h-full w-full rounded object-cover"
                />
              </PhotoView>
            </SwiperSlide>
          ))}
        </Swiper>
      </PhotoProvider>
    </section>
  );
}
