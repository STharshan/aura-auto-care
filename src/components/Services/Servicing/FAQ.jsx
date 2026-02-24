
import React, { useState, useRef, useEffect } from "react";
import { Plus, X } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Servicing-specific FAQs
  const faqs = [
    {
      question: "Why is regular car servicing important?",
      answer:
        "Regular servicing keeps your vehicle safe, reliable, and fuel-efficient. It helps identify issues early, extends engine life, and ensures your car continues to perform at its best — saving you money on costly repairs down the line.",
    },
    {
      question: "How often should I service my car?",
      answer:
        "Most vehicles should be serviced every 12 months or 10,000 miles, whichever comes first. For high-mileage or performance vehicles, we recommend interim services every 6 months to maintain top performance and reliability.",
    },
    {
      question: "What’s included in a car service?",
      answer:
        "A standard service includes engine oil and filter change, fluid top-ups, brake and tyre checks, battery testing, and a comprehensive vehicle health inspection. Full or major services cover additional parts like air filters, spark plugs, and cabin filters.",
    },
    {
      question: "What’s the difference between an interim and full service?",
      answer:
        "An interim service covers the essentials — ideal for drivers covering lots of miles between annual services. A full service is more detailed, ensuring all critical components are inspected, cleaned, and replaced where required.",
    },
    {
      question: "Will servicing improve my fuel efficiency?",
      answer:
        "Yes — clean oil, new filters, and properly tuned parts mean your engine runs more smoothly and efficiently, helping reduce fuel consumption and emissions.",
    },
    {
      question: "Can you service my car without affecting the manufacturer warranty?",
      answer:
        "Absolutely. We follow manufacturer-approved schedules and use OEM-quality parts, ensuring your warranty remains valid and your service history stays up to date for resale value.",
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
              Car Servicing FAQs
            </button>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Frequently
              <br /> Asked Questions
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              Learn how regular servicing helps maintain your vehicle’s
              performance, safety, and efficiency while protecting your
              investment.
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
