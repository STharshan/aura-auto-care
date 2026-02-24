
import React, { useState, useRef, useEffect } from "react";
import { Plus, X } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Air Conditioning FAQs
  const faqs = [
    {
      question: "Why does my car’s air conditioning need servicing?",
      answer:
        "Over time, your air con system can lose refrigerant gas and accumulate bacteria or moisture, reducing its cooling performance. Regular servicing ensures efficient cooling, clean air, and proper lubrication of system components.",
    },
    {
      question: "How often should I service my car’s air conditioning?",
      answer:
        "We recommend an air con service every 18 to 24 months. Regular maintenance prevents bad odours, maintains fuel efficiency, and keeps your system running smoothly — especially before summer months.",
    },
    {
      question: "What’s included in an air conditioning service?",
      answer:
        "Our air con service includes system pressure testing, leak detection, re-gassing (recharging refrigerant), cleaning filters, and checking compressor performance. We also perform an antibacterial clean to eliminate odours and improve air quality.",
    },
    {
      question: "Why isn’t my air conditioning blowing cold air?",
      answer:
        "This is often caused by low refrigerant levels, blocked filters, or a faulty compressor. A diagnostic test can quickly identify the issue — most problems are easily fixed with a re-gas or minor repair.",
    },
    {
      question: "Can using air conditioning increase fuel consumption?",
      answer:
        "Slightly, yes — but a well-maintained system runs efficiently and keeps the impact minimal. Neglected systems, however, force the compressor to work harder, increasing fuel use and wear on engine components.",
    },
    {
      question: "Do you offer air con re-gas and repairs for all vehicles?",
      answer:
        "Yes. We provide re-gassing and repairs for all makes and models, including R134a and R1234yf gas systems used in newer cars. Our trained technicians ensure the system is recharged safely and performs at its best.",
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
              Air Conditioning FAQs
            </button>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Frequently
              <br /> Asked Questions
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              Stay cool and comfortable all year round — here’s everything you
              need to know about our air conditioning servicing and repairs.
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
