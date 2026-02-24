


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
        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Analysis – Performance and Reliability
        </h2>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6">
          We use precision diagnostics to check discs, pads, callipers, and
          fluids, restoring your braking system to factory performance. Our
          technicians ensure smooth, consistent stopping power for everyday
          driving and high-performance vehicles alike.
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
              <span className="font-medium">Expert brake repair:</span> Trusted
              technicians handling all types of brake repairs and replacements
              in Leicester.
            </li>
            <li>
              <span className="font-medium">OEM-quality parts:</span> Pads and
              discs that deliver long-lasting durability, safety, and top-tier
              braking performance.
            </li>
            <li>
              <span className="font-medium">Complete brake fluid service:</span>{" "}
              Full flushes to prevent corrosion, improve pressure, and maintain
              consistent braking response.
            </li>
          </ul>
        </div>

        {/* Subsection: Responsiveness */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">Responsiveness</h3>
          <p className="text-gray-300 leading-relaxed">
            Expect instant braking response and enhanced safety. We deliver
            balanced stopping power that adapts to your driving style and road
            conditions, ensuring peace of mind with every trip.
          </p>
        </div>
      </div>
    </section>
  );
}
