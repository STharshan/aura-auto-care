import React from "react";

function VideoCard() {
  return (
    <div className="rounded-4xl overflow-hidden border border-white/10 bg-linear-to-br from-[#151515] to-[#0b0b0b] flex flex-col h-full shadow-xl hover:border-[#e80202]/40 transition-all duration-500">
      
      {/* VIDEO SECTION */}
      <div className="relative w-full h-75 md:h-88 overflow-hidden bg-black">
        <video
          src="/protection.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}

export default function GallerySection() {
  return (
    <section className="bg-linear-to-b from-black via-[#0b0b0b] to-[#1a1a1a] py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-2xl md:text-6xl font-black text-white">
            THE{" "}
            <span className="text-[#e80202]">TRANSFORMATION</span>
          </h2>

          <p className="text-gray-400 font-bold text-xs tracking-widest uppercase">
            Real results, Professional finish
          </p>
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 gap-10">
          <VideoCard />
        </div>

      </div>
    </section>
  );
}