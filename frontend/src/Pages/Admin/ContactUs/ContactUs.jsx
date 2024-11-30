import swal from "sweetalert2";
import {
  useGetContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
} from "../../../Redux/contact/contactApi.js";
import { useEffect, useState } from "react";
import MultiSocial from "./MultiSocial.jsx";

export default function ContactUs() {
  const [social, setSocial] = useState([]);

  const { data, isLoading } = useGetContactsQuery();
  const contactUs = data?.data;
  const id = contactUs?._id;

  console.log(contactUs);

  useEffect(() => {
    if (contactUs?.socials) {
      setSocial(contactUs?.socials);
    }
  }, [contactUs]);

  const [addContact, { isLoading: addIsLoading }] = useAddContactMutation();
  const [updateContact, { isLoading: updateIsLoading }] =
    useUpdateContactMutation();

  const handleAddUpdate = async (e) => {
    e.preventDefault();

    const info = {
      title: e.target.title.value,
      description: e.target.description.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      map: e.target.map.value,
      socials: social,
    };

    try {
      if (id) {
        const res = await updateContact({ id, info });
        if (res?.data?.success) {
          swal.fire("", `Contact update successfully`, "success");
        } else {
          swal.fire("", "Something went wrong!", "error");
        }
      } else {
        const res = await addContact(info);
        if (res?.data?.success) {
          swal.fire("", `Contact add successfully`, "success");
          console.log(res);
        } else {
          swal.fire("", "Something went wrong!", "error");
          console.log(res);
        }
      }
    } catch (error) {
      swal.fire("", error.message || "Something went wrong!", "error");
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="rounded bg-base-100 shadow">
      <div className="border-b p-4">
        <h3 className="font-medium text-neutral">Contact Us</h3>
      </div>

      <form className="p-4" onSubmit={handleAddUpdate}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-1">Title</p>
            <input
              type="text"
              name="title"
              defaultValue={contactUs?.title}
              required
            />
          </div>
          <div>
            <p className="mb-1">Description</p>
            <input
              type="text"
              name="description"
              defaultValue={contactUs?.description}
              required
            />
          </div>
        </div>
        <div className="mt-4 grid items-start gap-4 text-neutral-content sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p className="mb-1">Email</p>
            <input
              type="email"
              name="email"
              defaultValue={contactUs?.email}
              required
            />
          </div>
          <div>
            <p className="mb-1">Phone</p>
            <input
              type="tel"
              name="phone"
              defaultValue={contactUs?.phone}
              required
            />
          </div>

          <div>
            <p className="mb-1">Address</p>
            <textarea
              name="address"
              defaultValue={contactUs?.address}
              required
            ></textarea>
          </div>

          <div className="sm:col-span-3">
            <p className="mb-1">Map URL</p>
            <textarea
              name="map"
              rows={5}
              defaultValue={contactUs?.map}
            ></textarea>
          </div>
        </div>

        <div className="mt-4 grid">
          <MultiSocial social={social} setSocial={setSocial} />
        </div>

        <div className="mt-4">
          <div className="flex gap-2">
            <button
              className="admin_btn"
              disabled={addIsLoading || updateIsLoading}
            >
              {id ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
