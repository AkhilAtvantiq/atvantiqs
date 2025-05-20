"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center px-6 py-4 my-3 rounded-full text-left font-semibold text-xl ${
          isOpen ? "bg-[#e5f3ff] text-blue-600" : "bg-[#f4f4f4] text-black"
        }`}
      >
        {title}
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-4 text-lg text-gray-700"
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};

const Why = () => {
  const accordionData = [
    {
      title: "Elite Workforce",
      content:
        "We introduce you to our pool of 350+ professionals and tech talent, ranging from project managers, developers, and UI/UX designers to QA engineers and testers. All our experts possess exceptional domain expertise and knowledge across various industries and technologies.",
    },
    {
      title: "Domain Expertise",
      content:
        "We have deep experience in industries like healthcare, fintech, e-commerce, and SaaS. Our domain-specific insights allow us to build smarter, more relevant solutions.",
    },
    {
      title: "Proven Track Record",
      content:
        "Over the years, we've delivered scalable, secure, and impactful software solutions to startups and enterprises globally.",
    },
    {
      title: "Cost-efficiency",
      content:
        "Access premium development services while optimizing your budget — without compromising quality or delivery.",
    },
    {
      title: "Client-centric Approach",
      content:
        "From ideation to launch and beyond, we keep your vision at the core, fostering transparent communication and agile delivery.",
    },
    {
      title: "Innovative Solutions",
      content:
        "We blend creativity with cutting-edge technologies to provide solutions that give you a competitive edge.",
    },
  ];

  // Split into two columns
  const firstColumn = accordionData.slice(0, 3);
  const secondColumn = accordionData.slice(3);

  return (
    <section className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-[#1c1b20]"
        >
          Why Choose Us<span className="text-blue-600">?</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex"
          >
            <div className="overflow-hidden w-[420px] h-[420px] shadow-lg">
              <img
                src="/images/atvantiqs.jpg"
                alt="Team working"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right Side Accordion Columns */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              {firstColumn.map((item, index) => (
                <Accordion key={index} title={item.title} content={item.content} />
              ))}
            </div>
            <div>
              {secondColumn.map((item, index) => (
                <Accordion key={index + 3} title={item.title} content={item.content} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Why;


