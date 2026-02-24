


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
       Analysis – Comfort and Control
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
        We inspect shocks, springs, bushes, and joints to restore comfort, stability, and cornering confidence. Our advanced testing ensures precise alignment and optimal road contact.
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
      Suspension inspection and repair specialists in Leicester.
    </li>
    <li>
      Replacement of worn shocks, struts, and mounts.
    </li>
    <li>
     Wheel alignment for improved handling and tyre life.
     </li>
  </ul>
</div>

        {/* Subsection: Responsiveness */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">Responsiveness</h3>
          <p className="text-gray-300 leading-relaxed">
           Your vehicle will feel balanced and comfortable, adapting smoothly to every road surface for better control.
          </p>
        </div>
      </div>
    </section>
  );
}
