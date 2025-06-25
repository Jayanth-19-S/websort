import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import careerImg from '../assets/img222.jpg';
import redngrenImg from '../assets/redngren.jpg';
import { AnimatedBackground } from '../components/animated-background.tsx';
import { CareerParticleAnimation } from '../components/CareerParticleAnimation.tsx';
import Footer from '../components/Footer.tsx';


// Imports for internship images
import appp from '../assets/appp.jpg';
import market1 from '../assets/market1.jpg';
import UIUX from '../assets/uiux.jpg';
import webweb from '../assets/webweb.jpg';


const opportunities = [
  { name: 'Marketing', image: market1 },
  { name: 'App Development', image: appp },
  { name: 'Web Development', image: webweb },
  { name: 'UI UX', image: UIUX },
];

const Careerspage = () => {
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formData);
      // Handle form submission logic here
  };

useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" });
}, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-transparent text-white flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-left"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="text-4xl lg:text-5xl font-bold font-serif leading-tight mb-6">
              Talent wins games, but teamwork <br /> and intelligence win championships.
            </h1>
            <p className="text-justify text-gray-300 text-base">
            At Websort, we’re more than just a tech company — we’re a team of innovators, creators, and problem-solvers passionate about shaping the digital world. Whether you're a developer, designer, marketer, or strategist, Websort offers a dynamic environment to grow your skills, explore new ideas, and make an impact.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-end"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              src={careerImg}
              alt="Careers at Websort"
              className="rounded-2xl shadow-lg w-full max-w-lg object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>

      {/* Internship Opportunities Section */}
      <div id="internship-opportunities" className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <CareerParticleAnimation />
        <div className="relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            Internship Opportunities at Websort
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
            {opportunities.map((opp, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-lg overflow-hidden mb-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_35px_5px_rgba(255,255,255,0.4)]">
                  <img src={opp.image} alt={opp.name} className="w-full aspect-video object-cover rounded-lg" />
                </div>
                <h3 className="text-xl font-semibold">{opp.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <section className="relative text-white pt-10 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img src={redngrenImg} alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
             <div className="mb-16 text-left">
               <h5 className="text-white text-4xl">Fill out the form and our team will get back to you shortly</h5>
             </div>
 
             <form onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
                 <div>
                   <input
                     type="text"
                     name="firstName"
                     placeholder="First Name"
                     value={formData.firstName}
                     onChange={handleInputChange}
                     className="w-full bg-transparent text-white placeholder-gray-400 border-0 border-b border-red-500 focus:border-red-500 focus:outline-none pb-2 text-lg"
                   />
                  </div>
  
                  <div>
                   <input
                     type="text"
                     name="secondName"
                     placeholder="Second Name"
                     value={formData.secondName}
                     onChange={handleInputChange}
                     className="w-full bg-transparent text-white placeholder-gray-400 border-0 border-b border-red-500 focus:border-red-500 focus:outline-none pb-2 text-lg"
                   />
                  </div>
  
                  <div>
                   <input
                     type="email"
                     name="email"
                     placeholder="Email Address"
                     value={formData.email}
                     onChange={handleInputChange}
                     className="w-full bg-transparent text-white placeholder-gray-400 border-0 border-b border-red-500 focus:border-red-500 focus:outline-none pb-2 text-lg"
                   />
                 </div>
                </div>
 
               <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
                 <div>
                   <input
                     type="tel"
                     name="phone"
                     placeholder="Phone"
                     value={formData.phone}
                     onChange={handleInputChange}
                     className="w-full bg-transparent text-white placeholder-gray-400 border-0 border-b border-red-500 focus:border-red-500 focus:outline-none pb-2 text-lg"
                   />
                  </div>
  
                  <div>
                   <input
                     type="text"
                     name="company"
                     placeholder="Company"
                     value={formData.company}
                     onChange={handleInputChange}
                     className="w-full bg-transparent text-white placeholder-gray-400 border-0 border-b border-red-500 focus:border-red-500 focus:outline-none pb-2 text-lg"
                   />
                  </div>
                  <div>
                   <input
                     type="text"
                     name="message"
                     placeholder="Message"
                     value={formData.message}
                     onChange={handleInputChange}
                     className="w-full bg-transparent text-white placeholder-gray-400 border-0 border-b border-red-500 focus:border-red-500 focus:outline-none pb-2 text-lg"
                   />
                  </div>
               </div>
 
               <div className="mt-10 text-left">
                 <button
                   type="submit"
                   className="bg-red-500 hover:bg-red-600 text-white font-medium px-12 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg"
                 >
                    Submit
                  </button>
               </div>
             </form>
           </div>
      </section>
      <Footer />
    </div>
  );
};

export default Careerspage;