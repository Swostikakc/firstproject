import React from "react";
import { assets } from "../assets/assets";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const EventCard = ({ name, location, price, images }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <img
        src={images[0] || assets.placeholderimage}
        alt={name}
        className="w-full h-52 object-cover group-hover:scale-110"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <FaMapMarkerAlt className="mr-1 text-blue-500" />
          {location}
        </div>
        <div className="flex items-center justify-between mt-3">
          <p className="text-blue-600 font-semibold">Rs. {price}</p>
          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition-all">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
