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
import SlidingHover from "./SlidingHover";

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
      <div className="relative w-full h-screen bg-white overflow-hidden">
        {/* Animation Layer */}
        <div className="absolute inset-0">
          <div className="absolute right-[50%] translate-x-1/2 -top-20 lg:right-[100px] lg:top-[10px] lg:translate-x-0 mt-12">
            <Lottie
              animationData={homepage}
              className="w-[700px] h-[700px] lg:w-[800px] lg:h-[700px]  "
              loop={false} // Ensures the animation doesn't loop
              autoplay={true} // Starts the animation immediately
            />
          </div>
        </div>

        {/* Text Content Layer */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-4 space-y-6 text-center lg:text-left lg:w-1/2 lg:pl-12">
            <h1 className="font-Poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
              Whispers of code,
            </h1>

            <div className="space-y-4">
              {step >= 1 && (
                <h2 className="font-Poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black animate-typing overflow-hidden whitespace-nowrap mx-auto lg:mx-0">
                  symphonies of
                </h2>
              )}

              {step >= 2 && (
                <h2 className="font-Poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black animate-typing overflow-hidden whitespace-nowrap mx-auto lg:mx-0">
                  solutions
                </h2>
              )}

              {step >= 3 && (
                <p className="font-Poppins text-lg sm:text-xl md:text-2xl lg:text-xl text-black animate-typing overflow-hidden whitespace-nowrap mx-auto lg:mx-0">
                  Empowering businesses with reliable IT Services
                </p>
              )}
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
      {/* <Ourclient /> */}
      <SlidingHover />
      <BuildFututre />
      <Footer />
    </>
  );
};

export default Body;
