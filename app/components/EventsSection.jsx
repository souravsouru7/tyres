"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiCalendar, FiMapPin, FiArrowRight } from 'react-icons/fi';

const EventsSection = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [visibleEvents, setVisibleEvents] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: "Desert Racing Championship",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1582559240473-7303f8de0c25",
      description: "Experience the thrill of off-road racing in the Dubai desert.",
      status: "Registration Open",
      location: "Dubai Desert Conservation Reserve",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 2,
      title: "Tire Technology Expo",
      date: "May 8-10, 2025",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
      description: "Discover the latest innovations in tire technology and meet industry experts.",
      status: "Coming Soon",
      location: "Dubai World Trade Centre",
      color: "from-blue-400 to-purple-500"
    },
    {
      id: 3,
      title: "4x4 Adventure Meet",
      date: "June 22, 2025",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
      description: "Join fellow off-road enthusiasts for an exciting adventure through challenging terrain.",
      status: "Early Bird",
      location: "Hatta Mountain Area",
      color: "from-green-400 to-teal-500"
    }
  ];

  useEffect(() => {
    upcomingEvents.forEach((event, index) => {
      setTimeout(() => {
        setVisibleEvents(prev => [...prev, event.id]);
      }, index * 300);
    });
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 4px 4px, black 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold tracking-wide">
              UPCOMING EVENTS
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
          >
            Join Our Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">
              Adventure
            </span>
          </motion.h2>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
              onHoverStart={() => setHoveredEvent(event.id)}
              onHoverEnd={() => setHoveredEvent(null)}
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 group-hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredEvent === event.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Status Badge */}
                  <div className="absolute -top-5 right-6">
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${event.color} text-white text-sm font-semibold shadow-lg`}>
                      {event.status}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600">
                      {event.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center text-gray-500">
                        <FiCalendar className="w-5 h-5 mr-2 text-yellow-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <FiMapPin className="w-5 h-5 mr-2 text-yellow-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 w-full py-3 px-6 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold flex items-center justify-center group/btn"
                    >
                      <span>Register Now</span>
                      <FiArrowRight className="ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            View All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;