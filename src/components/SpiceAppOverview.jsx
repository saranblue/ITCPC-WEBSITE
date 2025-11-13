

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { FaApple, FaAndroid } from "react-icons/fa";
import spiceImg from "../assets/green-cardamom.jpg";
import { Link } from "react-scroll";


const SpiceAppOverview = forwardRef((props, ref) => {
  // iOS click handler
  const handleIosClick = () => {
    alert("iOS App coming soon!"); // simple popup
  };

  // Android click handler
  const handleAndroidClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.itcpc.project",
      "_blank"
    );
  };

  return (
    <section id="auctions"
      ref={ref}
      className="py-16 bg-[#F7FBEA] w-full"
      style={{ scrollMarginTop: "80px" }} // offset for navbar
    >
      <div className="mx-auto px-4 sm:px-15 md:px-16 lg:px-20 xl:px-32">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-3">
            Smart Spice Auction App
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Empowering farmers and traders through a secure, transparent, and
            digital cardamom auction ecosystem.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text and Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-gray-700 text-lg pt-5 md:text-xl leading-relaxed mb-6">
             The Spice Auction Smart Management System is a secure digital
              platform designed for the Idukki Traditional Cardamom Producers’ 
              Consortium (ITCPC) to modernize the spice auction process. It
              automates CSV-based data uploads, ensures secure user access, and
              enables planters and administrators to manage auction data
              efficiently with OTP-based mobile authentication.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* iOS */}
              <motion.button
                onClick={handleIosClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-800 transition-colors"
              >
                <FaApple className="text-2xl" />
                <span>Download on iOS</span>
              </motion.button>

              {/* Android */}
              <motion.button
                onClick={handleAndroidClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#3d5513] transition-colors"
              >
                <FaAndroid className="text-2xl" />
                <span>Download on Android</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center pt-5"
          >
            <img
              src={spiceImg}
              alt="Spice App Overview"
              className="rounded-2xl object-cover w-100  h-[300px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default SpiceAppOverview;