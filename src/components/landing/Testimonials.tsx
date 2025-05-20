"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Tilt from "react-parallax-tilt";

// Animation variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const testimonials = [
  {
    quote:
      "Atvantiqs’ talent is impressive. Their work ethic has been unmatched. They’re highly educated and serve as experts in the field.",
    name: "Collin Goodwin",
    position: "Chief Technical Officer @ Volo",
    avatar: "/profile/profile.png",
  },
  {
    quote:
      "They act like true partners and care about the long-term success of the project. We've been extremely happy working with Atvantiqs.",
    name: "Jane Doe",
    position: "Product Manager @ ExampleCorp",
    avatar: "/profile/profile1.png",
  },
  {
    quote:
      "The team was knowledgeable, transparent, and fully committed to our goals. They made everything smooth from start to finish.",
    name: "John Smith",
    position: "CEO @ Techie Inc.",
    avatar: "/profile/profile2.png",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
      {/* Wave background inspired by logo's "A" shape */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-10 animate-pulse"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 300C200 400 400 200 600 300C800 400 1000 200 1200 300C1400 400 1440 300 1440 300V600H0V300Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="600">
              <stop offset="0%" stopColor="#226fe7" />
              <stop offset="100%" stopColor="#00A3FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h5
          variants={cardVariants}
          className="text-[#226fe7] text-lg md:text-xl uppercase tracking-wider font-medium mb-4 font-poppins"
        >
          Trusted by 50+ Clients
        </motion.h5>
        <motion.h2
          variants={cardVariants}
          className="text-3xl md:text-5xl font-bold font-poppins mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={2000}
              className="relative"
            >
              <motion.div
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-shadow border border-blue-600/20"
              >
                <div className="absolute -top-4 -left-4 text-6xl text-[#226fe7] opacity-30">
                  “
                </div>
                <p className="text-lg md:text-xl text-gray-200 font-light italic mb-6 leading-relaxed">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 object-cover rounded-full border-2 border-[#226fe7] transform hover:scale-110 transition-transform"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-white font-poppins">{t.name}</p>
                    <p className="text-sm text-[#226fe7] font-dm">{t.position}</p>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;