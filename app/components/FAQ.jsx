"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How often should I replace my tyres?",
    answer: "Generally, tyres should be replaced every 50,000 kilometers or when the tread depth reaches 1.6mm. However, this varies based on driving conditions, maintenance, and tyre quality."
  },
  {
    question: "What's the correct tyre pressure for my vehicle?",
    answer: "The recommended tyre pressure varies by vehicle and tyre size. You can find this information in your vehicle's manual or on the driver's side door frame. Generally, it ranges between 30-35 PSI for passenger vehicles."
  },
  {
    question: "How do I know when my tyres need rotation?",
    answer: "Tyres should be rotated every 8,000-10,000 kilometers to ensure even wear. Signs that rotation is needed include uneven wear patterns and vehicle pulling to one side."
  },
  {
    question: "What's the difference between summer and all-season tyres?",
    answer: "Summer tyres provide better handling and grip in warm conditions, while all-season tyres offer balanced performance year-round. All-season tyres are more versatile but may not perform as well in extreme conditions."
  },
  {
    question: "Why is wheel alignment important?",
    answer: "Proper wheel alignment ensures even tyre wear, better fuel efficiency, and straight vehicle tracking. It should be checked every 20,000 kilometers or when you notice uneven wear patterns."
  },
  {
    question: "What causes tyre noise and vibration?",
    answer: "Common causes include uneven wear, improper balancing, alignment issues, or damage to the tyre. Regular maintenance and inspection can help prevent these issues."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get answers to common questions about tyre maintenance and selection
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden"
            >
              <motion.button
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-yellow-500"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-white px-8 py-3 rounded-full
              hover:bg-yellow-600 transition-all transform
              hover:shadow-lg hover:shadow-yellow-500/30"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
