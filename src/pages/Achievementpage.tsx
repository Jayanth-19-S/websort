import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import appImg from "../assets/app.png"
import img6 from "../assets/img6.jpg"
import marketImg from "../assets/market.png"
import webImg from "../assets/web.png"
// import AnimatedBlurBar from "../components/animated-blur-bar"

export default function Achievementpage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const services = [
    {
      title: "Web Development",
      image: webImg,
      alt: "Hands working on laptop with web development interface",
    },
    {
      title: "App Development",
      image: appImg,
      alt: "App development illustration",
    },
    {
      title: "Digital Marketing",
      image: marketImg,
      alt: "Digital marketing visual",
    },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  const handleExploreMore = () => {
    navigate('/project1');
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden" style={{backgroundImage:`url(${img6})`}}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>
      {/* Header Section */}
      <div className="relative z-10 px-8 py-20">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            One of our proudest achievements.
          </h4>
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            A standout from our portfolio, this project exemplifies the quality, creativity, and performance we bring to
            every solution. It's a true reflection of our commitment to excellence.
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="mb-6 group">
                <img
                  src={service.image}
                  alt={service.alt}
                  width={280}
                  height={200}
                  className="mx-auto rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
                  style={{ objectFit: "cover", width: "280px", height: "200px" }}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{service.title}</h3>
              <button 
                onClick={handleExploreMore}
                className="border border-gray-500 text-gray-300 px-8 py-3 rounded hover:border-white hover:text-white transition-all duration-300 font-medium"
              >
                Explore more
              </button>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden max-w-sm mx-auto">
          <div
            className={`text-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="mb-6 group">
              <img
                src={services[currentSlide].image}
                alt={services[currentSlide].alt}
                width={280}
                height={200}
                className="mx-auto rounded-lg shadow-lg transition-transform duration-500"
                style={{ objectFit: "cover", width: "280px", height: "200px" }}
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">{services[currentSlide].title}</h3>
            <button 
              onClick={handleExploreMore}
              className="border border-gray-500 text-gray-300 px-8 py-3 rounded hover:border-white hover:text-white transition-all duration-300 font-medium mb-8"
            >
              Explore more
            </button>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                {"<"}
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                {">"}
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-yellow-400" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Full-width AnimatedBlurBar at the bottom
      <div className="absolute left-0 right-0 bottom-0 w-full z-20">
        <AnimatedBlurBar height="h-8" animationType="pulse" className="rounded-none" />
      </div> */}
    </div>
  )
}
