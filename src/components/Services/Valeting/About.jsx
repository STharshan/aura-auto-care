export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
      {/* Image Container */}
      <div className="w-full max-w-5xl rounded-2xl border border-gray-700 overflow-hidden mb-10">
        <div className="bg-[#1a1a1a] flex items-center justify-center p-8 md:p-12">
          <img
            src="/logo-white.png"
            alt="Aura Auto Care"
            className="w-64 sm:w-72 md:w-80 lg:w-96 object-contain"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-4xl text-center md:text-left">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Analysis – Routine Cleaning & Presentation
        </h2>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6">
          Our valeting service provides comprehensive interior and exterior
          cleaning to keep your vehicle looking fresh and well-presented. We use
          safe, high-quality products and techniques to protect paintwork,
          trims, upholstery, and interior surfaces.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          This service is ideal for regular upkeep and fleet vehicle maintenance.
        </p>

        {/* Subsection: Performance */}
        <div className="text-left mb-6">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            Performance{" "}
            <span className="bg-blue-600 text-xs text-white font-medium px-2 py-0.5 rounded-md">
              Aura Auto Care
            </span>
          </h3>

          <ul className="text-gray-300 leading-relaxed list-disc list-inside space-y-1">
            <li>Exterior hand wash and safe drying</li>
            <li>Wheel, tyre, and trim cleaning</li>
            <li>Interior vacuuming and surface wipe-down</li>
            <li>Glass and dashboard cleaning for a fresh finish</li>
          </ul>
        </div>

        {/* Subsection: Responsiveness */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">Responsiveness</h3>
          <p className="text-gray-300 leading-relaxed">
            Our valeting service is designed for convenience and quick
            turnaround, ensuring your vehicle is cleaned efficiently while
            maintaining professional standards and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
}