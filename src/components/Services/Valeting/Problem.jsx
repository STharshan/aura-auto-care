


export default function ProblemSection() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center justify-center py-16 px-4 md:px-8">
      {/* === Videos Grid === */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Video 1 */}
        <div className="relative rounded-2xl border border-gray-700 overflow-hidden bg-[#0f0f0f] shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] aspect-video">
          <video
            src="/brake.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Video 2 */}
        <div className="relative rounded-2xl border border-gray-700 overflow-hidden bg-[#0f0f0f] shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] aspect-video">
          <video
            src="/brake1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* === Text Section === */}
      <div className="max-w-4xl text-center md:text-left space-y-6">
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            Brakes{" "}
            <span className="bg-blue-600 text-xs text-white font-medium px-2 py-0.5 rounded-md">
              TT Auto
            </span>
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Your braking system is critical to your safety — that’s why we offer
            brake repair and replacement services in Leicester designed for
            maximum performance. From squeaky pads to worn discs, our
            technicians inspect every part of your braking system using
            precision tools and quality components for lasting reliability.
          </p>

          <p className="text-gray-300 leading-relaxed mt-4">
            We use OEM-approved parts and perform full fluid checks to restore
            braking power and responsiveness. Whether it’s city driving or long
            motorway trips, you’ll feel the difference in control and
            confidence. Choose us for trusted brake inspection and repair across
            the Midlands, keeping you and your passengers safe every mile.
          </p>
        </div>
      </div>
    </section>
  );
}
