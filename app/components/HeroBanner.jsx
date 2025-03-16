// components/HeroBanner.jsx
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  
  // Using local images with more dynamic content
  const slides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: 'Premium Performance Tires',
      title: 'ENGINEERED FOR PERFORMANCE',
      subtitle: 'Discover our range of high-performance tires for ultimate road grip and control',
      cta: 'Shop Now'
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: 'All-Season Tires',
      title: 'ALL-SEASON RELIABILITY',
      subtitle: 'Drive confidently in any weather condition with our versatile tire collection',
      cta: 'Learn More'
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/2036544/pexels-photo-2036544.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: 'Off-Road Tires',
      title: 'CONQUER ANY TERRAIN',
      subtitle: 'Built tough for your off-road adventures with superior traction and durability',
      cta: 'Explore Series'
    }
  ];

  // Wait for client-side hydration before showing animations
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-slide functionality with progressive timing
  useEffect(() => {
    if (!isMounted) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Longer duration to appreciate animations
    return () => clearInterval(interval);
  }, [slides.length, isMounted]);

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

  // Advanced animation variants with smoother transitions
  const imageVariants = {
    enter: (direction) => ({
      scale: 1.1,
      opacity: 0,
      x: direction > 0 ? 500 : -500,
    }),
    center: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.8 },
        scale: { duration: 1.5, ease: "easeOut" }
      }
    },
    exit: (direction) => ({
      scale: 0.9,
      opacity: 0,
      x: direction > 0 ? -500 : 500,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.8 }
      }
    })
  };

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Generate fixed positions for particles to avoid hydration mismatch
  const particlePositions = useRef([
    { x: 10, y: 20, delay: 0.2, duration: 3 },
    { x: 30, y: 50, delay: 0.5, duration: 2.5 },
    { x: 50, y: 30, delay: 0.8, duration: 3.2 },
    { x: 70, y: 60, delay: 1.2, duration: 2.8 },
    { x: 90, y: 40, delay: 0.3, duration: 3.5 },
    { x: 20, y: 80, delay: 0.7, duration: 2.7 },
    { x: 40, y: 10, delay: 1.0, duration: 3.3 },
    { x: 60, y: 70, delay: 0.4, duration: 2.9 },
    { x: 80, y: 25, delay: 0.9, duration: 3.1 },
    { x: 15, y: 45, delay: 0.6, duration: 2.6 },
    { x: 35, y: 65, delay: 1.1, duration: 3.4 },
    { x: 55, y: 15, delay: 0.2, duration: 2.8 },
    { x: 75, y: 55, delay: 0.8, duration: 3.0 },
    { x: 95, y: 35, delay: 0.5, duration: 2.7 },
    { x: 25, y: 75, delay: 1.0, duration: 3.2 },
    { x: 45, y: 5, delay: 0.3, duration: 2.9 },
    { x: 65, y: 85, delay: 0.7, duration: 3.3 },
    { x: 85, y: 30, delay: 1.2, duration: 2.5 },
    { x: 5, y: 60, delay: 0.4, duration: 3.1 },
    { x: 50, y: 50, delay: 0.9, duration: 2.8 }
  ]).current;

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-[1]"></div>
      
      {/* Animated background particles - only shown when client-side mounted */}
      {isMounted && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {particlePositions.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white opacity-70"
              initial={{ 
                x: `${particle.x}%`, 
                y: `${particle.y}%`, 
                opacity: 0 
              }}
              animate={{
                y: [null, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
              style={{
                left: `${particle.x}%`,
                width: `${(particle.x % 8) + 2}px`,
                height: `${(particle.y % 8) + 2}px`,
                opacity: 0
              }}
            />
          ))}
        </div>
      )}

      {/* Slides */}
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.div
          key={slides[currentSlide].id}
          custom={currentSlide}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
              className="brightness-75"
            />
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-[2] text-white text-center">
              <div className="px-4 sm:px-6 max-w-4xl">
                {/* Title */}
                <motion.h2
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 tracking-wider"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                
                {/* Subtitle */}
                <motion.p
                  variants={subtitleVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xs sm:text-sm md:text-lg lg:text-xl mb-4 md:mb-8 max-w-[280px] sm:max-w-xs md:max-w-2xl px-2 sm:px-4"
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
                  className="bg-red-600 text-white font-bold py-1.5 sm:py-2 md:py-3 px-4 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 relative overflow-hidden group"
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
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows with enhanced animation */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white rounded-full p-1.5 sm:p-2 md:p-3 z-10 transition-all duration-300"
        whileHover={{ scale: 1.2, x: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white rounded-full p-1.5 sm:p-2 md:p-3 z-10 transition-all duration-300"
        whileHover={{ scale: 1.2, x: 5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Enhanced indicators */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2 md:space-x-3 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-red-600 w-6 sm:w-8 md:w-10' : 'bg-white/50 w-2 sm:w-2.5 md:w-3 hover:bg-white/70'
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