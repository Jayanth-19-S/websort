import img1 from "../assets/img1.jpg";

const Aboutpage = () => {
  return (
    <div
      id="about"
      className="relative py-8 overflow-hidden"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Titles */}
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4 text-left">About Us</h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-left mb-4">
              Where Innovation
              <br />
              Meets Execution
            </h1>
          </div>

          {/* Right Side - Content */}
          <div className="text-gray-200 text-base leading-relaxed">
            Websort builds websites, apps, and digital marketing solutions to help you grow online.
            Based in Bangalore, we focus on smart design, strong tech, and real results. We specialize
            in web development, mobile app development, UI/UX design, and digital marketing—delivering
            responsive websites, high-performance Android/iOS apps, and visually engaging interfaces.
            Our digital marketing expertise spans SEO, PPC, social media marketing, and content creation,
            helping businesses grow and connect with their ideal audience.
            <div className="mt-6 flex justify-center md:justify-start">
              <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300 font-medium text-base">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
