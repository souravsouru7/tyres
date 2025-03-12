"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const offers = [
  {
    id: 1,
    title: "Buy 3 Get 1 Free",
    description: "On selected premium tyres",
    discount: "25% OFF",
    validUntil: "2024-03-31",
    image: "https://images.unsplash.com/photo-1578844251758-2f71da4aab1a?q=80&w=2072&auto=format&fit=crop",
    features: ["Free Installation", "Wheel Balancing", "Lifetime Warranty"]
  },
  {
    id: 2,
    title: "Service Package",
    description: "Complete tyre care solution",
    discount: "40% OFF",
    validUntil: "2024-03-15",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop",
    features: ["Alignment Check", "Nitrogen Fill", "Rotation Service"]
  },
  {
    id: 3,
    title: "Season Special",
    description: "All-weather tyre collection",
    discount: "30% OFF",
    validUntil: "2024-04-01",
    image: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?q=80&w=2071&auto=format&fit=crop",
    features: ["Weather Protection", "Enhanced Grip", "Free Check-up"]
  }
];

export default function SpecialOffers() {
  const [activeOffer, setActiveOffer] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-yellow-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-yellow-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-500 text-lg font-semibold mb-4 block">
            Limited Time Deals
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Special <span className="text-yellow-500">Offers</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-1 bg-yellow-500 mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <motion.div
                  initial={{ rotate: -15, scale: 0.8 }}
                  whileHover={{ rotate: 0, scale: 1 }}
                  className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold"
                >
                  {offer.discount}
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
                <p className="text-gray-400 mb-4">{offer.description}</p>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: activeOffer === offer.id ? "auto" : 0, opacity: activeOffer === offer.id ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 mb-4">
                    {offer.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <svg className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-400">
                    Valid until {new Date(offer.validUntil).toLocaleDateString()}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveOffer(activeOffer === offer.id ? null : offer.id)}
                    className="text-yellow-500 font-medium hover:text-yellow-400"
                  >
                    {activeOffer === offer.id ? "Show Less" : "View Details"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-white px-8 py-3 rounded-full
              hover:bg-yellow-600 transition-all transform
              hover:shadow-lg hover:shadow-yellow-500/30"
          >
            View All Offers
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
