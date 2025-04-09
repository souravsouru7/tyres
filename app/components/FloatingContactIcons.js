"use client";
import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const FloatingContactIcons = () => {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-4 z-50">
      <a 
        href="mailto:contact@example.com" 
        className="bg-yellow-600 text-white p-3 rounded-full shadow-lg hover:bg-yellow-700 transition-colors duration-300"
        aria-label="Email us"
      >
        <FaEnvelope size={24} />
      </a>
      <a 
        href="tel:+1234567890" 
        className="bg-yellow-600 text-white p-3 rounded-full shadow-lg hover:bg-yellow-700 transition-colors duration-300"
        aria-label="Call us"
      >
        <FaPhone size={24} />
      </a>
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-yellow-600 text-white p-3 rounded-full shadow-lg hover:bg-yellow-700 transition-colors duration-300"
        aria-label="WhatsApp us"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default FloatingContactIcons; 