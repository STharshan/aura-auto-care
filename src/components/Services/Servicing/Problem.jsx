


export default function ProblemSection() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
      {/* === Videos Grid === */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Video 1 */}
        <div className="relative rounded-2xl border border-gray-700 overflow-hidden bg-[#0f0f0f] shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] aspect-video">
          <video
            src="/servcing1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Video 2 */}
        <div className="relative rounded-2xl border border-gray-700 overflow-hidden bg-[#0f0f0f] shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] aspect-video">
          <video
            src="/servicing.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* === Text Section === */}
      <div className="max-w-4xl text-center md:text-left space-y-6">
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          Servicing{" "}
            <span className="bg-blue-600 text-xs text-white font-medium px-2 py-0.5 rounded-md">
              TT Auto
            </span>
          </h3>

          <p className="text-gray-300 leading-relaxed">
           Regular servicing is the key to keeping your car running efficiently and avoiding costly repairs later. We provide interim, full, and major vehicle servicing in Leicester, tailored to your car’s make and mileage. Every service includes oil and filter changes, fluid top-ups, and a multi-point inspection.
          </p>

          <p className="text-gray-300 leading-relaxed mt-4">
          Our experienced technicians use premium oils and OEM parts to protect your engine and extend its life. From family cars to high-performance vehicles, we help keep your vehicle smooth, economical, and road-ready all year. Book your Leicester car service today and experience the difference proper maintenance makes.
          </p>
        </div>
      </div>
    </section>
  );
}
