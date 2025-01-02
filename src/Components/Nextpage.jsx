import ScrollAnimation from "react-animate-on-scroll";
const Nextpage = () => {
  return (
    <>
      <div className="bg-black text-white w-full h-auto min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-8">
        <ScrollAnimation animateIn="fadeInup" delay={0.2 * 1000}>
          <h1 className="text-4xl md:text-7xl lg:text-9xl  font-bold text-center leading-tight mt-10 ">
            WHAT
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInup" delay={0.4 * 1000}>
          <h1 className="text-4xl md:text-7xl lg:text-9xl  font-bold text-center leading-tight mt-10 ">
            WE
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInup" delay={0.6 * 1000}>
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-center leading-tight mt-10  [animation-delay:0.2s]">
            DO
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInup" delay={0.8 * 1000}>
          <div className="group list-none mt-12 p-5 grid grid-cols-4 md:flex-row items-center md:justify-between w-full space-y-6 md:space-y-0 transform">
            <div className="mx-3 p-4 text-center shadow-md opacity-0 animate-fade-in-up [animation-delay:0.6s] ">
              <h3 className="font-Poppins text-sm font-bold text-white-800 py-2 text-left -mt-2">
                WEBSITE DEVELOPMENT
              </h3>
              <div className="text-base text-grey-100 text-left [animation-delay:0.8s]">
                Developing AI-driven websites with e-commerce and custom
                solutions
              </div>
            </div>
            <div className="mx-3 p-4 text-center shadow-md opacity-0 animate-fade-in-up [animation-delay:0.8s] ">
              <h3 className="font-Poppins text-base font-bold text-white-800 py-2 text-left -mt-2 ">
                PRODUCT DESIGN
              </h3>
              <p className="text-base text-grey-100 text-left ">
                Crafting intuitive digital products that blend functionality
                with great UX.
              </p>
            </div>
            <div className="mx-3 p-4 text-center shadow-md opacity-0 animate-fade-in-up [animation-delay:0.8s] ">
              <h3 className="font-Poppins text-base font-bold text-white-800 py-2 text-left">
                DEVELOP AND COLUD{" "}
              </h3>
              <p className="text-base text-grey-100  text-left">
                Delivering agile, reliable DevOps solutions with cloud migration
                and automation.
              </p>
            </div>
            <div className="mx-3 p-4 text-center shadow-md opacity-0 animate-fade-in-up [animation-delay:0.8s] ">
              <h3 className="font-Poppins text-base font-bold text-white-800 py-2 text-left ">
                FINTECH SYSTEM{" "}
              </h3>
              <p className="text-base text-grey-100 text-left">
                Delivering secure, scalable fintech solutions for seamless
                financial operations
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Nextpage;
