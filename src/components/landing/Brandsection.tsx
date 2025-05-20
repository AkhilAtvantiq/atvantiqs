"use client";
import React from "react";

// Define the type for the brand
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

  const partners: Brand[] = [
    { id: 1, img: "/partners/logitech.png", alt: "Logitech" },
    { id: 2, img: "/partners/canon.png", alt: "Canon" },
    { id: 3, img: "/partners/epson.png", alt: "Epson" },
    { id: 4, img: "/partners/hp.png", alt: "HP" },
    { id: 5, img: "/partners/hikvision.png", alt: "Hikevision" },
    { id: 6, img: "/partners/molex.png", alt: "Molex" },
  ];

  // Function to render brand grid
  const renderBrandGrid = (brands: Brand[]) => (
    <div className="flex justify-center flex-wrap items-center -m-5">
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="w-full max-w-[210px] m-5 p-5 relative transition-transform duration-200 hover:scale-105"
        >
          <img
            src={brand.img}
            alt={brand.alt}
            className="w-full max-w-[203px] max-h-[150px] opacity-100 transition-transform duration-200 relative z-10"
          />
          {/* Hover Project Grid */}
          <div className="absolute top-0 left-[-10%] w-[120%] text-white text-center px-6 pt-24 pb-4 opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in bg-black/60 z-20 max-h-0 hover:max-h-[500px] overflow-hidden transform -translate-y-[8%] hover:translate-y-0">
            <p>{brand.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative py-32 bg-blue-600 -mb-px text-white">
      <div className="relative z-20 w-[90%] max-w-7xl mx-auto h-full">
        {/* Clients */}
        <div className="text-center mb-16">
          <p className="text-2xl leading-8 mb-4">Our Clients</p>
          <p className="text-base leading-none font-normal m-0">
            Trusted by startups and industry leaders
          </p>
        </div>
        {renderBrandGrid(clients)}

        {/* Partners */}
        <div className="text-center mt-24 mb-16">
          <p className="text-2xl leading-8 mb-4">Our Partners</p>
          <p className="text-base leading-none font-normal m-0">
            Strong alliances with industry giants
          </p>
        </div>
        {renderBrandGrid(partners)}
      </div>
    </section>
  );
};

export default Brandsection;

