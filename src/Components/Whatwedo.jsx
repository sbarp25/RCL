import Ourmission from "./Ourmission";
const Whatwedo = () => {
  return (
    <>
      <div className="bg-white text-pritext  w-full h-auto min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-8">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center leading-tight mt-10">
          Our <br /> Product
        </h1>
        <ul className="list-none mt-12 md:mt-24 p-0 flex flex-col md:flex-row flex-wrap items-center justify-center w-full space-y-6 md:space-y-0 md:space-x-6 gap-2">
          <li className="flex flex-col items-center mx-3 p-4 text-center shadow-md shadow-gray-500 transform transition-transform duration-300 hover:scale-105 max-w-xs ">
            <h3 className="font-Poppins text-lg font-bold text-gray-800 py-2">
              SYSTEM INTEGRATION
            </h3>
            <p className="text-base text-gray-400">
              In today’s digital landscape, seamless integration across systems,
              data sources, and channels is essential. Rebooted creation labs
              brings a proven track record of efficiently integrating diverse
              client systems with expertise and precision.
            </p>
          </li>
          <li className="flex flex-col items-center mx-3 p-4 text-center shadow-md shadow-gray-500 transform transition-transform duration-300 hover:scale-105 max-w-xs py-7">
            <h3 className="font-Poppins text-lg font-bold text-gray-800 py-2">
              IT SERVICES{" "}
            </h3>
            <p className="text-base text-gray-400">
              While you Deliver Excellence To customers, we keep you ahead of
              trends. our expert support ensure you meet Industry demands
              together, we help your business stay competitive and future-read.
            </p>
          </li>
          <li className="flex flex-col items-center mx-3 p-4 text-center shadow-md shadow-gray-500 transform transition-transform duration-300 hover:scale-105 max-w-xs ">
            <h3 className="font-Poppins text-lg font-bold text-gray-800 py-2">
              PROCESS OPTIMIZATION
            </h3>
            <p className="text-base text-gray-400">
              In today’s digital landscape, seamless integration across systems,
              data sources, and channels is essential. Rebooted creation labs
              brings a proven track record of efficiently integrating diverse
              client systems with expertise and precision.
            </p>
          </li>
        </ul>
      </div>
      <Ourmission />
    </>
  );
};

export default Whatwedo;
