import { IoArrowDownCircleOutline } from "react-icons/io5";
// import { useGetBannerQuery } from "../../../Redux/banner/bannerApi";
// import { useEffect, useState } from "react";

export default function Slider() {
  // const { data } = useGetBannerQuery();
  // const video = data?.data?.video;

  return (
    <div className="hero_slider absolute left-0 top-0 z-30 h-[75vh] w-full sm:h-screen">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/sNdDcZy9yOQ?si=0DLrWdc7fYJY_3If?autoplay=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <div className="hero_btn">
        <button className="text-4xl text-gray-300">
          <IoArrowDownCircleOutline />
        </button>
      </div>
    </div>
  );
}
