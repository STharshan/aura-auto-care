


export default function ProblemSection() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
      {/* === Videos Grid === */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Video 1 */}
        <div className="relative rounded-2xl border border-gray-700 overflow-hidden bg-[#0f0f0f] shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] aspect-video">
          <video
            src="/suspention1.mp4"
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
            src="/suspention2.mp4"
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
           Suspension{" "}
            <span className="bg-blue-600 text-xs text-white font-medium px-2 py-0.5 rounded-md">
              TT Auto
            </span>
          </h3>

          <p className="text-gray-300 leading-relaxed">
           A healthy suspension system makes every drive smoother, safer, and more controlled. At our Leicester workshop, we offer <strong> suspension repair and replacement services </strong> that restore handling, comfort, and stability. Our experts check shocks, springs, and linkages for wear or leaks using advanced testing equipment.
          </p>

          <p className="text-gray-300 leading-relaxed mt-4">
           We fix everything from uneven tyre wear to noisy suspension joints with high-quality parts. Whether you need a full overhaul or minor adjustment, our <strong>Midlands suspension specialists </strong> ensure your car feels balanced, comfortable, and safe on every road.
          </p>
        </div>
      </div>
    </section>
  );
}
