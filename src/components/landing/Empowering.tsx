"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const highlights = [
  "Expert Software Engineers",
  "Tailored Digital Solutions",
  "End-to-End Project Ownership",
];

const Empower = () => {
  return (
    <section className="relative py-32 bg-gradient-to-r from-[#f9f9ff] to-[#ffffff] overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Left: Overlapping images */}
        <div className="relative w-full md:w-1/2">
          {/* Top-Left Pattern: Scattered Dots */}
          <svg
            className="absolute -top-10 -left-10 z-0"
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="5" fill="#2e5bff" opacity="0.8" />
            <circle cx="50" cy="30" r="3" fill="#2e5bff" opacity="0.6" />
            <circle cx="70" cy="10" r="4" fill="#2e5bff" opacity="0.5" />
            <circle cx="90" cy="40" r="6" fill="#2e5bff" opacity="0.7" />
            <circle cx="40" cy="60" r="5" fill="#2e5bff" opacity="0.4" />
            <circle cx="80" cy="80" r="3" fill="#2e5bff" opacity="0.6" />
          </svg>

          {/* Images */}
          <motion.div
            className="relative w-[60%] rounded-xl overflow-hidden shadow-lg z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/profile/employee.png"
              alt="Professional working on software development"
              width={400}
              height={200}
              className="rounded-xl object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-[-40px] left-[40px] w-[280px] rounded-xl overflow-hidden shadow-md z-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/profile/team.png"
              alt="Team collaborating on a project"
              width={300}
              height={200}
              className="rounded-xl object-cover"
            />
          </motion.div>

          {/* Bottom-Right Pattern: Wavy Lines */}
          {/* <svg
            className="absolute -bottom-20 -right-20 z-0"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 180 Q 60 140, 100 180 T 180 180"
              stroke="#2e5bff"
              strokeWidth="2"
              strokeOpacity="0.7"
              fill="none"
            />
            <path
              d="M20 160 Q 60 120, 100 160 T 180 160"
              stroke="#2e5bff"
              strokeWidth="2"
              strokeOpacity="0.5"
              fill="none"
            />
            <path
              d="M20 140 Q 60 100, 100 140 T 180 140"
              stroke="#2e5bff"
              strokeWidth="2"
              strokeOpacity="0.3"
              fill="none"
            />
          </svg> */}
        </div>

        {/* Right: Text content */}
        <div className="w-full md:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[13px] tracking-widest text-[#BFBFBF] font-bold uppercase mb-3"
          >
            Empower Through Technology
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-[#2a2a2a] leading-tight mb-6"
          >
            We help startups <br />
            scale into powerful <span className="text-[#ff5443]">enterprises</span>
          </motion.h2>

          {/* Checkpoints */}
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4 mb-8"
          >
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text[16px] text-[#353535]">
                <FaCheckCircle className="text-[#ff4a4a]" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#969696] text-[15px] leading-relaxed mb-6"
          >
            From idea to execution, we partner with you to deliver scalable apps, impactful digital
            experiences, and lasting technology transformations.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <button className="bg-[#3c3f94] hover:bg-[#2a2d7a] text-white px-4 py-2 text-[16px] rounded-md shadow-md transition duration-300">
              Let’s Build Something
            </button>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Empower;
