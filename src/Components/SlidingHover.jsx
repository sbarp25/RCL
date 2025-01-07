import React from "react";
import Marquee from "react-fast-marquee";

import Client1 from "../assets/images/client1.png";
import Client2 from "../assets/images/client2.png";

const SlidingHover = () => {
  const clients = [
    {
      id: 1,
      image: Client1,
      alt: "Client 1",
      link: "https://www.redswissatrekking.com/",
      tooltip:
        "A Nepal-based travel company offering trekking, rafting, paragliding, jungle safaris, and adventure tours with over 11 years of experience.",
    },
    {
      id: 2,
      image: Client2,
      alt: "Client 2",
      link: "https://nilgirikholahydropower.com/",
      tooltip:
        "A hydropower company in Nepal focused on clean and renewable energy development.",
    },
    {
      id: 1,
      image: Client1,
      alt: "Client 1",
      link: "https://www.redswissatrekking.com/",
      tooltip:
        "A Nepal-based travel company offering trekking, rafting, paragliding, jungle safaris, and adventure tours with over 11 years of experience.",
    },
    {
      id: 2,
      image: Client2,
      alt: "Client 2",
      link: "https://nilgirikholahydropower.com/",
      tooltip:
        "A hydropower company in Nepal focused on clean and renewable energy development.",
    },
    {
      id: 1,
      image: Client1,
      alt: "Client 1",
      link: "https://www.redswissatrekking.com/",
      tooltip:
        "A Nepal-based travel company offering trekking, rafting, paragliding, jungle safaris, and adventure tours with over 11 years of experience.",
    },
    {
      id: 2,
      image: Client2,
      alt: "Client 2",
      link: "https://nilgirikholahydropower.com/",
      tooltip:
        "A hydropower company in Nepal focused on clean and renewable energy development.",
    },
    {
      id: 1,
      image: Client1,
      alt: "Client 1",
      link: "https://www.redswissatrekking.com/",
      tooltip:
        "A Nepal-based travel company offering trekking, rafting, paragliding, jungle safaris, and adventure tours with over 11 years of experience.",
    },
    {
      id: 2,
      image: Client2,
      alt: "Client 2",
      link: "https://nilgirikholahydropower.com/",
      tooltip:
        "A hydropower company in Nepal focused on clean and renewable energy development.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div>
        <h1 className="font-Poppins text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  sm:mb-8 md:mb-10 mt-28 mb-12">
          OUR <br /> Clients
        </h1>
      </div>

      <Marquee pauseOnHover speed={100} gradient={true} className="mb-12">
        {clients.map((client) => (
          <div key={client.id} className="my-0 mx-[50px] relative group">
            {" "}
            {/* Increased margin */}
            <a
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              <img
                src={client.image}
                alt={client.alt}
                className="h-40 w-auto transition-transform duration-300"
              />

              <div className="relative top-full left-1/2 mt-2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r text-left max-w-xs break-words">
                {client.tooltip}
              </div>
            </a>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SlidingHover;
