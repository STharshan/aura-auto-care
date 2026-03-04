import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    path: "/services/valeting",
    logoSrc: "/logos/valeting-logo.png",
    tag: "Detailing",
    title: "Valeting",
    subtitle: "Interior & Exterior Care",
    body: "Professional interior and exterior valeting designed to thoroughly clean, refresh, and maintain your vehicle, leaving it spotless, hygienic, and showroom ready.",
  },
  {
    path: "/services/ceramic-coating",
    logoSrc: "/logos/ceramic-logo.png",
    tag: "Protection",
    title: "Ceramic Coating",
    subtitle: "Long-Lasting Paint Protection",
    body: "Advanced ceramic coating protection adds long-lasting gloss, hydrophobic properties, and durable paint protection, helping shield your vehicle from dirt, weather, and contaminants.",
  },
  {
    path: "/services/paint-correction",
    logoSrc: "/logos/paint-correction-logo.png",
    tag: "Restoration",
    title: "Paint Correction",
    subtitle: "Flawless Paint Finish",
    body: "Machine polishing removes swirl marks, scratches, and imperfections, restoring depth, clarity, and gloss to your vehicle's paintwork for a flawless finish.",
  },
  {
    path: "/services/deep-restoration",
    logoSrc: "/logos/deep-restoration-logo.png",
    tag: "Revival",
    title: "Deep Restoration",
    subtitle: "Complete Vehicle Revival",
    body: "Comprehensive restoration service revives tired vehicles through intensive cleaning, polishing, and surface treatments, bringing back appearance, freshness, and overall visual appeal.",
  },
  {
    path: "/services/maintenance-plan",
    logoSrc: "/logos/maintenance-plan-logo.png",
    tag: "Care Plan",
    title: "Maintenance Plan",
    subtitle: "Ongoing Vehicle Care",
    body: "Regular maintenance detailing keeps your vehicle consistently clean and protected with scheduled visits, preserving results and maintaining long-term appearance and value.",
  },
];

function ServiceCard({ path, logoSrc, tag, title, subtitle, body }) {
  return (
    <Link
      to={path}
      className="group relative block h-full rounded-3xl border border-white/10
      bg-[rgba(255,255,255,0.04)] backdrop-blur-sm p-10
      shadow-[0_10px_60px_rgba(0,0,0,0.7)]
      hover:-translate-y-1 transition-transform duration-300"
    >
      {/* Top Line */}
      <div className="absolute -top-px left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-red-500 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Logo + Tag */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src="logo-white.png"
            alt={`${title} Logo`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <span className="text-[11px] font-semibold px-3 py-1 rounded-md bg-linear-to-r from-red-600 to-red-800 border border-white/20 shadow-[0_0_10px_rgba(255,0,0,0.5)]">
          {tag}
        </span>
      </div>

      <h3 className="text-2xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-white/60 mb-4">{subtitle}</p>

      <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-4" />

      <p className="text-base text-white/70 leading-relaxed">{body}</p>
    </Link>
  );
}

export default function AutomotiveServicesSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const card = container.querySelector(".snap-center");
      const cardWidth = card ? card.offsetWidth + 40 : container.offsetWidth;
      container.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="relative bg-black text-white py-28 overflow-hidden flex flex-col items-center justify-center"
      id="service"
    >
      {/* === Background === */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[65%] h-[420px] bg-linear-to-tr from-[#1a0000] via-[#0a0000] to-transparent rounded-tr-[140px]" />
        <div className="absolute top-0 right-0 w-[65%] h-[420px] bg-linear-to-tl from-[#1a0000] via-[#0a0000] to-transparent rounded-tl-[140px]" />
        <div className="absolute top-[-150px] left-[-150px] w-[800px] h-[800px] bg-linear-to-br from-red-700/25 to-red-900/15 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[700px] h-[700px] bg-linear-to-tr from-red-600/20 to-black/30 blur-[160px] rounded-full" />
      </div>

      {/* === Header === */}
      <div
        className="relative z-10 text-center max-w-4xl mb-20 px-6"
        data-aos="fade-up"
      >
        <h1
          className="text-5xl md:text-6xl font-bold mb-2 leading-tight bg-linear-to-r from-red-500 via-red-300 to-red-500 bg-clip-text text-transparent"
          data-aos-delay="100"
        >
          Our Automotive Services
        </h1>

        <p
          className="text-gray-400 text-lg leading-relaxed mb-12"
          data-aos-delay="300"
        >
          Explore our range of car services designed to keep your vehicle
          performing safely and efficiently.
        </p>

        <a
          href="tel:+441162530770"
          className="inline-block px-10 py-3 bg-linear-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900
          text-white font-medium text-lg rounded-xl border-[3px] border-white/15
          shadow-[0_8px_40px_rgba(255,0,0,0.5)] transition-all duration-300"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Get in Touch
        </a>
      </div>

      {/* === Slider === */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6" data-aos="fade-up" data-aos-delay="500">

        {/* Arrow Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-gray-800 hover:bg-gray-700 p-3 rounded-full shadow-lg transition group"
        >
          <FaChevronLeft
            className="text-white transition-transform duration-300 group-hover:-translate-x-0.5"
            size={18}
          />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 p-3 rounded-full shadow-lg transition group"
        >
          <FaChevronRight
            className="text-white transition-transform duration-300 group-hover:translate-x-0.5"
            size={18}
          />
        </button>

        {/* Scroll Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-6 px-8 sm:px-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="shrink-0 snap-center w-[85vw] sm:w-[45vw] lg:w-[30%]"
              data-aos="zoom-in-up"
              data-aos-delay={100 * i}
            >
              <ServiceCard {...card} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}