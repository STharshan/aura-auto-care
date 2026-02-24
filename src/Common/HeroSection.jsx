import { HashLink } from "react-router-hash-link";

export default function HeroSection({
  title,
  subtitle,
  description,
  bgImage,
  buttonText,
  buttonLink,
  callNumber,
  stats = []
}) {
  const scrollWithOffset = (el) => {
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-black">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          loading="lazy"
          alt="Hero background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 mt-10 text-white">
              {title}
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-[#CCCCCC] mb-8">
              {subtitle}
            </p>

            <p className="text-base md:text-lg lg:text-xl text-[#B0B0B0] leading-relaxed mb-12 max-w-3xl mx-auto">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

              {/* Main Button (Scroll) */}
              <HashLink to={buttonLink} scroll={scrollWithOffset}>
                <button className="inline-flex items-center justify-center gap-2 bg-[#e80202] hover:bg-[#e43333] text-white font-medium rounded-md h-12 px-8 transition-all shadow-md">
                  {buttonText}
                </button>
              </HashLink>

              {/* Call Button */}
              <a
                href={`tel:${callNumber}`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/50 text-black font-medium rounded-md h-12 px-8 transition-all shadow-md"
              >
                Call Now
              </a>
            </div>

            {/* Stats */}
            {stats.length > 0 && (
              <div className="mt-16 pt-8 border-t border-[#e80202]/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                  {stats.map((item, index) => (
                    <div key={index}>
                      <div className="text-3xl font-bold text-[#e80202] mb-2">
                        {item.value}
                      </div>
                      <div className="text-sm text-[#CCCCCC]">
                        {item.label}
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}