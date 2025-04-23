import { useState } from "react";
import { Calendar, Menu, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col">
      <div className="col1 hidden  md:flex justify-between bg-[#159fd6] text-white py-3 md:px-5 lg:px-10">
        <a href="tel:+916287829972" target="_blank">
          <div className="flex items-center text-sm gap-2 hover:cursor-pointer">
            <Phone size={16} /> Emergency: +91 6287829972
          </div>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=info@amarhumanoid.com.com"
          target="_blank"
        >
          <div className="text-sm">info@amarhumanoid.com</div>
        </a>
      </div>
      <div className="col2 bg-white shadow-md ">
        <div className="max-w-7xl mx-auto px-6  flex items-center justify-between">
          <Link to="/">
            <img src="logo/logo.png" alt="image not found" className="w-20" />
          </Link>
          <div className="flex items-center gap-10">
            <ul className="hidden lg:flex  items-center gap-5 text-gray-700 font-medium">
              <li>
                <Link to="/" className="hover:text-[#4e9bc4]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#4e9bc4]">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#4e9bc4]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/testimonial" className="hover:text-[#4e9bc4]">
                  Testimonial
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-[#4e9bc4]">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#4e9bc4]">
                  Contact us
                </Link>
              </li>
            </ul>
            <Link to="/appointment">
              <button className="bg-[#36bdb2] hidden  lg:flex items-center gap-2 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95">
                <Calendar size={18} />
                Book Appointment
              </button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <ul className="flex flex-col lg:hidden px-4 pb-4 space-y-3 text-gray-700 font-medium">
            <li onClick={() => setMenuOpen(!menuOpen)}>
              <Link to="/" className="block">
                Home
              </Link>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)}>
              <Link to="/about" className="block">
                About Us
              </Link>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)}>
              <Link to="/gallery" className="block">
                Gallery
              </Link>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)}>
              <Link to="/contact" className="block">
                Contact
              </Link>
            </li>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-full bg-[#36bdb2]  hover:bg-blue-700 text-white"
            >
              <Link to="/appointment">Book Appointment</Link>
            </button>
          </ul>
        )}
      </div>
    </header>
  );
}
