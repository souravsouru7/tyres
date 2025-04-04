"use client";

import React from 'react';
import Layout from '../components/Layout';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight, FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';

export default function EventsPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const events = [
    {
      id: 1,
      title: "Dubai International Motor Show",
      date: "March 15, 2025",
      location: "Dubai World Trade Centre",
      time: "10:00 AM - 8:00 PM",
      image: "/new/ADM_4614.JPG",
      category: "EXHIBITION"
    },
    {
      id: 2,
      title: "Off-Road Adventure Expo",
      date: "April 20, 2025",
      location: "Dubai Autodrome",
      time: "9:00 AM - 6:00 PM",
      image: "/new/ADM_4501.JPG",
      category: "EXPO"
    },
    {
      id: 3,
      title: "Desert Racing Championship",
      date: "May 5, 2025",
      location: "Dubai Desert Conservation Reserve",
      time: "7:00 AM - 5:00 PM",
      image: "/new/ADM_4620.JPG",
      category: "RACING"
    }
  ];

  const news = [
    {
      id: 1,
      title: "New All-Terrain Tire Series Announced",
      date: "March 15, 2025",
      category: "PRODUCT LAUNCH",
      image: "/new/ADM_4614.JPG",
      excerpt: "Desert Tires unveils its latest innovation in all-terrain technology, designed for extreme conditions."
    },
    {
      id: 2,
      title: "Partnership with Racing Team",
      date: "February 28, 2025",
      category: "PARTNERSHIP",
      image: "/new/ADM_4501.JPG",
      excerpt: "Exciting new partnership announced with the champion off-road racing team for the upcoming season."
    },
    {
      id: 3,
      title: "Eco-Friendly Manufacturing Initiative",
      date: "January 10, 2025",
      category: "SUSTAINABILITY",
      image: "/new/ADM_4620.JPG",
      excerpt: "Desert Tires commits to reducing carbon footprint with new sustainable manufacturing processes."
    }
  ];

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
        <div className="relative pt-32 pb-16 z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-200/20 text-amber-700 text-sm font-medium mb-8"
              >
                Stay Updated
              </motion.div>
              <h1 className="text-7xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500">
                Events & News
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join us for exciting events and stay informed about the latest developments
              </p>
            </motion.div>
          </div>
        </div>

        {/* Events Section */}
        <div className="relative py-16 z-10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-800 text-center mb-12"
            >
              Upcoming Events
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-sm font-semibold rounded-full">
                      {event.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <FiCalendar className="w-4 h-4 mr-2 text-amber-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="w-4 h-4 mr-2 text-amber-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FiClock className="w-4 h-4 mr-2 text-amber-500" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg flex items-center justify-center group"
                    >
                      Register Now
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="relative py-16 z-10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-800 text-center mb-12"
            >
              Latest News
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-sm font-semibold rounded-full">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-amber-500 font-medium flex items-center group"
                      >
                        Read More
                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="relative py-16 z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-amber-200/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Stay Updated with Our Newsletter
                </h2>
                <p className="text-gray-600">
                  Subscribe to receive the latest news, event announcements, and exclusive offers
                </p>
              </div>
              <form className="space-y-4 md:space-y-0 md:flex md:gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full md:flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-bold transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
