export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
      {/* Image Container */}
      <div className="w-full max-w-5xl rounded-2xl border border-gray-700 overflow-hidden mb-10">
        <div className="bg-[#1a1a1a] flex items-center justify-center p-8 md:p-12">
          <img
            src="/logo-white.png"
            alt="Scheduled Vehicle Care"
            className="w-64 sm:w-72 md:w-80 lg:w-96 object-contain"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-4xl text-center md:text-left">
        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Analysis – Scheduled Vehicle Care
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-300 leading-relaxed mb-6">
          Our maintenance plans provide scheduled cleaning, detailing, and protective treatments to preserve your vehicle’s appearance and value. Plans are tailored to driving habits, vehicle type, and protection requirements. This service is ideal for ceramic-coated vehicles or high-value cars requiring consistent upkeep.
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
            <li>Regular interior and exterior maintenance cleans</li>
            <li>Periodic paint protection top-ups</li>
            <li>Scheduled inspections and detailing reports</li>
            <li>Custom maintenance schedules (monthly, quarterly, or bespoke)</li>
          </ul>
        </div>

        {/* Subsection: Responsiveness */}
        <div className="text-left p-3">
          <h3 className="text-lg font-semibold mb-2">Responsiveness</h3>
          <p className="text-gray-300 leading-relaxed">
            Our maintenance plans are designed for convenience, with flexible scheduling, priority booking, and consistent professional care to ensure your vehicle remains in premium condition.
          </p>
        </div>
      </div>
    </section>
  );
}