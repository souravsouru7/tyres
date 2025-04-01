'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const linkVariants = {
    initial: { y: 0 },
    hover: { y: -3 }
  };

  const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com", color: "#E1306C", label: "Instagram" },
    { icon: FaFacebookF, href: "https://facebook.com", color: "#4267B2", label: "Facebook" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", color: "#0077B5", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-white relative overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 4px 4px, black 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(234, 179, 8, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)
          `
        }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(234,179,8,0.05) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Main Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Come and explore
            </span>
            <br />
            <span className="text-gray-900">our showroom!</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Navigation Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16"
        >
          {/* About Us */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-wide">ABOUT US</h3>
            <motion.div
              initial={{ height: 2 }}
              whileInView={{ width: [0, 40] }}
              viewport={{ once: true }}
              className="w-10 h-0.5 bg-yellow-500 mb-4 hidden md:block"
            />
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-wide">PRODUCTS</h3>
            <motion.div
              initial={{ height: 2 }}
              whileInView={{ width: [0, 40] }}
              viewport={{ once: true }}
              className="w-10 h-0.5 bg-yellow-500 mb-4 hidden md:block"
            />
            <div className="space-y-2">
              <motion.p variants={linkVariants} whileHover="hover" className="text-gray-600 hover:text-yellow-600 transition-colors cursor-pointer">TYRES</motion.p>
              <motion.p variants={linkVariants} whileHover="hover" className="text-gray-600 hover:text-yellow-600 transition-colors cursor-pointer">WHEELS</motion.p>
              <motion.p variants={linkVariants} whileHover="hover" className="text-gray-600 hover:text-yellow-600 transition-colors cursor-pointer">BATTERIES</motion.p>
              <div className="pl-4 space-y-2 mt-2">
                <motion.p variants={linkVariants} whileHover="hover" className="text-gray-500 hover:text-yellow-600 transition-colors cursor-pointer">LTR</motion.p>
                <motion.p variants={linkVariants} whileHover="hover" className="text-gray-500 hover:text-yellow-600 transition-colors cursor-pointer">OTR</motion.p>
                <motion.p variants={linkVariants} whileHover="hover" className="text-gray-500 hover:text-yellow-600 transition-colors cursor-pointer">PCR</motion.p>
                <motion.p variants={linkVariants} whileHover="hover" className="text-gray-500 hover:text-yellow-600 transition-colors cursor-pointer">TBR</motion.p>
              </div>
            </div>
          </motion.div>

          {/* Brands */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-wide">OUR BRANDS</h3>
            <motion.div
              initial={{ height: 2 }}
              whileInView={{ width: [0, 40] }}
              viewport={{ once: true }}
              className="w-10 h-0.5 bg-yellow-500 mb-4 hidden md:block"
            />
            <motion.p 
              variants={linkVariants}
              whileHover="hover"
              className="text-gray-600 hover:text-yellow-600 transition-colors cursor-pointer"
            >
              FALCON
            </motion.p>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-wide">CONTACT US</h3>
            <motion.div
              initial={{ height: 2 }}
              whileInView={{ width: [0, 40] }}
              viewport={{ once: true }}
              className="w-10 h-0.5 bg-yellow-500 mb-4 hidden md:block"
            />
            <div className="space-y-2">
              <motion.p 
                variants={linkVariants}
                whileHover="hover"
                className="text-gray-600 hover:text-yellow-600 transition-colors cursor-pointer"
              >
                +971 586 498 398
              </motion.p>
              <motion.p 
                variants={linkVariants}
                whileHover="hover"
                className="text-gray-600 hover:text-yellow-600 transition-colors cursor-pointer"
              >
                +971 422 29799
              </motion.p>
              <motion.p 
                variants={linkVariants}
                whileHover="hover"
                className="text-gray-600 hover:text-yellow-600 transition-colors cursor-pointer"
              >
                Info@goldenextreme.com
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          variants={containerVariants}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.label}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              onHoverStart={() => setHoveredLink(index)}
              onHoverEnd={() => setHoveredLink(null)}
            >
              <Link 
                href={social.href}
                className="relative block p-3 rounded-xl transition-all duration-300 group"
                style={{
                  backgroundColor: `${social.color}10`
                }}
              >
                <social.icon 
                  size={24}
                  className="transition-colors duration-300"
                  style={{ color: social.color }}
                />
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    backgroundColor: `${social.color}20`
                  }}
                />
                {hoveredLink === index && (
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-3 rounded-md"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    {social.label}
                  </motion.div>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div 
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block bg-gray-50 rounded-xl px-6 py-4"
          >
            <p className="text-sm text-gray-600 mb-1">ALL COPYRIGHTS RESERVED @2024 GOLDENEXTREME</p>
            <p className="text-sm text-gray-600">PROUDLY DEVELOPED BY DIMARK MARKETING</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
        
        footer {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </footer>
  );
};

export default Footer; 