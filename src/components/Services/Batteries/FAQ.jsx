
import React, { useState, useRef, useEffect } from "react";
import { Plus, X } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Battery-specific FAQs
  const faqs = [
    {
      question: "How do I know if my car battery needs replacing?",
      answer:
        "Common signs include slow engine cranking, dim headlights, electrical issues, or the battery warning light on your dashboard. If your car struggles to start, it’s best to get the battery tested before it fails completely.",
    },
    {
      question: "How long does a car battery last?",
      answer:
        "Most car batteries last around 3 to 5 years, depending on driving habits, weather, and vehicle use. Regular short trips or long periods without driving can shorten the lifespan.",
    },
    {
      question: "Can you test my car battery health?",
      answer:
        "Yes. We provide a free or low-cost battery health check, measuring voltage, cold-cranking amps, and charging performance to determine whether your battery needs a recharge or replacement.",
    },
    {
      question: "What’s included in your battery replacement service?",
      answer:
        "Our service includes removing the old battery, installing a new, high-performance unit, cleaning terminals, and testing the charging system to ensure everything runs smoothly before you drive away.",
    },
    {
      question: "Can a weak battery affect other parts of my car?",
      answer:
        "Yes — a failing battery can cause electronic faults, dashboard errors, and alternator strain. Replacing it early prevents breakdowns and protects your vehicle’s electrical system.",
    },
    {
      question: "Do you offer mobile battery replacement or emergency starts?",
      answer:
        "Absolutely. If your battery dies, we can come to you for a jump start or on-site replacement, getting you back on the road safely and quickly.",
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
              Battery Service FAQs
            </button>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Frequently
              <br /> Asked Questions
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              Everything you need to know about car battery testing, replacement,
              and maintenance to keep your vehicle powered reliably.
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
