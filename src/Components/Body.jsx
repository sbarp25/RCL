import { useState, useEffect } from "react";
import Nextpage from "./Nextpage";
import homepage from "../assets/Pictures/homepage.json";
import homepageback from "../assets/Pictures/homepageback.png";
import Lottie from "lottie-react";
import Third from "../Components/Third";
import ContactUS from "./ContactUS";
import Carrier from "../Components/Carrier";
import Blog from "../Components/Blog";
import Ourclient from "../Components/OurClient";
import BuildFututre from "../Components/Buildfuture";
import Footer from "../Components/Footer";

const Body = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => setStep(3), 3000),
    ];

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  return (
    <>
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full h-screen bg-white">
        {/* Left Section */}
        <div className="relative z-10 flex flex-col w-full md:w-1/2 space-y-6 text-center md:text-left mt-8 md:mt-0 md:px-12 min-h-96">
          <h1 className="font-Poppins text-xl md:text-5xl lg:text-7xl font-bold text-pritext w-full md:w-[700px] mt-20 text-left transform translateZ(0)">
            Whispers of code,
          </h1>
          <div className="flex flex-col space-y-4 text-left">
            {step >= 1 && (
              <h1 className="z-10 font-Poppins text-lg md:text-4xl lg:text-6xl font-bold text-pritext animate-typing overflow-hidden whitespace-nowrap transform translateZ(0)">
                symphonies of
              </h1>
            )}
            {step >= 2 && (
              <h1 className="z-10 font-Poppins text-lg md:text-4xl lg:text-6xl font-bold text-pritext animate-typing overflow-hidden whitespace-nowrap transform translateZ(0)">
                solutions
              </h1>
            )}
            {step >= 3 && (
              <p className="z-10 font-Poppins text-sm md:text-lg lg:text-xl text-pritext animate-typing overflow-hidden whitespace-nowrap transform translateZ(0)">
                Empowering businesses with reliable IT Services
              </p>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:absolute md:top-[190px] md:right-[-21px]">
          <div className="relative md:w-1/2 mt-8 md:mt-0">
            <div className="w-full flex justify-center sm:justify-center">
              <Lottie
                animationData={homepage}
                className="w-full sm:w-96 h-[200px] sm:h-[300px]  md:h-[300px] lg:h-[500px]"
              />
            </div>
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
