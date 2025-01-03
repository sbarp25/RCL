import Contactus from "../assets/Pictures/Contact-us.json";
import Lottie from "lottie-react";

const Third = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:space-y-0 md:space-x-8 px-4 md:px-12 py-8 bg-black text-white gap-36 ">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="md:w-1/2 flex justify-center mt-18 w-full">
          <Lottie
            animationData={Contactus}
            style={{ width: "100%", maxWidth: "1000px" }}
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 space-y-4 text-center md:text-left">
          <a href="/Contact">
            <h1 className="font-Poppins text-3xl md:text-8xl font-bold text-white text-left ml-14">
              Here to assist you
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Third;
