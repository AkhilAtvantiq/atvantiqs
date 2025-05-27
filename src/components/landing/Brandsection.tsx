"use client";
import React from "react";

const counters = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#ff5443]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          d="M9 12l2 2 4-4M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    number: 30,
    label: "Completed Projects",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#ff5443]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          d="M4 4v16h16V4H4zm2 2h12v12H6V6zm3 10h6v2H9v-2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    number: 100,
    label: "Resources Deployed",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#ff5443]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    number: 10,
    label: "Worldwide Clients",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#ff5443]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7l3-7z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    number: 15,
    label: "Years in Industry",
  },
];

const Brandsection = () => {
  return (
    <section className="relative bg-white py-24 text-center overflow-hidden">
      {/* Top-right curved SVG background */}
      <div className="absolute top-0 right-0 w-full max-w-[800px] z-0">
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0,0 C150,100 450,0 600,100 L600,0 L0,0 Z"
            fill="#f3f4fd"
          />
        </svg>
      </div>

      {/* Divider Line */}
      <div className="w-1 h-6 mx-auto bg-[#777] mb-6 z-0 relative"></div>

      {/* Subheading */}
      <p className="uppercase tracking-widest text-[13px] text-[#ff5443] font-semibold mb-3 relative z-10">
        Clients really love us
      </p>

      {/* Main Heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-[#333a61] max-w-3xl mx-auto leading-relaxed z-10 relative">
        Far far away, behind the word mountains, far from the <br /> countries
        Vokalia and Consonantia, there live the blind texts.
      </h2>

      {/* Counter Cards */}
      <div className="mt-16 flex flex-wrap justify-center items-start gap-6 px-6 relative z-10">
        {counters.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[240px] p-6 border border-[#e2e2e2] rounded-xl shadow-sm hover:shadow-md transition duration-300 bg-white"
          >
            <div className="mb-3 flex justify-center">{item.icon}</div>
            <div className="text-[#333a61] text-[28px] font-bold leading-tight">
              {item.number}+
            </div>
            <div className="text-[#333a61] text-[15px] font-light mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brandsection;
