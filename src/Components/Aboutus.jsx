import { useState, useEffect } from "react";
import aboutus from "../assets/Pictures/aboutus1.json";
import Lottie from "lottie-react";
import Whatwedo from "./Whatwedo";

const Aboutus = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-screen md:h-[100vh] px-4 mt-4 bg-white gap-64">
        <div className="flex flex-col w-full md:w-1/2 space-y-4 text-center md:text-left -mt-48">
          <h1 className="font-Poppins text-3xl md:text-7xl font-bold text-gray-800 text-left ml-14">
            About Us
          </h1>
          <div className="flex flex-col space-y-4 ml-16">
            <p className="font-Poppins text-3xl md:text-lg text-gray-600 text-left">
              As your trusted and experienced technology partner, we are
              dedicated to ensuring the success of your next venture. With
              reliability at our core, we bring the expertise and commitment
              needed to drive impactful outcomes, empowering your business to
              achieve its goals and thrive in a competitive landscape.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 -mt-4 p-2">
          <Lottie
            animationData={aboutus}
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </div>
      </div>
      <Whatwedo />
    </>
  );
};

export default Aboutus;
