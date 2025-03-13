// components/Navbar.js
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full">
      <nav className="bg-yellow-400">
        {/* Mobile Menu Button */}
        <div className="md:hidden p-4">
          <button 
            onClick={toggleMobileMenu}
            className="text-black p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center space-x-8 py-4">
          <li className="border-r pr-8">
            <Link href="/" className="text-black hover:underline uppercase font-medium">
              HOME
            </Link>
          </li>
          <li className="border-r pr-8">
            <Link href="/about-us" className="text-black hover:underline uppercase font-medium">
              ABOUT US
            </Link>
          </li>
          <li className="border-r pr-8">
            <Link href="/our-brands" className="text-black hover:underline uppercase font-medium">
              OUR BRANDS
            </Link>
          </li>
          <li className="border-r pr-8">
            <Link href="/products" className="text-black hover:underline uppercase font-medium">
              PRODUCTS
            </Link>
          </li>
          <li className="border-r pr-8">
            <Link href="/events-news" className="text-black hover:underline uppercase font-medium">
              EVENTS/NEWS
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="text-black hover:underline uppercase font-medium">
              CONTACT US
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="w-full text-center border-b border-yellow-500 pb-2">
              <Link href="/" className="text-black hover:underline uppercase font-medium block py-2">
                HOME
              </Link>
            </li>
            <li className="w-full text-center border-b border-yellow-500 pb-2">
              <Link href="/about-us" className="text-black hover:underline uppercase font-medium block py-2">
                ABOUT US
              </Link>
            </li>
            <li className="w-full text-center border-b border-yellow-500 pb-2">
              <Link href="/our-brands" className="text-black hover:underline uppercase font-medium block py-2">
                OUR BRANDS
              </Link>
            </li>
            <li className="w-full text-center border-b border-yellow-500 pb-2">
              <Link href="/products" className="text-black hover:underline uppercase font-medium block py-2">
                PRODUCTS
              </Link>
            </li>
            <li className="w-full text-center border-b border-yellow-500 pb-2">
              <Link href="/events-news" className="text-black hover:underline uppercase font-medium block py-2">
                EVENTS/NEWS
              </Link>
            </li>
            <li className="w-full text-center pb-2">
              <Link href="/contact-us" className="text-black hover:underline uppercase font-medium block py-2">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;