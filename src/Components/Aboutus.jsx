import { useState, useEffect } from "react";
import aboutus from "../assets/Pictures/aboutus1.json";
import Lottie from "lottie-react";
import Whatwedo from "./Whatwedo";
import Ourmission from "./Ourmission";
import Nextpage from "./Nextpage";
import Gallery from "./Gallery";
import Footer from "../Components/Footer";

const Aboutus = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-white overflow-hidden">
        {/* Animation Layer */}
        <div className="absolute inset-0">
          <div className="absolute right-[50%] translate-x-1/2 -top-20 lg:right-[100px] lg:top-[10px] lg:translate-x-0 mt-12">
            <Lottie
              animationData={aboutus}
              className="w-[700px] h-[700px] lg:w-[800px] lg:h-[700px] "
              loop={false} // This will ensure the animation only runs once
              autoplay={true} // Starts the animation immediately
            />
          </div>
        </div>

        {/* Text Content Layer */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-4 space-y-6 text-center lg:text-left lg:w-1/2 lg:pl-12">
            <h1 className="font-Poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-left">
              About Us
            </h1>

            <p className="font-Poppins text-lg sm:text-xl md:text-2xl lg:text-xl text-black  mx-auto lg:mx-0 text-left">
              As your trusted and experienced technology partner, we are
              dedicated to ensuring the success of your next venture. With
              reliability at our core, we bring the expertise and commitment
              needed to drive impactful outcomes, empowering your business to
              achieve its goals and thrive in a competitive landscape.
            </p>
          </div>
        </div>
      </div>

      <Whatwedo />
      <Ourmission />
      <Nextpage />
      {/* <Gallery /> */}
      <Footer />
    </>
  );
};

export default Aboutus;
