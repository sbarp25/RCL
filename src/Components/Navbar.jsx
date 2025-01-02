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

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <Link to="/" className="w-20 md:w-24">
          <img src={RclLogoNew} alt="RCL Logo" />
        </Link>

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

        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              to="/aboutus"
              className="text-pritext hover:text-hoverText transition"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-pritext hover:text-hoverText transition"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/career"
              className="text-pritext hover:text-hoverText transition"
            >
              Career
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-hoverbackground transition-transform transform duration-300 hover:scale-105">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-white shadow-md transform ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <ul className="space-y-4 py-6 px-6">
          <li>
            <Link
              to="/aboutus"
              className="block text-pritext hover:text-hoverText transition"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block text-pritext hover:text-hoverText transition"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/career"
              className="block text-pritext hover:text-hoverText transition"
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="block text-pritext hover:text-white hover:bg-hoverbackground transition"
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
