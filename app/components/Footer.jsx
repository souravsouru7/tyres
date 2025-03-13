import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2A2A2A] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <h1 className="text-[#FFD700] text-4xl md:text-5xl font-bold text-center mb-12 tracking-wide">
          Come and explore our showroom!
        </h1>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
          {/* About Us */}
          <div className="text-center md:text-left">
            <h2 className="text-white font-bold mb-3 tracking-wider">ABOUT US</h2>
          </div>

          {/* Products Section */}
          <div className="text-center md:text-left">
            <h2 className="text-white font-bold mb-3 tracking-wider">PRODUCTS</h2>
            <div className="space-y-2">
              <p className="tracking-wide">TYRES</p>
              <p className="tracking-wide">WHEELS</p>
              <p className="tracking-wide">BATTERIES</p>
              <div className="pl-6 space-y-2 mt-2">
                <p className="tracking-wide text-gray-300">LTR</p>
                <p className="tracking-wide text-gray-300">OTR</p>
                <p className="tracking-wide text-gray-300">PCR</p>
                <p className="tracking-wide text-gray-300">TBR</p>
              </div>
            </div>
          </div>

          {/* Our Brands */}
          <div className="text-center md:text-left">
            <h2 className="text-white font-bold mb-3 tracking-wider">OUR BRANDS</h2>
            <p className="tracking-wide">FALCON</p>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h2 className="text-white font-bold mb-3 tracking-wider">CONTACT US</h2>
            <div className="space-y-2">
              <p className="text-gray-400 tracking-wide">+971 586 498 398</p>
              <p className="text-gray-400 tracking-wide">+971 422 29799</p>
              <p className="text-gray-400 tracking-wide">Info@goldenextreme.com</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-10 mb-8">
          <Link href="https://instagram.com" className="bg-[#E1306C] p-2.5 rounded-md hover:opacity-90 transition-opacity">
            <FaInstagram size={28} />
          </Link>
          <Link href="https://facebook.com" className="bg-[#4267B2] p-2.5 rounded-md hover:opacity-90 transition-opacity">
            <FaFacebookF size={28} />
          </Link>
          <Link href="https://linkedin.com" className="bg-[#0077B5] p-2.5 rounded-md hover:opacity-90 transition-opacity">
            <FaLinkedinIn size={28} />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-8">
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
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          font-weight: 600;
        }
        p {
          font-size: 0.95rem;
          line-height: 1.6;
          letter-spacing: 0.05em;
        }
        .text-gray-400 {
          font-weight: 400;
        }
      `}</style>
    </footer>
  );
};

export default Footer; 