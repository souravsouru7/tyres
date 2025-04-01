"use client";

// components/Navbar.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ isScrolled }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { id: 'home', label: 'HOME', href: '/' },
    { id: 'products', label: 'PRODUCTS', href: '/products' },
    { id: 'brands', label: 'OUR BRANDS', href: '/our-brands' },
    { id: 'events', label: 'EVENTS', href: '/events' },
    { id: 'contact', label: 'CONTACT US', href: '/ConductUs' },
  ];

  const isActive = (href) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav 
      className={`w-full transition-all duration-500 fixed top-0 left-0 right-0 z-50 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <span className="text-sm md:text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                GOLDEN
              </span>
              <Image
                src="/logo.png"
                alt="Extreme Logo"
                width={40}
                height={20}
                className="mx-1 md:mx-2 md:w-[80px] md:h-[40px]"
              />
              <span className="text-sm md:text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                EXTREME
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 text-gray-600 hover:text-yellow-600 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>

          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`px-4 py-2 mx-2 text-sm font-medium transition-all duration-300 relative group ${
                  isActive(item.href) 
                    ? 'text-yellow-600' 
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                  isActive(item.href) 
                    ? 'bg-yellow-500 scale-x-100' 
                    : 'bg-yellow-500 scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          {/* Right Side Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-48 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-yellow-500/50 transition-all duration-300"
              />
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-600 hover:text-yellow-600 transition-colors duration-300"
              >
                <FiShoppingCart className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-600 hover:text-yellow-600 transition-colors duration-300"
              >
                <FiUser className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2">
            <div className="relative mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-yellow-500/50 transition-all duration-300"
              />
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`block px-4 py-2 text-sm font-medium ${
                  isActive(item.href)
                    ? 'text-yellow-600'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;