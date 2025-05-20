import Image from 'next/image';
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';
import { PiGearSixBold, PiShieldCheckBold, PiAtomBold } from 'react-icons/pi';

const Hero = () => {
  return (
    <section className="relative bg-[#FFFFFF] overflow-hidden pt-45 pb-8">
      {/* Background shape */}
      <div className="absolute w-255 h-220 bg-[#f7f7ff] rounded-full bottom-55 -left-30 z-0"></div>


      <div className="max-w-7xl px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl z-10 pb-8">
          {/* Top bar */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-[3px] bg-gray-300 rounded-full"></div>
            <div className="w-16 h-[3px] bg-gray-400 rounded-full"></div>
          </div>

          <p className="text-[#ff4a4a] font-medium text-2xl md:text-4xl mb-3">Next Era of Software Solutions</p>
          <h1 className="text-[42px] md:text-[60px] font-extrabold leading-tight text-[#1e1e1e] mb-6">
            Introducing Atvantiq
          </h1>
          <p className="text-[#7a7a7a] text-lg leading-relaxed mb-8">
            Empowering your business with cutting-edge web and mobile solutions. <br />
            We design, develop, and deliver scalable software tailored to your goals.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="bg-[#3c3f94] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2c2e7d] transition"
            >
              Learn More
            </Link>
            <button className="flex items-center space-x-2 text-[#3c3f94] font-medium text-lg hover:underline">
              {/* <svg
                className="w-6 h-6 text-[#3c3f94]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-4.586-2.65A1 1 0 009 9.36v5.28a1 1 0 001.166.982l4.586-2.65a1 1 0 000-1.764z" />
              </svg> */}
              <FaPlayCircle className="text-2xl" />
              <span>Video Introduction</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <Image
            src="/iphone-mockup.png"
            alt="iPhone mockup"
            width={500}
            height={500}
            className="z-10"
          />
          {/* Optional floating shape */}
          <div className="absolute top-[60px] right-[70px] w-20 h-20 bg-[#eaeaff] rounded-full z-0" />
          <div className="absolute bottom-[10px] left-[50px] w-10 h-10 bg-[#ffeae9] rounded-full z-0" />
        </div>
      </div> 
      {/* Feature Boxes */}
      <div className="container w-7xl mx-auto pt-22 px-16 md:px-22 pb-34 flex flex-col md:flex-row justify-center relative z-10">
        <div className="bg-white shadow-xl rounded-xl p-12 flex-1 text-left hover:shadow-2xl transition">
          <PiGearSixBold className=" text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Latest Technologies</h3>
          <p className="text-gray-500 text-sm">
            We leverage the latest stacks and frameworks to ensure performance, security, and future-readiness in every project.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-12 flex-1 text-left hover:shadow-2xl transition">
          <PiShieldCheckBold className="text-5xl bg-clip-text text-gradient-to-r from-red-500 to-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">High-Quality Code</h3>
          <p className="text-gray-500 text-sm">
            Our team ensures robust, clean, and scalable code with every solution — built for the long run.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-12 flex-1 text-left hover:shadow-2xl transition">
          <PiAtomBold className=" text-5xl bg-clip-text text-gradient-to-r from-red-500 to-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Customizable</h3>
          <p className="text-gray-500 text-sm">
            Each project is built from the ground up — no templates, no shortcuts. 100% aligned with your business needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
