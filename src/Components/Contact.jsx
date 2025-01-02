import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Footer from "./Footer";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const position = [27.675488, 85.313901];

  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-4">
        {/* Contact Us Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-lg p-3 w-full"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="border border-gray-300 rounded-lg p-3 w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg p-3 w-full"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 rounded-lg p-3 w-full"
                />
                <textarea
                  placeholder="Message"
                  className="border border-gray-300 rounded-lg p-3 w-full h-32 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-lg py-3 px-6 hover:bg-blue-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="border border-gray-300 shadow-md rounded-lg overflow-hidden h-[400px]">
              <MapContainer
                center={position}
                zoom={13}
                className="h-full w-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    Rebooted Creation Labs
                    <br />
                    Pulchowk, Lalitpur
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-red-500 text-3xl">📍</span>
            <h3 className="text-xl font-bold">Location</h3>
            <p>Pulchowk, Lalitpur</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-red-500 text-3xl">📞</span>
            <h3 className="text-xl font-bold">Phone</h3>
            <p>+977 984181219, +977 9764181472</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-red-500 text-3xl">⏰</span>
            <h3 className="text-xl font-bold">Working Hours</h3>
            <p>Sun-Fri: 10 AM - 5 PM</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-red-500 text-3xl">📧</span>
            <h3 className="text-xl font-bold">Email</h3>
            <p>info@rebootedcl.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
