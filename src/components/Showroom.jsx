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


  const IMAGES = [
    { id: 1, type: "image", src: "/2.webp" },
    { id: 2, type: "image", src: "/6.webp" },
    { id: 3, type: "image", src: "/7.webp" },
    { id: 4, type: "image", src: "/8.webp" },
    { id: 5, type: "image", src: "/9.webp" },
    { id: 6, type: "image", src: "/10.webp" },
    { id: 7, type: "image", src: "/11.webp" },
    { id: 8, type: "image", src: "/a1.jpeg" },
    { id: 9, type: "image", src: "/a2.png" },
    { id: 10, type: "image", src: "/v2.jpeg" },
  ];

  const VIDEOS = [
    { id: 11, type: "video", src: "/da2.mp4" },
    { id: 12, type: "video", src: "/da3.mp4" },
    { id: 13, type: "video", src: "/da4.mp4" },
    { id: 14, type: "video", src: "/pa1.mp4" },
    { id: 15, type: "video", src: "/pa2.mp4" },
  ];

  const allGridMedia = [...IMAGES, ...VIDEOS];

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
          >
            <span className="block bg-linear-to-r from-[#FF3131] via-[#FF7A7A] to-[#FFDADA] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,49,49,0.4)]">
              Showroom
            </span>
          </motion.h1>
          <div className="w-20 h-1.5 bg-linear-to-r from-red-600 to-transparent mx-auto mt-6 rounded-full" />
        </div>

        {/* ── TOP FEATURED VIDEO ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 w-full rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(255,49,49,0.15)] border border-white/10 aspect-video bg-neutral-900"
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
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {allGridMedia.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              onClick={() => setSelectedMedia(item)}
              className="relative break-inside-avoid group cursor-pointer rounded-[2.5rem] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white p-4 rounded-full shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 className="text-black w-6 h-6" />
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
                <div className="relative h-full w-full">
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
                  <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md p-2.5 rounded-full z-20 border border-white/10">
                    <PlayCircle className="text-white w-6 h-6" />
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
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/98 backdrop-blur-3xl p-4 md:p-10"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-8 right-8 text-white bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all duration-500 z-110"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-6xl h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt="Full view"
                  className="max-w-full max-h-[85vh] object-contain rounded-3xl border border-white/10"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[85vh] object-contain rounded-3xl border border-white/10"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}