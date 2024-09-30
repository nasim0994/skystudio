import { IoArrowDownCircleOutline } from "react-icons/io5";

export default function Slider() {
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
          <source src="/videos/ghl.mp4" type="video/mp4" />
          Your browser does not support the video tag.
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
