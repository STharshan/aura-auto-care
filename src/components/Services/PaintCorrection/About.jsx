export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
      {/* Image Container */}
      <div className="w-full max-w-5xl rounded-2xl border border-gray-700 overflow-hidden mb-10">
        <div className="bg-[#1a1a1a] flex items-center justify-center p-8 md:p-12">
          <img
            src="/logo-white.png"
            alt="Aura AutoCare"
            className="w-64 sm:w-72 md:w-80 lg:w-96 object-contain"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-4xl text-center md:text-left">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Analysis – Paint Defect Removal & Refinement
        </h2>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6">
          We perform multi-stage machine polishing to correct paint defects such as
          swirl marks, scratches, oxidation, and haze. Our process restores clarity,
          gloss, and depth while preserving the integrity of the clear coat.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          Paint correction is recommended before ceramic coating or for vehicles requiring
          a high-end finish.
        </p>

        {/* Subsection: Performance */}
        <div className="text-left mb-6">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            Performance{" "}
            <span className="bg-blue-600 text-xs text-white font-medium px-2 py-0.5 rounded-md">
              Aura AutoCare
            </span>
          </h3>

          <ul className="text-gray-300 leading-relaxed list-disc list-inside space-y-1">
            <li>Paint inspection and defect assessment</li>
            <li>Multi-stage machine polishing with professional compounds</li>
            <li>Refining polish for enhanced gloss and clarity</li>
            <li>Optional protective sealant or coating application</li>
          </ul>
        </div>

        {/* Subsection: Responsiveness */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">Responsiveness</h3>
          <p className="text-gray-300 leading-relaxed">
            Our paint correction process is tailored for each vehicle, balancing precision
            and efficiency while delivering premium results with clear communication and
            aftercare guidance.
          </p>
        </div>
      </div>
    </section>
  );
}