import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../../../Redux/service/categoryApi";

export default function AllCategories() {
  const { data } = useGetAllCategoriesQuery();
  const faqs = data?.data;

  const [deleteCategory] = useDeleteCategoryMutation();

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this FAQ?");
    if (isConfirm) {
      try {
        const res = await deleteCategory(id);
        if (res?.data?.success) {
          Swal.fire("", res?.data?.message || "Deleted Success", "success");
        } else {
          Swal.fire("", res?.data?.message || "Something went wrong", "error");
          console.log(res);
        }
      } catch (error) {
        Swal.fire("", "Something went wrong", "error");
        console.log(error);
      }
    }
  };

  return (
    <section>
      <div className="rounded border-b bg-base-100 p-4">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-neutral">All Service Categories</h1>
          <Link to="/admin/service/category/add" className="admin_btn text-sm">
            Add Category
          </Link>
        </div>
      </div>

      <div className="relative mt-2 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Acstion</th>
            </tr>
          </thead>

          <tbody>
            {faqs?.map((faq, i) => (
              <tr key={faq?._id}>
                <td>{i + 1}</td>
                <td>{faq?.name}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <Link to={`/admin/service/category/edit/${faq?._id}`}>
                      <AiOutlineEdit className="text-lg hover:text-red-500" />
                    </Link>
                    <button onClick={() => handleDelete(faq?._id)}>
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
