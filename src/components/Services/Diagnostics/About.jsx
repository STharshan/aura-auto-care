


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
          Analysis – Accuracy and Speed
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          We carry out thorough vehicle inspections to identify mechanical and visible issues before they become major problems. Our experienced technicians assess key components to ensure your vehicle remains safe, reliable, and roadworthy—helping you avoid costly repairs and unexpected breakdowns.
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
              Reliable vehicle diagnostics and inspections in Leicester and the Midlands.
            </li>
            <li>
              Mechanical fault checks and visual inspections.
            </li>
            <li>
              Brake, suspension, and steering system assessments.
            </li>
            <li>
              Engine performance and general vehicle health checks
            </li>
          </ul>
        </div>

        {/* Subsection: Responsiveness */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">Responsiveness</h3>
          <p className="text-gray-300 leading-relaxed">
            We provide fast and transparent inspections, explaining any issues clearly and recommending the most effective repair solutions. Our efficient service ensures minimal downtime and maximum peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}
