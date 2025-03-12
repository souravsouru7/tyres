"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    url: "/images/man1.jpg",
    title: "Premium Performance Tyres",
    subtitle: "Unmatched Grip & Safety",
    highlight: "Up to 25% Longer Tread Life"
  },
  {
    url: "/images/man2.jpg",
    title: "Expert Tyre Services",
    subtitle: "Professional Fitting & Balancing",
    highlight: "30-Minute Express Service"
  },
  {
    url: "/images/man3.jpg",
    title: "All-Season Collection",
    subtitle: "Ready for Any Weather",
    highlight: "Free Rotation Service"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => 
        current === slides.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7 }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10" />
              <Image
                src={slide.url}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <motion.div 
                className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="space-y-6">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full"
                  >
                    {slide.highlight}
                  </motion.span>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-4xl md:text-7xl font-bold mb-4 tracking-tight"
                  >
                    {slide.title}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
                  >
                    {slide.subtitle}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 hover:shadow-lg hover:shadow-yellow-500/30"
                    >
                      Shop Now
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black"
                    >
                      Book Service
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      <motion.div 
        className="absolute bottom-8 left-0 right-0 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
      >
        <div className="flex justify-center gap-3 mb-4">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? "bg-yellow-500" 
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
