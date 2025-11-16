import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Venue from '../models/Venue.js';

dotenv.config();

const venuesData = [
  {
    name: 'Silver Plate Party Palace',
    location: 'Bastola Thar - 9, Pokhara',
    coordinates: { lat: 28.21600, lng: 83.99100 },
    images: ['silverplate.png'],
    price: 65000,
    capacity: 500,
    amenities: ['Parking', 'AC', 'Sound System', 'Stage', 'Lighting'],
    description: 'Beautiful venue for events',
    rating: 4.5,
    numberOfReviews: 25,
    isAvailable: true,
  },
  {
    name: 'White House Party Palace',
    location: 'Srijana Chowk, Pokhara-8',
    coordinates: { lat: 28.21450, lng: 83.99250 },
    images: ['whitehouse.png'],
    price: 55000,
    capacity: 400,
    amenities: ['Parking', 'AC', 'Sound System'],
    description: 'Elegant party palace in central Pokhara',
    rating: 4.2,
    numberOfReviews: 18,
    isAvailable: true,
  },
  {
    name: 'Bhamarkot Party Palace',
    location: 'Ram Bazaar / Milan Tol, Pokhara-10',
    coordinates: { lat: 28.20000, lng: 84.00139 },
    images: ['bhamarkot.png'],
    price: 58000,
    capacity: 450,
    amenities: ['Parking', 'AC', 'Sound System', 'Catering'],
    description: 'Spacious venue for large gatherings',
    rating: 4.3,
    numberOfReviews: 20,
    isAvailable: true,
  },
  {
    name: 'Durbarthok Banquet / Party Palace',
    location: 'Durbarthok / Darbarthok Marg (Newroad / Chipledhunga), Pokhara',
    coordinates: { lat: 28.21380, lng: 83.98950 },
    images: ['durbarthok.png'],
    price: 52000,
    capacity: 350,
    amenities: ['Parking', 'AC', 'Sound System'],
    description: 'Traditional banquet hall',
    rating: 4.0,
    numberOfReviews: 15,
    isAvailable: true,
  },
  {
    name: 'Shuvam (Shubham) Party Palace',
    location: 'Lekhnath-7 (Talchowk / Begnas area), Pokhara',
    coordinates: { lat: 28.16318, lng: 84.05937 },
    images: ['shuvam.png'],
    price: 50000,
    capacity: 300,
    amenities: ['Parking', 'AC', 'Sound System', 'Garden'],
    description: 'Scenic venue near Begnas Lake',
    rating: 4.1,
    numberOfReviews: 12,
    isAvailable: true,
  },
  {
    name: 'Namaste Party Palace',
    location: 'Sundari Bazar / Budibazar area, Pokhara',
    coordinates: { lat: 28.20980, lng: 83.98890 },
    images: ['namaste.png'],
    price: 48000,
    capacity: 280,
    amenities: ['Parking', 'AC', 'Sound System'],
    description: 'Cozy venue for intimate gatherings',
    rating: 4.0,
    numberOfReviews: 10,
    isAvailable: true,
  },
  {
    name: 'Busy Bee Resort (Event Hall)',
    location: 'Street 15, Lakeside Rd, Pokhara',
    coordinates: { lat: 28.20500, lng: 83.98100 },
    images: ['busybee.png'],
    price: 70000,
    capacity: 600,
    amenities: ['Parking', 'AC', 'Sound System', 'Stage', 'Lighting', 'Catering', 'Accommodation'],
    description: 'Premium resort with event facilities',
    rating: 4.7,
    numberOfReviews: 35,
    isAvailable: true,
  },
  {
    name: 'Bindabasini Party Palace',
    location: 'Bindabasini (Lakeside area), Pokhara',
    coordinates: { lat: 28.21300, lng: 83.98350 },
    images: ['bindhabasini.png'],
    price: 56000,
    capacity: 400,
    amenities: ['Parking', 'AC', 'Sound System', 'Temple View'],
    description: 'Venue with beautiful temple view',
    rating: 4.4,
    numberOfReviews: 22,
    isAvailable: true,
  },
  {
    name: 'Himalayan Party Hall',
    location: 'Lakeside / South Lakeside area, Pokhara',
    coordinates: { lat: 28.20650, lng: 83.98270 },
    images: ['himalayan.png'],
    price: 75000,
    capacity: 700,
    amenities: ['Parking', 'AC', 'Sound System', 'Stage', 'Lighting', 'Mountain View'],
    description: 'Luxury hall with mountain views',
    rating: 4.6,
    numberOfReviews: 30,
    isAvailable: true,
  },
  {
    name: 'Galaxy Party Palace (Galaxy Banquet)',
    location: 'Birauta-17 / Birauta area, Pokhara',
    coordinates: { lat: 28.18861, lng: 83.96944 },
    images: ['galaxy.png'],
    price: 60000,
    capacity: 500,
    amenities: ['Parking', 'AC', 'Sound System', 'Stage', 'Lighting'],
    description: 'Modern banquet facility',
    rating: 4.3,
    numberOfReviews: 19,
    isAvailable: true,
  },
  {
    name: 'Pokhara Kantipur Party Palace',
    location: 'Buddha Chowk / central Pokhara',
    coordinates: { lat: 28.20444, lng: 83.99500 },
    images: ['kantipur.png'],
    price: 58000,
    capacity: 450,
    amenities: ['Parking', 'AC', 'Sound System', 'Central Location'],
    description: 'Centrally located party palace',
    rating: 4.2,
    numberOfReviews: 17,
    isAvailable: true,
  },
  {
    name: 'Baral Party Palace & Catering',
    location: 'Birauta / Pumdikot area (Lekhnath), Pokhara',
    coordinates: { lat: 28.18750, lng: 83.97000 },
    images: ['baral.png'],
    price: 52000,
    capacity: 350,
    amenities: ['Parking', 'AC', 'Sound System', 'Catering Services'],
    description: 'Party palace with in-house catering',
    rating: 4.1,
    numberOfReviews: 14,
    isAvailable: true,
  },
  {
    name: 'Central Villa (Event Hall)',
    location: 'Central Villa, Pokhara (city center area)',
    coordinates: { lat: 28.21350, lng: 83.98500 },
    images: ['centralvilla.png'],
    price: 64000,
    capacity: 550,
    amenities: ['Parking', 'AC', 'Sound System', 'Stage', 'Lighting', 'VIP Lounge'],
    description: 'Premium event hall in city center',
    rating: 4.5,
    numberOfReviews: 28,
    isAvailable: true,
  },
];

const seedVenues = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/eventcenter');
    console.log('Connected to MongoDB');

    // Clear existing venues
    await Venue.deleteMany({});
    console.log('Cleared existing venues');

    // Insert new venues
    const venues = await Venue.insertMany(venuesData);
    console.log(`Seeded ${venues.length} venues successfully`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding venues:', error);
    process.exit(1);
  }
};

seedVenues();

