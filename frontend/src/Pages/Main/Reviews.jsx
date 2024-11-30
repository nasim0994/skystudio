import { useGetAllReviewQuery } from "../../Redux/review/reviewApi";
import ReviewCard from "../../Components/Main/ReviewCard";
import Pagination from "../../Components/Pagination/Pagination";
import { useState } from "react";

export default function Reviews() {
  window.scrollTo(0, 0);
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useGetAllReviewQuery({
    limit: 9,
    page: currentPage,
  });

  const allReview = data?.data;

  return (
    <section className="bg-[#ffffffb8] py-10">
      <div className="container">
        <h2 className="mx-auto text-center text-5xl font-medium sm:w-1/2">
          See What Our Clients Have to Say About Our Work
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {allReview?.map((review) => (
            <ReviewCard key={review?._id} review={review} />
          ))}
        </div>

        {/* Pagination */}
        {data?.meta?.pages > 1 && (
          <Pagination
            pages={data?.meta?.pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
}
