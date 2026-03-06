import { Instagram, ArrowDown } from "lucide-react";
import { BsTiktok } from "react-icons/bs";

export default function HeroSection({
}) {

  return (
    <div
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "100svh", minHeight: "100vh" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Social Media */}
        <div className="absolute left-3 sm:left-5 md:left-8 top-[30%] flex flex-col gap-6 sm:gap-8 md:gap-10 z-20">

          {/* Instagram */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/aura.autocare/"
            className="group flex flex-col items-center gap-2 sm:gap-3 cursor-pointer hover:scale-110 active:scale-110 transition-transform duration-300"
          >
            {/* Icon changes color on group hover */}
            <Instagram
              className="text-white group-hover:text-pink-500 transition-colors duration-300"
              size={18}
            />

            {/* Text changes color on group hover */}
            <span
              className="text-white text-xs sm:text-sm group-hover:text-pink-500 transition-colors duration-300"
              style={{ writingMode: "vertical-rl" }}
            >
              Instagram
            </span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.tiktok.com/@auraautocare"
            target="_blank"
            className="flex flex-col items-center gap-2 sm:gap-3 cursor-pointer hover:scale-110 transition"
          >
            <BsTiktok className="text-white" size={18} />
            <span
              className="text-white text-xs sm:text-sm"
              style={{ writingMode: "vertical-rl" }}
            >
              TikTok
            </span>
          </a>

        </div>

        {/* Main Content */}
        <div className="absolute bottom-[15%] left-6 sm:left-8 md:left-16 z-20">
          <p className="text-[#e80202] text-[10px] sm:text-[11px] md:text-sm tracking-[0.2em] font-semibold mb-3 sm:mb-4 md:mb-6">
           Full Service and Excellent Quality
          </p>

          <h1
            className="text-white font-bold leading-[0.85]"
            style={{ fontSize: "clamp(2.8rem, 10vw, 7rem)" }}
          >
            RESTORE YOUR <span className="text-[#e80202]">AURA</span>
          </h1>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 md:right-16 flex items-center gap-2 sm:gap-3 text-white z-20">
          <span className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em]">
            SCROLL DOWN
          </span>
          <ArrowDown className="animate-bounce" size={14} />
        </div>

      </div>
    </div>
  );
}