import React from "react";

export default function ServingAreasSection({ areas, title, subtitle, footer }) {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-serif">
            {title}
          </h2>
          <p className="text-lg text-[#B0B0B0]">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-[#e80202] to-[#a80000] 
              border border-white/10 
              rounded-lg p-4 
              shadow-[0_0_20px_rgba(232,2,2,0.25)] 
              hover:shadow-[0_0_35px_rgba(232,2,2,0.6)] 
              hover:scale-105
              transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 text-white group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm leading-tight text-white">
                    {area}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-[#B0B0B0] mb-3">
            Don’t see your area listed?
          </p>
          <p className="text-sm text-[#B0B0B0] max-w-2xl mx-auto">
            {footer}
          </p>
        </div>

      </div>
    </section>
  );
}