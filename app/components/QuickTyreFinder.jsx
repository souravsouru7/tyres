"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const vehicleTypes = [
  {
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?w=800&auto=format&fit=crop&q=60",
    sizes: ["205/55R16", "215/55R17", "225/45R18"]
  },
  {
    type: "SUV",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&auto=format&fit=crop&q=60",
    sizes: ["235/65R17", "255/55R18", "265/60R18"]
  },
  {
    type: "Sports",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&auto=format&fit=crop&q=60",
    sizes: ["245/40R19", "255/35R20", "275/35R20"]
  }
];

export default function QuickTyreFinder() {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container mx-auto px-4"
      >
        {/* Header */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quick <span className="text-yellow-500">Tyre Finder</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find the perfect tyres for your vehicle in seconds
          </p>
        </motion.div>

        {/* Vehicle Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {vehicleTypes.map((vehicle, index) => (
            <motion.div
              key={vehicle.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer
                ${selectedType === vehicle.type ? 'ring-2 ring-yellow-500' : ''}`}
              onClick={() => setSelectedType(vehicle.type)}
            >
              <div className="relative h-48">
                <Image
                  src={vehicle.image}
                  alt={vehicle.type}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span 
                    className="text-2xl font-bold text-white"
                    whileHover={{ scale: 1.1 }}
                  >
                    {vehicle.type}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tyre Size Selection */}
        {selectedType && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Select Tyre Size for {selectedType}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {vehicleTypes
                .find(v => v.type === selectedType)
                ?.sizes.map((size, index) => (
                  <motion.button
                    key={size}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`p-4 rounded-xl text-white text-lg
                      ${selectedSize === size 
                        ? 'bg-yellow-500 hover:bg-yellow-600' 
                        : 'bg-gray-800 hover:bg-gray-700'}`}
                  >
                    {size}
                  </motion.button>
              ))}
            </div>

            {selectedSize && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 text-white px-8 py-3 rounded-full
                    hover:bg-yellow-600 transition-all transform
                    hover:shadow-lg hover:shadow-yellow-500/30"
                >
                  Find Tyres
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
