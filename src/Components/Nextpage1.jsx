import Gallery from "./Gallery";
const Nextpage1 = () => {
  return (
    <>
      <div
        className="bg-white
       text-black w-full h-auto min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-8"
      >
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-center leading-tight mt-10 animate-pop-out">
          What we
        </h1>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-center leading-tight mt-10 animate-pop-out [animation-delay:0.2s]">
          DO
        </h1>

        <div className="group list-none mt-12 p-5 grid grid-cols-4 md:flex-row items-center md:justify-between w-full space-y-6 md:space-y-0 transform">
          <div className="mx-3 p-4 text-center shadow-md opacity-0 animate-fade-in-up [animation-delay:0.6s] ">
            <h3 className="font-Poppins text-sm font-bold text-white-800 py-2 text-left mt-5">
              WEBSITE DEVELOPMENT
            </h3>
            <div className="text-base text-pritext  text-left [animation-delay:0.8s]">
              Developing AI-driven websites with e-commerce and custom solutions
            </div>
          </div>
          <div className="mx-3 p-4 text-center shadow-md opacity-0 animate-fade-in-up [animation-delay:0.8s] ">
            <h3 className="font-Poppins text-base font-bold text-white-800 py-2 text-left mt-5  ">
              PRODUCT DESIGN
            </h3>
            <p className="text-base text-pritext  text-left ">
              Crafting intuitive digital products that blend functionality with
              great UX.
            </p>
          </div>
          <div className="mx-3 p-4 text-center shadow-md opacity-0 animate-fade-in-up [animation-delay:0.8s] ">
            <h3 className="font-Poppins text-base font-bold text-white-800 py-2 text-left">
              DEVELOP AND COLUD{" "}
            </h3>
            <p className="text-base text-pritext  text-left">
              Delivering agile, reliable DevOps solutions with cloud migration
              and automation.
            </p>
          </div>
          <div className="mx-3 p-4 text-center shadow-md opacity-0 animate-fade-in-up [animation-delay:0.8s] ">
            <h3 className="font-Poppins text-base font-bold text-white-800 py-2 text-left ">
              FINTECH SYSTEM{" "}
            </h3>
            <p className="text-base text-pritext  text-left">
              Delivering secure, scalable fintech solutions for seamless
              financial operations
            </p>
          </div>
        </div>
      </div>
      <Gallery />
    </>
  );
};

export default Nextpage1;
