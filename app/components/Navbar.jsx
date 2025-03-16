// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { 
      height: 0, 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`${scrolled ? 'py-2 shadow-md bg-yellow-500' : 'py-2 sm:py-3 md:py-4 bg-yellow-400'} sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
            {[
              { href: '/', label: 'HOME' },
              { href: '/about-us', label: 'ABOUT US' },
              { href: '/our-brands', label: 'OUR BRANDS' },
              { href: '/products', label: 'PRODUCTS' },
              { href: '/events', label: 'EVENTS/NEWS' },
              { href: '/ConductUs', label: 'CONTACT US' }
            ].map((link) => (
              <motion.li key={link.href} variants={itemVariants}>
                <Link 
                  href={link.href} 
                  className={`relative text-black font-medium text-sm sm:text-base hover:text-yellow-800 transition-colors ${
                    pathname === link.href ? 'font-bold' : ''
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex justify-end">
            <motion.button 
              onClick={toggleMenu}
              className="text-black p-2"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
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
            </motion.button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="overflow-hidden"
              >
                <ul className="flex flex-col mt-2 space-y-1">
                  {[
                    { href: '/', label: 'HOME' },
                    { href: '/about-us', label: 'ABOUT US' },
                    { href: '/our-brands', label: 'OUR BRANDS' },
                    { href: '/products', label: 'PRODUCTS' },
                    { href: '/events', label: 'EVENTS/NEWS' },
                    { href: '/ConductUs', label: 'CONTACT US' }
                  ].map((link) => (
                    <motion.li key={link.href} variants={mobileItemVariants}>
                      <Link 
                        href={link.href} 
                        className={`block py-2 px-4 text-black font-medium hover:bg-yellow-500 transition-colors ${
                          pathname === link.href ? 'bg-yellow-500 font-bold' : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;