import React from "react";
import { assets, eventsDummyData } from "../assets/assets";
import { Link } from "react-router-dom";

const FeaturedVenues = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#F8F8F5]" id="venues">
      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="text-[#B9AFA1] font-semibold uppercase tracking-wide">
          Featured Venues
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#2C2C2C] mt-2">
          Discover Stunning Event Spaces
        </h2>
        <p className="text-[#6B6B6B] mt-3 max-w-2xl mx-auto">
          Handpicked venues for your celebrations, weddings, and corporate events in Pokhara.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsDummyData.map((event, index) => (
          <div
            key={event._id}
            className="bg-white rounded-xl border border-[#B9AFA1] shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={event.images?.[0] || assets.placeholderimage}
                alt={event.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {index % 2 === 0 && (
                <span className="absolute top-3 left-3 bg-[#D4AF37] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Popular
                </span>
              )}
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#2C2C2C] mb-1">
                {event.name}
              </h3>

              <div className="flex items-center gap-2 text-sm text-[#6B6B6B] mb-2">
                <img src={assets.locationicon} alt="location" className="w-4 h-4" />
                <span>{event.location}</span>
              </div>

              {/* Rating and Price */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1 text-[#D4AF37] font-semibold">
                  <img src={assets.staricon} alt="star" className="w-4 h-4" />
                  <span className="text-[#2C2C2C] font-medium">4.0</span>
                </div>
                <p className="text-[#2C2C2C] font-semibold">
                  Rs. {event.price.toLocaleString()}
                  <span className="text-sm text-[#6B6B6B] font-normal">/Day</span>
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

      {/* View All Button */}
      <div className="text-center mt-10">
        <Link
          to="/venues"
          className="px-6 py-3 rounded-full bg-[#1A1F36] text-white font-semibold hover:bg-[#D4AF37] hover:text-[#2C2C2C] transition-all"
        >
          View All Venues
        </Link>
      </div>
    </section>
  );
};

export default FeaturedVenues;
