import React from "react";
import tri from "../assets/Pictures/Tri.jpg";
import ali from "../assets/Pictures/ali.jpg";
import anu from "../assets/Pictures/anu.jpg";
import group from "../assets/Pictures/group.jpg";
import pra from "../assets/Pictures/pra.jpg";
import sag from "../assets/Pictures/sag.jpg";
import sun from "../assets/Pictures/sun.jpg";
import uma from "../assets/Pictures/uma.jpg";
import Footer from "../Components/Footer";

const Gallery = () => {
  const gridImages = [
    { src: ali, alt: "Person working on laptop 1" },
    { src: anu, alt: "Person working on laptop 2" },
    { src: pra, alt: "Person working on laptop 4" },
    { src: sag, alt: "Person working on laptop 5" },
    { src: uma, alt: "Person working on laptop 6" },
    { src: tri, alt: "Person working on laptop 7" },
    { src: sun, alt: "Person working on laptop 8" },
    { src: group, alt: "Person working on laptop 8" },
  ];

  return (
    <>
      <div className="bg-gray-100 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Gallery</h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8">
          {gridImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
