import React from "react";
import carrier from "../assets/Pictures/Carrier.json";
import Lottie from "lottie-react";

const Carrier = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between md:space-y-4 md:space-x-8 px-4 md:px-12 py-8 bg-black text-white text-left ">
        <div className="flex-1">
          <Lottie animationData={carrier} />{" "}
        </div>
        <div className="flex-1 text-center   ">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mr-44 text-left">
            AI-Driven Insights to Boost Efficiency
          </h1>
        </div>
      </div>
    </>
  );
};

export default Carrier;
