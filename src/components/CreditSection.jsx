import React, { useEffect } from "react";
import { FaToolbox } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      id="about"
      className="bg-black scroll-m-10 text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 transition-colors duration-500"
    >
      <div className="max-w-7xl p-3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mt-10">
        {/* LEFT IMAGES */}
        <div
          className="relative flex justify-center lg:justify-end order-2 lg:order-1"
          data-aos="fade-right"
        >
          {/* Background image */}
          <div
            className="absolute -top-6 sm:-top-8 md:-top-10 left-4 sm:left-6 
                       w-64 sm:w-72 md:w-80 h-[350px] sm:h-[390px] md:h-[430px] 
                       z-0 rounded-sm overflow-hidden"
          >
            <img
              src="image.png"
              alt="Workshop background"
              className="w-full h-full object-cover opacity-80 transition-opacity duration-500"
            />
          </div>

          {/* Foreground image */}
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=500&fit=crop"
            alt="Mechanic"
            className="relative z-10 rounded-sm shadow-lg w-[260px] sm:w-[280px] md:w-[320px] 
                       h-[340px] sm:h-[380px] md:h-[420px] object-cover mt-10 ml-10 sm:mt-12 md:mt-16"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-delay="200">
          {/* Subtitle */}
          <div className="flex items-center gap-2 mb-3">
            <FaToolbox className="text-[#e80202]  text-lg sm:text-xl" />
            <p className="text-[#e80202]  font-semibold text-lg uppercase tracking-wide sm:text-sm">
              Who We Are
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold text-gray-100 mb-3 sm:mb-4 leading-tight sm:leading-snug">
            WHERE IT ALL STARTED
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed text-sm sm:text-base">
            <span className="block font-semibold text-gray-100 mb-2">
              Professional Mobile Detailing & Valeting
            </span>
            AURA Autocare was founded by Adam with a simple goal — to provide high-quality car detailing and valeting services directly to customers through a fully mobile setup. Built around convenience, attention to detail, and professional care, AURA Autocare delivers showroom-level results wherever your vehicle is located.
            <p className="mt-3">From thorough interior valets to meticulous exterior detailing, every service is carried out using premium products and proven techniques designed to restore, protect, and maintain your vehicle’s appearance.</p>
          </p>

          {/* Profile + Bullet Points */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Profile Box */}
            <div
              className="bg-gray-800 p-4 rounded-lg flex items-center gap-3 sm:gap-4 shadow-sm w-80 transition-colors duration-500"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src="logo-white.png"
                alt="AURA Autocare"
                className="w-18 h-10  object-cover shrink-0"
              />
              <div>
                <h4 className="text-gray-100 font-semibold text-sm sm:text-base">
                  Adam
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Founder, AURA Autocare
                </p>
              </div>
            </div>

            {/* Bullet List */}
            <ul className="space-y-3 sm:space-y-4 text-gray-300">
              <li
                className="flex items-start gap-2 sm:gap-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <IoMdCheckmarkCircleOutline className="text-[#e80202] shrink-0 mt-1 text-lg" />
                <span className="text-sm sm:text-base">Trusted detailing & valeting</span>
              </li>
              <li
                className="flex items-start gap-2 sm:gap-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <IoMdCheckmarkCircleOutline className="text-[#e80202] shrink-0 mt-1 text-lg" />
                <span className="text-sm sm:text-base">
                  Convenience wherever you are
                </span>
              </li>
              <li
                className="flex items-start gap-2 sm:gap-3"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <IoMdCheckmarkCircleOutline className="text-[#e80202] shrink-0 mt-1 text-lg" />
                <span className="text-sm sm:text-base">
                  Premium care, lasting finish
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;