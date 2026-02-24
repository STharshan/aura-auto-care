
import React, { useState, useRef, useEffect } from "react";
import { Plus, X } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Diagnostics-specific FAQs
  const faqs = [
    {
      question: "What is a vehicle diagnostic test?",
      answer:
        "A diagnostic test uses specialist computer equipment to read data from your car’s onboard computer. It helps identify faults in systems such as the engine, transmission, brakes, and sensors, allowing us to pinpoint issues quickly and accurately.",
    },
    {
      question: "When should I get a diagnostic test done?",
      answer:
        "You should book a diagnostic test if you see a warning light on your dashboard, notice unusual performance, or experience starting, idling, or fuel economy problems. Regular diagnostics can also help catch potential faults before they turn into costly repairs.",
    },
    {
      question: "What does a diagnostic check include?",
      answer:
        "Our diagnostics service includes scanning the vehicle’s reading and interpreting error codes, and providing a detailed report on any faults detected. We also advise on the best repair or reset options for long-term reliability.",
    },
    {
      question: "How long does a diagnostic test take?",
      answer:
        "A standard diagnostic test usually takes around 30–60 minutes. For complex electrical or intermittent issues, we may need extra time for a full investigation, but we’ll always keep you informed.",
    },
    {
      question: "Can you fix the issues found during diagnostics?",
      answer:
        "Yes. Once the fault is identified, our technicians can carry out the necessary repairs or part replacements using high-quality components. We can often resolve the issue the same day, depending on the nature of the fault.",
    },
    {
      question: "Do you offer diagnostics for all vehicle makes and models?",
      answer:
        "Absolutely. We use the latest multi-brand diagnostic tools, compatible with most modern vehicles, including petrol, diesel, and hybrid systems. Whether it’s a family car or performance vehicle, we can accurately diagnose and repair it.",
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
              Vehicle Diagnostics FAQs
            </button>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Frequently
              <br /> Asked Questions
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              Learn how our advanced diagnostics help identify and fix faults
              quickly, keeping your vehicle reliable and efficient.
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
