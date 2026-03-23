import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, X, Maximize2 } from "lucide-react";

export default function GallerySection() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedMedia(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMedia]);

  const IMAGES = [
    { id: 2, type: "image", src: "/6.webp" },
    { id: 4, type: "image", src: "/8.webp" },
    { id: 6, type: "image", src: "/10.webp" },
    { id: 9, type: "image", src: "/a2.png" },
    { id: 10, type: "image", src: "/v2.jpeg" },
  ];

  const VIDEOS = [
    { id: 11, type: "video", src: "/a1.mp4" },
    { id: 12, type: "video", src: "/a2.mp4" },
    { id: 13, type: "video", src: "/a3.mp4" },
    { id: 14, type: "video", src: "/a4.mp4" },
    { id: 15, type: "video", src: "/a5.mp4" },
    { id: 16, type: "video", src: "/a6.mp4" },
    { id: 17, type: "video", src: "/a7.mp4" },
    { id: 18, type: "video", src: "/a8.mp4" },
    { id: 19, type: "video", src: "/a9.mp4" },
    { id: 20, type: "video", src: "/a10.mp4" },
    { id: 21, type: "video", src: "/a11.mp4" },
    { id: 22, type: "video", src: "/a12.mp4" },
  ];

  const allGridMedia = [...IMAGES, ...VIDEOS];

  return (
    <section className="py-12 md:py-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none"
          >
            <span className="block bg-linear-to-r pt-15 from-[#FF3131] via-[#FF7A7A] to-[#FFDADA] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,49,49,0.4)]">
              Showroom
            </span>
          </motion.h1>
          <div className="w-16 md:w-20 h-1.5 bg-linear-to-r from-red-600 to-transparent mx-auto mt-4 md:mt-6 rounded-full" />
        </div>

        {/* TOP FEATURED VIDEO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 w-full rounded-2xl sm:rounded-4xl md:rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(255,49,49,0.15)] border border-white/10 aspect-video bg-neutral-900"
        >
          <video
            src="/protection.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* MASONRY GRID */}
        <div className="columns-1 xs:columns-2 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 md:gap-5 space-y-3 sm:space-y-4 md:space-y-5">
          {allGridMedia.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              onClick={() => setSelectedMedia(item)}
              className="relative break-inside-avoid group cursor-pointer rounded-xl sm:rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white p-3 sm:p-4 rounded-full shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>

              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="Gallery item"
                  className="w-full h-auto object-cover block transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
              ) : (
                <div className="relative w-full">
                  <video
                    src={item.src}
                    muted
                    playsInline
                    loop
                    onMouseOver={(e) => e.target.play()}
                    onMouseOut={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                    className="w-full h-auto object-cover block transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-black/40 backdrop-blur-md p-2 sm:p-2.5 rounded-full z-20 border border-white/10">
                    <PlayCircle className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/98 backdrop-blur-3xl p-3 sm:p-6 md:p-10"
            style={{ zIndex: 9999 }}
            onClick={() => setSelectedMedia(null)}
          >
            {/* CLOSE BUTTON — always visible, never clipped */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia(null);
              }}
              className="
                fixed
                top-3 right-3
                sm:top-5 sm:right-5
                md:top-8 md:right-8
                text-white
                bg-white/15
                hover:bg-white/30
                active:scale-95
                p-3 sm:p-3.5 md:p-4
                rounded-full
                transition-all duration-300
                border border-white/20
                shadow-2xl
                flex items-center justify-center
              "
              style={{ zIndex: 10001 }}
              aria-label="Close"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* MEDIA CONTAINER */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="
                relative
                w-full max-w-xs
                sm:max-w-xl
                md:max-w-4xl
                lg:max-w-6xl
                flex items-center justify-center
              "
              style={{ zIndex: 10000 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "image" ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  playsInline
                  className="
                    max-w-full
                    max-h-[80vh]
                    sm:max-h-[85vh]
                    w-full h-auto
                    object-contain
                    rounded-xl sm:rounded-2xl md:rounded-3xl
                    border border-white/10
                    shadow-2xl
                  "
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt="Full view"
                  className="
                    max-w-full
                    max-h-[80vh]
                    sm:max-h-[85vh]
                    w-auto h-auto
                    object-contain
                    rounded-xl sm:rounded-2xl md:rounded-3xl
                    border border-white/10
                    shadow-2xl
                  "
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}