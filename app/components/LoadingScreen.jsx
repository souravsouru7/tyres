'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="relative w-32 h-32 mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/logo.png"
          alt="Golden Extreme Logo"
          fill
          className="object-contain animate-pulse"
        />
      </motion.div>
      <motion.h1 
        className="text-[#FFD700] text-xl font-bold mb-2"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        GOLDEN EXTREME
      </motion.h1>
      <motion.p 
        className="text-white text-lg"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen; 