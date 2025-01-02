import React from "react";
import logo from "../assets/Pictures/logo-01.png";

const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-x-94">
        {/* Left Section: Logo and Text */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Rebooted Creation Labs Logo"
            className="h-12 mt-36 mr-96 absoulate bottom-2 2"
          />
        </div>

        {/* Right Section: Copyright */}
        <div className="text-sm text-pritext  text-center md:text-right ml-96 md:mt-36 absoulate bottom-2  ">
          <p>Copyright 2024, Rebooted Creation Labs.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
