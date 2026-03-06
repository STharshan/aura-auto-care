
import React, { useEffect } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom Swiper Styles
const swiperStyles = `
  .swiper-pagination-bullet {
    background: #e80202 !important;
    opacity: 0.4 !important;
  }
  .swiper-pagination-bullet-active {
    background: #e80202 !important;
    opacity: 1 !important;
  }

  /* Left/Right Arrow Styles */
  .swiper-button-next,
  .swiper-button-prev {
    color: #e80202 !important;
    font-weight: bold !important;
    transition: 0.3s ease !important;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: #a31f1d !important;
    transform: scale(1.15);
  }

  /* Remove default arrow background */
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 22px !important;
  }
`;

export default function GallerySection() {

  const galleryItems = [
    { type: "image", src: "1.webp", text: "Engine Diagnostics" },
    { type: "image", src: "2.webp", text: "Electrical Systems" },
    { type: "image", src: "3.webp", text: "Auto Repair" },
    { type: "image", src: "4.webp", text: "Testing & Tools" },
    { type: "image", src: "5.webp", text: "Diagnostic Equipment" },
    { type: "image", src: "6.webp", text: "Engine Diagnostics" },
    { type: "image", src: "7.webp", text: "Electrical Systems" },
    { type: "image", src: "8.webp", text: "Auto Repair" },
    { type: "image", src: "9.webp", text: "Testing & Tools" },
    { type: "image", src: "10.webp", text: "Testing & Tools" },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#000000] text-white font-inter py-20 md:py-28 border-t border-[#1A1A1A]"
    >
      {/* Inject Custom Pagination Color */}
      <style>{swiperStyles}</style>

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-6xl opacity-60">
        <div
          className="absolute left-1/2 top-[25%] -translate-x-1/2 w-[1400px] h-[1400px] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,59,59,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <p
          data-aos="fade-down"
          className="inline-block border border-[#e4333333] text-xs tracking-[4px] uppercase px-6 py-1 rounded-full text-[#e80202] mb-5"
        >
          Our Gallery
        </p>

        <h2
          data-aos="zoom-in"
          className="mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-white"
        >
          Experience <span className="italic text-[#e80202]">Our Work</span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mb-14 text-sm sm:text-base text-[#AAAAAA] max-w-2xl mx-auto"
        >
          A glimpse into our precision craftsmanship and automotive expertise.
          Each project reflects our dedication to quality and detail.
        </p>
      </div>

      {/* Slider */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="relative z-10 mx-auto max-w-[1200px] w-full px-4 sm:px-6 md:px-8"
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {galleryItems.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-2xl overflow-hidden border border-[#262626] shadow-xl group relative">
                {item.type === "video" && (
                  <video
                    src={item.src}
                    className="w-full h-72 object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}

                {item.type === "image" && (
                  <img
                    src={item.src}
                    className="w-full h-72 object-cover"
                    alt={item.text}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
