import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import {
  useDeleteTeamCategoryMutation,
  useGetAllTeamCategoryQuery,
} from "../../../Redux/teamCategory/teamCategoryApi";

export default function AllTeamCategory() {
  const { data, isLoading, isFetching } = useGetAllTeamCategoryQuery();
  const categories = data?.data;

  const [deleteTeamCategory] = useDeleteTeamCategoryMutation();

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this Category?");
    if (isConfirm) {
      try {
        const res = await deleteTeamCategory(id);
        if (res?.data?.success) {
          Swal.fire("", "Category Deleted Successfully", "success");
        } else {
          Swal.fire("", res?.data?.message || "Something went wrong", "error");
          console.log(res);
        }
      } catch (error) {
        alert("Something went wrong");
        console.log(error);
      }
    }
  };

  if (isLoading || isFetching) return <h1>Loading...</h1>;

  return (
    <section>
      <div className="rounded border-b bg-base-100 p-4">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-neutral">All Team Category</h1>
          <Link to="/admin/team/category/add" className="admin_btn text-sm">
            Add Category
          </Link>
        </div>
      </div>

      <div className="relative mt-2 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {categories?.map((category) => (
              <tr key={category?._id}>
                <td>{category?.order}</td>
                <td>{category?.name}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <Link to={`/admin/team/category/edit/${category?._id}`}>
                      <AiOutlineEdit className="text-lg hover:text-red-500" />
                    </Link>
                    <button onClick={() => handleDelete(category?._id)}>
                      <AiOutlineDelete className="text-lg hover:text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
