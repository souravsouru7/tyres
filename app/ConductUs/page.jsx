"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setFormStatus('Thank you for your message! We will get back to you soon.');
    setIsSubmitting(false);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Layout>
      <div className="w-full">
        {/* Modern Hero Section with Parallax Effect */}
        <div className="relative w-full h-[60vh] overflow-hidden bg-gray-900">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-900/50 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute inset-0">
            <Image 
              src="/conductus.jpg" 
              alt="Contact Us Banner" 
              fill
              className="object-cover transform scale-105"
              priority
            />
          </div>
          <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Let's <span className="text-yellow-500">Connect</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
                We're here to transform your automotive experience
              </p>
              <motion.a
                href="#contact-form"
                className="inline-block bg-yellow-500 text-gray-900 px-10 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="bg-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Phone Card */}
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeIn}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mr-4">
                    <FaPhone className="w-7 h-7 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Phone</h3>
                </div>
                <a href="tel:+971586498398" className="text-gray-600 hover:text-yellow-500 transition-colors text-lg">
                  +971 586 498 398
                </a>
              </motion.div>

              {/* Email Card */}
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeIn}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mr-4">
                    <FaEnvelope className="w-7 h-7 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Email</h3>
                </div>
                <a href="mailto:info@goldenextreme.com" className="text-gray-600 hover:text-yellow-500 transition-colors text-lg">
                  info@goldenextreme.com
                </a>
              </motion.div>

              {/* Address Card */}
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeIn}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="w-7 h-7 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Address</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Dubai, UAE
                </p>
              </motion.div>

              {/* Hours Card */}
              <motion.div 
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeIn}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mr-4">
                    <FaClock className="w-7 h-7 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Hours</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="contact-form" className="bg-gray-50 py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div 
              className="bg-white p-12 rounded-3xl border border-gray-100 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h3 
                className="text-4xl font-bold mb-8 text-gray-900 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Send us a <span className="text-yellow-500">Message</span>
              </motion.h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    className="relative"
                    variants={fadeIn}
                  >
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First name <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-6 py-3 text-gray-900 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 placeholder-gray-400"
                      placeholder="Your first name"
                    />
                  </motion.div>
                  <motion.div 
                    className="relative"
                    variants={fadeIn}
                  >
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full bg-white border border-gray-200 rounded-xl px-6 py-3 text-gray-900 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 placeholder-gray-400"
                      placeholder="Your last name"
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-yellow-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-3 text-gray-900 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 placeholder-gray-400"
                    placeholder="Your email address"
                  />
                </motion.div>
                
                <motion.div 
                  className="relative"
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-yellow-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="6"
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-3 text-gray-900 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 placeholder-gray-400 resize-none"
                    placeholder="Your message"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-500 text-gray-900 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.div>

                {formStatus && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-green-600 font-medium"
                  >
                    {formStatus}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
