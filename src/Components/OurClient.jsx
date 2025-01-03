import React, { useState, useEffect } from "react";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";

const AutoSlideContainer = () => {
  const items = [
    {
      id: 1,
      image: client2,
      link: "https://nilgirikholahydropower.com/",
      description: [
        "A hydropower company in Nepal developing sustainable projects.",
        "Projects like Nilgiri Khola I (38 MW) and II (71 MW).",
        "Supporting the country’s energy sector.",
      ],
    },
    {
      id: 2,
      image: client1,
      link: "https://www.redswissatrekking.com/",
      description: [
        "A Nepal-based travel company offering trekking, rafting.",
        "Services include paragliding, jungle safaris, and adventure tours.",
        "Over 11 years of experience with personalized services.",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative overflow-hidden bg-white h-[500px] w-full flex flex-col items-center">
      {/* Single Slide */}
      <div className="relative h-[300px] w-[500px] mb-10">
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-100">
          <a
            href={items[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={items[currentIndex].image}
              alt={`Client ${items[currentIndex].id}`}
              className="w-[80rem] h-[12rem] object-cover"
            />
          </a>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 text-center">
        {items[currentIndex].description.map((line, idx) => (
          <p key={idx} className="text-gray-700 text-lg">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AutoSlideContainer;
