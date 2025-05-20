"use client"
import React from "react";
import { motion } from "framer-motion";

const HowSection = () => {
  const services = [
    "Discovery & Definition",
    "UX/UI Design",
    "Mobile App Development",
    "Web App Development",
    "Emerging Technology",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-38 flex flex-wrap lg:flex-nowrap">
        {/* Rotated "How?" Title */}
        <div className="w-full lg:w-1/12 max-w-1 flex justify-center lg:justify-start pt-24 mt-10">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[40px] lg:text-[60px] font-semibold font-poppins transform-none lg:-rotate-90 lg:translate-x-[-100%] origin-top-left whitespace-nowrap text-black"
          >
            How<span className="text-blue-600">?</span>
          </motion.h2>
        </div>

        {/* Service Links */}
        <div className="w-full lg:w-11/12 mt-10 lg:mt-0">
          <div className="flex flex-col space-y-6 lg:space-y-10">
            {services.map((service, index) => (
              <motion.a
                key={index}
                href="/services"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-[40px] text-black lg:text-[60px] font-light border-b border-blue-600 pb-4 mb-4 flex flex-col lg:flex-row hover:text-blue-600 hover:font-bold"
              >
                <span className=" font-normal text-blue-600">
                  0{index + 1}
                </span>
                {service}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
