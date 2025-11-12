import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import logo from "../assets/logo.png"; // replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-[#0E1420] text-gray-300 py-10 border-t border-yellow-600">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo Section */}
        <div>
          <img src={logo} alt="Logo" className="w-20 mb-4" />
          <p className="text-sm text-gray-400">
            Inspiring Moments • Lasting Memories
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-3">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/events" className="hover:text-yellow-400">Events</Link></li>
            <li><Link to="/venues" className="hover:text-yellow-400">Venues</Link></li>
            <li><Link to="/catering" className="hover:text-yellow-400">Catering</Link></li>
            <li><Link to="/amenities" className="hover:text-yellow-400">Amenities</Link></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-3">IMPORTANT LINKS</h3>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-yellow-400">Terms & Conditions</Link></li>
            <li><Link to="/career" className="hover:text-yellow-400">Career</Link></li>
            <li><Link to="/faqs" className="hover:text-yellow-400">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-3">CONTACT US</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              Shrikrishna Marga, Bulaudi - 6, Pokhara
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" /> 061-591991
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:info@pokharaeventcenter.com" className="hover:text-yellow-400">
                info@pokharaeventcenter.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGlobe className="text-yellow-400" />
              <a href="https://www.pokharaeventcenter.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
                www.pokharaeventcenter.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-700 mt-10 pt-4 text-center text-sm text-gray-400">
        <p>
          Copyright © 2025 - <span className="text-yellow-400">Pokhara Event Center</span>
        </p>
        <p>
          Website by - <span className="text-yellow-500 font-medium">ARKBO Technologies</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
