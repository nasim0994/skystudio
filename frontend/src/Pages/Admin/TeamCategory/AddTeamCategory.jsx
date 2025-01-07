import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useAddTeamCategoryMutation,
  useGetAllTeamCategoryQuery,
} from "../../../Redux/teamCategory/teamCategoryApi";

export default function AddTeamCategory() {
  const navigate = useNavigate();
  const { data } = useGetAllTeamCategoryQuery();
  const categories = data?.data;

  const [addFAQ, { isLoading }] = useAddTeamCategoryMutation();

  const handleAdd = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const order = e.target.order.value;

    const data = {
      name,
      order,
    };

    try {
      const res = await addFAQ(data);
      if (res?.data?.success) {
        Swal.fire("", "Category added successfully", "success");
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
        <h3>Add Category</h3>
      </div>

      <form className="p-4" onSubmit={handleAdd}>
        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-1">Name</p>
            <input type="text" name="name" required />
          </div>

          <div>
            <p className="mb-1">Order</p>
            <input
              type="number"
              name="order"
              required
              defaultValue={categories?.length + 1 || 1}
            />
          </div>
        </div>

        <div className="mt-6">
          <button className="admin_btn" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Category"}
          </button>
        </div>
      </form>
    </section>
  );
}
