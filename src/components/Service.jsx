import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Logos will replace icons
// Ensure your images are in /public/logos/ folder or adjust the path

export default function AutomotiveServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

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

      {/* === Cards Grid (Equal Height Enabled) === */}
      <div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full px-6 items-stretch"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="h-full"
            data-aos="zoom-in-up"
            data-aos-delay={100 * i}
          >
            <ServiceCard {...card} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* === Card Data with Logos === */
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
    body: "Machine polishing removes swirl marks, scratches, and imperfections, restoring depth, clarity, and gloss to your vehicle’s paintwork for a flawless finish.",
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

/* === Card Component with Responsive Logos === */
function ServiceCard({ path, logoSrc, tag, title, subtitle, body }) {
  return (
    <Link
      to={path}
      className="group relative block h-full rounded-3xl border border-white/10 
      bg-[rgba(255,255,255,0.04)] backdrop-blur-sm p-10
      shadow-[0_10px_60px_rgba(0,0,0,0.7)]
      hover:-translate-y-1 transition-transform duration-300 flex-col"
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

      <p className="text-base text-white/70 leading-relaxed grow">{body}</p>
    </Link>
  );
}