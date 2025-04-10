"use client";

// components/HeroSection.js
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Playfair_Display, Inter } from 'next/font/google';
import Image from 'next/image';
import { FiArrowRight, FiArrowDown, FiStar, FiShield, FiAward } from 'react-icons/fi';
import Link from 'next/link';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/new/IMG_3111.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 3D Floating Elements */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          top: "20%",
          left: "10%",
          transform: `translateZ(50px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
        }}
      />

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
            }}
          >
            <motion.h1 
              className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-4"
              custom={0}
              variants={textVariants}
            >
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                Welcome to
              </span>
            </motion.h1>
            <motion.h1 
              className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-yellow-500 mb-8"
              custom={1}
              variants={textVariants}
            >
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                Golden Extreme
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12"
              custom={2}
              variants={textVariants}
            >
              Your premier destination for premium tires, wheels, and automotive excellence
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              custom={3}
              variants={textVariants}
            >
              <Link href="/about-us" passHref>
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-lg uppercase tracking-wider rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Us
                    <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                  />
                </motion.button>
              </Link>
              <Link href="/ConductUs" passHref>
                <motion.button
                  className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white text-lg uppercase tracking-wider rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-white/50 rounded-full mx-auto"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;