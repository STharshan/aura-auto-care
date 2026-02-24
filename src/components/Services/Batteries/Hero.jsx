


export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white px-6 py-20 overflow-hidden bg-black"
    >
      {/* === Inline Animation Styles === */}
      <style>{`
        @keyframes glowOne {
          0%, 100% {
            transform: translateX(17px) translateY(24px) rotate(-1.7deg) skewY(1.7deg);
            opacity: 0.25;
          }
          50% {
            transform: translateX(-20px) translateY(-15px) rotate(1deg) skewY(-1deg);
            opacity: 0.5;
          }
        }

        @keyframes glowTwo {
          0%, 100% {
            transform: translateX(-3px) translateY(20px) rotate(-0.3deg) skewX(0.15deg) skewY(0.15deg);
            opacity: 0.25;
          }
          50% {
            transform: translateX(25px) translateY(-25px) rotate(1deg) skewX(-0.15deg) skewY(-0.15deg);
            opacity: 0.5;
          }
        }

        .glowOne {
          animation: glowOne 12s ease-in-out infinite alternate;
        }
        .glowTwo {
          animation: glowTwo 15s ease-in-out infinite alternate;
        }
      `}</style>

      {/* === Red & Blue Glowing Backgrounds === */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Red Glow */}
        <div className="absolute w-[600px] h-[600px] bg-[#ff0033]/30 blur-[140px] rounded-full glowOne top-1/3 left-1/4"></div>
        {/* Blue Glow */}
        <div className="absolute w-[500px] h-[500px] bg-[#003cff]/25 blur-[120px] rounded-full glowTwo bottom-1/3 right-1/4"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        {/* ===== Left Section ===== */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            <span className="block bg-gradient-to-r from-red-500 via-white to-gray-400 bg-clip-text text-transparent">
              Batteries
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
           Testing, replacement, and charging system checks to keep your car starting reliably.
          </p>

          {/* Tags */}
          <div className="flex gap-4 pt-4">
            <div className="px-5 py-2 bg-gradient-to-t from-[#ff003333] to-[#9999991a] border border-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-white text-sm font-medium">Batteries</p>
            </div>
            <div className="px-5 py-2 bg-gradient-to-t from-[#003cff33] to-[#9999991a] border border-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-white text-sm font-medium">Service</p>
            </div>
          </div>
        </div>

        {/* ===== Right Card ===== */}
        <div className="relative bg-gradient-to-br from-[#1a0000] via-[#0a0a0a] to-[#001b3f] rounded-2xl p-10 border border-white/10 shadow-[0_0_80px_-20px_rgba(255,0,0,0.5)] overflow-hidden">
          {/* Background pattern */}
          <img
            src="https://framerusercontent.com/images/QMirkdl4WPEe5bmSFhvVcssWj4.svg"
            alt="Star line glow"
            className="absolute bottom-0 right-0 w-[200px] h-[200px] opacity-20 pointer-events-none select-none"
          />

          {/* Content */}
          <div className="space-y-6 relative z-10">
            <div>
              <p className="text-white/60 text-sm">Services</p>
              <h4 className="text-xl font-semibold">
            Battery Testing & Replacement
              </h4>
            </div>

            <div className="h-px bg-white/10"></div>

            <div>
              <p className="text-white/60 text-sm">Category</p>
              <h4 className="text-xl font-semibold">
               Electrical Systems
              </h4>
            </div>

            <div className="h-px bg-white/10"></div>

            <div>
              <p className="text-white/60 text-sm">Client</p>
              <h4 className="text-xl font-semibold">
            Private & Fleet Vehicles
              </h4>
            </div>

            {/* Book Now Button */}
            <a
              href="tel:01162530770"
              className="inline-block mt-6 px-6 py-3 bg-[#ff0033] hover:bg-[#cc002a] rounded-lg font-medium text-white shadow-[0_8px_30px_rgba(255,0,0,0.5)] border-2 border-[#ff0033]/30 transition-all"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
