import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const EventsSection = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [visibleEvents, setVisibleEvents] = useState([]);

  // Updated events with external images
  const upcomingEvents = [
    {
      id: 1,
      title: "Desert Racing Championship",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1582559240473-7303f8de0c25",
      description: "Experience the thrill of off-road racing in the Dubai desert.",
      status: "Registration Open",
      location: "Dubai Desert Conservation Reserve"
    },
    {
      id: 2,
      title: "Tire Technology Expo",
      date: "May 8-10, 2025",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
      description: "Discover the latest innovations in tire technology and meet industry experts.",
      status: "Coming Soon",
      location: "Dubai World Trade Centre"
    },
    {
      id: 3,
      title: "4x4 Adventure Meet",
      date: "June 22, 2025",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
      description: "Join fellow off-road enthusiasts for an exciting adventure through challenging terrain.",
      status: "Early Bird",
      location: "Hatta Mountain Area"
    }
  ];

  // Simulate loading events gradually
  useEffect(() => {
    upcomingEvents.forEach((event, index) => {
      setTimeout(() => {
        setVisibleEvents(prev => [...prev, event.id]);
      }, index * 300);
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14
      }
    }
  };

  const statusColors = {
    "Registration Open": "bg-green-500",
    "Early Bird": "bg-blue-500",
    "Coming Soon": "bg-purple-500"
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-yellow-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-yellow-300 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-2 sm:mb-3"
          >
            <span className="px-3 sm:px-4 py-1 bg-yellow-500 text-gray-900 text-xs sm:text-sm font-bold rounded-full">
              2025 SEASON
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600">
              Upcoming Events
            </span>
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 sm:h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto mb-4 sm:mb-6 md:mb-8"
          ></motion.div>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed">
            Mark your calendar for these exclusive events designed for off-road enthusiasts and industry professionals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              animate={{
                opacity: visibleEvents.includes(event.id) ? 1 : 0,
                y: visibleEvents.includes(event.id) ? 0 : 50
              }}
              className="relative group"
              onHoverStart={() => setHoveredEvent(event.id)}
              onHoverEnd={() => setHoveredEvent(null)}
            >
              <div className="relative h-[22rem] sm:h-[24rem] md:h-[28rem] bg-white rounded-2xl overflow-hidden shadow-xl">
                {/* Card background image */}
                <div className="absolute inset-0">
                  <motion.div
                    animate={{
                      scale: hoveredEvent === event.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.7 }}
                    className="h-full w-full"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/60 to-transparent"></div>
                </div>
                
                <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-between z-30">
                  <motion.div>
                    <span className={`inline-block px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 ${statusColors[event.status] || "bg-yellow-500"} text-white text-xs sm:text-sm font-bold rounded-full mb-2 sm:mb-3 md:mb-4 shadow-lg`}>
                      {event.status}
                    </span>
                    
                    <motion.h3 
                      animate={{
                        y: hoveredEvent === event.id ? -5 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300"
                    >
                      {event.title}
                    </motion.h3>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: hoveredEvent === event.id ? 0 : 15,
                      opacity: hoveredEvent === event.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3 sm:space-y-4 md:space-y-6"
                  >
                    <p className="text-gray-200 text-sm sm:text-base md:text-lg">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-xs sm:text-sm">{event.location}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-white text-xs sm:text-sm font-medium">
                          {event.date}
                        </span>
                      </div>
                      
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 bg-yellow-500 hover:bg-yellow-400 text-gray-900 text-xs sm:text-sm rounded-xl font-bold transform transition-all shadow-lg hover:shadow-yellow-500/30"
                      >
                        Register Now
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-10 sm:mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-2 sm:space-x-4">
            <span className="w-6 sm:w-8 md:w-12 h-0.5 bg-yellow-500"></span>
            <span className="text-yellow-400 text-xs sm:text-sm md:text-base font-medium">More events coming soon</span>
            <span className="w-6 sm:w-8 md:w-12 h-0.5 bg-yellow-500"></span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 sm:mt-6 md:mt-8 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-transparent border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 rounded-lg text-xs sm:text-sm md:text-base font-bold transition-all duration-300"
          >
            View All Events
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-24 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
    </section>
  );
};

export default EventsSection;