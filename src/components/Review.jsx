
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Review() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      gsap.set(cards, { yPercent: 30, opacity: 0 });
      gsap.set(cards[0], { yPercent: 0, opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 80%",
          end: "+=" + cards.length * 400,
          scrub: 1.5,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(cards[i], { opacity: 1, yPercent: 0, duration: 1 }, i * 0.5);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      title: "Excellent Service & Fair Prices",
      text: "Took my car to aura autocare for a 2 step paint correction and ceramic coating and it's never looked better. Years of swirl marks and cheap car washes left it in a state but Aura have made the paint look brand new!",
      name: "Z I",
      initials: "Z",
      bg: "#BCFFBB",
    },
    {
      title: "Amazing Garage",
      text: "I took my Audi A5 to Aura, and from start to finish, the process was seamless. I was kept up to date throughout and received pictures of the progress. I chose the ceramic coating to fully protect the car. Upon collection, I was amazed—it felt like I was picking up a brand new car. I'm now on the maintenance plan so my car will always look fresh and protected. Highly recommend Aura to anyone who wants to transform their car's look!",
      name: "Kamran Samra",
      initials: "KS",
      bg: "#BBD2FF",
    },
    {
      title: "Highly Recommended",
      text: "I had my Golf GTi Edition 30 fully decontaminated as the paint was dull. It came back with a flawless, factory finish! I was extremely pleased with the service received. I highly recommend Aura for their excellent detailing services.",
      name: "ZainM",
      initials: "Z",
      bg: "#F5FFBB",
    },
    {
      title: "Fast & Reasonably Priced",
      text: "Top-notch service—professional and punctual! I booked for a Sunday afternoon, and the technician arrived early, put in great effort, and the result was unbelievable! I'll definitely be using Aura for my maintenance package from now on. Cheers!",
      name: "Joseph Moore",
      initials: "JM",
      bg: "#FFBBF0",
    },
  ];
  
  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden min-h-screen"
      id="testimonials"
    >
      {/* Background - Fixed with responsive positioning */}
      <div className="absolute inset-0">
        <img
          src="logo-white.png"
          alt="Hear it from our clients"
          className="w-full h-full object-top sm:object-center md:object-center"
          style={{
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-10 md:pb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#e80202]">
          Hear it from our clients
        </h2>
      </div>

      {/* Testimonials */}
      <div
        ref={cardsContainerRef}
        className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-6 sm:gap-8 pb-16 sm:pb-20 px-4 sm:px-6"
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 
            shadow-[0_0_20px_rgba(0,0,0,0.3)] p-5 sm:p-6 md:p-8 opacity-0 transform translate-y-8"
          >
            <p className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">{item.title}</p>
            <p className="text-sm md:text-base opacity-80 mb-3 sm:mb-4 leading-relaxed">{item.text}</p>
            <div className="flex items-center gap-3">
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm"
                style={{ backgroundColor: item.bg, color: "#360802" }}
              >
                {item.initials}
              </span>
              <span className="text-sm sm:text-base">{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* === CTA BUTTON TO GOOGLE REVIEWS === */}
      <div className="relative z-10 pb-20 sm:pb-24 md:pb-28 text-center px-4">
        <a
          href="https://www.google.com/search?sca_esv=e376e5018d0e0b4b&rlz=1C5CHFA_enCA1132CA1132&sxsrf=ANbL-n6LkZG4NnQYFfr-JkzOI7DA6bTR5g:1771957274283&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYkKvkfpNDp-ul2ARXNrRYgmJO4DmtKU_VV_Rz1cRUmsazW4sU0Gbeo0HrPBChxotvfj1j9LMiOkC-NOEnt20VIIv4iK&q=Aura+AutoCare+Reviews&sa=X&ved=2ahUKEwipgZCf3_KSAxX5UGcHHT02IaEQ0bkNegQIIhAF&biw=1366&bih=633&dpr=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 sm:px-10 py-2.5 sm:py-3 text-base sm:text-lg font-semibold rounded-full 
          bg-[#e80202] hover:bg-[#a31f1d] transition-all duration-300 shadow-lg"
        >
          Google Review
        </a>
      </div>
    </section>
  );
}