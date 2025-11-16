import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact'; 
import AboutUs from './pages/AboutUs';
import Events from './pages/Event';
import Veneus from "./pages/Veneus";
const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes('owner');

  return (
    <div>
      {!isOwnerPath && <Navbar />}

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/about" element={<AboutUs />} />
           <Route path="/events" element={<Events />} />
           <Route path="/venues" element={<Veneus />} /> 
        </Routes>
      </div>
    </div>
  );
};

export default App;



