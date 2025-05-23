"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type ServiceItem = {
  title: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    title: "AI Revolution Forge",
    description:
      "Ignite your business with AI and machine learning wizardry. From predictive analytics to intelligent automation, we build solutions that outsmart the competition.",
  },
  {
    title: "Web Alchemy Studio",
    description:
      "Transform clicks into experiences with stunning, high-octane websites. Our designs are bold, responsive, and engineered to make your brand unforgettable.",
  },
  {
    title: "Mobile Maverick Lab",
    description:
      "Conquer the mobile frontier with apps that captivate and perform. We craft iOS and Android experiences that keep users hooked and your business thriving.",
  },
  {
    title: "UI/UX Dream Forge",
    description:
      "Sculpt interfaces that mesmerize and flows that feel like magic. Our designs blend beauty and brains to keep your users coming back for more.",
  },
  {
    title: "Solar Power Nexus",
    description:
      "Harness the sun’s energy with cutting-edge solar tech. We deliver sustainable solutions that power your business and light up the future.",
  },
  {
    title: "Talent Turbocharge",
    description:
      "Supercharge your team with our elite developers and designers. Our staff augmentation fuels your projects with the firepower to hit deadlines and crush goals.",
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
          From talent turbocharge to complete AI revolution forge, we help businesses of all sizes
          transform ideas into impactful digital experiences.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Navigation Tabs */}
          <div className="flex flex-col w-full md:w-1/3 space-y-2">
            {services.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveIndex(index)}
                className={`text-left px-6 py-3 rounded-md border text-xs md:text-[16px] font-normal transition-all duration-300 ${
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
