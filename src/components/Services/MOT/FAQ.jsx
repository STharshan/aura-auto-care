
import React, { useState, useRef, useEffect } from "react";
import { Plus, X } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ MOT-specific FAQs (with the new question added)
  const faqs = [
    {
      question: "What is an MOT test?",
      answer:
        "An MOT (Ministry of Transport) test is an annual inspection required by law to ensure your vehicle meets road safety and environmental standards. It checks key components such as brakes, lights, tyres, suspension, and emissions.",
    },
    {
      question: "When is my car due for its MOT?",
      answer:
        "Your MOT is due every 12 months from the date of your last test. You can check your MOT expiry date on your latest certificate or via the official DVLA MOT checker online. It’s best to book your MOT up to a month before it expires.",
    },
    {
      question: "How long does an MOT take?",
      answer:
        "A standard MOT test usually takes around 45–60 minutes. If repairs are needed, we’ll let you know before starting any additional work and can often handle minor fixes the same day.",
    },
    {
      question: "What happens if my car fails its MOT?",
      answer:
        "If your vehicle fails, you’ll receive a VT30 certificate listing the reasons. You can have the repairs done with us and get a free retest within 10 working days, ensuring your vehicle is safe and road-legal again.",
    },
    {
      question: "Can I drive my car without an MOT?",
      answer:
        "No — driving without a valid MOT certificate is illegal (except when driving to a pre-booked MOT appointment). You could face a fine of up to £1,000 and your insurance may be invalid.",
    },
    {
      question: "Do you offer MOT and servicing together?",
      answer:
        "Yes. Many customers choose to combine their MOT with a full or interim service, saving time and money while ensuring the vehicle runs smoothly all year round.",
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
              MOT Testing FAQs
            </button>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Frequently
              <br /> Asked Questions
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              Everything you need to know about MOT testing — from when your car
              is due to what happens if it fails.
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
