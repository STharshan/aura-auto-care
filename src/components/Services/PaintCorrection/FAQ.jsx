
import React, { useState, useRef, useEffect } from "react";
import { Plus, X } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Timing Belt FAQs
  const faqs = [
    {
      question: "What does a timing belt do?",
      answer:
        "The timing belt synchronises the engine’s camshaft and crankshaft, ensuring the valves and pistons move in perfect timing. If it fails, it can cause severe engine damage, making timely replacement crucial.",
    },
    {
      question: "How often should I replace my timing belt?",
      answer:
        "Most manufacturers recommend replacing the timing belt every 60,000 to 100,000 miles or every 5 to 7 years, whichever comes first. Always refer to your vehicle’s service manual or ask us to check the recommended interval for your car.",
    },
    {
      question: "What are the signs of a worn or failing timing belt?",
      answer:
        "Common symptoms include ticking noises from the engine, difficulty starting, engine misfires, or visible cracks or fraying on the belt. However, timing belts can fail without warning, so preventative replacement is always safest.",
    },
    {
      question: "What happens if my timing belt breaks while driving?",
      answer:
        "A snapped timing belt can cause serious engine damage, including bent valves, damaged pistons, and even a complete engine rebuild. Replacing the belt on schedule avoids costly repairs and keeps your engine running smoothly.",
    },
    {
      question: "What’s included in a timing belt replacement?",
      answer:
        "Our timing belt service includes removing the old belt, installing a new belt and tensioner, and checking pulleys and water pump (often replaced at the same time for reliability). We use manufacturer-approved parts to ensure long-term performance.",
    },
    {
      question: "How long does it take to replace a timing belt?",
      answer:
        "Depending on the vehicle, a timing belt replacement usually takes 3 to 5 hours. We’ll confirm the exact time and cost before starting any work, ensuring transparency and peace of mind.",
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
              Timing Belt FAQs
            </button>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Frequently
              <br /> Asked Questions
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              Learn when and why to replace your timing belt to keep your engine
              running smoothly and avoid costly damage.
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
