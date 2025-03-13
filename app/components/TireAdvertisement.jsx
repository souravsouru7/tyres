import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TireAdvertisement = () => {
  const tireProducts = [
    {
      id: 1,
      brand: "MICHELIN",
      model: "Pilot Sport 4",
      image: "/images/img1.jpg",
      alt: "Michelin Pilot Sport 4 Tire"
    },
    {
      id: 2,
      brand: "BRIDGESTONE",
      model: "Potenza Sport",
      image: "/images/img2.jpg",
      alt: "Bridgestone Potenza Sport Tire"
    },
    {
      id: 3,
      brand: "GOODYEAR",
      model: "Eagle F1",
      image: "/images/img3.jpg",
      alt: "Goodyear Eagle F1 Tire"
    },
    {
      id: 4,
      brand: "CONTINENTAL",
      model: "SportContact",
      image: "/images/img4.jpg",
      alt: "Continental SportContact Tire"
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Tire Products Grid */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Featured <span className="text-yellow-500">Tire Brands</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Explore our selection of premium tire brands, designed for performance, durability, and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {tireProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative h-48 sm:h-56 md:h-64 bg-gray-100">
                <Image
                  src={product.image || "https://via.placeholder.com/400x300?text=Tire+Image"}
                  alt={product.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-yellow-500 font-bold text-sm sm:text-base md:text-lg tracking-wider">
                  {product.brand}
                </h3>
                <p className="text-gray-800 text-base sm:text-lg font-medium mt-1">
                  {product.model}
                </p>
                <motion.button
                  className="mt-3 sm:mt-4 w-full py-2 sm:py-2.5 bg-yellow-500 text-black text-xs sm:text-sm font-bold rounded hover:bg-yellow-400 transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Promotional Banner */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl overflow-hidden shadow-lg border border-yellow-200">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10">
                <span className="inline-block px-3 py-1 bg-yellow-500 text-black text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4">
                  SPECIAL OFFER
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Get 15% Off on All Off-Road Tires
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                  Limited time offer on our premium selection of off-road tires. 
                  Perfect for adventure enthusiasts and off-road vehicles.
                </p>
                <motion.button
                  className="px-5 sm:px-6 py-2 sm:py-2.5 bg-yellow-500 text-black text-sm sm:text-base font-bold rounded-lg hover:bg-yellow-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shop Now
                </motion.button>
              </div>
              <div className="w-full md:w-1/2 relative h-56 sm:h-64 md:h-72 lg:h-80">
                <Image
                  src="/images/offroad-tire.jpg" 
                  alt="Off-road tire special offer"
                  layout="fill"
                  objectFit="cover"
                  className="md:rounded-r-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TireAdvertisement;