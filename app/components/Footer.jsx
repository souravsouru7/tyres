import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2A2A2A] text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Header */}
        <h1 className="text-[#FFD700] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 tracking-wide">
          Come and explore our showroom!
        </h1>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto mb-6 sm:mb-8">
          {/* About Us */}
          <div className="text-center md:text-left">
            <h2 className="text-white font-bold mb-2 sm:mb-3 tracking-wider text-sm sm:text-base">ABOUT US</h2>
          </div>

          {/* Products Section */}
          <div className="text-center md:text-left">
            <h2 className="text-white font-bold mb-2 sm:mb-3 tracking-wider text-sm sm:text-base">PRODUCTS</h2>
            <div className="space-y-1 sm:space-y-2">
              <p className="tracking-wide text-xs sm:text-sm">TYRES</p>
              <p className="tracking-wide text-xs sm:text-sm">WHEELS</p>
              <p className="tracking-wide text-xs sm:text-sm">BATTERIES</p>
              <div className="pl-3 sm:pl-6 space-y-1 sm:space-y-2 mt-1 sm:mt-2">
                <p className="tracking-wide text-gray-300 text-xs sm:text-sm">LTR</p>
                <p className="tracking-wide text-gray-300 text-xs sm:text-sm">OTR</p>
                <p className="tracking-wide text-gray-300 text-xs sm:text-sm">PCR</p>
                <p className="tracking-wide text-gray-300 text-xs sm:text-sm">TBR</p>
              </div>
            </div>
          </div>

          {/* Our Brands */}
          <div className="text-center md:text-left">
            <h2 className="text-white font-bold mb-2 sm:mb-3 tracking-wider text-sm sm:text-base">OUR BRANDS</h2>
            <p className="tracking-wide text-xs sm:text-sm">FALCON</p>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h2 className="text-white font-bold mb-2 sm:mb-3 tracking-wider text-sm sm:text-base">CONTACT US</h2>
            <div className="space-y-1 sm:space-y-2">
              <p className="text-gray-400 tracking-wide text-xs sm:text-sm">+971 586 498 398</p>
              <p className="text-gray-400 tracking-wide text-xs sm:text-sm">+971 422 29799</p>
              <p className="text-gray-400 tracking-wide text-xs sm:text-sm">Info@goldenextreme.com</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8">
          <Link href="https://instagram.com" className="bg-[#E1306C] p-2 sm:p-2.5 rounded-md hover:opacity-90 transition-opacity">
            <FaInstagram size={20} className="sm:w-6 sm:h-6" />
          </Link>
          <Link href="https://facebook.com" className="bg-[#4267B2] p-2 sm:p-2.5 rounded-md hover:opacity-90 transition-opacity">
            <FaFacebookF size={20} className="sm:w-6 sm:h-6" />
          </Link>
          <Link href="https://linkedin.com" className="bg-[#0077B5] p-2 sm:p-2.5 rounded-md hover:opacity-90 transition-opacity">
            <FaLinkedinIn size={20} className="sm:w-6 sm:h-6" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm mt-6 sm:mt-8">
          <p className="text-white tracking-wider mb-1">ALL COPYRIGHTS RESERVED @2024 GOLDENEXTREME</p>
          <p className="text-white tracking-wider">PROUDLY DEVELOPED BY DIMARK MARKETING</p>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
        
        footer {
          font-family: 'Montserrat', sans-serif;
        }
        h1 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        h2 {
          font-size: 0.95rem;
          letter-spacing: 0.1em;
          font-weight: 600;
        }
        p {
          font-size: 0.85rem;
          line-height: 1.6;
          letter-spacing: 0.05em;
        }
        @media (min-width: 640px) {
          h2 {
            font-size: 1.1rem;
          }
          p {
            font-size: 0.95rem;
          }
        }
        .text-gray-400 {
          font-weight: 400;
        }
      `}</style>
    </footer>
  );
};

export default Footer; 