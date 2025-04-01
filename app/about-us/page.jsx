"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function AboutUs() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const logoControls = useAnimation();
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  // Predefined positions for particles
  const particlePositions = [
    { left: "10%", top: "20%" },
    { left: "20%", top: "40%" },
    { left: "30%", top: "60%" },
    { left: "40%", top: "80%" },
    { left: "50%", top: "30%" },
    { left: "60%", top: "50%" },
    { left: "70%", top: "70%" },
    { left: "80%", top: "90%" },
    { left: "90%", top: "40%" },
    { left: "15%", top: "60%" },
    { left: "25%", top: "80%" },
    { left: "35%", top: "20%" },
    { left: "45%", top: "40%" },
    { left: "55%", top: "60%" },
    { left: "65%", top: "80%" },
    { left: "75%", top: "30%" },
    { left: "85%", top: "50%" },
    { left: "95%", top: "70%" },
    { left: "5%", top: "40%" },
    { left: "15%", top: "60%" },
    { left: "25%", top: "80%" },
    { left: "35%", top: "20%" },
    { left: "45%", top: "40%" },
    { left: "55%", top: "60%" },
    { left: "65%", top: "80%" },
    { left: "75%", top: "30%" },
    { left: "85%", top: "50%" },
    { left: "95%", top: "70%" },
    { left: "5%", top: "40%" },
    { left: "15%", top: "60%" }
  ];

  // Predefined positions for background elements
  const backgroundPositions = [
    { left: "10%", top: "20%" },
    { left: "30%", top: "40%" },
    { left: "50%", top: "60%" },
    { left: "70%", top: "80%" },
    { left: "90%", top: "30%" },
    { left: "20%", top: "50%" },
    { left: "40%", top: "70%" },
    { left: "60%", top: "90%" },
    { left: "80%", top: "40%" }
  ];

  // Enhanced text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Enhanced section animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // New hover animation variants
  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  // New floating animation variants
  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // New glow animation variants
  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section with Enhanced 3D Parallax */}
      <div className="relative min-h-screen overflow-hidden bg-black">
        {/* Animated background with enhanced effects */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, opacity, scale }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(234,179,8,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 70%, rgba(234,179,8,0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 30%, rgba(234,179,8,0.1) 0%, transparent 50%)",
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Enhanced floating particles */}
        {isMounted && (
          <div className="absolute inset-0 z-10">
            {particlePositions.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-yellow-400/30"
                style={{
                  left: pos.left,
                  top: pos.top,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.2, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10 + (i % 5) * 2,
                  repeat: Infinity,
                  delay: (i % 3) * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}

        {/* Content with enhanced animations */}
        <div className="relative z-20 container mx-auto px-4 py-32">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 tracking-tighter mb-8"
              variants={textVariants}
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ABOUT US
            </motion.h1>
            
            <motion.div 
              className="w-32 h-1 bg-yellow-400 mx-auto mb-8"
              variants={itemVariants}
              whileHover={{ scaleX: 1.5 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            
            <motion.p 
              className="text-white text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Shaping the future of the tire industry with innovation, quality, and excellence
            </motion.p>

            <motion.div
              className="mt-16"
              variants={itemVariants}
            >
              <motion.button
                className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors relative overflow-hidden group"
                variants={hoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="relative z-10">Discover Our Story</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          variants={floatVariants}
          initial="initial"
          animate="animate"
        >
          <div className="w-6 h-6 border-2 border-yellow-400 rounded-full relative">
            <motion.div
              className="absolute inset-0 border-2 border-yellow-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Our Story Section with Animated Cards */}
      <div className="relative bg-black py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-16 text-center text-yellow-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            OUR STORY
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                year: "1974",
                title: "The Beginning",
                content: "The Taleb Group was founded, establishing a legacy of excellence across various industries."
              },
              {
                year: "2006",
                title: "Tire Specialization",
                content: "We embarked on a journey specializing in high-quality tires to meet diverse customer needs."
              },
              {
                year: "2014",
                title: "Expansion",
                content: "Expanded operations to reinforce our commitment to excellence and customer satisfaction."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                variants={hoverVariants}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <motion.div 
                  className="text-5xl font-bold text-yellow-400 mb-4 relative"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.year}
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-3 relative">{item.title}</h3>
                <p className="text-gray-300 relative">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* About Us Content with 3D Parallax and Floating Elements */}
      <div className="relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/about2.jpg" 
            alt="Dark tire background"
            fill
            style={{objectFit: "cover"}}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
        </motion.div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {backgroundPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full bg-yellow-500/5"
              style={{
                left: pos.left,
                top: pos.top,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 15 + (i % 5) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 3) * 2,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="flex justify-center mb-16"
              variants={itemVariants}
            >
              <motion.div 
                className="w-28 h-28 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-[0_0_25px_rgba(234,179,8,0.5)] relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated ring around logo */}
                <motion.div 
                  className="absolute w-full h-full rounded-full border-2 border-yellow-300/50"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.2, 0.7],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <Image 
                  src="/images/logo.png" 
                  alt="Golden Extreme Logo" 
                  width={70} 
                  height={70}
                  className="rounded-full drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="mb-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300">
                  Our Legacy of Excellence
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              <motion.div
                className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.p className="text-lg md:text-xl text-white leading-relaxed">
                  Welcome to <span className="text-yellow-400 font-semibold">Golden Extreme Auto Spare Parts</span>, a distinguished division of the Taleb Group, established 
                  with a vision to provide top-tier auto spare parts across the Middle East and Africa. The Taleb Group, 
                  founded in 1974, has built a reputable legacy through successful ventures in various industries.
                </motion.p>
              </motion.div>
              
              <motion.div
                className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.p className="text-lg md:text-xl text-white leading-relaxed">
                  In 2006, we embarked on a new journey, specializing in high-quality tires, aimed at meeting the diverse 
                  needs of our customers. Recognizing the growing demand, we expanded our operations in 2014, reinforcing our commitment to excellence.
                </motion.p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-md p-8 rounded-xl border border-yellow-400/30 mb-12"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(234,179,8,0.25)"
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="text-4xl"
                  animate={{ 
                    rotateY: [0, 360],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  💡
                </motion.div>
                <p className="text-lg md:text-xl text-yellow-300 leading-relaxed">
                  At Golden Extreme, we are more than just a tire distributor—we are shaping the future of the tire 
                  industry in the UAE and beyond. With over 150,000 sq ft of warehouse space and a robust network of 120+ 
                  sales points, we ensure that our customers across the region have access to premium tire solutions.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div
                className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)"
                }}
              >
                <motion.p className="text-lg md:text-xl text-white leading-relaxed">
                  Our dedicated team of experienced salespeople and an in-house engineer for claims handling ensures the 
                  highest level of service and technical support. We take pride in our premium tire solutions designed for the demanding needs of fleets, tire shops, and 
                  dealers.
                </motion.p>
              </motion.div>
              
              <motion.div
                className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)"
                }}
              >
                <motion.p className="text-lg md:text-xl text-white leading-relaxed">
                  Our mission is clear: to meet today's needs while anticipating the challenges of tomorrow. With a 
                  foundation of trust, customer focus, and industry expertise, Golden Extreme is committed to leading the 
                  market and creating long-lasting partnerships.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Our Mission Section with 3D Interactive Card */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {backgroundPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full bg-yellow-500/5"
              style={{
                left: pos.left,
                top: pos.top,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 15 + (i % 5) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 3) * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            OUR MISSION
          </motion.h2>
          
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(234,179,8,0.3)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 45px 70px -15px rgba(234,179,8,0.4)"
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 relative">
                {/* Left content area */}
                <div className="p-10 md:p-12 flex flex-col justify-center md:col-span-7 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                      DRIVING THE FUTURE
                    </h2>
                    
                    <div className="w-20 h-1 bg-white mb-8"></div>
                    
                    <p className="text-lg text-white/90 leading-relaxed mb-8 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                      To meet today's needs while anticipating the challenges of tomorrow. With a 
                      foundation of trust, customer focus, and industry expertise, Golden Extreme is 
                      committed to leading the market and creating long-lasting partnerships.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-8">
                      {["Innovation", "Quality", "Partnership", "Excellence"].map((tag, i) => (
                        <motion.span 
                          key={i}
                          className="bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(0,0,0,0.5)"
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    
                    <motion.button 
                      className="bg-black text-yellow-400 px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors group relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Discover Our Vision</span>
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.button>
                  </motion.div>
                </div>
                
                {/* Right image area */}
                <div className="relative md:col-span-5">
                  <div className="h-[300px] md:h-full relative overflow-hidden">
                    {/* Animated overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-yellow-600/50 to-transparent z-10"
                      animate={{ 
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <motion.div
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1.5 }}
                      viewport={{ once: true }}
                      className="h-full"
                    >
                      <Image 
                        src="/images/img1.jpg"
                        alt="Performance tire with orange rim"
                        fill
                        style={{objectFit: "cover"}}
                        className="h-full"
                      />
                    </motion.div>
                    
                    {/* Floating elements */}
                    <motion.div
                      className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-yellow-400/30 backdrop-blur-sm z-20"
                      animate={{ 
                        y: [0, -15, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <motion.div
                      className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm z-20"
                      animate={{ 
                        y: [0, 10, 0],
                        scale: [1, 0.8, 1],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Our Commitment Section with Animated Icons */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            OUR COMMITMENT TO YOUR BUSINESS
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                icon: "💳",
                title: "Flexible Payment Solutions",
                description: "We offer business-friendly payment options that align with your financial plans and facilitate easy transactions."
              },
              {
                icon: "🎁",
                title: "Exclusive Offers for Partners",
                description: "Enjoy exclusive deals and previews of new product lines available only to our wholesale partners."
              },
              {
                icon: "🛠️",
                title: "Post-Purchase Support",
                description: "Our dedicated support team is always ready to assist with any queries or issues, ensuring a smooth post-purchase experience."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="text-5xl mb-6"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section with Animated List */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-yellow-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            WHY CHOOSE OUR WHOLESALE SHOWROOM?
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Vast Inventory",
                description: "Our showroom features an extensive selection of Tire, catering to a broad spectrum of vehicles including passenger cars, trucks, agricultural machinery, and industrial equipment."
              },
              {
                title: "Competitive Pricing",
                description: "We offer competitive wholesale pricing designed to provide you with the best margins. Enjoy bulk purchase discounts and flexible pricing models that suit your business strategy."
              },
              {
                title: "Dedicated Account Managers",
                description: "Our experienced account managers are committed to understanding your business needs, helping you streamline your inventory, and ensuring you receive personalized service and support."
              },
              {
                title: "Efficient Logistics",
                description: "Featuring a robust supply chain and dependable logistics, we ensure timely delivery and efficient turnaround to meet the demands of your operations."
              },
              {
                title: "Industry Insights and Training",
                description: "Benefit from exclusive access to industry insights and professional training seminars. Stay ahead with expert knowledge and the latest trends in the Tire industry."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="mb-10 flex"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="mr-6 mt-1"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
                    {index + 1}
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Visit Our Showroom Section */}
      <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8 text-black"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              COME AND EXPLORE OUR SHOWROOM!
            </motion.h2>
            
            <p className="text-xl text-gray-900 mb-10 max-w-2xl mx-auto">
              Explore a world of Tire solutions designed for your business. Whether 
              you are looking to expand your product range or seeking reliable 
              suppliers, our showroom is your go-to destination.
            </p>
            
            <div className="bg-white/90 p-8 rounded-xl shadow-lg mb-10">
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div>
                  <h3 className="text-lg font-medium text-gray-500 mb-1">LOCATION</h3>
                  <p className="text-2xl font-bold text-gray-900">DUBAI DEIRA</p>
                </div>
                
                <div className="h-16 w-px bg-gray-300 hidden md:block"></div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-500 mb-1">OPENING HOURS</h3>
                  <p className="text-2xl font-bold text-gray-900">EVERYDAY, 9 AM - 7 PM</p>
                </div>
              </div>
            </div>
            
            <motion.button 
              className="bg-black text-yellow-400 px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}