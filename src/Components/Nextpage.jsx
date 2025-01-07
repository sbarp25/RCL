import ScrollAnimation from "react-animate-on-scroll";

const Nextpage = () => {
  const handleClick = (serviceName) => {
    // Handle click (e.g., log or navigate to a new page, etc.)
    console.log(`${serviceName} clicked`);
  };

  return (
    <>
      <div className="bg-black text-white w-full h-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-8">
        <ScrollAnimation animateIn="fadeInup" delay={0.2 * 1000}>
          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-9xl font-bold text-center leading-tight mt-10">
            WHAT
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInup" delay={0.3 * 1000}>
          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-9xl font-bold text-center leading-tight mt-10">
            WE
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInup" delay={0.4 * 1000}>
          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-9xl font-bold text-center leading-tight mt-10">
            DO
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInup" delay={0.5 * 1000}>
          <div className="group list-none mt-12 p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center w-full">
            <div
              className="mx-3 p-4 text-center shadow-md opacity-0 animate-fade-in-up [animation-delay:0.6s] cursor-pointer"
              onClick={() => handleClick("Website Development")}
            >
              <h3 className="font-Poppins text-sm sm:text-base font-bold text-white-800 py-2 text-left -mt-2">
                WEBSITE DEVELOPMENT
              </h3>
              <div className="text-sm sm:text-base text-grey-100 text-left">
                Developing AI-driven websites with e-commerce and custom
                solutions.
              </div>
            </div>
            <div
              className="mx-3 p-4 text-center shadow-md opacity-0 animate-fade-in-up [animation-delay:0.8s] cursor-pointer"
              onClick={() => handleClick("Product Design")}
            >
              <h3 className="font-Poppins text-sm sm:text-base font-bold text-white-800 py-2 text-left -mt-2">
                PRODUCT DESIGN
              </h3>
              <p className="text-sm sm:text-base text-grey-100 text-left">
                Crafting intuitive digital products that blend functionality
                with great UX.
              </p>
            </div>
            <div
              className="mx-3 p-4 text-center shadow-md opacity-0 animate-fade-in-up [animation-delay:0.8s] cursor-pointer"
              onClick={() => handleClick("DevOps and Cloud")}
            >
              <h3 className="font-Poppins text-sm sm:text-base font-bold text-white-800 py-2 text-left">
                DEVELOP AND CLOUD
              </h3>
              <p className="text-sm sm:text-base text-grey-100 text-left">
                Delivering agile, reliable DevOps solutions with cloud migration
                and automation.
              </p>
            </div>
            <div
              className="mx-3 p-4 text-center shadow-md opacity-0 animate-fade-in-up [animation-delay:0.8s] cursor-pointer"
              onClick={() => handleClick("Fintech System")}
            >
              <h3 className="font-Poppins text-sm sm:text-base font-bold text-white-800 py-2 text-left">
                FINTECH SYSTEM
              </h3>
              <p className="text-sm sm:text-base text-grey-100 text-left">
                Delivering secure, scalable fintech solutions for seamless
                financial operations.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Nextpage;
