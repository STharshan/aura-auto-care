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
          Analysis – Long-Term Paint Protection
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          We apply premium ceramic coatings to create a durable, hydrophobic
          protective layer over your vehicle’s paintwork. This coating shields
          against UV rays, road grime, bird droppings, and chemical contaminants
          while enhancing gloss and colour depth.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          Each application includes thorough surface preparation and controlled
          coating techniques to ensure maximum durability and performance.
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
            <li>Full exterior decontamination and preparation</li>
            <li>Machine polishing prior to coating application</li>
            <li>
              Professional ceramic coating application in controlled conditions
            </li>
            <li>
              Multiple durability packages available (1–7 year protection)
            </li>
          </ul>
        </div>

        {/* Subsection: Responsiveness */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">Responsiveness</h3>
          <p className="text-gray-300 leading-relaxed">
            Our ceramic coating process is structured for precision and
            efficiency, with clear communication, curing time management, and
            aftercare guidance to ensure long-lasting protection with minimal
            inconvenience.
          </p>
        </div>
      </div>
    </section>
  );
}