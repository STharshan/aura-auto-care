import React from "react";

const PricingSection = () => {
  const plans = [
    {
      name: "Essential · 3 year",
      price: "£450",
      features: [
        "Complete exterior wash, decontamination, iron & tar removal",
        "Clay bar treatment",
        "Single-stage machine polish to restore gloss and clarity",
        "Ceramic coating to paintwork, wheels, glass and exterior trims"
      ],
      highlight: false
    },
    {
      name: "Advanced · 5 year",
      price: "£600",
      features: [
        "Full interior and exterior wash with complete decontamination",
        "Clay bar treatment",
        "1–2 stage paint correction for improved clarity, depth and swirl removal",
        "Carbon Collective Nero Self-Healing Coating to paintwork, wheels, glass and trims"
      ],
      highlight: true
    },
    {
      name: "Signature · 7 year",
      price: "£750",
      features: [
        "Multi-stage wash, full decontamination and paint correction for mirror clarity",
        "Clay bar treatment",
        "Molecule 9H topped with Nero Self-Healing Coating for maximum durability and depth",
        "Full exterior and interior protection — trims, glass, wheels, calipers, seats and leather",
      ],
      highlight: false
    }
  ];

  return (
    <section className="bg-linear-to-b from-black via-[#0b0b0b] to-[#1a1a1a] py-16 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-10">What's included</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border border-white/10 transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#111] border-[#e80202]/40 shadow-[0_0_25px_rgba(134,25,24,0.25)] scale-105"
                  : "bg-linear-to-br from-[#151515] to-[#0b0b0b] hover:border-[#e80202]/40"
              }`}
            >
              <p
                className={`text-xs font-bold tracking-widest mb-4 ${
                  plan.highlight ? "text-[#e80202]" : "text-gray-400"
                }`}
              >
                {plan.name}
              </p>

              <p
                className={`text-3xl font-bold mb-8 ${
                  plan.highlight ? "text-[#e80202]" : "text-white"
                }`}
              >
                {plan.price}
              </p>

              <ul className="space-y-5">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                        plan.highlight ? "bg-[#e80202]" : "bg-gray-500"
                      }`}
                    />
                    <p
                      className={`text-[15px] leading-relaxed ${
                        plan.highlight
                          ? "text-gray-200 font-medium"
                          : "text-gray-400"
                      }`}
                    >
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;