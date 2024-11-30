import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteApproachMutation,
  useGetAllApproachQuery,
} from "../../../Redux/approach/approachApi";

export default function AllApproach() {
  const { data, isError, isSuccess } = useGetAllApproachQuery();
  const services = data?.data;

  const [deleteApproach] = useDeleteApproachMutation();
  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this Project?");
    if (isConfirm) {
      try {
        const res = await deleteApproach(id);
        if (res?.data?.success) {
          Swal.fire("", "Approach Deleted Successfully", "success");
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

  if (isError) {
    content = (
      <p className="mt-5 text-red-500">Something went wrong to get data!</p>
    );
  }

  if (!isError && isSuccess) {
    content = (
      <tbody>
        {services?.map((service, i) => (
          <tr key={service?._id}>
            <td>{i + 1}</td>
            <td>{service?.title}</td>
            <td>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${service?.image}`}
                alt={service?.image}
                className="h-8 w-14 rounded"
              />
            </td>
            <td>
              <div className="flex items-center gap-3">
                <Link to={`/admin/approach/edit/${service?._id}`}>
                  <AiOutlineEdit className="text-lg hover:text-red-500" />
                </Link>
                <button onClick={() => handleDelete(service?._id)}>
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
          <h1 className="font-medium text-neutral">All Approach</h1>
          <Link to="/admin/approach/add" className="admin_btn text-sm">
            Add Approach
          </Link>
        </div>
      </div>

      <div className="relative mt-2 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Title</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
    </section>
  );
}
