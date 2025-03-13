import React from 'react';
import { motion } from 'framer-motion';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-orbitron',
});

const BrandSection = () => {
  // Shimmering animation for the main text
  const shimmerVariants = {
    animate: {
      backgroundPosition: ['200% 50%', '-200% 50%'],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  // Updated line variants to match typewriter timing
  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: ['0px', '40px', '80px'],
      transition: {
        duration: 2,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1.5,
      },
    },
  };

  // Floating animation for subtitle
  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Add this new animation variant
  const typewriterVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 2,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1.5,
      },
    },
  };

  return (
    <div className={`${orbitron.variable} w-full`}>
      <div className="bg-gray-600 py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          {/* Main Title with Typewriter Effect */}
          <div className="relative inline-block mb-4 sm:mb-6 md:mb-8">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-orbitron font-bold tracking-wider text-yellow-300 whitespace-nowrap overflow-hidden"
              variants={typewriterVariants}
              initial="hidden"
              animate="visible"
            >
              GOLDENEXTREME
            </motion.h1>
            <motion.div
              className="absolute top-0 right-0 h-full w-[2px] sm:w-[3px] md:w-[4px] bg-yellow-300"
              animate={{
                opacity: [1, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          {/* Subtitle */}
          <motion.h2 
            className="text-yellow-300 text-sm sm:text-lg md:text-xl lg:text-2xl font-orbitron mb-6 sm:mb-8 md:mb-12 px-2"
            variants={floatingVariants}
            animate="animate"
          >
            Experience the difference with our tires
          </motion.h2>

          {/* Updated line animation */}
          <motion.div 
            className="h-[2px] sm:h-[3px] md:h-1 bg-yellow-300 mx-auto"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          />

          {/* Background Effects */}
          <motion.div 
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                'radial-gradient(circle at 30% 30%, #FFD700 0%, transparent 60%)',
                'radial-gradient(circle at 70% 70%, #FFD700 0%, transparent 60%)',
                'radial-gradient(circle at 30% 30%, #FFD700 0%, transparent 60%)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Animated Particles - Reduced count on mobile */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[1px] h-[1px] sm:w-[2px] sm:h-[2px] md:w-1 md:h-1 bg-yellow-400 rounded-full"
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
          
          {/* Additional particles only visible on larger screens */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i + 10}
              className="hidden sm:block absolute w-[2px] h-[2px] md:w-1 md:h-1 bg-yellow-400 rounded-full"
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
        </div>
      </div>

      <style jsx>{`
        .font-orbitron {
          font-family: var(--font-orbitron);
        }
      `}</style>
    </div>
  );
};

export default BrandSection; 