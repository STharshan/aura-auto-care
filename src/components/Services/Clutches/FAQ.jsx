
import React, { useState, useRef, useEffect } from "react";
import { Plus, X } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Clutch-specific FAQs
  const faqs = [
    {
      question: "How do I know if my clutch needs replacing?",
      answer:
        "Common warning signs include slipping gears, difficulty changing gears, a burning smell, or a high biting point on the pedal. You might also notice unusual noises or vibration when pressing the clutch pedal. If you experience any of these, it’s best to have your clutch inspected promptly.",
    },
    {
      question: "How long should a clutch last?",
      answer:
        "A clutch typically lasts between 50,000 and 100,000 miles, depending on driving style, vehicle type, and usage. Frequent stop-start driving or towing can shorten its lifespan.",
    },
    {
      question: "What’s included in a clutch replacement?",
      answer:
        "Our clutch replacement service includes removing the old clutch, installing a new clutch plate, pressure plate, and release bearing, and checking the flywheel and hydraulics. All components are tested to ensure smooth performance before returning your vehicle.",
    },
    {
      question: "Can I still drive with a worn clutch?",
      answer:
        "Driving with a worn clutch can cause further transmission damage and unsafe gear changes. If you notice any slipping or unusual pedal feel, it’s best to get it checked immediately to avoid a complete clutch failure.",
    },
    {
      question: "How long does it take to replace a clutch?",
      answer:
        "A clutch replacement generally takes between 3 to 6 hours, depending on the make and model of the vehicle. We’ll always provide a clear time and cost estimate before starting any work.",
    },
    {
      question: "Do you use genuine or aftermarket clutch parts?",
      answer:
        "We use OEM-quality or manufacturer-approved parts for all clutch repairs and replacements. This ensures reliability, smooth gear shifts, and full compatibility with your vehicle.",
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
              Clutch Service FAQs
            </button>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Frequently
              <br /> Asked Questions
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              Everything you need to know about clutch maintenance, repair, and
              replacement — helping you drive smoothly and safely.
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
