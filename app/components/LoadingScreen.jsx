import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center px-4"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      {/* Background particles for visual interest */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: [null, -20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      <div className="relative w-28 h-28 md:w-40 md:h-40 mb-6 md:mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.8 }
          }}
        >
       
        </motion.div>
      </div>
      
      <motion.h1 
        className="text-[#FFD700] text-2xl md:text-4xl font-bold mb-6 md:mb-8 tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 0.3, duration: 0.8 }
        }}
      >
        GOLDEN EXTREME
      </motion.h1>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ 
          width: ['0%', '80%', '60%', '80%'],
          transition: { 
            delay: 0.6, 
            duration: 2.5,
            times: [0, 0.6, 0.7, 1],
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
        className="h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-full mb-8 max-w-xs w-full"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { delay: 0.8, duration: 0.5 }
        }}
        className="flex items-center"
      >
        <div className="w-3 h-3 bg-[#FFD700] rounded-full mr-3 animate-pulse" />
        <p className="text-white text-base md:text-lg font-light">Loading experience...</p>
      </motion.div>
      
      {/* Radial glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md">
          <motion.div 
            className="w-full h-full rounded-full"
            animate={{
              boxShadow: [
                '0 0 50px 20px rgba(255, 215, 0, 0.1)',
                '0 0 100px 40px rgba(255, 215, 0, 0.2)',
                '0 0 50px 20px rgba(255, 215, 0, 0.1)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 