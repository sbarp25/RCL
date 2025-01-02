import { motion, useAnimation } from "framer-motion";
import React, { useRef } from "react";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";

const ScrollingContainer = () => {
  const items = [
    { id: 1, image: client1, link: "https://nilgirikholahydropower.com/" },
    { id: 2, image: client2, link: "https://www.redswissatrekking.com/" },
    { id: 3, image: client3, link: "https://example3.com" },
  ];

  const controls = useAnimation();
  const positionRef = useRef(0);

  const totalWidth = items.length * 500; // Width of all items combined (assuming 500px width per item)

  const containerVariants = {
    animate: {
      x: [0, -totalWidth], // Scroll left by the total width of the items
      transition: {
        x: {
          repeat: Infinity, // Loop the animation
          duration: 10, // Adjust the speed (10 seconds per loop)
          ease: "linear", // Smooth linear motion
        },
      },
    },
  };

  const handleHoverStart = async () => {
    // Stop the animation and record the current position
    controls.stop();
    const currentStyles = await controls.get();
    positionRef.current = parseFloat(currentStyles.x || "0");
  };

  const handleHoverEnd = () => {
    // Resume the animation from the current position
    controls.start({
      x: [positionRef.current, -totalWidth], // Continue scrolling left
      transition: {
        x: {
          repeat: Infinity, // Loop the animation
          duration: 10, // Adjust the speed
          ease: "linear", // Smooth linear motion
        },
      },
    });
  };

  return (
    <div className="relative overflow-hidden bg-white h-[250px] w-full">
      <motion.div
        className="flex"
        animate={controls}
        initial="animate"
        variants={containerVariants}
      >
        {/* Duplicate items for seamless looping */}
        {items.concat(items).map((item, index) => (
          <motion.div
            key={index}
            className={`w-[500px] h-[200px] m-4 flex justify-center items-center text-white text-lg font-bold relative ${
              item.id === 2 ? "w-[500px] h-[100px]" : ""
            } ${item.id === 3 ? "w-[300px] h-[250px]" : ""}`}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingContainer;
