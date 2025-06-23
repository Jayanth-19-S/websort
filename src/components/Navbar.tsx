import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaPlayCircle } from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const menuItems = [
    { label: "About us", path: "/#about", pagePath: "/" },
    { label: "Services", path: "/services", pagePath: "/services" },
    { label: "Projects", path: "/projects", pagePath: "/projects" },
    { label: "Careers", path: "/careers", pagePath: "/careers" },
  ];

  const handleLinkClick = () => setIsMenuOpen(false);

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    window.location.href = "/";
  };

const NavLink = ({ item }: { item: { label: string; path: string; pagePath: string } }) => {
  if (item.label === "About us") {
    return isHome ? (
      <a href="#about" onClick={handleLinkClick}>
        <span>{item.label}</span>
      </a>
    ) : (
      <RouterLink to="/#about" onClick={handleLinkClick}>
        <span>{item.label}</span>
      </RouterLink>
    );
  }
  return (
    <RouterLink to={item.path} onClick={handleLinkClick}>
      <span>{item.label}</span>
    </RouterLink>
  );
};


  const isCurrentPage = (pagePath: string) => {
    if (pagePath === "/" && location.hash === "#about") return true;
    if (pagePath === "/" && isHome && location.hash !== "#about") return false;
    return location.pathname === pagePath;
  };

  return (
    <>
      <nav className="w-full bg-[#DAE5FF] px-12 py-3 shadow-sm fixed top-0 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <RouterLink to="/" onClick={handleLogoClick}>
              <img
                src={logo}
                alt="WebSort Logo"
                className="h-16 w-auto object-contain bg-transparent cursor-pointer hover:opacity-80 transition-opacity duration-300"
              />
            </RouterLink>
          </div>

          <ul className="hidden md:flex md:gap-8 gap-4 items-center text-sm font-medium text-[#1E1E5A] m-0">
            {menuItems.map((item) => {
              const isActive = isCurrentPage(item.pagePath);
              return (
                <li className="flex items-center gap-2 relative" key={item.path}>
                  <motion.div
                    animate={{
                      y: isActive ? 4 : 0,
                      scale: isActive ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative"
                  >
                    <FaPlayCircle
                      className={`${isActive ? "text-purple-600" : "text-blue-700"} transition-colors duration-300`}
                    />
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                  <NavLink item={item} />
                </li>
              );
            })}
          </ul>

          <RouterLink to="/contact" className="hidden md:block">
            <button className="bg-[#1E1E5A] text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#2e2e80] transition-colors duration-300">
              Contact us
            </button>
          </RouterLink>

          <button
            className="md:hidden text-[#1E1E5A] text-3xl border-0 bg-transparent ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed top-16 right-0 bg-[#1E1E5A]/90 backdrop-blur-sm text-white shadow-lg"
          style={{
            width: "70%",
            height: "75%",
            zIndex: 9999,
            padding: "2rem 1.5rem",
            borderTopLeftRadius: "3rem",
            borderBottomLeftRadius: "3rem",
          }}
        >
          <ul className="flex flex-col gap-10 mb-0 list-none">
            {menuItems.map((item) => {
              const isActive = isCurrentPage(item.pagePath);
              return (
                <li key={item.path} className="text-xl font-medium flex items-center gap-2">
                  <motion.div
                    animate={{
                      y: isActive ? 4 : 0,
                      scale: isActive ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative"
                  >
                    <FaPlayCircle
                      className={`${isActive ? "text-purple-400" : "text-white"} transition-colors duration-300`}
                    />
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                  <NavLink item={item} />

                </li>
              );
            })}
             <li className="text-xl font-medium flex items-center gap-2">
              <motion.div
                animate={{
                  y: location.pathname === "/contact" ? 4 : 0,
                  scale: location.pathname === "/contact" ? 1.2 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative"
              >
                <FaPlayCircle
                  className={`${location.pathname === "/contact" ? "text-purple-400" : "text-white"} transition-colors duration-300`}
                />
                {location.pathname === "/contact" && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
              <RouterLink to="/contact" onClick={handleLinkClick}>
                <span>Contact us</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
