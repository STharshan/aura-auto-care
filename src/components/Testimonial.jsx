


const testimonials = [
  {
    name: "Grace Burton",
    role: "a week ago",
    quote:
      "We had my boyfriend's diesel injectors done on his car. The service was fabulous. Everything was explained well and the price broken down to be easier to understand what each bit was costing. It was done quickly and efficiently. Thank you especially to Joe and Dave I believe their names were :)",
  },
  {
    name: "Eric Lo",
    role: "7 months ago",
    quote:
      "First time bring my VW for checking of fault code. David diagnosed the problems in my 14 years old car with several issues and solved it all in reasonable time and cost. It is a fantastic experience with this professional team. Thank you so much!",
  },
  {
    name: "Trevor Barnacle",
    role: "4 months ago",
    quote:
      "Had a nightmare with several garages mis diagnosing the issue with my mercedes Vito. After 20 minutes with TT Automotive they found the fault and was repaired the same day. Fantastic service and price. I've finally found a garage in which I can trust.",
  },
  {
    name: "Steven Sandell",
    role: "a month ago",
    quote:
      "Great garage sorted my faulty injector out promptly and at a good price, jamie was very helpful especially with explaining the ins and outs what was going to happen. Many thanks tt",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-m-5 bg-linear-to-br from-black via-[#0b0b0b] to-[#1a1a1a] py-20 px-4 md:px-8 lg:px-16 text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm text-[#861918] tracking-widest uppercase">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">What Our Clients Say</h2>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        {/* Left Video */}
        <div className="lg:col-span-2">
          <video
            src="/mechanic.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl shadow-[0_0_20px_rgba(255,77,36,0.2)]"
          />
        </div>

        {/* Right Testimonials */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#111]/70 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-md hover:border-[#861918] transition-all duration-500 group"
            >
              <p className="text-gray-300 mb-4 leading-relaxed italic group-hover:text-gray-100 transition-colors">
                “{t.quote}”
              </p>

              <div className="flex items-center mt-4">
                {/* Circle with first letter */}
                <div className="w-12 h-12 rounded-full bg-[#861918]/40 flex items-center justify-center mr-3 border border-[#ff4d24]/20 text-white font-semibold text-lg">
                  {t.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Link */}
      <div className="text-right mt-10">
        <a
          href="https://www.google.com/search?sca_esv=dc724815bbf34a06&rlz=1C1KNTJ_enLK1089LK1089&sxsrf=AE3TifNd1iPErvhtDdDjWX0naV9F24D4_Q:1761842786248&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8s6AKuefx5H1RVdZN9nU4KIhhbK1R5UFliYmD5J9C2W_kUD3CyX6ngbOInFx8LkvfuULV3FF3FtOUgfD0mstxLXTWt_sD&q=T+T+Automotive+Reviews&sa=X&ved=2ahUKEwiKrbLrr8yQAxV_ia8BHZN7F30Q0bkNegQIMRAE&biw=1366&bih=633&dpr=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#861918] font-semibold hover:underline tracking-wide"
        >
          View on Google
        </a>
      </div>
    </section>
  );
}
