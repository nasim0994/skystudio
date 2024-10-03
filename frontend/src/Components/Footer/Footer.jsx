import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetContactsQuery } from "../../Redux/contact/contactApi";

export default function Footer() {
  const { data } = useGetContactsQuery();
  const contact = data?.data;

  return (
    <footer className="bg-slate-100 pt-16">
      <div className="container">
        <div className="flex items-center justify-center gap-4">
          <Link
            to={contact?.facebookLink}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral/90 text-lg text-base-100"
          >
            <FaFacebookF />
          </Link>
          <Link
            to={contact?.linkedinLink}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral/90 text-lg text-base-100"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to={contact?.twitterLink}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral/90 text-lg text-base-100"
          >
            <FaInstagram />
          </Link>
          <Link
            to={contact?.youtubeLink}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral/90 text-lg text-base-100"
          >
            <FaYoutube />
          </Link>
        </div>

        <div className="mt-8 text-center text-neutral">
          <h2 className="text-[80px] font-medium sm:text-[100px]">
            {contact?.hotNumber}
          </h2>
          <div className="-mt-5 text-[15px] sm:-mt-7">
            <p>{contact?.address}</p>
            <p>{contact?.email}</p>
            <p>{contact?.phone}</p>
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
          <div className="flex items-center justify-between text-[8px] md:text-xs text-neutral-content">
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
