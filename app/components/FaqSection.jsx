import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of tires do you offer?",
      answer: "We offer a comprehensive range of tires including performance, all-season, off-road, and commercial vehicle tires from premium brands."
    },
    {
      question: "Do you provide tire installation services?",
      answer: "Yes, we provide professional tire installation services with state-of-the-art equipment and experienced technicians."
    },
    {
      question: "What is your warranty policy?",
      answer: "Our tires come with manufacturer warranties, and we offer additional coverage options. Specific warranty terms vary by product."
    },
    {
      question: "How often should I rotate my tires?",
      answer: "We recommend rotating your tires every 5,000-8,000 kilometers to ensure even wear and optimal performance."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we provide international shipping services to select countries. Contact us for specific shipping details and rates."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-yellow-200 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-yellow-300 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="px-3 sm:px-4 py-1 bg-yellow-400 text-black text-xs sm:text-sm font-bold rounded-full inline-block mb-3 sm:mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-3 sm:mb-4"
            >
              <motion.button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-2 sm:ml-4"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="mt-3 sm:mt-4"
                    >
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-sm sm:text-base text-gray-600 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 bg-yellow-400 text-black text-sm sm:text-base font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-300"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FaqSection;
