// components/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Playfair_Display, Inter } from 'next/font/google';

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
  // Text reveal animation
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
    <div className={`${playfair.variable} ${inter.variable} w-full`}>
      <div className="bg-[#212121] min-h-screen flex items-center py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Left Column */}
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white italic font-medium leading-tight"
              custom={0}
              variants={textVariants}
            >
              Welcome
            </motion.h1>
            <motion.h1 
              className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-yellow-500 italic font-medium leading-tight mt-2"
              custom={1}
              variants={textVariants}
            >
              to goldenextreme
            </motion.h1>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="w-full md:w-1/2 md:pl-12"
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-yellow-500 text-xl sm:text-2xl md:text-3xl font-playfair font-bold mb-4 md:mb-6 text-center md:text-left"
              custom={2}
              variants={textVariants}
            >
              Golden Extreme Trading – Your Trusted Partner for Tires, Wheels, and Batteries
            </motion.h2>

            <motion.p 
              className="text-white/80 text-base sm:text-lg leading-relaxed font-inter mb-6 md:mb-8 text-center md:text-left"
              custom={3}
              variants={textVariants}
            >
              Welcome to Golden Extreme Trading, your one-stop destination for high-quality
              automotive products. We specialize in premium tires, durable wheels, and reliable
              batteries for all types of vehicles. With a commitment to quality, performance, and
              customer satisfaction, we provide products designed to enhance your driving
              experience and ensure safety on the road. Whether you're looking for top-tier tires,
              strong and stylish wheels, or long-lasting batteries, Golden Extreme Trading has you
              covered. Explore our wide range of products and services to keep your vehicle running
              at its best.
            </motion.p>

            <motion.div className="flex justify-center md:justify-start">
              <motion.button
                className="text-white bg-transparent border-2 border-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                custom={4}
                variants={textVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                explore more
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;