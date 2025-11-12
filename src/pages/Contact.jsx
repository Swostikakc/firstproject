import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import LocationMap from "../components/LocationMap";

// Elegant Gray-Gold Theme
const COLORS = {
  PRIMARY_TEXT: "#2C2C2C", // Charcoal Black
  SECONDARY_ACCENT: "#D4AF37", // Champagne Gold
  ACCENT_BACKGROUND: "#F8F8F5", // Ivory White
  MUTED_ACCENT: "#B9AFA1", // Soft Taupe
  DARK_BG: "#1A1F36", // Midnight Blue
  LIGHT_TEXT: "#F8F8F5", // Ivory White
};

const ContactDetails = () => (
  <div
    className="p-8 mb-10 rounded-xl shadow-2xl"
    style={{ backgroundColor: COLORS.DARK_BG, color: COLORS.LIGHT_TEXT }}
  >
    <h3
      className="text-xl font-bold mb-6"
      style={{ color: COLORS.SECONDARY_ACCENT }}
    >
      CONTACT DETAILS
    </h3>
    <ul className="space-y-4 text-sm font-light">
      <li className="flex items-start gap-3">
        <FaMapMarkerAlt
          className="text-lg mt-0.5 flex-shrink-0"
          style={{ color: COLORS.SECONDARY_ACCENT }}
        />
        <div>
          Shrikrishna Marga, Bulaudi - 6,
          <br />
          Pokhara
        </div>
      </li>
      <li className="flex items-center gap-3">
        <FaPhone style={{ color: COLORS.SECONDARY_ACCENT }} />
        <span>{`061591991`}</span>
      </li>
      <li className="flex items-center gap-3">
        <FaEnvelope style={{ color: COLORS.SECONDARY_ACCENT }} />
        <a href="mailto:info@pokharaeventcenter.com" className="hover:underline">
          info@pokharaeventcenter.com
        </a>
      </li>
      <li className="flex items-center gap-3">
        <FaGlobe style={{ color: COLORS.SECONDARY_ACCENT }} />
        <a
          href="https://www.pokharaeventcenter.com"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          www.pokharaeventcenter.com
        </a>
      </li>
    </ul>

    <div className="flex gap-4 mt-6 border-t border-gray-700 pt-4">
      <a href="#" className="text-2xl hover:text-[#D4AF37] transition">
        <FaFacebookF />
      </a>
      <a href="#" className="text-2xl hover:text-[#D4AF37] transition">
        <FaInstagram />
      </a>
      <a href="#" className="text-2xl hover:text-[#D4AF37] transition">
        <FaYoutube />
      </a>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setStatusMessage("✅ Thank you! We’ll get in touch shortly.");
    setTimeout(() => setStatusMessage(""), 3000);
  };

  return (
    <div
      style={{
        backgroundColor: COLORS.ACCENT_BACKGROUND,
        color: COLORS.PRIMARY_TEXT,
      }}
      className="min-h-screen"
    >
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: COLORS.DARK_BG,
          color: COLORS.LIGHT_TEXT,
        }}
        className="pt-40 pb-20 text-center"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-2">CONTACT</h1>
          <p className="text-sm">
            HOME /{" "}
            <span className="font-semibold text-[#D4AF37]">CONTACT</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Side: Form + Map */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-bold mb-8 border-b-4 border-[#D4AF37] inline-block">
            CONTACT US
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "company", "email", "phone"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={
                  field === "company"
                    ? "Company Name (Optional)"
                    : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`
                }
                required={field !== "company"}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] shadow-sm"
                style={{
                  borderColor: COLORS.MUTED_ACCENT,
                  backgroundColor: "#fff",
                }}
              />
            ))}

            <textarea
              name="requirement"
              placeholder="Your Requirement"
              rows="5"
              value={formData.requirement}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] shadow-sm"
              style={{
                borderColor: COLORS.MUTED_ACCENT,
                backgroundColor: "#fff",
              }}
            ></textarea>

            <button
              type="submit"
              className="px-8 py-3 rounded-full font-semibold text-lg shadow-md transition-all duration-300"
              style={{
                backgroundColor: COLORS.DARK_BG,
                color: COLORS.LIGHT_TEXT,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = COLORS.SECONDARY_ACCENT;
                e.target.style.color = COLORS.PRIMARY_TEXT;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = COLORS.DARK_BG;
                e.target.style.color = COLORS.LIGHT_TEXT;
              }}
            >
              Submit
            </button>

            {statusMessage && (
              <p className="mt-4 text-green-600 font-medium p-3 bg-green-50 border-l-4 border-green-500 rounded-md">
                {statusMessage}
              </p>
            )}
          </form>

          {/* Google Map */}
          <div
            className="mt-10 h-[50vh] w-full rounded-xl overflow-hidden shadow-2xl border-2"
            style={{ borderColor: COLORS.MUTED_ACCENT }}
          >
            <LocationMap />
          </div>
        </div>

        {/* Right Side: Contact Details */}
        <div className="lg:col-span-1">
          <ContactDetails />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

