import { Route, Routes, useLocation } from 'react-router-dom';
import Aboutpage from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projectpage from './pages/Projectpage';
import Careerspage from './pages/Careerspage';
import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import Servicespage from './pages/Servicespage';
// import Aboutpage from './pages/Aboutpage';

function App() {
  const location = useLocation();
  const showFooter = !['/projects', '/careers', '/project1', '/'].includes(location.pathname);

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/services" element={<Servicespage />} />
          <Route path="/projects" element={<Projectpage />} />
          <Route path="/careers" element={<Careerspage />} />
        </Routes>
      </div>
      {showFooter && <Footer />}
    </>
  );
}

export default App;

