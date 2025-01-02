import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import aboutus from "../assets/Pictures/qwe.json";
import frontend from "../assets/Pictures/frontend.json";
import Node from "../assets/Pictures/Node.json";
import python from "../assets/Pictures/python.json";
import php from "../assets/Pictures/php.json";
import database from "../assets/Pictures/database.json";
import java from "../assets/Pictures/java.json";
import seo from "../assets/Pictures/seo.json";
import Footer from "./Footer";

const Services = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => setStep(3), 5000),
    ];

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-screen md:h-[100vh] px-4 mt-4 bg-white gap-64">
        <div className="flex flex-col w-full md:w-1/2 space-y-4 text-center md:text-left -mt-48">
          <h1 className="font-Poppins text-3xl md:text-7xl font-bold text-pritext  text-left ml-14">
            Our Service
          </h1>
          <div className="flex flex-col space-y-4 ml-16">
            {step >= 1 && (
              <p className="font-Poppins text-3xl md:text-lg text-pritext  text-left animate-typing overflow-hidden whitespace-nowrap border-r-4">
                We deliver cutting-edge web solutions that enable achieving
                strategic
              </p>
            )}
            {step >= 2 && (
              <p className="font-Poppins text-3xl md:text-lg text-pritext  text-left animate-typing overflow-hidden whitespace-nowrap border-r-4">
                milestones effectively. Our team harnesses the power of digital
              </p>
            )}
            {step >= 3 && (
              <p className="font-Poppins text-lg md:text-lg text-pritext  text-left animate-typing overflow-hidden whitespace-nowrap border-r-4">
                innovation to drive your business success online.
              </p>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 -mt-4 p-2">
          <Lottie
            animationData={seo}
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 px-8">
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Website Development</h3>
          <p className="text-gray-600">
            We create cutting-edge websites with AI-driven experiences and
            e-commerce systems. Our expertise includes custom apps and seamless
            third-party integrations. We ensure performance, scalability, and
            innovation for your business.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Product Design</h3>
          <p className="text-gray-600">
            We build innovative websites with AI-powered features and e-commerce
            systems. Our expertise includes custom apps and seamless
            integrations for scalability. Focused on performance, we deliver
            solutions to drive business success.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Devops and Cloud</h3>
          <p className="text-gray-600">
            We provide DevOps solutions to streamline development with
            automation and CI. Our cloud services cover migration,
            infrastructure management, and scalability. Using advanced tools, we
            ensure agility, reliability, and cost-efficiency.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">
            Web Application Development
          </h3>
          <p className="text-gray-600">
            We create scalable, secure web applications tailored to your
            business needs. Our expertise includes custom solutions and seamless
            integrations. With user-friendly designs, we drive efficiency and
            engagement.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">
            Seo(Search engine optimization)
          </h3>
          <p className="text-gray-600">
            We offer expert SEO services to boost visibility and drive organic
            traffic. Our approach includes keyword research, on-page, off-page,
            and technical SEO. We track performance to ensure effective and
            lasting results.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Moblie app development</h3>
          <p className="text-gray-600">
            We provide tailored web design solutions with responsive,
            user-friendly layouts. Our focus is on branding, accessibility, and
            seamless navigation for great UX. From wireframes to final designs,
            we create websites that meet industry standards.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Web Design</h3>
          <p className="text-gray-600">
            We deliver custom web design solutions with responsive, visually
            engaging layouts. Our designs prioritize branding, accessibility,
            and seamless navigation for a great UX. From concept to completion,
            we create websites that meet industry standards.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Fintech System</h3>
          <p className="text-gray-600">
            We provide secure, scalable fintech solutions to enhance financial
            operations. Our services include payment gateways, digital wallets,
            blockchain, and AI analytics. We specialize in user-friendly
            platforms for banking, trading, and financial management.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
          <p className="text-gray-600">
            We offer 24/7 customer support to ensure smooth IT operations. Our
            services include troubleshooting, system maintenance, and real-time
            issue resolution. With proactive monitoring and software updates, we
            deliver reliable, efficient support. we aim to deliver reliable and
            efficient support for your business needs.
          </p>
        </div>
      </div>
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">
          Essential Technologies
          <br /> for
          <br /> Modern Web Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {[
            {
              animation: frontend,
              title: "FrontEnd",
              text: "HTML, CSS, JavaScript, and React are essential technologies for modern web development. HTML structures the content, CSS styles the visual layout, and JavaScript adds interactivity and dynamic behavior to web pages. React enhances development by enabling the creation of reusable UI components, efficient rendering, and seamless user experiences.",
            },
            {
              animation: database,
              title: "Database",
              text: "A database is an organized collection of data that enables efficient storage, retrieval, and management of information. Designed to handle large volumes of data, databases power websites, apps, and enterprise tools while ensuring data integrity and security.",
            },
            {
              animation: java,
              title: "Java",
              text: "Java is a versatile, object-oriented programming language widely used for building robust, scalable applications. Known for its cross-platform capabilities, Java is ideal for web, mobile, and enterprise solutions.",
            },
            {
              animation: php,
              title: "PHP",
              text: "PHP is a popular server-side scripting language designed for web development. It enables dynamic content generation and interaction with databases, powering many frameworks and websites.",
            },
            {
              animation: python,
              title: "Python",
              text: "Python is a versatile programming language known for its simplicity and readability. Widely used in web development, data analysis, and AI, Python offers extensive libraries and strong community support.",
            },
            {
              animation: Node,
              title: "Node.js",
              text: "Node.js is a runtime environment for server-side JavaScript. With its event-driven, non-blocking architecture, Node.js is ideal for real-time, high-performance applications such as chat and APIs.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 border border-gray-300 p-6 rounded-lg shadow-md bg-white"
            >
              {/* Animation/Icon Section */}
              <div className="w-20 h-20 flex justify-center items-center bg-gray-100 rounded-full mb-4">
                <Lottie
                  animationData={item.animation}
                  style={{ width: "100%", maxWidth: "80px" }}
                />
              </div>
              {/* Title Section */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {item.title}
              </h3>
              {/* Description Section */}
              <p className="text-gray-600 text-center text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="text-center mt-28">
        <p className="text-gray-600 mb-4 font-Poppins font-bold">
          If you&apos;re interested in learning more about our offerings, please
          reach out to us.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Contact Us
        </button>
      </footer>
      <Footer />
    </>
  );
};

export default Services;
