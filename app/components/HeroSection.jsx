"use client";

// components/HeroSection.js
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Playfair_Display, Inter } from 'next/font/google';
import Image from 'next/image';
import { FiArrowRight, FiArrowDown, FiStar, FiShield, FiAward } from 'react-icons/fi';

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
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  const features = [
    { icon: FiStar, title: "Premium Quality", description: "Top-tier products from leading brands" },
    { icon: FiShield, title: "Safety First", description: "Certified and tested for maximum safety" },
    { icon: FiAward, title: "Expert Service", description: "Professional guidance and support" }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
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
        ease: "easeOut"
      }
    })
  };

  return (
    <div className={`${playfair.variable} ${inter.variable} w-full relative overflow-hidden min-h-screen`}>
      {/* Animated background with dynamic gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"
        animate={{
          background: [
            "linear-gradient(45deg, #ffffff, #f8f9fa, #ffffff)",
            "linear-gradient(225deg, #ffffff, #f8f9fa, #ffffff)",
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Animated mesh grid with modern effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(234,179,8,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(234,179,8,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Floating elements with 3D effect */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl"
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
          transform: "translateZ(50px)",
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          bottom: "20%",
          right: "10%",
          transform: "translateZ(50px)",
        }}
      />

      <div className="relative min-h-screen flex items-center py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Left Column with 3D effect */}
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
            initial="hidden"
            animate="visible"
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
              transform: "perspective(1000px) rotateX(5deg)",
            }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.h1 
              className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gray-900 italic font-medium leading-tight"
              custom={0}
              variants={textVariants}
            >
              Welcome
            </motion.h1>
            <motion.h1 
              className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-yellow-500 italic font-medium leading-tight mt-2"
              custom={1}
              variants={textVariants}
            >
              to goldenextreme
            </motion.h1>
          </motion.div>

          {/* Right Column with modern card design */}
          <motion.div 
            className="w-full md:w-1/2 md:pl-12"
            initial="hidden"
            animate="visible"
            style={{
              x: -mousePosition.x,
              y: -mousePosition.y,
              transform: "perspective(1000px) rotateX(-5deg)",
            }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2 
                className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-playfair font-bold mb-6 md:mb-8 text-center md:text-left"
                custom={2}
                variants={textVariants}
              >
                Golden Extreme Trading – Your Trusted Partner for Tires, Wheels, and Batteries
              </motion.h2>

              <motion.p 
                className="text-gray-600 text-lg sm:text-xl leading-relaxed font-inter mb-8 md:mb-10 text-center md:text-left"
                custom={3}
                variants={textVariants}
              >
                Welcome to Golden Extreme Trading, your one-stop destination for high-quality
                automotive products. We specialize in premium tires, durable wheels, and reliable
                batteries for all types of vehicles. With a commitment to quality, performance, and
                customer satisfaction, we provide products designed to enhance your driving
                experience and ensure safety on the road.
              </motion.p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeFeature === index 
                        ? 'bg-yellow-500/10 border-yellow-500/20' 
                        : 'bg-gray-50/50 border-gray-200'
                    } border`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveFeature(index)}
                  >
                    <feature.icon className={`w-6 h-6 mb-2 ${
                      activeFeature === index ? 'text-yellow-500' : 'text-gray-400'
                    }`} />
                    <h3 className={`font-semibold ${
                      activeFeature === index ? 'text-yellow-500' : 'text-gray-700'
                    }`}>{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                <motion.button
                  className="group text-white bg-gradient-to-r from-yellow-500 to-yellow-600 px-8 py-4 text-lg uppercase tracking-wider rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                  custom={4}
                  variants={textVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    explore more
                    <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                  />
                </motion.button>
                <motion.button
                  className="text-gray-700 bg-transparent border-2 border-gray-200 px-8 py-4 text-lg uppercase tracking-wider rounded-full hover:bg-gray-50 transition-all duration-300"
                  custom={5}
                  variants={textVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  contact us
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modern scroll indicator */}
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
        <div className="w-6 h-10 border-2 border-gray-200 rounded-full p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-gradient-to-b from-yellow-500 to-transparent rounded-full mx-auto"
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
    </div>
  );
};

export default HeroSection;