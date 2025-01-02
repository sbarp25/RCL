import qwe from "../assets/Pictures/qwe.json";
import Lottie from "lottie-react";

const ContactUS = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between md:space-y-0 md:space-x-8 px-4 md:px-12 py-8 bg-black text-white gap-36 ">
        <div className="flex-1 text-center ml-36">
          <h1 className="text-4xl md:text-8xl font-bold leading-8  text-left ">
            Custom Software <br /> Development Tailored for You
          </h1>
        </div>
        <div className="flex-1">
          <Lottie animationData={qwe} />{" "}
        </div>
      </div>
    </>
  );
};
export default ContactUS;
