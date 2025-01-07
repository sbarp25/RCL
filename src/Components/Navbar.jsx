import { useState } from "react";
import RclLogoNew from "../assets/Pictures/logo-01.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <a href="/" className="w-20 md:w-24">
          <img src={RclLogoNew} alt="RCL Logo" />
        </a>

        {/* Hamburger/X Button */}
        <button
          className="md:hidden block text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <IoClose className="text-2xl" />
          ) : (
            <GiHamburgerMenu className="text-2xl" />
          )}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              to="/Aboutus"
              className="text-pritext hover:text-hoverText transition"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              className="text-pritext hover:text-hoverText transition"
            >
              Services
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-hoverbackground transition-transform transform duration-300 hover:scale-105 -mt-4">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-white shadow-md transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } z-40`}
      >
        {/* Close Button (X) */}
        <div className="flex justify-between items-center px-6 py-4">
          <span className="text-xl font-bold text-pritext">Menu</span>
          <button
            className="text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        <ul className="space-y-4 py-6 px-6">
          <li>
            <Link
              to="/Aboutus"
              className="block text-pritext hover:text-hoverText transition"
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              className="block text-pritext hover:text-hoverText transition"
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="block text-pritext hover:text-white hover:bg-hoverbackground transition"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
