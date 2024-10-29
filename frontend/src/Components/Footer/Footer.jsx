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
    <footer className="bg-black/90 pt-16">
      <div className="container">
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
          <div className="flex items-center justify-between text-sm text-neutral-content">
            <p>
              All Rights Reserved @Astral Interior. Develop by{" "}
              <Link
                to="https://www.emanagerit.com"
                target="_blank"
                className="underline"
              >
                eManager
              </Link>
            </p>
            <div className="flex items-center justify-center gap-2">
              <Link
                to={contact?.facebookLink}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral/90 text-lg text-base-100 duration-300 hover:bg-primary"
              >
                <FaFacebookF />
              </Link>
              <Link
                to={contact?.linkedinLink}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral/90 text-lg text-base-100 duration-300 hover:bg-primary"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to={contact?.twitterLink}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral/90 text-lg text-base-100 duration-300 hover:bg-primary"
              >
                <FaInstagram />
              </Link>
              <Link
                to={contact?.youtubeLink}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral/90 text-lg text-base-100 duration-300 hover:bg-primary"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
