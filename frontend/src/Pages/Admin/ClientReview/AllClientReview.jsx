import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteReviewMutation,
  useGetAllReviewQuery,
} from "../../../Redux/review/reviewApi";
import { useState } from "react";
import Pagination from "../../../Components/Pagination/Pagination";

export default function AllClientReview() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isSuccess, isLoading, isFetching } =
    useGetAllReviewQuery({
      limit: 10,
      page: currentPage,
    });

  const allReview = data?.data;

  const [deleteReview] = useDeleteReviewMutation();
  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this Project?");
    if (isConfirm) {
      try {
        const res = await deleteReview(id);
        if (res?.data?.success) {
          Swal.fire("", "Review Deleted Successfully", "success");
        } else {
          Swal.fire("", res?.data?.message || "Something went wrong", "error");
          console.log(res);
        }
      } catch (error) {
        Swal.fire("", error?.message || "Something went wrong", "error");
        console.log(error);
      }
    }
  };

  let content = null;

  if (isLoading || isFetching) {
    content = (
      <tr>
        <td colSpan="5" className="text-center">
          Loading...
        </td>
      </tr>
    );
  }

  if (isError) {
    content = (
      <p className="mt-5 text-red-500">Something went wrong to get data!</p>
    );
  }

  if (!isError && isSuccess) {
    content = (
      <tbody>
        {allReview?.map((review, i) => (
          <tr key={review?._id}>
            <td>{i + 1}</td>
            <td>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${review?.thumbnail}`}
                alt={review?.image}
                className="h-8 w-14 rounded"
              />
            </td>
            <td>{review?.clientName}</td>
            <td>
              {review?.review?.length > 40
                ? review?.review.slice(0, 40) + "..."
                : review?.review}
            </td>
            <td>
              <div className="flex items-center gap-3">
                <Link to={`/admin/client-review/edit/${review?._id}`}>
                  <AiOutlineEdit className="text-lg hover:text-red-500" />
                </Link>
                <button onClick={() => handleDelete(review?._id)}>
                  <AiOutlineDelete className="text-lg hover:text-red-500" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <section>
      <div className="rounded border-b bg-base-100 p-4">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-neutral">All Client Review</h1>
          <Link to="/admin/client-review/add" className="admin_btn text-sm">
            Add Review
          </Link>
        </div>
      </div>

      <div className="relative mt-2 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Thumbnail</th>
              <th>Client Name</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>

      {data?.meta?.pages > 1 && (
        <Pagination
          pages={data?.meta?.pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </section>
  );
}
