import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CreditSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: false, // keeps animating up & down scroll
      offset: 100, // distance from trigger point
      easing: "ease-in-out", // smooth motion
    });
  }, []);

  return (
    <section
      id="about"
      className="scroll-m-10 w-full bg-linear-to-br from-black via-[#0b0b0b] to-[#1a1a1a] py-16 px-6 md:px-12 lg:px-20 text-white overflow-hidden"
    >
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        data-aos="fade-up"
      >
        {/* Left Image */}
        <div
          className="w-full"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img
            src="/about.png"
            alt="Car interior"
            className="w-full h-90 rounded-lg object-cover shadow-[0_0_25px_rgba(255,77,36,0.2)]"
          />
        </div>

        {/* Right Text Section */}
        <div
          className="space-y-4"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
            About Us
          </h2>

          <p className="text-lg md:text-xl font-medium mb-6 text-gray-100">
            Driven by passion and powered by generations of expertise.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Based in Leicester, our family-run business spans three generations, combining decades of hands-on experience with modern automotive repairs. Across the Midlands, we’re trusted for our outstanding quality, reliability, and precision.
          </p>

          <p className="text-gray-400 leading-relaxed mt-3">
           Our team is committed to delivering the same level of care and attention — whether it's a Service, MOT, brakes, diagnostic and much more.
          </p>

          <p className="text-gray-400 leading-relaxed mt-3">
           Over the years, we've built our reputation through honesty, craftsmanship, and long-term partnerships with customers who value genuine expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
