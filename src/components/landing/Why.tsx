"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI & ML Leadership",
    description:
      "We’re pioneers in AI and Machine Learning, crafting solutions that predict trends, automate processes, and drive smarter decision-making for your business.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f54123" />
            <stop offset="100%" stopColor="#6e33ff" />
          </linearGradient>
        </defs>
        <path d="M32 4v56M4 32h56" stroke="url(#grad1)" strokeWidth="4" />
      </svg>
    ),
  },
  {
    title: "Telecom Enhanced by AI",
    description:
      "Our telecom solutions integrate AI for smarter networks, ensuring seamless connectivity and optimized performance for your operations.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f54123" />
            <stop offset="100%" stopColor="#6e33ff" />
          </linearGradient>
        </defs>
        <path
          d="M12 32a20 20 0 0 1 40 0M20 32a12 12 0 0 1 24 0M28 32a4 4 0 0 1 8 0"
          stroke="url(#grad2)"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "AI-Driven Solar Systems",
    description:
      "We leverage AI to optimize solar energy systems, delivering sustainable power solutions that maximize efficiency and reduce costs.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f54123" />
            <stop offset="100%" stopColor="#6e33ff" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="10" stroke="url(#grad3)" strokeWidth="3" />
        <path
          d="M32 2v10M32 52v10M2 32h10M52 32h10M12 12l7 7M45 45l7 7M12 52l7-7M45 19l7-7"
          stroke="url(#grad3)"
          strokeWidth="3"
        />
      </svg>
    ),
  },
  {
    title: "Staffing with Precision",
    description:
      "Using AI-driven insights, we match you with top talent, ensuring your team is equipped to tackle any challenge with precision.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="grad4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f54123" />
            <stop offset="100%" stopColor="#6e33ff" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="20" r="6" stroke="url(#grad4)" strokeWidth="3" fill="none" />
        <path
          d="M16 48c0-8 8-12 16-12s16 4 16 12"
          stroke="url(#grad4)"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Software Powered by AI",
    description:
      "Our software solutions harness AI to deliver intelligent, scalable systems that streamline operations and fuel your growth.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="grad5" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f54123" />
            <stop offset="100%" stopColor="#6e33ff" />
          </linearGradient>
        </defs>
        <rect x="10" y="14" width="44" height="36" rx="4" stroke="url(#grad5)" strokeWidth="3" />
        <path d="M10 26h44" stroke="url(#grad5)" strokeWidth="3" />
      </svg>
    ),
  },
  {
    title: "Web Solutions with AI Edge",
    description:
      "We integrate AI into web development, creating smart, responsive sites that enhance user engagement and online dominance.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="grad6" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f54123" />
            <stop offset="100%" stopColor="#6e33ff" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="28" stroke="url(#grad6)" strokeWidth="3" />
        <path
          d="M12 32h40M32 12v40M18 18l28 28M46 18L18 46"
          stroke="url(#grad6)"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  
];

const Why = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-14 text-[#353535]"
        >
          Why Choose Us<span className="text-[#ff5443]">?</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-[17px] font-semibold text-[#ff5443] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#878BA5] text-[15px]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
