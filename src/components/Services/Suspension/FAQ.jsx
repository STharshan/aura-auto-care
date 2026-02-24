
import React, { useState, useRef, useEffect } from "react";
import { Plus, X } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Suspension-specific FAQs
  const faqs = [
    {
      question: "What does the suspension system do?",
      answer:
        "Your vehicle’s suspension system is designed to absorb shocks, improve handling, and keep tyres in contact with the road. It ensures a smooth, safe ride by balancing comfort and stability — especially over uneven surfaces.",
    },
    {
      question: "What are the signs of suspension problems?",
      answer:
        "Common signs include clunking noises, uneven tyre wear, poor handling or steering response, vehicle pulling to one side, or the car sitting lower on one corner. If you notice these, it’s best to have your suspension inspected.",
    },
    {
      question: "How often should my suspension be checked?",
      answer:
        "We recommend a suspension inspection at least once a year or every 12,000 miles. Regular checks catch worn shocks, struts, or bushes early — preventing further damage to tyres and steering components.",
    },
    {
      question: "What’s included in a suspension service?",
      answer:
        "Our suspension service includes a comprehensive check of shocks, struts, springs, control arms, and bushes. We assess wear, leaks, and alignment, then repair or replace any damaged parts to restore ride quality and safety.",
    },
    {
      question: "Can bad suspension affect tyre wear or fuel economy?",
      answer:
        "Yes. Worn suspension parts can cause uneven tyre wear, increased rolling resistance, and reduced fuel efficiency. Proper suspension maintenance helps extend tyre life and ensures smoother, more efficient driving.",
    },
    {
      question: "Do you offer wheel alignment with suspension repairs?",
      answer:
        "Yes. After suspension work, we always recommend a wheel alignment to ensure correct tracking and handling. This helps protect your tyres and maintain safe, stable performance.",
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
              Suspension Service FAQs
            </button>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Frequently
              <br /> Asked Questions
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              Find answers about suspension maintenance, repair, and performance
              — helping you enjoy a smoother, safer drive.
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
