import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-100 pt-16">
      <div className="container">
        <div className="flex items-center justify-center gap-4">
          <Link
            to="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral/90 text-lg text-base-100"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral/90 text-lg text-base-100"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral/90 text-lg text-base-100"
          >
            <FaInstagram />
          </Link>
          <Link
            to="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral/90 text-lg text-base-100"
          >
            <FaYoutube />
          </Link>
        </div>

        <div className="mt-8 text-center text-neutral">
          <h2 className="text-[80px] font-medium sm:text-[100px]">16500</h2>
          <div className="-mt-5 text-[15px] sm:-mt-7">
            <p>Brooklyn, New York, United States</p>
            <p>example@example.com</p>
            <p>+0123-456789</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 text-neutral-content">
          <Link to="" className="duration-200 hover:text-primary">
            Home
          </Link>
          <Link to="/about-us" className="duration-200 hover:text-primary">
            About
          </Link>
          <Link to="/contact-us" className="duration-200 hover:text-primary">
            Contact
          </Link>
          <Link to="/projects" className="duration-200 hover:text-primary">
            Projects
          </Link>
        </div>

        <div className="mt-8 border-t border-neutral-content py-4">
          <div className="flex items-center justify-between text-xs text-neutral-content">
            <p>
              All Rights Reserved @Gloria Homes LTD. Develop by{" "}
              <Link
                to="https://www.emanagerit.com"
                target="_blank"
                className="hover:underline"
              >
                eManager It Ltd
              </Link>
            </p>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
