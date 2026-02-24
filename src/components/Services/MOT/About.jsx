


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
        Analysis – Compliance and Safety
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
        We ensure your vehicle meets all DVSA-approved safety and emissions standards. Our expert testers conduct a complete inspection across all major components, from brakes and tyres to lights and suspension, providing transparent results and honest repair advice.
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
      <span className="font-medium">DVSA-certified MOT centre:</span> Located in Leicester,
      providing full and thorough inspections.
    </li>
    <li>
      <span className="font-medium">Fast, same-day MOT testing:</span> Enjoy quick turnarounds
      and free retests after repairs for added convenience.
    </li>
    <li>
      <span className="font-medium">Detailed compliance reporting:</span> Tailored for both
      private and commercial vehicles to ensure all legal standards are met.
    </li>
  </ul>
</div>

        {/* Subsection: Responsiveness */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">Responsiveness</h3>
          <p className="text-gray-300 leading-relaxed">
           Our MOT process is designed for efficiency — quick testing, clear communication, and minimal waiting times so you can get back on the road confidently.
          </p>
        </div>
      </div>
    </section>
  );
}
