import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetContactsQuery } from "../../Redux/contact/contactApi";

export default function SidebarMenu({ showSidebar, setShowSidebar }) {
  const { data } = useGetContactsQuery();

  const contactUs = data?.data;

  return (
    <div className={`sidebar_menu ${showSidebar && "active"}`}>
      <div className="flex justify-end">
        <button
          onClick={() => setShowSidebar(false)}
          className="header_menu_btn"
        >
          <MdOutlineClose />
        </button>
      </div>

      <div className="mt-6">
        <ul className="flex flex-col gap-3 text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/projects">On Sale Projects</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
