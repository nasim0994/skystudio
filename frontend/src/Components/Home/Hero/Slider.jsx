import { IoArrowDownCircleOutline } from "react-icons/io5";
// import { useGetBannerQuery } from "../../../Redux/banner/bannerApi";
// import { useEffect, useState } from "react";

export default function Slider() {
  // const { data } = useGetBannerQuery();
  // const video = data?.data?.video;

  return (
    <div className="hero_slider absolute left-0 top-0 z-30 h-[75vh] w-full sm:h-screen">
      <div>
        <video
          autoPlay
          loop
          muted
          width="100%"
          className="h-screen object-cover"
        >
          <source
            src="https://res.cloudinary.com/drakdnnj4/video/upload/v1728539265/kbzasbis1mwku01wiyzy.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="hero_btn">
        <button className="text-4xl text-gray-300">
          <IoArrowDownCircleOutline />
        </button>
      </div>
    </div>
  );
}
