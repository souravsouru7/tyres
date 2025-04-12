"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import { submitContactForm } from '../../src/utils/api';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    setFormStatus('');

    // Frontend validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.mobileNumber || !formData.message) {
      setFormError('All fields are required');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Mobile number validation
    const mobileNumberRegex = /^[+]?[\d]{10,14}$/;
    if (!mobileNumberRegex.test(formData.mobileNumber)) {
      setFormError('Please enter a valid mobile number');
      setIsSubmitting(false);
      return;
    }

    // Message length validation
    if (formData.message.length < 10) {
      setFormError('Message must be at least 10 characters long');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await submitContactForm(formData);
      if (response.success) {
        setFormStatus('Thank you for your message! We will get back to you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          mobileNumber: '',
          message: ''
        });
      }
    } catch (error) {
      setFormError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Background Pattern */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#f0f0f0_2px,transparent_0)] bg-[size:40px_40px]" />
        </div>

        {/* Floating Elements */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,200,0,0.03) 0%, rgba(255,140,0,0.02) 100%)',
              top: '10%',
              left: '20%',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Hero Section */}
        <div className="relative pt-12 md:pt-20 pb-8 md:pb-12 z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-200/20 text-amber-700 text-xs md:text-sm font-medium mb-6 md:mb-8"
              >
                Get in Touch
              </motion.div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500">
                Contact Us
              </h1>
              <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                We're here to help transform your automotive experience
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Cards Section */}
        <div className="relative py-6 md:py-10 z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-7xl mx-auto">
              {[
                {
                  icon: <FaPhone className="w-5 h-5 md:w-6 md:h-6" />,
                  title: "Phone",
                  content: "+971 586 498 398",
                  link: "tel:+971586498398"
                },
                {
                  icon: <FaEnvelope className="w-5 h-5 md:w-6 md:h-6" />,
                  title: "Email",
                  content: "info@goldenextreme.com",
                  link: "mailto:info@goldenextreme.com"
                },
                {
                  icon: <FaMapMarkerAlt className="w-5 h-5 md:w-6 md:h-6" />,
                  title: "Location",
                  content: "Dubai, UAE"
                },
                {
                  icon: <FaClock className="w-5 h-5 md:w-6 md:h-6" />,
                  title: "Hours",
                  content: "Mon - Fri: 9:00 AM - 6:00 PM"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 p-4 md:p-6 flex flex-col items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-3 md:mb-4 text-white transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-sm md:text-base text-gray-600 hover:text-amber-500 transition-colors break-words">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm md:text-base text-gray-600 break-words">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="relative py-12 md:py-16 z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Send Us a <span className="text-amber-500">Message</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600">We'd love to hear from you</p>
              </div>
              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="Enter your mobile number"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                  {formError && (
                    <div className="text-red-500 text-sm">{formError}</div>
                  )}
                  {formStatus && (
                    <div className="text-green-500 text-sm">{formStatus}</div>
                  )}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative py-12 md:py-16 z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our <span className="text-amber-500">Location</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600">Visit us at our showroom in Dubai</p>
              </div>
              <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.1234567890123!2d55.12345678901234!3d25.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzI0LjQiTiA1NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sae!4v1234567890!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                <a 
                  href="https://maps.app.goo.gl/6QRxDYE2WsqJfJ3L6?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-6 py-3 rounded-lg shadow-lg">
                    <span className="text-gray-800 font-medium">Click to open in Google Maps</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
