import { Link } from "react-router-dom";

import {
  MdMonitor,
  MdOutlineDashboard,
  MdOutlineCategory,
  MdContactPhone,
} from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { RiAdminFill } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { GrServices } from "react-icons/gr";

import SidebarItems from "./SidebarItems";

const adminSidebarItems = [
  {
    icon: <MdOutlineDashboard />,
    title: "Dashbaord",
    path: "/admin/dashboard",
  },

  {
    icon: <MdOutlineCategory />,
    title: "Category",
    subMenu: [
      {
        title: "Categories",
        path: "/admin/category/categories",
      },
      {
        title: "Sub Categories",
        path: "/admin/category/sub-categories",
      },
      {
        title: "Sub Sub Categories",
        path: "/admin/category/sub-sub-categories",
      },
    ],
  },

  {
    icon: <BsCart4 />,
    title: "Products",
    path: "/admin/product/all",
  },

  {
    icon: <GrServices />,
    title: "Services",
    path: "/admin/service/all",
  },

  // {
  //   icon: <FaBorderAll />,
  //   title: "Orders",
  //   path: "/admin/orders",
  // },

  {
    icon: <RiAdminFill />,
    title: "Administrator",
    path: "/admin/administrator/all",
  },

  {
    icon: <FcAbout />,
    title: "About Us",
    path: "/admin/about-us",
  },

  {
    icon: <MdContactPhone />,
    title: "Contact Us",
    path: "/admin/contact-us",
  },

  {
    icon: <MdMonitor />,
    title: "Front-End Setting",
    subMenu: [
      {
        title: "Logo",
        path: "/admin/front-end/logo",
      },
      {
        title: "Favicon",
        path: "/admin/front-end/favicon",
      },
      {
        title: "Banner",
        path: "/admin/front-end/banner",
      },
    ],
  },

  {
    icon: <IoMdSettings />,
    title: "General Setting",
    subMenu: [
      {
        title: "Business Info",
        path: "/admin/general-setting/business-info",
      },
    ],
  },

  {
    icon: <FaChartLine />,
    title: "SEO Setting",
    path: "/admin/seo",
  },
];

export default function AdminSidebar() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <nav className="admin_siderbar">
          <Link to="/admin/dashboard" className="py-3 block">
            <img className="w-3/5 mx-auto" src="/images/logo.png" alt="Logo" />
          </Link>

          <ul>
            {adminSidebarItems?.map((item, i) => (
              <SidebarItems key={i} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
