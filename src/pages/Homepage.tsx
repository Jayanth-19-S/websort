import "keen-slider/keen-slider.min.css";
import { Link } from 'react-router-dom';
import homeBg from '../assets/home.jpg';
import Aboutpage from '../components/About';
import Footer from "../components/Footer";
import Projectpage from '../components/Project';
import Achievementpage from './Achievementpage';
import Featurepage from './Featurepage';
import Opportunitiespage from './Opportunitiespage';
import Questionpage from './Questionpage';
import Workpage from './Workpage';


const HomePage = () => {
  return (
    <>
      <div
        className="relative w-full bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        {/* Content */}
        <div className="relative z-10 flex items-center bg-cover bg-center w-full py-12" style={{ backgroundImage: `url(${homeBg})` }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-2xl ml-8 lg:ml-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                Digitizing Ideas with
                <br />
                Clean Code & Modern
                <br />
                Design
              </h1>
              <p className="text-base md:text-lg text-white mb-8 leading-relaxed max-w-xl">
                At Websort, we turn digital visions into reality with expert web and app development, UI/UX design, and
                digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive
                results through SEO, PPC, and social media strategies.
              </p>
              <div className="flex gap-4">
                <Link to="/contact">
                  <button className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition-colors duration-300 font-medium">
                    Contact Us
                  </button>
                </Link>
                <Link to="/about">
                  <button className="border-2 borderx`-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition-colors duration-300 font-medium">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Aboutpage />
      <Projectpage />
      <Featurepage />
      <Workpage />
      <Achievementpage />
      <Questionpage />
      <Opportunitiespage />
      <Footer />
    </>
  );
};

export default HomePage;
