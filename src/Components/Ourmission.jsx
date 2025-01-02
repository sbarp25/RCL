import ourmission from "../assets/Pictures/Ourmission.json";
import Lottie from "lottie-react";
import Nextpage1 from "./Nextpage1";

const Ourmission = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between bg-white ">
        <div className="flex-1 ml-16 -mt-5 text-center">
          <Lottie
            animationData={ourmission}
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </div>
        <div className="flex-1 space-y-2 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-pritext ">
            Our Mission
          </h1>
          <p className="text-lg text-gray-600">
            At rebooted creation Labs, your success is at the heart of
            everything we do. We unite exceptional talent with an unrelenting
            commitment to driving customer success. Passionate about innovation,
            we excel in designing, building, and validating groundbreaking ideas
            using smarter, more efficient methods. These insights enable us to
            accelerate our customers&lsquo; innovation and elevate team
            performance. With over 90% of our business fueled by referrals,
            we&apos;ve consistently proven our reliability, delivering unmatched
            value and earning the unwavering trust of our clients.
          </p>
        </div>
      </div>
      <Nextpage1 />
    </>
  );
};

export default Ourmission;
