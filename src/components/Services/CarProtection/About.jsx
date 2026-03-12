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
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Analysis – Full-Vehicle Ceramic Protection
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          Our protection packages are designed to deliver complete, long-lasting
          ceramic protection across every exterior surface of your vehicle. From
          thorough decontamination and machine polishing through to professional
          coating application, each package is tailored to the level of
          protection and finish your vehicle deserves.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          Every package uses premium Carbon Collective ceramic products,
          applied under controlled conditions to ensure consistent bonding,
          maximum durability, and a finish that performs as well as it looks.
        </p>

        {/* Performance */}
        <div className="text-left mb-6 p-3">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            Performance
            <span className="bg-blue-600 text-xs text-white font-medium px-2 py-0.5 rounded-md">
              Aura AutoCare
            </span>
          </h3>

          <ul className="text-gray-300 leading-relaxed list-disc list-inside space-y-1">
            <li>
              Full exterior decontamination including iron, tar removal and clay
              bar treatment
            </li>
            <li>
              Machine polishing and paint correction prior to coating
              application
            </li>
            <li>
              Carbon Collective ceramic coatings applied to paintwork, wheels,
              glass and trims
            </li>
            <li>
              Protection packages available from 3 to 7 years durability
            </li>
          </ul>
        </div>

        {/* Responsiveness */}
        <div className="text-left p-3">
          <h3 className="text-lg font-semibold mb-2">Responsiveness</h3>
          <p className="text-gray-300 leading-relaxed">
            Our protection packages are structured with clear timelines,
            professional preparation, and full aftercare guidance. We manage
            every stage from decontamination to curing to ensure a seamless
            experience and a result that lasts for years, not months.
          </p>
        </div>
      </div>
    </section>
  );
}