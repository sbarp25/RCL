import blog from "../assets/Pictures/blog.json";
import Lottie from "lottie-react";

const Blog = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen px-4 bg-black mb-24">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex flex-col w-full md:w-1/2 space-y-4 text-center md:text-left items-center">
            <h1 className="font-Poppins text-3xl md:text-6xl font-bold text-white text-left ml-14">
              Real-Time IT Support for Instant Solutions
            </h1>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <Lottie
              animationData={blog}
              style={{ width: "100%", maxWidth: "500px" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
