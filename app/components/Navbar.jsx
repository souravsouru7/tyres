"use client";

// components/Navbar.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMenu, FiX, FiHome, FiInfo, FiPackage, FiCalendar, FiMail, FiStar } from 'react-icons/fi';

const Navbar = ({ isScrolled }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { id: 'home', label: 'HOME', href: '/', icon: <FiHome className="w-5 h-5" /> },
    { id: 'about', label: 'ABOUT US', href: '/about-us', icon: <FiInfo className="w-5 h-5" /> },
    { id: 'brands', label: 'OUR BRANDS', href: '/our-brands', icon: <FiStar className="w-5 h-5" /> },
    { id: 'products', label: 'PRODUCTS', href: '/products', icon: <FiPackage className="w-5 h-5" /> },
    { id: 'events', label: 'EVENTS', href: '/events', icon: <FiCalendar className="w-5 h-5" /> },
    { id: 'contact', label: 'CONTACT', href: '/ConductUs', icon: <FiMail className="w-5 h-5" /> },
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
    setIsSearchOpen(false);
  }, [pathname]);

  return (
    <motion.nav 
      className={`w-full transition-all duration-500 fixed top-0 left-0 right-0 z-50 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/95 backdrop-blur-md'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-4">
        <div className="flex flex-col md:flex-row items-center justify-between h-20 md:h-24">
          {/* Logo Section */}
          <Link href="/" className="flex items-center justify-center w-full md:w-auto py-2">
            <Image
              src="/logo.png"
              alt="Golden Extreme Logo"
              width={220}
              height={160}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="absolute right-4 top-6 md:top-8 flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-amber-600 transition-colors duration-300"
            >
              <FiSearch size={20} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-amber-600 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>

          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center justify-center flex-1 px-4 md:px-8 space-x-2 md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`px-3 md:px-4 py-2 mx-1 md:mx-2 text-sm font-medium transition-all duration-300 relative group ${
                  isActive(item.href) 
                    ? 'text-amber-600' 
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                  isActive(item.href) 
                    ? 'bg-amber-500 scale-x-100' 
                    : 'bg-amber-500 scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          {/* Right Side Actions - Desktop */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-48 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
              />
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-screen bg-white z-[100]"
          >
            <div className="relative w-full h-full flex flex-col items-center px-4">
              {/* Close button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-4 p-2 text-gray-600 hover:text-amber-600"
              >
                <FiX size={28} />
              </button>

              {/* Content Container */}
              <div className="flex flex-col items-center justify-between h-full w-full py-12">
                {/* Large Centered Logo */}
                <div className="mt-8">
                  <Image
                    src="/logo.png"
                    alt="Golden Extreme Logo"
                    width={300}
                    height={220}
                    className="w-auto h-auto"
                    priority
                  />
                </div>

                {/* Menu Items */}
                <div className="flex flex-col items-center justify-center space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 text-xl font-medium transition-all duration-300 ${
                        isActive(item.href)
                          ? 'text-amber-600'
                          : 'text-gray-700 hover:text-amber-600'
                      }`}
                    >
                      <span className="text-amber-500">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>

                {/* Search Bar */}
                <div className="w-full px-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="w-full px-6 py-4 rounded-full bg-gray-50 border border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                    />
                    <FiSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Search Bar - Only show when search is open and menu is closed */}
      <AnimatePresence>
        {isSearchOpen && !isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                />
                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;