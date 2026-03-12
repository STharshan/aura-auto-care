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
        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Analysis – Intensive Vehicle Reconditioning
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-300 leading-relaxed mb-6">
          Our deep restoration service is designed for vehicles that require extensive cleaning and cosmetic restoration.
          This includes deep interior cleaning, exterior decontamination, and paint revitalisation to restore the vehicle
          to a near-new condition.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          Ideal for pre-sale preparation, newly purchased vehicles, or heavily used cars.
        </p>

        {/* Subsection: Performance */}
        <div className="text-left mb-6 p-3">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            Performance{" "}
            <span className="bg-blue-600 text-xs text-white font-medium px-2 py-0.5 rounded-md">
              Aura AutoCare
            </span>
          </h3>

          <ul className="text-gray-300 leading-relaxed list-disc list-inside space-y-1">
            <li>Deep interior cleaning and stain removal</li>
            <li>Exterior decontamination and tar/iron removal</li>
            <li>Paint enhancement polishing</li>
            <li>Trim and plastic restoration treatments</li>
          </ul>
        </div>

        {/* Subsection: Responsiveness */}
        <div className="text-left p-3">
          <h3 className="text-lg font-semibold mb-2">Responsiveness</h3>
          <p className="text-gray-300 leading-relaxed">
            We deliver structured, intensive restoration with minimal disruption, providing clear progress updates and professional finishing standards.
          </p>
        </div>
      </div>
    </section>
  );
}