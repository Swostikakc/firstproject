import React from "react";
import { assets } from "../assets/assets";

const eventsList = [
  { id: 1, name: "Weddings", image: assets.weddingevent },
  { id: 2, name: "Social Occasions", image: assets.socialevent },
  { id: 3, name: "Exhibitions", image: assets.exhibitionevent },
  { id: 4, name: "Live Music Performances", image: assets.liveevent },
  { id: 5, name: "Corporate Events", image: assets.corporateevent },
  { id: 6, name: "Other Events", image: assets.otherevent },
];

const FeaturedEvents = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#F8F8F5]">
      {/* Title */}
      <div className="text-center mb-10">
        <p className="text-[#B9AFA1] font-semibold uppercase tracking-wide">
          Create Lasting Memories
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#2C2C2C] mt-2">
          Celebrate Every Occasion in Style
        </h2>
        <p className="text-[#6B6B6B] mt-3 max-w-2xl mx-auto">
          From elegant weddings to dynamic performances — find the perfect venue for every event type.
        </p>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {eventsList.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl border border-[#B9AFA1] shadow-sm hover:shadow-lg transition duration-300 text-center overflow-hidden group"
          >
            <div className="relative h-44 md:h-56 overflow-hidden">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 bg-white">
              <h3 className="text-lg font-semibold text-[#2C2C2C] mt-1 group-hover:text-[#D4AF37] transition-colors duration-300">
                {event.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedEvents;
