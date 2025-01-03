import React from "react";
import logo from "../assets/Pictures/logo-01.png";

const Footer = () => {
  return (
    <footer className="bg-white py-6 ">
      <div className="container mx-auto -px-96 flex flex-col md:flex-row items-center justify-between ">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <img src={logo} alt="Rebooted Creation Labs Logo" className="h-12" />
        </div>

        {/* Right Section: Copyright */}
        <div className=" font-Poppinstext-sm text-gray-600 text-center md:text-right ">
          <p>&copy; 2024, Rebooted Creation Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
