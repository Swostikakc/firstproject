import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { assets, eventsDummyData } from "../assets/assets";

// Theme colors (consistent across pages)
const COLORS = {
  PRIMARY_TEXT: "#2C2C2C",
  SECONDARY_ACCENT: "#D4AF37",
  ACCENT_BACKGROUND: "#F8F8F5",
  MUTED_ACCENT: "#B9AFA1",
  DARK_BG: "#1A1F36",
  LIGHT_TEXT: "#F8F8F5",
};

const Veneu = () => {
  return (
    <div
      style={{
        backgroundColor: COLORS.ACCENT_BACKGROUND,
        minHeight: "100vh",
        color: COLORS.PRIMARY_TEXT,
        fontFamily: "Inter",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: COLORS.DARK_BG,
          color: COLORS.LIGHT_TEXT,
          paddingTop: "10rem",
          paddingBottom: "5rem",
          textAlign: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-2 uppercase tracking-wide">
            Our Venues
          </h1>
          <p className="text-sm">
            HOME /{" "}
            <span
              style={{
                color: COLORS.SECONDARY_ACCENT,
                fontWeight: 600,
              }}
            >
              VENUES
            </span>
          </p>
        </div>
      </section>

      {/* Venue List Section */}
      <main className="max-w-7xl mx-auto py-16 px-6 md:px-12">
        <div className="text-center mb-16">
          <h2
            style={{ color: COLORS.SECONDARY_ACCENT }}
            className="text-4xl font-bold mb-4"
          >
            Explore Stunning Event Spaces in Pokhara
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            QuickEvent brings together the best event venues in Pokhara — from
            luxurious banquet halls to cozy lakeside spaces. Discover your
            perfect venue and make every celebration unforgettable.
          </p>
        </div>

        {/* Venue Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsDummyData.map((venue, index) => (
            <div
              key={venue._id}
              className="bg-white rounded-xl border border-[#B9AFA1] shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={venue.images?.[0] || assets.placeholderimage}
                  alt={venue.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {index % 2 === 0 && (
                  <span className="absolute top-3 left-3 bg-[#D4AF37] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Featured
                  </span>
                )}
              </div>

              {/* Venue Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2C2C2C] mb-1">
                  {venue.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-[#6B6B6B] mb-3">
                  <img
                    src={assets.locationicon}
                    alt="location"
                    className="w-4 h-4"
                  />
                  <span>{venue.location}</span>
                </div>

                {/* Rating + Price */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1 text-[#D4AF37] font-semibold">
                    <img src={assets.staricon} alt="star" className="w-4 h-4" />
                    <span className="text-[#2C2C2C] font-medium">4.0</span>
                  </div>
                  <p className="text-[#2C2C2C] font-semibold">
                    Rs. {venue.price.toLocaleString()}
                    <span className="text-sm text-[#6B6B6B] font-normal">
                      /Day
                    </span>
                  </p>
                </div>

                {/* Button */}
                <button className="mt-4 w-full bg-[#1A1F36] text-white py-2 rounded-lg font-medium hover:bg-[#D4AF37] hover:text-[#2C2C2C] transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Veneu;

