import React from "react";
import * as FaIcons from "react-icons/fa";

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

  const socials = contact?.socials;

  const { data: businessData } = useGetBusinessInfoQuery();
  const businessInfo = businessData?.data;

  // const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 pt-16">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src={import.meta.env.VITE_BACKEND_URL + logo?.logo}
              alt="logo"
              className="w-52"
              loading="lazy"
            />
            <p className="mt-3 text-sm text-neutral/80">{businessInfo?.bio}</p>

            <div className="mt-3">
              <img src="/skystudiobd.svg" alt="qr" className="w-24" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium text-neutral">Informations</h2>
            <ul className="mt-4 flex flex-col gap-1.5 text-[15px] font-light text-neutral/80">
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
                <Link to={`/contact-us`} className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={`/privacy-policy`} className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium text-neutral">Contact</h2>
            <ul className="mt-4 flex flex-col gap-1.5 text-[15px] font-light text-neutral/80">
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
          <div className="flex items-center justify-between text-sm text-neutral/80">
            <p>
              All Rights Reserved @SkyStudio. Develop by{" "}
              <Link
                to="https://www.emanagerit.com"
                target="_blank"
                className="underline"
              >
                eManager
              </Link>
            </p>

            {/*  */}
            <div className="flex items-center justify-center gap-2">
              {socials?.map((social, i) => (
                <Link
                  key={i}
                  to={social?.url}
                  target="_blank"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg text-base-100 duration-300 hover:bg-neutral/90"
                >
                  {React.createElement(FaIcons[social?.icon])}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
