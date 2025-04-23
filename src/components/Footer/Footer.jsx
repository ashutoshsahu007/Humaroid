import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";
import { CiStopwatch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#4e9bc4]  py-2 text-[#ffffff]">
      <div className="col1 flex flex-col gap-20 md:gap-[170px] px-4 md:justify-center py-6 border-b-1 lg:gap-20 lg:px-10 md:flex-row md:flex-wrap lg:flex-nowrap">
        <div className="w-full flex flex-col  gap-3 items-start md:w-[290px]">
          <img src="logo/logo.png" className="w-[80px]" />
          <p className="text-sm leading-6">
            At Amar Humanoid Rehab Clinic, we take a different approach to
            provide prosthetics and orthotics services. We have put better care
            for our patients, partnering clinics and hospitals at the center of
            our approach.
          </p>
          <ul className="flex items-center gap-3">
            <li className="border-1 p-2 rounded-full cursor-pointer hover:text-[#4e9bc4] hover:bg-white">
              <FaTwitter />
            </li>
            <li className="border-1 p-2 rounded-full cursor-pointer hover:text-[#4e9bc4] hover:bg-white">
              <FaFacebookF />
            </li>
            <li className="border-1 p-2 rounded-full cursor-pointer hover:text-[#4e9bc4] hover:bg-white">
              <FaLinkedinIn />
            </li>
            <li className="border-1 p-2 rounded-full cursor-pointer hover:text-[#4e9bc4] hover:bg-white">
              <FaPinterest />
            </li>
            <li className="border-1 p-2 rounded-full cursor-pointer hover:text-[#4e9bc4] hover:bg-white">
              <FaInstagram />
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[290px]">
          <h1 className="text-xl font-semibold mb-5 border-b pb-4">
            Quick Links
          </h1>
          <ul className="flex flex-col gap-4">
            <Link to="/about">
              <li className="flex items-center gap-3 hover:gap-4 hover:cursor-pointer transition-[3s]">
                &gt; <span>About us</span>
              </li>
            </Link>
            <Link to="/testimonial">
              <li className="flex items-center gap-3  hover:gap-4 hover:cursor-pointer transition-[3s]">
                &gt; <span>Testimonial</span>
              </li>
            </Link>
            <Link to="/gallery">
              <li className="flex items-center gap-3  hover:gap-4 hover:cursor-pointer transition-[3s]">
                &gt; <span>Gallery</span>
              </li>
            </Link>
            <Link to="/contact">
              <li className="flex items-center gap-3  hover:gap-4 hover:cursor-pointer transition-[3s]">
                &gt; <span>Contact us</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-[290px]">
          <h1 className="text-xl font-semibold mb-5 border-b pb-4">
            Our services
          </h1>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3 hover:gap-4 hover:cursor-pointer transition-[3s]">
              &gt; <span>Prosthetics</span>
            </li>
            <li className="flex items-center gap-3 hover:gap-4 hover:cursor-pointer transition-[3s]">
              &gt; <span>Physiotherapy</span>
            </li>
            <li className="flex items-center gap-3 hover:gap-4 hover:cursor-pointer transition-[3s]">
              &gt; <span>Orthotics</span>
            </li>
            <li className="flex items-center gap-3 hover:gap-4 hover:cursor-pointer transition-[3s]">
              &gt; <span>Diabetic Foot Cares</span>
            </li>
            <li className="flex items-center gap-3 hover:gap-4 hover:cursor-pointer transition-[3s]">
              &gt; <span>Rehabilitation Products</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[290px]">
          <h1 className="text-xl font-semibold mb-5 border-b pb-4 uppercase">
            Get in Touch
          </h1>
          <ul className="flex flex-col gap-4">
            <a
              href="https://www.google.com/search?sca_esv=ea28a01ba0d65b63&sxsrf=AHTn8zoAzmoWPs0_JYIsdazMwXFz6AJx4Q:1744352447390&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzcW6IvVAF57qsa_SIj4zjf5BtGkseGlCk7_1wZkDxVHt741o_ki-REgWKXbhc82M_CsWmwvcX2w2kuLiGtZZWMqcEMrwTeUcGhfYDvwrUFa_3wrUUw%3D%3D&q=Amar+Humanoid+Rehab+clinic+Reviews&sa=X&ved=2ahUKEwjLpfWfq8-MAxWLbPUHHf-8FHkQ0bkNegQIJhAE&biw=1280&bih=551&dpr=1.5"
              target="_blank"
            >
              <li className="flex items-center gap-3">
                <FaLocationDot />
                <div>
                  <p className="font-semibold uppercase">
                    Amar Humanoid Rehab Clinic
                  </p>
                  <p> Patna , Bihar</p>
                </div>
              </li>
            </a>
            <a href="tel:+916287829972" target="_blank">
              <li className="flex items-center gap-3">
                <BsTelephoneFill />
                <span className="font-semibold">+91 6287829972</span>
              </li>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=info@amarhumanoid.com.com"
              target="_blank"
            >
              <li className="flex items-center gap-3">
                <SlEnvolopeLetter />
                <span className="font-semibold">info@amarhumanoid.com</span>
              </li>
            </a>
            <li className="flex items-center gap-3">
              <CiStopwatch className="text-2xl" />
              <span className="font-semibold">
                Monday - Friday: 8:00 - 19:00
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col2 flex flex-col items-start gap-5 md:flex-row md:items-center justify-between px-3 py-5 text-sm">
        <p>
          Copyright &copy; Amar Humanoid Rehab {new Date().getFullYear()}. All
          rights reserved.
        </p>
        <a href="https://gosparrow.in/">
          <p>Developed by Go Sparrow</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
