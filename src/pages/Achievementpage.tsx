import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import img6 from "../assets/img6.jpg"
import roadmapImg from "../assets/roadmap.jpg"
// import AnimatedBlurBar from "../components/animated-blur-bar"

export default function Achievementpage() {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleKnowMore = () => {
    navigate("/services")
  }

  return (
    <div
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${img6})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>

      {/* Header Section */}
      <div className="relative z-10 px-8 py-16 flex items-center justify-center min-h-screen">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Innovation Roadmap
            <br />
            <span className="block mt-4">Websort's Vision for the Future.</span>
          </h4>

          {/* Single Roadmap Image */}
          <div className="my-12">
            <img
              src={roadmapImg}
              alt="Innovation Roadmap Websort's Vision for the Future"
              className="mx-auto rounded-lg shadow-2xl w-full max-w-4xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleKnowMore}
              className="border border-gray-500 text-gray-300 px-8 py-3 rounded hover:border-white hover:text-white transition-all duration-300 font-medium mt-4"
            >
              Know More
            </button>
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
