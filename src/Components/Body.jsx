import { useState, useEffect } from "react";
import Nextpage from "./Nextpage";
import homepage from "../assets/Pictures/homepage.json";
import homepageback from "../assets/Pictures/homepageback.png";
import Lottie from "lottie-react";
import Third from "../Components/Third";
import ContactUS from "./ContactUS";
import Carrier from "./Carrier";
import Blog from "../Components/Blog";
import Ourclient from "../Components/OurClient";
import BuildFututre from "../Components/Buildfuture";
import Footer from "../Components/Footer";

const Body = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => setStep(3), 5000),
    ];

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-screen px-4 bg-white">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/2 space-y-6 text-center md:text-left mt-12 md:mt-0 px-4 md:px-12">
          <h1 className="font-Poppins text-2xl md:text-5xl lg:text-7xl font-bold text-pritext text-left">
            Whispers of code,
          </h1>
          <div className="flex flex-col space-y-4">
            {step >= 1 && (
              <h1 className="font-Poppins text-xl md:text-4xl lg:text-6xl font-bold text-pritext text-left animate-typing overflow-hidden whitespace-nowrap">
                symphonies of
              </h1>
            )}
            {step >= 2 && (
              <h1 className="font-Poppins text-xl md:text-4xl lg:text-6xl font-bold text-pritext text-left animate-typing overflow-hidden whitespace-nowrap">
                solutions
              </h1>
            )}
            {step >= 3 && (
              <p className="font-Poppins text-base md:text-lg lg:text-xl text-pritext text-left animate-typing overflow-hidden whitespace-nowrap">
                Empowering businesses with reliable IT Services
              </p>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
          <div className=" top-400 right-[px] w-full h-[50rem] md:w-[30rem] md:h-[30rem] lg:w-[38rem] lg:h-[38rem]">
            <Lottie
              animationData={homepage}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <Nextpage />
      <Third />
      <ContactUS />
      <Carrier />
      <Blog />
      <Ourclient />
      <BuildFututre />
      <Footer />
    </>
  );
};

export default Body;
