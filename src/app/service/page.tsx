"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const services = [
  {
    title: "Custom Software Development",
    image: "/images/software-development.jpg",
    content:
      "We design and build scalable custom software tailored to your business needs. From internal platforms to client-facing apps, our agile process ensures flexibility and quality throughout the development lifecycle.",
    icon: "/icons/software-development.svg",
  },
  {
    title: "Mobile App Development",
    image: "/images/mobile-app.jpg",
    content:
      "Whether it's iOS, Android, or cross-platform, our team crafts engaging mobile experiences that are performant, secure, and user-focused.",
    icon: "/icons/mobile-app.svg",
  },
  {
    title: "Web Application Development",
    image: "/images/web-development.jpg",
    content:
      "Our web applications are designed with performance and scalability in mind. From dashboards to SaaS platforms, we bring your vision to life using modern frameworks.",
    icon: "/icons/web-development.svg",
  },
  {
    title: "UI/UX Design",
    image: "/images/ui-ux.jpg",
    content:
      "Our design team delivers intuitive interfaces that align with your brand and enhance the user journey. Every pixel is placed with purpose to drive engagement.",
    icon: "/icons/ui-ux.svg",
  },
  {
    title: "Cloud & DevOps",
    image: "/images/devops.jpg",
    content:
      "We streamline your operations with scalable cloud infrastructure, CI/CD pipelines, and automated monitoring systems to ensure reliability and uptime.",
    icon: "/icons/devops.svg",
  },
];

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Product Manager, Fintech Co.",
    quote:
      "Atvantiq's software team exceeded expectations. From ideation to deployment, they delivered with clarity, transparency, and precision.",
  },
  {
    name: "James Carter",
    role: "CTO, HealthTech Startup",
    quote:
      "We partnered with Atvantiq to build a HIPAA-compliant web platform. The attention to security and performance was outstanding.",
  },
];

const caseStudies = [
  {
    title: "Enterprise CRM Solution",
    summary:
      "We developed a scalable CRM used by 500+ sales agents across the globe, integrating it with marketing and support workflows.",
    image: "/images/crm-case.jpg",
    link: "/case-studies/enterprise-crm",
  },
  {
    title: "Healthcare Appointment Platform",
    summary:
      "An AI-powered booking engine that connects patients and doctors in real time, reducing wait times by 60%.",
    image: "/images/health-case.jpg",
    link: "/case-studies/healthcare-appointment",
  },
];

const WaveDivider = () => (
  <svg className="w-full h-24 text-gray-900" viewBox="0 0 1440 100" fill="currentColor" preserveAspectRatio="none">
    <path d="M0 50C200 80 400 20 600 50C800 80 1000 20 1200 50C1400 80 1440 50 1440 50V100H0V0Z" />
  </svg>
);

const ServicesPage = () => {
  return (
    <div className="bg-gray-900 text-white font-poppins">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-blue-600 to-blue-400 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg
            className="w-full h-full opacity-20 animate-pulse"
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
                <stop offset="0%" stopColor="#0057FF" />
                <stop offset="100%" stopColor="#00A3FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
          >
            Our Software Development Services
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-200 max-w-3xl mx-auto"
          >
            We help businesses launch, scale, and evolve through top-tier software, mobile apps, and cloud-first solutions.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-400 transition-all duration-300 shadow-blue-500/50 hover:shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </section>

      <WaveDivider />

      {/* Service Sections */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-blue-500/50 transition-all duration-300"
              >
                <img src={service.icon} alt={service.title} className="h-12 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{service.title}</h3>
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-gray-200 text-center">{service.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-900 relative overflow-hidden">
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
                <stop offset="0%" stopColor="#0057FF" />
                <stop offset="100%" stopColor="#00A3FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-10 text-blue-400"
          >
            Why Choose Atvantiq?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Industry Expertise",
                content: "Years of experience delivering solutions across Fintech, HealthTech, Retail, and more.",
              },
              {
                title: "End-to-End Partnership",
                content: "From discovery to post-launch, we stay involved to ensure ongoing success.",
              },
              {
                title: "Agile Development",
                content: "Quick iterations, fast feedback loops, and constant alignment with your goals.",
              },
            ].map((item, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.05}
                transitionSpeed={2000}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.content}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-10 text-blue-400"
          >
            Client Testimonials
          </motion.h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((testi, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl shadow-md relative">
                  <div className="absolute -top-4 -left-4 text-6xl text-blue-400 opacity-30">
                    “
                  </div>
                  <p className="text-gray-200 text-lg italic mb-4">"{testi.quote}"</p>
                  <div className="mt-4">
                    <p className="font-semibold text-white">{testi.name}</p>
                    <p className="text-gray-400 text-sm">{testi.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <WaveDivider />

      {/* Case Studies */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-10 text-blue-400"
          >
            Case Studies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseStudies.map((caseItem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg relative overflow-hidden group"
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{caseItem.title}</h3>
                <p className="text-gray-200 mb-4">{caseItem.summary}</p>
                <a
                  href={caseItem.link}
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition-all duration-300"
                >
                  View Case Study
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;