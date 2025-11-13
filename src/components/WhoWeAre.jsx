import React from "react";
import { motion } from "framer-motion";
import ig from "../assets/farmer_cardamom.jpg"
import { Link } from "react-scroll";


export default function WhoWeAre() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-blue from-white to-green-50 py-20 px-6 md:px-12 lg:px-20">
        {/* Subheading */}
          <h1 className="text-black text-5xl  font-semibold uppercase tracking-widest mb-15 text-center">
             Who We Are
          </h1>

      <div className="max-w-7xl ps-5 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10 ">
        {/* Left Image */}
        <motion.div
          className="relative rounded-3xl overflow-hidden  "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          
        >
          <img
            src={ig} 
            alt="Farmers in Idukki"
            className="w-full h-[450px] object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute px-10 inset-0 bg-gradient-to-blue from-green-900/30 via-transparent to-transparent" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-left"
        >


          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-green-700 mb-2 mt-5 leading-tight">
            Empowering Farmers, <br className="hidden md:block" /> 
            Elevating Traditions
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 text-sm leading-relaxed mb-10 pt-7">
            ITCPC (Idukki District Traditional Producer Company Ltd)
            is a farmer-owned producer company dedicated to strengthening the
            traditional cardamom farming and trading ecosystem in Idukki.
            We bridge the gap between growers, traders, and buyers through
            transparent digital platforms that ensure fair value and sustainable
            trade practices.
            Rooted deeply in the community,ITCPC stands as a
            symbol of integrity, innovation, and empowerment in the spice trade.
          </p>

          {/* Button */}
          <div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-green-700 text-white font-semibold rounded  shadow-lg hover:bg-green-800 transition-all duration-300"
            >
              Discover More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
