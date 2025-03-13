// components/HeroBanner.jsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Using local images with more dynamic content
  const slides = [
    {
      id: 1,
      image: "/images/img1.jpg",
      alt: 'Premium Performance Tires',
      title: 'ENGINEERED FOR PERFORMANCE',
      subtitle: 'Discover our range of high-performance tires for ultimate road grip and control',
      cta: 'Shop Now'
    },
    {
      id: 2,
      image: "/images/img2.jpg",
      alt: 'All-Season Tires',
      title: 'ALL-SEASON RELIABILITY',
      subtitle: 'Drive confidently in any weather condition with our versatile tire collection',
      cta: 'Learn More'
    },
    {
      id: 3,
      image: "/images/img3.jpg",
      alt: 'Off-Road Tires',
      title: 'CONQUER ANY TERRAIN',
      subtitle: 'Built tough for your off-road adventures with superior traction and durability',
      cta: 'Explore Series'
    }
  ];

  // Auto-slide functionality with progressive timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Longer duration to appreciate animations
    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Advanced animation variants
  const imageVariants = {
    enter: (direction) => ({
      scale: 1.2,
      opacity: 0,
      x: direction > 0 ? 1000 : -1000,
    }),
    center: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 1.2, ease: "easeOut" }
      }
    },
    exit: (direction) => ({
      scale: 0.8,
      opacity: 0,
      x: direction < 0 ? 1000 : -1000,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    })
  };

  // Text animation variants with letter staggering
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };
  
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Subtitle animation
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Direction for slide animations
  const [[page, direction], setPage] = useState([0, 0]);
  
  useEffect(() => {
    // Update page state when currentSlide changes
    setPage([currentSlide, currentSlide > page ? 1 : -1]);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-96 md:h-screen overflow-hidden">
      {/* Decorative particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white opacity-70"
            initial={{ 
              x: Math.random() * 100 - 50 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0.3 + Math.random() * 0.5
            }}
            animate={{ 
              y: [null, "-100%"],
              opacity: [null, 0],
              scale: [1, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 10,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`
            }}
          />
        ))}
      </div>

      {/* Main slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            {/* Image with parallax effect */}
            <motion.div 
              className="relative w-full h-full"
              animate={{ scale: 1.1 }}
              transition={{ 
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                layout="fill"
                objectFit="cover"
                priority
                className="transition-all duration-500"
              />
            </motion.div>
            
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 md:p-6">
              {/* Title with letter animation */}
              <motion.h1
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4 tracking-wider"
              >
                {slides[currentSlide].title.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className="inline-block"
                    style={{ 
                      textShadow: "0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.2)" 
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
              
              {/* Animated line divider */}
              <motion.div 
                className="w-0 h-0.5 md:h-1 bg-red-600 mb-3 md:mb-6"
                animate={{ width: "120px" }}
                transition={{ 
                  delay: 0.6,
                  duration: 0.8,
                  ease: "easeOut"
                }}
              />
              
              {/* Subtitle */}
              <motion.p
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
                className="text-sm md:text-lg lg:text-xl mb-4 md:mb-8 max-w-xs md:max-w-2xl px-4"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              
              {/* CTA Button */}
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="bg-red-600 text-white font-bold py-2 md:py-3 px-6 md:px-8 text-sm md:text-base rounded-full transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">{slides[currentSlide].cta}</span>
                <motion.span 
                  className="absolute inset-0 bg-red-700 -z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows with enhanced animation */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white rounded-full p-2 md:p-3 z-10 transition-all duration-300"
        whileHover={{ scale: 1.2, x: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white rounded-full p-2 md:p-3 z-10 transition-all duration-300"
        whileHover={{ scale: 1.2, x: 5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Enhanced indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-red-600 w-10' : 'bg-white/50 w-3 hover:bg-white/70'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;