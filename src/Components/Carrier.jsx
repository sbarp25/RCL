import React from "react";
import carrier from "../assets/Pictures/Carrier.json";
import Lottie from "lottie-react";

const Carrier = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-8 bg-black text-white gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <Lottie
            animationData={carrier}
            className="w-full max-w-md md:max-w-xl lg:max-w-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-4 text-center md:text-left ml-7">
          <a href="/Contact">
            <h1 className="font-Poppins text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white ">
              AI-Driven Insights to Boost Efficiency
            </h1>
          </a>
        </div>
      </div>
    </>
  );
};

export default Carrier;
