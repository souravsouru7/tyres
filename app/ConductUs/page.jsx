"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    setFormStatus('Thank you for your message! We will get back to you soon.');
    // Reset form fields if needed
  };

  // Animation variants
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
      {/* Hero Banner Section */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-blue-900/70 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
        
        </motion.div>
        <div className="absolute inset-0">
          <Image 
            src="/conductus.jpg" 
            alt="Contact Us Banner" 
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Contact Information Section */}
      <motion.div 
        className="bg-gray-900 text-white py-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-yellow-500 text-center mb-8"
            variants={fadeIn}
          >
            Contact Golden Extreme Trading – We're Here to Help
          </motion.h2>
          
          <motion.p 
            className="text-lg leading-relaxed mb-6"
            variants={fadeIn}
          >
            At Golden Extreme Trading, we value our customers and are committed to providing 
            exceptional support. Whether you have inquiries about our products, including tires, 
            wheels, and batteries, or need assistance with your order, our team is here to assist 
            you. Contact us today via phone, email, or visit our location to discuss your automotive 
            needs. We strive to offer quick and reliable service, ensuring you get the information and 
            solutions you need promptly. Reach out to Golden Extreme Trading and experience 
            topnotch customer service.
          </motion.p>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <div className="bg-yellow-400 py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div 
            className="bg-white p-8 rounded-none shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-2xl font-medium mb-6 text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Contact us
            </motion.h3>
            
            <form onSubmit={handleSubmit}>
              <motion.div 
                className="flex flex-col md:flex-row gap-4 mb-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="flex-1"
                  variants={fadeIn}
                >
                  <label htmlFor="firstName" className="block text-sm font-normal mb-1 text-gray-700">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full border-b border-gray-800 pb-2 focus:outline-none text-gray-800"
                    placeholder="Your first name"
                  />
                </motion.div>
                <motion.div 
                  className="flex-1"
                  variants={fadeIn}
                >
                  <label htmlFor="lastName" className="block text-sm font-normal mb-1 text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full border-b border-gray-800 pb-2 focus:outline-none text-gray-800"
                    placeholder="Your last name"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="mb-6"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-sm font-normal mb-1 text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full border-b border-gray-800 pb-2 focus:outline-none text-gray-800"
                  placeholder="Your email address"
                />
              </motion.div>
              
              <motion.div 
                className="mb-8"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="message" className="block text-sm font-normal mb-1 text-gray-700">
                  Write a message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border-b border-gray-800 pb-2 focus:outline-none resize-none text-gray-800"
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full md:w-auto md:px-16 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Submit
              </motion.button>
              
              {formStatus && (
                <motion.div 
                  className="mt-4 p-3 bg-green-100 text-green-700 rounded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  {formStatus}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Contact Details with Map Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="flex flex-col md:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Contact Information */}
            <motion.div 
              className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
              variants={fadeIn}
            >
              <motion.div 
                className="flex items-center mb-6"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+971586498398" className="text-blue-600 text-lg">+971 586 498 398</a>
              </motion.div>
              
              <motion.div 
                className="flex items-center mb-6"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+97142229799" className="text-blue-600 text-lg">+971 422 29799</a>
              </motion.div>
              
              <motion.div 
                className="flex items-center mb-6"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:Info@goldenextreme.com" className="text-blue-600 text-lg">Info@goldenextreme.com</a>
              </motion.div>
              
              <motion.div 
                className="flex items-start mb-6"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 mr-4 flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-600 text-lg">DEIRA,DUBAI</p>
                  <p className="text-blue-600 text-lg">UNITED ARAB EMIRATES</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Map */}
            <motion.div 
              className="w-full md:w-1/2 px-4"
              variants={fadeIn}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14440.421193473606!2d55.29921!3d25.27105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ccf30bc59df%3A0x8a7f451ffcf1c3b5!2sDeira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ContactUs;
