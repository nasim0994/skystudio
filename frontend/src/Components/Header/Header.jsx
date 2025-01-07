import "../../assets/css/header.css";

import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import SidebarMenu from "./SidebarMenu";
import { useEffect, useState } from "react";
import { useGetLogosQuery } from "../../Redux/logo/logoApi";

export default function Header() {
  const { data } = useGetLogosQuery();
  const logo = data?.data;

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (showSidebar) {
      document.addEventListener("click", (e) => {
        if (
          (!e.target.closest(".header_menu_btn") &&
            !e.target.closest(".sidebar_menu")) ||
          e.target.closest(".sidebar_menu a")
        ) {
          setShowSidebar(false);
        }
      });
    }
  }, [showSidebar]);

  return (
    <header className="bg-[#FFFAF4] py-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${logo?.logo}`}
              alt="logo"
              className="h-16 w-[150px]"
              loading="lazy"
            />
          </Link>

          <nav>
            <ul className="hidden items-center gap-6 md:flex">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About US</NavLink>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/our-team">Team</NavLink>
              </li>

              <li className="hidden sm:block">
                <Link to="/contact-us" className="primary_btn">
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="md:hidden">
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="header_menu_btn"
              >
                <RiMenu3Fill />
              </button>

              <SidebarMenu
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
