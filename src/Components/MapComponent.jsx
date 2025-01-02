import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import OurClient from "./OurClient";

import LogoD from "../assets/Pictures/logo-01.png";
// Fix default icon issue with Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  const position = [27.675488, 85.313901]; // Default location (latitude, longitude)
  return (
    <>
      <div className="container dark:bg-black px-4 py-8">
        <div className=" absolute z-0 flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-8 ">
          {/* Map Section */}
          <div className="map-container h-[451px] w-full lg:w-1/2 border border-gray-300 shadow-lg shadow-gray-400 rounded-md overflow-hidden">
            <MapContainer center={position} zoom={13} className="h-full w-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  Rebooted Creation Labs
                  <br />
                  <img src={LogoD} alt="logo" className="w-32 h-8" />
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="text-container lg:w-1/2 text-center lg:text-left">
            <h2 className="text-5xl font-bold mb-4">Our Location</h2>
            <p className="text-pritext pr-24">
              Located at the heart of innovation, our office serves as a hub for
              collaboration and creativity. Designed to foster productivity, our
              space reflects our commitment to excellence and client success.
              Visit us to experience a dynamic environment where ideas come to
              life and solutions are crafted with care.
            </p>
          </div>
        </div>
      </div>
      <OurClient />
    </>
  );
};

export default MapComponent;
