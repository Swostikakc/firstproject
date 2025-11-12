import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';

// Color Constants (same theme)
const COLORS = {
  PRIMARY_TEXT: '#2C2C2C',
  SECONDARY_ACCENT: '#D4AF37',
  ACCENT_BACKGROUND: '#F8F8F5',
  MUTED_ACCENT: '#B9AFA1',
  DARK_BG: '#1A1F36',
  LIGHT_TEXT: '#F8F8F5',
};

// Single Event Card
const EventCard = ({ image, title, description, colors }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
    <img src={image} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 style={{ color: colors.SECONDARY_ACCENT }} className="text-2xl font-bold mb-2">
        {title}
      </h3>
      <p style={{ color: colors.PRIMARY_TEXT }} className="text-sm leading-relaxed text-gray-700">
        {description}
      </p>
    </div>
  </div>
);

// Main Events Component
const Events = () => {
  const eventList = [
    {
      title: "Wedding Events",
      image: assets.weddingevent,
      description:
        "Celebrate love in the most beautiful way at Quick Event. Our elegant venues, customizable décor, and dedicated team ensure your wedding becomes an unforgettable celebration of your story.",
    },
    {
      title: "Corporate Events",
      image: assets.corporateevent,
      description:
        "From conferences and seminars to team-building retreats, we provide state-of-the-art facilities and seamless coordination for all your corporate needs.",
    },
    {
      title: "Live Concerts",
      image: assets.liveevent,
      description:
        "Experience electrifying performances with cutting-edge sound, stage, and lighting setups — making Quick Event Pokhara’s top live concert venue.",
    },
    {
      title: "Social Gatherings",
      image: assets.socialevent,
      description:
        "Whether it's a birthday, reunion, or private party, our adaptable spaces and catering options make every gathering a joyful memory.",
    },
    {
      title: "Exhibitions",
      image: assets.exhibitionevent,
      description:
        "Host exhibitions, trade shows, and cultural fairs with ample space and logistical support for both vendors and visitors.",
    },
    {
      title: "Other Events",
      image: assets.otherevent,
      description:
        "Quick Event provides flexible setups for any occasion — product launches, charity galas, or community programs — we’ve got you covered.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: COLORS.ACCENT_BACKGROUND,
        minHeight: '100vh',
        color: COLORS.PRIMARY_TEXT,
        fontFamily: 'Inter',
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: COLORS.DARK_BG,
          color: COLORS.LIGHT_TEXT,
          paddingTop: '10rem',
          paddingBottom: '5rem',
          textAlign: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-2 uppercase">Our Events</h1>
          <p className="text-sm">
            HOME /{' '}
            <span style={{ color: COLORS.SECONDARY_ACCENT, fontWeight: 600 }}>
              EVENTS
            </span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-6 md:px-12">
        <div className="text-center mb-16">
          <h2
            style={{ color: COLORS.SECONDARY_ACCENT }}
            className="text-4xl font-bold mb-4"
          >
            Creating Experiences that Last a Lifetime
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Whether you’re planning a grand wedding, a high-profile corporate meeting, or a lively concert,
            Quick Event provides the perfect venue, ambiance, and professional support to make your event a resounding success.
          </p>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventList.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              title={event.title}
              description={event.description}
              colors={COLORS}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Events;
