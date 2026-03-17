import React, { useState, useRef, useEffect } from "react";

function TransformationCard({ item, index }) {
  const [isAfter, setIsAfter] = useState(false);
  const beforeRef = useRef(null);
  const afterRef = useRef(null);

  // Handle video play/pause
  useEffect(() => {
    if (item?.type === "video") {
      if (isAfter) {
        afterRef.current?.play().catch(() => {});
        beforeRef.current?.pause();
      } else {
        beforeRef.current?.play().catch(() => {});
        afterRef.current?.pause();
      }
    }
  }, [isAfter, item]);

  return (
    <div className="rounded-4xl overflow-hidden border border-white/10 bg-linear-to-br from-[#151515] to-[#0b0b0b] flex flex-col h-full shadow-xl hover:border-[#e80202]/40 transition-all duration-500">

      {/* MEDIA SECTION */}
      <div className="relative w-full h-75 md:h-88 overflow-hidden bg-black">

        {/* BEFORE */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            !isAfter ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {item?.type === "video" ? (
            <video
              ref={beforeRef}
              src={item.beforeVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={item?.before}
              alt="Before"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* AFTER */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isAfter ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {item?.type === "video" ? (
            <video
              ref={afterRef}
              src={item.afterVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={item?.after}
              alt="After"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* STATUS BADGE */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className={`px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-xl transition-all ${
              isAfter ? "bg-[#e80202] text-white" : "bg-white text-black"
            }`}
          >
            {isAfter ? "After" : "Before"}
          </span>
        </div>

        {/* CARD NUMBER */}
        <div className="absolute top-4 right-4 z-20">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white text-xs font-black backdrop-blur-sm">
            0{index + 1}
          </span>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-2 p-1 bg-[#111] border border-white/10 rounded-xl">
          <button
            onClick={() => setIsAfter(false)}
            className={`py-3 rounded-lg text-xs font-black transition-all ${
              !isAfter
                ? "bg-[#e80202] text-white shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            BEFORE
          </button>

          <button
            onClick={() => setIsAfter(true)}
            className={`py-3 rounded-lg text-xs font-black transition-all ${
              isAfter
                ? "bg-[#e80202] text-white shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            AFTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection({ data }) {
  return (
    <section className="bg-linear-to-b from-black via-[#0b0b0b] to-[#1a1a1a] py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-2xl md:text-6xl font-black text-white">
            THE{" "}
            <span className="text-[#e80202]">
              TRANSFORMATION
            </span>
          </h2>

          <p className="text-gray-400 font-bold text-xs tracking-widest uppercase">
            Real results, Professional finish
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.map((item, index) => (
            <TransformationCard
              key={item.id || index}
              item={item}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}