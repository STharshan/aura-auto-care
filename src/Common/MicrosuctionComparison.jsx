import React from "react";

// Service Icon (Red Stroke)
const ServiceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e80202"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default function ServicesSection({ data }) {
  if (!data) return null;

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            {data.mainTitle}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {data.services.map((service, index) => {
            const isLastOdd =
              index === data.services.length - 1 &&
              data.services.length % 2 !== 0;

            return (
              <div
                key={index}
                className={`bg-linear-to-br from-[#e80202] to-[#a80000]
                rounded-2xl p-8 border border-white/10
                shadow-[0_0_25px_rgba(232,2,2,0.35)]
                hover:shadow-[0_0_40px_rgba(232,2,2,0.6)]
                transition-all duration-300 transform hover:-translate-y-1
                ${
                  isLastOdd
                    ? "md:col-span-2 md:max-w-2xl md:mx-auto"
                    : ""
                }`}
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white shrink-0 shadow-md">
                    <ServiceIcon />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Description List */}
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>

                    <span className="text-lg leading-relaxed text-white/80">
                      {service.description}
                    </span>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}