"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "THAW",
    category: "IoT",
    description:
      "Creating an IoT mobile app to ensure a personalized experience across both the app and wearable devices.",
    buttonText: "VIEW CASE STUDY",
    imageUrl: "/images/thaw.png", // replace with your actual image path
    bgColor: "bg-[#F44E2A]",
    link: "https://cheesecakelabs.com/portfolio/thaw/",
  },
  {
    bgColor: 'bg-[#0477B1]',
    category: 'E-commerce',
    title: 'Tapcart',
    buttonText: "VIEW CASE STUDY",
    description: `Bringing Tapcart's Shopify app to Android with more than a 1 million user reach and leverage Google's tech for amplified conversion rates.`,
    imageUrl: '/static/tapcart-eabc5161a25858ad1cf9e112b122206b.webp',
    link: '/portfolio/tapcart/',
  },
  {
    bgColor: 'bg-[#363EA9]',
    category: 'Web Platform',
    title: 'AES',
    buttonText: "VIEW CASE STUDY",
    description: `Crafting a revolutionary platform of energy price and asset flexibility optimization, and winner of the 2019 International Energy & Innovation Award.`,
    imageUrl: '/static/aes-858f175925369c24955a88d8486302ef.webp',
    link: '/portfolio/aes-vpp/',
  }
  // Add more case studies here
];

const Casestudy = () => {
  return (
    <div className="w-full h-full bg-white">
        <div className=" max-w-screen-xl mb-6 px-32 text-6xl font-semibold text-black">
            Our Work<span className="text-blue-600">.</span>
        </div>
        <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        loop={true}
        spaceBetween={40}
        slidesPerView="auto"
        centeredSlides={false}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="w-[97%] max-w-[1370px] mr-10 overflow-hidden"
          >
            <div
              className={`flex h-full w-full ${slide.bgColor} text-white shadow-2xl px-42 py-12`}
            >
              <div className="flex flex-col justify-center px-16 space-y-6 tracking-wide">
                <p className="text-sm uppercase opacity-70 tracking-widest">› {slide.category}</p>
                <h2 className="text-6xl font-bold tracking-wide">{slide.title}</h2>
                <p className="text-2xl leading-relaxed tracking-wide">
                  {slide.description}
                </p>
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 w-fit transition tracking-widest"
                >
                  {slide.buttonText}
                </a>

                {/* Pagination under the button */}
                <div className="custom-pagination pt-6" />
              </div>
              <div className="w-1/2 flex items-center justify-center p-10">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="max-h-[500px] object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Casestudy;
