import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Footer from "./Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { MessageSquare, MapPin, Phone, Clock, Mail } from "lucide-react";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = {
      data: {
        to: "ojan@rebootedcl.com",
        subject: formData.subject,
        text: formData.message,
        html: "<p>Hello, this is an <b>HTML</b> email.</p> from Node",
      },
    };

    try {
      const response = await axios.post(
        "https://mailer-e7jc.onrender.com/send-email",
        newMessage,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.responseCode === "201") {
        toast.success(response.data.message);
        setFormData({ subject: "", message: "" });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Error sending message.");
      console.error(error);
    }
  };

  const position = [27.675488, 85.313901];

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Kathmandu, Nepal",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+977 9764181219",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      content: "Sun-Fri: 10 AM - 5 PM",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@rebootedcl.com",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(0,0,0,0.8))]" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-7xl font-bold text-white tracking-tight">
            Let's Connect<span className="text-blue-500">.</span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-8">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent text-white border-b border-zinc-700 py-3 pl-4 pr-12 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Subject"
                />
                <MessageSquare className={`absolute right-4 top-3 w-5 h-5 ${
                  focusedField === "subject" ? "text-blue-500" : "text-zinc-600"
                }`} />
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent text-white border-b border-zinc-700 py-3 pl-4 pr-12 h-32 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
            <MapContainer
              center={position}
              zoom={13}
              className="h-[400px] w-full"
              scrollWheelZoom={false}
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

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500/50 transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;