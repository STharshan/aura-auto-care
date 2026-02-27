
import React, { useState, useRef, useEffect } from "react";
import { Plus, X } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Brake-specific FAQs
  const faqs = [
    {
      question: "How do I know if my brakes need servicing?",
      answer:
        "Common signs include squealing or grinding noises, a soft or spongy brake pedal, vibrations when braking, or your car pulling to one side. If you notice any of these, it’s best to have your brakes checked immediately for safety.",
    },
    {
      question: "How often should I have my brakes checked?",
      answer:
        "We recommend a brake inspection at least once a year or every 10,000–12,000 miles. However, driving habits, road conditions, and vehicle type can affect wear — regular checks help prevent costly repairs.",
    },
    {
      question: "What does a brake service include?",
      answer:
        "A full brake service includes inspection of brake pads, discs, calipers, fluid, and lines. We clean components, check fluid levels, and replace worn parts to ensure maximum stopping power and safety.",
    },
    {
      question: "What’s the difference between brake pads and brake discs?",
      answer:
        "Brake pads press against the brake discs (rotors) to slow your car down. Both wear out over time — pads usually need replacing first, while discs last longer but also require periodic replacement for optimal performance.",
    },
    {
      question: "How long do brake pads last?",
      answer:
        "Brake pads typically last between 25,000–50,000 miles, depending on your driving style and vehicle type. Urban driving with frequent braking can cause faster wear, so regular inspections are key.",
    },
    {
      question: "Do you offer same-day brake repairs?",
      answer:
        "Yes. In most cases, we can perform same-day brake pad or disc replacements. We keep a range of high-quality parts in stock, ensuring your vehicle is safe and back on the road quickly.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* === Left Column: Header === */}
          <div className="lg:pr-8">
            <button className="inline-flex items-center gap-2 text-gray-400 text-sm mb-6 hover:text-white transition-colors">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              Brake Service FAQs
            </button>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Frequently
              <br /> Asked Questions
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              Learn everything you need to know about our brake inspections,
              repairs, and maintenance to keep your car safe on the road.
            </p>
          </div>

          {/* === Right Column: FAQ Items === */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const contentRef = useRef(null);
              const [height, setHeight] = useState(0);

              useEffect(() => {
                if (openIndex === index && contentRef.current) {
                  setHeight(contentRef.current.scrollHeight);
                } else {
                  setHeight(0);
                }
              }, [openIndex]);

              return (
                <div
                  key={index}
                  className="border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-700"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between duration-300 p-5 sm:p-6 text-left bg-transparent hover:bg-gray-900/30 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-medium pr-4">
                      {faq.question}
                    </span>
                    <div className="shrink-0">
                      {openIndex === index ? (
                        <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                      ) : (
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                      )}
                    </div>
                  </button>

                  <div
                    style={{ maxHeight: `${height}px` }}
                    className="transition-all duration-500 ease-in-out overflow-hidden"
                  >
                    <div
                      ref={contentRef}
                      className={`px-5 sm:px-6 pb-5 sm:pb-6 pt-0 transition-opacity duration-500 ${
                        openIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
