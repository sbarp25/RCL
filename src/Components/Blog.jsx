import blog from "../assets/Pictures/blog.json";
import Lottie from "lottie-react";

const Blog = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 py-8 bg-black text-white gap-10 sm:gap-16 md:gap-36">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-snug md:leading-normal text-left">
            Real-Time IT Support for Instant Solutions
          </h1>
        </div>
        {/* Lottie Animation */}
        <div className="flex-1 w-full md:w-auto order-first md:order-none flex justify-center">
          <Lottie
            animationData={blog}
            className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
