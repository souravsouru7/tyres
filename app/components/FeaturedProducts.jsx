"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Ultra Sport Performance",
    category: "Performance Series",
    image: "https://images.unsplash.com/photo-1568116571827-11960b9515bb?q=80&w=2080&auto=format&fit=crop",
    description: "Premium high-performance tire for ultimate road grip"
  },
  {
    id: 2,
    name: "All-Terrain Warrior",
    category: "Off-Road Series",
    image: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?q=80&w=2070&auto=format&fit=crop",
    description: "Designed for challenging off-road conditions"
  },
  {
    id: 3,
    name: "EcoGrip Elite",
    category: "Eco Series",
    image: "https://images.unsplash.com/photo-1578844251758-2f71da4aab1a?q=80&w=2072&auto=format&fit=crop",
    description: "Fuel-efficient tire with superior wet handling"
  },
  {
    id: 4,
    name: "Sport GT Pro",
    category: "Sport Series",
    image: "https://images.unsplash.com/photo-1616803824305-a862032692ca?q=80&w=2070&auto=format&fit=crop",
    description: "Racing-inspired design for maximum performance"
  }
];

export default function FeaturedProducts() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative inline-block"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our <span className="text-yellow-500">Collection</span>
            </h2>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-yellow-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group overflow-hidden rounded-2xl bg-gray-900/50"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                  group-hover:from-black/80 transition-all duration-300" />
                
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="transform group-hover:-translate-y-2 transition-transform duration-300"
                  >
                    <motion.span
                      className="inline-block bg-yellow-500 text-white px-4 py-1 rounded-full text-sm mb-4
                        transform group-hover:scale-105 transition-all duration-300"
                    >
                      {product.category}
                    </motion.span>
                    
                    <motion.h3
                      className="text-3xl font-bold mb-3 group-hover:text-yellow-500 transition-colors duration-300"
                    >
                      {product.name}
                    </motion.h3>
                    
                    <motion.p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      {product.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
