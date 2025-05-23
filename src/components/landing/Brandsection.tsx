"use client";
import React from "react";
import Image from "next/image";

type Brand = {
  id: number;
  img: string;
  alt: string;
};

const Brandsection = () => {
  const clients: Brand[] = [
    { id: 1, img: "/clients/jio.png", alt: "Jio" },
    { id: 2, img: "/clients/ceragon.png", alt: "Ceragon" },
    { id: 3, img: "/clients/erricson.png", alt: "Erricson" },
    { id: 4, img: "/clients/tata.png", alt: "Tata Communications" },
    { id: 5, img: "/clients/nokia.png", alt: "Nokia" },
    { id: 6, img: "/clients/hfcl.png", alt: "HFCL Group" },
  ];

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
        Far far away, behind the word mountains, far from the <br /> countries Vokalia and
        Consonantia, there live the blind texts.
      </h2>

      {/* Logo List */}
      <div className="mt-12 flex flex-wrap justify-center items-center gap-x-10 gap-y-8 px-6 relative z-10">
        {clients.map((client) => (
          <div
            key={client.id}
            className="grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src={client.img}
              alt={client.alt}
              width={140}
              height={48}
              className="h-12 object-contain max-w-[140px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brandsection;
