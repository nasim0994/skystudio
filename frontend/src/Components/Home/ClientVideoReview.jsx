import { Link } from "react-router-dom";
import { useGetAllReviewQuery } from "../../Redux/review/reviewApi";
import ReviewCard from "../Main/ReviewCard";

export default function ClientVideoReview() {
  const { data } = useGetAllReviewQuery({
    limit: 3,
    page: 1,
  });

  const allReview = data?.data;

  return (
    <section className="bg-[#ffffffb8] py-10">
      <div className="container">
        <h2 className="mx-auto text-center text-4xl font-medium sm:w-1/2">
          See What Our Clients Have to Say About Our Work
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {allReview?.map((review) => (
            <ReviewCard key={review?._id} review={review} />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link to="/reviews" className="primary_btn">
            View All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
