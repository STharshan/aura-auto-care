
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
      text: "TT Autos sorted out my car issues (Hyundai i30), excellent customer service, fair prices, really pleased overall. They were recommended to me by a family member, and now I recommend them to others. Now I know where to go in the future. Thank you so much.",
      name: "Asma",
      initials: "A",
      bg: "#BCFFBB",
    },
    {
      title: "Amazing Garage",
      text: "Used them for a few years now. Bailed me out multiple times and always upfront with costs and very fair. Family-run business and always feel welcomed by everyone. Keep up the good work lads.",
      name: "Amar Mohammed",
      initials: "AM",
      bg: "#BBD2FF",
    },
    {
      title: "Highly Recommended",
      text: "Had a spoiler fitted on my Mk 7.5 Golf R. Excellent service — these guys really know what they're doing. They also helped with an issue I was having with my F1 light. This garage is going to become my regular.",
      name: "Asma Omar",
      initials: "AO",
      bg: "#F5FFBB",
    },
    {
      title: "Fast & Reasonably Priced",
      text: "I took my car in today to replace my exhaust and they completed the work in less than two hours with a great result. Very reasonably priced and they fitted me in the next day!",
      name: "Rav Heer",
      initials: "RH",
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
          src="review.png"
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#861918]">
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
          href="https://www.google.com/search?sca_esv=0cca2ee0e671afa3&rlz=1C1KNTJ_enLK1089LK1089&sxsrf=ANbL-n7WIJZwBQNu_qH3DMHp4etM__VzYQ:1770053718396&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWWvnlxyOtSbAodJocC3AZ7djdMLPvp1Ctj8ib8Ht94tYz-_tSKcdX1gQEKf14KIZlioCF97M0diIsgLsSNjFiIGyM5-Thur0U9tzj_6uXeIPQREhtQ%3D%3D&q=T+T+Autos+Leicester+Ltd+Reviews&sa=X&ved=2ahUKEwi29fj4q7uSAxU5m68BHZIyJH4Q0bkNegQIMhAF&biw=1366&bih=633&dpr=1&aic=0" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 sm:px-10 py-2.5 sm:py-3 text-base sm:text-lg font-semibold rounded-full 
          bg-[#861918] hover:bg-[#a31f1d] transition-all duration-300 shadow-lg"
        >
          Google Review
        </a>
      </div>
    </section>
  );
}