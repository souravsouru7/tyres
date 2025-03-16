"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const logoControls = useAnimation();
  
  // Function to handle logo hover animation
  const handleLogoHover = () => {
    setIsLogoHovered(true);
    logoControls.start({
      rotateY: [0, 180, 360],
      scale: [1, 1.2, 1.1],
      transition: { 
        duration: 1.2,
        times: [0, 0.5, 1],
        ease: "easeInOut"
      }
    });
  };

  const handleLogoHoverEnd = () => {
    setIsLogoHovered(false);
    logoControls.start({
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.5 }
    });
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }

        @media (max-width: 640px) {
          .text-3d {
            text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
          }
          
          .text-3d:hover {
            text-shadow: 2px 2px 2px rgba(0,0,0,0.4);
            transform: translateY(-2px);
          }
        }

        .logo-container {
          perspective: 1000px;
        }

        .logo-shadow {
          filter: drop-shadow(0 0 15px rgba(234, 179, 8, 0.6));
        }

        .text-3d {
          text-shadow: 
            1px 1px 1px rgba(0,0,0,0.3),
            2px 2px 2px rgba(0,0,0,0.2),
            3px 3px 3px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .text-3d:hover {
          text-shadow: 
            2px 2px 2px rgba(0,0,0,0.4),
            4px 4px 4px rgba(0,0,0,0.3),
            6px 6px 6px rgba(0,0,0,0.2);
          transform: translateY(-5px);
        }

        .text-gold {
          background: linear-gradient(45deg, #ffd700, #b8860b, #ffd700);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      <header className="w-full px-4 md:px-8 py-2 md:py-4 flex justify-between items-center bg-white">
        <div className="flex-1"></div>
        <div className="flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-4">
          <motion.h1 
            className="text-xl sm:text-2xl md:text-4xl font-bold text-3d text-gold cursor-pointer"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          >
            GOLDEN
          </motion.h1>
          <motion.div 
            className="logo-container relative w-16 sm:w-24 md:w-40 h-8 sm:h-12 md:h-20 mx-1 sm:mx-2 md:mx-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onHoverStart={handleLogoHover}
            onHoverEnd={handleLogoHoverEnd}
          >
            <motion.div
              animate={logoControls}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className={`absolute inset-0 ${isLogoHovered ? 'logo-shadow' : ''}`}
                animate={isLogoHovered ? {
                  opacity: [0, 0.8, 0],
                  scale: [1, 1.3, 1],
                  transition: { duration: 1.2, repeat: Infinity, repeatType: "loop" }
                } : { opacity: 0 }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo Glow"
                  width={160}
                  height={80}
                  className="object-contain w-full h-full"
                  priority
                />
              </motion.div>
              <Image 
                src="/logo.png"
                alt="Golden Extreme Logo"
                width={160}
                height={80}
                className={`object-contain w-full h-full ${!isLogoHovered ? 'logo-animation' : ''}`}
                priority
              />
            </motion.div>
          </motion.div>
          <motion.h1 
            className="text-xl sm:text-2xl md:text-4xl font-bold text-3d text-gold cursor-pointer"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          >
            EXTREME
          </motion.h1>
        </div>
        <div className="flex-1"></div>
      </header>
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
} 