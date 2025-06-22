import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { ServicesAnimatedBackground } from '../components/ServicesAnimatedBackground.tsx';

import appDevImg from '../assets/appdevelopment.jpg';
import marketingImg from '../assets/market.png';
import uiuxImg from '../assets/uiux.jpg';
import webDevImg from '../assets/web.png';
import { useEffect } from 'react';

const services = [
  {
    title: 'UI/UX Design',
    description: 'We design clean, intuitive, and engaging user interfaces that enhance the overall user experience. From wireframes to final designs, our focus is on usability, consistency, and creating visually appealing digital products that users love..',
    image: uiuxImg,
    imageSide: 'left',
  },
  {
    title: 'Web Development',
    description: 'Planned and executed a digital marketing strategy including SEO, social media marketing, and content creation. Improved website traffic and engagement through targeted campaigns and regular performance tracking.',
    image: webDevImg,
    imageSide: 'right',
  },
  {
    title: 'App Development',
    description: 'Developed a cross-platform mobile app using Flutter for Android and iOS. The app allows users to browse services, make bookings, and receive real-time updates. Designed with a clean UI and smooth navigation to ensure a seamless user experience..',
    image: appDevImg,
    imageSide: 'left',
  },
  {
    title: 'Digital Marketing',
    description: 'Designed and developed a responsive, SEO-optimized website using React. The site includes a modern UI, fast loading speed, and full mobile compatibility. Key features include service pages, contact form, and an easy-to-manage content structure to support client updates and user engagement..',
    image: marketingImg,
    imageSide: 'right',
  },
];

const imgAnimLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } },
};

const imgAnimRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } },
};

const textAnimLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 } },
};

const textAnimRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 } },
};

const Servicespage = () => {
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" });
}, []);

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <ServicesAnimatedBackground />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-24">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <motion.div
          className="h-1.5 w-40 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-16 sm:mb-20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        />

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                service.imageSide === 'right' ? 'md:flex-row-reverse' : ''
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image */}
              <motion.div 
                className="w-full md:w-5/12 flex justify-center"
                variants={service.imageSide === 'left' ? imgAnimLeft : imgAnimRight}
              >
                <div className="rounded-2xl" style={{boxShadow: '0 0 25px 3px rgba(96, 165, 250, 0.4), 0 0 25px 3px rgba(168, 85, 247, 0.3)'}}>
                  <img src={service.image} alt={service.title} className="rounded-2xl object-cover w-full h-80 max-w-md" />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div 
                className="w-full md:w-7/12 text-left"
                variants={service.imageSide === 'right' ? textAnimLeft : textAnimRight}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-300 text-lg">{service.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicespage;
