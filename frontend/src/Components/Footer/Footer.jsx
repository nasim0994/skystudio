import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetContactsQuery } from "../../Redux/contact/contactApi";
import { useGetLogosQuery } from "../../Redux/logo/logoApi";
import { useGetBusinessInfoQuery } from "../../Redux/businessInfo/businessInfoApi";

export default function Footer() {
  const { data: logos } = useGetLogosQuery();
  const logo = logos?.data;

  const { data } = useGetContactsQuery();
  const contact = data?.data;

  const { data: businessData } = useGetBusinessInfoQuery();
  const businessInfo = businessData?.data;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 pt-16">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src={import.meta.env.VITE_BACKEND_URL + logo?.logo}
              alt="logo"
              className="w-60"
              loading="lazy"
            />
            <p className="mt-3 text-sm text-gray-300">
              {businessInfo?.tagline}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-200">Informations</h2>
            <ul className="mt-4 flex flex-col gap-1.5 text-[15px] font-light text-gray-300">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about-us" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to={`/services`} className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to={`/projects`} className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link to={`/contact-us`} className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-200">Contact</h2>
            <ul className="mt-4 flex flex-col gap-1.5 text-[15px] font-light text-gray-300">
              <li>
                <p className="flex items-center gap-1.5">
                  <BsTelephone />
                  {contact?.phone}
                </p>
              </li>
              <li>
                <p className="flex items-center gap-1.5">
                  <MdOutlineMail />
                  {contact?.email}
                </p>
              </li>
              <li>
                <div className="flex gap-1">
                  <p className="mt-1 text-lg">
                    <MdOutlineLocationOn />
                  </p>
                  <p>{contact?.address}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom */}
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
