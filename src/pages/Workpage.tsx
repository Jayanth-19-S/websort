import { useNavigate } from "react-router-dom";
import blubImg from "../assets/blub.jpg";
import computerImg from "../assets/computer.jpg";
import img5 from "../assets/img5.jpg";

export default function WorkPage() {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/services');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex flex-col">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-20 relative overflow-hidden z-10" style={{backgroundImage:`url(${img5})`}}>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            See Our Work in Web Design & Development
          </h4>
          <div className="w-full flex justify-center md:hidden my-6">
            <img
              src={computerImg}
              alt="Computer work - hands typing on laptop"
              className="rounded-lg shadow-lg object-cover w-full max-w-sm"
            />
          </div>
          <p className="text-lg text-gray-200 mb-6">
            We specialize in building responsive, user-friendly websites tailored to client needs. Take a look at our recent projects to see how design and functionality come together.
          </p>
          <button 
            onClick={handleExploreMore}
            className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-[#0a192f] transition-all duration-300 font-semibold"
          >
            Know More
          </button>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-center relative z-10">
          <img
            src={computerImg}
            alt="Computer work - hands typing on laptop"
            className="rounded-lg shadow-lg object-cover"
            style={{ width: 600, height: 400 }}
          />
        </div>
      </div>
      {/* Why We Stand Out Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-20 flex-1 relative bg-[#13090a]" >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center items-center md:items-start relative z-10 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why We Stand Out
          </h3>
          <div className="w-full flex justify-center md:hidden my-6">
             <img
              src={blubImg}
              alt="Light bulb innovation"
              className="rounded-lg shadow-lg object-contain bg-transparent h-48 md:h-full"
            />
          </div>
          <p className="text-lg text-gray-200">
            At Websort, we don't just build digital products — we build careers. By joining our team, you become part of a creative and collaborative environment that values innovation, continuous learning, and personal growth.
          </p>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-center items-center relative z-10">
          <img
            src={blubImg}
            alt="Light bulb innovation"
            className="rounded-lg shadow-lg object-contain bg-transparent h-72"
          />
        </div>
      </div>
    </div>
  );
}

