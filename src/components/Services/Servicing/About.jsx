


export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
      {/* Image Container */}
      <div className="w-full max-w-5xl rounded-2xl border border-gray-700 overflow-hidden mb-10">
        <div className="bg-[#1a1a1a] flex items-center justify-center p-8 md:p-12">
          <img
            src="/logo-white.png"
            alt="Performance Spray Cans"
            className="w-64 sm:w-72 md:w-80 lg:w-96 object-contain"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-4xl text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
       Analysis – Longevity and Efficiency
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
      We perform detailed interim and full servicing using high-quality oils, filters, and fluids. Every service includes essential checks to maintain peak performance and reliability.
        </p>

        {/* Subsection: Performance */}
       <div className="text-left mb-6">
  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
    Performance{" "}
    <span className="bg-blue-600 text-xs text-white font-medium px-2 py-0.5 rounded-md">
      TT Auto
    </span>
  </h3>

  <ul className="text-gray-300 leading-relaxed list-disc list-inside space-y-1">
    <li>
      Professional car servicing in Leicester for all makes and models.
    </li>
    <li>
   Full fluid top-ups, oil changes, and health checks
    </li>
    <li>
     Increases vehicle lifespan and fuel efficiency.
    </li>
  </ul>
</div>

        {/* Subsection: Responsiveness */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">Responsiveness</h3>
          <p className="text-gray-300 leading-relaxed">
          Regular servicing ensures smoother performance, quieter operation, and reduced emissions — keeping your car running like new all year round.
          </p>
        </div>
      </div>
    </section>
  );
}
