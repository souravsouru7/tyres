"use client";

// components/HeroBanner.jsx
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const HeroBanner = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [direction, setDirection] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);


  const slides = [
    {
      id: 1,
      image: "/new/ADM_4614.JPG",
      alt: 'Premium Performance Tires',
      title: 'ENGINEERED FOR\nPERFORMANCE',
      subtitle: 'Discover our range of high-performance tires for ultimate road grip and control',
      cta: 'Shop Now',
      link: '/products',
      color: 'from-blue-600/20 to-purple-600/20'
    },
    {
      id: 2,
      image: "/new/ADM_4501.JPG",
      alt: 'All-Season Tires',
      title: 'ALL-SEASON\nRELIABILITY',
      subtitle: 'Drive confidently in any weather condition with our versatile tire collection',
      cta: 'Learn More',
      link: '/about-us',
      color: 'from-emerald-600/20 to-teal-600/20'
    },
    {
      id: 3,
      image: "/new/ADM_4620.JPG",
      alt: 'Off-Road Tires',
      title: 'CONQUER ANY\nTERRAIN',
      subtitle: 'Built tough for your off-road adventures with superior traction and durability',
      cta: 'Explore Series',
      link: '/products/off-road-tires',
      color: 'from-orange-600/20 to-red-600/20'
    }
  ];

  // Wait for client-side hydration before showing animations
  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-slide functionality with progressive timing
  useEffect(() => {
    if (!isMounted) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => {
        const nextSlide = prev === slides.length - 1 ? 0 : prev + 1;
        return nextSlide;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, isMounted]);

  // Handle manual slide change
  const handleSlideChange = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Enhanced animation variants with unique transitions for each slide
  const imageVariants = {
    enter: (direction) => ({
      scale: 1.2,
      opacity: 0,
      x: direction > 0 ? 1000 : -1000,
      rotateY: direction > 0 ? 45 : -45,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }),
    center: {
      scale: 1,
      opacity: 1,
      x: 0,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (direction) => ({
      scale: 0.8,
      opacity: 0,
      x: direction > 0 ? -1000 : 1000,
      rotateY: direction > 0 ? -45 : 45,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  // Enhanced text animation variants with staggered effects
  const titleVariants = {
    hidden: { opacity: 0, y: -50, rotateX: -90, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 90, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        delay: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: "easeOut"
      }
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

  // Handle button click navigation
  const handleButtonClick = () => {
    router.push(slides[currentSlide].link);
  };

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"
        animate={{
          background: [
            `linear-gradient(45deg, ${slides[currentSlide].color})`,
            `linear-gradient(135deg, ${slides[currentSlide].color})`,
            `linear-gradient(45deg, ${slides[currentSlide].color})`
          ]
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Interactive mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.1}%, ${(mousePosition.y - 50) * 0.1}%)`
          }}
        />
      </div>

      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slides[currentSlide].id}
          custom={direction}
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
            <div className="absolute inset-0 flex items-center justify-center z-[2] text-white text-center px-4">
              <div className="max-w-4xl">
                {/* Title with 3D effect */}
                <motion.h2
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wider"
                >
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                    {slides[currentSlide].title.split('\n').map((line, i) => (
                      <span key={i} className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400">
                        {line}
                      </span>
                    ))}
                  </span>
                </motion.h2>
                
                {/* Subtitle with fade effect */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern progress indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleSlideChange(index)}
            className="relative group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-2 h-2 rounded-full bg-white/30 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-yellow-500"
                initial={{ width: 0 }}
                animate={{ 
                  width: index === currentSlide ? "100%" : "0%",
                  transition: { duration: 5, repeat: Infinity }
                }}
              />
            </div>
            <div className="absolute -inset-2 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-white/50"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroBanner;