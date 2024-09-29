import { IoArrowDownCircleOutline } from "react-icons/io5";

export default function Slider() {
  return (
    <div className="hero_slider absolute left-0 top-0 z-30 h-[75vh] w-full sm:h-[90vh]">
      <img
        src="/images/slider1.jpg"
        alt="slider"
        className="h-full w-full object-cover"
      />

      <div className="hero_btn">
        <button className="text-4xl text-gray-300">
          <IoArrowDownCircleOutline />
        </button>
      </div>
    </div>
  );
}
