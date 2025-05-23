"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
  {
    quote:
      "Their communication was clear, timely, and effective throughout. We would recommend them to anyone.",
    name: "Emily Davis",
    position: "Head of Product @ BrightTech",
    avatar: "/profile/profile3.png",
  },
  {
    quote:
      "They consistently delivered high-quality work that exceeded our expectations. A pleasure to work with.",
    name: "Michael Brown",
    position: "CTO @ CloudZone",
    avatar: "/profile/profile4.png",
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-white px-5 py-[100px]">
      {/* Wave background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-10 animate-pulse"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="testimonialGradient" x1="0" y1="0" x2="1440" y2="600">
              <stop offset="0%" stopColor="#e0e0ff" />
              <stop offset="100%" stopColor="#cac4ff" />
            </linearGradient>
          </defs>
          <path
            d="M0 300C200 400 400 200 600 300C800 400 1000 200 1200 300C1400 400 1440 300 1440 300V600H0V300Z"
            fill="url(#testimonialGradient)"
          />
        </svg>
      </div>

      <motion.div
        className="relative z-10 max-w-[1200px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <motion.h5
              variants={cardVariants}
              className="text-[#BFBFBF] text-xs uppercase tracking-widest font-bold mb-2 font-poppins"
            >
              Trusted by 50+ Clients
            </motion.h5>
            <motion.h2
              variants={cardVariants}
              className="text-[20px] md:text-[30px] font-medium text-[#3c3f94] uppercase font-poppins"
            >
              What Our Clients Say
            </motion.h2>
          </div>
          <motion.div
            variants={cardVariants}
            className="text-[#ff5443] text-sm md:text-base font-medium underline cursor-pointer font-poppins"
          >
            View More
          </motion.div>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          spaceBetween={30}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.05}
                transitionSpeed={2000}
                className="relative"
              >
                <motion.div
                  variants={cardVariants}
                  className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-[#2e5bff]/20 hover:bg-grey-400 transition-shadow border border-gray-200 "
                >
                  <div className="absolute -top-4 -left-4 text-6xl text-[#3c3f94] opacity-30">“</div>
                  <p className="text-base md:text-lg text-[#8c8c8c] font-normal italic mb-6 leading-relaxed font-poppins">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={`${t.name}, ${t.position}`}
                      className="w-14 h-14 object-cover rounded-full border-2 border-[#3c3f94]/30 transform hover:scale-110 transition-transform "
                    />
                    <div className="text-left">
                      <p className="font-semibold text-black font-poppins">{t.name}</p>
                      <p className="text-sm text-[#3c3f94] font-poppins">{t.position}</p>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination mt-8 flex justify-center gap-3"></div>

        <style jsx global>{`
          .custom-bullet {
            width: 20px;
            height: 3px;
            background: #bfbfbf;
            opacity: 0.4;
            transition: all 0.3s ease;
            border-radius: 2px;
          }
          .custom-bullet.swiper-pagination-bullet-active {
            opacity: 1;
            background: #3c3f94;
          }
        `}</style>
      </motion.div>
    </section>
  );
};

export default Testimonials;
