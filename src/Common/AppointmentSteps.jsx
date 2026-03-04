import React from "react";
// Import the specific icons from lucide-react
import { Calendar, Eye, Sparkles, Heart } from "lucide-react";

const StepIcon = ({ type }) => {
  // Map your data types to the Lucide components
  const icons = {
    planning: Calendar,
    inspection: Eye,
    fitting: Sparkles,
    safety: Heart,
  };

  const IconComponent = icons[type];

  // If the type doesn't match, return null to prevent crashes
  if (!IconComponent) return null;

  return (
    <IconComponent
      size={40}
      strokeWidth={2}
      className="text-white"
    />
  );
};

export default function AppointmentSteps({ data }) {
  if (!data) return null;

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            {data.mainTitle}
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-[linear-gradient(to_right,#e8020222,#e80202,#e8020222)]" />

          <div className="grid md:grid-cols-4 gap-10 relative">
            {data.steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-[#e80202] flex items-center justify-center mb-6 shadow-md group-hover:bg-[#e43333] group-hover:scale-110 transition-all duration-300">
                  <StepIcon type={step.iconType} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EAF7F3] text-[#e80202] font-bold text-sm mb-2">
                    {step.id}
                  </div>
                  <h3 className="font-semibold text-lg text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#B0B0B0]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Box */}
        <div className="mt-16 p-6 md:p-8 max-w-2xl mx-auto rounded-2xl bg-[#e80202]/10 border border-[#e80202]/30 text-center">
          <p className="text-base md:text-lg text-white leading-relaxed">
            <span className="font-semibold ">
              Valeting services range from 2-5 hrs<br />

              Paint correction services range from 8-12 hrs<br />

              Ceramic coating services range from 1-3 days
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}