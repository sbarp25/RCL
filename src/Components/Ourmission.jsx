import ourmission from "../assets/Pictures/Ourmission.json";
import Lottie from "lottie-react";

const Ourmission = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-black text-white px-4 py-8 gap-8">
        {/* Animation Section */}
        <div className="flex-1 flex justify-center items-center">
          <Lottie
            animationData={ourmission}
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Our Mission
          </h1>
          <p className="text-lg text-white text-left">
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
    </>
  );
};

export default Ourmission;
