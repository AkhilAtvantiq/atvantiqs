"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type ServiceItem = {
  title: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    title: "Custom Software Development",
    description:
      "We design and build powerful, scalable software tailored to your business needs — from MVPs to robust enterprise-grade systems.",
  },
  {
    title: "Android App Development",
    description:
      "Create modern, high-performance Android apps that deliver exceptional user experiences. From concept to launch, we handle the full development lifecycle.",
  },
  {
    title: "UX/UI Design",
    description:
      "We design elegant, user-first interfaces that are both functional and visually stunning — built to engage and convert.",
  },
  {
    title: "DevOps & Cloud Engineering",
    description:
      "Streamline your development pipeline and scale with confidence. We set up CI/CD workflows, automate infrastructure, and manage deployments on AWS, Azure, or GCP.",
  },
  {
    title: "Staff Augmentation",
    description:
      "Boost your existing team with our vetted software engineers, designers, and DevOps professionals. Scale rapidly and meet deadlines without compromising quality.",
  },
];

export default function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#f9f9f9] px-6 sm:px-12 md:px-28 py-24">
      {/* Background shape (subtle circle) */}

      <div className="relative z-10">
        <h2 className="text-[32px] md:text-[45px] font-bold text-[#1e1e1e] leading-snug mb-6">
          Delivering digital solutions <br /> with precision and purpose.
        </h2>

        <p className="text-sm md:text-[16px] text-[#969696] mb-14 max-w-3xl">
          From staff augmentation to complete product development, we help businesses of all sizes
          transform ideas into impactful digital experiences.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Navigation Tabs */}
          <div className="flex flex-col w-full md:w-1/3 space-y-2">
            {services.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveIndex(index)}
                className={`text-left px-6 py-4 rounded-md border text-xs md:text-[16px] font-normal transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-[#ff4a4a] to-[#3c3f94] text-white shadow-lg"
                    : "bg-white text-[#1e1e1e] border-gray-300 hover:border-[#3c3f94] hover:bg-[#f4f6fa]"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Right Content Panel */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-10 rounded-xl w-full md:w-2/3 border border-gray-200 shadow-md"
          >
            <h3 className="text-xl font-bold text-[#1e1e1e] mb-4">
              {services[activeIndex].title}
            </h3>
            <p className="text-[16px] leading-7 text-[#969696]">
              {services[activeIndex].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
