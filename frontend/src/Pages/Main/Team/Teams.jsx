// import parse from "html-react-parser";
import { useGetTeamsCategoryWaysQuery } from "../../../Redux/teamApi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";

export default function Teams() {
  window.scrollTo(0, 0);

  const { data } = useGetTeamsCategoryWaysQuery();
  const teams = data?.data;

  return (
    <section className="min-h-[70vh] py-5">
      <div className="container">
        <h2 className="text-center text-3xl font-medium">
          Meet Our Team Member
        </h2>

        <div className="mt-10 flex flex-col gap-20">
          {teams?.length > 0 ? (
            teams?.map((team, i) => (
              <div key={i}>
                <h2 className="text-lg font-medium text-neutral">
                  {team?.category}
                </h2>

                <div className="mt-6">
                  <Swiper
                    effect={"coverflow"}
                    centeredSlides={true}
                    grabCursor={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 15,
                      stretch: 0,
                      depth: 240,
                      modifier: 1,
                      slideShadows: false,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    className="w-full"
                  >
                    {team?.teams?.map((team, i) => (
                      <SwiperSlide key={i} className="w-56 sm:w-60">
                        <img
                          src={
                            import.meta.env.VITE_BACKEND_URL + "/" + team?.image
                          }
                          alt={team?.name}
                          className="mx-auto h-60 w-full rounded border"
                        />

                        <div className="mt-2 text-center">
                          <h4 className="text-base">{team?.name}</h4>
                          <p className="text-[13px] text-neutral">
                            {team?.designation}
                          </p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-red-500">No Team Member Found</p>
          )}
        </div>
      </div>
    </section>
  );
}
