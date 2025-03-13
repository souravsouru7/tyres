// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-yellow-400 py-2 sm:py-3 md:py-4">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
            <li>
              <Link href="/" className="text-black font-medium text-sm sm:text-base hover:text-yellow-800 transition-colors">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-black font-medium text-sm sm:text-base hover:text-yellow-800 transition-colors">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/our-brands" className="text-black font-medium text-sm sm:text-base hover:text-yellow-800 transition-colors">
                OUR BRANDS
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-black font-medium text-sm sm:text-base hover:text-yellow-800 transition-colors">
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link href="/events-news" className="text-black font-medium text-sm sm:text-base hover:text-yellow-800 transition-colors">
                EVENTS/NEWS
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-black font-medium text-sm sm:text-base hover:text-yellow-800 transition-colors">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex justify-end">
            <button 
              onClick={toggleMenu}
              className="text-black p-2"
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="flex flex-col mt-2 space-y-1">
                  <li>
                    <Link 
                      href="/" 
                      className="block py-2 px-4 text-black font-medium hover:bg-yellow-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/about-us" 
                      className="block py-2 px-4 text-black font-medium hover:bg-yellow-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/our-brands" 
                      className="block py-2 px-4 text-black font-medium hover:bg-yellow-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      OUR BRANDS
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/products" 
                      className="block py-2 px-4 text-black font-medium hover:bg-yellow-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      PRODUCTS
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/events-news" 
                      className="block py-2 px-4 text-black font-medium hover:bg-yellow-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      EVENTS/NEWS
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact-us" 
                      className="block py-2 px-4 text-black font-medium hover:bg-yellow-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;