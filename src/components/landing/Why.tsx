"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Innovative Design Thinking",
    description:
      "We fuse creativity with functionality, crafting modern UI/UX that delights and converts.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f54123" />
            <stop offset="100%" stopColor="#6e33ff" />
          </linearGradient>
        </defs>
        <path
          d="M32 2C19 2 8 13 8 26c0 11 9 20 20 20s20-9 20-20C48 13 45 6 32 2z"
          stroke="url(#grad1)"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="32" cy="26" r="4" fill="url(#grad1)" />
      </svg>
    ),
  },
  {
    title: "Scalable Architecture",
    description:
      "We build scalable, future-ready solutions tailored to your business goals and growth.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f54123" />
            <stop offset="100%" stopColor="#6e33ff" />
          </linearGradient>
        </defs>
        <path
          d="M16 48V24h32v24M8 56h48v-8H8v8z"
          stroke="url(#grad2)"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Dedicated Teams",
    description:
      "A highly skilled, cross-functional team working exclusively on your project.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f54123" />
            <stop offset="100%" stopColor="#6e33ff" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="6" stroke="url(#grad3)" strokeWidth="3" fill="none" />
        <circle cx="44" cy="20" r="6" stroke="url(#grad3)" strokeWidth="3" fill="none" />
        <path
          d="M10 46c0-6 4-10 10-10s10 4 10 10M34 46c0-6 4-10 10-10s10 4 10 10"
          stroke="url(#grad3)"
          strokeWidth="3"
        />
      </svg>
    ),
  },
  {
    title: "Agile Development",
    description:
      "Iterative and collaborative development process with transparent delivery cycles.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="grad4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f54123" />
            <stop offset="100%" stopColor="#6e33ff" />
          </linearGradient>
        </defs>
        <path
          d="M48 24a16 16 0 1 0-28 12l-4 4h10v-10l-3 3a12 12 0 1 1 17-1"
          stroke="url(#grad4)"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Client-Centric Focus",
    description:
      "We deeply engage with your vision and feedback to ensure aligned and impactful outcomes.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="grad5" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f54123" />
            <stop offset="100%" stopColor="#6e33ff" />
          </linearGradient>
        </defs>
        <path
          d="M32 4C20 4 12 14 12 26c0 16 20 30 20 30s20-14 20-30c0-12-8-22-20-22z"
          stroke="url(#grad5)"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Full-stack Expertise",
    description:
      "From backend systems to sleek frontends — our team covers the complete product stack.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="grad6" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f54123" />
            <stop offset="100%" stopColor="#6e33ff" />
          </linearGradient>
        </defs>
        <rect
          x="8"
          y="8"
          width="48"
          height="20"
          rx="3"
          stroke="url(#grad6)"
          strokeWidth="3"
        />
        <rect
          x="8"
          y="36"
          width="48"
          height="20"
          rx="3"
          stroke="url(#grad6)"
          strokeWidth="3"
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
