import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import Swal from "sweetalert2";
import {
  useGetSingleReviewQuery,
  useUpdateReviewMutation,
} from "../../../Redux/review/reviewApi";

export default function EditClientReview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState([]);

  const { data } = useGetSingleReviewQuery(id);
  const review = data?.data;

  const [updateReview, { isLoading }] = useUpdateReviewMutation();

  const handleEdit = async (e) => {
    e.preventDefault();
    const video = e.target.video.value;
    const clientName = e.target.clientName.value;
    const project = e.target.project.value;
    const review = e.target.review.value;

    const formData = new FormData();
    if (image?.length > 0) formData.append("thumbnail", image[0].file);
    formData.append("video", video);
    formData.append("clientName", clientName);
    formData.append("project", project);
    formData.append("review", review);

    try {
      const res = await updateReview({ id, formData });
      if (res?.data?.success) {
        Swal.fire("", "Review edit successfully", "success");
        e.target.reset();
        setImage([]);
        navigate("/admin/client-review/all");
      } else {
        Swal.fire("", res?.data?.message || "Something went wrong!", "error");
        console.log(res);
      }
    } catch (error) {
      Swal.fire("", "Something went wrong!", "error");
      console.log(error);
    }
  };

  return (
    <section className="rounded bg-base-100 shadow">
      <div className="flex items-center justify-between border-b p-4 font-medium text-neutral">
        <h3>Edit Client Review</h3>
      </div>

      <form className="p-4" onSubmit={handleEdit}>
        <div className="grid items-start gap-4 text-neutral-content sm:grid-cols-2">
          <div>
            <p className="mb-1">Thumbnail</p>
            <div>
              <ImageUploading
                value={image}
                onChange={(icn) => setImage(icn)}
                dataURLKey="data_url"
                maxNumber={1}
              >
                {({ onImageUpload, onImageRemove, dragProps }) => (
                  <div
                    className="rounded border border-dashed p-4"
                    {...dragProps}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        onClick={onImageUpload}
                        className="w-max cursor-pointer rounded-2xl bg-primary px-4 py-1.5 text-sm text-base-100"
                      >
                        Choose Image
                      </span>
                      <p className="text-neutral-content">or Drop here</p>
                    </div>

                    {image?.length > 0 && (
                      <div className="mt-4">
                        <img
                          src={image[0]["data_url"]}
                          alt=""
                          className="w-24"
                        />
                        <div
                          onClick={() => onImageRemove(0)}
                          className="absolute right-0 top-0 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-primary text-base-100"
                        >
                          <AiFillDelete />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </ImageUploading>

              {review?.thumbnail && (
                <div className="mt-2">
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/${review?.thumbnail}`}
                    alt={review?.image}
                    className="w-40 rounded"
                  />
                </div>
              )}
            </div>
          </div>
          <div>
            <p className="mb-1">Youtube Video Id</p>
            <input
              type="text"
              name="video"
              required
              defaultValue={review?.video}
            />
          </div>

          <div>
            <p className="mb-1">Client Name</p>
            <input
              type="text"
              name="clientName"
              required
              defaultValue={review?.clientName}
            />
          </div>
          <div>
            <p className="mb-1">Project Title</p>
            <input
              type="text"
              name="project"
              required
              defaultValue={review?.project}
            />
          </div>

          <div className="sm:col-span-2">
            <p className="mb-1">Review</p>
            <textarea
              name="review"
              rows="5"
              className="w-full rounded border border-base-200"
              required
              defaultValue={review?.review}
            ></textarea>
          </div>
        </div>
        <div className="mt-6">
          <button className="admin_btn" disabled={isLoading}>
            {isLoading ? "Editing..." : "Edit Review"}
          </button>
        </div>
      </form>
    </section>
  );
}
