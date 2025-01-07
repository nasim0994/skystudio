import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useGetSingleTeamCategoryQuery,
  useUpdateTeamCategoryMutation,
} from "../../../Redux/teamCategory/teamCategoryApi";

export default function EditTeamCategory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useGetSingleTeamCategoryQuery(id);
  const category = data?.data;

  const [updateTeamCategory, { isLoading }] = useUpdateTeamCategoryMutation();

  const handleEdit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const order = e.target.order.value;

    const data = {
      name,
      order,
    };

    try {
      const res = await updateTeamCategory({ id, data });
      if (res?.data?.success) {
        Swal.fire("", "Category edit successfully", "success");
        e.target.reset();
        navigate("/admin/team/category/all");
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
        <h3>Edit Category</h3>
      </div>

      <form className="p-4" onSubmit={handleEdit}>
        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-1">Name</p>
            <input
              type="text"
              name="name"
              required
              defaultValue={category?.name}
            />
          </div>

          <div>
            <p className="mb-1">Order</p>
            <input
              type="number"
              name="order"
              required
              defaultValue={category?.order}
            />
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
