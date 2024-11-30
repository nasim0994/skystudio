import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import Swal from "sweetalert2";
import { useAddReviewMutation } from "../../../Redux/review/reviewApi";

export default function AddClientReview() {
  const navigate = useNavigate();
  const [image, setImage] = useState([]);

  const [addReview, { isLoading }] = useAddReviewMutation();

  const handleAddProject = async (e) => {
    e.preventDefault();
    const video = e.target.video.value;
    const clientName = e.target.clientName.value;
    const project = e.target.project.value;
    const review = e.target.review.value;

    if (image?.length <= 0) {
      return Swal.fire("", "thumbnail is required", "warning");
    }

    const formData = new FormData();
    formData.append("thumbnail", image[0].file);
    formData.append("video", video);
    formData.append("clientName", clientName);
    formData.append("project", project);
    formData.append("review", review);

    try {
      const res = await addReview(formData);
      if (res?.data?.success) {
        Swal.fire("", "Review added successfully", "success");
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
        <h3>Add Client Review</h3>
      </div>

      <form className="p-4" onSubmit={handleAddProject}>
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
            </div>
          </div>
          <div>
            <p className="mb-1">Youtube Video Id</p>
            <input type="text" name="video" />
          </div>

          <div>
            <p className="mb-1">Client Name</p>
            <input type="text" name="clientName" />
          </div>
          <div>
            <p className="mb-1">Project Title</p>
            <input type="text" name="project" />
          </div>

          <div className="sm:col-span-2">
            <p className="mb-1">Review</p>
            <textarea
              name="review"
              rows="5"
              className="w-full rounded border border-base-200"
            ></textarea>
          </div>
        </div>

        <div className="mt-6">
          <button className="admin_btn" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Review"}
          </button>
        </div>
      </form>
    </section>
  );
}
