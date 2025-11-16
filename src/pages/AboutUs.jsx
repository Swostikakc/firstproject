import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';

// Value Card Component
const ValueCard = ({ title, content, colors }) => (
  <div
    style={{ borderColor: colors.MUTED_ACCENT }}
    className="p-8 bg-white shadow-xl rounded-xl border hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 h-full"
  >
    <h3 style={{ color: colors.SECONDARY_ACCENT }} className="text-2xl font-bold mb-4">
      {title}
    </h3>
    <p style={{ color: colors.PRIMARY_TEXT }} className="text-sm leading-relaxed">
      {content}
    </p>
  </div>
);

// Color Constants
const COLORS = {
  PRIMARY_TEXT: '#2C2C2C',
  SECONDARY_ACCENT: '#D4AF37',
  ACCENT_BACKGROUND: '#F8F8F5',
  MUTED_ACCENT: '#B9AFA1',
  DARK_BG: '#1A1F36',
  LIGHT_TEXT: '#F8F8F5',
};

// Main About Us Component
const AboutUs = () => {
  const aboutContent = {
    title: "Pioneering Event Excellence in Nepal",
    mission:
      "Our mission is to seamlessly fuse modern infrastructure with authentic local culture to create immersive and impactful events. We aim to be more than a venue; we are dedicated to becoming the premier canvas for your biggest ideas, delivering absolute peace of mind and unforgettable experiences for every client.",
    story:
      "Founded by a team of visionary planners and local hospitality experts, Quick Event was established to meet the growing need for a world-class, multi-purpose venue in the heart of Pokhara. We pride ourselves on blending global event standards with the warmth and personalized service unique to Pokhara, ensuring every conference, wedding, or concert is executed with precision and flair. We believe great events are built on great partnerships and a shared vision of success.",
    values: [
      {
        title: "Curiosity",
        content:
          "We constantly seek new methods, technologies, and feedback to elevate our service model. We challenge the status quo, ensuring our infrastructure and event solutions are always at the cutting edge of the global hospitality industry.",
      },
      {
        title: "Stewardship",
        content:
          "We commit to ethical governance, sustainable practices, and thoughtful use of resources. We serve our community and environment by ensuring our operation not only meets its responsibilities but actively contributes to the cultural and economic vitality of the region.",
      },
      {
        title: "Precision",
        content:
          "We maintain an obsessive attention to detail, recognizing that excellence is in the particulars. From the initial booking to the final clean-up, every logistical step is planned with meticulous care to ensure flawless, stress-free execution.",
      },
    ],
  };

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
          <h1 className="text-5xl font-extrabold mb-2 uppercase">About Us</h1>
          <p className="text-sm">
            HOME /{' '}
            <span style={{ color: COLORS.SECONDARY_ACCENT, fontWeight: 600 }}>
              ABOUT US
            </span>
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="w-full h-80 lg:h-full overflow-hidden rounded-xl shadow-2xl">
            <img
              src={assets.aboutimg}  // ✅ Corrected line
              alt="Architectural Rendering of The Quick Event Venue"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Column: About Text */}
          <div className="space-y-6">
            <h2
              style={{ color: COLORS.SECONDARY_ACCENT }}
              className="text-4xl font-bold mb-4"
            >
              {aboutContent.title}
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              {aboutContent.story}
            </p>

            {/* Mission Box */}
            <div
              style={{ borderLeftColor: COLORS.SECONDARY_ACCENT }}
              className="border-l-4 pl-4 pt-2 pb-2 bg-white p-4 rounded-md shadow-md"
            >
              <h3
                style={{ color: COLORS.PRIMARY_TEXT }}
                className="text-xl font-bold mb-2"
              >
                Our Mission
              </h3>
              <p className="text-sm text-gray-600 italic">
                "{aboutContent.mission}"
              </p>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-extrabold text-center mb-12 uppercase">
            <span
              style={{
                borderBottom: `4px solid ${COLORS.SECONDARY_ACCENT}`,
              }}
              className="pb-1"
            >
              Our Guiding Values
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutContent.values.map((value, index) => (
              <ValueCard
                key={index}
                title={value.title}
                content={value.content}
                colors={COLORS}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
