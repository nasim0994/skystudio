import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import SidebarMenu from "./SidebarMenu";
import { useEffect, useState } from "react";

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  // close sidebar when click outside
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
    <header className="relative z-40 pt-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            <img src="/images/logo.png" alt="logo" className="h-16 w-[200px]" />
          </Link>

          <nav>
            <ul className="flex items-center gap-6">
              <li className="hidden sm:block">
                <Link to="/contact-us" className="primary_outline_btn">
                  Book Now
                </Link>
              </li>

              <li>
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
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
