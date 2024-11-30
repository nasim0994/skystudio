import { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";

export default function ReviewCard({ review }) {
  const [isVideo, setIsVideo] = useState(false);

  return (
    <div className="w-full">
      <div className={`${isVideo ? "block" : "hidden"}`}>
        <iframe
          width="100%"
          height="200"
          src={`https://www.youtube.com/embed/${review?.video}?autoplay=1&mute=1&rel=0&playsinline=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ borderRadius: "10px" }}
        ></iframe>
      </div>

      <button
        onClick={() => setIsVideo(true)}
        className={`relative w-full ${isVideo && "hidden"}`}
      >
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${review?.thumbnail}`}
          alt="review"
          className="h-[200px] w-full rounded object-cover"
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <BsPlayCircle className="text-6xl text-[#FFFAF4]" />
        </div>
      </button>

      <div className="p-1 text-center">
        <p className="text-sm italic text-neutral-content">{review?.review}</p>

        <h3 className="mb-1 mt-2 text-base font-medium text-neutral">
          {review?.clientName}
        </h3>
        <h4 className="text-sm text-neutral">{review?.project}</h4>
      </div>
    </div>
  );
}
