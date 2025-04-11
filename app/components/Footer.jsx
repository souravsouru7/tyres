'use client';

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTruck, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com", color: "#E1306C" },
    { icon: FaFacebookF, href: "https://facebook.com", color: "#4267B2" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", color: "#0077B5" }
  ];

  const features = [
    { icon: FaTruck, title: "Fast Delivery", description: "Across Dubai" },
    { icon: FaHeadset, title: "24/7 Support", description: "Always here to help" },
    { icon: FaShieldAlt, title: "Quality Guaranteed", description: "Premium products" }
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-100 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 relative inline-block">
              GOLDENEXTREME
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-yellow-500 rounded-full" />
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your trusted partner for premium tyres and automotive solutions in Dubai.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={social.href}
                    className="p-3 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: `${social.color}10`,
                      color: social.color
                    }}
                  >
                    <social.icon size={20} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-8">
              {/* Products Section with Subcategories - Left Side */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Products</h3>
                </div>
                {[
                  { name: 'Wheels', path: '/products?category=wheels' },
                  { name: 'Battery', path: '/products?category=battery' },
                  { name: 'Tyres', path: '/products?category=tyres' }
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <Link 
                      href={link.path}
                      className="text-gray-600 hover:text-yellow-600 transition-colors flex items-center"
                    >
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Other Links - Right Side */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Quick Links</h3>
                </div>
                {[
                  { name: 'About Us', path: '/about-us' },
                  { name: 'Contact', path: '/contact' },
                  { name: 'Brands', path: '/brands' }
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <Link 
                      href={link.path}
                      className="text-gray-600 hover:text-yellow-600 transition-colors flex items-center"
                    >
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
            <div className="space-y-3">
              {[
                { icon: '📞', text: '+971 586 498 398' },
                { icon: '📞', text: '+971 422 29799' },
                { icon: '✉️', text: 'Info@goldenextreme.com' }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3"
                >
                  <span className="text-xl">{contact.icon}</span>
                  <p className="text-gray-600">{contact.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="text-center">
          
            <p className="text-sm text-gray-500 mt-2">
              Driven by Golden Extreme Auto Spare Parts LLC. Powered by Dimark Marketing Management LLC.
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        footer {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </footer>
  );
};

export default Footer;