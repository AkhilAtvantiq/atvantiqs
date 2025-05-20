"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

function Footer() {
  const [show, setShow] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`transition-colors duration-300 ${
        hovering ? "bg-black" : "bg-blue-600"
      } text-white px-6 py-10 md:px-16`}
    >
      {/* Say Hello Button */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8">
        <a
          href="/contact"
          className="text-center group"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <p className="py-4 text-6xl font-bold text-white group-hover:underline hover:text-[#32fcfc]">
            Atvantiqs<span className="ml-1">.</span>
          </p>
        </a>
      </div>

      {/* Subfooter */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-6">
        {/* Locations and Email */}
        <div className="flex flex-col md:flex-row gap-4 items-center text-sm">
          <a href="/contact" className="hover:underline">
            San Francisco
          </a>
          <a href="/contact" className="hover:underline">
            Florianopolis
          </a>
          <a href="mailto:info@cheesecakelabs.com" className="hover:underline">
            info@atvantiqs.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-white text-xl">
          <a
            href="https://www.facebook.com/cheesecakelabs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/company/cheesecake-labs/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/cheesecakelabs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/cheesecakelabs/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} Atvantiqs. All rights reserved.
      </div>
    </motion.footer>
  );
}


export default Footer;