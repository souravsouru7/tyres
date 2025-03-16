"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function AboutUs() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const logoControls = useAnimation();
  
  // Function to handle logo hover animation
  const handleLogoHover = () => {
    setIsLogoHovered(true);
    logoControls.start({
      rotateY: [0, 180, 360],
      scale: [1, 1.2, 1.1],
      transition: { 
        duration: 1.2,
        times: [0, 0.5, 1],
        ease: "easeInOut"
      }
    });
  };

  const handleLogoHoverEnd = () => {
    setIsLogoHovered(false);
    logoControls.start({
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.5 }
    });
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }
    })
  };

  // Added new animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <Layout>
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 flex items-center justify-start pl-8 sm:pl-16 md:pl-24 lg:pl-32">
          <motion.div 
            className="about-hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ABOUT<br />US
          </motion.div>
        </div>
        <Image
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnZrc3R6MzlyYmNid3R3YmxmNzgyaHZydXczb3l5cDA4ZTJ6d3JmMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/4aaL54hJijStKA8k9F/giphy.gif"
          alt="Performance tires with glowing orange rims"
          fill
          style={{objectFit: "cover"}}
          priority
        />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 text-center pb-8 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h1 className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-transparent bg-clip-text tracking-tighter transform -skew-x-6 drop-shadow-lg">
            ABOUT US
          </h1>
          <div className="w-24 h-2 bg-yellow-400 mx-auto mt-2 transform skew-x-12"></div>
        </motion.div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/about2.jpg" 
            alt="Dark tire background"
            fill
            style={{objectFit: "cover"}}
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <motion.div 
          className="relative z-10 container mx-auto px-4 py-12 md:py-16 text-white"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={itemVariants} className="text-base md:text-lg mb-8 md:mb-10 mx-auto max-w-4xl text-center">
            Welcome to Golden Extreme Auto Spare Parts, a distinguished division of the Taleb Group, established 
            with a vision to provide top-tier auto spare parts across the Middle East and Africa. The Taleb Group, 
            founded in 1974, has built a reputable legacy through successful ventures in various industries, and we 
            are proud to be part of this esteemed lineage.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-base md:text-lg mb-8 md:mb-10 mx-auto max-w-4xl text-yellow-500 text-center">
            In 2006, we embarked on a new journey, specializing in high-quality tires, aimed at meeting the diverse 
            needs of our customers. Recognizing the growing demand and the ever-evolving landscape of the 
            automotive industry, we expanded our operations in 2014, reinforcing our commitment to excellence 
            and customer satisfaction.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-base md:text-lg mb-8 md:mb-10 mx-auto max-w-4xl text-center">
            At Golden Extreme, we are more than just a tire distributor—we are shaping the future of the tire 
            industry in the UAE and beyond. With over 150,000 sq ft of warehouse space and a robust network of 120+ 
            sales points, we ensure that our customers across the region have access to premium tire solutions. Our 
            dedicated team of experienced salespeople and an in-house engineer for claims handling ensures the 
            highest level of service and technical support.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-base md:text-lg mb-8 md:mb-10 mx-auto max-w-4xl text-yellow-500 text-center">
            We take pride in our premium tire solutions designed for the demanding needs of fleets, tire shops, and 
            dealers. Built on the enduring values of our family-owned enterprise, Golden Extreme continues to 
            follow a path of innovation and service, maintaining a reputation for reliability, performance, and 
            exceptional customer care.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-base md:text-lg mb-8 md:mb-10 mx-auto max-w-4xl text-center">
            Our mission is clear: to meet today's needs while anticipating the challenges of tomorrow. With a 
            foundation of trust, customer focus, and industry expertise, Golden Extreme is committed to leading the 
            market and creating long-lasting partnerships. We are the future of this market—and we invite you to 
            join us on this journey.
          </motion.p>
        </motion.div>
      </div>
      
      <div className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col items-center mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-4xl mb-6 md:mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/images/img1.jpg"
                  alt="Performance tire with orange rim"
                  width={1200}
                  height={600}
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
            
            <motion.h2 
              className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 text-yellow-400 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              OUR MISSION
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-blue-500 max-w-4xl text-center leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              To meet today's needs while anticipating the challenges of tomorrow. With a 
              foundation of trust, customer focus, and industry expertise, Golden Extreme is 
              committed to leading the market and creating long-lasting partnerships. We are the 
              future of this market—and we invite you to join us on this journey.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="bg-yellow-400 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-black">OUR COMMITMENT TO YOUR BUSINESS</h2>
          
          <div className="max-w-4xl mx-auto text-black">
            <p className="mb-6 text-lg">
              Our goal is to partner with you for long-term growth and success. At our showroom, you'll find:
            </p>
            
            <ul className="space-y-4">
              <li>
                <p><span className="font-bold">• Flexible Payment Solutions:</span> We offer business-friendly payment options that align with your financial plans and facilitate easy transactions.</p>
              </li>
              
              <li>
                <p><span className="font-bold">• Exclusive Offers for Partners:</span> Enjoy exclusive deals and previews of new product lines available only to our wholesale partners.</p>
              </li>
              
              <li>
                <p><span className="font-bold">• Post-Purchase Support:</span> Our dedicated support team is always ready to assist with any queries or issues, ensuring a smooth post-purchase experience.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center showroom-heading">Why Choose Our Wholesale Showroom?</h2>
          
          <div className="max-w-4xl mx-auto text-white">
            <ul className="space-y-6">
              <li>
                <p><span className="font-bold text-yellow-400">• Vast Inventory:</span> Our showroom features an extensive selection of Tire, catering to a broad spectrum of vehicles including passenger cars, trucks, agricultural machinery, and industrial equipment. With leading global brands in stock, you'll find what you need to satisfy your customers.</p>
              </li>
              
              <li>
                <p><span className="font-bold text-yellow-400">• Competitive Pricing:</span> We offer competitive wholesale pricing designed to provide you with the best margins. Enjoy bulk purchase discounts and flexible pricing models that suit your business strategy.</p>
              </li>
              
              <li>
                <p><span className="font-bold text-yellow-400">• Dedicated Account Managers:</span> Our experienced account managers are committed to understanding your business needs, helping you streamline your inventory, and ensuring you receive personalized service and support.</p>
              </li>
              
              <li>
                <p><span className="font-bold text-yellow-400">• Efficient Logistics:</span> Featuring a robust supply chain and dependable logistics, we ensure timely delivery and efficient turnaround to meet the demands of your operations, providing a seamless replenishing process.</p>
              </li>
              
              <li>
                <p><span className="font-bold text-yellow-400">• Industry Insights and Training:</span> Benefit from exclusive access to industry insights and professional training seminars. Stay ahead with expert knowledge and the latest trends in the Tire industry.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-yellow-400 text-center mb-12">Come and explore our showroom!</h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-800 mb-8">
              Explore a world of Tire solutions designed for your business. Whether 
              you are looking to expand your product range or seeking reliable 
              suppliers, our showroom is your go-to destination.
            </p>
            
            <p className="text-xl font-medium text-gray-800 mb-4">
              Location: DUBAI DEIRA
            </p>
            
            <p className="text-xl font-medium text-gray-800 mb-8">
              Opening Hours: EVERYDAY, 9 AM - 7 PM
            </p>
            
            <p className="text-lg text-gray-800 mb-10">
              Partner with us for quality, reliability, and exceptional service. Visit us 
              today and experience the unparalleled benefits of our Tire wholesale 
              showroom. We look forward to building a productive and prosperous 
              partnership with you!
            </p>
            
            <div className="border-t border-gray-300 w-64 mx-auto mt-4"></div>
          </div>
        </div>
      </div>
      
     
    </Layout>
  );
} 