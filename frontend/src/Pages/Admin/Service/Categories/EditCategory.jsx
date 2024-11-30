import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
} from "../../../../Redux/service/categoryApi";

export default function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useGetSingleCategoryQuery(id);
  const faq = data?.data;

  const [updateCategory, { isLoading }] = useUpdateCategoryMutation();

  const handleEdit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    const data = {
      name,
    };

    try {
      const res = await updateCategory({ id, data });
      if (res?.data?.success) {
        Swal.fire("", res?.data?.message || "Edit success", "success");
        e.target.reset();
        navigate("/admin/service/category/all");
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
        <h3>Add FAQ</h3>
      </div>

      <form className="p-4" onSubmit={handleEdit}>
        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-1">Name</p>
            <input type="text" name="name" required defaultValue={faq?.name} />
          </div>
        </div>

        <div className="mt-6">
          <button className="admin_btn" disabled={isLoading}>
            {isLoading ? "Editing..." : "Edit Category"}
          </button>
        </div>
      </form>
    </section>
  );
}
