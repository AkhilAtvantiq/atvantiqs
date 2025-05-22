import Image from 'next/image';
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bg-[#FFFFFF] overflow-hidden pt-50 pb-8">
      {/* Background shape */}
      <div className="absolute w-205 h-175 bg-[#f7f7ff] rounded-full bottom-67 -left-20 z-0"></div>


      <div className="max-w-7xl px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl z-10 pb-8">
          {/* Top bar */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-[3px] bg-gray-300 rounded-full"></div>
            <div className="w-16 h-[3px] bg-gray-400 rounded-full"></div>
          </div>

          <p className=" text-[#ff5443] inter text-2xl md:text-4xl mb-3">Next Era of Software Solutions</p>
          <h1 className="text-[42px] md:text-[58px] font-bold leading-tight text-[#1e1e1e] mb-6">
            Introducing Atvantiq
          </h1>
          <p className="text-[#757575] text-[16] leading-relaxed mb-8">
            Empowering your business with cutting-edge web and mobile solutions. 
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
      <div className="container w-7xl mx-auto pt-6 px-16 md:px-22 pb-34 flex flex-col md:flex-row justify-center relative z-10">
        <div className="bg-white shadow-xl rounded-xl p-12 flex-1 text-left hover:shadow-2xl transition">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  className="mb-4 w-12 h-12"
  fill="url(#techGradient)"
>
  <defs>
    <linearGradient id="techGradient" x1="0" y1="0" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ef4444" />
      <stop offset="100%" stopColor="#6366f1" />
    </linearGradient>
  </defs>
  <path d="M32 14a18 18 0 1 0 18 18A18 18 0 0 0 32 14zm0 32a14 14 0 1 1 14-14a14 14 0 0 1-14 14z" />
  <path d="M32 2v6a2 2 0 0 0 4 0V2a2 2 0 0 0-4 0zm0 54v6a2 2 0 0 0 4 0v-6a2 2 0 0 0-4 0zM2 32h6a2 2 0 0 0 0-4H2a2 2 0 0 0 0 4zm54 0h6a2 2 0 0 0 0-4h-6a2 2 0 0 0 0 4zM11.05 11.05l4.24 4.24a2 2 0 1 0 2.83-2.83l-4.24-4.24a2 2 0 1 0-2.83 2.83zm37.66 37.66l4.24 4.24a2 2 0 0 0 2.83-2.83l-4.24-4.24a2 2 0 1 0-2.83 2.83zM11.05 52.95a2 2 0 1 0 2.83 2.83l4.24-4.24a2 2 0 1 0-2.83-2.83l-4.24 4.24zm37.66-37.66a2 2 0 0 0 2.83-2.83l-4.24-4.24a2 2 0 0 0-2.83 2.83l4.24 4.24z" />
</svg>


          <h3 className="text-lg font-bold text-[#222222] mb-2">Latest Technologies</h3>
          <p className="text-[#969696] text-sm">
            We leverage the latest stacks and frameworks to ensure performance, security, and future-readiness in every project.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-12 flex-1 text-left hover:shadow-2xl transition">
         <svg
  width="60"
  height="60"
  viewBox="0 0 24 24"
  fill="url(#gradient)"
  xmlns="http://www.w3.org/2000/svg"
  className="mb-4 w-12 h-12"
>
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#ef4444" /> {/* red-500 */}
      <stop offset="100%" stopColor="#6366f1" /> {/* indigo-500 */}
    </linearGradient>
  </defs>
  <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm-1 14.59l-3.29-3.3 1.42-1.41L11 13.76l4.88-4.88 1.41 1.41L11 16.59z" />
</svg>


          <h3 className="text-lg font-bold text-[#222222] mb-2">High-Quality Code</h3>
          <p className="text-[#969696] text-sm">
            Our team ensures robust, clean, and scalable code with every solution — built for the long run.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-12 flex-1 text-left hover:shadow-2xl transition">
          <svg
  width="80"
  height="80"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="mb-2 h-14 w-14"
>
  <defs>
    <linearGradient id="techGradient" x1="0" y1="0" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ef4444" /> {/* red-500 */}
      <stop offset="100%" stopColor="#6366f1" /> {/* indigo-500 */}
    </linearGradient>
  </defs>
  <circle cx="32" cy="32" r="6" fill="url(#techGradient)" />
  <ellipse cx="32" cy="32" rx="22" ry="10" stroke="url(#techGradient)" strokeWidth="2" fill="none" />
  <ellipse
    cx="32"
    cy="32"
    rx="10"
    ry="22"
    stroke="url(#techGradient)"
    strokeWidth="2"
    fill="none"
    transform="rotate(45 32 32)"
  />
  <ellipse
    cx="32"
    cy="32"
    rx="10"
    ry="22"
    stroke="url(#techGradient)"
    strokeWidth="2"
    fill="none"
    transform="rotate(-45 32 32)"
  />
</svg>

          <h3 className="text-lg font-bold text-[#222222] mb-2">Fully Customizable</h3>
          <p className="text-[#969696] text-sm">
            Each project is built from the ground up — no templates, no shortcuts. 100% aligned with your business needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
