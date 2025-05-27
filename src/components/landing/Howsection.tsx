"use client"
import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  "AI-Enhanced Discovery & Planning",
  "Data-Driven Experience Design",
  "Agile Development with Smart Tools",
  "Continuous Learning & Optimization",
  "Real-World Impact with Emerging Tech",
];

const HowSection = () => {
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
            className="text-[18px] lg:text-[36px] font-semibold transform-none lg:-rotate-90 lg:translate-x-[-100%] origin-top-left whitespace-nowrap text-[#6b6b6b]"
          >
            How<span className="text-[#364292]">?</span>
          </motion.h2>
        </div>

        {/* AI-Driven Approach Steps */}
        <div className="w-full lg:w-11/12 mt-10 lg:mt-0">
          <div className="flex flex-col space-y-6 lg:space-y-10">
            {processSteps.map((step, index) => (
              <motion.a
                key={index}
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-[18px] text-[#6b6b6b] lg:text-[30px] font-light border-b border-[#364292] pb-4 mb-4 flex flex-col lg:flex-row hover:text-[#364292] hover:font-medium"
              >
                <span className="font-normal text-[#364292]">
                  0{index + 1}
                </span>
                {step}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
