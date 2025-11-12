import React from "react";
import Hero from "../components/Hero";
import FeaturedVenues from "../components/FeaturedVenues";
import FeaturedEvents from "../components/FeaturedEvents";
import Testimonials from "../components/Testimonials";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import LocationMap from "../components/LocationMap";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedVenues />
      <FeaturedEvents />
      <Testimonials />
      <Experience />
      <Footer />
      <LocationMap />
    </>
  );
};

export default Home;
